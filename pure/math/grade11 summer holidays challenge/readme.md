# grade 11 math challenge

"探究解锁高中数学能力题的密钥"

> source: a live on 2025.08.12
>
> problems origin: shanghai uee and mock exam papers in recent years
>
> gakusei: fira (sensei: taffy)

> (in memory of) grade 11 summer holidays math challenge

## preface

(自序)

"抛砖引玉"

这 12 道题, 皆为引用.

(相信不是最好的或最坏的选择.)

有些, 即使更愿望略过的, 也被编入其中.

(真是无奈呢)

与 08.12 那天 (看生日会后心血来潮的 f) 不同,

(这次, fira) 认真.

(人创造工具, 间隔许久的原因. 但, 不过一个月. 时间久远, 人渺...)

(because in fact everything is optionated.)

fira, 2025.09.26

## 1

```precious
z = 1 + bi, b != 0. z + 2/z = m. m in R.

求 m.
```

> 尝试巧算

<details>
  <summary>1</summary>

> 观察, 化简, 共轭虚根定理, verta 定理

```precious
z^2 - mz + 2 = 0
z_1 = 1+bi, z_2 = 1-bi (共轭虚根定理)
{
z_1 + z_2 = 2
z_1 + z_2 = - (-m)/(1) (verta)
}
m = 2
```

</details>

<details>
  <summary>2</summary>

> 虚数除法

```precious
m = z+2/z
= 1+bi + 2/(1+bi)
= 1+bi + (2(1-bi))/((1+bi)(1-bi))
= (1+2/(1+b^2)) + (b- (2b)/(1+b^2))i

(b- (2b)/(1+b^2))=0
1-2/(1+b^2) = 0 (b!=0)
b^2 = 1

m = 2
```

</details>

## 2

```precious
x,y in R
10^x - 10^y = 10
求 min(2x-y).
```

<details>
  <summary>1</summary>

> 换元, 求二次函数最值

```precious
let r = 2x-y
10^x - 10^(2x-r) = 10
let t = 10^x in (0, +inf)
r = lg(t^2/(t-10)) = lg(1/(-10(1/t)^2 + (1/t)))
r_min = lg4 + 1
```

</details>

<details>
  <summary>2</summary>

> 消元, 求导

```precious
y = lg(10^x - 10)
f(x) = 2x-y
f'(x) = 2 - 10^x/(10^x-10)
f'(x) = 0, x = lg20
f(x)_min = f(lg20) = lg4 + 1 (开区间极值点 in 驻点)
```

</details>

## 3

```precious
a>0, a != 1
f(x) = log(a, ax+2), g(x) = log(a, 1/(2x+a))
f(x), g(x) 关于 l 对称
求 f(x) cap g(x) cap l
```

<details>
  <summary>1</summary>

化简, 观察, 猜测

```precious
f(x)=log(a, ax+2)
g(x)=-log(a, 2x+a)

(观察, 猜测 a=2 为唯一解)

f(x)=g(x)
log(2, 2x+2) = 0
x = -1/2
f(x) cap g(x) cap l = (-1/2, 0)
```

</details>

<details>
  <summary>proof</summary>

对 1 猜想的证明

<details>
<summary>1</summary>

渐近线与对称性质

```precious
f(x) 渐近线: x = -2/a
g(x) 渐近线: x = -a/2
f(x), g(x) 都有竖渐近线.
两函数关于 l 对称, 其渐近线也关于 l 对称.
case(1) 两渐近线不重合
显然不成立. (l 为两渐近线正中间的竖线. 翻折后定义域不同.)
case(2) 两渐近线重合
```

</details>

<details>
<summary>2</summary>
  
- 两对称函数交点在对称轴上
- 增斜线最终超过对数

```precious
f(x) 增, g(x) 减.
abs(f(x) cap g(x)) = 1
f(x) cap g(x) in l (对称性质)
abs(f(x) cap g(x) cap l) = 1
若 l 为斜线
不妨设 l 增. (否则换 g(x))
l 显然不为 f(x) 切线. (f 在一侧, g 在两侧, 不对称.)
abs(f(x) cap g(x) cap l) != 1, 不成立. (证明: 在对数远处求导作切线)
=> l 为横线 (l 显然不为竖线)
```

</details>

</details>

## 4

```precious
f(x)=log(4, 4^x+m) - 1/2 x. D = R
forall a in R, f(a)>=f(-a)
求 m.
```

<details>
<summary>1</summary>

```precious
forall x in R
{
  f(x) >= f(x)
  f(-x)>=f(x)
}
=> forall x in R, f(x) = f(-x)
偶 f.
m = 1
```

</details>

## 5

```precious
两钟在正方体相邻两面上. 时间相同.
求 0~12 点, 时针垂直的次数.
```

<details>
<summary>1</summary>

> 观察, 想象

```precious
猜测 3点, 9点是全部解.
```

</details>

<details>
<summary>2</summary>

> 立体几何证明

```precious
(image...)
```

</details>

<details>
<summary>3</summary>

> 向量

```precious
v(l_1) = (cosa, 0, sina)
v(l_2) = (0, cosa, sina)
v(l_1) * v(l_2) = 0
a = k pi, k in Z
```

</details>

## 6

```precious
forall x in [0, +inf), f(x) = f(1/(x+1))
{f(x)|x in [0,a]} = {f(x)|x in [0,+inf)}
求 a 范围.
```

<details>
<summary>1</summary>

```precious
(image...)
```

</details>

## 7

```precious
f(x) = x, g(x) =x^2-x+2
exists x, x_1, ..., x_n in [0, 9/2],
f(x_1) + ... + f(x_(n-1)) + g(x_n) = g(x_1) + ... + g(x_(n-1)) + f(x_n)
求 n_max.
(options: 11, 13, 14, 18)
```

<details>
<summary>1</summary>

> 换元

```precious
g(x) - f(x) = x^2-2x+2
g(x_n)-f(x_n) = sum(i=1, n-1, g(x_i) - f(x_i))
x_n^2 - 2x_n +2 = sum(i=1, n-1, x_i^2-2x_i) + 2(n-1)
h(x) = x^2-2x in [-1, 45/4]
h(x_n)+2 = sum(i-1, n-1, h(x_i)) + 2n-2
2n = h(x_n) - sum(i=1, n-1, h(x_i)) + 4
<= 45/4 - (n-1)(-1) + 4
<= 61/4 + n-1
n <= 57/4 = 14.25
n_max = 14
```

</details>

## 8

```precious
f(x), D=R
forall a<c<b, c 为 M 点 <=>
exists 开区间 I
{
  c in I cap [a,b]
  forall x in I cap [a,b] cap {x|x!=c}, f(x)<f(c)
}
判断:
1. f(c) = max(f(x), x in [a,b]) => c 为 M 点
2. forall a<b, b 为 M 点 => f(x) 严增
```

<details>
<summary>1</summary>

```precious
二者皆否定.

1. 必须为唯一最大值. 缺少 "唯一". 反例: f(x) = 0.
2. 反例: 任意分段函数, 满足每段严增, 整体不严增, 每段起点不取.
(性质: 数轴无限密, 任意两点间, 都有右侧点小的数.)
```

</details>

## 9

```precious
f(x) = {
  x^3/e^x, x>=0
  ax^2, x<0
}
恰有两组点, 关于原点对称
求 a 范围
```

<details>
<summary>1</summary>

```precious
<=> f(x) = -f(-x) 在 x>0 有两解
a = -x/e^x (参变分离)

求导, 作图. (化归为模板题)
a in (-1/e, 0)
```

</details>

## 10

```precious
f(a) = min(sinx, x in [a, 2a]),
g(a) = min(sinx, x in [2a, 3a])

(sgn(f(a)), sgn(g(a))) 不可能为?
```

> 难度低

<details>
<summary>hint</summary>

```precious
作图, 取点.
有三种情况可以很容易取到.
另一种情况, 可以利用周期性, a > 2pi 时, min 一定为 -1.
(a 到 2a, 2a 到 3a 之间都相差 a)
而 a 在 [0, 2pi] 时, 每一种情况都不可能. (符号相同的连续一段算一种)
```

</details>

## 11

```precious
v(a_1), v(a_2), v(b_1) ... v(b_k) 互不相等.
abs(v(a_1) - v(a_2)) = 1
forall i in {1,2}, j in [1,k] cap N^+,
abs(v(a_i) - v(b_j)) in {1,2}
求 k_max
```

<details>
<summary>1</summary>

```precious
所有性质仅与距离有关, 与坐标无关.
不妨设 v(a_1) = (0,0), v(a_2) = (1,0)

(image...)

k_max = 6
```

</details>

## 12

<!-- \perp \parallel -->

```precious
C_1: 2x^2 - y^2 = 1
C_2: 4x^2 + y^2 = 1
M in C_1, N in C_2.
OM perp ON
证明: d(O, l_MN) 为常数
```

<details>
<summary>1</summary>

```precious
M(a,b)
N(c,d)
l_MN: (a-c)(y-b)-(b-d)(x-a)=0
{
  2a^2-b^2 = 1, b^2 = 2a^2 -1
  4c^2+d^2 = 1, d^2 = 1-4c^2
  ac+bd = 0
}
d = abs(-a(b-d)+b(a-c))/sqrt((a-c)^2+(b-d)^2)
= abs(ad-bc)/sqrt(a^2+b^2+c^2+d^2-2ac-2bd)
= abs(ad-bc)/sqrt(a^2+b^2+c^2+d^2)
d^2 = (a^2d^2-2ab-d+b^2c^2)/(3(a^2-c^2))
= (a^2(1-4c^2)+(2c^2-1)c^2+2a^2c^2)/(3(a^2c^2))
d = sqrt(1/3) = sqrt(3)/3
```

</details>

## fin

fira, 2025 年秋
