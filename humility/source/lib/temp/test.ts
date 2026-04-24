export const bad_luck = Symbol("bad luck")
export const extreme_bad_luck = Symbol("extreme bad luck")

function foo(): result<string> {
  let luck = Math.random()
  if (luck > 0.5) {
    return 'hello world'
  } else if (luck > 0.2) {
    return err({ type: bad_luck, message: "try again" })
  } else {
    return err({ type: extreme_bad_luck, message: 'give up' })
  }
}

const parse: (...args: any) => result<object> = handle(JSON.parse)

async function fetch_data(a: any) {
  await new Promise(resolve => {
    setTimeout(() => resolve("Success: Data received!"), 0);
  });

  return JSON.parse(a);
}

const async: (...args: any) => Promise<result<object>> = handle(fetch_data)

function test() {
  let bar = foo()

  if (rescue(bar)) {
    if (bar.type == bad_luck) {
      console.log(bar.message);
    } else if (bar.type == extreme_bad_luck) {
      console.log(bar.message);
    }
    return;
  }

  console.log(bar.concat('!'));
}

test()

function test_handle() {
  let foo = parse("}")

  if (rescue(foo)) {
    if (foo.type == SyntaxError) {
      console.log(foo.message);
    } else {
      console.log('unexpected');
    }
  }

  let bar = parse("{}")

  console.log(bar);
}

test_handle()

async function test_handle_async() {
  let foo = await async("}")

  if (rescue(foo)) {
    if (foo.type == SyntaxError) {
      console.log(foo.message);
    } else {
      console.log('unexpected');
    }
  }

  let bar = await async("{}")

  console.log(bar);
}

test_handle_async()
