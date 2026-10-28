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


