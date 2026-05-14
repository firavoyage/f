<!-- support error code, like from fs -->

#

what can an error object in ts have

In TypeScript, a standard, built-in **`Error` object contains three primary properties: `name`, `message`, and an optional `stack` trace**. However, because JavaScript (and thus TypeScript) allows you to `throw` absolutely any value, an error object in a `catch` block defaults to the `unknown` type and can be customized to hold any arbitrary properties. \[[1](https://www.reddit.com/r/typescript/comments/1csmk1i/what%5Fshould%5Fthe%5Ftype%5Fof%5Fa%5Fdata%5Ffetching%5Ferror%5Fbe/), [2](https://stackoverflow.com/questions/64452484/how-can-i-safely-access-caught-error-properties-in-typescript), [3](https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript), [4](https://stackoverflow.com/questions/28793098/express-and-typescript-error-stack-and-error-status-properties-do-not-exist), [5](https://stackoverflow.com/questions/68941867/typescript-error-when-adding-property-to-error-object-property-does-not-exi)]

1\. Built-in `Error` Interface Properties \[[1](https://stackoverflow.com/questions/64452484/how-can-i-safely-access-caught-error-properties-in-typescript)]

According to TypeScript's core definitions (`lib.es5.d.ts`), the standard `Error` interface guarantees the following structure: \[[1](https://dev.to/manikbajaj/how-to-assign-types-to-nested-objects-in-typescript-5g25), [2](https://www.totaltypescript.com/books/total-typescript-essentials/modules-scripts-and-declaration-files), [3](https://stackoverflow.com/questions/64452484/how-can-i-safely-access-caught-error-properties-in-typescript)]

- **`message`**: A `string` containing a human-readable description of the error.
- **`name`**: A `string` representing the type or category of the error (e.g., `"Error"`, `"TypeError"`, `"SyntaxError"`).
- **`stack`**: An optional `string` containing the stack trace showing where the error was instantiated in the code.
- **`cause`**: An optional `unknown` property (introduced in ES2022) used to store the original underlying error when re-throwing exceptions. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error/Error), [2](https://dev.to/manuartero/custom-exceptions-in-modern-js-ts-2in9), [3](https://medium.com/@libinthomas33/errors-node-js-c93ae455090d), [4](https://www.digitalocean.com/community/tutorials/js-error-handling-try-catch), [5](https://stackoverflow.com/questions/64452484/how-can-i-safely-access-caught-error-properties-in-typescript)]

2\. Environment and Engine-Specific Properties

Depending on your execution environment (Node.js vs. specific web browsers), native error objects may include extra metadata: \[[1](https://itztalhaa.medium.com/custom-error-class-and-centralized-error-handling-in-nodejs-03887eb65793)]

- **`code`**: A `string` system identifier commonly attached to Node.js file system or network errors (e.g., `'ENOENT'`, `'ECONNREFUSED'`).
- **`fileName` / `lineNumber` / `columnNumber`**: Non-standard properties populated by some browser engines (like Firefox) pointing to the exact execution location. \[[1](https://www.reddit.com/r/typescript/comments/1gi5zul/error%5Fhandling%5Fin%5Ftypescript/), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error/Error), [3](https://www.reddit.com/r/typescript/comments/1csmk1i/what%5Fshould%5Fthe%5Ftype%5Fof%5Fa%5Fdata%5Ffetching%5Ferror%5Fbe/)]

3\. Custom Error Properties

You can extend the native `Error` class to create custom exceptions containing any operational properties your application requires. Common additions include: \[[1](https://medium.com/@arreyetta/error-handling-in-typescript-best-practices-80cdfe6d06db)]

- **`status` or `statusCode`**: A `number` indicating HTTP status codes (e.g., `404`, `500`) for API and Express routing.
- **`details`**: An object or array containing structured data, such as field-specific validation errors from form libraries. \[[1](https://engineering.udacity.com/handling-errors-like-a-pro-in-typescript-d7a314ad4991), [2](https://stackoverflow.com/questions/28793098/express-and-typescript-error-stack-and-error-status-properties-do-not-exist), [3](https://stackoverflow.com/questions/68941867/typescript-error-when-adding-property-to-error-object-property-does-not-exi)]

typescript

```
class ApplicationError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = "ApplicationError";
        this.status = status;
    }
}
```

Use code with caution.

4\. Interacting Safely with Error Properties

Because a caught error is typed as `unknown` by default, you cannot directly access its properties without narrowing its type first. You can do this using an `instanceof` check or a TypeScript Type Predicate: \[[1](https://www.w3schools.com/typescript/typescript%5Ferror%5Fhandling.php), [2](https://www.convex.dev/typescript/typescript-101/control-flow-operators/typescript-check-type), [3](https://engineering.udacity.com/handling-errors-like-a-pro-in-typescript-d7a314ad4991), [4](https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript)]

typescript

```
// Type Guard for a standard error structure
function isError(err: unknown): err is Error {
    return err instanceof Error;
}

try {
    throw new Error("Something went wrong");
} catch (err: unknown) {
    if (isError(err)) {
        console.log(err.message); // Safe to access string properties
        console.log(err.stack);   // Safe to access optional stack trace
    }
}
```

Use code with caution.

If you are looking to design a specific error structure for your codebase, tell me if you need a setup for **HTTP API errors**, **form validation errors**, or a **global centralized error handler**. \[[1](https://stackoverflow.com/questions/64452484/how-can-i-safely-access-caught-error-properties-in-typescript)]

- [link](https://engineering.udacity.com/handling-errors-like-a-pro-in-typescript-d7a314ad4991)\
  Handling errors like a pro in TypeScript | by Kolby Sisk\
  Dec 21, 2022 — Catching errors. Once an error is thrown, it will bubble up the callstack until caught in a try / catch statement. When code that ...\
  Udacity
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error/Error)\
  Error() constructor - JavaScript - MDN Web Docs\
  Jul 10, 2025 — Parameters. ... A human-readable description of the error. ... An object that has the following properties: cause Optional. A valu...\
  MDN Web Docs
- [link](https://www.reddit.com/r/typescript/comments/1csmk1i/what%5Fshould%5Fthe%5Ftype%5Fof%5Fa%5Fdata%5Ffetching%5Ferror%5Fbe/)\
  What should the type of a data fetching error be? : r/typescript\
  May 15, 2024 — Errors can be any type, as you can throw absolutely anything. So you need to decide what you actually want to do. If you just want...\
  Reddit·r/typescript

Show all

#

how to merge a type into another type in ts

1\. Intersection Types (`&`)

Combines multiple types into one containing all properties. \[[1](https://codefinity.com/courses/v2/4d8549bb-fa14-4b22-b618-7044883aa92b/99a80b41-7f85-4594-9f61-c5a25f0c57a4/cd249c7b-632d-4876-ae93-212b7da3d07b)]

typescript

```
type Base = { id: string };
type User = Base & { name: string };
```

Use code with caution.

- Duplicates retain original types.
- Conflicting types create `never`. \[[1](https://medium.com/@AlexanderObregon/typescript-utility-types-that-change-behavior-4388a2840368), [2](https://medium.com/@husneara/understanding-union-and-intersection-types-in-typescript-a-comprehensive-guide-d97310c5c467)]

2\. Type Extension (`interface`)

Interfaces merge using the `extends` keyword.

typescript

```
interface Base { id: string }
interface User extends Base { name: string }
```

Use code with caution.

- Throws errors on conflicts.
- Enforces strict type safety. \[[1](https://blog.logrocket.com/types-vs-interfaces-typescript/), [2](https://medium.com/@lior%5Famsalem/ts2320-interface-0-cannot-simultaneously-extend-types-d945fd21c005), [3](https://dev.to/damikaanupama/understanding-declaration-merging-in-typescript-3c55)]

3\. Utility Types (`Omit` + `&`)

Overwrites properties safely during a merge. \[[1](https://docs.vultr.com/javascript/examples/merge-property-of-two-objects)]

typescript

```
type A = { id: number; name: string };
type B = { id: string; age: number };

type Merged = Omit<A, keyof B> & B;
```

Use code with caution.

- Prevents `never` type conflicts.
- Prioritizes the second type.

4\. Interface Declaration Merging \[[1](https://dev.to/rijultp/types-vs-interfaces-in-typescript-a-clear-guide-for-developers-13kf)]

Interfaces with identical names auto-merge globally. \[[1](https://nameisjayant.medium.com/type-vs-interface-in-typescript-the-ultimate-guide-with-examples-916bce3d8e52)]

typescript

```
interface Window { customProp: string }
interface Window { anotherProp: number }
```

Use code with caution.

- Appends to existing definitions.
- Useful for external libraries. \[[1](https://medium.com/@arulvalananto/typescript-explained-type-and-interface-85e68d48a775), [2](https://medium.com/@ealch/typescript-use-case-of-the-interface-merge-declaration-d8cb05eb4dbf), [3](https://blog.logrocket.com/types-vs-interfaces-typescript/)]

5\. Mapped Types

Programmatically loops through and merges keys.

typescript

```
type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F ? F[K] : never;
};
```

Use code with caution.

- Creates a clean flat type.
- Resolves nested type aliases.

To help choose the best approach, tell me:

- What should happen if both types have the **same property name but different types**?

- Are you working with **type aliases** or **interfaces**?

- Do you need a **shallow merge** or a **deep recursive merge**? \[[1](https://medium.com/@AlexanderObregon/what-happens-when-you-extend-interfaces-in-typescript-ad2cf0f43cfb), [2](https://blog.logrocket.com/types-vs-interfaces-typescript/)]

- [link](https://codefinity.com/courses/v2/4d8549bb-fa14-4b22-b618-7044883aa92b/99a80b41-7f85-4594-9f61-c5a25f0c57a4/cd249c7b-632d-4876-ae93-212b7da3d07b)\
  Learn Union and Intersection Types | Working with Complex and Composed Types\
  An intersection type uses the ampersand ( & ) to combine multiple types into one. The resulting type must satisfy all the properti...\
  \
  Codefinity

- [link](https://medium.com/@AlexanderObregon/typescript-utility-types-that-change-behavior-4388a2840368)\
  TypeScript Utility Types That Change Behavior\
  Jul 26, 2025 — It loops through the set of keys you give it and copies each one into a new type, keeping the original value type for each. That's...\
  \
  \
  Medium

- [link](https://medium.com/@husneara/understanding-union-and-intersection-types-in-typescript-a-comprehensive-guide-d97310c5c467)\
  Understanding Union and Intersection Types in TypeScript: A Comprehensive Guide\
  Nov 29, 2024 — Intersection Types allow combining multiple types into one, resulting in a type that has all the properties of the original types.\
  \
  \
  Medium

Show all

#

how to say all props in this object type are optional in ts

To make all properties in an object type optional in TypeScript, use the built-in utility type. \[[1](https://www.convex.dev/typescript/best-practices/typescript-optional)]

💡 Core Solution

typescript

```
// 1. Define your original type
type User = {
  id: number;
  name: string;
  email: string;
};

// 2. Wrap it with Partial to make all properties optional
type OptionalUser = Partial<User>;

// Resulting type behaves exactly like this:
// type OptionalUser = {
//   id?: number;
//   name?: string;
//   email?: string;
// }
```

Use code with caution.

🛠️ Alternative: Inline Objects

You can also apply `Partial` directly to inline object shapes.

typescript

```
function updateConfig(config: Partial<{ host: string; port: number }>) {
  // host and port are both optional here
}
```

Use code with caution.

🔒 Advanced: Nested Objects

only works one level deep. If your object has nested objects, use a custom recursive type. \[[1](https://piccalil.li/blog/real-world-uses-of-typescripts-utility-types/), [2](https://www.susanpotter.net/software/typescripts-keyof-operator-and-possible-uses/), [3](https://mimo.org/glossary/typescript/required-type)]

typescript

```
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type ComplexType = {
  info: { nestedProp: string };
};

// Makes info AND nestedProp optional
type FullyOptional = DeepPartial<ComplexType>;
```

Use code with caution.

Would you like to see how to make only **specific** properties optional, or do you need help implementing this inside a **generic function**?

- [link](https://www.convex.dev/typescript/best-practices/typescript-optional)\
  Optional Features | TypeScript Guide by Convex\
  When working with optional properties, TypeScript utility types like Partial can make all properties in a type optional at once, w...\
  \
  \
  Convex
- [link](https://piccalil.li/blog/real-world-uses-of-typescripts-utility-types/)\
  Real-world uses of TypeScript’s utility types\
  Mar 20, 2025 — The main problem with the standard library Partial is that it only goes one level deep. If you have an object that embeds another ...\
  \
  \
  piccalil.li
- [link](https://www.susanpotter.net/software/typescripts-keyof-operator-and-possible-uses/)\
  TypeScript's keyof operator and possible uses \[software] :: Extract and constrain object keys safely :: product software …\
  Jun 17, 2023 — The type Partial is defined. It represents a new type that takes a generic parameter T , which can be any object type.\
  \
  \
  www.susanpotter.net

Show all
