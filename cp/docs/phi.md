phi, usaco guide gold - math - divisibility

phi i means the number of coprimes (gcd 1) leq i.

e.g. phi 1 = 1, phi 2 = 1, phi 3 = 2, ...

you may precompute phi using a sieve like approach.

you have phi 1 to n initialized to i.

```
each i 1 n
  if phi i = i
    you consider it prime, because none of the primes less than i divides it

    for all multiples of i, i.e. j in {i * 1..=k where ik <= n}
      phi[j] = phi[j] * ((i-1)/i)
      
      in math, it means as j = ki, for every i numbers there will be one multiple of i
      i.e. i, 2i, ..., ki in j

      what about overlaps? no issue, as you already work on the remaining
      e.g. j = 6, 1 2 3 4 5 6, you can actually do it in any order
      - 1/2 first, 1 3 5, then 2/3, 1 5
      - 2/3 first, 1 2 4 5, then 1/2, 1 5

      it can be done efficiently by phi j -= phi j / i
```

time complexity is n log log n.
