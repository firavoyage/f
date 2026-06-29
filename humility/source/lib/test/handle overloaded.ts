import { handle } from 'lib/handle';

function foo() {
  throw 'foo'
}

async function bar() {
  throw 'bar'

  return 'ok'
}

function baz() {
  
}

async function main() {
  const a = handle(foo)
  log(a)

  const b = await handle(() => bar())
  log(b)

  const c = await handle(async () => await bar())
  log(c)

  const d = await handle(() => fetch(''))
  log(d)

  // await handle(() => fetch(''))
  // log((await handle(() => fetch(''))).message) 
  // log(await handle(async () => await fetch('')))

  // bar()  
}

await main()

log('reaches the end')
