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

# 