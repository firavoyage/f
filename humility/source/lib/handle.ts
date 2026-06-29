export function handle<F extends (...args: any[]) => any>(fn: F): Result<ReturnType<F>> {
  try {
    const result = fn();

    if (result instanceof Promise || typeof result?.then == 'function') {
      return (result as Promise<Result<ReturnType<F>>>)
        // async ok
        .then((data) => data)
        // async err
        .catch((e) => err(e));
    }

    // sync ok
    return result;
  } catch (e) {
    return err(e);
  }
}
