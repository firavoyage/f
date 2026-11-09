import { init_desktop, data, touch, config } from 'lib/file'
import { parse as deserialize, stringify as serialize } from 'yaml'

init_desktop('humility')

export let threads_file = data('chat', 'threads.yaml')
export let config_file = config('chat', 'config.yaml')

touch(threads_file, serialize({}))
touch(config_file, serialize({}))
