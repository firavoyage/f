<!-- since ts does not have rust's `use`, it has to make the tradeoff. -->

is js polluting global namespace with lots of error types

April 24, 2026

No, JavaScript does **not** pollute the global namespace with a "lot" of error types. In standard ECMAScript, there are only **eight core error constructors** that exist globally. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects), [3](https://www.youtube.com/watch?v=Mj9kDbweZ8k)]

Global Standard Error Types

These built-in objects are always available in the global scope (e.g., as properties of `window` or `globalThis`): \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors), [2](https://lia.disi.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error.html)]

- **`Error`**: The generic base constructor for all other error types.
- **`EvalError`**: Used for errors regarding the global `eval()` function.
- **`RangeError`**: Thrown when a numeric variable or parameter is outside its valid range.
- **`ReferenceError`**: Occurs when de-referencing an invalid or undeclared reference.
- **`SyntaxError`**: Thrown when a piece of code contains invalid syntax.
- **`TypeError`**: Triggered when a value is not of the expected type.
- **`URIError`**: Thrown when global URI-handling functions like `encodeURI()` are passed invalid parameters.
- **`AggregateError`**: Wraps multiple errors into a single object, typically used with `Promise.any()`. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error), [2](https://medium.com/breadth-cloud/javascript-error-types-a-developers-guide-to-what-why-and-when-f39912f5ceb7), [3](https://raygun.com/blog/top-6-javascript-errors/), [4](https://medium.com/@rivoltafilippo/javascript-error-handling-patterns-and-best-practices-e90b5492213e), [5](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error), [6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)]

Why It Isn't Considered "Pollution"

While these objects are in the global namespace, they are essential parts of the language's core infrastructure, similar to `Object` or `Array`. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)]

- **Minimal Footprint**: Having only a few standard error types is relatively clean compared to thousands of custom globals that a poorly architected app might introduce.
- **Consistency**: Standardizing these types allows developers to reliably use `instanceof` checks (e.g., `if (e instanceof TypeError)`) across different libraries and environments.
- **Namespace Alternatives**: Modern development practices, such as using **ES modules**, keep most code (including custom error classes) within their own file-level scopes rather than the global object. \[[1](https://stackoverflow.com/questions/50457380/javascript-es6-modules-avoid-polluting-global-namespace), [2](https://www.tutorialspoint.com/article/what-is-global-namespace-pollution-in-javascript), [3](https://hennasingh.medium.com/scope-in-javascript-ae6c143a9cd9), [4](https://raygun.com/blog/top-6-javascript-errors/)]

Would you like to know how to create **custom error classes** that don't add to the global scope?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error)\
  Error - JavaScript - MDN Web Docs - Mozilla\
  Description. Runtime errors result in new Error objects being created and thrown. Error is a serializable object, so it can be clo...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)\
  JavaScript error reference - MDN Web Docs\
  Help improve MDN \* JavaScript. \* Tutorials and guides. \* JavaScript Guide. Introduction. Grammar and types. Control flow and error...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)\
  Standard built-in objects - JavaScript - MDN Web Docs\
  They include the basic Error type, as well as several specialized error types. \* Error. \* AggregateError. \* EvalError. \* RangeErro...\
  MDN Web Docs

Show all

really? there are many more

April 24, 2026

You're right that when you're actually writing code, you encounter many more names like `DOMException` or `OverconstrainedError`. However, there is a distinction between what belongs to **JavaScript the language** and what is added by the **environment** (like a web browser or Node.js). \[[1](https://nodejs.org/download/release/v8.8.1/docs/api/errors.html)]

1\. The Core Language (ECMAScript)

Strictly speaking, the JavaScript language itself only defines a small handful of error types. According to the [MDN JavaScript Error Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error), there are typically **8–9 standard built-in error objects**: \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error)]

- **Standard 8:** `Error`, `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, `URIError`, and `AggregateError`.
- **Recent/Non-standard:** Some environments also include `InternalError` (for things like "too much recursion") and the newer `SuppressedError`. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors), [2](https://medium.com/breadth-cloud/javascript-error-types-a-developers-guide-to-what-why-and-when-f39912f5ceb7), [3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Error), [4](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)]

2\. The Browser Environment (Web APIs)

The "pollution" you likely notice comes from **Web APIs**, which are not part of JavaScript but are provided by the browser. These add dozens of extra error-related constructors to the global `window` object, such as:

- **`DOMException`**: The catch-all for many web-related issues (e.g., `QuotaExceededError`, `AbortError`).
- **`OverconstrainedError`**: Specific to media streams and constraints.
- **`GPURuntimeError`**: For WebGPU operations. \[[1](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)]

3\. Node.js Environment

Similarly, Node.js has its own set of error classes that aren't part of the core JS language but exist in its environment, such as `AssertionError` or `SystemError`. \[[1](https://nodejs.org/api/errors.html), [2](https://nodejs.org/download/release/v8.8.1/docs/api/errors.html)]

Why this happens

Browsers and runtimes add these to the global namespace so you can easily check them with `instanceof`. While it technically "clutters" the global scope, it's generally seen as a tradeoff for **discoverability**—making it easy for any script to identify exactly what went wrong without having to import a specific "Errors" library first. \[[1](https://www.greatfrontend.com/questions/quiz/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it), [2](https://www.tutorialspoint.com/article/what-is-global-namespace-pollution-in-javascript)]

Are you seeing a **specific error name** that seems like it should be hidden or namespaced?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)\
  JavaScript error reference - MDN Web Docs\
  Help improve MDN \* JavaScript. \* Tutorials and guides. \* JavaScript Guide. Introduction. Grammar and types. Control flow and error...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)\
  Standard built-in objects - JavaScript - MDN Web Docs\
  They include the basic Error type, as well as several specialized error types. \* Error. \* AggregateError. \* EvalError. \* RangeErro...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)\
  DOMException - Web APIs | MDN\
  The following deprecated historical errors don't have an error name but instead have only a legacy constant code value and a legac...\
  MDN Web Docs

Show all
