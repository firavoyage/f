from template import *


# math/nt


def is_prime(n):
  if n <= 1:
    return false
  # Check divisibility only up to the square root of n
  for i in range(2, int(n**0.5) + 1):
    if n % i == 0:
      return false
  return true


# prefer trial division unless n is large
def is_prime(n):
  """
  Deterministic Miller-Rabin primality test for 64-bit integers.
  100% accurate for n < 2^64. Time Complexity: O(k log^3 n) where k = len(bases).

  intentionally does not quickly resolve small n
  """
  if n < 2:
    return false
  # Check small primes directly to handle edge cases quickly
  if n in (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37):
    return true
  if n % 2 == 0 or n % 3 == 0 or n % 5 == 0:
    return false

  # Factor out powers of 2 from n - 1: write n - 1 as d * 2^s
  d = n - 1
  s = 0
  while d % 2 == 0:
    d //= 2
    s += 1

  # Deterministic bases for 64-bit integers (n < 2^64)
  bases = (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37)

  for a in bases:
    if n <= a:
      break

    # Compute a^d % n using Python's built-in modular exponentiation
    x = pow(a, d, n)
    if x == 1 or x == n - 1:
      continue

    # Square x repeatedly s-1 times
    for _ in range(s - 1):
      x = pow(x, 2, n)
      if x == n - 1:
        break
    else:
      # If we didn't break, n is definitely composite
      return false

  return true


def base_prime(n):
  """
  List of power of each prime from 2 to ... for n

  May contain trailing zero
  """
  result = [0]

  index = 0
  for i in each(2, n + 1, 1):
    if n % i == 0:
      while n % i == 0:
        result[index] += 1
        n /= i

    if is_prime(i + 1):
      result.append(0)
      index += 1
  return result
