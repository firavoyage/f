import { parse } from 'yaml'
import { init_desktop, touch, data, config, read, write } from 'lib/file'
import { run } from 'lib/subprocess'

const config_file = 'apps.yaml'

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

  if(is_error(apps)){
    throw err('config should be parsable')
  }

  if (!is(apps, 'array')) {
    throw err('config should be an array of apps')
  }

  map(apps, (app) => {
    const { name, command, options = {} } = app

    const { userspace, port = false, port_flag = '--port' } = options
    
    
  })
}

function free_port() {
  return run(`node -e "require('net').createServer().listen(0, function() { console.log(this.address().port); process.exit(0); })"`)
}

// log(run('sudo systemctl reload caddy'))

