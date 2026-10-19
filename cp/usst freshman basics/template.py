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
        command_write(" ".join(map(str, args)))
    else:
        command_write("".join(map(str, args)))

def prn(*args):
    """Writes elements with a trailing newline."""
    pr(*args)
    command_write("\n")

def read_line():
    """Reads a single line from standard input."""
    return command_readline().rstrip("\(\r\\)n")

def read():
    """Reads a line and parses tokens dynamically into numbers or strings."""
    line = read_line()
    if not line:
        return None
    
    tokens = line.split()
    items = []
    for v in tokens:
        n = num(v)
        items.append(n if n is not None else v)
        
    if len(items) == 1:
        return items[0]
    return items

input_data = read  # 'input' is a reserved keyword in Python

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

def is_given(v):
    return v is not None

def has(obj, key):
    """Universal check equivalent to JavaScript's includes / has / hasOwn."""
    if isinstance(obj, (list, tuple, str, set, dict)):
        return key in obj
    return False

contains = has

def entries(obj):
    """Returns iterable entries based on structure."""
    if isinstance(obj, dict):
        return list(obj.items())
    elif isinstance(obj, (list, tuple)):
        return list(enumerate(obj))
    elif isinstance(obj, set):
        return list(enumerate(obj))
    return []

def merge(target, *sources):
    """Merges multiple dictionaries into a target dictionary."""
    for source in sources:
        if isinstance(source, dict):
            target.update(source)
    return target

def is_type(v, t):
    """Type assertion equivalent to your specific JavaScript type definitions."""
    if v is None:
        return t == 'nil' or t is None
    
    if t == 'numeric':
        return isinstance(v, (int, float))
    
    if t == 'iterable':
        try:
            iter(v)
            return not isinstance(v, str)
        except TypeError:
            return False
            
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
        
    return False

# Type Converters

def num(n):
    """Attempts to cast to int or float safely, returning None if NaN/Error."""
    try:
        val = float(n)
        if math.isnan(val):
            return None
        # Convert to an actual integer if it represents a whole number
        if val.is_integer():
            return int(val)
        return val
    except (ValueError, TypeError):
        return None

def int_cast(n):
    try:
        return int(float(n))
    except (ValueError, TypeError):
        return None

def float_cast(n):
    try:
        val = float(n)
        return None if math.isnan(val) else val
    except (ValueError, TypeError):
        return None

def bool_cast(v):
    return bool(v)

def str_cast(s):
    return str(s)

def list_cast(*args):
    """Handles spread args fallback or dynamic conversion of an iterable."""
    if len(args) == 1:
        # If it's an iterable collection but not a raw string
        if hasattr(args[0], '__iter__') and not isinstance(args[0], str):
            return list(args[0])
    return list(args)

def arr(v):
    return list(v)

def set_cast(v):
    return set(v)

def dict_cast(v):
    if isinstance(v, dict):
        return v
    try:
        return dict(v)
    except (ValueError, TypeError):
        return dict(entries(v))
