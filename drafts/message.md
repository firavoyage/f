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



