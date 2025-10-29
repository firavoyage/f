# 0

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

# 1

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
- 主题:

# 2

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

```
