# !/usr/bin/env zsh
# set -euo pipefail

# Usage: ROOT_PASSWORD=... ./setup_vps.zsh <server_ip> <ssh_name>

if [[ $# -ne 2 || -z "${ROOT_PASSWORD:-}" ]]; then
  print -u2 "Usage: ROOT_PASSWORD=... $0 <server_ip> <ssh_name>"
  exit 1
fi

server_ip="$1"
ssh_name="$2"
key_path="$HOME/.ssh/id_ed25519"
ssh_config="$HOME/.ssh/config"

if ! command -v sshpass >/dev/null; then
  print -u2 "Please install sshpass: sudo apt-get install sshpass"
  exit 1
fi

if [[ ! "$ssh_name" =~ '^[a-zA-Z0-9_-]+$' ]]; then
  print -u2 "SSH name must contain only letters, numbers, _ or -"
  exit 1
fi

# Create an SSH key if one does not exist.
mkdir -p "$HOME/.ssh"
chmod 700 "$HOME/.ssh"

if [[ ! -f "$key_path" ]]; then
  ssh-keygen -q -t ed25519 -N "" -f "$key_path"
fi

# Install the public key on the VPS using the root password.
export SSHPASS="$ROOT_PASSWORD"

sshpass -e ssh-copy-id \
  -i "$key_path.pub" \
  -o StrictHostKeyChecking=accept-new \
  "root@$server_ip"

unset SSHPASS
unset ROOT_PASSWORD

# Verify key-based SSH access.
ssh -i "$key_path" \
  -o IdentitiesOnly=yes \
  -o BatchMode=yes \
  "root@$server_ip" true

# Add a convenient SSH alias.
touch "$ssh_config"
chmod 600 "$ssh_config"

if ! grep -Eq "^Host[[:space:]]+$ssh_name([[:space:]]|$)" "$ssh_config"; then
  cat >> "$ssh_config" <<EOF

Host $ssh_name
  HostName $server_ip
  User root
  IdentityFile $key_path
  IdentitiesOnly yes
  ServerAliveInterval 30
EOF
fi

# Update and configure the Debian VPS.
ssh "$ssh_name" 'bash -s' <<'REMOTE'
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

apt-get update
apt-get -y upgrade
apt-get install -y ufw fail2ban curl git vim-tiny

ufw allow OpenSSH
ufw --force enable

systemctl enable --now fail2ban
REMOTE

print ""
print "VPS setup complete."
print "Connect using: ssh $ssh_name"