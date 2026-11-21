folder

# intent

given a list of threads of title and folder, display in the hierarchy of folders, like vscode files.

you may collapse or expand a folder.

you may ignore folder hierarchy, as if they are all on root.

you may sort in a customized way, like by time (default, already sorted), by label (or reversed, i.e. z to a), or prioritize folders.

what if you nest so deep and exceed sidebar width?

you dont indent children inside a folder. you may have whitespace below a folder.

typically, on vscode, you could not scroll the file explorer sidebar horizontally, it simply indents, and it's text nowrap text ellipse if its overflows anyway. besides, it shows sticky breadcrumbs for long folders, and it doesnt collapse on click, it navigates/scrolls on top instead, and requires a second click to collapse. i may not impl it right now, or _alternatively i may have breadcrumb toggle but collapse on click anyway_.

# dsa

input

```
thread index
  title
  folder
  creation time
  is hidden?

threads
  id
  title
  folder
  creation time
  is hidden?
```

output

```
item[]: folder | file | whitespace

folder:
  type folder
  label

file:
  type file
  label
  
whitespace
  type whitespace
```

process

you filter all hidden threads (unless toggled to show).

you convert the flat representation to a hierarchy.

```
root: hierarchy

hierarchy: thread | folder -> 
  type file | folder
  # id?
  label
  creation time
  # creation time?
  children?: hierarchy
```

to achieve this, you iterate thread index, for each

you start w root (random uncategorized threads), take the folder, split folder by slash and ignore empty strings, navigate to such "children".

to navigate, on each step, you check whether such folder exists on the hierarchy, create if not, and set which as current

now you have the full hierarchy, and you flatten it to display on dom (wo indentation)

you maintain a state of expanded (or collapsed) folders, a set mathematically. 

by default, you may expand current folder (and all its parents). _you may expand all or collapse all (show only random threads)._

to flatten a hierarchy, 

you apply custom sorting, i.e. flatten to entries, and sort, ~~and convert back to obj if needed~~

and you iterate its children (entries now, well doesnt matter as they are treated the same under the hood on map fn), 

for file, you append to items directly, 

```
type: file
label: title
id: thread
```

for folder, you 

append 

```
type folder
label folder
id: full folder path
```

if expanded, append its children `append_children children dir~~prefix~~` recursively, and append whitespace

you iterate items to ignore consecutive whitespaces and get final items

on display, you map to dom directly, and attach toggle expand id for folder and set thread for threads

you may indicate cwd on new thread.

_the creation time of a folder may be the first thread inside. you may update all parent folders for each thread in linear time (folder depth is generally constant compared)._


