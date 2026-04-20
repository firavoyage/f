import { err, ok } from "lib/result";

export function foo(): result<boolean> {
  if (Math.random() > 0.5) {
    return ok(true)
  } else {
    return err(false)
  }
}


