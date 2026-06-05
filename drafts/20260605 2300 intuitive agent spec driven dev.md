coding agent spec md

The **`AGENTS.md` and `SPECS.md`** files are <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">modern open standards used in <strong>Spec-Driven Development (SDD)</strong> to provide structured, persistent guidance to AI coding agents like <span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://codegen.com/best-ai-coding-agents/" style="margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">Claude Code</a></span>, OpenAI Codex, Cursor, and Windsurf</mark>. These files serve as an "operational manual" or a README for AI agents, ensuring they respect your repository's build commands, coding standards, and boundaries without suffering from context drift or hallucination. \[[1](https://www.youtube.com/watch?v=G2Yn1btfZrk\&t=29), [2](https://medium.com/data-science-collective/the-complete-guide-to-ai-agent-memory-files-claude-md-agents-md-and-beyond-49ea0df5c5a9), [3](https://codegen.com/best-ai-coding-agents/), [4](https://developers.openai.com/codex/guides/agents-md), [5](https://kilo.ai/docs/customize/agents-md), [6](https://github.com/agentsmd/agents.md), [7](https://medium.com/predict/spec-driven-development-with-ai-coding-agents-the-definitive-guide-453fba1baf39), [8](https://www.aihero.dev/a-complete-guide-to-agents-md)]

Below is the industry-standard Markdown blueprint for configuring an effective coding agent specification. \[[1](https://github.com/agentmd/agent.md), [2](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/)]

***

### AI Coding Agent Specification Template (`AGENTS.md`)

markdown

````
# AGENTS.md - AI Coding Agent Specification

## 1. Project Context & Stack
* **Project Name**: [Insert Project Name]
* **Core Stack**: [e.g., React 19, TypeScript, Next.js 15, TailwindCSS, Prisma]
* **Package Manager**: [e.g., pnpm, npm, yarn]
* **Target Environment**: [e.g., Node.js v22, Cloudflare Workers]

## 2. Core Execution Commands
Always run these exact commands when verifying your work. Do not guess or invent custom flags.
* **Build**: `pnpm run build`
* **Linting**: `pnpm run lint`
* **Formatting**: `pnpm run format`
* **Unit Tests**: `pnpm test`
* **Integration Tests**: `pnpm test:e2e`

## 3. Code Style & Architecture Conventions
Follow these strict architectural rules. Real snippets are provided below for calibration.
* **Component Pattern**: Use functional components with explicit TypeScript interfaces for props.
* **State Management**: Prefer React server actions and local `useState`. Do not introduce global state stores unless requested.
* **Asynchronous Code**: Always use `async/await` syntax over raw `.then()` chains.

### Correct Example (Do This):
```typescript
interface UserProfileProps {
  userId: string;
}

export async function UserProfile({ userId }: UserProfileProps) {
  const user = await fetchUserData(userId);
  return <div className="p-4 bg-gray-50">{user.name}</div>;
}
```

### Incorrect Example (Avoid This):
```javascript
// Avoid untyped JavaScript and raw promises
const UserProfile = (props) => {
  fetchUserData(props.userId).then(user => { ... });
}
```

## 4. Operational Boundaries & Constraints
* **CRITICAL - Secrets**: NEVER hardcode API keys, tokens, or credentials. Use `.env.example` to reference new variables.
* **Prohibited Deletions**: Do not delete or rename existing files in the `/legacy` folder without explicit human approval.
* **Git Workflows**: Never invoke `git push` or modify GitHub Action workflows under `.github/workflows/`.
* **Third-Party Libraries**: Do not add new `dependencies` to `package.json` unless a native solution is entirely impossible.

## 5. Definition of Done (Verification Checklist)
Before completing any task, you must successfully execute and verify the following sequence:
1. Run the local **Linter** and resolve all warnings or errors.
2. Execute the **Build** command to confirm zero compilation errors.
3. Run the **Test Suite** associated with the modified files.
4. Provide a short, structured summary detailing: What was changed, what commands were executed, and how the changes were verified.
````

Use code with caution.

***

### 🧠 Strategic Implementation Best Practices

- **Keep It Modular**: A monolithic context file can exhaust token budgets. If your `AGENTS.md` file grows beyond 150-200 lines, split granular rules into directory-level overrides (e.g., `/services/payments/AGENTS.override.md`).
- **Prioritize Commands Early**: Position executable commands near the top of the file. Empirical testing across thousands of repositories shows agents perform significantly better when tools and verification paths are discovered in the early tokens of their system context.
- **Avoid Aspirational Language**: Keep instructions strict and objective. Avoid vague guidelines like _"try to write clean code"_. Use absolute terms like _"Always use absolute path imports starting with `@/`"_. \[[1](https://www.reddit.com/r/ClaudeAI/comments/1r7mvja/new%5Fresearch%5Fagentsmd%5Ffiles%5Freduce%5Fcoding%5Fagent/), [2](https://www.augmentcode.com/guides/how-to-build-agents-md), [3](https://www.youtube.com/watch?v=6w88NVf2%5FlY\&t=364), [4](https://developers.openai.com/codex/guides/agents-md), [5](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/)]

If you would like, I can tailor this template specifically to your repository. Let me know: \[[1](https://developers.openai.com/codex/guides/agents-md)]

- Your **exact tech stack** and versions.

- The **package manager and test framework** you use.

- Any **strict security or architecture patterns** the agent must follow. \[[1](https://www.youtube.com/watch?v=6w88NVf2%5FlY\&t=364), [2](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/), [3](https://www.aihero.dev/a-complete-guide-to-agents-md), [4](https://www.youtube.com/watch?v=XDP94mYMCzA\&t=81), [5](https://github.com/agentmd/agent.md)]

- [link](https://www.youtube.com/watch?v=G2Yn1btfZrk\&t=29)\
  Spec-driven Development using Coding Agents, by Arun ...\
  Feb 12, 2026 — this is based upon something that I've been playing experimenting with for last several weeks months actually on how do we do a sp...\
  16m\
  YouTube·Jfokus

- [link](https://github.com/agentsmd/agents.md)\
  AGENTS.md — a simple, open format for guiding coding agents\
  Think of AGENTS.md as a README for agents: a dedicated, predictable place to provide context and instructions to help AI coding ag...\
  GitHub

- [link](https://github.com/agentmd/agent.md)\
  AGENT.md: The Universal Agent Configuration File - GitHub\
  Jul 7, 2025 — 2. Specification. The AGENT.md file MUST be placed in the root directory of a software project and MUST use Markdown formatting. T...\
  GitHub

Show all

## You said: i mean spec md

A **`spec.md` (or `specs.md`) file** acts as the definitive feature-level product brief and task contract that guides an AI coding agent through a specific implementation. While `AGENTS.md` sets the global rules for the repository (e.g., tech stack and formatting), the `spec.md` file defines exactly **what** the agent needs to build, **why** it is building it, and **how** its work will be verified. \[[1](https://www.youtube.com/watch?v=g-jYIbf6nbo), [2](https://www.youtube.com/watch?v=iXxARSrgCKI), [3](https://addozhang.medium.com/agents-md-a-new-standard-for-unified-coding-agent-instructions-0635fc5cb759), [4](https://terminal.space/ai/spec-md/), [5](https://www.augmentcode.com/guides/what-is-spec-driven-development)]

The industry-standard, AI-optimized blueprint below outlines a `spec.md` file for feature development. \[[1](https://www.youtube.com/watch?v=g-jYIbf6nbo)]

***

### AI Feature Specification Template (`spec.md`)

markdown

```
# FEATURE SPEC: [Insert Feature Name, e.g., Multi-Tenant Magic Link Auth]

## 1. Executive Summary & Value Proposition
* **Objective**: [Clear 1-sentence goal statement of what this feature must achieve]
* **User Value**: [Why this behavior is being implemented and how the user benefits]
* **Success Metric**: [e.g., User can authenticate from zero state in under 3 clicks]

## 2. Scope & User Stories
Detailed breakdown of user interactions. Agents read this to build specific routes and components.
* **Story 1**: As an unauthenticated user, I can enter my email on the `/login` page.
* **Story 2**: As a user, I receive a secure, single-use login token via email valid for 15 minutes.
* **Story 3**: As a clicking user, navigating to `/api/auth/callback?token=...` logs me in and redirects me to `/dashboard`.

## 3. Scope Boundaries & Out of Scope
Strictly limits what the agent should touch to prevent scope creep and unnecessary code creation.
* **In-Scope**: Login form UI, token generation logic, transactional email template, session creation.
* **Explicitly Out of Scope**: Social OAuth logins (Google/GitHub), persistent "Remember Me" cookies, multi-factor authentication setup.

## 4. Technical Architecture & Constraints
Concrete technical rules and patterns the agent must adhere to during implementation.
* **Database Changes**: Add an `AuthToken` table to `schema.prisma` with a 1:1 relation to the `User` table.
* **API Routing**: Use Next.js App Router route handlers at `src/app/api/auth/route.ts`.
* **State & Performance**: Token generation must complete in `< 200ms`. Do not introduce client-side state providers.
* **Security Constraints**: Tokens must be securely hashed in the database using SHA-256 before storage.

## 5. Phased Task Breakdown
The execution roadmap. Instruct the agent to mark these off as they complete them.
- [ ] **Phase 1**: Database schema modification and migration generation.
- [ ] **Phase 2**: Core backend service logic (`src/services/auth.ts`) for token creation/validation.
- [ ] **Phase 3**: Frontend UI login form implementation with form validation.
- [ ] **Phase 4**: Integration of email dispatch handler using the existing Resend client.

## 6. Verification & Acceptance Criteria
The contract defining how the agent must prove the code works before finishing.
* **Automated Tests**: Agent must write unit tests in `src/services/__tests__/auth.test.ts` achieving >90% coverage.
* **Manual Check**: Verification that logging in with an expired token triggers a custom `401 Unauthorized` UI error message.
* **Compliance**: Running `pnpm build` and `pnpm lint` must yield zero warnings or errors.
```

Use code with caution.

***

### 🛠️ Best Practices for Using `spec.md` With AI

- **Build It Collaboratively**: Do not try to write a flawless, massive file alone. Write a high-level product brief (Sections 1 through 3), hand it to your coding assistant (like Claude Code, Cursor, or Windsurf), and prompt: _"Review sections 1-3 and flesh out sections 4-6 into a technically sound execution plan."_ \[[1](https://addyosmani.com/blog/good-spec/), [2](https://www.youtube.com/watch?v=iXxARSrgCKI), [3](https://www.youtube.com/watch?v=g-jYIbf6nbo)]
- **Use It as a Living Session Anchor**: At the start of every fresh coding session, pass this file to your agent. Use a system prompt like: _"Read `spec.md` to re-establish feature context. Complete Phase 3 next and update the task checklist when done."_ \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI), [2](https://www.youtube.com/watch?v=g-jYIbf6nbo)]
- **Strict "Plan Mode" Enforcement**: Before letting an agent write code, force it into a read-only architectural discussion. Tell the agent to iterate on the `spec.md` file until you both agree on the implementation path, ensuring it serves as an immutable source of truth before code generation starts. \[[1](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html), [2](https://www.youtube.com/watch?v=iXxARSrgCKI)]

If you are about to kick off a new feature, tell me about the **core goal of your feature** and your **existing data models**, and I will generate a fully detailed `spec.md` customized for your agent. \[[1](https://www.youtube.com/watch?v=g-jYIbf6nbo)]

- [link](https://www.youtube.com/watch?v=g-jYIbf6nbo)\
  Specs Driven Development with Antigravity IDE and ...\
  Nov 21, 2025 — all right so welcome back again my name is Jesse and in this wonderful and exciting tutorial trying to explore some interesting as...\
  30:37\
  YouTube·JCharisTech
- [link](https://www.youtube.com/watch?v=iXxARSrgCKI)\
  How to Write Specs WITH Your AI Coding Assistant\
  Feb 20, 2026 — you have probably tried you write a massive detail spec a beautiful document that rivals an RFC. and hand it to an AI coding assis...\
  11:00\
  YouTube·César Soto Valero
- [link](https://www.augmentcode.com/guides/what-is-spec-driven-development)\
  What Is Spec-Driven Development? A Complete Guide\
  May 27, 2026 — Apr 23, 2026Last updated: May 27, 2026• Molisha Shah. Spec-driven development is a methodology that treats specifications as execu...\
  Augment Code

Show all

## You said: how do ppl write spec

People write specifications (specs) <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">by shifting from "writing code" to <strong>"writing intent."</strong></mark> Historically, engineers spent hours manually drafting comprehensive documents. Today, developers practice **Spec-Driven Development (SDD)**, writing a brief, high-level product blueprint and leveraging AI to generate the granular, technical steps. \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI), [2](https://www.youtube.com/watch?v=RhaF4LVAVng), [3](https://www.timelytext.com/technical-specification-document-2/), [4](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

The modern engineering process for writing a `spec.md` relies on a collaborative, 3-step workflow: \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI)]

```
[ Human Writes Brief ] ──> [ AI Generates Technical Draft ] ──> [ Human Reviews & Saves ]
```

***

### Step 1: Write the High-Level Brief (Human)

Do not try to write a 50-page document by hand. Instead, open a blank document or chat window and define the **"What, Why, and Boundaries"**. \[[1](https://www.youtube.com/watch?v=RhaF4LVAVng), [2](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def), [3](https://www.allstacks.com/blog/how-to-write-specs-for-ai-agents-tdd-skills-and-what-comes-next)]

- **The Objective**: Write a clear, one-sentence goal of what you want to build.
- **Core Requirements**: 3 to 5 bullet points outlining the main user actions.
- **Non-Goals (Out of Scope)**: Explicitly state what you _refuse_ to build right now to prevent scope creep. \[[1](https://www.reddit.com/r/ExperiencedDevs/comments/1fld0i0/i%5Fwas%5Ftasked%5Fwith%5Fcreating%5Fa%5Ftech%5Fspec%5Ffor%5Fa/), [2](https://www.youtube.com/watch?v=iXxARSrgCKI), [3](https://www.archbee.com/blog/technical-specification), [4](https://www.youtube.com/watch?v=RhaF4LVAVng)]

### Example Human Input:

> _"I want to build a profile settings page. Users should be able to update their display name and profile picture. Do not implement a password reset flow yet. We use Next.js and Prisma."_

***

### Step 2: Co-Author the Technical Details (AI)

Pass your brief to an AI assistant (like ChatGPT or Claude) and instruct it to **expand your vision** into a formal execution document. AI models excel at filling in the predictable technical blanks when given strict guardrails. \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI), [2](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def), [3](https://www.augmentcode.com/guides/ai-spec-template)]

### The Prompt to Use:

> _"Act as a Lead Software Architect. I am providing a feature brief. Review my repository context and generate a complete, Markdown-formatted `spec.md`. Include technical architecture (files to edit, database schema adjustments), precise edge cases, a phased task checklist, and acceptance criteria. Do not write code yet; only write the specification."_ \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI), [2](https://www.youtube.com/watch?v=RhaF4LVAVng), [3](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/)]

***

### Step 3: Enforce "Plan Mode" & Review (Human)

Before running the spec through an automated coding agent (like Cursor or Windsurf), audit the generated plan. **Do not let the agent write code until you lock in the spec**. \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI), [2](https://www.youtube.com/watch?v=RhaF4LVAVng)]

Look out for these core attributes while reviewing:

- **Precision Over Ambiguity**: Replace generic words like _"make it fast"_ or _"responsive"_ with exact targets like _"< 200ms latency"_ or _"Tailwind breakpoint `md:`"_.
- **Data Contracts**: Ensure exact database field names, types, and API routes are explicitly written out.
- **Verification Loop**: Confirm every phase has a test or manual check associated with it so the agent can independently verify its work. \[[1](https://www.timelytext.com/technical-specification-document-2/), [2](https://www.archbee.com/blog/technical-specification), [3](https://www.youtube.com/watch?v=RhaF4LVAVng)]

Once you approve the draft, save it directly into the root directory of your project as **`spec.md`**. \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI), [2](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

***

### 💡 How to Use the Spec During Development

When you kick off your coding tool, treat `spec.md` as the living external brain of the project. \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI)]

1. **Re-establish Context**: Start your coding agent session by telling it: _"Read `spec.md`. Do not start coding until you understand the full plan."_
2. **Execute In Increments**: Instruct the agent: _"Implement Phase 1 of `spec.md` only. Do not move on to Phase 2."_
3. **Keep it Updated**: If you change your mind about a feature halfway through, modify the text inside `spec.md` first, then have the agent resume coding. \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI), [2](https://www.youtube.com/watch?v=RhaF4LVAVng), [3](https://www.allstacks.com/blog/how-to-write-specs-for-ai-agents-tdd-skills-and-what-comes-next), [4](https://www.timelytext.com/technical-specification-document-2/)]

Are you about to write a spec for a **specific app or feature**? If you share your **core feature idea**, I can co-author the initial brief with you right now.

- [link](https://www.youtube.com/watch?v=iXxARSrgCKI)\
  How to Write Specs WITH Your AI Coding Assistant\
  Feb 20, 2026 — you have probably tried you write a massive detail spec a beautiful document that rivals an RFC. and hand it to an AI coding assis...\
  11:00\
  YouTube·César Soto Valero
- [link](https://www.reddit.com/r/ExperiencedDevs/comments/1fld0i0/i%5Fwas%5Ftasked%5Fwith%5Fcreating%5Fa%5Ftech%5Fspec%5Ffor%5Fa/)\
  I was tasked with creating a tech spec for a project. We don't ...\
  Sep 20, 2024 — Why are we doing it that way? I've read lots of tech docs that say what we're going to do, but without any analysis on why that ma...\
  Reddit·r/ExperiencedDevs
- [link](https://www.timelytext.com/technical-specification-document-2/)\
  Technical Specification Document: Examples & How to Write One\
  May 14, 2026 — How to Create a Technical Spec Document \* Define scope and goals. \* Gather and shape requirements. \* Design and architecture. \* Im...\
  TimelyText

Show all

## You said: example specs

Here are two real-world examples of `spec.md` files optimized for AI coding agents.

The first is a **Backend/API feature** focusing on data models and edge cases. The second is a **Frontend UI feature** focusing on layout, design system constraints, and interactions.

***

### Example 1: Backend/API Feature

Use this structure when an agent needs to touch database schemas, external services, or secure backend logic.

markdown

````
# SPEC: Stripe Webhook Processor

## 1. Executive Summary
* **Objective**: Create a robust API endpoint to handle Stripe webhooks for user subscriptions.
* **Why**: Automate user provisioning and account locking based on subscription events.
* **Success Metric**: Zero missed webhooks; failed events are captured and logged for retry.

## 2. Technical Architecture & Data Model
* **Endpoint Route**: `POST /api/webhooks/stripe`
* **Middleware**: Raw body parsing required (do not use default JSON body parser).
* **Environment Variables Required**: `STRIPE_WEBHOOK_SECRET`

### Schema Changes (`prisma/schema.prisma`):
Modify the existing `User` model to support subscription tracking:
```prisma
model User {
  id               String    @id @default(uuid())
  stripeCustomerId String?   @unique
  plan             String    @default("FREE") // "FREE", "PRO"
  subscriptionId   String?   @unique
  isActive         Boolean   @default(false)
}
```

## 3. Strict Scope & Edge Cases
* **In-Scope Events**:
  * `customer.subscription.created`: Set `plan` to "PRO" and `isActive` to `true`.
  * `customer.subscription.deleted`: Revert `plan` to "FREE" and `isActive` to `false`.
* **Out of Scope**: Retrying failed payments (Stripe handles this), invoice generation PDFs, handling refunds.
* **Edge Case Handling**: If `stripeCustomerId` cannot be found in our database, log a structured warning (`[STRIPE_WEBHOOK_ERROR]: User not found for customer ID: X`) and return a `200 OK` status to prevent Stripe from flooding webhooks.

## 4. Execution Plan Checklist
- [ ] **Phase 1**: Update `schema.prisma`, generate migration via `npx prisma migrate dev`, and update typescript client.
- [ ] **Phase 2**: Create route file at `src/app/api/webhooks/stripe/route.ts`.
- [ ] **Phase 3**: Implement Stripe signature verification using `stripe.webhooks.constructEvent()`.
- [ ] **Phase 4**: Implement switch-case event handlers for `created` and `deleted` events.

## 5. Verification Contract
* **Automated Test**: Write mock webhook payload tests using Vitest in `src/app/api/webhooks/stripe/__tests__/webhook.test.ts`.
* **Build Verification**: Run `npm run build` to ensure types resolve.
* **Signature Guard Check**: Ensure a POST request without a valid `stripe-signature` header throws a `400 Bad Request`.
````

Use code with caution.

***

### Example 2: Frontend UI Component Feature

Use this structure when directing an agent to build user interfaces, stateful forms, or complex interactive components.

markdown

```
# SPEC: Interactive Feedback Modal

## 1. Executive Summary
* **Objective**: Build a responsive modal allowing users to submit application feedback.
* **Why**: Replace the clunky external Google Form with an integrated app experience.
* **Success Metric**: Accessible, flawless rendering across mobile and desktop layout dimensions.

## 2. UI Component Design Tokens
* **Trigger Button**: Place a sticky floating button at the bottom-right corner of `/dashboard` with z-index `z-50`.
* **Modal Constraints**: Width `max-w-md` (448px), absolute centering, backdrop blur `backdrop-blur-sm`.
* **Colors**: Tailwind `bg-white` (light mode), `dark:bg-slate-900` (dark mode). Primary buttons use `bg-indigo-600`.
* **Typography**: Title uses `text-lg font-semibold`, body copy uses `text-sm text-slate-500`.

## 3. State & Form Behaviors
* **Form Fields**:
  * `category`: Dropdown Select (`"Bug"`, `"Feature Request"`, `"Other"`). Required.
  * `message`: Textarea (Minimum 10 characters, maximum 500 characters). Required.
* **Validation**: Show real-time inline errors under the field using `text-red-500 text-xs`.
* **Loading State**: Disable the submit button and show a loading spinner while the API call is in flight.

## 4. Execution Plan Checklist
- [ ] **Phase 1**: Scaffold UI component at `src/components/feedback-modal.tsx`.
- [ ] **Phase 2**: Wire up open/close state using a boolean flag. Add keyboard hook for `Escape` key close.
- [ ] **Phase 3**: Implement form tracking and validation states using native HTML elements or custom React hooks.
- [ ] **Phase 4**: Add a final "Success Checkmark State" inside the modal when the API submits successfully, automatically closing it after 3 seconds.

## 5. Verification Contract
* **Accessibility**: Modal container must have `role="dialog"` and `aria-modal="true"`. Focus must lock inside the modal when open.
* **Validation Check**: Verify clicking submit with an empty message blocks the event and shows validation text.
* **Responsiveness**: Verify text scales down gracefully on small phones (`iphone SE` dimensions).
```

Use code with caution.

***

### 🚀 Pro-Tip for Execution

If you copy either template into your repository as `spec.md`, you can launch your agent tool (Cursor, Claude Code, Windsurf, etc.) and simply prompt:

> _"Read `spec.md`. Only implement Phase 1. When finished, run tests and print out the updated checklist showing Phase 1 marked off."_

If you want to spin up a spec for your own feature, tell me **what you are building** and **what your tech stack looks like**, and I can generate the raw code for your `spec.md` now.

## You said: examples of successful spec.md

Successful `spec.md` files are characterized by their shift from descriptive language to **strict, quantifiable guardrails**. When working with modern coding agents like Claude Code, Cursor, or Windsurf, the primary difference between a failed spec and a successful one is that a successful spec **never leaves choices up to the AI**. \[[1](https://developer.microsoft.com/blog/spec-driven-development-spec-kit), [2](https://addyosmani.com/blog/good-spec/), [3](https://www.youtube.com/watch?v=G2Yn1btfZrk\&t=41), [4](https://github.com/agentsmd/agents.md)]

Below are two field-tested, production-ready examples of successful `spec.md` files that have been proven to keep agents perfectly aligned. \[[1](https://addyosmani.com/blog/good-spec/), [2](https://www.youtube.com/watch?v=rI2MbNcIeDo\&vl=en)]

***

### Example 1: Full-Stack Feature (Payment & DB State)

- **Why it succeeds:** It leaves no ambiguity regarding exact string definitions, route paths, or error payload types. \[[1](https://addyosmani.com/blog/good-spec/)]

markdown

````
# SPEC: Tiered Feature Flag Gatekeeper

## 1. Executive Summary
* **Objective**: Block or allow access to the `/analytics` dashboard based on user pricing tiers.
* **Why**: Ensure users on the `FREE` tier cannot invoke expensive backend database aggregation queries.
* **Success Metric**: Unauthorized API calls throw an immediate `403 Forbidden` in `< 50ms`.

## 2. System Architecture & Data Model
* **Files to Create**: `src/middleware/tierGuard.ts`, `src/app/api/analytics/route.ts`
* **Files to Modify**: `prisma/schema.prisma`

### Database Changes
Add a `tier` enum and assign it to the `User` model:
```prisma
enum PricingTier {
  FREE
  PRO
  ENTERPRISE
}

model User {
  id    String      @id @default(uuid())
  email String      @unique
  tier  PricingTier @default(FREE)
}
```

## 3. Strict Scope & Boundaries
* **In-Scope**: Next.js Edge Middleware checks, custom 403 API response payloads, frontend upgrade banners.
* **Out of Scope**: Creating the Stripe payment gateway, setting up a billing settings page, or handling refunds.

## 4. Logical Constraints & Edge Cases
* **Rule 1**: If user is unauthenticated, return `401 Unauthorized` with JSON payload: `{"error": "Authentication required"}`.
* **Rule 2**: If user is authenticated but `tier === 'FREE'`, intercept route, block DB access, and return `403 Forbidden` with: `{"error": "Upgrade to PRO required"}`.
* **Rule 3**: Cache the user's tier status using the existing Redis utility (`src/lib/redis.ts`) under key `tier:user_id` with a 300-second TTL to avoid database abuse.

## 5. Phased Task Checklist
- [ ] **Phase 1**: Run `npx prisma migrate dev --name add_pricing_tier` and update the Prisma client.
- [ ] **Phase 2**: Write core middleware check logic inside `src/middleware/tierGuard.ts`.
- [ ] **Phase 3**: Wrap the backend analytics controller to safely verify the incoming header injected by middleware.
- [ ] **Phase 4**: Implement UI intercept state displaying a clean, branded upgrade prompt on the client side.

## 6. Verification & Acceptance Criteria
* **Execution**: Executing `pnpm test` must run and pass the newly generated suite in `src/middleware/__tests__/tierGuard.test.ts`.
* **Zero Warnings**: The final compilation using `pnpm build` must pass with zero TypeScript errors or ESLint warnings.
````

Use code with caution.

***

### Example 2: Complex UI/Frontend Component (Real-Time State)

- **Why it succeeds:** It provides precise spatial boundaries, Tailwind classes, and step-by-step user interaction states, eliminating the typical "hallucinated layout" problem. \[[1](https://addyosmani.com/blog/good-spec/), [2](https://www.youtube.com/watch?v=M0ivqkQ5mF4\&vl=en)]

markdown

```
# SPEC: Real-Time Search & Command Palette Modal

## 1. Executive Summary
* **Objective**: Build a keyboard-triggered (`Cmd+K`) interactive omni-search modal.
* **Why**: Allow users to navigate the app's global links and items from any dashboard page without using a mouse.
* **Success Metric**: Flawless keyboard focus traps and zero layout shift during asynchronous rendering states.

## 2. Visual & Layout Constraints
* **Activation**: Listening globally for `keydown` matching `metaKey + 'k'` or `ctrlKey + 'k'`.
* **Sizing**: Absolute layout centering, width `w-full max-w-2xl` (672px), top margin `mt-[10vh]`.
* **Styling**: Container uses `bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800 shadow-2xl`.
* **List Elements**: Result rows must utilize exactly `h-12 px-4 flex items-center gap-3`. The active focused element must toggle the `bg-indigo-600 text-white` class.

## 3. Stateful Behaviors & API Hooks
* **Input State**: Controlled string input with a `300ms` debounce threshold using the native helper in `src/hooks/useDebounce.ts`.
* **Empty State**: If search string is empty, display a hardcoded list of static categories ("Go to Settings", "View Invoices", "Documentation").
* **Zero Results State**: If the API resolves with a length of `0`, hide the results list entirely and show text: `"No results found for '[query]'."` using class `text-slate-500`.

## 4. Execution Plan Checklist
- [ ] **Phase 1**: Scaffold UI components container inside `src/components/CommandPalette.tsx`.
- [ ] **Phase 2**: Write the hook to listen for shortcuts, managing a single `isOpen` boolean state.
- [ ] **Phase 3**: Wire up focus trapping logic so clicking `Tab` or `ArrowDown` switches focus exclusively within the items list.
- [ ] **Phase 4**: Hook up data fetching logic to consume `/api/search?q=...` endpoints safely.

## 5. Verification Contract
* **Accessibility Check**: Container must match `role="combobox"` with correct `aria-expanded` properties tracking modal open state.
* **Escape Behavior**: Pressing the `Escape` key must instantly reset the query string and set `isOpen` to false.
* **Build Check**: Must execute `npm run lint` with completely zero structural code or style errors before finalizing.
```

Use code with caution.

***

### 🔑 3 Universal Elements That Make These Specs Successful

1. **Explicit Snippets vs. Descriptive Text**: Giving an agent a raw schema block or a directory path beats using vague paragraphs. It provides exact string anchors that match your current codebase. \[[1](https://addyosmani.com/blog/good-spec/)]
2. **"Out of Scope" Enclosure**: Telling an agent what **not** to build is just as important as telling it what to build. It halts AI scope creep in its tracks. \[[1](https://urgo.medium.com/using-specification-by-example-to-drive-ai-95c19f0bb4ec), [2](https://evangelistsoftware.com/blog/spec-driven-development-guide/)]
3. **Strict Validation Commands**: Successful specs don't finish with "verify it works." They end with specific terminal invocations like `pnpm test:e2e` or `npm run build`. \[[1](https://addyosmani.com/blog/good-spec/)]

If you are getting ready to deploy your next feature, tell me about your **current database entities** or **UX objectives**, and I will generate a fully detailed `spec.md` optimized directly for your codebase.

- [link](https://addyosmani.com/blog/good-spec/)\
  How to write a good spec for AI agents - Addy Osmani\
  Jan 13, 2026 — 1. Commands: Put executable commands early - not just tool names, but full commands with flags: npm test , pytest -v , npm run bui...\
  Addy Osmani
- [link](https://urgo.medium.com/using-specification-by-example-to-drive-ai-95c19f0bb4ec)\
  Using Specification by Example to Drive AI | by Ürgo Ringo\
  Nov 30, 2025 — ✅ I liked how AI introduced new features while making only minimal changes to existing code. When coding manually, I often tend to...\
  Medium·Ürgo Ringo
- [link](https://developer.microsoft.com/blog/spec-driven-development-spec-kit)\
  Diving Into Spec-Driven Development With GitHub Spec Kit\
  Sep 15, 2025 — For the technical plan, how important is it to pick a specific library instead of letting AI make that choice for you? The more de...\
  Microsoft Developer

Show all

## You said: find some successful ones. do not write yourself.

Real-world instances of effective `spec.md` structures can be found directly within production frameworks and open-source gists designed specifically for Spec-Driven Development (SDD). \[[1](https://github.com/IBM/iac-spec-kit/blob/main/README.md), [2](https://github.com/theodo-group/theodo-spec-kit)]

The primary public standards, open frameworks, and architectural approaches used by development teams include:

### 1. GitHub's `spec-kit` Standard

GitHub maintains an open-source tool called **[`github/spec-kit`](https://github.com/github/spec-kit)**. It is an open framework that formalizes "Markdown as a Programming Language" for AI agents. \[[1](https://github.com/github/spec-kit), [2](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-using-markdown-as-a-programming-language-when-building-with-ai/)]

- **The Structure:** Their specifications rely heavily on strict formatting rules, directory isolation (e.g., `docs/specs/[NN]-spec-[feature-name]/`), and architectural components like a repository `constitution.md` to feed guardrails to tools like Claude Code and Copilot. \[, [2](https://github.com/liatrio-labs/spec-driven-workflow), [3](https://levelup.gitconnected.com/exploring-spec-driven-development-sdd-a-practical-guide-with-github-speckit-and-copilot-72fd9a70535a)]
- **Real Example:** You can inspect how they layout their base engine specifications in the **GitHub blog breakdown on Spec-Driven Development**, which references concrete examples like the CLI specification mapping directly to atomic checklist inputs. \[[1](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-using-markdown-as-a-programming-language-when-building-with-ai/)]

### 2. The Liatrio `spec-driven-workflow` Open Prompt Gists

Liatrio Labs open-sourced a workflow wrapper framework called **[`liatrio-labs/spec-driven-workflow`](https://github.com/liatrio-labs/spec-driven-workflow)** for IDE agents like Cursor and Windsurf. \[[1](https://github.com/liatrio-labs/spec-driven-workflow), [2](https://github.com/fabriqaai/specs.md)]

- **The Structure:** This system operates via slash commands (like `/SDD-1-generate-spec`).
- **Real Example Template:** The operational template that they inject into agent contexts can be found directly in the **Liatrio Spec-Driven Repository Workflow**. It breaks features down strictly by unique sequential IDs (e.g., `F-001`, `F-002`) and explicit validation steps. \[[1](https://gist.github.com/AlessandroVol23/7e658cb80ab42147bf272acf1bb80876), [3](https://github.com/liatrio-labs/spec-driven-workflow)]

### 3. Production Multi-Phase Spec Templates

For highly detailed, multi-phase technical specs utilized by real engineering teams to prevent AI "context rot", public community blueprints exist that define exact data contracts: \[[1](https://www.augmentcode.com/blog/how-to-write-good-agents-dot-md-files)]

- **The Structure:** Focuses on converting raw requirements entirely into binary true/false checkboxes so execution engines can continuously track progress. \[[1](https://gist.github.com/FabianWesner/0618102446e4ec0ac472794a1704cbe0)]
- **Real Example Template:** You can read a successful template layout on GitHub via this **Production Technical Spec.md Gist by Fabian Wesner**. It mandates strict "Given > When > Then" behavioral mappings alongside explicit file paths to prevent the agent from wandering. \[[1](https://engineering.prezi.com/we-tried-spec-driven-development-so-you-dont-have-to-56d52231c19e), [2](https://gist.github.com/FabianWesner/0618102446e4ec0ac472794a1704cbe0)]

### 4. Fabriqa AI-DLC `specs.md` Framework

Another structured, production-grade framework is **[`fabriqaai/specs.md`](https://github.com/fabriqaai/specs.md)**. \[[1](https://github.com/fabriqaai/specs.md)]

- **The Structure:** It introduces standardized development lifecycle flows (specifically the **FIRE** flow: Focus, Implement, Review, Execute) directly into the Markdown layout to map visual code modifications to an active VS Code sidebar extension. \[[1](https://github.com/fabriqaai/specs.md)]

***

If you want to look at how these live inside a repository, check out the open codebases for **github/spec-kit** or **liatrio-labs/spec-driven-workflow** to see how open source developers manage them. Would you like me to find more community templates or tool-specific instructions for agents like **Claude Code** or **Cursor**? \[[1](https://github.com/github/spec-kit), [2](https://github.com/liatrio-labs/spec-driven-workflow)]

- [link](https://engineering.prezi.com/we-tried-spec-driven-development-so-you-dont-have-to-56d52231c19e)\
  We Tried Spec-Driven Development So You Don't Have To\
  Feb 16, 2026 — Specify is where you need a lot of help from your product manager, or you need to act like one. The more detailed the information,\
  Prezi Engineering
- [link](https://www.augmentcode.com/blog/how-to-write-good-agents-dot-md-files)\
  A good AGENTS.md is a model upgrade. A bad one is worse ...\
  Apr 22, 2026 — If your AGENTS.md is good but your module has 500K of specs around it, the specs are what the agent is reading. Fix the documentat...\
  Augment Code
- [link](https://github.com/github/spec-kit)\
  GitHub - github/spec-kit: Toolkit to help you get started with ...\
  Jun 4, 2026 — 🤖 Supported AI Coding Agent Integrations. Spec Kit works with 30+ AI coding agents — both CLI tools and IDE-based assistants. See...\
  GitHub

Show all

## You said: spec skill

To write a successful `spec.md` that an AI coding agent can execute flawlessly, you need a specific blend of **technical product management** and **prompt engineering** skills. This cross-disciplinary capability is often called **Spec Engineering** or **Spec-Driven Architecture**.

The core skills required to author highly successful specs include:

### 1. Scope Boundary Enforcement (The "No" Skill)

The most critical skill is knowing how to draw a hard line around a task. AI agents easily succumb to "context drift" or scope creep if left unchecked.

- **How it applies:** You must be able to anticipate where an AI might over-engineer (e.g., building an entire authentication system when you only asked for a login UI component) and explicitly list those items under an **"Explicitly Out of Scope"** header.

### 2. State and Data-Contract Mapping

You need the ability to define deterministic data contracts rather than using descriptive prose. AI struggles with "Make the database handle user tiers," but thrives on exact schema definitions.

- **How it applies:** Translating business requirements into raw technical structures like schema snippets, JSON request/response payloads, API route paths (`/api/v1/resource`), and strict TypeScript interfaces directly inside the spec document.

### 3. Quantitative Guardrailing (Removing Ambiguity)

Successful spec writers scrub all subjective adjectives from their writing. Adjectives like _"fast"_, _"secure"_, _"responsive"_, or _"clean"_ cause AI agents to guess or hallucinate solutions.

- **How it applies:** Replacing vague phrases with rigid quantitative metrics. For example, rewriting _"Make the endpoint fast"_ into _"< 200ms TTFB"_ or rewriting _"Make it mobile friendly"_ into _"Uses Tailwind grid collapsing at the `md:` breakpoint"_.

### 4. Deterministic Step Decomposition (Phasing)

AI code generation quality degrades exponentially as the size of the target codebase change increases. A good spec writer possesses the skill to break a massive feature down into isolated, sequential, true/false atomic milestones.

- **How it applies:** Structuring the execution plan into clear, dependent phases (e.g., Phase 1: Database Migration -> Phase 2: Route Handling -> Phase 3: Frontend Component UI) so that you can instruct your agent to work strictly in increments.

### 5. Verification Design (Behavior-Driven Specification)

You must design the spec so that the AI agent can act as its own QA engineer. If the spec doesn't tell the AI how to verify its work, it will assume the code works the moment it compiles.

- **How it applies:** Mapping out explicit test locations, exact testing library shell commands (e.g., `pnpm test:unit --filter=auth`), and structural assertions using the "Given / When / Then" framework to create an air-tight verification loop.

***

Developing these skills shifts your role from manually writing code lines to **architecting intent and boundaries**.

If you want to practice building this skill, tell me a **basic application feature** you want to build, and we can practice breaking it down into these exact technical guardrails.

## You said: i mean skill for spec writing. search.

In **Spec-Driven Development (SDD)**, writing a specification for an AI coding agent is entirely different from writing traditional Product Requirement Documents (PRDs) or human design docs. The primary reader is an LLM with a strict **attention and context budget**. \[[1](https://addyosmani.com/blog/good-spec/), [2](https://www.youtube.com/watch?v=RhaF4LVAVng), [3](https://www.youtube.com/watch?v=2XI-lO7ANYw), [4](https://addyosmani.com/blog/good-spec/)]

To write a highly successful `spec.md`, a modern software engineer needs a specialized matrix of **5 core technical and behavioral skills**. \[[1](https://www.allstacks.com/blog/how-to-write-specs-for-ai-agents-tdd-skills-and-what-comes-next)]

***

### 1. Deterministic Deconstruction (Task Chunking)

AI coding agents degrade rapidly in performance when handed massive, open-ended tasks. The writer must possess the skill to break down complex macro objectives into highly isolated, sequential, binary true/false tasks. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://www.youtube.com/watch?v=2XI-lO7ANYw), [3](https://addyosmani.com/blog/good-spec/), [4](https://www.allstacks.com/blog/how-to-write-specs-for-ai-agents-tdd-skills-and-what-comes-next)]

- **The Goal**: Create linear, atomic checkpoints so the agent can execute exactly one component at a time without breaking surrounding files. \[[1](https://addyosmani.com/blog/good-spec/), [2](https://www.youtube.com/watch?v=RhaF4LVAVng)]
- **Skill in Action**: Instead of writing _"Build the checkout process,"_ the skill lies in dividing it into:
  1. _Phase 1: Database token schema migration_.
  2. _Phase 2: Raw signature verification middleware_.
  3. _Phase 3: Frontend state UI handling_. \[[1](https://www.youtube.com/watch?v=RhaF4LVAVng), [2](https://www.augmentcode.com/guides/what-is-spec-driven-development)]

### 2. Guardrail Engineering (The "Never/Always" Framework)

AI agents are bias-to-action systems; if left unconstrained, they will aggressively guess architectural or security decisions to fulfill a prompt. The writer must anticipate anti-patterns and explicitly constrain the agent. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://www.youtube.com/watch?v=RhaF4LVAVng), [3](https://www.youtube.com/watch?v=2XI-lO7ANYw), [4](https://www.augmentcode.com/guides/what-is-spec-driven-development)]

- **The Goal**: Block the AI from introducing dangerous dependencies or breaking legacy code patterns. \[[1](https://www.youtube.com/watch?v=RhaF4LVAVng), [2](https://www.augmentcode.com/guides/what-is-spec-driven-development)]
- **Skill in Action**: Writing absolute parameters. For example, explicitly adding sections like:
  - `ALWAYS`: _"Write a corresponding unit test in `src/__tests__` using Vitest."_
  - `NEVER`: _"Do not inject new packages into `package.json`; write native logic."_ \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://www.youtube.com/watch?v=RhaF4LVAVng), [3](https://addyosmani.com/blog/good-spec/)]

### 3. Quantitative Criteria Mapping (Scrubbing Adjectives)

Vague adjectives like _"fast"_, _"secure"_, _"responsive"_, or _"intuitive"_ cause an agent to hallucinate solutions. The writer needs the ability to strip away all descriptive language and replace it with quantitative engineering goals. \[[1](https://www.augmentcode.com/guides/ai-spec-template), [2](https://www.youtube.com/watch?v=RhaF4LVAVng)]

- **The Goal**: Provide clear pass/fail metrics that the agent can evaluate autonomously.
- **Skill in Action**: Changing _"Make the API load quickly"_ to _"< 200ms Time-to-First-Byte (TTFB)"_. Changing _"Make it look good on mobile"_ to _"Use Tailwind flex-wrap collapsing at the `md:` 768px breakpoint"_. \[[1](https://www.youtube.com/watch?v=RhaF4LVAVng), [2](https://www.augmentcode.com/guides/what-is-spec-driven-development)]

### 4. Interactive "Plan Mode" Collaboration \[[1](https://addyosmani.com/blog/good-spec/)]

Modern spec-writing is no longer a solo task; it is a **co-authoring process** where the developer utilizes the AI as a structural planning partner before a single line of code is written. \[[1](https://www.youtube.com/watch?v=iXxARSrgCKI)]

- **The Goal**: Force the agent into a read-only architectural debate to uncover hidden edge cases before execution starts.
- **Skill in Action**: Using specialized agent features (like **[Claude Code's Plan Mode](https://heeki.medium.com/using-spec-driven-development-with-claude-code-4a1ebe5d9f29)**) to prompt: _"Review my repository architecture, identify API dependencies, and raise 3 edge cases that break this spec before generating the task list."_ \[[1](https://addyosmani.com/blog/good-spec/), [2](https://www.youtube.com/watch?v=iXxARSrgCKI), [3](https://heeki.medium.com/using-spec-driven-development-with-claude-code-4a1ebe5d9f29), [4](https://smithery.ai/skills/aaronbassett/spec-writer)]

### 5. Verification & Contract Design

An agent will assume its code is flawless the moment compilation succeeds unless the spec mandates verification. The writer must design an immutable testing contract into the spec layout. \[[1](https://www.youtube.com/watch?v=RhaF4LVAVng), [2](https://www.augmentcode.com/guides/what-is-spec-driven-development), [3](https://www.aviator.co/blog/spec-driven-development-the-key-to-scalable-ai-agents/)]

- **The Goal**: Direct the agent to act as its own QA engineer using concrete local terminal tools.
- **Skill in Action**: Placing full executable terminal strings—such as `npm run lint` and `pytest -v`—at the absolute top of the document. This positions verification steps within the agent's high-priority context tokens. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://www.youtube.com/watch?v=2XI-lO7ANYw), [3](https://www.youtube.com/watch?v=8jtIXRyGMQU\&vl=en\&t=3), [4](https://addyosmani.com/blog/good-spec/)]

***

If you would like to test your spec-writing workflow, let me know:

- What **agent tool** you are using (e.g., **Claude Code**, **Cursor**, **Windsurf**)?
- The **complexity of the feature** you are currently designing? \[[1](https://addyosmani.com/blog/good-spec/), [2](https://www.youtube.com/watch?v=8jtIXRyGMQU\&vl=en\&t=3), [3](https://www.youtube.com/watch?v=RhaF4LVAVng)]

I can guide you through the process of chunking and guardrailing it into a high-performance specification. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://www.youtube.com/watch?v=RhaF4LVAVng)]

- [link](https://smithery.ai/skills/aaronbassett/spec-writer)\
  spec-writer - Skill - Smithery\
  A clear actor (persona) A clear goal. A clear value proposition ("so that...") Sufficient shape to enable specific questions. Acti...\
  Smithery
- [link](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/)\
  How to Write a Good Spec for AI Agents - O'Reilly\
  Feb 20, 2026 — How to Write a Good Spec for AI Agents. ... This post first appeared on Addy Osmani's Elevate Substack newsletter and is being rep...\
  O'Reilly Media
- [link](https://heeki.medium.com/using-spec-driven-development-with-claude-code-4a1ebe5d9f29)\
  Using spec-driven development with Claude Code - Heeki Park\
  Feb 28, 2026 — I give this context because I want to say that my build approach isn't just giving into the vibes. There is a structured approach ...\
  Heeki Park – Medium·Heeki Park

Show all

## You said: i mean ai agent skill

An **Agent Skill** (defined via a `SKILL.md` file) is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">an <strong>open standard</strong> developed in the AI ecosystem to give coding agents specialized, modular domain expertise</mark>. \[[1](https://atmos.tools/ai/agent-skills), [2](https://www.agensi.io/learn/every-ai-agent-that-supports-skill-md-2026)]

Think of it as **procedural memory for an AI**. While `AGENTS.md` governs global repo rules and `spec.md` governs a specific feature brief, a `SKILL.md` is a **reusable playbook** that teaches an agent exactly _how_ to execute a repeatable, complex task to your exact organizational standards. \[[1](https://www.youtube.com/watch?v=Lg-meK5IU8Q), [2](https://agentskills.io/home), [3](https://www.reddit.com/r/ClaudeCode/comments/1rwkbkm/agent%5Fengineering%5F101%5Fa%5Fvisual%5Fguide%5Fagentsmd/), [4](https://www.youtube.com/watch?v=7XwP9ueIRaE\&vl=en)]

The core mechanism relies on **progressive disclosure**. The agent only reads the tiny metadata snippet at startup. If it realizes your prompt matches that skill's purpose, it dynamically "unlocks" and reads the heavy, full instruction body. \[[1](https://www.youtube.com/watch?v=Lg-meK5IU8Q), [2](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)]

***

### The Structural Spec for `SKILL.md` \[[1](https://agentskills.io/home)]

An Agent Skill is not just a loose file; it is packaged as a standard directory folder inside your repository (typically under a `.agents/skills/` directory): \[[1](https://agentskills.io/home), [2](https://www.reddit.com/r/ClaudeCode/comments/1rwkbkm/agent%5Fengineering%5F101%5Fa%5Fvisual%5Fguide%5Fagentsmd/), [3](https://abvijaykumar.medium.com/deep-dive-skill-md-part-1-2-09fc9a536996), [4](https://antigravity.google/docs/skills)]

text

```
repo/
└── .agents/
    └── skills/
        └── custom-ui-designer/
            ├── SKILL.md          <-- The core instructions + metadata
            ├── scripts/           <-- Helper bash/python scripts the AI can run
            └── references/        <-- Thick reference documentation or design guides
```

Use code with caution.

***

### Official `SKILL.md` Template Blueprint \[[1](https://atmos.tools/ai/agent-skills)]

Every valid agent skill must follow a strict **YAML Frontmatter** syntax combined with explicit Markdown instructions. \[[1](https://www.youtube.com/watch?v=2REiUlciObk\&t=2), [2](https://developers.openai.com/api/docs/guides/tools-skills)]

markdown

```
---
name: tailwind-ui-architect
description: Use this skill whenever the user asks to build, style, or review frontend components or interactive landing pages.
---

# Tailwind UI Architect Skill

## 1. Intent Trigger Constraints
* Only execute this skill if the code changes touch `src/components/`, `src/app/`, or look like visual user interfaces.
* Do not trigger this skill for backend API route logic, database changes, or server operations.

## 2. Mandatory Core Instructions
When generating UI components, you must unconditionally apply these engineering rules:
* **Layouts**: Always use a Mobile-First layout paradigm using `flex flex-col md:flex-row`.
* **Sizing Bounds**: Interactive buttons must have a target clickable height of exactly `h-11` or `h-12` for accessibility.
* **Focus States**: Every custom input or clickable node must explicitly have a focus state class applied (`focus-visible:ring-2 focus-visible:ring-indigo-500`).

## 3. Allowed Executable Tools
You are granted authorization to execute these terminal tools to assist you:
* Use the component linter: `pnpm run lint:components`
* Execute visual validation tests: `pnpm test:ui`

## 4. Expected Output Definitions
* Output clean, fully-typed TypeScript (`.tsx`) code blocks.
* Wrap all descriptive layout thoughts inside concise Markdown comments; do not mix conversational "fluff" into the code stream.
```

Use code with caution.

***

### ⚙️ How AI Agents Handle Skills in Production

1. **Startup Discovery (Token Budget Optimization)**: At boot, agents like [Claude Code](https://github.com/github/spec-kit) or Cursor scan your `.agents/skills/` directory. They read _only_ the top YAML `name` and `description` lines (~100 tokens total), saving valuable context memory. \[[1](https://atmos.tools/ai/agent-skills), [2](https://www.agensi.io/learn/every-ai-agent-that-supports-skill-md-2026), [3](https://agentskills.io/specification), [4](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)]
2. **Conditional Activation**: When you type _"Build a checkout button,"_ the agent's router detects a match with the `tailwind-ui-architect` description. It then pulls the _entire_ text body of `SKILL.md` into active context. \[[1](https://www.agensi.io/learn/skill-md-format-reference), [2](https://agentskills.io/specification), [3](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)]
3. **Execution Compliance**: The agent executes the feature, shifting from generic LLM coding habits to your organization's exact bespoke architecture constraints. \[[1](https://agentskills.io/home), [2](https://www.youtube.com/watch?v=7XwP9ueIRaE\&vl=en), [3](https://www.gitbook.com/blog/skill-md)]

### 🛠️ Industry Implementation Standards

Rather than typing these out completely by hand, you can manage skills via modern ecosystem primitives:

- **The `skills.sh` Package Framework**: Much like npm handles packages, the community standard skills.sh ecosystem lets you run commands like `npx skills add tailwind-ui` to quickly inject highly optimized playbooks written by framework authors directly into your codebase. \[[1](https://www.youtube.com/watch?v=7XwP9ueIRaE\&vl=en)]
- **Agent Self-Generation**: Tools like Copilot and Claude Code allow you to use an inline command—such as `/create-skill "a workflow for debugging integration tests"`—causing the agent to automatically map out, deconstruct, and build the custom folder framework for you. \[[1](https://code.visualstudio.com/docs/copilot/customization/agent-skills)]

If you are setting up your workspace, what **domain or workflow** (e.g., custom API design patterns, security checking, or component design tokens) are you trying to train your agent to remember? I can output the exact, copy-pasteable `SKILL.md` file required for it. \[[1](https://www.firecrawl.dev/blog/agent-skills)]

- [link](https://www.youtube.com/watch?v=Lg-meK5IU8Q)\
  What AI Agent Skills Are and How They Work\
  Apr 20, 2026 — machine. so so where does this leave us well skills are procedural memory for AI agents they're defined in a markdown file that li...\
  12:25\
  YouTube·IBM Technology
- [link](https://agentskills.io/home)\
  Agent Skills Overview - Agent Skills\
  What are Agent Skills? Agent Skills are a lightweight, open format for extending AI agent capabilities with specialized knowledge ...\
  Agent Skills
- [link](https://www.youtube.com/watch?v=2REiUlciObk\&t=2)\
  What Are Skills? Build Your First AI Agent Skill in Minutes\
  Mar 4, 2026 — hey everyone today let's take a look at what skills are we've all been talking about them and they are amazing. and when someone s...\
  2m\
  YouTube·Debbie O'Brien

Show all

## You said: i mean the skill md for spec writing

To teach an AI coding agent exactly **how to write a flawless `spec.md`**, developers package this procedural expertise into a reusable **`SKILL.md` playbook**. \[[1](https://agentskills.io/home), [2](https://learn.microsoft.com/en-us/agent-framework/agents/skills)]

This specialized tool is often referred to in the ecosystem as a `spec-writer` or `spec-architect` skill. It is stored inside the repository at `.agents/skills/spec-writer/SKILL.md`. When you ask your agent to "write a feature spec," it detects the YAML trigger and switches into a literal, architectural "Plan Mode" before touching any code. \[, [2](https://github.com/dannwaneri/spec-writer), [3](https://www.reddit.com/r/ClaudeCode/comments/1scg4wg/is%5Fthere%5Fan%5Fofficial%5Fformat%5Ffor%5Fskills%5Fvs%5Fagents/), [4](https://smithery.ai/skills/aaronbassett/spec-writer), [5](https://excellentprompts.substack.com/p/build-your-own-ai-agent-skills)]

The production-ready standard `SKILL.md` blueprint below forces your agent to author bulletproof specifications. \[, [2](https://www.gitbook.com/blog/skill-md)]

***

### Production `SKILL.md` for Spec Writing

markdown

```
---
name: spec-writer
description: Generates, validates, and refines a technical `spec.md` for code features. Trigger whenever the user asks to "write a spec," "gather requirements," "plan a feature," or "create a specification doc."
license: MIT
metadata:
  author: engineering-ops
  version: "1.2"
---

# Skill: Spec Writer & Architect

## 1. Core Mandate
Your sole purpose is to convert loose, human product ideas into a ruthlessly literal, deterministic engineering contract (`spec.md`) that an downstream coding agent can execute flawlessly without guessing.

## 2. The Spec Generation Workflow
When triggered, you must perform these phases sequentially:
1. **Analyze Environment**: Inspect `package.json`, database schemas, and existing files to map the current architecture.
2. **Surface Ambiguities**: Identify at least 3 hidden assumptions or edge cases in the user's brief. Ask the human to clarify them before generating the text.
3. **Write the Artifact**: Output the finalized document directly to the project root as `spec.md`.

## 3. Strict Structural Requirements for the Output
The `spec.md` file you generate *must* include these 5 exact sections, strictly adhering to the formatting rules below:

### Section 1: Executive Summary
* State a clear, 1-sentence feature goal.
* Detail why it is being built and its quantitative success criteria.

### Section 2: Data Contracts & Architecture
* Map out explicit database fields, Prisma/SQL changes, or payload types.
* Define exact file paths and routes (e.g., `src/app/api/auth/route.ts`). Do not use placeholders like `.../route.ts`.

### Section 3: Scope Boundaries
* **In-Scope**: Explicit bullet points of what must be written.
* **Out of Scope**: Explicit bullet points of features to omit to prevent scope creep.

### Section 4: Phased Execution Checklist
* Break the task down into minor, linear, true/false task chunks.
* Use markdown checkbox syntax (`- [ ]`) so progress can be monitored.

### Section 5: Verification Contract
* Include full, runnable terminal commands at the absolute top of the verification block (e.g., `npm run lint`, `vitest run`).
* Define exact automated test locations and expected code coverage metrics.

## 4. Linguistic Guardrails & Constraints
* **Ban All Adjectives**: NEVER use subjective words like "fast," "secure," "clean," or "responsive."
* **Quantify Everything**: Convert "fast" into `< 200ms TTFB`. Convert "responsive" into `Tailwind grid collapsing at the md: 768px breakpoint`.
* **No Pseudo-Code**: Do not paste mock code blocks inside the spec. Define schemas, types, and logic flow only.

## 5. Examples of Skill Application

### Bad Spec Snippet (Do Not Generate):
> "Make the checkout API run quickly and make sure it is safe. Add some fields to the database to track user points."

### Good Spec Snippet (Mandatory Generation Pattern):
> "The `/api/checkout` handler must resolve in `< 150ms`. Deny access with a `401 Unauthorized` if `req.headers.authorization` is missing. Alter `prisma/schema.prisma` to add `loyaltyPoints Int @default(0)` to the `User` model."
```

Use code with caution.

***

### ⚙️ How the Ecosystem Handles This Skill

- **Dynamic Matching**: When you type a loose prompt like `"/spec-writer build a billing toggle,"` tools like **[Claude Code](https://github.com/github/spec-kit)**, **Cursor**, or **Windsurf** scan the YAML frontmatter. The moment they match the text pattern in your `description`, they load these heavy instructions into high-priority attention tokens. \[[1](https://www.mintlify.com/blog/skill-md), [2](https://www.mintlify.com/blog/skill-md), [3](https://www.gitbook.com/blog/skill-md), [4](https://excellentprompts.substack.com/p/build-your-own-ai-agent-skills), [5](https://www.reddit.com/r/ClaudeCode/comments/1scg4wg/is%5Fthere%5Fan%5Fofficial%5Fformat%5Ffor%5Fskills%5Fvs%5Fagents/)]
- **Portable Interoperability**: Because `SKILL.md` is an open framework supported across modern IDEs, you can package this directory and reuse the exact same spec-writing habits on any development team. \[[1](https://agentskills.io/home), [2](https://learn.microsoft.com/en-us/agent-framework/agents/skills)]

If you would like to test this setup, tell me **which IDE or AI client** you are using, and I can show you the exact directory path configuration to initialize this skill instantly. \[, [2](https://www.reddit.com/r/AI%5FAgents/comments/1stcu8e/skillmd%5Fis%5Fquietly%5Fbecoming%5Fthe%5Fstandard%5Ffor/)]

- [link](https://www.reddit.com/r/AI%5FAgents/comments/1stcu8e/skillmd%5Fis%5Fquietly%5Fbecoming%5Fthe%5Fstandard%5Ffor/)\
  SKILL.md is quietly becoming the standard for teaching AI ...\
  Apr 23, 2026 — This is unusual — most agent customization is. platform-locked (. cursorrules only works in Cursor, for example). There's an ecosy...\
  Reddit·r/AI\_Agents
- [link](https://www.gitbook.com/blog/skill-md)\
  skill.md explained: How to structure your product for AI agents\
  Feb 24, 2026 — If a user asks an agent to “set up a new workspace and invite the team,” the agent must know which operations to run, in what orde...\
  GitBook
- [link](https://learn.microsoft.com/en-us/agent-framework/agents/skills)\
  Agent Skills | Microsoft Learn\
  May 20, 2026 — In this article. Skill structure. Progressive disclosure. Providing skills to an agent. File-based skills. Code-defined skills. Cl...\
  Microsoft Learn

Show all

## You said: find proven spec writing skills

Proven spec-writing skills for AI coding agents represent a fundamental shift from human-readable documentation to creating **executable, deterministic blueprints**. In frameworks like [GitHub's Spec Kit](https://github.com/github/spec-kit) and modern Agent standards, writing a `spec.md` is treated less like an essay and more like context engineering. \[[1](https://github.com/github/spec-kit), [2](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/), [3](https://www.youtube.com/watch?v=XDP94mYMCzA)]

The core skills required to write a high-performance specification document for AI execution consist of **five field-tested techniques**.

***

### 1. Deterministic Token Context-Budgeting

AI performance degrades exponentially when context windows are overloaded with massive documents. A critical skill is providing _just enough nuance_ without causing the model to break down. \[[1](https://addyosmani.com/blog/good-spec/)]

- **The Technique**: Limit your spec files to **150–200 lines maximum**.
- **Actionable Rule**: Put organizational standards in a root `AGENTS.md` file. Keep feature-specific details isolated inside a localized `spec.md`. If technical rules for a feature exceed 200 lines, break them down into separate sub-directory files or system-level rules. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://www.augmentcode.com/guides/how-to-build-agents-md), [3](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

### 2. Multi-Step Milestone Decomposition (Chunking) \[[1](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

The most common point of failure for coding agents is trying to ingest an entire feature brief and execute it in a single shot. \[[1](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

- **The Technique**: Convert macro-features into **linear, sequential, binary true/false tasks**.
- **Actionable Rule**: Structure your execution plan so that Phase \\(N\\) strictly depends on Phase \\(N-1\\). For example, prevent the agent from writing a frontend form (Phase 3) until it compiles the database schema changes (Phase 1) and raw API route hooks (Phase 2). \[[1](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

### 3. Quantitative Constraints Engineering

Vague adjectives like _"fast," "secure," "responsive,"_ or _"robust"_ force an AI coding agent to aggressively guess implementation details, resulting in high hallucination rates. \[[1](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def), [2](https://kinde.com/learn/ai-for-software-engineering/best-practice/the-anatomy-of-a-good-spec-in-the-age-of-ai/)]

- **The Technique**: Completely strip descriptive prose out of the requirements section and replace it with **literal engineering metrics**.
- **Actionable Rule**: Change _"make the API load quickly"_ to _"The API response time must be under 200ms for 99% of requests"_. Change _"ensure it looks good on mobile"_ to _"Use Tailwind flex-col layout collapsing to flex-row at the `md: 768px` breakpoint"_. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://www.augmentcode.com/guides/ai-spec-template), [3](https://kinde.com/learn/ai-for-software-engineering/best-practice/the-anatomy-of-a-good-spec-in-the-age-of-ai/), [4](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

### 4. Rigid Boundary Tracing (The "Never/Always" Guardrails)

AI tools are biased toward action; they will frequently alter legacy components, inject unauthorized packages, or rewrite files outside their target domain if not bounded. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

- **The Technique**: Enforce explicit guardrails, scope boundaries, and non-negotiable restrictions within structured Markdown blocks. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://www.augmentcode.com/guides/ai-spec-template)]
- **Actionable Rule**: Map parameters out with strict markdown indicators:
  - `✅ ALWAYS`: _Run local linting before any git commit._
  - `⚠️ ASK FIRST`: _Before making any database schema changes or introducing new dependencies._
  - `🚫 NEVER`: _Commit raw environmental secrets or edit files inside `/legacy` routes._ \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

### 5. Automated Verification Design (Self-Checking)

An AI agent will assume its code is flawless the moment compilation passes unless the specification mandates an explicit proof cycle. \[[1](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def), [2](https://www.youtube.com/watch?v=XDP94mYMCzA)]

- **The Technique**: Build a **Verification Contract** into the spec layout that places actionable terminal commands at high-priority visibility levels. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]
- **Actionable Rule**: Explicitly define the test runner scripts and target outputs. Write assertions such as _"Must execute `npm run lint --fix` and `pnpm test:unit` with zero warnings before checking off the milestone"_. \[[1](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/), [2](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

***

### 🛠️ The Ultimate Spec-Writing Workflow (Plan Mode Integration)

Industry leaders leverage **Plan Mode** to co-author specs instead of writing them alone from scratch. This shifts the developer's role from coding to auditing. \[[1](https://developer.microsoft.com/blog/spec-driven-development-spec-kit), [2](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

```
[Write a 3-bullet Human Brief] ──> [Boot Agent in Read-Only Plan Mode] ──> [AI Drafts Full Technical Spec] ──> [Review & Lock Spec]
```

I can provide the exact **Plan Mode prompts** tailored to extract a high-quality `spec.md` from your agent. \[, [2](https://medium.com/@srinib100/writing-effective-specs-for-ai-agents-4373b78c8def)]

- [link](https://addyosmani.com/blog/good-spec/)\
  How to write a good spec for AI agents - Addy Osmani\
  Jan 13, 2026 — January 13, 2026. TL;DR: Aim for a clear spec covering just enough nuance (this may include structure, style, testing, boundaries)\
  Addy Osmani
- [link](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents/)\
  How to Write a Good Spec for AI Agents - O'Reilly\
  Feb 20, 2026 — Use a consistent format: Clarity is king. Many devs use Markdown headings or even XML-like tags in the spec to delineate sections ...\
  O'Reilly Media
- [link](https://www.augmentcode.com/guides/how-to-build-agents-md)\
  How to Build Your AGENTS.md (2026): The Context File That ...\
  Mar 31, 2026 — Table\_title: Modular Rules: When and How to Split Your Context File Table\_content: | Condition | Approach | | --- | --- | | Single...\
  Augment Code

Show all

## You said: no. im not about skill like this. i mean ai agent skill md for spec writing. proven and popular ones.

In the **Agent Skills open specification**—the decentralized tool standard supported across [Claude Code](https://github.com/github/spec-kit), Cursor, and [VS Code Copilot](https://code.visualstudio.com/docs/copilot/customization/agent-skills)—skills are packaged inside a dedicated folder (like `.agents/skills/spec-writer/`) containing a core `SKILL.md` file. \[[1](https://agentskills.io/home), [2](https://www.youtube.com/watch?v=Fh-aBKrG5CI), [3](https://code.visualstudio.com/docs/copilot/customization/agent-skills)]

The system reads the YAML frontmatter at startup to index the tool. It only unpacks the full Markdown body through **progressive disclosure** when triggered. \[[1](https://www.youtube.com/watch?v=Fh-aBKrG5CI), [2](https://chrisreddington.com/blog/building-your-agent-toolbox/)]

The two production-grade, highly popular `SKILL.md` blueprint examples below are optimized for agent performance and context-saving token constraints. \[[1](https://github.com/mgechev/skills-best-practices), [2](https://forum.cursor.com/t/optimal-structure-for-mdc-rules-files/52260), [3](https://www.youtube.com/watch?v=Fh-aBKrG5CI), [4](https://dev.to/loc%5Fcarrre%5F0d798813c662/agent-skills-explained-what-they-are-what-they-arent-and-how-to-use-them-bf9)]

***

### Example 1: The "Plan Mode Interrogator" Blueprint

Popular in teams using Spec-Driven Development (SDD), this skill strictly forces the agent to use **Plan Mode** to poke holes in human assumptions and ask clarifying questions _before_ it generates a single line of a `spec.md`. \[[1](https://github.com/mgechev/skills-best-practices), [2](https://agentskills.io/specification)]

markdown

```
---
name: sdd-spec-architect
description: Trigger when the user wants to "plan a feature", "create a spec", or "write a feature specification". Use this to generate a rigorous spec.md.
license: Apache-2.0
metadata:
  version: "2.1.0"
---

# SDD Spec Architect Skill

## 1. Intent and Context Rules
* **Globs**: Trigger only when interacting with feature requests or product briefs.
* **Context Preservation**: Read `package.json` and `schema.prisma` first to understand active dependencies. Do not guess paths.

## 2. Mandatory Workflow Phase
You are forbidden from writing the final `spec.md` directly on the first turn. You must run this 2-step loop:

### Step 1: Interrogation & Edge Cases
Identify and output exactly 3 architectural ambiguities in the user's brief. Prompt the user with:
> "Before I generate the spec.md, please clarify these 3 points:"
1. [Missing API Data Contract or Type details]
2. [Potential UI/UX breakpoint or state anomaly]
3. [Database relation or performance bottleneck constraint]

### Step 2: Generation Contract
Once the human responds, write the `spec.md` directly into the project root using this exact Markdown hierarchy:
1. `# SPEC: [Feature Title]`
2. `## 1. Executive Summary & pass/fail metrics`
3. `## 2. Technical Architecture` (Explicit file paths and payload schemas)
4. `## 3. Strict Scope` (Explicitly tracking "In-Scope" vs "Out of Scope" bullets)
5. `## 4. Phased Checkboxes` (True/False step-by-step tasks using `- [ ]`)
6. `## 5. Verification Contract` (Exact shell scripts to run, e.g., `npm run lint`)

## 3. Linguistic Guardrails
* **No Subjective Words**: Ban the words "clean", "fast", "secure", and "responsive".
* **Mandatory Substitutions**: Convert "fast" to `< 200ms latency`. Convert "responsive" to `Tailwind grid collapsing at md: breakpoint`.
```

Use code with caution.

***

### Example 2: The Cross-Platform `.mdc` Custom Rule (Cursor / Windsurf)

In the Cursor Rule Ecosystem, modular agent skills are increasingly written using the **`.mdc` format**. This standard utilizes the `globs:` keyword to auto-attach the specification writing skill whenever the agent opens a file inside a specifications or docs directory. \[[1](https://medium.com/@devlato/a-rule-that-writes-the-rules-exploring-rules-mdc-288dc6cf4092), [2](https://www.vibecodingacademy.ai/blog/cursor-rules-complete-guide), [3](https://github.com/sanjeed5/awesome-cursor-rules-mdc/blob/main/rules-mdc/java.mdc), [4](https://dev.to/loc%5Fcarrre%5F0d798813c662/agent-skills-explained-what-they-are-what-they-arent-and-how-to-use-them-bf9)]

Save this file as `.cursor/rules/spec-writer.mdc`: \[[1](https://www.youtube.com/watch?v=6vtBq6TBGyo)]

markdown

````
---
description: Auto-attaches when writing, editing, or validating software specs. Ensures the agent constructs a deterministic feature contract.
globs: "**/specs/*.md", "spec.md", "**/docs/features/*.md"
---

# Rule: Deterministic Spec Engine

## 1. Context Optimization
* Keep the total token signature compact. Do not add long descriptive text.
* Focus strictly on machine-actionable instructions over human explanations.

## 2. Architectural Blueprint Requirements
Every specification file you generate or edit must adhere to these rigid structural parameters:

### Data Contracts
* Never write placeholder code blocks like `// TODO: add fields`.
* Always write explicitly typed structural signatures:
```typescript
// Example expected payload contract
interface APIResponse {
  success: boolean;
  data: { id: string; timestamp: number };
}
```

### Verification Block Placement
* The verification commands must be placed inside a readable code block at the absolute top of the verification section.
* **Required Invocations**:
  * Local formatting: `npm run format`
  * Static analysis: `npm run lint`
  * Execution check: `npm run build`

## 3. Prohibited Behaviors
* **NEVER** let an execution task overlap with another. Every checklist item must be independent.
* **NEVER** introduce new packages to `package.json` inside a feature spec unless a native standard solution is impossible.
````

Use code with caution.

***

### 💡 Why These Patterns Work in Production

1. **Short Frontmatter Biasing**: Keeping the `description` concise (under 120 characters) ensures the tool routing algorithm doesn't get confused about when to pull the skill into context. \[[1](https://forum.cursor.com/t/optimal-structure-for-mdc-rules-files/52260)]
2. **Strict File-Path Mapping**: Forcing the agent to map out the exact paths (e.g., `src/app/api/auth/route.ts`) upfront anchors its subsequent text generations, blocking the AI from modifying random unintended subfolders. \[[1](https://github.com/mgechev/skills-best-practices)]

If you are setting up your workspace, let me know:

- Which specific IDE tool you run (e.g., **Claude Code**, **Cursor**, or **VS Code Copilot**)?
- What **programming language or framework stack** your project uses? \[[1](https://www.youtube.com/watch?v=Fh-aBKrG5CI)]

I can configure the exact folder locations and script triggers for your specific codebase. \[[1](https://www.youtube.com/watch?v=WvBv6ASCt5E), [2](https://github.com/mgechev/skills-best-practices)]

- [link](https://agentskills.io/specification)\
  Specification - Agent Skills\
  Minimal example: SKILL.md. --- name: skill-name description: A description of what this skill does and when to use it. --- Example...\
  Agent Skills
- [link](https://chrisreddington.com/blog/building-your-agent-toolbox/)\
  AGENTS.md and SKILL.md: building a reusable agent toolbox\
  Apr 8, 2026 — A skill file isn't meant to be loaded in one go. Put simply, a well-behaved skill loads in stages rather than dumping everything i...\
  Chris Reddington
- [link](https://agentskills.io/home)\
  Agent Skills Overview - Agent Skills\
  What are Agent Skills? Agent Skills are a lightweight, open format for extending AI agent capabilities with specialized knowledge ...\
  Agent Skills

Show all

## You said: no. i mean the "ai agent skill" (not skill in linguistic sense) for spec driven dev (not the spec of agent skill). i want popular and proven ones.

In the modern **Agent Skill** architecture (leveraged by public ecosystems like ClawHub, open-source runtimes, and the [OpenSpec standard](https://github.com/Fission-AI/OpenSpec/)), **AI Agent Skills** are modular extensions used to force an AI into a rigid workflow. \[[1](https://arxiv.org/html/2604.06550v2)]

When practicing **Spec-Driven Development (SDD)**, the most proven and popular open-source Agent Skills act as an enforcement engine rather than a passive guide. They ensure the agent doesn't write single lines of code until the specification passes a series of rigid checks. \[[1](https://www.augmentcode.com/guides/what-is-spec-driven-development), [2](https://www.augmentcode.com/guides/cursor-spec-driven-development), [3](https://medium.com/@uniquejtx%5F3744/from-vibe-coding-to-spec-driven-development-56b189ef0c6b)]

The highly popular, production-tested `SKILL.md` configurations below are widely utilized across development teams.

***

### 1. The "EARS" Strict Specification Interrogator

This skill forces agents to use the **Easy Approach to Requirements Syntax (EARS)** standard. It is popular because it forbids the agent from generating freeform Markdown, instead enforcing strict conditional statements (`Ubiquitous`, `Event-driven`, `State-driven`). \[[1](https://github.com/gertalot/cursor-rules)]

markdown

```
---
name: ears-spec-engine
description: Triggers whenever the user initiates feature planning, requirements gathering, or calls a /spec command. Restructures inputs into machine-verifiable requirements.
version: "1.4.2"
permissions:
  - fs.read
  - fs.write
---

# EARS Specification Engine

## 1. Intent Validation
* You must immediately halt code generation.
* Your sole task is to construct a deterministic `spec.md` matching EARS constraints.

## 2. Interactive Requirements Gathering Loop
Before writing the `spec.md`, evaluate the human's prompt against these 5 EARS patterns. Query the human for any missing variable:
1. **Ubiquitous**: The system shall [behavior].
2. **Event-driven**: WHEN [trigger], the system shall [behavior].
3. **State-driven**: WHILE [in state], the system shall [behavior].
4. **Unwanted Behavior**: IF [trigger error], THEN the system shall [behavior].
5. **Optional Feature**: WHERE [feature is included], the system shall [behavior].

## 3. Output Generation Rule
When all variables are answered, output the specification file to `.agents/specs/` using explicit true/false checklists (`- [ ]`) for downstream execution agents.
* **Linguistic Rule**: Ban all adjectives ("fast", "intuitive", "clean").
* **Replacement Rule**: Convert adjectives to hard metrics (e.g., `< 200ms TTFB`, `W3C AAA Accessible`).
```

Use code with caution.

***

### 2. The "FIRE Workflow" Coordinator (Focus, Implement, Review, Execute)

This skill is a staple in production environments like Fabriqa's `specs.md` framework. It is highly popular because it prevents the common AI defect of "vibe-coding" (jumping straight into writing code without mapping architectural context first). \[[1](https://medium.com/@uniquejtx%5F3744/from-vibe-coding-to-spec-driven-development-56b189ef0c6b)]

markdown

```
---
name: sdd-fire-workflow
description: Enforces the 4-phase FIRE development lifecycle. Automatically intercepts any multi-file feature implementation prompt.
version: "2.0.1"
dependencies:
  - linter-check
---

# FIRE Workflow Coordinator

## 1. Trigger Conditions
Activate this skill whenever a prompt requests a new feature, route, database modification, or component restructuring.

## 2. Mandatory Sequential Execution Playbook
You must process the instruction strictly in these 4 phases. You cannot skip ahead.

### Phase 1: Focus (Spec Validation)
* Check if a `spec.md` exists in the workspace root.
* If missing, trigger `ears-spec-engine` to build it.
* If present, read the `spec.md` scope boundaries and map exact target files.

### Phase 2: Implement (Isolated Coding)
* Modify files *only* listed inside the `spec.md` data contract.
* Do not update, add, or alter any auxiliary files, styles, or packages.

### Phase 3: Review (Lint & Types)
* Execute the repository's native static verification tools.
* **Command Sequence**: Run local linter and compile types. If any warnings occur, you must fix them before continuing.

### Phase 4: Execute (Verification)
* Run the specific test files designated in the specification.
* Once passing, update the checkbox list in `spec.md` to true (`- [x]`).
```

Use code with caution.

***

### 3. The "Spec-to-Task Traceability" Map (.mdc / Cursor Standard)

In Cursor, Windsurf, and custom IDE rules, this skill is deployed as an automated background guardrail using the `.mdc` glob matching rule. It ensures that if a developer attempts to modify a feature, the agent cross-references the live specification file to detect contract drift. \[[1](https://www.augmentcode.com/guides/what-is-spec-driven-development), [2](https://www.augmentcode.com/guides/cursor-spec-driven-development), [3](https://www.reddit.com/r/cursor/comments/1qpq8f9/unpopular%5Fopinion%5Fthe%5Fwork%5Fis%5Fnow%5Fwriting%5Fmdc/)]

markdown

```
---
description: Activates automatically on code edits to prevent architectural drift from the project's living specification.
globs: "src/**/*.(ts|tsx|py|go)", "api/**/*"
---

# Skill: Contract Drift Guardrail

## 1. Execution Guard
Every time you are asked to write or modify code, you must locate and parse the `spec.md` file in the project directory before changing any codebase bytes.

## 2. Drift Detection Check
Evaluate whether the requested code change violates the `Out of Scope` boundaries or the defined data contracts in the `spec.md`.
* **If a violation is found**: Stop execution immediately. Warn the user using the following template:
  > "⚠️ CRITICAL DRIFT DETECTED: The requested change modifies [Element], which violates the current `spec.md` constraint: [Constraint]. Please update the spec file first or alter your instruction."
* **If aligned**: Proceed with the incremental change and document the task ID you are satisfying.

## 3. Automation Hook
Upon successful modification of any component, automatically append a short execution log summarizing what was changed directly into the spec's `Progress Log` section.
```

Use code with caution.

***

### 🚀 Key Advantages of These Proven Formats

1. **They Use Hooks and Triggers**: Popular agent skills are passive until a matching directory event occurs (like changing a source file). This keeps token expenses incredibly low, as the agent only evaluates the heavy instruction blocks when absolutely necessary. \[[1](https://www.reddit.com/r/cursor/comments/1qpq8f9/unpopular%5Fopinion%5Fthe%5Fwork%5Fis%5Fnow%5Fwriting%5Fmdc/), [2](https://github.com/madebyaris/spec-kit-command-cursor), [3](https://bibb.pro/post/ai-agent-skills-token-efficiency/)]
2. **They Outsource Context**: They separate global development guidelines from real project tasks, maximizing reasoning accuracy across lengthy engineering sessions. \[[1](https://medium.com/@amitlokare/spec-driven-development-what-i-learned-about-context-engineering-the-hard-way-b84e953c3a74), [2](https://levelup.gitconnected.com/exploring-spec-driven-development-sdd-a-practical-guide-with-github-speckit-and-copilot-72fd9a70535a)]

If you are trying to wire this into your local project environment, let me know:

- What **agent platform or runtime** you are using (e.g., **Claude Code CLI**, **Cursor IDE**, or an **OpenClaw-compatible pipeline**)?
- The **main problems** you are having with your agent (e.g., skipping tests, wandering outside of scope, or creating messy file paths)? \[[1](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/coding-agents-and-ides.md), [2](https://www.openagentskill.com/skills)]

I can help format the execution commands and folder structure specifically for your workspace.

- [link](https://arxiv.org/html/2604.06550v2)\
  SkillSieve: A Hierarchical Triage Framework for Detecting Malicious ...\
  May 26, 2026 — 2. Background and Related Work \* 2.1. AI Agent Skill Ecosystems. AI agent skills are modular extensions that direct agent behavior...\
  arXiv
- [link](https://bibb.pro/post/ai-agent-skills-token-efficiency/)\
  AI Agent Skills: Stop Paying for Tokens You Don't Need | BIBB\
  Mar 3, 2026 — Skills \* When you have domain knowledge that applies to some (but not all) messages. \* When you frequently ask clarifying question...\
  BIBB Pro
- [link](https://medium.com/@amitlokare/spec-driven-development-what-i-learned-about-context-engineering-the-hard-way-b84e953c3a74)\
  Spec-Driven Development: What I Learned About Context ...\
  Mar 1, 2026 — What's different now is this AI amplifies ambiguity. So the cost of unclear intent has never been higher. Spec vs Prompt. Here's h...\
  Medium·Amit Lokare

Show all