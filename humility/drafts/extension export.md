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
  - output `%Y%m%d %H%M project feature one.md` on build dir
    - previously ive adopted hour and minute, but deprecated for manual work
    - now i can automate it, i guess it would not be a constraint
      - why not, it can be clearer for you
  - slashes -> spaces
  - for content
    - system prompts are ignored
    - _tools would behave as part of content when supported_
    - first msg of each thread as h1
      - _ideally trimmed_
    - all msgs as h2
      - _ideally trimmed_
    - content below each heading
      - 
