support mock. await import.

```sh
cd home # relative
cd ./home # relative
cd /home # hard
```

wait! it does not have to be relative to source or baseurl. it should be relative to config. you are supposed to put overrides or custom extensions in config instead of main code.

`/` indicator might not be reliable cross plat. just be simple try import from config, if fail, try hard, otherwise fail completely.