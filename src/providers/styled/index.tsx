import { ThemeProvider } from "styled-components";

import { Theme, theme as defaultTheme } from "../../styles/theme";
import GlobalStyles from "../../styles/global";

export interface IProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const Provider = ({
  children,
  theme = defaultTheme,
}: IProviderProps) => {
  return (
    <span>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </span>
  );
};
