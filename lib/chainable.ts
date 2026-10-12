type Chainable<T, M extends Record<string, (data: T, ...args: any[]) => any>> = {
  [K in keyof M]: M[K] extends (data: T, ...args: infer Args) => infer Return
  ? (...args: Args) => Return
  : never;
};

export function chainable<
  T extends object,
  M extends Record<string, (data: T, ...args: any[]) => any>
>(
  data: T,
  methods: M
): T & Chainable<T, M> {
  return merge(
    data,
    obj(map(methods, ([name, method]) => [
      name,
      (...args: any[]) => method(data, ...args)
    ]))
  );
}
// function chainable<T extends object>(data: T, methods: Record<string, fn>): T {
//   return merge(data, obj(map(methods, ([name, method]) => [name, (...args) => {
//     return method(data, ...args)
//   }])))  
// }

type chainable = typeof chainable
declare global {
  var chainable: chainable
}
