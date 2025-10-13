# 1

编写数学 wiki 的一部分.

- 主题: 同余性质
- 解释一些数的整除性质

编写数学 wiki 的一部分.

- 尽可能简明
- 使用数学符号语言
- 不作概述 ("a 是一种常用技巧..." "本文将介绍...")
- 不联系现实或其他学科
- 不包含目录, 参见, 相关链接, 分类位置
- 最高二级标题 `##`
- 回答仅包含内容
- 主题: 同余性质
- 解释一些数的整除性质

---

## 同余定义

设 $m$ 为正整数。整数 $a$ 和 $b$ 称为模 $m$ 同余，记作 $a \equiv b \pmod{m}$，当且仅当 $m \mid (a - b)$。

## 同余基本性质

对于任意整数 $a, b, c, d$ 和正整数 $m$:

- 反射性: $a \equiv a \pmod{m}$
- 对称性: 若 $a \equiv b \pmod{m}$，则 $b \equiv a \pmod{m}$
- 传递性: 若 $a \equiv b \pmod{m}$ 且 $b \equiv c \pmod{m}$，则 $a \equiv c \pmod{m}$
- 加法: 若 $a \equiv b \pmod{m}$ 且 $c \equiv d \pmod{m}$，则 $a + c \equiv b + d \pmod{m}$
- 乘法: 若 $a \equiv b \pmod{m}$ 且 $c \equiv d \pmod{m}$，则 $ac \equiv bd \pmod{m}$
- 标量乘法: 若 $a \equiv b \pmod{m}$，则 $ka \equiv kb \pmod{m}$ 对于任意整数 $k$

## 整除性质的应用

设 $n$ 为正整数，其十进制表示为 $n = \sum\_{i=0}^{k} d_i \cdot 10^i$，其中 $d_i$ 为数字。

### 整除于 2

$10 \equiv 0 \pmod{2}$，故 $n \equiv d_0 \pmod{2}$。因此，$2 \mid n$ 当且仅当 $2 \mid d_0$。

### 整除于 3

$10 \equiv 1 \pmod{3}$，故 $n \equiv \sum d_i \pmod{3}$。因此，$3 \mid n$ 当且仅当 $3 \mid \sum d_i$。

### 整除于 4

$10^2 \equiv 0 \pmod{4}$，故 $n \equiv 10d_1 + d_0 \pmod{4}$。因此，$4 \mid n$ 当且仅当 $4 \mid (10d_1 + d_0)$。

### 整除于 5

$10 \equiv 0 \pmod{5}$，故 $n \equiv d_0 \pmod{5}$。因此，$5 \mid n$ 当且仅当 $d_0 = 0$ 或 $d_0 = 5$。

### 整除于 6

$6 = 2 \cdot 3$ 且 $\gcd(2,3)=1$，故 $6 \mid n$ 当且仅当 $2 \mid n$ 且 $3 \mid n$。

### 整除于 8

$10^3 \equiv 0 \pmod{8}$，故 $n \equiv \sum*{i=0}^{2} d_i \cdot 10^i \pmod{8}$。因此，$8 \mid n$ 当且仅当 $8 \mid \sum*{i=0}^{2} d_i \cdot 10^i$。

### 整除于 9

$10 \equiv 1 \pmod{9}$，故 $n \equiv \sum d_i \pmod{9}$。因此，$9 \mid n$ 当且仅当 $9 \mid \sum d_i$。

### 整除于 10

$10 \equiv 0 \pmod{10}$，故 $n \equiv d_0 \pmod{10}$。因此，$10 \mid n$ 当且仅当 $d_0 = 0$.

### 整除于 11

$10 \equiv -1 \pmod{11}$，故 $n \equiv \sum d_i \cdot (-1)^i \pmod{11}$。因此，$11 \mid n$ 当且仅当 $11 \mid \sum (-1)^i d_i$.

# 2

编写数学 wiki 的一部分.

- 尽可能简明
- 使用数学符号语言
- 不作概述 ("a 是一种常用技巧..." "本文将介绍...")
- 不联系现实或其他学科
- 不包含目录, 参见, 相关链接, 分类位置
- 不使用一级标题 `#`
- 使用 `$` `$$` 包含数学内容
- 回答仅包含内容
- 主题: 分母有理化

---

## 定义

分母有理化是通过代数变换消除分母中根号的过程，使分母变为有理数。

## 方法

- 若分母为单平方根 $\sqrt{a}$，则分子分母同乘 $\sqrt{a}$：
  $$
  \frac{b}{\sqrt{a}} = \frac{b \sqrt{a}}{a}
  $$
- 若分母为二项式含根号，如 $\sqrt{a} \pm \sqrt{b}$ 或 $a \pm \sqrt{b}$，则分子分母同乘共轭表达式。

## 例子

1. 有理化 $\frac{1}{\sqrt{3}}$：

   $$
   \frac{1}{\sqrt{3}} = \frac{1 \cdot \sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{\sqrt{3}}{3}
   $$

2. 有理化 $\frac{2}{\sqrt{5} + 1}$：

   $$
   \frac{2}{\sqrt{5} + 1} = \frac{2(\sqrt{5} - 1)}{(\sqrt{5} + 1)(\sqrt{5} - 1)} = \frac{2(\sqrt{5} - 1)}{5 - 1} = \frac{2(\sqrt{5} - 1)}{4} = \frac{\sqrt{5} - 1}{2}
   $$

3. 有理化 $\frac{1}{\sqrt[3]{2}}$（立方根情形）：
   $$
   \frac{1}{\sqrt[3]{2}} = \frac{1 \cdot \sqrt[3]{4}}{\sqrt[3]{2} \cdot \sqrt[3]{4}} = \frac{\sqrt[3]{4}}{2}
   $$

# 3

编写数学 wiki 的一部分.

- 尽可能简明
- 使用数学符号语言
- 不作概述 ("a 是一种常用技巧..." "本文将介绍...")
- 不联系现实或其他学科
- 不包含目录, 参见, 相关链接, 分类位置
- 不使用一级标题 `#`
- 使用 `$` `$$` 包含数学内容
- 回答仅包含内容
- 主题: 嵌套二次根式的化简

---

## 定义

嵌套二次根式指形如 $\sqrt{a + b\sqrt{c}}$ 的表达式，其中 $a, b, c \in \mathbb{R}$，且 $c > 0$ 通常为非平方数。

## 化简条件

若 $a^2 - b^2 c = d^2$ 对某 $d \in \mathbb{Q}$，则嵌套根式可化简。

## 化简公式

$$
\sqrt{a + b\sqrt{c}} = \sqrt{\frac{a + d}{2}} + \sqrt{\frac{a - d}{2}}
$$

$$
\sqrt{a - b\sqrt{c}} = \sqrt{\frac{a + d}{2}} - \sqrt{\frac{a - d}{2}}
$$

其中 $a \ge d \ge 0$。

## 推导

设 $\sqrt{a + b\sqrt{c}} = \sqrt{p} + \sqrt{q}$，则：

$$
(\sqrt{p} + \sqrt{q})^2 = p + q + 2\sqrt{pq} = a + b\sqrt{c}
$$

得方程组：

$$
p + q = a, \quad 2\sqrt{pq} = b\sqrt{c}
$$

解为：

$$
p, q = \frac{a \pm d}{2}, \quad d = \sqrt{a^2 - b^2 c}
$$

# 4

编写数学 wiki 的一部分.

- 尽可能简明
- 使用数学符号语言
- 不作概述 ("a 是一种常用技巧..." "本文将介绍...")
- 不联系现实或其他学科
- 不包含目录, 参见, 相关链接, 分类位置
- 不使用一级标题 `#`
- 使用 `$` `$$` 包含数学内容
- 回答仅包含内容
- 主题: 因式分解的方法, 有理根定理的证明与应用

---

## 因式分解的方法

### 提取公因式

对于多项式 $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$，若存在公因式 $d(x)$，则 $P(x) = d(x) Q(x)$，其中 $Q(x)$ 为商式。

### 分组法

将多项式分组后分别因式分解。例如：

$$
P(x) = ax + ay + bx + by = a(x+y) + b(x+y) = (a+b)(x+y)
$$

### 平方差公式

$$
a^2 - b^2 = (a - b)(a + b)
$$

### 完全平方公式

$$
a^2 + 2ab + b^2 = (a + b)^2, \quad a^2 - 2ab + b^2 = (a - b)^2
$$

### 二次三项式的因式分解

对于 $ax^2 + bx + c$，若存在 $p, q$ 使得 $p + q = b$ 且 $pq = ac$，则：

$$
ax^2 + bx + c = a(x - r_1)(x - r_2)
$$

其中 $r_1, r_2$ 为根，或通过配方：

$$
ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a}
$$

### 立方和与立方差

$$
a^3 + b^3 = (a + b)(a^2 - ab + b^2), \quad a^3 - b^3 = (a - b)(a^2 + ab + b^2)
$$

### 多项式长除法

若已知一根 $r$，则 $P(x) = (x - r) Q(x)$，其中 $Q(x)$ 通过长除法求得。

## 有理根定理的证明与应用

### 定理陈述

设 $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$ 为整系数多项式，且 $a_n \neq 0$。若 $P(x)$ 有有理根 $\frac{p}{q}$（其中 $p, q$ 互质），则 $p \mid a_0$ 且 $q \mid a_n$。

### 证明

假设 $\frac{p}{q}$ 是 $P(x)$ 的根，则：

$$
P\left(\frac{p}{q}\right) = a_n \left(\frac{p}{q}\right)^n + a_{n-1} \left(\frac{p}{q}\right)^{n-1} + \dots + a_1 \left(\frac{p}{q}\right) + a_0 = 0
$$

两边乘以 $q^n$：

$$
a_n p^n + a_{n-1} p^{n-1} q + \dots + a_1 p q^{n-1} + a_0 q^n = 0
$$

整理得：

$$
a_n p^n = -q (a_{n-1} p^{n-1} + \dots + a_1 p q^{n-2} + a_0 q^{n-1})
$$

故 $q \mid a_n p^n$。由于 $\gcd(p, q) = 1$，有 $q \mid a_n$。类似地，从：

$$
a_0 q^n = -p (a_n p^{n-1} + a_{n-1} p^{n-2} q + \dots + a_1 q^{n-1})
$$

得 $p \mid a_0 q^n$，且 $\gcd(p, q) = 1$，故 $p \mid a_0$。

### 应用

1. **列出候选有理根**：对于 $P(x)$，列出所有可能的有理根 $\frac{p}{q}$，其中 $p$ 为 $a_0$ 的因数，$q$ 为 $a_n$ 的因数。
2. **验证根**：代入 $P(x)$ 检验是否为根。
3. **因式分解**：若找到根 $r$，则 $P(x) = (x - r) Q(x)$，并重复过程。

例如，对于 $P(x) = 2x^3 - 3x^2 + 1$，$a_n = 2$，$a_0 = 1$，候选根为 $\pm 1, \pm \frac{1}{2}$。检验得 $x = 1$ 为根，故 $P(x) = (x - 1)(2x^2 - x - 1)$。

# 5

编写数学 wiki 的一部分.

- 尽可能简明
- 使用数学符号语言
- 不作概述 ("a 是一种常用技巧..." "本文将介绍...")
- 不联系现实或其他学科
- 不包含目录, 参见, 相关链接, 分类位置
- 不使用一级标题 `#`
- 使用 `$` `$$` 包含数学内容
- 回答仅包含内容
- 主题: 二次函数的性质, 韦达定理

---

## 二次函数的性质

二次函数的一般形式为 $f(x) = ax^2 + bx + c$，其中 $a \neq 0$。

- **图像**: 抛物线。若 $a > 0$，开口向上；若 $a < 0$，开口向下。
- **对称轴**: $x = -\frac{b}{2a}$。
- **顶点**: $\left( -\frac{b}{2a}, f\left(-\frac{b}{2a}\right) \right)$。
- **零点**: 解方程 $ax^2 + bx + c = 0$，根由 $x = \frac{-b \pm \sqrt{\Delta}}{2a}$ 给出，其中 $\Delta = b^2 - 4ac$ 为判别式。
  - $\Delta > 0$: 两个相异实根。
  - $\Delta = 0$: 一个实根（重根）。
  - $\Delta < 0$: 无实根。
- **单调性**:
  - 若 $a > 0$，在 $(-\infty, -\frac{b}{2a}]$ 上递减，在 $[-\frac{b}{2a}, \infty)$ 上递增。
  - 若 $a < 0$，在 $(-\infty, -\frac{b}{2a}]$ 上递增，在 $[-\frac{b}{2a}, \infty)$ 上递减。
- **极值**: 顶点处取得全局极值。若 $a > 0$，为最小值；若 $a < 0$，为最大值。

## 韦达定理

对于二次方程 $ax^2 + bx + c = 0$（$a \neq 0$），设根为 $x_1$ 和 $x_2$，则：

- $x_1 + x_2 = -\frac{b}{a}$
- $x_1 x_2 = \frac{c}{a}$

若方程有重根，上述关系仍成立。

# 6

编写数学 wiki 的一部分.

- 简明
- 使用数学符号语言
- 适合中学生
- 不作概述 ("a 是一种常用技巧..." "本文将介绍...")
- 不联系现实或其他学科
- 不包含目录, 参见, 相关链接, 分类位置
- 不使用一级标题 `#`
- 使用 `$` `$$` 包含数学内容, 不使用 `\(` `\)` `\[` `\]`
- `$` 中数学表达式, 开头结尾不含空格
- 回答仅包含内容
- 主题: 巧算
- 仅在该主题下, 包含尽可能多的技巧, 从小学到高中. 但表述依然简明.

---

## 基本运算性质

加法交换律：$a + b = b + a$  
加法结合律：$(a + b) + c = a + (b + c)$  
乘法交换律：$a \times b = b \times a$  
乘法结合律：$(a \times b) \times c = a \times (b \times c)$  
分配律：$a \times (b + c) = a \times b + a \times c$

## 凑整法

计算时调整数字以简化：$98 + 47 = (98 + 2) + 45 = 100 + 45 = 145$  
或 $203 - 97 = (203 - 100) + 3 = 103 + 3 = 106$

## 平方差公式

$a^2 - b^2 = (a - b)(a + b)$  
例：$15^2 - 5^2 = (15 - 5)(15 + 5) = 10 \times 20 = 200$

## 完全平方公式

$(a + b)^2 = a^2 + 2ab + b^2$  
$(a - b)^2 = a^2 - 2ab + b^2$  
例：$17^2 = (10 + 7)^2 = 100 + 2 \times 10 \times 7 + 49 = 289$

## 立方和与立方差

$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$  
$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$  
例：$8^3 + 2^3 = (8 + 2)(64 - 16 + 4) = 10 \times 52 = 520$

## 因式分解技巧

提取公因式：$ab + ac = a(b + c)$  
分组分解：$ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$  
例：$6x^2 + 9x = 3x(2x + 3)$

## 配方法

将二次式化为完全平方：$x^2 + bx = x^2 + bx + \left(\frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2$  
例：$x^2 + 6x = (x + 3)^2 - 9$

## 有理化分母

$\frac{1}{\sqrt{a}} = \frac{\sqrt{a}}{a}$  
$\frac{1}{a + \sqrt{b}} = \frac{a - \sqrt{b}}{a^2 - b}$  
例：$\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$

## 指数法则

$a^m \cdot a^n = a^{m+n}$  
$(a^m)^n = a^{mn}$  
$a^{-n} = \frac{1}{a^n}$  
例：$2^3 \cdot 2^4 = 2^{7} = 128$

## 对数性质

$\log(ab) = \log a + \log b$  
$\log\left(\frac{a}{b}\right) = \log a - \log b$  
$\log(a^n) = n \log a$  
例：$\log(100) = \log(10^2) = 2 \log 10 = 2$

## 三角函数恒等式

$\sin^2 \theta + \cos^2 \theta = 1$  
$\tan \theta = \frac{\sin \theta}{\cos \theta}$  
$\sin(2\theta) = 2 \sin \theta \cos \theta$  
例：若 $\sin \theta = \frac{3}{5}$，则 $\cos \theta = \sqrt{1 - \left(\frac{3}{5}\right)^2} = \frac{4}{5}$

## 分数运算

$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$  
$\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd}$  
例：$\frac{1}{2} + \frac{1}{3} = \frac{3 + 2}{6} = \frac{5}{6}$

## 百分比计算

$p\% = \frac{p}{100}$  
求 $a$ 的 $p\%$：$a \times \frac{p}{100}$  
例：$80$ 的 $25\% = 80 \times 0.25 = 20$

## 快速乘法

两位数乘法：$(10a + b)(10c + d) = 100ac + 10(ad + bc) + bd$  
例：$12 \times 13 = 100 \times 1 + 10 \times (2 + 3) + 6 = 156$

## 数列求和

等差数列和：$S_n = \frac{n(a_1 + a_n)}{2}$  
等比数列和：$S_n = a_1 \frac{1 - r^n}{1 - r}$（$r \neq 1$）  
例：$1 + 2 + \cdots + 10 = \frac{10 \times (1 + 10)}{2} = 55$

## 二项式定理

$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$  
例：$(x + y)^2 = x^2 + 2xy + y^2$

## 估算技巧

舍入法：$7.8 \times 3.2 \approx 8 \times 3 = 24$  
比例估算：若 $a : b = c : d$，则 $ad = bc$  
例：若 $3 : 4 = x : 12$，则 $x = \frac{3 \times 12}{4} = 9$

## 解方程技巧

移项：$ax + b = c \implies ax = c - b$  
代入法：解方程组时替换变量  
例：$2x + 3 = 7 \implies 2x = 4 \implies x = 2$

# 7

编写数学 wiki 的一部分.

- 简明
- 使用数学符号语言
- 适合中学生
- 不作概述 ("a 是一种常用技巧..." "本文将介绍...")
- 不联系现实或其他学科
- 不包含目录, 参见, 相关链接, 分类位置
- 不使用一级标题 `#`
- 使用 `$` `$$` 包含数学内容, 不使用 `\(` `\)` `\[` `\]`
- `$` 中数学表达式, 开头结尾不含空格
- 回答仅包含内容
- 主题: 计算
- 仅在该主题下, 包含尽可能多的技巧, 从小学到高中.

---

## 基本算术运算

### 加法

加法是结合两个数的运算。例如，$a + b = c$，其中 $c$ 是和。

### 减法

减法是求两个数差的运算。例如，$a - b = c$，其中 $c$ 是差。

### 乘法

乘法是重复加法的快捷方式。例如，$a \times b = c$，其中 $c$ 是积。性质包括交换律 $a \times b = b \times a$ 和分配律 $a \times (b + c) = a \times b + a \times c$。

### 除法

除法是乘法的逆运算。例如，$a \div b = c$，其中 $c$ 是商，且 $b \neq 0$。如果 $a \div b = c$，则 $a = b \times c$。

### 运算顺序

遵循 PEMDAS 规则：括号、指数、乘除、加减。例如，$2 + 3 \times 4 = 2 + 12 = 14$。

## 分数和小数

### 分数表示

分数表示为 $\frac{a}{b}$，其中 $a$ 是分子，$b$ 是分母，且 $b \neq 0$。

### 分数加减

需通分。例如，$\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$。

### 分数乘除

乘法：$\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$。除法：$\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$。

### 小数运算

小数是分数的十进制形式。加减时对齐小数点；乘法时忽略小数点，最后放置；除法时移动小数点。

### 分数与小数转换

分数转小数：$\frac{a}{b} = a \div b$。小数转分数：例如 $0.75 = \frac{75}{100} = \frac{3}{4}$。

## 百分比

### 百分比表示

百分比表示每 hundred 的部分。例如，$x\% = \frac{x}{100}$。

### 百分比计算

求 $x\%$ 的 $y$：$\frac{x}{100} \times y$。求 $a$ 是 $b$ 的百分比：$\frac{a}{b} \times 100\%$。

### 百分比变化

增加 $x\%$：$y \times (1 + \frac{x}{100})$。减少 $x\%$：$y \times (1 - \frac{x}{100})$。

## 指数和根

### 指数定义

指数表示重复乘法。例如，$a^n = a \times a \times \cdots \times a$（$n$ 次）。性质：$a^m \times a^n = a^{m+n}$，$(a^m)^n = a^{m \times n}$。

### 零指数和负指数

$a^0 = 1$（$a \neq 0$），$a^{-n} = \frac{1}{a^n}$。

### 平方根

平方根是数的二次根。例如，$\sqrt{a} = b$ 表示 $b^2 = a$。性质：$\sqrt{a \times b} = \sqrt{a} \times \sqrt{b}$。

### 高阶根

$n$ 次根：$\sqrt[n]{a} = b$ 表示 $b^n = a$。例如，$\sqrt[3]{8} = 2$。

## 代数表达式

### 变量和常数

代数表达式包含变量（如 $x$）和常数（如 $5$）。例如，$3x + 2$。

### 简化表达式

合并同类项。例如，$2x + 3x = 5x$，$4y^2 - y^2 = 3y^2$。

### 展开表达式

使用分配律。例如，$(a + b)(c + d) = ac + ad + bc + bd$。

### 因式分解

将表达式写为乘积。例如，$x^2 + 5x + 6 = (x + 2)(x + 3)$。

## 方程求解

### 一元一次方程

形式 $ax + b = 0$，解为 $x = -\frac{b}{a}$（$a \neq 0$）。

### 一元二次方程

形式 $ax^2 + bx + c = 0$，解为 $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$。

### 方程组

使用代入法或消元法。例如，解

$$
\begin{cases}
2x + y = 5 \\
x - y = 1
\end{cases}
$$

消元得 $3x = 6$，$x = 2$，代入得 $y = 1$。

## 函数计算

### 函数定义

函数 $f(x)$ 将输入 $x$ 映射到输出 $y$。例如，$f(x) = 2x + 3$。

### 函数求值

代入值计算。例如，$f(2) = 2 \times 2 + 3 = 7$。

### 复合函数

$(f \circ g)(x) = f(g(x))$。例如，$f(x) = x^2$，$g(x) = x + 1$，则 $(f \circ g)(x) = (x + 1)^2$。

### 反函数

如果 $f(a) = b$，则反函数 $f^{-1}(b) = a$。例如，$f(x) = 2x$，则 $f^{-1}(x) = \frac{x}{2}$。

## 几何计算

### 面积计算

矩形：$A = l \times w$。三角形：$A = \frac{1}{2} \times b \times h$。圆：$A = \pi r^2$。

### 周长计算

矩形：$P = 2(l + w)$。圆：$C = 2\pi r$。

### 体积计算

长方体：$V = l \times w \times h$。圆柱：$V = \pi r^2 h$。球：$V = \frac{4}{3} \pi r^3$。

### 勾股定理

在直角三角形中，$a^2 + b^2 = c^2$，其中 $c$ 是斜边。

## 三角函数

### 基本定义

在直角三角形中，$\sin \theta = \frac{\text{对边}}{\text{斜边}}$，$\cos \theta = \frac{\text{邻边}}{\text{斜边}}$，$\tan \theta = \frac{\text{对边}}{\text{邻边}}$。

### 特殊角值

$\sin 30^\circ = \frac{1}{2}$，$\cos 45^\circ = \frac{\sqrt{2}}{2}$，$\tan 60^\circ = \sqrt{3}$。

### 恒等式

$\sin^2 \theta + \cos^2 \theta = 1$，$\tan \theta = \frac{\sin \theta}{\cos \theta}$。

### 解三角形

使用正弦定理 $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$ 和余弦定理 $a^2 = b^2 + c^2 - 2bc \cos A$。

## 对数

### 对数定义

如果 $a^b = c$，则 $\log_a c = b$（$a > 0$, $a \neq 1$）。例如，$\log_2 8 = 3$。

### 对数性质

$\log_a (mn) = \log_a m + \log_a n$，$\log_a \left(\frac{m}{n}\right) = \log_a m - \log_a n$，$\log_a m^n = n \log_a m$。

### 自然对数

以 $e$ 为底的对数，记为 $\ln x$。$\ln e = 1$。

## 序列和级数

### 等差数列

序列形式 $a, a + d, a + 2d, \ldots$。第 $n$ 项：$a_n = a + (n-1)d$。前 $n$ 项和：$S_n = \frac{n}{2} (2a + (n-1)d)$。

### 等比数列

序列形式 $a, ar, ar^2, \ldots$。第 $n$ 项：$a_n = a r^{n-1}$。前 $n$ 项和：$S_n = a \frac{1 - r^n}{1 - r}$（$r \neq 1$）。

### 无穷级数

等比级数和：如果 $|r| < 1$，则 $S = \frac{a}{1 - r}$。

## 概率和统计

### 概率定义

事件概率 $P(A) = \frac{\text{有利结果数}}{\text{总可能结果数}}$。例如，掷骰子得偶数的概率为 $\frac{3}{6} = \frac{1}{2}$。

### 基本概率规则

$P(A \cup B) = P(A) + P(B) - P(A \cap B)$。如果 $A$ 和 $B$ 互斥，则 $P(A \cup B) = P(A) + P(B)$。

### 均值和方差

数据集均值 $\bar{x} = \frac{\sum x_i}{n}$。方差 $\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n}$。

### 正态分布

概率密度函数 $f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}$，其中 $\mu$ 是均值，$\sigma$ 是标准差。

## 微积分基础

### 导数定义

函数 $f(x)$ 的导数 $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$。表示瞬时变化率。

### 常见导数

$(x^n)' = n x^{n-1}$，$(\sin x)' = \cos x$，$(\cos x)' = -\sin x$，$(e^x)' = e^x$。

### 积分定义

积分是导数的逆运算。不定积分 $\int f(x) \, dx = F(x) + C$，其中 $F'(x) = f(x)$。定积分 $\int_a^b f(x) \, dx$ 表示曲线下面积。

### 常见积分

$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$（$n \neq -1$），$\int \sin x \, dx = -\cos x + C$，$\int e^x \, dx = e^x + C$。

### 微积分基本定理

如果 $F'(x) = f(x)$，则 $\int_a^b f(x) \, dx = F(b) - F(a)$。

# 8

编写数学 wiki 的一部分.

- 简明
- 使用数学符号语言
- 适合中学生
- 不作概述 ("a 是一种常用技巧..." "本文将介绍...")
- 不联系现实或其他学科
- 不包含目录, 参见, 相关链接, 分类位置
- 不使用一级标题 `#`
- 使用 `$` `$$` 包含数学内容, 不使用 `\(` `\)` `\[` `\]`
- `$` 中数学表达式, 开头结尾不含空格
- 回答仅包含内容
- 主题: 计算
- 仅在该主题下, 包含尽可能多的技巧, 从小学到初中.

---

## 基本算术运算

### 加法

加法运算记作 $+$，例如 $a + b = c$。  
交换律：$a + b = b + a$  
结合律：$(a + b) + c = a + (b + c)$  
例子：$5 + 3 = 8$

### 减法

减法运算记作 $-$，例如 $a - b = c$。  
不满足交换律：$a - b \neq b - a$（除非 $a = b$）  
例子：$10 - 4 = 6$

### 乘法

乘法运算记作 $\times$ 或 $\cdot$，例如 $a \times b = c$。  
交换律：$a \times b = b \times a$  
结合律：$(a \times b) \times c = a \times (b \times c)$  
分配律：$a \times (b + c) = a \times b + a \times c$  
例子：$7 \times 6 = 42$

### 除法

除法运算记作 $\div$ 或 $/$，例如 $a \div b = c$（$b \neq 0$）。  
不满足交换律：$a \div b \neq b \div a$  
例子：$20 \div 5 = 4$

## 运算顺序

使用 PEMDAS 规则：括号、指数、乘除、加减。  
例子：$2 + 3 \times 4 = 2 + 12 = 14$，$(2 + 3) \times 4 = 5 \times 4 = 20$

## 分数

分数表示为 $\frac{a}{b}$（$b \neq 0$）。

### 分数加法

同分母：$\frac{a}{c} + \frac{b}{c} = \frac{a + b}{c}$  
异分母：先通分，例如 $\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$  
例子：$\frac{1}{2} + \frac{1}{3} = \frac{3}{6} + \frac{2}{6} = \frac{5}{6}$

### 分数减法

同分母：$\frac{a}{c} - \frac{b}{c} = \frac{a - b}{c}$  
异分母：$\frac{a}{b} - \frac{c}{d} = \frac{ad - bc}{bd}$  
例子：$\frac{3}{4} - \frac{1}{2} = \frac{3}{4} - \frac{2}{4} = \frac{1}{4}$

### 分数乘法

$\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$  
例子：$\frac{2}{3} \times \frac{3}{4} = \frac{6}{12} = \frac{1}{2}$

### 分数除法

$\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$  
例子：$\frac{2}{3} \div \frac{4}{5} = \frac{2}{3} \times \frac{5}{4} = \frac{10}{12} = \frac{5}{6}$

## 小数

小数表示为 $a.b$，其中 $a$ 是整数部分，$b$ 是小数部分。

### 小数加法

对齐小数点后相加，例如 $1.2 + 3.45 = 4.65$

### 小数减法

对齐小数点后相减，例如 $5.6 - 2.34 = 3.26$

### 小数乘法

忽略小数点相乘，然后数小数点后位数，例如 $1.2 \times 0.3 = 0.36$

### 小数除法

移动小数点使除数为整数，例如 $1.2 \div 0.3 = 12 \div 3 = 4$

## 百分比

百分比表示为 $a\% = \frac{a}{100}$。

### 百分比计算

求 $a\%$ 的 $b$：$\frac{a}{100} \times b$  
例子：$20\%$ 的 50 是 $\frac{20}{100} \times 50 = 10$  
百分比增加：$a \times (1 + \frac{b}{100})$  
百分比减少：$a \times (1 - \frac{b}{100})$

## 指数

指数记作 $a^n$，表示 $a$ 乘以自身 $n$ 次。  
规则：  
$a^m \times a^n = a^{m+n}$  
$\frac{a^m}{a^n} = a^{m-n}$（$a \neq 0$）  
$(a^m)^n = a^{m \times n}$  
$a^0 = 1$（$a \neq 0$）  
例子：$2^3 = 8$，$5^2 \times 5^3 = 5^5 = 3125$

## 平方根

平方根记作 $\sqrt{a}$，满足 $\sqrt{a} \times \sqrt{a} = a$（$a \geq 0$）。  
例子：$\sqrt{9} = 3$，$\sqrt{16} = 4$  
性质：$\sqrt{a \times b} = \sqrt{a} \times \sqrt{b}$（$a, b \geq 0$）

## 整数性质

### 质数

质数是大于 1 且只能被 1 和自身整除的数，例如 $2, 3, 5, 7, 11, \dots$

### 最大公约数 (GCD)

GCD 是能整除两个数的最大正整数，例如 $\gcd(12, 18) = 6$

### 最小公倍数 (LCM)

LCM 是两个数的公倍数中最小的，例如 $\operatorname{lcm}(4, 6) = 12$

## 因式分解

将表达式写成乘积形式，例如 $x^2 + 5x + 6 = (x + 2)(x + 3)$  
常见形式：  
$a^2 - b^2 = (a - b)(a + b)$  
$a^2 + 2ab + b^2 = (a + b)^2$  
例子：$x^2 - 9 = (x - 3)(x + 3)$

## 解简单方程

一元一次方程：$ax + b = c$，解为 $x = \frac{c - b}{a}$（$a \neq 0$）  
例子：$2x + 3 = 7$，则 $2x = 4$，$x = 2$

## 比例和比率

比例表示为 $a : b$ 或 $\frac{a}{b}$。  
如果 $\frac{a}{b} = \frac{c}{d}$，则 $a \times d = b \times c$  
例子：若 $\frac{x}{3} = \frac{4}{6}$，则 $6x = 12$，$x = 2$

## 科学记数法

将数表示为 $a \times 10^n$，其中 $1 \leq |a| < 10$，$n$ 为整数。  
例子：$3500 = 3.5 \times 10^3$，$0.0021 = 2.1 \times 10^{-3}$
