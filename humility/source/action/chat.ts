import { has, get, set } from 'backend/store';

const thread_count_key = 'thread_count'

// always unique
async function thread_count() {
  if (await has(thread_count_key)) {
    const count = get(thread_count_key)
    set(thread_count_key, count + 1)
    return count
  }

  set(thread_count_key, 1)
  return 1
}

// todo: more message types
export async function chat({ message, thread = thread_count() }: { message: string, thread?: number }) {
  // init the thread if non existing

  // read and parse the thread, iterate the focus path to the bottom

  // append children (the index)

  // append array (at the index) as the id

  // request
  
  // set nodeid content

  
}

