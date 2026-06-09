import fs from "node:fs/promises";
import yaml from "yaml";

interface TokenValue {
  value?: string;
  dark?: string;
  [key: string]: unknown;
}

type TokenTree = Record<string, unknown>;

function resolveRef(value: string): string {
  return value.replace(/\{ref\.([^}]+)\}/g, (_, refPath) => {
    const normalizedPath = refPath.replace(/\./g, "-");
    return `var(--ref-${normalizedPath})`;
  });
}

function flattenTokens(
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
      if ("value" in tokenValue || "dark" in tokenValue) {
        result[newPrefix] = tokenValue;
      } else {
        flattenTokens(value, newPrefix, result);
      }
    } else if (typeof value === "string") {
      result[newPrefix] = value;
    }
  }
}

function generateRefCss(tokens: Record<string, string | TokenValue>): string {
  const lines: string[] = [];
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === "string") {
      lines.push(`  --ref-${key}: ${value};`);
    }
  }
  return lines.join("\n");
}

function generateSysCss(tokens: Record<string, string | TokenValue>): string {
  const lines: string[] = [];
  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === "object") {
      const tokenValue = value as TokenValue;
      if (tokenValue.value) {
        const resolved = resolveRef(tokenValue.value);
        lines.push(`  --sys-${key}: ${resolved};`);
      }
    } else if (typeof value === "string") {
      const resolved = resolveRef(value);
      lines.push(`  --sys-${key}: ${resolved};`);
    }
  }
  return lines.join("\n");
}

async function main() {
  const input = await fs.readFile(0, "utf-8");
  const data = yaml.parse(input) as TokenTree;

  const modes = data.modes as {
    theme: string[];
    density?: string[];
  } | null;

  const ref = data.ref as TokenTree;
  const sys = data.sys as TokenTree;

  const refTokens: Record<string, string | TokenValue> = {};
  flattenTokens(ref, "", refTokens);

  const sysTokens: Record<string, string | TokenValue> = {};
  flattenTokens(sys, "", sysTokens);

  const themeModes = modes?.theme ?? ["light"];
  const densityModes = modes?.density ?? ["comfortable"];

  const output: string[] = [];

  output.push(`:root {`);
  output.push(generateRefCss(refTokens));
  output.push(`}`);
  output.push("");

  const defaultTheme = themeModes[0];
  const defaultDensity = densityModes[0];

  const defaultSys = Object.entries(sysTokens).filter(([, val]) => {
    if (typeof val !== "object") return true;
    const tokenVal = val as TokenValue;
    return !tokenVal.dark;
  });
  const defaultSysTokens: Record<string, string | TokenValue> = Object.fromEntries(defaultSys);

  const selectors: string[] = [":root"];
  if (themeModes.length > 0) {
    selectors.push(`[data-theme="${themeModes[0]}"]`);
  }
  if (densityModes.length > 0) {
    selectors.push(`[data-density="${densityModes[0]}"]`);
  }
  output.push(`${selectors.join(", ")} {`);
  output.push(generateSysCss(defaultSysTokens));
  output.push(`}`);
  output.push("");

  for (let i = 1; i < themeModes.length; i++) {
    const mode = themeModes[i];
    const variantSys = Object.entries(sysTokens).filter(
      ([, val]) => typeof val === "object" && "dark" in val && (val as TokenValue).dark,
    );
    const variantSysTokens: Record<string, string | TokenValue> = {};
    for (const [k, v] of variantSys) {
      const val = v as TokenValue;
      variantSysTokens[k] = val.dark!;
    }
    output.push(`[data-theme="${mode}"] {`);
    output.push(generateSysCss(variantSysTokens));
    output.push(`}`);
    output.push("");
  }

  for (let i = 1; i < densityModes.length; i++) {
    const mode = densityModes[i];
    const variantSys = Object.entries(sysTokens).filter(
      ([, val]) => typeof val === "object" && "density" in val && (val as Record<string, unknown>).density,
    );
    if (variantSys.length === 0) continue;
    output.push(`[data-density="${mode}"] {`);
    output.push(generateSysCss(Object.fromEntries(variantSys)));
    output.push(`}`);
  }

  await fs.writeFile(1, output.join("\n"));
}

await main();