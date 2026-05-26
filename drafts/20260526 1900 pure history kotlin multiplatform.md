the history of kotlin multiplatform

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Kotlin Multiplatform (KMP) evolved from an experimental code-sharing experiment into an industry-standard ecosystem used by massive enterprises.</span></strong></mark> Developed by JetBrains, the technology shifted the cross-platform development paradigm by focusing on **sharing business logic while preserving fully native performance and UI**. \[[1](https://kotlinlang.org/docs/multiplatform/kmp-overview.html), [2](https://www.wolfpack-digital.com/technologies/kotlin-multiplatform), [3](https://medium.com/workday-engineering/adopting-kotlin-multiplatform-a-practical-guide-to-unifying-codebases-1b333436061e), [4](https://kotlinlang.org/docs/multiplatform/case-studies.html), [5](https://instabug.com/blog/react-native-vs-kotlin-mutliplatform-guide/)]

🪵 The Seeds of Multiplatform (2016–2017)

- **Kotlin 1.0 (2016):** JetBrains officially released Kotlin 1.0 as a stable JVM language. Its seamless Java interoperability quickly caught the attention of mobile developers.
- **Google's Blessing (2017):** Google announced first-class support for Kotlin on Android at Google I/O 2017. This catalyzed massive community growth and gave JetBrains the momentum to look beyond the JVM.
- **The First Multiplatform Capabilities:** In late 2017, JetBrains released Kotlin 1.2, which introduced the early concepts of multiplatform projects. It allowed developers to reuse code between the JVM and JavaScript targets for the first time. \[[1](https://en.wikipedia.org/wiki/Kotlin), [2](https://www.youtube.com/watch?v=UtCKI4aqieM\&t=25), [3](https://kotlinlang.org/docs/multiplatform/kotlin-multiplatform-flutter.html), [4](https://blog.nashtechglobal.com/kmp-flexible-multiplatform-development-part-1/), [5](https://www.linkedin.com/pulse/advanced-features-kotlin-next-level-development-techahead-g9cwc)]

🧪 Experimental Phase & Community Birth (2018–2019)

- **Kotlin/Native Emerges:** JetBrains began developing Kotlin/Native, a technology that compiles Kotlin code to native binaries without a virtual machine (using LLVM). This opened the door for targeting Apple platforms (iOS, macOS) and Linux.
- **Early Adopters:** Mobile consultancies and adventurous teams—notably [Touchlab](https://touchlab.co/the-evolution-of-kotlin-multiplatform-mobile)—realized the value of sharing data layers and business logic with iOS while retaining native Swift views. Early, pioneering libraries like `SQLDelight` and `Multiplatform Settings` started to pop up.
- **Growing Pains:** This era was highly volatile. Early iterations suffered from a notoriously restrictive memory model in Kotlin/Native, complex Gradle build scripts, and a lack of proper tooling. \[[1](https://touchlab.co/the-evolution-of-kotlin-multiplatform-mobile), [2](https://kotlinlang.org/multiplatform/), [3](https://www.youtube.com/watch?v=RSBO1C%5FDu2U), [4](https://www.youtube.com/watch?v=z-u99yZFn5o\&t=11), [5](https://talkingkotlin.com/platform-integrations-in-kotlin-multiplatform-with-russell-wolf/), [6](https://touchlab.co/evolution-kotlin-multiplatform-mobile-old)]

📱 Focus on Mobile & Alpha Status (2020–2022)

- **The KMM Rebrand (2020):** Acknowledging that mobile was the strongest use case, JetBrains carved out a specialized subset called **Kotlin Multiplatform Mobile (KMM)** and released its first official Alpha in August 2020.
- **The New Memory Model (2021–2022):** JetBrains fundamentally rewrote the Kotlin/Native memory manager. This change eliminated the rigid, error-prone thread-freezing rules that had heavily frustrated developers trying to write multithreaded concurrent code.
- **Beta Milestone (2022):** In late 2022, [KMM moved into Beta](https://dimovski-d.medium.com/kotlin-multiplatform-mobile-part-1-the-whats-and-whys-59bddfc910db). Tooling was integrated heavily into Android Studio, and major tech giants like Netflix, Philips, and McDonald's validated the tech by adopting it in heavy production environments. \[[1](https://kotlinlang.org/lp/10yearsofkotlin/past/), [2](https://dimovski-d.medium.com/kotlin-multiplatform-mobile-part-1-the-whats-and-whys-59bddfc910db), [3](https://www.infoq.com/articles/kotlin-multiplatform-evaluation/), [4](https://touchlab.co/evolution-kotlin-multiplatform-mobile-old), [5](https://www.mobileatscale.com/content/posts/26-kmm/)]

🚀 Production Stability & Beyond (2023–Present)

- **Going Stable (November 2023):** JetBrains officially dropped the restrictive "Mobile" moniker to reaffirm its commitment to all platforms. [Kotlin Multiplatform was declared Stable and Production-Ready](https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/) for Android, iOS, Desktop, and Server.
- **Google's Explicit Backing (2024):** At Google I/O 2024, Google fully endorsed KMP for sharing business logic across Android and iOS. They actively began porting primary Android Jetpack libraries (such as DataStore, Room, and Paging) to be fully KMP-compatible.
- **UI Code Sharing with Compose Multiplatform:** While KMP originally focused purely on shared logic, JetBrains introduced Compose Multiplatform (CMP) as a declarative UI framework on top of KMP. This allowed developers to optionally share entire user interfaces using the same codebase, completing the ecosystem. \[[1](https://kotlinlang.org/multiplatform/), [2](https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/), [3](https://medium.com/@androidlab/kotlin-multiplatform-is-stable-but-is-your-team-ready-to-ship-with-it-5e1827733ea8), [4](https://kotlinlang.org/docs/multiplatform/kotlin-multiplatform-flutter.html), [5](https://callmeryan.medium.com/the-state-of-kotlin-multiplatform-jetbrains-kmp-webinar-1-of-4-5f604a146c82)]

Today, Kotlin Multiplatform stands alongside Flutter and React Native as a dominant approach to cross-platform engineering, uniquely defined by its "share only what you want" flexibility. \[[1](https://www.youtube.com/watch?v=z-u99yZFn5o\&t=11), [2](https://kotlinlang.org/docs/multiplatform/kotlin-multiplatform-flutter.html), [3](https://kotlinlang.org/docs/multiplatform/kotlin-multiplatform-react-native.html), [4](https://bugsee.com/blog/kmp-vs-flutter-a-comprehensive-comparison-for-2025/), [5](https://www.youtube.com/watch?v=bz4cQeaXmsI\&t=46)]

If you are exploring KMP for a project, I can help you understand the ecosystem further. Would you like to look into:

- How **KMP's architectural approach** differs from Flutter or React Native?

- The **current state of interoperability** with Swift and iOS development?

- Essential **third-party libraries** needed to start a modern KMP application? \[[1](https://touchlab.co/the-evolution-of-kotlin-multiplatform-mobile), [2](https://kotlinlang.org/docs/multiplatform/kotlin-multiplatform-flutter.html), [3](https://kotlinlang.org/docs/multiplatform/kotlin-multiplatform-react-native.html), [4](https://bugsee.com/blog/kmp-vs-flutter-a-comprehensive-comparison-for-2025/), [5](https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/), [6](https://ujjwalchafle.medium.com/reflecting-on-three-years-of-kotlin-multiplatform-as-an-ios-developer-d672ee0db445)]

- [link](https://touchlab.co/the-evolution-of-kotlin-multiplatform-mobile)\
  The Evolution of Kotlin Multiplatform Mobile - 2022 Edition\
  Oct 31, 2022 — Back in the summer of 2018, there were about five published libraries between Jetbrains and the community. This included my own Mu...\
  Touchlab

- [link](https://en.wikipedia.org/wiki/Kotlin)\
  Kotlin - Wikipedia\
  In July 2011, JetBrains unveiled Project Kotlin, a new JVM language that had been under development for a year. JetBrains lead Dmi...\
  Wikipedia

- [link](https://www.youtube.com/watch?v=RSBO1C%5FDu2U)\
  What Is Kotlin Multiplatform And How Does It Work?\
  Jun 16, 2024 — hey guys and welcome back to a new video and a new playlist on my channel because I decided to finally make a whole dedicated play...\
  10:17\
  YouTube·Philipp Lackner

Show all

You said: criticism

Despite its production-ready status, **Kotlin Multiplatform (KMP) faces strong criticism over its steep learning curve for Apple developers, friction in the Swift interoperability layer, and complex tooling configurations.** While the framework solves logic-sharing brilliantly, teams face distinct engineering and organizational pain points when trying to scale it. \[[1](https://medium.com/@androidlab/the-honest-developers-guide-to-kotlin-multiplatform-in-2026-aa8f8e8733c7), [2](https://www.reddit.com/r/Kotlin/comments/1itgjnl/what%5Fare%5Fyour%5Fthoughts%5Fon%5Fkotlin%5Fmulti%5Fplatform/)]

🍎 The iOS & Swift Experience Friction \[[1](https://medium.com/@androidlab/the-honest-developers-guide-to-kotlin-multiplatform-in-2026-aa8f8e8733c7)]

- **Unnatural Swift Interop:** Kotlin compiles to Objective-C headers to talk to iOS. This means modern Swift features (like custom Enums, Generics, and native `async/await` Swift Concurrency) lose their type-safety or elegance when bridging into KMP. Teams heavily rely on third-party compiler plugins like [Touchlab's SKIE](https://touchlab.co/the-evolution-of-kotlin-multiplatform-mobile) to make it bearable.
- **Xcode Tooling & Debugging Obstacles:** Writing KMP code requires jumping between Android Studio/Fleet and Xcode. Debugging a crash inside the shared Kotlin code from an iOS simulator is notoriously difficult. It requires extra configuration, and error stack traces often surface as cryptic Objective-C pointers.
- **iOS Build-Time Penalties:** Compiling Kotlin code into native Apple frameworks via LLVM adds significant overhead to iOS CI/CD pipelines and local build times. \[[1](https://www.reddit.com/r/Kotlin/comments/1itgjnl/what%5Fare%5Fyour%5Fthoughts%5Fon%5Fkotlin%5Fmulti%5Fplatform/), [2](https://www.youtube.com/watch?v=vgE%5FsKiIgWI\&t=543), [3](https://medium.com/@johnsafwat362/kotlin-multiplatform-in-2026-the-developers-deep-dive-into-kmp-vs-native-vs-flutter-ada63a569597), [4](https://medium.com/@androidlab/the-honest-developers-guide-to-kotlin-multiplatform-in-2026-aa8f8e8733c7), [5](https://medium.com/@hiren6997/kotlin-multiplatform-in-2025-sharing-logic-without-losing-native-feel-fba81691e899), [6](https://medium.com/@karelvdmmisc/my-journey-with-kotlin-multiplatform-mobile-pitfalls-anti-patterns-and-solutions-525df7058018), [7](https://jamshidbekboynazarov.medium.com/kotlin-multiplatform-in-2025-what-works-and-what-still-hurts-16c36533d188)]

🛠️ Tooling & Complex Infrastructure

- **Gradle Complexity:** The Gradle build system is powerful but highly complex. Configuring a Kotlin Multiplatform project involves managing intricate target blocks, source sets, and native compilation tasks, which frequently leads to cryptic build errors.
- **The "Context" Problem on Android:** Because KMP separates code from platform-specific APIs, Android developers often struggle with injecting the ubiquitous Android `Context` object into shared modules without writing complex abstraction layers.
- **UI Compromises with Compose Multiplatform:** While Compose Multiplatform allows full UI sharing, it renders everything canvas-style (similar to Flutter). Critics point out that this sacrifices pixel-perfect, native iOS UI components, feeling slightly "off" to strict iOS users. \[[1](https://www.reddit.com/r/Kotlin/comments/1itgjnl/what%5Fare%5Fyour%5Fthoughts%5Fon%5Fkotlin%5Fmulti%5Fplatform/), [2](https://jamshidbekboynazarov.medium.com/kotlin-multiplatform-in-2025-what-works-and-what-still-hurts-16c36533d188), [3](https://www.linkedin.com/posts/eunice-bakare%5Fkotlin-multiplatform-development-roadmap-activity-7257647608297312258-GpSG), [4](https://www.infoq.com/articles/kotlin-multiplatform-evaluation/), [5](https://www.youtube.com/watch?v=XYiml1kCp2I)]

👥 Team Dynamics & Hiring Friction

- **The Android Bias:** KMP is heavily driven by JetBrains and Google, giving it a native feel for Android engineers but alienating iOS engineers. If an iOS team is forced to adopt KMP, it often leads to cultural friction and resistance to learning a JVM-based ecosystem.
- **"Library Dev" Workflow Bottlenecks:** For large organizations, KMP forces teams to treat shared code like an internal library. If a UI feature needs a backend change, developers must write code in Kotlin, push it, wait for the library artifact to publish, and then consume it in the native apps. This slows down iteration speeds compared to standard monorepos.
- **The Unicorn Developer Problem:** Finding senior engineers who fully understand both Android architectures (Gradle, Coroutines) and iOS native frameworks (SwiftUI, Cocoapods/SPM) to debug deep integration issues is incredibly difficult and expensive. \[[1](https://touchlab.co/kmp-teams-piloting-vs-scaling), [2](https://www.youtube.com/watch?v=vgE%5FsKiIgWI\&t=543), [3](https://medium.com/@androidlab/the-honest-developers-guide-to-kotlin-multiplatform-in-2026-aa8f8e8733c7), [4](https://medium.com/@karelvdmmisc/my-journey-with-kotlin-multiplatform-mobile-pitfalls-anti-patterns-and-solutions-525df7058018), [5](https://www.donnfelker.com/why-kotlin-multiplatform-wont-succeed/), [6](https://www.aetherius-solutions.com/blog-posts/kotlin-multiplatform-in-2026)]

Are you weighing these criticisms against a specific project? If you tell me your **current team's tech stack** and **whether you intend to share UI or just logic**, I can help you evaluate if KMP is the right fit.

- [link](https://www.reddit.com/r/Kotlin/comments/1itgjnl/what%5Fare%5Fyour%5Fthoughts%5Fon%5Fkotlin%5Fmulti%5Fplatform/)\
  What are your thoughts on Kotlin Multi Platform (KMP) - Reddit\
  Feb 19, 2025 — Regular apps, yes, but widgets? Nothing. Technically I've found glance, which is kinda like a compose wrapper around remoteviews, ...\
  Reddit·r/Kotlin
- [link](https://www.youtube.com/watch?v=vgE%5FsKiIgWI\&t=543)\
  Why iOS Devs Struggle with KMP (and How to Fix It)\
  Dec 11, 2025 — so um it's called sky s sky sk i e. um this is the old English spelling of sky sky sky sky. um it's a plug-in that improves develo...\
  2m\
  YouTube·Kotlin by JetBrains
- [link](https://medium.com/@karelvdmmisc/my-journey-with-kotlin-multiplatform-mobile-pitfalls-anti-patterns-and-solutions-525df7058018)\
  Kotlin Multiplatform: Pitfalls, Anti-Patterns, and Solutions.\
  Jun 22, 2025 — The root issues boiled down to three core problems: ambiguous shared state models, siloed Android and iOS teams, and limited debug...\
  Medium·Karel van der Merwe

Show all