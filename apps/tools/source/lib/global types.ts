declare global {
  type Key = PropertyKey
 
  type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
 
  // any, normalized
  type all = void | string | number | boolean | bigint | symbol | null | undefined | { [key: PropertyKey]: any };

  type fn = (...args: any) => any
}

export {};