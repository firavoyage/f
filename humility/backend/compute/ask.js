// compute/ask.js
import { send } from "../connect/send.js";
import { add } from "../store/write.js";

/**
 * Send a message, store the prompt and response, and return the record ID.
 *
 * @param {Object} params
 * @param {string} params.what - The message to send
 * @param {string} [params.where="chatgpt"] - Optional site key
 * @param {number} [params.timeout] - Optional timeout in milliseconds
 * @returns {Promise<string>} - UUID of the stored record
 */
export async function ask({ what, where = "chatgpt", timeout }) {
  if (!what || typeof what !== "string") {
    throw new Error("Invalid 'what' parameter. Must be a non-empty string.");
  }

  let answer;
  let status = "success";

  try {
    if (timeout) {
      answer = await Promise.race([
        send(what, where),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), timeout)
        ),
      ]);
    } else {
      answer = await send(what, where);
    }
  } catch (err) {
    answer = null;
    status = err.message || "error";
  }

  const record = {
    prompt: what,
    answer,
    status,
  };

  const { id } = await add("ask", record);
  return id;
}
