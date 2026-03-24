the cause of the weird linebreak.

if an element is div, not span, even if it's displayed inline or content (actually inline for text children), it will be a block paragraph.

find alternatives? idk if turndown is the only one. i need more flexible and more control.

is it easy to handle it in turndown: if an element is div, not span, even if it's displayed inline or content (actually inline for text children), it will be a block paragraph. or i could find better alternatives with more control, like ast or the process or something.

---

ux.

think.

can i get what i need when user select something?

or i have to let they copy and paste to my contenteditable or whatever

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

cloc result.

```
 ~ % cd Documents/f/apps/copy
 ...f/apps/copy % cloc . --vcs=git --exclude-lang=YAML,JSON,Markdown
      12 text files.
      12 unique files.
       8 files ignored.

github.com/AlDanial/cloc v 2.06  T=0.05 s (76.8 files/s, 3227.1 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
TypeScript                       3             21              0             78
HTML                             1              4              0             65
-------------------------------------------------------------------------------
SUM:                             4             25              0            143
-------------------------------------------------------------------------------
```
