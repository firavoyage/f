#

activitypub

**ActivityPub** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">an open, decentralized social networking protocol</mark> officially recommended by the **World Wide Web Consortium (W3C)**. It serves as the standard technical foundation for the **Fediverse**, a collection of independent social media servers that seamlessly communicate with one another. Think of it as the email protocol but built specifically for social media actions like posting, liking, following, and replying. \[[1](https://en.wikipedia.org/wiki/ActivityPub), [2](https://www.reddit.com/r/explainlikeimfive/comments/1fi72he/eli5%5Fwhat%5Fis%5Factivitypub%5Fand%5Fhow%5Fdoes%5Fit%5Fwork/), [3](https://activitypub.ghost.org/)]

⚙️ How It Works

ActivityPub divides its functionality into two primary components: \[[1](https://w3c.github.io/activitypub/), [2](https://en.wikipedia.org/wiki/ActivityPub)]

- **Server-to-Server (S2S) Federation**: This allows different platforms or servers to deliver notifications and content to each other. For example, a user on a Mastodon server can seamlessly view and interact with content hosted on a WordPress site.
- **Client-to-Server (C2S) API**: This allows user applications (like a mobile phone app or a desktop client) to interact directly with the user’s account on their chosen server.
- **Data Format**: It uses the **ActivityStreams 2.0** data format. Content is structured in JSON-LD, turning social interactions into readable logs of "Actors" (users) performing "Activities" (like `Create`, `Follow`, or `Like`) on "Objects" (posts or media). \[[1](https://www.w3.org/TR/activitypub/), [2](https://help.instagram.com/169559812696339), [3](https://github.com/w3c/activitypub), [4](https://wordpress.org/plugins/activitypub/), [5](https://socialhub.activitypub.rocks/t/guide-for-new-activitypub-implementers/479), [6](https://en.wikipedia.org/wiki/ActivityPub), [7](https://w3c.github.io/activitypub/)]

🌐 Major Platforms Using ActivityPub \[[1](https://arxiv.org/html/2412.09011)]

Unlike closed, corporate networks, ActivityPub links completely distinct software ecosystems together: \[[1](https://activitypub.ghost.org/)]

- **Mastodon & Misskey**: Microblogging and short-form text alternatives to X (formerly Twitter).
- **Threads**: Meta's social platform, which integrates with the Fediverse using ActivityPub.
- **WordPress & Ghost**: Content management systems that allow blogs to be followed directly like social media accounts.
- **Pixelfed**: A decentralized photo-sharing platform alternative to Instagram.
- **PeerTube**: A federated video hosting platform alternative to YouTube.
- **Lemmy**: A decentralized link aggregator alternative to Reddit. \[[1](https://socialhub.activitypub.rocks/t/introduction-to-activitypub/508), [2](https://dev.to/thasmin/getting-started-with-activitypub-2mgm), [3](https://www.youtube.com/watch?v=nLqwKph7Sxk), [4](https://github.com/TryGhost/ActivityPub), [5](https://socialhub.activitypub.rocks/c/software/14), [6](https://www.reddit.com/r/explainlikeimfive/comments/1fi72he/eli5%5Fwhat%5Fis%5Factivitypub%5Fand%5Fhow%5Fdoes%5Fit%5Fwork/), [7](https://help.instagram.com/169559812696339)]

⚖️ Core Pros and Cons

| Benefits \[[1](https://www.reddit.com/r/fediverse/comments/1djsy9p/critique%5Fof%5Factivitypub%5Fand%5Fmastodon%5Ffrom%5Fa/), [2](https://www.youtube.com/shorts/P23XEipeOPM), [3](https://docs.joinmastodon.org/spec/activitypub/), [4](https://socialhub.activitypub.rocks/t/a-brief-and-unromantic-history-of-activitypub/4531), [5](https://activitypub.ghost.org/), [6](https://www.youtube.com/watch?v=nLqwKph7Sxk)] | Drawbacks                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **No Vendor Lock-In**: Users can move their data and followers to a completely different server without losing their social graph.                                                                                                                                                                                                                                                                                         | **Complex Moderation**: Managing harassment and toxic content across entirely separate servers can be structurally difficult.   |
| **Algorithmic Freedom**: Feeds are typically chronological; users decide what they see without corporate algorithms.                                                                                                                                                                                                                                                                                                       | **Push-Based Strain**: Relies on a push-model that can strain smaller servers when a highly popular user publishes content.     |
| **Network Scaling**: Creators can build niche sites that inherently gain access to millions of pre-existing global users.                                                                                                                                                                                                                                                                                                  | **Technical Fragmentation**: Minor data-handling variations between platform software can cause occasional feature mismatching. |

For a hands-on technical deep dive, you can read the official [W3C ActivityPub Specification](https://www.w3.org/TR/activitypub/) or learn by watching decentralized network traffic map out in real-time via the [ActivityPub Academy simulation tool](https://activitypub.academy/). \[[1](https://activitypub.academy/), [2](https://www.w3.org/TR/activitypub/)]

Are you looking to **integrate ActivityPub into an existing website** (like a blog), wanting to **build a custom federated app** from scratch, or simply looking for the **best client apps** to join the network?

- [link](https://www.w3.org/TR/activitypub/)\
  ActivityPub - W3C\
  Jan 23, 2018 — Abstract. The ActivityPub protocol is a decentralized social networking protocol based upon the \[ ActivityStreams ] 2.0 data forma...\
  W3C
- [link](https://en.wikipedia.org/wiki/ActivityPub)\
  ActivityPub - Wikipedia\
  ActivityPub is a protocol and open standard for decentralized social networking. It provides a client-to-server (C2S) API for crea...\
  Wikipedia
- [link](https://github.com/w3c/activitypub)\
  w3c/activitypub - GitHub\
  ActivityPub is the decentralized social networking protocol. It provides a client to server API for creating, updating and deletin...\
  GitHub

Show all

the history of activitypub

The history of ActivityPub <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">spans <strong>over two decades of engineering experimentation</strong>, moving from fragmented, corporate-backed microblogging experiments to a standardized web protocol</mark>. It was born out of a desire to prevent centralized corporations from dominating online social connection. \[[1](https://www.britannica.com/technology/fediverse), [2](https://buttondown.com/blog/what-is-activitypub), [3](https://www.youtube.com/watch?v=5VCU5feFRbk\&t=13)]

🛠️ Precursors and the Chaos Era (2007–2014)

Shortly after Twitter launched in 2006, open-web engineers began building decentralized alternatives. \[[1](https://buttondown.com/blog/what-is-activitypub)]

- **The Pioneer (2008)**: Developer Evan Prodromou launched **StatusNet** (originally Laconica). It powered Identi.ca, an early decentralized microblogging network.
- **Protocol Fragmentation**: A flurry of competing, fragmented protocols emerged to handle separate parts of social communication (e.g., _OStatus_, _OpenMicroBlogging_, _WebFinger_, and _Activity Streams 1.0_).
- **Corporate Flirtation**: Big tech briefly experimented with these standards. Google Buzz launched using open interoperability pieces, and early versions of Facebook supported the initial data formatting structures. However, as platforms realized the profitability of locked-down data, corporate interest evaporated, and corporate networks built "walled gardens". \[[1](https://nextcloud.com/blog/activitypub-the-new-standard-for-decentralized-networks/), [2](https://buttondown.com/blog/what-is-activitypub), [3](https://overengineer.dev/blog/2018/02/01/activitypub-one-protocol-to-rule-them-all/), [4](https://www.youtube.com/watch?v=5VCU5feFRbk\&t=13)]

🏛️ The W3C Social Web Working Group (2014–2018)

To unify the fragmented landscape, the **World Wide Web Consortium (W3C)** established the Social Web Working Group in 2014. \[[1](https://www.britannica.com/technology/fediverse), [2](https://en.wikipedia.org/wiki/ActivityPub)]

- **Evolution of the Code**: Evan Prodromou had shifted from StatusNet to a new, simpler inbox-based API called **pump.io**. The working group adapted this framework, briefly calling it _ActivityPump_, before standardizing it as **ActivityPub**.
- **Core Authors**: The specification was co-authored by a team including **Christine Lemmer-Webber, Evan Prodromou, Jessica Tallon, Aaron Shepard, and Amy Guy**. Lemmer-Webber later noted that a majority of the core authors identified as queer, and their focus on safe, community-moderated digital spaces heavily influenced the architecture of the network.
- **The Mastodon Extension (2017)**: While ActivityPub was still a draft, Eugen Rochko—the creator of **Mastodon**—opted to switch Mastodon from its older OStatus system to ActivityPub. Because this was a massive real-world deployment, the W3C extended its deadlines specifically to harmonize the official specification with Mastodon’s real-world needs.
- **Official Standard (January 2018)**: The W3C officially published ActivityPub as a [W3C Recommendation](https://www.w3.org/TR/activitypub/), cementing it as an official web standard alongside HTML and CSS. \[[1](https://fossacademic.tech/2023/10/15/APnonStandard.html), [2](https://nextcloud.com/blog/activitypub-the-new-standard-for-decentralized-networks/), [3](https://indieweb.org/ActivityPub), [5](https://www.youtube.com/watch?v=5VCU5feFRbk\&t=13), [6](https://htyp.org/ActivityPub), [7](https://blog.joinmastodon.org/2017/09/mastodon-and-the-w3c/), [9](https://www.w3.org/TR/activitypub/)]

🚀 Corporate Adoption and Present Day (2022–Present)

For its first few years, ActivityPub was maintained heavily by grassroots open-source enthusiasts. A major shift occurred in late 2022. \[, [2](https://www.britannica.com/technology/fediverse)]

- **The 2022 Twitter Migration**: Following Elon Musk's acquisition of Twitter, millions of users migrated to Mastodon. This massive wave brought mainstream attention to the term "Fediverse".
- **Big Tech Moves In**: Platforms like WordPress, Tumblr, and Flipboard announced or launched native integrations. Most notably, Meta launched **Threads** with the explicit long-term goal of building ActivityPub integration, allowing traditional corporate social media and independent decentralized instances to talk to each other for the first time. \[[1](https://www.britannica.com/technology/fediverse), [3](https://www.youtube.com/watch?v=nLqwKph7Sxk)]

Would you like to explore **how the protocol actually structures data** under the hood, or learn how to **migrate your presence** across different ActivityPub platforms?

- [link](https://fossacademic.tech/2023/10/15/APnonStandard.html)\
  ActivityPub, the Non-Standard Standard - FOSS Academic\
  Oct 15, 2023 — Mastodon implemented a draft version of ActivityPub, and because this was a big deal, the W3C gave the SocialWG two deadline exten...\
  FOSS Academic
- [link](https://nextcloud.com/blog/activitypub-the-new-standard-for-decentralized-networks/)\
  ActivityPub: the new standard for decentralized networks\
  Jan 25, 2018 — Nextcloud and ActivityPub. Nextcloud implements ActivityPub to inform users about changes to their files, new calendar and so on b...\
  Nextcloud
- [link](https://www.youtube.com/watch?v=5VCU5feFRbk\&t=13)\
  ActivityPub and the End of Walled Gardens, with Evan ...\
  Nov 28, 2023 — tremendous potential and understands that this could be the internet's next wave. today Mike's talking to Evan Petro. one of the a...\
  6m\
  YouTube·Flipboard

Show all

usage example

Here is a direct example of ActivityPub in action, showing exactly what a user's server sends over the network when they post a message.

📝 The Scenario

Alice (`@alice@social.example`) posts a short text update. Her server formats this update into an **Activity object** and sends it over HTTPS to Bob’s inbox (`@bob@news.example`).

📦 The JSON-LD Payload

This is the raw data transmitted between servers, formatted using the **ActivityStreams 2.0** vocabulary.

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Create",
  "actor": "https://social.example",
  "published": "2026-05-21T12:54:00Z",
  "to": [
    "https://w3.org#Public"
  ],
  "cc": [
    "https://news.example"
  ],
  "object": {
    "id": "https://social.example/posts/42",
    "type": "Note",
    "published": "2026-05-21T12:54:00Z",
    "attributedTo": "https://social.example",
    "to": [
      "https://w3.org#Public"
    ],
    "cc": [
      "https://news.example"
    ],
    "content": "<p>Hello world! Learning about ActivityPub today.</p>"
  }
}
```

Use code with caution.

🔍 Breakdown of the Code

- **`@context`**: Tells the receiving server how to interpret and validate the fields.
- **`type: "Create"`**: The main action being taken. Other common types include `Follow`, `Like`, or `Delete`.
- **`actor`**: The URL pointing to Alice's profile, uniquely identifying her as the sender.
- **`object`**: The actual content being created.
  - **`type: "Note"`**: Represents a standard short-form social media post.
  - **`content`**: The actual HTML text that Bob's server will render on his screen.
- **`to` / `cc`**: Directs delivery. Declaring `#Public` means anyone can see it, while adding Bob’s URL ensures a copy lands directly in his personal inbox.

🛣️ The Delivery Network Request

Alice's server sends this JSON payload to Bob's server using a standard **HTTP POST** request, cryptographically signing it for security:

http

```
POST /users/bob/inbox HTTP/1.1
Host: news.example
Date: Thu, 21 May 2026 12:54:00 GMT
Signature: keyId="https://social.example",algorithm="rsa-sha256",headers="(request-target) host date",signature="..."
Content-Type: application/activity+json

[...JSON Payload Goes Here...]
```

Use code with caution.

Would you like to see how a **`Follow` request and response** handshake looks, or do you want to explore the **code libraries** available to build this in Python, Node.js, or Go?

syntax

The syntax of ActivityPub <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">relies entirely on <strong>JSON-LD (JavaScript Object Notation for Linked Data)</strong></mark>. Every piece of data is structured into objects called **Activities**, which follow a strict "Actor-Verb-Object" syntax grammar defined by the **ActivityStreams 2.0** vocabulary.

🧩 1. The Actor (Who)

An Actor is an object representing an entity capable of performing actions (e.g., a `Person`, `Group`, `Organization`, or `Application`).

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Person",
  "preferredUsername": "alice",
  "name": "Alice Smith",
  "inbox": "https://social.example/inbox",
  "outbox": "https://social.example/outbox"
}
```

Use code with caution.

- **`id`**: A unique URI. This acts as the definitive global address for the profile.
- **`inbox` / `outbox`**: The specific endpoints where the actor receives actions and publishes actions.

🎬 2. The Core Activity Syntax (What)

An Activity wraps an action around an object. It requires a `type` (the verb), an `actor` (the subject), and an `object` (the target).

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Like",
  "actor": "https://social.example",
  "object": "https://news.example"
}
```

Use code with caution.

📦 3. Common Objects (The Content)

Objects are the things being interacted with. The most common social media types are `Note` (a post), `Article` (a blog entry), `Image`, `Video`, and `Audio`.

json

```
{
  "id": "https://social.example",
  "type": "Note",
  "attributedTo": "https://social.example",
  "content": "Check out this photo!",
  "attachment": [
    {
      "type": "Image",
      "url": "https://media.example",
      "name": "A beautiful sunset over the mountains"
    }
  ]
}
```

Use code with caution.

🏷️ 4. Mention and Tag Syntax

To notify specific users, add hashtags, or include emojis, ActivityPub uses a nested `tag` array containing `Mention` and `Hashtag` objects.

json

```
{
  "type": "Note",
  "content": "Hello <a href=\"https://news.example\">@bob</a> check out #ActivityPub!",
  "tag": [
    {
      "type": "Mention",
      "href": "https://news.example",
      "name": "@bob"
    },
    {
      "type": "Hashtag",
      "href": "https://social.example",
      "name": "#ActivityPub"
    }
  ]
}
```

Use code with caution.

📋 Cheatsheet: Reserved Verbs (Types)

When writing ActivityPub syntax, you must use standard, case-sensitive Activity types:

- **Content**: `Create`, `Update`, `Delete`
- **Social**: `Follow`, `Accept`, `Reject`, `Block`, `Undo` (used to unfollow/unlike)
- **Interactions**: `Like`, `Announce` (the native term for a Boost or Retweet)
- **Collections**: `Add`, `Remove`

Would you like to see how to write the syntax for an **`Announce` (Boost/Retweet)** payload, or do you want to test this syntax using a **validator tool**?

inside matrix

The **Matrix protocol** and the **ActivityPub protocol** are both open, decentralized standards, but they are built for fundamentally different use cases: ActivityPub is built for **asymmetric social networking** (like Twitter/X or Instagram), while Matrix is built for **symmetric real-time communication** (like Slack, Discord, or WhatsApp).

However, bridging the two or running ActivityPub architectures _inside_ or _alongside_ Matrix is a major area of active development in the open-web community.

🌉 1. Matrix-to-ActivityPub Bridges

Because Matrix is highly modular, developers use **Appservices (Bridges)** to allow Matrix rooms to communicate directly with the Fediverse.

- **Kazv / Matrix-Appservice-ActivityPub**: This bridge maps ActivityPub actors to Matrix ghost users.
- **The Experience**: If you are in a Matrix client (like Element), you can join a room that represents a Mastodon profile. When that user posts on Mastodon, it appears as a message in your Matrix room. If you type a message in that Matrix room, the bridge converts your text into an ActivityPub `Create` -> `Note` object and federates it back out to the Fediverse.

🔄 2. Protocol Architectural Differences

If you look at the raw syntax and state management of both systems, they handle data inside their networks very differently:

| Architectural Feature    | ActivityPub                                                                                              | Matrix                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Data Synchronization** | **Push-based Messaging**: Server A pushes an activity to Server B's inbox. Server B stores its own copy. | **Replicated State Graph**: Servers share and sync a cryptographically signed directed acyclic graph (DAG) of room history. |
| **Identity**             | Tied to a specific domain instance URL (e.g., `alice@social.example`).                                   | Tied to a homeserver ID (e.g., `@alice:matrix.org`), moving toward portable MXIDs.                                          |
| **Encryption**           | Transport layer (HTTPS) + HTTP Signatures. End-to-End Encryption (E2EE) is not natively standardized.    | Native **Olm/Megolm** End-to-End Encryption designed for secure group chats.                                                |

🛠️ 3. Inside the Code: The Translation Layer

When an activity happens "inside" Matrix and needs to cross over to ActivityPub, a bridge translates the syntax.

For example, when you send a standard message in a Matrix room:

json

```
// Matrix Event Syntax
{
  "content": {
    "body": "Hello from Matrix!",
    "msgtype": "m.text"
  },
  "event_id": "$143273582443PhrYj:matrix.org",
  "sender": "@alice:matrix.org",
  "type": "m.room.message"
}
```

Use code with caution.

The bridge intercepts this event and converts it into the ActivityPub standard JSON-LD payload you saw earlier:

json

```
// Translated ActivityPub Syntax
{
  "@context": "https://w3.org",
  "type": "Create",
  "actor": "https://matrix-bridge.example",
  "object": {
    "type": "Note",
    "content": "Hello from Matrix!"
  }
}
```

Use code with caution.

🔮 4. Convergence: Cerulean and Native Social Matrix

Matrix developers have experimented with building social media _directly_ on top of Matrix without using ActivityPub at all.

- **Cerulean**: A prototype microblogging platform built by the Matrix team. Instead of treating threads as chat rooms, it treats posts as individual Matrix rooms and replies as child events in the DAG, proving that Matrix can mimic ActivityPub's functionality natively.

Are you looking to **set up a bridge** to link a Matrix room to a Mastodon account, or are you trying to decide **which protocol to choose** for building a new decentralized application?

#

criticism on activitypub

While [ActivityPub](https://www.w3.org/TR/activitypub/) has become the structural backbone of the Fediverse and powers platforms like Mastodon, Threads, and PeerTube, it faces significant technical, structural, and user-experience criticisms from the developer community. \[[1](https://www.youtube.com/watch?v=nLqwKph7Sxk), [2](https://chrastecky.dev/technology/activity-pub-the-good-the-bad-and-the-ugly)]

The primary criticisms of ActivityPub are organized below by category:

1\. Architectural and Scalability Flaws

- **Inefficient Push Model**: The protocol relies heavily on an HTTP POST "push" architecture. When a popular user posts, the home instance must push that payload to the inboxes of thousands of individual external servers, creating a traffic spike akin to a self-inflicted DDoS attack.
- **High Server Overhead (\\(O(n^2)\\) Complexity)**: As the number of connected instances grows, the server-to-server communication grid demands substantial hardware. Small servers often experience backlogs, data queues, and heavy memory usage trying to process massive incoming public streams.
- **Fragmented Firehose**: Unlike centralized platforms, there is no single global index or firehose. Users only see content that has already been pulled or "dragged" to their local instance via someone else's subscription, often rendering search and discovery clunky. \[[1](https://www.reddit.com/r/fediverse/comments/1djsy9p/critique%5Fof%5Factivitypub%5Fand%5Fmastodon%5Ffrom%5Fa/), [2](https://news.ycombinator.com/item?id=36384012), [3](https://www.reddit.com/r/fediverse/comments/1hwtjgd/is%5Fthe%5Farchitecture%5Fof%5Fthe%5Ffediverse%5Fflawed%5Fand/), [4](https://www.reddit.com/r/Mastodon/comments/1i0mk08/why%5Fusechoose%5Fat%5Frather%5Fthan%5Factivitypub%5Ffor/), [5](https://betterprogramming.pub/decentralized-activitypub-could-be-the-future-of-social-networks-e6db406b5db0)]

2\. Identity and Data Hostage Issues

- **Server-Bound Identities**: User identity is tied strictly to a domain name (URI). If a server admin shuts down the node, goes offline, or bans a user, that user loses their social graph, posts, and identity entirely.
- **Destructive Migration**: While users can move aliases between servers, true data migration requires both the old and new servers to actively communicate. Historical data and past posts typically do not transfer seamlessly, effectively making profiles "hostages" to individual server admins. \[[1](https://aeracode.org/2022/11/15/twitter-activitypub-future/), [2](https://www.reddit.com/r/fediverse/comments/1i0osx3/why%5Fusechoose%5Fat%5Frather%5Fthan%5Factivitypub%5Ffor/), [3](https://www.reddit.com/r/fediverse/comments/1hwtjgd/is%5Fthe%5Farchitecture%5Fof%5Fthe%5Ffediverse%5Fflawed%5Fand/)]

3\. Specification Ambiguity and Incompatibilities

- **Undefined Behaviors**: The W3C specification leaves a vast amount of core logic open to interpretation. For example, the protocol allows nonsensical core actions—like "liking" a "Like" activity—which forces developers to use hacks to avoid infinite data loops.
- **Broken Semantic Interoperability**: Because different apps (like Lemmy, Mastodon, and BookWyrm) serve different social formats, features do not translate well. Private messaging implementations conflict wildly across platforms, and group or thread replies are frequently dropped or incorrectly addressed when traversing nodes.
- **HTML Payload Security Risk**: The payload of an activity can contain raw HTML, meaning every individual server must rigorously scrub the code to avoid severe privacy and cross-site scripting (XSS) vulnerabilities. This scrubbing often breaks post formatting and layout across different instances. \[[1](https://discourse.diasporafoundation.org/t/lets-talk-about-activitypub/741), [2](https://chrastecky.dev/technology/activity-pub-the-good-the-bad-and-the-ugly), [3](https://www.reddit.com/r/ActivityPub/comments/10iuj1e/are%5Fwe%5Fall%5Fmissing%5Fthe%5Fpoint%5Fof%5Factivitypub/)]

4\. Comparison to Newer Protocols

Many of these protocol limitations have driven developers to favor alternative decentralized technologies like **AT Protocol (Bluesky)** or **Nostr**. Critics point out that AT Protocol natively solves the identity crisis by separating the data repository from the host server, ensuring cryptographic portability that ActivityPub fundamentally lacks. \[[1](https://www.reddit.com/r/fediverse/comments/1nxzx8r/should%5Factivitypub%5Fand%5Fatprotocol%5Fbe%5Fpotentially/), [2](https://news.ycombinator.com/item?id=39962505), [3](https://news.ycombinator.com/item?id=45389052), [4](https://lobste.rs/s/thsv0z/conceptual%5Fmodel%5Fatproto%5Factivitypub), [5](https://news.ycombinator.com/item?id=46101071)]

***

If you want to explore this further, let me know if you would like me to:

- **Compare ActivityPub directly to AT Protocol** across specific features.

- **Explain the technical security challenges** around end-to-end encryption in the Fediverse.

- **Look into the caching workarounds** developers use to handle scaling issues. \[[1](https://www.reddit.com/r/fediverse/comments/1djsy9p/critique%5Fof%5Factivitypub%5Fand%5Fmastodon%5Ffrom%5Fa/), [2](https://socialhub.activitypub.rocks/t/the-challenges-of-adding-reliably-private-social-networking-to-the-fediverse/5386), [3](https://news.ycombinator.com/item?id=36384012)]

- [link](https://www.reddit.com/r/fediverse/comments/1djsy9p/critique%5Fof%5Factivitypub%5Fand%5Fmastodon%5Ffrom%5Fa/)\
  Critique of ActivityPub and Mastodon from a #closedweb ...\
  Jun 19, 2024 — Critique : The push-based model can indeed lead to server overloads. Popular accounts generating a lot of traffic can unintentiona...\
  Reddit·r/fediverse

- [link](https://news.ycombinator.com/item?id=36384012)\
  Is ActivityPub not scalable? I keep seeing criticisms of it on this ...\
  Jun 18, 2023 — The way that instances connect to each other is O(n^2), which is not to say it's exactly n^2 but the curve is of that shape. This ...\
  Hacker News

- [link](https://chrastecky.dev/technology/activity-pub-the-good-the-bad-and-the-ugly)\
  ActivityPub: The Good, the Bad and the Ugly\
  Apr 16, 2025 — Most issues with ActivityPub stem from one critical flaw: much of its behaviour is undefined. The core types and activities allow ...\
  chrastecky.dev

Show all

how does at protocol do

The **AT Protocol (Authenticated Transfer Protocol)**, developed by Bluesky, specifically addresses ActivityPub’s architectural flaws by <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">treating social data like a git repository and separating user identity from the hosting server</mark>.

Here is how the AT Protocol handles identity, data, and scaling:

1\. Cryptographic Identity (Account Portability)

- **Decoupled IDs**: Your identity is not tied to a server domain. It is an abstract, permanent string called a DID (Decentralized Identifier).
- **User-Owned Domains**: Your public handle (e.g., `@name.com`) is just a customizable pointer mapped to your DID using standard DNS lookups.
- **Flawless Migration**: If you dislike your hosting provider, you can move your entire account to a new provider instantly. Because your cryptographic DID stays the same, you keep 100% of your followers, followings, and history without needing permission from your old host.

2\. Separation of Storage and Indexing (The Hub Architecture)

Instead of requiring every single server to do everything, AT Protocol splits responsibilities into specialized roles:

- **PDS (Personal Data Server)**: This is your digital locker. It only stores your raw data (posts, likes, photos) and requires very little computing power.
- **Relay (The Firehose)**: Large, centralized data aggregators that crawl all the PDS lockers in the world and stream the combined data into one giant, public "firehose."
- **AppView (The Feed/Interface)**: Specialized servers that read the Relay firehose to build the user interface, count likes, construct reply threads, and handle search.

3\. Solved Scaling Issues

- **No \\(O(n^2)\\) Traffic Spikes**: When you post, your PDS does not push your post to thousands of individual servers like ActivityPub does. It simply updates your local data locker.
- **Efficient Pull Model**: The central Relays pull the data from your PDS seamlessly. This eliminates the heavy server backlogs and high hardware costs that plague small ActivityPub instances.
- **Algorithmic Choice**: Because the data indexing (AppView) is separate from data storage (PDS), anyone can build and host their own custom feed algorithms. Users can subscribe to different algorithms directly inside the same app.

4\. Current Criticisms of AT Protocol

While it fixes ActivityPub's core flaws, critics point out its own trade-offs:

- **Re-centralization Risk**: Operating a Relay or an AppView requires massive computing power and storage. This means a few large corporate entities (like Bluesky) end up controlling the core infrastructure, threatening true decentralization.
- **Total Loss of Privacy**: Everything on the AT Protocol is fundamentally public and cryptographically signed. Once a post enters the global Relay firehose, it is mirrored everywhere, making true content deletion or private messaging exceptionally difficult to implement securely.

***

If you want to look closer at this technology, let me know if I should:

- **Deep dive into the cryptographic architecture** of DIDs and data signing.
- **Map out a side-by-side structural comparison** of a PDS versus an ActivityPub Instance.
- **Explain how custom feed algorithms work** on the platform.

how does nostr do

The **Nostr (Notes and Other Stuff Transmitted by Relays)** protocol takes a radically lightweight and cryptographic approach to decentralization. Instead of relying on federated servers (ActivityPub) or a structured provider marketplace (AT Protocol), Nostr <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">relies completely on a <strong>client-relay architecture</strong> powered by mathematical keys</mark>. \[[1](https://web3.okx.com/learn/nostr), [2](https://hamishcampbell.com/comparing-decentralized-social-protocols-why-activitypub-fediverse-is-the-best-choice-over-bluesky-atproto-and-nostr/), [3](https://satscryption.substack.com/p/decoding-nostr), [4](https://nostr.co.uk/learn/how-nostr-works/)]

Its core structure and handling of identity, data delivery, and limitations operate on a distinct paradigm: \[[1](https://www.gate.com/learn/articles/what-is-nostr/395)]

1\. Pure Cryptographic Identity (No Domains, No Accounts)

- **Public Key as ID**: On Nostr, your identity is not a handle or a domain name. It is a standard cryptographic public key (represented as an `npub`) generated locally on your device.
- **Zero-Permission Setup**: You do not "register" an account with any server or entity. You simply generate a private key to sign messages and a public key to share with the world.
- **Absolute Portability**: Because your identity exists purely in mathematics, no server, relay, or administrator can delete your account, ban your username, or take away your followers. \[[1](https://dri.es/nostr-love-at-first-sight), [2](https://bitcoinmagazine.com/culture/beyond-the-feed-nostr-real-world), [3](https://nostr.co.uk/learn/how-nostr-works/), [4](https://satscryption.substack.com/p/decoding-nostr), [5](https://news.ycombinator.com/item?id=42761517), [6](https://www.gate.com/learn/articles/what-is-nostr/395)]

2\. The Relay Distribution Model (Dumb Servers, Smart Clients)

Nostr shifts all the "intelligence" to the user's app (the client), keeping the backend infrastructure as simple as possible: \[[1](https://www.gate.com/learn/articles/what-is-nostr/395)]

- **What is a Relay?**: A relay is an independent internet node whose only job is to accept signed data packets (called "Events"), store them, and pass them along to anyone who asks. Relays do not communicate with each other.
- **The Gossip Protocol**: When you make a post, your client broadcasts that signed JSON packet to multiple relays simultaneously. When your followers want to read your posts, their clients query those same relays.
- **Censorship Resilience**: If a specific relay blocks your public key or goes offline, you simply configure your client to connect to different relays. Your followers will still receive your data from the other nodes. \[[1](https://medium.com/@colaru/an-introduction-to-nostr-protocol-dbc774ac797c), [2](https://voltage.cloud/blog/the-essential-guide-to-nostr-relays), [3](https://satscryption.substack.com/p/decoding-nostr), [4](https://www.gate.com/learn/articles/what-is-nostr/395), [5](https://web3.okx.com/learn/nostr)]

3\. Native Financial Integration (Value Monetization)

- **The Lightning Network Stack**: Nostr is deeply intertwined with Bitcoin's Lightning Network.
- **"Zaps"**: Micro-tipping is native to the protocol. Instead of hit-driven algorithms like traditional social media, content creators, developers, and node operators are directly supported through instantaneous, sub-cent global tips called "Zaps". \[[1](https://news.ycombinator.com/item?id=42761517), [2](https://www.youtube.com/watch?v=Q6f6bdKWqF8), [3](https://www.youtube.com/watch?v=wrlE0DMoTSc)]

4\. Architectual Criticisms and Trade-offs

Nostr's radical simplicity solves the server-bottleneck issues of ActivityPub, but it introduces a unique set of challenges: \[[1](https://medium.com/@colaru/an-introduction-to-nostr-protocol-dbc774ac797c)]

- **The Data Fragmentation Problem**: Because relays do not sync with one another, data is highly fragmented. If you post to Relays A and B, but your friend is only listening to Relays C and D, they will never see your post. Clients must constantly track and hunt for which relays a user actively utilizes.
- **Massive Spam and Lack of Moderation**: Because anyone can generate a public key in milliseconds for free, Nostr networks are incredibly vulnerable to Sybil attacks and massive spam bots. To filter out bad actors, the ecosystem relies heavily on a complex "Web of Trust" (reputation networks calculated on the client side) or paid, invite-only relays.
- **Metadata Exposure**: Nostr is highly censorship-resistant, but it is **not anonymous**. Because your client must constantly fetch data from public IP addresses and broadcast events openly, your global IP traffic, active times, and social graph are entirely visible to anyone running a relay.
- **Storage and Media Costs**: Relays are only designed to store short text strings. Standard Nostr relays do not host images or videos. To share media, clients must upload files to third-party media servers (or specialized "Blossom" servers) and link out to them, re-introducing central points of failure for media hosting. \[[1](https://www.youtube.com/watch?v=wrlE0DMoTSc), [2](https://www.gate.com/learn/articles/what-is-nostr/395), [3](https://www.reddit.com/r/nostr/comments/1rhcjmo/new%5Fto%5Fnostr%5Fis%5Fnostr%5Fgood%5Ffor%5Fthis%5Fuse%5Fcase%5Fif/), [4](https://medium.com/@colaru/an-introduction-to-nostr-protocol-dbc774ac797c), [5](https://www.youtube.com/watch?v=Q6f6bdKWqF8)]

***

If you want to dive deeper into how this ecosystem operates, let me know if you would like me to:

- **Explain how NIPs (Nostr Implementation Possibilities)** expand the protocol beyond social media into things like decentralized GitHub alternatives or AI integrations.

- **Provide a technical breakdown of a Nostr Event** JSON payload to see how it works under the hood.

- **Compare the Web of Trust model** against AT Protocol’s centralized AppViews for content moderation. \[[1](https://www.youtube.com/watch?v=qFoSoY3qs3g), [2](https://www.youtube.com/watch?v=wrlE0DMoTSc), [3](https://nostr.co.uk/learn/how-nostr-works/), [4](https://slashdot.org/software/comparison/AT-Protocol-vs-ActivityPub-vs-nostr/)]

- [link](https://dri.es/nostr-love-at-first-sight)\
  Nostr, love at first sight | Dries Buytaert\
  Feb 15, 2023 — I also want to emphasize that both Nostr and ActivityPub are commendable for their efforts in addressing the problems encountered ...\
  Dries Buytaert

- [link](https://hamishcampbell.com/comparing-decentralized-social-protocols-why-activitypub-fediverse-is-the-best-choice-over-bluesky-atproto-and-nostr/)\
  Comparing Decentralized #openweb Protocols\
  Feb 18, 2025 — Background & history, #Nostr (Notes and Other Stuff Transmitted by Relays) was created by an individual in 2020 as a censorship-re...\
  hamishcampbell.com

- [link](https://news.ycombinator.com/item?id=42761517)\
  And Nostr. Nostr is smaller than either Bluesky or ActivityPub ...\
  And Nostr. Nostr is smaller than either Bluesky or ActivityPub, but it has some ... | Hacker News. Hacker Newsnew | past | comment...\
  Hacker News

Show all

criticism on nostr

While Nostr’s radical simplicity and cryptographic design solve the server-lock-in issues of ActivityPub, its hands-off approach introduces severe technical, economic, and user-experience vulnerabilities. Critics argue that <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Nostr pushes all infrastructure complexity onto the end user and individual app developers</mark>. \[[1](https://kanga.exchange/university/en/courses/advanced-course/lessons/56-what-is-the-nostr-protocol-and-how-does-it-work/), [2](https://nickmonad.blog/2023/nostr-verification/)]

The primary criticisms of Nostr are organized below by category:

1\. The Data Fragmentation Chaos

- **No Universal State**: Relays do not communicate or sync with one another. If you publish a post to Relays A and B, but your friend’s app only listens to Relays C and D, your post is completely invisible to them.
- **The "Ghost" Reply Problem**: Multi-user threads are frequently broken. If a user replies to your post but publishes their reply to a different set of relays than you used, neither you nor your followers will ever see that comment.
- **Clunky Profile Discovery**: To find a user or view their full history, your client app must hunt across dozens of relays where that user _might_ have left data. This makes global search highly unreliable and slow. \[[1](https://denostr.medium.com/the-future-of-social-communication-nostrs-origins-and-the-next-destination-in-social-networking-27f0c901d7ae)]

2\. Extreme Spam and Lack of Moderation \[[1](https://www.lynalden.com/the-power-of-nostr/), [2](https://arxiv.org/html/2505.22962v1), [3](https://medium.com/@vinterkarusell/what-monnet-social-gets-wrong-about-escaping-big-tech-f7490854a856)]

- **Zero-Cost Sybil Attacks**: Because generating a new identity (public key) takes milliseconds and costs nothing, malicious actors can spin up millions of bot accounts to flood relays with spam, scams, and illegal content.
- **The Burden of Filtering**: Relays are "dumb" pipes and cannot easily moderate content without blocking entire public keys. This forces client apps to build complex, resource-heavy filtering algorithms (like a client-side "Web of Trust") just to keep user feeds readable.
- **No Way to Report Content**: There is no native, protocol-level mechanism to flag or report abusive content globally. A banned user simply switches to a different relay and continues broadcasting. \[[1](https://satscryption.substack.com/p/decoding-nostr), [2](https://denostr.medium.com/the-future-of-social-communication-nostrs-origins-and-the-next-destination-in-social-networking-27f0c901d7ae), [3](https://sr.ht/~yonle/bostr/), [4](https://www.businessinsider.com/jack-dorsey-fiatjaf-nostr-donation-2024-6), [5](https://asecuritysite.com/nostr/index)]

3\. Severe Privacy Risks (Metadata Leaks)

- **Public Social Graph**: Your entire network of interactions—who you follow, who you mute, and what you like—is signed by your public key and blasted openly across the internet. Anyone running a relay can easily map your entire real-world social network.
- **IP Address Tracking**: When your client app connects to multiple relays via WebSockets, those relay operators can see your real-world IP address. By cross-referencing your IP with your public key's broadcast times, operators can easily track your physical location and daily routines. \[[1](https://www.lynalden.com/the-power-of-nostr/), [2](https://medium.com/swlh/battle-of-the-decentralized-twitter-alternatives-c9f51114614a), [3](https://andersjuengst.com/blog/20/), [4](https://podmatch.com/guestdetailpreview/1761061152116735334feaca6), [5](https://github.com/nostr-protocol/nips/blob/master/01.md)]

4\. Flawed Economic and Storage Models

- **No Native Media Support**: The protocol only handles text. It cannot natively store images, audio, or video. To post a photo, your app must upload it to a centralized third-party file host, introducing a single point of failure and privacy leaks.
- **The Relay Subsidy Problem**: Running a relay costs money for bandwidth and storage, but users expect data storage to be free. This has forced the ecosystem to rely heavily on paid/subscription relays or altruistic donors, making long-term data persistence highly unstable.
- **Key Management Danger**: There is no "forgot password" button. If a user loses their private key, they lose their identity and followers forever. Conversely, if a malicious app or hacker steals the private key, the account is permanently compromised with no mechanism for recovery. \[[1](https://news.ycombinator.com/item?id=45298883), [2](https://github.com/gzuuus/linktr-nostr), [3](https://community.umbrel.com/t/nostr-relay-troubleshooting/17828), [4](https://nostr.how/en/relays), [5](https://news.ycombinator.com/item?id=45299057)]

***

If you want to compare these decentralized systems further, let me know if I should:

- **Create a side-by-side technical table** comparing the trade-offs of ActivityPub, AT Protocol, and Nostr.

- **Explain how NIP-05 (DNS verification)** attempts to fix Nostr's identity and discovery problems.

- **Analyze the current solutions** developers are using to fix Nostr's media hosting issues. \[[1](https://github.com/nostr-sdk/nostr-sdk-ios)]

- [link](https://kanga.exchange/university/en/courses/advanced-course/lessons/56-what-is-the-nostr-protocol-and-how-does-it-work/)\
  56\. What Is the Nostr Protocol and How Does It Work? - Kanga University\
  However, it ( Nostr ) uses cryptography similar to Bitcoin. And it's increasingly being integrated with:\
  \
  \
  Kanga Exchange

- [link](https://nickmonad.blog/2023/nostr-verification/)\
  nostr NIP-05 DNS Verification for a Zola-based Static Site\
  What I appreciate about nostr is how radically simple the protocol really is. Anybody who is reasonably technical can understand t...\
  \
  nickmonad.blog

- [link](https://denostr.medium.com/the-future-of-social-communication-nostrs-origins-and-the-next-destination-in-social-networking-27f0c901d7ae)\
  Future Social Communication Framework: Nostr’s Starting Point and the Next Stop in Social…\
  Oct 30, 2024 — Since relays do not communicate with each other, there is no data exchange. Leaving a relay or being expelled from one is akin to ...\
  \
  \
  Medium

Show all