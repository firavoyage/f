import { init_desktop, data, touch, config, mkpath, read } from 'lib/file'
import { parse as deserialize, stringify as serialize } from 'yaml'

init_desktop('humility')

export const threads_file = data('chat', 'threads.yaml')
export const config_file = config('chat', 'config.yaml')
export const thread_folder = data('chat', 'thread')
export const log_folder = data('chat', 'log', 'message')

touch(threads_file, serialize({}))
touch(config_file, serialize({}))

mkpath(thread_folder)
mkpath(log_folder)
