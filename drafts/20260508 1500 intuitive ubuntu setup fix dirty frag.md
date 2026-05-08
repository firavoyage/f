new linux cve

1:39 AM

The most critical new Linux vulnerability is **CVE-2026-31431**, nicknamed **"Copy Fail."** Disclosed on April 29, 2026, it is a high-severity local privilege escalation (LPE) flaw that allows an unprivileged user to gain **root access** across almost all major Linux distributions released since 2017. \[[1](https://www.wiz.io/blog/copyfail-cve-2026-31431-linux-privilege-escalation-vulnerability), [2](https://unit42.paloaltonetworks.com/cve-2026-31431-copy-fail/), [3](https://www.linkedin.com/pulse/warning-new-linux-vulnerability-enables-root-access-iv9ce), [4](https://cert.europa.eu/publications/security-advisories/2026-005/)]

1\. CVE-2026-31431: "Copy Fail" \[[1](https://cert.europa.eu/publications/security-advisories/2026-005/)]

- **Impact:** Root takeover and potential **container escape**.
- **Cause:** A logic flaw in the kernel's crypto subsystem (`algif_aead`).
- **Severity:** CVSS score of **7.8 (High)**.
- **Status:** Actively exploited in the wild and added to the [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog).
- **Discovery:** Notably found in just one hour by an **AI-assisted** research tool. \[[1](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), [2](https://xint.io/blog/copy-fail-linux-distributions), [3](https://cert.europa.eu/publications/security-advisories/2026-005/), [4](https://www.sysdig.com/blog/cve-2026-31431-copy-fail-linux-kernel-flaw-lets-local-users-gain-root-in-seconds), [5](https://security.utoronto.ca/advisories/copy-fail-linux-kernel-lpe-and-container-escape/), [6](https://thehackernews.com/2026/05/cisa-adds-actively-exploited-linux-root.html), [7](https://www.bugcrowd.com/blog/what-we-know-about-copy-fail-cve-2026-31431/), [8](https://www.wiz.io/blog/copyfail-cve-2026-31431-linux-privilege-escalation-vulnerability), [9](https://unit42.paloaltonetworks.com/cve-2026-31431-copy-fail/)]

2\. Other Recent Vulnerabilities

- **Dirty Frag (CVE Pending):** Disclosed on May 7, 2026, this is a successor to Copy Fail that targets the `xfrm` (IPsec) subsystem. It is also a deterministic logic bug with a very high success rate for gaining root access.
- **CVE-2026-27654:** A vulnerability in **nginx** that can be chained with Copy Fail to escalate from limited WebDAV access to full root privileges. \[[1](https://www.reddit.com/r/selfhosted/comments/1t0uoxm/patch%5Fyour%5Fservers%5Fpeeps%5Fnew%5Flinux%5Fkernel/), [2](https://thehackernews.com/2026/05/linux-kernel-dirty-frag-lpe-exploit.html), [3](https://almalinux.org/blog/2026-05-07-dirty-frag/), [4](https://blog.cloudlinux.com/dirty-frag-mitigation-and-kernel-update)]

3\. Remediation & Mitigation

| Action \[[1](https://www.reddit.com/r/cybersecurity/comments/1t2z1xa/copy%5Ffail%5Flinux%5Fkernel%5Fvulnerability%5Fnow%5Fpatched/), [2](https://almalinux.org/blog/2026-05-01-cve-2026-31431-copy-fail/), [3](https://www.reddit.com/r/cybersecurity/comments/1sze8dx/new%5Fcritical%5Fcve%5Froot%5Fon%5Fevery%5Fmajor%5Flinux/), [4](https://cert.europa.eu/publications/security-advisories/2026-005/), [5](https://www.bugcrowd.com/blog/what-we-know-about-copy-fail-cve-2026-31431/)] | Details                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Patching**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Major distributions like [Debian](https://www.reddit.com/r/cybersecurity/comments/1t2z1xa/copy%5Ffail%5Flinux%5Fkernel%5Fvulnerability%5Fnow%5Fpatched/), [AlmaLinux](https://almalinux.org/blog/2026-05-01-cve-2026-31431-copy-fail/), and Ubuntu have released kernel updates. Apply these and **reboot** immediately. |
| **Module Blacklist**                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | If you cannot patch immediately, disable the affected module: `echo "install algif_aead /bin/false" > /etc/modprobe.d/disable-algif.conf`.                                                                                                                                                                               |
| **Seccomp**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | For containerized environments, use seccomp policies to block the creation of `AF_ALG` sockets.                                                                                                                                                                                                                          |

For detailed technical analysis and a full list of affected versions, refer to the Copy Fail vulnerability site or the [CERT-EU Security Advisory](https://cert.europa.eu/publications/security-advisories/2026-005/). \[[1](https://cert.europa.eu/publications/security-advisories/2026-005/)]

- [link](https://www.reddit.com/r/selfhosted/comments/1t0uoxm/patch%5Fyour%5Fservers%5Fpeeps%5Fnew%5Flinux%5Fkernel/)\
  Patch your servers, peeps, new Linux kernel vulnerability just ...\
  Chicken-Chaser6969. • 6d ago. If people could read they'd probably understand this is not the exploit they think it is. bz386. OP ...\
  Reddit
- [link](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)\
  Known Exploited Vulnerabilities Catalog - CISA\
  CVE-2026-31431. Linux Kernel Incorrect Resource Transfer Between Spheres Vulnerability: Linux Kernel contains an incorrect resourc...\
  CISA (.gov)
- [link](https://www.sysdig.com/blog/cve-2026-31431-copy-fail-linux-kernel-flaw-lets-local-users-gain-root-in-seconds)\
  CVE-2026-31431: “Copy Fail” Linux kernel flaw lets local users gain ...\
  On April 29, 2026, CVE-2026-31431 (CVSS 7.8 HIGH), nicknamed “Copy Fail,” was disclosed in the Linux kernel's algif\_aead userspace...\
  Sysdig

Show all

compare Dirty Frag and copy fail

1:40 AM

**Dirty Frag** and **Copy Fail** (CVE-2026-31431) are both high-severity "universal" local privilege escalation (LPE) vulnerabilities discovered in early 2026. They belong to the same class of deterministic logic flaws that allow an unprivileged local user to gain **root access** by corrupting the system's [page cache](https://thehackernews.com/2026/05/linux-kernel-dirty-frag-lpe-exploit.html) in memory. \[[1](https://thehackernews.com/2026/05/linux-kernel-dirty-frag-lpe-exploit.html), [2](https://www.reddit.com/r/SecOpsDaily/comments/1t71ht0/another%5Funiversal%5Flinux%5Flocal%5Fprivilege/), [3](https://www.heise.de/en/news/Dirty-Frag-Linux-flaws-grant-root-access-11286796.html)]

Technical Comparison

| Feature \[[1](https://www.microsoft.com/en-us/security/blog/2026/05/01/cve-2026-31431-copy-fail-vulnerability-enables-linux-root-privilege-escalation/), [2](https://almalinux.org/blog/2026-05-07-dirty-frag/), [3](https://www.phoronix.com/news/Dirty-Frag-Linux), [4](https://cert.europa.eu/publications/security-advisories/2026-005/), [5](https://unit42.paloaltonetworks.com/cve-2026-31431-copy-fail/), [6](https://www.tomshardware.com/tech-industry/cyber-security/dirty-frag-exploit-gets-root-on-most-linux-machines-since-2017-no-patches-available-no-warning-given-copy-fail-like-vulnerability-had-its-embargo-broken), [7](https://www.bugcrowd.com/blog/what-we-know-about-copy-fail-cve-2026-31431/), [8](https://www.blueonyx.it/news/sec-adv-dirtyfrag-copyfail2.html), [9](https://support.cpanel.net/hc/en-us/articles/40313772552727-Dirty-Frag-vulnerability-reported-for-Linux-kernel), [10](https://www.reddit.com/r/homelab/comments/1t6rj7p/new%5Flinux%5Fkernel%5Flpe%5Fdirty%5Ffrag%5Fno%5Fpatch%5Fyet/), [12](https://thehackernews.com/2026/05/linux-kernel-dirty-frag-lpe-exploit.html)] | Copy Fail (CVE-2026-31431)                               | Dirty Frag (CVE Pending)                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| **Subsystem**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Crypto (`algif_aead`)                                    | IPsec Networking (`xfrm`, `esp4`, `esp6`, `rxrpc`)               |
| **Root Cause**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Improper memory handling during in-place AEAD operations | Logic flaw in in-place decryption fast paths for paged fragments |
| **Reliability**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 100% deterministic (no race conditions)                  | 100% deterministic (no race conditions)                          |
| **Exploit Size**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ~732-byte Python script                                  | Small script (e.g., 192-byte ELF overwrite)                      |
| **Affected Era**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Kernels shipped since 2017                               | Kernels shipped since 2017                                       |
| **Status**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Patched by major distributions                           | **Unpatched** (Embargo was broken early)                         |

Key Similarities

- **Memory-Only Corruption:** Both vulnerabilities bypass standard file integrity tools by only modifying the in-memory **page cache**. The actual file on the disk (like `/etc/passwd` or `/usr/bin/su`) remains unchanged, leaving no trace for typical filesystem scanners.
- **Container Impact:** Because the page cache is shared across the entire kernel, an attacker in one container can use these flaws to corrupt host files, leading to a full **container escape** or **Kubernetes node compromise**.
- **Triggering Mechanism:** Both exploit the `splice()` system call to plant references to read-only page cache pages into kernel buffers that then incorrectly allow writes. \[[1](https://orca.security/resources/blog/cve-2026-31431-linux-kernel-copy-fail-privilege-escalation/), [2](https://xint.io/blog/copy-fail-linux-distributions), [3](https://www.stream.security/post/cve-2026-31431-how-copy-fail-behaves-in-kubernetes), [4](https://www.cryptika.com/dirty-frag-linux-vulnerability-let-attackers-gain-root-privileges-poc-released/)]

Key Differences

- **Dirty Frag’s Chaining:** Unlike Copy Fail, which is a single-module bug, Dirty Frag can involve chaining vulnerabilities in the **xfrm-ESP** and **RxRPC** subsystems to achieve the same result.
- **Embargo and Patching:** While Copy Fail was disclosed with patches already in development, [Dirty Frag's details were leaked early](https://www.phoronix.com/news/Dirty-Frag-Linux), meaning many systems remain completely unpatched and vulnerable to public proof-of-concept (PoC) code. \[[1](https://www.gamingonlinux.com/2026/05/linux-security-flaws-dirty-frag-and-copy-fail-are-a-good-reminder-to-stay-up-to-date/), [2](https://thehackernews.com/2026/05/linux-kernel-dirty-frag-lpe-exploit.html), [4](https://www.phoronix.com/news/Dirty-Frag-Linux)]

Immediate Countermeasures

For **Dirty Frag** (where patches are still rolling out), the recommended temporary fix is to blacklist the affected modules: \[[1](https://www.phoronix.com/news/Dirty-Frag-Linux), [2](https://www.reddit.com/r/homelab/comments/1t6rj7p/new%5Flinux%5Fkernel%5Flpe%5Fdirty%5Ffrag%5Fno%5Fpatch%5Fyet/), [3](https://www.gamingonlinux.com/2026/05/linux-security-flaws-dirty-frag-and-copy-fail-are-a-good-reminder-to-stay-up-to-date/)]

bash

```
# This will disable IPsec and RxRPC (AFS)
printf 'install esp4 /bin/false\ninstall esp6 /bin/false\ninstall rxrpc /bin/false\n' | sudo tee /etc/modprobe.d/dirtyfrag.conf
sudo rmmod esp4 esp6 rxrpc
```

Use code with caution.

For **Copy Fail**, ensure you have [updated your kernel](https://almalinux.org/blog/2026-05-01-cve-2026-31431-copy-fail/) to the versions released after May 1, 2026. \[, [2](https://almalinux.org/blog/2026-05-07-dirty-frag/)]

- [link](https://www.microsoft.com/en-us/security/blog/2026/05/01/cve-2026-31431-copy-fail-vulnerability-enables-linux-root-privilege-escalation/)\
  CVE-2026-31431: Copy Fail vulnerability enables Linux root privilege escalation across cloud environments\
  CVE-2026-31431 (also known as “Copy Fail”) is a high‑severity local privilege escalation (LPE) vulnerability affecting the Linux k...\
  Microsoft
- [link](https://unit42.paloaltonetworks.com/cve-2026-31431-copy-fail/)\
  Copy Fail: What You Need to Know About the Most Severe Linux Threat in Years\
  Executive Summary. On April 29, 2026, researchers publicly disclosed a highly reliable local privilege escalation (LPE) vulnerabil...\
  Unit 42
- [link](https://www.bugcrowd.com/blog/what-we-know-about-copy-fail-cve-2026-31431/)\
  What we know about Copy Fail (CVE-2026-31431) - Bugcrowd\
  Blog summary. Copy Fail (CVE-2026-31431) is a Linux kernel LPE zero-day affecting all major distributions since 2017. A logic flaw...\
  Bugcrowd

Show all

seems new cve jumps out a lot recently. is linux kernel very fragile.

It definitely feels that way when two "universal" root exploits drop in the same month. However, it's less about the kernel being "fragile" and more about a massive shift in how it's being tested.

Here is the reality behind the recent surge:

1\. The "AI Effect" on Bug Hunting

The biggest reason for the sudden spike is **automated discovery**. Researchers are now using AI-driven fuzzers and formal verification tools that can analyze code logic at a scale humans never could.

- **Copy Fail** was found in just **one hour** by an AI tool.
- These tools are finding "logic bugs" (flaws in how the code thinks) rather than "memory bugs" (like overflows), which were much harder for traditional tools to spot.

2\. Modern Complexity vs. Old Code

The Linux kernel is roughly **30 million lines of code**.

- Both **Copy Fail** and **Dirty Frag** targeted code that had been sitting untouched since **2017**.
- As Linux adds features for high-speed networking, cloud computing, and advanced encryption, the "attack surface" grows. Older code that was considered "stable" is now being re-examined with modern eyes and finding flaws that have existed for years.

3\. The "Transparent" Security Model

Unlike Windows or macOS, Linux security is handled in the open.

- When a bug is found in Linux, the discussion, the patch, and the exploit details are often public within days.
- This creates a "noise" effect where it seems like there are more bugs, whereas proprietary systems often bundle many fixes into a single, quiet monthly update.

4\. Deterministic vs. Probabilistic

What makes these specific new CVEs scary isn't that the kernel is "falling apart," but that these bugs are **deterministic**. Old-school exploits often relied on "race conditions" (winning a billionth-of-a-second timing battle), but these new logic flaws work 100% of the time, making them feel much more dangerous.

**Summary:** The kernel isn't getting worse; our ability to find its deep-seated flaws is getting much better. It's a "growing pain" of moving toward a more rigorously tested ecosystem.

Would you like to know if your **specific kernel version** or **distribution** is currently on the safe list for these two?