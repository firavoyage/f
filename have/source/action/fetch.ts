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
import * as cheerio from 'cheerio'
import postcss from 'postcss'
import {
  parseSrcset as parse_srcset,
  stringifySrcset as stringify_srcset,
} from 'srcset'
import { load } from 'cheerio'

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

export async function fetch(url: string, { is_static = true } = {}) {
  const id = random_id()
  const dir = get_result_folder(id)

  if (should_hide_window) {
    process.env.DISPLAY = display_number
  }

  let colorScheme = theme == 'system' ? 'no-preference' : theme
  const browser = await chromium.launchPersistentContext(browser_profile, {
    channel: 'chrome',
    headless: false,
    viewport,
    // viewport: nil,
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

  // // Rewrite asset URLs inside the live DOM to point to local files
  // await page.evaluate((entries) => {
  //   const map = new Map(entries)
  //   const attrs = ['src', 'href', 'poster']

  //   document.querySelectorAll('*').forEach((element) => {
  //     for (const attr of attrs) {
  //       const value = element.getAttribute(attr)
  //       if (!value) continue
  //       // Resolve relative URLs against the page's base URL
  //       const absolute_url = new URL(value, document.baseURI).href
  //       if (map.has(absolute_url)) {
  //         element.setAttribute(attr, map.get(absolute_url))
  //       }
  //     }
  //   })
  // }, entries(assets))

  // Save the final rendered HTML
  let html = await page.content()

  html = inline_assets(html, url, assets)

  if (is_static) {
    html = snapshot(html)
  }

  write(join(dir, 'index.html'), html)

  log(`Saved ${url} to ${dir}/index.html w ${assets.size} assets`)

  let webpage_index = deserialize(read(webpage_index_file))
  let record = {
    id,
    url,
    creation_time,
    metadata: {
      assets
    }
  }

  webpage_index.push(record)

  write(webpage_index_file, serialize(webpage_index))
  log(`Updated index`)

  await browser.close()
}

function get_fallback_ext(type) {
  const map = {
    stylesheet: '.css',
    script: '.js',
    image: '.png',
    font: '.woff2',
  }
  return map[type] || '.bin'
}

export function inline_assets(html, url, assets) {
  const asset_entries =
    assets instanceof Map ? [...assets.entries()] : Object.entries(assets)

  const asset_map = new Map(
    asset_entries.map(([asset_url, replacement]) => [
      new URL(asset_url).href,
      replacement,
    ]),
  )

  const base_url = new URL(url)

  function resolve_url(value) {
    if (!value || value.startsWith('#')) {
      return null
    }

    try {
      return new URL(value.trim(), base_url).href
    } catch {
      return null
    }
  }

  function replace_url(value) {
    const absolute_url = resolve_url(value)

    if (!absolute_url) {
      return {
        value,
        replaced: false,
      }
    }

    if (!asset_map.has(absolute_url)) {
      return {
        value,
        replaced: false,
      }
    }

    return {
      value: asset_map.get(absolute_url),
      replaced: true,
    }
  }

  function replace_srcset(value) {
    try {
      const candidates = parse_srcset(value)

      if (!candidates.length) {
        return {
          value,
          replaced: false,
          complete: false,
        }
      }

      const replacements = candidates.map((candidate) => ({
        ...candidate,
        ...replace_url(candidate.url),
      }))

      const complete = replacements.every((candidate) => candidate.replaced)

      return {
        value: complete
          ? stringifySrcset(
              replacements.map(({ replaced, ...candidate }) => candidate),
            )
          : value,
        replaced: replacements.some((candidate) => candidate.replaced),
        complete,
      }
    } catch {
      return {
        value,
        replaced: false,
        complete: false,
      }
    }
  }

  function replace_css_urls(value) {
    return value.replace(
      /url\(\s*(?:(["'])(.*?)\1|([^)]*?))\s*\)/gi,
      (match, quote, quoted_url, unquoted_url) => {
        const original_url = quoted_url ?? unquoted_url.trim()
        const replacement = replace_url(original_url)

        if (!replacement.replaced) {
          return match
        }

        const output_quote = quote || '"'

        return `url(${output_quote}${replacement.value}${output_quote})`
      },
    )
  }

  function replace_css(css) {
    const root = postcss.parse(css)

    root.walkDecls((decl) => {
      decl.value = replace_css_urls(decl.value)
    })

    root.walkAtRules('import', (rule) => {
      rule.params = replace_css_urls(rule.params)

      const match = rule.params.match(/^(['"])(.*?)\1$/)

      if (match) {
        const replacement = replace_url(match[2])

        if (replacement.replaced) {
          rule.params = `${match[1]}${replacement.value}${match[1]}`
        }
      }
    })

    return root.toString()
  }

  const $ = cheerio.load(html, {
    decodeEntities: false,
  })

  $('*').each((_, element) => {
    const node = $(element)

    // Handle image sources separately.
    if (element.tagName === 'img') {
      const src = node.attr('src')

      if (src !== undefined) {
        const replacement = replace_url(src)

        if (replacement.replaced) {
          node.attr('src', replacement.value)
        }
      }

      const srcset = node.attr('srcset')

      if (srcset !== undefined) {
        const result = replace_srcset(srcset)

        if (result.complete) {
          node.attr('srcset', result.value)
        } else {
          // Prevent browser selection of unavailable external candidates.
          node.removeAttr('srcset')
          node.removeAttr('sizes')
        }
      }
    } else {
      for (const attribute of [
        'src',
        'href',
        'poster',
        'action',
        'formaction',
        'data',
        'cite',
        'background',
        'xlink:href',
      ]) {
        const value = node.attr(attribute)

        if (value !== undefined) {
          const replacement = replace_url(value)

          if (replacement.replaced) {
            node.attr(attribute, replacement.value)
          }
        }
      }

      const srcset = node.attr('srcset')

      if (srcset !== undefined) {
        const result = replace_srcset(srcset)

        if (result.complete) {
          node.attr('srcset', result.value)
        } else {
          node.removeAttr('srcset')
          node.removeAttr('sizes')
        }
      }
    }

    const style = node.attr('style')

    if (style !== undefined) {
      node.attr('style', replace_css(style))
    }
  })

  $('style').each((_, element) => {
    const node = $(element)
    node.text(replace_css(node.html() ?? ''))
  })

  return $.html()
}

function snapshot(html) {
  const $ = load(html)

  $('script, iframe, object, embed').remove()

  return $.root().html() ?? ''
}
