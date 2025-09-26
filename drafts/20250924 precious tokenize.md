# 1

write a js fn.

- use const arrow fn. write jsdoc with examples.
- name: type
- param: a string
- number means it only includes 0 to 9 and decimal point.
- can start with 0 or have many decimal points.
- variable means it only includes lowercase and uppercase english alphabets
- returns "number" | "variable" | "symbol"

---

Here's the JavaScript function that meets your specifications:

```javascript
/**
 * Determines the type of a string based on its content.
 * - "number": contains only digits (0-9) and decimal points (.)
 * - "variable": contains only English letters (a-z, A-Z)
 * - "symbol": any other string
 *
 * @param {string} str - The input string to check
 * @returns {"number" | "variable" | "symbol"} The type of the string
 *
 * @example
 * type("123"); // returns "number"
 * type("0.123"); // returns "number"
 * type("0.1.2.3"); // returns "number"
 * type("hello"); // returns "variable"
 * type("World"); // returns "variable"
 * type("hello123"); // returns "symbol"
 * type("!@#"); // returns "symbol"
 * type(""); // returns "symbol"
 */
const type = (str) => {
  if (/^[0-9.]+$/.test(str)) {
    return "number";
  }
  if (/^[a-zA-Z]+$/.test(str)) {
    return "variable";
  }
  return "symbol";
};
```

This function:

- Uses regular expressions to check the string content
- First checks if the string contains only digits and decimal points (returns "number")
- Then checks if the string contains only English letters (returns "variable")
- Returns "symbol" for any other case (including empty strings and mixed content)
- Includes comprehensive JSDoc with examples showing different scenarios

# 2

write a js fn.

- use const arrow fn. write jsdoc with examples.
- name: tokenize
- param: a string
- fn "type" is defined in prev code. string test -> string type
- split the string to consecutive same type.
- e.g. string have 5 characters, 1 to 3 have the same type, 4 to 5 have another type, than it should be splitted to two items.
- returns an array of string tokens

---

Here's the JavaScript function that meets your requirements:

```javascript
/**
 * Splits a string into consecutive tokens of the same character type.
 * Characters are grouped based on the return value of the `type` function.
 *
 * @param {string} str - The input string to tokenize
 * @returns {string[]} Array of tokens where each token contains consecutive characters of the same type
 *
 * @example
 * // Assuming `type` function returns 'letter' for alphabetic characters and 'digit' for numbers
 * tokenize("abc123def");
 * // Returns: ['abc', '123', 'def']
 *
 * @example
 * // Mixed characters with different types
 * tokenize("Hello123World!");
 * // Returns: ['Hello', '123', 'World', '!']
 *
 * @example
 * // Empty string returns empty array
 * tokenize("");
 * // Returns: []
 *
 * @example
 * // Single character string
 * tokenize("a");
 * // Returns: ['a']
 */
const tokenize = (str) => {
  if (str.length === 0) return [];

  const tokens = [];
  let currentToken = str[0];
  let currentType = type(str[0]);

  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    const charType = type(char);

    if (charType === currentType) {
      currentToken += char;
    } else {
      tokens.push(currentToken);
      currentToken = char;
      currentType = charType;
    }
  }

  tokens.push(currentToken);
  return tokens;
};
```

This function:

- Uses a const arrow function as requested
- Includes comprehensive JSDoc with examples
- Splits the input string into consecutive tokens where all characters share the same type
- Handles edge cases like empty strings and single-character strings
- Uses the `type` function (assumed to be defined previously) to determine the character type
- Returns an array of string tokens

The algorithm works by:

1. Starting with the first character as the initial token
2. Iterating through the string and comparing each character's type with the current token's type
3. Extending the current token if types match, or starting a new token when types differ
4. Pushing the final token to the result array after the loop completes

# 3

write a js fn.

- use const arrow fn. write jsdoc with examples.
- name: translate
- param: array words, object dict
- if a word is key of dict, replace it with the value
- returns an array of translated words

---

Here's the JavaScript function `translate` implemented as a const arrow function with JSDoc:

```javascript
/**
 * Translates an array of words by replacing words that are keys in a dictionary
 * with their corresponding values. Words not found in the dictionary remain unchanged.
 *
 * @param {string[]} words - Array of words to be translated.
 * @param {Object.<string, string>} dict - Dictionary object mapping source words to translated words.
 * @returns {string[]} New array with translated words.
 *
 * @example
 * // Basic usage
 * translate(['hello', 'world'], { hello: 'hola' });
 * // Returns: ['hola', 'world']
 *
 * @example
 * // Multiple translations
 * translate(['this', 'is', 'nice'], { this: 'este', is: 'es', nice: 'agradable' });
 * // Returns: ['este', 'es', 'agradable']
 *
 * @example
 * // No translations (empty dictionary)
 * translate(['foo', 'bar'], {});
 * // Returns: ['foo', 'bar']
 *
 * @example
 * // No translations (non-matching dictionary)
 * translate(['a', 'b'], { c: 'see', d: 'dee' });
 * // Returns: ['a', 'b']
 */
const translate = (words, dict) => words.map((word) => dict[word] ?? word);
```

This implementation:

1. Uses `Array.prototype.map()` to create a new array
2. Checks each word against the dictionary using the nullish coalescing operator (`??`)
3. Returns the translated word if found in the dictionary, otherwise keeps the original word
4. Handles all edge cases including empty arrays, empty dictionaries, and non-matching keys

The function is pure - it doesn't modify the original input array or dictionary.
