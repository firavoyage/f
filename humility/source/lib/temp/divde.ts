import { err, rescue } from 'lib/std';

export const zero_division = Symbol("zero_division");

export function divide(a: number, b: number): result<number> {
  if (b == 0) {
    return err({ type: zero_division, message: "attempt to divide by zero" })
  }
  return a / b
}

function test() {
  let foo = divide(1, Math.floor(Math.random() * 5))

  if (rescue(foo)) {
    if(foo.type == zero_division){
      // handle
      console.log(foo);
    }
    return;
  }

  // process
  console.log(foo);
}

test()


