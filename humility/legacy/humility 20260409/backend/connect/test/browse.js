import { get_page } from "../browser.js";

async function main() {
  const page = await get_page();

  // Open about:blank
  await page.goto("about:blank");

  console.log("Browser opened at about:blank");
}

main()
  .then(() => console.log("Done"))
  .catch(console.error);