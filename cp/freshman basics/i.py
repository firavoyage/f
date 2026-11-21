def cache(f):
  history = dict()

  def cached_fn(*args):
    # log('cache?', args)
    if args in history:
      # log('hit')
      return history[args]
    # log('save')
    result = f(*args)
    history[args] = result
    return result

  return cached_fn


import sys
from functools import cmp_to_key
from types import SimpleNamespace

# utils

_write = sys.stdout.write
_readline = sys.stdin.readline
_print = print
log = _print


def pr(*args):
  """Writes elements without a trailing newline."""
  if len(args) == 0:
    return
  # If the first item is numeric, separate by space; otherwise join directly
  if isinstance(args[0], (_int, _float)):
    _write(' '.join(map(args, str)))
  else:
    _write(''.join(map(args, str)))


def prn(*args):
  """Writes elements with a trailing newline."""
  pr(*args)
  _write('\n')


print = prn


def readline():
  """Reads a single line from standard input."""
  return _readline().rstrip('\r\n')


def readlines(n):
  return map(each(n), readline)


def read():
  """Reads a line and parses tokens dynamically into numbers or strings."""
  line = readline()
  if not line:
    return nil

  tokens = line.split()
  items = []
  for v in tokens:
    n = num(v)
    items.append(n if n is not nil else v)

  if len(items) == 1:
    return items[0]
  return items


input = read


def read_int():
  """Parses a single integer from the current space-separated line context."""
  res = read()
  if isinstance(res, _list):
    return int(res[0])
  return int(res)


def read_ints():
  """Parses an array of integers from the current line context."""
  res = read()
  if isinstance(res, _list):
    return [int(x) for x in res]
  return [int(res)]


def read_num():
  """Parses a single number (float/int) from the current line context."""
  res = read()
  if isinstance(res, _list):
    return num(res[0])
  return num(res)


def read_nums():
  """Parses an array of numbers from the current line context."""
  res = read()
  if isinstance(res, _list):
    return [num(x) for x in res]
  return [num(res)]


# fix

nil = None
true = True
false = False


def call(fn, *params):
  """
  A high-performance, Codeforces-safe JS-style caller.
  Tries passing arguments from most-to-least until one works.
  """

  # Start by trying to pass ALL arguments (the JS way)
  # If it fails, sequentially slice off the last argument
  for i in range(len(params), 0, -1):
    try:
      return fn(*params[:i])
    except TypeError:
      continue

  # Fallback for functions that take 0 arguments
  try:
    return fn()
  except TypeError:
    # If it still fails, it means the TypeError was raised INSIDE the function,
    # not because of an incorrect number of arguments. Raise it.
    raise


def __():
  if __name__ == '__main__':
    if 'main' in globals() and callable(globals()['main']):
      globals()['main']()


sys.setrecursionlimit(200000)


# std


# prefer `v is not nil` or `v != nil`
def is_given(v):
  return v is not nil


# prefer `key in object`
def has(object, key):
  """Universal check equivalent to JavaScript's includes / has / hasOwn."""
  if isinstance(object, (_list, tuple, str, set, dict)):
    return key in object
  return false


def entries(object):
  """Returns iterable entries based on structure."""
  if isinstance(object, dict):
    return _list(object.items())
  elif isinstance(object, (_list, tuple, str)):
    return _list(enumerate(object))
  elif isinstance(object, set):
    return _list(enumerate(object))
  return []


def get(object, key):
  if has(object, key):
    return object[key]
  else:
    return 0


def count(object, key):
  if has(object, key):
    object[key] += 1
  else:
    object[key] = 1


increase = count


def num(n):
  """Attempts to cast to int or float safely, returning nil if NaN/Error."""
  try:
    val = _float(n)
    if math.isnan(val):
      return nil
    if val.is_integer():
      return _int(val)
    return val
  except (ValueError, TypeError):
    return nil


_int = int


def int(n):
  try:
    return _int(float(n))
  except (ValueError, TypeError):
    return nil


_float = float


def float(n):
  try:
    val = _float(n)
    return nil if math.isnan(val) else val
  except (ValueError, TypeError):
    return nil


_list = list


def list(*args):
  """Handles spread args fallback or dynamic conversion of an iterable."""
  if (
    len(args) == 1
    and hasattr(args[0], '__iter__')
    and not isinstance(args[0], str)
  ):
    return _list(args[0])
  return _list(args)


# fp


def identity(x):
  return x


def compose(*funcs):
  """
  Composes multiple functions from left to right.
  compose(f, g)(x) is equivalent to g(f(x)).
  """
  if not funcs:
    return lambda x: x
  return reduce(funcs, lambda f, g: lambda x: g(f(x)))


# def compose(*funcs):
#   """
#   Composes multiple functions from right to left.
#   compose(f, g)(x) is equivalent to f(g(x)).
#   """
#   if not funcs:
#     return lambda x: x
#   return reduce(funcs, lambda f, g: lambda x: f(g(x)))


def pipe(initial_value, *funcs):
  """Passes a value through a sequence of functions from left to right.
  pipe(x, f, g) is equivalent to g(f(x)).
  """
  return reduce(
    lambda value, func: func(value), funcs, initial_value
  )


def curry(func):
  """A simple decorator to curry a function, allowing partial application."""

  def curried(*args, **kwargs):
    if len(args) + len(kwargs) >= func.__code__.co_argcount:
      return func(*args, **kwargs)
    return lambda *brgs, **bkwargs: curried(
      *(args + brgs), **{**kwargs, **bkwargs}
    )

  return curried


from functools import partial


halt_symbol = object()


class HaltContainer:
  def __init__(self, value):
    self.halt_symbol = halt_symbol
    self.value = value


def halt(value=nil):
  """Returns a container to signals a break/halt sequence inside map()."""
  return HaltContainer(value)


_map = map


def map(items, f):
  """
  Maps a collection with specific early-termination options.
  Automatically standardizes sets, dicts, and mappings to key-value lists.
  """
  if isinstance(items, dict):
    items = entries(items)

  result = []

  for index, item in enumerate(items):
    # value = f(item, index, items)
    value = call(f, item, index, items)

    if value is nil:
      continue

    if value is halt:
      break

    if (
      isinstance(value, HaltContainer)
      and value.halt_symbol is halt_symbol
    ):
      result.append(value.value)
      break

    result.append(value)

  return result


def reduce(items, f, initial_value=nil):
  """Reduces an array from left to right."""
  index = 0
  result = initial_value

  for item in items:
    if index == 0 and initial_value is nil:
      result = item
      index += 1
      continue

    result = call(f, result, item, index, items)
    index += 1

  return result


fold = reduce


def reduce_right(items, f, initial_value=nil):
  """Reduces an array from right to left."""
  items = list(items)
  last_index = len(items) - 1
  index = last_index
  result = initial_value

  if initial_value is nil:
    result = items[last_index]
    index -= 1

  while index >= 0:
    result = call(f, result, items[index], index, items)
    index -= 1

  return result


_range = range


def each(*args):
  """
  Generates a progression from start to end (excluded)

  if step < 0, both start and end are included
  """
  begin = 0
  end = 0
  step = 1

  if len(args) == 1:
    end = args[0]
  elif len(args) == 2:
    begin = args[0]
    end = args[1]
    if (begin - end) * step > 0:
      step = -1
  elif len(args) == 3:
    begin = args[0]
    end = args[1]
    step = args[2]

  index = begin
  if step > 0:
    while (index - end) * step < 0:
      yield index
      index += step
  else:
    while (index - end) * step <= 0:
      yield index
      index += step


def closed_each(*args):
  """
  Generates a progression from start to end (included)
  """
  begin = 0
  end = 0
  step = 1

  if len(args) == 1:
    end = args[0]
  elif len(args) == 2:
    begin = args[0]
    end = args[1]
    if (begin - end) * step > 0:
      step = -1
  elif len(args) == 3:
    begin = args[0]
    end = args[1]
    step = args[2]

  index = begin
  while (index - end) * step <= 0:
    yield index
    index += step


# def each(*args):
#   """
#   Generates a progression list from start to end (excluded), or start (excluded) to end if step < 0.
#   """
#   begin = 0
#   end = 0
#   step = 1

#   if len(args) == 1:
#     end = args[0]
#   elif len(args) == 2:
#     begin = args[0]
#     end = args[1]
#   elif len(args) == 3:
#     begin = args[0]
#     end = args[1]
#     step = args[2]

#   if (begin - end) * step > 0:
#     step = -1

#   numbers = []

#   if step > 0:
#     index = begin

#     while (index - end) * step < 0:
#       numbers.append(index)
#       index += step

#   else:
#     index = begin + step

#     while (index - end) * step <= 0:
#       numbers.append(index)
#       index += step

#   return numbers

range = each


def filter(items, f):
  if not callable(f):
    value = f
    f = lambda v: v != value

  result = []

  for item in items:
    if f(item):
      result.append(item)

  return result


# prefer `value in items` to check for existence
def some(items, f):
  if not callable(f):
    value = f
    f = lambda v: v == value

  for item in items:
    if f(item):
      return true

  return false


def every(items, f):
  if not callable(f):
    value = f
    f = lambda v: v == value

  for item in items:
    if not f(item):
      return false

  return true


all = every


# iterables


def group(items, by):
  result = []

  current = []

  for index, item in entries(items):
    current.append(item)

    if index % by == by - 1:
      result.append(current)
      current = []

  if len(current) != 0:
    result.append(current)

  return result


def sort(items, compare=nil):
  """Sort an iterable, ascending by default"""

  def cmp_(x, y):
    if x < y:
      return -1
    elif x > y:
      return 1
    else:
      return 0

  if compare is nil:
    compare = cmp_

  return sorted(items, key=cmp_to_key(compare))


# string


def format_float(n: float, precision: int) -> str:
  """Formats a float to a fixed number of decimal points."""
  return f'{n:.{precision}f}'


def pad_start(s: str, length: int, fill: str = ' ') -> str:
  """Pads the start of the string with a filler character until it reaches length."""
  return str(s).rjust(length, fill)


def pad_end(s: str, length: int, fill: str = ' ') -> str:
  """Pads the end of the string with a filler character until it reaches length."""
  return str(s).ljust(length, fill)


def repeat(s: str, times: int) -> str:
  """Repeats a string a specified number of times using Python's native operator optimization."""
  if times <= 0:
    return ''
  return str(s) * times


def trim_start(s: str, char: str = '0') -> str:
  """
  Trims matching characters from the start of a string.
  Supports either a single character or a collection/string of characters.
  """
  s = str(s)
  begin = 0

  # Using range() matching your each(0, s.length) functionality
  for index in range(len(s)):
    # Checks if character matches exactly or is contained within a target character set
    if s[index] == char or s[index] in char:
      begin += 1
    else:
      break

  return s[begin:]


def trim_end(s: str, char=nil) -> str:
  """
  Trims matching characters from the end of a string.
  Defaults to matching spaces and newlines if no character array is passed.
  """
  if char is nil:
    char = [' ', '\n']

  s = str(s)
  end = len(s)

  # Using range(start, stop, step) matching your reverse each loop
  for index in range(len(s) - 1, -1, -1):
    if s[index] == char or s[index] in char:
      end -= 1
    else:
      break

  return s[:end]


# math

import math
from math import (
  floor,
  ceil,
  sqrt,
  log as logab,
  gcd,
  lcm,
  isinf as is_inf,
  # isnan as is_nan # nan == nil,
  perm,
  comb,
)
from operator import (
  # abs,
  add,
  sub,
  mul,
  truediv,
  floordiv,
  # divmod,
  mod,
  # pow, # pow is builtin, while math/operator pow doesnt support modulo
  lt as less,
  gt as greater,
  eq,
  ne as neq,
  le as leq,
  ge as geq,
  and_,
  or_,
  not_,
)


def sum(*numbers):
  return fallback(num(reduce(list(*numbers), add)), 0)


def prod(*numbers):
  return fallback(num(reduce(list(*numbers), mul)), 1)


def approx_eq(a, b, tolerance=0.1**5):
  """Checks if two floating numbers are approximately equal within a tolerance threshold."""
  return abs(a - b) < tolerance


def mod_eq(a, b, modular):
  """Checks modular equivalence: determines if (a - b) % modular == 0."""
  return ((a % modular) - (b % modular)) % modular == 0


def xor(a, b):
  return a ^ b


xor_ = xor


def nullish(a, b):
  """Mirrors JavaScript's nullish coalescing operator (??)."""
  return b if a is nil else a


fallback = nullish


def ternary(cond, a, b):
  if cond:
    return a
  else:
    return b


def ln(n):
  # base default to e
  return logab(n)


max_ = max


def max(*numbers):
  return max_(list(*numbers))


min_ = min


def min(*numbers):
  return min_(list(*numbers))


def improve(update, close, guess=1, timeout=10**5):
  """
  Iteratively improves an approximation guess until 'close(guess)' is True
  or the operation limit is hit.
  """

  times = 0
  while not close(guess) and times < timeout:
    guess = update(guess)
    times += 1

  return guess


def find_root(term, derivative):
  """
  Solves the roots of an equation using the Newton-Raphson approximation method.
  """

  def update(x):
    return x - term(x) / derivative(x)

  def close(x):
    return approx_eq(term(x), 0)

  return improve(update, close)


"""

so it counts repeating ones.

well maybe it really depends on order

---

what does it mean

gcd lcm a b lcm a c = gcd a c

you merge all ...

---

test.

let's say a < b < c and they only have one factor.

lcm a b = b, lcm a c = c, gcd b c = b, gcd a c = a, (b, a)

- for a < c < b, it's (c, a)

what if b < a < c (~~b and c can swap on the left~~ meaningless, it takes two)

lcm a b = a, lcm a c = c, gcd a c = gcd a c, (a, a): eq

- for c < a < b, gcd a b, gcd a c, (a, c)

what if b < c < a

lcm a b = a, lcm a c = a, gcd a a = a, gcd a c = c, (a, c)

- for c < b < a, same. (a, c)

---

conclusion

for each factor, (here less means leq)

a < b < c -> b == a

a < c < b -> c == a

b < a < c -> t

c < a < b -> a == c

b < c < a -> a == c

c < b < a -> a == c

---

simp

b <= a <= c -> t         mid min max

a <= b <= c -> a == b    min mid max

otherwise a == c: ~~never (it's a == c)~~ you may have like a = c < b

---

but i could not iter all combination

---

that is, for each combination of three numbers, it can yield

- 1 if they are all distinct
- 1 (when b < a) or 2 (when b > a) if there are two of the same,
  - i. b < a
    - (a, a, b) false (a != c, or a != b when sub)
    - (a, b, a) t (_ min _ always t)
    - (b, a, a) false (min _ _ but a != b)
  - ii. b > a
    - (a, a, b) t (_ _ max)
    - (a, b, a) t (_ max _ where otherwise a == c that is a == a)
    - (b, a, a) false
- 1 if they are all the same

---

for each n

there are n "all same"

there are n(n-1)(n-2)/6, C(n, 3) "all distinct" (0 if n <= 2)

- wait why this formula, seems ive forgotten some basic combinational math
  - that's exactly ~~P(n, 3)~~ C(n, 3) right?
  - in P(x, y) (pick y from x distinct numbers, no duplicates, order matters)
    - it's n(n-1)(n-2)...(n-y+1)
    - you may write it in cleaner less obvious factorial
  - in C(x, y) you basically divide by repetitive "order plays"

comb works well and gives 0 when it doesnt qualify.

~~there n-1 pairs of a a b where b > a (take a from 1 to n-1)~~

~~there n-1 pairs of a a b where b < a~~

there are (n-1) + (n-2) + ... + 1 pairs of a a b where b > a

(take a from 1 to n - 1)

that is ((n-1)+1)*(n-1)/2 = n(n-1)/2, (first + last) * count / 2, 
the grade school formula

or "grade school math olym", lol.

it's the same count for b < a i guess. you can basically reverse the list.

---

it's wrong on 20, or maybe every comb.

comb(20, 3) alone far exceeds example output.

ah! yeah, i assumed they share the factorials, like each is pow of another.

---

then,

all same -> 1

two same on larger...

---

imagine a = (a1, a2), b = (b1, b2), c = (c1, c2) in base prime

gcd lcm a b lcm a c = gcd a c

it means

(min(max a1 b1, max a1 c1), min(max a2 b2, max a2 c2)) = (min a1 c1, min a2 c2)

- all same -> 1
- all distinct -> it must be consistent, than 1, or 0

consistency means all factors must align in order. 
that is you can only have one order for a b c
and each factor tuple must be (mid min max)

i guess it must have to be consistent aw for two same scenario.

---

how do i sum consistency in batch

...

---

seems ive even miscalc some stuff.

_ max _ doesnt gurantee t, as the example output explanation says.

---

wait my solution currently doesnt gurantee it reaches maximum...

---

---

lunch.

---

let's take an alternative approach. it's not that complex. no "base prime".

gcd(lcm a b, lcm b c) = gcd a c

(look i was even solving the wrong problem previously)

it simply means

gcd(ab/gcd a b, bc/gcd b c) = gcd a c

a gcd(b/gcd a b, c/gcd b c) = gcd a c

gcd returns int >= 1.

thus gcd a c must contain a, at least.

then c is multiple of a.

let's say c = k a

a gcd(b/gcd a b, ka/gcd b ka) = a gcd 1 k

yes and gcd a b could not return anything > a or > b

(alternatively, we say left >= a, right <= a, while left = right)

thus (c = ka, and...)

gcd(b/gcd a b, ka/gcd ka b) = 1

b/gcd a b and ka/gcd ka b coprime.

_b and _ka coprime when b has all a factors dropped and ka has all b factors dropped.

(?)

ka is free. it will coprime b regardless, 

- if not, b must share some common factors w ka, 
then ka/gcd ka b will have them dropped

b is also free. because if ka will coprime b regardless then vice versa.

the `/gcd a b` part on `b/gcd a b` does not even matter.

---

wait, look at the example. (2 1 1).

c doesnt have to be multiple of a.

lcm to gcd formula is right. and i could not just expose a from gcd, 
when there is dividend.

---

i would believe my theory on "consistent" max/mid/min was right.

and what does it mean if one is consistently larger than another on base prime?

it's a multiple. if eq allowed, it can be 1x mulitple.

---

my theory was...

first to successfully form in any order, 

it must be a, ab, and abc.

gcd(lcm x y, lcm y z) = gcd x z

min mid max -> gcd(ab, abc) = ab = a

min max mid -> gcd(abc, abc) = abc = a

mid min max -> gcd(ab, abc) = ab = ab (guranteed)

mid max min -> gcd(abc, abc) = abc = a

max min mid -> gcd(abc, ab) = ab = ab (guranteed)

max mid min -> gcd(abc, ab) = ab = a

when b = 1 iff min = mid, it's still 2, because swapping makes no sense

when c = 1 iff mid = max, it's 1.

when bc = 1 iff min = mid = max, it's 1.

3!=, 2=1> -> 2

2=1<, 3= -> 1

---

clearly min mid all depend on max. maybe i would just iter max 
if there isnt some math ad hoc...

for n

# - n, n, x where x in cap [1, n] factors -> 1
- n, n, x where x in factors -> 1
- n, any, any, where any in real factors -> 2

clearly i just need the factor count for n.

it can be done by factorization. prod power + 1 for all power

(or you may call power exp, exponent)

e.g. 6: 6 = 2^1 + 3^1 -> 4, i.e. 1, 2, 3, 6. real fc = f - 1.

solution count for n = rfc^2 + fc

---

(let's try to simp a bit?)

= (fc-1)^2+fc = fc^2-2fc+1+fc = fc^2-fc+1
= rfc^2 + rfc + 1

doesnt matter. it's not gonna be elegant to the extreme.

---

solved?

let's test.

1 -> fc: 1 -> 0^2 + 1
2 -> fc: 2 -> 1^2 + 2 ~~that's incorrect.~~ that's correct. 

for input n, you actually output sum(count 1 and count 2)

upd: wait that's actually wrong. 2 -> 3?!

---

dont over engineer.

better to take a somewhat imperative approach on fc.

you dont need "base prime" or "is prime".

---

fix:

> - n, n, x where x in factors -> 1
> - n, any, any, where any in real factors -> 2

actually

- n, n, x where x in factors -> 1
- n, x, y, where x in real factors and y in factors -> 2

it can be merged?

- n, x, y where x, y in factors -> 1

i mean you do not actually see it as a set. you just make it swapped!

---

no need to skip this. i can go the classic cp way: brute force aside.

---

---

clearly my theory of consistency is wrong.

```
1
1 1 1
2
1 1 2
2 1 1
2 1 2
2 2 2
3
1 1 3
2 1 3
3 1 1
3 1 2
3 1 3
3 3 3
4
1 1 4
2 1 4
2 2 4
3 1 4
4 1 1
4 1 2
4 1 3
4 1 4
4 2 2
4 2 4
4 4 4
5
1 1 5
2 1 5
3 1 5
4 1 5
5 1 1
5 1 2
5 1 3
5 1 4
5 1 5
5 5 5
```

---

it's over!

take a look at the eq.

gcd(lcm x y, lcm y z) = gcd x z

x and z are symmetrical.

lcm x y: in base prime, x, y -> max(x, y)
lcm y z: in base prime, y, z -> max(y, z)
gcd . .: min(. .)

min(max(x, y), max(y, z)) = max(y, min(x, z))

gcd x z = min x z

left = right

max(y, min x z) = min x z

y <= min x z

y <= both x and z

here we are cmp base prime.

if every factor of y <= that of x and z, it simply implies

both x and z are mulitplies of y.

for all y, x and z can be y, 2y, 3y, ... floor(n/y)y <= n

result = sigma m (as in l m r) from 1 to n, floor(n/m)^2

---

wow in py ^ doesnt mean **, debugging nightmare.

---

ac? but tle.

-1. (it doesnt give me part of the score it seems. educational!)

let's have a classic engineering trick: caching.

"""


def main():
  task_count = read()

  for i in each(task_count):
    solve()


def solve():
  n = read()

  prn(calc_fast(n))


@cache
def calc(n):
  return sum(
    map(closed_each(1, n), lambda m: floor(n / m) ** 2)
  )


def calc_fast(n):
  # log('calc fast', n)
  result = 0

  left = n
  for i in closed_each(1, sqrt(n)):
    right = floor(n / (i + 1)) + 1
    result += i**2 * (left - right + 1)
    # log('yield', i**2, 'from', left, 'to', right)

    left = right - 1

  for i in closed_each(left, 1, -1):
    # log('yield', floor(n / i) ** 2, 'on', i)
    result += floor(n / i) ** 2

  return result


# def solve():
#   n = read()

#   prn(sum(map(closed_each(1, n), solution_count)))


# def solution_count(n):
#   fc = factor_count(n)
#   # rfc = fc - 1  # wo n itself

#   return pow(fc, 2)


# def factor_count(n):
#   # base_prime = [0] # 2, 3, ...
#   # index = 0

#   exponents = []
#   index = -1

#   for guess in closed_each(2, n, 1):
#     # for guess in each(2, sqrt(n) + 1):
#     if n % guess == 0:
#       exponents.append(0)
#       index += 1
#       while n % guess == 0:
#         # while n > 1:
#         exponents[index] += 1
#         n /= guess

#   # # prime n?
#   # if n > 1:
#   #   exponents.append(1)

#   return prod(map(exponents, partial(add, 1)))


# def solve():
#   n = read()

#   solution_count = 0

#   for maximum in closed_each(n, 1):
#     factors = base_prime(maximum)

#     # all same, all distinct, 2=1> (counted only 1 currently), 2=1<
#     _ = map(
#       filter(factors, 0),
#       case_count,
#     )

#     baseline = prod(_)

#     # # 2=1>
#     # bonus = (
#     #   prod(
#     #     map(
#     #       filter(factors, 0),
#     #       lambda x: x * (x - 1) // 2 if x >= 2 else 1,
#     #     )
#     #   )
#     #   if maximum >= 2
#     #   else 0
#     # )

#     log(
#       maximum,
#       baseline,
#       # bonus,
#       filter(factors, 0),
#       _
#     )

#     solution_count += baseline
#     # solution_count += baseline + bonus

#   prn(solution_count)


# def solve():
#   n = read()

#   all_same = n

#   all_distinct = comb(n, 3)  # works as expeccted for n <= 2

#   two_same_one_larger = n * (n - 1) // 2
#   # two_same_one_larger = n * (n - 1) / 2
#   two_same_one_smaller = two_same_one_larger

#   prn(
#     all_same * 1
#     + all_distinct * 1
#     + two_same_one_larger * 2
#     + two_same_one_smaller * 1
#   )


# def case_count(n):
#   """
#   n: factor power
#   """

#   all_same = 1

#   # there are n cases from 0 to n-1 (max has power n, it's not all distinct then)
#   all_distinct = comb(n, 2)
#   # all_distinct = comb(n + 1, 2)

#   # 001 for 1, one case
#   # 002, 112 for 2 -> 2
#   # 003, 113, 223 for 3 -> 3
#   two_same_one_larger = n
#   # two_same_one_larger = n * (n - 1) // 2
#   # two_same_one_larger = n * (n - 1) / 2
#   two_same_one_smaller = two_same_one_larger

#   return (
#     all_same * 1
#     + all_distinct * 1
#     + two_same_one_larger * 2
#     + two_same_one_smaller * 1
#   )


# def base_prime(n):
#   """
#   List of power of each prime from 2 to ... for n

#   May contain trailing zero
#   """
#   result = [0]

#   index = 0
#   for i in closed_each(2, n, 1):
#     if n % i == 0:
#       while n % i == 0:
#         result[index] += 1
#         n /= i

#     if is_prime(i + 1):
#       result.append(0)
#       index += 1
#   return result


# def is_prime(n):
#   if n <= 1:
#     return False
#   # Check divisibility only up to the square root of n
#   for i in range(2, int(n**0.5) + 1):
#     if n % i == 0:
#       return False
#   return True


__()

# for i in closed_each(1, 20):
#   prn(i, factor_count(i), solution_count(i))

# for i in closed_each(1, 5):
#   log(i)
#   for a in closed_each(1, i):
#     for b in closed_each(1, i):
#       for c in closed_each(1, i):
#         if (
#           gcd(lcm(a, b), lcm(b, c)) == gcd(a, c)
#           and max(a, b, c) == i
#         ):
#           log(a, b, c)

# for i in closed_each(1, 1000):
#   a, b = calc(i), calc_fast(i)

#   if a != b:
#     log(i, a, b)
