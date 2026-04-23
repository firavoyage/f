the cause of the weird linebreak.

if an element is div, not span, even if it's displayed inline or content (actually inline for text children), it will be a block paragraph.

find alternatives? idk if turndown is the only one. i need more flexible and more control.

is it easy to handle it in turndown: if an element is div, not span, even if it's displayed inline or content (actually inline for text children), it will be a block paragraph. or i could find better alternatives with more control, like ast or the process or something.

decision: use original html. dont fight. html is a superset, which contains more infomation. you can convert later.

---

ux.

can i get what i need when user select something?

or i have to let they copy and paste to my contenteditable or whatever

(be simple. copy when selecting is too much magic. i dont wanna mess up with extension/userscripts quirks and make the bundler work for that. seems libs are not pure either, they need dom runtime.)

---

ux.

you are not gonna mess up with selections and userscripts. build the core first.

page:

```
paste.

---

- to markdown
- to clean html
- to html
```

(a progress bar could be better. markdown is more extreme than clean html.)

---

render.

i could add whitespace pre wrap.

but seems it creates new quirks (markdown inside html, like the indentation of nested lists are also rendered as spaces)

decision: no.

---

simplify.

some web stuff are nonsense as a document. 

like buttons. interactives things (except links).

i could remove them.

though, some interactive widgets might carry infomation?

decision: maybe.

upd:

i could replace button (or textarea, whatever), to span. but the layout might shift (display, bg color, color...).

decision: not now.

---

simplify.

it's kind of hard to "remove all bg color and color on all elements"

(like, you can put bg color in background color. sometimes bg color are needed, like for emphasis.)

i could remove all color (wherever they are, since web is robust against partial content) similar to black and white in cos. but i dont wanna be that clever.

decision: no.

---

if prettier is too aggressive, we can stay with remark with some config.

e.g.

- unordered list `-`
- italic `_`
- indentation `2 spaces`

but i suppose remark might be a bit conservative.

indentation is not really easy and straight forward.

---
