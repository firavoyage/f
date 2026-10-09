import { init_desktop, data, config, cache, write, children, expand_path } from 'lib/file'

// init_desktop('app', true)

// log(data('foo'), config('foo'), cache('foo'))

// write('/a/b/c/d', 'foo')

init_desktop('observe', false)

const dataset = data('night')

log(expand_path(dataset, children(dataset)[0]))
