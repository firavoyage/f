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
  touch,
} from 'lib/file'
import { format_log } from 'lib/log'

const { stringify: serialize } = JSON

const port = 9010
// const port = 0;

const app = new Hono()

app.use('*', cors())

// log requests
app.use('*', async (c, next) => {
  await next()
  log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
})

app.post('/api/read', async (c) => {
  const location = await c.req.json()

  const { folder, path } = location

  return c.json({})
})

app.use('*', serveStatic({ root: '../web/build' }))

app.get('*', (c) => {
  const html = handle(() => read('../web/build/index.html'))

  if (is_error(html)) {
    log('web/build/index.html should exist, run web build first')

    return c.text('')
  }

  return c.html(html)
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
