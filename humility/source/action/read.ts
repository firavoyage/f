import { deserialize, get_thread_file } from 'action/index'
import * as file from 'lib/file'
import { join } from 'lib/file'

export function read(thread: string) {
  return deserialize(file.read(get_thread_file(thread)))
}