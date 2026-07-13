type handle = typeof handle
declare global {
  var handle: handle
}

export function handle<F extends (...args: any[]) => any>(fn: F): (...args: Parameters<F>) => Result<ReturnType<F>> {
  return (...args) => {
    try {
      const result = fn(...args);

      if (result instanceof Promise || typeof result?.then == 'function') {
        return (result as Promise<Result<any>>)
          // async ok
          .then((data) => data)
          // async err
          .catch((e) => err(e));
      }

      // sync ok
      return result;
    } catch (error) {
      return err(error);
    }
  }
}