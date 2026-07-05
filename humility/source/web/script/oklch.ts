// generate color scale

type OklchScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

/**
 * Generates a visually balanced, premium UI color scale using OKLCH.
 * @param hue The base hue angle (0 to 360).
 * @param peakChroma The maximum saturation for the interactive step (typically 0.15 to 0.28).
 * @param hueShift Optional: Degrees to shift hue across the scale to mimic natural light (e.g., -5 to 5).
 */
export function generateOklchScale(hue: number, peakChroma: number = 0.22, hueShift: number = 0): OklchScale {
  const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

  // 1. Big-Tech Anchor Pins: Defining explicit, functional targets for Lightness and Chroma
  // Index matches control points along the scale from light (0) to dark (1)
  const controlPoints = [
    { t: 0.00, weight: 50, L: 0.975, C: 0.015 },  // App background / Neutral tint
    { t: 0.05, weight: 100, L: 0.945, C: 0.035 },  // Component background / Border
    { t: 0.16, weight: 200, L: 0.885, C: 0.075 },  // Subtle interactive hover
    { t: 0.27, weight: 300, L: 0.810, C: 0.130 },  // Decorative accents
    { t: 0.38, weight: 400, L: 0.715, C: 0.190 },  // Secondary actions
    { t: 0.50, weight: 500, L: 0.610, C: peakChroma }, // Primary Brand / Peak Interactive Button
    { t: 0.61, weight: 600, L: 0.510, C: peakChroma * 0.90 }, // Accessible text-safe variant
    { t: 0.72, weight: 700, L: 0.415, C: peakChroma * 0.70 }, // Text link / Dark UI
    { t: 0.83, weight: 800, L: 0.320, C: 0.065 },  // Heavy headings (Chroma drops for readability)
    { t: 0.94, weight: 900, L: 0.220, C: 0.045 },  // Main body text / Dark mode backgrounds
    { t: 1.00, weight: 950, L: 0.140, C: 0.025 },  // Extreme deep contrast text
  ];

  /**
   * Catmull-Rom Spline Interpolation Engine
   * Smoothly transitions values between control points without geometric harshness.
   */
  function interpolateSpline(t: number, key: 'L' | 'C'): number {
    // Find the segment containing the current t value
    let i = 0;
    while (i < controlPoints.length - 2 && t > controlPoints[i + 1].t) {
      i++;
    }

    const p1 = controlPoints[i];
    const p2 = controlPoints[i + 1];

    // Extrapolate imaginary boundary points for the spline edges
    const p0 = i > 0 ? controlPoints[i - 1] : { t: p1.t - 0.1, L: p1.L + 0.05, C: p1.C };
    const p3 = i < controlPoints.length - 2 ? controlPoints[i + 2] : { t: p2.t + 0.1, L: p2.L - 0.05, C: p2.C };

    // Normalize t local to the current segment boundary
    const localT = (t - p1.t) / (p2.t - p1.t);
    const t2 = localT * localT;
    const t3 = t2 * localT;

    // Catmull-Rom formula application
    const v0 = p0[key];
    const v1 = p1[key];
    const v2 = p2[key];
    const v3 = p3[key];

    return 0.5 * (
      (2 * v1) +
      (-v0 + v2) * localT +
      (2 * v0 - 5 * v1 + 4 * v2 - v3) * t2 +
      (-v0 + 3 * v1 - 3 * v2 + v3) * t3
    );
  }

  // 2. Build the output map processing each scale weight step
  const result = {} as OklchScale;

  weights.forEach((w) => {
    // Map current weight uniformly to a 0.0 - 1.0 factor matching the timeline arrays
    const minW = 50;
    const maxW = 950;
    const t = (w - minW) / (maxW - minW);

    // Compute mathematically continuous curves for Lightness and Chroma
    let L = interpolateSpline(t, 'L');
    let C = interpolateSpline(t, 'C');

    // Hard clamps ensuring mathematical anomalies stay inside valid limits
    L = Math.max(0, Math.min(1, L));
    C = Math.max(0, C);

    // 3. Natural Hue Shifting Strategy
    // Interpolates hue slightly over the timeline to breathe natural depth into scale ends
    // e.g., making light blues slightly warmer/cyan and deep blues cooler/indigo
    const currentHue = (hue + (t - 0.5) * hueShift + 360) % 360;

    const L_pct = (L * 100).toFixed(1);
    const C_val = C.toFixed(3);
    const H_val = Math.round(currentHue).toString()

    // Formatting string outputs to match standard browser native tokens
    result[w] = `oklch(${L_pct} ${C_val} ${H_val})`;
  });

  return result;
}

export interface OklchColor {
  token: number;
  lightness: number;
  chroma: number;
  hue: number;
  css: string;
}

export interface ScaleOptions {
  hue: number;        // Angle from 0 to 360 (e.g., 240 for cool slate, 0 for neutral)
  maxChroma?: number; // Peak saturation for the midtones (defaults to 0.015)
}

/**
 * Generates a big-tech compliant OKLCH gray color scale from tokens 50 to 950.
 * Uses an exponential power-law distribution curve for perceptually even contrast.
 */
export function generateOklchGrayScale(options: ScaleOptions): OklchColor[] {
  // Complete list of standard UI color tokens
  const tokens = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const hue = options.hue;
  const maxChroma = options.maxChroma ?? 0.015;

  const L_MAX = 0.99;    // Lightness boundary at shade 50 (near white)
  const L_MIN = 0.13;    // Lightness boundary at shade 950 (near black)
  const EXPONENT = 1.45; // Curve factor used by modern digital design systems

  return tokens.map((token) => {
    // 1. Normalize the token position from a 0.0 to 1.0 range
    const x = (token - 50) / 900;

    // 2. Calculate the Perceptual Lightness curve
    const lightness = L_MAX - (L_MAX - L_MIN) * Math.pow(x, EXPONENT);

    // 3. Taper Chroma toward 0 at extreme black/white ends using a sine wave.
    // This avoids neon highlights on light surfaces and muddy tones in dark mode.
    const chromaTaper = Math.sin(x * Math.PI);
    const chroma = maxChroma * chromaTaper;

    // 4. Format values cleanly for consistent CSS engine parsing
    const formattedL = (lightness * 100).toFixed(1);
    const formattedC = chroma.toFixed(3);
    const formattedH = Math.round(hue).toString();

    return {
      token,
      lightness: formattedL,
      chroma: formattedC,
      hue: formattedH,
      css: `oklch(${formattedL}% ${formattedC} ${formattedH})`
    };
  });
}
