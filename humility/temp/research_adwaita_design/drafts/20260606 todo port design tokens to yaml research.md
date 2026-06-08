do tasks in order. do not parallel. 

complete all tasks in one go no stop. make sure your work satisfies the constraints on spec.

only complete tasks below. do not read or write any files/folders not explicitly mentioned below. do not overwork or overengineer.

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

some variables on adwaita.css are not named properly. you can change the name to make it feel right.

three layer design tokens

```
ref: # reference, primitives
  color:
    accent-blue: #3584e4
sys: # system, semantic
  color:
    bg-primary: "{ref.color.light-1}" # bg-card is forbidden. no component name allowed.
comp: # component
  card:
    bg-color: "{sys.foo.bar}" # must end with the type, like color or font
```

all sys must reference ref. no exception.

all comp must reference sys whenever possible. it's ok to reference ref directly.

test: scan the yaml. make sure no raw value inside sys. if there is, define in ref. make sure no raw value inside comp.

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

all extended tokens are ref or sys. no comp. only include the addition.

research libadwaita first. adwaita web and adwave later. no parallel.
