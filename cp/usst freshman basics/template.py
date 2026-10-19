import sys
import math

# utils

command_write = sys.stdout.write
command_readline = sys.stdin.readline
log = print


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


def read_line():
  """Reads a single line from standard input."""
  return command_readline().rstrip('\(\r\\)n')


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
  if isinstance(res, list):
    return int(res[0])
  return int(res)


def read_ints():
  """Parses an array of integers from the current line context."""
  res = read()
  if isinstance(res, list):
    return [int(x) for x in res]
  return [int(res)]


def read_num():
  """Parses a single number (float/int) from the current line context."""
  res = read()
  if isinstance(res, list):
    return num(res[0])
  return num(res)


def read_nums():
  """Parses an array of numbers from the current line context."""
  res = read()
  if isinstance(res, list):
    return [num(x) for x in res]
  return [num(res)]


def print_fn(*args):
  """Custom print wrapper adhering to prn behaviour."""
  prn(*args)


# std

nil = None
true = True
false = False


def is_given(v):
  return v is not nil


def has(obj, key):
  """Universal check equivalent to JavaScript's includes / has / hasOwn."""
  if isinstance(obj, (list, tuple, str, set, dict)):
    return key in obj
  return false


def entries(obj):
  """Returns iterable entries based on structure."""
  if isinstance(obj, dict):
    return list(obj.items())
  elif isinstance(obj, (list, tuple)):
    return list(enumerate(obj))
  elif isinstance(obj, set):
    return list(enumerate(obj))
  return []


def is_type(v, t):
  """Type assertion equivalent to your specific JavaScript type definitions."""
  if v is nil:
    return t == 'nil' or t is nil

  if t == 'numeric':
    return isinstance(v, (int, float))

  if t == 'iterable':
    try:
      iter(v)
      return not isinstance(v, str)
    except TypeError:
      return false

  if isinstance(t, type):
    return isinstance(v, t)

  if t == 'array':
    return isinstance(v, list)
  elif t == 'string':
    return isinstance(v, str)
  elif t == 'number':
    return isinstance(v, (int, float))
  elif t == 'boolean':
    return isinstance(v, bool)
  elif t == 'object':
    return isinstance(v, dict)
  elif t == 'function':
    return callable(v)

  return false


def num(n):
  """Attempts to cast to int or float safely, returning nil if NaN/Error."""
  try:
    val = float(n)
    if math.isnan(val):
      return nil
    # Convert to an actual integer if it represents a whole number
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


def list(*args):
  """Handles spread args fallback or dynamic conversion of an iterable."""
  if len(args) == 1:
    # If it's an iterable collection but not a raw string
    if hasattr(args[0], '__iter__') and not isinstance(args[0], str):
      return list(args[0])
  return list(args)


