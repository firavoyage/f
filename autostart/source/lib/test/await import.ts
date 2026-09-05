import { config } from 'lib/file';

log(await handle(() => import('/a')))

log(await handle(() => import('/non existing')))

log(await handle(() => import(config('mock'))))

log(await handle(() => import('lib/result')))

log(await handle(() => import('lib/result non existing')))
