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

# 
