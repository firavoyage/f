import sys
import math

# utils

command_write = sys.stdout.write
command_readline = sys.stdin.readline
command_print = print
log = command_print


def pr(*args):
  """Writes elements without a trailing newline."""
  if len(args) == 0:
    return
  # If the first item is numeric, separate by space; otherwise join directly
  if isinstance(args[0], (int_, float_)):
    command_write(' '.join(map(args, str)))
  else:
    command_write(''.join(map(args, str)))


def prn(*args):
  """Writes elements with a trailing newline."""
  pr(*args)
  command_write('\n')


print = prn


def read_line():
  """Reads a single line from standard input."""
  return command_readline()


def read():
  """Reads a line and parses tokens dynamically into numbers or strings."""
  line = read_line()
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
  if isinstance(res, list_):
    return int(res[0])
  return int(res)


def read_ints():
  """Parses an array of integers from the current line context."""
  res = read()
  if isinstance(res, list_):
    return [int(x) for x in res]
  return [int(res)]


def read_num():
  """Parses a single number (float/int) from the current line context."""
  res = read()
  if isinstance(res, list_):
    return num(res[0])
  return num(res)


def read_nums():
  """Parses an array of numbers from the current line context."""
  res = read()
  if isinstance(res, list_):
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


# std


# prefer `v is not nil` or `v != nil`
def is_given(v):
  return v is not nil


# prefer `key in obj`
def has(obj, key):
  """Universal check equivalent to JavaScript's includes / has / hasOwn."""
  if isinstance(obj, (list_, tuple, str, set, dict)):
    return key in obj
  return false


def entries(obj):
  """Returns iterable entries based on structure."""
  if isinstance(obj, dict):
    return list_(obj.items())
  elif isinstance(obj, (list_, tuple)):
    return list_(enumerate(obj))
  elif isinstance(obj, set):
    return list_(enumerate(obj))
  return []


def num(n):
  """Attempts to cast to int or float safely, returning nil if NaN/Error."""
  try:
    val = float(n)
    if math.isnan(val):
      return nil
    if val.is_integer():
      return int(val)
    return val
  except (ValueError, TypeError):
    return nil


int_ = int


def int(n):
  try:
    return int_(float(n))
  except (ValueError, TypeError):
    return nil


float_ = float


def float(n):
  try:
    val = float_(n)
    return nil if math.isnan(val) else val
  except (ValueError, TypeError):
    return nil


list_ = list


def list(*args):
  """Handles spread args fallback or dynamic conversion of an iterable."""
  if len(args) == 1 and hasattr(args[0], '__iter__') and not isinstance(args[0], str):
    return list_(args[0])
  return list_(args)


# fp


def identity(x):
  return x


halt_symbol = object()


class HaltContainer:
  def __init__(self, value):
    self.halt_symbol = halt_symbol
    self.value = value


def halt(value=nil):
  """Returns a container to signals a break/halt sequence inside map()."""
  return HaltContainer(value)


map_ = map


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
    if index == 0 and initial_value == nil:
      result = item
      index += 1
      continue

    result = call(f, result, item, index, items)
    index += 1

  return result


def reduce_right(items, f, initial_value=nil):
  """Reduces an array from right to left."""
  items = list(items)
  last_index = len(items) - 1
  index = last_index
  result = initial_value

  if initial_value == nil:
    result = items[last_index]
    index -= 1

  while index >= 0:
    result = call(f, result, items[index], index, items)
    index -= 1

  return result


def each(*args):
  """
  Generates a progression list from start to end (excluded).
  """
  begin = 0
  end = 0
  step = 1

  if len(args) == 1:
    end = args[0]
  elif len(args) == 2:
    begin = args[0]
    end = args[1]
  elif len(args) == 3:
    begin = args[0]
    end = args[1]
    step = args[2]

  if (begin - end) * step > 0:
    step = -1

  numbers = []
  index = begin

  while (index - end) * step < 0:
    numbers.append(index)
    index += step

  return numbers


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

from math import (
  floor,
  ceil,
  sqrt,
  log as logab,
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
  pow,
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
  return reduce(numbers, add)


def prod(*numbers):
  return reduce(numbers, mul)

def approx_eq(a, b, tolerance=0.1 ** 5):
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
    return b if a == nil else a

fallback = nullish

def ln(n):
  # base default to e
  return logab(n)

log(math.inf < 0)
