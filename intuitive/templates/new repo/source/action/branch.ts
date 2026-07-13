/**
 * you could branch anything. branching is copying thread 
 * 
 * (, removing msgs below, and adding to thread list)
 * 
 * but you should generally branch from complete prompt-response pairs
 * 
 */

import { get, set } from "backend/store";
import { new_thread } from "./new_thread";

export const non_existing_index = 'non existing index'

/**
 * you can branch below a response
 * 
 * you can also open a question/response in new tab. 
 * 
 * you always have the response copied as well
 */

/**
 * todo:
 * 
 * - option: only copy the focused path (rm siblings)
 * 
 * no index: duplicate thread
 */
export async function branch(thread: key, index?: number) {
  const thread_array = await get(thread)

  if (is_given(index)) {
    if (!has(thread_array, index)) {
      throw err(non_existing_index)
    }
    
    thread_array[index].children = []
  }

  const new_thread_key = await new_thread()

  await set(new_thread_key, thread_array)

  return new_thread_key
}
