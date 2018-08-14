"use strict";

var _require = require("./index"),
    query = _require.query,
    where = _require.where,
    groupBy = _require.groupBy,
    orderBy = _require.orderBy,
    select = _require.select,
    selectMany = _require.selectMany,
    from = _require.from;

var orders = [{
  id: 10308,
  customerId: 2,
  orderDate: "1996-09-18"
}, {
  id: 10309,
  customerId: 1,
  orderDate: "1996-09-19"
}, {
  id: 10310,
  customerId: 3,
  orderDate: "1996-09-20"
}, {
  id: 10311,
  customerId: 3,
  orderDate: "1996-09-20"
}, {
  id: 10312,
  customerId: 2,
  orderDate: "1996-09-20"
}];

var customers = [{ id: 1, name: "Alfreds Futterkiste" }, { id: 2, name: "Ana Trujillo Emparedados y helados" }, { id: 3, name: "Antonio Moreno Taquería" }];

test("\nSELECT  c.id, c.name\nFROM    customers c\nORDER BY\n        c.name DESC, c.id ASC\n", function () {
  var q = query(from(customers), orderBy(
  // customer.name DESC
  function (customer) {
    return customer.name;
  }, true,
  // customer.id ASC
  function (customer) {
    return customer.id;
  }, false), select(function (customer) {
    return {
      id: customer.id,
      name: customer.name
    };
  }));
  var result = q.get();

  expect(result).toEqual([{ id: 3, name: "Antonio Moreno Taquería" }, { id: 2, name: "Ana Trujillo Emparedados y helados" }, { id: 1, name: "Alfreds Futterkiste" }]);
});

test("\nSELECT  o.id\nFROM    orders o\nWHERE   o.orderDate <= '1996-09-19'\n", function () {
  var q = query(from(orders), where(function (order) {
    return order.orderDate <= "1996-09-19";
  }), select(function (order) {
    return order.id;
  }));
  var result = q.get();

  expect(result).toEqual([10308, 10309]);
});

test("\nSELECT  o.customerId, COUNT(o.id) AS count\nFROM    orders o\nGROUP BY\n        o.customerId\nHAVING  COUNT(o.id) > 1\n", function () {
  var q = query(from(orders), groupBy(
  // key selector
  function (order) {
    return order.customerId;
  },
  // having
  function (key, items) {
    return items.length > 1;
  }), select(function (key, items) {
    return {
      customerId: key,
      count: items.length
    };
  }));
  var result = q.get();

  expect(result).toEqual([{ customerId: 2, count: 2 }, { customerId: 3, count: 2 }]);
});

test("\nselectMany\n", function () {
  var q = query(from([[1, 2, 3], [4, 5, 6]]), selectMany());
  var result = q.get();

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});
//# sourceMappingURL=index.test.js.map