solve(){
  filename=$1.py
  template='template.py'

  cp --update=none $template $filename
  
  # open "$filename"
  code -g $filename:$(grep -n "  pass" $filename | tail -n 1 | cut -d: -f1):7
}

alias s='solve'