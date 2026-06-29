import { request } from 'backend/request';
import { lacks, get, set } from 'backend/store';
import { append } from 'backend/tree';
import { stringify } from 'yaml';
import { new_thread } from 'action/new_thread';

export const not_a_number = 'not a number'
export const non_existing = 'non existing'

const thread_count_key = 'thread.count'
const node_count_key = 'node.count'

// always unique
async function count(key: key): Promise<Result<number>> {
  if (await lacks(key)) {
    await set(key, '1')
    return 1
  }

  let count = await get(key, { must_exist: true }) as unknown as number

  count = Number(count)
  if (isNaN(count)) {
    throw err(not_a_number)
  }

  await set(key, `${count + 1}`)
  return count + 1
}

// separate append node and set node content
async function append_node(thread: key): Promise<Result<key>> {
  // have a unique nodeid
  const node_id = await count(node_count_key)

  // append 
  const append_result = await append(thread, node_id)

  const node_key = `node.${node_id}`
  return node_key
}

type chat_params = { message: string, thread?: key }

// todo: more message types
export async function chat({ message, thread, model }: any) {
  if (is_missing(thread)) {
    // do not count if exists
    const thread_id = await count(thread_count_key)
    thread = await new_thread(thread_id) as key
    // thread ??= await new_thread(thread_id)
  }

  if (await lacks(thread)) {
    throw err(non_existing)
  }

  const prompt_node_key = await append_node(thread)
  await set(prompt_node_key, stringify({ role: 'user', content: message }))

  const response_node_key = await append_node(thread)
  // const answer_node_key = await append_node(thread)

  // ?
  // todo: support models, more params. not just a mock. (support mock as well!)
  const { response } = await request({ message })

  // set nodeid content
  return await set(response_node_key, stringify({ role: 'assistant', content: response }))
}

