# does ogs record playtime

**No, the Online Go Server (OGS) does not record or display a player's total cumulative playtime.**

While the platform tracks extensive data regarding your matches, it lacks a native feature to show exactly how many total hours or minutes you have spent on the website or inside games.

### What OGS Does Track

Even though it does not log your total hours, you can still view precise timing data related to individual games:

- **Game-Specific Clocks:** OGS meticulously records the exact date, time, and specific time controls used for every match you play.
- **Move-by-Move Timing:** The system tracks how many seconds you spend on each individual move during a match.
- **Player Statistics:** Your public profile tracks your total number of games played, win/loss ratios, historical rank progression, and pie charts of the board sizes you prefer. [link](https://www.reddit.com/r/baduk/comments/1bngwdq/a%5Ftool%5Fto%5Fvisualize%5Ftime%5Fspent%5Fon%5Fmoves%5Fogs%5Fonly/)

### Community Workarounds

If you are looking to visualize your time or analyze your habits, players use a few third-party solutions:

- **Move Timing Bookmarklets:** You can use open-source tools like the OGS Move Timing visualizer to generate graphs showing exactly how much time you spent thinking on each turn of a completed match. [link](https://www.reddit.com/r/baduk/comments/1bngwdq/a%5Ftool%5Fto%5Fvisualize%5Ftime%5Fspent%5Fon%5Fmoves%5Fogs%5Fonly/)
- **Estimating Total Time:** Many users manually estimate their lifetime play hours by multiplying their total completed game count by the average duration of their preferred time control (e.g., estimating 45 minutes per Normal 19x19 live game). [link](https://durhamgo.club/bga-temp/ogs-instructions.html)

If you are trying to find a specific statistic on your profile or want to understand how a certain time control works, let me know! I can help you break down **Fischer, Byo-yomi, or Canadian timing rules**.

- [link](https://ogs.readme.io/docs/time-control)\
  Time control - Getting Started - ReadMe\
  Putting it all together. Ultimately the goal of understanding the OGS time control system is so you can display a clock showing ho...\
  ReadMe
- [link](https://durhamgo.club/bga-temp/ogs-instructions.html)\
  OGS - Durham Go Club\
  If you want to be given an opponent. You can also use the OGS Automatch system - this will try to match you with someone else in t...\
  Durham Go Club
- [link](https://www.reddit.com/r/baduk/comments/1bngwdq/a%5Ftool%5Fto%5Fvisualize%5Ftime%5Fspent%5Fon%5Fmoves%5Fogs%5Fonly/)\
  A tool to visualize time spent on moves (OGS only) : r/baduk\
  Mar 25, 2024 — A tool to visualize time spent on moves (OGS only). I'm trying to break a tendency where I play quickly when my opponent plays qui...\
  Reddit·r/baduk

Show all

# does ogs track move by move timing

## does ogs track move by move timing

<mark><strong><span>Yes, the Online Go Server (OGS) does track move-by-move timing internally, but it does not display it in the default game interface</span></strong></mark>**.** [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)

While you cannot see a time stamp next to each move when standardly reviewing a game, the timing data exists in milliseconds behind the scenes and can be accessed using external tools or the developer console. [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)

### How to View Move Timings on OGS

If you want to visualize how much time you or your opponent spent on every single move, you have two primary options:

- **Use a Community Bookmarklet:** You can use the third-party [OGS Move Timing Bookmarklet](https://psalaets.github.io/ogs-move-timing/). Once installed in your browser bar, you can open any finished OGS game, click the bookmark, and a bar chart displaying the time spent per move will appear in the right sidebar. [link](https://psalaets.github.io/ogs-move-timing/)
- **Access the OGS API:** For a raw look at the data, you can append a game's ID to the official API URL: `https://online-go.com`. The raw JSON data stores clock information directly within the move history variables. [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)
- **Use the Browser Console:** While on a game page, you can open your browser's inspect/developer tool and type `window["global_goban"].engine.moves` into the JavaScript console to pull up the recorded array of move data. [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)

If you want to track down a specific game to try this on, would you like help **navigating your OGS profile** or **interpreting raw JSON clock data**?

- [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)\
  Feature Request: Add Clock time on moves - OGS Development\
  Mar 23, 2021 — I think kgs might have that feature, if it isn't there. It might be fairly handy (again if it isn't there), for me I'm actually ve...\
  online-go.com
- [link](https://www.reddit.com/r/baduk/comments/1bngwdq/a%5Ftool%5Fto%5Fvisualize%5Ftime%5Fspent%5Fon%5Fmoves%5Fogs%5Fonly/)\
  A tool to visualize time spent on moves (OGS only) : r/baduk\
  Mar 25, 2024 — Would it be possible to combine the time graph with AI analysis? This would enable me to find mistakes, I make without much thinki...\
  Reddit·r/baduk
- [link](https://forums.online-go.com/t/move-times-when-reviewing-games/58218)\
  Move times when reviewing games - OGS Development\
  Sep 12, 2025 — Is there a way to see the move times and the clocks of players when replaying games? This would be very important information when...\
  online-go.com

Show all

## why

OGS tracks move-by-move timing internally for two main reasons: **cheat prevention** and **data integrity**.

### 1. Anti-Cheat and AI Detection

The server must log the exact millisecond a move is made to catch players using Artificial Intelligence (AI) assistance.

- **Bot Patterns:** AI assistance software often submits moves at highly consistent intervals or inhumanly fixed speeds.
- **Human Latency:** Real humans take varying amounts of time to look at the board, move their mouse, and click.
- **Analysis:** OGS's anti-cheat algorithms analyze these exact time intervals behind the scenes to flag suspicious behavior.

### 2. Clock Synchronization and Disconnections

Go clocks can be complex (like Byo-Yomi or Fischer timing), and online lag can cause discrepancies between your screen and the server.

- **Fair Disputes:** If a player disconnects, the server uses the exact recorded timestamps to determine if they actually ran out of time or if a server error occurred.
- **Accurate Resumes:** If a paused game is resumed days later, the server needs the precise millisecond state of the clock to restore the game perfectly.

### Why It Is Hidden by Default

The developers do not show this data on the standard interface simply to keep the screen **clean and uncluttered**. Most players only care about their total remaining time during a live match, rather than a historical list of timestamps.

If you are looking to analyze a specific game, would you like to know how to **install the timing bookmarklet** or how to **read the raw API data**?

## why hidden

OGS hides move-by-move timing from the default interface to **prevent cheating**, **save screen space**, and **optimize server performance**.

### 1. Cheat Prevention (Information Asymmetry)

Showing exact timing data during or immediately after a game gives malicious players an advantage.

- **AI Hiding:** If an AI cheater can see the exact millisecond signatures the server displays, they can adjust their bot to mimic human delay patterns.
- **Psychological Edge:** Seeing an opponent's exact thinking time per move reveals their hesitation points, local blind spots, and reading speed.

### 2. User Interface Minimalist Design

The OGS developer philosophy prioritizes a clean, distraction-free board.

- **Visual Clutter:** A side panel constantly ticking down with custom milliseconds for 200+ moves crowds out the chat and move history.
- **Player Focus:** Most Go players only need to know their total remaining time during a live match, not their historical pace.

### 3. Server Performance and Bandwidth

Sending detailed millisecond tracking data to thousands of open browser tabs simultaneously is resource-heavy.

- **Streamlined Data:** OGS pushes only critical game state changes to the live viewer to prevent lag.
- **On-Demand Fetching:** The full time-log is kept safely in the database, only to be fetched via API when specifically requested.

Would you like to know how to **pull this data** for a specific game ID, or are you interested in how OGS handles **anti-cheat reports**?

## why lichess does

**[Lichess](https://lichess.org/faq) chooses to display move-by-move timing data because its community places a heavy emphasis on post-game statistical analysis and "time management" training.** [link](https://lichess.org/forum/lichess-feedback/enhancing-the-lichess-post-game-analysis-experience-move-time-and-computer-analyses)

Unlike the minimalist approach seen in Go servers like OGS, chess platforms treat time spent per move as a vital metric for improving a player's skills. [link](https://lichess.org/forum/lichess-feedback/enhancing-the-lichess-post-game-analysis-experience-move-time-and-computer-analyses)

### 1. Training "Time Management"

In chess, learning _when_ to think is considered a core skill. [link](https://lichess.org/@/NDpatzer/blog/science-of-chess-knowing-when-to-think-and-when-to-just-move/KZ98ZqD7)

- **Spotting Blunders:** Looking at a Lichess move-time chart allows you to see if you blundered because you rushed, or if you spent three minutes on a move and still got it wrong.
- **Identifying Time-Wasting:** It helps players identify positions where they spent too long agonizing over an obvious or forced move. [link](https://lichess.org/@/NDpatzer/blog/science-of-chess-knowing-when-to-think-and-when-to-just-move/KZ98ZqD7)

### 2. Built-In Graphical Analysis

Because chess moves are short and structured, Lichess can easily generate a clean, automated **"Move Times" bar chart** under the analysis tab of every completed game. This makes the data highly readable and engaging without cluttering the live, active game interface. [link](https://www.reddit.com/r/chess/comments/1aj52l2/lichess%5Fvs%5Fchesscom%5Fui/)

### 3. Open Data Philosophy

Lichess is a free, open-source platform driven by a philosophy of full data transparency. They openly share anonymous move-timing data with researchers and users, believing that the educational value to the player outweighs the risks of exposing that data. [link](https://lichess.org/@/NDpatzer/blog/science-of-chess-knowing-when-to-think-and-when-to-just-move/KZ98ZqD7)

### 4. Different Cheat Prevention Methods

While OGS keeps time hidden partly to keep AI cheaters in the dark, Lichess handles anti-cheat differently. They have a massive, highly sophisticated server-side detection system that analyzes behavior in ways that displaying a simple clock chart doesn't compromise. [link](https://lichess.org/forum/general-chess-discussion/why-you-should-report-cheaters?page=7)

Would you like to know how to **find the move-timing chart** on a Lichess game, or see how to **export chess game files (PGNs)** with time stamps included?

- [link](https://lichess.org/@/NDpatzer/blog/science-of-chess-knowing-when-to-think-and-when-to-just-move/KZ98ZqD7)\
  Lichess.org\
  NDpatzer's Blog • Science of Chess: Knowing when to think (and when to just move) • lichess.org\
  Apr 18, 2026 — (2025) examined how players spend time thinking about moves in online chess. The study used a large database of Lichess games, inc...
- [link](https://lichess.org/forum/general-chess-discussion/why-you-should-report-cheaters?page=7)\
  Lichess.org\
  Why you should report cheaters - Lichess.org\
  Dec 9, 2017 — Why you should report cheaters \* mdinnerspaceedited 8 years ago. @streetfirer. Abusers do not have their accounts deleted by staff...
- [link](https://www.chess.com/blog/VaultTech/lichess-vs-chess-com-battle-of-the-top-2-chess-websites)\
  Chess.com\
  Lichess vs Chess.com, Battle of the Top 2 Chess Websites\
  Dec 2, 2020 — Price. According to the lichess about page, lichess is a free and open-source site powered by volunteers and donations. A lot of p...

Show all

## why ogs hides

**The Online Go Server (OGS) hides move-by-move timing from the default user interface primarily due to standard Go culture, technical limitations of the Smart Game Format (.sgf), and strict visual minimalism.** [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)

Unlike chess platforms which embrace complex statistical timelines, the developers and community at OGS intentionally keep this data behind the scenes for several distinct reasons:

### 1. Traditional Go Culture and Etiquette

In the game of Go, a player's thinking time is traditionally viewed as a personal, internal resource.

- **Focus on the Board:** Historically, over-the-board Go focuses purely on the spatial relationship of the stones. Revealing a breakdown of your opponent's exact thinking patterns (e.g., showing they spent 4 minutes agonizing over a simple local response) is seen by some traditionalists as providing unnecessary psychological data that distracts from the pure tactical game.
- **No Built-in History:** In standard real-life Go tournaments, players use physical clocks, but the move-by-move time is rarely recorded on the game sheet (Kifu), unlike in chess where players must manually write down the times. OGS mirrors this traditional "clean slate" review style.

### 2. Limitations of the Standard Go File Format (.sgf)

The universal file format used to save, download, and share Go games across different websites and software is the **Smart Game Format (.sgf)**. [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)

- **No Standard Time Properties:** The baseline `.sgf` standard does not possess a universal, universally recognized tag to store exact millisecond timestamps for every individual move. [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)
- **Compatibility Issues:** Because adding custom time metadata breaks compatibility with older, third-party Go editing applications (like MultiGo or Sabaki), OGS keeps its custom timing array hidden in its internal API database rather than making it a prominent feature of the download package. [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)

### 3. Aggressive Interface Minimalism

The OGS design philosophy heavily prioritizes a highly clean, distraction-free environment. [link](https://forums.online-go.com/t/getting-started-on-ogs/53947?page=2)

- **Avoiding UI Clutter:** Go games routinely last anywhere from 150 to over 300 moves. Adding a live list or graph of ticking timestamps next to every single branch of a complex move tree drastically clutters the sidebar, squeezing out space for player chat, the move list, and AI win-rate graphs.
- **Low Demanded Feature:** OGS developers have noted in [community feature requests](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181) that while the data is tracked internally, building and maintaining a native graph UI for it is a low priority because the vast majority of players only look at total remaining time. [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)

If you are trying to analyze your pacing, would you like help installing the third-party **[OGS Move Timing Bookmarklet](https://psalaets.github.io/ogs-move-timing/)** to see the hidden data visually, or would you like to explore **how to pull the raw data using your browser's console**? [link](https://forums.online-go.com/t/feature-request-add-clock-time-on-moves/35181)

- [link](https://forums.online-go.com/t/getting-started-on-ogs/53947?page=2)\
  online-go.com\
  Getting started on OGS - Page 2 - Support\
  Nov 28, 2024 — Goals/assumptions: \* Default for beginners are simple. \* Curious beginners or users with preferences will naturally seek the gear ...
- [link](https://psalaets.github.io/ogs-move-timing/)\
  GitHub Pages documentation\
  ogs-move-timing Bookmarklet\
  Usage \* Open a (finished) game on OGS. \* Click the bookmark you made during the Installation step. \* A bar chart will appear in th...
- [link](https://forums.online-go.com/t/inconsistent-game-time-across-time-controls/49131)\
  online-go.com\
  Inconsistent game time across time controls - OGS Development\
  Sep 18, 2023 — For one, the buttons say things like “~30 seconds per move” on them which becomes grossly inaccurate if one time control is twice ...

Show all

## can sgf store start and finish utc

<mark><strong><span>Yes, SGF files can technically store start and finish UTC timestamps, but they do so through custom, non-standard application tags rather than the official specification.</span></strong></mark>

While the standard format accommodates a date, handling precise, machine-readable start and finish UTC times requires modern extensions.

### 1. The Official Standard Way: The `DT` Tag

The official [Smart Game Format (SGF) FF\[4\] specification](https://www.red-bean.com/sgf/user%5Fguide/index.html) defines the **`DT` (Date)** property to record when a game took place. [link](https://homepages.cwi.nl/~aeb/go/misc/sgfnotes.html)

- **The Rule:** The official standard requires the date to be written in ISO 8601 format (YYYY-MM-DD).
- **The Limitation:** The standard `DT` field was explicitly designed to hold just the _date_, not a high-precision time. While some servers append a time (e.g., `DT[2026-08-10 11:40:00]`), this violates strict SGF validation rules and can cause errors in strict SGF parsers. [link](https://homepages.cwi.nl/~aeb/go/misc/sgfnotes.html)

### 2. Storing Start and Finish Times via Extensions

Because the standard `DT` tag is inadequate for logging exact tournament or server times, Go servers and modern apps use **custom root properties** to track exact UTC start and finish timestamps:

- **Custom Tags:** It is entirely valid in SGF architecture to create new tags. Servers will often inject custom metadata properties such as `ST[...]` for start time and `ET[...]` for end time, or use a customized JSON-metadata block embedded in the file.
- **The Move-by-Move Hack:** SGF natively supports recording time _during_ the game using the `BL` (Black Time Left) and `WL` (White Time Left) tags on individual moves. By subtracting the final move's `BL`/`WL` value from the initial game clock setting, a script can mathematically deduce exactly when a game finished relative to its start time.

If you are writing a script or parsing game files, would you like to know **how to extract custom time data using Python** or how to **format your own custom SGF tags safely**?

- [link](https://homepages.cwi.nl/~aeb/go/misc/sgfnotes.html)\
  cwi.nl\
  Notes on the SGF format - CWI\
  The FF\[4] requirement to give dates in ISO standard form has led people to write dates like "the 1st day of the 9th intercalary mo...
- [link](https://forums.online-go.com/t/store-display-timestamps-for-each-move/38305)\
  online-go.com\
  Store & display timestamps for each move - Online Go Forum\
  Jul 27, 2021 — ... When reviewing tournament games played over OGS for possible cheating, it can be useful to match timestamps in the game vs vid...
- [link](https://en.wikipedia.org/wiki/ISO%5F8601)\
  Wikipedia\
  ISO 8601 - Wikipedia\
  Table\_title: ISO 8601 Table\_content: | Date in UTC | 2026-08-07 | | --- | --- | | Date and time in UTC | 2026-08-07T15:11:02Z 2026...

Show all

## why ogs only records the date when exported

<mark><strong><span>OGS only exports the plain date in its SGF files to enforce strict compatibility with outside software and preserve the universal standard of the Go community</span></strong></mark>**.** [link](https://forums.online-go.com/t/sgf-file-format/4151)

Even though custom tags can technically force start and finish times into an SGF, the OGS development team prioritizes a clean, globally accepted file that works everywhere without throwing errors.

### 1. The Strict ISO `DT` Standard

The universal Smart Game Format (SGF) rules state that the Date (`DT`) tag must follow a very specific formatting pattern (usually just `YYYY-MM-DD`).

- **Parser Crashes:** Many older or strictly coded desktop Go programs (such as Sabaki, MultiGo, or various mobile Go viewers) will fail to read or completely crash if they scan a `DT` tag containing clock metadata like hours, minutes, or time zones (e.g., `DT[2026-08-10 11:40:00 UTC]`).
- **Universal Files:** OGS strips the file down to _just_ the date so that your downloaded `.sgf` behaves perfectly when opened in literally any external software program on the market. [link](https://forums.online-go.com/t/sgf-file-format/4151)

### 2. Avoiding "Custom Tag" Fragmentation

While a server can invent its own tags (like `ST` for start time or `ET` for end time), there is no official consensus in the global Go community on what those tags should look like.

- **Useless Text Bloat:** Since third-party software wouldn't know how to read OGS-specific custom tags anyway, those extra timestamps would show up to players as meaningless raw text errors or ignored clutter inside their local editing tools.

### 3. Server Architecture Separates SGF from Metadata

OGS treats `.sgf` generation as a simple export process meant to capture the _game record_ (the tactical stones played), not the server's logistical database history.

- **Data Privacy & Overhead:** Things like precision start times, exact end times, and exact player IP latency markers are categorized as internal web infrastructure data rather than a property of a traditional Go match.

If you are building an archive or analyzing your games, I can show you how to **query the OGS API to get exact UTC timestamps** or how to **write a script that pairs your exported SGFs with their real server metadata**. Which would you prefer?

- [link](https://forums.online-go.com/t/can-we-get-an-sgf-database-dump/38837)\
  online-go.com\
  Can we get an SGF database dump? - OGS Development\
  Aug 29, 2021 — UPDATES. OK, the SGF conversion is complete. All games are available for download as SGF files or as JSON files. My current organi...
- [link](https://forums.online-go.com/t/sgf-file-format/4151)\
  online-go.com\
  SGF File Format - Support - Online Go Forum - OGS\
  Apr 12, 2015 — Smart Game Format (SGF) is a loosely defined file format, and as such, there are many varieties depending on the application that ...

