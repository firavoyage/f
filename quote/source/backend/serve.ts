import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import {
  read,
  cwd,
  expand_path,
  does_exist,
  is_dir,
  parent,
  append,
} from 'lib/file'
import { format_log } from 'lib/log'
import { init_desktop, data, write, read } from 'lib/file'
const { stringify: serialize } = JSON

init_desktop('quote', false)

const quotes_file = data('quotes.jsonl')

const port = 9005
// const port = 0;

const app = new Hono()

app.use('*', cors())

// log requests
app.use('*', async (c, next) => {
  await next()
  log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
})

app.post('/api/save_quote', async (c) => {
  const quotation = await c.req.json()

  // log(quotation)

  append(quotes_file, `${serialize(quotation)}\n`)

  return c.json({})
})

app.post('/api/read', async (c) => {
  const quotes_jsonl = handle(() => read(quotes_file))

  if (is_error(quotes_jsonl)) {
    return c.json([])
  }

  const quotes = quotes_jsonl.trim().split('\n').map(JSON.parse)

  return c.json(quotes)
})

app.get('*', (c) => {
  if (c.req.path.startsWith('/api')) {
    return c.json({ success: false, message: 'api endpoint not found' }, 404)
  } else {
    try {
      const html = read('../web/build/index.html')
      return c.html(html)
    } catch {
      return c.text('web/build/index.html missing. Run web build first.', 500)
    }
  }
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
