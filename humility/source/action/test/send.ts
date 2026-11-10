import { new_thread, send } from 'action/index'

const thread = new_thread({})

log(thread)

log(await send({
  thread,
  content: 'hi'
}))
