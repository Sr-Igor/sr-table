import { Provider as Register } from "./register";
import { Provider as Styled } from "../providers/styled";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { IMaterialProviderProps, Material } from "../providers/material";
import { Theme } from "../styles/theme";

export interface ITableProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

const MaterialSSR = ({ children }: IMaterialProviderProps) => {
  return (
    <AppRouterCacheProvider
      options={{
        enableCssLayer: true,
      }}
    >
      <Material>{children}</Material>
    </AppRouterCacheProvider>
  );
};

export const TableProvider = ({ children, theme }: ITableProviderProps) => {
  return (
    <Register>
      <MaterialSSR>
        <Styled theme={theme}>{children}</Styled>
      </MaterialSSR>
    </Register>
  );
};
