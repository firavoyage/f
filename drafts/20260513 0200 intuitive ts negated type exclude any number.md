why is exclude any number in ts still any

In TypeScript, still results in `any` because of how the `any` type behaves with **conditional types** and the fact that `any` is not a union. \[[1](https://stackoverflow.com/questions/51796210/negating-typescript-types)]

Why `Exclude` fails with `any`

The `Exclude` utility is defined as:

When you pass `any` as `T`, two things happen:

- **The "Everything" Type**: In TypeScript, `any` is essentially both a subtype and a supertype of every other type. Because it "extends" everything, the condition `any extends number` is technically treated as both true and false simultaneously by the compiler.
- **Distribution over Unions**: `Exclude` is designed to work on **unions** (e.g., `string | number`). It loops through each member of the union and removes the ones that match. Since `any` is a single "atomic" type and not a union of every possible value, `Exclude` cannot "reach inside" to filter out specific parts of it. \[[1](https://stackoverflow.com/questions/68008673/typescript-any-number-except-x), [2](https://www.totaltypescript.com/concepts/any-type), [3](https://stackoverflow.com/questions/64796608/exclude-a-particular-type-from-any), [4](https://medium.com/jspoint/typescript-working-with-types-f1829384851f), [5](https://github.com/microsoft/TypeScript/issues/47178)]

Key Technical Reasons

1. **TypeScript is Additive, Not Subtractive**: The type system tracks what a value _is_, not what it _is not_. To exclude `number` from `any`, TypeScript would have to create a union of every single possible non-number value (infinite strings, objects, booleans, etc.), which is computationally impossible.
2. **Special Case for `any`**: Conditional types that check `any` generally return the union of the true and false branches. For `Exclude`, this would be `never | any`, which simplifies right back to `any`. \[[1](https://stackoverflow.com/questions/68008673/typescript-any-number-except-x), [2](https://www.totaltypescript.com/concepts/any-type), [3](https://www.parimaltek.in/posts/typescript-enums-a-word-of-caution), [4](https://www.typescript-training.com/course/intermediate-v1/06-extract-exclude/), [5](https://mimo.org/glossary/typescript/exclude-type)]

What should you use instead?

If you want a type that represents "anything but a number," TypeScript does not currently support **negated types** (like `not number`). Your best options are: \[[1](https://stackoverflow.com/questions/65690697/restrictions-on-number-using-typescript), [2](https://www.executeprogram.com/courses/everyday-typescript/lessons/never)]

- **Use `unknown`**: If you want to force safety, use `unknown`. It requires you to check the type (e.g., `typeof val !== 'number'`) before using it.
- **Specific Unions**: Define exactly what you _do_ want, such as `string | boolean | object`.
- **Branded Types**: If you are trying to exclude a specific constant value (like the number `0`), you can sometimes use template literal types for strings, but this does not work for the broad `number` primitive. \[[1](https://jessewarden.com/2024/09/six-alternatives-to-using-any-in-typescript.html), [2](https://danywalls.com/why-avoid-using-any-in-typescript), [3](https://www.scaler.com/topics/typescript/typescript-never/), [4](https://www.totaltypescript.com/books/total-typescript-essentials/unions-literals-and-narrowing), [5](https://sandroroth.com/blog/typescript-types/)]

Would you like to see a **code example** of how to safely handle a variable that could be anything except a number?

- [link](https://stackoverflow.com/questions/68008673/typescript-any-number-except-x)\
  Typescript any number except X - Stack Overflow\
  Jun 16, 2021 — 1 Answer. Sorted by: 8. This is not possible at the moment. See: https://github.com/microsoft/TypeScript/issues/15480. Exclude doe...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/64796608/exclude-a-particular-type-from-any)\
  typescript - Exclude a particular type from \`any\` - Stack Overflow\
  Nov 12, 2020 — Related \* Exclude type by member type. \* Typescript exclude Type from Type. \* Typescript check for the 'any' type. \* Disallow call...\
  Stack Overflow
- [link](https://jessewarden.com/2024/09/six-alternatives-to-using-any-in-typescript.html)\
  Six Alternatives to Using any in TypeScript - Jesse Warden\
  Use IDontKnowYet as an aliased type or interface. For a multitude of types, use an anonymous Union, like string | number . If you ...\
  Jesse Warden

Show all

can i create a type that is anything but a type, wo branding tricks

No, you cannot create a "negated type" (e.g., `type NotNumber = any except number`) in TypeScript today. TypeScript is **structurally typed** and **additive**, meaning it tracks what a type _is_ rather than what it _isn't_. \[[1](https://stackoverflow.com/questions/51442157/type-for-every-possible-string-value-except), [2](https://stackoverflow.com/questions/70086856/create-object-based-on-types-typescript), [3](https://www.reddit.com/r/typescript/comments/1f93arq/when%5Fshould%5Fand%5Fshouldnt%5Fyou%5Fcreate%5Fcustom%5Ftypes/), [4](https://www.youtube.com/watch?v=VhmbMAXnlBc\&t=103)]

Official support for "negated types" has been a highly requested feature for years, but it has not been implemented because it introduces extreme complexity for the compiler to track an infinite set of "non-matches."

However, you can achieve this behavior for specific scenarios using **conditional types** and **generics** to "block" specific types without using branding tricks. \[[1](https://medium.com/@bchadwickfrance/typescript-types-to-avoid-and-what-to-use-instead-16c2fcee303c), [2](https://stackoverflow.com/questions/51442157/type-for-every-possible-string-value-except)]

1\. The "Type Block" Pattern (For Functions)

If you want a function to accept "anything except a `number`," you can use a generic constraint that evaluates to `never` if the forbidden type is passed. \[[1](https://www.karltarvas.com/typescript-allow-any-type-except-specific-values/)]

typescript

```
type NotNumber<T> = T extends number ? never : T;

function processAnythingButNumber<T>(input: NotNumber<T>) {
  return input;
}

processAnythingButNumber("hello"); // OK
processAnythingButNumber(true);    // OK
processAnythingButNumber(42);      // Error: Argument of type 'number' is not assignable to 'never'
```

Use code with caution.

2\. The Intersection "Error Message" Pattern

To make the error message more readable, you can intersect the type with a string literal that describes the error.

typescript

```
type ExcludeNumber<T> = T extends number
  ? "Error: Numbers are not allowed here"
  : T;

function doWork<T>(val: ExcludeNumber<T>) { /* ... */ }

doWork(123); // Error: Argument of type 'number' is not assignable to '"Error: Numbers are not allowed here"'
```

Use code with caution.

3\. Using `unknown` as a Safe Alternative

If your goal is to handle "any" data safely while excluding specific types from being used accidentally, use `unknown`. Unlike `any`, `unknown` forces you to perform a type check before you can do anything with the value. \[[1](https://medium.com/@bchadwickfrance/typescript-types-to-avoid-and-what-to-use-instead-16c2fcee303c)]

typescript

```
function handle(input: unknown) {
  if (typeof input === 'number') {
    throw new Error("Numbers not allowed");
  }
  // Now 'input' is safely "anything but a number" in this block
}
```

Use code with caution.

Comparison of Approaches

| Feature \[[1](https://medium.com/@bchadwickfrance/typescript-types-to-avoid-and-what-to-use-instead-16c2fcee303c), [2](https://www.reddit.com/r/typescript/comments/nf8lug/branding%5Fflavoring/)] |                    | Generic "Block"          | Branded Types        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------ | -------------------- |
| **Works on `any`?**                                                                                                                                                                                | No (returns `any`) | Yes (if used as generic) | Yes                  |
| **Runtime Check?**                                                                                                                                                                                 | No                 | No                       | Yes (via Type Guard) |
| **Complexity**                                                                                                                                                                                     | Simple             | Medium                   | High                 |
| **Best Use Case**                                                                                                                                                                                  | Union types        | Function constraints     | Nominal safety       |

Do you have a **specific use case** where you need this, such as an API response or a library you're building?

- [link](https://stackoverflow.com/questions/51442157/type-for-every-possible-string-value-except)\
  typescript - Type for "every possible string value except ..."\
  Jul 20, 2018 — \* 5 Answers. Sorted by: 45. There isn't a general solution to this problem since there is no way to express in the typescript type...\
  \
  \
  Stack Overflow
- [link](https://stackoverflow.com/questions/70086856/create-object-based-on-types-typescript)\
  Create object based on types typescript - Stack Overflow\
  Nov 23, 2021 — No, that's not possible. Types are erased when you compile TypeScript to JavaScript; you cannot use reflection to observe foo at r...\
  \
  Stack Overflow
- [link](https://www.reddit.com/r/typescript/comments/1f93arq/when%5Fshould%5Fand%5Fshouldnt%5Fyou%5Fcreate%5Fcustom%5Ftypes/)\
  When should and shouldn't you create custom types ... - Reddit\
  Sep 4, 2024 — Does extracting a custom type with its own name make the code easier to read or harder to read? How much jumping around are devs g...\
  \
  Reddit·r/typescript

Show all