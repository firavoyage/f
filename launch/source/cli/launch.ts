import { parse } from 'yaml'
import { init_desktop, touch, data, config, read, write, append } from 'lib/file'
import { run } from 'lib/subprocess'

const config_file = 'apps.yaml'
const caddy_file = '/etc/caddy/Caddyfile'

init_desktop('launch', false)

touch(config(config_file))

type app = {
  name: string
  command?: string
  options?: {
    userspace?: boolean | string
    port?: boolean | number
    port_flag?: string
  }
}

export function launch() {
  const apps: app[] = handle(() => parse(read(config_file))) ?? []

  if (is_error(apps)) {
    throw err('config should be parsable')
  }

  if (!is(apps, 'array')) {
    throw err('config should be an array of apps')
  }

  const rev_proxies = []

  map(apps, (app) => {
    const { name, command, options = {} } = app

    const { userspace, port = false, port_flag = '--port' } = options

    const actual_port = port === true ? free_port() : port

    if (command) {
      if (port) {
        run(`command ${port_flag} ${actual_port}`, options)
      } else {
        run(command, options)
      }
    }

    if (port) {
      rev_proxies.push({
        name, port: actual_port
      })
    }
  })

  if (rev_proxies.length != 0) {
    write(caddy_file, '')

    map(rev_proxies, (rev_proxy) => {
      const { name, port } = rev_proxy
      append(caddy_file, `http://${name}.localhost {\n`)
      append(caddy_file, `    reverse_proxy localhost:${port}\n`)
      append(caddy_file, `}\n`)
    })
  }
  
  run('sudo systemctl reload caddy')
}

function free_port() {
  return run(`node -e "require('net').createServer().listen(0, function() { console.log(this.address().port); process.exit(0); })"`)
}


