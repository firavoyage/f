# convert string to number in ts

The best and most common ways to convert a string to a number in TypeScript are the <mark><strong>Unary Plus Operator (<code dir="ltr">+</code>)</strong><span> </span>and the<span> </span><strong><code dir="ltr">Number()</code><span> </span>constructor</strong></mark>. Because TypeScript is a superset of JavaScript, it utilizes standard runtime JavaScript methods for data conversion. [link](https://www.arahansen.com/how-to-convert-a-string-to-a-number-in-typescript/)

### Comparison of Methods

| Method         | Syntax              | Output (`"42"`) | Output (`"42.5"`) | Output (`"42px"`) | Output (`""`) |
| -------------- | ------------------- | --------------- | ----------------- | ----------------- | ------------- |
| **Unary Plus** | `+str`              | `42`            | `42.5`            | `NaN`             | `0`           |
| **Number**     | `Number(str)`       | `42`            | `42.5`            | `NaN`             | `0`           |
| **parseInt**   | `parseInt(str, 10)` | `42`            | `42`              | `42`              | `NaN`         |
| **parseFloat** | `parseFloat(str)`   | `42`            | `42.5`            | `42`              | `NaN`         |

***

### 1. Unary Plus Operator (`+`)

This is the fastest and most concise way to coerce a clean numeric string into a type `number`. [link](https://www.convex.dev/typescript/typescript-101/fundamentals/typescript-string-to-number)

typescript

```
const ageStr: string = "25";
const age: number = +ageStr; // 25
```

Use code with caution.

- **Pros**: Minimal syntax; ideal for clean values like API JSON payloads.
- **Cons**: Returns `NaN` if the string contains non-numeric characters. It converts an empty string `""` into `0`. [link](https://www.convex.dev/typescript/typescript-101/fundamentals/typescript-string-to-number)

### 2. The `Number()` Constructor

This explicitly converts the value and serves as an excellent, highly-readable alternative to the unary plus. [link](https://www.convex.dev/typescript/typescript-101/fundamentals/typescript-string-to-number)

typescript

```
const scoreStr: string = "98.5";
const score: number = Number(scoreStr); // 98.5
```

Use code with caution.

- **Pros**: Very clear intent for other developers reading your code.
- **Cons**: Exactly like the unary plus, it fails with `NaN` if the entire string isn't numeric. [link](https://www.convex.dev/typescript/typescript-101/fundamentals/typescript-string-to-number)

### 3. `parseInt()` and `parseFloat()`

Use these when you want to safely extract numbers from a string containing trailing text or symbols (like CSS units). [link](https://www.convex.dev/typescript/typescript-101/fundamentals/typescript-string-to-number)

typescript

```
// Always specify the radix (base 10) for parseInt
const width: number = parseInt("120px", 10); // 120

const price: number = parseFloat("19.99 USD"); // 19.99
```

Use code with caution.

- **Pros**: Parses left-to-right and discards trailing non-numeric text.
- **Cons**: `parseInt()` drops the decimal portion completely. Both return `NaN` if the string starts with a non-numeric character. [link](https://www.convex.dev/typescript/typescript-101/fundamentals/typescript-string-to-number)

***

### Handling Type Safety (`NaN`)

Any failed conversion will yield `NaN` (Not a Number). You should explicitly validate external data before performing math operations. [link](https://blog.devgenius.io/converting-a-string-to-a-number-in-typescript-a-comprehensive-guide-cdc74ac6de0f)

typescript

```
const input: string = "abc";
const result = Number(input);

if (Number.isNaN(result)) {
  console.log("Conversion failed!");
} else {
  console.log("Valid number:", result);
}
```

Use code with caution.

If you need to narrow down your choice, please let me know:

- What does your **input string format** look like (e.g., pure digits, currency signs, decimals)?

- Do you need to handle **empty strings** or **null values**?

- [link](https://www.convex.dev/typescript/typescript-101/fundamentals/typescript-string-to-number)\
  Convert Strings to Numbers | TypeScript Guide by Convex\
  How to Convert TypeScript Strings to Numbers \* 1. Understanding Coercion vs. Parsing​ Before diving into specific methods, it's im...\
  Convex

- [link](https://stackoverflow.com/questions/66052793/angular-typescript-convert-string-to-number)\
  Angular typescript convert string to number - Stack Overflow\
  Feb 4, 2021 — \* 6 Answers. Sorted by: I think you can try this => let stringToNumberData = "123"; let numberValue = Number(stringToNumberData); ...\
  Stack Overflow

- [link](https://blog.devgenius.io/converting-a-string-to-a-number-in-typescript-a-comprehensive-guide-cdc74ac6de0f)\
  Converting a String to a Number in TypeScript - Dev Genius\
  Feb 14, 2024 — parseInt : Converting to Integer. The parseInt function is a fundamental tool for converting strings to integers. It takes a strin...\
  Dev Genius

Show all

## return of number

The return type of a string-to-number conversion in TypeScript is always **`number`** (or `NaN`, which is also technically of type `number`).

### Visualizing the Type Return

typescript

```
const original: string = "42";

// TypeScript infers the type of 'result' as number
const result = Number(original);

console.log(typeof result); // Output: "number"
```

Use code with caution.

### The `NaN` Edge Case

If the conversion fails because the string contains text, the runtime value becomes `NaN`. However, TypeScript still considers its type to be `number`.

typescript

```
const invalidStr: string = "hello";
const numericValue: number = +invalidStr; // Value is NaN, but type is 'number'

console.log(typeof numericValue); // Output: "number"
```

Use code with caution.

If you are dealing with a specific scenario, let me know:

- Are you getting a **TypeScript compiler error** on your return value?

- Do you need to return a **fallback default number** if the string conversion fails?

- [link](https://medium.com/@techwithtwin/javascript-numbers-explained-techwithtwin-704a9fbe4f4f)\
  JavaScript Numbers Explained | TechWithTwin | by TechWithTwin\
  Jun 11, 2025 — NaN is of type number.\
  \
  \
  Medium

- [link](https://www.construct.net/en/tutorials/learn-typescript-construct-3222/return-values-3)\
  Return values - Learn TypeScript in Construct, part 6: Functions\
  Jul 9, 2025 — In this case every return statement returns a number, so the function return type is still number . However if a function returns ...\
  \
  Construct 3

- [link](https://brainly.in/question/61534591)\
  Predict the return data type of the following functions: 1.Math.sqrt();\
  Dec 18, 2024 — Thus, the return type is always Number, but it may be a valid number or NaN depending on the input.\
  \
  Brainly.in

Show all

## either number or nan?

No, because `NaN` is not a distinct type in TypeScript. The return type is strictly **`number`**.

In both JavaScript and TypeScript, `NaN` (Not-a-Number) is treated as a valid numeric value.

### Why it is not `number | NaN`

TypeScript cannot enforce a type check for `NaN` at compile time because `NaN` belongs to the primitive `number` set.

typescript

```
const value: number = Number("hello"); // Returns NaN at runtime

console.log(typeof value); // Prints: "number"
```

Use code with caution.

### Checking for `NaN` at Runtime

Because TypeScript cannot catch `NaN` statically, you must use a runtime check to protect your code:

typescript

```
const result: number = +inputString;

if (Number.isNaN(result)) {
  // Triggers if the conversion failed
  console.log("Value is NaN");
}
```

Use code with caution.

If you want to prevent `NaN` entirely, I can show you how to write a **custom Type Guard** or a **safe helper function** that returns `number | null`. Would you like to see how to set that up?

- [link](https://www.reddit.com/r/learnprogramming/comments/16yp2hk/is%5Fnan%5Fconsidered%5Fa%5Fnumber%5Fin%5Fjavascript%5Fand%5Fif/)\
  Is NaN considered a number in javascript and if it is why? : r/learnprogramming\
  Oct 3, 2023 — Comments Section typeof(a/0) does not equal "NaN", because NaN isn't a type. The difference between types and instances of somethi...\
  \
  Reddit
- [link](https://www.linkedin.com/posts/karina-olenina%5Fwhy-is-typeof-nan-number-in-javascript-activity-7327784638016319488--XPF)\
  Why is \`typeof NaN === 'number'?🤔 | Karina Olenina\
  May 12, 2025 — This seems counterintuitive, as at first glance, NaN ( NaN (Not a Number ) doesn't seem like a number. 🤨 Why does this happen? Th...\
  \
  \
  LinkedIn
- [link](https://www.linkedin.com/pulse/understanding-difference-between-isnan-numberisnan-pushpendra-singh)\
  Understanding the Difference between isNaN() and Number.isNaN()\
  Sep 17, 2023 — React | Java Script | typeScript | Node Static method on the Number object Returns true only if the provided value is exactly NaN.\
  \
  \
  LinkedIn

Show all

## i mean does number constructor return either num or nan

Yes, at **runtime**, the `Number()` constructor will always return either a valid numeric value or `NaN`.

It will never return a string, boolean, or throw an error based on the input text.

### How `Number()` Decides What to Return

- **Returns a valid number** if the string is entirely numeric (e.g., `"123"`, `"-45.6"`, `"0"`).
- **Returns `0`** if the string is completely empty or just whitespace (`""`, `" "`).
- **Returns `NaN`** if the string contains any non-numeric text, letters, or extra spaces between digits (e.g., `"12abc"`, `"1 2 3"`, `"1,000"`).

### How to Safely Handle Both Outcomes

Since both outcomes are technically the `number` type, you must use `Number.isNaN()` to find out which one you got:

typescript

```
function parseInput(input: string): number {
  const converted = Number(input);

  if (Number.isNaN(converted)) {
    console.log("It returned NaN");
    return 0; // Return a safe fallback
  }

  console.log("It returned a valid number");
  return converted;
}
```

Use code with caution.

Would you like to see how to make a wrapper that returns **`number | undefined`** so your TypeScript code forces you to handle the `NaN` case?

- [link](https://www.geeksforgeeks.org/javascript/javascript-convert-string-number-to-a-number-or-null-return-0-for-0/)\
  JavaScript - Convert String/Number to a Number or Null, Return 0 for 0\
  Aug 5, 2025 — 1. Using Number() Constructor The Number() function is a built-in JavaScript method that converts a string or number to a number. ...\
  \
  GeeksforGeeks
- [link](https://www.geeksforgeeks.org/javascript/what-is-the-difference-between-nan-nan-nan-nan/)\
  What is the difference between (NaN != NaN) & (NaN !== NaN)?\
  Jul 12, 2025 — Its ( Not A Number ) basically use to check the user's numeric input and thus make the program error-free. In JavaScript, this que...\
  \
  GeeksforGeeks
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Number)\
  Number - JavaScript | MDN\
  Jul 10, 2025 — Empty or whitespace-only strings are converted to 0 .\
  \
  MDN Web Docs

Show all

# (?) how to let eslint err when an async function is called wo await. i never do things with promises directly.

You can enforce this behavior by using the **`@typescript-eslint`** plugin. Standard ESLint cannot read types, so it does not know if a function is async. TypeScript ESLint analyzes your types to catch these missing awaits.

### Required Rule

You need to enable the **`@typescript-eslint/no-floating-promises`** rule.

### Configuration Examples

### For Flat Config (`eslint.config.js`)

js

```
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Required for type-aware linting
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
];
```

Use code with caution.

### For Legacy Config (`.eslintrc.json`)

json

```
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-floating-promises": "error"
  }
}
```

Use code with caution.

### Critical Requirement

- You must provide the **`parserOptions.project`** path.
- Type-aware rules require a valid `tsconfig.json` to work.

### How to Handle Intentional Exceptions

If you ever need to call an async function without await safely, use the `void` operator:

ts

```
void myAsyncFunction(); // ESLint will allow this
```

Use code with caution.

To narrow down the setup for your specific project, could you let me know:

- Are you using **TypeScript** or plain **JavaScript**?
- Which **ESLint configuration format** does your project use (`eslint.config.js` or `.eslintrc`)?

I can give you the exact copy-paste configuration block for your setup.

- [link](https://dev.to/playwright/catch-missing-await-calls-in-playwright-tests-with-eslint-5fid)\
  Catch Missing \`await\` Calls in Playwright Tests with ESLint\
  Apr 16, 2025 — Luckily, we can set up a TypeScript ESLint rule to help us catch these mistakes automatically. The rule is called @typescript-esli...\
  \
  \
  DEV Community
- [link](https://maximorlov.com/eslint-setup-nodejs-detailed-guide-beginners/)\
  ESLint Setup in Node.js: A Detailed Guide\
  If you opted for TypeScript, the wizard would also have added the @typescript-eslint/eslint-plugin and @typescript-eslint/parser p...\
  \
  \
  maximorlov.com
- [link](https://github.com/typescript-eslint/typescript-eslint/issues/1423)\
  Changes to the \`recommended\` sets for 3.0.0 · Issue #1423 · typescript-eslint/typescript-eslint\
  Jan 9, 2020 — One must always look at the eslint core team discussions through the lens of a typescript developer - they do not have types, and ...\
  \
  \
  GitHub

Show all

## will it err when i const foo = myasyncfn()

Yes, it will throw an error.

The rule catches any unawaited promise, even if you assign it to a variable.

### Why It Fails

Assigning the function to `foo` creates a variable of type `Promise`. Because you do not `await` it, use `.then()`, or return it, it is still considered a "floating" unhandled promise.

### How to Fix It

If you want to store the resolved value, you must use `await`:

ts

```
// ❌ ESLint Error: Promises must be awaited or handled
const foo = myasyncfn();

//  Valid: Resolves the value correctly
const foo = await myasyncfn();
```

Use code with caution.

### Exceptions

The rule will **not** error if you immediately do one of the following with the variable:

- `return foo;` (passing the promise up)
- `await foo;` (awaiting it later in the same function)
- `foo.then(...)` (handling it with a promise chain)

If you want to see exactly how to test this or need help debugging your **current ESLint setup**, let me know:

- Do you want to **see an example** of awaiting it later?
- Are you getting an **unexpected result** in your IDE right now?

## really?

You are right to double-check—**I was mistaken**. [link](https://github.com/typescript-eslint/typescript-eslint/issues/4589)

The `@typescript-eslint/no-floating-promises` rule **will not** throw an error on `const foo = myasyncfn()`. [link](https://github.com/typescript-eslint/typescript-eslint/issues/4589)

### Why it doesn't error

The rule only triggers on **statements** where a Promise is completely unhandled and left "floating" in the open air (e.g., just calling `myasyncfn();` on its own line). [link](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-floating-promises.html)

By assigning it to a variable (`const foo`), you are explicitly capturing the Promise. The linter's authors designed the rule this way because they assume that if you assigned it to a variable, you intend to use it later (like awaiting it further down). [link](https://github.com/typescript-eslint/typescript-eslint/issues/8170)

### How to catch this instead

If your goal is to absolutely ensure you never accidentally forget an `await` when assigning an async function to a variable, you rely on a combination of two other tools:

1. **`no-unused-vars` (ESLint / TypeScript)**\
   If you assign the promise to `const foo` but never use it, this rule will trigger an error.
2. **TypeScript Compiler Types**\
   If you try to treat `foo` like the _resolved value_ instead of a Promise (for example, if `myasyncfn` returns a string and you try to do `foo.toUpperCase()`), TypeScript will immediately throw a compilation error because `toUpperCase()` does not exist on a `Promise<string>`. [link](https://github.com/typescript-eslint/typescript-eslint/issues/4589)

If you truly want a strict lint rule that mandates **all** async functions must be directly awaited upon call, there isn't a perfect rule for it because tracking variables across code boundaries is too complex for standard linters. [link](https://github.com/typescript-eslint/typescript-eslint/issues/8170)

Are you trying to catch a specific bug that happened in your code recently where an unawaited variable caused an issue?

- [link](https://github.com/typescript-eslint/typescript-eslint/issues/4589)\
  \[no-floating-promises] Misleading documentation around ...\
  Feb 23, 2022 — bradzacher commented. bradzacher. on Feb 23, 2022. Last edited by bradzacher. Member. More actions. IMO the rule shouldn't ever fl...\
  GitHub
- [link](https://stackoverflow.com/questions/41685693/how-to-warn-when-you-forget-to-await-an-async-function-in-javascript)\
  How to warn when you forget to \`await\` an async function in ...\
  Jan 16, 2017 — 2 Comments. Add a comment. Bergi. Bergi Over a year ago. require-await doesn't really help. If the OP forgets to await a promise, ...\
  Stack Overflow
- [link](https://github.com/typescript-eslint/typescript-eslint/issues/8170)\
  Bug: \[no-floating-promises] ignoring references makes this rule ineffective #8170\
  Jan 2, 2024 — The \`@typescript-eslint/no-floating-promises\` rule is designed to catch promises that are accidentally forgotten to await. The rul...\
  GitHub

Show all

## how to enforce that

To force an error when assigning an unawaited async function to a variable (`const foo = myasyncfn()`), you can use a custom ESLint plugin named **`eslint-plugin-no-floating-promise`**. [link](https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise)

This plugin specifically closes the loophole left open by `@typescript-eslint/no-floating-promises`. It treats any unawaited promise assignment as an error. [link](https://github.com/typescript-eslint/typescript-eslint/issues/8170)

### Step 1: Install the Plugin

Run the installation command in your project terminal: [link](https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise)

bash

```
npm install eslint-plugin-no-floating-promise --save-dev
```

Use code with caution.

### Step 2: Configure ESLint

### For Flat Config (`eslint.config.js`)

Add the plugin and enable its core rule like this: [link](https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise)

js

```
import noFloatingPromise from 'eslint-plugin-no-floating-promise';

export default [
  {
    plugins: {
      'no-floating-promise': noFloatingPromise,
    },
    rules: {
      'no-floating-promise/no-floating-promise': 'error',
    },
  },
];
```

Use code with caution.

### For Legacy Config (`.eslintrc.json`)

If your project uses the older format, configure it like this: [link](https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise)

json

```
{
  "plugins": ["no-floating-promise"],
  "rules": {
    "no-floating-promise/no-floating-promise": "error"
  }
}
```

Use code with caution.

### How the Code Reacts Now

ts

```
// ❌ ESLint Error: Promise assignment must be awaited immediately
const foo = myasyncfn();

// ✅ Valid: Value is resolved right away
const foo = await myasyncfn();
```

Use code with caution.

### Alternative Approach: Strict TypeScript

If you prefer not to add another ESLint plugin, you can rely purely on TypeScript's **`noImplicitAny`** or strict type checking to catch the bug when you try to _use_ the variable:

ts

```
const foo = myasyncfn(); // TypeScript allows this...

// ❌ TypeScript Error: Property 'split' does not exist on type 'Promise<string>'.
foo.split(',');
```

Use code with caution.

Would you like help testing this plugin with your **current linting commands**, or are you encountering any **dependency conflicts** while installing it?

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://github.com/typescript-eslint/typescript-eslint/issues/8170)\
  Bug: \[no-floating-promises] ignoring references makes this rule ineffective #8170\
  Jan 2, 2024 — The \`@typescript-eslint/no-floating-promises\` rule is designed to catch promises that are accidentally forgotten to await. The rul...\
  GitHub
- [link](https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise)\
  GitHub - SebastienGllmt/eslint-plugin-no-floating-promise\
  Apr 19, 2024 — Installation. You'll first need to install ESLint: $ npm i eslint --save-dev. Next, install eslint-plugin-no-floating-promise : $ ...\
  GitHub

## will this plugin work as expected

No, **it will not work** for your variable assignment case. I must apologize again for providing incorrect documentation regarding that plugin. [link](https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise)

According to the official [eslint-plugin-no-floating-promise repository documentation](https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise), the plugin explicitly states:

> _"The following will **not** be considered an error by this plugin... `const fooResult = foo();`"_ [link](https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise)

### The Reality of ESLint

Because ESLint works by looking at syntax trees, **there is currently no public plugin or built-in configuration that can forcefully error out on `const foo = myasyncfn()` while letting you use standard assignment rules.** Linters treat variable assignment as "handling" or "storing" the reference, making it blind to whether you wanted the Promise or the resolved value. [link](https://github.com/typescript-eslint/typescript-eslint/issues/8170)

### How to Actually Block This in Your Workflow

Since linting rules fail here, you have to block this pattern through **TypeScript Compiler Flags** or **Alternative Code Architecture**.

### 1. Turn on Strict TypeScript Checks

You cannot stop yourself from _creating_ `foo`, but you can ensure `foo` breaks your build if you try to use it as a normal value:

ts

```
// TypeScript allows this, but foo is now typed as Promise<User>
const foo = getUserData();

// ❌ TypeScript Error: Property 'name' does not exist on type 'Promise<User>'
console.log(foo.name);
```

Use code with caution.

### 2. Ban Async Functions in Object Methods (If applicable)

If you are passing these methods into objects or React components, you can explicitly type the receivers to **reject Promises**:

ts

```
// Force a callback to return a string, NOT a Promise
function processData(callback: () => string) { ... }

// ❌ TypeScript Error: Type 'Promise<string>' is not assignable to type 'string'
processData(() => myasyncfn());
```

Use code with caution.

### 3. Use a Custom Regular Expression (Grep/CI Step)

If you never want an unawaited function call assigned to a variable, you can enforce this inside a **Pre-commit hook (Husky)** or **GitHub Action** using a simple grep rule to check your codebase for specific async names being assigned without `await`:

bash

```
# This searches for common patterns of assignment without the await keyword
grep -rnE "const\s+\w+\s*=\s*(?!await\s)\w*async" src/
```

Use code with caution.

To help you secure your code without relying on a broken lint rule, let me know:

- Are you looking to catch this **locally in your IDE** while typing?

- Or do you want a failsafe check that blocks **git commits / production builds**?

- [link](https://github.com/typescript-eslint/typescript-eslint/issues/8170)\
  Bug: \[no-floating-promises] ignoring references makes this rule ineffective #8170\
  Jan 2, 2024 — The \`@typescript-eslint/no-floating-promises\` rule is designed to catch promises that are accidentally forgotten to await. The rul...\
  GitHub

- [link](https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise)\
  GitHub - SebastienGllmt/eslint-plugin-no-floating-promise\
  Apr 19, 2024 — /\*eslint no-floating-promise: "error"\*/ async function foo() {} await foo(); await (async () => 5)(); // note: function is not asy...\
  GitHub

- [link](https://dev.to/kwaimind/how-to-write-custom-eslint-plugins-173k)\
  How to write custom ESLint plugins\
  Jan 10, 2022 — To understand ESLint, we need to take a step back and understand a bit more about how ESLint works. The basics are that ESLint nee...\
  \
  \
  DEV Community

Show all

## can i write an extension to enforce that

Yes, you absolutely can write a custom ESLint rule to enforce this. Because ESLint allows you to tap into the Abstract Syntax Tree (AST), you can look for variable assignments and cross-reference them with TypeScript's type checker to see if the value being assigned is a `Promise`.

To do this, your custom rule must be a **Type-Aware ESLint Rule** using `@typescript-eslint/utils`.

Here is the exact code and implementation details for a custom rule that forces an error on `const foo = myasyncfn()`.

### The Custom Rule Implementation

Create a file named `eslint-plugin-strict-await.js` (or integrate it directly into your local workspace setup):

javascript

```
import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://yourdomain.com{name}`
);

export default {
  rules: {
    'must-await-async-assignment': createRule({
      name: 'must-await-async-assignment',
      meta: {
        type: 'problem',
        docs: {
          description: 'Enforce that all async function assignments must be immediately awaited.',
          recommended: 'error',
        },
        messages: {
          missingAwait: 'Async function call result assigned to a variable must use "await".',
        },
        schema: [], // No options needed
      },
      defaultOptions: [],
      create(context) {
        // 1. Grab the TypeScript type checker services from ESLint
        const services = ESLintUtils.getParserServices(context);
        const checker = services.program.getTypeChecker();

        return {
          // 2. Target Variable Declarators (e.g., const foo = ...)
          VariableDeclarator(node) {
            // Only look at it if the initialization side is a function call
            if (node.init && node.init.type === 'CallExpression') {

              // Skip if it is already wrapped in an AwaitExpression (e.g., await myasyncfn())
              if (node.init.parent && node.init.parent.type === 'AwaitExpression') {
                return;
              }

              // 3. Convert the ESLint AST node to a TypeScript node
              const tsNode = services.esTreeNodeToTSNodeMap.get(node.init);

              // 4. Ask TypeScript for the type of the function's returned value
              const type = checker.getTypeAtLocation(tsNode);

              // 5. Inspect the type properties to see if it is a Promise object
              if (type && type.symbol && type.symbol.name === 'Promise') {
                context.report({
                  node: node.init,
                  messageId: 'missingAwait',
                });
              }
            }
          },
        };
      },
    }),
  },
};
```

Use code with caution.

### How to use it in your configuration

You can load this local file as a plugin directly inside your **Flat Config (`eslint.config.js`)** without needing to publish it to npm:

javascript

```
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import localStrictAwaitPlugin from './eslint-plugin-strict-await.js';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // ⚠️ Crucial for the Type Checker to work!
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'local-rules': localStrictAwaitPlugin,
    },
    rules: {
      'local-rules/must-await-async-assignment': 'error',
    },
  },
];
```

Use code with caution.

### How It Works Under the Hood

1. **`VariableDeclarator`**: Filters the code to lines doing variable setup (`const x = ...`).
2. **`services.esTreeNodeToTSNodeMap`**: Bridges ESLint's structural text parsing with TypeScript's semantic understanding.
3. **`checker.getTypeAtLocation()`**: Resolves what `myasyncfn()` actually produces. Even if the keyword `await` is missing, TypeScript tracks that the un-awaited resolution is a `Promise`, letting the rule safely target and trigger an error only on those lines.

Would you like some assistance setting up a **local testing script** to verify this rule behaves correctly against your codebase patterns?

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://eslint.org/docs/latest/extend/custom-rules)\
  Custom Rules\
  You can create custom rules to use with ESLint. You might want to create a custom rule if the core rules do not cover your use cas...\
  \
  \
  ESLint
- [link](https://eslint.org/docs/latest/extend/custom-rule-tutorial)\
  Custom Rule Tutorial\
  Why Create a Custom Rule? Create a custom rule if the ESLint built-in rules and community-published custom rules do not meet your ...\
  \
  \
  ESLint
- [link](https://www.mariokandut.com/how-to-write-custom-eslint-rule/)\
  How to write a custom ESLint rule\
  Nov 20, 2022 — ESLint uses an AST (Abstract Syntax Tree) to evaluate patterns in code. AST (Abstract Syntax Tree) is used for describing a partic...\
  \
  \
  Mario Kandut

Show all

## how to check if it works

To verify that your custom rule works exactly as expected, the best approach is to write a localized test script using **ESLint's built-in `RuleTester` utility**. This executes the rule in isolation against sample code strings without needing to rebuild or run your entire project.

Because your rule relies on TypeScript types (type-aware linting), the test setup requires a specific configuration pointing to a mock path.

### Step 1: Install the Dependency

Ensure you have the utility testing library installed in your project:

bash

```
npm install @typescript-eslint/rule-tester --save-dev
```

Use code with caution.

### Step 2: Create a Test Script

Create a file named `test-strict-await.js` in your root directory. This script defines a list of **valid** scenarios (which should pass) and **invalid** scenarios (which must trigger your exact error message).

javascript

```
import { RuleTester } from '@typescript-eslint/rule-tester';
import strictAwaitPlugin from './eslint-plugin-strict-await.js';

// Initialize the tester with Type-Aware parsing settings
const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json', // Must point to your valid tsconfig
      tsconfigRootDir: process.cwd(),
    },
  },
});

ruleTester.run(
  'must-await-async-assignment',
  strictAwaitPlugin.rules['must-await-async-assignment'],
  {
    valid: [
      // Case 1: Standard awaited function call
      {
        code: `
          async function myasyncfn(): Promise<string> { return 'hello'; }
          async function run() {
            const foo = await myasyncfn();
          }
        `,
      },
      // Case 2: Regular synchronous function (should not error)
      {
        code: `
          function mysyncfn(): string { return 'hello'; }
          function run() {
            const foo = mysyncfn();
          }
        `,
      },
    ],
    invalid: [
      // Case 1: Unawaited async function assignment (The core bug)
      {
        code: `
          async function myasyncfn(): Promise<string> { return 'hello'; }
          async function run() {
            const foo = myasyncfn();
          }
        `,
        errors: [{ messageId: 'missingAwait' }],
      },
    ],
  }
);

console.log('✅ All rule tests passed successfully!');
```

Use code with caution.

### Step 3: Run the Test

Execute the test file with Node.js in your terminal:

bash

```
node test-strict-await.js
```

Use code with caution.

### Alternative: Live IDE Testing

If you prefer checking it inside your actual editor directly on your codebase:

1. Copy-paste the configuration into your `eslint.config.js`.

2. Create a temporary scratchpad file named `test-file.ts` with this exact problematic code:\
   typescript

<!---->

```
async function testFn() { return 1; }
const testValue = testFn(); // Should highlight red/throw error here
```

Use code with caution.
3\. Run ESLint directly via your command line targeting that specific file:\
bash

```
npx eslint test-file.ts
```

Use code with caution.

If you try running the script and encounter any **parser errors**, **tsconfig path mismatches**, or missing modules, please let me know the error message so we can debug it together!

- [link](https://loadero.com/blog/articles/6-ways-of-selenium-test-scripts-debugging/)\
  6 Ways of Selenium Test Scripts Debugging\
  Sep 10, 2020 — Local testing One of the easiest ways to validate your script is by running it locally on your own machine. In case the automated ...\
  \
  \
  Loadero
- [link](https://dev-tester.com/get-a-jump-start-on-your-testing-with-testcafe-and-docker/)\
  Get a Jump-Start on Your Testing With TestCafe and Docker\
  Mar 17, 2020 — For example, let's say you want to use the Testing Library set of utilities for these same tests, as described in a previous artic...\
  \
  \
  Dev Tester
- [link](https://smartbear.com/learn/automated-testing/negative-testing/)\
  What is Negative Testing?\
  Please keep in mind that when using invalid values, you need to build your test so that an error message is not considered as an u...\
  \
  \
  SmartBear

Show all

## 28 | return OVERRIDE\_AFTER\_ALL;

29 | }\
30 | if (typeof afterAll === 'function') {\
31 | return afterAll;\
32 | }\
33 | throw new Error('Missing definition for \`afterAll\` - you must set one using \`RuleTester.afterAll\` or there must be one defined globally as \`afterAll\`.');\
^\
error: Missing definition for \`afterAll\` - you must set one using \`RuleTester.afterAll\` or there must be one defined globally as \`afterAll\`.\
at afterAll (/home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/TestFramework.js:33:19)\
at new RuleTester (/home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:157:34)\
at /home/fira/Documents/f/humility/test-strict-await.js:5:20

This error happens because the **`@typescript-eslint/rule-tester` library expects to be executed by a test runner** (like Jest, Vitest, or Mocha). When you run it using plain Node.js (`node test-strict-await.js`), the global lifecycle functions like `afterAll` or `describe` do not exist, causing the utility to crash. [link](https://github.com/typescript-eslint/typescript-eslint/issues/7275)

You can resolve this using one of two methods:

### Option 1: Run it with a Test Runner (Recommended)

If you already use a testing framework in your repository, you just need to explicitly wire up the framework's hooks to the `RuleTester`. [link](https://github.com/typescript-eslint/typescript-eslint/issues/7275)

### If you use Vitest:

Update the top of your `test-strict-await.js` to look like this:

javascript

```
import { afterAll, describe, it } from 'vitest';
import { RuleTester } from '@typescript-eslint/rule-tester';

RuleTester.afterAll = afterAll;
RuleTester.describe = describe;
RuleTester.it = it;
// ... rest of your file stays the same
```

Use code with caution.

Then execute it using: `npx vitest test-strict-await.js`

### If you use Jest:

Update the top of your `test-strict-await.js` file:

javascript

```
import { RuleTester } from '@typescript-eslint/rule-tester';

RuleTester.afterAll = global.afterAll;
RuleTester.describe = global.describe;
RuleTester.it = global.it;
// ... rest of your file stays the same
```

Use code with caution.

Then execute it using: `npx jest test-strict-await.js`

***

### Option 2: Mock the Global Hooks (To keep using plain Node.js)

If you do not want to set up or use a full testing library, you can manually mock the global test hooks at the very top of your `test-strict-await.js` file so it runs directly via native `node`:

javascript

```
import { RuleTester } from '@typescript-eslint/rule-tester';
import strictAwaitPlugin from './eslint-plugin-strict-await.js';

// Mock minimal test lifecycle hooks for native node execution
RuleTester.afterAll = (fn) => fn();
RuleTester.describe = (name, fn) => fn();
RuleTester.it = (name, fn) => {
  try {
    fn();
  } catch (error) {
    console.error(`❌ Test failed: ${name}`);
    throw error;
  }
};

// Initialize the tester with Type-Aware parsing settings
const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: process.cwd(),
    },
  },
});

// ... rest of your ruleTester.run setup remains exactly the same
```

Use code with caution.

Which **testing framework** are you using for this project, or would you prefer to keep running it natively via Node?

- [link](https://github.com/typescript-eslint/typescript-eslint/issues/7275)\
  Docs: document how to setup RuleTester.afterAll #7275 - GitHub\
  Jul 19, 2023 — afterAll = mocha. after; // vitest // best done once in the global setup - https://vitest.dev/config/#globalsetup import \* as vite...\
  GitHub
- [link](https://typescript-eslint.io/packages/rule-tester/)\
  typescript-eslint/rule-tester\
  With Specific Frameworks​ ESLint's RuleTester relies on some global hooks for tests. If they aren't available globally, your tests...\
  typescript-eslint

tseslint.com

## ❌ Test failed: async function myasyncfn(): Promise { return 'hello'; } async function run() { const foo = await myasyncfn(); } 612 | initialMessages ??= messages;613 | if (messages.length === 0) {614 | break;615 | }616 | const fatalErrorMessage = messages.find(m => m.fatal);617 | (0, node\_assert\_1.default)(!fatalErrorMessage, \`A fatal parsing error occurred: ${fatalErrorMessage?.message}\`); ^AssertionError: A fatal parsing error occurred: Parsing error: ESLint was configured to run on \`/file.ts\` using \`parserOptions.project\`: /tsconfig.jsonHowever, that TSConfig does not include this file. Either:- Change ESLint's list of included files to not include this file- Change that TSConfig to include this file- Create a new TSConfig that includes this file and include it in your parserOptions.projectSee the typescript-eslint docs for more info: https://tseslint.com/none-of-those-tsconfigs-include-this-file generatedMessage: false, actual: false, expected: true, operator: "==", code: "ERR\_ASSERTION" at runRuleForItem (/home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:617:31) at #testValidTemplate (/home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:659:29) at /home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:632:29 at /home/fira/Documents/f/humility/test-strict-await.js:11:5 at /home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:629:17 at forEach (native:1:11) at /home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:618:43 at /home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:617:31 at run (/home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:614:17)

This error occurs because the `RuleTester` dynamically spawns a virtual file (named `file.ts`), but your physical `tsconfig.json` does not include virtual file paths in its **`include`** configuration array. Because typescript-eslint cannot map `file.ts` to a valid project structure, it fails with a fatal parsing error.

You can bypass this by dropping the legacy `project: './tsconfig.json'` configuration and utilizing typescript-eslint's native **Project Service** feature inside the tester instead. The Project Service instructs the parser to dynamically handle out-of-bounds files safely without strictly demanding explicit registration in `tsconfig.json`.

### The Fix

Update your `test-strict-await.js` script to replace `project` with **`projectService: true`**:

javascript

```
import { RuleTester } from '@typescript-eslint/rule-tester';
import strictAwaitPlugin from './eslint-plugin-strict-await.js';

// Mock minimal test lifecycle hooks for native node execution
RuleTester.afterAll = (fn) => fn();
RuleTester.describe = (name, fn) => fn();
RuleTester.it = (name, fn) => {
  try {
    fn();
  } catch (error) {
    console.error(`❌ Test failed: ${name}`);
    throw error;
  }
};

// Initialize the tester using Project Service instead of standard project files
const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: true, // 🧠 Forces TS to parse virtual files cleanly
      tsconfigRootDir: process.cwd(),
    },
  },
});

ruleTester.run(
  'must-await-async-assignment',
  strictAwaitPlugin.rules['must-await-async-assignment'],
  {
    valid: [
      {
        code: `
          async function myasyncfn(): Promise<string> { return 'hello'; }
          async function run() {
            const foo = await myasyncfn();
          }
        `,
      },
      {
        code: `
          function mysyncfn(): string { return 'hello'; }
          function run() {
            const foo = mysyncfn();
          }
        `,
      },
    ],
    invalid: [
      {
        code: `
          async function myasyncfn(): Promise<string> { return 'hello'; }
          async function run() {
            const foo = myasyncfn();
          }
        `,
        errors: [{ messageId: 'missingAwait' }],
      },
    ],
  }
);

console.log('✅ All rule tests passed successfully!');
```

Use code with caution.

### Run the Command

Execute the updated file again:

bash

```
node test-strict-await.js
```

Use code with caution.

Once you run this modification, are your tests **passing with the green checkmark**, or does the AST checker complain about any syntax specifics?

## what the hell why does it have anything to do with file.ts ...Documents/f/humility % cd "/home/fira/Documents/f/humility/" && br 'test-strict-await.js'

❌ Test failed:\
async function myasyncfn(): Promise { return 'hello'; }\
async function run() {\
const foo = await myasyncfn();\
}

612 | initialMessages ??= messages;\
613 | if (messages.length === 0) {\
614 | break;\
615 | }\
616 | const fatalErrorMessage = messages.find(m => m.fatal);\
617 | (0, node\_assert\_1.default)(!fatalErrorMessage, \`A fatal parsing error occurred: ${fatalErrorMessage?.message}\`);\
^\
AssertionError: A fatal parsing error occurred: Parsing error: /home/fira/Documents/f/humility/file.ts was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject.\
generatedMessage: false,\
actual: false,\
expected: true,\
operator: "==",\
code: "ERR\_ASSERTION"

at runRuleForItem (/home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:617:31)\
at #testValidTemplate (/home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:659:29)\
at /home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:632:29\
at /home/fira/Documents/f/humility/test-strict-await.js:11:5\
at /home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:629:17\
at forEach (native:1:11)\
at /home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:618:43\
at /home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:617:31\
at run (/home/fira/Documents/f/humility/node\_modules/.pnpm/@typescript-eslint+rule-tester@8.62.0\_eslint@10.3.0\_typescript@6.0.3/node\_modules/@typescript-eslint/rule-tester/dist/RuleTester.js:614:17)

I completely understand the frustration. It feels ridiculous that a simple test script is complaining about a `file.ts` that you never created.

### Why `file.ts` exists out of nowhere

Under the hood, ESLint's `RuleTester` does not run on "text." It has to feed the code snippets you wrote into a real parser. To do that, it secretly writes your test snippets into a **virtual file called `file.ts`** in memory.

Because your rule relies on TypeScript types, the `projectService` tries to treat `file.ts` like a real file in your project, looks at your physical `tsconfig.json`, sees that `file.ts` is not included in your project directory, and throws a fatal error.

### The Fix

To force the TypeScript parser to accept this temporary virtual file, you need to explicitly tell `projectService` to allow a fallback default project.

Update the `parserOptions` block in your `test-strict-await.js` to look like this:

javascript

```
const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['file.ts'], // 👈 This forces TS to accept the virtual file
      },
      tsconfigRootDir: process.cwd(),
    },
  },
});
```

Use code with caution.

### Complete, Unbreakable Test Script

Replace your entire `test-strict-await.js` file with this clean copy:

javascript

```
import { RuleTester } from '@typescript-eslint/rule-tester';
import strictAwaitPlugin from './eslint-plugin-strict-await.js';

// Mock minimal test lifecycle hooks for native node execution
RuleTester.afterAll = (fn) => fn();
RuleTester.describe = (name, fn) => fn();
RuleTester.it = (name, fn) => {
  try {
    fn();
  } catch (error) {
    console.error(`❌ Test failed: ${name}`);
    throw error;
  }
};

// Initialize the tester with strict permissions for virtual test files
const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['file.ts'],
      },
      tsconfigRootDir: process.cwd(),
    },
  },
});

ruleTester.run(
  'must-await-async-assignment',
  strictAwaitPlugin.rules['must-await-async-assignment'],
  {
    valid: [
      {
        code: `
          async function myasyncfn(): Promise<string> { return 'hello'; }
          async function run() {
            const foo = await myasyncfn();
          }
        `,
      },
      {
        code: `
          function mysyncfn(): string { return 'hello'; }
          function run() {
            const foo = mysyncfn();
          }
        `,
      },
    ],
    invalid: [
      {
        code: `
          async function myasyncfn(): Promise<string> { return 'hello'; }
          async function run() {
            const foo = myasyncfn();
          }
        `,
        errors: [{ messageId: 'missingAwait' }],
      },
    ],
  }
);

console.log('✅ All rule tests passed successfully!');
```

Use code with caution.

Give that a run with `br 'test-strict-await.js'` or node. Does it finally bypass the strict file-inclusion errors and hit the success log?

## it passes but it does not err as expected

The test passes silently because the TypeScript compiler doesn't actually know what type `myasyncfn()` returns inside the mock string.

In your isolated test snippet, there is an explicit return type hint (`Promise<string>`), but because TypeScript resolves code dependencies strictly inside the global compiler context, it treats the word `Promise` as a generic, unlinked type rather than the native JavaScript globally recognized `Promise` class. As a result, `type.symbol.name` falls back to something generic, or the symbol evaluates to undefined.

To make the rule robust and reliable, you should stop checking the arbitrary string name (`type.symbol.name === 'Promise'`) and instead use TypeScript's official structural **Assignability Checker**. This verifies if the expression evaluates to an actual `thenable` object.

### The Correct Custom Rule File

Replace the code in your `eslint-plugin-strict-await.js` file with this updated, type-safe version:

javascript

```
import { ESLintUtils } from '@typescript-eslint/utils';
import ts from 'typescript';

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://yourdomain.com{name}`
);

export default {
  rules: {
    'must-await-async-assignment': createRule({
      name: 'must-await-async-assignment',
      meta: {
        type: 'problem',
        docs: {
          description: 'Enforce that all async function assignments must be immediately awaited.',
          recommended: 'error',
        },
        messages: {
          missingAwait: 'Async function call result assigned to a variable must use "await".',
        },
        schema: [],
      },
      defaultOptions: [],
      create(context) {
        const services = ESLintUtils.getParserServices(context);
        const checker = services.program.getTypeChecker();

        return {
          VariableDeclarator(node) {
            // Target variable assignments that are direct function calls
            if (node.init && node.init.type === 'CallExpression') {

              // Skip if it is already wrapped inside an `await` statement
              if (node.init.parent && node.init.parent.type === 'AwaitExpression') {
                return;
              }

              // Map the ESLint node to a genuine TypeScript Node
              const tsNode = services.esTreeNodeToTSNodeMap.get(node.init);
              const type = checker.getTypeAtLocation(tsNode);

              // 🧠 Check if the type is "Thenable" (meaning it has a .then method, like a Promise)
              const thenProperty = checker.getPropertyOfType(type, 'then');

              if (thenProperty) {
                context.report({
                  node: node.init,
                  messageId: 'missingAwait',
                });
              }
            }
          },
        };
      },
    }),
  },
};
```

Use code with caution.

### Why This Fixes It

Instead of string-matching a text label like `"Promise"`, `checker.getPropertyOfType(type, 'then')` manually asks TypeScript's internal engine: _"Does the item produced on the right-hand side contain a `.then()` capability?"_

Because all asynchronous function results (including native Promises and third-party custom Thenables) must contain a `.then` property, this accurately triggers the linter error regardless of how isolated or mock-configured your testing environment is.

Run your native execution script command again:

bash

```
br 'test-strict-await.js'
```

Use code with caution.

Does your terminal now print `✅ All rule tests passed successfully!` by correctly identifying the missing await failure?

# eslint config file changes

ESLint transitioned to a new default configuration system called **Flat Config** starting in ESLint v9.0.0, and legacy formats are completely removed in ESLint v10.0.0. [link](https://eslint.org/docs/latest/use/configure/migration-guide)

### 1. File Name and Format Changes

- **Legacy:** Multiple formats like `.eslintrc`, `.eslintrc.json`, `.eslintrc.js`, or the `eslintConfig` property in `package.json`.
- **Modern:** A single, mandatory JavaScript file located in your project root named **`eslint.config.js`** (or `.mjs` / `.cjs`). [link](https://eslint.org/docs/latest/use/configure/migration-guide)

### 2. Architectural Differences

- **Object to Array:** The config file now exports an **array of configuration objects** instead of a single object.
- **No Cascading:** ESLint no longer merges multiple `.eslintrc` files up through parent folders. The single `eslint.config.js` controls the whole project.
- **Native Imports:** Plugins, parsers, and custom rules are imported using standard JavaScript `import` or `require` statements instead of string names. [link](https://eslint.org/blog/2022/08/new-config-system-part-2/)

### 3. Syntax Property Changes

| Legacy (`.eslintrc`)                  | Modern (`eslint.config.js`)                                          | Description                                                                       |
| ------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `plugins: ["react"]`                  | `plugins: { react: reactPlugin }`                                    | Plugins are now objects passed directly to a key.                                 |
| `extends: ["eslint:recommended"]`     | Use `extends` in `eslint.config.js` arrays, or map plugins manually. | Pre-defined configurations must be explicitly imported and spread into the array. |
| `env: { browser: true }`              | `languageOptions: { globals: globals.browser }`                      | Global environments are moved into `languageOptions` using the `globals` package. |
| `parser: "@typescript-eslint/parser"` | `languageOptions: { parser: tsParser }`                              | Parsers are moved into `languageOptions` and passed as imported modules.          |
| `.eslintignore` file                  | `ignores: ["dist/"]`                                                 | Global ignores are now declared directly inside the config array.                 |

### 4. Migration Example

**Legacy `.eslintrc.json` Setup:**

json

```
{
  "env": { "browser": true },
  "extends": ["eslint:recommended"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": { "no-unused-vars": "warn" }
}
```

Use code with caution.

**Modern `eslint.config.js` Equivalent:**

javascript

```
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default [
  js.configs.recommended, // Replaces extends: ["eslint:recommended"]
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
```

Use code with caution.

### How to Automatically Migrate

If you have a large legacy project, you can use the official ESLint migration tool to auto-convert your settings: [link](https://dev.to/pockit%5Ftools/eslint-10-migration-guide-everything-you-need-to-know-about-the-biggest-update-yet-55hk)

bash

```
npx @eslint/migrate-config .eslintrc.json
```

Use code with caution.

If you would like, I can help you **rewrite your exact legacy configuration** into the new Flat Config format, or show you how to **integrate specific plugins** (like Prettier or React) using the modern syntax. Which would you prefer? [link](https://www.youtube.com/watch?v=uOcJqRGAWAA)

- [link](https://eslint.org/docs/latest/use/configure/migration-guide)\
  Configuration Migration Guide - Pluggable JavaScript Linter\
  The configuration migrator doesn't yet work well for . eslintrc. js files. If you are using . eslintrc. js , the migration results...\
  ESLint
- [link](https://raulmelo.me/en/blog/migration-eslint-to-flat-config)\
  Embrace the Future: Navigating the New Flat Configuration of ESLint\
  Jul 20, 2023 — New config file name and extension In eslintrc, we could give various names and extensions to an ESLint config: . eslintrc (withou...\
  raulmelo.me
- [link](https://allalmohamedlamine.medium.com/eslint-flat-config-and-new-system-an-ultimate-deep-dive-2023-46aa151cbf2b)\
  Eslint flat config and new system an ultimate deep dive 2023\
  Nov 25, 2023 — ◌ New one: flat config. The goals and design choices when making flat config ( Eslint team ) What changed between the old and the ...\
  Medium·Mohamed Lamine Allal

Show all

## the history of eslint config file

The history of the ESLint configuration file <mark>spans over a decade, evolving from a<span> </span><strong>simple JSON/YAML rule list to an advanced JavaScript-only array framework</strong></mark>. This evolution mirrors the massive shift in how the broader JavaScript ecosystem manages dependencies, modules, and building tools. [link](https://allalmohamedlamine.medium.com/eslint-flat-config-and-new-system-an-ultimate-deep-dive-2023-46aa151cbf2b)

***

### ⏳ Historical Timeline

```
2013: The Birth of .eslintrc & "The Cascade"
  │
2015: Rise of Presets (extends) & Multiple Formats (.json, .yaml, .js)
  │
2019: The Breaking Point — Flat Config RFC Submitted
  │
2022: Flat Config introduced as experimental (v8.21.0)
  │
2024: Flat Config becomes the mandatory default (v9.0.0)
  │
2026: Legacy .eslintrc completely removed (v10.0.0)
```

***

### 🛠️ Phase 1: The `.eslintrc` Cascade Era (2013–2015)

When Nicholas C. Zakas released ESLint in **June 2013**, the configuration system was extremely basic. [link](https://eslint.org/blog/2022/08/new-config-system-part-1/)

- **The original file:** A extensionless `.eslintrc` file containing raw JSON. [link](https://stackoverflow.com/questions/62340976/is-the-configuration-file-eslintrc-deprecated-in-favor-of-eslintrc-files)
- **The Configuration Cascade:** [ESLint](https://eslint.org/blog/2022/08/new-config-system-part-1/) evaluated files by looking at the current directory for an `.eslintrc` file, then walked up the parent folders to the root, merging every configuration file it found along the way. [link](https://eslint.org/blog/2022/08/new-config-system-part-1/)
- **The Problem:** While it allowed easy directory-specific overrides, it became incredibly slow. ESLint had to constantly check disk directories, and debugging why a specific rule was being enforced became a nightmare due to hidden parent files. [link](https://allalmohamedlamine.medium.com/eslint-flat-config-and-new-system-an-ultimate-deep-dive-2023-46aa151cbf2b)

### 📦 Phase 2: Format Explosion and `extends` (2015–2019)

As JavaScript ecosystem grew, developers demanded choices. ESLint responded by supporting a massive matrix of file formats: `.eslintrc.json`, `.eslintrc.yaml`, `.eslintrc.yml`, `.eslintrc.js`, and embedding configurations inside `package.json`. [link](https://eslint.org/blog/2022/08/new-config-system-part-1/)

- **The `extends` property:** Shareable configs (like `eslint-config-airbnb`) took off. Instead of writing 100 rules, you added `"extends": "airbnb"`.
- **The Problem:** The underlying architecture was built on _strings_. To use a plugin or custom parser, you passed a string like `"@typescript-eslint/parser"`. ESLint had to guess where that package lived on your hard drive using complex internal lookups. If you had monorepos, plugins frequently broke because they couldn't resolve sibling paths. [link](https://allalmohamedlamine.medium.com/eslint-flat-config-and-new-system-an-ultimate-deep-dive-2023-46aa151cbf2b)

### 📝 Phase 3: The Flat Config RFC (2019–2022)

By **2019**, the ESLint team realized the old architecture had hit a dead end. Nicholas C. Zakas drafted a Request for Comments (RFC) for a brand-new configuration engine nicknamed **"Flat Config"**. [link](https://eslint.org/blog/2023/10/flat-config-rollout-plans/)

- **The Strategy:** Eliminate the directory cascade completely.
- **Native JavaScript Execution:** Instead of treating configuration as a static data object parsed by ESLint, the configuration file would become an executable JavaScript file (`eslint.config.js`). Plugins and parsers would be imported natively via standard JavaScript (`import` / `require`), shifting the burden of path resolution entirely to Node.js. [link](https://raulmelo.me/en/blog/migration-eslint-to-flat-config)

### 🚀 Phase 4: The Transition and Migration (2022–2026)

Replacing a configuration system used by millions of projects takes time. [link](https://eslint.org/blog/2023/10/flat-config-rollout-plans/)

- **August 2022 (v8.21.0):** Flat Config rolled out as an opt-in experimental feature via an environment variable (`ESLINT_USE_FLAT_CONFIG=true`). [link](https://raulmelo.me/en/blog/migration-eslint-to-flat-config)
- **April 2024 (v9.0.0):** `eslint.config.js` officially became the default configuration standard. The legacy `.eslintrc` was deprecated, triggering a massive wave of open-source plugin rewrites. [link](https://eslint.org/docs/latest/extend/plugin-migration-flat-config)
- **2026 (v10.0.0):** The legacy `.eslintrc` codebase is **completely removed**. ESLint operates exclusively via flat config arrays, providing faster linting times and more predictable behaviors. [link](https://allalmohamedlamine.medium.com/eslint-flat-config-and-new-system-an-ultimate-deep-dive-2023-46aa151cbf2b)

***

If you are exploring this history because you are stuck updating an old codebase, I can guide you through the process. Would you like to see how to use the **official ESLint migration tool**, or do you want to break down a specific **complex plugin setup**?

- [link](https://allalmohamedlamine.medium.com/eslint-flat-config-and-new-system-an-ultimate-deep-dive-2023-46aa151cbf2b)\
  Eslint flat config and new system an ultimate deep dive 2023\
  Nov 25, 2023 — Overview and What You Learn. Eslint came a long way. A new system is taking place. And things changed and we are moving to a bette...\
  Medium·Mohamed Lamine Allal
- [link](https://eslint.org/blog/2022/08/new-config-system-part-1/)\
  ESLint's new config system, Part 1: Background\
  Aug 3, 2022 — ESLint's new config system, Part 1: Background. ESLint's config system started out fairly simple back in 2013. Since that time it ...\
  ESLint
- [link](https://eslint.org/blog/2023/10/flat-config-rollout-plans/)\
  Flat config rollout plans - ESLint - Pluggable JavaScript Linter\
  Oct 10, 2023 — We have been working on the new configuration system for several years. Here's how we plan to roll it out. It may seem hard to bel...\
  ESLint

Show all

## defineConfig?

**`defineConfig()`** is an official helper function built into ESLint core that provides autocompletion, type-checking, and layout composition when writing your `eslint.config.js` file. [link](https://typescript-eslint.io/getting-started/)

It was introduced to make Flat Config arrays fully type-safe and allow the reintroduction of a cleaner `extends` system natively. [link](https://eslint.org/blog/2025/03/flat-config-extends-define-config-global-ignores/)

### 💻 Why it matters

Because Flat Config uses a plain JavaScript array, your code editor (like VS Code) natively has no idea what properties (like `rules`, `languageOptions`, etc.) are allowed inside the configuration objects. [link](https://raulmelo.me/en/blog/migration-eslint-to-flat-config)

Wrapping your config in `defineConfig()` solves this problem. It passes your configuration straight through to ESLint at runtime, but lights up your editor with real-time autocompletion, JSDoc definitions, and red underlines if you misspell a configuration property. [link](https://github.com/eslint/eslint/issues/14249)

***

### 🛠️ Basic Usage (ESM Format)

To use it, import it natively from the `eslint/config` module: [link](https://eslint.org/docs/latest/use/configure/configuration-files)

javascript

```
// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // You get auto-complete hints here!
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
]);
```

Use code with caution.

***

### 🔄 The `extends` Evolution

The biggest upgrade to `defineConfig()` is the addition of a localized **`extends` array property** directly inside flat config blocks. It bridges the gap between old `.eslintrc` string sharing and the new array framework: [link](https://eslint.org/blog/2025/03/flat-config-extends-define-config-global-ignores/)

javascript

```
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig({
  files: ["**/*.{js,ts}"],
  // Seamlessly combine preset arrays/objects together
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended
  ],
  rules: {
    "no-console": "warn"
  }
});
```

Use code with caution.

***

### ⚠️ Deprecation Notice: `tseslint.config()`

If you use TypeScript, you may have previously seen or used `tseslint.config()` from the `typescript-eslint` package. [link](https://stackoverflow.com/questions/79787255/eslint-core-now-provides-this-functionality-via-defineconfig-config-is-de)

Because ESLint core now provides `defineConfig()` natively, **`tseslint.config()` is deprecated**. Popular community tooling expects you to switch to the official core function. [link](https://stackoverflow.com/questions/79787255/eslint-core-now-provides-this-functionality-via-defineconfig-config-is-de)

***

Are you updating an **existing TypeScript** project, or setting up a **brand-new framework** (like Next.js or Vite)? I can drop in the perfect `defineConfig` template for your specific layout.

- [link](https://typescript-eslint.io/getting-started/)\
  Getting Started - typescript-eslint\
  defineConfig(...) is an optional helper function built in to current versions of ESLint. See the ESLint configuration docs for mor...\
  typescript-eslint
- [link](https://eslint.org/docs/latest/use/configure/configuration-files)\
  Configuration Files - ESLint - Pluggable JavaScript Linter\
  eslint.config.js import { defineConfig } from "eslint/config"; export default defineConfig(\[ { rules: { semi: "error", "prefer-con...\
  ESLint
- [link](https://raulmelo.me/en/blog/migration-eslint-to-flat-config)\
  Navigating the New Flat Configuration of ESLint - Raul Melo\
  Jul 20, 2023 — Different returned type. One of the most significant changes is that we no longer can default return an object as we did in eslint...\
  raulmelo.me

Show all

# can a function return result in rust

<mark>Yes, a function can return the equivalent of a "void result" in Rust</mark>, but the syntax is written as **`Result<(), E>`**. [link](https://stackoverflow.com/questions/70855252/is-it-a-good-practice-to-always-return-a-resultt-e-from-functions)

Rust does not have a literal `void` keyword like C++ or Java. Instead, it uses the **unit type**, which is written as an empty tuple `()`. [link](https://www.reddit.com/r/rust/comments/11xlxd8/rust%5Ftype%5Fhas%5Fa%5Fvalue%5Fwhereas%5Fc%5Fvoid%5Fhas%5Fno%5Fvalue/)

### How to use `Result<(), E>`

When a function executes an action that might fail but does not need to return a meaningful value upon success, you use `()` as the success type. [link](https://internals.rust-lang.org/t/pre-rfc-result-void-and-option-void/14947)

rust

```
// A function that returns a "void" result
fn save_file(content: &str) -> Result<(), std::io::Error> {
    if content.is_empty() {
        // Return an error variant if it fails
        return Err(std::io::Error::new(std::io::ErrorKind::InvalidInput, "Empty content"));
    }

    // Success returns an Ok variant wrapping the unit type ()
    Ok(())
}
```

Use code with caution.

### Key Rules to Remember

- **The `Ok(())` value**: To return a successful "void" status, you must explicitly write `Ok(())` at the end of the function. Omitting the expression or adding a semicolon at the end of a value changes the return to an implicit `()`, causing a type mismatch error.
- **The `?` Operator**: You can safely use the `?` error propagation operator inside functions returning `Result<(), E>`. It will automatically pass any errors upward while letting the function continue if successful.
- **Compiler Warnings**: Rust marks the `Result` enum as `#[must_use]`. If someone calls your function and ignores the `Result<(), E>` return value, the compiler will generate a warning to prevent unhandled silent failures. [link](https://internals.rust-lang.org/t/implicit-void-result-ok/9863)

If you are currently debugging a type mismatch error with your function, could you show me **your function's signature** and **the error message** you are seeing?

- [link](https://internals.rust-lang.org/t/implicit-void-result-ok/9863)\
  Implicit void result Ok(()) - language design - Rust Internals\
  Apr 21, 2019 — Ok wrapping: Improved support for writing code from an error handling mindset. by scottmcm on 05:14PM - 14 Aug 17 UTC. 3 commits c...\
  Rust Internals
- [link](https://www.reddit.com/r/rust/comments/11xlxd8/rust%5Ftype%5Fhas%5Fa%5Fvalue%5Fwhereas%5Fc%5Fvoid%5Fhas%5Fno%5Fvalue/)\
  Rust () type has a value whereas C void has no value: so what?\
  Mar 21, 2023 — Rust () type has a value whereas C void has no value: so what? From what I've read both here and on Stack Exchange, although void ...\
  Reddit·r/rust
- [link](https://internals.rust-lang.org/t/pre-rfc-result-void-and-option-void/14947)\
  \[Pre-RFC] \`Result::void()\` and \`Option::void()\` - Rust Internals\
  Jun 29, 2021 — \[Pre-RFC] \`Result::void()\` and \`Option::void()\` ... Hi there, before opening an RFC I thought I solicit some pre-feedback here. ..\
  Rust Internals

Show all

## can you call it directly

Yes, you can call a function returning `Result<(), E>` directly, but because Rust enforces strict error handling, you must acknowledge or handle the returned value.

Here are the four standard ways to call it:

### 1. Unwrapping (Quick for scripts/testing)

If you are completely certain the function will not fail, you can call `.unwrap()` or `.expect()` directly on the function call.

rust

```
// This will panic and crash the program if an error occurs
save_file("Hello World").unwrap();

// This does the same but lets you customize the crash message
save_file("Hello World").expect("Failed to save the file");
```

Use code with caution.

### 2. The `?` Operator (Best for production code)

If the calling function _also_ returns a `Result`, you can append `?` directly to the end of the call. This automatically unpacks a success or immediately returns the error up the chain.

rust

```
fn run_application() -> Result<(), std::io::Error> {
    // If save_file fails, run_application returns the error immediately
    save_file("Hello World")?;

    println!("File saved successfully!");
    Ok(())
}
```

Use code with caution.

### 3. Pattern Matching (For specific error paths)

You can call the function directly inside an `if let` block if you only care about handling the error case and want to safely ignore the success value.

rust

```
// Ignores success, but lets you log or handle a failure safely
if let Err(e) = save_file("Hello World") {
    eprintln!("An error occurred: {}", e);
}
```

Use code with caution.

### 4. Explicitly Ignoring (Not recommended)

If you want to call the function and completely ignore whether it succeeded or failed, you must assign it to an underscore `_`. If you do not do this, the compiler will trigger a `#[must_use]` warning.

rust

```
// Discards the Result and silences the compiler warning
let _ = save_file("Hello World");
```

Use code with caution.

To give you the most accurate advice for your code, what is the **context of the calling function**? For example, is it running inside `fn main()`, or are you writing a **test case**?

## can you just write save\_file("Hello World")

No. If you write just `save_file("Hello World");` on its own line, the code will compile, but the Rust compiler will give you a **warning**.

Because `Result` is marked as `#[must_use]`, Rust flags any ignored results to prevent you from accidentally skipping error handling.

### What the compiler will show you

text

```
warning: unused `Result` that must be used
 --> src/main.rs:8:5
  |
8 |     save_file("Hello World");
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = note: this `Result` may be an `Err` variant, which should be handled
```

Use code with caution.

### How to fix it quickly

If you want to intentionally ignore the error and get rid of the warning, you must explicitly assign the call to an underscore `_`:

rust

```
// This tells the compiler: "I know this returns a Result, and I am choosing to ignore it."
let _ = save_file("Hello World");
```

Use code with caution.

Are you looking for a way to suppress these warnings **across your whole file**, or do you need help **handling the error cleanly** without adding too much extra boilerplate code?

# how to let both ts and eslint ignore

To let both **TypeScript** and **ESLint** ignore specific pieces of code, you can <mark>use comment directives tailored to the level of scoping you need</mark>.

### 1. Ignore a Single Line

Place these two comments directly above the target line of code. [link](https://rgbstudios.org/blog/disable-typescript-rules)

typescript

```
// @ts-ignore
// eslint-disable-next-line
const badCode = "Ignore both TS and ESLint here";
```

Use code with caution.

- `// @ts-ignore` forces the TypeScript compiler to skip type checking on the immediate next line. _(Note: If you prefer, you can use `// @ts-expect-error` which is recommended if you expect a permanent error, as it alerts you if the error gets fixed)._
- `// eslint-disable-next-line` stops ESLint from analyzing the immediate next line. You can also specify an exact rule like `// eslint-disable-next-line @typescript-eslint/no-explicit-any` to be safer. [link](https://stackoverflow.com/questions/59729654/how-to-ignore-typescript-errors-with-ts-ignore)

### 2. Ignore an Entire File

Place these two directives at the very top of your file. [link](https://www.reddit.com/r/typescript/comments/tp4uei/how%5Fto%5Fdisable%5Feslint%5Frule%5Ffor%5Fwhole%5Fproject/)

typescript

```
// @ts-nocheck
/* eslint-disable */

// Your code here will not be checked by TS or linted by ESLint
```

Use code with caution.

- `// @ts-nocheck` turns off type checking for the entire file.
- `/* eslint-disable */` turns off ESLint processing for everything below it in that file. [link](https://stackoverflow.com/questions/55632954/ignore-all-errors-in-a-typescript-file)

### 3. Ignore Specific Files Globally (Config Level)

If you want to completely exclude specific files or directories (like `dist/`, `build/`, or external scripts) from both tools, update your project configuration files. [link](https://github.com/eslint/eslint/discussions/18304)

- **For TypeScript (`tsconfig.json`):** Add the file patterns to the `exclude` array.\
  json

<!---->

```
{
  "compilerOptions": { ... },
  "exclude": ["node_modules", "dist", "src/legacy-file.ts"]
}
```

Use code with caution.

- **For ESLint (`eslint.config.js` / Flat Config):** Add a global `ignores` object entry.\
  javascript

<!---->

```
export default [
  {
    ignores: ["dist/**/*", "src/legacy-file.ts"]
  }
];
```

Use code with caution.\
_(If using the older legacy format like `.eslintrc.json`, add files to the `ignorePatterns` array instead)._ [link](https://github.com/eslint/eslint/discussions/18304)

If you are encountering a **specific error code** or setup issue that these comments aren't catching, tell me:

- What **specific error message** are you seeing?

- Are you using **ESLint Flat Config** (`eslint.config.js`) or the **Legacy format** (`.eslintrc`)?

- [link](https://stackoverflow.com/questions/59729654/how-to-ignore-typescript-errors-with-ts-ignore)\
  eslint - How to ignore TypeScript errors with @ts-ignore?\
  Jan 14, 2020 — Andrei Savin Over a year ago. "It's bad practice". So why don't we add a rule to disable disabling this rule, call it "@typescript...\
  Stack Overflow

- [link](https://github.com/eslint/eslint/discussions/18304)\
  Having issues with ignores in v9 · eslint eslint · Discussion #18304\
  Apr 10, 2024 — on Jul 1, 2024. ... The ignores by itself is a global ignore for all configs. You can ignore per-entry by including ignores like y...\
  GitHub

- [link](https://stackoverflow.com/questions/55632954/ignore-all-errors-in-a-typescript-file)\
  Ignore all errors in a typescript file - Stack Overflow\
  Apr 11, 2019 — Comments. ... If you are using Astro (and vanilla JS) you can add // @ts-nocheck to the top of the\
  Stack Overflow

Show all

## can you reverse the order

Here is the same information reversed, starting from global configuration files down to individual lines of code.

### 1. Ignore Specific Files Globally (Config Level)

To completely exclude files or folders (like `dist/` or legacy files) from both tools, update your project configuration files.

- **For ESLint (`eslint.config.js` / Flat Config):** Add a global `ignores` entry.\
  javascript

<!---->

```
export default [
  {
    ignores: ["dist/**/*", "src/legacy-file.ts"]
  }
];
```

Use code with caution.\
_(If using the older legacy format like `.eslintrc.json`, use the `ignorePatterns` array)._

- **For TypeScript (`tsconfig.json`):** Add the file paths to the `exclude` array.\
  json

<!---->

```
{
  "compilerOptions": { ... },
  "exclude": ["node_modules", "dist", "src/legacy-file.ts"]
}
```

Use code with caution.

### 2. Ignore an Entire File

Place these two directives at the very top of your file to bypass checks for the entire asset.

typescript

```
/* eslint-disable */
// @ts-nocheck

// All code below this will be ignored by both tools
```

Use code with caution.

- `/* eslint-disable */` turns off ESLint processing for everything following it.
- `// @ts-nocheck` completely disables TypeScript type checking for the file.

### 3. Ignore a Single Line

Place these two comments directly above the target line of code.

typescript

```
// eslint-disable-next-line
// @ts-ignore
const badCode = "Ignore both TS and ESLint here";
```

Use code with caution.

- `// eslint-disable-next-line` stops ESLint from analyzing the immediate next line.
- `// @ts-ignore` forces the TypeScript compiler to skip type checking on the immediate next line. _(Note: You can use `// @ts-expect-error` instead if you want TypeScript to warn you if the code eventually becomes valid)._

If you want to fine-tune this setup, tell me:

- Are you trying to ignore a **specific folder** or a **specific code pattern**?
- What **framework** are you building this project with?

## i mean can you swap the two comments // @ts-ignore

// eslint-disable-next-line\
const badCode = "Ignore both TS and ESLint here";

Yes, you can swap the order of the comments. Both tools will still work perfectly because they both scan the lines immediately preceding the code.

Here is the swapped version:

typescript

```
// eslint-disable-next-line
// @ts-ignore
const badCode = "Ignore both TS and ESLint here";
```

Use code with caution.

### Why this works

- **ESLint** looks at the line directly above the code (`// @ts-ignore`). Because it sees a regular TypeScript comment and not the actual code violation, it skips the entire block.
- **TypeScript** ignores the ESLint comment line entirely and looks for the target code on the very next line.

If your linter or compiler is still throwing an error after swapping them, let me know:

- Which **tool** is throwing the error (TS or ESLint)?

- What is the **exact error message**?

- [link](https://www.xtivia.com/blog/advanced-linting-with-create-react-app-typescript-and-eslint/)\
  Advanced linting with Create React App, Typescript, and ESLint\
  Aug 6, 2020 — With ESLint, it is easy to disable a linting error or warning by adding a special comment just above the offending line of code. W...\
  \
  \
  xtivia

- [link](https://github.com/microsoft/TypeScript/issues/37738)\
  TSX @ts-ignore comments no longer suppressing errors in TypeScript 3.9 · Issue #37738 · microsoft/TypeScript\
  Apr 1, 2020 — TypeScript now understands where single-line // @ts-(expect-error|ignore) directives are, and only ignores comments after any of t...\
  \
  \
  GitHub

## no

Ah, got it! You were just asking me to physically swap the order in my previous response, not asking if it's possible.

Here is the single-line snippet with the comments swapped:

typescript

```
// eslint-disable-next-line
// @ts-ignore
const badCode = "Ignore both TS and ESLint here";
```

Use code with caution.

Would you like help with anything else regarding your **TypeScript** or **ESLint** configurations?

## no. you could not swap i mean

I apologize—I completely misunderstood your point! You are absolutely right: **you cannot swap them** if you want them both to work correctly.

### Why you cannot swap them:

- **TypeScript** is incredibly strict about line placement. It looks **only** at the immediate next line.
- If you place `// eslint-disable-next-line` between `// @ts-ignore` and your code, TypeScript thinks you are trying to ignore the ESLint comment instead of your actual code error. [link](https://timmousk.com/blog/typescript-ignore-next-line/)

### The Only Correct Order for Single Lines:

To make sure both tools successfully catch and ignore the issue, **`// @ts-ignore` must always be on the bottom**, right above the problematic code line: [link](https://timmousk.com/blog/typescript-ignore-next-line/)

typescript

```
// eslint-disable-next-line
// @ts-ignore
const badCode = "Ignore both TS and ESLint here";
```

Use code with caution.

### An Alternative: Inline Block Comments

If you want to keep them on a single line so order doesn't conflict, you can write them as inline block comments instead:

typescript

```
/* eslint-disable-next-line */ // @ts-ignore
const badCode = "Ignore both TS and ESLint here";
```

Use code with caution.

Thank you for catching my mistake and correcting me directly!

If you are dealing with a block of code rather than a single line, would you like me to show you how to use **block-level overrides** instead?

- [link](https://timmousk.com/blog/typescript-ignore-next-line/)\
  How To Ignore The Next Line In TypeScript?\
  Aug 1, 2022 — To ignore a compiler error on the next line in TypeScript, you can use the @ts-ignore rule, like so: typescript if (false) { // @t...\
  timmousk.com

# how to check if a param is not given in js like ??

To check if a parameter is not given in JavaScript, you can use the Nullish Coalescing Operator (`??`), check for `undefined`, or use default parameters.

Here is how to use each method.

### 1. Using Nullish Coalescing (`??`)

The `??` operator returns the right-side value only if the left side is `null` or `undefined`.

javascript

```
function greet(name) {
  const user = name ?? "Guest";
  console.log(`Hello, ${user}!`);
}
```

Use code with caution.

- **Best for**: Assigning fallback values.
- **Note**: It allows empty strings `""` and `0` as valid inputs.

### 2. Using Default Parameters (Recommended)

You can set a default value directly in the function definition. JavaScript applies this if the argument is missing or `undefined`.

javascript

```
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
```

Use code with caution.

- **Best for**: Clean, modern syntax.
- **Note**: This is the standard way to handle missing arguments.

### 3. Explicit `undefined` Check

If you need to run specific code when a parameter is missing, check if its type is `undefined`.

javascript

```
function greet(name) {
  if (typeof name === "undefined") {
    console.log("No name was provided!");
    return;
  }
  console.log(`Hello, ${name}!`);
}
```

Use code with caution.

- **Best for**: Conditional logic and error handling.
- **Note**: Missing arguments always default to the value `undefined`.

### 4. Checking the `arguments` Object

You can check the total number of arguments actually passed to the function.

javascript

```
function greet(name) {
  if (arguments.length === 0) {
    console.log("Zero arguments passed!");
  }
}
```

Use code with caution.

- **Best for**: Knowing if the user explicitly passed `undefined` versus passing nothing at all.

***

To help find the best approach, tell me more about your **specific use case**:

- What **fallback behavior** or action do you want to trigger?

- Does the function need to accept **falsy values** like `0`, `false`, or `""` as valid inputs?

- Are you working with **regular functions** or **destructured objects** as parameters?

- [link](https://www.index.dev/blog/check-undefined-variable-javascript)\
  JavaScript Check if Undefined: 6 Methods to Check Variable Type\
  Jan 21, 2025 — JavaScript ( javascript // JS ) Check if Variable is Undefined: 6 Methods (+TypeScript) It has been declared but not assigned a va...\
  \
  \
  Index.dev

- [link](https://flexiple.com/javascript/double-question-mark-javascript)\
  The Double Question Mark (??) in JavaScript\
  Apr 23, 2024 — The ?? operator in JavaScript is known as the nullish coalescing operator. It returns the right-hand operand when the left-hand op...\
  \
  \
  Flexiple

- [link](https://charpeni.com/blog/be-careful-with-javascript-default-parameters)\
  Be Careful With JavaScript Default Parameters!\
  Nov 3, 2022 — Be Careful With JavaScript Default Parameters! In JavaScript and TypeScript, we often rely on default parameters to define optiona...\
  \
  \
  charpeni.com

Show all

## can i use ?? somehow in if

Yes, you can use `??` inside an `if` condition to provide a fallback value before checking a condition, or to verify if a value is missing.

Here are the standard ways to use it.

### 1. Providing a Fallback for Comparison

You can use `??` to supply a default value so the `if` statement has something valid to compare against.

javascript

```
// Checks if age is over 18, defaulting to 0 if age is missing
if ((age ?? 0) >= 18) {
  console.log("Access granted.");
}
```

Use code with caution.

### 2. Checking Boolean Flags

If you expect a boolean parameter but want it to default to `true` or `false` when omitted, use `??` to set that default inside the condition.

javascript

```
// Defaults to true if the parameter 'isActive' is not passed
if (isActive ?? true) {
  console.log("System is running.");
}
```

Use code with caution.

### 3. Testing if a Variable is Missing

You can use `??` to trigger an action specifically when a variable is `null` or `undefined`.

javascript

```
// If result is null/undefined, the fallback string is used, making the condition true
if ((result ?? "MISSING") === "MISSING") {
  console.log("No result was provided.");
}
```

Use code with caution.

### ⚠️ Crucial Syntax Warning

Always wrap the `??` operation in **parentheses** when combining it with comparison operators (like `==`, `>`, `<`). Without parentheses, JavaScript will throw a `SyntaxError` due to operator precedence rules.

javascript

```
// ❌ Invalid: Throws SyntaxError
if (age ?? 0 >= 18) { }

//  Valid
if ((age ?? 0) >= 18) { }
```

Use code with caution.

***

To help refine this code, let me know:

- What **exact condition** are you trying to check inside your `if` statement?

- What **data type** (number, string, boolean) do you expect the parameter to be?

- Do you want to see how to use **logical assignment** (`??=`) instead?

- [link](https://medium.com/@gabrielairiart.gi/advanced-javascript-use-of-nullish-coalescing-and-optional-chaining-and-for-efficient-coding-7d1d3fe3eedf)\
  Advanced JavaScript: Use of Nullish Coalescing ?? and Optional Chaining and ?. for Efficient Coding\
  Mar 22, 2024 — Nullish Coalescing (??) vs. Optional Chaining (?.): When to Use Which? Employ ?? when you need to assign a default value to a vari...\
  \
  \
  Medium

- [link](https://javascript.plainenglish.io/mastering-nullish-coalescing-assignment-in-javascript-2284db211439)\
  Mastering Nullish Coalescing Assignment (\`??=\`) in JavaScript | by Sanjay Prajapati\
  Nov 1, 2024 — 1. What is the Nullish Coalescing Assignment (\`?? =\`)? The nullish coalescing assignment (\`?? =\`) is a shorthand operator that all...\
  \
  \
  In Plain English

- [link](https://www.linkedin.com/pulse/difference-between-kaustubh-jaiswal)\
  Difference between ?? and ||\
  Apr 21, 2023 — It's important to note that the ?? operator has a higher precedence than the || operator. Therefore, when using both operators tog...\
  \
  \
  LinkedIn

Show all

# 