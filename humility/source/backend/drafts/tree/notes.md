```yaml
# first item is root
- value: "root"
  children: [1, 2]
  focus: 1
- value: "first message key"
- value: "modified first message key"
```

after append

```yaml
# first item is root
- value: "root"
  children: [1, 2]
  focus: 1
- value: "first message key"
  - children: [3]
  - focus: 3
- value: "modified first message key"
- value: node id
```

after edit

```yaml
- value: "root"
  children: [1, 2, 3]
  focus: 3
- value: "first message key"
- value: "modified first message key"
- value: node id
```

normal

```yaml
- value: "root"
  children: [1]
  focus: 1
- value: "first message key"
  children: [2]
  focus: 2
- value: "modified first message key"
  children: [3]
  focus: 3
- value: node id
```

---

how

tree: no info <!-- ofc focus is different, a thing you want before reading a node -->

node: incomplete, mark what it is, a step in workflow or a chat

<!-- it might err (network drop or oom crash), but very unlikely at writing -->

---

incomplete?

```yaml
is incomplete: true
type: response # or stream response (where you might pick up and prefill from "wal")
idem key: some key
```

---



