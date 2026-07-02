import { config } from 'lib/file';

log(await import('/a.ts'))

log(await handle(() => import('/non existing')))

// log(await import('non existing'))

