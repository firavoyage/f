type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>

type all = string | number | boolean | bigint | symbol | null | undefined | { [key: PropertyKey]: any };
type success<T = all> = T extends object ? (Omit<T, typeof error_symbol> & { [error_symbol]?: never }) : T;
type error = { type: any, message: any, [error_symbol]: true } & Partial<error_fs>
type error_fs = { code: string, path: string, syscall: string, errno: number }

type err = typeof err
type is_error = typeof is_error
declare global {
  type result<T = all, E extends error = error> = (0 extends 1 & T ? success : success<T>) | E;

  var err: err
  var is_error: is_error
}

const error_symbol: unique symbol = Symbol("error");

// no `ok(data)` needed, just return `data` directly

export function err(error: Optional<error, typeof error_symbol> | PropertyKey | Error): error {
  if (error instanceof Error) {
    error.type = error.constructor
    error.message = error.stack ?? error.message
    error[error_symbol] = true
    return error
  } else if (error && typeof error == 'object' && has(error, 'type')) {
    return merge(error, { [error_symbol]: true })
  } else {
    // flexible
    return {
      type: error,
      message: error,
      [error_symbol]: true
    }
  }
}

export function is_error(result: result): result is error {
  return has(result, error_symbol)
}
