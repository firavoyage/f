/**
 * be careful if gcd and scale factor are not co prime
 */

function calculate_gcd(numbers: number[]): { gcd: number; scale_factor: number } {
  if (numbers.length === 0) {
    return { gcd: 0, scale_factor: 1 };
  }

  let max_decimals = 0;

  for (const num of numbers) {
    const num_str = num.toString();
    const decimal_index = num_str.indexOf('.');
    if (decimal_index !== -1) {
      const decimal_places = num_str.length - decimal_index - 1;
      if (decimal_places > max_decimals) {
        max_decimals = decimal_places;
      }
    }
  }

  const multiplier = Math.pow(10, max_decimals);

  const integers = numbers.map(num => Math.round(num * multiplier));

  const find_gcd = (a: number, b: number): number => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  };

  let current_gcd = integers[0];
  for (let i = 1; i < integers.length; i++) {
    current_gcd = find_gcd(current_gcd, integers[i]);
    if (current_gcd === 1) {
      break;
    }
  }

  return {
    gcd: current_gcd,
    scale_factor: multiplier
  };
}

// // Example 1: Pure integers (no multiplier needed)
// const result_1 = calculate_gcd([12, 18, 24]);
// console.log(result_1); 
// // Output: { gcd: 6, scale_factor: 1 }

// // Example 2: Numbers with up to 2 decimal places
// const result_2 = calculate_gcd([1.2, 1.8, 0.24]);
// // Multiplied by 100 to become: 120, 180, 24
// console.log(result_2); 
// // Output: { gcd: 12, scale_factor: 100 }

// // Example 3: Number with 3 decimal places
// const result_3 = calculate_gcd([0.005]);
// // Multiplied by 1000 to become: 5
// console.log(result_3); 
// // Output: { gcd: 5, scale_factor: 1000 }

log(calculate_gcd([0.2, 0.5, 1, 0.4, 1, 2, 0.6, 1.5, 3, 1, 2, 2.5, 3, 5]))

log(calculate_gcd([0.25, 0.5, 0.6, 0.7, 1]))
