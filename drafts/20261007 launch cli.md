# . test: install (link) cli

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

# . path, xdg or not

```
 ...f/lib/test % /usr/bin/env bun "/home/fira/Documents/f/launch/source/cli/index.js"
/home/fira/.local/share/launch /home/fira/.config/launch /home/fira/.cache/launch
 ...f/lib/test % /usr/bin/env bun "/home/fira/Documents/f/launch/source/cli/index.js"
/home/fira/.launch/data /home/fira/.launch/config /home/fira/.launch/cache
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

# why does xdg use .local/share instead of .data

## why does xdg use .local/share instead of .data

The **XDG Base Directory Specification** defaults to `~/.local/share` for user-specific data files (the fallback for `$XDG_DATA_HOME`) instead of `~/.data` to explicitly **mirror the traditional UNIX filesystem hierarchy** on a per-user level. [link](https://superuser.com/questions/1170793/why-is-local-share-a-two-level-directory)

When freedesktop.org (formerly the X Desktop Group) created the spec, they didn't want to invent a completely new naming system. Instead, they designed a system where a user's home directory acts like a miniature, self-contained root (`/`) filesystem. [link](https://lists.freedesktop.org/archives/xdg/2008-November/010024.html)

The choice comes down to three main architectural reasons:

### 1. Parallels with `/usr` and `/usr/local`

In the Filesystem Hierarchy Standard (FHS), system-wide, architecture-independent application data is stored in `/usr/share` or `/usr/local/share`. [link](https://superuser.com/questions/1170793/why-is-local-share-a-two-level-directory)

- By structuring the user's local directory as `~/.local/`, XDG allows for a predictable overlay system.
- For example, looking for data files follows a logical hierarchy from specific to broad: `~/.local/share/` → `/usr/local/share/` → `/usr/share/`. [link](https://www.reddit.com/r/linuxquestions/comments/vqt7f0/filesystem%5Fstandards%5Fwrt%5Flocalshare/)

### 2. The Multi-Purpose `~/.local` Hierarchy

Using a single flat directory like `~/.data` would break consistency when handling other types of local user files. The `~/.local` directory acts as a clean bucket for user-level equivalents of standard system folders: [link](https://www.reddit.com/r/linux/comments/106go6k/xdg%5Fstandards%5Fwhat%5Fwent%5Fwrong%5Fand%5Fwhat%5Fwent%5Fright/)

- `~/.local/bin/` for user-installed executables and scripts.
- `~/.local/lib/` for user-specific programming libraries.
- `~/.local/share/` for architecture-independent application data (like game saves or databases). [link](https://www.b4x.com/android/forum/threads/file-dirdata-should-return-config-or-local-share-instead-of-file-dirapp-on-linux.170846/)

If they had used `~/.data`, they would have had to create unrelated folders for user binaries (like `~/.bin` or `~/.exec`), further cluttering the home directory—which is exactly what the XDG spec was trying to prevent. [link](https://www.b4x.com/android/forum/threads/file-dirdata-should-return-config-or-local-share-instead-of-file-dirapp-on-linux.170846/)

### 3. Historical Discussion on `~/.data`

During the early drafting stages of the specification, a unified `~/.data` directory _was_ proposed by some developers to keep paths shorter. However, the community ultimately decided that aligning with the existing POSIX/UNIX filesystem mental model (`local/share`) was cleaner and more intuitive for developers who were already used to writing code that dealt with `/usr/local/share`. [link](https://lists.freedesktop.org/archives/xdg/2008-November/010024.html)

Are you trying to **override the default paths** on your own system, or are you **developing an application** and deciding how to handle user data storage?

- [link](https://linux.codidact.com/posts/289749)\
  Codidact\
  Why does $XDG\_DATA\_HOME default to ~/.local/share ...\
  I wasn't there two decades ago when the spec was first … spec they're clearly attempting to establish a parallel with /usr/local .
- [link](https://lists.freedesktop.org/archives/xdg/2008-November/010024.html)\
  Freedesktop.org\
  XDG Base Directory Conclusions \[was Why .local/share ?]\
  data, which we can think of as a unified personal share/, doc/, lib/, etc. to clearly distinguish them from the FHS structure.
- [link](https://www.reddit.com/r/linux/comments/106go6k/xdg%5Fstandards%5Fwhat%5Fwent%5Fwrong%5Fand%5Fwhat%5Fwent%5Fright/)\
  Reddit\
  XDG standards: what went wrong and what went right? : r/linux\
  Jan 8, 2023 — local/share directory. solves certain issues with communication between some sandboxed apps. Some things feels weird, and others a...

Show all

## why .config and .cache alongside not .data

The reason the specification uses `~/.config` and `~/.cache` as top-level hidden folders—rather than putting them inside `~/.local` alongside data—comes down to **how differently these three types of data must be treated** by users, scripts, and backup tools.

While `~/.local` mimics a full Unix system, `~/.config` and `~/.cache` were given their own top-level directories to make managing a home directory significantly cleaner.

### 1. Different Lifecycles and Backup Rules

The absolute most important reason to separate these three is data preservation. They require entirely different backup and syncing strategies:

- **`~/.cache` (Disposable):** This directory contains ephemeral data like web browser caches, thumbnails, and temporary download parts. It can be completely deleted at any moment without losing user settings or valuable data. Because of this, users explicitly exclude `~/.cache` from system backups.
- **`~/.config` (High Value / Human Readable):** This contains user preferences and settings. These files are typically very small, text-based, and highly valuable. Many users track their `~/.config` folder using **Git** (often called "dotfiles" repositories) so they can sync their settings across multiple computers.
- **`~/.local/share` (Internal / Large Data):** This contains application state data like local email databases, game saves, fonts, and application histories. This data is critical and needs to be backed up, but it is often very large, binary, and constantly changing—making it a terrible fit for a Git repository.

If everything lived in a single `~/.data/` folder (e.g., `~/.data/config`, `~/.data/cache`), it would be incredibly messy to run a backup or version-control your settings without writing complex exclusion rules.

### 2. Conceptual Isolation

The XDG creators wanted a clean mental model for what each directory represents:

| Directory            | System Equivalent          | Purpose                             | What lives there                                   |
| -------------------- | -------------------------- | ----------------------------------- | -------------------------------------------------- |
| **`~/.config`**      | `/etc`                     | User preferences and configurations | `mimeapps.list`, application `*.conf` files        |
| **`~/.cache`**       | `/var/cache`               | Regenerable, transient files        | Thumbnail previews, package manager caches         |
| **`~/.local/share`** | `/usr/share` or `/var/lib` | Core data needed for apps to run    | Fonts, icon themes, game save states, flatpak data |

By putting config and cache at the top level, they act as direct user-space equivalents to the system-wide `/etc` and `/var/cache` directories, rather than being buried inside a data hierarchy.

### 3. The `$XDG` Environment Variables Cleanly Separate Them

Because they are fundamentally different, the specification allows you to easily move them to entirely different physical drives using environment variables.

For example, a user with a fast but small SSD and a slow, large HDD can easily configure their system to keep high-speed configurations and caches on the SSD while offloading heavy data to the hard drive:

bash

```
export XDG_CONFIG_HOME="/ssd/home/user/.config"
export XDG_CACHE_HOME="/ssd/home/user/.cache"
export XDG_DATA_HOME="/hdd/home/user/.local/share"
```

Use code with caution.

If everything were hardcoded under a unified `~/.data` structure, separating these storage layers on a system level would be far more difficult.

Are you currently managing a **dotfiles repository** for your configurations, or are you looking for a clean way to **exclude caches and data** from your system backups?

## why .config and .cache alongside .local/share instead of .data

The reason the specification uses `~/.config` and `~/.cache` alongside `~/.local/share` (instead of using `~/.data`) comes down to **historical compromises during the drafting process and a strict adherence to Unix philosophy**.

When the freedesktop.org community was actively debating the specification between 2002 and 2003, a unified `~/.data/` top-level directory _was_ heavily considered. However, the mailing list discussions ultimately rejected it for a few core reasons:

### 1. The Word "Data" is Too Ambiguous

During the design phase, developers argued that **everything a computer stores is technically "data."**

- If a unified `~/.data/` directory was created, it would inevitably become a dumping ground.
- Developers would struggle to decide whether a configuration file or a cache file counted as "data," leading back to the exact same chaotic clutter the specification was trying to fix (where every app just made its own `~/.appname` folder).
- By explicitly naming the top-level directories by their _function_ (`.config` for settings, `.cache` for disposable files), the spec left no room for developer ambiguity.

### 2. Matching `/etc` and `/var` at the Top Level

In a traditional Linux system, configuration files do not live inside a subfolder of system data; they live in `/etc`. Disposable caches live in `/var/cache`.

The XDG creators wanted the user's home directory to feel familiar to Unix administrators.

- **`~/.config`** is your personal `/etc`.
- **`~/.cache`** is your personal `/var/cache`.
- **`~/.local`** is your personal `/usr/local`.

Putting config and cache _inside_ a `~/.data` folder would break this mental model. It would be the equivalent of putting the global `/etc` directory inside `/usr/share/data/etc`, which no Unix developer would expect.

### 3. The Compromise of `.local/share`

You might wonder: _If they wanted top-level folders, why isn't data just called `~/.data`?_

This is where the standard reflects a historical compromise. The original draft of the spec actually proposed a top-level **`~/.share`** folder to pair with `~/.config` and `~/.cache`.

However, around the same time, the community realized users also needed a place to put personal compiled binaries (`bin/`) and libraries (`lib/`). Instead of creating four or five new hidden folders at the top level of the home directory, they decided to bundle all architecture-related folders under **`~/.local/`** (mimicking `/usr/local/`). Thus, the data component naturally became `~/.local/share/`.

Ultimately, keeping `.config` and `.cache` at the top level alongside `.local` preserved a clean, system-like hierarchy, while avoiding the confusing umbrella term of "data."

Are you trying to **restructure your home directory** to make it cleaner, or are you writing a **script/program** and want to ensure it follows the correct XDG specifications?

## why is unix fhs this way

The **UNIX Filesystem Hierarchy Standard (FHS)** is structured the way it is <mark>because of<span> </span><strong>physical hardware limitations in the 1970s</strong></mark>.

It was not designed from scratch by a committee looking for the most logical system; instead, it evolved organically out of a desperate need to split up files when **early hard drives ran out of storage space**.

The entire structure of a modern Linux system today—including the XDG standard we discussed—traces back to a specific hardware crisis faced by Ken Thompson and Dennis Ritchie (the creators of UNIX) on a **PDP-11 computer in 1971**.

***

### 1. The Multi-Drive Storage Crisis (The Origin of `/usr`)

In the earliest days of UNIX, all files fit on a single, tiny disk. The system directory tree was simple: everything lived in the root directory (`/`).

- `/bin` held the core executable binaries.
- `/etc` held system configuration files.
- `/tmp` held temporary storage.

When the team bought a second hard drive (a fast but small RK05 drive), it wasn't large enough to hold everything. They decided to mount this second drive as a directory called **`/usr`** (which originally stood for "user").

Because the primary root drive was completely full, they moved all the user home directories to the second drive (`/usr/dmr`, `/usr/ken`). However, the operating system's software binaries were also growing too large for the root drive. To free up space on the root drive, they copied the less-critical system binaries over to the second drive, creating **`/usr/bin`**.

**This established the fundamental UNIX rule:**

- **`/` (Root):** Must contain only the absolute bare minimum needed to boot the computer, mount other drives, and fix the system if it breaks.
- **`/usr`:** Contains the bulk of the operating system, intended to be mounted _after_ the initial boot process.

### 2. The Shift to "Read-Only" Shared Systems

As UNIX evolved in the 1980s and 1990s, computers began to be networked together. Large universities and corporations would buy one massive, expensive central server and dozens of cheap client workstations.

To save money and disk space, administrators wanted to share the operating system files across the network. A single copy of `/usr` could be shared as **read-only** to hundreds of workstations.

This required a strict separation of files based on two criteria: **Is it shareable?** and **Does it change?**

| Directory  | Type of Content    | Why it's separated                                                                                                                               |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`/usr`** | Static / Shareable | Read-only binaries and documentation (`/usr/bin`, `/usr/share`). Can be safely shared by multiple machines simultaneously.                       |
| **`/var`** | Variable / Local   | Data that changes constantly (system logs, print spools, caches). Every single machine _must_ have its own isolated, writable copy of this data. |
| **`/etc`** | Static / Local     | System-specific configurations. Hostnames, network settings, and passwords that belong strictly to _that specific machine_.                      |

### 3. The Need for `/usr/local`

As operating system vendors (like Sun Microsystems, IBM, and later Linux distributions) started packaging full UNIX systems, they completely controlled `/usr`. If an system administrator manually compiled a custom software program and put it in `/usr/bin`, a subsequent operating system update would routinely wipe it out.

To solve this, **`/usr/local`** was designated as a safe zone. The operating system vendor promised never to touch `/usr/local`. It was reserved exclusively for the local administrator to install third-party software, completely isolated from the base OS.

### How this connects back to XDG

When the XDG specification was created decades later, developers looked at this battle-tested, 30-year-old layout and copied the philosophy exactly for the user's home directory (`~`):

- **`~/.config`** is your local **`/etc`** (private settings).
- **`~/.cache`** is your local **`/var/cache`** (isolated, volatile data).
- **`~/.local`** is your personal **`/usr/local`** (where you install your own apps, binaries, and data without messing with the rest of the home directory).

Are you interested in learning more about a **specific directory** (like why `/etc` is called "etcetera" or what `/opt` is for), or are you trying to solve a **practical file storage problem** on your system?

## what if you name like .app/data .app/config .app/cache

If you organized your home directory using a **`~/.app/`** structure (like `~/.app/data`, `~/.app/config`, and `~/.app/cache`), you would be grouping files by **application** rather than by **file type**.

While this sounds highly intuitive on paper, it breaks several core principles of UNIX architecture and makes modern system administration significantly harder. Here is why the UNIX/XDG ecosystem rejected the application-centric model in favor of the type-centric model:

### 1. It Makes Backups and Syncing a Nightmare

As mentioned earlier, configurations, caches, and data have entirely different lifecycles. If you bundle them all inside a single `~/.app/` directory, automated tasks become incredibly complex.

- **With XDG (`.config`, `.cache`, `.local`):** To back up your settings, you just point your backup tool to `~/.config`. To clear disk space, you just wipe `~/.cache`.
- **With the `~/.app/` model:** If you want to back up _only_ your configurations, your backup software has to crawl through every single application folder, explicitly including `~/.app/browser/config` while ignoring `~/.app/browser/cache` (which might contain gigabytes of temporary data).

### 2. It Breaks the Multi-Machine "Dotfiles" Workflow

A massive portion of the Linux community tracks their environment configurations using **Git** (often called a "dotfiles" repo) to instantly deploy their desktop setups onto new machines.

- Under XDG, a user can safely initialize a Git repository directly inside `~/.config`.
- Under the `~/.app/` model, you cannot easily turn `~/.app/` into a Git repository because it would constantly try to track heavy, fast-changing database files and caches alongside your text-based configuration files.

### 3. It Prevents Shared System Overlays

The UNIX philosophy heavily relies on **cascading paths** (or overlays). For example, when a program looks for a font or an icon, it doesn't just look in one place. It searches a standardized list of directories from most specific to least specific:

1. `~/.local/share/icons/` (User-specific icons)
2. `/usr/local/share/icons/` (System-wide, custom-installed icons)
3. `/usr/share/icons/` (Default operating system icons)

Because the directory structures match perfectly, software can use the exact same code logic to look through the system root _and_ the user's home directory. If user files were stored under `~/.app/inkscape/icons`, the system overlay logic breaks down entirely.

### Who actually uses the `~/.app/` model?

Interestingly, your proposed layout is exactly how **macOS** and **Android** work:

- **macOS** uses `~/Library/Application Support/[AppName]` and `~/Library/Caches/[AppName]`.
- **Android** isolates every app into its own sandbox folder containing standard subdirectories like `/data/data/[package_name]/files` and `/cache`.

These operating systems use this model because they prioritize **strict application sandboxing and easy uninstallation** (deleting the app folder deletes everything). Traditional UNIX/Linux, however, was built as a multi-user, networked environment where data sharing, command-line scripting, and filesystem transparency were valued above application encapsulation.

Are you considering designing an **application sandbox** or packaging format (like Flatpak or Snap, which actually use a variation of this app-specific layout), or are you just looking for a cleaner way to **organize your own home directory**?

## how does xdg folders map on different oses

Because the XDG Base Directory Specification is a Linux/freedesktop.org standard, other operating systems (like macOS and Windows) do not natively use environment variables like `$XDG_CONFIG_HOME`.

To bridge this gap, modern cross-platform software libraries—such as [GLib (GIO)](https://docs.gtk.org/gio/), Python's `platformdirs`, Rust's `directories-jvm`, or Node's `env-paths`—systematically map XDG concepts to the native equivalent folders of each OS.

Here is exactly how the three core XDG folders map across Linux, macOS, and Windows:

| XDG Concept / Fallback               | Linux Native      | macOS Native Equivalent                                         | Windows Native Equivalent                                |
| ------------------------------------ | ----------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| **`$XDG_CONFIG_HOME`**`~/.config`    | `~/.config/`      | `~/Library/Preferences/`_(or `~/Library/Application Support/`)_ | `%APPDATA%``C:\Users\<User>\AppData\Roaming`             |
| **`$XDG_DATA_HOME`**`~/.local/share` | `~/.local/share/` | `~/Library/Application Support/`                                | `%LOCALAPPDATA%``C:\Users\<User>\AppData\Local`          |
| **`$XDG_CACHE_HOME`**`~/.cache`      | `~/.cache/`       | `~/Library/Caches/`                                             | `%LOCALAPPDATA%\Temp`_(or `%LOCALAPPDATA%\<App>\Cache`)_ |

### How macOS Handles the Mapping

macOS is a certified UNIX system, but Apple developed its own [Standard Directories Layout](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html). Cross-platform tools map to it like this:

- **Configuration:** High-level user preferences traditionally go into `~/Library/Preferences` (often as `.plist` files). However, many CLI and developer tools targeting macOS simply fallback to creating a `~/.config` folder anyway, or use `~/Library/Application Support`.
- **Data:** Application state, databases, and heavy local profiles go directly into `~/Library/Application Support/[AppName]`.
- **Cache:** Temporary files map cleanly to `~/Library/Caches/[AppName]`. macOS handles this well; if the system runs critically low on space, it knows it can safely purge files inside the `Caches` directories.

### How Windows Handles the Mapping

Windows uses an entirely different architecture built around the Windows Registry and specific AppData environment variables.

- **Configuration (`%APPDATA%` / Roaming):** Windows separates user data based on whether it should "roam" across a corporate network. Configuration settings are small, so they map to `AppData\Roaming`. If you log into a different computer on the same active directory network, your settings sync over.
- **Data (`%LOCALAPPDATA%` / Local):** Heavy application data (like databases, local sync folders, or game assets) stays local to the physical machine to avoid choking network bandwidth. It maps directly to `AppData\Local`.
- **Cache:** Windows doesn't have a single dedicated, isolated "Cache" folder for applications in the same way Linux/macOS do. Most cross-platform libraries will either map caches to a subfolder inside `%LOCALAPPDATA%\[AppName]\Cache` or drop them straight into the system user temporary directory (`%USERPROFILE%\AppData\Local\Temp`).

### The Developer's Dilemma

If you are writing cross-platform code, you shouldn't hardcode these paths. Instead, rely on established library tooling to handle the mapping for you automatically:

- **Python:** Use the [platformdirs](https://pypi.org/project/platformdirs/) library.
- **Rust:** Use the [directories](https://crates.io/crates/directories) crate.
- **Node.js:** Use the env-paths package.

Are you **writing an application** in a specific programming language and need to know the exact code snippet to implement this, or are you trying to **sync your personal settings** across a multi-OS environment?

# 

