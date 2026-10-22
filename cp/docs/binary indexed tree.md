binary indexed tree

```
tree 1..=n

lsb i = i & (-i) # last significant bit, & is bit and
# e.g. 2 -> 10 -> 2, 3 -> 11 -> 1, 4 -> 100 -> 4

tree i covers 

parent i = i - lsb
```