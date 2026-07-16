import { send } from "../send.js";

(async () => {
  const result = await send({
    message: "hello",
    model: "chatgpt",
    timeout: 90_000,
  });

  console.log(result);
})();
