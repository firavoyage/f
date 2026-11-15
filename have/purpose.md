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

15

it takes 16s for dcl when you (sync) read and deserialize (yaml) index, iterate to list for every url.

744ms when you cache the index now.

what if you preprocess it to a map?

e.g. iterate, for every url you see, map to id. the last will naturally win.

fine and you dont need resolve id any more.

400ms avg now.

---

well, 

**devtool simply just style dcl in red, and load in green.**

it doesnt mean your 100ms dcl is poor!

---

view the snapshot of a site

rp the links.

if you can read (static), you can easily do that.

- show nothing wo param
- read the page (or "not archived") of such param, rp body innerhtml
- intercept link to rp such param

doesnt feel you have to live proxy.

you may just swap some links to caches. (dont worry, you have a copy of static aside.)
i.e. webpage/ab/cd/foo/index.html -> webpage/ef/gf/bar/index.html, you cd .. three times before diving into the new index

btw, you may have scalable id for results aw.
if you have 1m for each result (e.g. plain text htmls), 1m results is just 1g. typically easy to reach and unscable.

you can absolutely postprocess for this.

well, you may proxy anyway. it would be even easier. you dont have to make it a react app. you can just serve from the starting point of such results, serve everything static, and inject some navigation script.

conclusion

- you can read cache url: html | nil
  - it doesnt matter whether to fetch in real time or return nil
  - complete traveral is expected
- you host a server `?url=...`
  - dont get trapped! you dont always need react vite spa.
  - you read cache and return html
  - you inject navigation js
    - you may take a brute force approach, e.g. function to string, find and replace head tag (if you could not append after closing html tag), and call it

impl

a simple approach would be to serve id specifically, and replace all links directly if possible. ids are permalink. urls generally mean last cache, which is instable.

---

view list of all snapshots of some url

---

dk if the console only script would work for cookies.

anyway if it works it works.

---

wtf, ai assitance icon hardcoded on devtools.

"only avail when you sign in to google on chrome".

---

there are actually a bunch of "unsupported flags" and chrome itself is flawed and heaviliy commercialized by google.

dont fight it.

abstract it. leave it. do not workaround w specific hacks.

---

wow, what if you can easily have 40k lines of yaml, just after saving a few sites...

sqlite.


