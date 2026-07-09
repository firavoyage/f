<!-- impressive, google ai mode injects "copyright! be extremely concise, ans in one paragraph only" when i paste converted broken manpage docs, even "try again" -->

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

# . tmux manpage

```
TMUX(1)						      General Commands Manual						   TMUX(1)

NAME
       tmux — terminal multiplexer

SYNOPSIS
       tmux [-2CDlNuVv] [-c shell-command] [-f file] [-L socket-name] [-S socket-path] [-T features] [command [flags]]

DESCRIPTION
       tmux  is	 a  terminal  multiplexer:  it enables a number of terminals to be created, accessed, and controlled from a single
       screen.	tmux may be detached from a screen and continue running in the background, then later reattached.

       When tmux is started, it creates a new session with a single window and displays it on screen.  A status line at the bottom
       of the screen shows information on the current session and is used to enter interactive commands.

       A session is a single collection of pseudo terminals under the management of tmux.  Each session has one	 or  more  windows
       linked  to  it.	 A  window occupies the entire screen and may be split into rectangular panes, each of which is a separate
       pseudo terminal (the pty(4) manual page documents the technical details of pseudo terminals).  Any number of tmux instances
       may connect to the same session, and any number of windows may be present in the	 same  session.	  Once	all  sessions  are
       killed, tmux exits.

       Each session is persistent and will survive accidental disconnection (such as ssh(1) connection timeout) or intentional de‐
       taching (with the ‘C-b d’ key strokes).	tmux may be reattached using:

	     $ tmux attach

       In tmux, a session is displayed on screen by a client and all sessions are managed by a single server.  The server and each
       client are separate processes which communicate through a socket in /tmp.

       The options are as follows:

       -2	     Force tmux to assume the terminal supports 256 colours.  This is equivalent to -T 256.

       -C	     Start in control mode (see the “CONTROL MODE” section).  Given twice (-CC) disables echo.

       -c shell-command
		     Execute shell-command using the default shell.  If necessary, the tmux server will be started to retrieve the
		     default-shell option.  This option is for compatibility with sh(1) when tmux is used as a login shell.

       -D	     Do	 not  start the tmux server as a daemon.  This also turns the exit-empty option off.  With -D, command may
		     not be specified.

       -f file	     Specify an alternative configuration file.	 By  default,  tmux  loads  the	 system	 configuration	file  from
		     /etc/tmux.conf,	if    present,	 then	looks	for   a	  user	 configuration	 file	at   ~/.tmux.conf,
		     $XDG_CONFIG_HOME/tmux/tmux.conf or ~/.tmux.conf.

		     The configuration file is a set of tmux commands which are executed in sequence  when  the	 server	 is  first
		     started.	tmux  loads configuration files once when the server process has started.  The source-file command
		     may be used to load a file later.

		     tmux shows any error messages from commands in configuration files in the first session created, and  contin‐
		     ues to process the rest of the configuration file.

       -L socket-name
		     tmux stores the server socket in a directory under TMUX_TMPDIR or /tmp if it is unset.  The default socket is
		     named default.  This option allows a different socket name to be specified, allowing several independent tmux
		     servers  to  be  run.   Unlike  -S	 a  full path is not necessary: the sockets are all created in a directory
		     tmux-UID under the directory given by TMUX_TMPDIR or in /tmp.  The tmux-UID directory is created by tmux  and
		     must not be world readable, writable or executable.

		     If	 the socket is accidentally removed, the SIGUSR1 signal may be sent to the tmux server process to recreate
		     it (note that this will fail if any parent directories are missing).

       -l	     Behave as a login shell.  This flag currently has no effect and is for compatibility with other  shells  when
		     using tmux as a login shell.

       -N	     Do not start the server even if the command would normally do so (for example new-session or start-server).

       -S socket-path
		     Specify  a	 full  alternative path to the server socket.  If -S is specified, the default socket directory is
		     not used and any -L flag is ignored.

       -T features   Set terminal features for the client.  This is a comma-separated list of features.	 See the terminal-features
		     option.

       -u	     Write UTF-8 output to the terminal even if the first environment variable of LC_ALL, LC_CTYPE, or	LANG  that
		     is set does not contain "UTF-8" or "UTF8".

       -V	     Report the tmux version.

       -v	     Request  verbose  logging.	 Log messages will be saved into tmux-client-PID.log and tmux-server-PID.log files
		     in the current directory, where PID is the PID of the server or client process.  If -v is specified twice, an
		     additional tmux-out-PID.log file is generated with a copy of everything tmux writes to the terminal.

		     The SIGUSR2 signal may be sent to the tmux server process to toggle logging between on (as if -v  was  given)
		     and off.

       command [flags]
		     This  specifies one of a set of commands used to control tmux, as described in the following sections.  If no
		     commands are specified, the new-session command is assumed.

DEFAULT KEY BINDINGS
       tmux may be controlled from an attached client by using a key combination of a prefix key, ‘C-b’ (Ctrl-b) by default,  fol‐
       lowed by a command key.

       The default command key bindings are:

	     C-b	 Send the prefix key (C-b) through to the application.
	     C-o	 Rotate the panes in the current window forwards.
	     C-z	 Suspend the tmux client.
	     !		 Break the current pane out of the window.
	     "		 Split the current pane into two, top and bottom.
	     #		 List all paste buffers.
	     $		 Rename the current session.
	     %		 Split the current pane into two, left and right.
	     &		 Kill the current window.
	     '		 Prompt for a window index to select.
	     (		 Switch the attached client to the previous session.
	     )		 Switch the attached client to the next session.
	     ,		 Rename the current window.
	     -		 Delete the most recently copied buffer of text.
	     .		 Prompt for an index to move the current window.
	     0 to 9	 Select windows 0 to 9.
	     :		 Enter the tmux command prompt.
	     ;		 Move to the previously active pane.
	     =		 Choose which buffer to paste interactively from a list.
	     ?		 List all key bindings.
	     D		 Choose a client to detach.
	     L		 Switch the attached client back to the last session.
	     [		 Enter copy mode to copy text or view the history.
	     ]		 Paste the most recently copied buffer of text.
	     c		 Create a new window.
	     d		 Detach the current client.
	     f		 Prompt to search for text in open windows.
	     i		 Display some information about the current window.
	     l		 Move to the previously selected window.
	     m		 Mark the current pane (see select-pane -m).
	     M		 Clear the marked pane.
	     n		 Change to the next window.
	     o		 Select the next pane in the current window.
	     p		 Change to the previous window.
	     q		 Briefly display pane indexes.
	     r		 Force redraw of the attached client.
	     s		 Select a new session for the attached client interactively.
	     t		 Show the time.
	     w		 Choose the current window interactively.
	     x		 Kill the current pane.
	     z		 Toggle zoom state of the current pane.
	     {		 Swap the current pane with the previous pane.
	     }		 Swap the current pane with the next pane.
	     ~		 Show previous messages from tmux, if any.
	     Page Up	 Enter copy mode and scroll one page up.
	     Up, Down
	     Left, Right
			 Change to the pane above, below, to the left, or to the right of the current pane.
	     M-1 to M-5	 Arrange  panes	 in one of the five preset layouts: even-horizontal, even-vertical, main-horizontal, main-
			 vertical, or tiled.
	     Space	 Arrange the current window in the next preset layout.
	     M-n	 Move to the next window with a bell or activity marker.
	     M-o	 Rotate the panes in the current window backwards.
	     M-p	 Move to the previous window with a bell or activity marker.
	     C-Up, C-Down
	     C-Left, C-Right
			 Resize the current pane in steps of one cell.
	     M-Up, M-Down
	     M-Left, M-Right
			 Resize the current pane in steps of five cells.

       Key bindings may be changed with the bind-key and unbind-key commands.

COMMAND PARSING AND EXECUTION
       tmux supports a large number of commands which can be used to control its behaviour.  Each command is named and can  accept
       zero  or	 more  flags  and arguments.  They may be bound to a key with the bind-key command or run from the shell prompt, a
       shell script, a configuration file or the command prompt.  For example, the same set-option  command  run  from	the  shell
       prompt, from ~/.tmux.conf and bound to a key may look like:

	     $ tmux set-option -g status-style bg=cyan

	     set-option -g status-style bg=cyan

	     bind-key C set-option -g status-style bg=cyan

       Here, the command name is ‘set-option’, ‘-g’ is a flag and ‘status-style’ and ‘bg=cyan’ are arguments.

       tmux distinguishes between command parsing and execution.  In order to execute a command, tmux needs it to be split up into
       its  name  and  arguments.   This is command parsing.  If a command is run from the shell, the shell parses it; from inside
       tmux or from a configuration file, tmux does.  Examples of when tmux parses commands are:

	     -	 in a configuration file;

	     -	 typed at the command prompt (see command-prompt);

	     -	 given to bind-key;

	     -	 passed as arguments to if-shell or confirm-before.

       To execute commands, each client has a ‘command queue’.	A global command queue not attached  to	 any  client  is  used	on
       startup	for  configuration  files like ~/.tmux.conf.  Parsed commands added to the queue are executed in order.	 Some com‐
       mands, like if-shell and confirm-before, parse their argument to create a new command which is inserted	immediately  after
       themselves.   This  means  that	arguments can be parsed twice or more - once when the parent command (such as if-shell) is
       parsed and again when it parses and executes its command.  Commands like if-shell, run-shell and display-panes stop  execu‐
       tion  of	 subsequent  commands on the queue until something happens - if-shell and run-shell until a shell command finishes
       and display-panes until a key is pressed.  For example, the following commands:

	     new-session; new-window
	     if-shell "true" "split-window"
	     kill-session

       Will execute new-session, new-window, if-shell, the shell command true(1), split-window and kill-session in that order.

       The “COMMANDS” section lists the tmux commands and their arguments.

PARSING SYNTAX
       This section describes the syntax of commands parsed by tmux, for example in a configuration file or at the command prompt.
       Note that when commands are entered into the shell, they are parsed by the shell - see for example ksh(1) or csh(1).

       Each command is terminated by a newline or a semicolon (;).  Commands separated by  semicolons  together	 form  a  ‘command
       sequence’ - if a command in the sequence encounters an error, no subsequent commands are executed.

       It  is  recommended that a semicolon used as a command separator should be written as an individual token, for example from
       sh(1):

	     $ tmux neww \; splitw

       Or:

	     $ tmux neww ';' splitw

       Or from the tmux command prompt:

	     neww ; splitw

       However, a trailing semicolon is also interpreted as a command separator, for example in these sh(1) commands:

	     $ tmux neww\; splitw

       Or:

	     $ tmux 'neww;' splitw

       As in these examples, when running tmux from the shell extra care must be taken to properly quote semicolons:

	     1.	  Semicolons that should be interpreted as a command separator should be escaped according to  the  shell  conven‐
		  tions.   For	sh(1)  this  typically	means  quoted  (such as ‘neww ';' splitw’) or escaped (such as ‘neww \\\\;
		  splitw’).

	     2.	  Individual semicolons or trailing semicolons that should be interpreted as arguments should  be  escaped  twice:
		  once according to the shell conventions and a second time for tmux; for example:

			$ tmux neww 'foo\\;' bar
			$ tmux neww foo\\\\; bar

	     3.	  Semicolons  that  are	 not  individual tokens or trailing another token should only be escaped once according to
		  shell conventions; for example:

			$ tmux neww 'foo-;-bar'
			$ tmux neww foo-\\;-bar

       Comments are marked by the unquoted # character - any remaining text after a comment is ignored until the end of the line.

       If the last character of a line is \, the line is joined with the following line (the \ and the newline are completely  re‐
       moved).	 This  is called line continuation and applies both inside and outside quoted strings and in comments, but not in‐
       side braces.

       Command arguments may be specified as strings surrounded by single (') quotes, double quotes (") or braces ({}).	  This	is
       required when the argument contains any special character.  Single and double quoted strings cannot span multiple lines ex‐
       cept with line continuation.  Braces can span multiple lines.

       Outside of quotes and inside double quotes, these replacements are performed:

	     -	 Environment  variables	 preceded  by $ are replaced with their value from the global environment (see the “GLOBAL
		 AND SESSION ENVIRONMENT” section).

	     -	 A leading ~ or ~user is expanded to the home directory of the current or specified user.

	     -	 \uXXXX or \uXXXXXXXX is replaced by the Unicode codepoint corresponding to the given four or eight digit hexadec‐
		 imal number.

	     -	 When preceded (escaped) by a \, the following characters are replaced: \e by the escape character; \r by  a  car‐
		 riage return; \n by a newline; and \t by a tab.

	     -	 \ooo  is replaced by a character of the octal value ooo.  Three octal digits are required, for example \001.  The
		 largest valid character is \377.

	     -	 Any other characters preceded by \ are replaced by themselves (that is, the \ is removed) and are not treated	as
		 having	 any  special meaning - so for example \; will not mark a command sequence and \$ will not expand an envi‐
		 ronment variable.

       Braces are parsed as a configuration file (so conditions such as ‘%if’ are processed) and then  converted  into	a  string.
       They are designed to avoid the need for additional escaping when passing a group of tmux commands as an argument (for exam‐
       ple to if-shell).  These two examples produce an identical command - note that no escaping is needed when using {}:

	     if-shell true {
		 display -p 'brace-dollar-foo: }$foo'
	     }

	     if-shell true "display -p 'brace-dollar-foo: }\$foo'"

       Braces may be enclosed inside braces, for example:

	     bind x if-shell "true" {
		 if-shell "true" {
		     display "true!"
		 }
	     }

       Environment  variables  may  be	set by using the syntax ‘name=value’, for example ‘HOME=/home/user’.  Variables set during
       parsing are added to the global environment.  A hidden variable may be set with ‘%hidden’, for example:

	     %hidden MYVAR=42

       Hidden variables are not passed to the environment of processes created by tmux.	 See the “GLOBAL AND SESSION  ENVIRONMENT”
       section.

       Commands	 may be parsed conditionally by surrounding them with ‘%if’, ‘%elif’, ‘%else’ and ‘%endif’.  The argument to ‘%if’
       and ‘%elif’ is expanded as a format (see “FORMATS”) and if it evaluates to false (zero or empty), subsequent  text  is  ig‐
       nored until the closing ‘%elif’, ‘%else’ or ‘%endif’.  For example:

	     %if "#{==:#{host},myhost}"
	     set -g status-style bg=red
	     %elif "#{==:#{host},myotherhost}"
	     set -g status-style bg=green
	     %else
	     set -g status-style bg=blue
	     %endif

       Will change the status line to red if running on ‘myhost’, green if running on ‘myotherhost’, or blue if running on another
       host.  Conditionals may be given on one line, for example:

	     %if #{==:#{host},myhost} set -g status-style bg=red %endif

COMMANDS
       This  section  describes	 the commands supported by tmux.  Most commands accept the optional -t (and sometimes -s) argument
       with one of target-client, target-session, target-window, or target-pane.  These specify the  client,  session,	window	or
       pane which a command should affect.

       target-client should be the name of the client, typically the pty(4) file to which the client is connected, for example ei‐
       ther  of	 /dev/ttyp1  or ttyp1 for the client attached to /dev/ttyp1.  If no client is specified, tmux attempts to work out
       the client currently in use; if that fails, an error is reported.  Clients may be listed with the list-clients command.

       target-session is tried as, in order:

	     1.	  A session ID prefixed with a $.

	     2.	  An exact name of a session (as listed by the list-sessions command).

	     3.	  The start of a session name, for example ‘mysess’ would match a session named ‘mysession’.

	     4.	  An fnmatch(3) pattern which is matched against the session name.

       If the session name is prefixed with an ‘=’, only an exact  match  is  accepted	(so  ‘=mysess’	will  only  match  exactly
       ‘mysess’, not ‘mysession’).

       If  a  single session is found, it is used as the target session; multiple matches produce an error.  If a session is omit‐
       ted, the current session is used if available; if no current session is available, the most recently used is chosen.

       target-window (or src-window or dst-window) specifies a window in the form session:window.  session follows the same  rules
       as for target-session, and window is looked for in order as:

	     1.	  A special token, listed below.

	     2.	  A window index, for example ‘mysession:1’ is window 1 in session ‘mysession’.

	     3.	  A window ID, such as @1.

	     4.	  An exact window name, such as ‘mysession:mywindow’.

	     5.	  The start of a window name, such as ‘mysession:mywin’.

	     6.	  As an fnmatch(3) pattern matched against the window name.

       Like sessions, a ‘=’ prefix will do an exact match only.	 An empty window name specifies the next unused index if appropri‐
       ate (for example the new-window and link-window commands) otherwise the current window in session is chosen.

       The following special tokens are available to indicate particular windows.  Each has a single-character alternative form.

       Token		  Meaning
       {start}	     ^	  The lowest-numbered window
       {end}	     $	  The highest-numbered window
       {last}	     !	  The last (previously current) window
       {next}	     +	  The next window by number
       {previous}    -	  The previous window by number

       target-pane (or src-pane or dst-pane) may be a pane ID or takes a similar form to target-window but with the optional addi‐
       tion  of	 a period followed by a pane index or pane ID, for example: ‘mysession:mywindow.1’.  If the pane index is omitted,
       the currently active pane in the specified window is used.  The following special tokens are available for the pane index:

       Token		      Meaning
       {last}		 !    The last (previously active) pane
       {next}		 +    The next pane by number
       {previous}	 -    The previous pane by number
       {top}		      The top pane
       {bottom}		      The bottom pane
       {left}		      The leftmost pane
       {right}		      The rightmost pane
       {top-left}	      The top-left pane
       {top-right}	      The top-right pane
       {bottom-left}	      The bottom-left pane
       {bottom-right}	      The bottom-right pane
       {up-of}		      The pane above the active pane
       {down-of}	      The pane below the active pane
       {left-of}	      The pane to the left of the active pane
       {right-of}	      The pane to the right of the active pane

       The tokens ‘+’ and ‘-’ may be followed by an offset, for example:

	     select-window -t:+2

       In addition, target-session, target-window or target-pane may consist entirely of the  token  ‘{mouse}’	(alternative  form
       ‘=’) to specify the session, window or pane where the most recent mouse event occurred (see the “MOUSE SUPPORT” section) or
       ‘{marked}’ (alternative form ‘~’) to specify the marked pane (see select-pane -m).

       Sessions, window and panes are each numbered with a unique ID; session IDs are prefixed with a ‘$’, windows with a ‘@’, and
       panes  with a ‘%’.  These are unique and are unchanged for the life of the session, window or pane in the tmux server.  The
       pane ID is passed to the child process of the pane in the TMUX_PANE environment variable.  IDs may be displayed	using  the
       ‘session_id’,  ‘window_id’,  or	‘pane_id’  formats  (see  the  “FORMATS”  section) and the display-message, list-sessions,
       list-windows or list-panes commands.

       shell-command arguments are sh(1) commands.  This may be a single argument passed to the shell, for example:

	     new-window 'vi ~/.tmux.conf'

       Will run:

	     /bin/sh -c 'vi ~/.tmux.conf'

       Additionally, the new-window, new-session, split-window, respawn-window and respawn-pane commands allow shell-command to be
       given as multiple arguments and executed directly (without ‘sh -c’).  This can avoid issues with shell quoting.	For  exam‐
       ple:

	     $ tmux new-window vi ~/.tmux.conf

       Will run vi(1) directly without invoking the shell.

       command [argument ...] refers to a tmux command, either passed with the command and arguments separately, for example:

	     bind-key F1 set-option status off

       Or passed as a single string argument in .tmux.conf, for example:

	     bind-key F1 { set-option status off }

       Example tmux commands include:

	     refresh-client -t/dev/ttyp2

	     rename-session -tfirst newname

	     set-option -wt:0 monitor-activity on

	     new-window ; split-window -d

	     bind-key R source-file ~/.tmux.conf \; \
		     display-message "source-file done"

       Or from sh(1):

	     $ tmux kill-window -t :1

	     $ tmux new-window \; split-window -d

	     $ tmux new-session -d 'vi ~/.tmux.conf' \; split-window -d \; attach

CLIENTS AND SESSIONS
       The  tmux server manages clients, sessions, windows and panes.  Clients are attached to sessions to interact with them, ei‐
       ther when they are created with the new-session command, or later with the attach-session command.  Each session has one or
       more windows linked into it.  Windows may be linked to multiple sessions and are made up of one	or  more  panes,  each	of
       which  contains	a  pseudo  terminal.  Commands for creating, linking and otherwise manipulating windows are covered in the
       “WINDOWS AND PANES” section.

       The following commands are available to manage clients and sessions:

       attach-session [-dErx] [-c working-directory] [-f flags] [-t target-session]
		     (alias: attach)
	       If run from outside tmux, create a new client in the current terminal and attach it  to	target-session.	  If  used
	       from  inside,  switch  the  current  client.  If -d is specified, any other clients attached to the session are de‐
	       tached.	If -x is given, send SIGHUP to the parent process of the client as well as detaching the client, typically
	       causing it to exit.  -f sets a comma-separated list of client flags.  The flags are:

	       active-pane
		       the client has an independent active pane

	       ignore-size
		       the client does not affect the size of other clients

	       no-output
		       the client does not receive pane output in control mode

	       pause-after=seconds
		       output is paused once the pane is seconds behind in control mode

	       read-only
		       the client is read-only

	       wait-exit
		       wait for an empty line input before exiting in control mode

	       A leading ‘!’ turns a flag off if the client is already attached.  -r is an  alias  for	-f  read-only,ignore-size.
	       When  a	client	is  read-only,	only keys bound to the detach-client or switch-client commands have any effect.	 A
	       client with the active-pane flag allows the active pane to be selected independently of the  window's  active  pane
	       used by clients without the flag.  This only affects the cursor position and commands issued from the client; other
	       features such as hooks and styles continue to use the window's active pane.

	       If no server is started, attach-session will attempt to start it; this will fail unless sessions are created in the
	       configuration file.

	       The  target-session  rules for attach-session are slightly adjusted: if tmux needs to select the most recently used
	       session, it will prefer the most recently used unattached session.

	       -c will set the session working directory (used for new windows) to working-directory.

	       If -E is used, the update-environment option will not be applied.

       detach-client [-aP] [-E shell-command] [-s target-session] [-t target-client]
		     (alias: detach)
	       Detach the current client if bound to a key, the client specified with -t, or all clients currently attached to the
	       session specified by -s.	 The -a option kills all but the client given with -t.	If -P is given, send SIGHUP to the
	       parent process of the client, typically causing it to exit.  With -E, run shell-command to replace the client.

       has-session [-t target-session]
		     (alias: has)
	       Report an error and exit with 1 if the specified session does not exist.	 If it does exist, exit with 0.

       kill-server
	       Kill the tmux server and clients and destroy all sessions.

       kill-session [-aC] [-t target-session]
	       Destroy the given session, closing any windows linked to it and no other sessions, and detaching	 all  clients  at‐
	       tached  to it.  If -a is given, all sessions but the specified one is killed.  The -C flag clears alerts (bell, ac‐
	       tivity, or silence) in all windows linked to the session.

       list-clients [-F format] [-f filter] [-t target-session]
		     (alias: lsc)
	       List all clients attached to the server.	 -F specifies the format of each line and -f a filter.	Only  clients  for
	       which  the filter is true are shown.  See the “FORMATS” section.	 If target-session is specified, list only clients
	       connected to that session.

       list-commands [-F format] [command]
		     (alias: lscm)
	       List the syntax of command or - if omitted - of all commands supported by tmux.

       list-sessions [-F format] [-f filter]
		     (alias: ls)
	       List all sessions managed by the server.	 -F specifies the format of each line and -f a filter.	Only sessions  for
	       which the filter is true are shown.  See the “FORMATS” section.

       lock-client [-t target-client]
		     (alias: lockc)
	       Lock target-client, see the lock-server command.

       lock-session [-t target-session]
		     (alias: locks)
	       Lock all clients attached to target-session.

       new-session  [-AdDEPX]  [-c start-directory] [-e environment] [-f flags] [-F format] [-n window-name] [-s session-name] [-t
	       group-name] [-x width] [-y height] [shell-command]
		     (alias: new)
	       Create a new session with name session-name.

	       The new session is attached to the current terminal unless -d is given.	window-name and shell-command are the name
	       of and shell command to execute in  the	initial	 window.   With	 -d,  the  initial  size  comes	 from  the  global
	       default-size option; -x and -y can be used to specify a different size.	‘-’ uses the size of the current client if
	       any.   If  -x  or  -y  is given, the default-size option is set for the session.	 -f sets a comma-separated list of
	       client flags (see attach-session).

	       If run from a terminal, any termios(4) special characters are saved and used for new windows in the new session.

	       The -A flag makes new-session behave like attach-session if session-name already exists; if -A is given, -D behaves
	       like -d to attach-session, and -X behaves like -x to attach-session.

	       If -t is given, it specifies a session group.  Sessions in the same group share the same set of windows - new  win‐
	       dows  are  linked  to  all sessions in the group and any windows closed removed from all sessions.  The current and
	       previous window and any session options remain independent and any session in a group may be killed without affect‐
	       ing the others.	The group-name argument may be:

	       1.      the name of an existing group, in which case the new session is added to that group;

	       2.      the name of an existing session - the new session is added to the same group as that  session,  creating	 a
		       new group if necessary;

	       3.      the name for a new group containing only the new session.

	       -n and shell-command are invalid if -t is used.

	       The  -P	option prints information about the new session after it has been created.  By default, it uses the format
	       ‘#{session_name}:’ but a different format may be specified with -F.

	       If -E is used, the update-environment option will not be applied.  -e takes the form ‘VARIABLE=value’ and  sets	an
	       environment variable for the newly created session; it may be specified multiple times.

       refresh-client  [-cDLRSU]  [-A pane:state] [-B name:what:format] [-C size] [-f flags] [-l [target-pane]] [-t target-client]
	       [adjustment]
		     (alias: refresh)
	       Refresh the current client if bound to a key, or a single client if one is given with -t.  If -S is specified, only
	       update the client's status line.

	       The -U, -D, -L -R, and -c flags allow the visible portion of a window  which  is	 larger	 than  the  client  to	be
	       changed.	  -U moves the visible part up by adjustment rows and -D down, -L left by adjustment columns and -R right.
	       -c returns to tracking the cursor automatically.	 If adjustment is omitted, 1 is used.  Note that the visible posi‐
	       tion is a property of the client not of the window, changing the current window in the attached session will  reset
	       it.

	       -C sets the width and height of a control mode client or of a window for a control mode client, size must be one of
	       ‘widthxheight’  or ‘window ID:widthxheight’, for example ‘80x24’ or ‘@0:80x24’.	-A allows a control mode client to
	       trigger actions on a pane.  The argument is a pane ID (with leading  ‘%’),  a  colon,  then  one	 of  ‘on’,  ‘off’,
	       ‘continue’  or  ‘pause’.	  If  ‘off’, tmux will not send output from the pane to the client and if all clients have
	       turned the pane off, will stop reading from the pane.  If ‘continue’, tmux will return to  sending  output  to  the
	       pane  if	 it  was paused (manually or with the pause-after flag).  If ‘pause’, tmux will pause the pane.	 -A may be
	       given multiple times for different panes.

	       -B sets a subscription to a format for a control mode client.  The argument is split into three	items  by  colons:
	       name  is	 a  name for the subscription; what is a type of item to subscribe to; format is the format.  After a sub‐
	       scription is added, changes to the format are reported with the %subscription-changed notification, at most once	 a
	       second.	 If  only  the name is given, the subscription is removed.  what may be empty to check the format only for
	       the attached session, or one of: a pane ID such as ‘%0’; ‘%*’ for all panes in the attached session;  a	window	ID
	       such as ‘@0’; or ‘@*’ for all windows in the attached session.

	       -f sets a comma-separated list of client flags, see attach-session.

	       -l  requests  the clipboard from the client using the xterm(1) escape sequence.	If target-pane is given, the clip‐
	       board is sent (in encoded form), otherwise it is stored in a new paste buffer.

	       -L, -R, -U and -D move the visible portion of the window left, right, up or down by adjustment, if  the	window	is
	       larger than the client.	-c resets so that the position follows the cursor.  See the window-size option.

       rename-session [-t target-session] new-name
		     (alias: rename)
	       Rename the session to new-name.

       server-access [-adlrw] [user]
	       Change the access or read/write permission of user.  The user running the tmux server (its owner) and the root user
	       cannot be changed and are always permitted access.

	       -a  and	-d are used to give or revoke access for the specified user.  If the user is already attached, the -d flag
	       causes their clients to be detached.

	       -r and -w change the permissions for user: -r makes their clients read-only and -w writable.  -l lists current  ac‐
	       cess permissions.

	       By default, the access list is empty and tmux creates sockets with file system permissions preventing access by any
	       user  other than the owner (and root).  These permissions must be changed manually.  Great care should be taken not
	       to allow access to untrusted users even read-only.

       show-messages [-JT] [-t target-client]
		     (alias: showmsgs)
	       Show server messages or information.  Messages are stored, up to a maximum of the limit set  by	the  message-limit
	       server option.  -J and -T show debugging information about jobs and terminals.

       source-file [-Fnqv] [-t target-pane] path ...
		     (alias: source)
	       Execute	commands from one or more files specified by path (which may be glob(7) patterns).  If -F is present, then
	       path is expanded as a format.  If -q is given, no error will be returned if path does not exist.	 With -n, the file
	       is parsed but no commands are executed.	-v shows the parsed commands and line numbers if possible.

       start-server
		     (alias: start)
	       Start the tmux server, if not already running, without creating any sessions.

	       Note that as by default the tmux server will exit with no sessions, this is only useful if a session is created	in
	       ~/.tmux.conf,  exit-empty is turned off, or another command is run as part of the same command sequence.	 For exam‐
	       ple:

		     $ tmux start \; show -g

       suspend-client [-t target-client]
		     (alias: suspendc)
	       Suspend a client by sending SIGTSTP (tty stop).

       switch-client [-ElnprZ] [-c target-client] [-t target-session] [-T key-table]
		     (alias: switchc)
	       Switch the current session for client target-client to target-session.  As a special case, -t may refer to  a  pane
	       (a  target  that	 contains ‘:’, ‘.’ or ‘%’), to change session, window and pane.	 In that case, -Z keeps the window
	       zoomed if it was zoomed.	 If -l, -n or -p is used, the client is moved to the last, next or  previous  session  re‐
	       spectively.  -r toggles the client read-only and ignore-size flags (see the attach-session command).

	       If -E is used, update-environment option will not be applied.

	       -T  sets the client's key table; the next key from the client will be interpreted from key-table.  This may be used
	       to configure multiple prefix keys, or to bind commands to sequences of keys.  For example, to make typing ‘abc’ run
	       the list-keys command:

		     bind-key -Ttable2 c list-keys
		     bind-key -Ttable1 b switch-client -Ttable2
		     bind-key -Troot   a switch-client -Ttable1

WINDOWS AND PANES
       Each window displayed by tmux may be split into one or more panes; each pane takes up a certain area of the display and	is
       a  separate  terminal.  A window may be split into panes using the split-window command.	 Windows may be split horizontally
       (with the -h flag) or vertically.  Panes may be resized with the resize-pane command (bound to  ‘C-Up’,	‘C-Down’  ‘C-Left’
       and ‘C-Right’ by default), the current pane may be changed with the select-pane command and the rotate-window and swap-pane
       commands	 may  be  used to swap panes without changing their position.  Panes are numbered beginning from zero in the order
       they are created.

       By default, a tmux pane permits direct access to the terminal contained in the pane.  A pane may also be put  into  one	of
       several modes:

	     -	 Copy  mode, which permits a section of a window or its history to be copied to a paste buffer for later insertion
		 into another window.  This mode is entered with the copy-mode command, bound to ‘[’ by default.  Copied text  can
		 be pasted with the paste-buffer command, bound to ‘]’.

	     -	 View mode, which is like copy mode but is entered when a command that produces output, such as list-keys, is exe‐
		 cuted from a key binding.

	     -	 Choose	 mode,	which allows an item to be chosen from a list.	This may be a client, a session or window or pane,
		 or a buffer.  This mode is entered with the choose-buffer, choose-client and choose-tree commands.

       In copy mode an indicator is displayed in the top-right corner of the pane with the current  position  and  the	number	of
       lines in the history.

       Commands	 are sent to copy mode using the -X flag to the send-keys command.  When a key is pressed, copy mode automatically
       uses one of two key tables, depending on the mode-keys option: copy-mode for emacs, or copy-mode-vi for vi.  Key tables may
       be viewed with the list-keys command.

       The following commands are supported in copy mode:

       append-selection
	       Append the selection to the top paste buffer.

       append-selection-and-cancel (vi: A)
	       Append the selection to the top paste buffer and exit copy mode.

       back-to-indentation (vi: ^) (emacs: M-m)
	       Move the cursor back to the indentation.

       begin-selection (vi: Space) (emacs: C-Space)
	       Begin selection.

       bottom-line (vi: L)
	       Move to the bottom line.

       cancel (vi: q) (emacs: Escape)
	       Exit copy mode.

       clear-selection (vi: Escape) (emacs: C-g)
	       Clear the current selection.

       copy-end-of-line [prefix]
	       Copy from the cursor position to the end of the line.  prefix is used to name the new paste buffer.

       copy-end-of-line-and-cancel [prefix]
	       Copy from the cursor position and exit copy mode.

       copy-line [prefix]
	       Copy the entire line.

       copy-line-and-cancel [prefix]
	       Copy the entire line and exit copy mode.

       copy-selection [prefix]
	       Copies the current selection.

       copy-selection-and-cancel [prefix] (vi: Enter) (emacs: M-w)
	       Copy the current selection and exit copy mode.

       cursor-down (vi: j) (emacs: Down)
	       Move the cursor down.

       cursor-left (vi: h) (emacs: Left)
	       Move the cursor left.

       cursor-right (vi: l) (emacs: Right)
	       Move the cursor right.

       cursor-up (vi: k) (emacs: Up)
	       Move the cursor up.

       end-of-line (vi: $) (emacs: C-e)
	       Move the cursor to the end of the line.

       goto-line line (vi: :) (emacs: g)
	       Move the cursor to a specific line.

       history-bottom (vi: G) (emacs: M->)
	       Scroll to the bottom of the history.

       history-top (vi: g) (emacs: M-<)
	       Scroll to the top of the history.

       jump-again (vi: ;) (emacs: ;)
	       Repeat the last jump.

       jump-backward to (vi: F) (emacs: F)
	       Jump backwards to the specified text.

       jump-forward to (vi: f) (emacs: f)
	       Jump forward to the specified text.

       jump-to-mark (vi: M-x) (emacs: M-x)
	       Jump to the last mark.

       middle-line (vi: M) (emacs: M-r)
	       Move to the middle line.

       next-matching-bracket (vi: %) (emacs: M-C-f)
	       Move to the next matching bracket.

       next-paragraph (vi: }) (emacs: M-})
	       Move to the next paragraph.

       next-prompt [-o]
	       Move to the next prompt.

       next-word (vi: w)
	       Move to the next word.

       page-down (vi: C-f) (emacs: PageDown)
	       Scroll down by one page.

       page-up (vi: C-b) (emacs: PageUp)
	       Scroll up by one page.

       previous-matching-bracket (emacs: M-C-b)
	       Move to the previous matching bracket.

       previous-paragraph (vi: {) (emacs: M-{)
	       Move to the previous paragraph.

       previous-prompt [-o]
	       Move to the previous prompt.

       previous-word (vi: b) (emacs: M-b)
	       Move to the previous word.

       rectangle-toggle (vi: v) (emacs: R)
	       Toggle rectangle selection mode.

       refresh-from-pane (vi: r) (emacs: r)
	       Refresh the content from the pane.

       search-again (vi: n) (emacs: n)
	       Repeat the last search.

       search-backward text (vi: ?)
	       Search backwards for the specified text.

       search-forward text (vi: /)
	       Search forward for the specified text.

       select-line (vi: V)
	       Select the current line.

       select-word
	       Select the current word.

       start-of-line (vi: 0) (emacs: C-a)
	       Move the cursor to the start of the line.

       top-line (vi: H) (emacs: M-R)
	       Move to the top line.

       The search commands come in several varieties: ‘search-forward’ and ‘search-backward’ search for a regular expression;  the
       ‘-text’	variants  search  for  a plain text string rather than a regular expression; ‘-incremental’ perform an incremental
       search and expect to be used with the -i flag to the command-prompt command.  ‘search-again’ repeats the	 last  search  and
       ‘search-reverse’ does the same but reverses the direction (forward becomes backward and backward becomes forward).

       The  ‘next-prompt’  and	‘previous-prompt’  move	 between  shell	 prompts, but require the shell to emit an escape sequence
       (\033]133;A\033\\) to tell tmux where the prompts are located; if the shell does not do this, these commands will do  noth‐
       ing.  The -o flag jumps to the beginning of the command output instead of the shell prompt.

       Copy  commands  may  take  an  optional	buffer	prefix	argument which is used to generate the buffer name (the default is
       ‘buffer’ so buffers are named ‘buffer0’, ‘buffer1’ and so on).  Pipe commands take a command argument which is the  command
       to  which  the  selected	 text is piped.	 ‘copy-pipe’ variants also copy the selection.	The ‘-and-cancel’ variants of some
       commands exit copy mode after they have completed (for copy commands) or when the cursor reaches the bottom (for	 scrolling
       commands).  ‘-no-clear’ variants do not clear the selection.

       The  next and previous word keys skip over whitespace and treat consecutive runs of either word separators or other letters
       as words.  Word separators can be customized with the word-separators session option.  Next word moves to the start of  the
       next  word,  next word end to the end of the next word and previous word to the start of the previous word.  The three next
       and previous space keys work similarly but use a space alone as the word separator.  Setting word-separators to	the  empty
       string makes next/previous word equivalent to next/previous space.

       The  jump  commands  enable quick movement within a line.  For instance, typing ‘f’ followed by ‘/’ will move the cursor to
       the next ‘/’ character on the current line.  A ‘;’ will then jump to the next occurrence.

       Commands in copy mode may be prefaced by an optional repeat count.  With vi key bindings, a prefix  is  entered	using  the
       number keys; with emacs, the Alt (meta) key and a number begins prefix entry.

       The synopsis for the copy-mode command is:

       copy-mode [-eHMqu] [-s src-pane] [-t target-pane]
	       Enter  copy  mode.   The -u option scrolls one page up.	-M begins a mouse drag (only valid if bound to a mouse key
	       binding, see “MOUSE SUPPORT”).  -H hides the position indicator in the top right.  -q cancels  copy  mode  and  any
	       other modes.  -s copies from src-pane instead of target-pane.

	       -e  specifies  that scrolling to the bottom of the history (to the visible screen) should exit copy mode.  While in
	       copy mode, pressing a key other than those used for scrolling will disable this behaviour.  This is intended to al‐
	       low fast scrolling through a pane's history, for example with:

		     bind PageUp copy-mode -eu

       A number of preset arrangements of panes are available,	these  are  called  layouts.   These  may  be  selected	 with  the
       select-layout  command  or  cycled with next-layout (bound to ‘Space’ by default); once a layout is chosen, panes within it
       may be moved and resized as normal.

       The following layouts are supported:

       even-horizontal
	       Panes are spread out evenly from left to right across the window.

       even-vertical
	       Panes are spread evenly from top to bottom.

       main-horizontal
	       A large (main) pane is shown at the top of the window and the remaining panes are spread from left to right in  the
	       leftover space at the bottom.  Use the main-pane-height window option to specify the height of the top pane.

       main-vertical
	       Similar	to main-horizontal but the large pane is placed on the left and the others spread from top to bottom along
	       the right.  See the main-pane-width window option.

       tiled   Panes are spread out as evenly as possible over the window in both rows and columns.

       In addition, select-layout may be used to apply a previously used layout - the list-windows command displays the layout	of
       each window in a form suitable for use with select-layout.  For example:

	     $ tmux list-windows
	     0: ksh [159x48]
		 layout: bb62,159x48,0,0{79x48,0,0,79x48,80,0}
	     $ tmux select-layout 'bb62,159x48,0,0{79x48,0,0,79x48,80,0}'

       tmux  automatically  adjusts the size of the layout for the current window size.	 Note that a layout cannot be applied to a
       window with more panes than that from which the layout was originally defined.

       Commands related to windows and panes are as follows:

       break-pane [-abdP] [-F format] [-n window-name] [-s src-pane] [-t dst-window]
		     (alias: breakp)
	       Break src-pane off from its containing window to make it the only pane in dst-window.  With -a or -b, the window is
	       moved to the next index after or before (existing windows are moved if necessary).  If -d is given, the new  window
	       does  not  become the current window.  The -P option prints information about the new window after it has been cre‐
	       ated.  By default, it uses the format ‘#{session_name}:#{window_index}.#{pane_index}’ but a different format may be
	       specified with -F.

       capture-pane [-aAepPqCJN] [-b buffer-name] [-E end-line] [-S start-line] [-t target-pane]
		     (alias: capturep)
	       Capture the contents of a pane.	If -p is given, the output goes to stdout, otherwise to the buffer specified  with
	       -b  or  a  new buffer if omitted.  If -a is given, the alternate screen is used, and the history is not accessible.
	       If no alternate screen exists, an error will be returned unless -q is given.  If -e is given, the  output  includes
	       escape  sequences  for text and background attributes.  -C also escapes non-printable characters as octal \xxx.	-T
	       ignores trailing positions that do not contain a character.  -N preserves trailing spaces at each line's end and -J
	       preserves trailing spaces and joins any wrapped lines; -J implies -T.  -P captures only any output  that	 the  pane
	       has received that is the beginning of an as-yet incomplete escape sequence.

	       -S  and	-E  specify  the starting and ending line numbers, zero is the first line of the visible pane and negative
	       numbers are lines in the history.  ‘-’ to -S is the start of the history and to -E the end  of  the  visible  pane.
	       The default is to capture only the visible contents of the pane.

       choose-client [-NrZ] [-F format] [-f filter] [-K key-format] [-O sort-order] [-t target-pane] [template]
	       Put  a  pane into client mode, allowing a client to be selected interactively from a list.  Each client is shown on
	       one line.  A shortcut key is shown on the left in brackets allowing for immediate choice, or the list may be  navi‐
	       gated and an item chosen or otherwise manipulated using the keys below.	-Z zooms the pane.  The following keys may
	       be used in client mode:

		     Key    Function
		     Enter  Choose selected client
		     Up	    Select previous client
		     Down   Select next client
		     C-s    Search by name
		     n	    Repeat last search
		     t	    Toggle if client is tagged
		     T	    Tag no clients
		     C-t    Tag all clients
		     d	    Detach selected client
		     D	    Detach tagged clients
		     x	    Detach and HUP selected client
		     X	    Detach and HUP tagged clients
		     z	    Suspend selected client
		     Z	    Suspend tagged clients
		     f	    Enter a format to filter items
		     O	    Change sort field
		     r	    Reverse sort order
		     v	    Toggle preview
		     q	    Exit mode

	       After a client is chosen, ‘%%’ is replaced by the client name in template and the result executed as a command.	If
	       template is not given, "detach-client -t '%%'" is used.

	       -O  specifies  the initial sort field: one of ‘name’, ‘size’, ‘creation’ (time), or ‘activity’ (time).  -r reverses
	       the sort order.	-f specifies an initial filter: the filter is a format - if it evaluates to zero, the item in  the
	       list  is	 not  shown, otherwise it is shown.  If a filter would lead to an empty list, it is ignored.  -F specifies
	       the format for each item in the list and -K a format for each shortcut key; both are evaluated once for each  line.
	       -N starts without the preview.  This command works only if at least one client is attached.

       choose-tree [-GNrswZ] [-F format] [-f filter] [-K key-format] [-O sort-order] [-t target-pane] [template]
	       Put  a pane into tree mode, where a session, window or pane may be chosen interactively from a tree.  Each session,
	       window or pane is shown on one line.  A shortcut key is shown on	 the  left  in	brackets  allowing  for	 immediate
	       choice,	or  the tree may be navigated and an item chosen or otherwise manipulated using the keys below.	 -s starts
	       with sessions collapsed and -w with windows collapsed.  -Z zooms the pane.  The following keys may be used in  tree
	       mode:

		     Key    Function
		     Enter  Choose selected item
		     Up	    Select previous item
		     Down   Select next item
		     +	    Expand selected item
		     -	    Collapse selected item
		     M-+    Expand all items
		     M--    Collapse all items
		     x	    Kill selected item
		     X	    Kill tagged items
		     <	    Scroll list of previews left
		     >	    Scroll list of previews right
		     C-s    Search by name
		     m	    Set the marked pane
		     M	    Clear the marked pane
		     n	    Repeat last search
		     t	    Toggle if item is tagged
		     T	    Tag no items
		     C-t    Tag all items
		     :	    Run a command for each tagged item
		     f	    Enter a format to filter items
		     H	    Jump to the starting pane
		     O	    Change sort field
		     r	    Reverse sort order
		     v	    Toggle preview
		     q	    Exit mode

	       After a session, window or pane is chosen, the first instance of ‘%%’ and all instances of ‘%1’ are replaced by the
	       target  in  template  and  the  result executed as a command.  If template is not given, "switch-client -t '%%'" is
	       used.

	       -O specifies the initial sort field: one of ‘index’, ‘name’, or ‘time’ (activity).  -r reverses the sort order.	-f
	       specifies an initial filter: the filter is a format - if it evaluates to zero, the item in the list is  not  shown,
	       otherwise  it  is shown.	 If a filter would lead to an empty list, it is ignored.  -F specifies the format for each
	       item in the tree and -K a format for each shortcut key; both are evaluated once for each line.  -N  starts  without
	       the  preview.  -G includes all sessions in any session groups in the tree rather than only the first.  This command
	       works only if at least one client is attached.

       customize-mode [-NZ] [-F format] [-f filter] [-t target-pane] [template]
	       Put a pane into customize mode, where options and key bindings may be browsed and modified  from	 a  list.   Option
	       values in the list are shown for the active pane in the current window.	-Z zooms the pane.  The following keys may
	       be used in customize mode:

		     Key    Function
		     Enter  Set pane, window, session or global option value
		     Up	    Select previous item
		     Down   Select next item
		     +	    Expand selected item
		     -	    Collapse selected item
		     M-+    Expand all items
		     M--    Collapse all items
		     s	    Set option value or key attribute
		     S	    Set global option value
		     w	    Set window option value, if option is for pane and window
		     d	    Set an option or key to the default
		     D	    Set tagged options and tagged keys to the default
		     u	    Unset an option (set to default value if global) or unbind a key
		     U	    Unset tagged options and unbind tagged keys
		     C-s    Search by name
		     n	    Repeat last search
		     t	    Toggle if item is tagged
		     T	    Tag no items
		     C-t    Tag all items
		     f	    Enter a format to filter items
		     v	    Toggle option information
		     q	    Exit mode

	       -f  specifies  an  initial  filter:  the	 filter is a format - if it evaluates to zero, the item in the list is not
	       shown, otherwise it is shown.  If a filter would lead to an empty list, it is ignored.  -F specifies the format for
	       each item in the tree.  -N starts without the option information.  This command works only if at least  one  client
	       is attached.

       display-panes [-bN] [-d duration] [-t target-client] [template]
		     (alias: displayp)
	       Display	 a   visible   indicator   of  each  pane  shown  by  target-client.   See  the	 display-panes-colour  and
	       display-panes-active-colour session options.  The indicator is closed when a key is pressed (unless -N is given) or
	       duration milliseconds have passed.  If -d is not given, display-panes-time is used.  A duration of zero	means  the
	       indicator stays until a key is pressed.	While the indicator is on screen, a pane may be chosen with the ‘0’ to ‘9’
	       keys,  which  will  cause  template  to be executed as a command with ‘%%’ substituted by the pane ID.  The default
	       template is "select-pane -t '%%'".  With -b, other commands are not blocked from running	 until	the  indicator	is
	       closed.

       find-window [-iCNrTZ] [-t target-pane] match-string
		     (alias: findw)
	       Search  for  a fnmatch(3) pattern or, with -r, regular expression match-string in window names, titles, and visible
	       content (but not history).  The flags control matching behavior:	 -C  matches  only  visible  window  contents,	-N
	       matches	only  the window name and -T matches only the window title.  -i makes the search ignore case.  The default
	       is -CNT.	 -Z zooms the pane.

	       This command works only if at least one client is attached.

       join-pane [-bdfhv] [-l size] [-s src-pane] [-t dst-pane]
		     (alias: joinp)
	       Like split-window, but instead of splitting dst-pane and creating a new pane, split it and move src-pane	 into  the
	       space.	This  can  be  used to reverse break-pane.  The -b option causes src-pane to be joined to left of or above
	       dst-pane.

	       If -s is omitted and a marked pane is present (see select-pane -m), the marked pane is used rather than the current
	       pane.

       kill-pane [-a] [-t target-pane]
		     (alias: killp)
	       Destroy the given pane.	If no panes remain in the containing window, it is also destroyed.  The	 -a  option  kills
	       all but the pane given with -t.

       kill-window [-a] [-t target-window]
		     (alias: killw)
	       Kill  the  current window or the window at target-window, removing it from any sessions to which it is linked.  The
	       -a option kills all but the window given with -t.

       last-pane [-deZ] [-t target-window]
		     (alias: lastp)
	       Select the last (previously selected) pane.  -Z keeps the window zoomed if it was zoomed.  -e enables  or  -d  dis‐
	       ables input to the pane.

       last-window [-t target-session]
		     (alias: last)
	       Select  the  last  (previously  selected) window.  If no target-session is specified, select the last window of the
	       current session.

       link-window [-abdk] [-s src-window] [-t dst-window]
		     (alias: linkw)
	       Link the window at src-window to the specified dst-window.  If dst-window is specified and no such  window  exists,
	       the  src-window	is  linked  there.  With -a or -b the window is moved to the next index after or before dst-window
	       (existing windows are moved if necessary).  If -k is given and dst-window exists, it is killed, otherwise an  error
	       is generated.  If -d is given, the newly linked window is not selected.

       list-panes [-as] [-F format] [-f filter] [-t target]
		     (alias: lsp)
	       If  -a is given, target is ignored and all panes on the server are listed.  If -s is given, target is a session (or
	       the current session).  If neither is given, target is a window (or the current window).	-F specifies the format of
	       each line and -f a filter.  Only panes for which the filter is true are shown.  See the “FORMATS” section.

       list-windows [-a] [-F format] [-f filter] [-t target-session]
		     (alias: lsw)
	       If -a is given, list  all  windows  on  the  server.   Otherwise,  list	windows	 in  the  current  session  or	in
	       target-session.	 -F  specifies the format of each line and -f a filter.	 Only windows for which the filter is true
	       are shown.  See the “FORMATS” section.

       move-pane [-bdfhv] [-l size] [-s src-pane] [-t dst-pane]
		     (alias: movep)
	       Does the same as join-pane.

       move-window [-abrdk] [-s src-window] [-t dst-window]
		     (alias: movew)
	       This is similar to link-window, except the window at src-window is moved to dst-window.	With -r,  all  windows	in
	       the session are renumbered in sequential order, respecting the base-index option.

       new-window [-abdkPS] [-c start-directory] [-e environment] [-F format] [-n window-name] [-t target-window] [shell-command]
		     (alias: neww)
	       Create  a  new  window.	 With -a or -b, the new window is inserted at the next index after or before the specified
	       target-window, moving windows up if necessary; otherwise target-window is the new window location.

	       If -d is given, the session does not make the new window the current window.  target-window represents  the  window
	       to  be created; if the target already exists an error is shown, unless the -k flag is used, in which case it is de‐
	       stroyed.	 If -S is given and a window named window-name already exists, it is selected (unless -d is also given	in
	       which case the command does nothing).

	       shell-command  is  the command to execute.  If shell-command is not specified, the value of the default-command op‐
	       tion is used.  -c specifies the working directory in which the new window is created.

	       When the shell command completes, the window closes.  See the remain-on-exit option to change this behaviour.

	       -e takes the form ‘VARIABLE=value’ and sets an environment variable for the newly created window; it may be  speci‐
	       fied multiple times.

	       The  TERM environment variable must be set to ‘screen’ or ‘tmux’ for all programs running inside tmux.  New windows
	       will automatically have ‘TERM=screen’ added to their environment, but care must be taken not to reset this in shell
	       start-up files or by the -e option.

	       The -P option prints information about the new window after it has been created.	 By default, it	 uses  the  format
	       ‘#{session_name}:#{window_index}’ but a different format may be specified with -F.

       next-layout [-t target-window]
		     (alias: nextl)
	       Move a window to the next layout and rearrange the panes to fit.

       next-window [-a] [-t target-session]
		     (alias: next)
	       Move to the next window in the session.	If -a is used, move to the next window with an alert.

       pipe-pane [-IOo] [-t target-pane] [shell-command]
		     (alias: pipep)
	       Pipe  output  sent by the program in target-pane to a shell command or vice versa.  A pane may only be connected to
	       one command at a time, any existing pipe is closed before shell-command is executed.  The shell-command string  may
	       contain	the  special  character	 sequences supported by the status-left option.	 If no shell-command is given, the
	       current pipe (if any) is closed.

	       -I and -O specify which of the shell-command output streams are connected to the pane: with -I stdout is	 connected
	       (so  anything  shell-command prints is written to the pane as if it were typed); with -O stdin is connected (so any
	       output in the pane is piped to shell-command).  Both may be used together and if neither are specified, -O is used.

	       The -o option only opens a new pipe if no previous pipe exists, allowing a pipe to be toggled with  a  single  key,
	       for example:

		     bind-key C-p pipe-pane -o 'cat >>~/output.#I-#P'

       previous-layout [-t target-window]
		     (alias: prevl)
	       Move to the previous layout in the session.

       previous-window [-a] [-t target-session]
		     (alias: prev)
	       Move to the previous window in the session.  With -a, move to the previous window with an alert.

       rename-window [-t target-window] new-name
		     (alias: renamew)
	       Rename the current window, or the window at target-window if specified, to new-name.

       resize-pane [-DLMRTUZ] [-t target-pane] [-x width] [-y height] [adjustment]
		     (alias: resizep)
	       Resize  a  pane, up, down, left or right by adjustment with -U, -D, -L or -R, or to an absolute size with -x or -y.
	       The adjustment is given in lines or columns (the default is 1); -x and -y may be a given as a number  of	 lines	or
	       columns or followed by ‘%’ for a percentage of the window size (for example ‘-x 10%’).  With -Z, the active pane is
	       toggled between zoomed (occupying the whole of the window) and unzoomed (its normal position in the layout).

	       -M begins mouse resizing (only valid if bound to a mouse key binding, see “MOUSE SUPPORT”).

	       -T trims all lines below the current cursor position and moves lines out of the history to replace them.

       resize-window [-aADLRU] [-t target-window] [-x width] [-y height] [adjustment]
		     (alias: resizew)
	       Resize a window, up, down, left or right by adjustment with -U, -D, -L or -R, or to an absolute size with -x or -y.
	       The  adjustment	is given in lines or cells (the default is 1).	-A sets the size of the largest session containing
	       the window; -a the size of the smallest.	 This command will automatically set window-size to manual in  the  window
	       options.

       respawn-pane [-k] [-c start-directory] [-e environment] [-t target-pane] [shell-command]
		     (alias: respawnp)
	       Reactivate  a pane in which the command has exited (see the remain-on-exit window option).  If shell-command is not
	       given, the command used when the pane was created or last respawned is executed.	 The pane must	be  already  inac‐
	       tive,  unless  -k is given, in which case any existing command is killed.  -c specifies a new working directory for
	       the pane.  The -e option has the same meaning as for the new-window command.

       respawn-window [-k] [-c start-directory] [-e environment] [-t target-window] [shell-command]
		     (alias: respawnw)
	       Reactivate a window in which the command has exited (see the remain-on-exit window option).   If	 shell-command	is
	       not  given, the command used when the window was created or last respawned is executed.	The window must be already
	       inactive, unless -k is given, in which case any existing command is killed.  -c specifies a new	working	 directory
	       for the window.	The -e option has the same meaning as for the new-window command.

       rotate-window [-DUZ] [-t target-window]
		     (alias: rotatew)
	       Rotate  the  positions of the panes within a window, either upward (numerically lower) with -U or downward (numeri‐
	       cally higher).  -Z keeps the window zoomed if it was zoomed.

       select-layout [-Enop] [-t target-pane] [layout-name]
		     (alias: selectl)
	       Choose a specific layout for a window.  If layout-name is not given, the last preset layout used (if any) is  reap‐
	       plied.	-n  and -p are equivalent to the next-layout and previous-layout commands.  -o applies the last set layout
	       if possible (undoes the most recent layout change).  -E spreads the current pane and  any  panes	 next  to  it  out
	       evenly.

       select-pane [-DdeLlMmRUZ] [-T title] [-t target-pane]
		     (alias: selectp)
	       Make  pane  target-pane	the active pane in its window.	If one of -D, -L, -R, or -U is used, respectively the pane
	       below, to the left, to the right, or above the target pane is used.  -Z keeps the window zoomed if it  was  zoomed.
	       -l  is the same as using the last-pane command.	-e enables or -d disables input to the pane.  -T sets the pane ti‐
	       tle.

	       -m and -M are used to set and clear the marked pane.  There is one marked pane at a time, setting a new marked pane
	       clears the last.	 The marked pane is the default target for -s to join-pane, move-pane, swap-pane and swap-window.

       select-window [-lnpT] [-t target-window]
		     (alias: selectw)
	       Select the  window  at  target-window.	-l,  -n	 and  -p  are  equivalent  to  the  last-window,  next-window  and
	       previous-window	commands.   If	-T is given and the selected window is already the current window, the command be‐
	       haves like last-window.

       split-window [-bdfhIvPZ] [-c start-directory] [-e environment] [-l size] [-t target-pane] [shell-command] [-F format]
		     (alias: splitw)
	       Create a new pane by splitting target-pane: -h does a horizontal split and -v a vertical split; if neither is spec‐
	       ified, -v is assumed.  The -l option specifies the size of the new pane in lines (for vertical split) or in columns
	       (for horizontal split); size may be followed by ‘%’ to specify a percentage of the available space.  The -b  option
	       causes  the  new pane to be created to the left of or above target-pane.	 The -f option creates a new pane spanning
	       the full window height (with -h) or full window width (with -v), instead of splitting the active pane.  -Z zooms if
	       the window is not zoomed, or keeps it zoomed if already zoomed.

	       An empty shell-command ('') will create a pane with no command running in it.  Output can be sent to  such  a  pane
	       with  the  display-message  command.  The -I flag (if shell-command is not specified or empty) will create an empty
	       pane and forward any output from stdin to it.  For example:

		     $ make 2>&1|tmux splitw -dI &

	       All other options have the same meaning as for the new-window command.

       swap-pane [-dDUZ] [-s src-pane] [-t dst-pane]
		     (alias: swapp)
	       Swap two panes.	If -U is used and no source pane is specified with -s, dst-pane is swapped with the previous  pane
	       (before	it  numerically); -D swaps with the next pane (after it numerically).  -d instructs tmux not to change the
	       active pane and -Z keeps the window zoomed if it was zoomed.

	       If -s is omitted and a marked pane is present (see select-pane -m), the marked pane is used rather than the current
	       pane.

       swap-window [-d] [-s src-window] [-t dst-window]
		     (alias: swapw)
	       This is similar to link-window, except the source and destination windows are swapped.  It is an error if no window
	       exists at src-window.  If -d is given, the new window does not become the current window.

	       If -s is omitted and a marked pane is present (see select-pane -m), the window containing the marked pane  is  used
	       rather than the current window.

       unlink-window [-k] [-t target-window]
		     (alias: unlinkw)
	       Unlink  target-window.	Unless	-k  is given, a window may be unlinked only if it is linked to multiple sessions -
	       windows may not be linked to no sessions; if -k is specified and the window is linked to only one  session,  it	is
	       unlinked and destroyed.

KEY BINDINGS
       tmux  allows  a command to be bound to most keys, with or without a prefix key.	When specifying keys, most represent them‐
       selves (for example ‘A’ to ‘Z’).	 Ctrl keys may be prefixed with ‘C-’ or ‘^’, Shift keys with  ‘S-’  and	 Alt  (meta)  with
       ‘M-’.   In  addition,  the following special key names are accepted: Up, Down, Left, Right, BSpace, BTab, DC (Delete), End,
       Enter, Escape, F1 to F12, Home, IC (Insert), NPage/PageDown/PgDn, PPage/PageUp/PgUp, Space, and Tab.  Note that to bind the
       ‘"’ or ‘'’ keys, quotation marks are necessary, for example:

	     bind-key '"' split-window
	     bind-key "'" new-window

       A command bound to the Any key will execute for all keys which do not have a more specific binding.

       Commands related to key bindings are as follows:

       bind-key [-nr] [-N note] [-T key-table] key command [argument ...]
		     (alias: bind)
	       Bind key key to command.	 Keys are bound in a key table.	 By default (without -T), the key is bound in  the  prefix
	       key  table.   This  table  is  used  for keys pressed after the prefix key (for example, by default ‘c’ is bound to
	       new-window in the prefix table, so ‘C-b c’ creates a new window).  The root table is used for keys pressed  without
	       the  prefix  key: binding ‘c’ to new-window in the root table (not recommended) means a plain ‘c’ will create a new
	       window.	-n is an alias for -T root.  Keys may also be bound in custom key tables and the switch-client -T  command
	       used  to switch to them from a key binding.  The -r flag indicates this key may repeat, see the repeat-time option.
	       -N attaches a note to the key (shown with list-keys -N).

	       To view the default bindings and possible commands, see the list-keys command.

       list-keys [-1aN] [-P prefix-string -T key-table] [key]
		     (alias: lsk)
	       List key bindings.  There are two forms: the default lists keys as bind-key commands; -N lists only keys	 with  at‐
	       tached notes and shows only the key and note for each key.

	       With the default form, all key tables are listed by default.  -T lists only keys in key-table.

	       With  the  -N  form,  only keys in the root and prefix key tables are listed by default; -T also lists only keys in
	       key-table.  -P specifies a prefix to print before each key and -1 lists only the first matching key.  -a lists  the
	       command for keys that do not have a note rather than skipping them.

       send-keys [-FHKlMRX] [-c target-client] [-N repeat-count] [-t target-pane] key ...
		     (alias: send)
	       Send  a	key or keys to a window or client.  Each argument key is the name of the key (such as ‘C-a’ or ‘NPage’) to
	       send; if the string is not recognised as a key, it is sent as a series of characters.  If -K  is	 given,	 keys  are
	       sent  to target-client, so they are looked up in the client's key table, rather than to target-pane.  All arguments
	       are sent sequentially from first to last.  If no keys are given and the command is bound to a key, then that key is
	       used.

	       The -l flag disables key name lookup and processes the keys as literal UTF-8 characters.	 The -H flag expects  each
	       key to be a hexadecimal number for an ASCII character.

	       The -R flag causes the terminal state to be reset.

	       -M passes through a mouse event (only valid if bound to a mouse key binding, see “MOUSE SUPPORT”).

	       -X is used to send a command into copy mode - see the “WINDOWS AND PANES” section.  -N specifies a repeat count and
	       -F expands formats in arguments where appropriate.

       send-prefix [-2] [-t target-pane]
	       Send the prefix key, or with -2 the secondary prefix key, to a window as if it was pressed.

       unbind-key [-anq] [-T key-table] key
		     (alias: unbind)
	       Unbind  the  command bound to key.  -n and -T are the same as for bind-key.  If -a is present, all key bindings are
	       removed.	 The -q option prevents errors being returned.

OPTIONS
       The appearance and behaviour of tmux may be modified by changing the value of various options.  There are four types of op‐
       tion: server options, session options, window options, and pane options.

       The tmux server has a set of global server options which do not apply to any particular window or session or  pane.   These
       are altered with the set-option -s command, or displayed with the show-options -s command.

       In  addition,  each individual session may have a set of session options, and there is a separate set of global session op‐
       tions.  Sessions which do not have a particular option configured inherit the value from the global session options.   Ses‐
       sion  options  are set or unset with the set-option command and may be listed with the show-options command.  The available
       server and session options are listed under the set-option command.

       Similarly, a set of window options is attached to each window and a set of pane options to each pane.  Pane options inherit
       from window options.  This means any pane option may be set as a window option to apply the option to all panes in the win‐
       dow without the option set, for example these commands will set the background colour to red for all panes except pane 0:

	     set -w window-style bg=red
	     set -pt:.0 window-style bg=blue

       There is also a set of global window options from which any unset window or pane options are inherited.	 Window	 and  pane
       options are altered with set-option -w and -p commands and displayed with show-option -w and -p.

       tmux  also  supports  user options which are prefixed with a ‘@’.  User options may have any name, so long as they are pre‐
       fixed with ‘@’, and be set to any string.  For example:

	     $ tmux set -wq @foo "abc123"
	     $ tmux show -wv @foo
	     abc123

       Commands which set options are as follows:

       set-option [-aFgopqsuUw] [-t target-pane] option value
		     (alias: set)
	       Set a pane option with -p, a window option with -w, a server option with -s, otherwise a session	 option.   If  the
	       option  is not a user option, -w or -s may be unnecessary - tmux will infer the type from the option name, assuming
	       -w for pane options.  If -g is given, the global session or window option is set.

	       -F expands formats in the option value.	The -u flag unsets an option, so a session inherits the	 option	 from  the
	       global options (or with -g, restores a global option to the default).  -U unsets an option (like -u) but if the op‐
	       tion  is a pane option also unsets the option on any panes in the window.  value depends on the option and may be a
	       number, a string, or a flag (on, off, or omitted to toggle).

	       The -o flag prevents setting an option that is already set and the -q flag suppresses errors about unknown  or  am‐
	       biguous options.

	       With -a, and if the option expects a string or a style, value is appended to the existing setting.  For example:

		     set -g status-left "foo"
		     set -ag status-left "bar"

	       Will result in ‘foobar’.	 And:

		     set -g status-style "bg=red"
		     set -ag status-style "fg=blue"

	       Will  result in a red background and blue foreground.  Without -a, the result would be the default background and a
	       blue foreground.

       show-options [-AgHpqsvw] [-t target-pane] [option]
		     (alias: show)
	       Show the pane options (or a single option if option is provided) with -p, the window options with  -w,  the  server
	       options	with -s, otherwise the session options.	 If the option is not a user option, -w or -s may be unnecessary -
	       tmux will infer the type from the option name, assuming -w for pane options.  Global session or window options  are
	       listed  if  -g  is used.	 -v shows only the option value, not the name.	If -q is set, no error will be returned if
	       option is unset.	 -H includes hooks (omitted by default).  -A includes options inherited from a parent set  of  op‐
	       tions, such options are marked with an asterisk.

       Available server options are:

       backspace key
	       Set the key sent by tmux for backspace.

       buffer-limit number
	       Set  the	 number of buffers; as new buffers are added to the top of the stack, old ones are removed from the bottom
	       if necessary to maintain this maximum length.

       command-alias[] name=value
	       This is an array of custom aliases for commands.	 If an unknown command matches name, it is  replaced  with  value.
	       For example, after:

		     set -s command-alias[100] zoom='resize-pane -Z'

	       Using:

		     zoom -t:.1

	       Is equivalent to:

		     resize-pane -Z -t:.1

	       Note  that  aliases are expanded when a command is parsed rather than when it is executed, so binding an alias with
	       bind-key will bind the expanded form.

       default-terminal terminal
	       Set the default terminal for new windows created in this session - the default value of the TERM environment  vari‐
	       able.  For tmux to work correctly, this must be set to ‘screen’, ‘tmux’ or a derivative of them.

       copy-command shell-command
	       Give the command to pipe to if the copy-pipe copy mode command is used without arguments.

       escape-time time
	       Set the time in milliseconds for which tmux waits after an escape is input to determine if it is part of a function
	       or meta key sequences.  The default is 500 milliseconds.

       editor shell-command
	       Set the command used when tmux runs an editor.

       exit-empty [on | off]
	       If enabled (the default), the server will exit when there are no active sessions.

       exit-unattached [on | off]
	       If enabled, the server will exit when there are no attached clients.

       extended-keys [on | off | always]
	       When  on	 or  always, the escape sequence to enable extended keys is sent to the terminal, if tmux knows that it is
	       supported.  tmux always recognises extended keys itself.	 If this option is on, tmux  will  only	 forward  extended
	       keys to applications when they request them; if always, tmux will always forward the keys.

       focus-events [on | off]
	       When  enabled, focus events are requested from the terminal if supported and passed through to applications running
	       in tmux.	 Attached clients should be detached and attached again after changing this option.

       history-file path
	       If not empty, a file to which tmux will write command prompt history on exit and load it from on start.

       message-limit number
	       Set the number of error or information messages to save in the message log for each client.

       prompt-history-limit number
	       Set the number of history items to save in the history file for each type of command prompt.

       set-clipboard [on | external | off]
	       Attempt to set the terminal clipboard content using the xterm(1) escape sequence, if there is an Ms  entry  in  the
	       terminfo(5) description (see the “TERMINFO EXTENSIONS” section).

	       If  set	to  on, tmux will both accept the escape sequence to create a buffer and attempt to set the terminal clip‐
	       board.  If set to external, tmux will attempt to set the terminal clipboard but ignore attempts by applications	to
	       set tmux buffers.  If off, tmux will neither accept the clipboard escape sequence nor attempt to set the clipboard.

	       Note that this feature needs to be enabled in xterm(1) by setting the resource:

		     disallowedWindowOps: 20,21,SetXprop

	       Or changing this property from the xterm(1) interactive menu when required.

       terminal-features[] string
	       Set  terminal  features for terminal types read from terminfo(5).  tmux has a set of named terminal features.  Each
	       will apply appropriate changes to the terminfo(5) entry in use.

	       tmux can detect features for a few common terminals; this option can be used to easily  tell  tmux  about  features
	       supported  by terminals it cannot detect.  The terminal-overrides option allows individual terminfo(5) capabilities
	       to be set instead, terminal-features is intended for classes of functionality supported in a standard way  but  not
	       reported by terminfo(5).	 Care must be taken to configure this only with features the terminal actually supports.

	       This  is	 an  array option where each entry is a colon-separated string made up of a terminal type pattern (matched
	       using fnmatch(3)) followed by a list of terminal features.  The available features are:

	       256     Supports 256 colours with the SGR escape sequences.

	       clipboard
		       Allows setting the system clipboard.

	       ccolour
		       Allows setting the cursor colour.

	       cstyle  Allows setting the cursor style.

	       extkeys
		       Supports extended keys.

	       focus   Supports focus reporting.

	       hyperlinks
		       Supports OSC 8 hyperlinks.

	       ignorefkeys
		       Ignore function keys from terminfo(5) and use the tmux internal set only.

	       margins
		       Supports DECSLRM margins.

	       mouse   Supports xterm(1) mouse sequences.

	       osc7    Supports the OSC 7 working directory extension.

	       overline
		       Supports the overline SGR attribute.

	       rectfill
		       Supports the DECFRA rectangle fill escape sequence.

	       RGB     Supports RGB colour with the SGR escape sequences.

	       sixel   Supports SIXEL graphics.

	       strikethrough
		       Supports the strikethrough SGR escape sequence.

	       sync    Supports synchronized updates.

	       title   Supports xterm(1) title setting.

	       usstyle
		       Allows underscore style and colour to be set.

       terminal-overrides[] string
	       Allow terminal descriptions read using terminfo(5) to be overridden.  Each entry is a colon-separated  string  made
	       up of a terminal type pattern (matched using fnmatch(3)) and a set of name=value entries.

	       For example, to set the ‘clear’ terminfo(5) entry to ‘\e[H\e[2J’ for all terminal types matching ‘rxvt*’:

		     rxvt*:clear=\e[H\e[2J

	       The terminal entry value is passed through strunvis(3) before interpretation.

       user-keys[] key
	       Set  list  of user-defined key escape sequences.	 Each item is associated with a key named ‘User0’, ‘User1’, and so
	       on.

	       For example:

		     set -s user-keys[0] "\e[5;30012~"
		     bind User0 resize-pane -L 3

       Available session options are:

       activity-action [any | none | current | other]
	       Set action on window activity when monitor-activity is on.  any means activity in any window linked  to	a  session
	       causes  a  bell or message (depending on visual-activity) in the current window of that session, none means all ac‐
	       tivity is ignored (equivalent to monitor-activity being off), current means only activity in windows other than the
	       current window are ignored and other means activity in the current window is ignored but not those  in  other  win‐
	       dows.

       assume-paste-time milliseconds
	       If  keys	 are  entered  faster than one in milliseconds, they are assumed to have been pasted rather than typed and
	       tmux key bindings are not processed.  The default is one millisecond and zero disables.

       base-index index
	       Set the base index from which an unused index should be searched when a new window  is  created.	  The  default	is
	       zero.

       bell-action [any | none | current | other]
	       Set action on a bell in a window when monitor-bell is on.  The values are the same as those for activity-action.

       default-command shell-command
	       Set  the	 command used for new windows (if not specified when the window is created) to shell-command, which may be
	       any sh(1) command.  The default is an empty string, which instructs tmux to create a login shell using the value of
	       the default-shell option.

       default-shell path
	       Specify the default shell.  This is used as the login shell for new windows when the default-command option is  set
	       to  empty,  and	must  be the full path of the executable.  When started tmux tries to set a default value from the
	       first suitable of the SHELL environment variable, the shell returned  by	 getpwuid(3),  or  /bin/sh.   This  option
	       should be configured when tmux is used as a login shell.

       default-size XxY
	       Set  the default size of new windows when the window-size option is set to manual or when a session is created with
	       new-session -d.	The value is the width and height separated by an ‘x’ character.  The default is 80x24.

       destroy-unattached [off | on | keep-last | keep-group]
	       If on, destroy the session after the last client has detached.  If off (the default), leave the	session	 orphaned.
	       If  keep-last,  destroy	the session only if it is in a group and has other sessions in that group.  If keep-group,
	       destroy the session unless it is in a group and is the only session in that group.

       detach-on-destroy [off | on | no-detached | previous | next]
	       If on (the default), the client is detached when the session it is attached to is destroyed.  If off, the client is
	       switched to the most recently active of the remaining sessions.	If no-detached, the client  is	detached  only	if
	       there are no detached sessions; if detached sessions exist, the client is switched to the most recently active.	If
	       previous or next, the client is switched to the previous or next session in alphabetical order.

       display-panes-active-colour colour
	       Set the colour used by the display-panes command to show the indicator for the active pane.

       display-panes-colour colour
	       Set the colour used by the display-panes command to show the indicators for inactive panes.

       display-panes-time time
	       Set the time in milliseconds for which the indicators shown by the display-panes command appear.

       display-time time
	       Set  the	 amount of time for which status line messages and other on-screen indicators are displayed.  If set to 0,
	       messages and indicators are displayed until a key is pressed.  time is in milliseconds.

       history-limit lines
	       Set the maximum number of lines held in window history.	This setting applies only to new windows - existing window
	       histories are not resized and retain the limit at the point they were created.

       key-table key-table
	       Set the default key table to key-table instead of root.

       lock-after-time number
	       Lock the session (like the lock-session command) after number seconds of inactivity.  The default is  not  to  lock
	       (set to 0).

       lock-command shell-command
	       Command to run when locking each client.	 The default is to run lock(1) with -np.

       menu-style style
	       Set the menu style.  See the “STYLES” section on how to specify style.  Attributes are ignored.

       menu-selected-style style
	       Set the selected menu item style.  See the “STYLES” section on how to specify style.  Attributes are ignored.

       menu-border-style style
	       Set the menu border style.  See the “STYLES” section on how to specify style.  Attributes are ignored.

       menu-border-lines type
	       Set  the	 type  of  characters  used  for  drawing  menu	 borders.   See popup-border-lines for possible values for
	       border-lines.

       message-command-style style
	       Set status line message command style.  This is used for the command prompt with vi(1) keys when in  command  mode.
	       For how to specify style, see the “STYLES” section.

       message-line [0 | 1 | 2 | 3 | 4]
	       Set line on which status line messages and the command prompt are shown.

       message-style style
	       Set  status  line  message style.  This is used for messages and for the command prompt.	 For how to specify style,
	       see the “STYLES” section.

       mouse [on | off]
	       If on, tmux captures the mouse and allows mouse events to be bound as key bindings.  See the “MOUSE  SUPPORT”  sec‐
	       tion for details.

       prefix key
	       Set  the key accepted as a prefix key.  In addition to the standard keys described under “KEY BINDINGS”, prefix can
	       be set to the special key ‘None’ to set no prefix.

       prefix2 key
	       Set a secondary key accepted as a prefix key.  Like prefix, prefix2 can be set to ‘None’.

       renumber-windows [on | off]
	       If on, when a window is closed in a session, automatically renumber the other windows in numerical order.  This re‐
	       spects the base-index option if it has been set.	 If off, do not renumber the windows.

       repeat-time time
	       Allow multiple commands to be entered without pressing the prefix-key again in the specified time milliseconds (the
	       default is 500).	 Whether a key repeats may be set when it is bound using the -r flag to bind-key.  Repeat  is  en‐
	       abled for the default keys bound to the resize-pane command.

       set-titles [on | off]
	       Attempt	to  set the client terminal title using the tsl and fsl terminfo(5) entries if they exist.  tmux automati‐
	       cally sets these to the \e]0;...\007 sequence if the terminal appears to be xterm(1).  This option is  off  by  de‐
	       fault.

       set-titles-string string
	       String used to set the client terminal title if set-titles is on.  Formats are expanded, see the “FORMATS” section.

       silence-action [any | none | current | other]
	       Set action on window silence when monitor-silence is on.	 The values are the same as those for activity-action.

       status [off | on | 2 | 3 | 4 | 5]
	       Show  or	 hide  the  status line or specify its size.  Using on gives a status line one row in height; 2, 3, 4 or 5
	       more rows.

       status-format[] format
	       Specify the format to be used for each line of the status line.	The default builds the top status  line	 from  the
	       various individual status options below.

       status-interval interval
	       Update the status line every interval seconds.  By default, updates will occur every 15 seconds.	 A setting of zero
	       disables redrawing at interval.

       status-justify [left | centre | right | absolute-centre]
	       Set  the position of the window list in the status line: left, centre or right.	centre puts the window list in the
	       relative centre of the available free space; absolute-centre uses the centre of the entire horizontal space.

       status-keys [vi | emacs]
	       Use vi or emacs-style key bindings in the status line, for example at the command prompt.  The  default	is  emacs,
	       unless the VISUAL or EDITOR environment variables are set and contain the string ‘vi’.

       status-left string
	       Display	string	(by  default  the  session  name)  to  the left of the status line.  string will be passed through
	       strftime(3).  Also see the “FORMATS” and “STYLES” sections.

	       For details on how the names and titles can be set see the “NAMES AND TITLES” section.

	       Examples are:

		     #(sysctl vm.loadavg)
		     #[fg=yellow,bold]#(apm -l)%%#[default] [#S]

	       The default is ‘[#S] ’.

       status-left-length length
	       Set the maximum length of the left component of the status line.	 The default is 10.

       status-left-style style
	       Set the style of the left part of the status line.  For how to specify style, see the “STYLES” section.

       status-position [top | bottom]
	       Set the position of the status line.

       status-right string
	       Display string to the right of the status line.	By default, the current pane title in double quotes, the date  and
	       the time are shown.  As with status-left, string will be passed to strftime(3) and character pairs are replaced.

       status-right-length length
	       Set the maximum length of the right component of the status line.  The default is 40.

       status-right-style style
	       Set the style of the right part of the status line.  For how to specify style, see the “STYLES” section.

       status-style style
	       Set status line style.  For how to specify style, see the “STYLES” section.

       update-environment[] variable
	       Set list of environment variables to be copied into the session environment when a new session is created or an ex‐
	       isting  session	is attached.  Any variables that do not exist in the source environment are set to be removed from
	       the session environment (as if -r was given to the set-environment command).

       visual-activity [on | off | both]
	       If on, display a message instead of sending a bell when activity occurs in a window for which the  monitor-activity
	       window option is enabled.  If set to both, a bell and a message are produced.

       visual-bell [on | off | both]
	       If  on,	a message is shown on a bell in a window for which the monitor-bell window option is enabled instead of it
	       being passed through to the terminal (which normally makes a sound).  If set to both, a bell and a message are pro‐
	       duced.  Also see the bell-action option.

       visual-silence [on | off | both]
	       If monitor-silence is enabled, prints a message after the interval has expired on a given window instead of sending
	       a bell.	If set to both, a bell and a message are produced.

       word-separators string
	       Sets the session's conception of what characters are considered word separators, for the purposes of the	 next  and
	       previous word commands in copy mode.

       Available window options are:

       aggressive-resize [on | off]
	       Aggressively  resize the chosen window.	This means that tmux will resize the window to the size of the smallest or
	       largest session (see the window-size option) for which it is the current window, rather than the session	 to  which
	       it  is  attached.  The window may resize when the current window is changed on another session; this option is good
	       for full-screen programs which support SIGWINCH and poor for interactive programs such as shells.

       automatic-rename [on | off]
	       Control automatic window renaming.  When this setting is enabled, tmux will rename the window  automatically  using
	       the format specified by automatic-rename-format.	 This flag is automatically disabled for an individual window when
	       a name is specified at creation with new-window or new-session, or later with rename-window, or with a terminal es‐
	       cape sequence.  It may be switched off globally with:

		     set-option -wg automatic-rename off

       automatic-rename-format format
	       The format (see “FORMATS”) used when the automatic-rename option is enabled.

       clock-mode-colour colour
	       Set clock colour.

       clock-mode-style [12 | 24]
	       Set clock hour format.

       fill-character character
	       Set the character used to fill areas of the terminal unused by a window.

       main-pane-height height
       main-pane-width width
	       Set  the	 width	or height of the main (left or top) pane in the main-horizontal or main-vertical layouts.  If suf‐
	       fixed by ‘%’, this is a percentage of the window size.

       copy-mode-match-style style
	       Set the style of search matches in copy mode.  For how to specify style, see the “STYLES” section.

       copy-mode-mark-style style
	       Set the style of the line containing the mark in copy mode.  For how to specify style, see the “STYLES” section.

       copy-mode-current-match-style style
	       Set the style of the current search match in copy mode.	For how to specify style, see the “STYLES” section.

       mode-keys [vi | emacs]
	       Use vi or emacs-style key bindings in copy mode.	 The default is emacs, unless VISUAL or EDITOR contains ‘vi’.

       mode-style style
	       Set window modes style.	For how to specify style, see the “STYLES” section.

       monitor-activity [on | off]
	       Monitor for activity in the window.  Windows with activity are highlighted in the status line.

       monitor-bell [on | off]
	       Monitor for a bell in the window.  Windows with a bell are highlighted in the status line.

       monitor-silence [interval]
	       Monitor for silence (no activity) in the window within interval seconds.	 Windows that have been silent for the in‐
	       terval are highlighted in the status line.  An interval of zero disables the monitoring.

       other-pane-height height
	       Set the height of the other panes (not the main pane) in the main-horizontal layout.  If this option is	set  to	 0
	       (the  default),	it  will  have no effect.  If both the main-pane-height and other-pane-height options are set, the
	       main pane will grow taller to make the other panes the specified height, but will never shrink to do so.	  If  suf‐
	       fixed by ‘%’, this is a percentage of the window size.

       other-pane-width width
	       Like other-pane-height, but set the width of other panes in the main-vertical layout.

       pane-active-border-style style
	       Set  the pane border style for the currently active pane.  For how to specify style, see the “STYLES” section.  At‐
	       tributes are ignored.

       pane-base-index index
	       Like base-index, but set the starting index for pane numbers.

       pane-border-format format
	       Set the text shown in pane border status lines.

       pane-border-indicators [off | colour | arrows | both]
	       Indicate active pane by colouring only half of the border in windows with exactly two panes,  by	 displaying  arrow
	       markers, by drawing both or neither.

       pane-border-lines type
	       Set the type of characters used for drawing pane borders.  type may be one of:

	       single  single lines using ACS or UTF-8 characters

	       double  double lines using UTF-8 characters

	       heavy   heavy lines using UTF-8 characters

	       simple  simple ASCII characters

	       number  the pane number

	       ‘double’ and ‘heavy’ will fall back to standard ACS line drawing when UTF-8 is not supported.

       pane-border-status [off | top | bottom]
	       Turn pane border status lines off or set their position.

       pane-border-style style
	       Set  the	 pane  border style for panes aside from the active pane.  For how to specify style, see the “STYLES” sec‐
	       tion.  Attributes are ignored.

       popup-style style
	       Set the popup style.  See the “STYLES” section on how to specify style.	Attributes are ignored.

       popup-border-style style
	       Set the popup border style.  See the “STYLES” section on how to specify style.  Attributes are ignored.

       popup-border-lines type
	       Set the type of characters used for drawing popup borders.  type may be one of:

	       single  single lines using ACS or UTF-8 characters (default)

	       rounded
		       variation of single with rounded corners using UTF-8 characters

	       double  double lines using UTF-8 characters

	       heavy   heavy lines using UTF-8 characters

	       simple  simple ASCII characters

	       padded  simple ASCII space character

	       none    no border

	       ‘double’ and ‘heavy’ will fall back to standard ACS line drawing when UTF-8 is not supported.

       window-status-activity-style style
	       Set status line style for windows with an activity alert.  For how to specify style, see the “STYLES” section.

       window-status-bell-style style
	       Set status line style for windows with a bell alert.  For how to specify style, see the “STYLES” section.

       window-status-current-format string
	       Like window-status-format, but is the format used when the window is the current window.

       window-status-current-style style
	       Set status line style for the currently active window.  For how to specify style, see the “STYLES” section.

       window-status-format string
	       Set the format in which the window is displayed in the status line window list.	See  the  “FORMATS”  and  “STYLES”
	       sections.

       window-status-last-style style
	       Set status line style for the last active window.  For how to specify style, see the “STYLES” section.

       window-status-separator string
	       Sets the separator drawn between windows in the status line.  The default is a single space character.

       window-status-style style
	       Set status line style for a single window.  For how to specify style, see the “STYLES” section.

       window-size largest | smallest | manual | latest
	       Configure  how  tmux  determines	 the  window size.  If set to largest, the size of the largest attached session is
	       used; if smallest, the size of the smallest.  If manual, the size of a new window is set from the default-size  op‐
	       tion and windows are resized automatically.  With latest, tmux uses the size of the client that had the most recent
	       activity.  See also the resize-window command and the aggressive-resize option.

       wrap-search [on | off]
	       If this option is set, searches will wrap around the end of the pane contents.  The default is on.

       Available pane options are:

       allow-passthrough [on | off | all]
	       Allow  programs	in  the	 pane  to  bypass  tmux using a terminal escape sequence (\ePtmux;...\e\\).  If set to on,
	       passthrough sequences will be allowed only if the pane is visible.  If set to all, they will be allowed even if the
	       pane is invisible.

       allow-rename [on | off]
	       Allow programs in the pane to change the window name using a terminal escape sequence (\ek...\e\\).

       alternate-screen [on | off]
	       This option configures whether programs running inside the pane may use	the  terminal  alternate  screen  feature,
	       which  allows the smcup and rmcup terminfo(5) capabilities.  The alternate screen feature preserves the contents of
	       the window when an interactive application starts and restores it on exit, so that any output  visible  before  the
	       application starts reappears unchanged after it exits.

       cursor-colour colour
	       Set the colour of the cursor.

       pane-colours[] colour
	       The  default  colour palette.  Each entry in the array defines the colour tmux uses when the colour with that index
	       is requested.  The index may be from zero to 255.

       cursor-style style
	       Set the style of the cursor.  Available styles are: default, blinking-block, block, blinking-underline,	underline,
	       blinking-bar, bar.

       remain-on-exit [on | off | failed]
	       A  pane with this flag set is not destroyed when the program running in it exits.  If set to failed, then only when
	       the program exit status is not zero.  The pane may be reactivated with the respawn-pane command.

       remain-on-exit-format string
	       Set the text shown at the bottom of exited panes when remain-on-exit is enabled.

       scroll-on-clear [on | off]
	       When the entire screen is cleared and this option is on, scroll the contents of	the  screen  into  history  before
	       clearing it.

       synchronize-panes [on | off]
	       Duplicate  input to all other panes in the same window where this option is also on (only for panes that are not in
	       any mode).

       window-active-style style
	       Set the pane style when it is the active pane.  For how to specify style, see the “STYLES” section.

       window-style style
	       Set the pane style.  For how to specify style, see the “STYLES” section.

HOOKS
       tmux allows commands to run on various triggers, called hooks.  Most tmux commands have an after hook and there are a  num‐
       ber of hooks not associated with commands.

       Hooks  are  stored  as  array options, members of the array are executed in order when the hook is triggered.  Like options
       different hooks may be global or belong to a session, window or pane.   Hooks  may  be  configured  with	 the  set-hook	or
       set-option commands and displayed with show-hooks or show-options -H.  The following two commands are equivalent:

	      set-hook -g pane-mode-changed[42] 'set -g status-left-style bg=red'
	      set-option -g pane-mode-changed[42] 'set -g status-left-style bg=red'

       Setting a hook without specifying an array index clears the hook and sets the first member of the array.

       A  command's after hook is run after it completes, except when the command is run as part of a hook itself.  They are named
       with an ‘after-’ prefix.	 For example, the following command adds a hook to select the  even-vertical  layout  after  every
       split-window:

	     set-hook -g after-split-window "selectl even-vertical"

       All  the notifications listed in the “CONTROL MODE” section are hooks (without any arguments), except %exit.  The following
       additional hooks are available:

       alert-activity	       Run when a window has activity.	See monitor-activity.

       alert-bell	       Run when a window has received a bell.  See monitor-bell.

       alert-silence	       Run when a window has been silent.  See monitor-silence.

       client-active	       Run when a client becomes the latest active client of its session.

       client-attached	       Run when a client is attached.

       client-detached	       Run when a client is detached

       client-focus-in	       Run when focus enters a client

       client-focus-out	       Run when focus exits a client

       client-resized	       Run when a client is resized.

       client-session-changed  Run when a client's attached session is changed.

       pane-died	       Run when the program running in a pane exits, but remain-on-exit is on so the pane has not closed.

       pane-exited	       Run when the program running in a pane exits.

       pane-focus-in	       Run when the focus enters a pane, if the focus-events option is on.

       pane-focus-out	       Run when the focus exits a pane, if the focus-events option is on.

       pane-set-clipboard      Run when the terminal clipboard is set using the xterm(1) escape sequence.

       session-created	       Run when a new session created.

       session-closed	       Run when a session closed.

       session-renamed	       Run when a session is renamed.

       window-linked	       Run when a window is linked into a session.

       window-renamed	       Run when a window is renamed.

       window-resized	       Run when a window is resized.  This may be after the client-resized hook is run.

       window-unlinked	       Run when a window is unlinked from a session.

       Hooks are managed with these commands:

       set-hook [-agpRuw] [-t target-pane] hook-name command
	       Without -R, sets (or with -u unsets) hook hook-name to command.	The flags are the same as for set-option.

	       With -R, run hook-name immediately.

       show-hooks [-gpw] [-t target-pane]
	       Shows hooks.  The flags are the same as for show-options.

MOUSE SUPPORT
       If the mouse option is on (the default is off), tmux allows mouse events to be bound as keys.  The name of each key is made
       up of a mouse event (such as ‘MouseUp1’) and a location suffix, one of the following:

	     Pane	      the contents of a pane
	     Border	      a pane border
	     Status	      the status line window list
	     StatusLeft	      the left part of the status line
	     StatusRight      the right part of the status line
	     StatusDefault    any other part of the status line

       The following mouse events are available:

	     WheelUp	   WheelDown
	     MouseDown1	   MouseUp1	 MouseDrag1   MouseDragEnd1
	     MouseDown2	   MouseUp2	 MouseDrag2   MouseDragEnd2
	     MouseDown3	   MouseUp3	 MouseDrag3   MouseDragEnd3
	     SecondClick1  SecondClick2	 SecondClick3
	     DoubleClick1  DoubleClick2	 DoubleClick3
	     TripleClick1  TripleClick2	 TripleClick3

       The ‘SecondClick’ events are fired for the second click of a double click, even if there may be a third	click  which  will
       fire ‘TripleClick’ instead of ‘DoubleClick’.

       Each should be suffixed with a location, for example ‘MouseDown1Status’.

       The special token ‘{mouse}’ or ‘=’ may be used as target-window or target-pane in commands bound to mouse key bindings.	It
       resolves to the window or pane over which the mouse event took place (for example, the window in the status line over which
       button  1  was released for a ‘MouseUp1Status’ binding, or the pane over which the wheel was scrolled for a ‘WheelDownPane’
       binding).

       The send-keys -M flag may be used to forward a mouse event to a pane.

       The default key bindings allow the mouse to be used to select and resize panes, to copy text and to change window using the
       status line.  These take effect if the mouse option is turned on.

FORMATS
       Certain commands accept the -F flag with a format argument.  This is a string which controls the output format of the  com‐
       mand.   Format variables are enclosed in ‘#{’ and ‘}’, for example ‘#{session_name}’.  The possible variables are listed in
       the table below, or the name of a tmux option may be used for an option's value.	 Some variables have a shorter alias  such
       as ‘#S’; ‘##’ is replaced by a single ‘#’, ‘#,’ by a ‘,’ and ‘#}’ by a ‘}’.

       Conditionals  are  available  by prefixing with ‘?’ and separating two alternatives with a comma; if the specified variable
       exists  and  is	not  zero,  the	 first	alternative  is	  chosen,   otherwise	the   second   is   used.    For   example
       ‘#{?session_attached,attached,not  attached}’  will include the string ‘attached’ if the session is attached and the string
       ‘not attached’ if it is unattached, or ‘#{?automatic-rename,yes,no}’ will include ‘yes’ if automatic-rename is enabled,	or
       ‘no’  if not.  Conditionals can be nested arbitrarily.  Inside a conditional, ‘,’ and ‘}’ must be escaped as ‘#,’ and ‘#}’,
       unless they are part of a ‘#{...}’ replacement.	For example:

	     #{?pane_in_mode,#[fg=white#,bg=red],#[fg=red#,bg=white]}#W .

       String comparisons may be expressed by prefixing two comma-separated alternatives by ‘==’, ‘!=’, ‘<’, ‘>’, ‘<=’ or ‘>=’ and
       a colon.	 For example ‘#{==:#{host},myhost}’ will be replaced by ‘1’ if running on ‘myhost’, otherwise by  ‘0’.	 ‘||’  and
       ‘&&’   evaluate	 to   true   if	  either   or	both   of   two	  comma-separated   alternatives  are  true,  for  example
       ‘#{||:#{pane_in_mode},#{alternate_on}}’.

       An ‘m’ specifies an fnmatch(3) or regular expression comparison.	 The first argument is the  pattern  and  the  second  the
       string  to compare.  An optional argument specifies flags: ‘r’ means the pattern is a regular expression instead of the de‐
       fault fnmatch(3) pattern, and ‘i’ means to ignore case.	For example: ‘#{m:*foo*,#{host}}’ or  ‘#{m/ri:^A,MYVAR}’.   A  ‘C’
       performs	 a  search for an fnmatch(3) pattern or regular expression in the pane content and evaluates to zero if not found,
       or a line number if found.  Like ‘m’, an ‘r’ flag means search for a regular expression and ‘i’ ignores case.  For example:
       ‘#{C/r:^Start}’

       Numeric operators may be performed by prefixing two comma-separated alternatives with an ‘e’ and an operator.  An  optional
       ‘f’  flag may be given after the operator to use floating point numbers, otherwise integers are used.  This may be followed
       by a number giving the number of decimal places to use for the result.  The available operators are: addition ‘+’, subtrac‐
       tion ‘-’, multiplication ‘*’, division ‘/’, modulus ‘m’ or ‘%’ (note that ‘%’ must be escaped as ‘%%’ in formats which  are
       also  expanded  by  strftime(3))	 and  numeric  comparison  operators  ‘==’,  ‘!=’,  ‘<’, ‘<=’, ‘>’ and ‘>=’.  For example,
       ‘#{e|*|f|4:5.5,3}’ multiplies 5.5 by 3 for a result with four decimal places and ‘#{e|%%:7,3}’ returns the modulus of 7 and
       3.  ‘a’ replaces a numeric argument by its ASCII equivalent, so ‘#{a:98}’ results in ‘b’.  ‘c’ replaces a  tmux	colour	by
       its six-digit hexadecimal RGB value.

       A limit may be placed on the length of the resultant string by prefixing it by an ‘=’, a number and a colon.  Positive num‐
       bers  count  from  the  start of the string and negative from the end, so ‘#{=5:pane_title}’ will include at most the first
       five characters of the pane title, or ‘#{=-5:pane_title}’ the last five characters.  A suffix or prefix may be given  as	 a
       second  argument	 -  if provided then it is appended or prepended to the string if the length has been trimmed, for example
       ‘#{=/5/...:pane_title}’ will append ‘...’ if the pane title is more than five characters.  Similarly, ‘p’ pads  the  string
       to  a given width, for example ‘#{p10:pane_title}’ will result in a width of at least 10 characters.  A positive width pads
       on the left, a negative on the right.  ‘n’ expands to the length of the variable and ‘w’ to its width when  displayed,  for
       example ‘#{n:window_name}’.

       Prefixing  a  time  variable  with  ‘t:’	 will  convert	it  to	a  string,  so if ‘#{window_activity}’ gives ‘1445765102’,
       ‘#{t:window_activity}’ gives ‘Sun Oct 25 09:25:02 2015’.	 Adding ‘p (’ ‘`t/p`’) will use shorter	 but  less  accurate  time
       format  for  times in the past.	A custom format may be given using an ‘f’ suffix (note that ‘%’ must be escaped as ‘%%’ if
       the  format   is	  separately   being   passed	through	  strftime(3),	 for   example	 in   the   status-left	  option):
       ‘#{t/f/%%H#:%%M:window_activity}’, see strftime(3).

       The  ‘b:’  and  ‘d:’  prefixes are basename(3) and dirname(3) of the variable respectively.  ‘q:’ will escape sh(1) special
       characters or with a ‘h’ suffix, escape hash characters (so ‘#’ becomes ‘##’).  ‘E:’ will expand the format twice, for  ex‐
       ample  ‘#{E:status-left}’  is  the result of expanding the content of the status-left option rather than the option itself.
       ‘T:’ is like ‘E:’ but also expands strftime(3) specifiers.  ‘S:’, ‘W:’, ‘P:’ or ‘L:’ will loop over each	 session,  window,
       pane  or	 client and insert the format once for each.  For windows and panes, two comma-separated formats may be given: the
       second is used for the current window or active pane.  For example, to get a list of  windows  formatted	 like  the  status
       line:

	     #{W:#{E:window-status-format} ,#{E:window-status-current-format} }

       ‘N:’ checks if a window (without any suffix or with the ‘w’ suffix) or a session (with the ‘s’ suffix) name exists, for ex‐
       ample ‘`N/w:foo`’ is replaced with 1 if a window named ‘foo’ exists.

       A prefix of the form ‘s/foo/bar/:’ will substitute ‘foo’ with ‘bar’ throughout.	The first argument may be an extended reg‐
       ular  expression	 and  a	 final	argument may be ‘i’ to ignore case, for example ‘s/a(.)/\1x/i:’ would change ‘abABab’ into
       ‘bxBxbx’.  A different delimiter character may also be used, to avoid collisions with literal slashes in the pattern.   For
       example, ‘s|foo/|bar/|:’ will substitute ‘foo/’ with ‘bar/’ throughout.

       In  addition,  the last line of a shell command's output may be inserted using ‘#()’.  For example, ‘#(uptime)’ will insert
       the system's uptime.  When constructing formats, tmux does not wait for ‘#()’ commands to finish; instead, the previous re‐
       sult from running the same command is used, or a placeholder if the command has not been run before.  If the command hasn't
       exited, the most recent line of output will be used, but the status line will not be updated more than once a second.  Com‐
       mands are executed using /bin/sh and with the tmux global environment set (see the “GLOBAL AND  SESSION	ENVIRONMENT”  sec‐
       tion).

       An    ‘l’    specifies	that   a   string   should   be	  interpreted	literally   and	  not	expanded.    For   example
       ‘#{l:#{?pane_in_mode,yes,no}}’ will be replaced by ‘#{?pane_in_mode,yes,no}’.

       The following variables are available, where appropriate:

       Variable name	      Alias    Replaced with
       active_window_index	       Index of active window in session
       alternate_on		       1 if pane is in alternate screen
       alternate_saved_x	       Saved cursor X in alternate screen
       alternate_saved_y	       Saved cursor Y in alternate screen
       buffer_created		       Time buffer created
       buffer_name		       Name of buffer
       buffer_sample		       Sample of start of buffer
       buffer_size		       Size of the specified buffer in bytes
       client_activity		       Time client last had activity
       client_cell_height	       Height of each client cell in pixels
       client_cell_width	       Width of each client cell in pixels
       client_control_mode	       1 if client is in control mode
       client_created		       Time client created
       client_discarded		       Bytes discarded when client behind
       client_flags		       List of client flags
       client_height		       Height of client
       client_key_table		       Current key table
       client_last_session	       Name of the client's last session
       client_name		       Name of client
       client_pid		       PID of client process
       client_prefix		       1 if prefix key has been pressed
       client_readonly		       1 if client is read-only
       client_session		       Name of the client's session
       client_termfeatures	       Terminal features of client, if any
       client_termname		       Terminal name of client
       client_termtype		       Terminal type of client, if available
       client_tty		       Pseudo terminal of client
       client_uid		       UID of client process
       client_user		       User of client process
       client_utf8		       1 if client supports UTF-8
       client_width		       Width of client
       client_written		       Bytes written to client
       command			       Name of command in use, if any
       command_list_alias	       Command alias if listing commands
       command_list_name	       Command name if listing commands
       command_list_usage	       Command usage if listing commands
       config_files		       List of configuration files loaded
       copy_cursor_line		       Line the cursor is on in copy mode
       copy_cursor_word		       Word under cursor in copy mode
       copy_cursor_x		       Cursor X position in copy mode
       copy_cursor_y		       Cursor Y position in copy mode
       current_file		       Current configuration file
       cursor_character		       Character at cursor in pane
       cursor_flag		       Pane cursor flag
       cursor_x			       Cursor X position in pane
       cursor_y			       Cursor Y position in pane
       history_bytes		       Number of bytes in window history
       history_limit		       Maximum window history lines
       history_size		       Size of history in lines
       hook			       Name of running hook, if any
       hook_client		       Name of client where hook was run, if any
       hook_pane		       ID of pane where hook was run, if any
       hook_session		       ID of session where hook was run, if any
       hook_session_name	       Name of session where hook was run, if any
       hook_window		       ID of window where hook was run, if any
       hook_window_name		       Name of window where hook was run, if any
       host		      #H       Hostname of local host
       host_short	      #h       Hostname of local host (no domain name)
       insert_flag		       Pane insert flag
       keypad_cursor_flag	       Pane keypad cursor flag
       keypad_flag		       Pane keypad flag
       last_window_index	       Index of last window in session
       line			       Line number in the list
       mouse_all_flag		       Pane mouse all flag
       mouse_any_flag		       Pane mouse any flag
       mouse_button_flag	       Pane mouse button flag
       mouse_hyperlink		       Hyperlink under mouse, if any
       mouse_line		       Line under mouse, if any
       mouse_sgr_flag		       Pane mouse SGR flag
       mouse_standard_flag	       Pane mouse standard flag
       mouse_status_line	       Status line on which mouse event took place
       mouse_status_range	       Range type or argument of mouse event on status line
       mouse_utf8_flag		       Pane mouse UTF-8 flag
       mouse_word		       Word under mouse, if any
       mouse_x			       Mouse X position, if any
       mouse_y			       Mouse Y position, if any
       next_session_id		       Unique session ID for next new session
       origin_flag		       Pane origin flag
       pane_active		       1 if active pane
       pane_at_bottom		       1 if pane is at the bottom of window
       pane_at_left		       1 if pane is at the left of window
       pane_at_right		       1 if pane is at the right of window
       pane_at_top		       1 if pane is at the top of window
       pane_bg			       Pane background colour
       pane_bottom		       Bottom of pane
       pane_current_command	       Current command if available
       pane_current_path	       Current path if available
       pane_dead		       1 if pane is dead
       pane_dead_signal		       Exit signal of process in dead pane
       pane_dead_status		       Exit status of process in dead pane
       pane_dead_time		       Exit time of process in dead pane
       pane_fg			       Pane foreground colour
       pane_format		       1 if format is for a pane
       pane_height		       Height of pane
       pane_id		      #D       Unique pane ID
       pane_in_mode		       1 if pane is in a mode
       pane_index	      #P       Index of pane
       pane_input_off		       1 if input to pane is disabled
       pane_last		       1 if last pane
       pane_left		       Left of pane
       pane_marked		       1 if this is the marked pane
       pane_marked_set		       1 if a marked pane is set
       pane_mode		       Name of pane mode, if any
       pane_path		       Path of pane (can be set by application)
       pane_pid			       PID of first process in pane
       pane_pipe		       1 if pane is being piped
       pane_right		       Right of pane
       pane_search_string	       Last search string in copy mode
       pane_start_command	       Command pane started with
       pane_start_path		       Path pane started with
       pane_synchronized	       1 if pane is synchronized
       pane_tabs		       Pane tab positions
       pane_title	      #T       Title of pane (can be set by application)
       pane_top			       Top of pane
       pane_tty			       Pseudo terminal of pane
       pane_unseen_changes	       1 if there were changes in pane while in mode
       pane_width		       Width of pane
       pid			       Server PID
       rectangle_toggle		       1 if rectangle selection is activated
       scroll_position		       Scroll position in copy mode
       scroll_region_lower	       Bottom of scroll region in pane
       scroll_region_upper	       Top of scroll region in pane
       search_match		       Search match if any
       search_present		       1 if search started in copy mode
       selection_active		       1 if selection started and changes with the cursor in copy mode
       selection_end_x		       X position of the end of the selection
       selection_end_y		       Y position of the end of the selection
       selection_present	       1 if selection started in copy mode
       selection_start_x	       X position of the start of the selection
       selection_start_y	       Y position of the start of the selection
       server_sessions		       Number of sessions
       session_activity		       Time of session last activity
       session_alerts		       List of window indexes with alerts
       session_attached		       Number of clients session is attached to
       session_attached_list	       List of clients session is attached to
       session_created		       Time session created
       session_format		       1 if format is for a session
       session_group		       Name of session group
       session_group_attached	       Number of clients sessions in group are attached to
       session_group_attached_list     List of clients sessions in group are attached to
       session_group_list	       List of sessions in group
       session_group_many_attached     1 if multiple clients attached to sessions in group
       session_group_size	       Size of session group
       session_grouped		       1 if session in a group
       session_id		       Unique session ID
       session_last_attached	       Time session last attached
       session_many_attached	       1 if multiple clients attached
       session_marked		       1 if this session contains the marked pane
       session_name	      #S       Name of session
       session_path		       Working directory of session
       session_stack		       Window indexes in most recent order
       session_windows		       Number of windows in session
       socket_path		       Server socket path
       start_time		       Server start time
       uid			       Server UID
       user			       Server user
       version			       Server version
       window_active		       1 if window active
       window_active_clients	       Number of clients viewing this window
       window_active_clients_list      List of clients viewing this window
       window_active_sessions	       Number of sessions on which this window is active
       window_active_sessions_list     List of sessions on which this window is active
       window_activity		       Time of window last activity
       window_activity_flag	       1 if window has activity
       window_bell_flag		       1 if window has bell
       window_bigger		       1 if window is larger than client
       window_cell_height	       Height of each cell in pixels
       window_cell_width	       Width of each cell in pixels
       window_end_flag		       1 if window has the highest index
       window_flags	      #F       Window flags with # escaped as ##
       window_format		       1 if format is for a window
       window_height		       Height of window
       window_id		       Unique window ID
       window_index	      #I       Index of window
       window_last_flag		       1 if window is the last used
       window_layout		       Window layout description, ignoring zoomed window panes
       window_linked		       1 if window is linked across sessions
       window_linked_sessions	       Number of sessions this window is linked to
       window_linked_sessions_list     List of sessions this window is linked to
       window_marked_flag	       1 if window contains the marked pane
       window_name	      #W       Name of window
       window_offset_x		       X offset into window if larger than client
       window_offset_y		       Y offset into window if larger than client
       window_panes		       Number of panes in window
       window_raw_flags		       Window flags with nothing escaped
       window_silence_flag	       1 if window has silence alert
       window_stack_index	       Index in session most recent stack
       window_start_flag	       1 if window has the lowest index
       window_visible_layout	       Window layout description, respecting zoomed window panes
       window_width		       Width of window
       window_zoomed_flag	       1 if window is zoomed
       wrap_flag		       Pane wrap flag

STYLES
       tmux offers various options to specify the colour and attributes of aspects of the interface, for example status-style  for
       the  status  line.  In addition, embedded styles may be specified in format options, such as status-left, by enclosing them
       in ‘#[’ and ‘]’.

       A style may be the single term ‘default’ to specify the	default	 style	(which	may  come  from	 an  option,  for  example
       status-style in the status line) or a space or comma separated list of the following:

       fg=colour
	       Set  the	 foreground  colour.  The colour is one of: black, red, green, yellow, blue, magenta, cyan, white; if sup‐
	       ported the bright variants brightred, brightgreen, brightyellow; colour0 to  colour255  from  the  256-colour  set;
	       default	for  the  default  colour;  terminal  for the terminal default colour; or a hexadecimal RGB string such as
	       ‘#ffffff’.

       bg=colour
	       Set the background colour.

       us=colour
	       Set the underscore colour.

       none    Set no attributes (turn off any active attributes).

       acs, bright (or bold), dim, underscore,	blink,	reverse,  hidden,  italics,  overline,	strikethrough,	double-underscore,
	       curly-underscore, dotted-underscore, dashed-underscore
	       Set an attribute.  Any of the attributes may be prefixed with ‘no’ to unset.  acs is the terminal alternate charac‐
	       ter set.

       align=left (or noalign), align=centre, align=right
	       Align text to the left, centre or right of the available space if appropriate.

       fill=colour
	       Fill the available space with a background colour if appropriate.

       list=on, list=focus, list=left-marker, list=right-marker, nolist
	       Mark the position of the various window list components in the status-format option: list=on marks the start of the
	       list; list=focus is the part of the list that should be kept in focus if the entire list won't fit in the available
	       space  (typically the current window); list=left-marker and list=right-marker mark the text to be used to mark that
	       text has been trimmed from the left or right of the list if there is not enough space.

       push-default, pop-default
	       Store the current colours and attributes as the default or reset to the previous default.  A  push-default  affects
	       any  subsequent use of the default term until a pop-default.  Only one default may be pushed (each push-default re‐
	       places the previous saved default).

       range=left, range=right, range=session|X, range=window|X, range=pane|X, range=user|X, norange
	       Mark a range for mouse events in the status-format option.   When  a  mouse  event  occurs  in  the  range=left	or
	       range=right range, the ‘StatusLeft’ and ‘StatusRight’ key bindings are triggered.

	       range=session|X,	 range=window|X	 and  range=pane|X  are	 ranges	 for a session, window or pane.	 These trigger the
	       ‘Status’ mouse key with the target session, window or pane given by the ‘X’ argument.  ‘X’ is a session ID,  window
	       index  in  the  current	session	 or  a	pane ID.  For these, the mouse_status_range format variable will be set to
	       ‘session’, ‘window’ or ‘pane’.

	       range=user|X is a user-defined range; it triggers the ‘Status’ mouse key.  The argument ‘X’ will	 be  available	in
	       the mouse_status_range format variable.	‘X’ must be at most 15 bytes in length.

       Examples are:

	     fg=yellow bold underscore blink
	     bg=black,fg=default,noreverse

NAMES AND TITLES
       tmux distinguishes between names and titles.  Windows and sessions have names, which may be used to specify them in targets
       and  are	 displayed  in	the  status line and various lists: the name is the tmux identifier for a window or session.  Only
       panes have titles.  A pane's title is typically set by the program running inside the pane using an escape  sequence  (like
       it  would set the xterm(1) window title in X(7)).  Windows themselves do not have titles - a window's title is the title of
       its active pane.	 tmux itself may set the title of the terminal in which the client is running, see the set-titles option.

       A session's name is set with the new-session and rename-session commands.  A window's name is set with one of:

       1.      A command argument (such as -n for new-window or new-session).

       2.      An escape sequence (if the allow-rename option is turned on):

		     $ printf '\033kWINDOW_NAME\033\\'

       3.      Automatic  renaming,  which  sets  the  name  to	 the  active  command  in  the	window's  active  pane.	  See  the
	       automatic-rename option.

       When  a pane is first created, its title is the hostname.  A pane's title can be set via the title setting escape sequence,
       for example:

	     $ printf '\033]2;My Title\033\\'

       It can also be modified with the select-pane -T command.

GLOBAL AND SESSION ENVIRONMENT
       When the server is started, tmux copies the environment into the global	environment;  in  addition,  each  session  has	 a
       session	environment.   When  a window is created, the session and global environments are merged.  If a variable exists in
       both, the value from the session environment is used.  The result is the initial environment passed to the new process.

       The update-environment session option may be used to update the session environment from the client when a new  session	is
       created	or an old reattached.  tmux also initialises the TMUX variable with some internal information to allow commands to
       be executed from inside, and the TERM variable with the correct terminal setting of ‘screen’.

       Variables in both session and global environments may be marked as hidden.  Hidden variables are not passed into the  envi‐
       ronment of new processes and instead can only be used by tmux itself (for example in formats, see the “FORMATS” section).

       Commands to alter and view the environment are:

       set-environment [-Fhgru] [-t target-session] name [value]
		     (alias: setenv)
	       Set  or	unset an environment variable.	If -g is used, the change is made in the global environment; otherwise, it
	       is applied to the session environment for target-session.  If -F is present, then value is expanded  as	a  format.
	       The  -u	flag unsets a variable.	 -r indicates the variable is to be removed from the environment before starting a
	       new process.  -h marks the variable as hidden.

       show-environment [-hgs] [-t target-session] [variable]
		     (alias: showenv)
	       Display the environment for target-session or the global environment with -g.  If variable is  omitted,	all  vari‐
	       ables  are shown.  Variables removed from the environment are prefixed with ‘-’.	 If -s is used, the output is for‐
	       matted as a set of Bourne shell commands.  -h shows hidden variables (omitted by default).

STATUS LINE
       tmux includes an optional status line which is displayed in the bottom line of each terminal.

       By default, the status line is enabled and one line in height (it may be disabled or made multiple lines	 with  the  status
       session	option) and contains, from left-to-right: the name of the current session in square brackets; the window list; the
       title of the active pane in double quotes; and the time and date.

       Each line of the status line is configured with the status-format option.  The default is made of three parts: configurable
       left and right sections (which may contain dynamic content such as the time  or	output	from  a	 shell	command,  see  the
       status-left,  status-left-length,  status-right, and status-right-length options below), and a central window list.  By de‐
       fault, the window list shows the index, name and (if any) flag of the windows present in the current session  in	 ascending
       numerical order.	 It may be customised with the window-status-format and window-status-current-format options.  The flag is
       one of the following symbols appended to the window name:

	     Symbol    Meaning
	     *	       Denotes the current window.
	     -	       Marks the last window (previously selected).
	     #	       Window activity is monitored and activity has been detected.
	     !	       Window bells are monitored and a bell has occurred in the window.
	     ~	       The window has been silent for the monitor-silence interval.
	     M	       The window contains the marked pane.
	     Z	       The window's active pane is zoomed.

       The  #  symbol  relates	to the monitor-activity window option.	The window name is printed in inverted colours if an alert
       (bell, activity or silence) is present.

       The colour and attributes of the status line may be configured, the entire status line using the status-style  session  op‐
       tion and individual windows using the window-status-style window option.

       The  status  line  is  automatically  refreshed	at  interval  if  it  has changed, the interval may be controlled with the
       status-interval session option.

       Commands related to the status line are as follows:

       clear-prompt-history [-T prompt-type]
		     (alias: clearphist)
	       Clear status prompt history for prompt type prompt-type.	 If -T is omitted, then clear history for all types.   See
	       command-prompt for possible values for prompt-type.

       command-prompt [-1bFikN] [-I inputs] [-p prompts] [-t target-client] [-T prompt-type] [template]
	       Open the command prompt in a client.  This may be used from inside tmux to execute commands interactively.

	       If template is specified, it is used as the command.  With -F, template is expanded as a format.

	       If  present, -I is a comma-separated list of the initial text for each prompt.  If -p is given, prompts is a comma-
	       separated list of prompts which are displayed in order; otherwise a single prompt is  displayed,	 constructed  from
	       template if it is present, or ‘:’ if not.

	       Before the command is executed, the first occurrence of the string ‘%%’ and all occurrences of ‘%1’ are replaced by
	       the  response to the first prompt, all ‘%2’ are replaced with the response to the second prompt, and so on for fur‐
	       ther prompts.  Up to nine prompt responses may be replaced (‘%1’ to ‘%9’).  ‘%%%’ is like ‘%%’  but  any	 quotation
	       marks are escaped.

	       -1  makes the prompt only accept one key press, in this case the resulting input is a single character.	-k is like
	       -1 but the key press is translated to a key name.  -N makes the prompt only accept numeric key  presses.	  -i  exe‐
	       cutes the command every time the prompt input changes instead of when the user exits the command prompt.

	       -T  tells  tmux	the  prompt type.  This affects what completions are offered when Tab is pressed.  Available types
	       are: ‘command’, ‘search’, ‘target’ and ‘window-target’.

	       The following keys have a special meaning in the command prompt, depending on the value of the status-keys option:

		     Function				  vi	    emacs
		     Cancel command prompt		  q	    Escape
		     Delete from cursor to start of word	    C-w
		     Delete entire command		  d	    C-u
		     Delete from cursor to end		  D	    C-k
		     Execute command			  Enter	    Enter
		     Get next command from history		    Down
		     Get previous command from history		    Up
		     Insert top paste buffer		  p	    C-y
		     Look for completions		  Tab	    Tab
		     Move cursor left			  h	    Left
		     Move cursor right			  l	    Right
		     Move cursor to end			  $	    C-e
		     Move cursor to next word		  w	    M-f
		     Move cursor to previous word	  b	    M-b
		     Move cursor to start		  0	    C-a
		     Transpose characters			    C-t

	       With -b, the prompt is shown in the background and the invoking client does not exit until it is dismissed.

       confirm-before [-by] [-c confirm-key] [-p prompt] [-t target-client] command
		     (alias: confirm)
	       Ask for confirmation before executing command.  If -p is given, prompt is the prompt to display; otherwise a prompt
	       is constructed from command.  It may contain the special character sequences supported by the  status-left  option.
	       With  -b,  the  prompt  is shown in the background and the invoking client does not exit until it is dismissed.	-y
	       changes the default behaviour (if Enter alone is pressed) of the prompt to run the command.  -c changes the confir‐
	       mation key to confirm-key; the default is ‘y’.

       display-menu  [-O]  [-b	border-lines]  [-c  target-client]  [-C	 starting-choice]  [-H	selected-style]	 [-s  style]   [-S
	       border-style] [-t target-pane] [-T title] [-x position] [-y position] name key command [argument ...]
		     (alias: menu)
	       Display a menu on target-client.	 target-pane gives the target for any commands run from the menu.

	       A  menu	is  passed as a series of arguments: first the menu item name, second the key shortcut (or empty for none)
	       and third the command to run when the menu item is chosen.  The name and command are formats, see the “FORMATS” and
	       “STYLES” sections.  If the name begins with a hyphen (-), then the item is disabled (shown dim) and may not be cho‐
	       sen.  The name may be empty for a separator line, in which case both the key and command should be omitted.

	       -b sets the type of characters used for drawing menu borders.   See  popup-border-lines	for  possible  values  for
	       border-lines.

	       -H sets the style for the selected menu item (see “STYLES”).

	       -s sets the style for the menu and -S sets the style for the menu border (see “STYLES”).

	       -T is a format for the menu title (see “FORMATS”).

	       -C sets the menu item selected by default, if the menu is not bound to a mouse key binding.

	       -x  and -y give the position of the menu.  Both may be a row or column number, or one of the following special val‐
	       ues:

		     Value    Flag    Meaning
		     C	      Both    The centre of the terminal
		     R	      -x      The right side of the terminal
		     P	      Both    The bottom left of the pane
		     M	      Both    The mouse position
		     W	      Both    The window position on the status line
		     S	      -y      The line above or below the status line

	       Or a format, which is expanded including the following additional variables:

		     Variable name		   Replaced with
		     popup_centre_x		   Centered in the client
		     popup_centre_y		   Centered in the client
		     popup_height		   Height of menu or popup
		     popup_mouse_bottom		   Bottom of at the mouse
		     popup_mouse_centre_x	   Horizontal centre at the mouse
		     popup_mouse_centre_y	   Vertical centre at the mouse
		     popup_mouse_top		   Top at the mouse
		     popup_mouse_x		   Mouse X position
		     popup_mouse_y		   Mouse Y position
		     popup_pane_bottom		   Bottom of the pane
		     popup_pane_left		   Left of the pane
		     popup_pane_right		   Right of the pane
		     popup_pane_top		   Top of the pane
		     popup_status_line_y	   Above or below the status line
		     popup_width		   Width of menu or popup
		     popup_window_status_line_x	   At the window position in status line
		     popup_window_status_line_y	   At the status line showing the window

	       Each menu consists of items followed by a key shortcut shown in brackets.  If the menu is too large to fit  on  the
	       terminal,  it is not displayed.	Pressing the key shortcut chooses the corresponding item.  If the mouse is enabled
	       and the menu is opened from a mouse key binding, releasing the mouse button with an item selected chooses that item
	       and releasing the mouse button without an item selected closes the menu.	 -O changes this  behaviour  so	 that  the
	       menu  does  not close when the mouse button is released without an item selected the menu is not closed and a mouse
	       button must be clicked to choose an item.

	       The following keys are also available:

		     Key    Function
		     Enter  Choose selected item
		     Up	    Select previous item
		     Down   Select next item
		     q	    Exit menu

       display-message [-aIlNpv] [-c target-client] [-d delay] [-t target-pane] [message]
		     (alias: display)
	       Display a message.  If -p is given, the output is printed to stdout, otherwise it is displayed in the target-client
	       status line for up to delay milliseconds.  If delay is not given, the display-time option is used; a delay of  zero
	       waits  for  a key press.	 ‘N’ ignores key presses and closes only after the delay expires.  If -l is given, message
	       is printed unchanged.  Otherwise, the format of message is described in the “FORMATS” section; information is taken
	       from target-pane if -t is given, otherwise the active pane.

	       -v prints verbose logging as the format is parsed and -a lists the format variables and their values.

	       -I forwards any input read from stdin to the empty pane given by target-pane.

       display-popup  [-BCE]  [-b  border-lines]  [-c  target-client]  [-d  start-directory]  [-e  environment]	 [-h  height]  [-s
	       border-style] [-S style] [-t target-pane] [-T title] [-w width] [-x position] [-y position] [shell-command]
		     (alias: popup)
	       Display	a  popup  running  shell-command on target-client.  A popup is a rectangular box drawn over the top of any
	       panes.  Panes are not updated while a popup is present.

	       -E closes the popup automatically when shell-command exits.  Two -E closes the popup only if  shell-command  exited
	       with success.

	       -x  and	-y  give the position of the popup, they have the same meaning as for the display-menu command.	 -w and -h
	       give the width and height - both may be a percentage (followed by ‘%’).	If omitted, half of the terminal  size	is
	       used.

	       -B does not surround the popup by a border.

	       -b  sets	 the  type  of characters used for drawing popup borders.  When -B is specified, the -b option is ignored.
	       See popup-border-lines for possible values for border-lines.

	       -s sets the style for the popup and -S sets the style for the popup border (see “STYLES”).

	       -e takes the form ‘VARIABLE=value’ and sets an environment variable for the popup; it  may  be  specified  multiple
	       times.

	       -T is a format for the popup title (see “FORMATS”).

	       The -C flag closes any popup on the client.

       show-prompt-history [-T prompt-type]
		     (alias: showphist)
	       Display status prompt history for prompt type prompt-type.  If -T is omitted, then show history for all types.  See
	       command-prompt for possible values for prompt-type.

BUFFERS
       tmux  maintains	a  set	of  named paste buffers.  Each buffer may be either explicitly or automatically named.	Explicitly
       named buffers are named when created with the set-buffer or load-buffer commands, or by	renaming  an  automatically  named
       buffer  with  set-buffer	 -n.   Automatically  named buffers are given a name such as ‘buffer0001’, ‘buffer0002’ and so on.
       When the buffer-limit option is reached, the oldest automatically named buffer is deleted.  Explicitly  named  buffers  are
       not subject to buffer-limit and may be deleted with the delete-buffer command.

       Buffers	may  be	 added	using  copy-mode  or  the  set-buffer and load-buffer commands, and pasted into a window using the
       paste-buffer command.  If a buffer command is used and no buffer is specified, the most recently added automatically  named
       buffer is assumed.

       A  configurable	history buffer is also maintained for each window.  By default, up to 2000 lines are kept; this can be al‐
       tered with the history-limit option (see the set-option command above).

       The buffer commands are as follows:

       choose-buffer [-NZr] [-F format] [-f filter] [-K key-format] [-O sort-order] [-t target-pane] [template]
	       Put a pane into buffer mode, where a buffer may be chosen interactively from a list.  Each buffer is shown  on  one
	       line.   A shortcut key is shown on the left in brackets allowing for immediate choice, or the list may be navigated
	       and an item chosen or otherwise manipulated using the keys below.  -Z zooms the pane.  The following  keys  may	be
	       used in buffer mode:

		     Key    Function
		     Enter  Paste selected buffer
		     Up	    Select previous buffer
		     Down   Select next buffer
		     C-s    Search by name or content
		     n	    Repeat last search
		     t	    Toggle if buffer is tagged
		     T	    Tag no buffers
		     C-t    Tag all buffers
		     p	    Paste selected buffer
		     P	    Paste tagged buffers
		     d	    Delete selected buffer
		     D	    Delete tagged buffers
		     e	    Open the buffer in an editor
		     f	    Enter a format to filter items
		     O	    Change sort field
		     r	    Reverse sort order
		     v	    Toggle preview
		     q	    Exit mode

	       After a buffer is chosen, ‘%%’ is replaced by the buffer name in template and the result executed as a command.	If
	       template is not given, "paste-buffer -b '%%'" is used.

	       -O  specifies  the initial sort field: one of ‘time’ (creation), ‘name’ or ‘size’.  -r reverses the sort order.	-f
	       specifies an initial filter: the filter is a format - if it evaluates to zero, the item in the list is  not  shown,
	       otherwise  it  is shown.	 If a filter would lead to an empty list, it is ignored.  -F specifies the format for each
	       item in the list and -K a format for each shortcut key; both are evaluated once for each line.  -N  starts  without
	       the preview.  This command works only if at least one client is attached.

       clear-history [-H] [-t target-pane]
		     (alias: clearhist)
	       Remove and free the history for the specified pane.  -H also removes all hyperlinks.

       delete-buffer [-b buffer-name]
		     (alias: deleteb)
	       Delete the buffer named buffer-name, or the most recently added automatically named buffer if not specified.

       list-buffers [-F format] [-f filter]
		     (alias: lsb)
	       List  the global buffers.  -F specifies the format of each line and -f a filter.	 Only buffers for which the filter
	       is true are shown.  See the “FORMATS” section.

       load-buffer [-w] [-b buffer-name] [-t target-client] path
		     (alias: loadb)
	       Load the contents of the specified paste buffer from path.  If -w is given, the buffer is also sent  to	the  clip‐
	       board for target-client using the xterm(1) escape sequence, if possible.

       paste-buffer [-dpr] [-b buffer-name] [-s separator] [-t target-pane]
		     (alias: pasteb)
	       Insert the contents of a paste buffer into the specified pane.  If not specified, paste into the current one.  With
	       -d,  also delete the paste buffer.  When output, any linefeed (LF) characters in the paste buffer are replaced with
	       a separator, by default carriage return (CR).  A custom separator may be specified using the -s flag.  The -r  flag
	       means  to do no replacement (equivalent to a separator of LF).  If -p is specified, paste bracket control codes are
	       inserted around the buffer if the application has requested bracketed paste mode.

       save-buffer [-a] [-b buffer-name] path
		     (alias: saveb)
	       Save the contents of the specified paste buffer to path.	 The -a option appends	to  rather  than  overwriting  the
	       file.

       set-buffer [-aw] [-b buffer-name] [-t target-client] [-n new-buffer-name] data
		     (alias: setb)
	       Set  the	 contents  of  the specified buffer to data.  If -w is given, the buffer is also sent to the clipboard for
	       target-client using the xterm(1) escape sequence, if possible.  The -a option appends to	 rather	 than  overwriting
	       the buffer.  The -n option renames the buffer to new-buffer-name.

       show-buffer [-b buffer-name]
		     (alias: showb)
	       Display the contents of the specified buffer.

MISCELLANEOUS
       Miscellaneous commands are as follows:

       clock-mode [-t target-pane]
	       Display a large clock.

       if-shell [-bF] [-t target-pane] shell-command command [command]
		     (alias: if)
	       Execute the first command if shell-command (run with /bin/sh) returns success or the second command otherwise.  Be‐
	       fore  being executed, shell-command is expanded using the rules specified in the “FORMATS” section, including those
	       relevant to target-pane.	 With -b, shell-command is run in the background.

	       If -F is given, shell-command is not executed but considered success if neither empty nor zero (after  formats  are
	       expanded).

       lock-server
		     (alias: lock)
	       Lock each client individually by running the command specified by the lock-command option.

       run-shell [-bC] [-c start-directory] [-d delay] [-t target-pane] [shell-command]
		     (alias: run)
	       Execute	shell-command  using /bin/sh or (with -C) a tmux command in the background without creating a window.  Be‐
	       fore being executed, shell-command is expanded using the rules specified in the “FORMATS” section.   With  -b,  the
	       command	is  run	 in  the background.  -d waits for delay seconds before starting the command.  If -c is given, the
	       current working directory is set to start-directory.  If -C is not given, any output to stdout is displayed in view
	       mode (in the pane specified by -t or the current pane if omitted) after	the  command  finishes.	  If  the  command
	       fails, the exit status is also displayed.

       wait-for [-L | -S | -U] channel
		     (alias: wait)
	       When  used  without  options, prevents the client from exiting until woken using wait-for -S with the same channel.
	       When -L is used, the channel is locked and any clients that try to lock the same channel are made to wait until the
	       channel is unlocked with wait-for -U.

EXIT MESSAGES
       When a tmux client detaches, it prints a message.  This may be one of:

       detached (from session ...)
	       The client was detached normally.

       detached and SIGHUP
	       The client was detached and its parent sent the SIGHUP signal (for example with detach-client -P).

       lost tty
	       The client's tty(4) or pty(4) was unexpectedly destroyed.

       terminated
	       The client was killed with SIGTERM.

       too far behind
	       The client is in control mode and became unable to keep up with the data from tmux.

       exited  The server exited when it had no sessions.

       server exited
	       The server exited when it received SIGTERM.

       server exited unexpectedly
	       The server crashed or otherwise exited without telling the client the reason.

TERMINFO EXTENSIONS
       tmux understands some unofficial extensions to terminfo(5).  It is not normally necessary to set	 these	manually,  instead
       the terminal-features option should be used.

       AX      An existing extension that tells tmux the terminal supports default colours.

       Bidi    Tell tmux that the terminal supports the VTE bidirectional text extensions.

       Cs, Cr  Set the cursor colour.  The first takes a single string argument and is used to set the colour; the second takes no
	       arguments and restores the default cursor colour.  If set, a sequence such as this may be used to change the cursor
	       colour from inside tmux:

		     $ printf '\033]12;red\033\\'

	       The colour is an X(7) colour, see XParseColor(3).

       Cmg, Clmg, Dsmg, Enmg
	       Set,  clear,  disable  or  enable DECSLRM margins.  These are set automatically if the terminal reports it is VT420
	       compatible.

       Dsbp, Enbp
	       Disable and enable bracketed paste.  These are set automatically if the XT capability is present.

       Dseks, Eneks
	       Disable and enable extended keys.

       Dsfcs, Enfcs
	       Disable and enable focus reporting.  These are set automatically if the XT capability is present.

       Hls     Set or clear a hyperlink annotation.

       Nobr    Tell tmux that the terminal does not use bright colors for bold display.

       Rect    Tell tmux that the terminal supports rectangle operations.

       Smol    Enable the overline attribute.

       Smulx   Set a styled underscore.	 The single parameter is one of: 0 for no underscore, 1 for normal underscore, 2 for  dou‐
	       ble underscore, 3 for curly underscore, 4 for dotted underscore and 5 for dashed underscore.

       Setulc, Setulc1, ol
	       Set  the underscore colour or reset to the default.  Setulc is for RGB colours and Setulc1 for ANSI or 256 colours.
	       The Setulc argument is (red * 65536) + (green * 256) + blue where each is between 0 and 255.

       Ss, Se  Set or reset the cursor style.  If set, a sequence such as this may be used to change the cursor to an underline:

		     $ printf '\033[4 q'

	       If Se is not set, Ss with argument 0 will be used to reset the cursor style instead.

       Swd     Set the opening sequence for the working directory notification.	 The sequence is terminated using the standard fsl
	       capability.

       Sxl     Indicates that the terminal supports SIXEL.

       Sync    Start (parameter is 1) or end (parameter is 2) a synchronized update.

       Tc      Indicate that the terminal supports the ‘direct colour’ RGB escape sequence (for example, \e[38;2;255;255;255m).

	       If supported, this is used for the initialize colour escape sequence (which may be enabled by  adding  the  ‘initc’
	       and ‘ccc’ capabilities to the tmux terminfo(5) entry).

	       This is equivalent to the RGB terminfo(5) capability.

       Ms      Store  the current buffer in the host terminal's selection (clipboard).	See the set-clipboard option above and the
	       xterm(1) man page.

       XT      This is an existing extension capability that tmux uses to mean that the terminal supports the xterm(1)	title  set
	       sequences and to automatically set some of the capabilities above.

CONTROL MODE
       tmux  offers  a	textual	 interface  called control mode.  This allows applications to communicate with tmux using a simple
       text-only protocol.

       In control mode, a client sends tmux commands or command sequences terminated by newlines on standard input.  Each  command
       will  produce  one  block  of  output on standard output.  An output block consists of a %begin line followed by the output
       (which may be empty).  The output block ends with a %end or %error.  %begin and matching %end or %error	have  three  argu‐
       ments: an integer time (as seconds from epoch), command number and flags (currently not used).  For example:

	     %begin 1363006971 2 1
	     0: ksh* (1 panes) [80x24] [layout b25f,80x24,0,0,2] @2 (active)
	     %end 1363006971 2 1

       The refresh-client -C command may be used to set the size of a client in control mode.

       In control mode, tmux outputs notifications.  A notification will never occur inside an output block.

       The following notifications are defined:

       %client-detached client
	       The client has detached.

       %client-session-changed client session-id name
	       The client is now attached to the session with ID session-id, which is named name.

       %config-error error
	       An error has happened in a configuration file.

       %continue pane-id
	       The pane has been continued after being paused (if the pause-after flag is set, see refresh-client -A).

       %exit [reason]
	       The  tmux client is exiting immediately, either because it is not attached to any session or an error occurred.	If
	       present, reason describes why the client exited.

       %extended-output pane-id age ... : value
	       New form of %output sent when the pause-after flag is set.  age is the time in  milliseconds  for  which	 tmux  had
	       buffered	 the  output  before  it  was sent.  Any subsequent arguments up until a single ‘:’ are for future use and
	       should be ignored.

       %layout-change window-id window-layout window-visible-layout window-flags
	       The layout of a window with ID window-id changed.  The new layout is window-layout.  The window's visible layout is
	       window-visible-layout and the window flags are window-flags.

       %message message
	       A message sent with the display-message command.

       %output pane-id value
	       A window pane produced output.  value escapes non-printable characters and backslash as octal \xxx.

       %pane-mode-changed pane-id
	       The pane with ID pane-id has changed mode.

       %paste-buffer-changed name
	       Paste buffer name has been changed.

       %paste-buffer-deleted name
	       Paste buffer name has been deleted.

       %pause pane-id
	       The pane has been paused (if the pause-after flag is set).

       %session-changed session-id name
	       The client is now attached to the session with ID session-id, which is named name.

       %session-renamed name
	       The current session was renamed to name.

       %session-window-changed session-id window-id
	       The session with ID session-id changed its active window to the window with ID window-id.

       %sessions-changed
	       A session was created or destroyed.

       %subscription-changed name session-id window-id window-index pane-id ... : value
	       The value of the format associated with subscription name has changed to value.	See refresh-client -B.	Any  argu‐
	       ments after pane-id up until a single ‘:’ are for future use and should be ignored.

       %unlinked-window-add window-id
	       The window with ID window-id was created but is not linked to the current session.

       %unlinked-window-close window-id
	       The window with ID window-id, which is not linked to the current session, was closed.

       %unlinked-window-renamed window-id
	       The window with ID window-id, which is not linked to the current session, was renamed.

       %window-add window-id
	       The window with ID window-id was linked to the current session.

       %window-close window-id
	       The window with ID window-id closed.

       %window-pane-changed window-id pane-id
	       The active pane in the window with ID window-id changed to the pane with ID pane-id.

       %window-renamed window-id name
	       The window with ID window-id was renamed to name.

ENVIRONMENT
       When tmux is started, it inspects the following environment variables:

       EDITOR	 If  the  command  specified in this variable contains the string ‘vi’ and VISUAL is unset, use vi-style key bind‐
		 ings.	Overridden by the mode-keys and status-keys options.

       HOME	 The user's login directory.  If unset, the passwd(5) database is consulted.

       LC_CTYPE	 The character encoding locale(1).  It is used for two separate purposes.  For output to the  terminal,	 UTF-8	is
		 used  if  the -u option is given or if LC_CTYPE contains "UTF-8" or "UTF8".  Otherwise, only ASCII characters are
		 written and non-ASCII characters are replaced with underscores (‘_’).	For input, tmux always runs with  a  UTF-8
		 locale.   If en_US.UTF-8 is provided by the operating system, it is used and LC_CTYPE is ignored for input.  Oth‐
		 erwise, LC_CTYPE tells tmux what the UTF-8 locale is called on the current system.  If the  locale  specified	by
		 LC_CTYPE is not available or is not a UTF-8 locale, tmux exits with an error message.

       LC_TIME	 The date and time format locale(1).  It is used for locale-dependent strftime(3) format specifiers.

       PWD	 The  current  working	directory to be set in the global environment.	This may be useful if it contains symbolic
		 links.	 If the value of the variable does not match the current working directory, the variable  is  ignored  and
		 the result of getcwd(3) is used instead.

       SHELL	 The absolute path to the default shell for new windows.  See the default-shell option for details.

       TMUX_TMPDIR
		 The parent directory of the directory containing the server sockets.  See the -L option for details.

       VISUAL	 If the command specified in this variable contains the string ‘vi’, use vi-style key bindings.	 Overridden by the
		 mode-keys and status-keys options.

FILES
       ~/.tmux.conf
       $XDG_CONFIG_HOME/tmux/tmux.conf
       ~/.config/tmux/tmux.conf
			  Default tmux configuration file.
       /etc/tmux.conf	  System-wide configuration file.

EXAMPLES
       To create a new tmux session running vi(1):

	     $ tmux new-session vi

       Most commands have a shorter form, known as an alias.  For new-session, this is new:

	     $ tmux new vi

       Alternatively, the shortest unambiguous form of a command is accepted.  If there are several options, they are listed:

	     $ tmux n
	     ambiguous command: n, could be: new-session, new-window, next-window

       Within  an  active session, a new window may be created by typing ‘C-b c’ (Ctrl followed by the ‘b’ key followed by the ‘c’
       key).

       Windows may be navigated with: ‘C-b 0’ (to select window 0), ‘C-b 1’ (to select window 1), and so on; ‘C-b n’ to select the
       next window; and ‘C-b p’ to select the previous window.

       A session may be detached using ‘C-b d’ (or by an external event such as ssh(1) disconnection) and reattached with:

	     $ tmux attach-session

       Typing ‘C-b ?’ lists the current key bindings in the current window; up and down may be used to navigate the list or ‘q’ to
       exit from it.

       Commands to be run when the tmux server is started may be placed in the ~/.tmux.conf configuration file.	  Common  examples
       include:

       Changing the default prefix key:

	     set-option -g prefix C-a
	     unbind-key C-b
	     bind-key C-a send-prefix

       Turning the status line off, or changing its colour:

	     set-option -g status off
	     set-option -g status-style bg=blue

       Setting other options, such as the default command, or locking after 30 minutes of inactivity:

	     set-option -g default-command "exec /bin/ksh"
	     set-option -g lock-after-time 1800

       Creating new key bindings:

	     bind-key b set-option status
	     bind-key / command-prompt "split-window 'exec man %%'"
	     bind-key S command-prompt "new-window -n %1 'ssh %1'"

SEE ALSO
       pty(4)

AUTHORS
       Nicholas Marriott <nicholas.marriott@gmail.com>

Debian							    $Mdocdate$							   TMUX(1)
```

# . manual of man itself

```
MAN(1)							Manual pager utils						    MAN(1)

NAME
       man - an interface to the system reference manuals

SYNOPSIS
       man [man options] [[section] page ...] ...
       man -k [apropos options] regexp ...
       man -K [man options] [section] term ...
       man -f [whatis options] page ...
       man -l [man options] file ...
       man -w|-W [man options] page ...

DESCRIPTION
       man  is the system's manual pager.  Each page argument given to man is normally the name of a program, utility or function.
       The manual page associated with each of these arguments is then found and displayed.  A section, if provided,  will  direct
       man to look only in that section of the manual.	The default action is to search in all of the available sections following
       a pre-defined order (see DEFAULTS), and to show only the first page found, even if page exists in several sections.

       The table below shows the section numbers of the manual followed by the types of pages they contain.

       1   Executable programs or shell commands
       2   System calls (functions provided by the kernel)
       3   Library calls (functions within program libraries)
       4   Special files (usually found in /dev)
       5   File formats and conventions, e.g. /etc/passwd
       6   Games
       7   Miscellaneous (including macro packages and conventions), e.g. man(7), groff(7), man-pages(7)
       8   System administration commands (usually only for root)
       9   Kernel routines [Non standard]

       A manual page consists of several sections.

       Conventional  section names include NAME, SYNOPSIS, CONFIGURATION, DESCRIPTION, OPTIONS, EXIT STATUS, RETURN VALUE, ERRORS,
       ENVIRONMENT, FILES, VERSIONS, STANDARDS, NOTES, BUGS, EXAMPLE, AUTHORS, and SEE ALSO.

       The following conventions apply to the SYNOPSIS section and can be used as a guide in other sections.

       bold text	  type exactly as shown.
       italic text	  replace with appropriate argument.
       [-abc]		  any or all arguments within [ ] are optional.
       -a|-b		  options delimited by | cannot be used together.
       argument ...	  argument is repeatable.
       [expression] ...	  entire expression within [ ] is repeatable.

       Exact rendering may vary depending on the output device.	 For instance, man will usually not be able to render italics when
       running in a terminal, and will typically use underlined or coloured text instead.

       The command or function illustration is a pattern that should match all possible invocations.  In some cases it	is  advis‐
       able to illustrate several exclusive invocations as is shown in the SYNOPSIS section of this manual page.

EXAMPLES
       man ls
	   Display the manual page for the item (program) ls.

       man man.7
	   Display the manual page for macro package man from section 7.  (This is an alternative spelling of "man 7 man".)

       man 'man(7)'
	   Display  the	 manual	 page for macro package man from section 7.  (This is another alternative spelling of "man 7 man".
	   It may be more convenient when copying and pasting cross-references to manual pages.	 Note that  the	 parentheses  must
	   normally be quoted to protect them from the shell.)

       man -a intro
	   Display,  in	 succession,  all of the available intro manual pages contained within the manual.  It is possible to quit
	   between successive displays or skip any of them.

       man -t bash | lpr -Pps
	   Format the manual page for bash into the default troff or groff format and pipe it to the printer named  ps.	  The  de‐
	   fault  output  for  groff is usually PostScript.  man --help should advise as to which processor is bound to the -t op‐
	   tion.

       man -l -Tdvi ./foo.1x.gz > ./foo.1x.dvi
	   This command will decompress and format the nroff source manual page ./foo.1x.gz into a device independent (dvi)  file.
	   The	redirection is necessary as the -T flag causes output to be directed to stdout with no pager.  The output could be
	   viewed with a program such as xdvi or further processed into PostScript using a program such as dvips.

       man -k printf
	   Search the short descriptions and manual page names for the keyword	printf	as  regular  expression.   Print  out  any
	   matches.  Equivalent to apropos printf.

       man -f smail
	   Lookup  the	manual	pages  referenced  by  smail  and  print  out  the short descriptions of any found.  Equivalent to
	   whatis smail.

OVERVIEW
       Many options are available to man in order to give as much flexibility as possible to the user.	Changes can be made to the
       search path, section order, output processor, and other behaviours and operations detailed below.

       If set, various environment variables are interrogated to determine the operation of  man.   It	is  possible  to  set  the
       "catch-all"  variable  $MANOPT  to any string in command line format, with the exception that any spaces used as part of an
       option's argument must be escaped (preceded by a backslash).  man will parse $MANOPT prior to parsing its own command line.
       Those options requiring an argument will be overridden by the same options found on the command line.  To reset all of  the
       options	set in $MANOPT, -D can be specified as the initial command line option.	 This will allow man to "forget" about the
       options specified in $MANOPT, although they must still have been valid.

       Manual pages are normally stored in nroff(1) format under a directory such as /usr/share/man.  In some installations, there
       may also be preformatted cat pages to improve performance.  See manpath(5) for details of where these files are stored.

       This package supports manual pages in multiple languages, controlled by your locale.  If your system did not  set  this	up
       for  you	 automatically,	 then you may need to set $LC_MESSAGES, $LANG, or another system-dependent environment variable to
       indicate your preferred locale, usually specified in the POSIX format:

       <language>[_<territory>[.<character-set>[,<version>]]]

       If the desired page is available in your locale, it will be displayed in lieu of the standard  (usually	American  English)
       page.

       If  you	find that the translations supplied with this package are not available in your native language and you would like
       to supply them, please contact the maintainer who will be coordinating such activity.

       Individual manual pages are normally written and maintained by the maintainers of the program,  function,  or  other  topic
       that  they  document,  and  are	not  included with this package.  If you find that a manual page is missing or inadequate,
       please report that to the maintainers of the package in question.

       For information regarding other features and extensions available with this manual pager, please read  the  documents  sup‐
       plied with the package.

DEFAULTS
       The  order  of  sections	 to  search  may be overridden by the environment variable $MANSECT or by the SECTION directive in
       /etc/manpath.config.  By default it is as follows:

	      1 n l 8 3 0 2 3type 3posix 3pm 3perl 3am 5 4 9 6 7

       The formatted manual page is displayed using a pager.  This can be specified in a number of ways, or else will fall back to
       a default (see option -P for details).

       The filters are deciphered by a number of means.	 Firstly, the command line option -p or the environment variable $MANROFF‐
       SEQ is interrogated.  If -p was not used and the environment variable was not set, the initial line of the  nroff  file	is
       parsed for a preprocessor string.  To contain a valid preprocessor string, the first line must resemble

       '\" <string>

       where string can be any combination of letters described by option -p below.

       If none of the above methods provide any filter information, a default set is used.

       A  formatting  pipeline is formed from the filters and the primary formatter (nroff or [tg]roff with -t) and executed.  Al‐
       ternatively, if an executable program mandb_nfmt (or mandb_tfmt with -t) exists in the man tree root, it	 is  executed  in‐
       stead.	It  gets passed the manual source file, the preprocessor string, and optionally the device specified with -T or -E
       as arguments.

OPTIONS
       Non-argument options that are duplicated either on the command line, in $MANOPT, or both, are  not  harmful.   For  options
       that require an argument, each duplication will override the previous argument value.

   General options
       -C file, --config-file=file
	      Use this user configuration file rather than the default of ~/.manpath.

       -d, --debug
	      Print debugging information.

       -D, --default
	      This  option  is	normally issued as the very first option and resets man's behaviour to its default.  Its use is to
	      reset those options that may have been set in $MANOPT.  Any options that follow -D will have their usual effect.

       --warnings[=warnings]
	      Enable warnings from groff.  This may be used to perform sanity checks on the source text of manual pages.  warnings
	      is a comma-separated list of warning names; if it is not supplied, the default is "mac".	To disable a  groff  warn‐
	      ing,  prefix  it	with  "!":  for example, --warnings=mac,!break enables warnings in the "mac" category and disables
	      warnings in the "break" category.	 See the “Warnings” node in info groff for a list of available warning names.

   Main modes of operation
       -f, --whatis
	      Approximately equivalent to whatis.  Display a short description from the manual page, if available.  See	 whatis(1)
	      for details.

       -k, --apropos
	      Approximately  equivalent	 to  apropos.	Search	the  short  manual  page descriptions for keywords and display any
	      matches.	See apropos(1) for details.

       -K, --global-apropos
	      Search for text in all manual pages.  This is a brute-force search, and is likely to take some time; if you can, you
	      should specify a section to reduce the number of pages that need to be searched.	Search terms may be simple strings
	      (the default), or regular expressions if the --regex option is used.

	      Note that this searches the sources of the manual pages, not the rendered text, and so may include  false	 positives
	      due  to things like comments in source files, or false negatives due to things like hyphens being written as "\-" in
	      source files.  Searching the rendered text would be much slower.

       -l, --local-file
	      Activate "local" mode.  Format and display local manual files instead of searching through the system's manual  col‐
	      lection.	 Each manual page argument will be interpreted as an nroff source file in the correct format.  No cat file
	      is produced.  If '-' is listed as one of the arguments, input will be taken from stdin.

	      If this option is not used, then man will also fall back to interpreting manual page arguments as local  file  names
	      if  the argument contains a "/" character, since that is a good indication that the argument refers to a path on the
	      file system.

       -w, --where, --path, --location
	      Don't actually display the manual page, but do print the location of the source nroff file that would be	formatted.
	      If the -a option is also used, then print the locations of all source files that match the search criteria.

       -W, --where-cat, --location-cat
	      Don't  actually  display	the manual page, but do print the location of the preformatted cat file that would be dis‐
	      played.  If the -a option is also used, then print the locations of all preformatted cat files that match the search
	      criteria.

	      If -w and -W are both used, then print both source file and cat file separated by a space.  If all of -w, -W, and -a
	      are used, then do this for each possible match.

       -c, --catman
	      This option is not for general use and should only be used by the catman program.

       -R encoding, --recode=encoding
	      Instead of formatting the manual page in the usual way, output its source converted to the specified  encoding.	If
	      you already know the encoding of the source file, you can also use manconv(1) directly.  However, this option allows
	      you  to  convert	several manual pages to a single encoding without having to explicitly state the encoding of each,
	      provided that they were already installed in a structure similar to a manual page hierarchy.

	      Consider using man-recode(1) instead for converting multiple manual pages, since it has an  interface  designed  for
	      bulk conversion and so can be much faster.

   Finding manual pages
       -L locale, --locale=locale
	      man  will normally determine your current locale by a call to the C function setlocale(3) which interrogates various
	      environment variables, possibly including $LC_MESSAGES and $LANG.	 To temporarily override the determined value, use
	      this option to supply a locale string directly to man.  Note that it will not take effect until the search for pages
	      actually begins.	Output such as the help message will always be displayed in the initially determined locale.

       -m system[,...], --systems=system[,...]
	      If this system has access to other operating systems' manual pages, they can be  accessed	 using	this  option.	To
	      search for a manual page from NewOS's manual page collection, use the option -m NewOS.

	      The system specified can be a combination of comma delimited operating system names.  To include a search of the na‐
	      tive operating system's manual pages, include the system name man in the argument string.	 This option will override
	      the $SYSTEM environment variable.

       -M path, --manpath=path
	      Specify  an  alternate  manpath  to use.	By default, man uses manpath derived code to determine the path to search.
	      This option overrides the $MANPATH environment variable and causes option -m to be ignored.

	      A path specified as a manpath must be the root of a manual page hierarchy structured into sections as  described	in
	      the  man-db  manual (under "The manual page system").  To view manual pages outside such hierarchies, see the -l op‐
	      tion.

       -S list, -s list, --sections=list
	      The given list is a colon- or comma-separated list of sections, used to determine which manual  sections	to  search
	      and  in what order.  This option overrides the $MANSECT environment variable.  (The -s spelling is for compatibility
	      with System V.)

       -e sub-extension, --extension=sub-extension
	      Some systems incorporate large packages of manual pages, such as those that accompany the Tcl package, into the main
	      manual page hierarchy.  To get around the problem of having two manual pages with the same name such as exit(3), the
	      Tcl pages were usually all assigned to section l.	 As this is unfortunate, it is now possible to put  the	 pages	in
	      the  correct  section,  and to assign a specific "extension" to them, in this case, exit(3tcl).  Under normal opera‐
	      tion, man will display exit(3) in preference to exit(3tcl).  To negotiate this situation and to avoid having to know
	      which section the page you require resides in, it is now possible to give	 man  a	 sub-extension	string	indicating
	      which  package  the  page must belong to.	 Using the above example, supplying the option -e tcl to man will restrict
	      the search to pages having an extension of *tcl.

       -i, --ignore-case
	      Ignore case when searching for manual pages.  This is the default.

       -I, --match-case
	      Search for manual pages case-sensitively.

       --regex
	      Show all pages with any part of either their names or their descriptions matching each page argument  as	a  regular
	      expression, as with apropos(1).  Since there is usually no reasonable way to pick a "best" page when searching for a
	      regular expression, this option implies -a.

       --wildcard
	      Show  all	 pages	with any part of either their names or their descriptions matching each page argument using shell-
	      style wildcards, as with apropos(1) --wildcard.  The page argument must match the entire	name  or  description,	or
	      match  on	 word  boundaries in the description.  Since there is usually no reasonable way to pick a "best" page when
	      searching for a wildcard, this option implies -a.

       --names-only
	      If the --regex or --wildcard option is used, match only page names, not page descriptions, as with whatis(1).   Oth‐
	      erwise, no effect.

       -a, --all
	      By  default, man will exit after displaying the most suitable manual page it finds.  Using this option forces man to
	      display all the manual pages with names that match the search criteria.

       -u, --update
	      This option causes man to update its database caches of installed manual pages.  This is only needed in rare  situa‐
	      tions, and it is normally better to run mandb(8) instead.

       --no-subpages
	      By default, man will try to interpret pairs of manual page names given on the command line as equivalent to a single
	      manual  page name containing a hyphen or an underscore.  This supports the common pattern of programs that implement
	      a number of subcommands, allowing them to provide manual pages for each that can be accessed using similar syntax as
	      would be used to invoke the subcommands themselves.  For example:

		$ man -aw git diff
		/usr/share/man/man1/git-diff.1.gz

	      To disable this behaviour, use the --no-subpages option.

		$ man -aw --no-subpages git diff
		/usr/share/man/man1/git.1.gz
		/usr/share/man/man3/Git.3pm.gz
		/usr/share/man/man1/diff.1.gz

   Controlling formatted output
       -P pager, --pager=pager
	      Specify which output pager to use.  By default, man uses pager, falling back to cat if pager is not found or is  not
	      executable.   This  option overrides the $MANPAGER environment variable, which in turn overrides the $PAGER environ‐
	      ment variable.  It is not used in conjunction with -f or -k.

	      The value may be a simple command name or a command with arguments, and may use shell quoting  (backslashes,  single
	      quotes,  or  double  quotes).   It  may  not use pipes to connect multiple commands; if you need that, use a wrapper
	      script, which may take the file to display either as an argument or on standard input.

       -r prompt, --prompt=prompt
	      If a recent version of less is used as the pager, man will attempt to set its prompt and some sensible options.  The
	      default prompt looks like

	       Manual page name(sec) line x

	      where name denotes the manual page name, sec denotes the section it was found under and x the current  line  number.
	      This is achieved by using the $LESS environment variable.

	      Supplying	 -r  with  a string will override this default.	 The string may contain the text $MAN_PN which will be ex‐
	      panded to the name of the current manual page and its section name surrounded by "(" and ")".  The  string  used	to
	      produce the default could be expressed as

	      \ Manual\ page\ \$MAN_PN\ ?ltline\ %lt?L/%L.:
	      byte\ %bB?s/%s..?\ (END):?pB\ %pB\\%..
	      (press h for help or q to quit)

	      It  is  broken into three lines here for the sake of readability only.  For its meaning see the less(1) manual page.
	      The prompt string is first evaluated by the shell.  All double quotes, back-quotes and  backslashes  in  the  prompt
	      must  be	escaped by a preceding backslash.  The prompt string may end in an escaped $ which may be followed by fur‐
	      ther options for less.  By default man sets the -ix8 options.

	      The $MANLESS environment variable described below may be used to set a default prompt string if none is supplied	on
	      the command line.

       -7, --ascii
	      When  viewing  a pure ascii(7) manual page on a 7 bit terminal or terminal emulator, some characters may not display
	      correctly when using the latin1(7) device description with GNU nroff.  This option allows pure ascii manual pages to
	      be displayed in ascii with the latin1 device.  It will not translate any latin1 text.  The following table shows the
	      translations performed: some parts of it may only be displayed properly when using GNU nroff's latin1(7) device.

	      Description	    Octal   latin1   ascii
	      ─────────────────────────────────────────────
	      continuation hyphen    255      ‐	       -
	      bullet (middle dot)    267      •	       o
	      acute accent	     264      ´	       '
	      multiplication sign    327      ×	       x

	      If the latin1 column displays correctly, your terminal may be set up for latin1 characters and this  option  is  not
	      necessary.   If  the  latin1 and ascii columns are identical, you are reading this page using this option or man did
	      not format this page using the latin1 device description.	 If the latin1 column is missing or corrupt, you may  need
	      to view manual pages with this option.

	      This option is ignored when using options -t, -H, -T, or -Z and may be useless for nroff other than GNU's.

       -E encoding, --encoding=encoding
	      Generate	output	for  a	character encoding other than the default.  For backward compatibility, encoding may be an
	      nroff device such as ascii, latin1, or utf8 as well as a true character encoding such as UTF-8.

       --no-hyphenation, --nh
	      Normally, nroff will automatically hyphenate text at line breaks even in words that do not contain hyphens, if it is
	      necessary to do so to lay out words on a line without excessive spacing.	This  option  disables	automatic  hyphen‐
	      ation, so words will only be hyphenated if they already contain hyphens.

	      If you are writing a manual page and simply want to prevent nroff from hyphenating a word at an inappropriate point,
	      do not use this option, but consult the nroff documentation instead; for instance, you can put "\%" inside a word to
	      indicate	that  it  may be hyphenated at that point, or put "\%" at the start of a word to prevent it from being hy‐
	      phenated.

       --no-justification, --nj
	      Normally, nroff will automatically justify text to both margins.	This option disables full  justification,  leaving
	      justified only to the left margin, sometimes called "ragged-right" text.

	      If  you  are  writing  a manual page and simply want to prevent nroff from justifying certain paragraphs, do not use
	      this option, but consult the nroff documentation instead; for instance, you can use the  ".na",  ".nf",  ".fi",  and
	      ".ad" requests to temporarily disable adjusting and filling.

       -p string, --preprocessor=string
	      Specify  the  sequence  of preprocessors to run before nroff or troff/groff.  Not all installations will have a full
	      set of preprocessors.  Some of the preprocessors and the letters used to designate them are: eqn (e), grap (g),  pic
	      (p), tbl (t), vgrind (v), refer (r).  This option overrides the $MANROFFSEQ environment variable.	 zsoelim is always
	      run as the very first preprocessor.

       -t, --troff
	      Use  groff  -mandoc to format the manual page to stdout.	This option is not required in conjunction with -H, -T, or
	      -Z.

       -T[device], --troff-device[=device]
	      This option is used to change groff (or possibly troff's) output to be suitable for a device other than the default.
	      It implies -t.  Examples (provided with Groff-1.17) include dvi, latin1, ps, utf8, X75 and X100.

       -H[browser], --html[=browser]
	      This option will cause groff to produce HTML output, and will display that output in a web browser.  The	choice	of
	      browser  is determined by the optional browser argument if one is provided, by the $BROWSER environment variable, or
	      by a compile-time default if that is unset (usually lynx).  This option implies -t, and  will  only  work	 with  GNU
	      troff.

       -X[dpi], --gxditview[=dpi]
	      This option displays the output of groff in a graphical window using the gxditview program.  The dpi (dots per inch)
	      may  be 75, 75-12, 100, or 100-12, defaulting to 75; the -12 variants use a 12-point base font.  This option implies
	      -T with the X75, X75-12, X100, or X100-12 device respectively.

       -Z, --ditroff
	      groff will run troff and then use an appropriate post-processor to produce output suitable for  the  chosen  device.
	      If groff -mandoc is groff, this option is passed to groff and will suppress the use of a post-processor.	It implies
	      -t.

   Getting help
       -?, --help
	      Print a help message and exit.

       --usage
	      Print a short usage message and exit.

       -V, --version
	      Display version information.

EXIT STATUS
       0      Successful program execution.

       1      Usage, syntax or configuration file error.

       2      Operational error.

       3      A child process returned a non-zero exit status.

       16     At least one of the pages/files/keywords didn't exist or wasn't matched.

ENVIRONMENT
       MANPATH
	      If $MANPATH is set, its value is used as the path to search for manual pages.

	      See  the SEARCH PATH section of manpath(5) for the default behaviour and details of how this environment variable is
	      handled.

       MANROFFOPT
	      Every time man invokes the formatter (nroff, troff, or groff), it adds the contents of $MANROFFOPT  to  the  format‐
	      ter's command line.

       MANROFFSEQ
	      If  $MANROFFSEQ  is  set,	 its value is used to determine the set of preprocessors to pass each manual page through.
	      The default preprocessor list is system dependent.

       MANSECT
	      If $MANSECT is set, its value is a colon-delimited list of sections and it is used to determine  which  manual  sec‐
	      tions  to	 search	 and  in  what order.  The default is "1 n l 8 3 0 2 3type 3posix 3pm 3perl 3am 5 4 9 6 7", unless
	      overridden by the SECTION directive in /etc/manpath.config.

       MANPAGER, PAGER
	      If $MANPAGER or $PAGER is set ($MANPAGER is used in preference), its value is used as the name of the  program  used
	      to  display  the	manual	page.  By default, pager is used, falling back to cat if pager is not found or is not exe‐
	      cutable.

	      The value may be a simple command name or a command with arguments, and may use shell quoting  (backslashes,  single
	      quotes,  or  double  quotes).   It  may  not use pipes to connect multiple commands; if you need that, use a wrapper
	      script, which may take the file to display either as an argument or on standard input.

       MANLESS
	      If $MANLESS is set, its value will be used as the default prompt string for the less pager, as if it had been passed
	      using the -r option (so any occurrences of the text $MAN_PN will be expanded in the same way).  For example, if  you
	      want  to	set the prompt string unconditionally to “my prompt string”, set $MANLESS to ‘-Psmy prompt string’.  Using
	      the -r option overrides this environment variable.

       BROWSER
	      If $BROWSER is set, its value is a colon-delimited list of commands, each of which in turn is used to try to start a
	      web browser for man --html.  In each command, %s is replaced by a filename containing the HTML output from groff, %%
	      is replaced by a single percent sign (%), and %c is replaced by a colon (:).

       SYSTEM If $SYSTEM is set, it will have the same effect as if it had been specified as the argument to the -m option.

       MANOPT If $MANOPT is set, it will be parsed prior to man's command line and is expected to be in a similar format.  As  all
	      of  the  other  man specific environment variables can be expressed as command line options, and are thus candidates
	      for being included in $MANOPT it is expected that they will become obsolete.  N.B.  All spaces that should be inter‐
	      preted as part of an option's argument must be escaped.

       MANWIDTH
	      If $MANWIDTH is set, its value is used as the line length for which manual pages should be formatted.  If it is  not
	      set,  manual  pages  will	 be  formatted	with a line length appropriate to the current terminal (using the value of
	      $COLUMNS, and ioctl(2) if available, or falling back to 80 characters if neither is available).  Cat pages will only
	      be saved when the default formatting can be used, that is when the terminal line length is between 66 and 80 charac‐
	      ters.

       MAN_KEEP_FORMATTING
	      Normally, when output is not being directed to a terminal (such as to a file or a pipe), formatting  characters  are
	      discarded	 to  make  it easier to read the result without special tools.	However, if $MAN_KEEP_FORMATTING is set to
	      any non-empty value, these formatting characters are retained.  This may be useful for wrappers around man that  can
	      interpret formatting characters.

       MAN_KEEP_STDERR
	      Normally,	 when  output is being directed to a terminal (usually to a pager), any error output from the command used
	      to produce formatted versions of manual pages is discarded to avoid interfering with the pager's display.	  Programs
	      such  as	groff  often  produce relatively minor error messages about typographical problems such as poor alignment,
	      which are unsightly and generally confusing when displayed along with the manual page.  However, some users want	to
	      see them anyway, so, if $MAN_KEEP_STDERR is set to any non-empty value, error output will be displayed as usual.

       MAN_DISABLE_SECCOMP
	      On  Linux,  man normally confines subprocesses that handle untrusted data using a seccomp(2) sandbox.  This makes it
	      safer to run complex parsing code over arbitrary manual pages.  If this goes wrong for some reason unrelated to  the
	      content of the page being displayed, you can set $MAN_DISABLE_SECCOMP to any non-empty value to disable the sandbox.

       PIPELINE_DEBUG
	      If  the $PIPELINE_DEBUG environment variable is set to "1", then man will print debugging messages to standard error
	      describing each subprocess it runs.

       LANG, LC_MESSAGES
	      Depending on system and implementation, either or both of $LANG and $LC_MESSAGES will be interrogated for	 the  cur‐
	      rent message locale.  man will display its messages in that locale (if available).  See setlocale(3) for precise de‐
	      tails.

FILES
       /etc/manpath.config
	      man-db configuration file.

       /usr/share/man
	      A global manual page hierarchy.

STANDARDS
       POSIX.1-2001, POSIX.1-2008, POSIX.1-2017.

SEE ALSO
       apropos(1),  groff(1),  less(1),	 manpath(1),  nroff(1),	 troff(1),  whatis(1),	zsoelim(1), manpath(5), man(7), catman(8),
       mandb(8)

       Documentation for some packages may be available in other formats, such as info(1) or HTML.

HISTORY
       1990, 1991 – Originally written by John W. Eaton (jwe@che.utexas.edu).

       Dec 23 1992: Rik Faith (faith@cs.unc.edu) applied bug fixes supplied by Willem Kasdorp (wkasdo@nikhefk.nikef.nl).

       30th April 1994 – 23rd February 2000: Wilf. (G.Wilford@ee.surrey.ac.uk) has been developing and	maintaining  this  package
       with the help of a few dedicated people.

       30th  October  1996  – 30th March 2001: Fabrizio Polacco <fpolacco@debian.org> maintained and enhanced this package for the
       Debian project, with the help of all the community.

       31st March 2001 – present day: Colin Watson <cjwatson@debian.org> is now developing and maintaining man-db.

BUGS
       https://gitlab.com/man-db/man-db/-/issues
       https://savannah.nongnu.org/bugs/?group=man-db

2.12.0							    2023-09-23							    MAN(1)
```

# tmux commands

12:53 AM

The most essential `tmux` commands are categorized into **terminal shell commands** (used to manage sessions from your standard prompt) and **shortcut keybindings** (used after pressing the prefix key inside a tmux session). [link](https://www.redhat.com/en/blog/introduction-tmux-linux)

By default, the `tmux` prefix key sequence is **`Ctrl + b`**. To use a keybinding, press `Ctrl + b`, release both keys, and then hit the next indicated key. [link](https://www.redhat.com/en/blog/introduction-tmux-linux)

### Session Management

Manage full `tmux` workspaces directly from your system shell or navigate between them. [link](https://linuxize.com/cheatsheet/tmux/)

- `tmux` — Start a new unnamed session.
- `tmux new -s <name>` — Start a new session with a specific name.
- `tmux ls` — List all active tmux sessions.
- `tmux a` — Attach to the last used session.
- `tmux a -t <name>` — Attach to a specific named session.
- `tmux kill-session -t <name>` — Terminate a specific named session.
- `Ctrl + b` then `d` — Detach from your current session (leaves it running in the background).
- `Ctrl + b` then `s` — Open an interactive list to switch between sessions.
- `Ctrl + b` then `$` — Rename the current session. [link](https://www.redhat.com/en/blog/introduction-tmux-linux)

### Window Management (Tabs)

Windows act like separate tabs inside a single tmux session. [link](https://thoughtbot.com/blog/a-tmux-crash-course)

- `Ctrl + b` then `c` — Create a new window.
- `Ctrl + b` then `,` — Rename the current window.
- `Ctrl + b` then `n` — Move to the next window.
- `Ctrl + b` then `p` — Move to the previous window.
- `Ctrl + b` then `0–9` — Switch directly to a window by its number index.
- `Ctrl + b` then `&` — Kill the current window. [link](https://www.redhat.com/en/blog/introduction-tmux-linux)

### Pane Management (Splits)

Panes allow you to split your current window into multiple, independent terminal sections. [link](https://linuxize.com/post/getting-started-with-tmux/)

- `Ctrl + b` then `%` — Split the current pane vertically (left and right).
- `Ctrl + b` then `"` — Split the current pane horizontally (top and bottom).
- `Ctrl + b` then `Arrow Keys` — Navigate focus between the panes.
- `Ctrl + b` then `z` — Toggle fullscreen zoom for the active pane.
- `Ctrl + b` then `x` — Close the current pane.
- `Ctrl + b` then `Spacebar` — Cycle through default layout arrangements.
- **Hold** `Ctrl + b` + `Arrow Keys` — Resize the current pane incrementally in that direction. [link](https://linuxize.com/cheatsheet/tmux/)

### Help and Configuration

- `Ctrl + b` then `?` — View all configured keybindings (press `q` to exit).
- `Ctrl + b` then `:` — Open the tmux command-line prompt.
- `tmux source-file ~/.tmux.conf` — Reload your custom configuration file without restarting your session. [link](https://www.redhat.com/en/blog/introduction-tmux-linux)

Would you like to know how to **change the default prefix key** to something else (like `Ctrl + a`), or do you need help **enabling mouse support** for scrolling and resizing? [link](https://linuxize.com/cheatsheet/tmux/)

- [link](https://www.redhat.com/en/blog/introduction-tmux-linux)\
  A beginner's guide to tmux - Red Hat\
  As you can see, the command continued to run and print messages on the screen. You can type Ctrl+C to cancel it. All tmux commands...\
  Red Hat
- [link](https://github.com/tmux/tmux/wiki/Getting-Started)\
  Getting Started · tmux/tmux Wiki - GitHub\
  Changing the current window There are several key bindings to change the current window of a session: C-b 0 changes to window 0, C...\
  GitHub
- [link](https://thoughtbot.com/blog/a-tmux-crash-course)\
  A tmux Crash Course - Thoughtbot\
  tmux new -s session\_name creates a new tmux session named session\_name tmux attach -t session\_name attaches to an existing tmux se...\
  Thoughtbot

Show all

## exit all with nothing running

exit all with nothing running

12:55 AM

To completely close all `tmux` sessions and stop the background server when nothing else is running, use one of these direct methods:

### Kill via Terminal Shell

Run this from your standard terminal prompt to instantly destroy every active session:

- `tmux kill-server` — Shuts down the tmux server and closes all sessions.

### Close inside Tmux

If you are currently inside a session, you can use these shortcuts to exit cleanly:

- `Ctrl + d` — Close the current pane or shell. Repeat this until all panes and windows are gone, which automatically closes the session.
- `Ctrl + b` then `:` then type `kill-session` — Destroys the entire current session immediately.

To check if anything is still running after doing this, type `tmux ls`. It should return `no server running`.

Are you trying to **automate this** inside a script, or would you like to know how to **save and restore** your layouts before closing everything?

- [link](https://medium.com/@angel.manzur/i-screen-you-screen-we-all-screen-when-coding-2a95bd6a3d42)\
  I screen, you screen, we all screen when coding! | by Angel Manzur\
  Notice how at the top of the terminal it says “screen”. You can detach this screen, meaning you leave the session running on the c...\
  \
  \
  Medium
- [link](https://www.warp.dev/blog/fantastic-terminal-programs-and-how-to-quit-them)\
  Fantastic terminal programs and how to quit them\
  For tmux, any attempt to communicate directly to tmux involves typing Ctrl-b (we call this the prefix key). There are two main opt...\
  \
  \
  www.warp.dev

## exit all sessions with nothing running, but keep if there is a daemon or something (unfinished command)

exit all sessions with nothing running, but keep if there is a daemon or something (unfinished command)

12:55 AM

To close only the idle `tmux` sessions while preserving those running background tasks, daemons, or long-running commands, you can use a bash script or a one-liner command.

The easiest way to do this is to check each session for active child processes (like `npm`, `python`, `docker`, or `top`) and kill the session if only the shell itself (like `bash` or `zsh`) is running.

### The One-Liner Command

Run this command from your standard terminal shell to safely close idle sessions:

bash

```
for s in $(tmux ls -F '#{session_name}' 2>/dev/null); do [ $(tmux list-panes -t "$s" -F '#{pane_pid}' | xargs -I {} pgrep -P {} | wc -l) -eq 0 ] && tmux kill-session -t "$s"; done
```

Use code with caution.

### How This Script Works

1. **`tmux ls -F '#{session_name}'`** — Lists only the names of all active tmux sessions.
2. **`tmux list-panes -t "$s" -F '#{pane_pid}'`** — Finds the process ID (PID) of the base shell running inside each pane of that session.
3. **`pgrep -P {}`** — Looks for any child processes running _under_ that shell PID (like an active daemon, editor, or script).
4. **`wc -l`** — Counts the number of active child processes.
5. **`tmux kill-session`** — If the count is `0`, it means the session is sitting idle on an empty prompt, so it safely kills that specific session.

### Manual Inspection Alternative

If you prefer to review what is running before destroying sessions, use the interactive list:

- **`Ctrl + b` then `s`** — Opens an interactive tree view. Use the arrow keys to expand sessions and see exactly what command or daemon is running in each window before manually closing them.

Would you like help converting this into a permanent **shell alias** or **script file** so you can run it with a simple shortcut word like `tmux-clean`?

- [link](https://blog.devops.dev/scripting-patterns-part-2-daemon-scripts-45975815d1e4)\
  Scripting Patterns (part 2): Daemon Scripts | by Kosala Atapattu (කෝසල අතපත්තු)\
  Where to from here? There are couple of things to be mindful about when dealing with background processes, specially with multiple...\
  \
  \
  DevOps.dev
- [link](https://www.reddit.com/r/golang/comments/1k0knpu/slaying%5Fzombie%5Fprocesses%5Fin%5Fa%5Fgo%5Fdocker%5Fsetup%5Fa/)\
  Slaying Zombie Processes in a Go + Docker Setup: A Debugging Story : r/golang\
  The culprit was in our Go code. I used os. Process. Kill to terminate the processes, but it wasn't killing child processes spawned...\
  \
  \
  Reddit
- [link](https://hsf-training.github.io/hsf-training-ssh-webpage/08-tips/index.html)\
  Additional tips & tricks – Introduction to SSH\
  tmux kill-session Kills the current tmux session. Use this when you finish your work and don't require your session anymore, it is...\
  \
  \
  GitHub Pages documentation

Show all

## rename a session

rename a session

12:57 AM

You can rename a `tmux` session either from **inside** the session using a shortcut, or from **outside** the session using a terminal command.

### From Inside the Session

- **`Ctrl + b` then `$`** — Opens a prompt at the bottom of the screen. Type the new name and press `Enter`.

### From Outside the Session (Terminal Shell)

- `tmux rename-session -t <old-name> <new-name>` — Renames a specific session.
- `tmux rename-session <new-name>` — Renames the **current** session (if run from within a tmux pane).

### Shortened Command Syntax

- `tmux rename -t <old> <new>` — You can drop the `-session` suffix to save typing.

Would you like to know how to **rename windows (tabs)** instead of sessions, or do you need help **navigating between** your newly named sessions?

- [link](https://www.baeldung.com/linux/tmux-session-starting-directory)\
  Changing the Starting Directory of a tmux Session

3.1. Current Session In this case, we see our session foo. Now, let's set up the new directory. Once inside the session, we'll pre...\
\
\
Baeldung

- [link](https://education.ti.com/en/customer-support/knowledge-base/ti-83-84-plus-family/product-usage/34773)\
  Solution 34773: Renaming a Program on the TI-84 Plus C Silver Edition Graphing Calculator.\
  Type the new name. Press \[ENTER].\
  \
  \
  TI Education
- [link](https://phoenixnap.com/kb/tmux-cheat-sheet)\
  tmux Cheat Sheet: Commands and Shortcuts Explained\
  tmux Sessions Command Description tmux attach -t \[session\_name] or tmux a -t \[session\_name] Attach to session with a specific name...\
  \
  \
  phoenixNAP

Show all

## explain and format this for s in $(tmux ls -F '#{session\_name}' 2>/dev/null); do \[ $(tmux list-panes -t "$s" -F '#{pane\_pid}' | xargs -I {} pgrep -P {} | wc -l) -eq 0 ] && tmux kill-session -t "$s"; done

explain and format this for s in $(tmux ls -F '#{session\_name}' 2>/dev/null); do \[ $(tmux list-panes -t "$s" -F '#{pane\_pid}' | xargs -I {} pgrep -P {} | wc -l) -eq 0 ] && tmux kill-session -t "$s"; done

1:32 AM

Here is the breakdown and a much cleaner, more readable format for that shell command.

### Multi-Line Format (Readable Script)

Writing the one-liner as a formatted Bash script makes it significantly easier to read and maintain:

bash

```
#!/bin/bash

# Loop through all active tmux session names
for s in $(tmux ls -F '#{session_name}' 2>/dev/null); do

    # Count the number of active child processes running in this session
    child_process_count=$(tmux list-panes -t "$s" -F '#{pane_pid}' | xargs -I {} pgrep -P {} | wc -l)

    # If the count is 0, nothing is running except the idle shell prompt
    if [ "$child_process_count" -eq 0 ]; then
        echo "Killing idle session: $s"
        tmux kill-session -t "$s"
    else
        echo "Keeping active session: $s"
    fi

done
```

Use code with caution.

***

### Step-by-Step Explanation

### 1. Gathering the Sessions

bash

```
for s in $(tmux ls -F '#{session_name}' 2>/dev/null); do
```

Use code with caution.

- **`tmux ls`**: Lists all running tmux sessions.
- **`-F '#{session_name}'`**: A format flag that forces tmux to output _only_ the names of the sessions, ignoring the usual details like window count or creation time.
- **`2>/dev/null`**: Suppresses error messages (like `no server running`) if tmux isn't open at all.
- **`for s in ...`**: Starts a loop, assigning each session name to the variable `$s` one by one.

### 2. Finding the Shell Process IDs (PIDs)

bash

```
tmux list-panes -t "$s" -F '#{pane_pid}'
```

Use code with caution.

- Looks inside the current session (`-t "$s"`) and lists all of its panes.
- **`-F '#{pane_pid}'`**: Outputs the Process ID (PID) of the main process running inside each pane (which is almost always your default login shell, like `bash` or `zsh`).

### 3. Checking for Active Commands

bash

```
... | xargs -I {} pgrep -P {}
```

Use code with caution.

- **`xargs -I {}`**: Takes the shell PIDs from the previous step and passes them one by one into the next command, replacing `{}` with the actual PID.
- **`pgrep -P {}`**: "Process Grep by Parent". This looks for any child processes whose _parent_ process is that shell. If you are running `top`, `npm start`, or a python daemon, those programs are children of the shell, and their PIDs will be printed here. If the shell is completely idle, this outputs nothing.

### 4. Counting and Killing

bash

```
... | wc -l) -eq 0 ] && tmux kill-session -t "$s"
```

Use code with caution.

- **`wc -l`**: "Word Count by Line". This counts how many lines of output were generated by `pgrep`.
- **`-eq 0`**: Checks if that count equals zero.
- **`&& tmux kill-session...`**: This is a logical "AND" shortcut. If the count _is_ zero (meaning no child programs are running), it executes the command to kill that specific session (`-t "$s"`). If a process was found, it skips it.

Would you like to turn this into a **permanent function** in your `~/.bashrc` or `~/.zshrc` file so you can run it anytime by typing a short shortcut like `tmuxclean`?

# shell function

12:57 AM

A **shell function** is <mark>a reusable block of code written within a shell script (like Bash or Zsh) to perform a specific task</mark>. It groups multiple commands under a single name so you can execute them repeatedly without rewriting code. [link](https://www.geeksforgeeks.org/linux-unix/shell-scripting-functions-and-its-types/)

### Basic Syntax

You can define a function in two ways, though the POSIX-compliant standard format (`name()`) is preferred. [link](https://stackoverflow.com/questions/22238033/should-i-define-a-shell-function-as-function-x-or-just-x)

- **Standard Format:**\
  bash

<!---->

```
my_function() {
    # commands go here
}
```

Use code with caution.

- **Keyword Format:**\
  bash

<!---->

```
function my_function {
    # commands go here
}
```

Use code with caution.

To call the function, simply type its name on a new line **without parentheses**. Note that a function must always be defined _before_ you attempt to call it in your script. [link](https://www.youtube.com/watch?v=Jx9yhQ76o8U\&t=49)

***

### Passing Arguments

Shell functions do not declare parameter names in their definition. Instead, they accept parameters as **positional parameters** ($1, $2, etc.) based on the order they are passed. [link](https://binhong.me/blog/2019-05-07-shell-scripting/)

bash

```
# Definition
greet_user() {
    echo "Hello, $1! Welcome to $2."
}

# Invocation
greet_user "Alice" "Linux"
```

Use code with caution.

**Output:** `Hello, Alice! Welcome to Linux.`

- `$1`, `$2`: Refer to the first and second arguments passed to the function.
- `$@`: Expands to all arguments passed to the function.
- `$#`: Contains the total number of arguments passed. [link](https://binhong.me/blog/2019-05-07-shell-scripting/)

***

### Returning Data

Unlike traditional programming languages, the `return` statement in shell functions can **only return an integer exit status** between 0 and 255. [link](https://medium.com/@devopsdiariesinfo/day-5-functions-in-shell-script-475dab9101e0)

- `return 0` signals success.
- `return 1` (or any non-zero value) signals an error or failure. [link](https://www.geeksforgeeks.org/linux-unix/shell-scripting-functions-and-its-types/)

To output actual data (like strings or calculated values) from a function, you **echo the data** and capture it using command substitution (`$()`). [link](https://stackoverflow.com/questions/8742783/returning-value-from-called-function-in-a-shell-script)

bash

```
# Function definition
calculate_square() {
    local num=$1                  # 'local' restricts variable scope to this function
    echo $((num * num))           # Sends the data to stdout
}

# Capturing the result into a variable
result=$(calculate_square 5)

echo "The square is: $result"
```

Use code with caution.

**Output:** `The square is: 25`

***

### Variable Scope

By default, variables inside a shell function are **global** and can alter variables in the rest of your script. To safely isolate your code, always declare internal variables with the `local` keyword. [link](https://www.geeksforgeeks.org/linux-unix/shell-scripting-functions-and-its-types/)

bash

```
modify_variables() {
    global_var="Changed globally"
    local local_var="Hidden from outside"
}
```

Use code with caution.

Would you like to build a **specific utility script**, or do you need help **debugging an existing shell function**?

- [link](https://stackoverflow.com/questions/22238033/should-i-define-a-shell-function-as-function-x-or-just-x)\
  Should I define a shell function as function x( ) or just x( )?\
  6 Answers. ... is supported by the Bourne Shell family and any type of derivate (dash,yash) Is the POSIX std syntax and probably t...\
  Stack Overflow
- [link](https://www.geeksforgeeks.org/linux-unix/shell-scripting-functions-and-its-types/)\
  Functions in Shell Scripting - GeeksforGeeks\
  Functions in Shell Scripting \* Reusability: Write a piece of code once and call it multiple times. \* Readability: Break a long, co...\
  GeeksforGeeks
- [link](https://www.youtube.com/watch?v=Jx9yhQ76o8U\&t=49)\
  Shell Scripting - Functions\
  important sections of this whole uh of this whole series and in programming in general all right so you might be asking yourself w...\
  11m\
  YouTube·HackerSploit

Show all

## conditional of arg length

conditional of arg length

1:00 AM

To check the number of arguments (argument length) passed to a shell function, evaluate the `$#` special variable inside a conditional statement (`if` or `case`).

Here are the most efficient ways to handle argument lengths in Bash or Zsh.

### 1. Require a Specific Number of Arguments

Use `-ne` (not equal) or `-eq` (equal) to enforce an exact count.

bash

```
check_args() {
    # If the number of arguments is not equal to 2
    if [ "$#" -ne 2 ]; then
        echo "Error: Expected exactly 2 arguments, got $#." >&2
        return 1
    fi

    echo "Processing $1 and $2..."
}
```

Use code with caution.

### 2. Require a Minimum Number of Arguments

Use `-lt` (less than) to ensure the user provided enough input before proceeding.

bash

```
backup_files() {
    # If the number of arguments is less than 1
    if [ "$#" -lt 1 ]; then
        echo "Usage: backup_files <file1> [file2 ...]" >&2
        return 1
    fi

    echo "Backing up $# files..."
}
```

Use code with caution.

### 3. Check if Any Arguments Were Passed

To quickly see if the function received any input at all, test if `$#` is zero.

bash

```
validate_input() {
    if [ "$#" -eq 0 ]; then
        echo "No arguments provided."
        return 1
    fi
}
```

Use code with caution.

### Alternative: Using `case` Statements

If your function behaves differently depending on the exact number of inputs, a `case` statement provides a clean, highly readable layout.

bash

```
process_data() {
    case "$#" in
        0)
            echo "Error: No data provided." >&2
            return 1
            ;;
        1)
            echo "Processing single file: $1"
            ;;
        2)
            echo "Processing pair: $1 and $2"
            ;;
        *)
            echo "Processing batch of $# files..."
            ;;
    esac
}
```

Use code with caution.

### Quick Reference: Numeric Operators

Always use these specific flags inside standard `[ ]` or `[[ ]]` test brackets for numeric comparisons:

- **`-eq`**: Equal to
- **`-ne`**: Not equal to
- **`-lt`**: Less than
- **`-le`**: Less than or equal to
- **`-gt`**: Greater than
- **`-ge`**: Greater than or equal to

What **task or logic** are you trying to execute based on these arguments? I can help you **write the full conditional block** or **validate specific input types** like strings versus files.

- [link](https://www.codecademy.com/resources/docs/command-line/bash/conditional-statements)\
  Command Line | Bash | Conditional Statements\
  These statements help in controlling the flow of execution by performing different actions based on whether a condition evaluates ...\
  \
  Codecademy

## what is \[]

what is \[]

1:00 AM

In shell scripting, **`[`** (accompanied by a closing `]`) is a built-in command used to evaluate conditional expressions. It is actually an alias for the `test` command.

Every time you write `if [ "$#" -eq 0 ]`, you are running a command that checks a condition and returns a exit status of `0` (true) or `1` (false).

***

### The 4 Rules of Using `[`

Because `[` is a literal command name and not just syntax punctuation, you must follow strict formatting rules:

1. **Space After `[`:** You must put a space after the opening bracket. `if [$# -eq 0]` will fail with a "command not found" error because the shell thinks the command name is `[$#`.
2. **Space Before `]`:** You must put a space before the closing bracket. The `]` character must be its own separate argument so the `[` command knows where the expression ends.
3. **Quote Your Variables:** Always wrap string and positional variables in double quotes (e.g., `"$1"`). If the variable is empty or contains spaces, omitting quotes will break the command structure and cause syntax errors.
4. **Use Numeric Operators:** Use `-eq`, `-ne`, `-lt`, or `-gt` for numbers. Use `=`, `!=`, or `-z` for strings.

***

### Common Bracket Variations

You will often see three different styles of brackets in scripts. They all serve different purposes:

### 1. Single Brackets `[ ... ]` (Standard Test)

- **What it is:** The classic, POSIX-compliant standard.
- **Best for:** Portability across all Unix shells (like `sh`, `dash`, `bash`).
- **Example:** `if [ "$#" -gt 2 ]; then`

### 2. Double Brackets `[[ ... ]]` (Extended Test)

- **What it is:** A modern keyword enhancement built into Bash, Zsh, and Ksh.
- **Best for:** Writing cleaner Bash-specific code. It does not require quoting variables, prevents split-word bugs, and supports regular expression matching (`=~`) and wildcards.
- **Example:** `if [[ $STATUS == "success" ]]; then`

### 3. Double Parentheses `(( ... ))` (Arithmetic Evaluation)

- **What it is:** A shell construct explicitly designed for math and numbers.
- **Best for:** Checking argument counts or doing math calculations. Inside `(( ))`, you can use standard math symbols (`>`, `<`, `==`, `!=`) instead of `-gt` or `-eq`, and you do not need the `$` symbol for variables.
- **Example:** `if (( # > 2 )); then` _(Checks if argument count is greater than 2)_

Are you trying to make your script **portable across different shells** (like standard `sh`), or are you targetting a specific shell environment like **Bash** or **Zsh**?

## rewrite in test

rewrite in test

1:01 AM

Here is how to rewrite the argument length conditionals using the explicit `test` command instead of the `[` bracket alias.

Because `[` is literally just a shortcut for `test`, you simply replace the `[` with the word `test` and completely remove the trailing `]`.

### 1. Require an Exact Number of Arguments

bash

```
check_args() {
    # Replaces: if [ "$#" -ne 2 ]; then
    if test "$#" -ne 2; then
        echo "Error: Expected exactly 2 arguments, got $#" >&2
        return 1
    fi

    echo "Processing $1 and $2..."
}
```

Use code with caution.

### 2. Require a Minimum Number of Arguments

bash

```
backup_files() {
    # Replaces: if [ "$#" -lt 1 ]; then
    if test "$#" -lt 1; then
        echo "Usage: backup_files <file1> [file2 ...]" >&2
        return 1
    fi

    echo "Backing up $# files..."
}
```

Use code with caution.

### 3. Check if Any Arguments Were Passed

bash

```
validate_input() {
    # Replaces: if [ "$#" -eq 0 ]; then
    if test "$#" -eq 0; then
        echo "No arguments provided."
        return 1
    fi
}
```

Use code with caution.

### Why do this?

Using `test` behaves identically to `[` because they are the exact same binary/built-in under the hood. The only difference is aesthetic: `test` doesn't require a matching closing bracket, which eliminates the common syntax error of forgetting the space before the `]`.

Are you implementing this directly into a **standalone script**, or are you adding these checks into your **terminal shell configuration file** (like `.bashrc` or `.zshrc`)?

## if else if else

if else if else

1:34 AM

In shell scripting, the `else if` syntax is shortened to **`elif`**.

Here is how to structure a complete `if / elif / else` conditional chain using the `test` command to check argument lengths.

### Standard Template

bash

```
if test CONDIITION_1; then
    # Runs if condition 1 is true
elif test CONDITION_2; then
    # Runs if condition 1 is false AND condition 2 is true
else
    # Runs if all above conditions are false
fi
```

Use code with caution.

### Working Example: Argument Length Check

This function uses `elif` to change its behavior based on whether you pass zero, one, or multiple arguments.

bash

```
process_args() {
    if test "$#" -eq 0; then
        echo "Error: You didn't pass any arguments." >&2
        return 1

    elif test "$#" -eq 1; then
        echo "Single mode: Processing one item ($1)..."

    else
        echo "Batch mode: Processing $# items..."
    fi
}
```

Use code with caution.

### 3 Rules for Multi-Condition Syntax

1. **The `then` keyword:** You must place `then` after **both** the `if` line and every `elif` line.
2. **Semi-colon choice:** If you put `then` on the same line as `test`, separate them with a semi-colon: `if test "$#" -eq 0; then`. If `then` is on its own line, no semi-colon is needed.
3. **Closing the block:** The entire conditional block must end with **`fi`** (`if` spelled backward).

Would you like to see how to combine multiple conditions on a single line using **AND (`-a`)** or **OR (`-o`)** operators?

- [link](https://www.codecademy.com/forum%5Fquestions/536005df52f8634d92000174)\
  what's the difference between "else if" and "elif" ?\
  Answer 5398ac1b282ae333b4000c78 Answer 5398ac1b282ae333b4000c78 In the lesson about elifs, it clearly states that elif only stands...\
  \
  Codecademy
- [link](https://dev.to/ritam369/mastering-control-flow-in-javascript-if-else-switch-ternary-made-simple-2dpn)\
  Mastering Control Flow in JavaScript: If, Else, Switch & Ternary Made Simple\
  if - else if - else The if statement runs a block of code only if the passed condition is true. What if we want an alternative pat...\
  \
  \
  DEV Community
- [link](https://physics.nyu.edu/pine/pymanual/html/chap6/chap6%5Floopsconds.html)\
  6\. Conditionals and Loops — PyMan 0.9.31 documentation

6.1. 1.1. if- elif- else example ¶ statement is executed only if the condition if d >= 0.0 on line 7 is . Similarly, we don't have...\
\
\
New York University

Show all

## test arg content

test arg content

1:57 AM

To test the **content** of your arguments (like strings, file paths, or numbers) using the `test` command, you switch from numeric flags to string or file flags.

Always wrap your positional arguments in double quotes (e.g., `"$1"`) to prevent errors if the user passes a string with spaces or leaves it completely empty.

***

### 1. Testing String Content

Use these flags to check text values, verify matching input, or look for empty strings.

- **Check if equal (`=`)**: Matches the exact text.
- **Check if not equal (`!=`)**: True if the text is different.
- **Check if empty (`-z`)**: True if the argument was omitted or left blank.
- **Check if not empty (`-n`)**: True if the argument contains characters.

bash

```
check_string_arg() {
    if test -z "$1"; then
        echo "Error: First argument cannot be empty." >&2
        return 1
    elif test "$1" = "admin"; then
        echo "Access granted: Admin mode active."
    else
        echo "Access granted: Standard user mode active."
    fi
}
```

Use code with caution.

***

### 2. Testing File and Directory Content

If an argument is supposed to be a path to a file or folder, use these flags to validate it exists before running operations.

- **Is a valid file (`-f`)**: True if the path exists and points to a regular file.
- **Is a valid directory (`-d`)**: True if the path exists and points to a folder.
- **Path exists (`-e`)**: True if the path exists, regardless of whether it is a file or folder.

bash

```
process_file_arg() {
    if test -z "$1"; then
        echo "Error: Missing path argument." >&2
        return 1
    elif test -d "$1"; then
        echo "Argument is a directory. Scanning contents..."
    elif test -f "$1"; then
        echo "Argument is a file. Reading line by line..."
    else
        echo "Error: Path '$1' does not exist." >&2
        return 1
    fi
}
```

Use code with caution.

***

### 3. Combining Flags (AND / OR)

You can combine content checks and length checks in a single `test` expression.

- **`-a` (AND)**: Both conditions must be true.
- **`-o` (OR)**: At least one condition must be true.

bash

```
deploy_app() {
    # Check if we have at least one argument AND that argument equals 'production'
    if test "$#" -ge 1 -a "$1" = "production"; then
        echo "WARNING: Deploying directly to production servers!"
    else
        echo "Deploying safely to staging environment."
    fi
}
```

Use code with caution.

What **specific text or file types** are you trying to validate in your script? I can show you the **exact flags** needed to check for them safely.

- [link](https://fishshell.com/docs/3.2/cmds/test.html)\
  test - perform tests on files and text — fish-shell 3.2.2 documentation\
  When using a variable as an argument for a test operator you should almost always enclose it in double-quotes. There are only two ...\
  \
  \
  fish shell
- [link](https://www.devassure.io/docs/DevAssure/Test%20Actions/mobiletestaction/)\
  Mobile Test Actions\
  Verify if text of (Element) is equal to (text) Checks if the text content of the specified element matches the expected text. Usag...\
  \
  \
  DevAssure
- [link](https://www.qnx.com/developers/docs/8.0/com.qnx.doc.neutrino.utilities/topic/t/test.html)\
  test\
  Options: = Test if strings are equal. ! = Test if strings differ. =~ Test if strings match regex. < Test if arg1 is lower than arg...\
  \
  QNX

Show all

## echo a multi line docs with colors/textstyles wo massive \n

echo a multi line docs with colors/textstyles wo massive \n

2:08 AM

To output multi-line text with colors and styles without cluttering your code with repetitive `\n` tokens, use a **Here Document (Heredoc)** combined with ANSI escape codes stored in variables.

This approach keeps your text clean, structured, and easy to read directly in the script layout.

### The Complete Template

bash

```
print_styled_doc() {
    # Define style variables using ANSI escape sequences
    local reset="\033[0m"
    local bold="\033[1m"
    local red="\033[31m"
    local green="\033[32m"
    local yellow="\033[33m"
    local blue="\033[34m"

    # Use 'cat' with a Here Document to output multi-line text
    # 'echo -e' is avoided because Heredocs preserve natural line breaks automatically
    cat << EOF
${blue}${bold}=======================================${reset}
${bold}          APPLICATION MENU             ${reset}
${blue}${bold}=======================================${reset}

  ${green}1.${reset} Start the local server
  ${green}2.${reset} Run database migrations
  ${yellow}3. View configuration profiles${reset}
  ${red}4. Exit application safely${reset}

${blue}---------------------------------------${reset}
Please select an option by number.
EOF
}
```

Use code with caution.

***

### How It Works

1. **`cat << EOF`**: This initiates the Heredoc. It tells the shell to treat everything following it as a single block of raw text until it encounters the literal word `EOF` on its own line.
2. **Natural Formatting**: You hit `Enter` to create new lines normally. The shell preserves your paragraphs, tabs, and indentation exactly as typed without needing `\n` or `\t`.
3. **Variable Expansion**: By keeping `EOF` unquoted, the shell parses and expands variables like `${red}` and `${reset}` directly inside the text block.
4. **`${reset}` (`\033[0m`)**: Always append this code to the end of a styled word or line. If you forget it, the color style will bleed down and ruin the rest of your terminal text display.

***

### Style and Color Reference Guide

| Text Style  | Code      | Foreground Color | Code       | Background Color | Code       |
| ----------- | --------- | ---------------- | ---------- | ---------------- | ---------- |
| **Bold**    | `\033[1m` | Red              | `\033[31m` | Red BG           | `\033[41m` |
| Dim         | `\033[2m` | Green            | `\033[32m` | Green BG         | `\033[42m` |
| _Underline_ | `\033[4m` | Yellow           | `\033[33m` | Yellow BG        | `\033[43m` |
| Blink       | `\033[5m` | Blue             | `\033[34m` | Blue BG          | `\033[44m` |
| Invert      | `\033[7m` | Magenta          | `\033[35m` | Magenta BG       | `\033[45m` |
| Hidden      | `\033[8m` | Cyan             | `\033[36m` | Cyan BG          | `\033[46m` |

Are you creating a **help menu / usage instructions** for your function, or are you styling a **dynamic status report** (like system diagnostics)? I can help you format the text alignment dynamically.

- [link](https://stackabuse.com/creating-multiline-strings-in-javascript/)\
  Creating Multiline Strings in JavaScript\
  Heredoc in JavaScript "Heredoc ( Here Document ) " is a term borrowed from the Perl programming language. It stands for "Here Docu...\
  \
  Stack Abuse
- [link](https://blog.sysxplore.com/p/bash-101-heredocs)\
  Bash 101: Heredocs - by TRÄW🤟\
  The Bash shell offers a powerful feature called "heredoc" (short for "here document") that allows you to pass multiline text or co...\
  \
  \
  sysxplore
- [link](https://blog.sysxplore.com/p/bash-101-heredocs)\
  Bash 101: Heredocs - by TRÄW🤟\
  The Bash shell offers a powerful feature called "heredoc" (short for "here document") that allows you to pass multiline text or co...\
  \
  \
  sysxplore

Show all

## and or

and or

2:11 AM

When working inside a **Here Document (Heredoc)**, you cannot use conditional statements like `if` or `test` directly, because everything inside the block is treated as raw text.

To conditionally print text or styles based on an **AND** or **OR** logic gate, you can evaluate the condition _before_ the document prints, or embed **inline shell expansions** inside the document.

Here are the best ways to handle logical conditions inside multi-line outputs.

***

### 1. Pre-computing with Terminal Control (`tput`)

Instead of hardcoding ANSI strings, the standard practice for dynamic layouts uses `tput`. You check your conditions first, store the result in a variable, and drop that variable straight into your multi-line layout.

bash

```
print_status() {
    local reset=$(tput sgr0)
    local bold=$(tput bold)
    local status_color=""

    # AND Logic Gate (Condition A AND Condition B must be true)
    # Check if application is running AND database is connected
    if test "$1" = "running" -a "$2" = "connected"; then
        status_color=$(tput setaf 2) # Green

    # OR Logic Gate (Condition A OR Condition B is true)
    # Check if app is degraded OR database is disconnected
    elif test "$1" = "degraded" -o "$2" = "disconnected"; then
        status_color=$(tput setaf 3) # Yellow

    else
        status_color=$(tput setaf 1) # Red
    fi

    # Output the dynamic multi-line document cleanly
    cat << EOF
${bold}=======================================${reset}
            SYSTEM METRICS
${bold}=======================================${reset}

  Current Status: ${status_color}${bold}${1^^}${reset}
  Database Link:  ${status_color}${2^^}${reset}

${bold}=======================================${reset}
EOF
}
```

Use code with caution.

***

### 2. Inline Shell Expansions (Advanced / Compact)

Because unquoted Heredocs allow variable expansion, you can run brief inline subshells `$(...)` using standard short-circuit conditional symbols:

- **`&&`** (AND)
- **`||`** (OR)

bash

```
print_compact_report() {
    local green="\033[32m"
    local red="\033[31m"
    local reset="\033[0m"

    cat << EOF
System Health Evaluation:
-------------------------
# If $1 equals "clean", execute the right side (AND)
Security Check: $(test "$1" = "clean" && echo "${green}PASSED${reset}" || echo "${red}FAILED${reset}")

# If $2 equals "error" OR $3 equals "fail", flag the warning
Status Flag:    $(test "$2" = "error" -o "$3" = "fail" && echo "${red}CRITICAL${reset}" || echo "${green}OK${reset}")
EOF
}
```

Use code with caution.

***

### Quick Reference: Logical Operators in Shell Scripting

When writing your conditions, make sure to choose the operator matching your syntax style:

| Operator Type   | Inside `test` Command | Inside Modern `[[ ... ]]` | Inside Inline `$( ... )` |
| --------------- | --------------------- | ------------------------- | ------------------------ | --- | --- | --- | --- |
| **Logical AND** | `-a`                  | `&&`                      | `&&`                     |
| **Logical OR**  | `-o`                  | `                        |                          |`   | `  |     |`   |

Would you like to build an **interactive selection menu** that routes users to different functions based on their input, or do you need help **validating multiple flags** at the start of your script?

## i mean in conditions

i mean in conditions

2:11 AM

To combine multiple conditions using **AND** or **OR** inside an `if` statement, your choice of syntax depends entirely on whether you are using the classic `test` command, modern `[[ ]]` brackets, or combining separate evaluations.

Here is the breakdown for each style.

***

### 1. Using the `test` Command

Inside the standard `test` command, use the literal flags **`-a`** for AND and **`-o`** for OR.

bash

```
# AND Example: First argument is "admin" AND second argument is "active"
if test "$1" = "admin" -a "$2" = "active"; then
    echo "Full administrator access granted."

# OR Example: Length is 0 OR first argument is empty string
elif test "$#" -eq 0 -o -z "$1"; then
    echo "Error: Missing required input."
fi
```

Use code with caution.

***

### 2. Combining Separate `test` Commands (Recommended for Clarity)

If you want to make your code more readable, you can write distinct `test` commands and connect them using standard shell chaining operators: **`&&`** (AND) and **`||`** (OR).

bash

```
# AND Example: Must be a file AND must be readable
if test -f "$1" && test -r "$1"; then
    echo "File exists and is readable."

# OR Example: Must be a directory OR must be a symbolic link
elif test -d "$1" || test -L "$1"; then
    echo "Path is a directory or a link."
fi
```

Use code with caution.

***

### 3. Using Modern `[[ ... ]]` Brackets (Bash/Zsh Only)

If your script targets modern shells like Bash or Zsh, do not use `-a` or `-o`. Instead, use **`&&`** and **`||`** right inside the double brackets.

bash

```
# AND Example
if [[ $USER == "root" && $1 == "force" ]]; then
    echo "Forcing system update..."

# OR Example
elif [[ $1 == "--help" || $1 == "-h" ]]; then
    echo "Displaying usage manual..."
fi
```

Use code with caution.

***

### Quick Comparison Cheat Sheet

| Logical Operation          | Inside a Single `test` | Connecting Separate `test`s | Inside Modern `[[ ... ]]` |
| -------------------------- | ---------------------- | --------------------------- | ------------------------- | ------- | ----- | --- | ----- |
| **AND (Both true)**        | `test A -a B`          | `test A && test B`          | `[[ A && B ]]`            |
| **OR (At least one true)** | `test A -o B`          | `test A                     |                           | test B` | `[[ A |     | B ]]` |

What specific **conditions are you trying to chain together** right now? I can write out the exact line for your script.

## what if you get a non existing arg

what if you get a non existing arg

2:12 AM

If you try to reference an argument that was not provided (a non-existing argument, like `$3` when the user only passed two items), the shell evaluates it as an **empty string (`""`)**.

It does not throw a crash or error by default. However, referencing an unbound argument can easily break your logic or cause syntax errors if you do not handle it explicitly.

Here is exactly how to check for, catch, and handle non-existing arguments safely.

***

### 1. The Broken Way (No Quotes)

If you do not wrap your arguments in double quotes, a non-existing argument completely vanishes from the command line evaluation.

bash

```
# BAD PRACTICE
if test $3 = "production"; then
    echo "Deploying..."
fi
```

Use code with caution.

If `$3` doesn't exist, the shell rewrites the line as: `if test = "production"; then`. The `test` command will crash with a **"unary operator expected"** syntax error because the left side of the equation is physically missing.

***

### 2. The Safe Way: Empty String Check (`-z`)

Always wrap variables in **double quotes** (`"$3"`). If the argument does not exist, it safely turns into `""`, which you can detect using the `-z` (zero length/empty) flag.

bash

```
process_data() {
    # Check if the third argument is missing
    if test -z "$3"; then
        echo "Warning: Argument 3 was missing. Using default configurations."
        local arg3="default_value"
    else
        local arg3="$3"
    fi
}
```

Use code with caution.

***

### 3. Assigning a Default Value Automatically

Instead of writing a full `if/else` block just to handle a missing argument, you can use shell **parameter expansion** to assign a default fallback value inline.

- **Syntax:** `${variable:-fallback}` _(Use the value if it exists; otherwise, use the fallback)_

bash

```
set_env() {
    local username="$1"
    # If $2 does not exist, role defaults to "guest"
    local role="${2:-guest}"

    echo "User: $username, Role: $role"
}
```

Use code with caution.

- Calling `set_env "Alice" "admin"` outputs: `User: Alice, Role: admin`
- Calling `set_env "Bob"` outputs: `User: Bob, Role: guest`

***

### 4. Strict Mode: Crash on Missing Arguments

If your script absolutely requires certain arguments to run and you want it to fail immediately if any are missing, add `set -u` (or `set -o nounset`) to the top of your script.

bash

```
#!/bin/bash
set -u # Tells the shell to treat unset variables/arguments as an error

show_user() {
    echo "User is $1"
}

show_user
```

Use code with caution.

**Output error:** `line 5: $1: unbound variable`

Are you trying to set up **optional arguments with default fallback values**, or do you want to **stop execution completely** if a required argument is missing?

# 
