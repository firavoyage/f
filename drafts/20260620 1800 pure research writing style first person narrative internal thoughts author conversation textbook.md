# .

## what do you think of this in gnome hig Text should typically have a neutral perspective and tone. Pronouns like “you” or “my” should generally be avoided. However, if it is necessary to refer to something as belonging to the user, “your” is preferable to “my”. For example: “Your Records”.

This guideline aligns perfectly with modern, professional User Interface (UI) writing standards.

Here is a breakdown of why this approach works and how it applies to the GNOME Human Interface Guidelines (HIG):

### Why the Guideline is Effective

- **User Ownership:** Using "Your" (e.g., _Your Documents_) makes the user feel in control of their data.
- **Clarity:** Avoiding "My" removes confusion about whether the phrase refers to the user or the computer.
- **Neutrality:** A neutral tone keeps the interface professional, clean, and calm.
- **Global Access:** Neutral text is much easier to translate into other languages without losing meaning. \[[1](https://news.ycombinator.com/item?id=45257627), [2](https://ux.stackexchange.com/questions/4348/your-vs-my-in-user-interfaces)]

### GNOME HIG Application

- **System vs. User:** GNOME reserves "Your" for items explicitly created or owned by the user.
- **Action Over Pronouns:** GNOME often drops pronouns entirely to save screen space (e.g., using _Documents_ instead of _Your Documents_).
- **Impersonal Prompts:** Error messages and dialogs stay objective, focusing on the system state rather than blaming the user.

### Comparison Examples

| Avoid ("My") | Avoid ("You")                | Preferred (GNOME Style)     |
| ------------ | ---------------------------- | --------------------------- |
| My Files     | You can view your files here | Files / Your Files          |
| My Account   | Change your password         | Account / Change Password   |
| My Settings  | You need to restart          | Settings / Restart Required |

To help tailor this to your project, could you share **what kind of app** you are designing? If you have specific **UI text or error messages** you are currently writing, I can help you rephrase them to fit this style.

- [link](https://news.ycombinator.com/item?id=45257627)\
  "Your" vs. "My" in user interfaces\
  Oct 1, 2025 — If you were talking about a document somewhere in your files, you would say "it's in my files". If you were forced to physically l...\
  \
  Hacker News
- [link](https://ux.stackexchange.com/questions/4348/your-vs-my-in-user-interfaces)\
  copywriting - "Your" vs "My" in user interfaces - User Experience Stack Exchange\
  Mar 15, 2010 — Even when you do need to differentiate user content from others, you may want to avoid “my” and “your” because in certain situatio...\
  \
  \
  User Experience Stack Exchange

## You said: why not my

Using "My" is generally avoided in modern UI design—including the GNOME HIG—for several key reasons:

### 1. It Creates a Concept Clashing (Who is "My"?)

When an interface says "My Documents," it creates confusion about who is speaking.

- Is the **computer** talking to itself?
- Is the **computer** claiming ownership of your files?
- Is the **user** supposed to read it aloud?

Using "Your" or dropping the pronoun entirely makes the relationship clear: the computer is a tool, and the data belongs to the user.

### 2. It Feels Juvenile and Outdated

The "My" naming convention is a relic of the late 1990s and early 2000s (most famous in Windows XP's _"My Computer"_ and _"My Documents"_). Modern design trends favor clean, minimalist, and mature interfaces. "My" can feel hand-holding or overly simplistic to modern users.

### 3. It Fails in Voice Interfaces and Accessibility

With the rise of screen readers and voice assistants, "My" causes conversational issues. If a user asks a smart assistant, _"Open my files,"_ and the screen reader reads back, _"Opening My Files,"_ the repetitive use of the first-person pronoun becomes confusing to track.

### 4. Translation and Localization Issues

In many languages, translating "My" requires changing the word based on the gender, number, or grammatical case of the noun that follows it.

- It complicates the translation process.
- It increases the chance of localized text breaking the UI layout.
- Dropping pronouns entirely makes global software much easier to maintain.

### Summary of the Shift

```
[Old Approach: Windows XP Era]  ->  [Modern Approach: GNOME HIG]
My Documents                    ->  Documents
My Music                        ->  Music
My Settings                     ->  Settings
```

If you are working on a specific part of an interface, I can help you review it. Would you like to check a **specific menu list**, an **onboarding screen**, or an **error message** to see if pronouns can be removed?

## You said: how does it feel if the user is clear

When the user's intent, context, or identity is completely clear, using **no pronoun at all** feels the most natural, efficient, and professional.

Here is how different approaches feel to a user when the context is already obvious:

### 1. No Pronoun (The GNOME Approach)

- **Example:** _Files_, _Downloads_, _Settings_ \[1]
- **How it feels:** **Invisible and efficient.** Because users already know they own the data, omitting the pronoun removes visual noise. It respects the user's intelligence and lets them focus purely on the task.

### 2. Using "Your"

- **Example:** _Your Files_, _Your Downloads_, _Your Settings_
- **How it feels:** **Polite but slightly redundant.** While it clearly establishes user ownership, repeating "Your" across an entire sidebar or menu can feel repetitive if the context makes it obvious that the data is theirs.

### 3. Using "My"

- **Example:** _My Files_, _My Downloads_, _My Settings_
- **How it feels:** **Patronizing or intrusive.** When the context is clear, forcing "My" can feel like the operating system is trying too hard to mimic the user's internal voice, which often breaks the illusion of a seamless tool.

### When "Your" Is Actually Needed

Even when things are clear, the GNOME HIG and general UI standards use "Your" to **distinguish ownership** when multiple parties or systems are involved:

- **Shared Systems:** _Your Files_ vs. _Shared Files_ vs. _System Files_.
- **Multi-Account Apps:** _Your Profile_ vs. _Team Profile_.

### The Rule of Thumb

If the user already knows it belongs to them, **delete the pronoun**.

If you want to test how this feels in practice, I can help you review your layout. Would you like to share a **mockup layout**, a **sidebar menu list**, or a **button sequence** you are designing?

## You said: how does it feel if used on a textbook

If the GNOME HIG tone guidelines are applied to a textbook, the resulting perspective is **highly objective, formal, and authoritative**, though it risks feeling emotionally distant or cold if not balanced properly. \[[1](https://opentextbc.ca/advancedenglish/chapter/point-of-view/), [2](https://study.com/academy/lesson/video/point-of-view-first-second-third-person.html), [3](https://www.slj.com/story/Truth-in-Textbooks-Unpacking-bias-in-curriculum-staples-libraries)]

Traditional academic publishing heavily favors this neutral, third-person perspective. The impact of each choice within a textbook format is structured below. \[[1](https://libguides.hull.ac.uk/writing/pronouns), [2](https://opentextbc.ca/advancedenglish/chapter/point-of-view/)]

### 1. Dropping the Pronoun Entirely (Objective Third-Person)

- **Example:** _"The dataset must be analyzed before calculating the standard deviation."_
- **How it feels:** **Authoritative and scientifically rigorous.** By removing human subjects, the text forces the reader to focus entirely on the facts, data, or concepts rather than who is performing them. This is the standard for STEM and advanced academic textbooks.
- **The Downside:** If overused, it can make the textbook feel incredibly dry, mechanical, or difficult to push through for younger students. \[[1](https://www.reddit.com/r/ScienceTeachers/comments/oxto73/dont%5Fuse%5Ffirst%5Fperson%5Fa%5Frant/), [2](https://opentextbc.ca/advancedenglish/chapter/point-of-view/), [3](https://libguides.hull.ac.uk/writing/pronouns), [4](https://www.instagram.com/reel/DLxmVFuypUn/?hl=en)]

### 2. Using "Your" (Second-Person Direct Address)

- **Example:** _"You must analyze your dataset before calculating the standard deviation."_
- **How it feels:** **Engaging and tutorial-like.** Using "your" transforms the textbook into an interactive workbook or lab manual. It directly implicates the student in the learning process, which is highly effective for introductory materials, coding books, or step-by-step guides.
- **The Downside:** It is generally considered too informal or "chatty" for high-level academic research papers or advanced tier textbooks. \[[1](https://www.instagram.com/reel/DLxmVFuypUn/?hl=en), [2](https://www.facebook.com/groups/1496357900600841/posts/3621568691413074/), [3](https://pressbooks.pub/writingtextbook/chapter/person-or-point-of-view/), [4](https://libguides.hull.ac.uk/writing/pronouns)]

### 3. Using "My" (First-Person Singular)

- **Example:** _"I analyzed my dataset before calculating the standard deviation."_
- **How it feels:** **Anecdotal or biographical.** Textbooks almost universally avoid "my" because a textbook represents broad, established field consensus rather than one person's diary. \[[1](https://study.com/academy/lesson/video/point-of-view-first-second-third-person.html), [2](https://blogs.ubc.ca/etec540sept12/2012/10/27/1494/)]
- **The Exception:** It only works if the textbook author is a renowned pioneer in the field sharing a personal case study or historical breakthrough.

***

### The Modern Textbook Compromise: "We"

While GNOME style relies on a strict machine-to-user boundary, modern textbook publishing often bridges the gap using the **inclusive first-person plural ("We")**. \[[1](https://opentextbc.ca/advancedenglish/chapter/point-of-view/)]

| Phrase Style                 | Example                                        | Best Used For                                       |
| ---------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| **Strict GNOME Style**       | "Analyze the matrix to find the value."        | Reference manuals, advanced math/engineering texts. |
| **Inclusive Academic Style** | "**We** analyze the matrix to find the value." | Standard high school and university textbooks.      |
| **Interactive Style**        | "Now, calculate **your** matrix."              | Workbooks, coding tutorials, and lab exercises.     |

If you are writing or editing educational content, I can help you refine the tone. What **subject matter** is your textbook covering, and what is the **target age group** of your students?

- [link](https://www.facebook.com/groups/1496357900600841/posts/3621568691413074/)\
  What does it mean when an author uses 'you' instead of 'I' in ...\
  Oct 5, 2023 — This is where you tell your readers what you will be discussing. This is the hook that will pique your readers interest. The diffe...\
  Facebook·Writers in South Australia
- [link](https://www.reddit.com/r/ScienceTeachers/comments/oxto73/dont%5Fuse%5Ffirst%5Fperson%5Fa%5Frant/)\
  "Don't use first person" - A rant\
  Aug 4, 2021 — Here are some reasons why some teachers prefer first person: \* \*\*Clarity and economy\*\* \* \*\*More succinct\*\* \* \*\*More truthful\*\* \* \*\
  Reddit
- [link](https://www.instagram.com/reel/DLxmVFuypUn/?hl=en)\
  Make ChatGPT more human and less AI Try this trick ...\
  Jul 6, 2025 — Make ChatGPT more human and less AI

Try this trick and follow for more!

\_\_\_\_\_\_\_\_\_\_\
Use a natural, conversational, and engaging ...\
[0:32](https://www.instagram.com/reel/DLxmVFuypUn/?hl=en)\
Instagram·Varun Deval

Show all

## You said: how does it feel of no pronoun, you, i, we on a textbook

When a textbook completely eliminates all pronouns—avoiding **no pronoun, you, I, and we** entirely—<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">it adopts a purely <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">impersonal, passive, or objective third-person style</strong></mark>. \[[1](https://www.sciencedirect.com/science/article/pii/S0898589823000396)]

Here is how that specific stylistic choice feels to a reader, along with its benefits and drawbacks:

### How It Feels: The Reader's Experience

- **Clinical and Detached:** The text feels like a formal operating manual, an official encyclopedia, or a legal document. There is no "teacher" or "author" presence; there is only the raw information.
- **Highly Authoritative:** Because no human subject is mentioned, the facts are presented as absolute, unchanging truths. It feels indisputable because it removes human agency from the concepts.
- **Dense and Exhausting:** Reading text without pronouns over long periods can feel robotic. It requires more mental energy from the student because the sentence structures tend to become repetitive and passive. \[[1](https://nursehub.com/courses/hesi-a2-grammar-review/lessons/identify-parts-of-speech/topics/identifying-pronouns/)]

### Sentence Comparison

Notice how the tone shifts when all pronouns are stripped away:

| Style \[[1](https://ontariotraining.net/third-person-pronouns-in-reports/)] | Example                                                              | Tone Impression                          |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| **With Pronouns**                                                           | "In this chapter, **we** will show **you** how to write a function." | Conversational, encouraging, accessible. |
| **No Pronouns**                                                             | "This chapter demonstrates the process of writing a function."       | Formal, direct, highly focused.          |

### The Advantages of Zero Pronouns

1. **Absolute Objectivity:** It is excellent for advanced scientific, mathematical, or medical texts where personal perspective is irrelevant.
2. **Timelessness:** The text does not date itself with conversational slang or artificial friendliness.
3. **Flawless Translation:** Just like the GNOME HIG guidelines, removing pronouns makes the textbook incredibly easy to translate into other languages without formatting or cultural issues.

### The Hidden Trap: The Passive Voice

To avoid pronouns, authors often rely heavily on the **passive voice**. This can make sentences wordy and vague. \[[1](https://www.quetext.com/blog/avoid-using-we-you-i-in-essay)]

- _With Pronouns (Active):_ "**You** must heat the solution to 100°C." (Clear, direct instruction).
- _No Pronouns (Passive):_ "The solution must be heated to 100°C." (Accurate, but misses a direct sense of action).

### Summary for Textbook Authors

If you strip all pronouns out of a textbook, it feels **highly professional and serious**, but it loses the feeling of mentorship. It transforms the book from a "teacher guiding a student" into a "database being accessed by a user."

If you are looking at a specific passage, I can help you test how it reads. Would you like to share a **short paragraph or a couple of sentences** from your material to see how it sounds with zero pronouns?

- [link](https://www.sciencedirect.com/science/article/pii/S0898589823000396)\
  Engaging with readers: Students’ metalinguistic understanding of the use of pronouns in building reader-writer relationships\
  Students felt the use of third person, thus avoiding reader pronouns, made their writing ' more objective' (S27E) and was more app...\
  \
  ScienceDirect.com
- [link](https://nursehub.com/courses/hesi-a2-grammar-review/lessons/identify-parts-of-speech/topics/identifying-pronouns/)\
  Identifying Pronouns - HESI\
  Without pronouns, our sentences would look a lot like this. We would be forced to repeat nouns over and over again.\
  \
  \
  NurseHub
- [link](https://ontariotraining.net/third-person-pronouns-in-reports/)\
  Writing Style - Third Person Pronouns in Reports\
  Nov 3, 2011 — A formal tone avoids most personal pronouns ( I, me, we, you)and uses passive voice sentences and the third person pronoun “it.” T...\
  \
  Ontario Training Network

Show all

## You said: i mean how does it feel of third person, you, i (as the reader's internal thoughts, not as the author), we on a textbook

When you include **"I" as the reader’s internal thoughts** alongside the third person, "you," and "we," a textbook turns into <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">highly psychological, immersive, and guided experience.</strong></mark> It mimics the voice inside a student's head as they struggle with, process, and master a concept.

Here is how each of these specific perspectives feels when mixed together in a textbook:

### 1. "I" (The Reader’s Internal Thoughts)

- **Example:** _"At this point, you might think: 'Wait, if **I** multiply by zero, won't the whole equation vanish?'"_
- **How it feels:** **Deeply empathetic and validating.** When the book voices the reader's exact doubts or confusion using "I," it feels like the author is reading their mind. It lowers frustration because the student realizes, _"The author knew I would get stuck here, so it is okay that I am confused."_ It breaks the "wall" of the textbook and creates an internal dialogue.

### 2. "You" (The Direct Instruction)

- **Example:** _"Now, take **your** calculated value and plug it into the formula."_
- **How it feels:** **Active and demanding.** It pulls the reader out of passive reading and forces them to take action. Paired with the internal "I", it feels like a personal coach standing over your shoulder, saying, _"You understand the doubt you just had, now execute the next step."_

### 3. "We" (The Shared Journey)

- **Example:** _"In the next section, **we** will explore how this law applies to gravity."_
- **How it feels:** **Collaborative and safe.** "We" positions the author and the student as a team exploring a map together. It balances the demanding nature of "you" and the isolation of "I" by reminding the student they are not alone in the learning process.

### 4. Third Person (The Ground Truth)

- **Example:** _"The law of conservation of energy states that energy cannot be created or destroyed."_
- **How it feels:** **Stable and factual.** This is the anchor. It gives the reader confidence that despite the doubts ("I"), the instructions ("you"), and the journey ("we"), the core facts of the universe remain solid and objective.

***

### How They Feel Working Together (The Learning Rhythm)

When an author balances all four, it creates a rhythm that matches how the human brain actually learns:

1. **Third Person (The Fact):** The book states a complex rule. _(Brain: "Okay, that sounds dense.")_
2. **"I" (The Reader's Thought):** The book voices the student's panic. _"If **I** change the pressure, doesn't the volume have to explode?"_ _(Brain: "Yes! That’s exactly what I was thinking!")_
3. **"We" (The Shared Solution):** The book calms them down. _"Let's look at why that doesn't happen if **we** keep temperature constant."_ _(Brain: "Okay, let's look together.")_
4. **"You" (The Practice):** The book pushes them to try. _"Now, adjust **your** simulator and watch the gauge."_ _(Brain: "I've got this.")_

### The Verdict

Using all four perspectives—especially utilizing "I" as the reader's proxy—makes a textbook feel **warm, brilliant, and masterfully taught.** It reads less like an operating manual and more like a high-end, interactive masterclass.

If you want to see how this rhythm plays out, I can help you draft a sample passage. What **difficult concept or topic** would you like to see written using this multi-perspective approach?

## You said: how does it feel when replacing all we with i (as the internal thoughts)

Replacing all **"we"** with **"I" (as the reader's internal thoughts)** shifts the textbook from a collaborative journey into a **deeply personal, highly focused, and solitary mental simulation.**

It removes the "teacher" or "guide" character completely, leaving only the student's brain wrestling directly with the material.

Here is how that specific shift feels to a reader:

### 1. The Tone Shifts from "Teamwork" to "Total Autonomy"

- **With "We" (Collaborative):** _"Next, **we** will graph this function to see the curve."_
  - **How it feels:** Safe and guided. The author is holding the student's hand as they move forward together.
- **With "I" (Internal Simulation):** _"Next, **I** need to graph this function to see the curve."_
  - **How it feels:** Empowering and active. The student is immediately placed in the driver's seat. It forces ownership of the next logical step before they even do it.

### 2. It Mimics "Rubber Duck Debugging"

In computer science, "rubber duck debugging" is the practice of explaining your code line-by-line to an object to find errors. By using "I" for every action step, the textbook reads like a person talking themselves through a problem.

- **Example:** _"If **I** increase the pressure here, then **I** must compensate by lowering the temperature over there. Let's see what happens to **my** final volume."_
- **How it feels:** Highly practical. It models exactly how experts think when solving real-world problems.

### 3. Increased Intensity and Mental Load

Because every sentence connects directly to the reader's identity (_"I must do this," "I am thinking that"_), the book feels much more intense.

- **The Benefit:** It prevents passive skimming. The reader cannot zone out because the text is continuously hijacking their internal monologue.
- **The Downside:** It can be exhausting. Without "we" to share the burden or third-person to provide a neutral breathing room, the student may feel a high level of performance anxiety or fatigue during long chapters.

***

### Comparison of the Dynamic

Notice how the relationship changes when the author vanishes and only the reader's internal voice remains:

| Style                         | Example Passage                                                                                                                                     | The Relationship                                                              |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **The "We" Approach**         | "The atom has a neutral charge. In this section, **we** will strip away an electron. What do **we** notice about the balance?"                      | **A Guide and a Companion:** You are exploring a lab together with a mentor.  |
| **The "I" Internal Approach** | "The atom has a neutral charge. If **I** strip away an electron, what do **I** notice about the balance? **I** can see the charge is now positive." | **A Solo Simulator:** You are alone in a room, narrating your own experiment. |

### When This Style Works Best

This approach is incredibly effective for **interactive workbooks, coding bootcamps, advanced logic puzzles, or lab manuals** where the entire goal is independent mastery. It is less effective for narrative-heavy subjects like history or literature, where broad, shared perspectives are necessary.

Would you like to take a look at a **specific paragraph** you are writing and see how it reads when we swap the "we" sentences into "I" internal thoughts?

## You said: how does it feel when replacing all we with i (as the author)

Replacing all **"we"** with **"I" (as the author)** transforms the textbook from a collaborative academic study into an **intimate, highly personal masterclass led by a single expert.**

It shifts the tone from institutional authority to personal mentorship, which completely changes how the reader perceives the information.

Here is how that specific shift feels to a reader:

### 1. The Tone Shifts from "Institutional" to "Expert-Driven"

- **With "We" (The Academic Standard):** _"In this chapter, **we** will demonstrate the law of thermodynamics."_
  - **How it feels:** Anonymous and corporate. "We" can feel like a faceless committee of academics wrote the book. It is safe, standard, and familiar.
- **With "I" (The Author):** _"In this chapter, **I** will show you how the law of thermodynamics works."_
  - **How it feels:** Direct and conversational. It feels like you are sitting across a desk from a legendary professor during office hours. The author is taking personal responsibility for teaching you.

### 2. Facts Feel Like "Discovered Experiences" Rather Than Absolute Truths

When an author says "I," it highlights human agency. This can make complex topics feel much more grounded and less intimidating.

- **Example:** _"When **I** first mapped this equation, **I** realized the variables didn't align. Here is how **I** solved that problem."_
- **How it feels:** Narrative and engaging. Instead of memorizing a dry formula, the student feels like they are retracing the steps of a detective. It normalizes mistakes and emphasizes problem-solving.

### 3. Increased Trust—But Less Institutional Weight

- **The Benefit:** It builds immense rapport. Readers often feel a strong loyalty to an author who writes with a transparent "I," making them more willing to stick through difficult, complex chapters.
- **The Downside:** It strips away the illusion of universal consensus. If an author says, _"Based on my research, I conclude..."_ rather than _"We conclude..."_, the reader is reminded that this is one person's perspective. For introductory textbooks, this can sometimes make the science feel less "set in stone."

***

### Comparison of the Dynamics

Notice how the classroom dynamic changes when the author steps out from behind the curtain:

| Style                          | Example Passage                                                                          | The Classroom Dynamic                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **The "We" Approach**          | "To calculate the margin of error, **we** must first establish a baseline sample size."  | **The Lecture Hall:** A standard, professional presentation representing the consensus of the whole field. |
| **The Authorial "I" Approach** | "To calculate the margin of error, **I** always establish a baseline sample size first." | **The Apprenticeship:** A master craftsman showing you their personal workflow and secrets.                |

### When This Style Works Best

This approach shines in **highly specialized fields, creative arts, advanced computer science books, or business strategy textbooks** written by famous industry leaders. It is less effective in standardized K-12 textbooks, where the focus must remain entirely on state-mandated curriculum consensus rather than individual authorship.

Are you considering this voice for a **pioneering field of study** or a **niche textbook**? I can help you rewrite a short introduction using this authoritative "I" to see if it fits your goal.

