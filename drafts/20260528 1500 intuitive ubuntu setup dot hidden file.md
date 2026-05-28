<!-- cloning gnome libadwaita to Projects -->

# .

```sh
tee ~/.hidden > /dev/null <<EOF
snap
Android
# Projects
EOF
```

#

can .hidden contain comments

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, a </span><strong><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">.hidden</code> file or directory can absolutely contain comments</strong></mark>, assuming you are referring to configuration files, scripts, or directories that start with a dot (often called "dotfiles") in Unix-like systems such as Linux and macOS. \[[1](https://support.csdisco.com/hc/en-us/articles/360006457732-Searching-for-hidden-content)]

However, how those comments are written depends entirely on what the file actually is. The leading dot (`.`) simply tells the operating system to hide the file from standard directory listings; it does not change the file's internal code rules. \[[1](https://labex.io/tutorials/linux-how-to-include-hidden-files-in-the-directory-tree-in-linux-415596)]

How to Add Comments Based on the File Type

Because a `.hidden` file can be any text format, you must use the comment syntax specific to that format:

- **Shell Scripts & Configs (e.g., `.bashrc`, `.zshrc`, `.profile`)**\
  Use the hash symbol (`#`).\
  bash

<!---->

```
# This is a comment in my hidden bash profile
alias ll='ls -la'
```

Use code with caution.

- **Git Configurations (e.g., `.gitignore`, `.gitconfig`)**\
  Use the hash symbol (`#`).\
  text

<!---->

```
# Ignore node_modules directory
node_modules/
```

Use code with caution.

- **Web Configurations (e.g., `.htaccess`)**\
  Use the hash symbol (`#`) at the start of a line.\
  apache

<!---->

```
# Redirect all traffic to HTTPS
RewriteEngine On
```

Use code with caution.

- **Environment Files (e.g., `.env`)**\
  Use the hash symbol (`#`).\
  text

<!---->

```
# Production Database Credentials
DB_PORT=5432
```

Use code with caution.

- **VS Code Settings (e.g., `.vscode/settings.json`)**\
  While standard JSON does not support comments, Microsoft VS Code permits JavaScript-style comments (`//`) in its hidden configuration files.\
  json

<!---->

```
{
  // Force the editor to format on save
  "editor.formatOnSave": true
}
```

Use code with caution.\
\[[1](https://coding-for-reproducible-research.github.io/CfRR%5FCourses/individual%5Fmodules/introduction%5Fto%5Fversion%5Fcontrol/ignoring%5Ffiles.html), [2](https://builtin.com/articles/json-with-comments)]

One Key Exception: Strict JSON (`.json`)

If your hidden file is a strict, standard JSON file (like a `.babelrc` or a custom extension configuration), **standard JSON does not allow comments**. Adding them will cause the program reading the file to crash with a parsing error. \[[1](https://www.studyplan.dev/pro-cpp/json/q/json-comments)]

Are you working with a **specific application configuration** or a **particular programming language** within this hidden file? Let me know, and I can give you the exact syntax you need!

- [link](https://support.csdisco.com/hc/en-us/articles/360006457732-Searching-for-hidden-content)\
  Searching for hidden content - DISCO\
  May 6, 2026 — Searching within hidden content fields. Content found within comments, hidden text, invisible text, and speaker notes are extracte...\
  \
  \
  support@csdisco.com
- [link](https://labex.io/tutorials/linux-how-to-include-hidden-files-in-the-directory-tree-in-linux-415596)\
  How to include hidden files in the directory tree in Linux\
  Hidden files and directories in Linux are regular files and directories that have been marked as "hidden" by prefixing their names...\
  \
  \
  LabEx
- [link](https://coding-for-reproducible-research.github.io/CfRR%5FCourses/individual%5Fmodules/introduction%5Fto%5Fversion%5Fcontrol/ignoring%5Ffiles.html)\
  Ignoring Files — Home Page\
  Any line that begins with a hash ( # ) in a . gitignore file is treated as a comment and thus not processed by Git. Note that the ...\
  \
  \
  Coding for Reproducible Research

Show all

You said: i mean the literal .hidden file

Yes, the literal **`.hidden` text file can contain comments** using the hash symbol (`#`). \[[1](https://delightlylinux.wordpress.com/2015/06/03/hide-files-with-hidden/)]

This specific file is a plain text file used by Linux graphical file managers like [GNOME Nautilus](https://www.youtube.com/watch?v=P5GJZ3A0j3Y), MATE Caja, and Nemo to hide specific files or folders from the visual user interface without changing their names. \[[1](https://www.reddit.com/r/linuxquestions/comments/vj3y4u/hidden%5Fis%5Fvery%5Fuseful%5Fwhat%5Fother%5Fwhatever%5Fdo%5Fi/), [2](https://delightlylinux.wordpress.com/2015/06/03/hide-files-with-hidden/)]

How to use comments in `.hidden`

- **Syntax**: Place a `#` at the very beginning of a line.
- **Behavior**: The file manager completely ignores any line starting with a `#`.
- **Unhiding Files**: You can temporarily unhide a file listed in `.hidden` just by adding a `#` before its name. \[[1](https://delightlylinux.wordpress.com/2015/06/03/hide-files-with-hidden/)]

Example File Layout

If you open a `.hidden` file in a text editor, it can look like this: \[[1](https://askubuntu.com/questions/143315/how-to-hide-files-and-folders-in-nautilus)]

text

```
# This is a comment explaining why things are hidden
secret_folder

# The file manager will show the file below because it is commented out
# public_document.txt

another_hidden_file.csv
```

Use code with caution.

Supported Environments

- **Works in**: GNOME Files (Nautilus), Nemo, and Caja.
- **Does not work in**: The command line (the `ls` command ignores the `.hidden` file completely) or file managers like KDE Dolphin and XFCE Thunar. \[[1](https://delightlylinux.wordpress.com/2015/06/03/hide-files-with-hidden/)]

Are you having trouble with a specific file manager not recognizing your comments, or are you trying to automate the way you hide files?

- [link](https://www.reddit.com/r/linuxquestions/comments/vj3y4u/hidden%5Fis%5Fvery%5Fuseful%5Fwhat%5Fother%5Fwhatever%5Fdo%5Fi/)\
  .hidden is very useful, what other .whatever do I need to know ...\
  Jun 24, 2022 — I think you misunderstand OP's question. Nautilus has a little-known feature wherein if you create a file named ".hidden" and add ...\
  Reddit·r/linuxquestions
- [link](https://askubuntu.com/questions/143315/how-to-hide-files-and-folders-in-nautilus)\
  How to hide files and folders in Nautilus? - Ask Ubuntu\
  May 28, 2012 — gertvdijk. – gertvdijk. 2012-09-17 15:20:47 +00:00. Commented Sep 17, 2012 at 15:20. 3 Answers. Sorted by: 24. Tested under Nautil...\
  Ask Ubuntu
- [link](https://delightlylinux.wordpress.com/2015/06/03/hide-files-with-hidden/)\
  Hide Files with .hidden | Delightly Linux - WordPress.com\
  Jun 3, 2015 — Nautilus also recognizes the . hidden file. To view the hidden files, simply switch the file manager's view mode to show the hidde...\
  WordPress.com

#

HTTP ERROR 406

An **HTTP Error 406 "Not Acceptable"** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a client-side error indicating that the server cannot return data in a format requested by your browser or application</mark>. \[[1](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406), [2](https://www.inmotionhosting.com/support/website/error-numbers/406-not-acceptable/)]

When you visit a page, your browser sends hidden instructions called **Accept Headers** (specifying preferred languages, file types, or compression methods). If the server cannot meet those exact criteria, it rejects the request. \[[1](https://www.siteground.com/kb/406-not-acceptable/), [2](https://www.resellerclub.com/blog/how-to-fix-a-406-not-acceptable/), [3](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406), [4](https://www.inmotionhosting.com/support/website/error-numbers/406-not-acceptable/)]

Here is how to troubleshoot this error depending on whether you are a standard user or a developer.

***

If You Are a Visitor (How to Fix It)

Most 406 errors on the user side are caused by local configuration glitches, browser extensions, or incorrect URLs. \[[1](https://www.siteground.com/kb/406-not-acceptable/), [2](https://leetcode.com/discuss/post/8157634/extensionalert-can-browser-extensions-ca-uyf1/)]

- **Check the URL:** Ensure the address is typed correctly. Extra symbols or extensions at the end (like `.json` or `.xml`) can trick the server into trying to deliver an unsupported format.
- **Clear Browser Cache and Cookies:** Outdated or corrupt local data can send corrupted headers to the server. Clear your history via your browser settings and try again.
- **Disable Extensions/Add-ons:** Certain privacy extensions, ad-blockers, or translation tools modify request headers. Try opening the site in an **Incognito / Private window** to see if it loads.
- **Disconnect Your VPN:** Security servers or regional blocks can cause header mismatches. Turn off your VPN temporarily. \[[1](https://www.reddit.com/r/sysadmin/comments/wvvn8s/two%5Fspecific%5Fwebsites%5Fonly%5Fgive%5F406%5Fnot/), [2](https://docs.airbrake.io/blog/http-errors/406-not-acceptable/), [3](https://www.awardspace.com/kb/how-to-fix-406-error-not-acceptable/), [4](https://learn.microsoft.com/en-us/answers/questions/2395939/how-to-fix-a-406-open-resty-error), [5](https://discussions.apple.com/thread/256067348)]

***

If You Are a Web Developer / Site Owner (How to Fix It)

If your users are seeing this error, it is typically an issue with your hosting environment, server rules, or application code. \[[1](https://www.inmotionhosting.com/support/website/error-numbers/406-not-acceptable/), [2](https://www.siteground.com/kb/406-not-acceptable/), [3](https://www.fastcomet.com/kb/406-error-not-acceptable)]

- **Check Mod\_Security / Web Application Firewall (WAF):** This is the most common server-side culprit. Security modules like Apache’s `mod_security` will trigger a 406 error if a request looks suspicious or violates a strict rule. Check your server security logs to whitelist the false positive.
- **Verify REST API Accept Headers:** If building an API, ensure your backend supports the exact `Accept` format requested by the client. For example, if the client sends `Accept: application/json` but your code only returns `text/plain`, a 406 will occur.
- **Inspect the `.htaccess` File (Apache):** Ensure no custom `RewriteRules` or MIME type restrictions are blocking valid formats or causing infinite loops.
- **Review Plugin or Database Updates:** If using a Content Management System (CMS) like WordPress, a newly updated plugin might be altering output formats. Try disabling recent extensions to isolate the problem. \[[1](https://www.reddit.com/r/sysadmin/comments/1nw8jk8/any%5Fidea%5Fwhat%5Fcould%5Fcause%5Fa%5F406%5Ferror%5Fon%5Fa%5Fweb/), [2](https://http.dev/406), [3](https://www.fastcomet.com/kb/406-error-not-acceptable), [4](https://www.youtube.com/watch?v=kR%5FRydBPD6M), [5](https://stackoverflow.com/questions/27931387/error-406-not-acceptable-json), [6](https://www.youtube.com/watch?v=SmmK%5Fvs%5F1eI\&t=15), [7](https://docs.airbrake.io/blog/http-errors/406-not-acceptable/), [8](https://www.awardspace.com/kb/how-to-fix-406-error-not-acceptable/)]

***

Are you seeing this error on a **specific website** while browsing, or are you **developing an application/API**? Tell me the context so I can provide the exact steps to fix it.

- [link](https://www.reddit.com/r/sysadmin/comments/wvvn8s/two%5Fspecific%5Fwebsites%5Fonly%5Fgive%5F406%5Fnot/)\
  Two specific websites (only) give "406 Not Acceptable" errors ...\
  Aug 23, 2022 — Content filter is probably blocking another hyperlink attached to the page in question that the website requires in some way. I wo...\
  Reddit·r/sysadmin
- [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406)\
  406 Not Acceptable - HTTP - MDN Web Docs\
  Jul 4, 2025 — 406 Not Acceptable. The HTTP 406 Not Acceptable client error response status code indicates that the server could not produce a re...\
  MDN Web Docs
- [link](https://www.reddit.com/r/sysadmin/comments/1nw8jk8/any%5Fidea%5Fwhat%5Fcould%5Fcause%5Fa%5F406%5Ferror%5Fon%5Fa%5Fweb/)\
  Any idea what could cause a 406 error on a web server if the request ...\
  Oct 2, 2025 — \* 406 Not Acceptable. The requested resource is capable of generating only content not acceptable according to the Accept headers ...\
  Reddit·r/sysadmin

Show all