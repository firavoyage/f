import { write, read, data, append, edit, remove, clear } from 'lib/file';
// import * as file from 'lib/file';
// use(file)

await clear({path: data()})

await write({ path: data('test'), content: 'foo \n' })

await append({ path: data('test'), content: 'bar foo' })

await edit({ path: data('test'), find: 'foo', replace: 'hello' })

// await remove({ path: data('test') })
log(await read({ path: data('test') }))

const foo = await remove({ path: data('nonexisting') })

if(is_error(foo)){
  log('removing a nonexisting file errs as expected')
} 

const bar = await remove({ path: data('nonexisting'), can_non_exist: true })

if(!is_error(bar)){
  log('can non exist flag works')
} 
