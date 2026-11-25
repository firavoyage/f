use typescript, bun, vite.

on naming, use snake case, verb noun for actions, predicate for bools, plural for iterables and records

for coding style, prefer functional programming, be modular and cohesive

prefer self explanatory code over commenting. use lowercase on comments.

use function statement for named functions

use type, no interface

use `==` and `!=`, no `===`.

tsconfig path starts from source

use modern tech such as es module

avoid typescriptism. you may define types. you do not have to fix types.

# Workflow

skip git, build, or test by default

use edit to find and replace text that only occurs once. use shell when it fails.

read spec/readme before writing specs

# Prelude

`use({foo, bar})` makes `foo` and `bar` global.

you may see polymorphism via `is(value, "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | Function (constructors like Map, Set) | "nil" | "absent" | "present" | "array" | "numeric" | "literal" | "iterable")`, `has(array | set, element)` `has(map | object, key)` `has(s, substring)`.

you may see error handling like `result = handle(() => JSON.parse(value)); result = await handle(() => fetch(...)); if(is_error(result)){early return}; ...` `throw err('it should be valid input')`.

you may see collections like `foo = dict(), bar = set(), numbers = array(...args), entries({})` (e.g. when you write `max(...args) { const numbers = array(...args) }`, it will be `number[]` as expected whether you call `max([1,2,3])` or `max(1,2,3)` or `max(1)`).

you may see `log`, an alias of `console.log`.

they are from `lib/global.ts`. they are generally self explanatory and you may guess their behavior. you can check their implementation when debugging.

# Web app libraries

render components w `h(component, props?, ...children)`. do not call directly (e.g. `h(button, { label })`, not `button({ label })`).

`h(tag, props?, ...children)` also accepts html tags, which can include classes (e.g. `h("button.foo.bar")`). when dot is absent, it's treated as class of div (i.e. prefer `h('panel')` over `h('div.panel')`). write `h('summary.')` when you need html tag wo classes.

`h('', ...children)` makes a fragment.

be simple and functional. avoid semantic html container tags like `section`. no aria attrs or role.

props for html tags are flexible. both `class` and `className` (or `classname`) are accepted, prefer `class`. style can be string or object. `onclick` and `onClick` are the same. `set_value` will bind onchange. false values will be omitted.

use `use_state`, `use_ref`, `use_effect`, `use_layout_effect`, `use_mount`, `forward(...refs): { current }` from `lib/web/react.ts`. `use_state` returns `[value, set_value]`, calling `set_value()` wo args behaves like `toggle_value()` for booleans. `set_value((value) => { do sth })` can mutate value directly wo return statement. `set_value(promise)` behaves as `promise.then set value`. use effect deps are automatically stringified. use effect can accept async fn.

you have `set_timeout` `set_interval` `listen(event, fn: (e: Event) => any, ref: any (element = ref.current ?? ref) = window)`. they will auto cleanup inside use effect as long as it's sync, or when you call them before the first await.

use `use_keyboard(key, handle, { when: bool | fn = true, prevent_default = true, stop_propagation = true } = {})` from `lib/web/use keyboard.ts`. when accepts fn. you should pass fn if it depends on real time state (e.g. `when: () => document.activeElement == ...`).

always run `use_sync_theme('system' | 'light' | 'dark')` and `use_window_active()` on the top inside `app` component.

all functions mentioned above are from `node_modules/lib/web`, exposed on global this.

# Localization

`import { text } from 'utility/text'; text('search_threads')`

on `localization/en.yaml`, you may define `search_threads: Search threads by title`

only en for now
