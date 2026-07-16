export function calculate_gcd(numbers: number[]): number {
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

  const factor = Math.pow(10, max_decimals);

  const integers = numbers.map(num => Math.round(num * factor));

  const find_gcd = (a: number, b: number): number => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  };

  let gcd = integers[0];
  for (let i = 1; i < integers.length; i++) {
    gcd = find_gcd(gcd, integers[i]);
    if (gcd === 1) {
      break;
    }
  }

  return gcd / factor;
  // return {
  //   gcd: current_gcd,
  //   scale_factor: multiplier
  // };
}
