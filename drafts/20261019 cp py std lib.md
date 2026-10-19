# all python data types

In Python, **data types classify the type of value** a variable can hold. They dictate what operations can be performed on the data and how it is stored in memory. [link](https://www.youtube.com/watch?v=ppsCxnNm-JI)

Python is a **dynamically typed language**, meaning you do not need to explicitly declare a variable's type; the interpreter infers it automatically at runtime. [link](https://www.eicta.iitk.ac.in/knowledge-hub/artificial-intelligence/python-data-types)

***

### Core Built-in Data Types Reference

| Category     | Type Name    | Mutable? | Core Purpose & Example                                     |
| ------------ | ------------ | -------- | ---------------------------------------------------------- |
| **Numeric**  | `int`        | No       | Whole numbers: `x = 42`                                    |
|              | `float`      | No       | Decimal numbers: `y = 3.14`                                |
|              | `complex`    | No       | Complex numbers (real + imaginary): `z = 2 + 3j`           |
| **Text**     | `str`        | No       | Textual data/strings: `name = "Alice"`                     |
| **Boolean**  | `bool`       | No       | Logical truth values: `is_active = True`                   |
| **Sequence** | `list`       | **Yes**  | Ordered, modifiable collection: `items = [1, 2, 3]`        |
|              | `tuple`      | No       | Ordered, unchangeable collection: `point = (10, 20)`       |
|              | `range`      | No       | Sequence of generated numbers: `nums = range(5)`           |
| **Mapping**  | `dict`       | **Yes**  | Key-value pairs: `user = {"id": 1, "role": "admin"}`       |
| **Set**      | `set`        | **Yes**  | Unordered collection of unique items: `unique = {1, 2, 3}` |
|              | `frozenset`  | No       | Immutable version of a set: `f_set = frozenset([1, 2])`    |
| **Binary**   | `bytes`      | No       | Immutable byte data: `b = b"Hello"`                        |
|              | `bytearray`  | **Yes**  | Mutable array of bytes: `ba = bytearray(5)`                |
|              | `memoryview` | No       | Access internal buffer data: `mv = memoryview(b)`          |
| **None**     | `NoneType`   | No       | Represents the absence of a value: `result = None`         |

***

### Crucial Concepts to Remember

- **Mutability vs. Immutability:**
  - **Mutable** types (`list`, `dict`, `set`, `bytearray`) can be altered after creation without changing their identity in memory.
  - **Immutable** types (`int`, `float`, `str`, `tuple`, `frozenset`, `bytes`) cannot be changed. If you modify them, Python creates a new object in memory instead. [link](https://realpython.com/ref/builtin-types/)
- **Checking and Verifying Types:**
  - To inspect what data type an object is, use the built-in Python type() function.
  - For conditional logic (e.g., verifying types within a function), it is best practice to use the Python isinstance() function. [link](https://blog.udemy.com/data-types-in-python/)
- **Type Conversion (Casting):**\
  You can explicitly force an object from one type to another using constructor functions like `int()`, `str()`, `float()`, or `list()`. [link](https://www.w3schools.com/python/python%5Fdatatypes.asp)

Would you like to explore a **specific category** (like how to manipulate lists and dictionaries) or see examples of **type conversion and casting**?

- [link](https://www.w3schools.com/python/python%5Fdatatypes.asp)\
  W3Schools\
  Python Data Types\
  Data types are automatically set upon value assignment to a variable or explicitly defined using constructor functions like str(),
- [link](https://www.youtube.com/watch?v=ppsCxnNm-JI)\
  YouTube·Alex The Analyst\
  Data Types in Python | Python for Beginners\
  Nov 1, 2022 — Data types are the classification of the data that you are storing. These classifications tell you what operations can be performe...\
  21:58
- [link](https://www.geeksforgeeks.org/python/python-data-types/)\
  GeeksforGeeks\
  Python Data Types - GeeksforGeeks\
  Sep 19, 2026 — Data types in Python define the type of value stored in a variable. Python Numeric data types are used to store numeric values. Bo...

Show all

## can you monkey patch chainable methods

<mark><strong><span>Yes, you can monkey patch chainable methods</span></strong><span> </span>in Python</mark>. Because Python evaluates methods dynamically at runtime, you can attach or replace methods on a class even after it has been defined.

To keep the methods **chainable**, your patched function must simply **return `self`** (or a new instance of the class), allowing the next method in the chain to be called immediately.

***

### Step-by-Step Code Example

Here is how you can dynamically add a new chainable method to an existing class.

python

```
# 1. Define an existing class with native chainable methods
class TextProcessor:
    def __init__(self, text):
        self.text = text

    def uppercase(self):
        self.text = self.text.upper()
        return self  # <-- Crucial for chaining

# 2. Define the new function you want to inject
# It must accept 'self' as the first argument and return 'self'
def exclaim(self):
    self.text = f"{self.text}!!"
    return self  # <-- Crucial for keeping it chainable

# 3. Apply the monkey patch
# We attach our standalone function to the class definition
TextProcessor.exclaim = exclaim

# 4. Test the chainable monkey patch
processor = TextProcessor("hello world")

# You can now seamlessly chain the original and patched methods together
result = processor.uppercase().exclaim().text
print(result)  # Output: HELLO WORLD!!
```

Use code with caution.

***

### Important Safeguards

While monkey patching is highly flexible, it carries structural risks:

- **Name Collisions:** Ensure your patched method name doesn't overwrite an existing method, which could silently break third-party libraries relying on that class.
- **Debugging Hurdles:** Patched methods don't appear in the original source file of the class, which can confuse other developers tracking down bugs.
- **Static Analysis:** Tools like MyPy, Flake8, or IDE autocomplete will not recognize the patched method unless you explicitly update type stubs or use dynamic bypasses like `getattr()`.

Are you trying to monkey patch a **built-in Python type** (like `str` or `list`), or a class from a **third-party library** (like Pandas)? Built-in types require a slightly different approach since their C-extension modules are immutable by default.

## i mean to patch on builtin data types like string list etc.

**No, you cannot directly monkey patch built-in data types** like `str`, `list`, `dict`, or `int` in standard Python. [link](https://stackoverflow.com/questions/192649/can-you-monkey-patch-methods-on-core-types-in-python)

If you try to execute `str.exclaim = exclaim`, Python will immediately raise a `TypeError: can't set attributes of built-in/extension type 'str'`. This constraint exists because Python's built-in core types are implemented in immutable C-extension modules to protect the memory integrity of the runtime environment. [link](https://ruivieira.dev/python-monkey-patching-for-readability.html)

However, you can easily achieve the exact same chainable behavior using two clean, standard alternatives, or bypass the restriction entirely using a specialized library.

***

### Alternative 1: Inherit from the Built-in Class (Recommended)

The cleanest and most "Pythonic" way to create chainable custom methods on native data types is to subclass them.

python

```
# Subclass the built-in 'str' data type
class ChainableStr(str):
    def exclaim(self):
        # We must wrap the result in ChainableStr to keep it chainable
        return ChainableStr(f"{self}!!")

    def reverse(self):
        return ChainableStr(self[::-1])

# Execution
text = ChainableStr("hello")
result = text.reverse().exclaim()

print(result)        # Output: olleh!!
print(type(result))  # Output: <class '__main__.ChainableStr'>
```

Use code with caution.

***

### Alternative 2: Use Built-in Wrapper Modules (`UserList`, `UserString`)

If you want to modify collection types like lists or dictionaries, subclassing `list` or `dict` directly can sometimes lead to unexpected behavior because their internal C code often bypasses overridden Python methods.

To solve this, Python provides robust wrapper classes in the [collections module](https://docs.python.org/3/library/collections.html) specifically designed to be extended:

python

```
from collections import UserList

class ChainableList(UserList):
    def remove_nulls(self):
        self.data = [x for x in self.data if x is not None]
        return self  # Return self to maintain chaining

    def double_values(self):
        self.data = [x * 2 for x in self.data]
        return self  # Return self to maintain chaining

# Execution
mylist = ChainableList([1, None, 3, None, 5])
result = mylist.remove_nulls().double_values()

print(result)  # Output: [2, 6, 10]
```

Use code with caution.

***

### Alternative 3: Force It via `forbiddenfruit` (Hack/Testing Only)

If you are working on a local debugging tool or a unit test and absolutely _must_ patch the native class globally, you can use a third-party library called `forbiddenfruit`. It relies on internal `ctypes` bindings to force Python to overwrite the protected C memory slots of built-in types. [link](https://github.com/clarete/forbiddenfruit/blob/master/forbiddenfruit/%5F%5Finit%5F%5F.py)

First, install the library:

bash

```
pip install forbiddenfruit
```

Use code with caution.

Then, use the `curse` function to inject your chainable method: [link](https://stackoverflow.com/questions/192649/can-you-monkey-patch-methods-on-core-types-in-python)

python

```
from forbiddenfruit import curse

# 1. Define the method (must return self or a string to chain)
def shout_and_exclaim(self):
    return f"{self.upper()}!!"

# 2. Force-patch the built-in 'str' type globally
curse(str, "shout_and_exclaim", shout_and_exclaim)

# 3. Test your native string
text = "hello world"
print(text.shout_and_exclaim().lower())  # Output: hello world!!
```

Use code with caution.

_⚠️ **Warning:** Never use `forbiddenfruit` in production code. Messing with C-level slots can destabilize the Python interpreter, cause memory errors, or create highly unpredictable behavior across unrelated packages._ [link](https://stackoverflow.com/questions/192649/can-you-monkey-patch-methods-on-core-types-in-python)

Are you designing a helper utility for a **production project** (where subclassing or wrapper classes are safest), or are you trying to **mock a built-in function** inside a test environment?

- [link](https://stackoverflow.com/questions/192649/can-you-monkey-patch-methods-on-core-types-in-python)\
  Stack Overflow\
  Can you monkey patch methods on core types in Python?\
  Oct 10, 2008 — C modules are shared between multiple interpreters in the same process, so monkeypatching them would also affect unrelated interpr...
- [link](https://medium.com/@karanji01/understanding-monkey-patching-in-python-3f35eaacc0f6)\
  Medium\
  Understanding Monkey Patching in Python | by Karan Ji | Medium\
  May 14, 2025 — Risks: Difficult debugging, broken compatibility upon library updates, and unexpected hidden side effects.
- [link](https://ruivieira.dev/python-monkey-patching-for-readability.html)\
  ruivieira.dev\
  Python monkey patching (for readability) - ruivieira.dev\
  is to first create classes to hold the ctype information of a builtin (C) class. We subclass ctypes Python representation of a C s...

Show all

## can you do in ruby

**Yes, in Ruby you can easily monkey patch built-in data types** like `String`, `Array`, or `Integer` to create chainable methods.

Unlike Python, Ruby features **open classes**. This means built-in classes are never locked down; you can reopen them at any point during runtime and append or redefine methods globally. To keep your methods **chainable**, they simply need to return `self` (if mutating the object in place) or return a new instance of that data type.

***

### Method 1: The Global Monkey Patch (Classical Way)

You can reopen the native `String` and `Array` classes directly. This applies your changes globally across your entire codebase.

ruby

```
# Reopen the built-in String class
class String
  def exclaim
    "#{self}!!" # Returns a new string instance
  end

  def shout
    self.upcase # Returns a new string instance
  end
end

# Execution: Seamlessly chaining native and custom methods
result = "hello world".shout.exclaim.reverse
puts result # Output: !!DLROW OLLEH
```

Use code with caution.

If your method modifies the object itself (in-place modification), you must explicitly return `self`:

ruby

```
class Array
  def double_evens!
    self.map! { |x| x.even? ? x * 2 : x }
    self # <--- Crucial to return self for chaining if using destructive methods
  end
end

nums = [1, 2, 3, 4]
puts nums.double_evens!.inspect # Output: [1, 4, 3, 8]
```

Use code with caution.

***

### Method 2: Using Refinements (The Safe & Modern Way)

Global monkey patching is generally discouraged in production Ruby apps because it can cause conflicts if multiple libraries try to patch the same method (known as "monkey fighting").

Ruby provides **Refinements**, which scoped your monkey patches so they are _only_ active in the files where you explicitly turn them on.

ruby

```
# 1. Define your scoped patches inside a module
module StringExtensions
  refine String do
    def exclaim
      "#{self}!!"
    end
  end
end

# --- In another part of your app or a different file ---

# Without activation, the method doesn't exist:
# "test".exclaim -> Raises NoMethodError

class Processor
  using StringExtensions # 2. Activate the monkey patch ONLY inside this class

  def process(text)
    text.upcase.exclaim # 3. Works beautifully and chains perfectly here!
  end
end

puts Processor.new.process("hello") # Output: HELLO!!
```

Use code with caution.

Would you like to see how to apply this to **ActiveSupport/Rails environments**, or explore how Ruby handles **method missing (`method_missing`)** for dynamic method chaining?

# (d) all py number methods

In Python, **"number methods"** can mean two different things: actual **built-in methods** called directly on numeric objects (like `(5).bit_length()`), or **built-in functions** that process numbers (like `abs(-5)`). [link](https://medium.com/codex/python-a-guide-to-numbers-5e4522ff1dc)

Here is the comprehensive list of both, grouped by how they are used. [link](https://www.youtube.com/watch?v=7Qu%5FKXc7xSI\&t=18)

***

### 1. Actual Methods on `int` Objects

These must be called directly on an integer. If using a literal number, wrap it in parentheses so Python doesn't confuse the dot with a decimal point. [link](https://pythondev.readthedocs.io/numbers.html)

- **`int.bit_length()`**: Returns the number of bits necessary to represent an integer in binary, excluding the sign and leading zeros.
- **`int.bit_count()`**: Returns the number of ones in the binary representation of the absolute value of the integer.
- **`int.to_bytes(length, byteorder, *, signed=False)`**: Returns an array of bytes representing the integer.
- **`int.from_bytes(bytes, byteorder, *, signed=False)`**: A class method that returns the integer represented by the given array of bytes.
- **`int.as_integer_ratio()`**: Returns a tuple of two integers (numerator, denominator) whose ratio is exactly equal to the integer (e.g., `(5).as_integer_ratio()` returns `(5, 1)`). [link](https://pythondev.readthedocs.io/numbers.html)

***

### 2. Actual Methods on `float` Objects

These methods are specific to floating-point numbers. [link](https://realpython.com/python-numbers/)

- **`float.is_integer()`**: Returns `True` if the float instance is finite with integral value, otherwise `False`.
- **`float.as_integer_ratio()`**: Returns a pair of integers whose ratio is exactly equal to the float and has a positive denominator.
- **`float.hex()`**: Returns a representation of a floating-point number as a hexadecimal string.
- **`float.fromhex(string)`**: A class method that returns the float represented by a hexadecimal string. [link](https://realpython.com/python-numbers/)

***

### 3. Actual Methods on `complex` Objects

Complex numbers represent real and imaginary values and have a few unique properties. [link](https://docs.python.org/3/builtins/stdtypes.html)

- **`complex.conjugate()`**: Returns the complex conjugate of the number (e.g., `(1+2j).conjugate()` yields `1-2j`).
- **`complex.real`**: _(Attribute)_ Returns the real part of the complex number.
- **`complex.imag`**: _(Attribute)_ Returns the imaginary part of the complex number. [link](https://docs.python.org/3/builtins/stdtypes.html)

***

### 4. Core Built-In Functions for Numbers

These are global functions where you pass the number as an argument. [link](https://www.instagram.com/p/Dd64WwSEh5n/)

#### Mathematical Transformations

- **`abs(x)`**: Returns the absolute value of a number (or magnitude for complex numbers).
- **`divmod(x, y)`**: Takes two numbers and returns a tuple containing their quotient and remainder `(x // y, x % y)`.
- **`pow(x, y, z=None)`**: Returns `x` to the power of `y`. If `z` is present, it returns `x` to the power of `y`, modulo `z`.
- **`round(number, ndigits=None)`**: Rounds a number to `ndigits` precision after the decimal point. [link](https://docs.python.org/3/builtins/stdtypes.html)

#### Type Casting & Base Conversions

- **`int(x, base=10)`**: Converts a number or string to an integer.
- **`float(x)`**: Converts a number or string to a floating-point number.
- **`complex(real, imag=0)`**: Creates a complex number.
- **`bin(x)`**: Converts an integer to a binary string prefixed with `0b`.
- **`oct(x)`**: Converts an integer to an octal string prefixed with `0o`.
- **`hex(x)`**: Converts an integer to a hexadecimal string prefixed with `0x`. [link](https://docs.python.org/3/builtins/stdtypes.html)

***

### 5. Advanced Math Methods (`math` Module)

For advanced computations, you import Python's standard [math module](https://docs.python.org/3/library/numbers.html).

| Method                | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `math.ceil(x)`        | Rounds a number **up** to the nearest integer.               |
| `math.floor(x)`       | Rounds a number **down** to the nearest integer.             |
| `math.trunc(x)`       | Drops the decimal fractional part, leaving just the integer. |
| `math.sqrt(x)`        | Returns the square root of a number.                         |
| `math.gcd(*integers)` | Returns the greatest common divisor of the given integers.   |
| `math.isinf(x)`       | Checks if a float is positive or negative infinity.          |
| `math.isnan(x)`       | Checks if a float is NaN (Not a Number).                     |

Are you looking for a **specific calculation** or trying to **convert data types**? Tell me what you're building, and I can show you exactly which method fits!

- [link](https://docs.python.org/3/builtins/stdtypes.html)\
  Python documentation\
  Built-in Types — Python 3.15.0 documentation\
  Oct 12, 2026 — Numeric Types — int , float , complex … complex(re, im) | a complex number with real part re, imaginary part im. im defaults to ze...
- [link](https://realpython.com/python-numbers/)\
  Real Python\
  Numbers in Python – Real Python\
  Sep 16, 2020 — Integers (int) have no fractional part and unlimited size, Complex numbers use a real part and imaginary part with j.
- [link](https://www.youtube.com/watch?v=7Qu%5FKXc7xSI\&t=18)\
  YouTube·mCoding\
  All 71 built-in Python functions\
  Jun 4, 2024 — \`int\` converts arguments to integers, and \`\_\_int\_\_\` defines this conversion for custom classes. specified number of decimal\
  2m

Show all

# (d) all py number prototype methods

In Python, numbers do not use JavaScript-style prototype methods. Instead, Python relies on **built-in instance methods and attributes** defined directly on its core numeric classes: `int` (integers), `float` (floating-point numbers), and `complex` (complex numbers). [link](https://docs.python.org/3/builtins/stdtypes.html)

Here is the complete breakdown of all native methods and properties for each Python numeric type.

***

### 1. Integer Methods & Attributes (`int`)

Integers handle whole numbers and include specific tools for binary operations and fractional representation.

- `bit_length()`: Returns the number of bits necessary to represent an integer in binary, excluding the sign and leading zeros.
- `bit_count()`: Returns the number of ones (the Hamming weight) in the binary representation of the absolute value of the integer.
- `to_bytes(length, byteorder, *, signed=False)`: Converts the integer into an array of bytes.
- `from_bytes(bytes, byteorder, *, signed=False)`: _Class method._ Returns the integer represented by the given array of bytes.
- `as_integer_ratio()`: Returns a tuple of two integers (numerator, denominator) whose ratio is exactly equal to the integer (e.g., `5.as_integer_ratio()` returns `(5, 1)`).
- `conjugate()`: Returns the complex conjugate of the integer (which is just itself).
- `real`: _Attribute._ Returns the real part of the integer (itself).
- `imag`: _Attribute._ Returns the imaginary part of the integer (always `0`).
- `numerator`: _Attribute._ Returns the numerator of the integer (itself).
- `denominator`: _Attribute._ Returns the denominator of the integer (always `1`).

***

### 2. Floating-Point Methods & Attributes (`float`)

Floats represent real numbers and include helper methods for precision mapping and hexadecimal conversions. [link](https://pynative.com/python-numbers/)

- `is_integer()`: Returns `True` if the float instance is finite with integral value (e.g., `4.0.is_integer()` is `True`).
- `as_integer_ratio()`: Returns a pair of integers whose ratio is exactly equal to the original float.
- `hex()`: Converts the float to a hexadecimal string.
- `fromhex(string)`: _Class method._ Decodes a hexadecimal string back into a float.
- `conjugate()`: Returns the complex conjugate of the float (itself).
- `real`: _Attribute._ Returns the real part of the float (itself).
- `imag`: _Attribute._ Returns the imaginary part of the float (always `0`).

***

### 3. Complex Number Methods & Attributes (`complex`)

Complex numbers are written with a `j` suffix for the imaginary component. [link](https://www.youtube.com/watch?v=So3bh6kPWUY\&t=12)

- `conjugate()`: Returns the complex conjugate of the number (e.g., `(2+3j).conjugate()` yields `2-3j`).
- `real`: _Attribute._ Returns the real part of the complex number.
- `imag`: _Attribute._ Returns the imaginary part of the complex number.

***

### 💡 The Alternative: Mathematical Dunder (Magic) Methods

If you are looking for how Python handles basic arithmetic behind the scenes (like adding, subtracting, or comparing), it uses **dunder methods** instead of standard methods. For example:

- `x + y` triggers `x.__add__(y)`
- `abs(x)` triggers `x.__abs__()`
- `round(x)` triggers `x.__round__()` [link](https://docs.python.org/3/library/numbers.html)

Are you trying to replicate **JavaScript's Number prototype** behavior in Python, or are you looking to manipulate numbers using a specific **math module** (like `math` or `decimal`)? Let me know what you are building!

- [link](https://docs.python.org/3/builtins/stdtypes.html)\
  Python documentation\
  Built-in Types — Python 3.15.0 documentation\
  Oct 12, 2026 — Objects are true by default unless … false instances include \`None\`, \`False\`, numeric zeros, and empty sequences.
- [link](https://docs.python.org/3/library/numbers.html)\
  Python documentation\
  numbers — Numeric abstract base classes — Python 3.15.0 documentation\
  Mixed-mode arithmetic operations use fallback logic and NotImplemented returns across \_\_add\_\_ and \_\_radd\_\_ to delegate between typ...
- [link](https://realpython.com/ref/stdlib/numbers/)\
  Real Python\
  numbers | Python Standard Library\
  Suppose you want to create a custom numeric type that represents a constant value. You can use the numbers module to ensure your c...

Show all

# all py number instance methods

In Python, the **built-in numeric types (`int`, `float`, and `complex`)** have a surprisingly small number of public instance methods. Because most math operations in Python use operators (like `+`, `*`) or global built-in functions (like `abs()`, `round()`), these classes only expose a few specialized methods.

Here are all the public instance methods available for Python numbers, grouped by type.

***

### 1. `int` (Integer) Instance Methods

Integers feature methods primarily designed for handling binary data conversion and checking the size of the integer.

- **`int.bit_length()`**: Returns the number of bits required to represent the integer in binary, excluding the sign and leading zeros.\
  python

<!---->

```
(16).bit_length()  # Returns 5 (binary: 10000)
```

Use code with caution.

- **`int.bit_count()`**: Returns the number of ones in the binary representation of the absolute value of the integer (also known as the population count).\
  python

<!---->

```
(19).bit_count()  # Returns 3 (binary: 10011)
```

Use code with caution.

- **`int.to_bytes(length=1, byteorder='big', *, signed=False)`**: Converts the integer to an array of bytes.\
  python

<!---->

```
(1024).to_bytes(2, byteorder='big')  # Returns b'\x04\x00'
```

Use code with caution.

- **`int.as_integer_ratio()`**: Returns a tuple of two integers (numerator, denominator) whose ratio is exactly equal to the integer. The denominator is always `1` for integers, but it is included to satisfy the [numbers.Real](https://docs.python.org/3/library/numbers.html) protocol. [link](https://docs.python.org/3/library/numbers.html)\
  python

<!---->

```
(42).as_integer_ratio()  # Returns (42, 1)
```

Use code with caution.

***

### 2. `float` (Floating-Point) Instance Methods

Floating-point numbers include methods to check their exact fractional structures and properties.

- **`float.as_integer_ratio()`**: Returns a pair of integers `(numerator, denominator)` that exactly represents the float as a fraction in lowest terms.\
  python

<!---->

```
(0.75).as_integer_ratio()  # Returns (3, 4)
```

Use code with caution.

- **`float.is_integer()`**: Returns `True` if the float instance is finite with integral value (i.e., its fractional part is zero), otherwise `False`.\
  python

<!---->

```
(4.0).is_integer()   # Returns True
(4.5).is_integer()   # Returns False
```

Use code with caution.

- **`float.hex()`**: Returns a representation of the floating-point number as a hexadecimal string.\
  python

<!---->

```
(37.5).hex()  # Returns '0x1.2c00000000000p+5'
```

Use code with caution.

_(Note: `float` also has a **class method** called `float.fromhex(s)`, but it is not an instance method)._

***

### 3. `complex` (Complex Number) Instance Methods

Complex numbers have only one explicit public instance method, alongside two read-only properties (`real` and `imag`).

- **`complex.conjugate()`**: Returns the complex conjugate of the number (negates the imaginary part).\
  python

<!---->

```
(3 + 4j).conjugate()  # Returns (3 - 4j)
```

Use code with caution.

***

### Summary Table

| Number Type   | Public Instance Method | Core Purpose                                                      |
| ------------- | ---------------------- | ----------------------------------------------------------------- |
| **`int`**     | `bit_length()`         | Finds the minimum bits needed for the value.                      |
|               | `bit_count()`          | Counts the number of `1` bits in binary.                          |
|               | `to_bytes()`           | Converts the integer into a `bytes` object.                       |
|               | `as_integer_ratio()`   | Returns `(self, 1)` for duck-typing compatibility.                |
| **`float`**   | `as_integer_ratio()`   | Converts a float to an exact `(numerator, denominator)` fraction. |
|               | `is_integer()`         | Checks if the float has a `.0` decimal remainder.                 |
|               | `hex()`                | Returns the exact float structure as a hex string.                |
| **`complex`** | `conjugate()`          | Flips the sign of the imaginary component (`+j` to `-j`).         |

_(Note: This list excludes **dunder (double underscore) methods** like `__add__` or `__str__`, which are used under the hood to power math operators and built-in functions)._ [link](https://docs.python.org/3/reference/datamodel.html)

Would you like to see how to use any of these methods for **data conversion** or **binary manipulation**, or are you looking to write your own **custom number class** using Python's magic methods?

- [link](https://docs.python.org/3/reference/datamodel.html)\
  Python documentation\
  3\. Data model — Python 3.15.0 documentation\
  Oct 9, 2026 — a constant identity. Special Methods: Operator overloading via magic methods … rich comparisons, hash, getattr, slots, class\_getit...

- [link](https://docs.python.org/3/library/numbers.html)\
  Python documentation\
  numbers — Numeric abstract base classes — Python 3.15.0 documentation\
  Oct 10, 2026 — Rational (numerator, denominator) Equal numbers must hash identically.

# all py tuple instance methods

Because Python tuples are **immutable** (cannot be changed after creation), they have a very minimalist interface. Python tuples have **only two built-in instance methods**: `.count()` and `.index()`. [link](https://realpython.com/ref/builtin-types/tuple/)

***

### 1. `count()`

Returns the **total number of times a specified value appears** in the tuple. [link](https://www.geeksforgeeks.org/python/python-tuple-methods/)

- **Syntax:** `tuple.count(value)`
- **Returns:** An integer. If the item is not found, it returns `0`. [link](https://www.geeksforgeeks.org/python/python-tuple-methods/)

python

```
fruits = ("apple", "banana", "cherry", "apple")

# Count how many times "apple" appears
print(fruits.count("apple"))   # Output: 2
print(fruits.count("orange"))  # Output: 0
```

Use code with caution.

### 2. `index()`

Searches the tuple for a specified value and returns the **index of its first occurrence**. [link](https://python-reference.readthedocs.io/en/latest/docs/tuple/)

- **Syntax:** `tuple.index(value, [start], [end])`
- **Returns:** An integer representing the index position (starting at `0`).
- **Raises:** A `ValueError` if the value is not found in the tuple.
- _Note:_ The optional `start` and `end` parameters allow you to limit your search to a specific subsection of the tuple. [link](https://www.youtube.com/watch?v=3Rpfa78AVSI\&t=6)

python

```
numbers = (10, 20, 30, 20, 40)

# Find the first occurrence of 20
print(numbers.index(20))  # Output: 1

# Find 20, but start searching from index 2
print(numbers.index(20, 2))  # Output: 3

# This will raise an error because 50 is not in the tuple
# print(numbers.index(50))  # ValueError: tuple.index(x): x not in tuple
```

Use code with caution.

***

### What about other tuple operations?

Because tuples do not have methods like `.append()`, `.remove()`, or `.sort()`, you rely on **built-in functions** and **operators** to manipulate or analyze them: [link](https://www.youtube.com/watch?v=eai7L1TjS3k)

| Operation / Function | Purpose                                              | Example                     |
| -------------------- | ---------------------------------------------------- | --------------------------- |
| **`len(tuple)`**     | Gets the number of items in the tuple.               | `len((1, 2))` → `2`         |
| **`+` operator**     | Joins (concatenates) two tuples together.            | `(1,) + (2,)` → `(1, 2)`    |
| **`*` operator**     | Repeats a tuple a given number of times.             | `(1,) * 3` → `(1, 1, 1)`    |
| **`in` operator**    | Checks if an item exists in the tuple.               | `2 in (1, 2)` → `True`      |
| **`sorted(tuple)`**  | Returns a _new sorted list_ from the tuple elements. | `sorted((3, 1))` → `[1, 3]` |

Are you trying to perform a **specific operation** on a tuple (like modifying an element or sorting data) that these two methods don't support? I can show you the standard Python **workarounds** for it!

- [link](https://www.youtube.com/watch?v=CCXdsABk4xM\&t=2)\
  YouTube·Programming with Adil\
  44\. Tuple Methods in Python Explained Step-by-Step\
  Jun 16, 2025 — Even though tuples are immutable, meaning we can't add, remove, Python tuples have only two built-in methods: the count method and...\
  7m
- [link](https://www.youtube.com/watch?v=eai7L1TjS3k)\
  YouTube·The Python Mentor\
  Python Tuples for Beginners — #8 Tuple Functions & Built-in ...\
  Oct 17, 2025 — In this lecture, you will learn how to use built-in functions and tuple methods to count, locate, and analyze data with tuples.\
  6:01
- [link](https://python-reference.readthedocs.io/en/latest/docs/tuple/)\
  Python Reference (The Right Way)\
  tuple - Python Reference (The Right Way) - DRAFT\
  index Returns the index of the first occurrence of the specified tuple item. count Returns the number of times the specified item ...

Show all

# all py string instance methods

Python's built-in `str` class has <mark><strong>47 public instance methods</strong></mark> used for manipulating, searching, and validating text. Because Python strings are **immutable**, every method that transforms text returns a brand-new string rather than modifying the original in place. [link](https://www.w3schools.com/python/python%5Fref%5Fstring.asp)

The complete list of instance methods is grouped below by functionality.

### 🔤 Case Modification

- `capitalize()`: Capitalizes the **first character** of the string and lowers the rest.
- `casefold()`: Converts the string to lowercase using a aggressive approach, perfect for **caseless matching** (removes distinctions like German ß to ss).
- `lower()`: Converts all characters to **lowercase**.
- `swapcase()`: Inverts the text case, turning **lowercase to uppercase** and vice versa.
- `title()`: Capitalizes the **first letter of every word**.
- `upper()`: Converts all characters to **uppercase**. [link](https://www.youtube.com/watch?v=bnSYeYFRCaA)

### 🔍 Searching and Counting

- `count(sub[, start[, end]])`: Returns the number of **non-overlapping occurrences** of a substring.
- `endswith(suffix[, start[, end]])`: Returns `True` if a string **ends with** the specified suffix.
- `find(sub[, start[, end]])`: Returns the **lowest index** where a substring is found, or `-1` if missing.
- `index(sub[, start[, end]])`: Like `find()`, but **raises a ValueError** if the substring isn't found.
- `rfind(sub[, start[, end]])`: Returns the **highest index** (searches from the right) where a substring is found, or `-1`.
- `rindex(sub[, start[, end]])`: Like `rfind()`, but **raises a ValueError** if missing.
- `startswith(prefix[, start[, end]])`: Returns `True` if a string **starts with** the specified prefix. [link](https://www.youtube.com/watch?v=tb6EYiHtcXU)

### 🛠️ Splitting, Joining, and Partitioning

- `join(iterable)`: Joins the elements of an iterable together using the string as a **delimiter**.
- `partition(sep)`: Splits the string at the **first occurrence** of a separator and returns a 3-tuple: `(before, sep, after)`.
- `rpartition(sep)`: Splits the string at the **last occurrence** of a separator and returns a 3-tuple.
- `rsplit(sep=None, maxsplit=-1)`: Splits a string into a list starting **from the right**.
- `split(sep=None, maxsplit=-1)`: Splits a string into a list using a specified **separator delimiter**.
- `splitlines(keepends=False)`: Splits the string at **line breaks** and returns a list of lines. [link](https://www.geeksforgeeks.org/python/python-string-methods/)

### 🧼 Padding, Aligning, and Stripping

- `center(width[, fillchar])`: Centers the string padded by a **fill character** (defaults to spaces).
- `expandtabs(tabsize=8)`: Replaces all **tab characters (`\t`)** with spaces.
- `ljust(width[, fillchar])`: **Left-aligns** the string within a specific width.
- `lstrip([chars])`: Removes **leading** whitespace or specified characters.
- `rjust(width[, fillchar])`: **Right-aligns** the string within a specific width.
- `rstrip([chars])`: Removes **trailing** whitespace or specified characters.
- `strip([chars])`: Removes both **leading and trailing** whitespace or specified characters.
- `zfill(width)`: Pads the string with **leading zeros** until it reaches the specified width. [link](https://www.codecademy.com/learn/learn-python-3/modules/learn-python3-strings/cheatsheet)

### 🔄 Replacing and Modifying

- `removeprefix(prefix, /)`: Removes the specified prefix from the **beginning** if it exists.
- `removesuffix(suffix, /)`: Removes the specified suffix from the **end** if it exists.
- `replace(old, new[, count])`: Swaps occurrences of an **old substring for a new one**.
- `translate(table)`: Maps and filters characters using a translation table generated by `maketrans()`. [link](https://www.youtube.com/watch?v=bnSYeYFRCaA)

### 📑 Formatting

- `format(*args, **kwargs)`: Replaces brace placeholders `{}` with **arguments**.
- `format_map(mapping)`: Formats placeholders using values from a **dictionary/mapping**. [link](https://www.youtube.com/watch?v=bnSYeYFRCaA)

### ⚖️ Character Evaluation & Validation (All return Booleans)

- `isalnum()`: `True` if all characters are **alphanumeric** (letters or numbers).
- `isalpha()`: `True` if all characters are **alphabet letters**.
- `isascii()`: `True` if all characters fall within the **ASCII character set**.
- `isdecimal()`: `True` if all characters are **decimal characters** (base 10 digits 0-9).
- `isdigit()`: `True` if all characters are **digits** (includes subscripts/superscripts).
- `isidentifier()`: `True` if the string is a **valid Python identifier** (variable name rule).
- `islower()`: `True` if all cased characters are **lowercase**.
- `isnumeric()`: `True` if all characters are **numeric** (includes vulgar fractions, Roman numerals, etc.).
- `isprintable()`: `True` if all characters can be displayed (e.g., handles tabs or newlines as `False`).
- `isspace()`: `True` if the string contains **only whitespace**.
- `istitle()`: `True` if the string is **titlecased**.
- `isupper()`: `True` if all cased characters are **uppercase**. [link](https://www.youtube.com/watch?v=C6Yv7oezj28)

### 💾 Encoding & Translation Utilities

- `encode(encoding='utf-8', errors='strict')`: Encodes the string into a **bytes object**.
- `maketrans(x[, y[, z]])`: Static-like utility method that creates a **translation table** for `translate()`. [link](https://www.youtube.com/watch?v=bnSYeYFRCaA)

If you would like to zoom into a specific category, let me know:

- Would you like **code examples** for how some of these work?

- Do you want to see the difference between similar methods (like **`isdecimal` vs `isdigit` vs `isnumeric`** or **`find` vs `index`**)?

- [link](https://www.youtube.com/watch?v=bnSYeYFRCaA)\
  YouTube·Indently\
  ALL 47 STRING METHODS IN PYTHON EXPLAINED\
  Jan 8, 2023 — The \`encode()\` method encodes the string using a specified encoding, such as UTF-8, returning a bytes object. You can also specify...\
  23:34

- [link](https://www.codecademy.com/learn/learn-python-3/modules/learn-python3-strings/cheatsheet)\
  Codecademy\
  Learn Python 3: Strings Cheatsheet | Codecademy\
  String Methods: .format() replaces brace placeholders with arguments; .strip() removes whitespace or specified characters from end...

- [link](https://www.w3schools.com/python/python%5Fref%5Fstring.asp)\
  W3Schools\
  Python String Methods - W3Schools\
  center(), Returns a centered string. Sets the tab size of the string. Formats specified values in a string.

Show all

# all py list instance methods

Python lists have **11 built-in instance methods** according to the [Official Python Data Structures Documentation](https://docs.python.org/3/tutorial/datastructures.html).

### Adding Elements

- `append(x)`: Adds an element `x` to the end of the list.
- `extend(iterable)`: Appends all elements from an iterable (like another list or tuple) to the end of the list.
- `insert(i, x)`: Inserts an element `x` at a given index `i`. [link](https://www.w3schools.com/python/python%5Flists%5Fmethods.asp)

### Removing Elements

- `pop([i])`: Removes and returns the item at index `i`. If no index is specified, it removes and returns the last item.
- `remove(x)`: Removes the first occurrence of the value `x`. Raises a `ValueError` if the item is not found.
- `clear()`: Removes all items from the list, leaving it empty. [link](https://www.youtube.com/watch?v=FUEzZ-O1AhA\&t=1)

### Searching & Counting

- `index(x[, start[, end]])`: Returns the zero-based index of the first occurrence of value `x`. Raises a `ValueError` if not present.
- `count(x)`: Returns the number of times value `x` appears in the list. [link](https://www.geeksforgeeks.org/python/list-methods-python/)

### Ordering & Copying

- `sort(key=None, reverse=False)`: Sorts the items of the list in place.
- `reverse()`: Reverses the elements of the list in place.
- `copy()`: Returns a shallow copy of the list. [link](https://www.youtube.com/watch?v=FUEzZ-O1AhA\&t=1)

***

### Summary Table

| Method      | Modifies In-Place? | What it Returns      | Time Complexity (Average)                |
| ----------- | ------------------ | -------------------- | ---------------------------------------- |
| `append()`  | Yes                | `None`               | O(1)                                     |
| `extend()`  | Yes                | `None`               | O(k) where k is length of iterable       |
| `insert()`  | Yes                | `None`               | O(n)                                     |
| `pop()`     | Yes                | The removed item     | O(1) for last element, O(n) for an index |
| `remove()`  | Yes                | `None`               | O(n)                                     |
| `clear()`   | Yes                | `None`               | O(n)                                     |
| `index()`   | No                 | `int` (index number) | O(n)                                     |
| `count()`   | No                 | `int` (total count)  | O(n)                                     |
| `sort()`    | Yes                | `None`               | 𝑂(𝑛log𝑛)                                 |
| `reverse()` | Yes                | `None`               | O(n)                                     |
| `copy()`    | No                 | A new list object    | O(n)                                     |

Would you like to see **code examples** of how any of these specific methods operate, or do you need help comparing them to built-in functions like **`sorted()`** or **`reversed()`**?

- [link](https://www.youtube.com/watch?v=FUEzZ-O1AhA\&t=1)\
  YouTube·Code with Josh\
  All Python List Methods in 12 Minutes\
  Nov 21, 2024 — The \`sort()\` method sorts the elements of the list in place. By default, it sorts in ascending order for numbers and alphabeticall...\
  11m
- [link](https://www.w3schools.com/python/python%5Flists%5Fmethods.asp)\
  W3Schools\
  Python - List Methods - W3Schools\
  Python has a set of built-in methods that you can use on … clear(), Removes all the elements from the list.
- [link](https://www.geeksforgeeks.org/python/list-methods-python/)\
  GeeksforGeeks\
  Python List methods - GeeksforGeeks\
  May 8, 2026 — copy(). Returns a shallow copy of the list. Returns the number of times a specified element appears in the list.

Show all

# all py dict instance methods

Python dictionaries have **11 built-in instance methods**. Here is the complete list categorized by functionality, according to the official [Python Data Structures Documentation](https://docs.python.org/3/tutorial/datastructures.html):

### 🔍 Reading & Accessing Data

- `get(key, default=None)`: Returns the value for a key if it exists in the dictionary. If not, it returns the specified default value without raising a `KeyError`.
- `keys()`: Returns a dynamic view object containing all the keys in the dictionary.
- `values()`: Returns a dynamic view object containing all the values in the dictionary.
- `items()`: Returns a dynamic view object containing tuples of `(key, value)` pairs. [link](https://algomaster.io/learn/python/dictionary-methods)

### 📝 Modifying & Adding Data

- `update([other])`: Updates the dictionary with key-value pairs from another dictionary or an iterable of pairs, overwriting existing keys.
- `setdefault(key, default=None)`: Returns the value of a key if it exists. If it does not exist, inserts the key with the specified default value and returns that value. [link](https://www.geeksforgeeks.org/python/python-dictionary-methods/)

### 🗑️ Removing Data

- `pop(key, [default])`: Removes the specified key and returns its corresponding value. Throws a `KeyError` if the key is missing unless a default value is provided.
- `popitem()`: Removes and returns the last-inserted `(key, value)` pair as a tuple. Raises a `KeyError` if the dictionary is empty.
- `clear()`: Removes all elements from the dictionary, leaving it completely empty. [link](https://www.w3schools.com/python/python%5Fref%5Fdictionary.asp)

### 👥 Copying & Initialization

- `copy()`: Returns a shallow copy of the dictionary.
- `fromkeys(iterable, value=None)`: A class-level instance method that creates a new dictionary with keys from the given iterable and all values set to the specified value. [link](https://www.youtube.com/watch?v=XXCocxSMsZU)

***

### Direct Method Comparison

| Method         | Returns         | Modifies Original Dict? | Main Use Case                                      |
| -------------- | --------------- | ----------------------- | -------------------------------------------------- |
| `clear()`      | `None`          | Yes                     | Completely reset a dictionary.                     |
| `copy()`       | New dict        | No                      | Duplicate a dictionary safely.                     |
| `fromkeys()`   | New dict        | No                      | Initialize a new dictionary with default values.   |
| `get()`        | Value / Default | No                      | Fetch a value safely without crashing.             |
| `items()`      | Dict view       | No                      | Loop over keys and values together.                |
| `keys()`       | Dict view       | No                      | Get an automatically updating list of keys.        |
| `pop()`        | Value           | Yes                     | Remove a specific item and use its value.          |
| `popitem()`    | Tuple `(k, v)`  | Yes                     | Remove items in LIFO (Last-In, First-Out) order.   |
| `setdefault()` | Value           | Conditionally           | Fetch a key, or create it if it doesn't exist yet. |
| `update()`     | `None`          | Yes                     | Bulk merge or update items.                        |
| `values()`     | Dict view       | No                      | Extract only the values for analysis or loops.     |

Would you like to see **code examples** for any of these specific methods, or do you need help using them for a **particular programming problem**?

- [link](https://www.geeksforgeeks.org/python/python-dictionary-methods/)\
  GeeksforGeeks\
  Python Dictionary Methods - GeeksforGeeks\
  copy() returns a shallow copy; get(key, default) returns key value or None; items() returns tuple view of pairs; creates new dicti...
- [link](https://www.youtube.com/watch?v=XXCocxSMsZU)\
  YouTube·James Clare\
  Every Python Dictionary Method in 5 Minutes.\
  Aug 6, 2023 — The \`fromkeys(iterable, value)\` method creates a new dictionary with keys from the provided iterable (like a list) and all values ...\
  5:08
- [link](https://algomaster.io/learn/python/dictionary-methods)\
  AlgoMaster.io\
  Dictionary Methods | Python | AlgoMaster.io\
  setdefault(key, default) is the cousin of get that also writes. If the key already exists, it returns the current value and change...

Show all

# all py set instance methods

**Python `set` objects have 17 built-in instance methods** used to modify sets or perform mathematical set operations. [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)

They are categorized below by functionality. Methods ending in `_update` modify the original set in place, while the others return a brand-new set. [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)

### 1. Adding & Removing Elements

These methods modify the set directly: [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)

- `add(element)`: Adds a single element to the set.
- `clear()`: Removes all elements, leaving an empty set.
- `pop()`: Removes and returns an arbitrary element. Raises `KeyError` if the set is empty.
- `remove(element)`: Removes the specified element. Raises `KeyError` if the element is missing.
- `discard(element)`: Removes the specified element if it exists. Does nothing if it is missing. [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)

### 2. Set Operations (Returning New Sets)

These methods perform standard mathematical operations and return a **new set** without altering the originals: [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)

- `union(*others)`: Returns a new set with all elements from the original and all specified sets. (Shortcut: `|`)
- `intersection(*others)`: Returns a new set containing only elements common to all sets. (Shortcut: `&`)
- `difference(*others)`: Returns a new set with elements in the original set that are not in the others. (Shortcut: `-`)
- `symmetric_difference(other)`: Returns a new set with elements in either the first set or the second set, but not both. (Shortcut: `^`)
- `copy()`: Returns a shallow copy of the set. [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)

### 3. In-Place Set Operations (Modifying the Original)

These methods update the original set instead of returning a new one: [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)

- `update(*others)`: Modifies the set by adding elements from all other collections. (Shortcut: `|=`)
- `intersection_update(*others)`: Keeps only the elements found in both the original set and all others. (Shortcut: `&=`)
- `difference_update(*others)`: Removes all elements found in the specified sets from the original set. (Shortcut: `-=`)
- `symmetric_difference_update(other)`: Updates the set to keep only elements found in either set, but not both. (Shortcut: `^=`) [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)

### 4. Set Comparisons & Relationships

These methods return a boolean (`True` or `False`):

- `isdisjoint(other)`: Returns `True` if two sets have a null intersection (no elements in common).
- `issubset(other)`: Returns `True` if another set contains this set. (Shortcut: `<=`)
- `issuperset(other)`: Returns `True` if this set contains another set. (Shortcut: `>=`) [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)

***

### Quick Reference Comparison

| Operation           | Return-New Method            | In-Place Method                     | Operator Shortcut |
| ------------------- | ---------------------------- | ----------------------------------- | ----------------- | --- | --- |
| **Union**           | `set.union()`                | `set.update()`                      | `                |`/` | =`  |
| **Intersection**    | `set.intersection()`         | `set.intersection_update()`         | `&` / `&=`        |
| **Difference**      | `set.difference()`           | `set.difference_update()`           | `-` / `-=`        |
| **Symmetric Diff.** | `set.symmetric_difference()` | `set.symmetric_difference_update()` | `^` / `^=`        |

_(Note: Method versions accept any iterable like lists or tuples as arguments, whereas operator shortcuts require both operands to be actual `set` instances)._

Would you like to see **code examples** demonstrating how the in-place updates differ from standard operations, or do you need help with a **specific set operation**?

- [link](https://www.w3schools.com/python/python%5Fref%5Fset.asp)\
  W3Schools\
  Python Set Methods - W3Schools\
  isdisjoint(), Returns whether two sets have a intersection or not.

# how to write types in py

In Python, you specify types <mark>using a feature called<span> </span><strong>type hints</strong><span> </span>(or<span> </span><strong>type annotations</strong>)</mark>. Because Python is a **dynamically typed language**, these hints do not change how your code runs at runtime; instead, they help your code editor provide autocompletion and allow toolings like mypy to catch bugs before you run your script. [link](https://fastapi.tiangolo.com/python-types/)

The standard syntax for typing uses a colon (`:`) for variables and an arrow (`->`) for function return values. [link](https://www.youtube.com/watch?v=wrC7NRr92Qs)

***

### 1. Variables

To type a variable, place a colon and the type after the variable name. [link](https://fastapi.tiangolo.com/python-types/)

python

```
# Basic primitive types
age: int = 25
price: float = 19.99
name: str = "Alice"
is_active: bool = True
```

Use code with caution.

### 2. Functions

Specify types for both the parameters and the final output of a function. [link](https://www.youtube.com/watch?v=wrC7NRr92Qs)

python

```
def greet(name: str) -> str:
    return f"Hello, {name}"

def add_numbers(x: int, y: int) -> int:
    return x + y
```

Use code with caution.

### 3. Collections (Lists, Dictionaries, Tuples)

You can declare what types of objects live inside your collections using square brackets `[]`. [link](https://fastapi.tiangolo.com/python-types/)

python

```
# A list containing only integers
numbers: list[int] = [1, 2, 3, 4]

# A dictionary with string keys and float values
prices: dict[str, float] = {"apple": 0.99, "banana": 0.59}

# A tuple with a fixed structure (an int followed by a string)
user: tuple[int, str] = (1, "Alice")
```

Use code with caution.

### 4. Multiple Allowed Types (Unions & Optionals)

If a variable or function can accept or return multiple types, use the pipe operator (`|`). [link](https://fastapi.tiangolo.com/python-types/)

python

```
# Can be an integer OR a float
measurement: int | float = 4.5

# Optional value: Can be a string OR None (useful for default values)
middle_name: str | None = None
```

Use code with caution.

### 5. Classes and Custom Types

Any class you create automatically becomes a valid type hint. [link](https://fastapi.tiangolo.com/python-types/)

python

```
class Dog:
    def __init__(self, name: str):
        self.name = name

# Typing a variable with a custom class
my_pet: Dog = Dog("Buddy")
```

Use code with caution.

***

### Cheat Sheet of Common Types

| Category            | Type Hint                                         | Example                              |
| ------------------- | ------------------------------------------------- | ------------------------------------ |
| **Primitives**      | `int`, `float`, `str`, `bool`, `None`             | `x: int = 5`                         |
| **Collections**     | `list[...]`, `dict[..., ...]`, `set[...]`         | `items: list[str] = ["a"]`           |
| **Fixed Sequences** | `tuple[int, str]`                                 | `pair: tuple[int, str] = (1, "one")` |
| **Flexibility**     | `Any` (turns off type checking for this variable) | `data: Any = get_wild_data()`        |
| **Unions**          | \`typeA                                           | typeB\`                              |

Are you setting up type hints for a **specific project** (like a FastAPI web app or a data science script), or do you want to learn how to **enforce and check these types** using an external tool like **mypy**?

- [link](https://fastapi.tiangolo.com/python-types/)\
  FastAPI\
  Python Types Intro - FastAPI\
  Python type hints use colon syntax (\`var: type\`) for variables/parameters to enable editor autocompletion and error checking witho...
- [link](https://www.youtube.com/watch?v=N3GL%5Fn2HOe4)\
  YouTube·NeuralNine\
  Create Custom New Types in Python\
  May 18, 2024 — Python is a dynamically typed language, allowing variables to change types. While type hints … they don't enforce types at runtime...\
  7:55
- [link](https://www.youtube.com/watch?v=wrC7NRr92Qs)\
  YouTube·Learn4Tarakki\
  Python Type Hints Crash Course\
  Jan 13, 2025 — The \`@dataclass\` decorator from the \`dataclasses\` module can automatically generate methods like \`\_\_init\_\_\` and \`\_\_repr\_\_\` for cla...\
  12:47

Show all

## compare w ts

### Type Checking: Python vs. TypeScript

While both languages use similar syntax for annotations, they handle types in fundamentally different ways. **TypeScript compiles and enforces types at build time**, whereas **Python treats types as optional hints** that do not affect runtime execution unless you run an external checker.

Here is a direct comparison of how they stack up:

| Feature              | Python (Type Hints)                                                      | TypeScript                                                                |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| **Type System**      | Gradual, structural, and nominal                                         | Gradual and strictly **structural** (duck typing)                         |
| **Enforcement**      | **Optional.** The Python interpreter completely ignores them at runtime. | **Strict.** The compiler blocks build deployment if types break.          |
| **Tooling Required** | Requires an external third-party checker like **mypy** or **Pyright**.   | Built directly into the **`tsc` compiler**.                               |
| **Compilation Step** | None. Python runs the code directly as standard script.                  | Translates (transpiles) your code down into raw JavaScript.               |
| **Type Inference**   | Minimal. You must manually annotate most variables.                      | Advanced. It automatically figures out types without explicit code hints. |

***

### Syntax Comparison Side-by-Side

#### Basic Variables & Functions

Both languages use a very similar colon (`:`) syntax for declarations.

python

```
# Python
age: int = 30

def greet(name: str) -> str:
    return f"Hello {name}"
```

Use code with caution.

typescript

```
// TypeScript
let age: number = 30;

function greet(name: string): string {
    return `Hello ${name}`;
}
```

Use code with caution.

#### Interfaces vs. Typed Dicts

TypeScript relies heavily on `interface` shapes. Python handles this using structural `Protocol` classes or `TypedDict`.

python

```
# Python
from typing import TypedDict

class User(TypedDict):
    id: int
    name: str
```

Use code with caution.

typescript

```
// TypeScript
interface User {
    id: number;
    name: string;
}
```

Use code with caution.

#### Unions and Nullability

Python uses the pipe operator (`|`) to match TypeScript’s union (`|`) syntax.

python

```
# Python
id: int | str = 102
email: str | None = None
```

Use code with caution.

typescript

```
// TypeScript
let id: number | string = 102;
let email: string | null = null;
```

Use code with caution.

Are you moving from **TypeScript over to Python** and trying to set up a similar rigid workflow, or are you deciding **which language to use** for a new application?

## compare type inference

### Type Inference: Python vs. TypeScript

**TypeScript has an incredibly advanced type inference engine**, meaning you rarely need to manually annotate local variables. **Python has very primitive type inference**, largely because its type system was bolted onto an existing dynamic language later in life.

While TypeScript can trace complex types through functions and loops automatically, Python static checkers (like mypy) usually need manual annotations for anything beyond basic variable assignments.

***

### Side-by-Side Comparison

| Capability             | Python (Mypy / Pyright)                                       | TypeScript                                                          |
| ---------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Basic Assignments**  | **Yes.** Infers primitives instantly (`x = 5` is `int`).      | **Yes.** Infers instantly (`let x = 5` is `number`).                |
| **Empty Collections**  | **No.** `items = []` results in an error or `list[Any]`.      | **Partial.** Infers `any[]` but refines it on the first push.       |
| **Function Returns**   | **No.** Requires explicit return type signatures.             | **Yes.** Automatically infers return types based on `return`.       |
| **Contextual Typing**  | **Weak.** Rarely infers a variable's type based on its usage. | **Strong.** Infers types based on where the variable sits.          |
| **Generics Inference** | **Weak.** Often requires manual type argument mapping.        | **Excellent.** Automatically extracts generic types from arguments. |

***

### Key Structural Differences

#### 1. Function Return Inference

TypeScript looks at your function's `return` statement and figures out the output automatically. Python requires you to write it out, or it will default to tracking nothing.

typescript

```
// TypeScript (No annotations needed; automatically infers return type as string)
function formatUser(name: string) {
    return `User: ${name.toUpperCase()}`;
}
```

Use code with caution.

python

```
# Python (Will NOT infer the return type; defaults to an untyped function)
def format_user(name: str):
    return f"User: {name.upper()}"  # Checkers treat the return as implicit 'Any'

# You must explicitly add the arrow:
def format_user(name: str) -> str:
    return f"User: {name.upper()}"
```

Use code with caution.

#### 2. Empty Collections

When initializing an empty container, TypeScript tracks its contents dynamically as you interact with it, whereas Python checkers often give up without a manual hint.

typescript

```
// TypeScript
const coordinates = []; // Infers any[]
coordinates.push(10.5); // Contextually narrows or updates tracking
```

Use code with caution.

python

```
# Python
coordinates = [] # Linter assumes list[Any] and flags an error under strict mode

# You must give Python a hint:
coordinates: list[float] = []
```

Use code with caution.

#### 3. Object Literals vs. Dictionaries

TypeScript views inline object structures as unique shapes. Python treats dictionaries as uniform maps, completely breaking type safety unless you explicitly cast them.

typescript

```
// TypeScript (Infers the exact structure: { name: string, age: number })
const person = { name: "Alice", age: 30 };
person.age = "thirty"; // ❌ Error: Type 'string' is not assignable to 'number'
```

Use code with caution.

python

```
# Python (Infers a generic dict[str, object] or dict[str, int | str])
person = {"name": "Alice", "age": 30}
person["age"] = "thirty" #  Allowed! The checker lost the specific shape constraint.

# Fix requires explicit TypedDict annotation:
from typing import TypedDict
class Person(TypedDict):
    name: str
    age: int

person: Person = {"name": "Alice", "age": 30}
```

Use code with caution.

Are you running into a specific scenario where **Python's checker is failing to infer a type** for you, or are you trying to configure your editor (like **VS Code / Pyright**) to behave more like a TS environment?

## compare w flow

### Type Inference & Checking: Python vs. Flow

**Flow** is a static type checker developed by Meta (Facebook) for JavaScript. Architecturally, **Flow is a much closer match to Python's ecosystem than TypeScript is**. Both Python and Flow act as **external, optional checkers** layered on top of an inherently dynamic language, rather than compiling the language into something else.

However, when it comes to **type inference**, Flow is significantly more powerful than Python. Flow uses a "global" or **structural inference** algorithm. It traces how variables move across your entire codebase, whereas Python's inference is strictly local and immediate.

***

### Side-by-Side Comparison

| Feature                 | Python (Mypy / Pyright)                                     | Flow                                                                   |
| ----------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Inference Engine**    | **Local.** Only looks at the exact line of assignment.      | **Global / Flow-based.** Traces variables across functions and scopes. |
| **Compilation Step**    | None. Python executes raw source files.                     | Stripped away using Babel or `flow-remove-types`.                      |
| **Function Signatures** | **Required.** Cannot infer unannotated function boundaries. | **Optional.** Can infer function parameter and return types by usage.  |
| **Strictness**          | Opt-in. Defaults to lenient unless configured otherwise.    | Opt-in per file using a `// @flow` comment header.                     |
| **Ecosystem Status**    | Standardized. Built into Python's core `typing` module.     | Declining. Most projects have migrated over to TypeScript.             |

***

### Key Behavioral Differences

#### 1. Function Parameter Inference (The Biggest Difference)

Python will **never** guess the type of a function parameter; you must explicitly type it. Flow can look at how a parameter is used inside or outside the function and dynamically infer what it must be.

javascript

```
// Flow (No annotations, but completely type-safe)
// @flow
function square(n) {
  return n * n; // Flow infers that 'n' must be a number because of '*'
}

square("hello"); // ❌ Flow flags this error without any annotations written!
```

Use code with caution.

python

```
# Python (Will completely ignore this function unless explicitly annotated)
def square(n):
    return n * n # Linter assumes 'n' is Any

square("hello") #  Allowed by checker at runtime, crashes during execution
```

Use code with caution.

#### 2. Under-the-Hood Checking Architecture

- **Python** checks code lines from top to bottom. If it can't figure out a type immediately on assignment, it marks it as `Any` or requires a manual annotation.
- **Flow** builds a comprehensive graph of your entire program. It looks at where variables originate, where they are passed, and where they exit, flowing types backwards and forwards through the system.

#### 3. Handling Empty Arrays/Lists

Both handle empty collections better than TypeScript's early evaluation, but Flow tracks the type dynamically as things move.

javascript

```
// @flow
let elements = []; // Flow waits to see what you put inside
elements.push(42);
let value: string = elements[0]; // ❌ Flow Error: number is not assignable to string
```

Use code with caution.

python

```
# Python
elements = [] # Linter immediately flags this in strict mode as missing type
elements.append(42)
```

Use code with caution.

Are you **maintaining a legacy JavaScript codebase** using Flow and looking to mirror its structure in Python, or are you just curious about how different **type architectures** handle inference?

## compare type inference

### Summary of Inference Engines: Python vs. TypeScript vs. Flow

To understand the spectrum of type inference, it helps to see where all three stand. <mark><strong>TypeScript</strong><span> </span>and<span> </span><strong>Flow</strong><span> </span>feature highly sophisticated inference engines that actively reduce the amount of code you write</mark>. **Python** requires explicit annotations for nearly everything except the most basic variable declarations.

```
[Low Inference] ────────────────────────────────────────────────────────► [High Inference]
     Python (Mypy)                  TypeScript                       Flow
 (Requires explicit signatures)   (Infers returns/generics)     (Infers across functions)
```

***

### Direct Feature Comparison

| Inference Capability       | Python (Mypy/Pyright)      | TypeScript                        | Flow                                  |
| -------------------------- | -------------------------- | --------------------------------- | ------------------------------------- |
| **Basic Local Variables**  | **Yes** (`x = 1`)          | **Yes** (`let x = 1`)             | **Yes** (`let x = 1`)                 |
| **Function Return Values** | **No** (Defaults to `Any`) | **Yes** (Based on `return`)       | **Yes** (Based on `return`)           |
| **Function Parameters**    | **No** (Defaults to `Any`) | **No** (Implicit `any` error)     | **Yes** (Inferred by operation/usage) |
| **Empty Collections**      | **No** (Requires hint)     | **Partial** (Evolves dynamically) | **Yes** (Traces insertions globally)  |
| **Contextual Typing**      | **Weak**                   | **Strong**                        | **Extremely Strong**                  |

***

### Deep Dive: How Each Engine Processes the Same Code

Let's look at how a simple function without explicit type annotations behaves across all three ecosystems when a static analysis check is run.

#### 1. Python (Local, Immediate Inference)

Python's checkers operate on a strict, local level. If a function signature isn't explicitly typed, the type checker essentially yields and treats everything inside as an unconstrained `Any` type.

python

```
# Python
def calculate(total):
    return total * 0.05

# ❌ The checker allows this! It cannot infer that 'total' shouldn't be a string.
calculate("corrupted_data")
```

Use code with caution.

#### 2. TypeScript (Contextual, Return-Driven Inference)

TypeScript refuses to infer function parameter types out of thin air (it flags an `implicit any` error), but it is excellent at inferring **return types** and tracing types down through complex logical paths.

typescript

```
// TypeScript
function calculate(total: number) {
    return total * 0.05; // Automatically infers the return type is 'number'
}

let tax = calculate(100); // 'tax' is automatically typed as a number
```

Use code with caution.

#### 3. Flow (Global, Structural Flow Inference)

Flow uses a global unification algorithm. It doesn't need a parameter annotation to know what `total` is. It analyzes the mathematical operator `*` inside the function block and concludes that `total` _must_ be a number, throwing an error if you pass it anything else.

javascript

```
// Flow (@flow)
function calculate(total) {
  return total * 0.05; // Flow looks at '*' and dictates 'total' is a number
}

// ❌ Flow flags a static check error here without a single type hint written!
calculate("corrupted_data");
```

Use code with caution.

***

### Summary Checklist for Writing Code

- **In Python:** Expect to write type annotations manually for almost all function arguments, function returns, and empty collections.
- **In TypeScript:** Write your function parameter types, and let the compiler figure out the returns, variable assignments, and object shapes on its own.
- **In Flow:** You can write almost entirely raw JavaScript, and the engine will map out the type safety constraints implicitly in the background.

Are you designing a **custom library or API**, and trying to figure out how to make your types as **user-friendly and cleanly inferred** as possible for other developers?

# what py std libs do you use in cp

## what py std libs do you use in cp

In **Competitive Programming (CP)**, Python is heavily favored for its speed of implementation and built-in support for arbitrarily large integers. To overcome Python's slower execution speed relative to C++, choosing the right **Python standard library** modules is critical. [link](https://stackoverflow.com/questions/4465329/c-c-equivalents-to-the-python-standard-library)

The most essential Python standard libraries for CP are categorized by utility below.

***

### 1. Advanced Data Structures (`collections`)

The `collections` module provides high-performance container alternatives to basic built-ins like `dict` and `list`. [link](https://realpython.com/ref/stdlib/)

- **`deque`**: Double-ended queue that supports **O(1) appends and pops** from both ends. Essential for Breadth-First Search (BFS) and sliding window problems.
- **`Counter`**: A dictionary subclass designed for counting hashable objects. It can count frequencies in a sequence in O(N) time.
- **`defaultdict`**: Eliminates the need to check if a key exists before modifying its value. Crucial for building graph adjacency lists efficiently.

### 2. Binary Search & Sorting (`bisect` & `heapq`)

Python lacks a built-in Self-Balancing Binary Search Tree (like C++'s `std::set`), but these two libraries solve most order-based problems. [link](https://www.geeksforgeeks.org/python/which-python-modules-are-useful-for-competitive-programming/)

- **`bisect`**: Provides **binary search** algorithms for sorted arrays. Functions like `bisect_left` and `bisect_right` operate in\
  𝑂\
  (\
  log\
  𝑁\
  )\
  time, making them ideal for finding upper/lower bounds. [link](https://www.geeksforgeeks.org/python/which-python-modules-are-useful-for-competitive-programming/)
- **`heapq`**: Implements a binary heap (specifically a **Min-Heap**) over a standard list. It handles\
  𝑂\
  (\
  log\
  𝑁\
  )\
  insertions and extractions. For a Max-Heap, values must be pushed as negative numbers. [link](https://www.geeksforgeeks.org/python/which-python-modules-are-useful-for-competitive-programming/)

### 3. Fast Combinatorics & Iterators (`itertools` & `math`)

Combinatorics and math tricks crop up frequently in CP, and these libraries handle them at highly optimized C-speeds.

- **`itertools`**: Generators that let you handle permutations, combinations, and cartesian products cleanly without massive nested loops.
  - `permutations()`, `combinations()`, `product()`
  - `accumulate()` (great for generating **prefix sum** arrays)
- **`math`**: Offers native functions for common algorithmic math operations.
  - `math.gcd(a, b)` (Greatest Common Divisor)
  - `math.lcm(a, b)` (Least Common Multiple, available in Python 3.9+)
  - `math.isqrt(n)` (Exact integer square root, faster and safer than `int(n**0.5)`)

### 4. Fast I/O and Recursion Overrides (`sys`)

Python's default I/O can be notoriously slow, causing unexpected Time Limit Exceeded (TLE) verdicts. The [`sys`](https://docs.python.org/3/library/index.html) module fixes this.

- **`sys.stdin.readline`**: Speeds up input processing immensely compared to standard `input()`.
- **`sys.setrecursionlimit()`**: Python's default recursion ceiling is only 1,000 deep. For deep Depth-First Search (DFS) or graph traversals, increasing this limit (e.g., to 10⁶) prevents Runtime Errors.

### 5. Wrappers & Caching (`functools`)

- **`@lcache` / `@cache`**: A decorator that wraps functions with a **Memoization** layer. This single line turns an exponential-time recursive function into an optimal **Dynamic Programming (DP)** solution instantly.

***

### CP Boilerplate Template

Most Python programmers use a setup resembling this blueprint:

python

```
import sys
from collections import deque, defaultdict, Counter
import heapq
import bisect
import math
from functools import cache

# Maximize recursion depth for DFS/Graph problems
sys.setrecursionlimit(200000)

# Fast Input setup
def input():
    return sys.stdin.readline().rstrip()

def solve():
    # Write your CP logic here
    pass

if __name__ == '__main__':
    # For multiple test cases
    # t = int(input())
    # for _ in range(t):
    #     solve()
    solve()
```

Use code with caution.

Are you running into **Time Limit Exceeded (TLE)** errors with a specific algorithm, or would you like to know how to simulate **C++ STL features** (like `std::set` or `std::map`) natively in Python?

- [link](https://www.geeksforgeeks.org/python/which-python-modules-are-useful-for-competitive-programming/)\
  GeeksforGeeks\
  Which Python Modules are useful for competitive programming?\
  heapq Please refer Heap Practice Problems for more practice. Used for binary search. Binary Search are, find index of first occurr...
- [link](https://stackoverflow.com/questions/4465329/c-c-equivalents-to-the-python-standard-library)\
  Stack Overflow\
  C / C++ equivalents to the Python Standard Library\
  The Boost library is the only open-source C++ library collection I know of that resembles the Python standard library, most of it ...
- [link](https://realpython.com/ref/stdlib/)\
  Real Python\
  Python Standard Library (Reference)\
  It includes modules for low-level system interaction like os , sys , and subprocess , as well as high-level tools like csv for han...

## what does it lack

While Python’s standard library is incredibly powerful, it lacks several critical data structures and optimizations that are native to languages like C++ (`std::set`, `std::map`) or Java. In Competitive Programming (CP), these missing pieces can make certain problems highly complex or impossible to pass within the strict time limits.

Python structurally **lacks** the following key features for CP:

### 1. Self-Balancing Binary Search Trees (Ordered Sets/Maps)

- **What's missing:** Python has no built-in equivalent to C++’s `std::set` or `std::map`.
- **The CP Problem:** You cannot easily maintain a dynamically sorted list where you can insert an element, delete an element, and find its rank (or upper/lower bound) all in\
  𝑂\
  (\
  log\
  𝑁\
  )\
  time.
- **The Workaround:** Python’s `bisect` only works on _already sorted_ static arrays (shifting elements on insertion takes O(N)). CP programmers must manually write a **Segment Tree**, a **Fenwick Tree (BIT)**, or import external modules like `sortedcontainers` (if the platform allows it).

### 2. Multi-sets

- **What's missing:** A structure that holds duplicate elements in a sorted order and allows\
  𝑂\
  (\
  log\
  𝑁\
  )\
  insertions, deletions, and bounds queries.
- **The CP Problem:** While `collections.Counter` counts frequencies, it is entirely unordered.
- **The Workaround:** Combining a `heapq` (min-heap) with a lazy-deletion hash map (`defaultdict`) to manually track valid elements.

### 3. O(1) Priority Queue Updates (Decreasing/Increasing Key)

- **What's missing:** The `heapq` module does not support updating the priority of an element already inside the heap.
- **The CP Problem:** Algorithms like **Dijkstra's Shortest Path** or **Prim's MST** ideally require updating a node's distance.
- **The Workaround:** You have to push a completely new tuple `(new_distance, node)` into the heap and write logic to ignore the old, outdated entry when it eventually gets popped. This increases memory usage and heap size.

### 4. Direct Bitset Operations

- **What's missing:** A highly optimized, fixed-size bit array like C++'s `std::bitset`.
- **The CP Problem:** While Python supports arbitrarily large integers and bitwise operations (`&`, `|`, `^`), it lacks an optimized utility to instantly count set bits (`__builtin_popcount` speed) or find the first set bit over massive binary arrays efficiently.
- **The Workaround:** Using `bin(x).count('1')`, which relies on slow string conversions, or precomputing a lookup table for chunks of bits.

### 5. Low-Level Pointer & Memory Management

- **What's missing:** Strict control over how memory is allocated and traversed.
- **The CP Problem:** Python relies heavily on pointers behind the scenes. Iterating through a Python list forces the CPU to jump around memory (cache misses) because elements aren't tightly packed like an array of primitives in C++. This overhead often causes **Time Limit Exceeded (TLE)** errors even if your algorithm has the correct Big-O time complexity.

Would you like to see how to implement a **lazy-deletion heap** for Dijkstra's, or see the blueprint for a Python **Segment Tree** to bypass the missing sorted set limitation?

## how hard is it to write manually

Writing these missing structures manually ranges from **trivial (a few lines of code)** to **notoriously painful (100+ lines of bug-prone logic)**.

Because Python has a strict time limit in CP, your manual implementations must be written using highly optimized, flattened array structures rather than object-oriented class nodes.

Here is the breakdown of how difficult they are to build yourself, ranked from easiest to hardest:

***

### 1. Lazy-Deletion Heap (For Dijkstra's)

- **Difficulty:** 🟢 **Trivial (1 out of 5)**
- **Lines of code:** ~5 lines
- **How it's done:** You do not actually modify the heap. You simply push duplicate nodes with newer, smaller distances. When popping, you use a visited array/set to skip stale data.

python

```
# Instead of updating a key, just push the new tuple
heapq.heappush(pq, (new_dist, neighbor))

# Inside your pop loop, skip if you've already found a shorter path
if dist_to[node] < popped_dist:
    continue
```

Use code with caution.

### 2. Bitset Operations

- **Difficulty:** 🟢 **Easy (2 out of 5)**
- **Lines of code:** ~5–10 lines
- **How it's done:** Since Python automatically converts normal integers into arbitrarily large integers (bignums), you can use a single integer as a massive bitset. The only annoying part is counting bits, which you can optimize by chunking integers into 16-bit blocks and using a precomputed lookup table.

python

```
# A lookup table for bits in numbers 0-65535
BIT_COUNT = [bin(i).count('1') for i in range(65536)]

def popcount(x):
    total = 0
    while x:
        total += BIT_COUNT[x & 0xFFFF]
        x >>= 16
    return total
```

Use code with caution.

### 3. Fenwick Tree / Binary Indexed Tree (BIT)

- **Difficulty:** 🟡 **Moderate (3 out of 5)**
- **Lines of code:** ~15 lines
- **How it's done:** This is a lightweight alternative to a Segment Tree. It allows you to update elements and query prefix sums in\
  𝑂\
  (\
  log\
  𝑁\
  )\
  time. It is incredibly easy to memorize and write using simple bit manipulation (`x & -x`).

python

```
class Fenwick:
    def __init__(self, n):
        self.tree = [0] * (n + 1)

    def update(self, i, delta):
        while i < len(self.tree):
            self.tree[i] += delta
            i += i & -i

    def query(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & -i
        return s
```

Use code with caution.

### 4. Segment Tree (Iterative)

- **Difficulty:** 🟡 **Moderate (3.5 out of 5)**
- **Lines of code:** ~25–35 lines
- **How it's done:** Recursive Segment Trees in Python are far too slow and hit recursion limits. You must write an **iterative (bottom-up)** Segment Tree using a single flattened array of size 2N. It handles point updates and range queries in\
  𝑂\
  (\
  log\
  𝑁\
  )\
  time.

python

```
class SegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.tree = [0] * self.n + data
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[i<<1] + self.tree[i<<1|1] # Sum query example

    def update(self, p, value):
        p += self.n
        self.tree[p] = value
        while p > 1:
            self.tree[p>>1] = self.tree[p] + self.tree[p^1]
            p >>= 1

    def query(self, l, r): # interval [l, r)
        res = 0
        l += self.n; r += self.n
        while l < r:
            if l & 1: res += self.tree[l]; l += 1
            if r & 1: r -= 1; res += self.tree[r]
            l >>= 1; r >>= 1
        return res
```

Use code with caution.

### 5. Self-Balancing Binary Search Tree (AVL / Treap)

- **Difficulty:** 🔴 **Brutal (5 out of 5)**
- **Lines of code:** 80–120+ lines
- **How it's done:** To truly mimic C++’s `std::set` (insert, delete, lower\_bound all dynamically), you have to code a **Treap** or an **AVL Tree** from scratch. Managing pointer manipulations, tree rotations, and structural balancing during competitive stress is agonizingly difficult and prone to typos. **Almost no one writes these under a time limit.**

***

### The Cheat Code for Python CP

Because writing a balanced BST from scratch is a nightmare, Python competitors rely on two main tactics:

1. **Coordinate Compression:** Map massive values down to smaller indices `(0 to N-1)`. Once compressed, you can just use the incredibly fast, easy-to-write **Fenwick Tree** instead of a complex balanced tree.
2. **Platform-Specific Imports:** Check if the platform allows `from sortedcontainers import SortedSet, SortedList`. Codeforces, LeetCode, and AtCoder allow it! HackerRank and many regional ICM-ICPC platforms do not.

Would you like to practice implementing the **Iterative Segment Tree** template, or should we look at how **Coordinate Compression** eliminates the need for complex trees entirely?


# all py itertools methods

The Python `itertools` module contains **19 core functions** designed to handle memory-efficient, fast looping and iterator algebra. They are built-in utilities that prevent you from needing to pull massive datasets into RAM all at once. [link](https://docs.python.org/3/library/itertools.html)

According to the official [Python itertools documentation](https://docs.python.org/3/library/itertools.html), these methods are split into three logical categories: **Infinite**, **Terminating**, and **Combinatoric** iterators. [link](https://docs.python.org/3/library/itertools.html)

***

### 1. Infinite Iterators

These functions generate sequences that never stop unless explicitly broken out of or capped. [link](https://medium.com/@thomas%5Freid/a-look-at-the-python-itertools-library-a3af6b8894f2)

- **`count(start=0, step=1)`**: Generates an endless, evenly spaced sequence of numbers.
  - _Example:_ `count(10, 2)` → `10, 12, 14, 16...` [link](https://docs.python.org/3/library/itertools.html)
- **`cycle(iterable)`**: Loops over an input iterable indefinitely.
  - _Example:_ `cycle('ABC')` → `A, B, C, A, B, C...` [link](https://docs.python.org/3/library/itertools.html)
- **`repeat(object, times=None)`**: Repeats an object over and over. You can optionally limit the repetitions.
  - _Example:_ `repeat(10, 3)` → `10, 10, 10` [link](https://docs.python.org/3/library/itertools.html)

***

### 2. Terminating Iterators

These process finite streams and complete once the shortest input sequence runs out. [link](https://www.geeksforgeeks.org/python/python-itertools/)

#### Grouping & Slicing

- **`groupby(iterable, key=None)`**: Groups consecutive items together that share the same key. _Note: The data must be sorted first by that key function to group accurately._ [link](https://www.youtube.com/watch?v=1p7xa%5FBHYDs)
- **`islice(iterable, start, stop, step)`**: Slices an iterator just like standard list slicing, but without loading the whole object into memory. [link](https://docs.python.org/3/library/itertools.html)
- **`pairwise(iterable)`**: Returns overlapping pairs of consecutive elements.
  - _Example:_ `pairwise('ABCD')` → `('A','B'), ('B','C'), ('C','D')` [link](https://docs.python.org/3/library/itertools.html)
- **`tee(iterable, n=2)`**: Splits a single iterable into `n` independent, parallel iterators. [link](https://docs.python.org/3/library/itertools.html)

#### Filtering

- **`compress(data, selectors)`**: Filters data by using a secondary iterable of booleans.
  - _Example:_ `compress('ABCD', [1, 0, 1, 0])` → `A, C` [link](https://docs.python.org/3/library/itertools.html)
- **`dropwhile(predicate, iterable)`**: Drops items as long as the condition is true; returns everything else once the condition fails. [link](https://docs.python.org/3/library/itertools.html)
- **`filterfalse(predicate, iterable)`**: Returns only the items where the condition evaluates to `False`. [link](https://docs.python.org/3/library/itertools.html)
- **`takewhile(predicate, iterable)`**: Yields items as long as the condition remains true, then stops entirely. [link](https://docs.python.org/3/library/itertools.html)

#### Transforming & Combining

- **`accumulate(iterable, func=operator.add)`**: Computes running totals or accumulated results of other binary functions. [link](https://docs.python.org/3/library/itertools.html)
- **`batched(iterable, n)`**: _Newer feature._ Splits an iterable into discrete, non-overlapping tuples of length `n`. [link](https://docs.python.org/3/library/itertools.html)
- **`chain(*iterables)`**: Glues multiple iterables back-to-back into one continuous stream. [link](https://www.tothenew.com/blog/exploring-pythons-itertools-module-a-comprehensive-guide/)
- **`chain.from_iterable(iterable)`**: A variation of chain that flattens a single grouped iterable (like a list of lists). [link](https://docs.python.org/3/library/itertools.html)
- **`starmap(function, iterable)`**: Computes a function using argument tuples drawn from the iterable.
  - _Example:_ `starmap(pow, [(2,5), (3,2)])` → `32, 9` [link](https://docs.python.org/3/library/itertools.html)
- **`zip_longest(*iterables, fillvalue=None)`**: Zips uneven iterables together, padding shorter streams with a placeholder instead of stopping early. [link](https://docs.python.org/3/library/itertools.html)

***

### 3. Combinatoric Iterators

These are used to find mathematical combinations, permutations, and configurations. [link](https://docs.python.org/3/library/itertools.html)

| Method                                           | Order Matters? | Allows Duplicates/Repeats? | Example (`'ABC', r=2`)       |
| ------------------------------------------------ | -------------- | -------------------------- | ---------------------------- |
| **`product(*iterables, repeat=1)`**              | Yes            | Yes (Cartesian product)    | `AA AB AC BA BB BC CA CB CC` |
| **`permutations(iterable, r=None)`**             | Yes            | No                         | `AB AC BA BC CA CB`          |
| **`combinations(iterable, r)`**                  | No             | No                         | `AB AC BC`                   |
| **`combinations_with_replacement(iterable, r)`** | No             | Yes                        | `AA AB AC BB BC CC`          |

Would you like to see a practical **code example** for any specific method, or are you trying to solve a **particular algorithm problem**?

- [link](https://docs.python.org/3/library/itertools.html)\
  Python documentation\
  itertools — Functions creating iterators for efficient looping — Python 3.15.0 documentation\
  Combinatoric iterators: product (cartesian product), permutations (r-length orderings), combinations (r-length sorted subsequences...
- [link](https://www.youtube.com/watch?v=1p7xa%5FBHYDs)\
  YouTube·mCoding\
  Python itertools - The key to mastering iteration\
  Jun 25, 2024 — \`chain\` combines multiple iterables, while \`chain.from\_iterable\` handles an iterable of iterables. \`compress\` filters elements bas...\
  20:03
- [link](https://www.geeksforgeeks.org/python/python-itertools/)\
  GeeksforGeeks\
  Python Itertools - GeeksforGeeks\
  Python itertools is a fast, memory-efficient module for iterator algebra … permutations() generates all orderings; combinations() ...

Show all

# all py math methods

Python's built-in **`math` module** provides a comprehensive suite of mathematical functions for floating-point arithmetic, trigonometry, logarithms, and constants.

Below is a complete, grouped categorization of all methods available in the `math` module.

***

### 1. Number-Theoretic and Representation Functions

These methods deal with basic arithmetic, rounding, signs, and integer operations.

- `math.ceil(x)`: Rounds a number **up** to the nearest integer.
- `math.floor(x)`: Rounds a number **down** to the nearest integer.
- `math.trunc(x)`: Truncates the decimal part, returning the integer part (rounds toward zero).
- `math.fabs(x)`: Returns the **absolute value** of a float.
- `math.fmod(x, y)`: Returns the remainder of `x / y` (platform-specific float handling).
- `math.modf(x)`: Splits a number into its **fractional and integer parts** as a tuple of floats.
- `math.copysign(x, y)`: Returns a float with the magnitude of `x` but the sign of `y`.
- `math.factorial(n)`: Returns the **factorial** of an integer\
  𝑛\
  !\
  .
- `math.gcd(*integers)`: Returns the **Greatest Common Divisor** of the given integers.
- `math.lcm(*integers)`: Returns the **Least Common Multiple** of the given integers.
- `math.isqrt(n)`: Returns the exact **integer square root** of a non-negative integer (rounded down).
- `math.frexp(x)`: Returns the mantissa and exponent of `x` as a pair `(m, e)`.
- `math.ldexp(x, i)`: Computes\
  𝑥\
  ×2𝑖\
  (the inverse of `frexp`).
- `math.fsum(iterable)`: Returns an accurate floating-point **sum** of an iterable, avoiding loss of precision.
- `math.prod(iterable, *, start=1)`: Calculates the **product** of all elements in the input iterable.
- `math.perm(n, k=None)`: Returns the number of **permutations** of\
  𝑛\
  items taken\
  𝑘\
  at a time.
- `math.comb(n, k)`: Returns the number of **combinations** (\
  𝑛\
  choose\
  𝑘\
  ) without repetition.

***

### 2. Power and Logarithmic Functions

Methods handling roots, exponents, and logs.

- `math.pow(x, y)`: Raises `x` to the power of `y` (\
  𝑥𝑦\
  ), returning a float.
- `math.sqrt(x)`: Returns the **square root** of `x`.
- `math.cbrt(x)`: Returns the **cube root** of `x`.
- `math.exp(x)`: Returns\
  𝑒\
  raised to the power of `x` (\
  𝑒𝑥\
  ).
- `math.expm1(x)`: Returns\
  𝑒𝑥\
  −1\
  . Avoids precision loss for small `x`.
- `math.log(x, [base])`: Returns the **logarithm** of `x` to the given base (defaults to natural log\
  𝑙𝑛\
  ).
- `math.log1p(x)`: Returns the natural logarithm of\
  1

+𝑥\
(accurate for close-to-zero values).

- `math.log2(x)`: Returns the **base-2 logarithm** of `x`.
- `math.log10(x)`: Returns the **base-10 logarithm** of `x`.

***

### 3. Trigonometric Functions

Standard trigonometric calculations. All angles must be passed or returned in **radians**.

- `math.sin(x)`: Returns the **sine** of `x`.
- `math.cos(x)`: Returns the **cosine** of `x`.
- `math.tan(x)`: Returns the **tangent** of `x`.
- `math.asin(x)`: Returns the **arcsine** (inverse sine) of `x`.
- `math.acos(x)`: Returns the **arccosine** of `x`.
- `math.atan(x)`: Returns the **arctangent** of `x`.
- `math.atan2(y, x)`: Returns `atan(y / x)` in radians, accounting for the correct quadrant signs.

***

### 4. Hyperbolic Functions

Analogs of trigonometric functions based on hyperbolas instead of circles.

- `math.sinh(x)`: Returns the **hyperbolic sine** of `x`.
- `math.cosh(x)`: Returns the **hyperbolic cosine** of `x`.
- `math.tanh(x)`: Returns the **hyperbolic tangent** of `x`.
- `math.asinh(x)`: Returns the **inverse hyperbolic sine** of `x`.
- `math.acosh(x)`: Returns the **inverse hyperbolic cosine** of `x`.
- `math.atanh(x)`: Returns the **inverse hyperbolic tangent** of `x`.

***

### 5. Angular Conversion and Geometry

- `math.degrees(x)`: Converts angle `x` from **radians to degrees**.
- `math.radians(x)`: Converts angle `x` from **degrees to radians**.
- `math.dist(p, q)`: Returns the **Euclidean distance** between two points `p` and `q`, given as coordinates.
- `math.hypot(*coordinates)`: Returns the Euclidean norm/hypotenuse\
  𝑥2+𝑦2+…√\
  .

***

### 6. Classification and Comparison Functions

Methods used to validate values or safely check comparisons.

- `math.isfinite(x)`: Returns `True` if `x` is neither an infinity nor a NaN.
- `math.isinf(x)`: Returns `True` if `x` is positive or negative **infinity**.
- `math.isnan(x)`: Returns `True` if `x` is **NaN** (Not a Number).
- `math.isclose(a, b, *, rel_tol=1e-09, abs_tol=0.0)`: Returns `True` if `a` and `b` are **close in value** within tolerance boundaries.

***

### 7. Special Functions

Advanced mathematical tools commonly used in statistics and engineering.

- `math.erf(x)`: Returns the **error function** at `x`.
- `math.erfc(x)`: Returns the **complementary error function** (\
  1\
  −erf\
  (\
  𝑥\
  )\
  ).
- `math.gamma(x)`: Returns the **Gamma function** at `x`.
- `math.lgamma(x)`: Returns the natural logarithm of the absolute value of the Gamma function at `x`.

***

### 8. Mathematical Constants

Though not methods, the module includes these critical values:

- `math.pi`: Mathematical constant\
  𝜋\
  \=3.141592\
  .\
  .\
  .
- `math.e`: Mathematical constant\
  𝑒\
  \=2.718281\
  .\
  .\
  .
- `math.tau`: Mathematical constant\
  𝜏\
  \=6.283185\
  .\
  .\
  .\
  (equivalent to\
  2\
  𝜋\
  ).
- `math.inf`: Floating-point positive **infinity**.
- `math.nan`: Floating-point **NaN** value.

Would you like a interactive **quiz** to test your knowledge of these math functions, or do you need a Python **code example** showing how to apply a specific method?

