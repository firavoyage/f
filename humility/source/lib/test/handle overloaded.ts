import { handle } from 'lib/handle';

async function foo() {
  throw 'foo'

  return 'ok'
}

function bar() {
  throw 'bar'
}

log(handle(bar))

log(await handle(() => foo()))
              
log(await handle(async () => await foo()))

log(await handle(() => fetch()))

// await handle(() => fetch(''))
// log((await handle(() => fetch(''))).message) 
// log(await handle(async () => await fetch('')))

// bar()

log('reaches the end')
