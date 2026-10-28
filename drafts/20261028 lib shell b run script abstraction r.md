# .

```sh
run_script(){
  if test $# -eq 0; then
    command r
  elif test $# -eq 1; then
    script=$1
    b run $script
  fi
}

alias r='run_script'
```

# what is shell builtin command r

The shell builtin command **`r`** is used to **re-run the previous command** or a specific command from your command history.

It is a built-in feature available in shells like **`zsh`** and **`ksh`** (in `bash`, `r` is not a default standalone command, though `fc -s` achieves the same purpose). [](https://superuser.com/questions/1467444/what-is-the-zsh-builtin-r-command-for)

### How `r` Works

By default, typing `r` on its own repeats the absolute last command you executed. You can also pass arguments to target specific commands or modify them on the fly:

* **Repeat the last command:**  
bash  
```  
r  
```  

* **Repeat the last command that started with a specific letter/word:**  
bash  
```  
r vim  
```  
  
_(This will search your history for the most recent command starting with "vim" and execute it again.)_
* **Repeat the last command but replace a word:**  
bash  
```  
r old=new  
```  
  
_(For example, if your last command was `cat file1.txt`, running `r file1=file2` will automatically run `cat file2.txt`.)_

### Relationship to `fc` and History Expansions

In many shells, `r` is actually just a pre-configured **alias or builtin equivalent to `fc -s`** (the "fix command" utility). It serves as a simpler, type-friendly alternative to the standard `csh` history expansion shortcut **`!!`**. [](https://superuser.com/questions/1467444/what-is-the-zsh-builtin-r-command-for)

Are you using **zsh**, **bash**, or **ksh**? I can give you the exact equivalent shortcuts or configuration tweaks for your specific terminal.

* [](https://superuser.com/questions/1467444/what-is-the-zsh-builtin-r-command-for)  
Super User  
What is the zsh builtin \`r\` command for?  
r and ! are parsed differently, as ! is a reserved word but r only a (builtin) command. just boils down to personal preferences or...


