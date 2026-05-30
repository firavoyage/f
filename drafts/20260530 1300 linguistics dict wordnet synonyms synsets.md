does a is synonym of b imply b is that of a on wordnet

Yes, if word A is a synonym of word B on WordNet, word B is automatically a synonym of word A.

How WordNet Handles Synonyms

- **Synsets**: WordNet groups words into sets of synonyms called **synsets**.
- **Shared Meaning**: Each synset represents one distinct underlying concept.
- **Symmetric Relation**: If Word A and Word B are in the same synset, they share a mutual relationship.
- **Implicit Reciprocity**: The database structure links the words together simultaneously, making the synonymy inherently bidirectional. \[[1](https://ieeexplore.ieee.org/iel5/4413560/4413561/04413585.pdf), [2](https://towardsdatascience.com/automatic-word-relatedness-evaluation-wordnet-spacy-wikidata-api-9fd1c72ac73c/)]

If you want to explore how WordNet handles other lexical relationships, I can:

- Explain how it handles **antonyms** (opposites)
- Detail hierarchical relationships like **hyponyms** (specific terms) and **hypernyms** (broad terms)
- Provide a **Python example** using NLTK to extract these relationships \[[1](https://ieeexplore.ieee.org/iel8/10893872/10893892/10894156.pdf), [2](https://www.clickrank.ai/seo-glossary/w/what-is-wordnet-lexical-database/), [3](https://wordnet.princeton.edu/documentation/wngloss7wn), [4](https://fiveable.me/fundamentals-of-the-grammar-of-standard-english/unit-4), [5](https://encyclopedia.pub/entry/34140)]

Let me know **which relationship** or **code example** you would like to see next.

- [link](https://ieeexplore.ieee.org/iel5/4413560/4413561/04413585.pdf)\
  Measuring Semantic Similarity Using WordNet-based Context Vectors\
  Dec 15, 2000 — It ( WordNet ) groups words into sets of synonyms called synsets, provides short, general definitions, and records the various sem...\
  \
  IEEE
- [link](https://towardsdatascience.com/automatic-word-relatedness-evaluation-wordnet-spacy-wikidata-api-9fd1c72ac73c/)\
  Automatic word relatedness evaluation | WordNet, SpaCy & Wikidata API\
  Aug 17, 2022 — Then, for each word, create an object wrapper called synset and run the similarity calculation between them. Synset is a "set of c...\
  \
  \
  Towards Data Science
- [link](https://ieeexplore.ieee.org/iel8/10893872/10893892/10894156.pdf)\
  Antonym Learning from Paraphrase Database: A Novel Approach using PPDB and WordNet\
  It ( WordNet ) organizes words into synsets—sets of synonyms linked by semantic and lexical relationships, including antonymy. How...\
  \
  IEEE

Show all

You said: on other dicts

**No, Word A being a synonym of Word B does not guarantee that Word B is listed as a synonym of Word A in standard dictionaries.**

Unlike WordNet's mathematical database structure, traditional and digital dictionaries (like Merriam-Webster or Oxford) are built for human readability and show significant asymmetry.

Why Standard Dictionaries Are Asymmetric

- **Frequency**: Popular words rarely list obscure words as synonyms.
- **Polysemy**: Words with many meanings don't map perfectly to single-meaning words.
- **One-Way Direction**: A specific word might point to a broader core concept, but the core concept will not list every niche variant.
- **Space Constraints**: Even digital editions inherit editorial curation rules from print history to prevent clutter.

Direct Comparison of Dictionary Systems

| Feature            | WordNet                    | Standard Dictionaries    |
| ------------------ | -------------------------- | ------------------------ |
| **Core Structure** | Concept-centric (Synsets)  | Word-centric (Headwords) |
| **Relationship**   | Strictly **symmetric**     | Highly **asymmetric**    |
| **Curation**       | Algorithmic grouping       | Editorial selection      |
| **Scope**          | Maps all overlapping words | Focuses on common usage  |

Real-World Examples

1. **The Core vs. Niche Word**:

- If you look up **"good"**, the dictionary may not list the formal law term **"bona fide"** as a synonym to keep the entry clean.
- If you look up **"bona fide"**, the dictionary will likely list **"good"** or **"genuine"** to help you understand it.

2. **The Specific vs. General Word**:

- A dictionary entry for **"loathe"** will list **"hate"** as a major synonym.
- The entry for **"hate"** may only list common terms like **"dislike"** or **"detest"**, completely omitting **"loathe"**.

If you want to dive deeper into lexicography, let me know if I should:

- Compare specific platforms like **Merriam-Webster** vs. **Thesaurus.com**
- Explain the difference between **computational linguistics** and **traditional lexicography**
- Give you more **concrete word pairings** that display this one-way relationship

Tell me **which dictionary platform** or **linguistic concept** you want to look at next.