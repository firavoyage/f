spec

- file rw
  - write path content
  - read path
  - ~~foreach~~
- path
  - join ... = path: string <!-- just like math.max. i may have a util for it -->
  - expand_path = absolute path (expand relative and tlide)
  - basename path <!-- second param? -->
  - dirname path
  - extname path
- queries
  - does exist
  - is file
  - is dir ~~is directory~~ <!-- be consistent w your aliases -->
  - size
  - mtime <!-- modification timestamp, maybe i can have more -->
- utils
  - rename/mv
  - delete/unlink
  - ~~mkdir <!-- you know there will be -p -->~~
  - cp
  - ~~rm <!-- or maybe rm_rf? it's dangerous and it should be explicit. -->~~

---

```rb
File.basename("/home/user/script.rb")      # => "script.rb"
File.basename("/home/user/script.rb", ".rb") # => "script"
File.dirname("/home/user/script.rb")       # => "/home/user"
File.extname("/home/user/script.rb")       # => ".rb"
```


