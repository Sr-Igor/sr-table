//Styles
import * as S from "./styled";

//Hooks
import { useInternal } from "../../../../hooks/context";

//Types
import { IComposeProps } from "../../types";

export type StatusColor = keyof typeof S.RootModifiers;

export function Status<T>({
  width,
  height,
  loading,
  statusStyle,
}: Readonly<IComposeProps<T>>) {
  const status = statusStyle;
  const internal = useInternal();

  return (
    <S.Root
      internal={internal}
      $type={status?.color || "gray"}
      $width={width}
      $height={height}
      $loading={loading}
    >
      <S.Skt loading={loading} internal={internal} />
      <span className="point" />
      <p>{status?.label || "Inativo"}</p>
    </S.Root>
  );
}
