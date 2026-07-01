import { get } from "backend/store";
import { traverse } from "backend/tree";

const nodes = (await traverse(await get('thread.1'))).slice(1)

log(nodes)

const context = []

for (const node of nodes) {
  const node_content = await get(`node.${node.value}`, { must_exist: true })
  log(node_content)

  const { type } = node_content

  if (type == 'prompt' || type == 'response' || type == 'system_prompt') {
    const { role, content } = node_content
    context.push({ role, content })
  }
  // ignore everything else
}

log(context)
