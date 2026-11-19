env

# structure

`env.yaml`

```
key: value
foo: bar
```

# reference 

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

# better reference

## raw

## secure



```
key:
  env: foo
```

