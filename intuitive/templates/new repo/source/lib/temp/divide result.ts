export const zero_division = Symbol("zero_division");

export function divide(a: number, b: number): Result<number> {
  if (b == 0) {
    throw err({ type: zero_division, message: "attempt to divide by zero" })
  }
  return a / b
}

function test() {
  let foo = divide(1, Math.floor(Math.random() * 5))

  if (is_error(foo)) {
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


