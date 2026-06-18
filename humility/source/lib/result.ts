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

export function err(error: Optional<error, typeof error_symbol | 'message'> | number | string | symbol | Error): error {
  if (error instanceof Error) {
    /**
     * it's simpler to say
     * foo.type == SyntaxError
     * than
     * foo.type == 'SyntaxError' or foo.type instanceof SyntaxError
     * 
     * if rescue, it's already an error.
     * you match known errors, otherwise it's an unexpected error.
     * 
     * you dont need nested error types on the prototype chain. separate them.
     */
    return merge(error, { type: error.constructor, message: error.stack ?? error.message, [error_symbol]: true })

    // return Object.defineProperty({
    //   /**
    //    * it's simpler to say
    //    * foo.type == SyntaxError
    //    * than
    //    * foo.type == 'SyntaxError' or foo.type instanceof SyntaxError
    //    * 
    //    * if rescue, it's already an error.
    //    * you match known errors, otherwise it's an unexpected error.
    //    * 
    //    * you dont need nested error types on the prototype chain. separate them.
    //    */
    //   type: error.constructor,
    //   // type: error.name,
    //   message: error.stack ?? error.message,
    // }, err_symbol, { value: true }) as err
  } else if (typeof error == 'object' && Object.hasOwn(error, 'type')) {
    return merge(error, { [error_symbol]: true })
    // return Object.defineProperty(error, err_symbol, { value: true }) as err
    // return Object.defineProperty({
    //   // it must have a type. you should not throw anything.
    //   type: error.type,
    //   message: error.message ?? 'no message',
    // }, err_symbol, { value: true }) as err
  } else {
    /**
     * more flexible
     */
    return {
      type: error,
      /**
       * type => message
       */
      message: error,
      [error_symbol]: true
    }
    // // why not be more flexible
    // return Object.defineProperty({
    //   type: error,
    //   // message is implied by the type
    //   message: error,
    // }, err_symbol, { value: true }) as err
  }
}

export function is_error<T>(result: result<T>): result is error {
  return has(result, error_symbol)
}
