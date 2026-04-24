#

how does rust prelude work

5:27 pm

A Rust **prelude** is <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;">a collection of names—including traits, types, and functions—that are automatically brought into the scope of every module in a crate</mark>. This eliminates the need to manually import the most frequently used items like `Vec`, `String`, or `Option` in every file.

How it Works

- **Automatic Injection**: The compiler implicitly adds `use std::prelude::v1::*;` (or a version corresponding to your crate's edition) to every module.
- **Shadowing Priority**: Prelude items have the **lowest priority** in name resolution. If you define or manually import a name that conflicts with one in the prelude, your version takes precedence without causing a compile error.
- **Edition-Specific**: The standard prelude evolves with Rust editions to introduce new common traits (like `TryInto` in Rust 2021) without breaking older code.

Types of Preludes

1. **Standard Prelude (`std::prelude`)**: Automatically included. It contains pervasive items like `Clone`, `Iterator`, `Result`, and `Box`.
2. **External Library Preludes**: Many libraries (e.g., [bevy](https://www.reddit.com/r/rust/comments/q6stlt/massive%5Fpreludes%5Fwhy/), [leptos](https://docs.rs/leptos/latest/leptos/prelude/index.html)) provide their own `prelude` module. Unlike the standard library, these are **not automatic**; you must manually import them using `use crate_name::prelude::*;`.
3. **Other Internal Preludes**: The standard library also has specific preludes like `std::io::prelude` for focused tasks like I/O.

Disabling the Prelude

If you need full control or are working in a `no_std` environment, you can disable the automatic standard prelude by adding the `#![no_implicit_prelude]` attribute to your crate root.

Would you like to see a list of the **specific traits and types** included in the latest Rust 2024 prelude?

- [link](https://users.rust-lang.org/t/to-use-prelude-or-to-not-to-use-prelude-that-is-the-question/110855)\
  or to not to \`use prelude::\*\` - that is the question\
  I never use these “preludes”, because of the disadvantages you list. I do use the real preludes (“A prelude is a collection of nam...\
  The Rust Programming Language Forum
- [link](https://www.reddit.com/r/rust/comments/8rgzpt/what%5Fis%5Fpreldue%5Fin%5Frust/)\
  What is preldue in rust? - Reddit\
  Comments Section \* ssokolow. • 8y ago • Edited 8y ago. As the Rust API docs for the prelude explain, Rust automatically inserts th...\
  Reddit
- [link](https://doc.rust-lang.org/reference/names/preludes.html)\
  Preludes - The Rust Reference\
  Preludes. ... A prelude is a collection of names that are automatically brought into scope of every module in a crate. These prelu...\
  Rust Documentation

Show all

i feel it's not really possible in other langs like ts. you could not import something that import something without touching globalthis.

5:28 pm

You're spot on—Rust’s prelude is unique because it’s a **compiler-level injection** that doesn't rely on a global namespace like JavaScript's `window` or `globalThis`.

In TypeScript/JS, everything in the "prelude" (like `Array`, `Map`, or `console`) actually lives on a shared global object. If you want to "auto-import" something across your project, you're usually forced to use `declare global` in a `.d.ts` file, which physically attaches those types to that single global scope.

Rust does it differently through a mechanism called **implicit glob imports**:

1\. It’s a "Layer," not a "Bucket"

Instead of throwing everything into one big global bucket, the Rust compiler effectively prepends `use std::prelude::v1::*;` to the top of every single module.

- **Shadowing**: Because it's an import and not a "global variable," you can define your own `struct String` in your file. Rust will simply use _your_ version instead of the prelude’s version without a naming conflict.
- **Low Priority**: Prelude items have the lowest lookup priority. Explicit imports always win.

2\. Hygiene vs. Pollution

In TypeScript, if two different libraries try to add a `Context` type to the global scope via a declaration file, they will clash and cause a build error.\
In Rust, libraries often provide their own `prelude` module (like `use bevy::prelude::*;`), but these are **explicitly opted into**. You decide which "prelude" to bring in on a per-file basis, keeping your namespace clean.

3\. The Edition Bridge

This system allows Rust to "change the defaults" without breaking old code.

- **Rust 2015** has one prelude.
- **Rust 2021** added `TryInto` to its prelude.
- **Rust 2024** adds even more, like `Future`.\
  Because the compiler knows which "edition" your crate is using, it only injects the specific prelude that matches your code's version.

**The TL;DR:** Rust's prelude is like a "macro" that types `use std::prelude::*;` for you in every file, whereas TypeScript's "prelude" is just a shared object that everyone has to fight over.

Do you think TypeScript would benefit from a **per-file auto-import** setting in `tsconfig`, or do you prefer the explicitness of manual imports?

- [link](https://users.rust-lang.org/t/to-use-prelude-or-to-not-to-use-prelude-that-is-the-question/110855)\
  or to not to \`use prelude::\*\` - that is the question\
  I avoid using prelude \* imports in most cases, though I will use them in cases where I am using a large number of imports (over 10...\
  The Rust Programming Language Forum
- [link](https://stackoverflow.com/questions/67616432/typescript-declare-truly-global-variable-to-access-directly-no-window-global)\
  TypeScript - declare truly global variable to access directly, no ...\
  I will add that another reason it didn't work for me initially is that there appears to be something off with globals. d. ts When ...\
  Stack Overflow
- [link](https://doc.rust-lang.org/std/prelude/index.html)\
  std::prelude - Rust\
  §The Rust Prelude. Rust comes with a variety of things in its standard library. However, if you had to manually import every singl...\
  Rust Documentation

Show all

#

how does it work to write usestate directly wo importing react in ts

5:29 pm

In modern React (v17+), you can write JSX without importing `React` because of the **new JSX transform**, which automatically injects the necessary functions into your compiled code. However, **`useState` and other hooks still require an import** unless you are using specific development tools that handle it for you.

Here is how "writing it directly" typically works in a TypeScript (TS) environment:

1\. Auto-Imports (Most Common)

If you see code where `useState` is used without a visible import at the top, it is usually because the developer's IDE (like VS Code) or a build tool is handling the import automatically:

- **IDE Auto-Import**: When you type `useState`, VS Code often automatically adds `import { useState } from 'react';` to the top of the file.
- **Auto-import Plugins**: Tools like [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) can be configured in Vite or Webpack to globally inject hooks like `useState` so you never have to manually type the import line.

2\. The New JSX Transform (The "No React" Import)

Starting with React 17, compilers like Babel or TypeScript transform JSX into `_jsx()` calls instead of `React.createElement()`.

- **What it does**: It removes the need for `import React from 'react';` just to use JSX components.
- **What it does NOT do**: It does **not** make `useState` or `useEffect` global variables. You still need to import these named exports from the `react` package to use them.

3\. Using React via the Global Scope (Umd/CDN)

In rare setups (like older browser-based demos or specific legacy configurations), React might be loaded via a `<script>` tag, making `React` available globally. In these cases, you would write:

typescript

```
const [state, setState] = React.useState(initialValue);
```

Use code with caution.

Even then, you are technically accessing it through the `React` global object rather than calling `useState` as a standalone global function.

Summary of Requirements

To use `useState` in a TypeScript project:

- **React 17+**: You don't need `import React from 'react';` for JSX, but you **must** have `import { useState } from 'react';` for the hook itself.
- **TypeScript Types**: TS will usually infer the type of your state from the initial value you pass to `useState(value)`.

Are you seeing **"useState is not defined"** errors, or are you trying to **clean up your imports** in a specific build tool like Vite or Next.js?

- [link](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#:~:text=Upgrading%20to%20the%20new%20transform%20is%20completely,of%20concepts%20you%20need%20to%20learn%20React.)\
  Introducing the New JSX Transform – React Blog\
  Upgrading to the new transform is completely optional, but it has a few benefits: \* With the new transform, you can use JSX withou...\
  React – A JavaScript library for building user interfaces
- [link](https://stackoverflow.com/questions/64541040/jsx-can-be-used-without-importing-react)\
  JSX can be used without importing React - Stack Overflow\
  \* 3 Answers. Sorted by: 25. Starting from React 17 it's not necessary to import React to use JSX. See from the blog post about tha...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=8D-rWP3c088&t=5)\
  React 17: New Features!! - JSX Transform is Amazing!!\
  React 17 introduces a new version of JSX transform. This new transform aims to improve the compilation process of JSX into JavaScr...\
  2m\
  YouTube·codeSTACKr

Show all

i mean seems sth just magically imports them for me. i do not see them in my code.

5:29 pm

If you don't see any `import { useState } from 'react'` at the top of your files but `useState` still works, it's likely because of a "magic" auto-import plugin in your build tool. This is common in modern setups like **Vite** or **Next.js** to reduce repetitive boilerplate.

The most likely culprit is a tool called **[unplugin-auto-import](https://unplugin.unjs.io/showcase/unplugin-auto-import)**.

How the "Magic" Works

1. **Configuration**: Your project (often in `vite.config.ts` or `webpack.config.js`) has a plugin configured to watch for specific keywords like `useState`, `useEffect`, or `useMemo`.
2. **Compilation Injection**: When you run your development server or build your app, the plugin scans your code. If it sees `useState`, it "magically" injects the import statement into the compiled code behind the scenes before it reaches the browser.
3. **TypeScript Support**: To stop TypeScript from complaining that `useState` is "not defined," these plugins usually generate a file called `auto-imports.d.ts` in your root directory. This file provides global type definitions so that TS recognizes these hooks as if they were built-in globals.

Where to find the "Magic"

You can verify this by checking these places in your project:

- **`vite.config.ts`**: Look for `AutoImport({ imports: ['react'] })`.
- **`tsconfig.json`**: Check the `include` array; you'll likely see a reference to `auto-imports.d.ts` or similar.
- **`package.json`**: Look for `unplugin-auto-import` in your `devDependencies`.

**Note**: While this makes code cleaner, some developers avoid it because it can make the code's origins less clear to newcomers or external tools.

Do you see an **auto-imports.d.ts** file or a plugin called **unplugin-auto-import** in your config?

- [link](https://unplugin.unjs.io/showcase/unplugin-auto-import)\
  unplugin-auto-import\
  If you have encountered ESLint error of no-undef : Enable eslintrc. enabled. ts AutoImport({ eslintrc: { enabled: true, // <-- thi...\
  Unplugin
- [link](https://www.linkedin.com/pulse/development-workflow-enhancement-unplugin-auto-import-mustafa-hesham-b5ebf)\
  Development workflow enhancement with unplugin-auto ...\
  Full-Stack Developer | JavaScript, React |… \* As web developers, we often find ourselves repeatedly importing the same functions a...\
  LinkedIn
- [link](https://yeahlowflicker.com/blog/implementing-auto-import-in-vue-applications-with-unplugin-auto-import)\
  Implementing Auto Import in Vue Applications with unplugin- ...\
  Implementing Auto Import in Vue Applications with unplugin-auto-import. ... Vue has been one of my all-time favorite frontend fram...\
  Yeahlowflicker

Show all

does it work for tsx

5:30 pm

Yes, this "magic" works perfectly for **`.tsx`** files. In fact, TypeScript projects are where these tools are most useful because they handle both the **runtime code** and the **type definitions** simultaneously.

Here is how it functions in a `.tsx` environment:

1\. The Code Transformation

When you save a `.tsx` file, your build tool (like Vite or Webpack) uses a plugin—most commonly **[unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)**—to scan your file for hooks like `useState`.

- It identifies that `useState` is missing an import.
- It virtually "injects" `import { useState } from 'react'` during the build process.
- The browser receives a version of your code that has the correct imports, so it runs without errors.

2\. The TypeScript "Magic" (`.d.ts` files)

Normally, TypeScript would flag `useState` as an error (`Cannot find name 'useState'`) if it isn't imported. To solve this:

- The plugin automatically generates a file, typically named **`auto-imports.d.ts`**, in your project root.
- This file contains **global type declarations** for all your hooks.
- Because this file is included in your `tsconfig.json`, TypeScript "sees" `useState` as a global variable with the correct React types, making the red squiggly lines disappear.

3\. Configuration Check

For this to work in `.tsx`, the plugin configuration (e.g., in `vite.config.ts`) must explicitly include `.tsx` files in its transformation targets:

typescript

```
// Example configuration snippet
AutoImport({
  include: [
    /\.[tj]sx?$/, // matches .ts, .tsx, .js, .jsx
  ],
  imports: ['react'], // tells it to auto-import React hooks
  dts: './auto-imports.d.ts', // generates the TS definitions
})
```

Use code with caution.

**One catch**: If you are using a very specific project structure (like some routing libraries), you might occasionally run into bugs where auto-imports fail in specific directories, requiring a manual import as a fallback.

Would you like to know how to **turn this off** or **add your own custom functions** to this auto-import list?

- [link](https://github.com/TanStack/router/issues/4478)\
  Auto-import does not work in routes directory when using ...\
  Describe the bug. When using @tanstack/router-plugin/vite to automatically generate routes, together with unplugin-auto-import/vit...\
  GitHub
- [link](https://github.com/unplugin/unplugin-auto-import)\
  Unplugin Auto Import - GitHub\
  Presets. See src/presets. Package Presets. We only provide presets for the most popular packages, to use any package not included ...\
  GitHub
- [link](https://stackoverflow.com/questions/79246849/autoimport-unplugin-auto-import-and-typescript-errors)\
  AutoImport (unplugin-auto-import) and TypeScript errors\
  Comments. Add a comment. 0. As already mentioned, you need to configure tsconfig.json . I would add that the include field should ...\
  Stack Overflow

Show all

does it work for tsx

5:30 pm

Yes, it works perfectly for **`.tsx`** files. In fact, these tools are built specifically to solve the double problem in TypeScript: making the code run and keeping the compiler from complaining.

Here is how the "magic" handles `.tsx` files behind the scenes:

1\. Building the Code (Runtime)

When you save your `.tsx` file, your build tool (like Vite or Webpack) uses a plugin like [unplugin-auto-import](https://unplugin.unjs.io/showcase/unplugin-auto-import) to scan your code.

- If it sees `useState` but no import, it virtually "injects" the line `import { useState } from 'react'` during the build process.
- The browser receives the "correct" code with imports, so everything runs smoothly.

2\. Satisfying TypeScript (Type Safety)

TypeScript normally throws an error if it sees a variable like `useState` that isn't imported. To fix this, the plugin automatically generates a global type definition file, usually called **`auto-imports.d.ts`**, in your project root.

- This file tells TypeScript: "Hey, `useState` is a global variable, and here is exactly how it's typed".
- Because your `tsconfig.json` typically includes this file, the red squiggly lines disappear, and you get full **IntelliSense** and type-checking.

3\. Setup Requirements

For this to work in `.tsx`, your configuration (usually in `vite.config.ts`) must include the `.tsx` extension in its transformation targets:

typescript

```
// Typical Vite config example
AutoImport({
  include: [
    /\.[tj]sx?$/, // Targets .ts, .tsx, .js, and .jsx files
  ],
  imports: ['react'], // Specifically auto-imports React hooks
  dts: './auto-imports.d.ts', // Creates the TS definition file
})
```

Use code with caution.

**Tip**: If you ever see red errors in your editor but the app runs fine, it usually means your `auto-imports.d.ts` file needs to be regenerated or your **IDE (like VS Code)** needs a restart to pick up the new global types.

Do you see an **auto-imports.d.ts** file in your project folder?

- [link](https://github.com/unplugin/unplugin-auto-import)\
  Unplugin Auto Import - GitHub\
  Presets. See src/presets. Package Presets. We only provide presets for the most popular packages, to use any package not included ...\
  GitHub
- [link](https://unplugin.unjs.io/showcase/unplugin-auto-import)\
  unplugin-auto-import\
  Presets ​ See src/presets. Package Presets ​ We only provide presets for the most popular packages, to use any package not include...\
  Unplugin
- [link](https://stackoverflow.com/questions/79246849/autoimport-unplugin-auto-import-and-typescript-errors)\
  AutoImport (unplugin-auto-import) and TypeScript errors\
  Comments. Add a comment. 0. As already mentioned, you need to configure tsconfig.json . I would add that the include field should ...\
  Stack Overflow

Show all

i mean the tsx cli

5:30 pm

If you are referring to the **`tsx` CLI** (the modern replacement for `ts-node`), it does not automatically inject React hooks like `useState` into your code by default.

Unlike build tools like Vite or Next.js that use specific plugins for this "magic," `tsx` is designed to be a high-performance **TypeScript execution engine**. It focuses on running your code exactly as written, but faster.

Here is why it might _feel_ like it's working or what's actually happening:

1\. The React 17+ JSX Transform

The `tsx` CLI uses **esbuild** under the hood. By default, esbuild is often configured to use the **automatic JSX transform** (React 17+).

- **What this does**: It allows you to use JSX (like `<div>`) without writing `import React from 'react'` at the top of your file.
- **The Limit**: This **only** applies to the `React` object itself for rendering JSX. It does **not** apply to named hooks like `useState` or `useEffect`.

2\. Why it might not be throwing an error (yet)

If you are running a file with `tsx` and it has a `useState` call but no import:

- **TypeScript Check**: If you run `tsx` without a separate type-checking step, it might simply transpile the code and try to run it.
- **Runtime Error**: You will likely hit a **`ReferenceError: useState is not defined`** the moment that line of code actually executes in Node.js, because Node has no global `useState`.

3\. "Magic" is usually Vite, not the CLI

If you are using a project scaffolded with a tool like **Vite**, you might be seeing its auto-import features in action.

- Vite uses plugins like [unplugin-auto-import](https://unplugin.unjs.io/showcase/unplugin-auto-import) to inject these hooks during the build/dev process.
- The `tsx` CLI itself does not include these types of "code-rewriting" features out of the box to keep its execution clean and predictable.

How to fix it

If you want to keep your code clean but still use `tsx` to run your files, you generally have two options:

- **Standard Way**: Add the explicit import: `import { useState } from 'react';`.
- **Automatic Way**: If you are in a full development environment (like a Vite project), rely on your **IDE's Quick Fix** (Cmd+. or Ctrl+.) to add the import for you instantly when you type the hook name.

Are you running **standalone scripts** with the `tsx` command, or are you working inside a **full React project** like Vite or Next.js?

- [link](https://www.reddit.com/r/reactjs/comments/1jxfbhq/i%5Fstill%5Fneed%5Fto%5Fmanually%5Fimport%5Freact%5Fin%5Fmy%5Fjsx/)\
  I still need to manually import React in my JSX files? - Reddit\
  Do you call state with React. useState or just useState as a named import? The same goes for out-of-the-box React components like ...\
  Reddit
- [link](https://www.jetbrains.com/help/go/typescript-support.html#:~:text=If%20an%20auto%2Dimport%20tooltip%20doesn't%20show%20up%2C,project%2C%20you%20can%20also%20use%20its%20suggestion:)\
  TypeScript | GoLand Documentation - JetBrains\
  If an auto-import tooltip doesn't show up, you can always press and add an import statement via a quick-fix. \* To generate an impo...\
  JetBrains
- [link](https://github.com/microsoft/TypeScript/issues/53008)\
  Auto-import will always use the first import instead of looking ...\
  import { useState } from 'react'; import type { ComponentType } from 'react'; export function Component({ prop } : { prop: Compone...\
  GitHub

Show all

can you config tsx to make it auto import

5:31 pm

While the `tsx` CLI doesn't support "magic" auto-imports natively, you can configure it to achieve this effect. Because `tsx` uses **esbuild** under the hood, you can leverage esbuild's **inject** feature to automatically add imports to every file.

1\. Create an Import "Shim"

First, create a small file (e.g., `react-shim.ts`) that exports the functions you want to be globally available.

typescript

```
// react-shim.ts
export { useState, useEffect, useMemo } from 'react';
```

Use code with caution.

2\. Configure `tsx` to Inject the Shim

You can use the `--tsconfig` flag or an environment variable to pass esbuild options, but the most direct way for a project is to use a custom configuration. If you're running a script directly, you can use the `inject` option via a local `tsconfig.json` or by wrapping the `tsx` call.

However, a cleaner "auto-import" feel in a `tsx` environment is often handled via the **TypeScript compiler settings** in your `tsconfig.json` to allow the JSX transform:

json

```
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

Use code with caution.

- **What this does**: Automatically imports the necessary React functions to render JSX (e.g., `<div>`).
- **The Limitation**: This **only** works for JSX tags. It does **not** auto-import hooks like `useState`.

3\. The "True" Auto-Import Solution

For true hook auto-imports (like `useState`), most developers use [unplugin-auto-import](https://unplugin.unjs.io/showcase/unplugin-auto-import.html). While this is usually a Vite or Webpack plugin, you can use it with **esbuild**—which powers `tsx`—by creating a small `esbuild.config.js`.

javascript

```
// esbuild.config.js
import { build } from 'esbuild'
import AutoImport from 'unplugin-auto-import/esbuild'

build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  plugins: [
    AutoImport({
      imports: ['react'], // This magically handles useState, useEffect, etc.
      dts: './auto-imports.d.ts',
    }),
  ],
})
```

Use code with caution.

Summary of options

- **For JSX Tags**: Set `"jsx": "react-jsx"` in your [TypeScript configuration](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
- **For Hooks**: You must use a build-time plugin like `unplugin-auto-import` or explicitly import them.
- **IDE Help**: If you hate typing imports, ensure `typescript.suggest.autoImports` is `true` in your VS Code settings; it will add the line for you the moment you type the hook.

Are you trying to set this up for a **quick script** or a **larger application**?

- [link](https://github.com/aelbore/esbuild-jest/issues/65)\
  Auto-import React for JSX #65 - aelbore/esbuild-jest - GitHub\
  Description. AleksandrHovhannisyan. opened on Jan 6, 2022. esbuild supports options that allow you to automatically import React f...\
  GitHub
- [link](https://github.com/evanw/esbuild/issues/718)\
  Enable \`jsxImportSource\` · Issue #718 · evanw/esbuild - GitHub\
  on Jan 28, 2021. Owner. The inject feature is just a way to auto-import a variable in esbuild. It by itself has nothing to do with...\
  GitHub
- [link](https://github.com/unplugin/unplugin-auto-import)\
  Unplugin Auto Import - GitHub\
  npm i -D unplugin-auto-import. Vite. // vite.config.ts import AutoImport from 'unplugin-auto-import/vite' export default defineCon...\
  GitHub

Show all

how to let tsx cli awa bundlers auto add a bunch of code whenever running a ts file

5:32 pm

To let the **`tsx` CLI** automatically "inject" or add code (like `useState` imports) to every file, you have to <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;">use a combination of <strong>Node.js flags</strong> and <strong>TypeScript configurations</strong></mark>.

Because `tsx` is designed to be zero-config, it doesn't have a "plugins" system like Vite. Instead, you "trick" the runtime into making these functions global.

1\. The Global Injection (The "Runtime" Fix)

To make functions like `useState` available without importing them in every file, you can create a **preload script** that attaches them to the `global` object.

1. **Create a file** named `globals.ts`:\
   typescript

<!---->

```
import { useState, useEffect } from 'react';

// Attach hooks to the global object so they are accessible everywhere
(global as any).useState = useState;
(global as any).useEffect = useEffect;
```

Use code with caution.
2\. **Run `tsx` with the `--import` flag**:\
Instead of just running your file, tell `tsx` to import your globals file first. This makes those hooks available before your script even starts.\
bash

```
npx tsx --import ./globals.ts your-file.tsx
```

Use code with caution.

2\. The TypeScript "Red Squiggly" Fix

Even if the code runs, TypeScript will still complain that `useState` is not defined. You must tell the TS compiler that these are now "global" variables.

1. **Create a declaration file** (e.g., `globals.d.ts`) in your project:\
   typescript

<!---->

```
import * as React from 'react';

declare global {
  const useState: typeof React.useState;
  const useEffect: typeof React.useEffect;
}
```

Use code with caution.
2\. **Ensure it's in your `tsconfig.json`**:\
Make sure your `include` array covers this `.d.ts` file so your editor recognizes the globals.

3\. Automatically adding JSX support

If you mainly want to avoid `import React from 'react'` for JSX tags (like `<div>`), you don't need a preload script. You can just update your `tsconfig.json`:

json

```
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

Use code with caution.

With this set, `tsx` (via its internal esbuild engine) will automatically handle the `React` import for JSX behind the scenes.

Summary Table

| Goal                          | Method                                      |
| ----------------------------- | ------------------------------------------- |
| **No `React` import for JSX** | Use `"jsx": "react-jsx"` in `tsconfig.json` |
| **No `useState` import**      | Use `--import ./globals.ts` with `tsx`      |
| **Remove TS Errors**          | Create a `globals.d.ts` file                |

Would you like a sample **`package.json` script** to make this the default way your project runs?

- [link](https://www.typescriptlang.org/tsconfig/)\
  TSConfig Reference - Docs on every TSConfig option\
  These options make up the bulk of TypeScript's configuration and it covers how the language should work. \* Type Checking. \* Module...\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/compiler-options.html)\
  Documentation - tsc CLI Options - TypeScript\
  Enable importing files with any extension, provided a declaration file is present. --allowImportingTsExtensions. boolean. true if ...\
  TypeScript
- [link](https://tsx.is/dev-api/)\
  Developer API | tsx\
  Developer API ​ The Developer API allows you to enhance Node. js with tsx without needing to use the tsx command. Note that CLI fe...\
  TypeScript Execute (tsx)

Show all

i mean my own std file. not react.

5:33 pm

To make your own standard library functions available globally in every file without manual imports while using the **`tsx` CLI**, you need a two-part setup: one for the **runtime** (to make the code work) and one for **TypeScript** (to remove the "not defined" errors).

1\. The Runtime Injection (Node.js `--import`)

The `tsx` CLI is a wrapper for Node.js, so it supports the native `--import` flag to preload code into the global scope before your actual script runs.

1. **Create your "std" file** (e.g., `my-std.ts`):\
   typescript

<!---->

```
// my-std.ts
export function myGlobalFunc() {
  console.log("Hello from your std lib!");
}

// Attach to the global object
(global as any).myGlobalFunc = myGlobalFunc;
```

Use code with caution.
2\. **Run your files using the `--import` flag**:\
bash

```
npx tsx --import ./my-std.ts your-script.ts
```

Use code with caution.

2\. The TypeScript Injection (Global Declarations)

Even if the code runs, your editor will still show red lines because it doesn't know these functions are global. You must "declare" them in the global namespace.

1. **Create a declaration file** (e.g., `std.d.ts`):\
   typescript

<!---->

```
// std.d.ts
declare global {
  function myGlobalFunc(): void;
  // Add any other functions or variables here
}

export {}; // Mark this as a module
```

Use code with caution.
2\. **Update your `tsconfig.json`**:\
Ensure this file is included in your project's compilation so the types are always available.\
json

```
{
  "include": ["src/**/*", "std.d.ts"]
}
```

Use code with caution.

3\. Simplification via `package.json`

To avoid typing the long command every time, add it to your [scripts](https://www.npmjs.com/package/@matthd/tsx):

json

```
{
  "scripts": {
    "start": "tsx --import ./my-std.ts src/index.ts",
    "run": "tsx --import ./my-std.ts"
  }
}
```

Use code with caution.

Now you can just run `npm run run your-file.ts`.

Alternative: Bundler Injection (Vite/Webpack)

If you are also using a bundler for a larger app, you can use **`unplugin-auto-import`** to automatically "rewrite" your files to include the imports behind the scenes without polluting the global scope. This is generally considered "safer" for production apps than global scope pollution.

Do you want to see how to set up **auto-importing via a bundler config** instead?

- [link](https://www.reddit.com/r/typescript/comments/l6vyiy/is%5Fit%5Fpossible%5Fto%5Fdeclare%5Fa%5Fglobal/)\
  Is it possible to declare a global function/variable type that can be ...\
  But this is a solution that works: \* create a global.d.ts file in say a folder named, say types , in your src. \* declare the globa...\
  Reddit
- [link](https://stackoverflow.com/questions/76897558/how-to-avoid-manual-import-something-into-every-tsx-and-make-all-tsx-implicitl)\
  how to avoid manual import something into every .tsx and ...\
  \* 1 Answer. Sorted by: 0. This is how you should do it - import tHTML from "typed-html"; declare global { type tHTML = typeof tHTM...\
  Stack Overflow
- [link](https://nodejs.org/learn/typescript/run)\
  Running TypeScript with a runner | Node.js Learn\
  To use ts-node , you need to install it first: \* npm i -D ts-node. Then you can run your TypeScript code like this: \* npx ts-node ...\
  Node.js

Show all

i dont wanna attach to the global obj. i want to make it work like exactly if i place an import

5:34 pm

If you want your code to act **exactly** as if an `import` was physically present in the file—without polluting the `global` object—you need a tool that performs a **code transformation** at compile time.

Since `tsx` is built on **esbuild**, it doesn't support the "magic" injection features of larger bundlers like Vite or Webpack natively in its zero-config mode. To achieve this, you must switch from the simple `tsx` CLI to an **esbuild build script** using the `inject` feature.

1\. The "Standard" Way: esbuild `inject`

The `inject` option in esbuild tells the compiler: "If you see a variable that isn't defined, look for it in these files and automatically add the import for it.".

1. **Create your "std" file** (e.g., `std.ts`):\
   typescript

<!---->

```
// std.ts
export const myHelper = () => console.log("Standard Helper!");
```

Use code with caution.
2\. **Create a build script** (e.g., `build.js`):\
javascript

```
import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['your-file.ts'],
  bundle: true,
  outfile: 'out.js',
  inject: ['./std.ts'], // This "magically" adds the import where needed
});
```

Use code with caution.
3\. **Run the result**:\
`node out.js`

2\. The "Automatic" Way: `unplugin-auto-import`

If you want this to work across a large project without manually managing an injection list, you should use [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import). This is the tool that makes `useState` "magically" work in frameworks like Vite.

It scans your code for undefined variables and **actually rewrites the code** to include the correct imports before it runs. You can configure it for esbuild like this:

javascript

```
// esbuild.config.js
import AutoImport from 'unplugin-auto-import/esbuild';

esbuild.build({
  // ... other config
  plugins: [
    AutoImport({
      imports: [
        'react', // Presets for popular libs
        { './src/my-std': [['default', 'std'], 'myHelper'] } // Your custom functions
      ],
    }),
  ],
});
```

Use code with caution.

3\. The TypeScript Problem

Even with a bundler adding imports, **TypeScript will still error** in your editor because the source code _looks_ like it's missing imports.

- **The Fix**: Most auto-import plugins generate an `auto-imports.d.ts` file.
- You must include this file in your `tsconfig.json` so the TypeScript compiler "sees" these functions as globally available.

Why `tsx` CLI alone can't do this

The `tsx` CLI uses esbuild's **Transform API**, which does not support plugins or the `inject` option. It is strictly "run what is on the page." If you refuse to use `global`, you must move to a **bundler-based workflow** where a plugin can modify the source code before execution.

Would you like help setting up a **Vite-style config** that handles this for both dev and production?

- [link](https://github.com/evanw/esbuild/issues/984)\
  Allow inject in TransformOptions? #984 - evanw/esbuild - GitHub\
  The use case is the same as it is with build and buildSync , but at a per-file level. This is useful for register/loader hooks. Fo...\
  GitHub
- [link](https://github.com/unplugin/unplugin-auto-import)\
  Unplugin Auto Import - GitHub\
  If you have encountered ESLint error of no-undef : Enable eslintrc. enabled. AutoImport({ eslintrc: { enabled: true, // <-- this }\
  GitHub
- [link](https://stackoverflow.com/questions/79246849/autoimport-unplugin-auto-import-and-typescript-errors)\
  AutoImport (unplugin-auto-import) and TypeScript errors\
  Comments. Add a comment. 0. As already mentioned, you need to configure tsconfig.json . I would add that the include field should ...\
  Stack Overflow

Show all

i would rather choose global. but i dont wanna run with import flag. can i create a config so it will read and work like i have the flag.

5:37 pm

If you want to use your global library without typing `--import` every time you run a file, you have two main ways to bake that configuration into your project.

1\. Using Node Environment Variables (`NODE_OPTIONS`)

The `tsx` CLI is a wrapper for Node.js, and Node has a built-in environment variable called `NODE_OPTIONS` that can force flags onto every execution.

1. **Find your terminal's profile** (e.g., `.bashrc`, `.zshrc`, or `.env`).

2. **Add this line**:\
   bash

<!---->

```
export NODE_OPTIONS="--import /path/to/your/my-std.ts"
```

Use code with caution.
3\. **Result**: From now on, whenever you run `npx tsx file.ts`, Node will automatically preload your library into the global scope as if the flag were there.

2\. Using "Shebang" in your files

If you have specific scripts that you run frequently, you can add a "shebang" line at the very top of the file. This tells the system exactly how to run that file.

1. **Add this to the first line** of your script:\
   typescript

<!---->

```
#!/usr/bin/env -S npx tsx --import ./my-std.ts

// your code starts here
myGlobalFunc();
```

Use code with caution.
2\. **Make the file executable**: `chmod +x your-file.ts`.
3\. **Run it directly**: `./your-file.ts`. The system will automatically use `tsx` with your custom import.

3\. Creating a custom "alias" or command

If you don't want to mess with system-wide environment variables, you can create a local project command in your `package.json`.

json

```
{
  "scripts": {
    "dev": "tsx --import ./my-std.ts"
  }
}
```

Use code with caution.

Now, you can run any file using `npm run dev -- your-file.ts`. The `--` passes the filename as an argument to your pre-configured command.

Don't forget the TypeScript types

Since you are using globals, TypeScript will still flag these as errors in your editor unless you tell it they exist.

- **Create a `globals.d.ts`**:\
  typescript

<!---->

```
declare global {
  var myGlobalFunc: () => void;
}
export {};
```

Use code with caution.

- **Include it** in your `tsconfig.json` so the red squiggly lines go away.

Which of these fits your **daily workflow** best?

- [link](https://agentfactory.panaversity.org/docs/TypeScript-Language-Realtime-Interaction/cli-tools-developer-experience/tsx-for-development)\
  tsx for Development - Agent Factory - Panaversity\
  Making It Executable​ ... ./src/cli. ts "Hello, AI!" Output: You said: Hello, AI! The shebang #!/usr/bin/env tsx tells the operati...\
  The AI Agent Factory
- [link](https://stackoverflow.com/questions/76897558/how-to-avoid-manual-import-something-into-every-tsx-and-make-all-tsx-implicitl)\
  how to avoid manual import something into every .tsx and make all . ...\
  \* 1 Answer. Sorted by: 0. This is how you should do it - import tHTML from "typed-html"; declare global { type tHTML = typeof tHTM...\
  Stack Overflow
- [link](https://github.com/withKonvSuu/learn-tsx)\
  GitHub - withKonvSuu/learn-tsx: ⚡️ TypeScript Execute\
  Run file and automatically rerun on changes: tsx watch ./file.ts. All imported files are watched except from the following directo...\
  GitHub

Show all

#

how does nodejs --import flag work

5:38 pm

The `--import` flag in Node.js <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;">allows you to pre-load an <strong>ES module (ESM)</strong> before the main application script starts</mark>. It is essentially the ESM equivalent of the older `--require` flag used for CommonJS.

Key Functions

- **Module Pre-loading**: It executes the specified module before the entry point of your application, making it ideal for setup tasks like instrumentation, environment configuration, or polyfills.
- **Custom Loaders**: It is the modern, recommended way to register **custom customization hooks** (loaders). Instead of using the now-discouraged `--experimental-loader`, you can use `--import` to run a script that calls the `register` function from the `node:module` API.
- **Universal Support**: Unlike `--require`, which only works with CommonJS files, `--import` can be used regardless of whether your project's primary module system is ESM or CommonJS.

Basic Usage

To use the flag, provide the path to the module you want to pre-load:

bash

```
node --import ./setup.mjs index.js
```

Use code with caution.

Why Use `--import` over `--require`?

While both serve similar purposes for pre-loading code, they differ in compatibility:

- **`--require`**: Only loads CommonJS modules. If you try to use it with an ES module, Node.js will throw an error.
- **`--import`**: Supports ES modules and is the standard for future-proofing tools (like `ts-node`) that need to hook into Node's module resolution system.

For more technical details on module loading, you can refer to the Node.js Command-line API Documentation or the [ECMAScript Modules guide](https://nodejs.org/api/esm.html).

Are you planning to use this for **instrumentation** or for setting up a **TypeScript loader**?

- [link](https://nodejs.org/api/cli.html)\
  Command-line API | Node.js v25.9.0 Documentation\
  \--import=module. --input-type=type. --insecure-http-parser. --inspect-brk\[=\[host:]port] --inspect-port=\[host:]port. --inspect-publ...\
  Node.js
- [link](https://nodejs.org/api/esm.html)\
  ECMAScript modules | Node.js v25.9.0 Documentation\
  Enabling# Node. js has two module systems: CommonJS modules and ECMAScript modules. Authors can tell Node. js to interpret JavaScr...\
  Node.js
- [link](https://github.com/TypeStrong/ts-node/issues/1909)\
  \`--import\` flag for Node.js parity · Issue #1909 - GitHub\
  GeoffreyBooth commented. GeoffreyBooth. on May 1, 2024 · edited by GeoffreyBooth. Hi, I work on Node. js. The --loader flag is und...\
  GitHub

Show all

example

5:40 pm

A simple way to see `--import` in action is using it to set up environment variables or global configurations before your main code runs.

1\. Create the files

First, create a setup file that performs some initialization:

javascript

```
// setup.mjs
console.log("1. [Setup] Initializing environment...");
process.env.MY_APP_MODE = "production";
```

Use code with caution.

Then, create your main application file:

javascript

```
// index.js
console.log("2. [Main] Application started.");
console.log(`3. [Main] Mode is: ${process.env.MY_APP_MODE}`);
```

Use code with caution.

2\. Run with the flag

When you run Node.js with the `--import` flag, the setup script executes first, even though it isn't referenced inside `index.js`.

**Command:**

bash

```
node --import ./setup.mjs index.js
```

Use code with caution.

**Output:**

text

```
1. [Setup] Initializing environment...
2. [Main] Application started.
3. [Main] Mode is: production
```

Use code with caution.

Common Real-World Examples

- **Registering Loaders**: Hooking into the module system to support TypeScript or JSX on the fly using `register()` from the Node.js `module` API.
- **Observability**: Pre-loading an APM (Application Performance Monitoring) tool like [OpenTelemetry](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/) to instrument your app without changing your source code.
- **Mocks**: Injecting global mocks or polyfills for testing environments.

Would you like to see how to use this for **registering a custom loader** specifically?

i use ts

5:40 pm

In a TypeScript environment, the `--import` flag is the modern way to register loaders that let Node.js execute `.ts` files directly. This replaces older, experimental flags like `--loader` or `--experimental-loader`.

Using with `tsx` (Recommended)

The tool [**tsx**](https://tsx.is/getting-started) is currently the most seamless way to use this flag. It handles both ES modules and CommonJS automatically.

1. **Install the package**:\
   bash

<!---->

```
npm install --save-dev tsx
```

Use code with caution.
2\. **Run your TypeScript file**:\
Instead of compiling first, use the flag to register the `tsx` loader:\
bash

```
node --import tsx index.ts
```

Use code with caution.

- To only support **ESM**, use `--import tsx/esm`.
- To only support **CommonJS**, use `--require tsx/cjs`.

Using with `ts-node`

For [**ts-node**](https://github.com/TypeStrong/ts-node), the `--import` flag requires a small "registration" script because `ts-node` does not yet export a direct entry point for `--import`.

1. **Create a registration file** (e.g., `register.js`):\
   javascript

<!---->

```
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// This tells Node to use ts-node for module resolution
register('ts-node/esm', pathToFileURL('./'));
```

Use code with caution.
2\. **Run your application**:\
bash

```
node --import ./register.js index.ts
```

Use code with caution.

Native Node.js Support (Node 22.6+)

If you are on Node.js v22.6.0 or later, you can run simple TypeScript files **without any third-party loaders** or `--import` by using experimental flags.

- **Type Stripping**: `node --experimental-strip-types index.ts`
- **With Transformation** (for features like enums): `node --experimental-strip-types --experimental-transform-types index.ts`

**Note**: Native support currently just removes types and does not perform type checking. Use `tsc --noEmit` if you need to check for errors.

Would you like a **sample `package.json` script** setup to automate these commands for your project?

- [link](https://github.com/TypeStrong/ts-node/issues/2072)\
  Export ts-node/esm-register to use with --import #2072 - GitHub\
  Desired Behavior. Register the ts-node/esm loader using the register function. Example of use: node --import=ts-node/esm-register.\
  GitHub
- [link](https://nodejs.org/api/typescript.html)\
  Modules: TypeScript | Node.js v25.9.0 Documentation\
  Full TypeScript support# To use TypeScript with full support for all TypeScript features, including tsconfig. json , you can use a...\
  Node.js
- [link](https://nodesource.com/blog/Node.js-Supports-TypeScript-Natively)\
  Node.js Now Supports TypeScript Natively - NodeSource\
  // Traditional TypeScript import { myFunction } from './my-module.js'; // Node.js Native TypeScript import { myFunction } from './\
  NodeSource

Show all

#

nodejs --import flag example

5:41 pm

The Node.js `--import` flag is used to **preload an ECMAScript module (ESM)** before the main entry point of your application runs. It is the modern, ESM-compatible successor to the `--require` flag used for CommonJS.

Basic Example

If you have a file named `preload.mjs` that you want to execute before your main `app.js`:

**1. Create the preload file:**

javascript

```
// preload.mjs
console.log("Preloading configuration...");
process.env.APP_VERSION = '1.0.0';
```

Use code with caution.

**2. Run your application with the flag:**

bash

```
node --import ./preload.mjs app.js
```

Use code with caution.

Common Use Cases

The `--import` flag is frequently used for instrumentation, testing, or environment setups:

- **Instrumentation (e.g., Sentry):** Preload an [instrumentation file](https://docs.sentry.io/platforms/javascript/guides/solidstart/install/cli-import/) to track errors or performance from the very start of the process.\
  bash

<!---->

```
node --import ./instrument.mjs app.mjs
```

Use code with caution.

- **Running TypeScript directly:** When using modern TypeScript execution tools like [tsx](https://nodejs.org/api/typescript.html), you can use `--import` to register the loader.\
  bash

<!---->

```
node --import tsx app.ts
```

Use code with caution.

- **Custom Loaders/Hooks:** Preload modules that register customization hooks to modify how Node.js resolves or loads other modules.

Key Differences from `--require`

| Feature           | `--require`                 | `--import`                                             |
| ----------------- | --------------------------- | ------------------------------------------------------ |
| **Module Type**   | CommonJS (CJS)              | ECMAScript Modules (ESM)                               |
| **Execution**     | Synchronous                 | Asynchronous                                           |
| **Compatibility** | Standard for older projects | Required for pre-loading ESM in newer Node.js versions |

Would you like to see how to use this flag specifically for **custom loader hooks** or **testing frameworks**?

- [link](https://github.com/nodejs/node/issues/40110)\
  Add \`--import \` flag for pre-loading ESM ... - GitHub\
  ... an issue with process.argv going missing when the --import flag is used (both in the module registration worker, and the main ...\
  GitHub
- [link](https://nodejs.org/api/typescript.html)\
  Modules: TypeScript | Node.js v25.9.0 Documentation\
  These instructions use tsx as an example but there are many other similar libraries available. \* Install the package as a developm...\
  Node.js
- [link](https://github.com/TypeStrong/ts-node/issues/1909)\
  \`--import\` flag for Node.js parity · Issue #1909 - GitHub\
  GeoffreyBooth commented. GeoffreyBooth. on May 1, 2024 · edited by GeoffreyBooth. Hi, I work on Node. js. The --loader flag is und...\
  GitHub

Show all

can the prelude use import instead of changing global vars

5:42 pm

Yes, your preloaded module (the "prelude") can use `import` statements and even share data with the main application without relying on global variables. Because modules in Node.js are **cached and shared**, you can use a "shared state" module that both files import.

1\. The Shared State Module

Create a separate file to hold the data you want to share.

javascript

```
// config.mjs
export const settings = {
  version: '1.0.0',
  dbConnected: false
};
```

Use code with caution.

2\. The Prelude Module

Use the `--import` flag to load a script that modifies that shared state.

javascript

```
// prelude.mjs
import { settings } from './config.mjs';

console.log("Prelude: Configuring app...");
settings.dbConnected = true; // Modify the shared object
```

Use code with caution.

3\. The Main Application

When the main app starts, it imports the same `config.mjs`. Since Node.js only evaluates a module once, the `settings` object is the exact same instance modified by the prelude.

javascript

```
// app.js
import { settings } from './config.mjs';

console.log(`App Version: ${settings.version}`);
console.log(`Is DB Connected? ${settings.dbConnected}`); // true
```

Use code with caution.

How to Run

Execute the command using the `--import` flag:

bash

```
node --import ./prelude.mjs app.js
```

Use code with caution.

Why this works

- **Module Caching**: When `app.js` runs its `import`, Node.js retrieves the already-initialized and modified module instance from its cache.
- **Encapsulation**: No variables are added to `globalThis`, keeping your global scope clean and avoiding name collisions.
- **Modern Support**: Unlike the older `-r` (require) flag, `--import` is designed specifically for ECMAScript Modules (ESM).

Would you like to see how to use this for **environment-specific** configurations or **mocking** modules during testing?

- [link](https://nodejs.org/api/esm.html)\
  ECMAScript modules | Node.js v25.9.0 Documentation\
  Enabling# Node. js has two module systems: CommonJS modules and ECMAScript modules. Authors can tell Node. js to interpret JavaScr...\
  Node.js
- [link](https://github.com/nodejs/node/issues/40110)\
  Add \`--import \` flag for pre-loading ESM ... - GitHub\
  Is your feature request related to a problem? Please describe. -r can be used only on CommonJS modules, as documented here. Pre-lo...\
  GitHub
- [link](https://stackoverflow.com/questions/65656693/sharing-variables-between-files-in-node-js)\
  Sharing variables between files in node.js - javascript - Stack Overflow\
  \* 3 Answers. Sorted by: 5. Other answers given here suggest using globals, but you should avoid use of globals for a whole host of...\
  Stack Overflow

Show all

i mean, like i want something that instead of import something from mylibstd, i config it in import so i dont have to write it everywhere. i could put something to globalthis in the prelude, but can i just use import?

5:44 pm

While standard ECMAScript modules require explicit `import` statements in every file, you can achieve "automatic" imports without manually writing them everywhere by using build-tool configurations or modern browser features.

1\. Webpack: ProvidePlugin

If you use Webpack, the **[ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/)** is the standard way to handle this. It automatically loads a module whenever it encounters a specific identifier in your code.

- **How it works:** When Webpack finds a variable that isn't defined in a file, it checks your config. If it matches a key in `ProvidePlugin`, it "injects" the import at the top of that file during the build process.

- **Example Config:**\
  javascript

<!---->

```
// webpack.config.js
const webpack = require('webpack');
module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      mylib: 'mylibstd', // Maps 'mylib' identifier to the 'mylibstd' module
      MyComponent: ['mylibstd', 'MyComponent'] // Named export example
    })
  ]
};
```

Use code with caution.

2\. Vite / Rollup: unplugin-auto-import

For modern Vite or Rollup projects, the **[unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import)** library is highly popular. It is often used to avoid repetitive imports for frameworks like Vue or React, but it works for custom libraries too.

- It automatically generates type definitions so your IDE (like VS Code) still recognizes the "hidden" imports.

3\. Browser: Import Maps

If you are working directly in a browser without a bundler, **Import Maps** let you define "bare specifiers". While this doesn't remove the need for the `import` line, it simplifies it so you don't have to manage long relative paths.

- **Benefit:** You can use `import { x } from 'mylibstd'` instead of `import { x } from '../../utils/mylibstd.js'`.

- **Setup:**\
  html

<!---->

```
<script type="importmap">
{
  "imports": {
    "mylibstd": "/js/mylibstd.js"
  }
}
</script>
```

Use code with caution.

4\. Babel: babel-plugin-auto-import

You can use **[babel-plugin-auto-import](https://www.npmjs.com/package/babel-plugin-import)** to transform your code during compilation. It scans for specific variables and inserts the necessary `import` statements automatically.

Comparison of Approaches

| Method                   | Best For            | Pros                                | Cons                                                 |
| ------------------------ | ------------------- | ----------------------------------- | ---------------------------------------------------- |
| **ProvidePlugin**        | Webpack users       | Built-in, stable.                   | Harder for IDEs to "see" without extra config.       |
| **unplugin-auto-import** | Vite/Rollup/Next.js | Excellent DX, auto-generates types. | Requires an external plugin.                         |
| **Import Maps**          | Native browser JS   | No build step required.             | Still requires a one-line import in each file.       |
| **globalThis**           | Quick prototyping   | Zero config, truly global.          | Harder to track dependencies; pollutes global scope. |

Which **build tool** or **environment** (Vite, Webpack, Node, or Browser) are you currently using for your project?

- [link](https://webpack.js.org/plugins/provide-plugin/)\
  ProvidePlugin - webpack\
  Automatically load modules instead of having to import or require them everywhere. new webpack. ProvidePlugin({ identifier: "modul...\
  webpack
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)\
  JavaScript modules - MDN Web Docs - Mozilla\
  Importing features into your script. Once you've exported some features out of your module, you need to import them into your scri...\
  MDN Web Docs
- [link](https://mintlify.com/webpack/webpack/plugins/provide-plugin)\
  ProvidePlugin - webpack - Mintlify\
  ProvidePlugin. ... The ProvidePlugin automatically loads modules instead of having to import or require them everywhere. When webp...\
  Mintlify

Show all

i mean can nodejs import flag do this

5:44 pm

The Node.js `--import` flag cannot automatically inject `import` statements into your other files. In standard ECMAScript Modules (ESM), every file is an isolated scope; if you want to use a variable or function from a module, you **must** explicitly import it in that file.

However, you can achieve your goal of "not writing it everywhere" by using one of these two alternative strategies:

1\. The Global Variable Strategy (Easiest)

If you truly want a library to be available everywhere without an `import` line, you can attach it to the `globalThis` object in your prelude file. This is exactly how tools like [Sentry](https://docs.sentry.io/platforms/javascript/guides/solidstart/install/cli-import/) or performance tracers work when preloaded.

**Step 1: Create your prelude**

javascript

```
// prelude.mjs
import { myLib } from 'mylibstd';
globalThis.mylib = myLib; // Attach to global scope
```

Use code with caution.

**Step 2: Run with the flag**

bash

```
node --import ./prelude.mjs app.js
```

Use code with caution.

**Step 3: Use it in any file**

javascript

```
// app.js (No import statement needed!)
mylib.doSomething();
```

Use code with caution.

2\. Module Customization Hooks (Advanced)

If you want to avoid globals entirely, you can use Module Customization Hooks (formerly Loaders). You can write a hook that intercepts the `load` process and literally prepends an `import` string to the source code of every file before Node.js executes it.

This is more complex and typically only used by tools like [tsx](https://nodejs.org/api/typescript.html) or [Babel](https://webpack.js.org/plugins/provide-plugin/) to transpile code on the fly.

Comparison

- **Global Variables**: Simple, standard, but "pollutes" the global scope.
- **Build Tools**: If you use Vite or Webpack, they have plugins that can automatically inject these imports during the build step so your code stays "clean".

Does attaching the library to **globalThis** in your prelude sound like it fits your workflow, or do you need to avoid global variables for a specific reason?

- [link](https://www.youtube.com/watch?v=fuRA874CkZU)\
  Module Customization Hooks by Example - Abhijeet Prasad ...\
  The module customization hooks API in Node.js controls how Node.js resolves and loads modules. This API was previously referred to...\
  24:00\
  YouTube·OpenJS Foundation
- [link](https://nodejs.org/download/release/v18.20.6/docs/api/module.html)\
  Modules: node:module API | Node.js v18.20.6 Documentation\
  Module resolution and loading can be customized by registering a file which exports a set of hooks. This can be done using the reg...\
  Node.js
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#:~:text=In%20order%20to%20use%20the%20import%20declaration,is%20done%20by%20adding%20type=%22module%22%20to%20the)\
  import - JavaScript - MDN Web Docs - Mozilla\
  In order to use the import declaration in a source file, the file must be interpreted by the runtime as a module. In HTML, this is...\
  MDN Web Docs

Show all

#

i have declare global why is it not seen by another ts file

In TypeScript, `declare global` is often not "seen" by other files because <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;">the file containing the declaration is being treated as a <strong>script</strong> rather than a <strong>module</strong></mark>, or vice versa.

Primary Reasons & Solutions

- **Missing `export {}`**: If your file does not contain any top-level `import` or `export` statements, TypeScript treats it as a global script. If you are using `declare global` inside such a file, it may fail because `declare global` is specifically intended to "escape" a module's scope into the global scope.
  - **Fix**: Add `export {};` at the end of your file to force TypeScript to treat it as a module.
- **File Not Included in `tsconfig.json`**: The TypeScript compiler only tracks files defined in your `include` or `files` arrays. If your global declaration file is outside these paths, other files won't see it.
  - **Fix**: Ensure the folder containing your `.d.ts` file is in the `include` section of your `tsconfig.json` (e.g., `"include": ["src/**/*", "types/**/*"]`).
- **Module Augmentation Requirements**: When augmenting global interfaces (like `Window`), you must use the `declare global` block specifically within a module.
  - **Fix**: Use the following structure in a `.ts` or `.d.ts` file:\
    typescript

<!---->

```
export {}; // Mark as a module
declare global {
  interface Window {
    myGlobalVar: string;
  }
}
```

Use code with caution.

- **Ambient Declaration Files (`.d.ts`)**: If you put your declarations in a `.d.ts` file and that file contains an `import` or `export` at the top level, it becomes a module and its contents are no longer global by default.
  - **Fix**: Either remove all imports/exports to keep it a "pure" global declaration file, or wrap your types inside a `declare global {}` block if you must keep the imports.

Quick Verification Checklist

1. Does the file have `export {};`?
2. Is the file path covered by your `tsconfig.json` `include` setting?
3. Have you restarted your **TypeScript server** (or IDE) after making changes to a `.d.ts` file?

Would you like me to check your **tsconfig.json** or a specific **code snippet** to identify the exact cause?

- [link](https://www.reddit.com/r/typescript/comments/1hbqw0n/what%5Fis%5Fglobaldts%5Ffile%5Fin%5Ftypescript%5Fhow%5Fdo%5Fyou/#:~:text=the%20compiler%20assumes%20that%20wherever,Typescript%20typechecker%20thinks%20it's%20there.)\
  What is global.d.ts file in Typescript ? How do you use ... - Reddit\
  11 Dec 2024 — the compiler assumes that wherever it sees a declaration file, there is a corresponding JavaScript file that is perfectly describe...\
  Reddit·r/typescript
- [link](https://stackoverflow.com/questions/79494819/why-are-my-global-declarations-in-index-d-ts-not-being-recognized-in-my-typescri#:~:text=2025%2D11%2D14T18:12,0)\
  Why are my global declarations in index.d.ts not being ...\
  8 Mar 2025 — 3 Answers. ... Since index. ts contains actual logic so typescript treats index. d. ts as a module instead of global declaration f...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=0zp9bkEfaOc)\
  Declaring globals isn't that hard\
  8 Jan 2024 — also wizards let's talk about something that I see TypeScript developers getting wrong all the time declaring the types for global...\
  3:50\
  YouTube·Matt Pocock

Show all

well, it's seen. but when i refer to a global type in a file in a hidden folder starting with dot, it could not see anything.

Something went wrong and the content wasn't generated.

well, it's seen. but when i refer to a global type in a file in a hidden folder starting with dot, it could not see anything.

The issue is that **TypeScript's default file discovery (glob patterns) often ignores hidden "dot" directories** to avoid accidental compilation of temporary or configuration files. If your global types are "seen" elsewhere but not in your `.hidden-folder`, it’s likely because that folder is being excluded from the TypeScript project context.

Primary Fixes

1. **Explicitly Include the Hidden Folder**\
   Standard patterns like `**/*` usually skip files/folders starting with a dot. You must add the specific hidden path to your `tsconfig.json` `include` array:\
   json

<!---->

```
{
  "compilerOptions": { ... },
  "include": [
    "src/**/*",
    ".my-hidden-folder/**/*"  // Explicitly add the dot folder
  ]
}
```

Use code with caution.
2\. **Use a Triple-Slash Reference (Quick Fix)**\
If you don't want to modify your global config, you can "remind" TypeScript to include your global definitions by adding a reference at the very top of the file inside the hidden folder:\
typescript

```
/// <reference path="../path/to/your/global.d.ts" />
```

Use code with caution.
3\. **Check IDE Exclusions (VS Code)**\
If the code compiles with `tsc` but your editor shows red squiggles, the folder might be hidden from the editor's language server.

- Open **Settings** (Ctrl + ,).
- Search for `files.exclude`.
- Ensure there isn't a pattern like `**/.*` that is preventing the editor from processing those files.

Why this happens

In Unix-like systems, tools typically ignore "dot" files unless explicitly told otherwise to prevent issues with auto-generated editor files (like `.foo.ts` from Emacs). TypeScript follows this convention, meaning files inside `.folder/` are effectively "invisible" to the compiler's default search even if they are within your project root.

**Does your `.hidden-folder` have its own `tsconfig.json`?** If so, that sub-config won't inherit your global types unless it's part of a [project reference](https://www.typescriptlang.org/docs/handbook/project-references.html).

- [link](https://griffa.dev/posts/type-checking-global-javascript-libraries-in-vs-code-for-when-you-just-want-learn-and-code./#:~:text=Next%20up%20we're%20going,available%20right%20in%20your%20editor.)\
  Type checking global JavaScript libraries in VS Code for when ...\
  18 Apr 2021 — Next up we're going to create a TypeScript declaration file. In this file we're going to tell TypeScript that the TensorflowJS lib...\
  griffa.dev
- [link](https://github.com/microsoft/TypeScript/issues/49555#:~:text=%E2%AD%90%20Suggestion,files%20in%20a%20hidden%20directory.)\
  Option in TSConfig to include hidden/dot files #49555 - GitHub\
  15 Jun 2022 — ⭐ Suggestion. Add an option in TSConfig to include hidden files (and hidden directories) in include and exclude options. { "hidden...\
  GitHub
- [link](https://github.com/microsoft/TypeScript/issues/6861#:~:text=Description&text=On%20Unixy%20platforms%2C%20tsc%20should,need%20to%20opt%20in%20to.)\
  tsc should ignore hidden files by default · Issue #6861 - GitHub\
  2 Feb 2016 — Description. ... On Unixy platforms, tsc should by default not attempt to compile files that begin with a dot (hereafter called "h...\
  GitHub

Show all
