import { readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { log } from "../log.js";

/** @typedef {import('./../types').result} result */

/**
 * dynamically load a tool by name
 *
 * @param {object} params
 * @param {string} params.tool
 * @param {string} [params.root] - optional, defaults to repo root
 *
 * @returns {Promise<result>}
 */
export const load = async ({
  tool,
  root = resolve(fileURLToPath(import.meta.url), "../../.."),
}) => {
  const location = "load.js:load";

  await log({
    level: "debug",
    location,
    message: `attempting to load tool "${tool}"`,
  });

  const directory = resolve(root, "backend/compute/tools");

  const entries = await readdir(directory).catch(async (error) => {
    await log({
      level: "error",
      location,
      message: `failed to read directory ${directory}: ${error.message}`,
    });
  });

  if (!entries) return { type: "err", error: "failed to read tools directory" };

  const match = entries.find((name) => name === `${tool}.js`);
  if (!match) {
    await log({
      level: "warn",
      location,
      message: `tool "${tool}" not found`,
    });
    return { type: "err", error: `tool "${tool}" not found` };
  }

  const full_path = join(directory, match);
  const module = await import(pathToFileURL(full_path).href).catch(
    async (error) => {
      await log({
        level: "error",
        location,
        message: `failed to import ${full_path}: ${error.message}`,
      });
    }
  );

  if (!module) return { type: "err", error: `failed to import tool "${tool}"` };

  if (!module.tool) {
    await log({
      level: "error",
      location,
      message: `tool "${tool}" has no export "tool"`,
    });
    return { type: "err", error: `tool "${tool}" invalid export` };
  }

  if (typeof module.tool.fn !== "function") {
    await log({
      level: "error",
      location,
      message: `tool "${tool}" missing fn`,
    });
    return { type: "err", error: `tool "${tool}" missing fn` };
  }

  await log({
    level: "info",
    location,
    message: `tool "${tool}" loaded`,
  });

  return { type: "ok", value: module.tool };
};
