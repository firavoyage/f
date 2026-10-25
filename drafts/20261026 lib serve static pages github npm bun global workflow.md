# .

```sh
# push

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git init
git remote add g https://github.com/firahq/$name.git

git add .
git commit -m '.' || true

git push -f g

# add

bun add -g github:firahq/$name --force
```

```sh
# update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun add -g github:firahq/$name@latest
# bun add -g $name@github:firahq/$name --force
```
