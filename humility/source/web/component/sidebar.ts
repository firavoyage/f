import { text } from 'utility/text'
import { scroll } from './scroll'
import type { thread_hierarchy_item } from 'utility/thread_hierarchy'

type sidebar = {
  threads: thread_hierarchy_item[]
  thread_id: id | nil
  new_thread: () => void
  select_thread: (thread: id) => void
  hide_thread: (thread: id) => void
  toggle_folder: (folder: string) => void
}

// export function sidebar({
//   threads: thread_hierarchy,
//   thread_id,
//   new_thread: commands.new_thread,
//   select_thread: set_thread_id,
//   hide_thread: controls.hide_thread,
//   toggle_folder: controls.toggle_folder,
// }: sidebar) {
//   return 
// }
