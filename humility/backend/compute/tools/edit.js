import { readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { log } from "../../log.js";

/** @typedef {import('../../types').result} result */
/** @typedef {import('../../types').context} context */

export const tool = {
  name: "edit",
  docs: {
    description: "replace text inside file",
    params: {
      name: "string — file name relative to working_directory",
      search: "string — text to find",
      replace: "string — replacement text",
    },
  },

  /**
   * @param {object} params
   * @param {string} params.name
   * @param {string} params.search
   * @param {string} params.replace
   * @param {context} params.context
   * @returns {Promise<result>}
   */
  fn: async ({ name, search, replace, context }) => {
    const location = "compute/tools/edit.js:fn";

    const path = resolve(join(context.working_directory, name));

    try {
      const content = await readFile(path, "utf8");

      if (!content.includes(search)) {
        return { type: "err", error: "search text not found" };
      }

      const value = content.split(search).join(replace);

      await writeFile(path, value, "utf8");

      await log({ location, message: `edit ${name}` });

      return { type: "ok" };
    } catch (error) {
      await log({
        level: "error",
        location,
        message: `edit fail ${name}`,
      });

      return { type: "err", error: String(error.message || error) };
    }
  },
};