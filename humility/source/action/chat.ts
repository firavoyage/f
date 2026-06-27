import { request } from 'backend/request';
import { lacks, get, set } from 'backend/store';
import { append, init } from 'backend/tree';
import { stringify } from 'yaml';
import { new_thread } from './new_thread';

const thread_count_key = 'thread.count'
const node_count_key = 'node.count'

// always unique
async function count(key: key) {
  if (await lacks(key)) {
    await set(key, '2')
    return '1'
  }

  const count = await get(key, { must_exist: true }) as Result<string>
  if (is_error(count)) {
    return count
  }

  await set(key, `${+count + 1}`)
  return count
}

// todo: more message types
export async function chat({ message, thread }: { message: string, thread?: key }) {
  thread ??= await new_thread(await count(thread_count_key))

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


