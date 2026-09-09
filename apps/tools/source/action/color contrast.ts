import { calcAPCA } from 'apca-w3';
import { colorParsley } from 'colorparsley';

function getApcaScore(textColorHex, bgColorHex) {
  // Parse hex strings into standard [R, G, B, A] arrays
  const txtColor = colorParsley(textColorHex);
  const bgColor = colorParsley(bgColorHex);

  // Calculate Lightness Contrast (Lc)
  // calcAPCA( text, background )
  const score = calcAPCA(txtColor, bgColor); 
  
  return score; // Returns a signed integer string or number (e.g., -66 or 74)
}

console.log("Light text on Dark:", getApcaScore("#FFFFFF", "#1E40AF")); 
console.log("Dark text on Light:", getApcaScore("#1E40AF", "#FFFFFF"));
