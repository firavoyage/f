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

on styling, clearly i will not rely on native css or any css styled preprocessers that inherits all its flaws, because it could not be fixed progre
