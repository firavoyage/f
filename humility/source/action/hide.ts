import { serialize, deserialize, threads_file } from 'action/index'
import { read, write } from 'lib/file'

export function hide(thread: string) {
  let threads = deserialize(read(threads_file))

  threads[thread].is_hidden = true

  write(threads_file, serialize(threads))
}