// backend/compute/act.js
import { load } from "./load.js";
import { log } from "../log.js";

/**
 * Load a tool and execute it with given params and context.
 *
 * @async
 * @function act
 * @param {object} params - Act parameters.
 * @param {string} params.tool - Tool name to load.
 * @param {object} params.params - Parameters passed to the tool.
 * @param {import("./../types").context} params.context - Execution context.
 * @returns {Promise<import("./../types").result>} Result of tool execution.
 *
 * @example
 * const result = await act({
 *   tool: "read",
 *   params: { path: "notes.md" },
 *   context: { working_directory: "/home/fira/project" }
 * });
 */
export const act = async ({ tool, params, context }) => {
  console.log({ tool, params, context });
  await log({
    level: "debug",
    location: "compute/act.js:act",
    message: `start tool=${tool}`,
  });

  const loaded = await load({ tool });

  if (loaded.type === "err") {
    await log({
      level: "error",
      location: "compute/act.js:act",
      message: `load fail tool=${tool} error=${loaded.error}`,
    });

    return loaded;
  }

  const fn = loaded.value.fn;

  await log({
    level: "debug",
    location: "compute/act.js:act",
    message: `run tool=${tool}`,
  });

  console.log({ ...params, context });
  const result = await fn({ ...params, context });

  if (result.type === "err") {
    await log({
      level: "warn",
      location: "compute/act.js:act",
      message: `tool err tool=${tool} error=${result.error}`,
    });

    return result;
  }

  await log({
    level: "debug",
    location: "compute/act.js:act",
    message: `done tool=${tool}`,
  });

  return result;
};