<!-- https://chatgpt.com/c/69762a7c-e23c-8320-81fe-84d4b08f8460 -->

# 0 (write)

be simple and clear.

use:

- ubuntu `home/fira`
- pnpm
- es module

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

write `compute/ask.js`

- `ask({what, optional where, optional timeout})`
  - send a message
  - store: type `ask`, {prompt, answer, status: "success" or error message}
  - return the uuid

give me the full code.

---

Got it! We’ll keep it **simple, clear, functional, modular**, and **ES module style**, using your naming conventions. I’ll write `compute/ask.js` that integrates with your `connect/send.js` and `store/write.js`.

Here’s the **full code** for `compute/ask.js`:

```js
// compute/ask.js
import send from "../connect/send.js";
import { add } from "../store/write.js";

/**
 * Send a message, store the prompt and response, and return the record ID.
 *
 * @param {Object} params
 * @param {string} params.what - The message to send
 * @param {string} [params.where="chatgpt"] - Optional site key
 * @param {number} [params.timeout] - Optional timeout in milliseconds
 * @returns {Promise<string>} - UUID of the stored record
 */
export async function ask({ what, where = "chatgpt", timeout }) {
  if (!what || typeof what !== "string") {
    throw new Error("Invalid 'what' parameter. Must be a non-empty string.");
  }

  let answer;
  let status = "success";

  try {
    if (timeout) {
      answer = await Promise.race([
        send(what, where),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), timeout)
        ),
      ]);
    } else {
      answer = await send(what, where);
    }
  } catch (err) {
    answer = null;
    status = err.message || "error";
  }

  const record = {
    prompt: what,
    answer,
    status,
  };

  const { id } = await add("ask", record);
  return id;
}
```

✅ **Highlights / style choices**:

- Functional, single-responsibility: `ask` only sends, handles errors, stores, and returns the ID.
- Modular: imports `send` and `add` only.
- Timeout optional, uses `Promise.race`.
- Stores `status` for success/error transparency.
- Clean naming: `what`, `where`, `timeout`, `record`.

---

If you want, I can also **write a matching `compute/answer.js` helper** that fetches the stored answer by UUID and formats it nicely. That would make your agent fully autonomous in handling requests and storing responses.

Do you want me to do that next?

# 1 (test)

write compute/test/ask.js

---

Perfect! Let’s make a **simple test script** for `compute/ask.js` in `compute/test/ask.js`. It will:

- Import `ask`
- Send a test message
- Log the returned UUID
- Fetch the stored record to verify

Here’s a clean ES module test:

```js
// compute/test/ask.js
import { ask } from "../ask.js";
import { get } from "../../store/read.js";

async function test() {
  try {
    console.log("Sending test message...");

    // Send a test prompt
    const id = await ask({ what: "Hello, Humility! How are you?" });
    console.log("Stored ask record ID:", id);

    // Fetch the stored record
    const record = await get(id);
    console.log("Stored record content:");
    console.log(JSON.stringify(record, null, 2));

    console.log("✅ Test completed successfully.");
  } catch (err) {
    console.error("❌ Test failed:", err);
  }
}

// Run the test if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  test();
}
```

✅ **Highlights**:

- Uses **async/await** for clarity
- Prints the ID and full stored record in readable JSON
- Self-contained: can be run with `node --loader ts-node/esm compute/test/ask.js` or plain `node` if pure JS

---

If you want, I can also **write a version that tests multiple prompts and measures timing**, which is great for an autonomous AI agent loop. Do you want me to do that?
