cli spec

methods

- cli usage = cli
- parse args to cli (run cli)

structure of usage

- name
- version
- description
- usage
  - ""
  - "<name>"
  - "<command>" <!-- resolves top to bottom (well... what if you list differently for ux. fine, have an explicit priority instead) -->
  - "[flag]"
- priority?: usage[]
- commands
- options
- tip

```
 ~ % tmux -h
Run and manage background daemons

Usage:
  tmux                  Start a new terminal
  tmux <name>           Start a new named terminal or attach if existing
  tmux <command>        Perform an action
  tmux [flag]           Check version or help

Commands:
  l, ls                 List all sessions
  a [name]              Back to the last (or a named) session
  clear                 Clear inactive sessions of last command finished
  kill, rm <name>       Kill a session
  rename <old> <new>    Rename a session

Options:
  -v, --version         Print version
  -h, --help            Print help

Use ctrl+b d to detach from a session
```

```
 ~ % cd
Navigate filesystem

Usage:
  cd <location>       Navigate somewhere
  cd <location...>    Join args with a space and navigate there
  cd [flag]           Check version or help

Options:
  -v, --version    Print version
  -h, --help       Print help
```

assume you have no conflicting `-v` and `--v`. it will parse all options to an object w dashes stripped.

it will handle `--`.

---

structure of command

- command (you may have commas) = ""
- desc
- args?
- options?
- fn

structure of arg

- name
- type = 'string' <!-- (numeric, string, or union?) -->
  - bool iff it takes no param
- rest = false <!-- true: an array -->

structure of option

- name (may contain comma)
- type

---

or you may decouple help text from actual resolution?

---

priority is weird. maybe we can have a conventional resolution.

- cli command
- cli special flag (--help, --version) <!-- i.e. you could not pass any other arg/option if you already say cli --version -->
- cli args... flags...


