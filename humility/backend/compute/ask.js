/** @typedef {import('../types').result} result */
import { send } from "../connect/send.js";

/**
 * ask — sends a prompt to a model and returns the markdown result
 * @param {object} options
 * @param {string} options.prompt
 * @param {string} [options.model]
 * @param {number} [options.timeout]
 * @returns {Promise<result>} — { type: 'ok', value } or { type: 'err', error }
 */
export const ask = async ({ prompt, model, timeout }) => {
  try {
    const value = await send({
      message: prompt,
      model,
      timeout,
    });
    return { type: "ok", value };
  } catch (err) {
    return { type: "err", error: err instanceof Error ? err.message : String(err) };
  }
};
