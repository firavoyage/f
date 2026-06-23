repo_save() {
  cd ~

  cd Documents/f
  git add .
  git commit -m '.' || true
  cd ..

  cd resources
  git add .
  git commit -m '.' || true
  cd ..

  cd blogging
  git add .
  git commit -m '.' || true
  cd ..

  cd memories
  git add .
  git commit -m '.' || true
  cd ..

  cd school
  git add .
  git commit -m '.' || true
  cd ..

  cd university
  git add .
  git commit -m '.' || true
  cd ..

  cd fonts
  git add .
  git commit -m '.' || true
  cd ~
}

repo_sync() {
  # set -e  # no need to stop, rather push more, not less
  echo "Starting push..."

  cd ~

  cd Documents/f
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd resources
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd blogging
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd memories
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd school
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd university
  git push -f g
  git push -f a
  git push -f e
  cd ..

  cd fonts
  git push -f g
  git push -f e
  cd ~

  echo "Push completed successfully."
}

