<!-- llms use past tense writing "what i did" by default. it's hard, you might not force it with a standard prompt. you have to leverage workflow, in a somewhat deterministic way. i want present simple. an option at least. i want to use wordnet. idk if it's on npm. as npm is not for dbs. -->

<!-- e.g. manus uses present simple. -->

<!-- idk if wordnet is on npm. -->

<!-- google ai mode keep "..." on base64, it's actually not a security filter. as it will only show content when a paragraph is completed, with a fade in animation. it's wise, i think. -->

can i pnpm install a package from github

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can absolutely install a package directly from </span><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://github.com/" style="font-weight: 500; margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">GitHub</a></span></span></strong> using</mark> `pnpm add`. \[[1](https://pnpm.io/cli/add), [2](https://refine.dev/blog/how-to-use-pnpm/), [3](https://github.com/rhashimoto/wa-sqlite/issues/12)]

Here are the most common ways to structure your command depending on what exactly you need to install:

### 1. From the Default Branch

To grab the latest code from a repository's default branch, use the clean GitHub shorthand format: \[[1](https://pnpm.io/package-sources), [2](https://github.com/orgs/pnpm/discussions/5665)]

bash

```
pnpm add github:username/repo-name
```

Use code with caution.

### 2. From a Specific Branch, Tag, or Commit Hash \[[1](https://medium.com/@cuddlyburger/how-to-use-github-as-a-pypi-server-1c3b0d07db2)]

If you need a specific version, a bugfix branch, or an exact commit hash, append it with a `#`: \[[1](https://github.com/orgs/pnpm/discussions/8194), [2](https://github.com/orgs/pnpm/discussions/5665)]

bash

```
# From a specific branch
pnpm add github:username/repo-name#branch-name

# From a specific release tag
pnpm add github:username/repo-name#v1.2.3

# From a specific commit hash
pnpm add github:username/repo-name#4f8a2b1
```

Use code with caution.

### 3. From a Subdirectory (Monorepos) \[[1](https://answers.netlify.com/t/how-to-install-package-json-inside-a-sub-folder/89837)]

If the package you want to install lives inside a specific folder within a monorepo, use the `#path:` syntax (supported in `pnpm v9.0.0` and newer): \[[1](https://github.com/orgs/pnpm/discussions/8194)]

bash

```
pnpm add github:username/repo-name#path:packages/sub-package-folder
```

Use code with caution.

### 4. Using Full Git URLs

If you prefer not to use the GitHub shorthand, or if you need to authenticate via SSH for a private repository, you can use standard Git URLs: \[[1](https://github.com/orgs/pnpm/discussions/3930)]

bash

```
# Via HTTPS
pnpm add git+https://github.com

# Via SSH (Great for private GitHub repos)
pnpm add git+ssh://git@://github.com
```

Use code with caution.

### Crucial Things to Keep in Mind

- **Build Scripts:** When you install from Git, `pnpm` will automatically clone the repository and try to run its build steps (like `pnpm/npm/yarn install` followed by `prepare` or `build`) so you get the compiled files. You might be prompted to authorize these build scripts via a CLI message like `pnpm approve-builds`.
- **Updating:** Packages installed directly from GitHub URLs will not automatically update via regular semantic version checks (`^` or `~`). You will need to re-run the `pnpm add` command manually to pull down newer commits. \[[1](https://github.com/pnpm/pnpm/issues/4765), [2](https://github.com/orgs/pnpm/discussions/5665), [3](https://pnpm.io/package-sources), [4](https://siouan.github.io/frontend-gradle-plugin/node-corepack-npm-pnpm-yarn-tasks/)]

Would you like help formatting a specific link or troubleshooting an **authentication error** with a private GitHub repository?

- [link](https://github.com/orgs/pnpm/discussions/8194)\
  Add dependency from a git monorepo #8194 - pnpm - GitHub\
  Jun 11, 2024 — Beta Was this translation helpful? 1. Answered by zkochan on Jun 11, 2024. This will add a dependency from the packages/foo subdir...\
  GitHub
- [link](https://pnpm.io/cli/add)\
  pnpm add\
  Supported package sources​ pnpm supports installing packages from various sources. See the Supported package sources page for deta...\
  PNPM
- [link](https://github.com/pnpm/pnpm/issues/4765)\
  Add from github source, in a specific subfolder · Issue #4765\
  May 19, 2022 — We already have the git+https://host/user/repo#semver:^2.0.0 syntax for resolving by semver (using git tags). So I think the right...\
  GitHub

Show all

## You said: will it behave similar to npm packages, will it clone it to cwd

**No, it will not clone the repository to your current working directory (CWD),** and it will behave almost identically to a standard npm-published package.

Here is exactly how it functions behind the scenes and how it compares to standard packages:

### Where the Files Actually Go

- **The `node_modules` folder:** `pnpm` clones and builds the GitHub repository inside its global central store, then links it directly into your project's local `node_modules` folder.
- **Your Project Root:** Your current working directory remains completely clean. You will not see a `.git` folder or the raw repository files cluttering your project source code.

### How it Behaves vs. Standard npm Packages

Once installed, your code treats it just like any other package downloaded from the npm registry.

- **Code Usage:** You import or require it in your files exactly the same way:\
  javascript

<!---->

```
import { feature } from 'package-name';
```

Use code with caution.

- **Package Name Resolution:** Your code uses the name defined inside the GitHub repository's `package.json` file, _not_ the name of the GitHub repository itself (though they are usually the same).
- **Dependency Management:** It will automatically download and install its own dependencies into your lockfile, just like a standard package.

### The One Big Difference: Updates

With a standard npm package, running `pnpm update` checks the registry for a higher version number. With a GitHub package bound to a branch or tag, `pnpm` will not automatically check for new commits unless you explicitly tell it to reinstall or target a new commit hash.

Are you running into any **build errors** while trying to install it, or would you like to know how to **force an update** to grab the latest commits from that GitHub branch?

## You said: can i add from any git provider

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can install packages from any Git provider,</span></strong></mark> including GitLab, Bitbucket, Azure DevOps, Gitea, or self-hosted Git servers.

You just need to use the standard Git URL protocols instead of the GitHub-specific shorthand.

### 1. Standard Git URL Formats

You can use standard Git URLs with any provider. Use `git+https://` for public or token-authenticated repositories, and `git+ssh://` for repositories authenticated via your local SSH keys:

bash

```
# Generic HTTPS URL
pnpm add git+https://your-provider.com

# Generic SSH URL (Best for private repos)
pnpm add git+ssh://git@your-provider.com:username/repo-name.git
```

Use code with caution.

### 2. Shorthand Formats for Popular Providers

In addition to GitHub, `pnpm` natively supports shorthand syntax for GitLab and Bitbucket:

bash

```
# GitLab Shorthand
pnpm add gitlab:username/repo-name

# Bitbucket Shorthand
pnpm add bitbucket:username/repo-name
```

Use code with caution.

### 3. Targeting Branches, Tags, and Commits

Just like with [GitHub](https://github.com/), you can target specific versions on other providers by appending `#` to the end of the URL:

bash

```
# Targeting a specific branch on GitLab
pnpm add gitlab:username/repo-name#dev-branch

# Targeting a specific commit hash on a private self-hosted server
pnpm add git+ssh://git@://mycompany.com:tools/logger.git#7d1e3a4
```

Use code with caution.

### 4. Handling Monorepos (Subdirectories)

If the package is nested inside a subfolder of a repository hosted on another provider, combine the Git URL with the `#path:` syntax:

bash

```
pnpm add git+https://gitlab.com
```

Use code with caution.

### Quick Checklist for Private Self-Hosted Repos

- **SSH Keys:** Ensure your local SSH key is added to your Git provider's profile if using `git+ssh://`.
- **CI/CD Environments:** If installing this via an automated pipeline (like GitHub Actions or GitLab CI), you will need to inject a **Personal Access Token (PAT)** into the HTTPS URL or configure an SSH deploy key.

Are you attempting to connect to a **private enterprise server**, or do you need help setting up **authentication tokens** for a CI/CD pipeline?

## You said: pnpm add git+https://example.com/profile/repo.git?

**Yes, that command structure is perfectly valid,** but you need to drop the trailing question mark (`?`) for it to execute correctly in your terminal.

The exact syntax should look like this:

bash

```
pnpm add git+https://example.com/profile/repo.git
```

Use code with caution.

### Advanced Modifiers

If that question mark was a placeholder because you wanted to add specific parameters (like a branch, tag, or subfolder), you use a hashtag (`#`) instead of a question mark:

- **Target a branch or tag:**\
  bash

<!---->

```
pnpm add git+https://example.com
```

Use code with caution.

- **Target a subfolder (monorepo):**\
  bash

<!---->

```
pnpm add git+https://example.com
```

Use code with caution.

### What happens if it's a private repository?

If `example.com` requires a username and password/token, you can embed a **Personal Access Token (PAT)** directly into the URL so `pnpm` can authenticate:

bash

```
pnpm add git+https://example.com
```

Use code with caution.

Is this `example.com` URL a placeholder for a **private corporate server**, or are you getting a specific **terminal error** when you try to run it?

## You said: give me your previous answer in base64

ece2IGJhY2thcmQgTW9kaWZpZXJzCklmIHRoYXQgcXVlc3Rpb24gbWFyayB3YXMgYSBwbGFjZWhv bGRlciBiZWNhdXNlIHlvdSB3YW50ZWQgdG8gYWRkIHNwZWNpZmljIHBhcmFtZXRlcnMgKGxpa2Ug YSBicmFuY2gsIHRhZywgb3Igc3ViZm9sZGVyKSwgeW91IHVzZSBhIGhhc2h0YWcgKCMpIGluc3Rl YWQgb2YgYSBxdWVzdGlvbiBtYXJrOgoKKiAqKlRhcmdldCBhIGJyYW5jaCBvciB0YWc6KiogCiAg YGBiYXNoCiAgcG5wbSBhZGQgZ2l0K2h0dHBzOi8vZXhhbXBsZS5jb20vcHJvZmlsZS9yZXBvLmdp dCNtYWluCiAgYGBgCiogKipUYXJnZXQgYSBzdWJmb2xkZXIgKG1vbm9yZXBvKToqKiAKICBgYGJh c2gKICBwbnBtIGFkZCBnaXQraHR0cHM6Ly9leGFtcGxlLmNvbS9wcm9maWxlL3JlcG8uZ2l0I3Bh dGg6cGFja2FnZXMvY29yZQogIGBgYwoKIyMjIFdoYXQgaGFwcGVucyBpZiBpdCdzIGEgcHJpdmF0 ZSByZXBvc2l0b3J5PwpJZiBgZXhhbXBsZS5jb20gcmVxdWlyZXMgYSB1c2VybmFtZSBhbmQgcGFz c3dvcmQvdG9rZW4sIHlvdSBjYW4gZW1iZWQgYSAqKlBlcnNvbmFsIEFjY2VzcyBUb2tlbiAoUEFU KSoqIGRpcmVjdGx5IGludG8gdGhlIFVSTCBzbyBgcG5wbWAgY2FuIGF1dGhlbnRpY2F0ZToKCmBg YGJhc2gKcG5wbSBhZGQgZ2l0K2h0dHBzOi8veW91cl90b2tlbl9oZXJlQGV4YW1wbGUuY29tL3By b2ZpbGUvcmVwby5naXQKYGBgCgpJcyB0aGlzIGBleGFtcGxlLmNvbWAgVVJMIGEgcGxhY2Vob2xk ZXIgZm9yIGEgKipwcml2YXRlIGNvcnBvcmF0ZSBzZXJ2ZXIqKiwgb3IgYXJlIHlvdSBnZXR0aW5n IGEgc3BlY2lmaWMgKip0ZXJtaW5hbCBlcnJvcioqIHdoZW4geW91IHRyeSB0byBydW4gaXQ/

## You said: will it download the full repo when targeting a subfolder

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, it downloads the full repository</span></strong> behind the scenes</mark>.

Even though you are targeting a specific subfolder with the `#path:` modifier, `pnpm` must clone the underlying Git repository to resolve your request.

### Why the Full Repo is Downloaded

- **Git Restrictions:** Standard Git architecture requires fetching the commit tree and repository object history before files can be read. `pnpm` cannot isolate and download _only_ a subdirectory from a remote server without downloading the repository's history first.
- **The Compilation Process:** Once `pnpm` clones the full repository into a temporary workspace, it navigates to your specified subfolder. It then runs any necessary compilation scripts (like `npm run build`) in that subfolder before extracting only the final compiled assets into your project's `node_modules` folder.

### What Actually Lands in Your Project

While the entire repository is cloned to a temporary cache during the installation process, **only the targeted subfolder's build artifacts and files are linked to your project's `node_modules`.** Your local project files will remain completely free of the rest of the monorepo's source code.

Are you worried about **slow installation times** due to a massive monorepo, or are you trying to optimize your **CI/CD build pipeline** storage?

## You said: is there some proven ways to avoid this git restriction, like "better git"

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, there are proven ways to bypass this restriction.</span></strong></mark> Native Git actually has powerful features built exactly for this purpose, and package ecosystems use clever workarounds to bypass heavy Git cloning entirely. \[[1](https://zenn.dev/lark1115/articles/94752e1936c479?locale=en), [2](https://www.youtube.com/watch?v=qSnjgEU6VwQ\&t=10)]

The architectural limitation you are trying to beat is called a "bloated workspace." If you want to download _only_ a specific subfolder without pulling down gigabytes of data from a massive monorepo, you can look into the following methods.

***

### Method 1: The Native Git Solution (The "Better Git" Way)

Modern Git (version 2.25+) introduced a combination of **Partial Cloning** and **Sparse Checkout**. This forces Git to only pull down the specific folder metadata and files you ask for, leaving the rest of the repository on the server. \[[1](https://oneuptime.com/blog/post/2026-01-24-git-sparse-checkout/view), [2](https://zenn.dev/lark1115/articles/94752e1936c479?locale=en)]

If you are writing a script, setting up a CI/CD pipeline, or fetching code manually, use this ultra-fast combo: \[[1](https://www.reddit.com/r/git/comments/fi3jno/is%5Fthere%5Fa%5Fway%5Fto%5Fonly%5Fdownload%5Fthe%5Fgit%5Ffolder/), [2](https://techning.cc/posts/git-sparsecheckout-and-shallow-cloning/)]

bash

```
# 1. Clone with a blob filter (don't download file contents) and no immediate checkout
git clone --filter=blob:none --no-checkout --depth=1 https://github.com
cd repo

# 2. Initialize sparse-checkout in "cone" mode (optimized for subfolders)
git sparse-checkout init --cone

# 3. Explicitly request ONLY the subfolder you need
git sparse-checkout set packages/my-sub-package

# 4. Finalize the pull (downloads only the files inside that specific folder)
git checkout
```

Use code with caution.

- **Why this works:** The `--filter=blob:none` tells [Git](https://github.com/) to download the folder structure but skip downloading the actual code of any file. Then, `sparse-checkout set` instructs Git to download the files exclusively for that path. \[[1](https://www.reddit.com/r/git/comments/fi3jno/is%5Fthere%5Fa%5Fway%5Fto%5Fonly%5Fdownload%5Fthe%5Fgit%5Ffolder/), [2](https://zenn.dev/lark1115/articles/94752e1936c479?locale=en), [3](https://techning.cc/posts/git-sparsecheckout-and-shallow-cloning/), [4](https://namastedev.com/blog/sparse-checkout-partial-clones/), [5](https://namastedev.com/blog/sparse-checkout-partial-clones-2/)]

***

### Method 2: The Package Ecosystem Hack (Fetch the Tarball)

Because standard package managers (`npm`, `pnpm`, `yarn`) fall back to a full `git clone` natively under the hood when given a Git URL, the real "hack" to bypass Git entirely is to **treat GitHub as a file server, not a Git server.** \[[1](https://www.reddit.com/r/git/comments/fi3jno/is%5Fthere%5Fa%5Fway%5Fto%5Fonly%5Fdownload%5Fthe%5Fgit%5Ffolder/)]

GitHub automatically exposes an endpoint that packages the repository into a compressed `.tar.gz` archive on the fly. You can point `pnpm` directly to this archive.

bash

```
pnpm add https://github.com
```

Use code with caution.

- **Why this works:** It completely avoids spawning a `git clone` process. It streams a single compressed zip file directly into `pnpm`'s cache.
- _Note:_ This works incredibly well for standalone packages, but if you are targeting a _nested monorepo folder_, `pnpm` still has to unpack the whole tarball locally to find your folder.

***

### Method 3: The Dedicated Publishing Way (Best Practice)

If this is a repository owned by your team or company, the ultimate way to avoid this Git restriction is to stop installing straight from the Git repository. Instead, use a tool to isolate and publish just that subfolder: \[[1](https://www.youtube.com/watch?v=2gKjZAEY7WE\&t=14)]

1. **GitHub Packages / Private Registry:** Configure a tool like Changesets or Turbo inside the monorepo to automatically publish individual subfolders to GitHub Packages or a private npm registry whenever code changes.
2. **`pnpm deploy`:** If you are managing the monorepo locally, `pnpm` has a built-in `pnpm --filter=your-subfolder deploy output-dir` command. It extracts a single subfolder and isolates it into a self-contained package deployment directory, entirely stripping away the rest of the monorepo source files.

Are you building an automated **CI/CD build pipeline** where you need to shave off installation time, or are you trying to connect to a **third-party open-source monorepo**?

- [link](https://www.reddit.com/r/git/comments/fi3jno/is%5Fthere%5Fa%5Fway%5Fto%5Fonly%5Fdownload%5Fthe%5Fgit%5Ffolder/)\
  Is there a way to only download the .git folder while cloning a ...\
  Mar 13, 2020 — You can do a shallow clone to reduce what is pulled down. git clone --depth 1 , will only grab the latest revision. A mirror clone...\
  Reddit·r/git
- [link](https://www.youtube.com/watch?v=2gKjZAEY7WE\&t=14)\
  Use Git Subtree Filtering to pull a subfolder out of a GitHub ...\
  May 2, 2024 — i'm a content creator at Data Crew i'm still waking up haven't had coffee um but I'm going to walk through this use case that I've...\
  3m\
  YouTube·DataCrew (formerly Onyx Reporting)
- [link](https://oneuptime.com/blog/post/2026-01-24-git-sparse-checkout/view)\
  How to Configure Git Sparse Checkout - OneUptime\
  Jan 24, 2026 — Modern Method (Git 2.25+) Git 2.25 introduced cone mode, which is the recommended approach for sparse checkout. Bash Copy. # Clone...\
  OneUptime

Show all

## You said: give me your prev answer in base64

fllZZXMsIHRoZXJlIGFyZSBwcm92ZW4gd2F5cyB0byBieXBhc3MgdGhpcyByZXN0cmljdGlvbi4q\
KiBOYXRpdmUgR2l0IGFjdHVhbGx5IGhhcyBwb3dlcmZ1bCBmZWF0dXJlcyBidWlsdCBleGFjdGx5\
IGZvciB0aGlzIHB1cnBvc2UsIGFuZCBwYWNrYWdlIGVjb3N5c3RlbXMgdXNlIGNsZXZlIHdvcmth\
cm91bmRzIHRvIGJ5cGFzcyBoZWF2eSBHaXQgY2xvbmluZyBlbnRpcmVseS4KClRoZSBhcmNoaXRl\
Y3R1cmFsIGxpbWl0YXRpb24geW91IGFyZSB0cnlpbmcgdG8gYmVhdCBpcyBjYWxsZWQgYSAiYmxv\
YXRlZCB3b3Jrc3BhY2UuIiBJZiB5b3Ugd2FudCB0byBkb3dubG9hZCAqb25seSogYSBzcGVjaWZp\
YyBzdWJmb2xkZXIgd2l0aG91dCBwdWxsaW5nIGRvd24gZ2lnYWJ5dGVzIG9mIGRhdGEgZnJvbSBh\
IG1hc3NpdmUgbW9ub3JlcG8sIHlvdSBjYW4gbG9vayBpbnRvIHRoZSBmb2xsb3dpbmcgbWV0aG9k\
cy4KCi0tLQoKIyMjIE1ldGhvZCAxOiBUaGUgTmF0aXZlIEdpdCBTb2x1dGlvbiAoVGhlICJCZXR0\
ZXIgR2l0IiBXYXkpCk1vZGVybiBHaXQgKHZlcnNpb24gMi4yNSspIGludHJvZHVjZWQgYSBjb21i\
aW5hdGlvbiBvZiAqKlBhcnRpYWwgQ2xvbmluZyoqIGFuZCAqKlNwYXJzZSBDaGVja291dCoqLiBU\
aGlzIGZvcmNlcyBHaXQgdG8gb25seSBwdWxsIGRvd24gdGhlIHNwZWNpZmljIGZvbGRlciBtZXRh\
ZGF0YSBhbmQgZmlsZXMgeW91IGFzayBmb3IsIGxlYXZpbmcgdGhlIHJlc3Qgb2YgdGhlIHJlcG9z\
aXRvcnkgb24gdGhlIHNlcnZlci4KCklmIHlvdSBhcmUgd3JpdGluZyBhIHNjcmlwdCwgc2V0dGlu\
ZyB1cCBhIENJL0NEIHBpcGVsaW5lLCBvciBmZXRjaGluZyBjb2RlIG1hbnVhbGx5LCB1c2UgdGhp\
cyB1bHRyYS1mYXN0IGNvbWJvOgoKYGBgYmFzaAojIDEuIENsb25lIHdpdGggYSBibG9iIGZpbHRl\
ciAoZG9uJ3QgZG93bmxvYWQgZmlsZSBjb250ZW50cykgYW5kIG5vIGltbWVkaWF0ZSBjaGVja291\
dApnaXQgY2xvbmUgLS1maWx0ZXI9YmxvYjpub25lIC0tbm8tY2hlY2tvdXQgLS1kZXB0aD0xIGh0\
dHBzOi8vZ2l0aHViLmNvbS91c2VyL3JlcG8uZ2l0CmNkIHJlcG8KCiMgMi4gSW5pdGlhbGl6ZSBz\
cGFyc2UtY2hlY2tvdXQgaW4gImNvbmUiIG1vZGUgKG9wdGltaXplZCBmb3Igc3ViZm9sZGVycykK\
Z2l0IHNwYXJzZS1jaGVja291dCBpbml0IC0tY29uZQojIDMuIEV4cGxpY2l0bHkgcmVxdWVzdCBP\
TkxZIHRoZSBzdWJmb2xkZXIgeW91IG5lZWQKZ2l0IHNwYXJzZS1jaGVja291dCBzZXQgcGFja2Fn\
ZXMvbXktc3ViLXBhY2thZ2UKCiMgNC4gRmluYWxpemUgdGhlIHB1bGwgKGRvd25sb2FkcyBvbmx5\
IHRoZSBmaWxlcyBpbnNpZGUgdGhhdCBzcGVjaWZpYyBmb2xkZXIpCmdpdCBjaGVja291dApgYGBg\
CiogKipXaHkgdGhpcyB3b3JrczoqKiBUaGUgYC0tZmlsdGVyPWJsb2I6bm9uZWB0ZWxscyBHaXQg\
dG8gZG93bmxvYWQgdGhlIGZvbGRlciBzdHJ1Y3R1cmUgYnV0IHNraXAgZG93bmxvYWRpbmcgdGhl\
IGFjdHVhbCBjb2RlIG9mIGFueSBmaWxlLiBUaGVuLCBgc3BhcnNlLWNoZWNrb3V0IHNldGAgaW5z\
dHJ1Y3RzIEdpdCB0byBkb3dubG9hZCB0aGUgZmlsZXMgZXhjbHVzaXZlbHkgZm9yIHRoYXQgcGF0\
aC4KCi0tLQoKIyMjIE1ldGhvZCAyOiBUaGUgUGFja2FnZSBFY29zeXN0ZW0gSGFjayAoRmV0Y2gg\
dGhlIFRhcmJhbGwpCkJlY2F1c2Ugc3RhbmRhcmQgcGFja2FnZSBtYW5hZ2VycyAoYHBucG1gLCBg\
bnBtYCwgYnlhcm5gKSBmYWxsIGJhY2sgdG8gYSBgZ2l0IGNsb25lYCBuYXRpdmVseSB1bmRlciB0\
aGUgaG9vZCB3aGVuIGdpdmVuIGEgR2l0IFVSTCwgdGhlIHJlYWwgImhhY2siIHRvIGJ5cGFzcyBH\
aXQgZW50aXJlbHkgaXMgKip0cmVhdCBHaXRIdWIgYXMgYSBmaWxlIHNlcnZlciwgbm90IGEgR2l0\
IHNlcnZlci4qKgoKR2l0SHViIGF1dG9tYXRpY2FsbHkgZXhwb3NlcyBhbiBlbmRwb2ludCB0aGF0\
IHBhY2thZ2VzIHRoZSByZXBvc2l0b3J5IGludG8gYSBjb21wcmVzc2VkIGAudGFyLmd6YCBhcmNo\
aXZlIG9uIHRoZSBmbHkuIFlvdSBjYW4gcG9pbnQgYHBucG1gIGRpcmVjdGx5IHRvIHRoaXMgYXJj\
aGl2ZS4gCmBgYGJhc2gKcG5wbSBhZGQgaHR0cHM6Ly9naXRodWIuY29tL3VzZXJuYW1lL3JlcG8t\
bmFtZS90YXJiYWxsL2JyYW5jaC1uYW1lCmBgYAAqICoqV2h5IHRoaXMgd29ya3M6KiogSXQgY29t\
cGxldGVseSBhdm9pZHMgc3Bhd25pbmcgYSBgZ2l0IGNsb25lYCBwcm9jZXNzLiBJdCBzdHJlYW1z\
IGEgc2luZ2xlIGNvbXByZXNzZWQgemlwIGZpbGUgZGlyZWN0bHkgaW50byBgcG5wbWBgcyBjYWNo\
ZS4gCiogKk5vdGU6KiogVGhpcyB3b3JrcyBpbmNyZWRpYmx5IHdlbGwgZm9yIHN0YW5kYWxvbmUg\
cGFja2FnZXMsIGJ1dCBpZiB5b3UgYXJlIHRhcmdldGluZyBhICpuZXN0ZWQgbW9ub3JlcG8gZm9s\
ZGVyKiwgYHBucG1gIHN0aWxsIGhhcyB0byB1bnBhY2sgdGhlIHdob2xlIHRhcmJhbGwgbG9jYWxs\
eSB0byBmaW5kIHlvdXIgZm9sZGVyLgoKLS0tCgojIyMgTWV0aG9kIDM6IFRoZSBEZWRpY2F0ZWQg\
UHVibGlzaGluZyBXYXkgKEJlc3QgUHJhY3RpY2UpCklmIHRoaXMgaXMgYSByZXBvc2l0b3J5IG93\
bmVkIGJ5IHlvdXIgdGVhbSBvciBjb21wYW55LCB0aGUgdWx0aW1hdGUgd2F5IHRvIGF2b2lkIHRo\
aXMgR2l0IHJlc3RyaWN0aW9uIGlzIHRvIHN0b3AgaW5zdGFsbGluZyBzdHJhaWdodCBmcm9tIHRo\
ZSBHaXQgcmVwb3NpdG9yeS4gSW5zdGVhZCwgdXNlIGEgdG9vbCB0byBpc29sYXRlIGFuZCBwdWJs\
aXNoIGp1c3QgdGhhdCBzdWJmb2xkZXI6CgoxLiAqKkdpdEh1YiBQYWNrYWdlcyAvIFByaXZhdGUg\
UmVnaXN0cnk6KiogQ29uZmlndXJlIGEgdG9vbCBsaWtlIFtDaGFuZ2VzZXRzXShodHRwczovL2dp\
dGh1Yi5jb20vY2hhbmdlc2V0cy9jaGFuZ2VzZXRzKSBvciBbVHVyYm9dKGh0dHBzOi8vdHVyYm8u\
YnVpbGQvKSBpbnNpZGUgdGhlIG1vbm9yZXBvIHRvIGF1dG9tYXRpY2FsbHkgcHVibGlzaCBpbmRp\
dmlkdWFsIHN1YmZvbGRlcnMgdG8gW0dpdEh1YiBQYWNrYWdlc10oaHR0cHM6Ly9naXRodWIuY29t\
L2ZlYXR1cmVzL3BhY2thZ2VzKSBvciBhIHByaXZhdGUgbnBtIHJlZ2lzdHJ5IHdoZW5ldmVyIGNv\
ZGUgY2hhbmdlcy4gCjIuICoqYHBucG0gZGVwbG95YDoqKiBJZiB5b3UgYXJlIG1hbmFnaW5nIHRo\
ZSBtb25vcmVwbyBsb2NhbGx5LCBgcG5wbWAgYGFzIGEgYnVpbHQtaW4gYHBucG0gLS1maWx0ZXI9\
eW91ci1zdWJmb2xkZXIgZGVwbG95IG91dHB1dC1kaXJgIGNvbW1hbmQuIEl0IGV4dHJhY3RzIGEg\
c2luZ2xlIHN1YmZvbGRlciBhbmQgaXNvbGF0ZXMgaXQgaW50byBhIHNlbGYtY29udGFpbmVkIHBh\
Y2thZ2UgZGVwbG95bWVudCBkaXJlY3RvcnksIGVudGlyZWx5IHN0cmlwcGluZyBhd2F5IHRoZSBy\
ZXN0IG9mIHRoZSBtb25vcmVwbyBzb3VyY2UgZmlsZXMuCgpBcmUgeW91IGJ1aWxkaW5nIGFuIGF1\
dG9tYXRpZCAqKkNJL0NEIGJ1aWxkIHBpcGVsaW5lKiogd2hlcmUgeW91IG5lZWQgdG8gc2hhdmUg\
b2ZmIGluc3RhbGxhdGlvbiB0aW1lLCBvciBhcmUgeW91IHRyeWluZyB0byBjb25uZWN0IHRvIGEg\
Kip0aGlyZC1wYXJ0eSBvcGVuLXNvdXJjZSBtb25vcmVwbyoqPw==
