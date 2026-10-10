/**
 * define the actions as const on backend, export typeof it
 * 
 * on web, use serve, which returns a proxy, assert its return
 */
export type Async<T extends Record<string, (...args: any[]) => any>> = {
  [K in keyof T]: (...args: Parameters<T[K]>) => Promise<Awaited<ReturnType<T[K]>>>;
}

export function serve<T>(): Async<T> {
  
}
