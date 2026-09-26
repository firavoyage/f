# all js builtin global objects

In JavaScript, **standard built-in global objects** (also referred to as global objects or standard built-in objects) are <mark>constructors, functions, and values that are available in the<span> </span><strong>global scope</strong></mark>. You can use them anywhere in your code without importing any libraries. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

The core JavaScript language standard (ECMAScript) provides a comprehensive list of these built-in global objects, categorized below by their main purposes:

***

### 1. Fundamental Values & Properties

These return simple values and have no methods or properties of their own. [link](https://www.cs.unb.ca/~bremner/teaching/cs2613/books/mdn/Reference/Global%5FObjects/)

- `globalThis`: The universal way to access the environment's actual global object (e.g., `window` in browsers, `global` in Node.js).
- `undefined`: Represents a variable that has not been assigned a value.
- `NaN`: "Not-a-Number" value.
- `Infinity`: Numeric value representing infinity. [link](https://developer.mozilla.org/en-US/docs/Glossary/Global%5Fobject)

### 2. Fundamental Objects

The core buildings blocks of data types and functional logic in JavaScript.

- `Object`: The fundamental JavaScript object constructor.
- `Function`: The constructor for creating executable function instances.
- `Boolean`: Wrapper object for true/false values.
- `Symbol`: Unique and immutable primitive value used as object keys. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

### 3. Numbers, Math, & Dates

Objects built for working with calculations, timelines, and raw numeric configurations. [link](https://www.youtube.com/watch?v=6be2s77vC%5Fo)

- `Number`: Object wrapper for double-precision float values.
- `BigInt`: Used to represent integers larger than the max safe limit of standard numbers.
- `Math`: A static object container hosting mathematical constants and functions.
- `Date`: Used to work with dates, times, and timestamps.
- `Temporal`: A modern, robust API for precise date and time calculations (rolling out across modern environments). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

### 4. Text & Formatting

- `String`: Wrapper object for sequence data types (text).
- `RegExp`: Regular Expression objects used for pattern-matching text. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

### 5. Indexed Collections (Arrays)

- `Array`: Standard high-level list-like collections.
- `TypedArray`: The underlying prototype for binary data arrays (e.g., `Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float16Array`, `Float32Array`, `Float64Array`, `BigInt64Array`, `BigUint64Array`). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

### 6. Keyed Collections

- `Map`: A collection of key/value pairs where keys can be of any type.
- `Set`: A collection of unique, non-duplicate values.
- `WeakMap`: A `Map` that allows garbage collection of its object keys.
- `WeakSet`: A `Set` that allows garbage collection of its object values. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

### 7. Structured Data & Control

- `ArrayBuffer`: Represents a generic, fixed-length raw binary data buffer.
- `SharedArrayBuffer`: Shared memory buffer accessible by multiple workers.
- `DataView`: Low-level interface to read/write multiple number types inside an ArrayBuffer.
- `Atomics`: Static methods to perform atomic operations safely on shared memory contexts.
- `JSON`: Static methods to parse or stringify JavaScript Object Notation data. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

### 8. Managing Code & Control Flow

- `Promise`: Represents the eventual completion (or failure) of an asynchronous operation.
- `Generator` & `GeneratorFunction`: Objects representing generator syntax factories.
- `AsyncFunction` & `AsyncGeneratorFunction`: Constructors supporting asynchronous sequence streaming.
- `Iterator` & `AsyncIterator`: Core streaming and sequencing abstractions.
- `Proxy`: Used to define custom behavior for fundamental operations (e.g., property lookup, assignment).
- `Reflect`: Static methods offering interceptable JavaScript operations. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

### 9. Resource Management

- `DisposableStack`: Container for tracking resources cleanly to dispose of synchronously.
- `AsyncDisposableStack`: Container for tracking resources cleanly to dispose of asynchronously. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

### 10. Errors

Objects instantiated when a runtime anomaly takes place. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

- `Error`: Base generic error object.
- `AggregateError`: Wraps multiple errors into one single instance.
- `EvalError`, `InternalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`.
- `SuppressedError`: Represents an error that occurred while cleaning up a resource. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

### 11. Internationalization

- `Intl`: Namespace for the ECMAScript Internationalization API, housing constructors like `Intl.DateTimeFormat`, `Intl.NumberFormat`, and `Intl.Collator`. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

### 12. Global Built-in Functions

Though functions rather than structural objects, these are mapped directly onto the global scope: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

- `eval()`: Evaluates JavaScript code represented as a string.
- `isFinite()` / `isNaN()`: Validation utilities.
- `parseFloat()` / `parseInt()`: Parse strings into numbers.
- `encodeURI()` / `decodeURI()`: URI formatting.
- `encodeURIComponent()` / `decodeURIComponent()`: URI component formatting. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)

***

💡 **Note on Environment-Specific Globals:**\
The list above includes items natively specified by the **core JavaScript engine**. Runtime host environments inject additional host objects into the global scope. For instance, browsers append `window`, `document`, `fetch`, and `console`, while Node.js adds `process`, `Buffer`, and `global`. [link](https://nodejs.org/api/globals.html)

Are you looking to use a **specific global object** for a task (like working with `Math` or parsing `JSON`), or do you want to learn how to **safely extend** global variables across different environments?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)\
  MDN Web Docs\
  Standard built-in objects - JavaScript - MDN Web Docs\
  These global functions—functions which are called globally, rather than on an object—directly return their results to the caller. ...
- [link](https://developer.mozilla.org/en-US/docs/Glossary/Global%5Fobject)\
  MDN Web Docs\
  Global object - Glossary - MDN Web Docs - Mozilla\
  The global object in JavaScript is an object which represents the global scope. Note: Globally available objects, which are object...
- [link](https://www.youtube.com/watch?v=6be2s77vC%5Fo)\
  YouTube·AskLixi\
  Chapter 14: Javascript Tutorial - What is a Built-in-Object ...\
  Apr 19, 2023 — perfect so we have cleaned the console. we have a code empty empty okay everybody so the first thing that you need to know is what...\
  15:57

Show all

# (d) all js array methods and params of each

Here is a comprehensive breakdown of **all standard JavaScript Array methods** categorized by their behavior, including their complete parameters and whether they change (mutate) the original array. [link](https://www.youtube.com/watch?v=ZIr4lJSPPPE)

***

### 💡 Understanding Common Callbacks

Many iterative methods use a standard **Callback Function** (`callbackFn`). This function accepts up to three parameters: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array)

- `element`: The current element being processed.
- `index` _(Optional)_: The index of the current element.
- `array` _(Optional)_: The original array itself.

They also frequently accept an optional `thisArg` parameter to set the context of `this` inside the callback.

***

### 1. Mutating Methods (Modifies the original array) ⚠️

These methods **directly alter** the array they are called on. [link](https://www.youtube.com/watch?v=ZIr4lJSPPPE)

| Method         | Parameters                                       | Description                                                                    |
| -------------- | ------------------------------------------------ | ------------------------------------------------------------------------------ |
| `push()`       | `(element1, ..., elementN)`                      | Adds one or more elements to the **end** of the array. Returns the new length. |
| `pop()`        | None                                             | Removes the **last** element from the array. Returns that element.             |
| `unshift()`    | `(element1, ..., elementN)`                      | Adds elements to the **beginning** of the array. Returns the new length.       |
| `shift()`      | None                                             | Removes the **first** element from the array. Returns that element.            |
| `splice()`     | `(start, deleteCount?, element1, ..., elementN)` | **Adds, removes, or replaces** elements at a specific index.                   |
| `sort()`       | `(compareFn?)`                                   | **Sorts** the array elements in place (mutating).                              |
| `reverse()`    | None                                             | **Reverses** the order of elements in place.                                   |
| `fill()`       | `(value, start?, end?)`                          | Fills array elements with a static value from `start` to `end`.                |
| `copyWithin()` | `(target, start, end?)`                          | Copies a sequence of array elements within the same array.                     |

***

### 2. Non-Mutating Iterative Methods (Functional / Loops) 🔄

These methods loop over the array and do not alter the original array. [link](https://dev.to/danielasaboro/the-5-js-array-methods-every-backend-developer-should-know-k)

| Method          | Parameters                                        | Description                                                                      |
| --------------- | ------------------------------------------------- | -------------------------------------------------------------------------------- |
| `forEach()`     | `(callbackFn, thisArg?)`                          | Executes a provided function **once for each element**. Returns `undefined`.     |
| `map()`         | `(callbackFn, thisArg?)`                          | Creates a **new array** populated with the results of the callback.              |
| `filter()`      | `(callbackFn, thisArg?)`                          | Creates a shallow copy of an array filtering out elements that fail the test.    |
| `reduce()`      | `(callbackFn(acc, cur, idx, arr), initialValue?)` | Executes a reducer function, returning a **single cumulative value**.            |
| `reduceRight()` | `(callbackFn(acc, cur, idx, arr), initialValue?)` | Same as `reduce()`, but iterates from **right to left**.                         |
| `some()`        | `(callbackFn, thisArg?)`                          | Returns `true` if **at least one** element passes the callback test.             |
| `every()`       | `(callbackFn, thisArg?)`                          | Returns `true` if **all** elements pass the callback test.                       |
| `flatMap()`     | `(callbackFn, thisArg?)`                          | Maps each element using a mapping function, then flattens the result by 1 level. |

***

### 3. Searching & Finding Methods 🔍

| Method            | Parameters                    | Description                                                                  |
| ----------------- | ----------------------------- | ---------------------------------------------------------------------------- |
| `find()`          | `(callbackFn, thisArg?)`      | Returns the **value of the first element** that satisfies the test.          |
| `findIndex()`     | `(callbackFn, thisArg?)`      | Returns the **index of the first element** that satisfies the test, or `-1`. |
| `findLast()`      | `(callbackFn, thisArg?)`      | Returns the **value of the last element** that satisfies the test.           |
| `findLastIndex()` | `(callbackFn, thisArg?)`      | Returns the **index of the last element** that satisfies the test.           |
| `indexOf()`       | `(searchElement, fromIndex?)` | Returns the **first index** at which a given element is found.               |
| `lastIndexOf()`   | `(searchElement, fromIndex?)` | Returns the **last index** at which a given element is found.                |
| `includes()`      | `(searchElement, fromIndex?)` | Returns `true` if the array **contains** a specific value.                   |

***

### 4. Transformation & Utility Methods 🛠️

| Method             | Parameters              | Description                                                                                             |
| ------------------ | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `concat()`         | `(value1, ..., valueN)` | Merges two or more arrays and returns a **new array**.                                                  |
| `slice()`          | `(start?, end?)`        | Returns a shallow copy of a **portion of an array** into a new array.                                   |
| `flat()`           | `(depth?)`              | Returns a new array with all sub-array elements flattened up to the specified `depth`.                  |
| `join()`           | `(separator?)`          | Joins all elements into a **single string**, separated by the `separator` string.                       |
| `at()`             | `(index)`               | Takes an integer and returns the item at that index (supports **negative integers** to count backward). |
| `toString()`       | None                    | Converts the array and its elements into a single **comma-separated string**.                           |
| `toLocaleString()` | `(locales?, options?)`  | Returns a localized string representation of the array.                                                 |

***

### 5. Static Methods (Called on `Array`, not instances) 🧱

| Method            | Parameters                     | Description                                                                             |
| ----------------- | ------------------------------ | --------------------------------------------------------------------------------------- |
| `Array.isArray()` | `(value)`                      | Returns `true` if the passed value is an **Array**.                                     |
| `Array.from()`    | `(iterable, mapFn?, thisArg?)` | Creates a new, shallow-copied Array instance from an **array-like or iterable object**. |
| `Array.of()`      | `(element1, ..., elementN)`    | Creates a new Array instance with a **variable number of arguments**.                   |

***

### 6. New ECMAScript Non-Mutating Alternatives 🌟

Introduced to allow operations like sorting or reversing **without modifying** the original array (they return copies instead).

| Method         | Parameters                                      | Description                                                                     |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| `toSorted()`   | `(compareFn?)`                                  | Returns a **new sorted copy** of the array.                                     |
| `toReversed()` | None                                            | Returns a **new reversed copy** of the array.                                   |
| `toSpliced()`  | `(start, deleteCount, element1, ..., elementN)` | Returns a **new array** with elements removed or replaced.                      |
| `with()`       | `(index, value)`                                | Returns a **new array copy** with the element at `index` replaced with `value`. |

***

### 7. Iterator Object Generators 🔄

| Method      | Parameters | Description                                                                              |
| ----------- | ---------- | ---------------------------------------------------------------------------------------- |
| `keys()`    | None       | Returns a new Array Iterator object that contains the **keys (indices)** for each index. |
| `values()`  | None       | Returns a new Array Iterator object that contains the **values** for each index.         |
| `entries()` | None       | Returns a new Array Iterator object that contains **\[key, value] pairs**.               |

For deeper technical deep-dives or implementation details, check out the comprehensive [MDN Web Docs Array Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array).

Would you like to see **practical code examples** for any of these specific categories, or do you need help understanding how a particular method (like `reduce` or `splice`) processes its parameters?

- [link](https://www.youtube.com/watch?v=ZIr4lJSPPPE)\
  YouTube·PortEXE\
  Every JavaScript Array Method Explained With Examples\
  Feb 7, 2022 — Every JavaScript Array Method Explained With Examples hey everybody so in this video I'm going to be going over all of the JavaScr...\
  47:42
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array)\
  MDN Web Docs\
  Array - JavaScript - MDN Web Docs\
  Jul 28, 2026 — You should generally not mutate the array during iteration (see mutating initial array in iterative methods), but you can also use...
- [link](https://medium.com/@maciejpoppek/comprehensive-guide-to-all-32-sick-javascript-array-methods-fb11e60f8521)\
  Medium\
  Comprehensive Guide to All 32 (Sick!) JavaScript Array Methods\
  Aug 3, 2024 — Comprehensive Guide to All 32 (Sick!) JavaScript Array Methods \* Introduction to JavaScript Arrays \* Array Creation Using array li...

Show all

# all js array methods and params return of each

5:03 AM

Here is a comprehensive reference guide to **JavaScript Array methods**, organized by their primary use case. [link](https://www.w3schools.com/jsref/jsref%5Fobj%5Farray.asp)

_Note: For all iterative methods (like `map`, `filter`, `forEach`), the callback function (`callbackFn`) automatically receives three arguments: `element` (the current item), `index` (the current index), and `array` (the source array). An optional `thisArg` can also be passed as a second parameter to specify the `this` value inside the callback._ [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/forEach)

***

### 1. Adding & Removing Elements

These methods alter or retrieve items from the ends or specific positions of an array.

| Method        | Parameters                                | Return Value                                       | Mutates Original? |
| ------------- | ----------------------------------------- | -------------------------------------------------- | ----------------- |
| `push()`      | `(element1, ..., elementN)`               | The **new length** of the array.                   | **Yes**           |
| `pop()`       | None                                      | The **removed element** (or `undefined` if empty). | **Yes**           |
| `unshift()`   | `(element1, ..., elementN)`               | The **new length** of the array.                   | **Yes**           |
| `shift()`     | None                                      | The **removed element** (or `undefined` if empty). | **Yes**           |
| `splice()`    | `(start, deleteCount, item1, ..., itemN)` | An **array containing the deleted elements**.      | **Yes**           |
| `toSpliced()` | `(start, deleteCount, item1, ..., itemN)` | A **new array** with the items added/removed.      | No                |

***

### 2. Iteration & Transformation

Methods used to loop through elements, modify them, or compute an aggregate value.

| Method          | Parameters                   | Return Value                                              | Mutates Original? |
| --------------- | ---------------------------- | --------------------------------------------------------- | ----------------- |
| `forEach()`     | `(callbackFn, thisArg)`      | `undefined`                                               | No                |
| `map()`         | `(callbackFn, thisArg)`      | A **new array** with the results of the callback.         | No                |
| `filter()`      | `(callbackFn, thisArg)`      | A **new array** containing elements that passed the test. | No                |
| `reduce()`      | `(callbackFn, initialValue)` | The **accumulated result** from the last callback.        | No                |
| `reduceRight()` | `(callbackFn, initialValue)` | The **accumulated result** (processed right-to-left).     | No                |
| `flatMap()`     | `(callbackFn, thisArg)`      | A **new flattened array** (equivalent to map then flat).  | No                |

***

### 3. Searching & Filtering

Methods used to locate items or check conditions within an array.

| Method            | Parameters                   | Return Value                                                  | Mutates Original? |
| ----------------- | ---------------------------- | ------------------------------------------------------------- | ----------------- |
| `indexOf()`       | `(searchElement, fromIndex)` | The **first index** found, or `-1` if not present.            | No                |
| `lastIndexOf()`   | `(searchElement, fromIndex)` | The **last index** found, or `-1` if not present.             | No                |
| `includes()`      | `(searchElement, fromIndex)` | `true` if found, `false` otherwise.                           | No                |
| `find()`          | `(callbackFn, thisArg)`      | The **first element** that passes the test, or `undefined`.   | No                |
| `findIndex()`     | `(callbackFn, thisArg)`      | The **index of the first element** that passes, or `-1`.      | No                |
| `findLast()`      | `(callbackFn, thisArg)`      | The **last element** that passes the test, or `undefined`.    | No                |
| `findLastIndex()` | `(callbackFn, thisArg)`      | The **index of the last element** that passes, or `-1`.       | No                |
| `every()`         | `(callbackFn, thisArg)`      | `true` if **all elements** pass the test, otherwise `false`.  | No                |
| `some()`          | `(callbackFn, thisArg)`      | `true` if **at least one element** passes, otherwise `false`. | No                |

***

### 4. Ordering & Reversing

Methods that rearrange elements or sort the array.

| Method         | Parameters    | Return Value                                      | Mutates Original? |
| -------------- | ------------- | ------------------------------------------------- | ----------------- |
| `sort()`       | `(compareFn)` | The **reference to the same sorted array**.       | **Yes**           |
| `toSorted()`   | `(compareFn)` | A **new array** sorted in ascending/custom order. | No                |
| `reverse()`    | None          | The **reference to the same reversed array**.     | **Yes**           |
| `toReversed()` | None          | A **new array** with elements in reverse order.   | No                |

***

### 5. Accessing & Subsetting

Methods to slice, merge, format, or extract specific parts of an array.

| Method         | Parameters              | Return Value                                                     | Mutates Original? |
| -------------- | ----------------------- | ---------------------------------------------------------------- | ----------------- |
| `at()`         | `(index)`               | The **element at the given index** (supports negative index).    | No                |
| `concat()`     | `(value1, ..., valueN)` | A **new combined array** containing the merged inputs.           | No                |
| `slice()`      | `(start, end)`          | A **new shallow copy** array of the selected portion.            | No                |
| `flat()`       | `(depth)`               | A **new flattened array** up to the specified depth.             | No                |
| `with()`       | `(index, value)`        | A **new array** with the element at `index` replaced by `value`. | No                |
| `fill()`       | `(value, start, end)`   | The **reference to the modified array**, filled with `value`.    | **Yes**           |
| `copyWithin()` | `(target, start, end)`  | The **reference to the modified array** with copied items.       | **Yes**           |

***

### 6. Conversion & Utilities

Methods that convert arrays to strings or provide array index iterators.

| Method             | Parameters           | Return Value                                                | Mutates Original? |
| ------------------ | -------------------- | ----------------------------------------------------------- | ----------------- |
| `join()`           | `(separator)`        | A **string** joining all elements via the separator string. | No                |
| `toString()`       | None                 | A **string** representing the elements separated by commas. | No                |
| `toLocaleString()` | `(locales, options)` | A **localized string** representation of the array.         | No                |
| `keys()`           | None                 | A new **Array Iterator** object containing keys (indexes).  | No                |
| `values()`         | None                 | A new **Array Iterator** object containing values.          | No                |
| `entries()`        | None                 | A new **Array Iterator** containing `[index, value]` pairs. | No                |

***

### 7. Static Methods (Called on `Array` directly)

These utility methods are called directly on the global `Array` constructor rather than an instance.

| Method            | Parameters                    | Return Value                                                         |
| ----------------- | ----------------------------- | -------------------------------------------------------------------- |
| `Array.isArray()` | `(value)`                     | `true` if the value is an array, `false` otherwise.                  |
| `Array.from()`    | `(arrayLike, mapFn, thisArg)` | A **new Array instance** created from an iterable/array-like object. |
| `Array.of()`      | `(element1, ..., elementN)`   | A **new Array instance** containing the provided arguments.          |

Would you like me to dive deeper into how specific methods work (such as **`reduce`** or **`splice`**), or do you need **code examples** for how to implement a particular use case?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/forEach)\
  MDN Web Docs\
  Array.prototype.forEach() - JavaScript\
  Don't want to see ads? \* Try it JavaScript Demo: Array.prototype.forEach() 9 1 2 3 4 5 6 7 8 const array = \["a", "b", "c"]; array.
- [link](https://www.youtube.com/watch?v=cDCzz8vJf3Y)\
  YouTube·Envato Tuts+\
  JavaScript Array Mastery: Tips, Tricks & Best Practices\
  so there are essentially two different ways of just iterating. over an array. the first uses the for each method this takes a func...\
  01:02:49
- [link](https://javascript.info/array-methods)\
  The Modern JavaScript Tutorial\
  Array methods - The Modern JavaScript Tutorial\
  The arr.map method is one of the most useful and often used. It calls the function for each element of the array and returns the a...

Show all

# all js array iterative methods and params return of each

Here is the comprehensive guide to **all standard JavaScript array iterative methods**, including their syntax, callback parameters, and return values. [link](https://dev.to/ale3oula/the-array-iterators-cheatsheet-javascript-2h8e)

### The Standard Iterative Callback Pattern

Most of these methods accept a primary callback function (`callbackFn`) and an optional secondary `thisArg` (to use as `this` inside the callback). For almost every method, the `callbackFn` automatically receives the exact same **three parameters**: [link](https://medium.com/@jacquiedesrosiers/mastering-javascript-5-ways-to-loop-through-an-array-6ed1b58f55d4)

1. `element` (or `value`): The current element being processed.
2. `index` _(Optional)_: The index of the current element.
3. `array` _(Optional)_: The original array the method was called on. [link](https://www.geeksforgeeks.org/javascript/javascript-array-iteration-methods/)

***

### Complete Reference Table

| Method Name                                                                                                       | Callback Parameters (`callbackFn`)     | Callback Should Return        | Method Return Value                                              | Modifies Original? |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------- | ---------------------------------------------------------------- | ------------------ |
| [**`forEach()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/every) | `(element, index, array)`              | Nothing (ignored)             | `undefined`                                                      | No                 |
| [**`map()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array)           | `(element, index, array)`              | The new transformed value     | A **new array** with transformed values                          | No                 |
| **`filter()`**                                                                                                    | `(element, index, array)`              | `truthy` / `falsy` condition  | A **new array** containing passed elements                       | No                 |
| **`reduce()`**                                                                                                    | `(accumulator, element, index, array)` | The updated accumulator value | A **single accumulated value**                                   | No                 |
| **`reduceRight()`**                                                                                               | `(accumulator, element, index, array)` | The updated accumulator value | A **single accumulated value** (iterates right-to-left)          | No                 |
| **`some()`**                                                                                                      | `(element, index, array)`              | `truthy` / `falsy` condition  | `true` if **at least one** element passes; else `false`          | No                 |
| **`every()`**                                                                                                     | `(element, index, array)`              | `truthy` / `falsy` condition  | `true` if **all** elements pass; else `false`                    | No                 |
| **`find()`**                                                                                                      | `(element, index, array)`              | `truthy` / `falsy` condition  | The **value of the first element** that passes; else `undefined` | No                 |
| **`findIndex()`**                                                                                                 | `(element, index, array)`              | `truthy` / `falsy` condition  | The **index of the first element** that passes; else `-1`        | No                 |
| **`findLast()`**                                                                                                  | `(element, index, array)`              | `truthy` / `falsy` condition  | The **value of the last element** that passes; else `undefined`  | No                 |
| **`findLastIndex()`**                                                                                             | `(element, index, array)`              | `truthy` / `falsy` condition  | The **index of the last element** that passes; else `-1`         | No                 |
| **`flatMap()`**                                                                                                   | `(element, index, array)`              | A value or an array of values | A **new flattened array** (mapped and flattened by depth 1)      | No                 |

***

### Crucial Details for Specific Methods

- **`reduce()` and `reduceRight()` Exception:**\
  These two methods require a slightly different signature. Their `callbackFn` takes **four** parameters: `(accumulator, element, index, array)`. They also accept an optional `initialValue` argument after the callback function itself. If no `initialValue` is provided, the first item in the array becomes the initial accumulator, and iteration starts on the second item. [link](https://www.codecademy.com/learn/web-dev-js-arrays-loops-objects/modules/learn-javascript-iterators/cheatsheet)
- **Early Termination:**\
  `forEach()`, `map()`, and `filter()` will **always** visit every un-mutated element in the array. Methods like `some()`, `every()`, `find()`, and `findIndex()` short-circuit (stop running entirely) the moment their condition is met. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/every)
- **Sparse Arrays:**\
  Standard iterative methods skip empty slots (holes) in sparse arrays. However, newer methods like `find()` and `findIndex()` _do_ visit empty slots, passing `undefined` as the element value. [link](https://coderpad.io/blog/development/javascript-array-methods/)

Would you like to see **code examples** showcasing how to use any specific method from this list, or perhaps an explanation of how **`reduce()`** handles complex transformations?

- [link](https://www.geeksforgeeks.org/javascript/javascript-array-iteration-methods/)\
  GeeksforGeeks\
  JavaScript Array Iteration Methods\
  forEach() Method The array. forEach() method calls the provided function (a callback function) once for each element of the array.
- [link](https://medium.com/@jacquiedesrosiers/mastering-javascript-5-ways-to-loop-through-an-array-6ed1b58f55d4)\
  Medium\
  Mastering JavaScript: 5 Ways to Loop Through an Array\
  May 10, 2023 — Iterating Through an Array Using the \`forEach\` Method JavaScript has a built-in method that allows us to loop through an array in ...
- [link](https://www.w3schools.com/JS/js%5Farray%5Fiteration.asp)\
  W3Schools\
  JavaScript Array Iteration - W3Schools\
  JavaScript Array every(). The every() method checks if all array values pass a test. This example checks if all array values are l...

Show all


# all js object methods and params return of each

In JavaScript, methods associated with the **`Object` constructor** are broadly split into two categories: **Static Methods** (called directly on `Object`, e.g., `Object.keys()`) and **Instance Methods** (available on individual object instances via the prototype chain). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object)

Here is the comprehensive guide to all standard `Object` methods, including their parameters and return values. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/keys)

***

### 1. Static Methods (State and Inspection)

These methods are used to inspect, extract, or compare object components. [link](https://medium.com/@pvnsripati/javascript-object-methods-cheatsheet-quick-reference-4f62330132b2)

Standard `Object` static and instance methods can be summarized by category as follows:

#### 1. State and Inspection

- **`Object.keys(obj)`**: Takes an object `obj` and returns an **`Array` of strings** representing its own enumerable property names.
- **`Object.values(obj)`**: Takes an object `obj` and returns an **`Array`** containing its own enumerable property values.
- **`Object.entries(obj)`**: Takes an object and returns an **`Array` of `[key, value]` pairs**.
- **`Object.fromEntries(iterable)`**: Takes an iterable (like an Array or Map) and returns a **new `Object`**.
- **`Object.is(value1, value2)`**: Compares two values and returns a **`Boolean`**.
- **`Object.groupBy(items, callback)`**: Groups elements from an iterable based on a callback function, returning a **null-prototype `Object`**. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/values)

#### 2. Property Manipulation & Descriptors

These methods configure properties and descriptors: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

- **`Object.defineProperty(obj, prop, descriptor)`** / **`Object.defineProperties(obj, props)`**: Add or modify single/multiple properties with specific descriptors, returning the modified object.
- **`Object.getOwnPropertyDescriptor(obj, prop)`** / **`Object.getOwnPropertyDescriptors(obj)`**: Retrieve configuration data/descriptors for own properties.
- **`Object.getOwnPropertyNames(obj)`** & **`Object.getOwnPropertySymbols(obj)`**: Return arrays of own property names or symbol properties. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working%5Fwith%5Fobjects)

#### 3. Modification & Integrity

Methods used to lock down or copy object structures: [link](https://www.youtube.com/watch?v=NrPwbrAnxNk\&t=16)

- **`Object.assign(target, ...sources)`**: Copies enumerable own properties and returns the modified target object.
- **`Object.create(proto, [propertiesObject])`**: Creates a new object with a specified prototype.
- **`Object.freeze`**, **`Object.seal`**, **`Object.preventExtensions`** (and their respective `is...` checkers): Manage object immutability and extensibility, returning modified objects or booleans. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object)

#### 4. Prototype Delegation

- **`Object.getPrototypeOf(obj)`**: Returns the internal `[[Prototype]]` of the target object.
- **`Object.setPrototypeOf(obj, prototype)`**: Sets the internal prototype chain and returns the modified object. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/keys)

#### 5. Instance Methods

Inherited from `Object.prototype` and called on instances: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/keys)

- **`hasOwnProperty`**, **`isPrototypeOf`**, and **`propertyIsEnumerable`**: Return `Boolean` values to inspect property ownership, prototype placement, and enumerability.
- **`toLocaleString()`** & **`toString()`**: Return `String` representations of the object.
- **`valueOf()`**: Returns the primitive value of the specified object. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/keys)

Would you like to see a practical **code example** of how a specific method operates (such as working with **property descriptors** or **cloning objects**), or are you building an app that requires a specific utility?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/keys)\
  MDN Web Docs\
  Object.keys() - JavaScript\
  Jul 20, 2025 — Was this page helpful to you? \* Standard built-in objects \* Object \* Constructor Object() \* Static methods assign() create() defin...
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object)\
  MDN Web Docs\
  Object - JavaScript | MDN\
  Here are some static methods for objects: \* \*\*Object.assign()\*\* Copies the values of all enumerable own properties from one or mor...
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working%5Fwith%5Fobjects)\
  MDN Web Docs\
  Working with objects - JavaScript - MDN Web Docs - Mozilla\
  Aug 21, 2026 — Object.getOwnPropertyNames() . This method returns an array containing all the own string property names in the object myObj , reg...

Show all

# all js symbol methods and params return of each

The `Symbol` global object in JavaScript is a factory function used to create unique **symbol primitives**. It cannot be called with `new` (it throws a `TypeError`). [link](https://www.scaler.com/topics/javascript-symbol/)

Because `Symbol` is a primitive factory rather than a complex object class, it exposes a very small footprint of native methods. Below is the complete breakdown of all static and instance methods provided natively by the JavaScript `Symbol` specification, along with their parameters and return values.

***

### Static Methods

These methods are called directly on the global `Symbol` object itself.

| Method                   | Parameters                                            | Return Value                                                           | Description                                                                                                                                                                  |
| ------------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`Symbol.for(key)`**    | `key` _(String)_: A string identifier for the symbol. | _(Symbol)_: A globally shared, reusable symbol matching the given key. | Searches the **global symbol registry** for an existing symbol with the specified key. If found, it returns it; if not, it creates a new one in the registry and returns it. |
| **`Symbol.keyFor(sym)`** | `sym` _(Symbol)_: A symbol primitive to check.        | \*(String                                                              | undefined)\*: The key string if found, otherwise `undefined`.                                                                                                                | Looks up a symbol in the global registry and returns its corresponding string key name. It returns `undefined` if the symbol was created locally (via `Symbol()`) rather than globally. |

***

### Instance Methods

These methods are inherited from `Symbol.prototype` and are called on individual symbol instances.

| Method                           | Parameters                                                                                  | Return Value                                                                       | Description                                                                                                                                                                                                                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`toString()`**                 | None                                                                                        | _(String)_: A string representation of the symbol (e.g., `"Symbol(description)"`). | Overrides `Object.prototype.toString()`. Returns a string format containing the symbol's optional debug description.                                                                                                                                                          |
| **`valueOf()`**                  | None                                                                                        | _(Symbol)_: The raw primitive value of the symbol instance.                        | Overrides `Object.prototype.valueOf()`. Returns the underlying primitive value of the specific Symbol object wrap.                                                                                                                                                            |
| **`[Symbol.toPrimitive](hint)`** | `hint` _(String)_: The type hint coercion context (`"string"`, `"number"`, or `"default"`). | _(Symbol)_: The primitive symbol value itself.                                     | Allows JavaScript engines to explicitly convert the Symbol object to a primitive value. Symbols strictly resist conversion to strings or numbers without explicit casting and will throw errors if coercion is attempted via mathematical or structural formatting templates. |

_(Note: `Symbol.prototype.toSource()` was a legacy, non-standard Mozilla method that has been deprecated and removed from modern implementations)._ [link](https://www.programiz.com/javascript/symbol)

If you are using symbols for specific use cases, would you like an explanation or code examples showing how to use the **Well-Known Symbols** (like `Symbol.iterator` or `Symbol.toPrimitive`) to customize object behavior? [link](https://dev.to/micmath/working-with-javascript-symbols-10k8)

- [link](https://www.scaler.com/topics/javascript-symbol/)\
  Scaler\
  JavaScript Symbol\
  Jan 17, 2023 — Introduction to JavaScript Symbol Symbols in JavaScript are built-in objects whose constructor returns a symbol primitive that is ...
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data%5Fstructures)\
  MDN Web Docs\
  JavaScript data types and data structures\
  Jul 8, 2025 — Primitive coercion This operation does not do any conversion if the value is already a primitive. Objects are converted to primiti...
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Symbol)\
  MDN Web Docs\
  Symbol - JavaScript\
  Description Shared Symbols in the global Symbol registry The above syntax using the Symbol() function will create a Symbol whose v...

Show all

# all js function methods and params return of each

In JavaScript, every function is inherently an instance of the built-in **`Function` object**. The `Function.prototype` provides **three major core methods** used to control the execution context (`this` value) and arguments of a function, alongside a few standard utility methods. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Function)

Here is the comprehensive breakdown of every native JavaScript function method, including their parameters and return values:

### Core Execution Methods

| Method        | Parameters                                                                                                                                             | Return Value                                                                                                   | Description                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **`apply()`** | **`thisArg`** _(Object)_: The value to use as `this`.**`argsArray`** _(Array/Like, Optional)_: An array-like object containing the arguments to pass.  | **`any`**: The literal result returned by calling the target function.                                         | Invokes the function immediately, mapping the array elements to individual function parameters.                                            |
| **`bind()`**  | **`thisArg`** _(Object)_: The value to be bound as `this`.**`arg1, arg2, ...`** _(Optional)_: Pre-specified arguments to prepend to the function call. | **`Function`**: A brand-new copy of the original function permanently bound to the provided `thisArg` context. | Creates a new function package without executing it right away. Commonly used for event handlers or currying.                              |
| **`call()`**  | **`thisArg`** _(Object)_: The value to use as `this`.**`arg1, arg2, ...`** _(Optional)_: Arguments passed individually.                                | **`any`**: The literal result returned by calling the target function.                                         | Invokes the function immediately. Functions identically to `apply()`, but accepts arguments as a comma-separated list instead of an array. |

***

### Standard Utility Methods

- **`toString()`**
  - **Parameters:** None.
  - **Return Value:** **`String`**.
  - **Description:** Returns a string slice representing the exact source code of the function. For native/built-in engine functions, it returns a string like `"function () { [native code] }"`.
- **`[Symbol.hasInstance]()`**
  - **Parameters:** **`value`** _(any)_: The object being tested.
  - **Return Value:** **`Boolean`**.
  - **Description:** The underlying method that powers the `instanceof` operator. It checks if the provided `value` inherits the function's prototype property.

Would you like to see **practical code examples** comparing how `call`, `apply`, and `bind` change the behavior of the `this` keyword, or do you need help using them for a specific application?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Function)\
  MDN Web Docs\
  Function - JavaScript\
  Jul 10, 2025 — Function Baseline \* This feature is well established and works across many devices and browser versions. It's been available acros...

# all js number methods and params return of each

In JavaScript, methods associated with numbers are split into two categories: **Static Methods** (called directly on the global `Number` object) and **Instance Methods** (called on individual number variables or literals). [link](https://www.servicenow.com/community/developer-articles/useful-number-methods-in-javascript/ta-p/2321117)

Here is the complete reference guide detailing every standard `Number` method, its parameters, and what it returns: [link](https://medium.com/swlh/getting-to-know-javascript-built-in-methods-numbers-math-1ea042101a2a)

### 1. Static Methods (Called via `Number.method()`)

| Method                           | Parameters                                                                                                 | Return Value                    | Description                                                                                                                                   |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `Number.isFinite(value)`         | `value`: Any data type.                                                                                    | **Boolean** (`true` or `false`) | Determines whether the passed value is a finite number. Unlike the global `isFinite()`, it does not forcefully convert the value to a number. |
| `Number.isInteger(value)`        | `value`: Any data type.                                                                                    | **Boolean** (`true` or `false`) | Checks if the given value is an integer (a whole number without decimals).                                                                    |
| `Number.isNaN(value)`            | `value`: Any data type.                                                                                    | **Boolean** (`true` or `false`) | Determines whether the passed value is exactly `NaN`. Safer than the global `isNaN()`.                                                        |
| `Number.isSafeInteger(value)`    | `value`: Any data type.                                                                                    | **Boolean** (`true` or `false`) | Checks whether the value is a safe integer (between −(253−1) and 253−1).                                                                      |
| `Number.parseFloat(string)`      | `string`: A string representing a number.                                                                  | **Number** or `NaN`             | Parses a string argument and returns a floating-point number. Identical to the global `parseFloat()`.                                         |
| `Number.parseInt(string, radix)` | `string`: A string.`radix` _(Optional)_: An integer between 2 and 36 representing the numeral system base. | **Number** (Integer) or `NaN`   | Parses a string argument and returns an integer of the specified radix. Identical to the global `parseInt()`.                                 |

### 2. Instance Methods (Called via `num.method()`)

| Method                             | Parameters                                                                                                                                       | Return Value           | Description                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| `toExponential(fractionDigits)`    | `fractionDigits` _(Optional)_: An integer from 0 to 100 specifying the digits after the decimal point.                                           | **String**             | Returns a string representing the number in scientific exponential notation.                                   |
| `toFixed(digits)`                  | `digits` _(Optional)_: An integer from 0 to 100 representing the number of digits after the decimal point (Defaults to 0).                       | **String**             | Formats a number using fixed-point decimal notation and rounds the result.                                     |
| `toLocaleString(locales, options)` | `locales` _(Optional)_: A language tag string (e.g., `'en-US'`).`options` _(Optional)_: An object for customization (e.g., currency formatting). | **String**             | Returns a string with a language-sensitive representation of the number (adds commas, currency symbols, etc.). |
| `toPrecision(precision)`           | `precision` _(Optional)_: An integer representing the number of significant digits.                                                              | **String**             | Returns a string representing the number to the specified number of significant digits.                        |
| `toString(radix)`                  | `radix` _(Optional)_: An integer between 2 and 36 specifying the base to use for representing numeric values (Defaults to 10).                   | **String**             | Converts and returns the number as a string in the specified base (e.g., base 2 for binary).                   |
| `valueOf()`                        | None.                                                                                                                                            | **Number** (Primitive) | Returns the primitive numeric value of the specified `Number` object. (Rarely used explicitly).                |

Would you like to see **code examples** demonstrating how any of these specific methods behave, or are you looking to solve a specific **number formatting** problem?

- [link](https://www.servicenow.com/community/developer-articles/useful-number-methods-in-javascript/ta-p/2321117)\
  ServiceNow\
  Useful Number methods in JavaScript\
  Useful Number methods in JavaScript 1. Tostring The toString() method is what it sounds, returns the number as a string. However, ...
- [link](https://dev.to/catherineisonline/12-javascript-number-methods-cheatsheet-1oie)\
  DEV Community\
  12 JavaScript Number Methods Cheatsheet - DEV Community\
  Number methods explained Number. isFinite() It's a static number method that determines whether the passed number is a finite numb...
- [link](https://medium.com/swlh/getting-to-know-javascript-built-in-methods-numbers-math-1ea042101a2a)\
  Medium\
  Getting To Know JavaScript Built\
  May 14, 2020 — num.toPrecision(digits) Returns a number as a string to the specified number of significant digits — ie the number of digits after...

Show all

# all js bigint methods and params return of each

In JavaScript, `BigInt` is a primitive numeric type used to represent integers larger than 2⁵³ - 1. Unlike regular numbers, `BigInt` is not a standard object and **does not have a vast library of built-in prototype methods**. Instead, most operations are done using standard arithmetic operators (e.g., `+`, `-`, `*`, `**`, `/`, `%`).

Here is the complete list of all built-in **`BigInt` static methods** and **`BigInt.prototype` methods**, along with their parameters and return values.

### Static Methods

These methods are called directly on the `BigInt` constructor.

- #### `BigInt.asIntN(bits, bigint)`
  - **Description:** Clamps a `BigInt` value to a signed integer of the specified number of bits.
  - **Parameters:**
    - `bits` _(Number)_: The number of bits available for the integer (between 0 and 9007199254740991).
    - `bigint` _(BigInt)_: The BigInt value to clamp.
  - **Returns:** _(BigInt)_ A signed BigInt value.

- #### `BigInt.asUintN(bits, bigint)`
  - **Description:** Clamps a `BigInt` value to an unsigned integer of the specified number of bits.
  - **Parameters:**
    - `bits` _(Number)_: The number of bits available for the integer.
    - `bigint` _(BigInt)_: The BigInt value to clamp.
  - **Returns:** _(BigInt)_ An unsigned BigInt value.

***

### Instance Methods (Prototype Methods)

These methods are called on individual `BigInt` instances.

- #### `BigInt.prototype.toString([radix])`
  - **Description:** Returns a string representing the specified `BigInt` object.
  - **Parameters:**
    - `radix` _(Number, Optional)_: An integer between 2 and 36 specifying the base to use for representing numeric values. Defaults to 10.
  - **Returns:** _(String)_ A string representing the BigInt.

- #### `BigInt.prototype.toLocaleString([locales[, options]])`
  - **Description:** Returns a string with a language-sensitive representation of the BigInt.
  - **Parameters:**
    - `locales` _(String/Array, Optional)_: A string with a BCP 47 language tag, or an array of such strings.
    - `options` _(Object, Optional)_: An object with configuration properties (like currency, style, etc., matching `Number.prototype.toLocaleString`).
  - **Returns:** _(String)_ A language-sensitive formatted string.

- #### `BigInt.prototype.valueOf()`
  - **Description:** Returns the wrapped primitive value of the `BigInt` object.
  - **Parameters:** None.
  - **Returns:** _(BigInt)_ The primitive BigInt value itself.

Would you like to see **code examples** of how the bit-clamping methods (`asIntN` / `asUintN`) work, or do you need help with **BigInt arithmetic operators**?

# all js math methods and params return of each

The JavaScript **`Math` object** provides built-in properties and methods for mathematical calculations. Unlike other global objects, `Math` is not a constructor, so all properties and methods are static.

### Rounding & Truncation

| Method           | Parameters   | Returns                                                   |
| ---------------- | ------------ | --------------------------------------------------------- |
| `Math.abs(x)`    | `x` (Number) | The absolute (positive) value of `x`.                     |
| `Math.ceil(x)`   | `x` (Number) | The smallest integer greater than or equal to `x`.        |
| `Math.floor(x)`  | `x` (Number) | The largest integer less than or equal to `x`.            |
| `Math.round(x)`  | `x` (Number) | The value of `x` rounded to the nearest integer.          |
| `Math.fround(x)` | `x` (Number) | The nearest single-precision float representation of `x`. |
| `Math.trunc(x)`  | `x` (Number) | The integer part of `x` by removing fractional digits.    |

### Exponents & Roots

| Method           | Parameters                 | Returns                                    |
| ---------------- | -------------------------- | ------------------------------------------ |
| `Math.cbrt(x)`   | `x` (Number)               | The cube root of `x`.                      |
| `Math.exp(x)`    | `x` (Number)               | 𝑒𝑥, where 𝑒 is Euler's number.             |
| `Math.expm1(x)`  | `x` (Number)               | 𝑒𝑥−1.                                      |
| `Math.pow(x, y)` | `x` (Base), `y` (Exponent) | The value of `x` to the power of `y` (𝑥𝑦). |
| `Math.sqrt(x)`   | `x` (Number)               | The square root of `x`.                    |

### Logarithms

| Method          | Parameters   | Returns                                |
| --------------- | ------------ | -------------------------------------- |
| `Math.log(x)`   | `x` (Number) | The natural logarithm (base 𝑒) of `x`. |
| `Math.log10(x)` | `x` (Number) | The base 10 logarithm of `x`.          |
| `Math.log1p(x)` | `x` (Number) | The natural logarithm (base 𝑒) of 1+𝑥. |
| `Math.log2(x)`  | `x` (Number) | The base 2 logarithm of `x`.           |

### Trigonometry

| Method             | Parameters                     | Returns                                          |
| ------------------ | ------------------------------ | ------------------------------------------------ |
| `Math.acos(x)`     | `x` (Number between -1 and 1)  | The arccosine (in radians) of `x`.               |
| `Math.acosh(x)`    | `x` (Number ≥ 1)               | The hyperbolic arccosine of `x`.                 |
| `Math.asin(x)`     | `x` (Number between -1 and 1)  | The arcsine (in radians) of `x`.                 |
| `Math.asinh(x)`    | `x` (Number)                   | The hyperbolic arcsine of `x`.                   |
| `Math.atan(x)`     | `x` (Number)                   | The arctangent (in radians) of `x`.              |
| `Math.atanh(x)`    | `x` (Number between -1 and 1)  | The hyperbolic arctangent of `x`.                |
| `Math.atan2(y, x)` | `y` (Ordinate), `x` (Abscissa) | The arctangent of the quotient of its arguments. |
| `Math.cos(x)`      | `x` (Angle in radians)         | The cosine of `x`.                               |
| `Math.cosh(x)`     | `x` (Number)                   | The hyperbolic cosine of `x`.                    |
| `Math.sin(x)`      | `x` (Angle in radians)         | The sine of `x`.                                 |
| `Math.sinh(x)`     | `x` (Number)                   | The hyperbolic sine of `x`.                      |
| `Math.tan(x)`      | `x` (Angle in radians)         | The tangent of `x`.                              |
| `Math.tanh(x)`     | `x` (Number)                   | The hyperbolic tangent of `x`.                   |

### Advanced & Miscellaneous

| Method             | Parameters                 | Returns                                                                             |
| ------------------ | -------------------------- | ----------------------------------------------------------------------------------- |
| `Math.clz32(x)`    | `x` (Number)               | The number of leading zero bits in the 32-bit binary of `x`.                        |
| `Math.hypot(...n)` | One or more numbers        | The square root of the sum of squares of its arguments.                             |
| `Math.imul(x, y)`  | `x` (Number), `y` (Number) | The result of the C-like 32-bit multiplication of the arguments.                    |
| `Math.max(...n)`   | Zero or more numbers       | The largest of the given numbers. Returns `-Infinity` if empty.                     |
| `Math.min(...n)`   | Zero or more numbers       | The smallest of the given numbers. Returns `Infinity` if empty.                     |
| `Math.random()`    | None                       | A pseudo-random floating-point number from `0` (inclusive) up to `1` (exclusive).   |
| `Math.sign(x)`     | `x` (Number)               | The sign of `x`, indicating whether it is positive (`1`), negative (`-1`), or zero. |

Would you like to see **practical code examples** for any of these specific methods, or do you need help building a **custom math utility function**?

# all js string methods and params return of each

Here is a comprehensive breakdown of all modern, non-deprecated **JavaScript String prototype methods**. Because JavaScript strings are **immutable**, none of these methods modify the original string; they always return a new value. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String)

***

### 1. Extracting Substrings & Characters

Use these methods to pull out specific letters or chunks of text. [link](https://www.youtube.com/watch?v=-wjnCCyCKUg)

| Method                  | Parameters                                    | Returns                                                                           |
| ----------------------- | --------------------------------------------- | --------------------------------------------------------------------------------- |
| `at(index)`             | `index` (Integer, supports negative indices)  | A single character string at the given position, or `undefined` if out of bounds. |
| `charAt(index)`         | `index` (Integer, defaults to 0)              | A single character string at the given position, or `""` if out of bounds.        |
| `charCodeAt(index)`     | `index` (Integer)                             | An integer representing the UTF-16 code unit value at the index.                  |
| `codePointAt(pos)`      | `pos` (Integer)                               | A non-negative integer representing the Unicode code point value.                 |
| `slice(start, end)`     | `start` (Int), `end` (Optional Int)           | A new string containing the extracted section. Accepts negative indices.          |
| `split(sep, limit)`     | `sep` (String/RegExp), `limit` (Optional Int) | An array of strings split by the designated separator.                            |
| `substring(start, end)` | `start` (Int), `end` (Optional Int)           | A new string extracted between indices. Negative numbers are treated as `0`.      |

***

### 2. Searching & Finding Positions

Use these methods to locate or verify the presence of text inside a string. [link](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/Useful%5Fstring%5Fmethods)

| Method                        | Parameters                                              | Returns                                                                  |
| ----------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| `endsWith(searchStr, len)`    | `searchStr` (String), `len` (Optional end position Int) | `true` if the string ends with the target text, otherwise `false`.       |
| `includes(searchStr, pos)`    | `searchStr` (String), `pos` (Optional start index Int)  | `true` if the string contains the target text, otherwise `false`.        |
| `indexOf(searchStr, pos)`     | `searchStr` (String), `pos` (Optional start index Int)  | The index of the **first** occurrence of the text, or `-1` if not found. |
| `lastIndexOf(searchStr, pos)` | `searchStr` (String), `pos` (Optional end index Int)    | The index of the **last** occurrence of the text, or `-1` if not found.  |
| `match(regex)`                | `regex` (RegExp object or string)                       | An array of matches, or `null` if no match is found.                     |
| `matchAll(regex)`             | `regex` (RegExp object with `/g` flag)                  | An iterable iterator containing all matching results and capture groups. |
| `search(regex)`               | `regex` (RegExp object or string)                       | The index of the first match, or `-1` if no match is found.              |
| `startsWith(searchStr, pos)`  | `searchStr` (String), `pos` (Optional start index Int)  | `true` if the string begins with the target text, otherwise `false`.     |

***

### 3. Modifying & Formatting Text

Use these methods to alter casing, add padding, or clean up spacing. [link](https://www.youtube.com/watch?v=4RHPbSpEpbw\&t=9)

| Method                             | Parameters                                            | Returns                                                    |
| ---------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------- |
| `concat(...strings)`               | One or more strings to append                         | A new combined string.                                     |
| `padEnd(targetLen, padStr)`        | `targetLen` (Int), `padStr` (Optional padding string) | A new string of the target length padded at the end.       |
| `padStart(targetLen, padStr)`      | `targetLen` (Int), `padStr` (Optional padding string) | A new string of the target length padded at the start.     |
| `repeat(count)`                    | `count` (Integer ≥ 0)                                 | A new string containing the specified number of copies.    |
| `replace(pattern, replacement)`    | `pattern` (Str/RegExp), `replacement` (Str/Function)  | A new string with the **first** match replaced.            |
| `replaceAll(pattern, replacement)` | `pattern` (Str/RegExp), `replacement` (Str/Function)  | A new string with **all** matches replaced.                |
| `toLowerCase()`                    | _None_                                                | A new string converted completely to lowercase.            |
| `toUpperCase()`                    | _None_                                                | A new string converted completely to uppercase.            |
| `toLocaleLowerCase(locales)`       | `locales` (Optional string/array of language tags)    | A new string lowercase mapping based on the host's locale. |
| `toLocaleUpperCase(locales)`       | `locales` (Optional string/array of language tags)    | A new string uppercase mapping based on the host's locale. |
| `trim()`                           | _None_                                                | A new string with whitespace removed from both ends.       |
| `trimEnd()` / `trimRight()`        | _None_                                                | A new string with whitespace removed from the end.         |
| `trimStart()` / `trimLeft()`       | _None_                                                | A new string with whitespace removed from the beginning.   |

***

### 4. Utilities & Advanced String Methods

Use these methods for localization, validation, and internal JavaScript behaviors. [link](https://hassib.hashnode.dev/a-comprehensive-guide-to-string-methods-of-javascript)

| Method                      | Parameters                                             | Returns                                                                                                         |
| --------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `isWellFormed()`            | _None_                                                 | A boolean indicating if the string contains any lone surrogates.                                                |
| `localeCompare(compareStr)` | `compareStr` (String), plus optional locale parameters | A number indicating whether the string comes before, after, or is identical to the target string in sort order. |
| `normalize(form)`           | `form` (Optional string: "NFC", "NFD", "NFKC", "NFKD") | A new string containing the Unicode Normalization Form of the text.                                             |
| `toWellFormed()`            | _None_                                                 | A new string where all lone surrogates are replaced by the Unicode replacement character U+FFFD.                |
| `toString()`                | _None_                                                 | The primitive string value itself.                                                                              |
| `valueOf()`                 | _None_                                                 | The primitive string value itself.                                                                              |
| `[Symbol.iterator]()`       | _None_                                                 | A new Iterator object that iterates over the string's code points.                                              |

_(Note: `substr()` and `anchor()` have been omitted as they are legacy/deprecated and no longer recommended for modern applications.)_

Would you like an example of how to use any of these methods (such as **regex searching** via `matchAll` or **extracting sections** using `slice`) in your code?

- [link](https://www.youtube.com/watch?v=-wjnCCyCKUg)\
  YouTube·Koding 101\
  10 JS String Methods You MUST KNOW!!!\
  Sep 7, 2022 — this can be a common on the front front end for doing data validation on text field input limiting the length of certain data obje...\
  17:40
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String)\
  MDN Web Docs\
  String - JavaScript - MDN Web Docs\
  String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor context (that is,
- [link](https://www.w3schools.com/js/js%5Fstring%5Fmethods.asp)\
  W3Schools\
  JavaScript String Methods - W3Schools\
  Example. text = "Hello" + " " + "World!"; text = "Hello".concat(" ", "World!"); All string methods return a new string. They don't...

Show all

# all js regexp methods and params return of each

In JavaScript, regular expression operations are divided into two categories: **native `RegExp` methods** (called directly on the regex object) and **`String` methods** (called on a string, passing the regex as an argument). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular%5Fexpressions)

Here is the complete breakdown of all standard regex-related methods, their parameters, and what they return.

***

### 1. Native RegExp Methods

These methods use the syntax: `regex.method(string)`. [link](https://www.freecodecamp.org/news/regex-in-javascript/)

#### `RegExp.prototype.test()`

- **Description:** Checks if a pattern exists within a string. [link](https://www.youtube.com/watch?v=WaK9mrC3Bew\&t=1)
- **Parameters:**
  - `str` (String): The string to test against the regex.
- **Return Value:**
  - `true` if a match is found; `false` if not. [link](https://builtin.com/software-engineering-perspectives/javascript-regex)

#### `RegExp.prototype.exec()`

- **Description:** Searches for a match in a specified string. **Note:** If the `g` (global) or `y` (sticky) flag is set, it updates the regex's `lastIndex` property, allowing you to call it in a loop to find successive matches. [link](https://stackoverflow.com/questions/6323417/regex-to-extract-all-matches-from-string-using-regexp-exec)
- **Parameters:**
  - `str` (String): The string to search.
- **Return Value:**
  - `null` if no match is found.
  - An **Array** if a match is found. The array includes the matched text at index `0`, followed by any captured groups. It also features additional properties:
    - `index`: The 0-based index where the match starts.
    - `input`: The original input string.
    - `groups`: An object of named capturing groups, or `undefined` if none are defined. [link](https://javascript.info/regexp-methods)

***

### 2. String Methods (Accepting RegExp)

These methods use the syntax: `string.method(regex)`. [link](https://www.freecodecamp.org/news/regex-in-javascript/)

| Method             | Parameters              | Return Value          | Behavior Notes                                                                                                                                                                     |
| ------------------ | ----------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`match()`**      | `regexp`                | **Array** or **null** | **Without `g` flag:** Returns an array identical to `exec()` (first match + capture groups).**With `g` flag:** Returns a flat array of all full matches (omitting capture groups). |
| **`matchAll()`**   | `regexp`                | **Iterator**          | Returns a non-restartable iterable iterator of all match arrays (including capture groups). **Throws `TypeError`** if the `g` flag is missing.                                     |
| **`search()`**     | `regexp`                | **Number**            | Returns the **index** of the first match. Returns **`-1`** if no match is found. Ignores the `g` flag.                                                                             |
| **`replace()`**    | `regexp`, `replacement` | **String**            | Returns a **new string** with matches replaced. `replacement` can be a string or a callback function. Only replaces the _first_ occurrence unless the `g` flag is used.            |
| **`replaceAll()`** | `regexp`, `replacement` | **String**            | Returns a **new string** with all matches replaced. **Throws `TypeError`** if the `g` flag is not explicitly passed with the regex.                                                |
| **`split()`**      | `regexp`, `limit` (opt) | **Array**             | Returns an **array of substrings** split by the matches. If the regex contains capturing groups `()`, the matched groups are also spliced into the returned array.                 |

***

### 3. New Static Methods (ES2025+)

#### `RegExp.escape()`

- **Description:** Escapes special characters so a string can safely be passed into the `new RegExp()` constructor. [link](https://www.w3schools.com/js/js%5Fregexp%5Fmethods.asp)
- **Parameters:**
  - `str` (String): A raw text string.
- **Return Value:**
  - A **new String** where characters belonging to the regular expression syntax (like `*`, `+`, `?`, etc.) are escaped with a backslash. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular%5Fexpressions)

If you are currently debugging or building a pattern, let me know:

- What **specific text** you are trying to parse
- What **information** you need to extract from it

I can provide the exact **regex syntax** and **method choice** for your use case!

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular%5Fexpressions)\
  MDN Web Docs\
  Regular expressions - JavaScript - MDN Web Docs\
  /a\\\*b/ and new RegExp("a\\\\\*b") create the same expression, which searches for "a" followed by a literal "\*" followed by "b". The R...
- [link](https://www.freecodecamp.org/news/regex-in-javascript/)\
  freeCodeCamp\
  Regular Expressions (RegEx) in JavaScript – A Handbook for ...\
  Feb 27, 2024 — How to Use Regular Expressions in JavaScript You can use regular expressions with various methods available for both the RegExp an...
- [link](https://www.bennadel.com/blog/1742-using-regular-expressions-in-javascript-a-general-overview.htm)\
  Ben Nadel\
  Using Regular Expressions In Javascript (A General Overview)\
  When the string match() method is called and the given regular expression is running with the global flag, "g", the returned array...

Show all

# all js date methods and params return of each

4:57 AM

The native **JavaScript `Date` object** provides constructor forms, static methods, and instance methods (getters, setters, and conversion formatters). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date)

Below is the comprehensive guide grouping every core JavaScript `Date` method, its expected parameters, and what it returns.

***

### 1. The Date Constructor

Used to instantiate new `Date` objects. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date/Date)

| Constructor Syntax                                               | Parameters                                                                                                                        | Return Value                                                                          |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `new Date()`                                                     | _None_                                                                                                                            | A new `Date` object representing the current date and time.                           |
| `new Date(value)`                                                | `value`: `Number` (Unix timestamp in milliseconds)                                                                                | A new `Date` object corresponding to the timestamp.                                   |
| `new Date(dateString)`                                           | `dateString`: `String` (A valid date format string)                                                                               | A new `Date` object parsed from the string.                                           |
| `new Date(year, monthIndex, [day, hours, minutes, seconds, ms])` | `year` (4 digits), `monthIndex` (0-11). Optional: `day` (1-31), `hours` (0-23), `minutes` (0-59), `seconds` (0-59), `ms` (0-999). | A new `Date` object with the explicitly designated components.                        |
| `Date()`                                                         | _Any parameters passed are ignored_                                                                                               | A `String` representation of the current date and time (does _not_ return an object). |

***

### 2. Static Methods

Methods called directly on the global `Date` class itself. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date)

| Method                                                   | Parameters                                      | Return Value                                                                      |
| -------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| `Date.now()`                                             | _None_                                          | `Number`: Current timestamp in milliseconds since Jan 1, 1970 UTC.                |
| `Date.parse(dateString)`                                 | `dateString`: `String`                          | `Number`: The millisecond timestamp of the parsed date, or `NaN` if invalid.      |
| `Date.UTC(year, monthIndex, [day, hours, min, sec, ms])` | Same numeric parts as the standard constructor. | `Number`: The millisecond timestamp relative to Coordinated Universal Time (UTC). |

***

### 3. Instance Getter Methods

Methods used to retrieve individual blocks of date components according to **local time**. [link](https://javascript.info/date)

| Method                | Parameters | Return Value                                                           |
| --------------------- | ---------- | ---------------------------------------------------------------------- |
| `getDate()`           | _None_     | `Number`: Day of the month (1–31).                                     |
| `getDay()`            | _None_     | `Number`: Day of the week (0–6). **0 = Sunday**, 1 = Monday, etc.      |
| `getFullYear()`       | _None_     | `Number`: The 4-digit year (e.g., 2026).                               |
| `getHours()`          | _None_     | `Number`: Hour of the day (0–23).                                      |
| `getMilliseconds()`   | _None_     | `Number`: Milliseconds (0–999).                                        |
| `getMinutes()`        | _None_     | `Number`: Minutes (0–59).                                              |
| `getMonth()`          | _None_     | `Number`: Month index (0–11). **0 = January**, 11 = December.          |
| `getSeconds()`        | _None_     | `Number`: Seconds (0–59).                                              |
| `getTime()`           | _None_     | `Number`: Timestamp in milliseconds (same as `valueOf()`).             |
| `getTimezoneOffset()` | _None_     | `Number`: Time-zone difference between local time and UTC, in minutes. |

***

### 4. UTC Getter Methods

Identical to local getters, but these resolve components using **Coordinated Universal Time (UTC)**. None of these take parameters. [link](https://www.geeksforgeeks.org/javascript/javascript-date-objects/)

- `getUTCDate()` → `Number` (1–31)
- `getUTCDay()` → `Number` (0–6)
- `getUTCFullYear()` → `Number` (4-digit year)
- `getUTCHours()` → `Number` (0–23)
- `getUTCMilliseconds()` → `Number` (0–999)
- `getUTCMinutes()` → `Number` (0–59)
- `getUTCMonth()` → `Number` (0–11)
- `getUTCSeconds()` → `Number` (0–59) [link](https://www.tutorialsteacher.com/javascript/javascript-date-methods-reference)

***

### 5. Instance Setter Methods

Methods used to change parts of an existing date object using **local time**. All setter methods alter the underlying instance data and return a **numeric timestamp** of the newly updated date. [link](https://www.w3schools.com/js/js%5Fdate%5Fmethods%5Fset.asp)

| Method                            | Parameters                                       | Return Value                 |
| --------------------------------- | ------------------------------------------------ | ---------------------------- |
| `setDate(day)`                    | `day`: `Number` (1–31)                           | `Number`: Updated timestamp. |
| `setFullYear(year, [month, day])` | `year`: `Number`. Optional: `month`, `day`       | `Number`: Updated timestamp. |
| `setHours(hours, [min, sec, ms])` | `hours`: `Number`. Optional: `min`, `sec`, `ms`  | `Number`: Updated timestamp. |
| `setMilliseconds(ms)`             | `ms`: `Number`                                   | `Number`: Updated timestamp. |
| `setMinutes(min, [sec, ms])`      | `min`: `Number`. Optional: `sec`, `ms`           | `Number`: Updated timestamp. |
| `setMonth(monthIndex, [day])`     | `monthIndex`: `Number` (0-11). Optional: `day`   | `Number`: Updated timestamp. |
| `setSeconds(sec, [ms])`           | `sec`: `Number`. Optional: `ms`                  | `Number`: Updated timestamp. |
| `setTime(timestamp)`              | `timestamp`: `Number` (milliseconds since epoch) | `Number`: Updated timestamp. |

***

### 6. UTC Setter Methods

Identical to local setters, but changes are explicitly evaluated in **UTC**. They all take the same parameters as their local counterparts and return a **numeric timestamp**. [link](https://www.geeksforgeeks.org/javascript/javascript-date-objects/)

- `setUTCDate(day)`
- `setUTCFullYear(year, [month, day])`
- `setUTCHours(hours, [min, sec, ms])`
- `setUTCMilliseconds(ms)`
- `setUTCMinutes(min, [sec, ms])`
- `setUTCMonth(monthIndex, [day])`
- `setUTCSeconds(sec, [ms])`

***

### 7. String Conversion & Formatting Methods

Methods that extract string expressions out of a `Date` object. None of these alter the original date instance. [link](https://www.w3schools.com/js/js%5Fdates.asp)

| Method                                   | Parameters                                                           | Return Value                                                                      |
| ---------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `toDateString()`                         | _None_                                                               | `String`: Only the date portion (e.g., `"Sat Sep 26 2026"`).                      |
| `toISOString()`                          | _None_                                                               | `String`: ISO 8601 Extended Format in UTC (e.g., `"2026-09-26T11:57:00.000Z"`).   |
| `toJSON()`                               | _None_                                                               | `String`: Internal shortcut wrapper to `toISOString()`.                           |
| `toLocaleDateString([locales, options])` | Optional `locales` string/array, and `options` configuration object. | `String`: Language-sensitive date format (e.g., `"9/26/2026"`).                   |
| `toLocaleString([locales, options])`     | Optional formatting locales and rules options.                       | `String`: Language-sensitive date and time string.                                |
| `toLocaleTimeString([locales, options])` | Optional formatting locales and rules options.                       | `String`: Language-sensitive time format (e.g., `"4:57:00 AM"`).                  |
| `toString()`                             | _None_                                                               | `String`: Full date, time, and timezone summary string.                           |
| `toTimeString()`                         | _None_                                                               | `String`: Only the time portion with local timezone info.                         |
| `toUTCString()`                          | _None_                                                               | `String`: Date string formatted relative to UTC timezone.                         |
| `valueOf()`                              | _None_                                                               | `Number`: Returns primitive primitive sequence value (equivalent to `getTime()`). |

Are you trying to solve a specific problem like **calculating time differences**, **formatting custom strings**, or handles **timezone offsets**? I can give you explicit code snippets depending on what you are building.

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date)\
  MDN Web Docs\
  Date - JavaScript | MDN\
  Here are some details about Date objects: \* \*\*Constructor\*\* When called as a constructor, returns a new Date object. When called a...
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date/Date)\
  MDN Web Docs\
  Date() constructor - JavaScript - MDN Web Docs - Mozilla\
  new Date() new Date(value) new Date(dateString) new Date(dateObject) new Date(year, monthIndex) new Date(year, monthIndex, day) ne...
- [link](https://javascript.info/date)\
  The Modern JavaScript Tutorial\
  Date and time - The Modern JavaScript Tutorial\
  All the methods above return the components relative to the local time zone. There are also their UTC-counterparts, that return da...

Show all

# all js typedarray methods and params return of each

4:59 AM

The **`TypedArray`** global object represents an array-like view of an underlying binary data buffer. There is no distinct `TypedArray` class; instead, it refers to an intrinsic prototype shared by all typed array constructors (such as `Uint8Array`, `Int32Array`, `Float64Array`, etc.). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed%5Farrays)

Below is the comprehensive list of all static and prototype methods available on [MDN's TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/TypedArray) instances, grouped by category, including parameters and return values. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/TypedArray)

***

### Static Methods

- **`TypedArray.from()`**
  - **Parameters:**
    - `source`: An array-like or iterable object to convert to a typed array.
    - `mapFn` _(Optional)_: A map function to call on every element.
    - `thisArg` _(Optional)_: Value to use as `this` when executing `mapFn`.
  - **Returns:** A new `TypedArray` instance. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/TypedArray/from)
- **`TypedArray.of()`**
  - **Parameters:** `element0, element1, ..., elementN`: Values to create the typed array with.
  - **Returns:** A new `TypedArray` instance containing the provided arguments. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/TypedArray/of)

***

### Mutating & In-Place Methods

- **`copyWithin()`**
  - **Parameters:**
    - `target`: Zero-based index at which to copy the sequence to.
    - `start`: Zero-based index at which to start copying elements from.
    - `end` _(Optional)_: Zero-based index at which to end copying elements from (exclusive).
  - **Returns:** The modified typed array. [link](https://www.youtube.com/watch?v=pNUw7A6raXk\&t=109)
- **`fill()`**
  - **Parameters:**
    - `value`: Value to fill the typed array with.
    - `start` _(Optional)_: Start index (default `0`).
    - `end` _(Optional)_: End index (exclusive, default `this.length`).
  - **Returns:** The modified typed array. [link](https://www.youtube.com/watch?v=pNUw7A6raXk\&t=109)
- **`reverse()`**
  - **Parameters:** None.
  - **Returns:** The modified typed array with elements reversed in-place. [link](https://www.youtube.com/watch?v=ZIr4lJSPPPE)
- **`set()`**
  - **Parameters:**
    - `array` or `typedarray`: The source array to copy values from.
    - `offset` _(Optional)_: The index in the target array at which to begin writing values (default `0`).
  - **Returns:** `undefined`. [link](https://www.w3schools.com/js/js%5Ftyped%5Fmethods.asp)
- **`sort()`**
  - **Parameters:** `compareFn` _(Optional)_: A function that defines the sort order. If omitted, elements are sorted numerically.
  - **Returns:** The sorted typed array. [link](https://www.w3schools.com/js/js%5Ftyped%5Fmethods.asp)

***

#### Iteration & Callback Methods

_The `callbackFn` used in these methods generally accepts `element`, `index`, and `array` as parameters._ [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/TypedArray/every)

- **`every()`** — Parameters: `callbackFn`, `thisArg` _(Optional)_. Returns a boolean.
- **`filter()`** — Parameters: `callbackFn`, `thisArg` _(Optional)_. Returns a new filtered typed array.
- **`find()`** / **`findLast()`** — Parameters: `callbackFn`, `thisArg` _(Optional)_. Returns the matching element or `undefined`.
- **`findIndex()`** / **`findLastIndex()`** — Parameters: `callbackFn`, `thisArg` _(Optional)_. Returns the matching index or `-1`.
- **`forEach()`** — Parameters: `callbackFn`, `thisArg` _(Optional)_. Returns `undefined`.
- **`map()`** — Parameters: `callbackFn`, `thisArg` _(Optional)_. Returns a new mapped typed array.
- **`reduce()`** / **`reduceRight()`** — Parameters: `callbackFn`, `initialValue` _(Optional)_. Returns the accumulated reduction result.
- **`some()`** — Parameters: `callbackFn`, `thisArg` _(Optional)_. Returns a boolean. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/TypedArray/forEach)

***

#### Non-Mutating Element Search & Access

- **`at()`** — Parameters: `index`. Returns the element or `undefined`.
- **`includes()`** — Parameters: `searchElement`, `fromIndex` _(Optional)_. Returns a boolean.
- **`indexOf()`** / **`lastIndexOf()`** — Parameters: `searchElement`, `fromIndex` _(Optional)_. Returns the index or `-1`. [link](https://www.youtube.com/watch?v=ZIr4lJSPPPE)

***

#### Sub-setting & Copying

- **`slice()`** — Parameters: `start` _(Optional)_, `end` _(Optional)_. Returns a new shallow-copy typed array.
- **`subarray()`** — Parameters: `begin` _(Optional)_, `end` _(Optional)_. Returns a new view on the same buffer.
- **`toReversed()`** / **`toSorted()`** — Parameters: `compareFn` _(Optional)_ (for sorted). Returns a new modified instance.
- **`with()`** — Parameters: `index`, `value`. Returns a new instance with the replaced element. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/TypedArray/with)

***

#### Conversion & String Serialization

- **`join()`** — Parameters: `separator` _(Optional)_. Returns a combined string.
- **`toLocaleString()`** / **`toString()`** — Parameters: None or locale options. Returns a string representation. [link](https://www.youtube.com/watch?v=ZIr4lJSPPPE)

***

#### Iterators

- **`entries()`** — Returns `[index, value]` pairs.
- **`keys()`** — Returns array keys/indexes.
- **`values()`** — Returns array values. [link](https://www.geeksforgeeks.org/javascript/javascript-typedarray-keys-method/)

Would you like to see code **examples** showing how `subarray()` and `slice()` manipulate memory buffers differently, or do you need help **choosing** the right `TypedArray` constructor (like `Uint8Array` vs `Float32Array`) for your data?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/TypedArray)\
  MDN Web Docs\
  TypedArray - JavaScript | MDN\
  Typed arrays have the following properties: \* \*\*BYTES\_PER\_ELEMENT\*\* Returns a number value of the element size for the different T...
- [link](https://www.w3schools.com/js/js%5Ftyped%5Fmethods.asp)\
  W3Schools\
  JavaScript Typed Array Methods - W3Schools\
  Typed Arrays share many methods with Standard Arrays: Iteration: forEach(), map(), filter(), reduce(), reduceRight(), every(), som...
- [link](https://www.youtube.com/watch?v=ZIr4lJSPPPE)\
  YouTube·PortEXE\
  Every JavaScript Array Method Explained With Examples\
  Every JavaScript Array Method Explained With Examples hey everybody so in this video I'm going to be going over all of the JavaScr...\
  47:42

Show all

# all js map object methods and params return of each

The JavaScript **`Map` object** is a collection of keyed data items that maintains insertion order and allows keys of **any data type**. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)

Here is the complete reference of all standard **`Map` static and instance methods**, including their parameters and return values.

***

### Static Methods

Static methods are called directly on the namespace (`Map.groupBy()`) rather than on an instance.

| Method              | Parameters                                                     | Returns                | Description                                                                            |
| ------------------- | -------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| **`Map.groupBy()`** | `items` _(Iterable)_,`callbackFn(element, index)` _(Function)_ | A new **`Map`** object | Groups elements of an iterable based on the string or symbol returned by `callbackFn`. |

***

### Instance Methods

These methods are available on any initialized `Map` instance (e.g., `const myMap = new Map()`).

| Method          | Parameters                                                    | Returns                                             | Description                                                |
| --------------- | ------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| **`set()`**     | `key` _(Any)_,`value` _(Any)_                                 | The **same `Map` instance** (allows chaining)       | Adds or updates an element with a specified key and value. |
| **`get()`**     | `key` _(Any)_                                                 | The **associated value**, or **`undefined`**        | Returns the element associated with the specified key.     |
| **`has()`**     | `key` _(Any)_                                                 | **`true`** or **`false`**                           | Checks if an element with the specified key exists.        |
| **`delete()`**  | `key` _(Any)_                                                 | **`true`** (if removed) or **`false`** (if missing) | Removes the specified element from the Map.                |
| **`clear()`**   | _None_                                                        | **`undefined`**                                     | Removes all elements from the Map object.                  |
| **`keys()`**    | _None_                                                        | A new **`Map Iterator`** object                     | Yields the keys for each element in insertion order.       |
| **`values()`**  | _None_                                                        | A new **`Map Iterator`** object                     | Yields the values for each element in insertion order.     |
| **`entries()`** | _None_                                                        | A new **`Map Iterator`** object                     | Yields `[key, value]` arrays for each element.             |
| **`forEach()`** | `callbackFn(value, key, map)` _(Req.)_,`thisArg` _(Optional)_ | **`undefined`**                                     | Executes the callback once for each key-value pair.        |

***

### Core Instance Properties (Bonus Reference)

While not methods, you will frequently use these built-in instance hooks:

- **`size`**: A property that returns the **integer number of elements** in the Map.
- **`[Symbol.iterator]()`**: The default iterator method. Calling `myMap[Symbol.iterator]()` returns the exact same function as **`entries()`**. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/entries)

To verify implementation specifics or review upcoming changes, you can dive into the comprehensive MDN Web Docs Map Reference. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)

Would you like to see **code examples** demonstrating how to use specific methods, or perhaps an explanation of how a **`Map`** differs from a standard **plain JavaScript object**?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)\
  MDN Web Docs\
  Map - JavaScript - MDN Web Docs\
  Instance methods Map.prototype.getOrInsert() Returns the value corresponding to the specified key in this Map . If the key is not ...
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/values)\
  MDN Web Docs\
  Map.prototype.values() - JavaScript | MDN\
  Jul 20, 2025 — The syntax for \`values()\` is: \* \*\*Parameters\*\* None \* \*\*Return value\*\* A new iterable iterator object Here's an example of using \`
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/forEach)\
  MDN Web Docs\
  Map.prototype.forEach() - JavaScript - MDN Web Docs\
  The following code logs a line for each element in a Map object: js Copy function logMapElements(value, key, map) { console. log(\`

Show all

# all js set methods and params return of each

In JavaScript, the **`Set` object** is a collection of unique values. [link](https://www.youtube.com/watch?v=3oLoZMqqvZY\&t=1)

The complete breakdown of all standard **`Set` methods**, including their parameters, return values, and the modern **Set Composition methods** (introduced to perform mathematical set operations like unions and intersections), is organized below. [link](https://dev.to/arunteja/mastering-javascript-set-operations-7-powerful-methods-you-cant-miss-4b4c)

***

### 1. Basic CRUD & Utility Methods

These methods are used to modify, inspect, or manage the individual elements inside a `Set`. [link](https://www.geeksforgeeks.org/javascript/javascript-set-reference/)

| Method              | Parameters                       | Return Value                                                                       | Description                                                               |
| ------------------- | -------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **`add(value)`**    | `value`: The value to add.       | The `Set` object itself (allows chaining).                                         | Inserts a new element with a specified value if it doesn't already exist. |
| **`delete(value)`** | `value`: The value to remove.    | **`true`** if the element existed and was removed; **`false`** if it didn't exist. | Removes the specified element from the `Set`.                             |
| **`has(value)`**    | `value`: The value to check for. | **`true`** if the value exists in the set; otherwise **`false`**.                  | Tests whether an element is present in the `Set` object.                  |
| **`clear()`**       | None.                            | **`undefined`**.                                                                   | Removes all elements from the `Set` object.                               |

***

### 2. Iteration Methods

These methods are used to loop through the set elements. Sets preserve the **insertion order** of elements. [link](https://www.youtube.com/watch?v=sb%5FqRmVyJyM)

| Method                              | Parameters                                                                                                              | Return Value                    | Description                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **`values()`**                      | None.                                                                                                                   | A new **`SetIterator`** object. | Returns an iterable containing the values for each element in insertion order.                                        |
| **`keys()`**                        | None.                                                                                                                   | A new **`SetIterator`** object. | An alias for `.values()`. It exists solely to maintain compatibility with `Map` objects.                              |
| **`entries()`**                     | None.                                                                                                                   | A new **`SetIterator`** object. | Returns an iterator yielding arrays of `[value, value]` for parity with `Map.prototype.entries()`.                    |
| **`forEach(callbackFn, thisArg?)`** | 1. `callbackFn(value, key, set)`: Function executed for each element.2. `thisArg` _(Optional)_: Value to use as `this`. | **`undefined`**.                | Invokes a callback function once for each value present in the `Set`. Note that `key` and `value` are identical here. |

***

### 3. Set Composition Methods (Mathematical Operations)

These built-in methods allow you to compare and combine sets directly. They accept any **Set-like object** (another `Set`, `Map`, or array-like object) as their argument. [link](https://developer.mozilla.org/en-US/blog/javascript-set-methods/)

| Method                           | Parameters                  | Return Value                   | Description                                                                            |
| -------------------------------- | --------------------------- | ------------------------------ | -------------------------------------------------------------------------------------- |
| **`union(other)`**               | `other`: A Set-like object. | A new **`Set`**.               | Returns a new set containing all elements from both this set and the given set.        |
| **`intersection(other)`**        | `other`: A Set-like object. | A new **`Set`**.               | Returns a new set containing only the elements present in both sets.                   |
| **`difference(other)`**          | `other`: A Set-like object. | A new **`Set`**.               | Returns a new set containing elements that are in this set but _not_ in the given set. |
| **`symmetricDifference(other)`** | `other`: A Set-like object. | A new **`Set`**.               | Returns a new set containing elements that are in either set, but _not in both_.       |
| **`isSubsetOf(other)`**          | `other`: A Set-like object. | **`boolean`** (`true`/`false`) | Checks if all elements of this set are contained within the given set.                 |
| **`isSupersetOf(other)`**        | `other`: A Set-like object. | **`boolean`** (`true`/`false`) | Checks if this set contains all elements of the given set.                             |
| **`isDisjointFrom(other)`**      | `other`: A Set-like object. | **`boolean`** (`true`/`false`) | Checks if this set shares absolutely no elements with the given set.                   |

Would you like to see code examples of how to chain **`add()`** or how to use the newer mathematical methods like **`intersection()`** and **`union()`**?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set)\
  MDN Web Docs\
  Set - JavaScript\
  Instance methods Set.prototype.add() Inserts the specified value into this set, if it is not already present. Set.prototype.clear(
- [link](https://www.youtube.com/watch?v=sb%5FqRmVyJyM)\
  YouTube·WittCode\
  JavaScript Set Explained\
  Feb 6, 2023 — In this video, we're going to learn about the JavaScript Set object, including its time complexity, methods, and use cases. A Java...\
  7:06
- [link](https://www.youtube.com/watch?v=3oLoZMqqvZY\&t=1)\
  YouTube·Programming For Beginners\
  Set in JavaScript | Programming For Beginners\
  Aug 8, 2024 — In JavaScript, a Set is a collection of unique values, meaning it cannot contain duplicate values. Each value in a Set can only oc...\
  9m

Show all

# all js promise methods and params return of each

In JavaScript, the **`Promise`** API contains both **static methods** (called directly on the global `Promise` class) and **instance methods** (called on a specific promise object). [link](https://javascript.plainenglish.io/mastering-javascript-promises-a-comprehensive-guide-to-all-promise-methods-5d2c60dc10e4)

Here is the comprehensive breakdown of every native `Promise` method, including its parameters, what it returns, and how it handles resolution or rejection.

***

### Static Methods (Concurrency & Utilities)

These methods are accessed via `Promise.<methodName>`. They typically take an iterable (like an `Array`) of promises and help manage parallel asynchronous actions. [link](https://dev.to/swarnaliroy94/methods-of-promise-all-any-finally-o2e)

| Method                             | Parameters                                         | Returns                                     | Settling Behavior (Resolution / Rejection)                                                                                                                                                                                                 |
| ---------------------------------- | -------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`Promise.all(iterable)`**        | `iterable`: An iterable (e.g., Array) of promises. | A single `Promise`.                         | **Fulfills** with an array of all resolved values if _all_ input promises succeed.**Rejects** immediately with the reason of the _first_ promise that fails (fail-fast).                                                                   |
| **`Promise.allSettled(iterable)`** | `iterable`: An iterable of promises.               | A single `Promise`.                         | **Fulfills** only after _all_ input promises have either resolved or rejected. It returns an array of objects describing the outcome of each, formatted as:`{ status: 'fulfilled', value: val }` or `{ status: 'rejected', reason: err }`. |
| **`Promise.any(iterable)`**        | `iterable`: An iterable of promises.               | A single `Promise`.                         | **Fulfills** as soon as _any_ single input promise resolves, returning that first fulfillment value.**Rejects** only if _all_ input promises fail, returning an `AggregateError` containing all rejection reasons.                         |
| **`Promise.race(iterable)`**       | `iterable`: An iterable of promises.               | A single `Promise`.                         | **Settles** (fulfills or rejects) as soon as the _very first_ promise in the iterable settles, adopting its exact value or error reason.                                                                                                   |
| **`Promise.resolve(value)`**       | `value`: A value, a thenable, or another promise.  | A `Promise` resolved with the given value.  | **Fulfills** immediately with the provided value. (If passed a real promise, it simply returns that promise directly).                                                                                                                     |
| **`Promise.reject(reason)`**       | `reason`: The error/reason for the rejection.      | A `Promise` rejected with the given reason. | **Rejects** immediately with the provided reason.                                                                                                                                                                                          |

***

### Instance Methods (The Prototype Chain)

These methods are available on any instance of a `Promise` (e.g., `myPromise.then()`) and are used to handle values or chain further actions. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise)

| Method                               | Parameters                                                                                               | Returns                                        | Settling Behavior (Resolution / Rejection)                                                                                                                                                                                 |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`.then(onFulfilled, onRejected)`** | `onFulfilled`: Callback run if the promise succeeds.`onRejected` _(optional)_: Callback run if it fails. | A **new `Promise`**, allowing method chaining. | The state of the new promise depends on what the callback returns. If the handler returns a value, the new promise fulfills with that value. If it throws an error, the new promise rejects.                               |
| **`.catch(onRejected)`**             | `onRejected`: Callback run when the promise (or an earlier step in the chain) rejects.                   | A **new `Promise`**.                           | This is syntax sugar for `.then(null, onRejected)`. If the `onRejected` handler safely catches the error and returns a normal value, the chain switches back to a _fulfilled_ state.                                       |
| **`.finally(onFinally)`**            | `onFinally`: Callback run automatically when the promise settles (regardless of success or failure).     | A **new `Promise`**.                           | It runs cleanup code. It passes no arguments to its callback. The returned promise usually resolves with the exact same value or rejection reason of the original promise (unless `onFinally` explicitly throws an error). |

Would you like to see a code example comparing how **`Promise.all`**, **`Promise.any`**, and **`Promise.race`** behave differently given the exact same array of mock network requests?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise/all)\
  MDN Web Docs\
  Promise.all() - JavaScript - MDN Web Docs\
  Sep 1, 2026 — The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfill...
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise)\
  MDN Web Docs\
  Promise - JavaScript - MDN Web Docs\
  The promise methods then() , catch() , and finally() are used to associate further action with a promise that becomes settled. The...
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise/allSettled)\
  MDN Web Docs\
  Promise.allSettled() - JavaScript | MDN\
  Aug 28, 2026 — The returned promise fulfills when all of the input's promises settle. The fulfillment value is an array of objects, each describi...

Show all

# all js proxy methods and params return of each

The JavaScript **`Proxy` object** allows you to intercept and customize fundamental operations (like property lookup, assignment, function invocation, etc.) performed on a target object. These interception methods are called **traps**. [link](https://www.youtube.com/watch?v=cH2oWB2dNIU)

There are exactly **13 available traps** in a JavaScript Proxy handler. Below is the comprehensive list of all traps, including their exact triggers, parameters, and required return values. [link](https://www.w3schools.com/js/js%5Fmeta%5Fproxy.asp)

***

### 1. `get`

- **Triggers when:** Reading a property from the proxy object. [link](https://www.w3schools.com/js/js%5Fmeta%5Fproxy.asp)
- **Parameters:**
  - `target`: The original object wrapped by the proxy.
  - `property`: The name or `Symbol` of the property to read.
  - `receiver`: Either the proxy itself or an object that inherits from the proxy. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Proxy)
- **Return value:** Any value.

### 2. `set`

- **Triggers when:** Setting a property value on the proxy object. [link](https://www.youtube.com/watch?v=cH2oWB2dNIU)
- **Parameters:**
  - `target`: The original object wrapped by the proxy.
  - `property`: The name or `Symbol` of the property to set.
  - `value`: The new value to assign to the property.
  - `receiver`: The object to which the assignment was originally directed (usually the proxy). [link](https://webreflection.medium.com/taming-js-proxy-api-d38e1f425f51)
- **Return value:** A **`Boolean`** (`true` if the assignment succeeded, or `false` if it failed/should throw a `TypeError` in strict mode). [link](https://stackoverflow.com/questions/25069023/how-do-i-trap-arguments-to-a-target-method-when-using-a-proxy-object)

### 3. `has`

- **Triggers when:** Using the `in` operator (e.g., `"prop" in proxy`). [link](https://id.javascript.info/proxy)
- **Parameters:**
  - `target`: The original object wrapped by the proxy.
  - `property`: The name or `Symbol` of the property to check. [link](https://webreflection.medium.com/taming-js-proxy-api-d38e1f425f51)
- **Return value:** A **`Boolean`**.

### 4. `deleteProperty`

- **Triggers when:** Deleting a property using the `delete` operator (e.g., `delete proxy.prop`). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Proxy/Proxy)
- **Parameters:**
  - `target`: The original object.
  - `property`: The name or `Symbol` of the property to delete.
- **Return value:** A **`Boolean`** (`true` if the property was successfully deleted, otherwise `false`).

### 5. `ownKeys`

- **Triggers when:** Fetching object keys, such as via `Object.keys()`, `Object.getOwnPropertyNames()`, `Object.getOwnPropertySymbols()`, or `for...in` loops. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Proxy/Proxy/ownKeys)
- **Parameters:**
  - `target`: The original object. [link](https://www.digitalocean.com/community/tutorials/js-proxy-traps)
- **Return value:** An **`Array`** or enumerable object containing only string or Symbol values.

### 6. `apply`

- **Triggers when:** Invoking the target if it is a function (e.g., `proxy(...)`, `proxy.apply(...)`, or `proxy.call(...)`). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Proxy/Proxy)
- **Parameters:**
  - `target`: The original function object.
  - `thisArg`: The `this` context for the function call.
  - `argumentsList`: An array-like object containing the arguments passed to the function. [link](https://dev.to/mellen/javascript-proxy-and-partial-function-application-4m9m)
- **Return value:** Any value.

### 7. `construct`

- **Triggers when:** Creating an instance using the `new` operator (e.g., `new proxy(...)`). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Proxy/Proxy)
- **Parameters:**
  - `target`: The original constructor function.
  - `argumentsList`: An array of arguments passed to the constructor.
  - `newTarget`: The constructor that was originally called (`proxy` itself, or a subclass).
- **Return value:** An **`Object`** (returning a primitive will throw a `TypeError`).

### 8. `getPrototypeOf`

- **Triggers when:** Accessing the prototype (e.g., `Object.getPrototypeOf(proxy)`, `proxy.__proto__`, `Object.prototype.isPrototypeOf()`, or `instanceof`).
- **Parameters:**
  - `target`: The original object.
- **Return value:** An **`Object`** or `null`.

### 9. `setPrototypeOf`

- **Triggers when:** Setting the prototype (e.g., `Object.setPrototypeOf(proxy, newProto)` or `proxy.__proto__ = newProto`).
- **Parameters:**
  - `target`: The original object.
  - `prototype`: The object's new prototype or `null`.
- **Return value:** A **`Boolean`** (`true` if the prototype was successfully altered, otherwise `false`).

### 10. `isExtensible`

- **Triggers when:** Checking if the object can have new properties added (e.g., `Object.isExtensible(proxy)`). [link](https://www.w3schools.com/js/js%5Fmeta%5Fproxy.asp)
- **Parameters:**
  - `target`: The original object.
- **Return value:** A **`Boolean`**.

### 11. `preventExtensions`

- **Triggers when:** Preventing new properties from being added to the object (e.g., `Object.preventExtensions(proxy)`).
- **Parameters:**
  - `target`: The original object.
- **Return value:** A **`Boolean`**.

### 12. `getOwnPropertyDescriptor`

- **Triggers when:** Getting a specific property's settings (e.g., `Object.getOwnPropertyDescriptor(proxy, "prop")`). [link](https://www.youtube.com/watch?v=cH2oWB2dNIU)
- **Parameters:**
  - `target`: The original object.
  - `property`: The name or `Symbol` of the property.
- **Return value:** An **`Object`** (representing the descriptor) or `undefined`.

### 13. `defineProperty`

- **Triggers when:** Explicitly defining or altering a property configuration (e.g., `Object.defineProperty(proxy, "prop", descriptor)`). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Proxy/Proxy)
- **Parameters:**
  - `target`: The original object.
  - `property`: The name or `Symbol` of the property being defined or modified.
  - `descriptor`: The descriptor object containing attributes like `value`, `writable`, `enumerable`, etc.
- **Return value:** A **`Boolean`** (`true` if the property was successfully defined, otherwise `false`).

Would you like to see a practical **code example** utilizing a specific trap, or do you need help implementing the companion **`Reflect` API** to pass operations smoothly back to your target object?

- [link](https://www.w3schools.com/js/js%5Fmeta%5Fproxy.asp)\
  W3Schools\
  JavaScript Proxy Object - W3Schools\
  Proxy Traps. A trap is a function inside a Proxy handler. It runs whenever a specific operation is performed on the Proxy. Below i...
- [link](https://stackoverflow.com/questions/25069023/how-do-i-trap-arguments-to-a-target-method-when-using-a-proxy-object)\
  Stack Overflow\
  How do I trap arguments to a target method when using a ...\
  dir({ call: \[prop, ...args] }); return target\[prop]. apply(target, args); } } console. dir({ get: prop }); return target\[prop]; },
- [link](https://programming.bogdanbucur.eu/watching-object-property-changes-with-proxy-in-javascript/)\
  bogdanbucur.eu\
  Watching object property changes with Proxy in JavaScript\
  Watching object property changes with Proxy in JavaScript Here's how it works: we start with a JavaScript object with a property t...

Show all

# 

