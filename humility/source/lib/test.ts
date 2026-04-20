import { foo } from "lib/foo"

export function x() {
  let bar = foo()

  if (bar.err) {
    console.log(bar);
    return;
  }
  
  bar = bar.value
  console.log(bar);
}

x()
