declare global {
  type Key = PropertyKey
 
  type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

  // will not work anyway, ts sees it as required (possibly nil) param and you could not dc nil options
  // type Options<T> = Partial<T> | undefined
 
  // any, normalized
  type all = void | string | number | boolean | bigint | symbol | null | undefined | { [key: PropertyKey]: any };

  type fn = (...args: any) => any
}

export {};