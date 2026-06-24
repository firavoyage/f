# all typescript builtin types

TypeScript provides several categories of built-in types, ranging from standard JavaScript primitives to unique types used exclusively for type-checking and code structure. \[[1](https://medium.com/nerdjacking/mastering-typescript-data-types-the-complete-guide-with-performance-hacks-30097eb3367a)]

### 1. Primitive Types

These map directly to the foundational data types available in JavaScript. \[[1](https://medium.com/nerdjacking/mastering-typescript-data-types-the-complete-guide-with-performance-hacks-30097eb3367a)]

- **`string`**: Textual data like `"hello"`.
- **`number`**: Floating-point numeric values, including integers, decimals, and `NaN`.
- **`bigint`**: Whole numbers of arbitrary precision, denoted with an `n` suffix (e.g., `100n`).
- **`boolean`**: True or false values.
- **`symbol`**: Unique, immutable identifiers typically used as object keys.
- **`null`**: Explicitly represents an empty or absent value.
- **`undefined`**: Variables that have been declared but not yet assigned a value. \[[1](https://www.geeksforgeeks.org/typescript/data-types-in-typescript/), [2](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [3](https://dev.to/joyontokumar/the-string-type-in-typescript-2916), [4](https://intellipaat.com/blog/javascript-data-types/), [5](https://medium.com/jspoint/typescript-working-with-types-f1829384851f)]

### 2. Special and Top/Bottom Types

These are specialized tools used to handle variable flexibility or strict constraints. \[[1](https://medium.com/nerdjacking/mastering-typescript-data-types-the-complete-guide-with-performance-hacks-30097eb3367a)]

- **`any`**: Turns off type-checking entirely, allowing a variable to act exactly like standard JavaScript.
- **`unknown`**: The type-safe counterpart to `any`; forces you to perform a type check before interacting with the value.
- **`void`**: Indicates the absence of a return value, commonly used for functions that don't return anything.
- **`never`**: Represents a value or state that should logically never occur, such as a function that throws an error or runs infinitely. \[[1](https://www.typescriptlang.org/docs/handbook/basic-types.html), [2](https://medium.com/@hrishikesh.pandey9955/all-about-types-in-typescript-c2da772b6339), [3](https://www.totaltypescript.com/concepts/any-type), [4](https://www.youtube.com/watch?v=bz0Onkw2MPo\&t=3), [5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html)]

### 3. Object and Structural Types

These represent more complex data shapes and native JavaScript constructors. \[[1](https://medium.com/nerdjacking/mastering-typescript-data-types-the-complete-guide-with-performance-hacks-30097eb3367a)]

- **`object`**: Represents any value that is not a primitive (anything except number, string, boolean, etc.).
- **`Array`** (or `type[]`): A collection of elements sharing a specific type structure.
- **`Tuple`**: An array with a fixed number of elements where each position has a specific type assigned to it.
- **Function**: Defines standard execution blocks with strongly-typed parameters and return values. \[[1](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html), [2](https://www.geeksforgeeks.org/typescript/data-types-in-typescript/), [3](https://www.freecodecamp.org/news/learn-typescript-data-types-from-zero-to-hero/), [4](https://www.youtube.com/watch?v=RHgPgdhqpUw), [5](https://data-flair.training/blogs/typescript-syntax-for-programming/)]

### 4. Code Structuring Types

These are TypeScript-specific structures that compile down to structural objects or values at runtime. \[[1](https://mimo.org/glossary/typescript/data-types), [2](https://blog.logrocket.com/exploring-typescript-5-features-smaller-simpler-faster/), [3](https://news.ycombinator.com/item?id=36637221)]

- **`enum`**: A set of named constants, enabling readable numeric or string-based code groupings. \[[1](https://www.geeksforgeeks.org/typescript/data-types-in-typescript/)]

***

### 5. Built-in Utility Types

TypeScript includes a set of global [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) to quickly transform existing object structures: \[[1](https://www.typescriptlang.org/docs/handbook/utility-types.html), [2](https://www.wisdomgeek.com/development/web-development/typescript/)]

| Utility Type \[[1](https://www.typescriptlang.org/play/typescript/type-primitives/built-in-utility-types.ts.html), [2](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [3](https://mimo.org/glossary/typescript/utility-types), [4](https://www.w3schools.com/typescript/typescript%5Futility%5Ftypes.php), [5](https://www.typescriptlang.org/docs/handbook/utility-types.html)] | Action |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Converts all properties of an object type to optional.                                                                                                                                                                                                                                                                                                                                                                             |        |
| Converts all optional properties of an object type to required.                                                                                                                                                                                                                                                                                                                                                                    |        |
| Marks all properties as immutable, blocking reassignment.                                                                                                                                                                                                                                                                                                                                                                          |        |
| Maps keys `K` to values of type `T` to build dictionaries.                                                                                                                                                                                                                                                                                                                                                                         |        |
| Creates a new type choosing only specific keys `K` from `T`.                                                                                                                                                                                                                                                                                                                                                                       |        |
| Creates a new type removing specific keys `K` from `T`.                                                                                                                                                                                                                                                                                                                                                                            |        |
| Excludes types from a union that match type `U`.                                                                                                                                                                                                                                                                                                                                                                                   |        |
| Extracts types from a union that match type `U`.                                                                                                                                                                                                                                                                                                                                                                                   |        |
| Drops `null` and `undefined` options from a type union.                                                                                                                                                                                                                                                                                                                                                                            |        |
| Extracts a function's parameters into a tuple type.                                                                                                                                                                                                                                                                                                                                                                                |        |
| Extracts the returned type of a function signature.                                                                                                                                                                                                                                                                                                                                                                                |        |
| Recursively unwraps promises to find their resolution value.                                                                                                                                                                                                                                                                                                                                                                       |        |

If you are trying to solve a specific problem, tell me **what kind of data structure** you are building or **which type error** you are encountering so I can provide a targeted solution.

- [link](https://www.typescriptlang.org/docs/handbook/utility-types.html)\
  Documentation - Utility Types - TypeScript\
  Jun 19, 2026 — Utility Types. Utility Types. TypeScript provides several utility types to facilitate common type transformations. These utilities...\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/basic-types.html)\
  Handbook - Basic Types - TypeScript\
  Jun 15, 2026 — About Number , String , Boolean , Symbol and Object. It can be tempting to think that the types Number , String , Boolean , Symbol...\
  TypeScript
- [link](https://mimo.org/glossary/typescript/data-types)\
  TypeScript Data Types: Syntax, Usage, and Examples - Mimo\
  What Are TypeScript Data Types? TypeScript data types define the kind of values a variable can hold. This system includes primitiv...\
  Mimo

Show all

## You said: all typescript builtin utility types

TypeScript provides a wide array of globally available \*\***[built-in Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)** that allow you to transform and manipulate existing types. \[[1](https://www.typescriptlang.org/docs/handbook/utility-types.html), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide)]

Here is the complete, comprehensive list categorized by their core functionality. \[[1](https://blog.logrocket.com/using-built-in-utility-types-typescript/)]

### Object Modification Types

These types manipulate the properties and modifiers (like `?` or `readonly`) of an existing object shape. \[[1](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide)]

- : Makes all properties of an object type optional.
- : Makes all optional properties of an object type mandatory.
- : Adds a `readonly` modifier to all properties, preventing reassignment.
- : Constructs an object type with keys `K` mapped to values of type `T`.
- : Creates a new type by choosing a specific set of keys `K` from object `T`.
- : Creates a new type by removing a specific set of keys `K` from object `T`. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide), [3](https://www.codecademy.com/resources/docs/typescript/utility-types), [4](https://www.scaler.com/topics/typescript/typescript-utility-types/)]

### Union Manipulation Types

These types are used to filter, isolate, or clean up specific members within a type union. \[[1](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide), [3](https://mimo.org/glossary/typescript/utility-types), [4](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [5](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-exclude)]

- : Excludes all union members from `T` that are assignable to type `U`.
- : Extracts all union members from `T` that are assignable to type `U`.
- : Removes `null` and `undefined` variants from a type union. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types)]

### Function and Class Types

These types inspect and extract information directly out of function or class constructor definitions. \[[1](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide)]

- : Extracts the argument types of a function into a tuple array.
- : Grabs the underlying return type of a function signature.
- : Extracts the parameter types of a class constructor into a tuple array.
- : Evaluates the instance type returned by a class constructor function. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types)]

### Async and Execution Context Types

These types manage asynchronous resolutions or tweak the evaluation rules of the execution context. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide)]

- : Recursively unwraps `Promise` chains to find their final resolved value type.
- : Extracts the type of the `this` parameter from a function signature.
- : Removes the explicit `this` parameter requirement from a function signature.
- : Acts as a marker type to explicitly declare the type of `this` inside an object literal. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [2](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [3](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [4](https://flow.org/en/docs/types/utilities/), [5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)]

### String Literal Manipulation Types

These types alter the casing rules of string literal values during compile-time type-checking. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [2](https://blog.webdevsimplified.com/2025-10/typescript-utility-types/)]

- : Converts a string literal type completely to uppercase.
- : Converts a string literal type completely to lowercase.
- : Converts the first character of a string literal type to uppercase.
- : Converts the first character of a string literal type to lowercase. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types)]

***

### Reference Code Examples

typescript

```
// Base definition
interface User {
  id: string;
  name: string;
  email?: string;
}

// 1. Partial & Required
type OptionalUser = Partial<User>;   // { id?: string; name?: string; email?: string; }
type StrictUser = Required<User>;     // { id: string; name: string; email: string; }

// 2. Pick & Omit
type UserContact = Pick<User, "name" | "email">; // { name: string; email?: string; }
type UserWithoutId = Omit<User, "id">;           // { name: string; email?: string; }

// 3. Union Filtering
type Status = "active" | "inactive" | "pending";
type ActiveOnly = Exclude<Status, "inactive" | "pending">; // "active"

// 4. Function Inspection
function saveUser(id: string, data: User) { return true; }
type SaveArgs = Parameters<typeof saveUser>; // [id: string, data: User]
type SaveReturn = ReturnType<typeof saveUser>; // boolean
```

Use code with caution.

If you are debugging a complex type layout, tell me **which built-in type** you are trying to implement or **paste your current error** so we can solve it.

- [link](https://www.typescriptlang.org/docs/handbook/utility-types.html)\
  Documentation - Utility Types - TypeScript\
  Jun 19, 2026 — Example. ts. declare function f1 (): { a : number; b : string }; type T0 = ReturnType <() => string>; type T0 = string. type T1 = ...\
  TypeScript
- [link](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types)\
  Utility Types | TypeScript Guide by Convex\
  Table\_title: Understanding TypeScript utility types Table\_content: | Utility Type | Description | | --- | --- | | Partial | Constr...\
  Convex
- [link](https://blog.logrocket.com/using-built-in-utility-types-typescript/)\
  Using built-in utility types in TypeScript - LogRocket Blog\
  May 29, 2023 — Exploring built-in utility type functions in TypeScript. Value transformation types. Awaited Object manipulation types. Partial Re...\
  LogRocket Blog

Show all

## You said: all typescript builtin js types

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">TypeScript natively supports all standard JavaScript types</strong></mark> and supplies ambient globally-declared type definitions (`lib.d.ts`) matching every runtime API found in modern ECMAScript standard environments. \[[1](https://basarat.gitbook.io/typescript/type-system/lib.d.ts), [2](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)]

The complete map of TypeScript's built-in definitions for native JavaScript types is categorized below.

### 1. Primitives (Lower-case)

These types directly mirror the behavior of the `typeof` operator for native JavaScript primitives. \[[1](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)]

- **`string`**: Textual data lines or template literals (e.g., `"hello"`).
- **`number`**: Floating-point values including integers, decimals, `NaN`, and `Infinity`.
- **`bigint`**: Arbitrary precision integers, marked with an `n` suffix (e.g., `100n`).
- **`boolean`**: Conditional logical operators `true` or `false`.
- **`symbol`**: Unique memory-reference identifiers initialized via `Symbol()`.
- **`null`**: An intentional absence of object identification.
- **`undefined`**: Variables initialized without any bound assignment. \[[1](https://www.typescriptlang.org/docs/handbook/basic-types.html), [2](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [3](https://www.w3schools.com/typescript/typescript%5Fsimple%5Ftypes.php), [4](https://js2ts.com/typescript-types-guide), [6](https://medium.com/@itsayu/built-in-types-in-typescript-4250af50ef4a)]

### 2. Standard Structural Objects

These match global JavaScript constructor instances and execution objects. \[[1](https://basarat.gitbook.io/typescript/type-system/lib.d.ts)]

- **`object`**: Represents any non-primitive data structure (anything not a string, number, etc.).
- (or `T[]`): Indexed arrays containing matching type records.
- **`Function`**: The base signature blueprint describing JavaScript executable function structures.
- **`Date`**: Handles native date stamps, epoch clocks, and calendar parsing.
- **`RegExp`**: Pattern matching expressions instantiated by `/regex/` blocks. \[[1](https://www.typescriptlang.org/docs/handbook/basic-types.html), [2](https://medium.com/jspoint/typescript-working-with-types-f1829384851f), [3](https://graphite.com/guides/typescript-types), [4](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects), [5](https://basarat.gitbook.io/typescript/type-system/lib.d.ts), [6](https://mimo.org/glossary/typescript/object-type)]

### 3. Collection Objects (ES6+) \[[1](https://itechcraft.com/blog/typescript-vs-javascript/)]

Built-in hash, key, and sequence arrays introduced across modern ECMAScript revisions. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)]

- : Key-value collections capable of accepting arbitrary object types as lookups.
- : Ordered arrays configured to keep unique entries.
- / : Garbage-collection safe maps/sets restricted exclusively to object keys. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)]

### 4. Advanced Asynchronous & Runtime Objects

Structural wrappers mapping out JavaScript asynchronous behaviors and memory abstractions. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)]

- : Represents asynchronous execution values pending deferred fulfillment.
- **`ArrayBuffer`** / **`DataView`**: Low-level binary memory buffers and reader layouts.
- **`Int8Array`** / **`Float64Array`** (etc.): Specialized TypedArrays parsing explicitly structured raw bytes.
- **`Error`** / **`TypeError`** / **`SyntaxError`**: Error schemas thrown during runtime failures.
- **`JSON`**: Globally exposed namespace checking static `parse()` and `stringify()` calls. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects), [2](https://www.wecreateproblems.com/interview-questions/typescript-interview-questions), [3](https://www.reddit.com/r/typescript/comments/7vwl84/does%5Fanybody%5Felse%5Fwish%5Ffor%5F81632big%5Finteger%5Ftypes/), [4](https://github.com/ericelliott/rtype)]

### 5. Global Boxed Objects (Avoid Using)

JavaScript possesses capital-letter object wrappers for primitive types, which TypeScript mirrors. **Avoid using these as type annotations** because they map to wrapper objects instead of literals. \[[1](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [2](https://www.linode.com/docs/guides/typescript-types-get-started/), [3](https://refine.dev/blog/javascript-vs-typescript/)]

- **`String`**, **`Number`**, **`Boolean`**, **`Symbol`**, **`Object`** \[[1](https://www.typescriptlang.org/docs/handbook/basic-types.html), [2](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)]

***

### Comparison Matrix: `typeof` Runtime vs. TypeScript Compilation \[[1](https://en.wikipedia.org/wiki/TypeScript), [2](https://sumeetpanchal-21.medium.com/typescript-beyond-the-basics-mastering-typeof-keyof-and-indexed-access-types-e291b307fd30)]

| JavaScript Runtime Value \[[1](https://www.simplilearn.com/tutorials/javascript-tutorial/types-in-javascript), [2](https://medium.com/@pranayrah108/understanding-primitive-data-types-in-typescript-boolean-719f2ac09674), [3](https://dev.to/barinbritva/typescript-spelling-out-tsconfig-part-1-3nak), [4](https://luigicavalieri.com/blog/typescript-intro-for-react-developers/), [5](https://www.edureka.co/blog/data-types-in-javascript/)] | JavaScript `typeof` Output | Standard TypeScript Annotation |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------ |
| `"text"`                                                                                                                                                                                                                                                                                                                                                                                                                                           | `"string"`                 | **`string`**                   |
| `42`                                                                                                                                                                                                                                                                                                                                                                                                                                               | `"number"`                 | **`number`**                   |
| `true`                                                                                                                                                                                                                                                                                                                                                                                                                                             | `"boolean"`                | **`boolean`**                  |
| `Symbol('id')`                                                                                                                                                                                                                                                                                                                                                                                                                                     | `"symbol"`                 | **`symbol`**                   |
| `() => {}`                                                                                                                                                                                                                                                                                                                                                                                                                                         | `"function"`               | **`Function`** or `() => void` |
| `[]`                                                                                                                                                                                                                                                                                                                                                                                                                                               | `"object"`                 | **`any[]`** or                 |
| `{}`                                                                                                                                                                                                                                                                                                                                                                                                                                               | `"object"`                 | **`object`** or                |
| `null`                                                                                                                                                                                                                                                                                                                                                                                                                                             | `"object"`                 | **`null`**                     |

If you are seeing an implicit typing issue, tell me **which JavaScript API** (like `fetch`, a `Map`, or a `Timeout`) you are configuring so I can provide the exact type declaration syntax.

- [link](https://www.typescriptlang.org/docs/handbook/basic-types.html)\
  Handbook - Basic Types - TypeScript\
  Jun 15, 2026 — On this page \* Boolean. \* Number. \* String. \* Array. \* Tuple. \* Enum. \* Unknown. \* Any. \* Void. \* Null and Undefined. \* Never. \* O...\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)\
  Documentation - Everyday Types - TypeScript\
  Jun 15, 2026 — JavaScript has three very commonly used primitives: string , number , and boolean . Each has a corresponding type in TypeScript. A...\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)\
  TypeScript: Documentation - Type Declarations\
  Jun 1, 2026 — Built-in Type Definitions TypeScript includes declaration files for all of the standardized built-in APIs available in JavaScript ...\
  TypeScript

Show all


# all browser types in ts

[TypeScript](https://www.typescriptlang.org/) includes built-in type definitions for web browsers through its **Document Object Model (DOM) type definitions**. These definitions represent every global object, HTML element, and browser event available in a standard client-side environment. \[[1](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html), [2](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)]

To use these types, your `tsconfig.json` must include `"DOM"` in the `lib` array. Below is a categorized breakdown of the essential browser types provided by TypeScript: \[[1](https://npmjs.com/package/@types/web), [2](https://www.typescriptlang.org/tsconfig/lib.html)]

### Global Window & Document API

These types represent the root execution context of the browser environment. \[[1](https://www.typescriptlang.org/tsconfig/lib.html), [2](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)]

- `Window`: The global execution context, giving access to properties like `window.localStorage` and `window.location`.
- `Document`: The web page loaded in the browser, used for querying elements (`document.getElementById`).
- `Navigator`: State and identity information about the browser agent (`navigator.userAgent`).
- `History`: The browser session history web API.
- `Location`: The current URL or location of the object it is linked to. \[[1](https://medium.com/design-bootcamp/understanding-types-globals-interfaces-constants-and-props-in-typescript-b91490a024a8), [2](https://html.spec.whatwg.org/multipage/system-state.html), [3](https://shravanmeena.medium.com/mastering-the-browser-object-model-essential-objects-and-methods-for-web-development-47cb729ae6dc), [4](https://blog.carlosrojas.dev/exploring-the-browser-object-model-bom-b7f158831738)]

### HTML Elements (DOM Nodes)

TypeScript matches every HTML tag to a specific element type. They all inherit from a generic base element. \[[1](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)]

- `Element`: The most general base class from which all element objects in a `Document` inherit.
- `HTMLElement`: The base type for all standard HTML elements.
- `HTMLInputElement`: Specifically used for fields, providing type-safe access to `.value` or `.checked`.
- `HTMLButtonElement`: Specifically for elements.
- `HTMLDivElement`: Specifically for container tags.
- `HTMLCanvasElement`: Specifically for elements, allowing access to the rendering context (`.getContext('2d')`).
- `HTMLImageElement`: Specifically for tags, featuring properties like `.src` and `.alt`. \[[1](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html), [2](https://joyofcode.xyz/typescript-fundamentals), [3](https://betterstack.com/community/guides/scaling-nodejs/type-assertions-casting/), [4](https://dev.to/wisdombits/working-with-html-elements-in-typescript-a-complete-guide13-1b3k), [5](https://www.telerik.com/blogs/getting-started-typescript-react)]

### Browser Events

These types ensure type safety when dealing with user interactions and event listeners. \[[1](https://graphite.com/guides/typescript-typing)]

- `Event`: A generic event that takes place in the DOM.
- `UIEvent`: Simple user interface events.
- `MouseEvent`: Triggered by physical pointing devices (e.g., `click`, `dblclick`, `mouseover`).
- `KeyboardEvent`: Describes a user interaction with the keyboard (`keydown`, `keyup`).
- `TouchEvent`: Sent when the state of touches on a touch-sensitive surface changes.
- `SubmitEvent`: Fired when a is submitted.
- `DragEvent`: Represents a drag-and-drop interaction. \[[1](https://www.reddit.com/r/typescript/comments/aaw6tp/do%5Fyou%5Fever%5Fthink%5Fbrowsers%5Fwill%5Fdirectly%5Fsupport/), [2](https://www.reddit.com/r/javascript/comments/1ozcnl3/typescript%5Fhas%5Fnative%5Fsupport%5Fin%5Fall%5Fmajor/), [3](https://www.w3schools.com/jsref/jsref%5Fevent.asp)]

### Modern Web & Network APIs

These represent async network actions and data streaming APIs built directly into modern browsers.

- `Fetch`: Not a type itself, but returns a .
- `Request`: Represents a resource request used in the Fetch API.
- `Response`: Represents the response to a network request.
- `Headers`: Represents HTTP request/response headers.
- `WebSocket`: Manages a persistent, two-way connection to a server.
- `Worker`: Represents a background task that can be easily created and can script execution in parallel. \[[1](https://www.reddit.com/r/typescript/comments/aaw6tp/do%5Fyou%5Fever%5Fthink%5Fbrowsers%5Fwill%5Fdirectly%5Fsupport/), [2](https://www.reddit.com/r/javascript/comments/1ozcnl3/typescript%5Fhas%5Fnative%5Fsupport%5Fin%5Fall%5Fmajor/)]

### Storage & State APIs

Types utilized to interact with browser-side databases and data persistence layers.

- `Storage`: Used to type `localStorage` and `sessionStorage`.
- `IDBDatabase`: Represents a connection to an IndexedDB database.
- `CookieStore`: Modern asynchronous API for managing browser cookies. \[[1](https://dev.to/muszynov/typescript-wrapper-class-for-browser-storage-55pd), [2](https://www.reddit.com/r/typescript/comments/aaw6tp/do%5Fyou%5Fever%5Fthink%5Fbrowsers%5Fwill%5Fdirectly%5Fsupport/), [3](https://privacytests.org/), [4](https://dev.to/arunish/all-methods-of-persistent-browser-storage-5ae7)]

### Summary Example

Here is how you would use these browser types in a regular TypeScript application:

typescript

```
// Explicitly typing a button element
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

// Typing a browser event handler
submitBtn.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();

  // Accessing a specific input value safely
  const inputEl = document.querySelector("#username") as HTMLInputElement;
  const username: string = inputEl.value;

  console.log(`Submitting form for ${username} at ${window.location.href}`);
});
```

Use code with caution.

If you are looking for specific types, let me know **which browser API** (like Web Audio, WebRTC, or Service Workers) you are working with, or if you need help configuring your **tsconfig.json file** to read these types correctly.

- [link](https://npmjs.com/package/@types/web)\
  types/web - NPM\
  May 2, 2026 — @types/web - Types for the DOM and most web-related APIs. This module contains the DOM types for the majority of the web APIs used...\
  NPM
- [link](https://www.typescriptlang.org/tsconfig/lib.html)\
  TypeScript: TSConfig Option: lib\
  High Level libraries. ... Additional APIs available in ES2015 (also known as ES6) - array. find , Promise , Proxy , Symbol , Map ,\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)\
  DOM Manipulation - TypeScript: Documentation\
  Jun 3, 2026 — An exploration into the HTMLElement type In the 20+ years since its standardization, JavaScript has come a very long way. While in...\
  TypeScript

Show all


# all nodejs types in ts

In TypeScript, **Node.js-specific types** are provided by the official ecosystem package [@types/node](https://www.npmjs.com/package/@types/node). Because Node.js operates on standard JavaScript primitives (like `string`, `number`, `boolean`), its dedicated type library focuses primarily on globals, runtime environments, and core built-in modules. \[[1](https://www.npmjs.com/package/@types/node), [2](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [3](https://beta.docs.nodejs.org/typescript.html), [4](https://bobaekang.com/blog/minimal-typescript-project-setup-for-curious-minds/), [5](https://www.linode.com/docs/guides/typescript-types-get-started/)]

The main Node.js type categories available in TypeScript include the following groupings:

### 1. Global Objects & Primitive Classes

These types are available globally across any Node.js application without manual imports: \[[1](https://www.reddit.com/r/typescript/comments/rirjiw/when%5Fdo%5Fyou%5Fuse%5Fdts%5Ffiles%5Fand%5Fwhen%5Fdo%5Fyou%5Fuse%5Fts/), [2](https://www.educative.io/blog/what-is-nodejs)]

- `Buffer`: Used to handle raw binary data streams.
- `Process`: Type for the global `process` object, containing runtime environment data (`process.env`, `process.argv`).
- `NodeJS.Timeout`: Returned by `setTimeout()` and used to clear active timers.
- `NodeJS.Immediate`: Returned by `setImmediate()`.
- `NodeJS.ReadableStream` / `NodeJS.WritableStream`: Basic interfaces for stream manipulation.
- `Global`: Represents the global execution context (similar to `window` in web browsers). \[[1](https://dev.to/muthuraja%5Fr/common-built-in-apis-in-nodejs-3ep), [2](https://www.totaltypescript.com/books/total-typescript-essentials/modules-scripts-and-declaration-files), [3](https://nodejs.org/api/worker%5Fthreads.html), [4](https://github.com/exceljs/exceljs/issues/1015)]

### 2. Events Module (`node:events`)

- `EventEmitter`: The base class type used for managing event-driven architecture, including methods like `.on()`, `.once()`, and `.emit()`. \[[1](https://nodejs.org/learn/typescript/introduction), [2](https://zerotomastery.io/cheatsheets/node-js-cheat-sheet/)]

### 3. File System Module (`node:fs`) \[[1](https://www.w3schools.com/nodejs/nodejs%5Ffilesystem.asp), [2](https://wanago.io/2019/02/11/node-js-typescript-modules-file-system/)]

- `fs.Stats`: Returned by statistical file queries, containing metadata like `size`, `birthtime`, and file type checks (`isFile()`).
- `fs.PathLike`: A union type (`string | Buffer | URL`) accepting any valid file system path representation.
- `fs.ReadStream` / `fs.WriteStream`: Specialized file system stream implementations. \[[1](https://beta.docs.nodejs.org/typescript.html)]

### 4. Networking Modules (`node:http`, `node:net`, `node:https`) \[[1](https://medium.com/yavar/what-is-the-node-module-in-node-js-19ef41820af8), [2](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44777)]

- `IncomingMessage`: The class type for handling incoming HTTP server requests or client responses.
- `ServerResponse`: The class type used to formulate and send back HTTP responses.
- `Socket`: Represents the underlying TCP net socket layer.
- `Server`: The base type representing TCP or HTTP network servers. \[[1](https://nodejs.org/api/http.html), [2](https://nodevibe.substack.com/p/tcp-and-nodejs-server-internals-a)]

### 5. Asynchronous & Multithreading Modules

- `Worker`: Type for spinning up isolated threads via the `node:worker_threads` module.
- `MessagePort`: Type representing communication channels between distinct execution threads.
- `AsyncLocalStorage`: Used for tracing store data asynchronously across execution call chains. \[[1](https://nodejs.org/api/worker%5Fthreads.html)]

### 6. Utility and Paths Modules

- `ParsedPath`: Returned by `path.parse()`, structuring paths into `root`, `dir`, `base`, `ext`, and `name`.
- `URL`: Extends the standard web API URL structure specifically optimized for Node environments.

***

### Installing Node.js Types in a Project

To activate these type definitions in your TypeScript codebase, install the development dependency from npm: \[[1](https://www.npmjs.com/package/@types/node), [2](https://stackoverflow.com/questions/70283649/how-do-i-use-typescript-typing-information-from-a-node-js-package)]

bash

```
npm install --save-dev @types/node
```

Use code with caution.

Ensure your `tsconfig.json` has its `moduleResolution` configured properly for Node environments: \[[1](https://www.typescriptlang.org/docs/handbook/modules/reference.html), [2](https://mimo.org/glossary/typescript/module)]

json

```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true
  }
}
```

Use code with caution.

Would you like a code example showing **how to implement a specific Node.js module** (such as `fs` or `http`) using these TypeScript types?

- [link](https://www.npmjs.com/package/@types/node)\
  @types/node - npm\
  Jun 19, 2026 — Collaborators. types. Analyze security with Socket Check bundle size View package health Explore dependencies. Report malware. Foo...\
  NPM
- [link](https://www.typescriptlang.org/docs/handbook/modules/reference.html)\
  TypeScript: Documentation - Modules - Reference\
  Apr 17, 2021 — Table\_title: node16 , node18 , node20 , nodenext Table\_content: | | target | moduleResolution | | --- | --- | --- | | node16 | es2...\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)\
  TypeScript: Documentation - Everyday Types\
  Jun 21, 2026 — The primitives: string , number , and boolean JavaScript has three very commonly used primitives: string , number , and boolean . ...\
  TypeScript

Show all