import { chromium } from 'patchright';
import { browser_profile } from 'action/index'

async function run() {
  const context = await chromium.launchPersistentContext(browser_profile, {
    channel: 'chrome',
    headless: false,
    viewport: null,
  });

  // const page = context.pages()[0] || await context.newPage();

  // await page.goto('https://example.com');
  
  // await context.close();
}

run();
