import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import {
  init_desktop,
  data,
  config,
  read,
  cwd,
  expand_path,
  does_exist,
  is_dir,
  parent,
  touch,
  join,
} from 'lib/file'
import { format_log } from 'lib/log'
import { parse, stringify } from 'yaml'
const { stringify: serialize } = JSON
import { renderToHtml } from 'md4x'
import { run } from 'lib/subprocess'

init_desktop('para', false)

const config_file = config('config.yaml')

touch(config_file)

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

  const config = parse(read(config_file))

  const dir = config.folders[folder]

  const content = handle(() => read(join(dir, path)))

  if (is_error(content)) {
    return c.json({ html: 'not found' })
  }

  return c.json({ html: renderToHtml(content) })
})

app.post('/api/search', async (c) => {
  const { query } = await c.req.json()

  const config = parse(read(config_file))

  // todo
  const dir = entries(config.folders)[0][1]

  const command = `find . | fzf -f ${santinize(query)}`
  log(command, dir)
  const items_text = handle(() => run(command, { cwd: dir }))

  // it fails when no matches
  if (is_error(items_text)) {
    return c.json({ items: [] })
    // log('failed to search', items_text)
    // return c.json({ has_failed: true })
  }

  return c.json({ items: items_text.split('\n') })
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

function santinize(arg) {
  return `'${arg.replaceAll("'", '')}'`
}