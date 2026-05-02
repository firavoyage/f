neverthrow methods

April 19, 2026

`neverthrow` is a TypeScript library used for type-safe error handling by wrapping results in a type, which is either `Ok` (success) or `Err` (failure). Its methods allow you to transform, chain, and consume these results without using `try/catch`. \[[1](https://mintlify.com/supermacro/neverthrow/introduction), [2](https://github.com/supermacro/neverthrow/wiki/Basic-Usage-Examples), [3](https://mintlify.com/supermacro/neverthrow/concepts/error-handling), [4](https://www.mintlify.com/supermacro/neverthrow/resources/faq)]

Core Result Methods

These methods are used to transform or handle a `Result` instance: \[[1](https://effect.website/docs/additional-resources/effect-vs-neverthrow/), [2](https://mintlify.com/supermacro/neverthrow/introduction)]

- **`map(fn)`**: Transforms the success value (`Ok`). It automatically wraps the returned value in a new `Ok`.
- **`mapErr(fn)`**: Transforms the error value (`Err`) if it exists.
- **`andThen(fn)`**: Used for chaining operations that might also fail. The callback must return a new `Result`.
- **`orElse(fn)`**: Allows recovery from an error by returning a new `Result`.
- **`match(onOk, onErr)`**: A pattern-matching method to handle both success and error cases simultaneously, returning a single value. \[[1](https://github.com/supermacro/neverthrow), [2](https://mintlify.com/supermacro/neverthrow/guides/basic-usage), [3](https://dj-nuo.com/blog/2025/10/08/neverthrow-tutorial/), [4](https://ogzhanolguncu.com/blog/rust-like-error-handling-with-neverthrow/), [5](https://dj-nuo.com/blog/2025/10/08/neverthrow-tutorial), [6](https://mintlify.com/supermacro/neverthrow/quickstart)]

Utilities and State Checking

- **`isOk()` / `isErr()`**: Type guards that check the state of the result and narrow the type so you can safely access `.value` or `.error`.
- **`unwrapOr(defaultValue)`**: Returns the success value or a provided default if the result is an error.
- **`fromThrowable(fn, errorMapper)`**: Wraps a function that might throw a standard JavaScript error into one that returns a `Result`.
- **`_unsafeUnwrap()`**: Forcefully extracts the value. It is generally discouraged except in tests because it throws an exception if the result is an `Err`. \[[1](https://macwright.com/2025/01/28/neverthrow-til), [2](https://mintlify.com/supermacro/neverthrow/api/utilities/from-throwable), [3](https://github.com/supermacro/neverthrow/blob/master/README.md), [4](https://mintlify.com/supermacro/neverthrow/concepts/result-type), [5](https://github.com/supermacro/neverthrow), [6](https://github.com/supermacro/neverthrow/wiki/Basic-Usage-Examples), [7](https://mintlify.com/supermacro/neverthrow/guides/basic-usage), [8](https://mintlify.com/supermacro/neverthrow/concepts/error-handling)]

Side Effects and Advanced Chaining

Introduced in more recent versions (v7+), these methods handle side effects without necessarily changing the main value track: \[[1](https://mintlify.com/supermacro/neverthrow/concepts/result-type)]

- **`andTee(fn)`**: Executes a side effect (like logging) on the `Ok` value but ignores the callback's return value, preserving the original `Result`.
- **`orTee(fn)`**: Similar to `andTee` but executes on the `Err` value.
- **`andThrough(fn)`**: Similar to `andTee`, but if the side effect returns an `Err`, that error is propagated forward. \[[1](https://mintlify.com/supermacro/neverthrow/api/result-async/tee-methods), [2](https://mintlify.com/supermacro/neverthrow/resources/migration-guide), [3](https://www.mintlify.com/supermacro/neverthrow/api/result/through-methods), [4](https://www.mintlify.com/supermacro/neverthrow/api/result-async/tee-methods), [5](https://mintlify.com/supermacro/neverthrow/concepts/result-type)]

Async Operations (`ResultAsync`) \[[1](https://mintlify.com/supermacro/neverthrow/introduction)]

For asynchronous tasks, `neverthrow` provides **`ResultAsync`**, which wraps a . \[[1](https://mintlify.com/supermacro/neverthrow/introduction), [2](https://github.com/supermacro/neverthrow/wiki/Basic-Usage-Examples)]

- **`fromPromise(promise, errorMapper)`**: Converts a standard Promise into a `ResultAsync`.
- **Chaining**: `ResultAsync` supports async versions of core methods like `map`, `andThen`, and `match`. \[[1](https://github.com/supermacro/neverthrow/wiki/Error-Handling-Best-Practices), [2](https://github.com/supermacro/neverthrow/wiki/Working-with-ResultAsync), [3](https://mintlify.com/supermacro/neverthrow/api/result/through-methods), [4](https://github.com/supermacro/neverthrow/wiki/Basic-Usage-Examples), [5](https://mintlify.com/supermacro/neverthrow/quickstart)]

Would you like to see a code **example** of how to chain these methods together?

- [link](https://github.com/supermacro/neverthrow)\
  NeverThrow - Type-Safe Errors for JS & TypeScript · GitHub\
  Recommended: Use eslint-plugin-neverthrow. As part of neverthrow s bounty program, user mdbetancourt created eslint-plugin-neverth...\
  GitHub
- [link](https://ogzhanolguncu.com/blog/rust-like-error-handling-with-neverthrow/)\
  Improving Javascript Error Handling using Neverthrow for ...\
  Adopting Neverthrow for error handling in JavaScript and TypeScript brings the robustness of Rust's techniques to your projects. W...\
  ogzhanolguncu.com
- [link](https://mintlify.com/supermacro/neverthrow/introduction)\
  Introduction to NeverThrow - Mintlify\
  What is NeverThrow? NeverThrow helps you encode failure into your program using a Result type that represents either success ( Ok ...\
  Mintlify

Show all

example

April 19, 2026

Here is an example showing how to chain synchronous and asynchronous methods using `neverthrow`. This pattern allows you to handle multiple failable steps in a linear, readable way. \[[1](https://mintlify.com/supermacro/neverthrow/guides/chaining-operations)]

Chaining Example

Imagine a user registration flow that involves parsing a URL, validating data, and saving it to a database. \[[1](https://mintlify.com/supermacro/neverthrow/api/result-async/and-then), [2](https://www.solberg.is/neverthrow), [3](https://mintlify.com/supermacro/neverthrow/api/utilities/from-throwable)]

typescript

```
import { ok, err, Result, ResultAsync, fromThrowable, fromPromise } from 'neverthrow';

// 1. Wrap a throwing function (like URL parsing)
const safeParseUrl = fromThrowable(
  (url: string) => new URL(url),
  () => 'Invalid URL' as const
);

// 2. A simple validation function
const validateUser = (url: URL): Result<{ name: string }, string> => {
  const name = url.searchParams.get('name');
  return name ? ok({ name }) : err('Missing name parameter');
};

// 3. An async database operation wrapped in ResultAsync
const saveUser = (user: { name: string }): ResultAsync<number, string> => {
  const mockDbPromise = Promise.resolve(Math.floor(Math.random() * 1000));
  return fromPromise(mockDbPromise, () => 'Database failure');
};

// --- PUTTING IT ALL TOGETHER ---
async function registerUser(inputUrl: string) {
  const finalResult = await safeParseUrl(inputUrl)
    .andThen(validateUser) // Chain sync operation
    .asyncAndThen(saveUser) // Transition from sync to async
    .map(id => `User created with ID: ${id}`) // Transform success value
    .mapErr(error => `Error: ${error}`); // Transform error value

  // Final consumption with pattern matching
  finalResult.match(
    (msg) => console.log('Success!', msg),
    (err) => console.error('Failed!', err)
  );
}

registerUser('https://example.com');
```

Use code with caution.

Key Chaining Rules

- **`andThen`**: Use this when the next step returns another `Result`. If any step fails, the rest are skipped (**short-circuiting**).
- **`map`**: Use this for "happy path" transformations that _cannot_ fail (e.g., formatting a string).
- **`asyncAndThen`**: Use this to move from a synchronous `Result` to an asynchronous `ResultAsync`.
- **`Result.combine`**: If you have multiple independent results (like a list of API calls) and want to wait for all of them, use `Result.combine([r1, r2, r3])`. \[[1](https://github.com/supermacro/neverthrow), [2](https://github.com/supermacro/neverthrow/wiki/Basic-Usage-Examples), [3](https://www.mintlify.com/supermacro/neverthrow/quickstart), [4](https://www.mintlify.com/supermacro/neverthrow/resources/faq), [5](https://effect.website/docs/additional-resources/effect-vs-neverthrow/), [6](https://www.mintlify.com/supermacro/neverthrow/quickstart), [7](https://www.mintlify.com/supermacro/neverthrow/resources/typescript-tips), [8](https://mintlify.com/supermacro/neverthrow/guides/chaining-operations)]

Would you like to see how to handle **multiple error types** within a single chain?

- [link](https://github.com/supermacro/neverthrow)\
  NeverThrow - Type-Safe Errors for JS & TypeScript · GitHub\
  Signature: class Result { // Note that the latest version lets you return distinct errors as well. // If the error types (E and F)\
  GitHub
- [link](https://www.mintlify.com/supermacro/neverthrow/resources/typescript-tips)\
  TypeScript Best Practices - NeverThrow - Mintlify\
  import { safeTry, ResultAsync } from 'neverthrow' declare function fetchUser(id: string): ResultAsync declare function fetchPosts(\
  Mintlify
- [link](https://mintlify.com/supermacro/neverthrow/api/result-async/and-then)\
  ResultAsync.andThen - NeverThrow - Mintlify\
  Overview. Chains operations on a ResultAsync , where the next operation depends on the success of the previous one. The callback m...\
  Mintlify

Show all