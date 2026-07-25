type HexColor = string;

export function reveal(
  bg: HexColor,
  new_bg: HexColor,
  opacity: number
): HexColor {
  const clean_hex = (hex: string) => {
    return hex.startsWith("#") ? hex.slice(1) : hex;
  };

  const clean_bg = clean_hex(bg);
  const clean_new = clean_hex(new_bg);

  const r_mix = parseInt(clean_bg.slice(0, 2), 16);
  const g_mix = parseInt(clean_bg.slice(2, 4), 16);
  const b_mix = parseInt(clean_bg.slice(4, 6), 16);

  const r_new = parseInt(clean_new.slice(0, 2), 16);
  const g_new = parseInt(clean_new.slice(2, 4), 16);
  const b_new = parseInt(clean_new.slice(4, 6), 16);

  const calc_orig = (mix: number, new_val: number) => {
    const orig = (mix - new_val * (1 - opacity)) / opacity;
    return Math.min(255, Math.max(0, Math.round(orig)));
  };

  const r_orig = calc_orig(r_mix, r_new);
  const g_orig = calc_orig(g_mix, g_new);
  const b_orig = calc_orig(b_mix, b_new);

  const to_hex = (val: number) => val.toString(16).padStart(2, "0");

  const has_hash = bg.startsWith("#") || new_bg.startsWith("#");
  const prefix = has_hash ? "#" : "";

  return `${prefix}${to_hex(r_orig)}${to_hex(g_orig)}${to_hex(b_orig)}`;
}
