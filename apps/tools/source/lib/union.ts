type flatten_elements<T> = T extends readonly unknown[] ? T[number] : T;

export function union<const T extends readonly unknown[]>(
  target_array: T
): flatten_elements<T>;
export function union<const T extends readonly unknown[]>(
  ...all_args: T
): flatten_elements<T>;
export function union(...args: unknown[]): unknown {
  if (args.length == 1 && Array.isArray(args[0])) {
    return args[0][0];
  }
  return args[0];
}

type union = typeof union
declare global {
  var union: union
}
