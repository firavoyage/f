<!-- inconsistency. accidentally, i found sometimes i use tee, sometimes cat. generally tee is better, as it supports both sudo and not, at the cost of dev null boilerplate. but i will keep them for now. -->

how to enable ctrl v in ghostty on ubuntu, instead of ctrl shift v

To enable `Ctrl+V` for pasting in Ghostty on Ubuntu, you must modify your configuration file to rebind the keys, as terminals traditionally reserve `Ctrl+V` for "quoted-insert" or literal character input. \[[1](https://ghostty.org/docs/config/keybind), [2](https://askubuntu.com/questions/1396132/when-i-paste-in-the-terminal-sometimes-the-contents-are-prefixed-with-the-charac)]

1\. Locate or Create Your Config File

On Ubuntu, Ghostty typically looks for its configuration at `~/.config/ghostty/config`. If the directory or file doesn't exist, you can create it with these terminal commands: \[[1](https://ghostty.org/docs/config), [2](https://lemmusm.medium.com/mastering-the-ghostty-config-27b7ada4256d)]

bash

```
mkdir -p ~/.config/ghostty
touch ~/.config/ghostty/config
```

Use code with caution.

2\. Add the Keybinding

Open the file in a text editor (like `nano ~/.config/ghostty/config`) and add the following line: \[[1](https://github.com/ghostty-org/ghostty/issues/3341), [2](https://ghostty.org/docs/config/keybind)]

text

```
keybind = ctrl+v=paste_from_clipboard
```

Use code with caution.

3\. Restart Ghostty

For the changes to take effect, you must restart your Ghostty session or use the `reload_config` action if you have it bound. \[[1](https://ghostty.org/docs/config/keybind/reference)]

Important Considerations

- **Conflicts**: Terminal applications (like `vim` or `nano`) often use `Ctrl+V` for their own functions (e.g., visual block mode in `vim`). Mapping this at the terminal level will prevent those applications from receiving the keypress unless you use a prefix like `unconsumed:` or `performable:` to let the key pass through under specific conditions.
- **Shell Integration**: You can also use the CLI command `ghostty +list-keybinds --default` to see a full list of existing shortcuts and ensure you aren't overwriting something else you need. \[[1](https://ghostty.org/docs/config/keybind), [2](https://github.com/ghostty-org/ghostty/discussions/2811)]

Do you also want to **remap Ctrl+C** to copy while you're at it, or are you keeping that as the standard interrupt signal?

- [link](https://ghostty.org/docs/config/keybind)\
  Keybindings - Configuration - Ghostty\
  Custom Keybindings. Associate a keypress with a specific action. Ghostty supports flexible, custom keybindings through the keybind...\
  Ghostty
- [link](https://askubuntu.com/questions/1396132/when-i-paste-in-the-terminal-sometimes-the-contents-are-prefixed-with-the-charac)\
  When I paste in the terminal sometimes the contents are prefixed ...\
  Mar 5, 2022 — 1 Answer. ... Typing Ctrl + V in a terminal doesn't paste as you might expect. By default, programs which use the Readline library...\
  Ask Ubuntu
- [link](https://github.com/ghostty-org/ghostty/discussions/2811)\
  Allow copy/paste keybindings to pass through if they did nothing\
  Jan 1, 2025 — For pasting, I'm not sure how useful this would be, because unless the clipboard is explicitly cleared, in my experience there is ...\
  GitHub

Show all
