import { generateOklchScale } from "../oklch";

// Generate a vivid P3-capable Blue scale with a subtle warm-to-cool natural hue shift
const modernBlueScale = generateOklchScale(250, 0.25, 6);

console.log(modernBlueScale);
/* 
Outputs:
{
  50:  "oklch(0.9750 0.0150 247.00)",  // Clean, almost neutral soft tint
  100: "oklch(0.9450 0.0350 247.33)",
  500: "oklch(0.6100 0.2500 250.00)",  // High-saturation core brand blue
  900: "oklch(0.2200 0.0450 252.67)",  // Deep navy text token (low chroma for legibility)
  950: "oklch(0.1400 0.0250 253.00)"
}
*/
