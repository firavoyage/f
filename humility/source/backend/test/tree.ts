import { append, edit, focus, init, get, rearrange, traverse } from 'backend/tree';

await init('thread.test')
await append('thread.test', 'node.123')
await append('thread.test', 'node.123')
await edit('thread.test', 1, 'node.edited')
await edit('thread.test', 1, 'node.edited.2')
await rearrange('thread.test', 1, [4, 3, 2])
await focus('thread.test', 1, 2)
// log(await read('thread.test'))

log(traverse(await get('thread.test')))