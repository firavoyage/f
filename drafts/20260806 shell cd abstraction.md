# . cd 0.0

```sh
cd(){
  local reset=$(tput sgr0)
  
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)

  local black=$(tput setaf 0)
  local red=$(tput setaf 1)
  local green=$(tput setaf 2)
  local yellow=$(tput setaf 3)
  local blue=$(tput setaf 4)
  local magenta=$(tput setaf 5)
  local cyan=$(tput setaf 6)
  local white=$(tput setaf 7)
  
  local bright_black=$(tput setaf 8)
  local bright_red=$(tput setaf 9)
  local bright_green=$(tput setaf 10)
  local bright_yellow=$(tput setaf 11)
  local bright_blue=$(tput setaf 12)
  local bright_magenta=$(tput setaf 13)
  local bright_cyan=$(tput setaf 14)
  local bright_white=$(tput setaf 15)

  local heading="$bold$bright_green"
  local cmd="$bold$bright_cyan" # command or flag/option
  local arg="$cyan" # argument

  local version="cd 0.0 (2026.08.06)"
  local help=$(cat <<- EOF | sed 's/^  //'
  Navigate filesystem

  ${heading}Usage:${reset}
    ${cmd}cd${reset} ${arg}<location>${reset}       Navigate somewhere
    ${cmd}cd${reset} ${arg}<location...>${reset}    Join args with a space and navigate there
    ${cmd}cd${reset} ${arg}[flag]${reset}           Check version or help

  ${heading}Options:${reset}
    ${cmd}-v${reset}, ${cmd}--version${reset}    Print version
    ${cmd}-h${reset}, ${cmd}--help${reset}       Print help
	EOF
	)

  if test $# -eq 0; then
    echo $help
  elif test $# -eq 1; then
    if test $1 = "--help" -o $1 = "-h"; then
      echo $help
    elif test $1 = "--version" -o $1 = "-v"; then
      echo $version
    else
      command cd "$*"
    fi
  else
    command cd "$*"
  fi
}
```

# . test

```sh
 ~ % cd a b
cd: no such file or directory: /home/firb
 ~ % cd a b c
cd: too many arguments
 ~ % cd a
cd: no such file or directory: a
 ~ % cd '/' a
cd: no such file or directory: ahome/fira
 ~ % cd Documents/
 ~/Documents % whereami
/home/fira/Documents
 ~/Documents % cd o a
cd: no such file or directory: /hame/fira/Documents
 ~/Documents % cd ~
 ~ % cd My Project
cd: string not in pwd: My
 ~ % cd My\ Project
cd: no such file or directory: My Project
```

```sh
 ~ % echo hello world
hello world
 ~ % echo hello  world
hello world
```

```sh
 ~ % which echo
echo: shell built-in command
 ~ % which cat
/usr/bin/cat
```

```sh
 ~ % cd
Navigate filesystem

Usage:
  cd <folder>    Navigate into a folder
  cd <target>    Check symlink
  cd [flag]      Check version or help

Usage: cd <file>

Options:
  -v, --version    Print version
  -h, --help       Print help
 ~ % command cd
zsh: command not found: cd
 ~ % which cd
cd () {
        local reset=$(tput sgr0)
        local bold=$(tput bold)
        local italic=$(tput sitm)
        local underline=$(tput smul)
        local black=$(tput setaf 0)
        local red=$(tput setaf 1)
        local green=$(tput setaf 2)
        local yellow=$(tput setaf 3)
        local blue=$(tput setaf 4)
        local magenta=$(tput setaf 5)
        local cyan=$(tput setaf 6)
        local white=$(tput setaf 7)
        local bright_black=$(tput setaf 8)
        local bright_red=$(tput setaf 9)
        local bright_green=$(tput setaf 10)
        local bright_yellow=$(tput setaf 11)
        local bright_blue=$(tput setaf 12)
        local bright_magenta=$(tput setaf 13)
        local bright_cyan=$(tput setaf 14)
        local bright_white=$(tput setaf 15)
        local heading="$bold$bright_green"
        local cmd="$bold$bright_cyan"
        local arg="$cyan"
        local version="to_mp3 0.0 (2026.07.15)"
        local help=$(cat <<- EOF | sed 's/^  //'
  Navigate filesystem

  ${heading}Usage:${reset}
    ${cmd}cd${reset} <folder>    Navigate into a folder
    ${cmd}cd${reset} <target>    Check symlink
    ${cmd}cd${reset} [flag]      Check version or help

  ${heading}Usage:${reset} ${cmd}cd${reset} ${arg}<file>${reset}

  ${heading}Options:${reset}
    ${cmd}-v${reset}, ${cmd}--version${reset}    Print version
    ${cmd}-h${reset}, ${cmd}--help${reset}       Print help
        EOF
        )
        if test $# -eq 1
        then
                if test $1 = "--help" -o $1 = "-h"
                then
                        echo $help
                elif test $1 = "--version" -o $1 = "-v"
                then
                        echo $version
                else
                        ffmpeg -i "$1" -vn -c:a libmp3lame -b:a 192k "${1%.*}.mp3"
                fi
        else
                echo $help
        fi
}
```

```sh
 ~ % command cd
zsh: command not found: cd
 ~ % builtin cd
 ~ % command cd foo
zsh: command not found: cd
 ~ % Documents
zsh: command not found: Documents
 ~ % Documents/
zsh: permission denied: Documents/
 ~ % /Documents
zsh: no such file or directory: /Documents
 ~ % ~/Documents
zsh: permission denied: /home/fira/Documents
 ~ % cd Documents
ffmpeg version 6.1.1-3ubuntu5 Copyright (c) 2000-2023 the FFmpeg developers
  built with gcc 13 (Ubuntu 13.2.0-23ubuntu3)
  configuration: --prefix=/usr --extra-version=3ubuntu5 --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --arch=amd64 --enable-gpl --disable-stripping --disable-omx --enable-gnutls --enable-libaom --enable-libass --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libcodec2 --enable-libdav1d --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libglslang --enable-libgme --enable-libgsm --enable-libharfbuzz --enable-libmp3lame --enable-libmysofa --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-librubberband --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libtheora --enable-libtwolame --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzimg --enable-openal --enable-opencl --enable-opengl --disable-sndio --enable-libvpl --disable-libmfx --enable-libdc1394 --enable-libdrm --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-ladspa --enable-libbluray --enable-libjack --enable-libpulse --enable-librabbitmq --enable-librist --enable-libsrt --enable-libssh --enable-libsvtav1 --enable-libx264 --enable-libzmq --enable-libzvbi --enable-lv2 --enable-sdl2 --enable-libplacebo --enable-librav1e --enable-pocketsphinx --enable-librsvg --enable-libjxl --enable-shared
  libavutil      58. 29.100 / 58. 29.100
  libavcodec     60. 31.102 / 60. 31.102
  libavformat    60. 16.100 / 60. 16.100
  libavdevice    60.  3.100 / 60.  3.100
  libavfilter     9. 12.100 /  9. 12.100
  libswscale      7.  5.100 /  7.  5.100
  libswresample   4. 12.100 /  4. 12.100
  libpostproc    57.  3.100 / 57.  3.100
[in#0 @ 0x5eb6b8822dc0] Error opening input: Is a directory
Error opening input file Documents.
Error opening input files: Is a directory
```

```sh
 ~ % bash
bash: /home/fira/.deno/env: No such file or directory
fira@Fira:~$ cd
fira@Fira:~$ command cd
fira@Fira:~$ builtin cd
fira@Fira:~$
```

```sh
 ~ % sh
$ command cd
$ builtin cd
sh: 2: builtin: not found
```

```sh
 ~ % command cd
 ~ % cd
Navigate filesystem

Usage:
  cd <location>    Navigate somewhere
  cd <location> [location...]    Join args w space and navigate there
  cd [flag]      Check version or help

Options:
  -v, --version    Print version
  -h, --help       Print help
 ~ % cd Documents
 ~/Documents % cd ..
```

```sh
 ~ % cd
Navigate filesystem

Usage:
  cd <location>                  Navigate somewhere
  cd <location> [location...]    Join args with a space and navigate there
  cd [flag]                      Check version or help

Options:
  -v, --version    Print version
  -h, --help       Print help
```

```sh
 ~ % cd
Navigate filesystem

Usage:
  cd <location>       Navigate somewhere
  cd <location...>    Join args with a space and navigate there
  cd [flag]           Check version or help

Options:
  -v, --version    Print version
  -h, --help       Print help
 ~ % cd -v
cd 0.0 (2026.08.06)
 ~ % cd -h
Navigate filesystem

Usage:
  cd <location>       Navigate somewhere
  cd <location...>    Join args with a space and navigate there
  cd [flag]           Check version or help

Options:
  -v, --version    Print version
  -h, --help       Print help
```

```sh
 ~ % cd -h
Navigate filesystem

Usage:
  cd <location>       Navigate somewhere
  cd <location...>    Join args with a space and navigate there
  cd [flag]           Check version or help

Options:
  -v, --version    Print version
  -h, --help       Print help
```

```sh
 ~ % uv
An extremely fast Python package manager.

Usage: uv [OPTIONS] <COMMAND>

Commands:
  auth     Manage authentication
  run      Run a command or script
  init     Create a new project
  add      Add dependencies to the project
  remove   Remove dependencies from the project
  version  Read or update the project's version
  sync     Update the project's environment
  lock     Update the project's lockfile
  export   Export the project's lockfile to an alternate format
  tree     Display the project's dependency tree
  format   Format Python code in the project
  audit    Audit the project's dependencies
  tool     Run and install commands provided by Python packages
  python   Manage Python versions and installations
  pip      Manage Python packages with a pip-compatible interface
  venv     Create a virtual environment
  build    Build Python packages into source distributions and wheels
  publish  Upload distributions to an index
  cache    Manage uv's cache
  self     Manage the uv executable
  help     Display documentation for a command

Cache options:
  -n, --no-cache               Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the
                               operation [env: UV_NO_CACHE=]
      --cache-dir <CACHE_DIR>  Path to the cache directory [env: UV_CACHE_DIR=]

Python options:
      --managed-python       Require use of uv-managed Python versions [env: UV_MANAGED_PYTHON=]
      --no-managed-python    Disable use of uv-managed Python versions [env: UV_NO_MANAGED_PYTHON=]
      --no-python-downloads  Disable automatic downloads of Python. [env: "UV_PYTHON_DOWNLOADS=never"]

Global options:
  -q, --quiet...                                   Use quiet output
  -v, --verbose...                                 Use verbose output
      --color <COLOR_CHOICE>                       Control the use of color in output [possible values: auto, always, never]
      --native-tls                                 Whether to load TLS certificates from the platform's native store [env:
                                                   UV_NATIVE_TLS=]
      --offline                                    Disable network access [env: UV_OFFLINE=]
      --allow-insecure-host <ALLOW_INSECURE_HOST>  Allow insecure connections to a host [env: UV_INSECURE_HOST=]
      --no-progress                                Hide all progress outputs [env: UV_NO_PROGRESS=]
      --directory <DIRECTORY>                      Change to the given directory prior to running the command [env: UV_WORKING_DIR=]
      --project <PROJECT>                          Discover a project in the given directory [env: UV_PROJECT=]
      --config-file <CONFIG_FILE>                  The path to a `uv.toml` file to use for configuration [env: UV_CONFIG_FILE=]
      --no-config                                  Avoid discovering configuration files (`pyproject.toml`, `uv.toml`) [env:
                                                   UV_NO_CONFIG=]
  -h, --help                                       Display the concise help for this command
  -V, --version                                    Display the uv version

Use `uv help` for more details.
 ~ % uv --version
uv 0.10.12 (x86_64-unknown-linux-gnu)
 ~ % cargo
Rust's package manager

Usage: cargo [+toolchain] [OPTIONS] [COMMAND]
       cargo [+toolchain] [OPTIONS] -Zscript <MANIFEST_RS> [ARGS]...

Options:
  -V, --version                  Print version info and exit
      --list                     List installed commands
      --explain <CODE>           Provide a detailed explanation of a rustc error message
  -v, --verbose...               Use verbose output (-vv very verbose/build.rs output)
  -q, --quiet                    Do not print cargo log messages
      --color <WHEN>             Coloring [possible values: auto, always, never]
  -C <DIRECTORY>                 Change to DIRECTORY before doing anything (nightly-only)
      --locked                   Assert that `Cargo.lock` will remain unchanged
      --offline                  Run without accessing the network
      --frozen                   Equivalent to specifying both --locked and --offline
      --config <KEY=VALUE|PATH>  Override a configuration value
  -Z <FLAG>                      Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details
  -h, --help                     Print help

Commands:
    build, b    Compile the current package
    check, c    Analyze the current package and report errors, but don't build object files
    clean       Remove the target directory
    doc, d      Build this package's and its dependencies' documentation
    new         Create a new cargo package
    init        Create a new cargo package in an existing directory
    add         Add dependencies to a manifest file
    remove      Remove dependencies from a manifest file
    run, r      Run a binary or example of the local package
    test, t     Run the tests
    bench       Run the benchmarks
    update      Update dependencies listed in Cargo.lock
    search      Search registry for crates
    publish     Package and upload this package to the registry
    install     Install a Rust binary
    uninstall   Uninstall a Rust binary
    ...         See all commands with --list

See 'cargo help <command>' for more information on a specific command.
 ~ % cargo --version
cargo 1.96.0 (30a34c682 2026-05-25)
```

# shell cd command

<mark><span>The<span> </span></span><strong><code dir="ltr">cd</code><span> </span>(change directory)</strong><span> </span>command is a shell built-in used to navigate the file system by updating the current working directory of your terminal process</mark>. Because it directly alters the state of the active shell, it runs natively inside the shell rather than as an external binary. [link](https://linuxize.com/post/linux-cd-command/)

### Essential Syntax & Shortcuts

Use these fundamental `cd` variations to move quickly around your system:

| Command              | Action                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------ |
| `cd /path/to/folder` | Moves to a **specific directory** (absolute path begins with `/`, relative path does not). |
| `cd` or `cd ~`       | Returns instantly to your **home directory** (`/home/username`).                           |
| `cd ..`              | Moves **up one level** to the parent directory.                                            |
| `cd ../..`           | Moves **up multiple levels** (add more `/..` to go higher).                                |
| `cd -`               | Toggles back to your **previous working directory**.                                       |
| `cd /`               | Jumps straight to the **root directory** at the top of the file system.                    |

### Handling Spaces in Folder Names

If a directory name has spaces, the shell will treat the space as a separator unless you wrap the path in quotes or escape the space with a backslash: [link](https://www.youtube.com/watch?v=ZRlQxx1rmng\&t=38)

- `cd "My Documents"`
- `cd My\ Documents` [link](https://www.youtube.com/watch?v=ZRlQxx1rmng\&t=38)

### Helpful Navigation Tips

- **Tab Completion**: Type the first few letters of a folder and hit `Tab` to let the shell autocomplete the name for you.
- **Verify Your Location**: Run `pwd` (print working directory) at any time to see the absolute path of where you currently are.
- **Combining Actions**: Use `cd path && ls` to switch to a directory and automatically list its files only if the directory switch succeeds. [link](https://linuxize.com/post/linux-cd-command/)

### Troubleshooting: `cd` inside Shell Scripts

If you put a `cd` command inside a shell script and execute it, your terminal won't change folders when the script finishes. This happens because scripts run inside an independent child process. When the script ends, that child environment is destroyed, leaving your main shell exactly where it started. To make a script change your actual terminal directory, you must run it using the `source` command: [link](https://linuxize.com/post/linux-cd-command/)

bash

```
source your_script.sh
```

Use code with caution.

Would you like help **writing a shell script** that handles directory changes safely, or are you trying to troubleshoot a **specific terminal error** like "Permission denied"? [link](https://pq.hosting/en/help/cd-command-linux-change-directory)

AI can make mistakes, so double-check responses

- [link](https://stackoverflow.com/questions/255414/why-cant-i-change-directories-using-cd-in-a-script)\
  Why can't I change directories using "cd" in a script?\
  Nov 1, 2008 — Shell scripts are run inside a subshell, and each subshell has its own concept of what the current directory is. The cd succeeds, ...\
  Stack Overflow
- [link](https://www.ibm.com/docs/en/zos/3.1.0?topic=descriptions-cd-change-working-directory)\
  cd - Change the working directory - IBM\
  The command cd directory changes the working directory of the current shell execution environment (see sh) to directory. If you sp...\
  IBM
- [link](https://en.wikipedia.org/wiki/Cd%5F%28command%29)\
  Cd (command) - Wikipedia\
  Unix shells Unix-based shells and PowerShell generally share these features: cd ~ Changes the working directory to user's home dir...\
  Wikipedia

Show all

## what if you pass more than one arg

If you pass more than one argument to the `cd` command, its behavior depends entirely on the specific shell you are using. Standard shells handle this situation differently.

### Standard Bash Behavior

In standard Bash, `cd` **ignores all extra arguments** and only processes the first one.

- Command: `cd folder1 folder2 folder3`
- Result: You will successfully move into `folder1`. The shell completely ignores `folder2` and `folder3` without printing any error messages.

### Zsh (macOS Default) Behavior

In Zsh, passing two arguments triggers a **string substitution** feature. It searches your current directory path for the string in the first argument and replaces it with the string in the second argument.

- Current Location: `/users/project/frontend/src`
- Command: `cd frontend backend`
- Result: Zsh replaces "frontend" with "backend" and moves you straight to `/users/project/backend/src`.
- If you pass _three or more_ arguments, Zsh will throw an error: `cd: too many arguments`.

### POSIX Compliant Shells (like sh)

Strict POSIX shells do not allow multiple arguments.

- Command: `cd folder1 folder2`
- Result: The shell throws an error stating `cd: too many arguments` and your directory does not change.

### The "Accidental Space" Trap

The most common reason people accidentally pass multiple arguments is forgetting to escape a space in a folder name.

- **The Mistake:** Typing `cd My Project` passes `My` as argument 1 and `Project` as argument 2.
  - In Bash: You will enter a folder named `My` (if it exists) and ignore `Project`.
  - In Zsh/POSIX: You will likely get a "too many arguments" or "string not in pwd" error.
- **The Fix:** Always use quotes (`cd "My Project"`) or a backslash (`cd My\ Project`).

Are you trying to resolve a **"too many arguments" error** right now, or are you looking for a way to **change multiple directories** at the same time?

## how to join all args w a space in a shell fn

To join all arguments with a space inside a shell function, use the **`$*`** or **`"$*"`** special parameters.

### The Direct Solution

The cleanest way to join all arguments into a single string separated by spaces is to wrap `$*` in double quotes:

bash

```
my_function() {
    local joined_string="$*"
    echo "$joined_string"
}
```

Use code with caution.

### Why it works: `$*` vs `$@`

- **`"$*"` (Recommended)**: Joins all arguments into **one single string**. It uses the first character of the `IFS` (Internal Field Separator) variable as the glue. By default, `IFS` starts with a space, so it outputs `arg1 arg2 arg3`.
- **`"$@"`**: Keeps all arguments as **separate distinct strings** (`"arg1" "arg2" "arg3"`). Do not use this if you want a single joined string.

### Example Code and Output

bash

```
join_args() {
    local result="$*"
    echo "The joined string is: $result"
}

# Running the function:
join_args hello brave new world
# Output: The joined string is: hello brave new world
```

Use code with caution.

### Advanced: Changing the Separator

If you ever want to join arguments with something else (like a comma, dash, or slash), temporarily change the `IFS` variable inside your function:

bash

```
join_with_comma() {
    local IFS=","
    echo "$*"
}

join_with_comma apple banana cherry
# Output: apple,banana,cherry
```

Use code with caution.

Are you building this function to **log messages to a file**, or are you trying to pass these joined arguments into **another command**?

- [link](https://www.geeksforgeeks.org/linux-unix/shell-script-to-demonstrate-special-parameters-with-example/)\
  Shell Script to Demonstrate Special Parameters With Example\
  Jan 3, 2024 — Special Parameters in Shell Scripting: $\* and $@ In the realm of shell scripting, there exist special parameters that facilitate t...\
  \
  \
  GeeksforGeeks
- [link](https://labexio.medium.com/shell-special-variables-and-execution-environment-b96c882848fb)\
  Shell Special Variables and Execution Environment | by LabEx | Medium\
  Oct 30, 2024 — Understanding the Difference Between $@ and $\* The special variables $@ and $\* are both used to represent all command-line argumen...\
  \
  \
  Medium
- [link](https://labexio.medium.com/shell-special-variables-and-execution-environment-b96c882848fb)\
  Shell Special Variables and Execution Environment | by LabEx | Medium\
  Oct 30, 2024 — Understanding the Difference Between $@ and $\* The special variables $@ and $\* are both used to represent all command-line argumen...\
  \
  \
  Medium

Show all

## how to use the command cd inside a shell fn called cd

To call the real `cd` command inside a custom function that is also named `cd`, you must use the **`builtin`** or **`command`** keyword. Without these keywords, the function will call itself infinitely, crashing your shell with a "maximum recursion depth exceeded" or "stack overflow" error.

### The Direct Solution

Use the `builtin` keyword to bypass the function definition and force the shell to run its original, native `cd` command:

bash

```
cd() {
    # 1. Join all arguments with a space (handles spaces in folder names)
    local target_dir="$*"

    # 2. Do something custom before changing directories
    echo "Navigating to: $target_dir"

    # 3. Call the REAL native cd command
    builtin cd "$target_dir"

    # 4. Do something custom after changing directories
    ls
}
```

Use code with caution.

### Why This Works

Shells look up commands in a specific order of priority:

1. **Aliases**
2. **Functions** (This is your custom `cd`)
3. **Builtins** (This is the real `cd`)
4. **External Executables** (Like `ls` or `grep`)

Because functions override builtins, typing `cd` normally runs your function. The `builtin` keyword explicitly overrides this priority list and jumps straight to step 3.

### Alternative: Using the `command` keyword

You can also use the `command` keyword, which skips both aliases and functions:

bash

```
command cd "$target_dir"
```

Use code with caution.

_Note: While `command cd` works perfectly in Bash and Zsh, `builtin cd` is technically more precise because `cd` is a shell builtin, not an external program binary._

Are you trying to make your terminal **automatically run `ls`** every time you change folders, or are you creating a **custom logging/history script**?

- [link](https://superuser.com/questions/507697/how-do-i-cd-and-then-ls-automatically-in-linux)\
  How do I \`cd\` and then\* \`ls\` automatically in linux?\
  Nov 17, 2012 — 3 Answers 3 builtin makes the cd inside the function invoke the builtin cd command rather than trying to call the function recursi...\
  \
  Super User
- [link](https://superuser.com/questions/1345568/cd-in-parent-shell-with-python-script)\
  bash - cd in parent shell with python script\
  Aug 2, 2018 — 3 Answers 3 This is not possible, and you'll find that cd is not actually a " program" in the normal sense - it's not a file on di...\
  \
  Super User
- [link](https://community.unix.com/t/make-pwd-print-escape-character/285983)\
  Make pwd print escape character - Shell Programming and Scripting\
  Apr 7, 2011 — Nice alister, thanks. Never had call to use builtin, as you can probably tell I don't really like the idea of alias myself, I'd ra...\
  \
  Unix Linux Community

Show all

## why builtin cd works while command cd says command not found

`builtin cd` works while `command cd` fails because <mark><strong><code dir="ltr">command</code><span> </span>bypasses standard builtins in certain configurations, forcing the shell to look for a physical binary file on your disk that does not exist.</strong></mark>

### 1. The Core Difference Between the Keywords

- **`builtin`**: Forces the shell to look **only** at its list of internal, hardcoded shell builtins. It completely bypasses functions and aliases. Since `cd` is natively baked into the shell's memory, `builtin cd` successfully locates it every time. [link](https://stackoverflow.com/questions/37498409/zsh-call-in-built-function-from-zsh-function-that-uses-the-same-name)
- **`command`**: Instructs the shell to look for an **executable program binary** sitting in your `PATH` directories (like `/usr/bin/` or `/bin/`). It deliberately suppresses shell functions. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)

### 2. Why `cd` is Unique (The Process Trait)

A standard program (like `ls` or `grep`) exists as a physical file on disk. When you run them, the shell spins up a separate child process. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)

`cd` **cannot work as an external file on disk**. An external process can only change its own directory; it cannot change the directory of its parent shell. Therefore, `cd` must execute inside the active shell process itself. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)

### 3. Why `command cd` Breaks in Your Setup

Because `cd` isn't a normal program, there is usually no physical `/bin/cd` or `/usr/bin/cd` executable on your computer. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)

Depending on your exact operating system and shell environment:

1. **Missing Binary**: Your specific shell configuration expects `command` to find a disk binary. Because no binary named `cd` exists in your `PATH`, it crashes with `command not found`. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)
2. **Broken POSIX Compliant Stubs**: Some environments include a fake script or stub file at `/usr/bin/cd` purely to satisfy strict POSIX compliance rules. If this file is missing, broken, or your shell doesn't recognize it, `command cd` immediately drops an error. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)

### Summary Rule of Thumb

- Use **`builtin cd`** if you are writing overrides inside shell functions to safely invoke native shell tools.
- Use **`command`** when you want to bypass a custom shell wrapper function for standard file utilities like `command ls` or `command rm`. [link](https://stackoverflow.com/questions/37498409/zsh-call-in-built-function-from-zsh-function-that-uses-the-same-name)

Are you working inside a specialized environment like a **minimal Docker container** or **macOS terminal**, or are you configuring a specific shell profile like `.bashrc` or `.zshrc`? [link](https://stackoverflow.com/questions/29189622/bash-zsh-cd-command-not-found)

- [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)\
  Super User\
  Why won't "sudo cd" work? - Super User\
  Feb 3, 2011 — If your OS follows POSIX, then running sudo cd will cause the external command "cd" (usually located at /usr/bin/cd ) to execute i...
- [link](https://stackoverflow.com/questions/37498409/zsh-call-in-built-function-from-zsh-function-that-uses-the-same-name)\
  Stack Overflow\
  ZSH: Call in-built function from zsh function that uses the same name\
  May 28, 2016 — 2 Answers. ... function cd() { builtin cd $1 ls . } builtin COMMAND tells zsh to use the builtin with the name COMMAND instead of ...
- [link](https://www.linuxteck.com/bash-path-explained-command-lookup/)\
  LinuxTeck\
  Bash Command Hierarchy & PATH Explained (Part 2 of 34)\
  Apr 26, 2026 — Using the which Command to Find Executables The which command in Linux is a quick way to find out exactly which file will be execu...

Show all

## how to say "it can take the rest of args" in cli help usage

To express that a command accepts a variable or infinite number of trailing arguments in a CLI help menu, you should use standard POSIX notation or specific phrasing depending on how detailed your help text is.

### 1. The Standard Syntax (Visual Usage Line)

In the primary `Usage:` line of your help menu, use **ellipses (`...`)** after a pluralized noun wrapped in brackets or uppercase text.

- **`[ARGS...]`** (Most common)
- **`[DIR...]`** (If the trailing arguments are all directories)
- **`[COMMAND_ARGS...]`** (If passing arguments directly to an underlying command)

**Example Usage Line:**

text

```
Usage: my_cmd [OPTIONS] <PRIMARY_ARG> [ARGS...]
```

Use code with caution.

### 2. Phrasing for the Argument Descriptions

In the detailed breakdown section below your usage line, use short, punchy phrases. Here are the best options depending on your exact scenario:

- **`Remaining arguments.`** (Cleanest and most common)
- **`Additional arguments passed to the command.`** (Clear and professional)
- **`Accepts zero or more trailing arguments.`** (Precise and explicit)
- **`All remaining arguments are forwarded to <command>.`** (Best if your tool acts as a wrapper or runner for another tool)

### Full CLI Help Template Example

text

```
Usage: runner [OPTIONS] <target> [ARGS...]

Arguments:
  <target>     The primary execution target.
  [ARGS...]    Remaining arguments passed directly to the target.

Options:
  -h, --help   Show this help message and exit.
```

Use code with caution.

Are you writing a help menu for a **custom shell script**, or are you using a specific programming framework like **Python's `argparse`** or **Go's `cobra`**?

- [link](https://dev.to/dlains/create-your-own-vim-commands-415b)\
  Create Your Own Vim Commands\
  Jan 21, 2019 — Optional Args 0 : The command takes no arguments. This is the default, so it can be omitted entirely. \[1-9]: The command takes the...\
  \
  \
  DEV Community
- [link](https://zwbetz.com/aliases-in-windows-command-prompt/)\
  Aliases in Windows Command Prompt\
  Mar 13, 2018 — Passing args # If you alias a command that you plan to pass arguments too (like rr above), place $\* at the end. This allows the al...\
  \
  zwbetz.com

# compare shell builtin and command

<mark><strong><span>Shell builtins are commands compiled directly into the shell program itself</span></strong>, whereas external commands exist as separate, standalone executable files stored on your computer's filesystem</mark>. [link](https://unix.stackexchange.com/questions/371722/how-to-distinguish-between-builtin-and-external-util-e-g-echo)

### Key Differences

| Feature         | Shell Builtin                                            | External Command                                       |
| --------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| **Location**    | Inside the shell binary (e.g., `bash`)                   | In filesystem directories like `/bin` or `/usr/bin`    |
| **Execution**   | Runs inside the current shell process                    | Requires the shell to create (fork) a new process      |
| **Performance** | **Faster** (no process loading overhead)                 | **Slower** (requires disk access and process creation) |
| **Environment** | Can alter the shell's state (e.g., changing directories) | Cannot modify the parent shell's environment           |
| **Examples**    | `cd`, `exit`, `export`, `pwd`, `history`                 | `grep`, `ls`, `awk`, `curl`, `chmod`                   |

### Why Builtins Exist

1. **Essential Functionality**: Some utilities _must_ be builtins because of how operating systems handle processes. For example, `cd` must be a builtin. If `cd` were an external command, the operating system would launch it in a new child process, change the directory there, and immediately close it—leaving your main terminal window in the exact same directory. [link](https://stackoverflow.com/questions/3192373/what-are-shell-built-in-commands-in-linux)
2. **Speed & Efficiency**: Simple actions like `echo`, `true`, or `test` are frequently looped in scripts. Keeping them inside the shell saves the system from wasting time constantly spawning and killing thousands of tiny external processes. [link](https://unix.stackexchange.com/questions/11454/what-is-the-difference-between-a-builtin-command-and-one-that-is-not)

### Overlapping Names

Some commands exist as **both** a builtin and an external executable file (such as `echo`, `kill`, or `printf`). [link](https://www.youtube.com/watch?v=FTXQVNydLHQ)

By default, the shell prioritizes its internal builtins over external paths. If you explicitly need to bypass the builtin version and force the system to use the external file, you must type its exact, absolute filesystem path (e.g., `/bin/echo` instead of just `echo`). [link](https://www.youtube.com/watch?v=FTXQVNydLHQ)

### How to Check the Type

You can easily find out how your shell interprets any specific word by passing it to the `type` command: [link](https://unix.stackexchange.com/questions/371722/how-to-distinguish-between-builtin-and-external-util-e-g-echo)

bash

```
type cd
# Output: cd is a shell builtin

type grep
# Output: grep is /usr/bin/grep
```

Use code with caution.

If you are interested, we can explore **how to list all available builtins** in your specific terminal or look into the **exact order of execution priority** when aliases and functions get involved. Which would you like to check out?

- [link](https://www.reddit.com/r/commandline/comments/y5cpff/shell%5Fbuiltin%5Fvs%5Falias%5Fvs%5Fcommand%5Fin%5Fposix%5Ffind/)\
  Shell builtin vs alias vs command in POSIX find -exec - Reddit\
  Oct 16, 2022 — On your system, command is only available as a shell builtin. find cannot execute shell builtins. It can only execute "external" c...\
  Reddit·r/commandline
- [link](https://askubuntu.com/questions/445749/whats-the-difference-between-shell-builtin-and-shell-keyword)\
  What's the difference between shell builtin and shell keyword?\
  Apr 10, 2014 — man bash calls them SHELL BUILTIN COMMANDS . So, a "shell builtin" is just like a normal command, like grep , etc., but instead of...\
  Ask Ubuntu
- [link](https://www.youtube.com/watch?v=cxlr9C35Jto)\
  external tools vs. shell-builtin commands\
  Jun 30, 2024 — yeah so this is a good question. um sometimes I like using external tools obviously you can reach for like aux said grab things li...\
  0:43\
  YouTube·You Suck at Programming

Show all

## compare shell builtin foo and command foo

<mark><strong><span>A shell builtin<span> </span></span><code dir="ltr">foo</code><span> </span>executes directly inside the active terminal process, while an external command<span> </span><code dir="ltr">foo</code><span> </span>runs as a separate program.</strong></mark>

The shell prioritizes the builtin version by default. Here is how they compare when sharing the exact same name:

### Direct Comparison

| Feature                 | Shell Builtin `foo`                        | External Command `foo`                           |
| ----------------------- | ------------------------------------------ | ------------------------------------------------ |
| **Execution Speed**     | Faster. Runs instantly inside memory.      | Slower. Requires disk lookup and initialization. |
| **Process Tracking**    | Keeps the exact same Process ID (PID).     | Creates a brand new child process (forks).       |
| **Environment Control** | Can change your current shell variables.   | Cannot change your current shell variables.      |
| **File Dependency**     | Works even if the hard drive is corrupted. | Fails if the file binary is deleted or moved.    |

### How the Shell Decides (Priority Order)

If you type `foo`, the shell checks its internal resources first. It executes the matching name using this strict order of priority:

1. **Aliases** (e.g., `alias foo='bar'`)
2. **Shell Functions** (e.g., `foo() { ... }`)
3. **Shell Builtins** (e.g., builtin `foo`)
4. **External Commands** (e.g., `/usr/bin/foo`)

Because builtins rank higher than external paths, the external command `foo` remains hidden and ignored unless you bypass the priority system.

### How to Force One or the Other

You can manually choose which version to execute using specific syntax overrides:

- **Force the builtin:** Use the `builtin` command prefix.\
  bash

<!---->

```
builtin foo
```

Use code with caution.

- **Force the external command:** Use the absolute file path, or use the `command` prefix.\
  bash

<!---->

```
/usr/bin/foo
# OR
command foo
```

Use code with caution.

If you want to dive deeper, I can show you **how to see all conflicting commands** on your system or explain **how custom shell functions** interact with this priority list. What would you like to explore next?

- [link](https://support.microsoft.com/en-us/access/shell-function)\
  Shell Function\
  Shell Function Runs an executable program and returns a Variant Syntax Shell( The Shell Remarks\
  \
  Microsoft Support

- [link](https://askubuntu.com/questions/445749/whats-the-difference-between-shell-builtin-and-shell-keyword)\
  What's the difference between shell builtin and shell keyword?\
  Apr 10, 2014 — Where do operators like (( (used for arithmetic expressions) fit in, since they are neither keywords nor built-ins? man bash calls...\
  \
  \
  Ask Ubuntu

- [link](https://www.geeksforgeeks.org/linux-unix/internal-and-external-commands-in-linux/)\
  Internal and External Commands in Linux\
  Jul 3, 2020 — External Commands : Commands which aren't built into the shell. When an external command has to be executed, the shell looks for i...\
  \
  GeeksforGeeks

# compare shell command builtin and command

In a POSIX-compliant shell like Bash, both `builtin` and `command` are used to bypass user-defined aliases and shell functions, but they differ significantly in **what** they are allowed to execute and **portability** across different shells. [link](https://unix.stackexchange.com/questions/495422/what-is-the-difference-between-the-commands-builtin-cd-and-cd)

Here is a direct comparison of how they behave and when to use each:

### Quick Overview

| Feature                        | `builtin` | `command` |
| ------------------------------ | --------- | --------- |
| **Bypasses Aliases?**          | Yes       | Yes       |
| **Bypasses Functions?**        | Yes       | Yes       |
| **Executes Built-ins?**        | Yes       | Yes       |
| **Executes Files on `$PATH`?** | No        | Yes       |
| **POSIX Compliant?**           | No        | Yes       |

### The Core Differences

#### 1. Scope of Execution

- **`builtin`** forces the shell to execute a command _only_ if it is a built-in shell utility (like `cd`, `echo`, or `pwd`). If you pass it an external program found in your `$PATH` (like `git` or `curl`), `builtin` will fail and return an error. [link](https://superuser.com/questions/1241654/what-does-the-builtin-command-do-in-bash)
- **`command`** suppresses the lookup of shell functions and aliases, but it will execute _either_ a shell built-in or an external program located in your `$PATH`.

#### 2. POSIX Standardization and Portability

- **`builtin`** is a non-standard extension. While it is available in advanced shells like Bash and Zsh, it is entirely missing from minimal, strict POSIX shells such as Dash (`/bin/sh` on Debian/Ubuntu). [link](https://unix.stackexchange.com/questions/11454/what-is-the-difference-between-a-builtin-command-and-one-that-is-not)
- **`command`** is explicitly defined by the [POSIX Shell Standard](https://unix.stackexchange.com/questions/651980/difference-between-command-command-vs-command-builtin-in-shell-scripting). It is universally available across almost all Unix-like shells, making it the choice for portable scripting. [link](https://www.reddit.com/r/commandline/comments/y5cpff/shell%5Fbuiltin%5Fvs%5Falias%5Fvs%5Fcommand%5Fin%5Fposix%5Ffind/)

### Practical Examples

#### Scenario A: Bypassing a custom wrapper function

If you write a wrapper function for `cd` to track your history, you must bypass the function itself inside the definition to prevent an infinite recursive loop. [link](https://www.youtube.com/watch?v=FTXQVNydLHQ)

Using `builtin` (Works in Bash/Zsh): [link](https://superuser.com/questions/1241654/what-does-the-builtin-command-do-in-bash)

bash

```
cd() {
    echo "Changing directory to $1"
    builtin cd "$1"
}
```

Use code with caution.

Using `command` (Universal/POSIX compliant):

bash

```
cd() {
    echo "Changing directory to $1"
    command cd "$1"
}
```

Use code with caution.

#### Scenario B: Forcing an external binary lookup

If you have a function named `ls` and want to bypass it to run the real system binary on your disk, `builtin` will fail because `ls` is an external binary, not a shell built-in.

bash

```
# This will FAIL with: "bash: builtin: ls: not a shell builtin"
builtin ls

# This will SUCCEED and execute the binary from your $PATH
command ls
```

Use code with caution.

### When to use which?

- Use **`command`** for 99% of scripting scenarios. It ensures safety against hijacked functions/aliases while remaining portable across all platforms.
- Use **`builtin`** only when you want a hard guarantee that an external binary with the same name cannot be run under any circumstance. [link](https://www.reddit.com/r/commandline/comments/y5cpff/shell%5Fbuiltin%5Fvs%5Falias%5Fvs%5Fcommand%5Fin%5Fposix%5Ffind/)

If you are writing a script, would you like me to help you check its **shell portability** or optimize your **command execution path**?

- [link](https://www.reddit.com/r/commandline/comments/y5cpff/shell%5Fbuiltin%5Fvs%5Falias%5Fvs%5Fcommand%5Fin%5Fposix%5Ffind/)\
  Shell builtin vs alias vs command in POSIX find -exec - Reddit\
  Oct 16, 2022 — I want to code very defensively, so I want to make sure that -exec invokes the posix-specified ls utility; if the user accidentall...\
  Reddit·r/commandline
- [link](https://askubuntu.com/questions/445749/whats-the-difference-between-shell-builtin-and-shell-keyword)\
  What's the difference between shell builtin and shell keyword?\
  Apr 10, 2014 — Really, a builtin is like a command, except that it's built in the shell, whereas a keyword is something that allows for sophistic...\
  Ask Ubuntu
- [link](https://www.youtube.com/watch?v=FTXQVNydLHQ)\
  Unix Shell Builtins vs. External Commands - You Suck at ...\
  May 11, 2024 — yo what's up everyone my name is Dave and you suck at programming all right today we're going to demystify. running programs in Ba...\
  3:04\
  YouTube·You Suck at Programming

Show all

## quirks of command command

While the `command` utility is a highly reliable tool for bypassing shell functions and aliases, it possesses several unique traits, historically inconsistent behaviors, and specialized design patterns.

### 1. Dual-Purpose Utility Modes

The `command` tool alters its behavior based on the presence of the `-v` or `-V` flags:

- **Standard execution mode (`command utility`)**: Runs the utility while bypassing aliases and functions.
- **Lookup mode (`command -v utility` or `command -V utility`)**: Acts similarly to `which` or `type`, printing the execution path or an error without running the program.

### 2. POSIX-Mandated Exit Codes

The standard exit status for a failed execution differs from the lookup mode.

- When looking up a missing command (`command -v nonexistent`), it returns an exit status of `1`.
- If the command is found but fails during execution, it passes through that command's exit code.
- If `command` itself fails to invoke an executable due to a shell error, it returns a status between `126` (found but not executable) and `127` (not found).

### 3. Special Built-ins Alteration

In standard POSIX shells, certain utilities are classified as "Special Built-ins" (e.g., `set`, `export`, `eval`, `trap`, `unset`). These utilities exhibit unique properties:

- If a special built-in encounters a syntax or execution error, the entire shell script immediately exits.
- Variables prefixed to a special built-in (e.g., `LANG=C export VAR`) persist in the environment even after the command completes.

Prefixing a special built-in with `command` strip away these special properties. The shell treats it as a "Regular Built-in":

bash

```
# Regular behavior: This exits the entire script if it fails
set -invalid_flag

# Quirky alteration: Prefixing 'command' prevents the script from exiting on failure
command set -invalid_flag
```

Use code with caution.

### 4. Bypassing Functions but Respecting Built-ins

A common point of confusion is how `command` prioritizes lookups. While it suppresses shell functions and aliases, it still executes **shell built-ins** before looking at your system path `$PATH`.

bash

```
# If you have an external binary named 'cd' at /usr/bin/cd,
# this will STILL run the internal shell built-in 'cd', not the file on disk.
command cd /tmp
```

Use code with caution.

To bypass a shell built-in entirely and force an external binary, you cannot use `command`. You must use the absolute path to the binary (e.g., `/bin/echo` instead of `command echo`).

### 5. `command -v` Is the Preferred `which` replacement

The external utility `which` is notorious for inconsistent behavior across different Unix flavors and Linux distributions. POSIX explicitly standardized `command -v` as the uniform, portable way to check if a command exists in a shell script.

bash

```
# Portable way to check if an executable exists
if command -v git >/dev/null 2>&1; then
    echo "Git is installed"
fi
```

Use code with caution.

### 6. Subshell Behavior and Aliases

Because aliases are expanded when a command string is read rather than executed, using `command` inside a dynamically evaluated string can yield mixed results depending on the shell environment settings (`shopt -s expand_aliases`).

If you are dealing with a complex script, I can help you **debug an unexpected exit code** or write a **cross-platform command validation block**. How would you like to proceed?

- [link](https://www.cs.unc.edu/~stotts/GOF/hires/pat5bfs.htm)\
  Command\
  How intelligent should a command be? A command can have a wide range of abilities. At one extreme it merely defines a binding betw...\
  \
  \
  UNC Computer Science
- [link](https://learn.microsoft.com/en-us/archive/msdn-magazine/2004/september/distributed-system-design-using-command-pattern-msmq-and-net)\
  Distributed System Design using Command Pattern, MSMQ, and .NET\
  Oct 10, 2019 — The distributed command system discussed here is the combination of reliable messaging, services, and the Command pattern. While m...\
  \
  \
  Microsoft Learn
- [link](https://askubuntu.com/questions/512770/what-is-the-bash-command-command)\
  What is the bash command: \`command\`?\
  Aug 18, 2014 — This is built-in command of the Bash shell. The only advantage I see with this built-in is summarized in the following sentence of...\
  \
  \
  Ask Ubuntu

Show all

## why command cd fails

The command `command cd` fails or behaves unexpectedly due to one of two main reasons, depending on **how** it is failing in your specific environment:

### Reason 1: It cannot change your current terminal's directory

A child process cannot alter the working directory of its parent process. Because of this rule:

- If you run a standalone binary named `cd` (usually found at `/usr/bin/cd` on some Unix systems), it executes in a **separate child process**.
- That process changes _its own_ directory, finishes instantly, and returns you to your shell.
- Your interactive terminal prompt remains exactly where it started, making it look like the command failed to do anything.

### Reason 2: You are running it in a strict POSIX environment

If your script or terminal environment strictly adheres to the POSIX standard, using `command` on a **Special Built-in** (like `cd`) is undefined or prohibited by some shells.

- The POSIX standard allows shells to fail or throw an error if you prefix a special built-in with `command`.
- In these environments, you will get an explicit error message like `command: cd: not found` or `command: builtin not found`.

***

### How to Fix It

Depending on what you are trying to achieve, use one of these two alternatives:

#### 1. To bypass a custom `cd` function safely

If you wrote a custom `cd()` wrapper function and need to call the real internal shell utility without creating a recursive loop, use `builtin`:

bash

```
# This forces the shell to use its internal, in-process directory changer
builtin cd /path/to/dir
```

Use code with caution.

#### 2. To change directories in a portable script

If you are writing a portable script (`#!/bin/sh`) where `builtin` is not available, do not use `command cd`. Simply invoke `cd` directly, ensuring you have cleared or avoided defining any conflicting functions named `cd`:

bash

```
# Standard, portable way to change directories
cd /path/to/dir || exit 1
```

Use code with caution.

Are you seeing a **specific error message** when it fails, or is the directory just **failing to change**? Tell me what shell you are using (e.g., **Bash, Zsh, Dash**), and I can help you fix the exact line of code.

- [link](https://www.shellcheck.net/wiki/SC2103)\
  SC2103 – Use a \`( subshell )\` to avoid having to \`cd\` back.\
  Use a ( subshell ) to avoid having to cd back. Rationale: When doing cd dir; somestuff; cd .. , cd dir can fail when permissions a...\
  \
  ShellCheck
- [link](https://pq.hosting/en/help/cd-command-linux-change-directory)\
  The cd Command in Linux: Everything You Need to Know\
  Feb 24, 2026 — cd does not persist in scripts In bash scripts, cd only changes the directory for the current process. Calling a script as a child...\
  \
  \
  PQ.Hosting
- [link](https://www.reddit.com/r/learnprogramming/comments/2cdq5w/c%5Fafter%5Fimplementing%5Fmy%5Fown%5Fshell%5Fusing%5Ffork%5Fand/)\
  \[C] After implementing my own shell, using fork() and exec(), why do all commands work except for cd? : r/learnprogramming\
  Aug 2, 2014 — Okay, let's pretend I said "any modern Unix system", where modern is defined as anything in the last 40 years. It's still cool to ...\
  \
  Reddit

Show all

## why command cd fails and says command not found

When you type `command cd` and get a **`command not found`** error, it is due to a strict syntax limitation in POSIX-compliant shells (like Dash, which runs `/bin/sh` on Ubuntu/Debian) regarding how they handle **Special Built-ins**. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)

The exact technical reasons for this behavior break down as follows:

### 1. `cd` is a POSIX "Special Built-in"

In the POSIX shell standard, a small group of critical utilities—including `cd`, `set`, `export`, `eval`, and `unset`—are classified as **Special Built-ins**. They are not regular commands; they are hardcoded structures that modify the execution state of the shell itself. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)

### 2. Strict POSIX Shells Disable `command` for Special Built-ins

According to the official [POSIX Shell Specifications](https://unix.stackexchange.com/questions/651980/difference-between-command-command-vs-command-builtin-in-shell-scripting), the `command` utility is explicitly designed to look up **regular built-ins** and **external binaries** on your disk while skipping functions.

Because `cd` is a _Special_ Built-in, strict POSIX shells like **Dash** (`/bin/sh`) will refuse to process it through the `command` tool. The shell looks at its internal regular built-ins, looks at your `$PATH` directories, finds no executable binary file named `cd`, and throws the `command not found` error. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)

_(Note: Advanced shells like **Bash** and **Zsh** deliberately break this strict POSIX rule for convenience, allowing `command cd` to work internally. You only see this error when running in a strict `/bin/sh` environment)._

***

### How to Fix It

#### Solution A: Use `builtin` (For Bash or Zsh scripts)

If you are writing a script for Bash or Zsh and want to bypass a custom `cd` function, use the `builtin` tool instead of `command`.

bash

```
# Safely runs the internal shell tool, avoiding function loops
builtin cd /path/to/directory
```

Use code with caution.

#### Solution B: Invoke `cd` directly (For Portable `/bin/sh` scripts)

If you are writing a highly portable POSIX script (`#!/bin/sh`), you cannot use `command cd` or `builtin cd` (as `builtin` does not exist in POSIX). You must call `cd` directly. To protect against malicious or poorly written user functions hijacking `cd`, explicitly unset the function first:

bash

```
#!/bin/sh

# Safely clear any user-defined cd functions in the script environment
unset -f cd

# Execute cd normally
cd /path/to/directory || exit 1
```

Use code with caution.

Are you seeing this error while **running a script** or typing **directly into the terminal**? Let me know which shell environment you are using, and I can help you patch the specific script file.

- [link](https://forums.raspberrypi.com/viewtopic.php?t=122400)\
  Raspberry Pi Forums\
  cd..: command not found - Raspberry Pi Forums\
  Mar 22, 2018 — cd..: command not found. Mon Oct 05, 2015 1:58 am. I'm just trying to learn the Linux command line commands. Typing cd.. gets the ...
- [link](https://serverfault.com/questions/207067/cd-in-linux-shell-script-returns-command-not-found)\
  Server Fault\
  "cd" in linux shell script returns "command not found!"\
  Nov 29, 2010 — If you're getting a "command not found" error when using the \`cd\` command in a Linux shell script, you can try these steps: \* Run ...
- [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)\
  Super User\
  Why won't "sudo cd" work? - Super User\
  Feb 3, 2011 — If your OS follows POSIX, then running sudo cd will cause the external command "cd" (usually located at /usr/bin/cd ) to execute i...

Show all

## why command cd fails and says command not found in zsh

In **Zsh**, typing `command cd` fails with a `command not found` error because <mark><strong>by default, Zsh's<span> </span><code dir="ltr">command</code><span> </span>utility only searches for external binary files, not shell built-ins</strong></mark>**.**

While Bash modifies the behavior of `command` to include shell built-ins, vanilla Zsh strictly adheres to a design where `command` is explicitly used to force the execution of an **external file** located on your `$PATH`. Because `cd` only exists as an internal shell utility and has no standalone binary executable file (like `/bin/cd`), Zsh searches your system, finds nothing, and throws the error. [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)

***

### How to Fix It in Zsh

#### Solution 1: Use `builtin cd` (Recommended)

If you have written a custom function wrapper for `cd` in your `.zshrc` and need to call the true, original tool without creating an infinite loop, use **`builtin`**. Zsh explicitly reserves `builtin` for internal shell commands. [link](https://forum.cursor.com/t/cd-function-definition-file-not-found-in-agent-shell-zsh-breaks-any-command-using-cd/143707/4)

zsh

```
# Correct way to bypass a function in Zsh
builtin cd /path/to/directory
```

Use code with caution.

#### Solution 2: Enable POSIX Built-ins Option

If you are porting a script written for Bash and absolutely _must_ use the `command cd` syntax without changing the code, you can force Zsh to mimic Bash's behavior by enabling the `POSIX_BUILTINS` option.

zsh

```
# Tell Zsh to include built-ins in 'command' lookups
setopt POSIX_BUILTINS

# This will now work without error
command cd /path/to/directory
```

Use code with caution.

Are you seeing this error while trying to **write a specific `cd` wrapper function** or while **running a script you downloaded**? Share the snippet of code you are working with, and I can help you format it perfectly for Zsh.

- [link](https://superuser.com/questions/241129/why-wont-sudo-cd-work)\
  Super User\
  Why won't "sudo cd" work?\
  Feb 3, 2011 — There are two reasons why "sudo cd" might not work: \* \*\*Your computer can't find the executable named "cd"\*\* In this case, you'll ...
- [link](https://forum.cursor.com/t/cd-function-definition-file-not-found-in-agent-shell-zsh-breaks-any-command-using-cd/143707/4)\
  Cursor - Community Forum\
  function definition file not found\` in agent shell (zsh) breaks ...\
  Nov 22, 2025 — \`cd: function definition file not found\` in agent shell (zsh) breaks any command using cd. ... Thanks for confirming. Unfortunatel...
- [link](https://zsh.org/mla/workers/2024/msg00100.html)\
  Zsh.org\
  Re: command cd doesn't work on some builds of zsh\
  By default, with it off, "command" doesn't apply to builtins --- you'd need to use "builtin cd" in vanilla zsh to ensure it was ru...

Show all

# zsh quirks

While Zsh is an incredibly powerful shell, migrating to it from Bash or writing scripts for it reveals several unique behaviors and "quirks."

### 1. Array Indexing Starts at 1

Unlike almost every major programming language and standard Bash, **Zsh arrays are 1-indexed** by default. [link](https://lucasthinnes.medium.com/intro-to-scripting-and-automation-in-bash-zsh-3c689a7c8686)

- **Bash:** `my_array=(a b c); echo ${my_array[0]}` outputs `a`.
- **Zsh:** `my_array=(a b c); echo ${my_array[1]}` outputs `a`.

_How to fix:_ If you need Bash-like behavior for compatibility, enable the `KSH_ARRAYS` option:

zsh

```
setopt KSH_ARRAYS
```

Use code with caution.

### 2. No Word Splitting by Default

In Bash, unquoted variables undergo word splitting. In Zsh, **variables do not split on spaces** unless you explicitly tell them to.

- **Bash:** `var="hello world"; ls $var` attempts to look for two separate files: `hello` and `world`.
- **Zsh:** `var="hello world"; ls $var` looks for a single file named `hello world`.

_How to force splitting:_ Use the `=${var}` syntax or turn on the `SH_WORD_SPLIT` option:

zsh

```
# Force splitting for a single command
ls ${=var}
```

Use code with caution.

### 3. Strict Globbing ("No Matches Found" Error)

If a file globbing pattern doesn’t find a match, Zsh throws an error and **blocks the entire command from running**. Bash, by contrast, simply passes the literal string (like `*.txt`) to the command. This frequently breaks URLs containing question marks or ampersands. [link](https://www.reddit.com/r/commandline/comments/1e333p2/the%5Fzsh%5Fshell%5Ftricks%5Fi%5Fwish%5Fid%5Fknown%5Fearlier/)

zsh

```
# This will crash in Zsh if no match is found, or if it sees '?' as a glob wildcard
curl https://example.com
# Result: zsh: no matches found
```

Use code with caution.

_How to fix:_ Wrap URLs in single quotes, or use the `noglob` modifier: [link](https://www.reddit.com/r/commandline/comments/1e333p2/the%5Fzsh%5Fshell%5Ftricks%5Fi%5Fwish%5Fid%5Fknown%5Fearlier/)

zsh

```
noglob curl https://example.com
```

Use code with caution.

### 4. Shared and Extended History

Zsh handles your command line history aggressively. By default (or via frameworks like Oh My Zsh), it shares history across all open terminal tabs immediately. If you run a command in tab A, pressing "Up" in tab B will immediately surface it. [link](https://forum.endeavouros.com/t/terminal-shell-tweaks-zsh/20189)

Additionally, Zsh uses an extended history format that records **the precise timestamps and execution duration** of commands.

### 5. Automated "cd"

You don't actually need to type `cd` to navigate directories in Zsh. If you type a valid directory path directly into the prompt and hit enter, Zsh will automatically navigate into it. [link](https://dev.to/twilio/zsh-tricks-to-blow-your-mind-291f)

zsh

```
user@computer % /var/log
user@computer /var/log %
```

Use code with caution.

### 6. The `PROMPT` vs `RPROMPT` Layout

Zsh natively splits the command prompt layout. It allows a standard `PROMPT` on the left side of the terminal screen and an `RPROMPT` (Right Prompt) on the exact same line aligned to the far right. The right prompt is highly adaptive; it **automatically disappears** if your command entry grows long enough to bump into it.

***

Would you like help **fixing a specific script** that broke during a Bash-to-Zsh migration, or would you like to explore **customizing your Zsh configuration file (`.zshrc`)**? [link](https://thenybble.de/posts/stupid-zsh-tricks/)

- [link](https://www.reddit.com/r/zsh/comments/1e33472/the%5Fzsh%5Fshell%5Ftricks%5Fi%5Fwish%5Fid%5Fknown%5Fearlier/)\
  The Zsh Shell Tricks I Wish I'd Known Earlier - Reddit\
  Jul 14, 2024 — Stop letting your shell hold you back. I created a ZSH config that has ~20ms lag. with all the modern features. r/zsh - Stop letti...\
  Reddit·r/zsh
- [link](https://lucasthinnes.medium.com/intro-to-scripting-and-automation-in-bash-zsh-3c689a7c8686)\
  Intro to Scripting and Automation in BASH/ZSH - Lucas Thinnes\
  Sep 8, 2021 — Get Lucas Thinnes's stories in your inbox. Join Medium for free to get updates from this writer. The syntax should look fairly fam...\
  Medium·Lucas Thinnes
- [link](https://www.reddit.com/r/commandline/comments/1e333p2/the%5Fzsh%5Fshell%5Ftricks%5Fi%5Fwish%5Fid%5Fknown%5Fearlier/)\
  r/commandline on Reddit: The Zsh Shell Tricks I Wish I'd Known Earlier\
  Jul 14, 2024 — Comments Section \* maratc. • 2y ago. There certainly should be some way to share these tricks in text format?.. piotr1215. 2y ago.\
  Reddit·r/commandline

Show all

# what will happen after setopt POSIX\_BUILTINS in zsh

Running `setopt POSIX_BUILTINS` forces **Zsh to alter the behavior of its built-in commands to strictly comply with POSIX standards**, heavily suppressing standard Zsh-specific features.

The most critical changes that happen immediately after executing this command include:

### 1. Precommand Modifiers Change Behavior

The `command` precommand modifier is completely altered. [link](https://www.mankier.com/1/zshbuiltins)

- Normally, running `command my_cmd` tells Zsh to ignore shell functions and look only for built-ins or external binaries.
- Under `POSIX_BUILTINS`, `command` is **never interpreted as a shell built-in or function**. It will forcefully look _only_ for external binaries found in your command path (`$PATH`).
- Other precommand modifiers like `builtin` and `noglob` will no longer be interpreted inside `command`. [link](https://www.mankier.com/1/zshbuiltins)

### 2. "Special" Built-ins Fail Progressively

POSIX categorizes certain built-ins as "Special Built-ins" (such as `export`, `readonly`, `set`, `unset`, `eval`, `trap`, and `.`). Under POSIX standards, if any of these commands encounter an error, **the entire shell script immediately aborts and exits** rather than continuing to the next line.

### 3. Built-in Scoping Changes

The behavior of variable assignments preceding POSIX special built-ins becomes permanent.

- Normally in Zsh, running `VAR=value my_builtin` only applies `VAR` to that specific command's environment.
- With `POSIX_BUILTINS` active, variable assignments preceding special built-ins **persist in the current shell environment** even after the command finishes executing.

### 4. Suppression of Zsh Extensions

Many Zsh-exclusive enhancements or flags attached to built-in commands are suppressed or disabled to ensure that scripts written for pure POSIX shells (like `sh`) run predictably without accidental interference from Zsh extensions. [link](https://manpages.ubuntu.com/manpages/focal/man1/zshbuiltins.1.html)

***

If you are trying to write or run a standard POSIX shell script, a cleaner alternative to changing options manually is using the native emulation tool at the top of your script or function: [link](https://zsh.sourceforge.io/FAQ/zshfaq02.html)

zsh

```
emulate sh
```

Use code with caution.

This automatically handles `POSIX_BUILTINS` along with all other required configuration options seamlessly. [link](https://zsh.sourceforge.io/FAQ/zshfaq02.html)

Are you debugging a **specific script error** or attempting to make a **Zsh function portable**? Let me know what you are building so I can provide the exact configuration you need.

- [link](https://zsh.sourceforge.io/FAQ/zshfaq02.html)\
  Chapter 2: How does zsh differ from...?\
  I have based this on the 11/16/88f version of ksh; differences from ksh93 will be more substantial. As a summary of the status: be...\
  SourceForge
- [link](https://www.mankier.com/1/zshbuiltins)\
  zshbuiltins: zsh built-in commands | Man Page - ManKier\
  If the option POSIX\_BUILTINS is set, command is never interpreted as a shell builtin command or shell function. This means further...\
  ManKier
- [link](https://manpages.ubuntu.com/manpages/focal/man1/zshbuiltins.1.html)\
  zshbuiltins - zsh built-in commands - Ubuntu Manpages\
  If the POSIX\_BUILTINS option is set, builtins will also be executed but certain special properties of them are suppressed. The -p ...\
  Ubuntu

Show all

# what does setopt POSIX\_BUILTINS in zsh change

The `setopt POSIX_BUILTINS` option forces **Zsh** to alter the behavior of its built-in commands and functions to strictly adhere to the **POSIX standard**. By default, Zsh prioritizes usability, which violates specific POSIX rules required by standard `sh` and `bash` scripts. [link](https://zsh.sourceforge.io/Doc/Release/Options.html)

Enabling this option introduces the following technical changes:

### 1. Persistent Variable Assignments

- **Native Zsh:** Temporary assignments preceding a function or special builtin disappear after execution (e.g., `VAR=value my_func`).
- **With `POSIX_BUILTINS`:** Variable assignments specified before shell functions and special builtins (like `export`, `readonly`, `set`, `shift`) **remain in the shell environment** after the command finishes. [link](https://zsh.sourceforge.io/Doc/Release/Options.html)

### 2. `command` Precommand Behavior

- **Native Zsh:** The `command` modifier allows bypassing functions to invoke either a built-in command or an external binary.
- **With `POSIX_BUILTINS`:** The `command` modifier **never** interprets a target as a shell builtin or shell function. It strictly searches the environment's `PATH` for an external executable. It also prevents downstream modifiers like `builtin` and `noglob` from being evaluated. [link](https://www.mankier.com/1/zshbuiltins)

### 3. Global `OPTIND` Scoping for `getopts`

- **Native Zsh:** The option tracking index variable `OPTIND` automatically resets to `1` when entering a shell function and restores when exiting.
- **With `POSIX_BUILTINS`:** This automatic local resetting is **disabled**. `OPTIND` behaves as a single global index across the entire runtime execution path to mirror other shells. [link](https://manpages.ubuntu.com/manpages/focal/man1/zshbuiltins.1.html)

### 4. Parameter Handling for `export` and `readonly`

- **Native Zsh:** Commands like `export -p` or `readonly -p` will print definitions even if you try to pass extra operands alongside the flag.
- **With `POSIX_BUILTINS`:** The `-p` option is **completely ignored** if any additional operands/variables are supplied to the command. [link](https://sourceforge.net/p/zsh/code/ci/master/tree/)

### 5. Command Errors Can Terminate Scripts

- **Native Zsh:** Syntax or execution failures inside standard built-in utilities generally report an error to `stderr` but allow interactive processing or script parsing to continue.
- **With `POSIX_BUILTINS`:** An error in a POSIX "special builtin" (such as `exec`, `exit`, `eval`, or `trap`) acts as a fatal exception that **immediately exits a non-interactive shell script**.

***

If you are writing or debugging a specific script, would you like me to help you **translate Zsh syntax** to POSIX-compliant syntax, or check if your script **runs correctly in `sh` emulation mode**?

- [link](https://zsh.sourceforge.io/Doc/Release/Options.html)\
  16 Options - ZSH\
  For compatibility with previous versions of the shell, emulations use NO\_FUNCTION\_ARGZERO instead of POSIX\_ARGZERO , which may res...\
  SourceForge
- [link](https://man.archlinux.org/man/zshall.1.en)\
  zshall(1) - Arch manual pages\
  DESCRIPTION. Zsh is a UNIX command interpreter (shell) usable as an interactive login shell and as a shell script command processo...\
  Arch manual pages
- [link](https://sourceforge.net/p/zsh/code/ci/master/tree/)\
  zsh / Code / \[621038] - SourceForge\
  See NEWS. emulate sh: When zsh emulates sh, the final command in a pipeline is now run in a subshell. This differs from the behavi...\
  SourceForge

Show all

## how does it feel w or wo it

Using `setopt POSIX_BUILTINS` completely changes the "vibe" of writing and running scripts in Zsh, shifting it from a friendly modern environment to a strict legacy environment.

### Without It (The Native Zsh Experience)

- **Feels forgiving:** Errors in built-in commands do not randomly crash your entire script.
- **Feels intuitive:** Variables that you place in front of a function modify _only_ that function, leaving your main script clean.
- **Feels isolated:** Functions automatically manage their own loop options (`OPTIND`), so they do not break other functions.

### With It (The POSIX Compliance Experience)

- **Feels rigid:** The shell behaves exactly like standard `/bin/sh` or strict `bash`.
- **Feels hazardous:** A single minor typo in a command like `eval` or `trap` will instantly kill your running script.
- **Feels manual:** You must constantly use `local OPTIND` inside functions to prevent global variable pollution.

### When to Use Which

- **Keep it off:** For personal interactive terminal use, modern CLI tools, and daily Zsh scripting.
- **Turn it on:** Only when you are forced to debug a legacy cross-platform shell script that must run identically on Linux, macOS, and BSD systems.

If you are currently troubleshooting a script, let me know if you want to **fix an unexpected crash** or **force a script to be portable**.

## what will not work w or wo it

Here is exactly what breaks depending on whether you have `POSIX_BUILTINS` turned on or off.

### What breaks WITH it (Fails under POSIX rules)

- **Temporary function overrides:**\
  bash

<!---->

```
# Native Zsh: Works (Changes USERNAME only for my_func)
# With POSIX_BUILTINS: FAILS (Changes USERNAME globally for the whole script)
USERNAME="guest" my_func
```

Use code with caution.

- **Builtin command execution via `command`:**\
  bash

<!---->

```
# Native Zsh: Works (Runs the built-in 'cd' command directly)
# With POSIX_BUILTINS: FAILS (Looks for an external file named 'cd' in PATH and crashes)
command cd /tmp
```

Use code with caution.

- **Nested `getopts` functions:**\
  bash

<!---->

```
# Native Zsh: Works (Each function loops correctly)
# With POSIX_BUILTINS: FAILS (The second function breaks because OPTIND is globally messed up)
func_one -a
func_two -b
```

Use code with caution.

- **Lazy `export` checks:**\
  bash

<!---->

```
# Native Zsh: Works (Prints all exports and modifies MYVAR)
# With POSIX_BUILTINS: FAILS (Silently ignores the '-p' flag and only modifies MYVAR)
export -p MYVAR="value"
```

Use code with caution.

### What breaks WITHOUT it (Fails under Native Zsh rules)

- **Strict POSIX exit-on-error scripts:**\
  bash

<!---->

```
# POSIX Shells: Script exits immediately on the bad eval line
# Native Zsh: FAILS to exit (Prints error, but continues executing 'echo "Surprise!"')
eval "invalid syntax {"
echo "Surprise! The script is still running."
```

Use code with caution.

- **Standard `/bin/sh` wrapper scripts:**\
  bash

<!---->

```
# POSIX Shells: Expect variable side-effects to persist
# Native Zsh: FAILS (The change to MYVAR is lost after the special builtin runs)
MYVAR="new_value" export MYVAR
echo $MYVAR
```

Use code with caution.

***

If you are dealing with a script right now, let me know if you want to **debug a script that won't exit on error** or **fix a variable that keeps losing its value**.

## search and correct your answer. what will not work w or wo it.

10 sites

Here are top web results for exploring this topic:

[link](https://www.zsh.org/mla/workers//2015/msg00811.html)

Zsh.org·https://www.zsh.org

Re: question about **posixbuiltins** - **Zsh**

But looks like the parameter assignment before "command special-builtin" > > is kept even though POSIX\_BUILTINS has been set > > Indeed I can confirm, it appears this either was never working or has been > broken by some recent change. (Moved to zsh-workers.) I can believe it was never working --- the logic is horrifically tortuous. I've rewritten it to try to make sense of it. The compiler will be grateful ... I don't really understand the non-POSIX\_BUILTINS case, but unless my brain has totally failed to cope it's the same logic it's always been. pws diff --git a/Src/exec.c b/Src/exec.c index 1a6149a..2ee37d0 100644 --- a/Src/exec.c +++ b/Src/exec.c @@ -3384,14 +3384,28 @@ execcmd(Estate state, int input, ...

[link](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)

SourceForge·https://zsh.sourceforge.io

17 Shell Builtin Commands (**zsh**)

The exit status is nonzero if a name (with no value ) is given for which no alias has been defined. For more on aliases, include common problems, see Aliasing. autoload \[ { + | - } RTUXdkmrtWz ] \[ -w ] \[ name ... ] ¶. See the section 'Autoloading Functions' in Functions for full details. The fpath parameter will be searched to find the function definition when the function is first referenced. If name consists of an absolute path, the function is defined to load from the file given (searching as usual for dump files in the given location). The name of the function is the basename (non-directory part) of the file. It is normally an error if the function is not found in the given location; however, ...

[link](https://docs.jade.fyi/zsh/)

docs.jade.fyi·https://docs.jade.fyi/zsh/

**zsh** - Docs

composing characters not found on the keyboard. match-words-by-style. configuring what the line editor considers a word when moving or deleting by word. history-beginning-search-backward-end , etc. alternative ways of searching the shell history. replace-string , replace-pattern. functions for replacing strings or patterns globally in the command line. edit-command-line. edit the command line with an external editor. See ZLE Functions for descriptions of these. 3.3 Options ¶. The shell has a large number of options for changing its behaviour. These cover all aspects of the shell; browsing the full documentation is the only good way to become acquainted with the many possibilities. See Options.

[link](https://stackoverflow.com/questions/65155548/why-does-sh-interpret-these-commands-differently-to-zsh)

Stack Overflow·https://stackoverflow.com

Why **does** sh interpret these commands differently to **zsh**?

Highest score (default), Trending (recent votes count more), Date modified (newest first), Date created (oldest first). This answer is useful. 5. This answer is not useful. Save this answer. Loading when this answer was accepted… Show activity on this post. Why does sh interpret these commands differently to zsh? Because they are different shell the rules are different. Which command causes the issues? echo $cmd. and. echo $names. Is it not POSIX compliant? The code, by itself, is valid POSIX code. The behavior of zsh shell that doesn't do word splitting is not compliant with POSIX. In POSIX shell unquoted expansions undergo word splitting. Because default IFS is space tab and newline, these characters are ...

[link](https://linux.die.net/man/1/zshbuiltins)

Die.net·https://linux.die.net

**zshbuiltins**(1): **zsh** built-in commands - Linux man page

If the -s option is specified, cd refuses to change the current directory if the given pathname contains symlinks. If the -P option is given or the CHASE\_LINKS option is set, symbolic links are resolved to their true values. If the -L option is given symbolic links are retained in the directory (and not resolved) regardless of the state of the CHASE\_LINKS option. chdir. Same as cd. clone. See the section 'The zsh/clone Module' in zshmodules(1). command \[ -pvV ] simple command: The simple command argument is taken as an external command instead of a function or builtin and is executed. If the POSIX\_BUILTINS option is set, builtins will also be executed but certain special properties of them are suppressed.

[link](https://superuser.com/questions/1563825/is-there-a-zsh-equivalent-to-the-bash-help-builtin)

Super User·https://superuser.com

Is there a **zsh** equivalent to the bash \`help\` builtin? - Super User

tldr; man; curl cheat.sh; the input with --help. obv running the input directly could be bad... also the last option won't run if the curl is able to complete, even if cheat.sh doesn't have the topic. Share. Share a link to this answer. Copy link. CC BY-SA 4.0. Short permalink to this answer. Improve this answer. Follow. Follow this answer to receive notifications. edited Dec 3, 2025 at 11:56. answered Dec 3, 2025 at 2:43. DOSLuke's user avatar. DOSLuke. 1122 bronze badges. Add a comment |. This answer is useful. -4. This answer is not useful. Save this answer. Loading when this answer was accepted… Show activity on this post. Append this in your ~/.zshrc file. function help(){ bash -c "help $@" }.

[link](https://unix.stackexchange.com/questions/728809/how-does-the-zsh-which-builtin-work)

Unix & Linux Stack Exchange·https://unix.stackexchange.com

How **does** the **zsh** which builtin **work**? - Unix & Linux Stack Exchange

14366 bronze badges. 3. A partial answer to my own question; sourcing the config and then executing the command seems to work: :r !zsh -c "source $HOME/.zshrc; which texsed". Utku Boduroglu. – Utku Boduroglu. 2022-12-17 17:36:37 +00:00. Commented Dec 17, 2022 at 17:36. 3. Both of those are non-interactive invocations of zsh - I don't remember the rules for zsh, but it's possible it simply doesn't load your zshrc for non-interactive usage. muru. – muru. 2022-12-17 17:44:32 +00:00. Commented Dec 17, 2022 at 17:44. Dingdingding: @muru is right, as man zsh confirms: if the shell is interactive, commands are read from /etc/zshrc and then $ZDOTDIR/.zshrc; muru, would you post that as a quick answer? Marcus Müller.

[link](https://manpages.ubuntu.com/manpages/focal/man1/zshbuiltins.1.html)

Ubuntu·https://manpages.ubuntu.com

zshbuiltins - **zsh** built-in commands - Ubuntu Manpages

If the -s option is specified, cd refuses to change the current directory if the given pathname contains symlinks. If the -P option is given or the CHASE\_LINKS option is set, symbolic links are resolved to their true values. If the -L option is given symbolic links are retained in the directory (and not resolved) regardless of the state of the CHASE\_LINKS option. chdir: Same as cd. clone: See the section \`The zsh/clone Module' in zshmodules(1). command \[ -pvV ] simple command: The simple command argument is taken as an external command instead of a function or builtin and is executed. If the POSIX\_BUILTINS option is set, builtins will also be executed but certain special properties of them are suppressed.

[link](https://hynek.me/til/which-not-posix/)

Hynek Schlawack·https://hynek.me

TIL: which is **not** POSIX - Hynek Schlawack

Recent Debian turmoil taught me that I can't take neither the existence nor the shape of the command for granted on UNIX-like OSes, because it was never part of the POSIX (or any other AFAIK) standard. TL;DR: If you want to be on the safe side, don't rely on which to find the location of an executable. ... Pertinent to this post, though, is its option -v that doesn't run the command, but takes a list of names and tells you how the shell would interpret each name, if you'd run it without “wrapping” it with command : $ command -v ls ll if echo /bin/ls alias ll='ls -l' if echo. As you can see, although the main purpose of command is to literally execute a command and ignore functions and aliases, ...

[link](https://unix.stackexchange.com/questions/282645/how-can-i-get-a-help-message-for-zsh-builtins)

Unix & Linux Stack Exchange·https://unix.stackexchange.com

How can I get a help message for **zsh** builtins?

zsh --version => zsh 5.1.1 (x86\_64-ubuntu-linux-gnu). so to get it to work, I added the below block to ~/.zshrc , then commented out the alias command. autoload -Uz run-help autoload -Uz run-help-git autoload -Uz run-help-svn autoload -Uz run-help-svk unalias run-help # Removes the default alias run-help=man #alias help=run-help. and simply invoke with run-help . So now I get % run-help export export \[ name\[=value] ... ] The specified names are marked for automatic export to the envi- ronment of subsequently executed commands. Equivalent to type- set -gx. If a parameter specified does not already exist, it is created in the global scope. Share. Share a link to this answer. Copy link

## search and correct your answer. what will not work w or wo it.

Thank you for the reality check. I reviewed the official Zsh Shell Builtin Manual and caught two significant errors in my previous answer regarding how the `command` precommand modifier behaves. [link](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)

Here is the corrected, accurate breakdown of what will and will not work with or without `POSIX_BUILTINS`.

### 1. The `command` Modifier Behavior (Correction)

The official [Zsh Documentation](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html) clarifies that `exec` and `command` behave opposite to my previous description:

- **Without it (Native Zsh):** The `command` prefix strips away shell _functions_, but **still executes shell built-ins** (e.g., `command cd /tmp` works perfectly fine to bypass a custom `cd` function).
- **With it (`POSIX_BUILTINS` enabled):** The `command` prefix **never** interprets the target as a shell built-in or shell function. It completely suppresses them, forcing a strict search of the external `PATH`. [link](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)

> 🚫 **What breaks WITH it:** Running `command cd` or `command export` will fail entirely and look for a non-existent external binary on your system. [link](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)

### 2. Variable Scope Persistence

- **Without it (Native Zsh):** Pre-command assignments before shell _functions_ are temporary.
- **With it (`POSIX_BUILTINS` enabled):** Assignments before POSIX "special builtins" (like `export`, `readonly`, `set`, `eval`, `trap`) or shell functions remain in your environment permanently.

> 🚫 **What breaks WITHOUT it:** A standard POSIX script expecting `VAR="val" export VAR; echo $VAR` to permanently export `VAR` will fail to keep the value in native Zsh.
>
> 🚫 **What breaks WITH it:** Running `MY_ENV="prod" deploy_func` to temporarily test a function will accidentally overwrite your global `MY_ENV` variable for the rest of the script.

### 3. Strict Exit on Error

- **Without it (Native Zsh):** Syntax or runtime errors inside built-in tools (like a broken `eval` or `trap`) print an error but let the script keep running.
- **With it (`POSIX_BUILTINS` enabled):** Errors in POSIX special builtins are treated as fatal. [link](https://docs.jade.fyi/zsh/)

> 🚫 **What breaks WITHOUT it:** Error-handling paradigms like `set -e` may fail to catch syntax errors inside string evaluations (e.g., `eval "invalid {"`), letting a broken script unsafely proceed.

***

Are you trying to make a Zsh function safely emulate an external command, or do you have a script that is keeping variable values when it shouldn't? Let me know how you'd like to **refactor the code**!

- [link](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)\
  SourceForge\
  17 Shell Builtin Commands (zsh)\
  If command is a shell builtin command or a shell function, the shell executes it, and exits when the command is complete. With -c ...
- [link](https://docs.jade.fyi/zsh/)\
  docs.jade.fyi\
  zsh - Docs\
  ... matching within case statements; File generation failures where not caused by NO\_MATCH or similar options; All file generation...
- [link](https://www.reddit.com/r/zsh/comments/ztc3j0/setopt%5Finteractive%5Fcomments%5Fnot%5Fworking/)\
  Reddit·r/zsh\
  setopt interactive comments not working? : r/zsh - Reddit\
  Dec 23, 2022 — I have enabled interactive comments using \`setop interactivecomments\`, but now if I have a line that starts with a '#' it seems th...

Show all

## what will not work w or wo it

Here is exactly what breaks, fails, or changes behavior depending on whether you have `POSIX_BUILTINS` turned on or off.

### What breaks WITH it (Fails under POSIX rules)

- **Bypassing a custom function to run a standard shell builtin:**\
  bash

<!---->

```
# Native Zsh: Works (Runs the standard internal 'cd' command)
# With POSIX_BUILTINS: FAILS (Searches $PATH for an external file named 'cd' and errors out)
command cd /tmp
```

Use code with caution.\
_The [Zsh Manual](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html) states that when enabled, `command` is **never** interpreted as a shell builtin._

- **Temporary environment overrides for functions or special builtins:**\
  bash

<!---->

```
# Native Zsh: Works (Changes MY_VAR only for the execution duration of 'my_func')
# With POSIX_BUILTINS: FAILS (Permanently overwrites MY_VAR in the global environment)
MY_VAR="temp_value" my_func
```

Use code with caution.

- **Consecutive `getopts` calls across multiple functions:**\
  bash

<!---->

```
# Native Zsh: Works (OPTIND safely auto-resets when entering functions)
# With POSIX_BUILTINS: FAILS (OPTIND is global; subsequent option parsing breaks entirely)
parse_opts_func_one "-a"
parse_opts_func_two "-b"
```

Use code with caution.

- **Listing definitions with trailing variables:**\
  bash

<!---->

```
# Native Zsh: Works (Prints out all readonly values and sets MY_VAR)
# With POSIX_BUILTINS: FAILS (Silently completely ignores the '-p' flag)
readonly -p MY_VAR="value"
```

Use code with caution.\
[link](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)

### What breaks WITHOUT it (Fails under Native Zsh rules)

- **Cross-platform `/bin/sh` wrapper scripts that expect persistent special builtin assignments:**\
  bash

<!---->

```
# POSIX Shells: Expect variable side-effects to stick after 'export'
# Native Zsh: FAILS (The change to MY_VAR disappears as soon as the line executes)
MY_VAR="new_value" export MY_VAR
echo $MY_VAR
```

Use code with caution.

- **Strict error-trapping (`set -e`) during critical builtin failures:**\
  bash

<!---->

```
# POSIX Shells: Script aborts instantly on a bad eval statement to prevent data corruption
# Native Zsh: FAILS to exit (Prints error to stderr but keeps executing 'rm -rf /data')
eval "invalid syntax {"
rm -rf /data
```

Use code with caution.\
_Without the option, Zsh lets non-interactive scripts lazily plow right through fatal syntax or execution errors found inside standard builtins like `eval`, `exec`, or `trap`._ [link](https://docs.jade.fyi/zsh/)

***

Are you trying to resolve an issue where **variables are leaking globally**, or are you writing a **portable script** that needs to function identically across macOS and Linux? Let me know how you would like to proceed with your code!

- [link](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)\
  SourceForge\
  17 Shell Builtin Commands (zsh)\
  If the option POSIX\_BUILTINS is set, command is never interpreted as a shell builtin command or shell function. This means further...
- [link](https://docs.jade.fyi/zsh/)\
  docs.jade.fyi\
  zsh - Docs\
  ... matching within case statements; File generation failures where not caused by NO\_MATCH or similar options; All file generation...
- [link](https://www.reddit.com/r/SillyTavernAI/comments/1o5xr9f/summarization%5Fplugin%5Fproblems/)\
  Reddit·r/SillyTavernAI\
  Summarization plugin problems : r/SillyTavernAI - Reddit\
  Oct 13, 2025 — Try switching to a different model and lowering the Temperature for summaries - you can set it to use a different connection profi...

## how to turn off exit on error when it's on

To turn off the "exit on error" behavior when `POSIX_BUILTINS` is active, you have two primary methods depending on what is triggering the exit.

### Method 1: Clear the `ERR_EXIT` (`-e`) flag

If your script is exiting due to a `set -e` or `setopt ERREXIT` command elsewhere in the code, disable it globally or locally:

- **Turn off globally:**\
  bash

<!---->

```
set +e
# or
unsetopt ERREXIT
```

Use code with caution.

- **Turn off temporarily (Subshell method):**\
  Wrap the risky command in parentheses. This runs it in a isolated subshell so it cannot crash the main script:\
  bash

<!---->

```
(eval "invalid syntax {") # Errors here won't kill the main script
```

Use code with caution.

### Method 2: Use Logical Operators (Inline Prevention)

Under POSIX rules, even special built-ins will **not** cause an exit if they are part of a conditional test. You can append `|| true` to the statement to force a successful exit code:

bash

```
# Prevents a fatal exit even if the syntax or command fails
eval "invalid syntax {" || true

# The script safely continues here
echo "Still running!"
```

Use code with caution.

***

Are you trying to bypass a failure in a specific **third-party script**, or do you need to safely **validate user-inputted code strings**? Let me know how you want to handle the errors!

## does setopt POSIX\_BUILTINS implicitly run set -e

**No**, `setopt POSIX_BUILTINS` does not implicitly turn on `set -e` (`ERREXIT`). They target completely different layers of error handling: [link](https://unix.stackexchange.com/questions/565158/command-substitution-does-not-respect-err-exit-sometimes)

- **`set -e` (`ERREXIT`):** Forces the shell to exit whenever _any general command or pipeline_ returns a non-zero exit status.
- **`setopt POSIX_BUILTINS`:** Governs only how the shell responds to specific syntax or execution failures inside **POSIX "special built-ins"** (such as `eval`, `exec`, `set`, or `trap`). [link](https://linux.die.net/man/1/zshoptions)

### How they interact

If an ordinary command fails (like a missing file error from `ls`), `POSIX_BUILTINS` will look past it and continue executing the script.

However, if a **special built-in** suffers an internal failure (like an invalid syntax error inside an `eval` string), `POSIX_BUILTINS` triggers an automatic script exit because the _POSIX specification dictates_ that special built-in errors are fatal. [link](https://www.zsh.org/mla/workers//2015/msg03337.html)

bash

```
setopt POSIX_BUILTINS # ERREXIT is still completely OFF here

ls /nonexistent_folder  # Returns exit code 2, but script continues!
echo "This line still prints."

eval "invalid syntax {" # Internal Special Builtin error! Fails here.
echo "This line will never print."
```

Use code with caution.

If you are experiencing unexpected script crashes, let me know if you want to **find out which command is triggering the exit** or **how to safely test errors** using conditional checks!

- [link](https://github.com/ohmyzsh/ohmyzsh/issues/6934)\
  GitHub\
  \_values:compvalues:10: not enough arguments · Issue #6934 ...\
  Jun 19, 2018 — Starting to see this error again, haven't seen it since 2014. It happens any time I try to tab complete a path inline with a comma...
- [link](https://linux.die.net/man/1/zshoptions)\
  Die.net\
  zshoptions(1): zsh options - Linux man page\
  For example, when running a command with 'zsh -c', or even 'zsh -o posixaliases -c', the entire command argument is parsed as one ...
- [link](https://www.zsh.org/mla/workers//2015/msg03337.html)\
  Zsh.org\
  \[BUG] 'command' + special built-in exits shell on error\
  Dec 23, 2015 — Special built-ins may cause the shell to exit on error. Sometimes this is inconvenient as you cannot test for errors without forki...

Show all

## how much does it matter

For **95% of users**, it does not matter at all. You can safely ignore it and leave it off.

It only matters significantly if you fall into one of two specific scenarios:

### When it matters a lot (Production & Portability)

- **Writing cross-shell scripts:** If you are writing a script in Zsh that _must_ run flawlessly on standard Linux (`/bin/sh`) or macOS environments without breaking, turning this on prevents you from accidentally using Zsh-specific behaviors that will break on other machines.
- **Legacy deployment:** If you are migrating old enterprise shell scripts to a modern Zsh environment, keeping this off will cause subtle bugs, such as variable values randomly disappearing after they are exported.

### When it doesn't matter (Everyday use)

- **Interactive terminal use:** If you are just typing commands in your terminal, custom themes, or using frameworks like Oh My Zsh, you should never turn this on. Doing so will break common shortcuts and plugins.
- **Pure Zsh scripting:** If your script explicitly starts with `#!/bin/zsh`, you do not need it. Native Zsh behaviors are cleaner, more forgiving, and more powerful.

***

Are you currently **building a script** that needs to distribute to other users, or are you **debugging an unexpected behavior** in your current terminal configuration? Let me know what you are working on!

## how much does it (the specific exit on error by setopt) matter, where

The specific exit-on-error behavior triggered by `setopt POSIX_BUILTINS` **only matters in non-interactive shell scripts**, and its impact depends heavily on **where** the error happens in your code execution pipeline.

It determines whether a single internal failure inside a foundational shell utility completely destroys a running script or just logs an error and moves on. [link](https://zsh.sourceforge.io/Doc/Release/Shell-Grammar.html)

***

### Where It Matters Most

#### 1. In Automated CI/CD Pipelines & Deployment Scripts

- **The Risk:** If you have a script deploying code to a server or building a production application, a bad `eval`, a broken `trap`, or an invalid `set` option will **force the entire runner to fail immediately**. [link](https://manpages.ubuntu.com/manpages/xenial/man1/zshoptions.1.html)
- **The Impact:** It acts as a safety kill-switch. It ensures your deployment completely aborts before executing later destructive steps (like syncing broken files or deleting directories).

#### 2. Inside Heavy Input-Parsing Loops (`eval` and `source`)

- **The Risk:** If your script reads an external `.env` file, evaluates string inputs via `eval`, or uses `source`/`.` to load third-party plug-ins:
  - **With it:** A single corrupted configuration line containing bad shell syntax (like an unclosed brace `{` or a mismatched quote) will **crash your entire main program**.
  - **Without it:** Zsh skips the broken line, prints a text warning to `stderr`, and finishes executing the rest of the script. [link](https://zsh.sourceforge.io/Doc/Release/Shell-Grammar.html)

#### 3. Error Handling and Recovery Blocks

- **The Risk:** If you purposely pass potentially bad commands to a builtin to test if they work:
  - **With it:** It breaks inline recovery. For example, testing an invalid option with `set -o bad_option || echo "failed"` won't work. The script will abort on the `set` command before it ever reaches the `|| echo` recovery logic. [link](https://www.zsh.org/mla/workers//2015/msg03337.html)

***

### Where It Matters the Least (Virtually Invisible)

#### 1. Your Interactive Shell Prompt (The Terminal)

It has **zero terminal-killing impact** when typing commands live in your terminal window. The [Zsh Documentation](https://zsh.sourceforge.io/Doc/Release/Shell-Grammar.html) states that in interactive mode, a fatal error in a special builtin simply aborts the current string and forcefully throws you back to your top-level command line. Your window won't close, and your session won't die. [link](https://zsh.sourceforge.io/Doc/Release/Shell-Grammar.html)

#### 2. General System Binaries & Commands

It does **not** matter when dealing with external commands like `git`, `curl`, `grep`, or `docker`. If an external command fails, `POSIX_BUILTINS` doesn't care. It **only** triggers an exit on errors originating _internally_ inside these specific built-ins:\
`.` (source), `:`, `break`, `continue`, `eval`, `exec`, `exit`, `export`, `readonly`, `return`, `set`, `shift`, `trap`, and `unset`. [link](https://manpages.ubuntu.com/manpages/xenial/man1/zshoptions.1.html)

***

### Summary Checklist

| Environment / Context                      | How much it matters       | Behavior                                         |
| ------------------------------------------ | ------------------------- | ------------------------------------------------ |
| **Interactive Terminal**                   | **0/10** (Doesn't matter) | Just resets your prompt; doesn't close terminal. |
| **Pure External Utilities (`ls`, `grep`)** | **0/10** (Doesn't matter) | Shell ignores failures completely.               |
| **Production Script + Typos in `eval`**    | **10/10** (Critical)      | Destroys your script execution immediately.      |
| \*\*Writing Fallback Logic (\`builtin      |                           | fix\`)\*\*                                       |

If you are trying to protect a specific automation script from crashing, let me know if you want to **wrap a dangerous section in a subshell** to containerize the errors!

- [link](https://zsh.sourceforge.io/Doc/Release/Shell-Grammar.html)\
  SourceForge\
  6 Shell Grammar (zsh)\
  Certain errors are treated as fatal by the shell: in an interactive shell, they cause control to return to the command line, and i...
- [link](https://manpages.ubuntu.com/manpages/xenial/man1/zshoptions.1.html)\
  Ubuntu Manpages\
  zshoptions - zsh options - Ubuntu Manpage Repository\
  Special builtins are ., :, break, continue, declare, eval, exit, export, integer, local, readonly, return, set, shift, source, tim...
- [link](https://www.zsh.org/mla/workers//2015/msg03337.html)\
  Zsh.org\
  \[BUG] 'command' + special built-in exits shell on error\
  Dec 23, 2015 — Special built-ins may cause the shell to exit on error. Sometimes this is inconvenient as you cannot test for errors without forki...

Show all

## does set +e after setopt POSIX\_BUILTINS in zsh matter if i only use a visible terminal

No, `set +e` after `setopt POSIX_BUILTINS` **does not matter at all** if you are only running commands directly in a visible terminal window.

Your terminal window will **never** close or crash from a builtin error, regardless of how you configure these two settings.

### Why it doesn't matter in a visible terminal

1. **Interactive Shell Protection**: Interactive terminals (the live prompt where you type) are intentionally designed by Zsh to be impossible to accidentally crash via standard command errors.
2. **The `POSIX_BUILTINS` Behavior**: If you make a syntax error inside a special builtin (like typing `eval "{"`), Zsh will print an error message to your screen, abort that specific command string, and immediately hand you back a fresh, working prompt.
3. **The `set -e` Behavior**: Even if you accidentally turned `set -e` on, Zsh explicitly disables terminal-exiting behavior in interactive mode so that typing a bad command (like `ls /fakefolder`) doesn't instantly close your application window.

### The exact terminal behavior matrix

If you are typing live into a terminal, here is exactly what happens with these settings combined:

| Setting Combination             | Typing a regular error (e.g., `ls /fake`) | Typing a special builtin error (e.g., `eval "{"`) |
| ------------------------------- | ----------------------------------------- | ------------------------------------------------- |
| **`POSIX_BUILTINS` + `set +e`** | Prints error. Prompt stays open.          | Prints error. Prompt stays open.                  |
| **`POSIX_BUILTINS` + `set -e`** | Prints error. Prompt stays open.          | Prints error. Prompt stays open.                  |

### When it actually starts to matter

The only time adding `set +e` alongside `POSIX_BUILTINS` matters is if you use your terminal to **execute an external script file** (e.g., `zsh my_script.sh`). Inside that non-interactive file environment, the rules flip completely, and a bad builtin _will_ kill the script's execution instantly unless handled.

Are you trying to clean up a custom `.zshrc` configuration file, or are you **debugging a tool or shortcut** that isn't running properly at your prompt? Let me know how you would like to proceed!

## search. does set +e after setopt POSIX\_BUILTINS in zsh matter if i only use a visible terminal

**No**, adding `set +e` after `setopt POSIX_BUILTINS` **does not matter or change anything** if you are typing directly into a visible interactive terminal window. [link](https://docs.jade.fyi/zsh/)

Your interactive terminal **cannot crash or close** from either of these flags, making the combination completely redundant in that specific setup.

### Why it doesn't change anything at your prompt

- **The `set +e` / `set -e` Reality:** In an interactive shell session, Zsh explicitly disables the terminal-killing property of `set -e`. If you type a failing command (like `ls /fake_path`), the shell will output the error and give you a new prompt—it never closes the window. Since `set -e` is already neutered at a live prompt, applying `set +e` changes nothing. [link](https://stackoverflow.com/questions/19622198/what-does-set-e-mean-in-a-bash-script)
- **The `POSIX_BUILTINS` Reality:** According to the official [Zsh Options Documentation](https://zsh.sourceforge.io/Doc/Release/Options.html), any critical runtime errors associated with POSIX special builtins (like a bad syntax error inside `eval "{"`) "cause a non-interactive shell to exit and an **interactive shell to return to its top-level processing**". [link](https://docs.jade.fyi/zsh/)

### Visual Terminal Behavior Map

If you are interacting directly with your shell prompt, this is exactly what happens when you create an error:

| Setting Combination                    | Typing a basic command error (e.g., `ls /fake`) | Typing a builtin syntax error (e.g., `eval "{"`) |
| -------------------------------------- | ----------------------------------------------- | ------------------------------------------------ |
| **`setopt POSIX_BUILTINS` + `set +e`** | Logs error. Fresh prompt.                       | Logs error. Resets back to fresh prompt.         |
| **`setopt POSIX_BUILTINS` + `set -e`** | Logs error. Fresh prompt.                       | Logs error. Resets back to fresh prompt.         |

### Summary

You can safely remove `set +e` from your terminal profiles (`.zshrc`) if your goal was to prevent your visual terminal windows from closing. It only holds structural weight when executing scripted automation task files via `zsh script.sh`. [link](https://docs.jade.fyi/zsh/)

Are you looking to clean up or optimize other legacy compatibility settings inside your **`.zshrc` file**, or are you fixing a **custom command shortcut**? Let me know what you are adjusting!

- [link](https://docs.jade.fyi/zsh/)\
  docs.jade.fyi\
  zsh - Docs\
  In addition, various error conditions associated with the above builtins or exec cause a non-interactive shell to exit and an inte...
- [link](https://man.freebsd.org/cgi/man.cgi?query=zshoptions\&sektion=1\&manpath=freebsd-release-ports)\
  FreeBSD Manual Pages\
  zshoptions(1) - FreeBSD Manual Pages\
  POSIX\_BUILTINS When this option is set the command builtin can be used to exe- cute shell builtin commands. Parameter assignments ...
- [link](https://www.reddit.com/r/zsh/comments/1j8cprw/set%5Foptions%5Fsetopt%5Fonly%5Ffor%5Fa%5Fspecific%5Fshell/)\
  Reddit·r/zsh\
  set options (setopt) only for a specific shell command : r/zsh\
  Mar 10, 2025 — Is there a way to set an option (setopt) for a particular shell command? For example, I want to disable brace expansion when using...

Show all

# zsh command cd quirk

The most famous "quirk" of the **Zsh `cd` command** is its ability to take **two arguments** to perform a string substitution on your current path. [link](https://zsh.sourceforge.io/Guide/zshguide03.html)

Instead of typing out a long path to switch to a parallel directory, you can give `cd` the string you want to change and the string you want to replace it with. [link](https://zsh.sourceforge.io/Guide/zshguide03.html)

### String Substitution Quirks

If you are currently inside `/Users/username/project-v1/src` and you want to jump to the exact same folder structure but in `project-v2`, you can type:

bash

```
cd v1 v2
```

Use code with caution.

Zsh will swap `v1` for `v2` and automatically move you to `/Users/username/project-v2/src`. [link](https://zsh.sourceforge.io/Guide/zshguide03.html)

- **The Catch:** It only replaces the **first** occurrence of the string. If you try to change `/home/user1/test/user1` to `/home/user2/test/user1` by typing `cd user1 user2`, it will change the first `user1` and work perfectly. If you meant to change the second one, it will break. [link](https://zsh.sourceforge.io/Guide/zshguide03.html)

***

### Other Useful Zsh `cd` Hidden Features

Zsh has several other built-in behaviors that feel like hidden quirks compared to standard Bash:

#### 1. Moving Without Typing `cd` (`AUTO_CD`)

You can configure Zsh so that simply typing a directory path (without the word `cd`) moves you into it. Many frameworks like Oh My Zsh enable this by default. [link](https://stackoverflow.com/questions/58359826/oh-my-zsh-behaviour-command-name-at-home-directory-results-in-cd-command)

- **How to enable it:** `setopt auto_cd`
- **Example:** Just type `../` or `~/Downloads` and press `Enter`. [link](https://zsh.sourceforge.io/Doc/Release/Options.html)

#### 2. The Directory Stack (`cd -` + Tab)

Typing `cd -` and pressing `Tab` doesn't just show the last directory—it opens a visual, navigable menu of your recent directory history. [link](https://stackoverflow.com/questions/3986760/cd-1-2-3-etc-in-z-shell)

- You can quickly jump back to a folder you visited 5 steps ago by typing `cd -5`.
- To make this track everything automatically, enable `setopt AUTO_PUSHD` in your `.zshrc` file. [link](https://stackoverflow.com/questions/3986760/cd-1-2-3-etc-in-z-shell)

#### 3. Searching for Folders Remotely (`cdpath`)

You can define a variable called `cdpath` in your `.zshrc`. If you type `cd my-folder`, Zsh will check your current location first. If it isn't there, it will automatically search the paths defined in your `cdpath`. [link](https://zsh.sourceforge.io/Intro/intro%5F13.html)

- **Example config:** `cdpath=(~ ~/Development ~/Projects)`
- If you are in your home directory and type `cd API`, it will successfully jump to `~/Development/API` without you needing to type the full path. [link](https://gist.github.com/MicahElliott/6427072)

Would you like help **setting up a specific alias** or debugging an **unexpected error** you ran into with `cd`?

- [link](https://zsh.sourceforge.io/Guide/zshguide03.html)\
  Chapter 3: Dealing with basic shell syntax - ZSH\
  Thirdly, there is a shortcut for changing between similarly named directories. If you type \` cd ', then the shell will look for th...\
  SourceForge
- [link](https://zsh.sourceforge.io/Doc/Release/Options.html)\
  16 Options - ZSH

16.2 Description of Options \* 1 Changing Directories. AUTO\_CD ( -J ) If a command is issued that can't be executed as a normal com...\
SourceForge

- [link](https://www.youtube.com/watch?v=45Yiq2q%5FhMA\&t=896)\
  The Zsh Shell Tricks I Wish I'd Known Earlier\
  Jul 14, 2024 — all right uh a little bit about directories navigation there ious plugins and programs um like Zoxite that you can use to make it.\
  1m\
  YouTube·Cloud-Native Corner

Show all

# zsh command command cd quirk

In Zsh, running the command `command cd` fails with a **`command not found: cd`** error because the `command` precommand modifier only searches for external executables in your `PATH`, whereas `cd` is strictly a shell builtin. [link](https://superuser.com/questions/1574499/what-is-the-zsh-equivalent-of-bashs-command-command)

Unlike Bash—where `command cd` bypasses functions and safely runs the builtin `cd`—Zsh expects you to use **`builtin cd`** instead. [link](https://superuser.com/questions/1574499/what-is-the-zsh-equivalent-of-bashs-command-command)

### Why This Quirk Happens

- **The `command` constraint**: In Zsh, the `command` prefix strips away both shell functions and shell builtins, searching exclusively for standalone executable binaries (like `/bin/ls` or `/usr/bin/git`). [link](https://superuser.com/questions/1574499/what-is-the-zsh-equivalent-of-bashs-command-command)
- **No external `cd` binary**: Because changing directories modifies the current shell environment, `cd` can never be an external binary; it must execute inside the active shell process. Thus, Zsh fails to find an external program named `cd`. [link](https://unix.stackexchange.com/questions/732670/zsh-cd-into-directory-without-full-path-name)

### How to Fix It

If you are writing a custom shell function or script and need to bypass a wrapper function or alias to use the raw, original `cd` command, swap your syntax to the following options:

#### Use `builtin` (Recommended)

This forces Zsh to bypass any custom `cd()` functions or aliases and directly triggers the underlying shell builtin. [link](https://superuser.com/questions/1574499/what-is-the-zsh-equivalent-of-bashs-command-command)

zsh

```
builtin cd "$@"
```

Use code with caution.

#### Use POSIX Mode (Alternative)

If you are looking to retain portability or need `command` to behave exactly like it does in Bash, you can temporarily enable POSIX compliance properties, or use the standard precommand slash escape to bypass aliases: [link](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)

zsh

```
\cd "$@"
```

Use code with caution.

If you are writing a script that needs to work seamlessly across both Bash and Zsh, using `builtin cd` is widely supported by both shells.

What **specific task** or **custom function** are you trying to build with `cd`? If you share your code snippet, I can help you format it to be fully compatible with Zsh!

- [link](https://superuser.com/questions/1574499/what-is-the-zsh-equivalent-of-bashs-command-command)\
  What is the zsh equivalent of bash's "command" command?\
  Aug 1, 2020 — In bash, you can use the command \`cd "$@",\` to use the \`cd\` command. However, \`command cd\` doesn't work in zsh. To get the origina...\
  Super User
- [link](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)\
  17 Shell Builtin Commands (zsh)\
  The second form of cd substitutes the string new for the string old in the name of the current directory, and tries to change to t...\
  SourceForge
- [link](https://unix.stackexchange.com/questions/732670/zsh-cd-into-directory-without-full-path-name)\
  ZSH -- cd into directory without full path name\
  Jan 22, 2023 — In any case, doing sudo cd as you mentioned in comment doesn't make sense. cd is a builtin command of the shell to change the work...\
  Unix & Linux Stack Exchange

Show all

## does command command cd work out of the box

No, running `command cd` does not work out of the box in Zsh.

It immediately fails with a **`command not found: cd`** error.

### Why It Fails Automatically

- **`command` blocks builtins**: In Zsh, the `command` prefix forces the shell to look _only_ for external executable files (like `/bin/ls`) inside your `$PATH`.
- **`cd` is not a file**: There is no physical file on your computer named `cd`. Changing directories requires modifying the active shell process directly, so `cd` can only exist as an internal shell builtin.
- **The conflict**: Because `command` demands an external file and `cd` is a builtin, Zsh cannot find a match and throws an error.

### The Contrast With Bash

If you are used to Bash, `command cd` _does_ work out of the box there. Bash allows the `command` prefix to invoke shell builtins while solely bypassing aliases and user-defined functions. Zsh strictly requires you to use **`builtin cd`** to achieve that exact same behavior.

Are you trying to fix an **existing script** that is throwing this error, or are you writing a **new utility** for Zsh? Let me know so I can provide the exact code wrapper you need.

- [link](https://www.reddit.com/r/debian/comments/15s6scf/cd%5Fhas%5Fsuddenly%5Fstopped%5Fworking%5Ftoday%5Fanyone%5Felse/)\
  cd has suddenly stopped working today, anyone else seen or had this issue? Change to zsh and it works fine. Just seems to be in bash. : r/debian\
  Aug 15, 2023 — Comments Section cd Desktop = no such file or directory ZSH doesnt work no such file or directory error when the directory is ther...\
  \
  \
  Reddit
- [link](https://www.reddit.com/r/zsh/comments/1bln3nu/need%5Fhelp%5Fwith%5Fcd%5Ffunction/)\
  Need help with cd function : r/zsh\
  Mar 24, 2024 — Comments Section In zsh, it should be builtin cd rather than command cd . The latter attempts to invoke an external command named ...\
  \
  Reddit
- [link](https://www.reddit.com/r/learnprogramming/comments/2cdq5w/c%5Fafter%5Fimplementing%5Fmy%5Fown%5Fshell%5Fusing%5Ffork%5Fand/)\
  \[C] After implementing my own shell, using fork() and exec(), why do all commands work except for cd? : r/learnprogramming\
  Aug 2, 2014 — Another issue is that cd is a built-in command. It's not a program in your PATH. For example, try the command which ls and you'll ...\
  \
  Reddit

Show all

# <!-- 09 aug -->

# . test

```sh
 ~/Documents/blogging % cd ../self
cd:cd:52: no such file or directory: ../self
 ~/Documents/blogging % command cd ../self
cd: no such file or directory: ../self
 ~/Documents/blogging % foo(){ command cd ../self }
 ~/Documents/blogging % foo
foo:cd: no such file or directory: ../self
```

maybe i would normalize it
