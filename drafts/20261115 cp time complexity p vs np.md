# what do ppl say on p vs np

Most computer scientists and mathematicians believe that **P ≠ NP**, meaning that some problems are fundamentally harder to solve than they are to verify. While the problem remains unsolved and carries a **$1 million Millennium Prize**, experts actively debate its mathematical difficulty, real-world consequences, and recent AI-driven breakthroughs. [](https://news.mit.edu/2009/explainer-pnp)

### What Experts & Researchers Say

* **Overwhelming Consensus for P ≠ NP.** Nearly all complexity theorists work under the assumption that P does not equal NP. As UCSD professor Russell Impagliazzo notes, daily experience shows that solving a puzzle like Sudoku is much harder than checking a completed grid. [](https://cstheory.stackexchange.com/questions/37242/why-do-computer-scientists-on-the-whole-work-under-the-assumption-that-p-%E2%89%A0-np)
* **A Proving Barrier.** Many researchers point out that proving P ≠ NP is extraordinarily difficult because standard mathematical techniques are known to fail against it. Current research often focuses on newer approaches like circuit complexity and meta-complexity to find a way around these roadblocks. [](https://www.youtube.com/watch?v=yeFaGFehc44&t=65)
* **The Minority View (P = NP).** A small minority of thinkers argue that P could equal NP, suggesting that a fast, universal algorithm might simply be hidden beyond our current mathematical understanding. Even if P = NP were proven, some pragmatists point out that the "fast" algorithm might still be too slow in practice if its polynomial exponent is massive. [](https://www.quora.com/What-do-the-theoretical-computer-scientists-that-believe-that-P-NP-thinks-about-the-theoretical-computer-scientists-that-believe-P-NP-and-vice-versa-and-why)

### Philosophical & Cultural Takes

* **The Death of "Creative Leaps."** In online communities like [r/computerscience](https://www.reddit.com/r/computerscience/comments/1xgbivj/openai%5Freleases%5Fpaper%5Fclaim%5Fexponential%5Ftime/), people frequently quote computer scientist Scott Aaronson's famous summary of what a P = NP world would look like. If finding a solution were as easy as recognizing one, anyone who could appreciate a symphony would be Mozart, and anyone who could follow a math proof would be Gauss. [](https://www.reddit.com/r/computerscience/comments/1xgbivj/openai%5Freleases%5Fpaper%5Fclaim%5Fexponential%5Ftime/)
* **The Collapse of Cybersecurity.** Tech commentators and cryptographers emphasize that proving P = NP would immediately break modern internet security. Encryption methods like RSA and cryptocurrencies like Bitcoin rely on the assumption that certain math problems take billions of years to solve. [](https://www.youtube.com/shorts/hGaeUcEpob0?vl=en)
* **Instant Optimization.** Operations researchers note that a P = NP proof would revolutionize logistics, medicine, and engineering. Problems like protein folding, airline scheduling, and the Traveling Salesperson Problem could be solved instantly and perfectly. [](https://www.lancaster.ac.uk/stor-i-student-sites/jack-trainer/the-p-vs-np-problem/)

### Recent Buzz & AI Debates

* **AI Sparks Renewed Discussion.** Recent developments in artificial intelligence have reignited public debate over computational limits. For example, late-2026 discussions around an OpenAI paper challenging the Exponential Time Hypothesis led some commentators to speculate on whether AI is finding shortcuts around traditional complexity barriers.
* **Capabilities vs. Proof.** Theoretical computer scientists remain cautious, noting that while AI is getting much better at theorem proving and heuristic problem-solving, impressive AI performance does not actually prove that P = NP. [](https://www.nytimes.com/2026/11/06/science/ai-exponential-time-hypothesis.html)

If you'd like to explore this further, I can break down:

* **How NP-completeness works** using everyday puzzles like Sudoku or Minesweeper
* **Specific mathematical barriers** that have stopped researchers from proving it so far
* **Recent AI breakthroughs** and why they are shaking up complexity theory

Which angle sounds most interesting to you?

* [](https://www.reddit.com/r/computerscience/comments/1xgbivj/openai%5Freleases%5Fpaper%5Fclaim%5Fexponential%5Ftime/)  
Reddit·r/computerscience  
OpenAI releases paper claim Exponential Time Hypothesis is ...  
October 27, 2026 — If P=NP, then the world would be a profoundly different place than we usually assume it to be. There would be no special value in ...
* [](https://cstheory.stackexchange.com/questions/37242/why-do-computer-scientists-on-the-whole-work-under-the-assumption-that-p-%E2%89%A0-np)  
Theoretical Computer Science Stack Exchange  
p vs np - Why do computer scientists on the whole work under ...  
January 2, 2017 — Researchers work under the assumptions they think are more plausible. In the case of complexity theory almost every experts thinks...
* [](https://news.mit.edu/2009/explainer-pnp)  
MIT News  
Explained: P vs. NP | MIT News | Massachusetts Institute of Technology  
October 29, 2009 — P vs. NP is a fundamental, unresolved theoretical computer science question offering a million-dollar Clay prize. Definitions: P r...

Show all

# what's needed to prove or disprove p vs np

Resolving the **P vs. NP** problem requires either **finding a single fast algorithm for a hardest-case NP problem (to prove P = NP)** or **proving mathematically that no such fast algorithm can ever exist (to prove P ≠ NP)**. Because these two outcomes are opposites, the exact requirements look completely different depending on which direction a proof takes. [](https://www.reddit.com/r/computerscience/comments/112c6ov/how%5Fdoes%5Fone%5Fgo%5Fabout%5Fproving%5Fp%5Fnp/)

### What Is Needed to Prove P = NP

Proving that P equals NP is a constructive task. You do not need to solve every problem in NP individually, because a special subset of problems called **NP-complete** problems act as universal keys. [](https://cs.stackexchange.com/questions/50362/how-to-prove-p-neqnp)

* **A Polynomial-Time Algorithm.** You must design a deterministic algorithm that solves at least one known NP-complete problem—such as the Boolean Satisfiability Problem (3SAT) or the Traveling Salesman Problem—in polynomial time. This means the number of steps grows at a manageable rate, like N² or N³, rather than exploding exponentially like  
2N  
2𝑁  
⁠. [](https://news.mit.edu/2009/explainer-pnp)
* **A Proof of Correctness.** You must mathematically prove that the algorithm always outputs the exact right answer for every possible valid input. [](https://cs.stackexchange.com/questions/50362/how-to-prove-p-neqnp)
* **A Complexity Bound.** You must prove that the algorithm's worst-case runtime is strictly bounded by a fixed polynomial function of the input size. [](https://www.claymath.org/wp-content/uploads/2022/06/pvsnp.pdf)
* **Non-Constructive Alternative.** While less likely, you could also prove P = NP by demonstrating mathematically that a polynomial-time algorithm _must_ exist without actually writing out the code. [](https://www.reddit.com/r/computerscience/comments/112c6ov/how%5Fdoes%5Fone%5Fgo%5Fabout%5Fproving%5Fp%5Fnp/)

### What Is Needed to Prove P ≠ NP

Proving that P does not equal NP is a much harder "negative" proof. As noted on the [Computational Complexity blog](https://blog.computationalcomplexity.org/2026/06/respect-p-v-np-problem.html), it is not enough to show that current algorithms are slow; you must rule out all infinitely many possible algorithms that anyone could ever invent. [](https://blog.computationalcomplexity.org/2026/06/respect-p-v-np-problem.html)

* **Universal Lower Bounds.** You must establish a mathematical lower bound showing that at least one problem in NP (such as 3SAT) fundamentally requires more than polynomial time on any deterministic Turing machine.
* **Bypassing Known Barriers.** Computer scientists have discovered formal mathematical "barriers"—known as _relativization_, _natural proofs_, and _algebrization_—that prove standard proof techniques cannot resolve P vs. NP. Any valid proof of P ≠ NP must invent new mathematical tools that avoid these traps.
* **Proof by Contradiction.** Alternatively, one consensus approach discussed on [Stack Overflow](https://stackoverflow.com/questions/900273/what-would-a-p-np-proof-be-like-hypothetically) is to assume a polynomial-time algorithm for an NP-complete problem exists and prove that this assumption leads to a logical impossibility. [](https://en.wikipedia.org/wiki/P%5Fversus%5FNP%5Fproblem)

### Summary of Proof Requirements

| Goal             | Core Requirement                                             | Scope Needed                                              |
| ---------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| **Prove P = NP** | Build a fast (polynomial-time) algorithm and prove it works. | Solve **just one** NP-complete problem (like 3SAT).       |
| **Prove P ≠ NP** | Prove an unbreakable speed limit (lower bound).              | Rule out **all possible** fast algorithms simultaneously. |

_Note: While recent breakthroughs—such as claims by OpenAI and Anthropic of sub-exponential algorithms challenging the [Exponential Time Hypothesis](https://www.youtube.com/watch?v=KUm%5FqKM2P28)—push the boundaries of how fast we can solve NP-complete problems, a sub-exponential runtime is still slower than polynomial time and does not resolve P vs. NP._ [](https://www.youtube.com/watch?v=KUm%5FqKM2P28&t=521)

If you'd like to explore this further, I can explain the **three mathematical barriers** (relativization, natural proofs, and algebrization) that have blocked proofs so far, or walk through **how Karp reductions** link all NP-complete problems together. Which sounds more interesting?

* [](https://www.reddit.com/r/computerscience/comments/112c6ov/how%5Fdoes%5Fone%5Fgo%5Fabout%5Fproving%5Fp%5Fnp/)  
Reddit·r/computerscience  
How does one go about proving P != NP : r/computerscience  
February 14, 2023 — Proving P = NP: This can be achieved by demonstrating a polynomial-time algorithm for any known NP-Complete problem, such as the B...
* [](https://cs.stackexchange.com/questions/50362/how-to-prove-p-neqnp)  
Computer Science Stack Exchange  
How to prove P$\\neq$NP? - Computer Science Stack Exchange  
December 5, 2015 — Proving P=NP demands presenting a polynomial-time algorithm and validating its correctness and complexity.
* [](https://en.wikipedia.org/wiki/P%5Fversus%5FNP%5Fproblem)  
Wikipedia  
P versus NP problem - Wikipedia  
In such analysis, a model of the computer for which time must be analyzed is required. Typically such models assume that the compu...

Show all
