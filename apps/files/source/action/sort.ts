/**
 * Sorts an array of numbers in ascending or descending order.
 * @param numbers - The array of numbers to sort.
 * @param ascending - True for lowest-to-highest, false for highest-to-lowest.
 * @returns A new sorted array of numbers.
 */
export function sort(numbers: number[], ascending: boolean = true): number[] {
  return [...numbers].sort((a, b) => ascending ? a - b : b - a);
}
