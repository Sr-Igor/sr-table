//Styles
import * as S from "./styled";

import { Label, labels } from "./status";

//Types
import { IComposeProps } from "../../types";

export interface IStatusProps {
  type: keyof typeof S.RootModifiers;
}

export function Status<T>({
  value = "inactive",
  width,
  height,
  loading,
}: Readonly<IComposeProps<T>>) {
  const exists = Object.keys(labels).includes(`${value}`);

  const status: Label = exists
    ? labels[value]
    : { label: "Inativo", color: "gray" };

  return (
    <S.Root $type={status.color} $width={width} $height={height}>
      <S.Skt loading={loading} />
      <span className="point" />
      <p>{status.label}</p>
    </S.Root>
  );
}
