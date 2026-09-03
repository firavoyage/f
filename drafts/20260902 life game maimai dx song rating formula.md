# maimai dx song rating formula

1:09 AM

In **maimai DX**, your total player rating is determined by your **Best 50 scores**, which is a combination of your top 15 songs from the current game version and your top 35 songs from previous versions. [link](https://argw.miraheze.org/wiki/Maimai%5FDX)

The calculation for an **individual song rating** depends on three metrics: the song's hidden internal level, your achievement percentage, and a rank coefficient. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

### The Song Rating Formula

SongRating=InternalLevel×Achievement%×RankFactor

_The final value is always **rounded down** to the nearest whole integer._ [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

***

### Formula Breakdown

#### 1. Internal Level (Chart Constant)

Every song has a visible level (e.g., 13 or 13+), but behind the scenes, it possesses a decimal **Internal Level**: [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

- **Level X:** Ranges from `X.0` to `X.5`.
- **Level X+:** Ranges from `X.6` to `X.9`.
- _Example:_ A song labeled as Level 13+ might actually have an internal constant of `13.8`. You can look these up on community database sites like DXRating. [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

#### 2. Achievement %

This is your standard in-game accuracy score, capped at a maximum of **101.0000%** (which includes the 100% base score + 1% bonus for Critical Perfect Breaks). In the formula, you use the exact decimal percentage capped at 100.5000% for the multiplier (e.g., 99.5% is input as `99.5%` or `0.995`). [link](https://www.youtube.com/watch?v=kvavTX-RKh8\&t=258)

#### 3. Rank Factor (Coefficient Table)

The game applies a specific multiplier based on the definitive rank tier you achieve: [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

| Achieved Rank | Achievement Range     | Rank Factor (Multiplier) |
| ------------- | --------------------- | ------------------------ |
| **SSS+**      | 100.5000% or higher   | **22.4**                 |
| **SSS**       | 100.0000% – 100.4999% | **21.6**                 |
| **SS+**       | 99.5000% – 99.9999%   | **21.1**                 |
| **SS**        | 99.0000% – 99.4999%   | **20.8**                 |
| **S+**        | 98.0000% – 98.9999%   | **20.3**                 |
| **S**         | 97.0000% – 97.9999%   | **20.0**                 |
| **AAA**       | 94.0000% – 96.9999%   | **16.8**                 |
| **AA**        | 90.0000% – 93.9999%   | **15.2**                 |
| **A**         | 80.0000% – 89.9999%   | **13.6**                 |

_(Note: Ranks below A scale downwards from 12.0 to 5.0)._

***

### Calculation Example

If you score **100.2500% (SSS)** on a song with an internal constant of **14.2**:

1. **Identify the Rank Factor:** Since 100.2500% falls into the SSS tier, your Rank Factor is **21.6**.
2. **Apply the Formula:**

14.2×100.25%×21.6=307.4472
3\. **Round Down:** The song gives you **307 rating points**.

### Strategy Tip

Because the **Rank Factor** jumps aggressively at tier boundaries (like jumping from 21.6 to 22.4 when hitting SSS+), it is significantly easier to farm rating points by hunting **SSS+ scores** on slightly lower level charts than trying to scratch out an S or SS rank on a brutally hard chart. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

If you would like to map out your next rating milestone, tell me your **current total rating** or the **average level** you can consistently SSS/SSS+. I can suggest what target scores you need next!

- [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)\
  Reddit·r/maimai\
  How does the Rank Factor Table come into the rating calculation\
  Comments Section \* Rating wise, as long as 2 charts have the same internal difficulty, it will weight the same no matter the diffi...
- [link](https://myjian.github.io/mai-tools/rating-visualizer/)\
  WordPress.com\
  maimai DX Rating Lookup Table & Visualization\
  Level, Rank, Achv, Rating. 10.7 (10+), SSS+, 100.5000%, 240. 11.1 (11), SSS, 100.1002%, 240 ... Rank, Achievement, Factor, Rating ...
- [link](https://www.youtube.com/watch?v=kvavTX-RKh8\&t=258)\
  YouTube·Saow\
  The PRO GUIDE to Help you Improve in maimai\
  you lose from each note type allowing you to see where specifically you mess up and how to fix it for next time on the topic of sc...\
  1m

Show all

## all rank factors

In modern versions of **maimai DX** (from _maimai DX Splash PLUS_ up through the current _maimai DX CiRCLE_ version), the rank factors (coefficients) have been adjusted from the original Gen 1 values.

The **complete list of rank factors** for every achievable tier in the game is categorized below:

### 🌟 High Ranks (S to SSS+)

These are the target tiers for building a high player rating. Note that for the **SSS+** multiplier, your achievement percentage is capped at **100.5000%** in the rating calculation formula, even if you score higher. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

| Achieved Rank | Achievement Range     | Rank Factor (Coefficient) |
| ------------- | --------------------- | ------------------------- |
| **SSS+**      | 100.5000% or higher   | **22.4**                  |
| **SSS**       | 100.0000% – 100.4999% | **21.6**                  |
| **SS+**       | 99.5000% – 99.9999%   | **21.1**                  |
| **SS**        | 99.0000% – 99.4999%   | **20.8**                  |
| **S+**        | 98.0000% – 98.9999%   | **20.3**                  |
| **S**         | 97.0000% – 97.9999%   | **20.0**                  |

***

### 📉 Mid-to-Low Ranks (D to AAA)

While these ranks provide significantly less rating, their precise coefficients dictate your score if you are struggling with a difficult chart:

| Achieved Rank | Achievement Range   | Rank Factor (Coefficient) |
| ------------- | ------------------- | ------------------------- |
| **AAA**       | 94.0000% – 96.9999% | **16.8**                  |
| **AA**        | 90.0000% – 93.9999% | **15.2**                  |
| **A**         | 80.0000% – 89.9999% | **13.6**                  |
| **BBB**       | 75.0000% – 79.9999% | **12.0**                  |
| **BB**        | 70.0000% – 74.9999% | **11.2**                  |
| **B**         | 60.0000% – 69.9999% | **9.6**                   |
| **C**         | 50.0000% – 59.9999% | **8.0**                   |
| **D**         | 0.0000% – 49.9999%  | **4.0**                   |

***

### 🦘 The "Rank Jump" Breakdown

The formula intentionally heavily rewards accuracy. If you look closely at the math, moving up a rank tier gives you an immediate boost because the coefficient itself jumps: [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

- Going from **S → S+** increases the factor by **0.3**
- Going from **S+ → SS** increases the factor by **0.5**
- Going from **SS → SS+** increases the factor by **0.3**
- Going from **SS+ → SSS** increases the factor by **0.5**
- Going from **SSS → SSS+** increases the factor by a massive **0.8**

_Note: If you play on the latest **maimai DX CiRCLE** version, achieving an **All Perfect (AP)** or **All Perfect+ (AP+)** gives a flat **+1 point bonus** directly to that individual chart's final rating value._ [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

Would you like to calculate the exact rating value for a **specific level and achievement score**, or look at how **Dan (段位) plate bonuses** affect your total rating? [link](https://argw.miraheze.org/wiki/Maimai%5FDX)

- [link](https://silentblue.remywiki.com/maimai%5FDX:Rating)\
  RemyWiki\
  maimai DX:Rating - SilentBlue - RemyWiki\
  Mar 25, 2026 — Rating, officially DX Rating (でらっくす RATING), is a number that shows the skill of a player, similar to jubility in jubeat, Volforce...
- [link](https://argw.miraheze.org/wiki/Maimai%5FDX)\
  Miraheze\
  maimai DX - All Rhythm Game Wiki\
  Aug 17, 2024 — The Rating system has been overhauled. The new Rating system is called Deluxe Rating/DX Rating (でらっくすRATING). It works more or les...
- [link](https://zh.moegirl.org.cn/en/Maimai%E7%B3%BB%E5%88%97)\
  萌娘百科\
  maimai - Moegirlpedia - 萌娘百科\
  Aug 23, 2026 — The DX Rating value of a chart is calculated using the following formula and rounded down: "DX Rating Value = Chart Constant \* Ach...

Show all

# why is achievement rate capped at 100.5 in the maimai dx song rating formula

In the [maimai DX rating formula](https://silentblue.remywiki.com/maimai%5FDX:Rating), the achievement rate used for calculation is capped at **100.5000%** because <mark>it serves as the threshold for the highest tier multiplier in the game's ranking system, known as<span> </span><strong>SSS+</strong></mark>. [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

### The Core Reasons

- **Standardizing the Highest Rank (SSS+):** The game maps rating multipliers to specific rank boundaries. The highest rank bracket is SSS+, which spans from 100.5000% to the absolute maximum possible score of 101.0000%. SEGA chose to value all SSS+ plays equally within the main rating formula. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)
- **Reducing "Break Note" RNG Bias:** While a standard perfect run nets 100.0000% base achievement, the extra 1.0000% comes from getting "Critical Perfect" judgments on **Break Notes**. If the formula scaled all the way to 101.0000%, songs with an unusually high density of Break Notes would reward disproportionately more rating than charts without them. Capping it at 100.5000% limits this scoring variance. [link](https://www.youtube.com/watch?v=kvavTX-RKh8\&t=258)
- **Alignment with SEGA's Rhythm Game Ecosystem:** This system closely mirrors the rating and ranking logic used in SEGA’s other major arcade rhythm titles like _CHUNITHM_ and _Ongeki_, creating parity across their network ecosystem.

### How the Cap Fits the Formula

The single-song rating is calculated using this formula:

SingleSongRating=ChartConstant×AchievementRate(Cappedat1.005)×RankCoefficient

The tier breakdown demonstrates how the cap functions at the top level:

| Rank     | Achievement Range     | Capped Value Used          | Rank Coefficient |
| -------- | --------------------- | -------------------------- | ---------------- |
| **SSS+** | 100.5000% – 101.0000% | **1.0050**                 | **22.4**         |
| **SSS**  | 100.0000% – 100.4999% | Actual Score (e.g., 1.002) | 21.6             |
| **SS+**  | 99.5000% – 99.9999%   | Actual Score               | 21.1             |
| **SS**   | 99.0000% – 99.4999%   | Actual Score               | 20.8             |

Once you cross 100.5000%, the achievement rate locks at `1.0050` and your coefficient locks at `22.4`. Therefore, a 100.5001% play and a perfect 101.0000% (Theoretical All Perfect+) grant the exact same baseline rating points. [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

_(Note: In newer versions like maimai DX CiRCLE onwards, achieving a flawless **All Perfect (AP)** will grant a flat, cosmetic **+1 rating** to that specific chart score, but the core formula math remains tied to the 100.5% cap)._ [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

Would you like to look at the **exact rating output** for a specific song level, or calculate how many **SSS+ scores** you need to hit your next total rating milestone?

- [link](https://note.com/yumenikker/n/n5bf533a21f0c?hl=en)\
  note·ヒロッピ\
  \[maimai Deluxe] What is a 16000 rating like? \[Achievement ...\
  Jan 30, 2025 — About the calculation of the single-song rating value ... Regarding the achievement rate (ratio), 100.5000% (1.005) is the maximum...
- [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)\
  Reddit\
  How does the Rank Factor Table come into the rating calculation\
  Dec 20, 2022 — Rating wise, as long as 2 charts have the same internal difficulty, it will weight the same no matter the difficulty (Expert / Mas...
- [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)\
  Reddit·r/maimai\
  What are ratings and how do they work? : r/maimai - Reddit\
  Dec 27, 2025 — The way individual chart rating is calculated is by multiplying a level multiplier, the achievement you get on that chart, and a "

Show all

## why

The cap remains at **100.5000%** because SEGA wants to reward **flawless accuracy on regular notes** while preventing the rating system from becoming a **gamble on "Critical Perfects."**

Here is why that specific number matters:

- **100% is not actually perfect:** In _maimai DX_, hitting every single note with a standard "Perfect" judgment gives you exactly **100.0000%**.
- **The "Bonus" 1%:** The extra 1.0000% (bringing the theoretical maximum to 101.0000%) can _only_ be earned by getting a **Critical Perfect** (a tighter timing window) on **Break Notes**.
- **Why 100.5%?** It represents the halfway point of that bonus. To reach 100.5000%, a player must have near-flawless accuracy across the entire song and hit a reasonable majority of their Critical Perfects on Break Notes.

If SEGA didn't cap it at 100.5%, the rating system would break in two ways:

1. **Song Imbalance:** Songs with a massive amount of Break Notes would become "rating farms," giving players massive rating boosts just because of the chart structure. Songs with few Break Notes would be completely ignored by competitive players.
2. **Extreme Stress:** Players would have to grind for literal perfection (101.0000% Theoretical All Perfect) to get the best rating. Capping it at 100.5% creates a buffer, allowing you to make a few minor timing mistakes on Break Notes while still walking away with the maximum possible rating for that chart.

Are you trying to optimize your current **rating grind**, or are you curious about how **other SEGA rhythm games** handle their scoring limits?

# maimai dx song rating formula

In **maimai DX**, your total player rating is calculated by <mark>summing the individual rating values of your<span> </span><strong>top 50 song performances</strong></mark>.

The total rating is split into two pools:

- **Top 15 Current Songs:** Your highest-rated performances on tracks released in the active game version.
- **Top 35 Old Songs:** Your highest-rated performances on tracks from all prior versions.

***

### The Single-Chart Rating Formula

The individual rating value earned for a single song play is calculated using the following formula: [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

SongRating=⌊ChartConstant×min(AchievementRate,100.5%)×RankFactor⌋

_(Note: The result is truncated/rounded down to the nearest whole integer.)_ [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

From the **maimai DX CiRCLE** version onward, achieving an **All Perfect (AP)** or **All Perfect+ (AP+)** adds a flat **+1 bonus** directly to that chart's final rating value. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

***

### Formula Variables Broken Down

#### 1. Chart Constant (Internal Level)

This is the hidden, exact decimal difficulty assigned to a song. The number displayed in-game is just a generalized label. For example: [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

- A song labeled as **Level 13** can have an internal chart constant anywhere from **13.0 to 13.6**.
- A song labeled as **Level 13+** ranges from **13.7 to 13.9**. [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

#### 2. Achievement Rate

This is your final accuracy percentage shown at the clear screen (e.g., 99.5000% or 100.5000%). For calculation purposes, this value caps out at **100.5000%** (even if you score a theoretical maximum of 101.0000% via Break notes). [link](https://www.youtube.com/watch?v=kvavTX-RKh8\&t=258)

#### 3. Rank Factor (Multiplier Table)

The Rank Factor is a tiered multiplier determined strictly by your final achievement grade. Passing a threshold results in a massive multiplier spike: [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

| Achievement Grade | Minimum % Required | Rank Factor Multiplier |
| ----------------- | ------------------ | ---------------------- |
| **SSS+**          | 100.5000%          | **22.4**               |
| **SSS**           | 100.0000%          | **21.6**               |
| **SS+**           | 99.5000%           | **21.1**               |
| **SS**            | 99.0000%           | **20.8**               |
| **S+**            | 98.0000%           | **20.3**               |
| **S**             | 97.0000%           | **20.0**               |
| **AAA**           | 94.0000%           | **16.8**               |
| **AA**            | 90.0000%           | **16.0**               |
| **A**             | 80.0000%           | **13.6**               |

***

### Step-by-Step Calculation Example

If you achieve an **SSS (100.0200%)** on a Master chart with an internal **Chart Constant of 14.2**: [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

1. **Identify variables:** Chart Constant = `14.2`, Achievement Rate = `100.0200%` (or `1.0002`), Rank Factor = `21.6`.
2. **Multiply:** 14.2 × 1.0002 × 21.6 = 306.7453
3. **Truncate:** Drop the decimals to get a final value of **306 Rating Points**. [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

If you would like to estimate your profile's progression, let me know your **current total rating** or **what tier of songs (e.g., Level 13 SSS)** you regularly clear so we can map out a target!

- [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)\
  Reddit·r/maimai\
  How does the Rank Factor Table come into the rating calculation\
  Dec 20, 2022 — Comments Section \* Rating wise, as long as 2 charts have the same internal difficulty, it will weight the same no matter the diffi...
- [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)\
  Reddit·r/maimai\
  What are ratings and how do they work? : r/maimai - Reddit\
  Dec 27, 2025 — The way individual chart rating is calculated is by multiplying a level multiplier, the achievement you get on that chart, and a "
- [link](https://www.reddit.com/r/maimai/comments/zb1vol/can%5Fanyone%5Ftell%5Fme%5Fhow%5Fdoes%5Fthe%5Frating%5Fpoints%5Fgo/)\
  Reddit·r/maimai\
  Can anyone tell me how does the rating points go up : r/maimai\
  Dec 3, 2022 — Comments Section \* mug1wara26. • 4y ago. each song has an individual rating value that is calculated as Song level \* Achievement p...

Show all

# maimai dx single chart rating formula

The single-chart DX rating value for an individual play in **maimai DX** is calculated using a straightforward math formula based on your accuracy, the hidden difficulty decimal, and a rank multiplier. [link](https://argw.miraheze.org/wiki/Maimai%5FDX)

### The Single Chart Rating Formula

SingleChartRating=⌊ChartConstant×AchievementRate×RankCoefficient⌋+APBonus

- **Chart Constant (譜面定数):** The hidden internal difficulty of a song. For instance, a song listed visually as Level 13+ can have an internal value anywhere between 13.7 and 13.9. [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)
- **Achievement Rate:** Your final gameplay accuracy capped at **100.0000%** for the core calculation, expressed as a raw multiplier (e.g., a 99.5000% score uses `0.995`). _Note: Even if you score up to 101.0000% via Break notes, the percentage used in this formula stops scaling past 100.0000%._ [link](https://argw.miraheze.org/wiki/Maimai%5FDX)
- **Rank Coefficient:** A steep multiplier tier determined strictly by the badge rank achieved during that play. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)
- **AP Bonus:** Modern versions (from _maimai DX CiRCLE_ onwards) award a flat **+1 point bonus** directly to the chart rating if you achieve an **All Perfect (AP)** or higher. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

***

### Rank Coefficient Table

Because the rank coefficient jumps dramatically between specific break points, achieving a higher rank badge matters significantly more than grinding fractional percentages within a lower tier. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

| Rank Badge | Achievement Range      | Rank Coefficient |
| ---------- | ---------------------- | ---------------- |
| **SSS+**   | 100.5000% to 101.0000% | **22.4**         |
| **SSS**    | 100.0000% to 100.4999% | **21.6**         |
| **SS+**    | 99.5000% to 99.9999%   | **21.1**         |
| **SS**     | 99.0000% to 99.4999%   | **20.8**         |
| **S+**     | 98.0000% to 98.9999%   | **20.3**         |
| **S**      | 97.0000% to 97.9999%   | **20.0**         |
| **AAA**    | 94.0000% to 96.9999%   | **16.8**         |
| **AA**     | 90.0000% to 93.9999%   | **13.6**         |
| **A**      | 80.0000% to 89.9999%   | **10.5**         |

_(Ranks below A use lower single-digit coefficients down to 4.0 for a D rank.)_

***

### Calculation Example

If you score **99.7500% (SS+)** on a Master chart with an internal **Chart Constant of 14.2**:

1. Identify the coefficient for **SS+** → **21.1**.
2. Cap your achievement rate to a max of 100% → **99.75%** (`0.9975`).
3. Multiply the values: 14.2 × 0.9975 × 21.1 = 298.8715
4. Round down to the nearest whole integer → **298 Rating Points**.

To easily find specific song constants and model your profile data, you can use community resources like the [maimai DX Rating Lookup Table & Visualizer](https://myjian.github.io/mai-tools/rating-visualizer/) or track songs on DXRating.net.

If you'd like, let me know:

- Your **current total player rating**
- The **difficulty bracket** you are targeting (e.g., Level 12, 13, 14)
- Whether you prefer pushing for **higher accuracy (SSS+)** or **harder songs (S/SS)**

I can calculate the exact targets you need to break into your next rating border color!

- [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)\
  Reddit·r/maimai\
  How does the Rank Factor Table come into the rating calculation\
  Dec 20, 2022 — Comments Section \* Rating wise, as long as 2 charts have the same internal difficulty, it will weight the same no matter the diffi...
- [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)\
  Reddit·r/maimai\
  What are ratings and how do they work? : r/maimai - Reddit\
  Dec 27, 2025 — The way individual chart rating is calculated is by multiplying a level multiplier, the achievement you get on that chart, and a "
- [link](https://argw.miraheze.org/wiki/Maimai%5FDX)\
  Miraheze\
  maimai DX - All Rhythm Game Wiki\
  Aug 17, 2024 — The rough maximum rating in this system is about 10500, including grade bonuses. The formula for the rating of a particular play i...

Show all

# all maimai dx rank factors

In **maimai DX**, the **Rank Factor** (also called the Rank Multiplier) is a hidden value used directly in the formula to calculate your individual chart rating. [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

The exact rating you get from a play is determined by multiplying the internal **Chart Constant** by your achievement percentage and the corresponding **Rank Factor**. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

### Official maimai DX Rank Factors

Below is the complete, standard rank factor table utilized across modern versions of the game:

| Achievement % Range     | Achieved Rank | Rank Factor Multiplier |
| ----------------------- | ------------- | ---------------------- |
| **100.5000% or higher** | **SSS+**      | **22.4**               |
| 100.0000% – 100.4999%   | SSS           | 21.6                   |
| 99.5000% – 99.9999%     | SS+           | 21.1                   |
| 99.0000% – 99.4999%     | SS            | 20.8                   |
| 98.0000% – 98.9999%     | S+            | 20.3                   |
| 97.0000% – 97.9999%     | S             | 20.0                   |
| 94.0000% – 96.9999%     | AAA           | 16.8                   |
| 90.0000% – 93.9999%     | AA            | 15.2                   |
| 80.0000% – 89.9999%     | A             | 13.6                   |
| 75.0000% – 79.9999%     | BBB           | 12.0                   |
| 70.0000% – 74.9999%     | BB            | 11.2                   |
| 60.0000% – 69.9999%     | B             | 9.6                    |
| 50.0000% – 59.9999%     | C             | 8.0                    |
| 0.0000% – 49.9999%      | D             | 5.0                    |

### Critical Takeaways for Rating Grinding

- **The "S" and "SSS+" Spikes:** Notice the dramatic jump in the factor from AAA (16.8) to S (20.0), and from SSS (21.6) to SSS+ (22.4). Pushing your score over these exact thresholds provides a massive, non-linear boost to your total rating. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)
- **Accuracy Over Pure Difficulty:** Because of how heavily weighted higher rank factors are, getting an **SSS+** on a lower-level chart will almost always yield more rating points than just scraping an **S** or **SS** on a much harder song. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

Would you like help calculating the exact **individual chart rating** for a specific song you are practicing? Tell me the **internal chart constant** and your **target achievement %** to see how much it will boost your profile! [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)

- [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)\
  Reddit·r/maimai\
  How does the Rank Factor Table come into the rating calculation\
  Dec 20, 2022 — Comments Section \* Rating wise, as long as 2 charts have the same internal difficulty, it will weight the same no matter the diffi...
- [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)\
  Reddit·r/maimai\
  What are ratings and how do they work? : r/maimai - Reddit\
  Dec 27, 2025 — The way individual chart rating is calculated is by multiplying a level multiplier, the achievement you get on that chart, and a "
- [link](https://silentblue.remywiki.com/maimai%5FDX:Rating)\
  RemyWiki\
  maimai DX:Rating - SilentBlue - RemyWiki\
  Mar 25, 2026 — Gen 3. Used in maimai でらっくす Splash PLUS to maimai でらっくす PRiSM PLUS. 段位 rating is no longer a part of the total rating. Friend Matc...

Show all

# kiwami meaning

## kiwami meaning

In Japanese, **Kiwami (極 or 極み)** primarily means **"extreme," "ultimate," "pinnacle,"** or **"the height"** of something. It translates to the absolute furthest limit or peak condition an object, skill, or concept can reach. [link](https://www.guocotower.com/happening/7-mouth-watering-facts-about-kiwami/)

Depending on the context, the word takes on a few specific meanings:

### 🎮 In Video Games (_Like a Dragon / Yakuza_)

If you are asking because of Sega's video game franchise, **Kiwami** means **"Extreme"**. [link](https://www.reddit.com/r/yakuzagames/comments/9ganuv/stupid%5Fquestion%5Fbut%5Fwhy%5Fare%5Fthe%5Fremakes%5Fcalled/)

- **The Remakes:** Games like _Yakuza Kiwami_ and _Yakuza Kiwami 2_ use the word to signal that they are the ultimate, fully upgraded, and modernized versions of the original PlayStation 2 entries. [link](https://www.reddit.com/r/yakuzagames/comments/9ganuv/stupid%5Fquestion%5Fbut%5Fwhy%5Fare%5Fthe%5Fremakes%5Fcalled/)
- **Evolution of the Term:** Series developers at Ryu Ga Gotoku Studio noted that for upcoming remakes like _Yakuza Kiwami 3_, the term has evolved from just a "technical upgrade" to mean **"redefining and reinterpreting"** a classic game's story and legacy. [link](https://automaton-media.com/en/news/yakuza-kiwami-3-fundamentally-changes-the-meaning-of-the-term-kiwami-developers-say-its-no-longer-just-a-technical-upgrade/)
- **Gameplay:** In-game combat features "Kiwami Moves," which translate to English as "Essence" moves—representing the ultimate or peak execution of a martial arts technique. [link](https://www.reddit.com/r/yakuzagames/comments/9ganuv/stupid%5Fquestion%5Fbut%5Fwhy%5Fare%5Fthe%5Fremakes%5Fcalled/)

### 🥩 In Culinary & Craft Culture

When used by Japanese businesses or restaurants, it indicates **supreme quality** or **outstanding excellence**. [link](https://www.facebook.com/stockyardbeef/posts/called-kiwami-meaning-outstanding-in-excellence-in-japanese-our-highest-marble-s/1331996555621356/)

- **Kiwami Wagyu:** Represents beef of the highest marbling score, indicating the pinnacle of luxury dining.
- **Artisan Goods:** Often tagged onto premium products (like _Kiwami Ramen_ or craft tools) to showcase that the master creator used their absolute peak skillset to produce it. [link](https://www.facebook.com/stockyardbeef/posts/called-kiwami-meaning-outstanding-in-excellence-in-japanese-our-highest-marble-s/1331996555621356/)

### ✍️ Linguistic Breakdown

- **The Kanji:** It is written with the single character **極**.
- **Alternative Pronunciations:** When combined with other characters, this same kanji can be read as _kyoku_ or _goku_ (as in _Gokudo_, another word for Yakuza). [link](https://www.reddit.com/r/yakuzagames/comments/7pijc4/kiwami%5Fjapanese%5Flettering/)

If you are trying to understand a specific phrase or came across this word in a different context, let me know! I can provide a more tailored explanation.

- [link](https://www.reddit.com/r/yakuzagames/comments/9ganuv/stupid%5Fquestion%5Fbut%5Fwhy%5Fare%5Fthe%5Fremakes%5Fcalled/)\
  Reddit\
  Stupid question, but why are the remakes called Kiwami?\
  Sep 16, 2018 — The word \*Kiwami\* means "extreme". It's a marketing tag for the remakes of the earlier, PS3 Y1&2 HD Collection. The kanji for \*Kiw...
- [link](https://www.reddit.com/r/yakuzagames/comments/7pijc4/kiwami%5Fjapanese%5Flettering/)\
  Reddit\
  Kiwami Japanese lettering : r/yakuzagames\
  Jan 10, 2018 — The kanji symbol for \*Kiwami\* is 極. The first kanji can be pronounced as "kiwami" and means something like "extreme". The reading ...
- [link](https://www.reddit.com/r/yakuzagames/comments/o76tbr/can%5Fanyone%5Fplease%5Ftell%5Fme%5Fwhat%5Fdo%5Fthese%5Ftwo/)\
  Reddit\
  Can anyone please tell me what do these two japanese words mean? Game : Yakuza kiwami\
  Jun 24, 2021 — The word \*Kiwami\* (極) has multiple meanings: \* \*\*Extremity\*\* \* \*\*Peak\*\* \* \*\*To carry to the end\*\* \* \*\*Acme\*\* \* \*\*Height\*\* The same...

Show all

## maimai

**maimai** is a wildly popular, arcade rhythm game series developed and published by Sega.

It is instantly recognizable because the arcade cabinet looks exactly like a **futuristic, giant front-loading washing machine**.

### 🎮 Gameplay Mechanics

Players interact with the game using two main input types to match the beat of the music:

- **The Touch Screen:** A circular touchscreen in the center where you tap, hold, or slide your hands across glowing paths.
- **The Outer Buttons:** A ring of eight physical buttons surrounding the screen, which are often smashed rapidly during high-intensity songs.

Because top-level gameplay requires fast, sweeping hand movements across the glass, players almost universally wear **cotton gloves** to reduce friction and protect their hands.

### 🎵 Song Selection & Culture

The game is a massive hit in arcades across Japan, Asia, and select international locations due to its huge tracklist:

- **Anime & J-Pop:** Features openings from popular shows and mainstream Japanese hits.
- **Vocaloid & Touhou:** Packed with community-favorite virtual singer tracks and remixes.
- **Sega Originals:** High-BPM, incredibly difficult electronic music tracks built specifically to test players' reflexes.

### 🔄 The Latest Versions

The series regularly receives massive software and cabinet updates. The modern era of the game is known as **maimai DX (Deluxe)**, with recent seasonal iterations adding new songs, internal rating systems, and multiplayer features.

Are you looking to find an arcade cabinet near you, or are you interested in how the game's ranking and rating systems work? Let me know how you'd like to proceed!

## kiwami meaning maimai

In the context of the arcade game **_maimai DX_**, **Kiwami (極)** references the ultimate tier of a player’s **skill rating**.

While the general definition of _Kiwami_ remains "extreme" or "pinnacle," it specifically means the following to _maimai_ players: [link](https://www.reddit.com/r/yakuzagames/comments/9ganuv/stupid%5Fquestion%5Fbut%5Fwhy%5Fare%5Fthe%5Fremakes%5Fcalled/)

### 🌈 Rainbow (Kiwami) Rating

In _maimai DX_, a player's skill level is measured by a numerical value called **DX Rating**. As your number goes up, the color of your rating badge changes.

- **The Ultimate Badge:** Reaching a rating of 15,000 unlocks the **Rainbow** badge. [link](https://www.youtube.com/watch?v=kvavTX-RKh8)
- **The "Kiwami" Tier:** If a player manages to push past the standard rainbow tier and achieve a massive rating of **16,000 or above**, the game rewards them with a much deeper, more saturated, and glowing rainbow frame.
- **Community Status:** The community officially calls this elite tier **"Rainbow (Kiwami)"** or simply **Kiwami Rating**. It represents the absolute pinnacle of execution, requiring players to consistently achieve near-perfect accuracy (SSS+) on some of the hardest Master and Re:Master songs in the game. [link](https://www.reddit.com/r/maimai/comments/1px75ne/what%5Fare%5Fratings%5Fand%5Fhow%5Fdo%5Fthey%5Fwork/)

### 🥋 Dan / Dojo Rankings (極段)

Sega rhythm games (including _maimai_ and _Chunithm_) feature a **Dan Certification Mode** (段位認定), which acts like a martial arts belt system. [link](https://www.reddit.com/r/maimai/comments/p5xsi7/about%5Fthe%5Fnew%5F%E6%AE%B5%E4%BD%8D%E8%AA%8D%E5%AE%9Amode/)

- The hardest, final challenges in these courses are often stamped with the **極 (Kiwami)** kanji.
- Clearing a "Kiwami" tier course awards the player a highly coveted plate or title to display on their in-game profile, proving they have conquered the most extreme challenges the game has to offer.

Are you pushing your way up to **Rainbow rating**, or are you looking for the exact **rating formulas** to optimize your top 50 song slots? Let me know how you'd like to proceed! [link](https://www.youtube.com/watch?v=kvavTX-RKh8)

- [link](https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/Maimai)\
  TV Tropes\
  maimai (Video Game) - TV Tropes\
  Aug 23, 2026 — 16,000 and above is a more saturated rainbow, known as "Rainbow (Kiwami)". Little Bit Beastly: Milk and Shama in "Oshama Scramble!
- [link](https://www.youtube.com/watch?v=kvavTX-RKh8)\
  YouTube·Saow\
  The PRO GUIDE to Help you Improve in maimai\
  Aug 6, 2024 — it shows how many charts you cleared b on rank stars FC and sync along with your play count using MMBL on this page will give you ...\
  19:43
- [link](https://silentblue.remywiki.com/maimai%5FDX:Rating)\
  RemyWiki\
  maimai DX:Rating - SilentBlue - RemyWiki\
  Mar 25, 2026 — Rating, officially DX Rating (でらっくす RATING), is a number that shows the skill of a player, similar to jubility in jubeat, Volforce...

Show all

## how is it read

**"Kiwami"** is read and pronounced exactly as it looks phonetically: **kee-wah-mee**.

If you are looking at the Japanese characters or writing it down, here is how the linguistic elements break down:

### 🔊 Pronunciation Breakdown

- **Ki:** Sounds like the "ke" in **ke**ypad (or the word "key").
- **Wa:** Sounds like the "wa" in **wa**ter (or "wah").
- **Mi:** Sounds like the "me" in **me**t (or the musical note "me").

### ✍️ How It Is Written (Kanji)

Depending on where you see it on the _maimai_ arcade cabinet screen, it will appear in one of two ways:

- **極 (Kiwami):** The single, standalone kanji character. This is what usually appears on the glowing top-tier rating plates.
- **極み (Kiwami):** The kanji combined with a hiragana character (`み`). This is the standard grammatical spelling for the noun form in Japanese text. [link](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)

### 🎮 The "Dan" Variation (極段)

If you are reading the Dojo/Dan ranking courses, you might see it combined with the character for tier/step (`段` - _dan_). In that specific context, it is read as **Kiwami-dan** (meaning "Ultimate Tier"). [link](https://argw.miraheze.org/wiki/Maimai%5FDX)

- [link](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)\
  Wikipedia\
  Maimai (video game series) - Wikipedia\
  Maimai's scoring system includes alphabetical ranks and a percentage score up to 100.00 in addition to around 0.015 added per Brea...
- [link](https://argw.miraheze.org/wiki/Maimai%5FDX)\
  Miraheze\
  maimai DX - All Rhythm Game Wiki\
  Aug 17, 2024 — This means that your Rating will now never go down within a version (it will still go down on version updates). In its place, the ...

## how is rainbow or rainbow (kiwami) read

In the English-speaking _maimai_ community, these terms are read exactly as they are written phonetically. However, because the game originates from Japan, the local players use specific Japanese readings. [link](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)

### 🌈 Rainbow Rating (15,000 – 15,999)

- **English Reading:** **Rain-bow Ray-ting**
- **Japanese Reading:** **Niji-rētingu (虹レーティング)** or simply **Niji (虹)**
  - _How to pronounce "Niji":_ Sounds like **nee-jee**.
  - _Meaning:_ _Niji_ is the literal Japanese word for "rainbow."

### 🔥 Rainbow (Kiwami) Rating (16,000+)

- **English Reading:** **Rain-bow Kee-wah-mee**
- **Japanese Reading:** **Niji-kiwami (虹極)** or **Niji-goku**
  - _How to pronounce:_ Sounds like **nee-jee kee-wah-mee** (or **nee-jee go-koo**).
  - _Note:_ You will also hear players refer to this tier casually as **"Shining Rainbow"** or **"Saturated Rainbow"** because the in-game badge updates from a pale rainbow color gradient to a much darker, intensely glowing rainbow pattern.

Are you currently working your way through the **Gold or Platinum tiers**, or are you calculating your **Top 50 song chart scores** to make the push into Rainbow? Let me know if you need help optimization strategies! [link](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)

- [link](https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/Maimai)\
  TV Tropes\
  maimai (Video Game) - TV Tropes\
  Aug 23, 2026 — Law of Chromatic Superiority: Deluxe's Rating system is divided into color-coded tiers that decorate the player's Rating counter. ...
- [link](https://silentblue.remywiki.com/maimai%5FDX:Rating)\
  RemyWiki\
  maimai DX:Rating - SilentBlue - RemyWiki\
  Mar 25, 2026 — Badge, Rating. Rainbow (Kiwami) 4☆, 16750 ~. Rainbow (Kiwami) 3☆, 16500 ~ 16749. Rainbow (Kiwami) 2☆, 16250 ~ 16499. Rainbow (Kiwa...
- [link](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)\
  Wikipedia\
  Maimai (video game series) - Wikipedia\
  Ranking. Every chart is assigned a rating value based on the difficulty with a hidden decimal constant and score ranking, with son...

## what is goku

**Goku** almost always refers to **Son Goku**, the main protagonist of Akira Toriyama's legendary **_Dragon Ball_** anime and manga franchise. [link](https://www.reddit.com/r/dragonball/comments/lkvc0b/what%5Fdoes%5Fgoku%5Fand%5Fkakarot%5Fmean/)

However, in the context of the pronunciation discussion we were just having about _maimai_ and the Japanese language, it also serves as a linguistic variation of the word _Kiwami_. Here is the breakdown of both meanings:

### 1. 🀄 The Linguistic Link: "Goku" vs. "Kiwami"

As mentioned briefly in the previous response, you will sometimes hear _maimai_ or rhythm game players use **"Goku"** instead of _Kiwami_ when looking at the exact same Kanji character (**極**).

- **The Rules of Kanji:** In Japanese, a single kanji character can have multiple readings depending on how it is paired with other words.
- **Kun'yomi (Japanese Reading):** When the character **極** stands alone, it is read as **_Kiwami_**.
- **On'yomi (Chinese-derived Reading):** When **極** is attached to the front of another kanji, its pronunciation changes to **_Goku_** (or _Kyoku_).
- **Example:** The ultimate _Rainbow Kiwami_ rating is written as **虹極**. Because the two characters are mashed together, Japanese players will natively read it out loud as **"Niji-goku"** rather than "Niji-kiwami." Both mean the exact same thing (Ultimate Rainbow), it is just a change in pronunciation. [link](https://www.reddit.com/r/dbz/comments/81ha0i/noob%5Fquestion%5Fwhats%5Fthe%5Fdeal%5Fwith%5Fcharacters%5Fnot/)

***

### 2. 🐉 The Fictional Character: Son Goku (Dragon Ball)

If you mean the literal character Goku, his name is a clever pun with deep roots in Eastern literature: [link](https://www.reddit.com/r/dragonball/comments/lkvc0b/what%5Fdoes%5Fgoku%5Fand%5Fkakarot%5Fmean/)

- **The Origin:** His character is heavily inspired by **Sun Wukong** (The Monkey King) from the classic 16th-century Chinese novel _Journey to the West_. "Son Goku" is simply the Japanese translation of the name Sun Wukong.
- **The Meaning of his Name (悟空):**
  - **Go (悟):** Means "enlightenment," "perception," or "to realize."
  - **Ku (空):** Means "sky," "void," or "emptiness."
  - Put together, his name roughly translates to **"Awakened to Emptiness."** [link](https://www.reddit.com/r/dragonball/comments/lkvc0b/what%5Fdoes%5Fgoku%5Fand%5Fkakarot%5Fmean/)
- **The Saiyan Name:** Born on the Planet Vegeta, his original alien birth name is **Kakarot**, which is a comedic pun on the word "carrot." [link](https://www.reddit.com/r/dragonball/comments/lkvc0b/what%5Fdoes%5Fgoku%5Fand%5Fkakarot%5Fmean/)

Did you bring up "Goku" because you heard a _maimai_ player say the phrase **"Niji-goku"**, or were you just curious about the _Dragon Ball_ character's name background? Let me know! [link](https://www.reddit.com/r/dbz/comments/81ha0i/noob%5Fquestion%5Fwhats%5Fthe%5Fdeal%5Fwith%5Fcharacters%5Fnot/)

- [link](https://www.reddit.com/r/dragonball/comments/lkvc0b/what%5Fdoes%5Fgoku%5Fand%5Fkakarot%5Fmean/)\
  Reddit\
  What does “Goku” and “Kakarot” mean? : r/dragonball\
  Feb 16, 2021 — The name "Kakarot" (カカロット) is a pun on the word "carrot". It's also Goku's Saiyan name, which is named after vegetables. All Saiya...
- [link](https://www.reddit.com/r/dbz/comments/81ha0i/noob%5Fquestion%5Fwhats%5Fthe%5Fdeal%5Fwith%5Fcharacters%5Fnot/)\
  Reddit\
  Noob question: What's the deal with characters not being able to read Goku's name?\
  Mar 2, 2018 — In \*Dragon Ball\*, characters have difficulty reading Goku's name because of the kanji's multiple readings: \* \*\*Kanji\*\* One of the ...

