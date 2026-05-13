in ts how to create a function wrapper than returns a function of the same params and return type whatever it's passed

To create a function wrapper in TypeScript that preserves the exact parameter types and return type of the input function, use **Generics** combined with the built-in and utility types. \[[1](https://www.educative.io/answers/typescript-functions), [2](https://stackoverflow.com/questions/38598280/is-it-possible-to-wrap-a-function-and-retain-its-types), [3](https://www.educative.io/courses/using-typescript-with-react/using-type-annotations), [4](https://timmousk.com/blog/typescript-returntype/)]

Code Pattern

typescript

```
function wrapper<F extends (...args: any[]) => any>(fn: F): (...args: Parameters<F>) => ReturnType<F> {
  return function(...args: Parameters<F>): ReturnType<F> {
    // Add custom wrapper logic here
    const result = fn(...args);
    // Add custom wrapper logic here
    return result;
  };
}
```

Use code with caution.

Alternative Clean Pattern

You can also achieve the exact same behavior by typing the return function directly with the generic type `F`.

typescript

```
function logWrapper<F extends (...args: any[]) => any>(fn: F): F {
  return function(...args: Parameters<F>): ReturnType<F> {
    console.log("Arguments passed:", args);
    const result = fn(...args);
    console.log("Result returned:", result);
    return result;
  } as unknown as F; // Type assertion bypasses strict implementation checks
}
```

Use code with caution.

Usage Example

typescript

```
// 1. Define a target function
const add = (a: number, b: number): number => a + b;

// 2. Wrap the function
const wrappedAdd = logWrapper(add);

// 3. Test type preservation
const total = wrappedAdd(5, 10); // Hovering shows: (a: number, b: number) => number
```

Use code with caution.

Why This Works

- `F extends (...args: any[]) => any` restricts the input to functions only.
- extracts the arguments tuple type from the original function.
- extracts the exact output type from the original function. \[[1](https://guilhermesimoes.github.io/blog/typing-a-function-wrapper-with-typescript), [2](https://www.youtube.com/watch?v=wR%5FRKqTeyxk), [3](https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types), [4](https://blog.bitsrc.io/typescripts-type-manipulations-58fee110be28), [5](https://guilhermesimoes.github.io/blog/typing-a-function-wrapper-with-typescript)]

Would you like to see how to extend this to **asynchronous functions**, or do you need help adding **custom metadata/properties** to the returned function?

- [link](https://www.educative.io/answers/typescript-functions)\
  TypeScript functions\
  A generic function in TypeScript is a function that can work with multiple types while maintaining type safety. It uses type param...\
  \
  Educative
- [link](https://stackoverflow.com/questions/38598280/is-it-possible-to-wrap-a-function-and-retain-its-types)\
  Is it possible to wrap a function and retain its types? - Stack Overflow\
  Jul 26, 2016 — - specify the return value of the wrapper function to be the T generic that you are wrapping.\
  \- cast the function you are retu...\
  \
  Stack Overflow
- [link](https://www.educative.io/courses/using-typescript-with-react/using-type-annotations)\
  Using Type Annotations in TypeScript with React Development\
  Wrap up TypeScript allows us to declare the type that a variable can hold using a type annotation. We can also declare types of fu...\
  \
  \
  Educative

Show all

can i replace (...args: any\[]) => any with Function

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Technically, yes, but </span><strong>practically, no.</strong></mark> While `Function` is a valid type in TypeScript, it is generally considered a "bad practice" and will actually break the logic of your function wrapper. \[[1](https://stackoverflow.com/questions/64380905/difference-between-function-and-args-any-any), [2](https://www.totaltypescript.com/dont-use-function-keyword-in-typescript), [3](https://github.com/microsoft/TypeScript/issues/20007)]

Why you shouldn't use `Function`

1. **Incompatibility with Utility Types:** The utility types and are designed to work with specific function signatures. If you use `Function` as a generic constraint, TypeScript will throw an error because `Function` is "unstructured"—it doesn't have a defined signature for the compiler to extract arguments or return values from.
2. **Loss of Type Safety:** The `Function` type is essentially an "escape hatch." It describes any callable object but provides no information about what parameters it takes or what it returns. This defeats the purpose of creating a wrapper that "preserves" the original types.
3. **Linter Warnings:** Most modern TypeScript configurations (like those using `eslint-plugin-typescript`) explicitly ban the `Function` type because it is dangerously broad. \[[1](https://stackoverflow.com/questions/75629945/alternative-for-any-function-args-any-any-without-using-any), [2](https://blog.webdevsimplified.com/2025-10/typescript-utility-types/), [3](https://oneuptime.com/blog/post/2026-01-24-typescript-utility-types/view), [4](https://www.typescriptlang.org/docs/handbook/utility-types.html), [5](https://medium.com/@juli1pb/why-you-should-not-use-the-type-any-in-typescript-500b27f82a7c), [6](https://stackoverflow.com/questions/64380905/difference-between-function-and-args-any-any), [7](https://www.totaltypescript.com/dont-use-function-keyword-in-typescript)]

The Recommended Standard

The industry standard for "any function with a specific but unknown signature" is `(...args: any[]) => any`. This tells TypeScript: "I am a function, I have an array of arguments, and I return something". \[[1](https://stackoverflow.com/questions/50726326/how-to-go-about-understanding-the-type-new-args-any-any), [2](https://www.totaltypescript.com/dont-use-function-keyword-in-typescript), [3](https://stackoverflow.com/questions/64380905/difference-between-function-and-args-any-any)]

| Feature \[[1](https://stackoverflow.com/questions/64380905/difference-between-function-and-args-any-any), [3](https://www.typescriptlang.org/docs/handbook/utility-types.html), [4](https://blog.webdevsimplified.com/2025-10/typescript-utility-types/), [5](https://www.typescriptlang.org/docs/handbook/2/generics.html)] | `Function` | `(...args: any[]) => any` |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------- |
| **Callable?**                                                                                                                                                                                                                                                                                                                | Yes        | Yes                       |
| **Supports ?**                                                                                                                                                                                                                                                                                                               | **No**     | **Yes**                   |
| **Supports ?**                                                                                                                                                                                                                                                                                                               | **No**     | **Yes**                   |
| **Type Safety**                                                                                                                                                                                                                                                                                                              | Very Low   | High (via Generics)       |

If you find `any[]` too permissive, a safer alternative is `(...args: never[]) => unknown`, though this can be much harder to work with in a generic wrapper. \[[1](https://stackoverflow.com/questions/75629945/alternative-for-any-function-args-any-any-without-using-any)]

Would you like to see how to handle **class constructors** (using the `new` keyword) in your wrapper instead?

- [link](https://stackoverflow.com/questions/75629945/alternative-for-any-function-args-any-any-without-using-any)\
  Alternative for "any function" ((...args: any\[]) => any) without using any\
  Mar 3, 2023 — The "top type" for Functions is (... args: never) => unknown ; it is essentially uncallable (or will be once TS5. 0 comes out). (.\
  Stack Overflow
- [link](https://www.typescriptlang.org/docs/handbook/utility-types.html)\
  TypeScript: Documentation - Utility Types\
  May 11, 2026 — Example. ... type T6 = Parameters < string >; Type 'string' does not satisfy the constraint '(... args: any) => any'. ... Type 'st...\
  TypeScript
- [link](https://stackoverflow.com/questions/50726326/how-to-go-about-understanding-the-type-new-args-any-any)\
  How to go about understanding the type \`new (...args: any\[]) => any\`\
  Jun 6, 2018 — 4 Answers. ... Let's reduce the type to smaller, bite size pieces that are more easily understood and then build back up to the fu...\
  Stack Overflow

Show all