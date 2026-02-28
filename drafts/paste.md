```
APP="com.github.johnfactotum.Foliate"
SRC_FRAGMENT="/etc/fonts/conf.d/64-language-selector-cjk-prefer.conf"
DST_CONF="$HOME/.var/app/$APP/config/fontconfig"
DST_CONFD="$DST_CONF/conf.d"
FONTS_CONF="$DST_CONF/fonts.conf"
TS=$(date +%s)

echo "App: $APP"
echo "Source fragment: $SRC_FRAGMENT"
echo "Destination config: $DST_CONF"
echo

# Try to stop running instances (best-effort)
echo "Stopping running flatpak instances (best-effort)..."
flatpak kill "$APP" 2>/dev/null || true

# Ensure base destination exists
mkdir -p "$DST_CONF"

# If conf.d exists and is a symlink, move it aside (it may point to a nonexistent target)
if [ -L "$DST_CONFD" ]; then
  echo "Found $DST_CONFD as a symlink. Backing up and replacing."
  mv -v "$DST_CONFD" "${DST_CONFD}.symlink.bak.$TS"
fi

# If conf.d exists but is not a directory, back it up
if [ -e "$DST_CONFD" ] && [ ! -d "$DST_CONFD" ]; then
  echo "Found $DST_CONFD but it's not a directory. Backing up."
  mv -v "$DST_CONFD" "${DST_CONFD}.bak.$TS"
fi

# Create proper conf.d directory
mkdir -p "$DST_CONFD"

# Create a minimal fonts.conf which includes the local conf.d and host conf.d if present
cat > "$FONTS_CONF" <<'EOF'
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <!-- Prefer host font directories -->
  <dir>/run/host/fonts</dir>
  <dir>/run/host/usr/share/fonts</dir>
  <dir>/usr/share/fonts</dir>

  <!-- Include local conf fragments -->
  <include ignore_missing="yes">conf.d</include>

  <!-- Also include host /etc/fonts/conf.d if available inside sandbox -->
  <include ignore_missing="yes">/run/host/etc/fonts/conf.d</include>
</fontconfig>
EOF

echo "Wrote $FONTS_CONF"

# Copy the host fragment into the app conf.d using install (avoids symlink creation issues)
if [ -f "$SRC_FRAGMENT" ]; then
  install -Dm644 "$SRC_FRAGMENT" "$DST_CONFD/$(basename "$SRC_FRAGMENT")"
  echo "Installed fragment into $DST_CONFD/$(basename "$SRC_FRAGMENT")"
else
  echo "Warning: source fragment not found at $SRC_FRAGMENT — created fonts.conf and conf.d anyway."
fi

# Fix permissions so sandbox can read
chmod -R u+rwX,go+rX "$DST_CONF"

# Tell flatpak to use this config and give the sandbox read access to it.
# Also expose /etc/fonts (host) read-only so fragments that reference system paths can be read.
flatpak override --user \
  --env="FONTCONFIG_PATH=$DST_CONF" \
  --env="FONTCONFIG_FILE=$FONTS_CONF" \
  --filesystem="$DST_CONF:ro" \
  --filesystem="/etc/fonts:ro" \
  "$APP" || {
    echo "Note: flatpak override failed or returned non-zero (continuing anyway)."
  }

echo
echo "Set flatpak env:"
echo "  FONTCONFIG_PATH=$DST_CONF"
echo "  FONTCONFIG_FILE=$FONTS_CONF"
echo "Exposed filesystem: $DST_CONF (read-only) and /etc/fonts (read-only)"
echo

# Refresh font cache inside sandbox (best-effort)
echo "Refreshing font caches inside sandbox (best-effort)..."
flatpak run --command=fc-cache "$APP" >/dev/null 2>&1 || true

# Verify env and files inside sandbox and show fc-match output
echo "Sandbox verification (environment and files):"
flatpak run --command=sh "$APP" -c \
  "echo FONTCONFIG_PATH=\$FONTCONFIG_PATH; echo FONTCONFIG_FILE=\$FONTCONFIG_FILE; ls -la \"$DST_CONF\" || true; echo '----- fc-match output -----'; fc-match || true"

echo
echo "Done."
```