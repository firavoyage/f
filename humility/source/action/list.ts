import { read } from 'lib/file'
import { parse as deserialize, stringify as serialize } from 'yaml'

import { threads_file } from 'action/index'

// todo: list range?
export function list() {
  return read(threads_file) || {}
}
