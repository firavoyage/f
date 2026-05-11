kmp algorithms

The **Knuth-Morris-Pratt (KMP) algorithm** is an efficient string-searching method used to find all occurrences of a "pattern" string (

𝑃

) within a larger "text" string (

𝑇

). Unlike naive search methods that backtrack after a mismatch, KMP uses information about the pattern itself to skip unnecessary comparisons.

1\. Preprocess the Pattern (LPS Array)

The algorithm starts by building a "Longest Prefix Suffix" (LPS) table for the pattern.

- **Definition**: For each position\
  𝑖\
  in the pattern,\
  𝐿𝑃𝑆\
  \[\
  𝑖\
  ]\
  stores the length of the longest proper prefix of\
  𝑃\
  \[\
  0\
  …𝑖\
  ]\
  that is also a suffix of\
  𝑃\
  \[\
  0\
  …𝑖\
  ]\
  .
- **Purpose**: This table tells the algorithm how much of the pattern has already been matched, allowing it to "jump" ahead rather than restarting from the beginning.

2\. Search the Text

Once the LPS table is ready, the algorithm begins matching the pattern against the text:

- **Matching**: It compares characters of the text and pattern one by one.
- **On Mismatch**: Instead of moving the text pointer back, KMP uses the LPS table to determine the next character in the pattern to compare.
- **Jumping**: If a mismatch occurs at\
  𝑃\
  \[\
  𝑗\
  ]\
  , the algorithm knows that the first\
  𝐿𝑃𝑆\
  \[\
  𝑗\
  −1\
  ]\
  characters of the pattern already match the text, so it resumes matching from\
  𝑃\
  \[\
  𝐿𝑃𝑆\
  \[\
  𝑗\
  −1\
  ]\
  ]\
  .

3\. Complexity Comparison

KMP is significantly faster for large datasets or patterns with repeating sub-patterns.

| Feature              | Naive Algorithm         | KMP Algorithm                 |
| -------------------- | ----------------------- | ----------------------------- |
| **Time Complexity**  | 𝑂(𝑁×𝑀)                  | 𝑂(𝑁+𝑀)                        |
| **Space Complexity** | 𝑂(1)                    | 𝑂(𝑀) (for LPS table)          |
| **Backtracking**     | Backtracks text pointer | Never backtracks text pointer |

Would you like a **step-by-step example** of how to build an LPS table for a specific pattern?

- [link](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt%5Falgorithm#:~:text=In%20computer%20science%2C%20the%20Knuth,time%20algorithm%20for%20string%20matching.)\
  Knuth–Morris–Pratt algorithm - Wikipedia\
  In computer science, the Knuth–Morris–Pratt algorithm (or KMP algorithm) is a string-searching algorithm that searches for occurre...\
  Wikipedia
- [link](https://www.geeksforgeeks.org/dsa/kmp-algorithm-for-pattern-searching/)\
  KMP Algorithm\
  Mar 27, 2026 — In KMP Algorithm, \* We preprocess the pattern and build LPS array for it. The size of this array is same as pattern length. \* LPS ...\
  GeeksforGeeks·GeeksforGeeks\
  25:00
- [link](https://www.youtube.com/watch?v=ynv7bbcSLKE\&t=42)\
  Knuth-Morris-Pratt Algorithm Visually Explained\
  Jan 21, 2024 — the time complexity of this approach is big O of N - M + 1 \* M / 2 here the pattern travels N - M + 1\*s over the text and in each ...\
  YouTube·ByteQuest\
  4m

Show all

example

To understand KMP, let's walk through an example where we search for the pattern **`ABABC`** within the text **`ABABDABABC`**.

Phase 1: Build the LPS Table

We first analyze the pattern `ABABC` to find the longest proper prefix that is also a suffix for every substring.

| Index | Substring | Longest Prefix/Suffix | LPS Value |
| ----- | --------- | --------------------- | --------- |
| 0     | `A`       | None                  | 0         |
| 1     | `AB`      | None                  | 0         |
| 2     | `ABA`     | `A`                   | 1         |
| 3     | `ABAB`    | `AB`                  | 2         |
| 4     | `ABABC`   | None                  | 0         |

**Final LPS Table**: `[0, 0, 1, 2, 0]`

***

Phase 2: Searching the Text

We compare the pattern against the text `ABABDABABC`.

1. **Step 1**: Match characters until a mismatch occurs.

- Text: `A B A B D ...`
- Pattern: `A B A B C`
- **Mismatch** at text index 4 ('D') and pattern index 4 ('C').

2. **Step 2**: Use the LPS table to "jump."

- The mismatch happened at pattern index 4. We look at `LPS[3]`, which is **2**.
- This tells us the first 2 characters (`AB`) already match, so we don't need to re-check them. We shift the pattern and resume comparing from pattern index 2.

3. **Step 3**: Resume comparison.

- Text: `... D ...`
- Pattern: (shifted) `A B A B C`
- Since `D` still doesn't match `A` (pattern index 0), we move the text pointer forward and restart the match.

4. **Step 4**: Find the full match.

- Matching continues until the pattern is found starting at text index 5.

Would you like to see the **Python implementation** of this logic?

- [link](https://www.scaler.com/topics/data-structures/kmp-algorithm/)\
  KMP Algorithm | Knuth Morris Pratt Algorithm - Scaler Topics\
  Apr 12, 2024 — Code for the KMP string matching algorithm \* Here is the pseudo-code for the KMP algorithm, along with the LPS creation function. ...\
  Scaler
- [link](https://www.geeksforgeeks.org/c/kmp-algorithm-for-pattern-searching-in-c/)\
  KMP (Knuth-Morris-Pratt) Algorithm for Pattern Searching in C\
  Jul 23, 2025 — Steps to Implement the KMP Algorithm in C \* Preprocess the pattern to create the lps\[] array that stores the length of the longest...\
  GeeksforGeeks
- [link](https://takeuforward.org/data-structure/kmp-algorithm-or-lps-array#:~:text=class%20Solution:%20%23%20Function%20to%20compute,.KMP%28text%2C%20pattern%29%29)\
  KMP Algorithm or LPS Array - Tutorial - takeuforward\
  class Solution: # Function to compute the LPS array def computeLPS(self, pattern): # Create lps array lps = \[0] \* len(pattern) # L...\
  takeuforward

Show all

is kmp faster for normal patterns in real life search

In many real-life search scenarios, the **KMP algorithm is often slower** than both the **Boyer-Moore** algorithm and even the **Naive (brute-force)** search.

While KMP is theoretically superior for its

𝑂

(

𝑛

+𝑚

)

worst-case performance, its practical speed depends on the data being searched.

1\. KMP vs. Boyer-Moore

In most general-purpose applications (like "Find" in a text editor), **Boyer-Moore** is the standard choice.

- **Sublinear Speed**: Boyer-Moore can skip large sections of text without looking at every character, achieving "sublinear" time in the best case.
- **Alphabet Advantage**: Boyer-Moore performs better as the alphabet size increases (e.g., searching English text), whereas KMP must examine every character at least once.

2\. KMP vs. Naive Search

For "normal" searches—where patterns are short and the text is not repetitive—the **Naive search** can actually be faster in practice.

- **Constant Factors**: KMP requires a preprocessing step to build the LPS table. For short patterns or small files, the overhead of building this table outweighs the time saved during the search.
- **Probability**: In random text, the probability of a partial match is low, so the Naive search almost always fails after one or two characters and moves on, behaving like a linear-time algorithm anyway.

3\. When KMP is Actually Faster

KMP "shines" in specific technical scenarios where patterns have many repeating sub-segments:

- **Small Alphabets**: It is highly efficient for data with few possible characters, such as **DNA sequencing** (A, C, G, T) or binary code (0, 1), where partial matches are very frequent.
- **Streaming Data**: Because KMP never backtracks in the text, it is ideal for **streaming search** where you cannot move the "text pointer" backward (e.g., searching data as it arrives over a network).
- **Guaranteed Performance**: KMP provides predictable, stable timing regardless of the input, making it useful for real-time systems where a worst-case\
  𝑂\
  (\
  𝑛\
  ×𝑚\
  )\
  lag is unacceptable.

Would you like to compare KMP to **Rabin-Karp**, which is often used for detecting plagiarism or multiple patterns?

- [link](https://medium.com/@harshitachhangani/pattern-matching-algorithm-4ca950792c95#:~:text=The%20KMP%20algorithm%20uses%20a,a%20simple%20brute%2Dforce%20search.\&text=Boyer%2DMoore%20Algorithm:,faster%20than%20the%20KMP%20algorithm.\&text=Na%C3%AFve%20Pattern%20Matching:,the%20text%20has%20been%20reached.)\
  Pattern Matching Algorithm. Overview | by Harshita Chhangani\
  Feb 9, 2023 — Knuth-Morris-Pratt (KMP) Algorithm: One of the earliest and most well-known pattern matching algorithms is the Knuth-Morris-Pratt ...\
  Medium·Harshita Chhangani
- [link](https://stackoverflow.com/questions/56418773/when-is-rabin-karp-more-effective-than-kmp-or-boyer-moore#:~:text=1%20Comment\&text=The%20Rabin%2DKarp%20algorithm%20is,fast%20if%20the%20alphabet%20increases.)\
  When is Rabin Karp more effective than KMP or Boyer-Moore?\
  Jun 2, 2019 — \* 3 Answers. Sorted by: 24. There are a couple of properties that each of these algorithms have that might make them desirable or ...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/16085201/when-would-you-use-kmp-over-boyer-moore#:~:text=In%20theory%2C%20both%20algorithms%20will,14.3k3%2032%2057)\
  When would you use KMP over BOYER-MOORE\
  Apr 18, 2013 — \* 2 Answers. Sorted by: 24. In theory, both algorithms will have "similar" performance; KMP will do about 2n comparisons in the se...\
  Stack Overflow

Show all

boyer example

The **Boyer-Moore algorithm** is often faster than KMP because it scans from **right to left** and uses two powerful rules to skip large sections of text.

Example: Searching for "BAOBAB"

Imagine we are searching for the pattern **`BAOBAB`** in a text.

Rule 1: The Bad Character Rule

This rule looks at the character in the text that caused the mismatch (the "bad character").

1. **Alignment**: Align the pattern with the start of the text.
2. **Compare (Right-to-Left)**: Check the last character of the pattern (`B`) against the text character at that position.
3. **Mismatch**: If the text has a `Z`, and `Z` is **not in the pattern at all**, we can skip the entire pattern length.
4. **Shift**: If the text has an `A`, and `A` **is in the pattern**, we shift the pattern to align its rightmost `A` with that text character.

Rule 2: The Good Suffix Rule

If we matched a portion of the pattern (a "suffix") before hitting a mismatch, we use that knowledge to jump even further.

- **Scenario**: We match the suffix `BAB`, but the next character to the left mismatches.
- **Action**: The algorithm looks for the next occurrence of `BAB` within the pattern or the longest prefix of the pattern that matches a suffix of `BAB`. It then shifts to align them.

***

Step-by-Step Visualization

**Text**: `G C A T C G C A G A G A G T A T A C A G T A C G`\
**Pattern**: `G C A G A G`

| Step  | Action                                                                                                                                  | Visualization                   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| **1** | Start at the end of the pattern (`G`). It mismatches with text character `G` (wait, it matches). Move left to `A`... mismatch with `C`. | `G C A T C G ...``G C A G A G`  |
| **2** | `C` is the **Bad Character**. It exists in the pattern at index 1.                                                                      | Shift to align `C`s.            |
| **3** | New alignment skips 2 positions instantly.                                                                                              | `G C A T C G ...` `G C A G A G` |

Summary of Differences

- **KMP**: Always moves forward one by one in the text; uses partial matches to avoid re-checking.
- **Boyer-Moore**: Can "jump" over characters without ever looking at them, making it **sublinear** (faster than\
  𝑂\
  (\
  𝑁\
  )\
  ) in best-case scenarios.

Would you like to see a **comparison table** of Boyer-Moore versus other search algorithms like Rabin-Karp?

- [link](https://medium.com/@siddharth.21/the-boyer-moore-string-search-algorithm-674906cab162#:~:text=Naive%20Algorithm,ahead%20and%20repeat%20the%20process.\&text=So%2C%20now%20that%20we%20have,RC'%20in%20'RRRRRRRRRC'.)\
  The Boyer Moore String Search Algorithm | by Siddharth - Medium\
  Oct 18, 2021 — For example, if the text is “SSSSSSSSSSSS” and the pattern is “SSSSSS”. This time, the complexity is O(mn). Most string searching ...\
  Medium·Siddharth
- [link](https://studyglance.in/ds/display.php?tno=41\&topic=Boyer%E2%80%93Moore-Pattern-Matching#:~:text=The%20Boyer%E2%80%93Moore%20Pattern%20Matching,to%20naive%20string%20search%20methods.)\
  Boyer–Moore Pattern Matching - Study Glance\
  The Boyer–Moore Pattern Matching algorithm is one of the most efficient string-searching algorithm that is the standard benchmark ...\
  Study Glance
- [link](https://www.reddit.com/r/learnprogramming/comments/99lxdc/simple%5Fexplanation%5Fof%5Fboyer%5Fmoore%5Falgorithm/#:~:text=Probably%20the%20most%20obvious%20real,fit%20in%20a%20reddit%20reply.)\
  SImple explanation of Boyer Moore algorithm - Reddit\
  Aug 23, 2018 — Probably the most obvious real life application is string searching in a very large text or a text that is subject to frequent cha...\
  Reddit·r/learnprogramming

Show all