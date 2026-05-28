Drop-Down Lists
===============

Drop-down lists are used to select an item from a mutually exclusive set of options.

A drop-down list example can be found in the *Lists → Selections* demo in the GTK 4 demo app.

When to Use
-----------

Drop-down lists are typically appropriate when:

* the list of options is long
* the contents of the hidden part of the menu are obvious from its label and the one selected item (for example, a "Month" drop-down with the item "January" selected suggests what the other options will be)
* there is little available space, such as in :doc:`header bars </patterns/containers/header-bars>`

If these factors don't apply, a :doc:`radio button <radio-buttons>` might be a better choice, since radio buttons present all the available options without the need to explicitly expose them.

Guidelines
----------

* Do not use drop-down lists with fewer than three items. To offer a choice of two options, use :doc:`radio <radio-buttons>` or :ref:`toggle buttons <toggle-buttons>`.
* Label drop-down lists using :ref:`sentence capitalization <sentence-capitalization>`. Provide an access key in the label that allows the user to focus the drop-down list.
* Use :ref:`sentence capitalization <sentence-capitalization>` for drop-down list items.
* Assign an access key to every drop-down list item. Ensure each access key is unique within the enclosing window or dialog, not just within the menu.

API Reference
-------------

* `GTK 4: GtkDropDown <https://docs.gtk.org/gtk4/class.DropDown.html>`_
