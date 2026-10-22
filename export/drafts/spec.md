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


