# Why lim x to 3 x^2-9/x-3=6 makes them inf small of the same degree 

To understand why $f(x) = \frac{x^2 - 9}{x - 3}$ and $g(x) = x - 3$ are **infinitely small (infinitesimals) of the same order/degree** as $x \to 3$, let's break down what is happening algebraically and conceptually.

---

### 1. What makes a function "infinitely small"?

A function $\alpha(x)$ is called **infinitely small** (an infinitesimal) as $x \to a$ if its limit is zero:


$$\lim_{x \to a} \alpha(x) = 0$$

Let's check the two functions near $x = 3$:

* **Base infinitesimal:** Let $\alpha(x) = x - 3$. As $x \to 3$, $\lim_{x \to 3} (x - 3) = 0$.
* **Target function:** Let $\beta(x) = \frac{x^2 - 9}{x - 3} - 6$.
*(Note: The expression $\frac{x^2 - 9}{x - 3}$ approaches $6$, not $0$. To speak of an infinitesimal vanishing at $x=3$, we look at the difference between the function and its limit, i.e., $\beta(x) = \frac{x^2 - 9}{x - 3} - 6$).*

As $x \to 3$:


$$\lim_{x \to 3} \beta(x) = \lim_{x \to 3} \left( \frac{x^2 - 9}{x - 3} - 6 \right) = 6 - 6 = 0$$

Both functions approach $0$ as $x \to 3$.

---

### 2. Definition of "Same Degree / Same Order"

Two infinitesimals $\alpha(x)$ and $\beta(x)$ are of the **same order (or degree)** as $x \to a$ if the limit of their ratio is a finite, non-zero constant $c$:

$$\lim_{x \to a} \frac{\beta(x)}{\alpha(x)} = c \quad (c \neq 0, c \neq \pm\infty)$$

---

### 3. Proof by Simplification

Let's evaluate the limit of the ratio of $\beta(x) = \frac{x^2 - 9}{x - 3} - 6$ to the principal infinitesimal $\alpha(x) = x - 3$:

1. **Simplify $\frac{x^2 - 9}{x - 3}$:**

$$\frac{x^2 - 9}{x - 3} = \frac{(x - 3)(x + 3)}{x - 3} = x + 3 \quad (\text{for } x \neq 3)$$


2. **Express the difference $\beta(x)$:**

$$\beta(x) = (x + 3) - 6 = x - 3$$


3. **Take the ratio of $\beta(x)$ to $\alpha(x)$:**

$$\frac{\beta(x)}{\alpha(x)} = \frac{x - 3}{x - 3} = 1$$


4. **Calculate the limit:**

$$\lim_{x \to 3} \frac{\beta(x)}{\alpha(x)} = \lim_{x \to 3} (1) = 1$$



Since $c = 1$ (which is non-zero and finite), $\beta(x) = \left(\frac{x^2 - 9}{x - 3} - 6\right)$ and $\alpha(x) = (x - 3)$ vanish at the exact same linear rate, making them **infinitesimals of the same degree (order 1)**.

---

### Summary

The limit $\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = 6$ shows that the function behaves like $x + 3$ near $x = 3$. The rate at which the expression approaches its limit $6$ is precisely linear in $(x - 3)$, which means its rate of decay to zero matches $(x - 3)^1$.

# Why they are the same degree even if x^2 looks higher

The key is that the numerator $(x^2 - 9)$ has a factor that **cancels out** the higher power.

When comparing degrees of infinitesimals, we don't look at the highest power in the expression—we look at the **power of $(x - a)$ that remains after full algebraic simplification**.

Here is why $x^2$ doesn't make it a higher degree near $x = 3$:

---

### 1. Factorization Cancels the Extra Power

The term $x^2 - 9$ is a difference of squares:


$$x^2 - 9 = (x - 3)(x + 3)$$

When you form the fraction $\frac{x^2 - 9}{x - 3}$:


$$\frac{x^2 - 9}{x - 3} = \frac{(x - 3)(x + 3)}{x - 3} = x + 3 \quad (\text{for } x \neq 3)$$

Notice that the division by $(x - 3)$ removes one factor of $(x - 3)$ from the numerator. As a result:

* $x^2 - 9$ on its own vanishes at a rate proportional to $(x - 3)^1$.
* Dividing by $(x - 3)$ leaves a simple linear term $x + 3$, which approaches the finite number $6$.

---

### 2. Looking at the Rate of Decay Near $x = 3$

To measure the degree/order of an infinitesimal near $x = 3$, we test how many powers of $(x - 3)$ are hidden in the term's distance from zero.

Let $x = 3 + h$, where $h$ is an extremely small number approaching $0$ (so $h = x - 3$):

* **Numerator alone:**

$$x^2 - 9 = (3 + h)^2 - 9 = 9 + 6h + h^2 - 9 = 6h + h^2 = h(6 + h)$$



Since $h \to 0$, $6h + h^2 \approx 6h$. The $h^2$ term becomes tiny compared to $6h$, so $x^2 - 9$ shrinks linearly with $h^1$, **not** quadratically with $h^2$.
* **The entire fraction minus its limit:**

$$\frac{x^2 - 9}{x - 3} - 6 = \frac{6h + h^2}{h} - 6 = (6 + h) - 6 = h$$



Because the difference between the function and its limit equals $h^1 = (x - 3)^1$ exactly, its order/degree of decay is **1**—the exact same degree as $(x - 3)^1$.

---

### Summary Rule

| Expression | Near $x = 3$, behaves like... | Degree of Infinitesimal |
| --- | --- | --- |
| $x^2 - 9$ | $6(x - 3)$ | Degree 1 |
| $(x - 3)^2$ | $(x - 3)^2$ | Degree 2 |
| $\frac{x^2 - 9}{x - 3} - 6$ | $1(x - 3)$ | Degree 1 |

The $x^2$ term only creates a higher-degree infinitesimal if the zero at $x = 3$ is a **repeated root** (like $(x - 3)^2 = x^2 - 6x + 9$). For $x^2 - 9$, the zero at $x = 3$ is only a **single root**, so it decays linearly.

# Why this way, by root

The "degree" or "order" of an infinitesimal at $x = a$ is determined by the **multiplicity of the root** (how many times $(x - a)$ appears as a factor), not the overall degree of the polynomial.

---

```md img
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuWsKANoQ1mOrVBz-MJ9pbEduY98mc_dvaDUaqswmmLYMsnjdEfgD3nc&s=10

Root multiplicity determines local shape near zero. Source: Lumen Learning
```

### 1. Root Multiplicity vs. Degree of Infinitesimal

When a polynomial has a root at $x = 3$, it can be written as:


$$P(x) = (x - 3)^k \cdot Q(x)$$

The integer **$k$** is the **multiplicity of the root**, and it dictates how fast $P(x)$ vanishes as $x \to 3$:

* **Single Root ($k = 1$):** $P(x)$ crosses the x-axis linearly like a straight line. It shrinks to zero at the rate of $(x - 3)^1$ (Degree 1).
* **Double Root ($k = 2$):** $P(x)$ bounces off the x-axis like a parabola. It shrinks much faster, at the rate of $(x - 3)^2$ (Degree 2).
* **Triple Root ($k = 3$):** $P(x)$ flattens out like $x^3$ near the root (Degree 3).

---

### 2. Why $x^2 - 9$ is only a Single Root at $x = 3$

If you factor $x^2 - 9$:


$$x^2 - 9 = (x - 3)^1 (x + 3)$$

* The factor **$(x - 3)^1$** provides the zero at $x = 3$. Because its exponent is $1$, $x = 3$ is a **single root**.
* The factor **$(x + 3)$** evaluates to $3 + 3 = 6$ near $x = 3$. It is just a constant multiplier, not a zero.

So near $x = 3$, $x^2 - 9 \approx 6(x - 3)^1$. Its speed of reaching zero is purely driven by $(x - 3)^1$, which makes it a 1st-degree infinitesimal.

---

### 3. Comparing Exponents at $x = 3$

Contrast $x^2 - 9$ with a function that *actually* has a 2nd-degree infinitesimal at $x = 3$:

| Expression | Factored Form | Root Multiplicity at $x = 3$ | Infinitesimal Degree |
| --- | --- | --- | --- |
| **$x^2 - 9$** | $(x - 3)^1(x + 3)$ | **1** (Single root) | **Degree 1** |
| **$x^2 - 6x + 9$** | $(x - 3)^2$ | **2** (Double root) | **Degree 2** |
| **$x^3 - 27$** | $(x - 3)^1(x^2 + 3x + 9)$ | **1** (Single root) | **Degree 1** |

Even though $x^3 - 27$ has $x^3$, its root at $x = 3$ is still only a single root $(x - 3)^1$, so it is also a 1st-degree infinitesimal near $x = 3$.

```md follow up prompt
Would you like to see how Taylor series reveals the root multiplicity instantly?

-> Yes
```

# Show me how Taylor series reveals the degree of an infinitesimal near a point.

A **Taylor series** expands any smooth function $f(x)$ around a point $x = a$ into a sum of power terms $(x - a)^k$:

$$f(x) = f(a) + \frac{f'(a)}{1!}(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \frac{f'''(a)}{3!}(x - a)^3 + \dots$$

When a function is **infinitely small** as $x \to a$, its constant term $f(a) = 0$.

The **degree (or order) of the infinitesimal** is simply the **exponent of the first non-zero term** in its Taylor expansion.

---

### The General Rule

If the Taylor expansion of an infinitesimal $f(x)$ at $x = a$ starts with:

$$f(x) = c_k (x - a)^k + c_{k+1}(x - a)^{k+1} + \dots \quad (c_k \neq 0)$$

* As $x \to a$, all higher-order terms become negligible compared to $(x - a)^k$.
* Therefore, **$f(x)$ is an infinitesimal of degree $k$** near $x = a$.

---

### Example 1: $f(x) = x^2 - 9$ near $x = 3$

Let's expand $f(x) = x^2 - 9$ around $a = 3$ using derivatives:

1. **Evaluate derivatives at $a = 3$:**
* $f(3) = 3^2 - 9 = 0$ *(it's an infinitesimal)*
* $f'(x) = 2x \implies f'(3) = 6 \neq 0$
* $f''(x) = 2 \implies f''(3) = 2$


2. **Plug into the Taylor formula:**

$$f(x) = 0 + \frac{6}{1!}(x - 3)^1 + \frac{2}{2!}(x - 3)^2$$


$$f(x) = 6(x - 3) + (x - 3)^2$$


3. **Determine the degree:**
* The first non-zero term is $6(x - 3)^1$.
* Since the lowest power of $(x - 3)$ is **$1$**, $x^2 - 9$ is an **infinitesimal of degree 1**.



---

### Example 2: $g(x) = x^2 - 6x + 9$ near $x = 3$

Now let's test $g(x) = x^2 - 6x + 9$ near $a = 3$:

1. **Evaluate derivatives at $a = 3$:**
* $g(3) = 9 - 18 + 9 = 0$
* $g'(x) = 2x - 6 \implies g'(3) = 0$
* $g''(x) = 2 \implies g''(3) = 2 \neq 0$


2. **Plug into the Taylor formula:**

$$g(x) = 0 + \frac{0}{1!}(x - 3)^1 + \frac{2}{2!}(x - 3)^2$$


$$g(x) = (x - 3)^2$$


3. **Determine the degree:**
* The first non-zero term has power **$2$**.
* Therefore, $x^2 - 6x + 9$ is an **infinitesimal of degree 2**.



---

### Example 3: Non-polynomial example — $\sin(x - 3)$ near $x = 3$

Taylor series works identically for non-algebraic functions like trig or exponential functions:

1. Let $h(x) = \sin(x - 3)$ near $x = 3$.
2. Expanding using the standard series for sine, setting $u = x - 3$:

$$\sin(u) = u - \frac{u^3}{3!} + \frac{u^5}{5!} - \dots$$


$$\sin(x - 3) = 1(x - 3)^1 - \frac{(x - 3)^3}{6} + \dots$$


3. The lowest power term is $(x - 3)^1$, so $\sin(x - 3)$ is an **infinitesimal of degree 1** as $x \to 3$.

---

### Summary Checklist

To find the infinitesimal degree of any function $f(x)$ at $x = a$:

1. Check that $f(a) = 0$.
2. Compute derivatives $f'(a), f''(a), f'''(a), \dots$ until you find the **first non-zero derivative** $f^{(k)}(a) \neq 0$.
3. The order of that derivative, **$k$**, is the degree of the infinitesimal.
