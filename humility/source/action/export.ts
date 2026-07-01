import { get } from "backend/store";
import { traverse } from "backend/tree";
import { stringify } from "yaml";

export const unsupported_format = 'unsupported_format'

type format = 'yaml' | 'markdown';

async function export_to_markdown(thread_array) {
  let result = ''

  for (const node of thread_array) {
    if (node.value == 'root') {
      continue
    }

    const node_content = await get(`node.${node.value}`)

    if (has(node_content, 'type')) {
      result = result + `# ${node_content.type}\n\n`
    } else {
      result = result + `# message\n\n`

    }

    result = result + `${node_content.content}\n\n`
  }

  return result
}

/**
 * todo: 
 * 
 * option: export everything, not just current focus
 * 
 * support export override (new export formats, overriding existing ones)
 * 
 * by default you have two ways
 * 
 * - app.tsx override (the nuclear option)
 * - extension (new buttons on bars, new commands on ctrl p, new keybindings, etc.)
 * 
 */
export async function export_to(thread: key, format: format) {
  const thread_array = traverse(await get(thread))

  if (format == 'yaml') {
    return stringify(thread_array)
  } else if (format == 'markdown') {
    return export_to_markdown(thread_array)
  } else {
    throw err(unsupported_format)
  }
}