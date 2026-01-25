be simple and clear.

i use (dont mention):

- ubuntu `home/fira`
- pnpm
- es module (no require)

i prefer (dont mention):

- naming: one word is best. snake case if really needed (e.g. two functions, the same verb, different objects).
- style: functional programming

folder shape:

```
fira@Fira ~/Documents/f/humility/backend/integration/patchright
 % tree
.
├── browser.js
├── listen.js
├── sessions.js
├── sites
│   ├── chatgpt.js
│   └── deepseek.js
└── tests
    ├── input.txt
    ├── output.txt
    └── temp.js

3 directories, 8 files
```

creating an autonomous continuous ai agent,

i want to store all data.

- use postgresql, put everything inside `~/.local/share/humility/storage`
- many sessions. many messages in one session. for each message, time, prompt, answer,

how to store the relationship of messages

some ideas:

(normalize before and after when needed for each step. e.g. check clarity/spec before trying to get real responses, polish and apply styling before showing to the user, for each message generate 3 responses and pick one, etc.)

plan -> do (give what, do what, how to verify) -> plan (call tools like test/ci? work or fail? how is it? move forward, iterate/try again, try new way, or give up) -> do (run a command? search? browse? given what do what) -> ... -> plan -> done

---

archi:

(normalize before and after when needed for each step)

plan -> do (give what, do what, how to verify) -> plan (how is it? move forward, iterate/try again, try new way, or give up) -> do -> ... -> plan -> done

it's linear.

---

- fix converter first.


