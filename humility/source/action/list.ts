import { parse, stringify } from 'yaml';
import { get, set } from 'backend/store';

const thread_list_key = 'thread.list'

export async function list(): Promise<Result<id[]>> {
  const threads = await get(thread_list_key)
  if (is_error(threads)) {
    return threads
  }

  return threads ? parse(threads) : []
}

export async function set_list(threads: id[]) {
  return set(thread_list_key, stringify(threads))
}