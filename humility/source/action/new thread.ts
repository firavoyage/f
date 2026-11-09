import { serialize, deserialize, threads_file, thread_folder } from 'action/index'
import { read, write, join } from 'lib/file'
import { now } from 'lib/time'
import { random_id } from 'lib/random'

export function new_thread(title: string = '') {
  const thread = random_id()
  // const id = random_id()

  const creation_time = now().timestamp

  const threads = deserialize(read(threads_file))

  threads[thread] = {
    title,
    // // will be instantly initialized as the first msg
    // title: '',
    // // title: 'New Thread',
    creation_time,
  }

  write(threads_file, serialize(threads))

  write(join(thread_folder, thread), serialize([]))

  return thread
}