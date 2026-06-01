how is the percentage of a maimai gameplay calculated

May 23, 2026

In modern **maimai DX**, the gameplay percentage (known officially as the **Achievement Rate**) is calculated out of a maximum possible score of **101.0000%**. \[[1](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29), [2](https://zh.moegirl.org.cn/en/Maimai%E7%B3%BB%E5%88%97)]

This final percentage is split into two entirely independent scoring pools: the **Base Score (100%)** and the **Break Bonus (1%)**. \[[1](https://spiritsunite.github.io/maimai-score-details/), [2](https://zh.moegirl.org.cn/en/Maimai%E7%B3%BB%E5%88%97)]

***

1\. Base Score (Max 100.0000%) \[[1](https://zh.moegirl.org.cn/en/Maimai%E7%B3%BB%E5%88%97), [2](https://spiritsunite.github.io/maimai-score-details/), [3](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)]

The base score pool makes up 100% of the achievement rate and factors in every single note in the chart. Each note type is assigned a weight (or raw point value): \[[1](https://zh.moegirl.org.cn/en/Maimai%E7%B3%BB%E5%88%97), [2](https://spiritsunite.github.io/maimai-score-details/)]

- **Tap / Touch**: 1 point
- **Hold**: 2 points
- **Slide**: 3 points
- **Break**: 5 points \[[1](https://spiritsunite.github.io/maimai-score-details/)]

Depending on your hitting accuracy, you earn a specific multiplier for that note: \[[1](https://spiritsunite.github.io/maimai-score-details/)]

| Note Type \[[1](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/), [2](https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2023-2024/Makalah2023/Makalah-Matdis-2023%20%2899%29.pdf), [3](https://spiritsunite.github.io/maimai-score-details/), [4](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)] | Critical Perfect / Perfect | Great                                 | Good      | Miss |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------- | --------- | ---- |
| **Tap / Touch / Hold / Slide**                                                                                                                                                                                                                                                                                                                                         | 100% value                 | 80% value                             | 50% value | 0%   |
| **Break Notes**                                                                                                                                                                                                                                                                                                                                                        | 100% value                 | 50% to 80% value _(varies by timing)_ | 40% value | 0%   |

_Note: For the Base Score, a regular **Perfect** and a **Critical Perfect** award the exact same 100% value._ \[[1](https://spiritsunite.github.io/maimai-score-details/)]

\\(\text{Base\ Score\ \\%}=\left(\frac{\text{Total\ Points\ Earned}}{\text{Maximum\ Possible\ Base\ Points}}\right)\times 100\\%\\)

***

2\. Break Bonus Score (Max 1.0000%)

The remaining 1% of the score is allocated entirely to **Break notes**. This is the only part of the calculation where getting a **Critical Perfect** matters. \[[1](https://zh.moegirl.org.cn/en/Maimai%E7%B3%BB%E5%88%97), [2](https://spiritsunite.github.io/maimai-score-details/)]

The total 1.0000% bonus is split equally among all Break notes in the chart. For example, if a song has 20 Break notes, each Break note is worth a maximum bonus of \\(1\\% / 20 = 0.05\\%\\). \[[1](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)]

The bonus percentage you receive per Break note scales down based on your strict timing sub-tier: \[[1](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)]

- **Critical Perfect**: 100% of the note's bonus
- **High Perfect**: 75% of the note's bonus
- **Low Perfect**: 50% of the note's bonus
- **Great**: 40% of the note's bonus
- **Good**: 30% of the note's bonus
- **Miss**: 0% bonus \[[1](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes), [2](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)]

***

Final Tabulation

To calculate your final percentage, the game simply adds your Base Score percentage and your Break Bonus percentage together: \[[1](https://zh.moegirl.org.cn/en/Maimai%E7%B3%BB%E5%88%97), [2](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)]

\\(\text{Final\ Achievement\ Rate}=\text{Base\ Score\ \\%}+\text{Break\ Bonus\ \\%}\\)

Because of this system, you can hit a regular **Perfect** on every single note in a song (an "All Perfect" run) and still score below 101.0000% if you missed the tighter timing required for Critical Perfects on the Break notes. To achieve the absolute maximum score of **101.0000%**, you must get a **Critical Perfect** on every single Break note in the song. \[[1](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29), [2](https://spiritsunite.github.io/maimai-score-details/)]

If you would like to test how a specific performance impacts your rating, you can utilize the community-made [maimai DX Rating Analyzer](https://myjian.github.io/mai-tools/rating-calculator/) to track your scores. \[[1](https://myjian.github.io/mai-tools/rating-calculator/)]

Are you trying to figure out how many **Critical Perfect Breaks** you missed on a specific song, or do you want to calculate how a certain percentage will affect your **player rating**? \[[1](https://www.reddit.com/r/maimai/comments/zb1vol/can%5Fanyone%5Ftell%5Fme%5Fhow%5Fdoes%5Fthe%5Frating%5Fpoints%5Fgo/)]

- [link](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)\
  Maimai (video game series) - Wikipedia\
  Maimai's scoring system includes alphabetical ranks and a percentage score up to 100.00 in addition to around 0.015 added per Brea...\
  Wikipedia
- [link](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)\
  How are break notes calculated? : r/maimai - Reddit\
  How are break notes calculated? \* The break bonuses is the 1% over the 100% from all notes in the song; split over all breaks in t...\
  Reddit
- [link](https://zh.moegirl.org.cn/en/Maimai%E7%B3%BB%E5%88%97)\
  maimai - Moegirlpedia - 萌娘百科\
  Achievement rate and Rank. maimai'sAchievement Rate（スコア, Achievement) is the value most commonly used to measure the player's perf...\
  萌娘百科

Show all

You said: how is break note calculated

May 23, 2026

A **Break note** is calculated <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">using a split scoring system</mark>. It is the only note type in **maimai DX** that simultaneously pulls from and affects both the **Base Score (100%)** and the **Break Bonus (1%)**. \[[1](https://spiritsunite.github.io/maimai-score-details/)]

Because it feeds into both pools, its strictness is heavily dependent on the total number of Break notes in a song. \[[1](https://www.youtube.com/shorts/zagAzC9O8mc), [2](https://silentblue.remywiki.com/maimai%5FDX:FESTiVAL)]

***

1\. The Base Score Calculation (Weight = 5)

In the 100.0000% base score pool, a Break note has a raw weight of **5 points** (5 times a regular Tap note). Your timing determines how much of those 5 points you keep. \[[1](https://github.com/SpiritsUnite/maimai-score-details), [2](https://spiritsunite.github.io/maimai-score-details/)]

Unlike regular notes, the **Great** judgment for Break notes is sub-divided into three hidden internal tiers based on your exact timing window: \[[1](https://www.reddit.com/r/maimai/comments/1ozjviv/how%5Fmany%5Fpoints%5Fdoes%5Fperfectgreatgood%5Fnote%5Fgive/), [2](https://spiritsunite.github.io/maimai-score-details/), [3](https://github.com/SpiritsUnite/maimai-score-details)]

| Final Judgement \[[1](https://argw.miraheze.org/wiki/Maimai%5FDX), [2](https://github.com/SpiritsUnite/maimai-score-details/blob/main/README.md), [3](https://spiritsunite.github.io/maimai-score-details/), [4](https://github.com/SpiritsUnite/maimai-score-details)] | Internal Tier              | Multiplier | Base Points Earned |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- | ------------------ |
| **Critical Perfect**                                                                                                                                                                                                                                                    | Critical                   | **x 1.0**  | 5.0 points         |
| **Perfect**                                                                                                                                                                                                                                                             | High Perfect / Low Perfect | **x 1.0**  | 5.0 points         |
| **Great**                                                                                                                                                                                                                                                               | High Great                 | **x 0.8**  | 4.0 points         |
| **Great**                                                                                                                                                                                                                                                               | Mid Great                  | **x 0.6**  | 3.0 points         |
| **Great**                                                                                                                                                                                                                                                               | Low Great                  | **x 0.5**  | 2.5 points         |
| **Good**                                                                                                                                                                                                                                                                | Good                       | **x 0.4**  | 2.0 points         |
| **Miss**                                                                                                                                                                                                                                                                | Miss                       | **x 0.0**  | 0.0 points         |

***

2\. The Break Bonus Calculation (Total = 1%)

The extra 1.0000% achievement pool is split completely evenly among every single Break note in the chart. \[[1](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)]

\\(\text{Max\ Bonus\ Value\ Per\ Break}=\frac{1\\%}{\text{Total\ Breaks\ in\ Song}}\\)

When you hit a Break note, you receive a percentage of that specific note's allocated bonus based on your sub-tier judgment accuracy: \[[1](https://spiritsunite.github.io/maimai-score-details/)]

- **Critical Perfect**: 100% of the bonus
- **High Perfect**: 75% of the bonus
- **Low Perfect**: 50% of the bonus
- **Great (All sub-tiers)**: 40% of the bonus
- **Good**: 30% of the bonus
- **Miss**: 0% bonus \[, [2](https://github.com/SpiritsUnite/maimai-score-details)]

***

How Chart Break Density Affects Score Penalties

Because the 1% bonus is split across the total number of Break notes, the **punishment for missing a Critical Perfect** changes dynamically depending on the song: \[[1](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes), [2](https://www.youtube.com/shorts/zagAzC9O8mc)]

- **Low Break Count Charts**: If a song only has **5 Break notes**, each one dictates a massive \\(0.2\\%\\) of your total score. Dropping just one Critical Perfect down to a High Perfect costs you \\(0.05\\%\\) off your final score.
- **High Break Count Charts**: If a song has **100 Break notes**, each one is only worth \\(0.01\\%\\). Dropping a Critical Perfect down to a High Perfect only costs a tiny \\(0.0025\\%\\).

This makes charts with very few Break notes incredibly punishing to "AP+" (All Perfect Plus), as a single non-critical timing variance will heavily damage your final percentage. \[[1](https://www.youtube.com/shorts/zagAzC9O8mc)]

Would you like to know the **exact millisecond timing windows** required to hit a Critical Perfect Break, or do you have a specific song chart whose break count you want to look up?

- [link](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)\
  How are break notes calculated? : r/maimai - Reddit\
  Question & Advice. In the nonDX era, perfect breaks were 2500 points, compared to regular notes that are 500, slides 1500 etc. But...\
  Reddit
- [link](https://spiritsunite.github.io/maimai-score-details/)\
  maimai-score-details - GitHub Pages\
  maimai Scoring System. The 101% can be broken down into two parts: 100% base score which takes into account performance on all not...\
  GitHub Pages documentation
- [link](https://www.youtube.com/shorts/zagAzC9O8mc)\
  The Worst Note Type in any rhythm game #maimai #rhythmgame # ...\
  Break notes, colored orange, employ a stricter scoring system that includes "perfect" and "critical perfect" judgments. While "cri...\
  0:56\
  YouTube·Saow

Show all

You said: dx score

May 23, 2026

The **DX Score** (でらっくすスコア) is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">an alternative, raw accuracy scoring system in <strong>maimai DX</strong></mark>. While the standard Achievement Rate (max 101.0000%) uses heavily weighted note types, the DX Score levels the playing field by treating every single note in the chart equally. \[[1](https://argw.miraheze.org/wiki/Maimai%5FDX)]

It works exactly like the EX Score systems found in games like _beatmania IIDX_ or _DanceDanceRevolution_. \[[1](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes)]

***

1\. The Point Assignment Formula

Your DX Score is calculated by assigning a strict point value from **0 to 3** to every single note hit, completely ignoring whether a note is a Tap, Hold, Touch, Slide, or Break: \[[1](https://github.com/SpiritsUnite/maimai-score-details), [2](https://argw.miraheze.org/wiki/Maimai%5FDX), [3](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes)]

- 🌟 **Critical Perfect**: 3 points
- 🔴 **Perfect**: 2 points
- 🟡 **Great**: 1 point
- 🟢 **Good**: 0 points
- ❌ **Miss**: 0 points \[[1](https://argw.miraheze.org/wiki/Maimai%5FDX), [2](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes)]

Calculating the Maximum DX Score

Because every note is worth a maximum of 3 points, you can easily calculate the maximum possible DX Score for any song chart using this formula: \[[1](https://www.reddit.com/r/maimai/comments/1t4a678/what%5Fis%5Fit/), [2](https://argw.miraheze.org/wiki/Maimai%5FDX)]

\\(\text{Maximum\ DX\ Score}=\text{Total\ Note\ Count}\times 3\\)

***

2\. DX Star Rankings

When you complete a song, the game calculates the percentage of the Max DX Score you achieved and awards you colored **DX Stars** on the results screen. \[[1](https://www.facebook.com/groups/MaiMaiAsia/posts/2190787534465851/), [2](https://www.reddit.com/r/maimai/comments/1t4a678/what%5Fis%5Fit/)]

| Stars Earned \[[1](https://www.reddit.com/r/maimai/comments/1t4a678/what%5Fis%5Fit/), [2](https://www.facebook.com/groups/MaiMaiAsia/posts/2190787534465851/)] | DX Score Percentage Required |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| ⭐                                                                                                                                                             | **85%** of Max DX Score      |
| ⭐⭐                                                                                                                                                           | **90%** of Max DX Score      |
| ⭐⭐⭐                                                                                                                                                         | **93%** of Max DX Score      |
| ⭐⭐⭐⭐                                                                                                                                                       | **95%** of Max DX Score      |
| ⭐⭐⭐⭐⭐                                                                                                                                                     | **97%** of Max DX Score      |

_Note: The community also unofficially uses **6 Stars (99%)** and **7 Stars (100%)** to denote absolute mastery of a chart's accuracy limits._ \[[1](https://www.facebook.com/groups/MaiMaiAsia/posts/2190787534465851/)]

***

3\. How a Single Mistake Affects Your DX Score

Because you are chasing a perfect 3-point yield per note, getting anything less than a Critical Perfect will immediately dock points from your maximum possible score: \[[1](https://www.reddit.com/r/maimai/comments/1t4a678/what%5Fis%5Fit/), [2](https://argw.miraheze.org/wiki/Maimai%5FDX)]

- Dropping to a **Perfect**: **-1 point** from Max
- Dropping to a **Great**: **-2 points** from Max
- Dropping to a **Good**: **-3 points** from Max
- Dropping to a **Miss**: **-3 points** from Max \[[1](https://www.reddit.com/r/maimai/comments/1t4a678/what%5Fis%5Fit/)]

Achievement Rate vs. DX Score

The core difference between the two systems comes down to what they prioritize:

- **Achievement Rate (101%)** rewards you for hitting heavy-value notes (Breaks/Slides) and getting generic Perfects. It is used to calculate your **Player Rating**.
- **DX Score** acts as a tie-breaker in major tournaments like the [KING of Performai](https://maimai.sega.jp/kop5th/maimai%5Fitr%5Fen/). It proves whether you have pure timing, forcing you to get a frame-perfect **Critical Perfect** on absolutely _everything_, including minor Tap and Touch notes. \[[1](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/), [2](https://github.com/SpiritsUnite/maimai-score-details), [3](https://maimai.sega.jp/kop5th/maimai%5Fitr%5Fen/), [4](https://www.reddit.com/r/maimai/comments/ickmvc/what%5Fscore%5Fdo%5Fyou%5Fexpect%5Fto%5Fstart%5Fmoving%5Fyourself/), [5](https://argw.miraheze.org/wiki/Maimai%5FDX)]

Are you trying to optimize your accuracy to grind for **5-Star DX scores**, or are you checking how a tournament tie-breaker works? \[[1](https://maimai.sega.jp/kop5th/maimai%5Fitr%5Fen/), [2](https://www.facebook.com/groups/MaiMaiAsia/posts/2190787534465851/)]

This is for informational purposes only. For medical advice or diagnosis, consult a professional. AI responses may include mistakes. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://www.reddit.com/r/maimai/comments/zqhb8i/how%5Fdoes%5Fthe%5Frank%5Ffactor%5Ftable%5Fcome%5Finto%5Fthe/)\
  How does the Rank Factor Table come into the rating calculation : r/maimai\
  Comments Section. patrueree. • 3y ago. Rating wise, as long as 2 charts have the same internal difficulty, it will weight the same...\
  Reddit
- [link](https://maimai.sega.jp/kop5th/maimai%5Fitr%5Fen/)\
  maimaiDX Online Qualifying Round - KING of Performai The 5th (KOP5th)\
  Scoring System. After registering for the online qualifying round, the total achievement score of all assigned tournament songs fo...\
  maimai.sega.jp
- [link](https://github.com/SpiritsUnite/maimai-score-details)\
  SpiritsUnite/maimai-score-details - GitHub\
  100% base score which takes into account performance on all notes (and disregards critical perfect) 1% break score which only take...\
  GitHub

Show all

You said: what might a record breaking dx score paired with a lower achievement rate imply

May 23, 2026

A record-breaking **DX Score** paired with a lower **Achievement Rate** implies that you had **elite overall timing accuracy, but made critical errors specifically on the highest-valued notes (Breaks and Slides) \[1, 2].**

Because the two scoring systems value notes completely differently, this unusual combination points to a very specific type of gameplay run.

***

1\. High-Value Note Mistakes (The "Fast/Late" Break Trap)

The most common cause of this phenomenon is getting a **Great** or **Good** judgment on **Break notes**.

- **The DX Score Impact:** A Break note is worth 3 points in DX Score, just like a Tap \[3]. Dropping a Break note to a "Great" only costs you **2 DX points** \[3].
- **The Achievement Rate Impact:** A Break note carries a massive base weight of 5 points plus a huge chunk of the 1% Break Bonus \[1, 2]. Dropping a Break note to a "Great" can cost you up to **2.5 base points** and strips away **60% of that note's bonus percentage** \[1, 2].

If you hit almost every minor Tap and Touch note with frame-perfect _Critical Perfect_ precision (driving your DX Score sky-high), but rushed or delayed your big Break notes into "Great" territory, your Achievement Rate will plummet while your DX Score stays near-record levels.

2\. Major Slide Drops

Slide notes are highly weighted in the Achievement Rate (3x the value of a Tap note) \[1, 2].

- If you complete a massive, fast-paced stream of Tap notes with flawless _Critical Perfect_ timing, your DX Score climbs rapidly \[3].
- If you then **Miss** or **Good** a single multi-part Slide note at the end of that stream, your DX score only loses **3 points** \[3]. However, your Achievement rate loses **3 full base points** \[1, 2]. Doing this multiple times severely damages your 101% score while leaving your DX score relatively intact.

3\. "Over-Hitting" the Timing Windows

This scenario often happens to players who are transitioning from other traditional rhythm games (like _beatmania IIDX_ or _DDR_) to _maimai_.

- You may have an incredible internal metronome, hitting the vast majority of the chart's hundreds of Tap/Touch notes strictly on-beat for 3 DX points each \[3].
- However, if you fail to understand the unique _sweeping motion_ of a long Slide note, or hit a Break note just a fraction of a second too early, the 101% calculation penalizes you heavily \[1, 2], even though you only lost 1 or 2 points in the DX system \[3].

In short, it means you played with **world-class precision on 90% of the chart**, but cracked under pressure on the specific notes that actually dictate the game's ranking percentage.

Are you looking at a specific song run where this happened to you? If you can share your **exact DX score** and **achievement percentage**, I can help you pinpoint exactly where the points were lost!

You said: how is a slide calculated

May 23, 2026

In **maimai DX**, a Slide note (the star that appears and leaves a trailing path to trace) is unique because it is mathematically split into **two completely separate components**: the **Star Tap** and the **Slide Path**. \[[1](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29), [2](https://myaimyai.wordpress.com/2020/02/22/secret-to-sliding-well-esp-for-screen-players/)]

Even though they appear as a single connected element on screen, the game scores them as two individual entities that contribute directly to your Achievement Rate and DX Score. \[[1](https://www.reddit.com/r/maimai/comments/101iz0h/how%5Fto%5Fget%5Fbetter%5Fat%5Fsliders/)]

***

1\. Component 1: The Star Tap (Weight = 1)

The initial star shape that flies from the center to the rim is judged exactly like a standard, everyday Tap note. \[[1](https://myaimyai.wordpress.com/2020/02/22/secret-to-sliding-well-esp-for-screen-players/)]

- **Base Score Contribution**: 1 point
- **DX Score Contribution**: 3 points (for a Critical Perfect)
- **Timing Check**: It is judged the exact millisecond it crosses the outer sensor ring. \[[1](https://spiritsunite.github.io/maimai-score-details/)]

***

2\. Component 2: The Slide Path (Weight = 3)

The blue arrow track left behind by the star is the actual "sliding" portion. It behaves like a timer check rather than a continuous tracking bar. \[[1](https://www.youtube.com/shorts/EhcMNVl-4uo), [2](https://gamecenter-guide.sega.com/en/arcade/musicgame-maimai/), [3](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)]

- **Base Score Contribution**: 3 points
- **DX Score Contribution**: 3 points (for a Critical Perfect)
- **Timing Check**: It is judged exclusively based on **when you clear the very final point of the track**. The game checks if your hand reaches the destination node exactly when the guiding star graphic finishes its track sweep. \[[1](https://www.youtube.com/shorts/EhcMNVl-4uo), [2](https://spiritsunite.github.io/maimai-score-details/), [3](https://myaimyai.wordpress.com/2020/02/22/secret-to-sliding-well-esp-for-screen-players/), [4](https://www.reddit.com/r/maimai/comments/101iz0h/how%5Fto%5Fget%5Fbetter%5Fat%5Fsliders/)]

***

3\. How Judgments and Multipliers are Applied

When you complete a Slide, your overall score calculation applies standard multipliers to the base values: \[[1](https://spiritsunite.github.io/maimai-score-details/)]

| Judgment \[[1](https://spiritsunite.github.io/maimai-score-details/)] | Base Score Multiplier | Star Tap Points | Slide Path Points | DX Points     |
| --------------------------------------------------------------------- | --------------------- | --------------- | ----------------- | ------------- |
| **Critical Perfect / Perfect**                                        | **x 1.0**             | 1.0 point       | 3.0 points        | 3 pts / 2 pts |
| **Great**                                                             | **x 0.8**             | 0.8 points      | 2.4 points        | 1 point       |
| **Good**                                                              | **x 0.5**             | 0.5 points      | 1.5 points        | 0 points      |
| **Miss**                                                              | **x 0.0**             | 0.0 points      | 0.0 points        | 0 points      |

***

4\. The 1-Beat Delay and Tracing Mechanics

The calculation engine follows a strict mechanical rule set regarding how the slide triggers:

1. **The Wait Period**: Once you hit the Star Tap, the track locks in, and a **mandatory 1-beat delay** occurs before the star graphic actually starts traveling down the path.
2. **The Progression Check**: You do not actually need to follow the star pixel-for-pixel. The internal logic works like an "eraser". You can clear the path ahead of time, but you **must keep your hand held on the final note position** until the guiding star arrives to register a Perfect judgment.
3. **Premature Release**: If you complete the path swipe but lift your hand off the final destination note before the star graphic officially arrives, the game registers a **Good** or a **Miss** on the Slide Path portion, severely lowering your Achievement Rate by dropping the 3-point base value to 1.5 or 0. \[[1](https://w.atwiki.jp/simai/pages/1003.html), [2](https://www.youtube.com/shorts/EhcMNVl-4uo), [3](https://www.reddit.com/r/maimai/comments/101iz0h/how%5Fto%5Fget%5Fbetter%5Fat%5Fsliders/), [4](https://spiritsunite.github.io/maimai-score-details/)]

***

Special Case: Break Slides

Occasionally, charts feature **Break Slides** (represented by a flashing red/yellow star). \[[1](https://spiritsunite.github.io/maimai-score-details/)]

- The **Star Tap** turns into a Break Note (Weight = 5 points in Base Score, plus its share of the 1% Break Bonus).
- The **Slide Path** remains a standard path (Weight = 3 points in Base Score), meaning only the initial tap gets the specialized break bonus rules. \[[1](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/), [2](https://spiritsunite.github.io/maimai-score-details/)]

Would you like to know how the game handles **Wi-Fi Slides** (double-paths that require two hands), or are you tracking down why a slide track unexpectedly gave you a **"Good"** judgment? \[[1](https://www.youtube.com/shorts/EhcMNVl-4uo), [2](https://www.reddit.com/r/maimai/comments/101iz0h/how%5Fto%5Fget%5Fbetter%5Fat%5Fsliders/)]

- [link](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)\
  How are break notes calculated? : r/maimai - Reddit\
  Question & Advice. In the nonDX era, perfect breaks were 2500 points, compared to regular notes that are 500, slides 1500 etc. But...\
  Reddit
- [link](https://w.atwiki.jp/simai/pages/1003.html)\
  Notations of simai - simai \[simulator of maimai] - アットウィキ (@WIKI)\
  such as the starting and ending button numbers, how they are to be connected with the arrow track, and how long the tracing star i...\
  アットウィキ
- [link](https://www.youtube.com/shorts/EhcMNVl-4uo)\
  How Slides Work in maimai #maimai #rhythmgame\
  Slides in maimai are a unique mechanic compared to other rhythm games. Initially, a spinning star appears with a slider; players m...\
  1:29\
  YouTube·Saow

Show all

You said: how is a hold calculated

May 23, 2026

In **maimai DX**, a Hold note (the long, glowing bar that you must press and keep held down) is calculated using a **dual-judgment check** system.

Unlike games like _Guitar Hero_ or _DanceDanceRevolution_ where hold notes are scored continuously over time, maimai judges a Hold note exactly twice: **once at the very beginning (the landing), and once at the very end (the release).**

***

1\. The Two Scoring Components

A Hold note treats its beginning and its end as a unified package to determine your single final judgment.

- **Base Score Weight**: 2 points
- **DX Score Weight**: 3 points (for a Critical Perfect)

***

2\. How the Judgment is Determined

The game evaluates two distinct windows to give you your final score multiplier:

Step 1: The Initial Tap (The Start)

You must press the button or touch the screen sensor exactly when the front edge of the Hold bar reaches the outer ring. This uses the game's standard timing windows. If you hit this perfectly, you are on track for a Perfect score.

Step 2: The Continuous Hold & Release (The End)

Once held, you must keep your hand on the sensor until the tail end of the Hold bar passes the outer ring.

- **No Early Release**: If you let go even a fraction of a second before the bar ends, you are instantly penalized.
- **The Release Window**: You do not need to release the note with frame-perfect timing. As long as your hand remained on the sensor for the entire duration, you can let go late or keep holding it indefinitely without losing points.

Final Processing Logic

The game compares your initial tap timing with your release status. The **lower** of the two judgments becomes your final score for that note.

- If you hit a **Critical Perfect** at the start, but **let go early**, the note drops to a **Miss** (0 points).
- If you hit a **Great** at the start, but **hold it perfectly** to the end, the note remains a **Great** (1.6 base points / 1 DX point).

***

3\. Judgment Multipliers for Holds

| Final Combined Judgment        | Base Score Multiplier | Base Points Earned | DX Points Earned |
| ------------------------------ | --------------------- | ------------------ | ---------------- |
| **Critical Perfect / Perfect** | **x 1.0**             | 2.0 points         | 3 pts / 2 pts    |
| **Great**                      | **x 0.8**             | 1.6 points         | 1 point          |
| **Good**                       | **x 0.5**             | 1.0 point          | 0 points         |
| **Miss**                       | **x 0.0**             | 0.0 points         | 0 points         |

***

The "Numbing" Hold Trick

Because the game engine only checks if the sensor is **active** during the hold duration, it does not actually care _which_ finger or hand is pressing it.

If you are playing a complex chart and your hand gets physically trapped by incoming notes, you can smoothly slide your other hand onto the Hold note sensor to take over, then move your original hand away to hit other notes. As long as the sensor detects continuous pressure without a single frame of interruption, the calculation engine keeps the 1.0x multiplier intact.

Are you experiencing issues where you lose your combo on **fast, short holds**, or are you interested in how **Touch Holds** (the yellow hex shapes in the center of the screen) differ from regular button holds?

You said: how is a hold judged

May 23, 2026

In **maimai DX**, a Hold note is judged by evaluating two specific actions: **the initial press** and **the continuous hold duration**.

While the game awards you a single final judgment (Critical Perfect, Perfect, Great, Good, or Miss) on your screen, the internal system calculates that judgment using a strict **"lowest common denominator"** rule.

***

1\. The Two Timing Windows

To get a perfect judgment, you must successfully pass two independent checks:

- **The Head (The Press)**: This uses the exact same millisecond timing windows as a standard Tap note. If you hit the button or sensor early or late, you are locked into a _Great_ or _Good_ maximum ceiling for that note.
- **The Tail (The Duration)**: The game monitors the sensor for the entire length of the hold bar. You must keep continuous pressure on the sensor until the tail of the note passes the judgment line.

***

2\. The Judgment Logic (The "Worst Metric" Rule)

The final judgment calculation is determined by comparing your press accuracy against your holding duration. **The game will always award you whichever part of your performance was worse.**

Here is exactly how the game resolves different scenarios:

| If your Initial Press is... | And your Holding Duration is... | Your Final Visual Judgment is... |
| --------------------------- | ------------------------------- | -------------------------------- |
| **Critical Perfect**        | Held all the way to the end     | **Critical Perfect**             |
| **Great**                   | Held all the way to the end     | **Great**                        |
| **Critical Perfect**        | Released early (even slightly)  | **Miss**                         |
| **Perfect**                 | Released halfway through        | **Miss**                         |

_Note: There is no strict "release timing" window. You can keep your hand on the sensor long after the note has finished, and you will still get a Perfect. The game only punishes you for releasing **too early**._

***

3\. Special Case: Touch Holds

Touch Holds (the glowing yellow hexagons that appear in the middle of the screen instead of traveling to the outer rim) are judged slightly differently:

- **No "Head" Timing**: You do not need to tap them exactly on the beat when they appear.
- **Duration Only**: As long as your hand is touching the hexagon before the colorful countdown timer ring closes, and you hold it until the ring disappears, you are guaranteed a **Critical Perfect**.
- **Immediate Miss**: If you lift your hand off a Touch Hold for even a single frame while the timer ring is active, it instantly drops to a **Miss**.

Are you running into situations where you are getting unexpected **Misses** on very short, fast holds, or do you want to look at the **exact frame windows** for Hold judgments?

You said: search. how is a hold judged

May 23, 2026

In modern **maimai DX**, Hold notes use a forgiving, dynamic evaluation system rather than a strict "lowest common denominator" rule. The final judgment depends on the timing of your initial tap combined with the **percentage of the duration** you successfully hold down. \[[1](https://argw.miraheze.org/wiki/Maimai%5FDX)]

The modern mechanical rules determine your Hold note judgment based on three key factors:

***

1\. The Head Timing (The Initial Tap)

The moment the Hold note arrives at the judgment ring, your initial press is checked against the game's standard millisecond timing windows (exactly like a regular Tap note): \[[1](https://zh.moegirl.org.cn/en/Maimai%E7%B3%BB%E5%88%97), [2](https://chunithm.org/basic/timing/)]

- **Critical Perfect**: Hit within \\(\pm16.67\text{ ms}\\)
- **Perfect**: Hit within \\(\pm33.33\text{ ms}\\)
- **Great**: Hit within \\(\pm100\text{ ms}\\)
- **Good**: Hit within \\(\pm150\text{ ms}\\) \[[1](https://silentblue.remywiki.com/User:MENDES/Timing), [2](https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2023-2024/Makalah2023/Makalah-Matdis-2023%20%2899%29.pdf)]

2\. The 80% Duration Rule

Unlike older versions of _maimai_ (like _maimai Finale_), **release timing has been entirely removed**. You do not have to time letting go of the note. You can keep your hand on the sensor long after the note ends, and it will still count as a Critical Perfect. \[[1](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29), [2](https://argw.miraheze.org/wiki/Maimai%5FDX)]

Furthermore, the game features a leniency threshold: **you only need to hold the note for at least 80% of its total duration** to secure a Perfect rating on the tail end. If you let go right at the very end (within that final 20% window), the game doesn't penalize your score. \[[1](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes), [2](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)]

3\. The "Re-Hold" Safety Mechanic (Turning Grey) \[[1](https://argw.miraheze.org/wiki/Maimai%5FDX)]

If you accidentally release a Hold note too early (before reaching the 80% threshold), **the note does not instantly disappear or fail**. Instead: \[[1](https://argw.miraheze.org/wiki/Maimai%5FDX), [2](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes)]

1. The hold bar **turns grey** on screen, indicating it has lost active pressure.
2. A grace period allows you to **re-press and hold the note again** before it completely passes.
3. If you re-hold it quickly enough to meet the overall duration requirement, you can still save the note from becoming a Miss, upgrading it to a _Great_ or _Good_ instead. \[[1](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29), [2](https://argw.miraheze.org/wiki/Maimai%5FDX), [3](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes)]

4\. Missing the Head vs. Catching the Tail

If you completely whiff the initial press, you can still salvage raw points: \[[1](https://argw.miraheze.org/wiki/Maimai%5FDX), [2](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes)]

- **White Ripple Effect**: If you press the sensor late after the note has already turned grey, a white ripple appears. This indicates that the "Head" of the note is registered as a **Miss**.
- **Partial Points**: Because you held down the remainder of the bar, the internal math calculates the percentage held. It will award you a heavily scaled-down **Good** or **Great** final judgment instead of a total zero-point Miss, keeping your combo alive. \[[1](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29), [2](https://argw.miraheze.org/wiki/Maimai%5FDX), [3](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes)]

Are you experiencing issues keeping your combo on **EX Hold notes** (the bright glowing ones), or are you practicing charts with fast **Touch Holds** in the center of the screen? \[]

- [link](https://silentblue.remywiki.com/User:MENDES/Timing)\
  User:MENDES/Timing - SilentBlue - RemyWiki\
  < User:MENDES. This will be a page documenting timing windows in the three games, and will be kept here until the overall series p...\
  RemyWiki
- [link](https://chunithm.org/basic/timing/)\
  Timing Windows - Chunithm English Guide\
  The initial input on holds and slides has the same timing window as a tap note. The game measures holds at ticks or "checkpoints" ...\
  Chunithm English Guide
- [link](https://argw.miraheze.org/wiki/Maimai%5FDX)\
  maimai DX - All Rhythm Game Wiki\
  Hold Notes. Release timing for holds have been removed. You can now hold a note past its endpoint and still receive a Critical Per...\
  Miraheze

Show all

You said: how is a slide calculated

May 23, 2026

In modern **maimai DX**, Slide notes (represented by a star that leaves a track to trace) are calculated using a unique **"combo note" structure**. While they appear as a single fluid action, the calculation engine mathematically divides a Slide into two entirely separate, independent judgment phases: **The Star Tap** and **The Slide Path**. \[[1](https://www.instagram.com/reel/DVb%5Fur-khzi/), [2](https://myaimyai.wordpress.com/2020/02/22/secret-to-sliding-well-esp-for-screen-players/)]

***

1\. Phase 1: The Star Tap (Weight = 1)

The initial spinning star that flies from the center to the edge is evaluated exactly like a standard Tap note. \[[1](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29), [2](https://myaimyai.wordpress.com/2020/02/22/secret-to-sliding-well-esp-for-screen-players/)]

- **Base Score Pool**: Worth **1 point** (out of the total chart weight).
- **DX Score Pool**: Worth up to **3 points**.
- **The Calculation**: The game checks your millisecond accuracy the exact instant you press the button or touch the sensor when the star hits the outer line. Missing this initial tap does not abort the slide, but it locks Phase 1 into a Miss. \[[1](https://gamecenter-guide.sega.com/en/arcade/musicgame-maimai/), [2](https://spiritsunite.github.io/maimai-score-details/), [3](https://argw.miraheze.org/wiki/Maimai%5FDX), [4](https://myaimyai.wordpress.com/2020/02/22/secret-to-sliding-well-esp-for-screen-players/)]

***

2\. Phase 2: The Slide Path (Weight = 3)

The trail left behind by the star is treated as a completely different type of note that evaluates your movement over time. \[[1](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29), [2](https://www.instagram.com/reel/DVb%5Fur-khzi/)]

- **Base Score Pool**: Worth **3 points** (three times the value of a regular Tap).
- **DX Score Pool**: Worth up to **3 points**.
- **The Calculation**: The game acts like an **"eraser on a timer"**. The tracking logic dictates that you must sweep through the designated touch sensor sequence and **clear the final destination point exactly when the visual star graphic finishes its sweep**. \[[1](https://www.youtube.com/shorts/EhcMNVl-4uo), [2](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29), [3](https://spiritsunite.github.io/maimai-score-details/), [4](https://argw.miraheze.org/wiki/Maimai%5FDX), [5](https://myaimyai.wordpress.com/2020/02/22/secret-to-sliding-well-esp-for-screen-players/)]

***

3\. Mechanical Rules of Slide Tracking

The internal calculation engine processes Slide Paths through strict mechanical boundaries:

- **The One-Beat Delay Rule**: The moment you hit the Star Tap, the path is locked in, but the star graphic remains frozen at the edge. It always **waits exactly one musical beat** (relative to the song's BPM) before it begins moving along the track. Tracing too early during this window will result in a penalty.
- **Sensor Skipping & Cheating**: The game checks the path sensors sequentially, but it allows for "sensor skipping". You do not have to trail the star pixel-for-pixel. You can rush through the middle of the track early, but you **must keep your hand held down on the final endpoint** until the visual star graphic catches up to your position. If you release your hand early, the path registers as a **Good** or a **Miss**. \[[1](https://www.reddit.com/r/maimai/comments/1oev0hl/can%5Fanyone%5Fhelp%5Fexplain%5Fhow%5Fcompleting%5Fslides/), [2](https://w.atwiki.jp/simai/pages/1003.html), [3](https://www.youtube.com/shorts/EhcMNVl-4uo), [4](https://www.instagram.com/reel/DVb%5Fur-khzi/), [5](https://myaimyai.wordpress.com/2020/02/22/secret-to-sliding-well-esp-for-screen-players/), [6](https://spiritsunite.github.io/maimai-score-details/)]

***

4\. How the Final Score is Weighted

The ultimate judgment shown on screen for a Slide (Critical Perfect, Perfect, Great, Good, Miss) is the combined outcome of both phases. If you execute a Slide, the math applies multipliers directly to the Base and DX score pools: \[[1](https://myaimyai.wordpress.com/2020/02/22/secret-to-sliding-well-esp-for-screen-players/), [2](https://spiritsunite.github.io/maimai-score-details/), [3](https://argw.miraheze.org/wiki/Maimai%5FDX)]

| Accuracy Result \[[1](https://argw.miraheze.org/wiki/Maimai%5FDX), [2](https://spiritsunite.github.io/maimai-score-details/)] | Base Score Multiplier | Star Tap Points | Slide Path Points | DX Score Points   |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------- | ----------------- | ----------------- |
| **Critical Perfect**                                                                                                          | **x 1.0**             | 1.0 point       | 3.0 points        | 3 + 3 = **6 pts** |
| **Perfect**                                                                                                                   | **x 1.0**             | 1.0 point       | 3.0 points        | 2 + 2 = **4 pts** |
| **Great**                                                                                                                     | **x 0.8**             | 0.8 points      | 2.4 points        | 1 + 1 = **2 pts** |
| **Good**                                                                                                                      | **x 0.5**             | 0.5 points      | 1.5 points        | 0 + 0 = **0 pts** |
| **Miss**                                                                                                                      | **x 0.0**             | 0.0 points      | 0.0 points        | 0 + 0 = **0 pts** |

Special Case: Break Slides

When a map utilizes a **Break Slide** (a flashing red-and-yellow star):

1. **The Star Tap** converts into a Break note, completely shifting its behavior to a base weight of **5 points** plus its share of the **1% Break Bonus pool**.
2. **The Slide Path** remains entirely unchanged, retaining its static standard weight of **3 base points** with no bonus pool additions. \[[1](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/), [2](https://spiritsunite.github.io/maimai-score-details/), [3](https://en.wikipedia.org/wiki/Maimai%5F%28video%5Fgame%5Fseries%29)]

Are you experiencing issues where you drop **complex overlapping slides**, or do you want to learn how the game calculates **Wi-Fi Slides** (split trails requiring two hands)? \[[1](https://www.youtube.com/shorts/EhcMNVl-4uo)]

- [link](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)\
  How are break notes calculated? : r/maimai - Reddit\
  Question & Advice. In the nonDX era, perfect breaks were 2500 points, compared to regular notes that are 500, slides 1500 etc. But...\
  Reddit
- [link](https://w.atwiki.jp/simai/pages/1003.html)\
  Notations of simai - simai \[simulator of maimai] - アットウィキ (@WIKI)\
  SLIDE (Basics & Shapes) To place a SLIDE, many parameters should be specified, such as the starting and ending button numbers, how...\
  アットウィキ
- [link](https://www.reddit.com/r/maimai/comments/1oev0hl/can%5Fanyone%5Fhelp%5Fexplain%5Fhow%5Fcompleting%5Fslides/)\
  can anyone help explain how completing slides like this works? its ...\
  It's sensor skipping. Basically for sliders, you can just hit every other sensor instead of all of them. For example, a semicircul...\
  0:09\
  Reddit·one-to-let-you-down

Show all