# use snake case. write a ts fn to flatten an object. params obj, options. options separator = . (dot), fn preserve. if preserve is given, do not flatten the props when it returns true. return the flattened object.

typescript

```
type InputObject = Record<string, any>;
type FlattenOptions = {
  separator?: string;
  preserve?: (value: any, key: string) => boolean;
};

export function flatten_object(obj: InputObject, options: FlattenOptions = {}): InputObject {
  const { separator = ".", preserve } = options;
  const result: InputObject = {};

  function recurse(current_item: any, current_prefix: string): void {
    for (const key in current_item) {
      if (!Object.prototype.hasOwnProperty.call(current_item, key)) continue;

      const value = current_item[key];
      const new_key = current_prefix ? `${current_prefix}${separator}${key}` : key;

      if (preserve && preserve(value, key)) {
        result[new_key] = value;
        continue;
      }

      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        recurse(value, new_key);
      } else {
        result[new_key] = value;
      }
    }
  }

  recurse(obj, "");
  return result;
}
```

Use code with caution.

### Key Features

- **Snake Case**: The function name `flatten_object` and internal variables use snake\_case formatting.
- **Custom Separator**: Defaults to a dot (`.`) but accepts any string configuration.
- **Preserve Callback**: Skips flattening for specific objects (e.g., Dates, Arrays, or custom classes) when the function evaluates to true.
- **Safe Check**: Uses `hasOwnProperty` to avoid processing inherited prototype properties.

To tailor this code to your project, let me know if you want to **handle arrays** explicitly or add **strict TypeScript return types** based on the input object.

- [link](https://www.youtube.com/watch?v=Myz4tuHgDo0)\
  Using hasOwnProperty() method in JavaScript | JavaScript Made Easy - Session 43\
  Jul 17, 2025 — In this video, you'll learn how to use the hasOwnProperty() method in JavaScript to check whether an object contains a specific pr...\
  \
  \
  YouTube

# (d) how to let nodejs cli take stdin piped from ripgrep --files | rg 'pattern' and shell wildcard

To make your Node.js CLI accept input from both piped `stdin` (like `ripgrep`) and shell wildcards (arguments), you must check if `process.stdin.isTTY` is undefined or false.

Here is the complete, high-utility pattern to handle both input sources simultaneously.

### The Complete Solution

Save this code as `cli.js`:

javascript

```
#!/usr/bin/env node
const fs = require('fs');

// 1. Capture shell wildcard arguments (e.g., *.js)
const args = process.argv.slice(2);

// 2. Check if data is being piped via stdin
const isPiped = !process.stdin.isTTY;

function processInputs(inputs) {
    if (inputs.length === 0) {
        console.error('Error: No files provided.');
        process.exit(1);
    }
    // Clean and filter empty lines or spaces
    const files = inputs.map(f => f.trim()).filter(Boolean);
    console.log('Files to process:', files);
}

if (isPiped) {
    // Read all chunks from stdin
    let stdinData = '';
    process.stdin.on('data', chunk => {
        stdinData += chunk;
    });

    process.stdin.on('end', () => {
        // Split piped input by newlines and combine with arguments
        const pipedFiles = stdinData.split('\n');
        processInputs([...args, ...pipedFiles]);
    });
} else {
    // Only shell arguments are present
    processInputs(args);
}
```

Use code with caution.

### How to Run It

First, make your script executable:

bash

```
chmod +x cli.js
```

Use code with caution.

#### Test Case 1: Piped Input Only

bash

```
rg --files | rg 'test' | ./cli.js
```

Use code with caution.

#### Test Case 2: Shell Wildcard Only

bash

```
./cli.js *.json
```

Use code with caution.

#### Test Case 3: Combined Piped and Wildcard Input

bash

```
rg --files | rg 'src' | ./cli.js *.md
```

Use code with caution.

### Key Technical Details

- **`process.stdin.isTTY`**: This property is `undefined` or `false` when data is piped into the process.
- **Stream Buffering**: Stdin flows as chunks. You must accumulate the data and wait for the `end` event before processing.
- **Wildcard Expansion**: The shell expands `*.js` into individual arguments _before_ Node.js runs. They arrive standard in `process.argv`.

If you want to enhance this CLI, I can show you how to **stream the files one-by-one** for better memory efficiency, or how to integrate **`readline`** for simpler line-by-line processing. Let me know which direction you want to explore.

- [link](https://news.ycombinator.com/item?id=17882024)\
  \> It seems you also chose to output line numbers by default in that case, but it...\
  This means you should be able to use ripgrep in pipelines pretty much exactly like you would use grep. It just does the right thin...\
  \
  Hacker News

- [link](https://www.thenodebook.com/process-os/standard-io)\
  Node.js Standard I/O: File Descriptors, TTYs, Pipes, and Backpressure\
  Feb 22, 2026 — For pipes and redirected files, isTTY is usually undefined , so branch on truthiness instead of checking === false .\
  \
  \
  www.thenodebook.com

- [link](https://httpie.io/docs/cli/redirected-input)\
  Redirected Input\
  The universal method for passing request data is through redirected stdin (standard input)—piping. By default, stdin data is buffe...\
  \
  \
  HTTPie

# (d) pipe ripgrep

To use **ripgrep (`rg`)** with Unix pipes, you either stream text _into_ it to filter data, or pipe its output _out_ into another tool. [link](https://www.youtube.com/watch?v=ZcZEH-k9J28)

By default, when ripgrep detects data on standard input (stdin), it stops searching directories and switches to filtering that stream. [link](https://github.com/BurntSushi/ripgrep/discussions/2585)

***

### 1. Piping Text Into ripgrep (Filtering Streams)

You can pipe logs, command outputs, or file streams directly into `rg`. [link](https://www.youtube.com/watch?v=ZcZEH-k9J28)

- **Basic stream filtering**:\
  bash

<!---->

```
cat application.log | rg "ERROR"
```

Use code with caution.

- **Filter a process list**:\
  bash

<!---->

```
ps aux | rg "nginx"
```

Use code with caution.

- **Simulate an "AND" logical search**:\
  Because `rg` filters line-by-line, you can chain multiple invocations to narrow down results containing multiple keywords on the same line.\
  bash

<!---->

```
cat data.txt | rg "critical" | rg "database"
```

Use code with caution.\
[link](https://github.com/BurntSushi/ripgrep/issues/875)

***

### 2. Piping ripgrep Output Into Other Tools

When you want to act on the files or text strings that `rg` finds, you pass its output down the pipeline. [link](https://github.com/BurntSushi/ripgrep/issues/200)

- **View heavy output with a pager**:\
  By default, `rg` drops color formatting when piped. Use `--color=always` to preserve syntax highlighting when reading with `less`.\
  bash

<!---->

```
rg "TODO" --color=always | less -R
```

Use code with caution.

- **Perform a Find-and-Replace (`rg` + `sed`)**:\
  Find files containing a string and pass them to `sed` to edit them in place. Use `-l` to only output matching file names.\
  bash

<!---->

```
rg "old_version" -l | xargs sed -i 's/old_version/new_version/g'
```

Use code with caution.

- **Interactive search with `fzf`**:\
  Pipe a fast file or text list from `rg` into a fuzzy finder to navigate codebases rapidly.\
  bash

<!---->

```
rg --files | fzf
```

Use code with caution.\
[link](https://github.com/BurntSushi/ripgrep/issues/890)

***

### Common Gotchas

- **Losing Color/Line Numbers**: When piped, `rg` intelligently assumes you are writing to a file or script, so it strips out color codes and file headers. Force them back if needed using `--color=always` and `--heading`. [link](https://dev.to/pkutaj/how-to-combine-rg-with-less-in-terminal-52f2)

- **Forcing Directory Search**: If you accidentally pipe data into `rg` but want it to search the current directory instead of the pipe, explicitly add the dot `.` directory path parameter:\
  bash

<!---->

```
echo "ignore me" | rg "pattern" .
```

Use code with caution.\
[link](https://github.com/BurntSushi/ripgrep/discussions/2585)

Would you like to build a specific pipeline recipe, such as matching patterns across **multiple lines** or integrating `rg` into your **text editor**? [link](https://stackoverflow.com/questions/55303484/pipe-ripgrep-search-results-to-vim-and-open-files-at-exact-search-location)

- [link](https://github.com/BurntSushi/ripgrep/issues/1149)\
  Make ripgrep self-aware (i.e. handle piped output ... - GitHub\
  Dec 28, 2018 — More actions. Thanks for replying. I have not yet decided on whether I'll add it to ripgrep. It has my vote, for what it is worth.\
  GitHub
- [link](https://github.com/BurntSushi/ripgrep/issues/200)\
  ripgrep doesn't stop when its pipe is closed · Issue #200 - GitHub\
  Oct 29, 2016 — Given that some very common use cases for ripgrep involve pipelines (e.g., vim $(rg --files-with-matches foo | fzf) ), this seems ...\
  GitHub
- [link](https://github.com/BurntSushi/ripgrep/issues/890)\
  On Windows 10 using MSYS ripgrep -l will not pipe files properly #890\
  Apr 20, 2018 — If this is a bug, what is the actual behavior? ripgrep -l output cannot be piped to stuff like sed. ~/dev/ripgrep$ rg fast -l | xa...\
  GitHub

Show all

## search a pattern. output a list of files. pipe into somewhere.

To search for a pattern and pipe the resulting file list into another command, <mark>use the<span> </span><strong><code dir="ltr">-l</code><span> </span>(or<span> </span><code dir="ltr">--files-with-matches</code>)</strong><span> </span>flag</mark>. This tells `rg` to only output the paths of files that contain the match, rather than the matching lines themselves.

Here are the most common and powerful ways to pipe that file list:

### 1. Open the Files in an Editor (Vim / VS Code)

You can pass the list of files directly to your text editor to open them all at once.

- **Vim / Neovim**:\
  bash

<!---->

```
rg -l "TODO: fix" | xargs -o vim
```

Use code with caution.

- **VS Code**:\
  bash

<!---->

```
rg -l "TODO: fix" | xargs code
```

Use code with caution.

### 2. Global Find and Replace (`sed`)

Find every file containing a pattern, then use `sed` to replace that pattern inside those specific files.

bash

```
rg -l "old_endpoint" | xargs sed -i 's/old_endpoint/new_endpoint/g'
```

Use code with caution.

_(Note: On macOS, use `sed -i '' 's/.../.../g'`)_

### 3. Copy, Move, or Delete the Files

If you need to isolate or archive files containing a specific keyword:

- **Copy to a directory**:\
  bash

<!---->

```
rg -l "confidential" | xargs -I {} cp {} ./backup_folder/
```

Use code with caution.

- **Delete matching files**:\
  bash

<!---->

```
rg -l "temporary_test_data" | xargs rm
```

Use code with caution.

### 4. Count or Inspect the Files

- **Count how many files match**:\
  bash

<!---->

```
rg -l "error_code" | wc -l
```

Use code with caution.

- **See detailed file information (size, permissions)**:\
  bash

<!---->

```
rg -l "TODO" | xargs ls -lh
```

Use code with caution.

### ⚠️ Pro-Tip for Safe Piping (`-0`)

If any of your file names or paths contain **spaces or special characters**, standard `xargs` might break. To prevent this, use `rg -0` (outputs files separated by a null byte) and `xargs -0`:

bash

```
rg -0 -l "my pattern" | xargs -0 sed -i 's/old/new/g'
```

Use code with caution.

What kind of action are you trying to perform on these files? I can give you the **exact command** for your specific use case.

- [link](https://www.educative.io/answers/how-to-use-grep-to-only-show-filenames-in-linux)\
  How to use grep to only show filenames in Linux\
  Syntax The command has several options that are required for different purposes. One such option is -l or --files-with-matches . W...\
  \
  \
  Educative
- [link](https://medium.com/@haroldfinch01/how-can-i-use-grep-to-show-just-filenames-on-linux-38d807593580)\
  How Can I Use grep to Show Just Filenames on Linux\
  May 26, 2025 — Inverting the Output: Showing Files Without Matches Sometimes, you're more interested in files not containing a pattern. Enter the...\
  \
  \
  Medium
- [link](https://github.com/BurntSushi/ripgrep/discussions/2031)\
  Is there a way to print out filename and line number separated by colon? · BurntSushi ripgrep · Discussion #2031\
  Oct 21, 2021 — It does not. It ( rg -l ) prints matching file paths and the number of matching lines. It ( rg -l ) prints just the matching file ...\
  \
  \
  GitHub

Show all

## only rg filenames not content

To search only **file names** (and ignore file content), use the **`--files`** flag to list all files, and pipe that into a second `rg` command to filter the names.

Here are the standard patterns for piping that file list into other tools:

### 1. The Standard Pipeline (Best for most tools)

This finds all files matching your pattern and passes them down the line.

bash

```
rg --files | rg "pattern" | xargs command
```

Use code with caution.

- **Example (Open matching files in VS Code):**\
  bash

<!---->

```
rg --files | rg "config" | xargs code
```

Use code with caution.

### 2. The Safe Pipeline (Best for spaces in filenames)

If your file names have spaces, use `-0` (null-byte delimiter) on both `rg` commands to prevent `xargs` from breaking.

bash

```
rg --files -0 | rg -z "pattern" | xargs -0 command
```

Use code with caution.

- **Example (Delete all matching files safely):**\
  bash

<!---->

```
rg --files -0 | rg -z "temp_cache" | xargs -0 rm
```

Use code with caution.

### 3. The Quick Native Alternative (No piping needed)

If you just want to pass the files to a tool without using pipes, you can use shell expansion `$()` instead:

bash

```
command $(rg --files | rg "pattern")
```

Use code with caution.

- **Example (Search inside those specific files for content later):**\
  bash

<!---->

```
rg "TODO" $(rg --files | rg "test")
```

Use code with caution.

Are you looking to **modify, move, or delete** these specific files? Tell me your goal and I will write the exact pipeline for you.

- [link](https://github.com/BurntSushi/ripgrep/issues/193)\
  \[Question] how to search by filenames only? · Issue #193 · BurntSushi/ripgrep\
  Oct 24, 2016 — --files will list all files which respect ignore files. Is there a flag to list filenames which match the given filename pattern?\
  \
  \
  GitHub
- [link](https://github.com/BurntSushi/ripgrep/issues/91)\
  Searching filenames (\`-g\` option in \`ag\`) · Issue #91 · BurntSushi/ripgrep\
  Sep 25, 2016 — AtomicNess123 commented on Jul 27, 2021 This function returns any file name AND directory matches, though directories themselves c...\
  \
  \
  GitHub
- [link](https://askubuntu.com/questions/1355478/delete-files-not-matching-pattern-using-xargs)\
  find - Delete files not matching pattern using xargs\
  Aug 2, 2021 — 1 Answer 1 -print0 tells find to output its results separated by null bytes instead of the usual newline characters. This is neces...\
  \
  \
  Ask Ubuntu

# (d) how does shell wildcard file expansion work

Shell wildcard file expansion, formally known as **globbing**, is the process where <mark>the command line shell translates a pattern containing special characters into a specific list of matching file and directory names</mark>. [link](https://linuxize.com/post/linux-wildcards-and-globbing/)

### The Core Mechanism: Pre-Execution Expansion

The most critical concept to understand is **timing**: **the shell performs the expansion before the command is ever executed**. [link](https://linuxize.com/post/linux-wildcards-and-globbing/)

1. **You type a command:** For example, `rm *.log`.
2. **The shell scans for wildcards:** It scans the arguments and finds the `*` character.
3. **The shell checks the filesystem:** It looks inside the specified directory, matches all filenames ending in `.log`, and sorts them alphabetically.
4. **The shell rewrites the command:** It physically swaps out `*.log` with the actual file list (e.g., `rm a.log b.log c.log`).
5. **The command runs:** The `rm` utility executes. It has absolutely no idea you typed an asterisk; it only sees a literal list of arguments. [link](https://unix.stackexchange.com/questions/156205/how-can-i-get-the-first-match-from-wildcard-expansion)

***

### Common Wildcard Operators

The shell relies on a simple pattern language to find matches: [link](https://www.oreilly.com/library/view/shell-scripting-expert/9781118166321/9781118166321c04.xhtml)

- **`*` (Asterisk):** Matches **zero or more characters**. For example, `file*` matches `file`, `file1`, and `file_updated.txt`.
- **`?` (Question Mark):** Matches **exactly one character**. For example, `file?.txt` matches `file1.txt` but will silently ignore `file10.txt`.
- **`[...]` (Character Class):** Matches **any single character enclosed within the brackets**. For example, `file[1-3].txt` matches `file1.txt`, `file2.txt`, and `file3.txt`. [link](https://www.youtube.com/watch?v=EJjkvwelbpU)

***

### Edge Cases and Important Rules

#### 1. No Matches Pass Through By Default

If a wildcard pattern doesn't find any matching files, the shell (by default in Bash) **passes the literal wildcard text** directly to the command. [link](https://linuxize.com/post/linux-wildcards-and-globbing/)

- If `*.jpg` matches nothing, running `ls *.jpg` passes the exact string `*.jpg` to `ls`. This results in the classic error: `ls: *.jpg: No such file or directory`. [link](https://unix.stackexchange.com/questions/165660/shell-script-find-name-and-wildcard-expansion)

#### 2. Hidden Files Are Excluded

Standard wildcards like `*` **do not match hidden files** (filenames starting with a dot, like `.bashrc`). To include them, you must explicitly type the dot (e.g., `.*`) or adjust your shell settings using configuration commands like `shopt -s dotglob` in Bash. [link](https://www.linuxteck.com/wildcards-and-globbing-in-linux/)

#### 3. Quoting Stops Expansion

If you wrap a wildcard in single or double quotes, or escape it with a backslash, you **disable globbing**. The shell treats the symbol as a literal character. [link](https://stackoverflow.com/questions/2617453/controlling-shell-command-line-wildcard-expansion-in-c-or-c)

- `echo *.txt` → Outputs: `notes.txt report.txt`
- `echo "*.txt"` → Outputs: `*.txt` [link](https://stackoverflow.com/questions/44921784/expand-wildcards-in-string-variable)

***

### Safety Tip: Preview Your Expansion

Because wildcards can easily misbehave if your pattern is too broad, it is a best practice to safely preview an expansion using `echo` or `printf` before executing destructive actions. [link](https://linuxize.com/post/linux-wildcards-and-globbing/)

bash

```
# Safely verify what will be deleted
printf '%s\n' *.bak

# Run the intended command once confirmed
rm *.bak
```

Use code with caution.

I can help you build safe patterns or write scripts. If you tell me **what specific files you want to target** and **what command you are trying to run**, I can give you the exact wildcard syntax to use.

- [link](https://unix.stackexchange.com/questions/17938/how-does-a-shell-bash-for-example-expand-wildcard-patterns)\
  How does a shell (bash, for example) expand wildcard patterns?\
  Aug 3, 2011 — Show activity on this post. First, a nitpick: a string like a\* in normal shell syntax is a glob, which works differently from regu...\
  Unix & Linux Stack Exchange
- [link](https://unix.stackexchange.com/questions/156205/how-can-i-get-the-first-match-from-wildcard-expansion)\
  How can I get the first match from wildcard expansion?\
  Sep 18, 2014 — In zsh, use the \[1] glob qualifier. Note that even though this special case returns at most one match, it's still a list, and glob...\
  Unix & Linux Stack Exchange
- [link](https://linuxize.com/post/linux-wildcards-and-globbing/)\
  Linux Wildcards and Globbing Explained\
  Jul 1, 2026 — What Globbing Is. Globbing is the shell's expansion of wildcard patterns into matching file and directory names, and it happens be...\
  Linuxize

Show all

## does it use ripgrep

<mark><span>No, the shell does not use<span> </span></span><strong>ripgrep</strong><span> </span>for wildcard file expansion</mark>.

The shell uses an internal, built-in mechanism commonly referred to as **globbing**. Here is how the two technologies differ:

### 1. Internal Shell Globbing (Wildcard Expansion)

- **How it works:** The shell uses standard system libraries (like the POSIX `glob()` function in C) to read directory contents directly from the filesystem.
- **Scope:** It only looks at **file names** and **directory paths**. It does not look inside the files.
- **Integration:** It is completely self-contained within the shell binary (like Bash or Zsh) and requires no external software.

### 2. Ripgrep (`rg`)

- **How it works:** Ripgrep is a highly optimized, standalone command-line search tool written in Rust.
- **Scope:** It is designed to search **inside the text content** of files using Regular Expressions.
- **Relationship to Wildcards:** Ripgrep actually _receives_ the files that the shell expands. For example, if you run `rg "error" *.log`, the shell expands `*.log` into a list of files first, and then ripgrep searches inside those specific files.

If you are trying to optimize your command line workflow, I can help. If you tell me **what you are trying to search for** or **how many files you are processing**, I can recommend whether you should use standard shell wildcards, the `find` command, or `ripgrep`.

- [link](https://learn.microsoft.com/en-us/windows/win32/shell/library-be-library-aware)\
  Using Libraries in your Program - Win32 apps\
  Jan 7, 2021 — Programming with Libraries The Windows Shell programming model describes how a program interacts with Windows Shell programming ob...\
  \
  \
  Microsoft Learn
- [link](https://learnbyexample.github.io/learn%5Fgnugrep%5Fripgrep/recursive-search.html)\
  CLI text processing with GNU grep and ripgrep\
  GLOB here refers to wildcard patterns (also known as globs) used by the shell to expand filenames. These are NOT the same as regul...\
  \
  \
  GitHub
- [link](https://github.com/BurntSushi/ripgrep/issues/1653)\
  Skip lines in a file · Issue #1653 · BurntSushi/ripgrep\
  Aug 14, 2020 — BurntSushi commented on Aug 14, 2020 It would certainly be faster as it doesn't require any IPC and external process invocation. Y...\
  \
  \
  GitHub

Show all

## is glob slower

**It depends entirely on the depth of your search.** For a single directory, shell globbing is incredibly fast because it runs natively in memory without launching an external process. However, for deep, recursive searches across thousands of folders, globbing is significantly slower than modern alternatives like [fd](https://github.com/sharkdp/fd).

### When Globbing is Fast (Flat Searches)

If you are matching files inside a single folder (e.g., `ls *.json`), globbing is highly efficient. [link](https://www.reddit.com/r/bash/comments/va53dc/how%5Fdo%5Fi%5Fglob%5Fpattern%5Fmatch%5Fonly%5Ffiles%5Fnot/)

- It uses fast, native C system calls like `readdir`.
- It avoids the overhead of launching separate tools like `find`.
- It processes simple string-matching rules instead of complex regex engines. [link](https://www.reddit.com/r/bash/comments/va53dc/how%5Fdo%5Fi%5Fglob%5Fpattern%5Fmatch%5Fonly%5Ffiles%5Fnot/)

### When Globbing is Slower (Recursive Searches)

If you enable recursive globbing (e.g., using `**/*.js` via `globstar` in Bash), performance drops dramatically. [link](https://www.reddit.com/r/bash/comments/va53dc/how%5Fdo%5Fi%5Fglob%5Fpattern%5Fmatch%5Fonly%5Ffiles%5Fnot/)

- **Single-threaded design:** The shell scans directories sequentially using only one CPU thread.
- **No optimization:** Tools like fd parallelize directory traversal and automatically ignore large, irrelevant paths listed in `.gitignore` or hidden folders. Shell globbing crawls absolutely everything.
- **Memory usage:** The shell must store the entire list of found matches in your system RAM before passing them to your command. [link](https://github.com/sharkdp/fd/issues/693)

### The True Danger: Command Line Limits

The primary reason to avoid massive globs is not speed, but stability. If a glob matches tens of thousands of files, it will crash your terminal with an `Argument list too long` (`E2BIG`) error. [link](https://stackoverflow.com/questions/2937407/test-whether-a-glob-has-any-matches-in-bash/34195247)

Operating systems limit how much text can be passed to a single command. Dedicated file-finding utilities avoid this crash entirely by using a streaming pipeline architecture.

***

### What to Use Instead

| Search Type           | Best Tool                       | Why It Is Faster               |
| --------------------- | ------------------------------- | ------------------------------ |
| **Flat search**       | Shell Glob (`*.txt`)            | No process overhead.           |
| **Recursive search**  | `fd -e txt`                     | Parallel multi-threading.      |
| **Streaming actions** | `find . -name "*.txt" -exec...` | Avoids argument memory limits. |

If you are running into slow performance, let me know:

- **How many files** you are trying to parse
- **How deep** the directory tree is
- The **exact command** you want to run

I can give you a fast, non-blocking pipeline alternative!

- [link](https://www.reddit.com/r/bash/comments/va53dc/how%5Fdo%5Fi%5Fglob%5Fpattern%5Fmatch%5Fonly%5Ffiles%5Fnot/)\
  How do I glob pattern match only files, not directories? - Reddit\
  Jun 11, 2022 — I've seen globbing up to 20x faster than find and find up to 5x faster than globbing. It's very situation dependent. Introducing t...\
  Reddit·r/bash
- [link](https://github.com/sharkdp/fd/issues/693)\
  Why fd is so much faster than find? · Issue #693 · sharkdp/fd\
  Nov 29, 2020 — Yes. If configured correctly, they should do exactly the same job. Note however, that fd ignores entries from the . gitignore as w...\
  GitHub
- [link](https://stackoverflow.com/questions/2937407/test-whether-a-glob-has-any-matches-in-bash/34195247)\
  Test whether a glob has any matches in Bash - Stack Overflow\
  May 30, 2010 — stdout is a list of files matching the glob. I think this is the best option in terms of conciseness and minimizing potential side...\
  Stack Overflow

Show all

## is rg slower than rg --files | rg "pattern"

<mark><strong><span>No, they do completely different things, so they cannot be directly compared by speed alone.</span></strong></mark>

The first command searches the _contents_ of your files, while the second command only searches the _names_ of your files.

### Why They Are Different

- **`rg "pattern"` (Content Search):** This opens up every single file in your directory and reads through the text inside them to find your pattern. If you have gigabytes of code or log files, it has to scan all of that raw data.
- **`rg --files | rg "pattern"` (Filename Search):** The `--files` flag tells ripgrep to quickly print out a list of file paths. It never opens a single file. It then pipes that plain-text list of paths into a second ripgrep process, which filters the filenames for your pattern.

### Speed Comparison

If your goal is to **find a file by its name**, the piped command `rg --files | rg "pattern"` is vastly faster because reading directory metadata takes a fraction of the time it takes to read file contents.

However, running `rg --files | rg "pattern"` will completely miss what you are looking for if the phrase "pattern" lives inside a file but is not in the filename.

***

### The Right Tool for the Job

Instead of piping two instances of ripgrep together to find a file by its name, you should use tools designed explicitly for filename searching:

- **Using Ripgrep:** `rg --files -g "*pattern*"` (Uses the built-in glob flag).
- **Using `fd`:** `fd pattern` (The fastest dedicated tool for finding filenames, built by the same community).

If you are trying to optimize a specific search, let me know:

- Are you looking for text **inside** a file, or the **name** of the file itself?
- How large is the **codebase or directory** you are scanning?

I can give you the exact, fastest command for your needs!

- [link](https://stackoverflow.com/questions/59052703/grep-or-ripgrep-how-to-find-only-files-that-match-multiple-patterns-not-only-o)\
  grep or ripgrep: How to find only files that match multiple ...\
  Nov 26, 2019 — First the parens run: rg -l 'FirstSearchPattern' , which searches all files for the pattern FirstSearchPattern . By using -l it re...\
  Stack Overflow
- [link](https://medium.com/@denisuraev/rag-is-dead-before-you-build-it-try-file-first-ai-agent-f51bfe693a55)\
  RAG Is Dead? Before You Build It, Try File-First AI Agent\
  Nov 18, 2025 — The File-First Agent: A Radical Simplification It might run a keyword search across your files or database (like hitting Ctrl+F in...\
  \
  \
  Medium
- [link](https://manpages.ubuntu.com/manpages/focal/man1/rg.1.html)\
  Ubuntu Manpage: rg - recursively search current directory for lines matching a pattern\
  Never print the file path with the matched lines. This is the default when ripgrep is explicitly instructed to search one file or ...\
  \
  Ubuntu Manpages

Show all

## i mean is shell wildcard expansion globbing slower than rg --files | rg "pattern"

**Yes, shell wildcard expansion is slower** than `rg --files | rg "pattern"` for recursive, deep-directory searches.

However, for a flat, single-directory search, shell wildcard expansion is faster.

### Why Ripgrep Wins on Deep Folders

- **Multi-threading:** `rg --files` scans directories using all your CPU cores simultaneously. Shell globbing utilizes only a single thread.
- **Smart Ignoring:** Ripgrep automatically skips hidden files and paths in your `.gitignore` file. Shell globbing crawls everything, wastefully processing millions of unneeded files.
- **No Memory Bottlenecks:** The piped command streams text lines one by one. Shell globbing forces the shell to load every single match into memory simultaneously before executing, which often triggers an `Argument list too long` crash.

### Performance Summary

| Search Depth                      | Winner               | Why                                             |
| --------------------------------- | -------------------- | ----------------------------------------------- |
| **Single Folder** (e.g., `*.txt`) | **Shell Glob**       | Direct memory match. Zero process overhead.     |
| **Deep Tree** (e.g., `**/*.txt`)  | **Ripgrep Pipeline** | Multi-threaded traversal. Ignores junk folders. |

### The Ultimate Speed Alternative

If you want the absolute fastest way to find files by name, use `fd` instead of ripgrep. It is explicitly optimized for filenames:

bash

```
# Faster than both methods
fd "pattern"
```

Use code with caution.

If you are dealing with a slow search script right now, let me know:

- **How deep** your folder structure goes
- **What command** you run after finding files

I can write you a fast, non-blocking pipeline script!

- [link](https://stackoverflow.com/questions/2937407/test-whether-a-glob-has-any-matches-in-bash)\
  Test whether a glob has any matches in Bash - Stack Overflow\
  May 30, 2010 — Bash-specific solution: compgen -G "". Escape the pattern or it'll get pre-expanded into matches. Exit status is: 1 for no-match,;\
  Stack Overflow
- [link](https://man.archlinux.org/man/extra/ripgrep/rg.1.en)\
  rg(1) — Arch manual pages\
  ripgrep (rg) recursively searches the current directory for a regex pattern. By default, ripgrep will respect your . gitignore and...\
  \
  Arch manual pages
- [link](https://superuser.com/questions/1347929/how-do-i-avoid-argument-list-too-long-errors-when-compressing-thousands-of-fil)\
  How do I avoid "Argument list too long" errors when compressing thousands of files?\
  Aug 10, 2018 — 1 Answer 1 You exceeded maximum command line length. Command line has finite length that you can test with getconf ARG\_MAX command...\
  \
  Super User

## can shell wildcard use rg --files rg 'pattern' under the hood

**No, the shell cannot use `rg --files | rg "pattern"` under the hood for standard wildcard expansion.**

The shell’s wildcard engine is baked directly into its source code. It cannot swap its native engine out for an external tool like ripgrep because doing so would completely break how shell commands work.

Here is why it is structurally impossible for the shell to do this:

### 1. The Output Types Do Not Match

- **What a Wildcard Needs:** The shell requires an expanded list of individual arguments to pass to a command (e.g., `file1.txt`, `file2.txt`).
- **What the Ripgrep Pipeline Outputs:** The command `rg --files | rg "pattern"` outputs a single, giant block of text separated by newlines. The shell does not understand how to safely parse this into arguments without breaking on filenames that contain spaces.

### 2. Wildcards Need Exact Matches, Ripgrep Uses Substrings

- If you type `ls *.txt`, the shell must find files that end _exactly_ with `.txt`.
- If the shell tried to use `rg --files | rg ".txt"` under the hood, ripgrep would use regex matching. It would mistakenly match a file named `text_file.png` or `important.txt.bak` because `.txt` exists somewhere inside the name.

### 3. Ripgrep Skips Files by Design

Shell wildcards are legally obligated to look at every single file in a folder. Because ripgrep automatically respects `.gitignore` and skips hidden files, letting it run wildcards under the hood would cause commands like `rm *` to silently miss critical files, leading to major data bugs.

***

### How to Force the Shell to Use Ripgrep Instead

While the shell won't do it automatically, you can explicitly force the shell to use ripgrep's output as your argument list using **Command Substitution** (`$()`).

bash

```
# This forces the shell to run your ripgrep pipeline,
# and hands the resulting files directly to 'ls'
ls $(rg --files | rg "pattern")
```

Use code with caution.

_(Note: If your files contain spaces, you should use `xargs` or `fd` instead of the command above to prevent the shell from breaking the filenames apart)._

If you are trying to make your terminal faster or want to customize your shell's behavior, let me know:

- Which shell you use (**Bash** or **Zsh**)?
- Do you want to create a **permanent shortcut/alias** for fast file searching?

I can write you a custom shell function to bridge the two worlds safely!

- [link](https://teamtreehouse.com/library/introduction-to-the-terminal/wildcard-expansion)\
  Wildcard Expansion (How To) | Introduction to the Terminal\
  Jan 30, 2019 — So suppose I wanted to run a command on all the files with a . txt extension. I could type \*. txt to find all of those files, and ...\
  \
  \
  teamtreehouse.com
- [link](https://github.com/BurntSushi/ripgrep/issues/91)\
  Searching filenames (\`-g\` option in \`ag\`) · Issue #91 · BurntSushi/ripgrep\
  Sep 25, 2016 — BurntSushi commented on Jan 21, 2017 Note that --files also includes binary files (is this a bug?) No. "binary" files isn't a fact...\
  \
  \
  GitHub
- [link](https://medium.com/@allifmaulana20/digital-forensics-lab-01-introduction-to-linux-command-line-tools-for-forensics-0214a20fec6e)\
  Digital Forensics Lab 01: Introduction to Linux Command-Line Tools for Forensics\
  Feb 16, 2026 — Detailed Explanation How the command works: ls : Command to list files and directories \* : Wildcard character that matches any seq...\
  \
  \
  Medium

Show all

# (d) how to let ripgrep function like shell wildcard

To make `ripgrep` (`rg`) function like a shell wildcard when searching for text or filtering files, you need to <mark>use different flags depending on whether you are matching text<span> </span><strong>inside</strong><span> </span>files or matching<span> </span><strong>filenames</strong></mark>. By default, `ripgrep` uses Regular Expressions (Regex) for text content and Glob matching for file paths. [link](https://github.com/BurntSushi/ripgrep/issues/2314)

Here is how to map shell wildcards to `ripgrep`:

### 1. Matching Text Inside Files (Regex Translation)

If you want to use a wildcard like `*` inside your text search pattern, you must translate shell wildcards into Regex syntax, or use the literal flag. [link](https://stackoverflow.com/questions/67502845/how-to-search-with-wildcards-with-ripgrep)

- **Zero or more characters (`*`)**: Translate `*` to `.*` in Regex.
  - _Shell style concept_: `hello*world`
  - _Ripgrep command_: `rg 'hello.*world'` [link](https://stackoverflow.com/questions/67502845/how-to-search-with-wildcards-with-ripgrep)
- **Exactly one character (`?`)**: Translate `?` to `.` in Regex.
  - _Shell style concept_: `cat?`
  - _Ripgrep command_: `rg 'cat.'` [link](https://www.youtube.com/watch?v=EJjkvwelbpU\&t=59)
- **Exact literal matching (No wildcards)**: If your pattern contains characters like `*` or `?` but you want `ripgrep` to treat them as plain text instead of special characters, use the `-F` (`--fixed-strings`) flag.
  - _Ripgrep command_: `rg -F 'exact*text?here'` [link](https://askubuntu.com/questions/1362377/grep-command-using-wildcards-0-9)

### 2. Filtering Filenames (Globbing)

If you want to limit your search to specific files using shell-like wildcards (globs), use the `-g` or `--glob` flag. **Always wrap the glob in single quotes** so your shell doesn't expand it before `ripgrep` can read it. [link](https://github.com/BurntSushi/ripgrep/issues/831)

- **Search only in specific file extensions**:\
  bash

<!---->

```
rg -g '*.md' 'search_term'
```

Use code with caution.

- **Exclude specific files or directories** (add an exclamation mark `!`):\
  bash

<!---->

```
rg -g '!*.min.js' 'search_term'
```

Use code with caution.

- **Combine multiple wildcard filters**:\
  bash

<!---->

```
rg -g '*.txt' -g '*.log' 'error_pattern'
```

Use code with caution.

### Cheat Sheet: Shell Wildcards vs. Ripgrep Text Search

| Shell Wildcard | Regex Equivalent in `rg` | Meaning                                   |
| -------------- | ------------------------ | ----------------------------------------- | --------------------------------------- |
| `*`            | `.*`                     | Matches any string of any length          |
| `?`            | `.`                      | Matches exactly one character             |
| `[a-z]`        | `[a-z]`                  | Matches any single character in the range |
| `{txt,md}`     | `(txt                    | md)`                                      | Matches either expression (alternation) |

If you are trying to automate a specific search workflow or map a complex shell script loop over to `ripgrep`, let me know the **exact command** you are trying to convert so I can write out the exact syntax for you.

- [link](https://news.ycombinator.com/item?id=22278602)\
  A common mistake involving wildcards and the find command\
  Feb 8, 2020 — eikenberry on Feb 9, 2020 | root | parent | next \[–]. Do either of these tools have a "grep" mode, so that I can alias grep to it ...\
  Hacker News
- [link](https://stackoverflow.com/questions/67502845/how-to-search-with-wildcards-with-ripgrep)\
  How to search with wildcards with RIPGREP\
  May 12, 2021 — To use wildcards with ripgrep, you need to use regex. Rigrep uses a perl compatible regex. The following command uses a wildcard: ...\
  Stack Overflow
- [link](https://github.com/BurntSushi/ripgrep/issues/2314)\
  Include/exclude searched files with implicit wildcard or regex (ag -G) · Issue #2314 · BurntSushi/ripgrep\
  Sep 28, 2022 — ripgrep only supports globs for filtering file paths. This means that in most cases, you need to type extra characters (wildcard +\
  GitHub

Show all

## for example, rg --files | rg '.txt', only output \*.txt, not foo.txt.yaml, abcd.txtefgh

To make `ripgrep` only match files that end strictly in `.txt` (and not `.txt.yaml` or `.txtefgh`), you must anchor the regular expression to the end of the line using the `$` character.

Here are the best ways to do this:

### 1. Using Anchored Regex (Your exact workflow)

The `.` character in regex matches _any_ character. You must escape it with a backslash `\.` to mean a literal dot, and add `$` at the end to anchor it to the end of the filename string.

bash

```
rg --files | rg '\.txt$'
```

Use code with caution.

### 2. The Faster Native Way (Recommended)

You can completely skip piping `rg --files` into a second command. `ripgrep` has a built-in `--files` filtering system using the `-g` (glob) flag, which behaves exactly like a shell wildcard.

bash

```
rg --files -g '*.txt'
```

Use code with caution.

### Why this works:

- `\.` tells `ripgrep` to look for a literal dot instead of treating the dot as "any character".
- `$` ensures that `.txt` must be the absolute end of the line, which filters out trailing extensions like `.txt.yaml` or `.txtefgh`.

If you are trying to output these files to **feed them into another command** or want to **search for text inside** only those specific `.txt` files, let me know so I can give you the most efficient one-liner!

- [link](https://www.howtogeek.com/get-started-with-regex-in-linux-terminal/)\
  How to Get Started With Regular Expressions in the Linux Terminal\
  Jun 18, 2025 — Putting It All Together: Using Regex With Commands So now for the grand finale: how do we put what we've learned to good use? As m...\
  \
  \
  How-To Geek

# (d) is shell wildcard globbing slower than rg --files -g

**Yes, shell wildcard globbing is generally much slower than running `rg --files -g "pattern"`**, especially when dealing with large directories, deep nested structures, or recursive globbing (`**/*`).

While simple single-directory wildcards (like `ls *.txt`) are executed quickly for minor tasks, `ripgrep` (`rg`) vastly outperforms the shell's built-in globbing engine on modern filesystems for scaled or recursive operations. [link](https://unix.stackexchange.com/questions/374488/fastest-way-to-recursively-list-all-the-files-in-a-directory)

***

### Why `rg --files -g` is Faster

- **Parallel Directory Traversal:** Shell globbing is strictly single-threaded. `ripgrep` uses highly optimized, multi-threaded directory walking powered by Rust's `ignore` crate. It crawls multiple directory branches simultaneously, utilizing all CPU cores. [link](https://unix.stackexchange.com/questions/374488/fastest-way-to-recursively-list-all-the-files-in-a-directory)
- **Automatic Ignored Paths:** By default, `rg` respects your `.gitignore`, `.ignore`, and hidden file rules. Shell globbing indiscriminately traverses _every_ folder—including massive dependency trees like `node_modules/` or `.git/`—unless you manually craft complex exclusion logic. [link](https://www.instagram.com/reel/DZ8DRURq2Qz/)
- **No Argument List Limits:** Shell wildcards expand _before_ a command runs. If a glob matches hundreds of thousands of files, the shell will crash with an **`Argument list too long`** error. `rg --files -g` streams the matching process internally, circumventing kernel command-line limits entirely. [link](https://serverfault.com/questions/56068/argument-list-too-long-error-while-copying-a-large-number-of-files)
- **Efficient Memory & IO Management:** Shells like `bash` often read all matching filenames into memory at once to sort them alphabetically before executing the command. `ripgrep` leverages advanced filesystem syscalls, optimized buffering, and ignores sorting by default to maximize raw hardware throughput.

### Performance Comparison Overview

| Feature                               | Shell Globbing (e.g., `bash`, `zsh`)         | `rg --files -g "pattern"`                |
| ------------------------------------- | -------------------------------------------- | ---------------------------------------- |
| **Execution Model**                   | Single-threaded                              | Multi-threaded (Parallel)                |
| \*\*Recursive Performance (`**/\*`)\*\* | Exponentially slows down on deep trees       | Stays fast using parallel workers        |
| **Scale Limitations**                 | Risk of `Argument list too long` error       | Handles millions of files easily         |
| **Smart Defaults**                    | Searches everything (incl. `.git`, binaries) | Automatically skips `.gitignore` targets |

***

### Examples of When to Switch

#### 1. Shallow Searches

For a small, shallow directory, the difference is negligible:

- **Shell:** `ls *.json`
- **Ripgrep:** `rg --files -g "*.json"`

#### 2. Deep/Recursive Searches (Where `rg` shines)

If you are matching files deeper in a project structure, the shell's recursive globbing degrades significantly:

- **Shell (Slow):** `ls **/*.json` (Requires `shopt -s globstar` in bash)
- **Ripgrep (Fast):** `rg --files -g "*.json"` _(Note: `rg` searches recursively by default)_ [link](https://www.instagram.com/reel/DNGnzbBsf9s/)

To see how these options behave in your environment, try timing both commands across your largest project repository:

bash

```
time echo **/*.json > /dev/null
time rg --files -g "*.json" > /dev/null
```

Use code with caution.

Would you like help adapting a specific shell loop to use `ripgrep`, or are you looking to optimize **build script performance**?

- [link](https://www.reddit.com/r/cpp/comments/u8vrpt/learning%5Fbuild%5Fsystems%5Fpremake%5Fwildcards%5Fvs%5Fcmake/)\
  Premake Wildcards vs CMake Globbing : r/cpp - Reddit\
  Apr 22, 2022 — Globbing is amazing from a usability perspective but makes it very hard to have performant incremental builds with guaranteed corr...\
  Reddit·r/cpp
- [link](https://github.com/missing-semester/missing-semester/blob/master/%5F2019/command-line.md)\
  missing-semester/\_2019/command-line.md at master - GitHub\
  Jan 17, 2019 — rg/fzf vs grep grep is a great tool but if you want to grep through many files at once, there are better tools for that purpose. a...\
  GitHub
- [link](https://www.instagram.com/reel/DNGnzbBsf9s/)\
  Dave Eddy | Find \*all\* files with \`\*\*\` in Bash! Recursive ...\
  Aug 8, 2025 — What's up everyone? My name is Dave and you suck at programming and today we're going to talk about globstar in bash what is globs...\
  [3:26](https://www.instagram.com/reel/DNGnzbBsf9s/)\
  Instagram·Dave Eddy

Show all

# use snake case. write a ts fn process. params: convert. convert is a fn that takes a string and outputs a string. it will be called inside a nodejs cli. when called, take all args (shell wildcard) and stdin (like rg --files -g), for each file output a colocated yaml of the same filename.

typescript

```
import * as fs from 'fs/promises';
import * as path from 'path';
import * as readline from 'readline';

export async function process_files(
    convert_fn: (input_str: string) => string
): Promise<void> {
    const file_set = new Set<string>();

    // 1. Gather files from shell arguments (wildcards)
    const shell_args = process.argv.slice(2);
    for (const arg_path of shell_args) {
        file_set.add(path.resolve(arg_path));
    }

    // 2. Gather files from stdin if piped
    if (!process.stdin.isTTY) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });

        for await (const line of rl) {
            const trimmed_line = line.trim();
            if (trimmed_line) {
                file_set.add(path.resolve(trimmed_line));
            }
        }
    }

    // 3. Process each unique file path
    for (const file_path of file_set) {
        try {
            const file_stat = await fs.stat(file_path);
            if (!file_stat.isFile()) {
                continue;
            }

            const raw_content = await fs.readFile(file_path, 'utf-8');
            const converted_content = convert_fn(raw_content);

            const parsed_path = path.parse(file_path);
            const yaml_path = path.format({
                dir: parsed_path.dir,
                name: parsed_path.name,
                ext: '.yaml'
            });

            await fs.writeFile(yaml_path, converted_content, 'utf-8');
        } catch (error_obj) {
            console.error(`Failed processing ${file_path}:`, error_obj);
        }
    }
}
```

Use code with caution.

To help fine-tune this CLI behavior, please let me know:

- Should the tool **overwrite existing YAML files** or skip them?
- Do you need **directory recursion** if an argument is a folder?
- What **error handling** style do you prefer for missing files?

## be sync

typescript

```
import * as fs from 'fs';
import * as path from 'path';

export function process_files(
    convert_fn: (input_str: string) => string
): void {
    const file_set = new Set<string>();

    // 1. Gather files from shell arguments
    const shell_args = process.argv.slice(2);
    for (const arg_path of shell_args) {
        file_set.add(path.resolve(arg_path));
    }

    // 2. Gather files from stdin using sync buffer reading
    if (!process.stdin.isTTY) {
        try {
            const buffer_size = 65536;
            const chunk_buffer = Buffer.alloc(buffer_size);
            let total_input = '';
            let bytes_read = 0;

            // Loop synchronously through stdin descriptor 0
            while ((bytes_read = fs.readSync(0, chunk_buffer, 0, buffer_size, null)) > 0) {
                total_input += chunk_buffer.toString('utf-8', 0, bytes_read);
            }

            const input_lines = total_input.split(/\r?\n/);
            for (const line of input_lines) {
                const trimmed_line = line.trim();
                if (trimmed_line) {
                    file_set.add(path.resolve(trimmed_line));
                }
            }
        } catch (error_obj) {
            // Handle cases where stdin is closed or unavailable
            if ((error_obj as any).code !== 'EAGAIN' && (error_obj as any).code !== 'EOF') {
                throw error_obj;
            }
        }
    }

    // 3. Process each unique file path synchronously
    for (const file_path of file_set) {
        try {
            const file_stat = fs.statSync(file_path, { throwIfNoEntry: false });
            if (!file_stat || !file_stat.isFile()) {
                continue;
            }

            const raw_content = fs.readFileSync(file_path, 'utf-8');
            const converted_content = convert_fn(raw_content);

            const parsed_path = path.parse(file_path);
            const yaml_path = path.format({
                dir: parsed_path.dir,
                name: parsed_path.name,
                ext: '.yaml'
            });

            fs.writeFileSync(yaml_path, converted_content, 'utf-8');
        } catch (error_obj) {
            console.error(`Failed processing ${file_path}:`, error_obj);
        }
    }
}
```

Use code with caution.

If you want to customize this further, tell me:

- Do you want to add **logging/verbose outputs** for each written file?
- Should it **abort completely** if one file fails?
- Do you need to **filter by specific extensions** when reading files?

## (d) fix. args work. stdin doesnt work. expect a list of files separated by linebreaks.

\`\`\`\
...source/web/scripts % rg --files -g '\*.ts'\
test/test.ts\
convert design tokens.ts\
legacy/convert design tokens 0.0.ts\
generate oklch scale.ts\
convert hex to oklch.ts\
test.ts\
generate spacing scale.ts\
\`\`\`

\`\`\`\
...source/web/scripts % fd ".ts"\
convert design tokens.ts\
convert hex to oklch.ts\
generate oklch scale.ts\
generate spacing scale.ts\
legacy/convert design tokens 0.0.ts\
test/test.ts\
test.ts\
\`\`\`

Using `fs.readSync(0, ...)` on blocking streams like standard input in a synchronous execution flow can cause Node.js to stall or miss chunks.

The most reliable way to read `stdin` synchronously in Node.js is by using `fs.readFileSync(0)`.

typescript

```
import * as fs from 'fs';
import * as path from 'path';

export function process_files(
    convert_fn: (input_str: string) => string
): void {
    const file_set = new Set<string>();

    // 1. Gather files from shell arguments
    const shell_args = process.argv.slice(2);
    for (const arg_path of shell_args) {
        file_set.add(path.resolve(arg_path));
    }

    // 2. Gather files from stdin if piped
    if (!process.stdin.isTTY) {
        try {
            // Read entire stdin buffer synchronously
            const stdin_raw = fs.readFileSync(0, 'utf-8');
            const input_lines = stdin_raw.split(/\r?\n/);

            for (const line of input_lines) {
                const trimmed_line = line.trim();
                if (trimmed_line) {
                    file_set.add(path.resolve(trimmed_line));
                }
            }
        } catch (error_obj) {
            // Silently catch errors if stdin is completely empty or closed
            if ((error_obj as any).code !== 'ENOENT') {
                throw error_obj;
            }
        }
    }

    // 3. Process each unique file path synchronously
    for (const file_path of file_set) {
        try {
            const file_stat = fs.statSync(file_path, { throwIfNoEntry: false });
            if (!file_stat || !file_stat.isFile()) {
                continue;
            }

            const raw_content = fs.readFileSync(file_path, 'utf-8');
            const converted_content = convert_fn(raw_content);

            const parsed_path = path.parse(file_path);
            const yaml_path = path.format({
                dir: parsed_path.dir,
                name: parsed_path.name,
                ext: '.yaml'
            });

            fs.writeFileSync(yaml_path, converted_content, 'utf-8');
        } catch (error_obj) {
            console.error(`Failed processing ${file_path}:`, error_obj);
        }
    }
}
```

Use code with caution.

If you notice any more edge cases, let me know:

- Do any of your filenames contain **trailing whitespace** that `line.trim()` might accidentally destroy?

- Do you need to print a **summary of processed files** at the end?

# will promise.all increase perf

<mark><strong><span>Yes,<span> </span></span><code dir="ltr">Promise.all</code><span> </span>will significantly increase performance</strong>, but only when you use it to run independent, I/O-bound asynchronous operations concurrently</mark>. Instead of waiting for each task to finish one after another, it kicks them off at roughly the same time, cutting your total waiting time down to the duration of the single slowest task. [link](https://elfi-y.medium.com/better-handle-promise-with-await-promise-all-3d8816a46351)

### Sequential vs. Concurrent Performance

If you have three independent API requests that each take 2 seconds to resolve, your total execution time drops from **6 seconds** to just **2 seconds**. [link](https://elfi-y.medium.com/better-handle-promise-with-await-promise-all-3d8816a46351)

javascript

```
// ❌ SLOW: Sequential (Takes ~6 seconds)
const user = await fetchUser();       // Waits 2s
const posts = await fetchPosts();     // Waits 2s
const comments = await fetchComments(); // Waits 2s

//  FAST: Concurrent (Takes ~2 seconds)
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);
```

Use code with caution.

### Direct Comparison

| Feature            | Sequential (`await` in a loop)               | Concurrent (`Promise.all`)                        |
| ------------------ | -------------------------------------------- | ------------------------------------------------- |
| **Execution**      | One after the other                          | Simultaneously (overlapping)                      |
| **Total Time**     | Sum of all task durations                    | Duration of the single longest task               |
| **Use Case**       | Dependent tasks (Task B needs Task A's data) | Independent tasks                                 |
| **Error Handling** | Throws at the exact failed task              | Fail-fast (rejects instantly if _any_ task fails) |

### When It Won't Speed Up Your Code

- **Dependent Operations**: If your second API call requires data returned from the first call, you cannot use `Promise.all`. [link](https://www.linkedin.com/posts/aamir-muhammad-amin-a80a0421a%5Fjavascript-webperformance-engineeringtips-activity-7402577590265237504--riJ)
- **CPU-Heavy Work**: JavaScript is single-threaded. If your promises are doing heavy math or processing massive JSON strings rather than waiting on external I/O (like network or disk operations), `Promise.all` will not make them run on multiple CPU cores. [link](https://www.reddit.com/r/node/comments/1daak6s/how%5Fcocurrent%5Fpromiseall%5Factually%5Fis/)
- **Massive Arrays (The "Meltdown" Trap)**: Passing an array of 10,000 fetch operations into `Promise.all` will fire them all simultaneously. This can crash your server, exhaust your database connections, or trigger rate limits. For heavy batches, you should look into throttling libraries like p-limit. [link](https://www.linkedin.com/posts/aamir-muhammad-amin-a80a0421a%5Fjavascript-webperformance-engineeringtips-activity-7339215541879857154-USxz)

If you want to optimize a specific piece of code, share your **current async function or loop**, the **number of operations** it handles, and whether the tasks **depend on each other**. I can show you exactly how to rewrite it safely!

- [link](https://www.reddit.com/r/node/comments/1daak6s/how%5Fcocurrent%5Fpromiseall%5Factually%5Fis/)\
  How cocurrent Promise.all() actually is? : r/node - Reddit\
  Jun 7, 2024 — Promise.all doesn't actually handle any concurrency at all, it will simply just wait for the promises to resolve. Once you create ...\
  Reddit·r/node
- [link](https://dev.to/dperrymorrow/speed-up-your-code-with-promiseall-3d4i)\
  Speed up your code with Promise.all - DEV Community\
  Nov 23, 2022 — allSettled. One very important thing to note, If ANY of the promises reject. Promise. all will reject at the first failure. Think ...\
  DEV Community
- [link](https://elfi-y.medium.com/better-handle-promise-with-await-promise-all-3d8816a46351)\
  Better Handle Promise with await Promise.all() | by E.Y.\
  Jul 13, 2020 — Get E.Y.'s stories in your inbox. Join Medium for free to get updates from this writer. ... Well while async/await is good to use,\
  Medium·E.Y.

Show all

## like if you have ten math computations

**No, `Promise.all` will not increase performance** for ten mathematical computations.

Because JavaScript is single-threaded, it can only execute one piece of code at a time on your CPU. Wrapping standard math calculations in promises does not make them run simultaneously; it actually introduces minor framework overhead.

### How JavaScript Handles Both Workflows

javascript

```
// 🏎️ WAY FASTER: Direct Execution (Synchronous)
// Runs instantly on the main thread.
const results = numbers.map(x => heavyMath(x));

// 🐢 SLOWER: Promise.all (Asynchronous)
// Adds overhead by creating ten separate Promise objects.
const results = await Promise.all(numbers.map(async (x) => heavyMath(x)));
```

Use code with caution.

### Why Math is Different Than API Calls

- **No Idle Waiting**: When you fetch data from an API, the CPU sits idle waiting for the network. `Promise.all` utilizes this idle time. With math, the CPU is actively working the entire time, so it cannot switch to another task to save time.
- **Event Loop Overhead**: Moving math into promises forces JavaScript to push those operations into the microtask queue. This adds a small delay because the engine has to schedule, track, and resolve ten wrapper objects.

### How to Actually Speed Up Math in JavaScript

If your ten mathematical computations are heavy enough to lag your application, you can bypass the single-thread limitation using these methods:

- **Web Workers**: Move the calculations onto a completely separate browser background thread so the main UI never freezes.
- **Worker Threads**: If you are using Node.js, use the native `worker_threads` module to distribute the math across multiple physical CPU cores.
- **SIMD / WebAssembly**: Compile heavy algorithmic math into C++ or Rust and run it via WebAssembly for near-native execution speed.

To help you optimize, could you share **what kind of math** you are running (e.g., matrix multiplication, image processing, large loops) and whether this code runs in the **browser or Node.js**?

- [link](https://www.reddit.com/r/node/comments/1daak6s/how%5Fcocurrent%5Fpromiseall%5Factually%5Fis/)\
  How cocurrent Promise.all() actually is? : r/node - Reddit\
  Jun 7, 2024 — Promise.all doesn't actually handle any concurrency at all, it will simply just wait for the promises to resolve. Once you create ...\
  Reddit·r/node

## how can they be paralleled

To run mathematical computations in parallel, you must move them off JavaScript's single main thread and distribute them across **multiple CPU cores**.

The exact implementation depends on whether your code runs in the browser or in Node.js.

***

### 1. In the Browser: Web Workers

[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web%5FWorkers%5FAPI) allow you to run scripts in background threads. They communicate with the main thread using messages, preventing the user interface from freezing during heavy math.

#### Step 1: Create the Worker File (`worker.js`)

This script listens for data, runs the computation, and sends the result back.

javascript

```
// worker.js
self.onmessage = function(e) {
  const num = e.data;
  // Example heavy math computation
  const result = num * num;
  self.postMessage(result);
};
```

Use code with caution.

#### Step 2: Manage Workers in Your Main App (`main.js`)

You can spin up multiple workers to process your ten computations simultaneously.

javascript

```
// main.js
const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const promises = inputs.map(num => {
  return new Promise((resolve) => {
    const worker = new Worker('worker.js');

    worker.postMessage(num); // Send data to worker

    worker.onmessage = function(e) {
      resolve(e.data); // Get data back
      worker.terminate(); // Clean up thread
    };
  });
});

// Await all parallel CPU threads to finish
const results = await Promise.all(promises);
console.log(results);
```

Use code with caution.

***

### 2. In Node.js: Worker Threads

Node.js uses the [worker\_threads module](https://nodejs.org/api/worker%5Fthreads.html) to achieve true multi-core parallel processing for CPU-bound tasks.

javascript

```
// server.js
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // Main thread orchestrates the work
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const runWorker = (data) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, { workerData: data });
      worker.on('message', resolve);
      worker.on('error', reject);
    });
  };

  const results = await Promise.all(inputs.map(runWorker));
  console.log('All parallel results:', results);

} else {
  // Background threads execute the math
  const num = workerData;
  const result = num * num; // Heavy math here
  parentPort.postMessage(result);
}
```

Use code with caution.

***

### Performance Warning: Thread Overhead

Spawning a new thread takes a noticeable amount of CPU time and memory.

- **Bad Use Case**: If your 10 math equations take less than **10–20 milliseconds** combined, running them sequentially on the main thread is much faster. Creating threads will actually slow it down.
- **Good Use Case**: Use parallelism if each math computation takes **50ms or longer** (e.g., image manipulation, cryptography, complex 3D physics, or processing massive data arrays).

If you are dealing with very large datasets, a **Worker Pool** (reusing a fixed number of workers equal to your CPU cores) is required instead of creating a new worker for every single item.

Would you like an example of a **Worker Pool** to handle larger loads, or are you looking to implement this inside a specific framework like **React** or **Next.js**?

- [link](https://medium.com/@peredom/speeding-up-matrix-computation-with-node-js-8e1201a164b2)\
  How to speed up Node.js matrix computing with Math.js\
  Jan 23, 2019 — In this article, you will learn how performing parallel computations can speed up the multiplication of two matrices. I recently h...\
  Medium·Dominique Péré
- [link](https://www.ebsco.com/research-starters/computer-science/parallel-processing)\
  Parallel processing | Computer Science | Research Starters\
  Parallel processing Summary: Parallel processing speeds up the run-time of computing through the use of mathematical algorithms. I...\
  \
  \
  EBSCO
- [link](https://javascript.plainenglish.io/how-i-answered-node-js-is-single-threaded-so-where-does-the-parallelism-come-from-bd4d0a7bda40)\
  How I Answered “Node.js Is Single-Threaded — So Where Does the Parallelism Come From?”\
  Dec 30, 2025 — So Where Does “Parallelism” Actually Come From? The short answer is: parallelism doesn't come from JavaScript execution at all. It...\
  \
  \
  JavaScript in Plain English

Show all

## do you have to take more cpu cores to leverage parallelism for perf. do web workers and worker threads leverage more cpu cores.

<mark><strong><span>Yes, you must have multiple CPU cores to get a true performance increase from parallelism</span></strong></mark>, and **yes, both Web Workers and Worker Threads leverage those multiple cores.**

Here is exactly how the hardware, software, and JavaScript runtime interact:

### 1. Do Web Workers and Worker Threads use multiple cores?

**Yes.** When you spin up a Web Worker (browser) or a Worker Thread (Node.js), the operating system (Windows, macOS, Linux) assigns that worker to an independent OS thread. The OS then distributes those threads across the different physical cores of your CPU.

If you spawn 4 workers on an 8-core CPU, they will run simultaneously on 4 separate physical cores.

### 2. What happens if you only have 1 CPU core?

If you run multiple Web Workers on an old or restricted machine with only 1 CPU core, **parallelism will actually decrease your performance.**

- **The Illusion of Parallelism (Concurrency):** A single-core CPU cannot do two things at once. Instead, it uses **time-slicing**. It runs Worker A for 2 milliseconds, pauses it, switches to Worker B for 2 milliseconds, and switches back.
- **The Performance Penalty:** This constant switching (called a _context switch_) takes time and resources. On a single core, running 10 math tasks sequentially is much faster than running them in 10 workers, because you avoid the overhead of thread creation and context switching.

### Summary Checklist for Performance Gains

To actually speed up your code using workers, three things must be true:

1. **Hardware:** The user's device must have multiple CPU cores (most modern phones and laptops have 4 to 8+ cores).
2. **Task Size:** The mathematical computation must be heavy enough (usually >20-50ms) to justify the time it takes to spin up a thread and send data across it.
3. **Thread Count:** You should not create more active workers than the machine has CPU cores.

To prevent overloading the CPU, you can check how many cores a user has right in JavaScript using `navigator.hardwareConcurrency`.

Would you like to see how to use `navigator.hardwareConcurrency` to automatically limit your workers to the **exact number of CPU cores** available?

- [link](https://blog.codinghorror.com/should-all-developers-have-manycore-cpus/)\
  Should All Developers Have Manycore CPUs?\
  Apr 18, 2008 — Getting back to Kevin's question: yes, if you are a software developer writing a desktop application that has something remotely p...\
  \
  \
  Coding Horror
- [link](https://medium.com/@praveenpr1998/multithreading-in-javascript-harnessing-the-power-of-web-workers-43e66d59047b)\
  Multithreading in JavaScript: Harnessing the Power of Web Workers\
  Jul 10, 2024 — How Web Workers Leverage OS Cores Web Workers in JavaScript allow you to run scripts in background threads. This is particularly u...\
  \
  \
  Medium
- [link](https://blog.openreplay.com/concurrency-vs-parallelism-in-javascript/)\
  Concurrency vs. Parallelism in JavaScript\
  Apr 22, 2024 — When a system has multiple CPU cores, Web Workers utilize them for parallel processing. Each worker operates on an individual core...\
  \
  \
  OpenReplay Blog

Show all

## what if you have some files to read, convert, and write (seems it's already fast out of box though)

**Yes, file operations are usually fast out-of-the-box because Node.js delegates the "waiting" part to the operating system.**

However, if you are processing a **large volume of files**, your performance bottleneck shifts from the disk to your CPU. Moving the _conversion_ step to multiple CPU cores can yield massive speedups.

Here is how file processing works under the hood, and how to know if you actually need parallelism.

### The Three Phases of File Processing

File tasks are split into two completely different types of work: **I/O-Bound** (waiting for the disk) and **CPU-Bound** (processing the data).

```
[ Read File ]  ➡️   [ Convert / Process ]  ➡️  [ Write File ]
  (I/O-Bound)             (CPU-Bound)             (I/O-Bound)
```

1. **Read & Write (I/O-Bound):** Node.js executes these asynchronously using an internal C++ thread pool (libuv). When you use `fs.promises.readFile()`, Node.js tells the OS to grab the data and frees up the JavaScript main thread. JavaScript does zero work while the disk is spinning.
2. **Convert (CPU-Bound):** This is where JavaScript actually works. If you are parsing massive CSVs, resizing images, or compiling code, your single JavaScript CPU thread is pinned at 100%.

### When `Promise.all` is Enough

If your conversion logic is incredibly fast (e.g., just changing a string uppercase or tweaking a small JSON field), **`Promise.all` is all you need.**

It tells the OS to read all files concurrently. As the OS finishes reading each file, JavaScript quickly processes the small conversion sequentially and shoots it back to the disk.

javascript

```
// Perfect if conversion takes < 1-2 milliseconds per file
const processFile = async (path) => {
  const data = await fs.readFile(path, 'utf8');
  const converted = data.toUpperCase(); // ⚡ Very fast conversion
  await fs.writeFile(path.replace('.txt', '-upper.txt'), converted);
};

await Promise.all(filePaths.map(processFile));
```

Use code with caution.

### When You MUST Use Worker Threads

If your conversion step is heavy, a single JavaScript thread will choke. `Promise.all` will read all the files into memory, but then the main thread will get stuck processing them one by one, freezing your app.

You should upgrade to **Worker Threads** if your conversion involves:

- Image resizing or video transcoding.
- Heavy cryptography, hashing, or zipping/compression.
- Parsing millions of rows of data (CSV, massive JSON arrays).

### The Ideal Pattern: Hybrid Parallelism

For heavy file pipelines, the fastest architecture is to use **Worker Threads** to handle the heavy conversion, while keeping the main thread responsible for the fast I/O operations.

```
Main Thread: [Read File] ➡️ Pass Buffer ➡️ Worker Thread: [Heavy Conversion] ➡️ Pass Buffer Back ➡️ Main Thread: [Write File]
```

To give you the most accurate advice, **what kind of files** are you converting, **how many** of them are there, and **what does the conversion step actually do** to the data?

- [link](https://www.iomovo.io/blog/how-to-easily-convert-your-files-with-file-format-conversion-using-dam)\
  How To Easily Convert Your Files With File Format Conversion Using DAM?\
  Jun 21, 2023 — Utilize parallel processing: If your computer has multiple processing cores, you can take advantage of parallel processing to spee...\
  \
  ioMoVo
- [link](https://news.ycombinator.com/item?id=17205461)\
  Wait what? I'm using "I/O bound" in the sense of CPU operations waiting on reads...\
  Wait what? I'm using "I/O bound" in the sense of CPU operations waiting on reads/writes to e.g. a disk. If you consider an operati...\
  \
  Hacker News
- [link](https://www.cliffsnotes.com/cliffs-questions/5034733)\
  \[Solved] A process is said to be I/O-bound if it requires a lot of I/O operations. For example, perhaps the process is...\
  Oct 13, 2023 — A process is said to be I/O-bound if it requires a lot of I/O operations. For example, perhaps the process is... A process is said...\
  \
  CliffsNotes

Show all

## i mean it seems to be already fast wo promise.all, whether await or sync. how much will promise.all optimize

If your file operations already feel instantaneous without `Promise.all` or asynchronous code, it means **your file sizes are very small, and you are processing very few of them.**

At a small scale (e.g., 5 or 10 small text or JSON files), the operating system caches the data in your RAM, making both synchronous and asynchronous code execute in just a couple of milliseconds. At this level, **`Promise.all` will provide zero noticeable optimization.**

However, as your workload scales up to dozens, hundreds, or megabytes of files, the performance gap changes drastically.

***

### The Three Approaches Compared

Here is exactly how much performance you gain or lose depending on how you write the code:

#### 1. Synchronous (`fs.readFileSync`) — ❌ Slowest at Scale

javascript

```
for (const file of files) {
  const data = fs.readFileSync(file); // Blocks everything
  const result = convert(data);
  fs.writeFileSync(file, result);
}
```

Use code with caution.

- **How it works:** JavaScript stops dead in its tracks. It waits for the physical hard drive to read, then converts, then waits for the hard drive to write.
- **The Problem:** Your CPU sits completely idle doing nothing while waiting for the disk hardware. If you are running a web server, no other users can connect while this loop runs.

#### 2. Sequential Async (`await` in a loop) — ⚠️ Safer, But Same Speed

javascript

```
for (const file of files) {
  const data = await fs.readFile(file); // Frees the thread, but still pauses the loop
  const result = convert(data);
  await fs.writeFile(file, result);
}
```

Use code with caution.

- **How it works:** This fixes the "freezing" problem. While waiting for the disk, JavaScript can handle other server requests. However, _this specific file loop_ still runs one by one.
- **The Optimization:** **0% faster** than sync code for this specific task, but it keeps your application responsive.

#### 3. Concurrent Async (`Promise.all`) — 🚀 Fastest for I/O

javascript

```
await Promise.all(files.map(async (file) => {
  const data = await fs.readFile(file);
  const result = convert(data);
  await fs.writeFile(file, result);
}));
```

Use code with caution.

- **How it works:** It fires off all read requests to the operating system at the exact same time. The hard drive reads multiple files in parallel (especially efficient on modern NVMe SSDs). As soon as any file finishes reading, JavaScript converts it and immediately sends it back to be written.

***

### The Math: How Much Will It Optimize?

Let's look at a realistic benchmark where you have **50 files**, and your hard drive takes **10 milliseconds** to read/write each one.

- **With Sync or `await` in a loop:** 50 files × 10ms = **500ms total execution time.**
- **With `Promise.all`:** All 50 requests are sent at once. The total time drops to roughly the time of the slowest single disk operation, plus a tiny bit of CPU overhead. Total time: **~15ms to 30ms.**

### Summary: When to bother rewriting it?

- **Keep it Sync / Simple Loop:** If you are writing a quick command-line script that processes 10 local configuration files once a day. Optimization here doesn't matter.
- **Switch to `Promise.all`:** If you are building a web server, an API endpoint, or an application that processes user-uploaded files, large datasets, or logs.

If you want to see exactly where your code spends its time, I can show you how to wrap your loop in **`console.time()` statements** to measure the exact millisecond difference!

- [link](https://medium.com/@sonal.sadafal/lambda-async-payloads-jump-to-1-mb-bigger-events-fewer-moving-parts-d21e362791e5)\
  📦Lambda Async Payloads Jump to 1 MB: Bigger Events, Fewer Moving Parts\
  Nov 11, 2025 — 📦Lambda Async Payloads Jump to 1 MB: Bigger Events, Fewer Moving Parts A deep-dive playbook — architecture internals, upstream/do...\
  \
  \
  Medium
- [link](https://medium.com/@arunangshudas/10-common-mistakes-with-synchronous-code-in-node-js-8b55929dd3e3)\
  10 Common Mistakes with Synchronous Code in Node.js\
  Mar 10, 2025 — Mistake: Using synchronous functions like fs. readFileSync() or crypto. randomBytesSync() inside an API handler. This blocks the e...\
  \
  \
  Medium
- [link](https://www.reddit.com/r/csharp/comments/opc1tt/will%5Fusing%5Fasync%5Fmethods%5Ffor%5Fretrieving%5Fvia%5Fef%5Fbe/)\
  Will using async methods for retrieving via EF be faster since they will not block or will it make the application slower since now there are multiple db calls? : r/csharp\
  Jul 22, 2021 — Async is not about speed so no. Actually it'll always be a bit slower than sync but close to negligible. Using of async is not to ...\
  \
  Reddit

Show all

# shell globbing syntax

**Shell globbing syntax** <mark>consists of wildcard patterns used by Unix-like shells to perform filename expansion</mark>. The shell searches the file system, matches the pattern against existing paths, and replaces the pattern with a space-separated list of matches before executing a command. [link](https://tldp.org/LDP/abs/html/globbingref.html)

### Standard Globbing (POSIX)

These basic wildcards are universally supported across almost all Unix shells (Bash, Zsh, Sh, Ksh). [link](https://en.wikipedia.org/wiki/Glob%5F%28programming%29)

| Pattern              | Description                                                                              | Example          | Matches                               |
| -------------------- | ---------------------------------------------------------------------------------------- | ---------------- | ------------------------------------- |
| `*`                  | Matches **zero or more** characters. Does not match a leading dot (hidden files) or `/`. | `*.txt`          | `notes.txt`, `file.txt`, `.txt`       |
| `?`                  | Matches **exactly one** character.                                                       | `image?.png`     | `image1.png`, `imageA.png`            |
| `[...]`              | Matches **any single character** contained within the brackets.                          | `file[abc].log`  | `filea.log`, `fileb.log`, `filec.log` |
| `[a-z]`              | Matches **a range** of single characters specified inside the brackets.                  | `doc[0-9].pdf`   | `doc0.pdf`, `doc5.pdf`                |
| `[!...]` or `[^...]` | Matches **any single character NOT** inside the brackets.                                | `file[!0-9].txt` | `filea.txt` (but not `file1.txt`)     |

### Common Extensions

Many modern shells support advanced operations that extend past standard POSIX globbing. [link](https://en.wikipedia.org/wiki/Glob%5F%28programming%29)

#### Brace Expansion (Bash, Zsh)

Technically processed before globbing, brace expansion generates literal strings from a comma-separated list or a sequence. [link](https://en.wikipedia.org/wiki/Glob%5F%28programming%29)

- `file.{jpg,png}` expands to: `file.jpg file.png`
- `photo_{1..3}.jpg` expands to: `photo_1.jpg photo_2.jpg photo_3.jpg`

#### Recursive Globbing / Globstar (Bash, Zsh)

Matches directories recursively across all sub-levels. In Bash, this must first be enabled via `shopt -s globstar`. [link](https://docs.oracle.com/en-us/iaas/Content/devops/using/glob-patterns.htm)

- `**/index.js` matches `index.js`, `src/index.js`, and `src/components/index.js`.

### Extended Globbing (Bash `extglob`)

In Bash, you can enable regular-expression-like features using the command `shopt -s extglob`. Patterns inside the list are separated by a pipe character `|`. [link](https://mywiki.wooledge.org/glob)

- `?(pattern-list)`: Matches **zero or one** occurrence of the patterns. [link](https://mywiki.wooledge.org/glob)
- `*(pattern-list)`: Matches **zero or more** occurrences of the patterns. [link](https://mywiki.wooledge.org/glob)
- `+(pattern-list)`: Matches **one or more** occurrences of the patterns. [link](https://mywiki.wooledge.org/glob)
- `@(pattern-list)`: Matches **exactly one** of the patterns. [link](https://mywiki.wooledge.org/glob)
- `!(pattern-list)`: Matches **anything except** the specified patterns.
  - _Example:_ `rm !(*.mp3|*.wav)` deletes everything in a directory except audio files. [link](https://mywiki.wooledge.org/glob)

### Critical Behavioral Rules

- **Hidden Files:** By default, `*` and `?` will ignore files starting with a dot (`.bashrc`). In Bash, you can change this behavior with `shopt -s dotglob`. [link](https://tldp.org/LDP/abs/html/globbingref.html)
- **Unmatched Patterns:** If a glob pattern fails to find a match, the shell passes the literal pattern string directly to the command. To make unmatched patterns disappear entirely instead, turn on `shopt -s nullglob`. [link](https://linuxize.com/post/linux-wildcards-and-globbing/)
- **Globbing vs Regular Expressions:** Regular expressions (used in `grep` or `sed`) match patterns within text streams, whereas globs specifically expand physical system pathnames. For instance, `*` means "any character string" in globbing, but "zero or more of the previous token" in a regular expression. [link](https://linuxize.com/post/linux-wildcards-and-globbing/)

If you are working on a specific task, let me know:

- Which **shell** you are using (e.g., Bash, Zsh)
- The **command** you want to run
- A description of the **files you want to match**

I can write out the exact glob pattern tailored to your environment.

- [link](https://en.wikipedia.org/wiki/Glob%5F%28programming%29)\
  glob (programming) - Wikipedia\
  Globbing is provided on filenames at the command line and in shell scripts. The POSIX-mandated case statement in shells provides p...\
  Wikipedia
- [link](https://tldp.org/LDP/abs/html/globbingref.html)

18.2. Globbing\
Bash does carry out filename expansion \[1] -- a process known as globbing -- but this does not use the standard RE set. Instead, g...\
The Linux Documentation Project

- [link](https://www.youtube.com/watch?v=-yLsYhsh9Cw)\
  What The GLOB?! Filename Expansion in Linux 📦\
  Jul 19, 2023 — the word glob is short for global. and it actually comes from an old program with the same name that was used in the earliest vers...\
  8:57\
  YouTube·NIX tricks

Show all

## compare shell wildcard behavior and rg --files -g

The primary difference between shell wildcards and `rg --files -g` is **how the pattern is evaluated**. Shell wildcards are expanded by the shell _before_ a command runs, whereas `rg --files -g` passes the literal pattern directly to `ripgrep`, which evaluates it internally using Git-style `.gitignore` rules.

### Key Conceptual Differences

| Feature                | Shell Wildcards (Globbing)             | `rg --files -g` (ripgrep)                 |
| ---------------------- | -------------------------------------- | ----------------------------------------- |
| **Expansion Actor**    | The Shell (Bash/Zsh) expands paths.    | `ripgrep` scans paths internally.         |
| **Failure Behavior**   | Passes literal text if no match found. | Returns an empty result.                  |
| **Hidden Files**       | Skipped by default.                    | Skipped by default (override with `-H`).  |
| **Ignored Files**      | Reads no ignore files.                 | Respects `.gitignore` and `.ignore`.      |
| **Directory Boundary** | `*` stops at `/` (unless `**/` used).  | `*` can cross `/` depending on placement. |

***

### Syntax and Behavioral Comparison

#### 1. Recursive Matching (`**`)

- **Shell Wildcards:** Requires explicit configuration in Bash (`shopt -s globstar`). Zsh supports it natively. Writing `ls **/*.js` scans all subdirectories.
- **ripgrep:** Recursive by default. Running `rg --files -g "*.js"` searches all subdirectories automatically. You do not need to prepend `**/`.

#### 2. Literal Matching vs. Path Anchor

- **Shell Wildcards:** Matches against the exact path depth specified. `*.js` only matches JavaScript files in the _current_ directory.
- **ripgrep:** Patterns without a leading slash match anywhere in the directory tree. `rg --files -g "*.js"` matches `./index.js` and `./src/app/index.js`. To restrict it to the current directory, anchor it with a leading slash: `rg --files -g "/*.js"`.

#### 3. Handling Unmatched Patterns

- **Shell Wildcards:** If you type `ls *.txt` and no files match, the shell literally passes `*.txt` to `ls`, causing a `No such file or directory` error.
- **ripgrep:** If you run `rg --files -g "*.txt"` and nothing matches, `ripgrep` handles the condition gracefully and exits silently with no output.

#### 4. Quote Requirements

- **Shell Wildcards:** Must _not_ be quoted if you want the shell to expand them (`ls *.js`).
- **ripgrep:** Must _always_ be quoted (`rg --files -g "*.js"`). If left unquoted, the shell expands the pattern before `ripgrep` ever sees it, breaking the intended search scope.

***

### Examples in Action

- **Match files in a specific subdirectory recursively:**
  - _Shell (Zsh):_ `ls src/**/*.css`
  - _ripgrep:_ `rg --files -g "src/**/*.css"`
- **Match only in the top-level directory:**
  - _Shell:_ `ls *.md`
  - _ripgrep:_ `rg --files -g "/*.md"`
- **Exclude a pattern:**
  - _Shell (Bash extglob):_ `ls !(*.log)`
  - _ripgrep:_ `rg --files -g "!*.log"`

If you want to optimize your search command, tell me:

- The **exact file types** or names you want to find
- If you need to **include or exclude** hidden and `.gitignore` files
- The **action** you plan to take on the found files

I can provide the exact command structure for both tools.

- [link](https://bbs.archlinux.org/viewtopic.php?id=80479)\
  \[Bug?] wildcards / Pacman & Package Upgrade Issues / Arch ...\
  Sep 18, 2009 — This is normal and unavoidable behavior. Your shell expands wildcards BEFORE the command is run, meaning that the command has no w...\
  Arch Linux Forums
- [link](https://labex.io/tutorials/shell-how-to-protect-tar-wildcards-from-shell-expansion-392989)\
  How to Protect Tar Wildcards from Shell Expansion\
  Shell Expansion Basics Shell expansion is the process by which the shell interprets and expands certain patterns, such as wildcard...\
  \
  \
  LabEx
- [link](https://askubuntu.com/questions/731319/problem-with-using-wildcards-when-i-do-cp-command-in-terminal)\
  Problem with using wildcards when I do CP command in Terminal\
  Feb 8, 2016 — 2 Answers 2 cp does not support any wildcards by itself. Expansion of wildcards and patterns is done by the shell, which is bash b...\
  \
  \
  Ask Ubuntu

Show all

# (d) shell grep syntax

The basic syntax for the `grep` command in Linux and Unix shells is **`grep [options] "pattern" [file...]`**. The command searches inside specified files (or standard input) and prints every line that matches your defined pattern. [link](https://man7.org/linux/man-pages/man1/grep.1.html)

### Core Syntax Breakdown

bash

```
grep [OPTIONS] "PATTERN" [FILE...]
```

Use code with caution.

- **`grep`**: The command itself (Global Regular Expression Print).
- **`[OPTIONS]`**: Optional flags that modify how `grep` searches, matches text, or formats the output.
- **`"PATTERN"`**: The string or regular expression (regex) you are searching for. Enclosing it in quotes prevents the shell from misinterpreting special characters.
- **`[FILE...]`**: The file or files you want to search through. If left blank, `grep` reads data passed from standard input (pipes). [link](https://man7.org/linux/man-pages/man1/grep.1.html)

***

### Common Options & Flags

You can customize the search behavior using these heavily used flags:

- **`-i`** : Ignores case sensitivity (e.g., matching both "apple" and "Apple").
- **`-r`** or **`-R`** : Recursively searches all files inside a directory and its subdirectories.
- **`-v`** : Inverts the match to display only the lines that **do not** contain the pattern.
- **`-n`** : Displays the line number in the file alongside the matching text.
- **`-w`** : Matches the exact, whole word only (e.g., searching "cat" won't match "cattle").
- **`-c`** : Suppresses normal output and displays a count of matching lines instead.
- **`-E`** : Treats the pattern as an Extended Regular Expression (ERE), allowing symbols like `|` or `+` without escaping. [link](https://www.youtube.com/watch?v=Tc%5FjntovCM0\&t=10)

***

### Practical Examples

#### 1. Basic Search in a File

Search for the word "error" inside a specific log file:

bash

```
grep "error" server.log
```

Use code with caution.

#### 2. Search Multiple Files

Search for a specific IP address in all log files using a wildcard (`*`):

bash

```
grep "192.168.1.1" *.log
```

Use code with caution.

#### 3. Case-Insensitive Search with Line Numbers

Find the word "failed", regardless of uppercase or lowercase, and see exactly what line it is on:

bash

```
grep -in "failed" auth.log
```

Use code with caution.

#### 4. Recursive Directory Search

Look for the term "TODO" inside every file across a project folder:

bash

```
grep -r "TODO" /path/to/project/
```

Use code with caution.

#### 5. Piping Input from Another Command

Filter the output of a command to isolate specific active processes:

bash

```
ps aux | grep "nginx"
```

Use code with caution.

#### 6. Using Extended Regex (ERE)

Search for lines that contain either "critical" or "fatal" using the `-E` flag:

bash

```
grep -E "critical|fatal" system.log
```

Use code with caution.

Would you like to explore **regular expression patterns** (like anchors, wildcards, and ranges), or see how to use `grep` inside a **bash script**? [link](https://www.digitalocean.com/community/tutorials/grep-command-in-linux-unix)

- [link](https://www.youtube.com/watch?v=Tc%5FjntovCM0\&t=10)\
  Linux Crash Course - The grep Command\
  Mar 29, 2022 — hello again everyone and welcome back to my Linux Essentials. series in today's video we're going to go over the GP command. now t...\
  14m\
  YouTube·Learn Linux TV
- [link](https://man7.org/linux/man-pages/man1/grep.1.html)\
  grep(1) - Linux manual page - man7.org\
  May 30, 2026 — NAME top. grep - print lines that match patterns. SYNOPSIS top. grep \[OPTION]... PATTERNS \[FILE]... grep \[OPTION]... -e PATTERNS .\
  man7.org
- [link](https://docs.rackspace.com/docs/use-the-linux-grep-command)\
  Use the Linux grep Command - Rackspace\
  grep syntax \* -i: Prints lines with matching criteria while ignores casing (Upper/Lowecase). \* -l: Prints filenames only. \* -n: Pr...\
  Rackspace

Show all

# (?) use snake case. write a ts fn called inside a nodejs cli. parse\_stdin. no params. return an array. no stdin then empty. expect an stdin piped from fdfind or ripgrep --files -g, that is a list of files separated by linebreaks.

typescript

```
import * as fs from 'fs';

/**
 * Parses line-separated file paths from standard input.
 * Designed for piped output from tools like fdfind or ripgrep.
 */
export function parse_stdin(): string[] {
  try {
    // Read file descriptor 0 (stdin) synchronously
    const raw_input = fs.readFileSync(0, 'utf-8');

    if (!raw_input.trim()) {
      return [];
    }

    // Split by linebreaks and remove empty lines
    return raw_input
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line.length > 0);

  } catch (error) {
    // Return empty array if stdin is missing or unreadable
    return [];
  }
}
```

Use code with caution.

### Key Technical Details

- **File Descriptor 0**: Passing `0` to `fs.readFileSync` forces Node.js to read directly from standard input.
- **Synchronous Blocking**: Using the synchronous method ensures the CLI blocks execution until the piped stream from `fdfind` or `ripgrep` finishes sending data.
- **Cross-Platform Line Breaks**: The regular expression `/\r?\n/` safely handles both Unix (`\n`) and Windows (`\r\n`) line endings.
- **Error Isolation**: The `try...catch` block ensures that if the script is run without any piped input (which causes file descriptor 0 to throw an error on some systems), it gracefully returns an empty array.

To help fine-tune this for your CLI tool, let me know:

- Do you need to **filter out specific directories** (like `node_modules`)?
- Should the function **convert relative paths** to absolute paths?
- Do you want to **verify if the files exist** on disk before returning them?

## fix. expected: return empty array immediately if nothing piped.

typescript

```
import * as fs from 'fs';

/**
 * Parses line-separated file paths from standard input.
 * Returns an empty array immediately if no data is piped.
 */
export function parse_stdin(): string[] {
  try {
    // Check if the standard input file descriptor is a TTY (interactive terminal).
    // If it is a TTY, it means no data was piped into the command.
    if (process.stdin.isTTY) {
      return [];
    }

    // Read all available data from stdin (file descriptor 0) synchronously
    const raw_input = fs.readFileSync(0, 'utf-8');

    if (!raw_input.trim()) {
      return [];
    }

    // Split by linebreaks and filter out empty items
    return raw_input
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line.length > 0);

  } catch (error) {
    return [];
  }
}
```

Use code with caution.

### Why This Fix Works

- **`process.stdin.isTTY`**: This boolean flag is `true` when the Node.js process is run directly in a terminal. It evaluates to `false` when data is actively piped into it (e.g., `fdfind | node cli.js`).
- **Immediate Exit**: Checking this property first ensures the function exits instantly without waiting for input or blocking the terminal when nothing is piped.

Would you like to add features to this CLI function? Let me know if you need to:

- **Limit the maximum** number of paths parsed

- **Validate that the paths** point to actual files on disk

- **Handle null-terminated output** (`-0` flag from `fdfind`) for safer path handling

# constraints of packagejson scripts

While `package.json` scripts are highly flexible for task automation, they are bound by several strict <mark><strong>structural, behavioral, and cross-platform constraints</strong></mark>. [link](https://www.youtube.com/watch?v=Xgh2yqC9chc)

### 1. JSON Structural Constraints

- **Strict Syntax:** Because the file is pure JSON, scripts must be structured exclusively as string-based key-value pairs.
- **No Comments:** You cannot add inline code comments to document complex script behavior.
- **No Variables:** You cannot define or use native variables inside the JSON structure.
- **Escape Characters:** Any internal double quotes used for CLI flags must be explicitly escaped with a backslash `\"`. [link](https://stackoverflow.com/questions/49495950/overriding-package-json-scripts-npm)

### 2. Cross-Platform Compatibility

- **OS-Specific Shells:** By default, package managers pass commands directly to the system's default shell (typically `sh`/`bash` on macOS/Linux and `cmd.exe`/`PowerShell` on Windows).
- **Syntax Breaks:** Standard POSIX bash shortcuts like `&&`, `||`, `*`, or chaining variables with `;` will cause immediate errors on Windows command lines. [link](https://stackoverflow.com/questions/45553455/package-json-script-conditional)
- **Path Separation:** Hardcoded Unix forward slashes (`/`) in file paths frequently break when executed on Windows machines. [link](https://www.icertglobal.com/community/add-custom-npm-scripts-to-package-json-tutorial)

### 3. Argument Passing Limitations

- **Appending Constraints:** When invoking `npm run <script> -- --flag`, arguments can only be naturally appended to the very end of the string.
- **Middle Insertion:** You cannot natively inject a CLI argument into the middle of a script string without wrapping the logic in a verbose Bash/Node function or script file. [link](https://stackoverflow.com/questions/48462042/run-script-with-variables-from-package-json)

### 4. Lifecycle and Execution Behavior

- **Strict Hook Naming:** Automatic pre- and post-hooks only function if they are explicitly prefixed with `pre` or `post` exactly matching the target script name (e.g., `prebuild` runs right before `build`). [link](https://docs.npmjs.com/cli/v7/using-npm/scripts/)
- **Sequential Pitfalls:** Chaining multiple scripts with `&&` causes the execution chain to stop immediately if any single task returns a non-zero exit code. [link](https://stackoverflow.com/questions/45553455/package-json-script-conditional)
- **Environment Variables:** Accessing other `package.json` object fields via `process.env` variables (like `npm_package_version`) was deprecation-restricted in npm 7+. Modern versions require scripts to read the local path directly via `npm_package_json`. [link](https://docs.npmjs.com/cli/v11/using-npm/scripts/)

If you are dealing with a complex pipeline, let me know:

- What **specific script or command** is giving you trouble?
- Are you aiming for **cross-platform** (Mac & Windows) compatibility?
- Are you trying to **pass dynamic arguments** to your script?

I can provide the exact syntax to bypass these constraints safely.

- [link](https://me.micahrl.com/blog/package-json-scripts-default-arguments/)\
  package.json scripts with default arguments - Micah R Ledbetter\
  Developers in the NPM ecosystem have shoehorned the primitive scripts section of package.json into an unloved and unlovable build ...\
  me.micahrl.com
- [link](https://stackoverflow.com/questions/45553455/package-json-script-conditional)\
  package.json script conditional - Stack Overflow\
  Aug 7, 2017 — \* 1 Answer. Sorted by: In condition.js you need to exit() the Node process with a non-zero exit code. Then in your package.json fi...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/48462042/run-script-with-variables-from-package-json)\
  Run script with variables from package.json? - Stack Overflow\
  Jan 26, 2018 — \* 2 Answers. Sorted by: Make a new file to hold your script. scriptcommand.sh. #!/usr/bin/env bash path/to/file/1 --flags $1 --fla...\
  Stack Overflow

Show all

## constraints on the command, even if you assume ubuntu is the only os in the world

Even if you isolate your environment strictly to an **Ubuntu/Bash** ecosystem, `package.json` scripts still face severe constraints. These limitations stem from the way JSON is parsed, how package managers (like `npm`, `yarn`, or `pnpm`) spawn shell processes, and how the underlying Linux OS handles processes.

### 1. JSON-Enforced Syntax Constraints

- **Mandatory Backslash Escaping:** You cannot use standard single quotes (`'`) for JSON keys or values. If a command or a tool flag requires double quotes (like a JSON payload in a `curl` string), you must escape every quote: `\"`.
- **Single-Line Restriction:** Bash scripts are typically written on multiple lines for readability. In `package.json`, the entire command must be a single, unbroken string, forcing you to chain everything with `&&`, `;`, or `\n`.
- **No Inline Code Comments:** You cannot use `#` to comment out parts of a long script line. A `#` inside the string will comment out the remainder of the _entire_ execution string, instantly breaking the pipeline.

### 2. Execution Environment & Shell Isolation

- **Subshell Spawning:** Every script runs in its own isolated subshell instance.
- **Transient Environment Variables:** Setting a variable in one script (e.g., `"test": "export FOO=bar"`) will vanish the moment that script finishes. The next script cannot read it.
- **No Parent Shell Modification:** A script cannot change the directory (`cd`) or modify environment variables of your active terminal window.
- **Alias Blindness:** The subshell does not inherit user aliases or custom functions defined in your local Ubuntu `~/.bashrc` or `~/.bash_profile`.

### 3. Argument Ingestion & Positional Limits

- **Strict End-Appending:** When running `npm run build -- --flag`, the package manager blindly pastes `--flag` at the very end of your string.
- **No Middle-Insertion:** You cannot natively inject a runtime CLI argument into the middle of a command sequence.
- **No Direct Positional Variables:** You cannot use `$1`, `$2`, or `$@` inside a `package.json` script to capture arguments like you do in a standard Ubuntu `.sh` file.

### 4. Process and Error Handling Constraints

- **Synchronous Monopolization:** Running a long-running foreground process (like a server watcher or dev server) blocks the terminal completely. You cannot safely background it using a trailing `&` without creating orphan background processes that zombie out when you hit `Ctrl+C`.
- **Fragile Error Chaining:** Chaining commands with `&&` terminates the whole sequence immediately if any single tool returns a non-zero exit code, which can trap cleanup tasks (like deleting temporary files).
- **Buffer and String Size Limits:** While Ubuntu allows massive command strings, Node.js process spawns can choke on excessively long inlined scripts, hitting max buffer size limits or throwing string tokenization errors during the JSON parsing phase.

If you are running into a specific issue on Ubuntu, let me know:

- What **exact Linux command or tool** is failing inside your script?
- Are you struggling to **pass arguments dynamically**?
- Do you need to run **multiple parallel background tasks**?

I can show you how to convert it to a native Node or Bash file to bypass these limits.

## what can run in a terminal but not as a package script command unless you wrap into a sh file

<mark><span>Any command that relies on<span> </span></span><strong>advanced Bash features, interactive user input, complex control structures, or alias lookups</strong></mark> will run fine in your terminal but will instantly break or fail to execute inside a `package.json` script unless wrapped in a `.sh` file.

Here is the exact breakdown of what fails and why.

### 1. Interactive Inputs (Prompts)

- **`read` command:** Commands like `read -p "Enter name: " name` immediately hang or fail. The subshell spawned by the package manager often detaches from the active standard input (`stdin`), making interactive terminal prompts impossible to type into.

### 2. Multi-Line Control Structures

- **`if/else` statements:** Writing a full conditional block breaks JSON formatting.
  - _Fails:_ `"test": "if [ -d "dist" ]; then rm -rf dist; fi"` (Fails due to quotes and lack of terminal formatting).
- **`for/while` loops:** Looping through files or lists on a single string line requires intense semi-colon escaping that easily errors out.

### 3. Native Bash Functions and Aliases

- **Local Functions:** If you have a custom automation function defined in your Ubuntu `~/.bashrc`, a package script cannot see or call it.
- **Custom Aliases:** Shortcuts (like `ll` or custom deployment shortcuts) are stripped out because the spawned subshell ignores non-interactive shell configurations.

### 4. Direct Positional Arguments

- **Argument Placement (`$1`, `$2`):** In a terminal or `.sh` script, you can type `myscript.sh image.png` and catch the file name via `$1`. In `package.json`, `$1` is completely ignored or evaluated as an empty environment variable. You cannot capture user inputs mid-command.

### 5. Complex Piping and Process Redirection

- **Process Substitution:** Advanced syntax like `diff <(cmd1) <(cmd2)` uses specialized file descriptors that often conflict with how Node.js spawns Child Processes.
- **Backgrounding with cleanup (`&`):** Running `node server.js &` works in a terminal, but running it in a package script leaves the process running as a "zombie" in Ubuntu even after you close the npm script with `Ctrl+C`.

***

### The Cleanest Way to Bypass This

Instead of dealing with unreadable, escaped single-line strings, create a native script file and reference it inside your `package.json`:

**1. Create your script (`scripts/deploy.sh`):**

bash

```
#!/bin/bash
read -p "Enter environment: " ENV
if [ "$ENV" == "prod" ]; then
  echo "Deploying to production..."
else
  echo "Aborting."
fi
```

Use code with caution.

**2. Reference it in your `package.json`:**

json

```
"scripts": {
  "deploy": "bash scripts/deploy.sh"
}
```

Use code with caution.

If you are trying to write a **specific loop, conditional, or prompt** right now, let me know:

- What **logic** are you trying to execute?
- Do you prefer to fix it with a **`.sh` bash script** or a **cross-platform Node.js script**?

I can write out the exact script file you need.

- [link](https://olanipekunayo2012.medium.com/shell-script-functions-and-arguments-52957f960844)\
  Shell Script Functions and Arguments | by Ayorinde Olanipekun, PhD | Medium\
  Apr 11, 2023 — Here is an example of a simple function in shell scripting: For example, let's say you have a script called 'myscript.sh' and you ...\
  \
  \
  Medium
- [link](https://superuser.com/questions/591946/shell-script-that-reads-a-file-and-executes-a-command)\
  Shell script that reads a file and executes a command\
  May 6, 2013 — 3 Answers 3 I am assuming $1 is the filename right? or a variable declared like $1=/home/file. txt ?? Yes, $1 is the first argumen...\
  \
  Super User
- [link](https://askubuntu.com/questions/245128/need-to-run-a-sh-as-root-on-boot-or-login)\
  Need to run a .sh as root on boot or login\
  Jan 19, 2013 — To get a . sh script (or any other script) to run at boot you want to; Put your script in a easy accessible place (e.g. your deskt...\
  \
  \
  Ask Ubuntu



# use snake case. write a ts fn. is\_match. params: obj, arr. return true if each value in the obj is a literal and the set of all keys in the obj is exactly arr.

typescript

```
function is_match(obj: Record<string, any>, arr: string[]): boolean {
    const keys = Object.keys(obj);

    if (keys.length !== arr.length) {
        return false;
    }

    const arr_set = new Set(arr);

    for (const key of keys) {
        if (!arr_set.has(key)) {
            return false;
        }

        const val = obj[key];
        if (typeof val === 'object' && val !== null) {
            return false;
        }
    }

    return true;
}
```

Use code with caution.

### Key Logic

- **Size check**: Returns `false` immediately if key counts differ.
- **Set matching**: Ensures the exact set of keys matches `arr`.
- **Literal check**: Filters out objects, arrays, and functions using `typeof`.

Would you like to extend this to **support specific primitive types** or add **strict null checking**?

# (?) can i write for const foo of foo in js

No. You cannot write `for (const foo of foo)` because it will throw a **ReferenceError**.

### Why It Fails

JavaScript evaluates the right-hand side of `of` first. At that exact moment, the variable `foo` is already blocked by the `const` declaration on the left, but it has not been initialized yet. This triggers the Temporal Dead Zone (TDZ).

### The Correct Way

You must use two different names. One name represents the collection, and the other represents the current item.

javascript

```
const items = ['apple', 'banana', 'cherry'];

for (const item of items) {
  console.log(item);
}
```

Use code with caution.

### Key Rules

- Use **plural** nouns for arrays (e.g., `fruits`, `users`).
- Use **singular** nouns for the loop variable (e.g., `fruit`, `user`).

If you want to explore more loop types, I can break down the differences between **`for...of`** and **`for...in`** or show you how to get the **index** inside a `for...of` loop. Which would you prefer?

- [link](https://www.qsstechnosoft.com/blog/web-app-development-147/understanding-es-2015-es6-scope-block-scope-let-and-const-161)\
  Understanding the Scope of ES-2015/ES - QSS\
  Nov 4, 2019 — The Temporal Dead zone:- Remember, because of hoisting, the code looks like this: var x = undefined; That's why Reference Error is...\
  \
  \
  QSS Technosoft
- [link](https://medium.com/geekculture/for-in-vs-for-of-in-javascript-8563bd3e0672)\
  for…in vs for…of in JavaScript. For quite a while, I have been… | by Megan Lo | Geek Culture\
  Aug 24, 2021 — For quite a while, I have been struggling to fully understand the differences between for…in and for…of . If you found this via Go...\
  \
  \
  Medium

# how to exclude any content under folders named legacy on shell globbing

To exclude folders named `legacy` during shell globbing, you need to use advanced globbing features. The exact syntax depends on the shell you are using.

### Bash (version 4.0+)

You must enable `globstar` for recursive matching and `extglob` for extended pattern matching.

bash

```
shopt -s globstar extglob
ls **/!(legacy)/*
```

Use code with caution.

- `shopt -s`: Enables specific shell options.
- `**/`: Matches all subdirectories recursively.
- `!(legacy)`: Excludes any directory exactly named "legacy".

### Zsh

Zsh supports advanced globbing natively without changing shell options.

zsh

```
ls **/*~*/legacy/*
```

Use code with caution.

- `~`: Acts as the exclusion operator in Zsh.
- `*/legacy/*`: Filters out any path containing the legacy folder.

### Alternative using `find`

If shell globbing becomes too complex, the `find` command is more robust for excluding directories.

bash

```
find . -type d -name legacy -prune -o -type f -print
```

Use code with caution.

- `-prune`: Stops the command from searching inside the `legacy` folders.
- `-o`: Acts as an "OR" operator to process non-legacy files.

To help narrow this down, please tell me:

- Which **shell** you are using (Bash, Zsh, or Fish)?
- What **command** (like `ls`, `cp`, or `grep`) you are running with the glob?

I can then provide the exact, copy-pasteable command for your setup.

- [link](https://www.linkedin.com/learning/bash-patterns-and-regular-expressions/shell-globbing-options)\
  Shell globbing options - Bash Video Tutorial\
  Jun 6, 2019 — Shell globbing options - Depending on your version of Bash, there may be other shell options that can make globbing more powerful.\
  \
  \
  LinkedIn
- [link](https://gitgist.com/posts/shell-exclusion-globbing/)\
  Zsh Globbing Exclusion Patterns: Mastering the ~ and ^ Operators\
  Apr 30, 2025 — Fortunately, Zsh ( Z shell ) (the Z shell) offers powerful “globbing” (filename generation) features that make excluding files ele...\
  \
  gitgist.com
- [link](https://victorlillo.dev/blog/remove-all-node-modules-shell)\
  Remove all node modules with a Shell script\
  Jan 25, 2024 — -prune : Stops the search in the matching directories, meaning it will not descend further into those directories.\
  \
  \
  victorlillo.dev

## rg --files -g

To exclude folders named `legacy` when using `ripgrep` (`rg`), use the standard `-g` (glob) flag with an exclamation mark `!` to negate the pattern.

### The Solution

bash

```
rg --files -g '!**/legacy/**'
```

Use code with caution.

### Why This Works

- `--files`: Lists files that `ripgrep` would search without actually searching their contents.
- `-g '!...'`: The exclamation mark `!` tells `ripgrep` to exclude matching paths.
- `**/legacy/**`: Matches the `legacy` folder and everything inside it, at any depth in the directory tree.
- Single quotes `' '`: Prevents your shell from misinterpreting the `!` character.

### Alternative (Permanent Fix)

If you always want to ignore `legacy` folders in this project, create a `.ignore` or `.rgignore` file in your root directory and add this line:

text

```
**/legacy/**
```

Use code with caution.

`ripgrep` automatically reads these files and respects the exclusion rules.

To help fine-tune this, please let me know:

- Do you want to exclude `legacy` **permanently** across all searches?

- Are there **other specific folders** or file types you also need to skip?

- [link](https://github.com/BurntSushi/ripgrep/issues/91)\
  Searching filenames (\`-g\` option in \`ag\`) · Issue #91 · BurntSushi/ripgrep\
  Sep 25, 2016 — Valloric commented on Sep 25, 2016 Ah, I get it now. It's a combination of two flags: --files lists all the files that would have ...\
  \
  \
  GitHub

- [link](https://manpages.ubuntu.com/manpages/focal/man1/rg.1.html)\
  Ubuntu Manpage: rg - recursively search current directory for lines matching a pattern\
  Never print the file path with the matched lines. This is the default when ripgrep is explicitly instructed to search one file or ...\
  \
  Ubuntu Manpages

- [link](https://github.com/burntsushi/ripgrep)\
  GitHub - BurntSushi/ripgrep: ripgrep recursively searches directories for a regex pattern while respecting your gitignore\
  By default, ripgrep will respect gitignore rules and automatically skip hidden files/directories and binary files. (To disable all...\
  \
  \
  GitHub

## can i have multiple -g in rg

Yes, you can use multiple `-g` flags in a single `rg` command.

### The Solution

bash

```
rg --files -g '!**/legacy/**' -g '!**/tmp/**' -g '*.js'
```

Use code with caution.

### Key Rules For Multiple Flags

- **Independent Evaluation**: `ripgrep` evaluates every `-g` flag you provide.
- **Order Matters**: Rules are applied in the order they appear.
- **Include vs Exclude**: Flags starting with `!` exclude files, while flags without `!` include them.

### Real-World Example

If you want to search only inside Python files, but skip `legacy` and `tests` folders, run:

bash

```
rg "search_term" -g '*.py' -g '!**/legacy/**' -g '!**/tests/**'
```

Use code with caution.

To help you build the exact command, please let me know:

- What **specific file types** do you want to target?

- What **other folders** do you need to exclude?

- [link](https://medium.com/@josephinechika94/regular-expressions-4f163b2e4215)\
  REGULAR EXPRESSIONS. Introduction | by JOSEPHINE CHIKA\
  May 20, 2018 — Flags Regular expressions have five optional flags that allow for global and case insensitive searching. These flags can be used s...\
  \
  \
  Medium

## does it make any sense to put excluding flags ahead

Yes, putting excluding flags ahead makes sense and is actually a safer best practice in `ripgrep`.

### Why Order Matters

`ripgrep` processes glob flags sequentially from **left to right**. Later flags can override earlier flags if they overlap.

- **Exclusions first (Recommended)**: Setting your blocks first cleanly defines what is strictly off-limits before you select what you want.
- **Inclusions first (Risky)**: If you include a broad group first, a poorly written exclusion later might not catch everything, or vice versa.

### How Ripgrep Resolves Overlaps

If an inclusion and an exclusion conflict, **the last match wins**.

bash

```
# Example A: Excludes legacy, then searches all JavaScript files.
rg --files -g '!**/legacy/**' -g '*.js'

# Example B: Searches JavaScript files, then explicitly strips out legacy.
rg --files -g '*.js' -g '!**/legacy/**'
```

Use code with caution.

Both examples above achieve the same result because the patterns do not critically conflict. However, putting exclusions first acts as a mental "shield," ensuring you filter out junk data before narrowing down your target.

To help you optimize your specific workflow, tell me:

- Are you getting **unexpected files** in your current search results?

- What **exact command** are you trying to run right now?

- [link](https://www.reddit.com/r/cprogramming/comments/1qzilil/what%5Fis%5Fthe%5Fsyntax%5Ffor%5Fadding%5Fmultiple%5Fitems%5Fto/)\
  What is the syntax for adding multiple items to the LDFLAGS and LDLIBS environment variables when compiling a project? : r/cprogramming\
  Feb 8, 2026 — These flags are normally simply passed to your compiler as command-line arguments. So it depends on your compiler. Normally that w...\
  \
  \
  Reddit

## no. example a doesnt work at all.

You are entirely correct. Example A does not work, and I apologize for the mistake.

### Why Example A Fails

In `ripgrep`, if you provide a positive glob (like `*.js`), it acts as an **exclusive filter**. It tells `ripgrep` to _only_ look at files matching that pattern, completely resetting the scope.

Because `ripgrep` processes left-to-right:

1. `-g '!**/legacy/**'` says "exclude legacy".
2. `-g '*.js'` overrides the previous rule and says "ignore everything _except_ `.js` files in the **current directory**". It does not look into subdirectories because it lacks a globstar (`**/`).

### The Correct Way to Use Multiple Globs

To make Example A work correctly while specifying a file extension, you must include the recursive wildcard (`**/`) in your inclusion glob:

bash

```
rg --files -g '!**/legacy/**' -g '**/*.js'
```

Use code with caution.

### Why the Order Still Matters

Even with the correct syntax, **the last match wins**. If you reverse them, a later exclusion will successfully knock out files from your inclusion:

bash

```
# This works perfectly: Includes all JS, then removes legacy JS
rg --files -g '**/*.js' -g '!**/legacy/**'
```

Use code with caution.

If you prefer to completely avoid managing multiple `-g` flags for file types, you can use `ripgrep`'s built-in type system instead:

bash

```
rg --files -t js -g '!**/legacy/**'
```

Use code with caution.

Would you like help setting up a **permanent configuration file** so you do not have to type these exclusions manually every time?

## search

The behavior of `ripgrep`'s globbing mechanism is highly literal, meaning **the order of inclusion versus exclusion flags determines the outcome**. The rule `ripgrep` follows is simple: **the last matching glob flag wins**. [link](https://github.com/BurntSushi/ripgrep/issues/1478)

To control your search scope exactly, apply these structuring strategies:

### 1. Inclusions First, Exclusions Last (The Whitelist Method)

If you want to isolate a specific file type while throwing out a junk folder, put the inclusion first and the exclusion last. [link](https://github.com/BurntSushi/ripgrep/issues/689)

bash

```
rg --files -g '**/*.js' -g '!**/legacy/**'
```

Use code with caution.

- **Step 1:** `-g '**/*.js'` restricts the entire search space strictly to JavaScript files.
- **Step 2:** `-g '!**/legacy/**'` intercepts those files and drops anything inside a `legacy` folder.
- **Result:** You get only the JavaScript files you want, completely free of the legacy directory.

### 2. Multi-Exclusion Stack (The Blacklist Method)

If you want to search all default file types but skip several specific folders, the ordering of those exclusions relative to each other does not matter. You can safely stack them at the front or the back: [link](https://github.com/BurntSushi/ripgrep/issues/1808)

bash

```
rg --files -g '!**/legacy/**' -g '!**/tmp/**' -g '!**/node_modules/**'
```

Use code with caution.

- Because they are all negative (`!`), they layer together cleanly to filter out matching directories.

### Why Put Exclusions First?

Placing exclusions at the beginning is a best practice for **global configurations** or aliases. For instance, if you create a shell alias like `alias rg="rg -g '!**/legacy/**'"`, it injects the exclusion first.

When you later run your alias with a positive flag (`rg -g '**/*.js'`), `ripgrep` evaluates the exclusion first, then overrides the neutral space with your target file type. [link](https://github.com/BurntSushi/ripgrep/issues/1478)

Are there any other **specific patterns** or directory structures you are trying to match? Tell me what you need to target, and I will write the precise flag order for you.

- [link](https://github.com/BurntSushi/ripgrep/discussions/1669)\
  Easy way to search all files · BurntSushi ripgrep - GitHub\
  Apr 26, 2025 — Thanks for the brilliant software, really useful - and fast! I would love it if there was an easy way to simply include all files.\
  GitHub
- [link](https://github.com/BurntSushi/ripgrep/issues/1478)\
  Clarify multiple glob flag behavior in help message #1478\
  Feb 5, 2020 — Description. casey. opened on Feb 5, 2020. Contributor. I was unsure of how conflicting globs are handled and was unable to figure...\
  GitHub
- [link](https://github.com/BurntSushi/ripgrep/issues/689)\
  glob + respect ~/.ignore? #689 - BurntSushi/ripgrep - GitHub\
  Nov 21, 2017 — okdana commented on Nov 21, 2017. @okdana · okdana · on Nov 21, 2017. Contributor. More actions. Per the man page: -g, --glob GLOB...\
  GitHub

Show all

## if you put exclusion first and globbing later, it doesnt make any sense. it ignores the exclusion.

**You are 100% correct.** If you put the exclusion first and a positive file glob second, `ripgrep` completely ignores the exclusion. [link](https://github.com/BurntSushi/ripgrep/issues/1478)

My previous statement was wrong. To understand why it fails, it helps to look at exactly how `ripgrep` evaluates patterns.

### Why Exclusion First and Glob Later Breaks

`ripgrep` relies on a strict **"last match wins"** rule. If a file path matches more than one glob flag, only the very last flag in your command is respected. [link](https://github.com/BurntSushi/ripgrep/issues/1478)

When you run:

bash

```
rg --files -g '!**/legacy/**' -g '**/*.js'
```

Use code with caution.

A file located at `legacy/app.js` triggers both rules:

1. It matches the first pattern (`!**/legacy/**`), so `ripgrep` flags it to be **excluded**.
2. Then, it matches the second pattern (`**/*.js`). Because this positive glob comes _later_, it overrides the previous decision. `ripgrep` flags it to be **included**. [link](https://github.com/BurntSushi/ripgrep/issues/1478)

Because the positive glob is evaluated last, it completely undoes your exclusion. [link](https://github.com/BurntSushi/ripgrep/issues/1478)

### The Only Way It Works (Exclusion Last)

To ensure the exclusion is never overridden, the exclusion flag **must** be placed at the very end of your command: [link](https://github.com/BurntSushi/ripgrep/issues/1478)

bash

```
rg --files -g '**/*.js' -g '!**/legacy/**'
```

Use code with caution.

By placing `-g '!**/legacy/**'` last, you ensure that the exclusion acts as the final decision. It intercepts any JavaScript files found in the previous step and drops them if they sit inside a legacy directory. [link](https://github.com/BurntSushi/ripgrep/issues/1478)

### Summary Rule

- **If you use mixed flags (Inclusions + Exclusions)**: Always put your positive globs first and your negative `!` exclusions last.

- **If you use only exclusions**: The order does not matter, as multiple exclusions do not conflict with each other. [link](https://github.com/BurntSushi/ripgrep/issues/1478)

- [link](https://github.com/BurntSushi/ripgrep/issues/1478)\
  Clarify multiple glob flag behavior in help message #1478\
  Feb 5, 2020 — Description. casey. opened on Feb 5, 2020. Contributor. I was unsure of how conflicting globs are handled and was unable to figure...\
  GitHub

- [link](https://manpages.debian.org/unstable/ripgrep/rg.1.en.html)\
  rg(1) — ripgrep — Debian unstable\
  Apr 16, 2026 — Multiple glob flags may be used. Globbing rules match .gitignore globs. Precede a glob with a ! to exclude it. If multiple globs m...\
  Debian Manpages

- [link](https://github.com/BurntSushi/ripgrep/issues/689)\
  glob + respect ~/.ignore? #689 - BurntSushi/ripgrep - GitHub\
  Nov 21, 2017 — okdana commented on Nov 21, 2017. @okdana · okdana · on Nov 21, 2017. Contributor. More actions. Per the man page: -g, --glob GLOB...\
  GitHub

Show all



