# how to ban undefined and null in eslint

To ban both `undefined` and `null` in ESLint, use the core **`no-restricted-syntax`** rule. This rule allows you to target specific Abstract Syntax Tree (AST) nodes and completely block them from your codebase. \[[1](https://github.com/eslint/eslint/issues/12177), [2](https://github.com/eslint/eslint/issues/6701)]

Configuration

Add the following configuration to your `eslint.config.js` (Flat Config) file: \[[1](https://eslint-plugin-vue-i18n.intlify.dev/started)]

javascript

```
export default [
  {
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          "selector": "Identifier[name='undefined']",
          "message": "The use of 'undefined' is forbidden. Use an alternative pattern."
        },
        {
          "selector": "Literal[value=null]",
          "message": "The use of 'null' is forbidden. Use an alternative pattern."
        }
      ]
    }
  }
];
```

Use code with caution.

Alternative Options

If you prefer specialized community plugins instead of raw syntax selectors, you can install dedicated tools:

- **For `null`**: Install [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md) and enable the `unicorn/no-null` rule.
- **For `undefined`**: Enable the native [no-undefined](https://eslint.org/docs/latest/rules/no-undefined) core rule. \[[1](https://eslint.org/docs/latest/rules/no-undefined), [2](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md), [3](https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1684), [4](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undefined)]

If you are working with TypeScript types, ensure your `tsconfig.json` has `strictNullChecks: true` enabled to prevent hidden or implicit null/undefined values from bypassing your checks. \[[1](https://stackoverflow.com/questions/72348969/is-there-a-way-to-configure-eslint-to-catch-bad-use-of-null-like-values-in-types), [2](https://www.youtube.com/watch?v=EvcOwjYR2tQ\&t=1)]

Would you like help adapting this to a **legacy `.eslintrc` format**, or do you need assistance setting up **custom fixers** for these rules?

- [link](https://github.com/eslint/eslint/issues/12177)\
  Rule proposal: no-null (revisited) #12177 - eslint/eslint - GitHub\
  Aug 27, 2019 — nzakas commented. nzakas. on Sep 3, 2019. Member. Hi everyone - A while ago the ESLint team made the decision that we would no lon...\
  GitHub
- [link](https://github.com/eslint/eslint/issues/6701)\
  Rule proposal: no-null · Issue #6701 · eslint/eslint - GitHub\
  Jul 18, 2016 — There already exists a companion rule no-undefined which enforces an opposite practice: never using undefined . Though the docs of...\
  GitHub
- [link](https://stackoverflow.com/questions/72348969/is-there-a-way-to-configure-eslint-to-catch-bad-use-of-null-like-values-in-types)\
  Is there a way to configure ESLint to catch bad use of null-like ...\
  May 23, 2022 — 3 Answers. Sorted by: 5. +250. This answer has been awarded bounties worth 250 reputation by Community. You can use TypeScript dir...\
  Stack Overflow

Show all

# how to ignore a file via a comment

How you ignore a file via a comment depends entirely on the specific tool you are using, as **most developer tools require custom syntax keywords** inside code comments to skip a file. \[[1](https://filestage.io/blog/comment-on-pdf/)]

Here is how to do it across the most common code quality, formatting, and security tools.

Code Linters & Formatters

- **ESLint**: Add `/* eslint-disable */` at the very top of your JavaScript or TypeScript file to halt linting for the entire file.
- **Prettier**: Use a `/* prettier-ignore */` comment at the top of code files, or for HTML and Markdown files.
- **Stylelint**: Add `/* stylelint-disable */` at the beginning of your CSS or SCSS file.
- **Oxlint**: Place an `/* oxlint-disable */` comment at the top of your file.
- **Ruff**: Add `# ruff: noqa` or `# noqa` at the top of your Python file to bypass linting rules. \[[1](https://stylelint.io/user-guide/ignore-code), [2](https://oxc.rs/docs/guide/usage/formatter/ignore-comments), [3](https://prettier.io/docs/ignore), [4](https://oxc.rs/docs/guide/usage/linter/ignore-comments), [5](https://github.com/astral-sh/ruff/issues/2446)]

Security & Static Analysis (SAST)

- **Semgrep**: Add a `# nosemgrep` or `// nosemgrep` comment at the top of the file to bypass scanning.
- **SonarQube / SonarCloud**: Add `// NOSONAR` at the top of your file or on specific lines to turn off analysis. \[[1](https://semgrep.dev/docs/ignoring-files-folders-code)]

Version Control (Git)

Git **cannot** natively read code comments inside a file to determine if it should be ignored. \[[1](https://stackoverflow.com/questions/58360190/how-do-i-make-git-ignore-a-file-by-adding-a-comment-inside-that-file-instead-of)]

- To ignore files in Git, you must list the file path or extension inside a **`.gitignore`** text file placed in your project root.
- If you want to add an explanatory comment inside your `.gitignore` file, start the line with a **`#`** symbol. \[[1](https://stackoverflow.com/questions/8865848/how-to-add-a-comment-in-a-gitignore-file), [2](https://www.youtube.com/watch?v=gKWnufyBNQA\&t=1), [3](https://docs.github.com/en/get-started/git-basics/ignoring-files), [4](https://git-scm.com/docs/gitignore)]

text

```
# This is a comment inside a .gitignore file
secret_config.json
*.log
```

Use code with caution.

If you are using a tool not listed here, tell me **which software or programming language** you are working with, and I can give you the exact comment syntax you need!

- [link](https://stackoverflow.com/questions/8865848/how-to-add-a-comment-in-a-gitignore-file)\
  How to add a comment in a .gitignore file? - Stack Overflow\
  Jan 14, 2012 — \* 2 Answers. Sorted by: 963. Yes, you may put comments in there. They however must start at the beginning of a line. cf. https://g...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/58360190/how-do-i-make-git-ignore-a-file-by-adding-a-comment-inside-that-file-instead-of)\
  How do I make Git ignore a file by adding a comment inside ...\
  Oct 13, 2019 — "Say I want to tell Git not to track any files that contain the string //ignoreMe!, how can I do that?" -- add their names (and/or...\
  Stack Overflow
- [link](https://stylelint.io/user-guide/ignore-code)\
  Ignoring code - Stylelint\
  Configuration commands in non-standard syntax comments (e.g. // stylelint-disable ) are only minimally supported. They will only w...\
  Stylelint

Show all

You said: can i have /\* eslint-disable \*/ below #! line

**Yes**, you can place `/* eslint-disable */` directly below a `#!` (shebang) line.

In fact, you **must** place it below the shebang line, because the shebang must always be the absolute first line of the file to work correctly.

Example Usage

javascript

```
#!/usr/bin/env node
/* eslint-disable */

const secret_variable = "This file will not be linted";
console.log(secret_variable);
```

Use code with caution.

Why This Works

- **The OS Role**: The operating system reads the `#!` line to find the execution engine (like Node.js).
- **The ESLint Role**: ESLint skips the shebang line and reads the `/* eslint-disable */` comment as the first line of code, safely turning off linting for the rest of the file.

Would you like help configuring **ESLint rules** for specific files or folders using your `eslint.config.js` file instead?

# Oops! Something went wrong! :( ESLint: 10.3.0 Error: Error while loading rule '@typescript-eslint/no-floating-promises': You have used a rule which requires type information, but don't have parserOptions set to generate type information for this file. See https://tseslint.com/typed-linting for enabling linting with type information.

This error happens because ESLint is trying to run a TypeScript rule that needs to read your code's type definitions, but your config file does not tell ESLint where your TypeScript configuration (`tsconfig.json`) lives. \[[1](https://typescript.tv/hands-on/how-to-fix-eslint-parseroptionsproject-error/)]

Here is how to fix this quickly.

🛠️ The Fix for `eslint.config.js` (Flat Config / ESLint v9+) \[[1](https://github.com/WordPress/gutenberg/issues/55499)]

If you are using the modern flat configuration system, update your configuration object to include the `project` and `tsconfigRootDir` settings: \[[1](https://github.com/typescript-eslint/typescript-eslint/issues/10841)]

javascript

```
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // Highlight-start
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        // Highlight-end
      },
    },
  },
];
```

Use code with caution.

📄 The Fix for `.eslintrc.js` (Legacy Config / ESLint v8 and below)

If you are still using the older legacy configuration format, add the settings inside your `parserOptions` object:

javascript

```
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Highlight-start
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    // Highlight-end
  },
};
```

Use code with caution.

⚠️ Important Monorepo Check

If your project uses a monorepo setup (multiple folders with their own `tsconfig.json`), change the `project` value to `true` instead of a string path. This tells ESLint to automatically find the closest `tsconfig.json` file for every source file. \[[1](https://typescript-eslint.io/blog/parser-options-project-true/)]

javascript

```
project: true,
```

Use code with caution.

To give you the most accurate solution, could you share your **project structure** (is it a monorepo?) and your current **ESLint configuration file**?

- [link](https://typescript.tv/hands-on/how-to-fix-eslint-parseroptionsproject-error/)\
  How to Fix ESLint parserOptions.project Error\
  Dec 11, 2025 — The Error Message This error appears when you configure ESLint to use TypeScript's project information for type-aware linting rule...\
  \
  TypeScript TV
- [link](https://github.com/WordPress/gutenberg/issues/55499)\
  @wordpress/scripts lint-js not compatible with newer versions of ESLint (ESLint 9+) · Issue #55499 · WordPress/gutenberg\
  Oct 19, 2023 — The new eslint supports the eslint. config. js file called flat config .\
  \
  \
  GitHub
- [link](https://github.com/typescript-eslint/typescript-eslint/issues/10841)\
  Enhancement: Default \`tsconfigRootDir\` to the running flat config's directory if available · Issue #10841 · typescript-eslint/typescript-eslint\
  Feb 17, 2025 — With the advent of flat configs we could probably request that ESLint passes the config path as configPath: string | undefined to ...\
  \
  \
  GitHub

Show all

You said: Error \[ERR\_MODULE\_NOT\_FOUND]: Cannot find package '@typescript-eslint/parser' import

This error means Node.js cannot find the TypeScript parser package in your project's `node_modules` directory. You need to install it as a development dependency. \[[1](https://github.com/nodejs/help/issues/3700), [2](https://www.linkedin.com/advice/0/what-some-common-eslint-parser-errors-how)]

🛠️ The Fix

Run the appropriate command in your project terminal depending on your package manager:

**Using npm:**

bash

```
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Use code with caution.

**Using pnpm:**

bash

```
pnpm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Use code with caution.

**Using Yarn:**

bash

```
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Use code with caution.

🔍 Why This Happens

- **Missing Installation**: The package was referenced in your configuration file but never installed.
- **Corrupted Node Modules**: A previous installation might have failed or been interrupted.
- **Global vs Local**: ESLint is running locally but looking for plugins that only exist globally (or vice versa). \[[1](https://jsdev.space/howto/cannot-find-mem-fs/), [2](https://mhartington.io/post/typescript-eslint-setup/), [3](https://github.com/eslint/eslint/issues/13824)]

If installing the package doesn't instantly solve the error, could you tell me **which package manager** you are using and if this is a **monorepo** setup?

- [link](https://github.com/nodejs/help/issues/3700)\
  Error: Cannot find module 'typescript' from 'P:\FORGE\JPMC-tech-task-3-PY3\node\_modules' · Issue #3700 · nodejs/help\
  Jan 23, 2022 — It seems it's not able to find the typescript module from node\_modules , meaning that you don't have typescript installed.\
  \
  \
  GitHub
- [link](https://www.linkedin.com/advice/0/what-some-common-eslint-parser-errors-how)\
  How to Fix Common ESLint Parser Errors\
  Apr 17, 2023 — For example, you can use the @babel/eslint-parser or the @typescript-eslint/parser to parse your code with Babel or TypeScript, re...\
  \
  \
  LinkedIn
- [link](https://jsdev.space/howto/cannot-find-mem-fs/)\
  How to Solve: \`Cannot find package mem-fs imported from\` Error\
  Sep 22, 2024 — The error is almost always caused by a missing install, module mismatch, or corrupted node\_modules. Follow the steps above to reso...\
  \
  \
  jsdev.space

Show all

# can i rename eslint.config.mjs to eslint.config.js

**Yes, you can safely rename `eslint.config.mjs` to `eslint.config.js`** as long as your project is configured to treat `.js` files as ECMAScript Modules (ESM). ESLint natively recognizes both file names automatically. \[[1](https://eslint.org/docs/latest/use/configure/configuration-files), [2](https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67), [3](https://dev.to/pockit%5Ftools/eslint-10-migration-guide-everything-you-need-to-know-about-the-biggest-update-yet-55hk)]

When You Can Rename It

You can rename the file to `.js` if your `package.json` file contains the following setting: \[[1](https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67), [2](https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67)]

json

```
{
  "type": "module"
}
```

Use code with caution.

This configuration tells Node.js to treat all `.js` files in your project as ESM modules. Because modern [ESLint Flat Configs](https://eslint.org/docs/latest/use/configure/migration-guide) rely on ESM syntax (using `import` and `export default`), the code inside your config will execute successfully. \[[1](https://raulmelo.me/en/blog/migration-eslint-to-flat-config), [2](https://github.com/typescript-eslint/typescript-eslint/issues/4902), [3](https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67)]

When You Should NOT Rename It

Do not rename it if your `package.json` **lacks** `"type": "module"` (meaning your project defaults to CommonJS). \[[1](https://github.com/angular-eslint/angular-eslint/issues/1859)]

If you rename it to `.js` in a CommonJS project while keeping `import` and `export` syntax, running ESLint will throw an error:\
`Error [ERR_REQUIRE_ESM]: require() of ES Module... not supported`. \[[1](https://github.com/typescript-eslint/typescript-eslint/issues/4902)]

Summary of ESLint Config Extensions

If you prefer not to use `.mjs`, you have alternative options depending on your project type according to the [ESLint Configuration Files Guide](https://eslint.org/docs/latest/use/configure/configuration-files): \[[1](https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67)]

- **`eslint.config.mjs`**: Always works for ESM syntax, regardless of your `package.json` settings.
- **`eslint.config.js`**: Works for ESM syntax **only if** `"type": "module"` is set. Otherwise, it requires legacy CommonJS syntax (`require()` and `module.exports`).
- **`eslint.config.cjs`**: Explicitly forces CommonJS syntax. \[[1](https://github.com/eslint/eslint/issues/16580), [2](https://github.com/angular-eslint/angular-eslint/issues/1859), [3](https://raulmelo.me/en/blog/migration-eslint-to-flat-config), [4](https://eslint.org/docs/latest/use/configure/configuration-files), [5](https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67), [6](https://github.com/typescript-eslint/typescript-eslint/issues/4902)]

Would you like help checking your **package.json** setup, or are you running into a specific **parsing error** after renaming the file?

- [link](https://github.com/angular-eslint/angular-eslint/issues/1859)\
  \[@angular-eslint/schematics] Also provide ESModule syntax ...\
  Jun 1, 2024 — Activity. json-derulo commented. json-derulo. on Jun 1, 2024. Contributor. Angular projects don't have "type": "module" in their p...\
  GitHub
- [link](https://github.com/eslint/eslint/issues/16580)\
  Bug: \[flat config] \`.mjs\` extension for config file · Issue #16580 · eslint/ ...\
  Nov 23, 2022 — dburles commented. ... Since this is a bug report, I'm not sure if you're asking for ESLint to support ESM configs in commons js p...\
  GitHub
- [link](https://eslint.org/docs/latest/use/configure/configuration-files)\
  Configuration Files - ESLint - Pluggable JavaScript Linter\
  The ESLint configuration file may be named any of the following: \* config. js. \* config. mjs. \* config. cjs. \* config. ts (require...\
  ESLint

Show all

# why eslint does not ignore my temp folder. { files: \["\*\*/\*.js", "\*\*/\*.jsx", "\*\*/\*.ts", "\*\*/\*.tsx"], ignores: \[ "\*\*/legacy/\*\*", "\*\*/ref/\*\*", // read only references from other repos w .git removed "\*\*/temp/\*\*", ], },

ESLint is not ignoring your `temp` folder because your `ignores` keys are placed inside the same object block as your `files` keys.

In ESLint flat config (eslint.config.js), when an object contains both `files` and `ignores`, the ignores only apply to the files matched by _that specific object_. It acts as a filter, not a global ignore. \[[1](https://eslint.org/docs/latest/use/configure/configuration-files), [2](https://raulmelo.me/en/blog/migration-eslint-to-flat-config)]

Here is how to fix it based on your goals.

🛠️ Solution 1: Global Ignore (Recommended)

To completely ignore these folders across your entire project, place the `ignores` array in its own separate configuration object without a `files` key. \[[1](https://www.thecandidstartup.org/2024/07/15/bootstrapping-eslint.html), [2](https://github.com/eslint/eslint/issues/19235)]

javascript

```
export default [
  // Global ignores block
  {
    ignores: [
      "**/legacy/**",
      "**/ref/**",
      "**/temp/**",
    ],
  },
  // Your linting rules block
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    // Rules go here
  },
];
```

Use code with caution.

🛠️ Solution 2: Specific Ignore

If you only want to ignore these folders for this specific configuration block, add a trailing wildcard (`**`) to the patterns. Without it, ESLint may still look inside the directories.

javascript

```
{
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  ignores: [
    "**/legacy/**",
    "**/ref/**",
    "**/temp/**",
  ],
}
```

Use code with caution.

⚠️ Common Traps to Check

- **Dotfiles**: Global ignores do not match filenames starting with a dot (like `.temp`) unless you explicitly add `**/.*` patterns.
- **Command Line**: If you specifically run `npx eslint temp/file.js`, ESLint will lint that file anyway because explicit CLI paths override ignore patterns.

To help you get this working perfectly, let me know:

- What is the **exact name** of your ESLint configuration file?
- Are you still seeing errors in your terminal, or is your **IDE/editor** showing the errors?

I can provide the exact code block you need to copy and paste.

- [link](https://eslint.org/docs/latest/use/configure/configuration-files)\
  Configuration Files\
  Exclude files with ignores Here, the configuration object excludes files ending with . config. js except for eslint. config. js . ...\
  \
  \
  ESLint
- [link](https://raulmelo.me/en/blog/migration-eslint-to-flat-config)\
  Embrace the Future: Navigating the New Flat Configuration of ESLint\
  Jul 20, 2023 — No more ". eslintignore" Because Flat config is all about merging those config objects, it's very important to have those global i...\
  \
  \
  raulmelo.me
- [link](https://www.thecandidstartup.org/2024/07/15/bootstrapping-eslint.html)\
  Bootstrapping ESLint\
  Jul 15, 2024 — It turns out there's a special case if you want to globally ignore something. Put the ignore field in a config of its own without ...\
  \
  \
  The Candid Startup

Show all

# how to comment to let eslint ignore

You can let **ESLint** ignore specific rules or entire files using block or inline comments. \[[1](https://masteringjs.io/tutorials/eslint/ignore), [2](https://masteringjs.io/tutorials/eslint/ignore)]

Ignore the Next Line \[[1](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html)]

Place this comment directly **above** the line you want to ignore. \[[1](https://stackoverflow.com/questions/27732209/turning-off-an-eslint-rule-for-a-specific-line), [2](https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file)]

javascript

```
// eslint-disable-next-line
console.log('ESLint ignores all rules on the next line');

// eslint-disable-next-line no-console
console.log('ESLint only ignores the no-console rule here');
```

Use code with caution.

Ignore the Current Line \[[1](https://github.com/terraform-linters/tflint/issues/1641)]

Place this comment at the **end** of the exact line you want to ignore. \[[1](https://brunoscopelliti.com/blog/how-to-disable-eslint-rule-via-javascript-comment/), [2](https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file)]

javascript

```
console.log('Ignored entirely'); // eslint-disable-line

console.log('Ignored only for no-console'); // eslint-disable-line no-console
```

Use code with caution.

Ignore a Code Block \[[1](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md)]

Wrap a specific section of code to turn off linting and **re-enable** it afterward. \[[1](https://eslint.org/docs/latest/use/configure/rules)]

javascript

```
/* eslint-disable */
alert('foo');
console.log('bar');
/* eslint-enable */

/* eslint-disable no-alert, no-console */
alert('foo');
console.log('bar');
/* eslint-enable no-alert, no-console */
```

Use code with caution.

Ignore an Entire File \[[1](https://www.youtube.com/watch?v=NQWhy3zFHSo)]

Place this comment at the very **top of your file** (before any code). \[[1](https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file), [2](https://eslint.org/docs/latest/use/configure/rules)]

javascript

```
/* eslint-disable */
// The entire file is now ignored by ESLint

const unusedVar = 42;
```

Use code with caution.

Adding Descriptions (Best Practice)

You can include an explanation for why you are bypassing a rule by separating your reason with **two dashes (`--`)**. \[[1](https://stackoverflow.com/questions/67962860/is-there-any-syntax-to-add-additional-info-to-an-eslint-disable-line-comment)]

javascript

```
// eslint-disable-next-line no-eval -- Required for legacy API compatibility
const data = eval(jsonString);
```

Use code with caution.

If you want to manage rules globally instead of using comments, I can show you how to configure the **`eslint.config.js`** file or a **`.eslintignore`** file. Would you like to see how that works? \[[1](https://eslint.org/docs/latest/use/configure/ignore), [2](https://www.youtube.com/watch?v=H2nAJbNnjRw\&t=21)]

- [link](https://stackoverflow.com/questions/27732209/turning-off-an-eslint-rule-for-a-specific-line)\
  Turning off an ESLint rule for a specific line - Stack Overflow\
  Jan 1, 2015 — Answer. You can use an inline comment: // eslint-disable-next-line rule-name . Example. Copy. // eslint-disable-next-line no-conso...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file)\
  Turning off eslint rule for a specific file - Stack Overflow\
  Jan 13, 2016 — Now, based on the your answers, there are 2 × 3 = 6 cases. \* Case 1.1: You want to disable all rules for one or more lines. There ...\
  Stack Overflow
- [link](https://eslint.org/docs/latest/use/configure/rules)\
  Configure Rules - ESLint - Pluggable JavaScript Linter\
  Temporary Solutions. If a disable comment is added as a temporary measure to address a pressing issue, create a follow-up task to ...\
  ESLint

Show all