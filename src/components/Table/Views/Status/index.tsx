//Styles
import * as S from "./styled";

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

  return (
    <S.Root
      $type={status?.color || "gray"}
      $width={width}
      $height={height}
      $loading={loading}
    >
      <S.Skt loading={loading} />
      <span className="point" />
      <p>{status?.label || "Inativo"}</p>
    </S.Root>
  );
}
