import { ok } from "lib/result";

export function foo(): result {
  console.log(1);
  return ok(true)
}
