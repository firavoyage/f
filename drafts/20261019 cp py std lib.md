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

