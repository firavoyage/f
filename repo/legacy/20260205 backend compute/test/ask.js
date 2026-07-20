// compute/test/ask.js
import { ask } from "../ask.js";
import * as flow from "../../store/flow.js";

async function test() {
  try {
    console.log("Creating session...");
    await flow.create("ask-test");

    console.log("Sending test message...");
    const id = await ask({ what: "Hello, Humility! How are you?" });
    console.log("Stored ask step ID:", id);

    const record = await flow.read();
    console.log("Stored record content:");
    console.log(JSON.stringify(record, null, 2));

    console.log("✅ Test completed successfully.");
  } catch (err) {
    console.error("❌ Test failed:", err);
  }
}

// Run the test if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  test();
}