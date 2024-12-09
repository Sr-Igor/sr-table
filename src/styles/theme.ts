export const theme = {
  border: {
    radius: "0.8rem",
    xradius: "1.8rem",
    xxradius: "2.8rem",
  },
  font: {
    weight: {
      light: 300,
      normal: 400,
      bold: 600,
      ultra: 800,
    },
    size: {
      xxxsmall: "1.2rem",
      xxsmall: "1.4rem",
      xsmall: "1.6rem",
      small: "1.8rem",
    },
  },
  colors: {
    checkbox: "#14b8a6",
    loading: {
      light: "#f3f4f6",
      strong: "#e5e7eb",
    },
    background: "#FFF",
    red: {
      light: "#fecaca",
      strong: "#ef4444",
    },
    gray: {
      light: "#e5e7eb",
      strong: "#1f2937",
    },
    yellow: {
      light: "#fef08a",
      strong: "#eab308",
    },
    orange: {
      light: "#fed7aa",
      strong: "#f97316",
    },
    green: {
      light: "#99f6e4",
      strong: "#14b8a6",
    },
  },
  spacings: {
    minimal: "0.2rem",
    xxxsmall: "0.8rem",
    xxsmall: "1rem",
    xsmall: "1.2rem",
    small: "1.4rem",
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
} as const;

export type Theme = typeof theme;
