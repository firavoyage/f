import sys
from pathlib import Path
from weasyprint import HTML, CSS

OUTPUT = Path("output.pdf")

# -------- layout config --------
# length = weighted character count
# chinese characters count as 2
# empty line counts as 100
LAYOUT_RULES = [
    {
        "max_length": 400,
        "font_size": "22pt",
        "line_height": "1.7",
        "top_offset": "40mm",
    },
    {
        "max_length": 700,
        "font_size": "18pt",
        "line_height": "1.7",
        "top_offset": "35mm",
    },
    {
        "max_length": 1200,
        "font_size": "15pt",
        "line_height": "1.65",
        "top_offset": "25mm",
    },
    {
        "max_length": 2000,
        "font_size": "14pt",
        "line_height": "1.65",
        "top_offset": "0mm",
    },
    {
        "max_length": None,
        "font_size": "12pt",
        "line_height": "1.6",
        "top_offset": "0mm",
    },
]

EMPTY_LINE_WEIGHT = 70


# -------- helpers --------
def weighted_length(text: str) -> int:
    count = 0
    lines = text.splitlines()

    for line in lines:
        if line.strip() == "":
            count += EMPTY_LINE_WEIGHT
            continue

        for ch in line:
            if ord(ch) > 127:
                count += 2
            else:
                count += 1

    return count


def pick_layout(length: int) -> dict:
    for rule in LAYOUT_RULES:
        if rule["max_length"] is None or length <= rule["max_length"]:
            return rule
    return LAYOUT_RULES[-1]


# -------- read input --------
if len(sys.argv) > 1:
    raw = Path(sys.argv[1]).read_text(encoding="utf-8")
else:
    raw = sys.stdin.read()

raw = raw.strip()
sections = [s.strip() for s in raw.split("\n---\n") if s.strip()]

pages_html = []

for section in sections:
    length = weighted_length(section)
    layout = pick_layout(length)

    escaped = (
        section
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\n", "<br>")
    )

    pages_html.append(f"""
    <div class="page">
      <div class="content"
           style="
             font-size: {layout['font_size']};
             line-height: {layout['line_height']};
             padding-top: {layout['top_offset']};
           ">
        {escaped}
      </div>
    </div>
    """)

html = f"""
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<style>
@page {{
  size: A4;
  margin: 30mm;
}}

body {{
  margin: 0;
  font-family: "EB Garamond", "Adobe Kaiti Std", serif;
}}

.page {{
  page-break-after: always;
  min-height: calc(297mm - 60mm);
}}

.content {{
  width: 100%;
}}
</style>
</head>
<body>
{''.join(pages_html)}
</body>
</html>
"""

css = CSS(string="""
@font-face {
  font-family: "Adobe Kaiti Std";
  src: url("/home/fira/.local/share/fonts/fonts/Adobe Kaiti Std/Adobe Kaiti Std R.otf");
}
""")

HTML(string=html).write_pdf(OUTPUT, stylesheets=[css])