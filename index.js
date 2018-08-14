const recordType = Symbol("@@record");
const keyProp = Symbol("@@key");
const isPlainObject = val =>
  !!val && typeof val === "object" && val.constructor === Object;

function createRecord(...items) {
  const result = [];
  for (let item of items) {
    if (item[recordType] || item.next) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }

  result[recordType] = true;

  return result;
}

function* join(leftTable, ...rightTable) {
  if (!rightTable.length) {
    for (let record of leftTable) {
      yield createRecord(record);
    }
    return;
  }
  if (rightTable.length > 1) {
    rightTable = join(...rightTable);
  } else {
    rightTable = rightTable[0];
  }
  for (let leftRecord of leftTable) {
    for (let rightRecord of rightTable) {
      yield createRecord(leftRecord, rightRecord);
    }
  }
}

export function from(...sources) {
  return function() {
    return join(...sources);
  };
}

export function where(predicate) {
  return function*(items) {
    let index = 0;
    for (let item of items) {
      if (predicate(...item, index)) {
        yield item;
      }
      index++;
    }
  };
}

function createFieldSelector(field) {
  if (field instanceof Function) return field;
  return function(item) {
    return item[field];
  };
}

export function orderBy(...args) {
  const orders = [];
  while (args.length) {
    const selector = args.shift();
    if (selector instanceof Array) {
      orders.push({
        selector: selector[0],
        direction: selector[1]
      });
    } else {
      orders.push({
        selector: createFieldSelector(selector),
        direction: args.shift()
      });
    }
  }
  return function*(items) {
    const sortedItems = [...items];
    sortedItems.sort(function(a, b) {
      for (let index = 0; index < orders.length; index++) {
        const aValue = orders[index].selector(...a);
        const bValue = orders[index].selector(...b);
        if (aValue === bValue) {
          continue;
        }
        return (
          (orders[index].direction || orders[index].direction === "desc"
            ? -1
            : 1) * (aValue > bValue ? 1 : -1)
        );
      }
    });

    for (let item of sortedItems) {
      yield item;
    }
  };
}

export function select(selector, ...itemSelectors) {
  if (!selector) {
    selector = x => x;
  }
  return function*(items) {
    let index = 0;
    for (let item of items) {
      yield selector(...item, ...itemSelectors, index);
      index++;
    }
  };
}

export function selectMany(selector, ...itemSelectors) {
  if (!selector) {
    selector = x => x;
  }
  return function*(items) {
    let index = 0;
    for (let item of items) {
      const result = selector(...item, ...itemSelectors, index);
      if (result instanceof Array || result.next || result[Symbol.iterator]) {
        for (let resultItem of result) {
          yield resultItem;
        }
      } else {
        yield result;
      }
      index++;
    }
  };
}

export function query(...clauses) {
  function iterator() {
    return clauses.reduce((result, clause) => clause(result), []);
  }

  return {
    [Symbol.iterator]: iterator,
    first() {
      for (let item of iterator()) {
        return item;
      }
    },
    last() {
      let last;
      for (let item of iterator()) {
        last = item;
      }
      return last;
    },
    count() {
      let count = 0;
      for (let item of iterator()) {
        count++;
      }
      return count;
    },
    get(index) {
      if (!arguments.length) {
        return [...iterator()];
      }

      for (let item of iterator()) {
        if (!index) return item;
        index--;
      }
    },
    distinct() {},
    any() {},
    all() {},
    average() {},
    contains() {},
    except() {},
    intersect() {},
    max() {},
    min() {},
    prepend() {},
    append() {},
    union() {},
    reduce() {}
  };
}

export function skip(countOrPredicate) {
  return function*(items) {
    if (countOrPredicate instanceof Function) {
      let valid = false;
      let index = 0;
      for (let item of items) {
        if (!valid && countOrPredicate(...item, index)) {
          valid = true;
        }
        if (valid) {
          yield item;
        }
        index++;
      }
    } else {
      let count = 0;
      for (let item of items) {
        if (count >= countOrPredicate) {
          yield item;
        }
        count++;
      }
    }
  };
}

export function take(countOrPredicate) {
  return function*(items) {
    if (countOrPredicate instanceof Function) {
      let index = 0;
      for (let item of items) {
        if (!countOrPredicate(...item, index)) {
          break;
        }
        yield item;
        index++;
      }
    } else {
      let count = 0;
      for (let item of items) {
        if (count >= countOrPredicate) {
          break;
        }
        yield item;
        count++;
      }
    }
  };
}

function serializeKey(key, keys) {
  return Object.keys(key)
    .map(prop => {
      let value = key[prop];
      let keyId = keys.get(value);
      if (!keyId) {
        if (keys.__uniqueId === undefined) {
          keys.__uniqueId = 1;
        }
        keyId = keys.__uniqueId++;
        keys.set(value, keyId);
      }
      return keyId;
    })
    .join("-");
}

export function groupBy(selector, having) {
  return function*(items) {
    const keys = {};
    let resultSet = [];
    for (let item of items) {
      let key = selector(...item);
      const originalKey = key;
      if (key instanceof Date) {
        key = key.getTime();
      }

      let resultItem;
      // multiple key
      if (key instanceof Array || isPlainObject(key)) {
        // serialize key
        key = serializeKey(key, keys);
      }
      resultItem = keys[key];
      if (!resultItem) {
        resultItem = [];
        resultSet.push(resultItem);
        resultItem[keyProp] = originalKey;
        keys[key] = resultItem;
      }
      resultItem.push(item);
    }

    if (having) {
      resultSet = resultSet.filter(resultItem =>
        having(resultItem[keyProp], resultItem)
      );
    }

    for (let resultItem of resultSet) {
      yield createRecord(resultItem[keyProp], resultItem);
    }
  };
}

export default query;