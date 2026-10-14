<!-- yeah, and it must be infinitesimals first! sin(1/x) ~ 1/x isnt true. -->

# how to compare limit inf smalls

## how to compare limit inf smalls

To compare infinitely small quantities—known as **infinitesimals**—as they approach a limit (usually x → 0), mathematicians use <mark><strong>asymptotic comparison</strong></mark>. Instead of evaluating their absolute values, you analyze the **ratio of the functions** as they approach that limit. [link](https://math.stackexchange.com/questions/2504081/is-it-okay-to-ignore-small-numbers-in-limits-where-x-approaches-infinity)

Let α(x) and β(x) be two infinitesimals such that

lim𝑥→𝑥0

𝛼

(

𝑥

)

\=0

and

lim𝑥→𝑥0

𝛽

(

𝑥

)

\=0

. To compare them, you evaluate the limit of their ratio:

𝐿=lim𝑥→𝑥0𝛼(𝑥)𝛽(𝑥)

***

### 📊 Types of Infinitesimal Comparisons

Depending on the value of L, the relationship between the two infinitesimals falls into one of four categories:

| Value of Limit (L) | Mathematical Classification                             | Conceptual Meaning                                                                      | Notation / Example                    |
| ------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------- |
| **L = 0**          | α(x) is an infinitesimal of **higher order** than β(x). | α(x) shrinks to zero much faster than β(x).                                             | 𝛼(𝑥)=𝑜(𝛽(𝑥))_Example:_ lim𝑥→0𝑥2𝑥=0    |
| **L = ±∞**         | α(x) is an infinitesimal of **lower order** than β(x).  | α(x) shrinks to zero much slower than β(x).                                             | 𝛽(𝑥)=𝑜(𝛼(𝑥))_Example:_ lim𝑥→0𝑥𝑥3=∞    |
| **𝟎<‖𝑳‖<∞**        | α(x) and β(x) are of the **same order**.                | They shrink to zero at roughly the same proportional rate.                              | 𝛼(𝑥)=𝑂(𝛽(𝑥))_Example:_ lim𝑥→02𝑥𝑥=2    |
| **L = 1**          | α(x) and β(x) are **equivalent infinitesimals**.        | They behave almost identically near the limit. You can swap them in products/quotients. | α(x) ~ β(x)_Example:_ lim𝑥→0sin(𝑥)𝑥=1 |

***

### 🛠️ Common Tools for Evaluating the Comparison

When you try to calculate L, you will naturally encounter the indeterminate form

00

. Use these methods to resolve it:

1. **L'Hôpital's Rule:** Differentiate the numerator and the denominator until the limit can be directly evaluated. [link](https://xaktly.com/LimitComparisonTest.html)
2. **Taylor Series Expansions:** Expand functions (like\
   𝑒𝑥\
   ,\
   sin\
   (\
   𝑥\
   )\
   , or\
   ln\
   (\
   1

+𝑥\
)\
) around the limit point to quickly determine their dominant powers. [link](https://math.stackexchange.com/questions/2504081/is-it-okay-to-ignore-small-numbers-in-limits-where-x-approaches-infinity)
3\. **Known Equivalences (as x → 0):**

- sin\
  (\
  𝑥\
  )\
  ∼𝑥
- tan\
  (\
  𝑥\
  )\
  ∼𝑥
- 1\
  −cos\
  (\
  𝑥\
  )\
  ∼12𝑥2
- 𝑒𝑥\
  −1\
  ∼𝑥
- ln\
  (\
  1

+𝑥\
)\
∼𝑥

To give you a more tailored explanation, are you comparing infinitesimals to **solve a specific calculus limit problem**, or are you applying this to **infinite series convergence tests** (like the Limit Comparison Test)?

- [link](https://math.stackexchange.com/questions/2504081/is-it-okay-to-ignore-small-numbers-in-limits-where-x-approaches-infinity)\
  Mathematics Stack Exchange\
  Is it okay to "ignore" small numbers in limits where - x\
  Nov 4, 2017 — Consider the question of finding limx→0exp(x)−1−sin(x)x2. If you simply 'eliminate' small terms, then you would get exp(0)−1−sin(0...
- [link](https://www.youtube.com/watch?v=OijIDnd1cS0)\
  YouTube·Serpentine Integral\
  The Limit Comparison Test\
  Apr 2, 2021 — The limit comparison test allows the comparison of the convergent status of two series without needing to establish a size relatio...\
  3:51
- [link](https://www.youtube.com/watch?v=7xhd8kdQFic\&t=3)\
  YouTube·Dr. Trefor Bazett\
  Limit Comparison Test for Series\
  Feb 19, 2019 — The Limit Comparison Test aims to address these cases by comparing the limit of the ratio of their terms.\
  5m

Show all

## how to solve for the order

To find the exact **order of an infinitesimal**, you compare it against a standard baseline infinitesimal—usually

𝛽

(

𝑥

)

\=

(

𝑥

−𝑥0

)𝑘

(or simply

𝛽

(

𝑥

)

\=𝑥𝑘

when the limit is

𝑥

→

0

).

An infinitesimal

𝛼

(

𝑥

)

is said to be of **order**

**𝑘**

relative to

𝑥

if the limit of their ratio equals a finite, non-zero constant

𝐶

:

lim𝑥→0𝛼(𝑥)𝑥𝑘=𝐶(where0<|𝐶|<∞)

Here are the **three primary methods** used to solve for

𝑘

and the principal part

𝐶

⋅𝑥𝑘

.

***

### Method 1: Taylor / Maclaurin Series (Most Efficient)

The fastest way to find the order is to expand

𝛼

(

𝑥

)

into its Taylor series around the limit point. The **first non-zero term** gives you both the order and the coefficient.

#### 📝 Step-by-Step Example:

Find the order of

𝛼

(

𝑥

)

\=𝑥

−sin

(

𝑥

)

as

𝑥

→

0

.

1. **Substitute known expansions:** Recall the Maclaurin series for\
   sin\
   (\
   𝑥\
   )\
   :\
   sin(𝑥)=𝑥−𝑥33!+𝑥55!−…
2. **Plug it into your function:**\
   𝛼(𝑥)=𝑥−𝑥−𝑥36+𝑥5120−…
3. **Simplify to find the leading term:**\
   𝛼(𝑥)=16𝑥3−1120𝑥5+…
4. **Identify the lowest power:** The lowest exponent is

**3**\
.

- **Conclusion:**\
  𝛼\
  (\
  𝑥\
  )\
  is an infinitesimal of **order 3** (or cubic order), and its principal part is\
  16\
  𝑥3\
  .

***

### Method 2: Limit Algebraic Method

If you do not want to use Taylor series, you can solve for

𝑘

analytically by setting up the limit equation and finding which power of

𝑥

balancing it out to a non-zero number.

#### 📝 Step-by-Step Example:

Find the order of

𝛼

(

𝑥

)

\=1+𝑥2√

−1

as

𝑥

→

0

.

1. **Set up the ratio:**\
   lim𝑥→01+𝑥2√−1𝑥𝑘=𝐶
2. **Rationalize the numerator** to eliminate the indeterminate form:\
   lim𝑥→0(1+𝑥2√−1)(1+𝑥2√+1)𝑥𝑘(1+𝑥2√+1)=lim𝑥→0(1+𝑥2)−1𝑥𝑘(1+𝑥2√+1)=lim𝑥→0𝑥2𝑥𝑘(1+𝑥2√+1)
3. **Determine**

**𝑘**

**to prevent a 0 or**

**∞**

**limit:**

- If we choose

**𝑘**

**=2**\
, the\
𝑥2\
terms cancel out perfectly:\
lim𝑥→011+𝑥2√+1=11+1=12

- **Conclusion:** Because the limit is finite and non-zero (\
  𝐶\
  \=1\
  /2\
  ), the order is

**𝑘**

**=2**\
(quadratic order).

***

### Method 3: L'Hôpital's Rule (For Successive Derivatives)

If you cannot easily expand or rationalize a function, you can take successive derivatives until you get a non-zero value at the limit point. The number of times you must differentiate to get a non-zero constant is the **order**

**𝑘**

.

1. Find\
   𝛼′\
   (\
   𝑥\
   )\
   . If\
   𝛼′\
   (\
   0\
   )\
   ≠0\
   , order is **1**.
2. If\
   𝛼′\
   (\
   0\
   )\
   \=0\
   , find\
   𝛼′′\
   (\
   𝑥\
   )\
   . If\
   𝛼′′\
   (\
   0\
   )\
   ≠0\
   , order is **2**.
3. Repeat until\
   𝛼(𝑘)\
   (\
   0\
   )\
   ≠0\
   .

- _Note: Your constant_\
  _𝐶_\
  _will be_\
  _𝛼(𝑘)(0)𝑘!_\
  _._

***

### Summary Checklist

| If the leading term after simplification is... | ...The Order (𝑘) is: | ...The Principal Part is: |
| ---------------------------------------------- | -------------------- | ------------------------- |
| 𝐶⋅𝑥                                            | **1** (Linear)       | 𝐶⋅𝑥                       |
| 𝐶⋅𝑥2                                           | **2** (Quadratic)    | 𝐶⋅𝑥2                      |
| 𝐶⋅𝑥3                                           | **3** (Cubic)        | 𝐶⋅𝑥3                      |

Do you have a **specific function** you are trying to find the order for right now? If you share it, we can walk through it step-by-step using one of these methods.

## how to use known equivalences

Using **known equivalences** (also called asymptotic equivalents) is the fastest and most practical way to evaluate limits and find the order of infinitesimals. It allows you to **swap out complicated trigonometric or exponential terms for simple algebraic terms** when

𝑥

→

0

.

Here is the step-by-step guide on how to safely use them, what to avoid, and a complete reference cheat sheet.

***

### 🚀 The Substitution Rule

If

𝛼

(

𝑥

)

∼𝛼1

(

𝑥

)

and

𝛽

(

𝑥

)

∼𝛽1

(

𝑥

)

as

𝑥

→

𝑥0

, you can replace them **only in products, quotients, or arguments of functions**.

lim𝑥→𝑥0𝛼(𝑥)𝛽(𝑥)=lim𝑥→𝑥0𝛼1(𝑥)𝛽1(𝑥)

#### 📝 Example 1: Simple Fraction

Find the limit and order of

lim𝑥→0

sin(3𝑥)ln(1+2𝑥)

.

1. **Identify the equivalences:** As\
   𝑥\
   →\
   0\
   , we know that\
   sin\
   (\
   𝑢\
   )\
   ∼𝑢\
   and\
   ln\
   (\
   1

+𝑢\
)\
∼𝑢\
.
2\. **Apply to your functions:** Substitute\
𝑢\
\=3𝑥\
and\
𝑢\
\=2𝑥\
:

- sin\
  (\
  3𝑥\
  )\
  ∼3𝑥
- ln\
  (\
  1

+2𝑥\
)\
∼2𝑥
3\. **Substitute and evaluate:**\
lim𝑥→03𝑥2𝑥=32

- **Conclusion:** The limit is\
  𝟑/𝟐\
  . The order is **1** (linear) because the powers of\
  𝑥\
  match.

***

### ⚠️ The Golden Rule: Never Substitute in Subtraction!

The most common mistake calculus students make is replacing functions with their equivalents when they are being **subtracted or added**. Doing this can accidentally cancel out the dominant terms and yield a wrong answer (like

0

).

#### ❌ The Wrong Way:

Find

lim𝑥→0

𝑥−sin(𝑥)𝑥3

.

- If you blindly substitute\
  sin\
  (\
  𝑥\
  )\
  ∼𝑥\
  , you get:\
  𝑥−𝑥𝑥3\
  \=0𝑥3\
  \=0\
  . **This is completely wrong!**

#### The Right Way (Higher-Order Adjustments):

When terms subtract and cancel each other out, you must use a more precise equivalence from a **Taylor Series** to see what remains:

- sin\
  (\
  𝑥\
  )\
  ∼𝑥\
  −𝑥36
- Plug it back in:\
  𝑥\
  −\
  𝑥\
  −𝑥36\
  \=𝑥36
- Evaluate the original limit:\
  lim𝑥→0\
  𝑥36𝑥3\
  \=16\
  .

***

### 📋 Standard Equivalences Cheat Sheet (as

𝑢

→

0

)

Whenever the expression inside the function approaches zero (

𝑢

→

0

), you can swap the expressions below:

| Original Function | Asymptotic Equivalent (∼) |
| ----------------- | ------------------------- |
| sin(𝑢)            | 𝑢                         |
| tan(𝑢)            | 𝑢                         |
| arcsin(𝑢)         | 𝑢                         |
| arctan(𝑢)         | 𝑢                         |
| 𝑒𝑢−1              | 𝑢                         |
| ln(1+𝑢)           | 𝑢                         |
| 1−cos(𝑢)          | 12𝑢2                      |
| (1+𝑢)𝑚−1          | 𝑚𝑢                        |
| 1+𝑢√−1            | 12𝑢                       |

***

### 🧠 Advanced Trick: Composite Functions

The variable does not have to be a lonely "

𝑥

". The equivalent works for **any block of algebra**, as long as that entire block shrinks to

0

.

#### 📝 Example 2:

Find the equivalent of

𝑓

(

𝑥

)

\=ln

(

1

+sin2

(

𝑥

)

)

as

𝑥

→

0

.

1. Look at the outer layer:\
   ln\
   (\
   1

+𝑢\
)\
∼𝑢\
. Here,\
𝑢\
\=sin2\
(\
𝑥\
)\
. Since\
sin2\
(\
0\
)\
\=0\
, this is allowed.\
ln(1+sin2(𝑥))∼sin2(𝑥)
2\. Look at the remaining inner layer: We know\
sin\
(\
𝑥\
)\
∼𝑥\
, so squaring both sides gives\
sin2\
(\
𝑥\
)\
∼𝑥2\
.
3\. Combine them:\
𝑓(𝑥)∼𝑥2

- **Conclusion:**\
  𝑓\
  (\
  𝑥\
  )\
  behaves exactly like\
  𝑥2\
  near zero. It is an infinitesimal of **order 2**.

Would you like to try **solving a limit problem together** using these cheat sheet rules, or would you like to see how to handle an equivalence problem where

𝑥

approaches **infinity** instead of zero?

## when can you sub

You can safely substitute known equivalences **only when the expression is structuralized as a product or a quotient** (multiplication or division) inside a limit, or when it forms the **entire argument** of another outer function.

Mathematically, if f(x) ~ f₁(x) and g(x) ~ g₁(x) as x → 0, substitution is valid in the following scenarios:

### 🟩 1. Inside Products and Quotients (Always Safe)

If the infinitesimals are multiplying or dividing each other, you can swap them out individually.

- **Multiplication:**\
  lim\
  \[𝑓\
  (\
  𝑥\
  )\
  ⋅𝑔\
  (\
  𝑥\
  )]\
  \=lim\
  \[𝑓1\
  (\
  𝑥\
  )\
  ⋅𝑔1\
  (\
  𝑥\
  )]
- **Division:**\
  lim\
  𝑓(𝑥)𝑔(𝑥)\
  \=lim\
  𝑓1(𝑥)𝑔1(𝑥)

> **Example:** Find
>
> lim𝑥→0
>
> sin(4𝑥)⋅tan(2𝑥)𝑥2
>
> .\
> Since
>
> sin
>
> (
>
> 4𝑥
>
> )
>
> ∼4𝑥
>
> and
>
> tan
>
> (
>
> 2𝑥
>
> )
>
> ∼2𝑥
>
> , you can substitute them directly because they are multiplying:
>
> lim𝑥→0(4𝑥)⋅(2𝑥)𝑥2=lim𝑥→08𝑥2𝑥2=8

***

### 🟩 2. Nested Inside Powers, Roots, or Logarithms (Safe)

If an equivalence is raised to a power, inside a root, or sits inside another single-term function, you can substitute it.

- **Powers:**\
  lim\
  \[\
  𝑓\
  (\
  𝑥\
  )\
  ]𝑛\
  \=lim\
  \[\
  𝑓1\
  (\
  𝑥\
  )\
  ]𝑛
- **Roots:**\
  lim\
  𝑓(𝑥)√\
  \=lim\
  𝑓1(𝑥)√

> **Example:** Find the equivalent of
>
> ln(1+𝑥3)√
>
> as x → 0.\
> First substitute the inside:
>
> ln
>
> (
>
> 1
>
> +𝑥3
>
> )
>
> ∼𝑥3
>
> .\
> Now substitute it into the root:
>
> ln(1+𝑥3)√
>
> ∼𝑥3√
>
> \=𝑥3/2
>
> .

***

### ⚠️ 3. Inside Addition or Subtraction (Highly Dangerous / Usually Forbidden)

You **cannot** blindly substitute equivalents if the terms are separated by a plus (+) or minus (-) sign, **unless** the dominant terms do not completely cancel each other out.

- **When it fails (The Trap):** If substituting causes the leading terms to equal zero (f₁(x) - g₁(x) = 0), you have destroyed the lower-order terms that actually determine the limit. You must use **Taylor Series** instead.
- **When it works (The Exception):** If you add or subtract two infinitesimals of _completely different orders_, the higher-order one shrinks so fast it becomes irrelevant, and you can drop it.
  - _Example:_ As x → 0, the expression\
    (\
    𝑥2

+𝑥\
)\
is dominated by x. Thus,\
(\
𝑥2

+𝑥\
)\
∼𝑥\
.

***

### 🔍 Quick Visual Decision Guide

To visualize how different infinitesimals approach zero at varying speeds, we can look at a plot of standard functions. Functions that shrink faster have a higher order.

The visual chart shows that near the limit point (0,0), x³ approaches zero much faster than x², which approaches zero faster than x. When you substitute blindly during subtraction, you risk throwing away these critical speed differences.

***

### 💡 The Ultimate Safety Checklist

Before you make a substitution, ask yourself these two questions:

1. **Is the term a factor?** Is it multiplying or dividing the rest of the problem? If **yes**, substitute away.
2. **If it's adding/subtracting, does it cancel out?** If you substitute equivalents into a subtraction expression and get 0, **stop immediately**. Undo the substitution and use a Taylor series expansion to include more terms.

Would you like to see a specific example of a problem where substitution **fails** vs where it **works** side-by-side to practice spotting the difference?

## when can you sub in addition or subtraction

You can substitute an equivalence in an addition or subtraction expression <mark><strong>if and only if the principal (leading) terms do not completely cancel each other out.</strong></mark>

If you make a substitution and the resulting leading terms vanish to zero, you have accidentally destroyed the hidden, higher-order infinitesimals that actually determine the limit.

Here is the exact rule breakdown for when it is **safe** versus when it is **forbidden**.

***

### 🟩 1. SAFE: The Terms Do Not Cancel Out

If you substitute the equivalents and the terms combine into a **non-zero** result, the substitution is 100% legal. This usually happens when you combine infinitesimals of completely different orders.

#### 📝 Example (Different Orders):

Find the equivalent of

𝛼

(

𝑥

)

\=sin

(

𝑥

)

-

(

1

−cos

(

𝑥

)

)

as

𝑥

→

0

.

1. Identify the individual equivalents:

- sin\
  (\
  𝑥\
  )\
  ∼𝑥\
  (Order 1)
- 1\
  −cos\
  (\
  𝑥\
  )\
  ∼12𝑥2\
  (Order 2)

2. Substitute them into the addition:\
   𝛼(𝑥)∼𝑥+12𝑥2
3. Keep only the dominant term (the lowest power of\
   𝑥\
   as\
   𝑥\
   →\
   0\
   ):\
   𝑥+12𝑥2∼𝑥

- **Why this worked:** The linear term\
  𝑥\
  and the quadratic term\
  12\
  𝑥2\
  did not cancel each other out. The linear term cleanly dominated the expression.

***

### ❌ 2. FORBIDDEN: The Terms Cancel Out Completely

If you substitute equivalents and your algebra leaves you with **zero**, the substitution is invalid. This happens when two functions share the exact same leading-order behavior.

#### 📝 Example (The Trap):

Find the limit of

lim𝑥→0

tan(𝑥)−sin(𝑥)𝑥3

.

- **If you try to substitute:** We know\
  tan\
  (\
  𝑥\
  )\
  ∼𝑥\
  and\
  sin\
  (\
  𝑥\
  )\
  ∼𝑥\
  . If you substitute them into the subtraction, you get:\
  𝑥−𝑥=0
- **The Failure:** Because the\
  𝑥\
  terms cancelled out, you missed the microscopic gap between\
  tan\
  (\
  𝑥\
  )\
  and\
  sin\
  (\
  𝑥\
  )\
  .

Expand image

Use arrow keys to adjust value.

0:00/0:55

Audio made with Google AI. Image licensed by Google.

The graphic above illustrates why this happens: a simple first-order linear approximation (like the line

𝑦

\=𝑥

) splits off from the actual functions very quickly. To bridge the gap when subtraction causes a cancellation, you must use **higher-order Taylor polynomials** to capture the next non-zero terms:

- tan\
  (\
  𝑥\
  )\
  ∼𝑥

+13𝑥3

- sin\
  (\
  𝑥\
  )\
  ∼𝑥\
  −16𝑥3

Now, subtract the higher-order polynomials safely:

𝑥+13𝑥3−𝑥−16𝑥3=13+16𝑥3=12𝑥3

Substitute this back into the original limit problem:

lim𝑥→012𝑥3𝑥3=12

***

### 💡 General Rule of Thumb for Subtraction

When dealing with

lim

\[

𝑓

(

𝑥

)

−𝑔

(

𝑥

)

]

, you can use basic equivalences **only if**

lim

𝑓(𝑥)𝑔(𝑥)

≠1

. If that ratio equals 1, the functions are too close together, their first terms will cancel, and you must use a Taylor series.

Would you like to try **evaluating a new subtraction limit problem** to see if you can spot whether it is safe or forbidden to substitute?

## when do you say the principal (leading) terms do not completely cancel each other out

You say the principal (leading) terms **do not completely cancel each other out** <mark>when you replace the functions with their standard equivalents and the resulting expression<span> </span><strong>does not simplify to zero.</strong></mark>

Mathematically, if you are looking at

𝑓

(

𝑥

)

−𝑔

(

𝑥

)

as

𝑥

→

0

, and you replace them with their equivalents

𝑓

(

𝑥

)

∼𝑎𝑥𝑛

and

𝑔

(

𝑥

)

∼𝑏𝑥𝑚

, they **do not** cancel out if:

1. **They have different powers** (\
   𝑛\
   ≠𝑚\
   ).
2. **They have the same power but different coefficients** (\
   𝑛\
   \=𝑚\
   but\
   𝑎\
   ≠𝑏\
   ).

Here is how to spot the difference instantly using basic algebra:

***

### 🟩 Case 1: Different Powers (Safe to Sub)

If the two functions shrink at completely different speeds, the slower one survives and dictates the limit.

- **The Expression:**\
  sin\
  (\
  𝑥\
  )\
  −\
  (\
  1\
  −cos\
  (\
  𝑥\
  )\
  )
- **Substitute Equivalents:**\
  sin\
  (\
  𝑥\
  )\
  ∼𝑥\
  (power of 1) and\
  (\
  1\
  −cos\
  (\
  𝑥\
  )\
  )\
  ∼12𝑥2\
  (power of 2).
- **The Result:**\
  𝑥−12𝑥2
- **Did they cancel?** **No.** You cannot subtract an\
  𝑥2\
  term from an\
  𝑥\
  term to get zero. The principal linear term\
  𝑥\
  survives completely untouched.

***

### 🟩 Case 2: Same Powers, Different Coefficients (Safe to Sub)

If the functions shrink at the same speed but have different scales, they will reduce to a smaller, non-zero version of themselves.

- **The Expression:**\
  sin\
  (\
  3𝑥\
  )\
  −sin\
  (\
  2𝑥\
  )
- **Substitute Equivalents:**\
  sin\
  (\
  3𝑥\
  )\
  ∼3𝑥\
  and\
  sin\
  (\
  2𝑥\
  )\
  ∼2𝑥\
  .
- **The Result:**\
  3𝑥−2𝑥=𝑥
- **Did they cancel?** **No.** While they both shared a power of 1, the coefficients were different (\
  3\
  −2\
  \=1\
  ). The result is a clean, non-zero\
  𝑥\
  .

***

### ❌ Case 3: Complete Cancellation (Forbidden to Sub)

This is exactly when you **cannot** use basic substitution. It happens when the functions have the exact same power _and_ the exact same coefficient.

- **The Expression:**\
  tan\
  (\
  𝑥\
  )\
  −sin\
  (\
  𝑥\
  )
- **Substitute Equivalents:**\
  tan\
  (\
  𝑥\
  )\
  ∼𝑥\
  and\
  sin\
  (\
  𝑥\
  )\
  ∼𝑥\
  .
- **The Result:**\
  𝑥−𝑥=0
- **Did they cancel?** **Yes, completely.** Because the result is zero, it tells you that\
  tan\
  (\
  𝑥\
  )\
  and\
  sin\
  (\
  𝑥\
  )\
  are perfectly matched in their first-order behavior. The actual answer relies on microscopic higher-order terms (\
  𝑥3\
  ) that you just wiped out.

***

### 🔍 Quick Summary Table

| If your substituted algebra looks like... | Do they completely cancel? | Is it safe to substitute? | What to do next:             |
| ----------------------------------------- | -------------------------- | ------------------------- | ---------------------------- |
| 𝑥−2𝑥=−𝑥                                   | **No**                     | **Yes** 🟩                | Keep solving with −𝑥.        |
| 𝑥−𝑥3                                      | **No**                     | **Yes** 🟩                | Keep the lower power (𝑥).    |
| 𝑥−𝑥=0                                     | **Yes**                    | **No** ❌                 | **Stop.** Use Taylor series. |

Would you like to analyze a specific expression—like

**ln**

**(**

**1**

**+𝑥**

**)**

**−𝑒𝑥**

**+1**

—to see if its leading terms cancel out or stay alive?

## what if their equivalents have many elements

If the equivalent of a function contains **many elements** (a multi-term polynomial from a Taylor series), the same core rule applies: <mark><strong>you only care about the lowest power of<span> </span><span><span><div><div><math xmlns="http://www.w3.org/1998/Math/MathML"></math></div><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" direction="ltr" width="0.559em" height="0.489em" viewBox="0 -0.479 0.559 0.489"><text fill="#E6E8F0" transform="translate(0,0)">𝑥</text></svg></div></span></span><span> </span>that survives after subtraction.</strong></mark>

When a basic substitution gives you a total cancellation (

𝑥

−𝑥

\=0

), you must replace each function with its multi-term Taylor series. You then look at the resulting polynomial. The **first non-zero term with the lowest power** becomes your new, true leading term.

Here is exactly how to handle it step-by-step.

***

### 🛠️ The 3-Step Process for Multi-Term Elements

1. **Expand further:** Replace your functions with 2 or 3 terms of their Taylor expansions.
2. **Distribute and group:** Group the terms by their powers of\
   𝑥\
   (\
   𝑥\
   terms together,\
   𝑥2\
   terms together,\
   𝑥3\
   terms together, etc.).
3. **Identify the survivor:** Watch the lowest powers cancel out. The **very first power that does not cancel out** is your new leading term. You can safely drop every higher power after it.

***

### 📝 Walkthrough Example:

ln

(

1

+𝑥

)

−𝑒𝑥

+1

Let's test the expression you might see in a limit problem as

𝑥

→

0

:

𝑓(𝑥)=ln(1+𝑥)−𝑒𝑥+1

#### Step 1: Try a 1-term substitution (and watch it fail)

- Known 1-term equivalents:\
  ln\
  (\
  1

+𝑥\
)\
∼𝑥\
and\
𝑒𝑥\
∼1

+𝑥\
.

- Plug them in:\
  (𝑥)−(1+𝑥)+1=𝑥−1−𝑥+1=0
- **Verdict:** Complete cancellation. We must expand to more elements.

#### Step 2: Use multi-term equivalents

Let's grab the first few terms of each Taylor series:

- ln\
  (\
  1

+𝑥\
)\
\=𝑥\
−𝑥22

+𝑥33\
−…

- 𝑒𝑥\
  \=1

+𝑥

+𝑥22

+𝑥36

+…

#### Step 3: Substitute and combine

Plug these multi-term chunks back into the expression:

𝑓(𝑥)=𝑥−𝑥22+𝑥33−1+𝑥+𝑥22+𝑥36+1

Now, carefully group them by their powers of

𝑥

:

- **Constants:**\
  −1

+1\
\=0\
_(Cancelled)_

- **𝑥**

**terms:**\
𝑥\
−𝑥\
\=0\
_(Cancelled)_

- **𝑥2**

**terms:**\
−12𝑥2\
−12𝑥2\
\=\
−1𝑥2

**(Survived!)**

#### Step 4: Drop the remaining higher powers

Even though we have

𝑥3

terms left over (

13

𝑥3

−16𝑥3

\=16𝑥3

), they shrink to zero much faster than

𝑥2

as

𝑥

→

0

. They are mathematically irrelevant.

- **Conclusion:** The principal leading term that did not completely cancel out is\
  −𝑥2\
  . Therefore, the true equivalent is:\
  ln(1+𝑥)−𝑒𝑥+1∼−𝑥2

The expression is an infinitesimal of **order 2**.

***

### 💡 Summary Rule for "Many Elements"

When you subtract multi-term expansions, the terms cancel out in order from left to right (lowest power to highest power). **Stop writing down terms the exact moment you hit a power bracket that does not subtract to zero.** That bracket is your final answer.

Would you like to try finding the surviving leading term for an expression involving **trig functions**, like

cos

(

𝑥

)

−𝑒𝑥2

, to see how the powers interact?

## can you simply omit elements of non lowest power

<mark><strong><span>Yes, you can absolutely omit them.</span></strong></mark> In fact, mathematically, you _must_ omit them when writing down the final asymptotic equivalent or determining the order of the infinitesimal.

As

𝑥

→

0

, higher powers of

𝑥

shrink to zero **infinitely faster** than lower powers. Because they vanish so quickly, they become completely negligible compared to the lowest surviving power.

***

### 🔍 How Mathematicians Justify Omiting Terms

To safely omit higher powers, mathematicians write them using **Little-o notation** (

𝑜

(

𝑥𝑛

)

), which literally means _"terms that shrink much faster than_

_𝑥𝑛_

_"_.

Let's look at the previous example:

𝑓(𝑥)=−𝑥2+16𝑥3−124𝑥4

As

𝑥

→

0

, we group all the higher powers together and rewrite them as

𝑜

(

𝑥2

)

:

𝑓(𝑥)=−𝑥2+𝑜(𝑥2)

By definition, when you write an asymptotic equivalence (

∼

), you drop the Little-o part entirely:

𝑓(𝑥)∼−𝑥2

***

### ⚠️ The One Major Catch: Don't Omit Them Too Early!

While you can omit higher powers at the _end_ of your calculation, **you cannot always omit them at the very beginning** if you are performing subtraction.

#### ❌ Omiting too early (Incorrect):

Find the leading term of

tan

(

𝑥

)

−sin

(

𝑥

)

.

- If you look at their full series expansions:
  - tan\
    (\
    𝑥\
    )\
    \=𝑥

+13𝑥3

+215𝑥5

+…

- sin\
  (\
  𝑥\
  )\
  \=𝑥\
  −16𝑥3

+1120𝑥5\
−…

- If you say, _"I will omit the higher powers right away and only look at the lowest power (_\
  _𝑥_\
  _) for both,"_ you get:\
  𝑥−𝑥=0
- You just got zero, which is wrong.

#### Omiting at the right time (Correct):

Keep the higher powers _until_ you perform the subtraction, then omit whatever is left over:

𝑥+13𝑥3+…−𝑥−16𝑥3+…=12𝑥3+1140𝑥5+…

Now that the subtraction is done, **this** is the moment you cleanly omit the higher powers (

𝑥5

,

𝑥7

, etc.).

- **Final Equivalent:**\
  12\
  𝑥3

***

### 💡 The Golden Rule

You can instantly omit higher powers during **multiplication and division**. But during **addition and subtraction**, keep the higher powers alive until the algebraic dust settles. Once you find the single lowest power that survived the subtraction, throw everything else away.

Now that you know when it's safe to omit terms, would you like to practice evaluating a **full limit fraction** where you get to use this omission rule in both the numerator and the denominator?


# all known infinitesimals equivalences

In calculus and mathematical analysis, two functions f(x) and g(x) are called **equivalent infinitesimals** as x → 0 if both approach 0 and their ratio converges to 1: [link](https://math.fel.cvut.cz/en/mt/txtb/5/txe3bb5l.htm)

lim𝑥→0𝑓(𝑥)𝑔(𝑥)=1⟺𝑓(𝑥)∼𝑔(𝑥)

Replacing a complicated expression with its equivalent infinitesimal is one of the most powerful shortcuts for evaluating limits involving fractions, products, or radicals. [link](https://math.fel.cvut.cz/en/mt/txtb/5/txe3bb5l.htm)

***

### 📋 Master Table of Equivalent Infinitesimals (as x → 0)

The following list organizes all widely known equivalent infinitesimals by function category. [link](http://www.vaxasoftware.com/doc%5Feduen/mat/infiequi.pdf)

| Function Group                | Complex Expression | Equivalent Infinitesimal (~) |
| ----------------------------- | ------------------ | ---------------------------- |
| **Algebraic & Radicals**      | (1+𝑥)𝑎−1           | a ⋅ x                        |
|                               | 1+𝑥√−1             | 12𝑥                          |
|                               | 1+𝑥3√−1            | 13𝑥                          |
| **Trigonometric**             | sin(𝑥)             | x                            |
|                               | tan(𝑥)             | x                            |
|                               | arcsin(𝑥)          | x                            |
|                               | arctan(𝑥)          | x                            |
|                               | 1−cos(𝑥)           | 12𝑥2                         |
|                               | 𝑥−sin(𝑥)           | 16𝑥3                         |
|                               | tan(𝑥)−𝑥           | 13𝑥3                         |
|                               | tan(𝑥)−sin(𝑥)      | 12𝑥3                         |
| **Hyperbolic**                | sinh(𝑥)            | x                            |
|                               | tanh(𝑥)            | x                            |
| **Exponential & Logarithmic** | 𝑒𝑥−1               | x                            |
|                               | 𝑎𝑥−1               | 𝑥ln(𝑎)                       |
|                               | ln(1+𝑥)            | x                            |
|                               | log𝑎(1+𝑥)          | 𝑥ln(𝑎)                       |

***

### 🔄 Generalization via Substitution

If α(x) is any structural expression that approaches 0 as x → x₀, you can swap x for α(x). For instance: [link](https://math.fel.cvut.cz/en/mt/txtb/5/txe3bb5l.htm)

- As x → 0:\
  sin\
  (\
  5𝑥2\
  )\
  ∼5𝑥2
- As x → 1:\
  ln\
  (\
  𝑥\
  )\
  \=ln\
  (\
  1

<!---->

-

(\
𝑥\
−1\
)\
)\
∼𝑥\
−1

- As x → 0:\
  𝑒tan(𝑥)\
  −1\
  ∼tan\
  (\
  𝑥\
  )\
  ∼𝑥

***

### ⚠️ Crucial Rules & Pitfalls

1. **Multiplication and Division Only:** You can freely swap a function with its equivalent if it scales the _entire_ numerator or the _entire_ denominator of a fraction. [link](https://math.fel.cvut.cz/en/mt/txtb/5/txe3bb5l.htm)
2. **Do Not Substitute in Additions/Subtractions:** If you replace functions that are subtracted, you risk canceling out the primary term and getting a wrong limit.

- _Example:_ Evaluating\
  lim𝑥→0\
  tan(𝑥)−sin(𝑥)𝑥3\
  .
- If you blindly replace both with x, you get\
  𝑥−𝑥𝑥3\
  \=0\
  (Wrong!).
- Using the specific higher-order table equivalence above:\
  tan\
  (\
  𝑥\
  )\
  −sin\
  (\
  𝑥\
  )\
  ∼12𝑥3\
  , which yields the correct limit:\
  12𝑥3𝑥3\
  \=12\
  . [link](https://math.fel.cvut.cz/en/mt/txtb/5/txe3bb5l.htm)

Would you like me to demonstrate how to use these equivalences to solve a **specific limit problem** step-by-step, or do you need the **Taylor series expansion** proofs behind these formulas?

- [link](https://math.fel.cvut.cz/en/mt/txtb/5/txe3bb5l.htm)\
  České vysoké učení technické v Praze\
  Math Tutor - Functions - Methods Survey - Limits\
  replacement degree must avoid complete cancellation of terms; requires precise degree selection if replacing parts outside full nu...
- [link](http://www.vaxasoftware.com/doc%5Feduen/mat/infiequi.pdf)\
  VaxaSoftware\
  Table of equivalent infinitesimals - VaxaSoftware\
  Table of equivalent infinitesimals x → 0 x → ∞ x x sin. ≅ x x. 1. 1 sin. ≅ x x tan. ≅ x x. 1. 1 tan. ≅ x x arcsin. ≅ x.
- [link](https://www.researchgate.net/publication/390627526%5FProperties%5Fof%5FEquivalent%5FInfinitesimals%5Fand%5Fthe%5FSame-Order%5FCombination)\
  ResearchGate\
  (PDF) Properties of Equivalent Infinitesimals and the Same ...\
  In this article we denote equivalent innitesimals by the symbol “∼”, and we can write this74 formula longer if we wish.

Show all
