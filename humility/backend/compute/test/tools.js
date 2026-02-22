import { join, resolve } from "node:path";
import { rm, mkdir, readFile } from "node:fs/promises";
import { load } from "../load.js";
import { log } from "../../log.js";

/**
 * simple assertion (no throw)
 *
 * @param {object} params
 * @param {boolean} params.ok
 * @param {string} params.message
 */
const check = async ({ ok, message }) => {
  if (ok) return;

  await log({
    level: "error",
    location: "test/tools.js:check",
    message,
  });

  console.error("FAIL:", message);
  process.exit(1);
};

/**
 * test all core tools against real filesystem
 */
export const test = async () => {
  const location = "test/tools.js:test";

  await log({
    location,
    message: "starting tools test",
  });

  const working_directory = resolve(process.env.HOME);
  const dir = "humility_test_tools";
  const root = join(working_directory, dir);
  const context = { working_directory: root };

  const file = "file.txt";

  // ensure clean test directory
  await rm(root, { recursive: true, force: true });
  await mkdir(root, { recursive: true });

  // load tools
  const write_result = await load({ tool: "write" });
  const read_result = await load({ tool: "read" });
  const edit_result = await load({ tool: "edit" });
  const shell_result = await load({ tool: "shell" });

  await check({ ok: write_result.type === "ok", message: "failed to load write" });
  await check({ ok: read_result.type === "ok", message: "failed to load read" });
  await check({ ok: edit_result.type === "ok", message: "failed to load edit" });
  await check({ ok: shell_result.type === "ok", message: "failed to load shell" });

  if (
    write_result.type !== "ok" ||
    read_result.type !== "ok" ||
    edit_result.type !== "ok" ||
    shell_result.type !== "ok"
  ) {
    return;
  }

  const write = write_result.value;
  const read = read_result.value;
  const edit = edit_result.value;
  const shell = shell_result.value;

  // -----------------------
  // write
  // -----------------------

  const write_op = await write.fn({
    name: file,
    content: "hello world",
    context,
  });

  await check({ ok: write_op.type === "ok", message: "write failed" });

  const real_after_write = await readFile(join(root, file), "utf8");

  await check({
    ok: real_after_write === "hello world",
    message: "write did not persist correct content",
  });

  // -----------------------
  // read
  // -----------------------

  const read_op = await read.fn({
    name: file,
    context,
  });

  await check({ ok: read_op.type === "ok", message: "read failed" });

  if (read_op.type === "ok") {
    await check({
      ok: read_op.value === real_after_write,
      message: "read content mismatch with filesystem",
    });
  }

  // -----------------------
  // edit
  // -----------------------

  const edit_op = await edit.fn({
    name: file,
    search: "world",
    replace: "fira",
    context,
  });

  await check({ ok: edit_op.type === "ok", message: "edit failed" });

  const real_after_edit = await readFile(join(root, file), "utf8");

  await check({
    ok: real_after_edit === "hello fira",
    message: "edit did not persist correct content",
  });

  // -----------------------
  // shell
  // -----------------------

  const shell_op = await shell.fn({
    command: `cat ${file}`,
    context,
  });

  await check({ ok: shell_op.type === "ok", message: "shell failed" });

  if (shell_op.type === "ok") {
    await check({
      ok: shell_op.value.trim() === real_after_edit,
      message: "shell output mismatch with filesystem",
    });
  }

  // cleanup
  await rm(root, { recursive: true, force: true });

  await log({
    level: "info",
    location,
    message: "tools test ok",
  });

  console.log("tools test ok");
};

if (import.meta.url === `file://${process.argv[1]}`) {
  test();
}