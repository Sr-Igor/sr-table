import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

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
