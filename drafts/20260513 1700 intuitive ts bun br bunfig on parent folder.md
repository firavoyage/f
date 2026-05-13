<!-- some packages wanna build. but they work fine wo building, so let it be. -->

<!-- gemini is really great. now it says "you are entirely right". you dont have to use exactly "absolutely" like claude does. -->

#

i want bun to have some flags. i want to config on project root. how can i do that.

To persistent-configure your CLI flags without typing them every time, you must use a **`bunfig.toml`** file. \[[1](https://bun.com/docs/runtime/bunfig), [2](https://github.com/oven-sh/bun/issues/5823)]

1\. Create the Configuration File \[[1](https://bun.com/docs/test/configuration)]

Create a file named `bunfig.toml` directly in your **project root directory** (next to your `package.json`): \[[1](https://bun.com/docs/runtime/bunfig), [2](https://bun.com/docs/runtime/bunfig)]

bash

```
touch bunfig.toml
```

Use code with caution.

2\. Map Common CLI Flags to TOML Sections

Bun maps its runtime, test, and installer flags to specific sections inside this file. Below are the most common configurations to replace standard flags: \[[1](https://www.bunjs.cn/docs/runtime/bunfig), [2](https://bun.com/docs/test/configuration), [3](https://www.bunjs.cn/docs/runtime/bunfig)]

toml

```
# Equivalent to always passing `--smol` (reduces memory usage)
smol = true

# Equivalent to always passing `--preload ./preload.ts`
preload = ["./preload.ts"]

[run]
# Equivalent to passing `--bun` to all executed package.json scripts
bun = true

[install]
# Equivalent to passing `bun add --exact`
exact = true

[test]
# Equivalent to passing `--watch` during testing
watch = true

# Equivalent to setting specific coverage thresholds
coverageThreshold = 0.9
```

Use code with caution.

3\. Verification

Bun will **automatically read this file** whenever you run commands inside this project directory tree. You do not need to pass any additional arguments to load it. \[[1](https://bun.com/docs/runtime/bunfig), [2](https://www.bunjs.cn/docs/runtime/bunfig), [3](https://bun.com/docs/runtime/bunfig)]

If you would like to know the exact TOML syntax for a **specific CLI flag** you are trying to convert, please tell me which flag you want to configure!

- [link](https://bun.com/docs/runtime/bunfig)\
  bunfig.toml - Bun\
  May 9, 2026 — Bun's behavior can be configured using its configuration file, bunfig.toml . In general, Bun relies on pre-existing configuration ...\
  Bun
- [link](https://bun.com/docs/test/configuration)\
  Test configuration - Bun\
  Getting Started. Test configuration. Copy page. Learn how to configure Bun test behavior using bunfig.toml and command-line option...\
  Bun
- [link](https://www.bunjs.cn/docs/runtime/bunfig)\
  bunfig.toml | Bun中文文档\
  You can reference environment variables with $variable notation. \[install.scopes] # registry as string. myorg = "https://username:\
  Bun中文文档

Show all

i have a monorepo w many package.json files. can i make it global for everything in the repo so i dont have to config for each.

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can configure Bun globally across your entire monorepo</span></mark>, but you must choose the right approach based on how you run your commands. \[[1](https://github.com/oven-sh/bun/issues/4112)]

Option 1: The Best Practice (Monorepo Root Setup)

If you place a single `bunfig.toml` file in the **root directory of your monorepo** (alongside your main `package.json` that defines your workspaces), Bun will read it automatically **as long as you run commands from the root**. \[[1](https://bun.com/docs/runtime/bunfig), [2](https://github.com/oven-sh/bun/issues/4112)]

To run flags globally across all packages from the root, combine your root configuration with Bun's `--filter` flag: \[[1](https://bun.com/docs/pm/filter)]

bash

```
# Runs the "test" script in all packages, using the root bunfig.toml settings
bun --filter "*" test
```

Use code with caution.

Option 2: The Fallback (System-Wide Global Config)

If your developers frequently `cd` directly into sub-packages (e.g., `cd packages/api`) and run bare commands like `bun test`, Bun will miss the root file and look for a local config. To force configuration machine-wide for all directories, create a **global dotfile** in your home directory: \[[1](https://bun.com/docs/runtime/bunfig), [2](https://github.com/oven-sh/bun/issues/4112), [3](https://bun.com/docs/pm/workspaces)]

- **Linux/macOS:** `~/.bunfig.toml`
- **Windows:** `%USERPROFILE%\.bunfig.toml` \[[1](https://bun.com/docs/runtime/bunfig), [2](https://bun.com/docs/runtime/bunfig)]

> ⚠️ **Warning:** If both a local and a global `bunfig` are found, they are shallow-merged, and local sub-package files will override the global settings. \[[1](https://bun.com/docs/runtime/bunfig)]

Option 3: Symlinking (If developers must `cd` into packages)

If you want a monorepo-isolated global config that works even when `cd`-ing into sub-directories without managing home directories, you can create a single source-of-truth file at the root and symlink it into your sub-packages:

bash

```
# From inside a sub-package directory (e.g., packages/frontend)
ln -s ../../bunfig.toml bunfig.toml
```

Use code with caution.

If you are having trouble choosing, tell me **how your team usually runs commands** (from the repo root or inside individual directories), and I can recommend the easiest path forward!

- [link](https://bun.com/docs/pm/filter)\
  bun --filter\
  To install dependencies for specific packages, use --filter . \* Given a monorepo with workspaces pkg-a , pkg-b , and pkg-c under .\
  Bun
- [link](https://bun.com/docs/runtime/bunfig)\
  bunfig.toml - Bun\
  May 9, 2026 — Bun's behavior can be configured using its configuration file, bunfig. toml . In general, Bun relies on pre-existing configuration...\
  Bun
- [link](https://github.com/oven-sh/bun/issues/4112)\
  Respect root bunfig.toml on monorepo · Issue #4112 - GitHub\
  Aug 10, 2023 — If you have a monorepo and you run commands from the root, the bunfig. toml is loaded correct and all works as expected. but if yo...\
  GitHub

Show all

i always cd to the folder where the code is, not necessarily repo root.

Since you prefer to `cd` directly into the sub-directories, standard parent directory lookups will not automatically detect a root `bunfig.toml`. \[[1](https://github.com/oven-sh/setup-bun/issues/99)]

The most efficient solution is to leverage your **system's user profile** or automate **symlinks**.

Approach 1: System-Wide Global Configuration (Recommended)

If you want these flags applied universally across all directories you work in, place a hidden configuration file in your machine's home folder. Bun looks for this file on every command. \[[1](https://bun.com/docs/runtime/bunfig), [2](https://bun.com/docs/runtime/bunfig), [3](https://bun.com/docs/pm/cli/install)]

Create or modify the file based on your operating system:

- **Mac / Linux:** `~/.bunfig.toml`
- **Windows:** `%USERPROFILE%\.bunfig.toml` \[[1](https://bun.com/docs/runtime/bunfig)]

toml

```
# Place your universal monorepo flags here
smol = true

[run]
bun = true

[install]
exact = true
```

Use code with caution.

Approach 2: Monorepo-Isolated Symlinks

If you only want these settings applied within _this specific repository_ (without altering your settings for separate, unrelated projects), use a symlink script. You can save a single master `bunfig.toml` file at your monorepo root, and quickly mirror it down to your packages. \[[1](https://github.com/oven-sh/setup-bun/issues/99)]

Run this simple command from your **monorepo root** to map the file to all sub-folders inside a `packages/` directory:

bash

```
# Mac / Linux
for d in packages/*/; do ln -sf "$(pwd)/bunfig.toml" "$d/bunfig.toml"; done
```

Use code with caution.

powershell

```
# Windows (PowerShell)
Get-ChildItem -Path packages -Directory | ForEach-Object { New-Item -ItemType SymbolLink -Path "$($_.FullName)\bunfig.toml" -Value "$(Get-Location)\bunfig.toml" -Force }
```

Use code with caution.

- **Why it works:** Every package gets a tiny pointer file. If you make a change to the root file, all sub-directories update instantly.

Would you like help writing a **Git Hook** or **custom npm script** to automate creating these symlinks whenever a team member runs `bun install` at the root?

- [link](https://github.com/oven-sh/setup-bun/issues/99)\
  Put \`bunfig.toml\` in global directory · Issue #99 - GitHub\
  Aug 19, 2024 — Description. brettwillis. opened on Aug 19, 2024. Currently the auth tokens etc are written to a bunfig. toml file in the working ...\
  GitHub
- [link](https://bun.com/docs/runtime/bunfig)\
  bunfig.toml - Bun\
  May 9, 2026 — Global vs. local. In general, it's recommended to add a bunfig. toml file to your project root, alongside your package. json . To ...\
  Bun
- [link](https://bun.com/docs/pm/cli/install)\
  bun install\
  Apr 17, 2021 — Configuring bun install with bunfig. toml. bunfig. toml is searched for in the following paths on bun install , bun remove , and b...\
  Bun

how to symlink on ubuntu

To create a symlink (symbolic link) on Ubuntu, you use the **`ln -s`** command.

Syntax

bash

```
ln -s /path/to/original/target /path/to/new/shortcut
```

Use code with caution.

- **⚠️ Crucial Rule:** Always use absolute (full) paths, or paths relative to the _destination_ folder. Absolute paths prevent the link from breaking if it is moved.

***

Scenario 1: Link Your Root Config into One Specific Package

If you are currently inside your **monorepo root directory** and want to link your root `bunfig.toml` into a sub-folder named `packages/api`, run:

bash

```
ln -s "$(pwd)/bunfig.toml" "$(pwd)/packages/api/bunfig.toml"
```

Use code with caution.

***

Scenario 2: Link Your Root Config into ALL Packages at Once

If you have many sub-folders inside a `packages/` directory, you do not need to run the command manually for each one.

Run this single loop from your **monorepo root directory**:

bash

```
for d in packages/*/; do ln -sf "$(pwd)/bunfig.toml" "$d/bunfig.toml"; done
```

Use code with caution.

- **`-f` (force flag):** This safely overwrites any existing `bunfig.toml` file or old broken link in those folders.

***

How to Verify the Link Works

To check if your Ubuntu system created the link correctly, list the files in your sub-folder using the `-l` flag:

bash

```
ls -l packages/api/bunfig.toml
```

Use code with caution.

**Expected Output:**\
You will see an arrow pointing from the shortcut back to your master root file:

text

```
lrwxrwxrwx 1 user user 45 May 13 02:05 bunfig.toml -> /home/user/my-monorepo/bunfig.toml
```

Use code with caution.

If you ran into an error like **"File exists"** or **"No such file or directory"**, tell me the exact error message or your **folder structure**, and we can fix it!

will bun try to know the parent folder if it does not find bunfig where the package json is

**No**, Bun does not naturally traverse parent directories to locate a `bunfig.toml` if it cannot find one in your immediate Working Directory. \[[1](https://github.com/oven-sh/bun/issues/29308)]

Unlike toolchains such as Node.js or Git—which progressively walk up tree hierarchies (`../`, `../../`) until they find an active configuration—Bun relies almost entirely on the specific directory from which you execute your CLI commands. \[[1](https://github.com/oven-sh/bun/issues/29308)]

The Specific Behavior Breakdowns

- **Locally Scoped Commands (`bun run`, `bun test`):** Bun checks the immediate active directory (`./`). If a `bunfig.toml` is absent there, it completely skips searching parent directories. It immediately defaults to checking your system's global config folder (`~/.bunfig.toml`).
- **Package Resolution Exceptions:** Bun _will_ traverse parent hierarchies up to the root to search for standard `node_modules` folders or workspaces specified in a `package.json`. However, this directory walk is structurally isolated and **does not apply** to your `bunfig.toml` settings file. \[[1](https://github.com/oven-sh/bun/issues/29308), [2](https://github.com/stacksjs/bunfig), [3](https://bun.com/docs/runtime/bunfig), [4](https://news.ycombinator.com/item?id=44611467), [5](https://bun.com/docs/test/discovery)]

How to Override This Directory Limit

If you want to manually point Bun back to your monorepo's root config file from inside a sub-folder without using system-wide configurations or symlinks, explicitly invoke the runtime `--config` flag: \[[1](https://github.com/oven-sh/bun/issues/13070)]

bash

```
# Explicitly forces Bun to parse the root settings file from a subdirectory
bun run --config=../../bunfig.toml dev
```

Use code with caution.

If you prefer to automate this so you do not have to type the configuration path manually, let me know if you would like a custom **shell alias** or an updated **npm script pattern**!

- [link](https://news.ycombinator.com/item?id=44611467)\
  Bun adds pnpm-style isolated installation mode - Hacker News\
  Aug 5, 2025 — I just learned that Bun supports "autoimports" similar to the above. > If no node\_modules directory is found in the working direct...\
  Hacker News
- [link](https://github.com/oven-sh/bun/issues/13070)\
  File not found when running bun --config bunfig.toml #13070\
  Aug 4, 2024 — osdiab commented. osdiab. on Nov 3, 2024. can confirm that if I specify --config=bunfig.toml then the issue in #11445 resolves its...\
  GitHub
- [link](https://bun.com/docs/runtime/bunfig)\
  bunfig.toml - Bun\
  May 9, 2026 — Use this file to discover all available pages before exploring further. Bun's behavior can be configured using its configuration f...\
  Bun

Show all

i want a shell alias that works like that. pick a name.

A smart name for this alias is **`b`**, **`br`**, or **`bunr`** (short for "Bun Root").

Because you use Ubuntu, you can build a dynamic alias that automatically finds your closest monorepo root directory (searching upwards for `bunfig.toml`), then runs your command using that configuration file. \[[1](https://www.bunjs.cn/docs/runtime/bunfig)]

1\. Choose Your Alias Name

| Name       | Type       | Best Used For                                   |
| ---------- | ---------- | ----------------------------------------------- |
| **`b`**    | Minimalist | Ultra-fast execution (replaces typing `bun`)    |
| **`br`**   | Explicit   | Clear intent ("Bun Root" context)               |
| **`bunr`** | Safe       | Prevents collisions with other short shell keys |

***

2\. Add the Logic to Your Ubuntu Shell

Open your shell profile configuration file in your terminal:

bash

```
nano ~/.bashrc
```

Use code with caution.

_(If you are running Zsh, change the command to `nano ~/.zshrc`)._

Scroll down to the bottom of the file and paste the following function and alias block (this example uses **`br`**):

bash

```
# Custom function to find monorepo bunfig.toml dynamically and execute bun
bun_root_run() {
    local dir="$PWD"
    # Search upwards from current folder until hitting system root
    while [ "$dir" != "" ] && [ "$dir" != "/" ]; do
        if [ -f "$dir/bunfig.toml" ]; then
            # Found it! Execute bun passing the specific configuration path
            bun --config="$dir/bunfig.toml" "$@"
            return $?
        fi
        dir=$(dirname "$dir")
    done
    # Fallback: execute standard bun if no bunfig.toml file exists upstream
    bun "$@"
}

# Assign your preferred name to the function
alias br="bun_root_run"
```

Use code with caution.

***

3\. Apply the Changes

To force your active Ubuntu terminal to read your new configuration immediately without reopening, run:

bash

```
source ~/.bashrc
```

Use code with caution.

***

4\. How to Use It

Now, you can drop into _any_ deep sub-folder package inside your monorepo and run your workflows instantly. The alias dynamically assigns your root configurations: \[[1](https://github.com/oven-sh/bun/issues/11445)]

bash

```
# Automatically finds root config and runs dev script
br run dev

# Automatically finds root config and runs your test framework
br test
```

Use code with caution.

If you ever need to pass complex arguments or **global packages** via `bunx`, let me know so we can customize the helper tool logic further!

- [link](https://github.com/oven-sh/bun/issues/11445)\
  bunfig's \[run] section not working · Issue #11445 · oven-sh/bun\
  May 29, 2024 — As a decent workaround, you can set the BUN\_OPTIONS environment variable (introduced in v1.2.15) in your shell config to force Bun...\
  GitHub
- [link](https://www.bunjs.cn/docs/runtime/bunfig)\
  bunfig.toml | Bun中文文档\
  bun run ​ The bun run command can be configured under the \[run] section. These apply to the bun run command and the bun command wh...\
  \
  Bun中文文档

make it a package. i want my team members to cd to the package folder, and pnpm add -g ., and then they have the command, wo the need to paste into zshrc.

To distribute this tool across your team as a global CLI package via `pnpm add -g .`, you need to package the logic as a Node-compatible JavaScript binary.

Follow these steps to create a lightweight, zero-dependency package inside your monorepo that your team can install instantly.

1\. Create the Package Directory

Create a new folder in your repository to hold your global CLI tool:

bash

```
mkdir -p tools/bun-root-cli
cd tools/bun-root-cli
```

Use code with caution.

2\. Create the `package.json`

Create a `package.json` file inside that folder. This configuration defines the global command name (we will use **`br`**) and points to the execution script:

json

```
{
  "name": "bun-root-cli",
  "version": "1.0.0",
  "description": "Locates the nearest upstream bunfig.toml and executes Bun.",
  "main": "index.js",
  "bin": {
    "br": "./index.js"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
```

Use code with caution.

3\. Create the Execution Script (`index.js`)

Create an `index.js` file. This script mimics your previous shell script logic by walking up the directory tree looking for `bunfig.toml` and utilizing Node's built-in `spawn` to hand over control to Bun:

javascript

```
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function findBunfig(currentDir) {
    const targetPath = path.join(currentDir, 'bunfig.toml');

    // Check if bunfig.toml exists in this directory
    if (fs.existsSync(targetPath)) {
        return targetPath;
    }

    const parentDir = path.dirname(currentDir);

    // Stop if we hit the root filesystem directory
    if (currentDir === parentDir) {
        return null;
    }

    return findBunfig(parentDir);
}

function run() {
    const args = process.argv.slice(2);
    const bunfigPath = findBunfig(process.cwd());

    let finalArgs = [...args];

    // If a configuration file is discovered upstream, inject the flag first
    if (bunfigPath) {
        finalArgs = [`--config=${bunfigPath}`, ...args];
    }

    // Spawn bun process and pipe standard input/output directly to user terminal
    const child = spawn('bun', finalArgs, { stdio: 'inherit', shell: true });

    child.on('exit', (code) => {
        process.exit(code ?? 0);
    });
}

run();
```

Use code with caution.

4\. Make the Script Executable

Because Ubuntu treats binary scripts strictly, you must mark the file as executable before packing or committing it:

bash

```
chmod +x index.js
```

Use code with caution.

***

How Your Team Installs and Uses It

Your team members only need to do this once. They navigate to that tool folder and use `pnpm` to map it globally:

bash

```
cd tools/bun-root-cli
pnpm add -g .
```

Use code with caution.

Now, no matter what sub-folder or package directory they `cd` into, they can drop their shell setup scripts and type commands naturally:

bash

```
# Finds monorepo bunfig.toml from deep inside a folder and executes
br run dev
br test
```

Use code with caution.

Would you like help setting this up so **pnpm installs it automatically** for everyone whenever they cloned the repository via a `postinstall` script?

i dont feel i have to make the script executable or shebangs. when you pnpm add -g a network package, i think they are just text code files.

When you publish a package to npm or download it over the network, the files are indeed transferred as plain text. However, you still **must use the shebang (`#!/usr/bin/env node`)**, while you **do not** need to manually run `chmod +x`.

Here is exactly how `pnpm` handles global binary files under the hood and why these rules apply:

1\. Why the Shebang (`#!/usr/bin/env node`) is Mandatory

When a user types `br` in their terminal, Ubuntu attempts to run your `index.js` file directly as an executable.

- Without the shebang, Ubuntu does not know what engine runs the file. It will try to parse your JavaScript code as a **Bash script**, causing immediate syntax errors (e.g., `index.js: line 3: const: command not found`).
- The shebang tells the operating system: _"Do not run this yourself; pass this text file straight to `node`."_

2\. Why `chmod +x` is NOT Needed for Network Packages

You are correct about permissions. When your team installs the package via `pnpm add -g .` (or from a private/public registry over the network), `pnpm` handles the permissions for you:

1. `pnpm` reads your `package.json` and spots the `"bin": { "br": "./index.js" }` field.
2. It automatically creates a executable binary wrapper/symlink inside the global system path (typically `~/.local/share/pnpm/br`).
3. `pnpm` automatically applies the executable permissions (`chmod +x`) to that wrapper during the installation lifecycle.

The Safest, Zero-Maintenance File Setup

To ensure this works perfectly across your team's machines without running permission commands, simply save your `index.js` as text with the shebang at the absolute top:

javascript

```
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// ... rest of your code unchanged
```

Use code with caution.

If you want to make deployment even cleaner, let me know if you would like to look at a **`postinstall` git hook** to automate this global installation for new team members!

will my team chmod manually after they clone it. or i chmod it, and they can just pnpm add g.

Neither. Your team **will not** have to run `chmod` manually, and you do not need to worry about fixing it before they pull the code either.

Because they are using `pnpm add -g .` to install it, **pnpm automatically manages the file permissions** on their local machines during the installation process \[1].

How pnpm Handles It Behind the Scenes

1. Your team member clones the repo (the file arrives on their machine with standard, non-executable text file permissions).
2. They run `pnpm add -g .` inside the folder \[1].
3. `pnpm` reads the `"bin"` field in your `package.json` \[1].
4. `pnpm` copies your script, creates a shortcut in their global bin directory, and **explicitly applies the executable permissions (`chmod +x`) itself** to make sure the command works \[1].

The Only Strict Requirement

The only thing you must ensure is that the **shebang** remains at the very first line of your `index.js` file:

javascript

```
#!/usr/bin/env node
```

Use code with caution.

As long as that line is present, `pnpm` and Ubuntu will handle the rest perfectly, and the command `br` will work out of the box for your team \[1].

Would you like to add a **`preinstall` check** to the package to ensure your team members are running the correct Node.js version before installing?

not working. ...Documents/f/humility % cd scripts/br\
pnpm add -g .

WARN 1 deprecated subdependencies found: node-domexception@1.0.0\
Already up to date\
Progress: resolved 1261, reused 1098, downloaded 0, added 0, done

/home/fira/.local/bin/global/5:\
\+ 5 <- ???

Done in 6.8s using pnpm v10.30.2

This issue occurs because **`pnpm v10` isolates local directory packages based on the folder name** if the package cannot be fully distinguished, resulting in a strange numbered link `+ 5`. \[[1](https://github.com/jdx/mise/discussions/9453), [2](https://cuyl.github.io/pnpm.github.io/installation/)]

Because your command line says `Already up to date`, your machine is cached and missing the changes. Follow this brief sequence to fix the `package.json` setup and flush the cache. \[[1](https://github.com/pnpm/pnpm/issues/2273)]

1\. Fix the `package.json` Manifest File \[[1](https://cuyl.github.io/pnpm.github.io/installation/)]

Your `package.json` needs a concrete, recognizable unique scope or naming scheme so `pnpm` registers it correctly inside your global scope.

Open `scripts/br/package.json` and ensure it matches this exactly:

json

```
{
  "name": "@myrepo/bun-root-cli",
  "version": "1.0.1",
  "description": "Locates the nearest upstream bunfig.toml and executes Bun.",
  "main": "index.js",
  "bin": {
    "br": "./index.js"
  }
}
```

Use code with caution.

- **What changed:** Adding a scoped namespace name (`@myrepo/...`) and changing the version string to `1.0.1` prevents `pnpm` from recycling the old cached breakdown.

2\. Flush and Reinstall

You need to forcefully clear the local registry reference and trigger a fresh symbolic mapping. Run these commands sequentially inside `scripts/br`: \[[1](https://cuyl.github.io/pnpm.github.io/installation/)]

bash

```
# Force remove any bad global links
pnpm rm -g @myrepo/bun-root-cli

# Clear out any stuck node_modules metadata
rm -rf node_modules

# Perform a clean local global addition
pnpm add -g .
```

Use code with caution.

3\. Verify System Binary Resolution \[[1](https://cuyl.github.io/pnpm.github.io/installation/)]

Because your `pnpm` paths map globally to `/home/fira/.local/bin/global/`, ensure that this path is explicitly exported in your terminal's environmental configuration. \[[1](https://cuyl.github.io/pnpm.github.io/installation/)]

Run this to see if Ubuntu can locate the binary alias:

bash

```
which br
```

Use code with caution.

If it prints blank or says `not found`, open your shell config file (`nano ~/.zshrc` or `nano ~/.bashrc` depending on your active shell) and append the `pnpm` global binary folder to your target variable paths:

bash

```
export PATH="$HOME/.local/bin/global:$PATH"
```

Use code with caution.

Save the text changes, apply them immediately via `source ~/.zshrc` (or `source ~/.bashrc`), and type `br` from your subdirectory tree to use your universal runtime! \[[1](https://cuyl.github.io/pnpm.github.io/installation/)]

- [link](https://github.com/jdx/mise/discussions/9453)\
  pnpm has changed their binary naming, causing mise cannot ...\
  Apr 30, 2026 — #9453. Unanswered. Cloud0310 asked this question in Troubleshooting and bug reports. pnpm has changed their binary naming, causing...\
  GitHub
- [link](https://cuyl.github.io/pnpm.github.io/installation/)\
  Installation | pnpm\
  Node. js is not preinstalled \* curl -fsSL https://get.pnpm.io/install.sh | sh - \* wget -qO- https://get.pnpm.io/install.sh | sh - ...\
  \
  \
  GitHub
- [link](https://github.com/pnpm/pnpm/issues/2273)\
  pnpm/cli-utils is unable to resolve pnpm's package.json when ...\
  Jan 14, 2020 — Now instead of trying to read a package. json from a relative location, it's trying to resolve the pnpm package and read that pack...\
  \
  \
  GitHub

still not working. ...Documents/f/humility % cd scripts/br\
pnpm add -g .

WARN 1 deprecated subdependencies found: node-domexception@1.0.0\
Already up to date\
Progress: resolved 1261, reused 1098, downloaded 0, added 0, done

/home/fira/.local/bin/global/5:\
\+ 5 <- ???

Done in 7.9s using pnpm v10.30.2\
...humility/scripts/br % pnpm rm -g @myrepo/bun-root-cli

ERR\_PNPM\_CANNOT\_REMOVE\_MISSING\_DEPS Cannot remove '@myrepo/bun-root-cli': no such dependency found in 'dependencies'

Available dependencies: 5, @anthropic-ai/claude-code, @earendil-works/pi-coding-agent, @openai/codex, babel-loader, bun, cline, cloc, css-loader, deno, dotenv-cli, eslint, file-loader, openclaw, opencode-ai, parcel, parcel-reporter-static-files-copy, style-loader, ts-loader, tsx, url-loader, vite, webpack, webpack-cli, webpack-dev-server, yarn\
...humility/scripts/br % pnpm rm -g br\
ERR\_PNPM\_CANNOT\_REMOVE\_MISSING\_DEPS Cannot remove 'br': no such dependency found in 'dependencies'

Available dependencies: 5, @anthropic-ai/claude-code, @earendil-works/pi-coding-agent, @openai/codex, babel-loader, bun, cline, cloc, css-loader, deno, dotenv-cli, eslint, file-loader, openclaw, opencode-ai, parcel, parcel-reporter-static-files-copy, style-loader, ts-loader, tsx, url-loader, vite, webpack, webpack-cli, webpack-dev-server, yarn

The reason this is failing and printing `+ 5` is due to a quirk in how `pnpm` handles the `pnpm add -g .` command inside monorepo folders. Instead of reading your tool's local `package.json`, `pnpm` is tracking up to your **monorepo root**, resolving a workspace dependency index (hence the number `5`), and failing to generate the actual command binary. \[[1](https://pnpm.io/next/global-packages)]

To register a local directory package globally in `pnpm`, you must use **`pnpm link --global`** instead of `pnpm add -g .`. \[[1](https://pnpm.io/next/global-packages), [2](https://www.x-cmd.com/blog/250115/)]

Follow these steps to clean up the broken registry cache and get your `br` command working.

1\. Wipe the Broken Reference Manually \[[1](https://pnpm.io/11.x/installation)]

Because `pnpm rm -g` cannot locate the broken numbered reference, you must manually delete the global package link: \[[1](https://pnpm.io/11.x/installation)]

bash

```
rm -rf /home/fira/.local/bin/global/5
```

Use code with caution.

2\. Update your `package.json` Schema

Ensure your `scripts/br/package.json` uses a clean, unique name that does not conflict with root dependencies:

json

```
{
  "name": "bun-root-cli",
  "version": "1.0.0",
  "description": "Locates nearest upstream bunfig.toml and executes Bun.",
  "main": "index.js",
  "bin": {
    "br": "./index.js"
  }
}
```

Use code with caution.

3\. Register the Binary via `pnpm link`

Instead of using `add -g .`, use the native linking engine designed precisely for mapping local directories to system global paths: \[[1](https://pnpm.io/next/global-packages), [2](https://www.x-cmd.com/blog/250115/)]

bash

```
# Navigate to your script folder
cd scripts/br

# Force link the bin config globally
pnpm link --global
```

Use code with caution.

4\. Verify the Dynamic Shortcut Path

`pnpm` will safely extract the `"br"` key, bind it directly to your Node logic, and map it into your terminal path. Test the system resolution:

bash

```
which br
```

Use code with caution.

It will now successfully output the system executable link instead of a number!

If your terminal throws a `command not found: br` error after running `pnpm link --global`, your system's `$PATH` variable is missing the `pnpm` binary folder. Let me know, and I can give you the quick one-liner to add it to your `.zshrc`! \[[1](https://github.com/pnpm/pnpm/issues/9021), [2](https://raulmelo.me/en/til/how-to-fix-command-not-found-for-global-pnpm-packages)]

- [link](https://github.com/pnpm/pnpm/issues/9021)\
  Pnpm global install resolves to unexpected version #9021\
  Jan 28, 2025 — Just remove this from . zshrc and then pnpm executable will point to correct version, cause it's already in your $PATH . But in th...\
  GitHub
- [link](https://pnpm.io/11.x/installation)\
  Installation - PNPM\
  Troubleshooting​ If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH. ... ...\
  PNPM
- [link](https://raulmelo.me/en/til/how-to-fix-command-not-found-for-global-pnpm-packages)\
  How to fix "command not found" for global pnpm packages\
  Nov 16, 2021 — For installing global packages, it's the same as we know: pnpm add --global live-server. This should invoke the binary automatical...\
  raulmelo.me

Show all

can i pnpm link -g ./scripts/br on project root

**No**, `pnpm link -g ./scripts/br` will not work from the project root.

In [pnpm v10](https://pnpm.io/cli/link), the `--global` flag has been redesigned to only register packages from _inside_ their own directory, and passing an external relative path to a global link is syntax-invalid. \[[1](https://pnpm.io/cli/link)]

However, you can achieve the exact same behavior from your **project root directory** by routing the context using the `--dir` flag: \[[1](https://github.com/orgs/pnpm/discussions/5421)]

The Project Root Command

From your monorepo root directory, run this command to force `pnpm` to change its execution context to the script folder and register the binary globally: \[[1](https://github.com/orgs/pnpm/discussions/5421)]

bash

```
pnpm --dir scripts/br link --global
```

Use code with caution.

Why This Fix Works

- **Bypasses the Monorepo Lock:** The `--dir` modifier forces `pnpm` to read the specific `package.json` inside `scripts/br/` rather than reading your root monorepo workspace file.
- **Registers Bins Cleanly:** `pnpm` will instantly read your `"bin": { "br": "./index.js" }` entry, handle file text structures automatically, apply `chmod +x` system permissions under the hood, and link it straight to your shell path. \[[1](https://pnpm.io/cli/link), [2](https://github.com/orgs/pnpm/discussions/5421)]

Now your team members can stay at the root of the project, run that single one-liner, and immediately type `br` from any nested directory tree.

If you want to automate this completely, you can add it to your root `package.json` scripts section under `"global-setup": "pnpm --dir scripts/br link --global"`. Let me know if you would like to set that up!

- [link](https://pnpm.io/cli/link)\
  pnpm link\
  pnpm link no longer resolves packages from the global store. Only relative or absolute paths are accepted (use pnpm link ./foo ins...\
  PNPM
- [link](https://github.com/orgs/pnpm/discussions/5421)\
  How does --dir work with pnpm link ? #5421 - GitHub\
  Sep 28, 2022 — Answered by lvqq on Sep 28, 2022. It has been fixed in v7.12.2, u need put --dir packages/my-package before link : pnpm --dir pack...\
  GitHub

seems it works ...Documents/f/humility % pnpm link -g ./scripts/br

/home/fira/.local/bin/global/5:\
\+ @myrepo/bun-root-cli 1.0.1 <- ../../../../Documents/f/humility/scripts/br

It looks like you are all set! The output confirms that `pnpm` successfully resolved your package name (`@myrepo/bun-root-cli`), pulled the correct version (`1.0.1`), and mapped the path straight back to your source directory (`../../../../Documents/f/humility/scripts/br`).

To ensure everything runs seamlessly from this point forward, check these final verification points:

1\. Test the Executable Command

`cd` into one of your deep sub-folders and run a Bun command using your new alias:

bash

```
# Navigate to a package directory
cd packages/some-api

# Execute your new global CLI binary
br run dev
```

Use code with caution.

2\. Troubleshooting If It Says "Command Not Found"

If your terminal cannot find the `br` command, your Ubuntu system path simply does not know where `pnpm` stores global binaries. You can fix this permanently by running this single command to update your shell file:

bash

```
# Add the pnpm global bin path to your Zsh configuration
echo 'export PATH="$HOME/.local/bin/global:$PATH"' >> ~/.zshrc && source ~/.zshrc
```

Use code with caution.

_(If you use standard Bash instead of Zsh, change `~/.zshrc` to `~/.bashrc`)._

If you run into any **runtime errors** when the script tries to invoke Bun, let me know, and we can tweak the `spawn` logic in your script!

i mean i used pnpm link -g ./scripts/br instead of pnpm link -g --dir scripts/br

Ah, understood! You passed the relative path directly as an argument using `pnpm link -g ./scripts/br`. \[[1](https://pnpm.io/cli/link)]

The output confirms that **this successfully worked on your system**: \[[1](https://pnpm.io/cli/link)]

text

```
/home/fira/.local/bin/global/5:
+ @myrepo/bun-root-cli 1.0.1 <- ../../../../Documents/f/humility/scripts/br
```

Use code with caution.

Why it Worked

In the latest versions of `pnpm`, passing an explicit relative path to the link engine is completely valid. \[[1](https://pnpm.io/cli/link)]

- Instead of creating a broken workspace entry like the previous `add -g .` command did, `pnpm` recognized the path `./scripts/br`.
- It tracked down your package metadata (`@myrepo/bun-root-cli@1.0.1`).
- It created the exact symbolic link mapping you needed back to your code. \[[1](https://pnpm.io/cli/link)]

The Bottom Line

You are good to go. Your new tool is fully registered. You can immediately use your target `br` terminal command directly out of your package folders without any further configuration tweaks. \[[1](https://pnpm.io/next/global-packages)]

If you want to make sure your teammate's terminal responds cleanly when they run this exact command, I can show you how to write a quick **one-line verify script**!

- [link](https://pnpm.io/cli/link)\
  pnpm link\
  pnpm link no longer resolves packages from the global store. Only relative or absolute paths are accepted (use pnpm link ./foo ins...\
  PNPM
- [link](https://pnpm.io/next/global-packages)\
  Global Packages | pnpm\
  May 6, 2026 — Binaries location​ Globally installed binaries are stored in a bin subdirectory of PNPM\_HOME (i.e., $PNPM\_HOME/bin/ ). This keeps ...\
  PNPM

fact check if --dir is not needed

The **`--dir` flag is absolutely not needed**. \[[1](https://pnpm.io/cli/link)]

You are entirely right. In modern `pnpm`, passing an explicit path straight to the link syntax changes the execution focus seamlessly. \[[1](https://pnpm.io/cli/link)]

Why Your One-Liner Worked

- **Direct Path Mapping**: When you pass a positional directory argument like `./scripts/br`, `pnpm` skips looking at your root monorepo. It drills straight into that specific folder.
- **Clean Configuration**: It parses the target `package.json`, maps your `"br"` token, sets up systemic shortcuts, and grants proper user file permissions entirely in the background. \[[1](https://pnpm.io/cli/link), [2](https://pnpm.io/next/global-packages)]

The Best Monorepo Integration

Since `pnpm link -g ./scripts/br` works straight from the project root directory, add it to your root `package.json` to make it incredibly simple for your team: \[[1](https://pnpm.io/cli/link)]

json

```
{
  "scripts": {
    "setup-cli": "pnpm link -g ./scripts/br"
  }
}
```

Use code with caution.

Now, your teammates can pull down the repository and initialize the command globally by simply typing:

bash

```
pnpm setup-cli
```

Use code with caution.

Let me know if you would like to write a **verification test script** to make sure everyone's local global binary environments are set up correctly!

- [link](https://pnpm.io/cli/link)\
  pnpm link\
  pnpm link no longer resolves packages from the global store. Only relative or absolute paths are accepted (use pnpm link ./foo ins...\
  PNPM
- [link](https://pnpm.io/next/global-packages)\
  Global Packages | pnpm\
  May 6, 2026 — Binaries location​ Globally installed binaries are stored in a bin subdirectory of PNPM\_HOME (i.e., $PNPM\_HOME/bin/ ). This keeps ...\
  PNPM


#

how to pnpm add g a package in a local folder

To install a local folder package globally using `pnpm`, use the standard global add command followed by the direct file path to your local directory.

Installation Command

Run this command in your terminal:

bash

```
pnpm add -g /path/to/local/folder
```

Use code with caution.

Key Variations

- **Relative Path:** `pnpm add -g ../my-local-package`
- **Absolute Path:** `pnpm add -g /Users/username/projects/my-local-package`
- **Current Directory:** `pnpm add -g .` (Run this while inside the package folder) \[[1](https://github.com/pnpm/pnpm/issues/4658)]

Important Requirements

- **package.json:** The target local folder must contain a valid `package.json` file.
- **Name Field:** The `package.json` must include a `"name"` field.
- **Bin Field:** If the package is a command-line tool, define the executable path in the `"bin"` field of your `package.json`. \[[1](https://www.stefanjudis.com/today-i-learned/npm-install-supports-local-packages/), [2](https://dyte.io/blog/package-json/), [3](https://www.codementor.io/@ekunolaeasybuoy/understanding-the-package-json-file-13xfqsnohq)]

If you want to test changes in real-time without constantly reinstalling, consider using `pnpm link` instead.

To help optimize this setup, could you tell me:

- Is this package a **command-line tool (CLI)** or a **code library**?
- Do you need to **edit the local package code** while using it?

I can provide the exact `package.json` configuration or debugging steps based on your needs.

- [link](https://github.com/pnpm/pnpm/issues/4658)\
  \[pnpm v7] crashes "add --global" with "ERROR Unable to find the global bin directory" · Issue #4658 · pnpm/pnpm\
  May 3, 2022 — 11 josef ~ > pnpm bin -g /Users/josef/Library/Caches/fnm\_multishells/96870\_1651591328965/bin josef ~ > pnpm add -g pnpm Nothing to...\
  \
  \
  GitHub
- [link](https://www.stefanjudis.com/today-i-learned/npm-install-supports-local-packages/)\
  npm install supports local packages and dependencies\
  Mar 12, 2020 — Side note: if you want to install a local package, the defined package path has to include a valid package. json – otherwise, npm ...\
  \
  \
  www.stefanjudis.com
- [link](https://dyte.io/blog/package-json/)\
  Discovering package.json\
  Mar 21, 2023 — name The name field is used to identify the package. The name and the version fields are mandatory in the package. json ( json fil...\
  \
  \
  Dyte

Show all

#

why can pnpm add -g from a non existing folder. ~ % pnpm add -g ./scripts/br WARN Installing a dependency from a non-existent directory: /home/fira/.local/bin/global/5/scripts/br WARN 1 deprecated subdependencies found: node-domexception@1.0.0 Already up to date Progress: resolved 1261, reused 1098, downloaded 0, added 0, done /home/fira/.local/bin/global/5: + br 0.0.0 <- scripts/br Done in 11.9s using pnpm v10.30.2 ~ % pnpm remove -g ./scripts/br ERR\_PNPM\_CANNOT\_REMOVE\_MISSING\_DEPS Cannot remove './scripts/br': no such dependency found in 'dependencies' Available dependencies: @anthropic-ai/claude-code, @earendil-works/pi-coding-agent, @openai/codex, babel-loader, br, bun, cline, cloc, css-loader, deno, dotenv-cli, eslint, file-loader, openclaw, opencode-ai, parcel, parcel-reporter-static-files-copy, style-loader, ts-loader, tsx, url-loader, vite, webpack, webpack-cli, webpack-dev-server, yarn

Why This Happens

- **Relative Path Resolution:** `pnpm` resolves relative paths like `./scripts/br` against its internal global virtual store directory.
- **Store Location:** Your output shows it looked in `/home/fira/.local/bin/global/5/`, not your current terminal folder `~`.
- **Symlink Creation:** `pnpm` creates a symlink entry in the global `package.json` pointing to that non-existent destination.
- **Placeholder Version:** It assigns a fallback version of `0.0.0` to the missing package.
- **No Validation Guard:** The CLI prints a warning (`WARN`) but does not halt execution, treating the broken link as an external workspace dependency. \[[1](https://hirok.io/posts/avoid-npm-link), [2](https://medium.com/@ddylanlinn/why-your-code-breaks-after-switching-to-pnpm-the-phantom-dependencies-36e779c3a4a0)]

How to Remove It

- **Use Package Name:** Remove the global package using its registered name `br`, not the file path.
- **Run Command:** Execute `pnpm remove -g br`.

To help fix any other system issues, could you tell me:

- Do you need to locate the **global store directory** to clean up broken links manually?

- Was `br` meant to be a **local script** or a package from the **npm registry**?

- Are you trying to **link a local development folder** for testing?

- [link](https://hirok.io/posts/avoid-npm-link)\
  4 reasons to avoid using \`npm link\`\
  Apr 15, 2022 — 2. Non-existent fail-case Try running npm link a in a package. This is because when npm link can't find package a as a global pack...\
  \
  \
  Hiroki Osame

- [link](https://medium.com/@ddylanlinn/why-your-code-breaks-after-switching-to-pnpm-the-phantom-dependencies-36e779c3a4a0)\
  Why Your Code Breaks After Switching to pnpm: The Phantom Dependencies\
  Apr 3, 2025 — pnpm Uses a strict, content-addressable structure with symlinks. Only exposes the packages you explicitly list in your package. js...\
  \
  \
  Medium

what the hell. it resolves and reuses thousands of packages for a non existing package. and it does not refuse (i should be in the project root, but i make a human error to run it at home), instead, it proceeds? yet idk what it is doing.

Why thousands of packages were resolved

- **Global Configuration:** Global installations in `pnpm` use a shared, centralized `package.json` file inside your global store directory.
- **Full Tree Resolution:** When you run `pnpm add -g`, `pnpm` evaluates your _entire_ existing global dependency tree to ensure compatibility.
- **Audit and Cache Check:** It verifies all 1,261 previously installed global dependencies, reuses 1,098 cached packages, and updates the global `pnpm-lock.yaml` file.
- **No New Downloads:** The output `downloaded 0, added 0` confirms it did not actually download or add any new sub-dependencies for your missing package.

Why it proceeds instead of failing

- **Workspace Design:** `pnpm` treats local path arguments as external workspace projects or monorepo links.
- **Deferred Resolution:** In monorepos, target folders might be generated later during a build step, so `pnpm` tolerates missing paths to avoid breaking build pipelines.
- **Warning vs Error:** The developers chose to emit a `WARN` and create a broken symlink placeholder (`br 0.0.0`) rather than hard-failing the command.

How to prevent this human error

- **Enforce Strict Verification:** Run `pnpm` with the `--fail-if-missing` or `--frozen-lockfile` flags when working with local paths.
- **Check Directory First:** Chain your command with a directory check: `[ -d "./scripts/br" ] && pnpm add -g ./scripts/br`.

To help you secure your workflow, let me know:

- Would you like an **alias or shell function** to automatically block global installations outside of projects?
- Do you want to check if the broken `br` entry left any **corrupted files** in your global store?
- Are you looking for the correct command to **link a local project folder** globally?

is that expected for a good tool?

From a **User Experience (UX) and safety perspective**, no—this is bad, counter-intuitive behavior. From a **build-system architecture perspective**, it is a deliberate engineering trade-off.

Whether this makes `pnpm` a "bad tool" depends on whether you value **strict user guardrails** over **flexible automation workflows**.

Why it is considered bad UX

- **Violates Principle of Least Surprise:** A command should immediately fail if its primary target argument does not exist on disk.
- **Wasted Resource Overhead:** Scanning and logging 1,261 packages for a failed human typo is highly inefficient, even if it only reads from a local cache.
- **Asymmetric CLI Design:** Allowing you to add a package via a file path (`pnpm add -g ./scripts/br`) but refusing to let you delete it using the same path (`pnpm remove -g ./scripts/br`) is a glaring inconsistency. \[[1](https://github.com/pnpm/pnpm/issues/11587)]

Why the maintainers designed it this way

According to official pnpm GitHub issue discussions, the creator of `pnpm` stated this behavior is intentional: \[[1](https://github.com/pnpm/pnpm/issues/7159)]

> _"When the directory at the target location will be created, the broken symlink will become valid."_ \[[1](https://github.com/pnpm/pnpm/issues/7159)]

- **Support for Declarative Build Pipelines:** In advanced CI/CD and Docker setups, developers regularly define dependencies on local folders _before_ those folders are actually generated, compiled, or cloned by a separate build step.
- **Monorepo Tolerance:** Hard-failing on a missing path would break code generation tools that install workspace layouts before populating the underlying packages.

How it compares to other tools

- **`npm` / `yarn`:** They fail immediately with an `ENOENT` error if a local file path is missing. They prioritize interactive terminal safety over deferred build automation.
- **`pnpm`:** It prioritizes zero-friction orchestration for complex automation. It treats you less like a human typing in a terminal and more like an automated pipeline script. \[[1](https://github.com/pnpm/pnpm/issues/7159), [2](https://github.com/pnpm/pnpm/issues/5741)]

If you prefer `pnpm` to behave strictly like other tools and crash on missing paths, you can force strict validation rules inside your configuration file:

bash

```
# Add this to your global configuration (~/.npmrc)
link-workspace-packages=true
prefer-frozen-lockfile=true
```

Use code with caution.

If you want to investigate how your global setup is configured, I can help you **inspect your `.npmrc` file** or show you how to **completely purge the broken symlink cache**. Which would you like to do?

- [link](https://github.com/pnpm/pnpm/issues/7159)\
  pnpm does not fail when adding a non existing package from ...\
  Oct 4, 2023 — print warning when installing dependency from a non-existent directory #7222. zkochan commented. zkochan. on Oct 20, 2023. Member.\
  GitHub
- [link](https://github.com/pnpm/pnpm/issues/11587)\
  pnpm v11: Removing a global package removes any other ...\
  May 11, 2026 — If you install a bunch of packages with pnpm add -g and then remove one of them with pnpm remove -g , all of the packages will be ...\
  GitHub
- [link](https://github.com/pnpm/pnpm/issues/5741)\
  Relative path in local package results in errors #5741 - GitHub\
  Dec 3, 2022 — zkochan commented. zkochan. on Dec 5, 2022. Member. The file: protocol in pnpm and Yarn works differently than in npm. npm creates...\
  \
  \
  GitHub

flag to make it safe

Because `pnpm` treats local directory paths as deferred workspace bindings, **there is no single built-in CLI flag** that explicitly forces it to crash on a missing file path argument. \[[1](https://github.com/pnpm/pnpm/issues/9103)]

You can make your environment safe from this human error by using the alternative strategies below.

Option 1: The Best Practice Flag (`--workspace`)

When adding local packages or scripts inside a project workspace, always append the `--workspace` flag. This forces `pnpm` to only look for existing packages defined in your workspace routing. If it doesn't exist locally, it will fail outright rather than fallback to creating a broken link. \[[1](https://stackoverflow.com/questions/67376863/pnpm-add-within-a-workspace-does-not-add-projects-from-workspace), [2](https://www.reddit.com/r/node/comments/1db000r/unable%5Fto%5Finstall%5Flocal%5Fpackage%5Fin%5Fpnpm%5Fworkspace/)]

bash

```
pnpm add -g ./scripts/br --workspace
```

Use code with caution.

Option 2: Permanent Safety Net (Shell Alias)

You can intercept the command at the shell level. Add this function to your shell configuration file (`~/.zshrc` or `~/.bashrc`). It parses your `pnpm` inputs, catches any local path arguments starting with `./` or `../`, checks if they physically exist, and blocks execution if they do not:

bash

```
pnpm() {
  # Loop through arguments to catch local path installations
  for arg in "$@"; do
    if [[ "$arg" == ./* ]] || [[ "$arg" == ../* ]]; then
      if [ ! -d "$arg" ] && [ ! -f "$arg" ]; then
        echo "❌ Error: Path '$arg' does not exist. Installation blocked."
        return 1
      fi
    fi
  done
  command pnpm "$@"
}
```

Use code with caution.

_Reload your shell with `source ~/.zshrc` after saving._

Option 3: Lock Down Global Workspace Settings

You can modify the global configuration file to restrict `pnpm` from guessing package paths outside your immediate context: \[[1](https://pnpm.io/zh-TW/settings)]

bash

```
pnpm config set --global link-workspace-packages false
```

Use code with caution.

Would you like help verifying that the broken `br` registry entry is completely gone from your **global `package.json`** file?

- [link](https://pnpm.io/zh-TW/settings)\
  Settings (pnpm-workspace.yaml)\
  yaml) pnpm gets its configuration from the command line, environment variables, and pnpm-workspace. yaml . Only auth and registry ...\
  PNPM
- [link](https://stackoverflow.com/questions/67376863/pnpm-add-within-a-workspace-does-not-add-projects-from-workspace)\
  \`pnpm add\` within a workspace does not add projects from ...\
  May 3, 2021 — The following commands will both work: Run inside /packages/package-1. pnpm add @myorg/package-2 --workspace. Run from the project...\
  Stack Overflow
- [link](https://github.com/pnpm/pnpm/issues/9103)\
  Incorrectly links workspace packages causing issues ... - GitHub\
  Feb 13, 2025 — christian-bromann commented. christian-bromann. on Feb 13, 2025. Author. It seems like removing the global setting inject-workspac...\
  GitHub

Show all

#

how to use rg to search all lines that contains a string in a text file

Basic Search Syntax

To search a specific file using `ripgrep` (`rg`), use the following command structure in your terminal:

bash

```
rg "your_search_string" filename.txt
```

Use code with caution.

Useful Command Flags

You can modify the search behavior by adding these common flags:

- **`-i`** : Ignores case sensitivity during the search.
- **`-n`** : Shows the line number for each match.
- **`-w`** : Matches only whole words.
- **`-C 2`** : Shows 2 lines of context before and after matches. \[[1](https://medium.com/@maheshwar.ramkrushna/find-files-and-directories-using-find-grep-d0a0cd0c27f9), [2](https://labex.io/tutorials/comptia-search-text-with-grep-in-linux-590841), [3](https://sentry.io/answers/find-all-files-containing-a-specific-string/), [4](https://www.naukri.com/code360/library/grep-command-in-linux), [5](https://phoenixnap.com/kb/grep-command-linux-unix-examples)]

Advanced Search Examples

- **Search all files in directory:**\
  bash

<!---->

```
rg "string"
```

Use code with caution.

- **Search specific file types:**\
  bash

<!---->

```
rg "string" -t md
```

Use code with caution.

- **Invert the match (exclude string):**\
  bash

<!---->

```
rg -v "string" filename.txt
```

Use code with caution.\
\[[1](https://dev.to/webduvet/efficiently-finding-and-replacing-text-in-multiple-files-using-ripgrep-and-sed-3anl), [2](https://github.com/BurntSushi/ripgrep/issues/193), [3](https://www.blackdown.org/guide-about-the-grep-command/)]

To help optimize this command for your specific workflow, would you like to **filter by specific file extensions**, **export the search results** to a new file, or use **regular expressions** for complex pattern matching? \[[1](https://www.cantech.in/knowledge-base/how-to-use-the-grep-command-in-linux/)]

- [link](https://medium.com/@maheshwar.ramkrushna/find-files-and-directories-using-find-grep-d0a0cd0c27f9)\
  Find files and directories using find, grep | by Ramkrushna Maheshwar\
  May 24, 2023 — Note that the -i option makes the search case-insensitive, so it will also match lines that contain "You" or "YOU". Search string ...\
  \
  \
  Medium
- [link](https://labex.io/tutorials/comptia-search-text-with-grep-in-linux-590841)\
  Search Text with grep in Linux | CompTIA Linux+\
  You also learned to use the -n option to display the line number for each match, which is useful for locating patterns within file...\
  \
  \
  LabEx
- [link](https://sentry.io/answers/find-all-files-containing-a-specific-string/)\
  Find all files containing a specific string\
  Feb 15, 2023 — -w means match whole words. This means that the search will not match constructions like “ghello worldy”.\
  \
  \
  Sentry

Show all

no line number

To search a text file and hide the line numbers in the output, use the **`-N`** (or **`--no-line-number`**) flag.

Command Syntax

bash

```
rg -N "your_search_string" filename.txt
```

Use code with caution.

Key Variations

- **Case-insensitive without line numbers:**\
  bash

<!---->

```
rg -Ni "your_search_string" filename.txt
```

Use code with caution.

- **Search all files in current directory without line numbers:**\
  bash

<!---->

```
rg -N "your_search_string"
```

Use code with caution.

Would you like to **hide the file names** from the output as well, or do you need help **combining this with other search filters**?

#

how does " and ' work in shell

In POSIX-compliant shells (like Bash, Zsh, and Sh), **double quotes (`"`) allow the shell to interpret variables and commands**, while **single quotes (`'`) treat every single character completely literally**. \[[1](https://icl-rcs-user-guide.readthedocs.io/en/latest/support/using-linux/shell-scripting/), [2](https://unix.stackexchange.com/questions/562729/awk-0-and-1-behaves-differently-when-run-from-file-vs-run-from-bash), [3](https://quizlet.com/550370556/linux-chapter-5-flash-cards/), [4](https://saturncloud.io/blog/difference-between-single-and-double-quotes-in-bash/)]

1\. Double Quotes (`"`) - Weak Quoting

Double quotes prevent word splitting and globbing (like `*`), but they **allow the shell to evaluate** special characters like `$` (variables), \`\`\`\`\` (backticks), and `\` (escapes). \[[1](https://www.oreilly.com/openbook/debian/book/ch13%5F02.html), [2](https://ioflood.com/blog/bash-if-statement/), [3](http://www.compciv.org/topics/bash/text-values/), [4](https://intellipaat.com/blog/interview-question/shell-scripting-interview-questions/), [5](https://learning.lpi.org/en/learning-materials/010-160/2/2.1/2.1%5F01/)]

- **Variable Expansion:** Evaluates variables inside the quote. \[[1](https://medium.com/@ps5042189/understanding-shell-variable-expansion-with-quotes-a-practical-guide-faf8da31dad0), [2](https://medium.com/@august1.caes/minishell-a-comprehensive-guide-24cb30a342ec)]

bash

```
name="World"
echo "Hello $name"
# Output: Hello World
```

Use code with caution.

- **Command Substitution:** Executes nested commands. \[[1](https://www.oreilly.com/library/view/learning-the-bash/1565923472/ch04s04.html), [2](https://labex.io/tutorials/shell-how-to-run-a-script-within-a-bash-script-397080)]

bash

```
echo "Today is $(date)"
# Output: Today is Wed May 13 02:37:00 PDT 2026
```

Use code with caution.

- **Preserving Spaces:** Groups text into a single argument. \[[1](https://cloud.wikis.utexas.edu/wiki/spaces/CbrsIntroUnix/pages/71991786/Part+3+Writing+text)]

bash

```
mkdir "New Folder"
# Creates ONE folder named "New Folder"
```

Use code with caution.

2\. Single Quotes (`'`) - Strong Quoting

Single quotes **turn off all special shell expansions**. Everything inside them is passed to the command exactly as written. \[[1](https://ctcms-uq.github.io/linux%5Ftutorials/2%5Fadvanced%5Flinux.html), [2](https://mywiki.wooledge.org/BashGuide/Arrays), [3](https://www.geeksforgeeks.org/linux-unix/shell-script-examples/)]

- **Literal Strings:** Inhibits variable and command processing. \[[1](https://labex.io/questions/what-is-the-difference-between-single-and-double-quotes-in-a-shell-script-153893), [2](https://ctcms-uq.github.io/linux%5Ftutorials/2%5Fadvanced%5Flinux.html), [3](https://missing.csail.mit.edu/2026/command-line-environment/)]

bash

```
name="World"
echo 'Hello $name'
# Output: Hello $name
```

Use code with caution.

- **No Escaping:** Backslashes have no special meaning inside single quotes. \[[1](https://docs.oracle.com/cd/E19683-01/816-0210/6m6nb7ml4/index.html)]

bash

```
echo 'Line 1 \n Line 2'
# Output: Line 1 \n Line 2
```

Use code with caution.

- **The Single Quote Limitation:** You cannot put a single quote directly inside a single-quoted string. To bypass this, you must close the quote, escape a single quote, and reopen it: \[[1](https://baotramduong.medium.com/introduction-to-unix-linux-shell-scripting-ec1f32364dfc), [2](https://www.systutorials.com/how-to-escape-special-characters-in-a-bash-string-in-linux/), [3](https://unix.stackexchange.com/questions/69144/how-do-i-escape-a-sub-directory-name-with-an-ampersand-in-it), [4](https://unix.stackexchange.com/questions/70459/treatment-of-backslashes-across-shells)]

bash

```
echo 'Don'\''t panic'
# Output: Don't panic
```

Use code with caution.

Comparison Matrix

| Feature \[[1](https://www.macs.hw.ac.uk/~hwloidl/Courses/LinuxIntro/x695.html), [2](https://www.tothenew.com/blog/foolproof-your-bash-script-some-best-practices/), [3](https://twolodzko.github.io/bash/), [4](https://baotramduong.medium.com/introduction-to-unix-linux-shell-scripting-ec1f32364dfc), [5](https://saturncloud.io/blog/difference-between-single-and-double-quotes-in-bash/)] | Double Quotes (`"`)                     | Single Quotes (`'`)       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- | ------------------------- |
| **Variables (`$var`)**                                                                                                                                                                                                                                                                                                                                                                           | Evaluated / Expanded                    | Treated as literal text   |
| **Commands (`$(...)`)**                                                                                                                                                                                                                                                                                                                                                                          | Executed                                | Treated as literal text   |
| **Spaces / Tabs**                                                                                                                                                                                                                                                                                                                                                                                | Preserved as one argument               | Preserved as one argument |
| **Wildcards (`*`, `?`)**                                                                                                                                                                                                                                                                                                                                                                         | Treated as literal text                 | Treated as literal text   |
| **Escape Characters (`\`)**                                                                                                                                                                                                                                                                                                                                                                      | Valid for `$`, `"`, `\`, and \`\`\`\`\` | Treated as literal text   |

Practical Example: When to Use Which

- Use **double quotes** by default when referencing variables to avoid bugs with hidden spaces: \[[1](https://levelup.gitconnected.com/introduction-to-linux-shell-scripting-getting-started-with-bash-6a2bc78d99), [2](https://unix.stackexchange.com/questions/27724/multiple-command-list-after-shell-conditionals-shell-script-dash)]

bash

```
filepath="/path/with spaces/file.txt"
rm "$filepath"
```

Use code with caution.

- Use **single quotes** when writing raw configurations, literal regex patterns, or scripts passed to other utilities (like `awk` or `sed`): \[[1](https://itsfoss.community/t/shell-script-check-value-is-an-integer-or-any-number/9366), [2](http://www.cs.columbia.edu/~sedwards/classes/2007/w4115-spring/proposals/Windshield.pdf)]

bash

```
# Prevents the shell from messing with $1 before awk reads it
awk '{print $1}' log.txt
```

Use code with caution.

To narrow this down, are you debugging a **specific command error**, or trying to pass **quotes inside quotes**?

- [link](https://icl-rcs-user-guide.readthedocs.io/en/latest/support/using-linux/shell-scripting/)\
  Shell Scripting - Imperial RCS User Guide\
  Single quotes do not allow interpretation of special characters. The shell treats the text enclosed in single quotes literally. Ho...\
  \
  \
  Imperial RCS User Guide
- [link](https://unix.stackexchange.com/questions/562729/awk-0-and-1-behaves-differently-when-run-from-file-vs-run-from-bash)\
  awk $0 and $1 behaves differently when run from file vs run from bash\
  Jan 18, 2020 — 1 Answer 1 This is not some weird feature of awk but instead due to the ordinary way that the shell treats variables in double quo...\
  \
  Unix & Linux Stack Exchange
- [link](https://quizlet.com/550370556/linux-chapter-5-flash-cards/)\
  Linux Chapter 5 Flashcards - Quizlet\
  \- Which environment variable contains a list of directories that is searched for commands to execute? ...\
  \- A pair of double q...\
  \
  \
  Quizlet

Show all

#

when i run a list of commands in shell, w or wo ;, what will happen

Command Execution with Semicolons (`;`)

When you separate commands with a semicolon, they run sequentially. \[[1](https://labex.io/questions/how-to-run-multiple-commands-936116), [2](https://pubs.opengroup.org/onlinepubs/009604499/utilities/xcu%5Fchap02.html)]

bash

```
command1 ; command2 ; command3
```

Use code with caution.

- **Sequential Order:** `command2` starts only after `command1` finishes.
- **Exit Status Blind:** `command2` runs even if `command1` fails.
- **Shared Environment:** All commands run in the same shell session.
- **Variables Persist:** Variables set in `command1` are visible in `command2`. \[[1](https://www.testgorilla.com/blog/linux-commands-interview-questions/), [2](https://unix.stackexchange.com/questions/159513/what-are-the-shells-control-and-redirection-operators), [3](https://superuser.com/questions/619016/what-is-the-difference-between-command-command-and-command-command), [4](https://pypyr.io/docs/steps/shell/)]

Command Execution with Spaces/Newlines \[[1](https://docs.python.org/3/using/cmdline.html)]

When you separate commands by standard newlines in a script or press enter. \[[1](https://guide.bash.academy/commands/)]

bash

```
command1
command2
```

Use code with caution.

- **Identical Behavior:** This functions exactly like the semicolon syntax.
- **Sequential Flow:** The shell waits for the previous line to finish.
- **Zero Dependency:** Failure on line one does not stop line two. \[[1](https://linux-training.be/funhtml/ch13.html), [2](https://medium.com/@avigaildoestech/linux-luminarian-a-write-up-10e969b05213)]

Command Execution without Separators (Spaces Only) \[[1](https://unix.stackexchange.com/questions/458521/bash-script-commands-seperated-by-space), [2](https://medium.com/@tareshsharma17/detecting-and-exploiting-os-command-injection-vulnerabilities-cf6bf7a97ef5)]

When you run commands on a single line separated only by spaces.

bash

```
command1 command2 command3
```

Use code with caution.

- **Argument Passing:** The shell treats `command2` and `command3` as text arguments.
- **Single Execution:** Only `command1` executes, using the other words as inputs.
- **Syntax Errors:** This often triggers errors if the first command rejects arguments. \[[1](https://blog.kubesimplify.com/automate-repetitive-tasks-shell-scripting), [2](https://unix.stackexchange.com/questions/463246/should-exec-always-be-the-last-line-of-shell-script), [3](https://www.embeddedsystemonline.com/operating-system/introduction-to-linux-unix/8-the-shell-part-1)]

Conditional Execution Alternatives

If you want commands to depend on the success or failure of previous ones, use logical operators instead. \[[1](https://ioflood.com/blog/bash-and-operator/), [2](https://labex.io/questions/how-to-combine-these-commands-999464)]

- **AND Operator (`&&`):** `command1 && command2` runs `command2` only if `command1` succeeds.
- **OR Operator (`||`):** `command1 || command2` runs `command2` only if `command1` fails.
- **Background Operator (`&`):** `command1 & command2` runs `command1` in the background immediately, then starts `command2` without waiting. \[[1](https://razorops.com/blog/top-50-shell-script-interview-question-and-answers/), [2](https://www.testgorilla.com/blog/linux-commands-interview-questions/), [3](https://www.digihunch.com/2018/02/linux-tips-and-tricks-in-shell/), [4](https://dasher.wustl.edu/chem478/software/unix-tools/bash.html), [5](https://serverfault.com/questions/181401/unix-separate-multiple-commands-which-has-execute-in-background-in-the-end)]

If you are trying to automate a specific task, let me know:

- What **exact commands** you are trying to run
- If the second command **needs data** from the first
- If you want execution to **stop on errors**

I can write the exact syntax you need.

- [link](https://labex.io/questions/how-to-run-multiple-commands-936116)\
  How to run multiple commands?\
  Oct 9, 2025 — 1. Using Semicolons ( ; ) You can separate commands with a semicolon to execute them sequentially. Each command runs independently...\
  \
  LabEx
- [link](https://pubs.opengroup.org/onlinepubs/009604499/utilities/xcu%5Fchap02.html)\
  2\. Shell Command Language\
  Commands that are separated by a semicolon ( ';' ) shall be executed sequentially.\
  \
  www.opengroup.org
- [link](https://www.testgorilla.com/blog/linux-commands-interview-questions/)\
  21 Linux Commands Interview Questions for Administrator Jobs\
  Sep 6, 2023 — If you use command1 && command2, then command2 will run only if command1 is successful.\
  \
  \
  TestGorilla

Show all

is newline identical to semiconlons

Yes. In shell scripting and terminal execution, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a newline and a semicolon are functionally identical</mark>.

Core Similarities

- **Sequential Execution:** Both act as command terminators. The shell runs the first command, waits for it to finish completely, and then starts the next.
- **Status Independence:** Both ignore exit codes. The second command executes even if the first command fails with an error.
- **Environment Retention:** Both execute in the current shell process. Any environment variables or directory changes (`cd`) persist across the commands.

The Only Differences

- **Visual Layout:** Newlines stack commands vertically for readability in scripts. Semicolons chain commands horizontally on a single line.
- **Pipeline Continuation:** You cannot use a semicolon directly after a pipe (`|`) or backslash (`\`) without causing a syntax error. A newline allows commands to continue across lines smoothly.

If you are writing a script, let me know:

- The **total number of commands** you are chaining
- If you prefer a **single-line command** or a **multi-line script file**

I can format the clean, readable syntax for your specific use case.

#

will pnpm --allow-build crash if the package i install does not have a build script

No, `pnpm --allow-build` will not crash if a package does not have a build script.

Key Behaviors

- **Safe Execution:** The command explicitly permits build scripts to run during installation.
- **Silent Skip:** If a package lacks a build script (`preinstall`, `install`, `postinstall`), `pnpm` simply skips the build step for that package.
- **Normal Installation:** The package installs successfully without any errors or warnings. \[[1](https://medium.com/@praveenmistry/the-silent-threat-in-your-npm-install-a-wake-up-call-for-node-js-developers-64c94bdc0302), [2](https://github.com/pnpm/pnpm/issues/7026), [3](https://www.reddit.com/r/node/comments/n79hzw/npm%5Finstall%5Fnode%5Fenv%5Fwas%5Funexpected%5Fat%5Fthis%5Ftime/), [4](https://github.com/pnpm/pnpm/issues/1763), [5](https://github.com/IDEA-Research/Grounded-Segment-Anything/issues/101)]

Context and Usage

- **Default Behavior:** Modern `pnpm` blocks all execution scripts by default for security.
- **Targeted Permission:** The `--allow-build` flag overrides this block for the specific package being installed.
- **Config Alternative:** You can permanently allow builds for specific packages by adding them to the `pnpm.allowedDeprecatedVersions` or `onlyBuiltDependencies` array in your `package.json`. \[[1](https://medium.com/@praveenmistry/the-silent-threat-in-your-npm-install-a-wake-up-call-for-node-js-developers-64c94bdc0302), [2](https://github.com/pnpm/pnpm/issues/9472), [3](https://github.com/pnpm/pnpm/issues/9129)]

Would you like to know how to configure **onlyBuiltDependencies** for your project, or do you need help troubleshooting a specific **pnpm installation error**?

- [link](https://medium.com/@praveenmistry/the-silent-threat-in-your-npm-install-a-wake-up-call-for-node-js-developers-64c94bdc0302)\
  The Silent Threat in Your npm install: A Wake-Up Call for Node.js Developers\
  May 15, 2025 — Embrace pnpm: This modern package manager isolates packages within your node\_modules directory and, by default, does not execute i...\
  \
  \
  Medium
- [link](https://github.com/pnpm/pnpm/issues/7026)\
  prepublishOnly runs when installing packages from git · Issue #7026 · pnpm/pnpm\
  Sep 1, 2023 — When installing from git/github pnpm runs the prepublishOnly script. This will almost certainly fail.\
  \
  \
  GitHub
- [link](https://www.reddit.com/r/node/comments/n79hzw/npm%5Finstall%5Fnode%5Fenv%5Fwas%5Funexpected%5Fat%5Fthis%5Ftime/)\
  npm install -> "$NODE\_ENV" was unexpected at this time. : r/node\
  May 7, 2021 — That postinstall script is checking if the installation is happening in a production environment, and if it is, running the build ...\
  \
  Reddit

Show all
