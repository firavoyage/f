# why are modulos other than 10^9 + 7 used in cp

7:04 AM

### why are modulos other than 10^9 + 7 used in cp

Modulos other than 

109

+7

 are used in competitive programming primarily to **enable advanced algorithms like the Number Theoretic Transform (NTT)**, **prevent hacking in string hashing**, and **control integer overflow**.

While 

109

+7

 is an excellent default prime because it fits perfectly within standard 32-bit and 64-bit integer limits during calculations, different problems require different mathematical properties.

#### 1\. NTT-Friendliness (The Rise of 998,244,353)

The most common alternative modulo you will see is **998,244,353**.

* **The Math:**  
998  
,  
244  
,  
353  
\=119  
×223

+1  
.
* **The Reason:** It is a prime number that can be expressed in the form  
𝑐  
×2𝑘

+1  
 with a very large  
k  
𝑘  
 (  
23  
23  
). This specific property is a strict requirement for executing the **Number Theoretic Transform (NTT)**, which is used to multiply polynomials quickly.  
109

+7  
 does not have this property.

#### 2\. Preventing Hashing Collisions and "Hacks"

In platforms like Codeforces, other users can view your code and try to break it with custom test cases (called "hacking").

* **The Vulnerability:** If you use  
109

+7  
 for string hashing, opponents can easily generate **anti-hash test cases** designed to cause collisions and fail your solution.
* **The Fix:** Programmers use uncommon primes (like  
109

+9  
 or random 64-bit primes) to make their hashing solutions un-hackable.

#### 3\. Managing Data Type Limits

* **Smaller Modulos:** Problem setters might choose a smaller modulo (like  
104

+7  
) if the problem involves intermediate calculations that would otherwise **overflow a 64-bit integer (`long long` in C++)**.
* **Larger Modulos:** Sometimes a 64-bit prime modulo is used to drastically **reduce the probability of random collisions** in randomized algorithms.

#### 4\. Forcing Generic Solutions

* Problem setters often choose arbitrary modulos simply to **prevent hardcoded answers** or precomputed lookup tables, forcing you to write a flexible, robust modular arithmetic template.

Would you like to see how to implement **modular inverse** or **NTT multiplication** using 998244353 in C++?

## how much does ntt matter than having a simple easily written prime

how much does ntt matter than having a simple easily written prime

7:08 AM

### how much does ntt matter than having a simple easily written prime

In competitive programming, the ability to run **NTT matters immensely—it is the entire reason the problem exists.**

If a problem requires polynomial multiplication or fast convolutions, using a simple prime like 10⁹ + 7 instead of an NTT-friendly prime like 998,244,353 is the difference between a **Passed** verdict and a **Time Limit Exceeded (TLE)** or **Wrong Answer (WA)**.

Here is exactly how much it matters based on the situation:

#### 1\. For NTT Problems: It is Absolute

* **The Time Difference:** NTT allows you to multiply polynomials of size N in  

**𝑂**

**(**

**𝑁**

**log**

**𝑁**

**)**  
 time. A naive multiplication takes **O(N²)**. For N = 10⁵,  
𝑂  
(  
𝑁  
log  
𝑁  
)  
 takes a few milliseconds, while O(N²) takes around 10 seconds—far exceeding standard 2-second time limits.
* **Why "Simple" Primes Fail:** You cannot just use a standard Fast Fourier Transform (FFT) with floating-point numbers and then modulo the result by a simple prime at the end. Floating-point precision errors (doubles) will corrupt the exact integer answers when values get massive. NTT solves this by doing all FFT-like logic strictly within integer modular arithmetic.
* **The Catch:** NTT _must_ find a primitive root of unity, which mathematically requires the modulo to be of the form  
𝑐  
⋅2𝑘

+1  
. 10⁹ + 7 simply does not have this property.

#### 2\. For Standard Problems: It Doesn't Matter at All

If the problem only requires basic dynamic programming, combinatorics, or counting (e.g., finding 

𝑁

!(mod𝑀)

), **998,244,353 and 10^9 + 7 are entirely interchangeable.**

* Both fit perfectly inside a standard 32-bit integer.
* Both allow you to multiply two numbers and store the intermediate result in a 64-bit integer (`long long` in C++) without overflowing.
* Both are primes, meaning modular inverse via Fermat's Little Theorem (  
𝑎𝑀−2  
(mod𝑀)  
) works exactly the same way.

#### Summary: How to tell when it matters

When you read a problem statement, look at the given modulo:

* **If you see 10⁹+7:** Relax. It’s a standard counting problem. Do not use NTT.
* **If you see 998,244,353:** **Be on high alert.** The problem setter is explicitly giving you a green light to use NTT. Ask yourself if the problem can be modeled as polynomial multiplication, generating functions, or tree/array convolutions.

Would you like to see a quick **C++ template** for a Modular Integer class that works with any prime, or would you like to explore **how to find a primitive root** for NTT?

## how much does it matter than having a simple easily written prime, that is 10^9+7, for the vast majority of problems wo ntt

how much does it matter than having a simple easily written prime, that is 10^9+7, for the vast majority of problems wo ntt

7:09 AM

### how much does it matter than having a simple easily written prime, that is 10^9+7, for the vast majority of problems wo ntt

For the vast majority of problems that **do not require NTT**, the difference between using 998,244,353 and 10^9 + 7 **matters zero percent conceptually, but 998,244,353 is actually slightly faster in practice.**

Because both numbers are large primes that fit comfortably in a standard 32-bit signed integer, the code logic, modular inverse methods, and edge cases are 100% identical. However, 998,244,353 has a hidden engineering advantage in modern competitive programming.

Here is the breakdown of how they compare when NTT is completely out of the picture:

#### 1\. The Performance Edge: 998,244,353 is Faster

On modern 64-bit CPUs and compilers (like GCC used in CP), **998,244,353 executes modulo operations (`%`) noticeably faster than 10^9 + 7.**

* **Why?** Division and modulo operations are incredibly slow for CPUs. To speed this up, compilers use an optimization called **Barrett Reduction**, which turns a division/modulo by a constant into a fast bit-shift and multiplication.
* **The Difference:** Because 998,244,353 is smaller than  
230  
230  
 and has a specific binary structure, the compiler can optimize its modular arithmetic much more heavily than 10^9 + 7\. If your code is running millions of modulo operations in a tight loop (like in a heavy Dynamic Programming problem), switching from 10^9 + 7 to 998,244,353 can sometimes shave off 10% to 30% of your execution time, safely avoiding a Time Limit Exceeded (TLE) verdict.

#### 2\. The Practical Advantage: 10^9 + 7 is Easier to Type

From a pure human-error standpoint, 10^9 + 7 wins on ease of use.

* You can write it cleanly in C++ as `1e9 + 7` or define it as `1000000007`. It is incredibly easy to remember and fast to type.
* 998,244,353 requires you to memorize a specific 9-digit sequence (`998244353`). If you typo a single digit during a high-stress contest, you will get a frustrating Wrong Answer (WA) verdict and waste time debugging.

#### Direct Comparison

| Feature                 | 10^9 + 7                             | 998,244,353                                        |
| ----------------------- | ------------------------------------ | -------------------------------------------------- |
| **Typo Risk**           | **Very Low** (1e9+7 is foolproof)    | **Medium** (Easy to mistype a digit)               |
| **CPU Execution Speed** | Baseline                             | **Slightly Faster** (Better compiler optimization) |
| **Overflow Safety**     | Safe (Max product fits in long long) | Safe (Max product fits in long long)               |
| **Modular Inverse**     | Works via Fermat's Little Theorem    | Works via Fermat's Little Theorem                  |

#### The Verdict for Non-NTT Problems

If you are writing code for a standard counting or DP problem where the problem setter lets you choose your own modulo (or for your own practice), **use 10^9 + 7 because it’s easier to type.**

Only default to 998,244,353 if the problem statement explicitly forces you to use it, or if your 10^9 + 7 solution is dangerously close to the time limit and you need a quick, effortless speed boost.

Would you like to see how to use **C++ `constexpr`** to ensure the compiler fully optimizes modular arithmetic for either prime?


