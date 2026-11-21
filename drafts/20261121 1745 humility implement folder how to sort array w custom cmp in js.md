# how to sort array w custom cmp in js

Use `Array.prototype.sort()` with a comparator function. The comparator should return a negative number if `a` goes first, `0` if they’re equal, or a positive number if `b` goes first.

```js
const numbers = [10, 2, 30, 4];

numbers.sort((a, b) => a - b); // ascending: [2, 4, 10, 30]
numbers.sort((a, b) => b - a); // descending: [30, 10, 4, 2]
```

For a custom rule, compare the values however you like:

```js
const people = [
  { name: "Sam", age: 30 },
  { name: "Alex", age: 20 },
  { name: "Jo", age: 25 },
];

people.sort((a, b) => a.age - b.age); // sort by age
```

`sort()` changes the original array. To sort a copy instead:

```js
const sorted = [...numbers].sort((a, b) => a - b);
```

# how does it sort for what cmp returns

For each pair `a` and `b`, JavaScript uses the comparator’s return value like this:

- **Less than `0`**: put `a` before `b`
- **Greater than `0`**: put `b` before `a`
- **`0`**: treat them as equal for sorting

Example:

```js
[3, 1, 2].sort((a, b) => a - b);
```

When comparing `3` and `1`, the comparator returns `2` (positive), so `3` goes after `1`. When comparing `1` and `2`, it returns `-1`, so `1` goes before `2`.

The comparator may be called multiple times with different pairs, so it should give consistent results.