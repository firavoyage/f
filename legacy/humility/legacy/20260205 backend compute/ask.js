// compute/ask.js
import { send } from "../connect/send.js";
import * as flow from "../store/flow.js";

export async function ask({ what, where = "chatgpt", timeout }) {
  if (!what || typeof what !== "string") {
    throw new Error("ask: invalid what");
  }

  let answer = null;
  let status = "success";

  try {
    answer = timeout
      ? await Promise.race([
          send(what, where),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("timeout")), timeout)
          ),
        ])
      : await send(what, where);
  } catch (err) {
    status = err.message || "error";
  }

  const step = await flow.write("ask", {
    prompt: what,
    answer,
    status,
    where,
  });

  return {
    id: step.id,
    answer,
  };
}