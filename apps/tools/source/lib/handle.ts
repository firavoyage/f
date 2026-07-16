type handle = typeof handle
type handle_best_effort = typeof handle_best_effort
declare global {
  var handle: handle
  var handle_best_effort: handle_best_effort
}

export function handle<F extends (...args: any[]) => Promise<any>>(
  fn: F
): Promise<Result<Awaited<ReturnType<F>>>>;
export function handle<F extends (...args: any[]) => any>(
  fn: F
): Result<ReturnType<F>>;

export function handle<F extends (...args: any[]) => any>(fn: F) {
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

export function handle_best_effort<F extends (...args: any[]) => Promise<any>>(
  fn: F
): Promise<Awaited<ReturnType<F>> | undefined>;
export function handle_best_effort<F extends (...args: any[]) => any>(
  fn: F
): ReturnType<F> | undefined;

export function handle_best_effort<F extends (...args: any[]) => any>(fn: F) {
  try {
    const result = fn();

    if (result instanceof Promise || typeof result?.then == 'function') {
      return (result as Promise<any>)
        // async ok
        .then((data) => data)
        // async err
        .catch(() => { });
    }

    // sync ok
    return result;
  } catch {
    // sync err
    return;
  }
}

