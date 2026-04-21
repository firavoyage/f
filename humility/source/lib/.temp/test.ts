import { err, rescue } from 'lib/std';

function foo(): result<boolean> {
  if (Math.random() > 0.5) {
    return true
  } else {
    return err({ type: "bad luck", message: "damn" })
  }
}

function test() {
  let bar = foo()

  if (rescue(bar)) {
    console.log(bar);
    return;
  }

  console.log(bar);
}

test()
