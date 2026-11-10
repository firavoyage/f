import { new_thread, send } from 'action/index'

const thread = new_thread({ title: 'be concise, what do ppl feel' })
// const thread = new_thread()

log(thread)

log(
  await send({
    thread,
    content: 'be concise, what do ppl feel',
    model: 'openrouter:google/gemma-4-26b-a4b-it',
  }),
)

log(
  await send({
    thread,
    content: 'be concise, why',
    model: 'google/gemma-4-26b-a4b-it',
  }),
)
