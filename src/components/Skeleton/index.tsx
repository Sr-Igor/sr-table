import * as S from "./styled";

type Div = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface ISkeletonProps extends Div {
  loading?: boolean;
  mode?: "black" | "white";
}

export const Skeleton = ({ loading, ...rest }: ISkeletonProps) => {
  return <S.Skeleton $loading={loading} {...rest} data-testid="skeleton" />;
};
