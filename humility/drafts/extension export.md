export

- export build_dir include ignore
  - it matches as long as parent dir matches, e.g. `''` matches everything, `foo` matches `foo` and `foo/bar`, but not `foo_/bar`
  - include = '': all matches
  - ignore: everything except matches
  - when both is provided, it evaluates to include cap ignore

---

starting and trailing slashes will be trimmed

