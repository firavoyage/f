convert to markdown. use dollar symbol for math.

---

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

