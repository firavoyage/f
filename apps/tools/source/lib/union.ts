type union<T> = T extends readonly unknown[] ? T[number] : T;

/**
 * Create union type of all what's given
 * 
 * return the first param
 */
export function union<const T extends readonly unknown[]>(
  ...all_args: T
): union<T>;
export function union(...args: unknown[]): unknown {
  return args[0];
}

type union_fn = typeof union
declare global {
  var union: union_fn
}
