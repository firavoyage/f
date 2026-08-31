// // no need to import

// declare global {
//   type Dict<K extends keyof any, T> = { [P in K]: T };
// }

declare global {
  type Key = PropertyKey
  type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
  // any, normalized
  type all = void | string | number | boolean | bigint | symbol | null | undefined | { [key: PropertyKey]: any };

  type fn = (...args: any) => any
}

export {};