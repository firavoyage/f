changes

---

- read code inside the folder
- commander is oop styled. i want a fp one. be declarative.

  ```
  declaration: name desc commands options...

  hello_world = cli(declaration)

  parse(cli, args) # pretty print, make commands bold

  help(cli, (command), terminal width){
    string.
  }
  ```

- create a hello world cli, support these
  - version (-v, --version), help (-h, --help)
  - hello
  - hello joe
  - hello 'joe'
  - hello --name 'joe'

be as simple as possible. just make every command i want work as expected. no validation stuff.

---


