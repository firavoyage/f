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
  const html = await inline_assets(await page.content(), url, assets)
  write(join(dir, 'index.html'), html)

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


import * as cheerio from 'cheerio';
import postcss from 'postcss';
import { parse as parse_srcset, stringify as stringify_srcset } from 'srcset';

const url_attributes = [
  'src',
  'href',
  'poster',
  'action',
  'formaction',
  'data',
  'cite',
  'background',
  'xlink:href',
];

function inline_assets(html, url, assets) {
  const asset_map = assets instanceof Map
    ? assets
    : new Map(Object.entries(assets));

  const base_url = new URL(url);

  function replace_url(value) {
    if (!value || value.startsWith('#')) {
      return value;
    }

    let absolute_url;

    try {
      absolute_url = new URL(value, base_url).href;
    } catch {
      return value;
    }

    return asset_map.get(absolute_url) ?? value;
  }

  function replace_srcset(value) {
    try {
      const candidates = parse_srcset(value);

      return stringify_srcset(
        candidates.map(candidate => ({
          ...candidate,
          url: replace_url(candidate.url),
        })),
      );
    } catch {
      return value;
    }
  }

  function replace_css(css) {
    const root = postcss.parse(css);

    root.walkDecls(decl => {
      decl.value = replace_css_urls(decl.value);
    });

    root.walkAtRules('import', rule => {
      rule.params = replace_css_urls(rule.params);
    });

    return root.toString();
  }

  function replace_css_urls(value) {
    return value.replace(
      /url\(\s*(?:(["'])(.*?)\1|([^)]*?))\s*\)/gi,
      (match, quote, quoted_url, unquoted_url) => {
        const original_url = quoted_url ?? unquoted_url.trim();
        const replacement = replace_url(original_url);

        if (replacement === original_url) {
          return match;
        }

        const output_quote = quote || '"';

        return `url(${output_quote}${replacement}${output_quote})`;
      },
    );
  }

  const $ = cheerio.load(html, {
    decodeEntities: false,
  });

  $('*').each((_, element) => {
    const node = $(element);

    for (const attribute of url_attributes) {
      const value = node.attr(attribute);

      if (value !== undefined) {
        node.attr(attribute, replace_url(value));
      }
    }

    const srcset = node.attr('srcset');

    if (srcset !== undefined) {
      node.attr('srcset', replace_srcset(srcset));
    }

    const style = node.attr('style');

    if (style !== undefined) {
      node.attr('style', replace_css(style));
    }
  });

  $('style').each((_, element) => {
    const node = $(element);

    node.text(replace_css(node.html() ?? ''));
  });

  return $.html();
}

