import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import fs from 'node:fs'
import { read, cwd, relative_path } from 'lib/file'
import { now, format } from 'lib/time'

const { stringify: serialize } = JSON

const version = `serve 0.0 (2026.10.26)`

const help = `
Serve static pages

Usage: serve [file] [options]

Options:
  -i, --index [file]     Page to serve (same as file arg)
  --not-found [file]     Page to show when not found (default: index)
  -p, --port [number]    Port to serve on (default: 0, random)
  -r, --root [path]      Root folder for reletive paths (default: cwd)
  -h, --help             Print help
  -v, --version          Print version
`.trim()

function parse_args() {
  const args = process.argv.slice(2)

  const options = {
    index: 'index.html',
    not_found: 'index.html',
    port: 0,
    root: cwd(),
  }

  let should_skip = false
  for (const [index, arg] of entries(args)) {
    if (has(['-h', '--help'], arg)) {
      log(help)
      return nil
    } else if (has(['-v', '--version'], arg)) {
      log(version)
      return nil
    } else if (has(['-i', '--index'], arg)) {
      options.index = arg
    } else if (has(['--not-found'], arg)) {
      options.not_found = arg
    } else if (has(['-p', '--port'], arg)) {
      options.port = arg
    } else if (has(['-r', '--root'], arg)) {
      options.root = arg
    }
  }

  return options
}

function main() {
  const options = parse_args()

  if (options) {
    serve(options)
  }
}

function serve(options) {
  const { index, not_found, port, root } = options

  const app = new Hono()

  app.use('*', cors())

  // Log Requests
  app.use('*', async (c) => {
    const time = format(now())
    log(`${time} ${c.req.method} ${c.req.path}`)
  })

  // Serve Static Resources (e.g. css, js, img)
  app.use('*', serveStatic({ root: relative_path() }))

  // Fallback to Not Found
  app.get('*', (c) => {
    if (c.req.path.startsWith('/api')) {
      return c.json({ success: false, message: 'api endpoint not found' }, 404)
    } else {
      try {
        const html = fs.readFileSync('../web/build/index.html', 'utf-8')
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
}

main()
