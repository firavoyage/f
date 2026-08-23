type each = typeof each
declare global {
  var each: each

}

export const invalid_args = 'invalid arguments'

export function each(end: number): number[];
export function each(begin: number, end: number): number[];
export function each(begin: number, end: number, step: number): number[];

export function each(...args: number[]) {
  let begin = 1, end, step = 1

  if (args.length == 1) {
    end = args[0]
  } else if (args.length == 2) {
    begin = args[0]
    end = args[1]
  } else if (args.length == 3) {
    begin = args[0]
    end = args[1]
    step = args[2]
  } else {
    throw err(invalid_args)
  }

  const numbers = []

  let index = begin;
  while ((index - end) * step <= 0) {
    numbers.push(index)
    index += step
  }

  return numbers;
};

// export function each(...args: number[]): IterableIterator<number> {
//   let begin = 0, end, step = 1

//   if (args.length == 1) {
//     end = args[0]
//   } else if (args.length == 2) {
//     begin = args[0]
//     end = args[1]
//   } else if (args.length == 3) {
//     begin = args[0]
//     end = args[1]
//     step = args[2]
//   } else {
//     throw err(invalid_args)
//   }

//   const iterate = (begin: number, end: number, step: number) => {
//     let index = begin;
//     const iterator = {
//       next(): IteratorResult<number> {
//         if ((index - end) * step <= 0) {
//           const value = index;
//           index += step;
//           return { value, done: false };
//         } else {
//           return { value: false, done: true };
//         }
//       },
//       [Symbol.iterator]() {
//         return iterator;
//       },
//     };
//     return iterator;
//   };
//   return iterate(begin, end, step);
// };
