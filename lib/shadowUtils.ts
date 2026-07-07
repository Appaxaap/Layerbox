import type { Shadow } from "./types";

/** Convert hex + opacity to rgba */
export function hexToRgba(hex: string, opacity: number): string {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return `rgba(0,0,0,${opacity})`;
  return `rgba(${r},${g},${b},${opacity})`;
}

/** Single shadow → CSS string */
export function shadowToCss(s: Shadow): string {
  const inset = s.inset ? "inset " : "";
  const color = hexToRgba(s.color, s.opacity);
  return `${inset}${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${color}`;
}

/** All shadows → full box-shadow CSS value */
export function shadowsToCssValue(shadows: Shadow[]): string {
  const visible = shadows.filter((s) => s.visible !== false);
  if (visible.length === 0) return "none";
  return visible.map(shadowToCss).join(",\n  ");
}

/** Full CSS rule */
export function shadowsToCssRule(shadows: Shadow[]): string {
  return `box-shadow: ${shadowsToCssValue(shadows)};`;
}

/** Tailwind arbitrary value */
export function shadowsToTailwind(shadows: Shadow[]): string {
  if (shadows.length === 0) return "shadow-none";
  const val = shadows.map(shadowToCss).join(",");
  // Tailwind arbitrary: replace spaces in rgba with underscores, wrap in brackets
  const escaped = val.replace(/\s*,\s*/g, ",").replace(/ /g, "_");
  return `shadow-[${escaped}]`;
}

/** Encode shadows to URL search params */
export function encodeShadows(shadows: Shadow[]): string {
  return encodeURIComponent(JSON.stringify(shadows));
}

/** Decode shadows from URL search params */
export function decodeShadows(str: string): Shadow[] | null {
  try {
    return JSON.parse(decodeURIComponent(str)) as Shadow[];
  } catch {
    return null;
  }
}

/** Generate a random id */
export function genId(): string {
  return Math.random().toString(36).slice(2, 9);
}
