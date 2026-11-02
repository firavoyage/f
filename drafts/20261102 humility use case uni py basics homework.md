# how to convert md to pdf via pandoc on ubuntu

2:02 AM

### how to convert md to pdf via pandoc on ubuntu

To convert a Markdown (`.md`) file to a PDF using Pandoc on Ubuntu, you must **install Pandoc alongside a PDF engine** (like LaTeX) because Pandoc cannot generate PDFs natively. [](https://linux.codidact.com/posts/293018)

Here is the quick, step-by-step guide to setting it up and running the conversion.

#### Step 1: Install Pandoc and the PDF Engine

Open your terminal and run the following command to install Pandoc and a lightweight XeLaTeX engine (which handles fonts and Unicode characters beautifully): [](https://dev.to/waylonwalker/converting-markdown-to-pdf-with-pandoc-on-linux-248b)

bash

```
sudo apt update
sudo apt install pandoc texlive-xetex texlive-fonts-recommended texlive-latex-extra

```



#### Step 2: Convert Markdown to PDF

Once installed, navigate to the folder containing your Markdown file and run the following basic command: [](https://omidraha.com/en/latest/src/article/markdown-to-PDF-conversion-guide.html)

bash

```
pandoc input.md -o output.pdf --pdf-engine=xelatex

```



* Replace `input.md` with your source file name.
* Replace `output.pdf` with your desired output name. [](https://linuxconfig.org/how-to-convert-markdown-to-pdf-on-linux)

---

#### Advanced Customization Options

Pandoc allows you to format the PDF on the fly by passing flags to the command: [](https://omidraha.com/en/latest/src/article/markdown-to-PDF-conversion-guide.html)

* **Add a Table of Contents:** Add `--toc`.
* **Change Margins:** Add `-V geometry:margin=1in`.
* **Change Font Size:** Add `-V fontsize=12pt`.
* **Change Document Font:** Add `-V mainfont="DejaVu Sans"` (or any other font installed on your Ubuntu system). [](https://gist.github.com/usrbinkat/3c87a5fa67c8144fa6a02460dfae58c4)

**Example of an advanced command:**

bash

```
pandoc input.md -o output.pdf --pdf-engine=xelatex --toc -V geometry:margin=1in -V fontsize=11pt

```



#### Troubleshooting: "Pdflatex not found"

If you omit the `--pdf-engine=xelatex` flag, Pandoc will look for `pdflatex` by default. If you get an error stating it is missing, you can either explicitly use the `xelatex` flag as shown above or install the default engine using `sudo apt install texlive-latex-base`. [](https://stackoverflow.com/questions/50547622/using-pandoc-to-generate-pdf-from-markdown-with-inline-style)

Would you like help with **styling the layout using a custom CSS/LaTeX template**, or are you looking to **automate this conversion for multiple files** at once?

* [](https://dev.to/waylonwalker/converting-markdown-to-pdf-with-pandoc-on-linux-248b)  
DEV Community  
Converting markdown to pdf with pandoc on linux  
Converting markdown posts to pdf on ubuntu takes a few packages from the standard repos. texlive-latex-base … to convert markdown ...
* [](https://stackoverflow.com/questions/50547622/using-pandoc-to-generate-pdf-from-markdown-with-inline-style)  
Stack Overflow  
Using pandoc to generate PDF from Markdown with inline style  
By default, pandoc will use LaTeX to create the PDF Therefore, raw HTML will be ignored and would only have an effect if your outp...
* [](https://omidraha.com/en/latest/src/article/markdown-to-PDF-conversion-guide.html)  
omidraha.com  
Markdown to PDF Conversion Guide — Omid Raha MyStack 0.1 documentation  
Advanced Options: Add table of contents (--toc), set margins (-V geometry:margin=1in), font size (-V fontsize=11pt), main font (-V...

Show all

## can you omit pdf engine

can you omit pdf engine

2:02 AM

### can you omit pdf engine

Yes, you can **omit the `--pdf-engine` flag from the command**, but Pandoc still requires a PDF engine installed on your system to generate the file.

If you omit the flag, Pandoc will automatically look for its default engine, **`pdflatex`**.

#### 1\. The Short Command

If your system is configured correctly, you can run the simplest version of the command:

bash

```
pandoc input.md -o output.pdf

```



#### 2\. The Requirement

For this short command to work without throwing an error, you must install the standard LaTeX engine on Ubuntu first. If you haven't already, run:

bash

```
sudo apt update
sudo apt install pandoc texlive-latex-base texlive-fonts-recommended

```



#### Alternative: Avoid LaTeX Entirely (Using WeasyPrint)

If you want to omit the LaTeX engine altogether because it requires a large download, you can use **WeasyPrint** (an HTML-to-PDF engine) instead.

1. Install it via apt:  
bash  
```  
sudo apt install weasyprint  
```  

2. Convert your file (you still omit the flag, but you tell Pandoc to route through HTML):  
bash  
```  
pandoc input.md -t html -o output.pdf  
```  


Would you like to explore the **WeasyPrint method** to save disk space, or do you need help setting up **`pdflatex`** so the shortest command works flawlessly?

## how to handle cjk

how to handle cjk

2:19 AM

### how to handle cjk

By default, standard PDF engines like `pdflatex` do not recognize Unicode or **CJK (Chinese, Japanese, Korean) characters**, which results in either a compilation error or a blank PDF with missing text. [](https://pandoc.org/faqs.html)

To properly process CJK characters on Ubuntu, you must provide Pandoc with a **CJK-capable engine**, install **CJK system fonts**, and **explicitly declare the font** in your command. [](https://tex.stackexchange.com/questions/341809/pandoc-does-not-recognize-chinese-characters)

---

#### Method 1: Using LaTeX (XeLaTeX) — Recommended

XeLaTeX natively handles Unicode and system fonts flawlessly. [](https://stackoverflow.com/questions/18178084/pandoc-and-foreign-characters)

**1\. Install the tools and CJK fonts:**

bash

```
sudo apt update
sudo apt install pandoc texlive-xetex texlive-latex-extra fonts-noto-cjk

```



_(Note: `fonts-noto-cjk` installs Google's high-quality, comprehensive CJK font pack)._ [](https://medium.com/@kaige.yang0110/how-to-convert-markdown-to-pdf-in-python-c83509924e84)

**2\. Run the Pandoc command:**  
You must pass the **`-V CJKmainfont`** flag so the engine knows what font to use for your characters: [](https://stackoverflow.com/questions/18178084/pandoc-and-foreign-characters)

bash

```
pandoc input.md -o output.pdf --pdf-engine=xelatex -V CJKmainfont="Noto Sans CJK SC"

```



* _For simplified Chinese:_ `"Noto Sans CJK SC"` or `"Noto Serif CJK SC"`
* _For Japanese:_ `"Noto Sans CJK JP"`
* _For Korean:_ `"Noto Sans CJK KR"` [](https://medium.com/@kaige.yang0110/how-to-convert-markdown-to-pdf-in-python-c83509924e84)

---

#### Method 2: Using WeasyPrint (No LaTeX required)

If you want to avoid the massive disk-space footprint of a LaTeX installation, you can route the PDF compilation through HTML using **WeasyPrint**. [](https://www.youtube.com/watch?v=RW69tq7taXs)

**1\. Install WeasyPrint and fonts:**

bash

```
sudo apt update
sudo apt install pandoc weasyprint fonts-noto-cjk

```



**2\. Run the Pandoc command:**  
You don't need to specify a font variable in the command because WeasyPrint dynamically reads your Ubuntu system fonts via `fontconfig` and automatically applies fallback CJK fonts when it encounters those characters. [](https://markdowntoimage.com/blog/post/markdown-to-pdf-methods-compared)

bash

```
pandoc input.md -o output.pdf --pdf-engine=weasyprint

```



---

#### Summary Checklist for Success

1. **Did you install a CJK font?** If the engine cannot find a font file containing CJK glyphs, the characters will show up as blank squares or boxes.
2. **Did you declare `-V CJKmainfont`?** (Only required if using the LaTeX method). [](https://tex.stackexchange.com/questions/341809/pandoc-does-not-recognize-chinese-characters)

Would you like assistance in **checking what specific CJK fonts are currently installed** on your Ubuntu system, or do you want to **embed custom CSS styles** to change the font weights?

* [](https://stackoverflow.com/questions/18178084/pandoc-and-foreign-characters)  
Stack Overflow  
Pandoc and foreign characters - Stack Overflow  
It is crucial to also specify a font that contains the necessary glyphs using options like \`-V mainfont=""\` for most languages, or...
* [](https://medium.com/@kaige.yang0110/how-to-convert-markdown-to-pdf-in-python-c83509924e84)  
Medium·Kaige  
How to convert markdown to pdf in python? | by Kaige | Medium  
Noto CJK fonts (fonts-noto-cjk) for Unicode and Chinese character rendering. mainfont="Noto Serif CJK SC"\`, Run the script via pyt...
* [](https://tex.stackexchange.com/questions/341809/pandoc-does-not-recognize-chinese-characters)  
TeX - LaTeX Stack Exchange  
pandoc does not recognize Chinese characters - TeX  
specify a mainfont that contains Chinese glyphs, preferably a Unicode font in Opentype format that supports both Chinese and Engli...

Show all