import { err, rescue, handle } from 'lib/std';

function foo(): result<boolean> {
  if (Math.random() > 0.5) {
    return true
  } else {
    return err({ type: "bad luck", message: "damn" })
  }
}

// why ts does not err. in handle, i said its prop must be function. json parse could not be fn.

const parse: (...args: any) => result<object> = handle(JSON.parse)

async function fetch_data(a: any) {
  const result = await new Promise(resolve => {
    setTimeout(() => resolve("Success: Data received!"), 0);
  });

  return JSON.parse(a);
}

const fetch: (...args: any) => Promise<result<object>> = handle(fetch_data)

function test() {
  let bar = foo()

  if (rescue(bar)) {
    console.log(bar);
    return;
  }

  console.log(bar);
}

test()

function test2() {
  let foo = parse("}")

  if (rescue(foo)) {
    console.log(foo.message);
  }

  let bar = parse("{}")

  console.log(bar);
}

test2()

async function test3() {
  let foo = await fetch("}")

  if (rescue(foo)) {
    console.log(foo.message);
  }

  let bar = await fetch("{}")

  console.log(bar);
}

test3()
