cli - spec

---

# cli - fp styled commander

## overview

build a fp cli framework on top of commander with object-based definition and styled help output.

## usage

```ts
import {parse} from './cli'

greet = {
  name: 'greeter',
  description: 'An advanced greeting utility for production environments',
  version: '2.0.0',
  options: [
    { flags: '-q, --quiet', description: 'Suppress all console logs except errors', default: false }
  ],
  commands: [
    {
      name: 'person [options] <name>',
      description: 'Greet an individual person with customized styles',
      options: [
        { flags: '-t, --title <type>', description: 'Professional title prefix', default: 'Mr./Ms.' },
        { flags: '-l, --lang <code|name>', description: 'Language selection', default: 'en' },
        { flags: '-s, --style <type>', description: 'Text presentation style', choices: ['normal', 'uppercase', 'lowercase'], default: 'normal' }
      ],
      action: (name, options) => { ... }
    },
    {
      name: 'team [options]',
      description: 'Greet the entire development team',
      options: [
        { flags: '-i, --iterations <number>', description: 'Number of times to print the cheer', default: 1 }
      ],
      action: (options) => { ... }
    }
  ]
}

parse(greet, process.argv)
```

## behavior

- define cli using an object, not chaining
- parse() builds commander program from object and parses args
- help output is styled with chalk:
  - titles (usage, commands, options): bold
  - command names: bold
  - flags: bold

### styled help output

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

## implementation

- cli.ts: parse() function that builds commander and outputs styled help
- greet.ts: example cli definition using the framework
