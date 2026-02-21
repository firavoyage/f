import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

/** @typedef {import('../../types').result} result */
/** @typedef {import('../../types').context} context */

export const tool = {
  name: "write",
  docs: {
    description: "create or overwrite a file with content",
    params: {
      name: "string — relative file path",
      content: "string — full file content",
    },
  },

  /**
   * @param {object} params
   * @param {string} params.name
   * @param {string} params.content
   * @param {context} params.context
   *
   * @returns {Promise<result>}
   */
  fn: async ({ name, content, context }) => {
    try {
      const path = join(context.working_directory, name);
      await mkdir(dirname(path), { recursive: true });
      await writeFile(path, content, "utf8");
      return { type: "ok" };
    } catch (error) {
      return { type: "err", error: String(error.message || error) };
    }
  },
};
