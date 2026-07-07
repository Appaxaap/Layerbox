"use client";

import { useMemo } from "react";
import { generatePalette, paletteShadowCss } from "../../lib/shadowPalette";
import type { Shadow } from "../../lib/types";

type Props = {
  seed: Shadow | null;
  onSelect: (shadow: Shadow) => void;
};

export function ShadowPalette({ seed, onSelect }: Props) {
  const palette = useMemo(
    () => (seed ? generatePalette(seed) : []),
    [seed],
  );

  if (!seed || palette.length === 0) {
    return (
      <div
        className="rounded-2xl p-4 flex flex-col gap-2"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <p
          className="text-xs font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          Shadow Palette
        </p>
        <p
          className="text-[11px]"
          style={{ color: "var(--text-faint)" }}
        >
          Select a layer to generate variations from it.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-4 flex flex-col gap-3"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <span
        className="text-xs font-medium"
        style={{ color: "var(--text-muted)" }}
      >
        Shadow Palette
      </span>

      <div className="grid grid-cols-3 gap-2">
        {palette.map((entry) => {
          const css = paletteShadowCss(entry);
          return (
            <button
              key={entry.name}
              onClick={() => onSelect(entry.shadow)}
              className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-all active:scale-95 duration-150"
              style={{
                background: "var(--surface-raised)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--accent) 30%, transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {/* Mini preview */}
              <div
                className="w-full h-10 rounded-lg flex items-center justify-center"
                style={{ background: "#1a2828" }}
              >
                <div
                  className="w-5 h-5 rounded-md bg-white"
                  style={{ boxShadow: css }}
                />
              </div>
              {/* Label */}
              <span className="text-[10px] font-semibold">
                {entry.icon} {entry.name}
              </span>
              <span
                className="text-[9px]"
                style={{ color: "var(--text-faint)" }}
              >
                {entry.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
