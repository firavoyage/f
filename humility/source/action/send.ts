import { config_file } from 'action/index'
import { read } from 'lib/file'
import { parse as deserialize, stringify as serialize } from 'yaml'

type send = {
  message: string
  thread: string
  model?: string
}

export async function send(options: send) {
  const { message, thread } = options
}