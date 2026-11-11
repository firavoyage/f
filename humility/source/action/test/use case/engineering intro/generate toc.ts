import { new_thread, send } from 'action/index'

const thread = new_thread({ title: 'engineering intro toc' })

log(thread)

log(
  await send({
    thread,
    content: 'output a flat json string array of table of contents of 工程学导论 综述类论文 on mechanical engineering in zhcn for around 3k chars from the perspective of uni freshmen.',
    model: 'google/gemma-4-26b-a4b-it',
  }),
)

// log(
//   await send({
//     thread,
//     content: 'output a json array of table of contents of 工程学导论 综述类论文 on mechanical engineering in zhcn for around 3k chars for freshmen.',
//     model: 'google/gemma-4-26b-a4b-it',
//   }),
// )
