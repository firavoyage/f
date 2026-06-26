import { request } from 'backend/request';
import { lacks, get, set } from 'backend/store';
import { append, init } from 'backend/tree';
import { stringify } from 'yaml';

const thread_count_key = 'thread.count'
const node_count_key = 'node.count'

// always unique
async function count(key: string) {
  if (await lacks(key)) {
    await set(key, '2')
    return '1'
  }

  const count = await get(key)
  if (is_error(count)) {
    return count
  }

  await set(key, `${+count + 1}`)
  return count
}

// todo: more message types
export async function chat({ message, thread }: { message: string, thread?: string }) {
  thread ??= `thread.${await count(thread_count_key)}`
  console.log(thread)

  // init the thread if non existing
  if (await lacks(thread)) {
    await init(thread)
  }

  // have a unique nodeid
  const node = `node.${await count(node_count_key)}`

  // append 
  await append(thread, node)

  // request
  // ?
  const response = { response: await request(message) }

  // set nodeid content
  return await set(node, stringify(response))
}


