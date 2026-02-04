<!-- https://chatgpt.com/c/6982d5da-0a38-8323-b476-68ab881d532e -->

# 0

What does zapret do

---

“**Zapret**” can mean a couple different things, depending on context:

1. **In plain Russian**

- _Запрет (zapret)_ literally means **a ban, prohibition, or restriction**.
  Example: _zapret na kurenie_ = ban on smoking.

2. **In tech / internet context**

- **zapret** is also the name of a **network utility** (popular in Russia) used to **bypass ISP blocking and DPI (Deep Packet Inspection)**.
- It works by **modifying packet behavior** (fragmentation, fake packets, TTL tricks, etc.) so censorship systems fail to correctly identify blocked traffic.
- Commonly used to access **blocked websites or services** without a VPN.
- It’s low-level (operates at the packet/filtering layer) and is often used on **Linux/Windows routers or local machines**.

If you tell me **where you saw the word** (news article, GitHub, error message, conversation, etc.), I can zoom in on exactly which meaning applies.

# 1

I know doh

---

Got it — if you already know **DoH (DNS over HTTPS)**, then **zapret** is basically playing a _different game_.

Quick contrast, no fluff:

- **DoH**
  Hides _DNS requests_ by sending them over HTTPS.
  ➜ Your ISP can’t easily see _which domain_ you’re resolving, but they can still block by **IP, SNI, or DPI**.

- **zapret**
  Messes with **how packets look on the wire** so **DPI systems misclassify or miss them entirely**.
  ➜ It doesn’t just hide names — it **confuses the censor**.

Think of it like:

- DoH = whispering the address
- zapret = disguising the envelope, handwriting, and postage 😈

What zapret typically does:

- TCP fragmentation tricks
- Fake TLS ClientHello packets
- TTL / sequence manipulation
- Splitting SNI across packets
- DPI desync attacks

Result: the censor’s parser breaks, but the real server still understands you.

If you want, I can:

- compare **zapret vs VPN vs Tor**
- explain **when DoH + zapret together actually helps**
- or break down **how modern DPI detects traffic** (and where it fails)

Just tell me how deep you want to go.

# 2

I know clash verge

---

Ah, gotcha — **you know Clash Verge**, so we’re in proxy-nerd territory already 😄

Here’s how **zapret** fits into _that_ mental model:

### Clash Verge (Clash / Mihomo)

- **User-space proxy**
- Works at **L7 (application layer)**
- Routes traffic via:

  - VLESS / VMess / Trojan / Shadowsocks

- Relies on:

  - TLS
  - SNI
  - IP reachability

- If DPI blocks the **handshake itself**, Clash can fail unless you:

  - use Reality
  - domain fronting
  - or a good server setup

### zapret

- **Not a proxy**
- **Kernel / packet level (L3–L4)**
- No servers, no configs, no routing rules
- It **breaks DPI logic**, not censorship rules

Think of it like this:

- Clash Verge = _“Send my traffic through a tunnel”_
- zapret = _“Make the firewall blind and confused”_

### Key differences

| Thing             | Clash Verge | zapret                             |
| ----------------- | ----------- | ---------------------------------- |
| Needs server      | ✅          | ❌                                 |
| Encrypts traffic  | ✅          | ❌ (already encrypted by TLS)      |
| Bypasses DPI      | Sometimes   | **Specifically designed for this** |
| Works on all apps | Depends     | Yes (system-wide)                  |
| Routing rules     | Yes         | No                                 |

### How people actually use them

Common setups:

- **zapret alone** → unblock simple DPI-based blocks (YouTube, Twitter, etc.)
- **Clash alone** → full tunnel, works everywhere if server survives DPI
- **zapret + Clash** → zapret keeps DPI from killing the Clash handshake 💀

That last combo is popular in heavy censorship environments.

If you want, I can:

- explain **why zapret helps Clash connect when it otherwise won’t**
- compare **zapret vs Reality**
- or give a **mental model of DPI failure modes** so configs stop feeling like black magic

Just say the word.

# 3

What are the layers

---

Alright, let’s map the **layers** cleanly, from the wire up — and I’ll place **zapret** and **Clash** exactly where they live.

## The networking layers (OSI, simplified)

### **Layer 1 — Physical**

- Cables, Wi-Fi radio, fiber
- Bits as electrical / light signals
- Nobody blocks websites here

---

### **Layer 2 — Data Link**

- Ethernet, Wi-Fi frames
- MAC addresses, ARP
- Rarely used for censorship

---

### **Layer 3 — Network**

- **IP**
- Source / destination IP addresses
- Blocking by IP happens here

**Tools here:**

- iptables / nftables
- routing rules

---

### **Layer 4 — Transport**

- **TCP / UDP**
- Ports, sequence numbers, fragmentation

**zapret lives here 👈**

- Splits packets
- Messes with TCP streams
- Confuses DPI state machines

---

### **Layer 5 — Session**

- Connection management
- Mostly abstract today

---

### **Layer 6 — Presentation**

- Encoding, encryption
- TLS lives _partly_ here

---

### **Layer 7 — Application**

- **HTTP / HTTPS / DNS / QUIC**
- URLs, headers, SNI, Host

**Clash Verge lives here 👈**

- Proxies your apps
- Reads domains
- Decides routing rules
- Wraps traffic in TLS tunnels

---

## Where common censorship hits

| Block method           | Layer              |
| ---------------------- | ------------------ |
| DNS poisoning          | L7                 |
| SNI filtering          | L7 (TLS handshake) |
| HTTP keyword filtering | L7                 |
| IP blacklists          | L3                 |
| TCP reset injection    | L4                 |
| DPI                    | L4–L7              |

---

## Why zapret + Clash works so well

- **Clash**: “Here’s encrypted traffic to my proxy server”
- **DPI**: “I recognize this handshake, block it”
- **zapret**: “lol no you don’t” (breaks DPI parsing at L4)

So:

- zapret **protects the handshake**
- Clash **does the tunneling**

Different layers, different jobs, same goal.

If you want, next I can:

- show **a real packet flow** step-by-step
- explain **why QUIC changes the layer game**
- or map **Reality / uTLS / XTLS** onto these layers

Just point 👍
