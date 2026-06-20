# .

```ts
import mousetrap from 'mousetrap';

let shortcutid = 0
let actions = new Map()
let shortcuts = {}
let bindings = {}

function call(shortcut, event) {
  if (shortcuts[shortcut]) {
    for (const shortcutid of shortcuts[shortcut]) {
      const action = actions.get(shortcutid)
      if (action) {
        action(event)
      } 
    }
  }
}

export function bind(shortcut, action) {
  actions.set(shortcutid, action)
  shortcuts[shortcut] = shortcuts[shortcut] || new Set()
  shortcuts[shortcut].add(shortcutid)
  bindings[shortcutid] = { shortcut }

  // it will work whether it overrides or not
  mousetrap.bind(shortcut, (event) => {
    call(shortcut, event)
  })

  return shortcutid++
}

export function unbind(shortcutid) {
  const shortcut = bindings[shortcutid]
  shortcuts[shortcut].delete(shortcutid)
  actions.delete(shortcutid)

  if (shortcuts[shortcut].size == 0) {
    mousetrap.unbind(shortcut)
  } 
}

/**
 * todo
 * 
 * - err invalid shortcut
 * - normalize ctrl ?
 */
```

# js map or weakmap

The primary difference between a `Map` and a `WeakMap` in JavaScript comes down to **memory management (garbage collection) and the types of keys they accept**. \[[1](https://sauravkumarsharma.medium.com/what-is-difference-between-weakmap-and-map-71d8e6df525a)]

Use a **`Map`** for general-purpose, iterable key-value storage. Use a **`WeakMap`** exclusively when you need to associate data with objects without preventing those objects from being garbage collected. \[[1](https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-map-set-and-weakmap-weakset), [2](https://abiam4l.medium.com/weakmap-vs-map-and-weakset-vs-set-a-performance-guide-a5b6e0fa7075)]

### Quick Comparison

| Feature \[[1](https://www.geeksforgeeks.org/javascript/what-is-the-difference-between-map-and-weakmap-in-javascript/), [2](https://javascript.plainenglish.io/a-deep-dive-into-map-set-weakmap-and-weakset-in-javascript-b5816e290639), [3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/WeakMap), [4](https://javascript.info/weakmap-weakset), [5](https://www.linkedin.com/posts/rithik56%5Frecently-revisited-the-difference-between-activity-7414864526543802368-4VAP), [6](https://dev.to/syed%5Fammar/what-are-weakmaps-in-js-1oj6), [7](https://www.youtube.com/watch?v=v80FlLDbbb0\&t=27), [8](https://www.geeksforgeeks.org/javascript/javascript-weakmap/), [9](https://www.youtube.com/watch?v=QYfZ%5FgXwxBs\&t=3), [10](https://medium.com/deliveryherotechhub/map-set-weakmap-and-weakset-in-javascript-c47e3b120a01), [11](https://abiam4l.medium.com/weakmap-vs-map-and-weakset-vs-set-a-performance-guide-a5b6e0fa7075)] | `Map`                                                                | `WeakMap`                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------- |
| **Key Types**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Any type (primitives, objects, functions)                            | **Objects or non-registered symbols only**      |
| **Garbage Collection**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Strong references. Keeps keys in memory.                             | Weak references. Keys can be garbage collected. |
| **Iterable?**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes (supports `forEach`, `for...of`).                                | No (cannot loop through keys/values).           |
| **Size Tracking**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Has a `.size` property.                                              | No `.size` property.                            |
| **Methods**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `set`, `get`, `has`, `delete`, `clear`, `keys`, `values`, `entries`. | Only `set`, `get`, `has`, `delete`.             |

***

### Understanding the "Weak" Reference

In a standard **`Map`**, as long as the map itself is alive, every single key and value inside it stays alive in memory. This can cause a **memory leak** if you pass an object as a key, delete all external variables pointing to that object, but forget to manually remove it from the map. \[[1](https://www.reddit.com/r/javascript/comments/1cb2vtv/askjs%5Fwhy%5Fuse%5Fweakmap%5Fwhat%5Fare%5Fits%5Fadvantages/), [2](https://johnkavanagh.co.uk/articles/understanding-weakmap-and-weakset-in-javascript/), [3](https://www.geeksforgeeks.org/javascript/what-is-the-difference-between-map-and-weakmap-in-javascript/), [4](https://javascript.info/weakmap-weakset)]

javascript

```
// Map Example (Memory Leak Danger)
let map = new Map();
let user = { name: "Alex" };

map.set(user, "metadata");
user = null; // Overwriting the external reference

// Even though 'user' is null, the original object is NOT garbage collected.
// It is still trapped inside the map because the Map holds a strong reference.
console.log(map.size); // 1
```

Use code with caution.

In a **`WeakMap`**, the link between the key and the map is "weak". If an object no longer has any external references pointing to it, JavaScript will automatically destroy that object _and_ remove its entry from the `WeakMap` during the next garbage collection cycle. \[[1](https://stackoverflow.com/questions/15604168/whats-the-difference-between-es6-map-and-weakmap), [2](https://www.geeksforgeeks.org/javascript/weakset-vs-weakmap-in-javascript/), [3](https://www.w3schools.com/js/js%5Fmaps%5Fweak.asp)]

javascript

```
// WeakMap Example (Memory Safe)
let weakMap = new WeakMap();
let user = { name: "Alex" };

weakMap.set(user, "metadata");
user = null; // Overwriting the external reference

// The original object is now eligible for garbage collection.
// It will automatically disappear from the weakMap behind the scenes!
```

Use code with caution.

***

### When to use which?

### Use `Map` if you need to:

- **Iterate or loop** over your entries to display or manipulate them.
- Use **primitive keys** like strings, numbers, or booleans (e.g., `map.set('user_id_123', data)`).
- Know exactly **how many items** are inside the collection at any given time via `.size`. \[[1](https://stackoverflow.com/questions/15604168/whats-the-difference-between-es6-map-and-weakmap), [2](https://abiam4l.medium.com/weakmap-vs-map-and-weakset-vs-set-a-performance-guide-a5b6e0fa7075), [3](https://www.geeksforgeeks.org/javascript/what-is-the-difference-between-map-and-weakmap-in-javascript/), [4](https://sauravkumarsharma.medium.com/what-is-difference-between-weakmap-and-map-71d8e6df525a), [5](https://softwareengineering.stackexchange.com/questions/285881/any-point-in-using-es6-map-when-keys-are-all-strings)]

### Use `WeakMap` if you are building: \[[1](https://dev.to/kepta/javascript-underdogs-part-1---the-weakmap-4jih), [2](https://www.w3schools.com/js/js%5Fmaps%5Fweak.asp)]

- **A Cache or Memoization helper** for objects, where the cached data should only exist as long as the object itself is active.
- **DOM node tracking metadata**, such as associating state or event listeners with specific UI elements without blocking memory if those elements get removed from the page.
- **Private data emulation**, keeping class properties completely private and securely separated from public access methods. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/WeakMap), [2](https://www.linkedin.com/posts/rithik56%5Frecently-revisited-the-difference-between-activity-7414864526543802368-4VAP), [3](https://abiam4l.medium.com/weakmap-vs-map-and-weakset-vs-set-a-performance-guide-a5b6e0fa7075), [4](https://medium.com/deliveryherotechhub/map-set-weakmap-and-weakset-in-javascript-c47e3b120a01), [5](https://www.reddit.com/r/javascript/comments/1332o9n/why%5Fi%5Flike%5Fusing%5Fmaps%5Fand%5Fweakmaps%5Ffor%5Fhandling/)]

If you are working on a specific project right now, tell me **what kind of data you are trying to store** or **how you plan to use the keys**. I can help you choose the best option!

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/WeakMap)\
  WeakMap - JavaScript - MDN Web Docs\
  Feb 10, 2026 — That is, an object's presence as a key in a WeakMap does not prevent the object from being garbage collected. Once an object used ...\
  MDN Web Docs
- [link](https://www.geeksforgeeks.org/javascript/what-is-the-difference-between-map-and-weakmap-in-javascript/)\
  What is the difference between Map and WeakMap in JavaScript\
  Jul 23, 2025 — Table\_title: What is the difference between Map and WeakMap in JavaScript ? Table\_content: | Map | WeakMap | | --- | --- | | A Map...\
  GeeksforGeeks
- [link](https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-map-set-and-weakmap-weakset)\
  What are the differences between \`Map\`/\`Set\` and \`WeakMap ...\
  Map and Set are regular data structures that maintain strong references to their keys and values, while WeakMap and WeakSet are de...\
  GreatFrontEnd

Show all

# (?) all map object methods in js

The standard JavaScript `Map` object provides **9 built-in instance methods** to manage and iterate over its key-value pairs. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map), [2](https://www.javascripttutorial.net/javascript-map/)]

### Data Modification Methods

- **`set(key, value)`**: Adds a new key-value pair or updates an existing key's value. It returns the `Map` object itself, allowing method chaining.
- **`delete(key)`**: Removes the specified key-value pair from the map. It returns `true` if the element existed and was removed, or `false` if it did not exist.
- **`clear()`**: Removes all key-value pairs from the map, completely emptying it. It returns `undefined`. \[[1](https://javascript.info/map-set), [2](https://www.geeksforgeeks.org/javascript/js-map-methods/), [3](https://www.javascripttutorial.net/javascript-map/)]

### Data Access & Query Methods

- **`get(key)`**: Returns the value associated with the specified key. It returns `undefined` if the key cannot be found in the map.
- **`has(key)`**: Returns a boolean (`true` or `false`) indicating whether the map contains the specified key. \[[1](https://www.geeksforgeeks.org/javascript/javascript-map/), [2](https://www.geeksforgeeks.org/javascript/js-map-methods/)]

### Iteration & Traversal Methods

- **`keys()`/`values()`/`entries()`**: Return iterators for keys, values, or `[key, value]` pairs in insertion order. `entries()` is the default.
- **`forEach(callbackFn, thisArg)`**: Executes a function for each `(value, key, map)` in order. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map), [2](https://www.geeksforgeeks.org/javascript/js-map-methods/), [3](https://www.javascripttutorial.net/javascript-map/), [4](https://dev.to/mlgvla/javascript-using-the-map-object-322e), [5](https://viblo.asia/p/javascript-es-2015-set-map-weakset-and-weakmap-RnB5p1GrKPG)]

10 sites

Something went wrong with the response, but here are the most relevant results:

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)

MDN Web Docs·https://developer.mozilla.org

**Map** - **JavaScript** - MDN Web Docs - Mozilla

Map objects are **collections of key-value pairs**. A key in the Map may only occur once; it is unique in the Map 's collection.

[link](https://www.w3schools.com/js/js%5Fmap%5Fmethods.asp)

W3Schools·https://www.w3schools.com

**JavaScript Map Methods** - W3Schools

**JavaScript Map Methods** · The new Map() Method · Map.get() · Map.set() · Map.size · Map.delete() · Map.clear() · Map.has() · Map.forEach().

[link](https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays)

Stack Overflow·https://stackoverflow.com

'**map**' **function** for **objects** (instead of arrays) - Stack Overflow

The purpose of the **function** is to take an **object** and modify the original contents of the **object** using a **method** available to **all objects** (**objects** ...

[link](https://www.geeksforgeeks.org/javascript/js-map-methods/)

GeeksforGeeks·https://www.geeksforgeeks.org

**JS Map Methods** - GeeksforGeeks

**new Map(): Used to create a Map in JavaScript**. · Map.size: Property returns the number of key-value pairs in the Map. · Map.get(): Retrieves the ...

[link](https://www.w3schools.com/js/js%5Fmaps.asp)

W3Schools·https://www.w3schools.com

**JavaScript Maps** - W3Schools

The **Map Object** · **Map** Characteristics · How to Create a **Map** · Adding **Map** Values · Changing **Map** Values · The get() **Method** · **Maps** are **Objects** · **JavaScript Objects** vs **Maps**.

[link](https://www.telerik.com/blogs/javascript-map-object)

Telerik.com·https://www.telerik.com

The **JavaScript Map Object** - Telerik.com

A **Map object** in **JavaScript** is a collection of key-value pairs where the keys can be of any type, including **objects** or **functions**.

[link](https://www.youtube.com/watch?v=xNQH1NbZQ0E)

YouTube·https://www.youtube.com

**JavaScript map**() **method** in 7 minutes! 🗺️ - YouTube

.**map**() = accepts a callback and applies that **function** // to each element of an array, then return a new array // ------------ EXAMPLE 1 ...

[link](https://javascript.info/map-set)

The Modern JavaScript Tutorial·https://javascript.info

**Map** and Set - The Modern **JavaScript** Tutorial

**Map** is a collection of keyed data items, just like an **Object**. But the main difference is that **Map** allows keys of any type.

[link](https://blog.codeanalogies.com/2018/02/20/javascript-map-method-explained-by-going-on-a-hike/)

CodeAnalogies·https://blog.codeanalogies.com

**JavaScript Map**() **Method** Explained by Going On a Hike

**map**() takes each element from an original array, transforms it with a function that you specify, and adds the result to a new array in the same order.

[link](https://www.freecodecamp.org/news/javascript-map-and-set-objects-explained/)

freeCodeCamp·https://www.freecodecamp.org

How to Use the **JavaScript Map** and Set **Objects**

Map Object Methods and Properties · **set(key, value) – Adds a key/value pair to a Map** · get(key) – Retrieves a value from a Map (returns undefined ...

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)\
  Map - JavaScript - MDN Web Docs - Mozilla\
  Feb 16, 2026 — Map -like objects are either read-only or read-writable (see the readonly keyword in the IDL above). \* Read-only Map -like objects...\
  MDN Web Docs
- [link](https://dev.to/mlgvla/javascript-using-the-map-object-322e)\
  JavaScript: Using the Map Object - DEV Community\
  Feb 28, 2022 — Map Methods \* new Map() Create a map object by passing an array of key/value pairs to the constructor: let pets = new Map(\[ \["dog"\
  DEV Community
- [link](https://javascript.info/map-set)\
  Map and Set - The Modern JavaScript Tutorial\
  Nov 14, 2022 — Methods and properties: \* new Map(\[iterable]) – creates the map, with optional iterable (e.g. array) of \[key,value] pairs for init...\
  The Modern JavaScript Tutorial

Show all

# all map object methods in js

The JavaScript `Map` object provides **9 built-in instance methods** to manage, manipulate, and iterate over its collection of key-value pairs. \[[1](https://www.javascripttutorial.net/javascript-map/), [2](https://www.geeksforgeeks.org/javascript/js-map-methods/), [3](https://www.telerik.com/blogs/javascript-map-object), [4](https://www.geeksforgeeks.org/javascript/applications-of-map-in-javascript/)]

### Data Manipulation Methods

- **`set(key, value)`**: Adds a new key-value pair or updates the value if the key already exists. It returns the `Map` object itself, allowing for method chaining.
- **`get(key)`**: Retrieves the value associated with the specified key. Returns `undefined` if the key does not exist in the collection.
- **`has(key)`**: Checks if the specified key exists within the collection. Returns a boolean (`true` or `false`).
- **`delete(key)`**: Removes the specified key-value pair from the collection. Returns `true` if the element existed and was removed, or `false` if it did not exist.
- **`clear()`**: Permanently removes all key-value pairs from the collection, resetting its size to zero. \[[1](https://javascript.info/map-set), [2](https://www.geeksforgeeks.org/javascript/js-map-methods/), [3](https://www.javascripttutorial.net/javascript-map/)]

### Iteration Methods

- **`keys()`**: Returns a new iterator object that yields the keys for each element in the map, following the exact order of insertion.
- **`values()`**: Returns a new iterator object that yields the values for each element in the map, maintaining insertion order.
- **`entries()`**: Returns a new iterator object containing an array of `[key, value]` for each element in the map. This is the default iterator for the `Map` object.
- **`forEach(callbackFn, thisArg)`**: Executes a provided callback function exactly once for each key-value pair in insertion order. The callback receives the parameters `(value, key, map)`. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map), [2](https://www.javascripttutorial.net/javascript-map/), [3](https://www.geeksforgeeks.org/javascript/js-map-methods/), [4](https://www.tutorialspoint.com/javascript/javascript%5Fmaps%5Fobject.htm), [5](https://dev.to/mlgvla/javascript-using-the-map-object-322e)]

### Quick Code Example

javascript

```
// Initialization
const userMap = new Map();

// Using Manipulation Methods
userMap.set('id', 101);
userMap.set('role', 'admin');

console.log(userMap.has('id')); // true
console.log(userMap.get('role')); // 'admin'

userMap.delete('role');

// Using Iteration Methods
userMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

Use code with caution.

_(Note: While `size` is frequently used alongside these methods, it is technically an instance **property**, not a method, and returns the current element count)._ \[[1](https://javascript.info/map-set)]

For a deeper dive into memory performance or structural comparisons between maps and traditional objects, check out the official [MDN Map Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map). \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map), [2](https://dev.to/jcsh/how-to-use-the-map-object-in-javascript-for-filtering-api-results-23h9), [3](https://ecampusontario.pressbooks.pub/webdev/chapter/arrays-and-objects/)]

Would you like to see how to **convert a Map to an Array** or how to use **objects as keys** within a Map?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)\
  Map - JavaScript - MDN Web Docs - Mozilla\
  Feb 16, 2026 — Map -like objects are either read-only or read-writable (see the readonly keyword in the IDL above). \* Read-only Map -like objects...\
  MDN Web Docs
- [link](https://dev.to/mlgvla/javascript-using-the-map-object-322e)\
  JavaScript: Using the Map Object - DEV Community\
  Feb 28, 2022 — Map Methods \* new Map() Create a map object by passing an array of key/value pairs to the constructor: let pets = new Map(\[ \["dog"\
  DEV Community
- [link](https://javascript.info/map-set)\
  Map and Set - The Modern JavaScript Tutorial\
  Nov 14, 2022 — Methods and properties: \* new Map(\[iterable]) – creates the map, with optional iterable (e.g. array) of \[key,value] pairs for init...\
  The Modern JavaScript Tutorial

Show all

## You said: all map props

The JavaScript `Map` object has exactly **one instance property** and **one static property**. \[[1](https://www.finitewisdom.com/blogs/joshua-golub/2021/6/18/javascript-es6-map-objects), [2](https://docs.here.com/maps-api-for-js/docs/map-events)]

### Instance Property

- **`size`**: Returns the total number of key-value pairs currently stored in the `Map` object. It is a read-only integer. \[[1](https://dev.to/bugudiramu/javascript-array-object-and-map-methods-cheat-sheet-2pp1), [2](https://www.geeksforgeeks.org/javascript/what-is-javascript-map-and-how-to-use-it/), [3](https://fr.mathworks.com/help/matlab/ref/containers.map.html)]

### Static Property

- **`Symbol.species`**: Returns the `Map` constructor used to create derived objects. This is rarely used unless you are creating custom subclasses of `Map`. \[[1](https://tc39.es/ecma262/multipage/keyed-collections.html), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/Symbol.species)]

### Quick Code Example

javascript

```
// Create a new Map
const store = new Map();

// Add elements
store.set('apples', 10);
store.set('oranges', 5);

// Access the instance property
console.log(store.size); // Output: 2
```

Use code with caution.

### Key Differences: Map Properties vs. Object Properties

- **No direct dot notation**: You cannot use `store.apples` to get a value; you must use the `.get()` method.
- **Property vs Method**: Unlike arrays which use the `.length` property, maps use `.size` to count elements. \[[1](https://www.digitalocean.com/community/tutorials/js-maps-introduction), [2](https://www.digitalocean.com/community/tutorials/understanding-map-and-set-objects-in-javascript), [3](https://www.autohotkey.com/boards/viewtopic.php?style=7\&t=120410)]

Would you like to explore how to **subclass a Map** using `Symbol.species`, or do you want to see how `size` behaves when **clearing a Map**?

- [link](https://www.finitewisdom.com/blogs/joshua-golub/2021/6/18/javascript-es6-map-objects)\
  JavaScript ES6: Map objects — Finite Wisdom\
  Jun 19, 2021 — A Map object has a single instance property:\
  \
  \
  Finite Wisdom
- [link](https://docs.here.com/maps-api-for-js/docs/map-events)\
  Handle map events\
  Handle map events The Get started with HERE Maps API for JavaScript section shows an example that displays a default non-interacti...\
  \
  \
  HERE Technologies
- [link](https://dev.to/bugudiramu/javascript-array-object-and-map-methods-cheat-sheet-2pp1)\
  🚀 JavaScript Array, Object, and Map Methods Cheat sheet 🚀\
  Dec 8, 2023 — size : Returns the number of key/value pairs in the Map object.\
  \
  \
  DEV Community

Show all

# all set methods in js

The JavaScript [Set object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set) features <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">15 built-in instance methods</strong></mark> used to manage unique collections of values. These consist of the standard collection modification and iteration methods, alongside the official mathematical set operation methods. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set/has), [3](https://dev.to/zacharylee/7-new-javascript-set-methods-4737), [4](https://www.codingdojo.com/blog/15-top-javascript-methods), [5](https://www.youtube.com/watch?v=sb%5FqRmVyJyM)]

### 🛠️ Basic Modification Methods

These methods directly alter the contents of the `Set`. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set)]

- `add(value)`: Appends a new unique element to the end of the set.
- `delete(value)`: Removes the specified element and returns `true` if it existed.
- `clear()`: Removes all elements from the set entirely. \[[1](https://www.youtube.com/watch?v=sb%5FqRmVyJyM), [2](https://www.javascripttutorial.net/javascript-set/)]

### 🔄 Iteration & Access Methods

These methods let you look up values or loop through the collection. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set), [2](https://javascript.plainenglish.io/storing-unique-values-with-set-object-in-javascript-ac2707dbdb6)]

- `has(value)`: Returns a boolean indicating whether the element exists in the set.
- `forEach(callback)`: Executes a provided function once for each value in the set.
- `values()`: Returns a new iterator object containing all values in insertion order.
- `keys()`: Identical alias to `values()`, maintained for consistency with `Map.prototype.keys`.
- `entries()`: Returns an iterator of `[value, value]` arrays to mirror the `Map` API. \[[1](https://medium.com/@sonu9506517825/set-methods-in-javascript-aa8d6ff5d23d), [2](https://www.youtube.com/watch?v=sb%5FqRmVyJyM), [3](https://www.javascripttutorial.net/javascript-set/)]

### 🧮 Mathematical Set Operations

These official built-in methods allow you to compare and combine sets without relying on third-party utility libraries like Lodash. \[[1](https://dev.to/zacharylee/7-new-javascript-set-methods-4737)]

| Method \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set), [2](https://dev.to/zacharylee/7-new-javascript-set-methods-4737), [3](https://frontendmasters.com/blog/new-javascript-set-methods/), [4](https://www.geeksforgeeks.org/javascript/underscore-js-%5F-isset-function/), [5](https://dev.to/keevcodes/the-javascript-set-object-2f75)] | Return Type | Purpose / Mathematical Equivalent                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| `union(other)`                                                                                                                                                                                                                                                                                                                                                                            | `Set`       | Combines elements from both sets (\\(A \cup B\\)).                                 |
| `intersection(other)`                                                                                                                                                                                                                                                                                                                                                                     | `Set`       | Returns only elements present in both sets (\\(A \cap B\\)).                       |
| `difference(other)`                                                                                                                                                                                                                                                                                                                                                                       | `Set`       | Returns elements in this set but not in the other (\\(A \setminus B\\)).           |
| `symmetricDifference(other)`                                                                                                                                                                                                                                                                                                                                                              | `Set`       | Returns elements in either set, but not in both (A △ B).                           |
| `isSubsetOf(other)`                                                                                                                                                                                                                                                                                                                                                                       | `Boolean`   | Checks if all elements of this set are inside the other (A ⊆ B).                   |
| `isSupersetOf(other)`                                                                                                                                                                                                                                                                                                                                                                     | `Boolean`   | Checks if this set contains all elements of the other (A ⊇ B).                     |
| `isDisjointFrom(other)`                                                                                                                                                                                                                                                                                                                                                                   | `Boolean`   | Checks if the two sets share zero elements in common (\\(A \cap B = \emptyset\\)). |

Would you like to see a **code example** demonstrating how the new mathematical set operations work, or do you need help **converting a Set back to an Array**? \[[1](https://www.youtube.com/watch?v=nGOnfYNo8F4)]

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set)\
  Set - JavaScript - MDN Web Docs\
  May 22, 2026 — Table\_title: Set composition Table\_content: | Method | Return type | Mathematical equivalent | | --- | --- | --- | | A.difference(\
  MDN Web Docs
- [link](https://www.youtube.com/watch?v=nGOnfYNo8F4)\
  Sets in Javascript (Set Object)\
  Dec 24, 2017 — okay now we can also convert a set into an array. so down here we can uh just say convert to array. and we can just put out uh con...\
  5:11\
  YouTube·dcode
- [link](https://dev.to/zacharylee/7-new-javascript-set-methods-4737)\
  7 New JavaScript Set Methods - DEV Community\
  Jul 13, 2024 — 7 New JavaScript Set Methods - DEV Community. DEV Community. Add reaction. Zachary Lee. Posted on Jul 13, 2024 • Originally publis...\
  DEV Community

Show all

## You said: empty

To empty a JavaScript `Set`, you use the `clear()` method, which removes all elements instantly. \[[1](https://medium.com/@AlexanderObregon/java-set-isempty-method-explained-16a8a18f4c63)]

javascript

```
const mySet = new Set([1, 2, 3]);

mySet.clear();

console.log(mySet.size); // 0
```

Use code with caution.

Alternatively, if you want to check if a `Set` **is empty**, you evaluate its `.size` property against zero. \[[1](https://www.codecademy.com/resources/docs/cpp/unordered-set/empty)]

javascript

```
if (mySet.size === 0) {
  console.log("The set is empty!");
}
```

Use code with caution.

Would you like to know how to **empty an Array** using its length property, or do you want to see how to **delete a single specific item** from your Set instead?

- [link](https://medium.com/@AlexanderObregon/java-set-isempty-method-explained-16a8a18f4c63)\
  Java Set.isEmpty() Method Explained\
  Jun 21, 2024 — Example 3: Clearing a Set and Checking if It's Empty Sometimes, you might need to clear a set and verify if it has been successful...\
  \
  \
  Medium
- [link](https://www.codecademy.com/resources/docs/cpp/unordered-set/empty)\
  C++ (C Plus Plus) | Unordered Set | .empty()\
  Feb 19, 2026 — The . empty() method checks whether an unordered\_set has no elements. It returns true if the container is empty (i.e., its size is...\
  \
  Codecademy

## You said: all props of set

JavaScript `Set` objects have only **one standard instance property**, which is used to track the size of the collection. \[[1](https://www.educative.io/answers/what-is-the-setsize-property-in-javascript)]

### 📊 Instance Properties

- `size`: Returns the total number of unique elements currently stored in the set. \[[1](https://www.educative.io/answers/what-is-the-setsize-property-in-javascript)]

javascript

```
const tags = new Set(['js', 'css', 'html']);
console.log(tags.size); // 3
```

Use code with caution.

### ⚙️ Static Properties

- `Symbol.species`: Used by subclasses to determine the default constructor for derived objects. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set/Symbol.species)]

Would you like to see how to use the `.size` property to **check if a Set is empty**, or do you need help **looping through a Set** using its methods?

- [link](https://www.educative.io/answers/what-is-the-setsize-property-in-javascript)\
  What is the set.size property in JavaScript?\
  Overview The set. size property in JavaScript returns the number of elements in the stack. In other words, this property is used t...\
  \
  \
  Educative
- [link](https://www.educative.io/answers/what-is-the-setsize-property-in-javascript)\
  What is the set.size property in JavaScript?\
  Overview The set. size property in JavaScript returns the number of elements in the stack. In other words, this property is used t...\
  \
  \
  Educative
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Set/Symbol.species)\
  Set\[Symbol.species] - JavaScript | MDN\
  Jul 10, 2025 — The \[Symbol. species] accessor property returns the default constructor for Set objects. Subclass constructors may override it to ...\
  \
  MDN Web Docs

# 

<!-- weird. no autocomplete (i mean real, mousetrap specific methods) -->

```ts
import mousetrap from 'mousetrap';
mousetrap.
```

# how to unbind in mousetrap

To remove a keyboard shortcut in the **Mousetrap** JavaScript library, you can use the `Mousetrap.unbind()` method. Depending on your needs, you can remove individual key combinations, multiple combinations at once, or completely wipe out all active shortcuts. \[[1](https://davidwalsh.name/keyboard-shortcuts)]

### 1. Unbind a Single Key

To remove a single shortcut, pass the exact string combination you used when binding it: \[[1](https://davidwalsh.name/keyboard-shortcuts), [2](https://craig.is/killing/mice)]

javascript

```
// Unbind a single key
Mousetrap.unbind('ctrl+s');

// Unbind a key sequence
Mousetrap.unbind('g i');
```

Use code with caution.

### 2. Unbind Multiple Keys at Once

If you want to unbind a collection of shortcuts simultaneously, pass them inside an array: \[[1](https://www.reddit.com/r/twinegames/comments/1ojstd9/key%5Fpress/), [2](https://craig.is/killing/mice)]

javascript

```
Mousetrap.unbind(['ctrl+s', 'command+s', 'esc']);
```

Use code with caution.

### 3. Specify the Key Event Type

If you originally specified a key event (like `keyup` or `keydown`) during the initial `Mousetrap.bind()` call, you **must pass that exact event type** as the second argument to successfully unbind it: \[[1](https://github.com/ccampbell/mousetrap), [2](https://craig.is/killing/mice), [3](https://www.npmjs.com/package/mousetrap)]

javascript

```
// If you bound it like this:
Mousetrap.bind('esc', myFunction, 'keyup');

// You must unbind it like this:
Mousetrap.unbind('esc', 'keyup');
```

Use code with caution.

### 4. Wipe All Shortcuts (Reset)

If you are changing context completely (such as loading a new page view in a Single Page Application), you can clear out every single active shortcut at once using `Mousetrap.reset()`: \[[1](https://craig.is/killing/mice), [2](https://www.reddit.com/r/twinegames/comments/1ojstd9/key%5Fpress/)]

javascript

```
Mousetrap.reset();
```

Use code with caution.

Are you implementing this within a specific framework like **React** or **Vue**, or do you need help managing **global** key bindings?

- [link](https://craig.is/killing/mice)\
  Mousetrap - Keyboard shortcuts in Javascript - Craig Campbell\
  V. Mousetrap. reset. Mousetrap. reset(); The reset method will remove anything you have bound to mousetrap. This can be useful if ...\
  craig.is
- [link](https://www.reddit.com/r/twinegames/comments/1ojstd9/key%5Fpress/)\
  Key Press : r/twinegames - Reddit\
  Oct 30, 2025 — The contents of the current Passage being visited... |continue>\[ \[\[Press C to Continue->F]]] |stop>\[ \[\[Press S to Stop->G]]] Note:\
  Reddit·r/twinegames
- [link](https://davidwalsh.name/keyboard-shortcuts)\
  Create Keyboard Shortcuts with Mousetrap - David Walsh Blog\
  Jul 9, 2013 — Using Mousetrap. Mousetrap's bind method is the key to the madness, accepting the key(s) to listen to, the callback method, and a ...\
  David Walsh Blog

Show all

# 

