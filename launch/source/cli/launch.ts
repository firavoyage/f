import { parse } from 'yaml'
import { init_desktop, touch, data, config, read } from 'lib/file'

const config_file = 'apps.yaml'

init_desktop('launch', false)

touch(config(config_file))

type app = {
  name: string
  command: string
  options?: {
    userspace?: boolean | 
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

