# .

```
 ~ % ruby
he
^C-: Interrupt
 ~ % irb
irb(main):001:0> File
=> File
irb(main):002:0> File.write('a.txt')
(irb):2:in `write': wrong number of arguments (given 1, expected 2..3) (ArgumentError)
        from (irb):2:in `<main>'
        from /usr/lib/ruby/gems/3.2.0/gems/irb-1.6.2/exe/irb:11:in `<top (required)>'
        from /usr/bin/irb:25:in `load'
        from /usr/bin/irb:25:in `<main>'
irb(main):003:0> File.write('a.txt', '')
=> 0
irb(main):004:0> File.write('a.txt', 'hello world')
=> 11
irb(main):005:0> File.write('a.txt', 'hello world\n')
=> 13
```

```
 ~ % ls
 Android   Desktop     Downloads   Pictures   Public   Templates  'VirtualBox VMs'
 a.txt     Documents   Music       Projects   snap     Videos
 ~ % rm a.txt
 ~ % open a.txt
 ~ % cat a.txt
hello world%                                                                                                                           ~ % cat a.txt
hello world\n%                                                                                                                         ~ % rm a.txt
```

# 
