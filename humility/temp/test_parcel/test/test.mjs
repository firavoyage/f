import { chromium } from "playwright";

const test_cases = [
  {
    name: "page loads with title",
    check: async (page) => {
      const title = await page.title();
      return title === "Parcel Test";
    },
  },
  {
    name: "heading is visible",
    check: async (page) => {
      const heading = page.locator("h1");
      return await heading.isVisible();
    },
  },
  {
    name: "message element has correct text",
    check: async (page) => {
      const message = page.locator("#message");
      const text = await message.textContent();
      return text === "Testing Playwright";
    },
  },
];

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("domcontentloaded");

    for (const tc of test_cases) {
      const result = await tc.check(page);
      console.log(`${result ? "✓" : "✗"} ${tc.name}`);
      if (!result) {
        process.exit(1);
      }
    }

    console.log("All tests passed");
  } finally {
    await browser.close();
  }
}

run();