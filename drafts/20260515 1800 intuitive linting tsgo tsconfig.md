#

why ts errs in vscode while eslint does not. how to normalize. Property 'replaceAll' does not exist on type 'string | err | NonSharedBuffer'. Property 'replaceAll' does not exist on type 'err'.ts(2339)

The error `ts(2339)` is a **TypeScript compiler error**, not an ESLint rule error. \[[1](https://github.com/typescript-eslint/typescript-eslint/issues/2390), [2](https://useaxentix.com/blog/javascript/fix-replaceall-is-not-a-function-javascript-error/)]

Why VS Code Shows the Error While ESLint Does Not

- **Separate Responsibilities**: TypeScript verifies syntax, code types, and runtime API existence. ESLint focuses on stylistic consistency and anti-pattern detection. By default, ESLint completely ignores type-validity checks like `ts(2339)`.
- **Outdated Target Library**: The `String.prototype.replaceAll` method was introduced in **ES2021**. Your TypeScript configuration file is likely targeting an older environment like `ES5` or `ES2020`. It flags the method as nonexistent because it isn't defined in those older ECMAScript standards. \[[1](https://stackoverflow.com/questions/63616486/property-replaceall-does-not-exist-on-type-string), [2](https://eslint.org/blog/2025/01/differences-between-eslint-and-typescript/), [3](https://stackoverflow.com/questions/72016705/enable-tslint-eslint-rule-ts2339-property-x-does-not-exist-on-type-y), [4](https://v6--typescript-eslint.netlify.app/linting/troubleshooting/), [5](https://www.totaltypescript.com/workshops/typescript-pro-essentials/types-you-don't-control/configuring-the-lib-compiler-option/solution), [6](https://stackoverflow.com/questions/63616486/property-replaceall-does-not-exist-on-type-string)]

***

How to Normalize and Fix the Error

To align your editor, typescript engine, and linter, apply the steps below:

1\. Update your TypeScript Target \[[1](https://stackoverflow.com/questions/55989880/property-replace-does-not-exist-on-type-string)]

Modify your `tsconfig.json` file to include `ES2021` or later in the `lib` array, or bump the compilation `target`. \[[1](https://www.totaltypescript.com/workshops/typescript-pro-essentials/types-you-don't-control/configuring-the-lib-compiler-option/solution), [2](https://stackoverflow.com/questions/63616486/property-replaceall-does-not-exist-on-type-string)]

json

```
{
  "compilerOptions": {
    "target": "ES2021",
    "lib": ["ES2021", "DOM", "DOM.Iterable"]
  }
}
```

Use code with caution.

_Note: If you do not want to alter your overall compilation target, add just `ES2021.String` to your `lib` block._ \[[1](https://bobbyhadz.com/blog/typescript-string-replace-all-occurrences), [2](https://stackoverflow.com/questions/63616486/property-replaceall-does-not-exist-on-type-string)]

2\. Synchronize VS Code's TypeScript Engine

VS Code often evaluates code using its built-in TypeScript version rather than your local project workspace package. \[[1](https://mikebifulco.com/posts/typescript-vscode-error-fix-last-resort), [2](https://stackoverflow.com/questions/75461919/why-do-i-get-a-typescript-error-in-vs-code-but-not-from-the-tsc-command)]

1. Open any file in your project workspace.
2. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on Mac).
3. Search for and click **TypeScript: Select TypeScript Version...**.
4. Choose **Use Workspace Version**. \[[1](https://mikebifulco.com/posts/typescript-vscode-error-fix-last-resort)]

3\. Enable Typed Linting in ESLint \[[1](https://developercommunity.visualstudio.com/t/local-install-of-eslint-breaks-in-editor-linting/1109947)]

To make ESLint aware of TypeScript types and catch bugs of this nature during a lint pass, configure `typescript-eslint` to parse your `tsconfig.json` properties. \[[1](https://typescript-eslint.io/getting-started/typed-linting)]

**For Flat Config (`eslint.config.js`)**: \[[1](https://typescript-eslint.io/getting-started/typed-linting)]

javascript

```
import tsParser from "@typescript-eslint/parser";

export default [
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true, // Automatically localizes tsconfig.json files
      },
    },
  },
];
```

Use code with caution.

If you prefer to see how your runtime architecture impacts compilation, let me know your **current Node version** and whether you compile your code for a **web browser or a backend server**.

- [link](https://stackoverflow.com/questions/72016705/enable-tslint-eslint-rule-ts2339-property-x-does-not-exist-on-type-y)\
  Enable tslint/eslint rule TS2339 (Property 'x' does not exist on type 'y')\
  Apr 26, 2022 — 1 Answer. ... Eslint concerns itself with other categories of errors, and it leaves reporting typescript that doesn't compile to t...\
  Stack Overflow
- [link](https://mikebifulco.com/posts/typescript-vscode-error-fix-last-resort)\
  Steps I take to fix stubborn TypeScript errors in VS Code\
  Feb 15, 2023 — Here's what I do when I find myself in this situation: Make sure VS Code is using the correct version of TypeScript. Sometimes VS ...\
  Mike Bifulco
- [link](https://stackoverflow.com/questions/63616486/property-replaceall-does-not-exist-on-type-string)\
  Property 'replaceAll' does not exist on type 'string'\
  Aug 27, 2020 — That is because TypeScript does not recognize newer methods, than his current JavaScript version. String. replaceAll() is defined ...\
  Stack Overflow

Show all

my target is esnext. can eslint tell ts errors w some config.

**No, ESLint cannot natively display native TypeScript compiler errors (like `ts(2339)`)**. By design, `typescript-eslint` intentionally leaves type-validity enforcement completely to the TypeScript compiler (`tsc`). \[[1](https://stackoverflow.com/questions/60514929/eslint-not-reporting-typescript-compiler-type-checking-errors), [2](https://github.com/typescript-eslint/typescript-eslint/issues/352)]

However, you can configure **Type-Checked Linting** via `typescript-eslint` to make ESLint run supplementary rules that rely on your `esnext` type definitions. \[[1](https://eslint.org/blog/2025/01/differences-between-eslint-and-typescript/), [2](https://nx.dev/docs/technologies/eslint/guides/eslint)]

***

Step 1: Configure ESLint Type-Aware Rules \[[1](https://eslint.org/blog/2025/01/differences-between-eslint-and-typescript/)]

Use `typescript-eslint` version 7 or 8 with flat config (`eslint.config.js`) to parse types and surface type mismatches as lint rules: \[[1](https://typescript-eslint.io/getting-started/typed-linting), [2](https://nx.dev/docs/technologies/eslint/guides/eslint)]

javascript

```
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // Tells ESLint to use your tsconfig.json setup
        project: true,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // Enables type-aware rules (e.g. flagging unsafe property usage)
      ...tsPlugin.configs["recommended-type-checked"].rules,
    },
  },
];
```

Use code with caution.

***

Step 2: Surface Actual `tsc` Errors alongside ESLint \[[1](https://dev.to/robertcoopercode/comment/8o44)]

If you want a single command or pipeline step that catches both semantic lint styles and native `tsc` type issues, combine them in your `package.json`: \[[1](https://stackoverflow.com/questions/60514929/eslint-not-reporting-typescript-compiler-type-checking-errors)]

json

```
{
  "scripts": {
    "lint": "eslint .",
    "check-types": "tsc --noEmit",
    "validate": "npm run lint && npm run check-types"
  }
}
```

Use code with caution.

***

Step 3: Ensure `esnext` is properly recognized in `tsconfig.json`

Because your target is `esnext`, your compiler assumes an environment with the bleeding-edge ECMA specification. Ensure your library array matches the target capability so methods like `.replaceAll` map correctly:

json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "moduleResolution": "Node",
    "strict": true
  }
}
```

Use code with caution.

If you are using a specific framework, let me know if you are working with **Vite, Next.js, or a monorepo structure**, as their configurations sometimes require distinct `tsconfig` paths.

- [link](https://nx.dev/docs/technologies/eslint/guides/eslint)\
  Configuring ESLint with TypeScript - Nx\
  ESLint is powerful linter by itself, able to work on the syntax of your source files and assert things about based on the rules yo...\
  Nx monorepos
- [link](https://stackoverflow.com/questions/60514929/eslint-not-reporting-typescript-compiler-type-checking-errors)\
  ESLint not reporting TypeScript compiler type checking errors\
  Mar 3, 2020 — Unfortunately ESLint only reports errors from its own linters, it does not report typescript compilation failures. I sympathize wi...\
  Stack Overflow
- [link](https://github.com/typescript-eslint/typescript-eslint/issues/352)\
  ESLint can't detect error from typescript · Issue #352 - GitHub\
  Mar 13, 2019 — mohsen1 commented. mohsen1. on Mar 13, 2019. Contributor. More actions. It's by design I believe. ESLint is not in business of typ...\
  GitHub

Show all

let tsc ignore some files

To make `tsc` completely skip files or directories during compilation and type-checking, you must modify your `tsconfig.json` file.

Method 1: The Global `exclude` Array

Add top-level exclusion patterns to your configuration file. This is the cleanest way to ignore entire folders (like test directories, build artifacts, or specific legacy files).

json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["ESNext", "DOM"]
  },
  "include": ["src/**/*"],
  "exclude": [
    "node_modules",
    "dist",
    "src/**/*.test.ts",
    "src/legacy-file-to-ignore.ts"
  ]
}
```

Use code with caution.

_Note: `exclude` only works if the files are not explicitly pulled back in by an `import` statement inside an included file._

***

Method 2: Inline File Ignoring (`@ts-nocheck`)

If you want to skip type-checking on a single file without altering your global build rules, add this comment to the **absolute top** of that specific file:

typescript

```
// @ts-nocheck
const err: any = {};
err.replaceAll('a', 'b'); // TypeScript will completely ignore errors in this file
```

Use code with caution.

***

Method 3: Skip Type Checking on Third-Party Libraries

If your `ts(2339)` errors stem from declarations or files inside your `node_modules` folder, tell `tsc` to bypass verifying external dependency declaration files (`.d.ts`).

json

```
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

Use code with caution.

If you are trying to hide errors from a specific third-party library or generated folder, tell me the **name of the directory or file** you want to skip so I can provide the exact pattern to use.

can tsc be faster

Yes, `tsc` can be made significantly faster by optimizing your configuration, leveraging caching, or changing how you handle type-checking.

***

1\. Enable Caching and Incremental Builds

Modify your `tsconfig.json` to enable incremental compilation. This tells TypeScript to save information about the project graph from the last compilation, drastically speeding up subsequent runs.

json

```
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./.tsbuildinfo" // Stores the cache graph
  }
}
```

Use code with caution.

***

2\. Isolate Type Checking from Transpilation

Running `tsc` to both check types and emit JavaScript files is slow. Offload these tasks to specialized tools:

- **For Transpilation (Super Fast)**: Use **Vite**, **esbuild**, or **SWC** to compile your TypeScript code into JavaScript. These tools completely skip type-checking, making builds nearly instant.
- **For Type Checking**: Run `tsc --noEmit` on a separate thread or as a pre-commit/CI step solely to find type errors.

***

3\. Skip Declaration Testing

If you haven't already, add `skipLibCheck` to your `compilerOptions`. This prevents TypeScript from type-checking every `.d.ts` file inside your `node_modules`, saving massive amounts of time.

json

```
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

Use code with caution.

***

4\. Optimize the Project Graph (`include` and `exclude`)

Be explicit about what TypeScript scans. If you do not define an `include` array, `tsc` defaults to scanning every file in the directory.

json

```
{
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "cypress", "**/*.spec.ts"]
}
```

Use code with caution.

***

5\. Use Project References for Monorepos

If you have a large codebase, split it into smaller, independent sub-projects using TypeScript **Project References**. This allows `tsc` to only rebuild modules that have actually changed.

json

```
{
  "compilerOptions": {
    "composite": true
  },
  "references": [
    { "path": "../core-package" }
  ]
}
```

Use code with caution.

***

6\. Profile the Bottlenecks

If `tsc` remains slow, diagnose exactly which files or plugins are causing the delay by generating a performance trace:

bash

```
npx tsc --noEmit --generateTrace trace_output_folder
```

Use code with caution.

You can view the resulting files in Edge or Chrome via the `chrome://tracing` or `about:tracing` developer tools.

If your build times are lagging, let me know **how long a typical compile takes** and **how many files are in your project** so I can recommend the highest-impact adjustment.

is there a faster modern alternative of tsc. i already have noemit in tsconfig.

The modern, blazing-fast replacement for native TypeScript type-checking is Microsoft's new native Go-powered compiler engine, commonly referred to as **`tsgo`**. \[[1](https://www.reddit.com/r/programming/comments/1j8s40n/a%5F10x%5Ffaster%5Ftypescript/), [2](https://github.com/langgenius/dify/issues/28438)]

Microsoft introduced this native port to completely rewrite the slow JavaScript/V8-based `tsc` engine into a highly-concurrent native binary. It drops into existing workflows seamlessly and delivers a **10x speed improvement** over traditional `tsc --noEmit` runs. \[[1](https://www.reddit.com/r/programming/comments/1j8s40n/a%5F10x%5Ffaster%5Ftypescript/), [2](https://devblogs.microsoft.com/typescript/typescript-native-port/), [3](https://cs.grinnell.edu/lunar-note/swc-vs-typescript-which-compiler-is-faster-1764801264), [4](https://github.com/langgenius/dify/issues/28438)]

Third-party Rust attempts like `stc` were abandoned due to the extreme complexity of matching TypeScript's evolving type rules. This makes `tsgo` the primary path forward for high-performance type checking. \[[1](https://github.com/swc-project/swc/issues/571), [2](https://stc.dudy.dev/)]

***

How to Use `tsgo` for Type-Checking

You can use it directly via `npx` as a drop-in replacement for your CI or pre-commit pipelines: \[[1](https://github.com/langgenius/dify/issues/28438), [2](https://howtotestfrontend.com/resources/speed-up-ci-on-frontend-apps)]

bash

```
# Drop-in replacement for 'tsc --noEmit'
npx tsgo --noEmit
```

Use code with caution.

You can update your `package.json` validation script to leverage it: \[[1](https://medium.com/@ThinkingLoop/8-typescript-ci-tweaks-that-shave-off-seconds-23a4ec02305b)]

json

```
{
  "scripts": {
    "check-types": "tsgo --noEmit"
  }
}
```

Use code with caution.

***

Note on Transpilation vs. Type Checking

Make sure you aren't confusing **transpilation** (removing types to output runnable JS) with **type-checking** (validating errors like `ts(2339)`): \[[1](https://stevekinney.com/courses/react-typescript/build-pipeline-tsc-swc), [2](https://medium.com/@ThinkingLoop/8-typescript-ci-tweaks-that-shave-off-seconds-23a4ec02305b)]

- **For Type Checking**: Use **`tsgo --noEmit`**.
- **For Transpilation/Building**: If you need to output actual production code, use **esbuild** or **SWC**. They drop type-checking entirely and transpile your code up to **45x faster** than standard `tsc` bundles. \[[1](https://github.com/langgenius/dify/issues/28438), [2](https://howtotestfrontend.com/resources/speed-up-ci-on-frontend-apps), [3](https://medium.com/@ThinkingLoop/8-typescript-ci-tweaks-that-shave-off-seconds-23a4ec02305b), [4](https://medium.com/@mernstackdevbykevin/esbuild-swc-and-tsc-which-compiler-should-you-use-in-2026-a2df3c783ad2)]

If `tsgo` surfaces configuration mismatch warnings, share your full **`tsconfig.json`** file so we can resolve any legacy flags.

- [link](https://howtotestfrontend.com/resources/speed-up-ci-on-frontend-apps)\
  Drop-In Replacements That Cut CI/CD Runtime by Over Half ...\
  Feb 1, 2026 — For checking types ( tsc --noEmit replacement), use tsgo . Try it out right now with npx tsgo --noEmit - you might need very minor...\
  howtotestfrontend.com
- [link](https://stevekinney.com/courses/react-typescript/build-pipeline-tsc-swc)\
  Traditional approach - does everything | React with TypeScript\
  Mar 17, 2026 — Written in Rust, SWC focuses purely on fast transpilation: # Install SWC pnpm add -D @swc/cli @swc/core. SWC transforms TypeScript...\
  Steve Kinney
- [link](https://medium.com/@ThinkingLoop/8-typescript-ci-tweaks-that-shave-off-seconds-23a4ec02305b)\
  8 TypeScript CI Tweaks That Shave Off Seconds - Medium\
  Sep 21, 2025 — Practical build optimizations that make your TypeScript pipelines faster without ripping out your toolchain. Thinking Loop. 5 min ...\
  Medium·Thinking Loop

Show all

install tsgo via pnpm

To install the native, high-performance Go-powered TypeScript compiler engine (`tsgo`) via `pnpm`, add Microsoft's preview package to your development dependencies: \[[1](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/), [2](https://medium.com/@efefurkankarakaya/its-time-to-use-tsgo-a-typescript-compiler-that-s-10x-faster-5eb8575ae50b)]

bash

```
pnpm add -D @typescript/native-preview
```

Use code with caution.

1\. Wire it Up in `package.json` \[[1](https://medium.com/@efefurkankarakaya/its-time-to-use-tsgo-a-typescript-compiler-that-s-10x-faster-5eb8575ae50b)]

Add scripts to use `pnpm` to execute the native binary without requiring global computer setups: \[[1](https://medium.com/@efefurkankarakaya/its-time-to-use-tsgo-a-typescript-compiler-that-s-10x-faster-5eb8575ae50b)]

json

```
{
  "scripts": {
    "check-types": "tsgo --noEmit"
  }
}
```

Use code with caution.

2\. Run the Type Checker \[[1](https://github.com/Effect-TS/tsgo/blob/main/AGENTS.md)]

Execute your script using `pnpm`: \[[1](https://medium.com/@efefurkankarakaya/its-time-to-use-tsgo-a-typescript-compiler-that-s-10x-faster-5eb8575ae50b), [2](https://pnpm.io/installation)]

bash

```
pnpm check-types
```

Use code with caution.

3\. Connect it to VS Code

To ensure the rapid type checking scales straight into your editor, do the following: \[]

1. Install the official Microsoft [TypeScript (Native Preview)](https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.native-preview) extension from the VS Code Marketplace.
2. Create or modify your local project workspace settings file at `.vscode/settings.json`.
3. Enable the native flag to tell VS Code to drop `tsc` for your workspace files: \[, [2](https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.native-preview)]

json

```
{
  "typescript.experimental.useTsgo": true
}
```

Use code with caution.

If you encounter any unique strict compilation warnings while running it, let me know **what errors `tsgo` outputs** so we can fine-tune your environment configurations. \[]

- [link](https://medium.com/@efefurkankarakaya/its-time-to-use-tsgo-a-typescript-compiler-that-s-10x-faster-5eb8575ae50b)\
  It's Time to Use TSGO — a TypeScript Compiler That's 10x ...\
  Jun 28, 2025 — 1. Install TSGO in your project. I recommend installing it as a dev dependency to keep your production bundle lean. However, if yo...\
  Medium·Efe Furkan KARAKAYA
- [link](https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.native-preview)\
  TypeScript (Native Preview) - Visual Studio Marketplace\
  Microsoft. microsoft.com. | 255,883 installs. | (13) | Free. Preview of the native TypeScript language server for Visual Studio Co...\
  Visual Studio Marketplace
- [link](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/)\
  Announcing TypeScript Native Previews\
  May 22, 2025 — To get the compiler over npm, you can run the following command in your project: npm install -D @typescript/native-preview. This p...\
  Microsoft Dev Blogs

Show all

it does not feel tsgo is quite faster than tsc

If `tsgo` does not feel noticeability faster than `tsc --noEmit`, your project environment or CLI configurations are likely choking the execution speed. While the native Go-based engine in [TypeScript 7.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/) scales up to **10x faster** on macro codebases, small setups or misconfigurations nullify these speed gains. \[[1](https://visualstudiomagazine.com/articles/2026/04/21/typescript-7-0-beta-arrives-on-go-based-foundation-with-10x-speed-claim.aspx), [2](https://www.reddit.com/r/typescript/comments/1o2aq5c/how%5Fdo%5Fyou%5Fdebug%5Ftypescript%5Fautocomplete%5Fslowness/)]

Verify the following roadblocks to unlock its full performance:

1\. `pnpm exec` or `npx` Overheads

Running `npx tsgo` or `pnpm tsgo` directly forces Node.js to spin up a child process wrapper script to locate the binary. This overhead can take several hundred milliseconds, neutralizing the speed of a fast binary on quick runs. \[[1](https://www.reddit.com/r/typescript/comments/1kst0db/announcing%5Ftypescript%5Fnative%5Fpreviews/)]

- **Fix**: Call the native binary directory in your `package.json` script shortcut, which handles the path allocation faster.

2\. Deep Circular Dependencies

If your codebase is heavily intertwined with structural loops, both `tsc` and `tsgo` are forced to repeatedly process depth-first type graphs to reconcile shapes. \[[1](https://www.reddit.com/r/typescript/comments/1o2aq5c/how%5Fdo%5Fyou%5Fdebug%5Ftypescript%5Fautocomplete%5Fslowness/)]

- **Fix**: Use architectural visualizers like `madge` to map out and break down your file dependencies. Clean project paths let the multi-threaded parser optimize execution branches efficiently. \[[1](https://www.reddit.com/r/ProgrammingLanguages/comments/1j9osva/typescript%5Fcompiler%5Fis%5Fbeing%5Fported%5Fto%5Fgo/), [2](https://www.reddit.com/r/typescript/comments/1o2aq5c/how%5Fdo%5Fyou%5Fdebug%5Ftypescript%5Fautocomplete%5Fslowness/)]

3\. Missing VS Code Integration

If you only added `"typescript.experimental.useTsgo": true` to your workspace configurations without completing the secondary verification steps, VS Code silently defaults right back to the older node language service runner. \[[1](https://github.com/microsoft/typescript-go/issues/2360), [2](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/)]

- **Fix**: Open your Command Palette (`Cmd/Ctrl + Shift + P`) and explicitly toggle **TypeScript Native Preview: Enable (Experimental)**. Without this active command, your editor-level syntax highlight lag remains identical. \[[1](https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.native-preview), [2](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/), [3](https://github.com/microsoft/typescript-go/issues/2360)]

4\. Codebase Scale Limitations

The engine achieves its peak 10x gains by spinning tasks across multi-threaded CPU cores to read, parse, and bind millions of lines of code simultaneously. If your project contains less than a few hundred components or files, the initialization time of any engine loop will hide the computational speed difference. \[[1](https://www.reddit.com/r/ProgrammingLanguages/comments/1j9osva/typescript%5Fcompiler%5Fis%5Fbeing%5Fported%5Fto%5Fgo/), [2](https://www.reddit.com/r/theprimeagen/comments/1j8tpu9/a%5F10x%5Ffaster%5Ftypescript%5Fmicrosoft%5Frewriting/)]

***

To run a true, isolated benchmark without package-runner overheads, invoke the binary straight from your local package store:

bash

```
# Bypasses the pnpm runtime execution wrapper layer
./node_modules/.bin/tsgo --noEmit
```

Use code with caution.

Are you noticing the performance lag primarily as **delay when you save a file in VS Code** or as **total execution time inside your terminal**?

- [link](https://www.reddit.com/r/typescript/comments/1o2aq5c/how%5Fdo%5Fyou%5Fdebug%5Ftypescript%5Fautocomplete%5Fslowness/)\
  How do you debug TypeScript / autocomplete slowness in a ...\
  Oct 9, 2025 — If you have circular references and/or circular dependencies, your shit might be cooked until you can fix your architecture. \* Use...\
  Reddit·r/typescript
- [link](https://www.reddit.com/r/theprimeagen/comments/1j8tpu9/a%5F10x%5Ffaster%5Ftypescript%5Fmicrosoft%5Frewriting/)\
  A 10x faster TypeScript (Microsoft Rewriting TypeScript in Go)\
  Mar 11, 2025 — hi everyone uh this is Andrew Hilesburg uh lead architect of the Typescript project and technical fellow at Microsoft. um today I'\
  13:45\
  Reddit·Microsoft Developer
- [link](https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.native-preview)\
  TypeScript (Native Preview) - Visual Studio Marketplace\
  TypeScript (Native Preview) This extension provides a preview of the native implementation of the TypeScript language service. It ...\
  Visual Studio Marketplace

Show all

check the time for each

To find out exactly why your performance numbers match or lag, you must isolate and benchmark each execution loop independently.

***

How to Benchmark `tsc` vs. `tsgo` Accurately

Do not trust manual stopwatch clicks or the raw outputs of `pnpm run`. Use the native terminal `time` utility to measure the true CPU footprint, system overhead, and wall-clock execution time.

Run these commands in your terminal root:

bash

```
# 1. Benchmark standard TypeScript (no-emit)
time ./node_modules/.bin/tsc --noEmit

# 2. Benchmark the native Go preview engine
time ./node_modules/.bin/tsgo --noEmit
```

Use code with caution.

***

Understanding Your Benchmark Results

When the commands finish, your terminal will output three distinct metrics. Here is exactly how to interpret them to see if `tsgo` is actually working:

| Metric     | What It Means                                                                    | What to Look For                                                                                                    |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **`real`** | Total actual clock time elapsed from start to finish.                            | This should be drastically lower for `tsgo` on large codebases.                                                     |
| **`user`** | Total CPU time spent outside the kernel (your actual type-checking computation). | `tsgo` utilizes multi-threading, so this number may look high because it runs across multiple cores simultaneously. |
| **`sys`**  | Time spent on kernel calls (file system reading, opening files).                 | High `sys` time means your hard drive or `node_modules` file traversal is bottlenecks the process.                  |

***

What to Do If the Times Are Identical

If your `real` time for both commands is nearly identical, you have a configuration bottleneck blocking the Go engine from scaling:

1. **Check for Cold Starts**: Run each command 3 times in a row. The first run is always slower due to disk caching. Compare only the 3rd run.
2. **Verify Node/V8 Isn't Involved**: If `tsgo` takes a long time on the `sys` step, add `skipLibCheck` into your `tsconfig.json`. This tells the engine to stop traversing millions of lines of third-party package types, which forces heavy file I/O operations regardless of compiler efficiency.

Once you have run the benchmark, what are the **exact `real`, `user`, and `sys` times** outputted by your terminal for each tool?

./node\_modules/.bin/tsc --noEmit 7.07s user 0.71s system 173% cpu 4.481 total\
./node\_modules/.bin/tsgo --noEmit 6.02s user 0.45s system 209% cpu 3.084 total

Your benchmarks reveal exactly why `tsgo` does not feel significantly faster: **your project codebase is currently too small** to let the Go-native engine stretch its muscles, though it is already winning.

Here is the exact data breakdown from your terminal:

- **`tsc` execution time**: `4.48` seconds total
- **`tsgo` execution time**: `3.08` seconds total

While `tsgo` is technically **31% faster** here, a savings of 1.4 seconds is barely noticeable during active development.

Why the Gap Isn't 10x (Yet)

1. **Low Multithreading Utilization (`% cpu`)**: Your `tsc` hit `173% cpu` (utilizing less than 2 full cores), while `tsgo` hit `209% cpu` (just over 2 cores). `tsgo` achieves its legendary 10x speedups on massive codebases where it can instantly flood **8 to 16+ CPU cores** with parallel files.
2. **Fixed Engine Bootstrap Overhead**: Every compiler engine requires a baseline fraction of a second to spin up, read your `tsconfig.json`, and initialize internal memory structures. In a small or medium project, this setup time eclipses the actual type-checking computation speed.

***

How to Drop Both Times Under 0.5 Seconds

Since your project size limits the raw processing advantage of `tsgo`, the best way to get instant feedback is to switch from **cold-start execution** to **incremental compilation / file watching**.

Option A: Use the Native Watch Flags

Instead of booting up the compiler from scratch every time, leave it running in the background. It will only re-check the specific file you save, dropping type-check times to milliseconds.

bash

```
# Keep this running in a separate terminal tab
./node_modules/.bin/tsc --noEmit --watch
```

Use code with caution.

Option B: Let Vite/Rolldown Handle the Terminal

If you are using a modern build tool like Vite, swap out any slow development checking plugins and use `vite-plugin-checker`. It spins up a background worker thread that handles this 3-to-4-second check completely out of your way, ensuring your local browser hot-module reloading stays completely instant.

Would you like help configuring a **background type-checking worker** for your specific frontend build tool, or are you looking to optimize these times further for a **CI/CD deployment pipeline**?

i mean i suppose it could complete under 1 sec since there is no complex logic

Your assumption is correct: a small codebase without complex logical loops **should execute in under 1 second**. If it is taking 3 to 4 seconds, the engine isn't struggling with your custom code; it is struggling with your dependency ecosystem and disk entry parsing. \[[1](https://swatinem.de/blog/optimizing-tsc/)]

Both `tsc` and `tsgo` can be optimized to finish under 1 second by addressing three hidden overhead bottlenecks:

1\. The Global `@types` Scanning Leak

Even if you use `skipLibCheck: true`, the compiler defaults to scanning your entire `node_modules/@types/` folder to auto-load global variables. If you have heavy typing files (like node, express, react, or lodash packages), reading those disk structures introduces significant latency. \[[1](https://swatinem.de/blog/optimizing-tsc/), [2](https://medium.com/@an.chmelev/typescript-performance-and-type-optimization-in-large-scale-projects-18e62bd37cfb), [3](https://levelup.gitconnected.com/how-to-improve-typescript-compilation-and-build-times-with-tsconfig-json-optimizations-f2fa0694089b)]

**The Fix**: Force TypeScript to load only the global definitions you explicitly need, ignoring everything else. Add `types` to your `tsconfig.json`: \[[1](https://levelup.gitconnected.com/how-to-improve-typescript-compilation-and-build-times-with-tsconfig-json-optimizations-f2fa0694089b)]

json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true,
    "types": [] // 👈 Tells the engine NOT to auto-scan your disk for hidden @types packages
  }
}
```

Use code with caution.

2\. File Path Traversal Bloat

If your `tsconfig.json` lacks an explicit code-boundary rule, the engine will systematically traverse your entire folder architecture. It ends up scanning test folders, compilation output assets (`dist/`), and hidden temporary environment settings. \[[1](https://levelup.gitconnected.com/how-to-improve-typescript-compilation-and-build-times-with-tsconfig-json-optimizations-f2fa0694089b)]

**The Fix**: Use strict boundaries to isolate the compiler path. \[[1](https://levelup.gitconnected.com/how-to-improve-typescript-compilation-and-build-times-with-tsconfig-json-optimizations-f2fa0694089b)]

json

```
{
  "include": ["src/**/*"], // 👈 Restrict the engine strictly to your raw source code
  "exclude": ["node_modules", "dist", "build", "coverage", "**/*.test.ts"]
}
```

Use code with caution.

3\. File System Read Latency

Your benchmarks show that `tsc` spent `0.71s` and `tsgo` spent `0.45s` exclusively on `system` calls. This indicates that your operating system is lagging while opening, closing, and pulling raw text blocks from your hard drive into active memory strings.

**The Fix**: Ensure your project is not being scanned in real-time by external software:

- Add your project workspace directory to your **Windows Defender / Antivirus exclusion list**. Antivirus programs intercept compiler file requests, turning a 50ms disk scan into a multi-second delay.
- Avoid running checks inside deeply nested cloud-synced storage locations (such as a live OneDrive, iCloud, or Dropbox sync folder).

If you apply `types: []` and restrict your `include` targets, let me know the **new terminal execution times** so we can verify if the time dropped below the 1-second mark.

- [link](https://swatinem.de/blog/optimizing-tsc/)\
  Optimizing TypeScript Memory Usage - Swatinem\
  Jan 8, 2020 — ¿ Adding a single dependency adds a whooping 400M of memory usage and roughly 4 seconds of runtime. I will let you in on a little ...\
  swatinem.de
- [link](https://medium.com/@an.chmelev/typescript-performance-and-type-optimization-in-large-scale-projects-18e62bd37cfb)\
  TypeScript Performance and Type Optimization in Large ...\
  May 5, 2025 — Besides skipLibCheck , optimize your environment: \* Define typeRoots in tsconfig. json to limit where declarations are loaded from...\
  Medium·Andrei Chmelev
- [link](https://levelup.gitconnected.com/how-to-improve-typescript-compilation-and-build-times-with-tsconfig-json-optimizations-f2fa0694089b)\
  How to Improve TypeScript Compilation and Build Times with ...\
  Mar 24, 2025 — Fine-tuning module resolution settings can significantly boost TypeScript performance, especially in large-scale projects. \* 4. Ex...\
  Level Up Coding

bun tsc --noEmit 1.13s user 0.14s system 192% cpu 0.659 total\
bun tsgo --noEmit 0.23s user 0.08s system 281% cpu 0.109 total\
./node\_modules/.bin/tsc --noEmit 1.12s user 0.15s system 191% cpu 0.660 total\
./node\_modules/.bin/tsgo --noEmit 0.23s user 0.08s system 301% cpu 0.104 total

wow. with that config it's significantly faster. will it miss some errors.

Those benchmark numbers are incredible. Your `tsgo` execution dropped from **3.08 seconds to 0.104 seconds**—a **30x speedup** that successfully broke the 1-second barrier.

By stripping out disk traversal overhead and third-party types, you allowed the native engines to process only your core logic.

Here is exactly what you risk missing with this ultra-optimized setup, and how to stay safe:

What This Config WILL Miss

1. **Global Typings Mismatches**: Because you set `"types": []`, TypeScript will no longer auto-load global environment typings from your `node_modules/@types/` directory. For example, if you rely on global variables like `process.env`, `describe/it` (for Jest/Vitest), or `window`, TypeScript will flag them as **"Cannot find name"** errors.
2. **Third-Party Dependency Breaking Changes**: Because `"skipLibCheck": true` is enabled, if an external package updates and introduces an internal type bug or conflicting type declaration, your local compiler will completely ignore it.

What This Config WILL NOT Miss

- **Your Custom Application Bugs**: It will **never** miss type errors, syntax issues, or bugs in the code you write yourself (inside your `src` folder).
- **Imported Type Errors**: If you explicitly write `import { func } from 'lodash'` or `import express from 'express'`, TypeScript **still type-checks your usage** of those modules. It loads the types directly through the `import` statement, bypasssing the slow global automatic scanner.

***

How to Stay 100% Safe Without Losing Speed

You do not have to sacrifice safety for this 0.1-second speed. Keep your development configuration blazing fast, and add explicit declarations only when things break:

1\. Explicitly opt-in to required globals

If your code throws an error because it cannot find global variables (like Node or Jest), do not delete `"types": []`. Instead, explicitly name just those specific packages:

json

```
{
  "compilerOptions": {
    "types": ["node", "vitest"] // Only loads what you actually use
  }
}
```

Use code with caution.

2\. Create a "Strict Check" for your CI pipeline

Keep your local workflow instant. For your production build or GitHub Actions CI pipeline, run a full check to ensure external dependencies are clean before shipping:

json

```
{
  "scripts": {
    "dev:check": "tsgo --noEmit", // 0.1s for local savings
    "ci:check": "tsc --noEmit --skipLibCheck false" // Thorough check for production
  }
}
```

Use code with caution.

Are you seeing any **"Cannot find name"** errors in your code now after applying the optimization, or is everything building cleanly?

turn off all "any" related errors

To suppress all warnings and errors related to the `any` type, you must adjust the configuration files for **both TypeScript and ESLint**, as they enforce these checks separately.

***

1\. In TypeScript (`tsconfig.json`)

Add these flags inside your `compilerOptions` block to stop `tsc` from throwing errors when types revert to or use `any`:

json

```
{
  "compilerOptions": {
    "noImplicitAny": false,       // Allows variables to implicitly default to 'any'
    "strictNullChecks": true,     // Keep this true for general safety
    "strict": true                // Note: 'noImplicitAny: false' will override the strict preset
  }
}
```

Use code with caution.

***

2\. In ESLint (`eslint.config.js`)

If you enabled Type-Checked Linting earlier, the `@typescript-eslint` plugin will flag explicit uses of `any`. Turn those rules completely off in your flat config file:

javascript

```
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // Disables warnings for using or passing explicit 'any' types
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },
];
```

Use code with caution.

***

3\. Quick Escape Hatch: Inline File Bypass

If you only want to turn off `any` checks inside a single legacy or rapidly prototyping file, use a comment at the top of that specific file instead of modifying your global configurations:

typescript

```
/* eslint-disable @typescript-eslint/no-explicit-any */
// tslint:disable:no-any

const data: any = JSON.parse(userInput); // Both TS and ESLint will stay silent here
```

Use code with caution.

Are you looking to turn off these warnings temporarily for **rapid prototyping**, or are you migrating a **large legacy JavaScript project** over to TypeScript?

how much scope does // @ts-ignore have

The `// @ts-ignore` comment has a scope of <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>exactly one single line</strong></mark> \[1].

Specifically, it suppresses any TypeScript compilation errors on the **immediate next line of code** directly following the comment \[1].

Key Behavior Characteristics

- **Line-by-Line Restriction**: If you have three consecutive lines with errors, you must place a separate `// @ts-ignore` comment directly above each individual line \[1].
- **No Whitespace Interruption**: If you place a blank line between `// @ts-ignore` and your code, the comment loses its connection and will not suppress the error.
- **Inline Alternative**: You can also place the comment at the end of the exact same line of code to suppress that specific line's error \[1].

***

Comparison of TypeScript Suppression Scopes

If you need a different level of coverage, select the appropriate scope boundary from the options below:

| Directive                 | Scope                                                             | Best Used For                                                                                          |
| ------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **`// @ts-ignore`**       | The **next single line** only \[1].                               | Suppressing a single known edge-case or untyped library call \[1].                                     |
| **`// @ts-expect-error`** | The **next single line** only (Errors if no error is found) \[1]. | Preferred alternative for single lines; alerts you if a future update fixes the issue \[1].            |
| **`// @ts-nocheck`**      | The **entire file** \[2].                                         | Placed at the very top of a file to completely opt out of type-checking (e.g., legacy migration) \[2]. |

If you are trying to clean up widespread errors across a block of code, let me know if you prefer to **isolate them into a single utility file** or use an **ambient type definition (`.d.ts`)** instead.

#

tsconfig esnext meaning

In `tsconfig.json`, **`ESNext` is a dynamic placeholder that represents the highest version of ECMAScript (JavaScript) supported by your current TypeScript version**. It acts as a "floating target" that moves forward automatically every time you upgrade TypeScript. \[[1](https://www.typescriptlang.org/tsconfig/target.html), [2](https://stackoverflow.com/questions/56521178/what-is-esnext), [3](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html)]

Its specific meaning changes completely depending on which configuration option it is applied to: \[[1](https://minh-ngo-13778.medium.com/typescript-tsconfig-json-compileroptions-module-and-target-588c6c66e55c)]

1\. `"target": "ESNext"`

- **Meaning**: TypeScript will compile your code into the latest, cutting-edge JavaScript syntax known to your compiler version. It outputs modern features (like class fields or top-level await) completely untranspiled if the compiler supports them.
- **When to use**: Use this if you are shipping code to a runtime that always handles modern JavaScript (like [Deno](https://deno.com/blog/intro-to-tsconfig) or Bun), or if a downstream bundler like Vite, Esbuild, or Webpack will handle the final down-compiling for older browsers. \[[1](https://deno.com/blog/intro-to-tsconfig), [2](https://stackoverflow.com/questions/76332035/ecmascript-differences-between-es2022-and-esnext), [3](https://2ality.com/2025/01/tsconfig-json.html), [4](https://www.totaltypescript.com/workshops/typescript-pro-essentials/configuring-typescript/the-moduleresolution-option-in-tsconfigjson/exercise), [5](https://github.com/vercel/next.js/discussions/14390), [6](https://www.typescriptlang.org/tsconfig/target.html)]

2\. `"module": "ESNext"`

- **Meaning**: TypeScript leaves your standard EcmaScript Module (ESM) syntax (`import` and `export` statements) entirely untouched. It also enables cutting-edge module behaviors that are still on the standard track but not yet finalized in a versioned specification.
- **When to use**: Highly recommended for **frontend frameworks and projects using modern bundlers** (Vite, Next.js). The bundler needs to see the raw `import` statements to perform optimizations like tree-shaking. It pairs best with `"moduleResolution": "bundler"`. \[[1](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html), [2](https://www.tsmean.com/articles/learn-typescript/typescript-module-compiler-option), [3](https://stackoverflow.com/questions/57383049/typescript-esnext-compiler-option-destroys-es6-import-from-external-lib), [4](https://github.com/microsoft/TypeScript/issues/24082), [5](https://maximilian-schwarzmueller.com/articles/making-sense-of-tsconfig-json), [6](https://www.totaltypescript.com/workshops/typescript-pro-essentials/configuring-typescript/the-moduleresolution-option-in-tsconfigjson/exercise)]

3\. `"lib": ["ESNext"]`

- **Meaning**: This provides type definitions for the absolute newest built-in JavaScript APIs and proposed global variables (such as new methods on `Array` or `Object`).
- **When to use**: Use this when you want to write modern APIs without TypeScript throwing errors, provided your runtime environment supports them or you have loaded corresponding polyfills. \[[1](https://github.com/vercel/next.js/discussions/14390), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/JavaScript%5Ftechnologies%5Foverview), [3](https://stackoverflow.com/questions/76332035/ecmascript-differences-between-es2022-and-esnext), [4](https://www.typescriptlang.org/tsconfig/lib.html), [5](https://medium.com/@clintoncletus/typescript-v6-0-released-all-changes-explained-02f4bb83141f)]

***

⚠️ Risks of using `ESNext`

- **Unpredictable Upgrades**: Upgrading your TypeScript version can change the outputted JavaScript structure. A previously transpiled feature might suddenly be output as native syntax, which could break older production environments.
- **Production Drift**: For stable applications, explicitly setting a fixed version (like `"target": "ES2022"`) is generally safer than relying on a floating target. \[[1](https://www.typescriptlang.org/tsconfig/target.html), [2](https://www.reddit.com/r/typescript/comments/zy5z3t/why%5Fdo%5Fyou%5Fuse%5Fthe%5Ftarget%5Fesnext/), [3](https://github.com/vercel/next.js/discussions/14390), [4](https://stackoverflow.com/questions/76332035/ecmascript-differences-between-es2022-and-esnext), [5](https://www.youtube.com/watch?v=eJXVEju3XLM)]

Would you like help choosing the **ideal fixed version** for your environment, or do you need a **complete recommended base configuration** for your specific framework?

- [link](https://www.typescriptlang.org/tsconfig/target.html)\
  target - TypeScript: TSConfig Option\
  The special ESNext value refers to the highest version your version of TypeScript supports. This setting should be used with cauti...\
  TypeScript
- [link](https://stackoverflow.com/questions/56521178/what-is-esnext)\
  What is ESNext? - Stack Overflow\
  Jun 10, 2019 — 2025-11-27T10:05:13.97Z+00:00. 1. Add a comment. 8. ES Next simply call the Next version or upcoming version of ES(ECMAScript / Ja...\
  Stack Overflow
- [link](https://github.com/vercel/next.js/discussions/14390)\
  changing tsconfig.json target from "es5" to "esnext" #14390 - GitHub\
  Jun 20, 2020 — Sometimes you'll use some >ES5 syntax that Babel doesn't know what to do with because there's no ES5 equivalent polyfill. If you u...\
  GitHub

Show all

#

tsconfig exclude syntax

The `exclude` property in a `tsconfig.json` file uses an **array of glob pattern strings** to filter out files found by the `include` property during compilation. \[[1](https://www.typescriptlang.org/tsconfig/), [2](https://cursa.app/en/page/configuring-tsconfig-include-and-exclude-options)]

Basic Syntax Example

Place the `exclude` array at the top level of your `tsconfig.json` file: \[[1](https://cursa.app/en/page/configuring-tsconfig-include-and-exclude-options), [2](https://unix.stackexchange.com/questions/32845/tar-exclude-doesnt-exclude-why)]

json

```
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs"
  },
  "include": ["src/**/*"],
  "exclude": [
    "node_modules",
    "dist",
    "src/**/*.spec.ts",
    "**/*.test.ts"
  ]
}
```

Use code with caution.

Glob Pattern Rules

TypeScript supports three wildcard characters to build your exclusion paths: \[[1](https://www.typescriptlang.org/tsconfig/)]

- `*` matches zero or more characters, excluding directory separators (e.g., `*.test.ts` matches `auth.test.ts` but not `src/auth.test.ts`).
- `?` matches any single character, excluding directory separators.
- `**/` matches any directory nested to any level deep (e.g., `src/**/*.spec.ts` matches any spec file anywhere inside `src`). \[[1](https://stackoverflow.com/questions/48449107/how-to-exclude-files-ending-in-spec-ts-in-tsconfig-json), [2](https://www.typescriptlang.org/tsconfig/)]

Directory Shorthand

If a path segment does not have a file extension or a wildcard, TypeScript automatically treats it as a directory. Writing `"dist"` is functionally identical to writing `"dist/**/*"`. \[[1](https://www.typescriptlang.org/tsconfig/), [2](https://cursa.app/en/page/configuring-tsconfig-include-and-exclude-options)]

Critical Caveats

- **Imports override exclude:** If a file is explicitly imported via an `import` statement in an included file, the compiler will still type-check and compile it regardless of your `exclude` rule.
- **Files list overrides exclude:** Files explicitly listed under the `"files"` array property are always compiled and cannot be skipped by `exclude`.
- **Default values:** If you omit the `exclude` property entirely, TypeScript automatically excludes `node_modules`, `bower_components`, `jspm_packages`, and your specified `outDir` output folder. \[[1](https://stackoverflow.com/questions/34312252/exclude-property-of-tsconfig-json-is-not-being-respected), [2](https://typescript-v2-140.ortam.vercel.app/docs/handbook/tsconfig-json.html), [3](https://stackoverflow.com/questions/46754794/typescript-tsconfig-json-include-exclude-not-working), [4](https://stackoverflow.com/questions/74637049/tsconfig-excluding-node-modules-without-an-include), [5](https://www.typescriptlang.org/tsconfig/)]

If you want to check exactly which files are being compiled after adjusting your patterns, run the `tsc --listFiles` command in your terminal. \[[1](https://stackoverflow.com/questions/36475736/exclude-with-pattern-in-tsconfig-json)]

If you are experiencing issues with files not being filtered out, let me know:

- What specific **files or folders** are you trying to drop?

- What does your current **`include` array** look like?

- Are you getting unexpected **type errors** or unwanted **build output files**?

- [link](https://www.typescriptlang.org/tsconfig/)\
  TSConfig Reference - Docs on every TSConfig option\
  include and exclude support wildcard characters to make glob patterns: \* matches zero or more characters (excluding directory sepa...\
  TypeScript

- [link](https://stackoverflow.com/questions/48449107/how-to-exclude-files-ending-in-spec-ts-in-tsconfig-json)\
  How to exclude files ending in '.spec.ts' in tsconfig.json\
  Jan 25, 2018 — 3 Answers. ... The TypeScript handbook has a good write up on tsconfig file. ... Note the use of \*\* for any folder, and \* (a singl...\
  Stack Overflow

- [link](https://stackoverflow.com/questions/36475736/exclude-with-pattern-in-tsconfig-json)\
  Exclude with pattern in tsconfig.json - Stack Overflow\
  Apr 7, 2016 — \* 2 Answers. Sorted by: 104. This answer is not useful. Loading when this answer was accepted… Full example if anyone needs it: { ...\
  Stack Overflow

Show all

is \*\*/temp and \*\*/temp/\*\* the same

No, they are **not the same**. They target different levels of your directory structure.

`**/temp`

- **Target:** Matches a directory or file named `temp` at any level.
- **Match:** `src/temp`, `src/utils/temp`, or a file named `src/temp.ts` (if no extension is specified).
- **Behavior:** When it matches a directory, TypeScript automatically treats it as a directory shorthand and excludes the directory _and all of its contents_.

`**/temp/**`

- **Target:** Matches the _contents_ inside any directory named `temp` at any level.
- **Match:** `src/temp/file.ts` or `src/utils/temp/components/`.
- **Behavior:** It specifically looks for files and subfolders _inside_ the `temp` folder.

The Key Difference

- `**/temp` matches the **folder itself**.
- `**/temp/**` matches the **contents inside the folder**, but not the folder entity.

In a standard `tsconfig.json` `exclude` array, **`**/temp`is safer and preferred** because it catches the root folder immediately, whereas`**/temp/**` can sometimes leave empty folder structures or the parent folder evaluated in the compilation graph.

If you are trying to resolve a specific build issue, let me know:

- Is `temp` a **folder** or a **file**?
- Are files inside `temp` **still showing up** in your build outputs?
- Are you trying to exclude a **third-party build tool artifact**?

is build and \*\*/build the same

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, they are </span><strong>not the same</strong></mark>. They look for the folder in entirely different locations within your project tree.

`build`

- **Target:** Matches a directory named `build` located **only at the root level** of your project (where `tsconfig.json` lives).
- **Match:** `./build/`
- **Miss:** `./src/build/` or `./packages/ui/build/`

`**/build`

- **Target:** Matches a directory named `build` at **any depth level** within the project.
- **Match:** `./build/`, `./src/build/`, and `./packages/ui/build/`
- **Miss:** None. It catches every single instance of a folder named `build`.

Summary Recommendation

- Use `build` if you only want to exclude your **main project output directory**.
- Use `**/build` if you are working in a **monorepo** or have nested projects, and you want to blanket-exclude all build folders at every level.

If you are setting up your project outputs, let me know:

- Are you working in a **monorepo** (like Turbo, Lerna, or Yarn Workspaces)?
- What is the name of your compiler output directory set in **`outDir`**?
- Are you trying to stop TypeScript from **type-checking your build artifacts**?

is node\_modules and \*\*/node\_modules/\*\* the same

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, they are </span><strong>not the same</strong></mark>. They look in different locations and match different parts of the folder structure. \[[1](https://www.luisllamas.es/en/what-is-npm-node-modules-folder/)]

`node_modules`

- **Location:** Matches a `node_modules` directory located **only at the root level** of your project (where `tsconfig.json` lives).
- **Behavior:** TypeScript treats this directory shorthand as `node_modules/**/*`. It excludes the root folder and everything inside it.
- **Miss:** It will **not** match nested node modules, such as `./packages/api/node_modules/` in a monorepo. \[[1](https://www.geeksforgeeks.org/node-js/how-to-resolve-a-cannot-find-module-error-using-node-js/), [2](https://github.com/nodejs/node/issues/54201), [3](https://stackoverflow.com/questions/69760479/what-it-means-node-modules-in-tsconfig-json)]

`**/node_modules/**`

- **Location:** Matches the **contents inside** any `node_modules` directory at **any depth level** of the project.
- **Behavior:** It explicitly targets files and subfolders inside the directory, but does not match the parent `node_modules` folder entity itself.
- **Match:** `./node_modules/react/index.d.ts` and `./packages/api/node_modules/express/index.d.ts`. \[[1](https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/), [2](https://stackoverflow.com/questions/69760479/what-it-means-node-modules-in-tsconfig-json)]

Why it matters

- **Default Behavior:** If you completely omit the `exclude` property, TypeScript automatically uses the root shorthand `node_modules`.
- **Monorepos:** If you use a monorepo or nested packages, you should use `**/node_modules` (without the trailing `/**`) to safely blanket-exclude every node modules folder across the entire project tree.

If you are experiencing build slowdowns or errors, let me know:

- Is your project a **monorepo** or a **single package**?

- Are you getting **type errors coming from inside your dependencies**?

- What does your current **`exclude` array** look like?

- [link](https://www.luisllamas.es/en/what-is-npm-node-modules-folder/)\
  What is the Node\_modules Folder in NPM\
  Apr 9, 2024 — NPM will do the work for you. Structure of the node\_modules folder Each dependency is installed inside node\_modules in its own fol...\
  \
  \
  Luis Llamas

- [link](https://www.geeksforgeeks.org/node-js/how-to-resolve-a-cannot-find-module-error-using-node-js/)\
  Resolve a "Cannot find module" error using Node.js\
  Mar 2, 2026 — The node\_modules directory should reside in the root directory of your project. This is where npm stores all downloaded modules fo...\
  \
  \
  GeeksforGeeks

- [link](https://github.com/nodejs/node/issues/54201)\
  node fails to import ES module located inside folder that contains "node\_modules" in folder name · Issue #54201 · nodejs/node\
  Aug 4, 2024 — According to the doc, /js/node\_modules/ or /js/node\_modules/foo/ folders (without package. json ) are neither part of the root pac...\
  \
  \
  GitHub

Show all

\*\*/node\_modules/\*\* or \*\*/node\_modules

**Use `**/node_modules`**. It is the safer and more correct pattern for your `tsconfig.json`.

Why `**/node_modules` is better

- **Matches the folder itself:** It tells TypeScript to completely ignore the folder entity at any depth.
- **Shorthand expansion:** TypeScript automatically treats it as `**/node_modules/**/*`, meaning the folder and all nested files are dropped instantly.
- **Cleaner build graph:** It completely cuts the folder out of the directory tree evaluation.

Why `**/node_modules/**` can cause issues

- **Matches only contents:** It instructs TypeScript to look _inside_ the folder to evaluate files.
- **Empty folder retention:** It excludes the files inside, but the empty `node_modules` directory structures can still be parsed by the compiler.
- **Edge-case leaks:** In older TypeScript versions or specific editor tooling, trailing wildcards can occasionally allow the compiler to look at top-level configuration files inside the dependency folders.

Summary

Always use `**/node_modules` (without the trailing slashes and stars) to blanket-exclude dependencies across your entire project, especially in monorepos.

If you are currently updating your configuration file, let me know:

- Are you trying to fix **slow IDE/editor performance**?
- Are you getting **duplicate identifier errors** from your `node_modules`?
- Can you share your current **`tsconfig.json` text** so I can review it?

#

i have a prelude that put things into globalthis. i have declare global. how to let tsc find name "foo".

To make the TypeScript compiler (`tsc`) recognize a global variable attached to `globalThis`, you must extend the global namespace and ensure TypeScript processes the file as a module.

1\. Create a Declaration File

Create a file named `global.d.ts` in your source directory.

typescript

```
import {}; // Force TypeScript to treat this file as a module

declare global {
  var foo: string; // Use 'var' to map directly to globalThis properties
}
```

Use code with caution.

2\. Key Requirements

- **Use `var`:** You must use `var` inside `declare global`. Using `let` or `const` will not attach the property to `globalThis`.
- **Include an Import/Export:** The file must contain at least one `import` or `export` statement. The empty `import {}` fulfills this requirement without importing code. Without it, TypeScript treats the file as an ambient global script, and `declare global` will fail.

3\. Update `tsconfig.json`

Ensure your TypeScript configuration includes the declaration file.

json

```
{
  "compilerOptions": {
    "include": ["src/**/*", "global.d.ts"]
  }
}
```

Use code with caution.

4\. Usage in Code

You can now reference the variable anywhere in your project.

typescript

```
// Both syntax options are now fully typed
console.log(foo);
console.log(globalThis.foo);
```

Use code with caution.

If you want to refine this setup, let me know:

- What **data type** is `foo`?
- Are you compilation errors happening in a **browser** or **Node.js** environment?
- What does the **`include` array** look like in your current `tsconfig.json`?

I can help you adjust the configuration for your specific build pipeline.