# . learn

```sh
 ~ % tmux -h
tmux: unknown option -- h
usage: tmux [-2CDlNuVv] [-c shell-command] [-f file] [-L socket-name]
            [-S socket-path] [-T features] [command [flags]]
 ~ % tmux --help
usage: tmux [-2CDlNuVv] [-c shell-command] [-f file] [-L socket-name]
            [-S socket-path] [-T features] [command [flags]]
 ~ % tmux command
no current client
 ~ % tmux command --help
command command-prompt: invalid flag --
 ~ % tmux help
unknown command: help
 ~ % tmux h
 ~ % tmux ls
0: 1 windows (created Mon Jun 15 19:14:39 2026)
1: 1 windows (created Mon Jun 15 19:14:49 2026)
10: 1 windows (created Sun Jul  5 17:12:28 2026)
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 0
[exited]
 ~ % tmux ls
1: 1 windows (created Mon Jun 15 19:14:49 2026)
10: 1 windows (created Sun Jul  5 17:12:28 2026)
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 1
[exited]
 ~ % tmux ls
10: 1 windows (created Sun Jul  5 17:12:28 2026)
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 10
[exited]
 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 11
[detached (from session 11)]
 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 12
[exited]
 ~ % tmux a -t 2
[exited]
 ~ % for s in $(tmux ls -F '#{session_name}' 2>/dev/null); do [ $(tmux list-panes -t "$s" -F '#{pane_pid}' | xargs -I {} pgrep -P {} | wc -l) -eq 0 ] && tmux kill-session -t "$s"; done

 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 4
[detached (from session 4)]
 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % for s in $(tmux ls -F '#{session_name}' 2>/dev/null); do [ $(tmux list-panes -t "$s" -F '#{pane_pid}' | xargs -I {} pgrep -P {} | wc -l) -eq 0 ] && tmux kill-session -t "$s"; done

 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 9
[detached (from session 9)]
 ~ % tmux new -s 'hello'
[detached (from session hello)]
 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
hello: 1 windows (created Thu Jul  9 15:57:06 2026)
 ~ % for s in $(tmux ls -F '#{session_name}' 2>/dev/null); do [ $(tmux list-panes -t "$s" -F '#{pane_pid}' | xargs -I {} pgrep -P {} | wc -l) -eq 0 ] && tmux kill-session -t "$s"; done

 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux rename-session -t 1 hello
 ~ % tmux ls
9: 1 windows (created Sat Jul  4 20:13:52 2026)
hello: 1 windows (created Thu Jul  9 14:36:28 2026)
 ~ % tmux rename-session -t hello backend
 ~ % tmux ls
9: 1 windows (created Sat Jul  4 20:13:52 2026)
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
 ~ % tmux rename-session -t 9 web
 ~ % tmux ls
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
web: 1 windows (created Sat Jul  4 20:13:52 2026)
```

# . test

```sh
 ~ % tmux_ls
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
web: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux test
[detached (from session test)]
 ~ % tmux_ls
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
test: 1 windows (created Thu Jul  9 16:53:35 2026)
web: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux_kill test
 ~ % tmux_ls
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
web: 1 windows (created Sat Jul  4 20:13:52 2026)
```

```sh
 ~ % tmuxls
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
web: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux test
[detached (from session test)]
 ~ % tmuxls
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
test: 1 windows (created Thu Jul  9 16:55:02 2026)
web: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmuxclear
 ~ % tmuxl
zsh: command not found: tmuxl
 ~ % tmuxls
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
web: 1 windows (created Sat Jul  4 20:13:52 2026)
```

# . help

```sh
 ~ % tmux -h
=======================================
            SYSTEM METRICS
=======================================

  Current Status:
  Database Link:

=======================================
```

```sh
 ~ % rg -h
ripgrep 14.1.0
Andrew Gallant <jamslam@gmail.com>

ripgrep (rg) recursively searches the current directory for lines matching
a regex pattern. By default, ripgrep will respect gitignore rules and
automatically skip hidden files/directories and binary files.

Use -h for short descriptions and --help for more details.

Project home page: https://github.com/BurntSushi/ripgrep

USAGE:
  rg [OPTIONS] PATTERN [PATH ...]

POSITIONAL ARGUMENTS:
  <PATTERN>   A regular expression used for searching.
  <PATH>...   A file or directory to search.

INPUT OPTIONS:
  -e, --regexp=PATTERN            A pattern to search for.
  -f, --file=PATTERNFILE          Search for patterns from the given file.
  --pre=COMMAND                   Search output of COMMAND for each PATH.
  --pre-glob=GLOB                 Include or exclude files from a preprocessor.
  -z, --search-zip                Search in compressed files.

SEARCH OPTIONS:
  -s, --case-sensitive            Search case sensitively (default).
  --crlf                          Use CRLF line terminators (nice for Windows).
  --dfa-size-limit=NUM            The upper size limit of the regex DFA.
  -E, --encoding=ENCODING         Specify the text encoding of files to search.
  --engine=ENGINE                 Specify which regex engine to use.
  -F, --fixed-strings             Treat all patterns as literals.
  -i, --ignore-case               Case insensitive search.
  -v, --invert-match              Invert matching.
  -x, --line-regexp               Show matches surrounded by line boundaries.
  -m, --max-count=NUM             Limit the number of matching lines.
  --mmap                          Search with memory maps when possible.
  -U, --multiline                 Enable searching across multiple lines.
  --multiline-dotall              Make '.' match line terminators.
  --no-unicode                    Disable Unicode mode.
  --null-data                     Use NUL as a line terminator.
  -P, --pcre2                     Enable PCRE2 matching.
  --regex-size-limit=NUM          The size limit of the compiled regex.
  -S, --smart-case                Smart case search.
  --stop-on-nonmatch              Stop searching after a non-match.
  -a, --text                      Search binary files as if they were text.
  -j, --threads=NUM               Set the approximate number of threads to use.
  -w, --word-regexp               Show matches surrounded by word boundaries.
  --auto-hybrid-regex             (DEPRECATED) Use PCRE2 if appropriate.
  --no-pcre2-unicode              (DEPRECATED) Disable Unicode mode for PCRE2.

FILTER OPTIONS:
  --binary                        Search binary files.
  -L, --follow                    Follow symbolic links.
  -g, --glob=GLOB                 Include or exclude file paths.
  --glob-case-insensitive         Process all glob patterns case insensitively.
  -., --hidden                    Search hidden files and directories.
  --iglob=GLOB                    Include/exclude paths case insensitively.
  --ignore-file=PATH              Specify additional ignore files.
  --ignore-file-case-insensitive  Process ignore files case insensitively.
  -d, --max-depth=NUM             Descend at most NUM directories.
  --max-filesize=NUM              Ignore files larger than NUM in size.
  --no-ignore                     Don't use ignore files.
  --no-ignore-dot                 Don't use .ignore or .rgignore files.
  --no-ignore-exclude             Don't use local exclusion files.
  --no-ignore-files               Don't use --ignore-file arguments.
  --no-ignore-global              Don't use global ignore files.
  --no-ignore-parent              Don't use ignore files in parent directories.
  --no-ignore-vcs                 Don't use ignore files from source control.
  --no-require-git                Use .gitignore outside of git repositories.
  --one-file-system               Skip directories on other file systems.
  -t, --type=TYPE                 Only search files matching TYPE.
  -T, --type-not=TYPE             Do not search files matching TYPE.
  --type-add=TYPESPEC             Add a new glob for a file type.
  --type-clear=TYPE               Clear globs for a file type.
  -u, --unrestricted              Reduce the level of "smart" filtering.

OUTPUT OPTIONS:
  -A, --after-context=NUM         Show NUM lines after each match.
  -B, --before-context=NUM        Show NUM lines before each match.
  --block-buffered                Force block buffering.
  -b, --byte-offset               Print the byte offset for each matching line.
  --color=WHEN                    When to use color.
  --colors=COLOR_SPEC             Configure color settings and styles.
  --column                        Show column numbers.
  -C, --context=NUM               Show NUM lines before and after each match.
  --context-separator=SEP         Set the separator for contextual chunks.
  --field-context-separator=SEP   Set the field context separator.
  --field-match-separator=SEP     Set the field match separator.
  --heading                       Print matches grouped by each file.
  -h, --help                      Show help output.
  --hostname-bin=COMMAND          Run a program to get this system's hostname.
  --hyperlink-format=FORMAT       Set the format of hyperlinks.
  --include-zero                  Include zero matches in summary output.
  --line-buffered                 Force line buffering.
  -n, --line-number               Show line numbers.
  -N, --no-line-number            Suppress line numbers.
  -M, --max-columns=NUM           Omit lines longer than this limit.
  --max-columns-preview           Show preview for lines exceeding the limit.
  -0, --null                      Print a NUL byte after file paths.
  -o, --only-matching             Print only matched parts of a line.
  --path-separator=SEP            Set the path separator for printing paths.
  --passthru                      Print both matching and non-matching lines.
  -p, --pretty                    Alias for colors, headings and line numbers.
  -q, --quiet                     Do not print anything to stdout.
  -r, --replace=TEXT              Replace matches with the given text.
  --sort=SORTBY                   Sort results in ascending order.
  --sortr=SORTBY                  Sort results in descending order.
  --trim                          Trim prefix whitespace from matches.
  --vimgrep                       Print results im a vim compatible format.
  -H, --with-filename             Print the file path with each matching line.
  -I, --no-filename               Never print the path with each matching line.
  --sort-files                    (DEPRECATED) Sort results by file path.

OUTPUT MODES:
  -c, --count                     Show count of matching lines for each file.
  --count-matches                 Show count of every match for each file.
  -l, --files-with-matches        Print the paths with at least one match.
  --files-without-match           Print the paths that contain zero matches.
  --json                          Show search results in a JSON Lines format.

LOGGING OPTIONS:
  --debug                         Show debug messages.
  --no-ignore-messages            Suppress gitignore parse error messages.
  --no-messages                   Suppress some error messages.
  --stats                         Print statistics about the search.
  --trace                         Show trace messages.

OTHER BEHAVIORS:
  --files                         Print each file that would be searched.
  --generate=KIND                 Generate man pages and completion scripts.
  --no-config                     Never read configuration files.
  --pcre2-version                 Print the version of PCRE2 that ripgrep uses.
  --type-list                     Show all supported file types.
  -V, --version                   Print ripgrep's version.
```

```sh
 ~ % fd --help
A program to find entries in your filesystem

Usage: fdfind [OPTIONS] [pattern] [path]...

Arguments:
  [pattern]
          the search pattern which is either a regular expression (default) or a glob pattern (if
          --glob is used). If no pattern has been specified, every entry is considered a match. If
          your pattern starts with a dash (-), make sure to pass '--' first, or it will be
          considered as a flag (fd -- '-foo').

  [path]...
          The directory where the filesystem search is rooted (optional). If omitted, search the
          current working directory.

Options:
  -H, --hidden
          Include hidden directories and files in the search results (default: hidden files and
          directories are skipped). Files and directories are considered to be hidden if their
          name starts with a `.` sign (dot). Any files or directories that are ignored due to the
          rules described by --no-ignore are still ignored unless otherwise specified. The flag
          can be overridden with --no-hidden.

  -I, --no-ignore
          Show search results from files and directories that would otherwise be ignored by
          '.gitignore', '.ignore', '.fdignore', the global ignore file, or the default rule that
          excludes .git/. The flag can be overridden with --ignore.

      --no-ignore-vcs
          Show search results from '.git/' folders and files and directories that would otherwise
          be ignored by '.gitignore' files. The flag can be overridden with --ignore-vcs.

      --no-require-git
          Do not require a git repository to respect gitignores. By default, fd will only respect
          global gitignore rules, .gitignore rules, and local exclude rules if fd detects that you
          are searching inside a git repository. This flag allows you to relax this restriction
          such that fd will respect all git related ignore rules regardless of whether you're
          searching in a git repository or not.

          This flag can be disabled with --require-git.

      --no-ignore-parent
          Show search results from files and directories that would otherwise be ignored by
          '.gitignore', '.ignore', or '.fdignore' files in parent directories.

  -u, --unrestricted...
          Perform an unrestricted search, including ignored and hidden files. This is an alias for
          '--no-ignore --hidden'.

  -s, --case-sensitive
          Perform a case-sensitive search. By default, fd uses case-insensitive searches, unless
          the pattern contains an uppercase character (smart case).

  -i, --ignore-case
          Perform a case-insensitive search. By default, fd uses case-insensitive searches, unless
          the pattern contains an uppercase character (smart case).

  -g, --glob
          Perform a glob-based search instead of a regular expression search.

      --regex
          Perform a regular-expression based search (default). This can be used to override
          --glob.

  -F, --fixed-strings
          Treat the pattern as a literal string instead of a regular expression. Note that this
          also performs substring comparison. If you want to match on an exact filename, consider
          using '--glob'.

      --and <pattern>
          Add additional required search patterns, all of which must be matched. Multiple
          additional patterns can be specified. The patterns are regular expressions, unless
          '--glob' or '--fixed-strings' is used.

  -a, --absolute-path
          Shows the full path starting from the root as opposed to relative paths. The flag can be
          overridden with --relative-path.

  -l, --list-details
          Use a detailed listing format like 'ls -l'. This is basically an alias for '--exec-batch
          ls -l' with some additional 'ls' options. This can be used to see more metadata, to show
          symlink targets and to achieve a deterministic sort order.

  -L, --follow
          By default, fd does not descend into symlinked directories. Using this flag, symbolic
          links are also traversed. Flag can be overridden with --no-follow.

  -p, --full-path
          By default, the search pattern is only matched against the filename (or directory name).
          Using this flag, the pattern is matched against the full (absolute) path. Example:
            fd --glob -p '**/.git/config'

  -0, --print0
          Separate search results by the null character (instead of newlines). Useful for piping
          results to 'xargs'.

  -d, --max-depth <depth>
          Limit the directory traversal to a given depth. By default, there is no limit on the
          search depth.

      --min-depth <depth>
          Only show search results starting at the given depth. See also: '--max-depth' and
          '--exact-depth'

      --exact-depth <depth>
          Only show search results at the exact given depth. This is an alias for '--min-depth
          <depth> --max-depth <depth>'.

  -E, --exclude <pattern>
          Exclude files/directories that match the given glob pattern. This overrides any other
          ignore logic. Multiple exclude patterns can be specified.

          Examples:
            --exclude '*.pyc'
            --exclude node_modules

      --prune
          Do not traverse into directories that match the search criteria. If you want to exclude
          specific directories, use the '--exclude=…' option.

  -t, --type <filetype>
          Filter the search by type:
            'f' or 'file':         regular files
            'd' or 'directory':    directories
            'l' or 'symlink':      symbolic links
            's' or 'socket':       socket
            'p' or 'pipe':         named pipe (FIFO)
            'b' or 'block-device': block device
            'c' or 'char-device':  character device

            'x' or 'executable':   executables
            'e' or 'empty':        empty files or directories

          This option can be specified more than once to include multiple file types. Searching
          for '--type file --type symlink' will show both regular files as well as symlinks. Note
          that the 'executable' and 'empty' filters work differently: '--type executable' implies
          '--type file' by default. And '--type empty' searches for empty files and directories,
          unless either '--type file' or '--type directory' is specified in addition.

          Examples:
            - Only search for files:
                fd --type file …
                fd -tf …
            - Find both files and symlinks
                fd --type file --type symlink …
                fd -tf -tl …
            - Find executable files:
                fd --type executable
                fd -tx
            - Find empty files:
                fd --type empty --type file
                fd -te -tf
            - Find empty directories:
                fd --type empty --type directory
                fd -te -td

  -e, --extension <ext>
          (Additionally) filter search results by their file extension. Multiple allowable file
          extensions can be specified.

          If you want to search for files without extension, you can use the regex '^[^.]+$' as a
          normal search pattern.

  -S, --size <size>
          Limit results based on the size of files using the format <+-><NUM><UNIT>.
             '+': file size must be greater than or equal to this
             '-': file size must be less than or equal to this

          If neither '+' nor '-' is specified, file size must be exactly equal to this.
             'NUM':  The numeric size (e.g. 500)
             'UNIT': The units for NUM. They are not case-sensitive.
          Allowed unit values:
              'b':  bytes
              'k':  kilobytes (base ten, 10^3 = 1000 bytes)
              'm':  megabytes
              'g':  gigabytes
              't':  terabytes
              'ki': kibibytes (base two, 2^10 = 1024 bytes)
              'mi': mebibytes
              'gi': gibibytes
              'ti': tebibytes

      --changed-within <date|dur>
          Filter results based on the file modification time. Files with modification times
          greater than the argument are returned. The argument can be provided as a specific point
          in time (YYYY-MM-DD HH:MM:SS) or as a duration (10h, 1d, 35min). If the time is not
          specified, it defaults to 00:00:00. '--change-newer-than', '--newer', or
          '--changed-after' can be used as aliases.

          Examples:
              --changed-within 2weeks
              --change-newer-than '2018-10-27 10:00:00'
              --newer 2018-10-27
              --changed-after 1day

      --changed-before <date|dur>
          Filter results based on the file modification time. Files with modification times less
          than the argument are returned. The argument can be provided as a specific point in time
          (YYYY-MM-DD HH:MM:SS) or as a duration (10h, 1d, 35min). '--change-older-than' or
          '--older' can be used as aliases.

          Examples:
              --changed-before '2018-10-27 10:00:00'
              --change-older-than 2weeks
              --older 2018-10-27

  -o, --owner <user:group>
          Filter files by their user and/or group. Format: [(user|uid)][:(group|gid)]. Either side
          is optional. Precede either side with a '!' to exclude files instead.

          Examples:
              --owner john
              --owner :students
              --owner '!john:students'

  -x, --exec <cmd>...
          Execute a command for each search result in parallel (use --threads=1 for sequential
          command execution). There is no guarantee of the order commands are executed in, and the
          order should not be depended upon. All positional arguments following --exec are
          considered to be arguments to the command - not to fd. It is therefore recommended to
          place the '-x'/'--exec' option last.
          The following placeholders are substituted before the command is executed:
            '{}':   path (of the current search result)
            '{/}':  basename
            '{//}': parent directory
            '{.}':  path without file extension
            '{/.}': basename without file extension
            '{{':   literal '{' (for escaping)
            '}}':   literal '}' (for escaping)

          If no placeholder is present, an implicit "{}" at the end is assumed.

          Examples:

            - find all *.zip files and unzip them:

                fd -e zip -x unzip

            - find *.h and *.cpp files and run "clang-format -i .." for each of them:

                fd -e h -e cpp -x clang-format -i

            - Convert all *.jpg files to *.png files:

                fd -e jpg -x convert {} {.}.png

  -X, --exec-batch <cmd>...
          Execute the given command once, with all search results as arguments.
          The order of the arguments is non-deterministic, and should not be relied upon.
          One of the following placeholders is substituted before the command is executed:
            '{}':   path (of all search results)
            '{/}':  basename
            '{//}': parent directory
            '{.}':  path without file extension
            '{/.}': basename without file extension
            '{{':   literal '{' (for escaping)
            '}}':   literal '}' (for escaping)

          If no placeholder is present, an implicit "{}" at the end is assumed.

          Examples:

            - Find all test_*.py files and open them in your favorite editor:

                fd -g 'test_*.py' -X vim

            - Find all *.rs files and count the lines with "wc -l ...":

                fd -e rs -X wc -l

      --batch-size <size>
          Maximum number of arguments to pass to the command given with -X. If the number of
          results is greater than the given size, the command given with -X is run again with
          remaining arguments. A batch size of zero means there is no limit (default), but note
          that batching might still happen due to OS restrictions on the maximum length of command
          lines.

          [default: 0]

      --ignore-file <path>
          Add a custom ignore-file in '.gitignore' format. These files have a low precedence.

  -c, --color <when>
          Declare when to use color for the pattern match output

          [default: auto]

          Possible values:
          - auto:   show colors if the output goes to an interactive console (default)
          - always: always use colorized output
          - never:  do not use colorized output

  -j, --threads <num>
          Set number of threads to use for searching & executing (default: number of available CPU
          cores)

      --max-results <count>
          Limit the number of search results to 'count' and quit immediately.

  -1
          Limit the search to a single result and quit immediately. This is an alias for
          '--max-results=1'.

  -q, --quiet
          When the flag is present, the program does not print anything and will return with an
          exit code of 0 if there is at least one match. Otherwise, the exit code will be 1.
          '--has-results' can be used as an alias.

      --show-errors
          Enable the display of filesystem errors for situations such as insufficient permissions
          or dead symlinks.

      --base-directory <path>
          Change the current working directory of fd to the provided path. This means that search
          results will be shown with respect to the given base path. Note that relative paths
          which are passed to fd via the positional <path> argument or the '--search-path' option
          will also be resolved relative to this directory.

      --path-separator <separator>
          Set the path separator to use when printing file paths. The default is the OS-specific
          separator ('/' on Unix, '\' on Windows).

      --search-path <search-path>
          Provide paths to search as an alternative to the positional <path> argument. Changes the
          usage to `fd [OPTIONS] --search-path <path> --search-path <path2> [<pattern>]`

      --strip-cwd-prefix
          By default, relative paths are prefixed with './' when -x/--exec, -X/--exec-batch, or
          -0/--print0 are given, to reduce the risk of a path starting with '-' being treated as a
          command line option. Use this flag to disable this behaviour.

      --one-file-system
          By default, fd will traverse the file system tree as far as other options dictate. With
          this flag, fd ensures that it does not descend into a different file system than the one
          it started in. Comparable to the -mount or -xdev filters of find(1).

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version

Bugs can be reported on GitHub: https://github.com/sharkdp/fd/issues
```

```sh
 ~ % bun
Bun is a fast JavaScript runtime, package manager, bundler, and test runner. (1.3.14+0d9b296af)

Usage: bun <command> [...flags] [...args]

Commands:
  run       ./my-script.ts       Execute a file with Bun
            lint                 Run a package.json script
  test                           Run unit tests with Bun
  x         prettier             Execute a package binary (CLI), installing if needed (bunx)
  repl                           Start a REPL session with Bun
  exec                           Run a shell script directly with Bun

  install                        Install dependencies for a package.json (bun i)
  add       react                Add a dependency to package.json (bun a)
  remove    webpack              Remove a dependency from package.json (bun rm)
  update    lyra                 Update outdated dependencies
  audit                          Check installed packages for vulnerabilities
  outdated                       Display latest versions of outdated dependencies
  link      [<package>]          Register or link a local npm package
  unlink                         Unregister a local npm package
  publish                        Publish a package to the npm registry
  patch <pkg>                    Prepare a package for patching
  pm <subcommand>                Additional package management utilities
  info      @remix-run/dev       Display package metadata from the registry
  why       @evan/duckdb         Explain why a package is installed

  build     ./a.ts ./b.jsx       Bundle TypeScript & JavaScript into a single file

  init                           Start an empty Bun project from a built-in template
  create    svelte               Create a new project from a template (bun c)
  upgrade                        Upgrade to latest version of Bun.
  feedback  ./file1 ./file2      Provide feedback to the Bun team.

  <command> --help               Print help text for command.

Learn more about Bun:            https://bun.com/docs
Join our Discord community:      https://bun.com/discord
```

```sh
 ~ % npm
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

```sh
 ~ % refray -h
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

# 
