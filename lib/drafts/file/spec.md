spec

- file rw
  - write path content
  - read path
  - ~~foreach~~
- path
  - join ... = path: string <!-- just like math.max. i may have a util for it -->
  - expand_path = absolute path (expand relative and tlide)
  - basename path <!-- second param? -->
  - stemname
  - dirname path
  - extname path
- queries
  - does exist
  - is file
  - is dir ~~is directory~~ <!-- be consistent w your aliases -->
  - size
  - stat
  - atime, ctime, mtime, birthtime <!-- access, change, modification, or creation timestamps. --> ~~mtime <!-- modification timestamp, maybe i can have more (upd: yeah!) -->~~
  - utime(atime, mtime)
- utils
  - rename/mv
  - delete/unlink
  - mkpath ~~mkdir <!-- you know there will be -p -->~~
  - cp
  - rmtree ~~rm <!-- or maybe rm_rf? it's dangerous and it should be explicit. -->~~

---

```rb
File.basename("/home/user/script.rb")      # => "script.rb"
File.basename("/home/user/script.rb", ".rb") # => "script"
File.dirname("/home/user/script.rb")       # => "/home/user"
File.extname("/home/user/script.rb")       # => ".rb"
```


