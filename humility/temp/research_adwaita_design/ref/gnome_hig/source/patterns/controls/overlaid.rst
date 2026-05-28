Overlaid Controls
=================

.. image:: /img/screenshots/osd-toolbar.png
   :class: only-light
.. image:: /img/screenshots/osd-toolbar-dark.png
   :class: only-dark

Controls are typically opaque and permanently visible. However, in some cases it is desirable to have semi-transparent controls which appear over window content.

When to Use
-----------

Use overlaid controls when it is desirable to show fewer controls while the user is not interacting with a window. The classic example is of a video player, where overlaid controls result in a non-distracting viewing experience.

Overlaid controls may be inappropriate if they obscure relevant parts of the content they are placed above. Image editing controls may interfere with the ability to see their effects, for example. In these cases, controls should not be overlaid.

Guidelines
----------

* Follow established conventions for this type of control, such as left/right browse buttons in image viewers, and player controls at the bottom window edge for video.
* Controls should be displayed when the pointer is moved over the content, or when it is tapped with a touch device.
* Overlaid controls can be attached to the edge of the content/window, or can be free-floating.

API Reference
-------------

* `Libadwaita .osd style class <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/style-classes.html#osd>`_
* `GTK 4: GtkOverlay <https://docs.gtk.org/gtk4/class.Overlay.html>`_
