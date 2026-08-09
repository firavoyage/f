// // no need to import

// declare global {
//   type Dict<K extends keyof any, T> = { [P in K]: T };
// }

declare global {
  type Key = PropertyKey
}

export {};