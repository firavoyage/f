import { chromium } from 'patchright'
import { browser_profile } from 'action/index'

const should_hide_window = true
const display_number = ':99'

// undefined (omitted) means light, while nil/no pref evaluates to system
const theme: 'system' | 'light' | 'dark' = 'system'

const viewport = {
  width: 1920,
  height: 1080,
  // width: 1440,
  // height: 900,
}

async function run() {
  // if (should_hide_window) {
  //   process.env.DISPLAY = display_number
  // }

  let colorScheme = theme == 'system' ? 'no-preference' : theme

  const browser = await chromium.launchPersistentContext(browser_profile, {
    channel: 'chrome',
    headless: false,
    viewport: nil,
    colorScheme,
  })

  const page = browser.pages()[0] || (await browser.newPage())

  await page.goto('https://example.org')

  log(await page.evaluate(() => document.body.innerHTML))

  // await browser.close();
}

run()
