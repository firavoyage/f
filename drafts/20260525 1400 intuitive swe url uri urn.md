url uri

**Every URL is a URI, but not every URI is a URL.** \[[1](https://www.hostinger.com/tutorials/uri-vs-url)]

A **URI (Uniform Resource Identifier)** is an umbrella term for any string of characters that uniquely identifies a resource on a network. A **URL (Uniform Resource Locator)** is a specific type of URI that identifies a resource by explicitly showing **how to access it** and **where it is located**. \[[1](https://www.godaddy.com/resources/ae/skills/uri-vs-url), [2](https://www.networksolutions.com/blog/uri-vs-url/), [3](https://www.hostinger.com/tutorials/uri-vs-url)]

Quick Analogy

- **URI**: Think of this as a person's identity. It can be their name, their social security number, or their physical address.
- **URL**: This is specifically their **physical mailing address**. It doesn't just tell you who they are; it tells you exactly how to navigate to their front door. \[[1](https://danielmiessler.com/blog/difference-between-uri-url), [2](https://medium.com/@ArpitChoubey9/i-thought-they-were-the-same-the-real-difference-between-uri-url-explained-simply-58892ff43b38), [3](https://www.hostinger.com/tutorials/uri-vs-url), [4](https://www.godaddy.com/resources/ae/skills/uri-vs-url)]

Key Differences At a Glance

| Feature \[[1](https://www.youtube.com/watch?v=DSAfA--tqIY), [2](https://en.wikipedia.org/wiki/Uniform%5FResource%5FIdentifier), [3](https://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn), [4](https://pitt.libanswers.com/faq/213722), [5](https://www.hostinger.com/tutorials/uri-vs-url), [6](https://www.godaddy.com/resources/ae/skills/uri-vs-url), [7](https://danielmiessler.com/blog/difference-between-uri-url)] | URI (Uniform Resource Identifier)                          | URL (Uniform Resource Locator)                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Core Purpose**                                                                                                                                                                                                                                                                                                                                                                                                                                                      | To uniquely **identify** an abstract or physical resource. | To **locate** and describe the retrieval mechanism of a resource.         |
| **Scope**                                                                                                                                                                                                                                                                                                                                                                                                                                                             | The broad **superset** (covers both URLs and URNs).        | A narrow **subset** of URIs.                                              |
| **Requirement**                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Needs a scheme (e.g., `mailto:`, `urn:`, `https:`).        | Must include a **protocol** (like `http` or `ftp`) and a network address. |
| **Web Browser Action**                                                                                                                                                                                                                                                                                                                                                                                                                                                | Cannot always be searched or clicked to load a web page.   | Can be typed directly into a browser address bar to visit a page.         |

The Three Siblings: URI vs. URL vs. URN

To fully understand the ecosystem defined by [IETF RFC 3986](https://en.wikipedia.org/wiki/URL), you need to see how they relate to **URNs (Uniform Resource Names)**: \[[1](https://en.wikipedia.org/wiki/URL), [2](https://www.hostinger.com/tutorials/uri-vs-url), [3](https://pitt.libanswers.com/faq/213722)]

- **URI (The Umbrella)**: Any string that uniquely separates one resource from another.
- **URL (The Locator)**: Identifies by location. Example: `https://www.hostinger.com/tutorials/uri-vs-url`. It tells the system to use the `https` protocol to fetch a page from that domain path.
- **URN (The Name)**: Identifies by a persistent, unique name, regardless of where it lives. Example: `urn:isbn:0476355574` (a book's ISBN code). It tells you _what_ the book is, but it doesn't give you a website link to read it. \[[1](https://supertokens.medium.com/uri-vs-url-the-real-difference-between-the-two-708a576bc1a3), [2](https://www.geeksforgeeks.org/difference-between-url-and-uri/), [3](https://www.hostinger.com/tutorials/uri-vs-url), [4](https://www.godaddy.com/resources/ae/skills/uri-vs-url), [5](https://pitt.libanswers.com/faq/213722)]

Practical Rules for Everyday Use

- If you are talking to web users or linking to web pages, files, or images online, call it a **URL**.
- If you are working with coding schemas (like XML namespaces), database references, or API architectures where a string just acts as a unique ID, call it a **URI**. \[[1](https://auth0.com/blog/url-uri-urn-differences/), [2](https://www.godaddy.com/resources/skills/uri-vs-url-vs-urn), [3](https://www.hostinger.com/tutorials/uri-vs-url)]

Are you working on a **coding project** where you need to parse these strings, or are you just trying to understand the **architectural difference** for a class or documentation?

- [link](https://en.wikipedia.org/wiki/Uniform%5FResource%5FIdentifier)\
  Uniform Resource Identifier - Wikipedia\
  A Uniform Resource Locator (URL) is a URI that specifies the means of acting upon or obtaining the representation of a resource, i...\
  Wikipedia
- [link](https://www.hostinger.com/tutorials/uri-vs-url)\
  URI vs URL: Key differences explained - Hostinger\
  Table\_title: URI vs URL: Key differences explained Table\_content: header: | Category | URI (Uniform Resource Identifier) | URL (Un...\
  Hostinger
- [link](https://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn)\
  What is the difference between a URI, a URL, and a URN? - Stack Overflow\
  From Wikipedia: In computing, a Uniform Resource Locator (URL) is a subset of the Uniform Resource Identifier (URI) that specifies...\
  Stack Overflow

Show all

You said: example

URI (The Umbrella Term)

A URI is any unique identifier. It can be a name, a location, or both.

text

```
https://example.com
ftp://://example.com
mailto:support@example.com
urn:isbn:9780132350884
urn:apple:iphone:15
```

Use code with caution.

***

URL (The Locator)

A URL must provide the specific web address and protocol (`http`, `https`, `ftp`) to find the resource.

text

```
https://google.com
https://google.com
ftp://192.168.1.1/shared/photo.png
http://localhost:8080/dashboard
```

Use code with caution.

***

URN (The Name)

A URN assigns a permanent, unique name within a specific namespace. It does not tell you where the file is hosted.

text

```
urn:isbn:0451524934         (Unique ID for the book "1948")
urn:uuid:6e8bc430-9c3a-11d9 (A unique software system ID)
urn:ietf:rfc:3986           (The specific internet standard document name)
urn:lex:eu:dir:2003:87      (A European Union legal document ID)
```

Use code with caution.

***

Breakdown of a Web URL

When you look at a standard URL like `https://example.com`, it breaks down into these distinct parts:

text

```
https://  →  Protocol / Scheme (How to connect)
example.com  →  Domain Name / Host (Where it lives)
:443  →  Port (The specific technical entry gate)
/blog/article  →  Path (The specific folder or file location)
?id=10  →  Query string (Parameters passed to the page)
#comments  →  Fragment / Anchor (The exact section on the page)
```

Use code with caution.

Would you like to see an example of how to **parse or split** these parts using a programming language like **Python, JavaScript, or Java**?