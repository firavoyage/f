binary indexed tree

```
a 1..=n

tree 1..=n

tree i = sum a i..parent(i)

lsb i = i & (-i) # last significant bit, & is bit and
# e.g. 2 -> 10 -> 2, 3 -> 11 -> 1, 4 -> 100 -> 4

parent i = i - lsb i

next i = i + lsb i

query i = sum a 1..=i = tree i + tree parent(i) + ... root

update i = update tree i, next(i), ... last
```

you may visualize how each covers, like via a table or on an axis
