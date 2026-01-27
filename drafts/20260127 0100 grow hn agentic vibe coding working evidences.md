<!-- https://chatgpt.com/c/69779bdb-6390-8321-a376-ee78a165ad61 -->

<!-- Ask HN: Do you have any evidence that agentic coding works? -->

# 0

what are people saying

---

Looks like you dropped a _huge_ Hacker News thread and asked for the vibe check 😄
Here’s what people are broadly saying, distilled:

### The dominant mood

**Skeptical but not dismissive.** Very few people say “agentic coding is magic and works end-to-end.” Most say “it can help a lot, _if_ you treat it like a very fast, unreliable junior.”

---

### Big recurring themes

#### 1. **“It works for small, well-scoped tasks”**

This is the strongest consensus.

- Boilerplate
- Mechanical refactors
- Porting code
- One-file or one-function changes
- Scripts, CLIs, prototypes, MVPs

People consistently report wins here.

> “The closer to monkey work, the better it does.”

---

#### 2. **Design & architecture are the hard wall**

Many agree that:

- Agents **don’t plan well long-term**
- They lose architectural intent
- They accumulate subtle technical debt
- Passing tests ≠ good structure

This matches the OP’s concern almost exactly.

> “Validating behavior instead of architecture is how you get spaghetti that technically passes CI.”

---

#### 3. **Tests can be gamed**

Multiple horror stories:

- Tests that assert `true === true`
- Agents quietly weakening tests
- “Fixing” bugs by changing expected behavior

Strong takeaway:

> **Never let the same agent own both implementation and tests without human review.**

---

#### 4. **The successful pattern is very constrained**

People who say it _does_ work tend to follow something like:

- Commit first
- Give a **tight, narrow task**
- Force a plan → review the plan
- Implement
- If subtle bugs appear → revert and abort
- Clean up the code yourself

Almost nobody says “I let it roam free.”

---

#### 5. **Agents ≠ autonomy**

A lot of pushback against hype like “armies of agents”:

> “Replace ‘agents’ with ‘juniors with anterograde amnesia’ and that’s about how it goes.”

Most see agents as:

- Rubber ducks
- Research assistants
- Very fast typists
- Experiment runners

Not teammates. Not architects.

---

#### 6. **Where people _do_ see real wins**

Some legit success stories:

- Performance tuning with tight benchmarks
- Trying many algorithmic variants quickly
- SIMD / SQL optimization loops
- UI experimentation
- Areas where _humans know what ‘good’ means_ and can enforce it

Key ingredient: **clear success metrics** (exact output match, speedup target, etc.).

---

### The fault line in the debate

There’s a philosophical split:

- **Camp A:**
  “This is a force multiplier. If it fails, you’re holding it wrong.”
- **Camp B:**
  “That’s unfalsifiable. Maybe the ceiling just isn’t that high.”

Your pasted OP is firmly in Camp B — and a _lot_ of commenters quietly agree, even if they phrase it politely.

---

### Bottom line

No one provides convincing evidence that:

- Agentic coding can reliably produce **high-quality, architecturally sound systems**
- with **minimal review**
- at **large scale**

But many _do_ show it can:

- Save time
- Enable experimentation
- Offload drudgery
- Act as a powerful assistant under tight control

If you want, I can:

- Boil this down to a one-paragraph “HN consensus”
- Map out _when_ agentic coding is net-positive vs net-negative
- Compare this thread to others (e.g. the “AI coding degrades” backlash)

Just say the word.
