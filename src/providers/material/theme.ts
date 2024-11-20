import { createTheme } from "@mui/material/styles/index.js";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ec4899",
      "100": "#fce7f3",
      "200": "#fbcfe8",
      "300": "#f9a8d4",
      "400": "#f472b6",
      "500": "#ec4899",
      "600": "#db2777",
      "700": "#be185d",
      "800": "#9d174d",
      "900": "#831843",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fbbf24",
      "100": "#fff7d4",
      "200": "#feeab3",
      "300": "#fddc8c",
      "400": "#fdc75b",
      "500": "#fbbf24",
      "600": "#f9aa33",
      "700": "#e3a008",
      "800": "#c08407",
      "900": "#a16207",
      contrastText: "#ffffff",
    },
    grey: {
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
    },
    action: {
      active: "#ffffff",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
      hoverOpacity: 0.08,
      focusOpacity: 0.12,
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      // hint: 'rgba(255, 255, 255, 0.5)'
    },
    background: {
      paper: "#424242",
      default: "#121212",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    info: {
      main: "#2196f3",
      contrastText: "#ffffff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f44336",
      contrastText: "#ffffff",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;
