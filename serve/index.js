#!/usr/bin/env bun

import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import fs from 'node:fs'
import { read, cwd, expand_path, does_exist } from 'lib/file'
import { now, format } from 'lib/time'
import { format_log } from 'lib/log'
import 'lib/global'

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
    not_found: nil,
    port: 0,
    root: cwd(),
  }

  let should_skip = false
  for (const [index, arg] of args.entries()) {
    if (should_skip) {
      should_skip = false
      continue
    }

    if (has(['-h', '--help'], arg)) {
      log(help)
      return nil
    } else if (has(['-v', '--version'], arg)) {
      log(version)
      return nil
    } else if (has(['-i', '--index'], arg)) {
      options.index = args[index + 1]
      should_skip = true
    } else if (has(['--not-found'], arg)) {
      options.not_found = args[index + 1]
      should_skip = true
    } else if (has(['-p', '--port'], arg)) {
      options.port = args[index + 1]
      should_skip = true
    } else if (has(['-r', '--root'], arg)) {
      options.root = expand_path(cwd(), args[index + 1])
      should_skip = true
    } else {
      // arg
      options.index = arg
    }
  }

  if (options.not_found == nil) {
    options.not_found = options.index
  }

  return options
}

function run(options) {
  const { index, not_found, port, root } = options

  const app = new Hono()

  app.use('*', cors())

  // Log Requests
  app.use('*', async (c, next) => {
    await next()
    log(format_log(`${c.req.method} ${c.req.path}`, 'info'))
    // const time = format(now())
    // await next()
    // log(`${time} ${c.req.method} ${c.req.path}`)
  })

  app.get('/', (c) => {
    const index_file = expand_path(root, index)

    if (does_exist(index_file)) {
      return c.html(read(index_file))
    } else {
      log(format_log('index file should exist', 'error'))
      return c.text('not found')
    } 
  });

  // Serve Static Resources (e.g. css, js, img)
  app.use('*', serveStatic({ root }))

  // Fallback to Not Found
  app.get('*', (c) => {
    const not_found_file = expand_path(root, not_found)

    if (does_exist(not_found_file)) {
      return c.html(read(not_found_file))
    } else {
      log(format_log('not found file should exist', 'error'))
      return c.text('not found')
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

function main() {
  const options = parse_args()

  if (options) {
    run(options)
  }
}

main()
