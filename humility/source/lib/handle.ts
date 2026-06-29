export function handle(fn) {
  try {
    const result = fn()
    if (result instanceof Promise || typeof result?.then == 'function') {
      return (result as Promise<Result<any>>)
        // async ok
        .then((data) => data)
        // async err
        .catch((e) => err(e));
    }

    return result
  } catch (e) {
    return err(e)
  }
}