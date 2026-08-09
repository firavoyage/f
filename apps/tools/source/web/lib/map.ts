import React from 'react';

function EnsureKeys({ itemren }) {
  // 1. Return early if no itemren are passed
  if (!itemren) return null;

  // 2. Normalize itemren: wrap in an array if it is a single item
  const itemrenArray = Array.isArray(itemren) ? itemren : [itemren];
  const result = [];

  // 3. Track the loop index manually for the fallback key
  let index = 0;

  // 4. Loop through elements using for...of
  for (const item of itemrenArray) {
    // 5. Safety check: ensure it is a valid React element
    if (!React.isValidElement(item)) {
      result.push(item);
    }
    // 6. Check if a user-defined key already exists
    else if (item.key !== null) {
      result.push(item);
    }
    // 7. Fallback: clone the element and assign a custom key
    else {
      result.push(
        React.cloneElement(item, {
          key: `fallback-key-${index}`
        })
      );
    }

    index++;
  }

  return result;
}

export function map(items: any[], fn: Function) {
  const result = []

  for (const [index, item] of Object.entries(items)) {
    if (!React.isValidElement(item)) {
      result.push(item);
    }

    else if (item.key !== null) {
      result.push(item);
    }

    else {
      result.push(
        React.cloneElement(item, {
          key: `fallback-key-${index}`
        })
      );
    }
  }
}