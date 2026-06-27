import { request } from 'backend/request';
import { lacks, get, set } from 'backend/store';
import { append } from 'backend/tree';
import { stringify } from 'yaml';
import { new_thread } from './new_thread';

export const not_a_number = 'not a number'

const thread_count_key = 'thread.count'
const node_count_key = 'node.count'

// always unique
async function count(key: key): Promise<Result<number>> {
  if (await lacks(key)) {
    await set(key, '2')
    return '1'
  }

  let count = await get(key, { must_exist: true }) as unknown as number
  if (is_error(count)) {
    return count
  }

  count = Number(count)
  if (isNaN(count)) {
    return err(not_a_number)
  }

  await set(key, `${count + 1}`)
  return count
}

// todo: more message types
export async function chat({ message, thread }: { message: string, thread?: Result<key> }) {
  const thread_id = await count(thread_count_key)
  if (is_error(thread_id)) {
    return thread_id
  }

  thread ??= await new_thread(thread_id)
  if (is_error(thread)) {
    return thread
  }

  // have a unique nodeid
  const node_id = await count(node_count_key)
  if (is_error(node_id)) {
    return node_id
  }

  const node_key = `node.${node_id}`

  // append 
  await append(thread, node_id)

  // request
  // ?
  const response = { response: await request(message) }

  // set nodeid content
  return await set(node_key, stringify(response))
}


