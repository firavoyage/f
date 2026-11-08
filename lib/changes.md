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
