// Providers
import { Provider as Register } from "./register";
import { IMaterialProviderProps, Material } from "../providers/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

//Hooks
import { InternalProvider } from "../hooks/context";

//Types
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
        <InternalProvider theme={theme}>{children}</InternalProvider>
      </MaterialSSR>
    </Register>
  );
};
