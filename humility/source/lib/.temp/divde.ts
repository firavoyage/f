import { err, rescue } from 'lib/std';

export const div_by_zero = Symbol("div_by_zero");

export function divide(a: number, b: number): result<number> {
  if (b == 0) {
    return err({ type: div_by_zero, message: "attempt to divide by zero" })
  }
  return a / b
}

function test() {
  let foo = divide(1, Math.floor(Math.random() * 5))

  if (rescue(foo)) {
    if(foo.type == div_by_zero){
      // handle
      console.log(foo);
    }
    return;
  }

  // process
  console.log(foo);
}

test()
