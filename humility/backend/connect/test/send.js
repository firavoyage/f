import { send } from "../send.js";

(async () => {
  const result = await send("give me a list of 10 famous people", "chatgpt");
  console.log(result);
})();
