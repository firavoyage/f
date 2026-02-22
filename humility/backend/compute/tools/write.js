import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { log } from "../../log.js";

/** @typedef {import('../../types').result} result */
/** @typedef {import('../../types').context} context */

export const tool = {
  name: "write",
  docs: {
    description: "create or overwrite file",
    params: {
      name: "string — file name relative to working_directory",
      content: "string — full file content",
    },
  },

  /**
   * @param {object} params
   * @param {string} params.name
   * @param {string} params.content
   * @param {context} params.context
   * @returns {Promise<result>}
   */
  fn: async ({ name, content, context }) => {
    console.log({ name, content, context });
    const location = "compute/tools/write.js:fn";

    const path = resolve(join(context.working_directory, name));

    try {
      await mkdir(dirname(path), { recursive: true });
      await writeFile(path, content, "utf8");

      await log({ location, message: `write ${name}` });

      return { type: "ok" };
    } catch (error) {
      await log({
        level: "error",
        location,
        message: `write fail ${name}`,
      });

      return { type: "err", error: String(error.message || error) };
    }
  },
};