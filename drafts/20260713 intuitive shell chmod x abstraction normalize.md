# . normalize 0.0

```sh
normalize(){
  local reset=$(tput sgr0)
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)
  local heading=""
  # local heading=$italic
  # local heading=$underline

  local version="normalize 0.0 (2026.07.13)"
  local help=$(cat <<- EOF | sed 's/^  //'
  Make a shell script executable

  ${bold}${heading}Usage:${reset}
    ${bold}normalize${reset} <script>    Normalize a script
    ${bold}normalize${reset} [flag]      Check version or help

  ${bold}${heading}Options:${reset}
    ${bold}-v, --version${reset}         Print version
    ${bold}-h, --help${reset}            Print help
	EOF
	)

  if test $# -eq 1; then
    if test $1 = "--help" -o $1 = "-h"; then
      echo $help
    elif test $1 = "--version" -o $1 = "-v"; then
      echo $version
    else
      chmod +x $1
    fi
  else
    echo $help
  fi
}
```

# . normalize 0.1

```sh
normalize(){
  local reset=$(tput sgr0)
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)
  local heading=""
  # local heading=$italic
  # local heading=$underline

  local version="normalize 0.1 (2026.07.13)"
  # no need to explain options or give examples i guess
  local help=$(cat <<- EOF | sed 's/^  //'
  Make a shell script executable

  ${bold}${heading}Usage:${reset} ${bold}normalize${reset} <script>

  ${bold}${heading}Options:${reset}
    ${bold}-v, --version${reset}         Print version
    ${bold}-h, --help${reset}            Print help
	EOF
	)

  if test $# -eq 1; then
    if test $1 = "--help" -o $1 = "-h"; then
      echo $help
    elif test $1 = "--version" -o $1 = "-v"; then
      echo $version
    else
      chmod +x $1
    fi
  else
    echo $help
  fi
}
```
