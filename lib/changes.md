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
