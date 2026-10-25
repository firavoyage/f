export function divide(a: number, b: number): option<number> {
  if (b != 0) {
    return a / b
  }
}
