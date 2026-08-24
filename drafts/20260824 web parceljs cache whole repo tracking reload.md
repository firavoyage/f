# how to let parceljs track the whole repo

To let **[Parcel.js](https://parceljs.org/) track your entire repository** for changes, you need to configure its file watcher to monitor the project root instead of just the entry point's immediate dependencies. By default, Parcel only watches files that are explicitly imported via your dependency graph. [link](https://parceljs.org/)

### The Solution: Use a Glob Entry Point

The most reliable way to force Parcel to watch the entire repository is by pointing it to a **top-level directory glob** rather than a single `index.html` file.

Run Parcel from your repository root using a wildcard pattern:

bash

```
npx parcel "src/**/*" --watch
```

Use code with caution.

### Optimize File Tracking via Configuration

If you want the watcher to handle the entire repo efficiently without crashing or burning CPU, you need to configure how it handles file watching. Parcel uses `@parcel/watcher` under the hood to recursively track directories. [link](https://www.npmjs.com/package/@parcel/watcher)

#### 1. Configure the `.parcelrc` file

Create or update the `.parcelrc` file in your repository root to explicitly tell Parcel to extend its default behavior:

json

```
{
  "extends": "@parcel/config-default"
}
```

Use code with caution.

#### 2. Exclude Large Unnecessary Folders

If you track the whole repo, Parcel might try to watch massive folders like `node_modules`, `.git`, or build outputs, which will drastically slow it down or throw a `watch ENOSPC` error.

To prevent this, ensure your `.gitignore` file is properly configured in the root directory. **Parcel automatically respects your `.gitignore` settings** and will exclude those paths from its file watcher algorithm.

An ideal root `.gitignore` should include:

text

```
node_modules/
.parcel-cache/
dist/
.git/
```

Use code with caution.

### Fix "Too Many Open Files" Error

When forcing a bundler to track an entire repository, you might hit operating system limits on file watchers. If you encounter an error, increase your system's watch limit:

- **Linux**: Run this command to increase `inotify` limits:\
  bash

<!---->

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Use code with caution.

- **macOS**: Watch limits are dynamically managed, but ensuring `@parcel/watcher` is compiled natively by running `npm rebuild` usually resolves tracking stutters.

If you are experiencing a specific issue with files not updating, could you let me know:

- What **operating system** you are developing on?
- Are you using a **Monorepo setup** (like Turborepo or Lerna)?
- What **error message** (if any) is displaying in your terminal?

AI can make mistakes, so double-check responses

3 sites

- [link](https://parceljs.org/)\
  Parcel\
  Minification. Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box! Just run parcel build index. html , and...\
  Parcel.js
- [link](https://www.npmjs.com/package/@parcel/watcher)\
  @parcel/watcher - npm\
  Jul 20, 2026 — @parcel/watcher supports subscribing to realtime notifications of changes in a directory. It works recursively, so changes in sub-\
  NPM
- [link](https://www.reddit.com/r/whereparcel/comments/1t97r4q/free%5Ftools%5Ffor%5Fsmall%5Fsellers%5Ftrack%5Fall%5Fyour/)\
  r/whereparcel on Reddit: Free tools for small sellers: track all ...\
  May 10, 2026 — Go to whereparcel.com/playground. Try tracking a package — no signup needed. Like it? Create a free account. Set up webhooks with ...\
  Reddit·r/whereparcel

# how to let parceljs track the whole repo on ubuntu

To let ParcelJS track or watch files across your entire repository on Ubuntu, you need to adjust your project root configuration and increase Ubuntu's system file watch limits.

By default, Parcel only watches files within its project root and can run out of file handles on Linux if your repository is large.

### 1. Set the Project Root

Parcel determines what to watch based on its root directory. Force Parcel to look at the entire repository by pointing it to your base folder.

- **Specify the entry point** from the repository root:\
  bash

<!---->

```
parcel watch src/index.html
```

Use code with caution.

- **Avoid running Parcel** inside a deeply nested subdirectory if you want it to track sibling folders.

### 2. Increase Ubuntu File Watch Limits

Linux limits how many files a single user can monitor via `inotify`. Large repositories easily exceed this default limit, causing Parcel to stop tracking changes.

Run these commands in your Ubuntu terminal to increase the limits permanently:

- **Append new limits** to the system configuration:\
  bash

<!---->

```
echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf
echo "fs.inotify.max_user_instances=512" | sudo tee -a /etc/sysctl.conf
```

Use code with caution.

- **Apply the changes** immediately without rebooting:\
  bash

<!---->

```
sudo sysctl -p
```

Use code with caution.

### 3. Configure Symlinks (If Applicable)

If your repository uses monorepos, `npm link`, or symlinks to connect different folders, Parcel will not follow them by default.

- Create a `.parcelrc` file in your repository root.

- Add the following configuration to enable symlink tracking:\
  json

<!---->

```
{
  "extends": "@parcel/config-default",
  "resolvers": ["...", "@parcel/resolver-glob"]
}
```

Use code with caution.

### 4. Clear the Cache

If Parcel is still failing to track changes across the repo, a stale cache is usually the culprit.

- **Delete the cache folder** before restarting your watch script:\
  bash

<!---->

```
rm -rf .parcel-cache
```

Use code with caution.

To help optimize this setup, let me know:

- Are you working within a **monorepo** structure?
- What **version of Parcel** are you currently running?
- Are you seeing a specific **error message** in your Ubuntu terminal?

I can provide tailored configuration scripts based on your specific setup.

1 site

- [link](https://parceljs.org/features/development/)\
  Development\
  Caching Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have change...\
  \
  \
  Parcel.js

## what does parcel watch mean, i use parcel serve

`parcel serve` actually runs `parcel watch` automatically under the hood, but it also starts a local development server.

While `parcel watch` only rebuilds files when they change, `parcel serve` does that _and_ hosts your site locally with Live Reloading.

### Key Differences

- **`parcel serve`**:
  - Starts a local web server (usually at `http://localhost:1234`).
  - Rebuilds files automatically when you save changes.
  - Automatically refreshes your browser tab (Live Reload).
  - Used for standard web application development.
- **`parcel watch`**:
  - Does **not** start a web server.
  - Rebuilds files automatically when you save changes.
  - Outputs the bundled files directly to your disk (usually the `dist/` folder).
  - Used for building libraries, backend code, or extension development.

### How This Affects Your Ubuntu Setup

Because `parcel serve` includes all the file-watching features of `parcel watch`, the Ubuntu configuration steps provided earlier remain exactly the same. You still need to increase your Ubuntu `inotify` limits so `parcel serve` can successfully track your whole repository without running out of file handles.

If you are using `parcel serve`, ensure you are launching it from your repository root:

bash

```
parcel serve src/index.html
```

Use code with caution.

To help debug why your server isn't tracking changes, let me know:

- Does the browser **fail to refresh**, or does the terminal **fail to log** the rebuild?
- Are the files you want to track **imported** somewhere in your main JavaScript/HTML entry files?
- What **framework** (React, Vue, vanilla JS) are you using?

I can help you map out your project structure so Parcel detects every file.

## i use parcel serve 'source/web/index.html', it doesnt track necessay files, clear cache works but it's still not automatic

The reason `parcel serve` is not tracking files automatically is that <mark><strong>Parcel only watches files that are explicitly imported</strong><span> </span>into your dependency graph</mark>, starting from your entry point (`source/web/index.html`).

If a file is in your repository but not linked via an HTML, JS, or CSS import, Parcel ignores it \[1]. If clearing the cache fixes it temporarily, it means Parcel is generating static bundles and missing new files because the dependency graph isn't updating dynamically \[1].

### 1. Fix the Dependency Graph (The Root Cause)

Parcel is a bundler, not a generic file watcher. To force Parcel to track files automatically, you must make them part of the build:

- **For Assets/Static Files:** Use the `@parcel/transformer-inline-string` or dependency wildcards.
- **For JavaScript/TypeScript:** Ensure every module is linked using `import './path/to/file'` inside your main script.
- **For CSS/SCSS:** Ensure files are imported via `@import` rules inside your main stylesheet.

### 2. Force Track Unlinked Files with a Glob Plugin

If you have static files (like JSON, configuration files, or images) that aren't imported but _must_ be tracked and copied over on every change, use the static files plugin \[1].

- **Install the static transfer plugin:**\
  bash

<!---->

```
npm install -D parcel-reporter-static-files-copy
```

Use code with caution.

- **Create a `.parcelrc` file** in your root directory to activate it:\
  json

<!---->

```
{
  "extends": "@parcel/config-default",
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

Use code with caution.

- **Configure the target files** in your `package.json`:\
  json

<!---->

```
"staticFiles": {
  "staticPath": "source/assets",
  "watcherGlob": "**"
}
```

Use code with caution.

### 3. Disable Safe Write in your IDE

Many modern IDEs (like VS Code or WebStorm) use a feature called "Safe Write" or "Atomic Save". Instead of overwriting your file, they create a temporary file and swap it. This breaks Ubuntu's `inotify` event system, causing `parcel serve` to miss the change until a cache clear forces a re-index.

- **In VS Code:** Open Settings, search for `Files: Use Atomic Writes`, and **uncheck/disable** it.
- **In JetBrains/WebStorm:** Go to Settings -> Appearance & Behavior -> System Settings -> uncheck **"Safe write"**.

### 4. Switch to the No-Cache Flag for Debugging

If you are modifying configuration files or environment variables that Parcel fails to watch dynamically, bypass the cache entirely during your development session:

bash

```
parcel serve source/web/index.html --no-cache
```

Use code with caution.

_Note: This will slightly slow down rebuild times, but it completely removes the need to manually delete the `.parcel-cache` directory._

To help narrow down the exact issue, let me know:

- What **file types** (e.g., `.json`, `.js`, `.css`, images) are failing to track automatically?
- Which **code editor** (VS Code, Vim, Cursor) are you using to make changes?
- Are these untracked files located **outside** of the `source/web/` directory?

I can provide the exact import syntax or configuration block needed to wire them up.

## does --no-cache flag exist, what does it do

<mark><strong><span>Yes, the<span> </span></span><code dir="ltr">--no-cache</code><span> </span>flag absolutely exists</strong><span> </span>in Parcel</mark>. [link](https://parceljs.org/features/cli/)

It is an official Command Line Interface (CLI) option built directly into the tool. You can attach it to your start command like this: [link](https://parceljs.org/features/cli/)

bash

```
parcel serve source/web/index.html --no-cache
```

Use code with caution.

### What It Does

The `--no-cache` flag **disables reading from Parcel's filesystem cache**. [link](https://parceljs.org/features/cli/)

When you use it:

- **Bypasses Stale Files:** Parcel will refuse to reuse pre-compiled versions of your files from previous runs. It treats every startup like a brand-new project build. [link](https://github.com/parcel-bundler/parcel/discussions/4916)
- **Rebuilds Completely:** Every asset, script, and style sheet is re-analyzed and re-bundled from scratch. [link](https://www.cloudbees.com/blog/docker-build-without-cache)
- **Fixes Tracking Glitches:** It forces Parcel to re-scan your source folder for new or relocated dependencies that a bugged cache might be hiding or ignoring. [link](https://stackoverflow.com/questions/72062090/parcel-always-caches-no-matter)

### Important Nuances to Know

- **The `.parcel-cache` folder will still appear:** A common point of confusion is that running with `--no-cache` does not stop the `.parcel-cache` folder from being created. Parcel still uses that folder internally to pass data back and forth between its worker processes while processing your code, but it won't _read_ from it to skip build steps on the next run. [link](https://github.com/parcel-bundler/parcel/discussions/4916)
- **Build times will slow down:** Because Parcel has to rebuild every single asset completely from scratch each time you boot up the server, your initial compilation time will be longer. [link](https://parceljs.org/features/development/)

Using `--no-cache` is an excellent diagnostic tool to isolate whether your tracking issues are caused by broken system configurations (like Ubuntu file limits) or just an aggressive, corrupted cache file. [link](https://stackoverflow.com/questions/72062090/parcel-always-caches-no-matter)

If you plan on running this frequently, I can show you how to map it to an **npm script short-cut** in your `package.json` file. Would you like to set that up? [link](https://github.com/parcel-bundler/parcel/issues/9952)

- [link](https://stackoverflow.com/questions/72062090/parcel-always-caches-no-matter)\
  Stack Overflow\
  parcel always caches no matter\
  Apr 29, 2022 — To disable Parcel's aggressive caching, you can use the \`--no-cache\` flag. However, this only disables reading from the cache. A \`
- [link](https://github.com/parcel-bundler/parcel/discussions/4916)\
  GitHub\
  No effect with --no-cache #4916 - GitHub\
  Jul 20, 2020 — You must be logged in to vote. All reactions. Answered by DeMoorJasper on Jul 20, 2020. --no-cache just means we don't reuse items...
- [link](https://parceljs.org/features/cli/)\
  Parcel.js\
  CLI - Parcel\
  \--no-source-maps, Disables sourcemaps, Overrides the sourceMap option in package.json targets . --config , Specify which Parcel co...

Show all

## will no-cache work as expected

<mark><strong><span>No,<span> </span></span><code dir="ltr">--no-cache</code><span> </span>alone will likely not work as expected</strong><span> </span>for your specific tracking issue</mark>. [link](https://stackoverflow.com/questions/72062090/parcel-always-caches-no-matter)

While it stops Parcel from _reading_ the stale cache when you first launch the server, **it does not change how Parcel’s active file watcher behaves** while the server is running. If Parcel's watcher is missing changes to your files in real time, adding `--no-cache` will not force it to notice them. [link](https://github.com/parcel-bundler/parcel/discussions/4916)

Understanding how `--no-cache` reacts and implementing alternative fixes will resolve the automated file tracking issues.

### Why `--no-cache` Will Fail Your Expectations

- **It is a Startup Option, Not a Watcher Option:** `--no-cache` only ensures a completely clean slate when you hit Enter on `parcel serve`. Once the server is running, the underlying watch mechanism is identical to running without the flag. [link](https://parceljs.org/features/development/)
- **It Disables Reading, Not Writing:** Parcel will still write data to the `.parcel-cache` directory to share information between its CPU workers. It simply avoids reusing that data on a fresh command boot. [link](https://github.com/parcel-bundler/parcel/discussions/4916)

### The Real Fixes for Automatic Tracking on Ubuntu

If `parcel serve` refuses to automatically update when files change, the issue stems from Ubuntu's system file watchers or your project structure. Implement these fixes to automate tracking:

#### 1. Force a Hardware-Level Watcher (Environment Variable)

Ubuntu occasionally misses standard node filesystem events if files are updated rapidly or stored in specific directory paths. You can force Parcel to use a more aggressive polling method by appending an environment variable before your serve command:

bash

```
CHOKIDAR_USEPOLLING=1 parcel serve source/web/index.html
```

Use code with caution.

_Note: This instructs the underlying file watcher ([Chokidar](https://github.com/paulmillr/chokidar)) to manually scan files for changes rather than waiting for Ubuntu to report them._

#### 2. Explicitly Map Your Source Directories

If your un-tracked files sit outside or parallel to `source/web/index.html`, Parcel may not proactively monitor those folders. Force Parcel to look across broader scopes by pairing it with a specific root structure via your `package.json`:

json

```
"scripts": {
  "start": "parcel serve source/web/index.html --watch-dir ./source"
}
```

Use code with caution.

#### 3. Disable Browser Cache Glitches

Sometimes, Parcel **is** automatically tracking and rebuilding your files, but your browser is aggressively caching the old assets. [link](https://stackoverflow.com/questions/72062090/parcel-always-caches-no-matter)

- Open your browser's Developer Tools (`F12`).
- Go to the **Network** tab.
- Check the **Disable Cache** checkbox. Keep this tab open while developing.

To pinpoint exactly where the automation breaks, let me know:

- When you edit a file, does the **terminal** log a new build line, or does it stay completely silent?
- Are you running this native on Ubuntu, or inside **Docker / WSL / a virtual machine**?

I can tailor a specific environment configuration based on your runtime environment.

- [link](https://stackoverflow.com/questions/72062090/parcel-always-caches-no-matter)\
  Stack Overflow\
  parcel always caches no matter - Stack Overflow\
  Apr 29, 2022 — Comments. ... It seems that although --no-cache technically does disable Parcel's aggressive caching, in practice it requires a fe...
- [link](https://github.com/parcel-bundler/parcel/discussions/4916)\
  GitHub\
  No effect with --no-cache #4916 - GitHub\
  Jul 20, 2020 — You must be logged in to vote. All reactions. Answered by DeMoorJasper on Jul 20, 2020. --no-cache just means we don't reuse items...
- [link](https://parceljs.org/features/development/)\
  Parcel.js\
  Development - Parcel\
  Caching. ... Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have c...

Show all

## it does track some deps. not all deps. web/... will be tracked, source (i have base url in tsconfig) will not

**Parcel does not inherently track files referenced through `tsconfig.json` `baseUrl` configurations out of the box**. [link](https://parceljs.org/languages/typescript/)

While TypeScript understands bare imports relative to your `baseUrl` (e.g., `import 'components/Button'`), Parcel treats them as node modules. When Parcel can't find them in `node_modules`, the dependency link breaks, causing the file watcher to ignore everything under your `source/` folder entirely. [link](https://community.sonarsource.com/t/typescript-baseurl-and-relative-paths-configuration-issue-dependencies-should-be-explicit-typescript-s4328/19135)

To fix this and force Parcel to resolve and automatically track your `baseUrl` files, implement one of the following methods.

### Fix 1: Use Parcel's Built-In Native Aliases (Recommended)

Instead of forcing Parcel to read your `tsconfig.json` configurations, map your `source` directory using native [Parcel Dependency Resolution](https://parceljs.org/features/dependency-resolution/). This is the most reliable way to maintain automatic tracking on Ubuntu. [link](https://parceljs.org/features/dependency-resolution/)

1. **Add an alias to your `package.json`**:\
   json

<!---->

```
{
  "alias": {
    "source": "./source"
  }
}
```

Use code with caution.
2\. **Update your code imports** to utilize a tilde `~` or the explicit alias prefix:\
typescript

```
// Change from this:
import { myFunc } from 'source/utils/helper';

// To this:
import { myFunc } from '~/utils/helper';
// OR using the explicit alias:
import { myFunc } from 'source/utils/helper';
```

Use code with caution.\
[link](https://parceljs.org/languages/typescript/)

### Fix 2: Install a Custom TSConfig Resolver Plugin

If changing your import syntax across the codebase is not an option, you can add a dedicated resolver plugin that explicitly teaches Parcel how to parse your `tsconfig.json` `baseUrl` mapping. [link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)

1. **Install the custom resolver plugin** via your terminal:\
   bash

<!---->

```
npm install -D parcel-resolver-ts-base-url
```

Use code with caution.
2\. **Create or modify your `.parcelrc` configuration file** in the project root:\
json

```
{
  "extends": "@parcel/config-default",
  "resolvers": ["parcel-resolver-ts-base-url", "..."]
}
```

Use code with caution.\
[link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)

This maps the files directly into Parcel's internal dependency graph on launch, enabling automatic background tracking whenever edits occur. [link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)

### Fix 3: Sync Your `tsconfig.json` with Paths

If you prefer not to use third-party plugins, explicitly map your `baseUrl` inside the `paths` object within your `tsconfig.json` file. [link](https://parceljs.bootcss.com/features/dependency-resolution/index.html)

Update your `tsconfig.json` configuration block:

json

```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "source/*": ["./source/*"]
    }
  }
}
```

Use code with caution.

### Next Steps to Finalize

After applying one of the fixes above, **clear your cache one final time** before launching your environment: [link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)

bash

```
rm -rf .parcel-cache && parcel serve source/web/index.html
```

Use code with caution.

To optimize further, let me know:

- Which of the approaches above (**native alias** or **resolver plugin**) fits best with your workflow?
- Do you use any generic **monorepos structure** (like Yarn Workspaces or Lerna) that handles cross-folder symlinks?

I can generate additional step-by-step configurations for multi-package codebases if needed.

- [link](https://parceljs.org/features/dependency-resolution/)\
  Parcel.js\
  Dependency resolution - Parcel\
  TSConfig. ... Parcel supports some settings defined in TypeScript's tsconfig. json config file, including baseUrl , paths , and mo...
- [link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)\
  DEV Community\
  Using TypeScript \`paths\` and \`baseUrl\` with Parcel\
  Dec 31, 2021 — parcel-resolver-ts-base-url ... It has 0 dependencies (except for peer Parcel, of course), weighs barely over 1kb and uses memoiza...
- [link](https://parceljs.bootcss.com/features/dependency-resolution/index.html)\
  Bootstrap中文网\
  Dependency resolution - Parcel\
  TypeScript. ... TypeScript will need to be configured to support Parcel features like absolute and tilde dependency specifiers, an...

Show all

## what's the proven way to do so

The most proven, stable, and official way to make Parcel track your absolute TypeScript paths is **Parcel's native `package.json` absolute paths configuration**.

The Parcel core team has explicitly stated they will not natively read `tsconfig.json` `baseUrl` or `paths` mappings for file watching. Because third-party resolver plugins frequently break or fall out of date with minor Parcel updates, native aliasing is the only production-proof approach. [link](https://github.com/parcel-bundler/parcel/issues/6073)

### Step 1: Tell Parcel Where Your Root Code Lives

Parcel features a built-in absolute path indicator using the tilde (`~`) character. [link](https://parceljs.org/features/dependency-resolution/)

Open your root `package.json` file and declare an alias that matches your `source` folder structure:

json

```
{
  "name": "your-project-name",
  "version": "1.0.0",
  "alias": {
    "~": "./source"
  }
}
```

Use code with caution.

### Step 2: Mirror it in `tsconfig.json` for IDE Intellisense

To keep VS Code, TypeScript compilation, and error checkers completely in sync without using complex plugins, match Parcel's setting inside your `tsconfig.json` file: [link](https://stackoverflow.com/questions/43281741/how-can-i-use-paths-in-tsconfig-json)

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["source/*"]
    }
  }
}
```

Use code with caution.

### Step 3: Use the Tilde Prefix in Your Code

Update your import blocks to swap the raw folder name with the official tilde `~` reference. This explicitly tells Parcel's internal dependency framework that it must actively watch these assets. [link](https://parceljs.org/features/dependency-resolution/)

typescript

```
// Do NOT use this (Parcel assumes it is an un-tracked node_module):
import { Button } from 'source/components/Button';

// DO use this (Parcel instantly maps it, tracks it, and watches it):
import { Button } from '~/components/Button';
```

Use code with caution.

### Step 4: Purge Your Setup and Boot

Because Parcel aggressively saves broken dependency nodes inside its hidden files, you must wipe the old records clean before launching the new mapping rules:

bash

```
rm -rf .parcel-cache dist .next
parcel serve source/web/index.html
```

Use code with caution.

Once this configuration is live, altering any `.ts` or `.tsx` file inside your nested `./source` structures will trigger automatic browser hot-reloads instantly.

- [link](https://parceljs.org/features/dependency-resolution/)\
  Parcel.js\
  Dependency resolution - Parcel\
  File extensions. ... It is recommended to include the full file extension in all import specifiers. This both improves dependency ...
- [link](https://stackoverflow.com/questions/43281741/how-can-i-use-paths-in-tsconfig-json)\
  Stack Overflow\
  How can I use paths in tsconfig.json? - Stack Overflow\
  Apr 7, 2017 — Save this answer. Loading when this answer was accepted… Show activity on this post. This can be set up on your tsconfig.json file...
- [link](https://github.com/parcel-bundler/parcel/issues/6073)\
  GitHub\
  Support for TypeScript TSConfig 'extends', 'baseUrl' and 'paths ...\
  Apr 2, 2021 — Configurations \* // tsconfig.json { "compilerOptions" : { baseUrl: ".", paths: { "@org/foo": \["libs/foo/index.ts"], "@org/bar": \["

Show all

## force it. no change in my code.

To force Parcel to automatically read your exact `tsconfig.json` mappings without changing a single line of your codebase, you must plug a custom resolver straight into Parcel’s engine. [link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)

By default, Parcel drops the link to your base URL files because it interprets them as external dependencies rather than internal source files. This workflow forces Parcel to recognize your config file, mapping everything into its active watcher instantly. [link](https://dev.to/zachbryant/finally-use-your-typescript-aliases-in-parcel-v2-3ge5)

### Step 1: Install the Zero-Dependency TSConfig Resolver

Run this command in your Ubuntu terminal to add the plugin that hooks directly into Parcel's module resolution pipeline: [link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)

bash

```
npm install -D parcel-resolver-ts-base-url
```

Use code with caution.

### Step 2: Inject the Resolver into Parcel's Core Configuration

You need to tell Parcel to use this plugin _before_ it tries its standard module search.

Create a file named `.parcelrc` in your **root repository folder** (parallel to your `package.json` and `tsconfig.json`) and paste this exact configuration: [link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)

json

```
{
  "extends": "@parcel/config-default",
  "resolvers": ["parcel-resolver-ts-base-url", "..."]
}
```

Use code with caution.

_Note: The `"..."` syntax is mandatory. It tells Parcel to process your TSConfig mappings first, then fall back to normal dependency behavior for everything else._

### Step 3: Verify your `tsconfig.json` Structure

For this forcing mechanism to run cleanly without code adjustments, your `tsconfig.json` needs explicit array paths for your wildcard directories. Ensure your configuration mirrors this syntax: [link](https://www.typescriptlang.org/tsconfig/paths.html)

json

```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "source/*": ["source/*"]
    }
  }
}
```

Use code with caution.

### Step 4: Clear the Aggressive Cache & Run

Parcel embeds old resolution paths deeply inside its hidden temporary directories. Clear it one final time to force the new resolver to build a correct dependency index: [link](https://stackoverflow.com/questions/73158568/track-files-without-including-them-in-the-commits)

bash

```
rm -rf .parcel-cache && parcel serve source/web/index.html
```

Use code with caution.

If you modify files inside the `source/` folder, the terminal will dynamically catch the update, processing changes automatically.

If you test this layout, let me know:

- Does the build process throw an explicit **resolution error** on boot?
- Are you executing the command from the root directory or inside the `source/web` folder?

I can help modify the `.parcelrc` path rules if you have a nested directory configuration.

- [link](https://parceljs.org/)\
  Parcel.js\
  Parcel\
  When you make a change, Parcel automatically updates your code in the browser – no page reload necessary! http://localhost:1234. H...
- [link](https://dev.to/yakovlev%5Falexey/using-typescript-paths-and-baseurl-with-parcel-204h)\
  DEV Community\
  Using TypeScript \`paths\` and \`baseUrl\` with Parcel\
  Dec 31, 2021 — parcel-resolver-ts-base-url ... It has 0 dependencies (except for peer Parcel, of course), weighs barely over 1kb and uses memoiza...
- [link](https://dev.to/zachbryant/finally-use-your-typescript-aliases-in-parcel-v2-3ge5)\
  DEV Community\
  Finally, Use Your TypeScript Aliases in Parcel v2 - DEV Community\
  May 6, 2022 — How Parcel is Out-of-the-Box. Parcel is supposed to be a fun zero-config build tool. That bubble bursts when you discover that you...

Show all

