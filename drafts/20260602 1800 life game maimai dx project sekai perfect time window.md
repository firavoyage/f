<!-- on maimai the yellow perfect and pink/green/gray are distinct. on project sekai the "rainbow" white/purple/lime and the pink can be similar. and, on project sekai, the next one covers the prev one, which makes all the difference. -->

maimai dx and project sekai perfect time window

The precise judgment timing windows for **maimai DX** and **Project SEKAI: Colorful Stage!** differ significantly due to their platforms and arcade-vs-mobile design choices. \[[1](https://www.reddit.com/r/ProjectSekai/comments/rrfey8/why%5Fis%5Fproseka%5Fa%5Fgood%5Fgame%5Fto%5Fimprove%5Fones/)]

Here is the exact breakdown of the timing windows for both games, measured in milliseconds (ms). \[[1](https://silentblue.remywiki.com/User:MENDES/Timing)]

maimai DX Timing Windows

In _maimai DX_, the game uses standard **60Hz frame intervals** (1 frame \\(\approx \\) 16.67ms) to calculate its baseline judgment zones. Note that _maimai DX_ features a tiered scoring system specifically for **BREAK notes** to determine bonus point brackets: \[[1](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/), [2](https://www.reddit.com/r/ProjectSekai/comments/1ggrllx/whats%5Fthe%5Ftime%5Fframe%5Fto%5Fget%5Fa%5Fperfect%5Fgreat%5For/), [3](https://www.reddit.com/r/maimai/comments/qw0co3/what%5Fis%5Fmaimais%5Ftiming%5Fwindow/), [4](https://silentblue.remywiki.com/User:MENDES/Timing), [5](https://gaming.stackexchange.com/questions/294060/which-bemani-rhythm-game-in-the-arcades-has-the-strictest-timing-window)]

- **Critical Perfect**: **\\(\pm \\)16.67ms** (1 frame)
  - _Note_: This represents the highest accuracy tier. On standard notes, hitting this window rewards a Critical Perfect. On BREAK notes, this awards the maximum 2500 base points + 100 bonus points.
- **Perfect (High)**: **\\(\pm \\)33.33ms** (2 frames)
  - _Note_: This counts as a regular Perfect on standard notes. On BREAK notes, it falls into the "High Perfect" bracket (+75 bonus points).
- **Perfect (Low)**: **\\(\pm \\)50.00ms** (3 frames)
  - _Note_: This is the ultimate cutoff for a "Perfect" judgment. On BREAK notes, it falls into the "Low Perfect" bracket (+50 bonus points).
- **Great**: **\\(\pm \\)50ms to \\(\pm \\)100ms**
  - _Note_: Split into High (\\(\pm \\)66ms), Mid (\\(\pm \\)83ms), and Low (\\(\pm \\)100ms) tiers for BREAK notes.
- **Good**: **\\(\pm \\)100ms to \\(\pm \\)150ms** \[[1](https://argw.miraheze.org/wiki/Maimai%5FDX), [2](https://silentblue.remywiki.com/maimai%5FDX:1st/Changes), [3](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/), [4](https://www.reddit.com/r/maimai/comments/qw0co3/what%5Fis%5Fmaimais%5Ftiming%5Fwindow/)]

Project SEKAI Timing Windows

_Project SEKAI_ has a slightly wider and more forgiving window compared to strict arcade systems to compensate for a massive variety of mobile touchscreen hardware latencies. According to inner game-code data structures (`ingameJudgeFrames.json`), the game maps timing using the following brackets: \[[1](https://www.reddit.com/r/maimai/comments/1get5mt/dont%5Fchange%5Fyour%5Foffset/), [2](https://www.reddit.com/r/ProjectSekai/comments/rrfey8/why%5Fis%5Fproseka%5Fa%5Fgood%5Fgame%5Fto%5Fimprove%5Fones/), [3](https://www.reddit.com/r/ProjectSekai/comments/1ggrllx/whats%5Fthe%5Ftime%5Fframe%5Fto%5Fget%5Fa%5Fperfect%5Fgreat%5For/), [4](https://www.reddit.com/r/maimai/comments/11vmyez/judgment%5Ftiming%5Ffor%5Faccuracy/)]

- **Perfect**: **\\(\pm \\)40ms** (Total **80ms** sweet spot)
- **Great**: **\\(\pm \\)40ms to \\(\pm \\)100ms** (Total 120ms zone)
- **Good**: **\\(\pm \\)100ms to \\(\pm \\)150ms** (Total 100ms zone)
- **Bad**: **\\(\pm \\)150ms to \\(\pm \\)200ms** (Total 100ms zone)
- **Miss**: Anything outside **\\(\pm \\)200ms** \[[1](https://www.reddit.com/r/ProjectSekai/comments/190a604/oh/), [2](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/)]

Direct Comparison Overview

| Judgment Tier \[[1](https://www.reddit.com/r/maimai/comments/qw0co3/what%5Fis%5Fmaimais%5Ftiming%5Fwindow/), [2](https://www.reddit.com/r/maimai/comments/1bf8dll/how%5Fare%5Fbreak%5Fnotes%5Fcalculated/), [3](https://www.reddit.com/r/ProjectSekai/comments/190a604/oh/), [4](https://silentblue.remywiki.com/User:MENDES/Timing)] | maimai DX Window (Arcade) | Project SEKAI Window (Mobile) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------------------- |
| **Max / Critical Perfect**                                                                                                                                                                                                                                                                                                            | **\\(\pm \\)16.67ms**     | _N/A (Same as Perfect)_       |
| **Standard Perfect Cutoff**                                                                                                                                                                                                                                                                                                           | **\\(\pm \\)50.00ms**     | **\\(\pm \\)40.00ms**         |
| **Great Cutoff**                                                                                                                                                                                                                                                                                                                      | \\(\pm \\)100.00ms        | \\(\pm \\)100.00ms            |
| **Good Cutoff**                                                                                                                                                                                                                                                                                                                       | \\(\pm \\)150.00ms        | \\(\pm \\)150.00ms            |

Key Differences to Keep in Mind

- **The "All Perfect" Challenge**: While _Project SEKAI_ requires you to stay within \\(\pm \\)40ms for a standard All Perfect (AP), _maimai DX_ requires you to hit a tighter \\(\pm \\)16.67ms window on every single note to secure a true "Theoretical / Deluxe" **Critical All Perfect (AP+)**.
- **Hardware and Offset**: Because _Project SEKAI_ runs on mobile operating systems, your visual/audio offset parameters play a massive role in whether your physical taps align correctly within that 80ms window. In contrast, _maimai DX_ physical cabinets are highly standardized, meaning most players rely entirely on default internal system sync unless a localized touchscreen hardware delay dictates a small adjustment. \[[1](https://www.reddit.com/r/ProjectSekai/comments/1dc5v5s/what%5Fis%5Fyour%5Fspeed%5Ftiming%5Fset%5Fto/), [2](https://en.namu.wiki/w/%EB%A7%8C%EC%A0%90%20%ED%94%8C%EB%A0%88%EC%9D%B4), [3](https://www.facebook.com/groups/beatstar/posts/1154137498451687/), [4](https://www.reddit.com/r/maimai/comments/1gdy0cm/tip%5Fif%5Fyou%5Fare%5Fgetting%5Ftoo%5Fmany%5Ffasts/), [5](https://www.reddit.com/r/maimai/comments/1get5mt/dont%5Fchange%5Fyour%5Foffset/), [6](https://www.reddit.com/r/ProjectSekai/comments/190a604/oh/), [7](https://www.reddit.com/r/maimai/comments/qw0co3/what%5Fis%5Fmaimais%5Ftiming%5Fwindow/)]

If you are trying to optimize your system settings or playstyle, let me know:

- Are you struggling with **Fast/Late** drops in one specific game?

- What **note speed** settings do you currently use for both?

- Are you experiencing **audio hardware lag** (like Bluetooth earbuds)? \[[1](https://www.reddit.com/r/maimai/comments/11vmyez/judgment%5Ftiming%5Ffor%5Faccuracy/), [2](https://www.youtube.com/watch?v=6V1blFWXWlA), [3](https://www.youtube.com/watch?v=1k4z08d2uKc), [4](https://www.tiktok.com/@paradoxical.bee/video/7516079258490522923), [5](https://www.reddit.com/r/ProjectSekai/comments/1dc5v5s/what%5Fis%5Fyour%5Fspeed%5Ftiming%5Fset%5Fto/), [6](https://www.reddit.com/r/maimai/comments/1get5mt/dont%5Fchange%5Fyour%5Foffset/)]

- [link](https://www.reddit.com/r/maimai/comments/qw0co3/what%5Fis%5Fmaimais%5Ftiming%5Fwindow/)\
  What is maimai's timing window? - Reddit\
  Nov 17, 2021 — Critical Perfect: 1 frame. Perfect: ± 1 frame error from crit. Great: ± 2 frames. Good: ± 3 frames.\
  Reddit·r/maimai

- [link](https://www.reddit.com/r/maimai/comments/1get5mt/dont%5Fchange%5Fyour%5Foffset/)\
  Don't change your offset : r/maimai - Reddit\
  Oct 29, 2024 — This means that a 1.0 change in offset represents only 16% of the perfect window. So if you aren't consistently AP'ing everything ...\
  Reddit·r/maimai

- [link](https://www.reddit.com/r/ProjectSekai/comments/1ggrllx/whats%5Fthe%5Ftime%5Fframe%5Fto%5Fget%5Fa%5Fperfect%5Fgreat%5For/)\
  Whats the time frame to get a perfect, great, or good? - Reddit\
  Oct 31, 2024 — https://github.com/Sekai-World/sekai-master-db-diff/blob/main/ingameJudgeFrames.json is the only source ive seen for it. frame dat...\
  Reddit·r/ProjectSekai

Show all