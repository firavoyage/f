function find_n_m(a: number, b: number, c: number, tolerance = 0.0001) {
  const solutions = [];

  // handle case where both a and b are close to zero
  if (Math.abs(a) < tolerance && Math.abs(b) < tolerance) {
    if (Math.abs(c) < tolerance) {
      return [{ n: 0, m: 0 }];
    }
    return [];
  }

  // handle case where only b is close to zero
  if (Math.abs(b) < tolerance) {
    if (a > tolerance) {
      const n_exact = c / a;
      const n_round = Math.round(n_exact);
      if (n_round >= 0 && Math.abs((a * n_round) - c) < tolerance) {
        return [{ n: n_round, m: 0 }];
      }
    }
    return [];
  }

  // mathematically limit the search space for n based on the inputs
  // if a is positive, n cannot exceed (c + tolerance) / a because m must be >= 0
  const max_n = a > tolerance ? Math.floor((c + tolerance) / a) : 10000;

  for (let n = 0; n <= max_n; n++) {
    const remaining = c - (a * n);

    // calculate the exact required m for this specific n
    const m_exact = remaining / b;
    const m_round = Math.round(m_exact);

    // ensure m is non-negative
    if (m_round >= 0) {
      const current_c = (a * n) + (b * m_round);

      // check if the combination satisfies the floating point tolerance
      if (Math.abs(current_c - c) < tolerance) {
        solutions.push({ n, m: m_round, result: a * n + b * m_round, result_: 101 - (a * n + b * m_round), delta: a * n + b * m_round - c });
      }
    }
  }

  return solutions;
}

function solve_change(target: number, factors: number[]): number[][] {
  const total_factors = factors.length;
  const solutions_table: number[][][] = [];

  for (let index = 0; index <= target; index++) {
    solutions_table.push([]);
  }

  const base_combination = new Array(total_factors).fill(0);
  solutions_table[0].push(base_combination);

  for (let factor_idx = 0; factor_idx < total_factors; factor_idx++) {
    const factor_value = factors[factor_idx];

    for (let current_sum = factor_value; current_sum <= target; current_sum++) {
      const complement = current_sum - factor_value;
      const existing_combinations = solutions_table[complement];
      const existing_count = existing_combinations.length;

      for (let combo_idx = 0; combo_idx < existing_count; combo_idx++) {
        const updated_combination = [...existing_combinations[combo_idx]];
        updated_combination[factor_idx] += 1;
        solutions_table[current_sum].push(updated_combination);
      }
    }
  }

  return solutions_table[target];
}

function stars_and_bars(n: number, m: number): number[][] {
  const results: number[][] = [];
  const current_combination: number[] = [];

  function distribute(remaining_stars: number, remaining_boxes: number): void {
    if (remaining_boxes === 1) {
      current_combination.push(remaining_stars);
      results.push([...current_combination]);
      current_combination.pop();
      return;
    }

    for (let i = 0; i <= remaining_stars; i++) {
      current_combination.push(i);
      distribute(remaining_stars - i, remaining_boxes - 1);
      current_combination.pop();
    }
  }

  if (m > 0 && n >= 0) {
    distribute(n, m);
  }

  return results;
}

function base(tap: number, hold: number, slide: number, break_number: number) {
  return 100 / (1 * tap + 2 * hold + 3 * slide + 5 * break_number)
}

function break_base(break_number: number) {
  return 1 / break_number
}

export function maimai(achievement: number,
  tap: number, hold: number, slide: number, break_number: number) {

  const b = base(tap, hold, slide, break_number)
  const bb = break_base(break_number)

  log({ b, bb })

  const _b = 0.1 * b
  const _bb = 0.05 * bb

  const loss = 101 - achievement

  log(find_n_m(_b, _bb, loss))

  // 
  const _b_factors = [2, 4, 5, 6, 10, 15, 20, 25, 30, 50]
  // 
  const _bb_factors = [5, 10, 12, 14, 20]

  log(solve_change(45, _bb_factors))
  log(solve_change(34, _bb_factors))
  log(solve_change(23, _bb_factors))


}

log(maimai(100.9166, 285 + 113, 62, 107, 27))
