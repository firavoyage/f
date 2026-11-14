import { chromium } from 'patchright'
import { browser_profile } from 'action/index'

const should_hide_window = true
const display_number = ':99'
const theme: 'system' | 'light' | 'dark' = 'system'

async function run() {
  // if (should_hide_window) {
  //   process.env.DISPLAY = display_number
  // }

  let colorScheme = theme == 'system' ? 'no-preference': theme

  const browser = await chromium.launchPersistentContext(browser_profile, {
    channel: 'chrome',
    headless: false,
    viewport: null,
    colorScheme,
  })

  const page = browser.pages()[0] || (await browser.newPage())

  await page.goto('https://example.org')

  log(await page.evaluate(() => document.body.innerHTML))

  // await browser.close();
}

run()
