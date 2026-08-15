# how to get all 100m numbers of sqrt2

1:01 AM

You can get 100 million digits of

2√

by **downloading a precomputed file** or **generating them on your computer**. Modern hardware can compute this in seconds. [link](https://www.quora.com/How-long-would-it-take-for-a-supercomputer-to-calculate-the-value-of-pi-%CF%80-to-1-million-decimal-places)

### Option 1: Download Precomputed Files (Fastest)

The easiest way is to download text files from existing datasets.

- Use the open-source [Sharabaddin Square Root of 2 GitHub Repository](https://github.com/Sharabaddin/square%5Froot%5Fof%5F2).
- This repository hosts digits up to 1 billion.
- Download the compressed text file directly.
- Extract it to get the raw numbers. [link](https://github.com/Sharabaddin/square%5Froot%5Fof%5F2)

### Option 2: Compute Locally via y-cruncher (Recommended)

You can generate the digits yourself using the industry-standard multi-threaded math program [y-cruncher](https://en.wikipedia.org/wiki/Y-cruncher).

- Download the tool from the official [Numberworld y-cruncher page](https://www.numberworld.org/y-cruncher/).
- Launch the executable file.
- Select the option to compute a constant.
- Choose **Square Root of 2**.
- Enter `100,000,000` for the digit count.
- Select your preferred decimal format output.
- The program writes a `.txt` file automatically. [link](https://www.numberworld.org/y-cruncher/)

### Option 3: Generate via Python Script

If you want to use code, Python's native `decimal` library can handle large scales.

- Note that this method requires a lot of RAM.
- It will take a few minutes to complete.

python

```
import decimal

# Set precision to 100 million places
decimal.getcontext().prec = 100000000

# Compute square root of 2
sqrt_2 = decimal.Decimal(2).sqrt()

# Save to a text file
with open("sqrt2_100m.txt", "w") as f:
    f.write(str(sqrt_2))
```

Use code with caution.

If you plan to use these numbers, let me know:

- What **programming language** or **software tool** are you using?
- What **specific task** or analysis are you performing?

I can provide optimized code to parse the 100 MB text file efficiently.

- [link](https://www.reddit.com/r/matheducation/comments/1fp17iw/our%5Fteacher%5Fasked%5Fus%5Fto%5Fmemorize%5Fsqrt2%5Fto%5Fsqrt10/)\
  Reddit\
  Our teacher asked us to memorize sqrt(2) to sqrt(10) to 3 dec places. Can ...\
  For a reason, first of all, I used to agree that number sense is useless. I said this for decades. I would say, I'm good at math b...
- [link](https://www.numberworld.org/y-cruncher/)\
  Numberworld.org\
  y-cruncher - A Multi-Threaded Pi Program - Numberworld.org\
  Downloading any of these files constitutes as acceptance of the license agreement. Because of virus scanner false positives, the W...
- [link](https://www.numberworld.org/y-cruncher/records.html)\
  Numberworld.org\
  Records set by y-cruncher - Numberworld.org\
  Records Set by y-cruncher. (Last updated: December 11, 2025). Rules: Ever since y-cruncher was unlocked in 2010 to allow anybody t...

Show all

# 