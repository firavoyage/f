import { fetch, setup_browser, traverse, traverse_options } from 'action/index'

export async function scrape(url: string, options: traverse_options = {}) {
  let browser = await setup_browser()

  await traverse(fetch, url, {
    should_visit(current_url) {
      return current_url.startsWith(url)
    },
    ...options,
  })

  await browser.close()
}
