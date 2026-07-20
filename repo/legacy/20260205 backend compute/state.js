import fs from "fs";
import path from "path";

const walk = (dir, prefix = "") => {
  if (!fs.existsSync(dir)) return "";

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let out = "";

  for (const entry of entries) {
    out += `${prefix}${entry.name}\n`;

    if (entry.isDirectory()) {
      out += walk(
        path.join(dir, entry.name),
        prefix + "  "
      );
    }
  }

  return out;
};

export const folder = (root) => {
  return walk(root).trim();
};

export const progress = (root) => {
  const file = path.join(root, "progress.md");
  if (!fs.existsSync(file)) return "";
  return fs.readFileSync(file, "utf8");
};