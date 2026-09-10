## history of textmate editor

💡 **TextMate is a legendary GUI text editor for macOS created by Allan Odgaard**. <mark>Launched in<span> </span><strong>2004</strong></mark>, it completely revolutionized the developer tooling landscape during the mid-2000s. Though it is no longer the dominant editor it once was, its innovations heavily influenced modern editors like Sublime Text and Visual Studio Code. [link](https://en.wikipedia.org/wiki/TextMate)

***

### 🚀 The Meteoric Rise (2004–2006)

Before TextMate, Mac developers largely relied on bare-bones text editors or classic Mac-specific tools like [BBEdit](https://www.barebones.com/products/bbedit/). When Allan Odgaard released TextMate in October 2004, it introduced groundbreaking features that felt like "magic" to developers: [link](https://publish.obsidian.md/xybre/permalink/5f66e2bd-5ed1-4f19-b7f9-acdede15800d)

- **The Snippet & Tab System:** Typing a short keyword (like `lorem` or a code block initiator) and pressing `Tab` would instantly expand into a massive block of formatted code. [link](https://www.quora.com/What-was-so-great-about-TextMate)
- **Extensible Bundles:** TextMate allowed users to easily build and share declarative syntax highlighting and plug-in modules, adapting natively to a multitude of languages. [link](https://en.wikipedia.org/wiki/TextMate)

**The Ruby on Rails Catalyst:** TextMate’s history is inextricably linked to **David Heinemeier Hansson (DHH)**, the creator of the **Ruby on Rails** framework. DHH used TextMate in his iconic, viral 2005 video demonstrating how to build a blog in 15 minutes. Because the editor was beautifully tailored for Ruby workflows, thousands of web developers flooded the Mac ecosystem just to use TextMate. [link](https://akos.ma/blog/text-editors-for-work/)

In **2006**, TextMate 1.5 won the prestigious **Apple Design Award** for Best Developer Tool, marking its peak cultural relevance. [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)

***

### ⏳ The Stagnation & Competition (2007–2011)

Following its massive success, expectations for **TextMate 2.0** were incredibly high. It was announced around 2006, but years passed with very little public progress. [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)

During this development drought, the ecosystem shifted:

- Because TextMate was strictly exclusive to macOS, Windows and Linux developers grew impatient.
- In 2008, Sublime Text emerged as a multi-platform "spiritual successor," adopting TextMate's exact regex snippet and bundle syntax while offering blazing-fast performance across OS X, Windows, and Linux.
- Other modern open-source editors and specialized IDEs began taking market share. [link](https://world.hey.com/dhh/finding-the-last-editor-dae701cc)

***

### 🔓 Going Open Source (2012–Present)

By the time the TextMate 2.0 alpha was released in late 2011, much of the developer community had moved on. In August 2012, responding to a changing landscape and pushing back against Apple's restrictive Mac App Store policies, Odgaard released the source code for TextMate 2 under the **GPLv3 license** on GitHub. [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)

The repository can still be accessed at the [TextMate GitHub Repository](https://github.com/textmate/textmate).

### 📊 Summary Timeline

| Year        | Milestone                               | Impact                                                                      |
| ----------- | --------------------------------------- | --------------------------------------------------------------------------- |
| **2004**    | TextMate 1.0 released by Allan Odgaard. | Introduced snippet expansions and extensible bundles to Mac.                |
| **2005**    | Ruby on Rails integration.              | Propelled TextMate to the top of the web development world.                 |
| **2006**    | Apple Design Award.                     | Solidified its status as the premier macOS code editor.                     |
| **2007-11** | Development Stall.                      | Competitors like Sublime Text capture the cross-platform market.            |
| **2012**    | TextMate 2.0 Open Sourced.              | Code moved to GitHub under GPLv3 to allow community forks.                  |
| **Present** | Legacy Maintenance.                     | Free to download; works well for purists wanting native macOS architecture. |

Today, TextMate is treated largely as an open-source, community-maintained passion project. While most modern web developers use tools like VS Code or JetBrains, TextMate is fondly remembered as the blueprint for the UI and UX of the modern code editor. [link](https://en.wikipedia.org/wiki/TextMate)

Are you researching TextMate for **historical context**, or are you looking to **replicate a specific TextMate feature/theme** in a modern editor like VS Code? Let me know how I can help!

- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  TextMate. Article · Talk. Language; Download PDF; Watch · Edit. TextMate is a free and open-source general-purpose GUI text editor...
- [link](https://coyotetracks.org/blog/bbedit-and-why/)\
  coyotetracks.org\
  BBEdit 14, and Why You Should Care - Coyote Tracks\
  Jul 19, 2021 — When TextMate burst onto the scene in the mid-2000s, it didn't take aim at Emacs and Vim as much as BBEdit, a Mac-only editor arou...
- [link](https://akos.ma/blog/text-editors-for-work/)\
  akos.ma\
  Text Editors for Work | akos.ma\
  Jan 21, 2022 — TextMate (2006–2011) TextMate was the editor that David Heinemeier Hansson used to demo Ruby on Rails. We can still watch this dem...

Show all

## creator background

**Allan Odgaard** (known online by his handle **"sorbits"**) is the Danish programmer and computer scientist who single-handedly built and launched **TextMate** under his micro-company, **MacroMates**. [link](https://github.com/sorbits)

Odgaard’s distinct background as a "UNIX freak" who transitioned into the Apple ecosystem is what gave TextMate its unique DNA, making it a masterclass in combining power with design. [link](https://www.quora.com/What-was-so-great-about-TextMate)

***

### 🖥️ A UNIX Purist Adapting to macOS

Before building TextMate, Odgaard was a hardcore **UNIX and Linux enthusiast**. He loved the robust, customizable nature of command-line tools but was heavily drawn to the clean, aesthetic design of **Mac OS X** (now macOS) when Apple released it in the early 2000s. [link](https://www.quora.com/What-was-so-great-about-TextMate)

At the time, the existing Mac text editors were either classic desktop apps that ignored the command line or command-line tools (like Vim and Emacs) wrapped in clunky interfaces. Odgaard saw a gap for an editor that looked like a native, elegant Mac application but felt like a UNIX powerhouse underneath. [link](https://www.quora.com/What-was-so-great-about-TextMate)

***

### ⚙️ The Technical Philosophy

Because Odgaard approached text editing from a compiler and systems level, he designed TextMate with incredible architectural foresight:

- **The Regex Revolution:** Instead of hardcoding syntax rules for every programming language, Odgaard invented a parsing method using regular expressions to build syntax trees dynamically. This concept was so brilliant that the **TextMate Grammar format (`.tmLanguage`)** became the universal industry standard. It is the exact underlying engine that modern editors like VS Code still use for syntax highlighting. [link](https://news.ycombinator.com/item?id=20979841)
- **Shell Integration:** Coming from a UNIX background, Odgaard ensured TextMate could natively pipe code text out to terminal commands, filter it, and pipe it right back into the editor. [link](https://en.wikipedia.org/wiki/TextMate)

***

### 🧑‍💻 The Solo Indie Dev Trap

Odgaard operated as a solo developer for MacroMates. While this allowed him to create a cohesive, uncompromising vision for TextMate 1.0, it became a bottleneck when the app grew massively popular.

Following the success of 2006, the pressure to deliver TextMate 2.0 fell entirely on his shoulders. He spent years completely rewriting the application from scratch to handle deeper, more complex abstractions. Working largely in isolation, the multi-year development delays became infamous in the tech community. [link](https://stackoverflow.com/questions/746319/what-ever-happened-to-textmate-2)

### 🔓 The Open-Source Pivot

In 2012, Odgaard showed his community-first background by making a dramatic move. Rather than letting TextMate fade away or selling it to a larger corporation, he **open-sourced the entire codebase** on [GitHub](https://github.com/textmate/textmate) under the GPLv3 license. He noted that he wanted to bypass Apple's increasingly restrictive sandbox requirements for software and give the code back to the developers who had supported him for a decade. [link](https://thenextweb.com/news/the-long-delayed-textmate-2-text-editor-open-sourced)

Odgaard still occasionally writes about tech, systems programming, and macOS on his personal blog, [Sigpipe](https://sigpipe.macromates.com/).

Would you like to know more about **MacroMates as a company**, or are you curious about the **technical details** of how his TextMate grammar scoping works?

- [link](https://www.quora.com/What-was-so-great-about-TextMate)\
  Quora\
  What was so great about TextMate? - Quora\
  Mar 26, 2017 — Behind the scenes, TextMate is also very well designed and coded. The original created was a UNIX freak, who turned over to Mac. T...
- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  TextMate is a free and open-source general-purpose GUI text editor for macOS created by Allan Odgaard. TextMate features declarati...
- [link](https://thenextweb.com/news/the-long-delayed-textmate-2-text-editor-open-sourced)\
  The Next Web\
  The long-delayed TextMate 2 text editor has been open ... - TNW\
  Aug 9, 2012 — The long-delayed TextMate 2 text editor has been open-sourced under the GPL 3 license, says its creator Allan Odgaard. The editor,

Show all

## creator life

**Allan Odgaard** is a famously private developer who treats software development as a deeply personal craft rather than a vehicle for corporate scale. Over the years, his life has come to represent the ultimate archetype of the **"sole indie developer"**—experiencing both the absolute highs of cultural stardom and the crushing burdens of working in isolation. [link](https://news.ycombinator.com/item?id=20979841)

***

### 🇩🇰 Early Life and Philosophy

Odgaard was born and raised in **Denmark**, where he still resides. He developed a passion for computer science early on, specifically focusing on low-level data structures, parsing algorithms, and system optimization. [link](https://stackoverflow.com/questions/746319/what-ever-happened-to-textmate-2)

He operated with a strict ethos: **software should be minimalist, fast, and highly predictable**. He hated bloat and repetitive daily tasks, which led him to build tools that optimized every keystroke. This mindset birthed his handle **"sorbits"** (a combination of _sorting_ and _bits_) and his one-man software company, **MacroMates**. [link](https://stackoverflow.com/questions/746319/what-ever-happened-to-textmate-2)

***

### 🏠 The Hyper-Productive Solitary Life (2004–2006)

During the early development of TextMate, Odgaard lived the classic life of a highly focused indie developer. Working out of his home in Denmark, he managed everything: writing the core Objective-C code, responding to support emails, and hanging out daily in the `##textmate` IRC channel on Freenode to chat with users. [link](https://stackoverflow.com/questions/746319/what-ever-happened-to-textmate-2)

His lifestyle during TextMate's peak was minimalist. He famously used a clean Mac desktop environment with lightweight tools like _Quicksilver_ for app launching, _Terminal_, and simple scripting languages. He was highly accessible to his community, which grew fiercely loyal because they were talking directly to the master craftsman behind their favorite tool. [link](https://news.ycombinator.com/item?id=20979841)

***

### 🛑 The Psychological Weight of "TextMate 2"

When TextMate exploded in popularity, Odgaard's solitary lifestyle transformed from an asset into an immense pressure cooker. [link](https://news.ycombinator.com/item?id=20979841)

- **The Perfectionism Trap:** Instead of pushing small updates to TextMate 1, Odgaard wanted to completely re-architect the application text engine from scratch to solve fundamental design limitations.
- **Isolation and Burnout:** Because MacroMates was a one-man shop, he became trapped under the compounding weight of thousands of user feature requests, support tickets, and growing community frustration over the unreleased version 2.0. [link](https://news.ycombinator.com/item?id=20979841)

For years, Odgaard retreated somewhat from the public eye, working behind closed doors. Tech forums regularly speculated on his well-being, wondering if he had abandoned the project entirely. [link](https://news.ycombinator.com/item?id=20979841)

***

### 🔓 Stepping Back for Peace of Mind

By 2012, Odgaard reached a turning point. He realized that holding onto the core "kernel" of TextMate as a proprietary, single-developer secret was no longer viable or healthy.

By open-sourcing the software, he effectively **liberated himself from the solo development trap**. It allowed him to keep working on the code at his own pace as a Mac user, while letting the community step in to help manage the heavy lifting. He famously noted that open-sourcing it took "a bit of guts" because he risked losing his primary source of income, but it was a transition toward maturity and openness. [link](https://news.ycombinator.com/item?id=20979841)

***

### 🌲 Present Day Life

Today, Odgaard lives a quiet, comfortable life away from the tech-celebrity spotlight.

- He remains a purist programmer, occasionally publishing deeply technical musings on operating system architecture, data layout, and compiler theory on his personal blog, [Sigpipe](https://sigpipe.macromates.com/).
- His [GitHub profile (sorbits)](https://github.com/sorbits) remains quietly active, showing that he still enjoys writing code purely for the love of the craft, free from the crushing demands of a multi-million user customer base. [link](https://github.com/sorbits)

Would you like to explore **how other indie developers handled similar burnout** (like the creator of Sublime Text), or are you interested in reading some of Odgaard's **philosophical tech writing**? [link](https://news.ycombinator.com/item?id=20979841)

- [link](https://news.ycombinator.com/item?id=20979841)\
  Hacker News\
  I have a lot of respect for Allan Odgaard. Something happened ...\
  Allan had been making very fast progress on TextMate for the first several years, and the community was full of excited “early ado...
- [link](https://usesthis.com/interviews/allan.odgaard/)\
  Uses This\
  Uses This / Allan Odgaard\
  Nov 1, 2009 — Allan Odgaard is a programmer and the author of TextMate. He's interested in algorithms and data structures, and avoiding repetiti...
- [link](https://stackoverflow.com/questions/746319/what-ever-happened-to-textmate-2)\
  Stack Overflow\
  editor - What ever happened to Textmate 2? - Stack Overflow\
  Apr 14, 2009 — Show activity on this post. From the wiki: Q: Is TextMate 2 still in development, or has it been abandoned? TM2 is being actively ...

Show all

## other works

Allan Odgaard is heavily defined by his identity as a **"one-project purist."** Unlike many software developers who build sprawling portfolios of applications, Odgaard poured his entire professional life almost exclusively into **TextMate**. MacroMates was never an app studio; it was essentially the business wrapper for TextMate.

However, a look into his public footprints and open-source contributions reveals a handful of smaller, fascinating technical side projects and frameworks that highlight his engineering philosophy.

***

### 🌐 Open-Source & GitHub Projects

On his GitHub profile, [sorbits](https://github.com/sorbits), Odgaard has hosted several niche utility programs and educational scripts: [link](https://github.com/sorbits)

- **`glim`**: A minimal **static site generator** built to be semi-compatible with Jekyll. Odgaard created this to manage his own websites and personal blog, opting to write a lighter, faster tool tailored to his strict performance principles. [link](https://github.com/sorbits)
- **`crondesk`**: A native macOS utility written in Swift that takes the terminal output of a repeating `cron` background job and **renders it directly onto the user's desktop wallpaper**. It reflects his deep fondness for system monitoring and UNIX utilities. [link](https://github.com/sorbits)
- **`visual-fortune-algorithm`**: A highly specialized Java applet created to visualize the **plane-sweep algorithm for Voronoi diagrams** (Fortune's Algorithm). This aligns with his background in complex computer science algorithms and data visualization. [link](https://github.com/sorbits)
- **`github-email-api`**: A lightweight automation script built in Ruby that allows repository maintainers to **assign labels and close GitHub issues entirely via email**—a tool he likely built to optimize his workflow during the chaotic peak of TextMate's tracking system. [link](https://github.com/sorbits)

***

### 🧩 Sub-Frameworks and System Innovations

While not standalone apps, Odgaard’s work _inside_ TextMate produced decoupled architectures that heavily impacted the wider software engineering community: [link](https://randsinrepose.com/archives/interview-allan/)

- **The TextMate Grammar Engine (`.tmLanguage`)**: Though technically a part of TextMate, this property-list based syntax parser was so expertly abstracted by Odgaard that it became an independent industry standard. When modern giants like Microsoft built **VS Code**, they did not reinvent syntax highlighting; they natively adopted Odgaard's engine syntax. [link](https://randsinrepose.com/archives/interview-allan/)
- **Oak (The TextMate 2 Blueprint)**: During the brutal multi-year rewrite of TextMate 2.0, Odgaard built a completely proprietary, highly optimized text layout kernel (codenamed "Oak"). Portions of these foundational frameworks were released during his open-source shift in 2012 for other developers to utilize in closed-source and open-source Mac software alike. [link](https://en.wikipedia.org/wiki/TextMate)

***

### 📝 Technical Essays and Musings

For Odgaard, "works" also include his writing. On his personal blog, [Sigpipe](https://sigpipe.macromates.com/), he occasionally publishes highly regarded deep-dives on low-level computing concepts. He explores things like _string allocation efficiencies_, _compiler optimizations_, and _OS architecture tweaks_, serving as a textbook resource for systems-level Mac developers.

Would you like to take a look at how **modern text editors (like VS Code)** actually implement his `.tmLanguage` syntax framework, or are you curious about the **technical details of his static site generator, `glim`**?

- [link](https://randsinrepose.com/archives/interview-allan/)\
  Rands in Repose\
  Interview: Allan Odgaard - Rands in Repose\
  Jan 26, 2007 — VisualAssist: this is a plug-in for MSVC++ and it adds things like auto-pairing of brackets, re-indented pasting, and a lot of oth...
- [link](https://github.com/sorbits)\
  GitHub\
  sorbits (Allan Odgaard) · GitHub\
  Allan Odgaard has a GitHub account with 639 followers and 1 following. Their achievements include: \* 19 projects \* Packages \* Star...
- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  Throughout 2007, the core application changed only minimally, though its “language bundles” continued to advance. In June 2009, Te...

Show all

## activities

**Allan Odgaard’s professional and personal activities** revolve around open-source software maintenance, niche utility creation, deeply technical systems research, and maintaining a quiet indie-developer lifestyle in Denmark.

Instead of chasing venture capital, corporate growth, or building a massive suite of products, his activities reflect a commitment to low-level, high-efficiency programming and digital minimalism.

***

### 💻 1. Mainframe Maintenance of the TextMate Ecosystem

Though he stepped away from the exhausting pressure of proprietary commercial software development by open-sourcing the app in 2012, Odgaard remains the primary overseer of TextMate. [link](https://news.ycombinator.com/item?id=20979841)

- **The GitHub Steward:** He serves as the core gatekeeper for the [TextMate Organization on GitHub](https://github.com/textmate), occasionally evaluating pull requests and reviewing contributions from the community to keep the text editor functional with modern versions of macOS. [link](https://github.com/orgs/textmate/people)
- **No-Bloat Mentality:** His day-to-day work ensures that TextMate remains lightweight, free of telemetry, and functional for purists who want a raw, blazing-fast native macOS text engine.

### 🛠️ 2. Building Personalized, Craft Software

Odgaard writes software primarily to solve his own problems or automate repetitive micro-tasks. He actively maintains a small catalog of indie projects via his personal [GitHub handle, sorbits](https://github.com/sorbits), including: [link](https://github.com/sorbits)

- **`glim`**: A custom static site generator engineered to be a leaner, ultra-fast, minimalist alternative to Jekyll. He uses this tool explicitly to power and render his own websites. [link](https://github.com/sorbits)
- **`crondesk`**: A Swift utility he designed for his own macOS workspace that executes terminal `cron` background jobs and overlays the text output directly onto his desktop background. [link](https://github.com/sorbits)

### 📝 3. Deep-Dive Systems Architecture Writing

Odgaard is a prominent technical essayist within the macOS developer community. On his personal blog, [Sigpipe](https://sigpipe.macromates.com/), he occasionally posts exhaustive breakdowns of low-level software design.

- He avoids writing typical "lifestyle" tech blogs, focusing instead on dense, educational research regarding string allocations, memory footprints, and compiler performance optimizations.
- When Apple rolls out sweeping security or low-level alterations to macOS (such as notarization demands or process spawning changes), Odgaard frequently performs benchmark tests to analyze how these updates affect compiler speeds and background processes. [link](https://lapcatsoftware.com/articles/catalina-executables.html)

### 🌲 4. Living a Minimalist, Privacy-Focused Tech Lifestyle

Odgaard actively avoids the tech-celebrity spotlight, choosing to live a private life in Denmark. His personal setup relies entirely on lightweight, command-line adjacent UNIX tools, script automation, and an uncluttered macOS environment. He treats programming like carpentry—focusing heavily on precision, patience, and mastering the tools at hand rather than expanding a business. [link](https://randsinrepose.com/archives/interview-allan/)

Would you like to dive into one of his specific technical blog arguments regarding **macOS architecture changes**, or look closer at **how he structures his minimalist static site generator (`glim`)**?

- [link](https://usesthis.com/interviews/allan.odgaard/)\
  Uses This\
  Uses This / Allan Odgaard\
  Nov 1, 2009 — Allan Odgaard is a programmer and the author of TextMate. He's interested in algorithms and data structures, and avoiding repetiti...
- [link](https://randsinrepose.com/archives/interview-allan/)\
  Rands in Repose\
  Interview: Allan Odgaard - Rands in Repose\
  Jan 26, 2007 — I'm doing less coding and more managing in my current incarnation, but I use some type of editor on a daily basis, so why the cons...
- [link](https://lapcatsoftware.com/articles/catalina-executables.html)\
  Lapcat Software\
  Catalina is checking notarization of unsigned executables\
  May 22, 2020 — Catalina is checking notarization of unsigned executables. May 22 2020 by Jeff Johnson. This is a follow-up to Allan Odgaard's exc...

Show all

## recent

In recent years, both **TextMate** and its creator **Allan Odgaard** have fully transitioned into a state best described as **"living legacy maintenance"**.

While TextMate is no longer a mainstream tool for modern software development—having been largely eclipsed by platforms like VS Code and modern high-performance editors like Zed—its modern history is characterized by stability, quiet maintenance, and preservation. [link](https://www.dreamhost.com/blog/best-text-editors/)

***

### 🏛️ The State of TextMate

TextMate is actively functioning but essentially feature-complete. [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)

- **Passive Maintenance:** Major, ground-up feature additions are a thing of the past. Instead, modern efforts focus entirely on ensuring the app continues to compile and run smoothly on the latest iterations of **macOS** and modern Apple Silicon (M-series) architecture. [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)
- **The Community Era:** The [TextMate GitHub Organization](https://github.com/textmate) handles sporadic updates. Occasionally, community members submit pull requests for quality-of-life adjustments—such as minor UI refinements like column width selection layouts—which Odgaard or other maintainers review. [link](https://github.com/textmate/textmate/pull/1203)
- **A Reliable Technical Appliance:** For a niche demographic of purists, TextMate remains the ultimate native macOS "graphical Notepad". Because it was built to rely on pure Apple frameworks, it runs with an incredibly low memory footprint and starts up instantly compared to heavier Electron-based apps. [link](https://news.ycombinator.com/item?id=20979841)

***

### 🌲 Allan Odgaard’s Recent Focus

Allan Odgaard has successfully detached himself from the high-stress spotlight of commercial software development. His recent activities are entirely aligned with his philosophy of software as a personal, minimalist craft: [link](https://news.ycombinator.com/item?id=20979841)

1. **Independent Coding:** Odgaard writes software entirely for personal use or to solve micro-level optimizations. He acts as the final arbiter for TextMate but does not actively try to compete with modern multi-platform IDEs. [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)
2. **Deep-Tech Systems Reflection:** His technical contributions mostly take the form of low-level systems programming research rather than commercial user-facing apps. When he publishes on his blog, [Sigpipe](https://sigpipe.macromates.com/), it is usually focused on structural computing topics like memory alignment, compiler behavior, or benchmark testing how macOS internal system changes alter performance execution speeds.
3. **Leaving a Blueprint Legacy:** Odgaard's work has been thoroughly validated by the industry. Even though web developers have moved on from using the TextMate application, his architectural legacy—the **TextMate Grammar syntax framework (`.tmLanguage`)**—remains fully active as the underlying syntax-highlighting muscle inside VS Code and numerous other contemporary text processing engines.

Are you checking on TextMate's status to see if it's **viable to use as your daily editor** today, or are you looking for **modern alternatives** that retain its classic native Mac feel?

- [link](https://news.ycombinator.com/item?id=20979841)\
  Hacker News\
  I have a lot of respect for Allan Odgaard. Something happened ...\
  I have a lot of respect for Allan Odgaard. Something happened, and I don't want to speculate, that caused him to take a break from...
- [link](https://www.reddit.com/r/textmate/comments/wl0hh7/why%5Fisnt%5Ftextmate%5Funder%5Fmore%5Factive%5Fdevelopment/)\
  Reddit\
  Why isn't TextMate under more active development by ... - Reddit\
  Aug 10, 2022 — Textmate is by far my favourite app on the Mac. I wonder about exactly the same thing as you do often; my guess is that Allan Odga...
- [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)\
  Reddit·r/macapps\
  Whatever happened to TextMate? : r/macapps - Reddit\
  Aug 13, 2025 — 1. x was a closed source text editor with a diverse bundles environment. 2.0 was needed around 2005, announced 2006 and didn't del...

Show all

## everyday life

Allan Odgaard’s **everyday life** reflects a highly intentional, minimalist, and deeply focused approach to technology and workflow. Rather than succumbing to the consumer tech churn or corporate life, his daily habits represent the purest form of digital craftsmanship.

***

### 💻 A Minimalist Workspace & Tech Stack

Odgaard’s daily computing environment is characterized by strict simplicity, choosing a few highly optimized tools over modern, heavy software suites:

- **Hardware:** For years, his setup has centered on native Apple hardware combined with spacious, high-fidelity displays (historically a Mac Pro with a massive 30-inch Apple Cinema Display). He prioritizes maximum screen real estate to visually map out text structures and complex parsing logic.
- **The "Antidote to Bloat" Software:** True to his UNIX-enthusiast roots, his everyday applications are famously lightweight. He bypasses massive team collaboration tools or heavy IDEs, favoring core utilities designed to perform single tasks perfectly. He relies on native text expansion utilities, terminal environments, and custom-scripted automation.
- **Text Editing Realism:** Naturally, Odgaard uses **TextMate** as his primary graphic editor on a daily basis, utilizing it alongside a raw terminal layout. [link](https://news.ycombinator.com/item?id=20979841)

***

### ⚙️ The Daily Philosophy: Eradicating Repetition

The defining feature of Odgaard’s day-to-day life is an active obsession with **avoiding repetitive tasks**.

- If he finds himself performing a tedious action more than twice on a Mac or system terminal, his immediate instinct is to write a small automation script or a mini open-source utility to kill the repetition forever. [link](https://brettterpstra.com/2011/02/02/quick-calculations-in-bash/)
- He handles everything from his personal task planning to his website building via tiny, highly efficient home-grown systems (like his lightweight static site generator, `glim`).

***

### 🌲 A Deliberate Escape from the Connected Grind

At the height of TextMate 1.0’s viral success, Odgaard’s daily life was deeply intertwined with public-facing duties—moderating busy IRC developer chat rooms, maintaining software trackers, and handling an avalanche of commercial customer support tickets.

By open-sourcing the app, Odgaard intentionally recalibrated his everyday life away from the high-stress spotlight. Today, his routine is entirely self-directed:

- He has largely disconnected from fast-paced tech social media loops, occasionally maintaining a quiet presence on [his personal X (Twitter) profile](https://x.com/sorbits) to track niche technical developments.
- He spends his time quietly coding purely for the joy of problem-solving, exploring mathematical data concepts, or performing low-level performance benchmarking from his home in Denmark.

Would you like to know more about the **specific types of automation scripts** Odgaard uses to streamline his daily tasks, or see how his **minimalist philosophy** compares to other famous solo tech developers?

- [link](https://usesthis.com/interviews/allan.odgaard/)\
  Uses This\
  Uses This / Allan Odgaard\
  Nov 1, 2009 — Allan Odgaard is a programmer and the author of TextMate. He's interested in algorithms and data structures, and avoiding repetiti...
- [link](https://randsinrepose.com/archives/interview-allan/)\
  Rands in Repose\
  Interview: Allan Odgaard - Rands in Repose\
  Jan 26, 2007 — I'm doing less coding and more managing in my current incarnation, but I use some type of editor on a daily basis, so why the cons...
- [link](https://brettterpstra.com/2011/02/02/quick-calculations-in-bash/)\
  brettterpstra.com\
  Quick calculations in Bash - BrettTerpstra.com\
  Feb 2, 2011 — I picked up a few good tips from the blog post that Allan Odgaard wrote when he was on a similar mission, both from Allan and from...

Show all

## hobbies

Because Allan Odgaard is famously private and chooses to live a quiet life outside the public tech-celebrity circuit, he has rarely spoken at length about standard "extracurricular" personal hobbies.

However, looking at his technical footprints, interviews, and public writing, it is clear that **his hobbies are closely tied to his minimalist philosophy, complex computer science abstractions, and independent digital craft**.

When he is not actively maintaining the TextMate open-source architecture, his interests and leisure activities lean heavily toward:

***

### 🧩 1. Algorithmic Optimization & Niche Math Models

For Odgaard, writing code is a form of artistic fulfillment rather than just work. In his free time, he builds and studies highly technical, non-commercial software solutions just to see how fast and clean he can make them: [link](https://macromates.com/blog/2009/working-on-it/)

- He has historically spent time researching and writing visual simulators for complex computational geometry, such as **Fortune's Algorithm** for calculating Voronoi diagrams.
- He treats low-level computer science concepts—like data structures, pointer alignment, string mapping, and parsing logic—as a creative puzzle or hobbyist playground.

### 🛠️ 2. Scratch-Building Bespoke Tools

While many developers play video games or build physical models, Odgaard spends his free time building hyper-minimalist software tools purely to run his own life. If a system task or process on his Mac takes more than a couple of clicks, he writes an app to eliminate it.

- Examples of his personal hobby projects include **`glim`** (his custom-coded static site generator built specifically to render his blog precisely how he likes it) and **`crondesk`** (a macOS dashboard utility he built to format script logs onto his desktop background).

### 🖥️ 3. Retrogaming & Demoscene Roots

Odgaard's passion for software logic traces back to a deep appreciation for classic hardware, specifically the **Amiga** computer systems. He grew up during the golden era of European "bedroom programmers", running in circles where developers lugged heavy computers around to code together for fun. This background left him with a lifelong appreciation for hyper-optimized software that can squeeze maximum performance out of restricted hardware limits. [link](https://lexfridman.com/dhh-david-heinemeier-hansson-transcript/)

### 📝 4. Technical Analysis and Essay Writing

Odgaard finds leisure in investigating the inner workings of operating systems and documenting his findings like an essayist. On his personal blog, [Sigpipe](https://sigpipe.macromates.com/), he occasionally conducts and publishes benchmark tests analyzing how Apple’s underlying systems evolve over time. He dives into things like the compilation efficiency differences across different processors or memory allocations—using hard data and writing as a creative release.

***

Would you like to explore **how his background with the Amiga** influenced his original software architecture choices, or look at the **specific tools he built** to manage his personal workspace? [link](http://obligement.free.fr/articles%5Ftraduction/itwbarthel%5Fen.php)

- [link](https://macromates.com/blog/2009/working-on-it/)\
  TextMate for macOS\
  Working on It - TextMate\
  Jun 14, 2009 — Programming can be a way of self-fulfillment like art is. From the way Allan does his thing, I would estimate he is that type of g...
- [link](https://usesthis.com/interviews/allan.odgaard/)\
  Uses This\
  Uses This / Allan Odgaard\
  Nov 1, 2009 — Allan Odgaard is a programmer and the author of TextMate. He's interested in algorithms and data structures, and avoiding repetiti...
- [link](http://obligement.free.fr/articles%5Ftraduction/itwbarthel%5Fen.php)\
  Obligement\
  Interview with Olaf Barthel - Obligement\
  My hobbies still very much revolve around English language literature (I usually read more than 30 books a year), and through no f...

Show all

## family background and education

Because Allan Odgaard is a notoriously private individual who has always maintained a strict separation between his personal life and his work, **very little public information exists regarding his family background or parents**. He has intentionally kept his family and upbringing out of the tech spotlight.

However, his academic history and the educational roots that shaped his programming style are well-documented:

### 🎓 Education at the University of Copenhagen

Odgaard pursued his higher education in Denmark, attending the prestigious **University of Copenhagen** (_Københavns Universitet_). [link](https://www.csee.umbc.edu/~chang/cs641.s01/voronoi/)

- **Focus on Theoretical Computer Science:** During his time at the university, his studies focused heavily on core computer science foundations, algorithms, and data structures.
- **Academic Projects:** His academic work heavily leaned into computational geometry and visualization. For example, during his university years, he co-developed a specialized Java-based visualization engine for **Fortune's Sweep Algorithm** (used to calculate complex geometric Voronoi diagrams). [link](https://www.csee.umbc.edu/~chang/cs641.s01/voronoi/)

### 🖥️ The "LAN Party" Era Education

Beyond his formal university degree, Odgaard's real-world software education was forged in the **1990s European "bedroom programmer" and demoscene subcultures**.

As a teenager and young adult, he spent immense amounts of time building custom utilities for **Amiga** computer systems. David Heinemeier Hansson (the creator of Ruby on Rails and a longtime friend of Odgaard) noted that Odgaard's true foundational roots were built during "the party days," when a tight-knit community of Danish tech enthusiasts would **lug their heavy desktop computers around** to LAN parties to write code, exchange optimization tips, and reverse-engineer software together. [link](https://lexfridman.com/dhh-david-heinemeier-hansson-transcript/)

This combination of strict, academic computer science theory from the University of Copenhagen and the gritty, performance-starved constraints of early Amiga programming directly informed the lightweight, high-efficiency parsing engine he would later build for TextMate. [link](https://www.csee.umbc.edu/~chang/cs641.s01/voronoi/)

Would you like to know more about the **Danish tech and demoscene culture** of the 1990s that influenced him, or explore the **specific academic algorithms** he studied during his university years?

- [link](https://www.csee.umbc.edu/~chang/cs641.s01/voronoi/)\
  Department of Computer Science and Electrical Engineering – UMBC\
  Circle Events in Fortune Sweep - UMBC CSEE\
  Circle Events in Fortune Sweep. The following series of screen captures demonstrates some circle events that I was not able to sho...
- [link](https://forum.amiga.org/index.php?topic=72605.0)\
  Amiga.org\
  "Lost" PD libraries - Page 1 - Amiga.org\
  Aug 1, 2017 — http://www.osnews.com/story/29903/Atari\_ST\_multitasking\_OS\_Geneva\_NeoDesk\_to\_be\_open\_sourced. Universities are (generally speaking...
- [link](https://lexfridman.com/dhh-david-heinemeier-hansson-transcript/)\
  lexfridman.com\
  Transcript for DHH: Future of Programming, AI, Ruby on Rails ...\
  Jul 12, 2025 — The programmer, Allan Odgaard, is a good friend of mine, all the way back from the party days when we were lugging our computers a...

Show all

## why stagnation

The stagnation of TextMate during the late 2000s is one of the most famous cautionary tales in software engineering history. The editor became a victim of **"The Second-System Effect"** and **"The Big Rewrite,"** falling into a multi-year development void that ultimately cost it the market. [link](https://demaree.me/p/why-textmate-2-isnt-being-developed-in-the-open/)

The text editor stagnated for several major reasons:

### 1. The Dreaded "Ground-Up Rewrite"

Instead of incrementally updating TextMate 1.5 with requested features (like split-screen views or folder syncing), Allan Odgaard chose to build TextMate 2.0 completely from scratch. He realized that the architecture of version 1.0 could not handle advanced features natively, so he threw out the entire codebase. [link](https://stackoverflow.com/questions/746319/what-ever-happened-to-textmate-2)

- **The Trap:** Rewriting complex software from scratch is notoriously risky. Odgaard quickly realized that he was dealing with highly complex internal features—such as writing a fully Unicode-aware text indexing API, setting up seamless multithreading, and developing a completely custom text layout engine. [link](https://macromates.com/blog/2010/why-2-0-is-not-developed-in-the-open/)

### 2. Solo Developer Bottleneck & Isolation

MacroMates was a one-man shop. Odgaard was working in complete isolation to solve deeply complex theoretical computer science and systems problems. Because he was working alone, he had to handle customer support tickets, business operations, and core software architecture. Without a team to split the labor or keep momentum going, progress slowed to a crawl. [link](https://publish.obsidian.md/xybre/permalink/5f66e2bd-5ed1-4f19-b7f9-acdede15800d)

### 3. "Dark" Closed-Door Development

Odgaard explicitly chose **not to develop TextMate 2.0 in the open**. Because the codebase was constantly in flux and full of experimentation, he felt that discussing progress in public would only lead to empty PR cycles. [link](https://macromates.com/blog/2010/why-2-0-is-not-developed-in-the-open/)

- **The Result:** The [MacroMates Blog](https://macromates.com/blog/) went completely silent for years. In 2009, he claimed the modules were "90% done," but no product materialized for several more years. Because users had zero visibility into development, the tech community began writing TextMate off as "vaporware". [link](https://macromates.com/blog/2009/working-on-it/)

### 4. High Ambitions & Lack of Iteration

In traditional software, developers release an "early but usable" build and fix it over time. Odgaard rejected this approach for version 2.0. He focused entirely on the hardest, most complex architectural unknowns first, planning to do the "easy stuff" later. Because the program was missing basic, essential consumer features for years while he perfected the low-level data structures, it could not be released even as an experimental beta. [link](https://demaree.me/p/why-textmate-2-isnt-being-developed-in-the-open/)

***

### 📉 The Cost of Stagnation

While TextMate was frozen in its multi-year rewrite loop (2006 to 2011), the developer landscape didn't wait: [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)

- **Sublime Text** was released in 2008. It adopted TextMate's exact regex snippet system but ran flawlessly across Windows, Linux, and Mac.
- By the time the TextMate 2.0 public alpha finally arrived in late 2011, the vast majority of web developers had already migrated to competitors. [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)

Would you like to examine **how the modern software community reacted** when he finally broke the silence and open-sourced the code in 2012, or explore the **specific architectural goals** he was trying to solve during the rewrite?

- [link](https://macromates.com/blog/2010/why-2-0-is-not-developed-in-the-open/)\
  TextMate for macOS\
  Why 2.0 is not Developed in the Open - TextMate\
  Jan 6, 2010 — Why 2.0 is not Developed in the Open \* Allow threaded operations in a transparent way, not having (threaded) parser, spell checker...
- [link](https://demaree.me/p/why-textmate-2-isnt-being-developed-in-the-open/)\
  David Demaree\
  Why TextMate 2 Isn't Being Developed in the Open\
  I hesitate to say Odgaard has been rewriting TextMate from scratch for the hell of it. But he has rewritten it from scratch—the dr...
- [link](https://www.joshuakehn.com/2011/9/26/TextMate-2-Vaporware.html)\
  Joshua Kehn\
  TextMate 2: Vaporware? - Joshua Kehn\
  Sep 26, 2011 — The downfall of TextMate wasn't anything special or sudden. The developer just stopped caring about the current 1.X line, choosing...

Show all

## highly requested features

During TextMate’s multi-year development freeze between 2006 and 2011, the web developer landscape was shifting dramatically. Allan Odgaard, operating under his own philosophy, was busy tackling heavy, low-level internal abstractions (like building a unicode-aware text indexing API and thread-safe background buffers). [link](https://macromates.com/blog/2010/why-2-0-is-not-developed-in-the-open/)

Meanwhile, users were screaming for practical, workflow-oriented UI updates. The inability to quickly push out these specific **highly requested features** is what drove thousands of loyal developers straight into the arms of modern competitors like Sublime Text. [link](https://stackoverflow.com/questions/746319/what-ever-happened-to-textmate-2)

***

### 🪟 1. Split-Screen / Split-Window Editing

By far the most notorious omission in TextMate 1.5 was the lack of native window splitting. As screen resolutions grew, developers wanted to look at their HTML/CSS or controller/view files side-by-side. [link](https://lists.macromates.com/hyperkitty/list/textmate@lists.macromates.com/thread/EM335TQICOO4XHGUPCMDSPXWECAZSLSO/)

- **The Community Response:** Users begged for horizontal and vertical splits for years. Hacks and community scripts emerged—like a bundle called _Window Buddy_—to awkwardly open the same backend file buffer across two separate desktop windows, but it was clunky and prone to breaking. [link](https://lists.macromates.com/hyperkitty/list/textmate@lists.macromates.com/message/KVMFC5OU3I6QPTV5XMQYGHXCKC3ABW2A/)
- **The Bottleneck:** Odgaard admitted he wasn’t personally excited about split views, though he noted it was a top request. Because TextMate 1.0's layout pipeline wasn't built to decouple a text buffer from its single UI container, implementing it properly required the very "ground-up rewrite" that caused the stagnation in the first place. [link](https://macromates.com/blog/2009/working-on-it/)

### 📍 2. Multiple Carets / Multi-Cursor Editing

The ability to place down multiple flashing text cursors at once and type or edit several lines of code simultaneously is a staple of modern programming.

- **The Bottleneck:** Odgaard was famously resistant to implementing multi-carets early on because the initial implementations relied heavily on clicking around with a mouse, and he was a strict keyboard-macro purist. [link](https://macromates.com/blog/2011/multiple-carets/)
- He eventually caved and successfully added a native multi-caret engine to the TextMate 2.0 alpha in late 2011, but by then, Sublime Text had already made multi-cursor editing a wildly popular, out-of-the-box standard feature. [link](https://macromates.com/blog/2011/multiple-carets/)

### 🌐 3. Native Remote Editing (SFTP / FTP Integration)

As web development exploded, programmers frequently needed to open, edit, and save files directly on remote servers. TextMate 1.0 launched with no built-in network file handling. [link](https://stackoverflow.com/questions/746319/what-ever-happened-to-textmate-2)

- **The Bottleneck:** To edit files remotely, users had to purchase third-party premium FTP clients (like _Transmit_ or _Cyberduck_) and use a "Disc" mounting feature to bridge the files over to TextMate.
- Whenever a network mount lagged, TextMate's main single-threaded user interface would completely freeze. Fixing this required writing a highly intricate, non-blocking asynchronous system thread just to save a file. [link](https://macromates.com/blog/2010/why-2-0-is-not-developed-in-the-open/)

### 🔄 4. Chunked / Branching Undo History

In early text editors, if you made a mistake, undid it, typed something new, and realized you preferred your first draft, your old "undone" history was permanently deleted.

- Developers heavily requested a branching or "chunked" undo system that would remember every historical edit path seamlessly. While an alternative Windows clone of TextMate (called _E Text Editor_) actually implemented this feature successfully, native TextMate users had to wait years for it to be fully native. [link](https://stackoverflow.com/questions/33813/what-are-some-useful-textmate-features)

### 💻 5. Native Full-Screen Mode

When Apple introduced native OS-level Full Screen window modes in OS X Lion (2011), developers flocked to it to eliminate desktop distractions. TextMate 1.5 could not support it natively without breaking backward compatibility for users running older versions of Mac OS X, creating another friction point that drove developers to newer tools built natively for modern frameworks. [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)

Would you like to look closer at **how competitors like Sublime Text capitalized** on these exact feature gaps, or dive into the **technical specs of the multi-threading engine** Odgaard built to try and solve them?

- [link](https://macromates.com/blog/2010/why-2-0-is-not-developed-in-the-open/)\
  TextMate for macOS\
  Why 2.0 is not Developed in the Open - TextMate\
  Jan 6, 2010 — Why 2.0 is not Developed in the Open \* Allow threaded operations in a transparent way, not having (threaded) parser, spell checker...
- [link](https://publish.obsidian.md/xybre/permalink/5f66e2bd-5ed1-4f19-b7f9-acdede15800d)\
  Obsidian Publish\
  TextMate - Never Complete Only Abandoned - Obsidian Publish\
  Feb 24, 2023 — History. TextMate was first released in 2004 and was one of the first code editors I used professionally on the Mac operating syst...
- [link](https://therealadam.com/2013/03/14/textmates-beautiful-and.html)\
  therealadam.com\
  TextMate's beautiful and flawed extension mechanism\
  Mar 14, 2013 — The phenomenal thing about TextMate was how well it chose the extension points and how much further those extension points took th...

Show all

## history after opensource

When Allan Odgaard open-sourced TextMate 2.0 in **August 2012** under the **GPLv3 license**, it marked a dramatic shift from a highly guarded commercial product to a community-focused legacy project. [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)

The move was partially a political statement against Apple's restrictive Mac App Store sandboxing rules, but it fundamentally altered the course of the editor's history. [link](https://en.wikipedia.org/wiki/TextMate)

***

### 🔓 The Initial Open-Source Shockwave (2012)

When the repository dropped on the [TextMate GitHub Organization](https://github.com/textmate), the initial developer reception was a mix of awe and skepticism. Because the software had spent years as a closed-source mystery, engineers immediately began diving into Odgaard’s hyper-customized Objective-C++ codebase to see how his famously optimized "Oak" layout kernel worked. [link](https://github.com/textmate/textmate)

The community quickly began contributing pull requests to fix the long-standing bugs from the alpha years, patch memory leaks, and add minor quality-of-life interface improvements. [link](https://github.com/textmate/textmate/blob/master/Applications/TextMate/about/Changes.md)

***

### 🐌 The Long March to the Final 2.0 Release (2012–2019)

Though the codebase was now public, development on TextMate did not rapidly accelerate. The market share had already largely vanished to Sublime Text and the newly rising GitHub-backed _Atom_ editor. [link](https://metafizzy.co/blog/new-tech-gets-chatter/)

As a result, TextMate 2.0 spent several more years creeping through slow development phases:

- **The Perpetual Beta:** For roughly four years following the open-source pivot, TextMate remained in a stable, community-maintained alpha/beta cycle. [link](https://en.wikipedia.org/wiki/TextMate)
- **The Release Candidate (2016):** At the end of 2016, a formal Release Candidate was deployed. It proved that the open-source model had succeeded in making the editor highly stable on modern versions of macOS, even if it wasn't winning back mainstream developers. [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)
- **The Official 2.0 Release (September 2019):** After **13 years** of infamous development delay following its original 2006 announcement, **TextMate 2.0 was officially and stably released**. [link](https://www.reddit.com/r/apple/comments/d4rqqo/textmate%5F20%5Freleased/)

***

### 🏛️ Modern Maintenance & "Feature Completeness" (2020–Present)

Following the milestone 2.0 release, active feature development slowed to a near-halt. The last set of official minor releases (versions 2.0.19 through 2.0.21) rolled out around **2021**, primarily focusing on modern backend tweaks: [link](https://github.com/textmate/textmate/releases)

- Updating the `TextMate::UI` Ruby bundle libraries to work seamlessly with newer Ruby 2.x versions.
- Patching sporadic macOS context menu bugs and file browser interactions.
- Minor security patches for low-level buffer handling. [link](https://github.com/textmate/textmate/releases)

Since then, the repository has been largely static. It is widely considered **"feature-complete."** The open-source model ensures that the project isn't dead, but rather perfectly preserved. [link](https://news.ycombinator.com/item?id=35904512)

***

### 🌐 The Abstract Triumph: TextMate’s DNA Lives On

While the TextMate app itself gracefully stepped into retirement, its open-source contribution catalyzed an industry revolution. Because the language syntax rules were highly modular and documented, other open-source developers ripped TextMate's `.tmLanguage` engine out of the app framework entirely. [link](https://www.reddit.com/r/apple/comments/d4rqqo/textmate%5F20%5Freleased/)

Today, every major text editor uses TextMate's core innovation:

- **VS Code:** Microsoft explicitly adopted the **TextMate Grammar layout** to handle syntax parsing for its massive ecosystem.
- **GitHub:** The actual code-viewing interfaces on GitHub used TextMate grammar themes for years to highlight user repositories.

Ultimately, going open source saved TextMate from vanishing into the void of obsolete software. It preserved the editor as a perfectly functional, blazing-fast native macOS utility for purists, while permanently donating its structural components to the modern web. [link](https://publish.obsidian.md/xybre/permalink/5f66e2bd-5ed1-4f19-b7f9-acdede15800d)

Are you interested in exploring how to **extract/use TextMate grammar `.tmLanguage` files** for your own custom coding project, or would you like a breakdown of **modern native-Mac alternatives** (like Nova or Zed) that carry its spirit today? [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)

- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  Throughout 2007, the core application changed only minimally, though its “language bundles” continued to advance. In June 2009, Te...
- [link](https://www.reddit.com/r/macapps/comments/1mp50ne/whatever%5Fhappened%5Fto%5Ftextmate/)\
  Reddit·r/macapps\
  Whatever happened to TextMate? : r/macapps - Reddit\
  Aug 13, 2025 — 1.x was a closed source text editor with a diverse bundles environment. 2.0 was needed around 2005, announced 2006 and didn't deli...
- [link](https://arstechnica.com/gadgets/2012/08/odgaard-i-will-continue-working-on-textmate-as-long-as-i-am-a-mac-user/)\
  Ars Technica\
  Odgaard: "I will continue working on TextMate as long as I am ...\
  Aug 10, 2012 — It's easy to see why skeptics aren't quite ready to believe Odgaard, however. TextMate's design, extensible “bundle” plug-in archi...

Show all

## why considered feature complete

TextMate is considered **"feature-complete"** <mark>because its architect, Allan Odgaard, built it to adhere strictly to the<span> </span><strong>UNIX philosophy: an application should do one thing, do it exceptionally well, and step aside \[2].</strong></mark>

Unlike modern IDEs that constantly grow in size by adding built-in terminals, AI assistants, and browser previews, TextMate was explicitly designed to be a **pure graphical text interface for your operating system's shell**. Once that interface achieved flawless stability, there was simply nothing left to add without violating its core design principles.

The specific reasons TextMate reached this definitive state include:

### 🧩 1. The Power is in the Bundles, Not the App

The core TextMate application is essentially an empty, hyper-optimized rendering canvas. Nearly every actual "feature"—from code execution to auto-completion—is handled by external, open-source **Language Bundles** written in Python, Ruby, or Shell scripts.

- Because the app's internal bundle API is mature and fully fleshed out, new programming languages (like Mojo or recent versions of Swift) can be supported entirely by updating individual repository bundles.
- The underlying editor application doesn't need to change or receive updates to gain new capabilities.

### 🧵 2. Low-Level Architecture Goals Were Met

The grueling 13-year rewrite that resulted in TextMate 2.0 was not done to add flashy buttons, but to completely re-engineer the foundation. By the 2019 final release, Odgaard had successfully implemented his strict architectural wish list:

- A fully multithreaded text rendering kernel (preventing the UI from freezing during heavy file I/O).
- A highly complex, Unicode-aware text indexing engine.
- Native, robust support for multi-caret editing and branching undo histories.

With these massive computer science hurdles solved, the editor achieved structural maturity.

### 🍎 3. Flawless Native macOS Integration

TextMate was built from day one using pure, native Apple frameworks (Cocoa/Objective-C++), completely rejecting cross-platform toolkits like Electron.

- It already supports native full-screen modes, macOS file-saving conventions, custom system keybindings, and low-latency rendering.
- Because it perfectly matches the native look, feel, and speed of a macOS utility app, any further interface changes would just be unnecessary bloat.

### 🛑 4. Rejection of the "Software-as-a-Service" Treadmill

Commercial modern editors operate on a continuous deployment treadmill because they need to retain paid subscribers or justify massive corporate budgets (such as Microsoft's funding of VS Code). Because TextMate is a free, open-source passion project under the GPLv3 license, it is completely liberated from the pressure of "fake innovation"—there is no marketing requirement to manufacture new features just to stay relevant in tech news loops.

In short, TextMate is feature-complete because it behaves like a **digital hammer**. A hammer does not need an update or a new menu layout to drive a nail; it is a mature, finished tool. TextMate remains exactly that: a reliable, blazing-fast, permanent fixture of the macOS developer toolkit.

If you want to see how this minimalism holds up today, I can help you **configure TextMate** for a modern programming workflow, or we can look at **how to convert modern themes** into the classic TextMate format. What would you like to explore next?

## highly requested not implemented features

While TextMate 2.0 eventually solved some massive community pain points—such as adding split views, basic multi-carets, and branching undo history—Allan Odgaard’s strict minimalism meant that **many highly requested features were intentionally rejected or left completely unimplemented**. [link](https://macromates.com/blog/2011/multiple-carets/)

Because TextMate focuses exclusively on acting as a lightweight canvas for the macOS terminal, it misses almost all the "smart" features that define modern development environments like VS Code or Sublime Text. [link](https://www.g2.com/compare/textmate-vs-visual-studio-code)

***

### 🧠 1. Intelligent IntelliSense & Code Completion

While TextMate lets you type a word and press `Esc` to cycle through matching words already written in that specific file, it **completely lacks context-aware code hinting or semantic completion**. [link](https://en.wikipedia.org/wiki/TextMate)

- **What it lacks:** It cannot analyze your code structure, look up active object variables from imported libraries, or guide you through a programming language's verbose API syntax. [link](https://en.wikipedia.org/wiki/TextMate)
- **The Missing Modern Fix:** Modern editors rely on the **Language Server Protocol (LSP)** to provide IDE-like code analysis. TextMate has no native, modern LSP integration out of the box, making it far more manual to write code in. [link](https://www.reddit.com/r/vscode/comments/oa8d5f/lsp%5Fsemantic%5Fhighlighting%5Fin%5Fplace%5Fof%5Ftextmate/)

### 📟 2. Integrated Terminal Panel

Modern web developers expect an inline console at the bottom of their window to run servers, install packages, and manage files.

- **The Deficit:** TextMate **does not have a built-in terminal integration panel**.
- **The Philosophy:** Odgaard expected developers to use Apple's native _Terminal.app_ or _iTerm2_ side-by-side with TextMate, utilizing terminal hotkeys to pass snippets back and forth rather than stuffing a shell pipeline directly into the text window's GUI. [link](https://stackshare.io/stackups/textmate-vs-visual-studio-code)

### 🌿 3. Native Version Control & Git Integration

Modern coding platforms include visual side-bars highlighting modified files, staging changes, resolving conflict markers, and pushing code straight to GitHub natively. [link](https://www.g2.com/compare/textmate-vs-visual-studio-code)

- **The Deficit:** TextMate **lacks native source control panels**. While it contains open-source language bundles that can trigger basic Git bash commands via the macro menu, it lacks a dedicated visual interface for managing repositories or viewing version histories. [link](https://www.g2.com/compare/textmate-vs-visual-studio-code)

### 🪟 4. Deep Editor Extensibility (Lisp/JS Extension)

In text editors like Emacs (via Emacs Lisp) or VS Code (via JavaScript/TypeScript), extensions have deep, total authority to restructure the main application interface, inject custom graphical sidebars, build settings menus, or overlay diagnostic warnings directly onto your screen. [link](https://en.wikipedia.org/wiki/TextMate)

- **The Deficit:** TextMate is **not tightly coupled to a core extension language**. Its internal configuration rules follow native macOS property lists (`.plist`), and its macros are restricted to processing linear text through terminal commands. You cannot write a plugin that radically changes how the TextMate user interface functions or looks. [link](https://en.wikipedia.org/wiki/TextMate)

### 💻 5. Multi-Platform Support (Cross-Platform Execution)

Because TextMate’s speed relies on a hard binding to core Apple engineering structures (Objective-C++ and Cocoa layout kernels), it **cannot run on Windows or Linux**. [link](https://chrischinchilla.com/blog/2024/7-alternative-text-editors-and-ides-for-macos/)

- For mixed-OS software teams or developers who switch between a Mac desktop and a Windows laptop, this permanently disqualified TextMate as a universal option, solidifying cross-platform ecosystems as the industry norm. [link](https://www.g2.com/compare/textmate-vs-visual-studio-code)

***

Are you trying to decide whether to **switch to a native Mac editor** that still retains TextMate's speed but includes these missing features (like Nova or Zed), or are you trying to **replicate a classic TextMate macro workflow** elsewhere?

- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  No built-in HTML validator — because TextMate uses the W3C validator for HTML validation, users must have an active network connec...
- [link](https://macromates.com/blog/2009/working-on-it/)\
  TextMate for macOS\
  Working on It - TextMate\
  Jun 14, 2009 — The requests for TextMate 1 have mostly been incremental additions such as split views, chunked undo, and editing over SFTP. But T...
- [link](https://www.g2.com/compare/textmate-vs-visual-studio-code)\
  G2\
  Textmate vs. Visual Studio Code Comparison 2026 - G2\
  Aug 14, 2026 — Powered by real user reviews. \* G2 reviewers report that Visual Studio Code excels in overall user satisfaction, boasting a signif...

Show all

## how is it written

**TextMate is written as a native macOS desktop application using Objective-C++ and Apple's foundational Cocoa frameworks**. [link](https://github.com/textmate)

Its underlying design completely rejects cross-platform toolkits (like Electron, web-tech wrappers, or Java swing setups) in favor of deep operating system integration. Allan Odgaard engineered TextMate to look like a standard Mac application on the outside, but operate like a raw **UNIX compiler and text layout machine** on the inside.

A look into the [TextMate GitHub Repository](https://github.com/textmate) reveals exactly how its architecture is constructed: [link](https://github.com/textmate)

***

### 🎨 1. The Core Languages: Objective-C++ (`.mm`)

The bulk of the main desktop application is written in **Objective-C++** (a hybrid language that allows standard Apple Objective-C runtime code to interoperate seamlessly with raw C++ classes). [link](https://github.com/textmate)

- **C++ for the Engine:** The background performance layers—like the asynchronous file indexing system, regular expression parsing pipelines, and raw document buffer logic—are written in strict C++. This ensures that parsing hundreds of thousands of lines of code is blindingly fast.
- **Objective-C for the UI:** The user interface elements, sidebars, tabs, and window layout frameworks are built with Objective-C using Apple's legacy **AppKit / Cocoa desktop frameworks**. [link](https://macromates.com/manual/en/key%5Fbindings)

### ⚙️ 2. The Text Engine: A Custom NSTextView Mimic

Standard Mac apps use Apple's out-of-the-box text system layer (`NSTextView`) to handle simple typing fields. However, `NSTextView` was historically too slow and rigid for complex developer features like code folding, massive macro loops, or column selection. [link](https://macromates.com/manual/en/working%5Fwith%5Ftext)

- Odgaard completely re-engineered a **custom layout engine** (codenamed "Oak") from the ground up.
- It mimics the native macOS standard API interactions but is fully decoupled into thread-safe memory chunks, allowing a background thread to calculate syntax tokens without locking up the user interface when typing rapidly. [link](https://macromates.com/manual/en/working%5Fwith%5Ftext)

### 🧩 3. The Grammar Engine: Oniguruma Regex & Plists

TextMate’s legendary syntax highlighting and scoping system isn't hardcoded into the application code. Instead, it uses a **declarative regex parsing framework**: [link](https://markdown-all-in-one.github.io/docs/contributing/textmate-language-grammar.html)

- **Oniguruma Regex:** TextMate is explicitly linked against the open-source **Oniguruma regular expression library**, which handles high-performance pattern matching across different text encodings. [link](https://markdown-all-in-one.github.io/docs/contributing/textmate-language-grammar.html)
- **Property Lists (`.plist`):** Language definitions—like how a string or keyword is defined in JavaScript or Ruby—are written as native Apple **Property Lists (XML format)**. The application reads these lists at startup to generate abstract syntax trees on the fly. [link](https://github.com/microsoft/vscode-textmate)

### 🐚 4. The Extensibility Layer: Unix Inter-process Pipes

While apps like VS Code require you to write extensions using modern JavaScript engines, TextMate’s macro system is essentially a **UNIX pipeline gateway**. [link](https://en.wikipedia.org/wiki/TextMate)

- When you run a command in TextMate (like reformatting a block of HTML or running a script), the editor spawns a native background sub-process using standard bash, Python, or Ruby environments built directly into macOS.
- The editor takes the selected block of text from your window, feeds it into the terminal script via `stdin`, reads the text output via `stdout`, and smoothly redraws the result back onto your canvas. [link](https://en.wikipedia.org/wiki/TextMate)

***

### 📊 The Architectural Breakdown

| Layer               | Technology Used                      | Responsibility                                                                    |
| ------------------- | ------------------------------------ | --------------------------------------------------------------------------------- |
| **User Interface**  | Objective-C & AppKit Frameworks      | Drawing tabs, sidebars, window chrome, and managing native menus.                 |
| **Parsing Engine**  | C++ & Oniguruma Regex Engine         | Reading regex tokens to assign syntax colors instantly to text inputs.            |
| **Extension Model** | Plists (`.plist`) & Terminal Scripts | Powering snippet keys, tab triggers, and external macros via the user's OS shell. |

Because it is written this way, TextMate compiles straight down to a **native binary framework**. It skips the resource-heavy overhead of running an entire embedded web browser (Electron) to host an editor, which is why it launches instantly and consumes a tiny fraction of the RAM used by modern alternatives.

Would you like to examine **how its Objective-C++ code interacts** with standard macOS window layers, or look at an **example of a `.tmLanguage` property list file** to see how Odgaard structured the syntax definitions?

- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  TextMate. Article · Talk. Language; Download PDF; Watch · Edit. TextMate is a free and open-source general-purpose GUI text editor...
- [link](https://macromates.com/manual/en/working%5Fwith%5Ftext)\
  TextMate for macOS\
  Working With Text — TextMate 1.x Manual\
  TextMate is a program that mimics the NSTextView system component, which is used by applications like Mail and Safari. TextMate ha...
- [link](https://markdown-all-in-one.github.io/docs/contributing/textmate-language-grammar.html)\
  GitHub Pages documentation\
  TextMate grammar guide | Markdown All in One Documentation\
  TextMate grammar (TM grammar) is a descriptive way to specify tokenization rules. It was invented for the TextMate editor and has ...

Show all

## initial history

The **initial history of TextMate** is a classic story of an underdog tool filling a desperate gap in a stagnant market. Launched in late 2004, it went from a minimalist personal project to the defining Mac code editor in under two years. [link](https://en.wikipedia.org/wiki/TextMate)

***

### 🛠️ 1. The Spark of Frustration (Early 2004)

In 2004, the Mac text-editing market was dominated by [BBEdit](https://www.barebones.com/products/bbedit/), an entrenched tool that many developers felt had grown heavy and rigid. Hardcore Linux and UNIX programmers switching over to the emerging OS X ecosystem felt trapped between classic, plain desktop editors and terminal-based tools like Vim or Emacs. [link](https://macromates.com/blog/2004/hello-world/)

Allan Odgaard felt this same friction. He wanted an editor that felt like a beautiful, native Mac app on the outside but possessed the automation power of a UNIX terminal pipeline under the hood. He committed himself to 5 months of full-time, solitary development to solve his own problem. [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)

***

### 📦 2. The Bare-Bones 1.0 Launch (October 2004)

On **October 5, 2004**, Odgaard released **TextMate 1.0**. By modern standards, the initial launch was shockingly sparse—so spartan that it left several contemporary software reviewers deeply confused: [link](https://en.wikipedia.org/wiki/TextMate)

- It had **no preferences window** (users had to edit configuration defaults via terminal defaults commands).
- It had **no toolbar**, no printing functions, and no built-in FTP integrations.
- It only shipped with a tiny handful of programming languages because the concept of "Language Bundles" was brand new. [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)

Despite its missing standard features, early adopters were hooked by how fast it was and how cleanly it handled code folding and keyboard navigation. [link](https://www.dyce.com/textmate-101.html)

***

### 📈 3. Rapid Iteration (Late 2004–2005)

Odgaard listened closely to the community, iterating at a breakneck pace.

- By **December 2004 (v1.0.2)**, he added a proper multi-page macOS preferences window and printing capabilities.
- Over the course of 2005, the editor matured into the famous **TextMate 1.5** via a series of highly collaborative beta cycles. [link](https://macromates.com/blog/2004/textmate-102-releases/)

During this period, Odgaard perfected the declarative architecture that allowed users to build custom **Language Bundles** using plist configuration sheets and regular expressions. This meant the community could build syntax highlighting for a new language in a single afternoon without touching the application’s core code. [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)

***

### 🚀 4. The Ruby on Rails Boom (2005)

TextMate’s initial history cannot be separated from **David Heinemeier Hansson (DHH)**, the creator of the web framework **Ruby on Rails**.

DHH loved TextMate because it perfectly aligned with Ruby's elegant syntax structure. In 2005, DHH published a viral video demonstrating how to build a fully functional blog engine in 15 minutes using Ruby on Rails. Throughout the video, his editor of choice was TextMate, showing off its rapid-fire snippet completions, tab-triggers, and macro controls.

Virtually overnight, the web development community exploded, and thousands of developers bought Mac computers specifically to use TextMate. By **2006**, the initial era peaked when TextMate won the **Apple Design Award** for Best Developer Tool, cementing it as a legendary chapter in Mac software design.

Would you like to look closer at **how the early community built those first Language Bundles**, or see some of the **original 2004 launch blog posts** from MacroMates? [link](https://macromates.com/blog/2004/hello-world/)

AI can make mistakes, so double-check responses

- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  History. edit. TextMate 1.0 was released on 5 October 2004, after 5 months of development, followed by version 1.0.1 on 21 October...
- [link](https://macromates.com/blog/2004/hello-world/)\
  TextMate for macOS\
  TextMate 1.0 is finally here!\
  Oct 5, 2004 — Anything vaguely related to TextMate and macOS. 05 October 2004 Posted by David Hansson Next post: I haven't received my license k...
- [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)\
  Arkaitz Zubiaga\
  TextMate - Wikipedia, the free encyclopedia\
  Apr 2, 2009 — In 2004, Allan Odgaard began development on TextMate. TextMate 1.0 came out on 5 October 2004, after 5 months of full-time develop...

Show all

## how is it developed initially

The initial development of TextMate is a classic example of **ruthless "minimum viable product" (MVP) engineering**. It was built under strict hardware and time constraints by a developer who prioritized core, highly disruptive abstractions over standard software filler. [link](https://randsinrepose.com/archives/interview-allan/)

The original version was developed through a unique combination of factors:

### ⏱️ 1. The 4-Month Absolute Clean Slate

In mid-2004, Allan Odgaard set out with a completely clean slate. He gave himself roughly **four to five months of full-time, solitary development** to build an entirely new text editor from scratch. Because he was working completely alone and funding the project out of pocket, his feature-selection philosophy for the 1.0 build was fiercely protective of his time. Every single feature idea was met with a strict filter: _"Do we absolutely need this for a 1.0 release?"_ [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)

### 💻 2. Painfully Slow "Hardware Bottlenecks"

By modern standards, the environment Odgaard used to code TextMate 1.0 sounds incredibly grueling. He built the original application on a **733 MHz PowerPC G4 Mac**. [link](https://macromates.com/blog/2004/hello-world/)

- **The 45-Minute Compilation:** In the official [MacroMates 1.0 Launch Blog Post](https://macromates.com/blog/2004/hello-world/), Odgaard revealed that performing a complete, clean build of the application took **45 minutes** on his machine. [link](https://macromates.com/blog/2004/hello-world/)
- This massive delay severely penalized coding mistakes and forced him to be incredibly precise with his architecture. He jokingly begged early adopters to register the software immediately so he could use the initial revenue to buy a Dual G5 Mac just to speed up his compiler times. [link](https://macromates.com/blog/2004/hello-world/)

### 📐 3. Prioritizing Innovation Over Standard Features

Because compilation times were slow and his launch window was tight, Odgaard skipped almost all the common "bloat" features that traditional desktop editors launched with. He believed that if his core concepts were strong enough, users wouldn't mind a spartan interface. [link](https://en.wikipedia.org/wiki/TextMate)

When TextMate 1.0 dropped on October 5, 2004, it had: [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)

- **No Preferences Window:** Users had to configure the application by typing raw terminal defaults strings directly into the macOS shell.
- **No Main Toolbar:** It lacked the standard graphical shortcut buttons that populated competitors like BBEdit.
- **No Native FTP or Printing Support:** Basic capabilities like sending a file to a paper printer or connecting to a remote server were omitted completely. [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)

Instead, Odgaard spent those precious 4 months obsessing over **three non-negotiable features** he felt the market desperately lacked: **code folding (reveal arrows), tab-triggered snippets, and recordable macros**. [link](https://randsinrepose.com/archives/interview-allan/)

### 🗺️ 4. The Hidden Language Grammar Discovery

Originally, TextMate debuted with only a tiny handful of programming languages. Odgaard had designed a brilliant, flexible syntax parser format based on property lists (`.plist`), but he **hid the documentation for how to write them deep inside the TextMate help book**. [link](https://macromates.com/blog/2005/language-grammars/)

He wanted to see if anyone would naturally find it. To his surprise, early adopters actively hunted down the hidden specifications, reverse-engineered the property lists, and began coding and submitting custom grammar files for languages like Python, Java, and Perl. Seeing this massive community enthusiasm, Odgaard built a formal **"Bundle Editor" UI** into the subsequent 1.1 beta releases, allowing users to build extensions visually. This turned TextMate into the world's first modern, community-extensible editor. [link](https://blog.robenkleene.com/2020/06/17/the-enduring-influence-of-textmate/)

Would you like to know more about **David Heinemeier Hansson's role** during this initial launch period, or look at the **early community reception and reviews** from 2004?

- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  TextMate 1.0 was released on 5 October 2004, after 5 months of development, followed by version 1.0. 1 on 21 October 2004. The rel...
- [link](https://randsinrepose.com/archives/interview-allan/)\
  Rands in Repose\
  Interview: Allan Odgaard - Rands in Repose\
  Jan 26, 2007 — According to Wikipedia, you did 5 months of development to get a 1.0 release out the door. How'd you pick the feature set for this...
- [link](https://macromates.com/blog/2004/hello-world/)\
  TextMate for macOS\
  TextMate 1.0 is finally here!\
  Oct 5, 2004 — ... will be promising enough that you'll feel comfortable jumping on board from the start. So we certainly respect your right to t...

Show all

## all initial features

When Allan Odgaard launched **TextMate 1.0** on [October 5, 2004](https://macromates.com/blog/2004/hello-world/), his core strategy was to **implement a tiny, hyper-focused feature set exceptionally well**. [link](https://en.wikipedia.org/wiki/TextMate)

Because he was rushing a minimum viable product to market on a tight deadline, the editor was notoriously spartan. It explicitly omitted common user interface conventions—such as a preferences window, graphical toolbars, native FTP, or printing support. [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)

Instead, the **complete list of initial core features** included in the true 1.0 debut consisted entirely of these foundational innovations:

### 🧩 1. The Extensible Language Bundle System

Instead of hardcoding language specifications into the application's binary code, Odgaard designed an early iteration of his **declarative scope architecture**. [link](https://software.berkeley.edu/textmate)

- **Custom Grammars:** The editor read plain text Property Lists (`.plist`) that mapped out syntax rules.
- **Initial Languages:** The very first build launched with built-in out-of-the-box support for a tiny handful of web and programming formats, specifically **C++, Ruby, PHP, HTML, CSS, and JavaScript**. [link](https://macromates.com/blog/2004/hello-world/)

### 🔽 2. Nested Code Folding (Reveal Arrows)

TextMate 1.0 stood out dramatically from standard Mac text editors by offering dynamic code folding. [link](https://www.dyce.com/textmate-101.html)

- The engine parsed files by nested structures—such as curly brackets, function definitions, HTML tags, or loops.
- It automatically drew **interactive "reveal arrows"** in the left margin, allowing users to collapse or expand heavy blocks of nested text with a single click to manage complex files mentally. [link](https://www.dyce.com/textmate-101.html)

### 📑 3. Tab-Triggered Snippets

This was the "killer feature" that instantly won over web developers. Instead of forcing users to navigate dropdown menus or memorize hundreds of hotkeys to paste boilerplate templates, TextMate introduced semantic expansion:

- You could type a short, mnemonic keyword (such as an HTML tag name or a loop block initiator) and press the `Tab` key.
- The editor instantly expanded that word into a full template block of formatted code, placing your cursor right at the first variable point.

### 🔴 4. Recordable Macros

To eliminate the tedium of repetitive daily editing tasks, TextMate 1.0 shipped with an on-the-fly macro recorder. Users could hit a shortcut to start recording, perform a complex series of text operations or find-and-replace queries across multiple lines, stop the recording, and replay that exact keystroke workflow instantly with a single keyboard shortcut.

### 🗂️ 5. Project Folders and the Document Drawer

Rather than dealing with a cluttered desktop full of independent floating text windows, TextMate let users group files together as unified cohesive workspaces. [link](https://www.dyce.com/textmate-101.html)

- It made use of a **sliding side drawer interface** (a hallmark design aesthetic of early macOS OS X application UI) to let users scan, select, and hop between different application project files instantly. [link](https://www.dyce.com/textmate-101.html)

### 🐚 6. Basic UNIX Shell Pipe Integration

Reflecting Odgaard's UNIX-enthusiast background, the initial build could natively spawn basic background sub-processes. It allowed users to feed selected blocks of text directly out to command-line utilities, run filters on them, and cleanly stream the modified result right back into the active graphical editing canvas. [link](https://software.berkeley.edu/textmate)

***

If you want to know more, I can break down **how reviewers reacted to this missing-feature layout** in 2004, or look at the **exact features added just a few months later** in version 1.0.2. What interests you?

- [link](https://software.berkeley.edu/textmate)\
  Software @ Berkeley\
  TextMate | Software @ Berkeley\
  About. Though its users are mostly programmers, and its basic feature set may require more learning than simpler graphical editors...
- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  TextMate 1.0 was released on 5 October 2004, after 5 months of development, followed by version 1.0. 1 on 21 October 2004. The rel...
- [link](https://www.dyce.com/textmate-101.html)\
  Dyce & Sons Ltd.\
  Textmate 1.0.1 - Dyce & Sons\
  Nov 25, 2004 — Textmate 1.0.1. Thursday 25th November, 2004. Some talk some of vi and emacs, and some of skEdit. But the majority of serious Mac ...

Show all

## all later added features

Following the spartan 1.0 release in October 2004, Allan Odgaard and the open-source community spent more than a decade iteratively expanding the application. While the initial release was barely more than a basic typing canvas, the subsequent versions transformed it into a deeply capable text processor.

The progression of **all major features added to TextMate after the initial 1.0 launch** spans several key eras:

### 🛠️ The Polishing Era (TextMate 1.0.2 - December 2004)

Just two months after the bare-bones debut, Odgaard scrambled to add foundational desktop features that reviewers slammed the initial build for missing:

- **Multi-Page Preferences Window:** Replaced the tedious requirement of configuring the app using raw terminal command-line scripts.
- **Native Printing Support:** Allowed users to print standard code layouts and basic web previews directly from the application.
- **The ODB Editor Suite:** Integrated a background framework enabling TextMate to be safely designated as an external helper editor for third-party macOS applications. [link](https://macromates.com/blog/2004/textmate-102-releases/)

### 🚀 The Maturity Era (TextMate 1.5 - January 2006)

Version 1.5 won the Apple Design Award and became the definitive Mac developer workspace by legalizing deep, community-driven customization: [link](https://en.wikipedia.org/wiki/TextMate)

- **The Interactive Bundle Editor:** A dedicated layout GUI that allowed users to easily build, configure, edit, and share their own syntax themes, macros, and tab-snippets visually. [link](http://taggedwiki.zubiaga.org/new%5Fcontent/ae7cf789d84ffe99b0e64d5d202470fa)
- **The Visual Theme Manager:** Added support for importing and customizing background/foreground styling configurations (`.tmTheme`) via a user-friendly preferences panel. [link](https://en.wikipedia.org/wiki/TextMate)
- **Status Bar & Symbol Pop-ups:** A new lower status bar that dynamically generated a "clickable list of functions" or headings within the current file, allowing developers to jump across heavy files instantly. [link](https://en.wikipedia.org/wiki/TextMate)
- **Advanced Find & Replace Engine:** Upgraded the searching module by linking it natively against the powerful **Oniguruma Regular Expression library** to support multi-line pattern matching. [link](https://en.wikipedia.org/wiki/TextMate)
- **Clipboard History:** Introduced a local text clipboard stack that remembered multiple sequentially copied text blocks, allowing them to be retrieved or pasted selectively. [link](https://macromates.com/)
- **Column / Block Editing Mode:** Enabled users to hold down modifiers to select vertical rectangles of text, allowing the same text block to be appended simultaneously across hundreds of rows. [link](https://en.wikipedia.org/wiki/TextMate)

### 🔄 The Rewrite Era (TextMate 2.0 - 2011 Alpha / 2019 Stable Release)

The multi-year architectural rewrite was specifically designed to handle advanced abstractions that version 1.0’s core engine could not support natively: [link](https://macromates.com/blog/2010/why-2-0-is-not-developed-in-the-open/)

- **The Full File Browser System:** Transformed the simple, old sliding document "drawer" into a highly robust project file explorer capable of bulk file creation, duplicating, moving, and linking files directly from the window sidebar.
- **Native Split-Screen Views:** After years of community demands, the custom "Oak" layout engine finally decoupled text buffers to support looking at multiple files side-by-side or stacked horizontally.
- **Multiple Carets (Multi-Cursor Editing):** The text layout framework was updated to track dozens of active cursors simultaneously, making on-the-fly bulk editing effortless.
- **Branching (Chunked) Undo History:** Prevented the loss of text progress by allowing developers to navigate deep paths of undo/redo chains without wiping out alternative historical edit paths.
- **Asynchronous Multi-Threading Framework:** Moved heavy tasks like disk-saving, syntax tokenization, spell-checking, and network queries onto background threads, entirely preventing the main graphical user interface from stuttering or freezing.
- **Scoped Project Rules (`.tm_properties`):** Allowed individual project roots, sub-folders, or distinct files to have localized configurations—meaning indentation sizes or theme selections could adjust automatically depending on what directory was open.
- **The `rmate` Command Utility:** A specialized terminal protocol that let developers safely open, edit, and stream files located on remote SSH servers directly inside their native local TextMate window layout. [link](https://macromates.com/blog/2013/2-0-status-and-faq/)

### 💻 Modern Preservation Era (2020 - Present)

Following the open-sourcing of the app, modern updates focused on keeping TextMate structurally compatible with evolving modern architecture: [link](https://github.com/textmate/textmate/blob/master/Applications/TextMate/about/Changes.md)

- **Universal Apple Silicon Binary Compilation:** Compiled directly to run with native, un-emulated speed on modern M-series Mac chip architectures.
- **APFS File Inode Adaptations:** Altered the traditional file-saving engine to handle Apple’s modern APFS filing protocol natively, balancing file preservation with modern directory write conventions. [link](https://github.com/textmate/textmate/blob/master/Applications/TextMate/about/Changes.md)

Would you like to focus on how to use **`rmate` for remote coding workflows**, or explore **how to customize project-specific parameters** using a `.tm_properties` configuration file?

- [link](https://macromates.com/blog/2010/why-2-0-is-not-developed-in-the-open/)\
  TextMate for macOS\
  Why 2.0 is not Developed in the Open - TextMate\
  Jan 6, 2010 — Why 2.0 is not Developed in the Open \* Allow threaded operations in a transparent way, not having (threaded) parser, spell checker...
- [link](https://en.wikipedia.org/wiki/TextMate)\
  Wikipedia\
  TextMate - Wikipedia\
  TextMate 1.0. 2 came out on 10 December 2004. In the series of TextMate 1.1 betas, TextMate gained several new features, including...
- [link](https://mjtsai.com/blog/2004/10/06/textmate-10/)\
  Michael Tsai\
  Blog - TextMate 1.0 - Michael Tsai\
  Oct 6, 2004 — TextMate 1.0 \* Command-Delete doesn't do anything. \* Page Up and Page Down move the insertion point—instant disqualification. \* Th...

Show all

