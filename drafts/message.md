Take these conventions. You must not mention these styles.

- environment:
  - ubuntu
  - zsh
  - pnpm
- mindset:
  - prefer modern proven tech
- style:
  - follow verb noun naming convention. use one simple english word for all methods whenever possible (not conflicting).
  - always use snake case. never use camel case or pascal case.
  - use functional programming
  - be modular and cohesive
  - prefer object params
  - prefer async
  - use es module, always named, never default.
  - use jsdoc.
  - avoid `undefined` or `null`. just omit.
  - avoid try catch as possible. use result instead.
  - if you really have to catch (like external libraries that throw), catch on high level.
  - avoid throw completely. use log instead.
  - avoid nested if. if err, return/continue/break.
  - never add type check like `typeof` or `instanceof`.
- notes:
  - add logging.
  - import everything needed. no unused imports. be careful with path of deeply nested files.
  - use node assert when testing pure fn.
  - give me full working code of all changed files.

---

humility, an autonomous continuous ai agent.

---

folder shape.

```
 ...f/humility/backend % tree -I "node_modules"         
.
├── compute
│   ├── act.js
│   ├── ask.js
│   ├── begin.js
│   ├── decide.js
│   ├── load.js
│   ├── loop.js
│   ├── parse.js
│   ├── plan.js
│   ├── prepare.js
│   ├── rest.js
│   ├── spec.md
│   ├── test
│   │   ├── act.js
│   │   ├── ask.js
│   │   ├── computer_graphics.js
│   │   ├── load.js
│   │   ├── parse.js
│   │   ├── prepare.js
│   │   └── tools.js
│   └── tools
│       ├── edit.js
│       ├── read.js
│       ├── shell.js
│       └── write.js
├── connect
│   ├── browser.js
│   ├── chatgpt.js
│   ├── deepseek.js
│   ├── listen.js
│   ├── mock.js
│   ├── ollama.js
│   ├── readme.md
│   ├── send.js
│   ├── sessions.js
│   └── test
│       ├── browse.js
│       └── send.js
├── lib
│   └── log.js
├── package.json
├── readme.md
├── reference.md
├── serve
│   └── serve.js
├── spec.md
├── store
│   ├── index.js
│   ├── init.js
│   ├── moves.js
│   ├── schema.js
│   ├── sessions.js
│   └── test
│       └── test.js
└── types.d.ts

10 directories, 46 files
```

---

types

...

log

...

---

on ubuntu how to prefer prefer noto sans cjk sc as fallback font.

---

```sh
mkdir -p /etc/profile.d
sudo tee /etc/profile.d/snap-fonts.sh > /dev/null <<EOF
export FONTCONFIG_FILE=/etc/fonts/fonts.conf
export FONTCONFIG_PATH=/etc/fonts
EOF
```

result:

- snap fonts sh: fail
- export on zshrc/shell: fail
- export inside snap shell: work

how to fix: make it default for all snap apps.

---

on ubuntu when i scroll with touchpad and alt tab without removing my fingers, the inertia carries on. how to fix. 

---

make snap run this everytime before starting any app

```
 ~ % export FONTCONFIG_FILE=/etc/fonts/fonts.conf
export FONTCONFIG_PATH=/etc/fonts
 ~ % snap run --shell foliate -c 'fc-match -s sans:lang=zh | head -n 5'
NotoSans-Regular.ttf: "Noto Sans" "Regular"
NotoSansCJK-Regular.ttc: "Noto Sans CJK JP" "Regular"
NotoSansAdlam-Regular.ttf: "Noto Sans Adlam" "Regular"
NotoSansArabic-Regular.ttf: "Noto Sans Arabic" "Regular"
NotoSansArmenian-Regular.ttf: "Noto Sans Armenian" "Regular"
 ~ % snap run --shell foliate -c 'export FONTCONFIG_FILE=/etc/fonts/fonts.conf; export FONTCONFIG_PATH=/etc/fonts; fc-match -s sans:lang=zh | head -n 5'
NotoSansCJK-Regular.ttc: "Noto Sans CJK SC" "Regular"
DroidSansFallbackFull.ttf: "Droid Sans Fallback" "Regular"
FreeSerif.ttf: "FreeSerif" "Regular"
FreeSans.ttf: "FreeSans" "Regular"
FreeMono.ttf: "FreeMono" "Regular"
```

---

fix

```
Extracting fonts from TTC file...
Dumping "/home/fira/NotoSansCJK-Regular.ttc" to "/home/fira/NotoSansCJK-Regular.ttx"...
ERROR: specify a font number between 0 and 9 (inclusive)
zsh: no matches found: /home/fira/modified/extracted_fonts/*.ttf
```


