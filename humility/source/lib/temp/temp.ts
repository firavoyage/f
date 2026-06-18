type IsAnyExceptErr<T> = (0 extends 1 & T ? never : T) extends object
  ? (typeof ErrSymbol extends keyof T ? never : T)
  : T;

type ExceptErr<T> = (0 extends 1 & T ? never : T) & { [K in typeof ErrSymbol]?: never };
