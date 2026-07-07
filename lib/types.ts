export type Shadow = {
  id: string;
  x: number;
  y: number;
  blur: number;
  spread: number;
  opacity: number;
  color: string;
  inset: boolean;
  visible: boolean;
};

export type PreviewShape = "box" | "circle" | "button" | "card";
export type PreviewBackground = "light" | "dark" | "gradient";
