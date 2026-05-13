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

function test_handle() {
  let foo = parse("}")

  if (rescue(foo)) {
    if (foo.type == SyntaxError) {
      console.log(foo);
    } else {
      console.log('unexpected');
    }
  }

  let bar = parse("{}")

  console.log(bar);
}

async function test_handle_async() {
  let foo = await async("}")

  if (rescue(foo)) {
    if (foo.type) {
      console.log(foo);
    } else {
      console.log('unexpected');
    }
  }

  let bar = await async("{}")

  console.log(bar);
}

// test()

// test_handle()

// await test_handle_async()

import path from 'node:path';

let join = handle(path.join)

const complexPath = join('/foo', 'bar', '//baz/asdf', 'quux', '..', 1);

const a = join('.foo/quux/');
// const a = join('.foo/quux');
// const a = join('/foo/../quux');

console.log(complexPath)

if (rescue(complexPath)) {
  console.log(complexPath.type == TypeError);
}


console.log(a)


