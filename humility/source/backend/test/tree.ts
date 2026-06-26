import { append, edit, init } from 'backend/tree';

await init('thread.test.123')
await append('thread.test.123', 'node.123')
await edit('thread.test.123', 0, 'node.edited')

