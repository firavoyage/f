// lib/test/log.js
import assert from "node:assert";
import fs from "fs/promises";
import path from "path";
import url from "url";
import { log } from "../log.js";

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