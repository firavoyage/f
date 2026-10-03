# .

py builtins, math module

```
 ~ % py
Python 3.12.3 (main, Mar 23 2026, 19:04:32) [GCC 13.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> max
<built-in function max>
>>> pi
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'pi' is not defined
>>> Math.pi
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'Math' is not defined
>>> import Math
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ModuleNotFoundError: No module named 'Math'
>>> import math
>>> math
<module 'math' (built-in)>
>>> math.pi
3.141592653589793
```

min, max

```
 ~ % py
Python 3.12.3 (main, Mar 23 2026, 19:04:32) [GCC 13.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> max(1, 2, 3)
3
>>> max(1)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'int' object is not iterable
>>> max([1,2,3])
3
>>> max()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: max expected at least 1 argument, got 0
```

```
 ~ % js
Welcome to Node.js v24.14.0.
Type ".help" for more information.
> max = Math.max
[Function: max]
> max(1, 2, 3)
3
> max(1)
1
> max([1])
1
> max([2])
2
> max([1,2,3])
NaN
> max([])
0
> max()
-Infinity
> max([1,2])
NaN
```


