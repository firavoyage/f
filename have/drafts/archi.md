archi

- store pages
  - you may use sqlite as hashmap
    - hashmap is very general
    - or actually, you can get best of both worlds in sqlite
      - maps are essentially arrays wo loss in information
      - you basically get faster id lookup
    - you may not abstract sql perfectly, but clearly it works you will only use js map methods
  - text is the universal language nevertheless, and you may convert to json/yaml if matters

---

on sqlite

clearly you dont wanna use sql commands.

generally, you may

- init
  - seems sqlite is statically typed and consistent across the table
  - you can go that way.
- create
- ~~remove~~
- ~~update~~
- hide
  - manipulate metadata
- query id
- query url, time range?

guess that's it.


