<!-- seems ive been stuck for a while. idk what actions i would have. if i wanna save, i already have git add . commit '.'. a shell alias is so simple. if i wanna sync, i already have git push, just loop through backends and retry/err if needed. clone can take some code, as git does not seems to have the nowadays industry standard downloading features like parallel, continue, retry. it just hashes, deltas, and compresses. -->

<!-- the things is, i wanna make every cli of mine play nicely, by adopting modern vibes and not surprising users. -->

# .

research

```
 ~ % refray
Mirror repositories between Git hosting providers

Usage: refray [OPTIONS] <COMMAND>

Commands:
  config   Run the interactive configuration wizard
  sync     Sync configured mirror groups once
  serve    Run the webhook receiver
  webhook  Install or uninstall repository webhooks
  help     Print this message or the help of the given subcommand(s)

Options:
      --config <PATH>
  -h, --help           Print help
```

```
 ~ % bun
Bun is a fast JavaScript runtime, package manager, bundler, and test runner. (1.3.14+0d9b296af)

Usage: bun <command> [...flags] [...args]

Commands:
  run       ./my-script.ts       Execute a file with Bun
            lint                 Run a package.json script
  test                           Run unit tests with Bun
  x         next                 Execute a package binary (CLI), installing if needed (bunx)
  repl                           Start a REPL session with Bun
  exec                           Run a shell script directly with Bun

  install                        Install dependencies for a package.json (bun i)
  add       tailwindcss          Add a dependency to package.json (bun a)
  remove    moment               Remove a dependency from package.json (bun rm)
  update    elysia               Update outdated dependencies
  audit                          Check installed packages for vulnerabilities
  outdated                       Display latest versions of outdated dependencies
  link      [<package>]          Register or link a local npm package
  unlink                         Unregister a local npm package
  publish                        Publish a package to the npm registry
  patch <pkg>                    Prepare a package for patching
  pm <subcommand>                Additional package management utilities
  info      @shumai/shumai       Display package metadata from the registry
  why       hono                 Explain why a package is installed

  build     ./a.ts ./b.jsx       Bundle TypeScript & JavaScript into a single file

  init                           Start an empty Bun project from a built-in template
  create    vite                 Create a new project from a template (bun c)
  upgrade                        Upgrade to latest version of Bun.
  feedback  ./file1 ./file2      Provide feedback to the Bun team.

  <command> --help               Print help text for command.

Learn more about Bun:            https://bun.com/docs
Join our Discord community:      https://bun.com/discord
```

```
 ~ % pnpm
Version 10.30.2
Usage: pnpm [command] [flags]
       pnpm [ -h | --help | -v | --version ]

These are common pnpm commands used in various situations, use 'pnpm help -a' to list all commands

Manage your dependencies:
      add                  Installs a package and any packages that it depends on. By default, any new package is installed as a prod
                           dependency
   i, install              Install all dependencies for a project
  ln, link                 Connect the local project to another one
  rm, remove               Removes packages from node_modules and from the project's package.json
      unlink               Unlinks a package. Like yarn unlink but pnpm re-installs the dependency after removing the external link
  up, update               Updates packages to their latest version based on the specified range

Review your dependencies:
      audit                Checks for known security issues with the installed packages
  ls, list                 Print all the versions of packages that are installed, as well as their dependencies, in a tree-structure
      outdated             Check for outdated packages
      why                  Shows all packages that depend on the specified package

Run your scripts:
      create               Create a project from a "create-*" or "@foo/create-*" starter kit
      dlx                  Fetches a package from the registry without installing it as a dependency, hot loads it, and runs whatever
                           default command binary it exposes
      exec                 Executes a shell command in scope of a project
      run                  Runs a defined package script

Other:
   c, config               Manage the pnpm configuration files
      init                 Create a package.json file
      publish              Publishes a package to the registry
      self-update          Updates pnpm to the latest version

Options:
  -r, --recursive          Run the command for each project in the workspace.
```

```
 ~ % rustc
Usage: rustc [OPTIONS] INPUT

Options:
    -h, --help          Display this message
        --cfg <SPEC>    Configure the compilation environment.
                        SPEC supports the syntax `<NAME>[="<VALUE>"]`.
        --check-cfg <SPEC>
                        Provide list of expected cfgs for checking
    -L [<KIND>=]<PATH>  Add a directory to the library search path. The
                        optional KIND can be one of
                        <dependency|crate|native|framework|all> (default:
                        all).
    -l [<KIND>[:<MODIFIERS>]=]<NAME>[:<RENAME>]
                        Link the generated crate(s) to the specified native
                        library NAME. The optional KIND can be one of
                        <static|framework|dylib> (default: dylib).
                        Optional comma separated MODIFIERS
                        <bundle|verbatim|whole-archive|as-needed>
                        may be specified each with a prefix of either '+' to
                        enable or '-' to disable.
        --crate-type <bin|lib|rlib|dylib|cdylib|staticlib|proc-macro>
                        Comma separated list of types of crates
                        for the compiler to emit
        --crate-name <NAME>
                        Specify the name of the crate being built
        --edition <2015|2018|2021|2024|future>
                        Specify which edition of the compiler to use when
                        compiling code. The default is 2015 and the latest
                        stable edition is 2024.
        --emit <TYPE>[=<FILE>]
                        Comma separated list of types of output for the
                        compiler to emit.
                        Each TYPE has the default FILE name:
                        * asm - CRATE_NAME.s
                        * llvm-bc - CRATE_NAME.bc
                        * dep-info - CRATE_NAME.d
                        * link - (platform and crate-type dependent)
                        * llvm-ir - CRATE_NAME.ll
                        * metadata - libCRATE_NAME.rmeta
                        * mir - CRATE_NAME.mir
                        * obj - CRATE_NAME.o
                        * thin-link-bitcode - CRATE_NAME.indexing.o
        --print <INFO>[=<FILE>]
                        Compiler information to print on stdout (or to a file)
                        INFO may be one of
                        <all-target-specs-json|backend-has-zstd|calling-conventions|cfg|check-cfg|code-models|crate-name|crate-root-lint-levels|deployment-target|file-names|host-tuple|link-args|native-static-libs|relocation-models|split-debuginfo|stack-protector-strategies|supported-crate-types|sysroot|target-cpus|target-features|target-libdir|target-list|target-spec-json|target-spec-json-schema|tls-models>.
    -g                  Equivalent to -C debuginfo=2
    -O                  Equivalent to -C opt-level=3
    -o <FILENAME>       Write output to FILENAME
        --out-dir <DIR> Write output to compiler-chosen filename in DIR
        --explain <OPT> Provide a detailed explanation of an error message
        --test          Build a test harness
        --target <TARGET>
                        Target tuple for which the code is compiled
    -A, --allow <LINT>  Set lint allowed
    -W, --warn <LINT>   Set lint warnings
        --force-warn <LINT>
                        Set lint force-warn
    -D, --deny <LINT>   Set lint denied
    -F, --forbid <LINT> Set lint forbidden
        --cap-lints <LEVEL>
                        Set the most restrictive lint level. More restrictive
                        lints are capped at this level
    -C, --codegen <OPT>[=<VALUE>]
                        Set a codegen option
    -V, --version       Print version info and exit
    -v, --verbose       Use verbose output

Additional help:
    -C help             Print codegen options
    -W help             Print 'lint' options and default settings
    --help -v           Print the full set of options rustc accepts
```

```
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
```

# .

design.

```
~ % cli
iff cli --help
~ % cli (e.g. ls)
run the default command
~ % cli (e.g. node, python3)
enter repl
```

```
~ % cli --version
info.version
~ % cli -v (if not used by something like verbose)
info.version
```

<!-- you probably dont need the version number reading help. -->

```
~ % cli -h
info.description

usage: 
```
