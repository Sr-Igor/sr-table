import { ChevronDown, ChevronUp } from "lucide-react";
import * as S from "./styled";

export interface ISortProps {
  sortBy?: "asc" | "desc";
}

export const Sort = ({ sortBy }: ISortProps) => {
  console.log(sortBy);
  return (
    <S.Box>
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
