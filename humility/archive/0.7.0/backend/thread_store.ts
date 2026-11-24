import { read, write } from 'lib/file'
import {
  deserialize,
  get_thread_file,
  serialize,
  thread_index_file,
} from 'action/index'
import { empty_thread_structure } from 'utility/thread'

export function read_thread_structure(thread: id): thread_structure {
  return handle(
    () => deserialize(read(get_thread_file(thread))),
    empty_thread_structure(),
  )
}

export function mutate_thread(thread: id, update_thread) {
  mutate_file(get_thread_file(thread), update_thread)
}

export function mutate_thread_index(update_thread_index) {
  mutate_file(thread_index_file, update_thread_index)
}

function mutate_file(file, update_file) {
  const file_structure = deserialize(read(file))
  let new_file_structure = update_file(file_structure)

  if (is(new_file_structure, 'absent')) {
    new_file_structure = file_structure
  }

  write(file, serialize(new_file_structure))
}
