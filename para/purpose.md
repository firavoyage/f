purpose

oct 2026

25

"market research" "competitive ux analysis"

no research is enough research i guess.

it's simple one. and i dont really understand what it means, whether i timebox or not.

i would criticize others, on flaws i would never meet, rather than learning others.

28

i wonder if it would really adopt adwaita, or to what extent, esp given it might be themed dynamically like any blogs/wikis, rather than general desktop util apps



i would like a styling lib



styling is a trap!



it's primarily designed for desktop. and i would like

chapters | article | headings

on mobile, i may show article only, and you may swipe left or right to pull out, or via some hamburger menus.



clearly i would not try to mimic adwaita. it simply doesnt make sense because it's irrelevant. you learn the same w less efforts. and i can have consistent simple "plain/utilitarian" theme across all my apps anyway.



on component/style lib, a decision is i will prefix the classes by component name. that's how i guarantee component scoping. and i will make them components, because you have to boilerplate through it anyway if you just manipulate the string.

```
dc {foo, bar} = div('my component') # normalize as my_component
dc {create, read, update, delete} = button('my component')

# or by name
dc {foo, bar, button_create, button_read} = structure('my component')
... = s('comp', 'input')


r (
  foo(
    bar(
      {open: false, on click ...},
      "lorem ipsum"
    ),
    bar
  )
)

# or r fragment(...)
```

on styling, clearly i will not rely on native css or any css styled preprocessers that inherits all its flaws, because it could not be fixed gradually or integrated or extended, and when i really wanna move on, i will, one day, all prev work will vanish.

i will use css selectors and inherit all tailwind utils first so i can make it work. if i feel it does not fit my intent, i can always create abstractions as new utils.

i can do it progressively when i feel like it.

```
define
  color
    gray
      100
      200
      ...
      950
  font

style
  switch
    . flex ... # . or _ or "switch" itself
    thumb px py size color [font-family: ...; ...] # css doesnt use [] you may use {} aw
    thumb[on]
    thumb[!on]
    thumb[theme=dark]
    track
```

by default i would like to left align it because you are not supposed to be reading a book. toc will be on the right.

and if you open sidebar it has to be pushed anyway.
if you leave the sidebar open, it would be ideally centered rather on the right.
<!-- wikipedia centers, yk. -->

you may customize it,

- article layout container
  - placement
  - (max) width



well it might be a bit awkward to compose/nest components, but it's relatively easy

```
h(component, ...)
```

and you dont have to captalize component names. button and "button" are clearly different (and likely you would not use the latter).

29

if the style lib is just a representation of css,
whether runtime or compile time (perf is premature optimization)
i can simply go native css for now.

if i just want it to be simple.

as soon as i create design tokens and utils like size, text, microscopic tweaks, i can migrate.

30

i will overhaul the state lib.

in fact you dont have a lot of states.

if you do, usually that's a config object.

instead of one giant global state, you declare (ec) a few, like

use search params. you may not have to export which.

and you decide whether to persist or sync each, via clear names like local storage or search params. (persist is ambiguous, local? idb? session? backend sync? webdav?)

you may init app name first, and i will name all local storage items after which, wo heavy json serialization overhead if they were all a single value.

i dont wanna care "push" or "correct" url. it must be spa first. and if i do wanna auto fix typos, i could extend later.

---

and i will not use "folder and path". one single path.

i would take the first "dir" as folder on backend.

you may provide a single default folder (could have).

nov 2026

02

have a consistent design system. build a component lib.

since i already use github md theming (a default for gfm)

i may adopt github primer ui. it's open, already built for react.

but i would go my way. if i could replicate it easily by its look, i could replicate any theme.

---

doesnt feel the icons are really aligned.

https://primer.style/brand/components/Button/react/

maybe the text is a bit too high here.

for some reason "brand ui" adapts system dark theme by defualt, while "product ui" doesnt.

well, the scrollbar doesnt adapt, and there is fouc. (besides across browser tab auto sync)

interesting they provide ruby on rails variants. and it's not csr. "refused to connect". well it hits hard wall, despite somewhat elegant syntax. rails do have their sophisticated ecosystem. "lookbook".

you can edit directly wo "cdpn stackblitz codesandbox", copy and reset.

things are aligned here. https://primer.style/product/components/button/

no idea if the keybinding hint auto binds. likely not. and seems it's only for mac.

---

if feasible i might customize and use tailwind apply.



