smoke test meaning

A **smoke test** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a preliminary check to ensure that the most critical functions of a system work correctly before moving on to more detailed testing</mark>. The term originated in hardware engineering, where technicians would power on a device and watch for actual smoke; if none appeared, they knew it was safe to proceed. \[[1](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28software%29), [2](https://www.qawolf.com/blog/what-is-smoke-testing), [3](https://www.mathworks.com/discovery/smoke-testing.html), [4](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28electrical%29), [5](https://www.techtarget.com/searchsoftwarequality/definition/smoke-testing)]

While most common in software, "smoke testing" applies to several fields: \[[1](https://www.globalapptesting.com/blog/the-ultimate-guide-to-smoke-testing), [2](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28software%29)]

1\. Software Development

In software, a smoke test—also called **Build Verification Testing (BVT)**—is a quick, broad sweep of a new build. It acts as a "gatekeeper" to verify that the application is stable enough for deeper QA work. \[[1](https://www.geeksforgeeks.org/software-engineering/smoke-testing-software-testing/), [2](https://www.cu.edu/glossary-uis/smoke-test), [3](https://ghostinspector.com/blog/what-is-smoke-testing/), [4](https://testomat.io/blog/what-is-smoke-testing-in-examples-and-when-is-it-done/)]

- **Goal**: To "fail fast." If core functions fail, the build is rejected immediately to save time.
- **Examples**: Checking if an app launches, if a user can log in, or if the main search bar returns results.
- **Execution**: Often automated within a CI/CD pipeline, though it can be done manually. \[[1](https://www.ranorex.com/blog/what-is-smoke-testing/), [2](https://www.tricentis.com/learn/smoke-testing), [3](https://www.altexsoft.com/blog/smoke-testing/), [4](https://www.statsig.com/perspectives/smoke-test-software-definition-importance), [5](https://www.qawolf.com/blog/what-is-smoke-testing)]

2\. Mechanical & Automotive

Mechanics use smoke to physically locate leaks in sealed systems. \[[1](https://en.wikipedia.org/wiki/Smoke%5Ftesting), [2](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28mechanical%29)]

- **Vehicle Diagnostics**: Technicians pump pressurized, non-toxic smoke into an engine's intake or exhaust system. If smoke escapes from a gasket or hose, they have found the leak.
- **Plumbing & Sewers**: Plumbers and city workers blow smoke into sewer lines to find cracks or improper connections where groundwater might be entering the system. \[[1](https://www.youtube.com/watch?v=TmV%5FHjeiuCc\&t=1), [2](https://www.youtube.com/shorts/kKUkoZ5m0%5Fc), [3](https://www.youtube.com/shorts/tZp3uKUT5pw), [4](https://www.carparts.com/blog/car-smoke-tests-what-you-need-to-know-and-why-its-necessary/), [5](https://www.rjn.com/smoke-testing-faq), [6](https://superiorsignal.com/smoke-resources/relevant-articles/225-smoke-testing-what-homeowners-need-to-know)]

3\. Other Applications

- **Electronics**: The original use-case—powering up a circuit board to see if components burn or "smoke".
- **HVAC & Airflow**: Visualizing how air moves through a room (e.g., a hospital's negative pressure room) to ensure contaminants aren't escaping.
- **Business**: Testing a product idea with a landing page or "fake" ad to see if people click before actually building the product. \[[1](https://www.intertek.com/pharmaceutical/smoke-test-visualization-and-control-of-air-flows/), [2](https://thegood.com/insights/smoke-testing/), [3](https://b-plannow.com/en/smoke-test-what-it-is-and-how-it-helps-startups-validate-business-ideas/), [4](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28electrical%29), [5](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28mechanical%29)]

Would you like to know how to **set up an automated smoke test** for a software project or how to **perform one on a car**?

- [link](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28software%29)\
  Smoke testing (software) - Wikipedia\
  In computer programming and software testing, smoke testing (also confidence testing, sanity testing, build verification test (BVT...\
  Wikipedia
- [link](https://www.ranorex.com/blog/what-is-smoke-testing/)\
  What Is Smoke Testing? A Complete Guide for QA Teams\
  What Is Smoke Testing? A Complete Guide for QA Teams and Test Automation \* Smoke testing should be conducted early and often in th...\
  Ranorex
- [link](https://www.geeksforgeeks.org/software-engineering/smoke-testing-software-testing/)\
  Smoke Testing - Software Testing - GeeksforGeeks\
  Smoke Testing - Software Testing \* Smoke Testing, also known as Build Verification Testing (BVT), is a quick preliminary test perf...\
  GeeksforGeeks

Show all

in swe

In software engineering (SWE), a **smoke test**—also known as **Build Verification Testing (BVT)**—is a preliminary set of tests used to ensure that the core, mission-critical functions of a new software build work as expected. \[[1](https://www.ranorex.com/blog/what-is-smoke-testing/), [2](https://www.geeksforgeeks.org/software-engineering/smoke-testing-software-testing/)]

The primary goal is to **"fail fast"**. If these basic tests fail, the build is considered unstable and is immediately rejected to prevent wasting time and resources on more detailed testing. \[[1](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28software%29), [2](https://www.geeksforgeeks.org/software-engineering/smoke-testing-software-testing/)]

Key Characteristics in SWE

- **Breadth over Depth:** It covers the entire system from end-to-end but only checks high-level "happy path" scenarios.
- **Gatekeeper Role:** It acts as a mandatory checkpoint (or "gate") in [CI/CD pipelines](https://www.cloudbees.com/blog/smoke-testing) before the build proceeds to QA for regression or functional testing.
- **Minimal Suite:** A smoke test typically consists of a small number of test cases (often 5-10 for simple apps) that can be executed quickly, usually in minutes. \[[1](https://www.harness.io/blog/differences-between-smoke-testing-and-sanity-testing), [2](https://www.cloudbees.com/blog/smoke-testing), [3](https://www.ranorex.com/blog/what-is-smoke-testing/), [4](https://www.geeksforgeeks.org/software-engineering/smoke-testing-software-testing/), [5](https://www.altexsoft.com/blog/smoke-testing/)]

Common Smoke Test Examples

Teams use smoke tests to answer basic questions like "Does the program run?" or "Does the UI open?". Specific examples include: \[[1](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28software%29)]

- **E-commerce:** Can a user log in, search for a product, add it to their cart, and reach the checkout screen?.
- **Messaging Apps:** Does the app launch without crashing and can a user successfully send a single text message?.
- **Enterprise Software:** Can the system successfully connect to the database and generate a basic report?. \[[1](https://www.ranorex.com/blog/what-is-smoke-testing/), [2](https://www.altexsoft.com/blog/smoke-testing/), [3](https://launchdarkly.com/blog/comprehensive-guide-smoke-testing-software-development/)]

Smoke Testing vs. Related Terms

| Feature \[[1](https://www.geeksforgeeks.org/software-engineering/differences-between-sanity-testing-and-smoke-testing-software-engineering/), [2](https://www.harness.io/blog/differences-between-smoke-testing-and-sanity-testing), [3](https://www.ranorex.com/blog/what-is-smoke-testing/)] | Smoke Testing                   | Sanity Testing                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------------- |
| **Objective**                                                                                                                                                                                                                                                                                  | Verify overall build stability. | Verify a specific bug fix or change.    |
| **Scope**                                                                                                                                                                                                                                                                                      | Broad; covers the whole system. | Narrow; covers only impacted modules.   |
| **When**                                                                                                                                                                                                                                                                                       | Done first on each new build.   | Done after bug fixes on a stable build. |
| **Automation**                                                                                                                                                                                                                                                                                 | Highly suitable for CI/CD.      | Often manual or semi-automated.         |

Would you like to see a **sample script** for a smoke test (e.g., in Selenium or Cypress) or more details on **integrating it into a CI/CD pipeline**?

- [link](https://en.wikipedia.org/wiki/Smoke%5Ftesting%5F%28software%29)\
  Smoke testing (software) - Wikipedia\
  In computer programming and software testing, smoke testing (also confidence testing, sanity testing, build verification test (BVT...\
  Wikipedia
- [link](https://www.geeksforgeeks.org/software-engineering/smoke-testing-software-testing/)\
  Smoke Testing - Software Testing - GeeksforGeeks\
  May 1, 2026 — Smoke Testing - Software Testing \* Smoke Testing, also known as Build Verification Testing (BVT), is a quick preliminary test perf...\
  GeeksforGeeks
- [link](https://www.cloudbees.com/blog/smoke-testing)\
  Smoke Testing: What It Is, and Why Manual Gates Slow You ...\
  May 5, 2026 — Smoke Testing in Production: Why Manual Gates Are Slowing Your Release Cycles. ... Smoke testing is a software testing method used...\
  CloudBees

Show all