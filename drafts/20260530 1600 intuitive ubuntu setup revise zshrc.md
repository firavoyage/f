# will source nonexisting file err in shell

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, sourcing a non-existent file will throw an error</span></strong> in your shell</mark>. \[[1](https://oneuptime.com/blog/post/2026-01-24-bash-no-such-file-or-directory/view), [2](https://stackoverflow.com/questions/67844511/shell-script-source-on-non-existing-file-terminates-the-script)]

The shell will print a diagnostic error like `No such file or directory` to standard error (`stderr`). It will also return a non-zero exit status (usually `1`). \[[1](https://unix.stackexchange.com/questions/450239/when-or-why-should-you-check-for-a-files-existence-before-sourcing-it), [2](https://stackoverflow.com/questions/67844511/shell-script-source-on-non-existing-file-terminates-the-script), [3](https://oneuptime.com/blog/post/2026-01-24-bash-no-such-file-or-directory/view), [4](https://github.com/ocrmypdf/OCRmyPDF/issues/952)]

How the shell handles the error after printing it depends entirely on whether you are running an **interactive shell** or a **shell script**. \[[1](https://stackoverflow.com/questions/67844511/shell-script-source-on-non-existing-file-terminates-the-script)]

How Shells Handle the Error

- **Interactive Terminal**: The shell prints the error message and lets you keep typing new commands.
- **Shell Scripts (`sh` or POSIX mode)**: If you use the dot operator (`. filename`) in a POSIX-compliant shell like `dash` or `bash --posix`, **the script will instantly crash and exit**. This is because `.` is a special built-in command.
- **Standard Bash Scripts (`#!/bin/bash`)**: A standard non-interactive Bash script will print the error message to `stderr` but will continue executing the next lines of the script unless `set -e` (errexit) is turned on. \[[1](https://superuser.com/questions/992204/why-does-exec-non-existent-file-exits-the-shell-when-in-a-script-that-is-sourc), [2](https://stackoverflow.com/questions/67844511/shell-script-source-on-non-existing-file-terminates-the-script), [3](https://unix.stackexchange.com/questions/740889/how-do-i-keep-a-dash-shell-script-running-despite-any-error), [4](https://unix.stackexchange.com/questions/450239/when-or-why-should-you-check-for-a-files-existence-before-sourcing-it)]

***

How to Safely Source a File

To prevent your shell from erroring out or crashing, use one of the patterns below to check if the file exists before attempting to source it. \[[1](https://unix.stackexchange.com/questions/450239/when-or-why-should-you-check-for-a-files-existence-before-sourcing-it), [2](https://stackoverflow.com/questions/10735574/what-is-the-most-concise-way-to-source-a-file-only-if-it-exists-in-bash)]

1\. The Short One-Liner (Recommended)

This uses the `-f` flag to verify the target is a regular file before sourcing it. If the file does not exist, the shell silently moves on. \[[1](https://unix.stackexchange.com/questions/450239/when-or-why-should-you-check-for-a-files-existence-before-sourcing-it), [2](https://zerotomastery.io/blog/bash-if-file-exists/), [3](https://stackoverflow.com/questions/59757296/ignore-failure-on-source-command-in-bash-script), [4](https://unix.stackexchange.com/questions/404822/shell-script-to-create-a-file-if-it-doesnt-exist)]

bash

```
[ -f "/path/to/file" ] && . "/path/to/file"
```

Use code with caution.

_(Note: You can use `source` instead of `.` if you are strictly using Bash)._ \[[1](https://askubuntu.com/questions/504546/error-message-source-not-found-when-running-a-script), [2](https://www.reddit.com/r/linuxquestions/comments/dm55m7/does%5Fbinsh%5F4%5Fsource%5Fnot%5Ffound%5Fmean%5Fthe%5Fsource/)]

2\. The Clean If Statement

Use this if you want to provide a fallback option or a custom message. \[[1](https://stackabuse.com/bash-check-if-directory-or-file-exists/)]

bash

```
if [ -f "/path/to/file" ]; then
    source "/path/to/file"
else
    echo "Optional file not found, skipping..."
fi
```

Use code with caution.

3\. Suppressing Errors (Silencing)

If you don't care if the file is missing and just want to mute the error text, redirect standard error to `/dev/null`: \[[1](https://serverfault.com/questions/153875/how-to-let-cp-command-dont-fire-an-error-when-source-file-does-not-exist), [2](https://codesignal.com/learn/courses/bash-script-error-handling/lessons/standard-error-and-logging-in-shell-scripts)]

bash

```
source "/path/to/file" 2>/dev/null
```

Use code with caution.

_Warning: If your script runs in strict POSIX mode (`sh`), this will hide the error text but **will still crash the script** if the file is missing. Use the `[ -f ... ]` check to be completely safe._ \[[1](https://unix.stackexchange.com/questions/740889/how-do-i-keep-a-dash-shell-script-running-despite-any-error), [2](https://stackoverflow.com/questions/67844511/shell-script-source-on-non-existing-file-terminates-the-script), [3](https://unix.stackexchange.com/questions/450239/when-or-why-should-you-check-for-a-files-existence-before-sourcing-it), [4](https://stackoverflow.com/questions/59757296/ignore-failure-on-source-command-in-bash-script)]

Would you like help setting up a **fallback configuration** for your script, or are you trying to debug a script that is **unexpectedly closing**?

- [link](https://superuser.com/questions/992204/why-does-exec-non-existent-file-exits-the-shell-when-in-a-script-that-is-sourc)\
  Why does "exec non-existent-file" exits the shell when in a ...\
  Oct 27, 2015 — Why does "exec non-existent-file" exits the shell when in a script that is sourced? Ask Question. Asked 10 years, 6 months ago. Vi...\
  Super User
- [link](https://stackoverflow.com/questions/67844511/shell-script-source-on-non-existing-file-terminates-the-script)\
  Shell script source on non-existing file terminates the script\
  Jun 4, 2021 — 1 Answer. Sorted by: 7. When running in posix mode, bash will abort if the file named as the argument to . ( aka source ) does not...\
  Stack Overflow
- [link](https://unix.stackexchange.com/questions/740889/how-do-i-keep-a-dash-shell-script-running-despite-any-error)\
  How do I keep a dash shell script running despite any error?\
  Mar 25, 2023 — 2 Answers. ... That's because . is a special builtin. That is a POSIX requirement. Most other POSIX shells also do it, but in the ...\
  Unix & Linux Stack Exchange

Show all

# is it slow "$NVM\_DIR/nvm.sh"

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, sourcing </span><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">"$NVM\_DIR/nvm.sh"</code> is notoriously slow</strong></mark> and is one of the most common causes of terminal startup lag. \[[1](https://joshtronic.com/2018/10/05/speed-up-your-shell-prompt-when-usuing-nvm/), [2](https://www.growingwiththeweb.com/2018/01/slow-nvm-init.html)]

Why is it slow?

- **Pure Bash Architecture**: `nvm` is entirely written in shell script. It performs slow file system lookups and string loops every time a new shell opens.
- **Automatic Version Resolution**: By default, it runs internal routines to locate your default Node.js version, resolve aliases, and check path structures.
- **Subprocess Overhead**: The initialization often spawns external calls (like `npm config get prefix`), adding a noticeable 200ms to over 1 second of lag depending on your hardware. \[[1](https://github.com/nvm-sh/nvm/issues/1242), [2](https://github.com/nvm-sh/nvm/issues/782?timeline%5Fpage=1), [3](https://github.com/microsoft/WSL/issues/776), [4](https://github.com/nvm-sh/nvm/issues/1978), [5](https://github.com/nvm-sh/nvm/issues/539), [6](https://www.growingwiththeweb.com/2018/01/slow-nvm-init.html)]

***

How to fix it

Solution 1: Add the `--no-use` flag (Easiest) \[[1](https://github.com/jeffreytse/zsh-vi-mode/issues/111)]

Adding `--no-use` skips resolving the default Node version upon terminal startup, which significantly decreases the initialization time. \[[1](https://github.com/nvm-sh/nvm/issues/1242), [2](https://github.com/nvm-sh/nvm/issues/1978)]

Change your current `~/.bashrc` or `~/.zshrc` line to look like this:

bash

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" --no-use # Added flag
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Use code with caution.

- **Trade-off**: Node and global npm packages will not be automatically available in your system path until you explicitly type `nvm use default` or in that terminal window. \[[1](https://jerameel.medium.com/how-to-fix-nvm-slowing-down-terminal-startup-on-mac-f656569e2cb9), [2](https://github.com/nvm-sh/nvm/issues/1978)]

Solution 2: Lazy loading (Best Performance) \[[1](https://medium.com/@ankitbabber/how-i-improved-my-shell-load-time-with-a-lazy-load-3acd89f8c4a3)]

You can intercept the `node`, `npm`, and `nvm` commands so that the heavy `nvm.sh` script is only sourced the **very first time** you actually try to use Node. \[[1](https://www.reddit.com/r/zsh/comments/ygh7qp/why%5Fmy%5Fzsh%5Ftake%5Ftoo%5Fmuch%5Ftime%5Fto%5Fload/), [2](https://dev.to/thraizz/fix-slow-zsh-startup-due-to-nvm-408k)]

Replace your existing NVM lines in your shell profile configuration (`~/.zshrc` or `~/.bashrc`) with the following block: \[[1](https://blog.openreplay.com/switch-nodejs-versions-linux-nvm/), [2](https://vizzwebsolutions.com/blog/node-version-manager-nvm/)]

bash

```
export NVM_DIR="$HOME/.nvm"

# Create placeholder functions that load NVM on-demand
lazy_load_nvm() {
  unset -f nvm node npm npx corepack
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
}

# Assign the placeholder functions
nvm() { lazy_load_nvm; nvm "$@"; }
node() { lazy_load_nvm; node "$@"; }
npm() { lazy_load_nvm; npm "$@"; }
npx() { lazy_load_nvm; npx "$@"; }
corepack() { lazy_load_nvm; corepack "$@"; }
```

Use code with caution.

Solution 3: Switch to a faster alternative \[[1](https://www.reddit.com/r/zsh/comments/ygh7qp/why%5Fmy%5Fzsh%5Ftake%5Ftoo%5Fmuch%5Ftime%5Fto%5Fload/)]

If you want instant performance without workarounds, you can migrate to a modern version manager built in a compiled language: \[[1](https://www.reddit.com/r/zsh/comments/ygh7qp/why%5Fmy%5Fzsh%5Ftake%5Ftoo%5Fmuch%5Ftime%5Fto%5Fload/)]

- **fnm (Fast Node Manager)**: Built in Rust, it behaves similarly to NVM but functions almost instantly.
- **asdf** or **rtx / mise**: Universal version managers capable of managing Node, Python, Ruby, and more without destroying shell startup performance. \[[1](https://www.reddit.com/r/zsh/comments/ygh7qp/why%5Fmy%5Fzsh%5Ftake%5Ftoo%5Fmuch%5Ftime%5Fto%5Fload/), [2](https://www.honeybadger.io/blog/node-environment-managers/), [3](https://betterstack.com/community/guides/scaling-nodejs/nvm-alternatives-guide/), [4](https://www.voitanos.io/blog/why-i-switched-from-nvm-to-fast-node-manager/), [5](https://monovm.com/blog/how-to-check-nodejs-version/)]

If you would like help implementing **lazy-loading** or migrating your current environment to a faster tool like **fnm**, please let me know which **operating system** and **shell** (e.g., Zsh or Bash) you are running!

- [link](https://github.com/nvm-sh/nvm/issues/1242)\
  NVM is slow (> 650ms) · Issue #1242 - GitHub\
  Sep 23, 2016 — ljharb commented. ljharb. on Sep 23, 2016. Member. You can avoid the need to unalias by adding --no-use on the end of the line in ...\
  GitHub
- [link](https://github.com/nvm-sh/nvm/issues/782?timeline%5Fpage=1)\
  NVM starting too slow -- can I just add the bin folder to PATH? #782\
  Jul 9, 2015 — lxe commented. ... The two things that are slowing down the nvm.sh invocation (which automatically runs nvm use ): running npm con...\
  GitHub
- [link](https://www.reddit.com/r/zsh/comments/ygh7qp/why%5Fmy%5Fzsh%5Ftake%5Ftoo%5Fmuch%5Ftime%5Fto%5Fload/)\
  Why my ZSH take too much time to load? - Reddit\
  Oct 29, 2022 — My cron configuration comes to mind immediately as something you don't want to copy without prior understanding. \* • 4y ago • Edit...\
  Reddit·r/zsh

Show all

You said: can i easily replace nvm w fnm on ubuntu and expect things to just work

**Yes, you can easily replace `nvm` with `fnm` on Ubuntu**, and your existing workflows will "just work."

Because `fnm` is built in Rust, it is exceptionally fast, and it natively respects your existing `.nvmrc` files. This means your projects will still switch to the correct Node.js versions automatically without any changes to your project code.

***

Step-by-Step Migration Guide

Follow these steps to safely remove `nvm` and configure `fnm`.

1\. Backup and Uninstall NVM

First, completely remove the slow `nvm` files from your system.

bash

```
rm -rf "$HOME/.nvm"
```

Use code with caution.

2\. Clean Your Shell Configuration

Open your shell configuration file. On Ubuntu, this is usually `~/.bashrc` (or `~/.zshrc` if you installed Zsh).

bash

```
nano ~/.bashrc
```

Use code with caution.

Scroll to the bottom and **delete** the old NVM lines, which usually look like this:

bash

```
# REMOVE THESE LINES:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Use code with caution.

Save and exit (`Ctrl+O`, `Enter`, then `Ctrl+X`).

3\. Install FNM

Install `fnm` using its official automated installation script:

bash

```
curl -fsSL https://vercel.app | bash
```

Use code with caution.

4\. Apply changes and set up automatic switching

Reload your shell config so your system recognizes the new `fnm` command:

bash

```
source ~/.bashrc
```

Use code with caution.

To ensure `fnm` automatically switches Node versions when you enter a directory with an `.nvmrc` file, run this command to append the setup hook to your configuration:

bash

```
echo 'eval "$(fnm env --use-on-cd)"' >> ~/.bashrc
source ~/.bashrc
```

Use code with caution.

5\. Reinstall Your Node Versions

`fnm` manages its own isolated Node versions, so you will need to download your preferred versions one last time:

bash

```
fnm install --lts      # Installs the latest LTS version
fnm default lts/latest # Sets it as your system default
```

Use code with caution.

***

⚠️ Two Small "Gotchas" to Expect

While your daily commands (`node`, `npm`, `npx`) will work identically, keep these two differences in mind:

1. **Global Packages:** Any global packages you installed via NVM (like `npm install -g yarn` or `pm2`) will need to be reinstalled under FNM.
2. **Command differences:** If you manually install or switch versions, the syntax changes slightly:

- Old: `nvm install 18` ➡️ New: `fnm install 18`
- Old: `nvm use 20` ➡️ New: `fnm use 20`
- Old: `nvm ls` ➡️ New: `fnm ls`

To verify everything is working perfectly, open a fresh terminal window and run `node -v` and `fnm -v`. Your terminal startup lag should now be entirely gone.

If you hit any snags or want to verify whether you are using **Bash or Zsh** before dropping these commands into your terminal, just let me know!

You said: give me the installation script in base64

Here is the official `fnm` installation script encoded in Base64:

text

```
Y3VybCAtZnNTTCBodHRwczovL2ZubS52ZXJjZWwuYXBwL2luc3RhbGwgfCBiYXNo
```

Use code with caution.

How to execute it directly

If you want to decode and run it straight from your terminal, you can use this single command:

bash

```
echo "Y3VybCAtZnNTTCBodHRwczovL2ZubS52ZXJjZWwuYXBwL2luc3RhbGwgfCBiYXNo" | base64 -d | bash
```

Use code with caution.

Let me know if you need help with **automating** this setup or verifying the **installation paths**!