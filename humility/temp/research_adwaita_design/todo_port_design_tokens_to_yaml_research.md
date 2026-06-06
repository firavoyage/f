do tasks in order. do not parallel.

only complete tasks below. do not overwork or overengineer.

task 1

centralize design tokens

read

- `readme.md`
- `adwaita.css`
- `components/[component].css`

write

- `adwaita.yaml`
- `20260606 centralize design tokens.md` (what you did, what you want to tell me)

spec

three layer design tokens

```
ref: # reference, primitives
  color:
    accent-blue: #3584e4
sys: # system, semantic
  color:
    bg-primary: "{ref.color.light-1}"
comp: # component
  card:
    bg-color: "{sys.foo.bar}"
```

all sys must only reference ref.

all comp must only reference sys.

task 2 (3, 4)

research missing design tokens

purpose

adwaita.css is not comprehensive. libadwaita is the definitive source of truth.

adwaita_web and adwave are, sometimes not so sophisticated, mimics. 

use native yaml comments to mark the source.

when conflicting, strict priority order: libadwaita >> adwaita_web > adwave

read

- knowledge_design_tokens
- ref/libadwaita
- ref/adwaita_web
- ref/adwave

write

- `adwaita.extended.yaml`
- `20260606 research missing design tokens.md` (what you see, what you want to tell me)

spec

only ref or sys inside extended. only include the addition.

research libadwaita first. adwaita web and adwave later. no parallel.
