// log.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const log_path = path.join(__dirname, "egg.log");

/**
 * log — append a timestamped message to file and console
 * @param {object} params
 * @param {string} params.message
 */
export const log = ({ message }) => {
  const time = new Date().toISOString();
  const line = `${time} ${message}\n`;

  if (!fs.existsSync(log_path)) {
    fs.writeFileSync(log_path, "", "utf-8");
  }

  fs.appendFileSync(log_path, line, "utf-8");
  console.log(line.trim());
};
