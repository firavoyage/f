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
import { createHash as create_hash } from 'crypto'

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

export async function fetch(url: string, options = {}) {
  const id = random_id()
  const dir = get_result_folder(id)

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

  const assets = dict()

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
        const hash = create_hash('sha256')
          .update(buffer)
          .digest('hex')
          .slice(0, 16)
        // const hash = createHash('md5').update(url).digest('hex').slice(0, 10)
        const filename = `${hash}${ext}`

        const asset_file = join(dir, 'asset', filename)

        write(asset_file, buffer)
        assets.set(url, `./asset/${filename}`)
      }
    }),
  )

  const creation_time = now().timestamp
  await page.goto(url, { waitUntil: 'networkidle' })

  // Rewrite asset URLs inside the live DOM to point to local files
  await page.evaluate((entries) => {
    const map = new Map(entries)
    const attrs = ['src', 'href', 'poster']

    document.querySelectorAll('*').forEach((element) => {
      for (const attr of attrs) {
        const value = element.getAttribute(attr)
        if (!value) continue
        // Resolve relative URLs against the page's base URL
        const absolute_url = new URL(value, document.baseURI).href
        if (map.has(absolute_url)) {
          element.setAttribute(attr, map.get(absolute_url))
        }
      }
    })
  }, entries(assets))

  // Save the final rendered HTML
  const html = await page.content()
  write(join(dir, 'index.html'), html)

  function get_fallback_ext(type) {
    const map = {
      stylesheet: '.css',
      script: '.js',
      image: '.png',
      font: '.woff2',
    }
    return map[type] || '.bin'
  }

  log(`Saved ${url} to ${dir}/index.html w ${assets.size} assets`)

  let webpage_index = deserialize(read(webpage_index_file))
  let record = {
    id,
    url,
    creation_time,
  }

  webpage_index.push(record)

  write(webpage_index_file, serialize(webpage_index))
  log(`Updated index`)

  await browser.close();
}

