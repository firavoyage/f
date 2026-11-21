solve(){
  cp --update=none 'template v8.js' "$1.js"
  open "$1.js"
}

alias s='solve'
