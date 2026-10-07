import { parse } from 'yaml'
import { init_desktop, touch, data, config, read, write, append } from 'lib/file'
import { run, spawn } from 'lib/subprocess'

init_desktop('launch', false)

const config_file = config('apps.yaml')
const caddy_file = '/etc/caddy/Caddyfile'

touch(config_file)

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

    const log_file = data(`${name}.log`)
    touch(log_file)

    const actual_port = port === true ? free_port() : port

    if (command) {
      function log_into_file(type: 'info' | 'warn' | 'error', message: string) {
        let line = `${datetime()} [${type}] ${message}`
        if (!line.endsWith('\n')) {
          line += '\n'
        }

        append(log_file, line)
      }

      spawn(port ? `${command} ${port_flag} ${actual_port}` : command, {
        userspace,
        stdout(data) {
          log_into_file('info', data)
        },
        stderr(data) {
          log_into_file('error', data)
        },
        finish(code, signal) {
          const type = code == 0 ? 'warn' : 'error'
          const signal_message = is(signal, 'nil') ? '' : ` signal ${signal}`
          log_into_file(type, `exit code ${code}${signal_message}`)
        }
      })
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

function datetime() {
  const now = new Date();

  // 1. Get the local date & time components
  const pad = (num) => String(num).padStart(2, '0');
  const YYYY = now.getFullYear();
  const MM = pad(now.getMonth() + 1);
  const DD = pad(now.getDate());
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  // 2. Calculate the timezone offset (+hh:mm or -hh:mm)
  const offsetMinutes = now.getTimezoneOffset();
  const sign = offsetMinutes <= 0 ? '+' : '-';
  const absMinutes = Math.abs(offsetMinutes);
  const offsetHours = pad(Math.floor(absMinutes / 60));
  const offsetMins = pad(absMinutes % 60);

  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}${sign}${offsetHours}:${offsetMins}`;
}

