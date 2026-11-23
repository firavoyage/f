settings

# intent

you want to have a visual ui for config.

# spec

it saves to config file (data/config.yaml) under the hood.

rather have settings as a single object. 

settings are flat key value pairs. you should not group individual items as an object even if they are conceptually related or shown together on ux. you may have keys like `appearance.theme`.

some values can be objects, such as endpoint providers, keyboard shortcuts.

example

```
shortcuts:
  - command: 
    key:
    when?: ...
  - command: 
    key:
    when?: ...
providers:
  foo:
    endpoint: example.com
default_model:
  provider: foo
  model: bar/asdf
```

there are schema and current settings, which can be empty as every setting has default value. 

settings are global settings. thread specific config may have separate commands and dont go this way.

# structure

schema

```
appearance.theme:
  type: select
  default: system
  options: 
    - system
    - light
    - dark
appearance.should_reduce_motion:
  type: boolean
  default: false
foo:
  type: range
  default: 0
  options:
    start: 0
    end: 10
    step: 1
providers:
  type: providers
  default: {}
```

every setting item should have type default and maybe options.

type is arbitrary string, as long as they are defined.

you would generally have component for each type, map type to such component, and pass options via props `h(component, {options})`. you may pass options whether or not it takes.

# ux

you have settings on the menu.

# impl

app

```
schema


```

# rationale

> rather have settings as a single object. 

you will not update it frequently and you may just rerender the whole app. it's fast.

on backend, it's easier to handle and less boilerplate than individual ones.

---

options might not be a plain object so you wrap in `{}` when passing props (which must be object).

---

all config are non secret.

you already have env alongside config.

you may have specific actions to modify env later.
