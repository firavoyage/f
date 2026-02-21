import { log } from "../log.js";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

import { decide } from "./decide.js";
import { rest } from "./rest.js";
import { plan } from "./plan.js";
import { ask } from "./ask.js";
import { parse } from "./parse.js";
import { act } from "./act.js";
import { load } from "./load.js";

/**
 * @param {object} params
 * @param {string} params.working_directory
 * @param {string} params.task
 */
export const prepare = async ({ working_directory, task }) => {
  const context = { working_directory };
  const verbs = { decide, rest, plan, ask, parse, act };

  // initialize progress.md
  const progress_path = join(working_directory, "progress.md");
  await log({ message: `Preparing working directory: ${working_directory}` });
  await writeFile(progress_path, "", { flag: "a" });

  // load builtin tools (load will use its default root)
  const tools = {};
  const tool_names = ["write", "edit", "read", "shell"];
  for (const name of tool_names) {
    const res = await load({ tool: name });
    if (res.type === "ok") tools[name] = res.value;
    else await log({ level: "warn", message: `Tool "${name}" failed to load: ${res.error}` });
  }

  const config = { tools };

  return { task, context, config, verbs };
};