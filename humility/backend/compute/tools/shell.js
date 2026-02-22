import { exec } from "node:child_process";
import { promisify } from "node:util";
import { log } from "../../log.js";

const run = promisify(exec);

/** @typedef {import('../../types').result} result */
/** @typedef {import('../../types').context} context */

export const tool = {
  name: "shell",
  docs: {
    description: "execute shell command inside working_directory",
    params: { command: "string — shell command" },
  },

  /**
   * @param {object} params
   * @param {string} params.command
   * @param {context} params.context
   * @returns {Promise<result>}
   */
  fn: async ({ command, context }) => {
    const location = "compute/tools/shell.js:fn";

    const full = `cd "${context.working_directory}" && ${command}`;

    try {
      const { stdout, stderr } = await run(full);

      const value = [stdout, stderr].filter(Boolean).join("");

      await log({ location, message: `shell ${command}` });

      return { type: "ok", value };
    } catch (error) {
      await log({
        level: "error",
        location,
        message: `shell fail ${command}`,
      });

      return {
        type: "err",
        error: String(error.stderr || error.message || error),
      };
    }
  },
};