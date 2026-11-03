import { chromium } from 'patchright'
import { init_desktop, data } from 'lib/file'
import { now } from 'lib/time'

init_desktop('proxy')

const PROFILE = data('profile/twitter')
const TARGET_URL = 'https://github.blog/open-source/gaming/game-off-2026-the-theme-is-shift/'
// const TARGET_URL = 'https://example.com/dashboard'
const WAIT_SECONDS = 5
// const WAIT_SECONDS = 10
// const screenshot_folder = 'twitter'
const screenshot_folder = 'test'

const context = await chromium.launchPersistentContext(PROFILE, {
  headless: false,
  viewport: {
    width: 1920,
    height: 1080,
    // width: 1440,
    // height: 900,
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

  for (const i of each(5)) {
    await page.mouse.wheel(0, 700)

    await page.waitForTimeout(1000)

    // Full-page screenshot
    await page.screenshot({
      path: data(`screenshots/${screenshot_folder}/${now().format()} ${i}.png`),
      fullPage: true,
      animations: 'disabled',
    })
  }


  console.log('Screenshot captured successfully.')
} finally {
  await context.close()
}
