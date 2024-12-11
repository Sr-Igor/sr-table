//Styles
import * as S from "./styled";

//Hooks
import { useInternal } from "../../../../../hooks/context";

//Assets
import { Check } from "lucide-react";

export const Input = ({
  ...rest
}: {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const internal = useInternal();

  return (
    <S.Box internal={internal}>
      <p className="size">*</p>
      <S.Container $checked={!!rest.checked} internal={internal}>
        <input {...rest} type="checkbox" />
        <Check
          size={13}
          internal={internal}
          color={rest.checked ? "#FFF" : "transparent"}
          className="checkbox--icon"
        />
      </S.Container>
    </S.Box>
  );
};
