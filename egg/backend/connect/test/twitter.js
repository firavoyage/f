import { open } from "../browser.js";
import { read } from "../twitter.js";
import { log } from "../../log.js";

/**
 * run — open list and read tweets
 */
const run = async () => {
  const page = await open({ profile: "default" });

  await page.goto("https://x.com/i/lists/2004814679450009818", {
    waitUntil: "networkidle"
  });

  const data = await read({
    page,
    profile: "default"
  });

  await log({
    message: JSON.stringify(data, null, 2)
  });
};

run();
