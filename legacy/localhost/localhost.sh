#!/usr/bin/env bash
set -e

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$BASE_DIR"

YAML="$BASE_DIR/apps.yaml"
RUNDIR="/run/localhost-apps"
CADDYFILE="/etc/caddy/Caddyfile"

mkdir -p "$RUNDIR"

# kill previous runs cleanly
pkill -f "parcel serve" || true

# find free port (FIXED: must check for FREE port, not occupied)
find_free_port() {
  while true; do
    PORT=$(shuf -i 2000-65000 -n 1)
    ss -ltn | grep -q ":$PORT " && continue
    echo "$PORT"
    return
  done
}

APPS=$(yq -r '.apps | keys | .[]' "$YAML")

CADDY_CONFIG=""

for app in $APPS; do
  CMD_TEMPLATE=$(yq -r ".apps.$app.command" "$YAML")

  PORT=$(find_free_port)
  echo "$PORT" > "$RUNDIR/$app.port"

  # 🔥 CORE FIX: literal replace "$port" or "$PORT"
  CMD="${CMD_TEMPLATE//\$port/$PORT}"
  CMD="${CMD//\$PORT/$PORT}"

  # run safely in shell with correct cwd
  bash -lc "cd '$BASE_DIR' && $CMD" &

  CADDY_CONFIG+="
http://$app.localhost {
    reverse_proxy localhost:$PORT
}
"
done

echo "$CADDY_CONFIG" | sudo tee "$CADDYFILE" > /dev/null
sudo systemctl reload caddy

wait
