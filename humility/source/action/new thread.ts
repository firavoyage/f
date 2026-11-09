import { serialize, deserialize, config, threads_file, thread_folder } from 'action/index'
import { touch, join } from 'lib/file'
import { now } from 'lib/time'
import { random_id } from 'lib/random'

export function new_thread() {
  const id = random_id()

  const creation_time = now().timestamp

  
}