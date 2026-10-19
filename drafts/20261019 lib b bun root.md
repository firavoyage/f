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

# 
