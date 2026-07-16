type NoteJudgments = {
  taps: { great: number; good: number; miss: number };
  holds: { great: number; good: number; miss: number };
  slides: { great: number; good: number; miss: number };
  breaks: {
    highPerfect: number;
    lowPerfect: number;
    highGreat: number;
    midGreat: number;
    lowGreat: number;
    good: number;
    miss: number;
    perfect: number;
  };
};

type Solution = NoteJudgments;

interface LossContribution {
  b: number;
  bb: number;
}

const TAP_LOSSES: LossContribution[] = [
  { b: 0, bb: 0 },   // perfect
  { b: 0.2, bb: 0 }, // great
  { b: 0.5, bb: 0 }, // good
  { b: 1.0, bb: 0 }, // miss
];

const HOLD_LOSSES: LossContribution[] = [
  { b: 0, bb: 0 },   // perfect
  { b: 0.4, bb: 0 }, // great
  { b: 1.0, bb: 0 }, // good
  { b: 2.0, bb: 0 }, // miss
];

const SLIDE_LOSSES: LossContribution[] = [
  { b: 0, bb: 0 },   // perfect
  { b: 0.6, bb: 0 }, // great
  { b: 1.5, bb: 0 }, // good
  { b: 3.0, bb: 0 }, // miss
];

const BREAK_LOSSES: LossContribution[] = [
  { b: 0, bb: 0.25 },  // highPerfect
  { b: 0, bb: 0.5 },   // lowPerfect
  { b: 1.0, bb: 0.6 }, // highGreat
  { b: 2.0, bb: 0.6 }, // midGreat
  { b: 2.5, bb: 0.6 }, // lowGreat
  { b: 3.0, bb: 0.7 }, // good
  { b: 5.0, bb: 1.0 }, // miss
  { b: 0, bb: 0 },     // perfect
];

function calculateTotalPoints(tap: number, hold: number, slide: number, brk: number): number {
  return 1 * tap + 2 * hold + 3 * slide + 5 * brk;
}

function findSolutions(
  achRate: number,
  tapNum: number,
  holdNum: number,
  slideNum: number,
  breakNum: number
): Solution[] {
  const targetLoss = 101 - achRate;
  const totalPoints = calculateTotalPoints(tapNum, holdNum, slideNum, breakNum);
  if (totalPoints === 0) return [];
  
  const bCoeff = 100 / totalPoints;
  const bbCoeff = breakNum > 0 ? 1 / breakNum : 0;
  const solutions: Solution[] = [];

  // Generate lightweight maps containing configurations indexed by their exact b-loss values
  // Key: b-loss multiplied by 10 (as an integer to preserve Map matching keys without floating errors)
  function getBLossMap(num: number, losses: LossContribution[]) {
    let current = new Map<number, number[][]>();
    current.set(0, [[0, 0, 0]]); // Each entry: [great, good, miss]

    for (let i = 0; i < num; i++) {
      const next = new Map<number, number[][]>();
      for (const [currB, configs] of current) {
        for (let j = 0; j < losses.length; j++) {
          const nextB = Math.round((currB + losses[j].b) * 10);
          for (const config of configs) {
            const newConfig = [...config];
            if (j > 0) {
              newConfig[j - 1]++;
            }
            if (!next.has(nextB)) {
              next.set(nextB, []);
            }
            // Max out variations per specific loss signature to protect heap size
            if (next.get(nextB)!.length < 10) {
              next.get(nextB)!.push(newConfig);
            }
          }
        }
      }
      current = next;
    }
    return current;
  }

  const tapMap = getBLossMap(tapNum, TAP_LOSSES);
  const holdMap = getBLossMap(holdNum, HOLD_LOSSES);
  const slideMap = getBLossMap(slideNum, SLIDE_LOSSES);

  // Pre-combine tap, hold, and slide memory spaces into an aggregated collection
  const thsMap = new Map<number, Array<{ t: number[]; h: number[]; s: number[] }>>();
  for (const [tB, tConfigs] of tapMap) {
    for (const [hB, hConfigs] of holdMap) {
      for (const [sB, sConfigs] of slideMap) {
        const combinedB = tB + hB + sB;
        if (!thsMap.has(combinedB)) {
          thsMap.set(combinedB, []);
        }
        for (const tC of tConfigs) {
          for (const hC of hConfigs) {
            for (const sC of sConfigs) {
              if (thsMap.get(combinedB)!.length < 20) {
                thsMap.get(combinedB)!.push({ t: tC, h: hC, s: sC });
              }
            }
          }
        }
      }
    }
  }

  // Branch and Bound search through break notes with mathematical performance pruning
  function searchBreaks(
    index: number,
    brB: number,
    brBB: number,
    counts: number[]
  ) {
    const currentMinLoss = brB * bCoeff + brBB * bbCoeff;
    if (currentMinLoss > targetLoss + 0.001) return; // Cut the tree branch early if it overshoots target

    if (index === breakNum) {
      // Look for a matching base score configuration remainder
      for (const [thsBKey, baseConfigs] of thsMap) {
        const realThsB = thsBKey / 10;
        const totalB = realThsB + brB;
        const calcLoss = totalB * bCoeff + brBB * bbCoeff;

        if (Math.abs(calcLoss - targetLoss) < 0.001) {
          for (const base of baseConfigs) {
            solutions.push({
              taps: { great: base.t[0], good: base.t[1], miss: base.t[2] },
              holds: { great: base.h[0], good: base.h[1], miss: base.h[2] },
              slides: { great: base.s[0], good: base.s[1], miss: base.s[2] },
              breaks: {
                highPerfect: counts[0],
                lowPerfect: counts[1],
                highGreat: counts[2],
                midGreat: counts[3],
                lowGreat: counts[4],
                good: counts[5],
                miss: counts[6],
                perfect: counts[7],
              },
            });
            if (solutions.length >= 10) return; // Keep memory bounded
          }
        }
      }
      return;
    }

    // Iterate through choices from lowest to highest loss contribution profiles
    const searchOrder = [7, 0, 1, 2, 3, 4, 5, 6];
    for (const j of searchOrder) {
      const loss = BREAK_LOSSES[j];
      counts[j]++;
      searchBreaks(index + 1, brB + loss.b, brBB + loss.bb, counts);
      counts[j]--;
      if (solutions.length >= 10) return;
    }
  }

  searchBreaks(0, 0, 0, new Array(8).fill(0));
  return solutions;
}

console.time("Execution Time");
const sols = findSolutions(100.9166, 285 + 113, 62, 107, 27);
console.timeEnd("Execution Time");

console.log("Solutions found:", sols.length);
if (sols.length > 0) {
  console.dir(sols, { depth: null });
}


// type NoteJudgments = {
//   taps: { great: number; good: number; miss: number };
//   holds: { great: number; good: number; miss: number };
//   slides: { great: number; good: number; miss: number };
//   breaks: {
//     highPerfect: number;
//     lowPerfect: number;
//     highGreat: number;
//     midGreat: number;
//     lowGreat: number;
//     good: number;
//     miss: number;
//     perfect: number;
//   };
// };

// type Solution = NoteJudgments;

// interface LossContribution {
//   b: number;
//   bb: number;
// }

// const TAP_LOSSES: LossContribution[] = [
//   { b: 0, bb: 0 }, // perfect
//   { b: 0.2, bb: 0 }, // great
//   { b: 0.5, bb: 0 }, // good
//   { b: 1.0, bb: 0 }, // miss
// ];

// const HOLD_LOSSES: LossContribution[] = [
//   { b: 0, bb: 0 }, // perfect
//   { b: 0.4, bb: 0 },
//   { b: 1.0, bb: 0 },
//   { b: 2.0, bb: 0 },
// ];

// const SLIDE_LOSSES: LossContribution[] = [
//   { b: 0, bb: 0 }, // perfect
//   { b: 0.6, bb: 0 },
//   { b: 1.5, bb: 0 },
//   { b: 3.0, bb: 0 },
// ];

// const BREAK_LOSSES: LossContribution[] = [
//   { b: 0, bb: 0.25 }, // high perfect
//   { b: 0, bb: 0.5 },  // low perfect
//   { b: 1, bb: 0.6 },  // high great
//   { b: 2, bb: 0.6 },  // mid great
//   { b: 2.5, bb: 0.6 }, // low great
//   { b: 3, bb: 0.7 },  // good
//   { b: 5, bb: 1.0 },  // miss
//   { b: 0, bb: 0 },    // perfect
// ];

// function calculateTotalPoints(tap: number, hold: number, slide: number, brk: number): number {
//   return 1 * tap + 2 * hold + 3 * slide + 5 * brk;
// }

// function findSolutions(
//   achRate: number,
//   tapNum: number,
//   holdNum: number,
//   slideNum: number,
//   breakNum: number
// ): Solution[] {
//   const targetLoss = 101 - achRate;
//   const totalPoints = calculateTotalPoints(tapNum, holdNum, slideNum, breakNum);
//   if (totalPoints === 0) return [];
//   const b = 100 / totalPoints;
//   const bb = breakNum > 0 ? 1 / breakNum : 0;

//   const solutions: Solution[] = [];

//   // break possibles via recursion (breaks usually fewer)
//   const breakPossibles: Array<{counts: Partial<NoteJudgments['breaks']>, bLoss: number, bbLoss: number}> = [];

//   function recurseBreaks(index: number, currentCounts: Partial<NoteJudgments['breaks']>, currentBL: number, currentBBL: number) {
//     if (index === breakNum) {
//       breakPossibles.push({
//         counts: { ...currentCounts },
//         bLoss: currentBL,
//         bbLoss: currentBBL
//       });
//       return;
//     }
//     for (let j = 0; j < BREAK_LOSSES.length; j++) {
//       const loss = BREAK_LOSSES[j];
//       const newCounts = { ...currentCounts };
//       const keys = ['highPerfect', 'lowPerfect', 'highGreat', 'midGreat', 'lowGreat', 'good', 'miss', 'perfect'] as const;
//       const key = keys[j];
//       newCounts[key] = (newCounts[key] || 0) + 1;
//       recurseBreaks(index + 1, newCounts, currentBL + loss.b, currentBBL + loss.bb);
//     }
//   }

//   recurseBreaks(0, {}, 0, 0);

//   // dp for non-break b loss coeffs (stores one valid count config per possible b total)
//   type BCounts = {
//     great: number;
//     good: number;
//     miss: number;
//   };

//   function getBCountsMap(num: number, losses: LossContribution[]): Map<number, BCounts> {
//     const map = new Map<number, BCounts>();
//     map.set(0, { great: 0, good: 0, miss: 0 });

//     for (let i = 0; i < num; i++) {
//       const newMap = new Map<number, BCounts>();
//       for (const [currB, currCounts] of map) {
//         for (let j = 0; j < losses.length; j++) {
//           const l = losses[j];
//           const newB = currB + l.b;
//           const newC = { ...currCounts };
//           if (j !== 0) { // 0 = perfect
//             const keyIdx = j - 1;
//             const key = ['great', 'good', 'miss'][keyIdx] as keyof BCounts;
//             newC[key] = (newC[key] || 0) + 1;
//           }
//           newMap.set(newB, newC);
//         }
//       }
//       map.clear();
//       for (const [k, v] of newMap) map.set(k, v);
//     }
//     return map;
//   }

//   const tapMap = getBCountsMap(tapNum, TAP_LOSSES);
//   const holdMap = getBCountsMap(holdNum, HOLD_LOSSES);
//   const slideMap = getBCountsMap(slideNum, SLIDE_LOSSES);

//   // combine
//   for (const br of breakPossibles) {
//     const brB = br.bLoss;
//     const brBB = br.bbLoss;
//     for (const [tB, tCounts] of tapMap) {
//       for (const [hB, hCounts] of holdMap) {
//         for (const [sB, sCounts] of slideMap) {
//           const totalB = tB + hB + sB + brB;
//           const totalBB = brBB;
//           const calcLoss = totalB * b + totalBB * bb;
//           if (Math.abs(calcLoss - targetLoss) < 0.001) {
//             const sol: Solution = {
//               taps: { ...tCounts },
//               holds: { ...hCounts },
//               slides: { ...sCounts },
//               breaks: { ...(br.counts as any) }
//             };
//             // ensure all break keys
//             const breakKeys = ['highPerfect', 'lowPerfect', 'highGreat', 'midGreat', 'lowGreat', 'good', 'miss', 'perfect'] as const;
//             for (const k of breakKeys) {
//               if (!(k in sol.breaks)) {
//                 (sol.breaks as any)[k] = 0;
//               }
//             }
//             solutions.push(sol);
//           }
//         }
//       }
//     }
//   }

//   return solutions;
// }

// const sols = findSolutions(100.9166, 285+113, 62, 107, 27);
// // const sols = findSolutions(100.75, 10, 0, 0, 1);
// console.log(sols); // will include the matching break config