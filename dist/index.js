"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.from = from;
exports.where = where;
exports.orderBy = orderBy;
exports.select = select;
exports.selectMany = selectMany;
exports.query = query;
exports.skip = skip;
exports.take = take;
exports.groupBy = groupBy;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(join);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var recordType = Symbol("@@record");
var keyProp = Symbol("@@key");
var isPlainObject = function isPlainObject(val) {
  return !!val && (typeof val === "undefined" ? "undefined" : _typeof(val)) === "object" && val.constructor === Object;
};

function createRecord() {
  var result = [];

  for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item[recordType] || item.next) {
        result.push.apply(result, _toConsumableArray(item));
      } else {
        result.push(item);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  result[recordType] = true;

  return result;
}

function join(leftTable) {
  for (var _len2 = arguments.length, rightTable = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rightTable[_key2 - 1] = arguments[_key2];
  }

  var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, record, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, leftRecord, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, rightRecord;

  return regeneratorRuntime.wrap(function join$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (rightTable.length) {
            _context.next = 28;
            break;
          }

          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 4;
          _iterator2 = leftTable[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context.next = 13;
            break;
          }

          record = _step2.value;
          _context.next = 10;
          return createRecord(record);

        case 10:
          _iteratorNormalCompletion2 = true;
          _context.next = 6;
          break;

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](4);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t0;

        case 19:
          _context.prev = 19;
          _context.prev = 20;

          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }

        case 22:
          _context.prev = 22;

          if (!_didIteratorError2) {
            _context.next = 25;
            break;
          }

          throw _iteratorError2;

        case 25:
          return _context.finish(22);

        case 26:
          return _context.finish(19);

        case 27:
          return _context.abrupt("return");

        case 28:
          if (rightTable.length > 1) {
            rightTable = join.apply(undefined, _toConsumableArray(rightTable));
          } else {
            rightTable = rightTable[0];
          }
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context.prev = 32;
          _iterator3 = leftTable[Symbol.iterator]();

        case 34:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context.next = 65;
            break;
          }

          leftRecord = _step3.value;
          _iteratorNormalCompletion4 = true;
          _didIteratorError4 = false;
          _iteratorError4 = undefined;
          _context.prev = 39;
          _iterator4 = rightTable[Symbol.iterator]();

        case 41:
          if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
            _context.next = 48;
            break;
          }

          rightRecord = _step4.value;
          _context.next = 45;
          return createRecord(leftRecord, rightRecord);

        case 45:
          _iteratorNormalCompletion4 = true;
          _context.next = 41;
          break;

        case 48:
          _context.next = 54;
          break;

        case 50:
          _context.prev = 50;
          _context.t1 = _context["catch"](39);
          _didIteratorError4 = true;
          _iteratorError4 = _context.t1;

        case 54:
          _context.prev = 54;
          _context.prev = 55;

          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }

        case 57:
          _context.prev = 57;

          if (!_didIteratorError4) {
            _context.next = 60;
            break;
          }

          throw _iteratorError4;

        case 60:
          return _context.finish(57);

        case 61:
          return _context.finish(54);

        case 62:
          _iteratorNormalCompletion3 = true;
          _context.next = 34;
          break;

        case 65:
          _context.next = 71;
          break;

        case 67:
          _context.prev = 67;
          _context.t2 = _context["catch"](32);
          _didIteratorError3 = true;
          _iteratorError3 = _context.t2;

        case 71:
          _context.prev = 71;
          _context.prev = 72;

          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }

        case 74:
          _context.prev = 74;

          if (!_didIteratorError3) {
            _context.next = 77;
            break;
          }

          throw _iteratorError3;

        case 77:
          return _context.finish(74);

        case 78:
          return _context.finish(71);

        case 79:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[4, 15, 19, 27], [20,, 22, 26], [32, 67, 71, 79], [39, 50, 54, 62], [55,, 57, 61], [72,, 74, 78]]);
}

function from() {
  for (var _len3 = arguments.length, sources = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    sources[_key3] = arguments[_key3];
  }

  return function () {
    return join.apply(undefined, sources);
  };
}

function where(predicate) {
  return (/*#__PURE__*/regeneratorRuntime.mark(function _callee(items) {
      var index, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, item;

      return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              index = 0;
              _iteratorNormalCompletion5 = true;
              _didIteratorError5 = false;
              _iteratorError5 = undefined;
              _context2.prev = 4;
              _iterator5 = items[Symbol.iterator]();

            case 6:
              if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                _context2.next = 15;
                break;
              }

              item = _step5.value;

              if (!predicate.apply(undefined, _toConsumableArray(item).concat([index]))) {
                _context2.next = 11;
                break;
              }

              _context2.next = 11;
              return item;

            case 11:
              index++;

            case 12:
              _iteratorNormalCompletion5 = true;
              _context2.next = 6;
              break;

            case 15:
              _context2.next = 21;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](4);
              _didIteratorError5 = true;
              _iteratorError5 = _context2.t0;

            case 21:
              _context2.prev = 21;
              _context2.prev = 22;

              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }

            case 24:
              _context2.prev = 24;

              if (!_didIteratorError5) {
                _context2.next = 27;
                break;
              }

              throw _iteratorError5;

            case 27:
              return _context2.finish(24);

            case 28:
              return _context2.finish(21);

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee, this, [[4, 17, 21, 29], [22,, 24, 28]]);
    })
  );
}

function createFieldSelector(field) {
  if (field instanceof Function) return field;
  return function (item) {
    return item[field];
  };
}

function orderBy() {
  var orders = [];

  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  while (args.length) {
    var selector = args.shift();
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
  return (/*#__PURE__*/regeneratorRuntime.mark(function _callee2(items) {
      var sortedItems, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, item;

      return regeneratorRuntime.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sortedItems = [].concat(_toConsumableArray(items));

              sortedItems.sort(function (a, b) {
                for (var index = 0; index < orders.length; index++) {
                  var _orders$index, _orders$index2;

                  var aValue = (_orders$index = orders[index]).selector.apply(_orders$index, _toConsumableArray(a));
                  var bValue = (_orders$index2 = orders[index]).selector.apply(_orders$index2, _toConsumableArray(b));
                  if (aValue === bValue) {
                    continue;
                  }
                  return (orders[index].direction || orders[index].direction === "desc" ? -1 : 1) * (aValue > bValue ? 1 : -1);
                }
              });

              _iteratorNormalCompletion6 = true;
              _didIteratorError6 = false;
              _iteratorError6 = undefined;
              _context3.prev = 5;
              _iterator6 = sortedItems[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                _context3.next = 14;
                break;
              }

              item = _step6.value;
              _context3.next = 11;
              return item;

            case 11:
              _iteratorNormalCompletion6 = true;
              _context3.next = 7;
              break;

            case 14:
              _context3.next = 20;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](5);
              _didIteratorError6 = true;
              _iteratorError6 = _context3.t0;

            case 20:
              _context3.prev = 20;
              _context3.prev = 21;

              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }

            case 23:
              _context3.prev = 23;

              if (!_didIteratorError6) {
                _context3.next = 26;
                break;
              }

              throw _iteratorError6;

            case 26:
              return _context3.finish(23);

            case 27:
              return _context3.finish(20);

            case 28:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2, this, [[5, 16, 20, 28], [21,, 23, 27]]);
    })
  );
}

function select(selector) {
  for (var _len5 = arguments.length, itemSelectors = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    itemSelectors[_key5 - 1] = arguments[_key5];
  }

  if (!selector) {
    selector = function selector(x) {
      return x;
    };
  }
  return (/*#__PURE__*/regeneratorRuntime.mark(function _callee3(items) {
      var index, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, item;

      return regeneratorRuntime.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              index = 0;
              _iteratorNormalCompletion7 = true;
              _didIteratorError7 = false;
              _iteratorError7 = undefined;
              _context4.prev = 4;
              _iterator7 = items[Symbol.iterator]();

            case 6:
              if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                _context4.next = 14;
                break;
              }

              item = _step7.value;
              _context4.next = 10;
              return selector.apply(undefined, _toConsumableArray(item).concat(itemSelectors, [index]));

            case 10:
              index++;

            case 11:
              _iteratorNormalCompletion7 = true;
              _context4.next = 6;
              break;

            case 14:
              _context4.next = 20;
              break;

            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](4);
              _didIteratorError7 = true;
              _iteratorError7 = _context4.t0;

            case 20:
              _context4.prev = 20;
              _context4.prev = 21;

              if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
              }

            case 23:
              _context4.prev = 23;

              if (!_didIteratorError7) {
                _context4.next = 26;
                break;
              }

              throw _iteratorError7;

            case 26:
              return _context4.finish(23);

            case 27:
              return _context4.finish(20);

            case 28:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3, this, [[4, 16, 20, 28], [21,, 23, 27]]);
    })
  );
}

function selectMany(selector) {
  for (var _len6 = arguments.length, itemSelectors = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    itemSelectors[_key6 - 1] = arguments[_key6];
  }

  if (!selector) {
    selector = function selector(x) {
      return x;
    };
  }
  return (/*#__PURE__*/regeneratorRuntime.mark(function _callee4(items) {
      var index, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, item, result, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, resultItem;

      return regeneratorRuntime.wrap(function _callee4$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              index = 0;
              _iteratorNormalCompletion8 = true;
              _didIteratorError8 = false;
              _iteratorError8 = undefined;
              _context5.prev = 4;
              _iterator8 = items[Symbol.iterator]();

            case 6:
              if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                _context5.next = 44;
                break;
              }

              item = _step8.value;
              result = selector.apply(undefined, _toConsumableArray(item).concat(itemSelectors, [index]));

              if (!(result instanceof Array || result.next || result[Symbol.iterator])) {
                _context5.next = 38;
                break;
              }

              _iteratorNormalCompletion9 = true;
              _didIteratorError9 = false;
              _iteratorError9 = undefined;
              _context5.prev = 13;
              _iterator9 = result[Symbol.iterator]();

            case 15:
              if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
                _context5.next = 22;
                break;
              }

              resultItem = _step9.value;
              _context5.next = 19;
              return resultItem;

            case 19:
              _iteratorNormalCompletion9 = true;
              _context5.next = 15;
              break;

            case 22:
              _context5.next = 28;
              break;

            case 24:
              _context5.prev = 24;
              _context5.t0 = _context5["catch"](13);
              _didIteratorError9 = true;
              _iteratorError9 = _context5.t0;

            case 28:
              _context5.prev = 28;
              _context5.prev = 29;

              if (!_iteratorNormalCompletion9 && _iterator9.return) {
                _iterator9.return();
              }

            case 31:
              _context5.prev = 31;

              if (!_didIteratorError9) {
                _context5.next = 34;
                break;
              }

              throw _iteratorError9;

            case 34:
              return _context5.finish(31);

            case 35:
              return _context5.finish(28);

            case 36:
              _context5.next = 40;
              break;

            case 38:
              _context5.next = 40;
              return result;

            case 40:
              index++;

            case 41:
              _iteratorNormalCompletion8 = true;
              _context5.next = 6;
              break;

            case 44:
              _context5.next = 50;
              break;

            case 46:
              _context5.prev = 46;
              _context5.t1 = _context5["catch"](4);
              _didIteratorError8 = true;
              _iteratorError8 = _context5.t1;

            case 50:
              _context5.prev = 50;
              _context5.prev = 51;

              if (!_iteratorNormalCompletion8 && _iterator8.return) {
                _iterator8.return();
              }

            case 53:
              _context5.prev = 53;

              if (!_didIteratorError8) {
                _context5.next = 56;
                break;
              }

              throw _iteratorError8;

            case 56:
              return _context5.finish(53);

            case 57:
              return _context5.finish(50);

            case 58:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee4, this, [[4, 46, 50, 58], [13, 24, 28, 36], [29,, 31, 35], [51,, 53, 57]]);
    })
  );
}

function query() {
  var _ref;

  for (var _len7 = arguments.length, clauses = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    clauses[_key7] = arguments[_key7];
  }

  function iterator() {
    return clauses.reduce(function (result, clause) {
      return clause(result);
    }, []);
  }

  return _ref = {}, _defineProperty(_ref, Symbol.iterator, iterator), _defineProperty(_ref, "first", function first() {
    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {
      for (var _iterator10 = iterator()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
        var item = _step10.value;

        return item;
      }
    } catch (err) {
      _didIteratorError10 = true;
      _iteratorError10 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion10 && _iterator10.return) {
          _iterator10.return();
        }
      } finally {
        if (_didIteratorError10) {
          throw _iteratorError10;
        }
      }
    }
  }), _defineProperty(_ref, "last", function last() {
    var last = void 0;
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
      for (var _iterator11 = iterator()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
        var item = _step11.value;

        last = item;
      }
    } catch (err) {
      _didIteratorError11 = true;
      _iteratorError11 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion11 && _iterator11.return) {
          _iterator11.return();
        }
      } finally {
        if (_didIteratorError11) {
          throw _iteratorError11;
        }
      }
    }

    return last;
  }), _defineProperty(_ref, "count", function count() {
    var count = 0;
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = iterator()[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var item = _step12.value;

        count++;
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12.return) {
          _iterator12.return();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }

    return count;
  }), _defineProperty(_ref, "get", function get(index) {
    if (!arguments.length) {
      return [].concat(_toConsumableArray(iterator()));
    }

    var _iteratorNormalCompletion13 = true;
    var _didIteratorError13 = false;
    var _iteratorError13 = undefined;

    try {
      for (var _iterator13 = iterator()[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
        var item = _step13.value;

        if (!index) return item;
        index--;
      }
    } catch (err) {
      _didIteratorError13 = true;
      _iteratorError13 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion13 && _iterator13.return) {
          _iterator13.return();
        }
      } finally {
        if (_didIteratorError13) {
          throw _iteratorError13;
        }
      }
    }
  }), _defineProperty(_ref, "distinct", function distinct() {}), _defineProperty(_ref, "any", function any() {}), _defineProperty(_ref, "all", function all() {}), _defineProperty(_ref, "average", function average() {}), _defineProperty(_ref, "contains", function contains() {}), _defineProperty(_ref, "except", function except() {}), _defineProperty(_ref, "intersect", function intersect() {}), _defineProperty(_ref, "max", function max() {}), _defineProperty(_ref, "min", function min() {}), _defineProperty(_ref, "prepend", function prepend() {}), _defineProperty(_ref, "append", function append() {}), _defineProperty(_ref, "union", function union() {}), _defineProperty(_ref, "reduce", function reduce() {}), _ref;
}

function skip(countOrPredicate) {
  return (/*#__PURE__*/regeneratorRuntime.mark(function _callee5(items) {
      var valid, index, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, item, count, _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, _item;

      return regeneratorRuntime.wrap(function _callee5$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(countOrPredicate instanceof Function)) {
                _context6.next = 34;
                break;
              }

              valid = false;
              index = 0;
              _iteratorNormalCompletion14 = true;
              _didIteratorError14 = false;
              _iteratorError14 = undefined;
              _context6.prev = 6;
              _iterator14 = items[Symbol.iterator]();

            case 8:
              if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
                _context6.next = 18;
                break;
              }

              item = _step14.value;

              if (!valid && countOrPredicate.apply(undefined, _toConsumableArray(item).concat([index]))) {
                valid = true;
              }

              if (!valid) {
                _context6.next = 14;
                break;
              }

              _context6.next = 14;
              return item;

            case 14:
              index++;

            case 15:
              _iteratorNormalCompletion14 = true;
              _context6.next = 8;
              break;

            case 18:
              _context6.next = 24;
              break;

            case 20:
              _context6.prev = 20;
              _context6.t0 = _context6["catch"](6);
              _didIteratorError14 = true;
              _iteratorError14 = _context6.t0;

            case 24:
              _context6.prev = 24;
              _context6.prev = 25;

              if (!_iteratorNormalCompletion14 && _iterator14.return) {
                _iterator14.return();
              }

            case 27:
              _context6.prev = 27;

              if (!_didIteratorError14) {
                _context6.next = 30;
                break;
              }

              throw _iteratorError14;

            case 30:
              return _context6.finish(27);

            case 31:
              return _context6.finish(24);

            case 32:
              _context6.next = 63;
              break;

            case 34:
              count = 0;
              _iteratorNormalCompletion15 = true;
              _didIteratorError15 = false;
              _iteratorError15 = undefined;
              _context6.prev = 38;
              _iterator15 = items[Symbol.iterator]();

            case 40:
              if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
                _context6.next = 49;
                break;
              }

              _item = _step15.value;

              if (!(count >= countOrPredicate)) {
                _context6.next = 45;
                break;
              }

              _context6.next = 45;
              return _item;

            case 45:
              count++;

            case 46:
              _iteratorNormalCompletion15 = true;
              _context6.next = 40;
              break;

            case 49:
              _context6.next = 55;
              break;

            case 51:
              _context6.prev = 51;
              _context6.t1 = _context6["catch"](38);
              _didIteratorError15 = true;
              _iteratorError15 = _context6.t1;

            case 55:
              _context6.prev = 55;
              _context6.prev = 56;

              if (!_iteratorNormalCompletion15 && _iterator15.return) {
                _iterator15.return();
              }

            case 58:
              _context6.prev = 58;

              if (!_didIteratorError15) {
                _context6.next = 61;
                break;
              }

              throw _iteratorError15;

            case 61:
              return _context6.finish(58);

            case 62:
              return _context6.finish(55);

            case 63:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee5, this, [[6, 20, 24, 32], [25,, 27, 31], [38, 51, 55, 63], [56,, 58, 62]]);
    })
  );
}

function take(countOrPredicate) {
  return (/*#__PURE__*/regeneratorRuntime.mark(function _callee6(items) {
      var index, _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, item, count, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _item2;

      return regeneratorRuntime.wrap(function _callee6$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(countOrPredicate instanceof Function)) {
                _context7.next = 33;
                break;
              }

              index = 0;
              _iteratorNormalCompletion16 = true;
              _didIteratorError16 = false;
              _iteratorError16 = undefined;
              _context7.prev = 5;
              _iterator16 = items[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done) {
                _context7.next = 17;
                break;
              }

              item = _step16.value;

              if (countOrPredicate.apply(undefined, _toConsumableArray(item).concat([index]))) {
                _context7.next = 11;
                break;
              }

              return _context7.abrupt("break", 17);

            case 11:
              _context7.next = 13;
              return item;

            case 13:
              index++;

            case 14:
              _iteratorNormalCompletion16 = true;
              _context7.next = 7;
              break;

            case 17:
              _context7.next = 23;
              break;

            case 19:
              _context7.prev = 19;
              _context7.t0 = _context7["catch"](5);
              _didIteratorError16 = true;
              _iteratorError16 = _context7.t0;

            case 23:
              _context7.prev = 23;
              _context7.prev = 24;

              if (!_iteratorNormalCompletion16 && _iterator16.return) {
                _iterator16.return();
              }

            case 26:
              _context7.prev = 26;

              if (!_didIteratorError16) {
                _context7.next = 29;
                break;
              }

              throw _iteratorError16;

            case 29:
              return _context7.finish(26);

            case 30:
              return _context7.finish(23);

            case 31:
              _context7.next = 63;
              break;

            case 33:
              count = 0;
              _iteratorNormalCompletion17 = true;
              _didIteratorError17 = false;
              _iteratorError17 = undefined;
              _context7.prev = 37;
              _iterator17 = items[Symbol.iterator]();

            case 39:
              if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
                _context7.next = 49;
                break;
              }

              _item2 = _step17.value;

              if (!(count >= countOrPredicate)) {
                _context7.next = 43;
                break;
              }

              return _context7.abrupt("break", 49);

            case 43:
              _context7.next = 45;
              return _item2;

            case 45:
              count++;

            case 46:
              _iteratorNormalCompletion17 = true;
              _context7.next = 39;
              break;

            case 49:
              _context7.next = 55;
              break;

            case 51:
              _context7.prev = 51;
              _context7.t1 = _context7["catch"](37);
              _didIteratorError17 = true;
              _iteratorError17 = _context7.t1;

            case 55:
              _context7.prev = 55;
              _context7.prev = 56;

              if (!_iteratorNormalCompletion17 && _iterator17.return) {
                _iterator17.return();
              }

            case 58:
              _context7.prev = 58;

              if (!_didIteratorError17) {
                _context7.next = 61;
                break;
              }

              throw _iteratorError17;

            case 61:
              return _context7.finish(58);

            case 62:
              return _context7.finish(55);

            case 63:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee6, this, [[5, 19, 23, 31], [24,, 26, 30], [37, 51, 55, 63], [56,, 58, 62]]);
    })
  );
}

function serializeKey(key, keys) {
  return Object.keys(key).map(function (prop) {
    var value = key[prop];
    var keyId = keys.get(value);
    if (!keyId) {
      if (keys.__uniqueId === undefined) {
        keys.__uniqueId = 1;
      }
      keyId = keys.__uniqueId++;
      keys.set(value, keyId);
    }
    return keyId;
  }).join("-");
}

function groupBy(selector, having) {
  return (/*#__PURE__*/regeneratorRuntime.mark(function _callee7(items) {
      var keys, resultSet, _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, item, key, originalKey, resultItem, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19;

      return regeneratorRuntime.wrap(function _callee7$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              keys = {};
              resultSet = [];
              _iteratorNormalCompletion18 = true;
              _didIteratorError18 = false;
              _iteratorError18 = undefined;
              _context8.prev = 5;

              for (_iterator18 = items[Symbol.iterator](); !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                item = _step18.value;
                key = selector.apply(undefined, _toConsumableArray(item));
                originalKey = key;

                if (key instanceof Date) {
                  key = key.getTime();
                }

                resultItem = void 0;
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

              _context8.next = 13;
              break;

            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](5);
              _didIteratorError18 = true;
              _iteratorError18 = _context8.t0;

            case 13:
              _context8.prev = 13;
              _context8.prev = 14;

              if (!_iteratorNormalCompletion18 && _iterator18.return) {
                _iterator18.return();
              }

            case 16:
              _context8.prev = 16;

              if (!_didIteratorError18) {
                _context8.next = 19;
                break;
              }

              throw _iteratorError18;

            case 19:
              return _context8.finish(16);

            case 20:
              return _context8.finish(13);

            case 21:
              if (having) {
                resultSet = resultSet.filter(function (resultItem) {
                  return having(resultItem[keyProp], resultItem);
                });
              }

              _iteratorNormalCompletion19 = true;
              _didIteratorError19 = false;
              _iteratorError19 = undefined;
              _context8.prev = 25;
              _iterator19 = resultSet[Symbol.iterator]();

            case 27:
              if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
                _context8.next = 34;
                break;
              }

              resultItem = _step19.value;
              _context8.next = 31;
              return createRecord(resultItem[keyProp], resultItem);

            case 31:
              _iteratorNormalCompletion19 = true;
              _context8.next = 27;
              break;

            case 34:
              _context8.next = 40;
              break;

            case 36:
              _context8.prev = 36;
              _context8.t1 = _context8["catch"](25);
              _didIteratorError19 = true;
              _iteratorError19 = _context8.t1;

            case 40:
              _context8.prev = 40;
              _context8.prev = 41;

              if (!_iteratorNormalCompletion19 && _iterator19.return) {
                _iterator19.return();
              }

            case 43:
              _context8.prev = 43;

              if (!_didIteratorError19) {
                _context8.next = 46;
                break;
              }

              throw _iteratorError19;

            case 46:
              return _context8.finish(43);

            case 47:
              return _context8.finish(40);

            case 48:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee7, this, [[5, 9, 13, 21], [14,, 16, 20], [25, 36, 40, 48], [41,, 43, 47]]);
    })
  );
}

exports.default = query;
//# sourceMappingURL=index.js.map