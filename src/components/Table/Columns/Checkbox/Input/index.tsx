//Styles
import * as S from "./styled";
import { useTheme } from "styled-components";

//Assets
import { Check } from "lucide-react";

export const Input = ({
  ...rest
}: {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const theme = useTheme();

  return (
    <S.Container $checked={!!rest.checked}>
      <input {...rest} type="checkbox" />
      <Check
        size={13}
        color={rest.checked ? theme.colors.red.strong : "transparent"}
        className="checkbox--icon"
      />
    </S.Container>
  );
};
