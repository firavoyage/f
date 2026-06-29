import { handle } from 'lib/handle';

log(handle(() => {
  throw 1
}))

log(await handle(async () => {
  await fetch('')
}))



