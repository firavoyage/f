# what are considered boilerplate on codeforces and allowed for llms to generate on live contests

## what are considered boilerplate on codeforces and allowed for llms to generate on live contests

On Codeforces, the specific boundary for what an AI is allowed to generate during a live contest is strictly limited to <mark><strong>structural, non-algorithmic utility code</strong></mark>. [link](https://codeforces.com/blog/entry/133941)

According to the official [Codeforces Rule Restricting the Use of AI](https://codeforces.com/blog/entry/133941), the breakdown of what is allowed versus what is prohibited includes:

### Allowed Boilerplate Code

You can use LLMs to generate standard code templates that handle infrastructure rather than problem-solving logic. This generally includes: [link](https://codeforces.com/blog/entry/133941)

- **Input/Output (I/O) functions:** Fast I/O setups (e.g., `ios_base::sync_with_stdio(false); cin.tie(NULL);`).
- **Standard templates:** Basic class structures, `main` function wraps, or default namespace configurations.
- **Basic inclusions:** Mass library imports (like `#include <bits/stdc++.h>`) and standard macro definitions. [link](https://codeforces.com/blog/entry/133941)

### Prohibited AI Generation

You are **strictly prohibited** from using an LLM to generate the actual logic required to solve the problem. This includes: [link](https://codeforces.com/blog/entry/133941)

- **Algorithmic logic:** You cannot ask an AI to write the key solution, state transitions, or mathematical proofs.
- **Data structures & algorithms:** Generating specific algorithms (like Dijkstra's, Segment Trees, or Dynamic Programming transitions) tailored to solve the contest prompt is illegal. [link](https://codeforces.com/blog/entry/133941)

_Note: Pre-existing templates or library code that you (or the community) wrote and published **before** the contest began are allowed, but generating new problem-specific logic on-the-fly via an LLM during the contest window will trigger anti-plagiarism flags and lead to disqualification._ [link](https://codeforces.com/blog/entry/119278)

Are you trying to **set up a standard template** for your upcoming contests, or are you looking for clarification on how Codeforces **detects AI-generated plagiarism**? Let me know so I can share the right tools or information!

- [link](https://codeforces.com/blog/entry/133941)\
  Codeforces\
  Rule Restricting the Use of AI \[revision 2024-09-14]\
  Sep 14, 2024 — Using AI to generate simple boilerplate code (e.g., input/output functions) is allowed. Relying on AI to generate algorithmic logi...
- [link](https://codeforces.com/blog/entry/119278)\
  Codeforces\
  AI language models and cheating in online contests - Codeforces\
  Codeforces permits pre-existing generated tools published before rounds, whereas Luogu forbids using code written by others during...

## what about general ds/algo templates

When it comes to general **Data Structures and Algorithms (DS/Algo) templates** (like a Segment Tree, Dijkstra’s algorithm, or a Disjoint Set Union), <mark>Codeforces draws a sharp line based on<span> </span><strong>when</strong><span> </span>and<span> </span><strong>how</strong><span> </span>that template was created</mark>: [link](https://codeforces.com/blog/entry/145874)

### ❌ In-Contest Generation is Banned

You **cannot use an LLM to generate a DS/Algo template during a live contest**. [link](https://codeforces.com/blog/entry/142836)

Even if you ask an AI for a "standard, generic Segment Tree template" without pasting the problem description, doing so during the active contest window is a direct violation of the [Codeforces AI Policy](https://codeforces.com/blog/entry/133941). The platform explicitly bans relying on AI to generate algorithmic logic or core structures on-the-fly. [link](https://codeforces.com/blog/entry/133941)

### Pre-Contest Templates are Allowed

You **can absolutely use DS/Algo templates if they were prepared _before_ the contest began**. [link](https://codeforces.com/blog/entry/142836)

Codeforces has a long-standing "Pre-written Code" rule. It states that contestants are completely free to use any code library, book, or template, provided it was **written and published/distributed publicly before the round started**. [link](https://www.quora.com/Do-coders-in-programming-contests-like-ACM-ICPC-write-code-live-or-do-they-use-pre-written-algorithms-Should-I-pre-write-code-or-should-I-use-a-template)

- **The Loophole:** You are allowed to use an LLM (like ChatGPT or Claude) to help you build, refine, or debug your personal algorithm template library **during your pre-contest preparation**. [link](https://codeforces.com/blog/entry/145874)

### ⚠️ The Risk of Plagiarism False Positives

While using pre-contest templates is completely legal, the community on platforms like [Reddit](https://www.reddit.com/r/codeforces/comments/1x1bmjp/ai%5Ffor%5Ftemplates/) frequently notes a massive technical caveat: **MOSS / Plagiarism Detection**.

If you use a template generated by a popular LLM, thousands of other coders might have generated the exact same template. If you both use it in a contest, the Codeforces anti-cheat system will flag the identical code structure as plagiarism, leading to a system test disqualification. [link](https://www.youtube.com/watch?v=G6snGrVWX1Y\&t=493)

**Best Practices to Stay Safe:**

1. **Personalize your code:** If an AI helps you write a template before a match, change variable names, rewrite the formatting, or adapt it to your unique coding style. [link](https://codeforces.com/blog/entry/145874)
2. **Publish it:** Keep your templates in a public GitHub repository. Codeforces anti-cheat system excludes matches if the source code can be proven to have existed publicly before the round. [link](https://codeforces.com/topic/134567/en2)

Would you like me to help you **write and customize a standard template** (such as a DSU or Segment Tree) right now so you can save it to your library before your next contest? Let me know which **algorithm** or **data structure** you need!

- [link](https://codeforces.com/blog/entry/133941)\
  Codeforces\
  Rule Restricting the Use of AI \[revision 2024-09-14] - Codeforces\
  Codeforces explicitly restricts AI-based systems (GPT, Gemini, Llama, Claude) during in-contest participation for rated/unrated ro...
- [link](https://codeforces.com/blog/entry/145874)\
  Codeforces\
  Discussion: Should We Allow the Use of AI\
  Whether it is using AI to polish existing templates, assist in modifying them, or directly generate a new one, AI shows strong usa...
- [link](https://codeforces.com/blog/entry/142836)\
  Codeforces\
  Is GFG allowed in contests? - Codeforces\
  You CANNOT generate a template for ANYTHING with GPT during the contest. You CAN generate a template with GPT BEFORE the contest s...

Show all

## what if you generate the widely public templates yk you can copy anywhere, like add bigint, is prime

Even if you are generating widely available, generic templates like a **BigInt class** or a **Miller-Rabin primality test (`is_prime`)**, <mark>generating them during a live contest using an LLM is<span> </span><strong>strictly illegal</strong></mark>. [link](https://codeforces.com/blog/entry/133941)

The [Codeforces Rule Restricting the Use of AI](https://codeforces.com/blog/entry/133941) explicitly states that you cannot rely on AI to generate algorithmic logic during the contest. Structural extensions like a `BigInt` structure or a math property algorithm like `is_prime` still qualify as algorithmic and logical components, not simple input/output boilerplate. [link](https://codeforces.com/blog/entry/133941)

If you use an LLM during the contest for these items, you face two massive problems:

### 1. You break the explicit "No In-Contest AI-Logic" rule

The moment you prompt an LLM _during_ the match to output code that computes numbers, handles prime factorizations, or manages precision, you violate the core guidelines. Codeforces expects you to solve the code logic using your own reasoning or pre-written code that you possessed before the round began. [link](https://codeforces.com/blog/entry/133941?locale=ru)

### 2. The Plagiarism / MOSS Trap

Even if you argue that a basic `is_prime` template isn't "complex AI logic," generating it with an AI puts you at severe risk of being flagged by Codeforces' plagiarism detection engine.

- **How Codeforces detects it:** According to the official rules, if your code matches another contestant's code, and that exact matching block **does not exist publicly on the internet prior to the competition round**, it is flagged as cheating. [link](https://codeforces.com/blog/entry/133941?locale=ru)
- **The danger:** LLMs are highly predictable. If you and 50 other contestants all ask an LLM during the contest for an "optimized C++ `is_prime` function," the AI will output the exact same code structure, variable names, and loop boundaries for all of you. When Codeforces sweeps the submissions, you will all trigger a **false-positive plagiarism match** against each other and face account suspension.

### The Right Way to Do It

If you want to use popular tools like `BigInt` or quick `is_prime` tests:

1. **Generate or collect them _before_ the match:** Use an AI or copy from public competitive programming books before the contest starts.
2. **Save them to a public repository:** Host your code snippets on a public platform (like GitHub or Gist). If Codeforces flags your template, you can prove that your code was publicly available on the internet _before_ the round, which clears you under the cheating detection policy. [link](https://codeforces.com/blog/entry/133941?locale=ru)

Would you like me to output standard, highly optimized templates for a **C++ BigInt struct** or a fast **Miller-Rabin `is_prime` function** right now so you can safely save them to your personal pre-contest library? Let me know which one you need!

- [link](https://codeforces.com/blog/entry/133941)\
  Codeforces\
  Rule Restricting the Use of AI \[revision 2024-09-14] - Codeforces\
  Codeforces explicitly restricts AI-based systems (GPT, Gemini, Llama, Claude) during in-contest participation. AI is free for prac...
- [link](https://www.reddit.com/r/codeforces/comments/1x1bmjp/ai%5Ffor%5Ftemplates/)\
  Reddit·r/codeforces\
  Ai for Templates : r/codeforces - Reddit\
  October 9, 2026 — Codeforces rules generally allow using AI-generated algorithm templates … some users caution against it due to the risk of trigger...
- [link](https://codeforces.com/blog/entry/145874)\
  Codeforces\
  Discussion: Should We Allow the Use of AI\
  Allow directly using AI-generated templates Only in pre-contest preparation (AI-assisted template maintenance) Also during contest...

Show all

## what if the llm basically searches a public template for you and let you to copy there

If an LLM merely acts as a search engine to find an existing public template for you to copy during a live contest, <mark><strong>it is still a violation of Codeforces rules</strong></mark>. [link](https://codeforces.com/blog/entry/133941)

[Codeforces](https://codeforces.com/topic/134567/en4) explicitly defines **Prohibited AI Use** based on _any_ active consultation of an AI model that assists your problem-solving logic or decision-making during the round. Under the official [Codeforces Rule Restricting the Use of AI](https://codeforces.com/blog/entry/133941), this workflow triggers two major issues: [link](https://www.youtube.com/watch?v=G6snGrVWX1Y\&t=38)

### 1. It violates the interaction ban

During a contest, you are allowed to use regular search engines (like Google) to look up public templates or documentation. However, the AI policy explicitly states that **you cannot feed queries, sub-problems, or logic requirements into an AI-based system during the contest** to substitute your individual process. Using an LLM to dynamically fetch or select code for you crosses the line into prohibited AI assistance. [link](https://codeforces.com/topic/134567/en4)

### 2. You will still trigger the Plagiarism Detector

If you copy a "public template" that the LLM dug up, you remain highly vulnerable to Codeforces' anti-cheat system: [link](https://codeforces.com/blog/entry/133941)

- **The Rule:** Codeforces states that if your code matches another contestant's code, it is considered cheating _unless_ that exact code block existed **publicly online prior to the round**. [link](https://codeforces.com/blog/entry/133941)
- **The Catch:** LLMs don't always give you a raw copy-paste of a specific URL. They often hallucinate minor tweaks, combine multiple sources, or change syntax structure to make it "cleaner." If the LLM subtly synthesizes or modifies that public template, **that specific variation no longer exists publicly on the web**. [link](https://codeforces.com/blog/entry/133941)
- If another contestant asks the same LLM for the same template, the AI will provide that same synthesized variation to both of you. Since it's not a 100% exact match to an indexed pre-existing public URL, Codeforces will flag you both for plagiarism. [link](https://codeforces.com/blog/entry/133941)

### 💡 The Legal Alternative

If you need to look up a public template during a contest, **bypass the LLM entirely**. Use Google, DuckDuckGo, or GitHub Search directly to find a trusted competitive programming library (like GeeksforGeeks or Cp-Algorithms). Copying directly from a static, verified public site is entirely legal under Codeforces rules, whereas querying an LLM to act as the middleman breaks the active contest environment policy. [link](https://codeforces.com/blog/entry/133941)

Are you trying to figure out how to **safely search for algorithms** during a high-stakes round, or do you want to learn more about how Codeforces **verifies if a code block was public** before the contest? Let me know!

- [link](https://codeforces.com/blog/entry/4088)\
  Codeforces\
  Codeforces Contest Rules\
  It is allowed to use any sources of information on the Internet (but it is forbidden to copy-paste somebody else's code).
- [link](https://codeforces.com/blog/entry/149118)\
  Codeforces\
  A Proposal to Fight AI Cheating: Using LLMs Against ...\
  Similar matches (high correlation) should be flagged. If a user is flagged consistently across multiple contests, this provides st...
- [link](https://codeforces.com/blog/entry/133941)\
  Codeforces\
  Rule Restricting the Use of AI \[revision 2024-09-14] - Codeforces\
  Codeforces explicitly restricts AI-based systems (GPT, Gemini, Llama, Claude) during in-contest participation for rated/unrated ro...

Show all

## what if they just redirect you to a repo or wiki

If the LLM does not write any code and **simply gives you a link or redirects you to a public GitHub repository or wiki** (like Cp-Algorithms or GeeksforGeeks), <mark>using it is<span> </span><strong>technically a grey area, but highly discouraged</strong><span> </span>because it still flirts with a ban</mark>. [link](https://codeforces.com/blog/entry/133941)

The active rule breaks down into the following parts:

### 1. The Interaction Restriction (The Gray Area)

The official [Codeforces AI Policy](https://codeforces.com/blog/entry/133941) states:

> _"The use of AI tools that assist with problem understanding, logic creation, or decision-making in a way that substitutes your own reasoning is strictly disallowed."_ [link](https://www.facebook.com/groups/programmingpilipinas/posts/2177328082736754/)

If you input problem constraints or description tags into an LLM and it says, _"For this problem type, you need a Segment Tree; here is the wiki link,"_ the AI has just made the **algorithmic decision** for you. Even if it didn't write the code, using a neural network to deduce the required algorithm during a live round violates the spirit of the interaction ban. [link](https://codeforces.com/blog/entry/133941)

### 2. Copying the Public Code (The Safe Part)

Once you actually click that link and visit a genuinely public repository or wiki, copying code from it is completely legal.

- Codeforces explicitly permits using any third-party code as long as it was **published and publicly available to everyone before the contest started**. [link](https://codeforces.com/topic/134567/en2)

### Why you should just use a traditional Search Engine

If you need to find a public repository or a wiki page for a template during a contest, **use Google, DuckDuckGo, or GitHub Search directly**. [link](https://codeforces.com/blog/entry/150409)

- **No ambiguity:** Standard search engines are 100% legal to use during Codeforces contests.
- **Zero risk of hallucination:** LLMs often hallucinate URLs or append weird query parameters that look highly suspicious. A direct search engine ensures you get the exact, unaltered public code block that Codeforces' plagiarism detector (MOSS) already has indexed as a "safe public source". [link](https://codeforces.com/topic/134567/en2)

Are there specific **wikis or public algorithm repositories** you like to use? I can point you toward the most trusted, standard libraries used by competitive programmers so you can bookmark them before your next contest!

- [link](https://codeforces.com/blog/entry/150409)\
  Codeforces\
  Cheating and AI\
  Can LLMs be used just to debug code or fix syntax errors during a contest, or is the use of LLMs/LRMs completely prohibited?
- [link](https://codeforces.com/blog/entry/133941)\
  Codeforces\
  Rule Restricting the Use of AI \[revision 2024-09-14] - Codeforces\
  Codeforces explicitly restricts AI-based systems (GPT, Gemini, Llama, Claude) during in-contest participation for rated/unrated ro...
- [link](https://www.facebook.com/groups/programmingpilipinas/posts/2177328082736754/)\
  Facebook·Programming Philippines\
  Using AI during codeforces contests is cheating - Facebook\
  You may not input the problem statement, its summary, any excerpt, or a sub-problem into an AI- based system to receive ready-made...

Show all

# how to find cp templates

To find **Competitive Programming (CP) templates**, the best and most reliable method is to <mark>use public code repositories on<span> </span><strong>GitHub</strong></mark> where top competitive programmers share their setups, or to adapt snippets from curated tutorial sites.

Depending on your skill level and programming language, you can find and use templates through the following primary methods:

### 1. Curated GitHub Repositories

Many popular community members maintain extensively optimized, tested libraries of basic setups, fast I/O macros, and complex data structures (like Segment Trees, Graphs, and Math algorithms):

- [7oSkaaa CP Templates](https://github.com/7oSkaaa/CP-Templates) – A highly popular resource featuring a comprehensive boilerplate C++ template, pre-built macros, and visual studio code snippet configurations. [link](https://github.com/7oSkaaa/CP-Templates)
- [Priyansh19077 CP-Templates](https://github.com/Priyansh19077/CP-Templates) – Features reliable, self-contained algorithms optimized for platforms like Codeforces and LeetCode. [link](https://github.com/Priyansh19077/CP-Templates)
- [Suliman CP Repository](https://github.com/suliman-99/CP) – Offers structured templates broken down by category (Graph, Math, String, Matrices) along with VS Code setting files. [link](https://github.com/suliman-99/CP)

### 2. Video Walkthroughs and Explanations

Sometimes seeing _how_ a template is structured helps you use it efficiently under time pressure. High-quality video guides offer deep dives into building your own:

- How to Build Templates in CP (YouTube) – Breaks down boilerplate layouts and how to handle test cases (`void solve()`) seamlessly.
- Building Templates for Competitive Programming (YouTube) – Offers a walkthrough from an Expert-rated perspective on what macros are actually helpful vs. redundant.

### 3. Build Your Own via IDE Snippets (Recommended)

While cloning someone else’s repository is fast, most top coders recommend growing your own template organically. You can store frequently used patterns (like grid bound checks, fast I/O, or custom debugging tools) right inside your IDE:

- **VS Code:** You can open your `cpp.json` user snippets file and paste your starter code there so it auto-completes when you type a shortcut like `cp`.
- **Basic Checklist:** A standard boilerplate should always include `#include<bits/stdc++.h>` (for standard C++ libraries), `ios_base::sync_with_stdio(false); cin.tie(NULL);` (for fast I/O), and standard type definitions like `using ll = long long;`. [link](https://www.scribd.com/document/747543600/my-cp-template)

***

_(Note: If you are looking for "Cp Cpk templates" used in manufacturing and Lean Six Sigma process capability analysis, those are found as Excel spreadsheets on [QI Macros](https://www.qimacros.com/process-capability-analysis/cp-cpk-template/))._ [link](https://www.qimacros.com/process-capability-analysis/cp-cpk-template/)

Are you looking for a template in a specific language like **C++, Python, or Java**? If you'd like, I can provide a **clean, fast-I/O base template code** right here that you can copy and paste immediately.

- [link](https://www.reddit.com/r/codeforces/comments/1r06kky/cp%5Ftemplates/)\
  Reddit·r/codeforces\
  Cp templates : r/codeforces - Reddit\
  Feb 9, 2026 — Start with a base template with typedefs then add snippets of code you find yourself repeatedly using: like 4-connectivity, 8-conn...
- [link](https://github.com/7oSkaaa/CP-Templates)\
  GitHub\
  GitHub - 7oSkaaa/CP-Templates: Competitive Programming Templates · GitHub\
  VS Code Snippets: Cover templates, graphs, trees, data structures, math, DP, strings, geometry, and algorithms.
- [link](https://github.com/Priyansh19077/CP-Templates)\
  GitHub\
  GitHub - Priyansh19077/CP-Templates: Here are my template codes for Competitive Programming with optimised implementations of various algorithms. I personally use them every day and have tested almost all of them in multiple competitive programming contests and practice problems · GitHub\
  Here are my template codes for Competitive Programming with optimised implementations of various algorithms. C++ self-contained te...

Show all

# how to find cp templates in py

You can find **Competitive Programming (CP) templates for Python** across several popular open-source repositories and text editor extensions, which provide boilerplate code for fast I/O, recursion depth fixes, and common algorithms. [link](https://codeforces.com/blog/entry/146788)

### 1. Dedicated GitHub Repositories

The CP community frequently uses a few major repositories to source Python boilerplates:

- **PyRival**: This is the most popular collection of Python templates and optimized data structures for competitive programming. It includes heavily optimized implementations of segment trees, graphs, and math functions specifically designed to bypass PyPy/Python time limit issues.
- **[Python CP Setup](https://github.com/RedHeadphone/python-cp-setup)**: A comprehensive workspace setup that contains ready-to-use VS Code snippets, boilerplate templates, and I/O scripts.
- **CyberkidAdithya/CompetitivePython**: Specifically designed for modern PyPy3 setups on Codeforces and CodeChef. [link](https://codeforces.com/blog/entry/96470)

### 2. VS Code Extensions (Instant Snippets)

If you use Visual Studio Code, you can instantly turn templates into snippets so they auto-populate when you type a keyword like `cp` or `uf`: [link](https://marketplace.visualstudio.com/items?itemName=Kinnito.competitive-templates)

- **[Competitive Programming Templates](https://marketplace.visualstudio.com/items?itemName=Kinnito.competitive-templates)**: This extension supports Python out of the box. It allows you to trigger templates via pre-built triggers or right-click any code block to save it as a custom snippet. [link](https://marketplace.visualstudio.com/items?itemName=Kinnito.competitive-templates)

### Typical Python CP Template Structure

A good Python template handles fast input reading (`sys.stdin.readline`) and bumps up the recursion limit so your Depth First Searches (DFS) don't crash:

python

```
import sys

# 1. Increase recursion depth for deep DFS/graphs
sys.setrecursionlimit(200000)

# 2. Fast I/O operations
input = lambda: sys.stdin.readline().rstrip("\r\n")

def solve():
    # Write your logic here
    pass

def main():
    # Handle multiple test cases safely
    t = 1
    if t: # Change to True/conditional if problem uses multiple testcases
        t = int(input())
    for _ in range(t):
        solve()

if __name__ == "__main__":
    main()
```

Use code with caution.

Would you like help choosing a template optimized for a specific platform like **Codeforces**, or do you need assistance configuring **VS Code JSON snippets** to auto-load your template?

- [link](https://codeforces.com/blog/entry/146788)\
  Codeforces\
  I want a Python3 CP template - Codeforces\
  PyRival: https://github.com/cheran-senthil/PyRival, which is most used template for CP in Python → Reply In English In Russian
- [link](https://marketplace.visualstudio.com/items?itemName=Kinnito.competitive-templates)\
  Visual Studio Marketplace\
  Competitive Programming Templates\
  Supports multiple languages (C++, Python, Java) Templates are stored globally. Search for "Competitive Programming Templates" From...
- [link](https://github.com/RedHeadphone/python-cp-setup/blob/master/README.md)\
  GitHub\
  README.md - Python CP Setup\
  This repository offers a comprehensive setup for competitive programming in Python. It includes VS Code configurations, scripts, b...

Show all

# all cp ds/algo templates in py

Here is a comprehensive collection of production-ready, highly optimized **Python 3 templates** tailored specifically for Competitive Programming (CP).

***

### Fast I/O Boilerplate

Python’s `input()` can be dangerously slow in CP. Always use `sys.stdin.readline` and increase the recursion limit for deep DFS trees. [link](https://github.com/recnac-itna/Algorithm%5FTemplates)

python

```
import sys

# Increase recursion depth for deep DFS/DP
sys.setrecursionlimit(2000000)

def input():
    return sys.stdin.readline().rstrip()

# Fast read single integers or arrays
def read_int(): return int(input())
def read_ints(): return list(map(int, input().split()))
```

Use code with caution.

***

### Data Structures

#### 1. Disjoint Set Union (DSU / Union-Find)

Optimized with **Path Compression** and **Rank Optimization**. [link](https://algo.monster/templates)

python

```
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [1] * n

    def find(self, i):
        if self.parent[i] == i:
            return i
        self.parent[i] = self.find(self.parent[i])  # Path compression
        return self.parent[i]

    def union(self, i, j):
        root_i = self.find(i)
        root_j = self.find(j)
        if root_i != root_j:
            if self.rank[root_i] < self.rank[root_j]:
                root_i, root_j = root_j, root_i
            self.parent[root_j] = root_i
            if self.rank[root_i] == self.rank[root_j]:
                self.rank[root_i] += 1
            return True
        return False
```

Use code with caution.

#### 2. Segment Tree (Point Update, Range Query)

0-indexed array implementation for range sum queries. Easily adapted to Range Min/Max. [link](https://github.com/vndee/algo-templates)

python

```
class SegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.tree = [0] * (2 * self.n)
        self.build(data)

    def build(self, data):
        for i in range(self.n):
            self.tree[self.n + i] = data[i]
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[2 * i] + self.tree[2 * i + 1]

    def update(self, pos, value):
        pos += self.n
        self.tree[pos] = value
        while pos > 1:
            pos //= 2
            self.tree[pos] = self.tree[2 * pos] + self.tree[2 * pos + 1]

    def query(self, left, right):  # [left, right) interval
        res = 0
        left += self.n
        right += self.n
        while left < right:
            if left % 2 == 1:
                res += self.tree[left]
                left += 1
            if right % 2 == 1:
                right -= 1
                res += self.tree[right]
            left //= 2
            right //= 2
        return res
```

Use code with caution.

#### 3. Fenwick Tree (Binary Indexed Tree - BIT)

Lightweight alternative to a Segment Tree for prefix sum and point updates. [link](https://github.com/vndee/algo-templates)

python

```
class FenwickTree:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)

    def add(self, idx, val):  # 1-indexed
        while idx <= self.n:
            self.tree[idx] += val
            idx += idx & (-idx)

    def query(self, idx):  # 1-indexed Prefix Sum
        s = 0
        while idx > 0:
            s += self.tree[idx]
            idx -= idx & (-idx)
        return s
```

Use code with caution.

***

### Graph Algorithms

#### 1. Dijkstra's Algorithm

Finds shortest paths using a Min-Heap. Python's `heapq` is implicitly a min-heap. [link](https://www.youtube.com/watch?v=kQDxmjfkIKY\&t=2757)

python

```
import heapq

def dijkstra(graph, start, n):
    dist = [float('inf')] * n
    dist[start] = 0
    pq = [(0, start)]  # (distance, node)

    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        for v, weight in graph[u]:
            if dist[u] + weight < dist[v]:
                dist[v] = dist[u] + weight
                heapq.heappush(pq, (dist[v], v))
    return dist
```

Use code with caution.

#### 2. Breadth-First Search (BFS)

Optimal tracking via `collections.deque` for true O(1) pop actions. [link](https://github.com/Dash10107/dsa-cheatsheet)

python

```
from collections import deque

def bfs(graph, start, n):
    visited = [False] * n
    queue = deque([start])
    visited[start] = True

    while queue:
        u = queue.popleft()
        for v in graph[u]:
            if not visited[v]:
                visited[v] = True
                queue.append(v)
```

Use code with caution.

***

### String Algorithms

#### 1. Knuth-Morris-Pratt (KMP) Substring Match

Computes the Prefix Function (O(N+M)). [link](https://github.com/vndee/algo-templates)

python

```
def compute_lps(pattern):
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps
```

Use code with caution.

***

### Number Theory

#### 1. Sieve of Eratosthenes & Prime Factorization

Generates all primes up to N cleanly in

𝑂

(

𝑁

log

log

𝑁

)

. [link](https://github.com/vndee/algo-templates)

python

```
def sieve(n):
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    for p in range(2, int(n**0.5) + 1):
        if is_prime[p]:
            for i in range(p * p, n + 1, p):
                is_prime[i] = False
    return [i for i, prime in enumerate(is_prime) if prime]
```

Use code with caution.

#### 2. Extended Euclidean Algorithm (GCD)

Finds coefficients such that

𝑎𝑥

+𝑏𝑦

\=gcd

(

𝑎

,

𝑏

)

. [link](https://github.com/vndee/algo-templates)

python

```
def ext_gcd(a, b):
    if b == 0:
        return a, 1, 0
    gcd, x1, y1 = ext_gcd(b, a % b)
    x = y1
    y = x1 - (a // b) * y1
    return gcd, x, y
```

Use code with caution.

Would you like me to add templates for more complex paradigms like **Binary Lifting (LCA)**, **Digit DP**, or **Matrix Exponentiation**? Let me know what your target runtime requirements are!

- [link](https://github.com/vndee/algo-templates)\
  GitHub\
  Algorithm templates for competitive programming ... - GitHub\
  Solution for diophantine equation problems using extended gcd dp.cpp basic dynamic programing problems. Calculate an express geome...
- [link](https://www.youtube.com/watch?v=kQDxmjfkIKY\&t=2757)\
  YouTube·CodDevX\
  Data Structures And Algorithms in Python\
  Jun 10, 2020 — Python's \`collections\` module provides a \`deque\` (double-ended queue) class, which can be used to implement a queue efficiently. Y...\
  13m
- [link](https://algo.monster/templates)\
  AlgoMonster\
  LeetCode Algorithm Templates - AlgoMonster\
  Learn more about this template in the detailed article. Update pointers based on condition 8. Fast pointer always moves forward … ...

Show all

# (d) name of all cp ds/algo templates in py

In competitive programming (CP) using **Python**, having a pre-built library of Data Structures (DS) and Algorithms (Algo) templates is critical because Python lacks certain built-in containers (like C++'s `std::set` or `std::map`) and can face strict execution time limits.

The most common and essential **CP data structures and algorithm templates in Python** are categorized below:

### 1. Advanced Data Structures (Range Queries & Sets)

- **Segment Tree**: Used for point updates and range queries (sum, min, max) in\
  𝑂\
  (\
  log\
  𝑁\
  )\
  time. Usually implemented recursively or iteratively (faster in Python).
- **Fenwick Tree (Binary Indexed Tree / BIT)**: A lightweight structure for prefix sums and point updates in\
  𝑂\
  (\
  log\
  𝑁\
  )\
  time with minimal code overhead.
- **Disjoint Set Union (DSU / Union-Find)**: Tracks partitions of elements with path compression and rank optimization for near-O(1) operations.
- **Trie (Prefix Tree)**: Essential for string prefix problems, autocomplete simulations, or bitwise XOR maximization.
- **Sparse Table**: Used for static range queries (like Range Minimum Query) in O(1) time after\
  𝑂\
  (\
  𝑁\
  log\
  𝑁\
  )\
  preprocessing.

### 2. Graph Algorithms

- **Breadth-First Search (BFS) & Depth-First Search (DFS)**: Standard graph traversals. Python implementations often require increasing the recursion limit via `sys.setrecursionlimit()` for DFS.
- **Dijkstra's Algorithm**: Single-source shortest path using the built-in `heapq` module.
- **Bellman-Ford & SPFA**: Shortest path algorithms handling negative weight cycles.
- **Kruskal’s & Prim’s Algorithms**: Minimum Spanning Tree (MST) generation (Kruskal's relies heavily on a pre-built DSU template).
- **Tarjan’s / Kosaraju's Algorithm**: For finding Strongly Connected Components (SCC) in directed graphs.
- **Kahn’s Algorithm & DFS-based Topological Sort**: For ordering Directed Acyclic Graphs (DAGs).
- **Heavy-Light Decomposition (HLD) & Centroid Decomposition**: Advanced tree parsing utilities.

### 3. String Algorithms

- **KMP (Knuth-Morris-Pratt)**: String matching pattern template in O(N+M) time.
- **Rabin-Karp (Rolling Hash)**: String hashing technique for multi-pattern matching and substring checking.
- **Z-Algorithm**: Computes the longest common prefix between a string and its suffixes.
- **Suffix Automaton**: Advanced string representation template for complex string operations.

### 4. Mathematical Utilities

- **Fast Exponentiation & Matrix Exponentiation**: Essential for computing\
  𝐴𝐵\
  (mod𝑀)\
  or solving linear recurrences (like N-th Fibonacci) in\
  𝑂\
  (\
  log\
  𝑁\
  )\
  time.
- **Sieve of Eratosthenes & Linear Sieve**: Fast prime generation templates.
- **Extended Euclidean Algorithm & Modular Inverse**: Essential for combinatorial math under a modulo (e.g., computing\
  𝑛𝐶𝑟\
  (mod𝑀)\
  ).

### 5. Algorithmic Paradigms

- **Binary Search**: Custom predicates matching template (though `bisect` handles standard sorted arrays).
- **Sliding Window & Two Pointers**: Linear runtime patterns for array manipulation.
- **Mo's Algorithm**: Square root decomposition template for answering offline queries.
- **Digit DP / Bitmask DP**: Standard structural scaffolding for complex dynamic programming problems.

### 💡 Python-Specific CP Template Boosts

Because standard Python lacks some features, top competitive programmers maintain specialized code stubs to bypass bottlenecks:

- **Fast I/O Stub**: Using `sys.stdin.read` and `sys.stdout.write` to quickly load massive competitive datasets.
- **SortedList Wrapper**: A replacement for C++ `std::set`, frequently implemented using the third-party `sortedcontainers` library (available on platforms like LeetCode) or self-built using a Fenwick Tree or SQRT Decomposition when running on platforms like Codeforces.

Would you like a copy-paste ready implementation for a specific template from this list (such as an **iterative Segment Tree** or an optimized **DSU**)? Let me know!

# all names of cp ds/algo templates

In **competitive programming (CP)**, speed and accuracy are everything. Having pre-written code snippets—commonly known as **CP templates**—saves crucial time during contests on platforms like Codeforces or CodeChef. [link](https://github.com/vndee/algo-templates)

The most essential data structure (DS) and algorithm templates used by competitive programmers are organized below by category:

### ⚙️ Core Contest & I/O Templates

- **Fast I/O & Macros:** Standard starter code using `ios_base::sync_with_stdio(0); cin.tie(0);` to speed up input/output operations, along with common macros like `all(x)`, `ll` (long long), and debugging configurations.
- **Coordinate Compression:** Maps large, sparse coordinate values to a smaller, continuous index range from 0 to N-1. [link](https://7oskaaa.github.io/CP-Templates/)

### 📊 Advanced Data Structures (Range Queries)

- **Segment Tree:** Templates for point updates and range queries. This includes advanced variants like **Lazy Propagation** (for range updates), **Persistent Segment Tree**, and **2D Segment Tree**. [link](https://github.com/7oSkaaa/CP-Templates)
- **Fenwick Tree / Binary Indexed Tree (BIT):** A lightweight, fast template used for point updates and prefix sum queries. [link](https://github.com/vndee/algo-templates)
- **Sparse Table:** A static structure used to answer Range Minimum Queries (RMQ) in constant O(1) time after\
  𝑂\
  (\
  𝑁\
  log\
  𝑁\
  )\
  preprocessing. [link](https://github.com/vndee/algo-templates)
- **Disjoint Set Union (DSU / Union-Find):** Manages disjoint sets with optimization path compression and union by rank/size. [link](https://dev.to/iuliagroza/complete-introduction-to-the-30-most-essential-data-structures-algorithms-43kd)
- **Policy-Based Data Structures (PBDS):** Specifically the `ordered_set` template in GCC C++, which allows finding the k-th smallest element or the rank of an element in\
  𝑂\
  (\
  log\
  𝑁\
  )\
  time. [link](https://7oskaaa.github.io/CP-Templates/)
- **Square Root (SQRT) Decomposition:** Breaks an array into blocks of size\
  𝑁√\
  to process range queries. [link](https://7oskaaa.github.io/CP-Templates/)
- **Mo's Algorithm:** An offline query optimization technique that reorders queries using SQRT decomposition to achieve\
  𝑂\
  (\
  (\
  𝑁

+𝑄\
)\
𝑁√\
)\
complexity. [link](https://7oskaaa.github.io/CP-Templates/)

### 🌳 Tree & Graph Algorithms

- **Lowest Common Ancestor (LCA):** Implemented using Binary Lifting or RMQ templates.
- **Heavy-Light Decomposition (HLD):** Breaks trees down into paths to allow segment tree operations on tree nodes and paths.
- **Centroid Decomposition:** A divide-and-conquer tree technique that breaks a tree down by its centroids to solve path-related problems.
- **Shortest Paths:** Templates for **Dijkstra** (single-source, positive weights), **Bellman-Ford** (handles negative weights), and **Floyd-Warshall** (all-pairs shortest path).
- **Minimum Spanning Tree (MST):** **Kruskal’s** (uses DSU) and **Prim’s** algorithms.
- **Strongly Connected Components (SCC):** **Tarjan’s** or **Kosaraju’s** algorithms for finding directed cycles.
- **Network Flow & Matching:** Templates for **Dinitz’s Algorithm** (max flow), **Edmonds-Karp** (max flow), and **Kuhn’s / Hungarian Algorithm** for bipartite matching. [link](https://dwf.dev/docs/templates/data-structures-algorithms/)

### 🔢 Math & Number Theory

- **Sieve of Eratosthenes:** Standard sieve and **Linear Sieve** for finding prime factors and computing multiplicative functions (like Euler's Totient φ) in O(N).
- **Extended Euclidean Algorithm:** Finds modular inverses and solves Linear Diophantine Equations (ax + by = c).
- **Binary / Matrix Exponentiation:** Computes\
  𝑎𝑏\
  (mod𝑚)\
  or the n-th term of custom linear recurrences (like Fibonacci variants) in\
  𝑂\
  (\
  log\
  𝑁\
  )\
  time.
- **Primality Testing:** The **Miller-Rabin** deterministic template for checking large prime numbers.
- **Combinatorics (nCr):** Templates for precomputing factorials and modular inverse factorials to answer combinations in O(1).
- **Big Integer / BigInt:** A structure wrapper handling mathematical operations for numbers exceeding standard 64-bit integer limits. [link](https://github.com/lior5654/competitive-programming-templates)

### 🔤 String Optimization

- **Knuth-Morris-Pratt (KMP):** Computes prefix functions to search for substrings in linear time.
- **Z-Algorithm:** Generates a Z-array for exact string matching.
- **Rabin-Karp / Rolling Hash:** Utilizes modular arithmetic to quickly compare string intervals.
- **Trie:** Prefix tree structure often used for string dictionary storage or binary XOR maximization tasks.
- **Manacher’s Algorithm:** Finds all palindromic substrings in a string in O(N) time. [link](https://www.geeksforgeeks.org/blogs/top-algorithms-and-data-structures-for-competitive-programming/)

### 📐 Computational Geometry

- **Geometry Vector/Point Template:** Struct containing operations for dot products, cross products, and distance functions.
- **Convex Hull:** Templates like **Graham Scan** or **Monotone Chain** to find the smallest convex polygon containing a set of points. [link](https://github.com/vndee/algo-templates)

### 📈 Dynamic Programming (DP) Optimizations

- **Convex Hull Trick (CHT):** Optimizes DP transitions of the form\
  𝐷𝑃\
  \[\
  𝑖\
  ]\
  \=min\
  (\
  𝑚𝑗\
  ⋅𝑥𝑖

+𝑐𝑗\
)\
from O(N²) to\
𝑂\
(\
𝑁\
log\
𝑁\
)\
or O(N).

- **Digit DP:** A template approach used to count numbers satisfying a specific property within a given range\
  \[\
  𝐿\
  ,\
  𝑅\
  ]\
  . [link](https://github.com/vndee/algo-templates)

For high-quality boilerplate code implementations, reference repositories like [Ahmed Hossam's CP Templates](https://7oskaaa.github.io/CP-Templates/) or [vndee's GitHub Algo Templates](https://github.com/vndee/algo-templates) provide production-ready CP code structures. [link](https://github.com/vndee/algo-templates)

Are you building a personal **C++ starter template**, or are you looking for a **specific implementation** of one of these structures (like a Lazy Segment Tree)? Let me know what you need to focus on next!

- [link](https://github.com/vndee/algo-templates)\
  GitHub\
  Algorithm templates for competitive programming ... - GitHub\
  Dynamic programing DAG datastruct.cpp. Solution for diophantine equation problems using extended gcd. More basic dynamic programin...
- [link](https://7oskaaa.github.io/CP-Templates/)\
  GitHub Pages documentation\
  CP Templates — Ahmed Hossam\
  Main C++ template with macros. Data Structures: BST, Segment Trees, Fenwick Trees, Sparse Table, DSU, HLD, Ordered Set, Trie, Mono...
- [link](https://github.com/7oSkaaa/CP-Templates)\
  GitHub\
  GitHub - 7oSkaaa/CP-Templates: Competitive Programming Templates · GitHub\
  Dynamic Programming: Digit DP, Cover templates, graphs, trees, data structures, math, DP, strings, geometry, and algorithms.

Show all

# all names of cp ds/algo templates on math/nt

Here is a comprehensive list of the core **Math and Number Theory (NT)** data structures and algorithm templates used in Competitive Programming (CP). They are grouped by their specific sub-domain.

### Prime Numbers & Factorization

- **Sieve of Eratosthenes:** Standard\
  𝑂\
  (\
  𝑁\
  log\
  log\
  𝑁\
  )\
  approach to find all primes up to\
  𝑁\
  .
- **Linear Sieve (Euler's Sieve):** Finds primes in\
  𝑂\
  (\
  𝑁\
  )\
  and calculates multiplicative functions.
- **Segmented Sieve:** Finds primes in a specific range\
  \[\
  𝐿\
  ,\
  𝑅\
  ]\
  when\
  𝑅\
  is large but\
  𝑅\
  −𝐿\
  is relatively small.
- **Miller-Rabin Primality Test:** Deterministic or probabilistic test to check if a large number (up to\
  1018\
  ) is prime in\
  𝑂\
  (\
  𝑘\
  log3𝑁\
  )\
  .
- **Pollard's Rho Algorithm:** Randomized algorithm for fast integer factorization in\
  𝑂\
  (\
  𝑁1/4\
  )\
  .

### Modular Arithmetic & Equations

- **Binary Exponentiation (Modular Inverse):** Computes\
  𝑎𝑏\
  (mod𝑚)\
  in\
  𝑂\
  (\
  log\
  𝑏\
  )\
  . Uses Fermat's Little Theorem for modular inverses.
- **Extended Euclidean Algorithm (Extended GCD):** Finds coefficients\
  𝑥\
  ,\
  𝑦\
  such that\
  𝑎𝑥

+𝑏𝑦\
\=gcd\
(\
𝑎\
,\
𝑏\
)\
. Used for finding modular inverse when\
gcd\
(\
𝑎\
,\
𝑚\
)\
\=1\
.

- **Linear Congruence Equation Solver:** Solves equations of the form\
  𝑎𝑥\
  ≡𝑏\
  (mod𝑚)\
  .
- **Chinese Remainder Theorem (CRT):** Solves a system of simultaneous linear congruences.
  - **General CRT / Non-coprime CRT:** Handles cases where moduli are not pairwise coprime.
- **Baby-step Giant-step (Shanks' Algorithm):** Solves the Discrete Logarithm problem (\
  𝑎𝑥\
  ≡𝑏\
  (mod𝑚)\
  ) in\
  𝑂\
  (\
  𝑚√\
  )\
  .
- **Tonelli-Shanks Algorithm:** Solves quadratic congruences (\
  𝑥2\
  ≡𝑛\
  (mod𝑝)\
  ) to find modular square roots.

### Multiplicative Functions & Counting

- **Euler's Totient Function (**

**𝜙**

**):** Counts integers up to\
𝑁\
that are coprime to\
𝑁\
.

- **Mobius Function (**

**𝜇**

**) & Mobius Inversion:** Used for inclusion-exclusion optimizations in counting problems.

- **Dirichlet Convolution:** Combines multiplicative functions; crucial for analytical number theory templates.
- **Sublinear Summation (Lucas' / Sieve Optimization):** Algorithms like Min\_25 Sieve or Du Sieve to compute prefix sums of multiplicative functions in\
  𝑂\
  (\
  𝑁2/3\
  )\
  or\
  𝑂\
  (\
  𝑁3/4\
  )\
  .

### Combinatorics

- **nCr Table / Factorial Templates:** Precomputing factorials and inverse factorials for\
  𝑂\
  (\
  1\
  )\
  combinations under a modulo.
- **Lucas' Theorem:** Computes\
  𝑛𝐶𝑟\
  (mod𝑝)\
  when\
  𝑝\
  is a small prime and\
  𝑛\
  ,\
  𝑟\
  are very large.
- **Stirling Numbers (1st and 2nd Kind):** Templates for partitioning sets and permutations.
- **Catalan Numbers:** Calculating structures like balanced parenthesization, tree counting, etc.

### Matrix & Linear Algebra

- **Matrix Exponentiation:** Solves linear recurrence relations (like Fibonacci) in\
  𝑂\
  (\
  𝐾3\
  log\
  𝑁\
  )\
  .
- **Gauss-Jordan Elimination:** Solves systems of linear equations, calculates matrix inverse, or determines matrix rank over reals or\
  𝐺𝐹\
  (\
  2\
  )\
  .
- **XOR Basis (Linear Basis):** A specialized template using Gaussian elimination on bits to solve maximum/minimum XOR subset problems.

### Polynomials & Transformations

- **Fast Fourier Transform (FFT):** Multiplies two polynomials in\
  𝑂\
  (\
  𝑁\
  log\
  𝑁\
  )\
  using complex numbers.
- **Number Theoretic Transform (NTT):** Performs polynomial multiplication under a specific prime modulo (e.g.,\
  998244353\
  ) to avoid floating-point errors.
- **Walsh-Hadamard Transform (FWHT):** Polynomial multiplication where the indices are combined using bitwise operations (AND, OR, XOR).

Would you like a complete, production-ready C++ code template for any specific item on this list, such as the **NTT**, **Linear Sieve**, or **XOR Basis**?

# is prime in py

Python does not have a built-in `is_prime()` function in its standard library, but you can easily implement your own or use an external library like **SymPy**. [link](https://www.geeksforgeeks.org/python/python-program-to-check-whether-a-number-is-prime-or-not/)

Here are the most efficient ways to check if a number is prime in Python.

### 1. The Cleanest & Faster Way (Custom Function)

This optimized approach tests divisibility up to the **square root** of the number, skipping even numbers after checking 2. This keeps the time complexity at an efficient

**𝑶**

**(**

**𝒏√**

**)**

. [link](https://www.reddit.com/r/learnpython/comments/1oo4p5d/do%5Fyou%5Fknow%5Fany%5Fpython%5Fcode%5Fto%5Fdetermine%5Fif%5Fa/)

python

```
def is_prime(n):
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False

    # Check odd numbers up to the square root of n
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False

    return True

# Examples:
print(is_prime(11))  # Returns True
print(is_prime(4))   # Returns False
```

Use code with caution.

### 2. The One-Liner (Using `all`)

If you want a compact snippet, you can combine a generator expression with the built-in `all()` function: [link](https://stackoverflow.com/questions/71174734/is-prime-one-liner-in-python)

python

```
is_prime = lambda n: n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))

print(is_prime(17))  # Returns True
```

Use code with caution.

### 3. Using the SymPy Library (No Coding Required)

If you are working on data science or math projects and already have external packages installed, the SymPy math library has a highly-optimized function built right in: [link](https://www.geeksforgeeks.org/python/python-program-to-check-whether-a-number-is-prime-or-not/)

bash

```
pip install sympy
```

Use code with caution.

python

```
from sympy import isprime

print(isprime(13))  # Returns True
print(isprime(1))   # Returns False
```

Use code with caution.

Are you building this for a **coding interview** scenario, looking to generate a **list of primes** in a specific range, or optimizing for **extremely large numbers**? Let me know so I can tailor the algorithm for you.

- [link](https://stackoverflow.com/questions/71174734/is-prime-one-liner-in-python)\
  Stack Overflow\
  primes - is\_prime one liner in python - Stack Overflow\
  a prime generator is easily implemented using the isprime function (they can "recursively" use each other), it will require at lea...
- [link](https://www.geeksforgeeks.org/python/python-program-to-check-whether-a-number-is-prime-or-not/)\
  GeeksforGeeks\
  Check Prime Number in Python - GeeksforGeeks\
  May 16, 2026 — This method uses the isprime() function from the SymPy library to check whether a number is prime. Function returns True for prime...
- [link](https://www.reddit.com/r/learnpython/comments/1oo4p5d/do%5Fyou%5Fknow%5Fany%5Fpython%5Fcode%5Fto%5Fdetermine%5Fif%5Fa/)\
  Reddit·r/learnpython\
  do you know any Python code to determine if a number is ...\
  Even numbers cannot be prime because they are divisible by 2, so we can halve the number of iterations by only considering odd div...

Show all

## what is sympy

**SymPy** is <mark>an open-source<span> </span><strong>Python library for symbolic mathematics</strong></mark>. Unlike standard Python math or NumPy, which calculate approximate numerical answers (like `0.3333333333`), SymPy computes exact mathematical expressions symbolically (keeping it as a fraction `1/3`).

It aims to become a full-featured Computer Algebra System (**CAS**) while keeping the code as simple and comprehensible as possible.

***

### Key Capabilities of SymPy

- **Algebra:** Simplify expressions, expand polynomials, and solve complex equations.
- **Calculus:** Compute exact derivatives, integrals, limits, and Taylor series.
- **Discrete Math:** Check for prime numbers, find prime factors, and work with combinatorics.
- **Matrix Operations:** Perform exact linear algebra, calculate determinants, eigenvalues, and eigenvectors.

***

### Direct Comparison: Numerical vs. Symbolic Math

The table below highlights the core difference between standard numerical floating-point math and SymPy's symbolic approach.

| Mathematical Operation | Standard Python / NumPy (Numerical)              | SymPy (Symbolic)                            |
| ---------------------- | ------------------------------------------------ | ------------------------------------------- |
| **Square Root of 8**   | `2.82842712474619` (Float approximation)         | `2*sqrt(2)` (Exact simplified form)         |
| **Fraction 1/3 + 1/3** | `0.6666666666666666` (Floating-point)            | `2/3` (Exact fraction object)               |
| **Evaluating sin(𝜋)**  | `1.2246467991473532e-16` (Rounding error)        | `0` (Exact mathematical truth)              |
| **Variables (x + x)**  | Throws a `NameError` unless x has a number value | `2*x` (Treats x as a true algebraic symbol) |

***

### Code Examples

#### 1. Algebraic Factoring and Expansion

python

```
from sympy import symbols, expand, factor

x, y = symbols('x y')
expr = (x + y)**2

print(expand(expr))  # Outputs: x**2 + 2*x*y + y**2
print(factor(x**2 - y**2))  # Outputs: (x - y)*(x + y)
```

Use code with caution.

#### 2. Exact Calculus

python

```
from sympy import symbols, diff, integrate, sin

x = symbols('x')

# Take the derivative of sin(x)*x
print(diff(sin(x) * x, x))  # Outputs: x*cos(x) + sin(x)

# Take the definite integral of x^2 from 0 to 3
print(integrate(x**2, (x, 0, 3)))  # Outputs: 9
```

Use code with caution.

Would you like to see how to use SymPy to **solve specific algebraic equations**, compute **derivatives/integrals** for a math problem, or **pretty-print** expressions with LaTeX formatting?

# what are the ways of is prime in py

In Python, checking if a number is prime can be done in several ways, ranging from simple loops to highly optimized mathematical approaches.

Here is a breakdown of the most common methods, ordered from **easiest to most efficient**.

***

### 1. The Naive Approach (Basic Loop)

This method checks if the number `n` is divisible by any number from 2 up to `n - 1`.

- **Best for:** Small numbers or absolute beginners.
- **Time Complexity:**\
  𝑂\
  (\
  𝑛\
  )

python

```
def is_prime_naive(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False  # Found a factor, so it's not prime
    return True
```

Use code with caution.

### 2. The Square Root Optimization (Recommended for general use)

A mathematical property states that if a number

𝑛

has a factor, at least one factor must be less than or equal to

𝑛√

. You only need to loop up to `int(n**0.5) + 1`.

- **Best for:** Standard coding interviews and general applications.
- **Time Complexity:**\
  𝑂\
  (\
  𝑛√\
  )

python

```
def is_prime_optimized(n):
    if n <= 1:
        return False
    # Check divisibility only up to the square root of n
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
```

Use code with caution.

### 3. The

6𝑘

±1

Optimization (Highly Optimized Trial Division)

All primes greater than 3 can be written in the form

6𝑘

±1

(where

𝑘

is an integer). This allows you to skip checking any even numbers or multiples of 3, cutting down the loop iterations significantly.

- **Best for:** Competitive programming where you need maximum speed without complex libraries.
- **Time Complexity:**\
  𝑂\
  (\
  𝑛√\
  )\
  but runs roughly 3 times faster than Method 2.

python

```
def is_prime_fast(n):
    if n <= 1:
        return False
    if n <= 3:
        return True  # 2 and 3 are prime
    if n % 2 == 0 or n % 3 == 0:
        return False

    # Check factors of the form 6k +/- 1 up to sqrt(n)
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True
```

Use code with caution.

### 4. For Generating Multiple Primes: Sieve of Eratosthenes

If your goal isn't just to check _one_ number, but to find **all prime numbers up to a certain limit**, trial division is too slow. The Sieve of Eratosthenes works by iteratively marking the multiples of each prime as composite.

- **Best for:** Generating a list of primes.
- **Time Complexity:**\
  𝑂\
  (\
  𝑛\
  log\
  log\
  𝑛\
  )

python

```
def sieve_of_eratosthenes(limit):
    primes = [True] * (limit + 1)
    primes[0] = primes[1] = False

    for prime in range(2, int(limit**0.5) + 1):
        if primes[prime]:
            # Mark all multiples of the prime as False
            for multiple in range(prime * prime, limit + 1, prime):
                primes[multiple] = False

    # Return a list of all numbers that remained True
    return [num for num, is_p in enumerate(primes) if is_p]
```

Use code with caution.

***

### Summary Comparison

| Method             | Best Used For                       | Speed for Large Numbers     |
| ------------------ | ----------------------------------- | --------------------------- |
| **1. Naive Loop**  | Learning logic / very small numbers | 🐌 Slowest                  |
| **2. Square Root** | Standard scripts & interviews       | ⚡ Fast                     |
| **3. 6𝑘±1 Rule**   | Performance-critical single checks  | 🚀 Very Fast                |
| **4. Sieve**       | Finding a range of many primes      | 🏆 Best for bulk generation |

Are you trying to check a **single, massive number** (like cryptography-sized numbers), or are you looking to **generate a list of primes** up to a certain limit? I can provide a specialized algorithm like **Miller-Rabin** or tailor a script to your exact needs.

## advanced algo

For **massive numbers** (like those used in cryptography, containing hundreds of digits) or advanced competitive programming, standard trial division fails. Instead, computer scientists use **probabilistic primality tests** and highly optimized **sub-linear sieves**.

Here are the advanced algorithms used to handle large-scale primality in Python.

***

### 1. Miller-Rabin Primality Test (The Cryptographic Standard)

This is a **probabilistic test**. It cannot prove a number is prime with absolute certainty, but it can prove a number is **composite** instantly. By running the test multiple times (

𝑘

rounds) with random bases, the probability of a false positive drops to less than

(

1

/4

)𝑘

—effectively zero for

𝑘

\=40

.

- **Best for:** Massive numbers (\
  \>10100\
  ) used in RSA encryption.
- **Time Complexity:**\
  𝑂\
  (\
  𝑘\
  log3𝑛\
  )

python

```
import random

def is_prime_miller_rabin(n, k=40):
    """
    Returns True if n is probably prime, False if n is definitely composite.
    k is the number of rounds of testing to run.
    """
    if n <= 1 or n == 4:
        return False
    if n <= 3:
        return True
    if n % 2 == 0:
        return False

    # Write n-1 as 2^s * d by factoring out powers of 2 from n-1
    d = n - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1

    # Witness loop
    for _ in range(k):
        a = random.randint(2, n - 2)
        # Compute (a^d) % n efficiently using modular exponentiation
        x = pow(a, d, n)

        if x == 1 or x == n - 1:
            continue

        for _ in range(s - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                break
        else:
            return False  # Definitely composite

    return True  # Highly likely to be prime
```

Use code with caution.

### 2. Segmented Sieve of Eratosthenes (Memory-Efficient Range Search)

The standard Sieve of Eratosthenes requires an array of size

𝑁

in memory. If

𝑁

\=109

, your program will run out of RAM. The **Segmented Sieve** solves this by dividing the range

\[

2

,

𝑁

]

into smaller blocks (segments) of size

𝑁√

and checking them one by one.

- **Best for:** Generating primes in a huge range without melting your computer's RAM.
- **Space Complexity:** Reduces from\
  𝑂\
  (\
  𝑁\
  )\
  down to\
  𝑂\
  (\
  𝑁√\
  )\
  .

python

```
def segmented_sieve(limit):
    import math
    segment_size = int(math.sqrt(limit)) + 1

    # Step 1: Find all primes up to sqrt(limit) using standard sieve
    def simple_sieve(max_val):
        is_p = [True] * (max_val + 1)
        for p in range(2, int(math.sqrt(max_val)) + 1):
            if is_p[p]:
                for i in range(p * p, max_val + 1, p):
                    is_p[i] = False
        return [i for i in range(2, max_val + 1) if is_p[i]]

    base_primes = simple_sieve(segment_size)
    primes_found = list(base_primes)

    # Step 2: Segment processing
    low = segment_size
    high = 2 * segment_size

    while low < limit:
        if high > limit:
            high = limit

        # Create a boolean array for the current segment [low, high]
        is_prime_segment = [True] * (high - low + 1)

        # Mark multiples of base primes in the current segment
        for p in base_primes:
            # Find the minimum number in [low, high] that is a multiple of p
            start = (low // p) * p
            if start < low:
                start += p

            for j in range(start, high + 1, p):
                is_prime_segment[j - low] = False

        # Collect primes from this segment
        for i in range(low, high + 1):
            if is_prime_segment[i - low]:
                primes_found.append(i)

        # Move to the next segment
        low += segment_size
        high += segment_size

    return primes_found
```

Use code with caution.

### 3. Built-in C-Optimized Libraries (The Pragmatic Way)

If you are doing advanced math in Python, **do not write the pure Python code yourself**. Python loops are structurally slow. Instead, use external libraries compiled in C/C++:

- **`sympy.isprime(n)`**: Uses a deterministic combination of the Miller-Rabin test and Lucas test (known as the BPSW test). It is **100% accurate** for numbers up to\
  264\
  and practically flawless beyond.
- **`gmpy2.is_prime(n)`**: Leverages the GMP (GNU Multiple Precision Arithmetic) C-library. It is the absolute fastest library for dealing with multi-million-digit numbers in Python.

python

```
# pip install sympy
from sympy import isprime

print(isprime(1000000000000037))  # Returns True instantly
```

Use code with caution.

***

### Advanced Comparison Matrix

| Algorithm           | Primary Use Case                             | Accuracy                   | Edge Limits                          |
| ------------------- | -------------------------------------------- | -------------------------- | ------------------------------------ |
| **Miller-Rabin**    | Cryptography / Testing isolated huge numbers | Probabilistic (Adjustable) | Virtually unlimited (10500+)         |
| **Segmented Sieve** | Finding a massive _range_ of primes          | 100% Deterministic         | Kept bounds limited by time, not RAM |
| **SymPy `isprime`** | Production applications & Rapid prototyping  | 100% up to 264             | Handled natively via C optimization  |

Are you building something specific, like an **RSA encryption system**, or optimization for a **LeetCode / Competitive Programming** problem? Let me know the scale of your numbers so we can tailor the runtime.

## why random instead of magic numbers

In the **Miller-Rabin** algorithm, using **random numbers** rather than a fixed set of "magic numbers" (like `[2, 3, 5, 7, 11]`) is a deliberate design choice that <mark>prevents<span> </span><strong>adversarial attacks</strong><span> </span>and allows you to test numbers of any size</mark>.

Here is exactly why randomness beats static choices in this advanced algorithm:

### 1. Guarding Against "Strong Pseudoprimes" (Adversarial Input)

For any fixed base you choose (e.g., base 2), there exist composite numbers that can trick the test into thinking they are prime. These are called **strong pseudoprimes**.

- If you use a **static list** of magic numbers, a hacker or an adversary could easily calculate a massive composite number designed to fool exactly those bases. They could then bypass your security checks (e.g., passing a fake prime into an RSA key generator).
- By choosing a **random base** a for every round, an adversary cannot predict which bases your program will test. They cannot build a composite number that reliably cheats the system.

### 2. The

14

Probability Math

The Miller-Rabin test has a strict mathematical guarantee: for _any_ odd composite number n, at least **75% of all possible bases** between 2 and n-2 will act as a "witness" to its compositeness (meaning they will prove it is not prime). At most **25%** will be "liars" (falsely claiming it is prime).

By picking a base completely at random:

- The chance of randomly picking a "liar" base is\
  ≤14\
  (25%).
- If you run k rounds with _independent random selections_, the chance of picking a liar base k times in a row drops exponentially to

**(**

**14**

**)𝑘**\
.

- With k = 40 rounds, the probability of a false positive is less than 1 in 10²⁴ (which is safer than the physical probability of a hardware memory error flipping a bit in your CPU).

### 3. Scaling Beyond 2⁶⁴

You _can_ actually use magic numbers—but only for smaller scales.

Mathematicians have proven that if you use a specific set of 12 magic numbers `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]`, the test becomes **100% deterministic** (no longer probabilistic) for any number n < 2⁶⁴ (approx. 1.8 × 10¹⁹).

However, once your numbers get larger than 2⁶⁴ (like a 2048-bit RSA key, which has hundreds of digits), those 12 magic numbers are no longer enough. Because n is now so vast, you must switch to random bases to ensure the exponential probability reduction works.

***

### Summary Comparison

| Approach          | Pros                                                   | Cons                                                                  | Best For                                           |
| ----------------- | ------------------------------------------------------ | --------------------------------------------------------------------- | -------------------------------------------------- |
| **Magic Numbers** | 100% deterministic (no luck involved).                 | Vulnerable to targeted attacks; fails past 2⁶⁴.                       | Standard 64-bit integers (LeetCode, typical apps). |
| **Random Bases**  | Immune to targeted attacks; scales to infinite digits. | Theoretical (but mathematically negligible) risk of a false positive. | Cryptography, security protocols, massive math.    |

Would you like to see how to implement the **deterministic version** (using the 12 magic numbers) for standard 64-bit integer fast checking, or are you focusing purely on **cryptographic-scale** security?

# is prime miller rabin cp template in py

<mark><span>Here is a highly optimized, deterministic<span> </span></span><strong>Miller-Rabin primality test template</strong><span> </span>in Python tailored for Competitive Programming (CP)</mark>. [link](https://cp-algorithms.com/algebra/primality%5Ftests.html)

Instead of using random witnesses (which can fail), this template uses a **deterministic base set**. It is **100% accurate** for any integer up to 2⁶⁴ (approx. 1.8 × 10¹⁹) and runs in

𝒪

(

𝑘

log3𝑛

)

time, where k is the number of bases. [link](https://pypi.org/project/miller-rabin/)

### Python CP Template

python

```
def is_prime(n: int) -> bool:
    """
    Deterministic Miller-Rabin primality test for 64-bit integers.
    100% accurate for n < 2^64. Time Complexity: O(k log^3 n) where k = len(bases).
    """
    if n < 2:
        return False
    # Check small primes directly to handle edge cases quickly
    if n in (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37):
        return True
    if n % 2 == 0 or n % 3 == 0 or n % 5 == 0:
        return False

    # Factor out powers of 2 from n - 1: write n - 1 as d * 2^s
    d = n - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1

    # Deterministic bases for 64-bit integers (n < 2^64)
    bases = (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37)

    for a in bases:
        if n <= a:
            break

        # Compute a^d % n using Python's built-in modular exponentiation
        x = pow(a, d, n)
        if x == 1 or x == n - 1:
            continue

        # Square x repeatedly s-1 times
        for _ in range(s - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                break
        else:
            # If we didn't break, n is definitely composite
            return False

    return True
```

Use code with caution.

### Why this is great for CP:

- **Fast Modular Exponentiation:** It leverages Python’s built-in `pow(base, exp, mod)` function, which is implemented in C and heavily optimized.
- **Deterministic Set:** For n < 2⁶⁴, checking the 12 bases up to `37` guarantees absolute certainty with no false positives. You don't have to risk a Wrong Answer (WA) due to bad random seed luck. [link](https://pypi.org/project/miller-rabin/)
- **Early Pruning:** Simple modulo checks (`n % 2`, `n % 3`, etc.) instantly eliminate roughly 74% of composite candidates before executing the heavier Miller-Rabin loops.

If you want to optimize your code further, let me know:

- What is the **upper limit** of n in your problem? (If it fits within 32-bit limits, we can reduce the bases to just 3 or 4 to make it run even faster!)

- Do you also need to find the **prime factors** of large numbers using an algorithm like **Pollard's rho**?

- [link](https://pypi.org/project/miller-rabin/)\
  PyPI\
  miller-rabin · PyPI\
  Berg's deterministic Miller-Rabin primality test. Deterministically tests ~2.5 million odd 64-bit integers per second. CPU), outpe...

- [link](https://cp-algorithms.com/algebra/primality%5Ftests.html)\
  Algorithms for Competitive Programming\
  Primality tests\
  Sep 18, 2026 — Miller-Rabin primality test Practice Problems Euler's totient function Factorial modulo p Gray code Fast Fourier transform Operati...

- [link](https://stackoverflow.com/questions/64374003/implementing-miller-rabin-algorithm-on-python)\
  Stack Overflow\
  Implementing Miller-Rabin Algorithm on Python - Stack Overflow\
  The implementation of the Miller-Rabin algorithm in Python is: # Check for primality using the Miller-Rabin algorithm

