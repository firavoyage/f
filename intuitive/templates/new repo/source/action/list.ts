import { get, set } from 'backend/store';

const thread_list_key = 'thread.list'

export async function list(): Promise<id[]> {
  return await get(thread_list_key) ?? []
}

export async function set_list(threads: id[]) {
  return set(thread_list_key, threads)
}