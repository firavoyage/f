function find_n_m(a: number, b: number, c: number, tolerance = 0.001) {
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
        solutions.push({ n, m: m_round, result: a*n+b*m_round, delta: a*n+b*m_round-c });
      }
    }
  }

  return solutions;
}


function base(tap: number, hold: number, slide: number, break_number: number) {
  return 100 / (1 * tap + 2 * hold + 3 * slide + 5 * break_number)
}

function break_base(break_number: number) {
  return 1 / break_number
}

const b = base(285 + 113, 62, 107, 27)
const bb = break_base(27)

log(b, bb)

log(101 - 100.9166)

log(find_n_m(0.1 * b, 0.05 * bb, 101 - 100.9166))


