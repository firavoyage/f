# how to create a custom eslint rule

To create a custom ESLint rule, you must define an object containing a **`meta`** object for configuration and a **`create()`** function that targets nodes in the code's Abstract Syntax Tree (AST). [link](https://eslint.org/docs/latest/extend/custom-rule-tutorial)

Here is the complete step-by-step guide to building, testing, and locally integrating a custom ESLint rule. [link](https://eslint.org/docs/latest/extend/custom-rule-tutorial)

***

### 1. Analyze Your Code with an AST

ESLint reads your source code and converts it into an **Abstract Syntax Tree (AST)**. Your rule will listen for specific node types in this tree. [link](https://neciudan.dev/master-eslint-rules)

- Open AST Explorer.
- Set the parser to **espree** (the default ESLint parser).
- Paste the pattern you want to target (e.g., `console.log()`) and click on it to see its AST node type (which is `CallExpression`). [link](https://medium.com/frontendjourney/write-scalable-efficient-custom-eslint-rules-3d12f0570b51)

***

### 2. Write the Custom Rule

Create a JavaScript file (e.g., `no-disallowed-logs.js`). A standard ESLint rule structure looks like this: [link](https://eslint.org/docs/latest/extend/custom-rule-tutorial)

javascript

```
// no-disallowed-logs.js
module.exports = {
  meta: {
    type: "suggestion", // "problem", "suggestion", or "layout"
    docs: {
      description: "Disallow use of console.log statements.",
      category: "Best Practices",
    },
    messages: {
      unexpectedLog: "Unexpected console.log statement. Use a production logger instead."
    },
    schema: [] // Defines configuration options if the rule accepts any
  },
  create(context) {
    return {
      // This listener triggers whenever ESLint encounters a CallExpression in the AST
      CallExpression(node) {
        const callee = node.callee;

        // Check if the call is 'console.log'
        if (
          callee.type === "MemberExpression" &&
          callee.object.name === "console" &&
          callee.property.name === "log"
        ) {
          // Report the violation back to ESLint
          context.report({
            node,
            messageId: "unexpectedLog"
          });
        }
      }
    };
  }
};
```

Use code with caution.

***

### 3. Load the Rule Locally (No Publishing Needed)

To run this rule in your codebase without publishing it to npm, you can use the **ESLint Flat Config** format (`eslint.config.js`) to import the file directly as a local plugin. [link](https://www.reddit.com/r/typescript/comments/1e1shrw/how%5Fdo%5Fyou%5Fadd%5Fa%5Fcustom%5Frule%5Fto%5Fan%5Fes%5Flint/)

Update your `eslint.config.js` file:

javascript

```
// eslint.config.js
import noDisallowedLogs from "./rules/no-disallowed-logs.js";

export default [
  {
    files: ["**/*.js"],
    plugins: {
      // Define a local custom namespace
      local: {
        rules: {
          "no-disallowed-logs": noDisallowedLogs
        }
      }
    },
    rules: {
      // Enforce your rule as an error or warning
      "local/no-disallowed-logs": "error"
    }
  }
];
```

Use code with caution.

***

### 4. Add an Auto-Fixer (Optional)

If you want ESLint to automatically fix the issue when users run `eslint --fix`, provide a `fix` function inside `context.report()`: [link](https://www.youtube.com/watch?v=%5Fyo4dcylp3s\&t=73)

javascript

```
meta: {
  type: "suggestion",
  fixable: "code", // 1. You must declare that the rule is fixable
  messages: { /* ... */ }
},
create(context) {
  return {
    CallExpression(node) {
      // ... condition checks ...
      context.report({
        node,
        messageId: "unexpectedLog",
        fix(fixer) {
          // 2. Return a fixing instruction (e.g., replace console.log with logger.info)
          return fixer.replaceText(node.callee, "logger.info");
        }
      });
    }
  };
}
```

Use code with caution.

***

### 5. Test Your Rule

ESLint provides a built-in testing utility called `RuleTester`. You can run this using a test framework like Jest or Mocha. [link](https://eslint.org/docs/latest/extend/custom-rule-tutorial)

javascript

```
// no-disallowed-logs.test.js
const { RuleTester } = require("eslint");
const noDisallowedLogs = require("./no-disallowed-logs");

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2022 }
});

ruleTester.run("no-disallowed-logs", noDisallowedLogs, {
  valid: [
    { code: "console.warn('This is fine');" },
    { code: "logger.info('Hello World');" }
  ],
  invalid: [
    {
      code: "console.log('Error here');",
      errors: [{ messageId: "unexpectedLog" }]
    }
  ]
});
```

Use code with caution.

***

### Next Steps & Best Practices

- **Use TypeScript**: If your target project is written in TypeScript, use [`@typescript-eslint/utils`](https://typescript-eslint.io/developers/custom-rules/) along with its `RuleCreator` helper to ensure strict type safety.
- **Handle Selectors**: Instead of broad visitor names like `CallExpression`, you can use precise CSS-like selectors (e.g., `CallExpression[callee.object.name="console"][callee.property.name="log"]`) to radically simplify your `create` code. [link](https://medium.com/frontendjourney/write-scalable-efficient-custom-eslint-rules-3d12f0570b51)

If you would like to proceed, let me know:

- What **specific code pattern** you are trying to catch or restrict?

- Whether you are using **JavaScript or TypeScript** for your rules?

- If you need help writing a **custom auto-fixer** for it? [link](https://dev.to/jacobandrewsky/writing-local-rules-for-eslint-58bl)

- [link](https://eslint.org/docs/latest/extend/custom-rule-tutorial)\
  Custom Rule Tutorial - ESLint - Pluggable JavaScript Linter\
  Custom Rule Tutorial · Step 1: Set up Your Project. First, create a new project for your custom rule. Create a new directory, init...\
  ESLint

- [link](https://eslint.org/docs/latest/extend/custom-rules)\
  Custom Rules - ESLint - Pluggable JavaScript Linter\
  }, create: function(context) { // declare the state of the rule return { ReturnStatement: function(node) { // at a ReturnStatement...\
  ESLint

- [link](https://medium.com/frontendjourney/write-scalable-efficient-custom-eslint-rules-3d12f0570b51)\
  Write scalable, efficient, custom eslint rules | frontendjourney - Medium\
  Jun 26, 2021 — Simple but Scalable \* Package Setup. By ESLint convention, prefix the package with eslint-plugin- (i.e. eslint-plugin-awesome) to ...\
  Medium·S I

Show all

## can i define directly in eslint.config.js wo any other files

<mark><span>Yes, you can define a custom rule<span> </span></span><strong>directly inside your<span> </span><code dir="ltr">eslint.config.js</code><span> </span>file</strong><span> </span>without creating any separate files</mark>. Because the modern Flat Config format uses standard JavaScript objects, you can inline the rule object and register it simultaneously.

Here is the exact syntax to accomplish this:

javascript

```
// eslint.config.js

// 1. Define the rule structure directly as a variable
const myInlinedRule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow use of console.log statements.",
    },
    messages: {
      noConsoleLog: "Avoid using console.log directly.",
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.name === "console" &&
          node.callee.property.name === "log"
        ) {
          context.report({
            node,
            messageId: "noConsoleLog",
          });
        }
      },
    };
  },
};

// 2. Export your configuration array
export default [
  {
    files: ["**/*.js"],
    // Register your inline rule into a temporary local plugin namespace
    plugins: {
      local: {
        rules: {
          "no-console-log": myInlinedRule,
        },
      },
    },
    // Turn the rule on
    rules: {
      "local/no-console-log": "error",
    },
  },
];
```

Use code with caution.

### Why this works seamlessly in Flat Config

- **No package infrastructure needed**: Older versions of ESLint required custom rules to live inside an npm package named `eslint-plugin-*`. Flat Config treats plugins as regular JavaScript objects, meaning you can define them in memory.
- **Immediate execution**: ESLint will parse, load, and execute the rule immediately on the matching files when you run your lint command.

To make sure this fits your exact setup, let me know:

- What **specific code pattern** are you trying to target with this inline rule?

- Are you using **CommonJS (`module.exports`)** or **ES Modules (`export default`)** in your configuration?

- [link](https://www.npmjs.com/package/eslint)\
  eslint - npm\
  Jul 10, 2026 — You can configure rules in your eslint.config.js files as in this example:\
  \
  \
  NPM

- [link](https://vueschool.io/articles/vuejs-tutorials/upgrading-eslint-from-v8-to-v9-in-vue-js/)\
  Upgrading Eslint from v8 to v9 in Vue.js\
  Dec 8, 2024 — Rule Definition Revisions: Configurations now define rules directly in arrays within eslint. config. js , improving project-level ...\
  \
  \
  Vue School

- [link](https://medium.com/@oliviarizona/eslint-flat-config-e94d4bd11525)\
  ESlint flat config. ESLint’s “flat config” system… | by Olivia Arizona\
  Nov 1, 2024 — Single Configuration Format: Unlike . eslintrc files, which could be in various formats (JSON, YAML, or embedded in package. json ...\
  \
  \
  Medium

Show all

## my rule: warn if throw is not followed by a function called "err"

To implement this, you need to target `ThrowStatement` nodes in the AST.

Here is the exact code to inline directly into your `eslint.config.js` file. This implementation uses a precise AST selector to keep the code incredibly short and clean.

javascript

```
// eslint.config.js

const enforceErrFunctionOnThrow = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce that 'throw' is followed by a function call named 'err'.",
    },
    messages: {
      mustUseErrFunction: "You must throw using the 'err()' function. Example: throw err('Message')",
    },
  },
  create(context) {
    return {
      // Targets 'throw' statements where the argument is NOT a CallExpression named 'err'
      "ThrowStatement:not(ThrowStatement[argument.type='CallExpression'][argument.callee.name='err'])"(node) {
        context.report({
          node,
          messageId: "mustUseErrFunction",
        });
      },
    };
  },
};

export default [
  {
    files: ["**/*.js", "**/*.ts"],
    plugins: {
      local: {
        rules: {
          "enforce-err-throw": enforceErrFunctionOnThrow,
        },
      },
    },
    rules: {
      "local/enforce-err-throw": "warn", // Configured as a warning per your request
    },
  },
];
```

Use code with caution.

### How the Code Matching Works

The selector string `"ThrowStatement:not(...)"` handles all your condition checks automatically:

- **Valid matches (Ignored)**: `throw err("Something went wrong");` or `throw err(new Error());`
- **Invalid matches (Triggers Warning)**: `throw new Error("Failed");`, `throw "String error";`, or `throw createCustomError();`

If you'd like to take this a step further, let me know:

- Do you want an **auto-fixer** that wraps naked strings or errors in `err(...)` automatically?
- Should the rule also allow **throwing variables** (like `throw error;` inside a `catch` block)?

## defineconfig()

To use `defineConfig()`, you can wrap your array using the official `defineConfig` helper imported from the `eslint` package. This provides automatic TypeScript autocomplete and type checking for your inline rules directly within your IDE.

Here is how to update your inline rule using `defineConfig()`:

javascript

```
// eslint.config.js
import { defineConfig } from "eslint";

const enforceErrFunctionOnThrow = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce that 'throw' is followed by a function call named 'err'.",
    },
    messages: {
      mustUseErrFunction: "You must throw using the 'err()' function. Example: throw err('Message')",
    },
  },
  create(context) {
    return {
      "ThrowStatement:not(ThrowStatement[argument.type='CallExpression'][argument.callee.name='err'])"(node) {
        context.report({
          node,
          messageId: "mustUseErrFunction",
        });
      },
    };
  },
};

// Wrap your entire configuration array inside defineConfig()
export default defineConfig([
  {
    files: ["**/*.js", "**/*.ts"],
    plugins: {
      local: {
        rules: {
          "enforce-err-throw": enforceErrFunctionOnThrow,
        },
      },
    },
    rules: {
      "local/enforce-err-throw": "warn",
    },
  },
]);
```

Use code with caution.

### Why use `defineConfig()`?

- **Instant Type Safety**: It validates that your custom plugin structure and configuration parameters match ESLint's core specifications.
- **Auto-completion**: Your editor will immediately suggest available fields like `files`, `plugins`, and severity levels (`"warn"`, `"error"`, `"off"`).

Would you like help configuring this configuration to **ignore re-throwing caught errors** (like `throw error` inside a `catch` block), or are you ready to test it out?

# how to disable eslint for a file

To disable ESLint for an entire file, add the block comment **`/* eslint-disable */`** at the very top of the file. [link](https://evanhahn.com/disable-eslint-for-a-file/)

### Method 1: Use Inline Comments

Place a block comment at the beginning of the file to stop ESLint from checking any code below it. [link](https://evanhahn.com/disable-eslint-for-a-file/)

- **Disable all rules:**\
  javascript

<!---->

```
/* eslint-disable */
const secretCode = "ignore_me";
```

Use code with caution.

- **Disable specific rules only:**\
  javascript

<!---->

```
/* eslint-disable no-console, no-unused-vars */
console.log("ESLint will ignore console warnings in this file");
```

Use code with caution.\
[link](https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file)

### Method 2: Use the Global Configuration File

If you are using the modern flat configuration system (`eslint.config.js`), you can globally exclude files by adding an `ignores` array to your configuration object.

javascript

```
// eslint.config.js
export default [
  {
    ignores: ["path/to/your-file.js", "dist/**", "ignored-folder/*"]
  }
];
```

Use code with caution.

### Method 3: Use `.eslintignore` (Legacy)

If your project still uses the older legacy configuration system (like `.eslintrc.js`), you can list the file paths in a dedicated ignore file. [link](https://forum.shakacode.com/t/quick-reference-for-different-ways-to-disable-eslint/1802)

1. Create a file named **`.eslintignore`** in your project root directory.

2. Add the file path or pattern you want to skip:\
   text

<!---->

```
src/components/LegacyComponent.js
build/**/*.js
```

Use code with caution.\
[link](https://forum.shakacode.com/t/quick-reference-for-different-ways-to-disable-eslint/1802)

Which project configuration type (`eslint.config.js` or `.eslintrc`) are you currently running? I can provide the exact pattern setup or show you how to disable rules for a specific block of code instead.

- [link](https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file)\
  Turning off eslint rule for a specific file - Stack Overflow\
  Jan 13, 2016 — But @Jeremy want to disable specific rules from files. 2020-11-30T17:40:27.283Z+00:00. 2. Add a comment. 634. To disable a specifi...\
  Stack Overflow
- [link](https://evanhahn.com/disable-eslint-for-a-file/)\
  Disable ESLint for a file - Evan Hahn\
  Dec 5, 2015 — by Evan Hahn , posted Dec 5, 2015 , tagged #eslint #javascript #guide. I love ESLint but sometimes you want it to completely ignor...\
  evanhahn.com
- [link](https://forum.shakacode.com/t/quick-reference-for-different-ways-to-disable-eslint/1802)\
  Quick reference for different ways to disable eslint - JavaScript\
  Feb 10, 2020 — You can go with 1.2 and add /\* eslint-disable \*/ on top of the files, one by one. You can put the file name(s) in . eslintignore .\
  ShakaCode

Show all

# how does pnpm symlink

<mark><strong><span>pnpm uses a combination of hard links and symbolic links (symlinks) to create a highly efficient, nested, and strict<span> </span></span><code dir="ltr">node\_modules</code><span> </span>structure.</strong></mark> Instead of duplicating files across multiple projects like npm does, it stores exactly one copy of each package version in a global, content-addressable store on your machine. [link](https://pnpm.io/symlinked-node-modules-structure)

Here is exactly how pnpm orchestrates symlinks and hard links to make your project work.

### 1. The Global Store to `.pnpm` (Hard Links)

When you install a package, pnpm first downloads it to a global repository on your drive (usually located at `~/.pnpm-store`). It then creates a hidden directory inside your project called `node_modules/.pnpm`. [link](https://stackoverflow.com/questions/64729963/how-to-make-pnpm-use-symlinks-for-a-global-directory)

- Files are **hard-linked** from the global store into this nested `node_modules/.pnpm/<package>@<version>/node_modules/<package>` directory.
- Because they are hard links, they point directly to the exact same data blocks on your hard drive, consuming zero additional disk space. [link](https://pnpm.io/symlinked-node-modules-structure)

### 2. The Dependency Graph (Symlinks)

Once the real files are safely hard-linked inside the hidden `.pnpm` directory, pnpm uses **symlinks** to establish relationships: [link](https://pnpm.io/symlinked-node-modules-structure)

- **Direct Dependencies**: pnpm creates a symlink at the root of your project's `node_modules` that points directly to the package location inside the hidden `.pnpm` folder. If you only installed `express`, only `express` will appear in your main `node_modules`.
- **Deep Dependencies**: If `express` depends on a package like `accepts`, pnpm does _not_ put `accepts` inside `express/node_modules`. Instead, `accepts` is placed in the hidden `.pnpm` directory alongside `express` and is symlinked into `node_modules/.pnpm/express@<version>/node_modules/express/node_modules/accepts`. [link](https://pnpm.io/symlinked-node-modules-structure)

### Visualizing the Structure

If your project installs a package called `foo@1.0.0` which depends on `bar@1.0.0`, the directory tree looks like this: [link](https://pnpm.io/symlinked-node-modules-structure)

text

```
node_modules
├── foo (symlink) ─────────────────┐
└── .pnpm                          │
    ├── bar@1.0.0                  │
    │   └── node_modules           │
    │       └── bar                │
    │           └── index.js (hard link to global store)
    └── foo@1.0.0 <────────────────┘
        └── node_modules
            ├── foo
            │   └── index.js (hard link to global store)
            └── bar (symlink) ─────> Points to .pnpm/bar@1.0.0/node_modules/bar
```

Use code with caution.

### Why pnpm Uses This Layout

- **Prevents Phantom Dependencies:** Node.js resolves modules by looking up the directory tree. Because your root `node_modules` only contains symlinks to packages you _explicitly_ declared in your `package.json`, your code cannot accidentally import sub-dependencies.
- **Avoids Circular Symlinks:** Packages are placed flatly inside `.pnpm` next to their own dependencies. For example, `foo` is sitting in the same folder where `foo`'s dependencies are symlinked, breaking potential infinite resolution loops.
- **Compatibility with Node.js:** Node.js natively dereferences symlinks to find their real path. When it resolves `foo`, it leaps directly into the `.pnpm` directory where `foo`'s localized `node_modules` folder contains the specific versions of the dependencies it requires. [link](https://pnpm.io/faq)

If you are dealing with a platform that does not support symlinks (like certain serverless providers), you can change this default behavior by updating your [.npmrc settings](https://pnpm.io/settings) to use `node-linker=hoisted`, which reverts pnpm to a flat, npm-style layout. [link](https://pnpm.io/settings)

If you want to dive deeper into configuring pnpm, let me know:

- Are you trying to fix a **tooling issue** (e.g., React Native, Webpack, Monorepo) caused by symlinks?

- Are you looking into how **workspace packages** link to each other locally?

- Do you need help deploying to a environment that **doesn't allow symlinks** (like AWS Lambda)? [link](https://stackoverflow.com/questions/73592570/when-i-use-pnpm-how-to-set-symlink-for-all-the-directory-which-in-my-workspace)

- [link](https://pnpm.io/symlinked-node-modules-structure)\
  Symlinked \`node\_modules\` structure - PNPM\
  pnpm's node\_modules layout uses symbolic links to create a nested structure of dependencies. Every file of every package inside no...\
  PNPM

- [link](https://stackoverflow.com/questions/64729963/how-to-make-pnpm-use-symlinks-for-a-global-directory)\
  How to make pnpm use symlinks for a global directory?\
  Nov 7, 2020 — You can change the location of the virtual store directory, which contains files that are hard links to the content-addressable st...\
  Stack Overflow

- [link](https://pnpm.io/settings)\
  Settings (pnpm-workspace.yaml)\
  Defines what linker should be used for installing Node packages. \* isolated - dependencies are symlinked from a virtual store at n...\
  PNPM

Show all

## hard link meaning

<mark><strong><span>A hard link is an additional pointer, or reference name, that points directly to the exact same data on your hard drive as the original file.</span></strong></mark> It does not create a copy of the file's content; instead, it allows a single file to exist under multiple names or in multiple folders at the same time.

Here is exactly how they work and why they are unique:

### How Hard Links Work Under the Hood

To understand hard links, you have to separate a file's **name** from its actual **data**:

- **The Data (Inode):** Every file on your drive has a unique ID (called an "inode" in Linux/macOS) that holds the actual contents, size, and permissions of the file.
- **The Name:** A filename is simply a label that maps to that specific ID.
- **The Hard Link:** When you create a hard link, you create a brand new label that maps to that exact same ID.

### Key Characteristics

- **Zero Extra Disk Space:** Because both names point to the same physical data block, a 1GB file with three hard links still only takes up 1GB of total space on your drive.
- **No "Original" File:** Once created, there is no master file and no shortcut file. Both files are completely equal. If you modify `file_A`, `file_B` updates instantly.
- **Safe from Deletion:** If you delete the original file, the data is **not** wiped out. The data remains completely intact and accessible through the hard link. The drive only deletes the data when the _last remaining link_ to it is deleted.
- **Same Partition Only:** Hard links can only link files within the same hard drive partition or volume. They cannot span across different drives (like linking a file on your `C:` drive to your `D:` drive).

### Hard Link vs. Shortcut (Symlink)

| Feature                        | Hard Link                                      | Symbolic Link (Symlink / Shortcut)                   |
| ------------------------------ | ---------------------------------------------- | ---------------------------------------------------- |
| **What it points to**          | The direct data on the hard drive              | The path or filename of another file                 |
| **If you delete the original** | The linked file still works perfectly          | The link breaks (gives a "File not found" error)     |
| **File Size**                  | Uses no extra space (shares the original size) | Uses a tiny bit of space (just stores the path text) |
| **Cross-Drive Support**        | No (Same partition only)                       | Yes (Can link across different drives/networks)      |

If you are exploring this to understand how pnpm or your system uses them, let me know:

- Do you want to see the **terminal commands** to create them on Windows, Mac, or Linux?

- Are you troubleshooting a **disk space issue** involving node modules?

- [link](https://www.lenovo.com/ca/en/glossary/hard-link/?srsltid=AfmBOord919lMTwXWQYEIBZ6hant2ZtIhvYIPKK5r6msr9Cf1nP68mSC)\
  What Is a Hard Link? Explained\
  A hard link is a directory entry that associates a name with a file on a file system. Unlike symbolic links, which act as shortcut...\
  \
  \
  Lenovo

- [link](https://tonylixu.medium.com/linux-hard-links-introduction-2b4296b135b3)\
  Linux — Hard Links Introduction. What is Hard Link | by Tony | Medium\
  Dec 8, 2023 — Linux — Hard Links Introduction What is Hard Link In Linux, a hard link is merely an additional name for an existing file on Linux...\
  \
  \
  Medium

- [link](https://cloudxlab.com/assessment/displayslide/7360/hard-link-and-soft-link)\
  Hard link and soft link | Automated hands-on\
  Hard link and soft link A link in UNIX is a pointer to the file. It is a connection between a file name and the actual data on the...\
  \
  \
  CloudxLab

Show all

## why hard or sym link

<mark><strong><span>pnpm uses a smart mix of hard links and symbolic links (symlinks) because neither can solve the "node\_modules problem" alone.</span></strong></mark> Operating systems treat them differently, and Node.js interacts with them uniquely. [link](https://refine.dev/blog/pnpm-vs-npm-and-yarn/)

To create a system that is blazing fast, saves disk space, and maintains strict dependency isolation, pnpm assigns a specific "superpower" to each link type. [link](https://pnpm.io/symlinked-node-modules-structure)

***

### 🧠 The Core Strategy

- **Hard links** are used for **saving disk space and protecting peer dependencies**.
- **Symlinks** are used for **building the dependency structure (graph) and enforcing strictness**. [link](https://github.com/orgs/pnpm/discussions/6800)

***

### 📂 Why Use Hard Links?

Hard links connect your local project's virtual `.pnpm` hidden folder directly to the global storage cache on your machine. [link](https://pnpm.io/symlinked-node-modules-structure)

text

```
💾 Global Cache (Actual Data) 🧩
      ▲                 ▲
      │ (Hard Link)     │ (Hard Link)
📁 Project A/.pnpm      📁 Project B/.pnpm
```

Use code with caution.

### 1. True Single-Instance Storage

If you have 10 separate JavaScript projects on your laptop that all use `lodash`, a symlink-only strategy would force you to store the directory paths over and over. Hard links allow every single project to safely point to the _exact same underlying bits_ on your hard drive, reducing your actual storage footprint down to just one version. [link](https://pnpm.io/symlinked-node-modules-structure)

### 2. Fooling the Node.js `realpath` Traps

By default, Node.js resolves symbolic links using their absolute "real path" (`fs.realpathSync`). If pnpm used a symlink directly from your `node_modules` back to a central global directory, Node.js would evaluate code from inside that global folder. [link](https://github.com/orgs/pnpm/discussions/6800)

- **The Breakage:** The package would look for its peer dependencies inside the _global folder_ instead of your local project's directory, instantly breaking your build. [link](https://github.com/orgs/pnpm/discussions/6800)
- **The Hard Link Fix:** Because a hard-linked file is treated as a real, native file inside your project partition, Node.js thinks it is genuinely sitting inside your workspace. This allows contextual dependency lookup to work seamlessly. [link](https://pnpm.io/next/symlinked-node-modules-structure)

***

### 🔗 Why Use Symlinks?

Once the physical files are safely anchored inside the project via hard links, pnpm switches to symlinks to organize the folder tree. [link](https://pnpm.io/symlinked-node-modules-structure)

text

```
📁 node_modules/express (Symlink) ──▶ 📁 node_modules/.pnpm/express@4/node_modules/express
```

Use code with caution.

### 1. Emulating Nested Folder Structures

Operating systems do not allow you to hard-link directories; they only let you hard-link individual files. However, package structures require directories. Symlinks natively point to folders, allowing pnpm to easily stitch complex, deeply nested dependency graphs together instantly without moving real data. [link](https://pnpm.io/symlinked-node-modules-structure)

### 2. Enforcing "Strict" Security

npm and Yarn flatten your directory structure by hoisting everything to the top level, allowing your project to import hidden packages you never explicitly requested. [link](https://pnpm.io/motivation)

- pnpm places **only** your explicitly declared `package.json` dependencies into the root `node_modules` via symlinks.
- If your app tries to load a rogue sub-dependency, the code fails immediately because no symlink exists to expose it. [link](https://pnpm.io/symlinked-node-modules-structure)

### 3. Resolving Circular Dependencies safely

If Package A needs Package B, and Package B needs Package A, hard-linking would create infinite loops or corrupt tree states. Because symlinks are just lightweight text pointers to a flat directory matrix hidden inside `.pnpm`, circular graphs resolve smoothly without throwing the operating system into a tailspin. [link](https://discourse.nixos.org/t/what-would-a-pnpm-plugin-look-like/77120)

***

### ⚖️ Summary of Roles

| Link Type     | What It Does for pnpm                                                | Why It Is Mandatory                                                                                                   |
| ------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Hard Link** | Connects file contents from the global store to `.pnpm/`             | Prevents multiple copies of code and ensures Node.js finds project-scoped peer dependencies.                          |
| **Symlink**   | Builds the web of connections between your code and its dependencies | Allows directory linking, keeps you from accessing unlisted packages, and handles nested sub-dependencies seamlessly. |

Would you like to explore **how to clear the global store** safely, or are you looking to fix an issue where a specific library **fails to follow these symlinks**?

- [link](https://github.com/orgs/pnpm/discussions/6800)\
  Why pnpm uses Hard links instead of soft links? #6800 - GitHub\
  Jul 13, 2023 — By default, when Node. js loads a module from a path that is symbolically linked to a different on-disk location, Node. js will de...\
  GitHub
- [link](https://discourse.nixos.org/t/what-would-a-pnpm-plugin-look-like/77120)\
  What would a pnpm plugin look like? - NixOS Discourse\
  Apr 19, 2026 — pnpm already does everything with symlinks as much as possible. Basically, ./node\_modules/.pnpm would be /nix/store . A problem is...\
  nixos.org
- [link](https://pnpm.io/symlinked-node-modules-structure)\
  Symlinked \`node\_modules\` structure - PNPM\
  pnpm's node\_modules layout uses symbolic links to create a nested structure of dependencies. Every file of every package inside no...\
  PNPM

Show all

## is it from nodejs engineering flaw

**Yes, it can absolutely be argued that pnpm’s complex structure is a brilliant workaround for what many consider an engineering flaw—or at least an outdated design choice—in Node.js's module resolution system.** [link](https://en.wikipedia.org/wiki/Yarn%5F%28package%5Fmanager%29)

When Ryan Dahl created Node.js in 2009, he designed the `node_modules` look-up algorithm. He has since publicly admitted that the design of `node_modules` and its rigid module resolution algorithm was one of his biggest regrets with Node.js.

The three major "flaws" in Node.js that forced package managers into chaos—and ultimately inspired pnpm to use hard links and symlinks—are detailed below.

***

### 1. The Rigid, Top-Down Lookup Algorithm

Node.js resolves packages recursively. If a file at `/project/src/index.js` calls `require('lodash')`, Node.js checks:

1. `/project/src/node_modules/lodash`
2. `/project/node_modules/lodash`
3. `/node_modules/lodash`

**The Flaw:** This algorithm assumes that packages live in physical, nested directories on the disk. Because Node.js provides no built-in "registry map" to look up dependencies, the package manager is entirely forced to manipulate the physical file system to show Node.js what it wants to see.

### 2. Node.js Natively Trashes Simple Symlinks (`realpath`)

You might wonder: _“Why didn't we just symlink packages directly to a global folder from day one?”_

**The Flaw:** By default, when Node.js evaluates a symlink, it immediately calls a function called `fs.realpathSync()`. It breaks the illusion of the link and jumps to the _actual, real path_ of the file on your hard drive. [link](https://github.com/orgs/pnpm/discussions/6800)

- If a package manager symlinked a project dependency straight to a global store (`~/.npm-store/express`), Node.js would leap into the global store.
- Once inside the global store, Node.js would look for peer dependencies using its top-down algorithm from _inside the global folder_, unable to see your project's specific local dependencies.

**The pnpm Fix:** pnpm uses **hard links** to trick Node.js. Because a hard-linked file looks like a real, physical file originating inside your project, `fs.realpathSync()` evaluates it as being inside the project. This forces Node.js to look for sub-dependencies exactly where pnpm wants it to: inside the project's hidden `.pnpm` folder. [link](https://pnpm.io/blog/2020/05/27/flat-node-modules-is-not-the-only-way)

### 3. The Flattening (Hoisting) Hack

Early versions of npm (v1 and v2) followed Node.js’s nesting rules perfectly. If package `A` needed `B`, it put `B` inside `A/node_modules`. This led to deep folder paths that broke Windows systems (exceeding the 260-character limit) and duplicated megabytes of identical files. [link](https://javascript.plainenglish.io/an-abbreviated-history-of-javascript-package-managers-f9797be7cf0e)

To fix this, npm v3 and Yarn invented a hack called **hoisting**. They flattened the structure, pulling all sub-dependencies up to the root `node_modules` folder. [link](https://www.jameswalsh.dev/posts/pnpm-has-yarn-and-npm-beat)

- **The New Flaw:** Hoisting introduced **phantom dependencies**. Your application could seamlessly import a package it didn't declare in `package.json` simply because it was hoisted to the root level. If a sub-dependency updated and removed that package, your application would crash out of nowhere. [link](https://infinum.com/handbook/frontend/node/package-managers-guidelines)

**The pnpm Fix:** pnpm refused to hoist. Instead, it used **symlinks** to recreate the safe, strict nested tree structure while keeping the physical layout inside `.pnpm` totally flat. You can only import what you explicitly install, closing the security and stability hole left by npm. [link](https://pnpm.io/blog/2020/05/27/flat-node-modules-is-not-the-only-way)

***

### How the Ecosystem Attempted to Fix It (Yarn PnP vs. pnpm)

The creator of Yarn eventually tried to fix this flaw at the software level with **Yarn Plug’n'Play (PnP)**. Yarn PnP deletes the `node_modules` folder entirely and generates a text file (`.pnp.cjs`) that tells Node.js exactly where every package lives. [link](https://en.wikipedia.org/wiki/Yarn%5F%28package%5Fmanager%29)

However, because Yarn PnP fundamentally changes how Node.js resolves files, it broke thousands of developer tools (Webpack, TypeScript, VS Code extensions) that relied on the traditional `node_modules` path lookups. [link](https://en.wikipedia.org/wiki/Yarn%5F%28package%5Fmanager%29)

**pnpm won immense popularity because it engineered a physical illusion.** By using a combination of hard links and symlinks, pnpm completely abides by Node.js's legacy, flawed resolution constraints, making it 100% compatible with every existing tool while still protecting your disk space and security. [link](https://pnpm.io/blog/2020/05/27/flat-node-modules-is-not-the-only-way)

If you are curious about the evolution of JavaScript architecture, let me know:

- Would you like to know more about how **Yarn PnP** differs in performance from pnpm?

- Are you interested in how **Deno** or **Bun** (newer runtimes by the same creators) fixed this `node_modules` flaw natively?

- [link](https://github.com/orgs/pnpm/discussions/6800)\
  Why pnpm uses Hard links instead of soft links? #6800 - GitHub\
  Jul 13, 2023 — By default, when Node. js loads a module from a path that is symbolically linked to a different on-disk location, Node. js will de...\
  GitHub

- [link](https://pnpm.io/faq)\
  Frequently Asked Questions - PNPM\
  pnpm creates hard links from the global store to the project's node\_modules folders. Hard links point to the same place on the dis...\
  PNPM

- [link](https://medium.com/pnpm/why-should-we-use-pnpm-75ca4bfe7d93)\
  Why should we use pnpm?\
  Jun 7, 2017 — Pnpm is a drop-in replacement for npm, but it's faster and more efficient. Pnpm can save gigabytes of disk space by: \* \*\*Linking g...\
  Medium

Show all

## what about deno

<mark><strong><span>Deno was specifically designed by Node’s original creator, Ryan Dahl, to kill off the<span> </span></span><code dir="ltr">node\_modules</code><span> </span>folder entirely</strong></mark>**.** [link](https://medium.com/@tendanifallain/node-modules-was-a-mistake-why-deno-needed-to-exist-7f6a153c3315)

Having realized how flawed the top-down physical lookup algorithm of Node.js was, Dahl built Deno from scratch to treat dependencies like a web browser does. [link](https://medium.com/@tendanifallain/node-modules-was-a-mistake-why-deno-needed-to-exist-7f6a153c3315)

Here is how Deno natively bypassed the file-linking madness of pnpm, and how it handles backwards compatibility today.

***

### 1. The Original Vision: URL-Based & Link-Free

In early versions of Deno, there were no `package.json` files, no `npm install` steps, and absolutely no local `node_modules` folders. Dependencies were imported directly using URLs: [link](https://deno.com/blog/not-using-npm-specifiers-doing-it-wrong)

javascript

```
import { serve } from "https://deno.land";
```

Use code with caution.

- **The Logical Cache:** When Deno runs this file, it checks a **Global Logical Cache** on your computer (stored away in your system's user profile data, completely isolated from your project). [link](https://docs.deno.com/runtime/packages/)
- **No Links Required:** If the file isn't cached, Deno downloads it once and runs it straight out of that cache. Because Deno controls the runtime, its internal module resolver maps the URL to the exact location in the cache software-side. It doesn't need hard links or symlinks to trick an old filesystem algorithm. [link](https://reflect.run/articles/how-to-use-node-modules-in-deno/)

### 2. Native npm Support (Without `node_modules`)

Deno later introduced a native `npm:` specifier, allowing you to pull from the massive npm registry without downloading physical folders into your repository: [link](https://oneuptime.com/blog/post/2026-01-31-deno-npm-packages/view)

javascript

```
import express from "npm:express@4";
```

Use code with caution.

Just like URL imports, Deno downloads `express` and its dependencies straight to the global cache. When your script boots up, Deno links the imports in memory, meaning your project directory remains 100% clean—no `node_modules` folder is ever generated. [link](https://deno.com/blog/not-using-npm-specifiers-doing-it-wrong)

### 3. The Modern Compromise: Emulating pnpm

While omitting a `node_modules` folder works seamlessly for clean Deno projects, it breaks tools and frameworks like Next.js, Svelte, or tools using native binary add-ons (Node-API) that rigidly look for `node_modules` on the disk. [link](https://docs.deno.com/runtime/fundamentals/node/)

To bridge this gap, modern versions of Deno automatically adapt to your setup: [link](https://docs.deno.com/runtime/fundamentals/node/)

- **If you don't have a `package.json`:** Deno utilizes its strict global cache, generating **zero local folders**.
- **If you do have a `package.json` (or opt-in via settings):** Deno automatically acts as its own package manager. When you run `deno install`, it creates a local `node_modules` directory. [link](https://docs.deno.com/runtime/fundamentals/node/)

**How it lays out that directory:** By default, Deno adopts an **isolated layout** that behaves almost exactly like **pnpm**. It hard-links content-addressed assets from its central cache into a hidden layout, constructing a predictable directory graph that keeps the ecosystem happy while keeping disk space consumption at zero. [link](https://docs.deno.com/runtime/fundamentals/node/)

***

### The Architecture Comparison

| Feature              | pnpm                                                       | Deno (Native Mode)                                               |
| -------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| **Folder Footprint** | Massive folder structure populated with symlinks/hardlinks | Completely empty project directory (zero folder pollution)       |
| **How it resolves**  | Fooled by physical filesystem layout mapping               | Handled internally in memory via software module mapping         |
| **Install Step**     | Explicitly required (`pnpm install`)                       | Fully optional; downloads automatically on execution             |
| **Tooling Fit**      | Integrates into the legacy Node ecosystem                  | Acts as its own distinct environment with a Node emulation layer |

If you are thinking about trying out Deno, let me know:

- Do you want to see how to **configure Deno to run a legacy Node/npm project**?

- Are you curious about how **Bun** manages its package installation speed compared to pnpm and Deno?

- [link](https://docs.deno.com/runtime/fundamentals/node/)\
  Node and npm Compatibility - Deno Docs\
  Jun 25, 2026 — Run an existing Node project Jump to heading \* Dependencies declared there are installed by deno install and importable by bare sp...\
  Deno

- [link](https://www.reddit.com/r/Deno/comments/1gql7g7/there%5Fis%5Fno%5Fnode%5Fmodules%5For%5Fdeno%5Fmodules/)\
  There is no node\_modules or deno\_modules directory in your project folder?\
  Nov 13, 2024 — If you're asking about Deno caches, here's some information: \* \*\*Deno caches are located in\*\*: \* \*\*Windows\*\* C:\Users\\\AppData\Loc...\
  Reddit

- [link](https://docs.deno.com/runtime/fundamentals/configuration/)\
  Config files - Deno Docs\
  Jun 17, 2026 — Deno reads two configuration files: Node's package. json and its own deno. json . Both are first-class and both are optional, so D...\
  Deno

Show all

## how can you dl everything needed wo package json

To download and cache all your dependencies in Deno without using a `package.json` file, you rely on <mark>Deno's native<span> </span><strong>auto-downloading runtime</strong><span> </span>or its command-line tooling</mark>.

Because Deno reads imports directly from your source files, it figures out exactly what it needs just by analyzing your code. Here are the three ways to handle downloading everything upfront.

***

### 1. The On-Demand Way (Do Nothing)

You don't actually need a separate install command. The first time you execute your application, Deno automatically detects missing dependencies, downloads them, and caches them in your global storage before running the code.

bash

```
deno run main.ts
```

Use code with caution.

### 2. The Upfront Way (`deno cache`)

If you are building a Docker container, setting up a CI/CD pipeline, or preparing for offline work, you can force Deno to download and compile every dependency instantly without actually running the application.

bash

```
deno cache main.ts
```

Use code with caution.

- This scans `main.ts`, recursively follows every `import` statement (whether it is an `https://` URL or an `npm:` specifier), and pulls them all into your machine's global cache.

### 3. The Centralized Way (`deno.json`)

If you dislike having long URLs or `npm:package-name` strings littered throughout your code files, you can manage them centrally using Deno's native configuration file, **`deno.json`**, via an **`imports` map**.

1. Create a `deno.json` file in your root folder:\
   json

<!---->

```
{
  "imports": {
    "express": "npm:express@5.0.0",
    "lodash": "https://esm.sh"
  }
}
```

Use code with caution.
2\. Now, your source code looks completely clean and standard:\
javascript

```
import express from "express";
import _ from "lodash";
```

Use code with caution.
3\. To download all dependencies specified in your `deno.json` imports map instantly—even if you haven't written a single line of code in `main.ts` yet—run:\
bash

```
deno install
```

Use code with caution.\
_(Note: Unlike Node, running `deno install` here will still populate your **global cache**, leaving your local project folder completely clean unless your configuration explicitly requests a local `node_modules` folder)._

***

### 📁 Where does it all go?

Everything is safely tucked away in a central system folder managed by the Deno runtime. If you ever want to see exactly where these files are physically sitting on your hard drive, type:

bash

```
deno info
```

Use code with caution.

This will print out the directory paths for your local configuration, your global dependency cache, and your TypeScript compilation cache.

If you are setting this up for a specific environment, let me know:

- Are you trying to configure an **offline development environment**?
- Do you need help setting up a **Docker layer cache** to speed up your deployment builds?

## so if you want to be explicit and predictable you end up creating a file like packagejson, yet deno invents its own specific names and structure

**Yes, exactly. You have hit on the exact philosophical pivot point that Deno went through.**

Ryan Dahl initially tried to completely get rid of centralized configuration files. However, the software engineering reality is that **production systems need explicit, predictable, and reproducible builds**. Without a central file, you cannot easily audit licenses, update versions across 50 files, or guarantee that two developers are running the exact same code.

So, Deno didn't actually eliminate the concept of a config file; it replaced `package.json` with `deno.json`.

Here is why Deno invented its own names and structure instead of just reusing Node's format:

### 1. Breaking Free from Node’s Legacy "Bloat"

A standard `package.json` does a massive amount of heavy lifting that Deno handles natively. A typical Node file contains configuration blocks for TypeScript, Linters (ESLint), formatters (Prettier), testing frameworks (Jest), and compilation steps.

Deno includes a compiler, linter, formatter, and test runner directly inside its tiny runtime binary. Therefore, `deno.json` was designed from scratch to configure these built-in tools elegantly without any external tooling configurations cluttering the file:

json

```
{
  "tasks": { "start": "deno run main.ts" },
  "imports": { "express": "npm:express@5" },
  "fmt": { "useTabs": true },
  "lint": { "rules": { "tags": ["recommended"] } }
}
```

Use code with caution.

### 2. Standardizing the "Import Map" Web Standard

Node's `dependencies` object is a completely proprietary invention. The World Wide Web Consortium (W3C) never approved a standard where typing `import "express"` physically crawls a local hard drive looking for folders.

Instead, the web browser community invented a standard called **Import Maps**. Deno chose to adopt this exact standard using the `"imports"` key. This means Deno's resolution logic matches standard web browser specifications, making Deno code natively closer to running directly in a browser without a bundler.

### 3. Fixing the "Lockfile" Predictability Issue

In Node, `package.json` allows loose version ranges (like `"^4.17.1"`). Because of this ambiguity, npm requires a second, massive file—`package-lock.json`—to ensure predictability across machines.

Deno streamlines this. If you use a `deno.json` file, Deno automatically generates a slim, secure `deno.lock` file behind the scenes. This ensures that every download is cryptographically checked against a hash, guaranteeing identical, predictable execution on every machine.

### The Ultimate Irony: Full Backwards Compatibility

Deno's original "no `package.json`" stance created a massive barrier to entry. Because millions of libraries on GitHub rely strictly on Node infrastructure, Deno eventually had to compromise.

Today, **Deno natively reads `package.json` files**. If you drop a Node project into Deno, it will see your `package.json`, read your dependencies, parse your scripts, and run the project flawlessly without you ever needing to migrate to `deno.json`.

If you are setting up a new project and weighing your options, let me know:

- Do you want to see how to **generate a `deno.json` file** automatically using the CLI?

- Are you curious about how **Bun** handles this same configuration dilemma?

- [link](https://news.ycombinator.com/item?id=44427757)\
  The new skill in AI is not prompting, it's context engineering\
  Jun 30, 2025 — Yes... that's exactly it. It is also described in our teaching material here, (half way down the page):\
  \
  Hacker News

- [link](https://medium.com/codetodeploy/release-engineering-for-humans-8488b92afddd)\
  Release Engineering for Humans. How software gets from a developer’s… | by Ayo Akinkugbe | CodeToDeploy\
  Mar 31, 2026 — Release engineering builds distributed build systems (like Meta's Buck or Google's Bazel) that can compile code in parallel across...\
  \
  \
  Medium

- [link](https://arstechnica.com/information-technology/2012/08/ive-inherited-200k-lines-of-spaghetti-codewhat-now/)\
  I've inherited 200K lines of spaghetti code—what now?\
  Aug 4, 2012 — Software development needs good processes and procedures for exactly the same reasons that chemical plants or factories have manua...\
  \
  \
  Ars Technica

Show all

## why inventing all these incompatible names and structure

<mark><strong><span>Deno invented its own names and structures because it was explicitly designed to align with official W3C web browser standards, rather than the proprietary conventions Node.js created in 2009</span></strong></mark>**.** [link](https://tinyclouds.org/jsconf2018.pdf)

When Node.js was built, web standards for JavaScript modules did not exist. Node invented its own rules (like `package.json`, `require()`, and `node_modules`). When the official web standards finally arrived years later, they looked completely different. [link](https://tinyclouds.org/jsconf2018.pdf)

Deno was a deliberate attempt to hit the reset button and align the server-side JavaScript ecosystem with the actual web platform. The primary drivers for introducing these unique names and configurations over standard Node files include: [link](https://www.reddit.com/r/node/comments/8p206b/10%5Fthings%5Fi%5Fregret%5Fabout%5Fnodejs%5Fryan%5Fdahl/)

### 1. Replaces Proprietary Properties with Browser Standards

In Node, mapping a friendly name to a package is handled via a proprietary object:

json

```
// package.json (Node/npm standard)
"dependencies": {
  "lodash": "^4.17.21"
}
```

Use code with caution.

Browsers do not understand this format; they cannot crawl a hard drive looking for folders. To fix this for the web, the World Wide Web Consortium (W3C) established an official web standard called **Import Maps**. Deno strictly adopted this standard: [link](https://tinyclouds.org/jsconf2018.pdf)

json

```
// deno.json (Official Web Standard)
"imports": {
  "lodash": "https://esm.sh"
}
```

Use code with caution.

By utilizing `"imports"`, Deno ensures the configuration syntax matches what runs natively in Google Chrome, Safari, or Firefox without needing a compiler or bundler. [link](https://blog.jim-nielsen.com/2024/deno-de-emphasizes-http-imports/)

### 2. Eliminating Non-Code "Noise"

Node's `package.json` was heavily influenced by npm. It forces every project to act like an open-source package, requiring fields like `"version"`, `"description"`, `"license"`, and `"repository"` even if you are just writing a private script. Ryan Dahl openly criticized this metadata requirements as "boilerplate noise". [link](https://tinyclouds.org/jsconf2018.pdf)

`deno.json` is entirely runtime-centric. It cuts out the publishing noise and focuses purely on configuring your local workspace toolchain (such as permissions, compilation rules, or standard tasks). [link](https://docs.deno.com/runtime/fundamentals/configuration/)

### 3. Native Security Sandboxing

Node grants any installed npm package full access to your computer's file system, network, and environment variables. This architecture poses a massive security risk via malicious dependencies. [link](https://denoland.medium.com/introducing-your-new-javascript-package-manager-deno-56dafbbe2980)

Deno is secure by default. It requires a configuration layout capable of managing security permissions natively. `deno.json` allows developers to define explicit, granular access scopes directly within the project configuration: [link](https://docs.deno.com/runtime/fundamentals/configuration/)

json

```
// deno.json
{
  "permissions": {
    "net": ["api.github.com"],
    "read": ["./logs"]
  }
}
```

Use code with caution.

This permission structure could not be cleanly mapped onto a traditional `package.json` without introducing heavily fragmented custom fields.

***

### The Consequence: The "Full Circle" Reality

While building a pure, browser-compatible environment is highly logical in theory, completely fracturing away from millions of existing npm packages made adoption difficult for mainstream developers. [link](https://www.reddit.com/r/javascript/comments/11wjzss/why%5Fwe%5Fadded%5Fpackagejson%5Fsupport%5Fto%5Fdeno/)

Ultimately, the ecosystem forced a compromise. Today, **Deno supports both formats simultaneously**. [link](https://docs.deno.com/runtime/fundamentals/configuration/)

- You can drop a legacy `package.json` into a Deno project and it will read your dependencies and run scripts out of the box.
- You only need to introduce a `deno.json` when you want to fine-tune Deno's modern built-in features, like its native code formatter or linter. [link](https://docs.deno.com/runtime/fundamentals/configuration/)

If you are trying to manage a configuration file right now, let me know:

- Are you trying to **convert an existing Node project** over to Deno?

- Do you want to see how to structure a file so it works **simultaneously in both Node and Deno**?

- [link](https://blog.jim-nielsen.com/2024/deno-de-emphasizes-http-imports/)\
  Deno De-emphasizes HTTP Imports - Jim Nielsen's Blog\
  Aug 6, 2024 — So Deno ends up being perceived as problematic by end users, but the reality is it's working precisely the way it was designed to,\
  Jim Nielsen

- [link](https://docs.deno.com/runtime/fundamentals/configuration/)\
  Config files | Deno Docs\
  Jun 17, 2026 — Deno reads two configuration files: \* \*\*package.json\*\* Configures dependencies and scripts \* \*\*deno.json\*\* Configures Deno itself,\
  Deno

- [link](https://itnext.io/moving-libraries-to-deno-the-whys-and-hows-58acd4a31f05)\
  Moving Libraries to Deno: The Whys and Hows - ITNEXT\
  Feb 2, 2022 — A cursory look at the numerous introductory articles about Deno¹ will tell you that it's a Node. js replacement shunning NPM, with...\
  itnext.io

Show all

## why. what if deno had not invented them. why does it even matter to adopt standards or browser compatibility for backend code

If Deno had not invented these new structures and instead just copied Node, <mark>it would have been forced to copy Node’s underlying engine too</mark>. You cannot use Node’s configuration format without also accepting Node’s filesystem traversal algorithms.

The decision to break compatibility and adopt browser standards for backend code matters due to critical architectural implications.

***

### What if Deno had not invented them?

If Deno had stuck with `package.json` and `node_modules` from day one, it would have inherited three fatal flaws:

- **The `node_modules` Resolution Loop:** Deno would still have to physically crawl your hard drive folder-by-folder to resolve a file. It would be plagued by the exact same slow installation speeds, disk-space bloat, and symlink-breaking behavior that we discussed with pnpm.
- **The Bundler Dependency:** To make backend code run in a browser (like a React or Svelte app), tools like Webpack, Vite, or Esbuild must spend massive computing power stripping away `package.json` semantics and translating them into standard JavaScript.
- **Tooling Fragmentation:** Deno would have remained dependent on a massive chain of third-party configuration files (`.eslintrc`, `.prettierrc`, `tsconfig.json`).

By breaking away, Deno replaced hundreds of megabytes of local folder trees and configurations with a single, highly optimized binary executable file.

***

### Why does Browser Compatibility matter for Backend Code?

Historically, frontend code (running in Chrome) and backend code (running on a Linux server) were entirely different worlds. Today, that barrier has collapsed due to three industry shifts.

### 1. The Rise of "Edge Computing" (Serverless)

Modern backend code no longer just runs on massive AWS or Google Cloud servers. It runs on "The Edge"—tiny, ultra-fast servers distributed globally by platforms like Cloudflare Workers, Vercel, and AWS Lambda.

- **The Reality:** These edge platforms do not run Node.js because Node is too heavy and slow to boot up. Instead, they run **V8 JavaScript engine isolates**, which are essentially headless web browsers.
- **The Impact:** If your backend code relies on `package.json` logic, it cannot run on the Edge without complex compilation. If your backend uses browser-standard web APIs and import styles, it can deploy to global edge networks instantly with sub-millisecond startup times.

### 2. Universal JavaScript (Isomorphic Code)

Modern web development relies heavily on Server-Side Rendering (SSR). Frameworks like Next.js, Nuxt, and Remix run the exact same file twice: first on the server to build the HTML, and then in the browser to make it interactive.

- **Without Standards:** Developers have to write complex wrapper code or maintain two separate versions of a library—one for Node (`require`) and one for the browser (`import`).
- **With Standards:** A single file can be executed flawlessly by Deno on the server, packaged by an edge network, and run natively by Safari on an iPhone without a single line of translation.

### 3. Long-Term Ecosystem Stability

Node’s module system is a proprietary ecosystem controlled entirely by a single private entity (npm/GitHub/Microsoft). If the corporate landscape shifts, the entire JavaScript ecosystem is vulnerable to policy changes.

By aligning with W3C and TC39 (the official governing committees of the internet), Deno ensures that server-side JavaScript is tethered to open, immutable international web standards. Code written for Deno today is guaranteed to be readable by the browsers of 2035 because the underlying language specification evolves together.

***

### The Ultimate Proof: Node.js is copying Deno

The ultimate validation of Deno's philosophy is that **Node.js has spent the last few years retroactively adding Deno's features.** Recent versions of Node.js have implemented native TypeScript execution, built-in test runners, native environment variable loading (`--env-file`), and native support for browser-standard Web APIs (like `fetch` and `Web Crypto`).

Deno had to build a separate system to show the world how fast and clean JavaScript could be when stripped of legacy baggage. Now, the entire industry is moving toward that exact standard.

If you are evaluating tech stacks for a new project, let me know:

- Are you deciding between **Node.js, Deno, or Bun** for a specific type of application?

- Do you want to see an example of a **"Universal" script** that runs seamlessly in both a browser and Deno?

- [link](https://www.reddit.com/r/node/comments/1ddirm0/why%5Fnot%5Fnode/)\
  Why not Node? : r/node\
  Jun 11, 2024 — The backend and frontend had almost entirely different paradigm and way of thinking. Most company, even if they use JS for both, h...\
  \
  \
  Reddit

- [link](https://www.sitepoint.com/death-pure-frontend-developer-full-stack-devops/)\
  The Death of the 'Pure' Frontend Developer: Why Modern Frontend Is Becoming Full-Stack DevOps\
  Feb 20, 2026 — The collapse of the frontend/backend boundary wasn't caused by a single technology decision. Three architectural shifts converged,\
  \
  \
  SitePoint

- [link](https://dev.to/holasoymalva/how-serverless-is-killing-the-traditional-backend-role-2ff2)\
  How Serverless is Killing the Traditional Backend Role 🔥\
  Jan 30, 2025 — How We Got Here: The Rise of Serverless A few years ago, building a scalable backend meant managing servers. Whether it was on-pre...\
  \
  \
  DEV Community

Show all

# 