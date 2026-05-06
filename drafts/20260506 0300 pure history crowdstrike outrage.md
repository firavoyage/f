crowdstrike outrage. under what condition will it trigger

The global CrowdStrike outage on July 19, 2024, was triggered by a <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>defective sensor configuration update</strong></mark> (specifically "Channel File 291") delivered to Windows systems. \[[1](https://www.techtarget.com/whatis/feature/Explaining-the-largest-IT-outage-in-history-and-whats-next), [2](https://systemsit.net/what-was-the-crowdstrike-issue/)]

The specific technical conditions that triggered the crash included:

- **Logic Error in Rapid Response Content**: The update was a "Rapid Response Content" file designed to help the Falcon sensor detect new malicious "named pipes". A logic error in this update caused the sensor to try and read memory that didn't exist.
- **Input Parameter Mismatch**: While the sensor expected **20 input fields** of data, the faulty update provided **21 input fields**. This mismatch resulted in an **out-of-bounds memory read**.
- **Kernel-Level Access**: Because the CrowdStrike Falcon sensor operates in the **Windows kernel** (the most privileged "ring zero" of the OS), this memory error crashed the entire operating system rather than just the application.
- **Infinite Boot Loop**: The error triggered a **Blue Screen of Death (BSOD)**. Because the Falcon sensor is a boot-start driver, the system would attempt to reload the buggy file immediately upon restarting, creating a continuous loop of crashes. \[[1](https://www.georgetown.edu/news/ask-a-professor-crowdstrike-outage/), [2](https://www.cio.com/article/3476789/crowdstrike-failure-what-you-need-to-know.html), [3](https://www.forbes.com/sites/kateoflahertyuk/2024/08/07/crowdstrike-reveals-what-happened-why-and-whats-changed/), [4](https://www.computerweekly.com/feature/CrowdStrike-update-chaos-explained-What-you-need-to-know), [5](https://www.messageware.com/what-caused-the-crowdstrike-outage-a-detailed-breakdown/), [6](https://www.youtube.com/watch?v=2TfM%5FBF2i-I\&t=181), [7](https://www.youtube.com/watch?v=r-sEtN7YocM), [8](https://pmc.ncbi.nlm.nih.gov/articles/PMC12404578/), [9](https://blog.thinkreliability.com/the-crowdstrike-it-outage-how-one-defective-file-turned-into-multi-billion-dollar-problem), [10](https://www.ibm.com/think/news/recent-crowdstrike-outage-what-you-should-know)]

The outage only affected Windows hosts; **macOS and Linux systems** were not impacted because they use different integration points and did not receive the specific Channel File 291 update. \[[1](https://www.wired.com/story/crowdstrike-outage-update-windows/), [2](https://www.georgetown.edu/news/ask-a-professor-crowdstrike-outage/), [3](https://www.techtarget.com/whatis/feature/Explaining-the-largest-IT-outage-in-history-and-whats-next)]

Would you like to know more about the **manual recovery steps** required to fix the affected machines?

- [link](https://www.georgetown.edu/news/ask-a-professor-crowdstrike-outage/)\
  CrowdStrike, Microsoft Outage: Is Tech Too Vulnerable?\
  Jul 25, 2024 — What exactly happened on Friday, July 19, 2024? Cybersecurity firm CrowdStrike pushed out a routine software update that inadverte...\
  Georgetown University
- [link](https://www.techtarget.com/whatis/feature/Explaining-the-largest-IT-outage-in-history-and-whats-next)\
  CrowdStrike outage explained: What caused it and what's next\
  Oct 29, 2024 — Why Apple and Linux were not affected. CrowdStrike's software doesn't just run on Microsoft Windows; it also runs on Apple's macOS...\
  TechTarget
- [link](https://www.ibm.com/think/news/recent-crowdstrike-outage-what-you-should-know)\
  Recent CrowdStrike outage: What you should know - IBM\
  What caused this outage in Microsoft systems? \* The global outage of specific Microsoft-enabled systems and servers was isolated t...\
  IBM

Show all

how can one dl the update, how can it trigger

The CrowdStrike update was not a standard software download that a user initiates manually; instead, it was a background configuration update delivered automatically through the Falcon sensor's "Rapid Response" mechanism. \[[1](https://www.crowdstrike.com/en-us/blog/falcon-update-for-windows-hosts-technical-details/), [2](https://www.bitsight.com/blog/crowdstrike-outage-timeline-and-analysis), [3](https://www.paubox.com/blog/an-in-depth-analysis-of-the-crowdstrike-falcon-sensor-incident), [5](https://www.wired.com/story/crowdstrike-outage-update-windows/)]

How the Update was Downloaded

The "update" was actually a **Channel File** (specifically Channel File 291), which provides the sensor with new instructions to detect emerging threats. \[[1](https://www.crowdstrike.com/en-us/blog/falcon-update-for-windows-hosts-technical-details/)]

- **Automatic Delivery:** The Falcon sensor is designed to stay up-to-date automatically without user intervention. It communicates with the CrowdStrike cloud to pull down these small configuration files multiple times a day.
- **Manual Trigger (Optional):** While usually automatic, a user can sometimes manually trigger a check for updates by right-clicking the **CrowdStrike Falcon icon** in the system tray and selecting **"Update now"**.
- **Storage Location:** Once downloaded, these files are stored on the local machine in the `%WINDIR%\System32\drivers\CrowdStrike` directory. \[[1](https://www.crowdstrike.com/en-us/blog/falcon-update-for-windows-hosts-technical-details/), [2](https://www.eiu.edu/panthertech/selfhelp-article.php?id=46), [4](https://www.reddit.com/r/crowdstrike/comments/1easbmf/preliminary%5Fpost%5Fincident%5Freview%5Fpir%5Fcontent/), [6](https://en.wikipedia.org/wiki/2024%5FCrowdStrike-related%5FIT%5Foutages), [7](https://www.upwind.io/feed/what-happened-with-the-crowdstrike-update)]

How the Outage was Triggered

The crash occurred when the Falcon sensor tried to execute the logic contained within the malformed Channel File 291. \[, [2](https://www.bitsight.com/blog/crowdstrike-outage-timeline-and-analysis)]

- **Boot-Start Driver:** The sensor operates as a **boot-start kernel driver** (CSAgent.sys), meaning it is one of the first things to load when Windows starts.
- **Logic Error & Out-of-Bounds Read:** When the driver loaded, it attempted to read the instructions in the faulty update. Because the file had a mismatch in input parameters—providing 21 fields when the sensor expected 20—it triggered an **out-of-bounds memory read**.
- **System Failure:** This memory error caused a "Page Fault" in the kernel. Since the kernel is the core of the operating system, it cannot recover from such an error, immediately resulting in a **Blue Screen of Death (BSOD)**.
- **Boot Loop:** Because the faulty file remained on the hard drive, every time the computer restarted, the sensor would try to load it again and crash the system instantly, creating an infinite loop. \[, [2](https://www.messageware.com/what-caused-the-crowdstrike-outage-a-detailed-breakdown/), [3](https://blog.securityinsights.io/ripple-effect-crowdstrike-update-industry-perspectives-future-safeguards), [4](https://www.reddit.com/r/crowdstrike/comments/1easbmf/preliminary%5Fpost%5Fincident%5Freview%5Fpir%5Fcontent/), [5](https://www.paubox.com/blog/an-in-depth-analysis-of-the-crowdstrike-falcon-sensor-incident), [6](https://www.defensorum.com/global-disruption-from-crowdstrike-falcon-sensor-update/), [7](https://news.stanford.edu/stories/2024/07/an-expert-s-overview-of-the-crowdstrike-outage)]

Would you like to see the **specific commands** for deleting the faulty file via the Windows Command Prompt?

- [link](https://www.bitsight.com/blog/crowdstrike-outage-timeline-and-analysis)\
  CrowdStrike Outage Timeline, Analysis, & Impact - Bitsight\
  Jul 24, 2024 — According to CrowdStrike and other sources, the timeline of events was as follows: \* July 19, 2024, 04:09 UTC: CrowdStrike release...\
  Bitsight
- [link](https://news.stanford.edu/stories/2024/07/an-expert-s-overview-of-the-crowdstrike-outage)\
  A computer scientist's take on the CrowdStrike crash\
  Jul 26, 2024 — The fix to get CrowdStrike and Windows running again is simple – one just needs to delete the malformed file that was shipped as p...\
  Stanford University
- [link](https://www.messageware.com/what-caused-the-crowdstrike-outage-a-detailed-breakdown/)\
  What Caused the Crowdstrike Outage: A Detailed Breakdown\
  Feb 13, 2026 — On July 19, 2024, CrowdStrike released a faulty configuration update for its Falcon sensor software running on Windows PCs and ser...\
  Messageware

Show all

does it generally impact customer desktops? does it mainly affect those who use the crowdstrike software, which is not inside windows by default?

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">The CrowdStrike outage primarily impacted </span><strong>enterprise desktops and servers</strong> rather than standard consumer PCs</mark>. This is because CrowdStrike's Falcon software is a professional-grade cybersecurity tool designed for large organizations, not individual home users. \[[1](https://forums.grc.com/threads/global-it-disruption-caused-by-a-defective-crowdstrike-falcon-sensor-update.1729/), [2](https://en.wikipedia.org/wiki/2024%5FCrowdStrike-related%5FIT%5Foutages), [3](https://www.tufin.com/blog/lasting-impact-of-crowdstrike-update-outage), [4](https://www.reddit.com/r/crowdstrike/comments/gipz5l/can%5Fmy%5Femployer%5Fuse%5Fcrowdstrike%5Fto%5Fgo%5Fthrough%5Fmy/)]

Key Impact Details

- **Target Software**: The crash only affected systems with the **CrowdStrike Falcon sensor** installed.
- **Not a Windows Default**: CrowdStrike is **not** part of Windows by default. It is a third-party product that organizations must pay for and install separately on their employees' computers.
- **Consumer Exemption**: Most personal home computers were unaffected because standard retail versions of Windows use **Microsoft Defender** (built-in) or other consumer-focused antivirus programs like Norton or McAfee, rather than CrowdStrike.
- **Scope of Impact**: While roughly **8.5 million devices** were affected, this represented less than **1%** of all Windows machines worldwide. However, because those devices belonged to critical entities like airlines, banks, and hospitals, the societal disruption was massive. \[[1](https://www.georgetown.edu/news/ask-a-professor-crowdstrike-outage/), [2](https://m.economictimes.com/magazines/panache/microsoft-crowdstrilke-outage-why-were-all-computers-not-affected/articleshow/111878270.cms), [3](https://www.reddit.com/r/pcmasterrace/comments/1e70w68/does%5Fthis%5Foutage%5Factually%5Faffect%5Fhome%5Fpc%5Fusers%5For/), [4](https://forums.grc.com/threads/global-it-disruption-caused-by-a-defective-crowdstrike-falcon-sensor-update.1729/), [6](https://www.bbc.com/news/articles/cpe3zgznwjno), [7](https://www.umgc.edu/blog/crowdstrike), [8](https://www.congress.gov/crs-product/IF12717)]

Why You Might See It at Home

If your personal computer was affected, it was likely for one of these reasons:

- **Work-from-Home Laptop**: You were using a device issued or managed by your employer.
- **Corporate Policy**: Your employer required you to install a "Home Use" version of Falcon to access corporate resources. \[[1](https://www.reddit.com/r/crowdstrike/comments/gipz5l/can%5Fmy%5Femployer%5Fuse%5Fcrowdstrike%5Fto%5Fgo%5Fthrough%5Fmy/), [2](https://www.crowdstrike.com/en-us/resources/data-sheets/falcon-prevent-for-home-use/)]

Would you like to know how to check if **CrowdStrike Falcon** is currently installed on your system?

- [link](https://www.georgetown.edu/news/ask-a-professor-crowdstrike-outage/)\
  CrowdStrike, Microsoft Outage: Is Tech Too Vulnerable?\
  Jul 25, 2024 — Laura DeNardis is a professor and endowed Chair in Technology, Ethics, and Society and the director of the Center for Digital Ethi...\
  Georgetown University
- [link](https://en.wikipedia.org/wiki/2024%5FCrowdStrike-related%5FIT%5Foutages)\
  2024 CrowdStrike-related IT outages - Wikipedia\
  The problem affected systems running Windows 10 and Windows 11 running the CrowdStrike Falcon software. Most personal Windows PCs ...\
  Wikipedia
- [link](https://www.reddit.com/r/pcmasterrace/comments/1e70w68/does%5Fthis%5Foutage%5Factually%5Faffect%5Fhome%5Fpc%5Fusers%5For/)\
  Does this outage actually affect home pc users or only ... - Reddit\
  Jul 19, 2024 — Only if your home PC has Crowdstrike installed, which would be unusual since it is an enterprise security product. You can't even ...\
  Reddit·r/pcmasterrace

Show all

does it trigger only after you restart the os

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, it did not trigger only after a restart</span></mark>. For many systems, the crash happened **immediately** upon receiving the update while the computer was already running. \[[1](https://www.reddit.com/r/crowdstrike/comments/1easbmf/preliminary%5Fpost%5Fincident%5Freview%5Fpir%5Fcontent/), [2](https://www.bitsight.com/blog/crowdstrike-outage-timeline-and-analysis), [3](https://www.malwarebytes.com/blog/uncategorized/2024/07/crowdstrike-update-at-center-of-windows-blue-screen-of-death-outage)]

The confusion often comes from the "reboot loop" that followed. Here is how the timing worked:

- **Immediate Crash**: When a computer was online and downloaded the faulty "Channel File 291," the Falcon sensor tried to process it right away. Because the file had a logic error, the sensor (which runs deep in the Windows kernel) crashed instantly, causing a **Blue Screen of Death (BSOD)** while the user was working.
- **The Reboot Loop**: Once the system crashed, it would try to restart. Because the Falcon sensor is a **boot-start driver**, it loads very early in the Windows startup process—long before you even reach the login screen.
- **Triggering Again**: During this startup, the sensor would again try to read the same faulty file still sitting on the hard drive. It would crash again immediately, leading to the "infinite boot loop". \[[1](https://medium.com/@stevecohen%5F29296/crowdstrike-it-outage-explained-by-a-windows-developer-f78ada8cdab0#:~:text=The%20Crowdstrike%20driver%20managing%20these,it%20renders%20the%20system%20inoperable.), [2](https://www.congress.gov/crs-product/R48135), [3](https://www.reddit.com/r/crowdstrike/comments/1easbmf/preliminary%5Fpost%5Fincident%5Freview%5Fpir%5Fcontent/), [4](https://archerpoint.com/crowdstrike-outage-what-happened-lessons-learned/), [5](https://www.reddit.com/r/stocks/comments/1e6xol5/crowdstrike%5Fcrwd%5Fcode%5Fupdate%5Fbricking%5Fwindows/), [6](https://netsecgroup.io/guides/crowdstrike-outage-incident-analysis), [7](https://www.cio.com/article/3476789/crowdstrike-failure-what-you-need-to-know.html), [8](https://www.ibm.com/think/news/recent-crowdstrike-outage-what-you-should-know)]

In short: the update triggered the **first crash in real-time**, and then triggered **every subsequent crash during the restart process** until the file was manually deleted. \[, [2](https://www.techtarget.com/whatis/feature/Explaining-the-largest-IT-outage-in-history-and-whats-next)]

Would you like to know how **IT administrators** eventually bypassed this loop to fix the machines?

- [link](https://medium.com/@stevecohen%5F29296/crowdstrike-it-outage-explained-by-a-windows-developer-f78ada8cdab0#:~:text=The%20Crowdstrike%20driver%20managing%20these,it%20renders%20the%20system%20inoperable.)\
  “CrowdStrike IT Outage Explained by a Windows Developer”\
  Jul 22, 2024 — The Crowdstrike driver managing these updates lacked resilience, with insufficient error checking and parameter validation. Parame...\
  13:40\
  Medium·Dave's Garage
- [link](https://www.techtarget.com/whatis/feature/Explaining-the-largest-IT-outage-in-history-and-whats-next)\
  CrowdStrike outage explained: What caused it and what's next\
  Oct 29, 2024 — Among the issues is that, once the problematic update was installed, the underlying Windows OS would trigger BSOD, rendering the s...\
  TechTarget
- [link](https://www.cio.com/article/3476789/crowdstrike-failure-what-you-need-to-know.html)\
  CrowdStrike failure: What you need to know - CIO\
  Jul 23, 2024 — “The update that occurred at 04:09 UTC was designed to target newly observed, malicious named pipes being used by common C2 \[comma...\
  www.cio.com

Show all

have the crowdstrike team tested the upd

Something went wrong and the content wasn't generated.

have the crowdstrike team tested the upd

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">CrowdStrike did test the update using an automated system</span></mark>, but a critical failure in that system allowed the faulty code to pass through. \[[1](https://its.ucr.edu/iso-alert/2024/07/30/faulty-configuration-update-crowdstrike-causes-global-outage), [2](https://www.serianu.com/downloads/Crowdstrike%20Falcon%20Failure%20RCA%20-%20Executive%20Summary%20-%208-13-2024.pdf)]

According to CrowdStrike's internal [Technical Root Cause Analysis](https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf), the failure occurred because of the following reasons:

Automated Testing Failure

The update was analyzed by an automated tool called a **Content Validator**. \[[1](https://www.ictsolutions.co.uk/crowdstrike-outage-explained-what-happened-what-can-be-done-to-prevent-future-issues/), [2](https://www.reddit.com/r/cybersecurity/comments/1eawfyy/crowdstrike%5Foutage%5Fupdate%5Fpost%5Fincident%5Freport/)]

- **The Bug:** A bug within this validator caused it to mistakenly "clear" the update, even though it contained a logic error.
- **Over-Reliance:** Because previous updates of this type had been successful since March 2024, the team relied heavily on this automated validation. \[[1](https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf), [2](https://www.helpnetsecurity.com/2024/07/24/crowdstrike-update-testing/), [3](https://octopus.com/blog/crowdstrike-takeaways), [5](https://www.cio.com/article/3476789/crowdstrike-failure-what-you-need-to-know.html)]

Process Gaps

There were several weaknesses in how the company handled the release of this specific type of "Rapid Response" update:

- **No Human Review:** This type of configuration update did not undergo a final manual check by a developer before being released.
- **Missing Error Handling:** The Falcon sensor itself lacked a "bounds check" to verify if the data it was reading was valid. When it found 21 fields of data instead of the expected 20, it crashed rather than ignoring the extra data.
- **Global Rollout:** Unlike their major software updates, these smaller configuration updates were pushed to **all customers at once**. This prevented any "early warning" from a small group of users that could have stopped the global disaster. \[[1](https://www.reddit.com/r/QualityAssurance/comments/1eeejq1/see%5Fhow%5Fcrowdstrike%5Fis%5Fimproving%5Ftheir%5Fqa/), [2](https://archerpoint.com/crowdstrike-outage-what-happened-lessons-learned/), [3](https://www.serianu.com/downloads/Crowdstrike%20Falcon%20Failure%20RCA%20-%20Executive%20Summary%20-%208-13-2024.pdf), [4](https://xbosoft.com/blog/crowdstrikes-catastrophic-update-proper-testing-could-have-prevented-a-global-meltdown/), [5](https://www.nbcnews.com/news/us-news/crowdstrike-update-caused-global-outage-likely-skipped-checks-experts-rcna162839)]

New Testing Protocols

Following the outage, CrowdStrike has implemented more [rigorous quality assurance](https://www.crowdstrike.com/en-us/blog/falcon-content-update-preliminary-post-incident-report/): \[[1](https://www.reddit.com/r/QualityAssurance/comments/1eeejq1/see%5Fhow%5Fcrowdstrike%5Fis%5Fimproving%5Ftheir%5Fqa/), [2](https://www.serianu.com/downloads/Crowdstrike%20Falcon%20Failure%20RCA%20-%20Executive%20Summary%20-%208-13-2024.pdf)]

- **Staggered Rollouts:** Updates are now released in phases, starting with "canary" groups to catch issues early.
- **Local Developer Testing:** Every update now requires a human developer to verify it on a local machine.
- **Customer Control:** Organizations can now choose when and how these updates are applied to their systems. \[[1](https://www.reddit.com/r/QualityAssurance/comments/1eeejq1/see%5Fhow%5Fcrowdstrike%5Fis%5Fimproving%5Ftheir%5Fqa/), [2](https://www.reddit.com/r/cybersecurity/comments/1eawfyy/crowdstrike%5Foutage%5Fupdate%5Fpost%5Fincident%5Freport/), [3](https://its.ucr.edu/iso-alert/2024/07/30/faulty-configuration-update-crowdstrike-causes-global-outage), [4](https://www.ictsolutions.co.uk/crowdstrike-outage-explained-what-happened-what-can-be-done-to-prevent-future-issues/)]

Would you like to know more about the **specific bug** that was found in the testing software?

- [link](https://www.reddit.com/r/QualityAssurance/comments/1eeejq1/see%5Fhow%5Fcrowdstrike%5Fis%5Fimproving%5Ftheir%5Fqa/)\
  See how CrowdStrike is improving their QA : r/QualityAssurance\
  Jul 28, 2024 — Here's the changes they're making to their QA process: \* Local developer testing. Turns out their development process did not incl...\
  Reddit·r/QualityAssurance
- [link](https://octopus.com/blog/crowdstrike-takeaways)\
  Lessons From Crowdstrike's Outage | Octopus blog\
  Jul 30, 2024 — What happened. A malformed Rapid Response Content configuration file made it to the Crowdstrike content delivery system in the clo...\
  Octopus Deploy
- [link](https://www.reddit.com/r/cybersecurity/comments/1eawfyy/crowdstrike%5Foutage%5Fupdate%5Fpost%5Fincident%5Freport/)\
  CrowdStrike Outage Update: Post incident Report Published ...\
  Jul 24, 2024 — so some news has dropped about the crowd strike Falcon sensor. and what actually happened um now I wasn't sure whether this was a ...\
  5:29\
  Reddit·Brains933

Show all

do it admins have to reinstall the os to fix

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, a full OS reinstallation was </span><strong>not required</strong></mark>, but the fix was extremely tedious because it usually had to be done **manually on every single machine.**

Since the computers were stuck in a "Blue Screen" loop and couldn't connect to the internet, IT admins had to physically sit at each computer (or use a remote recovery tool) to perform these steps:

1. **Boot into Safe Mode** or the Windows Recovery Environment (WinRE).
2. **Navigate to the CrowdStrike directory**: `%WINDIR%\System32\drivers\CrowdStrike`.
3. **Find and delete the specific file**: Any file matching the pattern `C-00000291*.sys`.
4. **Restart the computer** normally.

The Big Challenges:

- **BitLocker Encryption**: Many corporate laptops have encrypted hard drives. To access the files in Safe Mode, admins needed a **BitLocker Recovery Key** for each specific laptop. This was the biggest hurdle, as it meant looking up unique 48-digit codes for thousands of devices.
- **Scale**: For a company with 50,000 laptops spread across the country, physically touching every machine was a logistical nightmare that took days or weeks.

Would you like to know about the **automated recovery tools** Microsoft eventually released to help speed this up?

the status of crowdstrike company after that

Despite the massive July 2024 outage, CrowdStrike has staged a significant recovery, with its stock hitting all-time highs by early 2025 and its core business remaining stable. \[[1](https://www.cio.com/article/3853689/case-in-point-taking-stock-of-the-crowdstrike-outages.html), [2](https://www.investors.com/research/sp500-ai-stock-crowdstrike-crwd/), [3](https://www.fool.co.uk/2025/07/18/1-year-on-from-the-crowdstrike-it-outage-heres-how-the-sp-500-stock-has-done/)]

Financial and Market Performance

- **Stock Recovery:** After plummeting roughly 32% in the immediate aftermath, CrowdStrike's stock (CRWD) fully rebounded within months. As of May 2026, the stock is trading near **$476**, well above its pre-outage levels.
- **Revenue Growth:** The company has continued to grow, reporting its first quarter with over **$1 billion** in revenue in late 2024. By mid-2025, it maintained a solid year-over-year revenue growth rate of approximately 20-29%.
- **Profitability Impacts:** While revenue remained strong, the company swung to a net loss in late 2024 due to approximately **$33.9 million** in one-time expenses related to the incident and "customer commitment packages" (discounts and credits). \[[1](https://www.cnbc.com/2025/06/04/crowdstrike-guidance-july-outage.html), [2](https://www.cio.com/article/3853689/case-in-point-taking-stock-of-the-crowdstrike-outages.html), [3](https://www.reuters.com/legal/government/crowdstrike-defeats-shareholder-lawsuit-over-huge-software-outage-2026-01-14/), [4](https://www.fool.co.uk/2025/07/18/1-year-on-from-the-crowdstrike-it-outage-heres-how-the-sp-500-stock-has-done/), [5](https://www.crn.com/news/security/2024/crowdstrike-ceo-customers-realize-we-have-the-best-tech-in-the-industry), [6](https://www.cybersecuritydive.com/news/crowdstrike-retains-customers/734203/)]

Customer Retention and Operations

- **High Retention:** Despite the disruption, CrowdStrike maintained a gross customer retention rate of **97%**. Analysts attribute this to the "stickiness" of the platform and the lack of viable high-scale alternatives.
- **"Falcon Flex" Program:** To rebuild trust and prevent customer churn, the company launched programs like "Falcon Flex," offering customers easier access to additional products and flexible subscription terms, accumulating over **$3.2 billion** in deal value by late 2025. \[[1](https://www.cybersecuritydive.com/news/crowdstrike-retains-customers/734203/), [3](https://en.wikipedia.org/wiki/CrowdStrike), [4](https://www.gurufocus.com/news/2642653/crowdstrike-an-update-on-rebuilding-trust-and-accelerating-growth?mobile=true), [5](https://www.crn.com/news/security/2024/customers-still-trust-crowdstrike-despite-outage-analyst)]

Legal and Regulatory Standing

- **Shareholder Lawsuit Dismissed:** In early 2026, a federal judge dismissed a major class-action lawsuit from shareholders who claimed they were misled about the company's testing procedures.
- **Ongoing Delta Litigation:** CrowdStrike remains in a high-profile legal battle with **Delta Air Lines**, which is seeking over $500 million in damages for the revenue lost during the multi-day disruption.
- **Passenger Suits:** Separate lawsuits filed by grounded airline passengers were also largely dismissed by 2025. \[[1](https://www.crowdstrike.com/en-us/press-releases/us-district-court-dismisses-class-action-lawsuit-against-crowdstrike/), [2](https://www.reuters.com/legal/government/crowdstrike-defeats-shareholder-lawsuit-over-huge-software-outage-2026-01-14/), [3](https://www.securityweek.com/investor-lawsuit-over-crowdstrike-outage-dismissed/), [4](https://finance.yahoo.com/news/crowdstrike-shares-drop-windows-outage-121005691.html), [5](https://www.techzine.eu/news/security/137968/crowdstrike-wins-in-lawsuit-with-shareholders-over-outage/)]

Would you like to know more about the **specific technical changes** CrowdStrike made to its kernel update process to prevent a recurrence?

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://www.cybersecuritydive.com/news/crowdstrike-retains-customers/734203/)\
  CrowdStrike avoids customer exodus after triggering global IT outage\
  Nov 27, 2024 — “Although true that we are a little further from the sun, we're still kind of fighting through the incident,” CFO Burt Podbere sai...\
  Cybersecurity Dive
- [link](https://en.wikipedia.org/wiki/CrowdStrike)\
  CrowdStrike - Wikipedia\
  2024 IT outages \* On 19 July 2024, CrowdStrike released a faulty configuration update for its Falcon Sensor software on Microsoft ...\
  Wikipedia
- [link](https://www.cnbc.com/2025/06/04/crowdstrike-guidance-july-outage.html)\
  CrowdStrike drops on lackluster guidance, impact from July IT ...\
  Jun 4, 2025 — CrowdStrike drops about 6% on lackluster guidance, ongoing impact from July IT outage \* Shares of CrowdStrike slumped after the co...\
  CNBC

Show all