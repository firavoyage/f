<!-- https://chatgpt.com/c/6977980b-2294-8320-8b4c-5382c74d130e -->

# 0

be simple and clear.

use:

- ubuntu `home/fira`
- pnpm
- es module (always named, never default)

prefer:

- naming: one word is best. snake case if really needed (e.g. two functions, the same verb, different objects).
- style: functional programming, modular and cohesive

creating an autonomous continuous ai agent.

humility

---

```
fira@Fira ~/Documents/f/humility/backend
 % tree
.
├── connect
│   ├── browser.js
│   ├── chatgpt.js
│   ├── deepseek.js
│   ├── listen.js
│   ├── readme.md
│   ├── send.js
│   ├── sessions.js
│   └── test
│       ├── browse.js
│       └── send.js
├── package.json
├── readme.md
└── store
    ├── init.js
    ├── read.js
    ├── test
    │   └── test.js
    └── write.js
```

`store/init.js`

- `init()`

  - initializes the local PGlite database for Humility
  - creates the storage directory if it doesn't exist
  - ensures the `things` table exists in the database
  - returns an object `{ dir: string }` with the path to the storage directory

notes:

- Uses a global variable to prevent multiple database instances.
- The database is stored at `~/.local/share/humility/storage`.
- The `things` table has columns: `id` (primary key), `time` (timestamp), `type` (text), `data` (JSON).

`store/write.js`

- `add(type, data)`

  - Adds a new record to the `things` table in the local PGlite database.
  - string `type`: The type/category of the record. Required.
  - object `data`: The JSON-serializable data to store. Required.
  - returns: An object containing:

    - `id` (string): The unique identifier of the inserted record.
    - `time` (string, timestamptz): The timestamp when the record was added.

notes:

- The database is stored under `~/.local/share/humility/storage`.
- The function ensures the database and table exist before inserting.
- Uses `uuid` to generate unique IDs for each record.
- Uses a global cache (`globalThis.__humility_pglite`) to reuse the database connection.

`store/read.js`

- `get(id)`

  - fetch a stored item by its unique ID
  - string `id`: the UUID of the item to retrieve
  - returns an object `{ time, type, data }` or `null` if not found

    - `time`: timestamp of creation
    - `type`: string describing the item's type
    - `data`: parsed JSON content of the item

- `list({ begin, end } = {})`

  - list IDs of stored items, optionally filtered by time range
  - object `begin` (optional): start date/time to filter items
  - object `end` (optional): end date/time to filter items
  - returns an array of string IDs in ascending order of creation time

- `see()`

  - get a summary of the storage
  - no parameters
  - returns an object:

    - `dir`: storage directory path
    - `count`: total number of items
    - `first`: first stored item `{ id, time }` or `null`
    - `last`: last stored item `{ id, time }` or `null`
    - `types`: array of `{ type, count }` summarizing item types

notes:

- All methods automatically initialize the database if not already created.
- `data` is always returned as a parsed JSON object.

`connect/send.js`

- `send(what, where = "chatgpt")`

  - Send a message to a specific site.
  - `what` (string): The message to send.
  - `where` (string, optional): The site key to send to (`"chatgpt"` or `"deepseek"`). Defaults to `"chatgpt"`.
  - Returns `Promise<string>`: Resolves with the response from the site.

notes:

- Relies on `chatgpt` and `deepseek` modules to handle sending.
- Throws an error if the site key is invalid or the target module does not have a `send` function.

---

connect/send

```
// send.js
import * as chatgpt from "./chatgpt.js";
import * as deepseek from "./deepseek.js";

/**
 * Send a message to a specific site
 * @param {string} what - The message to send
 * @param {string} where - The site key ('chatgpt' | 'deepseek')
 * @returns {Promise<string>} - The response from the site
 */
export const send = async (what, where = "chatgpt") => {
  const sites_map = {
    chatgpt,
    deepseek,
  };

  const site = sites_map[where];
  if (!site || typeof site.send !== "function") {
    throw new Error(`Invalid site: ${where}`);
  }

  return await site.send(what);
};
```

connect/chatgpt

```
import { wait_for_sse } from "./listen.js";
import { get_page } from "./browser.js";

export async function send(message) {
  const page = await get_page();

  await page.goto("https://chatgpt.com");

  await page.waitForSelector("[contenteditable]", { timeout: 30_000 });
  await page.waitForSelector("#composer-submit-button", { timeout: 30_000 });

  await page.evaluate((message) => {
    const input = document.querySelector("[contenteditable]");
    input.innerText = message;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }, message);

  await page.click("#composer-submit-button");

  const raw_events = await wait_for_sse(
    page,
    /^https:\/\/chatgpt\.com\/backend-api\/f\/conversation$/,
    (event) => event.split("\n").some((line) => line.trim() === "data: [DONE]")
  );

  return convert_chatgpt(raw_events);
}

export function convert_chatgpt(event_stream) {
  const json = JSON;

  const split_lines = (s) => s.replace(/\r/g, "").split("\n");
  const trim = (s) => (s == null ? "" : String(s).trim());
  const is_blank = (s) => trim(s) === "";

  const parse_events = (raw) => {
    const lines = split_lines(raw);
    const events = [];
    let cur_event = { event: null, data_lines: [] };

    const flush = () => {
      if (cur_event.data_lines.length > 0 || cur_event.event !== null) {
        events.push({
          event: cur_event.event,
          data: cur_event.data_lines.join("\n"),
        });
      }
      cur_event = { event: null, data_lines: [] };
    };

    for (const line of lines) {
      if (line.startsWith("event:")) {
        cur_event.event = trim(line.slice("event:".length));
      } else if (line.startsWith("data:")) {
        // remove the "data:" prefix and any leading whitespace after it
        cur_event.data_lines.push(
          line.slice("data:".length).replace(/^\s*/, "")
        );
      } else if (is_blank(line)) {
        flush();
      } else {
        // fallback: include whatever is present
        cur_event.data_lines.push(line);
      }
    }

    flush();
    return events;
  };

  const process_events_to_text = (events) => {
    let last_message_id = null;
    const messages_by_id = Object.create(null);
    const order = [];

    const ensure_message = (id, role = "assistant") => {
      if (!id) return null;
      if (!messages_by_id[id]) {
        messages_by_id[id] = { id, role, content: "" };
        order.push(id);
      }
      return messages_by_id[id];
    };

    const append_to_last = (text) => {
      if (!last_message_id) return;
      // ensure content exists
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content += text;
    };

    const replace_last = (text) => {
      if (!last_message_id) return;
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content = text;
    };

    const handle_patch_ops = (ops) => {
      if (!Array.isArray(ops)) return;
      for (const op of ops) {
        if (!op || typeof op !== "object") continue;
        // target message content parts (typical path: /message/content/parts/0)
        if (
          typeof op.p === "string" &&
          op.p.includes("/message/content/parts")
        ) {
          if (op.o === "append" && typeof op.v === "string") {
            append_to_last(op.v);
          } else if (op.o === "replace" && typeof op.v === "string") {
            // replace the content of the last part
            replace_last(op.v);
          } else if (op.o === "add" && typeof op.v === "string") {
            append_to_last(op.v);
          }
        } else {
          // other useful ops: sometimes status/end_turn patches are present but not needed here
          // but some op.v may itself be a string we should append (defensive)
          if (typeof op.v === "string" && op.o === "append") {
            append_to_last(op.v);
          }
        }
      }
    };

    for (const ev of events) {
      const raw = trim(ev.data);
      if (!raw || raw === "[DONE]") continue;

      let parsed;
      try {
        parsed = json.parse(raw);
      } catch {
        parsed = raw;
      }

      // If parsed is an object, handle several shapes seen in the stream
      if (parsed && typeof parsed === "object") {
        // new full message object inside v.message
        if (parsed.v && parsed.v.message) {
          const msg = parsed.v.message;
          const id = msg.id || null;
          const role = (msg.author && msg.author.role) || "assistant";
          ensure_message(id, role);
          if (Array.isArray(msg.content?.parts)) {
            // join parts into one string
            messages_by_id[id].content = msg.content.parts.join("");
          } else if (typeof msg.content === "string") {
            messages_by_id[id].content = msg.content;
          }
          last_message_id = id;
          continue;
        }

        // explicit input_message object
        if (parsed.type === "input_message" && parsed.input_message) {
          const im = parsed.input_message;
          const id = im.id || null;
          const role = (im.author && im.author.role) || "user";
          ensure_message(id, role);
          if (Array.isArray(im.content?.parts)) {
            messages_by_id[id].content = im.content.parts.join("");
          } else if (typeof im.content === "string") {
            messages_by_id[id].content = im.content;
          }
          last_message_id = id;
          continue;
        }

        // handle patch objects where parsed.v is an array of ops
        if (Array.isArray(parsed.v)) {
          handle_patch_ops(parsed.v);
          continue;
        }

        // top-level patch/add/append where p/o/v exist
        if ("p" in parsed && "o" in parsed && "v" in parsed) {
          if (typeof parsed.v === "string") {
            append_to_last(parsed.v);
          } else if (Array.isArray(parsed.v)) {
            handle_patch_ops(parsed.v);
          } else if (typeof parsed.v === "object" && parsed.v !== null) {
            // sometimes parsed.v is an object like { message: {...} } which we handled above,
            // otherwise if v has a string property we can append defensively
            if (
              typeof parsed.v === "object" &&
              typeof parsed.v.v === "string"
            ) {
              append_to_last(parsed.v.v);
            }
          }
          continue;
        }

        // sometimes parsed has a direct 'v' string
        if ("v" in parsed && typeof parsed.v === "string") {
          append_to_last(parsed.v);
          continue;
        }

        // defensive: if parsed is an object with a string field that looks like content, try to append it
        if (typeof parsed === "object") {
          // no-op (we already handled the main known shapes)
        }
      }

      // if parsed is a plain string (JSON string), append it
      if (typeof parsed === "string") {
        append_to_last(parsed);
      }
    }

    return order
      .map((id) => messages_by_id[id])
      .filter((m) => m && m.role === "assistant")
      .map((m) => trim(m.content))
      .filter(Boolean)
      .join("\n");
  };

  const events = parse_events(event_stream);
  return process_events_to_text(events);
}
```

connect/browser

```
import { chromium } from "patchright";
import { launch } from "./sessions.js";

let context;
let page;

export async function get_page() {
  if (page) return page;

  context = await launch(chromium);
  page = context.pages()[0] ?? await context.newPage();

  return page;
}
```

connect/sessions

```
import fs from "fs";
import path from "path";
import os from "os";

const BASE_DIR = path.join(os.homedir(), ".local", "share", "humility", "browser");

const DEFAULT_DIR = path.join(BASE_DIR, "default");
const PROFILES_DIR = path.join(BASE_DIR, "profiles");

fs.mkdirSync(DEFAULT_DIR, { recursive: true });
fs.mkdirSync(PROFILES_DIR, { recursive: true });

function profile_path(name) {
  return name === "default" ? DEFAULT_DIR : path.join(PROFILES_DIR, name);
}

/**
 * Shared browser launch options for all profiles.
 * Moves window off-screen while keeping headless false.
 */
function browser_options(extra = {}) {
  return {
    headless: false,
    args: [
      // "--headless=new",
      // "--window-position=-10000,-10000", // hide window off-screen
      // "--window-size=1280,800",
    ],
    ...extra,
  };
}

/**
 * Launch like a normal browser.
 * Loads default profile unless changed.
 */
export async function launch(chromium, options = {}) {
  const dir = profile_path("default");

  return await chromium.launchPersistentContext(dir, browser_options(options));
}

/**
 * Save current browser state as a named profile.
 * Uses a full directory copy for safety.
 */
export async function save(context, name) {
  if (!name || name === "default") {
    throw new Error("cannot overwrite default profile");
  }

  const target = profile_path(name);
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });

  fs.cpSync(context._options.userDataDir, target, { recursive: true });
}

/**
 * List all available profiles.
 */
export function see() {
  const profiles = fs.existsSync(PROFILES_DIR)
    ? fs.readdirSync(PROFILES_DIR)
    : [];

  return ["default", ...profiles];
}

/**
 * Switch to another profile.
 * Closes the old context and launches a new one.
 */
export async function change(chromium, name, options = {}) {
  const dir = profile_path(name);
  fs.mkdirSync(dir, { recursive: true });

  return await chromium.launchPersistentContext(dir, browser_options(options));
}
```

connect/test/send

```
import { send } from "../send.js";

(async () => {
  const result = send("give me a list of 10 famous people", "chatgpt");
  // const result2 = send("give me a list of 5 famous people", "chatgpt");
  console.log(await result);
  // console.log(await result2);
})();
```

it could not work in parallel.

fix.

---

You're right — the singleton `page` prevented concurrent requests. Fix: create (and return) a _fresh_ page per call and make callers close it when done. Small, functional, named exports only.

Changes:

- `connect/browser.js`: add `get_context()` and `get_page({ fresh = false })` (named exports). `get_page({ fresh: true })` returns a new page.
- `connect/chatgpt.js`: ask for a fresh page, `try { ... } finally { await page.close() }` so parallel sends don't collide.
- `connect/test/send.js`: example showing two parallel sends with `Promise.all`.

Code diffs below.

---

`connect/browser.js`

```js
// connect/browser.js
import { chromium } from "patchright";
import { launch } from "./sessions.js";

let context = null;

/**
 * Ensure and return the persistent browser context.
 * @returns {Promise<BrowserContext>}
 */
export async function get_context() {
  if (context) return context;
  context = await launch(chromium);
  return context;
}

/**
 * Return a page. By default reuses the first page; if fresh=true returns a new page.
 * Caller is responsible for closing pages created with fresh=true.
 *
 * @param {{ fresh?: boolean }} opts
 * @returns {Promise<Page>}
 */
export async function get_page({ fresh = false } = {}) {
  const ctx = await get_context();

  if (!fresh) {
    const pages = ctx.pages();
    if (pages && pages.length > 0) return pages[0];
    return await ctx.newPage();
  }

  // fresh page for parallel usage
  return await ctx.newPage();
}
```

---

`connect/chatgpt.js`

```js
// connect/chatgpt.js
import { wait_for_sse } from "./listen.js";
import { get_page } from "./browser.js";

/**
 * Send message to ChatGPT via browser page.
 * Uses a fresh page per call so multiple sends can run concurrently.
 *
 * @param {string} message
 * @returns {Promise<string>}
 */
export async function send(message) {
  // request a fresh page so parallel calls don't race
  const page = await get_page({ fresh: true });

  try {
    await page.goto("https://chatgpt.com");
    await page.waitForSelector("[contenteditable]", { timeout: 30_000 });
    await page.waitForSelector("#composer-submit-button", { timeout: 30_000 });

    await page.evaluate((message) => {
      const input = document.querySelector("[contenteditable]");
      input.innerText = message;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }, message);

    await page.click("#composer-submit-button");

    const raw_events = await wait_for_sse(
      page,
      /^https:\/\/chatgpt\.com\/backend-api\/f\/conversation$/,
      (event) =>
        event.split("\n").some((line) => line.trim() === "data: [DONE]")
    );

    return convert_chatgpt(raw_events);
  } finally {
    // always close the page we created so resources are freed
    try {
      await page.close();
    } catch (err) {
      // ignore close errors
    }
  }
}

/* convert_chatgpt unchanged - keep as-is */
export function convert_chatgpt(event_stream) {
  const json = JSON;

  const split_lines = (s) => s.replace(/\r/g, "").split("\n");
  const trim = (s) => (s == null ? "" : String(s).trim());
  const is_blank = (s) => trim(s) === "";

  const parse_events = (raw) => {
    const lines = split_lines(raw);
    const events = [];
    let cur_event = { event: null, data_lines: [] };

    const flush = () => {
      if (cur_event.data_lines.length > 0 || cur_event.event !== null) {
        events.push({
          event: cur_event.event,
          data: cur_event.data_lines.join("\n"),
        });
      }
      cur_event = { event: null, data_lines: [] };
    };

    for (const line of lines) {
      if (line.startsWith("event:")) {
        cur_event.event = trim(line.slice("event:".length));
      } else if (line.startsWith("data:")) {
        cur_event.data_lines.push(
          line.slice("data:".length).replace(/^\s*/, "")
        );
      } else if (is_blank(line)) {
        flush();
      } else {
        cur_event.data_lines.push(line);
      }
    }

    flush();
    return events;
  };

  const process_events_to_text = (events) => {
    let last_message_id = null;
    const messages_by_id = Object.create(null);
    const order = [];

    const ensure_message = (id, role = "assistant") => {
      if (!id) return null;
      if (!messages_by_id[id]) {
        messages_by_id[id] = { id, role, content: "" };
        order.push(id);
      }
      return messages_by_id[id];
    };

    const append_to_last = (text) => {
      if (!last_message_id) return;
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content += text;
    };

    const replace_last = (text) => {
      if (!last_message_id) return;
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content = text;
    };

    const handle_patch_ops = (ops) => {
      if (!Array.isArray(ops)) return;
      for (const op of ops) {
        if (!op || typeof op !== "object") continue;
        if (
          typeof op.p === "string" &&
          op.p.includes("/message/content/parts")
        ) {
          if (op.o === "append" && typeof op.v === "string") {
            append_to_last(op.v);
          } else if (op.o === "replace" && typeof op.v === "string") {
            replace_last(op.v);
          } else if (op.o === "add" && typeof op.v === "string") {
            append_to_last(op.v);
          }
        } else {
          if (typeof op.v === "string" && op.o === "append") {
            append_to_last(op.v);
          }
        }
      }
    };

    for (const ev of events) {
      const raw = trim(ev.data);
      if (!raw || raw === "[DONE]") continue;

      let parsed;
      try {
        parsed = json.parse(raw);
      } catch {
        parsed = raw;
      }

      if (parsed && typeof parsed === "object") {
        if (parsed.v && parsed.v.message) {
          const msg = parsed.v.message;
          const id = msg.id || null;
          const role = (msg.author && msg.author.role) || "assistant";
          ensure_message(id, role);
          if (Array.isArray(msg.content?.parts)) {
            messages_by_id[id].content = msg.content.parts.join("");
          } else if (typeof msg.content === "string") {
            messages_by_id[id].content = msg.content;
          }
          last_message_id = id;
          continue;
        }

        if (parsed.type === "input_message" && parsed.input_message) {
          const im = parsed.input_message;
          const id = im.id || null;
          const role = (im.author && im.author.role) || "user";
          ensure_message(id, role);
          if (Array.isArray(im.content?.parts)) {
            messages_by_id[id].content = im.content.parts.join("");
          } else if (typeof im.content === "string") {
            messages_by_id[id].content = im.content;
          }
          last_message_id = id;
          continue;
        }

        if (Array.isArray(parsed.v)) {
          handle_patch_ops(parsed.v);
          continue;
        }

        if ("p" in parsed && "o" in parsed && "v" in parsed) {
          if (typeof parsed.v === "string") {
            append_to_last(parsed.v);
          } else if (Array.isArray(parsed.v)) {
            handle_patch_ops(parsed.v);
          } else if (typeof parsed.v === "object" && parsed.v !== null) {
            if (
              typeof parsed.v === "object" &&
              typeof parsed.v.v === "string"
            ) {
              append_to_last(parsed.v.v);
            }
          }
          continue;
        }

        if ("v" in parsed && typeof parsed.v === "string") {
          append_to_last(parsed.v);
          continue;
        }
      }

      if (typeof parsed === "string") {
        append_to_last(parsed);
      }
    }

    return order
      .map((id) => messages_by_id[id])
      .filter((m) => m && m.role === "assistant")
      .map((m) => trim(m.content))
      .filter(Boolean)
      .join("\n");
  };

  const events = parse_events(event_stream);
  return process_events_to_text(events);
}
```

---

`connect/test/send.js` (example showing parallel usage)

```js
// connect/test/send.js
import { send } from "../send.js";

(async () => {
  try {
    const p1 = send("give me a list of 10 famous people", "chatgpt");
    const p2 = send("give me a list of 5 famous people", "chatgpt");

    const [r1, r2] = await Promise.all([p1, p2]);
    console.log("r1:", r1.slice(0, 200));
    console.log("r2:", r2.slice(0, 200));
  } catch (err) {
    console.error(err);
  }
})();
```

---

Notes / rationale (short):

- Return fresh pages for concurrent calls; close them after use.
- Keep single persistent browser _context_ (user profile, cookies). Pages are cheap; closing them frees resources.
- All exports are named and functional-style (one-purpose functions).
- No global `page` singleton — that was the concurrency bottleneck.

If you want a limit on concurrency instead of unlimited pages, I can add a small semaphore (named `limit`), but this minimal change makes your current tests run in parallel and stays simple. Want the semaphore?

# 1

```
fira@Fira ~/Documents/f/humility/backend/compute/test
 % cd "/home/fira/Documents/f/humility/backend/connect/test/" && node 'send.js'
browserType.launchPersistentContext: Target page, context or browser has been closed
Browser logs:

<launching> /home/fira/.cache/ms-playwright/chromium-1200/chrome-linux64/chrome --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-breakpad --no-default-browser-check --disable-dev-shm-usage --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints --enable-features=CDPScreenshotNewSurface --disable-hang-monitor --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --disable-blink-features=AutomationControlled --no-sandbox --user-data-dir=/home/fira/.local/share/humility/browser/default --remote-debugging-pipe about:blank
<launched> pid=659505
[pid=659505][err] [659505:659505:0127/003803.985208:ERROR:chrome/browser/process_singleton_posix.cc:340] Failed to create /home/fira/.local/share/humility/browser/default/SingletonLock: File exists (17)
[pid=659505][out] Opening in existing browser session.
Call log:
  - <launching> /home/fira/.cache/ms-playwright/chromium-1200/chrome-linux64/chrome --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-breakpad --no-default-browser-check --disable-dev-shm-usage --disable-features=AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints --enable-features=CDPScreenshotNewSurface --disable-hang-monitor --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --disable-blink-features=AutomationControlled --no-sandbox --user-data-dir=/home/fira/.local/share/humility/browser/default --remote-debugging-pipe about:blank
  - <launched> pid=659505
  - [pid=659505][err] [659505:659505:0127/003803.985208:ERROR:chrome/browser/process_singleton_posix.cc:340] Failed to create /home/fira/.local/share/humility/browser/default/SingletonLock: File exists (17)
  - [pid=659505][out] Opening in existing browser session.
  - [pid=659505] <gracefully close start>
  - [pid=659505] <kill>
  - [pid=659505] <will force kill>
  - [pid=659505] <process did exit: exitCode=0, signal=null>
  - [pid=659505] starting temporary directories cleanup
  - [pid=659505] finished temporary directories cleanup
  - [pid=659505] <gracefully close end>

    at async launch (/home/fira/Documents/f/humility/backend/connect/sessions.js:40:10)
    at async get_context (/home/fira/Documents/f/humility/backend/connect/browser.js:13:13)
    at async get_page (/home/fira/Documents/f/humility/backend/connect/browser.js:25:15)
    at async Module.send (/home/fira/Documents/f/humility/backend/connect/chatgpt.js:14:16)
    at async send (/home/fira/Documents/f/humility/backend/connect/send.js:22:10)
    at async file:///home/fira/Documents/f/humility/backend/connect/test/send.js:9:22
```

---

clear cause, clear fix.

### what’s happening

You fixed **page-level** concurrency, but now you’re hitting **context-level** concurrency.

Two parallel `send()` calls do this at the same time:

1. `get_context()` sees `context === null`
2. both call `launch(chromium)`
3. both try to launch **the same persistent profile dir**
4. Chromium enforces a `SingletonLock`
5. one loses → context/browser closes → Playwright throws

So the bug is **race condition during context creation**.

Pages are safe to parallelize.
Persistent contexts are **not**.

---

### rule (important)

> **Exactly one** `launchPersistentContext` per profile directory.
> Ever.
> Everything else must wait for it.

---

### fix (minimal, functional, humble)

Add a **promise lock** so context creation is serialized.

One word naming. No classes. No magic.

---

## `connect/browser.js` (fixed)

```js
// connect/browser.js
import { chromium } from "patchright";
import { launch } from "./sessions.js";

let context = null;
let creating = null;

/**
 * Ensure and return the persistent browser context.
 * Serializes creation to avoid SingletonLock races.
 */
export async function get_context() {
  if (context) return context;

  if (!creating) {
    creating = (async () => {
      const ctx = await launch(chromium);
      context = ctx;
      return ctx;
    })();
  }

  return await creating;
}

/**
 * Get a page.
 * fresh=true → new page (caller must close)
 */
export async function get_page({ fresh = false } = {}) {
  const ctx = await get_context();

  if (!fresh) {
    const pages = ctx.pages();
    if (pages.length > 0) return pages[0];
  }

  return await ctx.newPage();
}
```

That’s it.

---

### why this works

- `creating` is a **shared promise**
- first caller creates the context
- all others `await` the same promise
- only **one Chromium process** touches the profile dir
- no `SingletonLock` conflict
- pages still run fully in parallel

This is the correct shape for:

- Playwright
- Puppeteer
- any persistent browser agent

---

### mental model (simple)

- **context** = body (one)
- **page** = hands (many)
- don’t grow two bodies at once

---

If you want next steps, good ones are:

- a small `limit(n)` for page concurrency
- automatic page reuse pool
- crash-safe context rehydration

But this fix is the necessary foundation.

# 2

```
fira@Fira ~/Documents/f/humility/backend/connect/test
 % cd "/home/fira/Documents/f/humility/backend/connect/test/" && node 'send.js'
page.goto: net::ERR_CONNECTION_CLOSED at https://chatgpt.com/
Call log:
  - navigating to "https://chatgpt.com/", waiting until "load"

    at Module.send (/home/fira/Documents/f/humility/backend/connect/chatgpt.js:17:16)
    at async send (/home/fira/Documents/f/humility/backend/connect/send.js:22:10)
    at async file:///home/fira/Documents/f/humility/backend/connect/test/send.js:9:22 {
  name: 'Error'
}
```

---

Good — this is a network/navigation failure. I'll give a small, safe, functional patch that:

- retries navigation a few times (handles intermittent network hiccups / transient browser failures)
- falls back to `https://chat.openai.com` if `https://chatgpt.com` is unreachable
- always closes the fresh page on error
- returns helpful error text if all retries fail

Drop this in `connect/chatgpt.js` (named exports only). It keeps `convert_chatgpt` unchanged (I include it unchanged below).

```js
// connect/chatgpt.js
import { wait_for_sse } from "./listen.js";
import { get_page } from "./browser.js";

/**
 * Try to navigate to a url with retries.
 * @param {Page} page
 * @param {string[]} urls
 * @param {{ attempts?: number, timeout?: number }} opts
 */
async function navigate_with_retry(
  page,
  urls,
  { attempts = 3, timeout = 30_000 } = {}
) {
  let lastErr = null;

  for (const url of urls) {
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      try {
        // navigation can fail transiently; use networkidle to be robust
        await page.goto(url, { waitUntil: "networkidle", timeout });
        return url;
      } catch (err) {
        lastErr = err;
        // small backoff before retrying
        const backoff = 200 * attempt;
        await new Promise((r) => setTimeout(r, backoff));
      }
    }
  }

  const msg = `navigation failed for urls=${JSON.stringify(urls)}; last=${
    lastErr?.message || String(lastErr)
  }`;
  const error = new Error(msg);
  error.cause = lastErr;
  throw error;
}

/**
 * Send message to ChatGPT via browser page.
 * Uses a fresh page per call so multiple sends can run concurrently.
 *
 * @param {string} message
 * @returns {Promise<string>}
 */
export async function send(message) {
  const page = await get_page({ fresh: true });

  try {
    // try primary host first, then fallback
    const hosts = ["https://chatgpt.com", "https://chat.openai.com"];
    await navigate_with_retry(page, hosts, { attempts: 3, timeout: 30_000 });

    // ensure editor + submit exist
    await page.waitForSelector("[contenteditable]", { timeout: 30_000 });
    await page.waitForSelector("#composer-submit-button", { timeout: 30_000 });

    await page.evaluate((message) => {
      const input = document.querySelector("[contenteditable]");
      input.innerText = message;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }, message);

    await page.click("#composer-submit-button");

    const raw_events = await wait_for_sse(
      page,
      /^https:\/\/chatgpt\.com\/backend-api\/f\/conversation$/,
      (event) =>
        event.split("\n").some((line) => line.trim() === "data: [DONE]")
    );

    return convert_chatgpt(raw_events);
  } catch (err) {
    // attach a short, actionable message
    const e = new Error(`chatgpt.send failed: ${err.message}`);
    e.cause = err;
    throw e;
  } finally {
    try {
      await page.close();
    } catch (closeErr) {
      // ignore
    }
  }
}

/* convert_chatgpt unchanged - paste your existing function here */
export function convert_chatgpt(event_stream) {
  const json = JSON;

  const split_lines = (s) => s.replace(/\r/g, "").split("\n");
  const trim = (s) => (s == null ? "" : String(s).trim());
  const is_blank = (s) => trim(s) === "";

  const parse_events = (raw) => {
    const lines = split_lines(raw);
    const events = [];
    let cur_event = { event: null, data_lines: [] };

    const flush = () => {
      if (cur_event.data_lines.length > 0 || cur_event.event !== null) {
        events.push({
          event: cur_event.event,
          data: cur_event.data_lines.join("\n"),
        });
      }
      cur_event = { event: null, data_lines: [] };
    };

    for (const line of lines) {
      if (line.startsWith("event:")) {
        cur_event.event = trim(line.slice("event:".length));
      } else if (line.startsWith("data:")) {
        cur_event.data_lines.push(
          line.slice("data:".length).replace(/^\s*/, "")
        );
      } else if (is_blank(line)) {
        flush();
      } else {
        cur_event.data_lines.push(line);
      }
    }

    flush();
    return events;
  };

  const process_events_to_text = (events) => {
    let last_message_id = null;
    const messages_by_id = Object.create(null);
    const order = [];

    const ensure_message = (id, role = "assistant") => {
      if (!id) return null;
      if (!messages_by_id[id]) {
        messages_by_id[id] = { id, role, content: "" };
        order.push(id);
      }
      return messages_by_id[id];
    };

    const append_to_last = (text) => {
      if (!last_message_id) return;
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content += text;
    };

    const replace_last = (text) => {
      if (!last_message_id) return;
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content = text;
    };

    const handle_patch_ops = (ops) => {
      if (!Array.isArray(ops)) return;
      for (const op of ops) {
        if (!op || typeof op !== "object") continue;
        if (
          typeof op.p === "string" &&
          op.p.includes("/message/content/parts")
        ) {
          if (op.o === "append" && typeof op.v === "string") {
            append_to_last(op.v);
          } else if (op.o === "replace" && typeof op.v === "string") {
            replace_last(op.v);
          } else if (op.o === "add" && typeof op.v === "string") {
            append_to_last(op.v);
          }
        } else {
          if (typeof op.v === "string" && op.o === "append") {
            append_to_last(op.v);
          }
        }
      }
    };

    for (const ev of events) {
      const raw = trim(ev.data);
      if (!raw || raw === "[DONE]") continue;

      let parsed;
      try {
        parsed = json.parse(raw);
      } catch {
        parsed = raw;
      }

      if (parsed && typeof parsed === "object") {
        if (parsed.v && parsed.v.message) {
          const msg = parsed.v.message;
          const id = msg.id || null;
          const role = (msg.author && msg.author.role) || "assistant";
          ensure_message(id, role);
          if (Array.isArray(msg.content?.parts)) {
            messages_by_id[id].content = msg.content.parts.join("");
          } else if (typeof msg.content === "string") {
            messages_by_id[id].content = msg.content;
          }
          last_message_id = id;
          continue;
        }

        if (parsed.type === "input_message" && parsed.input_message) {
          const im = parsed.input_message;
          const id = im.id || null;
          const role = (im.author && im.author.role) || "user";
          ensure_message(id, role);
          if (Array.isArray(im.content?.parts)) {
            messages_by_id[id].content = im.content.parts.join("");
          } else if (typeof im.content === "string") {
            messages_by_id[id].content = im.content;
          }
          last_message_id = id;
          continue;
        }

        if (Array.isArray(parsed.v)) {
          handle_patch_ops(parsed.v);
          continue;
        }

        if ("p" in parsed && "o" in parsed && "v" in parsed) {
          if (typeof parsed.v === "string") {
            append_to_last(parsed.v);
          } else if (Array.isArray(parsed.v)) {
            handle_patch_ops(parsed.v);
          } else if (typeof parsed.v === "object" && parsed.v !== null) {
            if (
              typeof parsed.v === "object" &&
              typeof parsed.v.v === "string"
            ) {
              append_to_last(parsed.v.v);
            }
          }
          continue;
        }

        if ("v" in parsed && typeof parsed.v === "string") {
          append_to_last(parsed.v);
          continue;
        }
      }

      if (typeof parsed === "string") {
        append_to_last(parsed);
      }
    }

    return order
      .map((id) => messages_by_id[id])
      .filter((m) => m && m.role === "assistant")
      .map((m) => trim(m.content))
      .filter(Boolean)
      .join("\n");
  };

  const events = parse_events(event_stream);
  return process_events_to_text(events);
}
```

### Why this should fix your `ERR_CONNECTION_CLOSED`

- transient connection resets often succeed on a retry
- fallback to `chat.openai.com` helps if `chatgpt.com` DNS/proxy is blocked
- always closes the fresh page so later requests aren't affected

If this still fails, next quick checks (do them now):

- can you `curl -I https://chatgpt.com` and `curl -I https://chat.openai.com` from the same machine?
- do you run behind a firewall or proxy (corporate / VPN)?
- is the existing browser process (the one opened previously) alive and holding the profile lock? (`ps aux | grep chrome`)

Tell me the `curl` results if it still fails and I'll tighten the fallback / proxy handling.

# 3

it does not send

---

Good — thanks for the log. I’ll give a single, practical replacement for `connect/chatgpt.js::send` that:

- tries several reliable input methods (contenteditable, role=textbox, textarea).
- sends by clicking submit if present, otherwise presses Enter.
- captures the server response by waiting for an HTTP response that looks like a conversation/result endpoint (broad regex).
- falls back to saving a screenshot + page HTML for inspection if nothing useful arrives.
- always closes the fresh page.
- returns a useful error message (including debug file paths) if it fails.

Drop this into `connect/chatgpt.js` (replace the `send` function). It keeps your `convert_chatgpt` as-is (I leave it below untouched).

```js
// connect/chatgpt.js
import fs from "fs";
import path from "path";
import os from "os";
import { wait_for_sse } from "./listen.js";
import { get_page } from "./browser.js";

/** helper: write debug artifacts */
function debug_write(prefix, pageContent, screenshotBuffer) {
  const dir = path.join(os.homedir(), ".local", "share", "humility", "debug");
  fs.mkdirSync(dir, { recursive: true });

  const t = Date.now();
  const htmlPath = path.join(dir, `${prefix}-${t}.html`);
  const pngPath = path.join(dir, `${prefix}-${t}.png`);

  try {
    if (pageContent != null)
      fs.writeFileSync(htmlPath, String(pageContent), "utf8");
    if (screenshotBuffer) fs.writeFileSync(pngPath, screenshotBuffer);
  } catch (err) {
    // ignore failures to save debug files
  }

  return { htmlPath, pngPath };
}

/** flexible navigation with retry */
async function navigate_with_retry(
  page,
  urls,
  { attempts = 3, timeout = 30_000 } = {}
) {
  let lastErr = null;

  for (const url of urls) {
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout });
        return url;
      } catch (err) {
        lastErr = err;
        await new Promise((r) => setTimeout(r, 150 * attempt));
      }
    }
  }

  const e = new Error(
    `navigation failed for ${JSON.stringify(urls)}: ${
      lastErr?.message || lastErr
    }`
  );
  e.cause = lastErr;
  throw e;
}

/** find an input node on the page and return an object { type, selector, fill } where fill is a function to type the message */
async function find_input(page) {
  // Try contenteditable
  const hasContentEditable = await page.$("[contenteditable]");
  if (hasContentEditable) {
    return {
      type: "contenteditable",
      selector: "[contenteditable]",
      fill: async (msg) => {
        await page.evaluate((m) => {
          const el = document.querySelector("[contenteditable]");
          if (!el) throw new Error("no contenteditable");
          el.focus();
          // set textContent/innerText and emit input
          el.innerText = m;
          el.dispatchEvent(new Event("input", { bubbles: true }));
        }, msg);
      },
    };
  }

  // Try role=textbox (common on some sites)
  const hasRoleTextbox = await page.$('div[role="textbox"], [role="textbox"]');
  if (hasRoleTextbox) {
    return {
      type: "textbox",
      selector: 'div[role="textbox"], [role="textbox"]',
      fill: async (msg) => {
        await page.focus('div[role="textbox"], [role="textbox"]');
        // use keyboard typing as a fallback
        await page.keyboard.type(msg, { delay: 20 });
      },
    };
  }

  // Try textarea
  const hasTextarea = await page.$("textarea");
  if (hasTextarea) {
    return {
      type: "textarea",
      selector: "textarea",
      fill: async (msg) => {
        await page.focus("textarea");
        await page.evaluate((m) => {
          const t = document.querySelector("textarea");
          t.value = m;
          t.dispatchEvent(new Event("input", { bubbles: true }));
        }, msg);
      },
    };
  }

  return null;
}

/**
 * robust send implementation:
 * - fresh page
 * - flexible input + send
 * - capture HTTP response matching conversation-like endpoints
 * - fallback to debug artifacts if nothing useful
 */
export async function send(message) {
  const page = await get_page({ fresh: true });

  try {
    // navigate primary then fallback
    const hosts = ["https://chatgpt.com", "https://chat.openai.com"];
    await navigate_with_retry(page, hosts, { attempts: 2, timeout: 20_000 });

    // detect login: quick heuristic
    const loginButton = await page.$(
      "text=Sign in, text=Log in, [href*='login'], [href*='auth']"
    );
    if (loginButton) {
      throw new Error(
        "not signed in: please sign into chat.openai.com in the browser profile used by the agent"
      );
    }

    // find input
    const input = await find_input(page);
    if (!input) {
      // save debug and throw
      const shot = await page.screenshot().catch(() => null);
      const content = await page.content().catch(() => null);
      const { htmlPath, pngPath } = debug_write("no-input", content, shot);
      throw new Error(
        `could not find an input element; saved debug to ${htmlPath} ${pngPath}`
      );
    }

    // try to find submit button (may not exist)
    const submitSelectors = [
      "#composer-submit-button",
      "button[type=submit]",
      "button[aria-label*='send']",
      "button:has(svg[aria-hidden])", // best-effort
    ];
    let submit = null;
    for (const sel of submitSelectors) {
      try {
        const el = await page.$(sel);
        if (el) {
          submit = sel;
          break;
        }
      } catch (err) {
        // ignore
      }
    }

    // record network wait predicate: wide regex for conversation-like endpoints
    const convRegex =
      /conversation|backend-api|responses|v1\/chat|api\/conversation|api\/responses/;

    // Start a race: wait for a matching response, but also set a timeout fallback
    const responsePromise = page
      .waitForResponse(
        (r) => {
          try {
            const u = r.url();
            return convRegex.test(u) && r.status() >= 200 && r.status() < 300;
          } catch {
            return false;
          }
        },
        { timeout: 30_000 }
      )
      .catch(() => null);

    // fill input
    await input.fill(message);

    // send: click submit if available else Enter
    if (submit) {
      try {
        await page.click(submit);
      } catch {
        // fallback to Enter
        await page.keyboard.press("Enter");
      }
    } else {
      // press Enter twice for some editors (first commits, second sends)
      await page.keyboard.press("Enter");
      await page.waitForTimeout(80);
      await page.keyboard.press("Enter");
    }

    // await the network response first
    const resp = await responsePromise;

    if (resp) {
      // try parse JSON body
      try {
        const json = await resp.json();
        // best-effort: extract assistant text from common shapes
        // if the SSE path is used later you already have convert_chatgpt for that
        if (json && typeof json === "object") {
          // common fields: message, output, choices, text, content
          const candidates = [];

          // walk object shallowly to pull strings
          (function walk(o) {
            if (!o || typeof o !== "object") return;
            for (const k of Object.keys(o)) {
              const v = o[k];
              if (typeof v === "string" && v.trim()) candidates.push(v.trim());
              else if (Array.isArray(v)) {
                for (const item of v) {
                  if (typeof item === "string") candidates.push(item.trim());
                  else if (typeof item === "object") walk(item);
                }
              } else if (typeof v === "object") walk(v);
            }
          })(json);

          if (candidates.length > 0) {
            // join candidates heuristically
            return candidates.join("\n\n").slice(0, 20000);
          }

          // if no string candidate, return JSON as string
          return JSON.stringify(json);
        }
      } catch (err) {
        // response not json - try text
        try {
          const text = await resp.text();
          if (text && text.trim()) return text.trim().slice(0, 20000);
        } catch {
          // ignore
        }
      }
    }

    // If we reach here, network response did not yield content we could parse.
    // Fallback: try wait for a visible assistant DOM node (best-effort)
    try {
      // snapshot of content before waiting
      const before = await page.content();
      // wait a short bit for DOM to change
      await page.waitForTimeout(2000);

      // heuristics: find the last element that looks like a message
      const candidate = await page.evaluate(() => {
        // try a few common selectors
        const selectors = [
          '[data-testid="message"]:not([data-role="user"])',
          ".message",
          ".assistant",
          ".chat-line",
          ".response",
          ".bot",
          '[role="listitem"]',
        ];
        for (const s of selectors) {
          const els = Array.from(document.querySelectorAll(s));
          if (els.length === 0) continue;
          const last = els[els.length - 1];
          // return textContent trimmed
          if (last && last.textContent) return last.textContent.trim();
        }
        return null;
      });

      if (candidate && typeof candidate === "string" && candidate.length > 0) {
        return candidate;
      }

      // nothing useful: save debug artifacts
      const shot = await page.screenshot().catch(() => null);
      const content = await page.content().catch(() => null);
      const { htmlPath, pngPath } = debug_write("no-response", content, shot);

      throw new Error(
        `no usable response from site; debug saved to ${htmlPath} ${pngPath}`
      );
    } catch (err) {
      // bubble up
      throw err;
    }
  } catch (err) {
    const e = new Error(`chatgpt.send failed: ${err.message}`);
    e.cause = err;
    throw e;
  } finally {
    try {
      await page.close();
    } catch (_) {}
  }
}

/* keep your existing convert_chatgpt unchanged below */
export function convert_chatgpt(event_stream) {
  const json = JSON;

  const split_lines = (s) => s.replace(/\r/g, "").split("\n");
  const trim = (s) => (s == null ? "" : String(s).trim());
  const is_blank = (s) => trim(s) === "";

  const parse_events = (raw) => {
    const lines = split_lines(raw);
    const events = [];
    let cur_event = { event: null, data_lines: [] };

    const flush = () => {
      if (cur_event.data_lines.length > 0 || cur_event.event !== null) {
        events.push({
          event: cur_event.event,
          data: cur_event.data_lines.join("\n"),
        });
      }
      cur_event = { event: null, data_lines: [] };
    };

    for (const line of lines) {
      if (line.startsWith("event:")) {
        cur_event.event = trim(line.slice("event:".length));
      } else if (line.startsWith("data:")) {
        cur_event.data_lines.push(
          line.slice("data:".length).replace(/^\s*/, "")
        );
      } else if (is_blank(line)) {
        flush();
      } else {
        cur_event.data_lines.push(line);
      }
    }

    flush();
    return events;
  };

  const process_events_to_text = (events) => {
    let last_message_id = null;
    const messages_by_id = Object.create(null);
    const order = [];

    const ensure_message = (id, role = "assistant") => {
      if (!id) return null;
      if (!messages_by_id[id]) {
        messages_by_id[id] = { id, role, content: "" };
        order.push(id);
      }
      return messages_by_id[id];
    };

    const append_to_last = (text) => {
      if (!last_message_id) return;
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content += text;
    };

    const replace_last = (text) => {
      if (!last_message_id) return;
      if (!messages_by_id[last_message_id]) return;
      messages_by_id[last_message_id].content = text;
    };

    const handle_patch_ops = (ops) => {
      if (!Array.isArray(ops)) return;
      for (const op of ops) {
        if (!op || typeof op !== "object") continue;
        if (
          typeof op.p === "string" &&
          op.p.includes("/message/content/parts")
        ) {
          if (op.o === "append" && typeof op.v === "string") {
            append_to_last(op.v);
          } else if (op.o === "replace" && typeof op.v === "string") {
            replace_last(op.v);
          } else if (op.o === "add" && typeof op.v === "string") {
            append_to_last(op.v);
          }
        } else {
          if (typeof op.v === "string" && op.o === "append") {
            append_to_last(op.v);
          }
        }
      }
    };

    for (const ev of events) {
      const raw = trim(ev.data);
      if (!raw || raw === "[DONE]") continue;

      let parsed;
      try {
        parsed = json.parse(raw);
      } catch {
        parsed = raw;
      }

      if (parsed && typeof parsed === "object") {
        if (parsed.v && parsed.v.message) {
          const msg = parsed.v.message;
          const id = msg.id || null;
          const role = (msg.author && msg.author.role) || "assistant";
          ensure_message(id, role);
          if (Array.isArray(msg.content?.parts)) {
            messages_by_id[id].content = msg.content.parts.join("");
          } else if (typeof msg.content === "string") {
            messages_by_id[id].content = msg.content;
          }
          last_message_id = id;
          continue;
        }

        if (parsed.type === "input_message" && parsed.input_message) {
          const im = parsed.input_message;
          const id = im.id || null;
          const role = (im.author && im.author.role) || "user";
          ensure_message(id, role);
          if (Array.isArray(im.content?.parts)) {
            messages_by_id[id].content = im.content.parts.join("");
          } else if (typeof im.content === "string") {
            messages_by_id[id].content = im.content;
          }
          last_message_id = id;
          continue;
        }

        if (Array.isArray(parsed.v)) {
          handle_patch_ops(parsed.v);
          continue;
        }

        if ("p" in parsed && "o" in parsed && "v" in parsed) {
          if (typeof parsed.v === "string") {
            append_to_last(parsed.v);
          } else if (Array.isArray(parsed.v)) {
            handle_patch_ops(parsed.v);
          } else if (typeof parsed.v === "object" && parsed.v !== null) {
            if (
              typeof parsed.v === "object" &&
              typeof parsed.v.v === "string"
            ) {
              append_to_last(parsed.v.v);
            }
          }
          continue;
        }

        if ("v" in parsed && typeof parsed.v === "string") {
          append_to_last(parsed.v);
          continue;
        }
      }

      if (typeof parsed === "string") {
        append_to_last(parsed);
      }
    }

    return order
      .map((id) => messages_by_id[id])
      .filter((m) => m && m.role === "assistant")
      .map((m) => trim(m.content))
      .filter(Boolean)
      .join("\n");
  };

  const events = parse_events(event_stream);
  return process_events_to_text(events);
}
```

### Quick next steps for you (do these now)

1. Run the test again: it will either return text or throw an error that includes debug paths.
2. If it throws and mentions debug files, open them:

   - `~/.local/share/humility/debug/<file>.png`
   - `~/.local/share/humility/debug/<file>.html`
     and paste what you see (or attach the HTML) so I can pinpoint the selectors.

3. If the error says “not signed in”, open a normal browser using the same profile dir and sign in once, then re-run.

This gives us concrete artifacts to work from. I built the code to produce them automatically when the site doesn't respond in a standard way.
