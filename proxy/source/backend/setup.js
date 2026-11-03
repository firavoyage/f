import { chromium } from 'patchright'
import { init_desktop, data } from 'lib/file'

init_desktop('proxy')

const context = await chromium.launchPersistentContext(
  data('profile/twitter'),
  {
    headless: false,
    viewport: null,
    channel: 'chrome',
    args: ['--start-maximized'],
  },
)

const page = context.pages()[0] ?? (await context.newPage())

await page.goto('https://example.com', {
  waitUntil: 'domcontentloaded',
})

console.log('Log in and configure your account manually.')
console.log('Close the browser when finished.')

await new Promise((resolve) => {
  context.on('close', resolve)
})
