import { lacks, get, set } from 'backend/store';
import { init } from 'backend/tree';

const thread_count_key = 'thread_count'

// always unique
async function thread_count() {
  if (await lacks(thread_count_key)) {
    set(thread_count_key, 1)
    return 1
  }

  const count = get(thread_count_key)
  set(thread_count_key, count + 1)
  return count
}

// todo: more message types
export async function chat({ message, thread = thread_count() }: { message: string, thread?: number }) {
  const thread_key = `thread.${thread}`

  // init the thread if non existing
  if (lacks(thread)) {
    init(thread_key)
  }

  
  // read and parse the thread, iterate the focus path to the bottom

  // append children (the index)

  // append array (at the index) as the id

  // request

  // set nodeid content


}

