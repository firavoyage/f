# .

```json
{
  "extends": "../../tsconfig.json",
}
```

# does parceljs read tsconfig

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, Parcel reads your <code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">tsconfig.json</code> file</strong></mark>, but its support depends entirely on which version of Parcel you are using and which specific configuration fields you need. \[[1](https://parceljs.org/blog/rc0/), [2](https://parceljs.org/blog/v2-9-0/), [3](https://parceljs.org/features/dependency-resolution/)]

### How Parcel Handles `tsconfig.json`

By default, Parcel uses SWC (or Babel in older configurations) to transpiles TypeScript files quickly without performing type-checking. Because it is not running the official TypeScript compiler (`tsc`) by default, it only honors specific compiler settings. \[[1](https://github.com/parcel-bundler/parcel/issues/4022), [2](https://github.com/parcel-bundler/parcel/issues/5360)]

Here is what Parcel reads from your `tsconfig.json`:

- **Path Mapping (`baseUrl` and `paths`)**: In [Parcel v2.9.0 and newer](https://parceljs.org/blog/v2-9-0/), the Rust-based resolver fully supports `baseUrl` and `paths` aliases natively. If you are running an older version of Parcel v2, these settings will be ignored unless you install an external plugin.
- **JSX Customization**: Parcel reads options like `jsx`, `jsxFactory`, and `jsxFragmentFactory` to automatically determine how to compile your JSX code.
- **Experimental Features**: Settings like `experimentalDecorators` are respected so that Parcel knows to transpile decorators properly. \[[1](https://parceljs.org/languages/typescript/), [2](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h), [3](https://parceljs.org/languages/javascript/), [4](https://parceljs.org/blog/v2-9-0/), [5](https://parceljs.org/blog/rc0/)]

### What Parcel Ignores By Default

- **Type Checking**: Parcel ignores strict type-checking settings (like `strict: true` or `noImplicitAny`) during the build process. To get type checking, you must run `tsc --noEmit` alongside Parcel or configure the official `@parcel/transformer-typescript-tsc` plugin.
- **Alternative File Names**: Parcel strictly looks for a file named exactly `tsconfig.json` in your project root or workspace; it does not support passing custom TSConfig file names natively via the CLI. \[[1](https://github.com/parcel-bundler/parcel/issues/9771), [2](https://github.com/parcel-bundler/parcel/issues/4022), [3](https://github.com/parcel-bundler/parcel/issues/3645), [4](https://github.com/parcel-bundler/parcel/issues/1251), [5](https://v2.angular.io/docs/ts/latest/guide/typescript-configuration.html)]

If you are experiencing issues with path aliases or JSX behaviors, verify you are running the latest version of Parcel to leverage its native [TypeScript support](https://parceljs.org/languages/typescript/). \[[1](https://parceljs.org/languages/typescript/), [2](https://parceljs.org/blog/v2-9-0/)]

Are you encountering a **specific error** or is an **alias path failing to resolve** in your current setup? I can provide the exact plugin settings or structure to fix it.

- [link](https://parceljs.org/languages/typescript/)\
  TypeScript - Parcel\
  Parcel does not currently support the baseUrl or paths options in tsconfig. json , which are TypeScript specific resolution extens...\
  Parcel.js
- [link](https://parceljs.org/blog/rc0/)\
  Parcel 2 RC\
  Aug 3, 2021 — Improved JSX support ... Parcel has always supported JSX out of the box, and even automatically detects which library you're using...\
  Parcel.js
- [link](https://github.com/parcel-bundler/parcel/issues/9771)\
  Parcel does not read \`jsconfig.json\` only \`tsconfig ... - GitHub\
  Jun 4, 2024 — Parcel does not read \`jsconfig. json\` only \`tsconfig. json\`, even with \`@parcel/transformer-typescript-tsc\` · Issue #9771 · parcel...\
  GitHub

Show all

## You said: does it read parent folders

**Yes, Parcel will look up into parent folders** to find a `tsconfig.json` file if it cannot find one in the immediate directory of the file it is compiling. \[[1](https://github.com/parcel-bundler/parcel/issues/9771)]

### How the Parent Folder Lookup Works

When Parcel processes a TypeScript file, both its compiler (transformer) and its dependency resolver will **bubble up the directory tree** (searching parent folder after parent folder) until they find the closest `tsconfig.json`. \[[1](https://github.com/parcel-bundler/parcel/issues/9771)]

However, this lookup behavior behaves differently depending on the feature:

- **Compiler Options (JSX, Decorators)**: The JavaScript/TypeScript transformer bubbles all the way up to find configuration rules. It will correctly apply compiler flags found in a parent or monorepo root `tsconfig.json`. \[[1](https://github.com/parcel-bundler/parcel/issues/9771)]
- **Path Aliases (`paths` and `baseUrl`)**: The native Rust-based resolver also searches parent directories using a standard ancestor file search. However, Parcel's resolver will **stop looking** once it hits your defined **Project Root**. \[[1](https://github.com/parcel-bundler/parcel/issues/9771), [2](https://parcel2-docs.vercel.app/features/module-resolution/)]

### The "Project Root" Constraint

Parcel defines the "Project Root" as the nearest parent directory containing a project lockfile (such as `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`) or a source control folder like `.git`. \[[1](https://parcel2-docs.vercel.app/features/module-resolution/)]

- **Inside the Project Root**: If your `tsconfig.json` is in a parent directory _below or at_ the lockfile level (common in monorepos), Parcel will resolve its paths flawlessly.
- **Outside the Project Root**: If you place a `tsconfig.json` in an outer folder completely above the lockfile/Git repository boundary, Parcel's path resolver may fail to see it. \[[1](https://parcel2-docs.vercel.app/features/module-resolution/)]

### Best Practices for Parent TSConfigs

1. **Monorepos**: If you are using a workspace structure, place your main `package.json` and lockfile in the absolute root folder alongside your master `tsconfig.json`. This ensures Parcel recognizes the entire directory tree as a single project. \[[1](https://parcel2-docs.vercel.app/features/module-resolution/)]
2. **Extending Configurations**: If sub-folders need unique rules, use TypeScript's standard `"extends": "../tsconfig.json"` syntax in the sub-folder's configuration. Parcel fully respects extended configurations. \[[1](https://stackoverflow.com/questions/70898646/my-tsconfig-in-my-module-folder-does-not-override-the-extended-tsconfig-peoperty)]

Are you managing a **monorepo / workspace setup**, or are you trying to share a single config across multiple independent projects? Let me know, and I can give you the exact folder structure to use.

- [link](https://github.com/parcel-bundler/parcel/issues/9771)\
  Parcel does not read \`jsconfig.json\` only \`tsconfig ... - GitHub\
  Jun 4, 2024 — mischnic commented. mischnic. on Jun 5, 2024. Member. More actions. The resolver does indeed only read tsconfig: parcel/packages/u...\
  GitHub
- [link](https://parcel2-docs.vercel.app/features/module-resolution/)\
  Module Resolution - Parcel\
  Module Resolution. How dependencies are resolved. The Parcel resolver implements a modified version of the node\_modules resolution...\
  Vercel
- [link](https://stackoverflow.com/questions/70898646/my-tsconfig-in-my-module-folder-does-not-override-the-extended-tsconfig-peoperty)\
  My tsconfig in my module folder does not override the extended tsconfig peoperty values in the parent folder\
  Jan 28, 2022 — Here's an example of using \`extends\` to override the target value: \* \*\*Price.ts\*\* Has an async/await implementation \* \*\*tsconfig.j...\
  Stack Overflow

## You said: well, i do have a package json, but tsconfig lives on higher parents folder and even aliases some pathes outside cwd

Because your `tsconfig.json` lives in a higher parent directory and references folders completely outside your current working directory (CWD), **Parcel will almost certainly fail to resolve your path aliases by default.** \[[1](https://github.com/TypeStrong/ts-loader/issues/732)]

Here is why your setup will break Parcel's native resolver, along with the easiest ways to fix it:

***

### Why It Fails Natively

1. **The Lockfile Barrier:** Parcel stops searching for `tsconfig.json` files as soon as it hits your "Project Root" (the directory containing your `package.json` or source control/lockfiles). If your localized `package.json` contains a lockfile, Parcel will never look up into the parent folder for a TSConfig. \[[1](https://parceljs.org/features/dependency-resolution/), [2](https://heynode.com/tutorial/what-packagejson/)]
2. **Strict CWD Boundary:** Parcel's internal bundling resolver is structurally designed to bundle files _inside_ the project root. If your parent `tsconfig.json` has `paths` aliases mapping to directories completely outside of your child folder, Parcel won't look there unless specifically told that the parent folder is the actual project root.

***

### How to Fix It

### Option 1: Run Parcel from the Parent Directory (Recommended)

The cleanest fix is to treat your setup like a monorepo. Instead of executing the Parcel CLI inside your child folder, point Parcel to the child folder's entry file **from the parent directory** where the `tsconfig.json` resides. \[[1](https://github.com/evanw/esbuild/issues/3019)]

Instead of running this inside your child folder:

bash

```
# Inside /parent/child-folder
parcel src/index.html
```

Use code with caution.

Run this from the parent directory:

bash

```
# Inside /parent
parcel child-folder/src/index.html
```

Use code with caution.

_Why this works:_ Parcel will now treat the parent directory as the project root, allowing it to natively read the `tsconfig.json` and perfectly map your external path aliases. \[[1](https://alberthernandez.dev/blog/typescript-path-aliases-in-node-js-the-complete-guide)]

### Option 2: Define the Aliases Natively in your Child `package.json` \[[1](https://parceljs.org/features/dependency-resolution/)]

If you must run the build command strictly within your child directory, bypass the TSConfig lookup altogether. You can mirror those parent path aliases directly inside your child `package.json` using **Parcel's native `alias` field**: \[[1](https://github.com/parcel-bundler/parcel/issues/6073)]

json

```
{
  "name": "my-child-project",
  "version": "1.0.0",
  "source": "src/index.html",
  "alias": {
    "@shared-components": "../outside-folder/components",
    "@utils": "../../global-utils"
  }
}
```

Use code with caution.

_Why this works:_ Parcel reads its own `alias` mappings before anything else. This safely routes your code to external folders without depending on parent TSConfigs.

### Option 3: Add a Local `tsconfig.json` that Extends the Parent \[[1](https://github.com/vercel/turborepo/discussions/620)]

You can drop a small, dedicated `tsconfig.json` into your child folder that explicitly pulls in the parent configurations: \[[1](https://stackoverflow.com/questions/66790078/how-to-reconcile-monorepo-with-multiple-tsconfig-json-each-having-its-own-paths), [2](https://github.com/davestewart/alias-hq/issues/30)]

json

```
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

Use code with caution.

If you decide to try one of these setups, let me know **which command line tool or script** you are currently running to trigger Parcel, and I can give you the exact path syntax for your project layout.

- [link](https://github.com/davestewart/alias-hq/issues/30)\
  Accessing paths from a \`tsconfig.json\` that extends ... - GitHub\
  Aug 3, 2021 — Description \* monorepo/ ... tsconfig.base.json (1) packages/ client/ ... tsconfig.json (2) components/ ... tsconfig.json (3) In th...\
  GitHub
- [link](https://stackoverflow.com/questions/66790078/how-to-reconcile-monorepo-with-multiple-tsconfig-json-each-having-its-own-paths)\
  How to reconcile monorepo with multiple tsconfig.json each having its own paths?\
  Mar 24, 2021 — Here's some information about reconciling a monorepo with multiple tsconfig.json files: \* \*\*Use extends\*\* In each project's tsconf...\
  Stack Overflow
- [link](https://github.com/parcel-bundler/parcel/issues/6073)\
  Support for TypeScript TSConfig 'extends', 'baseUrl' and 'paths ...\
  Apr 2, 2021 — A common pattern for managing large TypeScript projects is to leverage tsconfig.json with extends , baseUrl and paths . This is es...\
  GitHub

Show all

## You said: can i omit compileroptions

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>Yes, you can omit the </strong><code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">compilerOptions</code> field entirely</strong> if you are extending a parent configuration</mark>.

A `tsconfig.json` file can contain nothing but an `extends` property. \[[1](https://typescript-site-76.ortam.vercel.app/docs/handbook/tsconfig-json.html)]

json

```
{
  "extends": "../tsconfig.json"
}
```

Use code with caution.

### How Parcel Handles This

When you use `"extends"`, TypeScript (and Parcel) will automatically inherit all `compilerOptions` from the parent file.

### The One Catch: BaseUrl and Paths \[[1](https://thevinaysingh.medium.com/typescript-compiler-configuration-in-react-native-bf03aa816941)]

If your parent `tsconfig.json` uses **relative paths** inside its `paths` object, omitting `compilerOptions` in the child might break resolving.

- **How TSConfig path resolution works:** Path mapping is strictly relative to the location of the `tsconfig.json` file that _defines_ them, **not** the child file that extends them. \[[1](https://echobind.com/post/deep-dive-into-extending-tsconfig-json)]
- **If it breaks:** If your external path aliases fail to resolve after omitting the block, you will need to add a single line to your child file to reset the base directory lookup:

json

```
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

Use code with caution.

Are your parent path aliases written as **relative paths** (e.g., `../outside-folder`) or **absolute paths**? If you share a snippet of your parent aliases, I can tell you if you need `baseUrl`.

- [link](https://typescript-site-76.ortam.vercel.app/docs/handbook/tsconfig-json.html)\
  tsconfig.json · TypeScript\
  Configuration inheritance with extends # A tsconfig. json file can inherit configurations from another file using the extends prop...\
  \
  \
  Vercel
- [link](https://thevinaysingh.medium.com/typescript-compiler-configuration-in-react-native-bf03aa816941)\
  Typescript compiler configuration in React Native | by Vinay Singh | Medium\
  Nov 20, 2023 — What is tsconfig. json? compilerOptions Section include and exclude Sections ts-node and sourceMap Options esModuleInterop Option ...\
  \
  \
  Medium
- [link](https://echobind.com/post/deep-dive-into-extending-tsconfig-json)\
  Deep Dive Into Extending tsconfig.json\
  Feb 27, 2024 — The problem is the paths in a tsconfig. json are relative to the folder that that specific tsconfig. json file is in, and not the ...\
  \
  \
  Echobind
