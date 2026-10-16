# what is / and // called in py

## what is / and // called in py

In Python, <mark><strong><code dir="ltr">/</code><span> </span>is called the division operator</strong><span> </span>(or float division)</mark>, and **`//` is called the floor division operator** (or integer division). [link](https://stackoverflow.com/questions/15193927/what-do-these-operators-mean)

### The Difference Between `/` and `//`

| Operator | Name               | What it does                                                                                         | Example           | Result      |
| -------- | ------------------ | ---------------------------------------------------------------------------------------------------- | ----------------- | ----------- |
| **`/`**  | **Division**       | Divides numbers and always returns a **floating-point number** (decimal), even if it divides evenly. | `11 / 4``8 / 2`   | `2.75``4.0` |
| **`//`** | **Floor Division** | Divides numbers and **rounds down** to the nearest whole integer, discarding any remainder.          | `11 // 4``8 // 2` | `2``4`      |

_Note on negative numbers:_ Because floor division always rounds **down** (towards negative infinity), an expression like `-11 // 4` will result in `-3` rather than `-2`.

Would you like to see how these operators interact with **negative numbers**, or do you want to learn about the **modulo operator (`%`)** which captures the leftover remainder?

- [link](https://stackoverflow.com/questions/15193927/what-do-these-operators-mean)\
  Stack Overflow\
  python - What do these operators mean (\*\* , ^ , %, //)?\
  Mar 4, 2013 — is a division operation that returns an integer by discarding the remainder. Python 3 changed the behavior of / to perform floatin...
- [link](https://www.geeksforgeeks.org/python/python-operators/)\
  GeeksforGeeks\
  Python Operators\
  Sep 4, 2026 — In Python, the division operator (/) returns a floating-point result, while floor division (//) returns an integer result.

## in operators lib

In Python's `operator` built-in library, **`/` is mapped to `operator.truediv`** and **`//` is mapped to `operator.floordiv`**.

### Function Names and Equivalents

| Operator | Syntax   | `operator` Library Function   | Return Type                                                     |
| -------- | -------- | ----------------------------- | --------------------------------------------------------------- |
| **`/`**  | `a / b`  | **`operator.truediv(a, b)`**  | Always returns a `float`.                                       |
| **`//`** | `a // b` | **`operator.floordiv(a, b)`** | Returns an `int` (or a `.0` float if either input was a float). |

### Quick Code Example

python

```
import operator

# True Division (/)
print(operator.truediv(11, 4))  # Output: 2.75
print(operator.truediv(8, 2))   # Output: 4.0

# Floor Division (//)
print(operator.floordiv(11, 4)) # Output: 2
print(operator.floordiv(8, 2))  # Output: 4
```

Use code with caution.

Would you like to see how to use these functional forms with functions like **`map()`** or **`reduce()`**, or do you need the function name for another operator in the library?

## %

In Python, **`%` is called the modulo operator**, and in the `operator` library, it is mapped to **`operator.mod`**.

It divides the first number by the second and returns only the **leftover remainder**.

### Function Name and Equivalent

| Operator | Syntax  | `operator` Library Function | What it does                     | Example         | Result                                                                             |
| -------- | ------- | --------------------------- | -------------------------------- | --------------- | ---------------------------------------------------------------------------------- |
| **`%`**  | `a % b` | **`operator.mod(a, b)`**    | Returns the remainder of `a / b` | `11 % 4``8 % 2` | `3` (since 4 goes into 11 twice with 3 left over)`0` (since 8 divides evenly by 2) |

### Quick Code Example

python

```
import operator

# Using the operator syntax
print(11 % 4)               # Output: 3

# Using the operator library
print(operator.mod(11, 4))  # Output: 3
print(operator.mod(8, 2))   # Output: 0
```

Use code with caution.

Would you like to explore how **`divmod()`** combines both floor division (`//`) and modulo (`%`) into a single step, or do you need to check another symbol in the `operator` library?


# all python operators

## all python operators

**Python operators** are special symbols, combinations of symbols, or keywords used to perform operations on values and variables. They are broadly categorized into **seven main types** based on the functionality they provide. [link](https://www.w3schools.com/python/python%5Foperators.asp)

***

### 1. Arithmetic Operators

Used to perform standard mathematical calculations. [link](https://www.youtube.com/watch?v=7BxUaeROVXI\&t=5)

| Operator | Name               | Description                                          | Example (x=15, y=4) |
| -------- | ------------------ | ---------------------------------------------------- | ------------------- |
| `+`      | **Addition**       | Adds two values                                      | `x + y` → `19`      |
| `-`      | **Subtraction**    | Subtracts the right value from the left              | `x - y` → `11`      |
| `*`      | **Multiplication** | Multiplies two values                                | `x * y` → `60`      |
| `/`      | **Division**       | Divides left by right, always returns a float        | `x / y` → `3.75`    |
| `%`      | **Modulus**        | Returns the division remainder                       | `x % y` → `3`       |
| `**`     | **Exponentiation** | Left operand raised to the power of the right        | `x ** y` → `50625`  |
| `//`     | **Floor Division** | Divides and rounds down to the nearest whole integer | `x // y` → `3`      |

### 2. Comparison (Relational) Operators

Used to compare two values. They always return a Boolean value: `True` or `False`. [link](https://www.youtube.com/watch?v=7BxUaeROVXI\&t=5)

| Operator | Name                         | Example (x=10, y=20) |
| -------- | ---------------------------- | -------------------- |
| `==`     | **Equal to**                 | `x == y` → `False`   |
| `!=`     | **Not equal to**             | `x != y` → `True`    |
| `>`      | **Greater than**             | `x > y` → `False`    |
| `<`      | **Less than**                | `x < y` → `True`     |
| `>=`     | **Greater than or equal to** | `x >= y` → `False`   |
| `<=`     | **Less than or equal to**    | `x <= y` → `True`    |

### 3. Logical Operators

Used to combine conditional statements. [link](https://data-flair.training/blogs/python-operator/)

| Operator | Name            | Description                                               | Example (x=True, y=False) |
| -------- | --------------- | --------------------------------------------------------- | ------------------------- |
| `and`    | **Logical AND** | Returns `True` if both statements are true                | `x and y` → `False`       |
| `or`     | **Logical OR**  | Returns `True` if at least one statement is true          | `x or y` → `True`         |
| `not`    | **Logical NOT** | Reverses the result (turns True to False, and vice-versa) | `not x` → `False`         |

### 4. Bitwise Operators

Used to operate on binary numbers at the bit level. [link](https://www.geeksforgeeks.org/python/python-operators/)

| Operator | Name            | Description                                                | Example (𝑎=5\[0101],𝑏=3\[0011])            |
| -------- | --------------- | ---------------------------------------------------------- | ------------------------------------------ | --- | -------------- |
| `&`      | **Bitwise AND** | Sets each bit to 1 if both bits are 1                      | `a & b` → `1` \[0001]                      |
| `       |`               | **Bitwise OR**                                             | Sets each bit to 1 if one of the bits is 1 | `a  | b`→`7` \[0111] |
| `^`      | **Bitwise XOR** | Sets each bit to 1 if only one of the bits is 1            | `a ^ b` → `6` \[0110]                      |
| `~`      | **Bitwise NOT** | Inverts all the bits (unary operator)                      | `~a` → `-6`                                |
| `<<`     | **Left Shift**  | Shifts bits to the left by pushing zeros in from the right | `a << 1` → `10` \[1010]                    |
| `>>`     | **Right Shift** | Shifts bits to the right by ripping out bits               | `a >> 1` → `2` \[0010]                     |

### 5. Assignment Operators

Used to assign values to variables. They include the standard assignment alongside **augmented assignment operators** which combine an operation with an assignment. [link](https://realpython.com/python-operators-expressions/)

- **Standard:** `=`
- **Arithmetic-based:** `+=`, `-=`, `*=`, `/=`, `%=`, `//=`, `**=`
- **Bitwise-based:** `&=`, `|=`, `^=`, `>>=`, `<<=` [link](https://www.codecademy.com/resources/docs/python/operators)

### 6. Identity Operators

Used to compare objects, not if they are equal, but if they are actually the **same object in memory** (pointing to the same memory location). [link](https://data-flair.training/blogs/python-operator/)

- `is`: Returns `True` if both variables point to the exact same object.
- `is not`: Returns `True` if both variables point to different objects. [link](https://www.codecademy.com/resources/docs/python/operators)

### 7. Membership Operators

Used to test if a sequence (such as a string, list, tuple, or dictionary) is present inside an object. [link](https://data-flair.training/blogs/python-operator/)

- `in`: Returns `True` if the specified value is found in the sequence.
- `not in`: Returns `True` if the specified value is not found in the sequence. [link](https://docs.python.org/3/library/operator.html)

***

### Special & Advanced Operators

- **Matrix Multiplication (`@`):** Introduced for mathematical frameworks (like `NumPy`) to handle matrix operations.
- **The Walrus Operator (`:=`):** Known as the **assignment expression operator**. It allows you to assign a value to a variable _inside_ an expression (e.g., inside an `if` statement or `while` loop condition). [link](https://www.youtube.com/watch?v=%5FesGZDtDjPs\&vl=en)

If you want to dive deeper, let me know if you would like to see:

- The rules of **operator precedence** (which operators evaluate first)

- Examples of how to use specific operators like the **Walrus operator (`:=`)** or **Bitwise operations**

- How to implement **operator overloading** in your own custom Python classes

- [link](https://www.w3schools.com/python/python%5Foperators.asp)\
  W3Schools\
  Python Operators - W3Schools\
  Python divides the operators in the following groups: Arithmetic operators · Assignment operators. Logical operators · Identity op...

- [link](https://www.youtube.com/watch?v=7BxUaeROVXI\&t=5)\
  YouTube·Dave Gray\
  Python Operators for Beginners | Python tutorial\
  Feb 28, 2023 — Boolean operators work with boolean values. The \`not\` operator negates a boolean value. The \`and\` operator returns True if both op...\
  16m

- [link](https://www.geeksforgeeks.org/python/python-operators/)\
  GeeksforGeeks\
  Python Operators - GeeksforGeeks\
  These are used to operate on binary numbers. Bitwise Operators in Python are as follows: \* Bitwise NOT. \* Bitwise Shift. \* Bitwise...

Show all

## all python operators lib methods

In Python, the built-in [operator module](https://docs.python.org/3/library/operator.html) provides functional equivalents to all of Python's intrinsic operators. Using these library methods is highly useful for functional programming patterns, especially when working with functions like `map()`, `filter()`, or methods in the `functools` module.

The tables below map every standard Python operator to its corresponding library function in the **`operator`** module.

***

### 1. Mathematical & Arithmetic Operators

These functions handle basic calculations and binary mathematical operations.

| Operator    | Function                  | Description                                           |
| ----------- | ------------------------- | ----------------------------------------------------- |
| `+` (unary) | `operator.pos(obj)`       | Returns the positive value of `obj` (`+obj`)          |
| `-` (unary) | `operator.neg(obj)`       | Returns the negative value of `obj` (`-obj`)          |
| `+`         | `operator.add(a, b)`      | Returns `a + b`                                       |
| `-`         | `operator.sub(a, b)`      | Returns `a - b`                                       |
| `*`         | `operator.mul(a, b)`      | Returns `a * b`                                       |
| `/`         | `operator.truediv(a, b)`  | Returns mathematical division `a / b` (returns float) |
| `//`        | `operator.floordiv(a, b)` | Returns floor division `a // b`                       |
| `%`         | `operator.mod(a, b)`      | Returns modulo/remainder `a % b`                      |
| `**`        | `operator.pow(a, b)`      | Returns exponentiation `a ** b`                       |
| `@`         | `operator.matmul(a, b)`   | Returns matrix multiplication `a @ b`                 |

### 2. Comparison & Relational Operators

These functions perform comparisons and always return a Boolean (`True` or `False`).

| Operator | Function            | Description                         |
| -------- | ------------------- | ----------------------------------- |
| `<`      | `operator.lt(a, b)` | Less than (`a < b`)                 |
| `<=`     | `operator.le(a, b)` | Less than or equal to (`a <= b`)    |
| `==`     | `operator.eq(a, b)` | Equal to (`a == b`)                 |
| `!=`     | `operator.ne(a, b)` | Not equal to (`a != b`)             |
| `>`      | `operator.gt(a, b)` | Greater than (`a > b`)              |
| `>=`     | `operator.ge(a, b)` | Greater than or equal to (`a >= b`) |

### 3. Logical & Boolean Operators

These functions emulate the core logical operations. _Note:_ Because `and` and `or` use short-circuit evaluation in Python, their library equivalents evaluate both arguments completely.

| Operator / Keyword | Function              | Description                                        |
| ------------------ | --------------------- | -------------------------------------------------- | --- |
| `not`              | `operator.not_(obj)`  | Boolean negation (`not obj`)                       |
| Truth test         | `operator.truth(obj)` | Returns `True` if `obj` is true, `False` otherwise |
| Logical AND        | `operator.and_(a, b)` | Bitwise and logical intersection (same as `&`)     |
| Logical OR         | `operator.or_(a, b)`  | Bitwise and logical union (same as `              |`)  |

### 4. Bitwise & Shift Operators

Functions dedicated to manipulating integer data at the binary bit level.

| Operator | Function                | Description                            |
| -------- | ----------------------- | -------------------------------------- | -------------- | --- |
| `~`      | `operator.invert(obj)`  | Bitwise inversion / NOT (`~obj`)       |
| `&`      | `operator.and_(a, b)`   | Bitwise AND (`a & b`)                  |
| `       |`                       | `operator.or_(a, b)`                   | Bitwise OR (`a | b`) |
| `^`      | `operator.xor(a, b)`    | Bitwise XOR (`a ^ b`)                  |
| `<<`     | `operator.lshift(a, b)` | Shift `a` left by `b` bits (`a << b`)  |
| `>>`     | `operator.rshift(a, b)` | Shift `a` right by `b` bits (`a >> b`) |

### 5. Sequence & Container Operators

These methods mirror actions taken on lists, dictionaries, strings, and other iterable containers.

| Syntax / Keyword | Function                          | Description                               |
| ---------------- | --------------------------------- | ----------------------------------------- |
| `obj[key]`       | `operator.getitem(obj, key)`      | Retrieves an item by index or key         |
| `obj[key] = val` | `operator.setitem(obj, key, val)` | Sets the value at a specific index or key |
| `del obj[key]`   | `operator.delitem(obj, key)`      | Deletes an item by index or key           |
| `in`             | `operator.contains(seq, obj)`     | Tests membership (`obj in seq`)           |
| `+` (sequences)  | `operator.concat(seq1, seq2)`     | Concatenates two sequences together       |

### 6. Identity & Type Operators

| Keyword  | Function                | Description                                     |
| -------- | ----------------------- | ----------------------------------------------- |
| `is`     | `operator.is_(a, b)`    | Tests object identity equality (`a is b`)       |
| `is not` | `operator.is_not(a, b)` | Tests object identity inequality (`a is not b`) |

### 7. In-Place (Augmented Assignment) Operators

The module provides an `i` prefix version for operations that mutate objects in place (like `+=` or `*=`). If the object doesn't support mutating in place, they fall back to returning a new object.

- **Arithmetic:** `iadd()`, `isub()`, `imul()`, `itruediv()`, `ifloordiv()`, `imod()`, `ipow()`, `imatmul()`
- **Bitwise:** `iand()`, `ior()`, `ixor()`, `ilshift()`, `irshift()`
- **Sequence:** `iconcat()`

***

### Special High-Performance Grabbers

The library also provides three powerful getter factories used frequently for sorting data structures:

- **`operator.itemgetter(*items)`**: Creates a callable that fetches items from its operand (great for sorting list-of-dicts by key).
- **`operator.attrgetter(*attrs)`**: Creates a callable that fetches attributes from an object.
- \*\*`operator.methodcaller(name, \*args, **kwargs)`\*\*: Creates a callable that invokes a named method on an object when called.

Would you like to see a practical code example showing how to use **`itemgetter` for advanced sorting**, or how to use these functions with **`functools.reduce`** to process lists?

