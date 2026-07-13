#!/usr/bin/env node

// Extract arguments, skipping the first two default paths
const args = process.argv.slice(2);

// Check if any arguments were provided
if (args.length === 0) {
  console.log('No arguments provided.');
  process.exit(0);
}

// Print each argument with its index
console.log('Received arguments:');
args.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
