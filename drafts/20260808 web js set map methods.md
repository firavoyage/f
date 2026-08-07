# all js set methods

## all js set methods

The JavaScript **`Set` object** has 14 built-in instance methods, categorizable into basic collection management, iteration, and advanced mathematical set operations. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set/Set)

### Basic Management Methods

- **`add(value)`**: Appends a unique value to the end of the set.
- **`delete(value)`**: Removes the specified element from the set.
- **`has(value)`**: Returns a boolean asserting whether an element is present or not.
- **`clear()`**: Removes all elements from the set. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set/add)

### Iteration Methods

- **`values()`**: Returns a new iterator object containing all elements in insertion order.
- **`keys()`**: An alias for `values()` to keep compatibility with the `Map` object.
- **`entries()`**: Returns an iterator of `[value, value]` pairs to mimic the `Map` structure.
- **`forEach(callback)`**: Executes a provided function once for each value present in the set. [link](https://www.youtube.com/watch?v=iz2JoVLmXn0)

### Set Operation Methods (Baseline Support)

These native mathematical operations accept any set-like parameter (e.g., another `Set` or an `Array`): [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set)

- **`union(other)`**: Returns a new set with elements from both sets.
- **`intersection(other)`**: Returns a new set containing only elements found in both sets.
- **`difference(other)`**: Returns a new set with elements present in this set but not the other.
- **`symmetricDifference(other)`**: Returns a new set with elements in either set, but not both.
- **`isSubsetOf(other)`**: Returns a boolean checking if all elements of this set are in the other.
- **`isSupersetOf(other)`**: Returns a boolean checking if this set contains all elements of the other.
- **`isDisjointFrom(other)`**: Returns a boolean checking if this set shares zero elements with the other. [link](https://developer.mozilla.org/en-US/blog/javascript-set-methods/)

Would you like to see **code examples** for how to implement the newer mathematical set methods, or learn how to convert **Arrays to Sets** to remove duplicates? [link](https://www.youtube.com/shorts/-uufvr9j6bk)

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set)\
  Set - JavaScript - MDN Web Docs\
  May 22, 2026 — To make them more generalizable, these methods don't just accept Set objects, but anything that's set-like. \* Set-like objects. Al...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/blog/javascript-set-methods/)\
  New JavaScript Set methods - MDN Web Docs\
  Jun 24, 2024 — What's new in Set methods? For those of you looking for the TL;DR, here's the gist of new methods that have cross-browser support:\
  MDN Web Docs
- [link](https://www.youtube.com/watch?v=iz2JoVLmXn0)\
  JavaScript for Beginners #14 - Sets\
  Jan 10, 2020 — but that's fine we can deal with it now I will show you one cool method that the sets do have um but it's going to involve...\
  12:00\
  YouTube·Tech With Tim

Show all

## behavior of each

Here is how each JavaScript `Set` method behaves under the hood, including its return values and mutation effects.

### Basic Management Methods

- **`add(value)`**
  - **Behavior**: Inserts a new element at the end of the `Set` if it does not exist.
  - **Uniqueness**: Uses `SameValueZero` equality (treats `NaN` as equal to `NaN`, and `+0` equal to `-0`).
  - **Returns**: The `Set` object itself (enabling method chaining like `mySet.add(1).add(2)`).
- **`delete(value)`**
  - **Behavior**: Removes the specified element from the `Set`.
  - **Returns**: `true` if the element existed and was removed; `false` if it was not found.
- **`has(value)`**
  - **Behavior**: Checks if the value exists within the collection.
  - **Performance**: Sub-linear time complexity, typically O(1) lookup time.
  - **Returns**: `true` if found; `false` otherwise.
- **`clear()`**
  - **Behavior**: Empties the `Set` completely by removing all elements.
  - **Returns**: `undefined`.

***

### Iteration Methods

- **`values()`**
  - **Behavior**: Yields elements in the exact order they were inserted.
  - **Returns**: A new `Set` iterator object.
- **`keys()`**
  - **Behavior**: Identical to `values()`.
  - **Purpose**: Exists purely for API consistency with `Map.prototype.keys()`.
  - **Returns**: A new `Set` iterator object.
- **`entries()`**
  - **Behavior**: Yields pairs where both elements are identical: `[value, value]`.
  - **Purpose**: Keeps compatibility with `Map.prototype.entries()`.
  - **Returns**: A new `Set` iterator object.
- **`forEach(callback)`**
  - **Behavior**: Iterates over elements in insertion order, executing the callback function once per item.
  - **Arguments**: The callback receives `(value, key, set)`. Because sets have no keys, `key` matches `value`.
  - **Returns**: `undefined`.

***

### Mathematical Set Operations

_Note: These methods do not modify the original set. They accept any set-like object (e.g., another `Set`, `Map`, `Array`, or typed array) as an argument._

- **`union(other)`**
  - **Behavior**: Combines elements from both sets.
  - **Returns**: A **new** `Set` containing elements from both the original set and the `other` collection.
- **`intersection(other)`**
  - **Behavior**: Finds common elements.
  - **Returns**: A **new** `Set` containing only elements present in both the original set and the `other` collection.
- **`difference(other)`**
  - **Behavior**: Subtracts the second collection from the first.
  - **Returns**: A **new** `Set` containing elements that are in the original set but _not_ in the `other` collection.
- **`symmetricDifference(other)`**
  - **Behavior**: Finds elements unique to each collection.
  - **Returns**: A **new** `Set` containing elements present in either the original set or `other`, but not in both.
- **`isSubsetOf(other)`**
  - **Behavior**: Checks if the original set is smaller than or equal to the target.
  - **Returns**: `true` if all elements of the original set are inside `other`; `false` otherwise.
- **`isSupersetOf(other)`**
  - **Behavior**: Checks if the original set encompasses the target.
  - **Returns**: `true` if the original set contains every element found inside `other`; `false` otherwise.
- **`isDisjointFrom(other)`**
  - **Behavior**: Checks for zero overlap.
  - **Returns**: `true` if the original set and `other` share absolutely no elements; `false` if they share at least one.

Would you like a code snippet demonstrating how the **callback arguments** work in `forEach`, or do you want to see a **performance comparison** between `Set.prototype.has()` and `Array.prototype.includes()`?

# all js map data structure methods

## all js map data structure methods

The **JavaScript `Map` data structure** provides a clean, key-value pair collection where keys can be of any data type. Its built-in methods are classified into mutation methods, lookup methods, and iteration methods. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)

Here is the complete list of all native instance methods and properties available on the MDN Web Docs Map Global Object: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)

### Core Properties & CRUD Methods

- **`size`**: Returns the total number of key-value pairs present in the map. _(Note: This is a read-only property, not a function)_.
- **`set(key, value)`**: Adds a new key-value pair or updates the value if the key already exists. It returns the map object itself, allowing for method chaining.
- **`get(key)`**: Retrieves the value associated with the specified key. Returns `undefined` if the key does not exist.
- **`has(key)`**: Returns a boolean indicating whether a value has been associated with the key in the map.
- **`delete(key)`**: Removes the specified element from the map. Returns `true` if the element existed and was removed, or `false` if it did not exist.
- **`clear()`**: Removes all key-value pairs from the map, completely emptying it. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)

### Iteration & Traversal Methods

- **`keys()`**: Returns a new iterator object that contains the keys for each element in insertion order.
- **`values()`**: Returns a new iterator object that contains the values for each element in insertion order.
- **`entries()`**: Returns a new iterator object containing an array of `[key, value]` for each element in insertion order.
- **`forEach(callbackFn, thisArg)`**: Executes a provided callback function once per each key-value pair in the map, in insertion order. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)

### Direct Quick Reference

| Method / Property | Type     | Return Value         | Description                      |
| ----------------- | -------- | -------------------- | -------------------------------- |
| `size`            | Property | Number               | Number of entries                |
| `set(k, v)`       | Method   | The Map instance     | Inserts or updates an entry      |
| `get(k)`          | Method   | Value or `undefined` | Retrieves entry value            |
| `has(k)`          | Method   | Boolean              | Checks if key exists             |
| `delete(k)`       | Method   | Boolean              | Deletes single entry             |
| `clear()`         | Method   | `undefined`          | Wipes out all data               |
| `keys()`          | Method   | Iterator (Keys)      | Gathers all map keys             |
| `values()`        | Method   | Iterator (Values)    | Gathers all map values           |
| `entries()`       | Method   | Iterator (`[k, v]`)  | Gathers all `[key, value]` pairs |
| `forEach(fn)`     | Method   | `undefined`          | Loops through all entries        |

If you want to practice using these, I can show you **how to chain `.set()` methods** or demonstrate **how to iterate through keys and values** using a `for...of` loop. Which one would you like to explore next? [link](https://www.youtube.com/watch?v=XOpKmpRh69Y\&t=1)

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)\
  Map - JavaScript - MDN Web Docs - Mozilla\
  Feb 16, 2026 — Map-like browser APIs Browser Map -like objects (or "maplike objects") are Web API interfaces that behave in many ways like a Map ...\
  MDN Web Docs
- [link](https://javascript.info/map-set)\
  Map and Set - The Modern JavaScript Tutorial\
  Nov 14, 2022 — Map – is a collection of keyed values. Methods and properties: new Map(\[iterable]) – creates the map, with optional iterable (e.g.\
  The Modern JavaScript Tutorial
- [link](http://www.w3schools.com/jS/js%5Fmap%5Fmethods.asp)\
  JavaScript Map Methods\
  Here are some methods for JavaScript Maps: \* \*\*get()\*\* Returns the value of a key in a map \* \*\*size\*\* Returns the number of elemen...\
  W3Schools

Show all

## behavior of each

Here is how every `Map` method and property behaves under the hood, broken down by category.

### 🧩 Core CRUD & Properties

- **`size`**
  - **Syntax**: `map.size`
  - **Behavior**: Accesses an internal counter tracked by the engine.
  - **Complexity**: Runs in O(1) constant time.
  - **Edge Cases**: Cannot be manually reassigned or overwritten.
- **`set(key, value)`**
  - **Syntax**: `map.set(key, value)`
  - **Behavior**: Evaluation uses SameValueZero algorithm.
  - **Chaining**: Returns the `Map` instance itself.
  - **Edge Cases**: Treats `-0` and `+0` as the exact same key.
  - **Edge Cases**: Treats `NaN` as equal to another `NaN`.
  - **Edge Cases**: Objects map by reference identity, not structural equality.
- **`get(key)`**
  - **Syntax**: `map.get(key)`
  - **Behavior**: Looks up the reference or primitive identifier.
  - **Return Value**: Yields the value or returns `undefined` on failure.
- **`has(key)`**
  - **Syntax**: `map.has(key)`
  - **Behavior**: Performs a hash-table lookup for existence.
  - **Return Value**: Returns explicit boolean `true` or `false`.
- **`delete(key)`**
  - **Syntax**: `map.delete(key)`
  - **Behavior**: Removes the structural entry and decrements size.
  - **Return Value**: Returns `true` if found, `false` if missing.
- **`clear()`**
  - **Syntax**: `map.clear()`
  - **Behavior**: Instantly detaches references inside the map container.
  - **Return Value**: Always returns explicitly unassigned `undefined`.

***

### 🔄 Iteration & Traversal

- **`keys()`**
  - **Syntax**: `map.keys()`
  - **Behavior**: Spawns a lazy evaluation iterable object.
  - **Order**: Guarantees output matches exact insertion chronological order.
- **`values()`**
  - **Syntax**: `map.values()`
  - **Behavior**: Spawns an iterator yielding mapping values only.
  - **Order**: Guarantees output matches exact insertion chronological order.
- **`entries()`**
  - **Syntax**: `map.entries()`
  - **Behavior**: Standard default iteration fallback for `Map.prototype[@@iterator]`.
  - **Yields**: Produces paired arrays formatted as `[key, value]`.
- **`forEach(callbackFn[, thisArg])`**
  - **Syntax**: `map.forEach((value, key, map) => {})`
  - **Signature**: Argument order passes value _before_ the key.
  - **Context**: Accepts an optional second parameter to bind `this`.
  - **Mutations**: Handles elements added or removed during active looping safely.

***

### 💻 Code Visualizations

#### Chaining with `.set()` and Object Key Identity

javascript

```
const userMap = new Map();
const objKey = { id: 1 };

// Chaining works because .set() returns the map instance
userMap.set('status', 'active')
       .set(objKey, 'Admin')
       .set(NaN, 'Not a number');

console.log(userMap.get({ id: 1 })); // undefined (different object reference!)
console.log(userMap.get(objKey));   // 'Admin' (exact reference match)
```

Use code with caution.

#### Looping Variations and Destructuring

javascript

```
const cache = new Map([['timeout', 30], ['retries', 3]]);

// Using entries() implicitly with destructuring
for (const [key, value] of cache) {
  console.log(`${key} is set to ${value}`);
}

// Note the value-first parameter signature in forEach
cache.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
```

Use code with caution.

Would you like to explore **how `Map` handles memory cleanup compared to `WeakMap`**, or should we look at **converting a `Map` back into a standard JSON object**?

