//Providers
import { Provider as Styled } from "../providers/styled";
import { Material } from "../providers/material";
import { Theme } from "../styles/theme";

export interface ITableProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const TableProvider = ({ children, theme }: ITableProviderProps) => {
  return (
    <Material>
      <Styled theme={theme}>{children}</Styled>
    </Material>
  );
};
