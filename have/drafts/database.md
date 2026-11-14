db

- data
  - browser: browser profiles
    - default
  - object: content addressible storage
    - storage
      - (hash)
    - index? hash -> metadata
  - webpage
    - index (.sqlite, .jsonl, or .yaml): result[]
    - result
      - (id)
        - index.html
        - (static asset)
  - category
    - index
      - id # category id
      - name? # display name
      - type? # e.g. platform name, or "photo"
      - url? # permalink/platform specific external id, e.g. zhihu:article/id
        - no double slash required (a widely criticized historical design quirk of url)
      - metadata?
    - map
      - category
        - (category id): content id[]
      - content
        - (content id): category id[]

---

result

- id
- url
- ~~creation time # after processing~~
- ~~fetch time # initial request~~
- creation time
- metadata # in case it's statically and consistently structured
  - is hidden?
  - perf?
    - fetch time # = creation time
    - finish time # after all processing
  - content?
    - ... (e.g. author, mtime/last update, ...)

arrays and maps are identical. you basically just assign one as primary key, if it doesnt collide.

---

all res on results are symlinks to content addressible storage.

the assumption is, binary files are large. text, while redundant in information, are relatively negligible.

you may have the same lookup speed on some compressed text file (e.g. git delta). you dont have to go that far.

---

you may have content -> category[] and category -> content[].

---

you may have a "status" field (or a few) rather than metadata.is hidden, to filter efficiently

identical in information though. could just preprocess or convert when needed.

---

it's no difference for zhihu or tg.

zhihu is basically normal webpages w some metadata.

for tg, you can make chat a category (e.g. by internal id, or temporary name if not available), and content as content addressible pages

for example, zhihu comments

- webpage/index
  - id
  - url
  - creation time
  - metadata
    - content
      - author id
      - author name
      - author avatar/pfp?: object hash
      - publish time
      - modification time # last update
      - article id? # you may make it a category to track updates
- webpage/result/(content id)
  - index.html
  - index.md?
  - prose.html? # main content
  - prose.md?
  - asset/...
- category/index?
  - id
  - name
  - type? # e.g. platform name, or "photo"
  - url? # permalink/platform specific external id, e.g. zhihu:article/id
    - no double slash required (a widely criticized historical design quirk of url)
  - metadata?


