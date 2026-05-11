why could cloudflare turnstiles offer such an attack protection wo costing you much

May 9, 2026

Cloudflare Turnstile offers robust attack protection at little to no cost because it leverages Cloudflare’s massive global network and non-interactive verification methods that don't require the same expensive human-in-the-loop infrastructure as traditional CAPTCHAs. \[[1](https://defyn.com.au/why-turnstile-outperforms-google-recaptcha-for-modern-websites/), [2](https://www.geetest.com/en/article/cloudflare-turnstile-vs-google-recaptcha-8-key-factors), [3](https://netcat.au/battle-of-the-captchas-recaptcha-vs-turnstile-what-to-use-in-2025/)]

Here is why it stays affordable:

- **Shared Infrastructure**: Turnstile runs on the same infrastructure that powers roughly 20% of the internet. Because Cloudflare already processes billions of requests daily, adding lightweight Turnstile checks incurs minimal additional overhead for them.
- **Non-Interactive Challenges**: Instead of using human labor to grade image puzzles, Turnstile uses **non-interactive JavaScript challenges** like proof-of-work, proof-of-space, and probing for web APIs. These automated checks are computationally cheap to run at scale compared to the complex logic required for interactive puzzles.
- **"Unlimited" Free Tier**: Cloudflare provides Turnstile for **free for unlimited use** on their standard managed widgets. This acts as a "loss leader" to bring users into their ecosystem, where they might eventually upgrade to more expensive [Enterprise Bot Management plans](https://www.cloudflare.com/application-services/products/turnstile/) for advanced features.
- **Privacy-First Efficiency**: Unlike some competitors that harvest data for ad retargeting to offset costs, Turnstile does not sell user data. This eliminates the need for expensive data processing pipelines associated with advertising and simplifies global compliance (like GDPR).
- **Edge-Native Architecture**: Because it is [integrated directly into Cloudflare's edge network](https://developers.cloudflare.com/turnstile/), verification happens closer to the user. This reduces the bandwidth and latency costs typically associated with routing traffic back and forth to a central CAPTCHA server. \[[1](https://blog.cloudflare.com/turnstile-ga/), [2](https://workers.cloudflare.com/product/turnstile), [3](https://developers.cloudflare.com/turnstile/), [4](https://roundtable.ai/blog/cloudflare-turnstile-reviews-pricing-alternatives), [5](https://medium.com/technology-hits/behind-the-screens-recaptcha-v3-vs-cloudflare-turnstile-c8188e8356cb), [6](https://developers.cloudflare.com/turnstile/plans/), [7](https://www.cloudflare.com/application-services/products/turnstile/), [8](https://defyn.com.au/why-turnstile-outperforms-google-recaptcha-for-modern-websites/), [9](https://www.geetest.com/en/article/cloudflare-turnstile-vs-google-recaptcha-8-key-factors)]

Would you like to know how to **integrate Turnstile** into your existing website or application?

- [link](https://blog.cloudflare.com/turnstile-ga/)\
  Cloudflare is free of CAPTCHAs; Turnstile is free for everyone\
  Announcing Turnstile's General Availability means that Turnstile is now completely production ready, available for free for unlimi...\
  The Cloudflare Blog
- [link](https://developers.cloudflare.com/turnstile/)\
  Overview · Cloudflare Turnstile docs\
  Cloudflare Turnstile. ... Cloudflare's smart CAPTCHA alternative. Turnstile can be embedded into any website without sending traff...\
  Cloudflare Docs
- [link](https://roundtable.ai/blog/cloudflare-turnstile-reviews-pricing-alternatives)\
  Cloudflare Turnstile Reviews & Pricing November 2025\
  TLDR: Cloudflare Turnstile catches only 33% of bots versus Roundtable's 87% detection rate. Turnstile blocks VPN users and lacks b...\
  Roundtable - Proof of Human

Show all

what about the cost on their side when an attack happens

May 9, 2026

When an attack occurs, Cloudflare remains cost-efficient by shifting the "cost" of the attack away from their servers and onto the attacker's hardware through high-scale automation. \[[1](https://www.cloudflare.com/the-net/bot-security-architecture/), [2](https://www.hcaptcha.com/post/hcaptcha-vs-turnstile), [3](https://roundtable.ai/blog/cloudflare-turnstile-reviews-pricing-alternatives)]

Cloudflare's strategy for managing the costs of a massive attack includes:

1\. Proof-of-Work (PoW) Offloading

Instead of using their own CPU power to verify if a request is malicious, Turnstile sends a small "puzzle" back to the visitor's browser. \[[1](https://www.geetest.com/en/article/cloudflare-turnstile-vs-google-recaptcha-8-key-factors)]

- **The Mechanic**: The visitor’s computer must perform a computational task (like finding a specific hash) before the request is accepted.
- **The Cost Shift**: While it costs Cloudflare almost nothing to send the puzzle, it forces the attacker to burn CPU cycles and electricity for every single bot in their network. This acts as a massive financial and physical "tax" on the attacker. \[[1](https://www.hcaptcha.com/post/hcaptcha-vs-turnstile)]

2\. Global Edge Filtering

Cloudflare operates a network across hundreds of cities with over **477 Tbps of capacity**. \[[1](https://www.cloudflare.com/the-net/bot-security-architecture/)]

- **Localized Defense**: Attacks are handled at the "edge"—meaning the closest data center to the bot. This prevents malicious traffic from ever reaching a central server or consuming expensive long-distance bandwidth.
- **Shared Intelligence**: When one site on the network is attacked, Cloudflare learns the bot's signature (like its TLS fingerprint or browser behavior) and instantly applies that protection across its entire network. \[[1](https://workers.cloudflare.com/product/bot-mitigation), [2](https://www.youtube.com/watch?v=6EnekTohO7I\&t=508), [3](https://www.cloudflare.com/the-net/bot-security-architecture/)]

3\. No "Attack Tax" Policy

Cloudflare maintains a policy where they **never charge customers for being attacked**. \[[1](https://www.cloudflare.com/plans/enterprise/externa/), [2](https://community.cloudflare.com/t/whats-the-price-when-im-under-attack/123698)]

- **Predictable Billing**: Standard protection features are included for free or at a fixed price. Even during hyper-volumetric attacks, your costs don't spike because the filtering happens on Cloudflare's massive infrastructure, which is built to absorb such loads as part of its normal operations.
- **Exception for Workers**: Only usage-based services, like [Cloudflare Workers](https://www.cloudflare.com/), might see increased costs if you specifically opt to run custom code during an attack. \[[1](https://www.cloudflare.com/vi-vn/ddos/), [2](https://www.cloudflare.com/plans/enterprise/externa/)]

4\. Data as Currency

Every attack provides Cloudflare with a "gift that keeps on giving": a fresh stream of threat intelligence. \[[1](https://blog.cloudflare.com/per-customer-bot-defenses/)]

- **Training Models**: The billions of malicious requests they block are used to train their **Machine Learning models**, making their [Bot Management](https://www.cloudflare.com/application-services/products/bot-management/) and Turnstile products even more accurate for paid enterprise clients. \[[1](https://blog.cloudflare.com/per-customer-bot-defenses/), [2](https://workers.cloudflare.com/product/bot-mitigation)]

Are you worried about a **specific type of attack**, like a large-scale DDoS or a focused credential stuffing attempt?

- [link](https://www.cloudflare.com/plans/enterprise/externa/)\
  Enterprise solutions packages - Cloudflare\
  Why Cloudflare Externa packages? \* No attack traffic tax. You shouldn't be penalized for being attacked. Only pay for clean traffi...\
  Cloudflare
- [link](https://blog.cloudflare.com/per-customer-bot-defenses/)\
  Building unique, per-customer defenses against advanced bot threats in the AI era\
  Challenges have always served as an ideal mitigation action for customers who want to protect their applications without compromis...\
  The Cloudflare Blog
- [link](https://www.cloudflare.com/vi-vn/ddos/)\
  DDoS Protection & Mitigation Solutions - Cloudflare\
  Website DDoS protection is Free in all application services plans, plus much more!\
  Cloudflare

Show all

it does not seem very possible for ddos def competitors

May 9, 2026

[Cloudflare](https://www.cloudflare.com/)’s ability to offer "unlimited" and often free DDoS protection is difficult for many competitors to match because of its unique network architecture and billing model. While competitors often rely on **centralized scrubbing centers**, Cloudflare uses a **distributed edge-native** approach that radically lowers the cost of mitigation. \[[1](https://www.cloudflare.com/cloudflare-vs-cloudfront/), [2](https://blog.ogwilliam.com/post/cloudflare-vs-aws-shield-vs-gcp-armor-ddos-protection)]

Here is why Cloudflare has a structural cost advantage over many DDoS defense competitors:

1\. Massive Scale vs. Centralized "Scrubbers"

- **The Competitor Way**: Traditional vendors often route "dirty" traffic to a few massive, expensive **scrubbing centers**. These centers must have specialized, high-cost hardware to clean the traffic before sending it back to you. This "back-and-forth" routing creates high bandwidth and hardware costs that are often passed to the customer.
- **The Cloudflare Way**: Every single server in Cloudflare’s 300+ cities is a "scrubber." They handle attacks at the **edge** (the data center closest to the bot), using general-purpose hardware. With a total network capacity of over **405 Tbps**—far exceeding the combined capacity of many leading competitors—they can absorb even record-breaking attacks as "noise". \[[1](https://4prime.pl/en/blog/cloudflare-through-the-eyes-of-engineers), [2](https://www.cloudflare.com/static/aff6e173f07a50401b12eead49e95141/Always-on-vs-on-demand-DDoS-Protection.pdf), [3](https://www.cloudflare.com/ddos/)]

2\. "95th Percentile" Bandwidth Billing

Cloudflare buys its bandwidth differently than a typical company.

- **The Strategy**: They generally pay transit providers based on the **95th percentile** of their total usage.
- **The Benefit**: Because they have so much legitimate traffic (20% of the web), a sudden DDoS spike—which usually lasts only minutes or hours—often doesn't even move their 95th-percentile bill. This allows them to absorb massive traffic spikes for free, whereas a competitor with less "baseline" traffic might see their bill skyrocket. \[[1](https://blog.cloudflare.com/ddos-attacks-have-evolved-and-so-should-your-ddos-protection/), [2](https://www.krome.sg/blog/using-cloudflare-to-avoid-ddos/), [3](https://note.com/masakazu%5Furabe/n/n93a426ce1a1c), [4](https://blog.cloudflare.com/defending-the-internet-how-cloudflare-blocked-a-monumental-7-3-tbps-ddos/)]

3\. Predictable vs. Usage-Based Pricing

- **AWS Shield Advanced**: Charges a high fixed fee (approx. $3,000/month) plus variable data transfer fees that can spike during an attack.
- **Cloudflare**: Offers **unmetered mitigation** on all plans. They explicitly eliminated "surge pricing" because their infrastructure treats attack traffic as a common occurrence rather than an emergency that requires extra resources. \[[1](https://blog.ogwilliam.com/post/cloudflare-vs-aws-shield-vs-gcp-armor-ddos-protection), [2](https://blog.cloudflare.com/ddos-attacks-have-evolved-and-so-should-your-ddos-protection/)]

4\. Integration with the "Whole Internet"

Cloudflare’s scale allows them to see attacks faster than anyone else. When a new botnet emerges, they identify its fingerprint and update their entire global network within **seconds**. For a competitor with a smaller footprint, identifying a sophisticated attack takes more time and manual intervention (SRE/Engineer hours), which adds significant operational cost. \[[1](https://www.cloudflare.com/ja-jp/case-studies/stack-overflow/), [2](https://blog.cloudflare.com/ddos-attacks-have-evolved-and-so-should-your-ddos-protection/)]

Are you considering Cloudflare for a **high-traffic enterprise site** or for a **smaller personal project**?

- [link](https://blog.cloudflare.com/ddos-attacks-have-evolved-and-so-should-your-ddos-protection/)\
  DDoS attacks have evolved, and so should your DDoS protection\
  Some of the key features and benefits include: \* Massive network capacity: With over 35 Tbps of network capacity, Cloudflare ensur...\
  The Cloudflare Blog
- [link](https://4prime.pl/en/blog/cloudflare-through-the-eyes-of-engineers)\
  Cloudflare Through the Eyes of Our Engineers: What Deployment Really ...\
  A third immediate effect is performance improvement. After deploying Cloudflare, application servers are noticeably less loaded—mu...\
  4Prime
- [link](https://www.cloudflare.com/ja-jp/case-studies/stack-overflow/)\
  Stack Overflow & Cloudflare | Customer Story\
  Persistent DDoS attacks pose operational risks In 2022, Stack Overflow became overwhelmed with layer 7 DDoS attacks that repeatedl...\
  Cloudflare

Show all

massive botnet cases

May 9, 2026

[Cloudflare](https://www.cloudflare.com/) often shares details of massive botnet attacks to demonstrate how their distributed network absorbs traffic that would overwhelm traditional centralized competitors. \[[1](https://mraviteja9949.medium.com/cloudflare-blocks-largest-ever-ddos-attack-at-7-3-tbps-7675fdfb8531)]

Notable massive botnet cases include:

1\. The Aisuru Botnet (Record Holder) \[[1](https://securityaffairs.com/185299/security/cloudflare-mitigates-record-29-7-tbps-ddos-attack-by-the-aisuru-botnet.html), [2](https://thehackernews.com/2026/02/aisurukimwolf-botnet-launches-record.html)]

In late 2025, Cloudflare mitigated a world-record attack from the [Aisuru botnet](https://hackread.com/cloudflare-aisuru-botnet-ddos-attack/), which peaked at a staggering **29.7 terabits per second (Tbps)** and **14.1 billion packets per second (Bpps)**. \[[1](https://securityaffairs.com/185299/security/cloudflare-mitigates-record-29-7-tbps-ddos-attack-by-the-aisuru-botnet.html), [2](https://hackread.com/cloudflare-aisuru-botnet-ddos-attack/)]

- **Scale**: This botnet consisted of an estimated **1 to 4 million infected devices** globally.
- **Tactics**: It utilized "UDP carpet-bombing," which sends massive floods of traffic across thousands of target IPs simultaneously.
- **Outcome**: Cloudflare's autonomous edge systems blocked the 69-second barrage without human intervention, even though the volume was large enough to cause "collateral disruption" for major ISPs in the US. \[[1](https://www.cloudflare.com/learning/ddos/famous-ddos-attacks/), [2](https://hackread.com/cloudflare-aisuru-botnet-ddos-attack/), [3](https://securityaffairs.com/185299/security/cloudflare-mitigates-record-29-7-tbps-ddos-attack-by-the-aisuru-botnet.html)]

2\. The Mantis Botnet (The Efficient Attacker)

Unlike Aisuru, which relied on millions of weak devices, the [Mantis botnet](https://blog.cloudflare.com/mantis-botnet/) was small but extremely powerful. \[[1](https://blog.cloudflare.com/mantis-botnet/), [2](https://www.bleepingcomputer.com/news/security/mantis-botnet-behind-the-record-breaking-ddos-attack-in-june/)]

- **Power over Size**: With only **5,000 bots**, it launched a record-breaking **26 million requests per second (rps)** HTTPS attack in 2022.
- **Hijacked Resources**: It achieved this by infecting high-powered **virtual machines and servers** in cloud data centers rather than low-power IoT devices like cameras.
- **Complexity**: Because it attacked over HTTPS, it forced the victim's server to do the heavy computational work of TLS decryption—a "quality over quantity" approach that Turnstile is specifically designed to detect. \[[1](https://securityaffairs.com/133233/hacking/mantis-botnet-record-ddos-attack.html), [2](https://blog.cloudflare.com/26m-rps-ddos/), [3](https://www.telecomstechnews.com/news/mantis-botnet-responsible-record-breaking-cloudflare-attacks/), [4](https://purplesec.us/breach-report/mantis-botnet/), [5](https://blog.cloudflare.com/mantis-botnet/)]

3\. HTTP/2 "Rapid Reset" (Zero-Day Vulnerability)

In 2023, a new technique called [Rapid Reset](https://www.cloudflare.com/case-studies/zendesk/) exploited a flaw in the HTTP/2 protocol to launch massive attacks. \[[1](https://www.cloudflare.com/case-studies/zendesk/)]

- **Volume**: [Cloudflare](https://www.cloudflare.com/learning/ddos/famous-ddos-attacks/) mitigated peaks of over **201 million requests per second**.
- **Efficiency**: This attack allowed a single connection to request thousands of files and then immediately cancel those requests, forcing the server to do the work of processing without ever finishing the transfer. \[, [2](https://www.cloudflare.com/case-studies/zendesk/)]

4\. Recent Hyper-Volumetric Trends (2025-2026)

Cloudflare's [2025 Q4 Threat Report](https://blog.cloudflare.com/ddos-threat-report-2025-q4/) noted a massive surge in attack frequency: \[[1](https://blog.cloudflare.com/ddos-threat-report-2025-q4/), [2](https://thehackernews.com/2026/02/aisurukimwolf-botnet-launches-record.html)]

- **Total Volume**: Cloudflare now mitigates an average of **5,376 DDoS attacks every hour**.
- **Network Layer Growth**: Attacks at the network layer (Layer 3/4) more than **tripled** in 2025 compared to the previous year.
- **New Records**: A November 2025 attack by the **Kimwolf botnet** reportedly reached **31.4 Tbps**, lasting only 35 seconds but representing the new ceiling for volumetric threats. \[[1](https://thehackernews.com/2026/02/aisurukimwolf-botnet-launches-record.html), [2](https://blog.cloudflare.com/ddos-threat-report-2025-q4/)]

Cloudflare uses these cases to feed their [DDoS Botnet Threat Feed](https://developers.cloudflare.com/ddos-protection/botnet-threat-feed/), a free tool for ISPs to identify and shut down infected devices within their own networks. \[[1](https://blog.cloudflare.com/defending-the-internet-how-cloudflare-blocked-a-monumental-7-3-tbps-ddos/), [2](https://developers.cloudflare.com/ddos-protection/botnet-threat-feed/)]

- [link](https://www.cloudflare.com/learning/ddos/famous-ddos-attacks/)\
  Famous DDoS attacks | Biggest DDoS attacks | Cloudflare\
  What was the largest DDoS attack of all time? In the third quarter of 2025, Cloudflare mitigated the largest distributed denial-of...\
  Cloudflare
- [link](https://blog.cloudflare.com/mantis-botnet/)\
  Mantis - the most powerful botnet to date - The Cloudflare Blog\
  In June 2022, we reported on the largest HTTPS DDoS attack that we've ever mitigated — a 26 million request per second attack - th...\
  The Cloudflare Blog
- [link](https://blog.cloudflare.com/26m-rps-ddos/)\
  Cloudflare mitigates 26 million request per second DDoS attack\
  Update from June 24, 2022: We have named the botnet that launched the 26M rps DDoS attack "Mantis" as it is also like the Mantis S...\
  The Cloudflare Blog

Show all

what happened

May 9, 2026

In early 2026, the battle against botnets escalated to unprecedented levels, marked by record-breaking attacks and a coordinated global law enforcement response. \[[1](https://www.fastly.com/blog/2026-botnet-attack-trends)]

The following key events defined this period:

1\. The Record-Breaking 31.4 Tbps Attack

In late January 2026, Cloudflare disclosed it had mitigated a massive **31.4 terabits per second (Tbps)** DDoS attack—the largest ever publicly reported. \[[1](https://fastnetmon.com/2026/02/01/aisuru-botnet-sets-a-new-ddos-record-at-31-4-tbps/), [2](https://thehackernews.com/2026/03/doj-disrupts-3-million-device-iot.html)]

- **Attacker**: The **Aisuru botnet** was responsible, surpassing its own previous record of 29.7 Tbps from late 2025.
- **Method**: The attack was a hyper-volumetric flood that lasted only 35 seconds but was powerful enough to threaten national-level infrastructure. \[[1](https://thehackernews.com/2026/02/aisurukimwolf-botnet-launches-record.html?m=1), [2](https://finance.yahoo.com/news/cloudflare-2026-threat-intelligence-report-140000060.html), [3](https://fastnetmon.com/2026/02/01/aisuru-botnet-sets-a-new-ddos-record-at-31-4-tbps/), [4](https://thehackernews.com/2026/03/doj-disrupts-3-million-device-iot.html)]

2\. Operation Middleman: Global Botnet Takedown

On March 19, 2026, the U.S. Department of Justice, in collaboration with Germany and Canada, announced the disruption of four major botnet infrastructures: **Aisuru, Kimwolf, JackSkid, and Mossad**. \[[1](https://www.fastly.com/blog/2026-botnet-attack-trends), [2](https://thehackernews.com/2026/03/doj-disrupts-3-million-device-iot.html)]

- **Scale**: These botnets had infected over **3 million devices** worldwide, primarily low-security IoT gadgets like webcams, routers, and Android-based streaming boxes.
- **Residential Proxy Abuse**: The botnets weren't just for DDoS; they were rented out as "residential proxies," allowing cybercriminals to hide their location by routing traffic through innocent people's home internet connections. \[[1](https://www.reuters.com/business/media-telecom/us-says-it-disrupted-botnets-that-infected-over-3-million-devices-worldwide-2026-03-20/), [2](https://www.fastly.com/blog/2026-botnet-attack-trends)]

3\. Recent Service Disruptions (May 2026)

Just this past week, Cloudflare's defense systems experienced localized stability issues:

- **Bot Management Bug**: On May 5, 2026, Cloudflare identified a bug in its **Bot Management** feature (Rule IDs 50331648 and 50331649) that caused an unexpected spike in flagged requests for many customers. The feature was temporarily disabled and required 72 hours to stabilize.
- **Turnstile Validation Errors**: Users have reported a sudden spike in **"invalid-input-response"** errors with Turnstile widgets as recently as May 6–8, 2026, particularly affecting authentication workflows even after the initial incident was marked as resolved. \[[1](https://www.cloudflarestatus.com/), [2](https://community.cloudflare.com/t/cloudflare-turnstile-sudden-spike-in-invalid-input-response-codes/925310)]

4\. The Rise of "Logging In" over "Breaking In"

Cloudflare's **2026 Threat Intelligence Report** highlighted a major shift in botnet strategy. Instead of crashing sites, bots are now used for high-trust exploitation:

- **Bot Prevalence**: A staggering **94% of all login attempts** across Cloudflare’s network are now identified as bots.
- **AI Integration**: Botnets are now leveraging LLMs to bypass hiring filters or create hyper-realistic deepfakes to embed state-sponsored workers directly into corporate payrolls. \[[1](https://www.cloudflare.com/press/press-releases/2026/cloudflare-2026-threat-intelligence-report-nation-state-actors-and/), [2](https://www.365i.co.uk/news/2026/03/04/cloudflare-2026-threat-report-bots-login-attempts/), [3](https://www.businesswire.com/news/home/20260303235760/en/Cloudflare-2026-Threat-Intelligence-Report-Nation-State-Actors-and-Cybercriminals-Shift-from-Breaking-In-to-Logging-In), [4](https://finance.yahoo.com/news/cloudflare-2026-threat-intelligence-report-140000060.html)]

Are you checking because you’ve seen an **increase in blocked traffic** or a **spike in Turnstile errors** on your own site recently?

- [link](https://www.cloudflarestatus.com/)\
  Cloudflare Status\
  Cloudflare System Status \* Update - We are continuing to update the identified issues with our Bot Management features for the rul...\
  Cloudflare Status
- [link](https://www.cloudflare.com/press/press-releases/2026/cloudflare-2026-threat-intelligence-report-nation-state-actors-and/)\
  Cloudflare 2026 Threat Intelligence Report: Nation-State Actors and Cybercriminals ...\
  Press release. March 3, 2026. Cloudflare 2026 Threat Intelligence Report: Nation-State Actors and Cybercriminals Shift from 'Break...\
  Cloudflare
- [link](https://fastnetmon.com/2026/02/01/aisuru-botnet-sets-a-new-ddos-record-at-31-4-tbps/)\
  Aisuru botnet sets a new DDoS record at 31.4 Tbps - FastNetMon\
  Another DDoS record has been reported, and once again, it is the same botnet setting it. In late January 2026, Cloudflare disclose...\
  FastNetMon

Show all

what happened during attack

May 9, 2026

During the massive attacks of late 2025 and early 2026, including the record-breaking **31.4 Tbps** assault, several technical and operational events occurred simultaneously: \[[1](https://thehackernews.com/2026/02/aisurukimwolf-botnet-launches-record.html)]

1\. High-Speed "Burst" Mitigation \[[1](https://japan.zdnet.com/article/35243458/)]

The attacks were characterized by their extreme intensity and short duration—the 31.4 Tbps peak lasted only **35 seconds**. Because this is faster than human reaction time, [Cloudflare](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)’s **autonomous edge systems** had to detect, fingerprint, and block the traffic within microseconds without any manual intervention. \[[1](https://blog.cloudflare.com/ddos-threat-report-2025-q4/), [2](https://thehackernews.com/2026/02/aisurukimwolf-botnet-launches-record.html), [3](https://app.stationx.net/articles/ddos-statistics), [4](https://cloudflare.tv/this-week-in-net/record-breaking-ddos-attacks-the-security-landscape-heading-into-2026/AZE79Ov6)]

2\. Complex Attack Vectors

Attackers used a **multi-vector approach** to overwhelm different parts of the target's infrastructure: \[[1](https://codebook.machinarecord.com/threatreport/silobreaker-cyber-alert/43703/), [2](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)]

- **Layer 3/4 (Network):** A "UDP carpet-bombing" flood of 31.4 Tbps aimed to saturate internet pipes and crash firewalls.
- **Layer 7 (Application):** A massive **200 million requests per second (rps)** HTTP flood aimed to exhaust server CPU and memory.
- **Targeting:** The "Night Before Christmas" campaign specifically targeted Cloudflare's own dashboard and infrastructure alongside customers in telecommunications and gaming. \[[1](https://www.cloudflare.com/learning/ddos/glossary/aisuru-kimwolf-botnet/), [2](https://www.securityweek.com/aisuru-botnet-powers-record-ddos-attack-peaking-at-29-tbps/), [3](https://www.techzine.eu/news/security/138360/aisuru-botnet-breaks-ddos-record-with-31-4-tbps-attack/)]

3\. Distributed Impact on Bots

The attack originated from **1 million to 4 million compromised devices**. \[[1](https://japan.zdnet.com/article/35243458/)]

- **Device Overload:** Infected devices (like Android TVs and IoT routers) experienced high CPU usage, thermal issues (running hot), and network instability as they were forced to send thousands of requests per second.
- **Global Reach:** Cloudflare mitigated the traffic across its entire network, with the previous 29.7 Tbps attack alone involving sources from **over 17,000 different networks**. \[[1](https://www.paloaltonetworks.com/cyberpedia/what-is-botnet), [3](https://cloudflare.tv/this-week-in-net/record-breaking-ddos-attacks-the-security-landscape-heading-into-2026/AZE79Ov6)]

4\. Operational "Smokescreen"

While the volumetric attack caused chaos—spiking CPUs and triggering thousands of alerts—it was often used as a distraction. During such events, security teams are often overwhelmed by "noise," which attackers exploit to perform **stealthier actions** like credential stuffing or data exfiltration. \[[1](https://www.ptechpartners.com/2026/02/17/cybersecurity-news-roundup-mid-december-to-mid-february-2026/), [2](https://cloudflare.tv/this-week-in-net/record-breaking-ddos-attacks-the-security-landscape-heading-into-2026/AZE79Ov6)]

5\. Side Effects for Legitimate Users

Even with mitigation, massive attacks can cause minor "collateral disruption" for local ISPs near the attack sources due to the sheer volume of outbound traffic from infected home devices. Most recently, in May 2026, some users also experienced **Turnstile validation errors** and incorrect blocking due to a brief bug in Cloudflare's Bot Management rules while they were being tuned for these new threats. \[[1](https://codebook.machinarecord.com/threatreport/silobreaker-cyber-alert/43703/)]

- [link](https://blog.cloudflare.com/ddos-threat-report-2025-q4/)\
  2025 Q4 DDoS threat report: A record-setting 31.4 Tbps attack caps a ...\
  As the number of attacks increased over the course of 2025, the size of the attacks increased as well, growing by over 700% compar...\
  The Cloudflare Blog
- [link](https://www.cloudflare.com/learning/ddos/glossary/aisuru-kimwolf-botnet/)\
  What is the Aisuru-Kimwolf botnet? - Cloudflare\
  Aisuru-Kimwolf has been responsible for some of the largest hyper-volumetric DDoS attacks on record, including a 31.4 Terabit-per-\
  Cloudflare
- [link](https://thehackernews.com/2026/02/aisurukimwolf-botnet-launches-record.html)\
  AISURU/Kimwolf Botnet Launches Record-Setting 31.4 Tbps DDoS Attack\
  Ravie LakshmananFeb 05, 2026. The distributed denial-of-service (DDoS) botnet known as AISURU/Kimwolf has been attributed to a r...\
  The Hacker News

Show all

I mean the stability during the attack

May 9, 2026

During the record-breaking **31.4 Tbps** attack and the associated **"Night Before Christmas"** campaign in late 2025, Cloudflare's network stability remained high, though it faced different challenges compared to traditional infrastructure. \[[1](https://www.pcgamer.com/software/security/an-unprecedented-bombardment-cloudflare-claims-a-new-world-record-for-a-31-4-tbps-ddos-botnet-attack-it-recorded-late-last-year/)]

Here is what happened to the system's stability during those events:

- **Autonomous Edge Stability**: The 31.4 Tbps volumetric attack was mitigated **fully autonomously**. Because Cloudflare uses **Anycast** technology, the massive traffic load was instantly spread across **477 data centers** worldwide, preventing any single point of failure from crashing.
- **Infrastructure Targeting**: The attackers specifically targeted Cloudflare's own **dashboard and internal infrastructure** with over 200 million requests per second (rps). While the core network stayed up, some users experienced **intermittent lag** in the admin dashboard because internal systems had to work overtime to process the massive volume of threat data.
- **The "Fail-Closed" Outage (November 2025)**: Interestingly, the most significant disruption in this period wasn't caused by the attack itself, but by an internal logic failure during a database update. This caused a **3-hour global outage** where services "flapped"—recovering and then crashing again—due to oversized configuration files.
- **Collateral ISP Disruption**: While Cloudflare's servers stayed stable, the sheer volume of the 31.4 Tbps attack caused **"collateral disruption"** for the local Internet Service Providers (ISPs) where the bots were located. The massive outbound traffic from millions of infected Android TVs and routers saturated local neighborhood pipes before it even reached Cloudflare.
- **Secondary Stability Issues (May 2026)**: More recently, stability has been affected by a **Bot Management bug** (Rule IDs 50331648 and 50331649) that caused legitimate traffic to be incorrectly blocked \[Reported May 5, 2026]. This was a software tuning issue rather than a hardware capacity failure. \[[1](https://blog.cloudflare.com/ddos-threat-report-2025-q4/), [2](https://securityaffairs.com/187690/hacking/record-breaking-31-4-tbps-ddos-attack-hits-in-november-2025-stopped-by-cloudflare.html), [3](https://blog.cloudflare.com/defending-the-internet-how-cloudflare-blocked-a-monumental-7-3-tbps-ddos/), [4](https://www.pcgamer.com/software/security/an-unprecedented-bombardment-cloudflare-claims-a-new-world-record-for-a-31-4-tbps-ddos-botnet-attack-it-recorded-late-last-year/), [5](https://thenewstack.io/3-hour-cloudflare-outage-knocks-out-ai-chatbots-shopify/), [6](https://www.radware.com/security/threat-advisories-and-attack-reports/everything-you-need-to-know-about-the-cloudflare-outage/), [7](https://www.radware.com/blog/application-protection/inside-the-cloudflare-global-outage/), [8](https://codebook.machinarecord.com/threatreport/silobreaker-cyber-alert/43703/)]

Are you experiencing **intermittent 5xx errors** or **Turnstile validation failures** on your site right now?

- [link](https://blog.cloudflare.com/ddos-threat-report-2025-q4/)\
  2025 Q4 DDoS threat report: A record-setting 31.4 Tbps attack caps a ...\
  As the number of attacks increased over the course of 2025, the size of the attacks increased as well, growing by over 700% compar...\
  The Cloudflare Blog
- [link](https://blog.cloudflare.com/defending-the-internet-how-cloudflare-blocked-a-monumental-7-3-tbps-ddos/)\
  Defending the Internet: how Cloudflare blocked a monumental 7.3 Tbps DDoS ...\
  Using the distributed nature of DDoS attacks against it. The attacked IP address was advertised from Cloudflare's network using gl...\
  The Cloudflare Blog
- [link](https://www.radware.com/security/threat-advisories-and-attack-reports/everything-you-need-to-know-about-the-cloudflare-outage/)\
  Everything You Need to Know About the Cloudflare Outage - Radware\
  Key Attack Insights: Security as the Single Point of Failure: The outage occurred within the protection layer itself. The system e...\
  Radware

Show all