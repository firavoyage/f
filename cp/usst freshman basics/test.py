import random
import time
from template import *
from algo import *

# __()

# log(gcd(55, 55555))

# log('a'.upper())

# n = 1.0
# m = 1.1

# log(int(n) if n.is_integer() else n)

# log(int(m) if m.is_integer() else m)

# log(prod())

# log(prod([]))

# log(sum())

# log(sum([]))

# log(reduce(list(), mul))
# log(reduce(list([]), mul))

# log(compose(partial(add, 1), partial(mul, 3))(1))

# log(
#   map(
#     [1, 2, 3], compose(partial(add, 1), partial(pow, exp=3))
#   )
# )
# log(
#   map(
#     [1, 2, 3], compose(lambda x: x + 1, partial(pow, exp=3))
#   )
# )
# log(map([1, 2, 3], compose(partial(pow, exp=3))))
# log(
#   map(
#     [1, 2, 3],
#     compose(
#       lambda x: x + 1,
#       lambda x: x + 1,
#     ),
#   )
# )
# log(map([1, 2, 3], lambda x: (x + 1) ** 3))


# log(comb(0, 2))
# log(comb(1, 2))
# log(comb(2, 2))

# def cache(f):
#   history = dict()

#   def cached_fn(*args):
#     # log('cache?', args)
#     if args in history:
#       # log('hit')
#       return history[args]
#     # log('save')
#     result = f(*args)
#     history[args] = result
#     return result

#   return cached_fn

# @cache
# def f(n):
#   time.sleep(1)

#   return n+1

# for i in each(5):
#   pr(f(i))
# for i in each(5):
#   pr(f(i))

# for i in each(1,100):
#   log(i, 100/i)

# def f(n):
#   return random.random() >= 0.5

# def g(n):
#   return true

# diff(closed_each(1, 10), f, g)

# a = dict()

# a[1] = 0

# log(a.get(1))

# log(call(add, 1, 2))
# log(call(add, [1, 2]))

# log(sum(map(closed_each(1, 10), identity)))

# log('0001000'.split('1'))
# log('10001'.split('1'))

# a = [1, 2, 3, 4]
# a = [1, 2]
# a = []

# log(a[slice(1, -1)])

a = [1, 2, 3]

for x, y in entries(a):
  log(x, y)
