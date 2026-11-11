/**
 * they say it's an anti pattern to have similar wc on every chapter.
 */

import { new_thread, send } from 'action/index'
import { data, write } from 'lib/file'

const result_file = data(
  'chat',
  'test use case engineering intro',
  'essay.md',
  // 'passage.md',
)

const thread = new_thread({ title: `engineering intro essay` })

const message = await send({
  thread,
  content: `write 工程学导论 综述类论文 in zhcn around 3k chars on mechanical engineering.
  you are a freshman who is interested in mechanical engineering but knows nothing.
  you should write flexibly and naturally but in the formal academic way,
  talk more on topics you love and less on others.
  only use h1 and h2. be concise and casual on headings.`,
  // model: 'google/gemma-4-26b-a4b-it',
})

// const message = await send({
//   thread,
//   content: `write 工程学导论 综述类论文 in zhcn around 3k chars on mechanical engineering.
//   you are a freshman who is interested in mechanical engineering but knows nothing.
//   you should write flexibly and talk more on topics you love and less on others.
//   only use h1 and h2.`,
//   model: 'google/gemma-4-26b-a4b-it',
// })

write(result_file, message.content)
