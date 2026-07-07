"use client";

import { useState, useCallback } from "react";
import { Check, Copy, ChevronDown } from "lucide-react";
import { hexToRgba } from "../../lib/shadowUtils";
import { highlightCode } from "../../lib/syntaxHighlight";

type ScaleStyle = "soft" | "sharp" | "spread" | "colored";
type ScaleEntry = { name: string; value: string };

// Generate a 6-level elevation scale
function generateScale(
  color: string,
  baseOpacity: number,
  style: ScaleStyle,
): ScaleEntry[] {
  const levels = [
    { name: "xs", yMult: 1, blurMult: 2, spreadMult: 0, opMult: 0.6 },
    { name: "sm", yMult: 2, blurMult: 4, spreadMult: 0, opMult: 0.7 },
    { name: "md", yMult: 4, blurMult: 12, spreadMult: -1, opMult: 0.85 },
    { name: "lg", yMult: 8, blurMult: 24, spreadMult: -2, opMult: 1.0 },
    { name: "xl", yMult: 16, blurMult: 48, spreadMult: -4, opMult: 1.15 },
    { name: "2xl", yMult: 24, blurMult: 64, spreadMult: -6, opMult: 1.25 },
  ];

  return levels.map(({ name, yMult, blurMult, spreadMult, opMult }) => {
    const opacity = Math.min(baseOpacity * opMult, 1);
    const rgba = hexToRgba(color, opacity);

    let value: string;
    if (style === "soft") {
      const rgba2 = hexToRgba(color, opacity * 0.5);
      value = `0 ${yMult}px ${blurMult}px ${spreadMult}px ${rgba}, 0 ${Math.round(yMult * 0.4)}px ${Math.round(blurMult * 0.3)}px 0 ${rgba2}`;
    } else if (style === "sharp") {
      value = `0 ${yMult}px ${Math.round(blurMult * 0.5)}px ${spreadMult}px ${rgba}`;
    } else if (style === "spread") {
      value = `0 ${yMult}px ${blurMult}px ${Math.abs(spreadMult)}px ${rgba}`;
    } else {
      const rgba2 = hexToRgba(color, opacity * 0.4);
      const rgba3 = hexToRgba(color, opacity * 0.15);
      value = `0 ${yMult}px ${blurMult}px ${spreadMult}px ${rgba}, 0 ${Math.round(yMult * 0.3)}px ${Math.round(blurMult * 0.4)}px 0 ${rgba2}, 0 0 0 ${Math.round(yMult * 0.25)}px ${rgba3}`;
    }

    return { name, value };
  });
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
}

type ExportType = "css-vars" | "tailwind" | "scss" | "js-tokens" | "json";

export function ShadowScale({ isLight }: { isLight: boolean }) {
  const [color, setColor] = useState("#000000");
  const [intensity, setIntensity] = useState(10);
  const [style, setStyle] = useState<ScaleStyle>("soft");
  const [scale, setScale] = useState<ScaleEntry[]>(() =>
    generateScale("#000000", 0.1, "soft"),
  );
  const [exportType, setExportType] = useState<ExportType>("css-vars");
  const [copied, setCopied] = useState(false);
  const [showExport, setShowExport] = useState(false);

  const handleChange = useCallback(
    (newColor: string, newIntensity: number, newStyle: ScaleStyle) => {
      setColor(newColor);
      setIntensity(newIntensity);
      setStyle(newStyle);
      setScale(generateScale(newColor, newIntensity / 100, newStyle));
    },
    [],
  );

  function getExportCode(): string {
    switch (exportType) {
      case "css-vars":
        return `:root {\n${scale.map((e) => `  --shadow-${e.name}: ${e.value};`).join("\n")}\n}`;
      case "tailwind":
        return `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      boxShadow: {\n${scale.map((e) => `        ${e.name}: '${e.value}',`).join("\n")}\n      },\n    },\n  },\n}`;
      case "scss":
        return scale.map((e) => `$shadow-${e.name}: ${e.value};`).join("\n");
      case "js-tokens":
        return `export const shadows = {\n${scale.map((e) => `  ${e.name}: '${e.value}',`).join("\n")}\n}`;
      case "json":
        return JSON.stringify(
          Object.fromEntries(scale.map((e) => [e.name, e.value])),
          null,
          2,
        );
    }
  }

  const exportCode = getExportCode();
  const highlighted = highlightCode(exportCode);

  async function handleCopy() {
    await copyText(exportCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const STYLES: { id: ScaleStyle; label: string }[] = [
    { id: "soft", label: "Soft" },
    { id: "sharp", label: "Sharp" },
    { id: "spread", label: "Spread" },
    { id: "colored", label: "Colored" },
  ];

  const EXPORTS: { id: ExportType; label: string }[] = [
    { id: "css-vars", label: "CSS Vars" },
    { id: "tailwind", label: "Tailwind" },
    { id: "scss", label: "SCSS" },
    { id: "js-tokens", label: "JS Tokens" },
    { id: "json", label: "JSON" },
  ];

  const canvasBg = isLight ? "#F0F3F2" : "#111C1C";

  return (
    <div className="flex flex-col gap-4 sm:gap-5 h-full overflow-y-auto">
      {/* ─── Hero header ─── */}
      <div className="flex items-end justify-between">
        <div>
          <h2
            className="text-xl sm:text-2xl font-semibold leading-tight"
            style={{ color: "var(--text)" }}
          >
            Elevation Scale
          </h2>
          <p
            className="text-xs sm:text-sm mt-1"
            style={{ color: "var(--text-muted)" }}
          >
            A consistent 6-step shadow scale for your design system
          </p>
        </div>
        {/* Mini style indicator */}
        <div
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span
            className="text-[11px] font-mono font-semibold"
            style={{ color: "var(--text-muted)" }}
          >
            {color.toUpperCase()}
          </span>
          <span
            className="text-[10px] font-medium px-1.5 py-0.5 rounded-md"
            style={{
              background: "color-mix(in srgb, var(--accent) 10%, transparent)",
              color: "var(--accent)",
            }}
          >
            {intensity}%
          </span>
          <span
            className="text-[10px] font-medium"
            style={{ color: "var(--text-faint)" }}
          >
            {STYLES.find((s) => s.id === style)?.label}
          </span>
        </div>
      </div>

      {/* ─── Controls bar ─── */}
      <div
        className="rounded-2xl p-4 flex flex-wrap items-end gap-4 sm:gap-6"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Color */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-[11px] font-medium"
            style={{ color: "var(--text-faint)" }}
          >
            Color
          </label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={color}
              onChange={(e) => handleChange(e.target.value, intensity, style)}
              className="w-8 h-8 rounded-lg cursor-pointer outline-none"
              style={{
                border: "2px solid var(--border-hover)",
                background: "none",
                padding: 2,
              }}
            />
            <span
              className="text-[11px] font-mono hidden sm:inline"
              style={{ color: "var(--text-muted)" }}
            >
              {color.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Intensity */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-[140px]">
          <div className="flex justify-between items-center">
            <label
              className="text-[11px] font-medium"
              style={{ color: "var(--text-faint)" }}
            >
              Intensity
            </label>
            <span
              className="text-[11px] font-mono font-semibold"
              style={{ color: "var(--accent)" }}
            >
              {intensity}%
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={intensity}
            onChange={(e) => handleChange(color, Number(e.target.value), style)}
            className="w-full h-1.5 rounded-full outline-none cursor-pointer appearance-none"
            style={{
              accentColor: "var(--accent)",
              background: `linear-gradient(to right, var(--accent) ${(intensity / 30) * 100}%, var(--surface-raised) 0%)`,
            }}
          />
        </div>

        {/* Style pills */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-[11px] font-medium"
            style={{ color: "var(--text-faint)" }}
          >
            Style
          </label>
          <div
            className="flex items-center gap-0.5 p-0.5 rounded-xl"
            style={{
              background: "rgba(128,128,128,0.08)",
              border: "1px solid var(--border)",
            }}
          >
            {STYLES.map((s) => (
              <button
                key={s.id}
                onClick={() => handleChange(color, intensity, s.id)}
                className="px-2.5 py-1.5 text-[11px] font-semibold rounded-xl transition-all duration-150 active:scale-95"
                style={{
                  background:
                    style === s.id ? "var(--surface-raised)" : "transparent",
                  color: style === s.id ? "var(--text)" : "var(--text-muted)",
                  border:
                    style === s.id
                      ? "1px solid var(--border-hover)"
                      : "1px solid transparent",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Elevation staircase preview ─── */}
      <div
        className="rounded-2xl p-5 sm:p-6"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="flex flex-col gap-4 sm:gap-5">
          {scale.map((entry, i) => {
            const lift = i * 12; // progressive lift in px for visual offset
            const isLast = i === scale.length - 1;
            return (
              <div
                key={entry.name}
                className="flex items-center gap-3 sm:gap-4"
              >
                {/* Label + step indicator */}
                <div className="w-10 sm:w-12 shrink-0 flex flex-col items-center">
                  <span
                    className="text-[11px] font-mono font-semibold"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {entry.name}
                  </span>
                  {!isLast && (
                    <div
                      className="w-px h-3 sm:h-4 mt-1"
                      style={{ background: "var(--border)" }}
                    />
                  )}
                </div>

                {/* Preview card */}
                <div
                  className="flex-1 rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    background: canvasBg,
                    height: 52 + lift,
                    maxHeight: 120,
                  }}
                >
                  <div
                    className="w-full h-full flex items-center px-4 sm:px-6"
                    style={{
                      transform: `translateY(${-lift * 0.3}px)`,
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <div
                      className="rounded-xl bg-white"
                      style={{
                        width: 40 + i * 8,
                        height: 32 + i * 4,
                        boxShadow: entry.value,
                        transition:
                          "box-shadow 0.3s ease, width 0.3s ease, height 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                {/* Shadow value (truncated) */}
                <div className="hidden lg:block w-48 shrink-0">
                  <code
                    className="text-[9px] font-mono leading-tight block truncate"
                    style={{ color: "var(--text-faint)" }}
                    title={entry.value}
                  >
                    {entry.value}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Export section ─── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          border: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        {/* Toggle header */}
        <button
          onClick={() => setShowExport(!showExport)}
          className="w-full flex items-center justify-between px-4 py-3 transition-all"
          style={{
            borderBottom: showExport ? "1px solid var(--border)" : "none",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="text-xs font-semibold"
              style={{ color: "var(--text-muted)" }}
            >
              Export scale
            </span>
            <span
              className="text-[10px] font-mono px-1.5 py-0.5 rounded-md"
              style={{
                background: "var(--surface-raised)",
                color: "var(--text-faint)",
                border: "1px solid var(--border)",
              }}
            >
              {scale.length} tokens
            </span>
          </div>
          <ChevronDown
            size={14}
            style={{
              color: "var(--text-muted)",
              transform: showExport ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </button>

        {showExport && (
          <>
            {/* Format tabs + copy */}
            <div
              className="flex items-center justify-between px-2"
              style={{
                background: "var(--surface-raised)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                className="flex items-center overflow-x-auto flex-1 min-w-0"
                style={{ scrollbarWidth: "none" }}
              >
                {EXPORTS.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => setExportType(e.id)}
                    className="shrink-0 px-3 sm:px-4 py-2.5 text-[11px] font-semibold transition-all relative"
                    style={{
                      color:
                        exportType === e.id
                          ? "var(--text)"
                          : "var(--text-muted)",
                    }}
                  >
                    {e.label}
                    {exportType === e.id && (
                      <span
                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="px-2 py-1.5 shrink-0">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-lg transition-all duration-150 active:scale-95"
                  style={{
                    background: copied
                      ? "color-mix(in srgb, var(--accent) 15%, transparent)"
                      : "rgba(128,128,128,0.1)",
                    color: copied ? "var(--accent)" : "var(--text-muted)",
                    border: `1px solid ${copied ? "color-mix(in srgb, var(--accent) 30%, transparent)" : "var(--border)"}`,
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={11} className="animate-check-pop" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={11} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code */}
            <div style={{ background: "var(--surface-code)" }}>
              <pre
                className="p-4 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap"
                style={{
                  color: "var(--text)",
                  maxHeight: 240,
                  overflowY: "auto",
                }}
                dangerouslySetInnerHTML={{ __html: highlighted }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
