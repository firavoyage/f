# competitive programming wikis

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

# 