<!-- shebang?! -->

# .

add

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

update

```sh
# update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun rm -g $name
bun add -g github:firahq/$name --force --no-cache
```

# . test

```
 ~ % which serve
/home/fira/.bun/bin/serve
 ~ % bun add -g github:firahq/$name

bun add v1.3.14 (0d9b296a)
error: GET https://api.github.com/repos/firahq/tarball/ - 404
error: github:firahq/ failed to resolve
 ~ % bun add -g github:firahq/$name

bun add v1.3.14 (0d9b296a)
error: GET https://api.github.com/repos/firahq/tarball/ - 404
error: github:firahq/ failed to resolve
 ~ % # push

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git init
git remote add g https://github.com/firahq/$name.git

git add .
git commit -m '.' || true

git push -f g

# add

bun add -g github:firahq/$name

Reinitialized existing Git repository in /home/fira/Documents/f/.git/.git_serve/
error: remote g already exists.
[master 11a4850] .
 1 file changed, 2 insertions(+)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 315 bytes | 315.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/firahq/serve.git
   2064e57..11a4850  master -> master
bun add v1.3.14 (0d9b296a)

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

[54.00ms] done
 ~ % # push

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git init
git remote add g https://github.com/firahq/$name.git

git add .
git commit -m '.' || true

git push -f g

# add

bun add -g github:firahq/$name

Reinitialized existing Git repository in /home/fira/Documents/f/.git/.git_serve/
error: remote g already exists.
[master 27beb5e] .
 1 file changed, 48 insertions(+), 48 deletions(-)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 548 bytes | 548.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/firahq/serve.git
   11a4850..27beb5e  master -> master
bun add v1.3.14 (0d9b296a)

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

[6.00ms] done
 ~ % bun add -g github:firahq/$name --force
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

145 packages installed [358.00ms]
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun add -g $name@github:firahq/$name --force

On branch master
Your branch is up to date with 'g/master'.

nothing to commit, working tree clean
Everything up-to-date
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

145 packages installed [163.00ms]
 ~ %
name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun add -g github:firahq/$name@latest
# bun add -g $name@github:firahq/$name --force

On branch master
Your branch is up to date with 'g/master'.

nothing to commit, working tree clean
Everything up-to-date
bun add v1.3.14 (0d9b296a)
error: GET https://api.github.com/repos//latest/tarball/ - 404
error: github:firahq/serve@latest failed to resolve
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun add -g "github:firahq/${name}@latest"
# bun add -g $name@github:firahq/$name --force

On branch master
Your branch is up to date with 'g/master'.

nothing to commit, working tree clean
Everything up-to-date
bun add v1.3.14 (0d9b296a)
error: GET https://api.github.com/repos//latest/tarball/ - 404
error: github:firahq/serve@latest failed to resolve
 ~ % bun add -g github:firahq/${name}#master

bun add v1.3.14 (0d9b296a)
error: Package "serve@github:firahq/serve#2064e57" has a dependency loop
  Resolution: "serve@github:firahq/serve#27beb5e"
  Dependency: "serve@github:firahq/serve"
error: An internal error occurred (DependencyLoop)
 ~ % bun rm -g github:firahq/${name}
bun add -g github:firahq/${name}

bun remove v1.3.14 (0d9b296a)

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

[6.00ms] done
bun add v1.3.14 (0d9b296a)

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

[7.00ms] done
 ~ % bun add -g github:firahq/${name} --force --no-cache

bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

145 packages installed [164.00ms]
```

```
 ~ % serve -v
^C
 ~ % serve -v
^C
 ~ % serve -v & pid=$!; sleep 1; kill -9 $pid 2>/dev/null && echo "It froze! But I killed it."
[1] 10667
It froze! But I killed it.
[1]  + killed     serve -v
 ~ %
 ~ % serve -v
^C
```

```
 ~ % which serve
/home/fira/.bun/bin/serve
```

```
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun add -g github:firahq/$name --force --no-cache
# bun add -g $name@github:firahq/$name --force

On branch master
Your branch is up to date with 'g/master'.

nothing to commit, working tree clean
Everything up-to-date
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

145 packages installed [164.00ms]
 ~ % rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache

bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

145 packages installed [1072.00ms]
 ~ % bun remove -g github:firahq/$name
rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache

bun remove v1.3.14 (0d9b296a)

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

[6.00ms] done
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

145 packages installed [1164.00ms]
 ~ % bun rm -g github:firahq/$name

bun remove v1.3.14 (0d9b296a)

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

[6.00ms] done
 ~ % bun rm -g github:firahq/$name

bun remove v1.3.14 (0d9b296a)

installed serve@github:firahq/serve#2064e57 with binaries:
 - serve

[5.00ms] done
 ~ % bun rm -g $name

bun remove v1.3.14 (0d9b296a)

- serve
1 package removed [4.00ms]
 ~ % bun add -g github:firahq/$name --force --no-cache

bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#27beb5e with binaries:
 - serve

145 packages installed [3.76s]
```

```
 ~ % serve -v
^C
```

```
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun rm -g $name
# rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache
# bun add -g $name@github:firahq/$name --force

[master da09995] .
 1 file changed, 35 insertions(+), 35 deletions(-)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 475 bytes | 475.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/firahq/serve.git
   27beb5e..da09995  master -> master
bun remove v1.3.14 (0d9b296a)

- serve
1 package removed [5.00ms]
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#da09995 with binaries:
 - serve

145 packages installed [3.70s]
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun rm -g $name
# rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache
# bun add -g $name@github:firahq/$name --force

[master 9c05c53] .
 1 file changed, 138 insertions(+), 138 deletions(-)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1002 bytes | 1002.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/firahq/serve.git
   da09995..9c05c53  master -> master
bun remove v1.3.14 (0d9b296a)

- serve
1 package removed [5.00ms]
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#9c05c53 with binaries:
 - serve

145 packages installed [3.83s]
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun rm -g $name
# rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache
# bun add -g $name@github:firahq/$name --force

[master 3dd5694] .
 1 file changed, 140 insertions(+), 138 deletions(-)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 920 bytes | 920.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/firahq/serve.git
   9c05c53..3dd5694  master -> master
bun remove v1.3.14 (0d9b296a)

- serve
1 package removed [4.00ms]
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#3dd5694 with binaries:
 - serve

145 packages installed [3.88s]
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun rm -g $name
# rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache
# bun add -g $name@github:firahq/$name --force

[master b55aa53] .
 1 file changed, 1 insertion(+), 1 deletion(-)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 295 bytes | 295.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/firahq/serve.git
   3dd5694..b55aa53  master -> master
bun remove v1.3.14 (0d9b296a)

- serve
1 package removed [4.00ms]
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#3dd5694 with binaries:
 - serve

145 packages installed [3.46s]
```

<!-- ?! -->

```
 ~ % serve -v
^C
 ~ % serve -v
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
/home/fira/.bun/bin/serve: 1: //: Permission denied
/home/fira/.bun/bin/serve: 2: //: Permission denied
/home/fira/.bun/bin/serve: 3: //: Permission denied
/home/fira/.bun/bin/serve: 4: //: Permission denied
/home/fira/.bun/bin/serve: 5: //: Permission denied
/home/fira/.bun/bin/serve: 6: //: Permission denied
/home/fira/.bun/bin/serve: 7: //: Permission denied
/home/fira/.bun/bin/serve: 8: //: Permission denied
/home/fira/.bun/bin/serve: 9: //: Permission denied
/home/fira/.bun/bin/serve: 11: //: Permission denied
^C
```

```

```

```
 ~ % serve -v
node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/home/fira/.bun/install/global/node_modules/lib/file' imported from /home/fira/.bun/install/global/node_modules/serve/index.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:865:10)
    at defaultResolve (node:internal/modules/esm/resolve:991:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:719:20)
    at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:736:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:765:52)
    at #resolve (node:internal/modules/esm/loader:701:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:621:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:160:33)
    at ModuleJob.link (node:internal/modules/esm/module_job:245:17) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///home/fira/.bun/install/global/node_modules/lib/file'
}

Node.js v24.14.0
 ~ % serve -v
node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/home/fira/.bun/install/global/node_modules/lib/file' imported from /home/fira/.bun/install/global/node_modules/serve/index.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:865:10)
    at defaultResolve (node:internal/modules/esm/resolve:991:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:719:20)
    at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:736:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:765:52)
    at #resolve (node:internal/modules/esm/loader:701:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:621:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:160:33)
    at ModuleJob.link (node:internal/modules/esm/module_job:245:17) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///home/fira/.bun/install/global/node_modules/lib/file'
}

Node.js v24.14.0
```

```
 ~ % serve -v
node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/home/fira/.bun/install/global/node_modules/lib/file' imported from /home/fira/.bun/install/global/node_modules/serve/index.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:865:10)
    at defaultResolve (node:internal/modules/esm/resolve:991:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:719:20)
    at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:736:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:765:52)
    at #resolve (node:internal/modules/esm/loader:701:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:621:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:160:33)
    at ModuleJob.link (node:internal/modules/esm/module_job:245:17) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///home/fira/.bun/install/global/node_modules/lib/file'
}

Node.js v24.14.0
 ~ % which serve
/home/fira/.bun/bin/serve
```

```
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun rm -g $name
# rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache
# bun add -g $name@github:firahq/$name --force
On branch master
Your branch is up to date with 'g/master'.

nothing to commit, working tree clean
Everything up-to-date
bun remove v1.3.14 (0d9b296a)

- serve
1 package removed [5.00ms]
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#b55aa53 with binaries:
 - serve

145 packages installed [3.76s]
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun rm -g $name
# rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache
# bun add -g $name@github:firahq/$name --force
[master d0b9bc5] .
 1 file changed, 35 insertions(+), 35 deletions(-)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 450 bytes | 450.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/firahq/serve.git
   b55aa53..d0b9bc5  master -> master
bun remove v1.3.14 (0d9b296a)

- serve
1 package removed [4.00ms]
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#b55aa53 with binaries:
 - serve

145 packages installed [3.77s]
 ~ % # update

name='serve'

export GIT_DIR="/home/fira/Documents/f/.git/.git_$name"
export GIT_WORK_TREE="/home/fira/Documents/f/$name"

git add .
git commit -m '.' || true

git push -f g

bun rm -g $name
# rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache
# bun add -g $name@github:firahq/$name --force
[master 352ef9b] .
 1 file changed, 48 insertions(+), 48 deletions(-)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 502 bytes | 502.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/firahq/serve.git
   d0b9bc5..352ef9b  master -> master
bun remove v1.3.14 (0d9b296a)

- serve
1 package removed [5.00ms]
bun add v1.3.14 (0d9b296a)

+ b@github:firahq/b#d6528fb
+ pm2@7.0.4

installed serve@github:firahq/serve#352ef9b with binaries:
 - serve

145 packages installed [3.94s]
```

```
 ~ % serve -v
 ~ % serve -h
 ~ % serve -v
 ~ % serve -v
serve 0.0 (2026.10.26)
 ~ % serve
Serve on http://localhost:41007
2026-10-26 02:32:21+08:00 [error] index file should exist

2026-10-26 02:32:21+08:00 [info] GET /

2026-10-26 02:32:21+08:00 [error] not found file should exist

2026-10-26 02:32:21+08:00 [info] GET /favicon.ico

^C
```

# how to parse cli args in nodejs

9:58 AM

### how to parse cli args in nodejs

You can parse command-line arguments in **Node.js** using either the built-in native APIs or popular third-party libraries.

The **most recommended native approach** is using `util.parseArgs()`, which was introduced to avoid needing heavy external libraries for standard CLI tools.

---

#### 1\. The Modern Native Way: `util.parseArgs()` (Recommended)

Node.js includes a built-in utility called [util.parseArgs()](https://lirantal.com/blog/mastering-cli-arguments-nodejs) that safely parses flags, string values, and booleans without requiring any `npm install`. [](https://lirantal.com/blog/mastering-cli-arguments-nodejs)

javascript

```
import { parseArgs } from 'node:util';

// Define your expected configuration
const options = {
  verbose: { type: 'boolean', short: 'v' },
  output: { type: 'string', short: 'o' },
  count: { type: 'string', short: 'c' }
};

// Parse the arguments (slicing out the first two node/script paths)
const { values, positionals } = parseArgs({ 
  args: process.argv.slice(2), 
  options,
  strict: true // Throws an error if an unknown option is passed
});

console.log('Parsed Options:', values);
console.log('Remaining Arguments:', positionals);

```



**How you run it:**

bash

```
node index.js -v --output ./dist file1.txt file2.txt

```



**Output:**

javascript

```
Parsed Options: { verbose: true, output: './dist' }
Remaining Arguments: [ 'file1.txt', 'file2.txt' ]

```



---

#### 2\. The Third-Party Ecosystem (For Complex CLIs)

If you are building an advanced CLI with subcommands (like `git clone` or `npm install`), automatic help-screen generation, and complex validation, choose one of these robust industry favorites:

##### Option A: Commander.js (Best for Git-style subcommands)

Commander.js is highly declarative and perfect if you want structured option parsing. [](https://oneuptime.com/blog/post/2026-01-22-nodejs-parse-command-line-arguments/view)

bash

```
npm install commander

```



javascript

```
const { program } = require('commander');

program
  .name('my-cli')
  .description('A sample CLI tool')
  .version('1.0.0');

program
  .option('-v, --verbose', 'Enable verbose logging')
  .option('-o, --output <path>', 'Output directory', './dist');

program.parse(process.argv);

const options = program.opts();
console.log(options.verbose, options.output);

```



##### Option B: Yargs (Best for configuration & validation)

Yargs automatically converts flags into a clean JavaScript object and excels at validating input types. [](https://www.geeksforgeeks.org/node-js/how-to-parse-command-line-arguments-in-node-js/)

bash

```
npm install yargs

```



javascript

```
const argv = require('yargs/yargs')(process.argv.slice(2))
  .option('output', {
    alias: 'o',
    type: 'string',
    description: 'Path to output file'
  })
  .argv;

console.log(argv.output);

```



---

#### 3\. The Barebones Way: `process.argv`

If you want zero dependencies and no configuration, you can inspect the raw string array generated by Node.js. [](https://www.geeksforgeeks.org/node-js/how-to-parse-command-line-arguments-in-node-js/)

By default, [process.argv](https://sentry.io/answers/command-line-arguments/) contains the absolute path to the Node executable at index `0`, and the path to your script at index `1`. Your actual custom arguments start at index `2`. [](https://sentry.io/answers/command-line-arguments/)

javascript

```
// Raw array of everything passed
const rawArgs = process.argv; 

// Just your user-defined arguments
const userArgs = process.argv.slice(2); 

console.log(userArgs);

```



**How you run it:**

bash

```
node script.js --env=production --port 3000

```



**Output:**

javascript

```
[ '--env=production', '--port', '3000' ]

```



_Note: If you use `process.argv`, you will have to write manual string manipulation logic (like `.split('=')`) to figure out what values belong to what flags._ [](https://stackoverflow.com/questions/28785254/parsing-node-command-line-arguments)

Would you like help setting up a **specific use case**, such as handling **subcommands** or adding an automatic **`--help` screen**? Let me know what your CLI app is trying to achieve!

* [](https://oneuptime.com/blog/post/2026-01-22-nodejs-parse-command-line-arguments/view)  
OneUptime  
How to Parse Command Line Arguments in Node.js  
\= require('commander'); option('-v, --verbose', 'Enable verbose output') parse(); const options = program. opts(); console. log('O...
* [](https://stackoverflow.com/questions/28785254/parsing-node-command-line-arguments)  
Stack Overflow  
Parsing Node Command Line Arguments  
First, create an object with all your defaults: ...then just loop through the args, replacing the options as you go.
* [](https://www.geeksforgeeks.org/node-js/how-to-parse-command-line-arguments-in-node-js/)  
GeeksforGeeks  
How to Parse Command Line Arguments in Node ? - GeeksforGeeks  
process.argv (native array; index 0 is Node path, index 1 is script path, index 2+ are user arguments; requires manual slicing and...

Show all

## will argv slice 2 work if you run like cli flag flag

will argv slice 2 work if you run like cli flag flag

10:22 AM

### will argv slice 2 work if you run like cli flag flag

10 sites

#### Here are top web results for exploring this topic:

[](https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program-and-receive-them)

Stack Overflow·https://stackoverflow.com

How do I pass **command line** arguments to a Node.js program **and** ...

I rewrote it much uglier and longer to use that second standard, and I'll post it as an answer because it wouldn't fit as a commentary. But it does get the job done. const args = process.argv.slice(2)

[](https://mojoauth.com/dev-guides/command-line-argument-escaping-in-nodejs)

MojoAuth·https://mojoauth.com

Node.js **Command Line** Arguments **and** Escaping - MojoAuth

Why are the quotes missing from process.argv? The shell strips quotes and backslash escapes while splitting the command line into arguments. Node receives the final values, so "hello world" arrives as

[](https://dev.to/annajmcdougall/interact-with-the-command-line-using-process-argv-in-nodejs-2doi)

DEV Community·https://dev.to

Interact with **the Command Line** using "**process**.**argv**" in NodeJS

The method process.argv basically captures what the user has typed into the command line or terminal when the programme runs. It returns us an array of each term entered which was separated by a space

[](https://teamtreehouse.com/community/why-we-need-processargvslice2)

teamtreehouse.com·https://teamtreehouse.com/community/why-we-need-processargvslice2

Why **we** need **process**.**argv**.**slice**(**2**) ? (Example) - Treehouse

The "argv" array contains everything given on the command line. The first item (argv\[0\]) will be the path to node itself, and the second item (argv\[1\]) will be the path to your script code. So a slice

[](https://github.com/nodejs/node/issues/19576)

GitHub·https://github.com

**process**.**argv** doesn't contain passed arguments **when** .js files are ...

... it is dependent on how .js files are associated with Node.js in Windows registry. If you just select "Open with" by GUI, it creates this association: "C:\\Program Files\\nodejs\\node.exe" "%1". and n

[](https://egghead.io/lessons/node-js-parse-user-input-through-node-js-process-argv-for-flags)

Egghead.io·https://egghead.io

Parse User Input through Node.js **process argv** for **Flags** \- Egghead.io

Social Share Links. Tweet. Copy link. Copy lesson as prompt. Published 4 years ago. Updated 10 months ago. View code on GitHub. When you run Node.js, you'll have access to the process object. If you c

[](https://nodejs.org/docs/latest/api/process.html)

Node.js·https://nodejs.org

**process**.**argv** \- Node.js

[](https://www.quora.com/What-does-process-argv-mean-in-Node-How-does-it-work)

Quora·https://www.quora.com

What **does process**.**argv** mean in Node? How **does it work**? - Quora

As Node.js Documentation states: “The \[code \]process.argv\[/code\] property returns an array containing the command line arguments passed when the Node.js process was launched.” You can use this to find

[](https://www.youtube.com/watch?v=6qMn3ef%5F6oU)

YouTube·https://www.youtube.com

How to **Use Command Line** Arguments (**Flags**) in NodeJS - YouTube

This video demonstrates how to use command line arguments and flags in a NodeJS or ElectronJS Application using process.argv.

[](https://blog.annamcdougall.com/interact-with-the-command-line-using-processargv-in-nodejs)

blog.annamcdougall.com·https://blog.annamcdougall.com/interact-with-the-command-line-using-processargv-in-nodejs

Interact with **the Command Line** using "**process**.**argv**" in NodeJS

The method process.argv basically captures what the user has typed into the command line or terminal when the programme runs. It returns us an array of each term entered which was separated by a space

## will argv slice 2 work if you run like cli flag flag

will argv slice 2 work if you run like cli flag flag

10:22 AM

### will argv slice 2 work if you run like cli flag flag

**Yes, `process.argv.slice(2)` will still work perfectly** if you run your script as a globally installed CLI binary (like `my-command flag1 flag2`).

Even though the execution command looks shorter, the operating system and Node.js still structure the raw `process.argv` array the exact same way under the hood.

Here is exactly what `process.argv` looks like in both scenarios:

#### 1\. Running standard: `node index.js foo bar`

* `process.argv[0]`: `/usr/bin/node` (Path to Node)
* `process.argv[1]`: `/path/to/index.js` (Path to Script)
* `process.argv[2]`: `foo`
* `process.argv[3]`: `bar`
* **`slice(2)` returns:** `['foo', 'bar']`

#### 2\. Running as a CLI: `my-command foo bar`

When you install a package globally or use `npm link`, the system creates a symlink binary. When executed, Node.js still fills those first two slots with the executable and the symlinked file path:

* `process.argv[0]`: `/usr/bin/node` (Path to Node)
* `process.argv[1]`: `/usr/local/bin/my-command` (Path to the CLI binary script)
* `process.argv[2]`: `foo`
* `process.argv[3]`: `bar`
* **`slice(2)` returns:** `['foo', 'bar']`

#### The Only Exception: Bundlers & Standalone Binaries

If you use a tool like `pkg` or `bun build --compile` to compile your Node.js app into a **single, standalone executable file** (where Node is embedded inside the binary itself), there is no separate script file.

* In those rare compiled cases, `process.argv[1]` might actually be your first argument, and `slice(2)` would accidentally skip a flag.

If you plan to compile your app into a standalone binary later, it is safer to use `util.parseArgs()` or `commander`, as they automatically handle this edge case for you.

Are you planning to distribute this tool via **npm** as a global command, or are you looking to compile it into a **standalone executable (.exe / binary)** file?

# how to convert array to entries in js

11:02 AM

To convert a JavaScript array into a key-value entries format, you can use the **`array.entries()` method** to get an iterator, or **`Object.entries()`** if you are converting a multidimensional array or want an actual array structure. [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/entries)

Here are the two primary ways depending on what kind of "entries" you need:

### 1\. Get an Iterator of `[index, value]` Pairs

If you have a flat array and want to get its entries (where the **index** is the key and the element is the value), use the built-in [Array.prototype.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/entries) method. 

This returns a new **Array Iterator** object. [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/entries)

javascript

```
const fruits = ["apple", "banana", "orange"];

// Create the entries iterator
const entriesIterator = fruits.entries();

// Loop through the entries using a for...of loop
for (const [index, element] of entriesIterator) {
  console.log(index, element);
}
// Output:
// 0 'apple'
// 1 'banana'
// 2 'orange'

```



If you need the result as an actual **array of arrays** (instead of an iterator), wrap it in `Array.from()`:

javascript

```
const entriesArray = Array.from(fruits.entries());
console.log(entriesArray); 
// Output: [[0, "apple"], [1, "banana"], [2, "orange"]]

```



### 2\. Convert an Array of Key-Value Objects to Entries

If you have an array containing an object (or multiple objects) and you want to extract its properties as an array of `[key, value]` pairs, use [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/fromEntries):

javascript

```
const user = { name: "Alice", age: 25 };

const entries = Object.entries(user);
console.log(entries);
// Output: [ ["name", "Alice"], ["age", 25] ]

```



What is your ultimate goal for converting the array? Let me know if you are trying to:

* **Loop over** both the index and the value easily
* Turn a 2D array of entries **back into an Object** using `Object.fromEntries()`
* Filter or manipulate data within a **multidimensional array**

I can provide the exact code block you need!

* [](https://stackoverflow.com/questions/4215737/how-to-convert-an-array-into-an-object)  
Stack Overflow  
How to convert an array into an object? - Stack Overflow  
This answer is not useful. Save this answer. Loading when this answer was accepted… Show activity on this post. ECMAScript 6 intro...
* [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Object/fromEntries)  
MDN Web Docs  
Object.fromEntries() - JavaScript  
Examples \* Converting a Map to an Object With Object.fromEntries , you can convert from Map to Object : js Copy const map = new Ma...
* [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/entries)  
MDN Web Docs  
Array.prototype.entries() - JavaScript - MDN Web Docs  
When used on sparse arrays, the entries() method iterates empty slots as if they have the value undefined . The entries() method i...

Show all

# why does it crash my computer import { Hono } from 'hono'

 import { serve } from '@hono/node-server' 

 import { cors } from 'hono/cors' 

 import { serveStatic } from '@hono/node-server/serve-static' 

 import fs from 'node:fs' 

 import { read, cwd, expand\_path, does\_exist } from 'lib/file' 

 import { now, format } from 'lib/time' 

 import { format\_log } from 'lib/log' 

  
 const { stringify: serialize } = JSON 

  
 const version = \`serve 0.0 (2026.10.26)\` 

  
 const help = \` 

 Serve static pages 

  
 Usage: serve \[file\] \[options\] 

  
 Options: 

 \-i, --index \[file\] Page to serve (same as file arg) 

 \--not-found \[file\] Page to show when not found (default: index) 

 \-p, --port \[number\] Port to serve on (default: 0, random) 

 \-r, --root \[path\] Root folder for reletive paths (default: cwd) 

 \-h, --help Print help 

 \-v, --version Print version 

 \`.trim() 

  
 function parse\_args() { 

 const args = process.argv.slice(2) 

  
 const options = { 

 index: 'index.html', 

 not\_found: nil, 

 port: 0, 

 root: cwd(), 

 } 

  
 let should\_skip = false 

 for (const \[index, arg\] of args.entries()) { 

 if (should\_skip) { 

 continue 

 } 

  
 if (has(\['-h', '--help'\], arg)) { 

 log(help) 

 return nil 

 } else if (has(\['-v', '--version'\], arg)) { 

 log(version) 

 return nil 

 } else if (has(\['-i', '--index'\], arg)) { 

 options.index = args\[index + 1\] 

 should\_skip = true 

 } else if (has(\['--not-found'\], arg)) { 

 options.not\_found = args\[index + 1\] 

 should\_skip = true 

 } else if (has(\['-p', '--port'\], arg)) { 

 options.port = args\[index + 1\] 

 should\_skip = true 

 } else if (has(\['-r', '--root'\], arg)) { 

 options.root = expand\_path(cwd(), args\[index + 1\]) 

 should\_skip = true 

 } else { 

 // arg 

 options.index = arg 

 } 

 } 

  
 if (options.not\_found == nil) { 

 options.not\_found = options.index 

 } 

  
 return options 

 } 

  
 function run(options) { 

 const { index, not\_found, port, root } = options 

  
 const app = new Hono() 

  
 app.use('\*', cors()) 

  
 // Log Requests 

 app.use('\*', async (c, next) => { 

 await next() 

 log(format\_log(\`${c.req.method} ${c.req.path}\`, 'info')) 

 // const time = format(now()) 

 // await next() 

 // log(\`${time} ${c.req.method} ${c.req.path}\`) 

 }) 

  
 app.get('/', (c) => { 

 const index\_file = expand\_path(root, index) 

  
 if (does\_exist(index\_file)) { 

 return c.html(read(index\_file)) 

 } else { 

 log(format\_log('index file should exist', 'error')) 

 return c.text('not found') 

 } 

 }); 

  
 // Serve Static Resources (e.g. css, js, img) 

 app.use('\*', serveStatic({ root })) 

  
 // Fallback to Not Found 

 app.get('\*', (c) => { 

 const not\_found\_file = expand\_path(root, not\_found) 

  
 if (does\_exist(not\_found\_file)) { 

 return c.html(read(not\_found\_file)) 

 } else { 

 log(format\_log('not found file should exist', 'error')) 

 return c.text('not found') 

 } 

 }) 

  
 serve( 

 { 

 fetch: app.fetch, 

 port, 

 }, 

 (info) => { 

 log(\`Serve on http://localhost:${info.port}\`) 

 }, 

 ) 

 } 

  
 function main() { 

 const options = parse\_args() 

  
 if (options) { 

 run(options) 

 } 

 } 

  
 main() 

######   

Your script is likely crashing or throwing errors due to a few **undefined variables and missing imports** that cause runtime exceptions (`ReferenceError`), which can freeze terminals or cause runaway processes depending on how your environment handles uncaught errors.

Here are the specific issues in your code and how to fix them:

### 1\. Undefined Variables (`nil`, `log`, `has`)

* **`nil`**: JavaScript does not have a `nil` keyword (that's Ruby/Python/Lua). You should use `null` or `undefined`.
* **`log`**: You are calling `log(...)` in multiple places (e.g., `log(help)`, `log(format_log(...))`), but `log` is **never imported or defined**. (You likely meant `console.log` or imported a logger).
* **`has`**: You use `has(['-h', '--help'], arg)`, but `has` is **never imported or defined** (in JS, you'd typically use `['...'].includes(arg)`).

### 2\. Fixed & Cleaned Code

Here is the corrected version of your script with proper JavaScript syntax, standard built-ins (`console.log`, `null`, `.includes()`), and proper error handling:

JavaScript

```
import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { serveStatic } from '@hono/node-server/serve-static'
import fs from 'node:fs'
import { read, cwd, expand_path, does_exist } from 'lib/file'
import { now, format } from 'lib/time'
import { format_log } from 'lib/log'

const { stringify: serialize } = JSON

const version = `serve 0.0 (2026.10.26)`

const help = `
Serve static pages

Usage: serve [file] [options]

Options:
  -i, --index [file]     Page to serve (same as file arg)
  --not-found [file]     Page to show when not found (default: index)
  -p, --port [number]    Port to serve on (default: 0, random)
  -r, --root [path]      Root folder for relative paths (default: cwd)
  -h, --help             Print help
  -v, --version          Print version
`.trim()

function parse_args() {
  const args = process.argv.slice(2)

  const options = {
    index: 'index.html',
    not_found: null, // Fixed: nil -> null
    port: 0,
    root: cwd(),
  }

  let should_skip = false
  for (const [index, arg] of args.entries()) {
    if (should_skip) {
      should_skip = false
      continue
    }

    if (['-h', '--help'].includes(arg)) { // Fixed: replaced undefined 'has' with '.includes()'
      console.log(help)
      return null
    } else if (['-v', '--version'].includes(arg)) {
      console.log(version)
      return null
    } else if (['-i', '--index'].includes(arg)) {
      options.index = args[index + 1]
      should_skip = true
    } else if (['--not-found'].includes(arg)) {
      options.not_found = args[index + 1]
      should_skip = true
    } else if (['-p', '--port'].includes(arg)) {
      options.port = Number(args[index + 1])
      should_skip = true
    } else if (['-r', '--root'].includes(arg)) {
      options.root = expand_path(cwd(), args[index + 1])
      should_skip = true
    } else {
      options.index = arg
    }
  }

  if (options.not_found === null) {
    options.not_found = options.index
  }

  return options
}

function run(options) {
  const { index, not_found, port, root } = options

  const app = new Hono()

  app.use('*', cors())

  // Log Requests
  app.use('*', async (c, next) => {
    await next()
    console.log(format_log(`${c.req.method} ${c.req.path}`, 'info')) // Fixed: log -> console.log
  })

  app.get('/', (c) => {
    const index_file = expand_path(root, index)

    if (does_exist(index_file)) {
      return c.html(read(index_file))
    } else {
      console.log(format_log('index file should exist', 'error'))
      return c.text('not found', 404)
    } 
  })

  // Serve Static Resources (e.g. css, js, img)
  app.use('*', serveStatic({ root }))

  // Fallback to Not Found
  app.get('*', (c) => {
    const not_found_file = expand_path(root, not_found)

    if (does_exist(not_found_file)) {
      return c.html(read(not_found_file))
    } else {
      console.log(format_log('not found file should exist', 'error'))
      return c.text('not found', 404)
    } 
  })

  serve(
    {
      fetch: app.fetch,
      port,
    },
    (info) => {
      console.log(`Serve on http://localhost:${info.port}`)
    },
  )
}

function main() {
  const options = parse_args()

  if (options) {
    run(options)
  }
}

main()

```

##### why can it make my computer frozen 

 why can it make my computer frozen 

######   

When a Node.js server script like this causes your entire computer to freeze (rather than just throwing an error in the terminal), it is usually due to **resource exhaustion (CPU/RAM spike) or an infinite loop** overwhelming your operating system's event loop or disk I/O.

Several specific mechanisms in your code can trigger this behavior:

### 1\. Infinite Request / Fallback Loops (Request Storms)

Look at your fallback route:

JavaScript

```
app.get('*', (c) => {
  const not_found_file = expand_path(root, not_found)
  if (does_exist(not_found_file)) {
    return c.html(read(not_found_file)) // Returns index.html with a 200 OK status
  }
  ...
})

```

* **The Problem:** When a browser loads your page, it automatically requests secondary assets like `favicon.ico`, source maps (`.js.map`), or linked CSS/JS files.
* If those files don't exist, your server catches them with `app.get('*')` and responds with `index.html` (returning a `200 OK` status instead of a `404 Not Found`).
* If `index.html` references a script or icon that is missing, the browser tries to fetch it again, gets `index.html` back, misinterprets it, and triggers another request. This creates an **infinite request loop** that instantly floods your server with thousands of requests per second, maxing out your CPU and freezing your computer.

### 2\. Accidental Hard Drive Root Serving (`-r /`)

Your default root is `cwd()` (current working directory), but your command-line parser supports `-r / --root`.

* **The Problem:** If you or a script argument accidentally pass `/` or `C:\` as the root directory, `serveStatic({ root: '/' })` tells Hono to treat your **entire computer's hard drive** as a static web directory.
* If a browser, crawler, or OS background service hits your local server, it can trigger massive recursive disk I/O scans across thousands of system files, locking up your disk and freezing the OS.

### 3\. Synchronous File Reading Blocking the Event Loop

JavaScript

```
return c.html(read(index_file))

```

* **The Problem:** If `read()` uses synchronous file reading (`fs.readFileSync`), it **blocks the entire Node.js single-threaded event loop** until the file is read from disk.
* If multiple requests hit the server simultaneously, requests queue up, blocking execution threads, spiking CPU usage to 100%, and making the system unresponsive.

### 4\. Rapid Crash-Looping (Process Supervisors)

If you are running this with a tool like `nodemon`, `pm2`, or a custom watcher that restarts the script on crash:

* Because your original code had multiple undefined variables (`nil`, `log`, `has`), the script **crashed instantly upon starting**.
* If a watcher immediately restarted it in an infinite loop, spawning thousands of Node.js processes per second, it will completely exhaust your RAM and CPU, causing a hard system freeze.

### How to Prevent It:

1. **Return proper 404 statuses** on fallbacks instead of serving `index.html` for everything:  
JavaScript  
```  
return c.html(read(not_found_file), 404)  
```
2. **Use asynchronous file reading** (`fs.promises.readFile`) instead of synchronous blocking reads.
3. **Exclude system directories** from being passed into the `--root` option.

##### it's frozen as soon as i run serve -v 

 it's frozen as soon as i run serve -v 

######   

The reason it freezes **instantly** when you run `serve -v` comes down to a hidden infinite loop caused by this section of your argument parser:

JavaScript

```
  let should_skip = false
  for (const [index, arg] of args.entries()) {
    if (should_skip) {
      continue // <--- HERE
    }
    // ...

```

### Why it triggers an infinite loop:

1. When you type `serve -v`, `args` contains `['-v']`.
2. The loop starts, `index` is `0`, and `arg` is `'-v'`.
3. It hits `else if (has(['-v', '--version'], arg))`. Inside that block, it calls `return nil` (which throws an error or exits, but assuming it evaluated further down or looped...)
4. More importantly, notice what happens when a flag _does_ use `should_skip = true` (like `-p` or `-r`): when the loop hits `continue`, **`should_skip` is never reset back to `false`!**
5. Even worse, if an option tries to read `args[index + 1]` and it's missing (which happens if you run a trailing flag or something like `serve -i`), or due to how `should_skip` gets stuck, the iterator gets trapped.
6. In many CLI wrappers or shell hooks (like if `serve` is mapped to an npm binary or global symlink), an unhandled exception or trapped loop combined with `log` / `nil` reference errors causes Node.js to spin the CPU core at 100%, locking up your terminal/computer immediately.

### The Fix

Update your `parse_args` loop to properly reset `should_skip` and use safe standard JavaScript syntax:

JavaScript

```
function parse_args() {
  const args = process.argv.slice(2)

  const options = {
    index: 'index.html',
    not_found: null,
    port: 0,
    root: cwd(),
  }

  let should_skip = false
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    if (should_skip) {
      should_skip = false // Reset this so it doesn't infinite-loop
      continue
    }

    if (['-h', '--help'].includes(arg)) {
      console.log(help)
      process.exit(0) // Safely terminate instead of returning unhandled values
    } else if (['-v', '--version'].includes(arg)) {
      console.log(version)
      process.exit(0) // Safely terminate
    } else if (['-i', '--index'].includes(arg)) {
      options.index = args[i + 1]
      should_skip = true
    } else if (['--not-found'].includes(arg)) {
      options.not_found = args[i + 1]
      should_skip = true
    } else if (['-p', '--port'].includes(arg)) {
      options.port = Number(args[i + 1])
      should_skip = true
    } else if (['-r', '--root'].includes(arg)) {
      options.root = expand_path(cwd(), args[i + 1])
      should_skip = true
    } else {
      options.index = arg
    }
  }

  if (options.not_found === null) {
    options.not_found = options.index
  }

  return options
}

```

Using standard `for (let i = 0; i < args.length; i++)` instead of `.entries()` with a bugged `continue` flag completely eliminates this freezing hazard.

##### give me a ubuntu command to run serve -v, quit it when frozen, and make it say sth 

 give me a ubuntu command to run serve -v, quit it when frozen, and make it say sth 

######   

To run your script, forcefully kill it if it freezes, and print a custom message afterward, you can chain these commands together in your Ubuntu terminal:

Bash

```
node server.js -v & pid=$!; sleep 1; kill -9 $pid 2>/dev/null && echo "Frozen! Killed it."

```

### How it works:

* **`node server.js -v &`**: Runs your script in the background so it doesn't lock up your active terminal.
* **`pid=$!`**: Saves the Process ID (PID) of that background task.
* **`sleep 1`**: Gives it 1 second to either finish or freeze.
* **`kill -9 $pid 2>/dev/null`**: Force-terminates the process if it's still hanging around.
* **`&& echo "..."`**: If the kill command executes, it prints your custom message (change `"Frozen! Killed it."` to whatever you want it to say).

##### i mean "serve -v" 

 i mean "serve -v" 

######   

If `serve` is installed globally as an executable command on your Ubuntu system, you can wrap it in the exact same background-and-kill pattern:

Bash

```
serve -v & pid=$!; sleep 1; kill -9 $pid 2>/dev/null && echo "It froze! But I killed it."

```

### Breakdown of what this does:

* **`serve -v &`**: Runs your global `serve` command in the background.
* **`pid=$!`**: Grabs the Process ID of that specific background job.
* **`sleep 1`**: Waits 1 second (adjust this to `0.5` if you want it faster).
* **`kill -9 $pid 2>/dev/null`**: Force-stops the process if it's hanging.
* **`&& echo "..."`**: Prints your custom message right after terminating it.

##### \~ % serve -v & pid=$!; sleep 1; kill -9 $pid 2>/dev/null && echo "It froze! But I killed it." \[1\] 10… 

 \~ % serve -v & pid=$!; sleep 1; kill -9 $pid 2>/dev/null && echo "It froze! But I killed it." 

 \[1\] 10667 

 It froze! But I killed it. 

 \[1\] + killed serve -v way longer than 1s it's killed 

######   

That output confirms it: **`serve -v` definitely froze.**

Because it didn't exit by itself within 1 second, the `sleep 1` finished, `kill -9` forced it to shut down, and your custom message triggered.

### Why `-v` causes a freeze:

In your original script, when you pass `-v`, it enters this block:

JavaScript

```
} else if (has(['-v', '--version'], arg)) {
  log(version)
  return nil
}

```

1. **`log` is undefined**, so it throws a `ReferenceError`.
2. **`nil` is undefined**, so trying to return it throws another error.
3. Because there is no top-level `try/catch` or proper error handling in `main()`, Node.js throws an uncaught exception. Depending on how `serve` is installed or linked in your path (e.g., via an npm wrapper or node binary setup), an unhandled crash can cause the shell process or node runtime to spin into an infinite loop or hang the standard output stream, locking up your terminal until killed.

If you fix the script using the updated `parse_args()` function provided earlier (replacing `log` with `console.log`, `nil` with `null`, and fixing the loop with `process.exit(0)`), running `serve -v` will instantly print the version and exit cleanly without needing to be force-killed!

##### it's not js issue at all, and no js could halt it this way even if it were inf loop, it's that i for… 

 it's not js issue at all, and no js could halt it this way even if it were inf loop, it's that i forgot shebang 

######   

That makes total sense!

If you ran `serve -v` directly as an executable without a shebang (like `#!/usr/bin/env node`), your shell didn't know how to interpret the JavaScript file. Instead of executing it with Node.js, your operating system likely tried to run it using a default shell interpreter or spawned a recursive execution loop (trying to execute the file as a shell script, which calls `serve` again, infinitely spawning processes).

That kind of shell-level recursive execution will max out your system instantly and cause a hard freeze, completely bypassing Node.js runtime behavior.

Adding the proper shebang at the very top of your file solves it:

JavaScript

```
#!/usr/bin/env node

import { Hono } from 'hono'
// ... rest of your code

```

And don't forget to make it executable with `chmod +x your-script-name` so the OS knows to respect the shebang!

##### wow it created a 96.2mb file named hono on home, no ext, and it thinks it's pdf and it even shows a … 

 wow it created a 96.2mb file named hono on home, no ext, and it thinks it's pdf and it even shows a screenshot of terminal window 

######   

That is wild!

If executing a Node.js script without a shebang somehow dumped a **96.2 MB binary-like file** named `hono` in your home directory that your OS thinks is a **PDF containing a terminal screenshot**, something deeply bizarre happened under the hood.

Here is likely what went down:

1. **The Shebang/Path Collision:** Because you didn't have a shebang and you named or linked the script/binary something generic like `serve` or `hono`, your shell might have fallen back to a system utility, an npm global bin symlink loop, or an obscure desktop environment file handler.
2. **The 96.2 MB PDF / Screenshot:** Some desktop environments (like GNOME on Ubuntu) or window managers have auto-screenshot tools or crash-dump handlers that trigger when a process aggressively hangs or floods `stdout`/`stderr`. If the terminal window captured a massive buffer stream of binary garbage or infinite error logs, a crash reporter or window manager daemon might have automatically captured a desktop/terminal screenshot and saved it into a fallback cache or your home folder, mislabeling it as a PDF or generic document container because of a MIME-type sniffing mishap.

You'll definitely want to clean that up:

Bash

```
rm ~/hono

```

Definitely a memorable debugging adventure—make sure that `#!/usr/bin/env node` is at line 1 before you ever run it directly again!

##### all pdf pages are page 1, all pages are the same while the last page is cropped, and the screenshot … 

 all pdf pages are page 1, all pages are the same while the last page is cropped, and the screenshot shows the line "it's froze but i killed it" 

######   

That is an absolute masterpiece of an accidental computer glitch.

Your terminal literally documented its own execution and murder—capturing the exact moment it printed `"It froze! But I killed it"`—and turned it into a massive, multi-page phantom PDF loop.

### What likely happened:

When the process hung and was abruptly hit with `kill -9`, your desktop environment's window manager, crash reporter, or a background print spooler daemon (like CUPS) panicked. It intercepted the terminal window's state or output buffer during the crash, tried to dump a diagnostic/print job, and got caught in a rendering loop—splattering a screenshot of your terminal window across dozens of pages before finally saving it as a 96.2MB file named `hono` in your home directory.

You can safely delete that digital art piece of a crash log:

Bash

```
rm ~/hono

```

And don't forget to put `#!/usr/bin/env node` at the very top of your script so it actually runs with Node.js next time instead of summoning ghostly PDFs!

# how to force bun update a global cli

To force-update a globally installed CLI package using **Bun**, use the standard update command combined with the `--latest` flag: [](https://bun.com/docs/pm/cli/update)

bash

```
bun update -g --latest

```



### 🛠️ Alternative Methods

If the tool isn't updating correctly due to range constraints or edge-case caching bugs, you can force an upgrade through these alternative methods: [](https://bun.com/docs/pm/cli/update)

* **Target a Specific Package Directly:**  
bash  
```  
bun add -g <package-name>@latest  
```  

* **Use the Interactive UI:**  
Run `bun update -g -i` to pull up a terminal menu. Use the arrow keys and `Space` to select your CLI tool, then hit `Enter` to force the upgrade. [](https://bun.com/docs/pm/cli/update)
* **The "Clean Slate" Fix:**  
If a global tool is behaving erratically or refusing to catch up to the latest version, a clean reinstall will force-overwrite the symlinks: [](https://github.com/oven-sh/bun/issues/27924)  
bash  
```  
bun remove -g <package-name>  
bun add -g <package-name>  
```  


If you are still experiencing issues, let me know:

* What is the **name of the CLI package** you are trying to update?
* Was it installed from an **npm registry** or directly from a **GitHub repository**?

I can give you a tailored workaround if there is a known bug with that specific package!

* [](https://bun.com/docs/pm/cli/update)  
Bun  
bun update | Bun Docs  
bun update (alias bun up) upgrades dependencies (direct and transitive) to the newest version allowed by ranges, --interactive (-i...
* [](https://github.com/oven-sh/bun/issues/27924)  
GitHub  
Globally installed CLIs are not working on my system #27924  
Mar 8, 2026 — This is an indication of a corrupted node\_modules directory. Please run 'bun install --force' in the project root and try it again...
* [](https://stackoverflow.com/questions/80008732/how-do-i-upgrade-a-bun-global-package-installed-from-a-github-commit-githubown)  
Stack Overflow  
How do I upgrade a Bun global package installed from a ...  
This is what worked for me: bun remove -g tdk-cli-monorepo bun add -g github:tdk-landscape/tdk-cli-core Afterwards \`which tdk\` and...

Show all