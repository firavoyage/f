humility

readme · todo · notes

<!-- what do you wanna achieve at the end of the day. -->

---

see drafts/todo

---

(long term roadmap) <!-- wip -->

---

design tokens to json

---

generate css

---

i guess i could set a rule. components use semantic tokens.

i could

```
light-1

card:

bg: light-1
```

and change on card

but w some non dry overhead, i could make it clearer, and more centralized

```
light-1

card-bg: light-1

card:

bg: card-bg
```

and change semantic. (i could change component as well, for different purposes)

actually google have 3 tiers, with an addition of component layer, for cross plat compatibility. but i will simply use css.

i will enforce the separation through naming.

---

storybook. no need to be fancy.

no sidebar. no links to "all, foo, bar, ..."

declare a list of components.

Component:

title, all component variations.

default (or malformed, or unexisting component): 

all components on the page

url ?component=foo

only that component

---

c

```
sys:
  light:
  dark:
```

e

```
sys:
  color:
    primary-bg:
      $value: (light)
      $dark: (dark)
comp:
```

upd:

e

```
sys:
  color:
    primary-bg:
      value: "{ref.color.mycolor-1}" # no var would end w "value". no need to add prefix.
      dark: "..."
modes:
  theme:
    - light # first item is default
    - dark
  density:
    - comfortable
    - compact
    - cozy
```

---

parser.

yaml to css.

---

going fast feels exciting. but i do not have to chase something or overclock myself.

ref

radius 2 4 16 limits options. you could not accidentally pick a radius of odd numbers.

sys

corner is the decision. you pick one of the good options. and you can change, like for a new theme, like color theme, compact, device, or you wanna update your brand.

comp

more of cross platform compatibility. keep it dry. avoid unnecessary abstractions.

it's easy to standardize later.

---

