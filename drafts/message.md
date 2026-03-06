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

<!-- log out log in! -->

---

on ubuntu my touchpad scrolling sometimes behave weird. like jumping. how to fix.

```
 ~ % xinput list
⎡ Virtual core pointer                          id=2    [master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
⎜   ↳ MSFT0001:00 04F3:31BD Mouse               id=9    [slave  pointer  (2)]
⎜   ↳ MSFT0001:00 04F3:31BD Touchpad            id=10   [slave  pointer  (2)]
⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
    ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
    ↳ Video Bus                                 id=6    [slave  keyboard (3)]
    ↳ Power Button                              id=7    [slave  keyboard (3)]
    ↳ Ideapad extra buttons                     id=8    [slave  keyboard (3)]
    ↳ AT Translated Set 2 keyboard              id=11   [slave  keyboard (3)]
 ~ % xinput list-props 10
Device 'MSFT0001:00 04F3:31BD Touchpad':
        Device Enabled (171):   1
        Coordinate Transformation Matrix (173): 1.000000, 0.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000, 0.000000, 1.000000
        libinput Tapping Enabled (327): 1
        libinput Tapping Enabled Default (328): 0
        libinput Tapping Drag Enabled (329):    1
        libinput Tapping Drag Enabled Default (330):    1
        libinput Tapping Drag Lock Enabled (331):       0
        libinput Tapping Drag Lock Enabled Default (332):       0
        libinput Tapping Button Mapping Enabled (333):  1, 0
        libinput Tapping Button Mapping Default (334):  1, 0
        libinput Natural Scrolling Enabled (300):       1
        libinput Natural Scrolling Enabled Default (301):       0
        libinput Disable While Typing Enabled (335):    0
        libinput Disable While Typing Enabled Default (336):    1
        libinput Scroll Methods Available (302):        1, 1, 0
        libinput Scroll Method Enabled (303):   1, 0, 0
        libinput Scroll Method Enabled Default (304):   1, 0, 0
        libinput Click Methods Available (337): 1, 1
        libinput Click Method Enabled (338):    0, 1
        libinput Click Method Enabled Default (339):    1, 0
        libinput Middle Emulation Enabled (340):        0
        libinput Middle Emulation Enabled Default (341):        0
        libinput Accel Speed (309):     1.000000
        libinput Accel Speed Default (310):     0.000000
        libinput Accel Profiles Available (311):        1, 1, 1
        libinput Accel Profile Enabled (312):   1, 0, 0
        libinput Accel Profile Enabled Default (313):   1, 0, 0
        libinput Accel Custom Fallback Points (314):    <no items>
        libinput Accel Custom Fallback Step (315):      0.000000
        libinput Accel Custom Motion Points (316):      <no items>
        libinput Accel Custom Motion Step (317):        0.000000
        libinput Accel Custom Scroll Points (318):      <no items>
        libinput Accel Custom Scroll Step (319):        0.000000
        libinput Left Handed Enabled (320):     0
        libinput Left Handed Enabled Default (321):     0
        libinput Send Events Modes Available (285):     1, 1
        libinput Send Events Mode Enabled (286):        0, 0
        libinput Send Events Mode Enabled Default (287):        0, 0
        Device Node (288):      "/dev/input/event5"
        Device Product ID (289):        1267, 12733
        libinput Drag Lock Buttons (322):       <no items>
        libinput Horizontal Scroll Enabled (323):       1
        libinput Scrolling Pixel Distance (324):        15
        libinput Scrolling Pixel Distance Default (325):        15
        libinput High Resolution Wheel Scroll Enabled (326):    1
```


