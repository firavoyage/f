import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import { join, read } from 'lib/file'
import { format_log } from 'lib/log'
import { parse_options } from 'lib/cli'
import * as actions from 'action/index'
import {
  deserialize,
  serialize,
  result_folder,
  resolve_url,
  webpage_index_file,
  list,
  result,
} from 'action/index'
import { load } from 'cheerio'
import { marked } from 'marked'
import * as time from 'lib/time'

const { stringify } = JSON

const { port } = parse_options({
  port: {
    type: 'number',
    short: 'p',
    default: 9010,
    // default: 8192
  },
})

const app = new Hono()

app.use('*', cors())

// log requests
app.use('*', async (c, next) => {
  await next()
  log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
})

// app.get('list/:url{.+}', async (c, next) => {
//   log(c.req.param('url'))

//   return c.text(`nil`)
// })

app.get('list/*', async (c, next) => {
  const _url = new URL(c.req.url)

  const prefix = '/list/'
  const url = (_url.pathname + _url.search + _url.hash).slice(prefix.length)

  const pages = list(url)

  return c.html(
    `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css" type="text/css">
    ${render(
      `# ${url}

${map(pages, (page) => {
  const { id, url, creation_time } = page

  return `- [${time.at(creation_time).format()}](/${id}/)`
}).join('\n')}`,
    )}`,
  )

  // return c.text(`nil`)
})

app.get('http*', async (c, next) => {
  const _url = new URL(c.req.url)

  const prefix = '/'
  const url = (_url.pathname + _url.search + _url.hash).slice(prefix.length)

  const pages = list(url)

  return c.html(
    `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css" type="text/css">
    ${render(
      `# ${url}

${map(pages, (page) => {
  const { id, url, creation_time } = page

  return `- [${time.at(creation_time).format()}](/${id}/)`
}).join('\n')}`,
    )}`,
  )

  // return c.text(`nil`)
})

app.get('*', async (c, next) => {
  // hash auto trimmed on c.req.path it seems
  const id = trim(c.req.path, '/')
  const url = resolve_url(id)

  const html = handle(() => read(join(result_folder, id, 'index.html')))
  // const html = handle(() => read('../web/build/index.html'))

  if (!url || is_error(html)) {
    await next()

    // log('web/build/index.html should exist, run web build first')

    return c.text('nil')
  }

  let webpage_map = get_webpage_map()

  // return c.html(html)
  return c.html(hook_navigation(html, url, (url) => replace(url, webpage_map)))
  // return c.html(hook_navigation(html, url, (url) => replace(url, webpage_index)))
})

app.use('*', serveStatic({ root: result_folder }))
// app.use('*', serveStatic({ root: '../web/build' }))

app.post('/api/:action{.+}', async (c) => {
  const action = c.req.param('action')
  const payload = await c.req.json()

  const result = await actions[action](payload)

  return c.json(result ?? {})
})

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    log(`Serve on http://localhost:${info.port}`)
  },
)

export function hook_navigation(
  html: string,
  url: string,
  replace: (url: string) => string | undefined,
): string {
  const $ = load(html)
  const base_url = new URL(url)

  $('a[href], area[href]').each((_, element) => {
    const href = $(element).attr('href')

    if (!href) return

    try {
      const absolute_url = new URL(href, base_url).href
      const replaced_url = replace(absolute_url)

      $(element).attr('href', replaced_url ?? absolute_url)
    } catch {
      // Leave invalid URLs unchanged.
    }
  })

  return $.html()
}

type TrimChar = string | string[]

function trim(s: string, char: TrimChar = ' \t\n\r'): string {
  const chars = new Set(Array.isArray(char) ? char : [...char])

  return trim_end(trim_start(s, [...chars]), [...chars])
}

function trim_start(s: string, char: TrimChar = ' \t\n\r'): string {
  const chars = new Set(Array.isArray(char) ? char : [...char])
  let i = 0

  while (i < s.length && chars.has(s[i])) {
    i++
  }

  return s.slice(i)
}

function trim_end(s: string, char: TrimChar = ' \t\n\r'): string {
  const chars = new Set(Array.isArray(char) ? char : [...char])
  let i = s.length

  while (i > 0 && chars.has(s[i - 1])) {
    i--
  }

  return s.slice(0, i)
}

function replace(url: string, webpage_map = get_webpage_map()) {
  const id = resolve_id(normalize_url(url), webpage_map)
  // const id = resolve_id(url, webpage_index)

  // log({ url, id })

  if (id) {
    return `../../../${id}/`
  }
}

function resolve_id(url, webpage_map = get_webpage_map()) {
  return webpage_map.get(url)
}

function normalize_url(value: string) {
  const parsed_url = new URL(value)
  parsed_url.hash = ''
  return parsed_url.href
}

function render(md: string) {
  return marked.parse(md, {
    gfm: true,
    breaks: true,
  })
}

function get_webpage_map() {
  const webpage_index: result[] = deserialize(read(webpage_index_file))
  const webpage_map = dict()
  for (const page of webpage_index) {
    const { id, url } = page

    webpage_map.set(url, id)
  }

  return webpage_map
}
