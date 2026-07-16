todo

---

current

```
hello 0.0.0

Say hello

Usage: hello <command> [options]

Commands:
  hello    say hello

Options:
  -v, --version  print version
```

expected

```
Say hello

**Usage**: **hello** <command> [options]

**Commands**:
  **hello**    say hello

**Options**:
  **-h**, **--help**       print help
  **-v**, **--version**    print version
```

(chalk bold, not markdown)

---

expected

```
hello --name joe hello
```

flags can be anywhere. (args can not)

flags can take a param or not.

---

expected 

```
% hello -v
hello 0.0.0
```

---

expected 

```
% hello hello -h        
say hello

**Usage**: **hello** **hello** [name] [OPTIONS]

**Options:**
  **--name** <name>        name to greet
  **-h**, **--help**       print help
```

---

remove the `cli` wrapper function.

just define hello as an object.

then `parse(hello, args)`

only export parse.

---

separate `cli.ts` and `test/hello.ts`.

write this: (ive made it work)

```
import { parse } from 'cli/cli';
```

---

support terminal_width like commander
