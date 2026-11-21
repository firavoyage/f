global search (command palette)

# structure

```
commands: command -> fn
shortcuts: shortcut[]
  command
  key
  when

files: file[]
  
```

```
global states

app(){
  states
  
  files = thread index

  @use commands = command -> fn that possibly mutates states

  # for controls, keybindings are often too fundamental to express as "keyboard shortcuts", e.g. enter works differently depending on where you are focusing, and generally you dont have to learn to know this key.
  controls
  use keyboard for controls

  search files commands shortcuts
}

@use text
```

# utils

you may polymorph use state to "take state when passed, get one locally otherwise"

```
foo = use state initial value?

# call use state unconditionally, but give you bar and set bar based on whether it's passed
[bar, set_bar] = use state props.bar, props.set_bar

# if you just need bar, a default value when dc would make it
# if you just need set bar, very likely you could not make it local
```

# components

```
modal
  backdrop # let clicks pass though via css
  modal
    children

modal search files commands shortcuts
```


