change

# 2026.10.26

- file: fix is file is dir, return false if non existing rather than error
- log: use default local time format `%F %T` instead of `%F %T%:z`

# 2026.10.28

- random: add `random`, `randint`.
- file/append: touch if non existing
- request: add `post`

# 2026.10.30

- subprocess: fix cwd no effect when userspace hack is on
- web/state: overhaul the overly complicated `state`, have an atomic `s` instead
- web/component: + `structure(tag?)`

# 2026.11.02

- web/props: cache dangerously set innerhtml

# 2026.11.06

- web/state: listen for navigation events and sync state
- web/state: use url instead of url search params plus string op, fix quirks (e.g. hash disappearing)
- web/state: prevent confusing push state when it doesnt change (e.g. url changes first, state syncs, and tries to sync back)
- web/state: ignore unchanged set state for literals
- web/std/is: support type `literal`
- web/style: support selector w commas

# 2026.11.08

- file/touch: support initial content optional param

# 2026.11.09

- random: + `random_id`

# 2026.11.10

- cli: + `parse_options`
  - take default value?
  - take any env var, case insensitive
  - parse anything into number string or boolean
- file: + `santinize(filename, replacement)`
- web/query: + `use_query(endpoint, payload)`
- web/hyperscript: fix wrong div that should be fragment
- math: fix inf recursion on min and max
  - unclean code can lead to anything

# 2026.11.11

- web/reset.css: ~~make textarea display block~~ make form elements vertical align middle
  - same quirk as svg, confusing margin bottom
  - strictly better for modern ui when you never embed form elements inside running text
- web/state: consider undefined set state fn as direct mutation
  - resolve promises
- ~~web/component~~ web/react: + `use_state` `use_effect` `set_timeout` `set_interval` `listen(event, callback, element?)`
  - (remove the deprecated methods)
  - allow direct mutation
  - resolve promises
  - auto cleanup
- web/request: move request to web/request
  - really it's for web
  - you would not go this way in nodejs
  - breaking change. migrate if needed.

# nov 2026

## 12

- generation: + request params

## 13

- web/style: + `& css selector`
  - so you can style rendered md articles
    - you may write `& .foo, .bar, .asdf`
    - they will all belong to `&`
  - `&selectors` isnt supported, better to make it cleaner
- web/use keyboard: + function when option
- web/style: + first class font weights, support numerical font weights, `regular` (alias of `normal`)
  - no idea why italic is first class while bold isnt
  - i dont care how css or tailwind thinks or traditionally defines
- web/react: fix state is a snapshot
  - use js variable instead
  - web/state, which runs outside fn and doesnt rely on react use state, doesnt have to change
- web/react: + use_debug
- web/clipboard: alias(rename) `init_clipboard` as `hook_after_copy`

---

web/style: handle parent selector, e.g. `content:hover copy` instead of `content:hover .message_copy`

chances are you want explict inline attr (e.g. variants) for strict component scoping.

chances are you want css pseudo classes like hover states out of box.

it only leaks when a component nests itself, which is rarely the case.

i may like `copy:has(content:hover)` to signal what's being styled first, though that would makes things way more complex.

---

- web/style: produce cleaner css by merging utils of the same selector into one

it's not really faster to join an array of strings than string add.

<!-- maybe i missed sth from nickel angel discussion tg group, if i remembered -->

14

- time: do not floor milisec timestamp
  - clearly such abstraction leaks
  - and you dont have to use perf api
- web/style: hardcode white black and transparent into palette
