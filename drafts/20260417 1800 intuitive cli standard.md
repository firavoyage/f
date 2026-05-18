<!-- seems ive been stuck for a while. idk what actions i would have. if i wanna save, i already have git add . commit '.'. a shell alias is so simple. if i wanna sync, i already have git push, just loop through backends and retry/err if needed. clone can take some code, as git does not seems to have the nowadays industry standard downloading features like parallel, continue, retry. it just hashes, deltas, and compresses. -->

<!-- the things is, i wanna make every cli of mine play nicely, by adopting modern vibes and not surprising users. -->

<!-- i wont read the refray code further. i could not click the symbol (or ctrl shif r) even w rust analyzer enabled. the commands are defined as rust enums and structs w boilerplate macros. well, by some magics, it works. but if only w these complex steps could it work, then it definitely fails, as no humans could read, even only 200 lines. -->

<!-- think how to define the commands and options. i tend to lean toward yaml? -->

<!-- i have the yaml design. quite simple. nesting is so good. the decision is just positional (as commands and options are generally interchangeable) or named (clearer), which does matter much. but i would research existing methods. i think they use custom parsing or json instead. -->

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
 ~ % refray config -h
Run the interactive configuration wizard

Usage: refray config [OPTIONS]

Options:
      --config <PATH>
  -h, --help           Print help
 ~ % refray sync -h
Sync configured mirror groups once

Usage: refray sync [OPTIONS]

Options:
      --config <PATH>
      --group <NAME>
      --dry-run
      --no-create      Do not create repositories that are missing from an endpoint
      --retry-failed   Sync only repositories that failed during the previous non-dry-run sync
  -h, --help           Print help
 ~ % refray serve -h
Run the webhook receiver

Usage: refray serve [OPTIONS]

Options:
      --config <PATH>
      --listen <HOST:PORT>  [default: 127.0.0.1:8787]
  -h, --help                Print help
 ~ % refray webhook -h
Install or uninstall repository webhooks

Usage: refray webhook [OPTIONS] <COMMAND>

Commands:
  install
  uninstall
  update
  help       Print this message or the help of the given subcommand(s)

Options:
      --config <PATH>
  -h, --help           Print help
 ~ % refray help -h
error: unrecognized subcommand '-h'

Usage: refray [OPTIONS] <COMMAND>

For more information, try '--help'.
 ~ % refray help --help
error: unrecognized subcommand '--help'

Usage: refray [OPTIONS] <COMMAND>

For more information, try '--help'.
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
 ~ % rustc -v
error: no input filename given

error: aborting due to 1 previous error

 ~ % rustc --version
rustc 1.94.0 (4a4ef493e 2026-03-02)
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

```
 ~ % yt-dlp -h
Usage: yt-dlp [OPTIONS] URL [URL...]

Options:

  General Options:
    -h, --help                                              Print this help text and exit
    --version                                               Print program version and exit
    -U, --update                                            Check if updates are available. You installed yt-dlp with pip or using the
                                                            wheel from PyPi; Use that to update
    --no-update                                             Do not check for updates (default)
    --update-to [CHANNEL]@[TAG]                             Upgrade/downgrade to a specific version. CHANNEL can be a repository as
                                                            well. CHANNEL and TAG default to "stable" and "latest" respectively if
                                                            omitted; See "UPDATE" for details. Supported channels: stable, nightly,
                                                            master
    -i, --ignore-errors                                     Ignore download and postprocessing errors. The download will be considered
                                                            successful even if the postprocessing fails
    --no-abort-on-error                                     Continue with next video on download errors; e.g. to skip unavailable
                                                            videos in a playlist (default)
    --abort-on-error                                        Abort downloading of further videos if an error occurs (Alias: --no-
                                                            ignore-errors)
    --list-extractors                                       List all supported extractors and exit
    --extractor-descriptions                                Output descriptions of all supported extractors and exit
    --use-extractors NAMES                                  Extractor names to use separated by commas. You can also use regexes,
                                                            "all", "default" and "end" (end URL matching); e.g. --ies
                                                            "holodex.*,end,youtube". Prefix the name with a "-" to exclude it, e.g.
                                                            --ies default,-generic. Use --list-extractors for a list of extractor
                                                            names. (Alias: --ies)
    --default-search PREFIX                                 Use this prefix for unqualified URLs. E.g. "gvsearch2:python" downloads
                                                            two videos from google videos for the search term "python". Use the value
                                                            "auto" to let yt-dlp guess ("auto_warning" to emit a warning when
                                                            guessing). "error" just throws an error. The default value "fixup_error"
                                                            repairs broken URLs, but emits an error if this is not possible instead of
                                                            searching
    --ignore-config                                         Don't load any more configuration files except those given to --config-
                                                            locations. For backward compatibility, if this option is found inside the
                                                            system configuration file, the user configuration is not loaded. (Alias:
                                                            --no-config)
    --no-config-locations                                   Do not load any custom configuration files (default). When given inside a
                                                            configuration file, ignore all previous --config-locations defined in the
                                                            current file
    --config-locations PATH                                 Location of the main configuration file; either the path to the config or
                                                            its containing directory ("-" for stdin). Can be used multiple times and
                                                            inside other configuration files
    --plugin-dirs DIR                                       Path to an additional directory to search for plugins. This option can be
                                                            used multiple times to add multiple directories. Use "default" to search
                                                            the default plugin directories (default)
    --no-plugin-dirs                                        Clear plugin directories to search, including defaults and those provided
                                                            by previous --plugin-dirs
    --js-runtimes RUNTIME[:PATH]                            Additional JavaScript runtime to enable, with an optional location for the
                                                            runtime (either the path to the binary or its containing directory). This
                                                            option can be used multiple times to enable multiple runtimes. Supported
                                                            runtimes are (in order of priority, from highest to lowest): deno, node,
                                                            quickjs, bun. Only "deno" is enabled by default. The highest priority
                                                            runtime that is both enabled and available will be used. In order to use a
                                                            lower priority runtime when "deno" is available, --no-js-runtimes needs to
                                                            be passed before enabling other runtimes
    --no-js-runtimes                                        Clear JavaScript runtimes to enable, including defaults and those provided
                                                            by previous --js-runtimes
    --remote-components COMPONENT                           Remote components to allow yt-dlp to fetch when required. This option is
                                                            currently not needed if you are using an official executable or have the
                                                            requisite version of the yt-dlp-ejs package installed. You can use this
                                                            option multiple times to allow multiple components. Supported values:
                                                            ejs:npm (external JavaScript components from npm), ejs:github (external
                                                            JavaScript components from yt-dlp-ejs GitHub). By default, no remote
                                                            components are allowed
    --no-remote-components                                  Disallow fetching of all remote components, including any previously
                                                            allowed by --remote-components or defaults.
    --flat-playlist                                         Do not extract a playlist's URL result entries; some entry metadata may be
                                                            missing and downloading may be bypassed
    --no-flat-playlist                                      Fully extract the videos of a playlist (default)
    --live-from-start                                       Download livestreams from the start. Currently experimental and only
                                                            supported for YouTube, Twitch, and TVer
    --no-live-from-start                                    Download livestreams from the current time (default)
    --wait-for-video MIN[-MAX]                              Wait for scheduled streams to become available. Pass the minimum number of
                                                            seconds (or range) to wait between retries
    --no-wait-for-video                                     Do not wait for scheduled streams (default)
    --mark-watched                                          Mark videos watched (even with --simulate)
    --no-mark-watched                                       Do not mark videos watched (default)
    --color [STREAM:]POLICY                                 Whether to emit color codes in output, optionally prefixed by the STREAM
                                                            (stdout or stderr) to apply the setting to. Can be one of "always", "auto"
                                                            (default), "never", or "no_color" (use non color terminal sequences). Use
                                                            "auto-tty" or "no_color-tty" to decide based on terminal support only. Can
                                                            be used multiple times
    --compat-options OPTS                                   Options that can help keep compatibility with youtube-dl or youtube-dlc
                                                            configurations by reverting some of the changes made in yt-dlp. See
                                                            "Differences in default behavior" for details
    --alias ALIASES OPTIONS                                 Create aliases for an option string. Unless an alias starts with a dash
                                                            "-", it is prefixed with "--". Arguments are parsed according to the
                                                            Python string formatting mini-language. E.g. --alias get-audio,-X "-S
                                                            aext:{0},abr -x --audio-format {0}" creates options "--get-audio" and "-X"
                                                            that takes an argument (ARG0) and expands to "-S aext:ARG0,abr -x --audio-
                                                            format ARG0". All defined aliases are listed in the --help output. Alias
                                                            options can trigger more aliases; so be careful to avoid defining
                                                            recursive options. As a safety measure, each alias may be triggered a
                                                            maximum of 100 times. This option can be used multiple times
    -t, --preset-alias PRESET                               Applies a predefined set of options. e.g. --preset-alias mp3. The
                                                            following presets are available: mp3, aac, mp4, mkv, sleep. See the
                                                            "Preset Aliases" section at the end for more info. This option can be used
                                                            multiple times

  Network Options:
    --proxy URL                                             Use the specified HTTP/HTTPS/SOCKS proxy. To enable SOCKS proxy, specify a
                                                            proper scheme, e.g. socks5://user:pass@127.0.0.1:1080/. Pass in an empty
                                                            string (--proxy "") for direct connection
    --socket-timeout SECONDS                                Time to wait before giving up, in seconds
    --source-address IP                                     Client-side IP address to bind to
    --impersonate CLIENT[:OS]                               Client to impersonate for requests. E.g. chrome, chrome-110,
                                                            chrome:windows-10. Pass --impersonate="" to impersonate any client. Note
                                                            that forcing impersonation for all requests may have a detrimental impact
                                                            on download speed and stability
    --list-impersonate-targets                              List available clients to impersonate.
    -4, --force-ipv4                                        Make all connections via IPv4
    -6, --force-ipv6                                        Make all connections via IPv6
    --enable-file-urls                                      Enable file:// URLs. This is disabled by default for security reasons.

  Geo-restriction:
    --geo-verification-proxy URL                            Use this proxy to verify the IP address for some geo-restricted sites. The
                                                            default proxy specified by --proxy (or none, if the option is not present)
                                                            is used for the actual downloading
    --xff VALUE                                             How to fake X-Forwarded-For HTTP header to try bypassing geographic
                                                            restriction. One of "default" (only when known to be useful), "never", an
                                                            IP block in CIDR notation, or a two-letter ISO 3166-2 country code

  Video Selection:
    -I, --playlist-items ITEM_SPEC                          Comma-separated playlist_index of the items to download. You can specify a
                                                            range using "[START]:[STOP][:STEP]". For backward compatibility, START-
                                                            STOP is also supported. Use negative indices to count from the right and
                                                            negative STEP to download in reverse order. E.g. "-I 1:3,7,-5::2" used on
                                                            a playlist of size 15 will download the items at index 1,2,3,7,11,13,15
    --min-filesize SIZE                                     Abort download if filesize is smaller than SIZE, e.g. 50k or 44.6M
    --max-filesize SIZE                                     Abort download if filesize is larger than SIZE, e.g. 50k or 44.6M
    --date DATE                                             Download only videos uploaded on this date. The date can be "YYYYMMDD" or
                                                            in the format [now|today|yesterday][-N[day|week|month|year]]. E.g. "--date
                                                            today-2weeks" downloads only videos uploaded on the same day two weeks ago
    --datebefore DATE                                       Download only videos uploaded on or before this date. The date formats
                                                            accepted are the same as --date
    --dateafter DATE                                        Download only videos uploaded on or after this date. The date formats
                                                            accepted are the same as --date
    --match-filters FILTER                                  Generic video filter. Any "OUTPUT TEMPLATE" field can be compared with a
                                                            number or a string using the operators defined in "Filtering Formats". You
                                                            can also simply specify a field to match if the field is present, use
                                                            "!field" to check if the field is not present, and "&" to check multiple
                                                            conditions. Use a "\" to escape "&" or quotes if needed. If used multiple
                                                            times, the filter matches if at least one of the conditions is met. E.g.
                                                            --match-filters !is_live --match-filters "like_count>?100 &
                                                            description~='(?i)\bcats \& dogs\b'" matches only videos that are not live
                                                            OR those that have a like count more than 100 (or the like field is not
                                                            available) and also has a description that contains the phrase "cats &
                                                            dogs" (caseless). Use "--match-filters -" to interactively ask whether to
                                                            download each video
    --no-match-filters                                      Do not use any --match-filters (default)
    --break-match-filters FILTER                            Same as "--match-filters" but stops the download process when a video is
                                                            rejected
    --no-break-match-filters                                Do not use any --break-match-filters (default)
    --no-playlist                                           Download only the video, if the URL refers to a video and a playlist
    --yes-playlist                                          Download the playlist, if the URL refers to a video and a playlist
    --age-limit YEARS                                       Download only videos suitable for the given age
    --download-archive FILE                                 Download only videos not listed in the archive file. Record the IDs of all
                                                            downloaded videos in it
    --no-download-archive                                   Do not use archive file (default)
    --max-downloads NUMBER                                  Abort after downloading NUMBER files
    --break-on-existing                                     Stop the download process when encountering a file that is in the archive
                                                            supplied with the --download-archive option
    --no-break-on-existing                                  Do not stop the download process when encountering a file that is in the
                                                            archive (default)
    --break-per-input                                       Alters --max-downloads, --break-on-existing, --break-match-filters, and
                                                            autonumber to reset per input URL
    --no-break-per-input                                    --break-on-existing and similar options terminates the entire download
                                                            queue
    --skip-playlist-after-errors N                          Number of allowed failures until the rest of the playlist is skipped

  Download Options:
    -N, --concurrent-fragments N                            Number of fragments of a dash/hlsnative video that should be downloaded
                                                            concurrently (default is 1)
    -r, --limit-rate RATE                                   Maximum download rate in bytes per second, e.g. 50K or 4.2M
    --throttled-rate RATE                                   Minimum download rate in bytes per second below which throttling is
                                                            assumed and the video data is re-extracted, e.g. 100K
    -R, --retries RETRIES                                   Number of retries (default is 10), or "infinite"
    --file-access-retries RETRIES                           Number of times to retry on file access error (default is 3), or
                                                            "infinite"
    --fragment-retries RETRIES                              Number of retries for a fragment (default is 10), or "infinite" (DASH,
                                                            hlsnative and ISM)
    --retry-sleep [TYPE:]EXPR                               Time to sleep between retries in seconds (optionally) prefixed by the type
                                                            of retry (http (default), fragment, file_access, extractor) to apply the
                                                            sleep to. EXPR can be a number, linear=START[:END[:STEP=1]] or
                                                            exp=START[:END[:BASE=2]]. This option can be used multiple times to set
                                                            the sleep for the different retry types, e.g. --retry-sleep linear=1::2
                                                            --retry-sleep fragment:exp=1:20
    --skip-unavailable-fragments                            Skip unavailable fragments for DASH, hlsnative and ISM downloads (default)
                                                            (Alias: --no-abort-on-unavailable-fragments)
    --abort-on-unavailable-fragments                        Abort download if a fragment is unavailable (Alias: --no-skip-unavailable-
                                                            fragments)
    --keep-fragments                                        Keep downloaded fragments on disk after downloading is finished
    --no-keep-fragments                                     Delete downloaded fragments after downloading is finished (default)
    --buffer-size SIZE                                      Size of download buffer, e.g. 1024 or 16K (default is 1024)
    --resize-buffer                                         The buffer size is automatically resized from an initial value of
                                                            --buffer-size (default)
    --no-resize-buffer                                      Do not automatically adjust the buffer size
    --http-chunk-size SIZE                                  Size of a chunk for chunk-based HTTP downloading, e.g. 10485760 or 10M
                                                            (default is disabled). May be useful for bypassing bandwidth throttling
                                                            imposed by a webserver (experimental)
    --playlist-random                                       Download playlist videos in random order
    --lazy-playlist                                         Process entries in the playlist as they are received. This disables
                                                            n_entries, --playlist-random and --playlist-reverse
    --no-lazy-playlist                                      Process videos in the playlist only after the entire playlist is parsed
                                                            (default)
    --hls-use-mpegts                                        Use the mpegts container for HLS videos; allowing some players to play the
                                                            video while downloading, and reducing the chance of file corruption if
                                                            download is interrupted. This is enabled by default for live streams
    --no-hls-use-mpegts                                     Do not use the mpegts container for HLS videos. This is default when not
                                                            downloading live streams
    --download-sections REGEX                               Download only chapters that match the regular expression. A "*" prefix
                                                            denotes time-range instead of chapter. Negative timestamps are calculated
                                                            from the end. "*from-url" can be used to download between the "start_time"
                                                            and "end_time" extracted from the URL. Needs ffmpeg. This option can be
                                                            used multiple times to download multiple sections, e.g. --download-
                                                            sections "*10:15-inf" --download-sections "intro"
    --downloader [PROTO:]NAME                               Name or path of the external downloader to use (optionally) prefixed by
                                                            the protocols (http, ftp, m3u8, dash, rstp, rtmp, mms) to use it for.
                                                            Currently supports native, aria2c, axel, curl, ffmpeg, httpie, wget. You
                                                            can use this option multiple times to set different downloaders for
                                                            different protocols. E.g. --downloader aria2c --downloader
                                                            "dash,m3u8:native" will use aria2c for http/ftp downloads, and the native
                                                            downloader for dash/m3u8 downloads (Alias: --external-downloader)
    --downloader-args NAME:ARGS                             Give these arguments to the external downloader. Specify the downloader
                                                            name and the arguments separated by a colon ":". For ffmpeg, arguments can
                                                            be passed to different positions using the same syntax as --postprocessor-
                                                            args. You can use this option multiple times to give different arguments
                                                            to different downloaders (Alias: --external-downloader-args)

  Filesystem Options:
    -a, --batch-file FILE                                   File containing URLs to download ("-" for stdin), one URL per line. Lines
                                                            starting with "#", ";" or "]" are considered as comments and ignored
    --no-batch-file                                         Do not read URLs from batch file (default)
    -P, --paths [TYPES:]PATH                                The paths where the files should be downloaded. Specify the type of file
                                                            and the path separated by a colon ":". All the same TYPES as --output are
                                                            supported. Additionally, you can also provide "home" (default) and "temp"
                                                            paths. All intermediary files are first downloaded to the temp path and
                                                            then the final files are moved over to the home path after download is
                                                            finished. This option is ignored if --output is an absolute path
    -o, --output [TYPES:]TEMPLATE                           Output filename template; see "OUTPUT TEMPLATE" for details
    --output-na-placeholder TEXT                            Placeholder for unavailable fields in --output (default: "NA")
    --restrict-filenames                                    Restrict filenames to only ASCII characters, and avoid "&" and spaces in
                                                            filenames
    --no-restrict-filenames                                 Allow Unicode characters, "&" and spaces in filenames (default)
    --windows-filenames                                     Force filenames to be Windows-compatible
    --no-windows-filenames                                  Sanitize filenames only minimally
    --trim-filenames LENGTH                                 Limit the filename length (excluding extension) to the specified number of
                                                            characters
    -w, --no-overwrites                                     Do not overwrite any files
    --force-overwrites                                      Overwrite all video and metadata files. This option includes --no-continue
    --no-force-overwrites                                   Do not overwrite the video, but overwrite related files (default)
    -c, --continue                                          Resume partially downloaded files/fragments (default)
    --no-continue                                           Do not resume partially downloaded fragments. If the file is not
                                                            fragmented, restart download of the entire file
    --part                                                  Use .part files instead of writing directly into output file (default)
    --no-part                                               Do not use .part files - write directly into output file
    --mtime                                                 Use the Last-modified header to set the file modification time
    --no-mtime                                              Do not use the Last-modified header to set the file modification time
                                                            (default)
    --write-description                                     Write video description to a .description file
    --no-write-description                                  Do not write video description (default)
    --write-info-json                                       Write video metadata to a .info.json file (this may contain personal
                                                            information)
    --no-write-info-json                                    Do not write video metadata (default)
    --write-playlist-metafiles                              Write playlist metadata in addition to the video metadata when using
                                                            --write-info-json, --write-description etc. (default)
    --no-write-playlist-metafiles                           Do not write playlist metadata when using --write-info-json, --write-
                                                            description etc.
    --clean-info-json                                       Remove some internal metadata such as filenames from the infojson
                                                            (default)
    --no-clean-info-json                                    Write all fields to the infojson
    --write-comments                                        Retrieve video comments to be placed in the infojson. The comments are
                                                            fetched even without this option if the extraction is known to be quick
                                                            (Alias: --get-comments)
    --no-write-comments                                     Do not retrieve video comments unless the extraction is known to be quick
                                                            (Alias: --no-get-comments)
    --load-info-json FILE                                   JSON file containing the video information (created with the "--write-
                                                            info-json" option)
    --cookies FILE                                          Netscape formatted file to read cookies from and dump cookie jar in
    --no-cookies                                            Do not read/dump cookies from/to file (default)
    --cookies-from-browser BROWSER[+KEYRING][:PROFILE][::CONTAINER]
                                                            The name of the browser to load cookies from. Currently supported browsers
                                                            are: brave, chrome, chromium, edge, firefox, opera, safari, vivaldi,
                                                            whale. Optionally, the KEYRING used for decrypting Chromium cookies on
                                                            Linux, the name/path of the PROFILE to load cookies from, and the
                                                            CONTAINER name (if Firefox) ("none" for no container) can be given with
                                                            their respective separators. By default, all containers of the most
                                                            recently accessed profile are used. Currently supported keyrings are:
                                                            basictext, gnomekeyring, kwallet, kwallet5, kwallet6
    --no-cookies-from-browser                               Do not load cookies from browser (default)
    --cache-dir DIR                                         Location in the filesystem where yt-dlp can store some downloaded
                                                            information (such as client ids and signatures) permanently. By default
                                                            ${XDG_CACHE_HOME}/yt-dlp
    --no-cache-dir                                          Disable filesystem caching
    --rm-cache-dir                                          Delete all filesystem cache files

  Thumbnail Options:
    --write-thumbnail                                       Write thumbnail image to disk
    --no-write-thumbnail                                    Do not write thumbnail image to disk (default)
    --write-all-thumbnails                                  Write all thumbnail image formats to disk
    --list-thumbnails                                       List available thumbnails of each video. Simulate unless --no-simulate is
                                                            used

  Internet Shortcut Options:
    --write-link                                            Write an internet shortcut file, depending on the current platform (.url,
                                                            .webloc or .desktop). The URL may be cached by the OS
    --write-url-link                                        Write a .url Windows internet shortcut. The OS caches the URL based on the
                                                            file path
    --write-webloc-link                                     Write a .webloc macOS internet shortcut
    --write-desktop-link                                    Write a .desktop Linux internet shortcut

  Verbosity and Simulation Options:
    -q, --quiet                                             Activate quiet mode. If used with --verbose, print the log to stderr
    --no-quiet                                              Deactivate quiet mode. (Default)
    --no-warnings                                           Ignore warnings
    -s, --simulate                                          Do not download the video and do not write anything to disk
    --no-simulate                                           Download the video even if printing/listing options are used
    --ignore-no-formats-error                               Ignore "No video formats" error. Useful for extracting metadata even if
                                                            the videos are not actually available for download (experimental)
    --no-ignore-no-formats-error                            Throw error when no downloadable video formats are found (default)
    --skip-download                                         Do not download the video but write all related files (Alias: --no-
                                                            download)
    -O, --print [WHEN:]TEMPLATE                             Field name or output template to print to screen, optionally prefixed with
                                                            when to print it, separated by a ":". Supported values of "WHEN" are the
                                                            same as that of --use-postprocessor (default: video). Implies --quiet.
                                                            Implies --simulate unless --no-simulate or later stages of WHEN are used.
                                                            This option can be used multiple times
    --print-to-file [WHEN:]TEMPLATE FILE                    Append given template to the file. The values of WHEN and TEMPLATE are the
                                                            same as that of --print. FILE uses the same syntax as the output template.
                                                            This option can be used multiple times
    -j, --dump-json                                         Quiet, but print JSON information for each video. Simulate unless --no-
                                                            simulate is used. See "OUTPUT TEMPLATE" for a description of available
                                                            keys
    -J, --dump-single-json                                  Quiet, but print JSON information for each URL or infojson passed.
                                                            Simulate unless --no-simulate is used. If the URL refers to a playlist,
                                                            the whole playlist information is dumped in a single line
    --force-write-archive                                   Force download archive entries to be written as far as no errors occur,
                                                            even if -s or another simulation option is used (Alias: --force-download-
                                                            archive)
    --newline                                               Output progress bar as new lines
    --no-progress                                           Do not print progress bar
    --progress                                              Show progress bar, even if in quiet mode
    --console-title                                         Display progress in console titlebar
    --progress-template [TYPES:]TEMPLATE                    Template for progress outputs, optionally prefixed with one of "download:"
                                                            (default), "download-title:" (the console title), "postprocess:",  or
                                                            "postprocess-title:". The video's fields are accessible under the "info"
                                                            key and the progress attributes are accessible under "progress" key. E.g.
                                                            --console-title --progress-template "download-
                                                            title:%(info.id)s-%(progress.eta)s"
    --progress-delta SECONDS                                Time between progress output (default: 0)
    -v, --verbose                                           Print various debugging information
    --dump-pages                                            Print downloaded pages encoded using base64 to debug problems (very
                                                            verbose)
    --write-pages                                           Write downloaded intermediary pages to files in the current directory to
                                                            debug problems
    --print-traffic                                         Display sent and read HTTP traffic

  Workarounds:
    --encoding ENCODING                                     Force the specified encoding (experimental)
    --legacy-server-connect                                 Explicitly allow HTTPS connection to servers that do not support RFC 5746
                                                            secure renegotiation
    --no-check-certificates                                 Suppress HTTPS certificate validation
    --prefer-insecure                                       Use an unencrypted connection to retrieve information about the video
                                                            (Currently supported only for YouTube)
    --add-headers FIELD:VALUE                               Specify a custom HTTP header and its value, separated by a colon ":". You
                                                            can use this option multiple times
    --bidi-workaround                                       Work around terminals that lack bidirectional text support. Requires bidiv
                                                            or fribidi executable in PATH
    --sleep-requests SECONDS                                Number of seconds to sleep between requests during data extraction
    --sleep-interval SECONDS                                Number of seconds to sleep before each download. This is the minimum time
                                                            to sleep when used along with --max-sleep-interval (Alias: --min-sleep-
                                                            interval)
    --max-sleep-interval SECONDS                            Maximum number of seconds to sleep. Can only be used along with --min-
                                                            sleep-interval
    --sleep-subtitles SECONDS                               Number of seconds to sleep before each subtitle download

  Video Format Options:
    -f, --format FORMAT                                     Video format code, see "FORMAT SELECTION" for more details
    -S, --format-sort SORTORDER                             Sort the formats by the fields given, see "Sorting Formats" for more
                                                            details
    --format-sort-reset                                     Disregard previous user specified sort order and reset to the default
    --format-sort-force                                     Force user specified sort order to have precedence over all fields, see
                                                            "Sorting Formats" for more details (Alias: --S-force)
    --no-format-sort-force                                  Some fields have precedence over the user specified sort order (default)
    --video-multistreams                                    Allow multiple video streams to be merged into a single file
    --no-video-multistreams                                 Only one video stream is downloaded for each output file (default)
    --audio-multistreams                                    Allow multiple audio streams to be merged into a single file
    --no-audio-multistreams                                 Only one audio stream is downloaded for each output file (default)
    --prefer-free-formats                                   Prefer video formats with free containers over non-free ones of the same
                                                            quality. Use with "-S ext" to strictly prefer free containers irrespective
                                                            of quality
    --no-prefer-free-formats                                Don't give any special preference to free containers (default)
    --check-formats                                         Make sure formats are selected only from those that are actually
                                                            downloadable
    --check-all-formats                                     Check all formats for whether they are actually downloadable
    --no-check-formats                                      Do not check that the formats are actually downloadable
    -F, --list-formats                                      List available formats of each video. Simulate unless --no-simulate is
                                                            used
    --merge-output-format FORMAT                            Containers that may be used when merging formats, separated by "/", e.g.
                                                            "mp4/mkv". Ignored if no merge is required. (currently supported: avi,
                                                            flv, mkv, mov, mp4, webm)

  Subtitle Options:
    --write-subs                                            Write subtitle file
    --no-write-subs                                         Do not write subtitle file (default)
    --write-auto-subs                                       Write automatically generated subtitle file (Alias: --write-automatic-
                                                            subs)
    --no-write-auto-subs                                    Do not write auto-generated subtitles (default) (Alias: --no-write-
                                                            automatic-subs)
    --list-subs                                             List available subtitles of each video. Simulate unless --no-simulate is
                                                            used
    --sub-format FORMAT                                     Subtitle format; accepts formats preference separated by "/", e.g. "srt"
                                                            or "ass/srt/best"
    --sub-langs LANGS                                       Languages of the subtitles to download (can be regex) or "all" separated
                                                            by commas, e.g. --sub-langs "en.*,ja" (where "en.*" is a regex pattern
                                                            that matches "en" followed by 0 or more of any character). You can prefix
                                                            the language code with a "-" to exclude it from the requested languages,
                                                            e.g. --sub-langs all,-live_chat. Use --list-subs for a list of available
                                                            language tags

  Authentication Options:
    -u, --username USERNAME                                 Login with this account ID
    -p, --password PASSWORD                                 Account password. If this option is left out, yt-dlp will ask
                                                            interactively
    -2, --twofactor TWOFACTOR                               Two-factor authentication code
    -n, --netrc                                             Use .netrc authentication data
    --netrc-location PATH                                   Location of .netrc authentication data; either the path or its containing
                                                            directory. Defaults to ~/.netrc
    --netrc-cmd NETRC_CMD                                   Command to execute to get the credentials for an extractor.
    --video-password PASSWORD                               Video-specific password
    --ap-mso MSO                                            Adobe Pass multiple-system operator (TV provider) identifier, use --ap-
                                                            list-mso for a list of available MSOs
    --ap-username USERNAME                                  Multiple-system operator account login
    --ap-password PASSWORD                                  Multiple-system operator account password. If this option is left out, yt-
                                                            dlp will ask interactively
    --ap-list-mso                                           List all supported multiple-system operators
    --client-certificate CERTFILE                           Path to client certificate file in PEM format. May include the private key
    --client-certificate-key KEYFILE                        Path to private key file for client certificate
    --client-certificate-password PASSWORD                  Password for client certificate private key, if encrypted. If not
                                                            provided, and the key is encrypted, yt-dlp will ask interactively

  Post-Processing Options:
    -x, --extract-audio                                     Convert video files to audio-only files (requires ffmpeg and ffprobe)
    --audio-format FORMAT                                   Format to convert the audio to when -x is used. (currently supported: best
                                                            (default), aac, alac, flac, m4a, mp3, opus, vorbis, wav). You can specify
                                                            multiple rules using similar syntax as --remux-video
    --audio-quality QUALITY                                 Specify ffmpeg audio quality to use when converting the audio with -x.
                                                            Insert a value between 0 (best) and 10 (worst) for VBR or a specific
                                                            bitrate like 128K (default 5)
    --remux-video FORMAT                                    Remux the video into another container if necessary (currently supported:
                                                            avi, flv, gif, mkv, mov, mp4, webm, aac, aiff, alac, flac, m4a, mka, mp3,
                                                            ogg, opus, vorbis, wav). If the target container does not support the
                                                            video/audio codec, remuxing will fail. You can specify multiple rules;
                                                            e.g. "aac>m4a/mov>mp4/mkv" will remux aac to m4a, mov to mp4 and anything
                                                            else to mkv
    --recode-video FORMAT                                   Re-encode the video into another format if necessary. The syntax and
                                                            supported formats are the same as --remux-video
    --postprocessor-args NAME:ARGS                          Give these arguments to the postprocessors. Specify the
                                                            postprocessor/executable name and the arguments separated by a colon ":"
                                                            to give the argument to the specified postprocessor/executable. Supported
                                                            PP are: Merger, ModifyChapters, SplitChapters, ExtractAudio, VideoRemuxer,
                                                            VideoConvertor, Metadata, EmbedSubtitle, EmbedThumbnail,
                                                            SubtitlesConvertor, ThumbnailsConvertor, FixupStretched, FixupM4a,
                                                            FixupM3u8, FixupTimestamp and FixupDuration. The supported executables
                                                            are: AtomicParsley, FFmpeg and FFprobe. You can also specify "PP+EXE:ARGS"
                                                            to give the arguments to the specified executable only when being used by
                                                            the specified postprocessor. Additionally, for ffmpeg/ffprobe, "_i"/"_o"
                                                            can be appended to the prefix optionally followed by a number to pass the
                                                            argument before the specified input/output file, e.g. --ppa
                                                            "Merger+ffmpeg_i1:-v quiet". You can use this option multiple times to
                                                            give different arguments to different postprocessors. (Alias: --ppa)
    -k, --keep-video                                        Keep the intermediate video file on disk after post-processing
    --no-keep-video                                         Delete the intermediate video file after post-processing (default)
    --post-overwrites                                       Overwrite post-processed files (default)
    --no-post-overwrites                                    Do not overwrite post-processed files
    --embed-subs                                            Embed subtitles in the video (only for mp4, webm and mkv videos)
    --no-embed-subs                                         Do not embed subtitles (default)
    --embed-thumbnail                                       Embed thumbnail in the video as cover art
    --no-embed-thumbnail                                    Do not embed thumbnail (default)
    --embed-metadata                                        Embed metadata to the video file. Also embeds chapters/infojson if present
                                                            unless --no-embed-chapters/--no-embed-info-json are used (Alias: --add-
                                                            metadata)
    --no-embed-metadata                                     Do not add metadata to file (default) (Alias: --no-add-metadata)
    --embed-chapters                                        Add chapter markers to the video file (Alias: --add-chapters)
    --no-embed-chapters                                     Do not add chapter markers (default) (Alias: --no-add-chapters)
    --embed-info-json                                       Embed the infojson as an attachment to mkv/mka video files
    --no-embed-info-json                                    Do not embed the infojson as an attachment to the video file
    --parse-metadata [WHEN:]FROM:TO                         Parse additional metadata like title/artist from other fields; see
                                                            "MODIFYING METADATA" for details. Supported values of "WHEN" are the same
                                                            as that of --use-postprocessor (default: pre_process)
    --replace-in-metadata [WHEN:]FIELDS REGEX REPLACE       Replace text in a metadata field using the given regex. This option can be
                                                            used multiple times. Supported values of "WHEN" are the same as that of
                                                            --use-postprocessor (default: pre_process)
    --xattrs                                                Write metadata to the video file's xattrs (using Dublin Core and XDG
                                                            standards)
    --concat-playlist POLICY                                Concatenate videos in a playlist. One of "never", "always", or
                                                            "multi_video" (default; only when the videos form a single show). All the
                                                            video files must have the same codecs and number of streams to be
                                                            concatenable. The "pl_video:" prefix can be used with "--paths" and "--
                                                            output" to set the output filename for the concatenated files. See "OUTPUT
                                                            TEMPLATE" for details
    --fixup POLICY                                          Automatically correct known faults of the file. One of never (do nothing),
                                                            warn (only emit a warning), detect_or_warn (the default; fix the file if
                                                            we can, warn otherwise), force (try fixing even if the file already
                                                            exists)
    --ffmpeg-location PATH                                  Location of the ffmpeg binary; either the path to the binary or its
                                                            containing directory
    --exec [WHEN:]CMD                                       Execute a command, optionally prefixed with when to execute it, separated
                                                            by a ":". Supported values of "WHEN" are the same as that of --use-
                                                            postprocessor (default: after_move). The same syntax as the output
                                                            template can be used to pass any field as arguments to the command. If no
                                                            fields are passed, %(filepath,_filename|)q is appended to the end of the
                                                            command. This option can be used multiple times
    --no-exec                                               Remove any previously defined --exec
    --convert-subs FORMAT                                   Convert the subtitles to another format (currently supported: ass, lrc,
                                                            srt, vtt). Use "--convert-subs none" to disable conversion (default)
                                                            (Alias: --convert-subtitles)
    --convert-thumbnails FORMAT                             Convert the thumbnails to another format (currently supported: jpg, png,
                                                            webp). You can specify multiple rules using similar syntax as "--remux-
                                                            video". Use "--convert-thumbnails none" to disable conversion (default)
    --split-chapters                                        Split video into multiple files based on internal chapters. The "chapter:"
                                                            prefix can be used with "--paths" and "--output" to set the output
                                                            filename for the split files. See "OUTPUT TEMPLATE" for details
    --no-split-chapters                                     Do not split video based on chapters (default)
    --remove-chapters REGEX                                 Remove chapters whose title matches the given regular expression. The
                                                            syntax is the same as --download-sections. This option can be used
                                                            multiple times
    --no-remove-chapters                                    Do not remove any chapters from the file (default)
    --force-keyframes-at-cuts                               Force keyframes at cuts when downloading/splitting/removing sections. This
                                                            is slow due to needing a re-encode, but the resulting video may have fewer
                                                            artifacts around the cuts
    --no-force-keyframes-at-cuts                            Do not force keyframes around the chapters when cutting/splitting
                                                            (default)
    --use-postprocessor NAME[:ARGS]                         The (case-sensitive) name of plugin postprocessors to be enabled, and
                                                            (optionally) arguments to be passed to it, separated by a colon ":". ARGS
                                                            are a semicolon ";" delimited list of NAME=VALUE. The "when" argument
                                                            determines when the postprocessor is invoked. It can be one of
                                                            "pre_process" (after video extraction), "after_filter" (after video passes
                                                            filter), "video" (after --format; before --print/--output), "before_dl"
                                                            (before each video download), "post_process" (after each video download;
                                                            default), "after_move" (after moving the video file to its final
                                                            location), "after_video" (after downloading and processing all formats of
                                                            a video), or "playlist" (at end of playlist). This option can be used
                                                            multiple times to add different postprocessors

  SponsorBlock Options:
    Make chapter entries for, or remove various segments (sponsor, introductions, etc.) from downloaded YouTube videos using the
    SponsorBlock API (https://sponsor.ajay.app)

    --sponsorblock-mark CATS                                SponsorBlock categories to create chapters for, separated by commas.
                                                            Available categories are sponsor, intro, outro, selfpromo, preview,
                                                            filler, interaction, music_offtopic, hook, poi_highlight, chapter, all and
                                                            default (=all). You can prefix the category with a "-" to exclude it. See
                                                            [1] for descriptions of the categories. E.g. --sponsorblock-mark
                                                            all,-preview [1] https://wiki.sponsor.ajay.app/w/Segment_Categories
    --sponsorblock-remove CATS                              SponsorBlock categories to be removed from the video file, separated by
                                                            commas. If a category is present in both mark and remove, remove takes
                                                            precedence. The syntax and available categories are the same as for
                                                            --sponsorblock-mark except that "default" refers to "all,-filler" and
                                                            poi_highlight, chapter are not available
    --sponsorblock-chapter-title TEMPLATE                   An output template for the title of the SponsorBlock chapters created by
                                                            --sponsorblock-mark. The only available fields are start_time, end_time,
                                                            category, categories, name, category_names. Defaults to "[SponsorBlock]:
                                                            %(category_names)l"
    --no-sponsorblock                                       Disable both --sponsorblock-mark and --sponsorblock-remove
    --sponsorblock-api URL                                  SponsorBlock API location, defaults to https://sponsor.ajay.app

  Extractor Options:
    --extractor-retries RETRIES                             Number of retries for known extractor errors (default is 3), or "infinite"
    --allow-dynamic-mpd                                     Process dynamic DASH manifests (default) (Alias: --no-ignore-dynamic-mpd)
    --ignore-dynamic-mpd                                    Do not process dynamic DASH manifests (Alias: --no-allow-dynamic-mpd)
    --hls-split-discontinuity                               Split HLS playlists to different formats at discontinuities such as ad
                                                            breaks
    --no-hls-split-discontinuity                            Do not split HLS playlists into different formats at discontinuities such
                                                            as ad breaks (default)
    --extractor-args IE_KEY:ARGS                            Pass ARGS arguments to the IE_KEY extractor. See "EXTRACTOR ARGUMENTS" for
                                                            details. You can use this option multiple times to give arguments for
                                                            different extractors

  Preset Aliases:
    Predefined aliases for convenience and ease of use. Note that future versions of yt-dlp may add or adjust presets, but the
    existing preset names will not be changed or removed

    -t mp3                                                  -f 'ba[acodec^=mp3]/ba/b' -x --audio-format mp3

    -t aac                                                  -f 'ba[acodec^=aac]/ba[acodec^=mp4a.40.]/ba/b' -x --audio-format aac

    -t mp4                                                  --merge-output-format mp4 --remux-video mp4 -S
                                                            vcodec:h264,lang,quality,res,fps,hdr:12,acodec:aac

    -t mkv                                                  --merge-output-format mkv --remux-video mkv

    -t sleep                                                --sleep-subtitles 5 --sleep-requests 0.75 --sleep-interval 10 --max-sleep-
                                                            interval 20

See full documentation at  https://github.com/yt-dlp/yt-dlp#readme
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

<!-- what you do first, how you would do later. (they will parse the same, just to be compatible. a user could have many ways to do the same thing.) -->

<!-- use either lowercase or mixed case. -->

<!-- flags is too shell specific and technical. we ts guys write options. -->

```
~ % cli -h
description

Usage: cli <command> [options]

Commands:
  foo    do foo
  bar    do bar

Options:
  -h, --help       Print help
  -v, --version    Print help
```

<!-- no coloring/styling by default i guess. as they dont have to be standardized, and can vary. (e.g. you use mtf pride colors.). upd: well, i think commands should be bold to separate w desc for better scanning, i strongly lean to it now. -->

<!-- i prefer at least 4 spaces between --help and print help by default even wo the need of padding. you can have 1, 2, or 3 if you like. it's just a personal pref. -->

#

how to print styled text in a cli

To print styled text in a Command Line Interface (CLI), you can <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use <strong>ANSI escape sequences</strong>, <strong>native shell utilities</strong>, or <strong>language-specific libraries</strong></mark>. \[[1](https://medium.com/javarevisited/7-best-java-cli-libraries-you-should-know-ed7717452523), [2](https://codemia.io/knowledge-hub/path/how%5Fdo%5Fi%5Fprint%5Fcolored%5Ftext%5Fto%5Fthe%5Fterminal)]

Here is how to implement each method:

1\. Raw ANSI Escape Sequences

ANSI sequences are special codes that instruct the terminal to change text formatting. They follow the structure . You must always print the reset code `\033[0m` at the end to prevent the styling from bleeding into the rest of your terminal line. \[[1](https://dev.to/gbhorwood/writing-command-line-scripts-in-php-part-5-styling-output-text-1bcp), [2](https://www.youtube.com/shorts/YkYEXSu0ij0), [3](https://www.geeksforgeeks.org/linux-unix/how-to-print-colored-text-to-the-linux-terminal/), [4](https://dev.to/gbhorwood/writing-command-line-scripts-in-php-part-5-styling-output-text-1bcp)]

- **Shell (Bash/Zsh):** Use `echo -e` to enable backslash interpretation.\
  bash

<!---->

```
echo -e "\033[1;31mBold Red Text\033[0m"
```

Use code with caution.

- **Python:** Include the sequences directly in your print string.\
  python

<!---->

```
print("\033[4;32mUnderlined Green Text\033[0m")
```

Use code with caution.

- **Common ANSI Codes:**
  - `0`: Reset everything
  - `1`: **Bold**
  - `4`: Underline
  - `31` to `37`: Foreground Colors (Red, Green, Yellow, Blue, Magenta, Cyan, White)
  - `41` to `47`: Background Colors \[[1](https://stackoverflow.com/questions/524667/printing-styled-text-to-the-terminal), [2](https://www.youtube.com/watch?v=zOebojGgvnU\&t=1), [3](https://dev.to/dev%5Fneil%5Fa/python-how-to-adding-color-and-styles-to-terminal-text-3699), [4](https://mauricebrg.com/article/2020/08/cli%5Ftext%5Fstyling%5Fprogress%5Fbars%5Fand%5Fprompts%5Fwith%5Fclick.html), [5](https://cli.r-lib.org/reference/ansi-styles.html), [6](https://www.geeksforgeeks.org/linux-unix/how-to-print-colored-text-to-the-linux-terminal/), [7](https://www.youtube.com/shorts/YkYEXSu0ij0), [8](https://dev.to/gbhorwood/writing-command-line-scripts-in-php-part-5-styling-output-text-1bcp)]

2\. POSIX `tput` Utility \[[1](https://www.geeksforgeeks.org/linux-unix/how-to-print-colored-text-to-the-linux-terminal/)]

If you want to avoid hardcoding cryptic ANSI numbers in shell scripts, use the native `tput` tool. It looks up terminal capabilities dynamically. \[[1](https://stackoverflow.com/questions/524667/printing-styled-text-to-the-terminal), [2](https://www.geeksforgeeks.org/linux-unix/how-to-print-colored-text-to-the-linux-terminal/)]

bash

```
# Define styles
RED=$(tput setaf 1)
BOLD=$(tput bold)
RESET=$(tput sgr0)

# Print styled text
echo "${BOLD}${RED}This is bold red text${RESET}"
```

Use code with caution.

3\. High-Level Programming Libraries

For advanced formatting (like tables, progress bars, or nested tags), use established ecosystem packages that handle cross-platform compatibility automatically. \[[1](https://stackoverflow.com/questions/287871/how-do-i-print-colored-text-to-the-terminal), [2](https://mauricebrg.com/article/2020/08/cli%5Ftext%5Fstyling%5Fprogress%5Fbars%5Fand%5Fprompts%5Fwith%5Fclick.html), [3](https://medium.com/@mohammad.el.prince93/customize-your-cli-terminal-formatting-with-the-rich-library-cb7f4f4b1f64), [4](https://python.plainenglish.io/supercharge-your-terminal-output-with-pythons-rich-library-a-developer-s-guide-to-beautiful-ea8848e8208c), [5](https://richard-dev.medium.com/how-to-generate-nice-text-formatting-in-system-terminal-with-python-c18c8547201c)]

- **Python ([Rich](https://github.com/textualize/rich)):** Allows simple, BBCode-like tags.\
  python

<!---->

```
from rich import print
print("[bold magenta]Bold Magenta[/bold magenta] and [underline]Underlined[/underline]")
```

Use code with caution.

- **Python ([Colorama](https://stackoverflow.com/questions/287871/how-do-i-print-colored-text-to-the-terminal)):** Best for multi-platform ANSI support (Windows/Linux).\
  python

<!---->

```
from colorama import Fore, Style, init
init(autoreset=True)
print(Fore.CYAN + Style.BRIGHT + "Bright Cyan Text")
```

Use code with caution.

- **Node.js (Chalk):** The standard for JavaScript/TypeScript CLIs.\
  javascript

<!---->

```
import chalk from 'chalk';
console.log(chalk.blue.bgYellow.bold('Hello world!'));
```

Use code with caution.

- **Go (Fatih/Color):** Popular color package for Go binaries.\
  go

<!---->

```
color.Cyan("Prints text in cyan.")
```

Use code with caution.\
\[[1](https://github.com/textualize/rich), [2](https://stackoverflow.com/questions/287871/how-do-i-print-colored-text-to-the-terminal), [3](https://richard-dev.medium.com/how-to-generate-nice-text-formatting-in-system-terminal-with-python-c18c8547201c), [4](https://medium.com/@mohammad.el.prince93/customize-your-cli-terminal-formatting-with-the-rich-library-cb7f4f4b1f64), [5](https://medium.hexlabs.io/typescript-based-command-line-interface-cli-with-node-js-e2d7a0db84d7)]

If you are developing a specific utility, let me know **which programming language** you are using and **what kind of styling** (colors, borders, layouts) you want to build.

- [link](https://stackoverflow.com/questions/524667/printing-styled-text-to-the-terminal)\
  Printing styled text to the terminal - Stack Overflow\
  Feb 7, 2009 — Comments. Add a comment. 1. You can do this from any shell script using the tput program to output terminfo codes. Oddly, there's ...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/287871/how-do-i-print-colored-text-to-the-terminal)\
  How do I print colored text to the terminal? - Stack Overflow\
  Nov 13, 2008 — 17 Comments. ... The answer is Colorama for all cross-platform coloring in Python. It supports Python 3.5+ as well as Python 2.7. ...\
  Stack Overflow
- [link](https://mauricebrg.com/article/2020/08/cli%5Ftext%5Fstyling%5Fprogress%5Fbars%5Fand%5Fprompts%5Fwith%5Fclick.html)\
  CLI Text styling, Progress Bars and more with Python and Click\
  Aug 24, 2020 — Fortunately Click makes things easy for us as developers. It has a couple of functions that wrap the underlying magic and abstract...\
  Maurice Borgmeier

Show all

i use node

To print styled text in a Node.js CLI, use the **Chalk** library for basic styling or the **Inquirer / Clack** ecosystems for interactive layouts.

Here is how to set up and use the best options in Node.js:

1\. The Standard Choice: Chalk

Chalk is the most popular library for styling terminal text. It features an intuitive, chainable API and automatically detects terminal color support.

**Installation:**

bash

```
npm install chalk
```

Use code with caution.

**Implementation (ES Modules):**

javascript

```
import chalk from 'chalk';

// Basic modifiers and colors
console.log(chalk.blue('Hello world!'));
console.log(chalk.bold.red('Error: Something went wrong!'));

// Chaining backgrounds and foregrounds
console.log(chalk.white.bgGreen.bold(' SUCCESS '));

// Nesting styles
console.log(`
  ${chalk.cyan('Project Status:')}
  - Build: ${chalk.green('Passing')}
  - Coverage: ${chalk.yellow('78%')}
`);
```

Use code with caution.

2\. The Zero-Dependency Alternative: Pico-Colors

If package size or dependency bloat is a concern for your project, `picocolors` is a tiny, faster alternative to Chalk.

**Installation:**

bash

```
npm install picocolors
```

Use code with caution.

**Implementation:**

javascript

```
import pc from 'picocolors';

console.log(pc.green(`Task completed successfully!`));
console.log(pc.bold(pc.red('Critical Failure.')));
```

Use code with caution.

3\. Native Node.js `util.inspect` colors

For quick debugging without installing any third-party npm packages, you can force Node's native utility formatter to output colored strings.

javascript

```
import util from 'util';

const text = 'Quick Warning';
// 33 is the ANSI code for yellow foreground
const styled = util.inspect(text, { colors: true });

console.log(`\x1b[33m${text}\x1b[0m`); // Or raw ANSI
```

Use code with caution.

4\. For Full UI Component Layouts: Ink

If you want to build a highly complex CLI with layouts, borders, and dynamic updates (like an interactive dashboard), use **Ink**, which lets you build CLIs using React.

jsx

```
import React from 'react';
import {render, Text} from 'ink';

const App = () => <Text color="green">Hello World from React CLI</Text>;
render(<App />);
```

Use code with caution.

I can help you build out a full layout. Let me know if you need to build **interactive prompts** (like checkboxes and inputs) or if you want to add **loading spinners** to your scripts.

#

how to create a tui in a cli via node

Text User Interfaces (TUIs) add interactive visual elements like menus, boxes, and charts to standard Command Line Interfaces (CLIs). \[[1](https://www.linkedin.com/pulse/introduction-textual-building-modern-text-user-interfaces-nuno-bispo-idlpe), [2](https://medium.com/@ashwinjosh/tui-speed-of-a-cli-comfort-of-a-gui-5a0dc249de1d)]

🛠️ Core Libraries to Use

- Blessed: The classic, comprehensive library providing rich widgets like boxes, lists, and forms.
- Neo-blessed: A actively maintained fork of Blessed fixing legacy bugs.
- Ink: A modern framework that lets you build TUIs using React components.
- Blessed-contrib: An extension for Blessed specifically designed for rich dashboards, line charts, and grids. \[[1](https://medium.com/@trinitietp/building-terminal-user-interfaces-a-todo-app-case-study-967ed4427b64), [2](https://realpython.com/videos/building-uis-terminal-textual-overview/), [3](https://duan.ca/2016/12/26/making-tui-programs-in-swift/), [4](https://medium.datadriveninvestor.com/using-css-to-style-a-python-tui-with-textual-a-comprehensive-guide-36c392edf40b), [5](https://blog.logrocket.com/7-tui-libraries-interactive-terminal-apps/)]

📝 Step-by-Step Implementation (Using Neo-blessed)

1\. Initialize Project

bash

```
mkdir node-tui-demo && cd node-tui-demo
npm init -y
npm install neo-blessed
```

Use code with caution.

2\. Create the Layout (`index.js`) \[[1](https://medium.com/swlh/start-a-project-with-your-custom-node-js-command-line-tool-5b92a083a9a7)]

javascript

```
const blessed = require('neo-blessed');

// Create the terminal screen container
const screen = blessed.screen({
  smartCSR: true,
  title: 'My Custom Node TUI'
});

// Create a structural layout box
const box = blessed.box({
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  content: '{center}Welcome to the TUI!{/center}\n\nPress {bold}q{/bold} to exit.',
  tags: true,
  border: { type: 'line' },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: { fg: '#f0f0f0' }
  }
});

// Append elements to the main screen
screen.append(box);
```

Use code with caution.

3\. Handle User Input and Quit Controls

javascript

```
// Listen for exit keystrokes
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
  return process.exit(0);
});

// Focus management
box.focus();

// Render everything onto the terminal screen
screen.render();
```

Use code with caution.

4\. Run the Interface

bash

```
node index.js
```

Use code with caution.

💡 Design Best Practices

- **Handle Resize:** Always call `screen.on('resize', ...)` to recalculate dimensions when users stretch the terminal window.
- **Clean Exit:** Ensure your exit listeners explicitly restore the terminal cursor state using `process.exit(0)`.
- **Color Constraints:** Stick to basic ANSI 16-color palettes to guarantee text readability across different user terminal themes. \[[1](https://textual.textualize.io/guide/app/)]

I can help you build out a full layout, if you tell me:

- What **type of application** you are building (e.g., dashboard, database viewer, setup wizard)

- Whether you prefer standard **JavaScript/object-oriented syntax** or a **React-based component framework**

- [link](https://www.linkedin.com/pulse/introduction-textual-building-modern-text-user-interfaces-nuno-bispo-idlpe)\
  Introduction to Textual: Building Modern Text User Interfaces in Python\
  Dec 17, 2024 — A Text User Interface (TUI) is a type of user interface that allows users to interact with a program through text-based commands a...\
  \
  \
  LinkedIn

- [link](https://medium.com/@ashwinjosh/tui-speed-of-a-cli-comfort-of-a-gui-5a0dc249de1d)\
  TUI: Speed of a CLI, Comfort of a GUI | by AshJo\
  Jan 7, 2026 — Unlike traditional CLI (Command Line Interface) that is strictly “request-response” (you type a command, it spits out text), a TUI...\
  \
  \
  Medium

- [link](https://medium.com/@trinitietp/building-terminal-user-interfaces-a-todo-app-case-study-967ed4427b64)\
  Building Terminal User Interfaces: A Todo App Case Study\
  Jan 4, 2026 — TUIs are interactive applications that run in your terminal, using text characters to create visual interfaces complete with table...\
  \
  \
  Medium

Show all

how does it work under the hood. how to create a tui wo libraries.

Under the hood, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Terminal User Interfaces (TUIs) manipulate the terminal screen by sending raw bytes called <strong>ANSI escape codes</strong> over the standard output stream</mark> (`stdout`).

Here is exactly how it works fundamentally and how to build one using only native Node.js features.

⚙️ How it Works Under the Hood

The terminal is a grid of text cells with a cursor pointing to specific coordinates `(X,Y)`. When you output text, it draws sequentially from left to right. TUIs bypass this sequential flow using three foundational mechanics:

1. **ANSI Escape Codes:** These are special, invisible strings starting with `\x1b[` (Escape char) that the terminal intercepts. Instead of printing them, the terminal executes a command like moving the cursor, changing colors, or clearing screens.
2. **Raw Mode:** By default, terminals wait for the user to press `Enter` before sending input to Node.js. TUIs switch the terminal into "Raw Mode" so every single keystroke is instantly processed byte-by-byte.
3. **Alternate Screen Buffer:** Terminals have a secondary canvas hidden behind your normal scrollback history. TUIs switch to this clean canvas on startup and restore your previous terminal text when exiting.

***

🛠️ Creating a TUI Without Libraries

Node.js provides two built-in modules to handle this directly: `process.stdout` (for rendering) and `readline` (for handling raw keyboard input).

1\. The Complete Zero-Dependency Script (`tui.js`)

Save the following code into a file and run it using `node tui.js`:

javascript

```
const readline = require('readline');

// --- 1. ANSI Escape Code Helpers ---
const ESC = '\x1b[';
const CLEAR_SCREEN = `${ESC}2J`;
const CURSOR_HOME = `${ESC}H`;
const HIDE_CURSOR = `${ESC}?25l`;
const SHOW_CURSOR = `${ESC}?25h`;
const ALTM_ON = `${ESC}?1049h`;  // Enter alternate screen buffer
const ALTM_OFF = `${ESC}?1049l`; // Exit alternate screen buffer
const COLOR_BLUE = `${ESC}44m${ESC}37m`; // Blue BG, White FG
const COLOR_RESET = `${ESC}0m`;

// --- 2. State & Setup ---
let selectedOption = 0;
const options = ['Launch App', 'Settings', 'View Logs', 'Exit'];

// Enter raw mode to intercept keystrokes instantly
process.stdin.setRawMode(true);
readline.emitKeypressEvents(process.stdin);

// Switch to the clean hidden canvas and hide the blinking cursor
process.stdout.write(ALTM_ON + CLEAR_SCREEN + HIDE_CURSOR);

// --- 3. Rendering Engine ---
function render() {
  // Move cursor back to the top left cell (0,0)
  process.stdout.write(CURSOR_HOME);

  // Render a basic layout box
  process.stdout.write(`===================================\n`);
  process.stdout.write(`         ZERO-LIB NODE TUI         \n`);
  process.stdout.write(`===================================\n\n`);
  process.stdout.write(` Use UP/DOWN arrows. Press ENTER.  \n\n`);

  // Render the interactive menu options
  options.forEach((option, index) => {
    if (index === selectedOption) {
      // Highlight the active row using ANSI colors
      process.stdout.write(`  ${COLOR_BLUE} > ${option} ${COLOR_RESET}\n`);
    } else {
      process.stdout.write(`    ${option}\n`);
    }
  });
}

// --- 4. Input Handler ---
process.stdin.on('keypress', (str, key) => {
  // Handle manual exit via Ctrl+C
  if (key.ctrl && key.name === 'c') {
    cleanupAndExit();
  }

  // Navigate options array
  if (key.name === 'up') {
    selectedOption = (selectedOption - 1 + options.length) % options.length;
    render();
  } else if (key.name === 'down') {
    selectedOption = (selectedOption + 1) % options.length;
    render();
  } else if (key.name === 'return') {
    handleSelection();
  }
});

function handleSelection() {
  if (options[selectedOption] === 'Exit') {
    cleanupAndExit();
  } else {
    // Briefly display action on screen
    process.stdout.write(`\n Selected: ${options[selectedOption]}!`);
    setTimeout(render, 800);
  }
}

// --- 5. Clean Exit Routine ---
function cleanupAndExit() {
  // Restore screen buffer, show cursor, and terminate process
  process.stdout.write(ALTM_OFF + SHOW_CURSOR);
  process.exit(0);
}

// Initial draw execution
render();
```

Use code with caution.

***

🎨 Key ANSI Codes Decoded

If you want to expand your layout, you can write these raw strings to `process.stdout.write()` manually:

- **Move Cursor to Coordinates:** `${ESC}${Y};${X}H` (Note: 1-indexed, e.g., `\x1b[5;10H` moves cursor to row 5, column 10).
- **Clear Current Line:** `${ESC}2K`
- **Text Styling:** `${ESC}1m` (Bold), `${ESC}4m` (Underline), `${ESC}7m` (Invert colors).

I can help you build custom layout engines, if you tell me:

- Do you want to add **mouse click tracking** support?
- Do you need to handle **terminal window resizing** dynamically?
- Should we build a custom **text wrapping or box-drawing** function?

how to create a tui directly using shell

To build a Terminal User Interface (TUI) directly in a shell script without installing extra packages, you <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use native shell constructs coupled with basic <strong>ANSI escape codes</strong></mark> \[1, 2].

Below are the two standard ways to achieve this: using native shell variables (the lightweight, manual way) and using the built-in `tput` tool (the more robust way).

***

🛠️ Method 1: Using Native Shell and ANSI Codes (Zero Dependencies)

Save this script as `tui.sh`, make it executable (`chmod +x tui.sh`), and run it: \[[1](https://github.com/sdcampbell/Bash-TUI-Example), [2](https://emerging.commons.gc.cuny.edu/2013/10/making-twitter-bot-python-tutorial/)]

bash

```
#!/bin/bash

# --- 1. ANSI Escape Codes ---
ESC=$'\e['
ALTM_ON="${ESC}?1049h"   # Switch to alternate clean canvas
ALTM_OFF="${ESC}?1049l"  # Restore previous terminal content
CLEAR="${ESC}2J"         # Clear entire screen
CURSOR_OFF="${ESC}?25l"  # Hide cursor blinker
CURSOR_ON="${ESC}?25h"   # Restore cursor blinker
HOME="${ESC}H"           # Move cursor to 0,0

# Color Codes
COLOR_BLUE="${ESC}44m${ESC}37m"
COLOR_RESET="${ESC}0m"

# --- 2. Menu State ---
options=("Launch Server" "Run Migrations" "View Config" "Exit")
selected=0

# --- 3. Clean Exit Function ---
cleanup() {
    echo -ne "$ALTM_OFF$CURSOR_ON" # Restore cursor and screen
    stty echo                      # Turn input echoing back on
    exit 0
}
trap cleanup SIGINT SIGTERM # Intercept Ctrl+C gracefully

# --- 4. Configuration ---
stty -echo                  # Hide user keystroke text on screen
echo -ne "$ALTM_ON$CLEAR$CURSOR_OFF"

# --- 5. Render Engine ---
render_menu() {
    echo -ne "$HOME" # Reset cursor to top-left
    echo "==================================="
    echo "         NATIVE SHELL TUI          "
    echo "==================================="
    echo " Use UP/DOWN arrows. Press ENTER.  "
    echo ""

    for i in "${!options[@]}"; do
        if [ $i -eq $selected ]; then
            # Highlight selected row
            echo -e "  ${COLOR_BLUE} > ${options[$i]} ${COLOR_RESET}"
        else
            echo "     ${options[$i]}"
        fi
    done
}

# --- 6. Input Event Loop ---
while true; do
    render_menu

    # Read a 3-character ANSI sequence for arrow keys (e.g., \e[A)
    read -rsn3 key

    case "$key" in
        # Up Arrow
        "$ESC"A)
            ((selected--))
            [ $selected -lt 0 ] && selected=$((${#options[@]} - 1))
            ;;
        # Down Arrow
        "$ESC"B)
            ((selected++))
            [ $selected -ge ${#options[@]} ] && selected=0
            ;;
        # Enter Key (Returns empty or newline depending on system)
        "")
            if [ "${options[$selected]}" == "Exit" ]; then
                cleanup
            else
                echo -e "\n Executing: ${options[$selected]}..."
                sleep 1
            fi
            ;;
    esac
done
```

Use code with caution.

***

🏗️ Method 2: Using `tput` (Recommended for Compatibility)

Hardcoded ANSI escapes can occasionally fail if a user uses an uncommon terminal type. The built-in command `tput` queries the system's database (`terminfo`) to find the exact escape codes matching the active terminal profile.

Instead of raw string definitions, you initialize your variables like this:

bash

```
#!/bin/bash

# Query terminal-specific strings safely
ALTM_ON=$(tput smcup)    # Save screen / enter alternate canvas
ALTM_OFF=$(tput rmcup)   # Restore screen
CLEAR=$(tput clear)      # Clear screen
CURSOR_OFF=$(tput civis) # Hide cursor
CURSOR_ON=$(tput cnorm)  # Show cursor

# Text styling
BG_BLUE=$(tput setab 4)
FG_WHITE=$(tput setaf 7)
RESET=$(tput sgr0)

# Move cursor precisely to row 5, column 10
move_cursor() {
    tput cup 5 10
}

# Automatically get terminal size on the fly
LINES=$(tput lines)
COLUMNS=$(tput cols)
```

Use code with caution.

***

🧰 Alternative: Linux-Native TUI Tools

If you are open to using a tiny pre-installed utility instead of coding the matrix arrays manually from scratch, almost all Linux/macOS engines come bundled with `dialog` or `whiptail`. They generate immediate interfaces using a single pipeline:

bash

```
# This creates a native utility window natively using your shell configurations
whiptail --title "System Menu" --menu "Choose an option:" 15 50 4 \
"1" "Start Application" \
"2" "Stop Application" \
"3" "View Hardware Logs" \
"4" "Exit" 3>&1 1>&2 2>&3
```

Use code with caution.

I can help expand this shell environment, if you tell me:

- Do you need to capture text **form inputs or checkboxes**?

- Should we construct a logic that handles terminal window **resizing events**?

- What **specific shell flavor** are you deploying to (e.g., `bash`, `zsh`, or lightweight POSIX `sh`)?

- [link](https://github.com/sdcampbell/Bash-TUI-Example)\
  sdcampbell/Bash-TUI-Example: A starter package for a Bash TUI program · GitHub\
  Getting Started Make the script executable: chmod +x tui.sh Run the script: ./tui.sh\
  \
  GitHub

- [link](https://emerging.commons.gc.cuny.edu/2013/10/making-twitter-bot-python-tutorial/)\
  Making a Twitter bot in Python (tutorial) – Emerging Tech in Libraries\
  Oct 24, 2013 — Step 4. Run script! You'll notice that this script must always be running—that is, an IDLE window must always be open running it, ...\
  \
  \
  The City University of New York

why can ansi escape codes create a tui. i dont think tui is just colors and styles.

You are completely right. A TUI is much more than just static colors and bold text—it requires dynamic element positioning, structural overlays, keyboard/mouse capture, and an efficient frame-rendering pipeline.

ANSI escape codes can create a complete TUI because they don't just format text; **they control the terminal hardware's state, memory buffers, and grid mechanics.**

Here is the exact technical breakdown of how raw text strings are converted into a full interactive interface.

***

1\. The Terminal Screen is an Addressable Grid

To build a layout (like sidebars, panels, or popups), you must have pixel-like control. By default, typing a character pushes the cursor forward horizontally.

ANSI escape codes unlock **absolute coordinate addressing**. The command `\x1b[Y;XH` instantly moves the hardware cursor to any Row (Y) and Column (X) cell on the grid.

- **How layouts work:** The shell script calculates coordinates. To draw a sidebar, it moves the cursor to `(1,1)`, prints a border line, jumps down to `(2,1)`, prints another line, and loops. By controlling exact coordinates, you can overwrite any text cell on the screen at any millisecond without touching the rest of the layout.

***

2\. Dual Canvas Management (Memory Buffers)

A primary rule of a TUI is that it shouldn't destroy your terminal history. If you run a TUI and exit, your previous command lines should seamlessly reappear.

Terminals achieve this by maintaining two structural memory buffers: the **Primary Buffer** (your normal shell) and the **Alternate Buffer**.

- Sending `\x1b[?1049h` tells the terminal emulator to stop rendering the primary history and switch to a completely blank secondary canvas memory space.
- Sending `\x1b[?1049l` flips it back, instantly restoring your previous command prompt as if nothing happened.

***

3\. Screen Repainting vs. Differential Rendering

If you cleared the screen and rewrote everything from scratch every time a user pressed a key, the terminal would visibly flicker.

TUI engines avoid this by using ANSI codes to selectively clear specific pieces of memory:

- `\x1b[K`: Clears text from the cursor position to the exact end of the current line.
- `\x1b[1J`: Clears everything from the cursor up to the top of the screen.

Because you can move the cursor dynamically and clear specific lines, a TUI engine tracks a virtual matrix of the screen in your code. When a user presses "Down Arrow", the engine calculates _only_ what changed (re-drawing the old row without a highlight, and the new row with a highlight) and executes cursor jumps to modify just those specific cells.

***

4\. Interactive Input Processing (Raw Mode)

ANSI escapes handle the rendering side, but interactivity requires changing how the operating system reads data.

Normally, the OS operates in **Cooked Mode (Canonical Mode)**. It buffers characters in memory until the user hits `Enter`. This allows the user to backspace and fix typos before the program ever sees the text.

To make a TUI, you trigger a system command (like `stty raw` in Shell or `process.stdin.setRawMode(true)` in Node.js). This bypasses the OS buffer entirely. The moment a user presses a key, the terminal translates that hardware action into an **inbound ANSI sequence** (e.g., pressing Up Arrow sends the string `\x1b[A` directly to your program). Your application reads this string instantly, changes the state, and triggers an absolute-coordinate redraw.

***

🗺️ Summary of the Core Anatomy

| Feature           | The Non-TUI Way                | The TUI Mechanism                           |
| ----------------- | ------------------------------ | ------------------------------------------- |
| **Output flow**   | Sequential (Top to Bottom)     | **Absolute Coordinates** (`\x1b[Y;XH`)      |
| **Canvas**        | Appends to scroll history      | **Alternate Screen Buffer** (`\x1b[?1049h`) |
| **State updates** | Prints new lines over old ones | **Targeted Erasing** (`\x1b[K`)             |
| **Keystrokes**    | Pauses and waits for `Enter`   | **Raw Stream Input** (`stty raw`)           |

When combined, these mechanics allow an application to treat the command-line display as an interactive canvas of state-driven widgets rather than a dumb scroll of text.

I can help explain how these components work together further, if you tell me:

- Would you like to see how a TUI **calculates bounding boxes** for overlapping windows?
- Are you interested in how **mouse hovering and clicking** are handled via escape sequences?

it does not feel really compatible. you could not even fill the full w and h if they are not using terminals like kitty.

Your skepticism is entirely valid. Relying on raw, hardcoded ANSI codes **will** break or look broken on different setups. However, the limitation isn't that other terminals can't fill the full width and height—it is that **they speak slightly different dialects of ANSI, use different window resize event names, and report their screen sizes differently**. \[[1](https://unix.stackexchange.com/questions/548158/in-2019-is-it-safe-to-assume-that-all-terminals-understand-ansi-escape-codes), [2](https://jvns.ca/blog/2025/03/07/escape-code-standards/)]

Even lightweight, default terminals like Windows Console, macOS Terminal.app, `gnome-terminal`, or `xterm` can perfectly fill a full-screen TUI layout. They just require a standardized negotiation layer instead of hardcoded strings. \[[1](https://stackoverflow.com/questions/74905115/is-ansi-standard-and-portable-for-terminals), [2](https://unix.stackexchange.com/questions/118806/tmux-term-and-256-colours-support), [3](https://softwareengineering.stackexchange.com/questions/285242/are-ansi-escape-sequences-proper-for-coloring-text-in-terminallinux)]

Here is how cross-terminal compatibility actually works under the hood to ensure full-screen scaling without relying on bleeding-edge emulators like Kitty.

***

1\. How Terminals Know Their Width and Height

A TUI does not hardcode screen dimensions. It queries the operating system's pseudo-terminal (pty) master file descriptor. The terminal emulator updates this descriptor dynamically whenever a user drags and resizes the window.

To fill the screen natively across varying environments, you fetch the layout bounds directly from the kernel interface:

- **In Node.js:** `process.stdout.rows` and `process.stdout.columns` pull current integers directly from the active window engine.
- **In Shell scripts:** The system utility `tput lines` and `tput cols` fetches the boundary values cleanly. \[[1](https://blog.sanctum.geek.nz/terminal-colour-tolerance/)]

javascript

```
// A basic responsive canvas boundary listener in Node.js
process.stdout.on('resize', () => {
  const width = process.stdout.columns;
  const height = process.stdout.rows;

  // Re-calculate your UI box geometry based on these fresh variables
  drawLayout(width, height);
});
```

Use code with caution.

***

2\. The `terminfo` Database: The True Compatibility Fix

The reason hardcoded sequences like `\x1b[?1049h` (Alternate Screen Buffer) feel incompatible is that some older or specific terminals use a different string, such as `\x1b[?47h` or `\x1b[?1047h`.

To solve this, Linux, macOS, and BSD systems use a built-in dictionary database called **`terminfo`**. \[[1](https://softwareengineering.stackexchange.com/questions/285242/are-ansi-escape-sequences-proper-for-coloring-text-in-terminallinux)]

1. When your terminal emulator launches, it injects an environment variable named `$TERM` (e.g., `TERM=xterm-256color` or `TERM=screen`).
2. When a program needs to clear the screen or fill dimensions, it looks up the `$TERM` value inside the `terminfo` database to extract the _exact_ byte sequence certified for that specific application wrapper. \[[1](https://github.com/davidvontamar/ansi-term), [2](https://unix.stackexchange.com/questions/118806/tmux-term-and-256-colours-support), [3](https://softwareengineering.stackexchange.com/questions/285242/are-ansi-escape-sequences-proper-for-coloring-text-in-terminallinux)]

This is why production-grade TUI frameworks never use raw escape strings; they use wrappers that communicate directly with `terminfo`. \[[1](https://bmf-tech.com/posts/terminal-specifications-for-tui-development/), [2](https://softwareengineering.stackexchange.com/questions/285242/are-ansi-escape-sequences-proper-for-coloring-text-in-terminallinux)]

***

3\. Production TUI Engine vs. Toy Scripts

When you build a robust TUI application, the engine uses a layered pipeline designed to normalize these compatibility gaps:

```
[ Your Application UI Logic ]
             │
             ▼
[ Virtual Screen Matrix ] ──► Computes grid differences in memory
             │
             ▼
[ Terminfo / Windows API ] ──► Translates layout into the user's terminal language
             │
             ▼
[ User Terminal Emulator ] ──► (Kitty, Alacritty, iTerm2, Windows Terminal, Command Prompt)
```

1. **The Virtual Matrix:** The engine creates an array of strings in memory matching the user's terminal dimensions (e.g., an 80x24 grid text buffer).
2. **The Layout Engine:** It renders changes onto this _virtual_ matrix first.
3. **The Diff / Flush:** It compares the new virtual matrix against the old framework state. It generates and flashes _only_ the specific ANSI characters required to fix mutated terminal boxes, bypassing rendering lag, artifact drops, or screen flicker.

⚠️ Real Incompatibilities to Watch Out For

While filling the screen and processing arrows works almost anywhere, real fragmentation occurs with advanced modern formatting: \[[1](https://www.n0nb.us/blog/2020/02/tinkering-in-the-terminal-with-tput/)]

- **Graphics & Images:** Protocols like the Kitty Graphics Protocol or Sixel are inconsistent across standard configurations.
- **True Color (24-bit RGB):** Older setups drop back smoothly to basic 16 or 256 ANSI indexing blocks.
- **Complex Unicode/Emojis:** Text wrapping math frequently breaks because some emojis or East Asian characters occupy two physical grid columns instead of one. \[[1](https://github.com/nmeum/saneterm), [2](https://www.reddit.com/r/linuxquestions/comments/16xyizt/whats%5Fup%5Fwith%5Fterminal%5Femulators%5Fwhat%5Fdoes/), [3](https://blog.sanctum.geek.nz/terminal-colour-tolerance/), [4](https://github.com/davidvontamar/ansi-term)]

I can help clarify these mechanics, if you tell me:

- What **specific OS environments** your CLI application needs to target?

- Whether you want to test how your layout behaves during active **resize events**?

- [link](https://www.reddit.com/r/linuxquestions/comments/16xyizt/whats%5Fup%5Fwith%5Fterminal%5Femulators%5Fwhat%5Fdoes/)\
  What's up with terminal emulators? What does emulating mean?\
  Oct 2, 2023 — When people say they want a specific emulation type, they want support for the specific command set that was available in that pro...\
  Reddit·r/linuxquestions

- [link](https://unix.stackexchange.com/questions/548158/in-2019-is-it-safe-to-assume-that-all-terminals-understand-ansi-escape-codes)\
  In 2019, is it safe to assume that all terminals understand ANSI ...\
  Oct 22, 2019 — I have written quite a few scripts which just output raw ANSI sequences independently of TERM (usually with an option to turn that...\
  Unix & Linux Stack Exchange

- [link](https://jvns.ca/blog/2025/03/07/escape-code-standards/)\
  Standards for ANSI escape codes - Julia Evans\
  Mar 7, 2025 — ANSI escape codes are responsible for a lot of usability improvements in the terminal (did you know there's a way to copy to your ...\
  Julia Evans

Show all

no. many popular tui does not play well in gnome terminal or ghostty, where you might see some borders of your original bg color. they only work w kitty. i dont think it's because they are lazy.

You are spot on, and this touches the most frustrating, pedantic engineering limitation of terminal architecture. You are entirely correct that it is not laziness—developers aren't failing to code it right. \[[1](https://github.com/ghostty-org/ghostty/discussions/8375)]

The visual glitch where you see borders/margins of your original window background color in GNOME Terminal or Ghostty, but it looks seamless in Kitty, is caused by a core architectural conflict between **grid spacing mathematics**, **window padding constraints**, and **how different terminal engines repaint margins**. \[[1](https://github.com/ghostty-org/ghostty/discussions/8375), [2](https://github.com/kovidgoyal/kitty/issues/1579)]

***

🧩 The Root Cause: "The Fractional Character Gutter"

A terminal emulator forces your operating system to draw a graphical window (measured in exact pixels, e.g., \\(1412 \times 823\text{px}\\)). However, a TUI layout strictly handles a grid of mono-spaced text cells (measured in character integers, e.g., \\(80 \times 24\\) columns and rows). \[[1](https://blog.codeminer42.com/modern-terminals-alacritty-kitty-and-ghostty/)]

The math almost never divides perfectly:\
\\(\text{Window\ Width\ (Pixels)}\div \text{Font\ Character\ Width\ (Pixels)}=\text{Whole\ Characters}+\text{Remainder\ Pixels}\\)

If your terminal window width leaves a remainder of `7 pixels` at the edge, a TUI engine **cannot draw text or background cells there**. A character cell must be a whole block; you cannot render "half a column" of a TUI widget. Those leftover pixels form a dead structural zone called the **Gutter** or **Window Margin**. \[[1](https://github.com/kovidgoyal/kitty/issues/1579), [2](https://github.com/anomalyco/opencode/issues/19383)]

***

🏛️ Why This Splits Ghostty, GNOME Terminal, and Kitty

When a full-screen TUI (like Neovim, Lazygit, or a bubbletea app) forces a custom background color across the entire canvas, the application fills every single whole character coordinate it can reach. What happens to those remaining gutter pixels is entirely up to how the terminal emulator handles margin clipping: \[[1](https://github.com/ghostty-org/ghostty/discussions/8375), [2](https://www.reddit.com/r/swift/comments/1ltxnt9/how%5Fto%5Fprevent%5Fbackground%5Fcolor%5Ffrom%5Fbleeding/)]

1\. GNOME Terminal (GTK Margin Leak)

GNOME Terminal relies heavily on the generic GTK widget rendering tree. When a TUI application clears the terminal screen using ANSI background codes, it fills the cell array memory matrix. However, the outer window frame padding belongs purely to the desktop GTK wrapper, not the terminal grid cell array. GNOME Terminal leaves those remainder edge pixels colored as whatever your _default profile theme background_ is set to, resulting in visible borders slicing through your app's custom theme. \[[1](https://www.reddit.com/r/gnome/comments/rgn8j8/the%5Fgnome%5Fterminal%5Fis%5Fawesome/), [2](https://github.com/anomalyco/opencode/issues/19383)]

2\. Ghostty (The Adaptive Margin Strategy)

Ghostty handles this using specific, highly defensive logic. Because Ghostty is engineered with sub-pixel text rendering accuracy, it hits this fractional character clipping barrier constantly. By default, Ghostty intentional checks the nearest edge rows. If your TUI app changes the background color, Ghostty tries to adapt, but if a prompt or specific block-drawn line doesn't align mathematically with the window container geometry, it drops back to the master configuration theme, causing thin lines of your original background color to bleed through. \[[1](https://github.com/ghostty-org/ghostty/discussions/8375), [2](https://github.com/anomalyco/opencode/issues/19383)]

3\. Kitty (The Force-Fill Hack)

The reason it looks perfect in Kitty is because its creator implemented a specific brute-force rendering fallback. Kitty's layout engine isolates the leftover gutter pixel values. When an application changes the terminal's default color palette dynamically over ANSI, Kitty stretches its canvas renderer to intentionally flood-fill the remainder padding margin pixels with the _most recently requested background color_, seamlessly masking the leftover math gap. \[[1](https://github.com/kovidgoyal/kitty/issues/1579)]

***

🛠️ How to Fix It Without Changing Terminals

If you are building or using a TUI and hate this background bleed in Ghostty or GNOME Terminal, you can circumvent it using two methods:

Fix 1: Force Terminal Padding to Zero

You can configure the terminal emulator itself to completely drop its window frame margins so the character cells slam directly into the edge of the window frame:

- **In Ghostty config:** `window-padding-x = 0` and `window-padding-y = 0`
- **In GNOME Terminal:** This requires editing your desktop `~/.config/gtk-3.0/gtk.css` file to force `.vte-terminal` padding to `0`.

Fix 2: TUI Theme Fallback (The True-Color Trick)

If you are developing a TUI, do not manually paint your background color onto every single cell using a custom RGB token (e.g., `\x1b[48;2;40;44;52m`). Instead, send the ANSI sequence to change the **Terminal Default Background Palette Slot (`\x1b]11;#282c34\x07`)**. This changes the primary canvas layer color underneath, forcing GNOME Terminal and Ghostty to naturally paint the gutters your TUI's target color. \[[1](https://github.com/ghostty-org/ghostty/discussions/8375), [2](https://stackoverflow.com/questions/32793537/how-to-change-the-background-color-of-tui-using-python-dialog)]

I can provide the code sequences to change those master terminal palette slots, if you tell me:

- What **programming language / framework** your favorite TUIs are built with?

- Whether you are seeing this bleed mostly on the **bottom/right edges** or evenly on **all four sides**? \[[1](https://github.com/anomalyco/opencode/issues/19383)]

- [link](https://www.reddit.com/r/gnome/comments/rgn8j8/the%5Fgnome%5Fterminal%5Fis%5Fawesome/)\
  The GNOME Terminal is awesome! - Reddit\
  Dec 15, 2021 — The answer is because this is not a goal for kitty. kitty deliberately throttles input parsing and output rendering to minimize re...\
  Reddit·r/gnome

- [link](https://github.com/ghostty-org/ghostty/discussions/8375)\
  TUI theme matching ghostty bg is filled correctly but window ...\
  Aug 24, 2025 — The nearest row has any cells that have the default background color. The thinking is that in this case, the default background co...\
  GitHub

- [link](https://github.com/anomalyco/opencode/issues/19383)\
  terminal background color mismatch on pixel gutter edges ...\
  Mar 26, 2026 — Set terminal profile to a non-default background color. Set OpenCode theme to something different. Run opencode, maximize or snap ...\
  GitHub

Show all

wo kitty, they could not even display an image easily. many simply dont use sans serif when it more fits, but monospace everywhere. and they could not have things like border shadow, those we take for granted in css.

You are completely right, and this hits the absolute core of why **the terminal paradigm is structurally broken for modern design.** You cannot blame developers for being lazy because the technical constraints they are fighting against are baked directly into the operating system's virtual tty architecture. \[[1](https://lobste.rs/s/r8kjli/claude%5Fis%5Felectron%5Fapp%5Fbecause%5Fwe%5Fve%5Flost)]

The issues you mentioned—images failing, font limitations, and the lack of dropshadows—exist because **terminals are hard-coded to treat the screen as a rigid grid of integer coordinates rather than a canvas of independent pixels**. \[[1](https://www.reddit.com/r/linux/comments/1cvowew/is%5Fthe%5Fline%5Fbetween%5Ftuis%5Fand%5Fguis%5Fblurring%5Fwhats/)]

***

1\. The Monospace Mandate: Why Sans-Serif Breaks the Grid

In web development (`HTML/CSS`), text layout engines use **proportional rendering**. An `i` takes up 4 pixels, while a `W` takes up 12 pixels. The browser computes the layout using float bounding boxes.

Terminals cannot do this because the underlying engine maps everything to a two-dimensional grid array. \[[1](https://www.reddit.com/r/linux/comments/1cvowew/is%5Fthe%5Fline%5Fbetween%5Ftuis%5Fand%5Fguis%5Fblurring%5Fwhats/), [2](https://lobste.rs/s/r8kjli/claude%5Fis%5Felectron%5Fapp%5Fbecause%5Fwe%5Fve%5Flost)]

- **The Math:** Every character block **must be identical in width and height** (e.g., exactly 9x18 pixels).
- **The Layout Failure:** If a TUI engine tries to render a standard sans-serif font, the letter `i` leaves a massive gap inside its grid block, while a `W` clips into the next block.
- **The Breakage:** Because a TUI calculates positions mathematically by counting column units (e.g., "draw box border at column 40"), introducing a proportional font instantly breaks column alignment, causing menus, borders, and text boxes to misalign and shatter across the screen. \[[1](https://www.reddit.com/r/linux/comments/1cvowew/is%5Fthe%5Fline%5Fbetween%5Ftuis%5Fand%5Fguis%5Fblurring%5Fwhats/)]

***

2\. The Image Hack: Why Protocols Conflict Outside Kitty

To display a raster image, a screen must paint raw pixel bitmaps. Terminals were originally built only to convert text bytes into font glyphs. Kitty handles this because it bypasses the text pipeline and sends compressed image data over raw graphics escape sequences directly to the GPU. \[[1](https://www.reddit.com/r/linux/comments/1cvowew/is%5Fthe%5Fline%5Fbetween%5Ftuis%5Fand%5Fguis%5Fblurring%5Fwhats/)]

Without Kitty's protocol, displaying an image breaks down into highly fragmented, low-quality workarounds:

- **The Sixel Protocol:** An ancient 1980s graphics standard that splits an image into horizontal strips of 6 pixels tall. Many standard terminal configurations drop it entirely because it is slow and scales poorly.
- **The Braille/Block Art Hack:** Terminals like GNOME Terminal are forced to translate images into text characters. They analyze pixels and use Unicode blocks (like `▄`, `▀`, `█`) or Braille glyphs (`⠏`, `⠹`) combined with ANSI color blocks. This drops your image resolution down significantly, transforming your graphic into coarse ASCII art. \[[1](https://lobste.rs/s/r8kjli/claude%5Fis%5Felectron%5Fapp%5Fbecause%5Fwe%5Fve%5Flost)]

***

3\. CSS Features: Why Border Shadows are Mathematically Impossible

Features we take for granted in CSS, like `box-shadow: 0 4px 8px rgba(0,0,0,0.2);`, rely on **sub-pixel anti-aliasing** and **alpha transparency blending**.

A terminal matrix completely lacks the concepts required to draw a shadow layer:

```
┌──────────────────┐ ◄── Top Window Layer (Solid Text Cells)
│   TUI WINDOW     │
└──────────────────┘
   ░░░░░░░░░░░░░░░░  ◄── The "Shadow" is just a hardcoded line of grey text cells
```

- **No Layers (Z-Index):** A terminal is flat. It contains exactly one memory layer of text cells. You cannot place a window _above_ a background layer and have its shadow softly blur into the content underneath.
- **No True Transparency:** To make a shadow look real, the pixels must blend mathematically with whatever is behind them. A terminal cell can only be a single solid background color index and a single foreground color index.
- **The Best a TUI Can Do:** A developer has to manually draw a hardcoded border row using a solid dark gray character cell (like `░` or a black background block) shifted 1 column to the right and 1 row down. This results in a rigid, blocky "shadow" rather than a smooth, realistic depth effect. \[[1](https://www.reddit.com/r/linux/comments/1cvowew/is%5Fthe%5Fline%5Fbetween%5Ftuis%5Fand%5Fguis%5Fblurring%5Fwhats/)]

Ultimately, trying to force advanced layouts into a terminal is like trying to build a modern responsive web app using a typewriter protocol. Developers aren't lazy; they are just trapped inside a 50-year-old grid system. \[[1](https://lobste.rs/s/r8kjli/claude%5Fis%5Felectron%5Fapp%5Fbecause%5Fwe%5Fve%5Flost)]

If you want to look deeper into this, let me know:

- Would you like to see how modern projects like **Charm's Bubbletea** handle pseudo-shadow text rendering?

- Are you interested in how **GPU-accelerated terminal engines** are attempting to redesign the grid specification?

- [link](https://lobste.rs/s/r8kjli/claude%5Fis%5Felectron%5Fapp%5Fbecause%5Fwe%5Fve%5Flost)\
  Claude is an Electron App because we've lost native - Lobsters\
  Mar 3, 2026 — It makes me want to go and write something just to prove that we don't need this crazy stuff. \* 14. davidg 2 months ago. The why i...\
  Lobste.rs

- [link](https://www.reddit.com/r/linux/comments/1cvowew/is%5Fthe%5Fline%5Fbetween%5Ftuis%5Fand%5Fguis%5Fblurring%5Fwhats/)\
  Is the line between TUIs and GUIs blurring? What's ... - Reddit\
  May 19, 2024 — This is also not something that one would call TUI. T in TUI stands for Text-based and if majority of the interface is graphical t...\
  Reddit·r/linux

kitty works fine. but it's only for tui. i mean it's not a compatible layer for tui, but another terminal. many features i love simply dont exist.

You have reached the ultimate conclusion of the terminal dilemma. The core frustration is that **Kitty is a proprietary playground, not a standard framework.**

When you use a cutting-edge feature in Kitty, you are not writing a true "TUI"; you are building a specific app that targets Kitty’s unique custom engine. If a user tries to run your application in standard Linux setups like GNOME Terminal, it will break immediately.

The exact reasons why the features you love cannot just be "ported" as a universally compatible layer for other terminals come down to three major structural deadlocks.

***

1\. The Input Protocol Trap: Why You Can't Have Rich Keybinds Everywhere \[[1](https://lobste.rs/s/quulrs/why%5Ftuis%5Fare%5Fback)]

In standard CSS or GUI apps, you can easily detect complex shortcuts like `Ctrl + Shift + UpArrow` or map `Enter` and `Shift + Enter` to completely different actions.

Standard terminals cannot do this because of ancient legacy encoding. To the operating system, pressing `Enter` and pressing `Ctrl + M` look completely identical—they both just send a raw byte code `0x0D` (Carriage Return). The terminal cannot tell them apart. \[[1](https://lobste.rs/s/quulrs/why%5Ftuis%5Fare%5Fback)]

- **The Kitty Way:** The creator of Kitty built a custom workaround called the **[Kitty Keyboard Protocol](https://sw.kovidgoyal.net/kitty/graphics-protocol/)**. It rewires how keystrokes are packaged into advanced escape streams, unlocking all modifier key combinations natively.
- **The Compatibility Wall:** For this to work everywhere, the developer of the terminal engine, the shell layer, and the TUI application framework must all explicitly implement support for Kitty's proprietary keyboard specification. If a user tries to run a rich text input TUI in a standard fallback terminal, the advanced keybinds vanish. \[[1](https://lobste.rs/s/quulrs/why%5Ftuis%5Fare%5Fback), [2](https://github.com/badlogic/pi-mono/issues/439), [3](https://sw.kovidgoyal.net/kitty/faq/)]

***

2\. The Graphics Split: Sixel vs. GPU Buffers

While newer applications like Ghostty have finally begun integrating support for the Kitty Graphics Protocol, the rest of the terminal landscape remains deeply fractured over how images should be drawn: \[[1](https://x.com/mitchellh/status/2041253090205249584)]

```
                  ┌──► Kitty Protocol ──► Direct GPU Canvas Cache (Fastest)
                  │
Terminal Graphics ├──► Sixel Protocol ──► Ancient 6-pixel serial strips (Slow)
                  │
                  └──► Unicode Hack   ──► Blocks & Braille text symbols (Low Res)
```

Because there is no universally standardized graphics specification built directly into the core operating system tty driver, TUI builders are forced to pick a side. If they design a smooth inline image preview using Kitty's GPU caching, it will fail or render as corrupted raw text garbage on any terminal that only speaks legacy Sixel protocols. \[[1](https://www.reddit.com/r/archlinux/comments/17838od/does%5Fkitty%5Fhave%5Fa%5Flot%5Fmore%5Ffeatures%5Fthan%5Fother/), [2](https://lobste.rs/s/quulrs/why%5Ftuis%5Fare%5Fback), [3](https://sw.kovidgoyal.net/kitty/faq/)]

***

3\. The `terminfo` Database is Broken \[[1](https://github.com/kovidgoyal/kitty/discussions/3873)]

To make a feature truly cross-compatible, it needs to be registered in a centralized operating system dictionary called **`terminfo`** so apps know it exists. \[[1](https://github.com/kovidgoyal/kitty/discussions/3873)]

If a TUI wants to know if a terminal supports 24-bit True Color or absolute cursor positioning, it queries this system database. However, the global `terminfo` database is maintained by a strict, conservative ecosystem that slow-walks changes. It does not natively recognize modern graphical extensions like Kitty's custom image layers or advanced border rendering. \[[1](https://github.com/kovidgoyal/kitty/discussions/3873), [2](https://github.com/dankamongmen/notcurses), [3](https://notcurses.com/notcurses-info.1.html)]

As a result, modern TUI engines like [Notcurses](https://notcurses.com/) have to completely bypass the standard operating system capability layers. They must write complex, manual runtime sniffing loops to try and guess exactly which terminal emulator the user is running before deciding whether it is safe to light up modern visual features. \[[1](https://github.com/dankamongmen/notcurses), [2](https://notcurses.com/)]

⚖️ The Takeaway

You aren't imagining it: the features you love only work seamlessly when you control both ends of the pipe (using Kitty to run an app explicitly tailored for Kitty). The moment you step outside that silo into general compatibility, you are dragged back to the functional limitations of 1970s hardware. \[[1](https://www.reddit.com/r/archlinux/comments/17838od/does%5Fkitty%5Fhave%5Fa%5Flot%5Fmore%5Ffeatures%5Fthan%5Fother/)]

If you are trying to design a CLI tool, let me know:

- Do you want to see how to write a script that safely **detects if the user is running Kitty** before enabling advanced features?

- Are you interested in looking at a modern framework like **Textual (Python)** or **Notcurses (C/C++)** that attempts to bridge this gap? \[[1](https://github.com/dankamongmen/notcurses), [2](https://github.com/badlogic/pi-mono/issues/439), [3](https://lobste.rs/s/ifbdw1/text%5Fmode%5Flie%5Fwhy%5Fmodern%5Ftuis%5Fare)]

- [link](https://www.reddit.com/r/archlinux/comments/17838od/does%5Fkitty%5Fhave%5Fa%5Flot%5Fmore%5Ffeatures%5Fthan%5Fother/)\
  Does Kitty have a lot more features than other terminals?\
  Oct 15, 2023 — The themes are good and easy af to make, as are plugins/customizations... I made one that dumps the buffer into fzf and lets you s...\
  Reddit·r/archlinux

- [link](https://github.com/kovidgoyal/kitty/discussions/3873)\
  Can we talk about "xterm-kitty"? \[I don't want to make trouble!]\
  Dec 2, 2025 — The very good reason is that live detection is \*slow\* and \*complex\*. It involves a round trip to the terminal emulator. It is \*emi...\
  GitHub

- [link](https://lobste.rs/s/quulrs/why%5Ftuis%5Fare%5Fback)\
  Why TUIs are back - Lobsters\
  May 2, 2026 — \* rockorager 4 days ago. The most impactful is kitty keyboard protocol. Attempts have been made by others, but the kitty protocol ...\
  Lobste.rs

Show all

#

how does cli options command or cli command options feel

The choice between putting options **before** the command (`cli --option command`) or **after** the command (`cli command --option`) changes how users perceive and interact with a Command Line Interface (CLI). \[[1](https://www.dell.com/support/manuals/en-in/dell-update-packages-v17.10.00/dup%5F17.10%5Fusers%5Fguide/linux-cli-options?guid=guid-c066694c-816b-4e90-a53b-3cd80041397c\&lang=en-us), [2](https://www.securemailmerge.com/knowledge/useful-outlook-command-line-switches/)]

`cli --option command` (Global Options First)

This structure modifies the entire execution environment before the specific action is stated.

- **Feel:** It feels highly administrative, configuration-heavy, and explicit.
- **Mental Model:** "Set the environment state, then execute this action."
- **Best For:** Global flags like `--verbose`, `--profile`, `--region`, or `--config-file`.
- **Pro:** It clarifies what global context applies to the sub-command.
- **Con:** It breaks user flow by delaying the primary action verbs.
- **Example:** `aws --profile production ec2 describe-instances` \[[1](https://docs.mparticle.com/developers/tools/cli/), [2](https://dev.to/msfaizi/aws-cli-important-useful-commands-2o4k)]

`cli command --option` (Sub-command Options First)

This structure treats the command as the primary action and the options as specific modifiers. \[[1](https://wiki.gnome.org/HowDoI%282f%29GtkApplication%282f%29CommandLine.html)]

- **Feel:** It feels natural, action-oriented, and conversational.
- **Mental Model:** "Do this specific action, and tweak it using these parameters."
- **Best For:** Most modern developer tools and daily-use applications.
- **Pro:** It matches standard human sentence structure (Verb + Object + Adverb).
- **Con:** Mixing global and local flags at the end can confuse syntax parsing.
- **Example:** `git commit -m "Fix bug"` \[[1](https://medium.com/pon-tech-talk/structuring-a-cli-22e2492717de), [2](https://zenn.dev/seiwan/articles/zenn-copilot-cli-lv3?locale=en), [3](https://slothbytes.beehiiv.com/p/the-command-line-for-dummies)]

Mixed Approach (The Modern Standard)

Most successful modern CLIs use a hybrid hierarchy to maximize usability.

- **Global flags** go immediately after the root binary.
- **Sub-commands** follow the global flags.
- **Local flags** go at the very end.
- **Example:** `docker --context remote run --rm -d alpine` \[[1](https://bashly.dev/configuration/command/)]

***

To help narrow down your design, tell me:

- What is the **primary purpose** of your CLI tool?
- Who is your **target audience** (sysadmins, frontend developers, data scientists)?
- Will your tool have **deeply nested sub-commands**? \[[1](https://dbader.org/blog/python-commandline-tools-with-click)]

I can help you map out the exact syntax structure for your application.

- [link](https://www.dell.com/support/manuals/en-in/dell-update-packages-v17.10.00/dup%5F17.10%5Fusers%5Fguide/linux-cli-options?guid=guid-c066694c-816b-4e90-a53b-3cd80041397c\&lang=en-us)\
  Dell Update Packages User's Guide | Dell India\
  Linux CLI Options CLI Option CLI Task Description Command Syntax -v,--version Display version option Display the version, fixes, e...\
  \
  Dell
- [link](https://www.securemailmerge.com/knowledge/useful-outlook-command-line-switches/)\
  15 Useful Outlook Command Line Switches You Should Know About\
  What is a Command Line Switch? A command line switch is a command-line parameter that modifies how a program or application, in th...\
  \
  \
  SecureMailMerge
- [link](https://docs.mparticle.com/developers/tools/cli/)\
  Tools | mParticle Command Line Interface\
  The CLI also provides universal command flags for global functions, such as --help or --outfile .\
  \
  \
  mParticle documentation

Show all

compare

Here is a direct side-by-side comparison of the two CLI design patterns based on key usability metrics.

Direct Comparison

| Metric             | `cli --option command` (Options First)            | `cli command --option` (Command First)          |
| ------------------ | ------------------------------------------------- | ----------------------------------------------- |
| **Mental Model**   | Configures environment before execution.          | Initiates action, then modifies details.        |
| **Readability**    | Feels technical and administrative.               | Feels natural and conversational.               |
| **Tab Completion** | Harder to auto-complete target actions.           | Highly efficient for discovering commands.      |
| **Scope**          | Best for **global** settings (e.g., credentials). | Best for **local** settings (e.g., file paths). |
| **Typing Flow**    | Delays the core verb or action.                   | Fast, action-oriented execution.                |

Key Trade-offs

- **The Discoverability Win:** Putting the command first helps users find actions using shell auto-completion (e.g., typing `git ` and hitting `Tab`).
- **The Context Win:** Putting options first ensures the system validates permissions, regions, or configurations _before_ attempting to run an invalid command.

***

To help you choose the best fit, tell me:

- What **programming language** or library are you using to build it (e.g., Go/Cobra, Node/Commander, Python/Click)?
- Are you deciding on a **specific command** right now that feels awkward?

I can provide concrete code syntax examples for your specific setup.

#

in a cli git repo in rust, i could not rg the literal text of the words in the help message anywhere, why. Commands: config Run the interactive configuration wizard sync Sync configured mirror groups once serve Run the webhook receiver webhook Install or uninstall repository webhooks help Print this message or the help of the given subcommand(s) ...\_/opensource/refray % rg 'Usage: refray' ...\_/opensource/refray % rg 'Mirror repositories between Git hosting providers' src/main.rs 25:#\[command(about = "Mirror repositories between Git hosting providers")] ...\_/opensource/refray % rg '\[OPTIONS] ' ...\_/opensource/refray % rg 'Usage:' ...\_/opensource/refray % rg 'Run the interactive configuration wizard' README.md 79:Run the interactive configuration wizard: src/main.rs 36: /// Run the interactive configuration wizard

The text you are searching for is missing because the Rust command-line argument parser—almost certainly clap—generates the layout dynamically at runtime.

Why the Text is Missing

- **Dynamic Generation:** `clap` templates the output layout.
- **Static Code:** Words like `Usage:` and `[OPTIONS]` live inside the `clap` crate dependency, not your project.
- **Doc Comments:** Subcommand descriptions (e.g., `Run the interactive configuration wizard`) are pulled from your code's triple-slash `///` comments.
- **Macro Processing:** The `#[command(...)]` attribute macro extracts these comments during compilation to build the help screen.

How to Find Hidden Text

If you need to find or modify the text, search for these patterns instead:

- **Subcommand Names:** Search for enum variants or struct fields in `src/main.rs`.
- **Doc Comments:** Search code for `///` right above your subcommand definitions.
- **Custom Templates:** Search for `.help_template()` or `help_template =` if the layout was customized.

***

To help find exactly what you need, tell me:

- Are you trying to **change the wording** of the help text?
- Are you trying to **change the layout/format** of the `Usage:` section?
- What **argument parsing library** is listed in your `Cargo.toml`?

well, it does appear. but how can a comment do things. ...\_/opensource/refray % rg 'Run the webhook receiver'\
src/main.rs\
40: /// Run the webhook receiver

In Rust, a triple-slash comment `///` is not a normal comment. It is a **documentation attribute** that the Rust compiler converts into code before the program compiles.

How Comments "Do Things"

- **Compiler Conversion:** The Rust compiler automatically transforms `/// Run the webhook receiver` into `#[doc = "Run the webhook receiver"]`.
- **Macro Access:** Because it becomes a `#[doc = ...]` attribute, Rust macros can read the literal text inside the comment.
- **Clap Extraction:** The `#[derive(Parser)]` macro from the `clap` library reads that specific doc attribute at compile time.
- **Runtime Delivery:** `clap` saves that text into the final binary and prints it when you type `--help`.

The Behind-The-Scenes Code

When you write this:

rust

```
/// Run the webhook receiver
struct ServeArgs;
```

Use code with caution.

The compiler sees and expands it to this:

rust

```
#[doc = "Run the webhook receiver"]
struct ServeArgs;
```

Use code with caution.

Then, the `clap` library macro extracts `"Run the webhook receiver"` and injects it into the CLI help menu automatically.

***

If you want to see exactly how this is configured in your project, let me know if you would like to:

- View the **struct or enum definition** around line 40 in your `src/main.rs`.
- See how to **disable or override** this automatic comment behavior.
- Learn how to use **expanded macros** to see the hidden generated code.

how does clap work under the hood

Under the hood, `clap` works by <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">using Rust's powerful <strong>procedural macros</strong> to inspect your code structure at compile time, coupled with a highly optimized <strong>string-matching engine</strong> that runs at runtime</mark>.

Here is exactly how `clap` processes your arguments from the source code to the terminal.

***

Phase 1: Compile Time (The Macro Magic)

When you run `cargo build`, your code isn't just compiled—it is first modified by `clap`'s derive macros.

```
[Your Struct + /// Comments]
       │
       ▼ (Compile Time)
[clap::Parser Derive Macro] ──► Reads types, names, and #[doc] attributes
       │
       ▼ (Code Generation)
[Generated Rust Code] ────────► Implements clap's `Command` builder pattern
```

1. **Token Inspection:** The `#[derive(Parser)]` macro acts as a compiler plugin. It reads your struct definition as a stream of code tokens.
2. **Attribute Parsing:** It looks for `#[arg(...)]` or `#[command(...)]` attributes. Crucially, it converts triple-slash `///` comments into `#[doc = "..."]` attributes and extracts the string.
3. **Code Generation:** The macro generates hidden Rust code. It converts your static struct into an imperatively built `clap::Command` graph. Your struct fields are mapped to argument types (e.g., becomes an optional flag, becomes a multi-value flag).

***

Phase 2: Runtime Initialization (Building the Graph)

When a user executes your binary, the first thing your `main` function calls is typically `Args::parse()`. \[[1](https://www.rustadventure.dev/introducing-clap/clap-v4/parsing-arguments-with-clap)]

1. **Object Allocation:** `clap` instantiates a `Command` object tree in memory.

2. **Metadata Setup:** It populates this tree with the strings extracted at compile time (like your help text, version number, and author).

3. **Formatting Templates:** It loads default internal layout templates. These templates contain the hardcoded layout structures you could not find with `rg`, such as:\
   text

<!---->

```
Usage: {usage}

Commands:
  {subcommands}
```

Use code with caution.

***

Phase 3: Runtime Parsing (The Matching Engine)

Once the data graph is ready, `clap` fetches the arguments passed by the operating system via `std::env::args_os`.

```
[os args: "refray", "sync"]
       │
       ▼
[Linear Tokenizer] ──► Splits flags (-s), short-clusters (-xyz), and values
       │
       ▼
[State Machine Engine] ──► Matches tokens against the Command graph
       │
       ▼
[ArgMatches Dictionary] ──► Holds successfully parsed strings
```

1. **Tokenization:** It loops through the arguments linearly. It identifies short flags (`-f`), long flags (`--force`), subcommands (`sync`), and positional values.
2. **State Machine:** `clap` uses a deterministic matching process. If it hits a token matching a subcommand name, it transitions the state machine into that subcommand's context.
3. **Validation:** During this loop, it checks for conflicts (e.g., if two flags cannot be used together), missing required fields, or invalid values.
4. **Short-Circuiting:** If the token matches `-h` or `--help`, `clap` immediately interrupts the loop, prints the dynamically generated help string using its formatter engine, and exits the program safely.

***

Phase 4: Data Hydration (Typing the Results)

If the arguments are valid, `clap` populates an internal generic dictionary called `ArgMatches`.

The final step of `Args::parse()` translates these raw text matches back into your strongly typed Rust struct:

- It looks up the key string for each field.
- It uses Rust's `FromStr` trait to parse strings into integers, booleans, or custom enums.
- It wraps them in `Option` or `Vec` depending on your struct's types.
- It returns your fully populated struct back to your `main` function. \[[1](https://www.rustadventure.dev/introducing-clap/clap-v4/parsing-arguments-with-clap)]

***

To explore deeper into `clap`'s internals, let me know if you want to:

- See how to use `cargo-expand` to **view the exact code** the macro generates.

- Learn how to bypass macros entirely and build the CLI using **`clap`'s builder API**.

- Understand how `clap` optimizes argument parsing for **zero-allocation** performance. \[[1](https://medium.com/@itsuki.enjoy/rust-take-your-cli-to-the-next-level-with-clap-a0f05875ef45)]

- [link](https://www.rustadventure.dev/introducing-clap/clap-v4/parsing-arguments-with-clap)\
  Rust Adventure\
  This trait requires implementing a parse function, so in our main function we can run Args::parse to parse the arguments since we ...\
  \
  \
  Rust Adventure

- [link](https://www.rustadventure.dev/introducing-clap/clap-v4/parsing-arguments-with-clap)\
  Rust Adventure\
  The main function We've generated the code that powers the parse function, so we can use Args::parse in our main function. This fu...\
  \
  \
  Rust Adventure

- [link](https://medium.com/@itsuki.enjoy/rust-take-your-cli-to-the-next-level-with-clap-a0f05875ef45)\
  Rust: Take Our CLI to the Next Level with Clap\
  Jan 14, 2024 — Clap offers the derive API and the builder API as two different methods of building out your CLI ( Command Line Interface ) app.\
  \
  Medium

#

what does clap do in rust

In Rust, **`clap`** (Command Line Argument Parser) is the standard, most popular crate used to **parse and validate command-line arguments** for terminal applications. Instead of manually writing error-prone logic to handle user inputs from the terminal, developers use `clap` to automatically map terminal commands, options, and flags into structured data. \[[1](https://www.youtube.com/watch?v=fD9ptABVQbI\&t=11), [2](https://github.com/sharkdp/clap-rs), [3](https://oneuptime.com/blog/post/2026-02-03-rust-clap-cli-applications/view)]

Key Functions of `clap`

- **Argument Parsing:** Extracts positional arguments, flags, and options passed to the terminal executable.
- **Automatic Help Generation:** Generates comprehensive `--help` and `-h` documentation screens directly from your source code and documentation comments.
- **Input Validation:** Enforces types, specific numeric ranges, required values, and mutual exclusions.
- **Error Handling:** Catches structural or semantic user mistakes, hints at corrections for typos, and prints structured terminal errors.
- **Nested Subcommands:** Facilitates hierarchical command menus similar to tools like `git` or `docker` (e.g., `tool user create --id 4`). \[[1](https://www.youtube.com/watch?v=Ot3qCA3Iv%5F8), [2](https://blog.logrocket.com/using-clap-rust-command-line-argument-parsing/), [3](https://www.youtube.com/watch?v=uirhS%5FY1164\&t=1), [4](https://zsiciarz.github.io/24daysofrust/book/vol2/day12.html), [5](https://github.com/sharkdp/clap-rs), [6](https://www.youtube.com/watch?v=fD9ptABVQbI\&t=11), [7](https://oneuptime.com/blog/post/2026-02-03-rust-clap-cli-applications/view)]

***

Implementation Options

The library is accessible via two distinct development interfaces: \[[1](https://medium.com/@itsuki.enjoy/rust-take-your-cli-to-the-next-level-with-clap-a0f05875ef45), [2](https://rust.code-maven.com/clap-simple)]

1. **The Derive API (Recommended):** Uses procedural macros to define terminal inputs declaratively via a standard Rust `struct` or `enum`.
2. **The Builder API:** Uses a functional builder pattern method-chaining approach to assemble CLI syntax configurations manually. \[[1](https://www.youtube.com/watch?v=uirhS%5FY1164\&t=1), [2](https://www.youtube.com/watch?v=fD9ptABVQbI\&t=11), [3](https://medium.com/@itsuki.enjoy/rust-take-your-cli-to-the-next-level-with-clap-a0f05875ef45)]

***

Core Structural Example (Derive API)

To configure `clap`, add it to your configuration inside `Cargo.toml` with the `derive` feature flag turned on: \[[1](https://blog.logrocket.com/using-clap-rust-command-line-argument-parsing/), [2](https://docs.rs/clap/latest/clap/%5Fderive/index.html), [3](https://www.rustadventure.dev/introducing-clap/clap-v4/initializing-a-new-rust-cli-project)]

toml

```
[dependencies]
clap = { version = "4.0", features = ["derive"] }
```

Use code with caution.

You then decorate a targeted structure to parse incoming console queries: \[[1](https://blog.logrocket.com/using-clap-rust-command-line-argument-parsing/), [2](https://medium.com/@mikecode/rust-how-to-use-clap-to-build-command-line-interfaces-cli-1613565eb891)]

rust

```
use clap::Parser;

/// Simple program to greet a person
#[derive(Parser, Debug)]
#[command(version, about, long_about = None)]
struct Args {
    /// Name of the person to greet
    #[arg(short, long)]
    name: String,

    /// Number of times to greet
    #[arg(short, long, default_value_t = 1)]
    count: u8,
}

fn main() {
    let args = Args::parse();

    for _ in 0..args.count {
        println!("Hello {}!", args.name);
    }
}
```

Use code with caution.

***

Generated CLI Capabilities

Compiling the code block above instantly structures terminal workflows.

- **Triggering the Help Interface:** Running `your_program --help` prints:\
  text

<!---->

```
Simple program to greet a person

Usage: your_program --name <NAME> [OPTIONS]

Options:
  -e, --name <NAME>      Name of the person to greet
  -c, --count <COUNT>    Number of times to greet [default: 1]
  -h, --help             Print help
  -V, --version          Print version
```

Use code with caution.

- **Passing Values:** Running `your_program --name Alice --count 3` populates the fields inside the `Args` struct at launch.
- **Validating Errors:** Running `your_program --count word` triggers an automated block: . \[[1](https://www.youtube.com/watch?v=fD9ptABVQbI\&t=11), [2](https://medium.com/@mikecode/rust-how-to-use-clap-to-build-command-line-interfaces-cli-1613565eb891), [3](https://0xpoe.dev/posts/2023-07-03-use-trycmd-to-test-your-rust-cli/)]

If you are building an application, let me know:

- What **arguments or flags** you need to parse?
- Do you need **nested subcommands** like `git commit`?
- Do you want to use the **Derive API** or the **Builder API**? \[[1](https://medium.com/@itsuki.enjoy/rust-take-your-cli-to-the-next-level-with-clap-a0f05875ef45)]

I can provide the exact code setup tailored to your application.

- [link](https://www.youtube.com/watch?v=Ot3qCA3Iv%5F8)\
  Parse Rust CLI Args With Clap 🦀 Rust Tutorial\
  Sep 9, 2023 — hey guys my name is Trevor Sullivan. and welcome back to my video channel thank you so much for joining me on my video series wher...\
  54:03\
  YouTube·Trevor Sullivan
- [link](https://www.youtube.com/watch?v=uirhS%5FY1164\&t=1)\
  Validate Command Line Arguments in Rust with Clap Crate\
  Feb 20, 2025 — hey guys my name is Trevor Sullivan welcome back to my video channel i know it's been a while since I've done a video on the Rust ...\
  14m\
  YouTube·Trevor Sullivan
- [link](https://www.youtube.com/watch?v=fD9ptABVQbI\&t=11)\
  Rust Command Line Argument Parsing (A Better Way With ...\
  Apr 21, 2022 — commands. so I can do Rustflixick user create and then I specify a name and an email it'll create the user i can do Rustflixick us...\
  5m\
  YouTube·Code to the Moon

Show all

example

Here is a practical example of a **`git`-style CLI** tool using `clap`'s subcommands.

Imagine you are building a database management tool called `dbtool` that can either **add a user** or **show data**.

1\. `Cargo.toml` Setup

Add `clap` to your dependencies with the `derive` feature enabled.

toml

```
[dependencies]
clap = { version = "4.5", features = ["derive"] }
```

Use code with caution.

2\. The Code (`src/main.rs`)

rust

```
use clap::{Args, Parser, Subcommand};

/// A fictional database management CLI tool
#[derive(Parser, Debug)]
#[command(name = "dbtool", version = "1.0", about, long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand, Debug)]
enum Commands {
    /// Add a new user to the database
    Add(AddArgs),
    /// Show current database status or items
    Show {
        /// Filter by specific table name
        #[arg(short, long)]
        table: Option<String>,
    },
}

#[derive(Args, Debug)]
struct AddArgs {
    /// The username of the new profile
    name: String,

    /// Mark the user as an administrator immediately
    #[arg(short, long)]
    admin: bool,
}

fn main() {
    let cli = Cli::parse();

    match &cli.command {
        Commands::Add(args) => {
            if args.admin {
                println!("Creating admin account for: {}", args.name);
            } else {
                println!("Creating standard account for: {}", args.name);
            }
        }
        Commands::Show { table } => {
            match table {
                Some(t) => println!("Displaying records from table: {}", t),
                None => println!("Displaying all database tables..."),
            }
        }
    }
}
```

Use code with caution.

3\. How to Interact with this CLI

Once compiled, you can test different interactions in your terminal:

- **View Main Help Page:**\
  bash

<!---->

```
$ dbtool --help
```

Use code with caution.\
_Output:_\
text

```
A fictional database management CLI tool

Usage: dbtool <COMMAND>

Commands:
  add   Add a new user to the database
  show  Show current database status or items
  help  Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
```

Use code with caution.

- **View Subcommand Help Page:**\
  bash

<!---->

```
$ dbtool add --help
```

Use code with caution.\
_Output:_\
text

```
Add a new user to the database

Usage: dbtool add [OPTIONS] <NAME>

Arguments:
  <NAME>  The username of the new profile

Options:
  -a, --admin  Mark the user as an administrator immediately
  -h, --help   Print help
```

Use code with caution.

- **Execute the Commands:**\
  bash

<!---->

```
$ dbtool add "John Doe" --admin
# Output: Creating admin account for: John Doe

$ dbtool show --table users
# Output: Displaying records from table: users
```

Use code with caution.

If you want to customize this further, tell me:

- What **specific tool** are you trying to build?
- Do you need to **validate file paths**, **restrict numeric choices**, or **read environment variables**?

I can modify this script to fit your exact requirements.

git or docker hierarchical command example

Here is an example mimicking a nested **`docker` command structure** using `clap`.

This setup handles deep, hierarchical paths like **`docker container run`** or **`docker container list`** using nested Rust enums.

1\. The Code (`src/main.rs`)

rust

```
use clap::{Args, Parser, Subcommand};

#[derive(Parser, Debug)]
#[command(name = "docker-clone", version = "1.0", about = "Mimicking Docker's nested CLI")]
struct Cli {
    #[command(subcommand)]
    command: ManagementCommands,
}

// Top-Level Management Commands (e.g., docker container ..., docker image ...)
#[derive(Subcommand, Debug)]
enum ManagementCommands {
    /// Manage application containers
    Container {
        #[command(subcommand)]
        subcommand: ContainerSubcommands,
    },
    /// Manage system images
    Image {
        #[command(subcommand)]
        subcommand: ImageSubcommands,
    },
}

// Level 2: Subcommands specifically for 'container'
#[derive(Subcommand, Debug)]
enum ContainerSubcommands {
    /// Run a command in a new container
    Run(ContainerRunArgs),
    /// List all local containers
    Ls {
        /// Show all containers (default shows just running)
        #[arg(short, long)]
        all: bool,
    },
}

#[derive(Args, Debug)]
struct ContainerRunArgs {
    /// Name of the image to deploy
    image: String,

    /// Run container in background and print container ID
    #[arg(short, long)]
    detach: bool,
}

// Level 2: Subcommands specifically for 'image'
#[derive(Subcommand, Debug)]
enum ImageSubcommands {
    /// Pull an image from a registry
    Pull { name: String },
    /// List repository images
    Ls,
}

fn main() {
    let cli = Cli::parse();

    // Navigate the hierarchy using match statements
    match &cli.command {
        ManagementCommands::Container { subcommand } => match subcommand {
            ContainerSubcommands::Run(args) => {
                if args.detach {
                    println!("Launching {} in the background...", args.image);
                } else {
                    println!("Attaching terminal to {}...", args.image);
                }
            }
            ContainerSubcommands::Ls { all } => {
                if *all {
                    println!("Listing ALL containers...");
                } else {
                    println!("Listing running containers...");
                }
            }
        },
        ManagementCommands::Image { subcommand } => match subcommand {
            ImageSubcommands::Pull { name } => {
                println!("Downloading image: {} from registry...", name);
            }
            ImageSubcommands::Ls => {
                println!("Displaying downloaded images...");
            }
        },
    }
}
```

Use code with caution.

2\. How the Help Screens Display

`clap` automatically routes the `--help` context down to the specific depth requested:

- **Main Command Help (`docker-clone --help`):**\
  text

<!---->

```
Mimicking Docker's nested CLI

Usage: docker-clone <COMMAND>

Commands:
  container  Manage application containers
  image      Manage system images
```

Use code with caution.

- **Sub-management Help (`docker-clone container --help`):**\
  text

<!---->

```
Manage application containers

Usage: docker-clone container <COMMAND>

Commands:
  run   Run a command in a new container
  ls    List all local containers
```

Use code with caution.

- **Action Command Help (`docker-clone container run --help`):**\
  text

<!---->

```
Run a command in a new container

Usage: docker-clone container run [OPTIONS] <IMAGE>

Arguments:
  <IMAGE>  Name of the image to deploy

Options:
  -d, --detach  Run container in background and print container ID
```

Use code with caution.

3\. Executing Commands

bash

```
$ docker-clone container run ubuntu --detach
# Output: Launching ubuntu in the background...

$ docker-clone image pull alpine
# Output: Downloading image: alpine from registry...
```

Use code with caution.

If you are expanding this architecture, let me know:

- How many **levels of nesting** do you need?
- Do you need to share global flags (like `--verbose`) **across all subcommands**?

I can write an update showing how to pass context down through the matching layers.

#

yaml syntax

**YAML** is a human-readable data serialization language used primarily for configuration files. It relies on indentation to define structure instead of brackets, braces, or quotation marks. \[[1](https://en.wikipedia.org/wiki/YAML), [2](https://www.youtube.com/watch?v=1uFVr15xDGg), [3](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started), [4](https://about.gitlab.com/topics/devops/what-is-yaml/)]

Basic Rules

- **Case sensitivity:** YAML is strictly case-sensitive.
- **Indentation:** You must use spaces. Tab characters are forbidden.
- **Hierarchy:** Elements at the same level must share identical indentation.
- **Document boundaries:** Files can optionally start with `---` and end with `...`. \[[1](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html), [2](https://quickref.me/yaml.html), [3](https://developers.redhat.com/learning/learn:ansible:yaml-essentials-ansible/resource/resources:ansible-yaml-file-syntax-and-structure), [4](https://www.home-assistant.io/docs/configuration/yaml/), [5](https://www.redhat.com/en/blog/yaml-nesting-lists-comments-ansible), [6](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)]

Key-Value Pairs (Mappings)

Mappings associate unique keys with values. The colon separating them must be followed by a space. \[[1](https://www.redhat.com/en/blog/yaml-beginners), [2](https://www.tutorialspoint.com/yaml/yaml%5Fbasics.htm), [3](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)]

yaml

```
# A simple mapping
microservice_name: "auth-api"
port_number: 8080
```

Use code with caution.

Lists (Sequences)

Lists store ordered values. Each item begins with a hyphen followed by a space. \[[1](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html), [2](https://www.redhat.com/en/blog/yaml-beginners), [3](https://www.home-assistant.io/docs/configuration/yaml/), [4](https://buildpiper.io/blogs/all-you-need-to-know-about-yaml-files/), [5](https://labex.io/tutorials/ansible-how-to-fix-error-syntax-error-while-loading-yaml-in-ansible-417291)]

yaml

```
# Block sequence
supported_formats:
  - JSON
  - YAML
  - XML
```

Use code with caution.

Nested Structures

Combine mappings and sequences by increasing the spacing level for nested child entries. \[[1](https://www.redhat.com/en/blog/yaml-nesting-lists-comments-ansible)]

yaml

```
deployment:
  environment: production
  replicas: 3
  containers:
    - name: web-server
      image: nginx:latest
    - name: cache
      image: redis:alpine
```

Use code with caution.

Data Types

YAML infers primitive types automatically without explicit quotes. \[[1](https://en.wikipedia.org/wiki/YAML), [2](https://en.wikipedia.org/wiki/YAML), [3](https://desgram.io/docs/02%5Fyaml.html)]

yaml

```
integer_value: 42
float_value: 3.14
boolean_value: true       # Use lowercase true/false
null_value: null          # Or leave blank
string_unquoted: Hello    # Quotes optional for simple strings
```

Use code with caution.

Multi-line Strings

Handle block text blocks using pipe (`|`) or right-angle (`>`) indicators. \[[1](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)]

- **Literal Block (`|`):** Preserves all original line breaks and trailing spaces.
- **Folded Block (`>`):** Converts single line breaks into spaces for long text strings. \[[1](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)]

yaml

```
literal_text: |
  Line one keeps its break.
  Line two keeps its break.

folded_text: >
  This long paragraph will wrap into
  a single continuous line of text.
```

Use code with caution.

Advanced Features

Comments

Any text on a line following a `#` is treated as a comment and ignored. \[[1](https://www.kerno.io/blog/yaml-file-format-complete-guide), [2](https://www.home-assistant.io/docs/configuration/yaml/)]

yaml

```
# This is a full-line comment
timeout: 30 # Inline comment
```

Use code with caution.

Flow Style (JSON Superset)

YAML natively supports inline JSON-like syntax using braces and brackets for clean data embedding. \[[1](https://www.commonwl.org/user%5Fguide/topics/yaml-guide.html), [2](https://en.wikipedia.org/wiki/YAML), [3](https://www.educative.io/blog/yaml-tutorial), [4](https://blog.dreamfactory.com/yaml-vs-json-which-format-fits-openapi-better), [5](https://levelup.gitconnected.com/yaml-the-when-where-and-what-of-the-pipeline-31e9e8cdb2bf)]

yaml

```
inline_list: [ItemA, ItemB, ItemC]
inline_map: { name: "John", age: 30 }
```

Use code with caution.

Anchors and Aliases

Avoid data duplication by defining anchors with `&` and referencing them with `*`. \[[1](https://quickref.me/yaml.html), [2](https://www.tutorialspoint.com/yaml/yaml%5Fbasics.htm)]

yaml

```
default_settings: &base_config
  timeout: 60
  retry_attempts: 3

api_service:
  <<: *base_config         # Inherits timeout and retry_attempts
  endpoint: "/v1/api"
```

Use code with caution.

If you are working on a specific implementation, let me know:

- What **platform or tool** are you writing this file for? (e.g., Kubernetes, Docker Compose, GitHub Actions, Ansible)
- What **data structure** are you trying to represent?

I can provide a complete, syntax-validated template tailored to your framework.

- [link](https://docs.ansible.com/projects/ansible/latest/reference%5Fappendices/YAMLSyntax.html)\
  YAML Syntax — Ansible Community Documentation\
  Apr 20, 2026 — YAML Basics. For Ansible, nearly every YAML file starts with a list. Each item in the list is a list of key/value pairs, commonly ...\
  Ansible documentation
- [link](https://en.wikipedia.org/wiki/YAML)\
  YAML - Wikipedia\
  YAML (/ˈjæməl/ YAM-əl) is a human-readable data serialization language. It is commonly used for configuration files and in applica...\
  Wikipedia
- [link](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)\
  YAML Tutorial: Everything You Need to Get Started in Minutes\
  Apr 20, 2025 — Whitespace is part of YAML's formatting. Unless otherwise indicated, newlines indicate the end of a field. You structure a YAML do...\
  CloudBees

Show all

what if i dont indent for lists

If you do not indent lists properly in YAML, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the file will either <strong>fail to parse (syntax error)</strong> or <strong>change the data meaning entirely</strong></mark>.

YAML relies strictly on spacing to understand relationships. Here is what happens depending on how you format it:

1\. Zero Indentation Under a Key (Syntax Error)

If you place a list directly under a key without indenting the hyphens, most parsers will throw an error because it breaks the parent-child relationship.

yaml

```
# ❌ INVALID (Will cause a parsing error)
fruits:
- apple
- banana
```

Use code with caution.

- **The fix:** Add two spaces before each hyphen so the parser knows the list belongs to `fruits`.

2\. No Indentation Between List Items and Mappings (Logical Error)

If you are nesting a list inside another list item and do not indent, the parser thinks all items belong to the same flat list.

yaml

```
# ❌ LOGICAL ERROR (Mixes up the structure)
servers:
  - name: web-01
  - port: 80       # Parser thinks "port" is a NEW server item, not a property of web-01
```

Use code with caution.

yaml

```
#  CORRECT (Indented properly)
servers:
  - name: web-01
    port: 80       # Properly nested under web-01
```

Use code with caution.

3\. Inline Lists (The No-Indentation Alternative)

If you do not want to use vertical indentation for a list, you must use **Flow Style** (JSON-like syntax) on a single line using square brackets.

yaml

```
#  VALID (No indentation needed)
fruits: [apple, banana, orange]
```

Use code with caution.

To help you fix or write your file correctly, tell me:

- Can you **paste the snippet** you are trying to format?
- What **error message** or unexpected behavior are you seeing?

I can rewrite the exact block with the correct spacing for you.

how to parse yaml in node

To parse YAML in Node.js, you must use a third-party library because Node.js does not support YAML natively. The industry standard package for this is `yaml`.

1\. Install the Library

Run this command in your project terminal to install the official package:

bash

```
npm install yaml
```

Use code with caution.

2\. Parse a YAML String

If you already have YAML data loaded as a string, use `YAML.parse()`.

javascript

```
import YAML from 'yaml'; // Or: const YAML = require('yaml');

const yamlString = `
server:
  port: 8080
  environment: production
`;

const data = YAML.parse(yamlString);
console.log(data.server.port); // Outputs: 8080
```

Use code with caution.

3\. Read and Parse a YAML File

To load data directly from a physical `.yaml` or `.yml` file, combine the library with Node's native file system (`fs`) module.

javascript

```
import fs from 'fs';
import YAML from 'yaml';

// Read the file synchronously
const fileContents = fs.readFileSync('./config.yaml', 'utf8');

// Parse the contents
const config = YAML.parse(fileContents);

console.log(config);
```

Use code with caution.

Alternative Library: `js-yaml`

Another highly popular and widely used alternative is `js-yaml`.

bash

```
npm install js-yaml
```

Use code with caution.

javascript

```
import fs from 'fs';
import yaml from 'js-yaml';

const config = yaml.load(fs.readFileSync('./config.yaml', 'utf8'));
```

Use code with caution.

If you want to build this out further, let me know:

- Do you need to **write/stringify** data back into a YAML file?
- Are you handling **multiple YAML documents** combined in a single file (separated by `---`)?

I can provide the exact code block to handle those scenarios.

yaml or js yaml

For modern Node.js applications, the **`yaml`** library is generally the better choice due to its full specification compliance and active development, while **`js-yaml`** remains ideal for projects where raw read performance is the top priority. \[[1](https://philna.sh/blog/2023/02/02/yaml-document-from-hell-javascript-edition/), [2](https://github.com/unjs/confbox/issues/33)]

The primary trade-offs between the two popular npm packages break down as follows:

Quick Comparison

| Feature \[[1](https://philna.sh/blog/2023/02/02/yaml-document-from-hell-javascript-edition/), [2](https://www.npmjs.com/package/yaml), [3](https://generalistprogrammer.com/tutorials/js-yaml-npm-package-guide), [4](https://github.com/eemeli/yaml/discussions/358), [5](https://github.com/nodeca/js-yaml)] | `yaml` (npm: yaml)                      | `js-yaml` (npm: js-yaml)                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------- |
| **Development Status**                                                                                                                                                                                                                                                                                         | **Actively maintained**                 | Infrequent maintenance                      |
| **Spec Compliance**                                                                                                                                                                                                                                                                                            | Strict YAML 1.1 & 1.2 support           | Strict YAML 1.2 support                     |
| **Parsing Speed**                                                                                                                                                                                                                                                                                              | Slower read execution                   | **Significantly faster read speed** (~2-4x) |
| **Comment Preservation**                                                                                                                                                                                                                                                                                       | **Yes** (retains comments when editing) | No (strips comments on rewrite)             |
| **API Complexity**                                                                                                                                                                                                                                                                                             | Richer API for node manipulations       | Simpler, classic load/dump API              |

***

Why Choose `yaml`?

The official `yaml` package on [npm: yaml](https://www.npmjs.com/package/yaml) has become the contemporary standard for modern JavaScript workflows. \[[1](https://www.npmjs.com/package/yaml)]

- **Comment Preservation:** If you parse a YAML configuration file, programmatically modify a setting, and stringify it back to a file, `yaml` **keeps your original code comments and blank lines intact**. `js-yaml` will permanently delete them.
- **Full Spec Alignment:** It passes the official YAML test suite completely. It handles multi-document files out of the box and tolerates string anomalies cleanly.
- **Active Support:** The package receives regular updates, security patches, and has robust built-in TypeScript definitions. \[[1](https://www.npmjs.com/package/yaml), [2](https://philna.sh/blog/2023/02/02/yaml-document-from-hell-javascript-edition/), [3](https://www.acylia.com/blog/posts/disclosure-js-yaml-3.14.0)]

javascript

```
import YAML from 'yaml';

// Best for modifying configurations without destroying documentation
const config = YAML.parse(fileContent);
```

Use code with caution.

***

Why Choose `js-yaml`?

The `js-yaml` library on [GitHub: js-yaml](https://github.com/nodeca/js-yaml) is a legacy powerhouse that still holds massive historical usage across the ecosystem. \[[1](https://github.com/nodeca/js-yaml)]

- **Blazing Fast Read Performance:** If your app continuously reads thousands of static files (such as processing markdown front-matter for static site generators), `js-yaml` can parse the text 2x to 4x faster than `yaml`.
- **Simpler API:** It utilizes an straightforward, familiar API via `yaml.load()` and `yaml.dump()`. \[[1](https://github.com/nodeca/js-yaml), [2](https://github.com/unjs/confbox/issues/33), [3](https://github.com/eemeli/yaml/discussions/358), [4](https://generalistprogrammer.com/tutorials/js-yaml-npm-package-guide)]

javascript

```
import yaml from 'js-yaml';

// Best for maximum performance reading read-only configuration data
const config = yaml.load(fileContent);
```

Use code with caution.

Recommendation

- Choose **`yaml`** if you are writing a modern app, need to **update and save** YAML programmatically, or use TypeScript.
- Choose **`js-yaml`** only if you have a massive build pipeline where file **read times** are a critical bottleneck. \[[1](https://www.npmjs.com/package/yaml), [2](https://github.com/unjs/confbox/issues/33), [3](https://medium.com/@sangimed/typescript-parsing-a-yaml-file-the-right-way-0240b75917af)]

Which of these constraints matters more for your application, **updating file contents** or **raw loading speed**?

- [link](https://www.npmjs.com/package/yaml)\
  yaml - NPM\
  May 11, 2026 — yaml is a definitive library for YAML, the human friendly data serialization standard. This library: Supports both YAML 1.1 and YA...\
  NPM
- [link](https://github.com/nodeca/js-yaml)\
  nodeca/js-yaml: JavaScript YAML parser and dumper. Very fast.\
  Online Demo. This is an implementation of YAML, a human-friendly data serialization language. Started as PyYAML port, it was compl...\
  GitHub
- [link](https://philna.sh/blog/2023/02/02/yaml-document-from-hell-javascript-edition/)\
  The yaml document from hell — JavaScript edition - Phil Nash\
  Feb 2, 2023 — Yaml in JavaScript. A search for JavaScript yaml parsers on npm brings up yaml (which I have used in my own project) and js-yaml. ...\
  Phil Nash

Show all
