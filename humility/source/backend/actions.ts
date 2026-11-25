import {
  hide,
  mutate_thread,
  read_thread,
  thread_index,
  update_thread,
  update_thread_index,
} from 'action'
import { all_clients, broadcast } from './websocket'
import { monotonic, now } from 'lib/time'
import { append_message, build_context, empty_thread } from 'utility/thread'
import { random_id } from 'lib/random'
import { base_url_model_key, generate_stream_openai } from 'utility/generate'

export const non_mutative_actions: action[] = ['subscribe', 'unsubscribe']

// thread_id -> clients
let subscribers: Record<id, Set<WebSocket>> = {}

export const actions: Record<action, fn> = {
  subscribe({ thread_id, client }) {
    subscribers[thread_id] ??= set()

    subscribers[thread_id].add(client)

    broadcast('set_thread', read_thread(thread_id), client)
  },
  unsubscribe({ thread_id, client }) {
    subscribers[thread_id]?.delete?.(client)
  },
  init({ thread_id, title, folder }) {
    let thread_index = update_thread_index((thread_index) => {
      thread_index[thread_id] = {
        title,
        folder,
        creation_time: now().timestamp,
      }
    })

    broadcast('set_thread_index', thread_index, all_clients())

    update_thread(thread_id, empty_thread())
  },
  send({ thread_id, prompt }) {
    update_thread(thread_id, (thread) => {
      append_message(thread, {
        role: 'user',
        content: prompt,
      })
    })
  },
  generate({ thread_id }) {
    let message_id = random_id()

    let context = build_context(read_thread(thread_id))

    update_thread(thread_id, (thread) => {
      append_message(
        thread,
        {
          role: 'assistant',
          content: '',
          reasoning: '',
        },
        message_id,
      )
    })

    // todo: handle errors
    generate_stream_openai(
      {
        messages: context,
        ...base_url_model_key(),
      },
      (delta) => {
        const { content, reasoning } = delta

        mutate_thread(thread_id, (thread) => {
          thread.messages[message_id].content += content
          thread.messages[message_id].reasoning += reasoning
        })

        broadcast('append_message', delta, subscribers[thread_id])
      },
      (message) => {
        update_thread(thread_id, (thread) => {
          thread.messages[message_id] = message
        })

        broadcast('finish_message', message, subscribers[thread_id])
      },
    )
  },
  list() {
    return thread_index
  },
  hide,
}
