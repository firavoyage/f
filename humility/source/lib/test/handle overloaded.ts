import { handle } from 'lib/handle';

function foo() {
  throw 'foo'
}

async function bar() {
  throw 'bar'

  return 'ok'
}

function baz() {
  const luck = Math.random()
  if (luck < 0.5) {
    throw err('unlucky')
  }

  return { ok: true }
}

function asdf() {
  const luck = Math.random()
  if (luck < 0.5) {
    throw err('unlucky')
  }

  return 'lucky'
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

  const e = handle(baz)
  log('baz', e)
  _ = () => {
    if (is_error(e)) {
      return e
    }
    const temp = e
  }

  const f = handle(asdf)
  log('asdf', f)
  _ = () => {
    if (is_error(f)) {
      return f
    }
    const temp2 = f
  }

  // bar()  
}

await main()

log('reaches the end')
