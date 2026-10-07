import { parse } from 'yaml'
import { init_desktop, touch, data, config, read } from 'lib/file'
import { run } from 'lib/subprocess'

const config_file = 'apps.yaml'

init_desktop('launch', false)

touch(config(config_file))

type app = {
  name: string
  command: string
  options?: {
    userspace?: boolean | string
    port?: boolean | number
    port_flag?: string
  }
}

export function launch() {
  const apps = handle(() => parse(read(config_file))) ?? []

  if(is_error(apps)){
    throw err('config should be parsable')
  }

  if (!is(apps, 'array')) {
    throw err('config should be an array of apps')
  }

  map(apps, (app) => {
    const { name, command,  } = app
  })
}

function free_port() {
  return run("comm -23 <(seq 49152 65535 | sort) <(ss -Htan | awk '{print $4}' | cut -d':' -f2 | sort -u) | shuf | head -n 1")
}

log(free_port())
