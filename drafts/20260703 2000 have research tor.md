<!-- i will host it on github. you could definitely dmca. i would not reupload. but i would persist on telegram. could you dmca tg? well, you might, eventually, after a massive time window. then i would go tor. you could never takedown. -->

<!-- tech, only tech. -->

# who pay for you if you host a site for free on tor

When you host a website for free on the Tor network (a ".onion" site), you generally host it on your own hardware, meaning <mark><strong>you pay for it yourself</strong><span> </span>through your existing internet and electricity bills</mark>.

If you use a third-party free Tor hosting service, **the service provider pays for it**, usually funded by donations, advertisements, or premium upgrades.

Here is a breakdown of how free Tor hosting works and who covers the costs:

### Self-Hosting (The Standard Method)

Tor allows anyone to turn their own computer into a server without paying for domain registration or public IP addresses.

- **Your Infrastructure**: You use your own computer, laptop, or a cheap Raspberry Pi.
- **Your Electricity**: You pay for the power to keep the device running 24/7.
- **Your Internet**: You use your existing home internet connection.
- **Tor Project**: The Tor software itself is free and open-source, maintained by volunteer nodes worldwide.

### Free Tor Hosting Providers

If you do not want to run a server at home, some platforms offer free onion site hosting. They cover costs through specific models:

- **Donations**: Many privacy-centric hosts run purely on Bitcoin or Monero donations from the community.
- **Freemium Models**: Providers give you basic, slow hosting for free, but charge a fee for more storage, bandwidth, or custom domain names.
- **Ad-Supported**: Some free hosts inject advertisements into your website to generate revenue.
- **Cross-Subsidization**: Companies that sell standard web hosting or VPN services sometimes offer free Tor hosting as a marketing tool to attract customers to their paid products.

### Hidden Risks of Free Hosts

While free hosting providers eliminate your hardware costs, they come with significant trade-offs:

- **Zero Privacy**: The host can see your website's traffic, database, and files.
- **High Downtime**: Free Tor hosts frequently shut down without warning due to server costs or legal pressure.
- **Security Scams**: Some free hosts steal user data, modify your site's code, or replace your crypto wallets with their own.

To give you the most accurate advice, let me know:

- Are you planning to **self-host** or look for a **hosting service**?
- What is the **purpose** of the site (static blog, forum, file sharing)?
- How critical is **anonymity and security** for your project?

I can help you choose the safest setup for your needs.

- [link](https://blog.cloudflare.com/cloudflare-onion-service/)\
  Introducing the Cloudflare Onion Service\
  Sep 20, 2018 — Before we continue, if you need a refresher on what Tor ( Tor network ) is or why we are talking about onions, check out the Tor (\
  \
  \
  The Cloudflare Blog
- [link](https://www.hostgator.com/blog/free-hosting-vs-paid-hosting/)\
  Free Hosting vs Paid Hosting: Pros and Cons\
  Mar 13, 2019 — 1. Ads This is one of the most common trade-offs with free web hosting plans. And it makes sense. Companies have to spend money fo...\
  \
  \
  HostGator
- [link](https://supporthost.com/free-wordpress-hosting/)\
  Is it worth to use a free WordPress hosting? Pros and cons\
  May 3, 2023 — Secondly, free hosting providers often use this service as a way to push you to upgrade to a premium service offered by them. It u...\
  \
  \
  SupportHost

Show all

## i mean when you do not have a public ip, who pay for it

When you do not have a public IP address, <mark><strong>you still pay for it</strong>, but indirectly through your normal home internet bill</mark>.

On Tor, you do not need to buy a public IP because of how the Tor software handles networking. Here is exactly who covers the technical and financial costs when you host without a public IP:

### Your Internet Service Provider (ISP)

You pay your ISP for standard internet access. Your ISP assigns you a private IP address behind **CGNAT (Carrier-Grade NAT)**, which is common for home internet and mobile data.

- **The Cost**: Covered by your monthly internet subscription.
- **The Technology**: Normally, CGNAT blocks you from hosting websites. However, Tor bypasses this limitation completely for free.

### How Tor Bypasses the Need for a Public IP

In traditional web hosting, a user connects directly to your public IP. On Tor, the connection logic is reversed, removing the need for a public IP altogether:

- **Outbound Connections**: Your computer creates an _outbound_ connection to the Tor network. Because your computer initiates the connection, it easily passes through your ISP's CGNAT or firewalls without needing a public IP.
- **Rendezvous Points**: Your site and the visitor both connect to a random volunteer server inside the Tor network (called a Rendezvous Point).
- **The Handshake**: The Tor network connects these two wires in the middle. Traffic flows back and forth through this tunnel, so the outside world never needs to see your IP address.

### The Tor Volunteers (The Infrastructure Cost)

The global Tor network consists of thousands of servers called **relays**.

- **Who Pays**: Volunteers, universities, privacy organizations, and research institutions pay for the high-speed servers and massive bandwidth required to route this traffic.
- **The Cost to You**: $0. They donate this bandwidth to the public to maintain global privacy.

If you are setting this up, let me know:

- What **operating system** (Windows, Linux, Mac) are you using?
- What **web server software** (like Nginx or Apache) do you plan to run?

I can provide the exact steps to configure your hidden service behind a private IP.

- [link](https://www.maxmind.com/en/geoip-anonymous-ip-database)\
  GeoIP® Anonymous IP database\
  These are IP addresses from which Tor users will access the internet. The Tor Project is an open network used by those who wish to...\
  \
  \
  MaxMind
- [link](https://www.reddit.com/r/explainlikeimfive/comments/2y0q34/eli5%5Fwhat%5Fis%5Fa%5Fstatic%5Fip%5Faddress%5Fhow%5Fdoes%5Fit%5Fwork/)\
  ELI5: What is a static IP address, how does it work and why is it better than a dynamic IP address? : r/explainlikeimfive\
  Mar 6, 2015 — You would pay your ISP for a separate Public Static IP so that you can offer a commonly accessed device through the Internet.\
  \
  Reddit
- [link](https://medium.com/@adityamishra2217/understanding-ip-addresses-cidr-vpcs-and-network-components-9fde02c7dc14)\
  Understanding IP Addresses, CIDR, VPCs, and Network Components\
  Feb 24, 2025 — Cellular Networks: Cellular devices commonly use private IP addressing with CGNAT to facilitate internet access while managing the...\
  \
  \
  Medium

Show all

## volunteers?

Yes, the entire Tor network relies on a global network of **over 7,000 volunteer-operated servers** called relays. These volunteers provide the computing power and bandwidth that allow you to host or browse a website anonymously without paying a network fee. [link](https://community.torproject.org/relay/)

These volunteers generally fall into four main categories:

### 1. Privacy Advocacy Groups

Organizations like Torservers.net and various digital rights non-profits pool public donations to buy high-speed server bandwidth specifically to keep the Tor network fast and stable.

### 2. Everyday Individuals

Thousands of tech-savvy individuals around the world dedicate their own spare hardware, home internet connections, or cheap cloud servers out of a personal belief in free speech, anti-censorship, and online privacy. [link](https://www.reddit.com/r/TOR/comments/11zrnep/my%5Fso%5Fpaid%5Ffor%5Ftor%5Frelay%5Fwhy/)

### 3. Universities and Research Labs

Many computer science departments and research institutions host Tor nodes. They do this to study network traffic, improve cybersecurity, and support academic freedom globally. [link](https://www.opentech.fund/projects-we-support/supported-projects/the-tor-project-relay-operator-community-health/)

### 4. Tech Companies

Privacy-focused businesses (such as Mullvad VPN or DuckDuckGo) frequently fund the Tor Project nonprofit or run their own high-speed nodes to support the broader privacy ecosystem. [link](https://www.zdnet.com/article/half-of-the-tor-projects-funding-now-comes-from-the-private-sector/)

***

### Why do they pay for it?

Because Tor operates on a "give back" philosophy. The network only works if people who have extra internet bandwidth donate it to those who live under heavy censorship or surveillance. [link](https://community.torproject.org/relay/)

If you want to know more about this infrastructure, let me know:

- Would you like to know how to **set up your own volunteer node**?
- Are you interested in the **security risks** of who runs these nodes?

I can explain the different types of Tor relays and how they keep data safe.

- [link](https://www.reddit.com/r/TOR/comments/11zrnep/my%5Fso%5Fpaid%5Ffor%5Ftor%5Frelay%5Fwhy/)\
  My SO paid for TOR Relay. Why? : r/TOR\
  Mar 23, 2023 — A Tor relay is a service that volunteers set up to help the Tor network. Tor is a network used by many people for privacy and anon...\
  Reddit
- [link](https://tor.stackexchange.com/questions/14191/who-pays-for-the-network)\
  Who pays for the network? - Tor Stack Exchange\
  Feb 27, 2017 — The network is run by volunteers like you and me or groups like Noisebridge or torservers.net. Jens Kubieziel. – Jens Kubieziel. 2...\
  Tor Stack Exchange
- [link](https://www.privacyguides.org/articles/2025/04/30/in-praise-of-tor/)\
  In Praise of Tor: Why You Should Support and Use Tor\
  Apr 30, 2025 — Circumvent censorship Because of how the Tor Network redirects traffic, it's a perfect tool to resist censorship. Using Tor can gi...\
  Privacy Guides

Show all

## how are they incentived or funded

The volunteers who keep the Tor network running are **not paid financially** to run servers. Instead, they are driven by strong **ideological incentives**, while the actual infrastructure costs are covered by a mix of **government grants, crowd-funding, and institutional budgets**. [link](https://blog.torproject.org/financials-blog-post-2023-2024/)

The breakdown below details how these volunteers are incentivized and funded:

### 1. Ideological and Non-Monetary Incentives

The Tor Project explicitly avoids paying server operators to keep the network decentralized and collaborative. If operators were paid, a single wealthy entity could buy up the majority of the servers and completely compromise user privacy. Instead, operators are motivated by:

- **The "Give Back" Ethos**: Many operators use Tor daily for their own privacy and host a node to contribute back to the health and speed of the network. [link](https://www.reddit.com/r/TOR/comments/o85r5y/are%5Fpeople%5Fwho%5Fhost%5Frelays%5For%5Fexit%5Fnodes/)
- **Anti-Censorship & Human Rights**: Activists host nodes to ensure that whistleblowers, journalists, and citizens living under authoritarian regimes can bypass heavy internet censorship. [link](https://www.opentech.fund/projects-we-support/supported-projects/the-tor-project-relay-operator-community-health/)
- **Community Recognition**: The Tor Project provides non-financial rewards like public acknowledgment, community status, and official Tor merchandise/swag.

### 2. How the Server Infrastructure is Funded

While individual hobbyists pay for their nodes out of pocket, massive high-speed nodes require serious funding: [link](https://blog.torproject.org/support-tor-network-donate-exit-node-providers/)

- **Government Grants (~35%)**: The Tor Project receives substantial funding from democratic governments, including the U.S. State Department, the [Open Technology Fund (OTF)](https://en.wikipedia.org/wiki/Open%5FTechnology%5FFund), and the Swedish government. They view Tor as a critical tool for promoting democracy and bypassing censorship abroad. [link](https://www.opentech.fund/projects-we-support/supported-projects/the-tor-project-relay-operator-community-health/)
- **Dedicated Non-Profits**: Organizations like Torservers.net and Noisebridge exist solely to collect public donations and use 100% of those funds to buy high-bandwidth server clusters specifically for Tor. [link](https://blog.torproject.org/support-tor-network-donate-exit-node-providers/)
- **Corporate & Foundation Sponsorships**: Tech giants, privacy-focused corporations (like DuckDuckGo), and major private foundations (like the Ford Foundation) donate millions annually to fund global privacy infrastructure. [link](https://blog.torproject.org/financials-blog-post-2023-2024/)
- **Web3 & Crypto Crowdfunding**: The Tor community frequently runs Web3-native crowdfunding campaigns. These campaigns use advanced funding models to pool crypto donations (Bitcoin, Monero, Zcash) from thousands of global users to keep infrastructure projects alive. [link](https://blog.torproject.org/fund-internet-freedom/)

***

If you are thinking about interacting with this network, let me know:

- Do you want to see **how much bandwidth** the network handles globally?
- Are you interested in **donating to a trusted node operator** instead of running your own server?

I can provide resources on how to safely support the network.

- [link](https://www.opentech.fund/projects-we-support/supported-projects/the-tor-project-relay-operator-community-health/)\
  The Tor Project Relay Operator Community Health | OTF\
  The Tor Project is an organization that has developed a software and network system that allows for anonymous and secure communica...\
  www.opentech.fund
- [link](https://www.youtube.com/watch?v=IhXowQRP5WY)\
  The Government is Funding Tor?\
  Sep 18, 2024 — speaking of madness. the US government pushes for the doc just keeps floating around uh the US government pushes for greater VPN. ...\
  5:42\
  YouTube·The WAN Show
- [link](https://blog.torproject.org/fund-internet-freedom/)\
  A new way to fund internet freedom | The Tor Project\
  May 19, 2026 — A new way to fund internet freedom. ... A coalition of privacy, internet freedom, cryptocurrency and open-source ecosystems, led b...\
  Tor Blog

Show all
