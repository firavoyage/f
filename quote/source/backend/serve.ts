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

app.use('*', serveStatic({ root: '../web/build' }));

app.get('*', (c) => {
  const html = handle(() => read('../web/build/index.html'))

  if (is_error(html)) {
    log('web/build/index.html should exist, run web build first')

    return c.text('')
  }

  return c.html(html)
})
// app.get('*', (c) => {
//   if (c.req.path.startsWith('/api')) {
//     log(`api endpoint not found on ${c.req.path}`)

//     return c.json({ message: 'api endpoint not found' }, 404)
//   } else {
//     const html = handle(() => read('../web/build/index.html'))

//     if (is_error(html)) {
//       log('web/build/index.html should exist, run web build first')

//       return c.html('123')
//     }

//     return c.html(html)
//   }
// })

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    log(`Serve on http://localhost:${info.port}`)
  },
)
