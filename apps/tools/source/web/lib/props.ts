import clsx from 'clsx';
import parse from 'inline-style-parser';
import React from 'react';

function kebab_to_camel(str: string): string {
  let result = "";
  let capitalize_next = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "-") {
      capitalize_next = true;
    } else {
      if (capitalize_next) {
        result += char.toUpperCase();
        capitalize_next = false;
      } else {
        result += char;
      }
    }
  }

  return result;
}

// for some reason it couldnt autocomplete

// type RelaxedProps<T> = Omit<T, 'className'> & {
//   class?: string;
//   [key: string]: any;
// };
type RelaxedProps = object;
// type RelaxedProps = {
//   key?: never,
//   class?: string | object | Array<any>,
//   style?: string | object,
//   [key: string]: any,
// };

/**
 * flexible react props/attrs
 * 
 * idempotent
 */
export function p(
  props: RelaxedProps
): any {
// export function p<Tag extends keyof React.JSX.IntrinsicElements>(
//   props: RelaxedProps<React.JSX.IntrinsicElements[Tag]>
// ): any {
  const converted_props: RelaxedProps = {}
  // const converted_props: RelaxedProps<React.JSX.IntrinsicElements[Tag]> = {}

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
      } else {
        const normalized_key = kebab_to_camel(key)

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

