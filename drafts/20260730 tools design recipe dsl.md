# how to run a dynamic js string in browsers

The recommended way to run a dynamic JavaScript string in a browser is by <mark>using the<span> </span><strong><code dir="ltr">new Function()</code><span> </span>constructor</strong></mark>, which isolates code from the local scope and performs better than standard evaluation. [link](https://medium.com/@bestowensss/4-ways-to-dynamically-execute-javascript-code-on-the-front-end-01648b4f527a)

While multiple methods exist, each handles variables, scope, and security differently.

### 1. The Modern Choice: `new Function()`

This method compiles the string into a JavaScript function block. [link](https://medium.com/@bestowensss/4-ways-to-dynamically-execute-javascript-code-on-the-front-end-01648b4f527a)

- **Scope**: Runs in the **global scope**, meaning it cannot access local variables from where it was called.
- **Arguments**: You can explicitly pass variables into the dynamic script. [link](https://stackoverflow.com/questions/78123214/is-there-a-way-to-run-javascript-from-a-string-in-browser-with-imported-librarie)

javascript

```
const codeString = "return num1 + num2;";
const dynamicFunc = new Function("num1", "num2", codeString);

console.log(dynamicFunc(5, 10)); // Outputs: 15
```

Use code with caution.

### 2. The Module Approach: Blob URLs

For execution that behaves exactly like an external JavaScript file, you can convert your string into a `Blob` and load it via a dynamic asynchronous `import()`. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

- **Scope**: Strictly isolated module scope.
- **Feature**: Allows you to use modern `import` and `export` statements inside your dynamic string. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

javascript

```
const codeString = `
  const message = "Hello from a dynamic module!";
  console.log(message);
`;

const blob = new Blob([codeString], { type: "text/javascript" });
const url = URL.createObjectURL(blob);

// Load and execute asynchronously
import(url).then(() => URL.revokeObjectURL(url));
```

Use code with caution.

### 3. The DOM Trick: Dynamic `<script>` Tag

You can programmatically create a `<script>` DOM node, inject your string as text content, and append it to the document header. [link](https://unixpapa.com/js/dyna.html)

- **Scope**: Global scope.
- **Behavior**: Runs automatically as soon as it touches the active DOM document tree. [link](https://medium.com/@bestowensss/4-ways-to-dynamically-execute-javascript-code-on-the-front-end-01648b4f527a)

javascript

```
const codeString = "console.log('Executed via script tag!');";
const script = document.createElement("script");

script.textContent = codeString;
document.head.appendChild(script);

// Clean up the DOM element afterwards
script.remove();
```

Use code with caution.

### 4. The Legacy Option: `eval()`

The built-in `eval()` function evaluates any JavaScript code string directly. [link](https://medium.com/@bestowensss/4-ways-to-dynamically-execute-javascript-code-on-the-front-end-01648b4f527a)

- **Scope**: Evaluates inside the **local scope** where it was invoked, letting it modify nearby local variables.
- **Drawback**: It is highly discouraged because it is slow and presents massive cross-site scripting (XSS) safety vulnerabilities if handling user input. [link](https://stackoverflow.com/questions/939326/execute-javascript-code-stored-as-a-string)

javascript

```
let localizedVariable = "Secret";
const codeString = "localizedVariable = 'Hacked';";

eval(codeString);
console.log(localizedVariable); // Outputs: "Hacked"
```

Use code with caution.

***

### Direct Comparison Overview

| Method                  | Scope Context | Performance      | Handles ES Modules? |
| ----------------------- | ------------- | ---------------- | ------------------- |
| **`new Function()`**    | Global        | Fast / Optimized | No                  |
| **Blob URL `import()`** | Module        | Fast / Cached    | **Yes**             |
| **`<script>` Tag**      | Global        | Medium           | No                  |
| **`eval()`**            | Local         | **Slow**         | No                  |

### Important Security Warning

Never pass unsanitized user inputs (like text from a query parameter or input field) into any of these dynamic evaluation tools. Doing so exposes your application to malicious **Cross-Site Scripting (XSS)** injections. [link](https://medium.com/@bestowensss/4-ways-to-dynamically-execute-javascript-code-on-the-front-end-01648b4f527a)

If you'd like to share **what kind of code** you are dynamically generating, I can help you implement the safest architecture for it. Are you handling **user-written code** or building **dynamic parameters**?

- [link](https://medium.com/@bestowensss/4-ways-to-dynamically-execute-javascript-code-on-the-front-end-01648b4f527a)\
  4 ways to dynamically execute JavaScript code on the front end\
  Jul 8, 2025 — The first method: eval. The second way: new Function. The third way: setTimeout. The fourth way: script tag. Application Scenario.\
  Medium·bestcode
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)\
  JavaScript modules - MDN Web Docs\
  Apr 4, 2026 — A recent addition to JavaScript modules functionality is dynamic module loading. This allows you to dynamically load modules only ...\
  MDN Web Docs
- [link](https://forum.keyboardmaestro.com/t/macro-execute-dynamic-javascript-in-browser/26445)\
  MACRO: Execute Dynamic Javascript in Browser\
  Feb 9, 2022 — Execute Dynamic Javascript in Browser. REQUIRES KM version 10+. This macro is basically the same as the "Execute Javascript in Bro...\
  Keyboard Maestro Discourse

Show all

## pros cons

### `new Function()`

#### Pros

- **Performance:** Compiled like regular functions by the browser engine.
- **Scope Protection:** Isolated from local variable scope.
- **Parameter Passing:** Easily accepts arguments like a standard function.

#### Cons

- **No Modules:** Cannot use native `import` or `export` syntax.
- **Global Access:** Can still modify global window properties.

***

### Blob URLs with `import()`

#### Pros

- **Modern Features:** Supports ES Modules and asynchronous `await`.
- **Strict Isolation:** Completely isolated from local and global variables.
- **No Garbage:** `URL.revokeObjectURL()` prevents memory leaks.

#### Cons

- **Async Only:** Must use Promises or `async/await` syntax.
- **CSP Blocks:** Often blocked by strict Content Security Policies.

***

### Dynamic `<script>` Tags

#### Pros

- **Standard Behavior:** Behaves identically to standard external script files.
- **Inspectable:** Code appears clearly inside browser developer tools.

#### Cons

- **DOM Overhead:** Requires touching and cleaning up the DOM tree.
- **Pollution:** Creates global variables if variables are not scoped properly.

***

### `eval()`

#### Pros

- **Local Access:** Reads and updates variables inside the surrounding function.
- **Simplicity:** Short, native syntax requiring zero setup.

#### Cons

- **Security Risk:** Opens massive vulnerabilities to Cross-Site Scripting (XSS).
- **Performance Hit:** Forces JavaScript engines to disable critical compiler optimizations.
- **Debugging Nightmare:** Difficult to trace errors in developer consoles.

***

To help you choose, tell me:

- What **specific task** is this dynamic code trying to perform?
- Does it need to **read local variables**, or should it run **completely isolated**?

I can recommend the absolute safest approach for your exact use case.

# how to run a dynamic js string in nodejs

To run a dynamic JavaScript string in Node.js, the safest and most standard approach is to <mark>use the built-in<span> </span><span><a rel="noopener" href="https://nodejs.org/api/vm.html"><strong><code dir="ltr">node:vm</code><span> </span>module</strong></a></span></mark>. This module compiles and executes code inside a isolated V8 Virtual Machine context. [link](https://nodejs.org/api/vm.html)

Here are the three primary methods to execute strings, ranked from best practice to discouraged.

***

### 1. Using the `node:vm` Module (Recommended)

The `vm` module allows you to sandbox the code execution by defining exactly what global variables the dynamic string has access to. [link](https://nodejs.org/api/vm.html)

javascript

```
const vm = require('node:vm');

const codeString = `
  const result = num1 + num2;
  console.log('Inside VM:', result);
  result; // The last expression is returned
`;

// Define a sandbox context containing variables the string can use
const sandbox = {
  num1: 10,
  num2: 20,
  console // Pass the console object if you want the string to be able to log
};

// Contextify the sandbox
vm.createContext(sandbox);

// Execute the code string within that specific context
const output = vm.runInContext(codeString, sandbox);

console.log('Returned Output:', output);
// Output:
// Inside VM: 30
// Returned Output: 30
```

Use code with caution.

### 2. Using the `Function` Constructor

If you do not need an isolated sandbox and just want to run a piece of code that returns a value, you can pass the string to the `Function` constructor. This creates a new function scoped globally, meaning it cannot access local variables from where it is called. [link](https://medium.com/@bestowensss/4-ways-to-dynamically-execute-javascript-code-on-the-front-end-01648b4f527a)

javascript

```
const codeString = 'return a * b;';

// The last argument is the body of the function; preceding ones are arguments
const dynamicFunc = new Function('a', 'b', codeString);

const result = dynamicFunc(5, 4);
console.log(result); // 20
```

Use code with caution.

### 3. Using `eval()` (Discouraged)

The native `eval()` function executes strings directly within the local scope. This is heavily discouraged due to extreme security risks and poor execution optimization. [link](https://stackoverflow.com/questions/46561959/execute-javascript-functions-from-a-string-in-nodejs)

javascript

```
const localValue = 100;
const codeString = 'localValue + 50;';

const result = eval(codeString);
console.log(result); // 150
```

Use code with caution.

***

### Comparison of Methods

| Method           | Scope Isolation       | Can Access Local Scope? | Performance           |
| ---------------- | --------------------- | ----------------------- | --------------------- |
| **`node:vm`**    | High (Custom Sandbox) | No                      | Good (Pre-compilable) |
| **`Function()`** | Medium (Global Scope) | No                      | Decent                |
| **`eval()`**     | None (Local Scope)    | Yes                     | Poor                  |

⚠️ **Security Warning**: None of these methods are fully secure sandboxes against malicious code execution. Never execute raw, un-sanitized strings that originate from user input, as it allows arbitrary code execution on your server. [link](https://nodejs.org/api/vm.html)

If you would like to proceed with a specific use case, please share:

- Where is the **dynamic string coming from**? (e.g., user input, database, external file)

- Does the code string need to **modify variables** in your main script?

- Do you need to restrict access to **Node.js core modules** like `fs` or `http`?

- [link](https://nodejs.org/api/vm.html)\
  VM (executing JavaScript) | Node.js v26.5.1 Documentation\
  The node:vm module enables compiling and running code within V8 Virtual Machine contexts. The node:vm module is not a security mec...\
  Node.js

- [link](https://stackoverflow.com/questions/46561959/execute-javascript-functions-from-a-string-in-nodejs)\
  Execute JavaScript functions from a string in nodejs\
  Oct 4, 2017 — You can use the VM API for NodeJS to execute JavaScript functions from a string. Here's an example: \* \*\*const context = new vm.cre...\
  Stack Overflow

- [link](https://www.reddit.com/r/learnjavascript/comments/t1jsb3/is%5Fthere%5Fa%5Fway%5Fto%5Frun%5Fjavascript%5Ffrom%5Fa%5Fstring/)\
  Is there a way to run Javascript from a string? - Reddit\
  Feb 26, 2022 — The alternative Function() is essentially just as dangerous, but only slightly less so. Either way the key is that you want to avo...\
  Reddit·r/learnjavascript

Show all

# . thinking

feels new function is the choice.

