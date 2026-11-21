n, a, b = map(int, input().split(' '))

both = min(a, b)

neither = max(a + b - n, 0)

print(both, neither)
