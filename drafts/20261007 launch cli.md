# .

```
 ~ % launch
/home/fira/.bun/bin/launch: 1: Syntax error: word unexpected (expecting ")")
 ~ % launch
/home/fira/.bun/bin/launch: 1: Syntax error: word unexpected (expecting ")")
 ~ % launch
/home/fira/.bun/bin/launch: 2: Syntax error: word unexpected (expecting ")")
 ~ % launch
 ~ % launch
1
 ~ % launch
1
 ~ % launch
2
 ~ % launch
2
 ~ % launch
2
 ~ % launch
2
 ~ % launch
/home/fira/Documents/f/launch/source/cli/index.js:3
log(1)
^

ReferenceError: log is not defined
    at Object.<anonymous> (/home/fira/Documents/f/launch/source/cli/index.js:3:1)
    at Module._compile (node:internal/modules/cjs/loader:1812:14)
    at Object..js (node:internal/modules/cjs/loader:1943:10)
    at Module.load (node:internal/modules/cjs/loader:1533:32)
    at Module._load (node:internal/modules/cjs/loader:1335:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.14.0
 ~ % launch
2 | #!/usr/bin/env bun
3 |
    ^
ReferenceError: log is not defined
      at /home/fira/Documents/f/launch/source/cli/index.js:3:1

Bun v1.3.14 (Linux x64)
 ~ % launch
2 | #!/usr/bin/env b
3 |
    ^
ReferenceError: log is not defined
      at /home/fira/Documents/f/launch/source/cli/index.js:3:1

 ~ % launch
(node:2198906) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///home/fira/Documents/f/launch/source/cli/index.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /home/fira/Documents/f/launch/source/cli/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
node:internal/modules/package_json_reader:301
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
        ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'lib' imported from /home/fira/Documents/f/launch/source/cli/index.js
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:301:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:859:18)
    at defaultResolve (node:internal/modules/esm/resolve:991:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:719:20)
    at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:736:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:765:52)
    at #resolve (node:internal/modules/esm/loader:701:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:621:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:160:33) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v24.14.0
 ~ % launch
(node:2198923) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///home/fira/Documents/f/launch/source/cli/index.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /home/fira/Documents/f/launch/source/cli/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
node:internal/modules/package_json_reader:301
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
        ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'lib' imported from /home/fira/Documents/f/launch/source/cli/index.js
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:301:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:859:18)
    at defaultResolve (node:internal/modules/esm/resolve:991:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:719:20)
    at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:736:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:765:52)
    at #resolve (node:internal/modules/esm/loader:701:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:621:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:160:33) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v24.14.0
 ~ % launch
1
 ~ % launch
1
 ~ % launch
1
 ~ % launch
(node:2199612) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///home/fira/Documents/f/launch/source/cli/index.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /home/fira/Documents/f/launch/source/cli/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
node:internal/modules/package_json_reader:301
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
        ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'lib' imported from /home/fira/Documents/f/launch/source/cli/index.js
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:301:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:859:18)
    at defaultResolve (node:internal/modules/esm/resolve:991:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:719:20)
    at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:736:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:765:52)
    at #resolve (node:internal/modules/esm/loader:701:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:621:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:160:33) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v24.14.0
 ~ % launch
node:internal/modules/package_json_reader:301
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
        ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'lib' imported from /home/fira/Documents/f/launch/source/cli/index.js
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:301:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:859:18)
    at defaultResolve (node:internal/modules/esm/resolve:991:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:719:20)
    at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:736:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:765:52)
    at #resolve (node:internal/modules/esm/loader:701:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:621:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:160:33) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v24.14.0
 ~ % launch
1
 ~ % which launch
/home/fira/.bun/bin/launch
 ~ % cat /home/fira/.bun/bin/launch
#!/usr/bin/env bun

import 'lib/global'

log(1)
 ~ % open /home/fira/.bun/bin/
```

# how to create a nodejs cli

## how to create a nodejs cli

To create a **Node.js CLI (Command Line Interface)**, you need to initialize a Node.js project, add a **shebang (`#!/usr/bin/env node`)** to your entry file, link your command in `package.json`, and use `npm link` to make it globally available on your terminal. [link](https://gomzkov.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5)

Here is a step-by-step guide to building a simple CLI tool that greets users.

### 1. Initialize Your Project

Create a new directory for your project and initialize it: [link](https://javascript.plainenglish.io/from-clicks-to-commands-my-journey-building-a-cli-tool-with-node-js-0d9b31c81a14)

bash

```
mkdir my-node-cli
cd my-node-cli
npm init -y
```

Use code with caution.

### 2. Create the CLI Script

Create a file named `index.js` in your root directory. Add the following code: [link](https://gomzkov.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5)

javascript

```
#!/usr/bin/env node

// The line above (shebang) tells the OS to run this script using Node.js

const args = process.argv.slice(2);
const name = args[0] || 'World';

console.log(`Hello, ${name}! Welcome to your custom Node.js CLI!`);
```

Use code with caution.

_Note: `process.argv` contains all command-line arguments passed. `slice(2)` excludes the first two internal paths (the Node executable path and the script path), leaving only your custom inputs._ [link](https://oneuptime.com/blog/post/2026-01-22-nodejs-create-cli-tool/view)

### 3. Configure `package.json`

Open your `package.json` file. You need to map your command name to your `index.js` file using the `bin` field. Also, ensure you enable ES modules if you plan to use modern imports: [link](https://gomzkov.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5)

json

```
{
  "name": "my-node-cli",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "greetme": "./index.js"
  }
}
```

Use code with caution.

### 4. Link and Test Locally

To test the tool globally on your local machine, run the following command in your project root: [link](https://gomzkov.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5)

bash

```
npm link
```

Use code with caution.

Now, you can type your custom command anywhere in your terminal: [link](https://gomzkov.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5)

bash

```
greetme Alice
# Output: Hello, Alice! Welcome to your custom Node.js CLI!
```

Use code with caution.

***

### 🔥 Leveling Up Your CLI (Essential Packages)

Most professional CLI tools don't rely on raw `process.argv` parsing. You can easily enhance user experience using popular ecosystem libraries: [link](https://blog.logrocket.com/creating-a-cli-tool-with-node-js/)

- **Command & Option Parsing:** Use Commander.js or Yargs to manage complex sub-commands, flags, and automatic `--help` menus.
- **Interactive Prompts:** Use @inquirer/prompts or Clack to ask users questions via checkboxes, input fields, and lists.
- **Styling & Color:** Use Chalk to make your terminal text vibrant and colored. [link](https://levelup.gitconnected.com/create-publish-node-js-cli-typescript-ebc0ed3fcb98)

If you prefer a step-by-step visual demonstration on handling advanced interactive menus and publishing your tool, check out this 5-minute video guide:

3:57

[link](https://www.youtube.com/watch?v=GupmEQFkDJM)

YouTube

27K views · 3 years ago

YouTube · Warp

Would you like help expanding this code to use **interactive prompts**, or are you ready to learn how to **publish it to npm** so others can download it?

- [link](https://levelup.gitconnected.com/create-publish-node-js-cli-typescript-ebc0ed3fcb98)\
  Level Up Coding\
  Create & Publish Node.js CLI (Typescript) | by Itsuki | Level Up Coding\
  Dec 28, 2024 — \`@inquirer/prompts\`, Implement CLI logic in \`src/index.ts\` starting with \`#!/usr/bin/env node\`, utilizing \`@inquirer/prompts\` and ...
- [link](https://gomzkov.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5)\
  Medium·Evgeni Gomziakov\
  Building a CLI App with Node.js - Medium\
  Feb 9, 2024 — Create a file named index.js in your project folder. This will be where our CLI starts. Add a shebang at the top to get this CLI o...
- [link](https://blog.logrocket.com/creating-a-cli-tool-with-node-js/)\
  LogRocket Blog\
  Creating a CLI tool with Node.js - LogRocket Blog\
  Initialize Node.js project … chalk for colored console output, Define commands: list (displays tasks via conf and color-codes via ...

Show all

## why can shebang exist in js

A **shebang (`#!`)** can exist in a JavaScript file because <mark><strong>modern JavaScript engines and build tools explicitly ignore it</strong><span> </span>so that it doesn't cause a syntax error</mark>.

Normally, `#!` is invalid syntax in JavaScript. However, it is uniquely allowed at the very beginning of a file due to two main reasons:

### 1. Official JavaScript Support (ECMAScript Standard)

In **2023**, the ECMAScript standard officially adopted the **Hashbang Grammar** proposal.

This update standardized how JavaScript engines (like V8 in Google Chrome and Node.js) handle shebangs. The specification states that if a JavaScript file starts with `#!`, the engine must treat that entire first line as a **single-line comment**. Because it is treated as a comment, it executes flawlessly without throwing a `SyntaxError`.

### 2. Node.js Strips It Automatically

Even before it became an official part of the JavaScript language standard, Node.js had a built-in workaround. When you execute a file, Node.js internally checks if the file begins with `#!`. If it does, Node.js **strips or masks that first line** before passing the rest of the code to the JavaScript compiler.

### Why do operating systems need it?

When you run a file directly in a Unix-like terminal (Mac or Linux) using `./index.js`, the Operating System kernel reads the very first two bytes of the file.

- If it sees `#!`, it knows: _"This is a script, not a compiled binary."_
- It then looks at the path right after it (`/usr/bin/env node`) and launches that program (Node.js) to interpret the rest of the file.

Without the shebang, your computer would try to execute your JavaScript file as a shell script, resulting in rapid-fire bash errors.

Would you like to see how to handle shebangs if you are bundling or minifying your CLI tool with tools like **Webpack**, **Rollup**, or **esbuild**?

## how to use other runtimes

To run a command-line interface tool with other modern JavaScript runtimes like **Deno** or **Bun**, you follow a very similar process to Node.js, but with simpler shebang configurations and less boilerplate.

Because both Deno and Bun have built-in support for executing files directly and handling TypeScript natively, you don't even need compilation steps.

***

### 1. Using Bun

**Bun** is designed as a drop-in replacement for Node.js, so it can run standard Node.js CLI scripts out of the box, but it executes much faster.

#### The Shebang for Bun

To target the Bun runtime explicitly, use this shebang at the top of your script (which can be `.js` or `.ts`):

javascript

```
#!/usr/bin/env bun

const args = Bun.argv.slice(2);
const name = args[0] || 'World';

console.log(`Hello, ${name}! Powered by Bun.`);
```

Use code with caution.

#### Making it executable

Unlike Node.js, which heavily relies on `package.json` and `npm link`, Bun lets you natively compile your script into a standalone, single-file executable binary that runs on machines without Bun installed:

bash

```
bun build --compile ./index.ts --outfile my-cli
./my-cli Alice
```

Use code with caution.

***

### 2. Using Deno

**Deno** is secure by default, meaning your CLI script cannot access the file system, network, or environment variables unless the user explicitly grants permission via flags.

#### The Shebang for Deno

Deno requires flags within the shebang line if your CLI needs special permissions (like reading environment variables or files):

typescript

```
#!/usr/bin/env -S deno run --allow-env

const name = Deno.args[0] || 'World';
console.log(`Hello, ${name}! Powered by Deno.`);
```

Use code with caution.

_Note: The `-S` flag tells the `/usr/bin/env` command to split the arguments properly so Deno understands the `run` command and permissions._

#### Making it executable

Deno has a built-in `install` command that links your script to a global terminal command automatically:

bash

```
deno install --name my-deno-cli index.ts
my-deno-cli Bob
```

Use code with caution.

***

### Runtime Comparison

| Feature                  | Node.js                         | Bun                              | Deno                                |
| ------------------------ | ------------------------------- | -------------------------------- | ----------------------------------- |
| **Shebang Line**         | `#!/usr/bin/env node`           | `#!/usr/bin/env bun`             | `#!/usr/bin/env -S deno run`        |
| **Arguments API**        | `process.argv`                  | `Bun.argv` or `process.argv`     | `Deno.args`                         |
| **TypeScript Support**   | Requires a build step / `tsx`   | Native (No config needed)        | Native (No config needed)           |
| **Binary Creation**      | Third-party tools (e.g., `pkg`) | Built-in (`bun build --compile`) | Built-in (`deno compile`)           |
| **Security Permissions** | Unrestricted                    | Unrestricted                     | Sandboxed (Requires explicit flags) |

Would you like to see how to write a **cross-runtime CLI** that works perfectly on Node, Bun, and Deno at the same time, or do you want to dive deeper into **building a standalone executable binary** for one of these?

## what does the shebang mean

The word **"shebang"** (also called hashbang, pound-bang, or shabang) is <mark>a combination of the nicknames for its two characters:<span> </span><strong><code dir="ltr">#</code><span> </span>(hash)</strong><span> </span>and<span> </span><strong><code dir="ltr">!</code><span> </span>(bang)</strong></mark>.

In programming, this line tells the operating system's kernel **which interpreter to use** to execute the rest of the file.

Here is exactly what each part of a standard shebang line means, broken down using `#!/usr/bin/env node`:

### 1. The Characters: `#!`

- **`#` (Hash/Pound):** In almost all scripting languages, a hash character starts a comment. This ensures that when the interpreter finally reads the file, it skips this first line instead of crashing.
- **`!` (Bang):** This is a special marker for the Unix kernel. When you try to run a script file directly (e.g., `./myscript`), the computer looks at the very first two bytes of the file. If it sees `#!`, it stops trying to run it as a regular computer program and knows: _"Ah, this is a text script. I need to load an interpreter for this."_

### 2. The Program Finder: `/usr/bin/env`

Instead of pointing directly to Node.js or Python, most modern scripts point to `env`.

- `/usr/bin/env` is a utility tool that is guaranteed to sit in the exact same spot on almost every Unix-like system (Mac, Linux, Ubuntu, etc.).
- Its job is to look into your system's **`PATH`** (your environment variables) to find where a specific program is installed on _your_ specific computer.

### 3. The Target Interpreter: `node`

This is the name of the executable you want to run.

By putting it all together, `#!/usr/bin/env node` tells your computer:

> _"Look up where `node` is installed on this machine, launch it, and feed the rest of this file into it."_

***

### Direct Comparison: Why use `/usr/bin/env`?

You could theoretically write your shebang to point directly to Node, but it often causes compatibility issues across different machines:

| Shebang Style                        | Example                         | Pros & Cons                                                                                                                                                                             |
| ------------------------------------ | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dynamic Path** (Recommended)       | `#!/usr/bin/env node`           | **Pro:** Highly flexible. It will find Node.js wherever the user installed it (via NVM, Homebrew, Apt, etc.).                                                                           |
| **Hardcoded Path** (Not Recommended) | `#!/usr/bin/usr/local/bin/node` | **Con:** Rigid. If another user has Node installed under `/usr/bin/node` instead of `/usr/local/bin/node`, your CLI tool will instantly crash with a "No such file or directory" error. |

Are you running into a specific issue where your shebang **isn't being recognized**, or are you developing your CLI on a **Windows machine** (which handles execution differently)?

# 

