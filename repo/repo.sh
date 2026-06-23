repo_save() {
  git add .
  git commit -m '.' || true
}

repo_sync() {
  git push -f g
  git push -f a
  git push -f e
}
