import { thread_folder, deserialize } from 'action/index'
import * as file from 'lib/file'
import { join } from 'lib/file'

export function read(thread: string) {
  return deserialize(file.read(join(thread_folder, thread)))
}