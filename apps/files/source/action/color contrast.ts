import { calcAPCA } from 'apca-w3';
import { colorParsley } from 'colorparsley';

function getApcaScore(textColorHex, bgColorHex) {
  // Parse hex strings into standard [R, G, B, A] arrays
  const txtColor = colorParsley(textColorHex);
  const bgColor = colorParsley(bgColorHex);

  // Calculate Lightness Contrast (Lc)
  // calcAPCA( text, background )
  const score = calcAPCA(txtColor, bgColor); 
  
  return Number(score); // Returns a signed integer string or number (e.g., -66 or 74)
}

// console.log("Light text on Dark:", getApcaScore("#FFFFFF", "#1E40AF")); 
// console.log("Dark text on Light:", getApcaScore("#1E40AF", "#FFFFFF"));

/**
 * Explains what a given APCA Lc contrast score means for design use cases.
 * @param {number|string} lcScore - The raw signed or unsigned Lc contrast score.
 * @returns {string} A scannable string explaining typographic compliance.
 */
function explainApcaScore(lcScore) {
  // Convert to absolute value for tier evaluation; APCA polarity (+/-) 
  // indicates light/dark mode, but the absolute magnitude dictates compliance.
  const score = Math.abs(parseFloat(lcScore));

  if (isNaN(score)) {
    return "❌ Invalid score: Please provide a valid numerical APCA score.";
  }

  // Round to match standard APCA tracking integers
  const roundedScore = Math.round(score);

  // Match the score against standard APCA visual tiers
  if (roundedScore >= 90) {
    return `✅ Lc ${roundedScore} | Enhanced Body Text Baseline: Safe for ALL text sizes and weights, including small body copy (12px–14px) and thin/light fonts.`;
  }
  
  if (roundedScore >= 75) {
    return `✅ Lc ${roundedScore} | Standard UI Text: Ideal for standard reading text, UI labels, subheadings, and navigation elements (minimum 16px normal or 14px bold).`;
  }
  
  if (roundedScore >= 60) {
    return `⚠️ Lc ${roundedScore} | Large or Bold Text Only: Safe for headings and large UI text (minimum 24px normal or 16px bold). Too low for body copy.`;
  }
  
  if (roundedScore >= 45) {
    return `⚠️ Lc ${roundedScore} | Large Display Accents: Only safe for massive titles, subtitles, or large graphical elements (minimum 36px normal or 24px bold).`;
  }
  
  if (roundedScore >= 30) {
    return `🛑 Lc ${roundedScore} | Non-Text UI Only: Strictly forbidden for readable text. Safe only for decorative borders, dividers, or disabled interface states.`;
  }
  
  // Under 30
  return `❌ Lc ${roundedScore} | Inaccessible Contrast: Invisible or unreadable to most users. Do not use for any meaningful UI component or text.`;
}

// // --- Quick Tests ---
// console.log(explainApcaScore(-92.4)); // Negative (Light text on Dark bg)
// console.log(explainApcaScore(76));    // Positive (Dark text on Light bg)
// console.log(explainApcaScore(52));    // Mid-range header
// console.log(explainApcaScore("12"));  // Border scale

export function apca({foreground, background}) {
  if (!foreground || !background) {
    throw err('missing required args')
  } 

  const score = getApcaScore(foreground, background)

  return `foreground ${foreground} background ${background}\n\nLc ${score.toFixed(1)}\n\n${explainApcaScore(score)}`
}
