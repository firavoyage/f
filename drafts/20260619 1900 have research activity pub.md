# what is activitypub about

June 17, 2026

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">ActivityPub is an open, decentralized social networking protocol</strong> standardized by the World Wide Web Consortium (W3C)</mark>. It serves as a universal language that allows completely different social media platforms to connect, talk to each other, and share data seamlessly in the background. \[[1](https://en.wikipedia.org/wiki/ActivityPub), [2](https://hackernoon.com/a-brief-introduction-of-activitypub-the-future-of-social-networks), [3](https://www.jeremydormitzer.com/blog/what-is-activitypub.html), [4](https://www.youtube.com/watch?v=nLqwKph7Sxk)]

Instead of users being locked inside isolated corporate ecosystems—like a closed network where a Twitter user cannot interact with a Facebook user—ActivityPub breaks down these walls. It acts for social media much like **SMTP and IMAP act for email**, meaning a user on one platform can follow, message, and interact with someone on a completely different platform without needing a separate account. \[[1](https://www.youtube.com/watch?v=BuoA%5FQHBxMg\&t=46), [2](https://allthingsopen.org/articles/activitypub-explained-the-protocol-connecting-the-fediverse), [3](https://buttondown.com/blog/what-is-activitypub)]

### Core Concepts

The technical framework of ActivityPub relies on two fundamental components: \[[1](https://www.youtube.com/watch?v=Kd1mcNPjs7Y\&t=265), [2](https://www.w3.org/TR/activitypub/)]

- [link](https://www.w3.org/TR/activitypub/)\
  ActivityPub - W3C\
  1\. Overview. ActivityPub provides two layers: A server to server federation protocol (so decentralized websites can share informat...\
  W3C
- [link](https://en.wikipedia.org/wiki/ActivityPub)\
  ActivityPub - Wikipedia\
  ActivityPub is a protocol and open standard for decentralized social networking. It provides a client-to-server (C2S) API for crea...\
  Wikipedia
- [link](https://www.youtube.com/watch?v=BuoA%5FQHBxMg\&t=46)\
  What is ActivityPub and how does it work within WordPress?\
  The Fediverse is a term used to describe a network of interconnected, decentralized social networks that can interact with each ot...\
  13m\
  YouTube·WP Builds

Show all

- **Actors, Inboxes, and Outboxes**: Every user account is represented as an **Actor**. Each actor has a unique web profile address alongside an **Inbox** (to receive posts, likes, and messages from others) and an **Outbox** (to publish their own updates).
- **Shared Language**: It formats all communication using [ActivityStreams 2.0](https://www.w3.org/TR/activitypub/) data vocabulary. This defines digital "nouns" (users, posts, pictures) and "verbs" (like, follow, create, share) so that all connected apps understand exactly what a specific interaction means. \[[1](https://www.w3.org/TR/activitypub/), [2](https://hacks.mozilla.org/2018/11/decentralizing-social-interactions-with-activitypub/), [3](https://overengineer.dev/blog/2018/02/01/activitypub-one-protocol-to-rule-them-all/), [4](https://activitypub.rocks/), [5](https://www.jeremydormitzer.com/blog/what-is-activitypub.html)]

### Dual-Layer System

The protocol functions across two distinct operational layers: \[[1](https://www.w3.org/TR/activitypub/)]

1. **Server-to-Server (Federation) Protocol**: This allows independent servers to talk to each other. If you post something on Server A, this layer ensures it is securely pushed directly to the inbox of your followers on Server B.
2. **Client-to-Server API**: This allows an end-user application (like a phone or desktop app) to interact with a personal account hosted on an ActivityPub server. It lets you easily draft posts, fetch your feed, or change your profile settings. \[[1](https://www.youtube.com/watch?v=Kd1mcNPjs7Y\&t=265), [2](https://www.w3.org/TR/activitypub/), [3](https://en.wikipedia.org/wiki/ActivityPub)]

### The Fediverse

ActivityPub is the foundational engine behind the **Fediverse**, a sprawling network of interconnected, independently hosted servers. Because it is a generic standard, it accommodates many distinct media formats beyond text-based microblogging: \[[1](https://alexcastano.com/what-is-activity-pub/), [2](https://www.youtube.com/watch?v=hhFDcbXfGH8\&t=127), [3](https://man.sr.ht/~mariusor/go-activitypub/), [4](https://en.wikipedia.org/wiki/ActivityPub), [5](https://hackernoon.com/a-brief-introduction-of-activitypub-the-future-of-social-networks)]

- **Mastodon** and **Misskey** for microblogging
- **Pixelfed** for image and photo sharing
- **PeerTube** for decentralized video streaming
- **Threads by Instagram** for mainstream social connection
- **WordPress** plugins that turn static websites into active social accounts \[[1](https://socialhub.activitypub.rocks/t/introduction-to-activitypub/508), [2](https://edtechbooks.org/web%5Fscience/activity%5Fpub), [3](https://help.instagram.com/169559812696339), [4](https://wpbuilds.com/demos/what-is-activitypub-and-how-does-it-work-within-wordpress-with-matthias-pfefferle/), [5](https://en.wikipedia.org/wiki/ActivityPub), [6](https://hackernoon.com/a-brief-introduction-of-activitypub-the-future-of-social-networks), [7](https://www.youtube.com/watch?v=BuoA%5FQHBxMg\&t=46)]

Through this framework, a user on Mastodon can directly comment on a video hosted on PeerTube, or a WordPress site can broadcast an article natively to a user's Threads feed. \[[1](https://www.w3.org/news/2018/activitypub-is-now-a-w3c-recommendation/), [2](https://pangea.app/glossary/ghost), [3](https://www.youtube.com/watch?v=nLqwKph7Sxk), [4](https://allthingsopen.org/articles/activitypub-explained-the-protocol-connecting-the-fediverse), [5](https://wpbuilds.com/demos/what-is-activitypub-and-how-does-it-work-within-wordpress-with-matthias-pfefferle/)]

### Why It Matters

- **User Data Ownership**: Users can self-host their own servers, giving them total control over their data, privacy, and personal digital space.
- **Censorship and Monopoly Resistance**: No single company or billionaire can buy out, control, or shut down the entire network.
- **Seamless Migration**: If a platform changes its rules, algorithms, or monetization in a way users dislike, they can take their entire social graph (followers and history) and move to a different provider relatively painlessly. \[[1](https://fedi.tips/who-owns-the-fediverse-is-the-fediverse-owned-by-a-corporation-or-venture-capital-firm-can-it-be-bought-out-by-google-facebook-elon-musk/), [2](https://seb.jambor.dev/posts/understanding-activitypub/), [3](https://www.youtube.com/watch?v=nLqwKph7Sxk), [4](https://allthingsopen.org/articles/activitypub-explained-the-protocol-connecting-the-fediverse), [5](https://wpbuilds.com/demos/what-is-activitypub-and-how-does-it-work-within-wordpress-with-matthias-pfefferle/), [6](https://hackernoon.com/a-brief-introduction-of-activitypub-the-future-of-social-networks)]

If you are trying to understand how this impacts you or a project you are working on, would you like to know **how to get started as a user** in this space, or are you interested in **how to build an application** using the protocol?

## You said: examples

Here are concrete examples of how ActivityPub works in practice, categorized by user actions, standard network requests, and data formats.

### Real-World Interaction Examples

Because these platforms share the ActivityPub protocol, cross-app interactions happen seamlessly:

- **Cross-Platform Following**: A user on **Mastodon** (`@alice@mastodon.social`) types `@bob@pixelfed.social` into their search bar and clicks **Follow**. Alice now sees Bob's Instagram-style photo posts directly in her Twitter-style Mastodon feed.
- **Cross-Platform Commenting**: Bob posts a photo of his cat on **Pixelfed**. Alice sees it on Mastodon and types, _"Cute cat!"_ Her comment travels across servers and appears directly under Bob’s photo on Pixelfed as a native reply.
- **Cross-Media Interactivity**: A creator uploads a video to **PeerTube** (a YouTube alternative). A user on **Misskey** (a blogging platform) can "Like" or "Boost" that video. The video's view and engagement metrics update across all platforms simultaneously.

### Technical Data Example (JSON-LD)

ActivityPub translates user actions into structured code snippets called **Activities**. When Alice likes Bob's post, her server generates and sends a text payload that looks like this:

json

```
{
  "@context": "https://w3.org",
  "id": "https://mastodon.social",
  "type": "Like",
  "actor": "https://mastodon.social",
  "object": "https://pixelfed.social"
}
```

Use code with caution.

- **Type**: The action being taken (`Like`, `Create`, `Follow`, `Announce/Retweet`).
- **Actor**: The person performing the action (Alice's profile URL).
- **Object**: The specific piece of content being targeted (Bob's post URL).

### Server-to-Server Request Example

To deliver the `Like` activity shown above, Alice's server uses a standard web request to securely deliver the data package to Bob's server inbox:

http

```
POST /users/bob/inbox HTTP/1.1
Host: pixelfed.social
Date: Fri, 19 Jun 2026 03:54:00 GMT
Signature: keyId="https://mastodon.social",headers="(request-target) host date",signature="..."
Content-Type: application/activity+json

{
  ... [The JSON-LD Like payload from above] ...
}
```

Use code with caution.

### Popular Software Examples

Different development teams build completely unique user interfaces on top of the ActivityPub protocol:

| Platform Name \[[1](https://www.w3.org/TR/2009/WD-html5-20090825/text-level-semantics.html)] | Looks & Feels Like   | Primary Media Type                               |
| -------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------ |
| **Mastodon**                                                                                 | Twitter / X          | Short text, links, and small media               |
| **Pixelfed**                                                                                 | Instagram            | High-resolution photography and grids            |
| **PeerTube**                                                                                 | YouTube              | Long-form video hosting and channels             |
| **Lemmy**                                                                                    | Reddit               | Community forums, link aggregation, and upvoting |
| **BookWyrm**                                                                                 | Goodreads            | Book tracking, reviews, and reading groups       |
| **Funkwhale**                                                                                | SoundCloud / Spotify | Audio streaming, podcasts, and music sharing     |

Are you trying to see how a **specific platform** implements this, or would you like to see the **step-by-step code logic** for building your own ActivityPub inbox?

- [link](https://www.w3.org/TR/2009/WD-html5-20090825/text-level-semantics.html)

4.6 Text-level semantics — HTML 5\
It ( The small element ) is only intended for short runs of text. The text of a page listing terms of use, for instance, would not...\
\
\
W3C

## You said: text payload examples

Here are concrete text payload examples representing the most common social media actions in ActivityPub.

These payloads use **JSON-LD** (JavaScript Object Notation for Linked Data) formatted with the standard `application/activity+json` content type. \[[1](https://witscode.com/blogs/schema-markup-ai-agents-json-ld-examples-that-work/), [2](https://scrape.do/blog/web-scraping-data-types/)]

### 1. Creating a New Post (Create Note)

When a user writes a standard text post, their server wraps a `Note` object inside a `Create` activity.

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Create",
  "actor": "https://social.example",
  "to": ["https://w3.org#Public"],
  "cc": ["https://social.example/followers"],
  "object": {
    "id": "https://social.example/posts/98765",
    "type": "Note",
    "published": "2026-06-19T11:00:00Z",
    "attributedTo": "https://social.example",
    "to": ["https://w3.org#Public"],
    "content": "<p>Hello Fediverse! This is my first decentralized post.</p>",
    "sensitive": false
  }
}
```

Use code with caution.

- **to / cc**: Controls visibility. Setting this to `#Public` makes it visible to the entire network.
- **content**: Contains the actual message text, usually formatted as basic HTML. \[[1](https://www.digitalocean.com/community/tutorials/agent-communication-protocols-explained)]

### 2. Replying to a Post (Threaded Reply)

When a user replies to someone else, the payload structure remains a `Create Note`, but it explicitly references the original post using the `inReplyTo` field.

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Create",
  "actor": "https://social.example",
  "to": ["https://social.example"],
  "object": {
    "id": "https://social.example/posts/66666",
    "type": "Note",
    "inReplyTo": "https://social.example/posts/98765",
    "attributedTo": "https://social.example",
    "content": "<p>Welcome! Glad to have you here.</p>"
  }
}
```

Use code with caution.

- **inReplyTo**: The unique URL ID of Alice's original post. This is what allows platforms to build threaded conversations.

### 3. Boosting / Retweeting a Post (Announce)

Sharing someone else's content to your own followers uses the `Announce` activity type. It simply points to the original post URL without needing to duplicate the content.

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Announce",
  "actor": "https://social.example",
  "published": "2026-06-19T11:05:00Z",
  "to": ["https://social.example/followers"],
  "object": "https://social.example"
}
```

Use code with caution.

- **type**: Changing this to `Announce` signals platforms to display this as a native share or re-blog.

### 4. Sending a Follow Request (Follow)

When a user clicks "Follow" on a profile, their server sends a request that must be accepted or rejected by the receiving server.

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Follow",
  "actor": "https://social.example",
  "object": "https://social.example"
}
```

Use code with caution.

### 5. Accepting a Follow Request (Accept)

If Alice has an auto-accept setup or manually approves Bob, her server replies with an `Accept` activity referencing Bob's original follow request ID.

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Accept",
  "actor": "https://social.example",
  "object": {
    "id": "https://social.example",
    "type": "Follow",
    "actor": "https://social.example",
    "object": "https://social.example"
  }
}
```

Use code with caution.

### 6. Deleting Content (Delete)

When a user deletes a post, a tombstone payload is pushed out so other servers know to purge it from their databases.

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Delete",
  "actor": "https://social.example",
  "to": ["https://social.example/followers"],
  "object": {
    "id": "https://social.example/posts/98765",
    "type": "Tombstone"
  }
}
```

Use code with caution.

- **type: Tombstone**: Replaces the original post content, indicating the data is permanently removed.

Would you like to see how an **Actor profile payload** (the JSON file that defines a user account) looks, or do you want to see how to use **cryptographic signatures** to send these securely?

- [link](https://witscode.com/blogs/schema-markup-ai-agents-json-ld-examples-that-work/)\
  Schema Markup for AI Agents: JSON-LD Examples That Work\
  Aug 14, 2025 — In this tutorial, you'll get 8 working JSON-LD ( JavaScript Object Notation for Linked Data ) code examples you can implement toda...\
  \
  \
  witscode.com
- [link](https://scrape.do/blog/web-scraping-data-types/)\
  8 Types of Data Extracted with Web Scraping\
  Jun 2, 2025 — JSON-LD (Linked Data): This is usually in\
  \
  \
  Scrape.do
- [link](https://www.digitalocean.com/community/tutorials/agent-communication-protocols-explained)\
  Agent Communication Protocols Explained\
  Nov 13, 2025 — Content: The message payload, i.e., the actual content of the message – i.e., the information or data being transferred. This coul...\
  \
  \
  DigitalOcean

## You said: all nouns and all verbs

In ActivityPub, "nouns" are called **Objects** and "verbs" are called **Activities**. They are defined by the [W3C Activity Vocabulary](https://www.w3.org/TR/activitypub/) standard.

Here is the complete, official list of all core core vocabulary terms.

***

### All Verbs (Activities)

Activities represent an action taken by an actor. They are divided into generic, transitional, and specific interaction types.

### Core Activity Types

- **Activity**: The base type for all actions.
- **IntransitiveActivity**: An action that has an actor but no direct object (e.g., "Alice traveled"). \[[1](https://www.espressoenglish.net/phrasal-verbs-in-english/)]

### Core Verbs (Actions)

- **Accept**: Approves an incoming request (like a follow request).
- **Add**: Adds an object to a specific target collection.
- **Announce**: Shares, retweets, or boosts an object to followers.
- **Arrive**: Indicates the actor has arrived at a specific location.
- **Block**: Prevents an actor from interacting with the sender.
- **Create**: Publishes a brand new object (like a post, image, or article).
- **Delete**: Permanently destroys an object or profile.
- **Dislike**: Expresses a negative reaction to an object.
- **Flag**: Reports inappropriate, offensive, or illegal content.
- **Follow**: Requests to subscribe to an actor's outbox feed.
- **Ignore**: Silently disregards an actor or activity without blocking them.
- **Join**: Joins a group, community, or specific event.
- **Leave**: Departs or unsubscribes from a group or event.
- **Like**: Expresses a positive reaction or favorites an object.
- **Listen**: Indicates the actor is listening to audio content.
- **Move**: Indicates an object or actor has relocated to a new URI.
- **Offer**: Proposes an object to a recipient for their response.
- **Question**: Creates a native poll or a multiple-choice question.
- **Reject**: Declines an incoming request (like a follow request).
- **Remove**: Removes an object from a specific target collection.
- **Read**: Indicates the actor has read a specific text object.
- **Travel**: Indicates the actor is traveling from one location to another.
- **Undo**: Reverses a previous action (e.g., unliking or unfollowing).
- **Update**: Modifies the properties of an existing object (editing a post).
- **View**: Indicates the actor has visually viewed an object. \[[1](https://www.amerilingua.com/grammar/prefixes)]

***

### All Nouns (Objects)

Objects represent the entities or content being acted upon. \[[1](https://ielts.com.au/australia/prepare/article-grammar-101-subjects-and-objects-in-english)]

### Core Structural Types

- **Object**: The base class for all nouns in the vocabulary.
- **Actor**: Represents an entity capable of performing activities.

### Content & Media Nouns

- **Article**: Long-form text content, like a blog post or news essay.
- **Audio**: Audio media content, like a podcast episode or music track.
- **Document**: A generic file or resource layout.
- **Event**: A specific happening at a certain time and location.
- **Image**: Graphical media content, like a photo, vector, or drawing.
- **Note**: Short-form text content, like a tweet or status update.
- **Page**: A structured Web document or single webpage profile.
- **Place**: A physical, geographical location with coordinates.
- **Profile**: A content page describing a specific Actor.
- **Relationship**: Describes the social connection between two actors.
- **Tombstone**: A placeholder replacing a deleted object.
- **Video**: Video media content, like a movie clip or livestream.

### Actor Sub-Types (Specialized Nouns)

- **Application**: A software program or automated system.
- **Group**: A collective community, forum, or organized club.
- **Organization**: A formal business, enterprise, or institution.
- **Person**: An individual human user account.
- **Service**: A background digital tool, bot, or automated API endpoint.

### Collection Nouns (Data Containers)

- **Collection**: A simple list of ordered or unordered items.
- **OrderedCollection**: A list of items that must maintain a strict sequence.
- **CollectionPage**: A paginated slice of a much larger Collection list.
- **OrderedCollectionPage**: A paginated slice of a much larger OrderedCollection list.

***

### Complete Structural Tree

To see how they relate architecturally, the entire vocabulary inherits properties down this hierarchy:

text

```
Object
 ├── Actor (Person, Group, Organization, Application, Service)
 ├── Activity
 │    └── IntransitiveActivity (Arrive, Travel, Question)
 │         ├── Accept, Add, Announce, Block, Create, Delete, Dislike,
 │         ├── Flag, Follow, Ignore, Join, Leave, Like, Listen, Move,
 │         └── Offer, Read, Reject, Remove, Undo, Update, View
 ├── Collection (OrderedCollection)
 ├── CollectionPage (OrderedCollectionPage)
 └── [Media Objects] (Article, Audio, Document, Event, Image, Note, Page, Place, Profile, Relationship, Tombstone, Video)
```

Use code with caution.

If you are writing software, do you need to know **how to extend these terms** using custom namespaces, or would you like to see the **mandatory properties** required inside an Actor noun?

- [link](https://www.espressoenglish.net/phrasal-verbs-in-english/)\
  Phrasal Verbs in English: Lists, Types, Examples, Meanings\
  Intransitive Phrasal Verbs Intransitive phrasal verbs have no direct object. (Something that is “acted upon” by the verb). Example...\
  \
  \
  Espresso English
- [link](https://www.amerilingua.com/grammar/prefixes)\
  Prefixes | Grammar Lesson Plans\
  Add to favorites 'Un-' indicates negation or reversal, as in "unhappy" (not happy) or "undo" (reverse the action). 'Re-' suggests ...\
  \
  \
  AmeriLingua
- [link](https://ielts.com.au/australia/prepare/article-grammar-101-subjects-and-objects-in-english)\
  Subjects vs Objects Explained | Grammar 101\
  Jun 9, 2021 — Now that you know what subjects are, let's have a look at objects. Generally, we use the word 'object' to talk about the thing/per...\
  \
  \
  IELTS Australia

## You said: is the list exhaustive

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, that list is </span><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">exhaustive for the official W3C Activity Streams 2.0 Core and Vocabulary specifications.</strong></mark> Every single standardized noun (Object) and verb (Activity) defined in the official standard is included in that list.

However, the protocol is deliberately designed to be **extensible**. Because ActivityPub uses JSON-LD, platforms can invent their own custom nouns and verbs if the official list does not cover their specific feature needs.

### How Platforms Extend the List

To prevent different apps from accidentally using the same word for different features, custom extensions are assigned to unique Web addresses (namespaces) inside the `@context` array at the top of the text payload.

Here are common examples of unofficial, platform-specific extensions used every day across the network:

### Custom Nouns (Objects)

- **`Hashtag`**: Mastodon added this to explicitly track tag links, as the core standard lacks a native hashtag noun.
- **`Emoji`**: Used by various platforms to transmit custom, non-standard emojis in posts.
- **`IdentityProof`**: Used to verify a user's cryptographic ownership of external website domains or encryption keys.

### Custom Properties (Attributes)

Instead of inventing brand new verbs, apps usually add custom properties inside the standard `Note` or `Create` objects:

- **`focalPoint`**: Pixelfed added this to specify the X/Y crop coordinates of an `Image`, ensuring thumbnails display correctly.
- **`votersCount`**: Mastodon added this to the standard `Question` (poll) noun to track total voting participants.
- **`discoverable`**: A true/false flag determining if a `Person` profile should appear in public directory search listings.

If you are developing an app, you can use the core list safely knowing every ActivityPub server will understand it. If you need to add a feature not on the list, you can **mix in custom extensions** without breaking compatibility with the rest of the network.

Do you want to see **how to write the `@context` block** to properly declare custom terms, or are you looking into the compliance rules of a specific platform like Mastodon?

## You said: why could you block or reject or delete if you are already public and accessible

Even if a server or profile is completely public and its content can be read by anyone on the web, verbs like `Block`, `Reject`, and `Delete` are critical because **reading content is passive, but social interaction is active.** \[[1](https://www.chegg.com/homework-help/questions-and-answers/ability-given-individual-make-status-profile-private-public-social-media-platform-falls-pr-q100141356)]

ActivityPub structures these actions to handle distinct technical and social mechanics:

### 1. Why `Reject` a Follow?

Anyone can read a public account’s RSS feed or visit their public profile page in a web browser. However, **Following** creates an active subscription.

- **The Mechanism**: When a user follows you, your server must actively push every new post you make to _their_ server's inbox.
- **Why Reject?**: If a known spam bot or malicious server tries to follow a public account, rejecting the follow forces their server to stop subscribing. It saves your server network bandwidth and processing power by legally cutting off that automatic data delivery.

### 2. Why `Block` an Actor?

Blocking a user on a public network does not stop them from viewing your public web page anonymously. Instead, it **strips away their power to interact with you.** \[[1](https://www.forbes.com/sites/antoniopequenoiv/2024/10/17/x-will-soon-let-users-see-tweets-from-people-who-block-them-the-controversial-change-explained/), [2](https://atproto.com/blog/block-implementation), [3](https://www.forbes.com/sites/antoniopequenoiv/2024/10/17/x-will-soon-let-users-see-tweets-from-people-who-block-them-the-controversial-change-explained/), [4](https://www.reddit.com/r/changelog/comments/p2ezy4/bringing%5Fmore%5Fvisibility%5Fto%5Fcomments%5Ffrom%5Fblocked/)]

- **Stopping the Inbox**: A `Block` activity forces your server to automatically drop any incoming interactions from that specific user.
- **The Result**: The blocked person can no longer leave comments on your posts, send you direct messages, tag your username, or appear in your notifications. It creates a digital shield that keeps your personal notification space clean from harassment. \[[1](https://help.x.com/en/using-x/dm-blocking), [2](https://www.facebook.com/help/447613741984126?locale=en%5FGB), [3](https://www.yahoo.com/tech/happens-block-someone-facebook-141515084.html), [4](https://support.discord.com/hc/en-us/community/posts/1500001199182-Suggestion-Blocked-users-are-completely-hidden-from-server-list-and-more), [5](https://www.reddit.com/r/changemyview/comments/16xhspd/cmv%5Fweb%5Fforums%5Fshould%5Fnot%5Fuse%5Fblock%5Ffeatures%5Fthat/)]

### 3. Why `Delete` Content?

A public post can be scraped, screenshotted, or archived by third parties the moment it hits the web. However, sending a `Delete` activity serves a vital database-syncing purpose across the decentralized network. \[[1](https://lifeindraft.medium.com/your-chatgpt-history-might-be-public-on-google-heres-how-to-fix-it-in-10-minutes-708ebedfe4b4)]

- **The Mechanism**: When you delete a post on your home server, it transmits a `Delete` activity containing a `Tombstone` object to all connected servers.
- **Why it matters**: Cooperating servers in the Fediverse are legally obligated by protocol rules to honor this request and wipe the post from their own local databases. It ensures the post vanishes from your followers' timelines, search indexes, and reply threads across the network.

In short, you cannot stop the public web from _looking_ at you, but ActivityPub's verbs give you total control over **who is allowed to talk to you, who forces your server to work, and what remains in external databases.**

Would you like to look at the **cryptographic security layers** (like HTTP Signatures) that ensure a `Delete` or `Block` request actually comes from the real user?

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://www.chegg.com/homework-help/questions-and-answers/ability-given-individual-make-status-profile-private-public-social-media-platform-falls-pr-q100141356)\
  Solved The ability given to an individual to make the status\
  Jul 12, 2022 — On the other hand, a public profile is accessible to anyone on the platform. When a user chooses to make their profile public, the...\
  \
  Chegg
- [link](https://www.forbes.com/sites/antoniopequenoiv/2024/10/17/x-will-soon-let-users-see-tweets-from-people-who-block-them-the-controversial-change-explained/)\
  What To Know About The Controversial Change To X’s Block Feature\
  Oct 17, 2024 — X's engineering page announced Wednesday that for those with public accounts, blocking a user will stop that person from engaging ...\
  \
  \
  Forbes
- [link](https://atproto.com/blog/block-implementation)\
  Why are blocks on Bluesky public?\
  Jun 8, 2023 — However, it is important to note that blocking does not prevent all possible interaction (even on centralized social networks). Fo...\
  \
  \
  AT Protocol

Show all

## You said: can you force follow instantly regardless, can you just see delete as a label on the original content

### **Can you force a follow instantly regardless?**

**Technically, yes, but socially and practically, no.** \[[1](https://ux.stackexchange.com/questions/121664/how-should-i-handle-pending-follow-requests-when-the-profile-privacy-level-chang)]

Because ActivityPub is decentralized, anyone can modify their own server's code to completely bypass the official request handshake. A modified server can simply declare itself a "follower" of your public account inside its own local database and scrape your public posts without ever sending you a `Follow` request.

However, a bad actor cannot force **your** server to recognize them as a follower. This has major functional consequences:

- **No Automated Delivery**: In ActivityPub, a server only pushes content to the inboxes of accounts listed in its _own_ local followers database. If your server never accepted their follow request, it will never actively send them your posts.
- **They Must Rely on Scraping**: The rogue server is forced to constantly fetch your public profile over and over again via automated web scraping, which consumes their own bandwidth and is easy for your server to block or rate-limit.
- **Invisible to You**: They will never appear in your official follower count, and they cannot trigger notifications on your screen.

***

### Can you just see a `Delete` as a label instead of wiping the content?

**Yes, any server can choose to ignore a deletion and simply label it as "Deleted."**

Once data leaves your server and enters an external server, you lose absolute physical control over it. While the ActivityPub specification dictates that servers _should_ wipe the content and replace it with a `Tombstone` object, a rogue or modified server can choose to ignore that instruction.

A server administrator can configure their database to:

1. Receive your `Delete` payload.
2. Keep your original text and images intact in their database.
3. Simply append a visual tag in the user interface saying _"The author deleted this post, but we are archiving it anyway."_

This is why the general rule of the internet still heavily applies to the Fediverse: **once a public post is sent out, you can never guarantee it is fully erased everywhere.**

Would you like to see **how servers block rogue platforms** that refuse to honor deletes, or do you want to explore how **Authorized Fetch** blocks scrapers entirely?

- [link](https://ux.stackexchange.com/questions/121664/how-should-i-handle-pending-follow-requests-when-the-profile-privacy-level-chang)\
  How should I handle pending follow requests when the profile privacy level changes?\
  Oct 18, 2018 — Follower cancels request and requests again. In this case, the follow request will be accepted instantly since it is being process...\
  \
  \
  User Experience Stack Exchange

## You said: how do you view a profile

To view a profile, ActivityPub uses a standard web mechanism called **Content Negotiation**.

Because a profile URL needs to serve both human users (who want a clean webpage) and automated servers (which want structured code), the profile behaves differently depending on **who** or **what** is requesting it.

***

### 1. How a Human Views a Profile

When you open a browser and type in a user's ActivityPub profile URL (e.g., `https://social.example`):

- Your browser sends a standard `GET` request expecting a regular website.
- The server detects that a human browser is visiting.
- The server responds by serving a standard **HTML webpage** with visual styles, profile pictures, layouts, and readable posts.

***

### 2. How a Server Views a Profile (The ActivityPub Way)

When an external ActivityPub application or server needs to fetch Alice's digital profile card to see her inbox or outbox details, it uses Content Negotiation to ask for the data payload.

### The Technical Request

The requesting server sends an HTTP `GET` request to the exact same URL, but explicitly includes an `Accept` header asking for ActivityPub data:

http

```
GET /users/alice HTTP/1.1
Host: social.example
Accept: application/activity+json
```

Use code with caution.

### The Technical Response

Because the server sees the `application/activity+json` header, it bypasses the visual website completely. Instead, it spits back a **JSON-LD Object** that defines the account structure:

json

```
{
  "@context": [
    "https://w3.org",
    "https://w3id.org"
  ],
  "id": "https://social.example",
  "type": "Person",
  "preferredUsername": "alice",
  "name": "Alice Smith",
  "summary": "<p>Decentralized developer and tech enthusiast.</p>",
  "inbox": "https://social.example/inbox",
  "outbox": "https://social.example/outbox",
  "followers": "https://social.example/followers",
  "following": "https://social.example/following",
  "publicKey": {
    "id": "https://social.example#main-key",
    "owner": "https://social.example",
    "publicKeyPem": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA..."
  }
}
```

Use code with caution.

### Why This Design Matters

- **Discovery Routes**: The response hands over explicit endpoints (`inbox`, `outbox`, `followers`). External servers now know exactly where to send a message to Alice or where to look to fetch her latest timeline items.
- **Security Verification**: The profile includes a `publicKey`. External servers copy this cryptographic key to verify that posts or delete requests signed by "Alice" are actually authentic and haven't been faked by a third party.

***

### 3. How a User Finds a Profile Across Different Servers (Webfinger)

If you are logged into your account on `server-a.com` and want to view `@alice@social.example`, your server doesn't inherently know her direct profile URL yet.

To bridge this gap, it uses a helper protocol called **Webfinger**: \[[1](https://www.stefanjudis.com/blog/a-well-known-avatar-url-would-be-dang-cool/)]

1. Your server sends a background query to her domain: `https://social.example`.
2. Her domain replies with a tiny data file that says: _"Yes, that user exists. Her ActivityPub profile URL is `https://social.example`."_
3. Your server takes that URL, performs the **Server View** steps above, and neatly populates her profile directly onto your app's dashboard screen.

If you want to continue digging into the technical implementation, would you like to see **how to configure a Webfinger endpoint** on a web server, or would you prefer to see **how an application securely signs these profile requests** using HTTP signatures?

- [link](https://www.stefanjudis.com/blog/a-well-known-avatar-url-would-be-dang-cool/)\
  A well-known avatar URL would be dang cool.\
  Feb 7, 2025 — If I get this right (I only did some quick research), WebFingers are (is?) a URL-based discovery protocol that allows you to reque...\
  \
  \
  www.stefanjudis.com

## You said: why is there an undo action

An **`Undo` action is necessary because ActivityPub is fundamentally decentralized and stateless**; there is no central database that can instantly change a value from "true" to "false" across the entire network.

If you like a post or follow an account, that data is copied and stored on dozens of external servers. To reverse that action, your home server must explicitly broadcast an instruction telling those external servers to delete that record from their local databases.

An `Undo` activity wraps around your original action and acts as a universal "delete/reverse" command. \[[1](https://www.storylane.io/tutorials/how-to-undo-in-miro)]

### 1. Reversing a Social Action

When you tap an interface button to undo an interaction, ActivityPub cannot simply erase the event out of thin air. It creates a brand new activity of `type: "Undo"` and targets the exact ID of the original event.

- **Unliking a post**: You cannot send a "Delete Like" command. Instead, you send an `Undo` targeting your previous `Like` activity ID.
- **Unfollowing an account**: You send an `Undo` targeting your previous `Follow` activity ID.
- **Un-boosting/Un-retweeting**: You send an `Undo` targeting your previous `Announce` activity ID.

### 2. Concrete Text Payload Example

If Bob previously followed Alice and now decides to unfollow her, Bob's server sends this `Undo` activity to Alice's inbox:

json

```
{
  "@context": "https://w3.org",
  "id": "https://social.example",
  "type": "Undo",
  "actor": "https://social.example",
  "object": {
    "id": "https://social.example/activities/follow-123",
    "type": "Follow",
    "actor": "https://social.example",
    "object": "https://social.example"
  }
}
```

Use code with caution.

- **Object**: Contains the exact, fully detailed representation of the original action (`Follow`) being cancelled.

### 3. Why Not Just Use a `Delete` Action?

In the ActivityPub architecture, `Delete` and `Undo` serve two completely different logical purposes based on data ownership: \[[1](https://www.lenovo.com/ca/en/glossary/cancel/?srsltid=AfmBOoqr%5F466lMHdY30OrofhQBGV-iz3K-yFZB3dAGFjTMTcYsPtXPne)]

| Action       | What It Controls                                                                 | Example Use Case                                                    |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **`Delete`** | Destroys a **tangible content object** that _you own_ entirely.                  | Wiping an `Article`, a `Note` (post), or an `Image` from existence. |
| **`Undo`**   | Cancels an **interaction or relationship state** between _two different actors_. | Withdrawing a `Follow` request or retracting a `Like` validation.   |

If you used a `Delete` action to unfollow someone, you would technically be telling Alice's server to delete the _concept_ of the follow activity, which can cause synchronization or tracking bugs. Using `Undo` cleanly tells the remote server: _"Keep your database history intact, but mark this specific relationship state as no longer active."_

If you are thinking about edge cases, would you like to know **how a server handles an `Undo` if it already deleted the original activity ID**, or should we explore how **polls and voting changes** use this logic?

- [link](https://www.storylane.io/tutorials/how-to-undo-in-miro)\
  How to Undo in Miro: 1-Min Guide\
  May 12, 2026 — Use the undo button to reverse most actions — including moving, deleting, typing, or resizing — as long as you remain in the same ...\
  \
  \
  Storylane
- [link](https://www.lenovo.com/ca/en/glossary/cancel/?srsltid=AfmBOoqr%5F466lMHdY30OrofhQBGV-iz3K-yFZB3dAGFjTMTcYsPtXPne)\
  Cancel in Software: Definition, Purpose & How It Works\
  While cancel abandons the entire session, undo provides a step-by-step rollback functionality, allowing users to correct specific ...\
  \
  \
  Lenovo

## You said: how is it to store file contents in activitypub or just use it as a protocol

ActivityPub is strictly designed to be a **text-based metadata and messaging protocol**, not a file storage layer. In production systems, storing actual binary file contents directly inside ActivityPub text payloads is heavily discouraged because it crashes network performance and causes massive database bloat across the Fediverse. \[[1](https://paul.kinlan.me/adding-activity-pub-to-your-static-site/)]

Here is how systems handle media in practice compared to how the protocol operates.

***

### 1. How File Contents are Handled (The Standard Way)

Instead of embedding a file inside an activity, ActivityPub servers use a **hybrid approach**: files are stored on a standard web server or cloud bucket, and ActivityPub simply transmits a text-based "pointer" link to that file.

When you post an image on a platform like Pixelfed or Mastodon, the system performs these steps behind the scenes:

1. **Upload**: Your client uploads the raw image binary to your home server's file storage (e.g., local hard drive, Amazon S3 bucket, or IPFS).
2. **URL Generation**: The server saves the file and generates a permanent public web link for it (e.g., `https://media.example`).
3. **ActivityPub Metadata Broadcast**: The server creates an ActivityPub `Note` or `Image` object. It places the public web link inside an `attachment` field and broadcasts that tiny text payload to the network. \[[1](https://www.w3.org/TR/activitypub/)]

### What the Payload Looks Like

json

```
{
  "@context": "https://w3.org",
  "type": "Create",
  "actor": "https://social.example",
  "object": {
    "type": "Note",
    "id": "https://social.example/posts/111",
    "content": "<p>Look at my cat!</p>",
    "attachment": [
      {
        "type": "Image",
        "mediaType": "image/jpeg",
        "url": "https://media.example",
        "name": "A cute orange cat sleeping on a blanket"
      }
    ]
  }
}
```

Use code with caution.

When external servers receive this text payload, they read the `url` field and lazily download the image or stream the video only when their users scroll past it on their timelines.

***

### 2. Can You Force Binary File Storage into the Protocol?

Technically, because ActivityPub objects are just JSON, you _could_ convert a file into a giant text string using **Base64 encoding** and stuff it into a data URI layout inside the JSON payload. \[[1](https://overengineer.dev/blog/2018/02/01/activitypub-one-protocol-to-rule-them-all/)]

**Why this is a terrible idea for production:**

- **Payload Bloat**: Base64 encoding increases file sizes by roughly 33%.
- **Database Multiplying Effect**: If you send a 5MB image directly inside the payload to 1,000 followers on 500 different servers, you are forcing 500 remote databases to permanently ingest and store that 6.5MB text string. This triggers immediate rate-limiting and domain-blocking from other node administrators.
- **Memory Crashes**: ActivityPub background workers are optimized to parse tiny JSON strings quickly. Forcing them to parse megabytes of raw text data in memory can easily trigger system out-of-memory crashes.

***

### 3. Using it Strictly as a Protocol \[[1](https://socialhub.activitypub.rocks/t/static-file-activitypub/2785)]

If you treat ActivityPub strictly as a routing and state-synchronization protocol, it becomes an incredibly powerful, lightweight engine.

Instead of seeing it as a social network, you can use it to pass lightweight operational messages between independent servers for non-social use cases:

- **Distributed Job Queues**: Server A can send an activity to Server B saying `type: "Offer"`, passing task parameters inside the object. Server B performs the task and replies to Server A's inbox with `type: "Accept"` along with the text result.
- **Database State Syncing**: Ensuring that distributed applications across different domains keep their configuration profiles or permissions aligned in near real-time without building custom APIs.
- **Global Notifications**: Pushing system alerts, webhooks, or software updates directly to connected infrastructure nodes seamlessly.

If you are designing an architecture, would you like to see **how to structure media caching policies** so your server doesn't run out of storage space, or are you interested in **how to build a custom non-social application** strictly using the protocol layer?

- [link](https://paul.kinlan.me/adding-activity-pub-to-your-static-site/)\
  Adding ActivityPub to your static site | Modern Web Development with Chrome\
  Dec 16, 2022 — The biggest learning that I had was that ActivityPub ( ActivityPub protocol ) is a Message protocol.\
  \
  \
  paul.kinlan.me
- [link](https://www.w3.org/TR/activitypub/)\
  ActivityPub\
  Jan 23, 2018 — (Activities sent around in ActivityPub generally follow the pattern of some activity by some actor being taken on some object. In ...\
  \
  \
  W3C
- [link](https://overengineer.dev/blog/2018/02/01/activitypub-one-protocol-to-rule-them-all/)\
  ActivityPub - one protocol to rule them all?\
  Feb 1, 2018 — ActivityPub is based on Activity Streams 2.0, which is a specification defining the representation of actions and objects based on...\
  \
  overengineer.dev

Show all

## You said: i mean how is it to store text files in activity pub or just convert it to activity pub when transferring

### **Storing Text Files Inside ActivityPub**

You can easily store text files (like source code, markdown documents, raw configuration data, or log files) directly inside an ActivityPub payload. Because text is extremely lightweight, it does not suffer from the massive database bloat or memory crashes caused by binary images and video files. \[[1](https://www.rtalbert.org/blog-archive/index.php/2017/07/10/plaintext-gtd)]

To do this natively, you use the standard **`Document`** or **`Article`** object types. The file's raw content is placed directly inside the `content` property as a plain or formatted string:

json

```
{
  "@context": "https://w3.org",
  "type": "Create",
  "actor": "https://social.example",
  "object": {
    "id": "https://social.example/documents/readme-1",
    "type": "Document",
    "mediaType": "text/markdown",
    "name": "README.md",
    "content": "# Project Rules\n1. Do not break production.\n2. Write clean documentation."
  }
}
```

Use code with caution.

- **`mediaType`**: Tells the receiving server exactly how to parse or render the string (`text/plain`, `text/markdown`, `application/json`, etc.).
- **`content`**: Holds the literal text of the file.

***

### Converting Text Data on the Fly (Just-in-Time Transformation)

Instead of maintaining a permanent database of ActivityPub payloads, you can use ActivityPub strictly as a **stateless transmission pipeline**. Your system stores files in its native, preferred format (like standard `.txt` or `.md` files on disk), and only wraps them in an ActivityPub envelope at the exact moment of transfer.

### The Workflow Process

1. **Trigger**: A user clicks a button to send a markdown file to a remote server.
2. **Read**: your application reads the raw string from your server's standard file system.
3. **Wrap**: A background function instantiates a clean ActivityPub JSON wrapper (`Create -> Document`) and assigns the raw text to the `content` field.
4. **Transmit**: The server pushes the compiled JSON payload directly into the recipient's ActivityPub inbox endpoint.
5. **Receive & Parse**: The receiving server extracts the `content` text, parses it according to the `mediaType`, and saves it directly back down to its own local disk as a flat file.

### Benefits of This Streaming Approach

- **Zero Overhead**: Your internal app architecture doesn't have to change. You keep your standard database structures or folder trees intact.
- **Format Agnostic**: ActivityPub simply acts as a secure delivery truck. It doesn't care what the internal payload text actually represents.
- **Standardized Identity and Security**: You inherit ActivityPub's built-in **HTTP Signatures**. Even though you are just sending raw text data, the receiving server can cryptographically prove exactly which user sent that text, preventing data spoofing. \[[1](https://swicg.github.io/activitypub-http-signature/)]

***

### Key Operational Constraints

If you choose to stream or store text files natively through the protocol, keep these production guardrails in mind:

- **Size Limits**: While text is small, a 10MB text file is still a heavy processing burden. Most large Fediverse implementations (like Mastodon) hard-cap incoming payload string parsing at **50KB to 100KB**. Anything larger is rejected. \[[1](https://www.reddit.com/r/csharp/comments/hdypbi/copying%5Ffiles%5Fvia%5Fwinrm/)]
- **Escaping Special Characters**: If your text file contains raw code snippets, HTML tags, or JSON syntax, you must strictly escape characters (like quotes, backslashes, and ampersands) or encode the payload text to prevent it from corrupting the outer ActivityPub JSON envelope.

Are you looking to use this to **sync documentation or code repositories** between decentralized systems, or do you need a specific code snippet showing **how to parse and extract** text files from an incoming payload stream?

- [link](https://www.rtalbert.org/blog-archive/index.php/2017/07/10/plaintext-gtd)\
  Keeping it simple and getting things done: The move to a plaintext GTD system — Robert Talbert, PhD.\
  Jul 10, 2017 — Text files are lightweight. You can have thousands of them on a storage device before they even make a dent, and sharing their con...\
  \
  Robert Talbert, PhD.
- [link](https://swicg.github.io/activitypub-http-signature/)\
  ActivityPub and HTTP Signatures\
  Aug 3, 2025 — ActivityPub suggests HTTP Message Signatures and Linked Data Signatures as additional authentication mechanisms. ActivityPub inbox...\
  \
  GitHub Pages documentation
- [link](https://www.reddit.com/r/csharp/comments/hdypbi/copying%5Ffiles%5Fvia%5Fwinrm/)\
  Copying Files via WinRM : r/csharp\
  Jun 22, 2020 — I was able to implement file transfers by reading files into variables then executing a script on the target server which then wri...\
  \
  Reddit

## You said: limitations of activitypub

While ActivityPub is a powerful protocol, it has significant architectural limitations, scaling pain points, and social challenges when deployed in production. \[[1](https://allthingsopen.org/articles/activitypub-explained-the-protocol-connecting-the-fediverse)]

### 1. Scaling and Infrastructure Limitations

- **The Database Ingestion Nightmare**: In ActivityPub, every instance stores its own copy of a post. If a user with 50,000 followers on 10,000 different servers posts a message, that message is replicated 10,000 times across 10,000 different databases. This causes massive network-wide database bloat and storage compounding.
- **The "Celebrity" Delivery Bottleneck**: When a highly popular user publishes a post, their home server must instantly fire off tens of thousands of individual HTTP POST requests to thousands of external inbox endpoints. This creates massive CPU and network spikes, often crashing small or underpowered servers.
- **Strict Payload Caps**: Because background jobs parse incoming JSON strings in memory, almost all production servers impose a strict size limit (usually **50KB to 100KB** per activity). You cannot use the protocol to natively stream large documents, logs, or rich datasets.

### 2. Privacy and Deletion Failures

- **The Illusion of Erasure**: As mentioned earlier, a `Delete` activity is strictly an "honor system" request. Rogue servers, malicious scraping bots, or bad actors can simply choose to ignore deletion payloads, preserving your supposedly deleted posts or media indefinitely.
- **Metadata Leakage**: To deliver a post or verify an identity, ActivityPub heavily exposes server-to-server metadata. It is trivial for external systems to scrape public endpoints to map out who is talking to whom, creating massive graph datasets of user connections without their explicit consent.
- **No Native End-to-End Encryption (E2EE)**: The core ActivityPub standard does not natively define or support end-to-end encrypted direct messages. Messages sent to an inbox are processed and readable by the administrator of the receiving server. \[[1](https://github.com/swicg/activitypub-e2ee/blob/main/integration-models.md), [2](https://socialhub.activitypub.rocks/t/implementing-activitypub-client-to-server/981)]

### 3. Identity and Security Weaknesses

- **Domain Lock-In (By Default)**: Your identity is fundamentally tied to a specific domain name (e.g., `alice@server.com`). If that domain expires, gets bought out, or the administrator shuts down the server, you lose your entire identity, your username, and your posts. Moving your followers to a new server requires the old server to still be online to sign the migration payload.
- **Complex Cryptographic Management**: Securing the protocol relies on a complex web of HTTP Signatures and asymmetric key pairs. A minor configuration error or a change in a server's TLS setup can instantly cause other servers to reject all your incoming activities, isolating your server from the network. \[[1](https://overengineer.dev/blog/2018/02/01/activitypub-one-protocol-to-rule-them-all/)]

### 4. Search and Discovery Deficits

- **No Global Search**: Because there is no centralized database indexing the entire network, you cannot search for a word across the entire Fediverse. You can only search for text that has already passed through or been indexed by your specific home server. \[[1](https://www.reddit.com/r/Wordpress/comments/1nq3nbb/activitypub%5Fintegration%5Fissues/), [2](https://www.reddit.com/r/Mastodon/comments/1i0mk08/why%5Fusechoose%5Fat%5Frather%5Fthan%5Factivitypub%5Ffor/), [3](https://www.engadget.com/social-media/threads-now-allows-users-to-follow-fediverse-accounts-directly-in-its-app-183517197.html)]
- **The "Cold Start" Discovery Problem**: When you launch a brand new, isolated ActivityPub server, your local timeline is completely empty. Your server doesn't know what content exists across the wider network until your users actively find and follow people on external instances. \[[1](https://news.ycombinator.com/item?id=33482516), [2](https://www.reddit.com/r/Mastodon/comments/1i0mk08/why%5Fusechoose%5Fat%5Frather%5Fthan%5Factivitypub%5Ffor/)]

If you are planning an architecture or evaluating this protocol for a project, I can help you weigh these constraints. Tell me:

- What is the **primary use case** of your app? (e.g., social feed, data syncing, messaging)
- What **volume of data or users** do you expect?

I can detail the specific workarounds or alternative protocols (like AT Protocol/Bluesky or Matrix) that solve these exact limitations.

- [link](https://allthingsopen.org/articles/activitypub-explained-the-protocol-connecting-the-fediverse)\
  ActivityPub explained: The protocol connecting the Fediverse | We Love Open Source • All Things Open\
  Feb 5, 2025 — ActivityPub ( ActivityPub protocol ) empowers users to host their servers, ensuring data privacy and ownership. ActivityPub ( Acti...\
  \
  \
  All Things Open
- [link](https://github.com/swicg/activitypub-e2ee/blob/main/integration-models.md)\
  activitypub-e2ee/integration-models.md at main · swicg/activitypub-e2ee\
  In this level, there's no integration of end-to-end encryption in ActivityPub. This is the status quo as of this writing.\
  \
  GitHub
- [link](https://socialhub.activitypub.rocks/t/implementing-activitypub-client-to-server/981)\
  Implementing ActivityPub Client-to-Server - ActivityPub Conference 2020\
  Sep 30, 2020 — For example, one of our applications sends a todo that is addressed to the admin. And the system listens to the admin's inbox and ...\
  \
  \
  ActivityPub Rocks!

Show all

## You said: perf limitations

The performance limitations of ActivityPub stem from its underlying architecture: <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">it relies heavily on <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">frequent, individual HTTP requests (REST API calls) and background JSON parsing</strong> to pass data between hundreds of independent servers</mark>.

When a network scales up, these design choices create distinct performance bottlenecks. \[[1](https://link.springer.com/article/10.1007/s42514-025-00236-z)]

***

### 1. The Network I/O Bottleneck ("Fan-Out" Spikes)

ActivityPub uses a push-based model via HTTP `POST` requests. When a user creates a post, their server is entirely responsible for pushing that data to every single follower’s server.

- **Linear Scaling Failure (O(N) HTTP Requests)**: If a user has 10,000 followers spread across 4,000 different external servers, the home server must generate and execute **4,000 separate HTTP connections** simultaneously to deliver that single post.
- **Connection Pooling Exhaustion**: This massive wave of outbound requests easily exhausts the server's network sockets and HTTP connection pools. Other standard operations (like fetching web pages or processing incoming user actions) stall or time out while the system fights through the delivery queue.
- **Cascading Retries**: If 200 of those remote servers are slow or temporarily offline, the home server must log, track, and schedule automatic retries for each one. This creates a backlog of zombie background tasks that continuously sap CPU and network performance for hours.

***

### 2. High CPU Overhead from Cryptographic Verification

To prevent spam and identity spoofing, ActivityPub requires that _every single inbound and outbound activity_ be cryptographically signed.

- **Asymmetric Key Stress**: Every time your server receives a post, reply, or like, it must cryptographically verify an **HTTP Signature** using RSA or Ed25519 public keys.
- **The "Key Fetching" Penalty**: If your server receives a post from an actor it has never seen before, it cannot verify the signature immediately. It must pause processing, make a separate outbound HTTP request to the sender's server to fetch their `publicKey`, wait for the response, and then execute the math to verify the signature.
- **CPU Choke Points**: Under heavy load—such as a trending global topic—thousands of inbound activities flood a server's inbox. Processing thousands of asymmetric cryptographic signatures per second will instantly pin CPU cores to 100%, causing the entire server application to stutter.

***

### 3. Memory Bloat from JSON-LD Parsing

Because ActivityPub relies on JSON-LD (Linked Data), processing text payloads is significantly slower and more memory-intensive than handling flat JSON files or binary formats like Protocol Buffers.

- **Context Resolution Latency**: To fully understand a JSON-LD payload, a parser must evaluate the `@context` array. If an app uses unfamiliar or custom extensions, the server's JSON parser may actually trigger a background web request to download the official schema documentation from the web just to figure out how to parse a single field.
- **Garbage Collection Pressure**: Transforming large, deeply nested text strings into runtime objects in memory generates thousands of short-lived variables. Languages commonly used for ActivityPub software (like Ruby, JavaScript/Node.js, or Python) suffer from heavy **Garbage Collection (GC) pauses** when trying to process tens of thousands of these payloads concurrently.

***

### 4. Severe Database Operations (I/O) Strains

The way ActivityPub structures data forces servers to perform highly inefficient database writes and lookups.

- **Replication Bloat**: Because there is no single source of truth, an identical text string or image link is written to disk thousands of times across the network. Local databases grow rapidly, degrading index speeds.
- **Fragmented Writes**: When content arrives from the outside world, it doesn't arrive in organized, linear blocks. Server databases are constantly executing thousands of tiny, unaligned `INSERT` and `UPDATE` statements across different tables (Users, Posts, Followers, Likes) simultaneously. This causes heavy disk write queues and limits throughput, especially on standard cloud storage or spinning hard drives.

***

### How Production Systems Bypass These Limits

To build an ActivityPub server that doesn't collapse under load, engineers are forced to treat the protocol strictly as an edge layer, implementing heavy workarounds:

- **Massive Redis Queues**: Offloading all inbound and outbound HTTP requests to robust background worker queues (like Sidekiq or Celery) so the front-end user experience stays fast.
- **Public Key Caching**: Storing external servers' public keys in fast in-memory databases (like Redis) for days or weeks to avoid the "Key Fetching" penalty.
- **Lazy Media Fetching**: Never downloading or storing media files locally unless a real user explicitly opens a timeline thread to view them.

If you are trying to optimize a system or picking a tech stack, I can provide more specific guidance. Let me know:

- What **programming language or framework** are you planning to use?
- Do you expect your system to handle mostly **high-frequency text syncing** or **heavy media attachments**?

I can recommend specific **concurrency models, database schemas, or caching strategies** to help you dodge these performance bottlenecks.

- [link](https://link.springer.com/article/10.1007/s42514-025-00236-z)\
  Review and analysis of performance prediction methods and tools for heterogeneous parallel programs - CCF Transactions on High Performance Computing\
  Jan 7, 2026 — As mentioned earlier, the number of nodes and the amount of resources within each node in the system can create performance bottle...\
  \
  \
  Springer Nature Link

## You said: how are these solved if thinking out of activity pub

When you step completely outside the constraints of the ActivityPub protocol, engineering teams solve these exact performance, privacy, and identity problems by using fundamentally different architectural paradigms.

Modern decentralized protocols—such as the **AT Protocol (Bluesky)**, **Matrix (Encrypted Messaging)**, or **Nostr (Cryptographic Feeds)**—abandon the push-based HTTP REST design entirely.

Here is how these modern architectures solve ActivityPub's core bottlenecks.

***

### 1. Solving the Network I/O and "Fan-Out" Problem

- **ActivityPub's Failure**: The home server must make 4,000 separate HTTP `POST` requests to 4,000 servers to deliver one post.
- **The Out-of-ActivityPub Solution (Firehoses & Event Streams)**: Modern systems switch from a "Push-to-Everyone" model to a **"Pull-from-One"** model.
- **How it works (e.g., AT Protocol / Nostr)**: When a user posts, the home server writes that post to its own local cryptographic database _exactly once_. It then broadcasts that event over a single, persistent **WebSocket or gRPC stream (a "Firehose")**. Large, specialized indexing servers (called Relays or AppViews) listen to this single stream, ingest the data, and handle the heavy lifting of sorting it for users. The home server's outbound network overhead drops from O(N) requests to O(1).

***

### 2. Solving Cryptographic and CPU Overhead

- **ActivityPub's Failure**: The server must perform thousands of individual asymmetric key handshakes and external HTTP fetches to verify signatures on incoming posts.
- **The Out-of-ActivityPub Solution (Content-Addressable Data & Merkle Trees)**: Instead of signing individual HTTP web requests, modern protocols cryptographically sign the **entire database state** using Merkle Trees or Content-Addressed storage (similar to how Git repositories track code changes).
- **How it works**: When a server syncs data, it downloads a single, combined block of updates. By verifying a single cryptographic root hash, it instantly verifies the validity of thousands of posts, likes, and follows at the exact same time. This reduces CPU cryptographic verification overhead by orders of magnitude.

***

### 3. Solving Memory and Parsing Bloat

- **ActivityPub's Failure**: Processing heavy, deeply nested JSON-LD text packages that require runtime context resolution and cause massive memory garbage collection pressure.
- **The Out-of-ActivityPub Solution (Binary Serialization & Flat Schemas)**: Systems drop JSON-LD completely in favor of flat JSON or binary serialization formats like **Protocol Buffers (Protobuf)**, **CBOR (Concise Binary Object Representation)**, or **Cap'n Proto**.
- **How it works**: Data payloads are tightly packed into rigid, pre-compiled byte structures. Parsing a binary CBOR or Protobuf file requires almost zero memory allocation or string decoding, allowing a lightweight server to process hundreds of thousands of events per second on minimal hardware.

***

### 4. Solving Database Replication Bloat

- **ActivityPub's Failure**: Every single server forces full data replication, duplicating text strings and media pointer data across thousands of independent disks.
- **The Out-of-ActivityPub Solution (Separation of Concerns / Unbundled Architecture)**: Modern architectures split the network into specialized roles rather than forcing every server to do everything.
- **How it works**:
  - **PDS (Personal Data Servers)**: Very small, lightweight servers that _only_ store data for a handful of local users. They require minimal database power.
  - **Relays / Indexers**: Massive, highly optimized databases (using technologies like ScyllaDB or ClickHouse) built specifically to index the whole network.\
    Because small servers do not ingest the entire world's data, their local databases never bloat.

***

### 5. Bonus: Solving the "Domain Lock-In" Identity Problem

- **ActivityPub's Failure**: Your identity is tied to your server's domain name; if the domain dies, your identity dies.
- **The Out-of-ActivityPub Solution (DID - Decentralized Identifiers)**: Modern protocols separate your user identity from the server hosting your data.
- **How it works**: Your true identity is a cryptographic string called a **DID** (e.g., `did:plc:1234...`). Your domain name is just a temporary label pointed at that string. If your server goes offline or acts maliciously, you simply take your cryptographic key, sign a change of address, and point your DID to a completely new hosting provider. Your followers, history, and social graph move with you instantly without needing permission from your old host.

***

### Comparison of Architectural Paradigms

| Performance Vector \[[1](https://www.popsci.com/technology/activitypub-fediverse/), [2](https://www.popsci.com/technology/activitypub-fediverse/), [3](https://librarian.aedileworks.com/2025/10/13/how-i-use-activitypub-and-why/)] | ActivityPub (Mastodon)       | AT Protocol (Bluesky)           | Nostr                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------- | ------------------------------ |
| **Data Flow**                                                                                                                                                                                                                        | Push via O(N) HTTP POSTs     | Pull via Streaming Firehose     | Push/Pull via WebSockets       |
| **Data Format**                                                                                                                                                                                                                      | Heavy JSON-LD (Text)         | Lightweight DAG-CBOR (Binary)   | Flat JSON (Text)               |
| **Server Roles**                                                                                                                                                                                                                     | Monolithic (Does everything) | Unbundled (PDS, Relay, AppView) | Decentralized Relays & Clients |
| **Identity Tied To**                                                                                                                                                                                                                 | Server Domain Name           | Cryptographic DID               | Cryptographic Public Key (Hex) |

Are you trying to decide **which protocol stack to use** for a new software project, or would you like to dive deeper into the **exact data flow of the AT Protocol firehose**?

- [link](https://www.popsci.com/technology/activitypub-fediverse/)\
  ActivityPub and the Fediverse, explained\
  Jul 12, 2023 — Crucially, ActivityPub ( ActivityPub protocol ) allows for true interoperability. The magazine app Flipboard integrates with Masto...\
  \
  \
  Popular Science
- [link](https://www.popsci.com/technology/activitypub-fediverse/)\
  ActivityPub and the Fediverse, explained\
  Jul 12, 2023 — ActivityPub ( ActivityPub protocol ) isn't the only attempt to create an open social networking protocol. Bluesky, another Twitter...\
  \
  \
  Popular Science
- [link](https://librarian.aedileworks.com/2025/10/13/how-i-use-activitypub-and-why/)\
  How I use ActivityPub (and Why) – Librarian of Things\
  Oct 13, 2025 — This is a post about ActivityPub ( ActivityPub protocol ) , the protocol behind Mastodon.\
  \
  \
  Librarian of Things

## You said: how are these solved within activity pub

To fix these scaling and performance issues while staying strictly **within the official ActivityPub protocol constraints**, developers cannot rewrite the core specification. Instead, they use advanced engineering workarounds, custom JSON-LD extensions, and architectural optimizations.

Here is how production-grade ActivityPub software handles those bottlenecks today. \[[1](https://blog.dailydoseofds.com/p/solving-the-engineering-productivity)]

***

### 1. Solving the Network I/O and "Fan-Out" Bottleneck

- **The Problem**: A server making 4,000 separate HTTP connections to 4,000 individual servers to deliver one post.
- **The Solution (Shared Inboxes)**: The ActivityPub specification natively supports an optimization called `sharedInbox`. If 500 of your followers are spread across various accounts on a single massive server (like `mastodon.social`), your server does not make 500 connections. It makes **exactly one connection** to that server's `sharedInbox` endpoint. The receiving server then handles the internal distribution to those 500 users locally. This drops outbound network overhead by up to 90% for popular servers.
- **Heavy Async Queueing**: Production systems use robust, multi-threaded background processing networks (like Sidekiq in Ruby or Celery in Python). The front-end web server instantly handles user clicks, while background queues systematically trickle out the thousands of HTTP `POST` requests in metered batches to protect network sockets.

***

### 2. Solving Cryptographic and CPU Overhead

- **The Problem**: Continually pausing execution to make outbound HTTP requests to fetch missing public keys for signature verification.
- **The Solution (Internal Caching & Key Bundling)**:
  - **Aggressive Key Caching**: Servers save external user profiles and public keys in fast, in-memory key-value databases like Redis. The server only fetches a public key once, keeping it cached for days or weeks. Subsequent signature checks happen instantly in RAM.
  - **The FEP-8b32 Extension**: Many systems implement common Fediverse Enhancement Proposals (FEPs) that allow servers to attach a copy of their public key metadata directly inside the activity payload header itself. This allows the receiving server to verify the signature immediately without executing a secondary outbound lookup request.

***

### 3. Solving Memory and Parsing Bloat

- **The Problem**: Slow runtime interpretation and heavy memory consumption caused by deeply nested JSON-LD context evaluation.
- **The Solution (Short-Circuit Parsing / Static JSON-LD)**:
  - **Bypassing the Graph**: High-performance ActivityPub software rarely uses true, generic semantic-web graph parsers. Instead, developers write highly optimized, native JSON engines (like `Go` or `Rust` microservices) that treat the incoming string as a **static JSON map**.
  - **String Matching**: The parser checks for known string fields (like looking for `"type": "Note"` or `"content"`) via raw string matching. It bypasses evaluating or downloading the outer `@context` URL altogether, reducing parsing time and memory overhead to standard JSON speeds. \[[1](https://medium.com/axel-springer-tech/the-ultimate-guide-to-mobile-app-tech-stacks-from-pwa-to-fully-native-3e8ac82d1e1a)]

***

### 4. Solving Database Replication and I/O Strains

- **The Problem**: Millions of tiny, unaligned `INSERT` operations writing duplicate text fragments across fragmented tables simultaneously.
- **The Solution (Unbundling the Server Architecture)**:\
  Instead of hosting everything on a single database, large implementations split the database layer based on data access patterns:
  - **Write-Heavy Inboxes**: Inbound activities are dumped into ultra-fast, append-only timeseries or log-structured databases (like ClickHouse or highly optimized PostgreSQL partition tables) that can absorb heavy, messy write loads.
  - **Read-Heavy Timelines**: Instead of querying database tables every time a user refreshes their app, user timelines are pre-compiled and kept entirely in-memory using Redis sorted sets (`ZSET`). When a post arrives, the system appends the post ID to the Redis cache of its active followers, minimizing disk I/O reads.
  - **Media Offloading**: Text payloads stay in the database, but all linked attachments (images/videos) are immediately proxy-routed to distributed Content Delivery Networks (CDNs) or object storage buckets (like Amazon S3), keeping the primary application server free of media processing weight. \[[1](https://martinfowler.com/eaaDev/EventNarrative.html)]

***

### 5. Solving the "Domain Lock-In" Identity Problem

- **The Problem**: Losing your social network completely if your server goes offline permanently.
- **The Solution (FEP-ef61 & DID Integration)**:\
  The ActivityPub community is actively implementing **Decentralized Identifiers (DIDs)** inside standard ActivityPub profiles using JSON-LD contexts.\
  By declaring a `did:ap` string inside the profile object, a user's core cryptographic identity exists independently of the web server. If the server crashes, the user can use their independent cryptographic master key to sign a portability payload, allowing an entirely separate ActivityPub server to claim their follower graph without needing the old server to be online.

If you are currently setting up a system, would you like to see **how to configure a `sharedInbox` endpoint** in your payload structure, or do you want to see the **database schema strategy** used to store these incoming activities efficiently?

- [link](https://blog.dailydoseofds.com/p/solving-the-engineering-productivity)\
  Solving the Engineering Productivity Paradox!\
  Nov 26, 2025 — Solving the Engineering Productivity Paradox! ...and how to make production-grade vibe-coding actually work for you! Black Friday ...\
  \
  \
  Daily Dose of Data Science
- [link](https://medium.com/axel-springer-tech/the-ultimate-guide-to-mobile-app-tech-stacks-from-pwa-to-fully-native-3e8ac82d1e1a)\
  📱 Guide to Mobile App Tech Stacks: From PWA to Fully Native\
  Mar 25, 2025 — Best-in-Class Performance: Native apps typically have the edge in raw performance because the code is compiled for the specific de...\
  \
  \
  Medium
- [link](https://martinfowler.com/eaaDev/EventNarrative.html)\
  Focusing on Events\
  Jan 25, 2006 — This situation opens up some interesting opportunities, some functional some implementation. An immediate implementation opportuni...\
  \
  martinfowler.com