import assert from "node:assert/strict";
import { prepare } from "../prepare.js";
import { join } from "node:path";
import { mkdir, rm, readFile } from "node:fs/promises";

const run_test = async () => {
  const working_directory = join(process.env.HOME || "~", "test_prepare");

  // clean up previous runs
  await rm(working_directory, { recursive: true, force: true });
  await mkdir(working_directory, { recursive: true });

  const task = "test task";

  const result = await prepare({ working_directory, task });

  // check structure
  assert(result.context && result.context.working_directory === working_directory, "context missing or incorrect");
  assert(result.verbs && typeof result.verbs.decide === "function", "verbs missing or incomplete");
  assert(result.config && typeof result.config.tools === "object", "config.tools missing");

  // check builtin tools loaded
  const tools = result.config.tools;
  const expected_tools = ["write", "edit", "read", "shell"];
  expected_tools.forEach(name => {
    assert(tools[name], `tool "${name}" not loaded`);
    assert(typeof tools[name].fn === "function", `tool "${name}" has no fn`);
  });

  // check progress.md exists
  const progress_path = join(working_directory, "progress.md");
  const content = await readFile(progress_path, "utf8");
  assert(content === "", "progress.md not initialized empty");

  console.log("✅ prepare.js test passed");
};

run_test();