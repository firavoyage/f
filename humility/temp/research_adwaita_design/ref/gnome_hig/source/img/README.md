# Screenshots

Most screenshots are generated using lidadwaita's screenshot generator tool (see [README](https://gitlab.gnome.org/GNOME/libadwaita/-/blob/main/doc/tools/README.md)).

Screenshots are organized as follows:

 - `/adw-screenshots` - screenshots which are generated for lidadwaita's docs, which have been copied over to the HIG
 - `/screenshots` - screenshots which have been generated for the HIG, using the lidadwaita tool
 - `/screenshot-data` - .ui files which are used to generate the content of /screenshots

## How to generate screenshots

Using the libadwaita screenshot tool requires a local build of libadwaita. This build needs to be local and not in a Builder/Flatpak sandbox. It also needs to have docs enabled as a build option. If building with JHBuild, this can be done by adding `module_mesonargs['libadwaita'] = '-Dgtk_doc=true'` to `~/.config/jhbuildrc`.

The `screenshot` tool can then be found in the build directory. You can use it as follows:

```
$ ./PATH-TO-SCREENSHOT-TOOL --image=IMAGE-NAME PATH-TO-UI-FILES OUTPUT-PATH
```

Notes:

 - `--image` is optional - without arguments the tool will generate all the images in the data directory.
 - `IMAGE-NAME` is the file name of a .ui, without the file extension.

For example, running the screenshot tool from `checkout/libadwaita/_build/doc/tools/` would look like:

```
$ ./screenshot --image=action-dialog ~/checkout/hig-www/source/img/screenshot-data ~/checkout/hig-www/source/img/screenshots
```
## Light and dark screenshots

The libadwaita tool generates light and dark variants of each screenshot, with the dark screenshot having the `*-dark.png` file ending. To ensure that the correct variant is used when the light or dark version of the site is used, the light and dark CSS styles must be applied with the following markup in the `.rst` files:

```
.. image:: /img/screenshots/boxed-lists.png
   :class: only-light
.. image:: /img/screenshots/boxed-lists-dark.png
   :class: only-dark
```
