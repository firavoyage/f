// send.js
import * as chatgpt from "./chatgpt.js";
import * as deepseek from "./deepseek.js";
import * as ollama from "./ollama.js";

export const send = async (what, where = "chatgpt") => {
  const sites_map = {
    chatgpt,
    deepseek,
    ollama,
  };

  const site = sites_map[where];
  if (!site || typeof site.send !== "function") {
    throw new Error(`Invalid site: ${where}`);
  }

  return await site.send(what);
};
