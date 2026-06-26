export function each (begin: number, end: nymb, step) {
  if (typeof end != "number") {
    end = begin;
    begin = 0;
  }
  if (typeof step != "number") {
    step = 1;
  }

  const iterate = (begin, end, step) => {
    let index = begin;
    const iterator = {
      next() {
        if ((index - end) * step <= 0) {
          const value = index;
          index += step;
          return { value, done: false };
        } else {
          return { value: false, done: true };
        }
      },
      [Symbol.iterator]() {
        return iterator;
      },
    };
    return iterator;
  };
  return iterate(begin, end, step);
};

