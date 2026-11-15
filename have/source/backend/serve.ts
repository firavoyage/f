import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import { join, read } from 'lib/file'
import { format_log } from 'lib/log'
import { parse_options } from 'lib/cli'
import * as actions from 'action/index'
import { result_folder, resolve_id, resolve_url, webpage_index_file, deserialize } from 'action/index'

const { stringify: serialize } = JSON

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

app.get('*', async (c, next) => {
  const id = trim(c.req.path, '/')
  const url = resolve_url(id)

  const html = handle(() => read(join(result_folder, id, 'index.html')))
  // const html = handle(() => read('../web/build/index.html'))

  if (!url || is_error(html)) {
    await next()

    // log('web/build/index.html should exist, run web build first')

    return c.text('nil')
  }

  const webpage_index = deserialize(read(webpage_index_file))

  // return c.html(html)
  return c.html(hook_navigation(html, url, (url) => replace(url, webpage_index)))
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

import { load } from 'cheerio'

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

function replace(
  url: string,
  webpage_index = deserialize(read(webpage_index_file)),
) {
  const id = resolve_id(url, webpage_index)

  // log({ url, id })

  if (id) {
    return `../../../${id}/`
  }
}
