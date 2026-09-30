# Why lim x to 0 1-cosx/x^2=1/2

To find the limit

$$\lim_{x \to 0} \frac{1 - \cos x}{x^2}$$

we can evaluate it using a few different methods:

---

### Method 1: Using Trigonometric Identities

Using the half-angle identity $\sin^2\left(\frac{x}{2}\right) = \frac{1 - \cos x}{2}$, we can rewrite $1 - \cos x$ as $2\sin^2\left(\frac{x}{2}\right)$:

$$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{2\sin^2\left(\frac{x}{2}\right)}{x^2}$$

Now, rewrite the denominator to match the argument of the sine function, $\frac{x}{2}$:

$$\lim_{x \to 0} \frac{2\sin^2\left(\frac{x}{2}\right)}{4 \cdot \left(\frac{x}{2}\right)^2} = \frac{2}{4} \cdot \lim_{x \to 0} \left( \frac{\sin\left(\frac{x}{2}\right)}{\frac{x}{2}} \right)^2$$

Using the fundamental trigonometric limit $\lim_{\theta \to 0} \frac{\sin\theta}{\theta} = 1$ (where $\theta = \frac{x}{2}$):

$$= \frac{1}{2} \cdot (1)^2 = \frac{1}{2}$$

---

### Method 2: L'Hôpital's Rule

Evaluating directly at $x = 0$ gives the indeterminate form $\frac{0}{0}$:

$$\frac{1 - \cos(0)}{0^2} = \frac{0}{0}$$

Applying L'Hôpital's Rule (differentiating top and bottom with respect to $x$):

$$\lim_{x \to 0} \frac{\frac{d}{dx}(1 - \cos x)}{\frac{d}{dx}(x^2)} = \lim_{x \to 0} \frac{\sin x}{2x}$$

Since $\lim_{x \to 0} \frac{\sin x}{x} = 1$:

$$\lim_{x \to 0} \frac{1}{2} \cdot \frac{\sin x}{x} = \frac{1}{2} \cdot 1 = \frac{1}{2}$$

---

### Method 3: Taylor Series Expansion

The Taylor series expansion for $\cos x$ centered at $x = 0$ is:

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$$

Substitute this expansion into the limit:

$$\lim_{x \to 0} \frac{1 - \left(1 - \frac{x^2}{2} + \frac{x^4}{24} - \dots\right)}{x^2}$$

$$\lim_{x \to 0} \frac{\frac{x^2}{2} - \frac{x^4}{24} + \dots}{x^2}$$

Divide through by $x^2$:

$$\lim_{x \to 0} \left( \frac{1}{2} - \frac{x^2}{24} + \dots \right) = \frac{1}{2}$$

# When can lhopital be used

L'Hôpital's Rule can be used to evaluate a limit $\lim_{x \to a} \frac{f(x)}{g(x)}$ only when **all** of the following conditions are met:

### 1. Indeterminate Form Requirement

Direct substitution must yield one of the two **indeterminate forms**:

* $\frac{0}{0}$
* $\frac{\pm\infty}{\pm\infty}$

> **Note:** Forms like $\frac{0}{\infty}$, $\frac{1}{0}$, or $\frac{5}{0}$ are **not** indeterminate. For example, $\frac{5}{0}$ indicates a vertical asymptote (approaching $\pm\infty$), so applying L'Hôpital's Rule here would produce an incorrect result.

---

### 2. Differentiability

Both $f(x)$ and $g(x)$ must be differentiable on an open interval around $x = a$ (except possibly at $a$ itself).

---

### 3. Non-Zero Denominator Derivative

The derivative of the denominator, $g'(x)$, must not equal zero anywhere near $a$ (except possibly at $a$ itself).

---

### 4. Existence of the Limit of Derivatives

The limit of the ratio of derivatives must exist or be infinite:


$$\lim_{x \to a} \frac{f'(x)}{g'(x)} = L \quad \text{(or } \pm\infty\text{)}$$

If $\lim_{x \to a} \frac{f'(x)}{g'(x)}$ continuously oscillates and does not settle on a limit or approach infinity (e.g., oscillating like $\sin(1/x)$), L'Hôpital's Rule is inconclusive, and another method must be used.

---

### Other Indeterminate Forms

L'Hôpital's Rule cannot be applied directly to other indeterminate forms, but you can rewrite them into $\frac{0}{0}$ or $\frac{\infty}{\infty}$ first:

| Initial Form | Algebraic Transformation Strategy | Target Form |
| --- | --- | --- |
| **$0 \cdot \infty$** | Rewrite $f(x) \cdot g(x)$ as $\frac{f(x)}{1/g(x)}$ or $\frac{g(x)}{1/f(x)}$ | $\frac{0}{0}$ or $\frac{\infty}{\infty}$ |
| **$\infty - \infty$** | Find a common denominator or factor out a term | $\frac{0}{0}$ or $\frac{\infty}{\infty}$ |
| **$1^\infty$, $0^0$, $\infty^0$** | Take the natural logarithm $y = f(x)^{g(x)} \implies \ln y = g(x) \ln f(x)$ | $0 \cdot \infty \to \frac{0}{0}$ |

```md followup
Want to see an example of rewriting 0 · ∞ or 1^∞ to apply L'Hôpital's Rule?

-> Yes
```

# Examples

### Example 1: Converting $0 \cdot \infty$

Find the limit:

$$\lim_{x \to 0^+} x \ln x$$

1. **Test direct substitution:**
As $x \to 0^+$, $x \to 0$ and $\ln x \to -\infty$. This gives the indeterminate form $0 \cdot (-\infty)$.
2. **Rewrite as a quotient:**
Move $x$ to the denominator as $\frac{1}{x}$:

$$\lim_{x \to 0^+} \frac{\ln x}{\frac{1}{x}}$$



Now direct substitution yields $\frac{-\infty}{\infty}$, which allows L'Hôpital's Rule.
3. **Apply L'Hôpital's Rule:**
Differentiate the numerator and denominator:

$$\lim_{x \to 0^+} \frac{\frac{d}{dx}(\ln x)}{\frac{d}{dx}\left(x^{-1}\right)} = \lim_{x \to 0^+} \frac{\frac{1}{x}}{-\frac{1}{x^2}}$$


4. **Simplify and evaluate:**

$$\lim_{x \to 0^+} \left( \frac{1}{x} \cdot \left(-x^2\right) \right) = \lim_{x \to 0^+} (-x) = 0$$



---

### Example 2: Converting $1^\infty$

Find the limit:

$$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x$$

1. **Test direct substitution:**
As $x \to \infty$, $\left(1 + \frac{1}{x}\right) \to 1$ and the exponent approaches $\infty$. This gives the indeterminate form $1^\infty$.
2. **Use natural logarithms to move the exponent:**
Let $y = \left(1 + \frac{1}{x}\right)^x$. Take $\ln$ of both sides:

$$\ln y = \ln \left(1 + \frac{1}{x}\right)^x = x \ln \left(1 + \frac{1}{x}\right)$$


3. **Convert $0 \cdot \infty$ to a quotient:**

$$\lim_{x \to \infty} \ln y = \lim_{x \to \infty} \frac{\ln\left(1 + \frac{1}{x}\right)}{\frac{1}{x}}$$



Direct substitution now gives $\frac{\ln(1)}{0} = \frac{0}{0}$.
4. **Apply L'Hôpital's Rule:**
Differentiate top and bottom with respect to $x$:

$$\lim_{x \to \infty} \frac{\frac{1}{1 + \frac{1}{x}} \cdot \left(-\frac{1}{x^2}\right)}{-\frac{1}{x^2}}$$



Cancel out $-\frac{1}{x^2}$:

$$\lim_{x \to \infty} \frac{1}{1 + \frac{1}{x}} = \frac{1}{1 + 0} = 1$$


5. **Solve for the original limit $y$:**
Since $\lim_{x \to \infty} \ln y = 1$, exponentiate both sides:

$$\lim_{x \to \infty} y = e^1 = e$$



---

### Example 3: Converting $\infty - \infty$

Find the limit:

$$\lim_{x \to 0} \left( \frac{1}{x} - \frac{1}{\sin x} \right)$$

1. **Test direct substitution:**
As $x \to 0$, $\frac{1}{x} \to \pm\infty$ and $\frac{1}{\sin x} \to \pm\infty$, giving the form $\infty - \infty$.
2. **Combine using a common denominator:**

$$\lim_{x \to 0} \frac{\sin x - x}{x \sin x}$$



Direct substitution now gives $\frac{0 - 0}{0} = \frac{0}{0}$.
3. **Apply L'Hôpital's Rule:**
Differentiate top and bottom:

$$\lim_{x \to 0} \frac{\cos x - 1}{\sin x + x \cos x}$$



Direct substitution still yields $\frac{1 - 1}{0 + 0} = \frac{0}{0}$.
4. **Apply L'Hôpital's Rule a second time:**

$$\lim_{x \to 0} \frac{-\sin x}{\cos x + (\cos x - x \sin x)} = \lim_{x \to 0} \frac{-\sin x}{2\cos x - x \sin x}$$


5. **Evaluate:**

$$\frac{-\sin(0)}{2\cos(0) - 0\cdot\sin(0)} = \frac{0}{2(1) - 0} = 0$$

```md followup
Want to try working through an indeterminate form practice problem together?
```

# Give me an indeterminate limit problem to practice, and let's work through it step by step.

Here is a practice problem to work through:

$$\lim_{x \to 0^+} (\sin x)^x$$

---

### Step 1: Identify the Form

Try evaluating the limit directly by plugging in $x = 0$ (from the right).

What **form** do you get when you evaluate $(\sin x)^x$ at $x \to 0^+$? Is it directly ready for L'Hôpital's Rule, or does it need to be transformed first?

# 0^0

Spot on! Plugging in directly gives the indeterminate form **$0^0$**.

Since L'Hôpital's Rule can only be applied directly to $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$, we need to transform this expression.

---

### Step 2: Move the Exponent Down

Let $y = (\sin x)^x$.

Take the natural logarithm ($\ln$) of both sides so we can use log properties to bring the exponent $x$ down in front.

What expression do you get for $\ln y$?

# xlnsinx

Exactly:

$$\ln y = x \ln(\sin x)$$

---

### Step 3: Convert $0 \cdot (-\infty)$ into a Quotient

If we evaluate $\lim_{x \to 0^+} x \ln(\sin x)$ directly, we get $0 \cdot (-\infty)$.

To apply L'Hôpital's Rule, rewrite $x \ln(\sin x)$ as a fraction so that it takes the form $\frac{-\infty}{\infty}$.

Which function would you move to the denominator, and what does the new fraction look like?

# /(1/x)

Correct! Moving $x$ down gives:

$$\ln y = \frac{\ln(\sin x)}{\frac{1}{x}}$$

Evaluating this as $x \to 0^+$ gives:

* **Numerator:** $\ln(\sin 0^+) \to -\infty$
* **Denominator:** $\frac{1}{0^+} \to \infty$

This gives the indeterminate form $\frac{-\infty}{\infty}$, so we are ready for L'Hôpital's Rule.

---

### Step 4: Apply L'Hôpital's Rule

Differentiate the numerator and the denominator separately:

1. What is the derivative of the numerator, $\frac{d}{dx}[\ln(\sin x)]$?
2. What is the derivative of the denominator, $\frac{d}{dx}\left[\frac{1}{x}\right]$?

Set up the ratio of those derivatives and simplify it. What do you get?

# cosx 1/sinx, -1/x^2

Spot on! You differentiate top and bottom correctly:

* **Numerator derivative:** $\frac{\cos x}{\sin x}$ (or $\cot x$)
* **Denominator derivative:** $-\frac{1}{x^2}$

Putting them into a ratio gives:

$$\lim_{x \to 0^+} \frac{\frac{\cos x}{\sin x}}{-\frac{1}{x^2}}$$

---

### Step 5: Simplify and Evaluate

Rearrange the complex fraction by multiplying by the reciprocal of the denominator:

$$\lim_{x \to 0^+} -\frac{x^2 \cos x}{\sin x} = \lim_{x \to 0^+} \left( -\cos x \cdot \frac{x^2}{\sin x} \right)$$

You can split this using known limits, like $\lim_{x \to 0} \frac{x}{\sin x} = 1$:

$$\lim_{x \to 0^+} \left( -\cos x \cdot x \cdot \frac{x}{\sin x} \right)$$

What value do you get when you plug in $x = 0$? *(Remember, this gives the limit of $\ln y$, not $y$ yet!)*

# 0

Nailed it! Plugging in $x = 0$ gives:

$$\lim_{x \to 0^+} \ln y = -(1) \cdot (0) \cdot (1) = 0$$

---

### Step 6: Solve for the Original Limit

So far, we have found:

$$\lim_{x \to 0^+} \ln y = 0$$

Remember that our original goal was to find $y = \lim_{x \to 0^+} (\sin x)^x$.

How do we convert $\ln y = 0$ back to find $y$? What is the final answer?

# 1

That's it!

Since $\lim_{x \to 0^+} \ln y = 0$, we raise $e$ to both sides:

$$y = e^0 = 1$$

So, the final result is:

$$\lim_{x \to 0^+} (\sin x)^x = 1$$

You walked through every single transformation, derivative, and logarithm step cleanly!

```md followup
Want to try another practice problem, or move on to a different topic?
```

# Want to try another practice problem, or move on to a different topic?

Here is your next practice problem:

$$\lim_{x \to 0} \left( \frac{1}{x} - \frac{1}{e^x - 1} \right)$$

---

### Step 1: Identify the Form

Try evaluating the limit directly as $x \to 0$.

What **indeterminate form** do you get when you plug in $x = 0$?

# How does Taylor series work

A **Taylor series** represents a smooth function as an infinite sum of polynomial terms.

The core idea is simple: if you know everything about a function at a single point—its value, slope, curvature, and higher-order rates of change—you can construct a polynomial that mimics the function near that point.

---

### 1. The Core Formula

The Taylor series of a function $f(x)$ centered at a point $x = a$ is:

$$f(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \frac{f'''(a)}{3!}(x - a)^3 + \dots = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$$

* When $a = 0$, the series is specifically called a **Maclaurin series**.

---

### 2. How It's Built (Step-by-Step)

Imagine building an approximation polynomial $P(x)$ centered at $a = 0$ to approximate $f(x)$:

$$P(x) = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots$$

To make $P(x)$ match $f(x)$ as closely as possible near $0$, we force $P(x)$ and $f(x)$ to agree on all their derivatives at $x = 0$:

1. **Match the height (value):**
Set $P(0) = f(0) \implies c_0 = f(0)$
2. **Match the slope ($1^{\text{st}}$ derivative):**
$P'(x) = c_1 + 2c_2 x + 3c_3 x^2 + \dots$
Set $P'(0) = f'(0) \implies c_1 = f'(0)$
3. **Match the curvature ($2^{\text{nd}}$ derivative):**
$P''(x) = 2c_2 + 6c_3 x + \dots$
Set $P''(0) = f''(0) \implies c_2 = \frac{f''(0)}{2}$
4. **Match higher derivatives ($n^{\text{th}}$ derivative):**
Differentiating $x^n$ repeatedly brings down $n \times (n-1) \times \dots \times 1 = n!$, which is why every term is divided by $n!$:

$$c_n = \frac{f^{(n)}(0)}{n!}$$



---

### 3. Visual Intuition

Every extra term adds fine-tuned detail to the approximation:

* **$0^{\text{th}}$ Order:** A constant horizontal line $y = f(a)$.
* **$1^{\text{st}}$ Order:** The tangent line at $a$.
* **$2^{\text{nd}}$ Order:** A parabola capturing local curvature.
* **$n^{\text{th}}$ Order:** Higher-degree polynomials that hug the curve tighter over a wider interval.

---

### 4. Common Standard Series (centered at $a = 0$)

| Function | Maclaurin Series Expansion |
| --- | --- |
| **$e^x$** | $1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots = \sum_{n=0}^{\infty} \frac{x^n}{n!}$ |
| **$\sin x$** | $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}$ |
| **$\cos x$** | $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}$ |
| **$\frac{1}{1-x}$** | $1 + x + x^2 + x^3 + \dots = \sum_{n=0}^{\infty} x^n \quad (\vert{}x\vert{} < 1)$ |

---

### Why Are They Useful?

* **Evaluating Complex Limits:** Replaces trigonometric, exponential, or logarithmic terms with simple polynomials (as shown in $1 - \cos x \approx \frac{x^2}{2}$ near $x = 0$).
* **Calculators & Computing:** Computers evaluate functions like $\sin(0.4)$ using truncated Taylor polynomials rather than looking up geometric tables.
* **Physics & Engineering:** Used to linearize non-linear differential equations near an equilibrium point (e.g., approximating small pendulum swings with $\sin\theta \approx \theta$).

```md followup
Want to see how to find the Taylor series of a specific function step by step?
```

# Why this formula

The factor $n!$ appears in the denominator because of **how derivatives behave when you differentiate power terms repeatedly**.

To make a polynomial $P(x)$ match a function $f(x)$ at $x = 0$, we force every single derivative of $P(x)$ to match the corresponding derivative of $f(x)$ at $x = 0$.

Here is how that $n!$ naturally emerges:

---

### Step 1: Look at a general term

Consider a term with degree $n$ inside a polynomial:

$$c_n x^n$$

When you differentiate $x^n$ repeatedly with respect to $x$, watch what happens to the power:

* **$0^{\text{th}}$ derivative:** $c_n x^n$
* **$1^{\text{st}}$ derivative:** $n \cdot c_n x^{n-1}$
* **$2^{\text{nd}}$ derivative:** $n(n-1) \cdot c_n x^{n-2}$
* **$3^{\text{rd}}$ derivative:** $n(n-1)(n-2) \cdot c_n x^{n-3}$
* ...
* **$n^{\text{th}}$ derivative:** $n(n-1)(n-2)\dots(1) \cdot c_n x^0 = n! \cdot c_n$

Notice that by the $n^{\text{th}}$ derivative, the variable $x$ disappears completely, leaving just the constant multiplier: **$n! \cdot c_n$**.

*(If you differentiate one more time—the $(n+1)^{\text{th}}$ derivative—it turns to $0$.)*

---

### Step 2: What happens when you plug in $x = 0$?

Suppose our polynomial is:

$$P(x) = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots + c_n x^n + \dots$$

When you differentiate $P(x)$ $n$ times and evaluate it at $x = 0$:

1. All lower-degree terms ($c_0, c_1 x, \dots, c_{n-1} x^{n-1}$) have already differentiated to $0$.
2. All higher-degree terms ($c_{n+1} x^{n+1}, \dots$) still retain at least one power of $x$, so plugging in $x = 0$ makes them $0$.
3. The **only term that survives** is the $n^{\text{th}}$ term:

$$P^{(n)}(0) = n! \cdot c_n$$

---

### Step 3: Match it to $f(x)$

We want our polynomial's $n^{\text{th}}$ derivative to equal the function's $n^{\text{th}}$ derivative at $0$:

$$P^{(n)}(0) = f^{(n)}(0)$$

Substitute $P^{(n)}(0) = n! \cdot c_n$:

$$n! \cdot c_n = f^{(n)}(0)$$

Solving for the coefficient $c_n$:

$$c_n = \frac{f^{(n)}(0)}{n!}$$

---

### Summary

The $n!$ isn't something mathematicians chose arbitrarily—it is the **accumulated multiplication of exponents** ($n \times (n-1) \times \dots \times 1$) created by taking $n$ successive derivatives of $x^n$. Divided out, it cancels those factors so the polynomial's $n^{\text{th}}$ derivative matches the function's $n^{\text{th}}$ derivative perfectly.

```md followup
Want to derive the Taylor series for a specific function like e^x or sin(x) using this formula?
```

# Common standard series

Here are the most fundamental Maclaurin series expansions (Taylor series centered at $a = 0$), along with their convergence rules:

---

### Exponential & Logarithmic Functions

| Function | Series Expansion | Sigma Notation | Interval of Convergence |
| --- | --- | --- | --- |
| **$e^x$** | $1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots$ | $\sum_{n=0}^{\infty} \frac{x^n}{n!}$ | $(-\infty, \infty)$ |
| **$\ln(1 + x)$** | $x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots$ | $\sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n}$ | $(-1, 1]$ |

---

### Trigonometric & Inverse Trigonometric Functions

| Function | Series Expansion | Sigma Notation | Interval of Convergence |
| --- | --- | --- | --- |
| **$\sin x$** | $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots$ | $\sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}$ | $(-\infty, \infty)$ |
| **$\cos x$** | $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots$ | $\sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}$ | $(-\infty, \infty)$ |
| **$\arctan x$** | $x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \dots$ | $\sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1}$ | $[-1, 1]$ |

---

### Geometric & Binomial Functions

| Function | Series Expansion | Sigma Notation | Interval of Convergence |
| --- | --- | --- | --- |
| **$\frac{1}{1 - x}$** | $1 + x + x^2 + x^3 + x^4 + \dots$ | $\sum_{n=0}^{\infty} x^n$ | $(-1, 1)$ |
| **$\frac{1}{1 + x}$** | $1 - x + x^2 - x^3 + x^4 - \dots$ | $\sum_{n=0}^{\infty} (-1)^n x^n$ | $(-1, 1)$ |
| **$(1 + x)^k$** | $1 + kx + \frac{k(k-1)}{2!}x^2 + \frac{k(k-1)(k-2)}{3!}x^3 + \dots$ | $\sum_{n=0}^{\infty} \binom{k}{n} x^n$ | $(-1, 1)$ |

---

### Useful Patterns to Remember

* **Symmetry:** $\sin x$ contains only **odd** powers ($x^1, x^3, x^5$), while $\cos x$ contains only **even** powers ($x^0, x^2, x^4$).
* **Factorials vs. No Factorials:** Functions like $e^x$, $\sin x$, and $\cos x$ have factorials ($n!$) in the denominator, which makes them converge for **all real numbers**. Functions like $\ln(1+x)$, $\arctan x$, and $\frac{1}{1-x}$ have no factorials, so their convergence is restricted to $\vert{}x\vert{} < 1$.
* **Calculus Connections:**
* Differentiating $\sin x$ term-by-term yields $\cos x$.
* Integrating $\frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \dots$ term-by-term yields the series for $\arctan x$.

```md followup
Want to see how to use one of these series to quickly solve a limit or integral?
```

# Why

Because these standard series are the direct result of applying the Taylor formula $c_n = \frac{f^{(n)}(0)}{n!}$ to the basic functions of calculus.

Here is why each main family of functions works out to those specific patterns:

---

### 1. Why $e^x$ contains all powers with factorials

Every derivative of $e^x$ is simply $e^x$.

* Evaluating $f^{(n)}(0) = e^0 = 1$ for **every single derivative**.
* Plugging $f^{(n)}(0) = 1$ into $c_n = \frac{f^{(n)}(0)}{n!}$ gives $c_n = \frac{1}{n!}$ for every term:

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$$



---

### 2. Why $\sin x$ and $\cos x$ alternate and skip powers

The derivatives of trigonometric functions run in a repeating 4-step cycle:

$$\sin x \longrightarrow \cos x \longrightarrow -\sin x \longrightarrow -\cos x \longrightarrow \sin x$$

Evaluating these at $x = 0$:

* $\sin(0) = 0$
* $\cos(0) = 1$
* $-\sin(0) = 0$
* $-\cos(0) = -1$

Because every second derivative becomes $0$:

* **$\sin x$** drops all even powers (since its $0^{\text{th}}, 2^{\text{nd}}, 4^{\text{th}}$ derivatives are zero at $x=0$), leaving only **odd powers** with alternating signs ($+-+-$).
* **$\cos x$** drops all odd powers (since its $1^{\text{st}}, 3^{\text{rd}}, 5^{\text{th}}$ derivatives are zero at $x=0$), leaving only **even powers** with alternating signs ($+-+-$).

> **Bonus Connection:** If you substitute $x$ with $ix$ inside $e^x$ (where $i = \sqrt{-1}$), $e^{ix}$ splits perfectly into $\cos x + i\sin x$—which is Euler's Formula!

---

### 3. Why $\frac{1}{1-x}$ has no factorials and no alternating signs

If you repeatedly differentiate $f(x) = (1-x)^{-1}$:

* $f'(x) = 1!(1-x)^{-2} \implies f'(0) = 1!$
* $f''(x) = 2!(1-x)^{-3} \implies f''(0) = 2!$
* $f^{(n)}(x) = n!(1-x)^{-(n+1)} \implies f^{(n)}(0) = n!$

When you compute the coefficient $c_n = \frac{f^{(n)}(0)}{n!} = \frac{n!}{n!} = 1$, the $n!$ in the derivative and the $n!$ in the Taylor formula **cancel each other out completely**.

Every coefficient becomes $1$, leaving the geometric series:


$$\frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots$$

---

### 4. Why $\ln(1+x)$ and $\arctan x$ lack factorials

These functions are the integrals of algebraic fractions:

* $\ln(1+x) = \int \frac{1}{1+x} dx$
* $\arctan x = \int \frac{1}{1+x^2} dx$

Since $\frac{1}{1+x}$ has no factorials, integrating its terms brings down $n$ instead of $n!$ into the denominators (e.g., $\int x^{n-1} dx = \frac{x^n}{n}$).

```md followup
Want to see how we can build new series by multiplying or substituting into these base forms?
```

#

# L'Hôpital

## L'Hôpital

7:42 PM

**L'Hôpital's rule** is <mark>a mathematical theorem used in calculus to evaluate<span> </span><strong>limits that result in an indeterminate form</strong></mark> (like

00

or

∞∞

). Instead of getting stuck, you take the derivative of the numerator and the denominator separately to find the limit.

### 📐 The Formula

If

lim𝑥→𝑐

𝑓(𝑥)𝑔(𝑥)

\=00

or

±∞±∞

, then:

lim𝑥→𝑐𝑓(𝑥)𝑔(𝑥)=lim𝑥→𝑐𝑓′(𝑥)𝑔′(𝑥)

_(Provided the limit on the right exists and g'(x) ≠ 0 near c)._

***

### ⚡ Example Walkthrough

Let's find the limit:

lim𝑥→0sin(𝑥)𝑥

1. **Check the condition:** Direct substitution gives\
   sin(0)0\
   \=00\
   . This is an indeterminate form, so we can apply L'Hôpital's rule.
2. **Take derivatives:**

- The derivative of the top,\
  𝑓\
  (\
  𝑥\
  )\
  \=sin\
  (\
  𝑥\
  )\
  , is\
  𝑓′\
  (\
  𝑥\
  )\
  \=cos\
  (\
  𝑥\
  )\
  .
- The derivative of the bottom, g(x) = x, is g'(x) = 1.

3. **Evaluate the new limit:**\
   lim𝑥→0cos(𝑥)1=cos(0)1=11=1

Below is a visual concept of why this works. As x approaches 0, the ratio of the functions

sin(𝑥)𝑥

approaches the ratio of their slopes (derivatives) at that point.

***

### ⚠️ Common Mistakes to Avoid

- **Don't use the Quotient Rule:** You are **not** taking the derivative of the whole fraction\
  𝑓𝑔′\
  . You take the derivative of the top and bottom _completely separately_.
- **Always check conditions first:** If you apply L'Hôpital's rule to a limit that is _not_ indeterminate (like\
  lim𝑥→0\
  cos(𝑥)𝑥\
  \=10\
  ), you will get the wrong answer.

Are you trying to **solve a specific limit problem**, or would you like to see how to handle other indeterminate forms like **0 ⋅ ∞ or**

**1∞**

?

This is for informational purposes only. For medical advice or diagnosis, consult a professional. AI responses may include mistakes. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

## who

who

7:43 PM

**Guillaume de l'Hôpital** was a French mathematician who lived from **1661 to 1704**. He is most famous for **L'Hôpital's rule**, a mathematical theorem used in calculus to evaluate limits that result in indeterminate forms like 0/0 or ∞/∞.

Here are the key facts about his life and work:

- **The First Calculus Textbook:** He published the very first textbook on differential calculus in 1696, titled _Analyse des Infiniment Petits pour l'Intelligence des Lignes Courbes_.
- **The Johann Bernoulli Connection:** Historians later discovered that the brilliant Swiss mathematician Johann Bernoulli actually discovered the famous rule. L'Hôpital paid Bernoulli a regular salary in exchange for access to his mathematical discoveries and the right to publish them.
- **Other Contributions:** Beyond calculus, he also wrote an influential textbook on analytical geometry and solved the brachistochrone problem (finding the curve of fastest descent for a sliding object).

Would you like to see **how L'Hôpital's rule works** with a step-by-step example, or are you more interested in the **historical controversy** surrounding his textbook?



