<!-- https://chatgpt.com/c/69761dc1-aba8-8321-a484-c91d7ae2c895 -->

# 0 (store/init)

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

store/init

```
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { PGlite } from '@electric-sql/pglite';

const datadir = path.join(os.homedir(), '.local/share/humility/storage');
const global_key = '__humility_pglite';

async function create_pg() {
  if (globalThis[global_key]) return globalThis[global_key];
  await fs.mkdir(datadir, { recursive: true });

  const pg = await PGlite.create(datadir);

  await pg.exec(`
    CREATE TABLE IF NOT EXISTS things (
      id text PRIMARY KEY,
      time timestamptz DEFAULT now(),
      type text NOT NULL,
      data jsonb NOT NULL
    );
  `);

  globalThis[global_key] = pg;
  return pg;
}

export async function init() {
  await create_pg();
  return { dir: datadir };
}
```

document it.

only include public methods.

only include the document in your answer. no more words.

dont put the document in a markdown code block.

notes are optional.

example:

```
`test/hello_world.js`

- `hello_world(message)`
  - say hello world with a message
  - string message: ...
  - returns void
- `connect()`
  - ...
  - ...
  - ...

notes:

- ...
- ...
- ...
```

---

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

#

<!-- https://chatgpt.com/c/69761dc1-aba8-8321-a484-c91d7ae2c895 -->

# 0 (connect/browser)

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

document it.

only include public methods.

only include the document in your answer. no more words.

dont put the document in a markdown code block.

notes are optional.

example:

```
`test/hello_world.js`

- `hello_world(message)`
  - say hello world with a message
  - string message: ...
  - returns void
- `connect()`
  - ...
  - ...
  - ...

notes:

- ...
- ...
- ...
```

---

`connect/browser.js`

- `get_page()`

  - returns the first available browser page, launching a new browser context if needed
  - returns `Promise<Page>`

notes:

- Uses a shared `page` variable to cache the page instance across calls.
- Depends on `launch` from `connect/sessions.js` to start the browser context.

#

<!-- https://chatgpt.com/c/69761dc1-aba8-8321-a484-c91d7ae2c895 -->

# 0 (connect/send)

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

document it.

only include public methods.

only include the document in your answer. no more words.

dont put the document in a markdown code block.

notes are optional.

example:

```
`test/hello_world.js`

- `hello_world(message)`
  - say hello world with a message
  - string message: ...
  - returns void
- `connect()`
  - ...
  - ...
  - ...

notes:

- ...
- ...
- ...
```

---

`connect/send.js`

- `send(what, where = "chatgpt")`

  - Send a message to a specific site.
  - `what` (string): The message to send.
  - `where` (string, optional): The site key to send to (`"chatgpt"` or `"deepseek"`). Defaults to `"chatgpt"`.
  - Returns `Promise<string>`: Resolves with the response from the site.

notes:

- Relies on `chatgpt` and `deepseek` modules to handle sending.
- Throws an error if the site key is invalid or the target module does not have a `send` function.

#

<!-- https://chatgpt.com/c/69761dc1-aba8-8321-a484-c91d7ae2c895 -->

# 0 (store/read)

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

store/read

```
import path from 'path';
import os from 'os';
import { PGlite } from '@electric-sql/pglite';
import fs from 'fs/promises';

const datadir = path.join(os.homedir(), '.local/share/humility/storage');
const global_key = '__humility_pglite';

async function create_pg() {
  if (globalThis[global_key]) return globalThis[global_key];
  await fs.mkdir(datadir, { recursive: true });
  const pg = await PGlite.create(datadir);
  await pg.exec(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS things (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      time timestamptz DEFAULT now(),
      type text NOT NULL,
      data jsonb NOT NULL
    );
  `);
  globalThis[global_key] = pg;
  return pg;
}

export async function get(id) {
  if (!id) throw new Error('get: missing id');
  const pg = await create_pg();
  const res = await pg.query(
    'SELECT time, type, data FROM things WHERE id = $1 LIMIT 1;',
    [id]
  );
  const row = res.rows?.[0];
  if (!row) return null;

  let parsed = row.data;
  if (typeof parsed === 'string') {
    try { parsed = JSON.parse(parsed); } catch {}
  }

  return { time: row.time, type: row.type, data: parsed };
}

export async function list({ begin, end } = {}) {
  const pg = await create_pg();

  if (!begin && !end) {
    const res = await pg.query('SELECT id FROM things ORDER BY time ASC;');
    return (res.rows || []).map(r => r.id);
  }

  const conds = [];
  const params = [];
  if (begin) { params.push(new Date(begin).toISOString()); conds.push(`time >= $${params.length}`); }
  if (end)   { params.push(new Date(end).toISOString());   conds.push(`time <= $${params.length}`); }

  const sql = `SELECT id FROM things ${conds.length ? 'WHERE ' + conds.join(' AND ') : ''} ORDER BY time ASC;`;
  const res = await pg.query(sql, params);
  return (res.rows || []).map(r => r.id);
}

export async function see() {
  const pg = await create_pg();

  const cnt = await pg.query('SELECT count(*)::bigint AS count FROM things;');
  const count = Number(cnt.rows?.[0]?.count || 0);

  const firstRow = (await pg.query('SELECT id, time FROM things ORDER BY time ASC LIMIT 1;')).rows?.[0] || null;
  const lastRow  = (await pg.query('SELECT id, time FROM things ORDER BY time DESC LIMIT 1;')).rows?.[0] || null;

  const typesRes = await pg.query('SELECT type, count(*)::bigint AS count FROM things GROUP BY type ORDER BY count DESC;');
  const types = (typesRes.rows || []).map(r => ({ type: r.type, count: Number(r.count) }));

  return {
    dir: datadir,
    count,
    first: firstRow ? { id: firstRow.id, time: firstRow.time } : null,
    last:  lastRow  ? { id: lastRow.id,  time: lastRow.time }  : null,
    types
  };
}
```

document it.

only include public methods.

only include the document in your answer. no more words.

dont put the document in a markdown code block.

notes are optional.

example:

```
`test/hello_world.js`

- `hello_world(message)`
  - say hello world with a message
  - string message: ...
  - returns void
- `connect()`
  - ...
  - ...
  - ...

notes:

- ...
- ...
- ...
```

---

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

#

<!-- https://chatgpt.com/c/69761dc1-aba8-8321-a484-c91d7ae2c895 -->

# 0 (store/write)

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

store/write

```
import path from 'path';
import os from 'os';
import { PGlite } from '@electric-sql/pglite';
import fs from 'fs/promises';
import { v4 as uuid } from 'uuid';

const datadir = path.join(os.homedir(), '.local/share/humility/storage');
const global_key = '__humility_pglite';

async function create_pg() {
  if (globalThis[global_key]) return globalThis[global_key];
  await fs.mkdir(datadir, { recursive: true });
  const pg = await PGlite.create(datadir);

  await pg.exec(`
    CREATE TABLE IF NOT EXISTS things (
      id text PRIMARY KEY,
      time timestamptz DEFAULT now(),
      type text NOT NULL,
      data jsonb NOT NULL
    );
  `);

  globalThis[global_key] = pg;
  return pg;
}

export async function add(type, data) {
  if (!type) throw new Error('add: missing type');
  const pg = await create_pg();
  const id = uuid();

  const res = await pg.query(
    'INSERT INTO things (id, type, data) VALUES ($1, $2, $3::jsonb) RETURNING id, time;',
    [id, type, JSON.stringify(data)]
  );

  const row = res.rows?.[0];
  if (!row) throw new Error('add: insert failed');
  return { id: row.id, time: row.time };
}
```

document it.

only include public methods.

only include the document in your answer. no more words.

dont put the document in a markdown code block.

notes are optional.

example:

```
`test/hello_world.js`

- `hello_world(message)`
  - say hello world with a message
  - string message: ...
  - returns void
- `connect()`
  - ...
  - ...
  - ...

notes:

- ...
- ...
- ...
```

---

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
