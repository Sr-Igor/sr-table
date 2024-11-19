import { Provider as Register } from "./register";
import { Provider as Styled } from "../providers/styled";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { IMaterialProviderProps, Material } from "../providers/material";

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

export const TableProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Register>
      <MaterialSSR>
        <Styled>{children}</Styled>
      </MaterialSSR>
    </Register>
  );
};
