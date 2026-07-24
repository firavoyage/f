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


