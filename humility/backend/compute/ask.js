// ask.js
import { send } from "../connect/send.js";

/**
 * ask — sends a prompt to a model and returns the markdown result
 * fails loudly if sending fails
 * @param {object} options
 * @param {string} options.prompt
 */
export const ask = async ({ prompt }) => {
  const result = await send(prompt);
  return { result };
};
