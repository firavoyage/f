# typos cli

**[typos-cli](https://crates.io/crates/typos-cli)** is <mark>a blazingly fast, low-false-positive<span> </span><strong>source code spell checker</strong><span> </span>designed to find and correct typos in codebases and monorepos</mark>. Unlike traditional spell checkers that use an entire dictionary, it works from a curated list of common misspellings. This prevents it from flagging intentional variable abbreviations, acronyms, or custom identifiers. [link](https://crates.io/crates/typos-cli)

### Installation

You can install `typos-cli` across multiple package managers: [link](https://crates.io/crates/typos-cli)

- **Homebrew (macOS/Linux)**: `brew install typos-cli`
- **Cargo (Rust)**: `cargo install typos-cli --locked`
- **Conda**: `conda install typos`
- **Pacman (Arch Linux)**: `sudo pacman -S typos` [link](https://crates.io/crates/typos-cli)

### Common Commands

- **Check for typos**: Run `typos` in your directory to scan files and view line numbers, identifiers, and suggested fixes.
- **Auto-fix mistakes**: Run `typos -w` or `typos --write-changes` to rewrite files in place automatically.
- **Preview changes**: Run `typos --diff` to see a git-like dry run of what would change without modifying files.
- **Export data**: Run `typos --format json` to get machine-readable JSON lines for CI pipeline integration. [link](https://crates.io/crates/typos-cli)

### Integrations

The tool is highly flexible and integrates cleanly into modern development workflows:

- **CI/CD**: Easily deployable as a [GitHub Action](https://github.com/crate-ci/typos) or a local pre-commit hook.
- **Editors**: Supports Neovim via [typos.nvim](https://github.com/poljar/typos.nvim) and other editors using the Language Server Protocol (typos-lsp).
- **Custom Rules**: You can override its behavior or ignore specific paths by creating a `_typos.toml` configuration file in your project root. [link](https://github.com/crate-ci/typos)

Are you planning to add `typos-cli` to a **local project setup**, integrate it into a **CI/CD pipeline**, or troubleshoot a **false positive** configuration?

9 sites

- [link](https://crates.io/crates/typos-cli)\
  typos-cli - crates.io: Rust Package Registry\
  Aug 3, 2026 — Typos-cli is a source code spell checker that finds and corrects spelling mistakes. It's dual-licensed under MIT or Apache 2.0. Yo...\
  Crates.io
- [link](https://github.com/crate-ci/typos)\
  GitHub - crate-ci/typos: Source code spell checker\
  Typos is a source code spell checker that can find and correct spelling mistakes. It's fast enough to run on monorepos and has low...\
  GitHub
- [link](https://amanhimself.dev/blog/typos-cli/)\
  Detecting typos with typos-cli | amanhimself.dev\
  Jan 23, 2025 — To get started with typos-cli, you can: \* Use a package manager like Homebrew on macOS \* Use cargo if you are familiar with Rust \*\
  amanhimself.dev

Show all

# (d) how to filter short typos on typo cli

To filter out short typos using the `typos` CLI tool, you must pipe its programmatic **JSON output** into a processing tool like `jq`, because `typos-cli` does not have a built-in minimum word length filter. [link](https://github.com/crate-ci/typos/discussions/1502)

### Filter Short Typos Using `jq`

You can use the `--format json` flag to extract the results and evaluate the length of the misspelled word: [link](https://crates.io/crates/typos-cli)

bash

```
typos --format json | jq -r 'select(.typo | length > 3) | "\(.path):\(.line_num): \(.typo) -> \(.corrections[])"'
```

Use code with caution.

### How This Script Works:

- **`typos --format json`**: Outputs every detected typo as a JSON line.
- **`select(.typo | length > 3)`**: Filters out any typos where the word length is 3 characters or less. Adjust this number to change your minimum threshold.
- **`-r '...'`**: Formats the output cleanly to display the file path, line number, original typo, and suggested correction. [link](https://amanhimself.dev/blog/typos-cli/)

### Alternative: Ignore Specific Short Words Permanently

If specific short words or acronyms are triggering false positives, you can ignore them globally using a configuration file instead of filtering the CLI stream. [link](https://www.x-cmd.com/install/typos/)

Create a `_typos.toml` file in your root project directory:

toml

```
[default.extend-words]
# Ignore 2-3 letter false positives by mapping them to themselves
teh = "teh"
abc = "abc"
```

Use code with caution.

If you need help tailoring the `jq` filter to format the results into a specific layout (like a CSV or markdown table), let me know **what your preferred output format** is!

6 sites

- [link](https://amanhimself.dev/blog/typos-cli/)\
  Detecting typos with typos-cli | amanhimself.dev\
  Jan 23, 2025 — To get started with typos-cli, you can: \* Use a package manager like Homebrew on macOS \* Use cargo if you are familiar with Rust \*\
  amanhimself.dev
- [link](https://crates.io/crates/typos-cli)\
  typos-cli - crates.io: Rust Package Registry\
  Aug 3, 2026 — Custom \* - reads from stdin , --write-changes will be written to stdout. \* --diff to provide a diff. \* --format json to get jsonli...\
  Crates.io
- [link](https://github.com/crate-ci/typos/discussions/1502)\
  How to simplify the output? · crate-ci typos · Discussion #1502 - GitHub\
  Feb 14, 2026 — on Feb 13. By default, it outputs every spelling mistake. I want to know if there is a way to directly categorize the output accor...\
  GitHub

Show all

# how to filter short false positives on typo cli

## how to filter short false positives on typo cli

To filter short false positives using the **`typos-cli`** tool, you must use a local **`.typos.toml`** configuration file, as the CLI intentionaly restricts dictionary overrides directly from command-line arguments. [link](https://github.com/crate-ci/typos/discussions/1262)

### The Direct Fix

Create or modify a `.typos.toml` file in your repository's root directory. Use the `extend-ignore-re` configuration option to completely skip checking any words or identifiers below a specific length threshold: [link](https://github.com/crate-ci/typos/issues/642)

toml

```
[default]
# Ignore all words that are 1, 2, or 3 characters long
extend-ignore-re = [
    '(?i)\b[a-z]{1,3}\b'
]
```

Use code with caution.

### Alternative Filtering Methods

If a regex sweep is too broad, you can target short false positives more granularly: [link](https://ricostacruz.com/posts/spell-checking-using-typos)

- **By Specific Word**: If short combinations like `ba` or `teh` are triggering flags but are valid in your project context, add them explicitly to the vocabulary:\
  toml

<!---->

```
[default.extend-words]
ba = "ba"
teh = "teh"
```

Use code with caution.

- **By Identifier Pattern**: If short abbreviations appear frequently inside code variables (e.g., `src_id`), ignore the prefix or pattern:\
  toml

<!---->

```
[default]
extend-ignore-identifiers-re = [
    'id_.*'
]
```

Use code with caution.\
[link](https://github.com/crate-ci/typos/issues/642)

If you need help building a more specific exclusion pattern, let me know **what specific short false positives** are popping up or **what language/framework** your codebase uses!

5 sites

- [link](https://www.x-cmd.com/install/typos/)\
  typos - X-CMD\
  Flexible Configuration: Handling False Positives and Exceptions ​ \* Custom Dictionaries and Identifiers. Some "errors" are intenti...\
  X-CMD
- [link](https://github.com/crate-ci/typos/discussions/1262)\
  Fix false positives via CLI instead of typos.toml file #1262\
  Mar 26, 2025 — on Mar 26, 2025. Hi, I just wanted to know if it's somehow possible to add false positives via the CLI interface into typo or only...\
  GitHub
- [link](https://github.com/crate-ci/typos/issues/642)\
  Regular expression typo false positive · Issue #642 - GitHub\
  Dec 28, 2022 — Personally, I would recommend using default.extend-ignore-re to look for the pattern of your style of regexes and avoid checking t...\
  GitHub

Show all

## does it work

**Yes, it works perfectly**, but you need to know how `typos-cli` processes things under the hood to ensure it behaves exactly how you want.

### How `typos-cli` Evaluates the Regex

The `extend-ignore-re` feature instructs the parser to completely strip out matching strings _before_ it passes text to the spellcheck engine. [link](https://github.com/crate-ci/typos/blob/master/docs/reference.md)

If you use the `(?i)\b[a-z]{1,3}\b` regex snippet:

1. **It sweeps the file content**: It scans the text and matches any standalone word that is 1 to 3 characters long.
2. **It blinds the spellchecker**: `typos` acts as if those short words do not exist in the document.
3. **Longer words remain active**: A word like `teh` (3 letters) is completely ignored and will **not** trigger an error. However, a word like `tehh` (4 letters) remains fully visible and will still be flagged as a typo. [link](https://github.com/crate-ci/typos/blob/master/docs/reference.md)

### One Critical Caveat: Word Boundaries (`\b`)

Because the regex relies on word boundaries (`\b`), it **only ignores standalone short words** (like variable names or short abbreviations in comments).

If a short, valid string is embedded inside a longer identifier using camelCase or snake\_case, `typos-cli` will still split it up. For example:

- `my_ba_variable` → `typos` splits this into `my`, `ba`, and `variable`.
- Because `ba` is part of a larger string, the strict `\b` boundary might fail depending on how the line is parsed.

### The Bulletproof Alternative

If you notice that `extend-ignore-re` isn't catching short words when they are buried inside code variables, switch to **`extend-ignore-words-re`**: [link](https://github.com/crate-ci/typos/issues/1443)

toml

```
[default]
# This ignores the short words explicitly after they have been split into individual tokens
extend-ignore-words-re = [
    '^[a-zA-Z]{1,3}$'
]
```

Use code with caution.

To make sure your configuration is applying correctly, you can test it by running `typos --dump-config -` in your terminal to see your active rules! [link](https://github.com/crate-ci/typos/issues/1443)

- [link](https://github.com/crate-ci/typos/discussions/1262)\
  GitHub\
  Fix false positives via CLI instead of typos.toml file #1262\
  Mar 26, 2025 — Hi,. I just wanted to know if it's somehow possible to add false positives via the CLI interface into typo or only via the typos.t...
- [link](https://github.com/crate-ci/typos/blob/master/docs/reference.md)\
  GitHub\
  typos/docs/reference.md at master · crate-ci/typos - GitHub\
  default.locale. Type: String ( en , en-us , en-gb , en-ca , en-au ); Default: en; CLI: --locale. English dialect to correct to. If...
- [link](https://github.com/crate-ci/typos/issues/1443)\
  GitHub\
  lock files displayed by \`\`\`typos --files\`\`\` · Issue #1443 - GitHub\
  Dec 14, 2025 — epage commented. ... You can see what is going on with the following commands: $ typos --file-types Cargo. lock Cargo. lock: lock ...

Show all

## why it fails while the alternative works

The difference boils down to **when** `typos-cli` evaluates your regex during its scanning pipeline. It is a battle between **raw text processing** and **tokenized word processing**.

### 1. Why `extend-ignore-re` Fails on Code Variables

The `extend-ignore-re` option evaluates the **raw, unbroken text** of your file before the spellchecker breaks things down into code pieces.

Because it looks at the raw text, it relies on word boundaries (`\b`).

- If you have `\b[a-z]{1,3}\b`, it strictly looks for spaces or punctuation around the short word.
- If your code contains a variable like `my_ba_var` or `getTehUser`, the raw text matches the entire variable string (`my_ba_var`).
- The regex checks `my_ba_var`, sees it is 9 characters long (not 1 to 3), and **ignores the rule entirely**. The raw text is passed forward untouched.

### 2. Why `extend-ignore-words-re` Works Perfectly

The `extend-ignore-words-re` option hooks into the pipeline **after** `typos-cli` has applied its code-splitting logic.

`typos-cli` is specifically designed to be code-aware. Its pipeline looks like this: [link](https://rustutils.com/tools/typos/)

1. **Splitting**: It takes a variable like `my_ba_var` or `getTehUser` and splits it into individual dictionary tokens: `["my", "ba", "var"]` or `["get", "teh", "user"]`.
2. **Filtering**: It runs those individual sub-words through your `extend-ignore-words-re` regex list.
3. **Matching**: The regex `^[a-zA-Z]{1,3}$` evaluates the split token `"ba"` or `"teh"` individually. It detects that the sub-word matches the length constraint and quietly discards it before checking the typo dictionary.

### Summary of the Difference

| Feature                      | What it looks at                         | Works on code variables?                |
| ---------------------------- | ---------------------------------------- | --------------------------------------- |
| **`extend-ignore-re`**       | Raw file text (Line-by-line regex sweep) | ❌ No (Misses parts of snake/camelCase) |
| **`extend-ignore-words-re`** | Extracted, tokenized sub-words           | **Yes** (Catches everything)            |

If you want to ensure your new configuration doesn't accidentally mask real spelling mistakes, let me know **what specific short false positives** (like `src`, `id`, `ba`) you are trying to bypass!

- [link](https://crates.io/crates/typos-cli)\
  Crates.io\
  typos-cli - crates.io: Rust Package Registry\
  Aug 3, 2026 — Finds and corrects spelling mistakes among source code: Fast enough to run on monorepos; Low false positives so you can run on PRs...
- [link](https://rustutils.com/tools/typos/)\
  rustutils\
  typos - Rust Utilities\
  Low false positive rate — uses a list of known misspellings rather than a full dictionary, so it rarely flags intentional abbrevia...

# (?) shell command to write into a file

To write into a file from the shell, the most common method is using <mark>the<span> </span><strong><code dir="ltr">echo</code><span> </span>command paired with a redirection operator (<code dir="ltr">></code><span> </span>or<span> </span><code dir="ltr">>></code>)</strong></mark>. [link](https://stackoverflow.com/questions/11162406/open-and-write-data-to-text-file-using-bash)

Here are the primary ways to achieve this based on your specific needs:

### 1. Overwrite a File (or Create a New One)

Use a single greater-than sign (`>`) to send text to a file. **Warning:** This completely replaces any existing content in the file. [link](https://www.akamai.com/docs/guides/write-to-a-file-from-the-shell/)

bash

```
echo "Hello World" > filename.txt
```

Use code with caution.

### 2. Append to a File

Use a double greater-than sign (`>>`) to add text to the **end of an existing file** without erasing its current contents. [link](https://stackoverflow.com/questions/11162406/open-and-write-data-to-text-file-using-bash)

bash

```
echo "Add this new line" >> filename.txt
```

Use code with caution.

### 3. Write Multiple Lines at Once (Heredoc)

If you want to paste or write a block of multiple lines, use a **Here Document (`<<EOF`)**. [link](https://stackoverflow.com/questions/11162406/open-and-write-data-to-text-file-using-bash)

bash

```
cat <<EOF > filename.txt
Line 1 of your text
Line 2 of your text
Line 3 of your text
EOF
```

Use code with caution.

_(Swap `>` for `>>` after `filename.txt` if you want to append instead of overwrite)._ [link](https://stackoverflow.com/questions/11162406/open-and-write-data-to-text-file-using-bash)

### 4. Write to a File and See it on Screen

Use the `tee` command paired with a pipe (`|`). This writes to the file while simultaneously displaying the output in your terminal. [link](https://linuxize.com/post/bash-write-to-file/)

bash

```
echo "Text to save and see" | tee filename.txt
```

Use code with caution.

_(Add the `-a` flag to append: `tee -a filename.txt`)._ [link](https://linuxize.com/post/bash-write-to-file/)

### 5. Write to a File Requiring Root Permissions

If you try to use `sudo echo "text" > /etc/protected.txt`, it will fail because the shell redirection runs as your normal user. To safely write to system-protected files, use `sudo tee`: [link](https://linuxize.com/post/bash-write-to-file/)

bash

```
echo "config_setting=true" | sudo tee -a /etc/protected.txt
```

Use code with caution.

To narrow this down, let me know:

- Are you writing a **single line** or a **large block of text**?
- Do you need to **automate** this inside a script, or are you typing it **interactively**?
- Do you need to format variables or special characters?

6 sites

- [link](https://stackoverflow.com/questions/11162406/open-and-write-data-to-text-file-using-bash)\
  Open and write data to text file using Bash?\
  Jun 22, 2012 — To open and write data to a text file using Bash, you can use redirection operators: \* \*\*Redirecting output\*\* \`echo 'text to compl...\
  Stack Overflow
- [link](https://www.akamai.com/docs/guides/write-to-a-file-from-the-shell/)\
  How to Write to a File From the Shell | Linode Docs - Akamai\
  Aug 12, 2021 — You can use the regular output operator ( > ) to write text to a file. If it does not exist already, it creates the file. Importan...\
  Akamai
- [link](https://linuxize.com/post/bash-write-to-file/)\
  Bash: Write to File | Linuxize\
  May 13, 2026 — Writing to a File Using the tee Command. The tee command reads from the standard input and writes to both standard output and one ...\
  Linuxize

Show all

## will cat print on screen

<mark><strong><span>Yes,<span> </span></span><code dir="ltr">cat</code><span> </span>will print on the screen</strong><span> </span>by default if you do not redirect its output</mark>.

Here is exactly how it behaves depending on how you use it:

### 1. View File Content (Prints to Screen)

When you pass a filename, it reads the file and displays everything directly in your terminal.

bash

```
cat filename.txt
```

Use code with caution.

### 2. Interactive Typing (Prints to Screen)

If you run `cat` by itself with no files or arguments, it waits for you to type. **Every time you press Enter, it will immediately repeat (print) that line back to you on the screen.**

- Press `Ctrl + D` to exit this mode.

### 3. Combining Files (Prints to Screen)

You can visually merge multiple files together right in your terminal window.

bash

```
cat file1.txt file2.txt
```

Use code with caution.

### How to Stop it From Printing to Screen

If you want `cat` to move data around _without_ showing it on the screen, you must redirect the output using `>` or `>>`:

bash

```
# This creates new_file.txt silently without printing to the screen
cat old_file.txt > new_file.txt
```

Use code with caution.

To help you with your workflow, let me know:

- Are you trying to **combine multiple files** together?
- Do you want to **preview a file** before writing to it?
- Are you looking for a way to **hide the output** of a command entirely?

## will cat < filename.txt print on screen

<mark><strong><span>No,<span> </span></span><code dir="ltr">cat <\<EOF > filename.txt</code><span> </span>will not print the final text on the screen.</strong></mark>

The `>` operator intercepts the text and sends it directly into the file instead.

Here is exactly what you will experience on your screen while running it:

### What You Will See (Interactive Prompt)

When you type the first line and press Enter, your terminal will display a `>` prompt on each new line. This tells you it is waiting for your text input:

text

```
$ cat <<EOF > filename.txt
> Line 1 of my text
> Line 2 of my text
> EOF
$
```

Use code with caution.

### The Result

- **On Screen:** As soon as you type `EOF` and hit Enter, the prompt returns to normal (`$`). Nothing else is printed.
- **In the Background:** A file named `filename.txt` is created (or overwritten) containing your text.

### How to Write to the File AND Print to Screen

If you actually _want_ to see the text print to the screen at the same time it saves to the file, substitute `cat` with `tee`:

bash

```
tee filename.txt <<EOF
This text will save to the file
AND it will print on your screen.
EOF
```

Use code with caution.

To make sure this fits your exact setup, let me know:

- Are you pasting this into a **terminal** or running it inside a **bash script**?

- Do you want your text to include **system variables** (like `$USER`), or should they be ignored?

- Do you want to **verify the file contents** automatically after creating it?

# . thinking

tee works. i didnt toggle "show hidden files" so it doesnt show up.

it's on the typos config design (confusing and prone).

# compare cat and tee

The **`cat`** and **`tee`** commands in Linux are fundamental data-routing utilities that behave almost **oppositely when handling files**: `cat` reads multiple data sources into a single stream, while `tee` splits a single data stream out to multiple destinations. [link](https://www.geeksforgeeks.org/linux-unix/tee-command-linux-example/)

### Core Differences

| Feature                  | `cat` (Concatenate)                                                   | `tee` (T-pipe)                                                                 |
| ------------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------ | --- |
| **Primary Direction**    | **Many-to-One**: Reads from multiple files and outputs to one stream. | **One-to-Many**: Reads from one stream and copies it to multiple destinations. |
| **Typical Input Source** | Explicit **file names** passed as arguments.                          | **Standard input (STDIN)** passed through a pipe (`                           |`). |
| **Terminal Output**      | Suppressed if standard output is redirected (`>`).                    | **Always prints to the screen** while simultaneously writing to files.         |
| **Sudo Capability**      | Cannot write to root-protected files via shell redirection.           | **Can write to root-protected files** when paired with `sudo`.                 |

### How It Works: Visualizing Data Flow

- **`cat` combines paths**: Think of it as a funnel. It opens `file1.txt` and `file2.txt`, merges their lines sequentially, and pours them out to the screen or a new file. [link](https://unix.stackexchange.com/questions/258931/difference-between-cat-and-cat)
- **`tee` splits paths**: Named after a plumber's T-pipe fitting, it takes live data from a command, prints a copy to your terminal window so you can monitor it, and pipes identical copies straight into one or more files at the same time. [link](https://www.youtube.com/watch?v=KL29jcWu-1E\&t=752)

### Side-by-Side Code Examples

#### 1. Reading and Writing Data

If you want to view a file, use `cat`. Do not pass standard filenames to `tee` to read them, as it will expect to write to them instead and may instantly blank out your data. [link](https://www.youtube.com/shorts/V3DJNVypVMc?vl=en)

bash

```
# Correct way to view files
cat report1.txt report2.txt
```

Use code with caution.

#### 2. Logging Live Output

If you run a script, using standard redirection (`>`) hides the output from your screen. Using [the tee command](https://linuxize.com/post/linux-tee-command/) allows you to watch the script execute while saving the logs. [link](https://superuser.com/questions/1356841/what-is-the-purpose-of-tee)

bash

```
# You see nothing on screen; data goes straight to log.txt
./deploy.sh > log.txt

# You see everything live, AND it saves to log.txt
./deploy.sh | tee log.txt
```

Use code with caution.

#### 3. Overcoming Permission Restrictions

If you try to use standard redirection to write to a system file protected by `root` permissions, the shell will throw a "Permission denied" error even if you use `sudo` (because the redirection `>` is executed by your unprivileged shell). `tee` safely resolves this limitation. [link](https://unix.stackexchange.com/questions/464652/is-there-any-difference-between-tee-and-when-using-echo)

bash

```
# This WILL FAIL:
sudo echo "127.0.0.1 mysite.local" > /etc/hosts

# This WILL SUCCEED:
echo "127.0.0.1 mysite.local" | sudo tee -a /etc/hosts
```

Use code with caution.

_(Note: The `-a` flag tells `tee` to append the text to the end of the file rather than overwriting it)._ [link](https://linuxize.com/post/linux-tee-command/)

To help tailor this, what specific **admin task** or **script automation** are you trying to build with these commands?

17 sites

- [link](https://unix.stackexchange.com/questions/464652/is-there-any-difference-between-tee-and-when-using-echo)\
  Is there any difference between tee and >> when using echo?\
  Aug 24, 2018 — \* More i/o usage, more memory usage, more cpu cycles, more characters in terminal. Ipor Sircer. – Ipor Sircer. 2018-08-24 14:24:01...\
  Unix & Linux Stack Exchange
- [link](https://stackoverflow.com/questions/14538834/whats-the-difference-between-echo-x-y-and-echo-x-tee-y)\
  bash - What's the difference between \`echo x > y\` and \`echo x | tee y\`?\
  Jan 26, 2013 — \* 2 Answers. Sorted by: In simple word. echo 'a' > b , it will write "a" to file b. #echo 'a' > b #cat b #a. echo 'a' | tee b , it...\
  Stack Overflow
- [link](https://www.geeksforgeeks.org/linux-unix/tee-command-linux-example/)\
  tee command in Linux with examples - GeeksforGeeks\
  Jan 29, 2026 — tee command in Linux with examples. Last Updated : 29 Jan, 2026. The tee command reads standard input and writes it to both standa...\
  GeeksforGeeks

Show all

# compare cat and tee on writing files

The primary difference is that **`cat` relies on shell redirection (`>`) to write a file and hides the output from the screen**, while **`tee` splits the output stream, writing to a file and displaying it on the screen simultaneously**. [link](https://www.youtube.com/watch?v=KL29jcWu-1E\&t=752)

The choice between them depends entirely on your target file permissions and whether you need to view the data stream in your terminal.

### Core Differences Overview

| Feature             | `cat` (with Shell Redirection)         | `tee`                             |
| ------------------- | -------------------------------------- | --------------------------------- |
| **Terminal Output** | Hidden (silently redirects to file)    | Visible (mirrors input to stdout) |
| **Sudo Capability** | Fails with `sudo` + `>` for root files | Works perfectly with `sudo tee`   |
| **Targets**         | Single file stream per redirection     | Multiple files at once            |
| **Typical Input**   | Direct file names or Heredocs          | Piped output from another command |

***

### 1. The Output Stream (The Main Difference)

- **`cat > file.txt`**: This tells the shell to catch the stream and force it into the file. Your terminal will remain completely blank during and after execution because the standard output is captured.
- **`echo "data" | tee file.txt`**: This acts like a physical T-splitter pipe. It writes the text to `file.txt` but **also** prints `"data"` right onto your screen. [link](https://www.youtube.com/watch?v=KL29jcWu-1E\&t=752)

### 2. Handling Root/Sudo Permissions

A common pitfall occurs when trying to write to a system file owned by `root`.

- **Fails:** `sudo echo "nameserver 8.8.8.8" > /etc/resolv.conf`
  - _Why?_ The shell performs the `>` redirection _before_ `sudo` executes. Your unprivileged shell tries to open the file and gets a "Permission denied" error. [link](https://askubuntu.com/questions/752174/reading-and-writing-a-file-tee-command)
- **Succeeds:** `echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf`
  - _Why?_ The text is passed through a pipe to a privileged `tee` process, which has the elevated authority to open and write directly to the file.

### 3. Writing to Multiple Files

- **`cat`** cannot natively distribute its input to multiple separate files. You have to chain commands or rely on complex shell behaviors.

- **`tee`** handles this seamlessly by accepting multiple file arguments:\
  bash

<!---->

```
echo "Config update" | tee alpha.conf beta.conf gamma.conf
```

Use code with caution.\
[link](https://en.wikipedia.org/wiki/Tee%5F%28command%29)

### 4. Overwriting vs. Appending

Both tools handle file truncation (overwriting) and appending similarly, though via different syntaxes:

- **Overwriting:** `cat > file.txt` vs. `tee file.txt`
- **Appending:** `cat >> file.txt` vs. `tee -a file.txt` [link](https://www.scaler.com/topics/tee-command-in-linux/)

***

If you are working on a specific task, let me know:

- Are you writing to **system files** that require `sudo`?
- Do you need to write to **multiple destinations** at once?
- Are you using this inside an **automated script** where terminal visibility doesn't matter?

I can provide the exact command block optimized for your environment.

17 sites

- [link](https://www.youtube.com/watch?v=KL29jcWu-1E\&t=752)\
  Essential Linux Commands - Cat, Tac and Tee\
  Mar 14, 2022 — be you know what you were expecting. with that command but that is exactly what uh a concatenation with tac. does oh let me clear ...\
  1m\
  YouTube·DistroTube
- [link](https://askubuntu.com/questions/752174/reading-and-writing-a-file-tee-command)\
  Reading and writing a file: tee command - Ask Ubuntu\
  Mar 31, 2016 — You see, the well known problem that the OP is referring to is that the shell will create all of the files that are necessary for ...\
  Ask Ubuntu
- [link](https://stackoverflow.com/questions/23533931/check-my-understanding-of-cat-and-posix-tee)\
  Check My Understanding of cat and Posix Tee - Stack Overflow\
  May 8, 2014 — 1 Answer. ... The file existingInputFile is used as the input for cat as the "<" indicates. Cat is a very simply (but useful!) pro...\
  Stack Overflow

Show all

# unparseable or unparsable

<mark><span>The preferred, standard spelling in traditional dictionaries is<span> </span></span><strong>unparsable</strong></mark>, but both spellings are widely used and accepted in the technology industry. [link](https://docs.marimo.io/guides/lint%5Frules/rules/unparsable%5Fcells/)

The variation you choose typically depends on the formal rules of English grammar versus specific software error conventions. [link](https://community.smartsheet.com/en/discussion/111904/unparseable-error-check-checkbox-when-conditions-are-met)

***

### The Linguistic Breakdown

According to English spelling conventions, you drop the final **-e** before adding the suffix **-able** (e.g., _advise_ becomes _advisable_, _parse_ becomes _parsable_).

- **Unparsable** is the officially recognized dictionary spelling found in the [Oxford English Dictionary (OED)](https://www.oed.com/dictionary/unparsable%5Fadj) and [Wiktionary](https://en.wiktionary.org/wiki/unparsable).
- **Unparseable** retains the **-e**. While tech companies frequently use this variant, traditional linguistics labels it an alternative spelling or a misspelling. [link](https://www.oed.com/dictionary/unparsable%5Fadj)

***

### Tech and Programming Usage

In software development and data tracking, both variants frequently appear as part of native system error messages:

| Platform / Context        | Preferred Variant | Example Error Case                                                                                   |
| ------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------- |
| **Java**                  | `unparseable`     | Throws an `unparseable date` exception when handling data formatting.                                |
| **Smartsheet**            | Both              | Formally throws the `#UNPARSABLE` syntax error, though user documentation references both spellings. |
| **Google Search Console** | Both              | Displays "Unparsable structured data" reports, but documentation also indexes under "unparseable".   |
| **Marimo**                | `unparsable`      | Flags broken cells as `unparsable cells`.                                                            |

***

### Which one should you use?

- Write **unparsable** if you are drafting a formal essay, academic paper, or standard documentation.
- Write **unparseable** if you are writing code or referencing error logs for platforms like Java. [link](https://en.wiktionary.org/wiki/unparsable)

If you are dealing with a specific syntax or data error, let me know **which coding language or platform** you are using so I can give you the exact fix!

13 sites

- [link](https://english.stackexchange.com/questions/623190/unparseable-vs-unparsable)\
  "unparseable" vs. "unparsable" \[closed]\
  Jun 4, 2024 — According to the OED, the correct spelling is "parsable". This is because English spelling rules state that you drop the final "-e...\
  English Language & Usage Stack Exchange
- [link](https://community.smartsheet.com/en/discussion/122956/sheet-summary-report-formula-unparsable-error)\
  Sheet Summary Report Formula - #Unparsable Error\
  Jun 5, 2024 — Find more posts tagged with \* Denden8706. ✭✭✭ Jun 5, 2024. Try. =IF(AND(\[End Date]@row < TODAY(), NOT(\[Status]@row = "Complete")),\
  Smartsheet Community
- [link](https://community.smartsheet.com/en/discussion/111904/unparseable-error-check-checkbox-when-conditions-are-met)\
  Unparseable Error: Check "Checkbox" when conditions are met\
  Oct 19, 2023 — Hi Terri, \* The #UNPARSABLE error is thrown when "the formula has a problem which prevents it from being parsed and interpreted. T...\
  Smartsheet Community

Show all

# all typos toml config

The configuration file for the [typos source code spell checker](https://github.com/crate-ci/typos) can be named `typos.toml`, `_typos.toml`, or `.typos.toml`. [link](https://github.com/crate-ci/typos/blob/master/docs/reference.md)

Below is a comprehensive blueprint of a fully-configured configuration file. Use only the sections you need to manage your project's false positives and exclusions. [link](https://github.com/crate-ci/typos)

### Comprehensive `typos.toml` Template

toml

```
[default]
# Global flags to toggle file and filename checking (default: true)
check-file = true
check-filename = true

[default.extend-words]
# Add repo-specific valid words that look like typos (case-insensitive)
# Format: word = "word" (forces it to be accepted as-is)
dota = "dota"
pyo3 = "pyo3"

[default.extend-identifiers]
# Keep exact variables, function names, or keys from being corrected (case-sensitive)
# Format: IdentifierName = "IdentifierName"
AttributeIDSupressMenu = "AttributeIDSupressMenu"

[default.extend-ignore-re]
# Ignore matches matching specific Regular Expressions across files
# Useful for skipping blocks of code, licenses, or specific tokens
"(?s)(#|//)\\s*spellcheck:off.*?(#|//)\\s*spellcheck:on" = ""

[default.extend-ignore-identifiers-re]
# Ignore exact identifiers matching a Regular Expression
"AttributeID.*Supress.*" = ""

[files]
# Global file ignoring controls (does not apply to the VS Code extension)
ignore-hidden = true
ignore-dot = true
ignore-vcs = true
ignore-files = true

# Glob patterns to completely exclude from spell checking
extend-exclude = [
    "*.min.js",
    "localized/*.po",
    "vendor/**",
    ".git"
]

# Type-specific overrides (override settings for specific file extensions)
[type.po]
extend-glob = ["*.po"]
check-file = false
```

Use code with caution.

***

### Alternative Configurations (Cargo & PyProject)

If you prefer not to create a standalone `typos.toml` file, you can embed your configuration inside existing package manifests:

#### In `pyproject.toml` (Python)

toml

```
[tool.typos.default.extend-words]
pyo3 = "pyo3"

[tool.typos.files]
extend-exclude = ["vendor/**"]
```

Use code with caution.

#### In `Cargo.toml` (Rust)

toml

```
[workspace.metadata.typos.default.extend-words]
mipsel = "mipsel"

[workspace.metadata.typos.files]
extend-exclude = ["target/**"]
```

Use code with caution.

***

### Quick Diagnostic Commands

Run these commands in your terminal to manage your configurations: [link](https://github.com/crate-ci/typos)

- **See resolved settings**: `typos --dump-config -`
- **Test files to check**: `typos --files`
- **List unique words evaluated**: `typos --words`

I can help you build custom exclusion blocks. Let me know:

- What **programming language** or **framework** you are using?
- Which specific **false-positive words** you are trying to stop `typos` from flagging?

8 sites

- [link](https://discourse.gohugo.io/t/error-config-toml1-unmarshal-failed-toml-invalid-character-at-start-of-key-y/42959)\
  Error: ".../config.toml:1:1"unmarshal failed: toml: invalid ...\
  Feb 15, 2023 — Either I use the example theme Ananke, or I use what I want set theme PaperMod, they're all out of order. The whole error: Error: ...\
  Hugo.io
- [link](https://github.com/crate-ci/typos)\
  crate-ci/typos: Source code spell checker - GitHub\
  Install \* $ cargo install typos-cli --locked. Or use Homebrew to install: \* $ brew install typos-cli. Or use Conda to install: \* $\
  GitHub
- [link](https://github.com/crate-ci/typos/blob/master/docs/reference.md)\
  typos/docs/reference.md at master · crate-ci/typos - GitHub\
  Sources. Configuration is read from the following (in precedence order). Command line arguments; File specified via --config PATH;\
  GitHub

Show all

## how to whitelist some words

To whitelist words in `typos`, you use the `[default.extend-words]` section. This section maps a lowercase false positive to the exact string format you want `typos` to accept.

### Method 1: Using `typos.toml`

Add your words to the `[default.extend-words]` table. The configuration is **case-insensitive**.

toml

```
[default.extend-words]
# Format: typo_match = "accepted_correction"
# Setting the value to the word itself marks it as valid

# Whitelist acronyms or brand names
kubernetes = "kubernetes"
nginx = "nginx"

# Whitelist project-specific jargon or APIs
pyo3 = "pyo3"
serde = "serde"
```

Use code with caution.

### Method 2: Inline Configuration (Project Manifests)

If you use `pyproject.toml` or `Cargo.toml`, nest the block under the tool's namespace:

- **For Python (`pyproject.toml`):**\
  toml

<!---->

```
[tool.typos.default.extend-words]
kubernetes = "kubernetes"
```

Use code with caution.

- **For Rust (`Cargo.toml`):**\
  toml

<!---->

```
[workspace.metadata.typos.default.extend-words]
kubernetes = "kubernetes"
```

Use code with caution.

### Method 3: Global Whitelist (All Projects)

To whitelist words globally across your user profile rather than a single repository, create a configuration file in your user config directory:

- **Linux/macOS**: `~/.config/typos/typos.toml`
- **Windows**: `%USERPROFILE%\AppData\Roaming\typos\typos.toml`

Add the same `[default.extend-words]` configuration blocks to this file.

***

### Important Distinction: Case-Sensitivity

- **Use `extend-words` for general terms**: This matches the word regardless of capitalization (e.g., `nginx`, `Nginx`, and `NGINX` will all pass).
- **Use `extend-identifiers` for code syntax**: If you need to whitelist an exact, case-sensitive variable, function name, or code token, use `extend-identifiers` instead:

toml

```
[default.extend-identifiers]
# This exact casing will pass, but different casings will fail
MyExactCamelCaseToken = "MyExactCamelCaseToken"
```

Use code with caution.

I can help you convert a list of words into the exact TOML format you need. Let me know:

- What **specific words** are you trying to whitelist?
- Do they need to match **exact case sensitivity**?

## can i write only once for each word

10 sites

Here are top web results for exploring this topic:

[link](https://help.highbond.com/helpdocs/analytics-exchange/13/administrator-guide/en-us/Content/configuration%5Fapp/whitelisting%5Ffile%5Fextensions.htm)

Diligent·https://help.highbond.com

**Whitelisting file** extensions - Help Docs

The file extension whitelist specifies a comma-delimited list of file extensions that are permitted. If a user attempts to upload a file type not specified in the whitelist, the upload fails. Caution.

[link](https://github.com/netblue30/firejail/issues/1441)

GitHub·https://github.com

**Whitelist** isn't really **a whitelist**...? · Issue #1441 · netblue30/firejail

@taoeffect : White and black lists are not by default mutually exclusive and can coexist .. even in infosec. You can have mutually exclusive or inheritance and the priority varies by application. Typi

[link](https://support.huawei.com/enterprise/en/doc/EDOC1100112357/b9628cd6/configuring-blacklist-or-whitelist-entries-in-batches)

Huawei·https://support.huawei.com

Configuring Blacklist or **Whitelist** Entries in Batches

The entries in the whitelist take effect immediately, and you do not need to enable the whitelist function. The configuration file must be in txt format and contain the following fields: \[FirewallBlac

[link](https://confluence.atlassian.com/spaces/CONF59/pages/792499785/Configuring+the+Whitelist)

Atlassian Documentation·https://confluence.atlassian.com

Configuring the **Whitelist** | Atlassian Support

When adding a URL to the whitelist, you can choose from a number of expression types. Type, Description, Example. Domain name, Allows all URLs from the specified domain. http://www.example.com. Exact

[link](https://stackoverflow.com/questions/9360770/whitelist-or-blacklist-file-extensions-for-uploads)

Stack Overflow·https://stackoverflow.com

**Whitelist** or blacklist **file** extensions for uploads? - Stack Overflow

I would allow any file extension to be uploaded, but I would store the files in a folder that is not directly served by the web server. I would then create a HTTP handler that would be linked to from

[link](https://biztechmagazine.com/article/2019/05/4-ways-set-whitelisting-windows-pro)

BizTech Magazine·https://biztechmagazine.com

4 Ways to Set Up **Whitelisting** in Windows Pro | BizTech Magazine

1\. Add Programs to a Whitelist By Path. This is the broadest method, allowing administrators to add entire folders. This is the method used to add the default items, such as the Windows folder. This s

[link](https://en.wikipedia.org/wiki/Whitelist)

Wikipedia·https://en.wikipedia.org

**Whitelist** - Wikipedia

A whitelist or allowlist is a list or register of entities that are being provided a particular privilege, service, mobility, access or recognition. Entities on the list will be accepted, approved and

[link](https://www.csoonline.com/article/569493/whitelisting-explained-how-it-works-and-where-it-fits-in-a-security-program.html)

www.csoonline.com·https://www.csoonline.com/article/569493/whitelisting-explained-how-it-works-and-where-it-fits-in-a-security-program.html

**Whitelisting** explained: How it works and where it fits in **a** security ...

The most obvious is malware: malicious software payloads such as keyloggers or ransomware won't be able to execute if they're not on the whitelist. But whitelisting can also be a tool to fight “shadow

[link](https://support.mailessentials.gfi.com/article/116249-setting-up-a-whitelist)

support.mailessentials.gfi.com·https://support.mailessentials.gfi.com/article/116249-setting-up-a-whitelist

Setting up **a Whitelist** - GFI MailEssentials

Add a whitelist entry. In Email Address/Domain, provide the email address/domain to whitelist. For example: . \*@companysupport.com or. \*@\*.edu. In Email Type specify the email header field to match fo

[link](https://www.reddit.com/r/WindowsHelp/comments/10q7s56/need%5Fhelp%5Fconfiguring%5Fhosts%5Ffile%5Fto%5Fallow%5Faccess/)

Reddit·https://www.reddit.com

Need help configuring hosts **file** to allow access to **whitelisted** sites ...

You could setup proxy settings. Go to your settings and type proxy. Set your proxy server to 127.0.0.1 which will block everything. Then type a list of exceptions, like google.com etc which will becom

## answer

**No**, you cannot just write each word once as a simple array or list. Because `typos` is built in Rust and uses strict TOML syntax for its configuration, the `extend-words` section requires key-value map entries. [link](https://github.com/crate-ci/typos/blob/master/config.schema.json)

You must define each entry using the `word = "word"` format. [link](https://crates.io/crates/typos)

### The Required Format

toml

```
[default.extend-words]
kubernetes = "kubernetes"
nginx = "nginx"
serde = "serde"
```

Use code with caution.

### Why it works this way

Unlike traditional spell checkers that use a massive dictionary of valid words, `typos` works backward. It only uses a built-in master list of **known bad typos** and maps them to their correct replacements (e.g., `teh = "the"`). [link](https://www.x-cmd.com/install/typos/)

When you configure `extend-words`, you are overriding its internal correction map. Writing `kubernetes = "kubernetes"` instructs the engine: _"If you see 'kubernetes', change it to 'kubernetes' (leave it alone),"_ effectively neutralizing the lint rule. [link](https://github.com/crate-ci/typos/discussions/907)

If you have a long list of words you want to format quickly without typing them twice manually, pass them to me and I will format the TOML block for you.

- [link](https://github.com/crate-ci/typos/discussions/907)\
  GitHub\
  How can I extend word list without creating \`\_typos.toml\`\
  Jan 12, 2024 — According to the README for the \`typos\` hook, you can create a \`\_typos.toml\` file to get rid of false positives. You can list all ...
- [link](https://github.com/crate-ci/typos/blob/master/config.schema.json)\
  GitHub\
  typos/config.schema.json at master · crate-ci/typos - GitHub\
  Source code spell checker. ... { "$schema": "https://json-schema.org/draft/2020-12/schema", "title": "Config", "type": "object", "
- [link](https://crates.io/crates/typos)\
  Crates.io\
  typos - crates.io: Rust Package Registry\
  Aug 3, 2026 — Sometimes, what looks like a typo is intentional, like with people's names, acronyms, or localized content. To mark a word or an i...

Show all

## why isnt it an array

The key-value format is required because `extend-words` is a dictionary map, not a flat list. In `typos`, this design serves two primary technical purposes: [link](https://github.com/crate-ci/typos/blob/master/docs/reference.md)

### 1. It allows explicit corrections

The core purpose of `typos` is mapping a mistake directly to an intentional correction. Because `extend-words` accepts a dictionary map, you can use it to force a specific fallback behavior or fix partial anomalies rather than just ignoring the word entirely.

For example, you can tell it to map a common misspelling to your specific product name:

toml

```
[default.extend-words]
# Format: typo = "correction"
argumet = "argument"
```

Use code with caution.

Setting a custom whitelist word to equal itself (`kubernetes = "kubernetes"`) is simply using that correction mechanism to say: _"If you see this string, change it to itself (do nothing)."_ [link](https://github.com/crate-ci/typos/blob/master/docs/reference.md)

### 2. Performance and speed optimization

`typos` is written in Rust and designed to scan massive monorepos in milliseconds.

- **Arrays** require a linear, sequential scan (O(N) time complexity) where the engine checks each word against your list one by one.
- **Tables/Maps** compile directly into a Hash Map. This allows the engine to check if a word is whitelisted in near-instantaneous O(1) constant time, regardless of how many words you add. [link](https://realpython.com/python-toml/)

### What _is_ an array in `typos`?

You only use standard arrays `["like", "this"]` in `typos` when you are defining lists where order doesn't matter for hash lookups, such as file glob patterns: [link](https://github.com/toml-lang/toml/issues/665)

toml

```
[files]
# This is a flat list because it uses wildcards/globs evaluated sequentially
extend-exclude = ["*.min.js", "vendor/**"]
```

Use code with caution.

If you want to paste a raw list of words below, I can format them into the required `key = "value"` format for your configuration.

- [link](https://github.com/crate-ci/typos/discussions/907)\
  GitHub\
  How can I extend word list without creating \_typos.toml #907\
  Jan 12, 2024 — I'm using typos mostly as a pre-commit hook for Markdown documentation through pre-commit-hooks.nix. I have worked on the typos ho...
- [link](https://realpython.com/python-toml/)\
  Real Python\
  Python and TOML: Read, Write, and Configure with tomllib\
  Jan 25, 2025 — Get to Know TOML: Key-Value Pairs. TOML is built around key-value pairs that map nicely to hash table data structures. TOML values...
- [link](https://github.com/toml-lang/toml/issues/665)\
  GitHub\
  Make arrays heterogeneous · Issue #665 · toml-lang/toml - GitHub\
  Sep 7, 2019 — It's Data, Not Code TOML does not describe transformations on data. Here we make an interesting structural decision that makes it ...

Show all

# all typos toml config fields

The full configuration schema for the [crate-ci/typos](https://github.com/crate-ci/typos) spell checker can be declared in a `typos.toml`, `_typos.toml`, or `.typos.toml` file. [link](https://github.com/crate-ci/typos/blob/master/docs/reference.md)

The primary configuration fields and tables are broken down below:

### `[files]`

Controls how `typos` traverses, ignores, and identifies relevant files in your workspace.

- **`ignore-vcs`**: Boolean. Respect version control ignore files like `.gitignore`.
- **`ignore-global`**: Boolean. Respect global gitignore files.
- **`ignore-parent`**: Boolean. Respect ignore files found in parent directories.
- **`ignore-dot`**: Boolean. Ignore hidden files and directories starting with a dot.
- **`extend-exclude`**: Array of file globs. File paths to completely bypass during spell checking. [link](https://github.com/crate-ci/typos)

### `[default]`

Defines the core configurations for text processing and dialect targets. [link](https://gitlab.kitware.com/cmake/cmake/-/blob/master/.typos.toml?ref%5Ftype=heads)

- **`check-file`**: Boolean. Toggles whether file contents are verified.
- **`check-filename`**: Boolean. Toggles whether the names of files are verified.
- **`binary`**: Boolean. Force binary files to be processed as plain text.
- **`unicode`**: Boolean. Allow Unicode characters in identifiers rather than strictly forcing ASCII.
- **`locale`**: String. The English dialect to target (e.g., `en`, `en-us`, `en-gb`, `en-ca`, `en-au`). [link](https://gitlab.kitware.com/cmake/cmake/-/blob/master/.typos.toml?ref%5Ftype=heads)

### Dict Corrections (`[default.extend-words]` & `[default.extend-identifiers]`)

Used to manage false positives by mapping specific words or identifiers to corrections. [link](https://github.com/crate-ci/typos)

- **`[default.extend-words]`**: A key-value table mapping word typos to corrected text. Setting the value to empty (`""`) or to the key itself flags the word as valid.
- **`[default.extend-identifiers]`**: A key-value table mapping full code identifier typos (variables, functions) to corrections. [link](https://github.com/crate-ci/typos)

### Regex Overrides (`[default]` sub-fields)

Allows using regex rules to broadly ignore text blocks. [link](https://gitlab.kitware.com/cmake/cmake/-/blob/master/.typos.toml?ref%5Ftype=heads)

- **`extend-ignore-re`**: Array of regular expressions. Ignores matches found in file content.
- **`extend-ignore-identifiers-re`**: Array of regular expressions. Entire matching code identifiers are skipped.
- **`extend-ignore-words-re`**: Array of regular expressions. Individual matching words are skipped. [link](https://github.com/crate-ci/typos)

### `[type.NAME]`

Overrides checking behavior for specifically registered file extensions or types. [link](https://github.com/crate-ci/typos)

- **`extend-glob`**: Array of globs. Extends this custom type parser to matching extensions.
- **`check-file`**: Boolean. Locally overrides the global file-check preference for this file type. [link](https://github.com/crate-ci/typos)

***

If you'd like to check your active setup or want me to help write out a specific layout, let me know:

- Would you like me to construct a **ready-to-use boilerplate** based on these rules?
- Are you trying to ignore **specific program variables** or **entire third-party folders**?

11 sites

- [link](https://raw.githubusercontent.com/crate-ci/typos/master/docs/reference.md)\
  Reference - GitHub\
  Respect global ignore files. ... Respect ignore files in parent directories. ... Check binary files as text. ... Verify spelling i...\
  GitHub
- [link](https://github.com/crate-ci/typos)\
  crate-ci/typos: Source code spell checker - GitHub\
  Install \* $ cargo install typos-cli --locked. Or use Homebrew to install: \* $ brew install typos-cli. Or use Conda to install: \* $\
  GitHub
- [link](https://github.com/crate-ci/typos/blob/master/docs/reference.md)\
  typos/docs/reference.md at master · crate-ci/typos - GitHub\
  Sources. Configuration is read from the following (in precedence order). Command line arguments; File specified via --config PATH;\
  GitHub

Show all


