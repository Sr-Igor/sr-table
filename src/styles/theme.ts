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
    red: {
      light: "",
      strong: "",
    },
    gray: {
      light: "",
      strong: "",
    },
    yellow: {
      light: "",
      strong: "",
    },
    orange: {
      light: "",
      strong: "",
    },
    green: {
      light: "",
      strong: "",
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
