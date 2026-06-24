import { write, read, data, append, edit, remove } from 'lib/file';
// import * as file from 'lib/file';
// use(file)

// console.log(write, read)

await write({ path: data('test'), content: 'foo \n' })

await append({ path: data('test'), content: 'bar foo' })

await edit({ path: data('test'), find: 'foo', replace: 'hello' })

// await remove({ path: data('test') })
log(await read({ path: data('test') }))

let foo = await remove({ path: data('nonexisting') })

if(is_error(foo)){
  log(foo)
} 
