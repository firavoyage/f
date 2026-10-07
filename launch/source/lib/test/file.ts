import { init_desktop, data, config, cache } from 'lib/file'

init_desktop('app', true)

log(data('foo'), config('foo'), cache('foo'))
