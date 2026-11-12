import { new_thread, send } from 'action/index'

const thread = new_thread({ title: 'hello world' })

log(thread)

log(
  await send({
    thread,
    content: 'hello world',
    model: 'google/gemma-4-26b-a4b-it',
    // model: 'google/gemma-4-26b-a4b-it',
    reasoning_effort: 'high'
  }),
)
