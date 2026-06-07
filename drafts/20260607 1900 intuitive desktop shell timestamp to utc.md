# .

```sh
date -d @1771231234 "+%Y%m%d %H%M%S"
```

# .

```
 ~ % time
shell  0.06s user 0.06s system 8% cpu 1.297 total
children  0.01s user 0.01s system 0% cpu 1.297 total
 ~ % time 1779525459263
zsh: command not found: 1779525459263
1779525459263  0.00s user 0.00s system 71% cpu 0.001 total
 ~ % date -d @1779525459263
Thu Dec  1 07:34:23 PM CST 58360
 ~ % date -d 1779525459263
date: invalid date ‘1779525459263’
 ~ % date -ud @1779525459263
Thu Dec  1 11:34:23 AM UTC 58360
 ~ % date -d 1779525459263
date: invalid date ‘1779525459263’
 ~ % date -d @1779525459263
Thu Dec  1 07:34:23 PM CST 58360
 ~ % date -d @1779525459263 "+%Y-%m-%d %H:%M:%S"

58360-12-01 19:34:23
 ~ % date -d @1779525459263 "+%Y-%m-%d %H:%M:%S"

58360-12-01 19:34:23
 ~ % date -d @177952545926 "+%Y-%m-%d %H:%M:%S"

7609-02-03 06:45:26
 ~ % date -d @17795254592 "+%Y-%m-%d %H:%M:%S"

2533-11-28 22:16:32
 ~ % date -d @1779525459 "+%Y-%m-%d %H:%M:%S"

2026-05-23 16:37:39
```

# timestamp to time cli on ubuntu

To convert a Unix epoch timestamp into a human-readable date and time on the Ubuntu CLI, use the native **`date` command with the `-d` flag and an `@` prefix**. \[[1](https://checkmk.com/linux-knowledge/convert-unix-timestamp-date), [2](https://www.digitalocean.com/community/questions/how-to-convert-unix-timestamps-to-human-readable-date-format-in-bash)]

1\. Convert to Local Time \[[1](https://labex.io/tutorials/java-how-to-convert-string-date-to-timestamp-with-different-time-zones-in-java-413976)]

To quickly translate a timestamp into your Ubuntu system's configured timezone: \[[1](https://linuxconfig.org/convert-timestamp-to-date), [2](https://www.interserver.net/tips/kb/how-to-set-the-timezone-on-ubuntu-24-04/), [3](https://www.youtube.com/watch?v=hMnjjsC65bE)]

bash

```
date -d @1717758000
```

Use code with caution.

_Output Example:_ `Sun Jun 7 04:20:00 PDT 2026`

2\. Convert to UTC Time \[[1](https://www.infyways.com/tools/time-converter/)]

If you need the output specifically in Coordinated Universal Time (UTC), add the **`-u` flag**: \[[1](https://unix.stackexchange.com/questions/2987/how-do-i-convert-an-epoch-timestamp-to-a-human-readable-format-on-the-cli), [2](https://unix.stackexchange.com/questions/93761/how-to-convert-number-to-time-format-in-shell-script), [3](https://linuxconfig.org/convert-timestamp-to-date)]

bash

```
date -ud @1717758000
```

Use code with caution.

_Output Example:_ `Sun Jun 7 11:20:00 UTC 2026`

3\. Custom Output Format

You can append custom format specifiers to control exactly how the date and time display: \[[1](https://askubuntu.com/questions/634173/how-to-get-date-and-time-using-command-line-interface), [2](https://www.zipy.ai/blog/convert-unix-timestamp-to-date-and-time-in-javascript)]

bash

```
date -d @1717758000 "+%Y-%m-%d %H:%M:%S"
```

Use code with caution.

_Output Example:_ `2026-06-07 04:20:00`

4\. Handling Millisecond Timestamps

If your timestamp is 13 digits long (milliseconds) instead of 10 digits (seconds), the native `date` command will throw an error. You can fix this by introducing a decimal point before the final 3 digits: \[[1](https://freetoolonline.com/guides/unix-timestamps-explained.html), [2](https://unix.stackexchange.com/questions/2987/how-do-i-convert-an-epoch-timestamp-to-a-human-readable-format-on-the-cli)]

bash

```
date -d @1455086371.603
```

Use code with caution.

5\. Alternative: Using Bash Built-ins

If you are inside a Bash shell script and want to avoid spawning an external process for performance, you can use the built-in `printf` tool (Bash 4.2+): \[[1](https://serverfault.com/questions/310098/how-to-add-a-timestamp-to-bash-script-log), [2](https://unix.stackexchange.com/questions/940/how-can-i-get-a-formatted-date-for-a-unix-timestamp-from-the-command-line)]

bash

```
printf '%(%Y-%m-%d %H:%M:%S)T\n' 1717758000
```

Use code with caution.

If you are dealing with a text file, let me know if you need help **parsing a list of timestamps inside a file** or **formatting logs on the fly**.

- [link](https://unix.stackexchange.com/questions/2987/how-do-i-convert-an-epoch-timestamp-to-a-human-readable-format-on-the-cli)\
  How do I convert an epoch timestamp to a human readable ...\
  Oct 11, 2010 — Commented Feb 10, 2016 at 8:31. 2. To display the date in UTC, add the -u option. ma11hew28. – ma11hew28. 2020-06-27 12:45:35 +00:\
  Unix & Linux Stack Exchange
- [link](https://askubuntu.com/questions/634173/how-to-get-date-and-time-using-command-line-interface)\
  How to get date and time using command line interface?\
  Jun 9, 2015 — man date will show you how to control the output to whatever format you need, if you want something other than the standard output...\
  Ask Ubuntu
- [link](https://serverfault.com/questions/310098/how-to-add-a-timestamp-to-bash-script-log)\
  How to add a timestamp to bash script log? - linux - Server Fault\
  Sep 10, 2011 — 22 Answers \* @Nils it's a trick to prevent read from trimming whitespace at the beginning and and of the line. It sets IFS (bash's...\
  Server Fault

Show all

