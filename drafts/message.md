Be simple and wise.

No nonsense like "Good question", "Of course", or "Yes". Don't ask follow ups.

Take these defaults, no need to mention like "following your prefrences".

- ubuntu `home/fira`
- zsh
- pnpm
- es module (always named, never default)
- naming: use one english word for public methods. use snake case only if conflicting. never use camel/pascal case.
- style: 
  - functional programming
  - modular and cohesive
  - use an object as params most of the time

creating an autonomous continuous ai agent.

---

```
fira@Fira ~/Documents/f/humility
 % tree -I 'node_modules|legacy'

.
├── backend
│   ├── compute
│   │   ├── agent.js
│   │   ├── ask.js
│   │   ├── limit.js
│   │   ├── parse.js
│   │   ├── prompt.js
│   │   ├── reference.md
│   │   ├── run.js
│   │   ├── state.js
│   │   ├── test
│   │   │   ├── ask.js
│   │   │   ├── chemistry.js
│   │   │   └── parse.js
│   │   └── tool.js
│   ├── connect
│   │   ├── browser.js
│   │   ├── chatgpt.js
│   │   ├── deepseek.js
│   │   ├── listen.js
│   │   ├── ollama.js
│   │   ├── readme.md
│   │   ├── send.js
│   │   ├── sessions.js
│   │   └── test
│   │       ├── browse.js
│   │       └── send.js
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── readme.md
│   ├── reference.md
│   ├── serve
│   │   └── run.js
│   └── store
│       ├── db.js
│       ├── flow.js
│       ├── link.js
│       ├── session.js
│       ├── test
│       │   ├── flow.js
│       │   └── see.js
│       └── thing.js
├── frontend
│   ├── app.jsx
│   ├── design
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── readme.md
│   ├── index.html
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── postcss.config.js
│   ├── readme.md
│   ├── tailwind.config.js
│   ├── tailwind.css
│   └── vite.config.js
├── misc
│   └── document.md
├── notes.md
├── readme.md
└── roadmap.md
```

now, create a chat app.

(app.jsx is empty)

no styling. no css. no tailwind. dont use existing components.

compute/ask.js

```
// compute/ask.js
import { send } from "../connect/send.js";
import * as flow from "../store/flow.js";

export async function ask({ what, where = "chatgpt", timeout }) {
  if (!what || typeof what !== "string") {
    throw new Error("ask: invalid what");
  }

  let answer = null;
  let status = "success";

  try {
    answer = timeout
      ? await Promise.race([
          send(what, where),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("timeout")), timeout)
          ),
        ])
      : await send(what, where);
  } catch (err) {
    status = err.message || "error";
  }

  const step = await flow.write("ask", {
    prompt: what,
    answer,
    status,
    where,
  });

  return {
    id: step.id,
    answer,
  };
}
```

use where = "ollama".

store/flow.js

```
import * as thing from './thing.js';
import * as link from './link.js';
import * as session from './session.js';

let cursor = {
  session: null,
  step: null,
};

export async function create(name) {
  const root = await thing.add('root', {});
  const id = await session.create(name, root.id);
  cursor = { session: id, step: root.id };
  return id;
}

export async function list() {
  return session.list();
}

export async function pick(id) {
  const s = await session.get(id);
  if (!s) throw new Error('flow.pick: invalid session');
  const last = await session.last(s.root_id);
  cursor = { session: id, step: last };
}

export async function step(id) {
  cursor.step = id;
}

export async function write(type, data) {
  const next = await thing.add(type, data);
  await link.add(cursor.step, next.id, 'next');
  cursor.step = next.id;
  return next;
}

export async function read() {
  return thing.get(cursor.step);
}

export async function back() {
  const prev = await link.prev(cursor.step);
  if (prev) cursor.step = prev;
  return cursor.step;
}

export async function view() {
  const s = await session.get(cursor.session);
  const path = await link.path(s.root_id, cursor.step);

  return {
    session: s.id,
    current: cursor.step,
    count: path.length,
    path,
  };
}
```

open the app. (serve/run.js is empty. run it. it opens both the backend and frontend.)

see all sessions (click to continue), a button to create a new session. all messages in plain text (no user/assistant). an input. a send button.

give me all the code.

---

im gonna create a design system.

how to create in the boring proven way, like mui/chakra. what opensource libraries can i use.

what components should i have.

---

im gonna create a design system.

what is shadcn. how to use. should i build on top of that.

(esp lichess, you could only change once and change only your letter cases.)

but i think it's good to reg one for future proof.

---

it looks like

```
<div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="Illyasviel von Einzbern" data-sticker-id="934086439770002236"><img src="blob:https://web.telegram.org/58809d2d-0ebe-4d14-aad4-ae2b8a861c11" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">Illyasviel von Einzbern</div><div class="subtitle">22 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="大盐喵气人语录第一期🩵✨ @vtbcyan" data-sticker-id="4987954960630023533"><img src="blob:https://web.telegram.org/27df8de0-94a4-423d-9d86-c08cd4134e9b" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">大盐喵气人语录第一期🩵✨ @vtbcyan</div><div class="subtitle">32 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><button type="button" class="Button default translucent" aria-label="Cyan's little white drawing board @vtbcyan" title="Cyan's little white drawing board @vtbcyan"><div class="m6XpTzQX sticker-set-cover" style="--_size: 40px;"><img src="blob:https://web.telegram.org/c0c254e6-b1a9-44a4-938d-85893ddaa2c7" class="enA6c8gc opacity-transition slow open shown" alt="" draggable="false"></div></button><div class="multiline-item"><div class="title">Cyan's little white drawing board @vtbcyan</div><div class="subtitle">95 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="Excited" data-sticker-id="447680083532972034"><img src="blob:https://web.telegram.org/0b0563a4-ce65-4efc-b5f4-e8fdd0694496" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">Excited</div><div class="subtitle">15 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><button type="button" class="Button default translucent" aria-label="@ufoludek hating things" title="@ufoludek hating things"><div class="m6XpTzQX sticker-set-cover" style="--_size: 40px;"><img src="blob:https://web.telegram.org/19d9db80-1ce5-46db-8200-915eec60dc75" class="enA6c8gc opacity-transition slow open shown" alt="" draggable="false"></div></button><div class="multiline-item"><div class="title">@ufoludek hating things</div><div class="subtitle">61 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="evilSoCute" data-sticker-id="6120612727929967030"><img src="blob:https://web.telegram.org/37d3156e-2091-4615-bfa1-6fbcb7221a8a" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">evilSoCute</div><div class="subtitle">39 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="Say @cyan_nyan" data-sticker-id="3064272381863264266"><img src="blob:https://web.telegram.org/a767c544-6e85-4c7e-8d08-78fe64830b99" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">Say @cyan_nyan</div><div class="subtitle">57 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="BlueArchive @Alejandrojuntos" data-sticker-id="5012573562846839909"><img src="blob:https://web.telegram.org/bf12542b-727b-4453-926a-fd967ac40ec3" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">BlueArchive @Alejandrojuntos</div><div class="subtitle">44 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="Kobayashi 3" data-sticker-id="6235279850697922511"><img src="blob:https://web.telegram.org/80889535-09e3-4631-9d58-b69993c525b2" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">Kobayashi 3</div><div class="subtitle">95 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><button type="button" class="Button default translucent" aria-label="Cyan Nyan赛小盐 by sazi @vtbcyan" title="Cyan Nyan赛小盐 by sazi @vtbcyan"><div class="m6XpTzQX sticker-set-cover" style="--_size: 40px;"><img src="blob:https://web.telegram.org/e8081607-a134-4a92-b4a7-cd953c7c01c0" class="enA6c8gc opacity-transition slow open shown" alt="" draggable="false"></div></button><div class="multiline-item"><div class="title">Cyan Nyan赛小盐 by sazi @vtbcyan</div><div class="subtitle">24 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><button type="button" class="Button default translucent" aria-label="莉沫包！" title="莉沫包！"><div class="m6XpTzQX sticker-set-cover" style="--_size: 40px;"><img src="blob:https://web.telegram.org/5ba0175f-0ed4-43b4-875d-599b69aeaeb1" class="enA6c8gc opacity-transition slow open shown" alt="" draggable="false"></div></button><div class="multiline-item"><div class="title">莉沫包！</div><div class="subtitle">29 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="哥哥！  @karako_c" data-sticker-id="6298292806251186915"><img src="blob:https://web.telegram.org/be2041e9-46b3-45f4-abad-b097b4c12523" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">哥哥！  @karako_c</div><div class="subtitle">17 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><button type="button" class="Button default translucent" aria-label="可爱盐宝宝 @vtbcyan" title="可爱盐宝宝 @vtbcyan"><div class="m6XpTzQX sticker-set-cover" style="--_size: 40px;"><video autoplay="" class="OZHqKbDL opacity-transition slow open shown" src="blob:https://web.telegram.org/e2aa976a-0939-4c60-80e3-b05664cd5ebb" loop="" disablepictureinpicture=""></video></div></button><div class="multiline-item"><div class="title">可爱盐宝宝 @vtbcyan</div><div class="subtitle">59 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="禁评时代" data-sticker-id="6289644640492589781"><img src="blob:https://web.telegram.org/01ea5615-2a2c-4d7f-9d50-93cd9861248f" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">禁评时代</div><div class="subtitle">72 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><button type="button" class="Button default translucent" aria-label="vahiru next" title="vahiru next"><div class="m6XpTzQX sticker-set-cover" style="--_size: 40px;"><img src="blob:https://web.telegram.org/9b935a1e-1862-4f11-b7af-fe69a8691c3d" class="enA6c8gc opacity-transition slow open shown" alt="" draggable="false"></div></button><div class="multiline-item"><div class="title">vahiru next</div><div class="subtitle">82 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="unsafe pack" data-sticker-id="5179652390571213760"><img src="blob:https://web.telegram.org/195263b6-69f0-4bdc-b42c-764ac0b19402" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">unsafe pack</div><div class="subtitle">55 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="emu cards&amp;cameo (png @clownshi :: @fStikBot" data-sticker-id="5247076127213629700"><img src="blob:https://web.telegram.org/87932f6b-d1ed-4e5d-b073-474066a493c3" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">emu cards&amp;cameo (png @clownshi :: @fStikBot</div><div class="subtitle">102 stickers</div></div></div></div><div class="ListItem StickerSetCard small-icon"><div class="ListItem-button" role="button" tabindex="0"><div class="StickerButton" title="yyyr's PRSK Sticker Set #1" data-sticker-id="6242191509639140492"><img src="blob:https://web.telegram.org/1d394873-63b3-4457-aff1-e8e4cf397208" class="gYSfUe37 sticker-media opacity-transition slow shown open" alt="" draggable="false"></div><div class="multiline-item"><div class="title">yyyr's PRSK Sticker Set #1</div><div class="subtitle">
```

write a console script.

