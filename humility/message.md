design tokens to json

---

generate css

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


