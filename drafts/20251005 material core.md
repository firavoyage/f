# 1

write a js fn.

- use const arrow fn. write jsdoc with examples.
- name: compile
- param: string material
- the string contains several lines
- each line contain several words
- the first word is the type
- the rest is an array. if an item could be a number, convert it to number.
- omit spaces at the end of a line and empty lines at the end of the file
- returns: an array of {string type, string|number props[]}

e.g.

input:

```
a 0 0 1
b abc xyz
a 1 1 2
```

output:

```
[
  {type: "a", props: [0, 0, 1]},
  {type: "b", props: ["abc", "xyz"]},
  {type: "a", props: [1,1,2]}
]
```

---

Here's the JavaScript function that meets your requirements:

```javascript
/**
 * Compiles a string of material data into structured objects.
 *
 * @param {string} material - The input string containing multiple lines of data.
 * @returns {Array<{type: string, props: Array<string|number>}>} An array of objects with type and props.
 *
 * @example
 * // Returns [{type: 'a', props: [0, 0, 1]}, {type: 'b', props: ['abc', 'xyz']}, {type: 'a', props: [1, 1, 2]}]
 * compile(`a 0 0 1
 * b abc xyz
 * a 1 1 2`);
 *
 * @example
 * // Returns [{type: 'test', props: [1, 'foo']}]
 * compile('test 1 foo  ');
 */
const compile = (material) => {
  return material
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line) => line.length > 0)
    .map((line) => {
      const [type, ...props] = line.split(/\s+/);
      return {
        type,
        props: props.map((item) => (isNaN(item) ? item : Number(item))),
      };
    });
};
```

This function:

1. Splits input by newlines into individual lines
2. Trims trailing spaces from each line using `trimEnd()`
3. Filters out empty lines
4. For each line:
   - Splits by whitespace (handling multiple spaces)
   - Uses destructuring to separate first word as type and rest as props
   - Converts numeric props to numbers using `isNaN()` check
5. Returns an array of objects with `type` and `props` properties

The function handles:

- Trailing space removal per line
- Empty line filtering
- Automatic number conversion
- Multiple whitespace characters between words
- Preservation of string values that can't be converted to numbers

# 2

write a js fn.

- use const arrow fn. write jsdoc with examples.
- name:
- param:
- ...
- returns:



