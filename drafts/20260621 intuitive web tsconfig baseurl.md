# tsconfig paths

The `paths` property in a `tsconfig.json` file allows you to **declare path aliases (custom short-cuts)** for your module imports. Instead of writing messy relative paths like `../../../components/Button`, you can configure an alias to write a clean import like `@components/Button`. \[[1](https://www.typescriptlang.org/tsconfig/paths.html), [2](https://webreaper.dev/posts/tsconfig-paths-setup/)]

### Quick Configuration Example

To use path aliases, you must define both `baseUrl` and `paths` inside the `compilerOptions` block of your `tsconfig.json`. \[[1](https://www.reddit.com/r/typescript/comments/exjk6d/using%5Fpaths%5Fproperty%5Fof%5Ftsconfig%5Fto%5Fspecify%5Fa/), [2](https://webreaper.dev/posts/tsconfig-paths-setup/)]

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"],
      "@services/*": ["src/services/*"]
    }
  }
}
```

Use code with caution.

### Key Technical Rules

- **The Wildcard (`*`)**: The asterisk acts as a pattern matcher. It ensures that anything after `@components/` correctly resolves to the matching sub-folder inside `src/components/`.
- **Base URL Dependency**: All target directory strings inside the `paths` arrays are evaluated **relative to the `baseUrl`** you specify.
- **Fallback Arrays**: The values are written as arrays because you can provide multiple fallback locations. If TypeScript can't resolve the module in the first path, it will try the next one sequentially. \[[1](https://github.com/aleclarson/vite-tsconfig-paths), [2](https://www.youtube.com/watch?v=PUMVZPr2m5g), [3](https://webreaper.dev/posts/tsconfig-paths-setup/), [4](https://stackoverflow.com/questions/78012996/multiple-values-in-tsconfigs-paths)]

***

### The Ultimate Catch: Compilation vs. Runtime

The most common point of confusion is that **TypeScript (`tsc`) only handles type-checking and code analysis**. It does **not** rewrite your import statements when compiling `.ts` files to `.js` files. \[[1](https://www.reddit.com/r/typescript/comments/1c1gmsz/rant%5Ftsconfig%5Fpaths%5Fare%5Fnot%5Fworth%5Fthe%5Fhassle/), [2](https://stackoverflow.com/questions/69669729/typescript-4-4-4-tsconfig-paths-not-resolving-as-expected), [3](https://www.reddit.com/r/typescript/comments/exjk6d/using%5Fpaths%5Fproperty%5Fof%5Ftsconfig%5Fto%5Fspecify%5Fa/)]

If you compile your code using standard `tsc` and try to execute it using native Node.js, your app will crash with a `Cannot find module` error because Node.js has no concept of your `tsconfig.json` settings. You must use external tools depending on your execution environment: \[[1](https://npmjs.com/package/tsconfig-paths), [2](https://dev.to/antozanini/how-to-use-the-tsconfigjson-paths-option-in-nodejs-13m0)]

### 1. Running directly in Development (with `ts-node`)

If you use `ts-node` to execute code, install the [tsconfig-paths package](https://npmjs.com/package/tsconfig-paths) and inject it into your script execution: \[[1](https://npmjs.com/package/tsconfig-paths), [2](https://medium.com/@fmoessle/typescript-paths-with-ts-node-ts-node-dev-and-jest-671deacf6428), [3](https://www.reddit.com/r/webdev/comments/1idvcmc/til%5Fyou%5Fneed%5Fa%5Fpackage%5Fcalled%5Ftsconfigpaths%5Fto/)]

bash

```
npm install --save-dev tsconfig-paths
```

Use code with caution.

Run your application using the register flag: \[[1](https://npmjs.com/package/tsconfig-paths)]

bash

```
ts-node -r tsconfig-paths/register src/index.ts
```

Use code with caution.

### 2. Bundling front-end apps (Vite / Webpack) \[[1](https://www.reddit.com/r/typescript/comments/15bgs3f/tsconfig%5Faliased%5Fpaths%5Fnot%5Fworking/)]

Modern bundlers need plugins to sync up with your `tsconfig.json` mappings: \[[1](https://stackoverflow.com/questions/50679031/why-are-these-tsconfig-paths-not-working), [2](https://www.reddit.com/r/typescript/comments/exjk6d/using%5Fpaths%5Fproperty%5Fof%5Ftsconfig%5Fto%5Fspecify%5Fa/), [3](https://stackoverflow.com/questions/69669729/typescript-4-4-4-tsconfig-paths-not-resolving-as-expected)]

- **Vite**: Use the [vite-tsconfig-paths plugin](https://github.com/aleclarson/vite-tsconfig-paths).
- **Webpack**: Use the [tsconfig-paths-webpack-plugin](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin). \[[1](https://github.com/aleclarson/vite-tsconfig-paths), [2](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin), [3](https://medium.com/@wolfflucas/path-mapping-in-typescript-with-vite-400420ade0a), [4](https://www.reddit.com/r/sveltejs/comments/1l0j9dw/vite%5Fconfigs%5Fresolve%5Falias%5Fvs%5Ftsconfigs/)]

### 3. Production Node.js build (Compiled JS) \[[1](https://webman.pro/blog/how-to-setup-typescript-path-aliases-in-lerna-monorepo/)]

If you compile to a `dist` folder and run raw JavaScript via `node dist/index.js`, use a build-time rewriter like tsc-alias to physically convert your `@/...` aliases into relative `../../` paths inside your compiled code, or leverage runtime interceptors like module-alias. \[[1](https://stackoverflow.com/questions/69669729/typescript-4-4-4-tsconfig-paths-not-resolving-as-expected), [2](https://www.youtube.com/watch?v=PUMVZPr2m5g)]

### 4. Modern Runtimes (Bun)

If you use Bun, you do not need extra configuration tools. Bun **automatically reads** the `paths` field in your `tsconfig.json` and natively resolves your custom aliases at runtime. \[[1](https://bun.com/docs/guides/runtime/tsconfig-paths)]

***

If you are currently setting this up, tell me **which runtime environment or framework** you are building for (e.g., Node.js, Next.js, Vite, NestJS) so I can give you the exact ecosystem configuration to prevent runtime errors. \[[1](https://npmjs.com/package/tsconfig-paths)]

- [link](https://npmjs.com/package/tsconfig-paths)\
  tsconfig-paths - NPM\
  Mar 29, 2023 — Use this to load modules whose location is specified in the paths section of tsconfig. json or jsconfig. json . Both loading at ru...\
  NPM
- [link](https://www.reddit.com/r/typescript/comments/1c1gmsz/rant%5Ftsconfig%5Fpaths%5Fare%5Fnot%5Fworth%5Fthe%5Fhassle/)\
  RANT: tsconfig paths are not worth the hassle : r/typescript\
  Apr 11, 2024 — xroalx. • 2y ago. • Edited 2y ago. The difference basically is in the "direction", so to say, that people use it. paths in tsconfi...\
  Reddit·r/typescript
- [link](https://www.typescriptlang.org/tsconfig/paths.html)\
  TSConfig Option: paths - TypeScript\
  A series of entries which re-map imports to lookup locations relative to the baseUrl if set, or to the tsconfig file itself otherw...\
  TypeScript

Show all

## You said: can it have more than one wildcard

No, a pattern string in `tsconfig.json` paths can have **at most one** wildcard (`*`).

If you include more than one asterisk in a single path pattern, TypeScript will throw an error or fail to match your imports correctly.

### Why only one?

TypeScript treats the asterisk as a simple replacement placeholder, not a complex regex engine. It takes the text matched by the single `*` on the left side and injects it exactly where the `*` sits on the right side. \[[1](https://caddyserver.com/docs/automatic-https)]

### How to handle multiple dynamic folders

If you are trying to match nested or multiple variable directories, you have to approach it by narrowing or broadening your pattern.

### Option A: Broaden the match with a single wildcard

Instead of trying to match multiple individual folders in one line, use a single wildcard at a higher root level. The single wildcard will automatically match deep, nested paths like `src/modules/billing/components/Button.ts`.

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

Use code with caution.

- **Clean Import:** `import Button from '~/modules/billing/components/Button'`

### Option B: Declare multiple distinct aliases

If your project structure requires completely different entry points, you should explicitly map each specific directory pattern separately.

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@modules/*": ["src/core/modules/*"],
      "@features/*": ["src/app/features/*"]
    }
  }
}
```

Use code with caution.

If you are stuck on a complex directory layout, share a **sample of your folder structure** and the **exact import style** you want to achieve. I can write the exact configurations you need to make it work!

- [link](https://caddyserver.com/docs/automatic-https)\
  Automatic HTTPS — Caddy Documentation\
  have only a single wildcard \* as the left-most label\
  \
  \
  Caddy Web Server

## You said: can i convert to one wildcard and make it more general "paths": {

"lib/\*": \["./source/lib/\*"],\
"web/\*": \["./source/web/\*"],\
},

Yes, you can absolutely merge those two rules into a single, more general path pattern by moving the wildcard up one folder level.

### The Solution

Change your configuration to this:

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./source/*"]
    }
  }
}
```

Use code with caution.

### How Your Imports Will Change

By making the path alias more general, you will introduce a prefix (like `~` or `@`) to tell TypeScript to look inside the `./source/` directory.

- **Before:** `import { auth } from 'lib/auth';`
- **After:** `import { auth } from '~/lib/auth';`
- **Before:** `import { Button } from 'web/components';`
- **After:** `import { Button } from '~/web/components';`

### Why you need a prefix (like `~/*` or `@/*`)

You might wonder if you can just use `*` as the key, like this: `"*": ["./source/*"]`.

While TypeScript technically allows it, **it is highly discouraged**. A naked `*` acts as a catch-all mapping. It tells TypeScript to look inside your `./source/` folder for _every single import_, which breaks native Node.js package resolution for everything in your `node_modules` folder (like `react`, `lodash`, or `express`). Using a prefix like `~/*` keeps your local code cleanly separated from third-party packages.

If you prefer a different look, let me know what **prefix symbol** you want to use, or tell me if you are trying to avoid a prefix entirely so we can look at your `rootDirs` or `baseUrl` options instead!

## You said: can i omit ~/

Yes, you can omit the `~/` prefix entirely and use clean, bare imports like `import ... from 'lib/auth'`.

Instead of using the `paths` property, the correct and standard way to achieve this in TypeScript is by changing your **`baseUrl`**.

### The Solution

Update your `tsconfig.json` to point the `baseUrl` directly to your source directory, and remove the `paths` object completely:

json

```
{
  "compilerOptions": {
    "baseUrl": "./source"
  }
}
```

Use code with caution.

### How It Works

When you set `"baseUrl": "./source"`, you tell TypeScript that the `./source` folder is a root directory for module resolution.

TypeScript will now automatically resolve any absolute-looking import path by looking inside `./source/` first. If it does not find it there, it falls back to looking inside `node_modules` as usual, so your third-party packages will not break.

- `import { auth } from 'lib/auth'` → Resolves to `./source/lib/auth.ts`
- `import { Button } from 'web/components'` → Resolves to `./source/web/components.ts`
- `import React from 'react'` → Falls back to `node_modules/react`

***

### Important Runtime Warning

Just like with `paths`, omitting the prefix using `baseUrl` works perfectly for TypeScript's type-checking, but standard Node.js at runtime will still get confused by `lib/auth` because it expects a relative path (like `./lib/auth`).

If you run into `Cannot find module` runtime errors after making this change, tell me **how you run or build your code** (e.g., `ts-node`, Vite, Webpack, or raw `node` on compiled JS) so I can give you the quick fix for that specific tool!

## You said: i mean what if i just use a single wildcard as the key

If you use a single wildcard `"*"` as the key, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">TypeScript will completely break how it resolves third-party packages from your <code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">node\_modules</code> folder</strong></mark>.

While it looks like a clean catch-all solution on paper, configuring your settings like this is highly discouraged: \[[1](https://community.cisco.com/t5/network-access-control/do-i-need-to-leverage-a-wildcard-for-radius-dtls-in-an-ise/td-p/5192280)]

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": ["./source/*"]
    }
  }
}
```

Use code with caution.

### What Happens Behind the Scenes

The moment you add `"*": ["./source/*"]`, you are overriding TypeScript's global lookup mechanism. TypeScript assumes you want to take _every single bare import_ in your codebase and map it to your local `./source/` directory. \[[1](https://www.typescriptlang.org/tsconfig/paths.html), [2](https://npmjs.com/package/tsconfig-paths), [3](https://github.com/Microsoft/vscode/issues/12563)]

If you write an import like `import React from 'react'`, TypeScript will look for `./source/react` instead of `node_modules/react`. Because it cannot find your external dependencies inside your own local source directory, your editor will light up with red error lines stating that it cannot find modules like `react`, `lodash`, or `express`. \[[1](https://github.com/Microsoft/vscode/issues/12563), [2](https://npmjs.com/package/tsconfig-paths)]

### The Recommended Native Fallback

If you absolutely want a catch-all key without breaking `node_modules`, you have to explicitly tell TypeScript to look inside your `node_modules` directory as a fallback option. \[[1](https://www.sitepoint.com/community/t/ts-node-how-to-use-tsconfig-paths-with-node-modules/300468), [2](https://www.sitepoint.com/community/t/ts-node-how-to-use-tsconfig-paths-with-node-modules/300468)]

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": [
        "./source/*",
        "node_modules/*"
      ]
    }
  }
}
```

Use code with caution.

### Why You Should Still Avoid This

Even if you include the `node_modules/*` fallback array, using `"*"` remains a risky choice for two main reasons:

- **Build Tool Fragility**: While TypeScript's compiler might understand this fallback sequence, many popular bundlers and execution tools (like Webpack, Vite, or `ts-node`) will struggle to interpret it correctly and may still throw runtime errors. \[[1](https://www.reddit.com/r/typescript/comments/exjk6d/using%5Fpaths%5Fproperty%5Fof%5Ftsconfig%5Fto%5Fspecify%5Fa/), [2](https://npmjs.com/package/tsconfig-paths)]
- **Naming Collisions**: If you create a local file named `./source/react.ts`, your configuration will prioritize it over the official npm package. This can inadvertently shadow your external dependencies and lead to unpredictable bugs.

If your primary goal is to cleanly use absolute imports like `lib/auth` without a prefix, setting **`"baseUrl": "./source"`** (and completely removing the `paths` object) remains the safest, most standard approach.

Are you hoping to map files outside of the `./source` directory as well, or are you just looking for the cleanest possible syntax inside that single folder?

- [link](https://www.typescriptlang.org/tsconfig/paths.html)\
  TypeScript: TSConfig Option: paths\
  In TypeScript, paths are a series of entries that remap imports to lookup locations. Paths can be used to declare how TypeScript s...\
  TypeScript
- [link](https://www.reddit.com/r/typescript/comments/exjk6d/using%5Fpaths%5Fproperty%5Fof%5Ftsconfig%5Fto%5Fspecify%5Fa/)\
  Using paths property of tsconfig to specify a specific file?\
  Feb 2, 2020 — However, you might run into errors at runtime if you don't use a module loader or bundler that knows how to use your paths. You ca...\
  Reddit
- [link](https://github.com/Microsoft/vscode/issues/12563)\
  TypeScript - tsconfig.json paths resolve wildcards · Issue #12563\
  Sep 24, 2016 — beckend commented on Sep 26, 2016. @beckend · beckend · on Sep 26, 2016. Author. More actions. Ran tsc with --traceResolution and ...\
  GitHub

Show all

## You said: does it work on bun or parceljs "paths": {

"\*": \[\
"./source/\*",\
"node\_modules/\*"\
]\
}

\*\***No, this fallback setup will likely break your application** in both Bun and ParcelJS, but for completely different reasons.

While it looks correct to TypeScript's type-checker, modern tools handle catch-all array lookups very poorly at runtime or bundle-time.

Here is exactly how both environments behave with this specific snippet:

***

### 1. Does it work in Bun? (Partial/Unstable)

Bun natively reads your `tsconfig.json` paths, and they updated their engine to handle the `"*"` catch-all fallback pattern. \[[1](https://github.com/oven-sh/bun/issues/29590), [2](https://bun.com/docs/guides/runtime/tsconfig-paths)]

- **The Good:** Bun will successfully resolve your local imports like `import { auth } from 'lib/auth'` to your `./source/` directory.
- **The Bad:** The fallback to `"node_modules/*"` is incredibly fragile. Bun resolves dependencies instantly using an internal, highly optimized mapping. Intercepting every single third-party package import to search through a fallback path array can break standard Node resolution features, leading to intermittent `Cannot find module` runtime crashes for external npm packages. \[[1](https://github.com/oven-sh/bun/issues/28995)]

### 2. Does it work in ParcelJS? (No, completely broken)

Parcel does not natively support fallback array evaluation inside `tsconfig.json` paths. \[[1](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)]

- Parcel's bundler reads your `tsconfig.json` to find aliases, but it only resolves the **first string** in the array (`"./source/*"`).
- It completely ignores the second item (`"node_modules/*"`). As a result, the second you try to import an npm package like `react` or `lodash`, Parcel will exclusively look inside `./source/react`, fail to find it, and **your build will crash**. \[[1](https://www.sitepoint.com/community/t/ts-node-how-to-use-tsconfig-paths-with-node-modules/300468), [2](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h), [3](https://bun.com/docs/guides/runtime/tsconfig-paths)]

***

### The Clean, Safe Alternatives

If you want absolute imports without a prefix (like `lib/auth`) and you are using Bun and Parcel, you should avoid the `"*"` catch-all hack entirely. Use one of these two alternatives instead:

### Alternative A: The Native `baseUrl` Approach (Highly Recommended)

Delete the `paths` property entirely and point the `baseUrl` to your source directory. Both Bun and Parcel fully support this natively without hacking the package resolution chain.

json

```
{
  "compilerOptions": {
    "baseUrl": "./source"
  }
}
```

Use code with caution.

- **Why it's better:** Both Bun and Parcel know to look in `./source` first, and if they don't find the file, they naturally fall back to standard `node_modules` lookups without getting confused.

### Alternative B: Use explicit paths with a safe prefix

If you want to keep using `paths`, use a standard symbol alias like `~/*` or `@/*`. \[[1](https://stackoverflow.com/questions/50679031/why-are-these-tsconfig-paths-not-working), [2](https://github.com/oven-sh/bun/issues/14694)]

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./source/*"]
    }
  }
}
```

Use code with caution.

- **Why it's better:** Both Bun and Parcel will instantly map `~/lib/auth` to your local files, and your normal imports (like `import react from 'react'`) are left completely untouched, bypassing any bundler resolution bugs.

Are you building a **monorepo / fullstack app** where Bun runs the backend and Parcel bundles the frontend, or are you just using them together in a single workspace? \[[1](https://github.com/oven-sh/bun/issues/14694)]

- [link](https://stackoverflow.com/questions/50679031/why-are-these-tsconfig-paths-not-working)\
  Why are these tsconfig paths not working? - Stack Overflow\
  Jun 4, 2018 — 10 Comments. ... I did also struggle with . tsconfig not recognizing my aliases (while in another project that supposed to have th...\
  Stack Overflow
- [link](https://www.sitepoint.com/community/t/ts-node-how-to-use-tsconfig-paths-with-node-modules/300468)\
  Ts-node, how to use tsconfig-paths with node\_modules?\
  Jun 27, 2018 — ts-node -P tsconfig\_test.json -r tsconfig-paths/register assets/js/test/unit\_tests/tests/test\_poseidon\_navigator.ts error TS2307: ...\
  SitePoint
- [link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)\
  Using TypeScript \`paths\` and \`baseUrl\` with Parcel - DEV Community\
  Dec 31, 2021 — Once installed, you can use the following aliases in the paths property and projects baseUrl: \* baseUrl imports \* paths aliases wi...\
  DEV Community

Show all

## You said: how will baseurl work

When you set `"baseUrl": "./source"`, TypeScript and your tools (like Bun and Parcel) switch from using **relative paths** to using **root-relative paths** based inside that specific folder.

Here is exactly how it looks and operates under the hood.

### 1. How Files Are Resolved

Imagine this is your project's directory layout:

text

```
my-project/
├── node_modules/
│   └── react/
├── tsconfig.json
└── source/
    ├── lib/
    │   └── auth.ts
    ├── web/
    │   └── components.ts
    └── index.ts
```

Use code with caution.

With `"baseUrl": "./source"`, any import that does **not** start with a dot (`.` or `..`) triggers a two-step lookup process:

- **Step 1: Check Local Source** → The tool looks for the file inside `./source/`.
  - Writing `import 'lib/auth'` makes the tool instantly look for `./source/lib/auth.ts`.
- **Step 2: Check Node Modules** → If the file is not found inside `./source/`, the tool automatically falls back to your standard `node_modules` folder.
  - Writing `import 'react'` will not find `./source/react`, so it looks up and finds `node_modules/react`.

### 2. How to Write Imports in Your Code

Inside any file in your project (even deep inside nested folders), your import statements will look clean and concise:

typescript

```
// No more "../../lib/auth" or "../../../lib/auth"
import { login } from 'lib/auth';
import { Button } from 'web/components';

// Standard npm packages still work exactly the same
import React from 'react';
```

Use code with caution.

### 3. How Bun and Parcel Handle It

Both Bun and Parcel natively love `baseUrl` because it adheres to standard ECMAScript and TypeScript resolution rules, completely avoiding custom regex hacking.

- **In Bun**: Bun reads the `tsconfig.json` at startup. When you execute `bun run source/index.ts`, its internal runtime resolver automatically appends `./source/` to bare module specifiers before checking the disk.
- **In Parcel**: Parcel uses a highly optimized Rust-based compiler. When it parses your files, it sees the `baseUrl` directive and mirrors the exact same dual-lookup logic during the bundling process, outputting clean production JavaScript.

***

Would you like to see how to set this up alongside a **`paths` config** if you ever need to map a few specific folders outside of the `source/` directory?