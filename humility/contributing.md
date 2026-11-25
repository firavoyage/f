use typescript, bun, vite.

on naming, use snake case, verb noun for actions, predicate for bools, plural for iterables and records

for coding style, prefer functional programming, be modular and cohesive

prefer self explanatory code over commenting

use function statement for named functions

use type, no interface

use `==` and `!=`, no `===`.

tsconfig path starts from source

use modern tech such as es module

# Workflow

skip git, build, or test by default

use edit to find and replace text that only occurs once. use shell when it fails.

read spec/readme before writing specs

# Web app libraries

render components w `h(component, props?, ...children)`. do not call directly (e.g. `h(button, { label })`, not `button({ label })`).

`h(tag, props?, ...children)` also accepts html tags, which can include classes (e.g. `h("button.foo.bar")`). when dot is absent, it's treated as class of div (i.e. prefer `h('panel')` over `h('div.panel')`). write `h('summary.')` when you need html tag wo classes.

be simple and functional. avoid semantic html container tags like `section`. no aria attrs or role.

use `use_state`, `use_ref`, `use_effect`, `use_mount`, `forward(...refs): { current }` from `lib/web/react.ts`. `use_state` returns `[value, set_value]`, calling `set_value()` wo args behaves like `toggle_value()` for booleans. `set_value((value) => { do sth })` can mutate value directly wo return statement. `set_value(promise)` behaves as `promise.then set value`. use effect deps are automatically stringified.

use `use_keyboard(key, handle, { when: bool | fn = true, prevent_default = true, stop_propagation = true } = {})` from `lib/web/use keyboard.ts`. when accepts fn. you should pass fn if it depends on real time state (e.g. `when: () => document.activeElement == ...`).

always run `use_sync_theme('system' | 'light' | 'dark')` and `use_window_active()` on the top inside `app` component.

all functions mentioned above are from `node_modules/lib/web`, exposed on global this.

# Components

- do not use semantic html tags for containers. use `h('foo')` to represent `h('div.foo')`.
- no aria attrs or role

# Localization

- `import { text } from 'utility/text'; text('search_threads')`
- on `localization/en.yaml`, define `search_threads: Search threads by title`
- only en for now
