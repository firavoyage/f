<!-- yeah, i can see abbreviations as regular words, which is preferred. it's fine to omit as you like. -->

# how does plural work in abbreviation

To make an abbreviation plural, the standard rule is to <mark><strong>add a lowercase "s" to the end without an apostrophe</strong></mark>.

While the general rule is simple, there are a few specific guidelines depending on how the abbreviation is structured.

***

### 1. Standard Acronyms and Initialisms

For most abbreviations, simply add a lowercase **s** at the very end. This rule applies even if the underlying word being pluralized isn't the last word in the phrase (e.g., _Prisoners of War_ becomes _POWs_, not _PsOW_). [link](https://crosstalk.cell.com/blog/abbreviations-six-common-pitfalls)

- **Singular:** CEO → **Plural:** CEOs
- **Singular:** DVD → **Plural:** DVDs
- **Singular:** POW → **Plural:** POWs [link](https://crosstalk.cell.com/blog/abbreviations-six-common-pitfalls)

### 2. When the Abbreviation Ends in "S"

If the abbreviation already ends in an "S", adding a lone lowercase "s" can look messy or confusing. Most major style guides, including the [Google Developer Documentation Style Guide](https://developers.google.com/style/pluralization?gl=us), recommend adding **es**. [link](https://developers.google.com/style/pluralization?gl=us)

- **Singular:** OS (Operating System) → **Plural:** OSes
- **Singular:** CMS → **Plural:** CMSes [link](https://developers.google.com/style/pluralization?gl=us)

### 3. Abbreviations with Periods

If you use periods within your abbreviation, standard style guides like the Chicago Manual of Style instruct you to add an **apostrophe and an s ('s)** to prevent the lowercase "s" from looking like it is part of the acronym. [link](https://english.stackexchange.com/questions/503/what-is-the-correct-way-to-pluralize-an-acronym-initialism)

- **Singular:** M.B.A. → **Plural:** M.B.A.'s
- **Singular:** Ph.D. → **Plural:** Ph.D.'s\
  _(Note: If you omit the periods, it reverts to the standard rule: MBAs, PhDs)._ [link](https://www.proof-reading-service.com/blogs/academic-publishing/the-plural-and-possessive-forms-of-abbreviations)

### 4. Single Letters

If you are pluralizing a single lowercase letter, use an **apostrophe and an s ('s)** so it doesn't look like a completely different word (for example, turning the letter "a" into the word "as"). For capital letters, style guides differ, but omitting the apostrophe is generally preferred unless it causes confusion. [link](https://www.youtube.com/watch?v=-MbBneyr3%5Fg)

- **Lowercase:** Mind your p's and q's.
- **Uppercase:** She got straight As on her report card.

### 5. Exceptions: Units of Measurement

When abbreviating International System of Units (SI) or general metric weights and measures, **never add an "s"**. The abbreviation remains exactly the same for both singular and plural forms. [link](https://www.youtube.com/watch?v=NqH7ZGXzCzo\&t=8)

- **Incorrect:** 10 kgs, 5 mtrs
- **Correct:** 10 kg, 5 m [link](https://www.proof-reading-service.com/blogs/academic-publishing/the-plural-and-possessive-forms-of-abbreviations)

### Summary Overview

| Abbreviation Type     | Rule              | Example              |
| --------------------- | ----------------- | -------------------- |
| Standard (No periods) | Add **s**         | **VIPs**, **PCs**    |
| Ends in "S"           | Add **es**        | **OSes**             |
| Contains periods      | Add **'s**        | **B.A.'s**           |
| Units of Measure      | Do **not** change | **50 cm**, **12 kg** |

Are you formatting these abbreviations for a specific **academic style guide** (like APA, MLA, or Chicago) or a **corporate project**? I can give you the exact rule for your specific context.

- [link](https://www.facebook.com/groups/waywordradio/posts/10157107335083584/)\
  Facebook\
  How to pluralize acronyms and single letters\
  Mar 28, 2019 — 10 kg (not 10 kgs, for 10 kilograms) Contracted professional titles such as Dr. and Prof. take an s at the end to form a plural, a...
- [link](https://english.stackexchange.com/questions/503/what-is-the-correct-way-to-pluralize-an-acronym-initialism)\
  English Language & Usage Stack Exchange\
  What is the correct way to pluralize an acronym / initialism?\
  The Chicago Manual of Style has an interesting way to address this: they omit the apostrophe, unless there are periods in the abbr...
- [link](https://crosstalk.cell.com/blog/abbreviations-six-common-pitfalls)\
  Cell Press\
  Abbreviations: Six common pitfalls\
  Plural abbreviations. If I define an abbreviation as a singular noun phrase, Usually, this means adding the letter s. PSC. POW (pr...

Show all

## can it be fine to see some abbreviations as already plural even incorrectly in programming

<mark><strong><span>Yes, it is common and acceptable</span></strong><span> </span>to treat certain abbreviations as already plural in programming</mark>, even if it is technically incorrect according to traditional English grammar.

In software engineering, **code readability, predictability, and pattern matching** matter much more than strict linguistic rules. Developers often prioritize clean architecture over perfect grammar.

Here are the most common scenarios where you will see this happen:

### 1. Database and API Schema Uniformity

Many modern frameworks rely on **convention over configuration**. For example, object-relational mapping (ORM) libraries like Ruby on Rails' _ActiveRecord_ automatically pluralize database tables to match collection models.

- **The "Incorrect" Plural:** If you have an entity for a **User Interface (UI)**, a strict plural might be _UIs_. However, developers or automated generators often name the database table `uis` or the endpoint `/api/v1/uis`.
- **Why it's done:** It keeps the pattern completely consistent across the entire codebase (`users`, `orders`, `uis`, `apis`).

### 2. Treating Acronyms as Collective Nouns

Some abbreviations represent data structures that are inherently collections, so programmers instinctively treat them as plural without adding an "s".

- **Example (CSV):** `Comma-Separated Values`. Grammatically, the "Values" is already plural. A developer might write `data = parse_csv(file)` and treat `data` as a collection, entirely skipping an identifier like `csvs`.
- **Example (ACL):** `Access Control List`. An ACL contains multiple rules. You will often see a variable named `acl` holding a list of permissions, rather than `acls`.

### 3. Avoiding "Unreadable" Code

Adding an "s" to certain abbreviations can create ugly, confusing, or unreadable variable names—especially if the abbreviation already ends in an "S" or an "X".

- **Example (OS):** An array of operating systems is technically _OSes_. However, you will frequently see developers write `os_list` or just `os` (and rely on the array context) because `oses` looks odd in code.
- **Example (CTX):** Abbreviation for _Context_. A collection of contexts might just be named `ctx` instead of `ctxs` because `ctxs` is difficult to read at a glance.

***

### Best Practices for Programming

If you are deciding how to handle this in your own project, follow these general rules of thumb:

- **Suffix with `_list` or `_collection`:** Instead of guessing if it should be `vips` or `vipes`, use `vip_list` or `vip_array`. This removes all grammatical ambiguity.
- **Prioritize the Team's Style Guide:** If your team's convention dictates that all arrays must end in an "s" (e.g., `uis`), stick to it blindly. Consistency across the codebase is always better than grammatical perfection.

Are you currently **naming a specific variable, database table, or API endpoint**? If you share the abbreviation and the context, I can suggest the most clean and readable way to structure it.

# when is s suffix omitted for plural in abbreviation

The **"s" suffix is omitted** for plural abbreviations in three primary scenarios: <mark><strong>standardized units of measurement</strong>,<span> </span><strong>latin scholarly abbreviations using doubled letters</strong>, and<span> </span><strong>certain traditional honorifics</strong></mark>.

While standard acronyms and initialisms almost always take an lowercase "s" to pluralize (e.g., _NGOs_, _IDs_), you drop the "s" in the specific contexts outlined below: [link](https://www.proof-reading-service.com/blogs/academic-publishing/the-plural-and-possessive-forms-of-abbreviations)

### 1. International Units of Measurement (SI)

According to major academic and technical style guides like [Purdue OWL's APA Guide](https://owl.purdue.edu/owl/research%5Fand%5Fcitation/apa%5Fstyle/apa%5Fformatting%5Fand%5Fstyle%5Fguide/apa%5Fabbreviations.html) and standard international scientific rules, symbols for units of measurement **never take an "s"** for plurals. Adding an "s" can cause confusion with other units (e.g., adding an _s_ to _m_ for meters makes it look like _ms_ for milliseconds). [link](https://owl.purdue.edu/owl/research%5Fand%5Fcitation/apa%5Fstyle/apa%5Fformatting%5Fand%5Fstyle%5Fguide/apa%5Fabbreviations.html)

- **10 kg** (not 10 kgs)
- **50 mL** (not 50 mLs)
- **100 m** (not 100 ms) [link](https://owl.purdue.edu/owl/research%5Fand%5Fcitation/apa%5Fstyle/apa%5Fformatting%5Fand%5Fstyle%5Fguide/apa%5Fabbreviations.html)

### 2. Traditional Latin Scholarly Abbreviations

In formal academic writing, certain traditional Latin or bibliographic abbreviations are pluralized by **doubling the single-letter abbreviation** instead of adding an "s". [link](https://www.proof-reading-service.com/blogs/academic-publishing/the-plural-and-possessive-forms-of-abbreviations)

- **p.** (page) → **pp.** (pages)
- **f.** (following page) → **ff.** (following pages)
- **v.** (verse) → **vv.** (verses)
- **MS** (manuscript) → **MSS** (manuscripts)

### 3. Irregular Traditional Honorifics

Certain abbreviations for social titles do not use an "s" to form their plural. Instead, they borrow entirely different abbreviation structures rooted in French tradition:

- **Mr.** → **Messrs.**
- **Mrs.** → **Mmes.**
- **Ms.** → **Mss.** (or _Mses._)

***

### Common Misconceptions (When _not_ to omit the "s")

- **Intrinsically plural terms:** People often mistakenly omit the "s" if the expanded phrase is already plural (e.g., _Memorandum of Understanding_ → _MOU_). According to the [Chicago Manual of Style](https://www.chicagomanualofstyle.org/qanda/data/faq/topics/Plurals.html?page=3), you should treat the abbreviation as its own word and still add the "s" (**MOUs**, **POWs**, **RFPs**). [link](https://style.mla.org/acronyms-in-mla-style/)
- **Abbreviations ending in S:** If an abbreviation naturally ends in an "s" (like _OAS_ or _CMS_), you do not omit the plural suffix; instead, you add an extra _s_ or _es_ (**OASs** or **CMSes**).

If you are writing for a specific field, tell me **what context or abbreviation** you are working with (e.g., engineering, medical, legal, or general prose). I can look up the rules for your specific **style guide** (like APA, MLA, or Chicago).

- [link](https://www.facebook.com/groups/proofreaderszone/posts/7178614332221591/)\
  Facebook\
  Is an apostrophe-s allowed in an acronym identifier?\
  Mar 8, 2024 — To pluralize an abbreviation already ending in S, add another s or es. CMSs or CMSes
- [link](https://editorsmanual.com/articles/plurals-of-abbreviations/)\
  The Editor’s Manual\
  How to Form Plurals of Acronyms and Abbreviations\
  Apr 2, 2019 — To form the plural of an abbreviation ending in S, simply add s or es. No apostrophe is needed. All done!
- [link](https://www.facebook.com/groups/proofreaderszone/posts/8228693043880376/)\
  Facebook\
  Hi, looking for advice on plural acronyms\
  EXAMPLES 5 kg (kilograms) read as five kilograms 10 g (grams) 10 cm (centimeters) 50 ml (milliliters) 10 s (seconds) 100 m (meters...

Show all

# when is s suffix omitted for plural in abbreviation in programming

In programming, the **-s** suffix is omitted for plural abbreviations in the following specific scenarios:

### 1. The Abbreviation Itself is Already Grammatically Plural

If the abbreviation stands for a phrase where the noun is inherently plural, adding an "s" creates a redundant "plural of a plural". [link](https://english.stackexchange.com/questions/590360/pluralising-abbreviations-ending-in-s)

- **Example:** `MEMS` (**M**icro**e**lectro**m**echanical **S**ystems). You would write `activeMemsComponents`, never `activeMemsesComponents` or `memss`. [link](https://english.stackexchange.com/questions/590360/pluralising-abbreviations-ending-in-s)

### 2. Units of Measurement

Following international standard guidelines (like [SI units](https://editorsmanual.com/articles/plurals-abbreviated-units/)), unit abbreviations never take an "s" in code to prevent critical syntax and semantic errors.

- **Example:** `50ms` (50 milliseconds) or `10kg` (10 kilograms).
- **Why it matters in programming:** Adding an "s" introduces severe ambiguity. For instance, `100ms` means 100 milliseconds, but if you treat "m" as meters and add an "s" for plural, `100ms` could be misinterpreted by a compiler or a developer as 100 meters per second or 100 meters.

### 3. Collection Types Used as Variable Names

When naming data structures in code (like arrays, lists, or dictionary keys), developers frequently omit the "s" suffix from abbreviations if the variable name explicitly contains a collection type descriptor.

- **Example:** `userIdList` or `userIdArray` instead of `userIdsList`. The suffix is dropped because the words `List` or `Array` already clearly communicate that the variable contains multiple items.

### 4. Database Schema Design (Idempotent Suffixes)

In relational database design and Object-Relational Mapping (ORM) frameworks, foreign keys mapping to a pluralized table omit the plural suffix from the abbreviation to enforce strict naming conventions.

- **Example:** If you have a table named `APIs`, the foreign key column in a connecting table will typically be `api_id`, not `apis_id`.

***

### 💡 General Exception Note

Outside of these scenarios, standard programming style guides (like the [Google Developer Documentation Style Guide](https://developers.google.com/style/pluralization?gl=us)) dictate that you **should** treat acronyms as regular words and add an lowercase "s" (e.g., `APIs`, `UUIDs`, `UIDs`) to explicitly denote plurality. If the abbreviation already ends in an "S" sound (like `OS`), add "es" instead (e.g., `OSes`). [link](https://developers.google.com/style/pluralization?gl=us)

Are you deciding on a naming convention for a **variable**, a **database schema**, or **documentation**? If you share the specific abbreviation you are working with, I can provide the exact recommended plural form.

- [link](https://editorsmanual.com/articles/plurals-of-abbreviations/)\
  The Editor’s Manual\
  How to Form Plurals of Acronyms and Abbreviations\
  An acronym or abbreviation that ends in an S sound can be pluralized either by adding s as usual or by adding es. Avoid inserting ...
- [link](https://www.facebook.com/groups/proofreaderszone/posts/8228693043880376/)\
  Facebook\
  Hi, looking for advice on plural acronyms\
  EXAMPLES 5 kg (kilograms) read as five kilograms 10 g (grams) 10 cm (centimeters) 50 ml (milliliters) 10 s (seconds) 100 m (meters...
- [link](https://english.stackexchange.com/questions/590360/pluralising-abbreviations-ending-in-s)\
  English Language & Usage Stack Exchange\
  Pluralising abbreviations ending in S\
  May 29, 2022 — microelectromechanical systems, which always appears as MEMS (rather than MEMSs). stuck is power electronics, machines and drives.

Show all

# is it common that s suffix can be omitted incorrectly for plural in abbreviation in programming

<mark><strong><span>Yes, it is highly common</span></strong><span> </span>for programmers to incorrectly omit the plural<span> </span><strong>"s"</strong><span> </span>suffix when naming variables or functions that contain abbreviations</mark>. This frequently results in confusing naming conventions or subtle code bugs. [link](https://english.stackexchange.com/questions/503/what-is-the-correct-way-to-pluralize-an-acronym-initialism)

There are three primary reasons why this mistake happens so often in software development:

### 1. The "Hidden" Plural Trap

Many abbreviations already stand for a phrase where the _internal_ word is plural. Programmers often overthink the grammar and assume adding a trailing lowercase `s` looks wrong. [link](https://www.chicagomanualofstyle.org/qanda/data/faq/topics/Plurals.html?page=1)

- **The Error:** A programmer creates an array of _Terms of Reference_ and names it `tor` or `torList` because "Terms" is already plural.
- **The Correct Way:** It should still be `tors`. When an abbreviation becomes a variable name, it behaves as a single collective noun. [link](https://stancarey.wordpress.com/2009/08/10/plurals-of-acronyms-abbreviations-initialisms-and-single-letters/)

### 2. Ambiguity with Abbreviations Already Ending in "S"

If an abbreviation naturally ends with the letter "S" (like **OS** for Operating System or **SMS** for Short Message Service), programmers often leave it as-is to avoid a double-S or awkward spelling.

- **The Error:** Naming a collection of operating systems `os` (e.g., `const os = ['macOS', 'Linux'];`). This makes it impossible for someone reading the code to tell if the variable holds a single OS or a list of them.
- **The Correct Way:** Use `oses` or `oss`. The [Google Developer Documentation Style Guide](https://developers.google.com/style/pluralization?gl=us) specifically recommends appending `es` for these cases (e.g., `OSes`). [link](https://developers.google.com/style/pluralization?gl=us)

### 3. Case-Sensitivity Confusion (CamelCase / PascalCase)

In programming, camelCase (`totalIdS`) or uppercase abbreviations (`totalIDs`) can visually mask the plural suffix.

- A programmer might look at `userIds` and think it looks like "User Id-ess" rather than "User IDs," leading them to incorrectly fall back to the singular `userId` for an array.

***

### Direct Comparison: The Naming Impact

| Context                | Problematic / Confusing (Omitted "s") | Clean / Correct (Standard Plural) | Better Alternative (Explicit) |
| ---------------------- | ------------------------------------- | --------------------------------- | ----------------------------- |
| **API Endpoints**      | `fetchApi()` (Returns multiple)       | `fetchApis()`                     | `fetchApiList()`              |
| **Unique Identifiers** | `id: [1, 2, 3]`                       | `ids: [1, 2, 3]`                  | `idList: [1, 2, 3]`           |
| **Operating Systems**  | `supportedOs: []`                     | `supportedOses: []`               | `supportedOsList: []`         |
| **URLs**               | `activeUrl: []`                       | `activeUrls: []`                  | `urlCollection: []`           |

### How to Prevent This in Code

Because omitting the "s" on abbreviations is such a frequent human error, modern engineering teams rely on explicit naming conventions to completely bypass the issue:

- **Append a collective noun:** Instead of risking ambiguity with `ids` or `id`, use `idList`, `idArray`, or `idCollection`.
- **Use modern linters:** You can configure linting rules (like `eslint-plugin-jsdoc` or automated semantic naming checks) to enforce that variables holding iterables or arrays must have a plural construction.

Are you currently troubleshooting a **specific naming conflict** in your codebase, or are you trying to decide on a **style guide rule** for your team?

- [link](https://english.stackexchange.com/questions/503/what-is-the-correct-way-to-pluralize-an-acronym-initialism)\
  English Language & Usage Stack Exchange\
  What is the correct way to pluralize an acronym / initialism?\
  Aug 12, 2010 — Most acronyms, including ATM, have a well-defined and commonly accepted meaning, which very rarely includes the pluralization. Avo...
- [link](https://editorsmanual.com/articles/plurals-of-abbreviations/)\
  The Editor’s Manual\
  How to Form Plurals of Acronyms and Abbreviations\
  An apostrophe before the s that forms the plural is not incorrect but generally omitted in formal writing. Avoid inserting an apos...
- [link](https://stancarey.wordpress.com/2009/08/10/plurals-of-acronyms-abbreviations-initialisms-and-single-letters/)\
  Sentence first\
  Plurals of acronyms, abbreviations, initialisms and single letters\
  Aug 10, 2009 — abbreviated.Terms of Reference should therefore be “acronymed” as TOR and not as TORs, even if Terms is in the plural. Do you agre...

Show all

# is it common that it's fine to omit s suffix incorrectly for plural in abbreviation in programming

<mark><span>Yes,<span> </span></span><strong>omitting the plural 's' suffix in abbreviations is very common and usually considered perfectly fine in programming.</strong></mark>

In fact, many style guides and automated linters actively discourage adding a lowercase 's' to an all-caps abbreviation because it hurts readability.

### Why programmers omit the 's'

- **Readability:** Mixing lowercase and uppercase letters can look messy. For example, `urls` or `IDs` can easily be misread, especially in fonts where a lowercase `s` looks similar to an uppercase `S` or a number `5`. Writing `url_list` or just `url` is often preferred.
- **Naming Conventions:** In uppercase naming styles like `SCREAMING_SNAKE_CASE` (used for constants), adding a lowercase 's' breaks the convention entirely (e.g., `API_KEYs` looks incorrect compared to `API_KEYS`).
- **Context Implies Plurality:** Code context usually makes it obvious if a variable holds multiple items.

### Direct Comparison of Approaches

| Approach                             | Example                                 | Readability                         | Best Practice?                  |
| ------------------------------------ | --------------------------------------- | ----------------------------------- | ------------------------------- |
| **All-Caps Plural**                  | `URLS`                                  | ❌ Poor (Looks like a new acronym)  | No                              |
| **Mixed-Case Plural**                | `URLs` or `ids`                         | ⚠️ Mixed (Can be hard to read)      | Acceptable in camelCase         |
| **Omitted Plural**                   | `url` (representing an array)           | ⚠️ Mixed (Loses explicit plurality) | Common, but can cause confusion |
| **Descriptive Suffix (Recommended)** | `urlList`, `idArray`, `urls_collection` | Excellent (Clear and explicit)      | **Yes**                         |

### The Better Alternative

Instead of worrying about the 's', most modern programming practices favor appending a descriptive word to indicate a collection.

- Instead of `ids`, use `id_list` or `id_array`.
- Instead of `URIs`, use `uri_collection`.

Are you currently naming a **specific variable or database column**? If you share the context or the programming language you are using, I can help you choose the cleanest naming convention for it.

