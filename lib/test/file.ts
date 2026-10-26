import { init_desktop, data, config, cache, write, children, expand_path, relative_path, cwd, is_dir, is_file } from 'lib/file'

// init_desktop('app', true)

// log(data('foo'), config('foo'), cache('foo'))

// write('/a/b/c/d', 'foo')

// init_desktop('observe', false)

// const dataset = data('night')

// log(children(dataset)[0])
// // log(expand_path(dataset, children(dataset)[0]))

log(cwd())

log(relative_path('/foo', cwd()))
log(expand_path(cwd(), 'foo'))
log(expand_path(cwd(), '/foo'))
log(expand_path(cwd(), '/foo'))

log(is_file('foo'))
log(is_dir('foo'))
