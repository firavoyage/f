#!/bin/bash

# deprecated, use the aggressive python script instead, which is image only

INPUT="prn.pdf"
# INPUT="$1"
OUTPUT="${INPUT%.pdf}_sharp.pdf"

if [[ ! -f "$INPUT" ]]; then
    echo "File not found!"
    exit 1
fi

echo "Processing $INPUT with high-fidelity settings..."

gs -dPDFA=2 \
   -dBATCH \
   -dNOPAUSE \
   -dSAFER \
   -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/prepress \
   -dColorImageResolution=600 \
   -dGrayImageResolution=600 \
   -dMonoImageResolution=1200 \
   -dDownsampleColorImages=false \
   -dDownsampleGrayImages=false \
   -dDownsampleMonoImages=false \
   -sOutputFile="$OUTPUT" \
   -f "$INPUT"

echo "Done! High-quality file: $OUTPUT"

# #!/bin/bash

# # Usage: ./fixpdf.sh input.pdf
# INPUT="prn.pdf"
# # INPUT="$1"
# OUTPUT="${INPUT%.pdf}_fixed.pdf"

# # Check if input file exists
# if [[ ! -f "$INPUT" ]]; then
#     echo "File not found: $INPUT"
#     exit 1
# fi

# echo "Processing $INPUT..."

# # Ghostscript command to convert to PDF/A-2b
# # -dPDFA=2: Set PDF/A-2 standard
# # -dPDFACompatibilityPolicy=1: Fix non-compliant elements rather than failing
# # -sColorConversionStrategy: Ensures device-independent colors for consistency
# gs -dPDFA=2 \
#    -dBATCH \
#    -dNOPAUSE \
#    -dSAFER \
#    -sDEVICE=pdfwrite \
#    -dPDFACompatibilityPolicy=1 \
#    -sColorConversionStrategy=UseDeviceIndependentColor \
#    -sOutputFile="$OUTPUT" \
#    -f "$INPUT"

# echo "Finished! Fixed version saved as: $OUTPUT"
