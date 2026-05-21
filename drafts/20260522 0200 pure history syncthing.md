syncthing

Quick results from the web:

[link](https://syncthing.net/)

**Syncthing**

**Syncthing** is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes.

Syncthing·https://syncthing.net

[link](https://github.com/syncthing/syncthing)

Open Source Continuous File Synchronization · GitHub

**Syncthing is a continuous file synchronization program**. It synchronizes files between two or more computers. We strive to fulfill the goals below.

GitHub·https://github.com

**[Syncthing](https://syncthing.net/)**<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong> is a free, open-source continuous file synchronization program</strong> that copies files between two or more devices in real time</mark>. Unlike cloud services like Google Drive or Dropbox, it uses a decentralized, **peer-to-peer (P2P) architecture**, meaning your data goes directly from one machine to another without ever being stored on a central third-party server. \[[1](https://syncthing.net/), [2](https://en.wikipedia.org/wiki/Syncthing), [3](https://www.lenovo.com/us/en/glossary/syncthing/?srsltid=AfmBOopsgn89BcxOY6dqi-YpoalUgXxrPLbvpYf4hjCt6a-oQhBtIwf7), [4](https://www.youtube.com/watch?v=PSx-BkMOPF4)]

Key Features

- **Privacy & Security**: Every device is identified by a strong cryptographic certificate, and all data transfers are completely encrypted using TLS.
- **No Cloud Dependency**: Your data remains on your hardware. Devices communicate directly over your local network (LAN) or over the internet via secure public relays.
- **Real-Time Syncing**: It tracks changes in your folders continuously, instantly replicating modifications, additions, or deletions across connected nodes.
- **File Versioning**: You can configure trash cans or version histories to recover files if they are accidentally changed or deleted. \[[1](https://github.com/syncthing), [2](https://www.reddit.com/r/selfhosted/comments/1edhfz1/syncthing%5Ftutorial%5Fopen%5Fsource%5Fprivate%5Ffile%5Fsync/), [3](https://docs.syncthing.net/users/faq.html), [4](https://www.youtube.com/watch?v=cccPnXnh6wA\&vl=en), [5](https://syncthing.net/), [6](https://en.wikipedia.org/wiki/Syncthing)]

Supported Platforms

Syncthing runs natively on a massive array of operating systems: \[[1](https://en.wikipedia.org/wiki/Syncthing)]

- Windows (often managed via wrappers like Syncthing Windows Setup or SyncTrayzor)
- macOS and Linux
- Android (via community forks like Syncthing-Fork)
- _Note on iOS_: Official iOS support is limited due to platform restrictions, though third-party clients like Mobius Sync exist. \[[1](https://github.com/syncthing/syncthing), [2](https://github.com/Bill-Stewart/SyncthingWindowsSetup/), [3](https://en.wikipedia.org/wiki/Syncthing), [4](https://f-droid.org/packages/com.github.catfriend1.syncthingfork/), [5](https://www.reddit.com/r/selfhosted/comments/1edhfz1/syncthing%5Ftutorial%5Fopen%5Fsource%5Fprivate%5Ffile%5Fsync/), [6](https://news.ycombinator.com/item?id=35879039)]

How to Get Started

1. **Install the application** on at least two machines you wish to sync.
2. **Open the Web GUI** (typically at `http://127.0.0.1:8384`).
3. **Link the devices** by copying the unique "Device ID" string from one machine and adding it to the other.
4. **Share a folder** by assigning a folder on Machine A to Machine B. Once Machine B accepts the request, synchronization begins. \[[1](https://syncthing.net/downloads/), [2](https://gist.github.com/DannyQuah/242f08d20a9ada7b1077e077bb2d10ac), [3](https://docs.syncthing.net/intro/getting-started.html), [4](https://wiki.nixos.org/wiki/Syncthing)]

To help you get the exact information you need, are you looking for **installation instructions** for a specific operating system, help **troubleshooting a connection issue**, or a guide on how to sync a specific app like **Obsidian**? \[[1](https://www.reddit.com/r/ObsidianMD/comments/1rehmky/just%5Fstarted%5Fusing%5Fsyncthing%5Fwith%5Fobsidian%5Fand%5Fit/)]

- [link](https://syncthing.net/)\
  Syncthing\
  Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely p...\
  Syncthing
- [link](https://github.com/syncthing/syncthing)\
  Open Source Continuous File Synchronization · GitHub\
  There are many things we care about that don't make it on to the list. It is fine to optimize for these values, as long as they ar...\
  GitHub
- [link](https://www.youtube.com/watch?v=cccPnXnh6wA\&vl=en)\
  How I Use Syncthing for Real Time Backups\
  May 20, 2025 — tom here from Orange Systems. so you worked all day and you have your nightly backups running at 2 a.m. great good start but failu...\
  6:54\
  YouTube·Lawrence Systems

Show all

the history of syncthing

**[Syncthing](https://syncthing.net/)**<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong> was created in December 2013 by Swedish developer Jakob Borg</strong></mark> as an open-source, privacy-first alternative to proprietary file-synchronization tools. Over more than a decade, it evolved from a solo weekend project into one of the most trusted decentralized utilities in the self-hosted ecosystem. \[[1](https://www.reddit.com/r/selfhosted/comments/1edhfz1/syncthing%5Ftutorial%5Fopen%5Fsource%5Fprivate%5Ffile%5Fsync/), [2](https://en.wikipedia.org/wiki/Syncthing), [3](https://lookanotherblog.com/tag/compiling/)]

Chronological History

1\. The Catalyst (2013)

In 2013, BitTorrent released a closed-source alpha software called BitTorrent Sync (now Resilio Sync). While praised for its peer-to-peer efficiency, the tech community grew deeply concerned about its proprietary, black-box nature. \[[1](https://docs.syncthing.net/users/faq.html), [2](http://jasonwryan.com/blog/2014/05/10/syncthing/), [3](https://t-shaped.nl/posts/synctrain-a-rethought-ios-client-for-syncthing), [4](https://en.wikipedia.org/wiki/Resilio%5FSync), [5](https://www.youtube.com/watch?v=PSx-BkMOPF4)]

Frustrated by the lack of an open, verifiable alternative, Jakob Borg began writing a protocol and tool from scratch. He released **Syncthing v0.1 on December 22, 2013**, with the first public binary dropping a week later. \[[1](https://forum.syncthing.net/t/syncthing-is-one-year-old/1601), [2](https://lookanotherblog.com/tag/compiling/)]

2\. Protocol and Foundation (2014–2018)

Borg built the application in the Go programming language and formalized the **Block Exchange Protocol (BEP)** to handle how data splits, verifies, and securely transmits over networks. \[[1](https://fr.wikipedia.org/wiki/Syncthing), [2](https://delftswa.gitbooks.io/desosa-2017/content/syncthing/chapter.html), [3](https://www.bytesizego.com/blog/syncthing-the-p2p-file-sync-tool-written-in-go)]

- **Pulse Rebrand Attempt**: In October 2014, an indie organization briefly attempted to integrate Syncthing as the backbone of their privacy platform under the name "Pulse", but the community quickly reverted to the original name.

- **Infrastructure Growth**: The core team introduced global discovery servers and public relay pools. These additions allowed home devices to find each other across the internet without requiring complex router configurations or port forwarding. \[[1](https://www.reddit.com/r/selfhosted/comments/1edhfz1/syncthing%5Ftutorial%5Fopen%5Fsource%5Fprivate%5Ffile%5Fsync/), [2](https://forum.syncthing.net/t/archived-introducing-pulse-and-ind-ie/1074), [3](https://forum.syncthing.net/t/syncthing-is-still-syncthing/1372), [4](https://forum.syncthing.net/t/discoveries-relays/8784)]

<!---->

```
  [2013] v0.1 Initial Release (Solo project by Jakob Borg)
    │
  [2014] Introduction of Block Exchange Protocol & Relays
    │
  [2019] v1.0.0 Milestone (5 years of beta testing completed)
    │
  [2025] v2.0.0 Major Architectural Upgrade (Database overhaul)
```

3\. Reaching Stability: Version 1.0 (2019)

After five years of continuous beta testing and incremental refinements, **Syncthing v1.0.0 was officially released in January 2019**. By this time, it was widely praised for its stability, offering cross-platform support for Windows, Mac, Linux, and Android, alongside standard file versioning capabilities. \[[1](https://www.reddit.com/r/selfhosted/comments/1edhfz1/syncthing%5Ftutorial%5Fopen%5Fsource%5Fprivate%5Ffile%5Fsync/)]

4\. System Overhaul: Version 2.0 (2025)

In August 2025, the project hit its next major milestone with the release of **Syncthing 2.0**. This release replaced the legacy LevelDB database backend with SQLite. This structural change substantially minimized memory usage and boosted performance on massive directories containing millions of files. \[[1](https://forum.syncthing.net/t/syncthing-2-0-august-2025/24758), [2](https://www.heise.de/en/news/Syncthing-2-0-0-Synchronize-files-between-computers-without-the-cloud-10518792.html), [3](https://github.com/syncthing/syncthing/releases), [4](https://forum.syncthing.net/t/syncthing-2-0-0-beta-11/24095), [5](https://forum.syncthing.net/t/is-syncthing-v2-with-very-large-folders-possible/26082)]

Philosophical Legacy

Throughout its entire history, Syncthing has actively resisted commercialization or monetization of user data. The project operates entirely on a transparent, community-driven development model funded by donations. Its strict adherence to the Mozilla Public License (MPL) guarantees that your synchronization network remains fully local, private, and under your control. \[[1](https://www.reddit.com/r/selfhosted/comments/1edhfz1/syncthing%5Ftutorial%5Fopen%5Fsource%5Fprivate%5Ffile%5Fsync/), [2](https://syncthing.net/), [3](https://forum.syncthing.net/t/syncthing-is-one-year-old/1601), [4](https://fr.wikipedia.org/wiki/Syncthing), [5](https://docs.syncthing.net/v1.24.0/users/syncthing.html)]

Would you like to learn more about **how the Block Exchange Protocol works**, explore the **history of its Android forks**, or look into its **current active development**? \[[1](https://fr.wikipedia.org/wiki/Syncthing)]

- [link](https://docs.syncthing.net/users/faq.html)\
  FAQ - Syncthing documentation\
  \[1] Syncthing is an open source file synchronization tool. Syncthing uses an open and documented protocol, and likewise the securi...\
  Syncthing
- [link](https://www.reddit.com/r/selfhosted/comments/1edhfz1/syncthing%5Ftutorial%5Fopen%5Fsource%5Fprivate%5Ffile%5Fsync/)\
  Syncthing Tutorial: Open Source & Private File Sync\
  Jul 27, 2024 — while backups are an important part of your strategy for keeping your data safe real time file synchronization can also be an adde...\
  29:59\
  Reddit·Lawrence Systems
- [link](https://forum.syncthing.net/t/syncthing-is-one-year-old/1601)\
  Syncthing is one year old! - Announce\
  Dec 23, 2014 — Party party! Syncthing 0.1 was released on the 22nd of December 2013. That's about a year ago. First binary release that anyone co...\
  Syncthing

Show all

criticism on syncthing

While [Syncthing](https://syncthing.net/) is highly praised for its privacy and decentralized architecture, it faces consistent criticism from users and developers regarding its complexity, resource consumption, and platform limitations. \[[1](https://www.reddit.com/r/Syncthing/comments/1324xrm/how%5Freliable%5Fis%5Fsynthing/), [2](https://www.reddit.com/r/linux/comments/hcn6yn/syncthing%5Fis%5Feverything%5Fi%5Fused%5Fto%5Flove%5Fabout/), [3](https://forum.syncthing.net/t/syncthing-is-such-a-massive-resource-hog/5494), [4](https://www.lenovo.com/ca/en/glossary/syncthing/), [5](https://forum.syncthing.net/t/use-zerotier-as-network-backend/13411)]

The most common criticisms and drawbacks of Syncthing include:

1\. Steep Learning Curve and Complex UX \[[1](https://news.ycombinator.com/item?id=34651293)]

- **Confusing Terminology**: Setting up Syncthing requires understanding peer-to-peer mechanics, cryptography keys, "Device IDs", and separate folder sharing handshakes.
- **No Centralized Dashboard**: Because it is decentralized, there is no single master dashboard. If you run a network of five devices, you have to manage settings, folder acceptances, and pairing on each individual machine.
- **Cryptic Sync State Metrics**: Users frequently complain about folders getting stuck at "99% Synced" or entering endless loop scanning states with vague log outputs, requiring manual troubleshooting. \[[1](https://www.reddit.com/r/linux/comments/5f0av3/setup%5Fand%5Freview%5Fof%5Fsyncthing%5Fthe%5Fopen%5Fsource/), [2](https://www.reddit.com/r/Syncthing/comments/1324xrm/how%5Freliable%5Fis%5Fsynthing/), [3](https://www.reddit.com/r/Syncthing/comments/1rk6b1y/horrid%5Ffirst%5Fexperience%5Fwith%5Fsyncthing/)]

2\. High Resource Consumption on Large Directories \[[1](https://forum.syncthing.net/t/storage-endpoint-disconnected-with-large-folder-on-android/23455)]

- **CPU and RAM Intensive**: Syncthing continuously hashes files, encrypts traffic via TLS, and compresses data. On older hardware, low-powered NAS devices, or setups with hundreds of thousands of files, this tracking database can consume substantial RAM and cause high CPU spikes.
- **Battery Drain**: Because it utilizes continuous scanning and file-watching engines, running it continuously on mobile devices can drastically accelerate battery depletion. \[[1](https://forum.syncthing.net/t/negatives-of-syncthing-in-my-testings-so-far/5311), [2](https://docs.syncthing.net/users/faq.html), [3](https://forum.syncthing.net/t/syncthing-is-such-a-massive-resource-hog/5494), [4](https://github.com/researchxxl/syncthing-android/blob/main/wiki/Info-on-battery-optimization-and-settings-affecting-battery-usage.md)]

3\. Limited Mobile Ecosystem Support \[[1](https://www.xda-developers.com/tiny-free-utility-changed-how-share-files-between-windows-android/)]

- **The iOS Barrier**: Apple’s background execution and filesystem limitations make a true, native open-source Syncthing client nearly impossible. Users must rely on paid or premium third-party apps like Mobius Sync, which struggle to sync automatically in the background.
- **Official Android App Sunset**: The official mainline Android app was permanently discontinued. The developer cited Google Play’s restrictive scoping storage APIs and grueling review cycles as the core issues. Android users must now rely on community forks like the Syncthing-Fork on F-Droid. \[[1](https://www.reddit.com/r/ObsidianMD/comments/1h0ymmo/syncthing%5Ffor%5Fandroid%5Fisnt%5Fdead%5Fand%5Fpeople%5Fneed/), [2](https://news.ycombinator.com/item?id=28860785), [3](https://www.youtube.com/watch?v=aEKlQD0tFFY), [4](https://forum.syncthing.net/t/discontinuing-syncthing-android/23002), [5](https://news.ycombinator.com/item?id=41895718), [6](https://www.reddit.com/r/selfhosted/comments/1g86vxj/psa%5Fofficial%5Fsyncthing%5Fandroid%5Fapp%5Fwill%5Fbe/)]

4\. Risk of Proximity Data Loss

- **Propagation Errors**: Syncthing is **not a backup tool**; it is a live mirroring tool. If malware or a user error deletes or corrupts a folder on Machine A, Syncthing instantly mirrors that destruction to Machines B, C, and D. While file versioning exists, it requires manual initial setup and is often considered primitive.
- **Frequent Sync Conflicts**: Simultaneous edits across offline devices result in cluttered `.sync-conflict-` files generated throughout your directories, requiring manual cleanup and merging. \[[1](https://www.reddit.com/r/linux/comments/5f0av3/setup%5Fand%5Freview%5Fof%5Fsyncthing%5Fthe%5Fopen%5Fsource/), [2](https://lobste.rs/s/pacmpc/do%5Fnot%5Fuse%5Fsyncthing), [4](https://news.ycombinator.com/item?id=21371266), [5](https://www.reddit.com/r/Syncthing/comments/1rk6b1y/horrid%5Ffirst%5Fexperience%5Fwith%5Fsyncthing/), [6](https://www.reddit.com/r/linux/comments/hcn6yn/syncthing%5Fis%5Feverything%5Fi%5Fused%5Fto%5Flove%5Fabout/)]

5\. Incompatibility with Live Databases \[[1](https://github.com/researchxxl/syncthing-android/blob/main/wiki/Info-on-battery-optimization-and-settings-affecting-battery-usage.md)]

- **Database Corruption**: Syncthing handles static files exceptionally well, but it struggles with actively changing live database blocks. Syncing files like active SQLite files, active game saves, or browser data folders while they are in use can result in instantaneous database corruption or massive processing overhead. \[, [2](https://www.reddit.com/r/Syncthing/comments/kcgias/syncing%5F100gb%5Fdata%5Fdrive%5Fon%5Fmy%5Flaptop%5Fshall%5Fi/)]

Are you weighing Syncthing against a specific competitor like **Nextcloud** or **Resilio Sync**, or are you evaluating it for a particular use case like **photo backups** or **document management**? \[[1](https://news.ycombinator.com/item?id=28860785), [2](https://www.youtube.com/watch?v=dpCTixV7agQ\&t=48)]

- [link](https://www.reddit.com/r/linux/comments/5f0av3/setup%5Fand%5Freview%5Fof%5Fsyncthing%5Fthe%5Fopen%5Fsource/)\
  Setup and Review of SyncThing, The Open Source File ...\
  Nov 26, 2016 — okay we're going to take a look today at Sync Thing sync Thing is a decentralized peer-to-peer file synchronization program that c...\
  18:49\
  Reddit·Lawrence Systems
- [link](https://www.reddit.com/r/Syncthing/comments/1324xrm/how%5Freliable%5Fis%5Fsynthing/)\
  How reliable is synthing? : r/Syncthing - Reddit\
  Apr 28, 2023 — OldBotV0. • 3y ago. I use it to sync 63GB/24000Files in 20 different shared folders between Win10/Win11/Linux/Android/RasPi device...\
  Reddit·r/Syncthing
- [link](https://www.reddit.com/r/Syncthing/comments/1rk6b1y/horrid%5Ffirst%5Fexperience%5Fwith%5Fsyncthing/)\
  Horrid first experience with Syncthing - Reddit\
  Mar 4, 2026 — Syncthing on machine #1 says that machine #2 is at 37% scanning, or 62% scanning, or 83% scanning. It changes all the time. Syncth...\
  Reddit·r/Syncthing

Show all