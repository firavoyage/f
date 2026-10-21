<!-- "dsa" -->

# competitive programming wikis

## competitive programming wikis

Here are the most popular and comprehensive wiki resources dedicated to **competitive programming** algorithms, data structures, and contest preparation:

### 🌐 Dedicated Competitive Programming Wikis

- CP-Algorithms: **The gold standard** English translation and expansion of the famous Russian `e-maxx` project. It provides massive, highly detailed breakdowns of mathematical, geometric, and string algorithms with ready-to-use C++ implementations. [link](https://cp-algorithms.com/)
- OI Wiki (English) / OI Wiki (Chinese): Originally built as a central guide for the Chinese Informatics Olympiad (OI), this community-driven wiki has grown into one of the largest knowledge bases in the world. The English version translates its deep dives into advanced algorithms, complete with specific problem examples and online judge links. [link](https://codeforces.com/blog/entry/64996)
- [AlgoWiki](https://wiki.algo.is/): A dedicated competitive programming wiki created by SuprDewd. It focuses significantly on aggregating niche data structures, specialized tricks, and curation tables for practicing specific topics. [link](https://codeforces.com/blog/entry/50528)
- [CP Wiki](https://cp-wiki.vercel.app/en/): A lightweight, open-source guide structured like a wiki that walks users through foundational roadmaps, platform setups, and standard algorithmic topics.

### 🏫 Specialized & Regional Wikis

- USACO Guide: While designed as a structured curriculum rather than a traditional wiki, this is an essential, exhaustive wiki-style handbook tailored for the US Computing Olympiad. It covers four distinct division levels (Bronze to Platinum). [link](https://icpc.cs.ubc.ca/resources)
- [Metakgp Wiki - Competitive Programming](https://wiki.metakgp.org/w/Competitive%5FProgramming): An excellent example of a college-specific wiki (maintained by IIT Kharagpur students) that maps out general CP syntax roadmaps, tips, and external resource collections. [link](https://wiki.metakgp.org/w/Competitive%5FProgramming)

### 📚 General & Platform References

- [Wikipedia - Competitive Programming Category](https://en.wikipedia.org/wiki/Category:Programming%5Fcontests): Useful for high-level overviews of tournament history, rules, and structures for global competitions like the ICPC, IOI, and Meta Hacker Cup.
- Codeforces Catalog: Codeforces doesn't host a standard "wiki" namespace, but its **Edu section** and community-tagged blogs function as a crowdsourced wiki for cutting-edge techniques and problem analysis. [link](https://en.wikipedia.org/wiki/Category:Programming%5Fcontests)

Are you looking for a wiki to **learn a specific algorithm** (like string matching or segment trees), or are you looking for a **structured roadmap** to guide you from beginner to advanced?

- [link](https://cp-algorithms.com/)\
  Algorithms for Competitive Programming\
  Algorithms for Competitive Programming: Main Page\
  Apr 17, 2024 — The goal of this project is to translate the wonderful resource https://e-maxx.ru/algo which provides descriptions of many algorit...
- [link](https://codeforces.com/blog/entry/50528)\
  Codeforces\
  AlgoWiki: A wiki dedicated to competitive programming\
  A wiki dedicated to competitive programming ・ prioritize algorithms/data structures/techniques ・ useful for learning/practicing th...
- [link](https://wiki.algo.is/)\
  AlgoWiki\
  Welcome to AlgoWiki! | AlgoWiki\
  Welcome to AlgoWiki, a wiki dedicated to competitive programming. See Categories for a list of categories. check out other competi...

Show all

## compare

To help you choose the best reference, here is a direct comparison of the top competitive programming wikis based on their target audience, depth of content, and primary strengths:

| Wiki              | Target Audience                | Primary Focus                                            | Key Strengths                                                            |
| ----------------- | ------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| **CP-Algorithms** | Intermediate to Advanced       | Deep math, geometry, and advanced algorithms             | Ready-to-use **C++ implementations** and rigid mathematical proofs.      |
| **OI Wiki**       | All Levels (Beginner to Elite) | Olympiad-style problems and extensive data structures    | **Massive coverage** of niche topics and excellent problem links.        |
| **USACO Guide**   | Beginners to Advanced          | Sequential, division-based learning path                 | **Highly structured roadmap** with quizzes and progress tracking.        |
| **AlgoWiki**      | Intermediate                   | Code snippets, standard tricks, and resource aggregation | Great for **quick code references** and specific data structure lookups. |

Would you like to narrow this down based on your **current skill level**, or is there a **specific topic** (like graph theory or dynamic programming) you want to look up right now?

## how to find the knowledge needed for specific problems on a wiki

To find the exact knowledge you need for a specific problem using a wiki, you should <mark>map the problem's constraints and patterns to known algorithmic concepts</mark>.

### 1. Reverse-Engineer the Constraints (The Biggest Clue)

Before searching a wiki, look at the input constraints (N). They almost always dictate the required time complexity, which narrows down your wiki search terms:

- **N ≤ 10 or 11**: Search for **Bitmask DP** or **Permutations / Brute Force**.
- **N ≤ 20**: Search for **Dynamic Programming with Bitmask** or **Meet-in-the-middle**.
- **N ≤ 2,000**: Search for **O(N²) algorithms** (e.g., Matrix DP, Floyd-Warshall, basic loops).
- **N ≤ 2 ⋅ 10⁵**: Search for

**𝑂**

**(**

**𝑁**

**log**

**𝑁**

**)**

**algorithms** (e.g., Segment Trees, Binary Index Trees, Sorting + Binary Search).

- **N ≤ 10⁷ or larger**: Search for **O(N) or**

**𝑂**

**(**

**log**

**𝑁**

**)**

**algorithms** (e.g., Two Pointers, Prefix Sums, Math/Number Theory formulas).

### 2. Identify Keywords from the Problem Statement

Translate the story in the problem into standard computer science terminology to use as wiki search queries:

- _“Find the shortest path visiting all cities...”_ → Search for **Traveling Salesperson Problem** or **Bitmask DP**.
- _“Query the minimum value in a changing range...”_ → Search for **Segment Tree** or **Fenwick Tree**.
- _“Find how many times string A appears in string B...”_ → Search for **KMP Algorithm** or **Z-algorithm**.
- _“Connect all points with the minimum total cost...”_ → Search for **Minimum Spanning Tree (Kruskal's / Prim's)**.

### 3. Use the "Platform-to-Wiki" Lookup Strategy

If you are stuck on a specific problem from an online judge, you can use external platforms to tell you exactly what wiki pages to read:

- **Codeforces Tags:** Look at the bottom-right corner of the problem page (after hiding solved tags if you don't want spoilers). If it says `graphs` and `data structures`, go to CP-Algorithms or OI Wiki and look specifically under the "Graphs" or "Advanced Data Structures" sections.
- **The USACO Guide Problem Database:** USACO Guide indexes thousands of problems from Codeforces, CSES, and USACO. Search the problem name in their search bar. It will tell you exactly which module (e.g., "Euler Tour" or "Sliding Window") the problem belongs to, complete with links to the required reading.

### 4. Leverage Advanced Site-Searching

Many wiki internal search bars can be clumsy. Use Google to search within the specific wiki using the `site:` operator alongside your keywords or error codes.

- _Example:_ `site:cp-algorithms.com "lowest common ancestor"`
- _Example:_ `site:oi-wiki.org "centroid decomposition"`

Do you have a **specific problem** you are trying to solve right now? If you share its **constraints and a summary**, I can tell you exactly which wiki topics to look up.

# how well is oi wiki in en

## how well is oi wiki in en

The **English version of OI Wiki** is <mark>an incredibly valuable but<span> </span><strong>highly incomplete resource</strong></mark> compared to its original Chinese counterpart. [link](https://en.oi-wiki.org/intro/about/)

While the original [Chinese OI Wiki](https://en.oi-wiki.org/) is widely considered one of the most comprehensive, high-quality, and community-driven knowledge bases for competitive programming and Olympiad in Informatics (OI), its English translation is still a work in progress.

### Current State of OI Wiki in English

- **Incomplete Translation Coverage:** Large sections of the wiki remain untranslated or exist as stubs. While foundational topics (like basic sorting, math, and introductory data structures) are mostly available, advanced topics or niche algorithmic optimizations are often missing or link back to empty pages. [link](https://en.oi-wiki.org/intro/about/)
- **Community-Driven Translation:** The project relies entirely on volunteers. The translation progress can be slow, and the language quality varies from page to page. Some articles read smoothly, while others are rough translations from the original Chinese text. [link](https://codeforces.com/blog/entry/64996)
- **Open Source Model:** The platform is hosted transparently on GitHub. This makes it highly accessible for anyone looking to fix errors, format code, or submit new translated pages. [link](https://en.oi-wiki.org/intro/about/)

### Direct Comparison: Original vs. English Version

| Feature              | Original Chinese OI Wiki                                                               | English OI Wiki                                                                        |
| -------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Completeness**     | **Near-complete**; massive library covering basic to cutting-edge research algorithms. | **Incomplete**; mostly covers core fundamentals and standard templates.                |
| **Code Examples**    | High-quality C++ implementations with deep analysis.                                   | Same high-quality code blocks, but accompanying text explanations are often truncated. |
| **Update Frequency** | Constantly updated by a large community of active competitive programmers.             | Intermittent updates based on independent volunteer contributions.                     |

### Should You Use It?

If you are looking for a quick reference to standard algorithm templates or basic data structure explanations, the English OI Wiki is a solid companion. [link](https://codeforces.com/blog/entry/64996)

However, if you hit a wall with missing pages on advanced topics, you will get much better results by using a browser translation plugin on the main Chinese site or pivoting to alternative English platforms like the CP-Algorithms guide or the USACO Guide.

Are you looking to learn a **specific competitive programming topic** right now, or are you interested in **contributing to the translation project**? I can guide you to the right pages or alternative platforms.

- [link](https://en.oi-wiki.org/intro/about/)\
  OI Wiki\
  About the project\
  We host the content on GitHub. the current progress is only 88% completed (re-counted on 2019.08), we are soliciting and recruitin...
- [link](https://codeforces.com/blog/entry/64996)\
  Codeforces\
  OI Wiki: A wiki dedicated to competitive programming\
  articles and interesting resources related to competitive programming. algorithm/data-structure/techniques/problems/articles you e...
- [link](https://www.zhihu.com/en/answer/3553823738)\
  www.zhihu.com\
  How to evaluate oi-wiki?-zhihu - 知乎\
  Advantages: The content is abundant, providing considerable help for OIers without resources, and by organizing them together, it ...

## what wikis do en players use

Because there isn't a single, all-encompassing "Wikipedia" for English-speaking competitive programming (CP) players, the community relies on a mix of highly structured guides, translated algorithmic repositories, and specialized reference wikis. [link](https://icpc.cs.ubc.ca/resources)

The most popular platforms and text-based resources English players use include:

### 1. The Heavy Hitters (De Facto Wikis)

- **[CP-Algorithms](https://cp-algorithms.com/):** This is the closest equivalent to a master wiki for English speakers. It began as an open-source English translation of **e-maxx.ru** (a legendary Russian CP resource). It features clean C++ implementations, strict mathematical proof write-ups, and a list of practice problems for almost every algorithm. [link](https://github.com/utkarsh512/Everything-for-CP)
- **[USACO Guide](https://usaco.guide/):** Created by top-tier competitors, this is a highly structured, interactive textbook/wiki. It divides competitive programming into clear skill tiers (Bronze to Platinum/Advanced) and aggregates tutorial pages, modules, and curated practice tasks from platforms like Codeforces and CSES. [link](https://www.reddit.com/r/Btechtards/comments/1dv6ttx/competitive%5Fprogramming%5Fresources%5Fthat%5Fi%5Ffound/)

### 2. Specialized & Reference Wikis

- **[cppreference](https://en.cppreference.com/):** While not a tutorial site, this is the absolute standard reference wiki for C++ players. During major competitions (like the ICPC), local or offline copies of `cppreference` are often the only external technical resources players are legally permitted to access.
- **[AlgoWiki](https://wiki.algo.is/):** A community-driven wiki dedicated strictly to archiving and organizing competitive programming resources, specialized blogs, and lesser-known math/geometry handbooks. [link](https://codeforces.com/blog/entry/50528)
- **[Eduard's Blog / Codeforces Edu](https://codeforces.com/edu/courses):** While hosted on a contest platform, the _Edu_ section and the heavily upvoted tutorial blogs on Codeforces function as a crowd-sourced wiki where the world's best players post deep-dives into niche algorithms.

### 3. Quick Comparison of English Resources

| Platform                                            | Best Used For                                                            | Format                  |
| --------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------- |
| **CP-Algorithms**                                   | Looking up a specific mathematical algorithm or data structure template. | Algorithm Reference     |
| **USACO Guide**                                     | Step-by-step learning progression with curated problem paths.            | Structured Curriculum   |
| **[GeeksforGeeks](https://www.geeksforgeeks.org/)** | Quick introductions to fundamental computer science concepts.            | General Coding Articles |
| **Competitive Programmer's Handbook**               | A downloadable PDF "wiki" covering essential CP concepts cleanly.        | Free E-Book             |

Are you looking for resources to **study specific advanced concepts** (like suffix automata or heavy-light decomposition), or are you looking for a **beginner-friendly roadmap** to start climbing the ranks?

- [link](https://github.com/utkarsh512/Everything-for-CP)\
  GitHub\
  A curated list of awesome Competitive Programming ... - GitHub\
  E-Maxx (Russian), (English), A tutorial website widely used and referenced in the Russian-speaking competitive programming communi...
- [link](https://codeforces.com/blog/entry/50528)\
  Codeforces\
  AlgoWiki: A wiki dedicated to competitive programming\
  AlgoWiki: A wiki dedicated to competitive programming … problems, articles, and competitive programming resources. I decided to tu...
- [link](https://www.reddit.com/r/Btechtards/comments/1dv6ttx/competitive%5Fprogramming%5Fresources%5Fthat%5Fi%5Ffound/)\
  Reddit·r/Btechtards\
  Competitive Programming resources that I found useful (and ...\
  July 4, 2024 — The USACO Guide is an exhaustive and highly effective resource for Competitive Programming, offering structured topic explanations...

Show all

## how popular is each

Among English-speaking players, the popularity of these resources varies significantly based on their primary function. Some serve as go-to diagnostic references, while others act as structured training academies.

A breakdown of how popular and widely used each resource is within the global English-speaking community reveals the following:

### 1. The Titan Tier (Ubiquitous & Highly Popular)

- **[CP-Algorithms](https://cp-algorithms.com/):** **Universally popular.** It is the most relied-upon pure algorithmic wiki in the English-speaking world. Community surveys on platforms like [Codeforces](https://codeforces.com/) consistently rank it as a primary external tutorial site alongside platform editorials. If a player forgets the exact math or structure for an algorithm during a practice session, CP-Algorithms is usually the very first site they search. [link](https://codeforces.com/blog/entry/83875)
- **[USACO Guide](https://usaco.guide/):** **Extremely popular among active learners.** While originally built for the US Olympiad, it has exploded in global popularity. It is widely considered the gold standard for anybody actively trying to rank up from "Newbie" to "Master" tiers. Its step-by-step nature makes it far more popular for daily curriculum training than static wikis. [link](https://codeforces.com/blog/entry/80438)

### 2. The Standard Utilities (Niche but Essential)

- **[cppreference](https://en.cppreference.com/):** **Mandatory but situational popularity.** Every competitive programmer coding in C++ uses it, making its utility near 100%. However, it isn't "popular" in the sense of being a fun community hub; it is treated like a dictionary. Its popularity peaks during official, high-stakes onsite contests (like ICPC or IOI) because it is often the only reference site allowed offline. [link](https://codeforces.com/blog/entry/20525)
- **Competitive Programmer's Handbook (by Antti Laaksonen):** **Highly popular for beginners.** Instead of visiting a wiki, thousands of English-speaking university students download this specific PDF as their introduction to CP concepts. It is frequently recommended in "How do I start?" threads across Reddit and Codeforces. [link](https://www.cs.purdue.edu/homes/ninghui/courses/cp%5Fresources.html)

### 3. Low to Moderate Popularity (Niche or Outdated)

- **[OI Wiki (English Version)](https://en.oi-wiki.org/):** **Low popularity.** Because the English translation is heavily incomplete, English players rarely use it as a primary resource. However, its _original Chinese version_ is massive; English players will occasionally use a web translator to read the Chinese site if they need niche concepts not found elsewhere.
- **[AlgoWiki](https://wiki.algo.is/):** **Very low popularity.** It functions mostly as an archive of links rather than hosting its own content, so it has largely been overshadowed by the interactive modules on the USACO Guide and specific Codeforces Edu blogs. [link](https://codeforces.com/blog/entry/80438)

Would you like to know which of these resources is best suited for your current **skill level** or a **specific language** you prefer to code in?

AI can make mistakes, so double-check responses

- [link](https://codeforces.com/blog/entry/83875)\
  Codeforces\
  Survey on Competitive Programming\
  More than 40 hours: 5.2% Online judges: 60.9% Tutorial sites: 59% Reading editorials of problems: 22.1% CF blogs, College courses,
- [link](https://codeforces.com/blog/entry/20525)\
  Codeforces\
  Statistics of programming languages in Codeforces\
  The first three places in popularity is the GNU C++, GNU C++11, MS C++. Despite the fact that the compilers and language versions ...
- [link](https://codeforces.com/blog/entry/80438)\
  Codeforces\
  USACO Guide: Curated Resources for Competitive ...\
  a group of experienced USACO contestants … have put together a "USACO Guide" that's designed to take you from any division to Plat...

Show all

## what's popular for players in different area of world

While **Codeforces** and **AtCoder** are universally popular globally, specific regions have heavily relied on their own localized wikis, judges, and learning communities to dominate the world stage. [link](https://www.reddit.com/r/Btechtards/comments/1dv6ttx/competitive%5Fprogramming%5Fresources%5Fthat%5Fi%5Ffound/)

### 🇨🇳 China & East Asia: The "OI" Ecosystem

China has arguably the most intense high-school and university-level competitive programming pipeline in the world. [link](https://www.cio.com/article/236406/where-to-find-the-worlds-best-programmers.html)

- **Primary Wiki:** The **[Chinese OI Wiki](https://oi-wiki.org/)** is the absolute king here. It is a massive, meticulously detailed encyclopedia created by the local community. [link](https://icpc.cs.ubc.ca/resources)
- **Key Platforms:** Chinese players heavily use **[Luogu](https://www.luogu.com.cn/)**, which acts as a hybrid social media platform, training ground, and contest aggregator. For historical practice, legacy platforms like the **Hangzhou Dianzi University Online Judge (HDU)** and the **Peking University Online Judge (POJ)** are treated as classic right-of-passage training steps. [link](https://github.com/shubh3110/competitive-programming-resources)

### 🇷🇺 Russia & Eastern Europe: The "Algorithmica" Pioneers

Russia has historically produced many of the top-ranking legendary competitive programmers. Its training culture is deeply academic. [link](https://en.wikipedia.org/wiki/Competitive%5Fprogramming)

- **Primary Wiki:** The legendary foundation is **e-maxx.ru**. Nearly every Russian player uses it (or its newer localized successor, **algorithmica.org**) to study exact proofs and standard layouts. Note that _e-maxx_ is the exact resource that was translated to become the globally famous English site [CP-Algorithms](https://cp-algorithms.com/).
- **Key Platforms:** Aside from Codeforces (which is based out of Russia), players frequently look up local training datasets on the **[Timus Online Judge](https://acm.timus.ru/)**, which hosts a massive archive of legendary Ural Federal University and Petrozavodsk training camp problems. [link](https://en.wikipedia.org/wiki/Codeforces)

### 🇮🇳 India: The Interview-to-CP Pipeline

India represents one of the largest demographics of active users on worldwide coding platforms, bridging the gap between college placement preparation and sport coding. [link](https://www.geeksforgeeks.org/blogs/what-are-the-best-resources-for-competitive-programming/)

- **Primary Wiki:** For foundational learning, **[GeeksforGeeks](https://www.geeksforgeeks.org/)** is highly popular for absorbing core data structures and algorithms (DSA).
- **Key Platforms:** Domestically, **[CodeChef](https://www.codechef.com/)** is an essential hub. It is widely used by Indian universities to host internal college contests and is highly favored for its "Long Challenges"—contests extending over multiple days that allow deep, methodical code building. [link](https://medium.com/quadqode/competitive-programming-resources-f140d2ab3eda)

### 🇯🇵 Japan: Theoretical Precision

Japan's competitive programming culture focuses heavily on clean, elegant, and intensely logical mathematics rather than long-winded problem statements.

- **Key Platforms:** The absolute hub is **[AtCoder](https://atcoder.jp/)**. The AtCoder Beginner Contests (ABC) and Regular Contests (ARC) are the primary weekly routine for local players. For general problem-solving history and university training, the **Aizu Online Judge (AOJ)** is extensively utilized. [link](https://codeforces.com/blog/entry/111622)

### 🇺🇸/🇨🇦 North America & Western Europe: The Olympiad Track

In these regions, competitive programming is primarily popularized through high school Olympiads and top-tier tech university clubs. [link](https://medium.com/codess-cafe/the-ultimate-guide-to-competitive-programming-7bde37b70f45)

- **Primary Wiki/Guide:** The **[USACO Guide](https://usaco.guide/)** is the central curriculum for this demographic. It has effectively replaced traditional forum surfing by organizing global learning pathways from beginner to advanced advanced-math tiers.
- **Key Platforms:** Players utilize the **[CSES Problem Set](https://cses.fi/problemset/)** (developed in Finland) for clean educational drilling, alongside **[Kattis](https://open.kattis.com/)**, which hosts many of the official regional International Collegiate Programming Contest (ICPC) challenges. [link](https://icpc.cs.ubc.ca/resources)

Are you trying to pick a resource that aligns with a **specific regional style of problem-solving** (e.g., math-heavy vs. implementation-heavy), or are you trying to understand the **global competitive tiers**?

- [link](https://github.com/shubh3110/competitive-programming-resources)\
  GitHub\
  shubh3110/competitive-programming\
  HDU is an online judge maintained by Hangzhou Dianzi University. It's home to many classic problems from the Chinese IOI scene. An...
- [link](https://www.reddit.com/r/Btechtards/comments/1dv6ttx/competitive%5Fprogramming%5Fresources%5Fthat%5Fi%5Ffound/)\
  Reddit·r/Btechtards\
  Competitive Programming resources that I found useful (and ...\
  July 4, 2024 — Codeforces and AtCoder are prominent platforms for Competitive Programming. Tools like CFTracker (for Codeforces) can help users f...
- [link](https://www.geeksforgeeks.org/blogs/what-are-the-best-resources-for-competitive-programming/)\
  GeeksforGeeks\
  What Are The Best Resources For Competitive Programming? - GeeksforGeeks\
  GeeksforGeeks: Focuses on computer science subjects, DSA fundamentals, and placement preparation. TopCoder: Complex problems for a...

Show all


# how to practice competitive programming

**Competitive programming (CP)** is a mental sport that requires a mix of speed, mathematical intuition, and clean coding. To practice effectively and move up the ranks, you need a structured strategy that balances learning new concepts with pushing your problem-solving limits. [link](https://codeforces.com/blog/entry/116371)

Here is a step-by-step roadmap to guide your practice.

***

### 1. Build Your Foundation First

Before jumping into contests, make sure your baseline technical skills are solid: [link](https://medium.com/codess-cafe/the-ultimate-guide-to-competitive-programming-7bde37b70f45)

- **Pick a Language:** **C++** is highly recommended due to its execution speed and its powerful Standard Template Library (STL). Java and Python are acceptable, but Python can occasionally run into execution time limits on strict platforms. [link](https://www.reddit.com/r/programming/comments/gc19wg/getting%5Fstarted%5Fin%5Fcompetitive%5Fprogramming/)
- **Master the Basics:** You must be completely fluent with loops, conditions, arrays, strings, functions, and fundamental recursion. [link](https://www.instagram.com/reel/DdnJWz2MQsl/)
- **Brush Up on Math:** CP relies heavily on mathematics. Make sure you understand basic algebra, combinatorics, and basic number theory (like modular arithmetic and prime numbers). [link](https://www.instagram.com/reel/DcZ3nXPpGGs/)

### 2. Choose the Right Platforms

Don't spread yourself too thin across dozens of sites. Stick to one or two primary platforms to track your growth: [link](https://www.reddit.com/r/csMajors/comments/z4qjzx/a%5Fguide%5Fto%5Fcompetitive%5Fprogramming/)

- Codeforces: The gold standard for CP. It has a massive problem archive and hosts frequent, short (2-hour) contests.
- AtCoder: Excellent for beginners. AtCoder Beginner Contests (ABC) focus heavily on logic, math, and clean problem-solving.
- CSES Problem Set: The best archive for practicing specific algorithmic techniques (Dynamic Programming, Graph algorithms, etc.). [link](https://codeforces.com/blog/entry/66909)

### 3. Implement the "Sweet Spot" Practice Strategy

Solving problems that are too easy won't help you grow, and solving problems that are too hard will just frustrate you. [link](https://usaco.guide/general/practicing)

- **Find Your Rating:** On Codeforces or AtCoder, look for problems rated roughly **100 to 200 points above your current rating**. You should have about a 30% to 40% success rate of solving them on your own. [link](https://codeforces.com/blog/entry/116371)
- **The 30-Minute Rule:** When practicing outside of contests, give a problem 30–45 minutes of pure focused thought. Scratch out ideas on paper. If you are completely stuck after that, **read the editorial (solution)**. [link](https://stevengong.co/notes/Competitive-Programming)
- **Always Upsolve:** If you had to read the editorial, don’t just close the tab. **Code the solution from scratch** without copy-pasting. This forces your brain to bridge the gap between understanding a concept and implementing it. [link](https://codeforces.com/blog/entry/116371)

### 4. Master Core Algorithms & Data Structures

As you climb the ranks, you will hit walls that cannot be bypassed with brute force. Learn these core topics sequentially: [link](https://medium.com/codess-cafe/the-ultimate-guide-to-competitive-programming-7bde37b70f45)

| Phase            | Core Topics to Master                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Beginner**     | Time & Space Complexity (O(N), 𝑂(𝑁log𝑁)), Binary Search, Two Pointers, Sorting.                                                       |
| **Intermediate** | Standard Template Library (Vectors, Sets, Maps), Greedy Algorithms, Introduction to Breadth-First (BFS) and Depth-First Search (DFS). |
| **Advanced**     | Dynamic Programming (DP), Advanced Graphs (Dijkstra, MST), Segment Trees, Disjoint Set Union (DSU).                                   |

Instead of studying all algorithms upfront, learn them **on-demand**. When you see an unfamiliar concept in a problem editorial, pause, read about it in the Competitive Programmer's Handbook, and then resume. [link](https://codeforces.com/blog/entry/116371)

### 5. Simulate Real Contests

Solving problems without a clock is entirely different from solving them under pressure. [link](https://codeforces.com/blog/entry/98806)

- **Participate Live:** Try to take part in live Codeforces (Div. 2 or Div. 3) and AtCoder beginner contests whenever they fit your schedule.
- **Virtual Contests:** If you miss a live round, use the "Virtual Contest" feature on Codeforces. It simulates the exact environment, scoreboard, and ticking clock of the past contest. This builds your pacing and teaches you when to abandon a problem you're stuck on. [link](https://codeforces.com/blog/entry/116371)

To help tailor this advice to your current level, let me know:

- What is your **current programming experience** (e.g., complete beginner, familiar with data structures, or already doing LeetCode)?

- Which **programming language** are you planning to use?

- What is your **ultimate goal** (e.g., passing tech interviews, hitting a specific rank on Codeforces, or competing in ICPC/IOI)?

- [link](https://www.reddit.com/r/csMajors/comments/z4qjzx/a%5Fguide%5Fto%5Fcompetitive%5Fprogramming/)\
  Reddit·r/csMajors\
  A Guide to Competitive Programming : r/csMajors - Reddit\
  such as DMOJ, SPOJ, and Kattis. I recommend sticking to one when you're starting out.

- [link](https://codeforces.com/blog/entry/116371)\
  Codeforces\
  How to Effectively Practice CP + Problem Solving Guide - Codeforces\
  Practice Strategy: Use Codeforces, pick rating ranges with 30-40% success rate, grind problem set in reverse ID order, and time im...

- [link](https://codeforces.com/blog/entry/66909)\
  Codeforces\
  \[Tutorial] A way to Practice Competitive Programming : From Rating 1000 to 2400+ - Codeforces\
  Competitive Programming Tutorial: E869120 published a 19-page PDF guide on Codeforces detailing practice methods across ratings: 1...

Show all

# what are the ways do ppl practice competitive programming

People practice **competitive programming (CP)** <mark>using a highly structured blend of platform-based drilling, mathematical training, and specific problem-solving workflows</mark>. Because CP is treated like a "mind sport," the practice methods mimic athletic training. [link](https://www.youtube.com/watch?v=bSdp2WeyuJY)

The primary ways people practice competitive programming include:

### 1. Grinding Platform Problem Sets (The "Archive" Method)

Instead of jumping straight into timed matches, programmers spend the bulk of their time in problem archives, solving questions at or slightly above their current skill level. [link](https://codeforces.com/blog/entry/98806)

- **Targeted Difficulty Ladders:** On platforms like Codeforces or AtCoder, practitioners filter problems by "rating" (difficulty scores). A common strategy is to pick a rating bracket where they have a **30% to 40% success rate**—this is considered the "sweet spot" for growth. [link](https://codeforces.com/blog/entry/116371)
- **Topic-Specific Drilling:** Programmers isolate weak areas by filtering tags like **Dynamic Programming (DP)**, **Graph Theory**, or **Segment Trees**, solving dozens of problems in that specific category until the pattern recognition becomes subconscious. [link](https://joaogui1.github.io/2018/07/31/comp-practice.html)

### 2. Strategic Use of Editorials ("Upsolving")

A major component of CP practice happens _after_ a programmer fails to solve a problem. [link](https://www.youtube.com/watch?v=kFpdk5BVVh8\&t=273)

- **The 15-to-45 Minute Rule:** Advanced practice guides suggest thinking deeply about a problem for 15 to 45 minutes. If no breakthrough occurs, they read the **editorial** (the official written solution). [link](https://www.youtube.com/watch?v=Hs9kv8C1Ds4)
- **Active Implementation:** Rather than just reading the editorial and moving on, practitioners force themselves to **manually write and submit the code** from scratch to ensure they actually mastered the logic. This process is universally known as **upsolving**. [link](https://medium.com/codess-cafe/the-ultimate-guide-to-competitive-programming-7bde37b70f45)

### 3. Participating in Live and "Virtual" Contests

Contests are used to train speed, accuracy, and tactical endurance. [link](https://www.geeksforgeeks.org/blogs/how-to-prepare-for-competitive-programming/)

- **Live Rated Contests:** Programmers participate in short, weekly online rounds (usually 2 to 3 hours long) to test their skills under pressure against a global leaderboard.
- **Virtual Contests:** Most platforms allow users to run old, past contests in "Virtual Mode". The timer ticks down exactly as it did during the live event, simulating real pressure and preventing the user from looking at hints mid-way through. [link](https://www.quora.com/How-do-you-become-consistent-with-competitive-programming)

### 4. Studying Textbooks and Core Literature

Unlike software engineering, CP relies heavily on deep, theoretical computer science and discrete mathematics. Many top-tier competitors actively study standard academic resources: [link](https://www.youtube.com/watch?v=bSdp2WeyuJY)

- **The Handbook:** The free Competitive Programmer's Handbook by Antti Laaksonen is the industry-standard textbook for beginners and intermediates to learn algorithms.
- **Math Preparation:** Competitors dedicate separate practice time to **Number Theory**, combinatorics, and modular arithmetic, as many complex problems require a mathematical reduction before code can even be written. [link](https://www.reddit.com/r/csMajors/comments/z4qjzx/a%5Fguide%5Fto%5Fcompetitive%5Fprogramming/)

### 5. Standardizing the Tool Stack

Efficiency in CP requires eliminating friction in code execution. [link](https://www.geeksforgeeks.org/blogs/how-to-prepare-for-competitive-programming/)

- **C++ Supremacy:** While Java and Python are supported, the vast majority of competitive programmers practice almost exclusively in **C++**. It provides lightning-fast execution and a robust Standard Template Library (STL).
- **Template Optimization:** Programmers maintain heavily optimized, pre-written code templates containing shorthand macros, fast I/O functions, and modular algorithm snippets to save precious minutes during execution. [link](https://competitive-programming.cs.princeton.edu/resources)

***

### Popular Platforms Used for Practice

| Platform             | Best For                                 | Typical Format                                         |
| -------------------- | ---------------------------------------- | ------------------------------------------------------ |
| **Codeforces**       | Core algorithmic skills & global ranking | Short, highly competitive mathematical rounds          |
| **AtCoder**          | Clean, elegant problem design            | Great for beginners to build foundational logic        |
| **LeetCode**         | Interview preparation                    | Focuses on data structures standard to tech interviews |
| **CSES Problem Set** | Pure algorithm implementation            | A classic checklist of foundational CP problems        |

Are you asking out of curiosity, or are you **looking to start practicing** yourself? If you are starting out, let me know your **preferred programming language** and **current comfort level with math**, and I can suggest a customized beginner roadmap.

- [link](https://www.youtube.com/watch?v=bSdp2WeyuJY)\
  YouTube·Colin Galen\
  Complete Roadmap for Competitive Programming\
  Apr 14, 2022 — This video provides a comprehensive roadmap for competitive programming, aiming to guide learners from beginner to Grandmaster lev...\
  01:08:32
- [link](https://codeforces.com/blog/entry/116371)\
  Codeforces\
  How to Effectively Practice CP + Problem Solving Guide - Codeforces\
  Use Codeforces, pick rating ranges with 30-40% success rate, grind problem set in reverse ID order, and time implementations. Spen...
- [link](https://medium.com/codess-cafe/the-ultimate-guide-to-competitive-programming-7bde37b70f45)\
  Medium·Chitra Singla\
  The Ultimate Guide to Competitive Programming | by Chitra Singla | Codess.Cafe | Medium\
  Participate in live or virtual contests, analyze constraints, use editorials for hints, and perform post-contest upsolving.

Show all

# how to learn competitive programming

To learn competitive programming (CP), you need to follow a structured roadmap that transitions you from a standard coder into an efficient algorithmic thinker. [link](https://usaco.guide/general/intro-cp)

Here is the ultimate beginner-to-intermediate guide to starting your competitive programming journey:

### 1. Master a Core Language (Preferably C++)

While you can technically use Python or Java, **C++ is the industry standard for competitive programming**. It is incredibly fast and features the **Standard Template Library (STL)**, which provides built-in data structures (like vectors, sets, maps, and queues) that save you from writing them from scratch. [link](https://codeforces.com/blog/entry/75742)

- **What to learn:** Loops, conditional statements, functions, pointers, and time/space complexity (Big O notation).
- **Essential C++ STL:** `std::vector`, `std::set`, `std::map`, `std::pair`, and `std::sort`.
- **Resource:** The free Principles of Algorithmic Problem Solving book by Johan Sannemo is an exceptional introductory guide. [link](https://competitive-programming.cs.princeton.edu/resources)

### 2. Set Up Your Practice Platforms

Don't wait until you know everything to start solving problems. Sign up for these core platforms: [link](https://www.youtube.com/watch?v=n-Xkbqcfi9w\&t=181)

- [AtCoder](https://atcoder.jp/): Highly beginner-friendly. Start with **AtCoder Beginner Contests (ABC)**, focusing on tasks with a difficulty rating of 100 to 200. [link](https://www.reddit.com/r/csMajors/comments/z4qjzx/a%5Fguide%5Fto%5Fcompetitive%5Fprogramming/)
- [Codeforces](https://codeforces.com/): The most popular platform globally. Go to the problem set, filter by the easiest rating (**500 to 800 difficulty**), and start solving. [link](https://www.youtube.com/watch?v=xAeiXy8-9Y8)
- [USACO Guide](https://usaco.guide/): An incredibly well-structured, free curriculum that takes you step-by-step through CP concepts. [link](https://usaco.guide/general/intro-cp)

### 3. Learn the Fundamental Math & Logic

Competitive programming problems are essentially disguised math puzzles. You don't need calculus, but you must master basic high-school math: [link](https://www.youtube.com/watch?v=bVKHRtafgPc\&t=140)

- **Number Theory:** Greatest Common Divisor (GCD), Least Common Multiple (LCM), primality testing, and the Sieve of Eratosthenes.
- **Modulo Arithmetic:** Essential because CP problems often ask for answers "modulo 10⁹ + 7" to prevent integer overflow.
- **Combinatorics:** Permutations, combinations, and the basics of counting. [link](https://codeforces.com/blog/entry/75742)

### 4. Progress Through Algorithmic Milestones

As you graduate from basic implementation puzzles, study these topics in order: [link](https://codeforces.com/blog/entry/75742)

| Phase                           | Topics to Cover                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Beginner (Div 3 / Easy ABC)** | Arrays, Strings, Sorting, **Greedy Algorithms**, and **Binary Search**.                          |
| **Intermediate (Div 2B / 2C)**  | **Graph Theory** (BFS, DFS), Prefix Sums, Two Pointers, and basic **Dynamic Programming (DP)**.  |
| **Advanced**                    | Segment Trees, Fenwick Trees, Disjoint Set Union (DSU), and Shortest Path algorithms (Dijkstra). |

- **Must-Read Resource:** Download the free Competitive Programmer's Handbook by Antti Laaksonen. It is the definitive companion textbook for CP beginners. [link](https://www.youtube.com/watch?v=xAeiXy8-9Y8)

### 5. The Golden Golden Rule: "Upsolving"

The secret to getting good at CP isn't just participating in contests; it's **upsolving**. Upsolving means that after a contest ends, you go back and attempt to solve the problems you failed to clear during the timer. Read the **editorials** (the official text explanations) and study other competitors' accepted code to see how they optimized their logic. [link](https://www.youtube.com/watch?v=bSdp2WeyuJY)

If you want a step-by-step video visualization on how to navigate your very first platform problems, watch this beginner guide:

9:43

[link](https://www.youtube.com/watch?v=xAeiXy8-9Y8)

How to start Competitive Programming? For beginners!

1.3M views · 6 years ago

YouTube · Errichto Algorithms

To give you the most specific starting point, tell me:

- What is your current **programming experience**? (Absolute beginner, know some Python/Java, or already comfortable with algorithms?)

- What is your **primary goal**? (Fun, passing tech interviews, or qualifying for competitions like ICPC/USACO?)

- [link](https://www.reddit.com/r/csMajors/comments/z4qjzx/a%5Fguide%5Fto%5Fcompetitive%5Fprogramming/)\
  Reddit\
  A Guide to Competitive Programming : r/csMajors - Reddit\
  just like Codeforces, these contests are hosted by AtCoder - meaning you can compete in them! can rapidly improve at competitive p...

- [link](https://codeforces.com/blog/entry/75742)\
  Codeforces\
  What to study and learn as a beginner in Competitive Programming? - Codeforces\
  Div 2A requires basic greedy and math; Div 2B requires linear DP, strings, sorting, binary search, basic graphs, bitwise calculati...

- [link](https://www.youtube.com/watch?v=bVKHRtafgPc\&t=140)\
  YouTube·William Lin (tmwilliamlin168)\
  Starting Competitive Programming - Steps and Mistakes\
  This video explains the steps to start competitive programming … modular arithmetic, 50-60 words per minute, learning basic proble...\
  1m

Show all

# what are the ways do ppl learn competitive programming

People learn **competitive programming (CP)** <mark>through a mix of structured study, platform practice, and community engagement</mark>. Because CP functions much like a mental sport, the learning process heavily emphasizes active problem-solving over passive reading. [link](https://codeforces.com/blog/entry/116371)

The primary pathways and strategies people use to master competitive programming include the following:

### 1. Learning a Core Language & Library

- **C++ Supremacy:** The vast majority of competitive programmers choose [C++](https://competitive-programming.cs.princeton.edu/resources). This is because it is highly performant and features the **Standard Template Library (STL)**, which provides ready-to-use data structures like vectors, maps, and sets.
- **Alternatives:** Some choose Java or Python, though Python can occasionally run into execution time-limit issues on stricter platforms. [link](https://www.quora.com/How-should-I-get-started-in-competitive-programming)

### 2. Studying Data Structures and Algorithms (DSA)

Learners generally do not jump straight into contests; they build a foundation in algorithmic concepts first. [link](https://www.quora.com/How-should-I-get-started-in-competitive-programming)

- **Core Topics:** Mastering time and space complexity, sorting, searching (like binary search), greedy algorithms, and math concepts (like modular arithmetic and combinatorics). [link](https://medium.com/codess-cafe/the-ultimate-guide-to-competitive-programming-7bde37b70f45)
- **Advanced Structures:** Progressing into graphs, trees, dynamic programming (DP), and segment trees. [link](https://medium.com/codess-cafe/the-ultimate-guide-to-competitive-programming-7bde37b70f45)
- **Popular Books:** Many self-studying programmers read the _Competitive Programmer’s Handbook_ by Antti Laaksonen or _Competitive Programming_ by Steven and Felix Halim. [link](https://www.youtube.com/watch?v=bVKHRtafgPc)

### 3. Graduated Platform Practice

Programmers systematically move through different coding platforms depending on their current skill levels: [link](https://daily.dev/blog/best-competitive-programming-for-beginners/)

- **For Beginners:** Starting on sites like HackerRank or LeetCode helps build basic implementation confidence.
- **For Intermediate to Advanced:** Transitioning to contest-driven platforms like Codeforces, AtCoder, and CodeChef. Learners often filter problems by difficulty rating (e.g., starting at an 800 rating on Codeforces) and gradually scale up. [link](https://www.reddit.com/r/programming/comments/gc19wg/getting%5Fstarted%5Fin%5Fcompetitive%5Fprogramming/)

### 4. Guided Problem Sheets and Roadmaps

To avoid getting lost in thousands of random problems, learners follow curated problem tracks: [link](https://www.youtube.com/watch?v=bSdp2WeyuJY)

- **A2OJ Ladders:** Historically popular archives that group Codeforces problems by user rating.
- **Mostafa Saad Sheet:** A highly regarded problem matrix that systematically introduces categories of algorithms.
- **CSES Problem Set:** A clean, widely accepted benchmark set of standard algorithmic tasks. [link](https://www.youtube.com/watch?v=bVKHRtafgPc)

### 5. Post-Contest "Upsolving" and Editorials

Participating in live, timed contests is vital, but the real learning happens right after the contest ends. [link](https://www.youtube.com/watch?v=bSdp2WeyuJY)

- **Upsolving:** This is the practice of attempting to solve the problems you _failed_ to finish during the live round.
- **Reading Editorials:** When completely stuck, learners read the official text explanations (editorials) or walk through code written by top-tier participants to see how a grandmaster structured their solution. [link](https://www.youtube.com/watch?v=bSdp2WeyuJY)

### 6. Leveraging Community & Video Content

- **YouTube Creators:** People frequently learn complex topics visually from channels like Errichto, SecondThread, or William Lin.
- **Codeforces Blogs:** The competitive programming community frequently posts deep-dive algorithmic tutorials, trick compilations, and advice threads directly on Codeforces Blogs. [link](https://www.reddit.com/r/csMajors/comments/z4qjzx/a%5Fguide%5Fto%5Fcompetitive%5Fprogramming/)

Are you asking to help you **start your own learning journey**, or are you looking to design a **study curriculum** for others? Let me know your current **programming experience level** so I can suggest the right starting point!

- [link](https://medium.com/codess-cafe/the-ultimate-guide-to-competitive-programming-7bde37b70f45)\
  Medium·Chitra Singla\
  The Ultimate Guide to Competitive Programming | by Chitra Singla | Codess.Cafe | Medium\
  programming is a timed programming sport. Learn C++ or Java basics, practice on HackerRank, then transition to Codeforces. Core To...
- [link](https://codeforces.com/blog/entry/116371)\
  Codeforces\
  How to Effectively Practice CP + Problem Solving Guide\
  Overall it will be better for you to just do be actively solving more problems for cp practice, cp is basically olympiad combo + d...
- [link](https://www.youtube.com/watch?v=bSdp2WeyuJY)\
  YouTube·Colin Galen\
  Complete Roadmap for Competitive Programming\
  Apr 14, 2022 — This video provides a comprehensive roadmap for competitive programming, aiming to guide learners from beginner to Grandmaster lev...\
  01:08:32

Show all

# 