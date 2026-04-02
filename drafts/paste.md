# Set variables
URL="https://gh-proxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_amd64.deb"
FILE="clash-verge.deb"

# Download
echo "Downloading..."
wget -c -O "$FILE" "$URL"

# Install
echo "Installing..."
sudo dpkg -i "$FILE"

# Clean up
echo "Cleaning up..."
rm "$FILE"

echo "Complete."

```sh
sudo apt install -y \
fcitx5 \
fcitx5-config-qt \
fcitx5-frontend-gtk3 \
fcitx5-frontend-gtk4 \
fcitx5-frontend-qt5 \
fcitx5-frontend-qt6 \
fcitx5-chinese-addons \
fcitx5-mozc

im-config -n fcitx5

DICT_DIR="$HOME/.local/share/fcitx5/pinyin/dictionaries"
mkdir -p "$DICT_DIR"

wget -O "$DICT_DIR/zhwiki.dict" https://github.com/felixonmars/fcitx5-pinyin-zhwiki/releases/download/0.2.4/zhwiki-20220416.dict

wget -O "$DICT_DIR/pinyin.dict" https://github.com/wuhgit/CustomPinyinDictionary/releases/download/assets/CustomPinyinDictionary_Fcitx.dict

wget -O "$DICT_DIR/moegirl.dict" https://github.com/outloudvi/mw2fcitx/releases/latest/download/moegirl.dict
```