purpose

nov 2026

14

essentially perf engineering if you choose sqlite now.

---

interesting, undefined/omitted color scheme is not the same as nil color scheme on playwright.

omission means default which is light.

nil... or no pref, that means system.

---

**do not care tsism! it's flawed. it's flawed. let it go.**

---

init db

---

setup persistent browser profile

support xvfb toggle

---

fetch page

create result object

store html source

store rendered page

---

fetch assets

_store binaries_

you may make it content addressed on filename. you dont necessarily have to symlink right now.

_you may save url and url hash alongside._

fine, easy.

append object index

- id # content id
- url # you may not have to derive hash right now.

---

legacy? release instead.

~~typically you do not , but rather release before change.~~

well just call it legacy. i dont really release it.

---

dont feel i have to make "index.html" cas.

---

symlink storage

you may copy all assets to a unified storage, e.g. object/storage

and symlink the folder.

you already know the specific deps of one site.

---

traverse a site

traverse(fetch, url, options)

- should visit url -> boolean (default: same site)
- max depth (0 indexed) = inf
- max page = inf
- max duration (in sec) = inf
- interval (in sec) = 1

i dont have to specify the algorithm. (e.g. my naive set, url -> depth map, plus is visited flags)

---

list all snapshots of a site

you may just render md.

e.g.

```
# [title](site)

- [2026-11-14 22:40:21](snapshot)
- ...
```

typically like project humility


