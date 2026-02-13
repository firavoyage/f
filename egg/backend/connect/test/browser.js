import { open } from "../browser.js";

/**
 * simple test: open example.com
 */
const run = async () => {
  const page = await open({ profile: "default" });

  await page.goto("https://example.com");

  console.log("opened example.com");
};

run();
