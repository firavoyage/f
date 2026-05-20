# .

how will "paths": { "lib/\*": \["./source/lib/\*"], }, in tsconfig compileroptions work

This `paths` configuration maps a virtual import prefix to a specific folder location in your project during compilation.

How it works

- **Virtual Prefix**: When you type `import { helper } from 'lib/utility'`, the compiler catches the `lib/` prefix.
- **Folder Redirection**: It looks inside the `./source/lib/` directory instead of the default `node_modules` folder.
- **Wildcard Matching**: The `*` acts as a wildcard, passing the exact rest of the module path through to the target folder. \[[1](https://maxmartinez.dev/how-to-configure-tsconfig-path-aliases)]

Key Requirements

- **Requires baseUrl**: This setting will not work unless you also define `baseUrl` (usually `"baseUrl": "."`) in your `compilerOptions`.
- **Compile-Time Only**: TypeScript only checks types using this path; it **does not** rewrite the import paths in your final JavaScript files.
- **Runtime Bundler Needed**: You must use a bundler like Webpack, Vite, or a runtime tool like `tsconfig-paths` to resolve these paths in production. \[[1](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html), [2](https://alexanderobregon.substack.com/p/getting-module-aliases-to-work-with), [3](https://medium.com/jspoint/typescript-compilation-the-typescript-compiler-4cb15f7244bc), [4](https://nx.dev/blog/managing-ts-packages-in-monorepos), [5](https://alberthernandez.dev/blog/typescript-path-aliases-in-node-js-the-complete-guide)]

If you are setting this up for a new project, would you like to see how to configure your **bundler** (like Vite or Webpack) or **Node.js** to handle these paths at runtime?

- [link](https://maxmartinez.dev/how-to-configure-tsconfig-path-aliases)\
  How to configure TSConfig Path Aliases?\
  Aug 12, 2024 — In the previous configuration example, we have "@/controllers/" path alias which is an alias for the "src/controllers/" path. The ...\
  \
  \
  maxmartinez.dev
- [link](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html)\
  Documentation - TypeScript 6.0\
  May 17, 2026 — Deprecated: --baseUrl The baseUrl option is most-commonly used in conjunction with paths , and is typically used as a prefix for e...\
  \
  TypeScript
- [link](https://alexanderobregon.substack.com/p/getting-module-aliases-to-work-with)\
  Getting Module Aliases to Work with TypeScript\
  Jun 27, 2025 — TypeScript only uses this configuration at compile time. None of this affects how Node. js or a bundler will treat the same import...\
  \
  \
  Substack

Show all

will it work wo "exports": {\
"./\*": {\
"types": "./\*.d.ts",\
"import": "./\*.js"\
}\
}\
in lib package json and wo pnpm link

Yes, it will work perfectly without those package.json configuration blocks and without using `pnpm link`.

Why those are not required

- **Internal Resolution**: The `paths` property in `tsconfig.json` bypasses standard Node.js module resolution.
- **Direct File Mapping**: It tells the TypeScript compiler to look directly at the specified local folder path (`./source/lib/*`).
- **No Package Registry Needed**: Because the compiler maps the path directly to local files, it does not care about `exports` maps or symlinks inside `node_modules`.

How to ensure it works

To guarantee successful compilation, make sure your root `tsconfig.json` includes the matching base URL configuration alongside your paths mapping:

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "lib/*": ["./source/lib/*"]
    }
  }
}
```

Use code with caution.

Are you planning to run this code directly in **Node.js**, or are you using a build tool like **Vite, Webpack, or Esbuild** to bundle your application?

can i omit baseurl

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can safely omit </span><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">baseUrl</code></strong></mark>. \[[1](https://www.typescriptlang.org/tsconfig/baseUrl.html), [2](https://github.com/microsoft/playwright/issues/27933)]

Since **TypeScript 4.1**, the `baseUrl` configuration is no longer required when using path aliases. \[[1](https://www.typescriptlang.org/tsconfig/baseUrl.html), [2](https://github.com/microsoft/playwright/issues/27933)]

How it changes behavior

- **New Reference Point**: When `baseUrl` is absent, TypeScript resolves all patterns defined inside `paths` **relative to the directory containing the `tsconfig.json` file** itself.
- **Why it's better**: Omitting `baseUrl` prevents TypeScript from accidentally resolving auto-imports into plain, absolute-looking paths (e.g., matching `import { x } from 'source/lib'`) which can break standard node module lookups. \[[1](https://github.com/vercel/next.js/discussions/34535), [2](https://www.typescriptlang.org/tsconfig/paths.html), [3](https://github.com/jonaskello/tsconfig-paths/issues/143), [4](https://www.typescriptlang.org/tsconfig/baseUrl.html)]

The updated config

Your streamlined `tsconfig.json` file works directly like this:

json

```
{
  "compilerOptions": {
    "paths": {
      "lib/*": ["./source/lib/*"]
    }
  }
}
```

Use code with caution.

Would you like help testing if your **build tool** or **test runner** (like Vite, Webpack, or Jest) natively supports omitting `baseUrl`? \[[1](https://github.com/microsoft/playwright/issues/27933), [3](https://www.typescriptlang.org/tsconfig/paths.html)]

- [link](https://www.typescriptlang.org/tsconfig/baseUrl.html)\
  baseUrl - TypeScript: TSConfig Option\
  Sets a base directory from which to resolve bare specifier module names. For example, in the directory structure: project. ├── ex.\
  TypeScript
- [link](https://github.com/jonaskello/tsconfig-paths/issues/143)\
  Allow missing baseUrl for TS 4.1+ · Issue #143 · jonaskello/tsconfig- ...\
  Sep 18, 2020 — Effectively, the paths become relative to the tsconfig. json file. I'm testing a project with the new beta and baseUrl removed to ...\
  GitHub
- [link](https://github.com/vercel/next.js/discussions/34535)\
  Support tsconfig paths without baseUrl #34535 - GitHub\
  Feb 18, 2022 — Describe the feature you'd like to request. Typescript supports paths without specifying baseUrl . This is interesting when you wa...\
  GitHub

Show all

# . (d)

1\. **`lib/package.json`**:

```json
{
  "name": "lib",
  "exports": { "./*": "./*.js" }
}
```

2\. **Command**: `pnpm link ./lib` from the root.

If you use TypeScript, you must also tell the compiler where to find these files, as it doesn't always resolve `exports` in local links automatically:

3\. **File:** `tsconfig.json`

json

```
{
  "compilerOptions": {
    "paths": {
      "lib/*": ["./lib/*"]
    }
  }
}
```

#

i have a folder called lib at the repo root. there are js files inside, like foo bar whatever. how to use wildcard to match them all and use pnpm link to install them, without manually naming each explicitly or writing automation scripts. then i could import "lib/foo" anywhere in the repo.

To link multiple local files or packages using

`pnpm` without manually naming each one, you should use **pnpm workspaces** with a wildcard configuration. This is the standard way to handle "bulk" internal linking without custom scripts.

PNPM +1

1\. Configure the Workspace

Create a `pnpm-workspace.yaml` file at your repo root. This tells `pnpm` to treat every folder or valid package inside `lib/` as a local dependency.

PNPM +1

yaml

```
# pnpm-workspace.yaml
packages:
  - '.'      # The root project
  - 'lib/*'  # All folders inside lib
```

Use code with caution.

2\. Prepare the Files

For `pnpm` to recognize them, each item in `lib/` must be a directory containing a `package.json`. If you currently only have flat `.js` files, you must wrap them:

- Move `lib/foo.js` to `lib/foo/index.js`.
- Add a `lib/foo/package.json` with `{"name": "lib/foo", "version": "0.0.0"}`.

3\. Link them All

Once the workspace is defined, you can "link" all of them to your root (or any other package in the repo) using a wildcard in your shell. Run this from your project root:

bash

```
pnpm add lib/*
```

Use code with caution.

- **What this does:** It tells `pnpm` to find every package inside the `lib/` directory and add it to your `package.json` as a `workspace:` dependency.

- **The Result:** Your `package.json` will now contain:\
  json

<!---->

```
"dependencies": {
  "lib/foo": "workspace:*",
  "lib/bar": "workspace:*"
}
```

Use code with caution.\
PNPM +2

4\. Import Anywhere

After running `pnpm install`, you can import these anywhere in your repo just as you requested:

YouTube

javascript

```
import foo from 'lib/foo';
```

Use code with caution.

**Alternative (No Wildcard Support):** If your shell doesn't support the `*` wildcard for the `add` command, you can use the [pnpm link](https://pnpm.io/cli/link) command iteratively, but the workspace method is the recommended way to manage internal "lib" folders at scale.

PNPM

Would you like to know how to automate the **package.json creation** for those files if you have a lot of them?

7 sites

- [link](https://pnpm.io/pnpm-workspace%5Fyaml#:~:text=yaml-,pnpm%2Dworkspace.,custom%20location%20wildcards%20are%20used.)\
  pnpm-workspace.yaml\
  Mar 29, 2026 — pnpm-workspace. yaml defines the root of the workspace and enables you to include / exclude directories from the workspace. By def...\
  PNPM
- [link](https://pnpm.io/cli/link#:~:text=Aliases:%20ln,link%20foo%20to%20my%2Dproject)\
  pnpm link\
  Mar 21, 2026 — Aliases: ln. Makes the current local package accessible system-wide, or in another location. pnpm link pnpm link. Options​ pnpm li...\
  PNPM
- [link](https://pnpm.io/workspaces#:~:text=Workspace%20protocol%20%28workspace:%29%E2%80%8B,be%20installed%20from%20the%20registry.)\
  Workspace | pnpm\
  Mar 29, 2026 — Workspace protocol (workspace:)​ If linkWorkspacePackages is set to true , pnpm will link packages from the workspace if the avail...\
  PNPM

Show all

no pnpm workspace.

If you are not using workspaces,

`pnpm` does not have a built-in wildcard for "linking everything in this folder." You must use a shell expansion to pass all the directories to the command at once.

The One-Liner

Run this from your repository root to link all subfolders inside `lib/` as dependencies:

bash

```
pnpm add ./lib/*/
```

Use code with caution.

How it works

1. **Shell Expansion**: The `*/` at the end of the path tells your shell (Bash or Zsh) to expand into a list of every **directory** inside `lib/`.

2. **pnpm add**: `pnpm` treats each expanded path as a local file dependency.

3. **Resulting package.json**: It will automatically add them to your `dependencies` using the `link:` protocol:\
   json

<!---->

```
"dependencies": {
  "foo": "link:lib/foo",
  "bar": "link:lib/bar"
}
```

Use code with caution.

Requirements for this to work

- **Folder Structure**: Each "package" must be in its own folder (e.g., `lib/foo/`, `lib/bar/`). If your files are flat (e.g., `lib/foo.js`), you must move them into folders with an `index.js` or specify a `main` field.
- **package.json**: Each subfolder inside `lib/` **must** have its own `package.json` file with a `name` (e.g., `"name": "lib/foo"`) for `pnpm` to recognize it as a package.

Importing

Once added, `pnpm` creates the symlinks in your `node_modules`. You can then import them using the name defined in the subfolder's `package.json`:

javascript

```
import foo from 'lib/foo';
```

Use code with caution.

**Note:** If you are using **TypeScript**, you will also need to add a `paths` mapping in your `tsconfig.json` so the editor recognizes these local links:

json

```
"compilerOptions": {
  "paths": {
    "lib/*": ["./lib/*"]
  }
}
```

Use code with caution.

Would you like a quick way to **generate those package.json files** for all your folders in one go?

3 sites

- [link](https://stackoverflow.com/questions/73592570/when-i-use-pnpm-how-to-set-symlink-for-all-the-directory-which-in-my-workspace)\
  when I use pnpm, how to set symlink for all the directory which in my ...\
  Sep 3, 2022 — \* 1 Answer. Sorted by: 0. If you want to add @mono/a to the dependencies of @mono/b , you can run: pnpm --filter=@mono/b add @mono...\
  \
  Stack Overflow

- [link](https://github.com/pnpm/pnpm/issues/2959#:~:text=I%20already%20explained%20the%20issue,instead%20of%20%22workspace:%2A%22%20.)\
  Capability of specifying a path instead of "workspace:\*" #2959 - GitHub\
  Oct 28, 2020 — I already explained the issue in this issue. We "must" add all the packages to pnpm-workspace. yaml (even those that are generated...\
  \
  GitHub\\

- [link](https://pnpm.io/cli/link#:~:text=Aliases:%20ln,link%20foo%20to%20my%2Dproject)\
  pnpm link\
  Mar 21, 2026 — Aliases: ln. Makes the current local package accessible system-wide, or in another location. pnpm link pnpm link. Options​ pnpm li...\
  \
  PNPM

use wildcard export in lib package json. use pnpm link.

To link all files inside a

`lib` folder as subpath imports (e.g., `import "lib/foo"`) without creating a separate package for every single file, you can treat the entire `lib` folder as a **single local package** and use the `exports` field with a wildcard pattern.

1\. Create a Package in the `lib` Folder

You need one `package.json` inside your `lib/` directory to define it as a linkable package.

**File:** `lib/package.json`

json

```
{
  "name": "lib",
  "version": "0.0.0",
  "type": "module",
  "exports": {
    "./*": "./*.js"
  }
}
```

Use code with caution.

- **The Wildcard**: `"./*": "./*.js"` maps any subpath import like `lib/foo` directly to the file `lib/foo.js`.\
  webpack +1

2\. Link the Library to Your Project

From your **repository root**, run the `pnpm link` command to point your project's `node_modules` to that local folder.

PNPM +1

bash

```
pnpm link ./lib
```

Use code with caution.

3\. Usage

Now you can import any file within that folder from anywhere in your repo:

javascript

```
// This resolves to your-repo/lib/foo.js
import foo from "lib/foo";

// This resolves to your-repo/lib/bar.js
import bar from "lib/bar";
```

Use code with caution.

Why this works

- **Encapsulation**: The `exports` field defines exactly which files are accessible. By using `./*`, you allow any file in that directory to be reached via a subpath.
- **Symlinking**: `pnpm link` creates a symlink in your root `node_modules/lib` that points to your local `./lib` folder.
- **No Workspaces**: This method treats `lib` as a standard local dependency without needing a complex `pnpm-workspace.yaml` setup.\
  PNPM +4

A Note for TypeScript Users

If you use TypeScript, you must also tell the compiler where to find these files, as it doesn't always resolve `exports` in local links automatically:

**File:** `tsconfig.json`

json

```
{
  "compilerOptions": {
    "paths": {
      "lib/*": ["./lib/*"]
    }
  }
}
```

Use code with caution.

Would you like to know how to add **Type Definitions** to this wildcard setup?

7 sites

- [link](https://pnpm.io/cli/link#:~:text=Aliases:%20ln,link%20foo%20to%20my%2Dproject)\
  pnpm link\
  Mar 21, 2026 — Aliases: ln. Makes the current local package accessible system-wide, or in another location. pnpm link pnpm link. Options​ pnpm li...\
  PNPM
- [link](https://pnpm.io/next/cli/link#:~:text=pnpm%20link%20%E2%80%8B,in%20foo/node%5Fmodules/bar%20.)\
  pnpm link\
  Mar 21, 2026 — pnpm link ​ Links package from directory to node\_modules of package from where you're executing this command. must be a relative o...\
  PNPM
- [link](https://webpack.js.org/guides/package-exports/#:~:text=The%20exports%20field%20in%20the,./package/secondary.js)\
  Package exports - webpack\
  The exports field in the package. json of a package allows to declare which module should be used when using module requests like ...\
  webpack

Show all

is it simpler than your previous recommendations

Yes, this is

**significantly simpler** for your specific goal.

While the previous methods are "best practices" for large monorepos, they require extra overhead (workspaces) or repetitive tasks (one folder per file). The **wildcard export + link** method reduces your maintenance to just **one file** and **one command**.

Why it's simpler:

- **One `package.json` total**: You only need one file inside the `lib` folder. You don't have to create 50 folders for 50 JS files.
- **No Workspaces**: You don't need to learn or configure `pnpm-workspace.yaml`.
- **Automatic updates**: When you add `lib/newfile.js`, it is **instantly** available as `import "lib/newfile"`. You never have to run a link command again.
- **Cleaner Root**: Your root `package.json` doesn't get cluttered with 50 local dependencies; it just has one entry for `lib`.\
  PNPM +3

Comparison at a glance:

| Feature          | Workspaces            | `pnpm add ./lib/*/` | Wildcard Export (This)  |
| ---------------- | --------------------- | ------------------- | ----------------------- |
| **Setup Effort** | High (YAML + folders) | Medium (Folders)    | **Low (1 file)**        |
| **New File Add** | Needs new folder      | Needs new folder    | **Instant (no action)** |
| **Import Style** | `lib/foo`             | `foo`               | **`lib/foo`**           |
| **Maintenance**  | High                  | High                | **Low**                 |

Reminder of the setup:

1. **`lib/package.json`**:\
   json

<!---->

```
{
  "name": "lib",
  "exports": { "./*": "./*.js" }
}
```

Use code with caution.
2\. **Command**: `pnpm link ./lib` from the root.\
Stack Overflow

**One catch**: If you use **TypeScript**, you must add a `paths` entry in `tsconfig.json` so the editor understands the `lib/*` alias, as [TypeScript sometimes struggles with wildcard auto-imports](https://github.com/vercel/turborepo/issues/6844).

Do you want to see the **tsconfig.json** snippet to make sure VS Code recognizes these imports?

7 sites

- [link](https://pnpm.io/workspaces#:~:text=Workspace%20protocol%20%28workspace:%29%E2%80%8B,the%20workspace:%20protocol%20is%20used.)\
  Workspace | pnpm\
  Mar 29, 2026 — Workspace protocol (workspace:)​ If linkWorkspacePackages is set to true , pnpm will link packages from the workspace if the avail...\
  PNPM
- [link](https://github.com/evanw/esbuild/issues/3201#:~:text=reproduce%20your%20issue.-,yzrmn%20commented,/some%2Dpackage/package.)\
  Problems with package.json wildcard exports #3201 - GitHub\
  Jun 29, 2023 — yzrmn commented. yzrmn. on Jun 29, 2023 · edited by yzrmn. Author. Sorry for not being clearer :) I was just pointing out a case w...\
  GitHub
- [link](https://pnpm.io/cli/link#:~:text=When%20you%20use%20pnpm%20link,but%20pnpm%20for%20your%20project.)\
  pnpm link\
  Mar 21, 2026 — When you use pnpm link , the linked package is symlinked from the source code. You can modify the source code of the linked packag...\
  PNPM

Show all

how to make it work with ts

To make this work with TypeScript, you need to ensure two things: that the TS compiler understands the

`exports` field in your `package.json` and that your IDE (like VS Code) can find the source files for "go-to-definition" support.

1\. Update your Root `tsconfig.json`

TypeScript requires a modern `moduleResolution` setting to recognize the `exports` field from a linked package.

json

```
{
  "compilerOptions": {
    /* 1. Tell TS how to resolve the 'exports' field */
    "moduleResolution": "NodeNext", // or "Bundler" if you use Vite/Webpack/Esbuild
    "module": "NodeNext",

    /* 2. Map the imports to your local source for editor support */
    "baseUrl": ".",
    "paths": {
      "lib/*": ["./lib/*"]
    },

    /* 3. Ensure TS can see the JS files if they aren't .ts yet */
    "allowJs": true,
    "checkJs": false
  }
}
```

Use code with caution.

2\. Add Type Definitions (Optional but Recommended)

If your files are `.js`, you can still get full type safety by creating a matching `.d.ts` file for each JS file. For example, if you have `lib/foo.js`, you can add `lib/foo.d.ts`.

If you want to handle types for the entire folder at once, update your `lib/package.json`:

json

```
{
  "name": "lib",
  "version": "0.0.0",
  "exports": {
    "./*": {
      "types": "./*.d.ts",
      "import": "./*.js"
    }
  }
}
```

Use code with caution.

3\. Verification Steps

1. **Restart TS Server**: In VS Code, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and run **"TypeScript: Restart TS Server"**. This forces it to re-read the `paths` and `exports`.
2. **Test Import**: Type `import foo from "lib/foo";` in a project file.

- If it has a red squiggle, check that `moduleResolution` is correctly set to `NodeNext` or `Bundler`.
- If you can't "Cmd+Click" to open the file, double-check that your `paths` in `tsconfig.json` matches the relative path to your `lib` folder.

**Why this is best:** This combination allows Node.js to handle the runtime resolution via `exports`, while [TypeScript handles the editor experience](https://www.typescriptlang.org/tsconfig/paths.html) via `paths`.

Would you like to know how to **auto-generate types** for all those JS files so you get full autocompletion?

4 sites

- [link](https://www.youtube.com/watch?v=E7Dvkx%5FXr2k)\
  How To Create a Simple TypeScript Library That Runs ...\
  May 13, 2025 — hey in this video I want to show you how to create a quick and simple TypeScript library with good defaults in 2025 i'll create th...\
  YouTube·florianjsx\
  \
  13:23

- [link](https://dev.to/receter/organize-your-library-with-subpath-exports-4jb9#:~:text=1.,get%20an%20error%20like%20this:)\
  Organize your library with subpath exports 🗄️\
  Dec 6, 2023 — 1. Create the entry files. In your library directory, create separate files for each subpath you want to expose. For example: // l...\
  \
  DEV Community\\

- [link](https://stackoverflow.com/questions/58990498/package-json-exports-field-not-working-with-typescript#:~:text=3%20Comments\&text=A%20few%20points%20that%20were,resolve%20using%20a%20fallback%20strategy.)\
  package.json \`exports\` field not working with TypeScript\
  Nov 22, 2019 — 3 Comments. ... A few points that were not at all obvious to me when trying to get this to work: The tsconfig of the target (modul...\
  \
  Stack Overflow\\

Show all

i use both tsx and bundlers (vite, parcel, whatever).

To make this work across

**tsx** (for CLI/scripts) and **bundlers** (Vite, Parcel), the secret lies in the `moduleResolution` setting. Both modern `tsx` and most bundlers now prefer the `Bundler` or `NodeNext` resolution algorithms.

Here is the "universal" configuration:

1\. The `lib/package.json`

Keep the wildcard exports. This is the source of truth for Node.js and your bundler.

json

```
{
  "name": "lib",
  "version": "0.0.0",
  "type": "module",
  "exports": {
    "./*": "./*.js"
  }
}
```

Use code with caution.

_Note: If your source files are actually `.ts` files inside `lib`, change the export to `"./_": "./_.ts"`._

2\. The Root `tsconfig.json`

This is the most critical part for **tsx** and **IDE support**.

json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    /* 'Bundler' is the magic word for Vite/Parcel/tsx */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,

    "baseUrl": ".",
    "paths": {
      "lib/*": ["./lib/*"]
    },

    /* Required if your lib files are .js but you are in a TS project */
    "allowJs": true,
    "checkJs": false,
    "noEmit": true
  }
}
```

Use code with caution.

3\. Why this works for your tools:

- **Vite/Parcel:** They see `pnpm link` (the symlink in `node_modules`) and use the `exports` field in `lib/package.json` to resolve the files.
- **tsx:** Since `tsx` follows Node’s resolution rules, it respects the `exports` field. However, it also respects `tsconfig.json` paths, meaning it will jump straight to the source file.
- **VS Code:** The `paths` mapping ensures that when you `Cmd+Click` on `import "lib/foo"`, it opens the file in your `lib` folder instantly.

One Small Tweak for "No Extensions"

If you want to import `lib/foo` without adding `.js` or `.ts` in your code:

1. Ensure `moduleResolution` is `Bundler`.
2. Ensure your `paths` in `tsconfig` looks like this: `"lib/*": ["./lib/*.ts", "./lib/*.js"]`.

**Ready to try it?** Just run `pnpm link ./lib` one last time to ensure the symlink is fresh after your `package.json` changes.

Do you want to see how to handle **type-checking** across these linked files specifically for **Vite**?

AI can make mistakes, so double-check responses

my source files are all ts. give me the full guide to setup the repo.

Since your source files are

`.ts` and you are using `tsx` and bundlers (Vite/Parcel), this is the cleanest "single-package" setup. It avoids the overhead of workspaces while giving you perfect IDE support and runtime resolution.

1\. The Structure

Your repo should look like this:

text

```
your-repo/
├── lib/
│   ├── package.json   <-- The "Library" definition
│   ├── foo.ts
│   └── bar.ts
├── src/               <-- Your main app
│   └── main.ts
├── package.json       <-- Root package.json
└── tsconfig.json      <-- Root TS config
```

Use code with caution.

2\. Configure the `lib` Folder

Create a `package.json` inside the `lib/` directory. This defines how Node and Bundlers "see" the files inside.

**File: `lib/package.json`**

json

```
{
  "name": "@local/lib",
  "version": "0.0.0",
  "type": "module",
  "exports": {
    "./*": "./*.ts"
  }
}
```

Use code with caution.

_Note: Using a scope like `@local/lib` is a pro tip to avoid naming collisions with npm packages._

3\. Link it to the Root

From your **repository root**, run:

bash

```
pnpm link ./lib
```

Use code with caution.

This creates a symlink in `node_modules/@local/lib` pointing to your folder.

4\. Configure TypeScript

This is the "glue" that makes `tsx`, Vite, and VS Code work together.

**File: `tsconfig.json`**

json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler", // Essential for Vite/Parcel/tsx
    "allowImportingTsExtensions": true, // Allows importing .ts files directly
    "noEmit": true,

    "baseUrl": ".",
    "paths": {
      "@local/lib/*": ["./lib/*"]
    }
  },
  "include": ["src/**/*", "lib/**/*"]
}
```

Use code with caution.

5\. Usage

Now you can import your TS files from anywhere in `src/` without relative paths:

typescript

```
// src/main.ts
import { something } from "@local/lib/foo";

console.log(something);
```

Use code with caution.

Why this setup wins:

1. **Direct Source Access**: `tsx` and Vite will read the `.ts` files directly from your `lib/` folder. No build step is required for the library itself.
2. **Wildcard Power**: If you add `lib/util.ts`, it is instantly available as `@local/lib/util` without changing any config.
3. **Refactoring**: Since VS Code follows the `paths` mapping, "Rename Symbol" will work across your entire project.
4. **No Workspaces**: You don't have to deal with `pnpm-workspace.yaml` or complex monorepo tooling.

**One Pro Tip**: If you get a "Module not found" error in your bundler, ensure your `lib/package.json` has `"type": "module"` so it matches the ESM environment of modern tools.

Do you want to see how to handle **barrel files** (index.ts) if you prefer `import { foo } from "@local/lib"` instead of subpaths?

will it work

Yes, this setup will work reliably for your tools because it aligns with how modern TypeScript and Node.js handle

**subpath exports**.

Since you are using **tsx** (which uses Node.js resolution) and **bundlers** like Vite or Parcel (which respect `package.json` exports), the key is that your `exports` field and `tsconfig` paths are in sync.

Why it works for each tool:

- **Vite/Parcel**: They see the symlink created by `pnpm link` in `node_modules`. When they encounter `import "@local/lib/foo"`, they look at the `exports` in your `lib/package.json` and resolve it directly to `lib/foo.ts`.
- **tsx**: It is designed to work with ESM and subpath exports out of the box. It will follow the `exports` map just like Node.js.
- **TypeScript (IDE)**: The `paths` in your `tsconfig.json` act as a "shortcut" for the compiler. This ensures you get autocompletion and "Go to Definition" support even if the package isn't fully "built" yet.\
  Vite +3

The Universal Config Recap

To ensure no "Module not found" errors across these different environments, keep these settings exactly as shown:

**1. `lib/package.json`** (The subpath map)

json

```
{
  "name": "@local/lib",
  "type": "module",
  "exports": {
    "./*": "./*.ts"
  }
}
```

Use code with caution.

**2. `tsconfig.json`** (The IDE and `tsx` glue)

json

```
{
  "compilerOptions": {
    "moduleResolution": "Bundler", //
    "allowImportingTsExtensions": true,
    "baseUrl": ".",
    "paths": {
      "@local/lib/*": ["./lib/*"]
    }
  }
}
```

Use code with caution.

Potential Gotcha: Auto-Imports

The only minor limitation you might face is that VS Code sometimes struggles to **automatically suggest** new files inside a wildcard export if they haven't been opened yet. If you find a file isn't showing up in suggestions, just open that `.ts` file once, and the TS Server will index it.

GitHub +1

Would you like a single command to **automatically link** and verify the setup across your `src` and `lib` folders?

6 sites

- [link](https://vite.dev/guide/features#:~:text=Vite%20uses%20esbuild%20to%20transpile,tsconfig.json%20require%20special%20attention.)\
  Features | Vite\
  Vite uses esbuild to transpile TypeScript into JavaScript which is about 20~30x faster than vanilla tsc , and HMR updates can refl...\
  Vite
- [link](https://github.com/vercel/turbo/issues/6844#:~:text=When%20using%20wildcards%20in%20a,tsx%22%20%7D%2C)\
  Typescript autoimport suggestions not working with \`exports ...\
  Dec 21, 2023 — When using wildcards in a monorepo's package. json exports field, which is supported by typescript and compiled properly, there ar...\
  GitHub
- [link](https://medium.com/@johnbernalfsd/how-to-add-absolute-imports-to-vite-4-with-typescript-5-5d789bc7d791#:~:text=Summary,configuring%20Vite%20using%20Node's%20functionality)\
  \[Updated] How to add Absolute Imports to Vite 7 with TypeScript 5\
  May 13, 2023 — Summary. A few steps are necessary for absolute paths to work with Vite: Set up TypeScript to work with Intellisense in your IDE. ...\
  Medium

Show all

\---

i have lib, a folder with some js files inside. how to use them like normal node modules, importing without pointing at path to file

To use files in a local folder like standard Node modules (e.g.,

`import { func } from '#lib/file'`), you can <mark style="border-radius: 4px; padding: 0px 2px;">use the native <strong>"imports"</strong> or <strong>"exports"</strong> fields in your</mark> `package.json`. This eliminates the need for messy relative paths like `../../lib/file.js`.

1\. Using the "imports" field (Recommended)

This is the modern standard for mapping internal paths to clean aliases. Add an `imports` object to your **root `package.json`**:

json

```
{
  "name": "your-project",
  "type": "module",
  "imports": {
    "#lib/*": "./lib/*.js"
  }
}
```

Use code with caution.

- **How to use:** You can now import any file in that folder using the `#lib/` prefix.\
  javascript

<!---->

```
import { myFunc } from '#lib/myFile';
```

Use code with caution.

- **Requirements:** Alias keys in `imports` **must** start with a `#`.\
  Stack Overflow +2

2\. Using "exports" (Best for sub-packages)

If your `lib` folder is intended to be its own self-contained package, you can define entry points using the `exports` field in the **`lib/package.json`**:

json

```
{
  "name": "@my-app/lib",
  "exports": {
    ".": "./index.js",
    "./utils": "./utils.js"
  }
}
```

Use code with caution.

Then, in your main project, you "install" it locally:

Stack Overflow +1

bash

```
npm install ./lib
```

Use code with caution.

You can then import it just like an npm package: `import { x } from '@my-app/lib/utils'`.

3\. Quick & Dirty: The `node_modules` trick

Node.js automatically looks for folders inside any `node_modules` directory in the file hierarchy. You can move your `lib` folder into `node_modules`:

- **Structure:** `node_modules/my-lib/index.js`
- **Usage:** `import x from 'my-lib';`
- **Warning:** This is often considered an anti-pattern because `npm install` might delete or overwrite your custom folder if it isn't tracked correctly in `package.json`. To keep it safe, you must add an exception to your `.gitignore`.\
  Stack Overflow +1

4\. System-wide Linking with `npm link`

If you want to use the `lib` folder across **multiple different projects** on your machine:

1. Navigate to your `lib` folder and run `npm link`.
2. Navigate to your main project and run `npm link <name-from-lib-package-json>`.\
   Stack Overflow +4

This creates a symbolic link, so any changes you make in the `lib` folder are reflected instantly in your main project without re-installing.

Medium

Would you like to see how to set this up specifically for a **TypeScript** project or a **CommonJS** (`require`) environment?

20 sites

- [link](https://stackoverflow.com/questions/20888576/how-to-develop-npm-module-locally)\
  How to develop npm module locally - Stack Overflow\
  Jan 2, 2014 — \* 2 Answers. Sorted by: 57. You're looking for the npm link command, which is a two steps process: Run npm link from your MyModule...\
  Stack Overflow
- [link](https://docs.npmjs.com/cli/v8/commands/npm-link/#:~:text=alias:%20ln-,Description,into%20some%20other%20package%20directory.)\
  npm-link - npm Docs\
  Oct 25, 2022 — Description. This is handy for installing your own stuff, so that you can work on it and test iteratively without having to contin...\
  npm Docs
- [link](https://stackoverflow.com/questions/50010438/install-npm-local-module-directory-without-symlinks)\
  Install npm local module directory without symlinks? - Stack Overflow\
  Apr 24, 2018 — \* 3 Answers. Sorted by: 50. npm current cannot install directly from a folder without a symlink. You can get around this by genera...\
  Stack Overflow

Show all

i want to import foo, not import #lib/foo

To import a file like

`foo` directly without any path (e.g., `import { x } from 'foo'`), Node.js must believe `foo` is a top-level package in your `node_modules` folder. There are two clean ways to do this natively without using the `#` prefix.

1\. The Self-Referencing "exports" Field (Recommended)

You can make your own project "importable" by itself using the `exports` field in your root `package.json`. If your project's name is `my-app`, you can map `foo` to `lib/foo.js`.

**In your `package.json`:**

json

```
{
  "name": "my-app",
  "type": "module",
  "exports": {
    "./foo": "./lib/foo.js"
  }
}
```

Use code with caution.

**How to use:**

javascript

```
// This works from ANY file in your project
import { someFunc } from 'my-app/foo';
```

Use code with caution.

_Note: This technically uses the package name as a prefix, which is the standard way to avoid naming collisions with built-in Node modules._

2\. Local "Symlink" Installation

If you want to import `foo` with absolutely no prefix at all, you can treat your `lib` folder as its own local package and "install" it into your `node_modules`.

1. **Add a `package.json` inside your `lib/` folder:**\
   json

<!---->

```
{ "name": "foo", "version": "1.0.0", "main": "index.js" }
```

Use code with caution.
2\. **In your project root, run:**\
bash

```
npm install ./lib
```

Use code with caution.

**How to use:**

javascript

```
import x from 'foo';
```

Use code with caution.

This creates a symbolic link in `node_modules/foo` that points to your `lib` folder. Any changes you make in `lib` will be reflected immediately.

3\. The `NODE_PATH` Environment Variable (Legacy)

You can force Node to look in your `lib` folder for any "bare" import by setting the `NODE_PATH` environment variable.

- **Command:** `NODE_PATH=./lib node index.js`
- **Usage:** `import x from 'foo.js';`

**Warning:** This is considered a legacy approach and is not supported by native [Node.js ES Modules](https://nodejs.org/api/modules.html) (it only works reliably with CommonJS `require`).

Comparison Table

| Method          | Syntax                | Best For                                           |
| --------------- | --------------------- | -------------------------------------------------- |
| **Exports**     | `import 'my-app/foo'` | Standard production-ready code.                    |
| **NPM Install** | `import 'foo'`        | Making a local folder feel like a real dependency. |
| **NODE\_PATH**   | `import 'foo'`        | Quick local scripts (CommonJS only).               |

Would you like to know how to set up **IntelliSense/Auto-complete** in VS Code for these "bare" imports?

2 sites

- [link](https://www.reddit.com/r/reactjs/comments/1j6zk9y/using%5Finstead%5Fof%5Ffor%5Fin%5Fpath%5Fimports%5Fimport%5Falias/#:~:text=NewLlama,ecosystem%20so%20maybe%20it's%20different?)\
  Using ~/ instead of @/ for in path imports (import alias) - Reddit\
  Mar 9, 2025 — NewLlama. • 1y ago. Don't do either of these. Use a self-import import "your-name/subpath" where "your-name" is the name field in ...\
  \
  Reddit\\

- [link](https://stackoverflow.com/questions/68901880/importing-files-in-node-package-without-including-dist-folder-name#:~:text=In%20your%20case%20it%20should,19.3k14%2076%20166)\
  Importing files in node package without including dist folder ...\
  Aug 24, 2021 — In your case it should look similar to following. { "name": "my-lib", "version": "1.0.0", "description": "", "main": "./dist/index...\
  \
  Stack Overflow

pnpm

With

**pnpm**, you can achieve this by "installing" your local folder as a workspace dependency or a direct link. This allows you to use `import { x } from 'foo'` without any special prefixes like `#` or `@`.

PNPM +2

1\. The `link:` Protocol (Simplest)

You can manually add the folder to your `package.json` dependencies using the `link:` protocol.

PNPM

- **In your root `package.json`:**\
  json

<!---->

```
{
  "dependencies": {
    "foo": "link:./lib"
  }
}
```

Use code with caution.

- **Action:** Run `pnpm install`.
- **Usage:** `import x from 'foo';`
- **How it works:** pnpm creates a symlink in `node_modules/foo` pointing directly to your `./lib` folder.\
  PNPM +3

2\. The `pnpm link` Command

If you don't want to manually edit your `package.json`, you can use the CLI to create the link from your project root.

PNPM +1

1. **Command:** `pnpm link ./lib`
2. **Verify:** Check your `package.json`; it will now have `"foo": "link:lib"` in the dependencies.\
   PNPM +1

3\. PNPM Workspaces (Best for complex projects)

If you have multiple folders you want to treat as packages, use a pnpm-workspace.yaml file.

YouTube

1. **Create `pnpm-workspace.yaml`** in your root:\
   yaml

<!---->

```
packages:
  - '.'
  - 'lib'
```

Use code with caution.
2\. **Add a `package.json` inside `lib/`** with the name `"foo"`.
3\. **Install it in your main app:**\
bash

```
pnpm add foo --workspace
```

Use code with caution.
4\. **Usage:** `import x from 'foo';`\
PNPM +3

Important Requirements

- **`package.json` in lib:** For any of these to work, the `lib` folder **must** have its own `package.json` with `"name": "foo"` and a `"main"` or `"exports"` field pointing to your JS file.
- **Version Mismatch:** If using workspaces, ensure the version requested in your main project matches the version defined in the `lib` package, or use the `workspace:*` wildcard.\
  PNPM +2

Do you need help setting up the **`package.json`** inside your `lib` folder so pnpm recognizes it correctly?

8 sites

- [link](https://pnpm.io/cli/link#:~:text=When%20you%20use%20pnpm%20link,node%5Fmodules%20of%20the%20linked%20package.)\
  pnpm link\
  Mar 21, 2026 — When you use pnpm link , the linked package is symlinked from the source code. You can modify the source code of the linked packag...\
  PNPM
- [link](https://pnpm.io/package%5Fjson#:~:text=injected%E2%80%8B,the%20development%20directory%20for%20button%20.)\
  package.json - PNPM\
  Nov 13, 2025 — injected​ If this is set to true for a dependency that is a local workspace package, that package will be installed by creating a ...\
  PNPM
- [link](https://pnpm.io/workspaces#:~:text=Referencing%20workspace%20packages%20through%20aliases,supported%20by%20all%20package%20managers.)\
  Workspace | pnpm\
  Mar 29, 2026 — Referencing workspace packages through aliases​ Let's say you have a package in the workspace named foo . Usually, you would refer...\
  PNPM

Show all

can it load all files in lib, without naming foo bar whatever manually

To load all files inside

`lib` dynamically without naming them individually, you can <mark style="border-radius: 4px; padding: 0px 2px;">use the <strong><code dir="ltr" style="line-height: 22px; background-color: var(--XKMDxc); border: 1px solid var(--XKMDxc); border-radius: 4px; padding-block: 2px; padding-inline: 4px;">exports</code> wildcard</strong> in your</mark> `lib/package.json`. This allows you to import any file in that folder using the package name as a prefix.

Stack Overflow +1

1\. Setup Wildcard Exports

Inside your `lib/package.json`, add a wildcard mapping. This tells Node.js and pnpm that any subpath should map to the corresponding file in that directory.

Stack Overflow

json

```
{
  "name": "my-lib",
  "version": "1.0.0",
  "type": "module",
  "exports": {
    "./*": "./*.js"
  }
}
```

Use code with caution.

2\. Link with pnpm

Run the link command in your project root to connect the folder as a package.

PNPM

bash

```
pnpm link ./lib
```

Use code with caution.

3\. Usage

You can now import **any** file from that folder without manually adding it to a configuration. If you have `lib/foo.js` and `lib/bar.js`, you import them like this:

javascript

```
import { something } from 'my-lib/foo';
import { other } from 'my-lib/bar';
```

Use code with caution.

Key Rules for Wildcards

- **Extension Requirements**: Native Node.js ESM requires the full filename or a defined mapping. Using `"./*": "./*.js"` allows you to omit the `.js` in your import statement (e.g., `'my-lib/foo'`).
- **Barrel Files**: If you want to import everything from a single entry point (like `import { foo, bar } from 'my-lib'`), you still need an `index.js` in `lib/` that exports everything from the other files.
- **No "Blind" Global Imports**: For security and performance, Node.js does not allow a "load everything in this folder into the global namespace" feature by default. You must always specify which file you are pulling from.\
  Node.js +2

Would you like a script to automatically generate an **`index.js`** (barrel file) that exports everything in the folder for you?

5 sites

- [link](https://blog.r0b.io/post/esm-nodejs-typescript-with-subpath-exports/#:~:text=type:%20module%20and%20exports%20are,locate%20the%20type%20definitions%20too.)\
  ESM Node.js TypeScript with subpath exports | r0b blog\
  Nov 5, 2022 — type: module and exports are the key parts here. The type field tells Node. js that this module will use ESM, the obvious first st...\
  blog.r0b.io
- [link](https://pnpm.io/cli/link#:~:text=Options%E2%80%8B,cd%20~/projects/foo)\
  pnpm link\
  Mar 21, 2026 — Options​ pnpm link ​ Links package from directory to node\_modules of package from where you're executing this command. For example...\
  PNPM
- [link](https://nodejs.org/api/packages.html)\
  Modules: Packages | Node.js v25.8.2 Documentation\
  \* The resolution of import / import() does not support folders as modules, directory indexes (e.g. './startup/index. js' ) must be...\
  Node.js

Show all

no prefix

To import multiple files from a local directory without any prefix (e.g.,

`import { x } from 'foo'` and `import { y } from 'bar'`), you must register each file or the directory itself as a unique package in your `node_modules`.

PNPM +1

Node.js strictly maps import specifiers to packages or relative paths. To avoid naming each file manually, you have two primary options using **pnpm**.

Divotion +1

Option 1: Link the entire directory (Recommended)

You can treat your `lib` folder as a local package and link it. While this requires a prefix (e.g., `import { x } from 'lib/foo'`), it is the most stable and scalable method.

PNPM

1. **Add a `package.json` to your `lib/` folder**:\
   json

<!---->

```
{
  "name": "lib",
  "version": "1.0.0",
  "exports": {
    "./*": "./*.js"
  }
}
```

Use code with caution.
2\. **Link it in your root directory**:\
bash

```
pnpm link ./lib
```

Use code with caution.
3\. **Usage**: `import { something } from 'lib/foo';`

Option 2: Individual Links (No Prefix)

If you absolutely insist on `import 'foo'` with no `lib/` prefix, you must link each file as its own package. You can automate this with a script so you don't do it manually.

GitHub

1. **Create a tiny package for each file**: Each file `foo.js`, `bar.js` must be in its own folder with a `package.json` or you must manually symlink them into `node_modules`.

2. **Automated Symlink Script**: Run this shell command in your project root to create direct links for every JS file in `lib/` into your `node_modules`.\
   bash

<!---->

```
# This creates a symlink for every file in lib/ directly in node_modules
for f in lib/*.js; do
  filename=$(basename "$f" .js)
  ln -s "../lib/$f" "node_modules/$filename.js"
done
```

Use code with caution.

- **Usage**: `import { x } from 'foo.js';`
- **Warning**: This bypasses `package.json` and pnpm's lockfile, meaning other developers on your team won't have these links unless they run the same script.\
  PNPM +1

Option 3: Use a "Barrel" File

To import everything from a single top-level name without subpaths:

1. **Create `lib/index.js`**:\
   javascript

<!---->

```
export * from './foo.js';
export * from './bar.js';
```

Use code with caution.
2\. **Link as before**: `pnpm link ./lib`
3\. **Usage**: `import { fooFunc, barFunc } from 'lib';`

| Approach           | Prefix Needed?   | Scalability                          |
| ------------------ | ---------------- | ------------------------------------ |
| **Link Directory** | Yes (`lib/file`) | **High** - Auto-detects new files.   |
| **Manual Symlink** | No (`file`)      | **Low** - Hard to maintain/share.    |
| **Barrel File**    | Yes (`lib`)      | **Medium** - Must update `index.js`. |

Would you like a **Node.js script** that automatically updates a "barrel" `index.js` whenever you add new files to the directory?

7 sites

- [link](https://pnpm.io/workspaces#:~:text=pnpm%20has%20built%2Din%20support,than%20a%20local%20workspace%20package.)\
  Workspace | pnpm\
  Mar 29, 2026 — pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic reposito...\
  PNPM
- [link](https://pnpm.io/cli/link#:~:text=Aliases:%20ln,link%20foo%20to%20my%2Dproject)\
  pnpm link\
  Mar 21, 2026 — Aliases: ln. Makes the current local package accessible system-wide, or in another location. pnpm link pnpm link. Options​ pnpm li...\
  PNPM
- [link](https://github.com/pnpm/pnpm/issues/825#:~:text=package.json%20%23871-,zkochan%20commented,they%20are%20specified%20as%20dependencies%29)\
  making linking local packages great again · Issue #825 · pnpm ...\
  Jun 23, 2017 — zkochan commented. zkochan. on Dec 22, 2017. Member. @paulpflug, recently a new feature was added to pnpm@next - concurrent instal...\
  GitHub

Show all

can it load all files without prefix in lib without manually naming them

To import all files from

`lib` without a prefix (e.g., `import { x } from 'foo'`) and without manually naming each file, <mark style="border-radius: 4px; padding: 0px 2px;">you can use a <strong>post-install symlink script</strong></mark>.

Node.js strictly requires every "bare" import (one without a `/` or `./`) to correspond to a folder in `node_modules`. To automate this for every file in your folder, follow these steps:

Node.js +2

1\. The Automation Script

Create a file named `setup-lib.js` in your project root. This script will automatically look at your `lib` folder and create a "fake" package in `node_modules` for every file it finds.

javascript

```
import fs from 'node:fs';
import path from 'node:path';

const libDir = path.resolve('lib');
const nodeModulesDir = path.resolve('node_modules');

// Get all .js files in lib
const files = fs.readdirSync(libDir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const fileName = path.parse(file).name; // 'foo' from 'foo.js'
  const targetDir = path.join(nodeModulesDir, fileName);

  // 1. Create a folder in node_modules for the "package"
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  // 2. Create a package.json so Node sees it as a module
  const pkgJson = {
    name: fileName,
    version: "1.0.0",
    type: "module",
    main: `../../lib/${file}` // Point back to your actual file
  };

  fs.writeFileSync(
    path.join(targetDir, 'package.json'),
    JSON.stringify(pkgJson, null, 2)
  );
});

console.log(`Linked ${files.length} files from lib/ as top-level modules.`);
```

Use code with caution.

2\. Automate with pnpm

Add this script to your `package.json` under the `scripts` section. Use the `postinstall` hook so it runs every time you run `pnpm install`.

Medium

json

```
{
  "scripts": {
    "postinstall": "node setup-lib.js"
  }
}
```

Use code with caution.

3\. Usage

Run `pnpm install` once to trigger the script. Now, whenever you add a file like `lib/helper.js`, simply re-run `pnpm install` (or the script directly) and you can import it immediately:

javascript

```
import { myFunc } from 'foo';    // from lib/foo.js
import { util } from 'helper';   // from lib/helper.js
```

Use code with caution.

Why this is the only way for "No Prefix"

- **Node.js Resolution**: Node only looks for bare names in `node_modules`.
- **Wildcard Limits**: Wildcards in `package.json` "exports" **always** require the package name as a prefix (e.g., `lib/foo`).
- **Dynamic Links**: This script effectively "fakes" a separate pnpm installation for every single file in your folder automatically.\
  Stanley Ulili +2

**Note:** Since these links are generated in your local `node_modules`, ensure you do **not** ignore `setup-lib.js` so other developers can generate the same environment.

Would you like to know how to make **VS Code** recognize these automatic imports for auto-complete?

8 sites

- [link](https://nodejs.org/api/modules.html#:~:text=In%20order%20to%20make%20modules,packages%20themselves%20can%20be%20anywhere.)\
  CommonJS modules | Node.js v25.8.2 Documentation\
  In order to make modules available to the Node. js REPL, it might be useful to also add the /usr/lib/node\_modules folder to the $N...\
  Node.js
- [link](https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file#:~:text=const%20moduleName%20=%20require%28%22.,Conclusion)\
  Node.js Modules: Import and use Functions from Another File\
  Mar 26, 2020 — const moduleName = require("./filename. js"); You don't have to add the ". js" extension, Node. js can still load your local modul...\
  Stanley Ulili
- [link](https://pnpm.io/symlinked-node-modules-structure#:~:text=info,json%22%20.)\
  Symlinked \`node\_modules\` structure - PNPM\
  Mar 29, 2026 — info. This article only describes how pnpm's node\_modules are structured when there are no packages with peer dependencies. For th...\
  PNPM

Show all

\---

i use pnpm monorepo. i have a folder called lib. i want to import lib/foo lib/bar lib/whatever anywhere in any repo without manually writing path to file.

To import subfolders from a

`lib` directory in a **pnpm monorepo** without manual relative paths, you can use **pnpm workspace wildcards** to treat each subfolder as an independent, auto-linked package.

1\. Configure the Workspace

Update your `pnpm-workspace.yaml` file at the root of your monorepo to include all subdirectories of `lib` as part of the workspace.

PNPM +1

yaml

```
packages:
  - 'apps/*'
  - 'packages/*'
  - 'lib/*'  # This tells pnpm that every folder in /lib is a package
```

Use code with caution.

2\. Add package.json to each Lib

Every subfolder (e.g., `lib/foo`, `lib/bar`) must have its own `package.json`. Use a consistent naming convention like `@my-repo/foo`.

Reddit +1

- **lib/foo/package.json**:\
  json

<!---->

```
{
  "name": "@my-repo/foo",
  "version": "1.0.0",
  "main": "./index.ts"
}
```

Use code with caution.

3\. Link and Import

Instead of using relative paths like `../../lib/foo`, you can now "install" these local libraries into any other app or package in your repo using the `workspace:*` protocol.

Reddit +1

1. **Add the dependency**:\
   Run this from the package where you want to use the lib:\
   `pnpm add @my-repo/foo --workspace`

2. **Import normally**:\
   Now you can import from anywhere in the monorepo using the clean alias:\
   typescript

<!---->

```
import { something } from '@my-repo/foo';
```

Use code with caution.

4\. Enable TypeScript Support (Optional)

To ensure your IDE (like VS Code) recognizes these imports without needing a build step, define **path aliases** in your root `tsconfig.json`.

GitHub +1

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@my-repo/*": ["lib/*"]
    }
  }
}
```

Use code with caution.

Would you like help setting up a **shared TypeScript configuration** that all these libraries can inherit from?

10 sites

- [link](https://pnpm.io/pnpm-workspace%5Fyaml#:~:text=package.json,%2Ddom:%20%5E17.10.0)\
  pnpm-workspace.yaml\
  Mar 29, 2026 — package.json. Settings (pnpm-workspace.yaml) Auth & Registry Settings (.npmrc) pnpm-workspace.yaml. .pnpmfile.cjs. Configuration. ...\
  PNPM
- [link](https://github.com/vercel/turborepo/discussions/620#:~:text=%22%5D%20%7D%20%7D%20%7D-,Next.,/users'%20inside%20the%20apps.)\
  TypeScript "paths" in monorepo #620 - vercel turborepo - GitHub\
  Aug 19, 2025 — Next. js is smart enough to pick up the paths automatically from the tsconfig. json file, just remember to restart the Next. js se...\
  GitHub
- [link](https://pnpm.io/workspaces#:~:text=Referencing%20workspace%20packages%20through%20aliases,foo@1.0.0%22%20.)\
  Workspace | pnpm\
  Mar 29, 2026 — Referencing workspace packages through aliases​ Let's say you have a package in the workspace named foo . Usually, you would refer...\
  PNPM

Show all

use wildcard to load all files in lib. lib contains files, not folders. use link to install them.

In a

**pnpm monorepo**, pnpm's workspace engine is designed to manage **folders** containing a `package.json` as packages. It does not natively support treating individual **files** as separate workspace packages using wildcards in `pnpm-workspace.yaml`.

PNPM +1

However, you can achieve your goal of importing `lib/foo.ts` or `lib/bar.ts` from anywhere without manual relative paths by using **TypeScript Path Mapping** or a **Single Entry Package**.

Option 1: TypeScript Path Mapping (Recommended)

This is the standard way to alias a directory of files so they are available globally in your monorepo without relative paths.

1. **Update your root `tsconfig.json`**:\
   Define a wildcard path that maps to your `lib` folder.\
   json

<!---->

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@lib/*": ["lib/*"]
    }
  }
}
```

Use code with caution.
2\. **Usage**:\
Now, in any file in any app (e.g., `apps/web/src/index.ts`), you can import directly:\
typescript

```
import { something } from '@lib/foo'; // Resolves to lib/foo.ts
import { other } from '@lib/bar';     // Resolves to lib/bar.ts
```

Use code with caution.

Option 2: The "Single Lib" Workspace Package

If you want to use the `link` behavior specifically (pnpm's `workspace:*` protocol), treat the entire `lib` folder as one package and use **Subpath Exports**.

1. **Create `lib/package.json`**:\
   json

<!---->

```
{
  "name": "@my-repo/lib",
  "version": "1.0.0",
  "exports": {
    "./*": "./*.ts"
  }
}
```

Use code with caution.
2\. **Link it**:\
In your other apps, add the dependency:\
`pnpm add @my-repo/lib --workspace`
3\. **Usage**:\
typescript

```
import { something } from '@my-repo/lib/foo';
```

Use code with caution.\
PNPM +1

Summary of Wildcards in `pnpm-workspace.yaml`

The wildcard syntax in `pnpm-workspace.yaml` (e.g., `- 'lib/*'`) only works if each item matched is a **directory** containing a `package.json`. It will ignore standalone `.ts` or `.js` files.

Adam Coster +1

Would you like to see how to automate the generation of **package.json** files for each file if you strictly require them to be individual packages?

6 sites

- [link](https://pnpm.io/workspaces#:~:text=pnpm%20has%20built%2Din%20support,tip)\
  Workspace | pnpm\
  Mar 29, 2026 — pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic reposito...\
  PNPM
- [link](https://adamcoster.com/blog/pnpm-config#:~:text=Basic%20setup%20for%20monorepos,a%20much%20slicker%20dev%20experience.)\
  Configure pnpm for the best possible developer experience\
  May 26, 2023 — Basic setup for monorepos. There is only one thing you need to do to enable pnpm for your monorepo: add a pnpm-workspace.yaml file...\
  Adam Coster
- [link](https://pnpm.io/next/pnpm-workspace%5Fyaml#:~:text=yaml-,pnpm%2Dworkspace.,pnpm%2Dworkspace.yaml)\
  pnpm-workspace.yaml\
  Mar 21, 2026 — pnpm-workspace. yaml defines the root of the workspace and enables you to include / exclude directories from the workspace. By def...\
  PNPM

Show all

use wildcard export in lib package json. use pnpm link.

To import individual files from a

`lib` folder as separate entry points, you can use the **`exports`** wildcard in your `lib/package.json` and then use `pnpm link` to make it available to your other packages.

GitHub +1

1\. Configure `lib/package.json`

Add the `exports` field with a wildcard pattern. This tells Node.js and pnpm that any file in the `lib` folder can be imported directly as a subpath.

GitHub +2

json

```
{
  "name": "@my-repo/lib",
  "version": "1.0.0",
  "exports": {
    "./*": "./*.ts"
  }
}
```

Use code with caution.

\_Note: If your files are already compiled to JS, change the extension to `./_.js`.\*

2\. Link the Library

You have two ways to "install" this link so it's available everywhere.

PNPM +1

- **Option A: Global Link (Manual)**\
  Use this if you want the link to persist across your entire machine without modifying every `package.json`.
  1. Go to the lib folder: `cd lib`
  2. Register it globally: `pnpm link --global`
  3. Go to your app: `cd ../apps/my-app`
  4. Connect it: `pnpm link --global @my-repo/lib`
- **Option B: Relative Link (Recommended for Monorepos)**\
  This creates a local symlink directly between folders.
  1. From your app folder (e.g., `apps/my-app`):
  2. Run: `pnpm link ../../lib`\
     PNPM +4

3\. Usage

Now you can import any file from the `lib` folder using the clean `@my-repo/lib/filename` syntax without relative paths.

GitHub

typescript

```
// If you have lib/foo.ts and lib/bar.ts
import { fooThing } from '@my-repo/lib/foo';
import { barThing } from '@my-repo/lib/bar';
```

Use code with caution.

TypeScript Support

To ensure your IDE provides auto-completion for these wildcard exports, ensure your **`tsconfig.json`** has `moduleResolution` set to `bundler` or `nodenext`.

Stack Overflow

json

```
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "paths": {
      "@my-repo/lib/*": ["./lib/*"]
    }
  }
}
```

Use code with caution.

Do you need help configuring a **build script** to automatically compile these files when they are changed?

8 sites

- [link](https://github.com/pnpm/pnpm/issues/2398#:~:text=For%20example%2C%20imagine%20a%20package,%3E%20lib/util%20package.json)\
  proposal: backporting package.json exports field to older node ...\
  Mar 5, 2020 — For example, imagine a package like this: my-package/ lib/ index.js util/ tool.js src/ index.js util/ tool.js package.json. and a ...\
  GitHub
- [link](https://pnpm.io/cli/link#:~:text=~/projects/foo-,pnpm%20install%20%23%20install%20dependencies%20of%20foo,but%20pnpm%20for%20your%20project.)\
  pnpm link\
  Mar 21, 2026 — pnpm install # install dependencies of foo. cd ~/projects/my-project. pnpm link ~/projects/foo # link foo to my-project. Add a bin...\
  PNPM
- [link](https://stackoverflow.com/questions/78342308/vscode-ignore-exports-on-package-json-when-using-src-folder-inside-of-my-packa#:~:text=1%20Answer,add%20additional%20context%20in%20comments.)\
  VSCODE ignore exports on package.json when using "src ...\
  Apr 17, 2024 — 1 Answer. Sorted by: 1. In the end i had to change my tsconfig.json inside of my apps/my-app and add the following "compilerOption...\
  Stack Overflow

Show all

\---

do i need pnpm workspace. or i just create a monorepo with things sitting there without using any monorepo features.

While you can technically just put projects in subfolders,

<mark style="border-radius: 4px; padding: 0px 2px;">you <strong>need pnpm workspaces</strong> if your projects depend on each other or if you want to manage them as a single unit</mark>. Without workspaces, you lose the "wiring" that makes a monorepo functional.

PNPM +2

When you definitely need pnpm workspaces

- **Internal Dependencies**: If `App A` needs to import code from `Lib B` in the same repo, workspaces automatically link them. Without this, you would have to manually symlink folders or publish `Lib B` to a registry every time you change it.
- **Shared Dependencies**: Workspaces allow you to use a single `pnpm-lock.yaml` at the root, ensuring all projects use the same versions of common libraries like React or Lodash, which saves disk space and prevents version conflicts.
- **Running Bulk Commands**: You can run one command (e.g., `pnpm recursive run build`) to build every project in the repo at once, rather than navigating into each folder manually.
- **Developer Experience**: Workspaces enable "live" changes; if you edit a shared utility library, your web app sees the update immediately without a re-build or re-install.\
  PNPM +6

Why a "folders-only" approach fails

If you just have things "sitting there" without a `pnpm-workspace.yaml` file:

- **Isolation**: Each project acts as a completely separate entity. You cannot easily share code between them.
- **Bloat**: You will likely end up with duplicate `node_modules` in every subfolder, wasting gigabytes of space.
- **Maintenance**: Updating a shared dependency requires you to go into every single `package.json` manually.\
  PNPM +4

How to start (Minimal setup)

You don't need "fancy" features to start. A basic pnpm workspace only requires one file:

1. Create a `pnpm-workspace.yaml` in your root:\
   yaml

<!---->

```
packages:
  - 'apps/*'
  - 'packages/*'
```

Use code with caution.
2\. Now, to use a local package called `utils` in your `web-app`, just add it to `web-app/package.json`:\
json

```
"dependencies": {
  "utils": "workspace:*"
}
```

Use code with caution.

Are you planning to **share code** between these folders, or are they completely independent projects that just happen to be in the same Git repo?

14 sites

- [link](https://nesbitt.io/2026/01/18/workspaces-and-monorepos-in-package-managers.html#:~:text=Workspaces%20solve%20%E2%80%9Cthese%20packages%20are,by%20handling%20the%20dependency%20wiring.)\
  Workspaces and Monorepos in Package Managers\
  Jan 18, 2026 — Workspaces solve “these packages are developed together.” Monorepos solve “all our code lives in one place.” They overlap but aren...\
  nesbitt.io
- [link](https://pnpm.io/workspaces#:~:text=pnpm%20has%20built%2Din%20support,Monorepo%20Dependency%20Management%20with%20Bit.)\
  Workspace | pnpm\
  Mar 29, 2026 — Workspace. pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolith...\
  PNPM
- [link](https://www.arsnl.dev/blog/why-do-i-love-pnpm)\
  Why Do I Love pnpm? - Blog - Mark Arseneault 🧑‍💻 Software engineer\
  May 10, 2023 — Efficient storage and installation \* Symlinking strategy for node\_modules: pnpm creates a global content-addressable store of pack...\
  www.arsnl.dev

Show all

what about just having one node modules at top

While having a single

`node_modules` at the top level might seem simpler, it actually creates more problems than it solves if you don't use [pnpm workspaces](https://pnpm.io/workspaces).

Why the "one node\_modules at the top" approach is risky

Without a workspace configuration, pnpm treats the root and each subdirectory as entirely independent projects. If you try to force everything into a single root `node_modules`:

- **Phantom Dependencies**: Sub-projects might "accidentally" work because they find a package in the parent `node_modules`. However, since that dependency isn't in the sub-project's own `package.json`, it will likely **break during deployment** or in CI/CD environments.
- **No Automatic Linking**: If `App A` needs to use `Lib B` (both inside your repo), pnpm won't know they are related. It will try to download `Lib B` from the public npm registry instead of using your local folder.
- **Manual Upkeep**: You would have to manually ensure that every sub-project’s `package.json` stays in sync with what you've installed at the root.\
  GitHub +4

How pnpm workspaces give you the "one node\_modules" benefit safely

If your goal is to avoid duplicate files and keep everything centralized, pnpm workspaces actually does this better by default:

- **Shared Lockfile**: It creates a single `pnpm-lock.yaml` at the root, ensuring all sub-projects use the exact same versions of shared dependencies.
- **Symlinked node\_modules**: pnpm uses [symbolic links](https://pnpm.io/symlinked-node-modules-structure) to point all sub-project dependencies back to a central "virtual store" (`.pnpm` folder). You get the performance and space savings of a single folder without the risk of broken builds.
- **Isolation**: Even though files are shared on disk, each project only "sees" the specific dependencies it has declared in its own `package.json`. This prevents the "it works on my machine" bugs common in flat `node_modules` structures.\
  PNPM +4

Recommendation

If these projects are truly independent, keep them in separate repos. If they are related or share code, **use the pnpm workspace**. You only need to add a single pnpm-workspace.yaml file to the root—it takes 30 seconds and saves hours of debugging later.

Do you have a specific **deployment platform** (like Vercel, Netlify, or Docker) that is making you lean toward a single root folder?

10 sites

- [link](https://medium.com/pnpm/pnpm-vs-yarn-monorepo-node-modules-6c025d50b9bd#:~:text=Both%20pnpm%20%28as%20of%20v2,every%20package%20into%20their%20node%5Fmodules%20.)\
  pnpm vs Yarn: monorepo node\_modules | by Zoltan Kochan - Medium\
  Nov 4, 2018 — Both pnpm (as of v2. 17) and Yarn (as of v1. 12) support fast, concurrent installations in monorepos. However, there is a big diff...\
  Medium
- [link](https://edrickleong.hashnode.dev/why-you-shouldnt-use-npm-workspaces#:~:text=Running%20pnpm%20install%20in%20the,other%20packages%20in%20the%20workspace.)\
  Why you shouldn't use npm workspaces - Edrick Leong's blog\
  Oct 26, 2024 — Running pnpm install in the root of your project will install the dependencies of all the workspaces. The difference from npm work...\
  Hashnode
- [link](https://github.com/orgs/pnpm/discussions/4735#:~:text=If%20this%20is%20enabled%2C%20locally,using%20the%20workspace:%20range%20protocol.\&text=In%20other%20words%2C%20if%20the,Give%20feedback.)\
  Is there an option to prevent pnpm from using a \`pnpm-workspace. ...\
  May 26, 2025 — If this is enabled, locally available packages are linked to node\_modules instead of being downloaded from the registry. This is v...\
  GitHub

Show all