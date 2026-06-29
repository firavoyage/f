type handle = typeof handle
declare global {
  var handle: handle
}

export function handle<F extends (...args: any[]) => Promise<any>>(
  fn: F
): Promise<Result<Awaited<ReturnType<F>>>>;
export function handle<F extends (...args: any[]) => any>(
  fn: F
): Result<ReturnType<F>>;

export function handle<F extends (...args: any[]) => any>(fn: F): any {
  try {
    const result = fn();

    if (result instanceof Promise || typeof result?.then == 'function') {
      return (result as Promise<any>)
        // async ok
        .then((data) => data)
        // async err
        .catch((e) => err(e));
    }

    // sync ok
    return result;
  } catch (e) {
    // sync err
    return err(e as any);
  }
}
