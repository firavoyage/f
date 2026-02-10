// log.js
import fs from "fs";
import path from "path";

const log_path = path.resolve("backend/humility.log");

/**
 * log — append a timestamped message to file and console
 * @param {object} params
 * @param {string} params.message
 */
export const log = ({ message }) => {
  const time = new Date().toISOString();
  const line = `${time} ${message}\n`;

  // append to file
  fs.appendFileSync(log_path, line, "utf-8");

  // also log to console
  console.log(line.trim());
};
