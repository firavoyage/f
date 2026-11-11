import { new_thread, send } from 'action/index'

const thread = new_thread({ title: 'engineering intro toc' })

log(thread)

log(
  await send({
    thread,
    content: 'output a json array of table of contents of 工程学导论 .',
    model: 'google/gemma-4-26b-a4b-it',
  }),
)
