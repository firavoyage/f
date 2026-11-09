import { thread_folder, deserialize } from 'action/index'
import { read as read_file, join } from 'lib/file'

export function read(thread: string) {
  return deserialize(read_file(join(thread_folder, thread)))
}