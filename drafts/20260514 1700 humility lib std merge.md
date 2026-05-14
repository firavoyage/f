ts object assign example

In TypeScript, **`Object.assign()` merges properties from source objects into a target object**. TypeScript automatically infers the return type as an **intersection type (`T & U`)** of the combined objects. \[[1](https://www.youtube.com/watch?v=gW3KcIfNorE\&t=18), [2](https://github.com/microsoft/TypeScript/issues/11508)]

Immutable Cloning and Merging \[[1](https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/)]

To merge or clone objects without mutating your original data, pass an empty object literal `{}` as the first argument (the target). \[[1](https://www.programiz.com/javascript/library/object/assign)]

typescript

```
interface User {
  name: string;
}

interface Permissions {
  isAdmin: boolean;
}

const user: User = { name: "Alice" };
const roles: Permissions = { isAdmin: true };

// TypeScript infers the type as User & Permissions
const fullProfile = Object.assign({}, user, roles);

console.log(fullProfile.name);      // Output: Alice
console.log(fullProfile.isAdmin);   // Output: true
```

Use code with caution.

Mutable Updates

If you pass an existing object as the first argument, `Object.assign()` directly mutates that target object and returns it. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/assign), [2](https://www.2ality.com/2014/01/object-assign.html)]

typescript

```
interface Point {
  x: number;
  y: number;
}

const point: Point = { x: 10, y: 20 };

// Mutates the 'point' object directly
Object.assign(point, { y: 50 });

console.log(point); // Output: { x: 10, y: 50 }
```

Use code with caution.

Use Case: Dynamic Class Constructors

A common pattern in TypeScript uses `Object.assign()` to quickly copy properties from a configuration object directly onto a class instance constructor. Use the definite assignment assertion operator `!` so the compiler knows the values will exist. \[[1](https://stackoverflow.com/questions/68912644/typescript-object-assignthis-data-not-working-as-expected), [2](https://medium.com/@june%5Fdang/object-assign-in-typescript-an-introduction-to-converting-classes-7de1caca1788), [3](https://refine.dev/blog/typescript-classes/)]

typescript

```
class Config {
  host!: string;
  port!: number;

  constructor(data: Partial<Config>) {
    Object.assign(this, data); // Assigns fields dynamically to 'this' instance
  }
}

const serverConfig = new Config({ host: "localhost", port: 8080 });
```

Use code with caution.

Critical Caveats

- **Shallow Copy Only**: `Object.assign()` does not deeply clone nested object structures. It only copies top-level references.
- **Alternative Syntax**: Modern TypeScript applications frequently substitute `Object.assign({}, a, b)` with the **Object Spread operator** `const combined = { ...a, ...b }` for better readability. \[[1](https://stackoverflow.com/questions/32925460/object-spread-vs-object-assign), [2](https://codefinity.com/courses/v2/be84f695-d048-4034-98c4-3164f5acd047/68379466-5b24-41f4-bc14-fe1cedc680db/044b9e1d-40a5-4de6-a793-7baa31168241), [3](https://www.reddit.com/r/typescript/comments/xq0kd8/how%5Fto%5Fadd%5Fa%5Fproperty%5Fto%5Fan%5Fobject%5Fthat%5Fdoesnt/), [4](https://esdiscuss.org/topic/object-assign-and-inherited-properties), [5](https://betterprogramming.pub/combining-javascript-objects-e293bc4a48a6)]

If you want to dive deeper, let me know if you would like to explore **deep cloning patterns**, see how **object spread compares in performance**, or look at handling **strongly typed dynamic index signatures**. \[[1](https://stackoverflow.com/questions/12710905/how-do-i-dynamically-assign-properties-to-an-object-in-typescript), [2](https://stackoverflow.com/questions/71879213/typescript-object-assign-vs-create-new-object-efficiency), [3](https://javascript.info/object-copy), [4](https://levelup.gitconnected.com/using-typescript-interfaces-and-abstract-classes-7e9c0ae381da)]

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/assign)\
  Object.assign() - JavaScript - MDN Web Docs\
  Jul 10, 2025 — Try it. JavaScript Demo: Object.assign() 99. 1. 2. 3. 4. 5. 6. 7. 8. 9. 10. 11. const target = { a: 1, b: 2 }; const source = { b:\
  MDN Web Docs
- [link](https://stackoverflow.com/questions/32925460/object-spread-vs-object-assign)\
  Object spread vs. Object.assign - javascript - Stack Overflow\
  Oct 3, 2015 — Object. assign() \* Standardized. \* Dynamic. Example: var sources = \[{a: "A"}, {b: "B"}, {c: "C"}]; options = Object. assign. apply...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/68912644/typescript-object-assignthis-data-not-working-as-expected)\
  Typescript: Object.assign(this, data) not working as expected\
  Aug 24, 2021 — \* 3 Answers. Sorted by: Object. assign() should work like you want, setting all the member variables from the constructor argument...\
  Stack Overflow

Show all

how does it merge conflicts

When `Object.assign()` encounters properties with identical keys across multiple source objects, it resolves conflicts using a **last-in-wins** strategy. Properties are overwritten sequentially from left to right.

Left-to-Right Overwriting Example

The target object is updated continuously as each source object is processed. Subsequent sources completely overwrite previous values of the same key.

typescript

```
const target = { id: 1, status: "pending" };
const source1 = { status: "processing", attempts: 1 };
const source2 = { status: "completed", speed: "fast" };

// Merging left-to-right: target <- source1 <- source2
const result = Object.assign(target, source1, source2);

console.log(result);
// Output: { id: 1, status: "completed", attempts: 1, speed: "fast" }
```

Use code with caution.

TypeScript Typing Rules for Conflicts

TypeScript reflects this overwriting behavior in its static type checking.

Overwriting to a Newer Type

If a later source changes the primitive type of a property, TypeScript updates the inferred type signature to match the last object passed.

typescript

```
const data = { priority: "low" }; // Type: string
const update = { priority: 5 };    // Type: number

const current = Object.assign({}, data, update);

// TypeScript infers current.priority as 'number'
console.log(current.priority); // Output: 5
```

Use code with caution.

Strict Type Type Mismatch Warnings

If you attempt to mutate an existing strongly-typed object with incompatible types, TypeScript will throw a compile-time error.

typescript

```
interface UserProfile {
  id: string;
}

const user: UserProfile = { id: "USR-100" };

// Error: Type 'number' is not assignable to type 'string'
Object.assign(user, { id: 200 });
```

Use code with caution.

The Nested Object Conflict Trap

`Object.assign()` performs a **shallow copy**. It does not merge nested properties; it overwrites the entire reference.

typescript

```
const defaultUser = {
  profile: { name: "Guest", role: "anonymous" }
};

const userUpdate = {
  profile: { role: "admin" } // Missing 'name'
};

const finalUser = Object.assign({}, defaultUser, userUpdate);

// CRITICAL: 'name' is completely lost because the nested object was replaced, not merged.
console.log(finalUser.profile);
// Output: { role: "admin" }
```

Use code with caution.

If you are dealing with complex data structures, let me know if you would like to see how to implement a **deep recursive merge function** or how to safely handle conflicts using **Lodash or native spread operators**.
