lib

utils and prelude

---

add

```sh
name='lib'

bun add github:firahq/$name
```

update

```sh
name='lib'

bun add $name@github:firahq/$name --force
# bun add github:firahq/lib --force # possibly less reliable?
# bun update lib # might not work due to aggressive local cache
```

publish on git

```sh
name='lib'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git init
git remote add g https://github.com/firahq/$name.git

git push -f g
```
