# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys
sys.path.insert(0, os.path.abspath("./_ext"))


# -- Project information -----------------------------------------------------

project = 'GNOME Human Interface Guidelines'
copyright = '2021, Allan Day'
author = 'Allan Day'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    "hig_palette"
]
source_suffix = {
    '.rst': 'restructuredtext'
}

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []

# -- HIG Palette extension configuration -------------------------------------
hig_palette_colors_rgb = {
    "Blue 1": (153, 193, 241),
    "Blue 2": (98, 160, 234),
    "Blue 3": (53, 132, 228),
    "Blue 4": (28, 113, 216),
    "Blue 5": (26, 95, 180),
    "Green 1": (143, 240, 164),
    "Green 2": (87, 227, 137),
    "Green 3": (51, 209, 122),
    "Green 4": (46, 194, 126),
    "Green 5": (38, 162, 105),
    "Yellow 1": (249, 240, 107),
    "Yellow 2": (248, 228, 92),
    "Yellow 3": (246, 211, 45),
    "Yellow 4": (245, 194, 17),
    "Yellow 5": (229, 165, 10),
    "Orange 1": (255, 190, 111),
    "Orange 2": (255, 163, 72),
    "Orange 3": (255, 120, 0),
    "Orange 4": (230, 97, 0),
    "Orange 5": (198, 70, 0),
    "Red 1": (246, 97, 81),
    "Red 2": (237, 51, 59),
    "Red 3": (224, 27, 36),
    "Red 4": (192, 28, 40),
    "Red 5": (165, 29, 45),
    "Purple 1": (220, 138, 221),
    "Purple 2": (192, 97, 203),
    "Purple 3": (145, 65, 172),
    "Purple 4": (129, 61, 156),
    "Purple 5": (97, 53, 131),
    "Brown 1": (205, 171, 143),
    "Brown 2": (181, 131, 90),
    "Brown 3": (152, 106, 68),
    "Brown 4": (134, 94, 60),
    "Brown 5": (99, 69, 44),
    "Light 1": (255, 255, 255),
    "Light 2": (246, 245, 244),
    "Light 3": (222, 221, 218),
    "Light 4": (192, 191, 188),
    "Light 5": (154, 153, 150),
    "Dark 1": (119, 118, 123),
    "Dark 2": (94, 92, 100),
    "Dark 3": (61, 56, 70),
    "Dark 4": (36, 31, 49),
    "Dark 5": (0, 0, 0),
}

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'furo'
html_theme_options = {
    "light_css_variables": {
        "color-brand-primary": "#4a86cf",
        "color-brand-content": "#4a86cf",
    },
    "source_edit_link": "https://gitlab.gnome.org/Teams/Websites/developer.gnome.org-hig/-/edit/main/source/{filename}",
}
html_favicon = 'img/favicon.svg'
html_logo = "img/logo.svg"

# Set the explicit title of the HTML output
html_title = 'GNOME Human Interface Guidelines'

# add custom files that are stored in _static
html_css_files = ['gnome.css']

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

#footer stuff
html_show_copyright = 0
html_show_sphinx = 0
show_source = 0

