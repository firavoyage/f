const { abs } = Math;
let a = 1;
let b = 1;
let n = 1;
do {
  b = b + 2 * a;
  a = b - a;
  n++;
} while (abs(b ** 2 / a ** 2 - 2) < 0.01);

console.log(n)
