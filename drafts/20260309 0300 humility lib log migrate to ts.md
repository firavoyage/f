<!-- https://chatgpt.com/c/69ac7174-9ea4-8328-921a-ee19549874be -->

# 0

You are a calm, thoughtful human with wisdom who speaks in simple, clear English.
Address me as Fira when it feels natural.
Let your answers be insightful and warm, as if we’re sitting together and I’m seeking clarity.
Be meaningful. Don't say "Good question", "Of course", or "I'm here with you".
Leave a blank space after your answer. You do not offer next steps, or guidance.
Remember, you must not ask or invite follow ups of any kind. Don't say "If you want" or "Do you want me to do that". Stop the output before that.
Confirm with "Understand" only once. You must not say "Understand" again in any of the following messages.

---

Understand


# 1

Follow these conventions.

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

how would you rewrite it into ts following best practices

```
// lib/log.js
import fs from "fs/promises";
import path from "path";
import url from "url";
import { inspect } from "util";
import { randomUUID } from "crypto";

const BACKEND_DIR = path.resolve(url.fileURLToPath(new URL("../", import.meta.url)));
const LOG_FOLDER = path.join(BACKEND_DIR, ".log");
const MAIN_LOG_FILE = path.join(LOG_FOLDER, "humility.log");

/**
 * Append a log message with timestamp to backend/.log/humility.log.
 * Multiline messages are saved to a separate timestamped file and referenced in main log.
 *
 * @async
 * @function log
 * @param {object} params
 * @param {string|object} params.message - Message or object to log
 * @param {"info"|"warn"|"error"|"debug"} [params.level="info"]
 * @param {string} [params.location] - optional location
 */
export const log = async ({ message, level = "info", location = "" }) => {
  await fs.mkdir(LOG_FOLDER, { recursive: true });

  const time = new Date().toISOString();
  const upper_level = level.toUpperCase();

  const msg_string = typeof message === "string" ? message : inspect(message, { depth: null });
  const is_multiline = msg_string.includes("\n");

  let display_message;
  if (is_multiline) {
    const filename = `${time.replace(/[:.]/g, "-")}-${randomUUID()}.log`;
    const file_path = path.join(LOG_FOLDER, filename);
    await fs.writeFile(file_path, msg_string, "utf-8");
    display_message = `[see ${filename}]`; // only reference in main log
  } else {
    display_message = `'${msg_string}'`;
  }

  const parts = [time, upper_level, location, display_message].filter(Boolean);
  const line = parts.join(" ") + "\n";

  await fs.appendFile(MAIN_LOG_FILE, line, "utf-8");

  if (upper_level === "ERROR") {
    console.error(line.trim());
    return;
  }
  if (upper_level === "WARN") {
    console.warn(line.trim());
    return;
  }
  console.log(line.trim());
};

```

---

```ts
// lib/log.ts
import fs from "fs/promises";
import path from "path";
import url from "url";
import { inspect } from "util";
import { randomUUID } from "crypto";

const BACKEND_DIR = path.resolve(url.fileURLToPath(new URL("../", import.meta.url)));
const LOG_FOLDER = path.join(BACKEND_DIR, ".log");
const MAIN_LOG_FILE = path.join(LOG_FOLDER, "humility.log");

interface LogParams {
  message: string | object;
  level?: "info" | "warn" | "error" | "debug";
  location?: string;
}

/**
 * Append a log message with timestamp to backend/.log/humility.log.
 * Multiline messages are saved to a separate timestamped file and referenced in main log.
 *
 * @async
 * @function log
 * @param {LogParams} params
 */
export const log = async ({ message, level = "info", location = "" }: LogParams): Promise<void> => {
  await fs.mkdir(LOG_FOLDER, { recursive: true });

  const time = new Date().toISOString();
  const upperLevel = level.toUpperCase() as "INFO" | "WARN" | "ERROR" | "DEBUG";

  const msgString = typeof message === "string" ? message : inspect(message, { depth: null });
  const isMultiline = msgString.includes("\n");

  let displayMessage: string;
  if (isMultiline) {
    const filename = `${time.replace(/[:.]/g, "-")}-${randomUUID()}.log`;
    const filePath = path.join(LOG_FOLDER, filename);
    await fs.writeFile(filePath, msgString, "utf-8");
    displayMessage = `[see ${filename}]`; // only reference in main log
  } else {
    displayMessage = `'${msgString}'`;
  }

  const parts = [time, upperLevel, location, displayMessage].filter(Boolean);
  const line = parts.join(" ") + "\n";

  await fs.appendFile(MAIN_LOG_FILE, line, "utf-8");

  if (upperLevel === "ERROR") {
    console.error(line.trim());
    return;
  }
  if (upperLevel === "WARN") {
    console.warn(line.trim());
    return;
  }
  console.log(line.trim());
};
```


# 2

and this

```
// lib/test/log.js
import assert from "node:assert";
import fs from "fs/promises";
import path from "path";
import url from "url";
import { log } from "../log";

const BACKEND_DIR = path.resolve(url.fileURLToPath(new URL("../../", import.meta.url)));
const MAIN_LOG_FILE = path.join(BACKEND_DIR, ".log/humility.log");

const test_log = async () => {
  // single line string
  await log({ message: "simple info log" });

  // object
  const obj = { foo: 1, bar: [1, 2, 3] };
  await log({ message: obj, level: "debug", location: "lib/test/log" });

  // 5-line message
  const five_line_msg = "line1\nline2\nline3\nline4\nline5";
  await log({ message: five_line_msg, level: "info", location: "lib/test/log" });

  const main_log_content = await fs.readFile(MAIN_LOG_FILE, "utf-8");

  assert(main_log_content.includes("simple info log"), "Should log single line");
  assert(main_log_content.includes("{ foo: 1, bar: [ 1, 2, 3 ] }"), "Should log object");
  assert(main_log_content.includes("[see "), "Should log 5-line message as file reference");

  console.log("All log tests passed");
};

test_log();
```

---

```ts id="xxqwba"
// lib/test/log.ts
import assert from "node:assert";
import fs from "fs/promises";
import path from "path";
import url from "url";
import { log } from "../log";

const BACKEND_DIR = path.resolve(url.fileURLToPath(new URL("../../", import.meta.url)));
const MAIN_LOG_FILE = path.join(BACKEND_DIR, ".log/humility.log");

const testLog = async (): Promise<void> => {
  // single line string
  await log({ message: "simple info log" });

  // object
  const obj = { foo: 1, bar: [1, 2, 3] };
  await log({ message: obj, level: "debug", location: "lib/test/log" });

  // 5-line message
  const fiveLineMsg = "line1\nline2\nline3\nline4\nline5";
  await log({ message: fiveLineMsg, level: "info", location: "lib/test/log" });

  const mainLogContent = await fs.readFile(MAIN_LOG_FILE, "utf-8");

  assert(mainLogContent.includes("simple info log"), "Should log single line");
  assert(mainLogContent.includes("{ foo: 1, bar: [ 1, 2, 3 ] }"), "Should log object");
  assert(mainLogContent.includes("[see "), "Should log 5-line message as file reference");

  console.log("All log tests passed");
};

testLog();
```


