## how does codeforces calc penalty

On Codeforces, how penalty is calculated <mark>depends entirely on the<span> </span><strong>format of the contest</strong></mark>. Codeforces primarily uses two different scoring systems: the **Codeforces format** (used for standard Div. 1 and Div. 2 rounds) and the **ICPC format** (used for Educational, Div. 3, and Div. 4 rounds). [link](https://codeforces.com/topic/92092/diff/en2/en3)

Here is exactly how both systems calculate penalty:

***

### 1. Codeforces Format (Div. 1 & Div. 2)

In standard rounds, you don't accumulate a "time penalty." Instead, your rank is determined by your **total points**. Every problem starts with a maximum point value (e.g., 500, 1000) that decays as the clock ticks. [link](https://codeforces.com/blog/entry/456)

- **Time Decay:** Every minute that passes from the start of the contest decreases the problem's value by

**𝑿𝟐𝟓𝟎**

**points per minute** (where X is the initial value). For a 500-point problem, it loses 2 points every minute. [link](https://www.quora.com/Is-there-a-penalty-in-Codeforces-challenges-for-the-wrong-answer-like-in-CodeChef-cook-off-If-yes-then-how-much)

- **Wrong Submissions:** For **every incorrect attempt** before your code passes, a flat **50-point penalty** is deducted from that problem's final value. [link](https://codeforces.com/blog/entry/4088)
- **Unsolved Problems:** If you never solve a problem, you get **0 points** for it. Any wrong submissions made on an unsolved problem **do not** subtract points from the rest of your score. [link](https://codeforces.com/blog/entry/107837)
- **The Floor:** No matter how late you solve a problem or how many wrong attempts you make, the points you earn cannot drop below **30% of the problem's initial value**. [link](https://codeforces.com/blog/entry/456)

**The Formula:**

PointsEarned=max0.3×𝑋,𝑋−(TimeinMinutes×𝑋250)−(50×WrongAttempts)

***

### 2. ICPC Format (Educational, Div. 3, & Div. 4)

In these rounds, the scoreboard prioritizes the **number of solved problems first**. Ties are broken by the **lowest total penalty**. [link](https://codeforces.com/blog/entry/133094?locale=ru)

- **Time Accumulated:** The minute mark at which you successfully solve a problem is added directly to your penalty.
- **Wrong Submissions:** For **every incorrect attempt** before your successful submission, a **10-minute penalty** is added. _(Note: Real-life ICPC contests use 20 minutes, but Codeforces uses 10 because the rounds are shorter)._
- **Unsolved Problems:** Just like the standard format, if you do not eventually get an "Accepted" verdict on a problem, **zero penalty** is added for that problem, regardless of how many times you failed it.
- **Submissions after AC:** Any submissions made _after_ you have already solved a problem are completely ignored and do not penalize you. [link](https://codeforces.com/blog/entry/133094)

**The Formula per Solved Problem:**

Penalty=𝑡+10𝑤

_(Where t is the minute of your first accepted solution, and w is the number of incorrect submissions before it)._ [link](https://codeforces.com/blog/entry/133094)

***

### Comparison Overview

| Feature                        | Codeforces Format (Div. 1 / Div. 2) | ICPC Format (Edu / Div. 3 / Div. 4)         |
| ------------------------------ | ----------------------------------- | ------------------------------------------- |
| **Primary Metric**             | **Highest total points**            | **Most problems solved**                    |
| **Tie-Breaker**                | Time of the last scoring submission | **Lowest penalty value**                    |
| **Cost of 1 Wrong Attempt**    | **-50 points** from that problem    | **+10 minutes** to your penalty             |
| **Cost of 1 Minute Passing**   | Decreases problem value by Max250   | Adds **1 minute** to your penalty if solved |
| **Penalty on Unsolved Tasks?** | No                                  | No                                          |

Are you currently preparing for an upcoming round, or trying to understand your placement in a **specific contest's leaderboard**? Let me know, and I can help you break down the math or look at how **hacking points** factor into the equation.

- [link](https://codeforces.com/blog/entry/133094)\
  Codeforces\
  Everything about Codeforces scoring system\
  The penalty can be calculated as the sum of the following formula for each solved problem. first 'Accepted' submission is t and th...
- [link](https://codeforces.com/blog/entry/4088)\
  Codeforces\
  Codeforces Contest Rules - Codeforces\
  Scoring decreases per minute and incurs a 50-point penalty per failed attempt. Hacks: Locking a pre-solved problem allows viewing ...
- [link](https://codeforces.com/blog/entry/133094?locale=ru)\
  Codeforces\
  Everything about Codeforces scoring system\
  The number of solved problem is always the higher priority. The penalty can be calculated as the sum of the following formula for ...

Show all

## why

These two different penalty systems exist because they are designed to **test and reward different competitive programming skills** depending on the difficulty and goals of the contest.

Codeforces deliberately splits its rounds to mimic real-world competition structures and to keep users engaged in different ways. Here is why each specific format is used:

### 1. Why the Codeforces Format is used (Div. 1 & Div. 2)

This format is designed to be **dynamic, aggressive, and highly strategic**.

- **To Reward Speed on Hard Problems:** In this format, you cannot sit on a problem for an hour, write a flawless solution on your first try, and expect to beat someone who solved it in 15 minutes. It forces you to think and code fast because every passing minute costs you points.
- **To Create High-Stakes Strategy (Hacking):** Because points decay over time, Codeforces introduced the "Lock" feature. If you think your solution is perfect, you can lock it. This prevents you from resubmitting but allows you to view and "hack" (find bugs in) other competitors' code for an extra **+100 points**.
- **To Avoid Gridlocked Scoreboards:** Because points decrease by the minute, it is virtually impossible for two competitors to finish with the exact same score. This creates a highly fluid, exciting leaderboard where every second matters.

### 2. Why the ICPC Format is used (Educational, Div. 3 & Div. 4)

This format is designed to be **accessible, educational, and realistic to offline tournaments**.

- **To Mimic the Real ICPC:** The International Collegiate Programming Contest (ICPC) is the most prestigious university-level programming tournament in the world. Codeforces uses this format to help students practice exactly how real-life regional and world finals are scored.
- **To Reduce Stress on Beginners:** In Div. 3 or Div. 4, users are often still learning how to debug. If points decayed by the minute, a beginner who spends 50 minutes carefully finding a bug would get almost no reward. The ICPC format ensures that **a solve is a solve**—whether you find the answer in 2 minutes or 50 minutes, you still get full credit for the problem.
- **To Emphasize Accuracy Over Pure Speed:** While a wrong attempt in a Div. 1 round costs you a flat 50 points, a wrong attempt in an ICPC round penalized you by 10 minutes _compounded_ by when you solve it. It forces newer programmers to value writing correct code over rushing to hit submit.

Are you trying to decide **which type of contest** fits your current skill level better, or do you want to dive into how the **rating changes** themselves are calculated after these penalties are applied?

## does icpc format penalize time as well

<mark><strong><span>Yes, the ICPC format absolutely penalizes time</span></strong></mark>, but it does so in a way that functions as a **tie-breaker**, rather than a direct reduction of your score.

In the ICPC format, your primary score is simply the **total number of problems solved**. Time only penalizes you if you are tied with another competitor who solved the exact same number of problems.

Here is exactly how time acts as a penalty in this format:

### 1. The Clock is Always Ticking

Every single minute that passes from the start of the contest counts against you. If you solve Problem A at minute 15, you get **15 penalty points**. If you solve Problem B at minute 40, you get **40 penalty points**.

- Your total time penalty is cumulative. In this scenario, your penalty is 15 + 40 = 55.

### 2. Time Multiplies the Cost of Mistakes

If you fail a submission, you get a **10-minute penalty**, but that penalty is only added to your score _if and when you eventually solve the problem_. This means delaying a solution while accumulating wrong attempts makes your time penalty balloon rapidly.

### Direct Comparison: Codeforces vs. ICPC Time Penalties

To see how differently time affects you, look at this scenario: **You solve a problem at minute 60 instead of minute 10.**

| Feature                              | Codeforces Format (Div. 1 / Div. 2)                                                                                    | ICPC Format (Div. 3 / Div. 4 / Edu)                                                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **How Time Hurts You**               | It **directly lowers your point score**, meaning you drop below people who solved easier problems faster.              | It **increases your penalty minutes**, meaning you lose ties to anyone else with the same number of solves.                                      |
| **The Result of a 50-Min Delay**     | You lose roughly **100 to 200 points** from the problem's maximum value.                                               | You gain **50 extra penalty minutes** on your overall score.                                                                                     |
| **Can you override a time penalty?** | **Yes.** If you solve a harder problem, your point total will easily bypass someone who was faster on easier problems. | **Yes.** If you solve **1 more problem** than your competitor, your time penalty is completely ignored. You rank higher than them automatically. |

### Summary

In ICPC, **speed matters, but solving more problems matters most**. If Competitor A solves 4 problems in the very last minute of the contest (accumulating huge time penalties), they will still rank higher than Competitor B who solved 3 problems perfectly in the first 15 minutes.

Are you trying to figure out a strategy for an upcoming Div. 3 or Educational round? I can share tips on **how to manage your time** and when you should **abandon a buggy solution** under this format.

