Sliders
=======

.. image:: /img/screenshots/sliders.png
   :class: only-light
.. image:: /img/screenshots/sliders-dark.png
   :class: only-dark

A slider allows quickly selecting a value from a range. Common uses include seeking through audio or video, changing a volume level, or setting values in image editors.

When to use
-----------

Use a slider when:

* the range of values is fixed and ordered
* adjusting the value relative to its current value is more important than choosing an absolute value
* it is useful for the user to control the rate of change of the value in real time
* the number of potential values is high

If the range of values does not have a fixed maximum and/or minimum, a :doc:`spin button <spin-buttons>` can be used instead.

Guidelines
----------

* Ensure that real-time feedback is provided as the slider position is changed, in order to enable people to make adjustments. Examples of this include speaker volume or live feedback in an image editor.
* In cases where it is common to use a slider, follow placement conventions. For example, in video players, it is common to situate a horizontal seek bar along the bottom of the window. In this case, simply placing a slider in this position is enough to identify it. In cases without such conventions, use a text label or icon to identify the slider.
* In some cases, it is helpful to mark significant values along the length of the slider with text or tick marks. For example the left, right and center points on an audio balance control.
* For cases where exact values are sometimes required, a :doc:`text field <text-fields>` or :doc:`spin button <spin-buttons>` that is linked to the slider’s value can be added.

API Reference
-------------

* `GTK 4: GtkScale <https://docs.gtk.org/gtk4/class.Scale.html>`_
