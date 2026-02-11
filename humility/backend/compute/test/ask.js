// test/ask.js
import { ask } from "../ask.js";
import { log } from "../../log.js";

const run = async () => {
  try {
    const { result } = await ask({ prompt: "hello" });
    log({ message: `Test response: ${result}` });
  } catch (err) {
    log({ message: `Test failed: ${err.message}` });
  }
};

run();
