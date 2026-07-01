/**
 * you could branch anything. branching is copying thread 
 * 
 * (, removing msgs below, and adding to thread list)
 * 
 * but you should generally branch from complete prompt-response pairs
 * 
 */

import { get } from "backend/store";

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

  if () {
    
  } 
}
