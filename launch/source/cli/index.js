#!/usr/bin/env bun

import 'lib/global'
import { init_desktop, touch, data, config } from 'lib/file'
import { parse } from 'yaml'

const config_file = 'apps.yaml'

init_desktop('launch', false)

touch(config(config_file))

function launch() {
  const apps = read(config_file)


}
