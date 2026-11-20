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

shortcut: command, key, 

the string passed to mousetrap

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

  shortcuts = shortcut[]
    command, key, when?
    # command, keybinding, when? # just call it key for conciseness (on vscode it shows "keybindings", "shortcuts" inconsistently, and uses "key" on json config)

  # bind ctrl p when set is open not provided
  # it binds shortcuts itself when provided (why not)
  # for text, you may prefix w "commands" on localization files, or not. it can be fn or dict (preferably dict i guess)
  # for search, it must index by display text, but it may use internal id or some tags or metadata info if provided (pass a fn if you really wanna do that)
  command palette is open? set is open? commands shortcuts? text: command -> localized text = title case, search: query, command[] = commands.keys -> command[] = fzf
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
# modal isnt needed. it basically provides a class for styling and passes all its children. it should be focus trapped but it might not be actively trapping/looping but rather disable tab/shift tab and hide on outside click, as the input/query is always focused.
# modal

input_modal value set value
  # no backdrop
  modal
    input


```
