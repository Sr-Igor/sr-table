//Styles
import * as S from "./styled";
import { useInternal } from "../../../../hooks/context";

//Icons
import { ChevronDown, ChevronUp } from "lucide-react";

export interface ISortProps {
  sortBy?: "asc" | "desc";
}

export const Sort = ({ sortBy }: ISortProps) => {
  const internal = useInternal();

  return (
    <S.Box internal={internal}>
      <ChevronUp
        size={14}
        strokeWidth={3}
        className={`arrow top ${sortBy === "asc" && "active"}`}
      />
      <ChevronDown
        size={14}
        strokeWidth={3}
        className={`arrow bottom ${sortBy === "desc" && "active"}`}
      />
    </S.Box>
  );
};
