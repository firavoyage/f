import { lacks, get, set } from 'backend/store';
import { append, init } from 'backend/tree';

const thread_count_key = 'thread.count'
const node_count_key = 'node.count'

// always unique
async function count(key) {
  if (await lacks(key)) {
    set(key, 1)
    return 1
  }

  const count = get(key)
  set(key, count + 1)
  return count
}

// todo: more message types
export async function chat({ message, thread = `thread.${count(thread_count_key)}` }: { message: string, thread?: number }) {
  // init the thread if non existing
  if (lacks(thread)) {
    init(thread)
  }

  // have a unique nodeid
  const node = count(node_count_key)

  // append 
  append(thread, node)

  // request
  

  // set nodeid content


}

