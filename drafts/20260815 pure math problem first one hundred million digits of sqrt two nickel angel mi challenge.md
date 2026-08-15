# how to get all 100m numbers of sqrt2

1:01 AM

You can get 100 million digits of

2√

by **downloading a precomputed file** or **generating them on your computer**. Modern hardware can compute this in seconds. [link](https://www.quora.com/How-long-would-it-take-for-a-supercomputer-to-calculate-the-value-of-pi-%CF%80-to-1-million-decimal-places)

### Option 1: Download Precomputed Files (Fastest)

The easiest way is to download text files from existing datasets.

- Use the open-source [Sharabaddin Square Root of 2 GitHub Repository](https://github.com/Sharabaddin/square%5Froot%5Fof%5F2).
- This repository hosts digits up to 1 billion.
- Download the compressed text file directly.
- Extract it to get the raw numbers. [link](https://github.com/Sharabaddin/square%5Froot%5Fof%5F2)

### Option 2: Compute Locally via y-cruncher (Recommended)

You can generate the digits yourself using the industry-standard multi-threaded math program [y-cruncher](https://en.wikipedia.org/wiki/Y-cruncher).

- Download the tool from the official [Numberworld y-cruncher page](https://www.numberworld.org/y-cruncher/).
- Launch the executable file.
- Select the option to compute a constant.
- Choose **Square Root of 2**.
- Enter `100,000,000` for the digit count.
- Select your preferred decimal format output.
- The program writes a `.txt` file automatically. [link](https://www.numberworld.org/y-cruncher/)

### Option 3: Generate via Python Script

If you want to use code, Python's native `decimal` library can handle large scales.

- Note that this method requires a lot of RAM.
- It will take a few minutes to complete.

python

```
import decimal

# Set precision to 100 million places
decimal.getcontext().prec = 100000000

# Compute square root of 2
sqrt_2 = decimal.Decimal(2).sqrt()

# Save to a text file
with open("sqrt2_100m.txt", "w") as f:
    f.write(str(sqrt_2))
```

Use code with caution.

If you plan to use these numbers, let me know:

- What **programming language** or **software tool** are you using?
- What **specific task** or analysis are you performing?

I can provide optimized code to parse the 100 MB text file efficiently.

- [link](https://www.reddit.com/r/matheducation/comments/1fp17iw/our%5Fteacher%5Fasked%5Fus%5Fto%5Fmemorize%5Fsqrt2%5Fto%5Fsqrt10/)\
  Reddit\
  Our teacher asked us to memorize sqrt(2) to sqrt(10) to 3 dec places. Can ...\
  For a reason, first of all, I used to agree that number sense is useless. I said this for decades. I would say, I'm good at math b...
- [link](https://www.numberworld.org/y-cruncher/)\
  Numberworld.org\
  y-cruncher - A Multi-Threaded Pi Program - Numberworld.org\
  Downloading any of these files constitutes as acceptance of the license agreement. Because of virus scanner false positives, the W...
- [link](https://www.numberworld.org/y-cruncher/records.html)\
  Numberworld.org\
  Records set by y-cruncher - Numberworld.org\
  Records Set by y-cruncher. (Last updated: December 11, 2025). Rules: Ever since y-cruncher was unlocked in 2010 to allow anybody t...

Show all

# how to calculate the first 100m digits of sqrt2 fastest

1:02 AM

To calculate the first 100 million digits of

2√

as fast as possible, you must use a **subquadratic division-free iteration algorithm** paired with **Fast Fourier Transform (FFT)** multiplication.

The absolute fastest approach relies on the **Newton-Raphson method** or the **Goldschmidt algorithm** to find

1

/2√

first, followed by a final multiplication.

***

### 1. The Fastest Mathematical Algorithm

The fastest method does not calculate

2√

directly. Instead, it calculates the reciprocal square root

𝑥

\=1

/2√

using **Newton's Method** and then multiplies the result by 2. This avoids costly division operations.

The Newton-Raphson iteration formula for

1

/2√

is:

𝑥𝑛+1=𝑥𝑛(3−2𝑥2𝑛)2

#### Why this is the fastest:

- **Quadratic Convergence**: The number of correct digits **doubles** with every single iteration.
- **Division-Free**: The formula only uses multiplication and bit-shifting (division by 2), which are computationally cheap.
- **Final Step**: Once\
  𝑥\
  converges to 100 million digits, you get\
  2√\
  by simply doubling it:\
  2√\
  \=2\
  ×\
  (\
  1\
  /2√\
  )\
  .

***

### 2. Computational Infrastructure Required

At 100 million digits, standard schoolbook multiplication (

𝑂

(

𝑁2

)

) would take days. You must use advanced computational libraries to handle the scale.

```
[Your Algorithm]
       │
       ▼
[Schönhage–Strassen / O(N log N log log N)] ──► Reduces 100M digit multiplication to seconds.
       │
       ▼
[GMP / MPFR / y-cruncher Libraries] ───────► Optimizes CPU cache, registers, and multi-threading.
```

- **FFT Multiplication**: You must use the **Schönhage–Strassen algorithm** or **Number Theoretic Transform (NTT)** for multiplication. This drops the time complexity from\
  𝑂\
  (\
  𝑁2\
  )\
  to\
  𝑂\
  (\
  𝑁\
  log\
  𝑁\
  log\
  log\
  𝑁\
  )\
  .
- **Memory Footprint**: 100 million digits require roughly **50 MB** of raw text storage, but the operational memory (RAM) needed during FFT multiplication will peak around **1 GB to 2 GB**.

***

### 3. Step-by-Step Implementation Strategy

1. **Set Precision**: Initialize your floating-point environment to handle 332,192,810 bits (which equals 100,000,000 decimal digits).
2. **Initial Guess**: Start with a close approximation, such as\
   𝑥0\
   \=0.70710678\
   .
3. **Iterate with Doubling Precision**: Do not run the full 100-million-digit precision from the start. Start your first iteration at 8 digits, then 16, 32, 64, etc. Scale your FFT size dynamically.
4. **Final Iteration**: The second-to-last iteration will compute 50 million digits. The final iteration will leap directly to 100 million digits.
5. **Multiply by 2**: Multiply your final\
   1\
   /2√\
   value by 2 to get\
   2√\
   .

***

### 4. Existing Software Tools (The "Don't Reinvent the Wheel" Path)

If your goal is simply to get the digits in the absolute fastest wall-clock time on standard hardware, do not write the code from scratch. Use world-record-holding utilities:

- **y-cruncher**: Written by Alexander Yee, [y-cruncher](http://www.numberworld.org/y-cruncher/) is a highly optimized multi-threaded program that can calculate 100 million digits of\
  2√\
  in **under 1 second** on a modern multi-core consumer CPU using Newton's method and custom FFT libraries.
- **GNU Multiple Precision Arithmetic Library (GMP)**: If writing custom C/C++ code, link against the [GMP Library](https://gmplib.org/). It automatically switches to FFT multiplication at this scale and features highly optimized assembly loops for AMD and Intel architectures.

***

### 5. Verification

To ensure your calculation is correct, you must always run a verification step using a different algorithm. The standard practice is to use the **Borchardt-Gauss (AGM)** iteration or simply square your final result (

2√

×2√

) and verify that it equals

2.00000

.

.

.

up to 100 million decimal places.

Would you like a optimized **Python/GMP script** using `gmpy2` to execute this calculation on your machine, or do you want to explore the **C-based FFT implementation** details?

- [link](https://en.wikipedia.org/wiki/Gauss%E2%80%93Legendre%5Falgorithm)\
  \
  Wikipedia\
  Gauss–Legendre algorithm\
  {\displaystyle 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998625\dots } The algorithm has qua...\\

- [link](https://inbetweennames.net/blog/2021-05-06-i76rsqrt/)\
  \
  Shane Peelar\
  Fast reciprocal square root... in 1997?!\
  the exponent bits for the initial guess is determined through a formula that involves only addition and division by 2 (bit shift)\\

- [link](https://www.craig-wood.com/nick/articles/pi-machin/)\
  \
  www.craig-wood.com\
  Pi - Machin\
  Secondly that to calculate 10 times as many digits it takes 100 times as long. This means that our algorithm scales as O(n²) where...\\

Show all

## is that the fastest proven way

is that the fastest proven way

1:03 AM

**Yes, mathematically speaking, this is the asymptotically fastest proven class of algorithms.**

When calculating constants to millions or billions of digits, speed is defined by **Computational Complexity Theory** using Big-O notation. There is no known algorithm that can calculate the digits of

2√

in a lower complexity class than what was described.

***

### The Theoretical Speed Limit:

𝑂

(

𝑀

(

𝑁

)

)

In computer science, the absolute speed ceiling for computing a square root to

𝑁

digits is **directly tied to the time it takes to multiply two**

**𝑵**

**-digit numbers**, denoted as

𝑀

(

𝑁

)

. [link](https://math.stackexchange.com/questions/599854/computing-square-root-faster-than-newton-s-method)

Thanks to a mathematical proof by Richard Brent, the time complexity of computing a square root is exactly:

Time=𝐶⋅𝑀(𝑁)

_(Where_

_𝐶_

_is a small constant, usually between 1.5 and 5 depending on the exact iteration formula used)._ [link](https://math.stackexchange.com/questions/599854/computing-square-root-faster-than-newton-s-method)

Because you cannot compute a square root without performing at least one final multiplication of that size, **no algorithm can ever beat**

**𝑶**

**(**

**𝑴**

**(**

**𝑵**

**)**

**)**

.

***

### Why Other Methods Aren't Faster

You might wonder why higher-order methods or other algebraic loops aren't faster. Mathematically, it comes down to a trade-off between the **rate of convergence** and the **cost per iteration**:

- **Cubic/Quartic Convergence (e.g., Halley's Method)**: Algorithms like [Halley's Method](https://en.wikipedia.org/wiki/Square%5Froot%5Falgorithms) look faster on paper because they triple or quadruple the number of correct digits per step instead of just doubling them. However, they require multiple massive multiplications and divisions per iteration. The extra work per step completely wipes out the savings of having fewer steps. [link](https://math.stackexchange.com/questions/296102/fastest-square-root-algorithm)
- **Digit-by-Digit (Long Division Style)**: This has a linear complexity of\
  𝑂\
  (\
  𝑁2\
  )\
  . While easy to do by hand, at 100 million digits, it would take your computer days or weeks to finish because it does not scale well. [link](https://www.youtube.com/watch?v=6evC4klO%5FlI\&t=1407)
- **The Division-Free Newton Loop**: Because it avoids arbitrary-precision division entirely (converting it to a few bit-shifts and standard multiplications), its constant factor\
  𝐶\
  is incredibly low. [link](https://cr.yp.to/bib/1994/karp.pdf)

***

### Where the "Real" Speed Battle Is Fought

Since the core math has a proven theoretical limit, the actual race to be the fastest comes down to **optimizing the multiplication engine**

**𝑴**

**(**

**𝑵**

**)**

and hardware execution:

1. **The Schönhage–Strassen Algorithm**: For decades, this was the fastest proven multiplication algorithm with a complexity of\
   𝑂\
   (\
   𝑁\
   log\
   𝑁\
   log\
   log\
   𝑁\
   )\
   .
2. **The Harvey-Hoeven Algorithm**: In 2019, mathematicians proved that multiplication could theoretically be done in\
   𝑂\
   (\
   𝑁\
   log\
   𝑁\
   )\
   . However, this algorithm only becomes faster than older methods at astronomical scales (numbers larger than the number of atoms in the universe), so it is never used for a 100-million-digit run.
3. **Hardware-Level Parallelism**: World-record software like `y-cruncher` wins not because it discovered a new mathematical formula, but because it optimizes how data flows through your CPU's L1/L2/L3 caches and leverages advanced multi-threading instruction sets (like Intel/AMD's AVX-512) to execute the FFT multiplications simultaneously.

If you are interested in seeing how this behaves in practice, I can provide a **Python script** using the `gmpy2` library so you can time the Newton-Raphson method directly on your own hardware. Would you like to try that?

- [link](https://math.stackexchange.com/questions/296102/fastest-square-root-algorithm)\
  Mathematics Stack Exchange\
  Fastest Square Root Algorithm - Mathematics Stack Exchange\
  8 Answers. ... If you use Halley's method, you exhibit cubic convergence! This method is second in the class of Householder's meth...
- [link](https://math.stackexchange.com/questions/599854/computing-square-root-faster-than-newton-s-method)\
  Mathematics Stack Exchange\
  Computing square root faster than Newton’s method\
  1 Answer. ... Edit: Regarding the relation to Newton, Zimmermann wrote in the original article: The current asymptotically fastest...
- [link](https://www.youtube.com/watch?v=6evC4klO%5FlI\&t=1407)\
  YouTube·MindYourDecisions\
  How to Calculate the Square Root of Any Number, Digit by Digit Method\
  i will conclude the video with a bit of history a justification of why this method works. and a little bit of perspective. on unde...\
  8m

Show all

## multiplication algorithm

multiplication algorithm

2:07 AM

At 100 million digits, the fastest practical multiplication algorithm is the **Fast Fourier Transform (FFT)**.

***

### 🚀 The Big-O Hierarchy of Multiplication

As numbers grow, computers switch to more complex algorithms.

- **Schoolbook**:\
  𝑂\
  (\
  𝑁2\
  )\
  .
  - Slowest.
  - Used for tiny numbers.
- **Karatsuba**:\
  𝑂\
  (\
  𝑁1.58\
  )\
  .
  - Divide-and-conquer approach.
  - Used for thousands of digits.
- **Toom-Cook**:\
  𝑂\
  (\
  𝑁1.465\
  )\
  .
  - Generalization of Karatsuba.
  - Used for tens of thousands of digits.
- **Schönhage–Strassen (FFT)**:\
  𝑂\
  (\
  𝑁\
  log\
  𝑁\
  log\
  log\
  𝑁\
  )\
  .
  - Uses complex numbers.
  - Practically dominates at 100M digits.
- **Harvey-Hoeven**:\
  𝑂\
  (\
  𝑁\
  log\
  𝑁\
  )\
  .
  - Mathematically fastest proven algorithm.
  - Impractical at 100M digits.
  - Requires astronomically large numbers.

***

### 🧬 How FFT Multiplication Works

FFT multiplication converts numbers into polynomials to bypass standard digit-by-digit multiplication.

```
[Large Number A] ──────► Convert to Polynomial A(x) ──────┐
                                                           ▼
                                                    [Apply Fast Fourier Transform (FFT)]
                                                           │
                                                           ▼
                                               [Pointwise Multiplication] (Lightning Fast)
                                                           │
                                                           ▼
                                                [Inverse FFT + Carry Handling]
                                                           │
                                                           ▼
[Large Number B] ──────► Convert to Polynomial B(x) ──────┘ [Final Result Engine]
```

1. **Polynomial Conversion**: Digits become coefficients of a giant polynomial.
2. **Forward FFT**: Coefficients shift from the time domain to the frequency domain.
3. **Pointwise Multiplication**: The computer multiplies frequencies in linear\
   𝑂\
   (\
   𝑁\
   )\
   time.
4. **Inverse FFT**: Frequencies translate back into standard numbers.
5. **Carry Resolution**: The algorithm processes carries to fix place values.

***

### 🛠️ Hardware Realities at 100M Digits

In the real world, the best mathematical algorithm must match the physical hardware.

- **Cache Locality**: Numbers must fit into CPU L3 cache levels.
- **NTT Variant**: Many programs use the **Number Theoretic Transform (NTT)**.
- **No Roundoff Error**: NTT replaces complex floats with integers modulo a prime.
- **Vectorization**: Modern engines use Intel/AMD **AVX-512** or ARM **Neon** instructions.
- **Parallelization**: The FFT split allows multiple CPU cores to work simultaneously.

***

I can show you exactly how to **benchmark these different algorithms** in code, or we can dive deeper into **how the Number Theoretic Transform avoids floating-point errors**. Which path would you like to explore next?

- [link](https://dev.to/frorning/big-decimal-arithmetic-across-programming-languages-bridging-the-gap-n71)\
  \
  DEV Community\
  Big Decimal Arithmetic Across Programming Languages: Bridging the Gap\
  Classical Multiplication: Used for smaller numbers; scales as ( O ( n 2 ) ) (O(n^2)) ( O( n 2)) in time complexity.\\

- [link](https://mattermodeling.stackexchange.com/questions/1355/did-the-2019-discovery-of-on-logn-multiplication-have-a-practical-outcome)\
  \
  Matter Modeling Stack Exchange\
  Did the 2019 discovery of O(N log(N)) multiplication have a practical outcome?\
  (1960) Karatsuba multiplication. O( n 1.58): Faster than naive multiplication after n gets ~ 10 96. (1963-2005) Toom-Cook-Knuth. O...\\

- [link](https://cs.stackexchange.com/questions/140881/how-do-computers-perform-operations-on-numbers-that-are-larger-than-64-bits)\
  \
  Computer Science Stack Exchange\
  How do computers perform operations on numbers that are larger than 64 bits?\
  In fact it ( Karatsuba algorithm ) achieves O( n 1.58). After Karatsuba, there are several other algorithms which get the asymptot...

Show all

## what is fft or ntt

what is fft or ntt

2:10 AM

### The Quick Answer

The **Fast Fourier Transform (FFT)** is <mark>a mathematical algorithm that converts a sequence of data (like a 100-million-digit number) into its frequency components</mark>. In computing, this conversion turns slow multiplication into lightning-fast, element-by-element multiplication.

The **Number Theoretic Transform (NTT)** is a specialized version of the FFT. Instead of using decimal numbers and trigonometry, it uses integers and clock arithmetic (modular arithmetic). This prevents the computer from making rounding errors when processing millions of digits.

***

### 🔍 How They Work (A Simple Analogy)

Imagine you have two massive towers built out of Lego blocks (your numbers). Multiplying them normally means rubbing every single block of Tower A against every single block of Tower B—a slow, grueling process.

```
[Standard Multiplication]
Tower A ──(Rub every block together)──► Tower B  = Hours of work

[FFT / NTT Multiplication]
Tower A ──► Melt into Liquid A ──┐
                                 ├─► Mix Liquids (Instant) ─► Freeze into New Tower
Tower B ──► Melt into Liquid B ──┘
```

The FFT and NTT are like magical blenders:

1. **Transform**: They melt both Lego towers into liquid forms (frequencies/remainders).
2. **Pointwise Multiply**: Mixing the two liquids together is instant and effortless.
3. **Inverse Transform**: The computer pours the mixed liquid into a mold to instantly freeze it into the final, giant Lego tower (the answer).

***

### 🆚 FFT vs. NTT: The Crucial Difference

| Feature             | FFT (Fast Fourier Transform)                                                       | NTT (Number Theoretic Transform)                     |
| ------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Math Foundation** | Complex numbers (with decimals and imaginary i)                                    | Integers only (modular arithmetic / remainders)      |
| **Trigonometry**    | Uses sine and cosine waves                                                         | Uses roots of unity modulo a prime number            |
| **Precision**       | ⚠️ **Has Rounding Errors**: Floating-point decimals can get blurry at 100M digits. | **Perfect Precision**: Integers never lose accuracy. |
| **Hardware**        | Runs on the CPU's Floating-Point Unit (FPU)                                        | Runs on the CPU's standard Integer ALU               |

***

### 🛠️ Why NTT Wins for 100-Million-Digit Math

When calculating

2√

to 100 million digits, **even a tiny rounding error will ruin the entire calculation**.

Standard computers store decimal numbers with a maximum of 53 bits of precision (about 15 to 17 decimal places). If you try to run a standard FFT on a 100-million-digit number, the computer will eventually round a `.9999999999...` to the wrong integer, corrupting your data.

**NTT solves this by ditching decimals entirely.** It performs all calculations inside a strict mathematical box using a large prime number (like p = 2⁶⁴ - 2³² + 1). Because every step results in a perfect integer remainder, there is zero rounding, zero blurriness, and **100% absolute accuracy**.

***

Would you like to see a **simplified code example** of how NTT uses remainders to multiply numbers, or should we look at how **y-cruncher bridges FFT and NTT** for maximum hardware speed?

- [link](https://www.prosoundweb.com/analyzer-mythbusting-clearing-up-common-points-of-confusion-with-dual-channel-fft-analyzers/)\
  \
  ProSoundWeb\
  Analyzer Mythbusting: Clearing Up Common Points Of Confusion With Dual-Channel FFT Analyzers\
  Many resources conflate these terms. Here's the scoop: FFT stands for Fast Fourier Transform, which is a mathematical operation th...\\

- [link](https://cvarin.github.io/CSci-Survival-Guide/fft.html)\
  \
  GitHub Pages documentation\
  Fast Fourier transform\
  The FFT is a special category of algorithms developed to compute the mathematical Fourier transform very quickly. We will not go i...\\

- [link](https://eprint.iacr.org/2019/1079.pdf)\
  \
  Cryptology ePrint Archive\
  When NTT Meets Karatsuba: Preprocess-then-NTT Technique Revisited\
  The Number Theoretic Transform (NTT)\[3] is a specialized version of the Fast Fourier Transform (FFT) over a finite field. mod q. N...

Show all

## pros cons

When multiplying massive 100-million-digit numbers, choosing between **Standard Floating-Point FFT** and **Number Theoretic Transform (NTT)** comes down to a trade-off between hardware speed and mathematical accuracy.

***

### 1. Standard Floating-Point FFT

This method uses complex numbers (real and imaginary parts) using sine and cosine waves to perform the transformation.

- **⚡ Pro: Blazing Fast on Hardware.** Modern CPUs have massive, dedicated hardware units (FPUs) optimized solely for floating-point math. Instruction sets like AVX-512 or ARM Neon can crunch floats simultaneously.
- **🌐 Pro: Highly Accessible.** Almost every standard scientific library and GPU is built to handle FFT natively out of the box.
- **❌ Con: Fatal Rounding Errors.** Computers cannot store infinitely long decimals perfectly. As your digits approach 100 million, the floating-point errors accumulate. Eventually, a number like `4.000000000002` gets rounded incorrectly, ruining the final carry step and destroying your entire\
  2√\
  calculation.
- **❌ Con: Double Memory Consumption.** To fight rounding errors, you must use 64-bit or 128-bit floats just to store what could otherwise be stored in a smaller integer, wasting RAM.

***

### 2. Number Theoretic Transform (NTT)

This method replaces complex decimals with integers and performs all calculations using clock arithmetic (modular arithmetic) relative to a giant prime number.

- **🎯 Pro: Perfect Mathematical Precision.** Because it uses integers and remainders, there are absolutely zero decimals and zero rounding errors. The answer is guaranteed to be 100% accurate, no matter how many millions of digits you calculate.
- **💾 Pro: Memory Efficient.** It maps numbers directly to the machine's native integer size (like 64-bit integers), using significantly less RAM than high-precision floating-point arrays.
- **❌ Con: Slower Raw Computation.** Standard integer execution units on CPUs do not have the same massive, wide vector pipelines that floating-point units enjoy.
- **❌ Con: Prime Number Restrictions.** You cannot just use any numbers; you must choose very specific "NTT-friendly" prime numbers to act as your modular base, making the software implementation highly complex.

***

### Summary: How World-Record Programs Win

Because both have distinct flaws, world-record programs like **y-cruncher** or the **GMP Library** do not just pick one. They use a hybrid approach:

```
                  [ 100M Digit Multiplication ]
                                │
       ┌────────────────────────┴────────────────────────┐
       ▼                                                 ▼
[ Small to Medium Scales ]                     [ Extreme Multi-Million Scales ]
   Use Floating-Point FFT                         Use Split-NTT (Multi-Prime)
   -> Maximize raw hardware speed.                -> Ensure 100% absolute accuracy.
   -> Keep error within safety limits.            -> Run multiple primes in parallel.
```

If you want to see how this translates into actual compute times, we can look at the **hardware specs and RAM benchmarks** required to run these algorithms at scale, or I can share a **benchmark code snippet**. What would be most helpful?

## how does it work

To understand exactly how the **Number Theoretic Transform (NTT)** multiplies two massive 100-million-digit numbers without making mistakes, we have to look under the hood.

Instead of traditional long division or decimals, NTT relies entirely on **polynomials** and **modular arithmetic (clock arithmetic)**.

***

### Step 1: Turn the Numbers into Polynomials

Computers cannot process a 100-million-digit number all at once. NTT starts by chopping the massive numbers into smaller chunks (like 4 digits each) and turning them into the coefficients of a giant polynomial.

Let’s use two small numbers for this example: **1,234** and **5,678**.\
We can break them up by base

10

(or base

10

,

000

in a real system):

- 𝐴\
  \=1234\
  ⟶𝐴\
  (\
  𝑥\
  )\
  \=1𝑥3

+2𝑥2

+3𝑥

+4

- 𝐵\
  \=5678\
  ⟶𝐵\
  (\
  𝑥\
  )\
  \=5𝑥3

+6𝑥2

+7𝑥

+8

If we plug

𝑥

\=10

into these polynomials, we get our original numbers back. Multiplying the two numbers is now mathematically identical to multiplying these two polynomials.

***

### Step 2: The Magic "Clock Arithmetic" Box (The Modulo)

To prevent numbers from growing infinitely and causing floating-point rounding errors, NTT forces all calculations to happen inside a mathematical "box" using a specific large prime number (

𝑃

). Every time a number gets too big, it wraps around like hours on a clock.

For an NTT to work, the prime

𝑃

must be very specific. It must fit the formula:

𝑃=𝑘⋅2𝑛+1

For 100 million digits, a program might use a 64-bit prime like

𝑃

\=264

−232

+1

.

***

### Step 3: Finding the Roots of Unity

In a standard Floating-Point FFT, the algorithm samples the polynomials at points along a circular wave using trigonometry (

cos

𝜃

+𝑖

sin

𝜃

).

Because NTT cannot use decimals, it replaces trigonometry with an integer called a **primitive root of unity** (

𝜔

). Inside our modulo clock arithmetic,

𝜔

behaves exactly like a spinning circle: if you multiply it by itself

𝑁

times, it wraps perfectly around the clock and lands exactly on

1

.

***

### Step 4: The Core NTT Multiplication Loop

Now that the stage is set, the actual multiplication happens in 4 fast phases:

```
[Polynomial A(x) & B(x)]
          │
          ▼
1. [Forward NTT] ───────► Evaluates polynomials at the integer "circle" points.
          │
          ▼
2. [Pointwise Match] ───► Multiplies corresponding points instantly: C(k) = A(k) * B(k)
          │
          ▼
3. [Inverse NTT] ───────► Converts the results back into polynomial coefficients.
          │
          ▼
4. [Carry Resolution] ──► Solves the math back into base-10 digits.
          │
          ▼
   [Final Result]
```

1. **Forward NTT**: The algorithm uses the primitive root\
   𝜔\
   to rapidly evaluate the polynomials\
   𝐴\
   (\
   𝑥\
   )\
   and\
   𝐵\
   (\
   𝑥\
   )\
   at\
   𝑁\
   different points. Because it uses the "divide-and-conquer" butterfly structure of the FFT, this takes\
   𝑂\
   (\
   𝑁\
   log\
   𝑁\
   )\
   steps instead of\
   𝑂\
   (\
   𝑁2\
   )\
   .
2. **Pointwise Multiplication**: The computer takes the evaluated points of\
   𝐴\
   and multiplies them directly by the points of\
   𝐵\
   . This is just basic, isolated integer multiplication, taking a linear\
   𝑂\
   (\
   𝑁\
   )\
   time.
3. **Inverse NTT**: The computer runs the transform in reverse to turn those multiplied points back into the final coefficients of our result polynomial,\
   𝐶\
   (\
   𝑥\
   )\
   .
4. **Carry Resolution**: The computer evaluates\
   𝐶\
   (\
   𝑥\
   )\
   at\
   𝑥\
   \=10\
   (or whatever base was chosen). Since coefficients like\
   3\
   ×4\
   might equal\
   12\
   , the computer passes the\
   1\
   to the next column and keeps the\
   2\
   , finalizing the exact digits.

***

### Summary: Why it Never Fails

Because every addition and multiplication in this entire process results in a pure integer remainder modulo

𝑃

, **the CPU never handles a single decimal point**. There is no rounding, no approximation, and no data loss.

When the inverse transform finishes, the resulting integer string is 100% mathematically flawless—allowing world-record programs to calculate

2√

or

𝜋

to billions of places with total certainty.

- [link](https://www.facebook.com/TED/videos/the-1-math-lesson-youve-never-heard-of-before/2239654829580712/)\
  \
  Facebook\
  You'll wish you'd known this super specific math trick in high school. | TED\
  Jan 31, 2019 — If the leading digits multiply to four or smaller, then we get the smaller size. So 100 and something times 40-something will defi...\\

- [link](https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/)\
  \
  Cloudflare Blog\
  A (Relatively Easy To Understand) Primer on Elliptic Curve Cryptography\
  Oct 24, 2013 — We can treat the numbers like the numbers on an analog clock. Any calculation that results in a number larger than the maximum get...\\

## how does it work

To see exactly how this works under the hood, let’s trace a complete, simplified example of multiplying two small numbers using the **Number Theoretic Transform (NTT)**.

We will multiply

**12**

by

**23**

(which equals

**276**

) inside a small mathematical "clock box" so you can see every step without decimals.

***

### Step 1: Pick the "Clock Box" (The Prime and Root)

For an NTT to work, we need a prime number (

𝑃

) and a special integer called a primitive root (

𝜔

) that acts like a spinning circle.

- We will use the prime

**𝑃**

**=17**\
. All numbers will wrap around\
17\
.

- We will use a sequence length of

**𝑁**

**=4**\
(since our numbers have two digits and the result will have three or four).

- Our root of unity will be

**𝜔**

**=4**\
, because in modulo 17 arithmetic,\
44\
\=256\
, and\
256\
÷17\
leaves a remainder of exactly

**1**\
. It completes a perfect circle.

***

### Step 2: Turn the Numbers into Polynomials

We split our digits up and turn them into polynomial coefficients:

- 12\
  ⟶𝐀=\[𝟐,𝟏,𝟎,𝟎]\
  _(representing_\
  _1𝑥_\
  _+2_\
  _)_
- 23\
  ⟶𝐁=\[𝟑,𝟐,𝟎,𝟎]\
  _(representing_\
  _2𝑥_\
  _+3_\
  _)_

***

### Step 3: The Forward NTT (The Melting Step)

Now we evaluate these arrays at our moving "clock points" (

𝜔0

,

𝜔1

,

𝜔2

,

𝜔3

) modulo 17.

- In modulo 17, our points are:

**1**

**,**

**4**

**,**

**16**

**,**

**13**\
.

By running the NTT formula (which plugs these points into our polynomials), our numbers "melt" into frequency coefficients:

- Transform of A:\
  𝐀𝐧𝐭𝐭=\[𝟑,𝟔,𝟏,𝟏𝟓]
- Transform of B:\
  𝐁𝐧𝐭𝐭=\[𝟓,𝟏𝟏,𝟏,𝟏𝟐]

***

### Step 4: Pointwise Multiplication (The Instant Mix)

Instead of multiplying every digit by every other digit, we now multiply the corresponding positions of our two transformed arrays directly. This is a simple, linear step:

- Position 0:\
  3\
  ×5\
  \=15
- Position 1:\
  6\
  ×11\
  \=66\
  ⟶\
  (remainder after dividing by 17)\
  ⟶15
- Position 2:\
  1\
  ×1\
  \=1
- Position 3:\
  15\
  ×12\
  \=180\
  ⟶\
  (remainder after dividing by 17)\
  ⟶10

Our mixed result array is:

𝐂𝐧𝐭𝐭=\[𝟏𝟓,𝟏𝟓,𝟏,𝟏𝟎]

.

***

### Step 5: The Inverse NTT (The Freezing Step)

We now run the transform completely in reverse to turn those mixed frequencies back into standard polynomial coefficients.

After running the Inverse NTT formula on

\[

15

,

15

,

1

,

10

]

modulo 17, the computer outputs the result coefficients:

- Result Polynomial:\
  𝐂=\[𝟔,𝟕,𝟐,𝟎]

***

### Step 6: Carry Resolution (The Final Base-10 Answer)

The coefficients of our final array

\[

6

,

7

,

2

,

0

]

represent the digits of our answer, reading from right to left (ones column, tens column, hundreds column):

```
  2    7    6
[Hundreds] [Tens] [Ones]
```

Our final answer is **276**.

### Why this scales to 100M Digits

Because every single operation in Steps 3, 4, and 5 resulted in whole integer remainders, the CPU never encountered a single decimal point.

When scaled to 100 million digits, the math remains identical. The only differences are that the array length (

𝑁

) becomes millions of elements long, and the prime number (

𝑃

) is a massive 64-bit integer, allowing the computer to process millions of digits simultaneously with zero rounding errors.

***

Would you like to see how world-record programs handle **multiple primes at once** to prevent numbers from wrapping around too early, or are you ready to look at a **practical script** that executes this?

- [link](https://www.youtube.com/watch?v=DI1Q6Dv3zaE)\
  \
  YouTube\
  Mod-01 Lec-23 Discrete Fourier Transform I - YouTube\
  Feb 11, 2014 — Mod-01 Lec-23 Discrete Fourier Transform I the requirements are first that n has a multiplicative inverse that is there exists m i...\\

## how does forward ntt work

The **Forward NTT** is the "divide-and-conquer" core of the algorithm. It is the exact step that takes a 100-million-digit number and "melts" it into a frequency array in

𝑂

(

𝑁

log

𝑁

)

time instead of O(N²).

It achieves this speed by using a mathematical shortcut called the **Cooley-Tukey Butterfly Radix-2 algorithm** combined with modular arithmetic.

***

### 1. The Core Trick: Even vs. Odd Splitting

If you want to evaluate a 100-million-degree polynomial normally, you have to plug in millions of points one by one. This is too slow.

The Forward NTT solves this by splitting the giant polynomial A(x) into two smaller halves: one containing only the **even** coefficients and one containing only the **odd** coefficients.

𝐴(𝑥)=𝐴𝑒𝑣𝑒𝑛(𝑥2)+𝑥⋅𝐴𝑜𝑑𝑑(𝑥2)

#### Why do this?

Because of the way the "modular clock" works, when you square the points (x²), the positive and negative sides of the clock mirror each other perfectly. **This means evaluating the even and odd halves once automatically gives you the answer for two different points at the same time.**

***

### 2. The "Butterfly" Operation

This splitting process happens recursively. The algorithm breaks the number down into halves, quarters, eighths, and so on, until it is working with pairs of single digits.

At the lowest level, it performs a **Butterfly Operation**. It takes two inputs (u and v), multiplies one by a tracking factor (w, called the twiddle factor), and generates two outputs simultaneously using simple addition and subtraction:

```
Inputs               Butterfly Loop (Modulo P)             Outputs
  u ───────────────────► (u + v*w) % P ───────────────────► Output 1
              ╳
  v ───► [* w] ────────► (u - v*w) % P ───────────────────► Output 2
```

Because subtraction can result in a negative number, the computer immediately corrects it by adding the prime: `(u - v*w + P) % P`. This ensures the number always stays inside the safe integer clock box.

***

### 3. Step-by-Step Execution Diagram

For an array of 8 elements, the Forward NTT arranges the data using **Bit-Reversal Permutation** (shuffling the digits so the pairs line up perfectly) and then passes them through log(N) stages of butterflies:

```
Stage 0 (Digits)        Stage 1 (2-point)       Stage 2 (4-point)       Stage 3 (Final NTT)
  A[0] ───────────────┐ ┌───────────────┐       ┌───────────────┐       ┌───────────────┐
                      ├─┤  2-unit wave  ├───────┤  4-unit wave  ├───────┤  8-unit wave  │
  A[4] ───────────────┘ └───────────────┘       │               │       │               │
                                                │               │       │               │
  A[2] ───────────────┐ ┌───────────────┐       │               │       │               │
                      ├─┤  2-unit wave  ├───────┘               │       │               │
  A[6] ───────────────┘ └───────────────┘                       │       │               │
                                                                ├───────┤  Final Array  │
  A[1] ───────────────┐ ┌───────────────┐                       │       │  (Melted data)│
                      ├─┤  2-unit wave  ├───────┐               │       │               │
  A[5] ───────────────┘ └───────────────┘       │               │       │               │
                                                │               │       │               │
  A[3] ───────────────┐ ┌───────────────┐       │               │       │               │
                      ├─┤  2-unit wave  ├───────┘               │       │               │
  A[7] ───────────────┘ └───────────────┘                       └───────┘               └───────┘
```

- **Stage 1**: Combines pairs of single elements into 2-point transforms.
- **Stage 2**: Combines the 2-point transforms into 4-point transforms.
- **Stage 3**: Combines the 4-point transforms into the final 8-point frequency array.

At 100 million digits, this structure requires exactly 27 stages of loops (2²⁷ ≈ 134 million).

***

### 4. Why the Forward NTT is Asymptotically Unbeatable

To calculate 100 million digits using traditional methods, a computer must perform 100,000,000² operations—which equals **10 quadrillion calculations**. Even a fast processor would take days.

Because the Forward NTT uses this divide-and-conquer butterfly structure, the number of calculations drops to:

𝑁log2𝑁⟶134,217,728×27≈𝟑.𝟔billioncalculations

A modern multi-core CPU can process 3.6 billion pure integer operations in **less than a second**. This massive mathematical reduction is the exact reason why we can calculate the digits of

2√

or π at such an extreme scale.

***

Would you like to see the **exact Python code** for a Radix-2 Forward NTT loop, or would you prefer to see how the **Inverse NTT** reverses this process to yield the final answer?

- [link](https://cryptographycaffe.sandboxaq.com/posts/ntt-02/)\
  \
  SandboxAQ\
  Number Theoretic Transform - A Gentle Introduction: Part II\
  Jun 23, 2023 — Now, let's implement the improved subroutines to supercharge NTT. This recursive algorithm is also called a Radix-2 Cooley-Tukey N...\\

- [link](https://psun.me/post/fft2/)\
  \
  psun.me\
  FFT-Based Integer Multiplication, Part 2\
  Nov 20, 2018 — Final Details split each input integer into pieces of bits each Perform an NTT on each, using and (the original paper uses , but w...\\

- [link](https://www.researchgate.net/figure/point-radix-4-NTT-and-INTT-data-flow%5Ffig2%5F381761174)\
  \
  ResearchGate\
  16-point radix-4 NTT and INTT data flow. | Download Scientific Diagram\
  Each intersection point represents a butterfly operation. Within the NTT, each operation takes inputs u and v, and produces output...\\

Show all

## what does forward ntt do

The easiest way to understand what the **Forward NTT** actually _does_ is to look at what happens to the data before and after the transform.

The Forward NTT acts like a **scrambler**. It takes an organized sequence of numbers and spreads their values across a new array using modular arithmetic. This process is called **converting data from the "Time Domain" (individual digits) to the "Frequency Domain" (combined wave values).**

Here is exactly what the Forward NTT achieves:

***

### 1. It Explodes Local Digits Globally

Before the Forward NTT, each number in your array lives in its own isolated index. The digit in the hundreds place has no idea what the digit in the millions place is.

The Forward NTT mathematically forces every single digit to interact with every other digit via a "prime clock."

text

```
[Before NTT] (Time Domain)
Index:   0    1    2    3
Data:   [4]  [3]  [2]  [1]   <-- Isolated digits

                 │
                 ▼  [ RUN FORWARD NTT ]
                 │

[After NTT]  (Frequency Domain)
Index:   0    1    2    3
Data:   [10] [15] [ 1] [10]  <-- Every index now contains a piece of
                                 information from ALL original digits.
```

Use code with caution.

***

### 2. It Massages the Data for Linear Math

The primary purpose of doing this is to change the rules of multiplication.

- In the **Time Domain**, multiplying numbers requires long multiplication (multiplying every digit by every other digit, which is slow).
- In the **Frequency Domain**, the numbers are mixed in such a way that you can multiply them **pointwise** (index 0 times index 0, index 1 times index 1).

By spreading the information out, the Forward NTT transforms a highly complex calculation into a simple element-by-element operation.

***

### 3. It Evaluates a Polynomial at Lightning Speed

Mathematically, the Forward NTT is evaluating a giant polynomial at specific target coordinates inside your modular prime box.

If you have a 100-million-digit number, you have a 100-million-degree polynomial. Evaluating that at 100 million different points step-by-step would require **10 quadrillion calculations**.

The Forward NTT does exactly that evaluation, but it uses the "divide-and-conquer" butterfly architecture to find all 100 million answers simultaneously in just **3.6 billion calculations**.

***

### Summary

The Forward NTT **encodes** your digits into a mathematical blueprint where long multiplication is no longer necessary. Once that blueprint is mixed with another number's blueprint, the **Inverse NTT** is used to decode the blueprint back into standard base-10 digits.

Would you like to look at the **Inverse NTT decoding process**, or see the **exact mathematical formula** used to calculate these frequency values?

- [link](https://github.com/ZKNoxHQ/NTT)\
  \
  GitHub\
  GitHub - ZKNoxHQ/NTT: Generic implementation of the Number Theoretic Transform in the context of cryptography applications\
  Overview The NTT operates on sequences of numbers (often coefficients of polynomials) in a modular arithmetic system. It maps thes...
- [link](https://www.sciencedirect.com/science/article/pii/S2214212625002145)\
  \
  ScienceDirect.com\
  Efficient NTT/INTT processor for FALCON post-quantum cryptography\
  This integration can be achieved by applying a divide-and-conquer strategy recursively through the CT and GS algorithms to efficie...\\

## what is the ntt formula

The **Forward NTT** formula converts a sequence of N integers (

𝑎0

,

𝑎1

,

…

,

𝑎𝑁−1

) into a transformed sequence (

𝐴0

,

𝐴1

,

…

,

𝐴𝑁−1

).

Every calculation is performed using **modular arithmetic** relative to a chosen prime number P.

***

### 1. The Mathematical Formula

For each index k (from 0 to N-1), the transformed value

𝐴𝑘

is calculated as:

𝐴𝑘=𝑁−1𝑗=0𝑎𝑗⋅𝜔𝑗⋅𝑘(mod𝑃)

Where:

- **𝑎𝑗**\
  : The original digit or coefficient at index j.
- **𝐴𝑘**\
  : The resulting transformed frequency value at index k.
- **P**: The prime number modulus (the mathematical "clock box").
- **ω**: The **primitive N-th root of unity** modulo P.

***

### 2. The Core Engine: What is ω?

In a standard engineering FFT, the formula uses complex numbers via Euler's formula (

𝑒−𝑖2𝜋𝑁

) which utilizes sine and cosine waves.

The NTT replaces those decimal waves with an integer ω that behaves exactly like a clock hand. To be a primitive N-th root of unity modulo P, ω must satisfy two strict conditions:

1. 𝜔𝑁\
   ≡1\
   (mod𝑃)\
   _(Spinning the wheel N times brings you perfectly back to 1)._
2. 𝜔𝑘≢1(mod𝑃)\
   for any power k < N _(The wheel cannot hit 1 early; it must visit N unique points first)._

***

### 3. The Inverse NTT Formula (Decoding)

To convert the frequency data back into normal digits after multiplication, you use the **Inverse NTT (INTT)** formula. It is almost identical, with two small tweaks:

𝑎𝑗=𝑁−1⋅𝑁−1𝑘=0𝐴𝑘⋅𝜔−𝑗⋅𝑘(mod𝑃)

- **ω⁻¹**: It spins the clock backwards (the modular inverse of ω).
- **N⁻¹**: It divides the final result by the array size N using a modular inverse (\
  𝑁\
  ⋅𝑁−1\
  ≡1\
  (mod𝑃)\
  ).

***

### 4. Direct Comparison: FFT vs. NTT Formulas

You can see how the formulas mirror each other perfectly, substituting complex numbers for perfect integers:

StandardFFT:𝐴𝑘=𝑁−1𝑗=0𝑎𝑗⋅𝑒−𝑖2𝜋⋅𝑗⋅𝑘𝑁

NumberTheoreticNTT:𝐴𝑘=𝑁−1𝑗=0𝑎𝑗⋅𝜔𝑗⋅𝑘(mod𝑃)

Because the NTT formula deals exclusively with integers, it guarantees **absolute precision** without a single decimal point of rounding error, making it possible to safely compute millions of digits for

2√

.

Would you like to see how to calculate a valid **prime P and root ω** for a specific number size, or would you like to see this formula written out as a **working Python loop**?

- [link](https://www.youtube.com/watch?v=wkmDtvO222A)\
  \
  YouTube\
  Lecture 10: Modular Arithmetic - YouTube\
  Dec 17, 2025 — Lecture 10: Modular Arithmetic so here the way to think about modular arithmetic is that it's about relationships between numbers ...\\

- [link](https://people.scs.carleton.ca/~maheshwa/courses/573/talk01/Report%5Fon%5FString%5FMatching.pdf)\
  \
  Carleton University\
  String Matching\
  Fortunately there is simple cure for this problem as computing p and ts 's modulo by suitable modulus. The modulus will be chosen ...\\

- [link](https://github.com/ZKNoxHQ/NTT)\
  \
  GitHub\
  GitHub - ZKNoxHQ/NTT: Generic implementation of the Number Theoretic Transform in the context of cryptography applications\
  ω : A primitive N-th root of unity modulo q , with ω N ≡ 1 mod q and ω k ≢ 1 mod q ; ∀ ; 0 < k < N

Show all

## why isnt it n2 if every number loop all numbers

You have hit on the exact reason why this algorithm is considered one of the greatest breakthroughs in computer science.

If you programmed the formula directly as written—using nested loops to multiply every index—it **would** be

𝑂

(

𝑁2

)

.

The trick is that the **Fast** Fourier/Number Theoretic Transform completely bypasses that nested looping structure. It uses a mathematical shortcut called the **Cooley-Tukey Radix-2 algorithm**, which replaces the

𝑂

(

𝑁2

)

loops with a **divide-and-conquer tree structure** that runs in

𝑂

(

𝑁

log

𝑁

)

steps.

Here is exactly how it avoids the

𝑂

(

𝑁2

)

trap:

***

### 1. The Power of Symmetry (The

±

Trick)

On a standard clock, 1 o'clock and 7 o'clock are exact opposites (separated by 6 hours). In our modular "prime clock," the roots of unity have this exact same symmetry.

For every point

𝑥

on the clock, its opposite side is exactly

−𝑥

.\
When you square both opposites, you get the exact same answer:

(𝑥)2=𝑥2and(−𝑥)2=𝑥2

Because the NTT formula heavily relies on squaring these roots, **the math for the first half of the array is perfectly mirrored in the second half of the array.**

***

### 2. The Divide-and-Conquer Tree

Instead of calculating all

𝑁

outputs for all

𝑁

inputs, the algorithm breaks the giant 100-million-digit array into **Even** and **Odd** indexes.

text

```
                  [ 8 Numbers ]
                    /       \
         [ 4 Evens ]         [ 4 Odds ]
          /      \             /      \
     [ 2 Evens] [ 2 Odds] [ 2 Evens] [ 2 Odds]
       /   \      /   \     /   \      /   \
      [1]  [1]   [1]  [1]  [1]  [1]   [1]  [1]  <-- Base Level (Instant)
```

Use code with caution.

Because of the symmetry trick, the computer only has to do the hard math for **one branch** of the tree. The result for the matching opposite branch is instantly calculated using a simple addition or subtraction.

***

### 3. The Math Reduction:

𝑁2

vs.

𝑁

log

𝑁

Because the algorithm breaks the problem in half at every level, the height of this tree is only

log2

(

𝑁

)

.

- **The**

**𝑂**

**(**

**𝑁2**

**)**

**approach:** Loops through all numbers, for all numbers.\
For an array of 8:\
8\
×8\
\=𝟔𝟒operations\
.

- **The NTT approach:** Loops through the\
  𝑁\
  elements, but only does it across the\
  log2\
  (\
  𝑁\
  )\
  layers of the tree.\
  For an array of 8:\
  8\
  ×log2\
  (\
  8\
  )\
  \=8\
  ×3\
  \=𝟐𝟒operations\
  .

### At 100 Million Digits:

If you used the

𝑂

(

𝑁2

)

nested loops, the computer would have to run:

100,000,000×100,000,000=10,000,000,000,000,000operations(10quadrillion)

By using the tree-based Butterfly loop, the number of operations drops to:

100,000,000×log2(100,000,000)≈100,000,000×27=𝟐.𝟕billionoperations

The numbers do not loop through all other numbers sequentially. They merge in pairs, level by level, up the tree. This turns a calculation that would take days into one that finishes in a fraction of a second.

- [link](https://www.instagram.com/reel/DT-p6DhjFon/)\
  \
  Instagram\
  Big-O Notation Explained in 20 Seconds 🔥 Confused about Big-O notation? 🤯 This short video explains how to quickly analyze time complexity using simple rules: ✅ O(n) → single loop ✅ O(log n) → divide & conquer ✅ O(n²) → nested loops ✅ Biggest term always dominates Perfect for coding interviews, DSA prep, and beginners in programming 🚀 Follow for more DSA & coding concepts made easy 💡 #bigonotation #codinginterview #dsa #programmingtips #learncoding\
  Jan 26, 2026 — 🤯 This short video explains how to quickly analyze time complexity using simple rules: ✅ O(n) → single loop ✅ O(log n) → divide &\\

- [link](https://www.youtube.com/watch?v=qPDB2U4yF5w)\
  \
  YouTube\
  Math Riddles That Are Easier Than They Seem - YouTube\
  Jun 24, 2024 — Math Riddles That Are Easier Than They Seem yeah that doesn't sound quite polite but it's just geometry no offense. hey do you kno...\\

- [link](https://www.youtube.com/watch?v=2YeJ-5UAke8)\
  \
  YouTube\
  Lecture 12: Square Roots, Newton's Method - YouTube\
  Jan 14, 2013 — Lecture 12: Square Roots, Newton's Method good morning everyone. morning um let's get started. so the second of two lectures on nu...\\

Show all

## how does it work

To see exactly how the NTT avoids the O(N²) trap by skipping loops, let's look at the **"Butterfly" code logic** under the hood.

Instead of two nested loops that look at everything, the algorithm uses **three tightly controlled loops** that jump across the array in powers of 2.

***

### The 3-Loop Butterfly Structure

Here is how the algorithm navigates a 100-million-digit array using a divide-and-conquer strategy:

python

```
# len(A) = N (must be a power of 2)
# P = Prime modulus, w = Primitive root of unity

# LOOP 1: Controls the layers of the tree (log2(N) steps)
width = 1
while width < N:

    # Calculate the exact "twiddle factor" clock hand for this layer
    layer_w = power_modulo(w, N // (2 * width), P)

    # LOOP 2: Jumps from chunk to chunk across the array
    for chunk in range(0, N, 2 * width):
        w_step = 1

        # LOOP 3: Solves pairs inside the current chunk simultaneously
        for i in range(width):
            idx1 = chunk + i
            idx2 = idx1 + width

            # The Butterfly Magic: Grab two values at once
            u = A[idx1]
            v = (A[idx2] * w_step) % P

            # Update both array positions in a single pass!
            A[idx1] = (u + v) % P
            A[idx2] = (u - v + P) % P

            # Move the clock hand for the next pair
            w_step = (w_step * layer_w) % P

    width *= 2  # Double the chunk size for the next layer
```

Use code with caution.

***

### Tracing a 4-Element Array (N=4)

Let's trace how these loops process an array containing four digits: `[A, B, C, D]`.

```
START:  [ A,   B,   C,   D ]
          │    │    │    │
          └───╳────┘    └───╳────┘   <-- LAYER 1 (Width = 1)
          │    │    │    │               Pairs are 1 index apart.
          ▼    ▼    ▼    ▼
        [ A',  B',  C',  D' ]
          │    │    │    │
          └────┼───╳────┼────┘       <-- LAYER 2 (Width = 2)
               └────┼───╳────┘           Pairs are 2 indexes apart.
          ▼    ▼    ▼    ▼
FINAL:  [ NTT0, NTT1, NTT2, NTT3 ]   <-- Done in log2(4) = 2 layers!
```

#### Layer 1 (Width = 1)

- **Loop 2** splits the array into two chunks: `[A, B]` and `[C, D]`.
- **Loop 3** pairs up items that are 1 index apart.
- It processes `A` and `B` together, rewriting their values in place. Then it moves to the next chunk and processes `C` and `D` together.
- _Total work: 4 lookups._

#### Layer 2 (Width = 2)

- **Loop 2** treats the entire array as one large chunk.
- **Loop 3** pairs up items that are 2 indexes apart.
- It processes the 0th element with the 2nd element (`A` with `C`), updating both instantly. Then it processes the 1st element with the 3rd element (`B` with `D`), updating both instantly.
- _Total work: 4 lookups._

***

### Why this Is Not O(N²)

If this were an O(N²) algorithm, a 4-element array would require 4 × 4 = 16 lookups.

Because of the butterfly pairing strategy:

- The inner loops (**Loop 2** and **Loop 3**) work together to touch exactly N elements per layer.
- The outer loop (**Loop 1**) only runs\
  log2\
  (\
  𝑁\
  )\
  times because the width doubles every step (`width *= 2`).

Therefore, the total operations are strictly limited to

𝑁

×log2

(

𝑁

)

. For 100 million digits, the computer only visits the array 27 times, executing a total of **2.7 billion operations** instead of the 10 quadrillion operations a naive nested loop would require.

Would you like to see how we select a **valid prime P and root w** so that these loops always calculate perfectly without decimal rounding errors?

## how does it calc the ntt formula

To understand how the butterfly code calculates the exact mathematical NTT formula, we have to look at how it implements **polynomial evaluation**.

Recall that the original mathematical formula wants to calculate this for every index k:

𝐴𝑘=𝑁−1𝑗=0𝑎𝑗⋅𝜔𝑗⋅𝑘(mod𝑃)

The code arrives at this exact result by using **Horner's Scheme** combined with **divide-and-conquer binary trees**. It reorganizes the math so it can reuse previous calculations instead of recalculating powers of ω from scratch.

***

### 1. Step 1: Shuffling the Inputs (Bit-Reversal)

Before the loops even start, the code rearranges the input array. It takes the index numbers, writes them in binary, and reverses the bits.

For an array of 8 elements (N=8):

- Index **1** (binary `001`) becomes Index **4** (binary `100`).
- Index **3** (binary `011`) becomes Index **6** (binary `110`).

This shuffles the numbers so that the inputs that need to be grouped together at the lowest level of the tree end up sitting right next to each other in memory.

***

### 2. Step 2: Breaking the Formula into Halves

Mathematically, the algorithm breaks the giant summation formula down into two smaller formulas: one for the even-indexed positions (j=2r) and one for the odd-indexed positions (j=2r+1).

𝐴𝑘=𝑎𝑒𝑣𝑒𝑛⋅(𝜔2)𝑟𝑘+𝜔𝑘𝑎𝑜𝑑𝑑⋅(𝜔2)𝑟𝑘

Look closely at what happens when you calculate the index for the second half of the array, which is

𝐴𝑘+𝑁/2

:\
Because

𝜔𝑁/2

≡

−1

(mod𝑃)

, the formula becomes:

𝐴𝑘+𝑁/2=𝑎𝑒𝑣𝑒𝑛⋅(𝜔2)𝑟𝑘−𝜔𝑘𝑎𝑜𝑑𝑑⋅(𝜔2)𝑟𝑘

Notice that the two equations are completely identical, except **one uses addition (+) and the other uses subtraction (-)**.

***

### 3. Step 3: Mapping the Math to the 3 Loops

This is exactly what the code's butterfly variables represent:

python

```
u = A[idx1]                # This is the Even Summation part
v = (A[idx2] * w_step)     # This is the Odd Summation part multiplied by ω^k

A[idx1] = (u + v) % P      # Calculates the first half: Even + Odd
A[idx2] = (u - v + P) % P  # Calculates the second half: Even - Odd
```

Use code with caution.

Instead of looping through all N elements to calculate the summation for

𝐴

\[

𝑖𝑑𝑥1

]

, and then looping all over again to calculate the summation for

𝐴

\[

𝑖𝑑𝑥2

]

, **the code calculates both answers at the exact same time.**

***

### 4. Step 4: Scaling up the Tree

The code calculates the formula from the bottom of the tree up to the top:

```
[Layer 1] Calculates 2-point formulas (combining pairs of single digits).
    │
    ▼
[Layer 2] Uses those 2-point answers to calculate 4-point formulas.
    │
    ▼
[Layer 3] Uses those 4-point answers to calculate 8-point formulas.
```

By the time the `width` variable expands to equal N, the loops have evaluated every single branch of the mathematical tree.

The values sitting in the final array are the exact totals you would get if you had manually run the O(N²) summation formula for every single index—but achieved using a fraction of the computing power.

If you are interested, we can look at the **Inverse NTT calculation**, which uses the exact same loop structure to decode these frequencies back into the final digits of your

2√

answer. Would you like to see that?

- [link](https://dl.acm.org/doi/10.1145/3773656.3773673)\
  \
  ACM Digital Library\
  Improved Implementation of Number Theoretic Transform on NVIDIA GPU with Tensor Cores | Proceedings of the Supercomputing Asia and International Conference on High Performance Computing in Asia Pacific Region\
  Jan 25, 2026 — If the inner NTT is performed in bit-reversed order, we can avoid the transposition \[ 29]. In the bit-reversed order, the index bi...\\

- [link](https://www.youtube.com/watch?v=DNP%5FDzrsJyY)\
  \
  YouTube\
  Python Exercise - Convert Binary to Decimal (Daily Python Practice #19) - YouTube\
  Jan 10, 2024 — Python Exercise - Convert Binary to Decimal (Daily Python Practice #19) in this exercise we will be converting binary numbers to d...\\

- [link](https://algomaster.io/learn/dsa/matrix-exponentiation)\
  \
  AlgoMaster.io\
  Matrix Exponentiation | DSA\
  Jun 8, 2026 — We need T^6. Since 6 = 110 in binary, we need T^4 \* T^2.\\

Show all

# 