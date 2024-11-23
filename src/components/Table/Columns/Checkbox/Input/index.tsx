//Styles
import * as S from "./styled";

//Assets
import { Check } from "lucide-react";

export const Input = ({
  ...rest
}: {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <S.Box>
      <p className="size">*</p>
      <S.Container $checked={!!rest.checked}>
        <input {...rest} type="checkbox" />
        <Check
          size={13}
          color={rest.checked ? "#FFF" : "transparent"}
          className="checkbox--icon"
        />
      </S.Container>
    </S.Box>
  );
};
