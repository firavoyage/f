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
  if isinstance(args[0], (int, float)):
    command_write(' '.join(map(str, args)))
  else:
    command_write(''.join(map(str, args)))


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
  if isinstance(res, list__):
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


# std

nil = None
true = True
false = False


def is_given(v):
  return v is not nil


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


# fmt


def format_float(n: float, precision: int) -> str:
  """Formats a float to a fixed number of decimal points."""
  return f'{n:.{precision}f}'


# fp


def identity(x):
  return x


halt_symbol = object()


class HaltContainer:
  def __init__(self, value):
    self.halt_symbol = halt_symbol
    self.value = value


def halt(value=None):
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
    value = f(item, index, items)

    if value is None:
      continue

    if value is halt:
      break

    if isinstance(value, HaltContainer) and value.halt_symbol is halt_symbol:
      result.append(value.value)
      break

    result.append(value)

  return result

def add_one(x):
  return x+1

log(map([1, 2, 3], add_one))
