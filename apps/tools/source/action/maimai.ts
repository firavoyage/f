import { home, write } from "lib/file";
import { stringify } from 'yaml';

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

function solutions_number(n: number, weights = [1, 2, 3, 4, 6]): number {
  const dp: number[] = [];
  for (let i = 0; i <= n; i++) {
    dp.push(0);
  }
  dp[0] = 1;

  for (let i = 0; i < weights.length; i++) {
    const w = weights[i];
    for (let j = w; j <= n; j++) {
      dp[j] += dp[j - w];
    }
  }

  return dp[n];
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

  log({ achievement, b, bb })

  const _b = 0.1 * b
  const _bb = 0.05 * bb

  const loss = 101 - achievement

  const findings = find_n_m(_b, _bb, loss)

  // log(findings)

  // divide into base 2 and base 5 first, combine some of them later
  const _b_factors = [2, 5]

  // great tap, great hold, great slide, 
  const _b_factors_base_2 = [1, 2, 3]
  // const _b_factors_base_2 = [2, 4, 6]

  // good tap, miss tap/good hold, good slide, miss hold, miss slide
  const _b_factors_base_5 = [1, 2, 3, 4, 6]
  // const _b_factors_base_5 = [5, 10, 15, 20, 30]

  // // great tap, great hold, good tap, great slide, 
  // // miss tap/good hold, good slide, miss hold, miss slide
  // const _b_factors = [2, 4, 5, 6, 10, 15, 20, 30]
  // // const _b_factors = [2, 4, 5, 6, 10, 15, 20, 25, 30, 50]

  // hp, lp, hg/mg/lg, good, miss
  const _bb_factors = [5, 10, 12, 14, 20]

  const results = []

  let expanded_results_number = 0

  for (const { n, m } of findings) {
    const current_results = []

    let expanded_current_results_number = 0

    if (break_number * 20 < m) {
      // cut the branch. it could not cause so much damage even if you miss all breaks.

      continue
    }

    const solutions_m = solve_change(m, _bb_factors)

    // hp, lp, hg, mg, lg, good, miss
    const derived_solutions_m = []
    for (const [hp, lp, great, good, miss] of solutions_m) {
      if (hp + lp + great + good + miss > break_number) {
        // impossible, no so many notes to lose

        continue
      }

      if (great == 0) {
        const [hg, mg, lg] = [0, 0, 0]

        const remaining_n = n - (hg * 10 + mg * 20 + lg * 25 + good * 30 + miss * 50)

        if (remaining_n < 0) {
          continue
        }

        derived_solutions_m.push([hp, lp, hg, mg, lg, good, miss])
        continue
      }

      // great -> hg, mg, lg
      const expanded_greats = stars_and_bars(great, 3)

      for (const [hg, mg, lg] of expanded_greats) {
        const remaining_n = n - (hg * 10 + mg * 20 + lg * 25 + good * 30 + miss * 50)

        if (remaining_n < 0) {
          continue
        }

        derived_solutions_m.push([hp, lp, hg, mg, lg, good, miss])
      }
    }

    // log({ solutions, derived_solutions })

    for (const [hp, lp, hg, mg, lg, good, miss] of derived_solutions_m) {
      const remaining_n = n - (hg * 10 + mg * 20 + lg * 25 + good * 30 + miss * 50)

      // if (remaining_n < 0) {
      //   continue
      // }

      const solutions_n = solve_change(remaining_n, _b_factors)

      // log({ remaining_n, solutions_n: solutions_n.length })

      for (const [base_2, base_5] of solutions_n) {
        current_results.push({
          // tap/touch, hold, slide
          base: {
            base_2, base_5
          },
          // break
          bonus: { hp, lp, hg, mg, lg, good, miss },
        })

        expanded_current_results_number +=
          solutions_number(base_2, _b_factors_base_2)
          * solutions_number(base_5, _b_factors_base_5)
      }

      // for (const [great_tap, great_hold, good_tap, great_slide, miss_tap_good_hold,
      //   good_slide, miss_hold, miss_slide] of solutions_n) {
      //   current_results.push({
      //     // tap/touch, hold, slide
      //     base: {
      //       great_tap, great_hold, good_tap, great_slide, miss_tap_good_hold,
      //       good_slide, miss_hold, miss_slide
      //     },
      //     // break
      //     bonus: { hp, lp, hg, mg, lg, good, miss },
      //   })
      // }
    }

    results.push(...current_results)

    expanded_results_number += expanded_current_results_number

    if (current_results.length == 0) {
      continue
    }

    log({
      n, m,
      solutions_m: solutions_m.length, derived_solutions_m: derived_solutions_m.length,
      current_results: current_results.length,
      expanded_current_results_number
    })

    // if (result_count == 0) {
    //   continue
    // }

    // write(home(`result_${n}_${m}.yaml`), stringify({ current_results, derived_solutions_m }))
  }

  log({ expanded_results_number })

  return results
}

export function expand_maimai(results: ReturnType<typeof maimai>) {
  log(results)
}

const results = maimai(100.9166, 285 + 113, 62, 107, 27)

// const results = maimai(97.0669, (552 + 78 + 14 + 4) + 0, 20 + 1, 69 + 3 + 2 + 2, 8 + 6)

// const results = maimai(100.6802, (279 + 8) + 14, 75, 37, 9 + 3)

// const results = maimai(100.0445, (364 + 18 + 3), 70 + 4, 44, 12 + 3)

log({ results: results.length })

// log(results)


