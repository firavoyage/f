riptmux(){
  local reset=$(tput sgr0)
  
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)

  local black=$(tput setaf 0)
  local red=$(tput setaf 1)
  local green=$(tput setaf 2)
  local yellow=$(tput setaf 3)
  local blue=$(tput setaf 4)
  local magenta=$(tput setaf 5)
  local cyan=$(tput setaf 6)
  local white=$(tput setaf 7)
  
  local bright_black=$(tput setaf 8)
  local bright_red=$(tput setaf 9)
  local bright_green=$(tput setaf 10)
  local bright_yellow=$(tput setaf 11)
  local bright_blue=$(tput setaf 12)
  local bright_magenta=$(tput setaf 13)
  local bright_cyan=$(tput setaf 14)
  local bright_white=$(tput setaf 15)

  local heading="$bold$bright_green"
  local cmd="$bold$bright_cyan" # command or flag
  local arg="$cyan" # argument

  local version="tmux 0.3 (2026.07.21)"
  local help=$(cat <<- EOF | sed 's/^  //'
  Run and manage background daemons

  ${heading}Usage:${reset} 
    ${cmd}tmux${reset}                  Start a new terminal
    ${cmd}tmux${reset} ${arg}<name>${reset}           Start a new named terminal
    ${cmd}tmux${reset} ${arg}<command>${reset}        Perform an action
    ${cmd}tmux${reset} ${arg}[flag]${reset}           Check version or help

  ${heading}Commands:${reset}
    ${cmd}ls${reset}                    List all sessions
    ${cmd}a${reset}                     Back to the last session
    ${cmd}a${reset} ${arg}<name>${reset}              Back to a named session
    ${cmd}clear${reset}                 Clear inactive sessions of last command finished
    ${cmd}kill${reset} ${arg}<name>${reset}           Kill a session
    ${cmd}rename${reset} ${arg}<old>${reset} ${arg}<new>${reset}    Rename a session

  ${heading}Options:${reset}
    ${cmd}-v${reset}, ${cmd}--version${reset}         Print version
    ${cmd}-h${reset}, ${cmd}--help${reset}            Print help

  Use ctrl+b d to detach inside terminals, exit to close and remove the session
	EOF
	)

  if test $# -eq 0; then
    command tmux
  elif test $# -eq 1; then
    if test $1 = "ls"; then
      command tmux ls
    elif test $1 = "a"; then
      command tmux a
    elif test $1 = "clear"; then
      tmux_clear
    elif test $1 = "--help" -o $1 = "-h"; then
      echo $help
    elif test $1 = "--version" -o $1 = "-v"; then
      echo $version
    else
      # named
      command tmux new -s $1
    fi
  elif test $# -eq 2 -a $1 = "a"; then
    command tmux a -t $2
  elif test $# -eq 2 -a $1 = "kill"; then
    tmux_kill $2
  elif test $# -eq 3 -a $1 = "rename"; then
    tmux_rename $2 $3
  else
    echo $help
    # echo "no arg to tmux, one arg to have a named tmux session"
  fi
}