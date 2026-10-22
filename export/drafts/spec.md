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

- css inlining
- relative url
- pseudo elements
- shadow dom

discard
