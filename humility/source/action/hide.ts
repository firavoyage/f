import { serialize, deserialize, thread_index_file } from 'action/index'
import { read, write } from 'lib/file'

export function hide(thread: string) {
  let threads = deserialize(read(thread_index_file))

  threads[thread].is_hidden = true

  write(thread_index_file, serialize(threads))
}