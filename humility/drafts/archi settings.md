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

settings include those that sync to config.yaml. use_sidebar_open doesnt sync.

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
  type: switch
  default: false
appearance.should_reduce_motion_asdf:
  type: checkbox
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

you would generally have component for each type, map type to such component, and pass options via props `h(component, {value, set_value, options})`. you may pass options whether or not it takes.

# ux

auto save settings.

---

on sidebar

```
h('menu')
  Menu # h(button, onclick toggle menu open, text('menu'))
  menu open &&
    Settings # h(button, onclick open settings, text('settings'))
h('nav')
  ...
h('threads', ...)
```

---

on settings

```
h(modal, position = center)
  h('settings'
    h('settings_titlebar'
      text('settings')
      h(button, text 'close')
    )
    h('settings_content' # grow-1
      h(
        scroll,
        # just list everything for now
      )
    )
  )
```

# impl

app

```
schema

use_settings = s(build_default_settings(schema), {
  localstorage: 'settings'
}) # from utility/settings

app
  set settings from backend # same way as list all threads


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
