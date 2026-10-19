# command_input = input

# def input():
#   return command_input()

# print(input())

# int_ = int

# def int(x):
#   return int_(x)

# print(int('1'))

# print(max(1, 2, 3))

# print(max([1, 2, 3]))

# print(max(1))

# print(max([1]))

# max_ = max


# def max(*args):
#   numbers = list(*args)
#   return max_(numbers)


# def list(*args):
#   """Handles spread args fallback or dynamic conversion of an iterable."""
#   if len(args) == 1 and hasattr(args[0], '__iter__') and not isinstance(args[0], str):
#     return args[0]
#   return args


# print(max(1, 2, 3))

# print(max([1, 2, 3]))

# print(max(1))

# print(max([1]))

print(type('') == str)