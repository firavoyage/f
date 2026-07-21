# how to setup spellcheck on ci

To set up spellchecking in a Continuous Integration (CI) pipeline, you must <mark>choose a command-line spellchecker, add a project-level configuration file to handle false positives, and add a test step to your CI workflow file</mark>.

The two most popular, specialized tools for code and documentation repositories are **[CSpell](https://cspell.org/)** (excellent for JavaScript/TypeScript, markdown, and multi-language environments) and **Typos** (a blisteringly fast checker written in Rust, ideal for massive codebases). [link](https://github.com/crate-ci/typos)

Here is how to set up both options using GitHub Actions as the CI example.

***

### Option 1: Setting up CSpell (Recommended for Web & Markdown)

CSpell understands code syntax, ignores programming variables, handles camelCase, and selectively checks string literals or markdown files. [link](https://www.reddit.com/r/commandline/comments/ixbj1i/spell%5Fcheck%5Fyour%5Fcode%5Ffrom%5Fthe%5Fcommand%5Fline%5Fwith/)

#### 1. Add the Configuration File

Create a `cspell.config.yaml` file in your repository root to whitelist specific words and ignore build directories: [link](https://www.caro.fyi/articles/spellcheck-ci/)

yaml

```
version: "0.2"
language: "en"
# Add project-specific jargon, brand names, or libraries here
words:
  - MyCustomAPI
  - frontend
  - backend
  - monorepo
# Ignore generated code or third-party artifacts
ignorePaths:
  - "node_modules/**"
  - "dist/**"
  - "package-lock.json"
```

Use code with caution.

#### 2. Create the CI Workflow

Create a workflow file at `.github/workflows/spellcheck.yml`: [link](https://metaredux.com/posts/2021/11/26/automate-spell-checking-in-your-projects-with-github-actions.html)

yaml

```
name: Spell Check

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  run-spellcheck:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Run CSpell
        uses: streetsidesoftware/cspell-action@v6
        with:
          # Fails the build if typos are detected
          strict: true
```

Use code with caution.

***

### Option 2: Setting up Typos (Recommended for Maximum Speed)

[Typos](https://github.com/crate-ci/typos) is low-configuration out of the box because it only searches for a curated list of common human misspellings, minimizing false positives. [link](https://github.com/crate-ci/typos)

#### 1. Add the Configuration File

Create a `_typos.toml` file in your repository root to configure overrides:

toml

```
[default]
# Files or directories to skip entirely
extend-exclude = ["ThirdParty/"]

[default.extend-words]
# Forgive specific words that look like typos but are intentional
ans = "ans"
```

Use code with caution.

#### 2. Create the CI Workflow

Create a workflow file at `.github/workflows/typos.yml`:

yaml

```
name: Spell Check (Typos)

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  run-typos:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Check Spelling
        uses: crate-ci/typos@v1.23.6 # Match this with the latest version
```

Use code with caution.

***

### Best Practices for CI Spellchecking

- **Run Locally First:** Give developers a way to check spelling locally before pushing to CI. For instance, if using CSpell, add `"spellcheck": "cspell ."` to your `package.json` scripts.
- **Handle Inline Exceptions:** If a specific source code line requires a misspelled token (like a legacy API endpoint or vendor name), use inline comments to temporarily silence the linter. For example, in CSpell, use `// cspell:disable-line`.
- **Warn Before You Block:** If you are introducing a spellchecker to a legacy repository with thousands of files, configure the tool to trigger a warning rather than breaking the build. Clean up the codebase incrementally, then flip the pipeline switch to strict error mode. [link](https://www.caro.fyi/articles/spellcheck-ci/)

To help tailor this setup, let me know:

- What **CI tool** are you running (GitHub Actions, GitLab CI/CD, Bitbucket Pipelines)?

- What **programming languages** or file types dominate your repository?

- Do you prefer a tool that checks **every single word** against a strict dictionary, or one that only targets **common human typos**?

- [link](https://github.com/crate-ci/typos)\
  crate-ci/typos: Source code spell checker - GitHub\
  Examples: $ # Read file from stdin, write corrected version to stdout $ typos - --write-changes $ # Creates a diff of what would c...\
  GitHub

- [link](https://www.caro.fyi/articles/spellcheck-ci/)\
  Spelling is hard - Caro Appleby\
  Sep 23, 2024 — Context. This is just one way to set up a spellchecker as a git hook in a repository that uses JavaScript tooling. I use CSpell “a...\
  www.caro.fyi

- [link](https://www.npmjs.com/package/cspell)\
  cspell - NPM\
  May 31, 2026 — In Document Settings. It is possible to add spell check settings into your source code. This is to help with file specific issues ...\
  NPM

Show all

## how to run cspell via pnpm spellcheck

To run CSpell via a `pnpm spellcheck` command, you need to install CSpell as a development dependency, configure your project's `package.json` file, and set up your configuration.

Here is the exact step-by-step setup:

### 1. Install CSpell

Run the following command in your terminal to install the CSpell CLI tool as a development dependency via `pnpm`:

bash

```
pnpm add -D cspell
```

Use code with caution.

### 2. Configure the `package.json` Script

Open your `package.json` file and add the `spellcheck` script to your `scripts` block.

json

```
{
  "scripts": {
    "spellcheck": "cspell \"**/*\""
  }
}
```

Use code with caution.

\_Note: The quotes around `"\*\*/_"` are required so that your shell passes the glob pattern directly to CSpell, ensuring it scans your entire directory structure recursively.\*

### 3. Add a CSpell Configuration File

Create a `cspell.config.yaml` file in the root of your project. This file lets you define which directories to ignore (like `node_modules` or build folders) and where you can safely add your project's custom vocabulary or jargon.

yaml

```
version: "0.2"
language: "en"

# Words that should be treated as correct
words:
  - pnpm
  - monorepo
  - frontend
  - backend

# Paths to ignore during the spellcheck run
ignorePaths:
  - "node_modules/**"
  - ".pnpm-store/**"
  - "dist/**"
  - "build/**"
  - "package-lock.json"
  - "pnpm-lock.yaml"
```

Use code with caution.

### 4. Execute the Command

You can now run the spellchecker locally at any time using:

bash

```
pnpm spellcheck
```

Use code with caution.

***

### Pro-Tips for Advanced Configurations

- **Target Specific File Extensions:** If your codebase is massive and you only want to scan code and markdown files, refine your script glob inside `package.json`:\
  json

<!---->

```
"spellcheck": "cspell \"**/*.{ts,tsx,js,jsx,md,json}\""
```

Use code with caution.

- **Integrate with CI:** Once your `pnpm spellcheck` script is configured, you can call it directly in your CI pipeline (e.g., GitHub Actions) like this:\
  yaml

<!---->

```
- name: Run Spellcheck
  run: pnpm spellcheck
```

Use code with caution.

If you'd like, let me know:

- Are you setting this up inside a **pnpm monorepo** workspace?

- Would you like to see how to automatically fix typos using a **pre-commit hook** (like Husky)?

- [link](https://www.npmjs.com/package/cspell-cli?activeTab=readme)\
  cspell-cli - npm\
  Apr 7, 2026 — To use a custom dictionary with the pre-commit hook, create either a cspell. config. yaml or cspell. json file in your project's r...\
  \
  NPM

## does it check both filename/pathname and file content out of the box

**No**, CSpell only checks **file content** out of the box; it completely ignores filenames and directory paths during its standard execution. [link](https://github.com/streetsidesoftware/cspell/issues/3063)

If you have a file named `mispeled-name.js`, CSpell will open it, scan the code inside for typos, but will not flag the word `mispeled` in the filename itself. [link](https://github.com/streetsidesoftware/cspell/issues/3063)

If you want to catch typos in both paths and content, choose one of the options below.

***

### Option 1: Switch to Typos (Checks Both Automatically)

If checking pathnames is a priority, consider using [Typos](https://github.com/crate-ci/typos), which natively inspects **both** filenames and file contents simultaneously right out of the box.

***

### Option 2: Force CSpell to Check Filenames

To force CSpell to evaluate your file paths, you must pipe your project's file list directly into CSpell's standard input (`stdin`). [link](https://github.com/streetsidesoftware/cspell/issues/3063)

Update your `package.json` scripts to include a secondary script that utilizes your system's `git` track list: [link](https://github.com/streetsidesoftware/cspell/issues/3063)

json

```
{
  "scripts": {
    "spellcheck": "cspell \"**/*\"",
    "spellcheck:filenames": "git ls-files | cspell stdin"
  }
}
```

Use code with caution.

#### How it works:

- `git ls-files` outputs a plain-text list of every file path tracked in your repository.
- The pipe (`|`) feeds those string paths directly into CSpell as raw text.
- CSpell processes the paths as text content and flags any structural typos found in your folders or filenames. [link](https://github.com/streetsidesoftware/cspell/issues/3063)

Would you like help adapting your **CI pipeline file** to run both checks seamlessly?

- [link](https://github.com/streetsidesoftware/cspell/issues/3063)\
  Check spelling of filenames · Issue #3063 - GitHub\
  Jun 14, 2022 — opened on Jun 14, 2022. Issue body actions. Is your feature request related to a problem? Please describe. It would be nice to hav...\
  GitHub
- [link](https://cspell.org/docs/api/cspell)\
  CSpell\
  Command: check - Quick Visual Check​. Do a quick visual check of a file. This is a great way to see which text is included in the ...\
  CSpell

## how to let pnpm spellcheck do both

To make a single `pnpm spellcheck` command check both your file content and your file/path names, you can combine the commands using the `&&` operator.

Here is how to update your setup to handle both in one go.

### 1. Update your `package.json`

Modify your `package.json` to chain the standard CSpell scan and the Git file-tree stream together:

json

```
{
  "scripts": {
    "spellcheck:content": "cspell \"**/*\"",
    "spellcheck:filenames": "git ls-files | cspell stdin",
    "spellcheck": "pnpm spellcheck:content && pnpm spellcheck:filenames"
  }
}
```

Use code with caution.

### 2. Update your `cspell.config.yaml`

Because `git ls-files` outputs file paths as text (e.g., `src/components/MyFile.tsx`), CSpell's `stdin` mode will look at the extensions too. You need to tell CSpell to ignore file extensions so it doesn't flag words like `tsx`, `json`, or `yaml` as typos.

Add the extension words to your config file:

yaml

```
version: "0.2"
language: "en"

words:
  - pnpm
  - monorepo
  # Prevent file extensions from triggering errors
  - tsx
  - yaml
  - tsconfig
  - lockfile

ignorePaths:
  - "node_modules/**"
  - ".pnpm-store/**"
  - "dist/**"
```

Use code with caution.

### How It Works when you run `pnpm spellcheck`:

1. **`pnpm spellcheck:content` runs first:** It scans inside all your files. If it finds a typo, the process exits early and fails.
2. **`pnpm spellcheck:filenames` runs second:** If the content is clean, it passes your entire Git directory structure into CSpell to flag misspelled folders or file names.

If you are using this inside a **CI pipeline**, would you like to see how to format the logs so it is easy to tell if the failure happened inside a file or in a filename?

# compare cspell and typos

The primary difference between CSpell and Typos lies in their core engine architecture: <mark><strong><span>CSpell</span><span> </span>is a traditional dictionary-based spell checker that flags any unknown word</strong>, while<span> </span><strong><span><a rel="noopener" href="https://github.com/crate-ci/typos">Typos</a></span><span> </span>is a correction-based spell checker that only triggers when a word matches a predefined list of known misspellings</strong></mark>. [link](https://ricostacruz.com/posts/spell-checking-using-typos)

### Quick Comparison Matrix

| Feature                  | CSpell                                    | Typos                                |
| ------------------------ | ----------------------------------------- | ------------------------------------ |
| **Core Mechanism**       | Dictionary matching (flags unknown words) | Typo matching (flags known mistakes) |
| **Underlying Language**  | TypeScript / Node.js                      | Rust                                 |
| **Execution Speed**      | Moderate                                  | Blazing fast / High performance      |
| **False Positives**      | High (requires custom word lists)         | Extremely low                        |
| **False Negatives**      | Low (catches almost everything)           | High (misses novel misspellings)     |
| **Maintenance Overhead** | High (constant config updating)           | Low (plug-and-play)                  |

***

### Core Mechanics & Accuracy

- **[CSpell](https://streetsidesoftware.com/vscode-spell-checker/docs/configuration/cspell)**: Works like a standard word processor. It checks code tokens against its localized dictionaries. If a developer uses specialized jargon, acronyms, or custom library names, CSpell flags them as errors. This ensures maximum safety but creates a high volume of false positives that require configuration tuning.
- **Typos**: Reverses the logic. It ignores valid or random strings completely and only reacts if a string matches an entry in its target typo database (e.g., matching "funtion" to flag "function"). This yields an almost zero false-positive rate, meaning you rarely have to update an allowlist. However, if you make a completely unique typing mistake not in the database, it will slip right through (false negative). [link](https://marketplace.visualstudio.com/items?itemName=tekumara.typos-vscode)

### Performance and Ecosystem

- **CSpell**: Powers the massively popular [Code Spell Checker extension for VS Code](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker). Because it runs on Node.js, it is reasonably fast but can draw heavier resource usage on exceptionally massive source files or monorepos.
- **Typos**: Built in Rust, making it remarkably lightweight and fast. It handles enormous codebases in fractions of a second, making it a favorite for Continuous Integration (CI) pre-commit hooks and fast local terminal checks. It supports modern editors via a Language Server Protocol ([typos-lsp](https://marketplace.visualstudio.com/items?itemName=tekumara.typos-vscode)). [link](https://marketplace.visualstudio.com/items?itemName=tekumara.typos-vscode)

### Which One Should You Choose?

- Choose **Typos** if you want a **low-maintenance, set-and-forget tool** for your team's CI pipeline. It will catch the most obvious, embarrassing mistakes without annoying developers with false alarms on variable names or external libraries.
- Choose **CSpell** if you are writing **public APIs, open-source libraries, or heavy documentation** where spelling correctness must be strictly enforced. It requires upfront effort to build a `cspell.json` allowed-words list, but it guarantees no weird spelling slip-ups reach production. [link](https://www.youtube.com/watch?v=nwmJ9h%5FzPJc)

Are you planning to use this tool primarily as a **local editor extension** while you type, or as an automated **gatekeeper check in your CI/CD pipeline**? Knowing your workflow can help determine the best setup.

- [link](https://github.com/Automattic/harper/issues/215)\
  COMPARISON.md: Please compare to typos, zspell, spellbook\
  Oct 7, 2024 — In my case that doesn't work because my app needs to spell check markdown, which Harper does support. Typos advertises spell check...\
  GitHub
- [link](https://ricostacruz.com/posts/spell-checking-using-typos)\
  Spell-checking code using Typos - Rico Sta. Cruz\
  Dec 18, 2023 — Typos vs codespell. codespell is another spell checker with very similar goals to Typos. It also uses a list of typo corrections. ...\
  Rico Sta. Cruz
- [link](https://marketplace.visualstudio.com/items?itemName=tekumara.typos-vscode)\
  Typos spell checker - Visual Studio Marketplace\
  Typos is available in the following clients: \* \*\*Neovim\*\* Install using mason \* \*\*Vim\*\* Install using vim-lsp-settings \* \*\*VS Code...\
  Visual Studio Marketplace

Show all

## how to setup typos to run via pnpm spellcheck

To run **typos** via `pnpm spellcheck`, you need to use a Node.js wrapper since the core `typos` engine is written in Rust. The official and most popular wrapper for this is `typos-cli`.

Here is the step-by-step setup guide.

### 1. Install the Wrapper

Install the `typos-cli` package as a development dependency in your project.

bash

```
pnpm add -D typos-cli
```

Use code with caution.

### 2. Configure the pnpm Script

Open your `package.json` file. Add the `spellcheck` script to your `scripts` object:

json

```
{
  "scripts": {
    "spellcheck": "typos"
  }
}
```

Use code with caution.

### 3. Add a Configuration File (Optional)

By default, `typos` works out of the box with zero configuration. However, if you want to exclude certain folders (like build artifacts) or define specific word overrides, create a file named `_typos.toml` or `typos.toml` in your root directory:

toml

```
[files]
# Ignore specific files or directories
extend-exclude = [
  "dist/",
  "build/",
  "pnpm-lock.yaml"
]

[default.extend-words]
# Tell typos to ignore specific false positives if they come up
# mycustomword = "mycustomword"
```

Use code with caution.

### 4. Run the Command

You can now trigger the spell checker through `pnpm` at any time:

bash

```
pnpm spellcheck
```

Use code with caution.

### 5. Automated Fixes (Bonus)

If `typos` finds mistakes and you want it to automatically fix them for you, you can run:

bash

```
pnpm typos --write
```

Use code with caution.

Would you like help setting this up as a **GitHub Action** so it runs automatically on every pull request, or perhaps as a local **pre-commit hook** using Husky?

- [link](https://linuxize.com/post/pnpm-command/)\
  pnpm Command: Install and Manage Node.js Packages\
  Jun 8, 2026 — This method requires a compatible Node. js version. It does not automatically enforce a project-specific pnpm version.\
  \
  \
  Linuxize

# ...f/apps/tools % pnpm add -D typos-cli ERROR Cannot convert undefined or null to object This error happened while installing a direct dependency of /home/fira/Documents/f/apps/tools pnpm: Cannot convert undefined or null to object at Object.entries () at clearMeta (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:59961:45) at /usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:59928:20 at process.processTicksAndRejections (node:internal/process/task\_queues:104:5) at async runLimited (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:59809:16) at async resolveNpm (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:60757:22) at async Object.resolve (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:61158:30) at async run (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:108522:23) Progress: resolved 16, reused 16, downloaded 0, added 0

The most common cause for this specific `pnpm` crash during package resolution is a <mark><strong>corrupted metadata cache</strong><span> </span>or an unexpected configuration issue with peer dependencies</mark>. [link](https://github.com/pnpm/pnpm/issues/4804)

### Quick Fixes

You can resolve this error by applying the following steps in order:

#### 1. Clear the Metadata Cache

A corrupted metadata cache causes `clearMeta` to fail when parsing cached package objects. Run this command to delete your local metadata cache: [link](https://github.com/pnpm/pnpm/issues/12753)

bash

```
rm -rf ~/.cache/pnpm/v11/metadata*
```

Use code with caution.

_(If you are on an older version of pnpm, you can find your cache directory using `pnpm config get cacheDir`)._ [link](https://github.com/pnpm/pnpm/issues/12881)

#### 2. Toggle Peer Dependency Settings

This crash is frequently triggered by a bug involving the `auto-install-peers` configuration. You can bypass it by forcing a clean installation: [link](https://github.com/pnpm/pnpm/issues/4804)

bash

```
pnpm install --force
```

Use code with caution.

Alternatively, temporarily disable the feature in your command: [link](https://github.com/pnpm/pnpm/issues/4804)

bash

```
pnpm add -D typos-cli --no-auto-install-peers
```

Use code with caution.

#### 3. Deep Clean Your Workspace

If the error persists, it means stale lockfiles or hidden directories are conflicting with your installation. Wipe them clean and retry: [link](https://github.com/pnpm/pnpm/issues/4804)

bash

```
rm -rf node_modules pnpm-lock.yaml
pnpm store prune
pnpm add -D typos-cli
```

Use code with caution.

### Why Did This Happen?

The stack trace points directly to `clearMeta` calling `Object.entries()` on an undefined object entry inside `pnpm`'s internal dependency resolver. This happens when `pnpm` fetches a package metadata response from the npm registry (or your local cache) that does not contain expected fields, crashing the CLI instead of handling it gracefully. [link](https://github.com/pnpm/pnpm/issues/4804)

If none of these fixes work, let me know your **current `pnpm` version** (`pnpm -v`) and if you are using a **custom registry** (like Artifactory or Verdaccio) so we can narrow it down further!

- [link](https://github.com/pnpm/pnpm/issues/4804)\
  Cannot convert undefined or null to object (\`auto-install-peers ...\
  May 26, 2022 — Checkout to the branch cannot-convert-undefined-or-null-to-object. Run pnpm i. See the error Cannot convert undefined or null to o...\
  GitHub
- [link](https://github.com/pnpm/pnpm/issues/12753)\
  pnpm cache delete does not clear v11/metadata-full-filtered\
  Jul 1, 2026 — (Verification of original impact) In a real project with an outdated catalog specifier like vue: ^3.5. 39 , the stale cache causes...\
  GitHub
- [link](https://github.com/pnpm/pnpm/issues/12881)\
  g with minimumReleaseAge, though the registry provides the time ...\
  Jul 9, 2026 — Reproduction steps \* Install pnpm 11.10. ... \* Enable the setting globally: pnpm config set --global minimumReleaseAge 1440. (equi...\
  GitHub

Show all

## no effect after rm -rf node\_modules pnpm-lock.yaml

pnpm store prune\
pnpm add -D typos-cli

Since clearing the local cache and deleting the workspace artifacts did not work, the issue stems from an active bug in `pnpm`'s resolver regarding how it processes `auto-install-peers` globally or within a monorepo structure. [link](https://github.com/pnpm/pnpm/issues/4804)

Apply these targeted workarounds to bypass the crash:

### 1. Disable Peer Autoinstall via CLI Flag

Force `pnpm` to bypass the specific code block executing the bad `Object.entries()` loop by disabling automatic peer resolution entirely for this action: [link](https://github.com/pnpm/pnpm/issues/4804)

bash

```
pnpm add -D typos-cli --no-auto-install-peers
```

Use code with caution.

### 2. Isolate the Project via `.npmrc`

If your project is nested inside a workspace or monorepo, a setting higher up or in your default environment might be enforcing the bad configuration. You can isolate this directory explicitly:

1. Open or create a local `.npmrc` file right inside `/home/fira/Documents/f/apps/tools/`.

2. Add the following rule explicitly to turn off the crashing mechanism:\
   ini

<!---->

```
auto-install-peers=false
```

Use code with caution.
3\. Run `pnpm add -D typos-cli`. If it succeeds, you can safely flip the value back to `true` and run `pnpm install --force` to link any missing peer dependencies without triggering the installation crash. [link](https://github.com/pnpm/pnpm/issues/4804)

### 3. Check for Malformed Root Extensions

Because your path is located under `/apps/tools`, you are likely working inside a **monorepo**.

- If there is a `pnpm-lock.yaml` file sitting at the **root of your repository** (e.g., `/home/fira/Documents/f/`), deleting the local lockfile inside `/apps/tools` will not fix resolution failures.

- Go to the root of the repository (`/home/fira/Documents/f/`), delete _that_ main lockfile, and run the installation from the root using filtering:\
  bash

<!---->

```
pnpm --filter tools add -D typos-cli
```

Use code with caution.

### 4. Bypass via Alternative Installer

If your current `pnpm` engine version is strictly incompatible with `typos-cli`'s metadata payload, bypass `pnpm`'s resolver entirely by installing the native binary for `typos` through `cargo` or via their shell script:

bash

```
# Via Cargo if Rust is installed
cargo install typos-cli

# Or install it globally onto your machine via Homebrew
brew install typos-cli
```

Use code with caution.

Are you using a **custom npm registry** (like an internal company Artifactory mirror) or a **custom `.pnpmfile.cjs` hook**? Sharing that context can help pinpoint exactly which metadata package payload is missing properties. [link](https://github.com/pnpm/pnpm/issues/1621)

- [link](https://github.com/expo/eas-cli/issues/2978)\
  EAS mistakes pnpm for yarn workspace · Issue #2978 - GitHub\
  Apr 4, 2025 — sirmammingtonham commented on Apr 8, 2025. @sirmammingtonham · sirmammingtonham · on Apr 8, 2025. Author. More actions. Resolved. ...\
  GitHub
- [link](https://github.com/pnpm/pnpm/issues/4804)\
  Cannot convert undefined or null to object (\`auto-install-peers ...\
  May 26, 2022 — Checkout to the branch cannot-convert-undefined-or-null-to-object. Run pnpm i. See the error Cannot convert undefined or null to o...\
  GitHub
- [link](https://github.com/pnpm/pnpm/issues/4796)\
  Workspace with auto-install-peers throwing unhandled error (Cannot ...\
  May 25, 2022 — Expected behavior: Install all dependencies, including peerDependencies and link local packages.\
  GitHub

Show all

## add it directly into package json and pnpm i

That will work. When you bypass `pnpm add` by editing `package.json` manually, `pnpm` skips its standard interactive peer dependency sorting loop during the command call and reads straight from the manifest. [link](https://pnpm.io/cli/add)

Open `/home/fira/Documents/f/apps/tools/package.json` and add **`typos-cli`** directly into your `devDependencies`: [link](https://pnpm.io/package%5Fjson)

json

```
{
  "devDependencies": {
    "typos-cli": "latest"
  }
}
```

Use code with caution.

Then run the installation directly:

bash

```
pnpm install
```

Use code with caution.

If `pnpm install` still triggers that exact same `clearMeta` crash, append the CLI modifier flag to force it past the resolver error: [link](https://apostrophecms.com/docs/guide/using-pnpm.html)

bash

```
pnpm install --no-auto-install-peers
```

Use code with caution.

Let me know if the install successfully compiles the lockfile or if it fails on another entry!

- [link](https://wicksipedia.com/blog/ni-universal-package-manager)\
  One CLI to Rule npm, yarn, pnpm, and bun - Wicksipedia\
  Mar 5, 2026 — Juggling npm, yarn, pnpm, and bun across projects? ni detects your package manager and runs the right command. Here's my setup.\
  wicksipedia.com
- [link](https://pnpm.io/cli/add)\
  pnpm add\
  \--workspace​ Only adds the new dependency if it is found in the workspace. --allow-build​ Added in: v10.4.0. A list of package nam...\
  PNPM
- [link](https://pnpm.io/package%5Fjson)\
  package.json - PNPM\
  The manifest file of a package. It contains all the package's metadata, including dependencies, title, author, et cetera. This is ...\
  PNPM

Show all

## no effect. ...f/apps/tools % pnpm i

ERROR Cannot convert undefined or null to object

This error happened while installing a direct dependency of /home/fira/Documents/f/apps/tools

pnpm: Cannot convert undefined or null to object\
at Object.entries ()\
at clearMeta (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:59961:45)\
at /usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:59928:20\
at process.processTicksAndRejections (node:internal/process/task\_queues:104:5)\
at async runLimited (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:59809:16)\
at async resolveNpm (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:60757:22)\
at async Object.resolve (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:61158:30)\
at async run (/usr/local/lib/node\_modules/pnpm/dist/pnpm.cjs:108522:23)\
Progress: resolved 16, reused 16, downloaded 0, added 0

This confirmation proves the bug isn't inside your project's code or temporary workspace files; it is a **deep crash inside your globally installed version of `pnpm`** handling peer dependency arrays during the local lookup phase. [link](https://github.com/pnpm/pnpm/issues/4796)

Because `pnpm i` natively reads and maps the network tree of dependencies, editing the file directly still forces it into the broken code routine. [link](https://github.com/pnpm/pnpm/issues/4796)

You can break out of this loop using these alternative approaches:

### 1. The Global Cache Nuke (Most Reliable)

The internal `clearMeta` function parses files inside `pnpm`'s global content-addressable store. If you only wiped the metadata subfolder earlier, a broken dependency object might still live in the wider store. Force-clear the whole global cache:

bash

```
pnpm store prune
rm -rf ~/.local/share/pnpm/store
```

Use code with caution.

_(On macOS, the path is `~/Library/pnpm/store`; on Windows, `%LOCALAPPDATA%/pnpm/store`)_.

### 2. Force Node to Bypass the Bug via `npm` or `yarn`

Since you just want the dependencies installed and cannot wait for a `pnpm` system patch, use another package manager to generate a clean tree. This safely bypasses the bug without breaking your environment:

bash

```
# Option A: Use npm to install your package.json layout
npm install

# Option B: Use yarn
yarn install
```

Use code with caution.

### 3. Downgrade or Upgrade `pnpm`

Because this is a known regression error with `auto-install-peers` combined with monorepo layouts, changing your global `pnpm` binary version by even one minor release usually avoids the exact line mismatch (`pnpm.cjs:59961:45`). [link](https://github.com/pnpm/pnpm/issues/4796)

Run this to dynamically use a different version over the network without uninstalling yours:

bash

```
# Try executing the install using a clean npx container of pnpm v9 or v10
npx pnpm@10 install
```

Use code with caution.

If that works, permanently update or roll back your global binary:

bash

```
npm install -g pnpm@latest
# OR roll back to a highly stable v9 variant
npm install -g pnpm@9
```

Use code with caution.

Which version of `pnpm` (`pnpm -v`) are you currently running? If you're using a **monorepo engine** like Turborepo or Nx alongside it, let me know so we can check your root `package.json` overrides!

- [link](https://github.com/pnpm/pnpm/issues/4796)\
  Workspace with auto-install-peers throwing unhandled error ...\
  May 25, 2022 — fix(auto-install-peers): don't fail on projects with linked deps #4807. \[Error] - Cannot convert undefined or null to object ( aut...\
  GitHub

## ...f/apps/tools % bun i

bun install v1.3.14 (0d9b296a)\
error: Package "typos-cli" with tag "latest" not found, but package exists\
error: typos-cli@latest failed to resolve

The `bun` error **`Package "typos-cli" with tag "latest" not found`** reveals the true source of your problems: **`typos-cli` is not a Node/npm package.**

`typos-cli` is a native binary tool written in Rust. There is no official JavaScript package named `typos-cli` hosted on the npm registry. [link](https://github.com/aws/amazon-q-developer-cli)

When you ran `pnpm`, it didn't know how to handle the invalid npm registry payload, causing its internal engine to crash with an unhandled `undefined or null` exception. When you tried `bun`, Bun handled it slightly better by explicitly telling you the package doesn't exist on npm.

### The Real Fix: Install `typos` Natively

Remove the invalid entry from your `package.json` file, and install `typos-cli` directly to your local environment using one of the following native tools:

#### Option A: Via Homebrew (macOS / Linux)

bash

```
brew install typos-cli
```

Use code with caution.

#### Option B: Via Cargo (If you have Rust installed)

bash

```
cargo install typos-cli
```

Use code with caution.

#### Option C: Run it without installing via Docker

bash

```
docker run --rm -it -v $(pwd):/data ghcr.io/crate-ci/typos .
```

Use code with caution.

### If you _must_ run it via Node scripts

If you want to orchestrate it through your `package.json` scripts (e.g., `pnpm run lint:typos`), you have two choices:

1. Install it via `brew` or `cargo` globally on your machine, then map it inside `package.json`:\
   json

<!---->

```
"scripts": {
  "lint:typos": "typos ."
}
```

Use code with caution.
2\. If you need a node-based spell-checker wrapper that actually exists on npm, replace it with **`cspell`**:\
bash

```
pnpm add -D cspell
```

Use code with caution.

Do you need help configuring a **pre-commit hook** or a GitHub Action workflow to automatically run `typos` on your codebase?

- [link](https://github.com/aws/amazon-q-developer-cli)\
  aws/amazon-q-developer-cli - GitHub\
  Nov 17, 2025 — Prerequisites \* Clone repo. git clone https://github.com/aws/amazon-q-developer-cli.git. \* Install the Rust toolchain using Rustup...\
  GitHub

## how to let pnpm install install both npm deps needed, and cargo install typos-cli

To automatically install both your standard npm dependencies and compile your native Rust tools seamlessly during a single `pnpm install` sequence, you need to exploit **npm/pnpm lifecycle scripts**. [link](https://pnpm.io/scripts)

### Option 1: The Local Project Hook (Recommended)

You can instruct `pnpm` to execute native shell tasks instantly following its resolution routine by mapping a custom execution to the `pnpm:devPreinstall` or `postinstall` hooks inside your `/apps/tools/package.json`. [link](https://pnpm.io/scripts)

1. **Clean up your manifest**: Ensure `"typos-cli"` is completely removed from the `dependencies` or `devDependencies` objects so `pnpm` stops searching the npm registry for it.
2. **Add a lifecycle script**: Insert a `postinstall` string hook to catch every local installation invocation:

json

```
{
  "name": "tools",
  "version": "1.0.0",
  "scripts": {
    "postinstall": "cargo install typos-cli",
    "lint:typos": "typos ."
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

Use code with caution.

Now, whenever you run **`pnpm install`** (or `pnpm i`), `pnpm` will complete your Node modules arrangement first, and immediately hand off control to `cargo` to fetch and compile your binary. [link](https://pnpm.io/scripts)

***

### Option 2: The Global Workspace Configuration

If you are operating inside a monorepo setup and want `typos-cli` accessible across _all_ packages simultaneously (without forcing developers inside other sub-folders to wait for a heavy Cargo compilation loop), configure it globally inside your **root** `package.json` at `/home/fira/Documents/f/package.json`: [link](https://pnpm.io/scripts)

json

```
{
  "name": "my-monorepo-root",
  "scripts": {
    "pnpm:devPreinstall": "cargo install typos-cli"
  }
}
```

Use code with caution.

- **Why this is better**: The `pnpm:devPreinstall` hook triggers **before** package trees are calculated. It will only execute once globally across your system rather than for individual monorepo sub-apps. [link](https://pnpm.io/scripts)

***

### Pro-Tip: Accelerate Environment Boots

Compiling Rust binaries via `cargo install` can take anywhere from 30 seconds to a couple of minutes depending on your system hardware. To prevent `pnpm install` from bogging down during daily workflow resets, tell cargo to bypass unnecessary compilation steps if the binary is already validly in place:

json

```
"postinstall": "command -v typos >/dev/null 2>&1 || cargo install typos-cli"
```

Use code with caution.

Would you like help customizing a configuration file (like a `typos.toml`) to manage specific spellchecking exclusion lists next?

- [link](https://github.com/pnpm/pnpm/issues/7581)\
  Add additional controls for installing native dependencies #7581\
  Jan 27, 2024 — It would be great if pnpm supported more ways to either filter which workspaces and their dependencies are being installed, or all...\
  GitHub
- [link](https://pnpm.io/scripts)\
  Scripts | pnpm\
  Lifecycle Scripts​. pnpm:devPreinstall ​. Runs only on local pnpm install . Runs before any dependency is installed. This script i...\
  PNPM
- [link](https://github.com/pnpm/pnpm/issues/5073)\
  Cannot install dependencies of directory that is \*not\* part of the workspace · Issue #5073 · pnpm/pnpm\
  Jul 21, 2022 — When running pnpm install in deps/some-linked-dependency/ , pnpm installs the workspace (while deps/some-linked-dependency/ is com...\
  \
  \
  GitHub

Show all

# are most pnpm commands compatible w bun

<mark><strong><span>No, Bun does not accept<span> </span></span><code dir="ltr">pnpm</code><span> </span>command syntax directly, but Bun's own native package manager commands cover almost all of the same functional use cases.</strong></mark> While you cannot simply type `pnpm` syntax into the Bun CLI (e.g., typing `bun store prune` will fail), Bun is designed as a drop-in replacement for `pnpm` in your workflow, achieving the same exact development tasks with its own syntax. [link](https://bun.com/docs/pm/cli/install)

A direct breakdown of command compatibility, functionality mapping, and structural differences clarifies how they interact.

### Command Syntax Translation

Because Bun's package manager commands map closely to npm and yarn syntax, you must use Bun's specific keywords to achieve what you normally do in `pnpm`. [link](https://dev.to/parthvirgoz/run-bun-npm-yarn-and-bun-commands-16e6)

| Action                 | `pnpm` Command      | `bun` Equivalent   | Compatibility Status                         |
| ---------------------- | ------------------- | ------------------ | -------------------------------------------- |
| **Install all deps**   | `pnpm install`      | `bun install`      | Fully compatible (reads your `package.json`) |
| **Add a package**      | `pnpm add <pkg>`    | `bun add <pkg>`    | Fully compatible                             |
| **Add dev dependency** | `pnpm add -D <pkg>` | `bun add -d <pkg>` | Fully compatible (note lowercase `-d`)       |
| **Remove a package**   | `pnpm remove <pkg>` | `bun remove <pkg>` | Fully compatible                             |
| **Run a script**       | `pnpm run <script>` | `bun run <script>` | Fully compatible                             |
| **Execute a binary**   | `pnpm dlx <pkg>`    | `bunx <pkg>`       | Fully compatible                             |
| **Clean cache**        | `pnpm store prune`  | `bun pm cache rm`  | Functionally identical, different syntax     |

### Architectural Compatibility

If you are transitioning a project from `pnpm` to Bun, or running them alongside one another, keep these core behaviors in mind:

- **Monorepos & Workspaces**: Bun fully supports multi-package monorepos natively. Instead of using `pnpm-workspace.yaml`, Bun relies on the standard `"workspaces"` array directly inside your root `package.json`.
- **Lockfile Incompatibility**: Bun cannot read or update `pnpm-lock.yaml`. When you execute `bun install`, it generates its own lockfile. While Bun automatically converts standard `package-lock.json` files, it does not automatically parse `pnpm`'s specific lockfile layout.
- **Global Store vs. Hardlinks**: Both engines optimize disk space, but they do it differently. `pnpm` creates a single global content-addressable store and links packages via symlinks. Bun installs dependencies down into a flat `node_modules` structure using fast system hardlinks, making Bun's output highly compatible with standard Node.js applications. [link](https://github.com/oven-sh/bun/issues/24838)

### Mixing the Bun Runtime with pnpm

If you love `pnpm` for package management but want to use Bun for its blazing-fast JavaScript/TypeScript runtime engine, you can easily use them together. You do not have to pick just one. [link](https://www.reddit.com/r/bunjs/comments/16hse8y/it%5Fis%5Fpossible%5Fto%5Fuse%5Fthe%5Fbun%5Fruntime%5Fwith%5Fa/)

You can let `pnpm` manage your dependencies and use `bun run` to execute your scripts: [link](https://www.reddit.com/r/bunjs/comments/16hse8y/it%5Fis%5Fpossible%5Fto%5Fuse%5Fthe%5Fbun%5Fruntime%5Fwith%5Fa/)

bash

```
# Keep using pnpm for packages
pnpm add tailwindcss

# Use Bun to execute your application code or test suites
bun run dev
bun test
```

Use code with caution.

If you are planning to migrate completely, let me know if your project relies on **pnpm overrides**, **patched dependencies**, or **complex workspace filters**, and I can show you how to map those specific configurations over to Bun.

- [link](https://www.reddit.com/r/bun/comments/1qmhp5a/why%5Fare%5Fyou%5Fstill%5Fusing%5Fnpm/)\
  Why are you still using npm? : r/bun - Reddit\
  Jan 25, 2026 — For me, I like how Bun has the runtime, but also the package manager and bundler so I only need to use Bun for everything. However...\
  Reddit·r/bun
- [link](https://www.youtube.com/watch?v=d0LbyYml650\&t=646)\
  Bun v1.0 - Say goodbye to NPM, PNPM and YARN!\
  Sep 11, 2023 — and now I want to put them into the test by using the create next up. so I want to just try to actually use the create next op. an...\
  2m\
  YouTube·CoderOne
- [link](https://github.com/oven-sh/bun/issues/24838)\
  Bun install unexpectedly replacing \`npm run\` command in ... - GitHub\
  Nov 18, 2025 — Description \* What version of Bun is running? 1.3.2+b131639cc. \* What platform is your computer? Darwin 24.5.0 arm64 arm. \* What s...\
  GitHub

Show all

# compare pnpm and bun

The primary difference is that <mark><strong><span>pnpm</span><span> </span>is a dedicated, strict package manager</strong><span> </span>built for Node.js compatibility and disk efficiency, while<span> </span><strong><span><a rel="noopener" href="https://dev.to/pockit_tools/pnpm-vs-npm-vs-yarn-vs-bun-the-2026-package-manager-showdown-51dc">Bun</a></span><span> </span>is an all-in-one JavaScript runtime and toolkit</strong><span> </span>that happens to include an incredibly fast package manager</mark>. [link](https://www.deployhq.com/blog/choosing-the-right-package-manager-npm-vs-yarn-vs-pnpm-vs-bun)

Choosing between them comes down to whether you prioritize architectural strictness and monorepo stability (pnpm) or sheer installation speed and toolchain simplicity (Bun). [link](https://www.reddit.com/r/typescript/comments/1pu1f9u/pnpm%5Fvs%5Fbun/)

***

### Core Comparison Overview

| Feature                   | pnpm (v10+)                      | Bun (v1.3+)                           |
| ------------------------- | -------------------------------- | ------------------------------------- |
| **Primary Nature**        | Dedicated Package Manager        | All-in-one Runtime & Toolkit          |
| **Underlying Engine**     | Node.js (JavaScript/TypeScript)  | Zig (Compiled native binary)          |
| **Cold Install Speed**    | Fast (Strong second place)       | Ultra-Fast (Industry leader)          |
| **Disk Space Efficiency** | Maximized (Global content store) | Standard (Traditional project copies) |
| **Dependency Resolution** | Strict (Prevents hidden bugs)    | Hoisted / Flat (Standard npm style)   |
| **Monorepo Maturity**     | Production-standard & robust     | Growing rapidly but still catching up |
| **Ecosystem Ecosystem**   | 100% stable with Node.js         | Highly compatible, minor edge cases   |

***

### Key Technical Differences

#### 1. Storage Architecture and Disk Usage

- **pnpm**: Uses a **global, content-addressable store**. It saves each unique version of a package exactly once on your hard drive. Individual projects then use hard links or symlinks to reference those files. This prevents disk bloat and saves tens of gigabytes across multiple projects.
- **Bun**: Utilizes a centralized cache for speed but still generates a **traditional, flat `node_modules` structure** for each project. It does not optimize for cross-project deduplication on your hard drive in the way pnpm does. [link](https://www.reddit.com/r/node/comments/1evtsen/what%5Fis%5Fnow%5Fthe%5Fstate%5Fof%5Fpackage%5Fmanagers/)

#### 2. Performance and Installation Speed

- **pnpm**: Significantly faster than npm. However, because it has to manage symlinks and map complex structures, it takes a few more CPU cycles.
- **Bun**: The **fastest package manager available**, sometimes running up to 5x faster than pnpm on cold installs. Written natively in Zig, Bun bypasses JavaScript overhead. It uses a highly efficient binary lockfile (`bun.lock`) and parallel processing to install packages almost instantly. [link](https://www.deployhq.com/blog/choosing-the-right-package-manager-npm-vs-yarn-vs-pnpm-vs-bun)

#### 3. Strictness vs. Convenience

- **pnpm**: Enforces strict dependency isolation. Your code cannot require or import "phantom dependencies" (packages that are sub-dependencies of your tools but not explicitly declared in your `package.json`). This prevents production runtime bugs but sometimes requires troubleshooting broken legacy packages during migration.
- **Bun**: Uses standard flat hoisting. It is highly forgiving and mimics classic npm behavior, ensuring that legacy packages "just work" without requiring strict setup tweaks. [link](https://www.deployhq.com/blog/choosing-the-right-package-manager-npm-vs-yarn-vs-pnpm-vs-bun)

#### 4. Monorepos and Workspaces

- **pnpm**: The enterprise standard for monorepos. It features advanced filtering flags (e.g., `pnpm --filter`) and robust multi-package workspace handling that makes it stable for large, fragmented architectures.
- **Bun**: Features native workspace configurations inside `package.json` and supports unified dependency catalogs. While it handles everyday monorepos quickly, its tooling is historically newer and lacks some of pnpm's advanced topological filtering nuances. [link](https://www.reddit.com/r/typescript/comments/1pu1f9u/pnpm%5Fvs%5Fbun/)

***

### Which One Should You Choose?

- **Choose pnpm if**: You are managing large enterprise systems, complex monorepos, or multiple projects on a single machine with limited disk space. It offers maximum predictability, standard Node.js stability, and strict protection against messy dependency graphs.
- **Choose Bun if**: You are building greenfield TypeScript applications, rapid prototypes, or looking for an all-in-one ecosystem. It shines when you want to use its unified toolchain (bundler, test runner, and runtime) alongside its ultra-fast installer. [link](https://www.deployhq.com/blog/choosing-the-right-package-manager-npm-vs-yarn-vs-pnpm-vs-bun)

To help tailor this advice, could you share:

- Are you evaluating these for a **monorepo** or a **single application**?

- Are you looking to change your **JavaScript runtime** (Node.js vs Bun) or strictly your **package manager**?

- [link](https://www.reddit.com/r/typescript/comments/1pu1f9u/pnpm%5Fvs%5Fbun/)\
  pnpm vs bun : r/typescript - Reddit\
  Dec 23, 2025 — \* Natural\_Row\_4318. • 7mo ago. I've started using Bun, and am heavily leaning towards making the switch for all my projects that d...\
  Reddit·r/typescript

- [link](https://www.reddit.com/r/node/comments/1evtsen/what%5Fis%5Fnow%5Fthe%5Fstate%5Fof%5Fpackage%5Fmanagers/)\
  What is now the state of package managers? : r/node - Reddit\
  Aug 19, 2024 — \* jedenjuch. • 2y ago. I use pnpm and don't think too much about it. \* The-Malix. • 2y ago. pnpm for node. bun add for bun. deno a...\
  Reddit·r/node

- [link](https://www.deployhq.com/blog/choosing-the-right-package-manager-npm-vs-yarn-vs-pnpm-vs-bun)\
  pnpm vs npm vs Yarn vs Bun: Speed, Disk Usage ... - DeployHQ\
  Jun 12, 2026 — Bun installs 18× faster than npm on a fresh project — but so does pnpm, and pnpm doesn't require you to swap out your runtime. Tha...\
  DeployHQ

Show all

## what about doing everything w bun

Moving entirely to Bun to handle your entire stack—using it as your **runtime, package manager, test runner, and bundler**—is an incredibly satisfying developer experience. It eliminates the configuration fatigue of managing Node, npm, Jest, and Webpack separately.

However, committing fully to the Bun ecosystem comes with specific trade-offs between sheer performance and enterprise-grade maturity.

***

### The Advantages of "All-in-Bun"

Going all-in means you can delete several configuration files (`tsconfig.json` can be simplified, and files like `jest.config.js` or `.babelrc` disappear entirely).

- **Instant Startup:** Your apps boot up in milliseconds. Bun uses Apple's WebKit engine (JavaScriptCore) instead of Google's V8 (Node.js), which is tuned for rapid cold-starts.
- **Native TypeScript & JSX:** You can run `.ts`, `.tsx`, and `.jsx` files directly out of the box (`bun run index.ts`). No build or compilation step is needed during development.
- **Unified Tooling:**
  - `bun install` replaces npm/pnpm.
  - `bun test` replaces Jest/Vitest (and runs up to 20x faster).
  - `bun build` replaces Webpack/esbuild.
- **Dual-Module Harmony:** Bun natively supports both `import` (ESM) and `require()` (CommonJS) in the same file. You will rarely suffer from the module format mismatch errors common in modern Node.js.

***

### The Risks and Trade-offs

While Bun is highly compatible with the Node.js ecosystem, it is not a 100% identical drop-in replacement.

#### 1. The "Long Tail" of Node.js Compatibility

Bun implements Node’s native APIs (like `fs`, `path`, and `crypto`) from scratch in Zig. While almost all major frameworks (Next.js, Remix, Astro, Vite) work flawlessly, some highly specific, older, or deeply compiled native C++ Node modules can still fail or exhibit edge-case bugs.

#### 2. Ecosystem Lock-In and Constraints

- **Testing Ecosystem:** `bun test` is heavily inspired by Jest, but it doesn't support every niche Jest plugin or mocking utility. If your team relies on deeply integrated testing ecosystems, migrating test suites can require rewriting code.
- **Deployment Limits:** While major hosting platforms (Vercel, AWS, Fly.io, Railway) support Bun, some legacy enterprise cloud environments or serverless infrastructures are strictly optimized around Node.js runtimes.

#### 3. Memory Profile Clashes

Because Bun uses JavaScriptCore, it manages memory and garbage collection differently than Node's V8 engine. While Bun typically uses less memory on startup, long-running, heavily loaded production servers can sometimes show different memory degradation behaviors compared to Node.js.

***

### The Verdict: Should You Do It?

- **Do it if:** You are starting a new greenfield project, building a SaaS application, creating CLI tools, or running standard full-stack frameworks (like Elysia, Hono, Next.js, or Astro). The speed and productivity boost is massive.
- **Hold off if:** You are migrating a massive, older enterprise codebases with dozens of legacy dependencies, complex monorepo configurations, or strict compliance requirements that demand a decades-proven environment like Node.js.

If you are considering migrating an existing project, let me know:

- What **backend framework** (e.g., Express, NestJS, Next.js) are you currently using?

- Do you rely heavily on **native C++ addons** or specific **testing libraries** like Mockwork or standard Jest?

- [link](https://medium.com/@onix%5Freact/bun-a-fast-all-in-one-javascript-runtime-3eca63a1a02b)\
  Bun — A fast all-in-one JavaScript runtime\
  Oct 24, 2025 — Bun unifies your entire development stack into a single executable, streamlining the Developer Experience (DX) and eliminating the...\
  \
  \
  Medium

- [link](https://oneuptime.com/blog/post/2026-01-31-bun-getting-started/view)\
  How to Get Started with Bun Runtime\
  Jan 31, 2026 — Bun represents a significant evolution in the JavaScript runtime ecosystem. Its focus on performance, developer experience, and al...\
  \
  \
  OneUptime

- [link](https://www.browserstack.com/guide/bun-playwright)\
  How to Use Bun for Playwright Tests in 2026?\
  Jun 16, 2026 — This is especially valuable when running frequent local tests during development. Reduced Configuration Overhead: Bun comes with a...\
  \
  BrowserStack

Show all

# does bun support bun link -g

<mark><strong><span>No, Bun does not support a<span> </span></span><code dir="ltr">-g</code><span> </span>(or<span> </span><code dir="ltr">--global</code>) flag for the<span> </span><code dir="ltr">bun link</code><span> </span>command.</strong></mark>

Unlike `npm link`, where the global registration and local linking are split into distinct flag behaviors, Bun handles global registration inherently by default. [link](https://github.com/oven-sh/bun/issues/4719)

### How `bun link` Works

Bun structures its linking workflow into two straightforward, zero-flag steps: [link](https://samuellawrentz.com/blog/reusable-bun-modules/)

- **Step 1: Register the package** — Navigate to the directory of the package you want to link from and simply run:\
  bash

<!---->

```
bun link
```

Use code with caution.\
This automatically registers the package **globally** on your local machine. You do not need to pass a `-g` flag.

- **Step 2: Use the package** — Navigate to the consumer project where you want to use the module and run:\
  bash

<!---->

```
bun link <package-name>
```

Use code with caution.\
This creates an instant symlink inside that project's `node_modules` directory. [link](https://github.com/oven-sh/bun/issues/4719)

If you pass `-g` to the command, Bun will typically either ignore it or throw an unrecognized flag error depending on the exact version you are running. For further details on package management workflows, check out the official [bun link documentation](https://bun.com/docs/pm/cli/link).

Would you like help troubleshooting a **broken symlink** or setting up a **monorepo workspace** instead? [link](https://nx.dev/docs/guides/tips-n-tricks/bun-workspaces)

- [link](https://github.com/oven-sh/bun/issues/4719)\
  Bun link works but installs says package is not linked · Issue #4719 · oven-sh/bun\
  Sep 9, 2023 — There are a few things you can try if your bun link isn't working: \* Run \`bun link\` in the directory of the package you want to li...\
  GitHub
- [link](https://bun.com/docs/pm/cli/link)\
  bun link\
  Use bun link in a local directory to register the current package as a “linkable” package. This package can now be “linked” into o...\
  Bun
- [link](https://samuellawrentz.com/blog/reusable-bun-modules/)\
  Building Reusable Bun Modules - Why Bun Makes It Stupidly ...\
  Feb 21, 2026 — Bun runs TypeScript natively, so your source IS your distribution. This alone eliminates half the files in a typical Node module. ...\
  samuellawrentz.com

Show all

## what if i run bun link on a folder with this packagejson

"bin": {\
"foo": "./index.js",\
}

When you run `bun link` in that folder, Bun registers the package globally and automatically creates a symlink for your executable binary.

Because Bun mimics the behavior of npm's binary linking, the executable becomes immediately available to run system-wide from your command line.

### What Happens Behind the Scenes

- **Global Binary Link**: Bun creates a symlink pointing to your `./index.js` file inside your global Bun installation's `bin` folder (usually located at `~/.bun/bin/foo`).
- **Global Package Link**: Bun saves a reference to your package directory inside its global cache store so other local projects can link to it.

### Required Step: The Shebang

For your `foo` command to actually execute successfully when called, you must ensure that your `./index.js` file starts with a **shebang line**. This tells your operating system to execute the script using Bun (or Node).

Add this to the very top of your `./index.js`:

javascript

```
#!/usr/bin/env bun
// Your code goes here
console.log("Hello from foo!");
```

Use code with caution.

### How to Test It

1. Run `bun link` in the package folder.
2. Open a new terminal window.
3. Type `foo` and press enter.

Would you like to know how to **pass command-line arguments** to your new binary, or do you need help **unlinking** it later?

# what does bun link do

The <mark><strong><code dir="ltr">bun link</code><span> </span>command registers a local JavaScript/TypeScript package on your computer so you can use it in another local project without publishing it to npm</strong></mark>. It is the [Bun package manager](https://bun.com/docs/pm/cli/link) equivalent of `npm link` or `yarn link` and is used extensively for testing and developing packages locally. [link](https://bun.com/docs/pm/cli/link)

### How it Works

Using `bun link` connects two local projects in a simple two-step process: [link](https://bun.com/docs/pm/cli/link)

1. **Register the source package**: Navigate to your reusable package directory (`/path/to/my-plugin`) and run `bun link`. This globally registers the package on your machine.
2. **Consume the package**: Navigate to your active application directory and run `bun link <package-name>` (e.g., `bun link my-plugin`). [link](https://bun.com/docs/pm/cli/link)

Bun will instantly create a symlink in your application's `node_modules` folder pointing directly back to your local package code. Any code changes you make inside `my-plugin` will immediately reflect in your application without needing to re-install. [link](https://bun.com/docs/pm/cli/link)

### Useful Flags

- **`bun link <package-name> --save`**: Links the package and automatically adds it to your application's `package.json` dependencies field.
- **`bun unlink`**: Run this inside your package directory to unregister it from your global machine space when you are finished developing. [link](https://bun.com/docs/pm/cli/link)

If you want to look into more advanced project structure methods, I can explain how to set up **monorepos** or use **Bun Workspaces**. Would you like to see an example of that? [link](https://bun.com/docs/guides/install/workspaces)

- [link](https://bun.com/docs/pm/cli/link)\
  bun link\
  The \`bun link\` command registers a package as a linkable package in a local directory. This allows you to link the package into ot...\
  Bun
- [link](https://github.com/oven-sh/bun/issues/4719)\
  Bun link works but installs says package is not linked · Issue #4719 · oven-sh/bun\
  Sep 9, 2023 — There are a few things you can try if your bun link isn't working: \* Run \`bun link\` in the directory of the package you want to li...\
  GitHub
- [link](https://bun.com/docs/pm/cli/install)\
  bun install\
  Apr 17, 2021 — Platform-specific backends. For performance, bun install uses different system calls to install dependencies depending on the plat...\
  Bun

Show all

## what does bun link name do, example

The **`bun link <name>` command connects a globally registered local package to your current project's `node_modules` folder**.

It looks for a package registered under `<name>` on your computer and creates a symbolic link (symlink) to it. This lets you import and test your local package in an application before publishing it to npm.

***

### Step-by-Step Example

Imagine you are building a custom logging tool called `super-logger` and want to test it inside a web application called `my-web-app`.

#### 1. Register the Package

First, open your terminal, navigate to your custom package, and register it.

bash

```
cd /path/to/super-logger
bun link
```

Use code with caution.

- **What happens:** Bun registers `super-logger` (using the `name` field from its `package.json`) into a global registry on your machine.

#### 2. Link it to your Application

Next, navigate to your main web application and link the package by its name.

bash

```
cd /path/to/my-web-app
bun link super-logger
```

Use code with caution.

- **What happens:** Bun creates a shortcut inside `/my-web-app/node_modules/super-logger` that points directly to `/path/to/super-logger`.

#### 3. Use it in Code

Now you can import it in `my-web-app` just like a regular npm package:

javascript

```
import { log } from "super-logger";

log("It works locally!");
```

Use code with caution.

Any changes you make to the code inside the `super-logger` folder will instantly take effect in `my-web-app` without needing to reinstall.

***

If you are running into issues getting the link to work, let me know. I can help you **troubleshoot symlink paths** or show you how to **undo the link** when you are done.

- [link](https://bun.com/docs/pm/cli/link)\
  bun link\
  bun link Use bun link in a local directory to register the current package as a “linkable” package. This package can now be “linke...\
  \
  \
  Bun
- [link](https://github.com/oven-sh/bun/issues/4719)\
  Bun link works but installs says package is not linked · Issue #4719 · oven-sh/bun\
  Sep 9, 2023 — rochdev commented on Oct 24, 2025 It looks like you might need to run bun link in the directory of the package you want to link fr...\
  \
  \
  GitHub
- [link](https://bun.com/blog/bun-v1.2)\
  Bun 1.2\
  Jan 22, 2025 — You can now publish npm packages using bun publish .\
  \
  \
  Bun


# . test

```sh
 ~/Documents/f/intuitive/templates/node cli
 % b link      
bun link v1.3.14 (0d9b296a)
Success! Registered "foo"

To use foo in a project, run:
  bun link foo

Or add it in dependencies in your package.json file:
  "foo": "link:foo"
 ~/Documents/f/intuitive/templates/node cli
 % b unlink
bun unlink v1.3.14 (0d9b296a)
success: unlinked package "foo"
```
