# . to_mp3

```sh
to_mp3() {
    if [ -z "$1" ]; then
        echo "convert anything to ."
        echo "Usage: to_mp3 filename.ext"
        return 1
    fi

    ffmpeg -i "$1" -vn -c:a libmp3lame -b:a 192k "${1%.*}.mp3"
}
```

# . to_mp3 0.0

```sh
to_mp3(){
  local reset=$(tput sgr0)
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)
  local heading=""
  # local heading=$italic
  # local heading=$underline

  local version="normalize 0.0 (2026.07.15)"
  # no need to explain options or give examples i guess
  local help=$(cat <<- EOF | sed 's/^  //'
  Convert something to mp3

  ${bold}${heading}Usage:${reset} ${bold}to_mp3${reset} <file>
	EOF
	)

  if test $# -eq 1; then
    if test $1 = "--help" -o $1 = "-h"; then
      echo $help
    elif test $1 = "--version" -o $1 = "-v"; then
      echo $version
    else
      ffmpeg -i "$1" -vn -c:a libmp3lame -b:a 192k "${1%.*}.mp3"
    fi
  else
    echo $help
  fi
}
```

# . test colors

```sh
 ~ % cargo -v
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

```sh
foo(){
  local reset=$(tput sgr0)
  
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)

  local green=$(tput setaf 2)
  local bright_green=$(tput setaf 10)
  local cyan=$(tput setaf 6)
  local bright_cyan=$(tput setaf 14)

  local heading="$bold$bright_green"
  local flag="$bright_green" # command or flag
  local argument="$bright_green"

  local version="normalize 0.0 (2026.07.15)"
  # no need to explain options or give examples i guess
  local help=$(cat <<- EOF | sed 's/^  //'
  Convert something to mp3

  ${bold}${heading}Usage:${reset} ${bold}to_mp3${reset} <file>
	EOF
	)

  echo $help
}
```
