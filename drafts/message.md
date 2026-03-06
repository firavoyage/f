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

write a shell script on ubuntu.



/usr/share/fonts/opentype/noto

```
python3 -c "from fontTools.ttLib.ttCollection import TTCollection; [f.save(f'font_{i}.ttf') for i, f in enumerate(TTCollection('font.ttc'))]"

python3 -c "from fontTools.ttLib import TTFont; from fontTools.ttLib.ttCollection import TTCollection; ttc = TTCollection(); ttc.fonts = [TTFont(f) for f in ['font1.ttf', 'font2.ttf']]; ttc.save('output.ttc')"
```


