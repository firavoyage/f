<!-- inspired by gnome builder -->

vala language

**Vala** is an <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">object-oriented programming language designed to provide a modern, high-level syntax—heavily inspired by C# and Java—while compiling directly into highly efficient <strong>C source code and native binaries</strong></mark>. Conceived in 2006, it was specifically built to leverage the **GNOME ecosystem**, utilizing the [GObject type system](https://wiki.gnome.org/Projects/Vala) to eliminate the heavy memory and processing runtime overhead associated with traditional virtual machines or managed language environments. \[[1](https://vala.dev/), [2](https://en.wikipedia.org/wiki/Vala%5F%28programming%5Flanguage%29), [3](https://wiki.gnome.org/Projects/Vala)]

Core Language Features

- **C# / Java-Like Syntax**: Offers modern constructs such as classes, interfaces, polymorphism, and lambda expressions without the verbosity of low-level C.
- **No Virtual Machine**: Compiles down to standard C, allowing programs to run at near-native C speed with a highly stable Application Binary Interface (ABI).
- **Assisted Memory Management**: Uses Automatic Reference Counting (ARC) to automatically handle memory without the stop-the-world pauses of a standard garbage collector.
- **Native GNOME Support**: Built-in integrations for [GLib, GObject, and GTK](https://vala.dev/) allow developers to easily create native Linux desktop applications.
- **Strict Nullability Checks**: Method parameters and variable types can be explicitly marked with a `?` modifier to catch null pointer errors during static compilation. \[[1](https://vala.dev/about/), [2](https://medium.com/@linuxrootroom/vala-the-hidden-gem-of-programming-f8f606bfabc7), [3](https://dev.to/goober99/vala-deserves-a-closer-look-m56), [4](https://docs.vala.dev/tutorials/programming-language/main), [5](https://docs.fedoraproject.org/en-US/defensive-coding/programming-languages/Vala/), [6](https://docs.vala.dev/tutorials/programming-language/main/02-00-basics/02-07-language-elements.html), [7](https://vala.dev/), [8](https://en.wikipedia.org/wiki/Vala%5F%28programming%5Flanguage%29), [9](https://wiki.gnome.org/Projects/Vala)]

Basic Code Example

Vala uses a clean structure where functions look like standard object-oriented code, but naming conventions remain lowercase with underscores to stay consistent with the underlying C libraries. \[[1](https://docs.vala.dev/tutorials/programming-language/main/02-00-basics/02-07-language-elements.html)]

vala

```
using GLib;

public class HelloWorld : Object {
    public void greeting() {
        stdout.printf("Hello, World!\n");
    }

    public static int main(string[] args) {
        var app = new HelloWorld();
        app.greeting();
        return 0;
    }
}
```

Use code with caution.

Ecosystem and Use Cases

Vala is best known as the programming engine behind the **elementary OS** ecosystem, where it powers the Pantheon desktop environment and its native applications. It is also utilized by tools like **Frida**, a popular dynamic instrumentation toolkit. \[[1](https://www.reddit.com/r/vala/comments/5s8mhj/is%5Fvala%5Fdead/), [2](https://www.reddit.com/r/elementaryos/comments/41hwt6/vala%5Fvs%5Fc%5Fccc/), [3](https://news.ycombinator.com/item?id=39969131), [4](https://www.reddit.com/r/vala/comments/5s8mhj/is%5Fvala%5Fdead/)]

While it excels at building lightweight GTK software and command-line tools without bloating application packages, its community is smaller than mainstream languages. Mainstream Linux application development has increasingly shifted toward platforms like Rust or JavaScript (GJS) for new projects, but Vala remains heavily actively maintained and valued for its unique bridge between high-level development and C performance. \[[1](https://www.reddit.com/r/learnprogramming/comments/10wotud/vala%5Fas%5Fa%5Ffirst%5Fprogramming%5Flanguage/), [2](https://www.reddit.com/r/programming/comments/5ttkws/a%5Fgnome%5Fdevelopers%5Farguments%5Fon%5Fvala%5Fbeing%5Fa%5Fdead/), [3](https://vala.dev/), [4](https://dev.to/goober99/vala-deserves-a-closer-look-m56), [5](https://www.reddit.com/r/vala/comments/5s8mhj/is%5Fvala%5Fdead/)]

If you are planning a specific project, please let me know **what kind of application you are building** or **what operating system you are targeting**. I can help you decide if Vala is the right choice or write a custom boilerplate script for you.

- [link](https://vala.dev/)\
  Vala Programming Language\
  Why Vala? Productivity. Comfortably write your code in an object-oriented way with high level abstractions, while having access to...\
  Vala Programming Language
- [link](https://en.wikipedia.org/wiki/Vala%5F%28programming%5Flanguage%29)\
  Vala (programming language) - Wikipedia\
  Description. Vala is a programming language that combines the high-level build-time performance of scripting languages with the ru...\
  Wikipedia
- [link](https://www.reddit.com/r/vala/comments/5s8mhj/is%5Fvala%5Fdead/)\
  Is Vala Dead? - Reddit\
  Feb 5, 2017 — Comments Section \* DanielFore. • 9y ago. elementary still submits patches 🤷🏻‍♂️ \* egeeirl. • 9y ago. As far as I know, Elementar...\
  Reddit·r/vala

Show all

You said: why vala

Vala exists to bridge the gap between high-level developer productivity and low-level system performance.

Before Vala, Linux desktop developers faced a frustrating compromise: write code in fast but complex C, or use productive but resource-heavy languages like Java or C#. Vala solves this by acting as a modern syntax wrapper over traditional C.

Key Reasons to Choose Vala

- **Modern Syntax, Native Speed**: You write code using modern features like classes, interfaces, lambdas, and exceptions, but the compiler outputs standard C code that runs at native speed.
- **No Virtual Machine or Heavy Runtime**: Unlike C# or Java, Vala does not require a bulky virtual machine. Applications start instantly and use very little memory.
- **Automatic Reference Counting (ARC)**: It manages memory automatically by tracking object references, giving you the safety of a garbage-collected language without the random performance stutters.
- **First-Class GTK & GNOME Integration**: It was custom-built for the GNOME ecosystem. It interfaces perfectly with the GObject system, making it incredibly easy to build native Linux desktop interfaces.
- **Seamless C Compatibility**: Vala can use existing C libraries directly through VAPI (Vala API) files, allowing you to tap into decades of existing software without writing complex wrappers.

If you are weighing your options, let me know:

- What **other languages** are you considering?
- What **type of application** are you planning to build?

I can provide a direct comparison to help you choose the best tool for your project.

You said: why not vala

While Vala offers impressive speed and syntax, it has significant drawbacks that often lead developers to choose alternative languages.

Major Limitations of Vala

- **Small Ecosystem**: The community is tiny compared to mainstream languages, resulting in fewer libraries, stack-overflow answers, and third-party tools.
- **Linux-Centric**: It is tightly coupled with GLib and the GNOME ecosystem, making cross-platform development for Windows or macOS difficult and poorly supported.
- **Debugging Complexity**: The Vala compiler translates your code into C before building it, meaning compiler errors or debugger outputs (like GDB) often require you to understand the generated C code rather than your original Vala code.
- **Slower Language Evolution**: Development is slow because it relies on a small group of volunteer maintainers, causing it to lag behind features seen in rapidly growing modern languages.
- **The Rise of Rust**: For systems programming and native Linux apps, Rust has largely stolen Vala's spotlight by offering superior memory safety, a massive ecosystem, and a highly advanced package manager (Cargo).

If you are hesitating to use Vala, let me know:

- What **specific feature** or **target platform** is most critical for your project?
- Do you have **prior experience** with C, C#, or Rust?

I can suggest a modern alternative that fixes these specific pain points.

You said: the history of vala

The history of **Vala** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">deeply intertwined with the evolution of the Linux desktop, specifically the <strong>GNOME project</strong></mark>. It was created to solve a highly specific architectural problem: how to give developers a modern, productive programming language without abandoning the lightweight C libraries that power Linux. \[[1](https://en.wikipedia.org/wiki/Vala%5F%28programming%5Flanguage%29), [2](https://www.codeporting.ai/language/vala/), [4](https://www.embeddedrelated.com/showarticle/1019.php)]

1\. The Core Problem (Early 2000s)

By the mid-2000s, building graphical desktop applications for GNOME required using **GTK** and the **GObject type system**. While GObject successfully brought Object-Oriented Programming (OOP) to standard C, writing it was notoriously tedious. It required massive amounts of "boilerplate" code just to define a basic class, manage memory, or emit events. \[[1](https://en.wikipedia.org/wiki/Vala%5F%28programming%5Flanguage%29), [2](https://richdale.de/the-vala-programming-language/), [3](https://www.reddit.com/r/vala/comments/jhbo0w/vala%5Freview/), [4](https://wiki.gnome.org/Projects/Vala/Tutorial)]

Developers who wanted a modern language typically had to choose between:

- **C++**, which had complex bindings.
- **C# (via Mono) or Python**, which were highly productive but introduced heavy runtimes, larger memory footprints, and slower startup times. \[[1](https://en.wikipedia.org/wiki/Vala%5F%28programming%5Flanguage%29), [2](https://wiki.gnome.org/Projects/Vala/Tutorial)]

2\. Conception and Birth (2006)

Frustrated by these limitations, Swiss developer **Jürg Billeter** conceived Vala, collaborating with **Raffaele Sandrini** to implement it. They wanted the elegant, object-oriented syntax of languages like C# but completely refused to rely on a virtual machine. \[[1](https://en.wikipedia.org/wiki/Vala%5F%28programming%5Flanguage%29), [2](https://www.embeddedrelated.com/showarticle/1019.php), [3](https://www.osnews.com/story/19975/application-development-with-vala/)]

- **May 2006**: The first compiler was completed. Instead of outputting machine code or bytecode directly, it acted as a **transpiler**, translating Vala source code directly into optimized GObject-based C code.
- **July 2007 (Version 0.1.0)**: The language achieved a critical milestone: the Vala compiler became **self-hosted**, meaning the compiler itself was rewritten and built using the Vala language.
- **2008**: The project introduced **Genie**, a sister language that utilized the exact same backend compiler but exposed a Python-like syntax instead of a C# syntax. \[[1](https://en.wikipedia.org/wiki/Vala%5F%28programming%5Flanguage%29), [2](https://www.reddit.com/r/vala/comments/jhbo0w/vala%5Freview/)]

3\. Adoption and the elementary OS Era (2010s)

Vala quickly gained traction within specific niches of the open-source community. Its greatest historical success came when it was adopted as the official core language for **elementary OS**, a popular Linux distribution focused on design and simplicity. \[[1](https://www.embeddedrelated.com/showarticle/1019.php), [2](https://www.reddit.com/r/elementaryos/comments/41hwt6/vala%5Fvs%5Fc%5Fccc/)]

Elementary OS developers used Vala to build the entire **Pantheon Desktop Environment**, as well as all of its native ecosystem applications (like Files, Music, and Terminal). It proved that a small team could build a fast, visually stunning, and incredibly lightweight desktop experience using high-level modern code.

4\. Maturation and the Shift to Long-Term Support

Despite its usefulness, Vala's history is also marked by a highly conservative release model. The developers prioritized long-term stability and binary compatibility over fast version numbering. The compiler moved through long, stable development cycles like the `0.48` and `0.56` release branches rather than jumping immediately to a traditional `1.0` moniker. \[, [2](https://wiki.gnome.org/Projects/Vala), [3](https://richdale.de/the-vala-programming-language/)]

As the 2020s progressed, mainstream Linux application development began shifting. The rise of **Rust** (which offers a robust package manager and strict compile-time safety guarantees) and **JavaScript/GJS** (promoted heavily by GNOME for extension development) began to eclipse Vala's spotlight.

5\. Present Status

Today, Vala remains an [actively maintained, reliable tool](https://wiki.gnome.org/Projects/Vala) within the GNOME infrastructure. It powers dozens of foundational applications like **Shotwell** (photo manager) and **Frida** (security instrumentation), and it stands as a unique historical monument to a time when open-source developers successfully engineered a custom path around heavy software runtimes. \[[1](https://wiki.gnome.org/Projects/Vala), [2](https://www.embeddedrelated.com/showarticle/1019.php)]

Would you like to explore **how Vala's compilation process works** under the hood, or look at how it compares historically to the **Mono/C# controversy** in early Linux development?

- [link](https://en.wikipedia.org/wiki/Vala%5F%28programming%5Flanguage%29)\
  Vala (programming language) - Wikipedia\
  Description. Vala is a programming language that combines the high-level build-time performance of scripting languages with the ru...\
  Wikipedia
- [link](https://www.reddit.com/r/vala/comments/jhbo0w/vala%5Freview/)\
  Vala review : r/vala - Reddit\
  Oct 24, 2020 — Writing in C using GObject's OOP was inconvenient due to the large amount of boilerplate, so in 2006 the Vala language was created...\
  Reddit·r/vala
- [link](https://www.embeddedrelated.com/showarticle/1019.php)\
  Vala applications on Embedded Linux: maybe a clever choice ...\
  Dec 19, 2016 — Vala is a sexy, open source, high level programming language that appeared in 2006, it counts with a modern typing system, is obje...\
  EmbeddedRelated.com

Show all

You said: why does the shift to rs and js happen

The shift toward **Rust (RS)** and **JavaScript (JS)** within the Linux desktop ecosystem—most notably in GNOME—happened because <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Vala failed to attract an audience outside of a specific Linux niche</mark>. \[[1](https://www.reddit.com/r/gnome/comments/kgvxcz/should%5Fi%5Fuse%5Fvala%5For%5Fgjs%5Ffor%5Fbuilding%5Fnew%5Fgnome/), [2](https://blogs.gnome.org/despinosa/2016/11/01/rust-and-vala/)]

By adopting Rust and JavaScript, the open-source community solved two distinct problems: **maximum developer pool size** for the UI, and **industrial-grade security and memory safety** for the backend engine. \[[1](https://www.reddit.com/r/gnome/comments/r5r48/why%5Fdid%5Fgnome%5Fchoose%5Fto%5Fuse%5Fjavascript%5Fas%5Fthe/), [2](https://www.youtube.com/watch?v=mHi6SNlUPQA)]

```
┌────────────────────────────────────────────────────────┐
│             THE MODERN TWO-PILLAR APPROACH             │
├───────────────────────────┬────────────────────────────┤
│   PILLAR 1: JAVASCRIPT    │      PILLAR 2: RUST        │
│    (High-Level Apps)      │     (Deep System Core)     │
├───────────────────────────┼────────────────────────────┤
│ • Massive developer pool  │ • Eliminates memory bugs   │
│ • Fast rapid prototyping  │ • Zero-cost abstractions   │
│ • Native web ecosystem    │ • Corporate-backed tooling │
└───────────────────────────┴────────────────────────────┘
```

***

1\. Why JavaScript Win the UI Layer (The Accessibility Strategy)

GNOME chose JavaScript (specifically through a binding engine called **GJS**) to dramatically lower the barrier to entry for application and shell extension developers. \[[1](https://news.ycombinator.com/item?id=23773052), [2](https://www.youtube.com/watch?v=8gVP8FroU2E\&t=28), [3](https://www.reddit.com/r/gnome/comments/r5r48/why%5Fdid%5Fgnome%5Fchoose%5Fto%5Fuse%5Fjavascript%5Fas%5Fthe/)]

- **Infinite Talent Pool**: Virtually every software developer knows some JavaScript. Vala required developers to learn a custom language with virtually zero career upside outside of Linux application development.
- **Rapid Prototyping**: JavaScript does not require a compile step. Developers can modify app code or desktop extension behavior instantly, creating a fast iteration loop.
- **The Web Integration Trend**: As modern desktop design began incorporating CSS styling and web-like declarative UI formats, using an actual web-native language became the logical evolution path. \[[1](https://www.reddit.com/r/gnome/comments/kgvxcz/should%5Fi%5Fuse%5Fvala%5For%5Fgjs%5Ffor%5Fbuilding%5Fnew%5Fgnome/), [2](https://www.reddit.com/r/gnome/comments/r5r48/why%5Fdid%5Fgnome%5Fchoose%5Fto%5Fuse%5Fjavascript%5Fas%5Fthe/), [3](https://blogs.gnome.org/despinosa/2017/02/14/vala-is-not-a-programming-language/), [4](https://www.youtube.com/watch?v=-cWuwNx-tsc), [5](https://www.reddit.com/r/gnome/comments/ryapzr/will%5Fat%5Fany%5Fpoint%5Fthe%5Fgnome%5Fshell%5Fbe%5Frewritten%5Fin/)]

2\. Why Rust Won the Core Layer (The Safety Strategy)

While JavaScript took over user-facing apps, **Rust** became the definitive language for rewriting the foundational, deep system libraries. \[[1](https://www.reddit.com/r/gnome/comments/ryapzr/will%5Fat%5Fany%5Fpoint%5Fthe%5Fgnome%5Fshell%5Fbe%5Frewritten%5Fin/), [2](https://www.reddit.com/r/rust/comments/1lapcl7/gnome%5Fis%5Fmigrating%5Fits%5Fimage%5Fprocessing%5Fto%5Frust/)]

- **The Maintenance Trap of Vala**: Vala required the GNOME team to maintain both their desktop software and the _compiler itself_. Rust delegated the massive burden of language and compiler maintenance to a heavily well-funded global tech ecosystem.
- **Guaranteed Memory Safety**: Because Vala transpiles code into standard C, it is still vulnerable to subtle pointer bugs, memory leaks, and compilation crashes. Rust completely eliminates entire categories of critical security bugs at compile-time via its strict ownership model.
- **High-Value Security Targets**: Linux projects are progressively migrating vulnerable, heavily exposed infrastructure—like image processors (`librsvg`), video decoders, and security tools—directly to Rust to shield the OS from external memory exploits. \[[1](https://blogs.gnome.org/mcatanzaro/2017/02/19/on-problems-with-vala/), [2](https://siliconislandblog.wordpress.com/2016/10/31/thoughts-on-dx-gnome-and-rust/), [3](https://www.youtube.com/watch?v=mHi6SNlUPQA), [4](https://www.reddit.com/r/rust/comments/1lapcl7/gnome%5Fis%5Fmigrating%5Fits%5Fimage%5Fprocessing%5Fto%5Frust/), [5](https://blogs.gnome.org/despinosa/2017/02/14/vala-is-not-a-programming-language/)]

3\. Summary of the Transition

| Metric \[[1](https://news.ycombinator.com/item?id=27004127), [2](https://www.reddit.com/r/gnome/comments/r5r48/why%5Fdid%5Fgnome%5Fchoose%5Fto%5Fuse%5Fjavascript%5Fas%5Fthe/), [3](https://www.youtube.com/watch?v=mHi6SNlUPQA), [4](https://news.ycombinator.com/item?id=25489793), [5](https://www.lenovo.com/us/en/glossary/gnome/), [6](https://www.youtube.com/watch?v=8gVP8FroU2E\&t=28), [7](https://medium.com/@logicoverlatte/why-rust-is-replacing-javascript-in-serious-systems-f0064cbdc941), [8](https://www.reddit.com/r/rust/comments/1lapcl7/gnome%5Fis%5Fmigrating%5Fits%5Fimage%5Fprocessing%5Fto%5Frust/), [9](https://www.youtube.com/watch?v=JHkarhWMTII)] | Vala (The Old Bridge)       | JavaScript / GJS (The UI)               | Rust (The Core Engine)                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------- | ------------------------------------------ |
| **Main Advantage**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Lightweight native speed    | Massive developer availability          | Uncompromising security & safety           |
| **Primary Use Case**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Legacy apps / elementary OS | Desktop shells, extensions, simple apps | Performance-critical core system libraries |
| **Tooling & Ecosystem**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Very small, community-run   | Monolithic (NPM, Web tech)              | Industrial-grade (Cargo Package Manager)   |

If you are exploring these options for a specific build, let me know:

- Are you planning to build a **lightweight UI app** or a **data-heavy backend system**?
- Which language do you **currently have the most comfort** writing?

I can provide a tailored starter template using either **GJS** or **GTK-rs** to launch your next desktop application.

- [link](https://blogs.gnome.org/despinosa/2016/11/01/rust-and-vala/)\
  Rust and Vala – Daniel Espinosa - GNOME Blogs\
  Nov 1, 2016 — This post is based on my experience on not just using but creating and maintaining Vala libraries. Rust is on the horizon and have...\
  GNOME Blogs
- [link](https://www.reddit.com/r/gnome/comments/kgvxcz/should%5Fi%5Fuse%5Fvala%5For%5Fgjs%5Ffor%5Fbuilding%5Fnew%5Fgnome/)\
  Should I use Vala or GJS for building new GNOME applicaiton?\
  Dec 20, 2020 — Yeah compared to js or python this is a valid point. Compressed to Vala not so much. buinauskas. • 5y ago. It would definitely be ...\
  Reddit·r/gnome
- [link](https://news.ycombinator.com/item?id=23773052)\
  Gnome is already adopting Rust, and GJS has been the Vala ...\
  Gnome is already adopting Rust, and GJS has been the Vala alternative for ages, ... | Hacker News. Hacker Newsnew | past | comment...\
  Hacker News

Show all
