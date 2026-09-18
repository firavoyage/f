peano arithmetic

**Peano Arithmetic (PA)** is <mark>a<span> </span><strong>formal axiomatic system</strong><span> </span>developed by Italian mathematician<span> </span><span><a rel="noopener" href="https://en.wikipedia.org/wiki/Giuseppe_Peano">Giuseppe Peano</a></span><span> </span>in 1889 to rigorously define the<span> </span><strong>natural numbers (<span><span><div><div><math xmlns="http://www.w3.org/1998/Math/MathML"></math></div><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" direction="ltr" width="0.795em" height="0.664em" viewBox="0 -0.657 0.795 0.664"><text fill="#E6E8F0" transform="translate(0,0)">𝐍</text></svg></div></span></span>)</strong><span> </span>and their properties</mark>. Instead of taking basic counting or math for granted, Peano arithmetic constructs the entire infinite chain of numbers from absolute scratch using basic logic and a "successor" function. [link](https://en.wikipedia.org/wiki/Peano%5Faxioms)

***

### 1. The Core Alphabet & Language

To understand how Peano arithmetic functions, it builds a universe using only four fundamental parts: [link](https://www.youtube.com/watch?v=hBaU5qJt8Cc\&t=48)

- **The Constant (0):** The definitive starting point of the sequence.
- **The Successor Function (S):** A operation where S(x) explicitly means "the number immediately following x".
- **Addition (+) & Multiplication (×):** Defined purely recursively on top of the successor function. [link](https://www.youtube.com/watch?v=6oUwfMa%5FdQ4\&t=212)

In this system, you do not write standard digits like 1, 2, 3. Instead, they are represented recursively: [link](https://www.youtube.com/watch?v=hBaU5qJt8Cc\&t=48)

- 1\
  ≡𝑆\
  (\
  0\
  )
- 2\
  ≡𝑆\
  (\
  𝑆\
  (\
  0\
  )\
  )
- 3\
  ≡𝑆\
  (\
  𝑆\
  (\
  𝑆\
  (\
  0\
  )\
  )\
  )\
  , and so forth.

***

### 2. The Five Core Peano Axioms

The fundamental bedrock of the standard model is governed by five distinct logical assertions: [link](https://www.britannica.com/science/Peano-axioms)

| Axiom Number | Formal Rule                    | Simple Meaning                                                                                                                                            |
| ------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Axiom 1**  | 0∈ℕ                            | **Zero is a natural number**. It establishes that the set is not empty.                                                                                   |
| **Axiom 2**  | ∀𝑥(𝑥∈ℕ⟹𝑆(𝑥)∈ℕ)                 | **Every number has a successor**. The chain of numbers continues forward infinitely.                                                                      |
| **Axiom 3**  | ∀𝑥(𝑆(𝑥)≠0)                     | **Zero is nobody's successor**. The sequence can never loop back around to hit 0.                                                                         |
| **Axiom 4**  | ∀𝑥∀𝑦(𝑆(𝑥)=𝑆(𝑦)⟹𝑥=𝑦)            | **The successor function is injective**. If two numbers look the same at the next step, they must be the same number.                                     |
| **Axiom 5**  | (𝑃(0)∧∀𝑥(𝑃(𝑥)⟹𝑃(𝑆(𝑥))))⟹∀𝑥𝑃(𝑥) | **The Principle of Mathematical Induction**. If a property is true for 0, and its truth for x guarantees it is true for S(x), it is true for all numbers. |

***

### 3. Defining Arithmetic Operations

Because Peano Arithmetic only natively understands "what comes next," operations like addition and multiplication must be strictly defined by recursive rules. [link](https://www.youtube.com/watch?v=6oUwfMa%5FdQ4\&t=212)

#### Addition (+)

Addition is defined by how it acts on 0 and on successors: [link](https://www.youtube.com/watch?v=6oUwfMa%5FdQ4\&t=212)

1. **Base Case:** a + 0 = a
2. **Recursive Step:** a + S(b) = S(a + b)

#### Multiplication (×)

Multiplication builds sequentially upon the addition rules: [link](https://math.stackexchange.com/questions/3270993/i-am-confused-about-how-we-should-state-the-peano-axioms)

1. **Base Case:** a × 0 = 0
2. **Recursive Step:**\
   𝑎\
   ×𝑆\
   (\
   𝑏\
   )\
   \=\
   (\
   𝑎\
   ×𝑏\
   )

+𝑎

Using these exact definitions, properties such as associativity (a + (b + c) = (a + b) + c), commutativity (a + b = b + a), and distributivity can be rigorously proven rather than just assumed. [link](https://www.geeksforgeeks.org/engineering-mathematics/peano-axioms-number-system-discrete-mathematics/)

***

### 4. First-Order vs. Second-Order (The Incompleteness Catch)

There is a massive distinction in modern mathematical logic between **First-Order PA** and **Second-Order PA**. [link](https://ncatlab.org/nlab/show/Peano+arithmetic)

- **Second-Order PA:** The original form Peano proposed allowed the Induction Axiom to quantify over _all possible subsets_ or properties of numbers. This completely locks down the system so that the only structure satisfying it is the standard natural numbers we use every day (\
  ℕ\
  ). [link](https://www.cs.toronto.edu/~sacook/csc438h/notes/page96.pdf)
- **First-Order PA:** To make the logic strictly computational, logicians use First-Order logic. However, you cannot quantify over "all properties" in first-order logic. Instead, it uses an infinite _axiom schema_—one distinct induction axiom for every single expressible formula. [link](https://abdul-quader.com/2017/06/19/what-is-peano-arithmetic/)

Because of this limitation, [Kurt Gödel](https://en.wikipedia.org/wiki/Kurt%5FG%C3%B6del) famously proved his **First Incompleteness Theorem** using First-Order Peano Arithmetic. He demonstrated that there will always be true statements about arithmetic that PA can express but can never formally prove. Furthermore, first-order logic permits **non-standard models** of arithmetic—bizarre, alternative mathematical universes that perfectly follow all the Peano rules but contain infinitely large "alien" numbers sitting past the regular timeline of

0

,

1

,

2

,

…

[link](https://abdul-quader.com/2017/06/19/what-is-peano-arithmetic/)

Would you like to see a step-by-step formal **proof of a basic property** using Peano arithmetic (like proving 1 + 1 = 2), or would you prefer to explore how **Gödel's Incompleteness Theorem** breaks the system?

- [link](https://en.wikipedia.org/wiki/Peano%5Faxioms)\
  Wikipedia\
  Peano axioms - Wikipedia\
  In mathematical logic, the Peano axioms (/piˈɑːnoʊ/; \[peˈaːno] ), also known as the Dedekind–Peano axioms or the Peano postulates,
- [link](https://ncatlab.org/nlab/show/Peano+arithmetic)\
  nLab\
  Peano arithmetic in nLab\
  1\. Idea. Peano arithmetic refers to a theory which formalizes arithmetic operations on the natural numbers ℕ \mathbb{N} and their ...
- [link](https://www.cs.toronto.edu/~sacook/csc438h/notes/page96.pdf)\
  University of Toronto\
  Peano Arithmetic\
  The Theory PA (Peano Arithmetic) The so-called Peano postulates for the natural numbers were introduced by Giuseppe Peano in 1889.

Show all

