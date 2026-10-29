revise it.

find and replace "$port" directly. (now i use lowercase)

```
#!/usr/bin/env bash
set -e

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$BASE_DIR"

YAML="$BASE_DIR/apps.yaml"
RUNDIR="/run/localhost-apps"
CADDYFILE="/etc/caddy/Caddyfile"

mkdir -p "$RUNDIR"

pkill -f "parcel serve" || true

# find free port
find_free_port() {
  while true; do
    PORT=$(shuf -i 2000-65000 -n 1)
    ss -ltn | grep -q ":$PORT " || continue
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

  export PORT

  # IMPORTANT: only inject PORT, never app path
  bash -lc "$CMD_TEMPLATE" &

  CADDY_CONFIG+="
http://$app.localhost {
    reverse_proxy localhost:$PORT
}
"
done

echo "$CADDY_CONFIG" | sudo tee "$CADDYFILE" > /dev/null
sudo systemctl reload caddy
```

---

```
 ~ % journalctl -u caddy -n 10 --no-pager
journalctl -u localhost -n 10 --no-pager

Apr 18 15:30:50 Fira caddy[874943]: {"level":"info","ts":1776497450.1336834,"logger":"admin.api","msg":"received request","method":"POST","host":"localhost:2019","uri":"/load","remote_ip":"127.0.0.1","remote_port":"36536","headers":{"Accept-Encoding":["gzip"],"Cache-Control":["must-revalidate"],"Content-Length":["251"],"Content-Type":["application/json"],"Origin":["http://localhost:2019"],"User-Agent":["Go-http-client/1.1"]}}
Apr 18 15:30:50 Fira caddy[874943]: {"level":"info","ts":1776497450.1347246,"logger":"admin","msg":"admin endpoint started","address":"localhost:2019","enforce_origin":false,"origins":["//127.0.0.1:2019","//localhost:2019","//[::1]:2019"]}
Apr 18 15:30:50 Fira caddy[874943]: {"level":"warn","ts":1776497450.1347978,"logger":"http","msg":"server is listening only on the HTTP port, so no automatic HTTPS will be applied to this server","server_name":"srv0","http_port":80}
Apr 18 15:30:50 Fira caddy[874943]: {"level":"info","ts":1776497450.134898,"logger":"http.log","msg":"server running","name":"srv0","protocols":["h1","h2","h3"]}
Apr 18 15:30:50 Fira caddy[874943]: {"level":"info","ts":1776497450.1349037,"logger":"tls.cache.maintenance","msg":"started background certificate maintenance","cache":"0xc0003202a0"}
Apr 18 15:30:50 Fira caddy[874943]: {"level":"info","ts":1776497450.1349456,"logger":"tls.cache.maintenance","msg":"stopped background certificate maintenance","cache":"0xc0007b9650"}
Apr 18 15:30:50 Fira caddy[874943]: {"level":"info","ts":1776497450.1350822,"msg":"autosaved config (load with --resume flag)","file":"/var/lib/caddy/.config/caddy/autosave.json"}
Apr 18 15:30:50 Fira caddy[874943]: {"level":"info","ts":1776497450.1351302,"logger":"admin.api","msg":"load complete"}
Apr 18 15:30:50 Fira caddy[874943]: {"level":"info","ts":1776497450.136204,"logger":"admin","msg":"stopped previous server","address":"localhost:2019"}
Apr 18 15:30:50 Fira systemd[1]: Reloaded caddy.service - Caddy.
Apr 18 15:30:47 Fira systemd[1]: localhost.service: Deactivated successfully.
Apr 18 15:30:49 Fira systemd[1]: localhost.service: Scheduled restart job, restart counter is at 243.
Apr 18 15:30:49 Fira systemd[1]: Started localhost.service - run apps an localhost.
Apr 18 15:30:50 Fira sudo[1102614]:     root : PWD=/home/fira/Documents/f/localhost ; USER=root ; COMMAND=/usr/bin/tee /etc/caddy/Caddyfile
Apr 18 15:30:50 Fira sudo[1102614]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=0)
Apr 18 15:30:50 Fira sudo[1102614]: pam_unix(sudo:session): session closed for user root
Apr 18 15:30:50 Fira sudo[1102623]:     root : PWD=/home/fira/Documents/f/localhost ; USER=root ; COMMAND=/usr/bin/systemctl reload caddy
Apr 18 15:30:50 Fira sudo[1102623]: pam_unix(sudo:session): session opened for user root(uid=0) by (uid=0)
Apr 18 15:30:50 Fira sudo[1102623]: pam_unix(sudo:session): session closed for user root
Apr 18 15:30:50 Fira systemd[1]: localhost.service: Deactivated successfully.
```

