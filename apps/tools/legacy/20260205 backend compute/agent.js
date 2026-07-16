import fs from "fs";
import path from "path";
import { create } from "../store/flow.js";
import { run } from "./run.js";
import { limit } from "./limit.js";

export const agent = async ({ task, root, turns = 5 }) => {
  // ensure root folder exists
  fs.mkdirSync(root, { recursive: true });

  // ensure progress.md exists
  const progress = path.join(root, "progress.md");
  if (!fs.existsSync(progress)) {
    fs.writeFileSync(progress, "# progress\n\n");
  }

  create(task);

  let turn = 0;

  while (true) {
    if (limit({ turn, max: turns })) break;
    await run({ task, root, turn });
    turn += 1;
  }
};