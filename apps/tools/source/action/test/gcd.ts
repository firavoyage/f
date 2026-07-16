import { calculate_gcd } from "action/gcd"

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

// const result_4 = calculate_gcd([1.2, 1.8, 2.4]);
// console.log(result_4); 

log(calculate_gcd([0.2, 0.5, 1, 0.4, 1, 2, 0.6, 1.5, 3, 1, 2, 2.5, 3, 5]))

log(calculate_gcd([0.25, 0.5, 0.6, 0.7, 1]))

log(calculate_gcd([2, 5, 1, 4, 6, 15, 30, 10, 20, 25, 30, 50]))

log(calculate_gcd([5, 10, 12, 14, 20]))
