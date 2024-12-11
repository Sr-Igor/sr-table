//Styles
import * as S from "./styled";

//Hooks
import { useInternal } from "../../hooks/context";

type Div = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface ISkeletonProps extends Div {
  loading?: boolean;
  mode?: "black" | "white";
}

export const Skeleton = ({ loading, ...rest }: ISkeletonProps) => {
  const internal = useInternal();

  return (
    <S.Skeleton
      $loading={loading}
      {...rest}
      data-testid="skeleton"
      internal={internal}
    />
  );
};
