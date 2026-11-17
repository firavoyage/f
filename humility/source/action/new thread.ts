import {
  serialize,
  deserialize,
  thread_index_file,
  get_thread_file,
} from 'action/index'
import { read, write } from 'lib/file'
import { now } from 'lib/time'
import { random_id } from 'lib/random'

export function new_thread({ title = '', folder = '' }) {
  const thread = random_id()
  // const id = random_id()

  const creation_time = now().timestamp

  const threads = deserialize(read(thread_index_file))

  threads[thread] = {
    title,
    folder,
    creation_time,
  }

  write(thread_index_file, serialize(threads))

  write(get_thread_file(thread), serialize([]))

  return thread
}
