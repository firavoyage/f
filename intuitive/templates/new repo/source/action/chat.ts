import { request } from 'backend/request';
import { lacks, get, set, count } from 'backend/store';
import { append, traverse } from 'backend/tree';
import { new_thread } from 'action/new_thread';

export const non_existing = 'non existing'

const node_count_key = 'node.count'

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
  const nodes = (await traverse(await get(thread))).slice(1)
  const context = []

  for (const node of nodes) {
    if (await lacks(`node.${node.value}`)) {
      continue
    }

    const node_content = await get(`node.${node.value}`, { must_exist: true })

    const { type } = node_content

    /**
     * todo: (convert) tool calls?
     */
    if (type == 'prompt' || type == 'response' || type == 'system_prompt') {
      const { role, content } = node_content
      context.push({ role, content })
    }

    // ignore everything else
  }

  return context
}

// type chat_params = { message: string, thread?: key }

// todo: more message types
export async function chat({ message, thread, model, provider }: any) {
  thread ??= await new_thread()

  // thread is explicitly given but non existing
  if (await lacks(thread)) {
    throw err(non_existing)
  }

  const prompt_node_key = await append_node(thread)
  const prompt_node = { type: 'prompt', role: 'user', content: message }

  await set(prompt_node_key, prompt_node)

  const response_node_key = await append_node(thread)

  const context = await build_context(thread)

  // todo: support models, more params. not just a mock. (support mock as well!)
  const { response } = await request({ context, model, provider })

  const response_node = { type: 'response', role: 'assistant', content: response }

  // set nodeid content
  await set(response_node_key, response_node)

  return thread
}

