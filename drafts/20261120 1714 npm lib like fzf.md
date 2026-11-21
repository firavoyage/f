# npm lib like fzf

## npm lib like fzf

For an npm fuzzy-search library similar to **fzf**, try **`fuzzysort`**:

```bash
npm install fuzzysort
```

```js
import fuzzysort from "fuzzysort";

const results = fuzzysort.go("aple", ["apple", "orange", "pineapple"]);
console.log(results.map(result => result.target));
```

Other good options:

- **`uFuzzy`** — fast fuzzy matching, especially for larger lists.
- **`Fuse.js`** — flexible search with options for nested fields, thresholds, and match highlighting.

For a terminal-style interactive picker rather than just matching, look at **`@inquirer/search`**.

## how to config fuzzysort, how to return id but search by label

Pass your objects to `fuzzysort.go()` and set `key` to the field you want to search. Each result’s `obj` is the original object, so you can return its `id`:

```js
import fuzzysort from "fuzzysort";

const items = [
  { id: 101, label: "Apple" },
  { id: 102, label: "Apricot" },
  { id: 103, label: "Banana" },
];

const results = fuzzysort.go("aple", items, {
  key: "label",
  limit: 10,
});

const matches = results.map(result => ({
  id: result.obj.id,
  label: result.obj.label,
}));

console.log(matches);
```

If you only need the IDs:

```js
const ids = results.map(result => result.obj.id);
```

`key: "label"` tells Fuzzysort what to search; `result.obj` gives you the original item.

## what does its return look like

With `key: "label"`, each result contains the matched label and the original object in `obj`. For example:

```js
[
  {
    target: "Apple",
    score: -___,       // lower/more negative generally means a better match
    indexes: [0, 1, 2, 3],
    obj: { id: 101, label: "Apple" }
  }
]
```

The exact score and indexes depend on the query. To get the ID:

```js
const ids = results.map(result => result.obj.id);
```