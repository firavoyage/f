# how to create an image programmatically on ubuntu, i want a square filled by #222226

## how to create an image programmatically on ubuntu, i want a square filled by #222226

You can programmatically create a square image filled with `#222226` on Ubuntu <mark>using<span> </span><strong>ImageMagick</strong><span> </span>directly from the terminal or by using a<span> </span><strong>Python script with the Pillow library</strong></mark>.

Here are the two easiest ways to do it:

### Method 1: Using ImageMagick (Command Line)

ImageMagick is a powerful command-line tool built for image manipulation.

1. **Install ImageMagick** (if you don't have it yet):\
   bash

<!---->

```
sudo apt update && sudo apt install imagemagick -y
```

Use code with caution.
2\. **Run the command** to generate a 500x500 square image:\
bash

```
convert -size 500x500 xc:"#222226" square.png
```

Use code with caution.

***

### Method 2: Using Python (Pillow Library)

If you are building an application or prefer scripting, Python's `Pillow` library is the standard choice.

1. **Install Pillow**:\
   bash

<!---->

```
pip install Pillow
```

Use code with caution.
2\. **Create and run a script** (e.g., `create_image.py`):\
python

```
from PIL import Image

# Define the size (width, height) and hex color
size = (500, 500)
color = "#222226"

# Create and save the image
img = Image.new("RGB", size, color)
img.save("square.png")
```

Use code with caution.

Would you like to adjust the **dimensions (pixels)** of the square, or do you need help **batch-generating multiple images** with different colors?

## how to convert a svg

You can convert an SVG file on Ubuntu <mark>using<span> </span><strong>ImageMagick</strong><span> </span>via the terminal, or using a<span> </span><strong>Python script with the<span> </span><code dir="ltr">cairosvg</code><span> </span>library</strong></mark>.

Here are the best ways to convert an SVG to standard formats like PNG, JPEG, or PDF:

### Method 1: Using ImageMagick (Command Line)

ImageMagick is the fastest way to convert an SVG directly from your terminal.

1. **Install ImageMagick and Inkscape** (ImageMagick uses Inkscape under the hood to ensure SVGs render accurately without blurry edges):\
   bash

<!---->

```
sudo apt update && sudo apt install imagemagick inkscape -y
```

Use code with caution.
2\. **Convert the file** by specifying your input SVG and your desired output format (e.g., PNG, JPG, or PDF):

- **To PNG:**\
  bash

<!---->

```
convert -background none input.svg output.png
```

Use code with caution.\
_(Note: `-background none` preserves transparency if your SVG has a transparent background)._

- **To JPEG:**\
  bash

<!---->

```
convert input.svg output.jpg
```

Use code with caution.

- **To PDF:**\
  bash

<!---->

```
convert input.svg output.pdf
```

Use code with caution.

***

### Method 2: Using Python (CairoSVG Library)

If you are writing a script, the `cairosvg` library provides the most accurate programmatic SVG rendering in Python.

1. **Install CairoSVG**:\
   bash

<!---->

```
pip install cairosvg
```

Use code with caution.
2\. **Create and run a script** (e.g., `convert_svg.py`):\
python

```
import cairosvg

# Convert SVG to PNG
cairosvg.svg2png(url="input.svg", write_to="output.png")

# Convert SVG to PDF
cairosvg.svg2pdf(url="input.svg", write_to="output.pdf")
```

Use code with caution.

***

### Quick Tip: Batch Conversion

If you have a folder full of SVG files and want to convert them all to PNG at once using the command line, run this terminal command:

bash

```
mogrify -format png *.svg
```

Use code with caution.

What **output format** (PNG, JPEG, PDF) are you trying to get, and do you need to **resize or upscale** the image during the conversion?

## how to do it via this method

To perform the SVG conversion using the **CairoSVG (Python)** method, follow these detailed steps.

CairoSVG is highly recommended for Python workflows because it is lightweight, handles modern vector features cleanly, and doesn't require installing bulky external system software like ImageMagick. [link](https://cairosvg.org/documentation/)

### Step 1: Install CairoSVG

Open your terminal and install the library via `pip`: [link](https://cairosvg.org/documentation/)

bash

```
pip install cairosvg
```

Use code with caution.

### Step 2: Use CairoSVG in Your Pipeline

Depending on your precise requirements, pick one of the options below:

#### Option A: Basic Conversion (PNG or PDF)

Create a Python script (e.g., `convert.py`) and use the direct `svg2png` or `svg2pdf` functions: [link](https://medium.com/@nizarbabut/cairosvg-how-to-use-it-in-python-especially-svg2png-4b73cfb460ff)

python

```
import cairosvg

# Convert SVG to PNG
cairosvg.svg2png(url="input.svg", write_to="output.png")

# Convert SVG to PDF
cairosvg.svg2pdf(url="input.svg", write_to="output.pdf")
```

Use code with caution.

#### Option B: Resize or Scale during Conversion

Because SVGs are vector-based, you can scale them up or down perfectly without loss of quality by specifying a custom width, height, or scaling factor: [link](https://www.svggenie.com/blog/svg-to-jpg-convert-guide)

python

```
import cairosvg

# Scale the output image to a specific width (height scales proportionally)
cairosvg.svg2png(url="input.svg", write_to="output_large.png", output_width=1200)

# Or scale the entire image by a factor (e.g., 2x larger)
cairosvg.svg2png(url="input.svg", write_to="output_2x.png", scale=2.0)
```

Use code with caution.

#### Option C: Convert SVG to JPEG (Advanced)

Since JPEGs do not support transparency (alpha channels), you cannot convert an SVG to a JPEG directly with CairoSVG alone. You must pass CairoSVG's raw PNG bytes to **Pillow** to flatten it onto a background color: [link](https://www.svggenie.com/blog/svg-to-jpg-convert-guide)

To convert SVG to JPEG, pass CairoSVG's raw PNG output bytes through Pillow (`io.BytesIO` and `Image.open`) to flatten any transparent channels onto a solid background color before saving as JPEG. For the complete implementation code and helper function, please refer to the referenced web document. [link](https://www.svggenie.com/blog/svg-to-jpg-convert-guide)

***

#### Alternative: Using CairoSVG from the Command Line

If you prefer the terminal, CairoSVG also includes a built-in command-line interface for direct conversions and quick resizing: [link](https://cairosvg.org/)

bash

```
# Convert SVG to PNG
cairosvg input.svg -o output.png

# Convert SVG to PNG with a locked width of 800px
cairosvg input.svg -o output_800.png -W 800
```

Use code with caution.

Are you running this script as part of a **larger automation script**, or do you need to handle **multiple SVG files in a directory** all at once?

- [link](https://cairosvg.org/documentation/)\
  CairoSVG\
  Documentation - CairoSVG\
  Available via command-line interface with options for DPI, width, height, scale, and unsafe parsing, or as a Python module … funct...
- [link](https://www.svggenie.com/blog/svg-to-jpg-convert-guide)\
  SVG Genie\
  How to Convert SVG to JPG: The Complete Guide (2026)\
  For Python pipelines, the cleanest approach combines CairoSVG (which renders SVG to PNG) with Pillow (which converts PNG to JPG wi...
- [link](https://cairosvg.org/)\
  CairoSVG\
  CairoSVG\
  CairoSVG is an LGPLv3-licensed SVG 1.1 converter. Converts SVG files to PNG, PDF, PS, and SVG formats. a command-line interface in...

Show all

## how to create an image programmatically on ubuntu, i want a square filled by #222226, via svg method

To create this image programmatically using the **SVG method** on Ubuntu, you can <mark>combine Python's string formatting to generate the SVG code and<span> </span><strong>CairoSVG</strong><span> </span>to render it into a pixel-perfect PNG image</mark>.

Here is the step-by-step implementation:

### Step 1: Install CairoSVG

Open your terminal and install CairoSVG if you haven't already:

bash

```
pip install cairosvg
```

Use code with caution.

### Step 2: Create and Run the Python Script

Create a new file named `create_square.py` and paste the following code. This script builds the SVG XML code natively using Python strings and converts it directly into a PNG.

python

```
import cairosvg

# 1. Define image properties
width = 500
height = 500
hex_color = "#222226"

# 2. Write the SVG XML template string
svg_code = f"""
<svg width="{width}" height="{height}" xmlns="http://w3.org">
    <rect width="100%" height="100%" fill="{hex_color}" />
</svg>
"""

# 3. Convert the SVG string directly into a PNG image file
cairosvg.svg2png(bytestring=svg_code.encode('utf-8'), write_to="square.png")

print("Successfully generated square.png using CairoSVG!")
```

Use code with caution.

### Optional: Bash Alternative

If you prefer to generate it entirely inside your Ubuntu terminal without writing a standalone script file, you can pass the raw string directly into the CairoSVG command-line tool using `echo`:

bash

```
echo '<svg width="500" height="500" xmlns="http://w3.org"><rect width="100%" height="100%" fill="#222226" /></svg>' | cairosvg /dev/stdin -o square.png
```

Use code with caution.

Would you like to add other vector shapes (like a **centered circle** or **custom text**) into this SVG template before converting it?

