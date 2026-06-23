# js map or object

Use a JavaScript **`Object`** for structured records with known, static keys, and use a **`Map`** for dynamic collections requiring frequent updates or non-string keys. \[[1](https://medium.com/@saurav%5Ftb%5Fpandey/javascript-map-vs-objects-when-to-use-each-and-why-it-matters-2bf175adcd27)]

### Feature Overview

| Feature \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map), [2](https://medium.com/@yuvaraj.io/lesson-74-understanding-prototypes-and-class-inheritance-in-javascript-1a9143cea811)] | `Map`                                      | `Object`                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------- |
| **Key Types**                                                                                                                                                                                                                   | Any value (Objects, Functions, Primitives) | Strings or Symbols only                              |
| **Element Order**                                                                                                                                                                                                               | Strictly preserves insertion order         | Not reliably ordered (complex engine heuristics)     |
| **Size Retrieval**                                                                                                                                                                                                              | Built-in `.size` property (O(1))           | Manual computation via `Object.keys().length` (O(N)) |
| **Iteration**                                                                                                                                                                                                                   | Directly iterable (via `for...of`)         | Requires helper methods or `for...in` loops          |
| **Inheritance**                                                                                                                                                                                                                 | Clean; free from accidental key collisions | Inherits prototype properties (e.g., `toString`)     |
| **JSON Support**                                                                                                                                                                                                                | Requires custom serialization helpers      | Native support (`JSON.stringify` / `JSON.parse`)     |

### When to Choose a Plain Object

- **Static records**: Use when property names are known at development time (e.g., a `user` configuration profile containing `{ id, name, email }`).
- **JSON interaction**: Use when directly sending data to or receiving data from external APIs via JSON.
- **Domain models**: Use when you need to bind specific logic, methods, or prototype behaviors to a structural data instance. \[[1](https://dev.to/adamgolan/why-you-should-prefer-map-over-object-in-javascript-327e), [2](https://www.syncfusion.com/blogs/post/javascript-map-vs-object), [3](https://medium.com/@saurav%5Ftb%5Fpandey/javascript-map-vs-objects-when-to-use-each-and-why-it-matters-2bf175adcd27)]

### When to Choose a Map

- **Dynamic data sets**: Use when keys are continuously added, updated, or removed at runtime.
- **Complex key maps**: Use when you need to pair unique references, such as mapping a DOM element to its specific state configuration.
- **Size dependency**: Use when your codebase relies on continuously checking the number of active entries.
- **Prototype safety**: Use when storing untrusted user input as keys to prevent prototype pollution security risks. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map), [2](https://medium.com/@saurav%5Ftb%5Fpandey/javascript-map-vs-objects-when-to-use-each-and-why-it-matters-2bf175adcd27)]

To help tailor this advice, are you prioritizing **maximum performance**, dealing with a **specific data type for keys**, or working with **JSON serialization**?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)\
  Map - JavaScript - MDN Web Docs - Mozilla\
  Feb 16, 2026 — Description. Map objects are collections of key-value pairs. ... Table\_title: Objects vs. Maps Table\_content: | | Map | Object | |\
  MDN Web Docs
- [link](https://medium.com/@saurav%5Ftb%5Fpandey/javascript-map-vs-objects-when-to-use-each-and-why-it-matters-2bf175adcd27)\
  JavaScript Map vs Objects: When to Use Each and Why It Matters\
  Dec 6, 2025 — Introduction: Beyond the Comfort Zone of Plain Objects. If you're like most JavaScript developers, plain objects ( {} ) is your go...\
  Medium·Saurav Pandey
- [link](https://www.syncfusion.com/blogs/post/javascript-map-vs-object)\
  JavaScript Map vs. Object | Syncfusion Blogs\
  Dec 19, 2024 — Object is ideal for cases where we need a simple structure to hold data and the keys are either strings or symbols. Object is unqu...\
  Syncfusion

Show all

# you can items: {\[id]: {foo, bar}}. you could also foo\[], bar\[]. which should i choose.

Choose the first option (`{[id]: {foo, bar}}`) if you need fast lookups by ID. Choose the second option (`foo[], bar[]`) if you prioritize minimal memory usage or are passing data to specific processing libraries.

Here is how to choose based on your specific engineering needs:

### Choose `{[id]: {foo, bar}}` (Object Dictionary) if:

- **Fast Lookups:** You need to find items instantly using an ID (O(1) time complexity).
- **Data Integrity:** Your `foo` and `bar` properties are tightly coupled and belong together.
- **Easy Updates:** You frequently add, modify, or delete single items by their unique key. \[[1](https://codingcops.com/csharp-lists-dictionaries-guide/), [2](https://pynative.com/intermediate-python-exercises/), [3](https://blog.stackademic.com/mastering-collections-in-c-21f855f5f7f3)]

### Choose `foo[], bar[]` (Parallel Arrays) if:

- **Memory Efficiency:** You have millions of items and need to avoid object overhead.
- **Math/Science Data:** You are feeding data into libraries like NumPy or WebGL.
- **Column Operations:** You only need to scan `foo` values without loading `bar` values.
- **Cache Locality:** You require high-performance looping through a single property.

To help narrow this down, could you tell me **how many items** you are processing and **what programming language** you are using?

- [link](https://codingcops.com/csharp-lists-dictionaries-guide/)\
  C# Lists & Dictionaries: Complete Beginner’s Guide\
  Aug 25, 2025 — Fast Lookup: O(1) time complexity for retrieving elements.\
  \
  \
  CodingCops
- [link](https://pynative.com/intermediate-python-exercises/)\
  65+ Intermediate Python Exercises With Solutions\
  Jan 7, 2026 — Explanation of Solution: students\[s\_id] : Using the ID as a key allows for O(1) (instant) lookups, which is much faster than searc...\
  \
  PYnative
- [link](https://blog.stackademic.com/mastering-collections-in-c-21f855f5f7f3)\
  Mastering Collections in C#. Understanding IList, ISet, IDictionary… | by Adrià Sala\
  Nov 12, 2024 — Use Cases Each element has a unique identifier (key). You need to quickly look up, add, or remove elements by key. A one-to-one re...\
  \
  \
  Stackademic

## You said: like, you have a list of bindings. each id has a shortcut and an action.

### **Choose** `{[id]: {shortcut, action}}` (Object Dictionary)

This is the best choice for keybindings.

### Why this fits keybindings:

- **Instant Activation:** When a user presses a key, you can find the action instantly by its ID.
- **Easy Rebinding:** Changing a shortcut only requires updating one clean object.
- **No Sync Risks:** Parallel arrays can get out of order if you delete a binding. \[[1](https://learn.microsoft.com/en-us/windows/terminal/customize-settings/actions)]

### Recommended Data Structure

javascript

```
const keyBindings = {
  "save_file": { shortcut: "Ctrl+S", action: "save" },
  "open_file": { shortcut: "Ctrl+O", action: "open" }
};
```

Use code with caution.

To help write the exact code, are you building this for a **web app** or a **desktop app**, and do you need to support **custom user rebindings**?

- [link](https://learn.microsoft.com/en-us/windows/terminal/customize-settings/actions)\
  Windows Terminal Actions\
  Oct 29, 2024 — This is the ID of the action to be invoked when this keybinding is pressed.\
  \
  \
  Microsoft Learn

# can i foo\[key] in js map

No, you cannot use square bracket notation like `foo[key]` to access or set values in a JavaScript `Map` instance. \[[1](https://javascript.info/map-set), [2](https://justinfagnani.com/2024/11/09/composite-map-keys-in-javascript-with-bitsets/)]

While writing `foo[key] = value` will not throw an immediate error, it treats the `Map` as a plain JavaScript `Object`. This bypasses the built-in `Map` data structure completely, meaning your data won't be stored inside the map's collection and features like `.size` or `.has()` will not work properly. \[[1](https://javascript.info/map-set)]

### Correct `Map` Methods

To interact with a JavaScript `Map`, you must use its dedicated prototype methods: \[[1](https://javascript.info/map-set), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map)]

- **Set a value**: Use [`foo.set(key, value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/set).
- **Get a value**: Use [`foo.get(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/get).
- **Check a key**: Use [`foo.has(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/has).
- **Delete a key**: Use `foo.delete(key)`. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/get), [2](https://coreui.io/answers/how-to-add-to-a-map-in-javascript/), [3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/has), [4](https://www.freecodecamp.org/news/javascript-standard-objects-maps/), [5](https://iqratechnology.com/academy/javascript-training/js-map-set/)]

### Example Comparison

javascript

```
const foo = new Map();

// ❌ WRONG WAY (Treats the Map like a plain object)
foo['color'] = 'blue';
console.log(foo.get('color')); // undefined
console.log(foo.size);         // 0

//  CORRECT WAY (Uses Map functionality)
foo.set('color', 'blue');
console.log(foo.get('color')); // 'blue'
console.log(foo.size);         // 1
```

Use code with caution.

If you prefer using `foo[key]` syntax natively, you should use a plain JavaScript `Object` (`const foo = {};`) instead of a `Map`. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed%5Fcollections), [2](https://stackoverflow.com/questions/45819825/create-an-object-with-same-key-and-value-without-duplicating-the-data)]

Are you **refactoring existing object code** to a `Map`, or are you looking to use **non-string keys** (like objects or arrays) for your data? \[[1](https://github.com/nodeca/js-yaml/issues/169), [2](https://www.educative.io/blog/what-is-javascript-map)]

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/get)\
  Map.prototype.get() - JavaScript - MDN Web Docs\
  Sep 22, 2025 — prototype. get() ... This feature is well established and works across many devices and browser versions. It's been available acro...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Map/has)\
  Map.prototype.has() - JavaScript - MDN Web Docs\
  Oct 28, 2025 — Return value Returns true if an entry with the specified key exists in the Map object; otherwise false .\
  MDN Web Docs
- [link](https://www.freecodecamp.org/news/javascript-standard-objects-maps/)\
  JavaScript Standard Objects: Maps - freeCodeCamp\
  Feb 1, 2020 — Example. const myMap = new Map(); myMap. set('foo',1); myMap. set('bar',2); myMap. set('baz',3); myMap. size(); // 3 myMap.has('fo...\
  freeCodeCamp

Show all

## You said: why doesnt ts err

TypeScript does not error on `foo[key]` because a JavaScript `Map` is internally a standard JavaScript **object instance**, and TypeScript's structural type system allows dynamic property access via string indices by default depending on your configuration. \[[1](https://www.totaltypescript.com/tips/make-accessing-objects-safer-by-enabling-nouncheckedindexedaccess-in-tsconfig), [2](https://medium.com/@jradzik4/5-tsconfig-json-settings-that-will-make-your-build-process-2x-stricter-and-better-fadaf0109f88)]

### 1. The Prototypal Inheritance

In JavaScript, a `Map` is an instance of an object (`foo instanceof Object` is `true`). Because of this inheritance, TypeScript permits adding arbitrary properties directly to the object wrapper, even if they do not belong to the internal `Map` data collection. \[[1](https://zenn.dev/mizchi/articles/typescript-type-value-validation?locale=en)]

### 2. Standard Index Signatures

Unless strict compiler flags are enabled, TypeScript allows lookups on objects using string or symbol keys. It treats the bracket notation as an intentional assignment of an **expandable object property** rather than a `Map` entry mutation.

### 3. How to Make TypeScript Error

You can force TypeScript to catch this mistake by updating your configuration. Enabling stricter compiler rules changes how index signatures are evaluated. \[[1](https://www.totaltypescript.com/books/total-typescript-essentials/objects)]

- **Enable `noImplicitAny`**: This forces a compiler error if you use a key type that isn't explicitly defined on the `Map` instance interface.
- **Enable `noPropertyAccessFromIndexSignature`**: This explicitly blocks accessing arbitrary properties using dot or bracket notation unless they are defined in the type. \[[1](https://medium.com/@wwprasannamadusanka/embrace-strictly-typing-into-typescript-792517472b81), [2](https://medium.com/@bill%5F62246/2025-angular-strict-cheatsheet-2c1a5cc1fa53), [3](https://blog.webdevsimplified.com/2026-04/advanced-tsconfig-settings/), [4](https://www.lucaspaganini.com/academy/20-typescript-compiler-options-for-your-tsconfig-json), [5](https://medium.com/@jradzik4/5-tsconfig-json-settings-that-will-make-your-build-process-2x-stricter-and-better-fadaf0109f88)]

Would you like help updating your **`tsconfig.json`** file, or are you trying to debug a specific **type definition** in your code?

- [link](https://www.totaltypescript.com/tips/make-accessing-objects-safer-by-enabling-nouncheckedindexedaccess-in-tsconfig)\
  Make accessing objects safer by enabling 'noUncheckedIndexedAccess' in tsconfig\
  TypeScript will stop erroring since TypeScript is smart enough to know now that myObj. foo has an array so you don't need to do an...\
  \
  \
  Total TypeScript
- [link](https://medium.com/@jradzik4/5-tsconfig-json-settings-that-will-make-your-build-process-2x-stricter-and-better-fadaf0109f88)\
  5 tsconfig.json Settings That Will Make Your Build Process 2x Stricter (and Better)\
  Feb 25, 2026 — TypeScript allows you to define “dictionaries” using index signatures, like Record . By default, you can access these dynamic prop...\
  \
  \
  Medium
- [link](https://zenn.dev/mizchi/articles/typescript-type-value-validation?locale=en)\
  Types, Values, and Validation in TypeScript\
  Jun 11, 2024 — instanceof is also a built-in JavaScript feature; it returns true if a value was instantiated from a class via new (strictly speak...\
  \
  \
  Zenn

Show all

## You said: well, ts errs when i get key in a has if block

TypeScript throws an error here because **`map.has(key)` does not act as a type guard**. \[[1](https://stackoverflow.com/questions/76804861/why-map-has-doesnt-act-as-a-type-guard)]

When you run `map.get(key)`, TypeScript strictly evaluates its return type based on the Map's type definition, which is always `Value | undefined`. It cannot see the logical connection between the `.has()` boolean check and the subsequent `.get()` invocation. \[[1](https://www.totaltypescript.com/workshops/typescript-pro-essentials/unions-and-narrowing/gotchas-when-narrowing-a-map-in-typescript/solution), [2](https://github.com/microsoft/TypeScript/issues/54930), [3](https://www.youtube.com/watch?v=i21l5MSZ3wQ), [4](https://www.reddit.com/r/typescript/comments/1i35vkq/i%5Fwas%5Fsolving%5Fa%5Fquestion%5Fon%5Fleetcode%5Fand/), [5](https://www.omarileon.me/blog/typescript-non-null-assertion)]

***

### Why TypeScript Struggles with `.has()`

1. **It's Just a Boolean:** The `map.has()` method is typed to return a simple `boolean`. It does not use a **type predicate** (like `arg is Type`) to tell the compiler that the state of the Map has changed. \[[1](https://www.totaltypescript.com/workshops/typescript-pro-essentials/unions-and-narrowing/gotchas-when-narrowing-a-map-in-typescript/solution), [2](https://www.youtube.com/watch?v=i21l5MSZ3wQ), [3](https://dev.to/lingodotdev/beyond-the-basics-21-typescript-features-you-might-not-know-about-1dbn)]
2. **Side Effects & Temporal Safety:** TypeScript cannot guarantee that another piece of code didn't run between your `has` check and your `get` call to delete that key. \[[1](https://stackoverflow.com/questions/76804861/why-map-has-doesnt-act-as-a-type-guard)]
3. **No "Tracked" States for Maps:** TypeScript is excellent at narrowing plain object properties (`if ('key' in obj)`), but it cannot natively track mutable internal state changes on class instances like `Map` or `Set`. \[[1](https://www.totaltypescript.com/workshops/typescript-pro-essentials/unions-and-narrowing/gotchas-when-narrowing-a-map-in-typescript/solution), [2](https://mmiller42.medium.com/js-breaking-the-rules-runtime-type-guards-25a2cd7a1faf)]

***

### The Cleanest Fixes

Instead of doing a `has` check followed by a `get` check, use one of these standard patterns: \[[1](https://stackoverflow.com/questions/76804861/why-map-has-doesnt-act-as-a-type-guard), [2](https://www.youtube.com/watch?v=i21l5MSZ3wQ)]

### 1. Fetch First, Then Validate (Recommended)

Extract the value first, then use a standard truthiness check. This triggers TypeScript's native type narrowing perfectly. \[[1](https://www.totaltypescript.com/workshops/typescript-pro-essentials/unions-and-narrowing/gotchas-when-narrowing-a-map-in-typescript/solution), [2](https://oneuptime.com/blog/post/2026-01-24-typescript-type-narrowing/view), [3](https://mimo.org/glossary/typescript/type-narrowing), [4](https://abeer.hashnode.dev/simplifying-type-narrowing-and-guards-in-typescript)]

typescript

```
const foo = new Map<string, string>();

// Fetch the value into a variable
const value = foo.get('color');

if (value !== undefined) {
  // TypeScript safely narrows 'value' to 'string' here! ✅
  console.log(value.toUpperCase());
}
```

Use code with caution.

### 2. Use Optional Chaining \[[1](https://medium.com/inside-rimeto/optional-chaining-in-typescript-622c3121f99b)]

If you are trying to access a property on the retrieved value, bypass the `if` block entirely with a safe optional chain: \[[1](https://stackoverflow.com/questions/76804861/why-map-has-doesnt-act-as-a-type-guard), [2](https://oneuptime.com/blog/post/2026-01-24-typescript-type-narrowing/view)]

typescript

```
// If the key doesn't exist, it safely evaluates to undefined without crashing
const length = foo.get('color')?.length;
```

Use code with caution.

### 3. The Non-Null Assertion Operator (`!`) \[[1](https://medium.com/@ohansemmanuel/in-typescript-what-is-the-exclamation-mark-bang-operator-6bf41ab4f97e)]

If you absolute _must_ keep your `has` block structure and you are 100% certain the value exists, append the `!` operator to tell the compiler to shut off the warning: \[[1](https://stackoverflow.com/questions/73467278/ts-type-guard-for-es-map-if-map-haskey-map-getkey-is-possibly-undefine), [2](https://www.youtube.com/watch?v=vk18eFGpdOw), [3](https://oneuptime.com/blog/post/2026-01-24-typescript-type-narrowing/view), [4](https://moonsat.medium.com/stop-using-typescripts-exclamation-mark-d0b1281c8e3d), [5](https://medium.com/@kumar.suchit9/how-to-use-the-non-null-assertion-operator-in-typescript-840f9b63d3b9)]

typescript

```
if (foo.has('color')) {
  // The ! tells TS: "Trust me, this is not undefined"
  const value = foo.get('color')!;
}
```

Use code with caution.

Do you prefer using the **fetch-first variable assignment**, or would you like to see how to write a **custom Type Guard wrapper** for your Map to make `.has()` work the way you want? \[[1](https://www.youtube.com/watch?v=i21l5MSZ3wQ)]

- [link](https://stackoverflow.com/questions/76804861/why-map-has-doesnt-act-as-a-type-guard)\
  Why \`map.has()\` doesn't act as a type guard\
  Jul 31, 2023 — This means that it can't affect subsequent calls to \`map.get(x)\`. There is an open feature request at microsoft/TypeScript#13086 t...\
  Stack Overflow
- [link](https://www.totaltypescript.com/workshops/typescript-pro-essentials/unions-and-narrowing/gotchas-when-narrowing-a-map-in-typescript/solution)\
  Correctly Narrowing a Map in TypeScript\
  Transcript. 00:00 Okay, the reason this doesn't work is because TypeScript doesn't understand the relationship between .has and . ...\
  Total TypeScript
- [link](https://oneuptime.com/blog/post/2026-01-24-typescript-type-narrowing/view)\
  How to Handle Type Narrowing in TypeScript - OneUptime\
  Jan 24, 2026 — Truthiness Narrowing. Filtering Out Null and Undefined. Truthiness checks narrow out falsy values: TypeScript Copy. function proce...\
  OneUptime

Show all

## You said: remove this check

The cleanest way to remove the `.has()` check is to <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use the <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Fetch First</strong> pattern</mark>. You extract the value immediately and use a standard `if` statement to narrow the type.

### Refactored Code Template

typescript

```
// ❌ BEFORE
if (map.has(key)) {
  const val = map.get(key); // TypeScript errors here
  val.doSomething();
}

//  AFTER (No .has() check, no TypeScript errors)
const val = map.get(key);

if (val !== undefined) {
  val.doSomething(); // TypeScript safely narrows the type here ✅
}
```

Use code with caution.

### Why this is better

- **Performance**: It performs **one lookup** on your `Map` instead of two.
- **Safety**: TypeScript natively understands that `val` cannot be `undefined` inside the `if` block.

Would you like help rewriting a specific **multi-line code snippet**, or are you ready to implement this across your file?

## You said: remove ts check

If you want to keep your original code structure exactly as it is but silence the TypeScript error compiler-wide or line-by-line, you have a few direct options:

### Option 1: Disable it on that exact line (Recommended) \[[1](https://medium.com/render-beyond/the-real-reason-typescript-throws-typescript-eslint-no-explicit-any-and-how-to-solve-it-0db310334a93), [2](https://typescript-eslint.io/blog/avoiding-anys/)]

Add a comment right above the `.get()` call to mute the compiler warning for that single line only.

typescript

```
if (map.has(key)) {
  // @ts-ignore
  const val = map.get(key); // Error disappears
}
```

Use code with caution.

_Alternative:_ Use `// @ts-expect-error` if you prefer an explicit notice. \[[1](https://stackoverflow.com/questions/68243059/nofallthroughcasesinswitch-explicitly-allow-fall-through), [2](https://typescript-eslint.io/blog/avoiding-anys/)]

### Option 2: Turn off strict null checking globally

If you want to disable this error everywhere in your project, open your **`tsconfig.json`** file and set `strictNullChecks` to `false`. \[[1](https://www.geeksforgeeks.org/typescript/how-to-enforce-strict-null-checks-in-typescript/)]

json

```
{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

Use code with caution.

_Note: This means TypeScript will no longer check for `undefined` or `null` errors anywhere in your codebase._ \[[1](https://www.rainerhahnekamp.com/en/type-safe-typescript-with-type-narrowing/)]

### Option 3: Force the return type using a Type Assertion

You can override TypeScript's type inference on the map variable itself by casting it to an object that cannot return `undefined`.

typescript

```
// Assumes the value is ALWAYS returned as the type, bypassing the undefined check
const val = (map.get(key) as YourValueType);
```

Use code with caution.

Which approach works best for your project: **line-by-line silencing** or changing the **global project configuration**? \[[1](https://medium.com/render-beyond/the-real-reason-typescript-throws-typescript-eslint-no-explicit-any-and-how-to-solve-it-0db310334a93)]

- [link](https://medium.com/render-beyond/the-real-reason-typescript-throws-typescript-eslint-no-explicit-any-and-how-to-solve-it-0db310334a93)\
  The Real Reason TypeScript Throws @typescript-eslint/no-explicit-any And How to Solve It\
  Aug 13, 2025 — All the Ways to Fix It: 1. Best Fix: Replace any With a Specific Type ✅ (Recommended) 2. Use unknown for Safer “Anything” 3. Use G...\
  \
  \
  Medium
- [link](https://typescript-eslint.io/blog/avoiding-anys/)\
  Avoiding \`any\`s with Linting and TypeScript\
  Jan 21, 2025 — Those inline comment directives cause TypeScript to ignore type errors on a line. Disabling TypeScript on a per-line basis can som...\
  \
  typescript-eslint
- [link](https://stackoverflow.com/questions/68243059/nofallthroughcasesinswitch-explicitly-allow-fall-through)\
  typescript - noFallthroughCasesInSwitch - explicitly allow fall through\
  Jul 4, 2021 — 2 Answers 2 1 - Use @ts-ignore to suppress the error As you did, I would always include a comment being explicit about it as well,\
  \
  Stack Overflow

Show all

## You said: impacts of "strictNullChecks": false

Setting `"strictNullChecks": false` turns off TypeScript's ability to track `null` and `undefined`. While it silences your `Map` warning, it significantly lowers the type safety of your entire project.

Here is exactly what changes when you disable it:

### 1. Increased Risk of Runtime Crashes

TypeScript will no longer prevent you from calling methods on values that might be missing. This opens the door to the most common JavaScript errors at runtime:

- `TypeError: Cannot read properties of undefined (reading '...')` \[2]
- `TypeError: Cannot read properties of null` \[2]

### 2. Loss of Explicit Intent

With strict checks on, you are forced to handle the possibility of empty data explicitly. When turned off, the compiler assumes every variable contains a valid value, even if a database query, API call, or map lookup returns nothing.

### 3. Masked Bugs During Refactoring

If you change a function or API to return `null` instead of a value, TypeScript will **not** warn you about the dozens of places in your codebase that are unprepared to handle that `null`.

### 4. Reduced IDE Autocomplete Reliability

Your code editor (like VS Code) will assume everything is always present. You will lose helpful tooltips that warn you when a property might be optional, making your auto-complete suggestions less accurate.

***

### Alternative: Keep it on, but use the Non-Null Assertion

If you only want to bypass the check for your `Map` blocks without compromising your entire app, keep `strictNullChecks` enabled and use the `!` operator:

typescript

```
if (map.has(key)) {
  const val = map.get(key)!; // The '!' tells TS to assume it's not undefined
  val.doSomething();
}
```

Use code with caution.

Are you working on a **large legacy codebase** where enabling strict mode is too difficult right now, or is this a **new project** where you want to maintain high safety standards?

## You said: examples of what "strictNullChecks" prevents

Here are concrete examples of common runtime bugs that `"strictNullChecks": true` prevents by forcing you to fix them at compile time.

### 1. The "Cannot read properties of undefined" Crash \[[1](https://moonsat.medium.com/stop-using-typescripts-exclamation-mark-d0b1281c8e3d), [2](https://medium.com/@eranshabi/how-typescripts-strict-mode-actually-fixes-typescript-736ba8108c85)]

This is the most common error in JavaScript. It happens when you try to access a property on an object that doesn't exist. \[[1](https://born.mt/insights/typescript-best-practices/), [2](https://realworldjs.medium.com/safer-code-with-es6-destructuring-explained-in-one-example-a5d6910d7dce), [3](https://medium.com/@adnanaslam27j/null-vs-undefined-in-javascript-100-asked-at-the-time-of-interview-743eae3393d6)]

typescript

```
interface User {
  name: string;
  address?: { city: string }; // Address is optional
}

function printCity(user: User) {
  // ❌ With strictNullChecks: false -> Compiles fine, but crashes at runtime if address is missing.
  //   Runtime Error: TypeError: Cannot read properties of undefined (reading 'city')
  console.log(user.address.city);

  //  With strictNullChecks: true -> TypeScript blocks the build and forces a safe check:
  console.log(user.address?.city);
}
```

Use code with caution.

### 2. Broken Array/Map Lookups

Methods like `.find()` or `.get()` return `undefined` if no match is located. Without strict checks, you might assume you always get a result.

typescript

```
const users = ['Alice', 'Bob'];

// ❌ With strictNullChecks: false -> Compiles perfectly, crashes at runtime.
//   Runtime Error: TypeError: Cannot read properties of undefined (reading 'toUpperCase')
const foundUser = users.find(u => u === 'Charlie');
console.log(foundUser.toUpperCase());

//  With strictNullChecks: true -> TypeScript forces you to handle the missing case:
if (foundUser) {
  console.log(foundUser.toUpperCase());
}
```

Use code with caution.

### 3. Unhandled API and Database Failures

When fetching data, network requests or database queries often yield `null` if a record is deleted or not found.

typescript

```
async function getUserAge(id: string) {
  const user = await db.fetchUser(id); // Returns User or null

  // ❌ With strictNullChecks: false -> Assumes 'user' always exists.
  //   Runtime Error: TypeError: Cannot read properties of null (reading 'age')
  return user.age;

  //  With strictNullChecks: true -> Compiler flags this immediately.
  return user ? user.age : 0;
}
```

Use code with caution.

### 4. Accidental Form and Input Resets

If a user leaves a form field blank, an event handler might pass `null` or `undefined` into a function that expects a strict string, causing UI state bugs.

typescript

```
function updateProfilePicture(url: string) {
  console.log(`Loading image from: ${url.trim()}`);
}

// ❌ With strictNullChecks: false -> Compiles fine, crashes when an empty form is saved.
//   Runtime Error: TypeError: url.trim is not a function
updateProfilePicture(null as any);

//  With strictNullChecks: true -> TypeScript forces the function signature to acknowledge empty states:
function updateProfilePictureSafe(url: string | null) {
  if (url) console.log(url.trim());
}
```

Use code with caution.

Would you like to see how to write a **custom Type Guard wrapper** for your `Map` so you can keep `strictNullChecks` enabled but still use your preferred code structure?

- [link](https://moonsat.medium.com/stop-using-typescripts-exclamation-mark-d0b1281c8e3d)\
  Stop Using TypeScript’s Exclamation Mark | by Moonsat | Medium\
  Dec 23, 2025 — The compiler stops checking whether the value might be undefined and lets you use it as if it's guaranteed to exist. This compiles...\
  \
  \
  Medium
- [link](https://medium.com/@eranshabi/how-typescripts-strict-mode-actually-fixes-typescript-736ba8108c85)\
  How TypeScript’s Strict Mode Actually Fixes TypeScript | by Eran Shabi\
  Aug 12, 2020 — strictNullChecks The most common JS runtime error is probably Uncaught TypeError: Cannot read property 'foo' of undefined. This is...\
  \
  \
  Medium
- [link](https://born.mt/insights/typescript-best-practices/)\
  TypeScript Best Practices\
  Jan 23, 2026 — Strict null checks alone prevent the most common runtime error in JavaScript: "Cannot read property of undefined." When the compil...\
  \
  born.mt

Show all

## You said: can i make map prototype get as type guard

No, you **cannot** use the standard `Map.prototype.get` method directly as a type guard because type guards in TypeScript require a custom return type predicate (like `value is Type`), which the native ECMAScript `Map.prototype.get` definition does not have. \[[1](https://www.scaler.com/topics/typescript/type-guards-in-ts/)]

However, you have **two excellent workarounds** to achieve the exact behavior you want without changing how your code reads.

***

### Option 1: Create a Custom Type Guard Helper (Recommended) \[[1](https://camchenry.com/blog/typescript-type-guards)]

You can write a simple, reusable helper function that checks the map and narrows the type safely in one step. \[[1](https://flow.org/en/docs/types/type-guards/)]

typescript

```
// The custom type guard wrapper
function hasKey<K, V>(map: Map<K, V>, key: K): map is Map<K, V> & { get(k: K): V } {
  return map.has(key);
}

// How you use it in your code:
const map = new Map<string, string>();

if (hasKey(map, 'color')) {
  // TypeScript now guarantees that .get('color') returns 'string', NOT 'string | undefined'!
  const val = map.get('color');
  console.log(val.toUpperCase()); // ✅ Safe and works perfectly
}
```

Use code with caution.

***

### Option 2: Globally Override the Native `Map` Interface

If you want **all** maps in your project to behave this way automatically using `.has()`, you can use TypeScript global declaration merging to modify how `Map.prototype.has` is typed.

Create a file named `types.d.ts` somewhere in your project src folder and paste this code:

typescript

```
interface Map<K, V> {
  // Overrides the .has method to act as a type guard for the .get method
  has(key: K): this is this & { get(k: K): V };
}
```

Use code with caution.

### How it works now in your app:

typescript

```
const map = new Map<string, string>();

if (map.has('color')) {
  const val = map.get('color'); // ✅ The compiler no longer throws an error!
  console.log(val.toUpperCase());
}
```

Use code with caution.

### ⚠️ A Warning About Global Overrides

While Option 2 gives you the exact syntax you asked for, it introduces a **temporal safety risk**. If you run an asynchronous operation (like an `await fetch()`) between your `if (map.has(key))` check and your `map.get(key)` call, another part of your app might delete that key from the map in the background. TypeScript will still assume the value exists, which can lead to a runtime crash.

Which solution do you prefer: the explicit **helper function** (Option 1) or modifying the **global type definition** (Option 2)?

- [link](https://www.scaler.com/topics/typescript/type-guards-in-ts/)\
  Type Guards in TypeScript\
  May 4, 2023 — If we want to declare your own type guards with custom logic to help the TypeScript compiler determine the type we will need to de...\
  \
  \
  Scaler
- [link](https://camchenry.com/blog/typescript-type-guards)\
  TypeScript Type Guards Explained\
  Nov 1, 2021 — In general, I would recommend using the type guard that feels the most natural, which will come from experience. Don't write a cus...\
  \
  \
  camchenry.com
- [link](https://flow.org/en/docs/types/type-guards/)\
  Type Guards\
  Jun 17, 2026 — They ( type guards ) let you encapsulate custom narrowing logic in a reusable function — for example, filtering arrays to a specif...\
  \
  \
  Flow type checker

# js ?? or ||

The main difference is that **`??` (Nullish Coalescing)** only triggers for `null` or `undefined`, while **`||` (Logical OR)** triggers for _any_ falsy value (such as `0`, `""`, or `false`). \[[1](https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or), [2](https://dev.to/justanordinaryperson/-nullish-coalescing-vs-logical-or-in-javascript-2l88)]

Here is how they behave side-by-side when fallback behavior is triggered: \[[1](https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or), [2](https://dev.to/justanordinaryperson/-nullish-coalescing-vs-logical-or-in-javascript-2l88)]

| Left-hand Value \[[1](https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or), [2](https://dev.to/justanordinaryperson/-nullish-coalescing-vs-logical-or-in-javascript-2l88), [3](https://flexiple.com/javascript/double-question-mark-javascript), [4](https://www.geeksforgeeks.org/javascript/javascript-interview-questions/), [5](https://dev.to/efkumah/why-the-nullish-coalescing-operator-was-introduced-in-es2020-1l71)] | Using `left ?? 'default'` | Using `left ` |                                                | ` 'default'` | Reason for difference |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------- | ---------------------------------------------- | ------------ | --------------------- |
| `null`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `'default'`               | `'default'`   | Both see `null` as missing/falsy.              |
| `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `'default'`               | `'default'`   | Both see `undefined` as missing/falsy.         |
| `0`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `0`                       | `'default'`   | `0` is a valid number but is falsy.            |
| `""` (empty string)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `""`                      | `'default'`   | `""` is a valid text string but is falsy.      |
| `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `false`                   | `'default'`   | `false` is a valid boolean value but is falsy. |

### Summary of Rules

- Use **`??`** when `0`, `false`, or `""` are completely acceptable, valid inputs and you only want to protect against missing data (`null`/`undefined`).
- Use **`||`** when you want to catch _everything_ empty, invalid, or falsy, and force a default value across the board. \[[1](https://dev.to/justanordinaryperson/-nullish-coalescing-vs-logical-or-in-javascript-2l88), [2](https://javascript.plainenglish.io/weird-js-series-1-difference-between-and-b510acab078b), [3](https://www.youtube.com/shorts/dbBD7E-ZxoU)]

Feel free to share the **code snippet** you are working on or what **data types** you expect. I can point out which operator fits your logic best.

- [link](https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or)\
  When should I use ?? (nullish coalescing) vs || (logical OR)?\
  Apr 28, 2020 — \* 10 Answers. Sorted by: 1007. The OR operator || uses the right value if left is falsy, while the nullish coalescing operator ?? ...\
  Stack Overflow
- [link](https://dev.to/justanordinaryperson/-nullish-coalescing-vs-logical-or-in-javascript-2l88)\
  ?? (Nullish coalescing) vs || (Logical OR) in Javascript - DEV\
  Jun 16, 2024 — ?? (Nullish coalescing) vs || (Logical OR) in Javascript. #webdev #javascript #programming #beginners. Both Nullish Coalescing Ope...\
  DEV Community
- [link](https://javascript.plainenglish.io/weird-js-series-1-difference-between-and-b510acab078b)\
  Weird JS Series 1: Difference Between ?, ??, and || | by\
  Oct 15, 2025 — Rules of Thumb \* Use ?. when you want to safely access nested properties without throwing an error. \* Use ?? when you want to set ...\
  JavaScript in Plain English

Show all