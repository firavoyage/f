use typescript, bun, vite.

on naming, use snake case, verb noun for actions, predicate for bools, plural for iterables and records

for coding style, prefer functional programming, be modular and cohesive

prefer self explanatory code over commenting

use function statement for named functions

use type, no interface

use modern tech such as es module

# Workflow

skip git, build, or test by default

use edit to find and replace text that only occurs once. use shell when it fails.

read spec/readme before writing specs

# Web app libraries

render components w `h(component, props?, ...children)`. do not call directly (e.g. `h(button, { label })`, not `button({ label })`). `h` is on global this.

`h(tag, props?, ...children)` also accepts html tags, which can include classes (e.g. `h("button.foo.bar")`). when dot is absent, it's treated as class of div (i.e. prefer `h('panel')` over `h('div.panel')`). write `h('summary.')` when you need html tag wo classes.

be simple and functional. avoid semantic html container tags like `section`. no aria attrs or role.



- `use_state`, `use_ref`, `forward(...refs): (value) => assign to all refs`, `use_effect`, and `use_mount` from `lib/web/react.ts` are project hook wrappers. `use_state` returns `[value, set_value]`; calling the setter with no argument toggles a boolean. Effects can return cleanup functions.
- `s(initial_value, options)` from `lib/web/state.ts` declares shared state and returns a hook. Options used in this app include `localstorage` and `url_param`; `init_localstorage_prefix(name)` scopes persisted keys.
- `use_keyboard(key, handler, options)` from `lib/web/use keyboard.ts` registers a shortcut; use `when` for conditional activation.
- `use_sync_theme` and `use_window_active` are hooks from `lib/web/use sync theme.ts` and `lib/web/use window active.ts`.
- The web prelude `lib/web/global.ts` installs React, web helpers, and shared utilities as globals. For an unfamiliar unimported name, check the prelude and its defining module; don't assume it is a React built-in.
- tsconfig path starts from source, not source/web

# Components

- do not use semantic html tags for containers. use `h('foo')` to represent `h('div.foo')`.
- no aria attrs or role

# Localization

- `import { text } from 'utility/text'; text('search_threads')`
- on `localization/en.yaml`, define `search_threads: Search threads by title`
- only en for now
