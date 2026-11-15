import { deserialize, serialize } from 'action/index'
import { init_desktop, data, touch, config, mkpath, join } from 'lib/file'

init_desktop('humility')

export const threads_file = data('chat', 'threads.yaml')
export const config_file = config('chat', 'config.yaml')
export const env_file = config('chat', 'env.yaml')
touch(threads_file, serialize({}))
touch(config_file, serialize({}))
touch(env_file, serialize({}))

const thread_folder = data('chat', 'thread')
const log_folder = data('chat', 'log', 'message')

mkpath(thread_folder)
mkpath(log_folder)

export function get_thread_file(thread: string) {
  return join(thread_folder, thread)
}

export function get_log_file(request: string) {
  return join(log_folder, request)
}
