i guess i would have a db

file based key value.

(i would reconsider if i need "handle")

obviously it would stand on top of `file`. i think it deserves a refactor.

<!-- i could impl the actions then (i should save every result, like api calls.) -->

---

<!-- it's wise to research more.

the real world is less hard but way more complex, which llms do not handle well. -->

---

- action/chat
  - new thread? (no empty threads)
    - thread count
    - backend/store
      - lib/file
  - append to thread tree
    - backend/store
      - lib/file
  - set message node
    - backend/request
      - (fetch)
- action/read
  - get the node tree
  - declare all the nodes i want
    - web/storage <!-- localstorage/idb/... abstraction, currently i guess local is enough? i can change my mind later -->
- action/list
  - list all threads (currently, let's have a threads.yaml. an array of threadid)

hooks are easy. they come later.

---

- backend/tree
  - init
  - append tree child to new tree
  - edit tree ~~level (start from 1, 0 is root, not a message)~~ index child <!-- there could be many nodes on the same level -->
  - ~~del level item~~ <!-- merge into rearrange? -->
  - focus level index
  - read (you do need the children) ~~traverse to current focused array (first root)~~ <!-- wrap get? yes. why not. it's clear to have them together. -->
  - rearrange index new children

---

- backend/node
  - get id
  - set id value
  - (inc only)

upd: no. it will conflict w get, set from store. and it does not worth the tradeoff. (import node to remove node key)

---

how to call llm?

how to store keys? whereever.

how to store a tree?

how to parse yaml in nodejs

---

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


