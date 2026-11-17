import { read } from 'lib/file'
import { parse as deserialize, stringify as serialize } from 'yaml'

import { thread_index_file } from 'action/index'

// todo: list range?
export function list() {
  return deserialize(read(thread_index_file))
}
