# . setup, push, add

```sh
# push

name='b'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git init
git remote add g https://github.com/firahq/$name.git

git add .
git commit -m '.' || true

git push -f g

# add

name='b'

bun add -g github:firahq/$name
```

# . result

```
 ~ % cd Documents/f
 ~/Documents/f % cd cp
 ...Documents/f/cp % code .
 ...Documents/f/cp % name='b'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git init
git remote add g https://github.com/firahq/$name.git

git add .
git commit -m '.' || true

git push -f g
```

```
 ~ % which b
/home/fira/.bun/bin/b
 ~ % open /home/fira/.bun/bin/
```

```
 ~ % b
zsh: command not found: b
```

```
 ~ % name='b'

bun add github:firahq/$name

bun add v1.3.14 (0d9b296a)

installed b@github:firahq/b#d6528fb with binaries:
 - b

1 package installed [1021.00ms]
 ~ % name='b'

bun add -g github:firahq/$name

bun add v1.3.14 (0d9b296a)

installed b@github:firahq/b#d6528fb with binaries:
 - b

1 package installed [968.00ms]
```
