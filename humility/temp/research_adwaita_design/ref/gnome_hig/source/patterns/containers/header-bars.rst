Header Bars
===========

.. image:: /img/adw-screenshots/header-bar.png
   :class: only-light
.. image:: /img/adw-screenshots/header-bar-dark.png
   :class: only-dark

Header bars are a standard element that span the top of windows. They allow windows to be dragged, are the site for window management features, and contain app controls.

Header bars often include:

* :doc:`Buttons </patterns/controls/buttons>` for the main user actions, such as *new*, *add*, *open* and *back*. These are placed at the start of the header bar (on the left in left-to-right locales).
* A window heading, which is placed in the center (sometimes this is replaced with a :doc:`view switcher </patterns/nav/view-switchers>`.)
* :doc:`Menus </patterns/controls/menus>`, which are typically placed at the end.

Guidelines
----------

* Arrange controls within the header bar according to the three alignment points — left, center and right.
* Header bars should only contain a small number of controls. This helps people to understand the primary functionality provided by the window, and ensures that the window can be resized to narrow widths.
* The content of header bars can — and should — update along with view or mode changes, so that different controls are shown depending on the content of the window. This ensures that header bar controls are always relevant to the current context.
* Always ensure that there is some blank space in the header bar to allow it to be dragged.
* Primary window header bar controls should all have :doc:`tooltips </patterns/feedback/tooltips>`.

.. _header-bar-buttons:

Button Style
------------

.. image:: /img/screenshots/header-bar-buttons.png

As far as possible, header bar buttons should appear without a visible background or border. This style is automatically applied to types of button where it is known to work effectively, including buttons with an icon only, buttons with an icon and label, and split buttons.

Types of buttons which don't automatically have their appearance adjusted when in a header bar include buttons with:

* a text label only;
* :ref:`the suggested and destructive action styles <button-styles>`;
* the linked style.

These button types should generally be avoided for primary window header bars, since it leads to a complex and inconsistent visual appearance. To achieve this, icons can be added to label-only buttons, and spacing can be used instead of the linked style (see below). Note that these guideline do not apply to :ref:`action dialogs <action-dialogs>`, which can safely retain their label-only buttons.

For more information, see the `toolbar style class documentation <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/style-classes.html#toolbars>`_.

Button Grouping
~~~~~~~~~~~~~~~

Buttons can be grouped within a header bar, in order to communicate a functional relationship between them. This is most common with pairs of interconnected buttons, such as the back/forward buttons in a browser.

Button grouping can be achieved by adding spacing between sets of buttons. This can be implemented with separators which have the `spacer style class <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/style-classes.html#spacers>`_. Using spacing in this way is recommended as an alternative to using linked buttons, which don't have their background removed when in a header bar.

`Split buttons <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/class.SplitButton.html>`_, which incorporate a single button and connected dropdown, are another way to group buttons inside a header bar while ensuring a consistent appearance.

API Reference
-------------
* `Libadwaita: AdwHeaderBar <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/class.HeaderBar.html>`_
* `GTK 4: GtkHeaderBar <https://docs.gtk.org/gtk4/class.HeaderBar.html>`_
