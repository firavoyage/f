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
    _write(
      ' '.join(
        map(
          map(args, lambda n: int(n) if n.is_integer() else n),
          str,
        )
      )
    )
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


def void(*args):
  return nil


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
  return reduce(lambda value, func: func(value), funcs, initial_value)


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

    if isinstance(value, HaltContainer) and value.halt_symbol is halt_symbol:
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
  while (index - end) * step < 0:
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


# debug


def diff(items, current, expected):
  for i in items:
    current_result = current(i)
    expected_result = expected(i)
    if current_result != expected_result:
      log('case', i, 'current', current_result, 'expected', expected_result)


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
  # isnan as is_nan # nan == nil
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


# solution


def main():
  task_count = read()

  for i in each(task_count):
    solve()


"""

can i simply shot more than once?

let me check the examples.

yes it's true. at least on all examples

let z be the eventual state. and a be the input.

if i < j, then zj will be at most ai

logics:

- shoot on the last (irrelevant)
- shoot starting from the minimum and chain it rightward

in a word, zi = min a1 to ai

---

i may do it imperatively

"""


def solve():
  _ = read()
  a = read_ints()

  minimum = a[0]
  result = 0

  for i in a:
    minimum = min(minimum, i)
    result += minimum

  prn(result)


__()
