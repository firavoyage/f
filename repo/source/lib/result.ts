// @ts-nocheck
type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>

// any, normalized
type all = void | string | number | boolean | bigint | symbol | null | undefined | { [key: PropertyKey]: any };
type Ok<T = all> = T
// type Ok<T = all> = T extends object ? (Omit<T, typeof error_symbol> & { [error_symbol]?: never }) : T;
type Err = { type: any, [error_symbol]: true, message?: any } & Partial<FileError>
type FileError = { code: string, path: string, syscall: string, errno: number }

type err = typeof err
type is_error = typeof is_error
declare global {
  type Result<T = all, E extends Err = Err> = (0 extends 1 & T ? Ok : Ok<T>) | E;

  var err: err
  var is_error: is_error
}

const error_symbol: unique symbol = Symbol("error");

// no `ok(data)` needed, just return `data` directly

export function err(error: Optional<Err, typeof error_symbol> | PropertyKey | Err): Err {
  if (error[error_symbol]) {
    // already wrapped, propagate
    return error
  } else if (error instanceof Error) {
    error.type = error.constructor
    error.message = error.stack ?? error.message
    error[error_symbol] = true
    return error as Err
  } else if (error && typeof error == 'object' && has(error, 'type')) {
    // keep stack trace
    const error_with_trace = new Error(error.type)
    if (typeof Error.captureStackTrace == 'function') {
      Error.captureStackTrace(error_with_trace, err);
    } else {
      const lines = error_with_trace.stack?.split('\n');
      if (lines && lines.length > 1) {
        lines.splice(1, 1);
        error_with_trace.stack = lines.join('\n');
      }
    }

    error_with_trace[error_symbol] = true

    return merge(error_with_trace, error)
  } else {
    // flexible
    const error_with_trace = new Error(error)
    if (typeof Error.captureStackTrace == 'function') {
      Error.captureStackTrace(error_with_trace, err);
    } else {
      const lines = error_with_trace.stack?.split('\n');
      if (lines && lines.length > 1) {
        lines.splice(1, 1);
        error_with_trace.stack = lines.join('\n');
      }
    }

    return merge(error_with_trace, {
      type: error,
      message: error,
      [error_symbol]: true
    })
  }
}

export function is_error(result: Result): result is Err {
  return has(result, error_symbol)
}
