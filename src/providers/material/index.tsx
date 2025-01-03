//Styles
import theme from "./theme";

//Providers
import { ThemeProvider } from "@mui/material/styles/index.js";
import CssBaseline from "@mui/material/CssBaseline/index.js";

export interface IMaterialProviderProps {
  children: React.ReactNode;
}

export const Material = ({ children }: IMaterialProviderProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <CssBaseline />
    </>
  );
};
