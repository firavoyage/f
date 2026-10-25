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