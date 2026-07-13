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

# . git merge

```sh
 ~ % cd '/home/fira/Projects/temp/new repo'
 ...Projects/temp/new repo % git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
Initialized empty Git repository in /home/fira/Projects/temp/new repo/.git/
 ...Projects/temp/new repo % git add .
git commit -m "Copied folder state with edits and deletions"

[master (root-commit) 7026b30] Copied folder state with edits and deletions
 383 files changed, 30849 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 .hidden
 create mode 100644 .knowledge/agent complete.md
 create mode 100644 .knowledge/agent contributing.md
 create mode 100644 .knowledge/agent search.md
 create mode 100644 .knowledge/agent start.md
 create mode 100644 .knowledge/agent tasks.md
 create mode 100644 .knowledge/agent test.md
 create mode 100644 .knowledge/agent work.md
 create mode 100644 .knowledge/agent write.md
 create mode 100644 .knowledge/changes.md
 create mode 100644 .knowledge/design atom components.md
 create mode 100644 .knowledge/design component library.md
 create mode 100644 .knowledge/design token unit.md
 create mode 100644 .knowledge/design tokens.md
 create mode 100644 .knowledge/legacy/20260603 merge web styling/web_styling.md
 create mode 100644 .knowledge/legacy/20260603 merge web styling/web_styling_naming.md
 create mode 100644 .knowledge/legacy/20260604 message/message.md
 create mode 100644 .knowledge/name component classname.md
 create mode 100644 .knowledge/name prefer singular.md
 create mode 100644 .knowledge/readme.md
 create mode 100644 .knowledge/ts commenting.md
 create mode 100644 .knowledge/ts error handling.md
 create mode 100644 .knowledge/ts import tsconfig paths.md
 create mode 100644 .knowledge/ts logging.md
 create mode 100644 .knowledge/ts naming.md
 create mode 100644 .knowledge/ts programming style.md
 create mode 100644 .knowledge/ts tech stack.md
 create mode 100644 .knowledge/web accessibility.md
 create mode 100644 .knowledge/web styling.md
 create mode 100644 .npmrc
 create mode 120000 AGENTS.md
 create mode 120000 CLAUDE.md
 create mode 100644 bunfig.toml
 create mode 100644 changes.md
 create mode 100644 contributing.md
 create mode 100644 copying.md
 create mode 100644 docs/readme.en.md
 create mode 100644 drafts/readme.md
 create mode 100644 eslint.config.js
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_01_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_01_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_02_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_02_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_03_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_03_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_04_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_04_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_05_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_05_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_06_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_06_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/goal.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_01_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_01_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_01_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_01_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_02_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_02_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_02_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_02_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_03_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_03_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_03_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_03_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_04_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_04_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_04_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_04_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_05_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_05_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_05_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_05_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_06_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_06_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_06_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_06_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_07_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_07_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_07_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_07_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_08_planner_error.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_08_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/goal.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_001_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_001_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_001_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_001_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_002_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_002_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_002_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_002_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_003_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_003_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_003_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_003_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_016_planner_error.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_016_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/play.py
 create mode 100644 legacy/20260124 test integration userscript dog fetch/fetch.py
 create mode 100644 legacy/20260124 test integration userscript dog fetch/scripts/dog.js
 create mode 100644 legacy/20260205 backend compute/agent.js
 create mode 100644 legacy/20260205 backend compute/ask.js
 create mode 100644 legacy/20260205 backend compute/limit.js
 create mode 100644 legacy/20260205 backend compute/parse.js
 create mode 100644 legacy/20260205 backend compute/prompt.js
 create mode 100644 legacy/20260205 backend compute/reference.md
 create mode 100644 legacy/20260205 backend compute/run.js
 create mode 100644 legacy/20260205 backend compute/state.js
 create mode 100644 legacy/20260205 backend compute/test/ask.js
 create mode 100644 legacy/20260205 backend compute/test/chemistry.js
 create mode 100644 legacy/20260205 backend compute/test/parse.js
 create mode 100644 legacy/20260205 backend compute/tool.js
 create mode 100644 legacy/20260205 backend store/db.js
 create mode 100644 legacy/20260205 backend store/flow.js
 create mode 100644 legacy/20260205 backend store/link.js
 create mode 100644 legacy/20260205 backend store/session.js
 create mode 100644 legacy/20260205 backend store/test/flow.js
 create mode 100644 legacy/20260205 backend store/test/see.js
 create mode 100644 legacy/20260205 backend store/thing.js
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-05T17-55-38-477Z-26e1409d-62fe-435f-8f5d-1fd8f07b0725.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-05T17-57-30-314Z-c3fd99e9-6d82-4f20-803f-36629e681100.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-07T18-42-35-255Z-77dc174a-9070-4cfc-ab93-a26e684b639f.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-07T18-43-43-931Z-1cae340a-66bb-41c5-b304-5013e47a00b0.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-07T18-44-39-587Z-44d42e6e-5d78-4ac5-9101-4f2dd1ec270f.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-07T18-45-11-570Z-8f85df14-56ca-42e1-b51d-3cf9198a54ab.log
 create mode 100644 legacy/20260409 humility/backend/.log/humility legacy.log
 create mode 100644 legacy/20260409 humility/backend/.log/humility.log
 create mode 100644 legacy/20260409 humility/backend/compute/act.js
 create mode 100644 legacy/20260409 humility/backend/compute/ask.js
 create mode 100644 legacy/20260409 humility/backend/compute/begin.js
 create mode 100644 legacy/20260409 humility/backend/compute/decide.js
 create mode 100644 legacy/20260409 humility/backend/compute/load.js
 create mode 100644 legacy/20260409 humility/backend/compute/loop.js
 create mode 100644 legacy/20260409 humility/backend/compute/parse.js
 create mode 100644 legacy/20260409 humility/backend/compute/plan.js
 create mode 100644 legacy/20260409 humility/backend/compute/prepare.js
 create mode 100644 legacy/20260409 humility/backend/compute/rest.js
 create mode 100644 legacy/20260409 humility/backend/compute/spec.md
 create mode 100644 legacy/20260409 humility/backend/compute/test/act.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/ask.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/computer_graphics.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/load.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/parse.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/prepare.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/tools.js
 create mode 100644 legacy/20260409 humility/backend/compute/tools/edit.js
 create mode 100644 legacy/20260409 humility/backend/compute/tools/read.js
 create mode 100644 legacy/20260409 humility/backend/compute/tools/shell.js
 create mode 100644 legacy/20260409 humility/backend/compute/tools/write.js
 create mode 100644 legacy/20260409 humility/backend/connect/browser.js
 create mode 100644 legacy/20260409 humility/backend/connect/chatgpt.js
 create mode 100644 legacy/20260409 humility/backend/connect/deepseek.js
 create mode 100644 legacy/20260409 humility/backend/connect/listen.js
 create mode 100644 legacy/20260409 humility/backend/connect/mock.js
 create mode 100644 legacy/20260409 humility/backend/connect/ollama.js
 create mode 100644 legacy/20260409 humility/backend/connect/readme.md
 create mode 100644 legacy/20260409 humility/backend/connect/send.js
 create mode 100644 legacy/20260409 humility/backend/connect/sessions.js
 create mode 100644 legacy/20260409 humility/backend/connect/test/browse.js
 create mode 100644 legacy/20260409 humility/backend/connect/test/send.js
 create mode 100644 legacy/20260409 humility/backend/lib/log.ts
 create mode 100644 legacy/20260409 humility/backend/lib/test/log.ts
 create mode 100644 legacy/20260409 humility/backend/package.json
 create mode 100644 legacy/20260409 humility/backend/readme.md
 create mode 100644 legacy/20260409 humility/backend/reference.md
 create mode 100644 legacy/20260409 humility/backend/serve/serve.js
 create mode 100644 legacy/20260409 humility/backend/spec.md
 create mode 100644 legacy/20260409 humility/backend/store/index.js
 create mode 100644 legacy/20260409 humility/backend/store/init.js
 create mode 100644 legacy/20260409 humility/backend/store/moves.js
 create mode 100644 legacy/20260409 humility/backend/store/schema.js
 create mode 100644 legacy/20260409 humility/backend/store/sessions.js
 create mode 100644 legacy/20260409 humility/backend/store/test/test.js
 create mode 100644 legacy/20260409 humility/backend/types.d.ts
 create mode 100644 legacy/20260409 humility/eslint.config.js
 create mode 100644 legacy/20260409 humility/frontend/app.jsx
 create mode 100644 legacy/20260409 humility/frontend/design/Button.jsx
 create mode 100644 legacy/20260409 humility/frontend/design/Input.jsx
 create mode 100644 legacy/20260409 humility/frontend/design/readme.md
 create mode 100644 legacy/20260409 humility/frontend/index.html
 create mode 100644 legacy/20260409 humility/frontend/main.jsx
 create mode 100644 legacy/20260409 humility/frontend/package.json
 create mode 100644 legacy/20260409 humility/frontend/postcss.config.js
 create mode 100644 legacy/20260409 humility/frontend/readme.md
 create mode 100644 legacy/20260409 humility/frontend/storybook.jsx
 create mode 100644 legacy/20260409 humility/frontend/tailwind.config.js
 create mode 100644 legacy/20260409 humility/frontend/tailwind.css
 create mode 100644 legacy/20260409 humility/frontend/vite.config.js
 create mode 100644 legacy/20260409 humility/jsconfig.json
 create mode 100644 legacy/20260409 humility/misc/document.md
 create mode 100644 legacy/20260409 humility/package.json
 create mode 100644 legacy/20260409 humility/pnpm-lock.yaml
 create mode 100644 legacy/20260409 humility/pnpm-workspace.yaml
 create mode 100644 legacy/20260409 humility/script/ports.js
 create mode 100644 legacy/20260409 humility/script/run.js
 create mode 100644 legacy/20260512 docs all/all.md
 create mode 100644 legacy/20260514 source lib log/log.ts
 create mode 100644 legacy/20260520 source cli/changes.md
 create mode 100644 legacy/20260520 source cli/cli.ts
 create mode 100644 legacy/20260520 source cli/notes.md
 create mode 100644 legacy/20260520 source cli/package.json
 create mode 100644 legacy/20260520 source cli/pnpm-lock.yaml
 create mode 100644 legacy/20260520 source cli/readme.md
 create mode 100644 legacy/20260520 source cli/temp/chalk_poc.ts
 create mode 100644 legacy/20260520 source cli/temp/commander_poc.ts
 create mode 100644 legacy/20260520 source cli/test/hello.ts
 create mode 100644 legacy/20260520 source cli/todo.md
 create mode 100644 legacy/20260627 eslint plugin strict await/eslint-plugin-strict-await.js
 create mode 100644 legacy/20260627 eslint plugin strict await/eslint.config.js
 create mode 100644 legacy/20260627 eslint plugin strict await/test-strict-await.js
 create mode 100644 legacy/readme.md
 create mode 100644 message.md
 create mode 100644 package.json
 create mode 100644 pnpm-lock.yaml
 create mode 100644 readme.md
 create mode 100755 scripts/b/index.js
 create mode 100755 scripts/b/install.sh
 create mode 100644 scripts/b/package.json
 create mode 100644 scripts/b/readme.md
 create mode 100644 source/action/readme.md
 create mode 100644 source/backend/package.json
 create mode 100644 source/backend/pnpm-lock.yaml
 create mode 100644 source/backend/readme.md
 create mode 100644 source/backend/serve.ts
 create mode 100644 source/backend/tsconfig.json
 create mode 100644 source/cli/package.json
 create mode 100644 source/cli/readme.md
 create mode 100644 source/lib/changes.md
 create mode 100644 source/lib/each.ts
 create mode 100644 source/lib/env.ts
 create mode 100644 source/lib/file.ts
 create mode 100644 source/lib/global.ts
 create mode 100644 source/lib/handle.ts
 create mode 100644 source/lib/log.ts
 create mode 100644 source/lib/log_fs.ts
 create mode 100644 source/lib/readme.md
 create mode 100644 source/lib/result.ts
 create mode 100644 source/lib/run.ts
 create mode 100644 source/lib/std.ts
 create mode 100644 source/lib/test/await import.ts
 create mode 100644 source/lib/test/each.ts
 create mode 100644 source/lib/test/file append nonexisting.ts
 create mode 100644 source/lib/test/file clear.ts
 create mode 100644 source/lib/test/file read stdin.ts
 create mode 100644 source/lib/test/file write no content touch.ts
 create mode 100644 source/lib/test/file write stdout.ts
 create mode 100644 source/lib/test/file.ts
 create mode 100644 source/lib/test/global.ts
 create mode 100644 source/lib/test/handle.ts
 create mode 100644 source/lib/test/log file.ts
 create mode 100644 source/lib/test/log.ts
 create mode 100644 source/lib/test/result.ts
 create mode 100644 source/lib/test/run.ts
 create mode 100644 source/lib/test/temp.ts
 create mode 100644 source/lib/test/temp.tsx
 create mode 100644 source/readme.md
 create mode 100644 source/web/app.css
 create mode 100644 source/web/app.tsx
 create mode 100644 source/web/component/Button.tsx
 create mode 100644 source/web/component/Checkbox.tsx
 create mode 100644 source/web/component/ContextMenu.tsx
 create mode 100644 source/web/component/Input.tsx
 create mode 100644 source/web/component/NumberField.tsx
 create mode 100644 source/web/component/ScrollArea.tsx
 create mode 100644 source/web/component/Select.tsx
 create mode 100644 source/web/component/Slider.tsx
 create mode 100644 source/web/component/Switch.tsx
 create mode 100644 source/web/component/Toggle.tsx
 create mode 100644 source/web/component/Tooltip.tsx
 create mode 100644 source/web/component/app.tsx
 create mode 100644 source/web/component/index.html
 create mode 100644 source/web/component/index.tsx
 create mode 100644 source/web/design/adwaita/adwaita.css
 create mode 100644 source/web/design/adwaita/adwaita.yaml
 create mode 100644 source/web/design/adwaita/readme.md
 create mode 100644 source/web/design/plain/readme.md
 create mode 100644 source/web/design/readme.md
 create mode 100644 source/web/design/utilitarian/readme.md
 create mode 100644 source/web/design/utilitarian/utilitarian.css
 create mode 100644 source/web/design/utilitarian/utilitarian.yaml
 create mode 100644 source/web/docs/convert.md
 create mode 100644 source/web/docs/design tokens.md
 create mode 100644 source/web/docs/keyboard.md
 create mode 100644 source/web/env.json
 create mode 100644 source/web/global.ts
 create mode 100644 source/web/index.html
 create mode 100644 source/web/index.tsx
 create mode 100644 source/web/knowledge/name component classname.md
 create mode 100644 source/web/lib/call.ts
 create mode 100644 source/web/lib/keyboard.ts
 create mode 100644 source/web/lib/keyboard.use.ts
 create mode 100644 source/web/lib/sync_theme.ts
 create mode 100644 source/web/package.json
 create mode 100644 source/web/pnpm-lock.yaml
 create mode 100644 source/web/port.json
 create mode 100644 source/web/readme.md
 create mode 100644 source/web/script/changes.md
 create mode 100755 source/web/script/convert.sh
 create mode 100644 source/web/script/convert.ts
 create mode 100644 source/web/script/modernize.ts
 create mode 100644 source/web/script/oklch.ts
 create mode 100644 source/web/script/readme.md
 create mode 100644 source/web/script/spacing scale.ts
 create mode 100644 source/web/script/test/convert.ts
 create mode 100644 source/web/script/test/modernize.ts
 create mode 100644 source/web/script/test/oklch gray.ts
 create mode 100644 source/web/script/test/oklch.ts
 create mode 100644 source/web/tsconfig.json
 create mode 100644 todo.md
 create mode 100644 tsconfig.json
 ...Projects/temp/new repo % git checkout -b original-state
rm -rf *
Switched to a new branch 'original-state'
zsh: sure you want to delete all 19 files in /home/fira/Projects/temp/new repo [yn]? y
 ...Projects/temp/new repo % git branch
  master
* original-state
 ...Projects/temp/new repo % git switch master
D       AGENTS.md
D       CLAUDE.md
D       bunfig.toml
D       changes.md
D       contributing.md
D       copying.md
D       docs/readme.en.md
D       drafts/readme.md
D       eslint.config.js
D       legacy/20260124 test groqcloud/20260116_224617/step_01_plan.md
D       legacy/20260124 test groqcloud/20260116_224617/step_01_write.md
D       legacy/20260124 test groqcloud/20260116_224617/step_02_plan.md
D       legacy/20260124 test groqcloud/20260116_224617/step_02_write.md
D       legacy/20260124 test groqcloud/20260116_224617/step_03_plan.md
D       legacy/20260124 test groqcloud/20260116_224617/step_03_write.md
D       legacy/20260124 test groqcloud/20260116_224617/step_04_plan.md
D       legacy/20260124 test groqcloud/20260116_224617/step_04_write.md
D       legacy/20260124 test groqcloud/20260116_224617/step_05_plan.md
D       legacy/20260124 test groqcloud/20260116_224617/step_05_write.md
D       legacy/20260124 test groqcloud/20260116_224617/step_06_plan.md
D       legacy/20260124 test groqcloud/20260116_224617/step_06_write.md
D       legacy/20260124 test groqcloud/20260116_225211/goal.md
D       legacy/20260124 test groqcloud/20260116_225211/step_01_planner_output.md
D       legacy/20260124 test groqcloud/20260116_225211/step_01_planner_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_01_section.md
D       legacy/20260124 test groqcloud/20260116_225211/step_01_writer_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_02_planner_output.md
D       legacy/20260124 test groqcloud/20260116_225211/step_02_planner_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_02_section.md
D       legacy/20260124 test groqcloud/20260116_225211/step_02_writer_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_03_planner_output.md
D       legacy/20260124 test groqcloud/20260116_225211/step_03_planner_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_03_section.md
D       legacy/20260124 test groqcloud/20260116_225211/step_03_writer_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_04_planner_output.md
D       legacy/20260124 test groqcloud/20260116_225211/step_04_planner_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_04_section.md
D       legacy/20260124 test groqcloud/20260116_225211/step_04_writer_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_05_planner_output.md
D       legacy/20260124 test groqcloud/20260116_225211/step_05_planner_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_05_section.md
D       legacy/20260124 test groqcloud/20260116_225211/step_05_writer_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_06_planner_output.md
D       legacy/20260124 test groqcloud/20260116_225211/step_06_planner_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_06_section.md
D       legacy/20260124 test groqcloud/20260116_225211/step_06_writer_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_07_planner_output.md
D       legacy/20260124 test groqcloud/20260116_225211/step_07_planner_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_07_section.md
D       legacy/20260124 test groqcloud/20260116_225211/step_07_writer_prompt.md
D       legacy/20260124 test groqcloud/20260116_225211/step_08_planner_error.md
D       legacy/20260124 test groqcloud/20260116_225211/step_08_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/goal.md
D       legacy/20260124 test groqcloud/chemistry/step_001_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_001_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_001_section.md
D       legacy/20260124 test groqcloud/chemistry/step_001_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_002_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_002_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_002_section.md
D       legacy/20260124 test groqcloud/chemistry/step_002_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_003_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_003_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_003_section.md
D       legacy/20260124 test groqcloud/chemistry/step_003_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_004_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_004_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_004_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_004_section.md
D       legacy/20260124 test groqcloud/chemistry/step_004_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_004_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_005_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_005_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_005_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_005_section.md
D       legacy/20260124 test groqcloud/chemistry/step_005_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_005_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_006_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_006_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_006_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_006_section.md
D       legacy/20260124 test groqcloud/chemistry/step_006_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_006_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_007_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_007_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_007_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_007_section.md
D       legacy/20260124 test groqcloud/chemistry/step_007_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_007_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_008_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_008_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_008_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_008_section.md
D       legacy/20260124 test groqcloud/chemistry/step_008_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_008_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_009_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_009_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_009_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_009_section.md
D       legacy/20260124 test groqcloud/chemistry/step_009_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_009_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_010_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_010_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_010_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_010_section.md
D       legacy/20260124 test groqcloud/chemistry/step_010_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_010_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_011_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_011_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_011_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_011_section.md
D       legacy/20260124 test groqcloud/chemistry/step_011_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_011_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_012_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_012_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_012_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_012_section.md
D       legacy/20260124 test groqcloud/chemistry/step_012_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_012_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_013_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_013_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_013_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_013_section.md
D       legacy/20260124 test groqcloud/chemistry/step_013_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_013_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_014_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_014_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_014_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_014_section.md
D       legacy/20260124 test groqcloud/chemistry/step_014_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_014_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_015_planner_output.md
D       legacy/20260124 test groqcloud/chemistry/step_015_planner_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_015_planner_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_015_section.md
D       legacy/20260124 test groqcloud/chemistry/step_015_writer_prompt.md
D       legacy/20260124 test groqcloud/chemistry/step_015_writer_rate_limit.md
D       legacy/20260124 test groqcloud/chemistry/step_016_planner_error.md
D       legacy/20260124 test groqcloud/chemistry/step_016_planner_prompt.md
D       legacy/20260124 test groqcloud/play.py
D       legacy/20260124 test integration userscript dog fetch/fetch.py
D       legacy/20260124 test integration userscript dog fetch/scripts/dog.js
D       legacy/20260205 backend compute/agent.js
D       legacy/20260205 backend compute/ask.js
D       legacy/20260205 backend compute/limit.js
D       legacy/20260205 backend compute/parse.js
D       legacy/20260205 backend compute/prompt.js
D       legacy/20260205 backend compute/reference.md
D       legacy/20260205 backend compute/run.js
D       legacy/20260205 backend compute/state.js
D       legacy/20260205 backend compute/test/ask.js
D       legacy/20260205 backend compute/test/chemistry.js
D       legacy/20260205 backend compute/test/parse.js
D       legacy/20260205 backend compute/tool.js
D       legacy/20260205 backend store/db.js
D       legacy/20260205 backend store/flow.js
D       legacy/20260205 backend store/link.js
D       legacy/20260205 backend store/session.js
D       legacy/20260205 backend store/test/flow.js
D       legacy/20260205 backend store/test/see.js
D       legacy/20260205 backend store/thing.js
D       legacy/20260409 humility/backend/.log/2026-03-05T17-55-38-477Z-26e1409d-62fe-435f-8f5d-1fd8f07b0725.log
D       legacy/20260409 humility/backend/.log/2026-03-05T17-57-30-314Z-c3fd99e9-6d82-4f20-803f-36629e681100.log
D       legacy/20260409 humility/backend/.log/2026-03-07T18-42-35-255Z-77dc174a-9070-4cfc-ab93-a26e684b639f.log
D       legacy/20260409 humility/backend/.log/2026-03-07T18-43-43-931Z-1cae340a-66bb-41c5-b304-5013e47a00b0.log
D       legacy/20260409 humility/backend/.log/2026-03-07T18-44-39-587Z-44d42e6e-5d78-4ac5-9101-4f2dd1ec270f.log
D       legacy/20260409 humility/backend/.log/2026-03-07T18-45-11-570Z-8f85df14-56ca-42e1-b51d-3cf9198a54ab.log
D       legacy/20260409 humility/backend/.log/humility legacy.log
D       legacy/20260409 humility/backend/.log/humility.log
D       legacy/20260409 humility/backend/compute/act.js
D       legacy/20260409 humility/backend/compute/ask.js
D       legacy/20260409 humility/backend/compute/begin.js
D       legacy/20260409 humility/backend/compute/decide.js
D       legacy/20260409 humility/backend/compute/load.js
D       legacy/20260409 humility/backend/compute/loop.js
D       legacy/20260409 humility/backend/compute/parse.js
D       legacy/20260409 humility/backend/compute/plan.js
D       legacy/20260409 humility/backend/compute/prepare.js
D       legacy/20260409 humility/backend/compute/rest.js
D       legacy/20260409 humility/backend/compute/spec.md
D       legacy/20260409 humility/backend/compute/test/act.js
D       legacy/20260409 humility/backend/compute/test/ask.js
D       legacy/20260409 humility/backend/compute/test/computer_graphics.js
D       legacy/20260409 humility/backend/compute/test/load.js
D       legacy/20260409 humility/backend/compute/test/parse.js
D       legacy/20260409 humility/backend/compute/test/prepare.js
D       legacy/20260409 humility/backend/compute/test/tools.js
D       legacy/20260409 humility/backend/compute/tools/edit.js
D       legacy/20260409 humility/backend/compute/tools/read.js
D       legacy/20260409 humility/backend/compute/tools/shell.js
D       legacy/20260409 humility/backend/compute/tools/write.js
D       legacy/20260409 humility/backend/connect/browser.js
D       legacy/20260409 humility/backend/connect/chatgpt.js
D       legacy/20260409 humility/backend/connect/deepseek.js
D       legacy/20260409 humility/backend/connect/listen.js
D       legacy/20260409 humility/backend/connect/mock.js
D       legacy/20260409 humility/backend/connect/ollama.js
D       legacy/20260409 humility/backend/connect/readme.md
D       legacy/20260409 humility/backend/connect/send.js
D       legacy/20260409 humility/backend/connect/sessions.js
D       legacy/20260409 humility/backend/connect/test/browse.js
D       legacy/20260409 humility/backend/connect/test/send.js
D       legacy/20260409 humility/backend/lib/log.ts
D       legacy/20260409 humility/backend/lib/test/log.ts
D       legacy/20260409 humility/backend/package.json
D       legacy/20260409 humility/backend/readme.md
D       legacy/20260409 humility/backend/reference.md
D       legacy/20260409 humility/backend/serve/serve.js
D       legacy/20260409 humility/backend/spec.md
D       legacy/20260409 humility/backend/store/index.js
D       legacy/20260409 humility/backend/store/init.js
D       legacy/20260409 humility/backend/store/moves.js
D       legacy/20260409 humility/backend/store/schema.js
D       legacy/20260409 humility/backend/store/sessions.js
D       legacy/20260409 humility/backend/store/test/test.js
D       legacy/20260409 humility/backend/types.d.ts
D       legacy/20260409 humility/eslint.config.js
D       legacy/20260409 humility/frontend/app.jsx
D       legacy/20260409 humility/frontend/design/Button.jsx
D       legacy/20260409 humility/frontend/design/Input.jsx
D       legacy/20260409 humility/frontend/design/readme.md
D       legacy/20260409 humility/frontend/index.html
D       legacy/20260409 humility/frontend/main.jsx
D       legacy/20260409 humility/frontend/package.json
D       legacy/20260409 humility/frontend/postcss.config.js
D       legacy/20260409 humility/frontend/readme.md
D       legacy/20260409 humility/frontend/storybook.jsx
D       legacy/20260409 humility/frontend/tailwind.config.js
D       legacy/20260409 humility/frontend/tailwind.css
D       legacy/20260409 humility/frontend/vite.config.js
D       legacy/20260409 humility/jsconfig.json
D       legacy/20260409 humility/misc/document.md
D       legacy/20260409 humility/package.json
D       legacy/20260409 humility/pnpm-lock.yaml
D       legacy/20260409 humility/pnpm-workspace.yaml
D       legacy/20260409 humility/script/ports.js
D       legacy/20260409 humility/script/run.js
D       legacy/20260512 docs all/all.md
D       legacy/20260514 source lib log/log.ts
D       legacy/20260520 source cli/changes.md
D       legacy/20260520 source cli/cli.ts
D       legacy/20260520 source cli/notes.md
D       legacy/20260520 source cli/package.json
D       legacy/20260520 source cli/pnpm-lock.yaml
D       legacy/20260520 source cli/readme.md
D       legacy/20260520 source cli/temp/chalk_poc.ts
D       legacy/20260520 source cli/temp/commander_poc.ts
D       legacy/20260520 source cli/test/hello.ts
D       legacy/20260520 source cli/todo.md
D       legacy/20260627 eslint plugin strict await/eslint-plugin-strict-await.js
D       legacy/20260627 eslint plugin strict await/eslint.config.js
D       legacy/20260627 eslint plugin strict await/test-strict-await.js
D       legacy/readme.md
D       message.md
D       package.json
D       pnpm-lock.yaml
D       readme.md
D       scripts/b/index.js
D       scripts/b/install.sh
D       scripts/b/package.json
D       scripts/b/readme.md
D       source/action/readme.md
D       source/backend/package.json
D       source/backend/pnpm-lock.yaml
D       source/backend/readme.md
D       source/backend/serve.ts
D       source/backend/tsconfig.json
D       source/cli/package.json
D       source/cli/readme.md
D       source/lib/changes.md
D       source/lib/each.ts
D       source/lib/env.ts
D       source/lib/file.ts
D       source/lib/global.ts
D       source/lib/handle.ts
D       source/lib/log.ts
D       source/lib/log_fs.ts
D       source/lib/readme.md
D       source/lib/result.ts
D       source/lib/run.ts
D       source/lib/std.ts
D       source/lib/test/await import.ts
D       source/lib/test/each.ts
D       source/lib/test/file append nonexisting.ts
D       source/lib/test/file clear.ts
D       source/lib/test/file read stdin.ts
D       source/lib/test/file write no content touch.ts
D       source/lib/test/file write stdout.ts
D       source/lib/test/file.ts
D       source/lib/test/global.ts
D       source/lib/test/handle.ts
D       source/lib/test/log file.ts
D       source/lib/test/log.ts
D       source/lib/test/result.ts
D       source/lib/test/run.ts
D       source/lib/test/temp.ts
D       source/lib/test/temp.tsx
D       source/readme.md
D       source/web/app.css
D       source/web/app.tsx
D       source/web/component/Button.tsx
D       source/web/component/Checkbox.tsx
D       source/web/component/ContextMenu.tsx
D       source/web/component/Input.tsx
D       source/web/component/NumberField.tsx
D       source/web/component/ScrollArea.tsx
D       source/web/component/Select.tsx
D       source/web/component/Slider.tsx
D       source/web/component/Switch.tsx
D       source/web/component/Toggle.tsx
D       source/web/component/Tooltip.tsx
D       source/web/component/app.tsx
D       source/web/component/index.html
D       source/web/component/index.tsx
D       source/web/design/adwaita/adwaita.css
D       source/web/design/adwaita/adwaita.yaml
D       source/web/design/adwaita/readme.md
D       source/web/design/plain/readme.md
D       source/web/design/readme.md
D       source/web/design/utilitarian/readme.md
D       source/web/design/utilitarian/utilitarian.css
D       source/web/design/utilitarian/utilitarian.yaml
D       source/web/docs/convert.md
D       source/web/docs/design tokens.md
D       source/web/docs/keyboard.md
D       source/web/env.json
D       source/web/global.ts
D       source/web/index.html
D       source/web/index.tsx
D       source/web/knowledge/name component classname.md
D       source/web/lib/call.ts
D       source/web/lib/keyboard.ts
D       source/web/lib/keyboard.use.ts
D       source/web/lib/sync_theme.ts
D       source/web/package.json
D       source/web/pnpm-lock.yaml
D       source/web/port.json
D       source/web/readme.md
D       source/web/script/changes.md
D       source/web/script/convert.sh
D       source/web/script/convert.ts
D       source/web/script/modernize.ts
D       source/web/script/oklch.ts
D       source/web/script/readme.md
D       source/web/script/spacing scale.ts
D       source/web/script/test/convert.ts
D       source/web/script/test/modernize.ts
D       source/web/script/test/oklch gray.ts
D       source/web/script/test/oklch.ts
D       source/web/tsconfig.json
D       todo.md
D       tsconfig.json
Switched to branch 'master'
 ...Projects/temp/new repo % cd '/home/fira/Projects/temp/new repo'
 ...Projects/temp/new repo % git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
Initialized empty Git repository in /home/fira/Projects/temp/new repo/.git/
 ...Projects/temp/new repo % git add .
git commit -m "Copied folder state with edits and deletions"

[master (root-commit) 7634d47] Copied folder state with edits and deletions
 383 files changed, 30849 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 .hidden
 create mode 100644 .knowledge/agent complete.md
 create mode 100644 .knowledge/agent contributing.md
 create mode 100644 .knowledge/agent search.md
 create mode 100644 .knowledge/agent start.md
 create mode 100644 .knowledge/agent tasks.md
 create mode 100644 .knowledge/agent test.md
 create mode 100644 .knowledge/agent work.md
 create mode 100644 .knowledge/agent write.md
 create mode 100644 .knowledge/changes.md
 create mode 100644 .knowledge/design atom components.md
 create mode 100644 .knowledge/design component library.md
 create mode 100644 .knowledge/design token unit.md
 create mode 100644 .knowledge/design tokens.md
 create mode 100644 .knowledge/legacy/20260603 merge web styling/web_styling.md
 create mode 100644 .knowledge/legacy/20260603 merge web styling/web_styling_naming.md
 create mode 100644 .knowledge/legacy/20260604 message/message.md
 create mode 100644 .knowledge/name component classname.md
 create mode 100644 .knowledge/name prefer singular.md
 create mode 100644 .knowledge/readme.md
 create mode 100644 .knowledge/ts commenting.md
 create mode 100644 .knowledge/ts error handling.md
 create mode 100644 .knowledge/ts import tsconfig paths.md
 create mode 100644 .knowledge/ts logging.md
 create mode 100644 .knowledge/ts naming.md
 create mode 100644 .knowledge/ts programming style.md
 create mode 100644 .knowledge/ts tech stack.md
 create mode 100644 .knowledge/web accessibility.md
 create mode 100644 .knowledge/web styling.md
 create mode 100644 .npmrc
 create mode 120000 AGENTS.md
 create mode 120000 CLAUDE.md
 create mode 100644 bunfig.toml
 create mode 100644 changes.md
 create mode 100644 contributing.md
 create mode 100644 copying.md
 create mode 100644 docs/readme.en.md
 create mode 100644 drafts/readme.md
 create mode 100644 eslint.config.js
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_01_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_01_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_02_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_02_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_03_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_03_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_04_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_04_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_05_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_05_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_06_plan.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_224617/step_06_write.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/goal.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_01_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_01_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_01_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_01_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_02_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_02_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_02_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_02_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_03_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_03_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_03_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_03_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_04_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_04_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_04_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_04_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_05_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_05_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_05_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_05_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_06_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_06_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_06_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_06_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_07_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_07_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_07_section.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_07_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_08_planner_error.md
 create mode 100644 legacy/20260124 test groqcloud/20260116_225211/step_08_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/goal.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_001_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_001_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_001_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_001_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_002_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_002_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_002_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_002_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_003_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_003_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_003_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_003_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_004_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_005_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_006_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_007_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_008_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_009_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_010_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_011_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_012_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_013_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_014_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_planner_output.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_planner_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_section.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_writer_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_015_writer_rate_limit.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_016_planner_error.md
 create mode 100644 legacy/20260124 test groqcloud/chemistry/step_016_planner_prompt.md
 create mode 100644 legacy/20260124 test groqcloud/play.py
 create mode 100644 legacy/20260124 test integration userscript dog fetch/fetch.py
 create mode 100644 legacy/20260124 test integration userscript dog fetch/scripts/dog.js
 create mode 100644 legacy/20260205 backend compute/agent.js
 create mode 100644 legacy/20260205 backend compute/ask.js
 create mode 100644 legacy/20260205 backend compute/limit.js
 create mode 100644 legacy/20260205 backend compute/parse.js
 create mode 100644 legacy/20260205 backend compute/prompt.js
 create mode 100644 legacy/20260205 backend compute/reference.md
 create mode 100644 legacy/20260205 backend compute/run.js
 create mode 100644 legacy/20260205 backend compute/state.js
 create mode 100644 legacy/20260205 backend compute/test/ask.js
 create mode 100644 legacy/20260205 backend compute/test/chemistry.js
 create mode 100644 legacy/20260205 backend compute/test/parse.js
 create mode 100644 legacy/20260205 backend compute/tool.js
 create mode 100644 legacy/20260205 backend store/db.js
 create mode 100644 legacy/20260205 backend store/flow.js
 create mode 100644 legacy/20260205 backend store/link.js
 create mode 100644 legacy/20260205 backend store/session.js
 create mode 100644 legacy/20260205 backend store/test/flow.js
 create mode 100644 legacy/20260205 backend store/test/see.js
 create mode 100644 legacy/20260205 backend store/thing.js
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-05T17-55-38-477Z-26e1409d-62fe-435f-8f5d-1fd8f07b0725.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-05T17-57-30-314Z-c3fd99e9-6d82-4f20-803f-36629e681100.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-07T18-42-35-255Z-77dc174a-9070-4cfc-ab93-a26e684b639f.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-07T18-43-43-931Z-1cae340a-66bb-41c5-b304-5013e47a00b0.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-07T18-44-39-587Z-44d42e6e-5d78-4ac5-9101-4f2dd1ec270f.log
 create mode 100644 legacy/20260409 humility/backend/.log/2026-03-07T18-45-11-570Z-8f85df14-56ca-42e1-b51d-3cf9198a54ab.log
 create mode 100644 legacy/20260409 humility/backend/.log/humility legacy.log
 create mode 100644 legacy/20260409 humility/backend/.log/humility.log
 create mode 100644 legacy/20260409 humility/backend/compute/act.js
 create mode 100644 legacy/20260409 humility/backend/compute/ask.js
 create mode 100644 legacy/20260409 humility/backend/compute/begin.js
 create mode 100644 legacy/20260409 humility/backend/compute/decide.js
 create mode 100644 legacy/20260409 humility/backend/compute/load.js
 create mode 100644 legacy/20260409 humility/backend/compute/loop.js
 create mode 100644 legacy/20260409 humility/backend/compute/parse.js
 create mode 100644 legacy/20260409 humility/backend/compute/plan.js
 create mode 100644 legacy/20260409 humility/backend/compute/prepare.js
 create mode 100644 legacy/20260409 humility/backend/compute/rest.js
 create mode 100644 legacy/20260409 humility/backend/compute/spec.md
 create mode 100644 legacy/20260409 humility/backend/compute/test/act.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/ask.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/computer_graphics.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/load.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/parse.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/prepare.js
 create mode 100644 legacy/20260409 humility/backend/compute/test/tools.js
 create mode 100644 legacy/20260409 humility/backend/compute/tools/edit.js
 create mode 100644 legacy/20260409 humility/backend/compute/tools/read.js
 create mode 100644 legacy/20260409 humility/backend/compute/tools/shell.js
 create mode 100644 legacy/20260409 humility/backend/compute/tools/write.js
 create mode 100644 legacy/20260409 humility/backend/connect/browser.js
 create mode 100644 legacy/20260409 humility/backend/connect/chatgpt.js
 create mode 100644 legacy/20260409 humility/backend/connect/deepseek.js
 create mode 100644 legacy/20260409 humility/backend/connect/listen.js
 create mode 100644 legacy/20260409 humility/backend/connect/mock.js
 create mode 100644 legacy/20260409 humility/backend/connect/ollama.js
 create mode 100644 legacy/20260409 humility/backend/connect/readme.md
 create mode 100644 legacy/20260409 humility/backend/connect/send.js
 create mode 100644 legacy/20260409 humility/backend/connect/sessions.js
 create mode 100644 legacy/20260409 humility/backend/connect/test/browse.js
 create mode 100644 legacy/20260409 humility/backend/connect/test/send.js
 create mode 100644 legacy/20260409 humility/backend/lib/log.ts
 create mode 100644 legacy/20260409 humility/backend/lib/test/log.ts
 create mode 100644 legacy/20260409 humility/backend/package.json
 create mode 100644 legacy/20260409 humility/backend/readme.md
 create mode 100644 legacy/20260409 humility/backend/reference.md
 create mode 100644 legacy/20260409 humility/backend/serve/serve.js
 create mode 100644 legacy/20260409 humility/backend/spec.md
 create mode 100644 legacy/20260409 humility/backend/store/index.js
 create mode 100644 legacy/20260409 humility/backend/store/init.js
 create mode 100644 legacy/20260409 humility/backend/store/moves.js
 create mode 100644 legacy/20260409 humility/backend/store/schema.js
 create mode 100644 legacy/20260409 humility/backend/store/sessions.js
 create mode 100644 legacy/20260409 humility/backend/store/test/test.js
 create mode 100644 legacy/20260409 humility/backend/types.d.ts
 create mode 100644 legacy/20260409 humility/eslint.config.js
 create mode 100644 legacy/20260409 humility/frontend/app.jsx
 create mode 100644 legacy/20260409 humility/frontend/design/Button.jsx
 create mode 100644 legacy/20260409 humility/frontend/design/Input.jsx
 create mode 100644 legacy/20260409 humility/frontend/design/readme.md
 create mode 100644 legacy/20260409 humility/frontend/index.html
 create mode 100644 legacy/20260409 humility/frontend/main.jsx
 create mode 100644 legacy/20260409 humility/frontend/package.json
 create mode 100644 legacy/20260409 humility/frontend/postcss.config.js
 create mode 100644 legacy/20260409 humility/frontend/readme.md
 create mode 100644 legacy/20260409 humility/frontend/storybook.jsx
 create mode 100644 legacy/20260409 humility/frontend/tailwind.config.js
 create mode 100644 legacy/20260409 humility/frontend/tailwind.css
 create mode 100644 legacy/20260409 humility/frontend/vite.config.js
 create mode 100644 legacy/20260409 humility/jsconfig.json
 create mode 100644 legacy/20260409 humility/misc/document.md
 create mode 100644 legacy/20260409 humility/package.json
 create mode 100644 legacy/20260409 humility/pnpm-lock.yaml
 create mode 100644 legacy/20260409 humility/pnpm-workspace.yaml
 create mode 100644 legacy/20260409 humility/script/ports.js
 create mode 100644 legacy/20260409 humility/script/run.js
 create mode 100644 legacy/20260512 docs all/all.md
 create mode 100644 legacy/20260514 source lib log/log.ts
 create mode 100644 legacy/20260520 source cli/changes.md
 create mode 100644 legacy/20260520 source cli/cli.ts
 create mode 100644 legacy/20260520 source cli/notes.md
 create mode 100644 legacy/20260520 source cli/package.json
 create mode 100644 legacy/20260520 source cli/pnpm-lock.yaml
 create mode 100644 legacy/20260520 source cli/readme.md
 create mode 100644 legacy/20260520 source cli/temp/chalk_poc.ts
 create mode 100644 legacy/20260520 source cli/temp/commander_poc.ts
 create mode 100644 legacy/20260520 source cli/test/hello.ts
 create mode 100644 legacy/20260520 source cli/todo.md
 create mode 100644 legacy/20260627 eslint plugin strict await/eslint-plugin-strict-await.js
 create mode 100644 legacy/20260627 eslint plugin strict await/eslint.config.js
 create mode 100644 legacy/20260627 eslint plugin strict await/test-strict-await.js
 create mode 100644 legacy/readme.md
 create mode 100644 message.md
 create mode 100644 package.json
 create mode 100644 pnpm-lock.yaml
 create mode 100644 readme.md
 create mode 100755 scripts/b/index.js
 create mode 100755 scripts/b/install.sh
 create mode 100644 scripts/b/package.json
 create mode 100644 scripts/b/readme.md
 create mode 100644 source/action/readme.md
 create mode 100644 source/backend/package.json
 create mode 100644 source/backend/pnpm-lock.yaml
 create mode 100644 source/backend/readme.md
 create mode 100644 source/backend/serve.ts
 create mode 100644 source/backend/tsconfig.json
 create mode 100644 source/cli/package.json
 create mode 100644 source/cli/readme.md
 create mode 100644 source/lib/changes.md
 create mode 100644 source/lib/each.ts
 create mode 100644 source/lib/env.ts
 create mode 100644 source/lib/file.ts
 create mode 100644 source/lib/global.ts
 create mode 100644 source/lib/handle.ts
 create mode 100644 source/lib/log.ts
 create mode 100644 source/lib/log_fs.ts
 create mode 100644 source/lib/readme.md
 create mode 100644 source/lib/result.ts
 create mode 100644 source/lib/run.ts
 create mode 100644 source/lib/std.ts
 create mode 100644 source/lib/test/await import.ts
 create mode 100644 source/lib/test/each.ts
 create mode 100644 source/lib/test/file append nonexisting.ts
 create mode 100644 source/lib/test/file clear.ts
 create mode 100644 source/lib/test/file read stdin.ts
 create mode 100644 source/lib/test/file write no content touch.ts
 create mode 100644 source/lib/test/file write stdout.ts
 create mode 100644 source/lib/test/file.ts
 create mode 100644 source/lib/test/global.ts
 create mode 100644 source/lib/test/handle.ts
 create mode 100644 source/lib/test/log file.ts
 create mode 100644 source/lib/test/log.ts
 create mode 100644 source/lib/test/result.ts
 create mode 100644 source/lib/test/run.ts
 create mode 100644 source/lib/test/temp.ts
 create mode 100644 source/lib/test/temp.tsx
 create mode 100644 source/readme.md
 create mode 100644 source/web/app.css
 create mode 100644 source/web/app.tsx
 create mode 100644 source/web/component/Button.tsx
 create mode 100644 source/web/component/Checkbox.tsx
 create mode 100644 source/web/component/ContextMenu.tsx
 create mode 100644 source/web/component/Input.tsx
 create mode 100644 source/web/component/NumberField.tsx
 create mode 100644 source/web/component/ScrollArea.tsx
 create mode 100644 source/web/component/Select.tsx
 create mode 100644 source/web/component/Slider.tsx
 create mode 100644 source/web/component/Switch.tsx
 create mode 100644 source/web/component/Toggle.tsx
 create mode 100644 source/web/component/Tooltip.tsx
 create mode 100644 source/web/component/app.tsx
 create mode 100644 source/web/component/index.html
 create mode 100644 source/web/component/index.tsx
 create mode 100644 source/web/design/adwaita/adwaita.css
 create mode 100644 source/web/design/adwaita/adwaita.yaml
 create mode 100644 source/web/design/adwaita/readme.md
 create mode 100644 source/web/design/plain/readme.md
 create mode 100644 source/web/design/readme.md
 create mode 100644 source/web/design/utilitarian/readme.md
 create mode 100644 source/web/design/utilitarian/utilitarian.css
 create mode 100644 source/web/design/utilitarian/utilitarian.yaml
 create mode 100644 source/web/docs/convert.md
 create mode 100644 source/web/docs/design tokens.md
 create mode 100644 source/web/docs/keyboard.md
 create mode 100644 source/web/env.json
 create mode 100644 source/web/global.ts
 create mode 100644 source/web/index.html
 create mode 100644 source/web/index.tsx
 create mode 100644 source/web/knowledge/name component classname.md
 create mode 100644 source/web/lib/call.ts
 create mode 100644 source/web/lib/keyboard.ts
 create mode 100644 source/web/lib/keyboard.use.ts
 create mode 100644 source/web/lib/sync_theme.ts
 create mode 100644 source/web/package.json
 create mode 100644 source/web/pnpm-lock.yaml
 create mode 100644 source/web/port.json
 create mode 100644 source/web/readme.md
 create mode 100644 source/web/script/changes.md
 create mode 100755 source/web/script/convert.sh
 create mode 100644 source/web/script/convert.ts
 create mode 100644 source/web/script/modernize.ts
 create mode 100644 source/web/script/oklch.ts
 create mode 100644 source/web/script/readme.md
 create mode 100644 source/web/script/spacing scale.ts
 create mode 100644 source/web/script/test/convert.ts
 create mode 100644 source/web/script/test/modernize.ts
 create mode 100644 source/web/script/test/oklch gray.ts
 create mode 100644 source/web/script/test/oklch.ts
 create mode 100644 source/web/tsconfig.json
 create mode 100644 todo.md
 create mode 100644 tsconfig.json
 ...Projects/temp/new repo % git checkout -b original-state
rm -rf *
Switched to a new branch 'original-state'
zsh: sure you want to delete all 19 files in /home/fira/Projects/temp/new repo [yn]? n
 ...Projects/temp/new repo % git checkout -b original-state
rm -rf *
fatal: a branch named 'original-state' already exists
zsh: sure you want to delete all 19 files in /home/fira/Projects/temp/new repo [yn]? y
 ...Projects/temp/new repo % git add .
git commit -m "Original folder state"
[original-state 7c10739] Original folder state
 188 files changed, 7679 insertions(+), 146 deletions(-)
 create mode 100644 compiling.md
 create mode 100644 docs/readme.md
 create mode 100644 docs/use cases.md
 create mode 100644 drafts/20260617 react counter app/app.tsx
 create mode 100644 drafts/20260617 react counter app/index.html
 create mode 100644 drafts/20260617 react counter app/index.tsx
 create mode 100644 drafts/20260617 react counter app/legacy/app 0.0.tsx
 create mode 100644 drafts/20260617 react counter app/legacy/app 0.1.tsx
 create mode 100644 drafts/20260617 react counter app/notes.md
 create mode 100644 drafts/20260617 react counter app/package.json
 create mode 100644 drafts/20260617 react counter app/pnpm-lock.yaml
 create mode 100644 drafts/20260617 react counter app/readme.md
 create mode 100644 drafts/20260617 react counter app/tsconfig.json
 create mode 100644 drafts/20260618 react app template/app.tsx
 create mode 100644 drafts/20260618 react app template/index.html
 create mode 100644 drafts/20260618 react app template/index.tsx
 create mode 100644 drafts/20260618 react app template/package.json
 create mode 100644 drafts/20260618 react app template/readme.md
 create mode 100644 drafts/20260618 react app template/tsconfig.json
 create mode 100644 notes.md
 delete mode 100755 scripts/b/install.sh
 delete mode 100644 scripts/b/package.json
 delete mode 100644 scripts/b/readme.md
 rename scripts/{b => br}/index.js (100%)
 create mode 100644 scripts/br/package.json
 create mode 100644 scripts/br/readme.md
 create mode 100644 source/action/branch.ts
 create mode 100644 source/action/chat.ts
 create mode 100644 source/action/export.ts
 create mode 100644 source/action/list.ts
 create mode 100644 source/action/new_thread.ts
 create mode 100644 source/action/test/branch.ts
 create mode 100644 source/action/test/chat nonexisting.ts
 create mode 100644 source/action/test/chat.ts
 create mode 100644 source/action/test/export.ts
 create mode 100644 source/action/test/list.ts
 create mode 100644 source/action/test/traverse.ts
 create mode 100644 source/backend/changes.md
 create mode 100644 source/backend/drafts/mock/notes.md
 create mode 100644 source/backend/drafts/request/notes.md
 create mode 100644 source/backend/drafts/serve/notes.md
 create mode 100644 source/backend/drafts/tree/notes.md
 create mode 100644 source/backend/legacy/serve poc.ts
 create mode 100644 source/backend/legacy/test/request 0.0.ts
 create mode 100644 source/backend/mock.ts
 create mode 100644 source/backend/notes.md
 create mode 100644 source/backend/repo/action/readme.md
 create mode 100644 source/backend/repo/changes.md
 create mode 100644 source/backend/repo/drafts/git clone research/changes.md
 create mode 100644 source/backend/repo/drafts/git clone research/report.md
 create mode 100644 source/backend/repo/drafts/git clone research/todo.md
 create mode 100644 source/backend/repo/notes.md
 create mode 100644 source/backend/repo/readme.md
 create mode 100644 source/backend/repo/ref/repo.sh
 create mode 100644 source/backend/repo/repo.ts
 create mode 100644 source/backend/repo/test/repo.ts
 create mode 100644 source/backend/request.ts
 create mode 100644 source/backend/store.ts
 create mode 100644 source/backend/test/request.ts
 create mode 100644 source/backend/test/tree.ts
 create mode 100644 source/backend/test/write config yaml.ts
 create mode 100644 source/backend/test/yaml.ts
 create mode 100644 source/backend/tree.ts
 create mode 100644 source/cli/changes.md
 create mode 100644 source/cli/cli.ts
 create mode 100644 source/cli/greet.ts
 create mode 100644 source/cli/spec.md
 create mode 100644 source/cli/temp/chalk.ts
 create mode 100644 source/cli/temp/chalk_poc.ts
 create mode 100644 source/cli/temp/commander.ts
 create mode 100644 source/cli/temp/commander_poc.ts
 create mode 100644 source/cli/test/help_test.ts
 create mode 100644 source/cli/todo.md
 create mode 100644 source/lib/drafts/log into file/notes.md
 create mode 100644 source/lib/drafts/result/notes.md
 create mode 100644 source/lib/legacy/app_info 0.1.ts
 create mode 100644 source/lib/legacy/file 0.0.ts
 create mode 100644 source/lib/legacy/file 0.1.ts
 create mode 100644 source/lib/legacy/global 0.1.ts
 create mode 100644 source/lib/legacy/handle 0.0.ts
 create mode 100644 source/lib/legacy/handle 0.1.ts
 create mode 100644 source/lib/legacy/result 0.0.ts
 create mode 100644 source/lib/legacy/result 0.1.ts
 create mode 100644 source/lib/legacy/result 0.2.ts
 create mode 100644 source/lib/legacy/result 0.3.ts
 create mode 100644 source/lib/legacy/result 0.4.ts
 create mode 100644 source/lib/legacy/run 0.0.ts
 create mode 100644 source/lib/legacy/test/handle 0.0.ts
 create mode 100644 source/lib/notes.md
 create mode 100644 source/lib/spec_file.md
 create mode 100644 source/lib/temp/any exclude type 1.ts
 create mode 100644 source/lib/temp/any exclude type 2.ts
 create mode 100644 source/lib/temp/divide option.ts
 create mode 100644 source/lib/temp/divide result.ts
 create mode 100644 source/lib/temp/readme.md
 create mode 100644 source/lib/temp/xdg.ts
 create mode 100644 source/lib/test/readme.md
 create mode 100644 source/web/changes.md
 create mode 100644 source/web/design/notes.md
 create mode 100644 source/web/drafts/atom components/legacy/component/button/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/button/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/button/button.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/button/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/button/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/checkbox.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/context_menu.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/input/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/input/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/input/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/input/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/input/input.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/number_field.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/scroll_area.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/select/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/select/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/select/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/select/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/select/select.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/slider.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/switch.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/toggle.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/tooltip.tsx
 create mode 100644 source/web/drafts/atom components/legacy/todo.md
 create mode 100644 source/web/drafts/atom components/notes.md
 create mode 100644 source/web/drafts/atom components/todo.md
 create mode 100644 source/web/drafts/readme.md
 create mode 100644 source/web/knowledge/readme.md
 create mode 100644 source/web/legacy/keyboard 0.0.ts
 create mode 100644 source/web/lib/readme.md
 create mode 100644 source/web/notes.md
 create mode 100644 source/web/script/legacy/convert 0.0.ts
 create mode 100644 source/web/test/convert/current.css
 create mode 100644 source/web/test/convert/expected.css
 create mode 100644 source/web/test/convert/input.yaml
 ...Projects/temp/new repo % git switch master
Switched to branch 'master'
 ...Projects/temp/new repo % git merge original-state
Updating 7634d47..7c10739
Fast-forward
 .hidden                                                                          |   6 +-
 changes.md                                                                       | 216 +++++++++++
 compiling.md                                                                     |   1 +
 contributing.md                                                                  |  49 +++
 copying.md                                                                       |  94 ++++-
 docs/readme.md                                                                   |   1 +
 docs/use cases.md                                                                |   2 +
 drafts/20260617 react counter app/app.tsx                                        |  35 ++
 drafts/20260617 react counter app/index.html                                     |  12 +
 drafts/20260617 react counter app/index.tsx                                      |   6 +
 drafts/20260617 react counter app/legacy/app 0.0.tsx                             |  28 ++
 drafts/20260617 react counter app/legacy/app 0.1.tsx                             |  36 ++
 drafts/20260617 react counter app/notes.md                                       |  11 +
 drafts/20260617 react counter app/package.json                                   |  21 +
 drafts/20260617 react counter app/pnpm-lock.yaml                                 |  79 ++++
 drafts/20260617 react counter app/readme.md                                      |   1 +
 drafts/20260617 react counter app/tsconfig.json                                  |  12 +
 drafts/20260618 react app template/app.tsx                                       |   5 +
 drafts/20260618 react app template/index.html                                    |  12 +
 drafts/20260618 react app template/index.tsx                                     |   6 +
 drafts/20260618 react app template/package.json                                  |  21 +
 drafts/20260618 react app template/readme.md                                     |   1 +
 drafts/20260618 react app template/tsconfig.json                                 |  12 +
 drafts/readme.md                                                                 |   2 +-
 eslint.config.js                                                                 |  57 +--
 notes.md                                                                         | 504 ++++++++++++++++++++++++
 readme.md                                                                        |  72 ++++
 scripts/b/install.sh                                                             |   1 -
 scripts/b/package.json                                                           |  10 -
 scripts/b/readme.md                                                              |  33 --
 scripts/{b => br}/index.js                                                       |   0
 scripts/br/package.json                                                          |   9 +
 scripts/br/readme.md                                                             |   9 +
 source/action/branch.ts                                                          |  46 +++
 source/action/chat.ts                                                            |  79 ++++
 source/action/export.ts                                                          |  55 +++
 source/action/list.ts                                                            |  11 +
 source/action/new_thread.ts                                                      |  23 ++
 source/action/readme.md                                                          |  53 ++-
 source/action/test/branch.ts                                                     |   7 +
 source/action/test/chat nonexisting.ts                                           |   5 +
 source/action/test/chat.ts                                                       |  10 +
 source/action/test/export.ts                                                     |   4 +
 source/action/test/list.ts                                                       |   3 +
 source/action/test/traverse.ts                                                   |  23 ++
 source/backend/changes.md                                                        |  21 +
 source/backend/drafts/mock/notes.md                                              |  11 +
 source/backend/drafts/request/notes.md                                           |  87 +++++
 source/backend/drafts/serve/notes.md                                             |  41 ++
 source/backend/drafts/tree/notes.md                                              |  73 ++++
 source/backend/legacy/serve poc.ts                                               | 116 ++++++
 source/backend/legacy/test/request 0.0.ts                                        |   9 +
 source/backend/mock.ts                                                           |  12 +
 source/backend/notes.md                                                          |  11 +
 source/backend/readme.md                                                         |   6 +-
 source/backend/repo/action/readme.md                                             |  17 +
 source/backend/repo/changes.md                                                   |  10 +
 source/backend/repo/drafts/git clone research/changes.md                         |  19 +
 source/backend/repo/drafts/git clone research/report.md                          |  86 +++++
 source/backend/repo/drafts/git clone research/todo.md                            |  13 +
 source/backend/repo/notes.md                                                     |  33 ++
 source/backend/repo/readme.md                                                    |   7 +
 source/backend/repo/ref/repo.sh                                                  |  10 +
 source/backend/repo/repo.ts                                                      |  22 ++
 source/backend/repo/test/repo.ts                                                 |  21 +
 source/backend/request.ts                                                        |  87 +++++
 source/backend/serve.ts                                                          |  89 +++--
 source/backend/store.ts                                                          |  90 +++++
 source/backend/test/request.ts                                                   |  11 +
 source/backend/test/tree.ts                                                      |  13 +
 source/backend/test/write config yaml.ts                                         |   3 +
 source/backend/test/yaml.ts                                                      |  24 ++
 source/backend/tree.ts                                                           | 105 +++++
 source/cli/changes.md                                                            | 185 +++++++++
 source/cli/cli.ts                                                                |  32 ++
 source/cli/greet.ts                                                              |  50 +++
 source/cli/package.json                                                          |  17 +-
 source/cli/readme.md                                                             |   1 +
 source/cli/spec.md                                                               | 935 +++++++++++++++++++++++++++++++++++++++++++++
 source/cli/temp/chalk.ts                                                         |  77 ++++
 source/cli/temp/chalk_poc.ts                                                     |  10 +
 source/cli/temp/commander.ts                                                     |  59 +++
 source/cli/temp/commander_poc.ts                                                 |  57 +++
 source/cli/test/help_test.ts                                                     |  38 ++
 source/cli/todo.md                                                               |  27 ++
 source/lib/drafts/log into file/notes.md                                         |  19 +
 source/lib/drafts/result/notes.md                                                | 269 +++++++++++++
 source/lib/each.ts                                                               |   2 +-
 source/lib/file.ts                                                               |  12 +-
 source/lib/global.ts                                                             |   1 -
 source/lib/legacy/app_info 0.1.ts                                                |   3 +
 source/lib/legacy/file 0.0.ts                                                    | 310 +++++++++++++++
 source/lib/legacy/file 0.1.ts                                                    | 258 +++++++++++++
 source/lib/legacy/global 0.1.ts                                                  |  25 ++
 source/lib/legacy/handle 0.0.ts                                                  |  25 ++
 source/lib/legacy/handle 0.1.ts                                                  |  18 +
 source/lib/legacy/result 0.0.ts                                                  | 273 +++++++++++++
 source/lib/legacy/result 0.1.ts                                                  |  38 ++
 source/lib/legacy/result 0.2.ts                                                  |  41 ++
 source/lib/legacy/result 0.3.ts                                                  |  41 ++
 source/lib/legacy/result 0.4.ts                                                  |  42 ++
 source/lib/legacy/run 0.0.ts                                                     |  31 ++
 source/lib/legacy/test/handle 0.0.ts                                             |  25 ++
 source/lib/notes.md                                                              |   0
 source/lib/spec_file.md                                                          |  91 +++++
 source/lib/temp/any exclude type 1.ts                                            |  27 ++
 source/lib/temp/any exclude type 2.ts                                            |  20 +
 source/lib/temp/divide option.ts                                                 |   5 +
 source/lib/temp/divide result.ts                                                 |  27 ++
 source/lib/temp/readme.md                                                        |   3 +
 source/lib/temp/xdg.ts                                                           |  38 ++
 source/lib/test/handle.ts                                                        |   3 -
 source/lib/test/readme.md                                                        |   1 +
 source/lib/test/temp.tsx                                                         |  25 ++
 source/web/changes.md                                                            |  11 +
 source/web/design/notes.md                                                       | 145 +++++++
 source/web/drafts/atom components/legacy/component/button/app.css                |  31 ++
 source/web/drafts/atom components/legacy/component/button/app.tsx                |  13 +
 source/web/drafts/atom components/legacy/component/button/button.tsx             |  21 +
 source/web/drafts/atom components/legacy/component/button/index.html             |  12 +
 source/web/drafts/atom components/legacy/component/button/index.tsx              |  14 +
 source/web/drafts/atom components/legacy/component/checkbox/app.css              |  68 ++++
 source/web/drafts/atom components/legacy/component/checkbox/app.tsx              |  19 +
 source/web/drafts/atom components/legacy/component/checkbox/checkbox.tsx         |  31 ++
 source/web/drafts/atom components/legacy/component/checkbox/index.html           |  12 +
 source/web/drafts/atom components/legacy/component/checkbox/index.tsx            |  14 +
 source/web/drafts/atom components/legacy/component/context_menu/app.css          |  56 +++
 source/web/drafts/atom components/legacy/component/context_menu/app.tsx          |  20 +
 source/web/drafts/atom components/legacy/component/context_menu/context_menu.tsx |  66 ++++
 source/web/drafts/atom components/legacy/component/context_menu/index.html       |  12 +
 source/web/drafts/atom components/legacy/component/context_menu/index.tsx        |  14 +
 source/web/drafts/atom components/legacy/component/input/app.css                 |  37 ++
 source/web/drafts/atom components/legacy/component/input/app.tsx                 |  18 +
 source/web/drafts/atom components/legacy/component/input/index.html              |  12 +
 source/web/drafts/atom components/legacy/component/input/index.tsx               |  14 +
 source/web/drafts/atom components/legacy/component/input/input.tsx               |   9 +
 source/web/drafts/atom components/legacy/component/number_field/app.css          |  37 ++
 source/web/drafts/atom components/legacy/component/number_field/app.tsx          |  17 +
 source/web/drafts/atom components/legacy/component/number_field/index.html       |  12 +
 source/web/drafts/atom components/legacy/component/number_field/index.tsx        |  14 +
 source/web/drafts/atom components/legacy/component/number_field/number_field.tsx |   9 +
 source/web/drafts/atom components/legacy/component/scroll_area/app.css           |  29 ++
 source/web/drafts/atom components/legacy/component/scroll_area/app.tsx           |  16 +
 source/web/drafts/atom components/legacy/component/scroll_area/index.html        |  12 +
 source/web/drafts/atom components/legacy/component/scroll_area/index.tsx         |  14 +
 source/web/drafts/atom components/legacy/component/scroll_area/scroll_area.tsx   |  15 +
 source/web/drafts/atom components/legacy/component/select/app.css                |  87 +++++
 source/web/drafts/atom components/legacy/component/select/app.tsx                |  24 ++
 source/web/drafts/atom components/legacy/component/select/index.html             |  12 +
 source/web/drafts/atom components/legacy/component/select/index.tsx              |  14 +
 source/web/drafts/atom components/legacy/component/select/select.tsx             |  69 ++++
 source/web/drafts/atom components/legacy/component/slider/app.css                |  45 +++
 source/web/drafts/atom components/legacy/component/slider/app.tsx                |  17 +
 source/web/drafts/atom components/legacy/component/slider/index.html             |  12 +
 source/web/drafts/atom components/legacy/component/slider/index.tsx              |  14 +
 source/web/drafts/atom components/legacy/component/slider/slider.tsx             |   9 +
 source/web/drafts/atom components/legacy/component/switch/app.css                |  61 +++
 source/web/drafts/atom components/legacy/component/switch/app.tsx                |  19 +
 source/web/drafts/atom components/legacy/component/switch/index.html             |  12 +
 source/web/drafts/atom components/legacy/component/switch/index.tsx              |  14 +
 source/web/drafts/atom components/legacy/component/switch/switch.tsx             |  27 ++
 source/web/drafts/atom components/legacy/component/toggle/app.css                |  57 +++
 source/web/drafts/atom components/legacy/component/toggle/app.tsx                |  19 +
 source/web/drafts/atom components/legacy/component/toggle/index.html             |  12 +
 source/web/drafts/atom components/legacy/component/toggle/index.tsx              |  14 +
 source/web/drafts/atom components/legacy/component/toggle/toggle.tsx             |  38 ++
 source/web/drafts/atom components/legacy/component/tooltip/app.css               |  50 +++
 source/web/drafts/atom components/legacy/component/tooltip/app.tsx               |  17 +
 source/web/drafts/atom components/legacy/component/tooltip/index.html            |  12 +
 source/web/drafts/atom components/legacy/component/tooltip/index.tsx             |  14 +
 source/web/drafts/atom components/legacy/component/tooltip/tooltip.tsx           |  21 +
 source/web/drafts/atom components/legacy/todo.md                                 |  30 ++
 source/web/drafts/atom components/notes.md                                       |   7 +
 source/web/drafts/atom components/todo.md                                        |  32 ++
 source/web/drafts/readme.md                                                      |   0
 source/web/knowledge/readme.md                                                   |   0
 source/web/legacy/keyboard 0.0.ts                                                |  79 ++++
 source/web/lib/readme.md                                                         |   1 +
 source/web/lib/sync_theme.ts                                                     |  17 +-
 source/web/notes.md                                                              |  17 +
 source/web/port.json                                                             |   2 +-
 source/web/script/convert.ts                                                     |   2 +-
 source/web/script/legacy/convert 0.0.ts                                          | 166 ++++++++
 source/web/test/convert/current.css                                              |  14 +
 source/web/test/convert/expected.css                                             |  14 +
 source/web/test/convert/input.yaml                                               |  22 ++
 todo.md                                                                          |  10 +-
 tsconfig.json                                                                    |   7 +-
 188 files changed, 7679 insertions(+), 146 deletions(-)
 create mode 100644 compiling.md
 create mode 100644 docs/readme.md
 create mode 100644 docs/use cases.md
 create mode 100644 drafts/20260617 react counter app/app.tsx
 create mode 100644 drafts/20260617 react counter app/index.html
 create mode 100644 drafts/20260617 react counter app/index.tsx
 create mode 100644 drafts/20260617 react counter app/legacy/app 0.0.tsx
 create mode 100644 drafts/20260617 react counter app/legacy/app 0.1.tsx
 create mode 100644 drafts/20260617 react counter app/notes.md
 create mode 100644 drafts/20260617 react counter app/package.json
 create mode 100644 drafts/20260617 react counter app/pnpm-lock.yaml
 create mode 100644 drafts/20260617 react counter app/readme.md
 create mode 100644 drafts/20260617 react counter app/tsconfig.json
 create mode 100644 drafts/20260618 react app template/app.tsx
 create mode 100644 drafts/20260618 react app template/index.html
 create mode 100644 drafts/20260618 react app template/index.tsx
 create mode 100644 drafts/20260618 react app template/package.json
 create mode 100644 drafts/20260618 react app template/readme.md
 create mode 100644 drafts/20260618 react app template/tsconfig.json
 create mode 100644 notes.md
 delete mode 100755 scripts/b/install.sh
 delete mode 100644 scripts/b/package.json
 delete mode 100644 scripts/b/readme.md
 rename scripts/{b => br}/index.js (100%)
 create mode 100644 scripts/br/package.json
 create mode 100644 scripts/br/readme.md
 create mode 100644 source/action/branch.ts
 create mode 100644 source/action/chat.ts
 create mode 100644 source/action/export.ts
 create mode 100644 source/action/list.ts
 create mode 100644 source/action/new_thread.ts
 create mode 100644 source/action/test/branch.ts
 create mode 100644 source/action/test/chat nonexisting.ts
 create mode 100644 source/action/test/chat.ts
 create mode 100644 source/action/test/export.ts
 create mode 100644 source/action/test/list.ts
 create mode 100644 source/action/test/traverse.ts
 create mode 100644 source/backend/changes.md
 create mode 100644 source/backend/drafts/mock/notes.md
 create mode 100644 source/backend/drafts/request/notes.md
 create mode 100644 source/backend/drafts/serve/notes.md
 create mode 100644 source/backend/drafts/tree/notes.md
 create mode 100644 source/backend/legacy/serve poc.ts
 create mode 100644 source/backend/legacy/test/request 0.0.ts
 create mode 100644 source/backend/mock.ts
 create mode 100644 source/backend/notes.md
 create mode 100644 source/backend/repo/action/readme.md
 create mode 100644 source/backend/repo/changes.md
 create mode 100644 source/backend/repo/drafts/git clone research/changes.md
 create mode 100644 source/backend/repo/drafts/git clone research/report.md
 create mode 100644 source/backend/repo/drafts/git clone research/todo.md
 create mode 100644 source/backend/repo/notes.md
 create mode 100644 source/backend/repo/readme.md
 create mode 100644 source/backend/repo/ref/repo.sh
 create mode 100644 source/backend/repo/repo.ts
 create mode 100644 source/backend/repo/test/repo.ts
 create mode 100644 source/backend/request.ts
 create mode 100644 source/backend/store.ts
 create mode 100644 source/backend/test/request.ts
 create mode 100644 source/backend/test/tree.ts
 create mode 100644 source/backend/test/write config yaml.ts
 create mode 100644 source/backend/test/yaml.ts
 create mode 100644 source/backend/tree.ts
 create mode 100644 source/cli/changes.md
 create mode 100644 source/cli/cli.ts
 create mode 100644 source/cli/greet.ts
 create mode 100644 source/cli/spec.md
 create mode 100644 source/cli/temp/chalk.ts
 create mode 100644 source/cli/temp/chalk_poc.ts
 create mode 100644 source/cli/temp/commander.ts
 create mode 100644 source/cli/temp/commander_poc.ts
 create mode 100644 source/cli/test/help_test.ts
 create mode 100644 source/cli/todo.md
 create mode 100644 source/lib/drafts/log into file/notes.md
 create mode 100644 source/lib/drafts/result/notes.md
 create mode 100644 source/lib/legacy/app_info 0.1.ts
 create mode 100644 source/lib/legacy/file 0.0.ts
 create mode 100644 source/lib/legacy/file 0.1.ts
 create mode 100644 source/lib/legacy/global 0.1.ts
 create mode 100644 source/lib/legacy/handle 0.0.ts
 create mode 100644 source/lib/legacy/handle 0.1.ts
 create mode 100644 source/lib/legacy/result 0.0.ts
 create mode 100644 source/lib/legacy/result 0.1.ts
 create mode 100644 source/lib/legacy/result 0.2.ts
 create mode 100644 source/lib/legacy/result 0.3.ts
 create mode 100644 source/lib/legacy/result 0.4.ts
 create mode 100644 source/lib/legacy/run 0.0.ts
 create mode 100644 source/lib/legacy/test/handle 0.0.ts
 create mode 100644 source/lib/notes.md
 create mode 100644 source/lib/spec_file.md
 create mode 100644 source/lib/temp/any exclude type 1.ts
 create mode 100644 source/lib/temp/any exclude type 2.ts
 create mode 100644 source/lib/temp/divide option.ts
 create mode 100644 source/lib/temp/divide result.ts
 create mode 100644 source/lib/temp/readme.md
 create mode 100644 source/lib/temp/xdg.ts
 create mode 100644 source/lib/test/readme.md
 create mode 100644 source/web/changes.md
 create mode 100644 source/web/design/notes.md
 create mode 100644 source/web/drafts/atom components/legacy/component/button/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/button/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/button/button.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/button/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/button/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/checkbox.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/checkbox/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/context_menu.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/context_menu/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/input/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/input/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/input/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/input/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/input/input.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/number_field/number_field.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/scroll_area/scroll_area.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/select/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/select/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/select/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/select/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/select/select.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/slider/slider.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/switch/switch.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/toggle/toggle.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/app.css
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/app.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/index.html
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/index.tsx
 create mode 100644 source/web/drafts/atom components/legacy/component/tooltip/tooltip.tsx
 create mode 100644 source/web/drafts/atom components/legacy/todo.md
 create mode 100644 source/web/drafts/atom components/notes.md
 create mode 100644 source/web/drafts/atom components/todo.md
 create mode 100644 source/web/drafts/readme.md
 create mode 100644 source/web/knowledge/readme.md
 create mode 100644 source/web/legacy/keyboard 0.0.ts
 create mode 100644 source/web/lib/readme.md
 create mode 100644 source/web/notes.md
 create mode 100644 source/web/script/legacy/convert 0.0.ts
 create mode 100644 source/web/test/convert/current.css
 create mode 100644 source/web/test/convert/expected.css
 create mode 100644 source/web/test/convert/input.yaml
 ...Projects/temp/new repo % git branch
* master
  original-state
 ...Projects/temp/new repo % git checkout -p HEAD~1

diff --git b/.hidden a/.hidden
index 252e043..64bb400 100644
--- b/.hidden
+++ a/.hidden
@@ -1,5 +1,3 @@
-# it would make it cleaner and clearer on files, while having everything shown on code
-
 # deprecated
 legacy

(1/2) Apply this hunk to index and worktree [y,n,q,a,d,j,J,g,/,e,?]? ^C
 ...Projects/temp/new repo % git diff --name-only HEAD~1 HEAD | wc -l

188
 ...Projects/temp/new repo % git checkout -p HEAD~1

diff --git b/.hidden a/.hidden
index 252e043..64bb400 100644
--- b/.hidden
+++ a/.hidden
@@ -1,5 +1,3 @@
-# it would make it cleaner and clearer on files, while having everything shown on code
-
 # deprecated
 legacy

(1/2) Apply this hunk to index and worktree [y,n,q,a,d,j,J,g,/,e,?]? y
@@ -16,8 +14,8 @@ bunfig.toml
 tsconfig.json

 # build
-# build should be hidden on code, not files
+# build should be hidden in ide but not files

-# alias
+# aliases
 AGENTS.md
 CLAUDE.md
\ No newline at end of file
(2/2) Apply this hunk to index and worktree [y,n,q,a,d,K,g,/,s,e,?]? y

diff --git b/changes.md a/changes.md
index 0b36d84..ef4f0aa 100644
--- b/changes.md
+++ a/changes.md
@@ -1,218 +1,2 @@
 changes

-apr 2026
-
-05
-
-rename `roadmap` to `todo`
-
-09
-
-delete `.vscode` folder, which hides some folders (like node modules) in the explorer and search, making it simpler most time, but significantly harder when i need them, esp when i also hide the `.vscode` folder itself. also, i have `f.code-workspace` already. it's not oxtho.
-
-archive almost all prev code.
-
-the prev work are mainly:
-
-- a working browser automation hack to exploit free resources on llm web apps
-- a tool calling poc
-- a frontend template
-- a backend server template
-- a complex yet useless
-
-some might be useful in the future. but i dont want to work on it further.
-
-16
-
-simplify gitignore. rm useless rules (e.g. those for other lang).
-
-create lib and link with node modules.
-
-17
-
-write some codebase templates and infra, like the lib. see the code for details.
-
-24
-
-write std.
-
-create the infra like rust prelude so i dont have to import std methods everywhere using nodejs import flag under the hood.
-
-may 2026
-
-02
-
-edit style guide
-
-old
-
-- verb noun for actions, predicate for bools
-
-verbose
-
-- verb noun for actions (e.g. fetch, convert), predicate for bools (e.g. is_prime, has_children), noun for wrappers and components (e.g. time, url, button)
-
-concise
-
-- verb noun for actions, predicate for bools, noun for factory functions
-
-<!-- i think it will default to nouns for react components, though ive no idea if i will use react. it's better than anything else. but i think it could be simpler. -->
-
-04
-
-simplify ts infra (dry)
-
-global import
-
-use(lib) iff obj assign(lib, global this)
-
-05
-
-revise message
-
-prev
-
-- object params
-
-new
-
-- object params for more than one param
-
-<!-- i absolutely need this -->
-
-prev
-
-- verb noun for actions, predicate for bools, noun for factory functions
-
-new
-
-- verb noun for actions (`get_data`, not `data_getter`), predicate for bools (`is_prime`, not `check_primality`), noun for factory functions (`time`, not `create_time`)
-
-<!-- might be clearer? -->
-
-10
-
-write some ts snippets.
-
-revise message.
-
-prev
-
-- async if needed
-
-new
-
-- always async, only sync for pure and quick methods
-
-prev
-
-- always function statement, never arrow function (unless as props)
-
-new
-
-- always function statement, only arrow function for props
-
-12
-
-revise message.
-
-prev
-
-- object params for more than one param
-
-new
-
-- object params for more than one uninterchangeable params
-
-14
-
-revise message.
-
-prev
-
-- object params for more than one uninterchangeable params
-
-<!-- concise but incomprehensible -->
-
-new
-
-<!-- - always object params, only positional params if there is always only one param (`factorial(n)`, `fetch({ url })` as it can have options or flags in the future), or params are interchangeable (`add(a,b)`) -->
-
-<!-- - always object params, only positional params if there is always only one param and no possible flags (`factorial(n)`) or params are interchangeable (`add(a,b)`) -->
-
-- object params by default, positional params if there is only one param (`factorial(n)`) or params are interchangeable (`add(a,b)`), mixed if there is only one param and optional flags (`fetch(url, options)`)
-
-prev
-
-- dont reinvent wheels, prefer modern proven tech
-
-new
-
-- prefer modern proven libraries, dont reinvent wheels
-- avoid outdated or deprecated methods
-
-<!-- also move to notes -->
-
-<!-- webpack is proven but not modern. add one word to be clear as it's common in llm training data. -->
-
-<!-- i suppose it will naturally write small code (e.g. less than twenty lines) by default -->
-
-<!-- i suppose it will still hallucinate and use non existing methods in the latest version. but since it can search and have context, just be clear. -->
-
-<!-- though, many tools are stable. no need to say "learn and search the latest behavior" by default. -->
-
-prev
-
-- add simple logging
-
-new
-
-- no logging by default
-
-<!--
-
-i could have
-
-- think before coding (ask when there are many choices)
-- simplicity first
-- surgical changes
-- goal driven execution (tdd)
-
-for 1 and 4, i know when i have choices. e.g. choose a library, a method. tdd is not necessary for all tasks.
-
-for 2, i think llms generate the simplest code by default. no need to say "avoid unnecessary abstraction". you see the code. you can make it dry when you feel like it, whether removing an abstraction that abstracts nothing (e.g. classname and css classname occur at the same time), or adding one.
-
-for 3, i think just let llms go. as long as it works and it's readable it's fine.
-
-some are to normalize the behavior due to some builtin system prompts.
-
-also, luoling has some "anti patterns". they are common. but they are not always general.
-
- -->
-
-jun 2026
-
-04
-
-add deps, legacy, and temp to `.hidden`
-
-<!-- vscode does not respect .hidden. but it would make it less noisy when you open it in nautilus. -->
-
-13
-
-20 00 move repo cli out of humility
-
-initially i thought i need a powerful cli to version control as git is flawed on ux.
-
-yet, obviously, ik it's irrelevant and not bounded to humility project.
-
-be simple.
-
-and i might not continue this project. you dont need to make it elegant for commands you never use.
-
-build a better world, rather than changing the world.
-
-this is a kind of declarative over imperative.
-
-jul 2026
-
```

```sh
-                        <dependency|crate|native|framework|all> (default:
-                        all).
-    -l [<KIND>[:<MODIFIERS>]=]<NAME>[:<RENAME>]
-                        Link the generated crate(s) to the specified native
-                        library NAME. The optional KIND can be one of
-                        <static|framework|dylib> (default: dylib).
-                        Optional comma separated MODIFIERS
-                        <bundle|verbatim|whole-archive|as-needed>
-                        may be specified each with a prefix of either '+' to
-                        enable or '-' to disable.
-        --crate-type <bin|lib|rlib|dylib|cdylib|staticlib|proc-macro>
-                        Comma separated list of types of crates
-                        for the compiler to emit
-        --crate-name <NAME>
-                        Specify the name of the crate being built
-        --edition <2015|2018|2021|2024|future>
-                        Specify which edition of the compiler to use when
-                        compiling code. The default is 2015 and the latest
-                        stable edition is 2024.
-        --emit <TYPE>[=<FILE>]
-                        Comma separated list of types of output for the
-                        compiler to emit.
-                        Each TYPE has the default FILE name:
-                        * asm - CRATE_NAME.s
-                        * llvm-bc - CRATE_NAME.bc
-                        * dep-info - CRATE_NAME.d
-                        * link - (platform and crate-type dependent)
-                        * llvm-ir - CRATE_NAME.ll
-                        * metadata - libCRATE_NAME.rmeta
-                        * mir - CRATE_NAME.mir
-                        * obj - CRATE_NAME.o
-                        * thin-link-bitcode - CRATE_NAME.indexing.o
-        --print <INFO>[=<FILE>]
-                        Compiler information to print on stdout (or to a file)
-                        INFO may be one of
-                        <all-target-specs-json|backend-has-zstd|calling-conventions|cfg|check-cfg|code-models|crate-name|crate-root-lint-levels|deployment-target|file-names|host-tuple|link-args|native-static-libs|relocation-models|split-debuginfo|stack-protector-strategies|supported-crate-types|sysroot|target-cpus|target-features|target-libdir|target-list|target-spec-json|target-spec-json-schema|tls-models>.
-    -g                  Equivalent to -C debuginfo=2
-    -O                  Equivalent to -C opt-level=3
-    -o <FILENAME>       Write output to FILENAME
-        --out-dir <DIR> Write output to compiler-chosen filename in DIR
-        --explain <OPT> Provide a detailed explanation of an error message
-        --test          Build a test harness
-        --target <TARGET>
-                        Target tuple for which the code is compiled
-    -A, --allow <LINT>  Set lint allowed
-    -W, --warn <LINT>   Set lint warnings
-        --force-warn <LINT>
-                        Set lint force-warn
-    -D, --deny <LINT>   Set lint denied
-    -F, --forbid <LINT> Set lint forbidden
-        --cap-lints <LEVEL>
-                        Set the most restrictive lint level. More restrictive
-                        lints are capped at this level
-    -C, --codegen <OPT>[=<VALUE>]
-                        Set a codegen option
-    -V, --version       Print version info and exit
-    -v, --verbose       Use verbose output
-
-Additional help:
-    -C help             Print codegen options
-    -W help             Print 'lint' options and default settings
-    --help -v           Print the full set of options rustc accepts
-```
-
-```
- ~ % cargo
-Rust's package manager
-
-Usage: cargo [+toolchain] [OPTIONS] [COMMAND]
-       cargo [+toolchain] [OPTIONS] -Zscript <MANIFEST_RS> [ARGS]...
-
-Options:
-  -V, --version                  Print version info and exit
-      --list                     List installed commands
-      --explain <CODE>           Provide a detailed explanation of a rustc error message
-  -v, --verbose...               Use verbose output (-vv very verbose/build.rs output)
-  -q, --quiet                    Do not print cargo log messages
-      --color <WHEN>             Coloring [possible values: auto, always, never]
-  -C <DIRECTORY>                 Change to DIRECTORY before doing anything (nightly-only)
-      --locked                   Assert that `Cargo.lock` will remain unchanged
-      --offline                  Run without accessing the network
-      --frozen                   Equivalent to specifying both --locked and --offline
-      --config <KEY=VALUE|PATH>  Override a configuration value
-  -Z <FLAG>                      Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details
-  -h, --help                     Print help
-
-Commands:
-    build, b    Compile the current package
-    check, c    Analyze the current package and report errors, but don't build object files
-    clean       Remove the target directory
-    doc, d      Build this package's and its dependencies' documentation
-    new         Create a new cargo package
-    init        Create a new cargo package in an existing directory
-    add         Add dependencies to a manifest file
-    remove      Remove dependencies from a manifest file
-    run, r      Run a binary or example of the local package
-    test, t     Run the tests
-    bench       Run the benchmarks
-    update      Update dependencies listed in Cargo.lock
-    search      Search registry for crates
-    publish     Package and upload this package to the registry
-    install     Install a Rust binary
-    uninstall   Uninstall a Rust binary
-    ...         See all commands with --list
-
-See 'cargo help <command>' for more information on a specific command.
-```
-
-```
- ~ % yt-dlp -h
-Usage: yt-dlp [OPTIONS] URL [URL...]
-
-Options:
-
-  General Options:
-    -h, --help                                              Print this help text and exit
-    --version                                               Print program version and exit
-    -U, --update                                            Check if updates are available. You installed yt-dlp with pip or using the
-                                                            wheel from PyPi; Use that to update
-    --no-update                                             Do not check for updates (default)
-    --update-to [CHANNEL]@[TAG]                             Upgrade/downgrade to a specific version. CHANNEL can be a repository as
-                                                            well. CHANNEL and TAG default to "stable" and "latest" respectively if
-                                                            omitted; See "UPDATE" for details. Supported channels: stable, nightly,
-                                                            master
-    -i, --ignore-errors                                     Ignore download and postprocessing errors. The download will be considered
-                                                            successful even if the postprocessing fails
-    --no-abort-on-error                                     Continue with next video on download errors; e.g. to skip unavailable
-                                                            videos in a playlist (default)
-    --abort-on-error                                        Abort downloading of further videos if an error occurs (Alias: --no-
-                                                            ignore-errors)
-    --list-extractors                                       List all supported extractors and exit
-    --extractor-descriptions                                Output descriptions of all supported extractors and exit
-    --use-extractors NAMES                                  Extractor names to use separated by commas. You can also use regexes,
-                                                            "all", "default" and "end" (end URL matching); e.g. --ies
-                                                            "holodex.*,end,youtube". Prefix the name with a "-" to exclude it, e.g.
-                                                            --ies default,-generic. Use --list-extractors for a list of extractor
-                                                            names. (Alias: --ies)
-    --default-search PREFIX                                 Use this prefix for unqualified URLs. E.g. "gvsearch2:python" downloads
-                                                            two videos from google videos for the search term "python". Use the value
-                                                            "auto" to let yt-dlp guess ("auto_warning" to emit a warning when
-                                                            guessing). "error" just throws an error. The default value "fixup_error"
-                                                            repairs broken URLs, but emits an error if this is not possible instead of
-                                                            searching
-    --ignore-config                                         Don't load any more configuration files except those given to --config-
-                                                            locations. For backward compatibility, if this option is found inside the
-                                                            system configuration file, the user configuration is not loaded. (Alias:
-                                                            --no-config)
-    --no-config-locations                                   Do not load any custom configuration files (default). When given inside a
-                                                            configuration file, ignore all previous --config-locations defined in the
-                                                            current file
-    --config-locations PATH                                 Location of the main configuration file; either the path to the config or
-                                                            its containing directory ("-" for stdin). Can be used multiple times and
-                                                            inside other configuration files
-    --plugin-dirs DIR                                       Path to an additional directory to search for plugins. This option can be
-                                                            used multiple times to add multiple directories. Use "default" to search
-                                                            the default plugin directories (default)
-    --no-plugin-dirs                                        Clear plugin directories to search, including defaults and those provided
-                                                            by previous --plugin-dirs
-    --js-runtimes RUNTIME[:PATH]                            Additional JavaScript runtime to enable, with an optional location for the
-                                                            runtime (either the path to the binary or its containing directory). This
-                                                            option can be used multiple times to enable multiple runtimes. Supported
-                                                            runtimes are (in order of priority, from highest to lowest): deno, node,
-                                                            quickjs, bun. Only "deno" is enabled by default. The highest priority
-                                                            runtime that is both enabled and available will be used. In order to use a
-                                                            lower priority runtime when "deno" is available, --no-js-runtimes needs to
-                                                            be passed before enabling other runtimes
-    --no-js-runtimes                                        Clear JavaScript runtimes to enable, including defaults and those provided
-                                                            by previous --js-runtimes
-    --remote-components COMPONENT                           Remote components to allow yt-dlp to fetch when required. This option is
-                                                            currently not needed if you are using an official executable or have the
-                                                            requisite version of the yt-dlp-ejs package installed. You can use this
-                                                            option multiple times to allow multiple components. Supported values:
-                                                            ejs:npm (external JavaScript components from npm), ejs:github (external
-                                                            JavaScript components from yt-dlp-ejs GitHub). By default, no remote
-                                                            components are allowed
-    --no-remote-components                                  Disallow fetching of all remote components, including any previously
-                                                            allowed by --remote-components or defaults.
-    --flat-playlist                                         Do not extract a playlist's URL result entries; some entry metadata may be
-                                                            missing and downloading may be bypassed
-    --no-flat-playlist                                      Fully extract the videos of a playlist (default)
-    --live-from-start                                       Download livestreams from the start. Currently experimental and only
-                                                            supported for YouTube, Twitch, and TVer
-    --no-live-from-start                                    Download livestreams from the current time (default)
-    --wait-for-video MIN[-MAX]                              Wait for scheduled streams to become available. Pass the minimum number of
-                                                            seconds (or range) to wait between retries
-    --no-wait-for-video                                     Do not wait for scheduled streams (default)
-    --mark-watched                                          Mark videos watched (even with --simulate)
-    --no-mark-watched                                       Do not mark videos watched (default)
-    --color [STREAM:]POLICY                                 Whether to emit color codes in output, optionally prefixed by the STREAM
-                                                            (stdout or stderr) to apply the setting to. Can be one of "always", "auto"
-                                                            (default), "never", or "no_color" (use non color terminal sequences). Use
-                                                            "auto-tty" or "no_color-tty" to decide based on terminal support only. Can
-                                                            be used multiple times
-    --compat-options OPTS                                   Options that can help keep compatibility with youtube-dl or youtube-dlc
-                                                            configurations by reverting some of the changes made in yt-dlp. See
-                                                            "Differences in default behavior" for details
-    --alias ALIASES OPTIONS                                 Create aliases for an option string. Unless an alias starts with a dash
-                                                            "-", it is prefixed with "--". Arguments are parsed according to the
-                                                            Python string formatting mini-language. E.g. --alias get-audio,-X "-S
-                                                            aext:{0},abr -x --audio-format {0}" creates options "--get-audio" and "-X"
-                                                            that takes an argument (ARG0) and expands to "-S aext:ARG0,abr -x --audio-
-                                                            format ARG0". All defined aliases are listed in the --help output. Alias
-                                                            options can trigger more aliases; so be careful to avoid defining
-                                                            recursive options. As a safety measure, each alias may be triggered a
-                                                            maximum of 100 times. This option can be used multiple times
-    -t, --preset-alias PRESET                               Applies a predefined set of options. e.g. --preset-alias mp3. The
-                                                            following presets are available: mp3, aac, mp4, mkv, sleep. See the
-                                                            "Preset Aliases" section at the end for more info. This option can be used
-                                                            multiple times
-
-  Network Options:
-    --proxy URL                                             Use the specified HTTP/HTTPS/SOCKS proxy. To enable SOCKS proxy, specify a
-                                                            proper scheme, e.g. socks5://user:pass@127.0.0.1:1080/. Pass in an empty
-                                                            string (--proxy "") for direct connection
-    --socket-timeout SECONDS                                Time to wait before giving up, in seconds
-    --source-address IP                                     Client-side IP address to bind to
-    --impersonate CLIENT[:OS]                               Client to impersonate for requests. E.g. chrome, chrome-110,
-                                                            chrome:windows-10. Pass --impersonate="" to impersonate any client. Note
-                                                            that forcing impersonation for all requests may have a detrimental impact
-                                                            on download speed and stability
-    --list-impersonate-targets                              List available clients to impersonate.
-    -4, --force-ipv4                                        Make all connections via IPv4
-    -6, --force-ipv6                                        Make all connections via IPv6
-    --enable-file-urls                                      Enable file:// URLs. This is disabled by default for security reasons.
-
-  Geo-restriction:
-    --geo-verification-proxy URL                            Use this proxy to verify the IP address for some geo-restricted sites. The
-                                                            default proxy specified by --proxy (or none, if the option is not present)
-                                                            is used for the actual downloading
-    --xff VALUE                                             How to fake X-Forwarded-For HTTP header to try bypassing geographic
-                                                            restriction. One of "default" (only when known to be useful), "never", an
-                                                            IP block in CIDR notation, or a two-letter ISO 3166-2 country code
-
-  Video Selection:
-    -I, --playlist-items ITEM_SPEC                          Comma-separated playlist_index of the items to download. You can specify a
-                                                            range using "[START]:[STOP][:STEP]". For backward compatibility, START-
-                                                            STOP is also supported. Use negative indices to count from the right and
-                                                            negative STEP to download in reverse order. E.g. "-I 1:3,7,-5::2" used on
-                                                            a playlist of size 15 will download the items at index 1,2,3,7,11,13,15
-    --min-filesize SIZE                                     Abort download if filesize is smaller than SIZE, e.g. 50k or 44.6M
-    --max-filesize SIZE                                     Abort download if filesize is larger than SIZE, e.g. 50k or 44.6M
-    --date DATE                                             Download only videos uploaded on this date. The date can be "YYYYMMDD" or
-                                                            in the format [now|today|yesterday][-N[day|week|month|year]]. E.g. "--date
-                                                            today-2weeks" downloads only videos uploaded on the same day two weeks ago
-    --datebefore DATE                                       Download only videos uploaded on or before this date. The date formats
-                                                            accepted are the same as --date
-    --dateafter DATE                                        Download only videos uploaded on or after this date. The date formats
-                                                            accepted are the same as --date
-    --match-filters FILTER                                  Generic video filter. Any "OUTPUT TEMPLATE" field can be compared with a
-                                                            number or a string using the operators defined in "Filtering Formats". You
-                                                            can also simply specify a field to match if the field is present, use
-                                                            "!field" to check if the field is not present, and "&" to check multiple
-                                                            conditions. Use a "\" to escape "&" or quotes if needed. If used multiple
-                                                            times, the filter matches if at least one of the conditions is met. E.g.
-                                                            --match-filters !is_live --match-filters "like_count>?100 &
-                                                            description~='(?i)\bcats \& dogs\b'" matches only videos that are not live
-                                                            OR those that have a like count more than 100 (or the like field is not
-                                                            available) and also has a description that contains the phrase "cats &
-                                                            dogs" (caseless). Use "--match-filters -" to interactively ask whether to
-                                                            download each video
-    --no-match-filters                                      Do not use any --match-filters (default)
-    --break-match-filters FILTER                            Same as "--match-filters" but stops the download process when a video is
-                                                            rejected
-    --no-break-match-filters                                Do not use any --break-match-filters (default)
-    --no-playlist                                           Download only the video, if the URL refers to a video and a playlist
-    --yes-playlist                                          Download the playlist, if the URL refers to a video and a playlist
-    --age-limit YEARS                                       Download only videos suitable for the given age
-    --download-archive FILE                                 Download only videos not listed in the archive file. Record the IDs of all
-                                                            downloaded videos in it
-    --no-download-archive                                   Do not use archive file (default)
-    --max-downloads NUMBER                                  Abort after downloading NUMBER files
-    --break-on-existing                                     Stop the download process when encountering a file that is in the archive
-                                                            supplied with the --download-archive option
-    --no-break-on-existing                                  Do not stop the download process when encountering a file that is in the
-                                                            archive (default)
-    --break-per-input                                       Alters --max-downloads, --break-on-existing, --break-match-filters, and
-                                                            autonumber to reset per input URL
-    --no-break-per-input                                    --break-on-existing and similar options terminates the entire download
-                                                            queue
-    --skip-playlist-after-errors N                          Number of allowed failures until the rest of the playlist is skipped
-
-  Download Options:
-    -N, --concurrent-fragments N                            Number of fragments of a dash/hlsnative video that should be downloaded
-                                                            concurrently (default is 1)
-    -r, --limit-rate RATE                                   Maximum download rate in bytes per second, e.g. 50K or 4.2M
-    --throttled-rate RATE                                   Minimum download rate in bytes per second below which throttling is
-                                                            assumed and the video data is re-extracted, e.g. 100K
-    -R, --retries RETRIES                                   Number of retries (default is 10), or "infinite"
-    --file-access-retries RETRIES                           Number of times to retry on file access error (default is 3), or
-                                                            "infinite"
-    --fragment-retries RETRIES                              Number of retries for a fragment (default is 10), or "infinite" (DASH,
-                                                            hlsnative and ISM)
-    --retry-sleep [TYPE:]EXPR                               Time to sleep between retries in seconds (optionally) prefixed by the type
-                                                            of retry (http (default), fragment, file_access, extractor) to apply the
-                                                            sleep to. EXPR can be a number, linear=START[:END[:STEP=1]] or
-                                                            exp=START[:END[:BASE=2]]. This option can be used multiple times to set
-                                                            the sleep for the different retry types, e.g. --retry-sleep linear=1::2
-                                                            --retry-sleep fragment:exp=1:20
-    --skip-unavailable-fragments                            Skip unavailable fragments for DASH, hlsnative and ISM downloads (default)
-                                                            (Alias: --no-abort-on-unavailable-fragments)
-    --abort-on-unavailable-fragments                        Abort download if a fragment is unavailable (Alias: --no-skip-unavailable-
-                                                            fragments)
-    --keep-fragments                                        Keep downloaded fragments on disk after downloading is finished
-    --no-keep-fragments                                     Delete downloaded fragments after downloading is finished (default)
-    --buffer-size SIZE                                      Size of download buffer, e.g. 1024 or 16K (default is 1024)
-    --resize-buffer                                         The buffer size is automatically resized from an initial value of
-                                                            --buffer-size (default)
-    --no-resize-buffer                                      Do not automatically adjust the buffer size
-    --http-chunk-size SIZE                                  Size of a chunk for chunk-based HTTP downloading, e.g. 10485760 or 10M
-                                                            (default is disabled). May be useful for bypassing bandwidth throttling
-                                                            imposed by a webserver (experimental)
-    --playlist-random                                       Download playlist videos in random order
-    --lazy-playlist                                         Process entries in the playlist as they are received. This disables
-                                                            n_entries, --playlist-random and --playlist-reverse
-    --no-lazy-playlist                                      Process videos in the playlist only after the entire playlist is parsed
-                                                            (default)
-    --hls-use-mpegts                                        Use the mpegts container for HLS videos; allowing some players to play the
-                                                            video while downloading, and reducing the chance of file corruption if
-                                                            download is interrupted. This is enabled by default for live streams
-    --no-hls-use-mpegts                                     Do not use the mpegts container for HLS videos. This is default when not
-                                                            downloading live streams
-    --download-sections REGEX                               Download only chapters that match the regular expression. A "*" prefix
-                                                            denotes time-range instead of chapter. Negative timestamps are calculated
-                                                            from the end. "*from-url" can be used to download between the "start_time"
-                                                            and "end_time" extracted from the URL. Needs ffmpeg. This option can be
-                                                            used multiple times to download multiple sections, e.g. --download-
-                                                            sections "*10:15-inf" --download-sections "intro"
-    --downloader [PROTO:]NAME                               Name or path of the external downloader to use (optionally) prefixed by
-                                                            the protocols (http, ftp, m3u8, dash, rstp, rtmp, mms) to use it for.
-                                                            Currently supports native, aria2c, axel, curl, ffmpeg, httpie, wget. You
-                                                            can use this option multiple times to set different downloaders for
-                                                            different protocols. E.g. --downloader aria2c --downloader
-                                                            "dash,m3u8:native" will use aria2c for http/ftp downloads, and the native
-                                                            downloader for dash/m3u8 downloads (Alias: --external-downloader)
-    --downloader-args NAME:ARGS                             Give these arguments to the external downloader. Specify the downloader
-                                                            name and the arguments separated by a colon ":". For ffmpeg, arguments can
-                                                            be passed to different positions using the same syntax as --postprocessor-
-                                                            args. You can use this option multiple times to give different arguments
-                                                            to different downloaders (Alias: --external-downloader-args)
-
-  Filesystem Options:
-    -a, --batch-file FILE                                   File containing URLs to download ("-" for stdin), one URL per line. Lines
-                                                            starting with "#", ";" or "]" are considered as comments and ignored
-    --no-batch-file                                         Do not read URLs from batch file (default)
-    -P, --paths [TYPES:]PATH                                The paths where the files should be downloaded. Specify the type of file
-                                                            and the path separated by a colon ":". All the same TYPES as --output are
-                                                            supported. Additionally, you can also provide "home" (default) and "temp"
-                                                            paths. All intermediary files are first downloaded to the temp path and
-                                                            then the final files are moved over to the home path after download is
-                                                            finished. This option is ignored if --output is an absolute path
-    -o, --output [TYPES:]TEMPLATE                           Output filename template; see "OUTPUT TEMPLATE" for details
-    --output-na-placeholder TEXT                            Placeholder for unavailable fields in --output (default: "NA")
-    --restrict-filenames                                    Restrict filenames to only ASCII characters, and avoid "&" and spaces in
-                                                            filenames
-    --no-restrict-filenames                                 Allow Unicode characters, "&" and spaces in filenames (default)
-    --windows-filenames                                     Force filenames to be Windows-compatible
-    --no-windows-filenames                                  Sanitize filenames only minimally
-    --trim-filenames LENGTH                                 Limit the filename length (excluding extension) to the specified number of
-                                                            characters
-    -w, --no-overwrites                                     Do not overwrite any files
-    --force-overwrites                                      Overwrite all video and metadata files. This option includes --no-continue
-    --no-force-overwrites                                   Do not overwrite the video, but overwrite related files (default)
-    -c, --continue                                          Resume partially downloaded files/fragments (default)
-    --no-continue                                           Do not resume partially downloaded fragments. If the file is not
-                                                            fragmented, restart download of the entire file
-    --part                                                  Use .part files instead of writing directly into output file (default)
-    --no-part                                               Do not use .part files - write directly into output file
-    --mtime                                                 Use the Last-modified header to set the file modification time
-    --no-mtime                                              Do not use the Last-modified header to set the file modification time
-                                                            (default)
-    --write-description                                     Write video description to a .description file
-    --no-write-description                                  Do not write video description (default)
-    --write-info-json                                       Write video metadata to a .info.json file (this may contain personal
-                                                            information)
-    --no-write-info-json                                    Do not write video metadata (default)
-    --write-playlist-metafiles                              Write playlist metadata in addition to the video metadata when using
-                                                            --write-info-json, --write-description etc. (default)
-    --no-write-playlist-metafiles                           Do not write playlist metadata when using --write-info-json, --write-
-                                                            description etc.
-    --clean-info-json                                       Remove some internal metadata such as filenames from the infojson
-                                                            (default)
-    --no-clean-info-json                                    Write all fields to the infojson
-    --write-comments                                        Retrieve video comments to be placed in the infojson. The comments are
-                                                            fetched even without this option if the extraction is known to be quick
-                                                            (Alias: --get-comments)
-    --no-write-comments                                     Do not retrieve video comments unless the extraction is known to be quick
-                                                            (Alias: --no-get-comments)
-    --load-info-json FILE                                   JSON file containing the video information (created with the "--write-
-                                                            info-json" option)
-    --cookies FILE                                          Netscape formatted file to read cookies from and dump cookie jar in
-    --no-cookies                                            Do not read/dump cookies from/to file (default)
-    --cookies-from-browser BROWSER[+KEYRING][:PROFILE][::CONTAINER]
-                                                            The name of the browser to load cookies from. Currently supported browsers
-                                                            are: brave, chrome, chromium, edge, firefox, opera, safari, vivaldi,
-                                                            whale. Optionally, the KEYRING used for decrypting Chromium cookies on
-                                                            Linux, the name/path of the PROFILE to load cookies from, and the
-                                                            CONTAINER name (if Firefox) ("none" for no container) can be given with
-                                                            their respective separators. By default, all containers of the most
-                                                            recently accessed profile are used. Currently supported keyrings are:
-                                                            basictext, gnomekeyring, kwallet, kwallet5, kwallet6
-    --no-cookies-from-browser                               Do not load cookies from browser (default)
-    --cache-dir DIR                                         Location in the filesystem where yt-dlp can store some downloaded
-                                                            information (such as client ids and signatures) permanently. By default
-                                                            ${XDG_CACHE_HOME}/yt-dlp
-    --no-cache-dir                                          Disable filesystem caching
-    --rm-cache-dir                                          Delete all filesystem cache files
-
-  Thumbnail Options:
-    --write-thumbnail                                       Write thumbnail image to disk
-    --no-write-thumbnail                                    Do not write thumbnail image to disk (default)
-    --write-all-thumbnails                                  Write all thumbnail image formats to disk
-    --list-thumbnails                                       List available thumbnails of each video. Simulate unless --no-simulate is
-                                                            used
-
-  Internet Shortcut Options:
-    --write-link                                            Write an internet shortcut file, depending on the current platform (.url,
-                                                            .webloc or .desktop). The URL may be cached by the OS
-    --write-url-link                                        Write a .url Windows internet shortcut. The OS caches the URL based on the
-                                                            file path
-    --write-webloc-link                                     Write a .webloc macOS internet shortcut
-    --write-desktop-link                                    Write a .desktop Linux internet shortcut
-
-  Verbosity and Simulation Options:
-    -q, --quiet                                             Activate quiet mode. If used with --verbose, print the log to stderr
-    --no-quiet                                              Deactivate quiet mode. (Default)
-    --no-warnings                                           Ignore warnings
-    -s, --simulate                                          Do not download the video and do not write anything to disk
-    --no-simulate                                           Download the video even if printing/listing options are used
-    --ignore-no-formats-error                               Ignore "No video formats" error. Useful for extracting metadata even if
-                                                            the videos are not actually available for download (experimental)
-    --no-ignore-no-formats-error                            Throw error when no downloadable video formats are found (default)
-    --skip-download                                         Do not download the video but write all related files (Alias: --no-
-                                                            download)
-    -O, --print [WHEN:]TEMPLATE                             Field name or output template to print to screen, optionally prefixed with
-                                                            when to print it, separated by a ":". Supported values of "WHEN" are the
-                                                            same as that of --use-postprocessor (default: video). Implies --quiet.
-                                                            Implies --simulate unless --no-simulate or later stages of WHEN are used.
-                                                            This option can be used multiple times
-    --print-to-file [WHEN:]TEMPLATE FILE                    Append given template to the file. The values of WHEN and TEMPLATE are the
-                                                            same as that of --print. FILE uses the same syntax as the output template.
-                                                            This option can be used multiple times
-    -j, --dump-json                                         Quiet, but print JSON information for each video. Simulate unless --no-
-                                                            simulate is used. See "OUTPUT TEMPLATE" for a description of available
-                                                            keys
-    -J, --dump-single-json                                  Quiet, but print JSON information for each URL or infojson passed.
-                                                            Simulate unless --no-simulate is used. If the URL refers to a playlist,
-                                                            the whole playlist information is dumped in a single line
-    --force-write-archive                                   Force download archive entries to be written as far as no errors occur,
-                                                            even if -s or another simulation option is used (Alias: --force-download-
-                                                            archive)
-    --newline                                               Output progress bar as new lines
-    --no-progress                                           Do not print progress bar
-    --progress                                              Show progress bar, even if in quiet mode
-    --console-title                                         Display progress in console titlebar
-    --progress-template [TYPES:]TEMPLATE                    Template for progress outputs, optionally prefixed with one of "download:"
-                                                            (default), "download-title:" (the console title), "postprocess:",  or
-                                                            "postprocess-title:". The video's fields are accessible under the "info"
-                                                            key and the progress attributes are accessible under "progress" key. E.g.
-                                                            --console-title --progress-template "download-
-                                                            title:%(info.id)s-%(progress.eta)s"
-    --progress-delta SECONDS                                Time between progress output (default: 0)
-    -v, --verbose                                           Print various debugging information
-    --dump-pages                                            Print downloaded pages encoded using base64 to debug problems (very
-                                                            verbose)
-    --write-pages                                           Write downloaded intermediary pages to files in the current directory to
-                                                            debug problems
-    --print-traffic                                         Display sent and read HTTP traffic
-
-  Workarounds:
-    --encoding ENCODING                                     Force the specified encoding (experimental)
-    --legacy-server-connect                                 Explicitly allow HTTPS connection to servers that do not support RFC 5746
-                                                            secure renegotiation
-    --no-check-certificates                                 Suppress HTTPS certificate validation
-    --prefer-insecure                                       Use an unencrypted connection to retrieve information about the video
-                                                            (Currently supported only for YouTube)
-    --add-headers FIELD:VALUE                               Specify a custom HTTP header and its value, separated by a colon ":". You
-                                                            can use this option multiple times
-    --bidi-workaround                                       Work around terminals that lack bidirectional text support. Requires bidiv
-                                                            or fribidi executable in PATH
-    --sleep-requests SECONDS                                Number of seconds to sleep between requests during data extraction
-    --sleep-interval SECONDS                                Number of seconds to sleep before each download. This is the minimum time
-                                                            to sleep when used along with --max-sleep-interval (Alias: --min-sleep-
-                                                            interval)
-    --max-sleep-interval SECONDS                            Maximum number of seconds to sleep. Can only be used along with --min-
-                                                            sleep-interval
-    --sleep-subtitles SECONDS                               Number of seconds to sleep before each subtitle download
-
-  Video Format Options:
-    -f, --format FORMAT                                     Video format code, see "FORMAT SELECTION" for more details
-    -S, --format-sort SORTORDER                             Sort the formats by the fields given, see "Sorting Formats" for more
-                                                            details
-    --format-sort-reset                                     Disregard previous user specified sort order and reset to the default
-    --format-sort-force                                     Force user specified sort order to have precedence over all fields, see
-                                                            "Sorting Formats" for more details (Alias: --S-force)
-    --no-format-sort-force                                  Some fields have precedence over the user specified sort order (default)
-    --video-multistreams                                    Allow multiple video streams to be merged into a single file
-    --no-video-multistreams                                 Only one video stream is downloaded for each output file (default)
-    --audio-multistreams                                    Allow multiple audio streams to be merged into a single file
-    --no-audio-multistreams                                 Only one audio stream is downloaded for each output file (default)
-    --prefer-free-formats                                   Prefer video formats with free containers over non-free ones of the same
-                                                            quality. Use with "-S ext" to strictly prefer free containers irrespective
-                                                            of quality
-    --no-prefer-free-formats                                Don't give any special preference to free containers (default)
-    --check-formats                                         Make sure formats are selected only from those that are actually
-                                                            downloadable
-    --check-all-formats                                     Check all formats for whether they are actually downloadable
-    --no-check-formats                                      Do not check that the formats are actually downloadable
-    -F, --list-formats                                      List available formats of each video. Simulate unless --no-simulate is
-                                                            used
-    --merge-output-format FORMAT                            Containers that may be used when merging formats, separated by "/", e.g.
-                                                            "mp4/mkv". Ignored if no merge is required. (currently supported: avi,
-                                                            flv, mkv, mov, mp4, webm)
-
-  Subtitle Options:
-    --write-subs                                            Write subtitle file
-    --no-write-subs                                         Do not write subtitle file (default)
-    --write-auto-subs                                       Write automatically generated subtitle file (Alias: --write-automatic-
-                                                            subs)
-    --no-write-auto-subs                                    Do not write auto-generated subtitles (default) (Alias: --no-write-
-                                                            automatic-subs)
-    --list-subs                                             List available subtitles of each video. Simulate unless --no-simulate is
-                                                            used
-    --sub-format FORMAT                                     Subtitle format; accepts formats preference separated by "/", e.g. "srt"
-                                                            or "ass/srt/best"
-    --sub-langs LANGS                                       Languages of the subtitles to download (can be regex) or "all" separated
-                                                            by commas, e.g. --sub-langs "en.*,ja" (where "en.*" is a regex pattern
-                                                            that matches "en" followed by 0 or more of any character). You can prefix
-                                                            the language code with a "-" to exclude it from the requested languages,
-                                                            e.g. --sub-langs all,-live_chat. Use --list-subs for a list of available
-                                                            language tags
-
-  Authentication Options:
-    -u, --username USERNAME                                 Login with this account ID
-    -p, --password PASSWORD                                 Account password. If this option is left out, yt-dlp will ask
-                                                            interactively
-    -2, --twofactor TWOFACTOR                               Two-factor authentication code
-    -n, --netrc                                             Use .netrc authentication data
-    --netrc-location PATH                                   Location of .netrc authentication data; either the path or its containing
-                                                            directory. Defaults to ~/.netrc
-    --netrc-cmd NETRC_CMD                                   Command to execute to get the credentials for an extractor.
-    --video-password PASSWORD                               Video-specific password
-    --ap-mso MSO                                            Adobe Pass multiple-system operator (TV provider) identifier, use --ap-
-                                                            list-mso for a list of available MSOs
-    --ap-username USERNAME                                  Multiple-system operator account login
-    --ap-password PASSWORD                                  Multiple-system operator account password. If this option is left out, yt-
-                                                            dlp will ask interactively
-    --ap-list-mso                                           List all supported multiple-system operators
-    --client-certificate CERTFILE                           Path to client certificate file in PEM format. May include the private key
-    --client-certificate-key KEYFILE                        Path to private key file for client certificate
-    --client-certificate-password PASSWORD                  Password for client certificate private key, if encrypted. If not
-                                                            provided, and the key is encrypted, yt-dlp will ask interactively
-
-  Post-Processing Options:
-    -x, --extract-audio                                     Convert video files to audio-only files (requires ffmpeg and ffprobe)
-    --audio-format FORMAT                                   Format to convert the audio to when -x is used. (currently supported: best
-                                                            (default), aac, alac, flac, m4a, mp3, opus, vorbis, wav). You can specify
-                                                            multiple rules using similar syntax as --remux-video
-    --audio-quality QUALITY                                 Specify ffmpeg audio quality to use when converting the audio with -x.
-                                                            Insert a value between 0 (best) and 10 (worst) for VBR or a specific
-                                                            bitrate like 128K (default 5)
-    --remux-video FORMAT                                    Remux the video into another container if necessary (currently supported:
-                                                            avi, flv, gif, mkv, mov, mp4, webm, aac, aiff, alac, flac, m4a, mka, mp3,
-                                                            ogg, opus, vorbis, wav). If the target container does not support the
-                                                            video/audio codec, remuxing will fail. You can specify multiple rules;
-                                                            e.g. "aac>m4a/mov>mp4/mkv" will remux aac to m4a, mov to mp4 and anything
-                                                            else to mkv
-    --recode-video FORMAT                                   Re-encode the video into another format if necessary. The syntax and
-                                                            supported formats are the same as --remux-video
-    --postprocessor-args NAME:ARGS                          Give these arguments to the postprocessors. Specify the
-                                                            postprocessor/executable name and the arguments separated by a colon ":"
-                                                            to give the argument to the specified postprocessor/executable. Supported
-                                                            PP are: Merger, ModifyChapters, SplitChapters, ExtractAudio, VideoRemuxer,
-                                                            VideoConvertor, Metadata, EmbedSubtitle, EmbedThumbnail,
-                                                            SubtitlesConvertor, ThumbnailsConvertor, FixupStretched, FixupM4a,
-                                                            FixupM3u8, FixupTimestamp and FixupDuration. The supported executables
-                                                            are: AtomicParsley, FFmpeg and FFprobe. You can also specify "PP+EXE:ARGS"
-                                                            to give the arguments to the specified executable only when being used by
-                                                            the specified postprocessor. Additionally, for ffmpeg/ffprobe, "_i"/"_o"
-                                                            can be appended to the prefix optionally followed by a number to pass the
-                                                            argument before the specified input/output file, e.g. --ppa
-                                                            "Merger+ffmpeg_i1:-v quiet". You can use this option multiple times to
-                                                            give different arguments to different postprocessors. (Alias: --ppa)
-    -k, --keep-video                                        Keep the intermediate video file on disk after post-processing
-    --no-keep-video                                         Delete the intermediate video file after post-processing (default)
-    --post-overwrites                                       Overwrite post-processed files (default)
-    --no-post-overwrites                                    Do not overwrite post-processed files
-    --embed-subs                                            Embed subtitles in the video (only for mp4, webm and mkv videos)
-    --no-embed-subs                                         Do not embed subtitles (default)
-    --embed-thumbnail                                       Embed thumbnail in the video as cover art
-    --no-embed-thumbnail                                    Do not embed thumbnail (default)
-    --embed-metadata                                        Embed metadata to the video file. Also embeds chapters/infojson if present
-                                                            unless --no-embed-chapters/--no-embed-info-json are used (Alias: --add-
-                                                            metadata)
-    --no-embed-metadata                                     Do not add metadata to file (default) (Alias: --no-add-metadata)
-    --embed-chapters                                        Add chapter markers to the video file (Alias: --add-chapters)
-    --no-embed-chapters                                     Do not add chapter markers (default) (Alias: --no-add-chapters)
-    --embed-info-json                                       Embed the infojson as an attachment to mkv/mka video files
-    --no-embed-info-json                                    Do not embed the infojson as an attachment to the video file
-    --parse-metadata [WHEN:]FROM:TO                         Parse additional metadata like title/artist from other fields; see
-                                                            "MODIFYING METADATA" for details. Supported values of "WHEN" are the same
-                                                            as that of --use-postprocessor (default: pre_process)
-    --replace-in-metadata [WHEN:]FIELDS REGEX REPLACE       Replace text in a metadata field using the given regex. This option can be
-                                                            used multiple times. Supported values of "WHEN" are the same as that of
-                                                            --use-postprocessor (default: pre_process)
-    --xattrs                                                Write metadata to the video file's xattrs (using Dublin Core and XDG
-                                                            standards)
-    --concat-playlist POLICY                                Concatenate videos in a playlist. One of "never", "always", or
-                                                            "multi_video" (default; only when the videos form a single show). All the
-                                                            video files must have the same codecs and number of streams to be
-                                                            concatenable. The "pl_video:" prefix can be used with "--paths" and "--
-                                                            output" to set the output filename for the concatenated files. See "OUTPUT
-                                                            TEMPLATE" for details
-    --fixup POLICY                                          Automatically correct known faults of the file. One of never (do nothing),
-                                                            warn (only emit a warning), detect_or_warn (the default; fix the file if
-                                                            we can, warn otherwise), force (try fixing even if the file already
-                                                            exists)
-    --ffmpeg-location PATH                                  Location of the ffmpeg binary; either the path to the binary or its
-                                                            containing directory
-    --exec [WHEN:]CMD                                       Execute a command, optionally prefixed with when to execute it, separated
-                                                            by a ":". Supported values of "WHEN" are the same as that of --use-
-                                                            postprocessor (default: after_move). The same syntax as the output
-                                                            template can be used to pass any field as arguments to the command. If no
-                                                            fields are passed, %(filepath,_filename|)q is appended to the end of the
-                                                            command. This option can be used multiple times
-    --no-exec                                               Remove any previously defined --exec
-    --convert-subs FORMAT                                   Convert the subtitles to another format (currently supported: ass, lrc,
-                                                            srt, vtt). Use "--convert-subs none" to disable conversion (default)
-                                                            (Alias: --convert-subtitles)
-    --convert-thumbnails FORMAT                             Convert the thumbnails to another format (currently supported: jpg, png,
-                                                            webp). You can specify multiple rules using similar syntax as "--remux-
-                                                            video". Use "--convert-thumbnails none" to disable conversion (default)
-    --split-chapters                                        Split video into multiple files based on internal chapters. The "chapter:"
-                                                            prefix can be used with "--paths" and "--output" to set the output
-                                                            filename for the split files. See "OUTPUT TEMPLATE" for details
-    --no-split-chapters                                     Do not split video based on chapters (default)
-    --remove-chapters REGEX                                 Remove chapters whose title matches the given regular expression. The
-                                                            syntax is the same as --download-sections. This option can be used
-                                                            multiple times
-    --no-remove-chapters                                    Do not remove any chapters from the file (default)
-    --force-keyframes-at-cuts                               Force keyframes at cuts when downloading/splitting/removing sections. This
-                                                            is slow due to needing a re-encode, but the resulting video may have fewer
-                                                            artifacts around the cuts
-    --no-force-keyframes-at-cuts                            Do not force keyframes around the chapters when cutting/splitting
-                                                            (default)
-    --use-postprocessor NAME[:ARGS]                         The (case-sensitive) name of plugin postprocessors to be enabled, and
-                                                            (optionally) arguments to be passed to it, separated by a colon ":". ARGS
-                                                            are a semicolon ";" delimited list of NAME=VALUE. The "when" argument
-                                                            determines when the postprocessor is invoked. It can be one of
-                                                            "pre_process" (after video extraction), "after_filter" (after video passes
-                                                            filter), "video" (after --format; before --print/--output), "before_dl"
-                                                            (before each video download), "post_process" (after each video download;
-                                                            default), "after_move" (after moving the video file to its final
-                                                            location), "after_video" (after downloading and processing all formats of
-                                                            a video), or "playlist" (at end of playlist). This option can be used
-                                                            multiple times to add different postprocessors
-
-  SponsorBlock Options:
-    Make chapter entries for, or remove various segments (sponsor, introductions, etc.) from downloaded YouTube videos using the
-    SponsorBlock API (https://sponsor.ajay.app)
-
-    --sponsorblock-mark CATS                                SponsorBlock categories to create chapters for, separated by commas.
-                                                            Available categories are sponsor, intro, outro, selfpromo, preview,
-                                                            filler, interaction, music_offtopic, hook, poi_highlight, chapter, all and
-                                                            default (=all). You can prefix the category with a "-" to exclude it. See
-                                                            [1] for descriptions of the categories. E.g. --sponsorblock-mark
-                                                            all,-preview [1] https://wiki.sponsor.ajay.app/w/Segment_Categories
-    --sponsorblock-remove CATS                              SponsorBlock categories to be removed from the video file, separated by
-                                                            commas. If a category is present in both mark and remove, remove takes
-                                                            precedence. The syntax and available categories are the same as for
-                                                            --sponsorblock-mark except that "default" refers to "all,-filler" and
-                                                            poi_highlight, chapter are not available
-    --sponsorblock-chapter-title TEMPLATE                   An output template for the title of the SponsorBlock chapters created by
-                                                            --sponsorblock-mark. The only available fields are start_time, end_time,
-                                                            category, categories, name, category_names. Defaults to "[SponsorBlock]:
-                                                            %(category_names)l"
-    --no-sponsorblock                                       Disable both --sponsorblock-mark and --sponsorblock-remove
-    --sponsorblock-api URL                                  SponsorBlock API location, defaults to https://sponsor.ajay.app
-
-  Extractor Options:
-    --extractor-retries RETRIES                             Number of retries for known extractor errors (default is 3), or "infinite"
-    --allow-dynamic-mpd                                     Process dynamic DASH manifests (default) (Alias: --no-ignore-dynamic-mpd)
-    --ignore-dynamic-mpd                                    Do not process dynamic DASH manifests (Alias: --no-allow-dynamic-mpd)
-    --hls-split-discontinuity                               Split HLS playlists to different formats at discontinuities such as ad
-                                                            breaks
-    --no-hls-split-discontinuity                            Do not split HLS playlists into different formats at discontinuities such
-                                                            as ad breaks (default)
-    --extractor-args IE_KEY:ARGS                            Pass ARGS arguments to the IE_KEY extractor. See "EXTRACTOR ARGUMENTS" for
-                                                            details. You can use this option multiple times to give arguments for
-                                                            different extractors
-
-  Preset Aliases:
-    Predefined aliases for convenience and ease of use. Note that future versions of yt-dlp may add or adjust presets, but the
-    existing preset names will not be changed or removed
-
-    -t mp3                                                  -f 'ba[acodec^=mp3]/ba/b' -x --audio-format mp3
-
-    -t aac                                                  -f 'ba[acodec^=aac]/ba[acodec^=mp4a.40.]/ba/b' -x --audio-format aac
-
-    -t mp4                                                  --merge-output-format mp4 --remux-video mp4 -S
-                                                            vcodec:h264,lang,quality,res,fps,hdr:12,acodec:aac
-
-    -t mkv                                                  --merge-output-format mkv --remux-video mkv
-
-    -t sleep                                                --sleep-subtitles 5 --sleep-requests 0.75 --sleep-interval 10 --max-sleep-
-                                                            interval 20
-
-See full documentation at  https://github.com/yt-dlp/yt-dlp#readme
-```
-
-# .
-
-design.
-
-```
-~ % cli
-iff cli --help
-~ % cli (e.g. ls)
-run the default command
-~ % cli (e.g. node, python3)
-enter repl
-```
-
-```
-~ % cli --version
-info.version
-~ % cli -v (if not used by something like verbose)
-info.version
-```
-
-<!-- you probably dont need the version number reading help. -->
-
-<!-- what you do first, how you would do later. (they will parse the same, just to be compatible. a user could have many ways to do the same thing.) -->
-
-<!-- use either lowercase or mixed case. -->
-
-<!-- flags is too shell specific and technical. we ts guys write options. -->
-
-```
-~ % cli -h
-description
-
-Usage: cli <command> [options]
-
-Commands:
-  foo    do foo
-  bar    do bar
-
-Options:
-  -h, --help       Print help
-  -v, --version    Print help
-```
-
-<!-- no coloring/styling by default i guess. as they dont have to be standardized, and can vary. (e.g. you use mtf pride colors.). upd: well, i think commands should be bold to separate w desc for better scanning, i strongly lean to it now. -->
-
-<!-- i prefer at least 4 spaces between --help and print help by default even wo the need of padding. you can have 1, 2, or 3 if you like. it's just a personal pref. -->
-
-<!-- dont differ global and local flags. they must not conflict. -->
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/cli/temp/chalk.ts a/source/cli/temp/chalk.ts
deleted file mode 100644
index c3a18b8..0000000
--- b/source/cli/temp/chalk.ts
+++ /dev/null
@@ -1,77 +0,0 @@
-import chalk from 'chalk';
-
-// --- 1. MODIFIERS ---
-console.log(chalk.bold('Bold text'));
-console.log(chalk.dim('Dim/faint text'));
-console.log(chalk.italic('Italic text'));
-console.log(chalk.underline('Underlined text'));
-console.log(chalk.inverse('Inversed background and foreground'));
-console.log(chalk.hidden('Hidden text (invisible but occupies space)'));
-console.log(chalk.strikethrough('Strikethrough text'));
-console.log(chalk.visible('Visible only if terminal supports color'));
-
-// --- 2. FOREGROUND (TEXT) COLORS ---
-console.log(chalk.black('Black text'));
-console.log(chalk.red('Red text'));
-console.log(chalk.green('Green text'));
-console.log(chalk.yellow('Yellow text'));
-console.log(chalk.blue('Blue text'));
-console.log(chalk.magenta('Magenta text'));
-console.log(chalk.cyan('Cyan text'));
-console.log(chalk.white('White text'));
-console.log(chalk.gray('Gray text'));
-
-// --- 3. BRIGHT FOREGROUND COLORS ---
-console.log(chalk.blackBright('Bright black'));
-console.log(chalk.redBright('Bright red'));
-console.log(chalk.greenBright('Bright green'));
-console.log(chalk.yellowBright('Bright yellow'));
-console.log(chalk.blueBright('Bright blue'));
-console.log(chalk.magentaBright('Bright magenta'));
-console.log(chalk.cyanBright('Bright cyan'));
-console.log(chalk.whiteBright('Bright white'));
-
-// --- 4. BACKGROUND COLORS ---
-console.log(chalk.bgBlack.white('Black BG'));
-console.log(chalk.bgRed('Red BG'));
-console.log(chalk.bgGreen('Green BG'));
-console.log(chalk.bgYellow.black('Yellow BG'));
-console.log(chalk.bgBlue('Blue BG'));
-console.log(chalk.bgMagenta('Magenta BG'));
-console.log(chalk.bgCyan.black('Cyan BG'));
-console.log(chalk.bgWhite.black('White BG'));
-console.log(chalk.bgGray('Gray BG'));
-
-// --- 5. BRIGHT BACKGROUND COLORS ---
-console.log(chalk.bgBlackBright('Bright black BG'));
-console.log(chalk.bgRedBright('Bright red BG'));
-console.log(chalk.bgGreenBright('Bright green BG'));
-console.log(chalk.bgYellowBright.black('Bright yellow BG'));
-console.log(chalk.bgBlueBright('Bright blue BG'));
-console.log(chalk.bgMagentaBright('Bright magenta BG'));
-console.log(chalk.bgCyanBright.black('Bright cyan BG'));
-console.log(chalk.bgWhiteBright.black('Bright white BG'));
-
-// --- 6. ADVANCED CUSTOM COLORS ---
-console.log(chalk.hex('#DEADED').bold('Custom Hex Color'));
-console.log(chalk.rgb(15, 100, 204)('Custom RGB Color'));
-console.log(chalk.bgHex('#333333').hex('#00FF00')('Custom Hex BG & FG'));
-console.log(chalk.bgRgb(255, 220, 0).black('Custom RGB BG'));
-
-// --- 7. CHAINING & NESTING ---
-console.log(chalk.blue.bgRed.bold.underline('Chained: Blue text, Red BG, Bold, Underline'));
-console.log(
-  chalk.green(
-    'Outer text is green ' +
-    chalk.blue.underline('inner text is blue and underlined') +
-    ' back to green'
-  )
-);
-
-// --- 8. MULTIPLE ARGUMENTS & TEMPLATE LITERALS ---
-console.log(chalk.yellow('Hello', 'World', 'with', 'multiple', 'arguments'));
-console.log(chalk.cyan(`Template literal using variables: ${process.version}`));
-
-// --- 9. UTILITIES (LEVELS & FORCE DISABLE) ---
-// View system color support level (0 = None, 1 = Basic, 2 = 256 colors, 3 = Truecolor)
-console.log(`Color Support Level: ${chalk.level}`);
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/cli/temp/chalk_poc.ts a/source/cli/temp/chalk_poc.ts
deleted file mode 100644
index 474998a..0000000
--- b/source/cli/temp/chalk_poc.ts
+++ /dev/null
@@ -1,10 +0,0 @@
-import chalk from 'chalk';
-
-log(JSON.stringify(chalk.blue(`123`)))
-
-log(chalk.blue(`123`), chalk.bgBlack(chalk.yellow(`123`)))
-log(chalk.bgCyan(`123`), chalk.bgCyan(chalk.yellow(`123`)), chalk.bgCyan(chalk.cyan(`123`)))
-
-log(`[STDOUT] ${123424}`)
-
-log(`[STDERR] ${123}`)
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/cli/temp/commander.ts a/source/cli/temp/commander.ts
deleted file mode 100644
index 7a8ccb1..0000000
--- b/source/cli/temp/commander.ts
+++ /dev/null
@@ -1,59 +0,0 @@
-// Import both Command and Option directly from the library
-import { Command, Option } from 'commander';
-
-const program = new Command();
-
-// Global Configuration
-program
-  .name('greeter')
-  .description('An advanced greeting utility for production environments')
-  .version('2.0.0')
-  .option('-q, --quiet', 'Suppress all console logs except errors', false)
-  .hook('preAction', (thisCommand, actionCommand) => {
-    // Global middleware: Silences console if --quiet flag is passed
-    if (thisCommand.opts().quiet) {
-      console.log = () => {};
-    }
-  });
-
-// Subcommand 1: person
-program
-  .command('person <name>')
-  .description('Greet an individual person with customized styles')
-  .option('-t, --title <type>', 'Professional title prefix', 'Mr./Ms.')
-  .option('-l, --lang <code|name>', 'Language selection', 'en')
-  // FIX: Instantiated as an independent class, not a property of program
-  .addOption(
-    new Option('-s, --style <type>', 'Text presentation style')
-      .choices(['normal', 'uppercase', 'lowercase'])
-      .default('normal')
-  )
-  .action((name, options) => {
-    let greeting = 'Hello';
-
-    if (options.lang === 'es') greeting = 'Hola';
-    if (options.lang === 'fr') greeting = 'Bonjour';
-
-    let message = `${greeting}, ${options.title} ${name}.`;
-
-    if (options.style === 'uppercase') message = message.toUpperCase();
-    if (options.style === 'lowercase') message = message.toLowerCase();
-
-    console.log(message);
-  });
-
-// Subcommand 2: team
-program
-  .command('team')
-  .description('Greet the entire development team')
-  .option('-i, --iterations <number>', 'Number of times to print the cheer', (val) => parseInt(val, 10), 1)
-  .action((options) => {
-    const company = process.env.COMPANY_NAME || 'Acme Corp';
-
-    for (let i = 0; i < options.iterations; i++) {
-      console.log(`Go team ${company}! 🎉`);
-    }
-  });
-
-// Parse the arguments provided by the user
-program.parse(process.argv);
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/cli/temp/commander_poc.ts a/source/cli/temp/commander_poc.ts
deleted file mode 100644
index f9054b6..0000000
--- b/source/cli/temp/commander_poc.ts
+++ /dev/null
@@ -1,57 +0,0 @@
-import { Command } from 'commander';
-
-const program = new Command();
-
-// 1. Global CLI Configuration
-program
-  .name('fileutil')
-  .description('A robust Node.js CLI tool for processing text files')
-  .version('2.1.0')
-  .option('-v, --verbose', 'Print detailed execution logs', false);
-
-// 2. Subcommand: "count"
-program
-  .command('count')
-  .description('Count lines or words in a target file')
-  .argument('<filepath>', 'Path to the target file to analyze')
-  .argument('<x>', 'Path to the target file to analyze')
-  .option('-w, --words', 'Count words instead of lines', false)
-  .option('-m, --min <number>', 'Filter out lines with fewer characters than this number', parseInt)
-  .action((...args) => {
-    log(args)
-    // Access global options from the parent command
-    const globalOptions = program.opts();
-
-    if (globalOptions.verbose) {
-      console.log(`[LOG] Starting analysis on: ${filepath}`);
-    }
-
-    console.log(`Analyzing file: ${filepath}`);
-    console.log(`Mode: ${options.words ? 'Word Count' : 'Line Count'}`);
-
-    if (options.min) {
-      console.log(`Minimum character threshold: ${options.min}`);
-    }
-  });
-
-// 3. Subcommand: "backup"
-program
-  .command('backup')
-  .description('Create a secured copy of a directory')
-  .requiredOption('-d, --destination <path>', 'Directory where the backup ZIP will be saved')
-  .option('--dry-run', 'Simulate the backup without writing files')
-  .action((options) => {
-    if (options.dryRun) {
-      console.log(`[DRY RUN] Would backup to: ${options.destination}`);
-      return;
-    }
-    console.log(`Backup successfully created at: ${options.destination}`);
-  });
-
-// 4. Parse Terminal Arguments
-
-// process.exit(false)
-
-// log(program.options)
-
-program.parse(process.argv);
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/cli/test/help_test.ts a/source/cli/test/help_test.ts
deleted file mode 100644
index 82179e1..0000000
--- b/source/cli/test/help_test.ts
+++ /dev/null
@@ -1,38 +0,0 @@
-import { spawn } from 'child_process';
-
-const test_cases = [
-  {
-    name: 'main help',
-    args: ['greet.ts', 'help'],
-    check: (output: string) => {
-      return output.includes('\x1b[1mUsage\x1b[22m') &&
-        output.includes('\x1b[1mCommands\x1b[22m') &&
-        output.includes('\x1b[1mOptions\x1b[22m');
-    }
-  },
-  {
-    name: 'person command help',
-    args: ['greet.ts', 'help', 'person'],
-    check: (output: string) => {
-      return output.includes('\x1b[1mUsage\x1b[22m: \x1b[1mgreeter\x1b[22m \x1b[1mperson\x1b[22m <name> [options]') &&
-        output.includes('\x1b[1m-t\x1b[22m, \x1b[1m--title\x1b[22m <type>') &&
-        !output.includes('\x1b[1m<name>\x1b[22m');
-    }
-  },
-  {
-    name: 'team command help',
-    args: ['greet.ts', 'help', 'team'],
-    check: (output: string) => {
-      return output.includes('\x1b[1mUsage\x1b[22m: \x1b[1mgreeter\x1b[22m \x1b[1mteam\x1b[22m [options]') &&
-        output.includes('\x1b[1m-i\x1b[22m, \x1b[1m--iterations\x1b[22m <number>');
-    }
-  }
-];
-
-for (const tc of test_cases) {
-  const output = spawn('bun', ['greet.ts', ...tc.args.slice(1)], { cwd: '/home/fira/Documents/f/humility/source/cli' })
-    .stdout.toString();
-
-  const result = tc.check(output);
-  console.log(`${tc.name}: ${result ? 'PASS' : 'FAIL'}`);
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/cli/todo.md a/source/cli/todo.md
deleted file mode 100644
index 4f9d436..0000000
--- b/source/cli/todo.md
+++ /dev/null
@@ -1,27 +0,0 @@
-todo
-
----
-
-- read code inside the folder
-- commander is oop styled. i want a fp one. be declarative.
-
-  ```
-  declaration: name desc commands options...
-
-  hello_world = cli(declaration)
-
-  parse(cli, args) # pretty print, make commands bold
-
-  help(cli, (command), terminal width){
-    string.
-  }
-  ```
-
-- create a hello world cli, support these
-  - version (-v, --version), help (-h, --help)
-  - hello
-  - hello joe
-  - hello 'joe'
-  - hello --name 'joe'
-
-be as simple as possible. just make every command i want work as expected. no validation stuff.
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/drafts/log into file/notes.md a/source/lib/drafts/log into file/notes.md
deleted file mode 100644
index 672f253..0000000
--- b/source/lib/drafts/log into file/notes.md
+++ /dev/null
@@ -1,19 +0,0 @@
-you might log. like, network failure, no api key.
-
-<!-- low prio -->
-
-only
-
-- info <!-- be aware. -->
-- warn <!-- be careful. reconsider if needed. -->
-- error <!-- fix it. -->
-
-well, i guess you will not log. just put timestamp inside the node. keep errors in node. you can filter them in context, and render them on frontend. (you can have a toggle to hide, if errors feel noisy.)
-
----
-
-you do need one.
-
-observability in linear timeframe, instead of being scattered everywhere.
-
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/drafts/result/notes.md a/source/lib/drafts/result/notes.md
deleted file mode 100644
index 5511764..0000000
--- b/source/lib/drafts/result/notes.md
+++ /dev/null
@@ -1,269 +0,0 @@
-notes
-
-# jun 2026
-
-## 28
-
-i
-
-```ts
-fn result<>
-  ok return data
-  err return err(some error)
-
-// propagate
-res = call fn
-ise
-  return res
-
-// propagate void (define _ as global var in prelude)
-_ = call async void fn
-ise
-  return _
-
-// handle
-res = call fn
-ise
-  // do something
-  return
-```
-
-pros: baseline result pattern, explicit, typed
-
-cons: boilerplate when propagating (extremely common), err does fit in any (parse, stringify, send, etc.), hidden danger in void (fire and forget) <!-- unlike rust, which would warn fire and forget result -->
-
-i would stay w it for now, but clearly pattern ii might be a good choice
-
-i (variation)
-
-```ts
-fn result<>
-  ok return {ok, data}
-  err return {err, data}
-```
-
-more boilerplate. less hacky, but not any beneficial really.
-
-ii
-
-```ts
-fn
-  ok return
-  err throw err
-
-// propagate
-res = call fn
-
-// handle
-res = handle(() => call fn)
-ise
-  // do something
-  return
-```
-
-pros: less boilerplate when propagate, no hidden danger in fire and forget, no uncatched errors
-
-cons: implicit, not typed, you dont know if a fn could err, more boilerplate to handle (and inconsistent)
-
-iii
-
-```ts
-fn
-  ok return
-  err throw
-
-// propagate
-res = call fn
-
-// handle
-try
-  res = call fn
-catch e
-  // do something
-
-  return
-```
-
-a variation of ii
-
-pros: native js, no design pattern (or barebone/vanilla)
-
-cons: try catch indentation hell (you should early return instead)
-
-## 29
-
-### i
-
-```ts
-fn result<>
-  ok return data
-  err return err(some error)
-
-// propagate
-res = call fn
-ise
-  return res
-
-// propagate void (define _ as global var in prelude)
-_ = call async void fn
-ise
-  return _
-
-// handle
-res = call fn
-ise
-  // do something
-  return
-```
-
-pros: baseline result pattern, explicit, typed
-
-cons: boilerplate when propagating (extremely common), err does fit in any (parse, stringify, send, etc.), hidden danger in void (fire and forget), possibly breaking error rendering (proto chain) <!-- unlike rust, which would warn fire and forget result -->
-
-i would stay w it for now, but clearly pattern ii might be a good choice
-
-conclusion: you have to
-
-- know whatever low level api that might throw, and wrap inside err <!-- you might still see errors anyway wait, ive already missed. yaml parse and yaml stringify might throw! -->
-- do not fire and forget throwable void fn
-
-i guess i might refactor to ii?
-
-### i (variation)
-
-```ts
-fn result<>
-  ok return {ok, data}
-  err return {err, data}
-```
-
-more boilerplate. less hacky, but not any beneficial really.
-
-### ii
-
-```ts
-fn
-  ok return
-  err throw err
-
-// propagate
-res = call fn
-
-// handle void
-_ = handle(() => call fn)
-ise
-  // do something
-  return
-
-// handle
-res = handle(() => call fn)
-ise
-  // do something
-  return
-```
-
-pros: less boilerplate when propagate, no hidden danger in fire and forget, no uncatched errors
-
-cons: implicit, not typed, you dont know if a fn could err, more boilerplate to handle (and inconsistent)
-
-conclusion: ...
-
-- type?
-  - does returntype work well? test.
-- throw err?
-  - what does new Error benefit (what if you use or not)
-  - is err still needed (yes, but only in handle i guess, to wrap if needed)
-
-### iii
-
-```ts
-fn
-  ok return
-  err throw
-
-// propagate
-res = call fn
-
-// handle
-try
-  res = call fn
-catch e
-  // do something
-
-  return
-```
-
-a variation of ii
-
-pros: native js, no design pattern (or barebone/vanilla)
-
-cons: try catch indentation hell (you should early return instead)
-
-### summary
-
-whatever approach you choose, you could not know what low level apis or 3p libs are throwable wo sufficient research anyway.
-
-<!-- i guess the err() wrapper is completely flawed. complete implicitness with simplicity is way better than partial explicitness. -->
-
-### note
-
-there is a significant change in `handle`.
-
-p
-
-```ts
-fn alias = handle(fn)
-call fn alias params
-
-// iife
-handle(fn)(params)
-```
-
-c
-
-```ts
-handle(fn)
-
-handle(() => fn(params))
-
-// you might also have options ~~or oop styled chains!~~
-```
-
-## 30
-
-conclusion:
-
-never return an error. throw it.
-
-return only if you have handled it.
-
----
-
-just write like this.
-
-```ts
-  _ = await handle(() => readFile(path, 'utf8'))
-```
-
-yes, _ is any. so you should specify the return type explicitly.
-
-there is no way for ts to say "a type can change. just use the latest type".
-
-wait! _ is for void fn.
-
-i could write `const content`!.
-
-```ts
-  _ = await handle(() => mkdir(dirname(path), { recursive: true }))
-  if (is_error(_)) {
-    if (has(map, _.code)) {
-      throw err({ type: map[_.code], message: _ })
-    }
-
-    throw _
-  }
-```
-
-here is where _`` is supposed to be.
-
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/each.ts a/source/lib/each.ts
index 570bae9..bf11610 100644
--- b/source/lib/each.ts
+++ a/source/lib/each.ts
@@ -23,7 +23,7 @@ export function each(...args: number[]): IterableIterator<number> {
     end = args[1]
     step = args[2]
   } else {
-    throw invalid_args
+    throw err(invalid_args)
   }

   const iterate = (begin: number, end: number, step: number) => {
(1/1) Apply this hunk to index and worktree [y,n,q,a,d,e,?]? y

diff --git b/source/lib/file.ts a/source/lib/file.ts
index 25fa05e..1cabacb 100644
--- b/source/lib/file.ts
+++ a/source/lib/file.ts
@@ -94,7 +94,7 @@ const map = {
 }

 /**
- * standardize_errors
+ * standardize errors
  */
 export async function normalize<F extends (...args: any[]) => any>(fn: F) {
   const _ = await handle(fn)
(1/6) Apply this hunk to index and worktree [y,n,q,a,d,j,J,g,/,e,?]? y
@@ -103,7 +103,7 @@ export async function normalize<F extends (...args: any[]) => any>(fn: F) {
       throw err({ type: map[_.code], message: _ })
     }

-    throw _
+    throw err(_)
   }

   return _
(2/6) Apply this hunk to index and worktree [y,n,q,a,d,K,j,J,g,/,e,?]? y
@@ -195,7 +195,7 @@ export async function edit(path: string, search: string, replace: string) {
  */
 export async function remove(path: string, { can_non_exist = false }: { can_non_exist?: boolean } = {}) {
   // must_exist = true // implicit true is somewhat inconsistent
-  _ = await handle(() => unlink(path))
+  const _ = await handle(() => unlink(path))
   if (is_error(_)) {
     if (has(map, _.code)) {
       if (map[_.code] == not_found && can_non_exist) {
(3/6) Apply this hunk to index and worktree [y,n,q,a,d,K,j,J,g,/,e,?]? y
@@ -204,7 +204,7 @@ export async function remove(path: string, { can_non_exist = false }: { can_non_
       throw err({ type: map[_.code], message: _ })
     }

-    throw _
+    throw err(_)
   }
 }

(4/6) Apply this hunk to index and worktree [y,n,q,a,d,K,j,J,g,/,e,?]? y
@@ -221,7 +221,7 @@ export async function clear(path: string) {
 }

 export async function trash(path: string, { can_non_exist = false }) {
-  _ = await handle(() => trash_lib(path, { glob: false }))
+  const _ = await handle(() => trash_lib(path, { glob: false }))
   if (is_error(_)) {
     if (has(map, _.code)) {
       if (map[_.code] == not_found && can_non_exist) {
(5/6) Apply this hunk to index and worktree [y,n,q,a,d,K,j,J,g,/,e,?]? y
@@ -231,6 +231,6 @@ export async function trash(path: string, { can_non_exist = false }) {
       throw err({ type: map[_.code], message: _ })
     }

-    throw _
+    throw err(_)
   }
 }
(6/6) Apply this hunk to index and worktree [y,n,q,a,d,K,g,/,e,?]? y

diff --git b/source/lib/global.ts a/source/lib/global.ts
index c770646..446f7f1 100644
--- b/source/lib/global.ts
+++ a/source/lib/global.ts
@@ -24,3 +24,4 @@ use(log_fs)
 use(std)
 use(each)
 use(handle)
+
(1/1) Apply this hunk to index and worktree [y,n,q,a,d,e,?]? n

diff --git b/source/lib/legacy/app_info 0.1.ts a/source/lib/legacy/app_info 0.1.ts
deleted file mode 100644
index f994b1f..0000000
--- b/source/lib/legacy/app_info 0.1.ts
+++ /dev/null
@@ -1,3 +0,0 @@
-export const app_name = 'humilitydev'
-// export const app_name = 'humility_test'
-export const xdg = false
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/file 0.0.ts a/source/lib/legacy/file 0.0.ts
deleted file mode 100644
index b540bfb..0000000
--- b/source/lib/legacy/file 0.0.ts
+++ /dev/null
@@ -1,310 +0,0 @@
-/**
- * xdg is in js. no types. and no need to have types.
- *
- * config maxNodeModuleJsDepth in tsconfig to normalize it
- */
-import desktop from '@folder/xdg';
-import { homedir } from 'node:os';
-import { join, dirname as dir } from 'node:path';
-import { writeFile, readFile, appendFile, mkdir, unlink } from 'node:fs/promises';
-
-const make_dir = handle(mkdir)
-const write_file = handle(writeFile)
-const read_file = handle(readFile)
-const append_file = handle(appendFile)
-const delete_file = handle(unlink)
-
-/**
- * errors
- */
-export const already_initialized = "already_initialized"
-export const not_initialized = "not_initialized"
-
-export const not_string = "not_string"
-
-export const not_found = "not_found"
-export const permission_denied = "permission_denied"
-export const already_exists = "already_exists"
-export const is_a_directory = "is_a_directory"
-export const not_a_directory = "not_a_directory"
-export const out_of_memory = "out_of_memory"
-export const storage_full = "storage_full"
-export const resource_busy = "resource_busy"
-export const invalid_filename = "invalid_filename"
-export const read_only_filesystem = "read_only_filesystem"
-export const quota_exceeded = "quota_exceeded"
-export const file_too_large = "file_too_large"
-export const other = "other"
-export const executable_file_busy = "executable_file_busy"
-export const deadlock = "deadlock"
-export const would_block = "would_block"
-export const directory_not_empty = "directory_not_empty"
-export const filesystem_loop = "filesystem_loop"
-export const not_seekable = "not_seekable"
-export const broken_pipe = "broken_pipe"
-export const interrupted = "interrupted"
-export const not_connected = "not_connected"
-export const connection_reset = "connection_reset"
-export const unsupported = "unsupported"
-export const invalid_input = "invalid_input"
-export const stale_network_file_handle = "stale_network_file_handle"
-
-const map = {
-  // --- File & Directory Existence ---
-  ENOENT: not_found,
-  EEXIST: already_exists,
-
-  // --- Permissions & Ownership ---
-  EACCES: permission_denied,
-  EPERM: permission_denied,
-  EROFS: read_only_filesystem,
-
-  // --- Path & Filename Formats ---
-  ENOTDIR: not_a_directory,
-  EISDIR: is_a_directory,
-  ENAMETOOLONG: invalid_filename,
-  EINVAL: invalid_filename,
-
-  // --- Resource Exhaustion & Limits ---
-  ENOSPC: storage_full,
-  EDQUOT: quota_exceeded,
-  EFBIG: file_too_large,
-  EMFILE: other,
-  ENFILE: other,
-  ENOMEM: out_of_memory,
-
-  // --- State, Locks, & Concurrent Blocks ---
-  EBUSY: resource_busy,
-  ETXTBSY: executable_file_busy,
-  EDEADLK: deadlock,
-  EAGAIN: would_block,
-  EWOULDBLOCK: would_block,
-
-  // --- Structural Directory Rules ---
-  ENOTEMPTY: directory_not_empty,
-  EXDEV: other,
-  ELOOP: filesystem_loop,
-
-  // --- Hard Drives & Physical Operations ---
-  EIO: other,
-  ENODEV: not_found,
-  ENXIO: not_found,
-  ESPIPE: not_seekable,
-
-  // --- Streams, Pipes, & Buffers ---
-  EPIPE: broken_pipe,
-  EINTR: interrupted,
-  ENOTCONN: not_connected,
-  ESHUTDOWN: broken_pipe,
-  ECONNRESET: connection_reset,
-
-  // --- Fallbacks ---
-  ENOSYS: unsupported,
-  ENOTSUP: unsupported,
-  EFAULT: invalid_input,
-  ESTALE: stale_network_file_handle
-}
-
-/**
- * state
- */
-
-let is_initialized = false;
-let data_folder = ''
-let config_folder = ''
-let cache_folder = ''
-
-type non_empty_string = `${string}${any}`;
-
-// /**
-//  * todo: dry?
-//  */
-// type init = typeof init
-// type path = typeof path
-// type data = typeof data
-// type config = typeof config
-// type cache = typeof cache
-// type write = typeof write
-// type read = typeof read
-// declare global {
-//   var init: init
-//   var path: path
-//   var data: data
-//   var config: config
-//   var cache: cache
-//   var write: write
-//   var read: read
-// }
-
-/**
- * init paths
- *
- * do not care whether it's valid
- */
-export function init({ name, xdg = true }: { name: non_empty_string, xdg?: boolean }) {
-  if (is_initialized) {
-    return err(already_initialized)
-  }
-
-  is_initialized = true
-
-  if (xdg) {
-    const { data, config, cache } = desktop({ subdir: name })
-
-    data_folder = data
-    config_folder = config
-    cache_folder = cache
-  } else {
-    const home = homedir()
-
-    data_folder = join(home, `.${name}`, 'data')
-    config_folder = join(home, `.${name}`, 'config')
-    cache_folder = join(home, `.${name}`, 'cache')
-  }
-}
-
-export function home() {
-  return homedir()
-}
-
-// todo: handle ~
-export function path(...args) {
-  return join(...args)
-}
-
-export function data(...args) {
-  if (!is_initialized) {
-    return err(not_initialized)
-  }
-  return join(data_folder, ...args)
-}
-
-export function config(...args) {
-  if (!is_initialized) {
-    return err(not_initialized)
-  }
-  return join(config_folder, ...args)
-}
-
-export function cache(...args) {
-  if (!is_initialized) {
-    return err(not_initialized)
-  }
-  return join(cache_folder, ...args)
-}
-
-/**
- * (over) write a file
- */
-export async function write({ path, content }): Promise<result<void>> {
-  /**
-   * todo: handle errors
-   *
-   * e.g. illegal character, path too long, etc.
-   */
-
-  /**
-   * create path if needed
-   */
-  const make_dir_result = await make_dir(dir(path), { recursive: true });
-  if (is_error(make_dir_result)) {
-    if (has(map, make_dir_result.code)) {
-      return err({ type: map[make_dir_result.code], message: make_dir_result })
-    }
-  }
-
-  const write_file_result = await write_file(path, content, 'utf8');
-  if (is_error(write_file_result)) {
-    if (has(map, write_file_result.code)) {
-      return err({ type: map[write_file_result.code], message: write_file_result })
-    }
-  }
-
-  return write_file_result
-}
-
-/**
- * read a file
- *
- * use object params anyway for consistency,
- * even though there is only one param currently
- */
-export async function read({ path }) {
-  /**
-   * todo: handle errors
-   *
-   * e.g. not_found
-   *
-   * handle non string files (?)
-   */
-
-  const content = await read_file(path, 'utf8');
-
-  if (is_error(content)) {
-    /**
-     * todo
-     *
-     * - invalid filename does not work well, whether node or sys. rather check in ts.
-     * - fact check the mappings, rather resolve to others than having an incorrect mapping
-     */
-    if (has(map, content.code)) {
-      return err({ type: map[content.code], message: content })
-    }
-  }
-
-  return content
-}
-
-export async function append({ path, content }) {
-  await append_file(path, content)
-}
-
-export async function edit({ path, find, replace }) {
-  /**
-   * todo
-   *
-   * perf: positional replace, memory efficient.
-   *
-   * more edit modes
-   *
-   * regex
-   *
-   * replace or replace all
-   */
-
-  const content = await read({ path })
-
-  if (typeof content != 'string') {
-    return err(not_string)
-  }
-
-  const updated_content = content.replaceAll(find, replace)
-
-  return await write({ path, content: updated_content })
-}
-
-/**
- * remove a file
- *
- * delete is reserved by ts
- *
- * todo
- *
- * add an option (dont err for non existence)
- *
- * a list of files?
- *
- * do i { path, options } or path, { options }? others?
- */
-export async function remove({ path }): Promise<result<void>> {
-  const _ = await delete_file(path)
-
-  if (is_error(_)) {
-    if (has(map, _.code)) {
-      return err({ type: map[_.code], message: _ })
-    }
-  }
-
-  return _
-}
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/file 0.1.ts a/source/lib/legacy/file 0.1.ts
deleted file mode 100644
index c734287..0000000
--- b/source/lib/legacy/file 0.1.ts
+++ /dev/null
@@ -1,258 +0,0 @@
-import desktop from '@folder/xdg';
-import { homedir } from 'node:os';
-import { join, dirname } from 'node:path';
-import { writeFile, readFile, appendFile, mkdir, unlink } from 'node:fs/promises';
-
-// Errors
-export const already_initialized = "already_initialized"
-export const not_initialized = "not_initialized"
-
-export const not_string = "not_string"
-
-export const not_found = "not_found"
-export const permission_denied = "permission_denied"
-export const already_exists = "already_exists"
-export const is_a_directory = "is_a_directory"
-export const not_a_directory = "not_a_directory"
-export const out_of_memory = "out_of_memory"
-export const storage_full = "storage_full"
-export const resource_busy = "resource_busy"
-export const invalid_filename = "invalid_filename"
-export const read_only_filesystem = "read_only_filesystem"
-export const quota_exceeded = "quota_exceeded"
-export const file_too_large = "file_too_large"
-export const other = "other"
-export const executable_file_busy = "executable_file_busy"
-export const deadlock = "deadlock"
-export const would_block = "would_block"
-export const directory_not_empty = "directory_not_empty"
-export const filesystem_loop = "filesystem_loop"
-export const not_seekable = "not_seekable"
-export const broken_pipe = "broken_pipe"
-export const interrupted = "interrupted"
-export const not_connected = "not_connected"
-export const connection_reset = "connection_reset"
-export const unsupported = "unsupported"
-export const invalid_input = "invalid_input"
-export const stale_network_file_handle = "stale_network_file_handle"
-
-const map = {
-  // File & Directory Existence
-  ENOENT: not_found,
-  EEXIST: already_exists,
-
-  // Permissions & Ownership
-  EACCES: permission_denied,
-  EPERM: permission_denied,
-  EROFS: read_only_filesystem,
-
-  // Path & Filename Formats
-  ENOTDIR: not_a_directory,
-  EISDIR: is_a_directory,
-  ENAMETOOLONG: invalid_filename,
-  EINVAL: invalid_filename,
-
-  // Resource Exhaustion & Limits
-  ENOSPC: storage_full,
-  EDQUOT: quota_exceeded,
-  EFBIG: file_too_large,
-  EMFILE: other,
-  ENFILE: other,
-  ENOMEM: out_of_memory,
-
-  // State, Locks, & Concurrent Blocks
-  EBUSY: resource_busy,
-  ETXTBSY: executable_file_busy,
-  EDEADLK: deadlock,
-  EAGAIN: would_block,
-  EWOULDBLOCK: would_block,
-
-  // Structural Directory Rules
-  ENOTEMPTY: directory_not_empty,
-  EXDEV: other,
-  ELOOP: filesystem_loop,
-
-  // Hard Drives & Physical Operations
-  EIO: other,
-  ENODEV: not_found,
-  ENXIO: not_found,
-  ESPIPE: not_seekable,
-
-  // Streams, Pipes, & Buffers
-  EPIPE: broken_pipe,
-  EINTR: interrupted,
-  ENOTCONN: not_connected,
-  ESHUTDOWN: broken_pipe,
-  ECONNRESET: connection_reset,
-
-  // Fallbacks
-  ENOSYS: unsupported,
-  ENOTSUP: unsupported,
-  EFAULT: invalid_input,
-  ESTALE: stale_network_file_handle
-}
-
-// States
-let is_initialized = false;
-let data_folder = ''
-let config_folder = ''
-let cache_folder = ''
-
-type non_empty_string = `${string}${any}`;
-
-export function init({ name, xdg = true }: { name: non_empty_string, xdg?: boolean }) {
-  if (is_initialized) {
-    return err(already_initialized)
-  }
-
-  is_initialized = true
-
-  if (xdg) {
-    const { data, config, cache } = desktop({ subdir: name })
-
-    data_folder = data
-    config_folder = config
-    cache_folder = cache
-  } else {
-    const home = homedir()
-
-    data_folder = join(home, `.${name}`, 'data')
-    config_folder = join(home, `.${name}`, 'config')
-    cache_folder = join(home, `.${name}`, 'cache')
-  }
-}
-
-export function home() {
-  return homedir()
-}
-
-// todo: handle ~
-export function path(...args) {
-  return join(...args)
-}
-
-export function data(...args) {
-  if (!is_initialized) {
-    return err(not_initialized)
-  }
-  return join(data_folder, ...args)
-}
-
-export function config(...args) {
-  if (!is_initialized) {
-    return err(not_initialized)
-  }
-  return join(config_folder, ...args)
-}
-
-export function cache(...args) {
-  if (!is_initialized) {
-    return err(not_initialized)
-  }
-  return join(cache_folder, ...args)
-}
-
-/**
- * (over) write a file
- */
-export async function write({ path, content }): Promise<Result<void>> {
-  try {
-    await dirname(path)
-  } catch {
-    return err(invalid_input)
-  }
-
-  try {
-    await mkdir(dirname(path), { recursive: true })
-  } catch (e) {
-    if (has(map, e.code)) {
-      return err({ type: map[e.code], message: e })
-    }
-    return err(other)
-  }
-
-  try {
-    await writeFile(path, content, 'utf8')
-  } catch (e) {
-    if (has(map, e.code)) {
-      return err({ type: map[e.code], message: e })
-    }
-    return err(other)
-  }
-}
-
-/**
- * read a file
- *
- * use object params anyway for consistency,
- * even though there is only one param currently
- */
-export async function read({ path }) {
-  try {
-    return await readFile(path, 'utf8')
-  } catch (e) {
-    if (has(map, e.code)) {
-      return err({ type: map[e.code], message: e })
-    }
-    return err(other)
-  }
-}
-
-export async function append({ path, content }) {
-  try {
-    await appendFile(path, content)
-  } catch (e) {
-    if (has(map, e.code)) {
-      return err({ type: map[e.code], message: e })
-    }
-    return err(other)
-  }
-}
-
-export async function edit({ path, find, replace }) {
-  /**
-   * todo
-   *
-   * perf: positional replace, memory efficient.
-   *
-   * more edit modes
-   *
-   * regex
-   *
-   * replace or replace all
-   */
-
-  const content = await read({ path })
-
-  if (typeof content != 'string') {
-    return err(not_string)
-  }
-
-  const updated_content = content.replaceAll(find, replace)
-
-  return await write({ path, content: updated_content })
-}
-
-/**
- * remove a file
- *
- * todo
- *
- * add an option (dont err for non existence)
- *
- * a list of files?
- *
- * do i { path, options } or path, { options }? others?
- */
-export async function remove({ path }): Promise<Result<void>> {
-  try {
-    await unlink(path)
-  } catch (e) {
-    if (has(map, e.code)) {
-      return err({ type: map[e.code], message: e })
-    }
-    return err(other)
-  }
-}
-
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/global 0.1.ts a/source/lib/legacy/global 0.1.ts
deleted file mode 100644
index 36651d3..0000000
--- b/source/lib/legacy/global 0.1.ts
+++ /dev/null
@@ -1,25 +0,0 @@
-import * as std from 'lib/std';
-import * as log from 'lib/log';
-import * as result from 'lib/result';
-
-type use = typeof use
-declare global {
-  var use: use
-}
-
-export function use(lib) {
-  Object.assign(globalThis, lib)
-}
-
-// Prelude
-use(result)
-use(log)
-use(std)
-
-globalThis.use = use
-
-// Init
-const { app_name, xdg } = await import('lib/app_info')
-const { init } = await import('lib/file')
-
-init({ name: app_name, xdg })
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/handle 0.0.ts a/source/lib/legacy/handle 0.0.ts
deleted file mode 100644
index a373423..0000000
--- b/source/lib/legacy/handle 0.0.ts
+++ /dev/null
@@ -1,25 +0,0 @@
-type handle = typeof handle
-declare global {
-  var handle: handle
-}
-
-export function handle<F extends (...args: any[]) => any>(fn: F): (...args: Parameters<F>) => Result<ReturnType<F>> {
-  return (...args) => {
-    try {
-      const result = fn(...args);
-
-      if (result instanceof Promise || typeof result?.then == 'function') {
-        return (result as Promise<Result<any>>)
-          // async ok
-          .then((data) => data)
-          // async err
-          .catch((e) => err(e));
-      }
-
-      // sync ok
-      return result;
-    } catch (error) {
-      return err(error);
-    }
-  }
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/handle 0.1.ts a/source/lib/legacy/handle 0.1.ts
deleted file mode 100644
index 9b716c5..0000000
--- b/source/lib/legacy/handle 0.1.ts
+++ /dev/null
@@ -1,18 +0,0 @@
-export function handle<F extends (...args: any[]) => any>(fn: F): Result<ReturnType<F>> {
-  try {
-    const result = fn();
-
-    if (result instanceof Promise || typeof result?.then == 'function') {
-      return (result as Promise<Result<ReturnType<F>>>)
-        // async ok
-        .then((data) => data)
-        // async err
-        .catch((e) => err(e));
-    }
-
-    // sync ok
-    return result;
-  } catch (e) {
-    return err(e);
-  }
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/result 0.0.ts a/source/lib/legacy/result 0.0.ts
deleted file mode 100644
index c71e927..0000000
--- b/source/lib/legacy/result 0.0.ts
+++ /dev/null
@@ -1,273 +0,0 @@
-type ok<T> = Exclude<T, err>
-/**
- * no need to readonly, you wont modify it by default
- *
- * todo
- *
- * type and message are string?
- */
-type err = { type: any, message: any, [err_symbol]: true } & Partial<err_fs>
-// type err = Readonly<{ type: any, message: any, [err_symbol]: true }> & Partial<err_fs>
-// type err = Readonly<{ type: string | number | symbol, message: string | object, [err_symbol]: true }>
-type err_fs = { code: string, path: string, syscall: string, errno: number }
-
-/**
- * todo: dry?
- *
- * (impossible in ts)
- */
-type err_fn = typeof err
-type rescue = typeof rescue
-type handle = typeof handle
-declare global {
-  type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
-  // type Optional<Type, Keys extends keyof any> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
-
-  /**
-   * todo: E should be subset of err
-   */
-  type result<T, E = err> = ok<T> | E;
-
-  /**
-   * if needed
-   */
-  type option<T> = T | undefined;
-
-  var err: err_fn
-  var rescue: rescue
-  var handle: handle
-}
-
-const err_symbol = Symbol("err");
-// const err_symbol = "__err";
-// const err_symbol = "d9eb253e06987fa74a5d3189f73d9f7a8104cca786fafbb52bc9555972f5477f"; // sha256 of "err"
-
-/**
- * not needed.
- *
- * just return value directly.
- */
-
-// export function ok<T>(value: ok<T>): ok<T> {
-//   return value
-// }
-
-export function err(error: Optional<err, typeof err_symbol | 'message'> | number | string | symbol | Error): err {
-  if (error instanceof Error) {
-    /**
-     * it's simpler to say
-     * foo.type == SyntaxError
-     * than
-     * foo.type == 'SyntaxError' or foo.type instanceof SyntaxError
-     *
-     * if rescue, it's already an error.
-     * you match known errors, otherwise it's an unexpected error.
-     *
-     * you dont need nested error types on the prototype chain. separate them.
-     */
-    return merge(error, { type: error.constructor, message: error.stack ?? error.message, [err_symbol]: true })
-
-    // return Object.defineProperty({
-    //   /**
-    //    * it's simpler to say
-    //    * foo.type == SyntaxError
-    //    * than
-    //    * foo.type == 'SyntaxError' or foo.type instanceof SyntaxError
-    //    *
-    //    * if rescue, it's already an error.
-    //    * you match known errors, otherwise it's an unexpected error.
-    //    *
-    //    * you dont need nested error types on the prototype chain. separate them.
-    //    */
-    //   type: error.constructor,
-    //   // type: error.name,
-    //   message: error.stack ?? error.message,
-    // }, err_symbol, { value: true }) as err
-  } else if (typeof error == 'object' && Object.hasOwn(error, 'type')) {
-    return merge(error, { [err_symbol]: true })
-    // return Object.defineProperty(error, err_symbol, { value: true }) as err
-    // return Object.defineProperty({
-    //   // it must have a type. you should not throw anything.
-    //   type: error.type,
-    //   message: error.message ?? 'no message',
-    // }, err_symbol, { value: true }) as err
-  } else {
-    /**
-     * more flexible
-     */
-    return {
-      type: error,
-      /**
-       * type => message
-       */
-      message: error,
-      [err_symbol]: true
-    }
-    // // why not be more flexible
-    // return Object.defineProperty({
-    //   type: error,
-    //   // message is implied by the type
-    //   message: error,
-    // }, err_symbol, { value: true }) as err
-  }
-}
-
-export function rescue<T>(result: result<T>): result is err {
-  return result?.[err_symbol]
-  // return (result as any)?.[err_symbol]
-}
-
-// /**
-//  * deprecated.
-//  *
-//  * you often want to process the data, which need to be unwrapped.
-//  *
-//  * while ts does not allow
-//  *
-//  * - change the type halfway in the same scope `data = data.value`
-//  * - shadow the type with the same name even with indentation `const data = data.value`
-//  *
-//  * as a result, you will have `data_result` and `data`.
-//  *
-//  * or, you could build heavier oop chaining, which is completely unnecessary.
-//  *
-//  */
-
-// type ok<T> = { err: false; value?: T, unwrap(): T }
-// type err = { err: true; error?: string | object}
-
-// // or error {type, message}?
-
-// /**
-//  * you either
-//  *
-//  * - err, panics
-//  * - err, logs
-//  * - err, handle each error types
-//  */
-
-// declare global {
-//   type result<T> = ok<T> | err;
-// }
-
-// export function ok<T>(value: T): ok<T> {
-//   return {
-//     err: false, value, unwrap() {
-//       return value
-//     }
-//   }
-// }
-
-// export function err(error: any): err {
-//   return {
-//     err: true, error, unwrap() {
-//       throw error;
-//     }
-//   }
-// }
-
-// /**
-//  * hacky (js feature: truthy/falsy).
-//  */
-
-// type ok = { err: false; value?: any }
-// type err = { err: object }
-// export type result = ok | err
-
-// /**
-//  * verbose `if (type==="err")`
-//  *
-//  * most time we only check if err and early return (avoid nesting hells)
-//  *
-//  * we dont check ok
-//  */
-
-// type ok = { type: 'ok'; value?: any }
-// type err = { type: 'err'; error: string }
-// export type result = ok | err
-
-/**
- * handle possible errors
- *
- * just use the word handle ("i will wrap it to handle the errors gracefully"),
- * not attempt (i attempt to do this even if it might fail.).
- *
- * it does not preserve fn overloads as ts does not support it.
- *
- * ref: https://gist.github.com/t3dotgg/a486c4ae66d32bf17c09c73609dacc5b
- */
-export function handle<F extends (...args: any[]) => any>(fn: F): (...args: Parameters<F>) => result<ReturnType<F>> {
-  return (...args) => {
-    try {
-      const result = fn(...args);
-
-      if (result instanceof Promise || typeof result?.then == 'function') {
-        return (result as Promise<result<any>>)
-          // async ok
-          .then((data) => data)
-          // async err
-          .catch((e) => err(e));
-      }
-
-      // sync ok
-      return result;
-    } catch (error) {
-      return err(error);
-    }
-  }
-}
-
-// function wrapper<F extends (...args: any[]) => any>(fn: F): (...args: Parameters<F>) => ReturnType<F> {
-//   return function(...args: Parameters<F>): ReturnType<F> {
-//     // Add custom wrapper logic here
-//     const result = fn(...args);
-//     // Add custom wrapper logic here
-//     return result;
-//   };
-// }
-
-// export function handle<T, E = err>(fn: Function): () => result<T, E> {
-//   return (...args) => {
-//     try {
-//       return fn(...args);
-//     } catch (error) {
-//       return err({ type: error, message: error });
-//     }
-//   }
-// }
-
-// export function handle_async<T, E = err>(fn: () => Promise<any>): () => Promise<result<T, E>> {
-//   return async (...args) => {
-//     try {
-//       return await fn(...args);
-//     } catch (error) {
-//       return err({ type: error, message: error });
-//     }
-//   }
-// }
-
-// type SyncResult<T, E = Error> = [E, null] | [null, T];
-// type AsyncResult<T, E = Error> = Promise<SyncResult<T, E>>;
-
-// export function safe<Args extends any[], R>(
-//   fn: (...args: Args) => R
-// ): (...args: Args) => R extends Promise<infer U> ? AsyncResult<U> : SyncResult<R> {
-//   return (...args: Args): any => {
-//     try {
-//       const result = fn(...args);
-
-//       // Check if the result is a Promise
-//       if (result instanceof Promise || (result && typeof (result as any).then === 'function')) {
-//         return (result as Promise<any>)
-//           .then((data) => [null, data])
-//           .catch((err) => [err, null]);
-//       }
-
-//       // Synchronous success
-//       return [null, result];
-//     } catch (err) {
-//       // Synchronous error
-//       return [err, null];
-//     }
-//   };
-// }
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/result 0.1.ts a/source/lib/legacy/result 0.1.ts
deleted file mode 100644
index 8b7554b..0000000
--- b/source/lib/legacy/result 0.1.ts
+++ /dev/null
@@ -1,38 +0,0 @@
-type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
-
-type all = string | number | boolean | bigint | symbol | null | undefined | any[] | { [key: PropertyKey]: any };
-type ok<T = all> = T extends object ? (Omit<T, typeof error_symbol> & { [error_symbol]?: never }) : T;
-type error = { type: any, message: any, [error_symbol]: true } & Partial<error_fs>
-type error_fs = { code: string, path: string, syscall: string, errno: number }
-
-type err = typeof err
-type is_error = typeof is_error
-declare global {
-  type result<T = all, E extends error = error> = (0 extends 1 & T ? ok : ok<T>) | E;
-
-  var err: err
-  var is_error: is_error
-}
-
-const error_symbol: unique symbol = Symbol("error");
-
-// no `ok(data)` needed, just return `data` directly
-
-export function err(error: Optional<error, typeof error_symbol> | PropertyKey | Error): error {
-  if (error instanceof Error) {
-    return merge(error, { type: error.constructor, message: error.stack ?? error.message, [error_symbol]: true })
-  } else if (typeof error == 'object' && has(error, 'type')) {
-    return merge(error, { [error_symbol]: true })
-  } else {
-    // flexible
-    return {
-      type: error,
-      message: error,
-      [error_symbol]: true
-    }
-  }
-}
-
-export function is_error<T>(result: result<T>): result is error {
-  return has(result, error_symbol)
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/result 0.2.ts a/source/lib/legacy/result 0.2.ts
deleted file mode 100644
index 96b4648..0000000
--- b/source/lib/legacy/result 0.2.ts
+++ /dev/null
@@ -1,41 +0,0 @@
-type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
-
-type all = string | number | boolean | bigint | symbol | null | undefined | { [key: PropertyKey]: any };
-type success<T = all> = T extends object ? (Omit<T, typeof error_symbol> & { [error_symbol]?: never }) : T;
-type error = { type: any, message: any, [error_symbol]: true } & Partial<error_fs>
-type error_fs = { code: string, path: string, syscall: string, errno: number }
-
-type err = typeof err
-type is_error = typeof is_error
-declare global {
-  type result<T = all, E extends error = error> = (0 extends 1 & T ? success : success<T>) | E;
-
-  var err: err
-  var is_error: is_error
-}
-
-const error_symbol: unique symbol = Symbol("error");
-
-// no `ok(data)` needed, just return `data` directly
-
-export function err(error: Optional<error, typeof error_symbol> | PropertyKey | Error): error {
-  if (error instanceof Error) {
-    error.type = error.constructor
-    error.message = error.stack ?? error.message
-    error[error_symbol] = true
-    return error
-  } else if (error && typeof error == 'object' && has(error, 'type')) {
-    return merge(error, { [error_symbol]: true })
-  } else {
-    // flexible
-    return {
-      type: error,
-      message: error,
-      [error_symbol]: true
-    }
-  }
-}
-
-export function is_error(result: result): result is error {
-  return has(result, error_symbol)
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/result 0.3.ts a/source/lib/legacy/result 0.3.ts
deleted file mode 100644
index a062e8e..0000000
--- b/source/lib/legacy/result 0.3.ts
+++ /dev/null
@@ -1,41 +0,0 @@
-type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
-
-type all = string | number | boolean | bigint | symbol | null | undefined | { [key: PropertyKey]: any };
-type Success<T = all> = T extends object ? (Omit<T, typeof error_symbol> & { [error_symbol]?: never }) : T;
-type Error = { type: any, message: any, [error_symbol]: true } & Partial<FileError>
-type FileError = { code: string, path: string, syscall: string, errno: number }
-
-type err = typeof err
-type is_error = typeof is_error
-declare global {
-  type Result<T = all, E extends Error = Error> = (0 extends 1 & T ? Success : Success<T>) | E;
-
-  var err: err
-  var is_error: is_error
-}
-
-const error_symbol: unique symbol = Symbol("error");
-
-// no `ok(data)` needed, just return `data` directly
-
-export function err(error: Optional<Error, typeof error_symbol> | PropertyKey | Error): Error {
-  if (error instanceof Error) {
-    error.type = error.constructor
-    error.message = error.stack ?? error.message
-    error[error_symbol] = true
-    return error
-  } else if (error && typeof error == 'object' && has(error, 'type')) {
-    return merge(error, { [error_symbol]: true })
-  } else {
-    // flexible
-    return {
-      type: error,
-      message: error,
-      [error_symbol]: true
-    }
-  }
-}
-
-export function is_error(result: Result): result is Error {
-  return has(result, error_symbol)
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/result 0.4.ts a/source/lib/legacy/result 0.4.ts
deleted file mode 100644
index 75d71a8..0000000
--- b/source/lib/legacy/result 0.4.ts
+++ /dev/null
@@ -1,42 +0,0 @@
-type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
-
-// any, normalized
-type all = string | number | boolean | bigint | symbol | null | undefined | { [key: PropertyKey]: any };
-type Ok<T = all> = T extends object ? (Omit<T, typeof error_symbol> & { [error_symbol]?: never }) : T;
-type Err = { type: any, message: any, [error_symbol]: true } & Partial<FileError>
-type FileError = { code: string, path: string, syscall: string, errno: number }
-
-type err = typeof err
-type is_error = typeof is_error
-declare global {
-  type Result<T = all, E extends Err = Err> = (0 extends 1 & T ? Ok : Ok<T>) | E;
-
-  var err: err
-  var is_error: is_error
-}
-
-const error_symbol: unique symbol = Symbol("error");
-
-// no `ok(data)` needed, just return `data` directly
-
-export function err(error: Optional<Err, typeof error_symbol> | PropertyKey | Err): Err {
-  if (error instanceof Error) {
-    error.type = error.constructor
-    error.message = error.stack ?? error.message
-    error[error_symbol] = true
-    return error
-  } else if (error && typeof error == 'object' && has(error, 'type')) {
-    return merge(error, { [error_symbol]: true })
-  } else {
-    // flexible
-    return {
-      type: error,
-      message: error,
-      [error_symbol]: true
-    }
-  }
-}
-
-export function is_error(result: Result): result is Err {
-  return has(result, error_symbol)
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/run 0.0.ts a/source/lib/legacy/run 0.0.ts
deleted file mode 100644
index 2753ffe..0000000
--- b/source/lib/legacy/run 0.0.ts
+++ /dev/null
@@ -1,31 +0,0 @@
-import { exec as callback_exec } from 'node:child_process';
-import { promisify } from 'node:util';
-
-/**
- * execa does not do much. just write it myself.
- *
- * handle does not expect error would have non standard props like code and stderr.
- */
-const exec = handle(promisify(callback_exec));
-
-const non_zero_exit = 'non_zero_exit'
-const non_empty_stderr = 'stderr'
-// const non_empty_stderr = 'non_empty_stderr'
-
-// todo: ?
-export async function run(command: string, options?: any): Promise<Result<string>> {
-  const exec_result = await exec(command, options);
-
-  if (is_error(exec_result)) {
-    return err({ type: non_zero_exit, message: exec_result.message })
-  }
-
-  const { stdout, stderr } = exec_result
-
-  if (stderr) {
-    return err({ type: non_empty_stderr, message: stderr })
-  }
-
-  // todo: ?
-  return stdout as string
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/legacy/test/handle 0.0.ts a/source/lib/legacy/test/handle 0.0.ts
deleted file mode 100644
index c3d63e8..0000000
--- b/source/lib/legacy/test/handle 0.0.ts
+++ /dev/null
@@ -1,25 +0,0 @@
-import { handle, handle_async, handle_sync } from 'lib/handle';
-
-async function foo() {
-  throw 'foo'
-}
-
-function bar() {
-  throw 'bar'
-}
-
-log(handle(bar))
-
-log(handle_sync(bar))
-
-log(await handle(() => foo()))
-
-log(await handle_async(() => fetch()))
-
-// await handle(() => fetch(''))
-// log((await handle(() => fetch(''))).message)
-// log(await handle(async () => await fetch('')))
-
-// bar()
-
-log('reaches the end')
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/notes.md a/source/lib/notes.md
deleted file mode 100644
index e69de29..0000000
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/spec_file.md a/source/lib/spec_file.md
deleted file mode 100644
index f20e8d4..0000000
--- b/source/lib/spec_file.md
+++ /dev/null
@@ -1,91 +0,0 @@
-file.
-
-abstract fs like ruby.
-
-change name: snake case. single word.
-
-change behavior: create path when needed, like vscode. handle common issues like dangerous/invalid characters.
-
-<!-- kv. -->
-
-xdg spec.
-
-folders on all platforms.
-
-...
-
-file lib.
-
-tell it how to handle errors (div zero pattern)
-
-(you might repeat div zero on var/prop name and type. but that's generally acceptable?)
-
-(you dont have to wrap, but it's good to avoid magic consts and export the errors)
-
-> rust builtin error types in std (e.g. file)
-
-...
-
-rm the "files" tab.
-
-- success.
-- fail.
-
-just list all the failures.
-
-name the methods.
-
-you know them.
-
-awa some non standard ones.
-
-- file name too long (trim?)
-- invalid name (convert? how?)
-- no space
-- no ram
-- non existing (auto create the path.)
-
-xdg desktop? (i think so. if we always combine two abstractions, we could simplify it as a pattern.) compatible?
-
-symlink hash?
-
-...
-
-when you store a file
-
-- calc the hash
-- store it somewhere in the data folder
-- symlink
-
-...
-
-precious, [5/2/26 12:03 PM]
-Clear:
-
-Get birth time
-
-Set birth time.
-
-Hacky:
-
-Birth time
-
-Birth time arg 1
-
-precious, [5/2/26 12:55 PM]
-Path. Data. Config. Cache. You will likely have a string, a node path, or something r/writable. Ofc, you can have path directly which is relative or absolute and ~ will be expanded as home.
-
-Write path. Read path. Stream if needed.
-
-Append. Edit. Common things.
-
-Get/Set {metadata} Path.
-
-Copy. Move. Remove.
-
-Non existing path will be created.
-
-You can config like illegal filename/too long path.
-
-Db/hash symlink might be overkill.
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/temp/any exclude type 1.ts a/source/lib/temp/any exclude type 1.ts
deleted file mode 100644
index 033ce36..0000000
--- b/source/lib/temp/any exclude type 1.ts
+++ /dev/null
@@ -1,27 +0,0 @@
-// 1. Declare the symbol as a unique type
-const ErrSymbol: unique symbol = Symbol("parse_error");
-
-// 2. The generic utility type with the 'any' detection hack
-type IsAnyExceptErr<T> = (0 extends 1 & T ? never : T) extends object
-  ? (typeof ErrSymbol extends keyof T ? never : T)
-  : T;
-
-// 3. The generic validation function wrapper
-function validateData<T>(data: IsAnyExceptErr<T>): T {
-  return data as T;
-}
-
-// --- HOW TO USE IT ---
-
-// ✅ THESE COMPILE PROPERLY
-const validString = validateData("Hello World");
-const validObject = validateData({ name: "Bob", age: 25 });
-
-// ❌ THIS WILL FAIL TO COMPILE (Blocks the forbidden object)
-validateData({
-  [ErrSymbol]: true,
-  message: "Failed to parse"
-});
-
-// ❌ THIS WILL FAIL TO COMPILE (Actively blocks the 'any' keyword cheat)
-validateData({} as any);
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/temp/any exclude type 2.ts a/source/lib/temp/any exclude type 2.ts
deleted file mode 100644
index 5821858..0000000
--- b/source/lib/temp/any exclude type 2.ts
+++ /dev/null
@@ -1,20 +0,0 @@
-// 1. Declare the symbol as a unique type
-const ErrSymbol: unique symbol = Symbol("parse_error");
-
-// 2. Build an open object signature that allows any standard dynamic key
-type BroadObject = { [key: string | number | symbol]: any };
-
-// 3. Create the direct type using Omit and a Mapped Type loop
-type AnyExceptErr = string | number | boolean | bigint | symbol | null | undefined | any[] | (Omit<BroadObject, typeof ErrSymbol> & { [K in typeof ErrSymbol]?: never });
-
-// --- HOW TO USE IT ---
-
-// ✅ THESE COMPILE PROPERLY
-const itemA: AnyExceptErr = "Hello World";
-const itemB: AnyExceptErr = { name: "Alice", age: 30 };
-
-// ❌ THIS WILL FAIL TO COMPILE (Blocks the forbidden object)
-const itemC: AnyExceptErr = {
-  [ErrSymbol]: true,
-  message: "Failed to parse"
-};
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/temp/divide option.ts a/source/lib/temp/divide option.ts
deleted file mode 100644
index 6c37fc2..0000000
--- b/source/lib/temp/divide option.ts
+++ /dev/null
@@ -1,5 +0,0 @@
-export function divide(a: number, b: number): option<number> {
-  if (b != 0) {
-    return a / b
-  }
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/temp/divide result.ts a/source/lib/temp/divide result.ts
deleted file mode 100644
index 319a2ce..0000000
--- b/source/lib/temp/divide result.ts
+++ /dev/null
@@ -1,27 +0,0 @@
-export const zero_division = Symbol("zero_division");
-
-export function divide(a: number, b: number): Result<number> {
-  if (b == 0) {
-    throw err({ type: zero_division, message: "attempt to divide by zero" })
-  }
-  return a / b
-}
-
-function test() {
-  let foo = divide(1, Math.floor(Math.random() * 5))
-
-  if (is_error(foo)) {
-    if(foo.type == zero_division){
-      // handle
-      console.log(foo);
-    }
-    return;
-  }
-
-  // process
-  console.log(foo);
-}
-
-test()
-
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/temp/readme.md a/source/lib/temp/readme.md
deleted file mode 100644
index 31a3315..0000000
--- b/source/lib/temp/readme.md
+++ /dev/null
@@ -1,3 +0,0 @@
-temp
-
-proof of concept
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/temp/xdg.ts a/source/lib/temp/xdg.ts
deleted file mode 100644
index c473a0f..0000000
--- b/source/lib/temp/xdg.ts
+++ /dev/null
@@ -1,38 +0,0 @@
-import xdg from '@folder/xdg';
-import fs from 'node:fs';
-import path from 'node:path';
-
-// 1. Initialize XDG paths for your specific app
-// The 'subdir' option automatically handles the subfolder naming for you
-const dirs = xdg({ subdir: 'my-awesome-app' });
-
-console.log('--- Platform Specific Paths ---');
-console.log('Config:', dirs.config);
-console.log('Data:  ', dirs.data);
-console.log('Cache: ', dirs.cache);
-
-/**
- * Proof of Concept: Save a user setting
- */
-function saveConfig(settings) {
-  try {
-    // 2. Ensure the directory exists (recursive: true is key)
-    if (!fs.existsSync(dirs.config)) {
-      fs.mkdirSync(dirs.config, { recursive: true });
-    }
-
-    // 3. Write the file
-    const filePath = path.join(dirs.config, 'config.json');
-    fs.writeFileSync(filePath, JSON.stringify(settings, null, 2));
-
-    console.log(`\nSuccess: Config saved to ${filePath}`);
-  } catch (err) {
-    console.error('Failed to save config:', err);
-  }
-}
-
-// Run the PoC
-saveConfig({
-  theme: 'nord',
-  lastLogin: new Date().toISOString()
-});
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/lib/test/handle.ts a/source/lib/test/handle.ts
index 6d075fe..d2278fe 100644
--- b/source/lib/test/handle.ts
+++ a/source/lib/test/handle.ts
@@ -1,3 +1,6 @@
+// @ts-nocheck
+/* eslint-disable */
+
 import { handle, handle_best_effort } from 'lib/handle';

 function foo() {
(1/1) Apply this hunk to index and worktree [y,n,q,a,d,e,?]? y

diff --git b/source/lib/test/readme.md a/source/lib/test/readme.md
deleted file mode 100644
index 30d74d2..0000000
--- b/source/lib/test/readme.md
+++ /dev/null
@@ -1 +0,0 @@
-test
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? y

diff --git b/source/lib/test/temp.tsx a/source/lib/test/temp.tsx
index ca389e1..e69de29 100644
--- b/source/lib/test/temp.tsx
+++ a/source/lib/test/temp.tsx
@@ -1,25 +0,0 @@
-// @ts-nocheck
-
-// Prettier JSX output
-const Component = () => (
-  <div className="Foo">
-    <h1>Hello World</h1>
-    <p>This is a description paragraph.</p>
-    <ul>
-      {items.map((item) => (
-        <li key={item.id}>{item.name}</li>
-      ))}
-    </ul>
-  </div>
-);
-
-// Prettier Hyperscript output
-const Component = () =>
-  h("div.Foo", [
-    h("h1", "Hello World"),
-    h("p", "This is a description paragraph."),
-    h(
-      "ul",
-      items.map((item) => h("li", { key: item.id }, item.name)),
-    ),
-  ]);
(1/1) Apply this hunk to index and worktree [y,n,q,a,d,e,?]? y

diff --git b/source/web/changes.md a/source/web/changes.md
deleted file mode 100644
index 42d028f..0000000
--- b/source/web/changes.md
+++ /dev/null
@@ -1,11 +0,0 @@
-changes
-
-jun 2026
-
-21
-
-20 20 keyboard: normalize keys, e.g. `?` to `shift+/`.
-
-<!-- `G` to `shift+g` is supported out of the box? -->
-
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/design/notes.md a/source/web/design/notes.md
deleted file mode 100644
index 4400368..0000000
--- b/source/web/design/notes.md
+++ /dev/null
@@ -1,145 +0,0 @@
-notes
-
-jun 2026
-
-23
-
-css might be powerful enough for theming. one page. all themes.
-
-you could ofc create a dedicated app in material you along all of its pages.
-
-jul 2026
-
-05
-
-tailwindcss...
-
-it could save some keystrokes. well, you should not try to save keystrokes.
-
-better to be strategic than tactical. dx > ergonomics
-
-i could alias a word to one or more prop value pairs. and parse the "word" magically, making it asap.
-
-well why not?
-
-```css
-.ProductCard {
-  display: grid;
-  gap: var();
-
-  &[data-status="featured"] {
-    border: var();
-  }
-}
-
-.ProductCard_image {
-  width: 100%;
-  aspect-ratio: 16 / 9;
-}
-
-.ProductCard_content {
-  display: flex;
-  flex-direction: column;
-}
-
-.ProductCard_main_title {
-  font-size: var();
-  font-weight: var();
-}
-
-.ProductCard_sub_title {
-  font-size: var();
-  color: var();
-}
-
-.ProductCard_buy_button {
-  padding: var();
-
-  &[data-variant="primary"] {
-    background: var();
-    color: var();
-  }
-}
-```
-
-```yaml
-ProductCard:
-  - grid
-  - gap-4
-  - display: flex
-  - status featured:
-    - border-4
-ProductCard_image:
-  width: 100%
-  aspect-ratio: 16 / 9
-ProductCard_content:
-  - flex
-  - flex-direction: column
-ProductCard_content: flex flex-column
-ProductCard_content flex flex-column:
-  flex-direction: column
-```
-
-does not seem easy. i could not mix list and obj.
-
-dsl? maybe too much.
-
-the easiest approach is
-
-```yaml
-classname: tailwind classes # eliminate noise
-```
-
-maybe like this
-
-```yaml
-ProductCard_content: flex flex-column # baseline
-ProductCard:
-  .: grid gap-4
-  status featured: border-4
-ProductCard_image:
-  .: full-width
-  aspect-ratio: 16 / 9
-  status featured: border-4 # data-attr: value always contain a space, while css props never do
-```
-
-...
-
-well, dont invent terms yk.
-
-im way more familiar w css props than tailwind. and im not a pro fe dev.
-
-you have auto complete and snippets!
-
-...
-
-one things is... just be explicit.
-
-flex and grid carry unambiguous meaning themselves.
-
-but what if you put display before them. it's clearer, right? and yk they are related.
-
-...
-
-conclusion.
-
-(w the yaml css approach...)
-
-you dont know what are there in yaml.
-
-no auto complete. no ide warnings (spellcheck/correction).
-
-it's extremely hard to set up lsp.
-
-and it's easy to have some snippets.
-
-e.g.
-
-- var to `var(--$0)`
-- `text-sm` to `font-size: var(--text-sm-size);\nline-height: var(--text-sm-height)`
-
-in css, `;` and `:` are also auto completed when you say what prop you want (just the first few letters is enough) and enter. you can shift enter to newline.
-
-btw, the pro of the yaml approach is on best cases you get simplest and dry syntax (w magic and aliases set up previously).
-
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/button/app.css a/source/web/drafts/atom components/legacy/component/button/app.css
deleted file mode 100644
index fb51fc3..0000000
--- b/source/web/drafts/atom components/legacy/component/button/app.css
+++ /dev/null
@@ -1,31 +0,0 @@
-.Button {
-  padding: var(--ref-spacing-3) var(--ref-spacing-5);
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  font-weight: var(--ref-font-weight-medium);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  background: var(--sys-color-bg-secondary);
-  color: var(--sys-color-text-primary);
-  cursor: pointer;
-  transition: background var(--ref-transition-fast), border-color var(--ref-transition-fast);
-}
-
-.Button:hover:not(:disabled) {
-  background: var(--sys-color-bg-hover);
-}
-
-.Button:active:not(:disabled) {
-  background: var(--sys-color-bg-pressed);
-}
-
-.Button:disabled {
-  opacity: var(--ref-opacity-disabled);
-  cursor: not-allowed;
-}
-
-.showcase {
-  display: flex;
-  gap: var(--ref-spacing-4);
-  padding: var(--ref-spacing-6);
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/button/app.tsx a/source/web/drafts/atom components/legacy/component/button/app.tsx
deleted file mode 100644
index d1a1893..0000000
--- b/source/web/drafts/atom components/legacy/component/button/app.tsx
+++ /dev/null
@@ -1,13 +0,0 @@
-import { Button } from "./button"
-
-export function App() {
-  return (
-    <>
-      <h1>Button</h1>
-      <div class="showcase">
-        <Button>default</Button>
-        <Button disabled>disabled</Button>
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/button/button.tsx a/source/web/drafts/atom components/legacy/component/button/button.tsx
deleted file mode 100644
index a0da858..0000000
--- b/source/web/drafts/atom components/legacy/component/button/button.tsx
+++ /dev/null
@@ -1,21 +0,0 @@
-import { ReactNode, MouseEvent } from "react"
-
-type ButtonProps = {
-  children: ReactNode
-  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
-  disabled?: boolean
-  type?: "button" | "submit" | "reset"
-}
-
-export function Button({ children, onClick, disabled, type = "button" }: ButtonProps) {
-  return (
-    <button
-      class="Button"
-      type={type}
-      onClick={onClick}
-      disabled={disabled}
-    >
-      {children}
-    </button>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/button/index.html a/source/web/drafts/atom components/legacy/component/button/index.html
deleted file mode 100644
index 40e5042..0000000
--- b/source/web/drafts/atom components/legacy/component/button/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>button</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/button/index.tsx a/source/web/drafts/atom components/legacy/component/button/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/button/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/checkbox/app.css a/source/web/drafts/atom components/legacy/component/checkbox/app.css
deleted file mode 100644
index 787d9e4..0000000
--- b/source/web/drafts/atom components/legacy/component/checkbox/app.css
+++ /dev/null
@@ -1,68 +0,0 @@
-.Checkbox {
-  display: inline-flex;
-  align-items: center;
-  gap: var(--ref-spacing-2);
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  color: var(--sys-color-text-primary);
-  cursor: pointer;
-  user-select: none;
-}
-
-.Checkbox input {
-  position: absolute;
-  opacity: 0;
-  width: 0;
-  height: 0;
-}
-
-.Checkbox_box {
-  width: 18px;
-  height: 18px;
-  border: 2px solid var(--sys-color-border);
-  border-radius: var(--ref-radius-xs);
-  background: var(--sys-color-bg-primary);
-  display: flex;
-  align-items: center;
-  justify-content: center;
-  transition: background var(--ref-transition-fast), border-color var(--ref-transition-fast);
-}
-
-.Checkbox_check {
-  width: 12px;
-  height: 12px;
-  color: var(--sys-color-bg-primary);
-  opacity: 0;
-  transform: scale(0.5);
-  transition: opacity var(--ref-transition-fast), transform var(--ref-transition-fast);
-}
-
-.Checkbox input:checked + .Checkbox_box {
-  background: var(--sys-color-bg-accent);
-  border-color: var(--sys-color-bg-accent);
-}
-
-.Checkbox input:checked + .Checkbox_box .Checkbox_check {
-  opacity: 1;
-  transform: scale(1);
-}
-
-.Checkbox:hover .Checkbox_box {
-  border-color: var(--sys-color-text-secondary);
-}
-
-.Checkbox[data-disabled="true"] {
-  opacity: var(--ref-opacity-disabled);
-  cursor: not-allowed;
-}
-
-.Checkbox_label {
-  line-height: 1;
-}
-
-.showcase {
-  display: flex;
-  flex-direction: column;
-  gap: var(--ref-spacing-4);
-  padding: var(--ref-spacing-6);
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/checkbox/app.tsx a/source/web/drafts/atom components/legacy/component/checkbox/app.tsx
deleted file mode 100644
index db526f2..0000000
--- b/source/web/drafts/atom components/legacy/component/checkbox/app.tsx
+++ /dev/null
@@ -1,19 +0,0 @@
-import { useState } from "react"
-import { Checkbox } from "./checkbox"
-
-export function App() {
-  const [checked, setChecked] = useState(false)
-
-  return (
-    <>
-      <h1>Checkbox</h1>
-      <div class="showcase">
-        <Checkbox />
-        <Checkbox checked />
-        <Checkbox disabled />
-        <Checkbox checked disabled />
-        <Checkbox label="with label" checked={checked} onChange={setChecked} />
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/checkbox/checkbox.tsx a/source/web/drafts/atom components/legacy/component/checkbox/checkbox.tsx
deleted file mode 100644
index 312d5f9..0000000
--- b/source/web/drafts/atom components/legacy/component/checkbox/checkbox.tsx
+++ /dev/null
@@ -1,31 +0,0 @@
-import { ChangeEvent } from "react"
-
-type CheckboxProps = {
-  checked?: boolean
-  onChange?: (checked: boolean) => void
-  disabled?: boolean
-  label?: string
-}
-
-export function Checkbox({ checked = false, onChange, disabled, label }: CheckboxProps) {
-  function handleChange(e: ChangeEvent<HTMLInputElement>) {
-    onChange?.(e.target.checked)
-  }
-
-  return (
-    <label class="Checkbox" data-disabled={disabled}>
-      <input
-        type="checkbox"
-        checked={checked}
-        onChange={handleChange}
-        disabled={disabled}
-      />
-      <span class="Checkbox_box">
-        <svg class="Checkbox_check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
-          <polyline points="20 6 9 17 4 12" />
-        </svg>
-      </span>
-      {label && <span class="Checkbox_label">{label}</span>}
-    </label>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/checkbox/index.html a/source/web/drafts/atom components/legacy/component/checkbox/index.html
deleted file mode 100644
index d2d2b9c..0000000
--- b/source/web/drafts/atom components/legacy/component/checkbox/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>checkbox</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/checkbox/index.tsx a/source/web/drafts/atom components/legacy/component/checkbox/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/checkbox/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/context_menu/app.css a/source/web/drafts/atom components/legacy/component/context_menu/app.css
deleted file mode 100644
index 591c5e0..0000000
--- b/source/web/drafts/atom components/legacy/component/context_menu/app.css
+++ /dev/null
@@ -1,56 +0,0 @@
-.ContextMenu {
-  position: relative;
-  display: inline-block;
-}
-
-.trigger {
-  padding: var(--ref-spacing-4) var(--ref-spacing-6);
-  background: var(--sys-color-bg-secondary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  cursor: context-menu;
-}
-
-.ContextMenu_menu {
-  position: absolute;
-  min-width: 120px;
-  background: var(--sys-color-bg-primary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  box-shadow: var(--ref-shadow-md);
-  padding: var(--ref-spacing-1);
-  z-index: var(--ref-z-index-dropdown);
-}
-
-.ContextMenu_item {
-  display: block;
-  width: 100%;
-  padding: var(--ref-spacing-2) var(--ref-spacing-3);
-  border: none;
-  background: none;
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  text-align: left;
-  color: var(--sys-color-text-primary);
-  cursor: pointer;
-  border-radius: var(--ref-radius-xs);
-  transition: background var(--ref-transition-fast);
-}
-
-.ContextMenu_item:hover:not(:disabled) {
-  background: var(--sys-color-bg-hover);
-}
-
-.ContextMenu_item:disabled {
-  opacity: var(--ref-opacity-disabled);
-  cursor: not-allowed;
-}
-
-.showcase {
-  display: flex;
-  flex-direction: column;
-  gap: var(--ref-spacing-4);
-  padding: var(--ref-spacing-6);
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/context_menu/app.tsx a/source/web/drafts/atom components/legacy/component/context_menu/app.tsx
deleted file mode 100644
index b267e07..0000000
--- b/source/web/drafts/atom components/legacy/component/context_menu/app.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { ContextMenu } from "./context_menu"
-
-export function App() {
-  const items = [
-    { label: "copy", onClick: () => console.log("copy") },
-    { label: "paste", onClick: () => console.log("paste") },
-    { label: "cut", onClick: () => console.log("cut") },
-    { label: "delete", onClick: () => console.log("delete"), disabled: true },
-  ]
-
-  return (
-    <>
-      <h1>Context Menu</h1>
-      <div class="showcase">
-        <p>right click me</p>
-        <ContextMenu trigger={<div class="trigger">right click here</div>} items={items} />
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/context_menu/context_menu.tsx a/source/web/drafts/atom components/legacy/component/context_menu/context_menu.tsx
deleted file mode 100644
index d9e692d..0000000
--- b/source/web/drafts/atom components/legacy/component/context_menu/context_menu.tsx
+++ /dev/null
@@ -1,66 +0,0 @@
-import { ReactNode, useState, useRef, useEffect } from "react"
-
-type ContextMenuItem = {
-  label: string
-  onClick: () => void
-  disabled?: boolean
-}
-
-type ContextMenuProps = {
-  trigger: ReactNode
-  items: ContextMenuItem[]
-}
-
-export function ContextMenu({ trigger, items }: ContextMenuProps) {
-  const [isOpen, setIsOpen] = useState(false)
-  const [position, setPosition] = useState({ x: 0, y: 0 })
-  const menuRef = useRef<HTMLDivElement>(null)
-
-  function handleContextMenu(e: React.MouseEvent) {
-    e.preventDefault()
-    const rect = e.currentTarget.getBoundingClientRect()
-    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top + 24 })
-    setIsOpen(true)
-  }
-
-  function close() {
-    setIsOpen(false)
-  }
-
-  useEffect(() => {
-    if (!isOpen) return
-
-    function handleClickOutside(e: MouseEvent) {
-      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
-        close()
-      }
-    }
-
-    document.addEventListener("click", handleClickOutside)
-    return () => document.removeEventListener("click", handleClickOutside)
-  }, [isOpen])
-
-  return (
-    <div class="ContextMenu" onContextMenu={handleContextMenu}>
-      {trigger}
-      {isOpen && (
-        <div
-          ref={menuRef}
-          class="ContextMenu_menu"
-          style={{ left: position.x, top: position.y }}
-        >
-          {items.map((item, i) => (
-            <button
-              key={i}
-              class="ContextMenu_item"
-              onClick={() => { item.onClick(); close() }}
-              disabled={item.disabled}
-            >
-              {item.label}
-            </button>
-          ))}
-        </div>
-      )}
-    </div>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/context_menu/index.html a/source/web/drafts/atom components/legacy/component/context_menu/index.html
deleted file mode 100644
index 3ada529..0000000
--- b/source/web/drafts/atom components/legacy/component/context_menu/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>context menu</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/context_menu/index.tsx a/source/web/drafts/atom components/legacy/component/context_menu/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/context_menu/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/input/app.css a/source/web/drafts/atom components/legacy/component/input/app.css
deleted file mode 100644
index e7198b1..0000000
--- b/source/web/drafts/atom components/legacy/component/input/app.css
+++ /dev/null
@@ -1,37 +0,0 @@
-.Input {
-  padding: var(--ref-spacing-2) var(--ref-spacing-3);
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  color: var(--sys-color-text-primary);
-  background: var(--sys-color-bg-primary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  outline: none;
-  transition: border-color var(--ref-transition-fast), box-shadow var(--ref-transition-fast);
-}
-
-.Input::placeholder {
-  color: var(--sys-color-text-tertiary);
-}
-
-.Input:hover:not(:disabled) {
-  border-color: var(--sys-color-text-secondary);
-}
-
-.Input:focus {
-  border-color: var(--sys-color-bg-accent);
-  box-shadow: 0 0 0 var(--ref-focus-ring-width) var(--ref-focus-ring-color);
-}
-
-.Input:disabled {
-  opacity: var(--ref-opacity-disabled);
-  cursor: not-allowed;
-}
-
-.showcase {
-  display: flex;
-  flex-direction: column;
-  gap: var(--ref-spacing-4);
-  padding: var(--ref-spacing-6);
-  max-width: 300px;
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/input/app.tsx a/source/web/drafts/atom components/legacy/component/input/app.tsx
deleted file mode 100644
index 4210519..0000000
--- b/source/web/drafts/atom components/legacy/component/input/app.tsx
+++ /dev/null
@@ -1,18 +0,0 @@
-import { useState } from "react"
-import { Input } from "./input"
-
-export function App() {
-  const [value, setValue] = useState("")
-
-  return (
-    <>
-      <h1>Input</h1>
-      <div class="showcase">
-        <Input placeholder="placeholder" />
-        <Input value={value} onChange={e => setValue(e.target.value)} />
-        <Input disabled placeholder="disabled" />
-        <Input type="password" placeholder="password" />
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/input/index.html a/source/web/drafts/atom components/legacy/component/input/index.html
deleted file mode 100644
index cf63849..0000000
--- b/source/web/drafts/atom components/legacy/component/input/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>input</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/input/index.tsx a/source/web/drafts/atom components/legacy/component/input/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/input/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/input/input.tsx a/source/web/drafts/atom components/legacy/component/input/input.tsx
deleted file mode 100644
index 5c10bfa..0000000
--- b/source/web/drafts/atom components/legacy/component/input/input.tsx
+++ /dev/null
@@ -1,9 +0,0 @@
-import { InputHTMLAttributes } from "react"
-
-type InputProps = InputHTMLAttributes<HTMLInputElement>
-
-export function Input(props: InputProps) {
-  return (
-    <input class="Input" {...props} />
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/number_field/app.css a/source/web/drafts/atom components/legacy/component/number_field/app.css
deleted file mode 100644
index 1e975a5..0000000
--- b/source/web/drafts/atom components/legacy/component/number_field/app.css
+++ /dev/null
@@ -1,37 +0,0 @@
-.NumberField {
-  padding: var(--ref-spacing-2) var(--ref-spacing-3);
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  color: var(--sys-color-text-primary);
-  background: var(--sys-color-bg-primary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  outline: none;
-  transition: border-color var(--ref-transition-fast), box-shadow var(--ref-transition-fast);
-}
-
-.NumberField::placeholder {
-  color: var(--sys-color-text-tertiary);
-}
-
-.NumberField:hover:not(:disabled) {
-  border-color: var(--sys-color-text-secondary);
-}
-
-.NumberField:focus {
-  border-color: var(--sys-color-bg-accent);
-  box-shadow: 0 0 0 var(--ref-focus-ring-width) var(--ref-focus-ring-color);
-}
-
-.NumberField:disabled {
-  opacity: var(--ref-opacity-disabled);
-  cursor: not-allowed;
-}
-
-.showcase {
-  display: flex;
-  flex-direction: column;
-  gap: var(--ref-spacing-4);
-  padding: var(--ref-spacing-6);
-  max-width: 150px;
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/number_field/app.tsx a/source/web/drafts/atom components/legacy/component/number_field/app.tsx
deleted file mode 100644
index 7c6000a..0000000
--- b/source/web/drafts/atom components/legacy/component/number_field/app.tsx
+++ /dev/null
@@ -1,17 +0,0 @@
-import { useState } from "react"
-import { NumberField } from "./number_field"
-
-export function App() {
-  const [value, setValue] = useState(0)
-
-  return (
-    <>
-      <h1>Number Field</h1>
-      <div class="showcase">
-        <NumberField placeholder="0" />
-        <NumberField value={value} onChange={e => setValue(Number(e.target.value))} />
-        <NumberField disabled placeholder="disabled" />
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/number_field/index.html a/source/web/drafts/atom components/legacy/component/number_field/index.html
deleted file mode 100644
index e1bf4a7..0000000
--- b/source/web/drafts/atom components/legacy/component/number_field/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>number field</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/number_field/index.tsx a/source/web/drafts/atom components/legacy/component/number_field/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/number_field/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/number_field/number_field.tsx a/source/web/drafts/atom components/legacy/component/number_field/number_field.tsx
deleted file mode 100644
index 00db9c8..0000000
--- b/source/web/drafts/atom components/legacy/component/number_field/number_field.tsx
+++ /dev/null
@@ -1,9 +0,0 @@
-import { InputHTMLAttributes } from "react"
-
-type NumberFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">
-
-export function NumberField(props: NumberFieldProps) {
-  return (
-    <input class="NumberField" type="number" {...props} />
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/scroll_area/app.css a/source/web/drafts/atom components/legacy/component/scroll_area/app.css
deleted file mode 100644
index 212b058..0000000
--- b/source/web/drafts/atom components/legacy/component/scroll_area/app.css
+++ /dev/null
@@ -1,29 +0,0 @@
-.ScrollArea {
-  overflow: auto;
-  background: var(--sys-color-bg-secondary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-}
-
-.ScrollArea_content {
-  padding: var(--ref-spacing-3);
-}
-
-.item {
-  padding: var(--ref-spacing-2) var(--ref-spacing-3);
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  color: var(--sys-color-text-primary);
-  background: var(--sys-color-bg-primary);
-  border-radius: var(--ref-radius-xs);
-  margin-bottom: var(--ref-spacing-2);
-}
-
-.item:last-child {
-  margin-bottom: 0;
-}
-
-.showcase {
-  padding: var(--ref-spacing-6);
-  max-width: 200px;
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/scroll_area/app.tsx a/source/web/drafts/atom components/legacy/component/scroll_area/app.tsx
deleted file mode 100644
index 68d30bc..0000000
--- b/source/web/drafts/atom components/legacy/component/scroll_area/app.tsx
+++ /dev/null
@@ -1,16 +0,0 @@
-import { ScrollArea } from "./scroll_area"
-
-export function App() {
-  return (
-    <>
-      <h1>Scroll Area</h1>
-      <div class="showcase">
-        <ScrollArea style={{ height: 150 }}>
-          {Array.from({ length: 20 }, (_, i) => (
-            <div key={i} class="item">item {i + 1}</div>
-          ))}
-        </ScrollArea>
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/scroll_area/index.html a/source/web/drafts/atom components/legacy/component/scroll_area/index.html
deleted file mode 100644
index c24a0d2..0000000
--- b/source/web/drafts/atom components/legacy/component/scroll_area/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>scroll area</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/scroll_area/index.tsx a/source/web/drafts/atom components/legacy/component/scroll_area/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/scroll_area/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/scroll_area/scroll_area.tsx a/source/web/drafts/atom components/legacy/component/scroll_area/scroll_area.tsx
deleted file mode 100644
index 29c4c67..0000000
--- b/source/web/drafts/atom components/legacy/component/scroll_area/scroll_area.tsx
+++ /dev/null
@@ -1,15 +0,0 @@
-import { ReactNode, HTMLAttributes } from "react"
-
-type ScrollAreaProps = HTMLAttributes<HTMLDivElement> & {
-  children: ReactNode
-}
-
-export function ScrollArea({ children, ...props }: ScrollAreaProps) {
-  return (
-    <div class="ScrollArea" {...props}>
-      <div class="ScrollArea_content">
-        {children}
-      </div>
-    </div>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/select/app.css a/source/web/drafts/atom components/legacy/component/select/app.css
deleted file mode 100644
index e776ba1..0000000
--- b/source/web/drafts/atom components/legacy/component/select/app.css
+++ /dev/null
@@ -1,87 +0,0 @@
-.Select {
-  position: relative;
-  display: inline-block;
-  min-width: 150px;
-}
-
-.Select_trigger {
-  width: 100%;
-  display: flex;
-  align-items: center;
-  justify-content: space-between;
-  gap: var(--ref-spacing-2);
-  padding: var(--ref-spacing-2) var(--ref-spacing-3);
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  color: var(--sys-color-text-primary);
-  background: var(--sys-color-bg-primary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  cursor: pointer;
-  transition: border-color var(--ref-transition-fast);
-}
-
-.Select_trigger:hover:not(:disabled) {
-  border-color: var(--sys-color-text-secondary);
-}
-
-.Select_trigger:disabled {
-  opacity: var(--ref-opacity-disabled);
-  cursor: not-allowed;
-}
-
-.Select_arrow {
-  width: 16px;
-  height: 16px;
-  flex-shrink: 0;
-  transition: transform var(--ref-transition-fast);
-}
-
-.Select[data-open="true"] .Select_arrow {
-  transform: rotate(180deg);
-}
-
-.Select_menu {
-  position: absolute;
-  top: 100%;
-  left: 0;
-  right: 0;
-  margin-top: var(--ref-spacing-1);
-  background: var(--sys-color-bg-primary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  box-shadow: var(--ref-shadow-md);
-  padding: var(--ref-spacing-1);
-  z-index: var(--ref-z-index-dropdown);
-}
-
-.Select_option {
-  display: block;
-  width: 100%;
-  padding: var(--ref-spacing-2) var(--ref-spacing-3);
-  border: none;
-  background: none;
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  text-align: left;
-  color: var(--sys-color-text-primary);
-  cursor: pointer;
-  border-radius: var(--ref-radius-xs);
-  transition: background var(--ref-transition-fast);
-}
-
-.Select_option:hover {
-  background: var(--sys-color-bg-hover);
-}
-
-.Select_option[data-selected="true"] {
-  background: var(--sys-color-bg-accent);
-  color: var(--sys-color-bg-primary);
-}
-
-.showcase {
-  display: flex;
-  flex-direction: column;
-  gap: var(--ref-spacing-4);
-  padding: var(--ref-spacing-6);
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/select/app.tsx a/source/web/drafts/atom components/legacy/component/select/app.tsx
deleted file mode 100644
index c6d221c..0000000
--- b/source/web/drafts/atom components/legacy/component/select/app.tsx
+++ /dev/null
@@ -1,24 +0,0 @@
-import { useState } from "react"
-import { Select } from "./select"
-
-export function App() {
-  const [value, setValue] = useState("")
-
-  const options = [
-    { value: "apple", label: "apple" },
-    { value: "banana", label: "banana" },
-    { value: "cherry", label: "cherry" },
-    { value: "date", label: "date" },
-  ]
-
-  return (
-    <>
-      <h1>Select</h1>
-      <div class="showcase">
-        <Select options={options} value={value} onChange={setValue} placeholder="choose fruit" />
-        <Select options={options} value="banana" />
-        <Select options={options} disabled placeholder="disabled" />
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/select/index.html a/source/web/drafts/atom components/legacy/component/select/index.html
deleted file mode 100644
index 62943f1..0000000
--- b/source/web/drafts/atom components/legacy/component/select/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>select</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/select/index.tsx a/source/web/drafts/atom components/legacy/component/select/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/select/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/select/select.tsx a/source/web/drafts/atom components/legacy/component/select/select.tsx
deleted file mode 100644
index bdf8bc6..0000000
--- b/source/web/drafts/atom components/legacy/component/select/select.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import { useState, useRef, useEffect } from "react"
-
-type SelectOption = {
-  value: string
-  label: string
-}
-
-type SelectProps = {
-  options: SelectOption[]
-  value?: string
-  onChange?: (value: string) => void
-  placeholder?: string
-  disabled?: boolean
-}
-
-export function Select({ options, value, onChange, placeholder = "select...", disabled }: SelectProps) {
-  const [isOpen, setIsOpen] = useState(false)
-  const selectRef = useRef<HTMLDivElement>(null)
-
-  const selected = options.find(o => o.value === value)
-
-  function handleSelect(option: SelectOption) {
-    onChange?.(option.value)
-    setIsOpen(false)
-  }
-
-  useEffect(() => {
-    if (!isOpen) return
-
-    function handleClickOutside(e: MouseEvent) {
-      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
-        setIsOpen(false)
-      }
-    }
-
-    document.addEventListener("click", handleClickOutside)
-    return () => document.removeEventListener("click", handleClickOutside)
-  }, [isOpen])
-
-  return (
-    <div class="Select" ref={selectRef} data-disabled={disabled} data-open={isOpen}>
-      <button
-        class="Select_trigger"
-        type="button"
-        onClick={() => !disabled && setIsOpen(!isOpen)}
-        disabled={disabled}
-      >
-        <span>{selected?.label || placeholder}</span>
-        <svg class="Select_arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
-          <polyline points="6 9 12 15 18 9" />
-        </svg>
-      </button>
-      {isOpen && (
-        <div class="Select_menu">
-          {options.map(option => (
-            <button
-              key={option.value}
-              class="Select_option"
-              data-selected={option.value === value}
-              onClick={() => handleSelect(option)}
-            >
-              {option.label}
-            </button>
-          ))}
-        </div>
-      )}
-    </div>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/slider/app.css a/source/web/drafts/atom components/legacy/component/slider/app.css
deleted file mode 100644
index d5b29d6..0000000
--- b/source/web/drafts/atom components/legacy/component/slider/app.css
+++ /dev/null
@@ -1,45 +0,0 @@
-.Slider {
-  width: 100%;
-  height: 6px;
-  appearance: none;
-  background: var(--sys-color-bg-tertiary);
-  border-radius: var(--ref-radius-full);
-  outline: none;
-  cursor: pointer;
-}
-
-.Slider::-webkit-slider-thumb {
-  appearance: none;
-  width: 18px;
-  height: 18px;
-  background: var(--sys-color-bg-accent);
-  border-radius: 50%;
-  cursor: pointer;
-  transition: transform var(--ref-transition-fast);
-}
-
-.Slider::-webkit-slider-thumb:hover {
-  transform: scale(1.1);
-}
-
-.Slider::-moz-range-thumb {
-  width: 18px;
-  height: 18px;
-  background: var(--sys-color-bg-accent);
-  border: none;
-  border-radius: 50%;
-  cursor: pointer;
-}
-
-.Slider:disabled {
-  opacity: var(--ref-opacity-disabled);
-  cursor: not-allowed;
-}
-
-.showcase {
-  display: flex;
-  flex-direction: column;
-  gap: var(--ref-spacing-5);
-  padding: var(--ref-spacing-6);
-  max-width: 300px;
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/slider/app.tsx a/source/web/drafts/atom components/legacy/component/slider/app.tsx
deleted file mode 100644
index 32b79a3..0000000
--- b/source/web/drafts/atom components/legacy/component/slider/app.tsx
+++ /dev/null
@@ -1,17 +0,0 @@
-import { useState } from "react"
-import { Slider } from "./slider"
-
-export function App() {
-  const [value, setValue] = useState(50)
-
-  return (
-    <>
-      <h1>Slider</h1>
-      <div class="showcase">
-        <Slider min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} />
-        <Slider min={0} max={100} defaultValue={25} />
-        <Slider min={0} max={100} disabled />
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/slider/index.html a/source/web/drafts/atom components/legacy/component/slider/index.html
deleted file mode 100644
index 8c94547..0000000
--- b/source/web/drafts/atom components/legacy/component/slider/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>slider</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/slider/index.tsx a/source/web/drafts/atom components/legacy/component/slider/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/slider/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/slider/slider.tsx a/source/web/drafts/atom components/legacy/component/slider/slider.tsx
deleted file mode 100644
index 6210bc5..0000000
--- b/source/web/drafts/atom components/legacy/component/slider/slider.tsx
+++ /dev/null
@@ -1,9 +0,0 @@
-import { InputHTMLAttributes } from "react"
-
-type SliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">
-
-export function Slider(props: SliderProps) {
-  return (
-    <input class="Slider" type="range" {...props} />
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/switch/app.css a/source/web/drafts/atom components/legacy/component/switch/app.css
deleted file mode 100644
index 2730951..0000000
--- b/source/web/drafts/atom components/legacy/component/switch/app.css
+++ /dev/null
@@ -1,61 +0,0 @@
-.Switch {
-  display: inline-block;
-  cursor: pointer;
-}
-
-.Switch input {
-  position: absolute;
-  opacity: 0;
-  width: 0;
-  height: 0;
-}
-
-.Switch_track {
-  display: block;
-  width: 44px;
-  height: 24px;
-  background: var(--sys-color-bg-tertiary);
-  border-radius: var(--ref-radius-full);
-  position: relative;
-  transition: background var(--ref-transition-fast);
-}
-
-.Switch_thumb {
-  position: absolute;
-  top: 2px;
-  left: 2px;
-  width: 20px;
-  height: 20px;
-  background: var(--sys-color-bg-primary);
-  border-radius: 50%;
-  box-shadow: var(--ref-shadow-sm);
-  transition: transform var(--ref-transition-fast);
-}
-
-.Switch input:checked + .Switch_track {
-  background: var(--sys-color-bg-accent);
-}
-
-.Switch input:checked + .Switch_track .Switch_thumb {
-  transform: translateX(20px);
-}
-
-.Switch:hover .Switch_track {
-  background: var(--sys-color-bg-hover);
-}
-
-.Switch:hover input:checked + .Switch_track {
-  background: var(--sys-color-bg-accent);
-}
-
-.Switch[data-disabled="true"] {
-  opacity: var(--ref-opacity-disabled);
-  cursor: not-allowed;
-}
-
-.showcase {
-  display: flex;
-  flex-direction: column;
-  gap: var(--ref-spacing-4);
-  padding: var(--ref-spacing-6);
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/switch/app.tsx a/source/web/drafts/atom components/legacy/component/switch/app.tsx
deleted file mode 100644
index a4dd6b4..0000000
--- b/source/web/drafts/atom components/legacy/component/switch/app.tsx
+++ /dev/null
@@ -1,19 +0,0 @@
-import { useState } from "react"
-import { Switch } from "./switch"
-
-export function App() {
-  const [checked, setChecked] = useState(false)
-
-  return (
-    <>
-      <h1>Switch</h1>
-      <div class="showcase">
-        <Switch />
-        <Switch checked />
-        <Switch disabled />
-        <Switch checked disabled />
-        <Switch checked={checked} onChange={setChecked} />
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/switch/index.html a/source/web/drafts/atom components/legacy/component/switch/index.html
deleted file mode 100644
index 915650d..0000000
--- b/source/web/drafts/atom components/legacy/component/switch/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>switch</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/switch/index.tsx a/source/web/drafts/atom components/legacy/component/switch/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/switch/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/switch/switch.tsx a/source/web/drafts/atom components/legacy/component/switch/switch.tsx
deleted file mode 100644
index 6de2fa0..0000000
--- b/source/web/drafts/atom components/legacy/component/switch/switch.tsx
+++ /dev/null
@@ -1,27 +0,0 @@
-import { ChangeEvent } from "react"
-
-type SwitchProps = {
-  checked?: boolean
-  onChange?: (checked: boolean) => void
-  disabled?: boolean
-}
-
-export function Switch({ checked = false, onChange, disabled }: SwitchProps) {
-  function handleChange(e: ChangeEvent<HTMLInputElement>) {
-    onChange?.(e.target.checked)
-  }
-
-  return (
-    <label class="Switch" data-disabled={disabled}>
-      <input
-        type="checkbox"
-        checked={checked}
-        onChange={handleChange}
-        disabled={disabled}
-      />
-      <span class="Switch_track">
-        <span class="Switch_thumb" />
-      </span>
-    </label>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/toggle/app.css a/source/web/drafts/atom components/legacy/component/toggle/app.css
deleted file mode 100644
index 61d27f0..0000000
--- b/source/web/drafts/atom components/legacy/component/toggle/app.css
+++ /dev/null
@@ -1,57 +0,0 @@
-.Toggle {
-  display: inline-flex;
-  align-items: center;
-  gap: var(--ref-spacing-2);
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  color: var(--sys-color-text-primary);
-  cursor: pointer;
-  user-select: none;
-}
-
-.Toggle input {
-  position: absolute;
-  opacity: 0;
-  width: 0;
-  height: 0;
-}
-
-.Toggle_icon {
-  width: 20px;
-  height: 20px;
-  color: var(--sys-color-text-tertiary);
-  transition: color var(--ref-transition-fast);
-}
-
-.Toggle_icon svg {
-  width: 100%;
-  height: 100%;
-}
-
-.Toggle input:checked + .Toggle_icon {
-  color: var(--sys-color-bg-accent);
-}
-
-.Toggle:hover .Toggle_icon {
-  color: var(--sys-color-text-secondary);
-}
-
-.Toggle:hover input:checked + .Toggle_icon {
-  color: var(--sys-color-bg-accent);
-}
-
-.Toggle[data-disabled="true"] {
-  opacity: var(--ref-opacity-disabled);
-  cursor: not-allowed;
-}
-
-.Toggle_label {
-  line-height: 1;
-}
-
-.showcase {
-  display: flex;
-  flex-direction: column;
-  gap: var(--ref-spacing-4);
-  padding: var(--ref-spacing-6);
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/toggle/app.tsx a/source/web/drafts/atom components/legacy/component/toggle/app.tsx
deleted file mode 100644
index 5af35c4..0000000
--- b/source/web/drafts/atom components/legacy/component/toggle/app.tsx
+++ /dev/null
@@ -1,19 +0,0 @@
-import { useState } from "react"
-import { Toggle } from "./toggle"
-
-export function App() {
-  const [checked, setChecked] = useState(false)
-
-  return (
-    <>
-      <h1>Toggle</h1>
-      <div class="showcase">
-        <Toggle />
-        <Toggle checked />
-        <Toggle disabled />
-        <Toggle checked disabled />
-        <Toggle label="with label" checked={checked} onChange={setChecked} />
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/toggle/index.html a/source/web/drafts/atom components/legacy/component/toggle/index.html
deleted file mode 100644
index feab265..0000000
--- b/source/web/drafts/atom components/legacy/component/toggle/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>toggle</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/toggle/index.tsx a/source/web/drafts/atom components/legacy/component/toggle/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/toggle/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/toggle/toggle.tsx a/source/web/drafts/atom components/legacy/component/toggle/toggle.tsx
deleted file mode 100644
index 2248d42..0000000
--- b/source/web/drafts/atom components/legacy/component/toggle/toggle.tsx
+++ /dev/null
@@ -1,38 +0,0 @@
-import { ChangeEvent } from "react"
-
-type ToggleProps = {
-  checked?: boolean
-  onChange?: (checked: boolean) => void
-  disabled?: boolean
-  label?: string
-}
-
-export function Toggle({ checked = false, onChange, disabled, label }: ToggleProps) {
-  function handleChange(e: ChangeEvent<HTMLInputElement>) {
-    onChange?.(e.target.checked)
-  }
-
-  return (
-    <label class="Toggle" data-disabled={disabled}>
-      <input
-        type="checkbox"
-        checked={checked}
-        onChange={handleChange}
-        disabled={disabled}
-      />
-      <span class="Toggle_icon">
-        {checked ? (
-          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
-            <polyline points="20 6 9 17 4 12" />
-          </svg>
-        ) : (
-          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
-            <line x1="18" y1="6" x2="6" y2="18" />
-            <line x1="6" y1="6" x2="18" y2="18" />
-          </svg>
-        )}
-      </span>
-      {label && <span class="Toggle_label">{label}</span>}
-    </label>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/tooltip/app.css a/source/web/drafts/atom components/legacy/component/tooltip/app.css
deleted file mode 100644
index 3b6e577..0000000
--- b/source/web/drafts/atom components/legacy/component/tooltip/app.css
+++ /dev/null
@@ -1,50 +0,0 @@
-.Tooltip {
-  position: relative;
-  display: inline-block;
-}
-
-.trigger {
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  color: var(--sys-color-text-primary);
-  padding: var(--ref-spacing-3) var(--ref-spacing-5);
-  background: var(--sys-color-bg-secondary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  cursor: help;
-}
-
-.button {
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-sm);
-  color: var(--sys-color-text-primary);
-  padding: var(--ref-spacing-3) var(--ref-spacing-5);
-  background: var(--sys-color-bg-secondary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  cursor: help;
-}
-
-.Tooltip_content {
-  position: absolute;
-  bottom: 100%;
-  left: 50%;
-  transform: translateX(-50%);
-  margin-bottom: var(--ref-spacing-2);
-  padding: var(--ref-spacing-2) var(--ref-spacing-3);
-  background: var(--sys-color-bg-primary);
-  border: 1px solid var(--sys-color-border);
-  border-radius: var(--sys-radius-sm);
-  box-shadow: var(--ref-shadow-md);
-  font-family: var(--ref-font-family-sans);
-  font-size: var(--ref-font-size-xs);
-  color: var(--sys-color-text-primary);
-  white-space: nowrap;
-  z-index: var(--ref-z-index-tooltip);
-}
-
-.showcase {
-  display: flex;
-  gap: var(--ref-spacing-6);
-  padding: var(--ref-spacing-6);
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/tooltip/app.tsx a/source/web/drafts/atom components/legacy/component/tooltip/app.tsx
deleted file mode 100644
index 273019e..0000000
--- b/source/web/drafts/atom components/legacy/component/tooltip/app.tsx
+++ /dev/null
@@ -1,17 +0,0 @@
-import { Tooltip } from "./tooltip"
-
-export function App() {
-  return (
-    <>
-      <h1>Tooltip</h1>
-      <div class="showcase">
-        <Tooltip content="this is a tooltip">
-          <span class="trigger">hover me</span>
-        </Tooltip>
-        <Tooltip content="another tooltip here">
-          <button class="button">hover me too</button>
-        </Tooltip>
-      </div>
-    </>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/tooltip/index.html a/source/web/drafts/atom components/legacy/component/tooltip/index.html
deleted file mode 100644
index f7fda3b..0000000
--- b/source/web/drafts/atom components/legacy/component/tooltip/index.html
+++ /dev/null
@@ -1,12 +0,0 @@
-<!DOCTYPE html>
-<html lang="en">
-<head>
-  <meta charset="UTF-8">
-  <meta name="viewport" content="width=device-width, initial-scale=1.0">
-  <title>tooltip</title>
-</head>
-<body>
-  <div id="root"></div>
-  <script type="module" src="./index.tsx"></script>
-</body>
-</html>
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/tooltip/index.tsx a/source/web/drafts/atom components/legacy/component/tooltip/index.tsx
deleted file mode 100644
index eafbe34..0000000
--- b/source/web/drafts/atom components/legacy/component/tooltip/index.tsx
+++ /dev/null
@@ -1,14 +0,0 @@
-import { createRoot } from "react-dom/client"
-import { StrictMode } from 'react';
-
-import { App } from "./app"
-
-import 'the-new-css-reset/css/reset.css';
-import 'web/design/adwaita/adwaita.css';
-import './app.css';
-
-createRoot(document.getElementById("root")!).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-)
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/component/tooltip/tooltip.tsx a/source/web/drafts/atom components/legacy/component/tooltip/tooltip.tsx
deleted file mode 100644
index d56bd26..0000000
--- b/source/web/drafts/atom components/legacy/component/tooltip/tooltip.tsx
+++ /dev/null
@@ -1,21 +0,0 @@
-import { ReactNode, useState } from "react"
-
-type TooltipProps = {
-  children: ReactNode
-  content: ReactNode
-}
-
-export function Tooltip({ children, content }: TooltipProps) {
-  const [isVisible, setIsVisible] = useState(false)
-
-  return (
-    <div
-      class="Tooltip"
-      onMouseEnter={() => setIsVisible(true)}
-      onMouseLeave={() => setIsVisible(false)}
-    >
-      {children}
-      {isVisible && <div class="Tooltip_content">{content}</div>}
-    </div>
-  )
-}
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/legacy/todo.md a/source/web/drafts/atom components/legacy/todo.md
deleted file mode 100644
index f4f3047..0000000
--- b/source/web/drafts/atom components/legacy/todo.md
+++ /dev/null
@@ -1,30 +0,0 @@
-read
-
-- knowledge/web styling
-
-write
-
-- component/[component].tsx
-- component/index.html
-- component/index.tsx
-- component/app.tsx
-
-showcase the components on index.
-
-be simple. no installation. no css. no variants.
-
-no testing.
-
-component list
-
-- button
-- checkbox
-- context menu
-- select
-- input
-- number field
-- scroll area
-- slider
-- switch
-- toggle
-- tooltip
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/notes.md a/source/web/drafts/atom components/notes.md
deleted file mode 100644
index 0f80bd2..0000000
--- b/source/web/drafts/atom components/notes.md
+++ /dev/null
@@ -1,7 +0,0 @@
-i guess i do not need storybook.
-
-the storybook pkg is bloating and even commercial.
-
-and my own one adds nothing but "single component" routing (to replace the sidebar).
-
-
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/atom components/todo.md a/source/web/drafts/atom components/todo.md
deleted file mode 100644
index a0de8ca..0000000
--- b/source/web/drafts/atom components/todo.md
+++ /dev/null
@@ -1,32 +0,0 @@
-read
-
-- source/web/knowledge/name component classname.md
-
-write
-
-- component/[MyComponent].tsx (e.g. `component/Checkbox.tsx`, `component/Checkbox.tsx`)
-- component/index.html
-- component/index.tsx
-- component/app.tsx
-
-you must not write any css or files not listed.
-
-no subfolder in `component/`.
-
-be simple. no variants.
-
-showcase the components on index. no styling.
-
-component list
-
-- button
-- checkbox
-- context menu
-- select
-- input
-- number field
-- scroll area
-- slider
-- switch
-- toggle
-- tooltip
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/drafts/readme.md a/source/web/drafts/readme.md
deleted file mode 100644
index e69de29..0000000
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? y

diff --git b/source/web/knowledge/readme.md a/source/web/knowledge/readme.md
deleted file mode 100644
index e69de29..0000000
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? y

diff --git b/source/web/legacy/keyboard 0.0.ts a/source/web/legacy/keyboard 0.0.ts
deleted file mode 100644
index 3aa71a6..0000000
--- b/source/web/legacy/keyboard 0.0.ts
+++ /dev/null
@@ -1,79 +0,0 @@
-import mousetrap from 'mousetrap';
-
-const shift_keys = {
-  "!": "shift+1",
-  "@": "shift+2",
-  "#": "shift+3",
-  "$": "shift+4",
-  "%": "shift+5",
-  "^": "shift+6",
-  "&": "shift+7",
-  "*": "shift+8",
-  "(": "shift+9",
-  ")": "shift+0",
-  "_": "shift+-",
-  // "+": "shift+=", // could not work, use shift+= instead
-  "~": "shift+`",
-  ":": "shift+;",
-  "\"": "shift+'",
-  "<": "shift+,",
-  ">": "shift+.",
-  "?": "shift+/",
-  "{": "shift+[",
-  "}": "shift+]",
-  "|": "shift+\\"
-}
-
-type action = (event: KeyboardEvent) => void
-
-let shortcutid = 0
-const actions: Map<number, action> = new Map()
-const bindings: Record<number, string> = {}
-const shortcuts: Record<string, Set<number>> = {}
-
-function call(shortcut: string, event: KeyboardEvent) {
-  if (shortcuts[shortcut]) {
-    for (const shortcutid of shortcuts[shortcut]) {
-      const action = actions.get(shortcutid)
-      if (action) {
-        action(event)
-      }
-    }
-  }
-}
-
-function normalize(shortcut: string) {
-  let normalized_shortcut = shortcut
-  for (const [key, shift_key] of Object.entries(shift_keys)) {
-    normalized_shortcut = normalized_shortcut.replaceAll(key, shift_key)
-  }
-  return normalized_shortcut
-}
-
-export function bind(shortcut: string, action: action): number {
-  shortcut = normalize(shortcut)
-
-  actions.set(shortcutid, action)
-  shortcuts[shortcut] = shortcuts[shortcut] || new Set()
-  shortcuts[shortcut].add(shortcutid)
-  bindings[shortcutid] = shortcut
-
-  // it will work whether it overrides or not
-  mousetrap.bind(shortcut, (event) => {
-    call(shortcut, event)
-  })
-
-  return shortcutid++
-}
-
-export function unbind(shortcutid: number) {
-  const shortcut = bindings[shortcutid]
-
-  shortcuts[shortcut].delete(shortcutid)
-  actions.delete(shortcutid)
-
-  if (shortcuts[shortcut].size == 0) {
-    // @ts-expect-error
-    mousetrap.unbind(shortcut)
-  }
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/lib/readme.md a/source/web/lib/readme.md
deleted file mode 100644
index 8ae2587..0000000
--- b/source/web/lib/readme.md
+++ /dev/null
@@ -1 +0,0 @@
-web libraries
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? y

diff --git b/source/web/lib/sync_theme.ts a/source/web/lib/sync_theme.ts
index cf8e2f4..7149f2b 100644
--- b/source/web/lib/sync_theme.ts
+++ a/source/web/lib/sync_theme.ts
@@ -1,17 +1,16 @@
 type theme = "system" | "light" | "dark";

-export async function sync_theme(theme: theme): Promise<void> {
+export function sync_theme(theme: theme) {
   if (theme == "light" || theme == "dark") {
     document.documentElement.setAttribute("data-theme", theme);
-    return;
-  }
+  } else if (theme == 'system') {
+    const query = window.matchMedia("(prefers-color-scheme: dark)");

-  const query = window.matchMedia("(prefers-color-scheme: dark)");
+    function sync_system() {
+      document.documentElement.setAttribute("data-theme", query.matches ? "dark" : "light");
+    }

-  async function sync_system(): Promise<void> {
-    document.documentElement.setAttribute("data-theme", query.matches ? "dark" : "light");
+    sync_system();
+    query.addEventListener("change", sync_system);
   }
-
-  await sync_system();
-  query.addEventListener("change", sync_system);
 }
\ No newline at end of file
(1/1) Apply this hunk to index and worktree [y,n,q,a,d,s,e,?]? y

diff --git b/source/web/notes.md a/source/web/notes.md
deleted file mode 100644
index bcb6d55..0000000
--- b/source/web/notes.md
+++ /dev/null
@@ -1,17 +0,0 @@
-notes
-
-jun 2026
-
-17
-
-22 40 it looks like humility is always the ultimate priority.
-
-as i want it to be self hosted, and i guess everything will be, at least somewhat, hosted on humility.
-
-clis and terminal scripts might function well completely wo humility, but they have to be, like, maintained.
-
-22
-
-16 00 seems i should commit after work instead of backup before work.
-
-anyway, it's in rapid dev and mostly incremental. no need to overthink.
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/port.json a/source/web/port.json
index 60a97c6..f70499f 100644
--- b/source/web/port.json
+++ a/source/web/port.json
@@ -1 +1 @@
-{"port":40283}
\ No newline at end of file
+{"port":42423}
\ No newline at end of file
(1/1) Apply this hunk to index and worktree [y,n,q,a,d,e,?]? n

diff --git b/source/web/script/convert.ts a/source/web/script/convert.ts
index 2f643b4..af27f56 100644
--- b/source/web/script/convert.ts
+++ a/source/web/script/convert.ts
@@ -122,4 +122,4 @@ export async function main(yaml: string) {
   return css
 }

-main()
+await main()
(1/1) Apply this hunk to index and worktree [y,n,q,a,d,e,?]? y

diff --git b/source/web/script/legacy/convert 0.0.ts a/source/web/script/legacy/convert 0.0.ts
deleted file mode 100644
index 69b60ab..0000000
--- b/source/web/script/legacy/convert 0.0.ts
+++ /dev/null
@@ -1,166 +0,0 @@
-import fs from "node:fs/promises";
-import { parse } from "yaml";
-
-type TokenValue = Record<string, unknown>;
-type TokenTree = Record<string, unknown>;
-
-function resolveRef(value: string): string {
-  return value.replace(/\{ref\.([^}]+)\}/g, (_, refPath) => {
-    const normalizedPath = refPath.replace(/\./g, "-");
-    return `var(--ref-${normalizedPath})`;
-  });
-}
-
-function isTokenWithVariants(obj: TokenValue): boolean {
-  return "value" in obj && Object.keys(obj).some((k) => k !== "value");
-}
-
-function flattenRefTokens(
-  obj: unknown,
-  prefix: string,
-  result: Record<string, string>,
-): void {
-  if (obj === null || obj === undefined) return;
-  if (typeof obj !== "object") return;
-  if (Array.isArray(obj)) return;
-
-  for (const [key, value] of Object.entries(obj)) {
-    const newPrefix = prefix ? `${prefix}-${key}` : key;
-
-    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
-      flattenRefTokens(value, newPrefix, result);
-    } else if (typeof value === "string") {
-      result[newPrefix] = value;
-    }
-  }
-}
-
-function flattenSysTokens(
-  obj: unknown,
-  prefix: string,
-  result: Record<string, string | TokenValue>,
-): void {
-  if (obj === null || obj === undefined) return;
-  if (typeof obj !== "object") return;
-  if (Array.isArray(obj)) return;
-
-  for (const [key, value] of Object.entries(obj)) {
-    const newPrefix = prefix ? `${prefix}-${key}` : key;
-
-    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
-      const tokenValue = value as TokenValue;
-      if (isTokenWithVariants(tokenValue)) {
-        result[newPrefix] = tokenValue;
-      } else if ("value" in tokenValue) {
-        result[newPrefix] = tokenValue.value as string;
-      } else {
-        flattenSysTokens(value, newPrefix, result);
-      }
-    } else if (typeof value === "string") {
-      result[newPrefix] = value;
-    }
-  }
-}
-
-function generateRefCss(tokens: Record<string, string>): string {
-  const lines: string[] = [];
-  for (const [key, value] of Object.entries(tokens)) {
-    lines.push(`  --ref-${key}: ${value};`);
-  }
-  return lines.join("\n");
-}
-
-function generateSysCss(tokens: Record<string, string | TokenValue>): string {
-  const lines: string[] = [];
-  for (const [key, value] of Object.entries(tokens)) {
-    if (typeof value === "string") {
-      const resolved = resolveRef(value);
-      lines.push(`  --sys-${key}: ${resolved};`);
-    } else if (typeof value === "object" && value !== null && "value" in value) {
-      const resolved = resolveRef(value.value as string);
-      lines.push(`  --sys-${key}: ${resolved};`);
-    }
-  }
-  return lines.join("\n");
-}
-
-function generateVariantSysCss(
-  tokens: Record<string, string | TokenValue>,
-  variantKey: string,
-): string {
-  const lines: string[] = [];
-  for (const [key, value] of Object.entries(tokens)) {
-    if (typeof value === "object") {
-      const tokenValue = value as TokenValue;
-      const variantValue = tokenValue[variantKey];
-      if (variantValue) {
-        const resolved = resolveRef(variantValue as string);
-        lines.push(`  --sys-${key}: ${resolved};`);
-      }
-    }
-  }
-  return lines.join("\n");
-}
-
-async function main() {
-  const input = await fs.readFile("/dev/stdin", "utf-8");
-  const data = parse(input) as TokenTree;
-
-  const modes = data.modes as Record<string, string[]> | null;
-  const ref = data.ref as TokenTree;
-  const sys = data.sys as TokenTree;
-
-  const refTokens: Record<string, string> = {};
-  flattenRefTokens(ref, "", refTokens);
-
-  const sysTokens: Record<string, string | TokenValue> = {};
-  flattenSysTokens(sys, "", sysTokens);
-
-  const output: string[] = [];
-
-  output.push(`:root {`);
-  output.push(generateRefCss(refTokens));
-  output.push(`}`);
-  output.push("");
-
-  if (!modes) {
-    output.push(`:root {`);
-    output.push(generateSysCss(sysTokens));
-    output.push(`}`);
-    await fs.writeFile("/dev/stdout", output.join("\n"));
-    return;
-  }
-
-  const defaultSelectors: string[] = [":root"];
-  for (const [modeName, variants] of Object.entries(modes)) {
-    if (variants.length > 0) {
-      defaultSelectors.push(`[data-${modeName}="${variants[0]}"]`);
-    }
-  }
-
-  const defaultSys = Object.entries(sysTokens).filter(([, val]) => {
-    return typeof val === "string" || (typeof val === "object" && val !== null && "value" in val);
-  });
-  const defaultSysTokens: Record<string, string | TokenValue> = Object.fromEntries(defaultSys);
-
-  output.push(`${defaultSelectors.join(", ")} {`);
-  output.push(generateSysCss(defaultSysTokens));
-  output.push(`}`);
-  output.push("");
-
-  for (const [modeName, variants] of Object.entries(modes)) {
-    for (let i = 1; i < variants.length; i++) {
-      const variant = variants[i];
-      const variantTokens = generateVariantSysCss(sysTokens, variant);
-      if (!variantTokens) continue;
-      output.push(`[data-${modeName}="${variant}"] {`);
-      output.push(variantTokens);
-      output.push(`}`);
-      output.push("");
-    }
-  }
-
-  await fs.writeFile(1, output.join("\n"));
-}
-
-main();
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/test/convert/current.css a/source/web/test/convert/current.css
deleted file mode 100644
index 7bf7d5d..0000000
--- b/source/web/test/convert/current.css
+++ /dev/null
@@ -1,14 +0,0 @@
-:root {
-  --ref-palette-blue-1: #99c1f1;
-  --ref-palette-red-1: #f66151;
-  --ref-spacing-space-1: 0.25rem;
-}
-
-:root, [data-theme="light"], [data-density="comfortable"] {
-  --sys-color-accent: var(--ref-palette-blue-1);
-  --sys-color-bg-primary: var(--ref-palette-blue-1);
-}
-
-[data-theme="dark"] {
-  --sys-color-accent: var(--ref-palette-red-1);
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/test/convert/expected.css a/source/web/test/convert/expected.css
deleted file mode 100644
index 7bf7d5d..0000000
--- b/source/web/test/convert/expected.css
+++ /dev/null
@@ -1,14 +0,0 @@
-:root {
-  --ref-palette-blue-1: #99c1f1;
-  --ref-palette-red-1: #f66151;
-  --ref-spacing-space-1: 0.25rem;
-}
-
-:root, [data-theme="light"], [data-density="comfortable"] {
-  --sys-color-accent: var(--ref-palette-blue-1);
-  --sys-color-bg-primary: var(--ref-palette-blue-1);
-}
-
-[data-theme="dark"] {
-  --sys-color-accent: var(--ref-palette-red-1);
-}
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/source/web/test/convert/input.yaml a/source/web/test/convert/input.yaml
deleted file mode 100644
index f7680fd..0000000
--- b/source/web/test/convert/input.yaml
+++ /dev/null
@@ -1,22 +0,0 @@
-modes:
-  theme:
-    - light
-    - dark
-  density:
-    - comfortable
-    - compact
-    - cozy
-
-ref:
-  palette:
-    blue-1: "#99c1f1"
-    red-1: "#f66151"
-  spacing:
-    space-1: "0.25rem"
-
-sys:
-  color:
-    accent:
-      value: "{ref.palette.blue-1}"
-      dark: "{ref.palette.red-1}"
-    bg-primary: "{ref.palette.blue-1}"
\ No newline at end of file
(1/1) Apply deletion to index and worktree [y,n,q,a,d,?]? n

diff --git b/todo.md a/todo.md
index a68e41d..4d94406 100644
--- b/todo.md
+++ a/todo.md
@@ -1,9 +1 @@
-humility
-
-readme · todo · notes
-
-<!-- what do you wanna achieve at the end of the day. -->
-
----
-
-(wip)
+todo
\ No newline at end of file
(1/1) Apply this hunk to index and worktree [y,n,q,a,d,e,?]? n

diff --git b/tsconfig.json a/tsconfig.json
index 61bb415..3746af7 100644
--- b/tsconfig.json
+++ a/tsconfig.json
@@ -16,16 +16,17 @@
     "strict": true,
     // "noImplicitAny": false,
     // "strictNullChecks": false,
+
     "skipLibCheck": true,
     "types": ["node"] // not to auto-scan the disk for hidden @types packages
   },
   "include": ["**/*"],
   "exclude": [
     "**/temp",
-    "**/.dist",
-    "**/dist",
-    "**/.build",
     "**/build",
+    "**/.build",
+    "**/dist",
+    "**/.dist",
     "**/legacy",
     "**/node_modules"
   ]
(1/1) Apply this hunk to index and worktree [y,n,q,a,d,s,e,?]? y

 ...Projects/temp/new repo % git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   .hidden
        deleted:    compiling.md
        deleted:    docs/readme.md
        deleted:    docs/use cases.md
        deleted:    drafts/20260617 react counter app/readme.md
        deleted:    drafts/20260618 react app template/readme.md
        modified:   drafts/readme.md
        modified:   eslint.config.js
        renamed:    scripts/br/index.js -> scripts/b/index.js
        new file:   scripts/b/install.sh
        new file:   scripts/b/package.json
        new file:   scripts/b/readme.md
        deleted:    scripts/br/package.json
        deleted:    scripts/br/readme.md
        deleted:    source/backend/repo/readme.md
        deleted:    source/backend/repo/ref/repo.sh
        deleted:    source/backend/repo/repo.ts
        deleted:    source/backend/repo/test/repo.ts
        modified:   source/cli/package.json
        modified:   source/cli/readme.md
        modified:   source/lib/each.ts
        modified:   source/lib/file.ts
        modified:   source/lib/test/handle.ts
        deleted:    source/lib/test/readme.md
        modified:   source/lib/test/temp.tsx
        deleted:    source/web/drafts/readme.md
        deleted:    source/web/knowledge/readme.md
        deleted:    source/web/lib/readme.md
        modified:   source/web/lib/sync_theme.ts
        modified:   source/web/script/convert.ts
        modified:   tsconfig.json

 ...Projects/temp/new repo % git add .
git commit -m "Final custom mix of original and modified files"

[master 09e82b1] Final custom mix of original and modified files
 31 files changed, 117 insertions(+), 164 deletions(-)
 delete mode 100644 compiling.md
 delete mode 100644 docs/readme.md
 delete mode 100644 docs/use cases.md
 delete mode 100644 drafts/20260617 react counter app/readme.md
 delete mode 100644 drafts/20260618 react app template/readme.md
 rename scripts/{br => b}/index.js (100%)
 create mode 100755 scripts/b/install.sh
 create mode 100644 scripts/b/package.json
 create mode 100644 scripts/b/readme.md
 delete mode 100644 scripts/br/package.json
 delete mode 100644 scripts/br/readme.md
 delete mode 100644 source/backend/repo/readme.md
 delete mode 100644 source/backend/repo/ref/repo.sh
 delete mode 100644 source/backend/repo/repo.ts
 delete mode 100644 source/backend/repo/test/repo.ts
 delete mode 100644 source/lib/test/readme.md
 delete mode 100644 source/web/drafts/readme.md
 delete mode 100644 source/web/knowledge/readme.md
 delete mode 100644 source/web/lib/readme.md
```

# how to diff two folders

To diff two folders, you can use built-in terminal commands or graphical interface (GUI) applications depending on your operating system. [link](https://www.reddit.com/r/opensource/comments/1fdf4af/is%5Fthere%5Fany%5Fsoftware%5Fthat%5Fcompares%5Ftwo%5Ffolders/)

### macOS and Linux (Terminal)

The standard Unix `diff` tool is the fastest built-in method for comparing directories. Open your terminal and use one of the following variations: [link](https://superuser.com/questions/356757/how-do-i-compare-the-contents-of-two-folders-on-a-mac)

- **List names of differing files only**:\
  bash

<!---->

```
diff -rq /path/to/folder1 /path/to/folder2
```

Use code with caution.\
_(The `-r` flag makes it recursive, and `-q` limits the output to brief notifications showing only which files differ without printing line-by-line code changes.)_

- **Show detailed file content differences**:\
  bash

<!---->

```
diff -r /path/to/folder1 /path/to/folder2
```

Use code with caution.

- **Ignore whitespace variations**:\
  bash

<!---->

```
diff -rbur /path/to/folder1 /path/to/folder2
```

Use code with caution.\
[link](https://stackoverflow.com/questions/2019857/diff-files-present-in-two-different-directories)

### Windows (Command Prompt & PowerShell)

Windows has built-in utilities to compare folder lists or structures: [link](https://www.reddit.com/r/PowerShell/comments/1lysazr/how%5Fto%5Fcompare%5Ftwo%5Ffolders%5Fand%5Ffind%5Fmissing%5Ffiles/)

- **Command Prompt (`fc` method)**:\
  Generate text listings of both folders and compare them with the File Compare utility:\
  cmd

<!---->

```
dir /b /s "C:\folder1" > %temp%\f1.txt
dir /b /s "C:\folder2" > %temp%\f2.txt
fc %temp%\f1.txt %temp%\f2.txt
```

Use code with caution.

- **PowerShell**:\
  Compare the two directories directly by structure using object referencing:\
  powershell

<!---->

```
Compare-Object -ReferenceObject (Get-ChildItem "C:\folder1" -Recurse) -DifferenceObject (Get-ChildItem "C:\folder2" -Recurse)
```

Use code with caution.\
[link](https://stackoverflow.com/questions/19201955/compare-2-directories-in-windows)

### Best Graphical Tools (All Platforms)

If you prefer a visual side-by-side interface instead of reading terminal text, use dedicated third-party software: [link](https://www.reddit.com/r/opensource/comments/1fdf4af/is%5Fthere%5Fany%5Fsoftware%5Fthat%5Fcompares%5Ftwo%5Ffolders/)

- **[WinMerge](https://winmerge.org/) (Windows)**: A highly customizable, open-source visual comparison tool that flags differences in files, folders, and text line-by-line.
- **Meld (Linux, macOS, Windows)**: A clean, user-friendly open-source GUI that lets you easily view and merge directory structures side by side.
- **Beyond Compare (All platforms)**: A robust commercial alternative ideal for managing large directory trees and tracking content changes seamlessly.
- **VS Code**: If you use Visual Studio Code, you can install the **Diff Folders** extension via the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-diff) to compare directories right within your workspace. [link](https://askubuntu.com/questions/248632/run-diff-command-to-compare-all-files-in-directory)

If you want to isolate specific details, let me know:

- What **operating system** you are using

- Whether you want to check if **file names** match, or if you need to check **inside the files** for text modifications

- If you want to automatically **sync or merge** them after finding the differences [link](https://www.reddit.com/r/opensource/comments/1fdf4af/is%5Fthere%5Fany%5Fsoftware%5Fthat%5Fcompares%5Ftwo%5Ffolders/)

- [link](https://stackoverflow.com/questions/2019857/diff-files-present-in-two-different-directories)\
  Diff files present in two different directories\
  Jan 7, 2010 — You can use the \`diff\` command to compare files in two different directories: \* \*\*\`diff -bur folder1/ folder2/\*\*\*\* This will outpu...\
  Stack Overflow

- [link](https://www.reddit.com/r/opensource/comments/1fdf4af/is%5Fthere%5Fany%5Fsoftware%5Fthat%5Fcompares%5Ftwo%5Ffolders/)\
  Is there any software that compares two folders and shows diference?\
  Sep 10, 2024 — There are many open-source software options for comparing two folders: \* \*\*FreeFileSync\*\* Open-source software that can sync or mi...\
  Reddit

- [link](https://superuser.com/questions/356757/how-do-i-compare-the-contents-of-two-folders-on-a-mac)\
  How do I compare the contents of two folders on a Mac? - Super User\
  Nov 12, 2011 — Just open Utilities » Terminal. app, and use the diff command to compare two folders. ... This way you can see which files are dif...\
  Super User

Show all

## i use ubuntu. i copied a folder and deleted some files and changed some files. i want to diff the changed, but not the deleted.

To filter your diff on Ubuntu so it only shows changed files while ignoring deleted files, you can use the standard `diff` tool combined with `grep`.

### The Solution

Run this command in your terminal:

bash

```
diff -rq /path/to/original_folder /path/to/copied_folder | grep "differ$"
```

Use code with caution.

### How It Works

- `diff -rq`: Compares the directories recursively (`-r`) and briefly (`-q`) reports only which files are different or missing.
- `| grep "differ$"`: Filters the output to only display lines that end with the word "differ".

This successfully hides lines containing phrases like _"Only in /path/to/original\_folder"_, which is how `diff` flags your deleted files.

### Alternative: Show actual content changes

If you want to see the **exact line-by-line text changes** inside those modified files (and still hide the deleted files), use this command:

bash

```
diff -r --no-dereference /path/to/original_folder /path/to/copied_folder | grep -v "^Only in"
```

Use code with caution.

_(The `-v` flag tells grep to invert the match, hiding all lines starting with "Only in".)_

If you are dealing with a large number of modifications, I can help you:

- Export these changes into a **patch file** to apply elsewhere

- Automate this check using a **shell script**

- View these specific changes using a **graphical interface** like Meld

- [link](https://github.com/microsoft/vscode/issues/32226)\
  Git diff shows same line removed and added when we save file without any change · Issue #32226 · microsoft/vscode\
  Aug 10, 2017 — Description Open a file save it without any change. Goto terminal and see run command "git diff" You will see several same line re...\
  \
  \
  GitHub

- [link](https://labex.io/tutorials/linux-how-to-use-diff-command-to-identify-changes-between-versions-of-a-linux-configuration-file-409937)\
  How to use diff command to identify changes between versions of a Linux configuration file\
  Recursive Comparisons When comparing directories, the diff command can recursively compare the contents of subdirectories as well.\
  \
  LabEx

- [link](https://www.pluralsight.com/resources/blog/cloud/introduction-using-diff-and-patch)\
  Introduction: Using Diff and Patch\
  Jun 8, 2023 — Getting the differences between multiple files Note: if the directories you're comparing also include subdirectories, you should a...\
  \
  Pluralsight

Show all

## use modern commands

To use modern, faster, and more user-friendly command-line tools on Ubuntu, you can replace the traditional `diff` and `grep` combo with modern alternatives like **`delta`** or **`fd`**.

### Option 1: Use `delta` (The Modern Diff Viewer)

`git-delta` (commonly called `delta`) is a highly praised modern diff viewer featuring syntax highlighting and clean side-by-side terminal layouts.

1. **Install it**:\
   bash

<!---->

```
sudo apt install git-delta
```

Use code with caution.
2\. **Run the command**:\
bash

```
delta /path/to/original_folder /path/to/copied_folder | grep "Files.*differ"
```

Use code with caution.\
_(Note: You can configure `delta` to automatically hide deletions inside its configuration file, but a quick filter keeps it simple)._

### Option 2: Use `fd` (The Modern `find` Replacement)

Instead of comparing everything and filtering out deletions, you can use `fd` (a fast, modern alternative to `find`) to loop only through the files that **still exist** in your copied folder, checking them against the original.

1. **Install it**:\
   bash

<!---->

```
sudo apt install fd-find
```

Use code with caution.
2\. **Run the command**:\
bash

```
cd /path/to/copied_folder
fd -t f -x sh -c 'cmp -s "$1" "/path/to/original_folder/$1" || echo "Changed: $1"' _ {}
```

Use code with caution.

### How the `fd` command works:

- `fd -t f`: Finds only files (`-t f`) that currently exist in your copied folder (ignoring what you deleted).
- `-x`: Executes a parallel command for each found file.
- `cmp -s`: Silently compares the copied file to the original version.
- `|| echo`: If the files are different, it prints the file name.

Depending on your workflow, I can help you:

- Install and use **`diff-so-fancy`** for better text readability

- Filter these results using **`ripgrep` (rg)**, the fastest modern alternative to `grep`

- Set up a permanent terminal **alias** so you do not have to type this long command again

- [link](https://levelup.gitconnected.com/12-modern-cli-tools-to-boost-your-productivity-in-2026-17a969eb0e00)\
  12 Modern CLI Tools to Boost Your Productivity in 2026\
  Feb 4, 2026 — 4. delta 📐 Delta acts as a high-end pager for git and diff output. It transforms the standard red-and-green terminal diffs into s...\
  \
  \
  Level Up Coding

- [link](https://rockstardeveloperuniversity.com/best-terminal-cli-tools/)\
  Best CLI Tools 2026: Faster Terminal Setup\
  11\. delta Delta is a syntax-highlighting pager for Git diffs. It makes Git diff output readable with side-by-side views, better co...\
  \
  \
  Rockstar Developer University

- [link](https://www.howtogeek.com/the-alternative-cli-tools-i-immediately-install-on-linux/)\
  6 alternative CLI tools I immediately install on Linux\
  Apr 23, 2026 — You can install delta via the official repositories for Debian, Ubuntu, Fedora, Arch Linux, and a few more, under the name git-del...\
  \
  \
  How-To Geek

Show all

## use git. try to merge.

Using `git merge` is the most robust modern way to handle this. It will automatically detect your file changes while keeping your deletions completely separate.

### Step 1: Initialize Git

Open your terminal and navigate inside the **copied folder** (the one with the edits and deletions):

bash

```
cd /path/to/copied_folder
git init
```

Use code with caution.

### Step 2: Stage Your Current State

Stage and commit everything exactly as it looks right now:

bash

```
git add .
git commit -m "Copied folder state with edits and deletions"
```

Use code with caution.

### Step 3: Import the Original Folder

Create a new branch representing the original state, copy the original files into it, and commit them:

bash

```
git checkout -b original-state
rm -rf *
cp -r /path/to/original_folder/. .
git add .
git commit -m "Original folder state"
```

Use code with caution.

### Step 4: Perform the Merge

Switch back to your modified branch and attempt to merge the original state back into it:

bash

```
git checkout main
git merge original-state
```

Use code with caution.

### What Happens Next?

Because you deleted those files intentionally on your `main` branch, Git's merge tracking understands they are gone. It will **not** bring the deleted files back. Instead, it will only flag conflicts on the files you manually changed.

If you hit any road blocks, let me know:

- What **merge conflicts** or terminal errors popped up

- If you need to use **`git mergetool`** to visually solve the edits

- How to **abort the merge** cleanly if you change your mind

- [link](https://endjin.com/blog/using-git-for-net-development-part-4-resolving-merge-conflicts)\
  Using Git for .NET Development: Part 4 - Resolving Merge Conflicts\
  Jun 19, 2014 — In many cases, Git can carry out a merge automatically, leaving your changes in place and adding in the changes from the source br...\
  \
  \
  endjin

- [link](https://visualstudiomagazine.com/articles/2014/04/01/source-code-control-with-git-and-mercurial.aspx)\
  Source Code Control with Git and Mercurial\
  Apr 23, 2014 — That means, when you check in changes, rather than making a new version of your entire code file, software like Git and Mercurial ...\
  \
  \
  Visual Studio Magazine

- [link](https://www.freecodecamp.org/news/learn-how-to-use-git-and-github-a-beginner-friendly-handbook/)\
  Learn How to Use Git and GitHub – A Beginner-Friendly Handbook\
  Dec 12, 2025 — Everything looks clean now, meaning all the changes have been successfully saved in the local repository. From now on, whenever yo...\
  \
  \
  freeCodeCamp

Show all

## what? fast forward? why no conflict

You got a **fast-forward** merge because of the chronological order in which you created the commits.

In Git, a fast-forward happens when the branch you are merging (`original-state`) contains the exact history of your current branch (`main`) plus new changes, allowing Git to simply move the branch pointer forward without combining any code.

### Why there was no conflict

When you ran `rm -rf *` and copied the original files into the `original-state` branch, Git did not see a "parallel history." Instead, to Git, it looked like:

1. You started with the modified/deleted state (`main`).
2. You then modified it further to look like the original folder (`original-state`).

Because `original-state` came strictly **after** `main` in Git's eyes, merging it simply fast-forwarded your branch, undoing your deletions and edits.

### How to fix it (Force a real merge)

To get the behavior you actually wanted—where Git treats the original folder as the past, and your copied folder as the present—you need to undo the fast-forward and rewrite the history correctly.

**1. Undo the accidental fast-forward**

bash

```
git reset --hard HEAD@{1}
```

Use code with caution.

**2. Delete the incorrect branch**

bash

```
git branch -D original-state
```

Use code with caution.

**3. Use an "Orphan" branch for the true original**\
An orphan branch has no shared history, forcing Git to actually calculate the differences between the two folders during a merge:

bash

```
# 1. Create a completely disconnected branch for the original files
git checkout --orphan original-branch
git rm -rf .
cp -r /path/to/original_folder/. .
git add .
git commit -m "True original state"

# 2. Switch back to your modified folder
git checkout main

# 3. Force a real merge allowing unrelated histories
git merge original-branch --allow-unrelated-histories
```

Use code with caution.

Now, Git will compare the two states side-by-side. It will respect your deletions, and it will flag conflicts only on the files you modified.

If you run into issues, let me know:

- What **output message** Git gives you after this new merge

- If you need to **abort** this new merge attempt

- How to use **`git status`** to see your modified files

- [link](https://www.30secondsofcode.org/git/s/fast-forward-merge/)\
  How does Git's fast-forward mode work?\
  Jul 15, 2021 — As stated above, Git's default is to use fast-forward merge. It will take the commits from the branch being merged and place them ...\
  \
  \
  30 seconds of code

- [link](https://dev.to/ruqaiya%5Fbeguwala/git-merge-no-ff-force-a-merge-commit-avoid-fast-forward-1b3k)\
  Day 8/30 - Git Merge --no-ff – Force a merge commit (avoid fast-forward)\
  May 28, 2025 — 1. Fast-forward merge: When possible (if the target branch hasn't diverged), Git simply moves the branch pointer forward.\
  \
  \
  DEV Community

- [link](https://labex.io/tutorials/git-how-to-disable-fast-forward-merging-in-git-417327)\
  How to disable fast forward merging in Git\
  Understanding Git Fast Forward Merging Git's fast-forward merge is a type of merge that occurs when you merge a branch that has a ...\
  \
  LabEx

Show all

## what's my file state now

Because you ran a fast-forward merge earlier, your current folder looks exactly like the **original folder**. Your edits are hidden in Git's history, and your deleted files have been brought back.

### Check Your Current Status

To see exactly what Git is tracking right now, run:

bash

```
git status
```

Use code with caution.

It will likely say `nothing to commit, working tree clean` because Git thinks the fast-forward update is the finalized, correct state.

### How to See Your Edits and Deletions

Your modifications are not permanently lost; they are just saved in your very first commit. To see the diff of the changes you actually wanted to isolate, run this command:

bash

```
git diff HEAD~1 HEAD
```

Use code with caution.

### What This Command Shows

- **Deleted files**: These will show up with green text lines (marked with `+`) because `HEAD` (the current original state) has the files, while `HEAD~1` (your modified state) did not.
- **Changed files**: This will show the exact, line-by-line code differences between your modified version and the original version.

If you want to move forward, tell me:

- Do you want to **undo the fast-forward** and try the orphan branch method?
- Do you just want to **extract the text diff** of the changed files right now?
- Do you want to **reset the folder** completely back to your modified state?

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://www.atlassian.com/git/tutorials/inspecting-a-repository)\
  Git Status: Inspecting a repository\
  The git add action will be reflected in the second git status , and the final status output will tell you that there is nothing to...\
  \
  \
  Atlassian
- [link](https://labex.io/tutorials/git-how-to-check-if-a-file-is-tracked-by-git-560032)\
  How to Check If a File Is Tracked by Git\
  "nothing to commit, working tree clean": This is the key part. It means that there are no changes in our working directory that ne...\
  \
  LabEx

## expected: let me review the changes one by one, whether it's deleted or changed whatever, let me decide. i do not resolve by editing, for each, i either choose the changed or the original.

To achieve exactly what you want—reviewing every single change one by one and choosing either the modified version or the original version without editing lines—you need an **interactive checkout tool**.

Since your current folder state matches the original folder, your modifications are safely stored in your previous commit (`HEAD~1`). You can use Git's patch tool to step through them.

### Step 1: Start the Interactive Review

Run this command to step through every single deletion and file change one by one:

bash

```
git checkout -p HEAD~1
```

Use code with caution.

### Step 2: How to Choose

Git will display each change (called a "hunk") in your terminal and prompt you at the bottom with `Apply this hunk to index and worktree [y,n,q,a,d,?]`.

- **To choose your MODIFIED/DELETED version**: Type **`y`** (yes). This pulls your edit or deletion back into the folder.
- **To choose the ORIGINAL version**: Type **`n`** (no). This leaves the file exactly as it is in the original folder.
- **To stop and quit the review**: Type **`q`** (quit).

### Step 3: Save Your Choices

Once you finish stepping through the files, your folder will contain the exact mix of original and modified files you selected.

To see what you chose:

bash

```
git status
```

Use code with caution.

To lock in your choices and save this state:

bash

```
git commit -am "My chosen mix of original and modified files"
```

Use code with caution.

If you prefer a graphical interface for this, let me know:

- If you want to use **`git gui`** or **VS Code** to just click a button for each file.

- If a file change is **too large** and you need to split a single file's changes into smaller pieces using the `s` option during the review.

- [link](https://coreui.io/answers/how-to-reset-a-commit-in-git/)\
  How to reset a commit in Git · CoreUI\
  Oct 29, 2025 — The HEAD~1 syntax refers to the commit before the current HEAD. Choose the mode based on whether you want to preserve the changes ...\
  \
  CoreUI

- [link](https://medium.com/around-the-app-in-365-days/a-primer-on-git-a4efe705cb5f)\
  A Primer on Git. It is easy to shoot your foot off with… | by Antoine Jaussoin | Around the App in 365 days\
  Feb 23, 2018 — Once it's committed, your changes are safe. You can go back in time to any commit, you can make other changes, make mistakes, and ...\
  \
  \
  Medium

- [link](https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/version-control/git/commands/revert.html)\
  revert | Dev Cheatsheets\
  You can then check that your current state after your revert commit now matches the state before the earliest commit you were reve...\
  \
  GitHub

Show all

## how many files are there to be resolved. ive already done these actions, idk if i could continue cd /path/to/copied\_folder

git init\
git add .\
git commit -m "Copied folder state with edits and deletions"\
git checkout -b original-state\
rm -rf \*\
cp -r /path/to/original\_folder/. .\
git add .\
git commit -m "Original folder state"\
git checkout main\
git merge original-state\
(fast forward)

Right now, there are **0 files waiting to be resolved** in Git because the fast-forward merge instantly finished without creating a merge state.

However, you can still find out exactly how many files differ between your modified state and the original state by counting the differences in your commit history.

### How to count the files you need to review

Run this command in your terminal to see the exact number of changed and deleted files:

bash

```
git diff --name-only HEAD~1 HEAD | wc -l
```

Use code with caution.

### What this tells you

- **If it returns a number (e.g., 12)**: That is the exact number of files you will step through if you choose to review them.
- **To see the actual list of names**: Remove the `| wc -l` part and just run `git diff --name-only HEAD~1 HEAD`.

### Can you continue?

**Yes, you can absolutely continue.** You do not need to restart. Because Git already saved your modifications in the previous commit (`HEAD~1`), you can jump straight into your file-by-file review right now by running:

bash

```
git checkout -p HEAD~1
```

Use code with caution.

Would you like to **see the list of file names** first before you start deciding on them, or do you want to **reset your folder back** to the modified state before doing anything else?

- [link](https://medium.com/@cbatsoula/using-git-clone-status-add-checkout-push-afe43122d0d2)\
  Using Git — clone, status, add, checkout, push | by Catherine Batsoula\
  Jan 18, 2020 — A way to check on how many files you've changed or created or deleted is to use “git status” on the terminal line.\
  \
  \
  Medium

## yeah, seems i could continue, as it looks exactly as the original folder now. but when fast forward, it actually showed many plus and minus, what happened? is it a dry run?

No, it was not a dry run. The merge **actually happened**, and your files were modified.

The plus and minus lines you saw in the terminal were the **fast-forward summary statistics**. They were showing you the net difference between your first commit (your modified folder) and your second commit (the original folder).

### What those plus and minus lines meant:

Because you deleted and changed files in your copied folder, Git had to perform actions to make it match the original folder state:

- **Plus signs (`+`)**: Files or lines that Git **added** back into your folder (restoring the files you had deleted).
- **Minus signs (`-`)**: Lines of text that Git **removed** (undoing the edits you made).

### Why it feels like a dry run

It feels like a dry run because the process was completely clean—there were no errors, no conflicts to resolve, and Git automatically moved your folder straight to the target state.

Because Git treats history as a straight timeline moving forward, it assumed that moving from your modified version _to_ the original version was the intended upgrade.

### Verify your folder is completely changed

If you open your folder right now in your file manager, you will see that all your deleted files are back, and your edits are gone. They are completely identical to the original folder.

You can safely proceed with the `git checkout -p HEAD~1` command to start pulling your changes back in one by one.

Before you start, would you like to see a **summary list** of which specific files were modified versus which ones were restored by that fast-forward?

- [link](https://www.handyrecovery.com/recover-lost-microsoft-project-file/)\
  How to Recover Lost Microsoft Project File (Solved)\
  May 16, 2024 — Head to the folder that contained the deleted Microsoft Project files in it. You will see all the files previously contained in th...\
  \
  \
  Handy Recovery Advisor

## oh. i see. i commited the changed state first. then a merged the original. now it's exactly the original. but why no conflict. when does git conflict, when not.

Git did not conflict because your two commits happened **one after the other on a straight timeline**, rather than at the same time on parallel branches.

Git only creates a conflict when it encounters **divergent history**—meaning two different changes happened to the same line of code or file _simultaneously_ on separate branches, and Git doesn't know which one to pick.

Here is the exact breakdown of why your setup bypassed conflicts, and when Git will actually trigger one.

***

### Why Your Setup Had Zero Conflicts

To understand Git, you have to look at the timeline of commits you created:

text

```
[Commit 1: main]              [Commit 2: original-state]
Modified/Deleted Folder  --->  Original Folder Restored
```

Use code with caution.

1. **Commit 1 (`main`)**: You saved your edited/deleted state.
2. **Commit 2 (`original-state`)**: You deleted everything, copied the original folder back in, and committed it. Because you branched off `main` to do this, Git sees Commit 2 as a **direct descendant** (the future) of Commit 1.
3. **The Merge**: When you switched back to `main` and merged `original-state`, Git looked at the timeline and said: _"Ah, `original-state` is just the future version of `main`. There are no competing changes. I will just fast-forward the pointer to the newest commit."_

To Git, it looked like you intentionally chose to undo your edits and bring back the deleted files in Commit 2.

***

### When Git Conflicts vs. When It Does Not

| Scenario                     | Does it Conflict? | Why?                                                                                                                                         |
| ---------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fast-Forward** (Your case) | **No** ❌         | One branch is a direct ancestor of the other. Git just slides the pointer forward.                                                           |
| **Clean Merge**              | **No** ❌         | Two branches diverged, but they changed completely different files or different lines of code. Git merges them automatically.                |
| **The Same Line Edited**     | **YES** ⚠️        | Branch A changes Line 10 to "X". Branch B changes Line 10 to "Y". Git stops and asks you to choose.                                          |
| **Modified vs. Deleted**     | **YES** ⚠️        | Branch A edits a file. Branch B deletes that exact same file. Git stops because it doesn't know whether to keep the edit or delete the file. |

***

### How You _Should_ Have Done It to Get Conflicts

If you had wanted Git to treat the original folder as the "base" and surface your edits and deletions as competing changes, the history needed to look like a fork in the road:

text

```
                  ---> [Branch A: Original Folder]
                 /
[Common Base] --
                 \
                  ---> [Branch B: Your Modified Folder]
```

Use code with caution.

When you merge two parallel branches like this, Git looks at the common base, sees that Branch A kept a file while Branch B deleted it, and triggers a **Merge Conflict**.

Since you are already in the fast-forward state, are you ready to use the `git checkout -p HEAD~1` command to start manually picking your changes, or would you like to **completely reset** the history to see what a real conflict looks like?

- [link](https://www.reddit.com/r/git/comments/1igp2b7/dealing%5Fwith%5Fhotfix%5Fconflicts%5Fwhen%5Fmerging/)\
  Dealing with hotfix conflicts when merging staging back to main - Git branching strategy issue : r/git\
  Feb 3, 2025 — Local git shows no obvious conflicts (just some formatting differences)\
  \
  Reddit
- [link](https://faculty.washington.edu/otoomet/info201-book/git-basics.html)\
  C Git and GitHub | Technical Foundations of Informatics\
  So far, you've been using git to create a linear sequence of commits: they are all in a line, one after another).\
  \
  \
  UW Faculty Web Server
- [link](https://www.reddit.com/r/git/comments/3qt5n8/xkcd%5Fgit/)\
  xkcd: Git : r/git\
  Oct 30, 2015 — The git model, with all its branching, is just another time sink that wasn't there with a linear history. Now before you start eat...\
  \
  \
  Reddit

Show all

## will it never conflict if you never change main branch and only merge everything into main

**No**, it will still conflict even if you never touch the `main` branch directly.

Conflicts happen based on **what lines of code changed since the branches split**, not based on where you type your commands.

Here is exactly how you can get a conflict without ever touching `main`.

***

### The Scenario: Changing Only Side Branches

Imagine you have a `main` branch. You create two separate feature branches from it, `branch-A` and `branch-B`. You never make a single commit directly on `main`.

text

```
                  ---> [Commit on branch-A]: Edits line 10 to "X"
                 /
[Base on main] --
                 \
                  ---> [Commit on branch-B]: Edits line 10 to "Y"
```

Use code with caution.

Here is what happens when you merge them into `main` one after the other:

### Merge 1: `branch-A` into `main`

- **Result**: **No conflict (Fast-Forward).**
- **Why**: `main` hasn't changed since `branch-A` split off. Git just slides the `main` pointer forward. `main` now contains edit "X".

### Merge 2: `branch-B` into `main`

- **Result**: **MERGE CONFLICT!** ⚠️
- **Why**: Even though _you_ didn't type code on `main`, `main` now contains the changes from `branch-A`. Git compares `branch-B` (Edit "Y") with the updated `main` (Edit "X"). Because both branches tried to edit line 10 differently since they split, Git stops and demands a resolution.

***

### Summary Rule

- **First Merge** into an untouched branch is always clean (usually a fast-forward).
- **Subsequent Merges** from other branches will conflict if they touch the same files/lines that the first branch already updated.

If you are ready to start picking your files from your current setup, let me know if you want the command to **start the interactive review**, or if you want to **force a conflict** just to see how it behaves!

- [link](https://tech.groww.in/git-and-its-tricks-via-scenarios-part-1-b268821c78dd)\
  Git and its Tricks via Scenarios Part 1 | by Siddhant Gandhi\
  Jul 6, 2021 — This is not appreciated until and unless you're the sole contributor to the repository, since you may not have access to the main ...\
  \
  \
  Groww
- [link](https://dev.to/mohsenkamrani/git-merge-learn-by-example-1lbf)\
  Git merge - learn by example\
  Dec 18, 2022 — One tricky situation that can arise when merging branches is a conflict. This occurs when the same lines of code have been modifie...\
  \
  \
  DEV Community
- [link](https://wiki.qt.io/Branch%5FGuidelines)\
  Branch Guidelines\
  Mar 22, 2024 — Combining multiple branches A common situation is that you have two separate feature branches and you would like to try out how bo...\
  \
  \
  Qt

Show all

## if it simply merges, will it be exactly the new branch

<mark><strong><span>Yes, but only for the very first branch you merge.</span></strong></mark>

When `main` is completely untouched, merging the first new branch results in a **fast-forward** merge. Because there are no competing changes on `main`, Git simply moves the pointer forward. At that exact moment, `main` becomes an identical copy of that new branch.

However, this is **not true** for any branches you merge after that.

### Why subsequent merges are not identical

When you merge a _second_ branch into `main`, it will no longer be an exact copy of that new branch. Instead, Git will attempt to **combine** them:

1. **New files** from the second branch will be added.
2. **Modified files** from the second branch will be updated (or cause a conflict).
3. **Unchanged files** in the second branch will keep the data brought in by the _first_ branch.

The final state of `main` will be a hybrid mix of your base code, branch one, and branch two.

***

### What to do next with your folder

Since you are currently in that "exact copy" state (your `main` is currently identical to the original folder), you can now execute your one-by-one file review.

Run this command to start picking your deleted and modified files:

bash

```
git checkout -p HEAD~1
```

Use code with caution.

Let me know if you want to **start this interactive review now**, or if you want to **abort and clear out this Git repository** completely to try a different approach.

- [link](https://www.reddit.com/r/git/comments/g3uss9/possible%5Fto%5Frebase%5Fonto%5Fmaster%5Fwithout%5Fforce/)\
  Possible to rebase onto master without force pushing? : r/git\
  Apr 19, 2020 — Make sure only one branch gets merged to master at a time. Whoever pull requests first gets there first gets first dibs. The secon...\
  \
  Reddit
- [link](https://echobind.com/post/stacked-pull-requests-with-squash-merge)\
  Stacked pull requests with squash merge\
  Oct 5, 2023 — Don't merge the second PR until the first PR is merged. If you do, it will merge into the first PR's branch (not main ). Basically...\
  \
  Echobind
- [link](https://codeburst.io/git-from-zero-to-hero-a-level-higher-ab5643b52bb)\
  Git from ZERO to HERO — Leveling Up | by Hari Sapna Nair\
  Aug 7, 2020 — The new branch will be an exact copy of the master branch. We can continue the work in this branch and if we are able to implement...\
  \
  \
  codeburst

Show all

## is it always true for the first merge

**Yes, it is always true**, provided your `main` branch has absolutely zero new commits since the side branch was created.

In Git terminology, this is a guaranteed **fast-forward** merge. Because `main` has not moved, there is no history to combine. Git simply points `main` to the exact same commit as the new branch, making them identical.

### The Only Two Exceptions

The first merge will _not_ result in an exact copy only if you explicitly break the rules of a normal merge:

1. **You forced a non-fast-forward**: If you ran `git merge --no-ff`, Git forces a new merge commit. The files will still look identical to the new branch, but the commit history will look different.
2. **Someone else updated main**: If you are working with a remote team and someone pushed a commit to `main` while you were working, `main` is no longer untouched. You will get a true merge (and potentially conflicts).

### Ready to review your files?

Since your first merge fast-forwarded successfully, your directory is currently sitting at that exact "original folder" state.

You can now start your piece-by-piece review to bring your modifications back. Run:

bash

```
git checkout -p HEAD~1
```

Use code with caution.

Let me know if you want to **start this interactive patch review** now, or if you want to **reset everything** to look at your changes as a single list first.

- [link](https://medium.com/learn-software-engineering-with-topgyal/fast-forward-vs-recursive-merge-bd250819b105)\
  Fast-Forward vs Recursive Merge. Fast Forward Merge in Git | by Topgyal Gurung | Learn Software Engineering with Topgyal\
  Jun 22, 2024 — It happens when the branch you want to merge into (e.g., main ) has no new commits since the branch you're merging (e.g., feature-\
  \
  \
  Medium
- [link](https://www.boot.dev/blog/devops/git-merge)\
  Git Merge: Combine Branches and Understand Fast-Forwards\
  Mar 31, 2026 — What Is a Fast-Forward Merge? No merge commit is created. Git does this automatically when it can. This is a common workflow when ...\
  \
  \
  Boot.dev
- [link](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)\
  Basic Branching and Merging\
  To phrase that another way, when you try to merge one commit with a commit that can be reached by following the first commit's his...\
  \
  \
  Git

Show all

## i have 188 files. how long will it take to review.

Reviewing 188 files one-by-one in the terminal using `git checkout -p` will take anywhere from **30 minutes to over 3 hours**, depending on how closely you need to look at each change.

Here is the breakdown of how that time scales:

- **Fast Choice (31 minutes):** If you spend about 10 seconds per file just glancing at the name or a tiny diff chunk before pressing `y` or `n`.
- **Medium Choice (1.5 hours):** If you spend 30 seconds per file reading short diff snippets to remember what you edited.
- **Slow Choice (3 hours+):** If you spend a minute or more per file analyzing larger blocks of text line-by-line before making a decision.

### 💡 A Faster Strategy: Group the Deleted Files First

Since you explicitly mentioned earlier that you **do not want to review deleted files** (you only want to decide on the _changed_ files), you can completely bypass reviewing the deletions one-by-one.

Instead of doing all 188 interactively, you can instantly restore your edits using a **bulk strategy**:

1. **Instantly bring back ALL your modified and deleted files** to your workspace:\
   bash

<!---->

```
git reset --hard HEAD~1
```

Use code with caution.
2\. **Instantly restore ONLY the deleted files** back to their original state in a single command, leaving only your edited files to deal with:\
bash

```
git checkout original-state -- $(git status | grep 'deleted:' | awk '{print $2}')
```

Use code with caution.

This will dramatically shrink your 188-file list down to **only the files you actually edited**, saving you hours of tapping `y` or `n` in the terminal.

Would you like to check **how many of those 188 files are just deletions** so we can see how much time this shortcut saves you?

python

```
# Let's calculate estimated times based on average human speeds for reviewing files.
# Assumed speeds:
# Fast review (binary choice, look at name/diff briefly): ~10 seconds per file
# Medium review (reading short diffs): ~30 seconds per file
# Slow review (careful line-by-line consideration): ~60 seconds per file

total_files = 188

fast_seconds = total_files * 10
medium_seconds = total_files * 30
slow_seconds = total_files * 60

print(f"Fast: {fast_seconds / 60:.1f} mins")
print(f"Medium: {medium_seconds / 60:.1f} mins")
print(f"Slow: {slow_seconds / 60:.1f} mins")
```

Use code with caution.

## i may be faster than ten secs, give me a map

If you can review each file in about **2 to 5 seconds** just by glancing at the filename or the first lines of code, you can finish all 188 files in **6 to 15 minutes**.

Here is your keyboard map for running `git checkout -p HEAD~1`. Print this out or keep it visible on your screen to help you fly through the list without stopping:

### 🎮 The Review Keyboard Map

| Key     | Action                         | When to use it                                                              |
| ------- | ------------------------------ | --------------------------------------------------------------------------- |
| **`y`** | **Accept My Change** (Present) | Use this to keep your edit or keep your deletion.                           |
| **`n`** | **Keep the Original** (Past)   | Use this to revert the file back to the original folder state.              |
| **`d`** | **Skip the rest of this file** | If a file has 10 different edits and you want to skip all of them at once.  |
| **`s`** | **Split into smaller chunks**  | If Git lumps an edit and a deletion together and you want to separate them. |
| **`q`** | **Quit and Save Progress**     | Use this to take a break. Everything you chose up to that point is saved.   |
| **`?`** | **Help Menu**                  | If you forget what a letter does during the review.                         |

### 🚀 Pro-Tip for Maximum Speed

Keep your fingers resting on the **`y`** and **`n`** keys. Git will automatically print the filename at the top of every chunk. Look at the filename, tap `y` or `n`, and Git will instantly jump to the next one.

When you are ready to start the clock, run:

bash

```
git checkout -p HEAD~1
```

Use code with caution.

If your fingers get tired halfway through, remember you can press **`q`** to safely quit, check your progress with `git status`, and resume whenever you want. Let me know how it goes!

## map review speed to time

Here is the exact time breakdown for reviewing 188 files based on your seconds-per-file pace:

### ⏱️ Speed to Time Matrix

| Review Speed per File | Total Time for 188 Files | Review Style                                           |
| --------------------- | ------------------------ | ------------------------------------------------------ |
| **1 second**          | **3.1 minutes**          | Pure muscle memory (glancing at the filename only)     |
| **2 seconds**         | **6.3 minutes**          | Rapid reflex (checking red vs. green lines quickly)    |
| **3 seconds**         | **9.4 minutes**          | Steady pace (reading the filename + 1 line of context) |
| **4 seconds**         | **12.5 minutes**         | Comfortable flow (briefly pausing on larger files)     |
| **5 seconds**         | **15.7 minutes**         | Standard fast pace (ensuring no accidental clicks)     |

### 🛠️ How to maintain a 1–2 second pace

- **Ignore the code**: Do not read the text inside the file. Just look at the filename Git prints at the very top of the chunk.
- **Keep it simple**: If you recognize the filename as one you want to keep, tap `y`. If it is a file you want to revert to original, tap `n`.
- **Use `d` for large files**: If a single file has multiple changes, Git might prompt you several times for it. Tap **`d`** to instantly apply your choice to the _entire_ file and skip to the next filename.

Whenever you are ready to start your sprint, kick it off with:

bash

```
git checkout -p HEAD~1
```

Use code with caution.

Let me know if you want to know how to **resume your progress** if you decide to pause halfway through!

## ive finished the review. are changes applied.

**Yes, your choices are applied** to your working directory right now, but they are not permanently locked into Git's history yet.

Think of your files as being in a temporary "staged workspace." If you open your folder right now, you will see your exact custom mix of files.

### Step 1: Check your work

Before finalizing everything, run this command to see the list of files you successfully modified or brought back:

bash

```
git status
```

Use code with caution.

- Your chosen files will be listed under **"Changes not staged for commit"**.

### Step 2: Lock in your choices (Crucial)

To permanently save this exact folder state so you do not accidentally lose your progress, run these two commands:

bash

```
git add .
git commit -m "Final custom mix of original and modified files"
```

Use code with caution.

Once you run that commit, your custom folder state is safely secured in your history.

Would you like to know how to **export this finalized folder** to a clean directory, or are you **all done** with this folder comparison?
