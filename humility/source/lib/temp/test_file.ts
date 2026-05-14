// import * as file from 'lib/file';
// use(file)

import { write, read, data, append, edit } from 'lib/file';

// console.log(write, read)

await write({ path: data('test'), content: 'foo \n' })

await append({ path: data('test'), content: 'bar foo' })

await edit({ path: data('test'), find: 'foo', replace: 'hello' })

log(await read({ path: data('test') }))

let foo = await read({ path: data('nonexisting') })

if(rescue(foo)){
  log(foo)
} 
