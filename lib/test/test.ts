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
