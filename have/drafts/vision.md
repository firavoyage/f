vision

you want a place to save the world, and automate it.

you may have a persistent profile of patchright. one is enough. _though you may create some new ones and set which to use for specific tasks._ you might not be able to automate profiles. use cookies instead.

you may have browser extensions like ublock.

it's generally headed, like normal chromium, to avoid edge cases.

you may set it to be headless if it allows.

on linux, you may plug some virtual display (it's proven, just one display env) to hide the window, or use some wm specific hacks (not recommended).

so you can fetch pages. you have

- initial html
- rendered html

you can have either or both.

it's easier to have pages as file and metadata in db (or yaml).

---

you may read programmtically.

e.g. url -> id[] -> index.html (you may inline base64 for static res, not always useful though)

---

_you can have an extension for main content._

it's easy and it doesnt matter whether it's in scope.

---

a scraping bot would be easy as soon as you can fetch any page.

a naive approach:

- append all links to pending set, excluding
  - currently visited
    - maybe this run, maybe in a time range (or ever)
  - outside current site
    - or certain url structure: url -> boolean
  - too deep
    - you may maintain map url -> depth
    - like, after fetching, you may check its depth to decide whether to append, and if you do you append all w depth + 1
  - too many
    - you may count the pages visited
  - timeout, etc.

you may fetch and update pending set at an interval or dynamically (randomly or specifically)

---

view the snapshot of a site

prefix links

---

list the hierarchy of all cached sites

