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