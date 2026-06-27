import { init } from 'backend/tree';
import { list, set_list } from 'action/list';

export async function new_thread(id: id): Promise<Result<key>> {
  const threads = await list()
  if (is_error(threads)) {
    return threads
  }

  const thread = `thread.${id}`
  await init(thread)
  // if (await lacks(thread)) {
  //   await init(thread)
  // }

  threads.push(id)

  await set_list(threads)

  return thread
}