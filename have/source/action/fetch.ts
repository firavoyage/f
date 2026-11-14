import { chromium } from 'patchright'
import {
  deserialize,
  serialize,
  browser_profile,
  webpage_index_file,
  get_result_folder,
} from 'action/index'
import { random_id } from 'lib/random'
import { now } from 'lib/time'
import { extname, join, read, write } from 'lib/file'

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

async function fetch(url: string, options = {}) {
  const id = random_id()
  const dir = get_result_folder(id)
  const creation_time = now().timestamp

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

  const assets = new Map()

  page.on('response', async (response) =>
    handle(async () => {
      // Ignore failed or aborted background requests (e.g., preflight/redirects)

      const url = response.url()
      const type = response.request().resourceType()
      const status = response.status()

      // Filter for static assets and successful responses
      if (
        status >= 200 &&
        status < 300 &&
        ['stylesheet', 'image', 'font', 'script', 'media'].includes(type) &&
        !url.startsWith('data:')
      ) {
        const buffer = await response.body()
        const parsed_url = new URL(url)
        const ext = extname(parsed_url.pathname) || get_fallback_ext(type)
        const hash = crypto
          .createHash('md5')
          .update(url)
          .digest('hex')
          .slice(0, 10)
        const filename = `${hash}${ext}`
        
        const asset_file = join(dir, 'asset', filename)

        write(asset_file, buffer)
        assets.set(url, `./assets/${filename}`)
      }
    }),
  )

  await page.goto(url, { waitUntil: 'networkidle' })

  // 3. Rewrite asset URLs inside the live DOM to point to local files
  await page.evaluate((entries) => {
    const map = new Map(entries)
    const attrs = ['src', 'href', 'poster']

    document.querySelectorAll('*').forEach((el) => {
      for (const attr of attrs) {
        const val = el.getAttribute(attr)
        if (!val) continue
        // Resolve relative URLs against the page's base URL
        const absUrl = new URL(val, document.baseURI).href
        if (map.has(absUrl)) {
          el.setAttribute(attr, map.get(absUrl))
        }
      }
    })
  }, Array.from(assets.entries()))

  // 4. Save the final rendered HTML
  const html = await page.content()
  await fs.writeFile(path.join(OUT_DIR, 'index.html'), html, 'utf-8')

  await browser.close()
  log(`Saved index.html and ${assets.size} assets to ${OUT_DIR}`)

  function get_fallback_ext(resourceType) {
    const map = {
      stylesheet: '.css',
      script: '.js',
      image: '.png',
      font: '.woff2',
    }
    return map[resourceType] || '.bin'
  }

  // await browser.close();
}

fetch('https://example.org')
