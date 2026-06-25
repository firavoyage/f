import { write, read, data, append, edit, remove, clear } from 'lib/file';
// import * as file from 'lib/file';
// use(file)

await clear(data())

await write(data('test'), 'foo \n')

await append(data('test'), 'bar foo')

await edit(data('test'), 'foo', 'hello')

// await remove(data('test') )
log(await read(data('test')))

const foo = await remove(data('nonexisting'))

if (is_error(foo)) {
  log('removing a nonexisting file errs as expected')
}

const bar = await remove(data('nonexisting'), { can_non_exist: true })

if (!is_error(bar)) {
  log('can non exist flag works')
} 
