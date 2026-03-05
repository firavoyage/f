// lib/log.js
import fs from "fs/promises";
import { inspect } from "util";
import { randomUUID } from "crypto";
import path from "path";
import url from "url";

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