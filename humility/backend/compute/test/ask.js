// test/ask.js
import { ask } from "../ask.js";
import { log } from "../../log.js";

const prompt = "hello";
// const prompt = "hello, what can you do";

const run = async () => {
  await log({ message: `Ask: ${prompt}` });

  const res = await ask({ prompt });

  if (res.type === "ok") {
    await log({ message: `Test response: ${JSON.stringify(res.value)}` });
  } else {
    await log({ level: "error", message: `Test failed: ${res.error}` });
  }
};

run();
