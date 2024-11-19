//Providers
import { Provider as Styled } from "../providers/styled";
import { Material } from "../providers/material";

export const TableProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Material>
      <Styled>{children}</Styled>
    </Material>
  );
};
