babel ts

Using **Babel with TypeScript** is a popular hybrid approach where Babel handles code transpilation while the TypeScript compiler (\\(tsc\\)) is used strictly for type checking. \[[1](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html), [2](https://dev.to/rinconcamilo/setting-up-react-babel-webpack-typescript-without-create-react-app-a9l)]

How it Works

Instead of using the TypeScript compiler (\\(tsc\\)) to generate JavaScript, you use the [@babel/preset-typescript](https://babeljs.io/docs/babel-preset-typescript) plugin. \[[1](https://babeljs.io/docs/babel-preset-typescript), [2](https://www.npmjs.com/package/@babel/preset-typescript)]

- **Babel's Role**: It acts as a "stripper," simply removing TypeScript-specific syntax (types, interfaces, etc.) to produce plain JavaScript. It does **not** perform type checking during this process.
- **TypeScript's Role**: You run \\(tsc\\) with the `--noEmit` flag separately (often in a CI/CD pipeline or background process) to verify your types without generating files. \[[1](https://dev.to/mbeaudru/is-babel-still-relevant-for-typescript-projects-36a7), [2](https://www.salesscreen.com/blog/introducing-typescript-in-existing-javascript-projects-with-babel/), [3](https://github.com/TypeStrong/ts-node/issues/654), [4](https://www.youtube.com/watch?v=WRfhMI1gskk\&t=56), [5](https://github.com/microsoft/TypeScript-Babel-Starter)]

Why Use This Setup?

- **Faster Builds**: Babel is often faster because it doesn't wait for type checking to finish before outputting code.
- **Easier Migration**: If you have an existing JavaScript project using Babel, you can adopt TypeScript incrementally by just adding a preset rather than overhauling your entire build pipeline.
- **Advanced Plugins**: Babel offers a wider range of experimental JavaScript transformations and plugins (like [React-specific transforms](https://medium.com/priceline-labs/adding-typescript-support-to-a-babel-react-app-b78214f38ba9)) that \\(tsc\\) may not support. \[[1](https://www.reddit.com/r/typescript/comments/rnw04j/do%5Fyou%5Fguys%5Fcompile%5Fwith%5Ftsloader%5For%5Fbabelloader/), [2](https://medium.com/priceline-labs/adding-typescript-support-to-a-babel-react-app-b78214f38ba9), [3](https://learntypescript.dev/12/l2-babel/), [4](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html), [5](https://dev.to/mbeaudru/is-babel-still-relevant-for-typescript-projects-36a7)]

Key Limitations

- **No Type Safety at Build**: Since Babel ignores types, it will successfully compile code that has type errors.
- **No `.d.ts` Generation**: Babel cannot generate TypeScript declaration files; you still need \\(tsc\\) if you are building a library.
- **Limited Syntax Support**: A few rare TypeScript features, like `const enum` or certain namespace behaviors, may require specific configurations or are not fully supported by Babel's "strip-only" approach. \[[1](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html), [2](https://www.youtube.com/watch?v=WRfhMI1gskk\&t=56), [3](https://dev.to/mbeaudru/is-babel-still-relevant-for-typescript-projects-36a7), [4](https://babeljs.io/docs/babel-plugin-transform-typescript), [5](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)]

Basic Setup

To get started, install the core dependencies and add the preset to your [Babel configuration](https://babeljs.io/docs/en/config-files): \[[1](https://github.com/microsoft/TypeScript-Babel-Starter), [2](https://www.youtube.com/watch?v=g9zx5xPTWF0\&t=56), [3](https://kulshekhar.github.io/ts-jest/docs/babel7-or-ts), [4](https://dev.to/tak089/typescript-transpiler-setup-5998)]

bash

```
npm install --save-dev @babel/core @babel/cli @babel/preset-typescript
```

Use code with caution.

**babel.config.json**:

json

```
{
  "presets": ["@babel/preset-typescript"]
}
```

Use code with caution.

- [link](https://babeljs.io/docs/babel-preset-typescript)\
  babel/preset-typescript\
  This preset is recommended if you use TypeScript, a typed superset of JavaScript. It includes the following plugins: @babel/plugin...\
  Babel.js
- [link](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)\
  Documentation - Using Babel with TypeScript\
  Mar 16, 2026 — Babel for transpiling, tsc for types. This is a common pattern for projects with existing build infrastructure which may have been...\
  TypeScript
- [link](https://www.reddit.com/r/typescript/comments/rnw04j/do%5Fyou%5Fguys%5Fcompile%5Fwith%5Ftsloader%5For%5Fbabelloader/)\
  Do you guys compile with ts-loader or babel-loader? : r/typescript\
  Dec 24, 2021 — Comments Section \* avenue-dev. • 4y ago • Edited 4y ago. ts-loader only. It does most of what babel-loader does, but babel-loder h...\
  Reddit·r/typescript

Show all

example

An example setup for using Babel with TypeScript involves three main configuration files and specific build scripts. This "hybrid" approach uses Babel to strip types for fast transpilation and the TypeScript compiler (\\(tsc\\)) to check for errors. \[[1](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html), [2](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html), [3](https://www.salesscreen.com/blog/introducing-typescript-in-existing-javascript-projects-with-babel/)]

1\. The Babel Configuration

In your `babel.config.json` or `.babelrc`, you add the [TypeScript preset](https://babeljs.io/docs/babel-preset-typescript). This tells Babel how to handle `.ts` files by removing the type annotations. \[[1](https://babeljs.io/docs/babel-preset-typescript), [2](https://stackoverflow.com/questions/38320220/how-to-setup-typescript-babel-webpack), [3](https://www.youtube.com/watch?v=WRfhMI1gskk\&t=56), [4](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)]

json

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ]
}
```

Use code with caution.

2\. The TypeScript Configuration

Even though Babel is transpiling the code, you still need a `tsconfig.json` for type checking. The most important setting here is `"noEmit": true`, which tells TypeScript not to generate any `.js` files, as Babel will handle that. \[[1](https://www.youtube.com/watch?v=WRfhMI1gskk\&t=56), [2](https://medium.com/priceline-labs/adding-typescript-support-to-a-babel-react-app-b78214f38ba9), [3](https://stackoverflow.com/questions/56568958/custom-typescript-npm-package-wont-generate-types)]

json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}
```

Use code with caution.

3\. Build Scripts in `package.json` \[[1](https://rakish-labs.scribe.rip/the-ultimate-introductory-guide-for-bundling-typescript-packages-817e3527c1e)]

You typically define two separate scripts: one for the "build" (Babel) and one for "type-checking" (TypeScript). \[[1](https://iamturns.com/typescript-babel/), [2](https://github.com/microsoft/TypeScript-Babel-Starter)]

json

```
{
  "scripts": {
    "build": "babel src --out-dir dist --extensions \".ts,.tsx\"",
    "type-check": "tsc"
  }
}
```

Use code with caution.

Code Conversion Example

Babel essentially transforms your TypeScript source into clean JavaScript by "stripping" the types. \[[1](https://learntypescript.dev/12/l2-babel/), [2](https://www.youtube.com/watch?v=CNOmfvD8HVM\&t=11)]

**Input (src/index.ts):**

typescript

```
interface User {
  name: string;
}

const greet = (person: User): string => {
  return `Hello, ${person.name}!`;
};
```

Use code with caution.

**Babel Output (dist/index.js):**

javascript

```
const greet = person => {
  return `Hello, ${person.name}!`;
};
```

Use code with caution.

**Would you like to see how to integrate this setup with a bundler like [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org/)?**

- [link](https://babeljs.io/docs/babel-preset-typescript)\
  babel/preset-typescript\
  When it is set to true , Babel will provide a general TS plugin. If you want to transpile source as if it were \*.tsx , enable the ...\
  Babel.js
- [link](https://stackoverflow.com/questions/38320220/how-to-setup-typescript-babel-webpack)\
  How to setup TypeScript + Babel + Webpack? - Stack Overflow\
  Jul 12, 2016 — Install Babel's TypeScript support. Only @babel/preset-typescript is mandatory; the other three add additional features that TypeS...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=WRfhMI1gskk\&t=56)\
  Setting Up TypeScript w/ Babel\
  Mar 10, 2019 — what is it going to mean to me the previous episode before that was about getting your environment set up using just TypeScript CL...\
  7m\
  YouTube·Harry Wolff

Show all

i want to have rescue(foo bar whatever){...} that translates to if(rescue(foo...)){...}. how.

To achieve a transformation like `rescue(foo){...}` into `if(rescue(foo)){...}`, you need to create a **custom Babel plugin**. Because your desired "rescue" syntax looks like a language keyword rather than a standard function call, you have two main routes:

Option 1: Standard Function Call (Recommended)

If you can live with standard function call syntax (e.g., `rescue(foo, () => { ... })`), you can use a [Babel transform plugin](https://lihautan.com/step-by-step-guide-for-writing-a-babel-transformation) to replace that [CallExpression](https://varunzxzx.github.io/blog/writing-babel-plugin/) with an `if` statement.

**Plugin Logic:**

1. **Visit** `CallExpression` nodes.
2. **Check** if the function name (callee) is `rescue`.
3. **Replace** the entire call with an `if` statement using `path.replaceWith()`. \[[1](https://dev.to/thepassle/babel-beyond-assumptions-6ep), [2](https://varunzxzx.github.io/blog/writing-babel-plugin/)]

javascript

```
// A snippet of how the visitor might look
visitor: {
  CallExpression(path) {
    if (path.node.callee.name === 'rescue') {
      const [condition, callback] = path.node.arguments;
      // Transform to: if (rescue(condition)) { callback() }
      path.replaceWith(
        t.ifStatement(
          t.callExpression(t.identifier('rescue'), [condition]),
          t.blockStatement([t.expressionStatement(t.callExpression(callback, []))])
        )
      );
    }
  }
}
```

Use code with caution.

Option 2: Custom Keyword Syntax

If you want the exact syntax `rescue(arg) { ... }` (which is technically invalid JavaScript), you must [extend the Babel parser](https://medium.com/@jacobp100/adding-custom-syntax-to-babel-e1a1315c6a90) (`@babel/parser`). This is significantly more complex because standard [syntax plugins](https://babeljs.io/docs/plugins) only enable _existing_ or _proposed_ features. \[[1](https://stackoverflow.com/questions/34898418/transform-plugin-vs-syntax-plugin-in-babel), [2](https://babeljs.io/docs/plugins)]

- **Custom Parser**: You would need to fork or extend the parser to recognize `rescue` as a block-level keyword similar to `if` or `while`.
- **AST Transformation**: Once the parser can create a custom `RescueStatement` node, your Babel plugin would then transform that AST node into a standard `IfStatement`. \[[1](https://the-guild.dev/blog/how-i-build-babel-plugins), [2](https://medium.com/@jacobp100/adding-custom-syntax-to-babel-e1a1315c6a90)]

Summary of Steps

1. **Define your target AST**: Use the [AST Explorer](https://astexplorer.net/) to see what an `if` statement looks like.
2. **Write the visitor**: Create a function that identifies your custom "rescue" calls.
3. **Generate the replacement**: Use `@babel/types` builders to construct the new `if` statement. \[[1](https://www.youtube.com/watch?v=aK6n0pYcOe8\&t=100), [2](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md), [3](https://www.youtube.com/watch?v=r6NFEkABZlw\&t=42)]

**Would you like a full code template for a Babel plugin that handles the standard function call version?**

- [link](https://www.youtube.com/watch?v=aK6n0pYcOe8\&t=100)\
  Build Your Own Babel Plugin (with Laurie Barth) — Learn With ...\
  Feb 5, 2021 — and write code all day. so uh yeah and I'm at Lauron Tech literally everywhere. so if you've ever seen that that's me. good that's...\
  13m\
  YouTube·CodeTV
- [link](https://dev.to/thepassle/babel-beyond-assumptions-6ep)\
  Babel, Beyond Assumptions - DEV Community\
  Apr 30, 2020 — If you'd like to take things a little bit further, and see how you could solve handling expressions, see the babel-plugin-demo-wit...\
  DEV Community
- [link](https://the-guild.dev/blog/how-i-build-babel-plugins)\
  This is how I build Babel plug-ins - GraphQL (The Guild)\
  Oct 8, 2018 — Notice how each node is composed out of the one above it. Accordingly, we will update our plug-in. We will keep the old logic, whe...\
  GraphQL (The Guild)

Show all

use the custom keyword syntax

Standard Babel plugins only handle existing or proposed JavaScript syntax; they cannot create entirely new keywords like `rescue(foo) { ... }` because the standard parser will throw a syntax error before your plugin even runs. To make this work, you must use a **parser override**. \[[1](https://stackoverflow.com/questions/34028730/babel-v6-how-can-i-write-a-plugin-that-adds-a-new-syntax-ie-a-new-operator), [2](https://stackoverflow.com/questions/34898418/transform-plugin-vs-syntax-plugin-in-babel), [3](https://github.com/babel/babel/discussions/12069), [4](https://www.lenovo.com/us/en/glossary/babel/)]

The Implementation Strategy

1. **Parser Extension**: You must provide a custom version of `@babel/parser` that recognizes the `rescue` keyword and knows how to parse its arguments and body into an Abstract Syntax Tree (AST).
2. **Plugin Transformation**: You then use a standard Babel transform plugin to find these custom "Rescue" nodes and rewrite them into standard `if` statements. \[[1](https://lihautan.com/creating-custom-javascript-syntax-with-babel), [2](https://lihautan.com/creating-custom-javascript-syntax-with-babel), [3](https://www.youtube.com/watch?v=aK6n0pYcOe8\&t=100), [4](https://lihautan.com/step-by-step-guide-for-writing-a-babel-transformation)]

Step 1: Extending the Parser

Because `@babel/parser` does not officially support external syntax extensions, the most reliable method is to **fork the parser** or use a `parserOverride` in your Babel configuration. \[[1](https://github.com/babel/babel/discussions/12069), [2](https://stackoverflow.com/questions/37554298/writing-a-syntax-plugin-for-babel-6)]

You would modify `src/tokenizer/types.js` to add `rescue` as a keyword: \[[1](https://davidwalsh.name/add-babel-keyword)]

javascript

```
// Example modification in a forked @babel/parser
function createKeyword(name, options = {}) {
  options.keyword = name;
  const token = new TokenType(name, options);
  keywords.set(name, token);
  // Manual registration for your custom keyword
  if (name === "rescue") keywords.set("rescue", token);
  return token;
}
```

Use code with caution.

Step 2: The Transform Plugin

Once your custom parser produces a `RescueStatement` node, your plugin will visit it and replace it with an `IfStatement`. \[[1](https://dev.to/tanhauhau/step-by-step-guide-for-writing-a-custom-babel-transformation-257g), [2](https://stackoverflow.com/questions/34898418/transform-plugin-vs-syntax-plugin-in-babel)]

javascript

```
// Your Babel Plugin
export default function({ types: t }) {
  return {
    visitor: {
      RescueStatement(path) {
        const { test, body } = path.node;

        // Transform rescue(foo) { ... } -> if (rescue(foo)) { ... }
        path.replaceWith(
          t.ifStatement(
            t.callExpression(t.identifier('rescue'), [test]),
            body
          )
        );
      }
    }
  };
}
```

Use code with caution.

Alternative: The "Macro" Approach

If you want to avoid forking the parser, the most common alternative is to use [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-handbook). This requires a slightly different syntax that is already valid JavaScript: \[[1](https://www.youtube.com/watch?v=1ERAJG9ILhk), [2](https://www.lenovo.com/us/en/glossary/babel/), [3](https://babeljs.io/docs/babel-core)]

- **Target**: `rescue(foo, () => { ... })`
- **Result**: `if (rescue(foo)) { ... }`

This avoids breaking existing IDE tooling and build systems that expect valid ECMAScript. \[[1](https://stackoverflow.com/questions/50187695/can-a-babel-plugin-extend-the-parser-to-add-new-keywords), [2](https://medium.com/@jacobp100/adding-custom-syntax-to-babel-e1a1315c6a90)]

**Would you like to see the specific code to fork and build a custom `@babel/parser` for this keyword?**

- [link](https://github.com/babel/babel/discussions/12069)\
  How to add custom keyword to Babel parser? #12069 - GitHub\
  Sep 17, 2020 — Maintainer. Original comment in English - Translate to English. Yes, this is definitely out-of-scope. However, if you want to fork...\
  GitHub
- [link](https://lihautan.com/creating-custom-javascript-syntax-with-babel)\
  Creating custom JavaScript syntax with Babel - Tan Li Hau\
  Sep 25, 2019 — Fork the babel. Head over to babel's Github repo, click the "Fork" button located at the top left of the page. If this is your fir...\
  Tan Li Hau
- [link](https://www.youtube.com/watch?v=aK6n0pYcOe8\&t=100)\
  Build Your Own Babel Plugin (with Laurie Barth) — Learn With ...\
  Feb 5, 2021 — and write code all day. so uh yeah and I'm at Lauron Tech literally everywhere. so if you've ever seen that that's me. good that's...\
  13m\
  YouTube·CodeTV

Show all

do i need babel? for example, i want to literally match rescue (like cpp define), match the brackets, and replace like regex before running. and i dont want the ide to see it as an error.

If you want to use a C++-style `#define` or a regex-based string replacement approach, **you don't strictly need Babel**, but you will need a custom build step to handle the transformation before the code is passed to the JavaScript engine or TypeScript compiler. \[[1](https://stackoverflow.com/questions/33159711/what-is-the-javascript-equivalent-to-cs-define), [2](https://stackoverflow.com/questions/69845852/is-there-a-javascript-equivalent-to-c-preprocessor-macros)]

1\. Pre-build Regex Strategy

You can use a simple script (e.g., using Node.js or a Makefile) to run a regex replacement on your source files before they are compiled or bundled.

- **How it works**: Your "pre-processor" reads your `.ts` file as a string, applies the regex, and saves it as a temporary valid file (e.g., `src/temp.ts`) which is then actually run.

- **Regex Example**:\
  javascript

<!---->

```
// Replaces: rescue (foo) { ... } -> if (rescue(foo)) { ... }
const output = input.replace(/rescue\s*\((.*?)\)\s*\{/g, 'if (rescue($1)) {');
```

Use code with caution.

- **Pros**: Extremely simple and acts exactly like a C++ macro.
- **Cons**: Regex is "fragile" for code. It doesn't understand nesting (e.g., if there are curly braces inside the block) and can easily break if the syntax varies slightly. \[[1](https://stackoverflow.com/questions/69845852/is-there-a-javascript-equivalent-to-c-preprocessor-macros), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String/replace), [3](https://www.youtube.com/watch?v=tLpcdIleveg\&t=4), [4](https://isocroft.medium.com/when-to-safely-and-reliably-deploy-regular-expressions-in-your-codebase-143b2f4d96f5), [5](https://softwareengineering.stackexchange.com/questions/113237/when-you-should-not-use-regular-expressions)]

2\. Avoiding IDE Errors

The biggest hurdle with custom syntax like `rescue(foo) { ... }` is that VS Code or WebStorm will mark it as a syntax error because it’s not valid JavaScript. To fix this without complex IDE extensions: \[[1](https://www.youtube.com/watch?v=GwEJlzZ1TB4\&t=16)]

- **Pseudo-Comment Syntax**: Use a format that is technically a comment so the IDE ignores it, but your pre-processor recognizes it.
  - _Input:_ `// #rescue (foo)`
- **External Macros**: Use a library like [Sweet.js](https://www.sweetjs.org/doc/tutorial), which is a dedicated macro system for JavaScript. It allows you to define new keywords while maintaining some level of hygiene and structure. \[[1](https://www.sweetjs.org/doc/tutorial), [2](https://github.com/commenthol/prepin), [3](https://www.youtube.com/watch?v=qLmfsNg9E9Y)]

3\. Alternative: The C Preprocessor

You can actually run the real **C preprocessor (cpp)** on your JavaScript/TypeScript files if you have GCC or Clang installed. \[[1](https://www.reddit.com/r/javascript/comments/2ymw1q/using%5Fgcccppclangs%5Fcpreprocessor%5Fin%5Fjavascript/), [2](https://stackoverflow.com/questions/69845852/is-there-a-javascript-equivalent-to-c-preprocessor-macros)]

1. Add `#define rescue(x) if (rescue(x))` to a header file.
2. Run `cpp -P -undef yourfile.js > processed.js`.
3. The `-P` flag removes line markers, and `-undef` prevents it from adding C-specific definitions. \[[1](https://www.reddit.com/r/javascript/comments/2ymw1q/using%5Fgcccppclangs%5Fcpreprocessor%5Fin%5Fjavascript/)]

**Would you like me to write a small Node.js script that performs this regex replacement for your build pipeline?**

- [link](https://isocroft.medium.com/when-to-safely-and-reliably-deploy-regular-expressions-in-your-codebase-143b2f4d96f5)\
  When to safely and reliably deploy regular expressions in your ...\
  Aug 29, 2024 — Generally speaking, regexes should ONLY be used for text that obey the 3 rules of regular grammar as follows: \* Linear (i.e. no ne...\
  Medium·Ifeora Okechukwu Patrick
- [link](https://stackoverflow.com/questions/33159711/what-is-the-javascript-equivalent-to-cs-define)\
  What is the Javascript equivalent to C++'s - Stack Overflow\
  Oct 15, 2015 — C and C++ are compiled languages and the #define you are referring to is a pre processor macro, which are used by the preprocessor...\
  Stack Overflow
- [link](https://www.sweetjs.org/doc/tutorial)\
  Hygienic Macros for JavaScript - Sweet.js\
  Sweet Cond. One task we often need to perform in a macro is looping over syntax. Sweet helps out with that by supporting ES2015 fe...\
  Sweet.js

Show all

what? c preprocessor? does it understand like if rescue is in a comment, in a string, in a template literal, nested, edge cases...

The C preprocessor (`cpp`) is a "dumb" text-replacement tool that operates before any actual parsing occurs. It does not understand the syntax or structure of JavaScript or TypeScript. \[[1](https://stackoverflow.com/questions/396644/replacements-for-the-c-preprocessor), [2](https://www.youtube.com/watch?v=6KNdGnUiRBM\&t=119)]

Does it handle edge cases?

- **Comments**: It is generally safe with comments because standard `cpp` behavior is to **strip or ignore** comments in the "translation phase" before it even looks for macros.
- **Strings**: It is smart enough **not** to expand macros inside string literals (e.g., `"rescue(x)"` won't be replaced).
- **Template Literals**: This is a **major failure point**. Since `cpp` was designed for C (which only has `"` and `'` strings), it will likely treat the text inside backticks (\` \`) as regular code and **incorrectly replace** anything it finds there.
- **Braces `{}`**: It does **not** understand curly braces. If your macro contains a comma inside a block (e.g., `rescue({ a, b })`), `cpp` will get confused and think you are passing too many arguments to the macro.
- **Nesting**: While you can call one macro from another, `cpp` does not support truly nested macro definitions or recursive expansion. \[[1](https://home.cs.colorado.edu/~main/cs1300/doc/gnu/cpp%5F1.html), [2](https://stackoverflow.com/questions/1510869/does-the-c-preprocessor-strip-comments-or-expand-macros-first), [3](https://stackoverflow.com/questions/2009526/are-comments-always-processed-before-the-preprocessor), [4](https://en.wikipedia.org/wiki/C%5Fpreprocessor), [5](https://mort.coffee/home/obscure-c-features/), [7](http://www.em-company.fr/blog/index.php/2017/11/03/nested-macros/), [8](https://www.reddit.com/r/C%5FProgramming/comments/tjlqf1/how%5Fcan%5Fthe%5Fc%5Fpreprocessor%5Fwork%5Fwithout%5Fmultiple/)]

Why you should probably avoid it

Using `cpp` for modern JavaScript/TypeScript is risky for a few reasons:

1. **Single vs. Double Quotes**: Some preprocessors treat single quotes (`'`) as character literals (like in C) and will break if they find multiple characters inside them.
2. **Broken Source Maps**: Since `cpp` is a raw text transform, it will completely break your line numbers and debugging in the IDE or browser.
3. **IDE Errors**: Your IDE (VS Code) will still see `rescue(...) { ... }` as a syntax error because it has no idea `cpp` is going to change it later. \[[1](https://stackoverflow.com/questions/2072716/javascript-friendly-preprocessor-dilemma)]

A Better "Regex" Alternative

If you want to stick to the "text replacement" idea but avoid the C preprocessor's baggage, you can use a **Node.js script** or a [Custom Loader](https://webpack.js.org/api/loaders/) if you're using Webpack. This allows you to use a slightly safer syntax that won't break your IDE:

**Safe Pattern**: `/* @rescue */ if (foo) { ... }`\
**Regex**: `/\/\* @rescue \*\/ if \((.*?)\)/g`

This keeps the code valid JavaScript so your **IDE doesn't complain**, but allows your build step to "enhance" the logic if needed.

**Do you want to see a small Node script that can run this replacement safely across your files?**

- [link](https://home.cs.colorado.edu/~main/cs1300/doc/gnu/cpp%5F1.html)\
  The C Preprocessor\
  C comments and predefined macro names are not recognized inside a \`#include' directive in which the file name is delimited with \`<\
  University of Colorado Boulder
- [link](https://mort.coffee/home/obscure-c-features/)\
  Some obscure C features you might not know about - Mort's\
  Jan 25, 2018 — The C preprocessor doesn't really understand the code; it only copies and pastes strings around. It splits the string between the ...\
  mort.coffee
- [link](https://en.wikipedia.org/wiki/C%5Fpreprocessor)\
  C preprocessor - Wikipedia\
  The preprocessor replaces each token of the code that matches a macro token with the associated replacement text in what is known ...\
  Wikipedia

Show all