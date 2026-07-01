import { get } from "backend/store";
import { stringify } from "yaml";

export const unsupported_format = 'unsupported_format'

type format = 'yaml' | 'markdown';

/**
 * todo: 
 * 
 * option: export everything, not just current focus
 */
async function export_to_markdown(thread_array) {
  let result = ''

  for (const node of thread_array) {
    if (node.value == 'root') {
      continue
    } 

    const node_content = await get(node.value)

    if (has(node_content, 'type')) {
      result = result + `${node.type}\n\n`
    } 
    
    
  }
}

export async function export_to(thread: key, format: format) {
  const thread_array = await get(thread)

  if (format == 'yaml') {
    return stringify(thread_array)
  } else if (format == 'markdown') {
    return export_to_markdown(thread_array)
  } else {
    throw err(unsupported_format)
  } 
}