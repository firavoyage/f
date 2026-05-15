import fs from "fs";
import path from "path";
import { parse } from "./parse.js";

export const extract = (markdown) => {
  const blocks = parse(markdown);

  return blocks
    .map((content) => {
      const lines = content.split("\n").map((l) => l.trimEnd());
      if (lines.length === 0) return null;

      const first = lines.shift().trim();

      if (!first.startsWith("write")) return null;

      let file;
      let body;

      // case: write hello.md
      const parts = first.split(/\s+/);
      if (parts.length > 1) {
        file = parts.slice(1).join(" ");
        body = lines.join("\n");
      } else {
        // case: write\nhello.md
        file = lines.shift();
        body = lines.join("\n");
      }

      if (!file) return null;

      return {
        name: "write",
        file,
        body,
      };
    })
    .filter(Boolean);
};

export const apply = async (root, tools) => {
  for (const tool of tools) {
    if (tool.name !== "write") continue;

    const file = path.join(root, tool.file);

    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, tool.body);
  }
};