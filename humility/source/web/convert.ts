import fs from "node:fs/promises";
import { parse } from "yaml";

type TokenValue = Record<string, unknown>;
type TokenTree = Record<string, unknown>;

function resolveRef(value: string): string {
  return value.replace(/\{ref\.([^}]+)\}/g, (_, refPath) => {
    const normalizedPath = refPath.replace(/\./g, "-");
    return `var(--ref-${normalizedPath})`;
  });
}

function isTokenWithVariants(obj: TokenValue): boolean {
  return "value" in obj && Object.keys(obj).some((k) => k !== "value");
}

function flattenRefTokens(
  obj: unknown,
  prefix: string,
  result: Record<string, string>,
): void {
  if (obj === null || obj === undefined) return;
  if (typeof obj !== "object") return;
  if (Array.isArray(obj)) return;

  for (const [key, value] of Object.entries(obj)) {
    const newPrefix = prefix ? `${prefix}-${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      flattenRefTokens(value, newPrefix, result);
    } else if (typeof value === "string") {
      result[newPrefix] = value;
    }
  }
}

function flattenSysTokens(
  obj: unknown,
  prefix: string,
  result: Record<string, string | TokenValue>,
): void {
  if (obj === null || obj === undefined) return;
  if (typeof obj !== "object") return;
  if (Array.isArray(obj)) return;

  for (const [key, value] of Object.entries(obj)) {
    const newPrefix = prefix ? `${prefix}-${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const tokenValue = value as TokenValue;
      if (isTokenWithVariants(tokenValue)) {
        result[newPrefix] = tokenValue;
      } else if ("value" in tokenValue) {
        result[newPrefix] = tokenValue.value as string;
      } else {
        flattenSysTokens(value, newPrefix, result);
      }
    } else if (typeof value === "string") {
      result[newPrefix] = value;
    }
  }
}

function generateRefCss(tokens: Record<string, string>): string {
  const lines: string[] = [];
  for (const [key, value] of Object.entries(tokens)) {
    lines.push(`  --ref-${key}: ${value};`);
  }
  return lines.join("\n");
}

function generateSysCss(tokens: Record<string, string | TokenValue>): string {
  const lines: string[] = [];
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === "string") {
      const resolved = resolveRef(value);
      lines.push(`  --sys-${key}: ${resolved};`);
    } else if (typeof value === "object" && value !== null && "value" in value) {
      const resolved = resolveRef(value.value as string);
      lines.push(`  --sys-${key}: ${resolved};`);
    }
  }
  return lines.join("\n");
}

function generateVariantSysCss(
  tokens: Record<string, string | TokenValue>,
  variantKey: string,
): string {
  const lines: string[] = [];
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === "object") {
      const tokenValue = value as TokenValue;
      const variantValue = tokenValue[variantKey];
      if (variantValue) {
        const resolved = resolveRef(variantValue as string);
        lines.push(`  --sys-${key}: ${resolved};`);
      }
    }
  }
  return lines.join("\n");
}

async function main() {
  const input = await fs.readFile("/dev/stdin", "utf-8");
  const data = parse(input) as TokenTree;

  const modes = data.modes as Record<string, string[]> | null;
  const ref = data.ref as TokenTree;
  const sys = data.sys as TokenTree;

  const refTokens: Record<string, string> = {};
  flattenRefTokens(ref, "", refTokens);

  const sysTokens: Record<string, string | TokenValue> = {};
  flattenSysTokens(sys, "", sysTokens);

  const output: string[] = [];

  output.push(`:root {`);
  output.push(generateRefCss(refTokens));
  output.push(`}`);
  output.push("");

  if (!modes) {
    output.push(`:root {`);
    output.push(generateSysCss(sysTokens));
    output.push(`}`);
    await fs.writeFile("/dev/stdout", output.join("\n"));
    return;
  }

  const defaultSelectors: string[] = [":root"];
  for (const [modeName, variants] of Object.entries(modes)) {
    if (variants.length > 0) {
      defaultSelectors.push(`[data-${modeName}="${variants[0]}"]`);
    }
  }

  const defaultSys = Object.entries(sysTokens).filter(([, val]) => {
    return typeof val === "string" || (typeof val === "object" && val !== null && "value" in val);
  });
  const defaultSysTokens: Record<string, string | TokenValue> = Object.fromEntries(defaultSys);

  output.push(`${defaultSelectors.join(", ")} {`);
  output.push(generateSysCss(defaultSysTokens));
  output.push(`}`);
  output.push("");

  for (const [modeName, variants] of Object.entries(modes)) {
    for (let i = 1; i < variants.length; i++) {
      const variant = variants[i];
      const variantTokens = generateVariantSysCss(sysTokens, variant);
      if (!variantTokens) continue;
      output.push(`[data-${modeName}="${variant}"] {`);
      output.push(variantTokens);
      output.push(`}`);
      output.push("");
    }
  }

  await fs.writeFile(1, output.join("\n"));
}

main();