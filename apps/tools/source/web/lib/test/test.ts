const str = "hello!world [test] 123.45 + abc=xyz;foo,bar";

// Hardcoded common symbols inside a capturing group (excluding '.')
const regex = /([\s!()\[\]{}<>\-_=+\\\/|;:'",?@#$%^&*`~]+)/;

const result = str.split(regex);

console.log(result);
/* Output: 
[
  "hello", "!", "world", " [", "test", "] ", 
  "123.45", " + ", "abc", "=", "xyz", ";", 
  "foo", ",", "bar"
]
*/

// Verifying the integrity of the string
console.log(result.join('') === str);
// Output: true
