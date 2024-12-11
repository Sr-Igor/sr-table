//Providers
import { Material } from "../providers/material";
import { InternalProvider } from "../hooks/context";

//Types
import { Theme } from "../styles/theme";

export interface ITableProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const TableProvider = ({ children, theme }: ITableProviderProps) => {
  return (
    <Material>
      <InternalProvider theme={theme}>{children}</InternalProvider>
    </Material>
  );
};
