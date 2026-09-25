# greeting

```code
greet
  const name = input("What is your name?")

  if !name
    print("Hello, Mysterious Stranger!")
  else
    print("Hello, {name}!")
```

```code
greet
  const name = input("What is your name?")

  # input wont be nil
  match name
    ''
      print("Hello, Mysterious Stranger!")
    _
      print("Hello, {name}!")
```

```code
greet
  const name = input("What is your name?")

  match name
    err
      print("Failed to Receive Input")
    ''
      print("Hello, Mysterious Stranger!")
    _
      print("Hello, {name}!")
```

```code
greet
  const name = input("What is your name?")

  match name
    err(msg)
      print("Failed to Receive Input {msg}")
    ''
      print("Hello, Mysterious Stranger!")
    _
      print("Hello, {name}!")
```

# temperature converter

```code
convert_celsius_to_fahrenheit(celsius) = (celsius * 9 / 5) + 32

main
  celsius = 25
  fahrenheit = convert_celsius_to_fahrenheit(celsius)

  print("{celsius}°C is equal to ${fahrenheit}°F")
```

# fizz buzz

```code
fizzbuzz n = match n
  n % 3 = 0 & n % 5 = 0 'FizzBuzz'
  n % 3 = 0 'Fizz'
  n % 5 = 0 'Buzz'
  str(n) # you may convert explicitly for clearer type
  # n # it will never be ambiguous to coerce both way. + op is strictly for numbers.
  # string(n)

main
  print(map(1..=20, fizzbuzz))

# fizzbuzz n = match n
#   % 3 = 0 & % 5 = 0 'FizzBuzz'
#   % 3 = 0 'Fizz'
#   % 5 = 0 'Buzz'
#   str(n)
#   # string(n)
#   # n
# 
# main
#   print map(1..=20, fizzbuzz)
```

# fibonacci

```code
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci n = fibonacci(n-1) + fibonacci(n-2)

main
  print(map(0..=10, fibonacci))
```

# guessing game

```code
play
  target = 7
  # for name array/range, ~~each~~, repeat n, loop
  loop
    guess = int(input("Guess a number between 1 and 10:"))

    match guess
      nil
        print("Invalid input. Please enter a valid number.")
      target
        print("Spot on! You got it.")
        break
      > target
        print("Too high! Try again.")
      < target
        print("Too low! Try again.")

# play
#   target = 7
#   # for name array/range, ~~each~~, repeat n, loop
#   loop
#     guess = int(input("Guess a number between 1 and 10:"))
# 
#     print(
#       match guess
#         nil
#           "Invalid input. Please enter a valid number."
#         target
#           "Spot on! You got it."
#           break # it will run after print
#         > target
#           "Too high! Try again."
#         < target
#           "Too low! Try again."
#     )
```

# array filter

```code
sum_of_high_prices(int[] prices, threshold) = prices.filter(_ >= threshold).sum()

main
  const prices = [12.99, 45.00, 5.50, 99.99, 23.50, 8.00]  
  const threshold = 20.00

  print("Total sum of items over {threshold}: {sum_of_high_prices(prices, threshold)}")

  # print("Total sum of items over {threshold}: {total_sum}") where
  #   total_sum = sum_of_high_prices prices threshold

# sum_of_high_prices(int[] prices, threshold) {
#   let sum = 0
#   # let sum
# 
#   for price of prices
#     if price >= threshold
#       sum += price
# }
```


