precious, [1/15/26 8:20 AM]
Finish reading youth comedy book 1 chapter 2

precious, [1/15/26 9:04 AM]
Physics pull hair lift body https://chatgpt.com/c/69683865-8198-8323-8726-f7bada301249#main

precious, [1/15/26 11:40 AM]
Cursor Claude code https://chatgpt.com/c/696857ee-6cc0-832c-baa8-db8ebd471513#main

precious, [1/15/26 11:40 AM]
Firefox can long press url to copy. Unlike chrome, I accidentally found.

precious, [1/15/26 11:53 AM]
Have lunch alone.

precious, [1/15/26 1:24 PM]
Understand Architecture https://chatgpt.com/c/69687656-ae1c-8333-acde-98154da46775

precious, [1/15/26 1:28 PM]
Architecture deliverables https://chatgpt.com/c/69687a56-ea7c-8326-9702-eaeb80576220

precious, [1/15/26 1:38 PM]
Absolutely, Fira. Let’s explore the deliverables of Technical Architecture Design in software engineering. I’ll break it down carefully and clearly, and then show it as a nested list that works like a mindmap.

---

### Technical Architecture Design Deliverables Mindmap

- 1. Architecture Overview

  - High-level description of the system
  - Objectives and principles
  - Scope of the architecture
  - Key constraints (e.g., performance, security, compliance)

- 2. System Context Diagram

  - Shows system boundaries
  - External systems and users
  - Data flows between system and external entities

- 3. Component/Module Architecture

  - Breakdown of system into components or modules
  - Responsibilities of each component
  - Interfaces between components
  - Interaction diagrams (e.g., sequence or collaboration)

- 4. Technology Stack and Standards

  - Programming languages and frameworks
  - Database choices
  - Middleware and integration platforms
  - Coding standards and design patterns

- 5. Data Architecture

  - Data models (logical and physical)
  - Database schemas
  - Data flow diagrams
  - Data storage, retention, and access policies

- 6. Integration Architecture

  - API design and contracts
  - Message formats and protocols
  - Event-driven or synchronous/asynchronous communication
  - External system integrations

- 7. Security Architecture

  - Authentication and authorization
  - Data encryption and storage security
  - Threat modeling and risk analysis
  - Compliance with regulations (e.g., GDPR, HIPAA)

- 8. Deployment Architecture

  - Environment setup (dev, test, staging, production)
  - Infrastructure diagram (on-premises or cloud)
  - CI/CD pipelines
  - High availability and failover strategy

- 9. Non-Functional Requirements Mapping

  - Performance and scalability considerations
  - Reliability and fault tolerance
  - Monitoring and logging strategy
  - Maintainability and extensibility guidelines

- 10. Architecture Decision Records (ADR)

  - Key architectural decisions and reasoning
  - Pros and cons of chosen approaches
  - Alternatives considered
  - Impact on system and future changes

---

If you want, Fira, I can also draw this mindmap visually so it’s easy to see the hierarchy at a glance, almost like a real diagram you’d stick on a wall in a team meeting.

Do you want me to do that next?

precious, [1/15/26 3:50 PM]
Mtfs die soon https://chatgpt.com/c/69688807-d2c8-832d-b51a-02bcd52ea59d#main

precious, [1/15/26 3:51 PM]
Inspiration: why might maimai players die soon. Investigate, find patterns: eat sugar, eat salt, eat mushrooms, mental.

precious, [1/15/26 4:42 PM]
Feasibility check curiosity wonder https://chatgpt.com/c/69670ba6-d538-8324-8445-4c51c70c5f19#main

precious, [1/15/26 5:50 PM]
Feasibility check structured output https://chatgpt.com/c/696834de-a098-8321-abed-8aee7945dd5e#main

precious, [1/15/26 5:50 PM]
Describe humility https://chatgpt.com/c/69685798-3068-832f-a026-1537c3979c0d#main

precious, [1/15/26 5:51 PM]
Compare cc and codex https://chatgpt.com/c/69685eb7-c888-8333-8358-b73a0c40649d#main

---

summarzing this, let me ask: what questions does it answer

```
[
Skip to content](https://cursor.com/blog/scaling-agents#main)

[

Cursor](https://cursor.com/)

-   [Features](https://cursor.com/features)
-   [Enterprise](https://cursor.com/enterprise)
-   [Pricing](https://cursor.com/pricing)
-   [Resources](https://cursor.com/changelog)↓

    -   [](https://cursor.com/changelog)
    -   [](https://cursor.com/blog)
    -   [](https://cursor.com/docs)
    -   [](https://cursor.com/community)
    -   [](https://cursor.com/learn)
    -   [](https://cursor.com/workshops)
    -   [](https://forum.cursor.com/)
    -   [](https://cursor.com/careers)


[Sign in](https://cursor.com/dashboard)[Download](https://cursor.com/download)

[Blog](https://cursor.com/blog) / [Research](https://cursor.com/blog/topic/research)

# Scaling long-running autonomous coding

Jan 14, 2026 by Wilson Lin

### Table of Contents

↑

-   [The limits of a single agent](https://cursor.com/blog/scaling-agents#the-limits-of-a-single-agent)
-   [Learning to coordinate](https://cursor.com/blog/scaling-agents#learning-to-coordinate)
-   [Planners and workers](https://cursor.com/blog/scaling-agents#planners-and-workers)
-   [Running for weeks](https://cursor.com/blog/scaling-agents#running-for-weeks)
-   [What we've learned](https://cursor.com/blog/scaling-agents#what-weve-learned)
-   [What's next](https://cursor.com/blog/scaling-agents#whats-next)

We've been experimenting with running coding agents autonomously for weeks.

Our goal is to understand how far we can push the frontier of agentic coding for projects that typically take human teams months to complete.

This post describes what we've learned from running hundreds of concurrent agents on a single project, coordinating their work, and watching them write over a million lines of code and trillions of tokens.

## [#](https://cursor.com/blog/scaling-agents#the-limits-of-a-single-agent)The limits of a single agent

Today's agents work well for focused tasks, but are slow for complex projects. The natural next step is to run multiple agents in parallel, but figuring out how to coordinate them is challenging.

Our first instinct was that planning ahead would be too rigid. The path through a large project is ambiguous, and the right division of work isn't obvious at the start. We began with dynamic coordination, where agents decide what to do based on what others are currently doing.

## [#](https://cursor.com/blog/scaling-agents#learning-to-coordinate)Learning to coordinate

Our initial approach gave agents equal status and let them self-coordinate through a shared file. Each agent would check what others were doing, claim a task, and update its status. To prevent two agents from grabbing the same task, we used a locking mechanism.

This failed in interesting ways:

1.  Agents would hold locks for too long, or forget to release them entirely. Even when locking worked correctly, it became a bottleneck. Twenty agents would slow down to the effective throughput of two or three, with most time spent waiting.

2.  The system was brittle: agents could fail while holding locks, try to acquire locks they already held, or update the coordination file without acquiring the lock at all.


We tried replacing locks with optimistic concurrency control. Agents could read state freely, but writes would fail if the state had changed since they last read it. This was simpler and more robust, but there were still deeper problems.

With no hierarchy, agents became risk-averse. They avoided difficult tasks and made small, safe changes instead. No agent took responsibility for hard problems or end-to-end implementation. This lead to work churning for long periods of time without progress.

## [#](https://cursor.com/blog/scaling-agents#planners-and-workers)Planners and workers

Our next approach was to separate roles. Instead of a flat structure where every agent does everything, we created a pipeline with distinct responsibilities.

-   **Planners** continuously explore the codebase and create tasks. They can spawn sub-planners for specific areas, making planning itself parallel and recursive.

-   **Workers** pick up tasks and focus entirely on completing them. They don't coordinate with other workers or worry about the big picture. They just grind on their assigned task until it's done, then push their changes.


At the end of each cycle, a judge agent determined whether to continue, then the next iteration would start fresh. This solved most of our coordination problems and let us scale to very large projects without any single agent getting tunnel vision.

## [#](https://cursor.com/blog/scaling-agents#running-for-weeks)Running for weeks

To test this system, we pointed it at an ambitious goal: building a web browser from scratch. The agents ran for close to a week, writing over 1 million lines of code across 1,000 files. You can explore the [source code on GitHub](https://github.com/wilsonzlin/fastrender).

Despite the codebase size, new agents can still understand it and make meaningful progress. Hundreds of workers run concurrently, pushing to the same branch with minimal conflicts.

0:03

While it might seem like a simple screenshot, building a browser from scratch is extremely difficult.

Another experiment was doing an in-place migration of Solid to React in the Cursor codebase. It took over 3 weeks with +266K/-193K edits. As we've started to test the changes, we do believe it's possible to merge this change.

![Pull request showing Solid to React migration](https://cursor.com/marketing-static/_next/image?url=https%3A%2F%2Fptht05hbb1ssoooe.public.blob.vercel-storage.com%2Fassets%2Fblog%2Flong-running-agents-pr.png&w=1920&q=70)

Another experiment was to improve an upcoming product. A long-running agent made video rendering 25x faster with an efficient Rust version. It also added support to zoom and pan smoothly with natural spring transitions and motion blurs, following the cursor. This code was merged and will be in production soon.

We have a few other interesting examples still running:

-   [Java LSP](https://github.com/wilson-anysphere/indonesia): 7.4K commits, 550K LoC
-   [Windows 7 emulator](https://github.com/wilsonzlin/aero): 14.6K commits, 1.2M LoC
-   [Excel](https://github.com/wilson-anysphere/formula): 12K commits, 1.6M LoC

## [#](https://cursor.com/blog/scaling-agents#what-weve-learned)What we've learned

We've deployed billions of tokens across these agents toward a single goal. The system isn't perfectly efficient, but it's far more effective than we expected.

Model choice matters for extremely long-running tasks. We found that GPT-5.2 models are much better at extended autonomous work: following instructions, keeping focus, avoiding drift, and implementing things precisely and completely.

Opus 4.5 tends to stop earlier and take shortcuts when convenient, yielding back control quickly. We also found that different models excel at different roles. GPT-5.2 is a better planner than GPT-5.1-codex, even though the latter is trained specifically for coding. We now use the model best suited for each role rather than one universal model.

Many of our improvements came from removing complexity rather than adding it. We initially built an integrator role for quality control and conflict resolution, but found it created more bottlenecks than it solved. Workers were already capable of handling conflicts themselves.

The best system is often simpler than you'd expect. We initially tried to model systems from distributed computing and organizational design. However, not all of them work for agents.

The right amount of structure is somewhere in the middle. Too little structure and agents conflict, duplicate work, and drift. Too much structure creates fragility.

A surprising amount of the system's behavior comes down to how we prompt the agents. Getting them to coordinate well, avoid pathological behaviors, and maintain focus over long periods required extensive experimentation. The harness and models matter, but the prompts matter more.

## [#](https://cursor.com/blog/scaling-agents#whats-next)What's next

Multi-agent coordination remains a hard problem. Our current system works, but we're nowhere near optimal. Planners should wake up when their tasks complete to plan the next step. Agents occasionally run for far too long. We still need periodic fresh starts to combat drift and tunnel vision.

But the core question, can we scale autonomous coding by throwing more agents at a problem, has a more optimistic answer than we expected. Hundreds of agents can work together on a single codebase for weeks, making real progress on ambitious projects.

The techniques we're developing here will eventually inform Cursor's agent capabilities. If you're interested in working on the hardest problems in AI-assisted software development, we'd love to hear from you at [hiring@cursor.com](mailto:hiring@cursor.com).

Filed under: [Research](https://cursor.com/blog/topic/research)

Author: Wilson Lin

[← Previous postBest practices for coding with agents](https://cursor.com/blog/agent-best-practices)

### Product

-   [Features](https://cursor.com/features)
-   [Enterprise](https://cursor.com/enterprise)
-   [Web Agents](https://cursor.com/agents)
-   [Bugbot](https://cursor.com/bugbot)
-   [CLI](https://cursor.com/cli)
-   [Pricing](https://cursor.com/pricing)

### Resources

-   [Download](https://cursor.com/download)
-   [Changelog](https://cursor.com/changelog)
-   [Docs ↗](https://cursor.com/docs)
-   [Learn ↗](https://cursor.com/learn)
-   [Forum ↗](https://forum.cursor.com/)
-   [Status ↗](https://status.cursor.com/)

### Company

-   [Careers](https://cursor.com/careers)
-   [Blog](https://cursor.com/blog)
-   [Community](https://cursor.com/community)
-   [Workshops](https://cursor.com/workshops)
-   [Students](https://cursor.com/students)
-   [Brand](https://cursor.com/brand)

### Legal

-   [Terms of Service](https://cursor.com/terms-of-service)
-   [Privacy Policy](https://cursor.com/privacy)
-   [Data Use](https://cursor.com/data-use)
-   [Security](https://cursor.com/security)

### Connect

-   [X ↗](https://x.com/cursor_ai)
-   [LinkedIn ↗](https://www.linkedin.com/company/cursorai)
-   [YouTube ↗](https://www.youtube.com/@cursor_ai)

© 2026 Cursor🛡 [SOC 2 Certified](https://cursor.com/security)

🖥☉☾

🌐English↓
```

---

