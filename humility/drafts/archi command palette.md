command palette

you define a list of commands in app, which relies on the states, global or not.
if needed you may expose it.

you would define some shortcuts alongside, and pass them all to command palette component.

you have controls, typically event handlers. conceptually they overlap. but you should only define one as control when there is no command on ux for it, (e.g. send prompt).

<!-- more likely they would enter to send directly, or press the button if exists (e.g. on mobile, or via im), rather than typing some command (though you may argue it should appear as long as they intend). -->

shortcuts are for commands specifically. you may define command, shortcut, and optional when. if needed you can have options like priority, prevent default, or propagate.

<!-- for controls those bindings are often too fundamental to express as "keyboard shortcuts", e.g. enter works vastly differently depending on where you are focusing, and generally you dont have to learn to know this key. -->

# naming

```
command: the fn name in snake case

# for english specifically, you may (use a proxy to) simply convert to title case.
# yeah, you should map id to labels rather than guessing the variable name (seeing no space within var name as js constraint)
command text: the localized display text

shortcut: the string passed to mousetrap

# you would call such "prompt" on top as modal (and popup for those centered, toast on bottom/bottom right, etc.)
modal

input modal

select modal

command palette
```

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


