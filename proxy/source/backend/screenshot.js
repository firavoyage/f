import { chromium } from 'patchright'
import { init_desktop, data } from 'lib/file'

init_desktop('proxy')

const PROFILE = data('twitter')
const TARGET_URL = 'https://example.com/dashboard'
const WAIT_SECONDS = 10

const context = await chromium.launchPersistentContext(PROFILE, {
  headless: false,
  viewport: {
    width: 1440,
    height: 900,
  },
  channel: 'chrome',
})

try {
  const page = context.pages()[0] ?? (await context.newPage())

  await page.goto(TARGET_URL, {
    waitUntil: 'domcontentloaded',
  })

  // Fixed loading delay
  await page.waitForTimeout(WAIT_SECONDS * 1000)

  // Full-page screenshot
  await page.screenshot({
    path: `screenshots/site-${Date.now()}.png`,
    fullPage: true,
    animations: 'disabled',
  })

  console.log('Screenshot captured successfully.')
} finally {
  await context.close()
}
