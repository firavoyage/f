import {
  serialize,
  deserialize,
  get_thread_file,
  thread_index_file,
} from 'action/index'
import { read, write } from 'lib/file'

export let threads: Record<id, thread> = {}

export function read_thread(thread_id: id) {
  if (!has(threads, thread_id)) {
    threads[thread_id] = deserialize(read(get_thread_file(thread_id)))
  }

  return threads[thread_id]
}

export function update_thread(
  thread_id: id,
  new_thread: thread | ((thread: thread) => thread | void),
) {
  if (is(new_thread, 'function')) {
    let thread = read_thread(thread_id)

    new_thread = new_thread(thread) ?? thread
  }

  threads[thread_id] = new_thread

  write(get_thread_file(thread_id), serialize(new_thread))
}

export let thread_index: thread_index = deserialize(read(thread_index_file))

export function update_thread_index(
  new_thread_index: thread_index | ((thread: thread_index) => thread_index | void),
) {
  if (is(new_thread_index, 'function')) {
    new_thread_index = new_thread_index(thread_index) ?? thread_index
  }

  thread_index = new_thread_index

  write(thread_index_file, serialize(thread_index))
}
