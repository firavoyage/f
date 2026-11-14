db

- data
  - browser: browser profiles
    - default # you may just have one default profile for now
  - object: content addressible storage
    - storage
      - (hash)
    - index?: hash -> metadata
      - hash
      - url # e.g. you may skip dl entirely if it's cached before expiration
      - creation time
      - expiration time?
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
- cache
  - object
    - storage
      - (any) # temporary uuid

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
  - url: public or domain specific protocol
  - creation time
  - metadata
    - content
      - author id
      - author name
      - author avatar/pfp?: object hash
      - publish time
      - modification time # last update
      - article id? # you may make it a category to track updates
      - comments id
- webpage/index
  - id
  - url: zhihu/article/id/comments # you can absolutely have multiple comments pointing to the same url. it makes sense. it's just for filtering rather than "permalink".
  - creation time
  - metadata
    - content
      - commenter id
      - commenter name
      - commenter avatar/pfp?: object hash
      - publish time
      - modification time # last update
      - comment id?
- webpage/result/(content id)
  - index.html
  - index.md?
  - prose.html? # main content
  - prose.md?
  - asset/...
- category/index?
  - id
  - ~~name~~
  - ~~type?~~
  - url: zhihu:article/id
  - metadata?
    - is internal
- category/map?
  - category
    - category id
      - content[] # updates, if any
    - comments id
      - comment[]
  - content
    - content id
      - category id[]
        - category id of updates of such zhihu article
        - category id of your favorites
        - category id of your read later
        - ...

you may just store it if you fetch multiple times before it changes a bit. since it's content addressible.


