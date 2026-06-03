how does it work find . -not -path '\*/.\*'

This Linux command searches the current directory and all of its subdirectories for files and folders, while **completely hiding any hidden files or hidden directories** (those starting with a dot, like `.git` or `.bashrc`). \[[1](https://labex.io/questions/how-to-exclude-certain-file-types-or-directories-from-the-output-18311), [2](https://www.pdq.com/powershell/get-childitem/), [3](https://markoskon.com/find-prune-directories/)]

### Breakdown of the Command

- **`find`**: The core Linux utility used to search for files and directories.
- **`.`**: Specifies the starting point of the search. The dot represents the **current working directory**.
- **`-not`**: Inverts the condition that follows it. It means "opposite of" or "exclude everything that matches the next argument".
- **`-path '*/.*'`**: Matches any file or directory path containing a dot immediately following a forward slash. In Linux, files and folders that start with a dot are considered **hidden**. \[[1](https://xebia.com/blog/learning-find/), [2](https://www.liquidweb.com/blog/how-to-use-the-find-command-in-linux/), [3](https://www.linkedin.com/pulse/guide-find-command-bijay-das-st2nc), [4](https://medium.com/@dineshkumaar478/exploring-bash-part-10-331e6e17fa07), [5](https://www.linkedin.com/pulse/linux-incident-response-using-find-command-taz-wake-zxkre)]

### How the Pattern Matching Works

The pattern `'*/.*'` uses asterisks as wildcards to detect hidden entries anywhere in the directory tree: \[[1](https://css-tricks.com/git-pathspecs-and-how-to-use-them/)]

- `*` matches any characters (the parent directory path).
- `/` targets the directory separator.
- `.*` matches a literal dot followed by any characters (the hidden file or folder name). \[[1](https://support.microsoft.com/en-us/office/search-function-9ab04538-0e55-4719-a72e-b6f54513b495), [2](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.filesystemglobbing.matcher?view=net-10.0-pp), [3](https://en.delphipraxis.net/topic/9127-file-search/)]

When you combine `-not` with `-path '*/.*'`, the command explicitly skips over these hidden paths.

### Limitations to Keep in Mind

While this command works well to filter hidden files from your final terminal output, it is **not efficient for large directories**. \[[1](https://markoskon.com/find-prune-directories/)]

The `-path` flag evaluated this way still forces the `find` command to step inside and process every single hidden directory (like a massive `.git` folder or a `node_modules` cache) before filtering them out of your view.

If you want to speed up your search by completely stopping `find` from looking inside hidden directories in the first place, use the `-prune` flag instead: \[[1](https://www.digitalocean.com/community/tutorials/how-to-use-find-and-locate-to-search-for-files-on-linux)]

bash

```
find . -path '*/.*' -prune -o -print
```

Use code with caution.

If you want to customize this search further, let me know:

- Do you want to filter for **only files** or **only directories**?

- Are you looking for a **specific file extension** (like `.txt` or `.sh`)?

- Do you need to execute a **subsequent command** on the files you find?

- [link](https://labex.io/questions/how-to-exclude-certain-file-types-or-directories-from-the-output-18311)\
  How to Exclude File Types and Directories in Shell\
  Aug 29, 2024 — In this command, the find command searches for directories ( -type d ) in the current directory ( . ), and the -not -path options ...\
  \
  LabEx

- [link](https://www.pdq.com/powershell/get-childitem/)\
  Get-ChildItem - PowerShell Command\
  Examples This command gets the files and subdirectories in the current directory: This command gets system files in the current di...\
  \
  www.pdq.com

- [link](https://markoskon.com/find-prune-directories/)\
  Exclude directories (and avoid traversing) with find\
  Jan 6, 2026 — The man page of find suggests to use -prune if you want to exclude directories. If you use something like -not -path "pathname" , ...\
  \
  markoskon.com

Show all

## You said: i dont find it intuitive to see single dash flags with more than one letter

That is a completely valid complaint. In standard Linux convention, single dashes (`-`) are supposed to be for single-letter shortcuts (like `-n`), while double dashes (`--`) are for full words (like `--not`).

The `find` command is notorious for breaking this rule because it is older than the modern Linux syntax standards. It uses a single dash for full-word "predicates" (like `-not`, `-path`, `-name`, and `-type`).

If you want to use syntax that feels more intuitive and consistent with the rest of Linux, you have two great options:

### 1. Use the Modern GNU Syntax

If you are on Linux, the standard version of `find` actually supports modern double-dash aliases for many of its word-based flags. You can rewrite your command like this:

bash

```
find . --not -path '*/.*'
```

Use code with caution.

_Note: Flags like `-path` still require one dash in `find`, as it is a specific command expression rather than a standard flag._

### 2. Switch to `fd` (A Modern Alternative)

If you want to escape the confusing syntax of `find` entirely, most developers now use a modern, user-friendly replacement called **`fd`** (often installed as `fd-find`).

It is significantly faster, uses standard syntax, and **ignores hidden files by default** without needing any flags at all. To run your exact search in `fd`, you just type:

bash

```
fd
```

Use code with caution.

If you want to make your daily terminal usage easier, let me know:

- Would you like the install command for **`fd`** on your specific operating system?
- Do you want to see how to translate other confusing **`find`** commands into modern alternatives?