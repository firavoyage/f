export const non_mutative_actions: action[] = ['subscribe', 'unsubscribe']

// thread -> clients
let subscribers = {}

export const actions: Record<action, fn> = {
  subscribe({ thread_id, client }) {
    subscribers
  },
}
