<!-- shebang?! -->

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

bun rm -g $name
# rm -rf ~/.bun/install/cache
bun add -g github:firahq/$name --force --no-cache
# bun add -g $name@github:firahq/$name --force
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


