//React && Hooks
import React, { createContext, useContext } from "react";

//Styles
import GlobalStyles from "../../styles/global";
import { theme as defaultTheme, Theme } from "../../styles/theme";

const ThemeContext = createContext(defaultTheme);

export interface IThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const InternalProvider = ({ children, theme }: IThemeProviderProps) => {
  const usualTheme = defaultTheme;
  return (
    <ThemeContext.Provider value={usualTheme}>
      {children}
      <GlobalStyles theme={usualTheme} />
    </ThemeContext.Provider>
  );
};

export const useInternal = () => useContext(ThemeContext);
