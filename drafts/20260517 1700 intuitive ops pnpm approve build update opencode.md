<!-- opencode could either "skip" or "update" (does not work, idk.), but not "skip indefinitely for this version" or "stop auto check" at least on the same dialog. -->

<!-- pnpm could not approve build after installation?! -->

ive installed via pnpm. ~ % opencode Error: opencode-ai's postinstall script was not run. This occurs when using --ignore-scripts during installation, or when using a package manager like pnpm that does not run postinstall scripts by default. To fix this, run the postinstall script manually: cd node\_modules/opencode-ai && node postinstall.mjs Or reinstall opencode-ai without the --ignore-scripts flag.

Root Cause

By default, `pnpm` blocks arbitrary execution scripts for security. It requires explicit user approval to run a package's `postinstall` script. \[[1](https://github.com/advisories/GHSA-379q-355j-w6rj), [2](https://medium.com/@praveenmistry/the-silent-threat-in-your-npm-install-a-wake-up-call-for-node-js-developers-64c94bdc0302), [3](https://medium.com/@philip.mutua/my-experience-with-pnpm-approve-builds-from-confusion-to-clarity-7aa42c5956a7)]

Solution 1: Authorize and Run Automatically

Allow `pnpm` to execute scripts for this specific package. Run this command in your project root: \[[1](https://medium.com/@praveenmistry/the-silent-threat-in-your-npm-install-a-wake-up-call-for-node-js-developers-64c94bdc0302)]

bash

```
pnpm config set side-effects-cache false
pnpm approve-builds opencode-ai
pnpm install
```

Use code with caution.

Solution 2: Run the Script Manually

Execute the script directly using `node` as indicated in the error message:

bash

```
node node_modules/opencode-ai/postinstall.mjs
```

Use code with caution.

Solution 3: Enable Global Scripts

Enable script execution for all packages in the project. Add a `.npmrc` file to your project root with this line: \[[1](https://issuetracker.google.com/issues/143810864?gl=us)]

ini

```
only-built-dependencies[] = opencode-ai
```

Use code with caution.

Then run:

bash

```
pnpm install
```

Use code with caution.

To help find the best fix, let me know:

- Are you installing this **globally** or **locally** inside a project?

- Which **operating system** (macOS, Windows, Linux) are you using?

- Do you need a **CI/CD pipeline** configuration for this deployment?

- [link](https://github.com/advisories/GHSA-379q-355j-w6rj)\
  pnpm v10+ Bypass "Dependency lifecycle scripts execution disabled by default" · CVE-2025-69264 · GitHub Advisory Database · GitHub\
  Jan 6, 2026 — Summary A security bypass vulnerability in pnpm v10+ allows git-hosted dependencies to execute arbitrary code during pnpm install ...\
  \
  \
  GitHub

- [link](https://medium.com/@praveenmistry/the-silent-threat-in-your-npm-install-a-wake-up-call-for-node-js-developers-64c94bdc0302)\
  The Silent Threat in Your npm install: A Wake-Up Call for Node.js Developers\
  May 15, 2025 — Embrace pnpm: This modern package manager isolates packages within your node\_modules directory and, by default, does not execute i...\
  \
  \
  Medium

- [link](https://medium.com/@philip.mutua/my-experience-with-pnpm-approve-builds-from-confusion-to-clarity-7aa42c5956a7)\
  🛠 My Experience With pnpm approve-builds — From Confusion to Clarity\
  Aug 12, 2025 — In newer versions, pnpm added a security feature that stops certain packages from running postinstall scripts unless I explicitly ...\
  \
  \
  Medium

Show all

use --allow-build= flag

Fix via `--allow-build`

You can force `pnpm` to run the postinstall script during installation by appending the `--allow-build` flag.

Run this command in your terminal:

bash

```
pnpm install opencode-ai --allow-build=opencode-ai
```

Use code with caution.

Global Installation Alternative

If you are installing the package globally, append the global flag:

bash

```
pnpm add -g opencode-ai --allow-build=opencode-ai
```

Use code with caution.

To ensure this fully resolves your setup, let me know:

- Did the installation **succeed** after running this command?
- Does the `opencode` command now **execute correctly** in your terminal?

registry.npmmirror.com

\~ % opencodeError: opencode-ai's postinstall script was not run.This occurs when using --ignore-scripts during installation, or when using apackage manager like pnpm that does not run postinstall scripts by default.To fix this, run the postinstall script manually: cd node\_modules/opencode-ai && node postinstall.mjsOr reinstall opencode-ai without the --ignore-scripts flag. ~ % pnpm add -g --allow-build=opencode-ai opencode-ai@latest WARN Request took 20322ms: https://registry.npmmirror.com/opencode-ai WARN 1 deprecated subdependencies found: node-domexception@1.0.0Already up to dateProgress: resolved 1109, reused 949, downloaded 0, added 0, done WARN Issues with peer dependencies found.└─┬ openclaw 2026.5.7 └─┬ @slack/bolt 4.7.2 └── ✕ unmet peer @types/express@^5.0.0: found 4.17.25Done in 24.4s using pnpm v10.30.2 ~ % opencodeError: opencode-ai's postinstall script was not run.This occurs when using --ignore-scripts during installation, or when using apackage manager like pnpm that does not run postinstall scripts by default.To fix this, run the postinstall script manually: cd node\_modules/opencode-ai && node postinstall.mjsOr reinstall opencode-ai without the --ignore-scripts flag. ~ % pnpm approve-builds opencode-aiThere are no packages awaiting approval ~ % opencodeError: opencode-ai's postinstall script was not run.This occurs when using --ignore-scripts during installation, or when using apackage manager like pnpm that does not run postinstall scripts by default.To fix this, run the postinstall script manually: cd node\_modules/opencode-ai && node postinstall.mjsOr reinstall opencode-ai without the --ignore-scripts flag.

Root Cause

The `--allow-build` flag was skipped because `pnpm` saw the package was `Already up to date` (downloaded 0, added 0). It did not trigger a fresh installation or run the build script.

Solution 1: Force Reinstallation

Force `pnpm` to fetch, overwrite, and build the package from scratch. Run this command:

bash

```
pnpm add -g --force --allow-build=opencode-ai opencode-ai@latest
```

Use code with caution.

Solution 2: Run the Global Script Manually

If the forced install still skips the script, find where `pnpm` stores your global modules and run the file directly.

**For macOS/Linux:**

bash

```
node $(pnpm store path)/../global/5/node_modules/opencode-ai/postinstall.mjs
```

Use code with caution.

_(If the path above is not found, look inside your global active store directory or run `pnpm root -g` to locate the `opencode-ai` folder)._

Solution 3: Reinstall using npm

If `pnpm` global lifecycle scripts continue to fail, use `npm` for this specific global CLI tool. It runs postinstall scripts by default:

bash

```
npm install -g opencode-ai
```

Use code with caution.

To make sure we get this working, let me know:

- Did the **`--force`** command successfully trigger the postinstall script?
- If you ran the **`npm`** alternative, did it resolve the execution error?
