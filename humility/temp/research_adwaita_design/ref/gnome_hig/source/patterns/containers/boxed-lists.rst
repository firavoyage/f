Boxed Lists
===========

.. image:: /img/screenshots/boxed-lists.png
   :class: only-light
.. image:: /img/screenshots/boxed-lists-dark.png
   :class: only-dark

Boxed lists are a common type of list that can contain both controls and information. Examples include app preferences or a short list of recent documents in a picker.

The boxed list pattern is appropriate for relatively small static lists. For large or dynamic lists, see :doc:`list views <list-column-views>`.

Guidelines
----------

Organize lists semantically, using the :ref:`same guidelines as menus <menu-organization>`. Multiple lists can be included in the same view, to act as different sections. If necessary, each list can be given a heading.

Boxed list rows can include purely informational content or controls. They can also act as a link to another view (rows which do this should have a ``go-next-symbolic`` arrow placed at the end).

Rows that include controls should generally just have one, and should have a maximum of two. When there is a control, clicking the list background should trigger the control. The controls should be focusable, but the
list row should not be, allowing direct switching of keyboard focus between the controls and prior/subsequent rows.

Lists have a number of style and layout considerations:

* If a list row includes multiple text elements, differentiate them using :doc:`text size, weight and color </guidelines/typography>`.
* If icons are included in a list row, they should typically have the :doc:`symbolic style </guidelines/ui-icons>`. The lower visual footprint of these icons will mean that they do not visually overload or dominate your list.
* Lists should have a minimum and maximum width, in order to support :doc:`adaptive scaling </guidelines/adaptive>`.

.. _predefined-list-rows:

Predefined List Rows
--------------------

For convenience, GNOME provides a number of predefined list rows. These can also be used as the basis of custom row designs of your own.

`Switch rows <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/class.SwitchRow.html>`_ include a title, subtitle, and a switch:

.. image:: /img/adw-screenshots/switch-row.png
   :class: only-light
.. image:: /img/adw-screenshots/switch-row-dark.png
   :class: only-dark

`Action rows <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/class.ActionRow.html>`_ include a title, subtitle, and a control:

.. image:: /img/adw-screenshots/action-row.png
   :class: only-light
.. image:: /img/adw-screenshots/action-row-dark.png
   :class: only-dark

`Combo rows <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/class.ComboRow.html>`_ include a drop down list, from which a single option can be selected:

.. image:: /img/adw-screenshots/combo-row.png
   :class: only-light
.. image:: /img/adw-screenshots/combo-row-dark.png
   :class: only-dark

`Entry rows <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/boxed-lists.html#entry-rows>`_ allow text entry and editing:

.. image:: /img/adw-screenshots/entry-row.png
   :class: only-light
.. image:: /img/adw-screenshots/entry-row-dark.png
   :class: only-dark

`Spin rows <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/class.SpinRow.html>`_ include a number which can be edited or adjusted using plus and minus buttons:

.. image:: /img/adw-screenshots/spin-row.png
   :class: only-light
.. image:: /img/adw-screenshots/spin-row-dark.png
   :class: only-dark

`Property rows <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/boxed-lists.html#property-rows>`_ include a property name and a value:

.. image:: /img/adw-screenshots/property-row.png
   :class: only-light
.. image:: /img/adw-screenshots/property-row-dark.png
   :class: only-dark

`Expander rows <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/class.ExpanderRow.html>`_ expand to reveal additional rows below:

.. image:: /img/adw-screenshots/expander-row.png
   :class: only-light
.. image:: /img/adw-screenshots/expander-row-dark.png
   :class: only-dark

Editable Lists
--------------

Design conventions exist for editable boxed lists, which allow users to add, remove and reorder rows.


* Rows can be added using an add button that is shown at the top of the list, or with an add button row, which is placed at the end of the list.
* Place a remove button at the end of each row.
* If changing list order is required:
   * Include drag handles at the beginning of the rows, to allow moving them.
   * Instead of showing a remove button at the end of each row, include a button menu, with items for "move up", "move down," and "remove" (menu items for move actions are required for accessibility purposes).

Adding Buttons
--------------

You can include actions with lists, such as add, delete, clear, or reset. Typically this is done by adding either :ref:`pill buttons <button-styles>` or button rows.

Pill buttons are used when there is a single action which requires attention or delineation from the content above. In other cases, button rows are generally used. Button rows can also be used when the button is part of the list itself, such as when adding an item to a list.

`Button rows <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/class.ButtonRow.html>`_ include a title, a start, and an end icon:

.. image:: /img/adw-screenshots/button-rows.png
   :class: only-light
.. image:: /img/adw-screenshots/button-rows-dark.png
   :class: only-dark

Button row labels should follow the standard guidance for :doc:`buttons </patterns/controls/buttons>`, including the use of :ref:`ellipses <ellipses>`. However, if the row opens a new view, then the ellipsis should be replaced by a trailing rightwards arrow.

API Reference
-------------

* `Libadwaita .boxed-list documentation <https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/boxed-lists.html>`_
* `GTK 4: GtkListBox <https://docs.gtk.org/gtk4/class.ListBox.html>`_
