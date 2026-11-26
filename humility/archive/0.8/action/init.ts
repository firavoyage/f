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
const thread_log_folder = data('chat', 'log', 'thread')
const message_log_folder = data('chat', 'log', 'message')
mkpath(thread_log_folder)
mkpath(message_log_folder)

export function get_thread_file(thread_id: id) {
  return join(thread_folder, thread_id)
}

export function get_thread_log_file(thread_id: id) {
  return join(thread_log_folder, `${thread_id}.jsonl`)
}

export function get_message_log_file(message_id: id) {
  return join(message_log_folder, `${message_id}.jsonl`)
}

export const server_log_file = data('chat', 'log', 'server', `server.log`)
touch(server_log_file)
