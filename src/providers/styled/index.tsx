import { ThemeProvider } from "styled-components";

import { theme } from "../../styles/theme";
import GlobalStyles from "../../styles/global";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <span>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </span>
  );
};
