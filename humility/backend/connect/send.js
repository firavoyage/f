// send.js
import * as chatgpt from "./chatgpt.js";
import * as deepseek from "./deepseek.js";

/**
 * Send a message to a specific site
 * @param {string} what - The message to send
 * @param {string} where - The site key ('chatgpt' | 'deepseek')
 * @returns {Promise<string>} - The response from the site
 */
export const send = async (what, where = "chatgpt") => {
  const sites_map = {
    chatgpt,
    deepseek,
  };

  const site = sites_map[where];
  if (!site || typeof site.send !== "function") {
    throw new Error(`Invalid site: ${where}`);
  }

  return await site.send(what);
};
