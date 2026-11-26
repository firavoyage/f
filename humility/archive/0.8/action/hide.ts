import { update_thread_index } from 'action/index'

export function hide({ thread_id }) {
  update_thread_index((thread_index) => {
    thread_index[thread_id].is_hidden = true
  })
}
