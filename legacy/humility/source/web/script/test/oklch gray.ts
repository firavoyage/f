import { generateOklchGrayScale } from "../oklch";

// Generate a clean, cool Slate Gray scale (Hue 240)
const slateScale = generateOklchGrayScale({ hue: 240, maxChroma: 0.015 });

// Generate a perfectly flat, dead-neutral gray scale
const pureGrayScale = generateOklchGrayScale({ hue: 0, maxChroma: 0 });

// log(pureGrayScale)

for (const step of pureGrayScale) {
  log(`${step.token}: ${step.css}`)
}
