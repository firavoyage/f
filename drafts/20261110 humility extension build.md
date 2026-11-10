# write a json array of all possibly incompatible filename characters

```
[
  "/",
  "\\",
  ":",
  "*",
  "?",
  "\"",
  "<",
  ">",
  "|",
  "\u0000",
  "\u0001",
  "\u0002",
  "\u0003",
  "\u0004",
  "\u0005",
  "\u0006",
  "\u0007",
  "\b",
  "\t",
  "\n",
  "\u000B",
  "\f",
  "\r",
  "\u000E",
  "\u000F",
  "\u0010",
  "\u0011",
  "\u0012",
  "\u0013",
  "\u0014",
  "\u0015",
  "\u0016",
  "\u0017",
  "\u0018",
  "\u0019",
  "\u001A",
  "\u001B",
  "\u001C",
  "\u001D",
  "\u001E",
  "\u001F"
]
```

Notes:

- `/` and `\` are path separators or prohibited in common filesystems.
- `:`, `*`, `?`, `"`, `<`, `>`, and `|` are prohibited in Windows filenames.
- `\u0000`–`\u001F` are ASCII control characters, generally incompatible with filenames.
- Some filesystems impose additional restrictions on trailing periods, trailing spaces, reserved names (e.g. `CON`, `NUL`, `AUX`), and Unicode characters.

This is a broad cross-platform character blacklist, not a universal guarantee of filename compatibility.