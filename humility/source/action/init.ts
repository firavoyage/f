import { init_desktop, data, touch } from 'lib/file'

init_desktop('humility')

export let threads_file = data('chat', 'threads.yaml')

touch(threads_file)


