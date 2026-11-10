export

- export build_dir include ignore
  - it matches as long as parent dir matches, e.g. `''` matches everything, `foo` matches `foo` and `foo/bar`, but not `foo_/bar`
  - include = '': all matches
  - ignore: everything except matches
  - when both is provided, it evaluates to include cap ignore

---

starting and trailing slashes will be trimmed

---

for specifically, for `asdf` to match a folder,

it must be either `asdf` exactly or w `asdf/` prefix.

---

it's opinionated.

for each included thread,

- it will group by folder name
  - `project/feature one` -> an array of threads on that folder
    - already sorted by ctime
  - random threads wo folders will not be grouped
    - i may handle this specifically in code
- for all threads w folder
  - output `$Y` on build dir
