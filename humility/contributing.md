use typescript, bun, vite.

on naming, use snake case, verb noun for actions, predicate for bools, plural for iterables and records

for coding style, prefer functional programming, be modular and cohesive

prefer self explanatory code over commenting

use function statement for named functions

use type, no interface

use modern tech such as es module

do not use git

skip building or testing by default

use shell if the edit tool fails

## Web app libraries

- Render components with `h(component, props, ...children)`. Do not call component functions directly (e.g. `h(button, { label })`, not `button({ label })`). This lets React invoke components and preserves hook behavior. `h` is from `lib/web/hyperscript.ts` and is installed globally by the web prelude.
- `h(tag, props?, ...children)` also accepts DOM tags. String tags can include classes, e.g. `h('div.panel', props, child)`.
- `use_state`, `use_ref`, `forward(...refs): (value) => assign to all refs`, `use_effect`, and `use_mount` from `lib/web/react.ts` are project hook wrappers. `use_state` returns `[value, set_value]`; calling the setter with no argument toggles a boolean. Effects can return cleanup functions.
- `s(initial_value, options)` from `lib/web/state.ts` declares shared state and returns a hook. Options used in this app include `localstorage` and `url_param`; `init_localstorage_prefix(name)` scopes persisted keys.
- `use_keyboard(key, handler, options)` from `lib/web/use keyboard.ts` registers a shortcut; use `when` for conditional activation.
- `use_sync_theme` and `use_window_active` are hooks from `lib/web/use sync theme.ts` and `lib/web/use window active.ts`.
- The web prelude `lib/web/global.ts` installs React, web helpers, and shared utilities as globals. For an unfamiliar unimported name, check the prelude and its defining module; don't assume it is a React built-in.
- tsconfig path starts from source, not source/web
