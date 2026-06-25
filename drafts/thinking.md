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
    - backend/store
      - lib/file
  - append to thread tree
    - backend/store
      - lib/file
  - set message node
    - backend/request
      - (fetch)

hooks are easy. they come later.

---
