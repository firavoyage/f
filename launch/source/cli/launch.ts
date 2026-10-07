import { parse } from 'yaml'
import { init_desktop, touch, data, config, read } from 'lib/file'

const config_file = 'apps.yaml'

init_desktop('launch', false)

touch(config(config_file))

export function launch() {
  const apps = handle(() => parse(read(config_file)))

  if(is_error(apps)){
    throw err()
  }

  if(is_error()){
    
    
    throw er
  }
}

