// compute/test/ask.js
import { ask } from "../ask.js";
import { get } from "../../store/read.js";

async function test() {
  try {
    console.log("Sending test message...");

    // Send a test prompt
    const id = await ask({ what: "Hello, Humility! How are you?" });
    console.log("Stored ask record ID:", id);

    // Fetch the stored record
    const record = await get(id);
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