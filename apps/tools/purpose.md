purpose

---

jul 2026

17

17 20 optimize maimai. test the logics. ~~(17 40)~~ (18 00)

idk if it matters. but i would like to complete it, at least to make it logically sound.

e.g. large m (e.g. miss break), low n (base loss), obviously impossible yet currently some results exist it seems

<!-- 17 34 oh it's simple. there might be more loss than avail notes. just add a check. -->

<!-- i would like to write into a log, but it's async, and i fire and forget. ask if it matters. -->

~~19 00~~ 19 40 optimize maimai furtherer ~~(19 40)~~ ~~(20 00)~~ 21 00

seems ive done what i can do on branch cutting.

btw, i could easily figure out hp lp hg md lg given all stats on the board, but that would be a bit boring.

the current problem is it's terminated.

e.g. `solve_change(285, _b_factors)`

as you can see

```ts
  const _b_factors = [2, 4, 5, 6, 10, 15, 20, 30]
```

i guess i can remove 4, 10, and 15, for example.

they are basically a combination.

<!-- i drifted a bit. but i would be fine. -->

20

02 40 plan

i guess it can be simple. i can know everything ahead.

idk the exact choices or designs i would have. but ik what they would be.

i could be wrong. but if it provides invariant foundation for the future, it would be worth investing in.

---

idk how long it would take. but i do not have to timebox everything. ik it matters. so just proceed until complete.

24

05 00 simplify design tokens yaml, deprecate value based contextual token determination, make it more natural and consistent ~~(06 00)~~ 07 00

adopt a object flattening template <!-- ? -->

revise convert yaml to css cli input syntax

no native globbing i guess. leverage shell wildcard. take all args as files (ignore stdin). convert yaml to colocated css.

---

this wont work. stdin wont propagate.

```
rg --files -g '*.ts' | cd "/home/fira/Documents/f/apps/tools/source/web/scripts/" && b 'convert design tokens.ts'
```

it's not about the code.

---

improve app copy meanwhile.

---

it seems ive modified legacy folder by mis ordering rg flags

surprisingly vscode timeline doesnt track them. 

i could, but i would not fix them through git history.

p

```sh
rg --files -g '!**/legacy/**' -g 'design/**/*.yaml' 
```

c

```sh
rg --files -g 'design/**/*.yaml' -g '!**/legacy/**'
```

23 20 refine design tokens. leverage font shorthand. (23 40)

```yaml
font: font-style font-variant font-weight font-stretch font-size/line-height font-family;
```

it's a bit hard to reference tokens like this

```yaml
font: 
  heading: bold text.lg typeface.serif
```

i dont wanna invent like `{text.lg}`

```yaml
font: 
  heading: bold var(--text-lg) var(--typeface-serif)
```

seems it ruins.

```yaml
font: bold var(--text-lg) var(--typeface-serif)
# font: var(--font-heading)
```

maybe i would just define font in css.

you would not reuse `var(--font-heading)` a lot.

wait why do i have to make assumptions.

well, i guess i can make the converter smarter.

ok. easy. the logic is, separate value by spaces. for each, if it's a valid token, convert to css var and replace all.

fix typing in converter.

25

02 20 design main page. create sidebar. create a basic converter. (03 00)

try to make some progress.

---

main page.

states <!-- props and states are logically the same -->: tools, focused tool, pref

by pref, i mean when possible, it can show as structured/raw input, and rendered/raw output.

a tools have

- name
- fn
- structure? an object in setting options <!-- i would design it later -->
- render? string -> component

---

sidebar

states: list, focused item

<!-- llm doesnt name as list. it names as items. wise. -->

---

i will not impl the draggable separater for now.

---

<!-- use ts. use type no interface. only type on params, not return. -->

use ts. use type no interface. use snake case. no aria labels.

class name rules...

well, i guess i should break the rules. 

rules are designed for react, for big corps.

seems ts wants me to use data attrs for non standard attrs. ok. let's have a css snippet for it.

---

use ts. use type no interface. no return type. use snake case. no aria labels. use fn statement. write a react textarea component. params value set_value.

---

convertion can be two way i realize.

---

til: ~~**think a bit about the implementation (e.g. params/states, types, abstraction structure) even if they are logically identical.**~~ **write when you are clear. sleep or rest when not.**

03 20 write web/lib/sync theme.use. add import type snippet. link some snippets.

12 20 simplify knowledge: name component classname (12 40)

just be nested. if overwhelming, consider separation/abstraction.

<!-- btw, by default, descendant selector already selects children on all levels. flexible. -->

make humility/.knowledge the single source of truth. rm everywhere else.

folders like humility/source/web/knowledge are just quick workarounds as i dont wanna deal w agent skills.

17 20 style selection ~~and focus ring~~ ~~(17 40)~~ ~~(18 00)~~

choose adwaita anyway.

---

assumption: i guess it's the same 30% opacity across light or dark.

---

fix converter. rm assumption: you would only ref non contextual tokens. you can reference whatever exists now.

---

drop the timebox. i do not actually have a time constraint. and i would absolutely explore when i feel like that, even with the identical outcome.

---

oklch(22% 0.01 285.73)


