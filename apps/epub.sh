pdftotext -layout input.pdf output.txt && \
python3 -c "
import re
with open('output.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()
with open('output.txt', 'w', encoding='utf-8') as f:
    for line in lines:
        line = line.rstrip()
        if line.strip():
            line = re.sub(r'([\u4e00-\u9fff])\s+([\u4e00-\u9fff])', r'\1\2', line)
            line = re.sub(r'([\u4e00-\u9fff])\s+([\u4e00-\u9fff])', r'\1\2', line)
            line = re.sub(r'  +', ' ', line)
        f.write(line + '\n')
" && \
pandoc output.txt -o output.epub --toc --metadata title="Book Title"