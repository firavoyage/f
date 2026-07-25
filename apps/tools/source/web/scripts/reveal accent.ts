type hex_color = string;

export function reveal(
  bg: hex_color,
  new_bg: hex_color,
  opacity: number
): hex_color | null {
  function parse_hex(hex: hex_color): { r: number; g: number; b: number } {
    const clean_hex = hex.replace("#", "");
    const num = parseInt(clean_hex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  }

  const background = parse_hex(bg);
  const target = parse_hex(new_bg);

  for (let r = 0; r <= 255; r++) {
    const r_match = Math.round(r * opacity + background.r * (1 - opacity)) === target.r;
    if (!r_match) continue;

    for (let g = 0; g <= 255; g++) {
      const g_match = Math.round(g * opacity + background.g * (1 - opacity)) === target.g;
      if (!g_match) continue;

      for (let b = 0; b <= 255; b++) {
        const b_match = Math.round(b * opacity + background.b * (1 - opacity)) === target.b;
        
        if (b_match) {
          const hex_str = ((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16)
            .slice(1);
          return `#${hex_str}`;
        }
      }
    }
  }

  return null;
}
