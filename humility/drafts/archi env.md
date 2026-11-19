env

# structure

`env.yaml`

```
key: value
foo: bar
```

# reference (deprecated)

## prev

config

```
key: bar
```

## current

config

```
key: env:foo
```

env

```
foo: bar
```

if you would not have a key w `env:` prefix.

# reference

## raw

config

```
key: bar
```

## secure

config

```
key:
  env: foo
```

env

```
foo: bar
```

# utils

```
resolve env
  raw -> raw
  env -> read env
```


