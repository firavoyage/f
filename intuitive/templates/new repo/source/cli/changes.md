changes

---

done

commander is the defacto standard of creating cli.

i want to make it

- fp
- styled

fp:

i dont like chaining.

design an object to define a cli. write into spec. i will confirm.

style:

current

```
 ...humility/source/cli % cd "/home/fira/Documents/f/humility/source/cli/temp/" && br 'commander.ts'
Usage: greeter [options] [command]

An advanced greeting utility for production environments

Options:
  -V, --version            output the version number
  -q, --quiet              Suppress all console logs except errors (default:
                           false)
  -h, --help               display help for command

Commands:
  person [options] <name>  Greet an individual person with customized styles
  team [options]           Greet the entire development team
  help [command]           display help for command
```

expected

```
An advanced greeting utility for production environments

**Usage**: **greeter** [command] [options]

**Commands**:
  **person** [options] <name>  Greet an individual person with customized styles
  **team** [options]           Greet the entire development team
  **help** [command]           display help for command

**Options**:
  **-V**, **--version**            output the version number
  **-q**, **--quiet**              Suppress all console logs except errors (default:
                           false)
  **-h**, **--help**               display help for command
```

use chalk to make titles, commands, and flags bold.

usage:

```
import {parse} from cli

greet = {
  
}

parse(greet, process args) # output
```

build on top of commander

write cli.ts and greet.ts

add -v --version flag support

add subcommand help with bold styling

add todo.md for remaining tasks

---

current

```
 ...humility/source/cli % cd "/home/fira/Documents/f/humility/source/cli/" && br 'greet.ts' person -h              
Usage: greeter person [options] <name>

Greet an individual person with customized styles

Options:
  -t, --title <type>      Professional title prefix (default:
                          "Mr./Ms.")
  -l, --lang <code|name>  Language selection (default: "en")
  -s, --style <type>      Text presentation style (choices: "normal",
                          "uppercase", "lowercase", default: "normal")
  -h, --help              display help for command
```

expected:

```
 ...humility/source/cli % cd "/home/fira/Documents/f/humility/source/cli/" && br 'greet.ts' person -h              
Greet an individual person with customized styles

Usage: greeter person [options] <name>

Options:
  -t, --title <type>      Professional title prefix (default:
                          "Mr./Ms.")
  -l, --lang <code|name>  Language selection (default: "en")
  -s, --style <type>      Text presentation style (choices: "normal",
                          "uppercase", "lowercase", default: "normal")
  -h, --help              display help for command
```

help for sub commands should also have bold on titles (usage, options), commands (greeter, person) and flags, both greeter help person and -h

add -v --version flag

---

current

```
 ...humility/source/cli % cd "/home/fira/Documents/f/humility/source/cli/" && br 'greet.ts' help person
Greet an individual person with customized styles

Usage: greeter person [options] <name>

Options:
  -t, --title <type>      Professional title prefix (default: "Mr./Ms.")
  -l, --lang <code|name>  Language selection (default: "en")
  -s, --style <type>      Text presentation style (choices: "normal", "uppercase", "lowercase", default: "normal")
  -h, --help               display help for command
 ...humility/source/cli % cd "/home/fira/Documents/f/humility/source/cli/" && br 'greet.ts' help team   
Greet the entire development team

Usage: greeter team [options]

Options:
  -i, --iterations <number>  Number of times to print the cheer (default: 1)
  -h, --help               display help for command

```

`<type>`, `<code|name>`, `<number>` are bold.

expected:

titles (usage, options), commands (greeter, person), flags (`-t`, `--help`) should be bold. `<type>` `<number>` should not.

also, output like `greeter person <name> [options]`, options should always be the last

create test folder. use json stringify so you can see raw ansi escape codes.

---

fix bold formatting for help output

- add chalk.level = 1 to enable ansi codes
- add bold_flags helper to bold only flag names, not type placeholders
- move [options] to end of usage line (after arguments)

verify:

```
% br greet.ts help person
Greet an individual person with customized styles

Usage: greeter person <name> [options]

Options:
  -t, --title <type>      Professional title prefix (default: "Mr./Ms.")
  -l, --lang <code|name>  Language selection (default: "en")
  -s, --style <type>      Text presentation style (default: "normal")
  -h, --help               display help for command
```

titles (Usage, Options), commands (greeter, person), flags (-t, --title) are bold. `<type>` not bold. [options] at end.

