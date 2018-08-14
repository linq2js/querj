# querj

A light weight package for querying by SQL like syntax

## Samples

```js
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
```

## References

### query(...clauses): Query

create a query object from list of clauses (from, where, orderBy, groupBy, select)<br/>

#### Query.get()

return query result as array

```js
const orderQuery = query(...);
for(let record of orderQuery.get()) {
  console.log(record);
}
```

#### Using Query as iterator

```js
const orderQuery = query(...);
for(let record of orderQuery) {
  console.log(record);
}
```

### from(....iterables:Interable[]): Generator

Create a generator from given iterable objects (String|Array|Iterator)

### where(predicate: (...elements, index:Number) => Boolean): Generator

Filters a sequence of values based on a predicate. Each element's index is used in the logic of the predicate function.

### select(selector:(...elements, ...subItemSelectors, index) => Object, ...subItemSelectors:Function[]): Generator

Projects each element of a sequence into a new form by incorporating the element's index.

### selectMany(selector:(...elements, ...subItemSelectors, index) => Object, ...subItemSelectors:Function[]): Generator

Projects each element of a sequence to an new form and flattens the resulting sequences into one sequence.

### orderBy(fieldSelector1:Function, orderDirection1, fieldSelector2:Function, orderDirection2,...): Generator

Sorts the elements of a sequence in ascending order according to a key. orderDirection can be true/desc for descending

### groupBy(keySelector:Function, having:Function): Generator

Groups the elements of a sequence.
