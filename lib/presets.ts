import type { Shadow } from "./types";
import { genId } from "./shadowUtils";

export type Preset = {
  name: string;
  category: string;
  shadows: Shadow[];
};

function s(
  x: number,
  y: number,
  blur: number,
  spread: number,
  opacity: number,
  color = "#000000",
  inset = false,
): Shadow {
  return {
    id: genId(),
    x,
    y,
    blur,
    spread,
    opacity,
    color,
    inset,
    visible: true,
  };
}

export const PRESETS: Preset[] = [
  {
    name: "Soft Lift",
    category: "Subtle",
    shadows: [s(0, 2, 8, 0, 0.08), s(0, 1, 2, 0, 0.04)],
  },
  {
    name: "Card",
    category: "Subtle",
    shadows: [s(0, 1, 3, 0, 0.1), s(0, 1, 2, -1, 0.1)],
  },
  {
    name: "Dropdown",
    category: "Subtle",
    shadows: [s(0, 4, 6, -1, 0.1), s(0, 2, 4, -2, 0.1)],
  },
  {
    name: "Feather",
    category: "Subtle",
    shadows: [s(0, 1, 2, 0, 0.05), s(0, 2, 4, 0, 0.04)],
  },
  {
    name: "Whisper",
    category: "Subtle",
    shadows: [s(0, 0, 1, 0, 0.06), s(0, 2, 6, -1, 0.07)],
  },

  {
    name: "Elevated",
    category: "Elevated",
    shadows: [s(0, 10, 15, -3, 0.1), s(0, 4, 6, -4, 0.1)],
  },
  {
    name: "Floating",
    category: "Elevated",
    shadows: [s(0, 20, 25, -5, 0.1), s(0, 8, 10, -6, 0.1)],
  },
  {
    name: "Modal",
    category: "Elevated",
    shadows: [s(0, 25, 50, -12, 0.25)],
  },
  {
    name: "Popover",
    category: "Elevated",
    shadows: [s(0, 8, 16, -4, 0.12), s(0, 2, 4, -2, 0.08)],
  },
  {
    name: "Tooltip",
    category: "Elevated",
    shadows: [s(0, 4, 12, -2, 0.15), s(0, 1, 3, 0, 0.08)],
  },

  {
    name: "Material 1dp",
    category: "Material",
    shadows: [s(0, 1, 3, 0, 0.12), s(0, 1, 2, 0, 0.24)],
  },
  {
    name: "Material 2dp",
    category: "Material",
    shadows: [s(0, 3, 6, 0, 0.16), s(0, 3, 6, 0, 0.23)],
  },
  {
    name: "Material 4dp",
    category: "Material",
    shadows: [s(0, 10, 20, 0, 0.19), s(0, 6, 6, 0, 0.23)],
  },
  {
    name: "Material 8dp",
    category: "Material",
    shadows: [s(0, 14, 28, 0, 0.25), s(0, 10, 10, 0, 0.22)],
  },
  {
    name: "Material 16dp",
    category: "Material",
    shadows: [s(0, 19, 38, 0, 0.3), s(0, 15, 12, 0, 0.22)],
  },

  {
    name: "Apple Card",
    category: "Apple",
    shadows: [s(0, 2, 8, 0, 0.12), s(0, 0, 0, 1, 0.04)],
  },
  {
    name: "Apple Sheet",
    category: "Apple",
    shadows: [s(0, 8, 32, 0, 0.12), s(0, 2, 8, 0, 0.08)],
  },
  {
    name: "Apple Menu",
    category: "Apple",
    shadows: [s(0, 4, 20, 0, 0.14), s(0, 1, 4, 0, 0.08), s(0, 0, 0, 1, 0.04)],
  },
  {
    name: "Apple Dock",
    category: "Apple",
    shadows: [s(0, 0, 0, 1, 0.15), s(0, 4, 32, 0, 0.25), s(0, 2, 8, 0, 0.1)],
  },
  {
    name: "Apple Button",
    category: "Apple",
    shadows: [s(0, 1, 3, 0, 0.1), s(0, 0, 0, 1, 0.06)],
  },

  {
    name: "Soft Raised",
    category: "Soft UI",
    shadows: [s(6, 6, 16, 0, 0.14), s(-6, -6, 16, 0, 0.6, "#ffffff")],
  },
  {
    name: "Soft Sunken",
    category: "Soft UI",
    shadows: [
      s(4, 4, 10, 0, 0.15, "#000000", true),
      s(-4, -4, 10, 0, 0.65, "#ffffff", true),
    ],
  },
  {
    name: "Soft Flat",
    category: "Soft UI",
    shadows: [s(3, 3, 8, 0, 0.1), s(-3, -3, 8, 0, 0.55, "#ffffff")],
  },
  {
    name: "Soft Pill",
    category: "Soft UI",
    shadows: [s(5, 5, 14, 0, 0.12), s(-5, -5, 14, 0, 0.6, "#ffffff")],
  },

  {
    name: "Glass Card",
    category: "Glassmorphism",
    shadows: [s(0, 4, 32, 0, 0.15), s(0, 0, 0, 1, 0.08, "#ffffff")],
  },
  {
    name: "Frosted",
    category: "Glassmorphism",
    shadows: [s(0, 8, 32, -8, 0.2), s(0, 0, 0, 1, 0.12, "#ffffff")],
  },
  {
    name: "Glass Panel",
    category: "Glassmorphism",
    shadows: [s(0, 2, 16, 0, 0.12), s(0, 0, 1, 0, 0.2, "#ffffff")],
  },
  {
    name: "Glass Tint",
    category: "Glassmorphism",
    shadows: [s(0, 8, 40, -4, 0.18), s(0, 1, 2, 0, 0.15, "#ffffff")],
  },

  {
    name: "Neumorphic Light",
    category: "Neumorphism",
    shadows: [s(6, 6, 12, 0, 0.15), s(-6, -6, 12, 0, 0.7, "#ffffff")],
  },
  {
    name: "Neumorphic Dark",
    category: "Neumorphism",
    shadows: [s(6, 6, 12, 0, 0.5), s(-6, -6, 12, 0, 0.1, "#ffffff")],
  },
  {
    name: "Neumorphic Inset",
    category: "Neumorphism",
    shadows: [
      s(4, 4, 8, 0, 0.15, "#000000", true),
      s(-4, -4, 8, 0, 0.7, "#ffffff", true),
    ],
  },
  {
    name: "Neumorphic Convex",
    category: "Neumorphism",
    shadows: [
      s(5, 5, 10, 0, 0.12),
      s(-5, -5, 10, 0, 0.65, "#ffffff"),
      s(0, 1, 3, 0, 0.06),
    ],
  },
  {
    name: "Neumorphic Concave",
    category: "Neumorphism",
    shadows: [
      s(3, 3, 6, 0, 0.18, "#000000", true),
      s(-3, -3, 6, 0, 0.6, "#ffffff", true),
      s(0, -1, 2, 0, 0.06),
    ],
  },

  {
    name: "Stat Card",
    category: "Dashboard",
    shadows: [s(0, 2, 12, 0, 0.08), s(0, 1, 3, 0, 0.06)],
  },
  {
    name: "Chart Widget",
    category: "Dashboard",
    shadows: [s(0, 4, 20, -4, 0.1), s(0, 1, 4, 0, 0.06)],
  },
  {
    name: "Sidebar",
    category: "Dashboard",
    shadows: [s(2, 0, 16, 0, 0.1), s(1, 0, 4, 0, 0.06)],
  },
  {
    name: "Data Table",
    category: "Dashboard",
    shadows: [s(0, 1, 2, 0, 0.06), s(0, 4, 8, -2, 0.08)],
  },
  {
    name: "Notification",
    category: "Dashboard",
    shadows: [s(0, 8, 24, -4, 0.14), s(0, 2, 6, 0, 0.08)],
  },

  {
    name: "Purple Glow",
    category: "Colored",
    shadows: [s(0, 0, 30, 0, 0.6, "#8b5cf6"), s(0, 0, 60, 0, 0.3, "#8b5cf6")],
  },
  {
    name: "Blue Glow",
    category: "Colored",
    shadows: [s(0, 0, 30, 0, 0.6, "#3b82f6"), s(0, 0, 60, 0, 0.3, "#3b82f6")],
  },
  {
    name: "Green Glow",
    category: "Colored",
    shadows: [s(0, 0, 30, 0, 0.6, "#22c55e"), s(0, 0, 60, 0, 0.3, "#22c55e")],
  },
  {
    name: "Orange Glow",
    category: "Colored",
    shadows: [s(0, 0, 25, 0, 0.7, "#f97316"), s(0, 0, 50, 0, 0.3, "#f97316")],
  },
  {
    name: "Rose Glow",
    category: "Colored",
    shadows: [s(0, 0, 28, 0, 0.65, "#f43f5e"), s(0, 0, 56, 0, 0.28, "#f43f5e")],
  },
  {
    name: "Cyan Glow",
    category: "Colored",
    shadows: [s(0, 0, 28, 0, 0.6, "#06b6d4"), s(0, 0, 56, 0, 0.25, "#06b6d4")],
  },
  {
    name: "Amber Lift",
    category: "Colored",
    shadows: [s(0, 8, 24, -4, 0.5, "#f59e0b"), s(0, 2, 8, 0, 0.25, "#f59e0b")],
  },

  {
    name: "Pressed",
    category: "Inset",
    shadows: [s(0, 2, 6, 0, 0.2, "#000000", true)],
  },
  {
    name: "Engraved",
    category: "Inset",
    shadows: [
      s(0, 2, 4, 0, 0.3, "#000000", true),
      s(0, -1, 2, 0, 0.5, "#ffffff", true),
    ],
  },
  {
    name: "Well",
    category: "Inset",
    shadows: [
      s(0, 4, 12, 0, 0.25, "#000000", true),
      s(0, -2, 4, 0, 0.4, "#ffffff", true),
    ],
  },
  {
    name: "Groove",
    category: "Inset",
    shadows: [
      s(2, 2, 6, 0, 0.2, "#000000", true),
      s(-2, -2, 6, 0, 0.45, "#ffffff", true),
    ],
  },
  {
    name: "Recessed",
    category: "Inset",
    shadows: [
      s(0, 3, 8, -1, 0.28, "#000000", true),
      s(0, -1, 3, 0, 0.35, "#ffffff", true),
      s(0, 1, 2, 0, 0.06, "#000000", true),
    ],
  },
];

export const CATEGORIES = [...new Set(PRESETS.map((p) => p.category))];
