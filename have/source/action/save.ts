// save page now

import { fetch, setup_browser } from 'action/fetch'

export async function save(url: string) {
  const browser = await setup_browser()

  await fetch(url)

  await browser.close()
}
