// backend/compute/test/act.js
import { join, resolve } from "node:path";
import { rm, mkdir, readFile } from "node:fs/promises";
import { act } from "../act.js";
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
    location: "test/act.js:check",
    message,
  });

  console.error("FAIL:", message);
  process.exit(1);
};

/**
 * test act against real tools via load indirection
 */
export const test = async () => {
  const location = "test/act.js:test";

  await log({
    location,
    message: "starting act test",
  });

  const working_directory = resolve(process.env.HOME);
  const dir = "humility_test_act";
  const root = join(working_directory, dir);
  const context = { working_directory: root };

  const file = "file.txt";

  // ensure clean test directory
  await rm(root, { recursive: true, force: true });
  await mkdir(root, { recursive: true });

  // -----------------------
  // write via act
  // -----------------------

  const write_op = await act({
    tool: "write",
    params: {
      name: file,
      content: "hello world",
    },
    context,
  });

  await check({ ok: write_op.type === "ok", message: "act write failed" });

  const real_after_write = await readFile(join(root, file), "utf8");

  await check({
    ok: real_after_write === "hello world",
    message: "act write did not persist correct content",
  });

  // -----------------------
  // read via act
  // -----------------------

  const read_op = await act({
    tool: "read",
    params: {
      name: file,
    },
    context,
  });

  await check({ ok: read_op.type === "ok", message: "act read failed" });

  if (read_op.type === "ok") {
    await check({
      ok: read_op.value === real_after_write,
      message: "act read content mismatch with filesystem",
    });
  }

  // -----------------------
  // edit via act
  // -----------------------

  const edit_op = await act({
    tool: "edit",
    params: {
      name: file,
      search: "world",
      replace: "fira",
    },
    context,
  });

  await check({ ok: edit_op.type === "ok", message: "act edit failed" });

  const real_after_edit = await readFile(join(root, file), "utf8");

  await check({
    ok: real_after_edit === "hello fira",
    message: "act edit did not persist correct content",
  });

  // -----------------------
  // shell via act
  // -----------------------

  const shell_op = await act({
    tool: "shell",
    params: {
      command: `cat ${file}`,
    },
    context,
  });

  await check({ ok: shell_op.type === "ok", message: "act shell failed" });

  if (shell_op.type === "ok") {
    await check({
      ok: shell_op.value.trim() === real_after_edit,
      message: "act shell output mismatch with filesystem",
    });
  }

  // cleanup
  await rm(root, { recursive: true, force: true });

  await log({
    level: "info",
    location,
    message: "act test ok",
  });

  console.log("act test ok");
};

if (import.meta.url === `file://${process.argv[1]}`) {
  test();
}