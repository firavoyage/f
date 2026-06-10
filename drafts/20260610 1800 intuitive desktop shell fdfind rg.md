how to exclude some folders in fdfind and rg

To exclude folders in `fd` (often installed as `fdfind` on Debian/Ubuntu) and `rg` (ripgrep), <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use the <strong><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">--exclude</code> flag for <code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">fdfind</code></strong> and the <strong><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">-g</code> (glob) flag prefixed with <code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">!</code> for <code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">rg</code></strong></mark>. \[[1](https://blog.wxm.be/2020/11/08/ignore-folder-in-ripgrep.html), [2](https://manpages.debian.org/unstable/fd-find/fdfind.1.en.html), [3](https://github.com/BurntSushi/ripgrep/discussions/2128), [4](https://manpages.debian.org/testing/fd-find/fdfind.1.en.html)]

Both tools also respect `.gitignore` or `.ignore` files automatically, so any directory ignored there will be skipped by default. \[[1](https://manpages.debian.org/testing/fd-find/fdfind.1.en.html)]

***

### 1. Excluding Folders in `fd` / `fdfind` \[[1](https://unix.stackexchange.com/questions/742372/how-to-exclude-all-hidden-folders-except-content-of-config-with-fdfind)]

The `-E` or `--exclude` option takes a glob pattern relative to the search directory. \[[1](https://github.com/sharkdp/fd/issues/1337), [2](https://manpages.debian.org/unstable/fd-find/fdfind.1.en.html)]

- **Exclude a single folder:**\
  bash

<!---->

```
fdfind "search_term" --exclude "node_modules"
```

Use code with caution.

- **Exclude multiple folders:**\
  Repeat the flag for every directory you want to skip.\
  bash

<!---->

```
fdfind "search_term" --exclude "node_modules" --exclude "build" --exclude ".git"
```

Use code with caution.

- **Exclude a folder only at the exact root level:**\
  Precede the directory name with a forward slash.\
  bash

<!---->

```
fdfind "search_term" --exclude "/logs"
```

Use code with caution.\
\[[1](https://www.reddit.com/r/linuxquestions/comments/l21apl/excluding%5Fmultiple%5Ffiles%5Fin%5Ffd/), [2](https://manpages.debian.org/unstable/fd-find/fdfind.1.en.html), [3](https://github.com/sharkdp/fd/issues/1337)]

***

### 2. Excluding Folders in `rg` (ripgrep) \[[1](https://superuser.com/questions/1521321/how-to-use-pipe-into-grep-to-exclude-list-of-files-under-a-second-level-director)]

The `-g` or `--glob` flag is used for file/folder filtering. Preceding the pattern with an exclamation mark (`!`) makes it an exclusion pattern. \[[1](https://blog.wxm.be/2020/11/08/ignore-folder-in-ripgrep.html), [2](https://stackoverflow.com/questions/64373137/ripgrep-to-only-exclude-a-file-in-the-root-of-the-folder), [3](https://ellie.wtf/notes/ignore-a-folder-with-ripgrep/)]

- **Exclude a single folder:**\
  Always include the trailing slash `/` so ripgrep knows it is a directory and doesn't accidentally ignore single files with the same name.\
  bash

<!---->

```
rg "search_term" -g "!node_modules/"
```

Use code with caution.

- **Exclude multiple folders:**\
  Pass the flag multiple times.\
  bash

<!---->

```
rg "search_term" -g "!node_modules/" -g "!build/" -g "!.git/"
```

Use code with caution.

- **Exclude a folder only at the exact root level:**\
  Add a forward slash after the exclamation point.\
  bash

<!---->

```
rg "search_term" -g "!/logs/"
```

Use code with caution.\
\[[1](https://blog.wxm.be/2020/11/08/ignore-folder-in-ripgrep.html), [2](https://stackoverflow.com/questions/64373137/ripgrep-to-only-exclude-a-file-in-the-root-of-the-folder)]

***

### Summary Table

| Tool \[[1](https://manpages.debian.org/unstable/fd-find/fdfind.1.en.html), [2](https://www.reddit.com/r/linuxquestions/comments/l21apl/excluding%5Fmultiple%5Ffiles%5Fin%5Ffd/), [3](https://github.com/sharkdp/fd/issues/1337), [4](https://blog.wxm.be/2020/11/08/ignore-folder-in-ripgrep.html), [5](https://stackoverflow.com/questions/64373137/ripgrep-to-only-exclude-a-file-in-the-root-of-the-folder)] | Single Folder Exclusion | Multiple Folder Exclusions          | Root-Only Folder Exclusion |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------- | -------------------------- |
| **`fdfind`**                                                                                                                                                                                                                                                                                                                                                                                                    | `--exclude "dir"`       | `--exclude "dir1" --exclude "dir2"` | `--exclude "/dir"`         |
| **`rg`**                                                                                                                                                                                                                                                                                                                                                                                                        | `-g "!dir/"`            | `-g "!dir1/" -g "!dir2/"`           | `-g "!/dir/"`              |

***

### Pro-Tip: Permanent Exclusions

If you find yourself constantly excluding the same folders every time you run these commands, you can make these exceptions permanent: \[[1](https://github.com/sharkdp/fd/issues/1026), [2](https://unix.stackexchange.com/questions/742372/how-to-exclude-all-hidden-folders-except-content-of-config-with-fdfind)]

1. **For `fdfind`**: Create a file at `~/.config/fd/ignore` and list your folders inside it using standard `.gitignore` formatting.
2. **For `rg`**: Create a file at `~/.ignore` in your home directory. Ripgrep will automatically read this file globally and skip any paths defined inside it. \[[1](https://unix.stackexchange.com/questions/742372/how-to-exclude-all-hidden-folders-except-content-of-config-with-fdfind), [2](https://docs.github.com/en/get-started/git-basics/ignoring-files)]

If you would like to map these settings out, I can help you **create the custom global ignore files** or explain **how to pass regular expressions** instead of globs for complex folder exclusion patterns. Which approach works best for your current workflow?

- [link](https://www.reddit.com/r/linuxquestions/comments/l21apl/excluding%5Fmultiple%5Ffiles%5Fin%5Ffd/)\
  Excluding multiple files in fd? : r/linuxquestions - Reddit\
  Jan 21, 2021 — I'm trying to use -E with fd to exclude files, but I don't know how to do it without using multiple -E flags (I want to do it with...\
  Reddit·r/linuxquestions
- [link](https://unix.stackexchange.com/questions/742372/how-to-exclude-all-hidden-folders-except-content-of-config-with-fdfind)\
  fd - How to exclude all hidden folders except content of .config ...\
  Apr 9, 2023 — 1 Answer. Sorted by: 0. Adding a: !. config/ To ~/. config/fd/ignore (in gitignore format) seems to work. It seems it still ignore...\
  Unix & Linux Stack Exchange
- [link](https://blog.wxm.be/2020/11/08/ignore-folder-in-ripgrep.html)\
  Ignore a Folder in Ripgrep - blog - Ward×Muylaert\
  Nov 8, 2020 — Include or exclude files and directories for searching that match the given glob. This always overrides any other ignore logic. Mu...\
  blog.wxm.be

Show all

## You said: is gitignore ignored by default

Yes, **`.gitignore` files are respected and applied by default** in both `fd` (`fdfind`) and `rg` (`ripgrep`). \[[1](https://github.com/sharkdp/fd/issues/612), [2](https://github.com/junegunn/fzf/discussions/3363), [3](https://github.com/BurntSushi/ripgrep/issues/1303), [4](https://www.vervecopilot.com/hot-blogs/gitignore-public-interviews), [5](https://unix.stackexchange.com/questions/742372/how-to-exclude-all-hidden-folders-except-content-of-config-with-fdfind)]

If a folder or file is listed in your `.gitignore`, neither tool will search through it unless you explicitly tell them to look anyway. \[[1](https://youtrack.jetbrains.com/articles/SUPPORT-A-2082/Configuring-Solution-Explorer-to-display-.gitignore-files-or-include-files-in-the-search)]

***

### How to Override `.gitignore` (Search Everything)

If you need to temporarily look inside your ignored folders (like `node_modules` or `dist`), you can override this behavior using flags: \[[1](https://dev.to/jajera/what-happens-behind-the-gitignore-how-git-handles-ignored-files-37a6), [2](https://github.com/BurntSushi/ripgrep/issues/969), [3](https://www.env0.com/blog/gitignore-command-guide-practical-examples-and-terraform-tips)]

### 1. In `fd` / `fdfind`

- **Ignore `.gitignore` constraints:** Use the `-I` or `--no-ignore` flag.\
  bash

<!---->

```
fdfind "search_term" -I
```

Use code with caution.

- **Include completely hidden/ignored files:** Use the `-H` flag alongside it to see hidden files (like `.env`) too.\
  bash

<!---->

```
fdfind "search_term" -IH
```

Use code with caution.\
\[[1](https://github.com/Gruntfuggly/todo-tree/issues/405), [2](https://stackoverflow.com/questions/13713101/rsync-exclude-according-to-gitignore-hgignore-svnignore-like-filter-c), [3](https://github.com/sharkdp/fd/discussions/1226), [4](https://jasonstitt.com/gitignore-whitelisting-patterns), [5](https://github.com/nvim-tree/nvim-tree.lua/discussions/1287)]

### 2. In `rg` (ripgrep)

- **Ignore `.gitignore` constraints:** Use the `--no-ignore` flag.\
  bash

<!---->

```
rg "search_term" --no-ignore
```

Use code with caution.\
\[[1](https://github.com/junegunn/fzf/discussions/3363)]

- **The "Unrestricted" shortcut:** Use the `-u` flag.
  - `-u` ignores `.gitignore`

  - `-uu` ignores `.gitignore` and searches hidden files

  - `-uuu` ignores `.gitignore`, hidden files, and searches binary files \[[1](https://github.com/sharkdp/fd/discussions/1615), [2](https://github.com/junegunn/fzf/discussions/3363), [3](https://github.com/BurntSushi/ripgrep/issues/340), [4](https://github.com/BurntSushi/ripgrep/issues/966)]\
    bash

<!---->

```
rg "search_term" -uu
```

Use code with caution.

***

If you are running into issues where files aren't showing up, I can help you **debug why a specific file is being skipped** or show you how to **use a local `.ignore` file** to override `.gitignore` for these tools without changing your Git settings. What specific behavior are you seeing?

- [link](https://github.com/sharkdp/fd/issues/612)\
  Discussion: show Git-ignored files by default? · Issue #612 · sharkdp/fd\
  Jun 7, 2020 — Since these are files specifically for fd , just like it is perfectly reasonable for git to ignore . gitignore files by default. I...\
  \
  \
  GitHub
- [link](https://github.com/junegunn/fzf/discussions/3363)\
  Dynamically respecting .gitignore · junegunn fzf · Discussion #3363 · GitHub\
  Jul 25, 2023 — As explained in README, gitignore can be respected by setting as a default command rg for example.\
  \
  \
  GitHub
- [link](https://github.com/BurntSushi/ripgrep/issues/1303)\
  search in hidden files not listed in .gitignore · Issue #1303 · BurntSushi/ripgrep\
  Jun 17, 2019 — So by default: . gitignore respected, hidden files skipped.\
  \
  \
  GitHub

Show all

## You said: can i put exclude flag first and pattern last

Yes, you can absolutely put the exclude flag first and the search pattern last.

In both commands, the flags and positional arguments can be arranged in any order you prefer.

### Examples

### 1. In `fd` / `fdfind`

bash

```
fdfind --exclude "node_modules" "search_term"
```

Use code with caution.

### 2. In `rg` (ripgrep)

bash

```
rg -g "!node_modules/" "search_term"
```

Use code with caution.

***

If you are dealing with patterns that start with a dash (`-`), the terminal might think it is a flag and break your command. To prevent this, I can show you how to **use the `--` separator** or how to **pass regular expressions** safely. Would you like to see how to handle those edge cases?

## You said: what? - starting pattern will break me? i have double quotes

No, your double quotes protect you from the shell (like Bash or Zsh), but **they do not protect you from the command itself** (`rg` or `fdfind`). \[[1](https://deepsource.com/directory/shell/issues/SH-2086), [2](https://unix.stackexchange.com/questions/801401/wine-cmd-automatically-escapes-quotes-adds-backslash)]

If your search pattern actually starts with a literal dash (for example, searching for the text `"-logfile"`), the command will see that dash and try to interpret it as a command-line flag, even with quotes.

***

### The Problem Explained

Take this `rg` example:

bash

```
rg -g "!node_modules/" "-logfile"
```

Use code with caution.

The `rg` tool parses arguments from left to right. When it hits `"-logfile"`, it sees the leading `-` and thinks you are trying to use a flag called `-l`, `-o`, `-g`, etc. It will throw an "unrecognized option" error.

***

### The Solution: Use `--`

To search for a pattern that begins with a dash, use `--` (double dash). This tells the command: _"Stop looking for flags after this point; everything else is a positional argument."_

### 1. In `fd` / `fdfind`

bash

```
fdfind --exclude "node_modules" -- "-logfile"
```

Use code with caution.

### 2. In `rg` (ripgrep)

bash

```
rg -g "!node_modules/" -- "-logfile"
```

Use code with caution.

***

I can help you **test these commands** on your terminal, or show you **how to escape other special characters** (like `$`, `*`, or `?`) that the shell might intercept. What kind of pattern are you trying to search for right now?

- [link](https://deepsource.com/directory/shell/issues/SH-2086)\
  Use double quote to prevent globbing and word splitting | Shell Issue\
  Learn about Use double quote to prevent globbing and word splitting (SH-2086) in Shell.\
  \
  DeepSource
- [link](https://unix.stackexchange.com/questions/801401/wine-cmd-automatically-escapes-quotes-adds-backslash)\
  shell - Wine cmd automatically escapes quotes, adds backslash\
  Nov 17, 2025 — 1 Answer 1 single quotes are meaningless for cmd double quotes have less impact than in Unix-style shells, and are preserved the e...\
  \
  Unix & Linux Stack Exchange

## You said: what? they are that careless by default?

It is not actually carelessness—it is a foundational standard of Unix and Linux command-line design.

Almost all standard CLI tools (like `grep`, `ls`, `rm`, and `git`) behave this exact same way. The program receives arguments from your shell as an array of strings. It cannot differentiate between a string meant to be a flag (`-f`) and a string meant to be a search pattern (`"-f"`) just by looking at it, because the shell strips the quotes away before passing the text to the program. \[[1](https://github.com/PowerShell/PowerShell/discussions/24739)]

To see this in action, the standard fix is universal across the terminal ecosystem:

### 1. The Standard `--` Separator

The double-dash `--` is the official built-in safety valve across Linux. It explicitly signals to the program that option parsing is finished. \[[1](http://www.binaryphile.com/bash/2018/09/28/approach-bash-like-a-developer-part-30-option-parsing.html)]

bash

```
# This tells rg that "-logfile" is definitely text, not a flag
rg -g "!node_modules/" -- "-logfile"
```

Use code with caution.

### 2. The Specific Flags Alternately

Alternatively, both tools provide specific flags that tell them exactly what the pattern is, which completely removes the ambiguity:

- **For `rg`:** Use the `-e` flag to explicitly mark the expression.\
  bash

<!---->

```
rg -e "-logfile"
```

Use code with caution.

- **For `fd` / `fdfind`:** Use the `.` placeholder or positional logic, though `fd` naturally assumes the final argument is the pattern. To be completely safe without `--`, you can pass it as a regex match:\
  bash

<!---->

```
fdfind "\-logfile"
```

Use code with caution.

If you are writing scripts, I can show you how to **safely pass variables** so they never accidentally break, or we can look at **how to escape regular expression characters** like dots or brackets. What is your primary use case for these commands right now? \[[1](https://wiki.postgresql.org/wiki/User:Breinbaas/scratch/regular%5Fexpression%5Fintro)]

- [link](https://github.com/PowerShell/PowerShell/discussions/24739)\
  Just tell me why do you interpret special characters in paths by default. · PowerShell PowerShell · Discussion #24739\
  Jan 4, 2025 — With UNIX, arguments are passed as an array of strings and they stay as an array of strings. When Windows invokes a program it has...\
  \
  \
  GitHub
- [link](http://www.binaryphile.com/bash/2018/09/28/approach-bash-like-a-developer-part-30-option-parsing.html)\
  Approach Bash Like a Developer - Part 30 - Option Parsing\
  Sep 28, 2018 — Let's make sure that double-dash signals the end of options.\
  \
  www.binaryphile.com
- [link](https://wiki.postgresql.org/wiki/User:Breinbaas/scratch/regular%5Fexpression%5Fintro)\
  User:Breinbaas/scratch/regular expression intro\
  Mar 21, 2010 — So what's with the BACKSLASH in front of the dot? Well, just as LIKE has the UNDERSCORE (\_) to denote "any single character", REGU...\
  \
  PostgreSQL

## You said: they dont know whether it's wrapped or not?

Exactly. By the time `rg` or `fdfind` receives your input, the information about whether you used quotes is **completely gone**.

Your terminal shell (like Bash or Zsh) strips the quotes away before the command ever sees them.

### How the Shell Destroys Quotes

To the program, your quotes are invisible instructions meant only for the shell.

1. **What you type:**\
   bash

<!---->

```
rg "-logfile"
```

Use code with caution.
2\. **What the Shell does:** It processes the line, sees the quotes, understands that `-logfile` is a single argument, strips the quotes, and launches `rg`.
3\. **What `rg` actually receives:** An array containing just one string: `[-logfile]`. \[[1](https://superuser.com/questions/1208964/why-can-find-not-be-used-in-powershell), [2](https://superuser.com/questions/181042/ubuntu-linuxfind-command-gives-different-results-based-on-quotation-marks), [3](https://forums.opensuse.org/t/problems-with-regular-expressions-regex/103598)]

Because `rg` only sees a string starting with a dash, it assumes it is a flag.

***

### The Proof (`echo` vs `printf`)

You can see this quote-stripping behavior yourself using the `printf` command, which prints exactly what arguments it receives:

bash

```
$ printf "<%s>\n" "-logfile"
<-logfile>
```

Use code with caution.

Notice that the output has no double quotes around `-logfile`. The quotes were consumed by the shell to group the text.

***

If you want to automate your searches, I can show you **how to safely pass user inputs via shell scripts** or **how to write an alias** so you don't have to type these safety flags every time. Do you use scripts or aliases often in your setup?

- [link](https://superuser.com/questions/1208964/why-can-find-not-be-used-in-powershell)\
  Why can "find" not be used in PowerShell?\
  May 14, 2017 — 3 Answers 3 2 That's because You must enclose string in quotation marks in find phuclv 1 So, PowerShell strips the quotes from the...\
  \
  \
  Super User
- [link](https://superuser.com/questions/181042/ubuntu-linuxfind-command-gives-different-results-based-on-quotation-marks)\
  (Ubuntu/Linux)"find" command gives different results based on quotation marks\
  Aug 26, 2010 — You'd find it explained in the bash man page, not the find man page, because quoting is handled by the shell.\
  \
  Super User
- [link](https://forums.opensuse.org/t/problems-with-regular-expressions-regex/103598)\
  Problems with regular expressions (regex) - Programming/Scripting\
  Oct 14, 2014 — As for single or double quoting - the quoting is a shell thing. The shell looks at your command line, then removes quotes and pass...\
  \
  openSUSE Forums