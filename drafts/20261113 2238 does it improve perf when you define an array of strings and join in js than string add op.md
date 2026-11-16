# does it improve perf when you define an array of strings and join in js than string add op

## does it improve perf when you define an array of strings and join in js than string add op

Usually, **no**—`array.join("")` is not inherently faster than `+=` in modern JavaScript engines.

```js
let s = "";
for (const part of parts) s += part;
```

Engines often optimize repeated concatenation using internal rope/cons strings, so it’s generally fine. `join` may be a good choice when you **already have the pieces in an array**:

```js
const s = parts.join("");
```

But collecting pieces into an array just to join them adds allocation and may not help. For very large strings or performance-critical code, benchmark with your actual workload and runtime; the result can vary.

## write a script to test

Here’s a Node.js benchmark comparing concatenation, `join()` on an existing array, and building an array before joining:

```js
// bench.js
const { performance } = require("node:perf_hooks");

const parts = Array.from({ length: 20_000 }, (_, i) =>
  String(i % 10_000).padStart(8, "0")
);

const methods = {
  "string +=": () => {
    let result = "";
    for (let i = 0; i < parts.length; i++) result += parts[i];
    return result;
  },

  "existing array .join()": () => parts.join(""),

  "build array + .join()": () => {
    const array = [];
    for (let i = 0; i < parts.length; i++) array.push(parts[i]);
    return array.join("");
  },
};

const repetitions = 10;
const rounds = 7;

function run(method) {
  let checksum = 0;

  for (let i = 0; i < repetitions; i++) {
    const result = method();

    // Read characters so the result is actually used.
    checksum += result.length;
    checksum += result.charCodeAt(0);
    checksum += result.charCodeAt(result.length >> 1);
    checksum += result.charCodeAt(result.length - 1);
  }

  return checksum;
}

// Warm up each method before timing.
for (const method of Object.values(methods)) {
  run(method);
}

const timings = Object.fromEntries(
  Object.keys(methods).map(name => [name, []])
);

for (let round = 0; round < rounds; round++) {
  // Rotate the order to reduce order-related bias.
  const names = Object.keys(methods);
  names.push(...names.splice(0, round % names.length));

  for (const name of names) {
    const start = performance.now();
    const checksum = run(methods[name]);
    const elapsed = performance.now() - start;

    timings[name].push(elapsed);

    if (checksum === 0) throw new Error("Unexpected checksum");
  }
}

for (const [name, samples] of Object.entries(timings)) {
  samples.sort((a, b) => a - b);
  const median = samples[Math.floor(samples.length / 2)];
  console.log(`${name}: ${median.toFixed(2)} ms per ${repetitions} builds`);
}
```

Run it with:

```bash
node bench.js
```

The “existing array” case assumes the strings are already in an array; “build array + join” includes the cost of creating that array. Results can vary between Node.js versions and workloads, so try changing the number and size of the strings to match your use case.

##  ...source/web/component % cd "/home/fira/Documents/f/lib/test/" && b 
'test.ts'
string +=: 8.87 ms per 10 builds
existing array .join(): 4.59 ms per 10 builds
build array + .join(): 7.70 ms per 10 builds
 ...f/lib/test % cd "/home/fira/Documents/f/lib/test/" && b 'test.ts'
string +=: 4.35 ms per 10 builds
existing array .join(): 2.82 ms per 10 builds
build array + .join(): 4.55 ms per 10 builds
 ...f/lib/test % cd "/home/fira/Documents/f/lib/test/" && b 'test.ts'
string +=: 4.73 ms per 10 builds
existing array .join(): 3.89 ms per 10 builds
build array + .join(): 7.00 ms per 10 builds
 ...f/lib/test % cd "/home/fira/Documents/f/lib/test/" && b 'test.ts'
string +=: 3.84 ms per 10 builds
existing array .join(): 2.55 ms per 10 builds
build array + .join(): 4.69 ms per 10 builds
 ...f/lib/test % cd "/home/fira/Documents/f/lib/test/" && b 'test.ts'
string +=: 3.86 ms per 10 builds
existing array .join(): 2.86 ms per 10 builds
build array + .join(): 4.63 ms per 10 builds


Your results suggest that **`join()` is faster when the array already exists** in your runtime: the median of your five runs is about **2.86 ms**, versus **4.35 ms** for `+=`—roughly 34% less time.

But **building an array and then joining it** took a median of about **4.69 ms**, slightly slower than `+=`. So if you’d need to create the array just to join it, your benchmark doesn’t show a benefit.

These are small timings and vary between runs, but the practical takeaway is: use `join("")` if you already have the pieces in an array; don’t assume it’s faster when collecting them first.