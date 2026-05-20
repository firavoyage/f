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

---
