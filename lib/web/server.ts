/**
 * define the actions as const on backend, export typeof it
 * 
 * on web, use serve, which returns a proxy, assert its return
 */
export type Async<T extends Record<string, (...args: any[]) => any>> = {
  [K in keyof T]: (...args: Parameters<T[K]>) => Promise<Awaited<ReturnType<T[K]>>>;
}

export function server<T>(endpoint: string): Async<T> {
  return new Proxy({}, {
    get(target, prop: string) {
      return async (...args) => {
        const response = await fetch(`${endpoint}/${prop}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(args)
        });

        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        return response.json();
      }
    }
  })
}
