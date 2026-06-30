import { request } from 'backend/request';
import { lacks, get, set } from 'backend/store';
import { append, read, traverse } from 'backend/tree';
import { stringify } from 'yaml';
import { new_thread } from 'action/new_thread';

export const not_a_number = 'not a number'
export const non_existing = 'non existing'

const thread_count_key = 'thread.count'
const node_count_key = 'node.count'

// always unique
async function count(key: key) {
  if (await lacks(key)) {
    await set(key, '1')
    return 1
  }

  const count = Number(await get(key, { must_exist: true }))
  if (isNaN(count)) {
    throw err(not_a_number)
  }

  await set(key, `${count + 1}`)
  return count + 1
}

// separate append node and set node content
async function append_node(thread: key): Promise<key> {
  // have a unique nodeid
  const node_id = await count(node_count_key)

  // append 
  await append(thread, node_id)

  const node_key = `node.${node_id}`
  return node_key
}

async function build_context(thread: key) {
  const nodes = traverse(await read(thread))
}

// type chat_params = { message: string, thread?: key }

// todo: more message types
export async function chat({ message, thread, model, provider }: any) {
  thread ??= await new_thread(await count(thread_count_key))

  // thread is explicitly given but non existing
  if (await lacks(thread)) {
    throw err(non_existing)
  }

  const prompt_node_key = await append_node(thread)
  const prompt_node = { role: 'user', content: message }
  
  await set(prompt_node_key, stringify(prompt_node))

  const response_node_key = await append_node(thread)

  // todo: support models, more params. not just a mock. (support mock as well!)
  const { response } = await request({ message, model, provider })

  const response_node = { type: 'response', role: 'assistant', content: response }

  // set nodeid content
  await set(response_node_key, stringify(response_node))
}

