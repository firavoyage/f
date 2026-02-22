import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { log } from "../../log.js";

/** @typedef {import('../../types').result} result */
/** @typedef {import('../../types').context} context */

export const tool = {
  name: "read",
  docs: {
    description: "read file content",
    params: { name: "string — file name relative to working_directory" },
  },

  /**
   * @param {object} params
   * @param {string} params.name
   * @param {context} params.context
   * @returns {Promise<result>}
   */
  fn: async ({ name, context }) => {
    const location = "compute/tools/read.js:fn";

    const path = resolve(join(context.working_directory, name));

    try {
      const value = await readFile(path, "utf8");

      await log({ location, message: `read ${name}` });

      return { type: "ok", value };
    } catch (error) {
      await log({
        level: "error",
        location,
        message: `read fail ${name}`,
      });

      return { type: "err", error: String(error.message || error) };
    }
  },
};