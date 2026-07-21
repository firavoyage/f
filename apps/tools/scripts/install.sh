# (repo)/scripts/install.sh

# prerequisites: bun, cargo

# rather not have a suspicious post install. run it explicitly if you wanna contribute.

cd ../scripts/b
bun link
cd ../..

b i
cargo install typos-cli
