type ok<T> = Exclude<T, error>
type error = { type: any, message: any, [err_symbol]: true } & Partial<err_fs>
type err_fs = { code: string, path: string, syscall: string, errno: number }

/**
 * todo: dry?
 * 
 * (impossible in ts)
 */
// type err = typeof err
type rescue = typeof is_error
type handle = typeof handle
declare global {
  type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
  // type Optional<Type, Keys extends keyof any> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>

  /**
   * todo: E should be subset of err
   */
  type result<T, E = error> = ok<T> | E;

  /**
   * if needed
   */
  type option<T> = T | undefined;

  var err: typeof err
  var rescue: rescue
  var handle: handle
}

type foo = typeof foo
declare global {
  var foo: foo
}

const err_symbol = Symbol("err");
// const err_symbol = "__err";
// const err_symbol = "d9eb253e06987fa74a5d3189f73d9f7a8104cca786fafbb52bc9555972f5477f"; // sha256 of "err"

// no `ok(data)` needed, just return `data` directly

export function err(error: Optional<error, typeof err_symbol | 'message'> | number | string | symbol | Error): error {
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
    return merge(error, { type: error.constructor, message: error.stack ?? error.message, [err_symbol]: true })

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
    return merge(error, { [err_symbol]: true })
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
      [err_symbol]: true
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
  return result?.[err_symbol]
  // return (result as any)?.[err_symbol]
}
