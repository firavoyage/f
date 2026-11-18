import { deserialize, serialize, thread_index_file } from 'action/index'
import { read } from 'lib/file'

export function list() {
  return deserialize(read(thread_index_file))
}
