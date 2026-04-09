import { prepare } from "./prepare.js";
import { loop } from "./loop.js";

/** entry point */
export const begin = async (params) => {
  const prepared = await prepare(params);
  await loop(prepared);
};