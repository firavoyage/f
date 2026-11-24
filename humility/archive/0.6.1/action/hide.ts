import { deserialize, serialize, thread_index_file } from 'action/index'
import { read, write } from 'lib/file'

export function hide({ thread }) {
  let thread_index: thread_index = deserialize(read(thread_index_file))

  thread_index[thread].is_hidden = true

  write(thread_index_file, serialize(thread_index))
}
