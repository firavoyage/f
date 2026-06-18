type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>

type ok<T> = Exclude<T, error>
type error = { type: any, message: any, [error_symbol]: true } & Partial<error_fs>
type error_fs = { code: string, path: string, syscall: string, errno: number }

type err = typeof err
type is_error = typeof is_error
declare global {
  type result<T, E extends error = error> = ok<T> | E;

  var err: typeof err
  var is_error: is_error
}

const error_symbol = Symbol("error");

// no `ok(data)` needed, just return `data` directly

export function err(error: Optional<error, typeof error_symbol> | PropertyKey | Error): error {
  if (error instanceof Error) {
    return merge(error, { type: error.constructor, message: error.stack ?? error.message, [error_symbol]: true })
  } else if (typeof error == 'object' && has(error, 'type')) {
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

export function is_error<T>(result: result<T>): result is error {
  return has(result, error_symbol)
}
