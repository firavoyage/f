import { new_thread, send } from 'action/index'

// const prompt = 'be concise, what do ppl feel'
const prompt = 'hello world'

const thread = new_thread({ title: prompt })

log(thread)

log(
  await send({
    thread,
    content: prompt,
    // model: 'deepseek/deepseek-v4-flash',
    model: 'google/gemma-4-26b-a4b-it',
    reasoning_effort: 'high'
  }),
)
