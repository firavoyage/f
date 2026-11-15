// browser playground

import { chromium } from 'patchright'
import {
  deserialize,
  serialize,
  browser_profile,
  webpage_index_file,
  get_result_folder,
  log_file,
  setup_browser,
} from 'action/index'

const viewport = {
  width: 1920,
  height: 1080,
  // width: 1440,
  // height: 900,
}

export async function config_browser({
  // undefined (omitted) means light, while nil/no pref evaluates to system
  theme = 'system' as 'system' | 'light' | 'dark',
} = {}) {
  return setup_browser({
    should_hide_window: false
  })
}
