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

<!-- 2026.06.21 -->

# all possible keys of mousetrap

9:43 PM

In the \*\*\*\*[Mousetrap.js keyboard shortcuts library](https://craig.is/killing/mice)\*\*, you can bind to **virtually any key on a standard keyboard**. The library accepts standard alphanumeric characters, punctuation symbols, explicitly named special keys, and modifier combinations. \[[1](https://craig.is/killing/mice)]

Here is the complete breakdown of all supported keys categorized by their syntax wrapper. \[[1](https://medium.com/@345490675/mousetrap-a-javascript-library-for-creating-an-efficient-keyboard-shortcut-experience-dfe2dbcd3a56)]

### Modifier Keys

These can be used standalone or combined with other keys using a `+` symbol (e.g., `ctrl+s`). \[[1](https://craig.is/killing/mice)]

- `shift`
- `ctrl`
- `alt` (Can be substituted with `option` on macOS)
- `meta` (Can be substituted with `command` on macOS or `windows` on Windows) \[[1](https://github.com/ccampbell/mousetrap/issues/81), [2](https://craig.is/killing/mice)]

### Explicitly Named Special Keys

These specific non-alphanumeric keys must be referenced using their exact lowercase name strings: \[[1](https://craig.is/killing/mice)]

- `backspace`
- `tab`
- `enter` / `return`
- `capslock`
- `esc` / `escape`
- `space`
- `pageup`
- `pagedown`
- `end`
- `home`
- `left` / `up` / `right` / `down` (Arrow keys)
- `ins` (Insert)
- `del` (Delete)
- `plus` \[[1](https://crypt-of-the-necrodancer.fandom.com/wiki/Gameplay), [2](https://craig.is/killing/mice)]

### Standard Keys (Referenced by Direct Character) \[[1](https://craig.is/killing/mice)]

Any standard character present on your keyboard can be bound by passing its exact literal string character. You do not need to figure out shifting combinations (e.g., you can bind directly to `?` instead of typing `shift+/`). \[[1](https://github.com/ccampbell/mousetrap), [2](https://craig.is/killing/mice)]

- **Alphanumeric**: `a` through `z`, and `0` through `9`
- **Symbols and Punctuation**: `/`, `$`, `*`, `=`, `-`, `.`, `,`, `;`, `[`, `]`, etc. \[[1](https://craig.is/killing/mice)]

### Key Sequences

Mousetrap also supports sequential, space-separated string sequences (frequently called Gmail-style shortcuts or Konami codes): \[[1](https://koaning.io/posts/mousetrap/), [2](https://craig.is/killing/mice), [3](https://github.com/ccampbell/mousetrap)]

- For example, binding to `'g a'` or `'up up down down left right left right b a enter'` works natively out of the box. \[[1](https://koaning.io/posts/mousetrap/)]

If you need to support a rare custom key missing from the default mapping, you can map your own custom JavaScript keycodes globally using the `Mousetrap.addKeycodes` method. \[[1](https://craig.is/killing/mice), [2](https://craig.is/killing/mice)]

If you are working on a **specific shortcut feature**, tell me **what action you want to bind** or **which key combination** you are trying to use. I can write the exact Javascript snippet for you!

- [link](https://github.com/ccampbell/mousetrap/issues/81)\
  Trapping the 'Windows' key · Issue #81 · ccampbell/mousetrap - GitHub\
  ccampbell commented ... Hey, could you be a little more specific? What keyboard command are you trying to listen for? Mousetrap su...\
  GitHub
- [link](https://craig.is/killing/mice)\
  Mousetrap - Keyboard shortcuts in Javascript - Craig Campbell\
  Internet Explorer 6+ Safari. Firefox. Chrome. Supported Keys. For modifier keys you can use shift , ctrl , alt , or meta . You can...\
  craig.is
- [link](https://github.com/ccampbell/mousetrap)\
  ccampbell/mousetrap: Simple library for handling keyboard ... - GitHub\
  Why Mousetrap? \* There are no external dependencies, no framework is required. \* You are not limited to keydown events (You can sp...\
  GitHub

Show all

## You said: write a json object. key is all valid impossible keys, values are their equilvalent. for example, ? to "shift+/"

json

```
{
  "!": "shift+1",
  "@": "shift+2",
  "#": "shift+3",
  "$": "shift+4",
  "%": "shift+5",
  "^": "shift+6",
  "&": "shift+7",
  "*": "shift+8",
  "(": "shift+9",
  ")": "shift+0",
  "_": "shift+-",
  "+": "shift+=",
  "~": "shift+`",
  ":": "shift+;",
  "\"": "shift+'",
  "<": "shift+,",
  ">": "shift+.",
  "?": "shift+/",
  "{": "shift+[",
  "}": "shift+]",
  "|": "shift+\\"
}
```

Use code with caution.

If you need a code snippet to **dynamically bind** these or need to add **custom keyboard layouts** (like AZERTY or Dvorak), let me know!

## You said: is it comprehensive

\*\***No, it is not 100% comprehensive**, though it covers the vast majority of standard QWERTY keys.

To be fully comprehensive for all possible "impossible" keys (keys that inherently require the `shift` modifier to be typed but can be bound standalone in Mousetrap), a few structural additions are missing: \[[1](https://github.com/ccampbell/mousetrap)]

### 1. Missing Standard QWERTY Shift-Keys

The previous object missed a few keys from the standard QWERTY layout, specifically the backtick/tilde and some standard symbol pairings:

- **`~`** evaluates to **`shift+`** (The previous object mapped it incorrectly to \`shift+\`\`)

### 2. Missing Non-US Keyboard Layouts (e.g., European Layouts)

If your app is used globally, layouts like AZERTY (French) or QWERTZ (German) introduce entirely different "impossible keys" that require shift on those specific keyboards:

- **`°`** evaluates to **`shift+2`** (On standard German QWERTZ)
- **`§`** evaluates to **`shift+3`** (On standard German QWERTZ)
- **`µ`** evaluates to **`shift+*`** (On standard French AZERTY)

***

### The Truly Comprehensive QWERTY JSON Object

If you are strictly mapping a standard **US QWERTY Keyboard**, this updated JSON object is fully comprehensive and fixes the syntax pairing for the backtick/tilde key:

json

```
{
  "!": "shift+1",
  "@": "shift+2",
  "#": "shift+3",
  "$": "shift+4",
  "%": "shift+5",
  "^": "shift+6",
  "&": "shift+7",
  "*": "shift+8",
  "(": "shift+9",
  ")": "shift+0",
  "_": "shift+-",
  "+": "shift+=",
  "~": "shift+`",
  ":": "shift+;",
  "\"": "shift+'",
  "<": "shift+,",
  ">": "shift+.",
  "?": "shift+/",
  "{": "shift+[",
  "}": "shift+]",
  "|": "shift+\\"
}
```

Use code with caution.

### ⚠️ A Critical Mousetrap Exception: Capital Letters

It is worth noting that **capital letters (`A` through `Z`)** are technically "impossible keys" without shift. However, Mousetrap handles them uniquely:

- Binding `Mousetrap.bind('G', ...)` specifically listens for `shift+g`.
- If you want to include capital letters in your equivalent object, you would need to add all 26 letters like this: `"A": "shift+a"`, `"B": "shift+b"`, etc. \[[1](https://github.com/ccampbell/mousetrap)]

If you want to auto-generate bindings for **capital letters** programmatically or need to detect **international keyboard layouts** dynamically, let me know and I can write a script for you!

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://github.com/ccampbell/mousetrap)\
  ccampbell/mousetrap: Simple library for handling ... - GitHub\
  Jan 23, 2020 — Mousetrap is a simple library for handling keyboard shortcuts in Javascript. It is licensed under the Apache 2.0 license. It is ar...\
  GitHub

# why is mousetrap (npm lib) called

The **Mousetrap** npm library is called that <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">because it is a playful, literal play on words for <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">"killing" or getting rid of your computer mouse</strong></mark>. \[[1](https://craig.is/killing/mice)]

Because the library's entire purpose is to help developers handle complex keyboard shortcuts in JavaScript, it enables users to navigate a web application using only their keyboard. \[[1](https://www.npmjs.com/package/mousetrap), [2](https://medium.com/@345490675/mousetrap-a-javascript-library-for-creating-an-efficient-keyboard-shortcut-experience-dfe2dbcd3a56)]

The intentional humor behind the name is explicitly outlined by its creator, Craig Campbell:

- **The Slogan**: The tagline featured on the library's [official documentation website](https://craig.is/killing/mice) is literally: _"What are you waiting for? Throw away your mouse and download it now."_
- **The URL**: The creator hosted the website at the custom URL path `/killing/mice`. \[[1](https://craig.is/killing/mice)]

Essentially, by creating a "trap" for the mouse, the library frees the user's hands to stay entirely on the keyboard.

If you are currently setting up shortcuts for an app, I can show you how to **bind complex key sequences** (like Gmail style combos) or **integrate it with modern frameworks** like React and Vue. Which one are you working on?

- [link](https://craig.is/killing/mice)\
  Mousetrap - Keyboard shortcuts in Javascript - Craig Campbell\
  Introduction. Mousetrap is a standalone library with no external dependencies. It weighs in at around 2kb minified and gzipped and...\
  craig.is
- [link](https://www.npmjs.com/package/mousetrap)\
  mousetrap - NPM\
  Jan 23, 2020 — Mousetrap is a simple library for handling keyboard shortcuts in Javascript. It is licensed under the Apache 2.0 license. It is ar...\
  NPM
- [link](https://medium.com/@345490675/mousetrap-a-javascript-library-for-creating-an-efficient-keyboard-shortcut-experience-dfe2dbcd3a56)\
  Mousetrap: A JavaScript Library for Creating an Efficient Keyboard Shortcut Experience\
  Jan 17, 2025 — It involves complex key event listening, handling browser differences, and many other issues. Mousetrap, this lightweight JavaScri...\
  \
  \
  Medium

# all string methods in js

**JavaScript strings are immutable**, which means string methods never modify the original string; they always return a brand new string or a different data type. \[[1](https://www.youtube.com/watch?v=4RHPbSpEpbw\&t=9), [2](https://www.freecodecamp.org/news/javascript-string-tutorial-string-methods-in-js/), [3](https://talent500.com/blog/20-javascript-essential-string-methods-to-ace-your-next-interview/), [4](https://blog.devgenius.io/a-visual-beginners-guide-to-strings-in-javascript-4fb0abc923dd)]

Below is the complete, categorized list of modern JavaScript string methods available in the standard [MDN String Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String). \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String/includes)]

### Extracting Characters

- `at(index)`: Returns the character at a given index, supporting negative integers to count backward from the end.
- `charAt(index)`: Returns the character at the specified index.
- `charCodeAt(index)`: Returns the UTF-16 code unit (integer between 0 and 65535) at the index.
- `codePointAt(index)`: Returns a non-negative integer that is the Unicode code point value of the character. \[[1](https://www.geeksforgeeks.org/javascript/javascript-string-methods/), [2](https://www.youtube.com/watch?v=Vd5UDBaWnlI), [3](https://www.w3schools.com/js/js%5Fstring%5Freference.asp), [4](https://www.youtube.com/watch?v=4RHPbSpEpbw\&t=9), [5](https://medium.com/@catherineisonline/34-javascript-string-methods-cheatsheet-f0a04a984946)]

### Extracting Substrings

- `slice(start, end)`: Extracts a section of a string from `start` up to (but not including) `end` and returns it.
- `substring(start, end)`: Similar to `slice`, but treats negative index numbers as `0`.
- `split(separator, limit)`: Divides a string into an array of substrings based on a specified pattern. \[[1](https://javascript.info/string), [2](https://www.edureka.co/blog/javascript-string-functions/), [3](https://www.youtube.com/watch?v=4RHPbSpEpbw\&t=9), [4](https://www.geeksforgeeks.org/javascript/javascript-string-methods/), [5](https://www.youtube.com/watch?v=Vd5UDBaWnlI)]

### Finding & Matching Substrings

- `includes(searchString, position)`: Checks whether one string can be found inside another, returning `true` or `false`.
- `startsWith(searchString, position)`: Determines whether a string begins with the specified characters.
- `endsWith(searchString, length)`: Determines whether a string ends with the specified characters.
- `indexOf(searchString, position)`: Returns the index of the first occurrence of a specified value, or `-1` if not found.
- `lastIndexOf(searchString, position)`: Returns the index of the last occurrence of a specified value, or `-1` if not found.
- `match(regex)`: Matches a regular expression against the string and returns an array of matches.
- `matchAll(regex)`: Returns an iterator of all results matching a string against a regular expression.
- `search(regex)`: Executes a search for a match between a regular expression and the string, returning the index position. \[[1](https://www.youtube.com/watch?v=4RHPbSpEpbw\&t=9), [2](https://medium.com/@catherineisonline/34-javascript-string-methods-cheatsheet-f0a04a984946), [3](https://www.edureka.co/blog/javascript-string-functions/), [4](https://dev.to/a%5Framesh/complete-list-of-javascript-string-methods-12b9), [5](https://www.geeksforgeeks.org/javascript/javascript-string-methods/)]

### Modifying Text & Padding

- `replace(searchFor, replaceWith)`: Replaces the first match of a substring or regex with a replacement string.
- `replaceAll(searchFor, replaceWith)`: Replaces all matches of a substring or regex with a replacement string.
- `toUpperCase()`: Converts the entire string to uppercase.
- `toLowerCase()`: Converts the entire string to lowercase.
- `toLocaleUpperCase(locale)`: Converts the string to uppercase according to any local specific rules.
- `toLocaleLowerCase(locale)`: Converts the string to lowercase according to any local specific rules.
- `concat(str1, str2, ...)`: Combines the text of two or more strings and returns a new combined string.
- `repeat(count)`: Returns a new string containing the specified number of copies of the string.
- `padStart(targetLength, padString)`: Pads the current string from the start with a given string until it reaches the target length.
- `padEnd(targetLength, padString)`: Pads the current string from the end with a given string until it reaches the target length. \[[1](https://www.youtube.com/watch?v=4RHPbSpEpbw\&t=9), [2](https://www.youtube.com/watch?v=Vd5UDBaWnlI), [3](https://www.edureka.co/blog/javascript-string-functions/), [4](https://www.geeksforgeeks.org/javascript/javascript-string-methods/), [5](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String/includes), [6](https://www.w3schools.com/js/js%5Fstring%5Freference.asp)]

### Trimming Whitespace

- `trim()`: Removes whitespace from both the beginning and end of a string.
- `trimStart()` / `trimLeft()`: Removes whitespace from the beginning of a string.
- `trimEnd()` / `trimRight()`: Removes whitespace from the end of a string. \[[1](https://www.youtube.com/watch?v=4RHPbSpEpbw\&t=9), [2](https://www.youtube.com/watch?v=Vd5UDBaWnlI), [3](https://javascript.plainenglish.io/6-essential-javascript-string-methods-for-everyday-use-3bd0a0a2f06e), [4](https://www.geeksforgeeks.org/javascript/javascript-string-methods/)]

### Utility & Formatting

- `localeCompare(compareString)`: Returns a number indicating whether the reference string comes before, after, or is the same as the given string in sort order.
- `normalize(form)`: Returns the Unicode Normalization Form of the string.
- `toString()`: Returns a string representing the specified object.
- `valueOf()`: Returns the primitive value of a string object.
- `isWellFormed()`: Returns a boolean indicating whether the string contains any lone surrogates.
- `toWellFormed()`: Returns a string where all lone surrogates are replaced by the Unicode replacement character. \[[1](https://www.freecodecamp.org/news/javascript-string-handbook/), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String/includes), [3](https://www.edureka.co/blog/javascript-string-functions/), [4](https://brainstation.io/learn/javascript/string), [5](https://docs.sencha.com/ext/6.2.1/classic/String.html)]

### Static Methods

- `String.fromCharCode(num1, num2, ...)`: Returns a string created from the specified sequence of UTF-16 code units.
- `String.fromCodePoint(num1, num2, ...)`: Returns a string created from the specified sequence of Unicode code points.
- `String.raw(strings, ...substitutions)`: A template literal tag function used to get the raw string form of template literals. \[[1](https://www.freecodecamp.org/news/javascript-string-handbook/), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String/includes), [3](https://www.youtube.com/watch?v=dW3KTXfuSFw), [4](https://www.codecademy.com/resources/docs/javascript/strings/fromCodePoint), [5](https://www.scaler.com/topics/javascript/javascript-string/)]

_(Note: Legacy HTML wrapper methods like `anchor()`, `big()`, `blink()`, `bold()`, `fixed()`, `fontcolor()`, `fontsize()`, `italics()`, `link()`, `small()`, `strike()`, `sub()`, `substr()`, and `sup()` are **deprecated** and should no longer be used in modern production code.)_ \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String/includes), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String)]

Would you like a code **example** of how to use any of these specific methods, or are you trying to solve a **particular string manipulation problem** right now?

- [link](https://www.youtube.com/watch?v=4RHPbSpEpbw\&t=9)\
  \#37 - Most Important String Methods In JavaScript\
  Oct 9, 2023 — so today we are going to talk a very simple concept that is uh different string manipulation. or string methods. so for example le...\
  26m\
  YouTube·Naveen AutomationLabs
- [link](https://www.geeksforgeeks.org/javascript/javascript-string-methods/)\
  JavaScript String Methods - GeeksforGeeks\
  Jun 1, 2026 — JavaScript String Methods \* slice() slice() extracts a part of the string based on the given stating-index and ending-index and re...\
  GeeksforGeeks
- [link](https://www.youtube.com/watch?v=Vd5UDBaWnlI)\
  String Methods - Javascript Programming 25\
  Apr 15, 2024 — in this video we're going to look at string Methods for JavaScript. hey guys John Elder from cod.com. and JavaScript has all kinds...\
  11:30\
  YouTube·John Elder

Show all

# 
