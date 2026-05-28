Tooltips
========

Tooltips can be set for any UI element. They are primarily used to convey additional information about what controls (often icon buttons) do, but can also be used to show additional information about app content.

When to Use
-----------

Controls in the header bars of primary windows should all have tooltips. Elsewhere, only use tooltips when they are really useful, either by providing information that users look for, or information that enhances the user experience. Examples of useful tooltips for app content include showing the full URL for a link, or showing information about a syntax error in a code editor.

Otherwise, try to keep tooltip usage to a minimum, since they can get in the way when inadvertently displayed, and aren't always accessible (such as when using a touch device). Don't rely on tooltips to communicate essential information.

If a tooltip is provided for one control in a container, all other controls in that container should also have tooltips.

Tooltip Text
------------

Tooltip labels should be short and written in :ref:`header capitalization <header-capitalization>`. For example:

.. list-table::
  :widths: 50 50
  :header-rows: 1

  * - Good Tooltip
    - Bad Tooltip
  * - Recently Used Documents
    - Open recently used documents
  * - Grid View
    - Switch to grid view
  * - Fullscreen
    - Show the current image in fullscreen mode

When showing tooltips for controls that already have labels, avoid repeating the control label and try to provide useful supplementary information, or rephrase the existing label. For example:

.. list-table::
  :widths: 30 70
  :header-rows: 1

  * - Button Label
    - Tooltip
  * - Open...
    - Select a File
  * - Add user...
    - Create an Account
  * - Connect
    - Open Address

Standard tooltip labels include:

.. list-table::
  :widths: 10 20 70 
  :header-rows: 1

  * - Button
    - Tooltip
    - Notes
  * - Go back
    - Back
    - 
  * - :doc:`Search </patterns/nav/search>`
    - Search
    - In some cases, it can be useful to specify the content type. For example: Search Documents.
  * - :ref:`Primary menu <primary-menus>`
    - Main Menu
    - 
  * - :ref:`Secondary menu <secondary-menus>`
    - Menu
    - Where possible, specify the item to which the menu applies. For example: Document Menu.
  * - :doc:`New tab </patterns/nav/tabs>`
    - New Tab
    - 
  * - Open bookmarks
    - Bookmarks
    - 

API Reference
-------------

* `GTK 4: GtkTooltip <https://docs.gtk.org/gtk4/class.Tooltip.html>`_
