const {
  query,
  where,
  groupBy,
  orderBy,
  select,
  selectMany,
  from
} = require("./index");
const orders = [
  {
    id: 10308,
    customerId: 2,
    orderDate: "1996-09-18"
  },
  {
    id: 10309,
    customerId: 1,
    orderDate: "1996-09-19"
  },
  {
    id: 10310,
    customerId: 3,
    orderDate: "1996-09-20"
  },
  {
    id: 10311,
    customerId: 3,
    orderDate: "1996-09-20"
  },
  {
    id: 10312,
    customerId: 2,
    orderDate: "1996-09-20"
  }
];

const customers = [
  { id: 1, name: "Alfreds Futterkiste" },
  { id: 2, name: "Ana Trujillo Emparedados y helados" },
  { id: 3, name: "Antonio Moreno Taquería" }
];

test(`
SELECT  c.id, c.name
FROM    customers c
ORDER BY
        c.name DESC, c.id ASC
`, () => {
  const q = query(
    from(customers),
    orderBy(
      // customer.name DESC
      customer => customer.name,
      true,
      // customer.id ASC
      customer => customer.id,
      false
    ),
    select(customer => ({
      id: customer.id,
      name: customer.name
    }))
  );
  const result = q.get();

  expect(result).toEqual([
    { id: 3, name: "Antonio Moreno Taquería" },
    { id: 2, name: "Ana Trujillo Emparedados y helados" },
    { id: 1, name: "Alfreds Futterkiste" }
  ]);
});

test(`
SELECT  o.id
FROM    orders o
WHERE   o.orderDate <= '1996-09-19'
`, () => {
  const q = query(
    from(orders),
    where(order => order.orderDate <= "1996-09-19"),
    select(order => order.id)
  );
  const result = q.get();

  expect(result).toEqual([10308, 10309]);
});

test(`
SELECT  o.customerId, COUNT(o.id) AS count
FROM    orders o
GROUP BY
        o.customerId
HAVING  COUNT(o.id) > 1
`, () => {
  const q = query(
    from(orders),
    groupBy(
      // key selector
      order => order.customerId,
      // having
      (key, items) => items.length > 1
    ),
    select((key, items) => ({
      customerId: key,
      count: items.length
    }))
  );
  const result = q.get();

  expect(result).toEqual([
    { customerId: 2, count: 2 },
    { customerId: 3, count: 2 }
  ]);
});

test(`
selectMany
`, () => {
  const q = query(from([[1, 2, 3], [4, 5, 6]]), selectMany());
  const result = q.get();

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});
