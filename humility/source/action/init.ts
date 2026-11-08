import { init_desktop, data, touch } from 'lib/file'
import { parse as deserialize, stringify as serialize } from 'yaml'

init_desktop('humility')

export let threads_file = data('chat', 'threads.yaml')

touch(threads_file, serialize({}))
