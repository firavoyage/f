#!/usr/bin/env python3

"""
usage:

python3 '/home/fira/Documents/f/drafts/20260501 0300 grow print be compatible.py' 'prn.pdf'
"""

"""
Rebuild a PDF by rendering each page to an image and reassembling it.
This often makes the result more compatible with mobile printer apps.

Requires:
  pip install pymupdf reportlab pillow
"""

import argparse
import os
from pathlib import Path

import fitz  # PyMuPDF
from PIL import Image
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas


def rebuild_pdf(input_pdf, output_pdf, images_dir, dpi):
    input_pdf = Path(input_pdf)
    output_pdf = Path(output_pdf)
    images_dir = Path(images_dir)

    images_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(input_pdf)

    image_paths = []

    zoom = dpi / 72.0
    matrix = fitz.Matrix(zoom, zoom)

    for i, page in enumerate(doc, start=1):
        pix = page.get_pixmap(matrix=matrix, alpha=False)
        img_path = images_dir / f"page_{i:04d}.png"
        pix.save(img_path)
        image_paths.append(img_path)

    doc.close()

    c = canvas.Canvas(str(output_pdf))

    for img_path in image_paths:
        with Image.open(img_path) as img:
            width_px, height_px = img.size
            width_pt = width_px * 72 / dpi
            height_pt = height_px * 72 / dpi

            c.setPageSize((width_pt, height_pt))
            c.drawImage(str(img_path), 0, 0, width=width_pt, height=height_pt)
            c.showPage()

    c.save()


def main():
    parser = argparse.ArgumentParser(description="Rebuild a PDF into a more printer-friendly version.")
    parser.add_argument("input", help="Input PDF file")
    parser.add_argument("-o", "--output", default="prn_compatible.pdf", help="Output PDF file")
    parser.add_argument("-i", "--images", default="images", help="Directory to store rendered images")
    parser.add_argument("--dpi", type=int, default=300, help="Render DPI (default: 300)")

    args = parser.parse_args()

    rebuild_pdf(args.input, args.output, args.images, args.dpi)


if __name__ == "__main__":
    main()