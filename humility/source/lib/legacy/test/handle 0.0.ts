import { handle, handle_async, handle_sync } from 'lib/handle';

async function foo() {
  throw 'foo'
}

function bar() {
  throw 'bar'
}

log(handle(bar))

log(handle_sync(bar))

log(await handle(() => foo()))

log(await handle_async(() => fetch()))

// await handle(() => fetch(''))
// log((await handle(() => fetch(''))).message) 
// log(await handle(async () => await fetch('')))

// bar()

log('reaches the end')
