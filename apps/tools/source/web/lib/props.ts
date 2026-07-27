import clsx from 'clsx';
import parse from 'inline-style-parser';
import camel_case from 'camelcase';
import React from 'react';

// type RelaxedProps<T> = Omit<T, 'className'> & {
//   class?: string;
//   [key: string]: any;
// };
type RelaxedProps<T> = {
  class?: string | object | Array<any>;
  style?: string | object;
  [key: string]: any;
};

/**
 * flexible react props/attrs
 * 
 * idempotent
 */
export function p<Tag extends keyof React.JSX.IntrinsicElements>(
  props: RelaxedProps<React.JSX.IntrinsicElements[Tag]>
): any {
  const converted_props: RelaxedProps<React.JSX.IntrinsicElements[Tag]> = {}

  for (const [key, value] of Object.entries(props)) {
    if (key == 'class' || key == 'className') {
      if (Array.isArray(value)) {
        converted_props.className = clsx(...value)
      } else {
        converted_props.className = clsx(value)
      }
    } else if (key == 'style' && typeof value == 'string') {
      // assume style couldnt map to an array

      converted_props.style = parse(value)
    } else {
      if (key.startsWith('data-') || key.startsWith('aria-')) {
        converted_props[key] = value
      } else if (key.startsWith('on')) {
        const normalized_key = key.slice(0, 2) + key[2].toUpperCase() + key.slice(3)
        converted_props[normalized_key] = value
      }  else {
        const normalized_key = camel_case(key)

        if (typeof value == 'boolean') {
          if (value == true) {
            converted_props[normalized_key] = "true"
          } else {
            continue
          }
        } else {
          converted_props[normalized_key] = value
        }
      }
    }
  }

  return converted_props
}

type p = typeof p
declare global {
  var p: p
}
