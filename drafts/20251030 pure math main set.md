# 1

编写数学 wiki 的一部分.

- 简明
- 适合大一新生
- 不使用一级标题 `#`
- wiki 文本应包含在 markdown code block 内. 使用 precious 语言. 对于所有 markdown code block, 使用 4 个 backtick. 对于所有 precious code block, 使用 3 个 backtick.

  ````md
  prose...

  ```precious
  1+1=2
  ```
  ````

Learn the Precious mathematical language syntax for generating mathematical content. Use this syntax when writing mathematical expressions in both inline and block contexts.

Basic elements:

- Write numbers as plain digits: `123`, `0.456`
- Write variables as single letters: `x`, `y`, `z`
- Use quotes for text literals: `"text here"`
- CJK characters work directly without special formatting
- Use spaces between tokens for proper parsing

Operators:

- Basic arithmetic: `+ - * /`
- Superscript and subscript: `^ _`
- Comparisons: `= != < > <= >=`
- Arrows: `-> <- <=> =>`
- Multiplication automatically becomes `\cdot`
- Division automatically becomes proper fractions
- Special operators: `//` for floor division, `%%` for modulo

Symbols and Greek letters:

- Greek: `alpha beta gamma Delta Theta`
- Infinity: `infty` or `inf`
- Calculus: `partial nabla int sum prod`
- Set theory: `in notin subset subseteq`
- Logic: `and or not implies iff`

Functions:

- Roots: `sqrt(x)`, `root(n,x)`
- Logarithms: `log(a,b)`, `ln(x)`
- Trigonometry: `sin(x)`, `cos(x)`, `tan(x)`
- Special: `abs(x)`, `floor(x)`, `ceil(x)`, `v(x)` for vectors, `case(x)` for degrees
- Optimization: `max(expr)`, `max(expr, limitation)`, `min(expr)`, `min(expr, limitation)`
- Summation: `sum(start, end, term)`

Sets and piecewise functions:

- Simple sets: `{1,2,3}`
- Set builder: `{x | x>0}`
- Piecewise functions use multiple lines within braces:

```
{
  x+1, x>=0
  x-1, x<0
}
```

Intervals:

- Closed: `[a,b]`
- Open: `(a,b)`
- Half-open: `[a,b)`

Markdown usage:

- For inline mathematics, use single backticks: `` `ax^2 + bx + c` ``
- For block mathematics, use code blocks with precious language tag:

```precious
f(x) = {
  x^2, x>=0
  -x^2, x<0
}
```

Examples:

Inline examples:

- Quadratic formula: `` `x = (-b +- sqrt(b^2 - 4ac))/(2a)` ``
- Logarithm identity: `` `log(a,b) = ln(b)/ln(a)` ``
- Mixed language: `` `forall epsilon > 0, exists delta > 0` ``

Block examples:

```precious
f(x) = {
  x^3/e^x, x>=0
  ax^2, x<0
}
求 a 使得 f(x) 在 x=0 处可导
```

```precious
S = sum(n=1, inf, 1/n^2)
lim(n->inf, (1 + 1/n)^n) = e
```

```precious
A = {x in R | x^2 < 2}
B = {y | y = 2x + 1, x in A}
```

Remember to use actual line breaks (not backslashes) for multi-line expressions in block code. Mix Chinese and English text freely with mathematical expressions. The compiler automatically handles proper formatting, fraction creation, and parenthesis balancing.

要求:

- 添加一些例子.
- 回答不包括原文. 只包含添加的内容, 以及在哪里添加.

文本:

```md
## 集合

<!--
https://www.bilibili.com/video/BV12nyrY1EGS ayumu on set and logic: intro

comments:

之前看过一个教师培训的图说互异性和无序性现在要淡化讲解，互异性应该只是列举法写集合的村规而跟集合公理毫无关系，更好的说法是元素重复是immaterial的，比如{1,1}＝{1}。只不过现在教材习题还是和之前的培训不符，还是出了一些基于互异性的习题。

(f: 印证了自己的想法.)
 -->

<!--
(callback?)

三年级 上册
9.  数学广角——集合

(比如给你一些动物, 一个圈会游泳的, 一个圈会飞的. 问, 叠加的, 表示什么?)
 -->

集合, 可以表示一些无序的事物.

<!-- (数, 点, ...) -->

<!-- todo: e.g. -->

### 形式

- 列举 `{1,2,3}`
  - `{元素,元素,元素, ...}` 使用大括号. 元素间以逗号分隔.
  - 顺序任意
  - 不重复
  <!-- reason: 集合只关心任意元素是否存在 -->
- 描述 `{n|n = 2k+1, k in N}` `{(x,y)|y=x^2}`
  - `{含参元素|参数限制}`
  - pitfall: 条件不一定要成立哦! `m<x<2m-1`
- 区间 `(0,1)` `[1,5]` `(1,2]` `[10,20)`
  - `(a,b) <=> {x|a<x<b} (a<b)` 表示 `a b` 之间的所有实数.
  - 方括号表示可取, 圆括号表示不取.
  - `inf`
  - pitfall: `a<b`
- 空集 `emptyset`
  - 不含任何元素的集合
  - `{x|3<x<2} = emptyset` `{x|x+1=x+2} = emptyset`
- 常用数集 `N` `Z` `Q` `R` `C`
  - `N` 自然数集
  <!-- 自然数集包括 0. (规避任何可能的争议) -->
  <!-- - 正整数集 + * does precious support that? maybe i should include new symbol! like Np, p is for positive. "N+" wont work, since N is a symbol while + is an operator. which will cause missing operand error -->
  - `Z` 整数集
    <!-- Z, 书写时常加一划, 与数字 2 区分. -->
  - `Q` 有理数集
  - `R` 实数集
  - `C` 复数集

### 关系

- 与元素
  - 属于 `1 in {1,2,3}` `0 in N`
  - 不属于 `0 notin {1,2,3}` `1/2 notin Z`
- 与集合
  - 子集 `{1,2} subseteq {1,2,3}` `{1,2,3} subseteq {1,2,3}`
    - `a subseteq b`
    - pitfall: `forall set a, emptyset subseteq a`
  - 真子集 `{1,2} subset {1,2,3}`
    - `a subset b <=> a subseteq b 且 a != b`
  - 相等 `{1,2,3} = {1,3,2}`
    - `a = b`
  - 不相等 `{1,2} != {2,3}`
  - `a != b`

<!--
与属于区分.
(尽管我不喜欢这样. 因为违背左右上下阅读顺序. 还是想要读作属于. 就像我喜欢说 a 除以 b 而不是 b 分之 a. a 份, a 个百分点, 而不是百分之 a. a 是 b 的子集, 把一个操作符, 动词, 变成了奇怪的东西. 文言文中的使动, 使 a b, 以 a b, 真好啊. a 被包含于 b. 也很奇怪. 就像 it enables a 翻译成这使能 a. 一般说使人们能, 或者使 a 成为可能. 但这样就不是 lit. 了. 最终的结论是. 我会说: "a 在 b 中.". 教学时会说 "a 是 b 的子集." )
-->

### 运算

- 交 `{1,2,3} cap {2,3,4} = {2,3}` `[1,10] cap Z`
  - `a cap b = {x|x in a 且 x in b}`
- 并 `{1,2,3} cup {2,3,4} = {1,2,3,4}` `(-inf, 0) cup (0, +inf)`
  - `a cup b = {x|x in a 或 x in b}`
  <!-- 或表示任一成立即可, 包括两者皆成立 -->
- 补 `a`
  <!-- todo: a 划 in precious -->
- 基数 (元素个数) `|{1,2,3}| = 3`
  - `|a|`
  - 也有一些其他等价的符号. 有时作为新定义.

### misc

<!--
放置在集合部分, 但是先给出 "推出" "等价" 的定义吧.
-->

- 集合的意义
  - (定义一个集合, 即) 划定一个范围. 对于任意的事物, 判断在其中, 或不在其中
  - `=>` 不确定的范围不是集合. `世间可爱的花` `心中转瞬即逝的风景` `接近 0 的实数`
  - `=>` 在使用列举法时, 相同的元素不重复, 顺序任意. (因为不影响存在性)
- 化简 (想象 venn graph)
  - `-a cap b = emptyset`
  - `a cup b = a`
- 子集个数
- 容斥原理

### problems

<!--
数学的乐趣即思考的乐趣.

题目放在最后比较好.
之前的部分, 放置一些 10s 内能看出答案的例子即可, 是为了简单化理解.
 -->

- 集合相等, 求参数
- 集合相等, 证明
- 子集关系, 求参数范围. (pitfall: emptyset)
- 若 a 属于, 则 fa 属于.
  <!-- - 应猜到, 可能三步就结束. -->

<!--
从来没有想过要把所有题目分类.

因为只有一部分技巧, 可以作为 template/pattern.

如化简 (不妨设, 巧算, 用定义推理转化).

如联立, 韦达.

另一些, 不过是这个时代考试, 意外出现的一些共性罢了. 出题时完全可以有意避开的.

数学 wiki, 或者, textbook. 不应该包括太特殊的内容.
 -->
```
