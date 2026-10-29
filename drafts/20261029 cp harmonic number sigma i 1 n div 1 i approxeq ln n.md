# why does sigma i 1 n 1/i approxeq to logn

The summation 

∑𝑛𝑖\=1

1𝑖

 is known as the **n-th harmonic number**, and it closely approximates 

ln

(

𝑛

)

 (the natural logarithm) primarily because **the discrete sum behaves like a continuous integral**.

Here is the step-by-step visual and mathematical explanation of why this happens.

### 1\. The Geometric Intuition (Area Under the Curve)

If we graph the continuous function 

𝑓

(

𝑥

)

\=1𝑥

, the area under this curve from x = 1 to x = n is exactly given by the definite integral:  

∫1n1xdx\=\[ln(x)\]1n\=ln(n)−ln(1)\=ln(n)

𝑛11𝑥𝑑𝑥\=ln(𝑥)𝑛1\=ln(𝑛)−ln(1)\=ln(𝑛)

We can approximate this same area using **Riemann sums**—drawing rectangles under or over the curve with a width of 1 unit:

* If we use the **left endpoints**, the heights of the rectangles are  
11  
,  
12  
,  
13  
,  
…  
,  
1𝑛−1  
. This forms an _over-approximation_ of the area.
* If we use the **right endpoints**, the heights are  
12  
,  
13  
,  
14  
,  
…  
,  
1𝑛  
. This forms an _under-approximation_ of the area.

### 2\. Sandwiching the Sum

Because the curve 

𝑓

(

𝑥

)

\=1𝑥

 is strictly decreasing, the continuous area under the curve is perfectly sandwiched between these two rectangular approximations: [](https://stackoverflow.com/questions/47842330/asymptotic-notation-of-sum-1-i)

∑i\=2n1i<∫1n1xdx<∑i\=1n−11i

𝑛𝑖\=21𝑖<𝑛11𝑥𝑑𝑥<𝑛−1𝑖\=11𝑖

By substituting the evaluated integral 

ln

(

𝑛

)

 into the middle, we get:  

(∑i\=1n1i)−1<ln(n)<∑i\=1n−11i

𝑛𝑖\=11𝑖−1<ln(𝑛)<𝑛−1𝑖\=11𝑖

Rearranging these inequalities proves that the harmonic sum is tightly bound by the natural logarithm: [](https://cs.stackexchange.com/questions/30034/how-to-simplify-the-sum-over-1-i)  

ln(n)<∑i\=1n1i<ln(n)+1

ln(𝑛)<𝑛𝑖\=11𝑖<ln(𝑛)+1

As n grows very large, the relative difference between the sum and 

ln

(

𝑛

)

 becomes negligible, which is why we write:  

∑i\=1n1i≈ln(n)

𝑛𝑖\=11𝑖≈ln(𝑛)

### 3\. The Precise Relationship

The gap between the exact sum and 

ln

(

𝑛

)

 doesn't vanish entirely, but it converges to a constant limit. The precise mathematical relationship is defined as:  

∑i\=1n1i\=ln(n)+γ+O(1n)

𝑛𝑖\=11𝑖\=ln(𝑛)+𝛾+𝑂1𝑛

Where **γ (gamma)** is the Euler-Mascheroni constant, which is approximately equal to **0.57721**. The final term 

𝑂

(

1𝑛

)

 represents an error that shrinks down to 0 as n goes to infinity.

_(Note: In computer science contexts, this approximation is often written as_ 

_𝛩_

_(_

_log_

_𝑛_

_)_

 _or_ 

_𝑂_

_(_

_log_

_𝑛_

_)_

 _because all logarithms differ only by a constant scaling factor)._ [](https://cs.stackexchange.com/questions/30034/how-to-simplify-the-sum-over-1-i)

Would you like to see a formal **algebraic proof** of the convergence of this bound, or perhaps look at how this approximation applies to **Algorithm Analysis** (like the runtime of QuickSort or the Coupon Collector's problem)?

* [](https://stackoverflow.com/questions/47842330/asymptotic-notation-of-sum-1-i)  
Stack Overflow  
Asymptotic notation of sum 1 / i \[closed\] - Stack Overflow  
The n-th harmonic number is about as large as the natural logarithm of n . The reason is that the sum is approximated by the integ...
* [](https://cs.stackexchange.com/questions/30034/how-to-simplify-the-sum-over-1-i)  
Computer Science Stack Exchange  
How to simplify the sum over 1/i?  
Sep 15, 2014 — If you consider the last term in general, ∑\[1≤i≤logn−1\]1i as ∑\[1≤i≤k\]1i. In this way, you can establish a bound using a integral g...