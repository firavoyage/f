// todo: feat (secure): cleanup after timeout failure.

import * as chatgpt from "./chatgpt.js";
import * as deepseek from "./deepseek.js";
import * as ollama from "./ollama.js";

const DEFAULT_TIMEOUT = 90_000;

/**
 * with_timeout — wraps an async function with a timeout
 * @param {object} options
 * @param {function(): Promise<any>} options.task
 * @param {number} options.ms
 */
export const with_timeout = async ({ task, ms }) => {
  return await Promise.race([
    task(),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), ms)
    ),
  ]);
};

/**
 * send — sends a message to a model with timeout protection
 * @param {object} options
 * @param {string} options.message
 * @param {string} [options.model="chatgpt"]
 * @param {number} [options.timeout=90000]
 */
export const send = async ({
  message,
  model = "chatgpt",
  timeout = DEFAULT_TIMEOUT,
}) => {
  const sites_map = {
    chatgpt,
    deepseek,
    ollama,
  };

  const site = sites_map[model];

  if (!site || typeof site.send !== "function") {
    throw new Error(`invalid model: ${model}`);
  }

  return await with_timeout({
    task: () => site.send(message),
    ms: timeout,
  });
};
