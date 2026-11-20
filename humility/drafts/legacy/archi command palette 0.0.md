command palette

you define a list of commands in app, which relies on the states, global or not.
if needed you may expose it.

you would define some shortcuts alongside, and pass all these to command palette component.

you have controls, typically event handlers. conceptually they overlap. but you should only define one as control when there is no command on ux for it, (e.g. send prompt).

<!-- more likely they would enter to send directly, or press the button if exists (e.g. on mobile, or via im), rather than typing some command (though you may argue it should appear as long as they intend). -->

when binding shortcut, 

# structure

```
global states

app(){
  states

  commands = command -> fn that possibly mutates states
  use({commands})

  shortcuts
}
```

# components


