the history of react native

**React Native** was <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">created by Meta (formerly Facebook) to solve a critical business crisis</mark> and has since evolved into one of the world's most dominant mobile development frameworks. Built on the principle of **"Learn once, write anywhere,"** it allows developers to build truly native iOS and Android applications using a single JavaScript codebase. \[[1](https://www.techaheadcorp.com/knowledge-center/history-of-react-native/), [2](https://medium.com/react-native-development/a-brief-history-of-react-native-aae11f4ca39), [3](https://en.wikipedia.org/wiki/React%5FNative), [4](https://swovo.com/blog/unofficial-guide-to-react-native/), [5](https://www.articsledge.com/post/react-native)]

1\. The HTML5 "Mistake" (2012)

In the early 2010s, Facebook shifted heavily toward mobile-first development. To save time, they chose a **hybrid HTML5 web approach** wrapped inside mobile apps. \[[1](https://subscription.packtpub.com/book/mobile/9781803235035/2/ch02lvl1sec06/going-over-the-history-of-react-native), [2](https://swovo.com/blog/the-evolution-of-react-native/), [3](https://en.wikipedia.org/wiki/React%5FNative)]

The result was disastrous. The application was highly unstable, slow to retrieve data, and suffered from poor UI performance. In 2012, Mark Zuckerberg famously admitted, **"The biggest mistake we made as a company was betting too much on HTML5 as opposed to native."** Facebook needed a way to achieve the development speed of the web but with the performance of native iOS and Android code. \[[1](https://www.techaheadcorp.com/knowledge-center/history-of-react-native/), [2](https://en.wikipedia.org/wiki/React%5FNative), [3](https://swovo.com/blog/the-evolution-of-react-native/), [4](https://ptuszak.medium.com/what-is-native-d14ac4e814e8), [5](https://swovo.com/blog/unofficial-guide-to-react-native/)]

2\. The Internal Hackathon (2013)

Inside Facebook, engineer **Jordan Walke** had previously developed a prototype that generated native UI elements for iOS using a background JavaScript thread. This concept drew heavily from his work on React for the web. \[[1](https://en.wikipedia.org/wiki/React%5FNative), [2](https://www.youtube.com/watch?v=On9ghjix77c)]

During an internal **Facebook hackathon in the summer of 2013**, Walke worked with a small team of engineers to refine this prototype. They successfully got JavaScript to drive native platform views on an iOS device with instant code updates. Recognizing its immense potential, Facebook dedicated a full engineering team to build out the infrastructure. \[[1](https://medium.com/react-native-development/a-brief-history-of-react-native-aae11f4ca39), [2](https://www.youtube.com/watch?v=On9ghjix77c), [3](https://subscription.packtpub.com/book/mobile/9781803235035/2/ch02lvl1sec06/going-over-the-history-of-react-native)]

3\. Public Release and Open Source (2015)

After testing the technology in production with internal products like the Facebook Ads Manager and Groups apps, the technology was ready for the public. \[[1](https://en.wikipedia.org/wiki/React%5FNative), [2](https://engineering.fb.com/2016/04/13/android/react-native-a-year-in-review/)]

- **January 2015**: Facebook announced React Native at the [React.js Conference](https://medium.com/react-native-development/a-brief-history-of-react-native-aae11f4ca39).
- **March 2015**: Meta officially [open-sourced React Native for iOS](https://en.wikipedia.org/wiki/React%5FNative) on GitHub.
- **September 2015**: Facebook released **Android support**, making the framework a true cross-platform solution. \[[1](https://medium.com/react-native-development/a-brief-history-of-react-native-aae11f4ca39), [2](https://www.articsledge.com/post/react-native), [3](https://engineering.fb.com/2016/04/13/android/react-native-a-year-in-review/)]

4\. Continuous Architecture Evolution (2018 - Present)

As React Native matured, it underwent significant structural changes to keep up with performance demands: \[[1](https://globaldev.tech/blog/react-native-architecture), [2](https://medium.com/@the%5Fsiamak/react-native-vs-android-a-comprehensive-comparison-c2fddea0c803)]

- **The Lean Core Initiative (2018):** The core team removed non-essential features and modules from the main repository, delegating them to the open-source community to make the framework lightweight and faster.
- **Fast Refresh (2020):** Released in version 0.62, this feature unified live and hot reloading, allowing developers to see code edits instantly without losing the application's state.
- **The New Architecture (2022 - 2024):** Meta completely re-engineered the internals to eliminate the old "JavaScript Bridge," which caused performance bottlenecks by forcing data serialization. Utilizing the **JavaScript Interface (JSI)** and the **Fabric renderer**, JavaScript can now directly invoke native platform APIs, dramatically boosting performance.
- **The React Foundation (2025):** In October 2025, Meta officially donated React, React Native, and JSX to a newly formed **React Foundation** under the Linux Foundation, cementing its status as permanent, community-led global open-source infrastructure. \[[1](https://en.wikipedia.org/wiki/React%5FNative), [2](https://subscription.packtpub.com/book/mobile/9781803235035/2/ch02lvl1sec06/going-over-the-history-of-react-native), [3](https://www.youtube.com/watch?v=fYTEYv2bFwM\&t=4), [4](https://reactnative.dev/architecture/landing-page), [5](https://www.articsledge.com/post/react-native)]

Today, the framework is heavily optimized by third-party tooling systems like Expo and powers world-class production ecosystems including Instagram, Tesla, Discord, and Uber Eats. \[[1](https://subscription.packtpub.com/book/mobile/9781803235035/2/ch02lvl1sec06/going-over-the-history-of-react-native), [2](https://www.netguru.com/glossary/react-native), [3](https://www.youtube.com/shorts/5OM0gJDyz1E), [4](https://www.tesla.com/careers/search/job/sr-mobile-application-software-engineer-tesla-app-259749)]

If you are interested, I can break down the **technical differences** between the old Bridge architecture and the New Architecture, or provide a guide on **how to get started** with Expo. Which path would you like to explore?

- [link](https://www.techaheadcorp.com/knowledge-center/history-of-react-native/)\
  The History of React Native: Facebook's App Development ...\
  Nov 16, 2023 — In this article, we will try to trace the history of React Native from the moment the idea was born on Facebook. However, to appre...\
  TechAhead
- [link](https://en.wikipedia.org/wiki/React%5FNative)\
  React Native - Wikipedia\
  History. In 2012 Mark Zuckerberg commented, "The biggest mistake we made as a company was betting too much on HTML5 as opposed to ...\
  Wikipedia
- [link](https://medium.com/react-native-development/a-brief-history-of-react-native-aae11f4ca39)\
  A brief history of React Native - Medium\
  Oct 3, 2016 — The story of React Native is quite fascinating: what started as Facebook's internal hackathon project, in the summer of 2013, has ...\
  Medium·Shoutem

Show all

You said: criticism

Despite its massive success, React Native has faced significant criticism from developers and tech companies throughout its history.

1\. Performance Limitations

- **The Bridge Bottleneck:** Historically, all data passing between JavaScript and Native modules had to be serialized into JSON and sent across an asynchronous "bridge." High-frequency events like smooth scrolling, complex animations, or real-time user interactions often caused severe performance drops and dropped frames.
- **Large App Size:** Because React Native apps must bundle the JavaScript runtime engine (like Hermes) alongside the native code, even a basic "Hello World" app has a significantly larger file size than a pure native counterpart.
- **High Memory Overhead:** Running a JavaScript environment alongside native platform threads consumes more RAM, which can degrade performance on older or lower-end mobile devices.

2\. The Native Knowledge Dependency

- **Not Truly "Write Once":** While developers write mostly JavaScript or TypeScript, complex applications inevitably require custom native features. Developers must still understand Swift, Objective-C, Java, or Kotlin to write native bridges or modify platform-specific configuration files.
- **Complex Debugging:** When an app crashes, errors can happen in the JavaScript runtime, the native layer, or the bridge in between. Tracking down these asynchronous, cross-platform bugs requires deep knowledge of both ecosystem stacks.

3\. Ecosystem and Maintenance Burnout

- **The Airbnb Abandonment (2018):** In a famous series of tech blogs, Airbnb detailed why they abandoned React Native after using it heavily. They cited the "moving target" problem, where constant breaking changes in React Native upgrades caused massive maintenance overhead for their engineering teams.
- **Dependency Abandonment:** The "Lean Core" initiative stripped non-essential features out of React Native to make it lightweight, pushing them to community repositories. Over time, many critical community packages became abandoned or broken when new versions of React Native launched.
- **Fragile Upgrade Process:** Upgrading a project to a newer React Native version has historically been a notorious pain point, frequently breaking build scripts, native dependencies, and configuration settings.

4\. Flawed Native UI Recreation

- **Uncanny Valley UI:** React Native maps JavaScript components to actual native UI elements, but it does not always perfectly replicate complex platform-specific animations, gestures, or navigational transitions. Users can sometimes tell an app is not fully native because the tactile feedback and screen transitions feel slightly off.
- **Delayed OS Updates:** When Apple or Google releases a major new iOS or Android UI feature, React Native developers usually have to wait weeks or months for the open-source community or Meta to update the framework to support it.

If you want to look closer at these issues, I can explain how the **New Architecture** specifically attempts to fix the bridge bottleneck, or I can compare React Native's flaws directly against **Flutter** and **SwiftUI/Jetpack Compose**. What would you like to explore next?