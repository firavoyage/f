# ts type guard foo is not undefined or null

To create a TypeScript type guard that checks if a value `foo` is **not `undefined` or `null`**, you can use either a simple inline check or a generic helper function. [link](https://basarat.gitbook.io/typescript/type-system/typeguard)

Here are the best ways to achieve this.

### 1. The Inline Check (Most Common)

You do not always need a custom function. TypeScript natively narrows the type if you use the loose inequality operator (`!= null`) against `null`, which safely filters out both `null` and `undefined`. [link](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

typescript

```
if (foo != null) {
  // foo is guaranteed to be neither null nor undefined here
  console.log(foo);
}
```

Use code with caution.

### 2. Reusable Generic Type Guard Function

If you need a reusable function (for example, to pass directly into `.filter()`), use a custom type predicate with the `is` keyword and the built-in `NonNullable<T>` utility type. [link](https://stackoverflow.com/questions/57639697/typescript-type-guarding-against-null)

typescript

```
function isDefined<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}

// Example usage:
const value: string | null | undefined = "Hello";

if (isDefined(value)) {
  // Type is narrowed down to: string
  console.log(value.toUpperCase());
}
```

Use code with caution.

### 3. Alternative Using TypeScript's `{}` Type

An alternative signature uses the `{}` type, which represents any value except `null` and `undefined`. [link](https://effectivetypescript.com/2024/02/27/type-guards/)

typescript

```
function isNonNullish<T>(val: T): val is T & {} {
  return val !== null && val !== undefined;
}
```

Use code with caution.

### 4. Cleaning Up Arrays

A classic use case for this type guard is removing `null` and `undefined` items from an array so TypeScript updates the array's type definition accordingly.

typescript

```
const items: (string | null | undefined)[] = ["apple", null, "banana", undefined];

// TypeScript automatically infers the cleaned type as string[]
const cleanItems = items.filter(isDefined);
```

Use code with caution.

***

If you'd like to tailor this, let me know:

- Are you checking a **standalone variable** or a **nested object property**?

- Do you want the application to **throw an error** immediately if the value is missing? [link](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html)

- [link](https://www.typescriptlang.org/docs/handbook/advanced-types.html)\
  TypeScript: Documentation - Advanced Types\
  Jun 8, 2026 — typeof type guards ... However, having to define a function to figure out if a type is a primitive is kind of a pain. Luckily, you...\
  TypeScript

- [link](https://stackoverflow.com/questions/57639697/typescript-type-guarding-against-null)\
  TypeScript - type guarding against null - Stack Overflow\
  Aug 24, 2019 — Another possible workaround is to use a user-defined type guard function which narrows par itself. It's a bit tricky because type ...\
  Stack Overflow

- [link](https://effectivetypescript.com/2024/02/27/type-guards/)\
  The Hidden Side of Type Predicates - Effective TypeScript\
  Feb 27, 2024 — TypeScript thinks that nulls is an array of null values, but it could actually contain numbers (specifically zeroes). This is an u...\
  Effective TypeScript

Show all

## can i use "foo is Exclude"

Yes, you can use `Exclude` in a type guard, but **not directly** as `foo is Exclude`.

The `Exclude` utility type requires two arguments: `Exclude<UnionType, ExcludedMembers>`.

Here is how to write it correctly:

### Correct Syntax

You must pass the original type of the variable as the first argument, and the types you want to remove (`null | undefined`) as the second argument.

typescript

```
function isDefined<T>(foo: T): foo is Exclude<T, null | undefined> {
  return foo !== null && foo !== undefined;
}

// Example usage:
const data: string | null = "hello";

if (isDefined(data)) {
  // data is narrowed to 'string'
  console.log(data);
}
```

Use code with caution.

### Why `Exclude` is less common here

While using `Exclude<T, null | undefined>` works perfectly, most developers use `NonNullable<T>` instead. `NonNullable` is a built-in TypeScript shortcut that does the exact same thing behind the scenes but requires less typing.

typescript

```
// This achieves identical results with less code:
function isDefined<T>(foo: T): foo is NonNullable<T> {
  return foo !== null && foo !== undefined;
}
```

Use code with caution.

***

If you are working with a specific scenario, let me know:

- What is the **original type declaration** of your `foo` variable?
- Are you using this inside an **array filter** or a **conditional block**?

I can show you the exact code optimized for your setup.

- [link](https://www.typescriptlang.org/docs/handbook/utility-types.html)\
  Documentation - Utility Types\
  Jun 22, 2026 — Exclude Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers .\
  \
  \
  TypeScript
- [link](https://javascript.plainenglish.io/mastering-omit-type-in-typescript-52041fc0242b)\
  Demystifying Omit Type in TypeScript: A Guide to Removing Properties from Types\
  Apr 17, 2023 — The Exclude type takes two type parameters:\
  \
  \
  JavaScript in Plain English
- [link](https://mariusschulz.com/blog/the-omit-helper-type-in-typescript)\
  The Omit Helper Type in TypeScript — Marius Schulz\
  Mar 28, 2020 — /\*\* \* Exclude from T those types that are assignable to U \*/ type Exclude< T, U> = T extends U ? never : T;\
  \
  \
  Marius Schulz

Show all

