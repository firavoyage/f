import { append, edit, focus, init, read, rearrange, traverse } from 'backend/tree';

await init('thread.test.123')
await append('thread.test.123', 'node.123')
await append('thread.test.123', 'node.123')
await edit('thread.test.123', 1, 'node.edited')
await edit('thread.test.123', 1, 'node.edited.2')
await rearrange('thread.test.123', 1, [4, 3, 2])
await focus('thread.test.123', 1, 2)
// log(await read('thread.test.123'))

log(traverse(await read('thread.test.123')))