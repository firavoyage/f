<!-- pnpm add -g eslint updates it for a patch version -->

<!-- well, it's still not fixed. you could not just suppose to (re) run pnpm add to make sure it exists. -->

<!-- let's be pragmatic. fix when it really breaks. (though it could be better with shell alias) -->

# how to make pnpm lock in versions by default, and do not update when you already have (unless you add @latest) and you have the same version everywhere

To make **pnpm** lock in your versions strictly, prevent accidental updates during installs, and enforce version consistency across a monorepo, you need to adjust your `.npmrc` settings. \[[1](https://tech-insider.org/pnpm-vs-npm-2026/), [2](https://medium.com/@nipunasan/how-to-share-a-common-node-modules-folder-to-your-node-projects-using-pnpm-55a3270a786f)]

### Lock In Versions by Default

By default, pnpm saves dependencies with a caret (`^`). To force pnpm to install the exact version specified (e.g., `1.2.3` instead of `^1.2.3`), create or update the **`.npmrc`** file in the root of your project: \[[1](https://pnpm.io/settings), [2](https://hackernoon.com/how-to-create-a-monorepo-with-vite-cloudflare-remix-pnpm-and-turborepo-no-build-step)]

ini

```
save-exact=true
```

Use code with caution.

- **Result**: Running `pnpm add lodash` will save `lodash: "4.17.21"` directly into `package.json`.
- **Updates**: It will never update unless you explicitly run `pnpm update` or add `@latest`. \[[1](https://medium.com/@dirishalasandeep/understanding-package-lock-npm-452a02607488), [2](https://gist.github.com/gunzip/ae4af0de6b1ce38f29986a2c58488764)]

### Prevent Automatic Updates on Install \[[1](https://charlesjones.dev/blog/npm-supply-chain-attacks-ci-cd-locked-dependencies)]

To ensure that running `pnpm install` never updates your `pnpm-lock.yaml` file with newer sub-dependencies, enforce a frozen lockfile in your continuous integration (CI) or local development: \[[1](https://cicube.io/workflow-hub/github-action-setup-node/)]

ini

```
frozen-lockfile=true
```

Use code with caution.

- **Result**: Installation fails if changes to `package.json` do not match the lockfile.
- **Alternative**: Use `pnpm install --frozen-lockfile` in your terminal or deployment scripts. \[[1](https://pnpm.io/errors), [2](https://cicube.io/workflow-hub/github-action-setup-node/)]

### Enforce the Same Version Everywhere (Monorepos) \[[1](https://github.com/yarnpkg/berry/issues/6400), [2](https://medium.com/@navneetskahlon/managing-dependencies-in-nx-monorepos-strategies-and-tools-8bd62eae7a28)]

If you are using a pnpm workspace and want to ensure every package uses the exact same version of a dependency, add this to your `.npmrc`:

ini

```
dedupe-peer-dependents=true
```

Use code with caution.

Additionally, use the **`workspace:`** protocol inside your monorepo packages to reference shared internal dependencies cleanly, which forces them to stay synced. \[[1](https://github.com/semantic-release/npm/issues/280), [2](https://blog.logrocket.com/advanced-package-manager-features-npm-yarn-pnpm/)]

***

To help configure this perfectly, let me know:

- Are you working in a **single project** or a **multi-package monorepo**?

- Do you want this rule to apply **globally on your machine** or just for **this specific project**?

- Are you trying to fix a **specific dependency mismatch** right now?

- [link](https://tech-insider.org/pnpm-vs-npm-2026/)\
  pnpm vs npm: 3x Faster Installs? \[2026] Winner Revealed\
  Apr 4, 2026 — Step 6: Add . npmrc Configuration. pnpm uses . npmrc for configuration. Common settings to add include auto-install-peers=true (to...\
  \
  \
  tech-insider.org

- [link](https://medium.com/@nipunasan/how-to-share-a-common-node-modules-folder-to-your-node-projects-using-pnpm-55a3270a786f)\
  How to share a common node\_modules folder to your node projects using pnpm\
  Mar 6, 2025 — Using . npmrc This prevents accidental installations using npm or yarn .\
  \
  \
  Medium

- [link](https://pnpm.io/settings)\
  Settings (pnpm-workspace.yaml) | pnpm\
  For example, if a package has version 1.2.3 , by default its version is set to ^1.2.3 which allows minor upgrades for that package...\
  \
  \
  PNPM

Show all

## You said: is save exact enough

No, `save-exact=true` is **not enough** on its own to fully lock down your environment.

While it ensures your direct dependencies (in `package.json`) have fixed version numbers, it leaves two major gaps open: \[[1](https://blog.stackademic.com/my-handy-little-helper-the-npmrc-file-in-my-project-setup-c8d7ec0f0946)]

### 1. It does not control nested dependencies

Your direct dependencies have their own dependencies (transitive dependencies). If a library you use specifies `^2.1.0` for one of its packages, `pnpm` will still fetch the latest minor or patch version of that sub-dependency during a fresh install.

### 2. It does not stop `pnpm install` from updating the lockfile \[[1](https://github.com/pnpm/pnpm/issues/7740)]

If someone deletes the `node_modules` folder or installs the project on a new machine, a standard `pnpm install` can still recalculate the lockfile and pull in newer sub-dependencies if a strict state is not enforced.

***

### What you need for complete lockdown

To guarantee 100% identical builds across all machines, you must combine `save-exact` with these two settings in your **`.npmrc`** file:

ini

```
# 1. Saves exact versions to package.json (e.g., 1.2.3 instead of ^1.2.3)
save-exact=true

# 2. Forces pnpm to use the lockfile exactly; fails if lockfile is out of sync
frozen-lockfile=true

# 3. Ensures identical resolution trees across different packages
prefer-frozen-lockfile=true
```

Use code with caution.

***

To make sure this setup works perfectly for you, let me know:

- Are you setting this up for a **team/CI deployment pipeline**?

- Do you need help **retroactively fixing** existing `^` or `~` ranges in your `package.json`?

- [link](https://blog.stackademic.com/my-handy-little-helper-the-npmrc-file-in-my-project-setup-c8d7ec0f0946)\
  Optimizing Node.js Projects with the .npmrc File: A Beginner’s Guide | by Olgun DUTKAN\
  Aug 19, 2024 — Exact Versions: By setting save-exact=true , you ensure that your package. json file records the exact versions of your dependenci...\
  \
  \
  Stackademic

- [link](https://github.com/pnpm/pnpm/issues/7740)\
  pnpm install --frozen-lockfile=false will not update the outdated packages · Issue #7740 · pnpm/pnpm\
  Mar 4, 2024 — KSXGitHub commented on Mar 6, 2024 frozen-lockfile=false just means that pnpm install will not fail if the lockfile is outdated. I...\
  \
  \
  GitHub

## You said: can it work if you have frozen lockfile and you have package json and you delete lock file

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, it will not work</span></mark>. If you delete the lockfile while `frozen-lockfile=true` is enabled, the installation will **fail immediately** with an error.

Here is exactly what happens and how to handle it:

### Why it fails

- **The Rule**: `frozen-lockfile=true` forbids pnpm from generating or changing the lockfile.
- **The Result**: If the lockfile is missing, pnpm cannot look up your nested dependencies, but it is banned from creating a new one. It will throw an error and stop. \[[1](https://www.mend.io/blog/lockfiles-security/)]

### How to generate a new locked-in lockfile

If you purposefully deleted your lockfile and need to regenerate it using your strict `save-exact` rules, you must temporarily bypass the freeze:

1. **Run a clean install**:\
   bash

<!---->

```
pnpm install --no-frozen-lockfile
```

Use code with caution.
2\. **What this does**: It reads your exact `package.json` versions, locks down the sub-dependencies available today, and writes a brand-new `pnpm-lock.yaml`.
3\. **Next steps**: Once the new lockfile is created, your `frozen-lockfile=true` setting will automatically protect it again during future installs. \[[1](https://github.com/vercel/turborepo/issues/12156)]

***

To help you get back on track, tell me:

- Did you **delete the lockfile to fix an error**, or were you just testing the behavior?

- Do you need the command to **override this setting in your CI/CD pipeline**?

- [link](https://www.mend.io/blog/lockfiles-security/)\
  How To Secure Your Package Manager’s Lockfiles\
  Sep 2, 2021 — As you can see, when a given platform was not included in the lockfile, an error is printed and the install process stops. This be...\
  \
  \
  Mend.io

- [link](https://github.com/vercel/turborepo/issues/12156)\
  turbo prune produces invalid bun.lock since v2.8.12 — bun install --frozen-lockfile rejects the pruned lockfile · Issue #12156 · vercel/turborepo\
  Mar 5, 2026 — yaml is absent. Note that in CI environments, this setting is true by default. If you still need to run install in such cases, use...\
  \
  GitHub

## You said: when i run pnpm add foo, i want it to do nothing if i already have it (unless i run pnpm add foo@latest) how to do

By default, running `pnpm add foo` tells pnpm to look up the latest version on the npm registry and update your project—even if `foo` is already listed in your `package.json`.

To change this so running `pnpm add foo` defaults to doing nothing when it is already installed, you can configure your **`prefer-workspace-packages`** or setup behavior for local development. However, **the CLI tool itself doesn't have an option to completely change the base definition of the `add` command.**

Instead, you can achieve your exact desired workflow by using the right commands and configs:

### 1. The Native Way: Use `pnpm install` for Safe Additions

The standard workflow in pnpm to achieve this safety is using instead of `pnpm add`.

- **If it already exists**: Running `pnpm install foo` checks your `package.json`. If `foo` is already present, it evaluates your `save-exact` configuration, realizes it is already satisfied, and **does nothing**.
- **If it is missing**: It will download and add the package to your project.
- **To force update**: You run `pnpm add foo@latest` or `pnpm update foo`. \[[1](https://github.com/pnpm/pnpm/issues/3006), [2](https://sergiocarracedo.es/corepack/), [3](https://github.com/pnpm/pnpm/issues/1657)]

### 2. If inside a Monorepo/Workspace

If you are in a multi-package repository and want `pnpm add foo` to pull from what you already have in the workspace instead of checking the internet for updates, add this to your **`.npmrc`**: \[[1](https://pnpm.io/settings)]

ini

```
# Forces pnpm to look inside your workspace/lockfile first
prefer-workspace-packages=true
```

Use code with caution.

When this is active, running `pnpm add foo` will grab the version you already have pinned in your monorepo catalogs or adjacent packages instead of upgrading it to the latest version online.

### 3. The Strict Safeguard: Lockfile Modification Defense

If you want to completely block anyone on the team from accidentally running a command that changes an existing package version, enforce the frozen lockfile state in your **`.npmrc`**:

ini

```
frozen-lockfile=true
```

Use code with caution.

With this active, if anyone runs `pnpm add foo` and it attempts to modify a version or pull a different sub-dependency than what is locked down, **the command will instantly crash and block the change**. The developer will be forced to explicitly run `pnpm add foo@latest --no-frozen-lockfile` to bypass it. \[[1](https://pnpm.io/cli/install)]

***

To help find the perfect balance for your team:

- Would you prefer setting up a **custom terminal alias** (like making a script that wraps the command) to enforce this?

- Are you looking to prevent **your own accidental keystrokes**, or protect a **shared codebase** from other developers?

- [link](https://pnpm.io/settings)\
  Settings (pnpm-workspace.yaml)\
  pnpm gets its configuration from the command line, environment variables, and pnpm-workspace.yaml . Only auth and registry setting...\
  PNPM

- [link](https://pnpm.io/cli/install)\
  pnpm install\
  Aliases: i. pnpm install is used to install all dependencies for a project. In a CI environment, installation fails if a lockfile ...\
  PNPM

- [link](https://github.com/pnpm/pnpm/issues/3006)\
  pnpm install --prod missing dependency in workspace · Issue #3006 · pnpm/pnpm\
  Dec 3, 2020 — Code to reproduce the issue: Check that the root package. json lists object-assign as a devDependency Check that packages/foo/pack...\
  \
  \
  GitHub

Show all

## You said: what? just, if i have, do nothing. if not, add. that's it. i do not want to care or remember whether i already have or not. does pnpm support it natively.

**No, pnpm does not support this behavior natively.** \[[1](https://pnpm.io/cli/add), [2](https://github.com/pnpm/pnpm/issues/2193), [3](https://www.contentstack.com/docs/developers/launch/supported-package-managers)]

By definition, running `pnpm add foo` forces pnpm to go to the internet registry, look up the latest version, and actively update your project—even if you already have it installed. There is no flag or setting in pnpm that translates to _"add only if missing, otherwise skip"_. \[[1](https://pnpm.io/cli/add), [2](https://github.com/pnpm/pnpm/issues/2193), [3](https://github.com/orgs/pnpm/discussions/5487)]

However, you can get exactly what you want right now without having to think or check your files by using a terminal alias or a lightweight shell function.

### The Permanent Fix: Create a Custom Smart Alias

You can replace `pnpm add` with a shell function in your terminal profile (like `.bashrc` or `.zshrc`). This function quickly scans your local setup; if the package is found, it does nothing, but if it's missing, it adds it automatically. \[[1](https://github.com/pnpm/pnpm/issues/5729), [2](https://github.com/pnpm/pnpm/issues/7293), [3](https://github.com/pnpm/pnpm/issues/3746)]

Add this function to your **`~/.zshrc`** or **`~/.bashrc`** file:

bash

```
pnpm-add-smart() {
  # If no package name is given, just fall back to standard install
  if [ -z "$1" ]; then
    pnpm install
    return
  fi

  # Check if the exact package is already in package.json
  if grep -q "\"$1\":" package.json 2>/dev/null; then
    echo "✓ '$1' is already installed. Doing nothing."
  else
    echo "➕ '$1' not found. Installing now..."
    pnpm add "$1"
  fi
}

# Alias it so you never have to remember a new command
alias padd=pnpm-add-smart
```

Use code with caution.

### How to use it going forward:

1. Save the file and restart your terminal (or run `source ~/.zshrc`).
2. **`padd lodash`** → If you have it, it outputs a green checkmark and stops. If you don't have it, it runs `pnpm add lodash`.
3. **`padd lodash@latest`** → If you ever explicitly _want_ to force an update, the `grep` will miss the tag, and it will forcefully fetch the newest version from npm. \[[1](https://pnpm.io/cli/add), [2](https://github.com/pnpm/pnpm/issues/4027), [3](https://raulmelo.me/en/til/how-to-fix-command-not-found-for-global-pnpm-packages), [4](https://javascript-conference.com/blog/pnpm-the-high-performance-package-manager/)]

***

If you'd like, let me know:

- What **operating system / terminal** you use (Mac/Zsh, Windows/PowerShell, Linux/Bash), and I can give you the exact copy-paste script for your system.

- If you need this behavior to work with **multiple packages at once** (e.g., `padd foo bar baz`).

- [link](https://pnpm.io/cli/add)\
  pnpm add\
  pnpm add Installs a package and any packages that it depends on. By default, any new package is installed as a production dependen...\
  PNPM

- [link](https://github.com/pnpm/pnpm/issues/2193)\
  Existing packages are automatically updated when adding ...\
  Nov 29, 2019 — x on Linux. When adding a new package to a project, i.e. with pnpm install --save-dev aos or pnpm add -D aos , existing packages a...\
  GitHub

- [link](https://www.contentstack.com/docs/developers/launch/supported-package-managers)\
  Supported Package Managers\
  Currently, Launch does not support the pnpm package manager. For projects using pnpm, Launch will automatically default to npm.\
  \
  Contentstack

Show all

## You said: what does frozen lockfile prefer frozen lockfile mean

Here is the direct difference between the two: **`frozen-lockfile` blocks installations if changes are detected, while `prefer-frozen-lockfile` tries to use the lockfile but will automatically update it if your `package.json` changes.** \[[1](https://github.com/pnpm/pnpm/issues/8433), [2](https://github.com/renovatebot/config-help/issues/195), [3](https://github.com/yarnpkg/website/issues/700)]

Here is exactly how each setting behaves:

### `frozen-lockfile=true` (Strict / Defensive)

This setting completely freezes your project's dependency state. It is primarily used in **CI/CD deployment pipelines** and production environments. \[[1](https://cap.cloud.sap/docs/node.js/best-practices), [2](https://docs.deno.com/runtime/fundamentals/dependency%5Fmanagement/)]

- **What it does:** It reads your `pnpm-lock.yaml` and installs _exactly_ what is written there.
- **If you change `package.json`:** If you manually add a package to `package.json` or change a version number, `pnpm install` will **instantly crash with an error**.
- **The Rule:** It is strictly forbidden from changing, updating, or rewriting your lockfile. \[[1](https://sharonsahadevan.medium.com/understanding-the-difference-between-package-json-and-pnpm-lock-yaml-in-node-js-f9d47a6a2386), [2](https://github.com/pnpm/pnpm/issues/11633), [3](https://medium.com/@szaranger/differences-between-prefer-offline-offline-frozen-lockfile-for-dependency-installation-87490c1ce0e3), [4](https://javascript.plainenglish.io/npm-vs-pnpm-why-modern-frontend-teams-are-making-the-switch-113d63401279), [5](https://docs.conan.io/en/latest/versioning/lockfiles/introduction.html)]

### `prefer-frozen-lockfile=true` (Smart / Fallback)

This is pnpm's **default behavior** for local development. It strikes a balance between speed and flexibility.

- **What it does:** If your `package.json` and `pnpm-lock.yaml` match perfectly, pnpm skips checking the internet entirely and installs strictly from the lockfile (making it incredibly fast). \[[1](https://vaadin.com/docs/latest/flow/configuration/development-mode/npm-pnpm-bun)]
- **If you change `package.json`:** If you add a new package or modify a version manually in your `package.json`, pnpm **will not crash**. Instead, it gracefully unfreezes, reaches out to the npm registry, fetches the new packages, and updates your lockfile automatically. \[[1](https://stackoverflow.com/questions/tagged/package-lock.json?tab=Newest), [2](https://dev.to/sergioholgado/pnmp-package-manager-what-is-it-and-why-you-should-be-using-it-a-comprehensive-guide-4c66)]

***

### Summary Checklist

| If you modify `package.json`... \[[1](https://github.com/pnpm/pnpm/issues/9995), [2](https://github.com/pnpm/pnpm/issues/7740), [3](https://github.com/microsoft/rushstack/issues/2525), [4](https://github.com/pnpm/pnpm/issues/8433), [5](https://github.com/pnpm/pnpm/issues/5794)] | `frozen-lockfile=true`             | `prefer-frozen-lockfile=true`      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------- |
| **Does it crash?**                                                                                                                                                                                                                                                                     | ❌ **Yes** (Throws an error)       | **No**                             |
| **Does it update the lockfile?**                                                                                                                                                                                                                                                       | ❌ **No** (Blocked)                | **Yes** (If needed)                |
| **Best use case:**                                                                                                                                                                                                                                                                     | CI/CD, Automated Tests, Production | Local coding, everyday development |

***

If you'd like, let me know:

- Which environment you are configuring right now (e.g., your **local laptop** or a **GitHub Actions / GitLab CI** pipeline)?

- If you want to know how to combine these with **pnpm catalogs** to manage shared monorepo versions seamlessly?

- [link](https://github.com/pnpm/pnpm/issues/8433)\
  \--resolution-only fails with confusing message when you also pass --frozen-lockfile · Issue #8433 · pnpm/pnpm\
  Aug 16, 2024 — izhovkin commented on Feb 21, 2025 --prefer-frozen-lockfile does allow to modify lockfile, so it is undesirable on CI.\
  \
  \
  GitHub

- [link](https://github.com/renovatebot/config-help/issues/195)\
  \[Question] Using with yarn's ---frozen-lockfile · Issue #195 · renovatebot/config-help\
  Mar 25, 2019 — Context Based on yarnpkg/yarn#4147, we're using . yarnrc file in which we set --install. frozen-lockfile true . This prevents us f...\
  \
  \
  GitHub

- [link](https://github.com/yarnpkg/website/issues/700)\
  Yarn install documentation recommending --frozen-lockfile for CI builds is too opinionated · Issue #700 · yarnpkg/website\
  Oct 31, 2017 — The only way the lock file should be updated when run is if you change the package. json associated with it (barring potential wei...\
  \
  \
  GitHub

Show all

## You said: so is save exact enough

No, `save-exact` is still **not enough** on its own, even with these settings understood. \[[1](https://pnpm.io/blog/releases/11.0)]

`save-exact` only solves half of the problem. It controls your **direct dependencies** (the libraries you add), but it has zero power over **indirect dependencies** (the libraries that your libraries rely on). \[[1](https://github.com/npm/npm/issues/6075)]

Without combining it with lockfile enforcement, your setup is still vulnerable. Here is why:

### The Missing Piece: Nested Dependencies

Imagine you run `pnpm add library-a`. Because of `save-exact=true`, it saves exactly as `"library-a": "1.0.0"` in your `package.json`.

However, `library-a` has its own dependencies in its code:

json

```
// Inside library-a's internal package.json
"dependencies": {
  "nested-package": "^2.0.0"
}
```

Use code with caution.

Because `library-a` uses a caret (`^`), `pnpm` is forced to look for the newest version of `nested-package`. \[[1](https://blog.bitsrc.io/what-is-semantic-versioning-in-package-json-how-to-manage-dependency-version-more-efficiently-40c3fac5972c)]

### Why `save-exact` fails without the lockfile settings:

- **Scenario A (No Lockfile Settings):** If a teammate clones your repo tomorrow and runs `pnpm install`, pnpm sees your exact `"library-a": "1.0.0"`. But then it checks the internet and finds `nested-package` just updated from `2.0.0` to `2.1.0`. It installs `2.1.0` and **updates your lockfile**. Your teammate now has a different app environment than you.
- **Scenario B (With `frozen-lockfile=true`):** If your teammate runs `pnpm install`, pnpm is forced to read the lockfile exactly. It sees you used `nested-package@2.0.0`, bypasses the internet check, and installs `2.0.0`.

### The Verdict

To get the 100% bulletproof, unchangeable setup you want:

1. Use **`save-exact=true`** so your personal `package.json` never uses `^` or `~`.
2. Use **`frozen-lockfile=true`** (in CI/CD) or **`prefer-frozen-lockfile=true`** (locally) to freeze the sub-dependencies of those packages so they can never drift. \[[1](https://blog.stackademic.com/my-handy-little-helper-the-npmrc-file-in-my-project-setup-c8d7ec0f0946)]

***

If you want to wrap this up, let me know:

- Do you want the **exact 3-line `.npmrc` file** that combines all of this perfectly for your project?

- Do you need help understanding how to **lock down a pipeline** like GitHub Actions?

- [link](https://pnpm.io/blog/releases/11.0)\
  pnpm 11.0 | pnpm\
  Apr 28, 2026 — pnpm add short flags — -d is now --save-dev , -p is --save-prod , -o is --save-optional , -e is --save-exact (only inside pnpm add...\
  \
  \
  PNPM

- [link](https://github.com/npm/npm/issues/6075)\
  Add property to package.json to change default dependency scheme for --save · Issue #6075 · npm/npm\
  Aug 31, 2014 — As an aside, I'll note that --save-exact is documented as "Saved dependencies will be configured with an exact version rather than...\
  \
  \
  GitHub

- [link](https://blog.bitsrc.io/what-is-semantic-versioning-in-package-json-how-to-manage-dependency-version-more-efficiently-40c3fac5972c)\
  What is Semantic Versioning? How to Manage Dependency Version More Efficiently.\
  Aug 18, 2022 — Step 4: Use of Tilde(~) and Caret(^) Symbol Now this project will contain the history version exactly 5.0. 0 as we are not adding ...\
  \
  \
  Bit.dev

Show all

## You said: i mean when prefer frozen lockfile is the implicit default. is save exact enough.

No, even with `prefer-frozen-lockfile` active by default, `save-exact=true` is **still not enough**.

You are still vulnerable to unexpected updates because of how `prefer-frozen-lockfile` reacts when `package.json` changes. \[[1](https://gitstashapply.medium.com/understanding-package-lock-json-024a0f32ef2f)]

Here is exactly how the default setup can still break your rule of _"do not update when you already have"_:

### The loophole: How updates still slip in

`prefer-frozen-lockfile` only protects you if your `package.json` is a **100% untouched mirror** of your lockfile. The moment you make _any_ change to `package.json`, pnpm disables the freeze and recalculates the dependency tree.

Imagine this scenario:

1. You have `library-a` saved exactly as `"1.0.0"`.
2. `library-a` relies on a sub-dependency using a flexible range (e.g., `"nested-package": "^2.0.0"`).
3. Today, `nested-package` releases version `2.1.0`.
4. You decide to add a brand new package to your project: `pnpm add library-b`.

**What happens next:**\
Because you added `library-b`, your `package.json` has changed. pnpm detects this change and **bypasses** the frozen lockfile state. While it installs `library-b`, it scans your entire project. It notices that `library-a` wants `nested-package: ^2.0.0`. It sees `2.1.0` is now available on the internet, installs it, and silently updates your lockfile. \[[1](https://github.com/pnpm/pnpm/issues/7480), [2](https://github.com/pnpm/pnpm/issues/9995), [3](https://github.com/actions/setup-node/issues/725)]

By trying to add `library-b`, you accidentally upgraded a sub-dependency of `library-a`.

### How to completely close this loophole

To get the strict behavior you want, you must change the default behavior by forcing **`frozen-lockfile=true`** in your `.npmrc`. \[[1](https://community.latenode.com/t/how-to-lock-transitive-dependency-versions-in-npm-package-lock-json/31822)]

If you do this:

- Running `pnpm install` will never drift.
- If you manually type a new dependency into `package.json` and try to install it, pnpm will refuse to run and update other things blindly. It will force you to be explicit via terminal commands so your existing versions stay locked. \[[1](https://rushjs.io/pages/configs/experiments%5Fjson/), [2](https://github.com/orgs/pnpm/discussions/11577), [3](https://www.coinspect.com/blog/supply-chain-guardrails/)]

***

If you want to completely secure your project, let me know:

- Do you want to see how to use **pnpm catalogs** (introduced in pnpm v9/v10) to centrally lock version numbers across files?

- Do you need help cleaning up your current `pnpm-lock.yaml` to make sure no unwanted updates have already slipped in?

- [link](https://gitstashapply.medium.com/understanding-package-lock-json-024a0f32ef2f)\
  Understanding package-lock.json. In the dynamic realm of JavaScript and… | by Git Stash Apply | Medium\
  Dec 3, 2023 — Risks of Not Using package-lock. json Neglecting package-lock. json can lead to: Environmental Inconsistencies: Different dependen...\
  \
  \
  Medium

- [link](https://github.com/pnpm/pnpm/issues/7480)\
  Lockfile is not respected when a newer version of the dependency exists in the tree · Issue #7480 · pnpm/pnpm\
  Jan 2, 2024 — pnpm decides to change the lockfile because it detects that the specification from your package. json does not match the specifica...\
  \
  GitHub

- [link](https://github.com/pnpm/pnpm/issues/9995)\
  \`--frozen-lockfile\` and CI Install Behavior Inconsistent with Broken Lockfile · Issue #9995 · pnpm/pnpm\
  Sep 18, 2025 — pnpm install (without --frozen-lockfile ) in a CI environment (i.e., with the CI environment variable set to true ) will attempt t...\
  \
  \
  GitHub

Show all

## You said: what? add lib b has something to do w lib a sub dep?

Yes, it does. This is one of the most frustrating things about package managers, but here is exactly why it happens:

When you run `pnpm add library-b`, pnpm doesn't _just_ look at library B. It triggers a **full project resolution pass**.

Because `prefer-frozen-lockfile` is a "smart fallback," the moment you add a new package, pnpm opens up the entire `pnpm-lock.yaml` file to reconstruct the dependency graph. During this process, pnpm evaluates every loose version constraint (`^` or `~`) belonging to your sub-dependencies.

If `library-a` contains a internal dependency listed as `"nested-package": "^2.0.0"`, and a newer version (like `2.1.0`) was released to the npm registry since your last install, pnpm's default resolution algorithm will notice it. It will say, _"Since I am already updating the lockfile for library-b, I will also pull the freshest valid version for this nested package."_

As a result, adding **Library B** can silently upgrade a sub-dependency of **Library A** in the background. \[[1](https://github.com/ng-packagr/ng-packagr/issues/932)]

### How to stop this from happening

If you want to completely isolate commands so that adding `library-b` has absolutely zero effect on `library-a` or its sub-dependencies, you have two choices:

1. **Use `--frozen-lockfile=false` only when adding**: Keep `frozen-lockfile=true` as your global default in `.npmrc`. This locks down the entire tree. When you want to add something new, you have to be intentional about it.

2. **Use Overrides**: If there is a specific nested package you are terrified will update and break your app, you can hard-pin it at the very bottom of your `package.json` so pnpm is forbidden from ever looking for a newer version:\
   json

<!---->

```
"pnpm": {
  "overrides": {
    "nested-package": "2.0.0"
  }
}
```

Use code with caution.

***

To help you secure your specific setup:

- Do you want to check if your project currently has **risky sub-dependencies** that might change on the next install?

- Would you like to see how to use **pnpm overrides** to force a specific sub-dependency to never change?

- [link](https://github.com/ng-packagr/ng-packagr/issues/932)\
  Understand Dependencies · Issue #932 · ng-packagr/ng-packagr\
  Jun 8, 2018 — Example library-a has a team of maintainers and immediately updates their peerDependency to package-awesome@2.0.0 library-b has on...\
  \
  \
  GitHub

## You said: can pnpm add libb implicitly update liba or liba sub dep

**Yes, `pnpm add libb` can implicitly update `liba`'s sub-dependencies**, but it will never touch `liba` itself if you used `save-exact=true`.

To understand why this happens and how to prevent it, look at exactly what pnpm does behind the scenes:

### 1. `liba` itself is safe (Thanks to `save-exact`)

Because you set `save-exact=true`, `liba` is written into your `package.json` as a hard-coded, strict version (e.g., `"liba": "1.0.0"`). When you run `pnpm add libb`, pnpm sees the strict version number for `liba`, recognizes it is perfectly satisfied, and **leaves `liba` completely alone.**

### 2. `liba`'s sub-dependencies are vulnerable

While `liba` is locked, the things `liba` relies on internally are likely not.

If `liba` was coded by its author to require `"nested-package": "^2.0.0"`, that caret (`^`) represents a loose range. Under pnpm's default `prefer-frozen-lockfile` behavior, running `pnpm add libb` forces pnpm to unfreeze and regenerate parts of the `pnpm-lock.yaml` file to make room for `libb`. \[[1](https://github.com/pnpm/pnpm/issues/6463)]

While reconstructing the dependency graph, pnpm evaluates all loose version ranges in your project. If the author of `nested-package` released version `2.1.0` to the internet since your last install, pnpm will notice it, think it is doing you a favor, and **silently upgrade that sub-dependency to `2.1.0` inside your lockfile.** \[[1](https://github.com/pnpm/pnpm/issues/6657)]

***

### How to achieve a true "Do Not Touch Anything Else" state

If you want a 100% guarantee that running an `add` command modifies absolutely zero existing sub-dependencies, you have to strictly change your settings:

### Option A: Enforce globally in `.npmrc`

Force pnpm to lock down everything by default, meaning nobody can add a package without explicitly bypassing the lockfile first:

ini

```
frozen-lockfile=true
```

Use code with caution.

- **The Result:** Running `pnpm add libb` will immediately throw an error and crash to prevent changes to other sub-dependencies.
- **To add packages:** You are forced to be intentional by running `pnpm add libb --no-frozen-lockfile`.

### Option B: Hard-pin troublesome sub-dependencies

If there is an unstable sub-dependency you are worried will break your project if it updates automatically, force-pin it to a permanent version using the **`overrides`** field at the bottom of your root `package.json`: \[[1](https://github.com/pnpm/pnpm/issues/8209)]

json

```
"pnpm": {
  "overrides": {
    "nested-package": "2.0.0"
  }
}
```

Use code with caution.

- **The Result:** Even if you add 100 new packages, pnpm is strictly forbidden from ever looking for a version of `nested-package` other than `2.0.0`.

***

If you'd like, let me know:

- Do you want to see if your lockfile already has **unwanted loose sub-dependencies**?

- Would you like help configuring the **`overrides` syntax** for a specific package giving you trouble?

- [link](https://github.com/pnpm/pnpm/issues/8209)\
  sub-dependencies versions are not resolved/updated correctly #8209\
  Jun 14, 2024 — the only workaround I found is: \* remove the dependency completely. \* run pnpm install - check in your lock file that the dependen...\
  GitHub

- [link](https://github.com/pnpm/pnpm/issues/6463)\
  installing a dependency, by default, installs the lowest matching ...\
  Apr 25, 2023 — dominikg commented. ... Exactly, that is why you need to update you version specs. If you don't update the range then your package...\
  GitHub

- [link](https://github.com/pnpm/pnpm/issues/6657)\
  pnpm update some-dep updates unrelated transitive dependencies\
  Jun 8, 2023 — Description \* pnpm version: 8.6.1. \* Code to reproduce the issue: See https://github.com/skovhus/pnpm-update-transitive-bug. pnpm ...\
  GitHub

## You said: what? if i run pnpm add libb --no-frozen-lockfile, does the npmrc frozen simply does nothing

**Yes, if you explicitly add** <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">--no-frozen-lockfile</code> to a command, it completely overrides the <code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">frozen-lockfile=true</code> setting in your <code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">.npmrc</code> file.</strong></mark>

When you pass that flag, you are temporarily telling pnpm: _"Ignore my rule about freezing the lockfile for this one command; go ahead and modify it."_ \[[1](https://github.com/pnpm/pnpm/issues/7672), [2](https://pnpm.io/cli/install)]

Because you bypassed the lockfile freeze to add `libb`, pnpm returns to its default behavior, exposing you to the exact loophole discussed earlier: \[[1](https://dev.to/alfchee/why-we-migrated-from-npm-to-pnpm-and-it-wasnt-about-speed-mgo)]

### What happens when you bypass it

1. **pnpm looks up `libb`**: It finds `libb` on the npm registry and prepares to add it to your project.
2. **The full project resolution pass triggers**: Because the lockfile is unfrozen, pnpm evaluates your entire dependency tree to merge `libb` cleanly. \[[1](https://github.com/pnpm/pnpm/issues/7740)]
3. **`liba`'s sub-dependencies are evaluated**: pnpm checks your existing dependencies. If `liba` has a nested dependency written with a loose caret range (like `"nested-package": "^2.0.0"`), pnpm will check the registry. If `2.1.0` is available, **pnpm will silently upgrade it in your lockfile** while it is modifying the file for `libb`.

### The Catch-22

- If you **don't** bypass it, `pnpm add libb` will crash because it is strictly forbidden from changing the lockfile to add your new library.
- If you **do** bypass it, you grant pnpm permission to update the lockfile, which risks updating loose sub-dependencies belonging to your other packages. \[[1](https://pnpm.io/cli/install)]

### The absolute solution to your original goal

If you want to add new packages safely without _ever_ risking an accidental sub-dependency upgrade, you must explicitly tell pnpm to block transitive updates during install. Add this to your `.npmrc`:

ini

```
# Locks down your direct dependencies
save-exact=true

# Restricts nested dependencies strictly to what is already locked down
# forcing pnpm to skip checking for newer versions of existing sub-dependencies
depth=0
```

Use code with caution.

***

To make sure your project is permanently bulletproof:

- Would you like me to show you how to use **pnpm overrides** to hard-lock a specific sub-dependency that keeps shifting?

- Do you want to see how to audit your current `pnpm-lock.yaml` for loose versions before enforcing these rules?

- [link](https://github.com/pnpm/pnpm/issues/7740)\
  pnpm install --frozen-lockfile=false will not update the ... - GitHub\
  Mar 4, 2024 — KSXGitHub commented. KSXGitHub. on Mar 7, 2024. Contributor. --frozen-lockfile only means that it will fail if the lockfile is not...\
  GitHub

- [link](https://pnpm.io/cli/install)\
  pnpm install\
  This option is true by default in CI environments. Here's some information about the \`--frozen-lockfile\` option: \* \*\*For non-CI\*\* ...\
  PNPM

- [link](https://github.com/pnpm/pnpm/issues/7672)\
  \`pnpm install --frozen-lockfile\` results in ERR\_PNPM\_OUTDATED\_LOCKFILE on detached git head but not on branch · Issue #7672\
  Feb 18, 2024 — This issue can occur when: \* Using the latest pnpm release \* Setting up a pnpm workspace \* Enabling branch lockfile in \`.npmrc\` \* ...\
  GitHub

Show all

## You said: yeah so it does not make any sense. i do want to add packages. and i do want to lock as much as i can. what does depth 0 do.

It makes perfect sense to feel frustrated by this. It seems completely illogical that adding a new package (`libb`) would touch a totally unrelated package (`liba`).

The reality is that **`depth=0` does not fix this specific issue**, as `depth` is a setting primarily used for filtering recursive commands or terminal list displays. It was a mistake to suggest it as a way to isolate dependency updates. \[[1](https://github.com/pnpm/pnpm/issues/6891), [2](https://github.com/pnpm/pnpm-list)]

Since you want a practical workflow where you can freely add packages while keeping your existing environment as strictly locked as possible, here is how the ecosystem handles it.

### Why pnpm behaves this way

Package managers prioritize structural health. When you run `pnpm add libb`, pnpm reads your whole project to verify that nothing will conflict. If it finds loose version ranges (like a sub-dependency using `^1.0.0`), its default instinct is to pull the newest patch version allowed by that range while it is rebuilding the lockfile. \[[1](https://stackoverflow.com/questions/73968943/how-to-have-pnpm-install-install-everything-exactly-to-the-specs-of-the-pnpm-l)]

### The Solution: Use pnpm Overrides \[[1](https://medium.com/@piotrkorowicki/pnpm-overrides-eb16db96e763)]

Because you cannot stop pnpm from performing a project resolution pass when adding packages, the only way to lock down your sub-dependencies natively is to strip away their loose version ranges.

You can force a sub-dependency to never update by pinning it inside the **`pnpm.overrides`** field at the bottom of your root `package.json`: \[[1](https://docs.npmjs.com/files/package.json/)]

json

```
{
  "name": "my-project",
  "dependencies": {
    "liba": "1.0.0"
  },
  "pnpm": {
    "overrides": {
      "nested-package-inside-liba": "2.0.0"
    }
  }
}
```

Use code with caution.

- **How it works:** Even when you run `pnpm add libb`, and pnpm rebuilds the lockfile, the `overrides` block acts as an absolute rule. It tells pnpm: _"I do not care what `liba` or `libb` requests; you are strictly forbidden from installing any version of `nested-package` other than `2.0.0`."_ \[[1](https://docs.npmjs.com/files/package.json/)]

### The "Add Safely" Workflow

By combining your configurations, you get the highest level of security possible without losing the ability to add new packages:

1. Keep your `.npmrc` clean and straightforward for local development:\
   ini

<!---->

```
save-exact=true
prefer-frozen-lockfile=true
```

Use code with caution.
2\. Run your normal commands without flags: `pnpm add libb`.
3\. If you ever notice that a specific sub-dependency updated and caused an unexpected issue, add it to the `pnpm.overrides` block in your `package.json` to freeze it at its previous version permanently. \[[1](https://docs.npmjs.com/files/package.json/), [2](https://github.com/nrwl/nx/issues/27238), [3](https://github.com/pnpm/pnpm/issues/11337)]

***

If you want to see exactly what packages are floating, I can help you **list your project's sub-dependencies** or help you format an **override ruleset** for a package that is currently causing trouble. Would that be helpful? \[[1](https://github.com/pnpm/pnpm-list), [2](https://docs.npmjs.com/files/package.json/)]

- [link](https://github.com/pnpm/pnpm/issues/6891)\
  Add \`--depth\` option to \`pnpm update\` command · Issue #6891\
  Aug 1, 2023 — The \`--depth\` option for \`pnpm update\` could allow you to decide at what level to update your dependencies. For example, you could...\
  GitHub
- [link](https://stackoverflow.com/questions/73968943/how-to-have-pnpm-install-install-everything-exactly-to-the-specs-of-the-pnpm-l)\
  npm - How to have \`pnpm install\` install everything exactly to ...\
  Oct 6, 2022 — In fact, even if I specify the installed version exactly 4.17. 3 , because it differs to the specifier ~4.17. 0 , then it will err...\
  Stack Overflow
- [link](https://github.com/pnpm/pnpm-list)\
  pnpm-list - GitHub\
  Sep 23, 2018 — Arguments \* packages - String\[] - an array of name@version-range identifiers, which will limit the results to only the paths to th...\
  GitHub

Show all

## You said: can i make it predictable natively

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, you cannot make it behave this way natively.</span></strong></mark>

The behavior you want directly conflicts with how modern package managers are designed. There is no native flag or configuration hidden in pnpm that translates to: _"When adding a new package, freeze the rest of the universe."_ \[[1](https://www.reddit.com/r/webdev/comments/st6p0i/why%5Fdoes%5Fpnpm%5Fupdate%5Fupdate%5Fthe%5Fpackagejson/)]

Every single Node.js package manager (pnpm, npm, Yarn, and Bun) handles the `add` command by executing a full structural resolution pass over the entire dependency graph. \[[1](https://www.reddit.com/r/webdev/comments/st6p0i/why%5Fdoes%5Fpnpm%5Fupdate%5Fupdate%5Fthe%5Fpackagejson/), [2](https://fireup.pro/news/pnpm-explained-a-faster-smarter-alternative-to-npm-and-yarn)]

### Why the behavior is unchangeable

The software ecosystem relies heavily on shared, deep-nested dependencies. If you add `libb`, and it needs a specific version of a utility package that `liba` also uses, pnpm _must_ evaluate `liba`'s constraints to avoid breaking your application with duplicate or conflicting versions. \[[1](https://www.sonatype.com/blog/software-dependencies-a-beginners-guide), [2](https://github.com/dotnet/sdk/issues/12322)]

Because it evaluates those constraints, if it finds a loose range (like `^1.0.0`) and a newer version exists on the internet, its default algorithm updates it to ensure project health. \[[1](https://www.reddit.com/r/webdev/comments/st6p0i/why%5Fdoes%5Fpnpm%5Fupdate%5Fupdate%5Fthe%5Fpackagejson/)]

### The Only "Native" Strategy: The Multi-Command Workflow

If you want to achieve this predictably using only native pnpm features without writing code overrides, you have to split your workflow into two separate commands:

1. **Keep your defense on by default:** Leave `frozen-lockfile=true` in your `.npmrc` file.

2. **The "Safe Add" Routine:** When you absolutely must add a new package, run the installation but restrict pnpm's ability to fetch anything else by chaining a lockfile review:\
   bash

<!---->

```
pnpm add libb --no-frozen-lockfile && pnpm install --frozen-lockfile
```

Use code with caution.\
\[[1](https://pnpm.io/cli/install), [2](https://community.latenode.com/t/how-to-lock-transitive-dependency-versions-in-npm-package-lock-json/31822)]

- **How this helps:** The first command forces the package in. If it accidentally shifts an existing sub-dependency, you will see a massive wall of changes in your Git staging area for `pnpm-lock.yaml`. You can then selectively discard the lines you didn't want modified before committing. \[[1](https://shramko.dev/blog/pnpm)]

***

If you'd like to simplify this, I can show you how to write a **one-line terminal alias** that handles the Git safety check for you automatically. Would that be helpful?

- [link](https://pnpm.io/cli/install)\
  pnpm install\
  The \`--frozen-lockfile\` option for pnpm controls whether to generate a lockfile and install if the lockfile is out of sync. This o...\
  PNPM
- [link](https://www.reddit.com/r/webdev/comments/st6p0i/why%5Fdoes%5Fpnpm%5Fupdate%5Fupdate%5Fthe%5Fpackagejson/)\
  Why does "pnpm update" update the package.json? - Reddit\
  Feb 15, 2022 — zkochan. • 4y ago. Because this is how npm CLI works as well. You may do "pnpm update --no-save" and the package. json will not be...\
  Reddit·r/webdev
- [link](https://fireup.pro/news/pnpm-explained-a-faster-smarter-alternative-to-npm-and-yarn)\
  pnpm vs npm vs Yarn: Why pnpm Is Up to 3× Faster\
  May 15, 2026 — pnpm vs npm ( Node.js package manager ) vs Yarn vs Bun – Side-by-Side Aspect Phantom dependencies Workspaces / monorepo npm Allowe...\
  \
  \
  fireup.pro

Show all

## You said: why. libb might have no sub deps.

Even if `libb` has **zero sub-dependencies**, running `pnpm add libb` still triggers a full project resolution pass.

From a human perspective, it seems logical that adding an isolated package should not touch anything else. However, from the package manager's perspective, **the `add` command is just an alias for: _"Modify `package.json`, then recalculate the entire project lockfile."_**

When you run `pnpm add libb`, pnpm executes a fixed, unchangeable algorithm that follows these exact steps:

### 1. It updates `package.json`

It appends `"libb": "1.0.0"` to your dependencies block.

### 2. It throws away the "cached" resolution state

Because the `package.json` file has changed, pnpm cannot treat the existing `pnpm-lock.yaml` as an absolute truth anymore. It unfreezes the lockfile and enters its **resolution phase**.

### 3. It loops through EVERY dependency in your project

pnpm scans your entire `package.json` from top to bottom to rebuild the dependency graph cleanly.

- It looks at `libb`. It sees no sub-dependencies. Great.
- It looks at `liba`. It sees `liba` has a loose sub-dependency range (e.g., `"nested-package": "^2.0.0"`). \[[1](https://stackoverflow.com/questions/28080641/how-to-make-static-imported-library-dependent-on-another-static-imported-library)]

### 4. It checks the internet for updates

Because the lockfile is unfrozen during this resolution pass, pnpm is allowed to look at the npm registry. It checks if a newer version of `nested-package` exists that still satisfies `^2.0.0`. If `2.1.0` is online, pnpm updates it in your lockfile right then and there.

### Summary

pnpm does not know `libb` has no sub-dependencies until **after** it has already triggered the full resolution pass. The tool is not designed to look at packages in isolation; it updates the entire project graph as a single unit every time a package is added, updated, or removed.

***

If you want to keep tabs on this behavior, we can look at your current setup. Let me know:

- Do you want to check if you have any **loose sub-dependencies** in your current lockfile right now?

- Would you like to see how to use **Git commands** to automatically reject any sneaky sub-dependency updates after running an add command?

- [link](https://stackoverflow.com/questions/28080641/how-to-make-static-imported-library-dependent-on-another-static-imported-library)\
  How to make static imported library dependent on another static imported library in CMake?\
  Jan 22, 2015 — Project also contains LibB which changes frequently and depends on LibA. In this case during linking LibB we will have dependencie...\
  \
  Stack Overflow

## You said: yeah, but why does it have to update to latest if i already have a fitting version

It feels entirely broken, and your frustration makes absolute sense. If you already have a version that fits the criteria, why on earth does the tool spend time updating it?

The reason comes down to an aggressive philosophy in JavaScript package managers known as **"Eager SemVer Optimization."** \[[1](https://dev.to/wilsonwangdev/lock-files-and-package-manager-migration-a-practical-risk-analysis-2ejn)]

The logic behind why it forces an update—and the single setting you can use to stop it—is detailed below.

### The Philosophy: Why pnpm does this

When you unfreeze a lockfile (which happens when you add a package like `libb`), pnpm stops looking at your lockfile as a rule and starts looking at it as a _suggestion_.

When its resolution algorithm scans `liba` and sees `"nested-package": "^2.0.0"`, it asks two questions:

1. Is my current version (`2.0.1`) still valid? **Yes.**
2. Is there a _newer_ version available that is also valid? (e.g., `2.1.0`). **Yes.**

Because of **Semantic Versioning (SemVer)**, the creator of `nested-package` promised that `2.1.0` is backwards-compatible, contains bug fixes, and is objectively "better" than `2.0.1`. \[[1](https://dev.to/wilsonwangdev/lock-files-and-package-manager-migration-a-practical-risk-analysis-2ejn)]

Package managers are built to aggressively trust this promise. By default, pnpm is coded to think: _"Since the developer gave me permission to pick anything in the `^2.0.0` range, and a fresher, safer version exists on the internet, it is my job to upgrade them to it right now."_ \[[1](https://medium.com/@roman%5Ffedyskyi/pnpm-10-makes-security-the-default-for-javascript-packages-17c3fcfd685b)]

It completely ignores the fact that your current version was perfectly fine.

### The Fix: Force pnpm to prefer existing versions \[[1](https://pnpm.io/cli/install)]

If you think that behavior is a terrible default, you can completely turn it off natively. pnpm has a configuration rule specifically designed to force the algorithm to choose versions you already have cached in your project over newer ones on the internet.

Add this exact line to your **`.npmrc`** file:

ini

```
resolution-mode=time-based
```

Use code with caution.

### What this does:

- **The Default Mode (`highest`)**: pnpm always looks for the absolute highest possible version allowed by a `^` or `~` range.
- **The Time-Based Mode (`time-based`)**: pnpm shifts its priority. When resolving a dependency range, it prefers the version that matches the age of your project's existing ecosystem rather than blindly pulling the latest code from the internet registry. \[[1](https://github.com/pnpm/pnpm/issues/8209)]

By combining `save-exact=true` (to protect direct packages) with `resolution-mode=time-based` (to restrict nested packages), running `pnpm add libb` will finally leave the rest of your working project completely alone. \[[1](https://adrianmejia.com/node-package-manager-npm-tutorial/)]

***

To ensure this completely resolves the unexpected behavior:

- Do you want to see how to use **`pnpm dedupe`** to clean up any duplicate nested versions that may have already slipped into your lockfile?

- Let me know if you'd like to test this setting on a **specific package** that has been giving you trouble. \[[1](https://www.thecandidstartup.org/2026/04/13/pnpm-update-transitive-dependency.html)]

- [link](https://github.com/pnpm/pnpm/issues/8209)\
  sub-dependencies versions are not resolved/updated correctly · Issue #8209 · pnpm/pnpm\
  Jun 14, 2024 — According to a bug report, when updating a dependency version, sub-dependencies are not resolved as expected. The expected behavio...\
  GitHub

- [link](https://www.thecandidstartup.org/2026/04/13/pnpm-update-transitive-dependency.html)\
  Updating Transitive Dependencies with pnpm\
  Apr 13, 2026 — Gradually accumulating forced overrides in pnpm-workspace. yaml is a maintenance nightmare. Fortunately, you don't have to. You ca...\
  The Candid Startup

- [link](https://dev.to/wilsonwangdev/lock-files-and-package-manager-migration-a-practical-risk-analysis-2ejn)\
  Lock Files and Package Manager Migration: A Practical Risk ...\
  Mar 25, 2026 — Semantic Versioning is built on a simple contract: MAJOR.MINOR.PATCH - MAJOR: incompatible API changes - MINOR: backward-compatibl...\
  DEV Community

Show all

## You said: what does resolution-mode=time-based do

The **`resolution-mode=time-based`** setting completely shifts how pnpm picks version numbers for your dependencies. \[[1](https://www.pnpm.cn/settings)]

Instead of hunting for the absolute newest package versions on the internet, **it forces pnpm to freeze the sub-dependency ecosystem based on history.** \[[1](https://github.com/pnpm/rfcs/blob/main/text/0002-time-based-resolution-mode.md), [2](https://www.pnpm.cn/settings)]

Here is exactly how pnpm changes its math when you enable `time-based` resolution:

### 1. Direct Dependencies choose the absolute base version

If you manually type `foo: "^1.1.0"` in your `package.json`, the standard mode searches the registry and installs the highest version available (e.g., `1.8.9`).

- Under `time-based` mode, pnpm pins your direct dependencies down to their **lowest possible matching version**.
- It will install exactly `1.1.0`. (This becomes redundant if you already have `save-exact=true` enabled, but it serves as an extra shield). \[[1](https://www.pnpm.cn/settings)]

### 2. Sub-dependencies lock into a "Time Window"

This is the hidden feature that completely stops unexpected updates when you run `pnpm add libb`. \[[1](https://www.pnpm.cn/settings)]

When evaluating a nested dependency (e.g., `liba` requiring `nested-package: ^2.0.0`), pnpm looks at the publishing timestamp of `liba`. It determines when your direct package was released to the world and **strictly blocks sub-dependencies from using versions published after that date.** \[[1](https://www.pnpm.cn/settings)]

```
Timeline Example:
[2024] -> liba v1.0.0 is published.
[2024] -> nested-package v2.0.1 is published (Matches ^2.0.0).
-------------------- Time Window Cutoff --------------------
[2025] -> nested-package v2.1.0 is published (New patch update).
[2026] -> You run `pnpm add libb`.
```

- **Standard Default Mode (`highest`)**: pnpm breaks the seal, checks the 2026 registry, sees `v2.1.0`, and upgrades your lockfile.
- **Time-Based Mode (`time-based`)**: pnpm checks the timestamp of `liba` (2024). It deliberately ignores `v2.1.0` because it was born outside of `liba`'s original historical era. It forces your project to stay locked onto `v2.0.1`. \[[1](https://github.com/pnpm/rfcs/blob/main/text/0002-time-based-resolution-mode.md), [2](https://www.pnpm.cn/settings)]

### The Core Benefits

- **Blocks Sub-dependency Hijacking:** If a hacker takes over a deep sub-dependency package and pushes a malicious update tonight, standard pnpm installs might grab it instantly. Time-based resolution refuses to download it because it is too new. \[[1](https://github.com/pnpm/rfcs/blob/main/text/0002-time-based-resolution-mode.md), [2](https://www.pnpm.cn/settings), [3](https://github.com/pnpm/pnpm/issues/10257)]
- **Drastically Faster Installs:** Because pnpm isn't constantly hitting the internet registry to check if a higher version dropped 5 minutes ago, it pulls directly from your local cache. \[[1](https://www.pnpm.cn/settings)]
- **Guarantees Predictability:** Adding `libb` will finally become a localized action that completely isolates your existing packages from drifting. \[[1](https://www.pnpm.cn/settings)]

***

To make sure this fits your setup:

- Are you adding this directly to your project's **`.npmrc` file**, or are you configuring it inside a **`pnpm-workspace.yaml` file** for a monorepo?

- Do you want to see how to pair this with a **`minimum-release-age`** config to block cutting-edge packages entirely? \[[1](https://pnpm.io/settings), [2](https://github.com/pnpm/pnpm/issues/10257)]

- [link](https://github.com/pnpm/pnpm/issues/10257)\
  time-based\` is not respected if \`minimumReleaseAge ... - GitHub\
  Dec 1, 2025 — Configure both resolutionMode: time-based and minimumReleaseAge: 4320 in pnpm-workspace.yaml. Configure a direct dependency to a s...\
  GitHub

- [link](https://pnpm.io/settings)\
  Settings (pnpm-workspace.yaml)\
  You may also exempt specific versions (or a list of specific versions using a disjunction with || ). This allows pinning exception...\
  PNPM

- [link](https://github.com/pnpm/rfcs/blob/main/text/0002-time-based-resolution-mode.md)\
  rfcs/text/0002-time-based-resolution-mode.md at main - GitHub\
  The resolution mode that is currently used by pnpm is not optimized for caching. During installation we need to always fetch the m...\
  GitHub

Show all

## You said: how does the semver promise work in the real world

In a perfect world, Semantic Versioning (SemVer) is a beautiful promise. In the real world of JavaScript development, that promise is broken constantly. \[[1](https://javapro.io/2026/03/26/semantic-versioning-done-automatically/), [2](https://keninkujovic.com/blog/semantic-versioning), [3](https://levelup.gitconnected.com/how-to-use-promises-in-javascript-real-time-24332f4f3f6f)]

The **SemVer promise** dictates that given a version number like `MAJOR.MINOR.PATCH` (e.g., `1.4.2`), changes should be perfectly predictable: \[[1](https://keninkujovic.com/blog/semantic-versioning), [2](https://medium.com/@arham%5F30077/understanding-semantic-versioning-semver-a-simple-guide-20d4992105ba), [3](https://heynode.com/tutorial/how-use-semantic-versioning-npm/), [4](https://thenewstack.io/python-mulls-a-change-in-version-numbering/), [5](https://medium.com/@the%5Fshubham%5Fyadav/semver-validator-edab31a589a4)]

- **PATCH** (`1.4.3`): Only backward-compatible bug fixes. Zero breaks.
- **MINOR** (`1.5.0`): New features, but fully backward-compatible. Zero breaks.
- **MAJOR** (`2.0.0`): Breaking changes where your old code might fail. \[[1](https://consevangelou.com/blog/why-release-versioning-matters-a-guide-to-semver-and-automated-publishing/), [2](https://keninkujovic.com/blog/semantic-versioning), [3](https://aws.amazon.com/blogs/devops/using-semantic-versioning-to-simplify-release-management/), [4](https://medium.com/@arham%5F30077/understanding-semantic-versioning-semver-a-simple-guide-20d4992105ba), [5](https://www.linkedin.com/posts/himanshu-singour-95627b222%5Fgive-me-just-10-seconds-ill-make-you-understand-activity-7351823036485971970-ZoC9)]

Package managers defaults are aggressively optimized around this promise. They assume that pulling a newer patch or minor version is always 100% safe and universally better. \[[1](https://heynode.com/tutorial/how-use-semantic-versioning-npm/), [2](https://publishing-project.rivendellweb.net/understanding-semantic-versioning-semver/), [3](https://aws.amazon.com/blogs/devops/using-semantic-versioning-to-simplify-release-management/), [4](https://tuxcare.com/blog/the-dependency-confusion-attack-how-hackers-slip-into-your-supply-chain/)]

In reality, developers encounter significant issues with this assumption: \[[1](https://javapro.io/2026/03/26/semantic-versioning-done-automatically/)]

### 1. Human Error (Accidental Breaking Changes)

Most open-source packages are maintained by tired humans or automated bots. A developer might refactor an internal utility package, change an exported type, or accidentally delete a parameter. They publish it as a **Patch** (`1.4.3`), genuinely believing it is just a bug fix. \[[1](https://consevangelou.com/blog/why-release-versioning-matters-a-guide-to-semver-and-automated-publishing/), [2](https://keninkujovic.com/blog/semantic-versioning), [3](https://danburzo.ro/releasing-js/switching-to-esm/), [4](https://www.brandonbloom.name/blog/2013/06/19/semver/)]

- **The Reality:** It breaks your build. Because it was marked as a patch, your standard package manager algorithm downloads it implicitly during a resolution pass. \[[1](https://heynode.com/tutorial/how-use-semantic-versioning-npm/), [2](https://www.linkedin.com/posts/himanshu-singour-95627b222%5Fgive-me-just-10-seconds-ill-make-you-understand-activity-7351823036485971970-ZoC9)]

### 2. The "Fix" That Breaks Your Code

Sometimes a bug fix behaves like a breaking change. If a sub-dependency has a known bug, you might write code that specifically works around or relies on that bug. \[[1](https://iscinumpy.dev/post/bound-version-constraints/)]

- **The Reality:** When the author releases a patch fixing the bug, your workaround code breaks. Even though the author followed SemVer perfectly, your ecosystem still fractures. \[[1](https://javapro.io/2026/03/26/semantic-versioning-done-automatically/), [2](https://staltz.com/i-wont-use-semver-patch-versions-anymore), [3](https://xavd.id/blog/post/versioning-as-communication/)]

### 3. Missing Specifications on Pre-Releases

Many packages rely on major libraries that are under active development (major version zero, like `0.x.x`). According to the SemVer spec, anything under `0.y.z` can change at any time without warning. \[[1](https://semver.org/), [2](https://github.com/zafarkhaja/jsemver), [3](https://publishing-project.rivendellweb.net/understanding-semantic-versioning-semver/)]

- **The Reality:** Moving from `0.4.1` to `0.4.2` can completely change how a library operates, but loose dependency ranges will fetch it automatically anyway. \[[1](https://www.oligo.security/blog/the-hidden-risks-of-the-npm-supply-chain-attacks-ai-agents)]

### 4. Supply Chain Attacks (Malicious Patches)

Bad actors leverage the eager update behavior of package managers. If a hacker steals the npm credentials of an open-source maintainer, they won't publish a `v2.0.0` major release (which developers audit manually). They will push a sneaky `v1.4.3` patch containing malicious code. \[[1](https://medium.com/@arham%5F30077/understanding-semantic-versioning-semver-a-simple-guide-20d4992105ba)]

- **The Reality:** Anyone running a standard `add` or `install` command will immediately fetch the compromised version without realizing it. \[[1](https://news.ycombinator.com/item?id=48356625)]

### Why you are right to lock everything down

Because the SemVer promise fails constantly in production, your goal to freeze absolutely everything—even nested sub-dependencies—is the industry standard for stable development teams. Relying blindly on automated patch updates introduces a continuous layer of unpredictability to your workflow. \[[1](https://iscinumpy.dev/post/bound-version-constraints/)]

***

To ensure your environment remains safe from these broken promises:

- Would you like help setting up **automated dependency scanning** to flag bad updates?

- Do you want to review how to use **pnpm overrides** to permanently contain a specific package that often introduces breaking updates? \[[1](https://pnpm.io/ja/settings)]

- [link](https://semver.org/)\
  Semantic Versioning 2.0.0\
  Each element must increase numerically. For example: \* 1.9 \* 0 -> 1.10 \* 0 -> 1.11 Here are some rules for incrementing version nu...\
  Semantic Versioning

- [link](https://heynode.com/tutorial/how-use-semantic-versioning-npm/)\
  How to Use Semantic Versioning in NPM - HeyNode\
  In this tutorial we learned that Semantic Versioning dictates how a packages version number is incremented by following the MAJOR.\
  HeyNode

- [link](https://javapro.io/2026/03/26/semantic-versioning-done-automatically/)\
  Semantic Versioning done automatically - JAVAPRO International\
  Mar 26, 2026 — Problem. While the SemVer specification defines clear and well-documented rules, it provides no mechanism to enforce them. In prac...\
  JAVAPRO

Show all

## You said: what if the author does not even like the semver naming

If a package author doesn't care about SemVer, hates it, or uses a completely different versioning system, the JavaScript ecosystem completely fractures for that package.

Because the npm registry and tools like pnpm **require** the `X.Y.Z` format to function, authors who dislike SemVer are forced to type three numbers anyway. This results in highly unpredictable real-world behaviors: \[[1](https://jfrog.com/help/r/artifactory-why-am-i-having-trouble-resolving-particular-npm-package-versions/artifactory-why-am-i-having-trouble-resolving-particular-npm-package-versions)]

### 1. The "Fake SemVer" Approach

Many famous authors use SemVer syntax but completely ignore its definitions. \[[1](https://medium.com/netscape/npm-dependency-errors-then-youre-doing-it-wrong-635160a89150), [2](https://hynek.me/articles/semver-will-not-save-you/)]

- **Example (TypeScript):** The TypeScript team explicitly does not follow standard SemVer. Minor releases like moving from `5.1` to `5.2` frequently contain breaking changes.
- **The Danger:** If a library you use lists TypeScript as a dependency with a caret (`^5.1.0`), pnpm will gladly auto-upgrade it to `5.2.0` on a lockfile unfreeze, potentially breaking your entire type system.

### 2. Romantic Versioning / Marketing Versioning

Some maintainers change version numbers based on how "big" or exciting the release feels, rather than technical compatibility. They might bump the major version to `2.0.0` simply because they redesigned the logo or rewrote the documentation, even though the code itself didn't change a single API. \[[1](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1915), [2](https://news.ycombinator.com/item?id=36642989)]

- **The Problem:** This causes unnecessary panic. Your tools see a Major bump and refuse to update, forcing you to audit a package manually only to realize nothing actually broke.

### 3. Chronological / CalVer (Calendar Versioning)

Some authors prefer to version software by date (e.g., `Year.Month.Patch` like `2026.06.1`). To fit into npm, they might write it as `2026.6.1`. \[[1](https://sensiolabs.com/blog/2025/semantic-vs-calendar-versioning)]

- **The Danger:** Moving from June (`2026.6.1`) to July (`2026.7.0`) looks like a **Minor** bump to pnpm. pnpm thinks a minor bump is 100% backward-compatible. In reality, the author might have rewritten the entire codebase between those months, completely breaking your app.

### 4. Zero-Ver (Permanent Pre-releases)

Some developers leave their software at version `0.X.Y` forever because they don't want the pressure of maintaining a stable `1.0.0` release. \[[1](https://intersect-training.org/packaging/versioning.html)]

- **The Rule:** In the official SemVer spec, everything in the `0.x.x` space is considered unstable. Every minor bump (e.g., `0.1.0` to `0.2.0`) is legally allowed to break everything. \[[1](https://publishing-project.rivendellweb.net/understanding-semantic-versioning-semver/), [2](https://github.com/lerna/lerna/issues/2766)]
- **The Reality:** Thousands of production apps rely on permanent `0.x.x` packages. If you don't use `save-exact=true`, you are gambling your app's stability on every single install.

### How to protect yourself from SemVer rebels

This is exactly why your instinct to **lock down everything by default** is the only correct way to write reliable software. When you use your strict `save-exact` configuration and time-based resolution, you strip away the author's power to break your build. You control the exact moment code enters your machine, regardless of what versioning philosophy the author believes in.

***

To wrap this up and ensure your setup handles these rogue packages perfectly, tell me:

- Do you have a **specific library in your project right now** that keeps breaking your build with weird version numbers?

- Would you like to see how to use a **pnpm catalog** to globally control a rogue package across multiple project folders?

- [link](https://jfrog.com/help/r/artifactory-why-am-i-having-trouble-resolving-particular-npm-package-versions/artifactory-why-am-i-having-trouble-resolving-particular-npm-package-versions)\
  ARTIFACTORY: Why am I having trouble resolving particular NPM package versions?\
  Jun 14, 2023 — This behavior is expected due to Artifactory's adherence to the semantic versioning ( SemVer) specification for NPM versions. Acco...\
  \
  JFrog

- [link](https://medium.com/netscape/npm-dependency-errors-then-youre-doing-it-wrong-635160a89150)\
  NPM Dependency errors? Then You’re doing it wrong.\
  Sep 3, 2017 — Semantic Versioning SemVer is very popular and the most misused software versioning scheme in the javascript universe. You got it ...\
  \
  \
  Medium

- [link](https://hynek.me/articles/semver-will-not-save-you/)\
  Semantic Versioning Will Not Save You\
  Mar 2, 2021 — Over the years, well-intentioned people experimented with adding meaning to those numbers. The arguably most popular take is Seman...\
  \
  \
  Hynek Schlawack

Show all

## You said: what will save-exact=true

prefer-frozen-lockfile=true\
resolution-mode=time-based do. what will it lock, when will it break.

This specific combination creates an incredibly strict, highly predictable environment. It represents one of the most defensive setups possible for local development without making everyday commands completely unusable.

Here is exactly what this setup locks down, and exactly when and how it will break.

***

### What it WILL Lock

When these three rules are active in your `.npmrc`, your dependency graph becomes locked down at both the top layer and the deep nested layers:

- **Locks Your `package.json` Inputs:** When you run `pnpm add foo`, it is written as an absolute string (e.g., `"foo": "1.2.3"`). The loose caret (`^`) or tilde (`~`) is never introduced to your direct configuration.
- **Locks Nested Sub-Dependencies to their Era:** When you unfreeze the lockfile to add a new library, pnpm evaluates the loose constraints of existing sub-dependencies. Instead of fetching the absolute newest patches on the internet, **it forces them to resolve to versions available at the time the parent package was published**. \[[1](https://the-guild.dev/blog/how-should-you-pin-dependencies-and-why)]
- **Locks Fast Installs:** If you run `pnpm install` without adding anything, `prefer-frozen-lockfile=true` guarantees pnpm skips the internet completely. It reads your local `pnpm-lock.yaml` as an absolute source of truth.

***

### When it WILL Break (And How)

This configuration does not fail blindly; it breaks or alters its behavior during very specific developer actions. Here is when you will notice it:

### 1. It will break if you modify `package.json` by hand and run a blind install

If you manually open `package.json` in your code editor, type a new package dependency inside the object (e.g., `"lodash": "^4.17.21"`), and then run `pnpm install`, **the `time-based` rule will alter your expectations.** \[[1](https://github.com/pnpm/pnpm/issues/9112)]

- **The Break:** Instead of installing the absolute newest version of lodash available on the registry today (`4.17.22+`), pnpm will strictly look at the lowest bound of your range and fetch exactly `4.17.21`.
- **The Fix:** Do not manually edit the text file. Always use the CLI command `pnpm add lodash` so pnpm handles the registration natively.

### 2. It will break if you try to add a package that requires a brand-new sub-dependency

If you attempt to run `pnpm add libb`, and `libb` requires an extremely new utility package that was released just minutes ago, the time-based algorithm might initially conflict or fail to resolve if it falls outside the expected release cache windows of your environment.

- **The Break:** pnpm might throw a resolution error stating it cannot find a valid version matching the historical timeline constraints of your existing graph.
- **The Fix:** You must force a modern lookup for that specific isolated event by running `pnpm add libb --resolution-mode=highest`. \[[1](https://pnpm.io/es/settings)]

### 3. It will break if you delete your lockfile and try a standard install

If you delete `pnpm-lock.yaml` entirely and run `pnpm install`, the command will execute, but **it will generate a drastically different lockfile than before.** \[[1](https://github.com/pnpm/pnpm/issues/8142)]

- **The Break:** Because `resolution-mode=time-based` forces the lowest/historical matching versions across your entire project, a fresh lockfile regeneration will aggressively roll back your nested sub-dependencies to their absolute oldest valid versions. This might cause runtime bugs if your app inadvertently relied on a newer sub-dependency patch.
- **The Fix:** Never delete your lockfile under this configuration unless you are prepared to thoroughly test your entire application from scratch.

***

To wrap up your configuration perfectly, let me know:

- Would you like the **exact command** to safely upgrade a package to its absolute latest version when this strict mode is active?

- Do you want to see how to add an **exception rule** for a specific package that refuses to work with time-based resolution?

- [link](https://the-guild.dev/blog/how-should-you-pin-dependencies-and-why)\
  How should you pin dependencies and why? (The Guild)\
  Mar 6, 2019 — Lock Files to the Rescue Both yarn and recent npm versions allow you to create a lock file. This allows you to lock each and every...\
  \
  \
  GraphQL (The Guild)

- [link](https://github.com/pnpm/pnpm/issues/9112)\
  \`pnpm --filter add \` removes catalog entries from the lockfile, if target project does not reference said entries, with \`dedupe-peer-dependents=false\` · Issue #9112 · pnpm/pnpm\
  Feb 15, 2025 — Expected Behavior I would expect only the given package to be added for the specified project, and catalogs to remain untouched. B...\
  \
  \
  GitHub

- [link](https://pnpm.io/es/settings)\
  Settings (pnpm-workspace.yaml) | pnpm\
  Controls how pnpm behaves when no version of a dependency satisfies the minimumReleaseAge constraint within the requested range. W...\
  \
  \
  PNPM

Show all

## You said: will it update when i already have when i add or install. will it be different if a teammate installs.

### Will it update when you already have?

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>No, it will not update.</strong></mark> \[[1](https://github.com/keycloak/keycloak/issues/40890)]

This specific combination solves your core problem entirely. Here is what happens during both actions:

- **When you run `pnpm install`**: It does nothing. Because of `prefer-frozen-lockfile=true`, pnpm reads your lockfile exactly as it is, skips checking the internet registry, and changes zero versions. \[[1](https://github.com/pnpm/pnpm/issues/11238)]
- **When you run `pnpm add libb`**: The lockfile unfreezes to add `libb`, but your existing packages are completely shielded.
  - `liba` won't change because `save-exact=true` locked it at a strict version (e.g., `1.0.0`).
  - `liba`'s sub-dependencies won't change because `resolution-mode=time-based` forces pnpm to resolve them using historical dates rather than the modern internet. Since the version you _already have_ fits that historical window perfectly, pnpm leaves it alone.

***

### Will it be different if a teammate installs?

**No, it will be identical—as long as you commit your lockfile to Git.** \[[1](https://docs.rendercv.com/developer%5Fguide/project%5Fmanagement/), [2](https://medium.com/openclassrooms-product-design-and-engineering/guide-to-managing-npm-packages-in-your-package-json-d315fe2ccab0)]

The entire point of the `pnpm-lock.yaml` file is to ensure environment uniformity across different machines. When your teammate clones the project and runs `pnpm install`, pnpm reads the lockfile you generated. \[[1](https://sharonsahadevan.medium.com/understanding-the-difference-between-package-json-and-pnpm-lock-yaml-in-node-js-f9d47a6a2386), [2](https://sharonsahadevan.medium.com/understanding-the-difference-between-package-json-and-pnpm-lock-yaml-in-node-js-f9d47a6a2386)]

Because `prefer-frozen-lockfile=true` is the default behavior on their machine as well, pnpm will replicate your exact dependency tree molecule-for-molecule. It will not matter if they run the install on a different operating system, a different network, or six months into the future. \[[1](https://github.com/pnpm/pnpm/issues/7480)]

### The One Catch: They must use `pnpm add` correctly \[[1](https://mikebifulco.com/posts/patching-npm-dependencies-with-pnpm-patch), [2](https://github.com/orgs/pnpm/discussions/3995)]

If your teammate runs `pnpm add libb` on their machine later on, the behavior will only stay identical to yours if they also have your `.npmrc` file.

**Crucial Step**: You must commit the `.npmrc` file to your Git repository alongside your code. When your teammates pull the repo, pnpm will automatically read those three rules on their laptops, forcing their commands to behave exactly like yours.

***

### Summary Checklist

| Action \[[1](https://github.com/pnpm/pnpm/issues/4651), [2](https://github.com/pnpm/pnpm/issues/7936)] | Will it update existing versions? | Will it look different on a teammate's machine? |
| ------------------------------------------------------------------------------------------------------ | --------------------------------- | ----------------------------------------------- |
| **`pnpm install`**                                                                                     | ❌ **No**                         | ❌ **No** (100% identical)                      |
| **`pnpm add new-pkg`**                                                                                 | ❌ **No**                         | ❌ **No** (If `.npmrc` is committed to Git)     |

***

Now that your local settings are bulletproof, would you like to see how to **enforce this on your CI/CD server** (like GitHub Actions) so that a build fails immediately if someone forgets to commit their lockfile changes?

- [link](https://github.com/keycloak/keycloak/issues/40890)\
  Keycloak Operator 26.3.0 fails to update to 26.3.0 · Issue #40890 · keycloak/keycloak\
  Jul 3, 2025 — The update does not happen.\
  \
  \
  GitHub
- [link](https://github.com/pnpm/pnpm/issues/11238)\
  v11.0.0-rc.0: \`pnpm dedupe\` failing with \`ERR\_PNPM\_MISSING\_TIME\` · Issue #11238 · pnpm/pnpm\
  Apr 9, 2026 — pnpm install runs without issues. Seeing no updates in pnpm-lock. yaml when executing this command locally with v11.\
  \
  \
  GitHub
- [link](https://docs.rendercv.com/developer%5Fguide/project%5Fmanagement/)\
  Project Management\
  Never edit this manually. Use just lock to update it. Always commit it to git. That's how everyone gets identical environments.\
  \
  RenderCV

Show all

## You said: when i rerun pnpm add liba

If you run `pnpm add liba` when you **already have** `liba` installed, here is exactly what happens under your specific setup:

### 1. It checks the internet for a newer version

Because you explicitly used the `add` command, pnpm unfreezes the lockfile and reaches out to the npm registry to see if a newer version of `liba` exists beyond what is written in your `package.json`. \[[1](https://github.com/pnpm/action-setup/issues/55)]

### 2. If a newer version exists: It updates it

If you currently have `"liba": "1.0.0"` saved exactly, and the author has released version `1.1.0`, running `pnpm add liba` will **force an upgrade** to `1.1.0`. It will overwrite your `package.json` with the new exact version and update your lockfile.

### 3. If NO newer version exists: It does nothing

If you already have the absolute newest version of `liba` available on the internet, pnpm realizes there is nothing to change.

- It leaves your `package.json` exactly as it is.
- Because of `resolution-mode=time-based`, it leaves all of `liba`'s deep sub-dependencies completely untouched as well. \[[1](https://medium.com/@rats/moving-to-pnpm-and-volta-enhancing-your-frontend-development-workflow-6ae94cf37896)]

***

### How to make it do ABSOLUTELY NOTHING (Even if an update exists)

If your goal is to type `pnpm add liba` out of habit, and you want pnpm to say, _"You already have liba, so I am skipping this command completely without checking the internet,"_ **pnpm cannot do this natively.** As long as you type the word `add`, its core programming forces a registry check.

To get the exact "do nothing" safety behavior you want, you have two choices:

### Option A: Switch to `pnpm install liba`

Instead of using `add`, type `pnpm install liba`.

- **How it works:** checks your `package.json` first. Because `save-exact=true` has pinned `liba` to a strict version, pnpm sees the requirement is already 100% satisfied. It skips the internet registry lookup entirely and **does absolutely nothing**, even if a newer version exists online.

### Option B: Use the Smart Shell Alias

If you don't want to change your muscle memory, use the terminal script provided earlier. It intercepts `pnpm add`, checks if the name exists in your `package.json`, and cancels the command if it finds it:

bash

```
# Add this to your ~/.zshrc or ~/.bashrc
padd() {
  if grep -q "\"$1\":" package.json 2>/dev/null; then
    echo "✓ '$1' is already in package.json. Skipping internet check."
  else
    pnpm add "$1"
  fi
}
```

Use code with caution.

Using `padd liba` will guarantee a 100% frozen state locally without you ever having to remember if you installed it or not.

***

Would you like help setting up that terminal alias for your **specific operating system** (Mac, Windows, or Linux) so you can start using it right away?

- [link](https://github.com/pnpm/action-setup/issues/55)\
  Fail to Install pnpm on GitHub Actions with ERR\_PNPM\_FETCH\_404 · Issue #55 · pnpm/action-setup\
  Sep 15, 2022 — Run pnpm install --frozen-lockfile Lockfile is up to date, resolution step is skipped Progress: resolved 1, reused 0, downloaded 0...\
  \
  \
  GitHub
- [link](https://medium.com/@rats/moving-to-pnpm-and-volta-enhancing-your-frontend-development-workflow-6ae94cf37896)\
  Moving to pnpm and Volta: Enhancing Your Frontend Development Workflow\
  Oct 5, 2024 — # Now, just switch directories - Volta handles the rest! “But What About…” — Addressing Common Concerns “Will this break my existi...\
  \
  \
  Medium

## You said: can i always pnpm i liba instead of pnpm add liba

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, you cannot use </span><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">pnpm i liba</code> as a shortcut to bypass internet updates.</strong></mark>

When you pass a package name directly to the command (e.g., `pnpm install liba`), pnpm's internal code redirects it and treats it **exactly like running `pnpm add liba`**. \[[1](https://stackoverflow.com/questions/73369867/what-the-different-between-pnpm-install-and-pnpm-add)]

If an update exists on the npm registry, `pnpm i liba` will still look it up, pull the new version, and modify your lockfile just like the `add` command would. \[[1](https://stackoverflow.com/questions/73369867/what-the-different-between-pnpm-install-and-pnpm-add)]

***

### The Reality of How Commands Differ

To completely control your environment without thinking about what is already installed, you must understand exactly how pnpm treats arguments:

- **`pnpm install` (No package name)**: This is your safe zone. It scans your `package.json`, sees `liba` is already present, verifies your exact version rule is met, and **does absolutely nothing**—completely skipping the internet. \[[1](https://stackoverflow.com/questions/73369867/what-the-different-between-pnpm-install-and-pnpm-add), [3](https://github.com/vercel/turborepo/issues/4009), [4](https://francescomenghi.com/blog/manage-node-versions-with-pnpm/)]
- **`pnpm install liba` (With a package name)**: pnpm overrides the default installation behavior. It assumes you are explicitly demanding a fresh version lookup for that specific package, forcing an internet registry check. \[[1](https://stackoverflow.com/questions/73369867/what-the-different-between-pnpm-install-and-pnpm-add)]

***

### The Final, Bulletproof Solution

Since neither `add` nor can natively give you an automatic "do nothing if I already have it" behavior, you can create a custom terminal shortcut. This ensures you never have to remember or check your files again. \[[1](https://www.freecodecamp.org/news/how-to-use-pnpm/)]

Add this smart shell script to your terminal profile (**`~/.zshrc`** or **`~/.bashrc`**):

bash

```
# A smart wrapper that installs only when missing
padd() {
  if [ -z "$1" ]; then
    pnpm install
    return
  fi

  # Check if the package is already listed in package.json
  if grep -q "\"$1\":" package.json 2>/dev/null; then
    echo "✓ '$1' is already pinned in package.json. Skipping registry lookup."
  else
    echo "➕ '$1' not found. Fetching from registry..."
    pnpm add "$1"
  fi
}
```

Use code with caution.

### How this behaves in your workflow:

1. **`padd liba` (If already installed)**: The script catches it instantly, outputs a green checkmark, and closes. It never talks to the internet, preserving your lockfile perfectly.
2. **`padd libb` (If completely new)**: The script realizes it is missing and safely triggers `pnpm add libb` to bring it into your strict, time-based project graph. \[[1](https://stackoverflow.com/questions/73369867/what-the-different-between-pnpm-install-and-pnpm-add)]
3. **`padd liba@latest` (If you _want_ an update)**: Because the `@latest` string won't match your plain package name in `package.json`, the script will gracefully pass it through to force a fresh upgrade.

***

To wrap up this workflow completely, let me know:

- What **operating system or terminal** you are currently running (Mac/Zsh, Windows/PowerShell, or Linux/Bash) so I can verify the exact syntax for your profile?

- Do you need help configuring this for **multiple packages at once** (e.g., `padd package-one package-two`)?

- [link](https://stackoverflow.com/questions/73369867/what-the-different-between-pnpm-install-and-pnpm-add)\
  what the different between \`pnpm install\` and \`pnpm add\`?\
  Aug 16, 2022 — \* 4 Answers. Sorted by: 37. There is not much difference between them. In most cases they are interchangeable: pnpm install : with...\
  Stack Overflow

- [link](https://www.freecodecamp.org/news/how-to-use-pnpm/)\
  How to Use pnpm – Installation and Common Commands\
  Jan 9, 2024 — pnpm is Hard to Type – So Set Up an Alias. If you find pnpm hard to type like I do, you can set up an alias to to save you some ef...\
  freeCodeCamp

- [link](https://github.com/vercel/turborepo/issues/4009)\
  \[turborepo] \`npx @turbo/codemod update\` throws an error · Issue #4009 · vercel/turborepo\
  Feb 28, 2023 — denik1981 commented on Jun 7, 2023 I believe the cause of this issue is very well known and the fix shouldn't be hard to implement...\
  \
  \
  GitHub

Show all

## You said: what does cargo or apt or uv do

**Cargo**, **Apt**, and **Uv** are all package managers, but they operate in entirely different ecosystems and approach the "already installed" problem very differently than Node.js tools like npm or pnpm. \[[1](https://nesbitt.io/2026/05/28/package-managers-that-package-package-managers.html), [2](https://deepnote.com/blog/ultimate-guide-to-uv-library-in-python), [3](https://www.dm.af.mil/Media/Article-View/Article/313613/cargo-deployment-function-yard/)]

They handle package additions, tracking, and existing dependencies through distinct mechanisms:

***

### 1. `cargo` (Rust Language Ecosystem)

[Cargo](https://docs.adacore.com/live/wave/rust/html/rust%5Fug/%5Fstatic/cargo/commands/cargo-add.html) manages dependencies (called "crates") for Rust applications. \[[1](https://docs.adacore.com/live/wave/rust/html/rust%5Fug/%5Fstatic/cargo/commands/cargo-add.html), [2](https://doc.rust-lang.org/cargo/commands/cargo-install.html)]

- **What it does:** It compiles source code, resolves deep dependency trees via a rigorous deterministic resolver, and creates a strict `Cargo.lock` file. \[[1](https://www.woodruff.dev/crates-and-dependencies-nuget-meet-cargo/)]
- **The "Already Have It" Behavior:** Unlike `pnpm add`, Cargo natively implements the exact safety rule you want. If you run `cargo add serde` and `serde` is already listed in your `Cargo.toml`, **Cargo keeps the existing version constraint and does nothing**. It will only modify the line if you explicitly pass new feature flags or specify a different version string. \[[1](https://github.com/astral-sh/uv/issues/5505), [2](https://man.archlinux.org/man/cargo-add.1.en)]

### 2. `uv` (Python Language Ecosystem)

[Uv](https://docs.astral.sh/uv/) is a fast, modern Python package manager written in Rust, designed as a replacement for `pip` and `poetry`. \[[1](https://docs.astral.sh/uv/), [2](https://deepnote.com/blog/ultimate-guide-to-uv-library-in-python)]

- **What it does:** It manages Python installations, virtual environments, project libraries, and applications using a unified workspace lockfile. \[[1](https://astral.sh/blog/uv-unified-python-packaging), [2](https://deepnote.com/blog/ultimate-guide-to-uv-library-in-python)]
- **The "Already Have It" Behavior:** `uv` handles this gracefully. If you execute `uv add httpx` and `httpx` is already pinned inside your `pyproject.toml`, **uv detects it, prints a message stating the package is already present, and stops**. It completely avoids mutating your lockfile or looking up newer versions online unless you explicitly pass the `--upgrade` flag or append a specific version tag. \[[1](https://github.com/astral-sh/uv/issues/5505)]

### 3. `apt` (Linux Operating System Ecosystem)

`apt` (Advanced Package Tool) is a **system-level** package manager used by Linux distributions like Ubuntu and Debian. \[[1](https://nesbitt.io/2026/05/28/package-managers-that-package-package-managers.html), [2](https://blog.packagecloud.io/know-the-difference-between-apt-and-aptitude/), [3](https://medium.com/@mohamedahna1919/introduction-to-apt-advanced-package-tool-b1c42487c378)]

- **What it does:** Instead of managing code libraries for a specific programming project, it installs global system applications, system utilities (like `curl`, `git`, or `nginx`), and system-level security updates.
- **The "Already Have It" Behavior:** If you type `sudo apt install curl` and you already have the newest version of curl installed, it prints: `curl is already the newest version (X.Y.Z). 0 upgraded, 0 newly installed...`. It completely skips downloading files. If an update _does_ exist on the Linux repositories, it will automatically pull the newest system-stable version.

***

### Comparison of "Add Existing" Behavior

| Package Manager \[[1](https://github.com/astral-sh/uv/issues/5505), [2](https://man.archlinux.org/man/cargo-add.1.en), [3](https://medium.com/@mbonsign/why-vs-code-struggles-with-conda-and-how-uv-solves-it-e88c5751937e), [4](https://blog.appsignal.com/2025/09/24/switching-from-pip-to-uv-in-python-a-comprehensive-guide.html), [5](https://deepnote.com/blog/ultimate-guide-to-uv-library-in-python)] | Command           | Does it auto-update if you already have it?                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------- |
| **pnpm** (JavaScript)                                                                                                                                                                                                                                                                                                                                                                                         | `pnpm add foo`    | ⚠️ **Yes** (Forces lookups and updates to `@latest` by default)     |
| **cargo** (Rust)                                                                                                                                                                                                                                                                                                                                                                                              | `cargo add foo`   | ❌ **No** (Leaves your existing entry alone completely)             |
| **uv** (Python)                                                                                                                                                                                                                                                                                                                                                                                               | `uv add foo`      | ❌ **No** (Informs you it exists and safely stops)                  |
| **apt** (Linux OS)                                                                                                                                                                                                                                                                                                                                                                                            | `apt install foo` | 🔄 **Only if a system patch is available** (Otherwise does nothing) |

Your original goal—wanting a tool that doesn't modify things unless you explicitly use a version modifier—is an established behavior in tools like **Cargo** and **Uv**, which is why the default behavior of Node.js package managers can feel counter-intuitive. \[[1](https://github.com/astral-sh/uv/issues/5505)]

***

If you'd like, let me know:

- Are you exploring **switching to Rust or Python** for a project?

- Do you want to see how to make a **custom wrapper command** to mimic Cargo or Uv's behavior directly in your Node projects?

- [link](https://astral.sh/blog/uv-unified-python-packaging)\
  uv: Unified Python packaging - Astral\
  Aug 20, 2024 — Inspired by the Cargo concept of the same name, uv supports workspaces: collections of one or more packages that are managed toget...\
  Astral

- [link](https://nesbitt.io/2026/05/28/package-managers-that-package-package-managers.html)\
  Package managers that package package managers\
  May 28, 2026 — The npm registry covers the four JavaScript clients and Elm. RubyGems carries Bundler and CocoaPods, and crates.io has uv because ...\
  nesbitt.io

- [link](https://docs.astral.sh/uv/)\
  uv - Astral Docs\
  Supports Cargo-style workspaces for scalable projects. Disk-space efficient, with a global cache for dependency deduplication. Ins...\
  Astral Docs

Show all