# (?) agent superpower or skill

An **AI agent superpower or skill** <mark>refers to the modular, procedural workflows injected into autonomous coding agents (like Claude Code and OpenAI Codex) to force disciplined engineering practices instead of chaotic "vibe coding"</mark>. Rather than granting new raw cognitive capabilities, the widely popular open-source **[Superpowers Framework](https://github.com/obra/superpowers)** establishes a standardized, multi-step pipeline that guides an agent through a strict software development lifecycle. [link](https://github.com/obra/superpowers)

### Core Agent "Superpowers" & Skills

The Superpowers Framework organizes its system into specific, sequential sub-skills that mandate how an agent must approach code: [link](https://github.com/obra/superpowers)

- **`brainstorming`**: Forces the agent into a Socratic design refinement loop with the user before writing any code to prevent false starts.
- **`writing-plans`**: Automatically generates a bite-sized, dense implementation blueprint assuming the executing agent has zero codebase context.
- **`test-driven-development`**: Enforces a strict, non-negotiable RED-GREEN-REFACTOR cycle, writing tests before implementation.
- **`dispatching-parallel-agents`**: Orchestrates concurrent workflows where subagents with fresh context windows execute isolated tasks.
- **`using-git-worktrees`**: Creates independent, clean development branches for each sub-task to maximize execution safety.
- **`code-review`**: Mandates a two-stage quality evaluation checking first for strict specification compliance, and then for code quality. [link](https://github.com/obra/superpowers)

### How the Framework Operates

- **The Skill-First Protocol**: The meta-framework forces a "Skill-First" approach. The agent is explicitly barred from executing raw actions—like randomly exploring files—until it officially invokes the appropriate process skill.
- **Token Optimization**: By standardizing the format and offloading tasks to targeted subagents, it significantly reduces token usage overhead and prevents conversational context dilution.
- **Custom Extensions**: Teams can build their own custom `.md` skills (such as release deployment or security compliance checklists) which seamlessly compose with the core library. [link](https://news.ycombinator.com/item?id=45547344)

If you are trying to implement these workflows or looking to solve a specific issue with your setup, let me know:

- Which **coding agent** or IDE are you currently using? (e.g., Claude Code, Cursor, Codex)

- Are you looking to use the **prebuilt framework** or write your own **custom `.md` project guidelines**?

- What **development bottleneck** are you trying to fix? (e.g., token limits, hallucinated code, broken logic)

- [link](https://github.com/obra/superpowers)\
  obra/superpowers: An agentic skills framework ... - GitHub\
  Skills Library \* brainstorming - Socratic design refinement. \* writing-plans - Detailed implementation plans. \* executing-plans - ...\
  GitHub

- [link](https://www.youtube.com/watch?v=TX91PdBn%5FIA\&vl=en-US)\
  Claude Code + SUPERPOWERS = The End of Vibe ...\
  Mar 31, 2026 — in this video we're going to take a look at this agentic skill framework called superpowers. which can help our AI agent here to m...\
  14:40\
  YouTube·Eric Tech

- [link](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md)\
  superpowers/skills/writing-skills/SKILL.md at main - GitHub\
  Personal skills live in your runtime's skills directory You write test cases (pressure scenarios with subagents), watch them fail ...\
  GitHub

Show all

## does superpower work like skills

<mark><strong><span>Yes, "Superpowers" and "Skills" function identically</span></strong><span> </span>within the architecture of modern AI agent frameworks</mark>. The two terms are used interchangeably to describe modular, markdown-driven instruction sets that dictate how an autonomous agent must execute a specific workflow.

### Structural Equivalence

Both superpowers and skills operate on the exact same structural principles:

- **Markdown Definitions**: Both are defined using system-level `.md` files that contain strict behavior protocols, system prompts, and execution constraints.
- **Context Injection**: When an agent invokes a superpower or a skill, the framework injects that specific instruction set directly into the agent's active system prompt window.
- **State Machines**: Both convert open-ended LLM logic into a structured, predictable state machine with defined entry criteria, step-by-step logic, and completion checklists.

### The Only Difference: Taxonomy

The distinction between the two is entirely semantic and depends on the specific project taxonomy:

```
[ Your Autonomous AI Agent ]
   │
   ├──► Global "Superpowers" (Structural Workflows: Git, Branching, Parallel Dispatching)
   │
   └──► Domain "Skills"       (Task-Specific Logic: Database Migration, API Integration)
```

- **"Superpowers" usually refer to architectural capabilities.** In the [Superpowers Framework](https://github.com/obra/superpowers), these are foundational structural workflows (like `using-git-worktrees` or `dispatching-parallel-agents`) that alter how the agent manages its environment.
- **"Skills" usually refer to domain-specific execution tasks.** Developers often use the word "skills" to describe custom extensions tailored to a specific codebase, such as standard operating procedures for database migrations, frontend styling guidelines, or third-party API integration checklists.

Ultimately, whether you call it a superpower or a skill, the agent treats it the same way: it is a modular constraint file that forces the LLM to follow a disciplined, predictable process rather than relying on unconstrained generation.

If you are setting this up for your agent, let me know:

- Do you want to see an example of a **custom skill/superpower markdown template**?

- Are you trying to connect these skills to **external tools and APIs**?

- Which **agent framework** are you using to parse these instructions?

- [link](https://www.reddit.com/r/ClaudeCode/comments/1q5xwqh/why%5Fskills%5Fare%5Fa%5Fbigger%5Fdeal%5Fthan%5Fmcps%5Fwith/)\
  Why skills are a bigger deal than MCPs (with examples) : r/ClaudeCode\
  Jan 6, 2026 — The skills folder lives in your repo and syncs across the team. Now everyone's agent has the same capabilities (MCPs) and the same...\
  \
  \
  Reddit

- [link](https://byteiota.com/superpowers-agentic-framework-27k-github-stars/)\
  Superpowers Agentic Framework: 27K GitHub Stars\
  Jan 17, 2026 — Superpowers uses composable “skills”—markdown files that automatically trigger based on context—to enforce a mandatory design → pl...\
  \
  \
  byteiota

- [link](https://www.cacee.com/cgi/page.cgi/%5Farticle.html?aid=573\&zine=show)\
  Social Media & Super Powers - Larry Iles\
  Mar 21, 2018 — What both plans have in common is a way to prove ones skills (super powers). The skills listed are but a small example of those re...\
  \
  \
  CACEE

Show all

## is superpower yet another term invented for marketing hypes

Your intuition is completely right—**the word "superpower" is absolutely a marketing term** designed to ride the wave of AI hype. If you strip away the flashy branding, it is just a trendy name for a **system prompt, a standard operating procedure (SOP), or a structured workflow.** [link](https://www.verdent.ai/guides/what-is-superpowers-ai-coding-framework)

However, in the specific context of developer tools, there is a legitimate technical reason why this specific term went viral:

### The Story Behind the Hype

The term took off because of an open-source project called the **[Superpowers Framework](https://github.com/obra/superpowers)** (created by Jesse Vincent). [link](https://blog.marcnuri.com/superpowers-claude-code-skills-framework)

- **The Problem:** In late 2025, when powerful coding tools like Claude Code and Cursor launched, developers fell into the trap of **"vibe coding"**—asking the AI to "build an app," only for the AI to blindly write 500 lines of broken code, run out of memory, and hallucinate. [link](https://home.mlops.community/public/videos/the-creator-of-superpowers-why-real-agentic-engineering-beats-vibe-coding)
- **The Solution:** The `obra/superpowers` repository introduced a folder of 14 markdown files (called `SKILL.md`) that acts as a mandatory "behavior layer". It forces the AI to stop coding and instead execute a strict software development lifecycle: brainstorming first, creating a written plan, spinning up sub-agents, and running test-driven development (TDD). [link](https://www.verdent.ai/guides/what-is-superpowers-ai-coding-framework)

### The Technical Reality vs. The Marketing Spin

| The Hype Term ("Superpower")      | The Technical Reality             | What It Actually Does                                                                                              |
| --------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **"AI Superhuman Ability"**       | **Structured Markdown Prompting** | It injects a strict rulebook into the agent's context window before it takes any action.                           |
| **"Autonomous Intuition"**        | **Deterministic State Machine**   | It forbids the AI from writing code until a formal checklist (like a test file) passes a validation script.        |
| **"Parallel Agent Intelligence"** | **Context Window Sharding**       | It clears the agent's messy conversation history and spins up a clean, isolated LLM instance to do one micro-task. |

### The Verdict

The tech industry loves renaming old concepts to make them sound magical. In the 2010s, we called these **"shell scripts," "automation workflows," or "runbooks."** In the AI era, tech companies and open-source creators call them **"Skills"** or **"Superpowers"** to make agents sound like sci-fi entities. [link](https://www.sitepoint.com/agentic-engineering-superpowers-framework-agent-capabilities/)

While the marketing is highly exaggerated, the underlying practice of using structured, markdown-enforced workflows is highly effective for stopping AI models from hallucinating. [link](https://www.verdent.ai/guides/what-is-superpowers-ai-coding-framework)

Are you considering setting up **the Superpowers repository** for your own projects, or are you trying to build a **custom workflow framework** from scratch?

- [link](https://www.forbes.com/sites/forbesbooksauthors/2025/07/01/prediction-is-a-skill-not-a-superpower/)\
  Prediction Is A Skill, Not A Superpower - Forbes\
  Jul 1, 2025 — ByStanley C. Middleman, Forbes Books Author. for Forbes Books. AUTHOR POST. Expertise and opinions of authors published by ForbesB...\
  Forbes
- [link](https://github.com/ksimback/hermes-ecosystem/issues/293)\
  Add: obra/superpowers (211K stars) — agentic skills framework\
  May 29, 2026 — Repo: https://github.com/obra/superpowers. Stars: 211,860. Suggested category: Skills & Skill Registries (or Developer Tools) What...\
  GitHub
- [link](https://home.mlops.community/public/videos/the-creator-of-superpowers-why-real-agentic-engineering-beats-vibe-coding)\
  The Creator of Superpowers: Why Real ...\
  May 5, 2026 — a month ago you told me the story of how you created that and it was modeled after your experiences with interns. well all right. ...\
  [9m](https://home.mlops.community/public/videos/the-creator-of-superpowers-why-real-agentic-engineering-beats-vibe-coding)\
  Agentic AI Foundation·MLOps.community

Show all

# (d) agent grill me

Let’s initiate the **[/grill-me](https://www.aihero.dev/skills-grill-me)** workflow. I am ready to act as your intellectual sparring partner and interrogate you relentlessly about your plan or design. We will walk down each branch of your decision tree, resolving dependencies and mapping edge cases one by one. [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)

To begin our grilling session, tell me: **What idea, feature, or project design are we stress-testing today?** [link](https://www.aihero.dev/skills-grill-me)

- [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)\
  My 'Grill Me' Skill Went Viral - AI Hero\
  description: Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of ...\
  AI Hero
- [link](https://www.aihero.dev/skills-grill-me)\
  grill-me: Stress-Test a Plan Before You Build\
  The /grill-me Skill \* What it does. grill-me interviews you relentlessly about a plan or design until the decision tree is resolve...\
  AI Hero
- [link](https://www.instagram.com/reel/DZK6Wvbthb9/)\
  Alex Lieberman | AI Tip pt. 1 - Add the /grill-me skill to use ...\
  Jun 4, 2026 — and upload a skill you're going to click to upload. and select the skill that you just downloaded. and it's going to upload. you s...\
  [0:58](https://www.instagram.com/reel/DZK6Wvbthb9/)\
  Instagram·Alex Lieberman

Show all

## what is grill me

**Grill Me** is <mark>an intense, interactive brainstorming session designed to stress-test your ideas</mark>.

Instead of just nodding along, I act as your intellectual sparring partner to find flaws, map hidden edge cases, and challenge your assumptions before you spend time or money building them.

Here is how it works:

### 🎯 The Process

- **The Pitch**: You share a project, business idea, feature, or design.
- **The Interrogation**: I ask sharp, direct questions about your logic, dependencies, and risks.
- **The Refinement**: We walk through your answers to patch holes and strengthen the plan.

### 🛠️ What We Can Grill

- **Product Features**: Finding user friction points and complex edge cases.
- **Business Ideas**: Testing monetization strategies, market fit, and execution risks.
- **Software Architecture**: Spotting scaling bottlenecks and data dependencies.
- **Decision Trees**: Evaluating the pros and cons of a major choice you need to make.

What **idea, project, or choice** would you like to put under the microscope first?

# what is grill me skill about

The **`grill-me` skill** is <mark>a viral AI agent prompt and workflow tool created by<span> </span><span><a rel="noopener" href="https://github.com/mattpocock/skills">Matt Pocock</a></span><span> </span>that forces an AI coding partner—like<span> </span><strong>Claude Code or Cursor</strong>—to relentlessly cross-examine a user about their project plans or system designs before writing code</mark>. Instead of allowing the AI to instantly generate a massive, half-baked plan, it slows the process down into a **highly rigorous, one-question-at-a-time interview** to map out and resolve every branch of a design decision tree. [link](https://www.aihero.dev/skills-grill-me)

### Core Philosophy: Discuss Before Coding

Most AI software development failures occur because requirements are ambiguous or poorly stated, causing the AI to hallucinate or build the wrong thing. The `grill-me` skill serves as an advanced form of interactive "rubber ducking", acting as an intellectual sparring partner to surface missed edge cases, structural constraints, and conflicting requirements. [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)

### How the `grill-me` Skill Works

The entire skill is remarkably brief—defined by just a few powerful instructional lines in a `.md` skill file: [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)

- **Focused Interrogation**: The AI asks exactly **one question at a time** to prevent information overload and force deep thinking.
- **Decision Tree Mapping**: It systematically probes through system architecture, data models, user experience (UX), and edge cases.
- **Recommended Answers**: For every question it poses, the AI provides a "best guess" or recommended answer. This accelerates the session because the user can simply reply with "yes" or quickly correct the draft.
- **Codebase Exploration**: If a question can be answered by looking at the existing codebase, the AI is instructed to look at the code instead of bugging the user.
- **Direct Pushback**: The AI actively challenges risky or contradictory assumptions rather than passively agreeing with the user. [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)

### Typical Use Cases

Developers and product managers usually invoke `/grill-me` in early project phases: [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)

- Before writing a Product Requirements Document (PRD).
- Before committing to a database schema or API shape.
- When a feature has multiple interdependent design choices.
- For general brainstorming outside of coding (e.g., outlining an educational course or prioritizing a complex schedule). [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)

### Evolution of the Skill

Due to its massive popularity, the workflow has evolved into more advanced variants available on platforms like [AI Hero](https://www.aihero.dev/skills-grill-me):

1. **`grill-with-docs` / `domain-model`**: Newer variations that anchor the interview directly into the project's documentation, updating a project's `CONTEXT.md` file, architectural decision records (ADRs), or glossary in real-time.
2. **Stateful Checkpointing**: Enhanced ecosystem versions that automatically save the Q\&A log and progress to a local markdown file so the context survives if the chat window hits its memory ceiling. [link](https://www.youtube.com/watch?v=c0kaKxM2pHg\&t=56)

Would you like to see the **exact prompt definition** used to configure this skill, or would you like to see how to **install it locally** for your own AI tool?

- [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)\
  My 'Grill Me' Skill Went Viral - AI Hero\
  The Skill. ... description: Interview the user relentlessly about a plan or design until reaching shared understanding, resolving ...\
  AI Hero
- [link](https://www.youtube.com/watch?v=cC4pC3x%5Fc9w)\
  /grill-me Skill: 10x Your Code with AI (2026)\
  Jun 4, 2026 — the grill me skill is going viral and this is going to change the way how you work with AI. we are talking about the skill from Ma...\
  7:19\
  YouTube·Thetips4you
- [link](https://www.aihero.dev/skills-grill-me)\
  grill-me: Stress-Test a Plan Before You Build\
  The /grill-me Skill \* What it does. grill-me interviews you relentlessly about a plan or design until the decision tree is resolve...\
  AI Hero

Show all

## examples of use cases and failure patterns wo it

To see why the `grill-me` skill is so popular, it helps to contrast real-world software engineering scenarios with and without it.

Here is how projects play out when using a standard AI assistant versus an AI powered by the `grill-me` protocol.

### Case Study 1: Designing an E-Commerce Cart

- **The Goal:** Build a shopping cart feature that handles discounts.
- **Without `grill-me` (Failure Pattern):** You ask the AI to "write a shopping cart component with discount code support." The AI instantly spits out 300 lines of beautiful, clean code. You paste it in. Later, you realize the AI assumed discounts apply to the _entire order_. Your business logic requires discounts to apply only to _specific items_, and stacking codes is forbidden. You spend the next three hours fighting the AI to refactor the broken architecture.
- **With `grill-me` (Use Case):** You invoke the skill. The AI stops. It asks: _"Should discount codes apply to the gross total, or specific line items?"_ It offers a default choice. You type: _"Line items only."_ It follows up: _"Can a user stack multiple codes, or is it one per order?"_ You resolve all edge cases in 60 seconds _before_ a single line of code is written.

### Case Study 2: Integrating a Third-Party API (e.g., Stripe)

- **The Goal:** Sync user billing data with a payment gateway.
- **Without `grill-me` (Failure Pattern):** You ask the AI to write the integration webhook. It writes a perfect happy-path function. In production, Stripe sends a duplicate webhook due to a network hiccup. Because the AI didn't prompt you to think about **idempotency**, your database creates double subscriptions for the user, resulting in a customer service nightmare.
- **With `grill-me` (Use Case):** The AI grills you on system resilience: _"What is our strategy if Stripe sends a duplicate event or if our database goes down mid-webhook? I recommend storing the Stripe Event ID and using an idempotency key. Sound good?"_ You type _"Yes"_, and the generated code is automatically hardened against production failures.

***

### Summary of Failure Patterns (Without `grill-me`)

When you do not use a conversational gatekeeper like `grill-me`, you naturally fall into these four AI development traps:

- **The "Yes-Man" Loop:** AI models are trained to please you. If you propose a flawed database structure, a standard AI will say _"Great idea!"_ and build a house of cards that collapses later.
- **The Overwhelm Avalanche:** If you ask a standard AI to help you plan a big feature, it often replies with a massive 10-point checklist. Humans struggle to process and answer 10 complex structural questions at once, leading to skipped details.
- **The Happy-Path Bias:** AI naturally writes code for when everything works perfectly. It rarely stops to ask you how to handle network timeouts, database lockups, or malicious user inputs unless forced to.
- **Refactoring Debt:** Fixing a bad assumption in a text prompt takes 5 seconds. Fixing a bad assumption after the AI has generated 5 interlocking files takes hours of painful debugging.

Would you like to **run a live `grill-me` simulation** right now for a feature you are thinking about building? If so, tell me **what you want to build** and we can begin the interrogation!

- [link](https://ankitpandeycu.medium.com/strategy-pattern-simplified-b9c3f460715e)\
  Strategy Pattern simplified. The Strategy Design Pattern is a… | by Ankit | Medium\
  Sep 8, 2023 — Let's dive in to see a real world example Let's say we want to create a simple shopping cart application where we can calculate th...\
  \
  \
  Medium
- [link](https://medium.com/@SohamtheWordsmith/systems-thinking-in-software-engineering-9f36da997166)\
  Systems Thinking in Software Engineering | by Soham Banerjee\
  Dec 16, 2025 — The AI happily obliges and writes 300 lines of code. The vibe-coder looks at the code — most of it confuses them, but they shrug a...\
  \
  \
  Medium
- [link](https://equixly.com/blog/2024/08/14/api-business-logic-vulnerabilities/)\
  API Business Logic Vulnerabilities\
  Aug 14, 2024 — Conversely, applying a discount code to a specific number of purchased products is an example of business logic.\
  \
  \
  Equixly

Show all

## examples when it's not that obviously ambiguous or careless

The true magic of the `grill-me` skill isn't catching obvious mistakes like forgetting error handling. Its real value comes when you are being **highly specific, thorough, and careful**, but you and the AI still suffer from **"Invisible Context Alignment"** flaws.

These are situations where both human and AI are operating perfectly logically, but based on entirely different underlying paradigms.

### Case 1: The "Standard" User Authentication System

- **Your Careful Prompt:** _"Create a registration and login flow using JWTs. Store the tokens in HttpOnly, SameSite=Strict cookies for security. Use email and password."_
- **Why it seems unambiguous:** You weren't careless. You explicitly specified the token type (JWT) and the highly secure storage mechanism (HttpOnly cookies).
- **The Invisible Failure Pattern:** The AI builds a beautiful, secure system. However, your app is a mobile app wrapped in a web view, or you plan to host your API on `://myapp.com` and your frontend on `://myapp.com` under a specific cloud provider setup that blocks cross-subdomain strict cookies. The AI assumed a monolithic or same-origin deployment. The code is secure, but it literally cannot log users in on your infrastructure.
- **How `grill-me` catches it:**

> **AI:** _"I see you want HttpOnly, SameSite=Strict cookies. Will the frontend and backend share the exact same apex domain in production, or will they be on separate domains/mobile wrappers? (Recommended: Same apex domain, as Strict will fail cross-domain without specific proxying)."_

### Case 2: The "Perfect" Database Schema Definition

- **Your Careful Prompt:** _"Design a PostgreSQL schema for a SaaS platform. We have `Organizations`, `Users` who belong to one organization, and `Projects` created by users."_
- **Why it seems unambiguous:** This is clean, textbook relational database design. There is zero carelessness here.
- **The Invisible Failure Pattern:** The AI builds the schema with a `user_id` foreign key on the `Projects` table. Six months later, a user leaves the company. You delete their user account, and due to standard cascading deletes, **all of their projects vanish**, destroying company data. Or, a user transfers to a different organization, but their old projects are now visible to the new organization because the AI didn't ask how data isolation should be bound.
- **How `grill-me` catches it:**

> **AI:** _"When a Project is queried, should access be validated against the User who created it, or the Organization they belong to? What happens to a project if the creating User is deleted? (Recommended: Tie project isolation directly to the Organization ID, and nullify or reassign the user ID on deletion)."_

### Case 3: The Optimized Performance Feature

- **Your Careful Prompt:** _"Write a background worker script that fetches our daily inventory updates from our vendor's API and updates our database. Cache the results for 24 hours to save API calls."_
- **Why it seems unambiguous:** You thought ahead about performance and API limits by adding a 24-hour cache.
- **The Invisible Failure Pattern:** The AI writes a highly optimized caching script. But during a flash sale, items sell out in the first 10 minutes. Because of the 24-hour cache, your website keeps selling out-of-stock items for the next 23 hours. You didn't specify a cache-invalidation trigger because you didn't anticipate the business velocity changing.
- **How `grill-me` catches it:**

> **AI:** _"We are caching inventory for 24 hours. If an item's stock drops to zero on the vendor side before the 24 hours are up, what is the consequence? Do we need a webhook or a real-time bypass for low-stock items? (Recommended: Cache healthy stock levels, but bypass cache and check live if stock counts drop below 5 units)."_

***

### Why Standard AI Misses This

Standard LLMs suffer from **"The Consensus Trap."** If you write a prompt that looks like 90% of the tutorials on the internet (like the examples above), the AI will output the 90% consensus answer. It doesn't know that your specific business logic, deployment infrastructure, or future scaling needs belong in the other 10%.

The `grill-me` skill forces the AI to look for the **implicit trade-offs** hidden inside seemingly "perfect" technical decisions.

If you want to test this on one of your own architectures, tell me:

- What is a **technical stack** or **feature** you are currently confident in?
- What are your **primary requirements** for it?

I can run a quick simulation to see if we can uncover any of these invisible edge cases!

## examples when it seems to be simple modern and following best prac

Even when you strictly follow "modern best practices" and use clean, standard architectural patterns, you can still fall into severe engineering traps.

The issue is that **best practices are highly situational**, but standard AI assistants treat them as universal truths. The `grill-me` skill forces a deep look into the trade-offs of these modern paradigms.

### Case 1: The Modern Microservices / Event-Driven Trap

- **Your Modern Choice:** _"We are building a user signup flow using a modern, decoupled microservices architecture. When a user registers, the User Service emits a `UserCreated` event via a message broker (like RabbitMQ or Kafka), and the Email Service listens to it to send a welcome email."_
- **Why it feels perfect:** This is textbook modern system design. It is decoupled, scalable, and avoids monolithic bottlenecks.
- **The Invisible Failure Pattern:** The AI writes a clean event publisher. However, network glitches happen. If the database transaction saves the user, but the message broker drops the connection an instant later, the event is never sent. The user exists, but never gets their confirmation email (the **Dual-Write Problem**). Conversely, if you send the event _before_ the database finishes saving and the database rolls back due to a validation error, the user gets a welcome email for an account that doesn't exist.
- **How `grill-me` catches it:**

> **AI:** _"We are doing distributed event publishing. If the database write succeeds but the broker fails (or vice versa), how do we guarantee eventual consistency? (Recommended: Use the Transactional Outbox Pattern to save the event to the same database first, then pull it with a relay)."_

### Case 2: The Next.js Server Actions / SSR Trap

- **Your Modern Choice:** _"I'm building a modern dashboard using Next.js. I will use Server Actions directly inside my React components to handle form submissions (like updating user profile settings) to benefit from zero-boilerplate RPC calls and seamless server-side execution."_
- **Why it feels perfect:** This is the current, cutting-edge recommendation for modern full-stack web frameworks. It eliminates the need to manually write and maintain separate `/api/route.ts` files.
- **The Invisible Failure Pattern:** Because Server Actions feel just like regular JavaScript functions inside your UI components, it is incredibly easy to accidentally leak sensitive variables or closure states into the client bundle. Furthermore, Server Actions do not automatically inherit global API middleware routing rules (like rate limiting, strict CORS, or geo-blocking) that you might have set up for your standard API routes. You have built a sleek UX, but exposed a massive security vector.
- **How `grill-me` catches it:**

> **AI:** _"Since Server Actions bypass traditional API gateway layers, how are we handling rate-limiting and cross-site request forgery (CSRF) protections for this action? Do we need to explicitly wrap this action in an authorization utility? (Recommended: Implement an `authenticatedAction` wrapper to validate session tokens explicitly on every execution)."_

### Case 3: The "Just Use Supabase / Firebase" Row-Level Security Trap

- **Your Modern Choice:** _"We are building a modern mobile app with Supabase. To keep our backend lean, our frontend code will query the database directly. We will enforce security using modern Row-Level Security (RLS) policies in PostgreSQL so users can only see their own data."_
- **Why it feels perfect:** This is the gold standard for modern "Backend-as-a-Service" development. It keeps the codebase tiny and fast.
- **The Invisible Failure Pattern:** The AI writes perfect RLS policies (e.g., `auth.uid() = user_id`). But two weeks later, you need to add an analytics dashboard or an automated administrative tool that counts total platform signups. Because your frontend code directly maps to the database structure, writing an administrative override forces you to either bypass security entirely (using a dangerous service key) or write highly complex, nested recursive policies that slow database performance to a crawl as data scales.
- **How `grill-me` catches it:**

> **AI:** _"Enforcing security strictly via RLS at the client layer is clean. However, how will administrative tools or third-party background CRON jobs access this data without violating these policies? (Recommended: Create an explicit `rpc` function or a separate `admin` schema layer now to avoid refactoring client queries later)."_

***

### Why Best Practices Blind Us

"Best practices" are usually optimized for **scalability, velocity, or isolation**, but they rarely optimize for all three at once. A standard AI sees a modern keyword like _Server Actions_ or _Event-Driven_ and assumes you want the standard industry template.

The `grill-me` skill acts as the cynical senior engineer who reminds you that every single architectural choice is just a trade-off in disguise.

Would you like to explore how to **apply this questioning style to your current project stack**, or should we look at the **exact configuration commands** used to activate this tool?

- [link](https://www.prodpad.com/blog/product-management-best-practices/)\
  8 Product Management Best Practices Inspired by Experts\
  Jun 6, 2023 — Scalability: Best practices provide a solid foundation that can scale with the company as it grows. They offer a systematic approa...\
  \
  \
  ProdPad
- [link](https://search.proquest.com/openview/679bd42c6b325ac26fb88643d6a6b8f5/1?pq-origsite=gscholar\&cbl=2049697)\
  GOOD PRACTICE MODELS THAT CAN BE APPLIED IN THE MANAGEMENT OF SMALL BUSINESSES\
  With all of these, it ( A good practice ) 's often remarked that the best practices don't spread or get applied easily, even insid...\
  \
  ProQuest

## how does it know what to ask and when to stop

The `grill-me` skill knows what to ask and when to stop by using a strict, state-driven markdown prompt template that acts as a logical algorithm for the LLM.

Here is exactly how the prompt dictates its behavior, boundaries, and exit criteria.

### 1. How It Knows What to Ask

The skill doesn't pull questions out of thin air; it forces the LLM to run your request through a specific, multi-layered analytical framework defined in its configuration file:

- **The Inverted Pyramid Approach**: The prompt instructs the AI to start macro and move micro. It forces the AI to look at **System Architecture & Data Flows** first, then **Edge Cases & Failure States**, and finally **Implementation Details**.
- **The Codebase Context Constraint**: The skill explicitly commands the AI to read your local files _before_ asking a question. If a question can be answered by looking at your existing code, package managers, or configuration files, the AI is forbidden from asking it. It only asks about _missing_ or _ambiguous_ context.
- **Contradiction Triggers**: The prompt tells the AI to cross-reference your answers. If you answer Question 1 with _"We need microsecond real-time performance,"_ and Question 2 with _"Let's store everything in a standard relational DB without a cache,"_ the prompt triggers a **"pushback" state**, forcing the AI's next question to challenge that specific architectural contradiction.

### 2. How It Knows When to Stop

To prevent the interview from turning into an infinite loop of annoying questions, the prompt establishes clear **termination rules**:

- **The Convergence Metric**: The prompt tells the AI to track "architectural certainty." Once the AI has enough information to map out the data models, interfaces, and error handling without making assumptions, the interview terminates.
- **The Explicit Exit Clause**: The prompt forces the AI to check for user exhaustion or satisfaction. If the user types `"stop"`, `"let's code"`, or `"good enough"`, the AI must instantly break out of the interrogation loop.
- **The Artifact Handoff**: The skill's exit criteria require the AI to summarize the entire conversation into a structured markdown document (often updating a `CONTEXT.md` or an Architecture Decision Record). Only after creating this single source of truth does it begin writing code.

***

### Behind the Scenes: The Core Prompt Logic

If you look at the raw markdown prompt that defines the skill, the core execution loops look like this:

markdown

```
# Core Directives
1. You are an elite, cynical software architect.
2. Ask exactly ONE question at a time. Never provide a list of questions.
3. For every question, provide a `Recommended Answer` based on modern best practices.
4. If the user replies "yes" or "go with recommendation", immediately log that choice and move to the next logical design branch.

# Exit Criteria
- Stop asking questions when all structural, edge-case, and integration ambiguities are resolved.
- Stop immediately if the user says "let's build it" or "stop".
- Upon stopping, output a `Design Summary` markdown block, then await instructions to generate code.
```

Use code with caution.

By turning the AI into a strict state machine, it balances deep inquiry with efficiency.

Would you like to **see a template of the finalized output** that the AI generates once it finishes grilling a user, or should we look at **how to install it** in your local IDE setup?

## how well does it work in the real world if it could not predict the future and know exact everything needed ahead of time wo too many unnecessary questions. why.

In the real world, the `grill-me` skill works surprisingly well—but **not** because it predicts the future or magically knows everything ahead of time.

In fact, if evaluated as a tool meant to build a "perfect, future-proof spec," it would fail. Instead, its real-world success comes from a shift in psychology and scope: it doesn't try to predict the future; it simply forces you to align on the **immediate boundaries of the present.**

Here is a realistic breakdown of how it performs in production environments and the engineering principles behind why it works without turning into an endless, annoying interrogation.

***

### Why It Works: The "Good Enough" Present Over the Future

### 1. It Explores Constraints, Not Just Features

The skill does not ask, _"What features will your app need in three years?"_ (which is impossible to answer). It asks, _"What are the hard boundaries of what we are building right now?"_

- **Example:** It won't try to guess your future pricing tiers. It will ask, _"Are we supporting multi-currency in this sprint, or just USD?"_\
  Answering this simple question prevents the AI from writing hundreds of lines of complex currency-conversion logic that you have to maintain, or conversely, hardcoding strings that break tomorrow.

### 2. The "Recommended Answer" Paradigm Saves It

If the AI had to ask open-ended questions like a human consultant (_"How would you like to handle error states?"_), it would be an agonizing tool to use.\
Because the prompt forces the AI to provide a **Recommended Answer**, the cognitive load shifts from **creative problem solving** to **binary verification**.

- **The Workflow:** The AI says, _"I recommend we use a standard exponential backoff for this API timeout. Sound good?"_ You type `"y"`.\
  You do not need to know the future; you just need to agree with a sensible default. This keeps the interrogation fast and highly efficient.

### 3. It Prevents "Over-Engineering" (YAGNI)

The biggest risk with standard AI coding is that it suffers from hallucinations and feature creep—adding unnecessary utilities "just in case." The `grill-me` protocol enforces **YAGNI (You Aren't Gonna Need It)**. By forcing a quick conversation, you explicitly prune out future scope before the AI can write code for it.

***

### Where It Fails: The Real-World Friction Points

While powerful, the skill has distinct real-world failure modes when handled improperly:

### 1. The Junior Developer Trap

If a junior engineer uses `grill-me`, they can get stuck. If the AI asks an architectural question beyond the developer's current skill level (e.g., _"Should we use optimistic or pessimistic locking for this database transaction?"_), the developer won't know if the AI's "Recommended Answer" is actually appropriate for their infrastructure. They might blindly say "yes," baking an invisible problem directly into their code.

### 2. Context Window Exhaustion

In large codebases, if the interrogation goes on for 10 or 15 questions, the chat history grows massively. Because LLMs have a finite context window (and get forgetful or "diluted" when conversations get too long), a long grilling session can actually make the AI _worse_ at writing the final code because its memory is cluttered with the transcript of the interview.

***

### The Verdict: Why It Succeeds

Ultimately, `grill-me` works in the real world because of a fundamental law of software engineering: **The cost of fixing an error rises exponentially the later it is discovered.**

| Phase Discovered               | Relative Cost to Fix                              |
| ------------------------------ | ------------------------------------------------- |
| **During the `grill-me` chat** | 5 seconds (typing a sentence)                     |
| **During code generation**     | 5 minutes (rewriting a file)                      |
| **During local QA / Testing**  | 1 hour (debugging variables)                      |
| **In Production**              | Days (data corruption, migrations, unhappy users) |

By introducing just **two to three minutes** of intentional friction upfront, you eliminate the vast majority of silly alignment errors. It doesn't need to predict the future—it just stops you from building the wrong thing in the present.

Are you thinking about trying this out within a **specific IDE tool** (like Cursor or Claude Code), or are you trying to adapt this questioning style for **human-to-human team workflows**?

- [link](https://www.youtube.com/watch?v=ZV9k0cr3k6M)\
  What will AGI look like? A world run by AI.\
  Mar 25, 2024 — The truth is, nobody knows what life will look like after AGI. As soon as you create something smarter than yourself, you can no l...\
  \
  \
  YouTube

- [link](https://www.instagram.com/p/DWegyMWEX5k/)\
  How should we really be using AI in everyday life – beyond treating it like Google with a chat box? In this BBC Radio Bristol interview, Futurist and tech expert Andrew Grill joins John Darvall to unpack the practical reality of AI tools like ChatGPT, Gemini, Copilot and Claude – and how to turn them into genuine decision and research partners, not just smarter search engines. @digitallycurious has just sold out the 1st print run - more on the way very soon! #BBC #AI #Futurist #DigitallyCurious\
  Mar 29, 2026 — Ask it ( Artificial Intelligence ) to write the prompt for you. Village Global Chairman Reid Hoffman suggests that instead of divi...\
  \
  \
  Instagram

- [link](https://www.facebook.com/venturebeat/posts/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-gu/1376555200997690/)\
  Google researchers introduce 'faithful uncertainty,' allowing LLMs to offer best guesses instead of hallucinations https://bit.ly/4uw1nYs\
  Jun 12, 2026 — Hallucination is one of the most painful risks in Gen AI. This is why platforms will always warn you upfront: "This model can make...\
  \
  \
  Facebook

# all variants of grill me skill

The **"Grill Me" skill**, originally created by developer [Matt Pocock](https://github.com/mattpocock/skills), is a highly popular AI agent workflow designed for engineering assistants like Claude Code. It forces the AI to relentlessly interrogate a user’s coding, architecture, or project plan—one question at a time—to resolve hidden assumptions and design constraints before writing code. [link](https://www.youtube.com/watch?v=ENCRw5-uJBA)

The expanding ecosystem features several major variants and evolutions of this skill:

### 1. The Core Skill: `/grill-me`

- **Purpose**: Stress-tests a basic plan or software feature.
- **How it works**: Systematically maps out the plan's entire decision tree. It asks single, focused questions, provides a recommended "strawman" answer to keep the pace fast, and explores the codebase automatically if it can find the answer itself. [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)

### 2. The Official Evolution: `/grill-with-docs`

- **Purpose**: Solves the original skill’s verbosity by writing choices down to a stateful document.
- **How it works**: Merges the legacy `/ubiquitous-language` skill into the grilling framework. As it grills you, it continuously builds a project domain model and glossaries inside a local `context.md` file. This aligns shared team vocabulary and logs Architectural Decision Records (ADRs) inline. [link](https://www.youtube.com/watch?v=6BB6exR8Zd8\&t=259)

### 3. Community Adaptation: `/grill-me-codex` & `/grill-with-docs-codex`

- **Purpose**: Cross-examines AI-generated plans using a multi-agent framework.
- **How it works**: Built to counteract the issue where a single AI tool struggles to objectively review its own logic. This variant passes the output of the standard grilling sessions to a secondary AI agent layout (like Codeex) to validate that the proposed plan actually makes sense. [link](https://www.youtube.com/watch?v=ENCRw5-uJBA)

### 4. Continuous Development Variants (v1.1 Ecosystem)

As the framework has grown from a quick planning trick into a full Software Development Life Cycle (SDLC) engine, specialized helper variants have emerged: [link](https://www.youtube.com/watch?v=A8mokin%5FYOs\&t=240)

- **`/improve-codebase-architecture`**: Automatically scans the existing repository for flaws, builds a visual HTML report, and asks you which architectural debt item you want to be "grilled" on.
- **`Wayfinder` Grilling Tickets**: Part of a larger agent project mapping system. It breaks massive projects down into atomic GitHub issues, identifying specific complex blocks explicitly as a "Grilling Ticket" task. The agent halts and triggers a focused session only when a human developer needs to break down that specific dependency. [link](https://llmbase.ai/skills/mattpocock/grill-me/)

Are you looking to **install a specific version** of the skill into your project, or would you like to see the **raw markdown code** for the core prompt? [link](https://www.youtube.com/watch?v=cC4pC3x%5Fc9w)

- [link](https://www.youtube.com/watch?v=6BB6exR8Zd8\&t=259)\
  I stopped using /grill-me for coding. Here's what I use instead\
  May 14, 2026 — when I noticed that we were needed to sharpen some. language. I would use the ubiquitous language skill. and call it with you know...\
  3m\
  YouTube·Matt Pocock
- [link](https://www.youtube.com/watch?v=lpkoIwY612I\&t=106)\
  grill-me + Codex: The Planning Workflow That Caught My ...\
  Jun 13, 2026 — alone seeing that same instinct wired into planning was enough to make me finally stop scrolling and install. it quick background ...\
  1m\
  YouTube·The Gray Cat
- [link](https://www.youtube.com/watch?v=ENCRw5-uJBA)\
  I Updated /grill-me And Solved Claude Code\
  Jun 5, 2026 — both leading AI tools sign off on your plan. so you actually can feel confident that what Claude Code came up with actually makes ...\
  12:39\
  YouTube·Chase AI

Show all

## creator

The creator of the **Grill Me** skill is **Matt Pocock**. [link](https://blog.kilo.ai/p/architect-agent-uses-grill-me-to-create-plan)

### About the Creator

- **Background**: Matt Pocock is a highly prominent TypeScript educator, the founder of **Total TypeScript**, and a former engineer at Vercel and Stately. [link](https://tosea.ai/blog/matt-pocock-skills-claude-code-guide)
- **The Origin**: He initially wrote the `grill-me` core concept as just a highly effective, **4-to-5-line prompt instruction** to change how AI models plan out code tasks. [link](https://blog.kilo.ai/p/architect-agent-uses-grill-me-to-create-plan)
- **The Viral Repo**: He packaged it into a public open-source project named **`mattpocock/skills`**. Designed originally for [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview), the repository exploded in popularity among software engineers, quickly amassing tens of thousands of stars on [GitHub](https://github.com/).

Because Matt Pocock's core design principle focused on **workflow enforcement** rather than just tool usage, the framework inspired a whole ecosystem of developer-centric AI variants. [link](https://tosea.ai/blog/matt-pocock-skills-claude-code-guide)

Would you like to **see the original raw text** of Matt's prompt so you can copy it into your own system prompt or AI tool? [link](https://www.instagram.com/reel/DY0WOPqsnmW/)

- [link](https://www.linkedin.com/posts/mapocock%5Fmy-grill-me-skill-went-viral-mattpocock-activity-7441843415232892928-e2RJ)\
  My 'grill-me' skill went viral. mattpocock/skills is up to 9K stars. Quote tweets of it are doing numbers. It's the most useful skill I've written, and I use it even outside of coding. The Skill:… | Matt Pocock\
  Mar 23, 2026 — The Grill Me skill can be used in the following situations: \* Discovering requirements in the early phase of coding \* Figuring out...\
  LinkedIn
- [link](https://www.instagram.com/reel/DY0WOPqsnmW/)\
  check out /grill-me skill! by Matt Pocock on github - Instagram\
  May 26, 2026 — Matt Pocock released Grill Me, a coding assistant that interviews you with up to 50 questions before writing any code. This approa...\
  Instagram·danielearns
- [link](https://blog.kilo.ai/p/architect-agent-uses-grill-me-to-create-plan)\
  Architect Agent Uses Grill-Me to Ask Better Questions - Kilo Blog\
  Jun 3, 2026 — What is Grill-Me? Grill-Me is a skill created by Matt Pocock, and it became very popular because it really produces incredible res...\
  Kilo Blog

Show all

## creator background

Before becoming a viral figure in AI engineering workflows, **Matt Pocock** built a unique career transitioning from **vocal coaching** to **core software engineering**, eventually establishing himself as one of the most prominent technical educators in the JavaScript/TypeScript ecosystem. [link](https://www.mattpocock.com/)

His background bridges the gap between deep communication theory and rigorous software architecture:

### 1. The Early Career: Voice and Drama Coach

- **Education**: He trained heavily in performance and vocal mechanics, earning a Master’s degree from the **[Guildford School of Acting](https://uk.linkedin.com/in/mapocock)**.
- **Profession**: For roughly six years, Matt worked professionally as a **singing teacher, accent coach, and public speaking expert**. This extensive experience in breaking down highly complex physical and audio structures into learnable formulas directly shaped his later clarity as a technical instructor. [link](https://www.reactiflux.com/transcripts/matt-pocock%5Fmapleleaf)

### 2. Transition to Software Engineering

- **The Shift**: He learned coding on the side, moving into professional web development at a small agency.
- **The Turning Point**: After struggling with chaotic, brittle codebases plagued by unvalidated API contracts, he adopted **TypeScript**. Witnessing how much confidence and deployment speed type-safety gave his team, he became a dedicated evangelist for the language. [link](https://www.youtube.com/watch?v=f-YZQcMz9ZA\&t=34)

### 3. Core Dev & Developer Relations (2022)

- **Stately.ai**: He joined the core development team behind **XState**, working intensely on advanced state machines, state charts, and complex frontend architectures. [link](https://www.reactiflux.com/transcripts/matt-pocock%5Fmapleleaf)
- **Vercel**: He later transitioned into Developer Relations at **Vercel**, serving as part of the specialized engineering team that launched **Turbopack** and supported **Turborepo**. [link](https://www.reactiflux.com/transcripts/matt-pocock%5Fmapleleaf)

### 4. Technical Education & Author

- **Total TypeScript**: Leaving corporate tech, he founded **Total TypeScript** in collaboration with the Badass.dev network. The self-paced platform quickly became a gold-standard training ecosystem used by developers at companies like Stripe and Webflow.
- **Published Book**: He authored the physical textbook **_[Total TypeScript: The Essentials](https://nostarch.com/total-typescript)_** published by No Starch Press. [link](https://www.totaltypescript.com/credits)

### 5. Shift to AI Engineering

Rather than just posting prompt lists, Matt focuses on treating AI tools with strict engineering principles. This philosophy led to: [link](https://medium.com/@anup.karanjkar08/stop-treating-matt-pococks-skills-as-prompts-that-s-why-yours-aren-t-working-708f2c74edfc)

- **The `.claude` Repository**: He open-sourced **`mattpocock/skills`**, a systematic directory of execution workflows (including _Grill Me_) that blew past **20,000 GitHub stars**. [link](https://medium.com/@anup.karanjkar08/stop-treating-matt-pococks-skills-as-prompts-that-s-why-yours-aren-t-working-708f2c74edfc)
- **AI Hero**: He now runs **AI Hero**, a massive educational program explicitly helping web developers transition into AI agent engineers by teaching real software fundamentals rather than basic text prompts. [link](https://www.mattpocock.com/)

Would you like to explore **how his software design principles are structured** within his repository, or are you curious about **how to build your own stateful skills**?

- [link](https://www.mattpocock.com/)\
  Matt Pocock\
  Hey, I'm Matt! I'm an educator, content creator and engineer. I used to be a voice coach, then I worked at Vercel - now I teach AI...\
  www.mattpocock.com
- [link](https://x.com/mattpocockuk)\
  Matt Pocock (@mattpocockuk) / Posts / X - Twitter\
  Jul 12, 2026 — Matt Pocock✓. mattpocockuk. Location: Oxford, England. Website: https://aihero.dev. Joined: Aug 1, 2011. 35296Posts. 791Following.\
  X·mattpocockuk
- [link](https://www.reactiflux.com/transcripts/matt-pocock%5Fmapleleaf)\
  Matt Pocock - Reactiflux\
  Carl Vitullo: I'm here today with Matt Pockock and Maple Leaf. Matt is a TypeScript educator working independently. And he has spe...\
  Reactiflux

Show all

## creator projects

Matt Pocock’s projects are divided into two main eras: his massive **TypeScript educational platforms** and his viral, open-source **AI engineering toolkits**. [link](https://www.mattpocock.com/)

His major projects are organized by ecosystem below:

### 1. The AI Agent Ecosystem

Instead of "vibe coding" (asking an AI to write code immediately), Matt’s AI projects focus on building rigid, multi-step engineering frameworks. [link](https://www.youtube.com/shorts/5IoVDDeuQ8I)

- **`mattpocock/skills`**: His most viral open-source project, crossing over 26,000 GitHub stars. It is a repository of composable workflows (like `/grill-me`, `/wayfinder`, `/tdd`, and `/to-tickets`) that can be injected directly into AI developer agents like Claude Code or Cursor to force them to act like senior engineers. [link](https://www.youtube.com/watch?v=A8mokin%5FYOs)
- **Sandcastle**: An open-source TypeScript API tool designed to run completely **AFK (Away From Keyboard) software factories**. It handles spawning coding agents inside isolated docker/sandbox environments to safely execute tasks and write test-driven development loops entirely autonomously. [link](https://www.youtube.com/watch?v=-QFHIoCo-Ko)
- **AI Hero**: A premium educational platform and training cohort teaching web developers how to transition into AI engineers. It avoids surface-level prompting tricks and focuses on building real stateful agent loops, context gathering, and software pipelines. [link](https://www.aihero.dev/posts)

### 2. The TypeScript & Frontend Ecosystem

Before shifting full-time to AI, Matt built some of the most widely used learning assets and architectural tools in the JavaScript ecosystem:

- **Total TypeScript**: His flagship professional training platform. It is widely considered the industry-standard curriculum for learning production-grade, advanced type-safety, trusted by enterprise dev teams globally. [link](https://github.com/mattpocock)
- **_Total TypeScript: The Essentials_**: A physical textbook published by No Starch Press, mapping out core TypeScript structures. [link](https://www.mattpocock.com/)
- **Sextant (`mattpocock/sextant`)**: A visual GUI and development tool built to help engineers map out complex application flows using statecharts, which then automatically generates the underlying executable code. [link](https://github.com/mattpocock/sextant)
- **TS-Reset (`total-typescript/ts-reset`)**: A popular, "rules-normalizing" CSS-like reset file for TypeScript's built-in types, making functions like `.filter(Boolean)` behave safely and intuitively out of the box.

Would you like to drill down into his **AI Skills setup** to see how to install it, or explore his **TypeScript open-source code libraries**?

- [link](https://www.youtube.com/watch?v=-QFHIoCo-Ko)\
  Full Walkthrough: Workflow for AI Coding — Matt Pocock - YouTube\
  Apr 24, 2026 — Full Walkthrough: Workflow for AI Coding — Matt Pocock - YouTube. This content isn't available. Matt will be back on stage at the ...\
  YouTube·AI Engineer
- [link](https://www.mattpocock.com/)\
  Matt Pocock\
  Hey, I'm Matt! I'm an educator, content creator and engineer. I used to be a voice coach, then I worked at Vercel - now I teach AI...\
  www.mattpocock.com
- [link](https://www.youtube.com/watch?v=YjdaLKkgez8)\
  I Built Matt Pocock's AFK Software Factory, It Runs Coding ...\
  May 1, 2026 — the hook with Sandcastle is simple it is not another chat box for code it is Matt PCO taking the agent loop and turning it into a ...\
  [5:50](https://www.youtube.com/watch?v=YjdaLKkgez8)\
  YouTube·TechWealth Hub

Show all

## usage examples of grill me

The **`grill-me`** skill changes how you interact with AI by switching the model from an compliant task-taker into a strict, inquisitive interviewer. To use it effectively, you must present a **concrete plan with constraints**, rather than a vague idea. [link](https://www.youtube.com/watch?v=cC4pC3x%5Fc9w)

Four real-world usage examples illustrate how developers and business teams deploy the skill: [link](https://lobehub.com/skills/vechain-vechain-ai-skills-grill-me)

***

### Example 1: System Architecture & Tech Stack Migration

A senior engineer wants to change how their application handles users but wants to catch edge cases before touching the code. [link](https://www.youtube.com/watch?v=cC4pC3x%5Fc9w)

- **The Setup Prompt:**

> _"Execute `/grill-me` on this requirements plan: We need to migrate our B2B app from custom session authentication to OAuth within 6 weeks. We must keep SSO for enterprise tier customers, avoid any downtime, and preserve our current 'admin impersonation' debugging feature. Biggest unknowns are database tenant mapping and rollback safety."_\
> [link](https://agentskillsfinder.com/skills/grill-me)

- **How the AI Grills You:**\
  Instead of writing a migration script right away, the AI walks down the decision tree. It scans the repository to see how session tables look, then asks targeted, sequential questions with a recommended path:

> \_"**Question 1:** For enterprise SSO users, are they currently sharing cookie domains with standard users, or do they route through isolated subdomains? **My recommendation:** Use isolated subdomains (`_.tenant.com`) to allow selective routing during the 6-week window. Do you agree?"\*\
> [link](https://www.youtube.com/watch?v=cC4pC3x%5Fc9w)

***

### Example 2: API & Data Model Design Review

An engineer is preparing to build a new microservice feature and wants the AI to push back on weak code ergonomics before finalizing the API contract. [link](https://www.aihero.dev/skills-grill-me)

- **The Setup Prompt:**

> _"I want to add a feature allowing premium users to pause their subscriptions. I'm thinking of adding a `paused_at` timestamp field to the `subscriptions` table. `/grill-me` on this database design."_\
> [link](https://www.youtube.com/watch?v=ENCRw5-uJBA)

- **How the AI Grills You:**\
  The AI stops the developer from prematurely coding a bad database schema. It checks your current codebase patterns and begins the interrogation:

> _"**Question:** What happens to unspent billing credits when a user pauses mid-cycle? If we rely solely on a `paused_at` timestamp, we won't track exactly how many days of service are owed upon resumption. **My recommendation:** Create a separate `subscription_pauses` table mapping `start_date` and `expected_resume_date` to isolate billing logic. Should we map it this way?"_\
> [link](https://www.youtube.com/watch?v=cC4pC3x%5Fc9w)

***

### Example 3: Parsing a Legacy Codebase Change

A developer joins a large project and needs to implement an e-commerce feature without breaking existing code.

- **The Setup Prompt:**

> _"I need to implement a dynamic multi-currency checkout. Use `/grill-me` to walk me through the code risks. Check the `src/billing` folder first."_\
> [link](https://agentskillsfinder.com/skills/grill-me)

- **How the AI Grills You:**\
  The skill instructs the AI to look at the codebase rather than asking obvious questions. It digs through your existing code and spots deep integration dependencies:

> _"**Question:** I see `CheckoutController.ts` hardcodes currency symbols in 4 places, but `TaxCalculator.ts` relies strictly on USD float values. If we introduce international currencies, should we handle decimal conversion at the API gateway layer or update the core tax module? **My recommendation:** Update the tax module to accept standard ISO currency codes to avoid rounding bugs down the line. Is that acceptable?"_\
> [link](https://www.youtube.com/watch?v=cC4pC3x%5Fc9w)

***

### Example 4: Non-Technical Business Strategy Alignment

Because `grill-me` is a logical framework, founders and teams use it outside of software engineering to stress-test business operations. [link](https://github.com/mattpocock/skills/blob/main/README.md)

- **The Setup Prompt:**

> _"My partner and I are considering hiring our first full-time customer support manager. `/grill-me` on our operational hiring plan so we can clarify exactly what we need."_

- **How the AI Grills You:**\
  The AI begins mapping out operational edge cases:

> _"**Question:** Do your support tickets spike during specific global timezones, or is volume steady throughout the day? **My recommendation:** If coverage is required over a 24-hour window, hire an agency or contractor first instead of a local W2 employee to avoid overnight staffing liabilities. What is your current hourly ticket volume breakdown?"_\
> [link](https://lobehub.com/skills/vechain-vechain-ai-skills-grill-me)

***

### Best Practices for Your Session

1. **Answer Crisply**: Simply reply with `"Yes"` to accept the AI's smart recommendations, or give a brief 1-sentence pivot to keep the momentum going.
2. **Never Jump Ahead**: Answer the single question presented. Let the AI trace down each branch of the logic tree sequentially.
3. **The Wrap Up**: Once the questions dry up, type: _"Conclude grilling. Give me a structured summary of our resolved decisions and open risks."_ [link](https://www.youtube.com/watch?v=cC4pC3x%5Fc9w)

Would you like to copy the **raw system prompt text** to use this workflow in your favorite chat tool, or are you trying to **troubleshoot an installation issue**? [link](https://www.reddit.com/r/ClaudeCode/comments/1th170b/how%5Fto%5Fprompt%5Fbetter/)

- [link](https://www.youtube.com/watch?v=cC4pC3x%5Fc9w)\
  /grill-me Skill: 10x Your Code with AI (2026)\
  Jun 4, 2026 — the grill me skill is going viral and this is going to change the way how you work with AI. we are talking about the skill from Ma...\
  7:19\
  YouTube·Thetips4you
- [link](https://www.youtube.com/watch?v=ENCRw5-uJBA)\
  I Updated /grill-me And Solved Claude Code\
  Jun 5, 2026 — it. and their email is stored. and then I gave it some additional context so the first part is going to be the grill. me skill it&\
  12:39\
  YouTube·Chase AI
- [link](https://agentskillsfinder.com/skills/grill-me)\
  grill-me install and usage guide - Agent Skills Finder\
  Apr 7, 2026 — What input grill-me needs to work well. The best grill-me usage starts with a concrete planning object, not a vague topic. Give: t...\
  agentskillsfinder.com
- [link](https://gabrielvrl.medium.com/top-3-claude-code-skills-i-use-every-day-bonus-dcd8f86d55df)\
  Top 3 Claude Code Skills I Use Every Day (+ Bonus) | Medium\
  May 17, 2026 — 1. /review (Built-in) This is a built-in Claude Code skill that performs code review on Pull Requests. What it does: Fetches PR de...\
  Medium·Gabriel Varela
- [link](https://www.aihero.dev/my-grill-me-skill-has-gone-viral)\
  My 'Grill Me' Skill Went Viral - AI Hero\
  The Skill. Here is the skill in all its glory: --- name: grill-me. description: Interview the user relentlessly about a plan or de...\
  AI Hero
- [link](https://www.youtube.com/watch?v=8elLGj9gOvQ)\
  How to Use the 'Grill Me' Prompt to Align Your AI\
  Jun 25, 2026 — the first skill is called grill me. and grill me the skill grill me the whole premise the whole. idea is to make sure that you and...\
  3:09\
  YouTube·AI-DTC-WTF-Podcast
- [link](https://lobehub.com/skills/vechain-vechain-ai-skills-grill-me)\
  grill-me | Skills Marketplace - LobeHub\
  Jul 2, 2026 — Summary. Grill Me is a focused planning interviewer skill that relentlessly probes a user's design or project plan until every dec...\
  LobeHub
- [link](https://github.com/mattpocock/skills/blob/main/README.md)\
  skills/README.md at main · mattpocock/skills - GitHub\
  Productivity. General workflow tools, not code-specific. ... grill-me — Get relentlessly interviewed about a plan or design until ...\
  GitHub
- [link](https://www.reddit.com/r/ClaudeCode/comments/1th170b/how%5Fto%5Fprompt%5Fbetter/)\
  How to prompt better ?? : r/ClaudeCode - Reddit\
  May 18, 2026 — as an example, matt pocock's /grill-me skill is absolutely a prompt - an amazingly simple and effective one! i use it a lot. but i...\
  Reddit·r/ClaudeCode
- [link](https://www.aihero.dev/skills-grill-me)\
  The /grill-me Skill - AI Hero\
  before asking an agent to implement a feature. before committing to a data model or API shape. when several design choices depend ...\
  AI Hero
- [link](https://tosea.ai/blog/matt-pocock-skills-claude-code-guide)\
  How to Use Matt Pocock's Skills for Claude Code - Tosea.ai\
  Apr 25, 2026 — grill-me is a design review skill. Before implementation begins, it challenges the developer's design decisions through a structur...\
  Tosea.ai

## usage examples of grill w docs

The **`/grill-with-docs`** skill is a powerful extension of Matt Pocock’s original framework. While the standard skill just interrogates you in the chat box, `/grill-with-docs` forces the AI to actively write down your answers into a persistent, stateful markdown document (typically `context.md` or a dedicated architecture file) _while_ it grills you.

This prevents you from losing your decisions in a long chat history and ensures you end up with instant documentation.

Four concrete, real-world examples illustrate how developers use this workflow to build and update project architecture:

***

### Example 1: Starting a New Greenfield Project

An engineer wants to kick off a brand new SaaS dashboard using Next.js but doesn't want to start coding with an empty canvas or unstructured ideas.

- **The Setup Prompt:**

> _"I am starting a multi-tenant project management SaaS app. Run `/grill-with-docs` to help me structure the initial system architecture, data isolation strategy, and domain terminology."_

- **How the Workflow Executes:**\
  The AI instantly initializes or reads your local project documentation, then drops a question into the chat:

> _"**Question 1:** For multi-tenancy isolation, are we planning a silo approach with separate databases per tenant, or a shared database with a `tenant_id` foreign key on every table? **My recommendation:** A shared database using Row-Level Security (RLS) via PostgreSQL for faster scaling and lower initial infrastructure overhead."_

- **The Background Documentation Event:**\
  If you reply _"Agreed, let's use shared DB with RLS,"_ the AI automatically appends an Architectural Decision Record (ADR) and a Domain Glossary to your `context.md` file in the background:\
  markdown

<!---->

```
## Architectural Decisions
*   **ADR-001: Multi-Tenancy Strategy**
    *   **Decision:** Shared database architecture.
    *   **Implementation:** PostgreSQL Row-Level Security (RLS) enforced via `tenant_id`.
    *   **Rationale:** Lowers initial operational overhead and simplifies cross-tenant analytics.
```

Use code with caution.

***

### Example 2: Domain-Driven Design (DDD) & Ubiquitous Language Alignment

A development team is building a complex logistics app. The problem is that the business team uses the word "Shipment," developers use "Order," and the third-party API uses "Consignment." The codebase is becoming an unreadable mess.

- **The Setup Prompt:**

> _"Run `/grill-with-docs` to build out our ubiquitous language lexicon for our fulfillment service. Grill me on the exact definitions of our primary business objects."_

- **How the Workflow Executes:**\
  The AI initiates a structured terminology breakdown:

> _"**Question:** In our codebase, `Order` currently represents both a shopping cart purchase and a package out for delivery. To establish clear domain bounds, should we split these into `CustomerOrder` (sales domain) and `DeliveryManifest` (shipping domain)? **My recommendation:** Yes, splitting them avoids deep coupling in our database models."_

- **The Background Documentation Event:**\
  When you approve the suggestion, the AI edits the glossary block inside your project docs:\
  markdown

<!---->

```
## Ubiquitous Language Glossary
*   **CustomerOrder**: The financial transaction item created when a user checks out.
*   **DeliveryManifest**: The physical package details handed off to the logistics partner.
```

Use code with caution.

***

### Example 3: Documenting a Refactor of Crucial Legacy Modules

A developer needs to refactor an older, poorly written notification engine to support push notifications instead of just SMS.

- **The Setup Prompt:**

> _"I need to rewrite `NotificationRouter.ts` to support APNS and Firebase. Use `/grill-with-docs` to evaluate breaking changes, and track our technical debt trade-offs in `context.md`."_

- **How the Workflow Executes:**\
  The AI scans the file, recognizes the spaghetti code patterns, and pushes back:

> _"**Question:** The current `sendSMS` function is tightly coupled to the Twilio SDK directly inside the controller. If we add Firebase, should we abstract this behind a `NotificationProvider` interface? **My recommendation:** Yes, creating an interface allows us to swap or mock providers easily for testing."_

- **The Background Documentation Event:**\
  Once resolved, the AI appends an active engineering tracking block to your project root:\
  markdown

<!---->

```
## Technical Debt & Refactor Log
*   **Status:** In-Progress (Refactoring `NotificationRouter.ts`)
*   **Decisions Made:**
    *   [x] Abstracted notification logic away from vendor SDKs via a unified interface.
*   **Open Risks:**
    *   [ ] Need to verify retrofitting legacy database rows that miss the new provider schema.
```

Use code with caution.

***

### Example 4: Auditing API Security Compliance

An engineer needs to ensure that a collection of incoming webhooks from stripe or github are totally secure before pushing to production.

- **The Setup Prompt:**

> _"Run `/grill-with-docs` on our incoming webhook controllers in `src/api/webhooks`. Let's document our security boundaries and threat mitigation steps."_

- **How the Workflow Executes:**\
  The AI identifies a massive security vulnerability during the interrogation process:

> _"**Question:** I notice `stripeWebhook.ts` reads the raw body payload but does not explicitly validate the `Stripe-Signature` header against a signing secret. **My recommendation:** We must block execution immediately if signature verification fails, returning a 400 Bad Request. Should I add this constraint?"_

- **The Background Documentation Event:**\
  Upon your response, the AI patches the codebase _and_ creates a permanent compliance log in the documentation:\
  markdown

<!---->

```
## Security Compliance Audit
*   **Module:** Webhook Endpoints
*   **Threat Mitigations Verified:**
    *   [x] Cryptographic signature verification via `Stripe-Signature`.
    *   [ ] Idempotency key tracking to block replay attacks (Remaining Interrogation Point).
```

Use code with caution.

***

### How to Drive a `/grill-with-docs` Session Efficiently

1. **Let the AI manage the file**: Do not open and edit `context.md` at the same time as the AI, or you will cause a git or file lock conflict. Let the AI save to it dynamically after every 1-2 questions.
2. **Review the document regularly**: During a long session, you can say _"Pause grilling. Show me the current state of our context document"_ to make sure it is capturing your design intent perfectly.
3. **Commit the artifact**: Once the session ends, commit the modified `context.md` directly into your GitHub repository along with the code changes. This ensures the entire team stays aligned on the design decisions.

Would you like to **see the exact system prompt template** required to teach an AI how to manage a stateful document like this, or do you want to **integrate this workflow into Cursor or Claude Code**?

- [link](https://github.com/mattpocock/skills/issues/199)\
  grill-with-docs: planning and responses default to English even when the user writes in another language · Issue #199 · mattpocock/skills\
  May 14, 2026 — The whole value of grill-with-docs is high-quality back-and-forth: the user gives precise answers, the skill records them as CONTE...\
  \
  \
  GitHub
- [link](https://adityakumarpuri.medium.com/matt-pococks-5-claude-code-skills-made-me-rewrite-how-i-work-with-ai-agents-d71853c3056c)\
  Matt Pocock’s 5 Claude Code skills made me rewrite how I work with AI agents\
  May 3, 2026 — /grill-with-docs: the glossary fix There's an upgraded version called /grill-with-docs . Same loop, but it maintains a CONTEXT.md ...\
  \
  \
  Medium
- [link](https://medium.com/@anmjawad007/the-two-matt-pocock-skills-i-use-in-almost-every-ai-coding-session-57c468938145)\
  The Two Matt Pocock Skills I Use in Almost Every AI Coding Session\
  May 29, 2026 — grill‑with‑docs forces clarity before coding; it interrogates your plan against the existing domain language, sharpens terminology...\
  \
  \
  Medium

Show all

# multi tenant saas meaning

**Multi-tenant Software-as-a-Service (SaaS)** is <mark>a cloud computing architecture where a single instance of a software application serves multiple distinct customers, known as<span> </span><strong>"tenants."</strong></mark> [link](https://www.fortra.com/blog/saas-single-tenant-vs-multi-tenant-whats-difference)

The easiest way to understand this is the **apartment building analogy**: [link](https://www.appviewx.com/education-center/saas-single-tenancy-vs-multi-tenancy/)

- **Single-Tenant SaaS**: Like a street of independent suburban houses. Each customer has their own dedicated foundation, plumbing, and security system.
- **Multi-Tenant SaaS**: Like a large, modern apartment building. All customers share the central infrastructure (the lobby, elevators, and roof), but every tenant has their own private apartment with a unique key. They cannot see or enter anyone else's space. [link](https://www.fortra.com/blog/saas-single-tenant-vs-multi-tenant-whats-difference)

***

### Core Mechanics of Multi-Tenancy

- **Shared Codebase**: Every customer runs on the exact same version of the software application.
- **Data Isolation**: Although customers share hardware, compute power, and often the same database, their data is logically separated. Built-in software boundaries prevent any cross-tenant data leaks.
- **Metadata Customization**: Because the core code cannot be changed for just one customer, personalizations (like custom branding, unique workflows, or specific user roles) are applied via metadata settings.
- **Real-World Examples**: Major companies like Salesforce, Shopify, HubSpot, Slack, and Google Workspace all operate on a multi-tenant framework. [link](https://www.fortra.com/blog/saas-single-tenant-vs-multi-tenant-whats-difference)

***

### Key Benefits

- **Lower Costs**: Infrastructure, hosting, and operational expenses are divided among thousands of customers, reducing the overall subscription price.
- **Effortless Upgrades**: When the vendor updates the system or patches a bug, the change rolls out to every user simultaneously. Customers never have to download patches manually.
- **Instant Onboarding**: New users can sign up and start utilizing the software instantly since there is no need to deploy individual servers.
- **Efficient Scaling**: Computing resources expand or contract dynamically based on user load. [link](https://www.fortra.com/blog/saas-single-tenant-vs-multi-tenant-whats-difference)

***

### Architectural Database Strategies

Software engineers typically segregate tenant data using one of three approaches:

| Strategy                              | Technical Mechanism                                                                                            | Best Used For                                                           |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Shared Database, Shared Tables**    | All data sits in the same tables, isolated by a mandatory `tenant_id` column on every query.                   | Early-stage startups, high-volume/low-risk consumer apps.               |
| **Shared Database, Separate Schemas** | Tenants share a physical database but hold completely separate logical schemas/tables.                         | Mid-market B2B products seeking a balance of isolation and cost.        |
| **Separate Database per Tenant**      | Every tenant gets their own isolated physical or virtual database, though the application code remains shared. | Enterprise clients with strict security or regulatory compliance needs. |

***

### Primary Drawbacks

- **"Noisy Neighbor" Syndrome**: If one tenant experiences an enormous spike in user traffic, it can accidentally consume shared server resources and degrade performance for everyone else.
- **Blast Radius of Security Breaches**: A severe security bug or flaw in the shared application layer could expose the data of multiple clients at the same time.
- **Restricted Customization**: Customers cannot request deep code modifications or structural changes because the codebase is uniform across the entire platform. [link](https://www.sailpoint.com/identity-library/single-tenant-multi-tenant)

If you are thinking about building or buying software, tell me:

- Are you looking at this from a **software developer** or a **business buyer** perspective?
- What **specific industry or use case** are you evaluating?

I can provide technical architecture patterns or suggest which model fits your security requirements.

- [link](https://www.fortra.com/blog/saas-single-tenant-vs-multi-tenant-whats-difference)\
  SaaS: Single Tenant vs Multi-Tenant - What's the Difference?\
  Jul 26, 2018 — Maintenance: Single-tenant typically means more tasks and regular maintenance to keep things running smoothly and efficiently. Set...\
  Fortra
- [link](https://www.ibm.com/think/topics/multi-tenant)\
  What Is Multi-Tenant? | IBM\
  What is multi-tenant (or multitenancy)? In multi-tenant software architecture, also called software multitenancy, a single instanc...\
  IBM
- [link](https://clerk.com/blog/what-is-multi-tenancy-and-why-it-matters-for-B2B-SaaS)\
  What is multi-tenancy and why it matters for B2B SaaS - Clerk\
  Jun 17, 2025 — At its core, multi-tenancy⁠ is an architectural design pattern that allows a single instance of an application to serve multiple c...\
  Clerk

Show all

## example of single or multi

Here are concrete, real-world examples of how single-tenant and multi-tenant architectures look in practice:

### Multi-Tenant Examples

Multi-tenant software is highly standardized. Everyone logs into the same platform, but their data is securely separated.

- **Slack:** Every company has its own private workspace (e.g., `://slack.com`). All companies share Slack's global servers and use the exact same interface, but your employees can never see another company's channels.
- **Google Workspace (Gmail/Drive):** Millions of users log into `gmail.com`. Everyone uses the same interface and features, but a strict logical wall ensures your emails and documents are completely invisible to other users.
- **Shopify:** Thousands of online stores run on Shopify. They all share the same checkout engine and hosting infrastructure, even though each store has a different design, logo, and product catalog.

### Single-Tenant Examples

Single-tenant software is dedicated entirely to one customer. It is usually chosen for extreme security, compliance, or heavy customization.

- **Government Cloud Portals:** A defense agency using Amazon Web Services (AWS) GovCloud. They require their own physical, isolated servers that are completely disconnected from commercial public web traffic.
- **Enterprise Banking Systems:** A large global bank using a specialized payment processing software. Because of strict financial regulations, the bank pays to have its own dedicated instance of the software running on isolated hardware to eliminate any risk of data blending.
- **Custom Corporate ERPs:** A massive manufacturing company using SAP or Oracle. The software is heavily customized to match the company's unique global supply chain, meaning it cannot share a codebase with any other business.

### Quick Comparison Summary

| Feature     | Multi-Tenant Example (e.g., Slack)                   | Single-Tenant Example (e.g., Private Bank Portal)                    |
| ----------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
| **The URL** | Everyone uses `://slack.com`                         | Custom dedicated domain like `://bankname.com`                       |
| **Updates** | Slack pushes an update; everyone gets it at midnight | The bank decides exactly what day and hour to deploy an update       |
| **Server**  | You share server space with thousands of companies   | You are the only company on that specific virtual or physical server |

To help tailor this, tell me:

- Are you looking for examples of **specific software products**, or **how a single product offers both options**?
- Are you trying to **choose a vendor**, or **architecting your own app**?

I can provide deep-dive case studies or architectural blueprints based on your goal.

- [link](https://www.clickittech.com/software-development/single-tenant-multi-tenant/)\
  Single Tenant vs Multi Tenant: SaaS Architecture Differences\
  Aug 12, 2020 — The multi-tenant architecture has become the standard within enterprise SaaS ( software-as-a-service ) environments. However, the ...\
  \
  \
  ClickIT
- [link](https://www.descope.com/blog/post/single-tenant-vs-multi-tenant)\
  Multi-Tenant vs. Single-Tenant: Key Differences Explained\
  Dec 19, 2025 — Multi-tenant architecture is an approach to software service provision in which a single instance is shared between multiple “tena...\
  \
  \
  Descope
- [link](https://bizowie.com/multi-tenant-vs-single-tenant-cloud-erp-why-the-architecture-behind-your-system-matters-more-than-you-think)\
  Multi-Tenant vs. Single-Tenant Cloud ERP: Why the Architecture Behind Your System Matters More Than You Think\
  Feb 9, 2026 — In a multi-tenant architecture, all customers share a single instance of the software running on shared infrastructure, with stric...\
  \
  \
  Bizowie

Show all

## eli5

Imagine a big modern **apartment building** versus a street of **suburban houses**.

### Multi-Tenant: The Apartment Building

Imagine you rent an apartment.

- **Shared Space**: Everyone shares the same building foundation, roof, plumbing, main lobby, and elevators.
- **Private Space**: You have your own apartment with a private key. Your neighbors cannot look inside your home or touch your things.
- **The landlord (Software Company)**: If the landlord fixes the roof or cleans the lobby, every resident gets a better building at the exact same time. You don't have to do any maintenance yourself.
- **Examples**: **Netflix** or **Gmail**. Everyone goes to the exact same website, but you only see your own movies or emails.

### Single-Tenant: The Suburban House

Imagine you own a standalone house on a private street.

- **Completely Separate**: You have your own separate roof, your own yard, and your own plumbing. You do not share anything with neighbors.
- **Customization**: You can paint the house neon green, knock down walls, or change the pipes whenever you want. You don't have to ask permission.
- **Maintenance**: If the roof leaks, you have to pay to fix it yourself. It costs a lot more money to build and keep up than an apartment.
- **Examples**: **A high-security government office** or a **secret bank server**. They need their own private, locked-down computer systems that nobody else can get anywhere near.

### The Cheat Sheet

- **Multi-tenant** = Sharing the big machine to save money, but keeping your data locked in your own room.
- **Single-tenant** = Buying your own separate machine so nobody else can touch it, but paying a lot more for it.

To help you learn more, let me know:

- Would you like another **analogy** (like an amusement park or a school)?
- Are you trying to explain this concept to a **kid**, a **coworker**, or a **client**?

I can adjust the explanation to fit the exact audience you are speaking to.

## seems it's multi unless self hosted

You have hit the nail on the head. In the modern software world, **SaaS is almost always multi-tenant by default**, while **self-hosted software is inherently single-tenant**.

However, there is one rare exception to this rule where the lines blur. Here is exactly how they break down:

### 1. The Standard Rule: SaaS vs. Self-Hosted

For 95% of software, your logic is exactly how the industry operates:

- **SaaS (Multi-Tenant)**: You go to a website, create an account, and pay a monthly fee. The vendor manages everything on their own servers. (e.g., Slack, HubSpot, Canva).
- **Self-Hosted (Single-Tenant)**: You download the software code and run it on your own private servers (like AWS, Google Cloud, or a physical server closet in your office). Because you own the environment, you are the only "tenant" on that machine. (e.g., hosting your own WordPress site or Bitbucket server).

***

### 2. The Exception: "Single-Tenant SaaS" (Managed Hosting)

There is a middle ground where a product is **SaaS**, but it is **NOT multi-tenant**. This is often called **Managed Hosting**, **Private Cloud**, or **Enterprise SaaS**.

In this scenario:

- **The Vendor Manages It**: You don't have to download code or manage servers. The vendor handles the updates, uptime, and maintenance (which makes it SaaS).
- **You Get Your Own Sandbox**: Instead of putting you in the "apartment building" with everyone else, the vendor spins up a completely separate, isolated server just for your company.

### Why would a company pay for Single-Tenant SaaS?

Large enterprises, banks, and healthcare companies will pay 10x the normal price for this hybrid model because:

1. **Compliance**: Laws may forbid them from mixing data on the same hard drives as other companies.
2. **Control**: They can tell the vendor, _"Do not update our software tonight. We are in the middle of a major product launch; delay our update by two weeks."_ In a normal multi-tenant SaaS, you cannot opt out of updates.

***

### Summary

- **SaaS** = Someone else runs the software for you. (Usually multi-tenant, but can be single-tenant for a massive premium).
- **Self-Hosted** = You run the software yourself. (Always single-tenant).

If you are looking at a specific piece of software right now, let me know:

- What is the **name of the software** or the **type of tool**?
- Are you trying to figure out **which hosting option to buy**?

I can tell you exactly how that specific vendor structures their hosting and pricing!

- [link](https://www.papercut.com/discover/cloud-and-print/choosing-a-model-for-cloud-print-management-self-hosted-or-fully-hosted/)\
  Cloud print management: Choosing a self-hosted or fully-hosted model\
  Self-hosted clouds are single tenant instances by nature. They are one instance of applications administered for a single organiza...\
  \
  \
  PaperCut
- [link](https://www.cloudzero.com/blog/single-tenant-vs-multi-tenant/)\
  Single-Tenant vs. Multi-Tenant Cloud: Key Differences\
  Apr 20, 2026 — Most consumer-facing SaaS applications run multi-tenant. Most enterprise-grade products serving regulated industries start single-\
  \
  \
  CloudZero
- [link](https://cozycommerce.dev/blog/self-hosted-ecommerce-platform)\
  7+ Best Self-Hosted Ecommerce Platform in 2026\
  Apr 24, 2026 — A self-hosted ecommerce platform runs on your own server or cloud. You manage the code, database, and infrastructure. A SaaS ecomm...\
  \
  \
  CozyCommerce

Show all

# grill me skill or grill w docs

Choose **`/grill-with-docs`** if you are working on an ongoing codebase, but pick **`/grill-me`** if you just need a quick, isolated brainstorming session. Both AI agent skills were created by Matt Pocock to cross-examine your implementation plans before you write any code. [link](https://www.youtube.com/watch?v=6BB6exR8Zd8\&t=259)

Here is how to choose between them based on your needs:

### 🛠️ Use `/grill-with-docs` if:

- **You have existing code:** It reads your codebase directly to check if answers already exist before pestering you with a question.
- **You want to build a project glossary:** It maps out a "ubiquitous language" and flags you if your instructions use conflicting terminology.
- **You need documentation:** It automatically updates local documentation like `CONTEXT.md` and Architectural Decision Records (ADRs) inline as you make decisions.
- **You are managing a long context window:** The written documents serve as a checkpoint so the AI doesn't forget your plan when you hit token limits. [link](https://www.youtube.com/watch?v=6BB6exR8Zd8\&t=259)

### 🧠 Use `/grill-me` if:

- **You want speed:** It is a lighter, simpler interview workflow designed just to shake out the blind spots in your logic.
- **You are starting completely from scratch:** You do not have local docs or code to cross-reference yet.
- **You just want a sounding board:** You want the relentless questioning mode without any side-effects like file creation or repository modifications. [link](https://www.youtube.com/watch?v=6BB6exR8Zd8\&t=259)

***

To help you decide on your setup, what **kind of project** are you working on right now, and what **AI terminal tool** (like Claude Code or Cursor) are you using to run your skills?

- [link](https://www.youtube.com/watch?v=6BB6exR8Zd8\&t=259)\
  I stopped using /grill-me for coding. Here's what I use instead\
  May 14, 2026 — when I noticed that we were needed to sharpen some. language. I would use the ubiquitous language skill. and call it with you know...\
  3m\
  YouTube·Matt Pocock
- [link](https://www.youtube.com/watch?v=lLiHLkIU%5F5M)\
  I Tried /grill-with-docs Skill: Massive Difference\
  May 27, 2026 — hello guys in this video I will show you how I tried grill with dogs AI skill by Matt Pacock. which is a successor to a very popul...\
  14:50\
  YouTube·AI Coding Daily
- [link](https://www.aihero.dev/grill-with-docs)\
  grill-with-docs: Align Before You Build\
  Grill-with-docs is a skill that interviews you about a plan or design until you and the agent reach a shared understanding. It wri...\
  AI Hero

Show all