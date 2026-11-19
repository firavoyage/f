import { deserialize, serialize } from 'action/index'
import { init_desktop, data, touch, config, mkpath, join } from 'lib/file'

init_desktop('humility')

export const thread_index_file = data('chat', 'index.yaml')
export const config_file = config('chat', 'config.yaml')
export const env_file = config('chat', 'env.yaml')
touch(thread_index_file, serialize({}))
touch(config_file, serialize({}))
touch(env_file, serialize({}))

const thread_folder = data('chat', 'thread')
const message_log_folder = data('chat', 'log', 'message')
const thread_log_folder = data('chat', 'log', 'thread')
const server_log_folder = data('chat', 'log', 'server')

mkpath(thread_folder)
mkpath(message_log_folder)
mkpath(thread_log_folder)
mkpath(server_log_folder)

export function get_thread_file(thread: id) {
  return join(thread_folder, thread)
}

export function get_thread_log_file(thread: id) {
  return join(thread_log_folder, `${thread}.jsonl`)
}

export function get_message_log_file(message: id) {
  return join(message_log_folder, `${message}.jsonl`)
}

export function get_server_log_file() {
  return join(message_log_folder, `server.log`)
}

