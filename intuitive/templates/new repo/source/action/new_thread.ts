import { init } from 'backend/tree';
import { list, set_list } from 'action/list';
import { count } from 'backend/store';

const thread_count_key = 'thread.count'

export async function new_thread(): Promise<key> {
  const id = await count(thread_count_key)

  const threads = await list()

  const thread = `thread.${id}`
  await init(thread)
  // if (await lacks(thread)) {
  //   await init(thread)
  // }

  threads.push(id)

  await set_list(threads)

  return thread
}