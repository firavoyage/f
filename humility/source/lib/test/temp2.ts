type tap_like_counts = [number, number, number, number];
type break_counts = [number, number, number, number, number, number, number];

type solution = {
  tap: tap_like_counts;
  hold: tap_like_counts;
  slide: tap_like_counts;
  break: break_counts;
};

type params = {
  achievement_rate: number;
  tap: number;
  hold: number;
  slide: number;
  break_count: number;
};

type note_type = {
  loss: number;
  index: number;
};

type category = {
  count: number;
  types: note_type[];
};

type state = {
  loss: number;
  counts: number[];
};

const scale = 1_000_000;
const tolerance = 1_000;

async function solve_achievement_rate_breakdown(
  params: params,
): Promise<solution[]> {
  const target_loss = Math.round((101 - params.achievement_rate) * scale);

  const total_weight =
    params.tap +
    params.hold * 2 +
    params.slide * 3 +
    params.break_count * 5;

  if (total_weight === 0) {
    return Math.abs(target_loss) <= tolerance
      ? [empty_solution()]
      : [];
  }

  const base = 100 / total_weight;
  const break_base =
    params.break_count === 0
      ? 0
      : 1 / params.break_count;

  const tap = create_category(
    params.tap,
    [
      0,
      0.2 * base,
      0.5 * base,
      1 * base,
    ],
  );

  const hold = create_category(
    params.hold,
    [
      0,
      0.4 * base,
      1 * base,
      2 * base,
    ],
  );

  const slide = create_category(
    params.slide,
    [
      0,
      0.6 * base,
      1.5 * base,
      3 * base,
    ],
  );

  const break_notes = create_category(
    params.break_count,
    [
      0.25 * break_base,
      0.5 * break_base,
      1 * base + 0.6 * break_base,
      2 * base + 0.6 * break_base,
      2.5 * base + 0.6 * break_base,
      3 * base + 0.7 * break_base,
      5 * base + break_base,
    ],
  );

  // next part:
  // replace the exponential enumeration with integer dp
  // each category produces reachable (loss -> count vector)
  // then merge the four categories
  return [];
}

function create_category(
  count: number,
  losses: number[],
): category {
  return {
    count,
    types: losses.map(function (loss, index) {
      return {
        index,
        loss: Math.round(loss * scale),
      };
    }),
  };
}

function empty_solution(): solution {
  return {
    tap: [0, 0, 0, 0],
    hold: [0, 0, 0, 0],
    slide: [0, 0, 0, 0],
    break: [0, 0, 0, 0, 0, 0, 0],
  };
}

type dp_state = {
  loss: number;
  counts: number[];
};

async function solve_category(
  category: category,
  max_loss: number,
): Promise<dp_state[]> {
  let states = new Map<number, number[]>();

  states.set(
    0,
    new Array(category.types.length).fill(0),
  );

  for (let note = 0; note < category.count; note++) {
    const next = new Map<number, number[]>();

    for (const [loss, counts] of states) {
      for (const type of category.types) {
        const total_loss = loss + type.loss;

        if (total_loss > max_loss) {
          continue;
        }

        if (next.has(total_loss)) {
          continue;
        }

        const next_counts = counts.slice();
        next_counts[type.index]++;

        next.set(
          total_loss,
          next_counts,
        );
      }
    }

    states = next;
  }

  const result: dp_state[] = [];

  for (const [loss, counts] of states) {
    result.push({
      loss,
      counts,
    });
  }

  result.sort(function (a, b) {
    return a.loss - b.loss;
  });

  return result;
}

