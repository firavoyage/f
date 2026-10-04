# fp util fn

**Functional Programming (FP) utility functions** are small, pure, and composable tools designed to manage data transformations without mutating states or producing side effects. [link](https://www.youtube.com/shorts/JwzLwmqNXfo)

Below is a breakdown of the most essential FP utility functions implemented in vanilla **JavaScript/TypeScript**, grouped by their core operational category.

***

### Core Composition & Execution

These utilities allow you to chain functions together to build complex workflows from simple operations. [link](https://dev.to/rosselli00/functional-programming-fp-principles-with-examples-pd3)

- **`pipe`**: Passes a value through a sequence of functions from **left to right**.\
  javascript

<!---->

```
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
```

Use code with caution.

- **`compose`**: Passes a value through a sequence of functions from **right to left** (mathematical composition).\
  javascript

<!---->

```
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
```

Use code with caution.

- **`curry`**: Translates a function that takes multiple arguments into a sequence of functions that each take a single argument.\
  javascript

<!---->

```
const curry = (fn) => {
  return const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...nextArgs) => curried(...args, ...nextArgs);
};
```

Use code with caution.

### Data Accessors & Identity

Basic primitives used to safely handle inputs, provide defaults, or map values inside higher-order transformations.

- **`identity`**: Simply returns whatever argument it receives. Useful as a placeholder or default transformer.\
  javascript

<!---->

```
const identity = x => x;
```

Use code with caution.

- **`constant` (or `always`)**: Returns a function that always produces the same value, no matter what it is passed.\
  javascript

<!---->

```
const constant = x => () => x;
```

Use code with caution.

- **`prop`**: Safely extracts a property from an object by its key.\
  javascript

<!---->

```
const prop = key => obj => obj?.[key];
```

Use code with caution.

### Side Effect Management

- **`tap`**: Executes a side effect (like logging or debugging) and returns the value completely unchanged to keep the pipeline moving.\
  javascript

<!---->

```
const tap = fn => x => { fn(x); return x; };
```

Use code with caution.

***

### Practical Example Usage

You can use these utilities together to build data pipelines clean of intermediate variable noise: [link](https://www.youtube.com/watch?v=MXVMnk1TlZY\&t=19)

javascript

```
const uppercase = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const log = tap(console.log);

// Create a reusable pipeline
const shout = pipe(uppercase, exclaim, log);

shout("hello world");
// Output: "HELLO WORLD!" (and returns "HELLO WORLD!")
```

Use code with caution.

### Popular Ecosystem Libraries

If you don't want to build your own, the JavaScript/TypeScript community relies heavily on dedicated libraries providing highly-optimized FP utilities:

- **Ramda**: A library designed specifically for functional pipelines, where functions are automatically curried and data arguments are placed last.

- **Lodash/fp**: The functional programming variant of Lodash, exported with auto-curried, data-last capabilities.

- **fp-ts**: The industry standard for robust, type-safe functional programming abstractions in TypeScript.

- [link](https://www.youtube.com/watch?v=MXVMnk1TlZY\&t=19)\
  YouTube·About Clean Code\
  FP Beginners: It's NOT that Scary, I Promise ...\
  May 1, 2023 — First, the presenter removes all semicolons from the C# code, stating they are unnecessary noise. pipe operator \`|>\`. This allows ...\
  3m

- [link](https://www.youtube.com/shorts/JwzLwmqNXfo)\
  YouTube·Func Prog Sweden\
  Best Features of FP\
  Aug 23, 2026 — The ability to distinguish between managed side effects and pure functions stands out as a key feature of functional programming.\
  0:26

- [link](https://dev.to/rosselli00/functional-programming-fp-principles-with-examples-pd3)\
  DEV Community\
  Functional Programming (FP) Principles with examples\
  Oct 3, 2024 — Function Composition Combining simple functions to build more complex functions. This allows for more modular, reusable code.

Show all

# all fp util fn

In **Functional Programming (FP)**, utility functions are the core building blocks used to compose, transform, and manage data cleanly without mutating state.

Below is a comprehensive guide to the most common FP utility functions grouped by their core purpose.

***

### 🧱 Function Composition & Execution

These utilities allow you to chain functions together, change how they receive arguments, or delay execution.

- **pipe**: Passes a value through a sequence of functions from left to right (or top to bottom).\
  pipe(𝑥,𝑓,𝑔)=𝑔(𝑓(𝑥))
- **flow / compose**: Chains functions from right to left (the mathematical order of composition).\
  compose(𝑓,𝑔)(𝑥)=𝑓(𝑔(𝑥))
- **curry**: Transforms a function that takes multiple arguments into a chain of functions that each take a single argument.
- **partial**: Pre-fills some arguments of a function, returning a new function that accepts the remaining arguments.
- **identity**: Returns whatever argument it receives. Often used as a default transformer.\
  𝑓(𝑥)=𝑥
- **constant (always)**: Returns a function that always yields the same value, regardless of what input it gets.
- **tap**: Executes a side-effect (like `console.log`) with an input value and returns that value unchanged to keep a pipeline going.

***

### 📊 List & Collection Transformations

These functions process collections or arrays immutably.

- **map**: Transforms every element in a collection using a provided function and returns a new collection.
- **filter**: Evaluates each element against a predicate function and returns a new collection containing only the elements that return `true`.
- **reduce / fold**: Accumulates a collection into a single value (e.g., summing numbers, combining objects).
- **flatMap / chain**: Maps each element using a function that returns a collection, then flattens the nested collections into a single array.
- **forEach / each**: Iterates through elements to perform side effects (breaks the pure FP paradigm but necessary at execution boundaries).

***

### 🔍 Predicates & Logic

Functions that evaluate conditions and return boolean values (`true` or `false`).

- **all / every**: Returns `true` if **all** elements in a collection pass a predicate function.
- **any / some**: Returns `true` if **at least one** element passes a predicate function.
- **none**: Returns `true` if **zero** elements pass a predicate function.
- **complement / not**: Inverts the result of a predicate function (turns a `isEven` function into `isOdd`).
- **converge**: Accepts a branching function and an array of target functions, applying the inner functions to an argument and passing the results to the branch function.

***

### 🧠 Advanced Control Flow & Functors

Used to safely handle asynchronous operations, missing data (`null`), or errors without using throwing exceptions.

- **map / chain (Monadic)**: Used on data types like `Option/Maybe` or `Either/Result` to unpack, transform, and repack values safely.
- **promisify**: Converts a traditional callback-based function into a function that returns a modern Promise.
- **memoize**: Caches the results of a function based on its inputs to save processing power on pure functions. [link](https://fpromises.io/)

***

### Popular FP Utility Libraries by Language

If you do not want to write these yourself, developers standardly use trusted libraries that come pre-packaged with all these functions:

| Language                    | Top Libraries                          |
| --------------------------- | -------------------------------------- |
| **JavaScript / TypeScript** | Lodash/fp, Ramda, Remeda, Effect       |
| **Python**                  | `toolz`, `fn.py`, built-in `functools` |
| **Java / Kotlin**           | Vavr, Arrow                            |

- [link](https://fpromises.io/)\
  fpromises.io\
  Functional Promises\
  promisifyAll(Object/Class/Prototype) accepts an Object/Class/Prototype-based-thing and for every key of type function it adds a pr...

- [link](https://fp-utils.hexdocs.pm/1.0.0/fp/list.html)\
  fp-utils.hexdocs.pm\
  fp/list · fp\_utils · v1.0.0 - Hexdocs\
  Returns True if all elements in the list satisfy the predicate. Returns True for empty lists (vacuous truth).

# all lisp fp util fn

In Lisp dialects (like Common Lisp, Clojure, or Scheme), **functional programming utility functions** form the core of data transformation and control flow.

Here are the essential Lisp functional programming utility functions grouped by their primary purpose.

### Mapping & Transformation

- **`map` / `mapcar`**: Applies a function to each element of one or more lists and returns a new list of the results.\
  lisp

<!---->

```
(mapcar #'(lambda (x) (* x 2)) '(1 2 3)) ; Returns (2 4 6)
```

Use code with caution.

- **`mapcan` / `flatmap`**: Maps a function over a list and concatenates (flattens) the resulting lists.\
  lisp

<!---->

```
(mapcan #'(lambda (x) (list x (- x))) '(1 2)) ; Returns (1 -1 2 -2)
```

Use code with caution.

### Reduction & Folding

- **`reduce`**: Combines all elements of a sequence using a binary operation, from left to right.\
  lisp

<!---->

```
(reduce #'+ '(1 2 3 4)) ; Returns 10
```

Use code with caution.

### Filtering & Selection

- **`remove-if` / `filter`**: Returns a new list containing only the elements that do not satisfy a predicate (or do satisfy it, depending on the dialect).\
  lisp

<!---->

```
(remove-if #'evenp '(1 2 3 4)) ; Returns (1 3)
```

Use code with caution.

- **`remove-if-not` / `keep`**: Retains elements that satisfy a predicate.\
  lisp

<!---->

```
(remove-if-not #'evenp '(1 2 3 4)) ; Returns (2 4)
```

Use code with caution.

### Function Execution & Application

- **`funcall`**: Invokes a function immediately with explicit arguments.\
  lisp

<!---->

```
(funcall #'+ 1 2 3) ; Returns 6
```

Use code with caution.

- **`apply`**: Invokes a function using a list to provide its arguments.\
  lisp

<!---->

```
(apply #'+ '(1 2 3)) ; Returns 6
```

Use code with caution.

### Function Composition & Generation

- **`identity`**: Returns its argument exactly as-is; often used as a default placeholder function.\
  lisp

<!---->

```
(identity 5) ; Returns 5
```

Use code with caution.

- **`complement`**: Takes a predicate function and returns a new function that gives the exact opposite boolean result.\
  lisp

<!---->

```
(funcall (complement #'evenp) 4) ; Returns NIL (False)
```

Use code with caution.

- **`constantly`**: Returns a function that always returns the same value, no matter what arguments it receives.\
  lisp

<!---->

```
(funcall (constantly t) 1 2 3) ; Returns T (True)
```

Use code with caution.

Are you working within a specific Lisp dialect like **Common Lisp**, **Clojure**, or **Scheme/Racket**? I can give you the exact names and implementation quirks for your specific ecosystem.

# all lisp fp utils

When talking about **functional programming (FP) utility libraries in Lisp** (primarily Common Lisp), developers typically refer to libraries that fill the gaps in the standard library for higher-order functions, functional data structure manipulation, currying, composition, and mapping.

The most prominent, standard, and modern FP utility libraries in the Lisp ecosystem include:

### 1. Alexandria (The De Facto Standard)

Alexandria is the most widely used utility library in the Common Lisp ecosystem. While it contains general utilities, its **functional programming** section is foundational.

- `curry` and `rcurry`: For partial function application (binding arguments from the left or right).
- `compose`: For function composition (e.g., `(compose #'cardinal #'length)`).
- `ensure-function`: Safely coerces symbols or lambda expressions into actual functions.
- `conjoin` and `disjoin`: Combines multiple predicates into a single functional `AND` or `OR` predicate.

### 2. Serapeum (The Powerful Extension)

Serapeum is a massive, modern utility library designed to complement Alexandria. It contains deep, robust functional programming paradigms.

- `fbind`: Elegantly binds functions locally, reducing the boilerplate of `flet` and `labels`.
- **Extensive Mapping:** Functions like `map-proportions`, `mappend`, and utilities to safely map over trees, nested lists, and hash tables functionally.
- **Combinators:** Advanced functional combinators that go beyond basic currying.

### 3. FSet (Functional/Immutable Data Structures)

True functional programming relies heavily on **immutability**. The standard Common Lisp collections (like hash tables and lists) are often manipulated destructively. FSet provides a complete suite of functional, immutable collections.

- **Data Structures:** Purely functional lists, sets, bags (multisets), maps (dictionaries), and sequences.
- **Behavior:** Modifying an FSet collection always returns a _new_ collection, leaving the original intact, utilizing highly optimized structural sharing.

### 4. Cl-Functional-Utils / [Agutil](https://github.com/alex-gutev/agutil) (Dedicated FP Suites)

These are targeted libraries specifically written to bring paradigm-specific functional structures into Lisp. [link](https://github.com/alex-gutev/agutil)

- `repeat-function`: Calls a function `N` times and collects the outputs into a pure list.
- **Placeholder Syntax:** Some of these utilities introduce lightweight closure generators (similar to Clojure's anonymous function shorthand `#( %1 )`). [link](https://github.com/alex-gutev/agutil)

***

### Comparison of Core FP Mechanics

| Utility Needed               | Standard Common Lisp                   | Alexandria / Serapeum Equivalent        |
| ---------------------------- | -------------------------------------- | --------------------------------------- |
| **Partial Application**      | `(lambda (x) (func a x))`              | `(curry #'func a)`                      |
| **Composition**              | `(lambda (x) (fn1 (fn2 x)))`           | `(compose #'fn1 #'fn2)`                 |
| **Functional Map Appending** | `(apply #'append (mapcar #'fn list))`  | `(mappend #'fn list)`                   |
| **Immutable Updates**        | Destructive `(setf (gethash k map) v)` | Immutable `(with map k v)` _(via FSet)_ |

### How to Install

All of these functional utilities can be easily managed and loaded via Quicklisp, the standard package manager for Common Lisp:

lisp

```
(ql:quickload :alexandria)
(ql:quickload :serapeum)
(ql:quickload :fset)
```

Use code with caution.

- [link](https://github.com/alex-gutev/agutil)\
  GitHub\
  GitHub - alex-gutev/agutil: A collection of Common Lisp utilities\
  Function REPEAT-FUNCTION FN N Returns a list of N items obtained by calling the function FN N times.

# all ramda methods

**Ramda** is a popular practical functional library for JavaScript programmers \[0.16, 0.18]. It boasts well over 200 functions designed for immutability, automatic currying, and data-last compositions. [link](https://ramdajs.com/)

Because listing every single function with full details would result in a massive wall of text, the entire ecosystem is organized below into logical subheadings by category, highlighting the most prominent methods you will interact with. You can review the complete, searchable list directly on the [Ramda Documentation](https://ramdajs.com/docs/) page. [link](https://ramdajs.com/docs/)

***

### ⚙️ Function Composition & Currying

These core utilities form the foundation of building functional data pipelines in Ramda by enabling partial application and combining smaller functions into larger ones. [link](https://2coffee.dev/en/articles/introduction-to-the-ramda-functional-programming-library/)

- `__` (Special placeholder for introducing argument gaps during currying)
- `always` (Returns a function that always returns the given value; equivalent to `constant`)
- `ap` (Applies a list of functions to a list of values)
- `apply` (Applies a function to an array of arguments)
- `applySpec` (Creates a function that returns an object mimicking a given structure filled with values mapped via functions)
- `binary` (Forces a function to accept exactly two arguments)
- `bind` (Binds a function to a specific context/object)
- `call` (Invokes the provided function with given arguments)
- `compose` (Performs right-to-left function composition)
- `converge` (Accepts a branching function and a list of target functions to evaluate data points simultaneously)
- `curry` / `curryN` (Automatically returns a curried equivalent of the provided function)
- `flip` (Reverses the order of the first two arguments of a function)
- `identity` (A function that simply returns the parameter supplied to it)
- `invoker` (Turns a native JavaScript object method into a curried, pure function)
- `juxt` (Applies a list of functions to the same arguments and lists the results)
- `lift` / `liftN` (Lifts a function of any arity to work on data structures like arrays)
- `nthArg` (Returns a function that yields its _nth_ argument)
- `o` (A lightweight version of composition meant strictly for unary functions)
- `once` (Restricts a function to running only a single time)
- `partial` / `partialRight` (Pre-binds positional parameters linearly from left or right)
- `pipe` (Performs left-to-right function composition)
- `pipeWith` / `composeWith` (Composes transformations using a custom wrapper function, often used for Promises)
- `tap` (Runs a function alongside a pipeline for side-effects, like logging, without modifying data)
- `unary` (Restricts a function to accepting exactly one argument)
- `useWith` (Applies successive transformer functions to matching arguments before passing them to the main function) [link](https://github.com/tarasowski/ramda-x)

### 📋 List & Array Manipulations

These functions let you cleanly transform, iterate, index, slice, and slice array structures safely without mutating the original arrays. [link](https://ramdajs.com/0.26.1/docs/)

- `adjust` (Applies a function to a specific index in a list)
- `all` (Checks if all items in a list satisfy a predicate function)
- `any` (Checks if at least one item satisfies a predicate function)
- `aperture` (Returns a list of moving n-tuples from a list)
- `append` (Adds an element to the end of a list)
- `chain` (Maps a function over a list and flattens/concatenates the results; also known as `flatMap`)
- `concat` (Combines two lists or strings)
- `drop` / `dropLast` / `dropWhile` (Excludes items based on a count or matching rule)
- `dropRepeats` / `dropRepeatsWith` (Removes consecutive duplicate values)
- `filter` (Returns a new list containing items that pass a truth test)
- `find` / `findIndex` / `findLast` / `findLastIndex` (Locates index or content of items passing a test)
- `flatten` (Flattens nested arrays completely)
- `forEach` (Iterates over an array to fire side effects)
- `fromPairs` (Creates an object out of an array of key-value pairs)
- `groupWith` (Groups consecutive list items into sub-lists based on a comparison rule)
- `head` (Returns the first element of a list)
- `includes` (Checks if a list contains a specific value)
- `indexBy` (Converts a list of objects into an indexed map lookup based on a property key)
- `indexOf` / `lastIndexOf` (Returns the position of a specific element)
- `init` (Returns all elements of a list except the last one)
- `insert` / `insertAll` (Injects values at a targeted index)
- `intersperse` (Places a separator value between every element of a list)
- `into` (Transforms data into a specific target transducer wrapper)
- `join` (Combines items into a single string spaced by a separator)
- `last` (Returns the final element of a list)
- `length` (Returns the length of a list)
- `map` (Transforms each element of a list according to a callback function)
- `mapAccum` / `mapAccumRight` (Combines mapping and reducing actions together sequentially)
- `move` (Shifts a list item from one index position to another)
- `none` (Returns true if no elements pass the conditional check)
- `nth` (Retrieves the item at a specific target position index)
- `pair` (Takes two arguments and bundles them into an array of `[a, b]`)
- `partition` (Splits a list into a pair of lists: those that pass a test and those that do not)
- `pluck` (Extracts a specific property value out of every object in an array)
- `prepend` (Adds an element to the front of a list)
- `range` (Generates a sequence array of numbers spanning a start and end point)
- `reduce` / `reduceRight` (Reduces a collection down to a single accumulated value)
- `reduceBy` / `reduceWhile` (Advanced accumulation setups with conditional grouping thresholds)
- `reject` (The inverse of `filter`; removes items that pass the test)
- `remove` (Deletes a segment of an array based on index and length counts)
- `repeat` (Generates a list containing the same value repeated n times)
- `reverse` (Flips the order of elements in a list)
- `scan` (Acts like `reduce` but outputs an array charting every incremental step value)
- `slice` (Extracts a subset array between index intervals)
- `sort` / `sortBy` (Sorts arrays via comparison functions without changing the source array)
- `splitAt` / `splitEvery` / `splitWhen` (Divides lists into fragments based on indices or triggers)
- `tail` (Returns all items in a list except the very first one)
- `take` / `takeLast` / `takeWhile` (Captures a limited window of elements from a list)
- `transduce` (Optimizes array pipelines using functional transducers)
- `unfold` (Generates a list by continuously applying an accumulation function)
- `uniq` / `uniqWith` (Extracts all unique elements from an array)
- `unnest` (Flattens an array by exactly one nesting level)
- `update` (Replaces an item at a targeted index position)
- `without` (Filters out a list of specified target items)
- `xprod` (Computes the cross-product of two arrays to mix matching variants)
- `zip` / `zipObj` / `zipWith` (Combines paired parameter inputs into key-value sets or single objects) [link](https://www.youtube.com/watch?v=jeUFbUHDqbk)

### ☱ Object Operations

Utilities designed to handle reading, merging, picking, and safely modifying deep object trees immutably. [link](https://ramdajs.com/0.26.1/docs/)

- `assoc` / `assocPath` (Immutably sets or updates a value at a target property key or path mapping)
- `clone` (Performs a deep copy of arrays and object structures)
- `dissoc` / `dissocPath` (Immutably strips out a property key or deep nested path out of an object structure)
- `eqProps` (Validates whether two objects share the identical value for a specific key)
- `evolve` (Transforms object properties cleanly using an object structural map of helper functions)
- `has` / `hasIn` / `hasPath` (Checks if an object contains a specific key or nested path)
- `invert` / `invertObj` (Swaps object property keys with their associated values)
- `keys` / `keysIn` / `values` / `valuesIn` (Extracts an array of all structural keys or values from an object)
- `mapKeys` / `mapObjIndexed` (Maps functions directly over object maps instead of arrays)
- `mergeAll` (Combines an array of objects into a single object)
- `mergeLeft` / `mergeRight` / `mergeDeepLeft` / `mergeDeepRight` (Immutably merges objects, with right or left prioritizing property overwrites)
- `mergeWith` / `mergeWithKey` / `mergeDeepWith` / `mergeDeepWithKey` (Merges objects using custom handling functions when duplicate keys collide)
- `modify` / `modifyPath` (Safely runs an alteration function targeting a property path)
- `objOf` (Creates an object with a single key-value pair)
- `omit` (Removes specific keys from an object)
- `over` / `set` / `view` (Functions used alongside functional lenses to read, write, or transform object paths)
- `path` / `paths` / `pathOr` (Safely fetches nested properties with an optional fallback option if the path is undefined)
- `pick` / `pickAll` / `pickBy` (Creates a partial copy of an object containing only the specified keys)
- `project` (Simulates a SQL-style property projection across an array of objects)
- `prop` / `props` / `propOr` (Fetches individual or multiple shallow values from an object)
- `toPairs` / `toPairsIn` (Converts an object into an array of `[key, value]` pairs)
- `where` / `whereEq` (Validates an object structure against an object containing predicate test states) [link](https://ramdajs.com/0.25.0/docs/)

### 👁️ Functional Lenses

Lenses combine getter and setter operations into a single reusable concept to interact with complex, deeply nested data shapes immutably.

- `lens` (Creates a generic lens from a custom getter and setter)
- `lensIndex` (Creates a lens focused on a specific array index)
- `lensPath` (Creates a lens focused on a deeply nested object path)
- `lensProp` (Creates a lens focused on a specific object property key) [link](https://ramdajs.com/0.27.0/docs/)

### 🔀 Logic & Conditional Control Flow

These utilities let you replace imperative syntax like `if/else` and `switch` statements with purely declarative, composable functional pipelines. [link](https://medium.com/compendium/ramda-your-javascript-e72bfaef01d5)

- `allPass` / `anyPass` (Combines an array of predicates into a single rule checking if all or any pass)
- `and` / `or` / `not` / `xor` (Standard boolean logic wrappers)
- `both` / `either` / `complement` (Combines predicate functions using AND, OR, or NOT logic)
- `cond` (Implements a functional `switch` statement using an array of predicate-transformer pairs)
- `defaultTo` (Returns a fallback default value if the target value is `null`, `undefined`, or `NaN`)
- `ifElse` (A functional `if/else` construct that takes a predicate and two branch functions)
- `isEmpty` / `isNotEmpty` (Checks if a structure is empty, supporting strings, objects, arrays, and maps)
- `isNil` / `isNotNil` (Checks if a value is explicitly `null` or `undefined`)
- `unless` / `when` (Executes a transformation function only if a predicate returns false or true) [link](https://dev.to/edmistond/better-know-a-method-with-ramda-s-cond-part-1-djk)

### ⚖️ Relations & Predicate Comparisons

- `countBy` (Counts list elements grouped by a transformation function)
- `difference` / `differenceWith` (Finds elements present in the first list but missing from the second)
- `eqBy` (Checks if two values are equal after applying a transformation function to both)
- `equals` (Performs a deep structural equality check between two values)
- `gt` / `gte` / `lt` / `lte` (Standard comparison operators wrapped as functions: `>`, `>=`, `<`, `<=`)
- `identical` (Performs a strict identity check; equivalent to `Object.is`)
- `innerJoin` (Finds matching items between two lists using a custom comparison predicate)
- `intersection` / `intersectionWith` (Returns a list of elements common to both input lists)
- `max` / `min` / `maxBy` / `minBy` (Determines the maximum or minimum value based on raw value or a property function)
- `pathEq` / `propEq` / `propSatisfies` (Checks if a nested path or property matches a value or passes a test)
- `symmetricDifference` / `symmetricDifferenceWith` (Finds items unique to either list, but not shared by both)
- `union` / `unionWith` (Combines two lists, returning a distinct set of unique elements) [link](https://michael-pautov.medium.com/most-useful-methods-of-ramda-js-f4c9d587fd0b)

### 🔢 Math & Numbers

- `add` / `subtract` / `multiply` / `divide` (Standard arithmetic math functions)
- `clamp` (Restricts a number to a specified minimum and maximum range)
- `dec` / `inc` (Decrements or increments a number by 1)
- `mathMod` / `modulo` (Calculates remainder results)
- `mean` / `median` (Calculates the average or middle value of a list of numbers)
- `negate` (Multiplies a number by -1)
- `product` / `sum` (Multiplies or adds all numbers in a list) [link](https://ramdajs.com/docs/)

### 🔤 String Patterns

- `match` (Parses strings using a Regular Expression)
- `replace` (Swaps text snippets matching strings or patterns)
- `split` (Breaks a string into an array of substrings based on a separator)
- `test` (Evaluates whether a string matches a Regular Expression)
- `toLower` / `toUpper` / `trim` (Standard text string formatting variations) [link](https://ramdajs.com/docs/)

### 🩺 Type Validations

- `is` (Validates whether a value matches a specific constructor type, like `String` or `Array`)
- `type` (Returns a string representing the internal primitive or object type of a value) [link](https://ramdajs.com/0.15/docs/)

Are there **specific types of operations** (such as deep object nesting adjustments, string searching, or mathematical transformations) that you are trying to implement? I can write out a **clean, practical example code pipeline** showing you how to compose those specific functions together.

- [link](https://ramdajs.com/docs/)\
  Ramda.js\
  Ramda Documentation\
  Creates a new list iteration function from an existing one by adding two new parameters to its callback function: the current inde...
- [link](https://ramdajs.com/)\
  Ramda.js\
  Ramda Documentation\
  Ramda functions are automatically curried. This allows you to easily build up new functions from old ones simply by not supplying ...
- [link](https://github.com/tarasowski/ramda-x)\
  GitHub\
  tarasowski/ramda-x: 10 most important methods for ... - GitHub\
  I. curry() II. compose() III. map() -> works only on arrays IV. filter() -> works only on arrays V. prop() -> works only on object...

Show all

# all lodashfp methods

The **`lodash/fp` module** repackages the standard [Lodash library](https://lodash.com/) to support a strictly functional programming style. While it includes almost all of the same utility features as core Lodash, every single method is <mark><strong>immutable, auto-curried, iteratee-first, and data-last</strong></mark>. [link](https://github.com/lodash/lodash/wiki/fp-guide)

Because `lodash/fp` contains hundreds of methods, listing every single name directly can create information overload. Below is the comprehensive breakdown of how they are organized, the critical rules governing them, and the unique functional helpers introduced exclusively for this module.

***

### 💡 Core Changes to All Methods

If you know regular Lodash, you already know the names of the `lodash/fp` methods. However, their signatures behave completely differently: [link](https://dev.to/ifarmgolems/what-is-lodash-fp-even-4ohd)

1. **Rearranged Arguments (Data Last):** The subject data always comes last.

- _Standard:_ `_.map(collection, iteratee)`
- _FP:_ `fp.map(iteratee, collection)` [link](https://lodash.com/docs/)

2. **Fixed Arity & Capped Iterators:** To make composition safe, methods have fixed argument counts (usually 1 to 4). Iteratee callbacks are capped to a single argument.

- _Standard:_ `_.map(['6', '8'], parseInt)` passes `(value, index, array)`, making `parseInt` fail.
- _FP:_ `fp.map(parseInt)(['6', '8'])` only passes `(value)`, working perfectly. [link](https://github.com/lodash/lodash/wiki/FP-Guide/64ab7a694d3079bbb997f292fbc82fd52b167ca0)

3. **No Optional Arguments:** Methods with optional configurations either split into separate methods or require an explicit options object first. [link](https://stackoverflow.com/questions/51262087/using-lodashs-fp-functions-in-a-flow)

***

### 🛠️ Categorized Methods List

The methods are grouped into the exact same logical categories as regular Lodash, but rewritten to be pure and chain-free: [link](https://www.sitepoint.com/lodash-features-replace-es6/)

#### Array / Collection Manipulation

Methods for filtering, transforming, and slicing lists.

- `fp.chunk`, `fp.compact`, `fp.concat`, `fp.difference`, `fp.drop`, `fp.dropRight`, `fp.filter`, `fp.find`, `fp.findIndex`, `fp.flatten`, `fp.head`, `fp.intersection`, `fp.join`, `fp.map`, `fp.reduce`, `fp.reject`, `fp.reverse`, `fp.slice`, `fp.some`, `fp.sortBy`, `fp.tail`, `fp.take`, `fp.uniq`, `fp.zip` [link](https://dev.to/vcpablo/javascript-some-very-useful-lodash-fp-functions-ejh)

#### Object Utilities

Methods for safely reading, copying, and changing object tracks without mutation. [link](https://blog.codeminer42.com/functional-programming-with-lodash-fp-8fe0619b3024/)

- `fp.assign`, `fp.at`, `fp.cloneDeep`, `fp.defaults`, `fp.get`, `fp.getOr`, `fp.has`, `fp.keys`, `fp.merge`, `fp.omit`, `fp.pick`, `fp.set`, `fp.toPairs`, `fp.values` [link](https://www.youtube.com/watch?v=O3ZTzlNjqTw\&t=79)

#### Function & Composition Helpers

Tools to manage, bind, and combine operations execution flow.

- `fp.after`, `fp.before`, `fp.curry`, `fp.debounce`, `fp.delay`, `fp.flow`, `fp.flowRight`, `fp.memoize`, `fp.negate`, `fp.once`, `fp.partial`, `fp.throttle` [link](https://www.simonsmith.io/dipping-a-toe-into-functional-js-with-lodash-fp)

#### String & Math Utilities

- `fp.camelCase`, `fp.capitalize`, `fp.lowerCase`, `fp.replace`, `fp.split`, `fp.trim`, `fp.add`, `fp.ceil`, `fp.floor`, `fp.max`, `fp.min`, `fp.round`, `fp.sum` [link](https://lodash.com/docs/)

***

### 🗺️ FP-Exclusive Aliases and New Methods

To accommodate functional paradigms (like those found in Ramda or Elixir), `lodash/fp` includes **59 specific aliases** and tailored methods: [link](https://nondv.wtf/blog/posts/getting-rid-of-oop-in-js.html)

| Standard Method | `lodash/fp` Alias   | Purpose / Style                        |
| --------------- | ------------------- | -------------------------------------- |
| `_.flow`        | **`fp.pipe`**       | Left-to-right function composition     |
| `_.flowRight`   | **`fp.compose`**    | Right-to-left mathematical composition |
| `_.stubFalse`   | **`fp.F`**          | Returns `false` instantly              |
| `_.stubTrue`    | **`fp.T`**          | Returns `true` instantly               |
| `_.identity`    | **`fp.id`**         | Returns the first argument it receives |
| `_.matches`     | **`fp.complement`** | Higher-order inversion helper          |

_Note on padding:_ Since optional arguments are removed, standard `_.padStart(str, length, chars)` is broken out into **`fp.padCharsStart(chars)(length)(str)`** to allow proper currying. [link](https://github.com/lodash/lodash/wiki/FP-Guide/64ab7a694d3079bbb997f292fbc82fd52b167ca0)

***

### 📖 Looking Up Specific Signatures

Because the full dictionary is massive, you can find the entire auto-generated mapping file and signature alterations directly via the community-maintained [jfmengels/lodash-fp-docs Guide](https://github.com/jfmengels/lodash-fp-docs) or the official wiki [FP-Guide](https://github.com/lodash/lodash/wiki/fp-guide).

Are you trying to **convert a specific block of standard Lodash code** into functional programming style, or are you looking for a **particular method category** (like deep object updating)? Let me know what you are building!

- [link](https://lodash.com/docs/)\
  Lodash\
  Lodash Documentation\
  Creates an array of values by running each element in collection thru iteratee . \_.map , \_.mapValues , \_.reject … parseInt , rando...
- [link](https://github.com/lodash/lodash/wiki/fp-guide)\
  GitHub\
  FP Guide · lodash/lodash Wiki · GitHub\
  Includes new helper methods, 59 aliases … no chaining (uses composition instead), and a customizable convert method.
- [link](https://nondv.wtf/blog/posts/getting-rid-of-oop-in-js.html)\
  nondv.wtf\
  Getting rid of OOP in Javascript with lodash/fp\
  Lodash/fp provides the most of the original lodash functions but modified to promote functional style. allow currying. it allows y...

Show all

# all fp-ts methods

The **`fp-ts`** library contains hundreds of functions split across dozens of modules. Because the library relies on modular, pure function imports rather than prototype methods, there is no single master list of "methods". Instead, functions are grouped logically by **Core Data Types**, **Composition Utilities**, and **Category Theory Abstractions**. [link](https://gcanti.github.io/fp-ts/)

The most essential and frequently used `fp-ts` functions can be categorized below.

***

### 1. Composition Utilities (`fp-ts/function`)

These functions orchestrate how data flows through your program. [link](https://rlee.dev/practical-guide-to-fp-ts-part-1)

- **`pipe`**: Feeds a starting value sequentially into an arbitrary number of functions.
- **`flow`**: Combines multiple functions into a single reusable composite function (left-to-right).
- **`identity`**: Returns exactly what it receives (`a => a`).
- **`constant`**: Creates a lazy evaluation fallback (`a => () => a`). [link](https://gcanti.github.io/fp-ts/modules/function.ts.html)

### 2. Common Data Type Operations

Most container modules—like `Option` (handling nulls), `Either` (handling errors), `Task` (async), and `Array`—share identical functional operations. [link](https://gcanti.github.io/fp-ts/modules/Array.ts.html)

| Function Class       | Common Function Names           | Description                                                                             |
| -------------------- | ------------------------------- | --------------------------------------------------------------------------------------- |
| **Constructors**     | `of`, `some`, `right`, `left`   | Wraps a raw value inside a container context.                                           |
| **Mapping**          | `map`, `mapWithIndex`           | Transforms the data inside a container without altering the shape.                      |
| **Sequencing**       | `flatMap`, `chain`, `flatten`   | Maps a container to _another_ container and flattens the nested result.                 |
| **Error Handling**   | `alt`, `orElse`                 | Provides an alternative fallback container if the initial structure is empty or failed. |
| **Destructuring**    | `match`, `fold`, `getOrElse`    | Extracts the raw values safely, enforcing handling of all possible states.              |
| **Interoperability** | `fromNullable`, `fromPredicate` | Converts traditional JavaScript entities into `fp-ts` structures.                       |

### 3. Module Directory (Categorized)

You can find the exact API references for specific modules directly on the [Official fp-ts Documentation Modules Page](https://gcanti.github.io/fp-ts/modules/):

- **Data Types**: [`Option`](https://gcanti.github.io/fp-ts/modules/Option.ts.html), [`Either`](https://gcanti.github.io/fp-ts/modules/Either.ts.html), [`Task`](https://gcanti.github.io/fp-ts/modules/Task.ts.html), `TaskEither`, [`IO`](https://gcanti.github.io/fp-ts/modules/IO.ts.html), [`Reader`](https://gcanti.github.io/fp-ts/modules/Reader.ts.html).
- **Native Collections**: [`Array`](https://gcanti.github.io/fp-ts/modules/Array.ts.html), `ReadonlyArray`, `Record`, [`Set`](https://gcanti.github.io/fp-ts/modules/Set.ts.html).
- **Algebraic Structures**: `Eq` (equality tests), [`Ord`](https://gcanti.github.io/fp-ts/modules/Tree.ts.html) (sorting), `Semigroup` (concatenation). [link](https://gcanti.github.io/fp-ts/modules/)

Are you trying to solve a specific problem like **handling nulls**, **chaining API requests**, or **handling runtime exceptions**? Let me know, and I can give you a concrete example using the exact `fp-ts` functions you need.

- [link](https://gcanti.github.io/fp-ts/modules/Array.ts.html)\
  GitHub\
  Array.ts | fp-ts\
  Conversions: fromEither, fromOption. Error handling: alt, altW. Filtering: compact, filter, filterMap, partition, separate, wilt, ...
- [link](https://www.bendik.dev/posts/functional-ts-with-fp-ts/)\
  www.bendik.dev\
  Functional TypeScript with fp\
  Lots of functions in fp-ts are curried by default, as is often common in functional languages. allows operations to be performed t...
- [link](https://gcanti.github.io/fp-ts/)\
  GitHub\
  Introduction | fp-ts\
  Functions: Provides general utilities for pure function composition and constant functions. abstract algebra and category theory e...

Show all

