todo

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
