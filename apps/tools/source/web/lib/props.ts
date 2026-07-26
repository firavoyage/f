import React from 'react';

type RelaxedProps<T> = Omit<T, 'className'> & {
  class?: string;
  [key: string]: any;
};
// type RelaxedProps<T> = {
//   class?: string;
//   [key: string]: any;
// };

export function p<Tag extends keyof React.JSX.IntrinsicElements>(
  inputProps: RelaxedProps<React.JSX.IntrinsicElements[Tag]>
) {
  const { class: className, ...rest } = inputProps;
  return (className ? { className, ...rest } : rest) as any;
}

type p = typeof p
declare global {
  var p: p
}
