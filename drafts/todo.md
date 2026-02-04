todo

message/paste · todo · tabs/things · scratch pad · weekly/projects · notes

<!--

i dont need infinite power. dont dive into tooling. sometimes working is enough.

leverage thinking: practical wisdom, whether pragmatic or not

trust my intuition more.

curiosity... good. but dont over do it. (e.g. divide literature)

do some meta things. these help.

opencode skill. test. learn by doing. (tell llms my ideas. dont be afraid of overfitting.)

finish things: close, organize, think, prepare... importance over urgency.

 -->

---

see

- app creation roadmap
- deliverables

---

"non trivial".

---

life

---

chat with russian.

create a chat app using ollama. (design system)

humility. (secure... first mission: chem textbook. style.)

watch kaguya. tomorrow i will watch kaguya.

---

humility

---

research:

- opencode long running ...
- cursor docs
- anthropic docs

---

urgency: low.

importantance: medium.

connect/send

chatgpt: parallel

- seems it could not open multiple pages
- chatgpt did not finish loading resources, maybe. (observation: something is not loaded, leaving blank on the page.)
- but let's give it a try. why? because why not. and because i can.

connect/send

continue a previous session

i wont support it. since i dont want to do context engineering.

---

chem project:

prompt: style. detail level.

- refactor agent. think. design. abstract.
- test, docs
- secure
- more tools

decide style.

---

print some things.

fonts. use kaiti. use serif.

simple. black ink on white paper.

be elegant.

---

have a complex yet well defined coding task.

~~telegram copy~~ ~~snake game~~ ~~shoe brand~~

---

create a tool to analyze code base.

line numbers. not file sizes.

---

pick my code style.

e.g. snake case

---

design a better regex.

---

cross framework compilers

(a simplier and more abstract react)

---

2026.01.29

````
fira@Fira ~/Documents/f/humility/backend/compute/test
 % cd "/home/fira/Documents/f/humility/backend/compute/test/" && node 'chemistry.js'

--- run turn 0 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [ ] Chapter 4: Chemical Bonding
- [ ] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 3 completed
```: ping - 2026-01-28 11:35:47.686132+00:00

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 null
[skip] answer not string

--- run turn 1 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [ ] Chapter 4: Chemical Bonding
- [ ] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 3 completed
```: ping - 2026-01-28 11:35:47.686132+00:00

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 ```tool
write chapter_04_chemical_bonding.md
# Chapter 4: Chemical Bonding

## What Is Chemical Bonding?
Chemical bonding is the process by which atoms join together to form molecules or ionic compounds. Bonds form because atoms become more stable (lower energy) when their outer electron shells are filled.

## Valence Electrons
- **Valence electrons** are electrons in the outermost energy level of an atom.
- They determine how an atom reacts and what kind of bonds it forms.
- Atoms tend to gain, lose, or share electrons to achieve a full valence shell (often 8 electrons, known as the **octet rule**).

## Types of Chemical Bonds

### Ionic Bonds
- Form when electrons are **transferred** from one atom to another.
- Usually occur between metals and nonmetals.
- Result in charged particles called **ions**.
- Example: Sodium chloride (NaCl)

### Covalent Bonds
- Form when atoms **share** electrons.
- Usually occur between nonmetals.
- Can be:
  - **Single bond**: 1 pair of shared electrons
  - **Double bond**: 2 pairs
  - **Triple bond**: 3 pairs
- Example: Water (H₂O)

### Metallic Bonds
- Occur between metal atoms.
- Valence electrons move freely in a “sea of electrons.”
- Explain properties like conductivity and malleability.

## Polar and Nonpolar Bonds
- **Electronegativity** is an atom’s ability to attract electrons.
- If electrons are shared equally → **nonpolar covalent bond**
- If shared unequally → **polar covalent bond**
- Polar molecules have partial positive and negative ends.

## Bond Energy
- **Bond energy** is the amount of energy required to break a bond.
- Higher bond energy means a stronger bond.

## Key Takeaways
- Chemical bonds form to increase stability.
- The main bond types are ionic, covalent, and metallic.
- Electronegativity differences determine bond polarity.
```

```tool
write progress.md
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [ ] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 4 completed
```
[tool] extracted: [
  {
    name: 'write',
    file: 'chapter_04_chemical_bonding.md',
    body: '# Chapter 4: Chemical Bonding\n' +
      '\n' +
      '## What Is Chemical Bonding?\n' +
      'Chemical bonding is the process by which atoms join together to form molecules or ionic compounds. Bonds form because atoms become more stable (lower energy) when their outer electron shells are filled.\n' +
      '\n' +
      '## Valence Electrons\n' +
      '- **Valence electrons** are electrons in the outermost energy level of an atom.\n' +
      '- They determine how an atom reacts and what kind of bonds it forms.\n' +
      '- Atoms tend to gain, lose, or share electrons to achieve a full valence shell (often 8 electrons, known as the **octet rule**).\n' +
      '\n' +
      '## Types of Chemical Bonds\n' +
      '\n' +
      '### Ionic Bonds\n' +
      '- Form when electrons are **transferred** from one atom to another.\n' +
      '- Usually occur between metals and nonmetals.\n' +
      '- Result in charged particles called **ions**.\n' +
      '- Example: Sodium chloride (NaCl)\n' +
      '\n' +
      '### Covalent Bonds\n' +
      '- Form when atoms **share** electrons.\n' +
      '- Usually occur between nonmetals.\n' +
      '- Can be:\n' +
      '  - **Single bond**: 1 pair of shared electrons\n' +
      '  - **Double bond**: 2 pairs\n' +
      '  - **Triple bond**: 3 pairs\n' +
      '- Example: Water (H₂O)\n' +
      '\n' +
      '### Metallic Bonds\n' +
      '- Occur between metal atoms.\n' +
      '- Valence electrons move freely in a “sea of electrons.”\n' +
      '- Explain properties like conductivity and malleability.\n' +
      '\n' +
      '## Polar and Nonpolar Bonds\n' +
      '- **Electronegativity** is an atom’s ability to attract electrons.\n' +
      '- If electrons are shared equally → **nonpolar covalent bond**\n' +
      '- If shared unequally → **polar covalent bond**\n' +
      '- Polar molecules have partial positive and negative ends.\n' +
      '\n' +
      '## Bond Energy\n' +
      '- **Bond energy** is the amount of energy required to break a bond.\n' +
      '- Higher bond energy means a stronger bond.\n' +
      '\n' +
      '## Key Takeaways\n' +
      '- Chemical bonds form to increase stability.\n' +
      '- The main bond types are ionic, covalent, and metallic.\n' +
      '- Electronegativity differences determine bond polarity.'
  },
  {
    name: 'write',
    file: 'progress.md',
    body: '# Progress\n' +
      '\n' +
      '## High School Chemistry Reference\n' +
      '\n' +
      '- [x] Chapter 1: Introduction to Chemistry\n' +
      '- [x] Chapter 2: Atomic Structure\n' +
      '- [x] Chapter 3: Periodic Table\n' +
      '- [x] Chapter 4: Chemical Bonding\n' +
      '- [ ] Chapter 5: Chemical Reactions\n' +
      '- [ ] Chapter 6: Stoichiometry\n' +
      '- [ ] Chapter 7: States of Matter\n' +
      '- [ ] Chapter 8: Acids, Bases, and Salts\n' +
      '- [ ] Chapter 9: Thermochemistry\n' +
      '- [ ] Chapter 10: Solutions\n' +
      '\n' +
      '**Status:** In progress\n' +
      '**Last updated:** Chapter 4 completed'
  }
]
[tool] applied

--- run turn 2 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
chapter_04_chemical_bonding.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [ ] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 4 completed

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 ```tool
write chapter_05_chemical_reactions.md
# Chapter 5: Chemical Reactions

## What Is a Chemical Reaction?
A chemical reaction is a process in which one or more substances (reactants) are transformed into new substances (products). During a reaction, atoms are rearranged, but they are not created or destroyed.

## Reactants and Products
- **Reactants:** Substances present at the start of a reaction.
- **Products:** Substances formed as a result of the reaction.

Chemical equations use symbols and formulas to represent reactions:
\[
\text{Reactants} \rightarrow \text{Products}
\]

Example:
\[
2H_2 + O_2 \rightarrow 2H_2O
\]

## Law of Conservation of Mass
The total mass of reactants equals the total mass of products. This means chemical equations must be **balanced**, with the same number of each type of atom on both sides.

## Types of Chemical Reactions
Common reaction types include:
- **Synthesis (Combination):** Two or more substances form one product
  \( A + B \rightarrow AB \)
- **Decomposition:** One compound breaks down into simpler substances
  \( AB \rightarrow A + B \)
- **Single Replacement:** One element replaces another in a compound
  \( A + BC \rightarrow AC + B \)
- **Double Replacement:** Ions are exchanged between compounds
  \( AB + CD \rightarrow AD + CB \)
- **Combustion:** A substance reacts with oxygen, often producing heat and light

## Energy in Chemical Reactions
- **Exothermic reactions** release energy (often as heat).
- **Endothermic reactions** absorb energy from their surroundings.

Understanding chemical reactions is essential for studying energy changes, predicting products, and explaining everyday chemical processes.
```

```tool
write progress.md
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [x] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 5 completed
```
[tool] extracted: [
  {
    name: 'write',
    file: 'chapter_05_chemical_reactions.md',
    body: '# Chapter 5: Chemical Reactions\n' +
      '\n' +
      '## What Is a Chemical Reaction?\n' +
      'A chemical reaction is a process in which one or more substances (reactants) are transformed into new substances (products). During a reaction, atoms are rearranged, but they are not created or destroyed.\n' +
      '\n' +
      '## Reactants and Products\n' +
      '- **Reactants:** Substances present at the start of a reaction.\n' +
      '- **Products:** Substances formed as a result of the reaction.\n' +
      '\n' +
      'Chemical equations use symbols and formulas to represent reactions:\n' +
      '\\[\n' +
      '\\text{Reactants} \\rightarrow \\text{Products}\n' +
      '\\]\n' +
      '\n' +
      'Example:\n' +
      '\\[\n' +
      '2H_2 + O_2 \\rightarrow 2H_2O\n' +
      '\\]\n' +
      '\n' +
      '## Law of Conservation of Mass\n' +
      'The total mass of reactants equals the total mass of products. This means chemical equations must be **balanced**, with the same number of each type of atom on both sides.\n' +
      '\n' +
      '## Types of Chemical Reactions\n' +
      'Common reaction types include:\n' +
      '- **Synthesis (Combination):** Two or more substances form one product\n' +
      '  \\( A + B \\rightarrow AB \\)\n' +
      '- **Decomposition:** One compound breaks down into simpler substances\n' +
      '  \\( AB \\rightarrow A + B \\)\n' +
      '- **Single Replacement:** One element replaces another in a compound\n' +
      '  \\( A + BC \\rightarrow AC + B \\)\n' +
      '- **Double Replacement:** Ions are exchanged between compounds\n' +
      '  \\( AB + CD \\rightarrow AD + CB \\)\n' +
      '- **Combustion:** A substance reacts with oxygen, often producing heat and light\n' +
      '\n' +
      '## Energy in Chemical Reactions\n' +
      '- **Exothermic reactions** release energy (often as heat).\n' +
      '- **Endothermic reactions** absorb energy from their surroundings.\n' +
      '\n' +
      'Understanding chemical reactions is essential for studying energy changes, predicting products, and explaining everyday chemical processes.'
  },
  {
    name: 'write',
    file: 'progress.md',
    body: '# Progress\n' +
      '\n' +
      '## High School Chemistry Reference\n' +
      '\n' +
      '- [x] Chapter 1: Introduction to Chemistry\n' +
      '- [x] Chapter 2: Atomic Structure\n' +
      '- [x] Chapter 3: Periodic Table\n' +
      '- [x] Chapter 4: Chemical Bonding\n' +
      '- [x] Chapter 5: Chemical Reactions\n' +
      '- [ ] Chapter 6: Stoichiometry\n' +
      '- [ ] Chapter 7: States of Matter\n' +
      '- [ ] Chapter 8: Acids, Bases, and Salts\n' +
      '- [ ] Chapter 9: Thermochemistry\n' +
      '- [ ] Chapter 10: Solutions\n' +
      '\n' +
      '**Status:** In progress\n' +
      '**Last updated:** Chapter 5 completed'
  }
]
[tool] applied

--- run turn 3 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
chapter_04_chemical_bonding.md
chapter_05_chemical_reactions.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [x] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 5 completed

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 null
[skip] answer not string

--- run turn 4 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
chapter_04_chemical_bonding.md
chapter_05_chemical_reactions.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [x] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 5 completed

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 null
[skip] answer not string

--- run turn 5 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
chapter_04_chemical_bonding.md
chapter_05_chemical_reactions.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [x] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 5 completed

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 null
[skip] answer not string

--- run turn 6 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
chapter_04_chemical_bonding.md
chapter_05_chemical_reactions.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [x] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 5 completed

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 null
[skip] answer not string

--- run turn 7 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
chapter_04_chemical_bonding.md
chapter_05_chemical_reactions.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [x] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 5 completed

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 null
[skip] answer not string

--- run turn 8 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
chapter_04_chemical_bonding.md
chapter_05_chemical_reactions.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [x] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 5 completed

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 null
[skip] answer not string

--- run turn 9 ---
[prompt]

task:
create a comprehensive high school chemistry reference

rules:
- write markdown files
- write one small chapter per turn
- always update progress.md
- use tool code blocks only.

the language after three backticks should be tool.
the first line should start with write, and then the file.
the second to last lines will be the content.

- stop when finished

folder shape:
chapter_01_introduction_to_chemistry.md
chapter_02_atomic_structure.md
chapter_03_periodic_table.md
chapter_04_chemical_bonding.md
chapter_05_chemical_reactions.md
progress.md

progress:
# Progress

## High School Chemistry Reference

- [x] Chapter 1: Introduction to Chemistry
- [x] Chapter 2: Atomic Structure
- [x] Chapter 3: Periodic Table
- [x] Chapter 4: Chemical Bonding
- [x] Chapter 5: Chemical Reactions
- [ ] Chapter 6: Stoichiometry
- [ ] Chapter 7: States of Matter
- [ ] Chapter 8: Acids, Bases, and Salts
- [ ] Chapter 9: Thermochemistry
- [ ] Chapter 10: Solutions

**Status:** In progress
**Last updated:** Chapter 5 completed

tools:

- write: create/overwrite an entire file

example:

write hello_world.md
# hello world
hi everyone

output two tool code blocks:
- write the next small chapter
- write progress.md

[ask] answer:
 null
[skip] answer not string
^C%
````

got stuck. (a message not sent)

-> secure (get stuck -> stop and retry. e.g. network, ui quirks, wtf.)

---

serve/run:

- run db
- run ollama (if needed)

(idk. dont let it run these... maybe)

---

- connect frontend with backend.
- create the simple and extensible frontend.
- make the design more human. (gradient, shadow, ...)

---

create a design system...

protect intention.

- minimal. vercel. google material design. chatgpt. claude.
- playful. duolingo. chess. posthog.
- stylish. brawlstars. zenless zone zero. 
- peaceful. google reader. v2ex.
- human. iphone os 4.

let's stay with the minimal one. easier.

---

create the design system: read the chat, guidelines.

design a button first.

minimal style.

think what a chat app should have. only trust my intuition.

(believe: llms suck at design & archi. dont waste time. i mean open ended tasks with clear quality measurement. not math/algorithms, not literature.)

- think what a chat app should have.
- write down.
- give llms the context (components, design). generate everything.
- generate layout.
- iterate.
- (test, docs)

---
