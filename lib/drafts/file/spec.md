spec

- write path content
- read path
- ~~foreach~~
- join ... = path: string <!-- just like math.max. i may have a util for it -->
- expand_path = absolute path (expand relative and tlide)
- basename path <!-- second param? -->
- dirname path
- extname path
- 

---

```rb
File.basename("/home/user/script.rb")      # => "script.rb"
File.basename("/home/user/script.rb", ".rb") # => "script"
File.dirname("/home/user/script.rb")       # => "/home/user"
File.extname("/home/user/script.rb")       # => ".rb"
```

