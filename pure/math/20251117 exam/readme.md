# 上海!! 中专!!! 数学游记猫!!!!!

not a guide or reference, just a memory archive of personal feelings.

well, i... i hope you, idk... hope you enjoyed.

hope you enjoyed your stay!

2h time, 21 problems, _incl._ 12 fill in the blank, 4 select, 5 solve or prove.

some words are rewritten for clarity.

inspired by _How is Chinese high school like in 2025? Here's my answer._

## 1 ~ 6

`1. A = {0, 2, 4}, B = (0, +inf), A cap B = ?`

```precious
2. 在编号 00 ~ 19 的 20 支笔中, 随机选择 6 支.
方法: 从下列随机数表首行左起第 9 个数字起, 依次选取两个数字.
选出来的第 6 支水笔编号 = ?

95226000 49840128 66175168 39682027 43772366 27096623
92580856 43890990 06482834 59741858 29778149 64608925
```

<details>
<summary>?</summary>

随机数表是什么?

</details>

`3. cos(theta) = -5/13, theta in 第三象限, tan(theta) = ?`

`4. 1/x > 3 解集 = ?`

`5. 3+2i 为 x^2 + ax + b = 0 一解. a,b in R. b = ?`

<details>
<summary>i</summary>

共轭虚根, verta.

</details>

`6. 选词填空, 4 空 5 词, 随机填写. 恰答对 3 空概率 = ?`

<details>
<summary>i</summary>

`(P(1,4))/(P(4,5))`

</details>

## 7 ~ 9

```precious
7. f(x) = {
  1 - e^(-x), x>0
  e^x + m, x<0
}
forall x in (-inf, 0) cup (0, +inf) f(x) 为奇函数. m = ?
```

`8. 如图, 16 个菱形, 边长 2, 内角 60 deg. v(AB)*v(CD) = ?`

`9. 如图, 正四棱锥 P - ABCD, V_(P-ABCD) = 18. S_(球 O) = ?`

## 10 ~ 12

`10. sqrt(x^2-1) = x+b 只有一个实根. b in ?`

<details>
<summary>i</summary>

作图.

分离参数, 求导作图.

`a = b <=> a^2 = b^2 and ab>=0`

</details>

`11. x^2+y^2+6x-4y=0 cap y = (2x+4)/(x+3) = {A,B,C,D}. |v(OA)+v(OB)+v(OC)+v(OD)| = ?`

<details>
<summary>i</summary>

作图.

</details>

```precious
12. forall t in R, |v(b)-t v(a)| >= |v(b)-v(a)|, |v(b)-t v(c)| >= |v(b)-v(c)|.
|a| = 3, |c| = 2, |v(a) - v(c)| = sqrt(7). |b| = ?
```

<details>
<summary>i</summary>

不妨设.

```precious
a = (3, 0) (旋转无关)

|c| = 2, |v(a) - v(c)| = sqrt(7). => c. (翻折无关, 令 c 在 a 上方.)

观察, 想象.
```

</details>

## 13 ~ 16

`13. f(x) 连续. f(a)*f(b)<0 为 f(x) 在 [a,b] 中有零点的 ? 条件`

`14. 直线 l, m, 平面 alpha, beta 的几何推理.`

`15. 奖金 300 金币. bo5, 甲 2 胜, 乙 1 胜, 停赛. 如何分配.`

<!-- fix: max(a,b) sometimes means a and b, while sometimes means a when b. a temp fix is adding a space after max. (use {} instead) fix add a space before brace() -->

```precious
16. 切比雪夫距离: d(A,B) = max {abs(x_A-x_B), abs(y_A-y_B)}. d(A, l) = min(d(A,B), B in l). 判断:
i. d((3,1), l: 2x-y-1=0) = 4/3.
ii. F_1 (-c,0), F_2 (c,0). abs(d(P, F_1)-d(P, F_2)) = 2a. forall k in R, abs(P 轨迹 cap y = k) = 2.
```

## 18

(17: use calculator stats feature.)

```precious
直三棱柱, V = 4. S_(A_1BC) = 2sqrt(2).
i. 求 d(A, 平面 A_1BC)
ii. D = (A_1+C)/2. AA_1=AB. 平面 A_1BC perp 平面 ABB_1A. 求 sin <A-BD-C>.
```

<details>
<summary>?</summary>

二面角: `sin = sqrt(1 - cos^2)`

线面角: `sin = abs(cos)`

</details>

## 19

```precious
11 月 1 日新感染者 30 人. 此后每天比前一天增加 50 人.
采取措施, 得到控制, k + 1 日起每天新感染者比前一天少 20 人.
(k in [9,29] cap N^+)
```

<details>
<summary>?</summary>

```precious
1 deg:

{
  a_(n+1) = a_n + 50, forall n
  a_(n+1) = a_n - 20, forall n in [k+1, 30]
}

2 deg:

{
  a_(n+1) = a_n + 50, forall n in [1, k]
  a_(n+1) = a_n - 20, forall n in [k+1, 30]
}
```

</details>

## 20

<!-- fix: no triangle symbol in precious! -->

```precious
C: x^2/4 + y^2/3 = 1. A in 第一象限. l_(AF_1) cap C = {A,B}.
AF_2 perp F_1F_2.
i. 求 C_(AF_1F_2)
ii. P in x-axis, l_(AP) cup l_(x=4) = Q. 求 min(v(OP)*v(QP))
iii. M in C. 3S_(OAB) = S_(MAB). 求 M.
```

## 21

```precious
f(x) = ln(x-1) + (2a)/x - 4/3, a in R.
i. x = 4 为极值点. 求此处切线.
ii. 讨论单调性.
iii. a = 0. k 为 AB 斜率, 证: forall x_1<x_2, x_1<(1+k)/k<x_2
```

<details>
<summary>i</summary>

```precious
iii. f(x) = ln(x-1) - 4/3. x_1-1<1/k<x_2-1
<=> f(t) = ln(t) - 4/3. t_1<1/k<t_2
1/k = (t_1-t_2)/(ln(t_1)-ln(t_2))
t_1/t_2<(t_1/t_2-1)/(ln(t_1/t_2))<1 (同除以 t_2, 齐次消元)
m<m/ln(m)<1
作差. (求导求值域, 证明恒大于 0.)
```

</details>
