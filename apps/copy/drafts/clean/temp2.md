both on

``````
try catch in ts

11:33 PM

In TypeScript, <mark>a<span>&nbsp;</span><strong><code>try...catch</code><span>&nbsp;</span>block handles runtime errors, where the caught error defaults to the<span>&nbsp;</span><code>unknown</code><span>&nbsp;</span>type</strong></mark>. This means you cannot access properties like `error.message` without explicitly narrowing the type first. [link](https://www.w3schools.com/typescript/typescript%5Ferror%5Fhandling.php)

### Standard Syntax and Type Narrowing

Because JavaScript allows throwing absolutely any value (a string, a number, or an object), TypeScript enforces safety by requiring you to verify what was caught. [link](https://www.youtube.com/watch?v=-bmNkTqvYfQ\&amp;t=84)

typescript

```
try {
  // Code that might throw an error
  throw new Error("Something went wrong!");
} catch (error: unknown) {
  // 'error' defaults to 'unknown' in modern TypeScript

  if (error instanceof Error) {
    // TypeScript now knows 'error' is an Error instance
    console.error(error.message);
  } else {
    // Handles cases where a plain string or something else was thrown
    console.error("An unexpected error occurred:", String(error));
  }
}
```

Use code with caution.

### Handling Asynchronous Code (`async/await`)

To catch errors from an asynchronous function or a Promise, you must use the `await` keyword inside the `try` block. Without `await`, an asynchronous error will bypass the `catch` block entirely. [link](https://stackoverflow.com/questions/50490176/typescript-angular-try-catch-any-error-in-try-block-not-going-to-catch-block)

typescript

```
async function fetchUserData() {
  try {
    const response = await fetch("https://example.com");
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch failed:", error.message);
    }
  }
}
```

Use code with caution.

### Advanced Patterns

### 1. Custom Error Classes

You can extend the native `Error` class to pass specialized debugging information through your application. [link](https://www.w3schools.com/typescript/typescript%5Ferror%5Fhandling.php)

typescript

```
class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "HttpError";
  }
}

try {
  throw new HttpError(404, "Not Found");
} catch (error) {
  if (error instanceof HttpError) {
    console.error(`Error ${error.status}: ${error.message}`);
  }
}
```

Use code with caution.

### 2. The Optional Catch Binding

If you do not need to inspect the error object at all, you can omit the variable declaration entirely. [link](https://stackoverflow.com/questions/70167274/errors-in-typescript-vs-try-catch)

typescript

```
try {
  parseComplexData();
} catch {
  console.error("Parsing failed. Using fallback data.");
}
```

Use code with caution.

### 3. Type Guards for Plain Objects

If your code interacts with third-party libraries that throw plain JavaScript objects instead of standard `Error` instances, use a type guard function to safely read the properties. [link](https://www.youtube.com/watch?v=-bmNkTqvYfQ\&amp;t=84)

typescript

```
function isObjectWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === "object" &amp;&amp;
    error !== null &amp;&amp;
    "message" in error &amp;&amp;
    typeof (error as any).message === "string"
  );
}

try {
  // Low-level database or network call
} catch (error) {
  if (isObjectWithMessage(error)) {
    console.log(error.message);
  }
}
```

Use code with caution.

If you are dealing with a specific scenario, tell me **what kind of operation** you are wrapping (e.g., JSON parsing, API calls) or if you want to explore **alternative error patterns** like Go-style tuples. [link](https://dev.to/ycmjason/stop-hating-try-catch-in-javascript-just-use-this-pattern-5b92)

- [link](https://dev.to/ycmjason/stop-hating-try-catch-in-javascript-just-use-this-pattern-5b92)\
  TRY {} CATCH {} ‒ FIXED! (with a surprisingly old trick)\
  Forced to use explicit typing In the previous example, all variables are typed automatically thanks to TypeScript's type inference...\
  [10:18](https://dev.to/ycmjason/stop-hating-try-catch-in-javascript-just-use-this-pattern-5b92)\
  DEV Community·YCMJason Codes
- [link](https://www.w3schools.com/typescript/typescript%5Ferror%5Fhandling.php)\
  TypeScript Error Handling - W3Schools\
  TypeScript Cert. TS Certificate. TypeScript Exercises. TS Editor TS Exercises TS Quiz TS Practice Problems TS Syllabus TS Study Pl...\
  W3Schools
- [link](https://www.youtube.com/watch?v=-bmNkTqvYfQ\&amp;t=84)\
  Use 'unknown' instead of 'any' in TypeScript (Try / Catch ...\
  The 'unknown' type is commonly encountered in the context of try-catch error handling in TypeScript. When using a try-catch block,\
  9m\
  YouTube·ByteGrad

Show all

## You said:how to avoid the redundant error instance check since all errors are normal errors unless you throw something weird in your own flawed code

You can bypass the explicit `instanceof` check by using **type assertions, custom wrapper utilities, or configuring a custom utility type** to safely tell TypeScript that your error is a standard `Error` instance.

While TypeScript defaults to `unknown` because third-party libraries and runtime environments (like network failures or browser APIs) can throw non-Error objects, you can use the following methods to clean up your code.

### 1. The Inline Type Assertion (`as`)

The fastest way to eliminate the check is to cast the caught error directly to the `Error` type using the `as` keyword.

typescript

```
try {
  JSON.parse("invalid-json");
} catch (error) {
  // Direct type assertion overrides the 'unknown' default
  const err = error as Error;
  console.error(err.message);
}
```

Use code with caution.

### 2. Standardized Wrapper Utility

If you want to completely clean up your code formatting and avoid typing `as Error` in every single block, create a reusable wrapper helper function.

typescript

```
// Helper utility
function toError(error: unknown): Error {
  if (error instanceof Error) return error;
  return new Error(String(error)); // Fallback safety catch
}

// Usage
try {
  // Your code here
} catch (rawError) {
  const error = toError(rawError);
  console.error(error.message); // Clean and guaranteed safe
}
```

Use code with caution.

### 3. Functional Wrapper Pattern (Eliminate `try/catch` entirely)

You can avoid writing both the `try/catch` blocks and the error checks by wrapping your functions in a Go-style result tuple wrapper.

typescript

```
function runSafe<t>(fn: () =&gt; T): [T, null] | [null, Error] {
  try {
    return [fn(), null];
  } catch (error) {
    return [null, error as Error];
  }
}

// Usage
const [data, error] = runSafe(() =&gt; JSON.parse("{invalid}"));

if (error) {
  console.error(error.message); // TypeScript knows this is an Error
}
```

Use code with caution.

### 4. Downgrade TypeScript Configuration (Not Recommended)

Prior to version 4.4, TypeScript defaulted caught errors to the `any` type, which allows you to access `.message` instantly without checks. You can force this behavior globally by changing your project configuration, though it disables all type safety for errors.

In your **`tsconfig.json`**:

json

```
{
  "compilerOptions": {
    "useUnknownInCatchVariables": false
  }
}
```

Use code with caution.

Would you like to see how to build an **asynchronous version of the wrapper** for API calls, or see how **modern framework libraries** handle global error catching?

- [link](https://www.zipy.ai/blog/typescript-errors)\
  TypeScript Error Handling: A guide to 11 TypeScript errors and their fixes\
  Feb 23, 2024 — Use Type Assertions: When the type declaration can't be modified, use type assertions. This tells TypeScript the expected type of ...\
  \
  Zipy.ai
- [link](https://www.linkedin.com/pulse/checked-unchecked-exceptions-java-ahmed-safwat)\
  Checked and Unchecked Exceptions in Java\
  Sep 24, 2023 — Unchecked exceptions, also known as runtime exceptions, are exceptions that do not need to be caught explicitly or declared using ...\
  \
  \
  LinkedIn
- [link](https://discuss.kotlinlang.org/t/reviving-checked-exceptions/28782)\
  Reviving Checked exceptions - Language Design\
  Jun 21, 2024 — To be fair, a third party library is also free to just throw an unchecked exception in Java, or even dereference a null pointer if...\
  \
  \
  Kotlin Discussions

Show all

## You said:catch (error as Error)?

No, **`catch (error as Error)` is invalid syntax** and will cause a TypeScript compilation error. TypeScript does not allow type annotations or type assertions directly inside the `catch` clause variable declaration.

### Why it fails

The JavaScript runtime dictates how `catch` variables are declared. TypeScript cannot change the syntax of the language itself, only the type definitions applied to it.

typescript

```
// ❌ SYNTAX ERROR - This will not compile
try {
  // ...
} catch (error as Error) {
  // ...
}
```

Use code with caution.

### The Correct 1-Line Workarounds

If your goal is to type and use the error as fast as possible on a single line, use one of these two valid patterns instead:

### 1. Assert inside the block (Recommended)

Declare the variable normally, then cast it on the very first line inside the block.

typescript

```
try {
  // ...
} catch (err) {
  const error = err as Error; // Valid 1-line assertion
  console.log(error.message);
}
```

Use code with caution.

### 2. Inline casting (Best for one-off uses)

If you only need to access a property once, you can wrap the variable and assert its type inline.

typescript

```
try {
  // ...
} catch (error) {
  console.log((error as Error).message); // Valid inline assertion
}
```

Use code with caution.

If you are trying to clean up a large codebase, I can show you how to set up an **ESLint rule** to automate these assertions, or help you write a **snippet shortcut** for your code editor. Which would you prefer?

- [link](https://typescript.tv/best-practices/error-ts1196-catch-clause-variable-type-annotation/)\
  Error TS1196: Catch clause variable type annotation\
  Mar 7, 2021 — TypeScript's compiler will throw an error when you assign a custom type to an error in a catch block:\
  \
  \
  TypeScript TV
- [link](https://github.com/microsoft/TypeScript/issues/8677)\
  Can't narrow error type in catch clause · Issue #8677 · microsoft/TypeScript\
  May 18, 2016 — ahejlsberg commented on May 19, 2016 We don't allow type annotations on catch clauses because there's really no way to know what t...\
  \
  \
  GitHub
- [link](https://typescript.tv/best-practices/error-ts1196-catch-clause-variable-type-annotation/)\
  Error TS1196: Catch clause variable type annotation\
  Mar 7, 2021 — Error TS1196: Catch clause variable type annotation TypeScript's compiler doesn't allow custom type annotations for errors in try-\
  \
  \
  TypeScript TV

Show all

## You said:can the error be unexpected if you do not throw something weird

<mark><strong><span>Yes, an error can absolutely be unexpected</span></strong></mark>, even if your own code is flawless and you only throw standard `Error` objects.

Because TypeScript compiles down to JavaScript, your application is at the mercy of the browser runtime, Node.js, and third-party dependencies. These external environments frequently throw objects that do not follow the standard `Error` schema.

The most common scenarios where unexpected error objects bypass standard assumptions include:

### 1. Browser Web APIs Throwing `DOMException`

When utilizing native browser features, the platform does not throw a standard JavaScript `Error`. Instead, it throws a `DOMException`. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

- **The Catch:** While it usually contains a `.message` property, it structurally originates from a completely different prototype chain than `Error`.
- **Example:** Aborting a `fetch()` request using an `AbortController` throws a `DOMException` with the name `"AbortError"`.

### 2. Third-Party Ecosystem Malpractice

You may write pristine code, but the libraries listed in your `package.json` might not.

- **The Catch:** Many popular npm packages (especially older utility tools or low-level network drivers) intentionally throw plain text strings or raw configuration objects when an operation fails.

- **Example:**\
  javascript

<!---->

```
// Inside a hypothetical unmaintained npm package:
if (!apiKey) {
  throw "API key is missing!"; // Throws a string, not an Error object
}
```

Use code with caution.\
If your TypeScript code catches this, accessing `error.message` will crash your app with a `TypeError: Cannot read properties of undefined`.

### 3. Asynchronous `Promise` Rejections

JavaScript allows developers to reject Promises with any payload. If you use a library that rejects a promise without passing an instantiated `Error`, that raw payload is what hits your `async/await` try-catch block.

- **Example:** `Promise.reject({ status: 500, data: "Server down" })` passes a plain object entirely lacking `.message` or `.stack` properties.

### 4. Browser Extensions and Injected Scripts

In frontend development, browser extensions (like ad blockers, password managers, or translation tools) inject custom JavaScript directly into your application's global runtime window. If an injected script crashes or throws an unhandled error inside an event listener, it can leak straight into your global application boundaries.

### Summary

TypeScript defaults caught items to `unknown` explicitly to protect you from these exact runtime scenarios. If you want to skip the syntax overhead while remaining resilient against external exceptions, your best choice is to enforce a **1-line assertion** or a custom **wrapper utility**:

typescript

```
try {
  await externalLibraryCall();
} catch (rawError) {
  // Safe single-line normalization
  const error = rawError instanceof Error ? rawError : new Error(String(rawError));
  console.error(error.message);
}
```

Use code with caution.

Would you like to look at **how to configure custom linting** to flag safe error handling, or explore **how specific network frameworks** isolate these runtime anomalies?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)\
  throw - JavaScript - MDN Web Docs - Mozilla\
  Jul 8, 2025 — Its execution generates an exception that penetrates through the call stack. For more information on error bubbling and handling, ...\
  MDN Web Docs
- [link](https://www.learningtypescript.com/articles/why-typescript-doesnt-include-a-throws-keyword)\
  Why TypeScript Doesn't Include a throws Keyword\
  Mar 26, 2024 — It is an unfortunate reality in coding that most lines of code can throw all sorts of errors unexpectedly. Even seemingly type-saf...\
  \
  \
  Learning TypeScript book
- [link](https://jessewarden.com/2021/04/errors-as-values.html)\
  Errors as Values: Free Yourself From Unexpected Runtime ...\
  2 Outcomes of Code vs. 3. All functions have only 2 possible outcomes: they work or they don't. This as opposed to 3 where it work...\
  \
  Jesse Warden

Show all</t>
``````

both off

```md

```
