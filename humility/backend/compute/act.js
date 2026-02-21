import { load } from "./load.js";

/**
 * @param {object} params
 * @param {string} params.tool
 * @param {object} params.params
 * @param {object} params.context
 */
export const act = async ({ tool, params, context }) => {
  const loaded = await load({ tool, root: context.working_directory });
  if (loaded.type === "err") return loaded;

  const fn = loaded.value.fn;
  return fn({ ...params, context });
};