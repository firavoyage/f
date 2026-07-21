// convert hex to oklch

/**
 * Converts all 6-letter hex codes (#ffffff) in a text string to CSS oklch() format.
 * Lightness is formatted as a percentage (e.g., 62.3%).
 * 
 * @param text - The input string containing hex codes.
 * @returns The transformed string with oklch values.
 */
export function convertHexToOklchPure(text: string): string {
  // Matches exact # followed by 6 hex characters
  const hexRegex = /#([a-fA-F0-9]{6})\b/g;

  return text.replace(hexRegex, (match) => {
    // 1. Parse hex to RGB
    const r = parseInt(match.slice(1, 3), 16) / 255;
    const g = parseInt(match.slice(3, 5), 16) / 255;
    const b = parseInt(match.slice(5, 7), 16) / 255;

    // 2. Convert sRGB to linear RGB
    const toLinear = (c: number) => c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92;
    const lr = toLinear(r);
    const lg = toLinear(g);
    const lb = toLinear(b);

    // 3. Linear sRGB to LMS space
    const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
    const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
    const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

    // 4. Non-linear LMS
    const l_ = Math.cbrt(l);
    const m_ = Math.cbrt(m);
    const s_ = Math.cbrt(s);

    // 5. LMS to OKLCH components
    const L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
    const a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
    const blockB = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;

    const C = Math.hypot(a, blockB);
    let H = (Math.atan2(blockB, a) * 180) / Math.PI;
    if (H < 0) H += 360;

    // 6. Format to CSS standard with percentage Lightness
    const L_pct = (L * 100).toFixed(1);
    const C_val = C.toFixed(3);
    const H_val = Math.round(H).toString()

    return `oklch(${L_pct}% ${C_val} ${H_val})`;
  });
}
