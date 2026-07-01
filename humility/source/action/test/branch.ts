import { branch } from 'action/branch';

log(await branch('thread.12', 6))

log(await handle(() => branch('thread.12', 100)))

log('end') 