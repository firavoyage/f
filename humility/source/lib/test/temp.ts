type tap_like_counts = [number, number, number, number];
type break_counts = [number, number, number, number, number, number, number];

type solution = {
  tap: tap_like_counts;
  hold: tap_like_counts;
  slide: tap_like_counts;
  break: break_counts;
};

type partial_solution = {
  loss: number;
  counts: number[];
};

type search_state = {
  loss: number;
  solution: solution;
};

type category_name = "tap" | "hold" | "slide" | "break";

type category_spec = {
  name: category_name;
  partials: partial_solution[];
};

function solve_achievement_rate_breakdown(params: {
  achievement_rate: number;
  tap: number;
  hold: number;
  slide: number;
  break_count: number;
}): solution[] {
  const unit = 1000000;
  const tolerance = 1000;

  const total_weight =
    params.tap + params.hold * 2 + params.slide * 3 + params.break_count * 5;

  const target_loss = Math.round((101 - params.achievement_rate) * unit);
  if (target_loss < -tolerance) return [];

  if (total_weight === 0) {
    return Math.abs(target_loss) <= tolerance ? [create_empty_solution()] : [];
  }

  const base = 100 / total_weight;
  const break_base = params.break_count === 0 ? 0 : 1 / params.break_count;

  const tap_losses: tap_like_counts = [
    0,
    round_to_unit(0.2 * base, unit),
    round_to_unit(0.5 * base, unit),
    round_to_unit(1 * base, unit),
  ];

  const hold_losses: tap_like_counts = [
    0,
    round_to_unit(0.4 * base, unit),
    round_to_unit(1 * base, unit),
    round_to_unit(2 * base, unit),
  ];

  const slide_losses: tap_like_counts = [
    0,
    round_to_unit(0.6 * base, unit),
    round_to_unit(1.5 * base, unit),
    round_to_unit(3 * base, unit),
  ];

  const break_losses: break_counts =
    params.break_count === 0
      ? [0, 0, 0, 0, 0, 0, 0]
      : [
          round_to_unit(0.25 * break_base, unit),
          round_to_unit(0.5 * break_base, unit),
          round_to_unit(1 * base + 0.6 * break_base, unit),
          round_to_unit(2 * base + 0.6 * break_base, unit),
          round_to_unit(2.5 * base + 0.6 * break_base, unit),
          round_to_unit(3 * base + 0.7 * break_base, unit),
          round_to_unit(5 * base + 1 * break_base, unit),
        ];

  const limit = target_loss + tolerance;

  const category_specs: category_spec[] = [
    {
      name: "tap",
      partials: enumerate_tap_like(params.tap, tap_losses, limit),
    },
    {
      name: "hold",
      partials: enumerate_tap_like(params.hold, hold_losses, limit),
    },
    {
      name: "slide",
      partials: enumerate_tap_like(params.slide, slide_losses, limit),
    },
    {
      name: "break",
      partials: enumerate_break(params.break_count, break_losses, limit),
    },
  ];

  category_specs.sort(compare_category_spec);

  let states: search_state[] = [
    {
      loss: 0,
      solution: create_empty_solution(),
    },
  ];

  for (let i = 0; i < category_specs.length; i++) {
    states = combine_states(states, category_specs[i], limit);
    if (states.length === 0) return [];
  }

  const result_map = new Map<string, solution>();

  for (let i = 0; i < states.length; i++) {
    const state = states[i];
    if (Math.abs(state.loss - target_loss) <= tolerance) {
      const key = solution_key(state.solution);
      if (!result_map.has(key)) {
        result_map.set(key, state.solution);
      }
    }
  }

  return Array.from(result_map.entries())
    .sort(function (a, b) {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    })
    .map(function (entry) {
      return entry[1];
    });
}

function round_to_unit(value: number, unit: number): number {
  return Math.round(value * unit);
}

function create_empty_solution(): solution {
  return {
    tap: [0, 0, 0, 0],
    hold: [0, 0, 0, 0],
    slide: [0, 0, 0, 0],
    break: [0, 0, 0, 0, 0, 0, 0],
  };
}

function clone_solution(src: solution): solution {
  return {
    tap: [src.tap[0], src.tap[1], src.tap[2], src.tap[3]],
    hold: [src.hold[0], src.hold[1], src.hold[2], src.hold[3]],
    slide: [src.slide[0], src.slide[1], src.slide[2], src.slide[3]],
    break: [
      src.break[0],
      src.break[1],
      src.break[2],
      src.break[3],
      src.break[4],
      src.break[5],
      src.break[6],
    ],
  };
}

function make_tap_like_counts(counts: number[]): tap_like_counts {
  return [counts[0], counts[1], counts[2], counts[3]];
}

function make_break_counts(counts: number[]): break_counts {
  return [
    counts[0],
    counts[1],
    counts[2],
    counts[3],
    counts[4],
    counts[5],
    counts[6],
  ];
}

function solution_key(sol: solution): string {
  return (
    sol.tap.join(",") +
    "|" +
    sol.hold.join(",") +
    "|" +
    sol.slide.join(",") +
    "|" +
    sol.break.join(",")
  );
}

function compare_category_spec(a: category_spec, b: category_spec): number {
  return a.partials.length - b.partials.length;
}

function combine_states(
  states: search_state[],
  spec: category_spec,
  limit: number
): search_state[] {
  const next: search_state[] = [];

  for (let i = 0; i < states.length; i++) {
    const state = states[i];

    for (let j = 0; j < spec.partials.length; j++) {
      const partial = spec.partials[j];
      const total_loss = state.loss + partial.loss;
      if (total_loss > limit) continue;

      const solution = clone_solution(state.solution);
      set_category_counts(solution, spec.name, partial.counts);

      next.push({
        loss: total_loss,
        solution: solution,
      });
    }
  }

  return next;
}

function set_category_counts(
  sol: solution,
  name: category_name,
  counts: number[]
): void {
  if (name === "tap") {
    sol.tap = make_tap_like_counts(counts);
    return;
  }

  if (name === "hold") {
    sol.hold = make_tap_like_counts(counts);
    return;
  }

  if (name === "slide") {
    sol.slide = make_tap_like_counts(counts);
    return;
  }

  sol.break = make_break_counts(counts);
}

function enumerate_tap_like(
  count: number,
  losses: tap_like_counts,
  limit: number
): partial_solution[] {
  if (count === 0) {
    return [
      {
        loss: 0,
        counts: [0, 0, 0, 0],
      },
    ];
  }

  const results: partial_solution[] = [];
  const counts = [0, 0, 0, 0];

  function dfs(state_index: number, remaining: number, loss: number): void {
    if (loss > limit) return;

    if (state_index === 4) {
      counts[0] = remaining;
      results.push({
        loss: loss,
        counts: make_tap_like_counts(counts),
      });
      return;
    }

    const value = losses[state_index];

    for (let used = 0; used <= remaining; used++) {
      counts[state_index] = used;
      dfs(state_index + 1, remaining - used, loss + used * value);
    }

    counts[state_index] = 0;
  }

  dfs(1, count, 0);
  return results;
}

function enumerate_break(
  count: number,
  losses: break_counts,
  limit: number
): partial_solution[] {
  if (count === 0) {
    return [
      {
        loss: 0,
        counts: [0, 0, 0, 0, 0, 0, 0],
      },
    ];
  }

  const results: partial_solution[] = [];
  const counts = [0, 0, 0, 0, 0, 0, 0];
  const order = [1, 2, 3, 4, 5, 6];

  order.sort(function (a, b) {
    return losses[b] - losses[a];
  });

  function dfs(order_index: number, remaining: number, loss: number): void {
    if (loss + remaining * losses[0] > limit) return;

    if (order_index === order.length) {
      counts[0] = remaining;
      const total_loss = loss + remaining * losses[0];
      if (total_loss <= limit) {
        results.push({
          loss: total_loss,
          counts: make_break_counts(counts),
        });
      }
      return;
    }

    const idx = order[order_index];
    const value = losses[idx];

    for (let used = 0; used <= remaining; used++) {
      counts[idx] = used;
      dfs(order_index + 1, remaining - used, loss + used * value);
    }

    counts[idx] = 0;
  }

  dfs(0, count, 0);
  return results;
}

const test = (...args) => log(solve_achievement_rate_breakdown(...args))

// example 1
test({
  achievement_rate: 100.75,
  tap: 10,
  hold: 0,
  slide: 0,
  break_count: 1,
});

// expected
// [
//   {
//     tap:   [10, 0, 0, 0],
//     hold:  [0, 0, 0, 0],
//     slide: [0, 0, 0, 0],
//     break: [1, 0, 0, 0, 0, 0, 0], // 1 high perfect
//   }
// ]


// example 2
test({
  achievement_rate: 100.5,
  tap: 10,
  hold: 0,
  slide: 0,
  break_count: 1,
});

// expected
// [
//   {
//     tap:   [10, 0, 0, 0],
//     hold:  [0, 0, 0, 0],
//     slide: [0, 0, 0, 0],
//     break: [0, 1, 0, 0, 0, 0, 0], // 1 low perfect
//   }
// ]


// example 3
test({
  achievement_rate: 100,
  tap: 1,
  hold: 0,
  slide: 0,
  break_count: 0,
});

// base = 100
// loss = 1
// tap great = 20
// tap good = 50
// tap miss = 100
// expected
// []


// example 4
test({
  achievement_rate: 80,
  tap: 1,
  hold: 0,
  slide: 0,
  break_count: 0,
});

// base = 100
// loss = 21
// tap great = 20
// expected
// []
//
//
// example 5
test({
  achievement_rate: 81,
  tap: 1,
  hold: 0,
  slide: 0,
  break_count: 0,
});

// base = 100
// loss = 20
// expected
// [
//   {
//     tap:   [0, 1, 0, 0], // 1 great
//     hold:  [0, 0, 0, 0],
//     slide: [0, 0, 0, 0],
//     break: [0, 0, 0, 0, 0, 0, 0],
//   }
// ]


// example 6
test({
  achievement_rate: 99,
  tap: 2,
  hold: 0,
  slide: 0,
  break_count: 0,
});

// base = 50
// total loss = 2
// expected
// [
//   {
//     tap:   [1, 1, 0, 0], // 1 perfect, 1 great
//     hold:  [0, 0, 0, 0],
//     slide: [0, 0, 0, 0],
//     break: [0, 0, 0, 0, 0, 0, 0],
//   }
// ]


// example 7
test({
  achievement_rate: 100,
  tap: 0,
  hold: 1,
  slide: 0,
  break_count: 0,
});

// base = 50
// hold great loss = 20
// hold good loss = 50
// hold miss loss = 100
// total loss = 1
// expected
// []


// example 8
test({
  achievement_rate: 100.4,
  tap: 0,
  hold: 0,
  slide: 0,
  break_count: 2,
});

// break base = 0.5
// total loss = 0.6
// expected
// [
//   {
//     tap:   [0, 0, 0, 0],
//     hold:  [0, 0, 0, 0],
//     slide: [0, 0, 0, 0],
//     break: [0, 0, 1, 0, 0, 0, 1], // 1 high great + 1 miss? (depending on exact base, likely no solution)
//   }
// ]
// note: this example is primarily useful for exercising multiple break states.

test({
  achievement_rate: 100.9166,
  tap: 285+113,
  hold: 62,
  slide: 107,
  break_count: 27,
});

