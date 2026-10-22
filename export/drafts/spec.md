spec

ui

- open config via userscript menu
  - a textarea of yaml, a flat dict

options

- html/markdown/text
- keep svg
  - idk, maybe for
- keep images
  - you dont wanna see base64 blobs in md right?
  - also, images may not render well wo styling
- normalize empty links
- use prettier
- removing heading on the first line
- ~~intercept paste~~ <!-- irrelevant, it's for copy app, where you can wait for browser to normalize and put copied content into contenteditable or intercept paste directly -->
- remove you said
- remove html attrs

pipeline

- intercept paste
- if they like, copy text directly
- normalize html
  - add information
    - implicit fmt: span of bold styling is bold
    - aria hidden, display none
  - discard information
- convert to md, prettier

add information

- css inlining <!-- if you need md at last regardless and you dont really use raw html, you may just parse what you need (md supports), like text styling. e.g. md doesnt support font size. -->
- relative url
- _pseudo elements_ <!-- they are rarely used for meaningful content, could have -->
- shadow dom

discard

- aria hidden
- wrapper tags
- irrelevant html attrs

<!-- ? i need md -->

when it should keep html...

i guess it's almost always for math latex, just keep svg. doesnt have to strip attrs, they are not generally crazy guys that poison or mess up katex output.

---

when ctrl c,

parse config yaml

get selection common ancestor (or fallback = full page, a css selector in settings), 

- if lower than a threshold (e.g. 300 chars), it will copy selection directly
  - range is hacky and unreliable, and i dont wanna "common ancestor and then strip"

| node converter, which will handle shadow root and inline styling (resolving links: could have)

| remove aria hidden and styling hacks that make it hidden

| make bold styling bold, italic i, ... strike through (everything that md supports)

| md converter, preserve certain elements, like mark, svg

- if possible you may choose whether to preserve everything inside
- even if preserved, it will only preserve a few attrs (styling only maybe)

---

use snake case. use fn statement. write a js fn to get current page selection text or empty string if no selection.

use snake case. use fn statement. write a js fn to get current page selection common ancestor.

use snake case. use fn statement. write a js fn to remove all hidden nodes given a parent node, incl. aria hidden, all css hidden tricks on inline styling.


