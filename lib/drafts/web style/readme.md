web/style

we decouple structure and styling. we use component scoped semantic classes.

```
.foo
  .foo_bar
  .foo_asdf
  .input
    .input_field
    .input_submit
```

generally, it's component based, class only, using attrs (not data attrs) as variants.

```
foo:
  foo: flex p-2 utils... # it will target both .foo_foo and .foo, if matches
  bar: utils...
  "bar:not(...)": utils...
  "bar:has(...)": utils...
  "bar[variant=large]": utils...
  asdf: utils...
```

i will parse it. `bar[variant=large]` will work like `.foo[variant=large] .foo_bar`.

<!-- wait, will it break nesting? anyway since it's fundamentally optimized for developer happiness, i could go anyway as long as it feels right, at all costs. -->

for design tokens, you define directly wo boilerplate.

```
color:
  brand: 
  primary
    light:
    dark:  
```

```
  theme:
    - light
    - dark
  accent:
    - blue
    - teal
    - green
    - yellow
    - orange
    - orange-ubuntu
    - red
    - pink
    - purple
    - slate
  density:
    - comfortable
    - cozy
    - compact
  window:
    - active
    - inactive
  animation:
    - fluid
    - reduced # reduced animation
```

there are modes. if you define an array on a key, it's considered a mode. and if all keys of a token match a subset of any mode, it will work.

ideally you would define these in yaml, and import directly in vite (wo manual file change tracking/compile time converting).

---

to generate styles, you

```
style(design, components) # -> string
```

you may 

```
use_style(...) # which will inject it
```

if you switch themes later, use style should expectedly match your intent.

---

i will smartly parse the utils. there are about just 120 to 140 core utils.

it's manageable w/wo llms.

---

i may handle text tshirt sizes specially.

doesnt feel there are quite a lot of style like that, unless css is severely flawed.

<!-- well there are quite a lot actually, but i dont need all these -->

i may do it myself. dk if it would be faster to describe it precisely to an llm. but it's reliable and predictable in the manual way.

currently style is a tuple of prop and value.

i may support an array of tuple.

---

i wanna test and see whether i could migrate existing css in para in the style lib.

not much.

idk how to create layout in tailwind though.

and i will have use style, use effect that injects style.

---

in the idiomatic way, you would import a yaml for theming,

and the object identity would stay the same.

it's not expected to create style objects on the fly (though it's just some perf issues).


