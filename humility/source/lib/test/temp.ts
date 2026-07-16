function find_n_m(a: number, b: number, c: number) {
    const max_range = 10000;
    const tolerance = 0.001;

    for (let n = 0; n <= max_range; n++) {
        const remaining = c - (a * n);

        if (Math.abs(b) < tolerance) {
            if (Math.abs(remaining) < tolerance) {
                return { n, m: 0 };
            }
            continue;
        }

        const m = Math.round(remaining / b);

        if (m >= 0 && m <= max_range) {
            const current_c = (a * n) + (b * m);
            if (Math.abs(current_c - c) < tolerance) {
                return { n, m };
            }
        }
    }
}

function base(tap: number, hold: number, slide: number, break_number: number) {
    return 100 / (1 * tap + 2 * hold + 3 * slide + 5 * break_number)
}

function break_base(break_number) {
    return 1 / break_number
}

const b = base(285 + 113, 62, 107, 27)
const bb = break_base(27)

log(b, bb)

log(find_n_m(0.1 * b, 0.05 * bb, 101 - 100.9166))
