import { write, read, data, append, edit, remove, clear } from 'lib/file';
// import * as file from 'lib/file';
// use(file)

// log(await handle(() => clear(data())))

log(await handle(() => write(data('test'), 'foo \n')))

log(await handle(() => append(data('test'), 'bar foo')))

log(await handle(() => edit(data('test'), 'foo', 'hello')))

// await remove(data('test') )
log(await handle(() => read(data('test'))))

const foo = await handle(() => remove(data('nonexisting')))
if (is_error(foo)) {
  log('removing a nonexisting file errs as expected')
}

const bar = await handle(() => remove(data('nonexisting'), { can_non_exist: true }))

if (!is_error(bar)) {
  log('can non exist flag works')
} 
