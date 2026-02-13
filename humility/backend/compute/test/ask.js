// test/ask.js
import { ask } from "../ask.js";
import { log } from "../../log.js";

const prompt = "hello, what can you do";

const run = async () => {
  log({ message: `Ask: ${prompt}` });

  try {
    const { result } = await ask({ prompt });
    log({ message: `Test response: ${result}` });
  } catch (err) {
    log({ message: `Test failed: ${err.message}` });
  }
};

run();
