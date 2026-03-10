<!-- after testing, i see: changing font location can refresh chromium/electron cache. (if replaced on the original place, it will see jp as sc and sc as jp (as the index of ttc swapped).) -->

<!-- i could now use flatpak foliate. good. -->

<!-- ubuntu is good. you have to work hard. but it pays off. it's timeless. it's free, as in freedom. it's reproducible. -->

<!-- i dont know why. but adobe kaiti and eb garamond are also appeared in flatpak sandbox. maybe flatpak could recognize these userspace fonts as long as they are installed before the flatpak app installs. maybe i restarted (log out) the laptop. -->

<!-- https://chatgpt.com/c/69afedda-49a4-832c-81e3-bbda04496b09 -->

# 0

You are a calm, thoughtful human with wisdom who speaks in simple, clear English.
Address me as Fira when it feels natural.
Let your answers be insightful and warm, as if we’re sitting together and I’m seeking clarity.
Be meaningful. Don't say "Good question", "Of course", or "I'm here with you".
Leave a blank space after your answer. You do not offer next steps, or guidance.
Remember, you must not ask or invite follow ups of any kind. Don't say "If you want" or "Do you want me to do that". Stop the output before that.
Confirm with "Understand" only once. You must not say "Understand" again in any of the following messages.

---

Understand


# 1

edit.

give me the full code.

- make path const variables at top
- at the end of the script, move everything inside `/usr/share/fonts/opentype/noto/` to `~/.local/share/fonts`.

```sh
# create dirs
mkdir -p "$HOME/_/input" "$HOME/_/tmp" "$HOME/_/output"

# copy noto fonts to input
cp -a /usr/share/fonts/opentype/noto/* "$HOME/_/input/"

# process each file in input
for src in "$HOME/_/input/"*; do
  [ -f "$src" ] || continue
  base="$(basename "$src")"
  ext="${base##*.}"
  ext_lc="$(echo "$ext" | tr '[:upper:]' '[:lower:]')"

  # clear tmp directory
  rm -rf "$HOME/_/tmp"
  mkdir -p "$HOME/_/tmp"

  if [ "$ext_lc" = "ttc" ]; then
    cp "$src" "$HOME/_/tmp/font.ttc"
    cd "$HOME/_/tmp"

    # extract TTC to individual TTFs
    python3 -c "from fontTools.ttLib.ttCollection import TTCollection; [f.save(f'font_{i}.ttf') for i,f in enumerate(TTCollection('font.ttc'))]"

    sc_list=()
    other_list=()

    # read each font name, log it, and separate SC fonts
    for f in font_*.ttf; do
      [ -f "$f" ] || continue
      font_name=$(python3 -c "from fontTools.ttLib import TTFont; import sys; font=TTFont(sys.argv[1]); names=[n.string.decode('utf-16-be') if n.isUnicode() else n.string.decode('latin-1') for n in font['name'].names if n.nameID==1]; print(names[0] if names else '')" "$f")
      echo "Font file: $f, Name: $font_name"

      if echo "$font_name" | tr '[:upper:]' '[:lower:]' | grep -q 'sc'; then
        sc_list+=("$f")
      else
        other_list+=("$f")
      fi
    done

    # build ordered python list literal: sc first
    pylist=""
    for f in "${sc_list[@]}" "${other_list[@]}"; do
      pylist="$pylist,'$f'"
    done
    pylist=${pylist#,}

    # pack ordered fonts into a new TTC
    python3 -c "from fontTools.ttLib import TTFont; from fontTools.ttLib.ttCollection import TTCollection; files=[$pylist]; ttc=TTCollection(); ttc.fonts=[TTFont(f) for f in files]; ttc.save('output.ttc')"

    mv -f output.ttc "$HOME/_/output/$base"
    cd "$HOME/_/input"

    rm -rf "$HOME/_/tmp"
    mkdir -p "$HOME/_/tmp"
  else
    # copy non-TTC files unchanged
    cp -a "$src" "$HOME/_/output/$base"
  fi
done

# replace originals in system noto directory with sudo
sudo cp -a "$HOME/_/output/"* /usr/share/fonts/opentype/noto/
sudo fc-cache -f -v /usr/share/fonts/opentype/noto/

# cleanup
rm -rf "$HOME/_"
```

---

```sh
#!/bin/bash

# Define path constants
INPUT_DIR="$HOME/_/input"
TMP_DIR="$HOME/_/tmp"
OUTPUT_DIR="$HOME/_/output"
NOTO_FONT_DIR="/usr/share/fonts/opentype/noto"
LOCAL_FONT_DIR="$HOME/.local/share/fonts"

# Create directories
mkdir -p "$INPUT_DIR" "$TMP_DIR" "$OUTPUT_DIR"

# Copy Noto fonts to input
cp -a "$NOTO_FONT_DIR"/* "$INPUT_DIR/"

# Process each file in input
for src in "$INPUT_DIR/"*; do
  [ -f "$src" ] || continue
  base="$(basename "$src")"
  ext="${base##*.}"
  ext_lc="$(echo "$ext" | tr '[:upper:]' '[:lower:]')"

  # Clear tmp directory
  rm -rf "$TMP_DIR"
  mkdir -p "$TMP_DIR"

  if [ "$ext_lc" = "ttc" ]; then
    cp "$src" "$TMP_DIR/font.ttc"
    cd "$TMP_DIR"

    # Extract TTC to individual TTFs
    python3 -c "from fontTools.ttLib.ttCollection import TTCollection; [f.save(f'font_{i}.ttf') for i,f in enumerate(TTCollection('font.ttc'))]"

    sc_list=()
    other_list=()

    # Read each font name, log it, and separate SC fonts
    for f in font_*.ttf; do
      [ -f "$f" ] || continue
      font_name=$(python3 -c "from fontTools.ttLib import TTFont; import sys; font=TTFont(sys.argv[1]); names=[n.string.decode('utf-16-be') if n.isUnicode() else n.string.decode('latin-1') for n in font['name'].names if n.nameID==1]; print(names[0] if names else '')" "$f")
      echo "Font file: $f, Name: $font_name"

      if echo "$font_name" | tr '[:upper:]' '[:lower:]' | grep -q 'sc'; then
        sc_list+=("$f")
      else
        other_list+=("$f")
      fi
    done

    # Build ordered python list literal: sc first
    pylist=""
    for f in "${sc_list[@]}" "${other_list[@]}"; do
      pylist="$pylist,'$f'"
    done
    pylist=${pylist#,}

    # Pack ordered fonts into a new TTC
    python3 -c "from fontTools.ttLib import TTFont; from fontTools.ttLib.ttCollection import TTCollection; files=[$pylist]; ttc=TTCollection(); ttc.fonts=[TTFont(f) for f in files]; ttc.save('output.ttc')"

    mv -f output.ttc "$OUTPUT_DIR/$base"
    cd "$INPUT_DIR"

    rm -rf "$TMP_DIR"
    mkdir -p "$TMP_DIR"
  else
    # Copy non-TTC files unchanged
    cp -a "$src" "$OUTPUT_DIR/$base"
  fi
done

# Move fonts to local directory and update cache
mv -f "$OUTPUT_DIR/"* "$LOCAL_FONT_DIR/"
fc-cache -f -v "$LOCAL_FONT_DIR/"

# Cleanup
rm -rf "$HOME/_"
```


# 2

edit.

- all path should be put at top. work dir `"$HOME/_"`.
- after running the script, `/usr/share/fonts/opentype/noto/` should be empty.

---

```sh id="kbc30d"
#!/bin/bash

# Define path constants
WORK_DIR="$HOME/_"
INPUT_DIR="$WORK_DIR/input"
TMP_DIR="$WORK_DIR/tmp"
OUTPUT_DIR="$WORK_DIR/output"
NOTO_FONT_DIR="/usr/share/fonts/opentype/noto"
LOCAL_FONT_DIR="$HOME/.local/share/fonts"

# Create directories
mkdir -p "$INPUT_DIR" "$TMP_DIR" "$OUTPUT_DIR"

# Copy Noto fonts to input
cp -a "$NOTO_FONT_DIR"/* "$INPUT_DIR/"

# Process each file in input
for src in "$INPUT_DIR/"*; do
  [ -f "$src" ] || continue
  base="$(basename "$src")"
  ext="${base##*.}"
  ext_lc="$(echo "$ext" | tr '[:upper:]' '[:lower:]')"

  # Clear tmp directory
  rm -rf "$TMP_DIR"
  mkdir -p "$TMP_DIR"

  if [ "$ext_lc" = "ttc" ]; then
    cp "$src" "$TMP_DIR/font.ttc"
    cd "$TMP_DIR"

    # Extract TTC to individual TTFs
    python3 -c "from fontTools.ttLib.ttCollection import TTCollection; [f.save(f'font_{i}.ttf') for i,f in enumerate(TTCollection('font.ttc'))]"

    sc_list=()
    other_list=()

    # Read each font name, log it, and separate SC fonts
    for f in font_*.ttf; do
      [ -f "$f" ] || continue
      font_name=$(python3 -c "from fontTools.ttLib import TTFont; import sys; font=TTFont(sys.argv[1]); names=[n.string.decode('utf-16-be') if n.isUnicode() else n.string.decode('latin-1') for n in font['name'].names if n.nameID==1]; print(names[0] if names else '')" "$f")
      echo "Font file: $f, Name: $font_name"

      if echo "$font_name" | tr '[:upper:]' '[:lower:]' | grep -q 'sc'; then
        sc_list+=("$f")
      else
        other_list+=("$f")
      fi
    done

    # Build ordered python list literal: sc first
    pylist=""
    for f in "${sc_list[@]}" "${other_list[@]}"; do
      pylist="$pylist,'$f'"
    done
    pylist=${pylist#,}

    # Pack ordered fonts into a new TTC
    python3 -c "from fontTools.ttLib import TTFont; from fontTools.ttLib.ttCollection import TTCollection; files=[$pylist]; ttc=TTCollection(); ttc.fonts=[TTFont(f) for f in files]; ttc.save('output.ttc')"

    mv -f output.ttc "$OUTPUT_DIR/$base"
    cd "$INPUT_DIR"

    rm -rf "$TMP_DIR"
    mkdir -p "$TMP_DIR"
  else
    # Copy non-TTC files unchanged
    cp -a "$src" "$OUTPUT_DIR/$base"
  fi
done

# Move fonts to local directory and update cache
mv -f "$OUTPUT_DIR/"* "$LOCAL_FONT_DIR/"
fc-cache -f -v "$LOCAL_FONT_DIR/"

# Clear system noto directory
sudo rm -rf "$NOTO_FONT_DIR/*"

# Cleanup
rm -rf "$WORK_DIR"
```


