global search (command palette)

# structure

```
global states

app(){
  states
  
  files = thread index

  @use commands = command -> fn that possibly mutates states

  shortcuts: shortcut[]
    command
    key
    when?

  # controls are those event handlers that do not typically appear on searchable commands w specific keybindings (e.g. enter, down, up)
  controls
  use keyboard for controls

  search files commands shortcuts
}

@use text

search(){
  files: file[]
    id
    label
    info: folder # shown on the right
    fn = select that thread

  items: files | map commands command, fn ->
    id?: command
    label: text command
    info?: shortcut[command]
    fn


}
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


