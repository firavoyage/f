## what is it called when one is better than another in all cases

It is called **strict dominance**.

This term is primarily used in game theory, economics, and decision theory. It occurs when one strategy or option always yields a better outcome than another option, regardless of what happens or what choices other players make.

### Related Terms

- **Weak Dominance**: One option is at least as good as the others in all cases, and strictly better in at least one case.
- **Pareto Dominance**: In multi-objective situations, one option is better than another in at least one metric without being worse in any other.
- **Strictly Better**: A more casual, everyday phrase used to describe one choice completely outclassing another.

To help narrow this down, could you tell me if you are looking for this term for **game theory**, **general vocabulary**, or a specific field like **statistics**?

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://philosophicaldisquisitions.blogspot.com/2011/04/game-theory-part-2-formal-ingredients.html)\
  Game Theory (Part 2) - The Formal Ingredients\
  Apr 12, 2011 — Strict Dominance: Player i's strategy Si\* is strictly dominated by player i's strategy Si if:\
  \
  \
  Philosophical Disquisitions
- [link](https://builtin.com/data-science/dominated-strategy-in-game-theory)\
  Dominated Strategy in Game Theory: Explained\
  Sep 7, 2025 — Strictly dominated strategy: A strategy that always delivers a worse outcome than an alternative strategy, regardless of what stra...\
  \
  \
  Built In
- [link](https://rogueaf.medium.com/nash-equilibrium-game-theory-and-asking-out-your-crush-d56a886a00ed)\
  Nash Equilibrium, Game Theory, and Asking Out Your Crush\
  Jan 6, 2021 — A strategy is strictly dominated if choosing it always gives a worse outcome than choosing an alternative strategy, regardless of ...\
  \
  \
  Medium

Show all

## i mean the one used in dp transition fn

In dynamic programming (DP), this concept is called the **convex hull trick**, **Knuth's optimization**, or more broadly, **state dominance** (or **eliminating dominated states**).

In DP transitions, when one choice or state is better than another across all remaining cases, the worse option is said to be **dominated** and is pruned to optimize the runtime.

### Common DP Optimizations Using Dominance

- **Convex Hull Trick (CHT)**: Used when DP transitions look like linear functions (y = mx + c). If one line is lower (or higher) than another line across the entire relevant domain, that line is **strictly dominated** and discarded from the convex hull.
- **Knuth's Optimization**: Applies when the transition function satisfies the quadrangle inequality. It proves that the optimal split point k for a state is monotonically bounded, meaning choices outside this bound are **dominated** and can be ignored.
- **1D/1D DP Optimization (Monotonicity)**: When the optimal transition index A(i) increases as i increases, older transition candidates become permanently worse (**dominated**) than newer ones.

### The Mechanism: Pruning Dominated States

1. **Identify**: Compare two transition candidates, j₁ and j₂.
2. **Prove**: Show that for all future states, j₁ yields a better or equal DP value than j₂.
3. **Prune**: Remove j₂ from the search space entirely, reducing the time complexity (often from O(N²) to\
   𝑂\
   (\
   𝑁\
   log\
   𝑁\
   )\
   or O(N)).

Are you currently trying to optimize a specific DP problem, such as a **divide and conquer DP** problem or a **matrix chain multiplication** variant?

## example sentences of dominance

Here are example sentences showing how "dominance" is used in the context of dynamic programming (DP) and algorithm design:

- "By applying **state dominance**, we can prune the subproblems that will never yield an optimal solution."
- "The candidate transition j₁ exhibits **strict dominance** over j₂ because it provides a lower cost for all remaining intervals."
- "We can reduce the time complexity from O(N²) to O(N) by maintaining a deque of non-**dominated** states."
- "Knuth's optimization relies on proving a property of **monotonic dominance** within the cost matrix."
- "Once a new line is added to the convex hull, several older lines lose their **dominance** and are permanently removed."

If you are writing an explanation or a code comment, I can help you draft it. Would you like a **code comment example** or an **academic proof template**?

## i want to say "sth is strictly better", not "apply some technique", like "sth is strict dominance"

To use the concept as a direct description of the relationship rather than an action, you use the adjective phrase **strictly dominates** or say that one option **has strict dominance over** another.

In grammar, "dominance" is a noun, so you cannot say "something _is_ strict dominance." Instead, you say "something _has_ strict dominance."

### Grammatically Correct Example Sentences

- "Transition candidate\
  𝑗1

**strictly dominates** candidate\
𝑗2\
across all future states."

- "We can drop the second state because the first state **has strict dominance** over it."
- "Because choice A **strictly dominates** choice B, choice B will never be part of the optimal path."
- "The state at index\
  𝑖

**is strictly dominated by** the state at index\
𝑗\
."

- "This transition function exhibits **strict dominance**, allowing us to safely ignore the sub-optimal branches."

### Key Phrases to Use

- **Active:** "\
  𝐴\
  strictly dominates\
  𝐵\
  ."
- **Passive:** "\
  𝐵\
  is strictly dominated by\
  𝐴\
  ."
- **Noun possession:** "\
  𝐴\
  has strict dominance over\
  𝐵\
  ."

If you are writing this for a specific context, let me know if it is for a **code comment**, an **academic paper**, or an **interview explanation** so we can perfect the phrasing.

- [link](https://www.bestmytest.com/blog/toefl/toefl-writing-essential-words-part-6-dominate-and-predominate)\
  TOEFL Writing Essential Words - Part 6 - dominate and predominate\
  Jun 19, 2026 — Dominance VS Predominance Let's look at the nouns. “dominance” and “predominance”. Similar to the verbs, the noun “dominance”means...\
  \
  \
  BestMyTest
- [link](https://math.ucr.edu/home/baez/games/games%5F4.html)\
  Game Theory (Part 4)\
  Strict dominance Definition. We say a choice is strictly dominant if it strictly dominates all other choices for that player. Let ...\
  \
  \
  University of California, Riverside
- [link](https://en.wikipedia.org/wiki/Strategic%5Fdominance)\
  Strategic dominance\
  (Strategy A strictly dominates B). Neither A nor B dominates the other: B and A are not equivalent, and B neither dominates, nor i...\
  \
  Wikipedia

Show all

## alternative phrasing

Here are alternative ways to express that one state or transition is completely better than another in dynamic programming, categorized by the exact nuance you want:

### Mathematically Precise Phrasing

- "State A **strictly bounds** state B for all future transitions."
- "Candidate A **monotonically outclasses** candidate B."
- "The cost of transition A is **uniformly lower than** transition B."
- "State B is **rendered redundant by** state A."

### Code Comment & Informal Phrasing

- "We can ignore B because A is **always optimal**."
- "A **strictly beats** B in every possible scenario."
- "Transition B is **always strictly worse than** A."
- "A **unconditionally outperforms** B."

### Focus on the Action of Pruning

- "State A **obsoletes** state B."
- "Candidate B is **completely eclipsed by** candidate A."
- "We prune B because A **subsumes** its optimal path."

Would you like help phrasing this for a specific **inequality formula** in your DP transition, or are you ready to write the **code comment**?

## casual alternative phrasing

Here are casual ways to say one transition or state is completely better than another in your code comments or explanations:

### Short & Punchy Phrases

- "State A **completely blows B out of the water**."
- "We can drop B because A **is a no-brainer**."
- "A **strictly beats** B every single time."
- "State B **is just dead weight** compared to A."

### For Code Comments (Dev-to-Dev)

- "// Skip B, A **is always better**."
- "// B **never wins** against A, prune it."
- "// A **hands-down beats** B for all next steps."
- "// A **totally eclipses** B here."

### For Explaining to a Peer

- "There's no point checking B because A **is just flat-out better**."
- "A **kills off** B for the rest of the loop."
- "B **is completely useless** once we have A."

To help tailor this perfectly, are you writing this as a **quick comment** next to an `if` statement, or are you explaining it to someone in a **chat message**?

## for example, i never use b, so it has no value, and it's always better to replace w a regardless

In that specific case, you can use these casual expressions to describe why B has no value and should always be replaced by A:

### Casual & Direct Phrasing

- "B is **totally useless** because A **always wins**."
- "A **completely replaces** B since B **adds zero value**."
- "There is **no reason to keep B** when A **is always better**."
- "B is **pure dead weight**; swapping to A is a **no-brainer**."

### Perfect for Code Comments

- `// B is pointless, always swap it for A`
- `// Prune B—A outclasses it in every single case`
- `// B has zero value since A is always the better choice`

### For Talking to a Peer

- "I never use B anyway, so it’s **completely obsolete** compared to A."
- "A **strictly supersedes** B, so just replace it regardless."

Would you like to turn this into a specific **`if/else` code comment**, or are you writing an **explanation for a pull request (PR)**?

## i mean, b has no value in its nature as it's never used, so a is always better, not coz a is better so b is meaningless

Ah, that is a subtle and important distinction! You mean <mark>B is inherently<span> </span><strong>inherently worthless</strong>,<span> </span><strong>unreachable</strong>, or<span> </span><strong>redundant</strong><span> </span>on its own</mark>, which makes switching to A a completely free and strict upgrade.

Here is how you can phrase that specific nuance:

### Casual & Punchy Phrasing

- "B is **fundamentally useless** anyway, so switching to A is a **free upgrade**."
- "B is **dead code** on its own, so A is **automatically better**."
- "B **has zero inherent value**, so we might as well always use A."
- "Since B **does nothing for us**, swapping to A is a **no-brainer**."

### Formal / Technical Phrasing

- "State B is **intrinsically redundant**, making the transition to A **strictly optimal**."
- "Because B is a **dead-end state**, replacing it with A is **unconditionally better**."
- "Candidate B **yields no viable paths**, so A **supersedes it by default**."

### Perfect for Code Comments

- `// B is dead weight on its own; always use A instead`
- `// B has no value anyway, so swapping to A is a free win`
- `// Since B is never used, replacing it with A is an instant upgrade`

Are you trying to justify this change in a **code review / Pull Request**, or are you adding a **comment above a specific function**?

