// browser playground

import { chromium } from 'patchright'
import {
  deserialize,
  serialize,
  browser_profile,
  webpage_index_file,
  get_result_folder,
  log_file,
} from 'action/index'

const viewport = {
  width: 1920,
  height: 1080,
  // width: 1440,
  // height: 900,
}

export async function test(
  url: string,
  {
    should_hide_window = false,
    display_number = ':99',
    is_static = true,
    timeout = 10000,
    // undefined (omitted) means light, while nil/no pref evaluates to system
    theme = 'system' as 'system' | 'light' | 'dark',
  } = {},
) {
  if (should_hide_window) {
    process.env.DISPLAY = display_number
  }

  let colorScheme = theme == 'system' ? 'no-preference' : theme
  const browser = await chromium.launchPersistentContext(browser_profile, {
    channel: 'chrome',
    headless: false,
    viewport: nil,
    colorScheme,
  })

  const page = browser.pages()[0] || (await browser.newPage())

  // await browser.close()
}
