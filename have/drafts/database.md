db

- data
  - object: content addressible storage
    - (hash)
  - webpage
    - index (.sqlite, .jsonl, or .yaml): result[]
    - result
      - (id)
        - index.html
        - (static asset)

---

result

- id
- url
- creation time
- fetch time
- metadata # in case it's statically and consistently structured
  - perf?
    - fetch time
    - ...
  - is_hidden?

arrays and maps are identical. you basically just assign one as primary key, if it doesnt collide.


