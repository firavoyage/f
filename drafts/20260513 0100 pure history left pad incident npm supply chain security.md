left-pad incident

The **left-pad incident** occurred on <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>March 22, 2016</strong>, when software developer Azer Koçulu unpublished all 273 of his modules from the <span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://en.wikipedia.org/wiki/Npm_left-pad_incident" style="margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">npm registry</a></span></mark>. This action broke thousands of major software projects worldwide, including tools like Babel and Webpack and services used by Netflix, Spotify, and Facebook. \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), [2](https://www.theregister.com/software/2016/03/23/how-one-developer-just-broke-node-babel-and-thousands-of-projects-in-11-lines-of-javascript/1274719)]

The Catalyst: A Trademark Dispute

The incident began when [Kik Interactive](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm), the company behind the Kik messaging app, requested that Koçulu rename his npm package called **kik**. When Koçulu refused, npm leadership sided with the corporation and [forcibly transferred ownership](https://medium.com/nerd-for-tech/that-time-a-guy-broke-the-internet-23c00903ad6f) of the name. In protest, Koçulu decided to remove all his code from the platform entirely. \[[1](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm), [2](https://medium.com/nerd-for-tech/that-time-a-guy-broke-the-internet-23c00903ad6f), [3](https://www.youtube.com/watch?v=9OqR-IyfqCg\&t=5), [4](https://www.facebook.com/groups/it.humor.and.memes/posts/31782916411307406/), [5](https://www.facebook.com/historicalfactsss/posts/in-march-2016-a-programmer-named-azer-ko%C3%A7ulu-from-oakland-california-made-headli/743352221787740/)]

Why 11 Lines of Code Broke the Internet

One of the unpublished packages was **left-pad**, a tiny utility containing only **11 lines of code** designed to pad the left side of a string with characters. Despite its simplicity: \[[1](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/), [2](https://www.theregister.com/software/2016/03/23/how-one-developer-just-broke-node-babel-and-thousands-of-projects-in-11-lines-of-javascript/1274719)]

- **Deep Dependencies**: Thousands of high-profile projects depended on it either directly or through other libraries (transitive dependencies).
- **Build Failures**: When the package vanished, any system attempting a "clean build" (like CI/CD servers) received a [404 error](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code), causing deployments to fail globally.
- **Unprecedented Fix**: To stop the chaos, npm [took the "unprecedented" step](https://www.theregister.com/software/2016/03/23/how-one-developer-just-broke-node-babel-and-thousands-of-projects-in-11-lines-of-javascript/1274719) of restoring the deleted version against the author's wishes to restore service. \[[1](https://hydrick.net/2025/02/28/another-left-pad-incident-is-coming-and-its-going-to-be-nasty/), [2](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code), [3](https://stackoverflow.com/questions/39236813/how-did-the-unpublishing-of-npm-left-pad-break-code), [4](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), [5](https://www.theregister.com/software/2016/03/23/how-one-developer-just-broke-node-babel-and-thousands-of-projects-in-11-lines-of-javascript/1274719)]

Lasting Impact

The event served as a massive wake-up call for the software industry regarding **supply-chain security** and dependency management. \[[1](https://www.tigrisdata.com/blog/ai-left-pad/), [2](https://www.linkedin.com/posts/arief-fitranto%5Fsoftwareengineering-devops-opensource-activity-7358067645788663808-ryaN), [3](https://www.tigrisdata.com/blog/ai-left-pad/), [4](https://www.reddit.com/r/ProgrammerHumor/comments/1h2b7mr/npmleftpadincidentof2016/), [5](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)]

1. **Registry Policy Changes**: npm updated its rules to [prohibit unpublishing](https://stackoverflow.com/questions/69419695/what-measures-have-been-taken-to-prevent-something-like-the-left-pad-incident-ha) any package version that is more than 24 hours old.
2. **Cultural Shift**: It triggered a debate on the "micro-module" culture, with critics questioning why developers were importing trivial functions [rather than writing them](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/) themselves.
3. **Language Evolution**: Modern JavaScript eventually added built-in methods like `padStart()` to the standard library to reduce the need for external utilities. \[[1](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/), [2](https://stackoverflow.com/questions/69419695/what-measures-have-been-taken-to-prevent-something-like-the-left-pad-incident-ha), [3](https://news.ycombinator.com/item?id=44245166), [4](https://www.reddit.com/r/learnprogramming/comments/4bo951/eli5%5Fthis%5Fwhole%5Ffiasco%5Fwith%5Fjavascript%5Fnode%5Fand/), [5](https://www.hypermod.io/explore/remove-left-pad)]

Would you like to see a list of **other major supply-chain incidents** that have affected the developer community?

- [link](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)\
  npm left-pad incident - Wikipedia\
  After Koçulu expressed his disappointment with npm, Inc.'s decision and stated that he no longer wished to be part of the platform...\
  Wikipedia
- [link](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/)\
  NPM & left-pad: Have We Forgotten How To Program?\
  Mar 23, 2016 — Intro. Okay developers, time to have a serious talk. As you are probably already aware, this week React, Babel, and a bunch of oth...\
  www.davidhaney.io
- [link](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code)\
  How one programmer broke the internet by deleting a tiny ...\
  Jan 28, 2025 — Two days after Koçulu's last email to npm, on March 22, JavaScript programmers around the world started receiving a strange error ...\
  qz.com

Show all

what does left pad do

The `left-pad` function is a tiny utility that <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>prepends characters to the beginning of a string</strong> until it reaches a specific total length</mark>. \[[1](https://www.curietech.ai/mulesoft-dataweave/leftpad-function-in-dataweave)]

By default, it uses spaces for padding, but it can be configured to use any character, such as a zero. \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), [2](https://codegolf.stackexchange.com/questions/76131/javascript-left-pad-golf)]

Core Functionality

As described in sources like [Wikipedia](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), the function typically takes three arguments: \[[1](https://www.educative.io/answers/what-is-the-stringutilsleftpad-method-in-java), [2](https://www.sitepoint.com/a-utility-function-fo-padding-strings-and-numbers/)]

1. **String**: The original text you want to pad.
2. **Length**: The desired final length of the string.
3. **Character (Optional)**: The character used for padding (defaults to a space). \[[1](https://www.theregister.com/2016/03/23/npm%5Fleft%5Fpad%5Fchaos/), [2](https://codegolf.stackexchange.com/questions/76131/javascript-left-pad-golf), [4](https://jsr.io/@left-pad/left-pad-ai)]

Example Use Cases

- **Number Formatting**: Ensuring IDs or zip codes have a uniform length (e.g., turning "42" into "00042").
- **Table Alignment**: Right-aligning text in a console or fixed-font report so columns line up perfectly.
- **Data Normalization**: Meeting fixed-size requirements for legacy communication protocols. \[[1](https://secretgeek.net/leftpadfoot), [2](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code), [4](https://medium.com/@me%5F76676/padstart-is-the-new-leftpad-fe035bd300b7), [5](https://developer.sailpoint.com/docs/extensibility/transforms/operations/left-pad/)]

Implementation Logic

The original 11-line package worked by calculating how many characters were needed (`target length - original length`) and using a simple loop to add them to the front. \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), [2](https://www.theregister.com/2016/03/23/npm%5Fleft%5Fpad%5Fchaos/)]

| Input   | Target Length | Pad Char | Result     |
| ------- | ------------- | -------- | ---------- |
| `"abc"` | 6             | (space)  | `"   abc"` |
| `"1"`   | 2             | `"0"`    | `"01"`     |
| `"foo"` | 5             | `"-"`    | `"--foo"`  |

Since this incident, modern JavaScript has added a built-in method called String.prototype.padStart() that performs this exact task without needing an external package. \[[1](https://www.youtube.com/watch?v=Qy94f%5FrhQSQ), [2](https://www.codecademy.com/resources/docs/javascript/strings/padStart), [3](https://www.youtube.com/watch?v=QhHX6fis7Wc\&t=2), [4](https://www.hypermod.io/explore/remove-left-pad)]

Would you like to see how to **implement this yourself** in a specific programming language to avoid external dependencies?

- [link](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)\
  npm left-pad incident - Wikipedia\
  Background. left-pad was a free and open-source JavaScript package published by Azer Koçulu, an independent programmer based in Oa...\
  Wikipedia
- [link](https://www.youtube.com/watch?v=Qy94f%5FrhQSQ)\
  JavaScript Tips — Left padding strings using padStart\
  Mar 6, 2023 — the string pad start method in JavaScript adds characters to the start of a string until it's of a given length. in other language...\
  4:37\
  YouTube·Code 2020
- [link](https://www.curietech.ai/mulesoft-dataweave/leftpad-function-in-dataweave)\
  LeftPad Function in DataWeave: Tutorial & Examples\
  MuleSoft is a leading integration platform that helps organizations connect different systems, applications, and data sources. It ...\
  CurieTech AI

Show all

code

Here is the logic for a basic `left-pad` function. While the original npm package was written in JavaScript, the logic is universal.

Modern JavaScript (Built-in)

Since the incident, you no longer need a library for this. Modern JS includes the padStart() method:

javascript

```
const str = "42";
console.log(str.padStart(5, "0")); // Output: "00042"
```

Use code with caution.

Manual Implementation (JavaScript)

If you were to write the logic yourself (similar to the 11 lines of code that "broke the internet"), it looks like this:

javascript

```
function leftPad(str, len, ch) {
  str = String(str); // Convert to string
  ch = ch || ' ';    // Default to space if no char provided

  while (str.length < len) {
    str = ch + str;  // Prepend the character
  }
  return str;
}

console.log(leftPad("abc", 6));      // "   abc"
console.log(leftPad("1", 2, "0"));   // "01"
```

Use code with caution.

Python Implementation

In Python, you can achieve this using the built-in rjust() method or a simple custom function:

python

```
# Built-in way
print("abc".rjust(6))        # '   abc'
print("1".rjust(2, "0"))     # '01'

# Manual way
def left_pad(string, length, char=' '):
    return (char * (length - len(str(string)))) + str(string) if len(str(string)) < length else str(string)
```

Use code with caution.

Do you need this implementation for a **different programming language**, like C++ or Java?

python

```
def left_pad(string, length, char=' '):
    string = str(string)
    if len(string) >= length:
        return string
    return (char * (length - len(string))) + string

# Examples
print(f"'{left_pad('abc', 6)}'")      # Default space padding
print(f"'{left_pad('1', 2, '0')}'")   # Zero padding
print(f"'{left_pad('foo', 5, '-')}'") # Custom character padding
```

Use code with caution.

original 11 lines of code

The original 11 lines of the `left-pad` package authored by Azer Koçulu were remarkably simple, using a `while` loop to prepend characters one by one. \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)]

The Original Source Code

javascript

```
module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}
```

Use code with caution.

([Wikipedia](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)) \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)]

Key Observations

- **The "Micro-Module" Philosophy**: Critics pointed out that this trivial logic could be written in minutes by any competent developer, yet millions of projects imported it to save a few lines of work.
- **Performance Critiques**: Some developers later joked that it was one of the most "computationally expensive" ways to implement the feature because it performed string concatenation inside a loop, though modern JavaScript engines optimize this quite well.
- **Licensing**: It was originally released under the WTFPL (Do What The Fuck You Want To Public License), which technically allowed npm to restore the code legally after the author unpublished it. \[[1](https://dev.to/chaitanyasuvarna/how-a-developer-broke-the-internet-by-un-publishing-his-package-containing-11-lines-of-code-31ei), [2](https://buymeacoffee.com/reactbd/how-11-lines-code-broke-internet), [3](https://re.factorcode.org/2016/03/left-pad.html), [4](https://www.reddit.com/r/todayilearned/comments/1h2uj2i/til%5Fin%5F2016%5Fa%5Fman%5Fdeleted%5Fhis%5Fopensource/), [5](https://www.reddit.com/r/ProgrammerHumor/comments/1h2b7mr/npmleftpadincidentof2016/)]

Would you like to explore how **dependency management tools** have changed since this incident to prevent similar "house of cards" collapses?

- [link](https://dev.to/chaitanyasuvarna/how-a-developer-broke-the-internet-by-un-publishing-his-package-containing-11-lines-of-code-31ei)\
  How a developer broke the internet by un-publishing his ...\
  Nov 22, 2020 — In this case though, the package was unpublished, and there was no way npm could find this dependency, thus causing these unforese...\
  DEV Community
- [link](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)\
  npm left-pad incident - Wikipedia\
  Background. left-pad was a free and open-source JavaScript package published by Azer Koçulu, an independent programmer based in Oa...\
  Wikipedia
- [link](https://www.reddit.com/r/todayilearned/comments/1h2uj2i/til%5Fin%5F2016%5Fa%5Fman%5Fdeleted%5Fhis%5Fopensource/)\
  TIL in 2016, a man deleted his open-source Javascript package, ...\
  Nov 29, 2024 — \* voretaq7. • 1y ago. Not only was it 11 lines of code, it was literally the most computationally expensive way to implement "left...\
  Reddit·r/todayilearned

Show all

what did npm do that time

During the **left-pad incident**, npm took several immediate and controversial actions to restore the ecosystem, which eventually led to permanent policy shifts. \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), [2](https://pusher.com/blog/talking-left-pad-npm-and-dependencies-in-front-end-development/)]

Immediate Actions During the Crisis

- **Manual Restoration**: Approximately two hours after the code vanished, npm took the "unprecedented" step of **manually restoring** the original `0.0.3` version of `left-pad` from a backup.
- **Overriding the Author**: This was controversial because it explicitly went against the author's decision to delete his work. npm justified this by stating they "picked the needs of the many" over the wishes of one creator.
- **Legal Justification**: They utilized the **open-source license** (MIT) attached to the original code to justify re-hosting it, arguing that once published as open-source, the community had a right to keep using it. \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), [2](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code), [3](https://www.tiktok.com/@dbrogle/video/7496099070554000682), [4](https://medium.com/nerd-for-tech/that-time-a-guy-broke-the-internet-23c00903ad6f)]

Permanent Policy Changes

Following the incident, npm implemented a ["no take-backsies"](https://www.linkedin.com/posts/anshulkhare%5Fin-march-2016-azer-ko%C3%A7ulu-yanked-the-package-activity-7227190717222113280-ktgT) policy to prevent a repeat: \[[1](https://www.linkedin.com/posts/anshulkhare%5Fin-march-2016-azer-ko%C3%A7ulu-yanked-the-package-activity-7227190717222113280-ktgT), [2](https://nuwan.dev/articles/npm-breaks-internet/)]

- **24-Hour Rule**: Developers can now only unpublish a package version within **24 hours** of its initial release.
- **Dependency Protection**: If a package is older than 24 hours and has dependents (other packages relying on it), it **cannot be unpublished** without manual intervention from npm support.
- **Placeholder Packages**: To prevent hackers from "squatting" on deleted names with malicious code, npm now replaces unpublished packages with [security placeholders](https://adtmag.com/articles/2016/03/30/npm-policy-changes.aspx).
- **Deprecation Encouragement**: npm introduced clearer [deprecation tools](https://docs.npmjs.com/policies/unpublish/), allowing authors to warn users away from a package without breaking their builds. \[[1](https://stackoverflow.com/questions/69419695/what-measures-have-been-taken-to-prevent-something-like-the-left-pad-incident-ha), [2](https://adtmag.com/articles/2016/03/30/npm-policy-changes.aspx), [4](https://nuwan.dev/articles/npm-breaks-internet/), [5](https://docs.npmjs.com/policies/unpublish/)]

Summary of Actions

| Action \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), [2](https://www.theregister.com/2016/03/23/npm%5Fleft%5Fpad%5Fchaos/), [3](https://stackoverflow.com/questions/69419695/what-measures-have-been-taken-to-prevent-something-like-the-left-pad-incident-ha)] | Purpose                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Restored Backup**                                                                                                                                                                                                                                                               | Fixed thousands of broken software builds globally.           |
| **Seized Names**                                                                                                                                                                                                                                                                  | Handled the trademark dispute that started the whole protest. |
| **Locked Registry**                                                                                                                                                                                                                                                               | Made unpublishing difficult to ensure long-term stability.    |

Would you like to know more about the **trademark dispute** with the company Kik that triggered the entire protest?

- [link](https://medium.com/nerd-for-tech/that-time-a-guy-broke-the-internet-23c00903ad6f)\
  That Time A Guy Broke The Internet. | by Alex Marz - Medium\
  Feb 17, 2021 — Thousands of their users were experiencing catastrophic breakage and the code to fix it was simply gone. In an unprecedented move ...\
  Medium·Alex Marz
- [link](https://stackoverflow.com/questions/69419695/what-measures-have-been-taken-to-prevent-something-like-the-left-pad-incident-ha)\
  What measures have been taken to prevent something like the ...\
  Oct 2, 2021 — npm made it harder to unpublish packages. The incident occurred because the maintainer of left-pad was able to unpublish the packa...\
  Stack Overflow
- [link](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)\
  npm left-pad incident - Wikipedia\
  Around two hours after the original left-pad package was removed, npm manually restored the original 0.0. 3 version by restoring a...\
  Wikipedia

Show all

criticism

The criticism following the left-pad incident targeted every party involved, exposing deep-seated frustrations within the global developer community.

1\. Criticism of the "Micro-Module" Culture

The most widespread backlash was directed at the JavaScript ecosystem's over-reliance on trivial, single-function packages. \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)]

- **"Have We Forgotten How to Program?"**: Critics argued that if a developer cannot write a 10-line string padding function without an external dependency, they are "dependency hacking" rather than engineering.
- **Fragility and Surface Area**: Critics pointed out that "100 micro-modules means 100x more surface area" for failure or security compromises than using a consolidated library.
- **Lack of a Standard Library**: The incident highlighted that JavaScript lacked a robust built-in standard library compared to languages like Python or .NET, forcing developers to rely on third-party "duct tape" for basic tasks. \[[1](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/), [2](https://news.ycombinator.com/item?id=41286139), [3](https://www.reddit.com/r/javascript/comments/1nkw6gr/askjs%5Fwhat%5Fmakes%5Fnpm%5Fless%5Fsecure%5Fthan%5Fother/), [4](https://www.telerik.com/blogs/left-pad-indicative-fragile-javascript-ecosystem), [5](https://news.ycombinator.com/item?id=11699114)]

2\. Criticism of npm (The Platform)

Many developers felt npm mismanaged the situation from the start, prioritizing corporate interests over individual contributors. \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), [2](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code), [3](https://lwn.net/Articles/681410/)]

- **Unilateral Trademark Transfer**: npm was heavily criticized for seizing Azer Koçulu's package name (`kik`) and handing it to a corporation without public discussion or a clear, transparent policy.
- **Registry Guardianship**: Others blamed npm for allowing critical packages to be deleted so easily in the first place, calling the platform a "single point of failure" for the internet.
- **Ethics of "Un-unpublishing"**: Restoring the code against the author's wishes raised ethical and legal questions about who truly "owns" open-source code once it's on a centralized registry. \[[1](https://www.reddit.com/r/learnprogramming/comments/4bo951/eli5%5Fthis%5Fwhole%5Ffiasco%5Fwith%5Fjavascript%5Fnode%5Fand/), [2](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code), [3](https://lwn.net/Articles/681410/), [4](https://news.ycombinator.com/item?id=41286139), [5](https://spicyip.com/2016/06/code-leftpad.html), [6](https://www.reddit.com/r/ProgrammerHumor/comments/1h2b7mr/npmleftpadincidentof2016/)]

3\. Criticism of the Author (Azer Koçulu)

While many supported his protest against corporate overreach, others viewed his response as excessive. \[[1](https://www.reddit.com/r/learnprogramming/comments/4bo951/eli5%5Fthis%5Fwhole%5Ffiasco%5Fwith%5Fjavascript%5Fnode%5Fand/)]

- **"Throwing a Tantrum"**: Critics labeled the removal of nearly 300 packages—knowing they were critical to others—as a reckless "temper tantrum" that punished innocent developers to make a political point.
- **Professional Responsibility**: Some argued that as a maintainer of widely used tools, Koçulu had a social contract with the community that he violated by "breaking the internet". \[[1](https://hydrick.net/2025/02/28/another-left-pad-incident-is-coming-and-its-going-to-be-nasty/), [3](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm), [4](https://medium.com/@theopinionatedev/the-npm-package-that-wiped-out-40-of-the-internet-and-nobody-saw-it-coming-ad0aafbf29ac), [5](https://medium.com/@theopinionatedev/the-npm-package-that-wiped-out-40-of-the-internet-and-nobody-saw-it-coming-ad0aafbf29ac)]

4\. Criticism of Industry Practices

The incident was a wake-up call for how major companies handle their own security and build pipelines. \[, [2](https://medium.com/@theopinionatedev/the-npm-package-that-wiped-out-40-of-the-internet-and-nobody-saw-it-coming-ad0aafbf29ac)]

- **Blind Trust**: Large corporations like Netflix and Facebook were mocked for implicitly trusting thousands of unknown, unpaid third-party maintainers with their critical infrastructure.
- **Lack of Internal Caching**: The fact that a single 404 error could halt global deployments showed a widespread failure to use internal package mirrors or "vendoring" (keeping local copies of dependencies). \[[1](https://www.reddit.com/r/learnprogramming/comments/4bo951/eli5%5Fthis%5Fwhole%5Ffiasco%5Fwith%5Fjavascript%5Fnode%5Fand/), [2](https://medium.com/@theopinionatedev/the-npm-package-that-wiped-out-40-of-the-internet-and-nobody-saw-it-coming-ad0aafbf29ac), [4](https://news.ycombinator.com/item?id=41286139)]

Would you like to see how **modern build tools** have changed to address these specific security and reliability criticisms?

- [link](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/)\
  NPM & left-pad: Have We Forgotten How To Program?\
  Mar 23, 2016 — There's absolutely no guarantee that what someone else has written is correct, or even works well. Even if correct, is it the most...\
  www.davidhaney.io
- [link](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)\
  npm left-pad incident - Wikipedia\
  The incident drew varied reactions from users on Twitter, GitHub, Reddit, and Hacker News, with many claiming that it briefly "bro...\
  Wikipedia
- [link](https://news.ycombinator.com/item?id=41286139)\
  The primary cause of the left-pad incident was that ... - Hacker News\
  In short, I think the lessons from the leftpad debacle are (1) people don't use existing versioning tooling, (2) there is a surpri...\
  Hacker News

Show all

the change

The "change" following the left-pad incident refers to a major overhaul of [npm registry policies](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident) and a shift in global software development practices to prevent similar ecosystem collapses. \[[1](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident), [2](https://buymeacoffee.com/reactbd/how-11-lines-code-broke-internet)]

1\. The "No Take-Backsies" Policy \[[1](https://www.linkedin.com/posts/anshulkhare%5Fin-march-2016-azer-ko%C3%A7ulu-yanked-the-package-activity-7227190717222113280-ktgT)]

The most direct change was how npm handled unpublishing. To ensure code remained available for those who rely on it, npm implemented new rules: \[[1](https://stackoverflow.com/questions/69419695/what-measures-have-been-taken-to-prevent-something-like-the-left-pad-incident-ha), [2](https://www.linkedin.com/posts/anshulkhare%5Fin-march-2016-azer-ko%C3%A7ulu-yanked-the-package-activity-7227190717222113280-ktgT)]

- **The 24-Hour Window**: Authors can only unpublish a package version within **24 hours** of its initial release.
- **Dependency Block**: If a package has been available for more than 24 hours and is used as a dependency by another project, it **cannot be unpublished** without manual review by npm support.
- **Version Immutability**: These changes moved npm closer to the model of other registries like Maven, where published code is considered permanent. \[, [3](https://www.bleepingcomputer.com/news/security/everything-blocks-devs-from-removing-their-own-npm-packages/), [4](https://medium.com/@theopinionatedev/the-npm-package-that-wiped-out-40-of-the-internet-and-nobody-saw-it-coming-ad0aafbf29ac)]

2\. Language-Level Evolution

The incident exposed a glaring gap in the JavaScript standard library—basic features were missing, forcing developers to rely on third-party "micro-modules" for trivial tasks. \[[1](https://www.tigrisdata.com/blog/ai-left-pad/), [2](https://news.ycombinator.com/item?id=44245166)]

- **Built-in Methods**: Soon after, standard methods like `String.prototype.padStart()` were introduced to provide this functionality natively, reducing the need for external packages like `left-pad`. \[]

3\. Defensive Engineering Practices

The developer community shifted toward more cautious dependency management: \[[1](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/), [2](https://nuwan.dev/articles/npm-breaks-internet/)]

- **Lockfiles**: Tools like `package-lock.json` and `yarn.lock` became standard to ensure every install uses the exact same version of every dependency.
- **Vendoring & Caching**: Many organizations began using private package mirrors (like Sonatype Nexus or JFrog Artifactory) to store their own copies of dependencies so they aren't vulnerable if a public package is removed.
- **Dependency Audits**: Regular security and reliability audits of deep dependency trees became a standard part of professional software lifecycles. \[[1](https://news.ycombinator.com/item?id=41286139), [2](https://medium.com/@theopinionatedev/the-npm-package-that-wiped-out-40-of-the-internet-and-nobody-saw-it-coming-ad0aafbf29ac), [3](https://nuwan.dev/articles/npm-breaks-internet/)]

4\. Emergency Restoration Procedures

Following the "unprecedented" manual restoration of `left-pad`, npm formalized official procedures for emergency package recovery. They now have clear protocols to "un-unpublish" code when its removal threatens the stability of the wider internet. \[[1](https://www.theregister.com/2016/03/23/npm%5Fleft%5Fpad%5Fchaos/), [2](https://buymeacoffee.com/reactbd/how-11-lines-code-broke-internet), [3](https://medium.com/@theopinionatedev/the-npm-package-that-wiped-out-40-of-the-internet-and-nobody-saw-it-coming-ad0aafbf29ac)]

Would you like to know more about the **legal and trademark policies** npm updated to avoid disputes like the one that started this protest?

- [link](https://stackoverflow.com/questions/69419695/what-measures-have-been-taken-to-prevent-something-like-the-left-pad-incident-ha)\
  What measures have been taken to prevent something like the left- ...\
  Oct 2, 2021 — npm made it harder to unpublish packages The incident occurred because the maintainer of left-pad was able to unpublish the packag...\
  Stack Overflow
- [link](https://en.wikipedia.org/wiki/Npm%5Fleft-pad%5Fincident)\
  npm left-pad incident - Wikipedia\
  Maintainers of open-source projects, including Babel, released hotfixes to remove the dependencies that Koçulu had unpublished. Se...\
  Wikipedia
- [link](https://buymeacoffee.com/reactbd/how-11-lines-code-broke-internet)\
  How 11 Lines of Code Broke the Internet - Buy Me a Coffee\
  Aug 16, 2025 — Package restoration capabilities were formalized. While NPM had always maintained backups, the left-pad incident forced them to cr...\
  Buy Me a Coffee

Show all