// serve/run.js
import { init } from "../store/init.js";

async function run() {
  try {
    const storage = await init();
    console.log("Humility storage initialized at:", storage.dir);
  } catch (err) {
    console.error("Failed to initialize Humility storage:", err);
  }
}

// Execute immediately
run();