//Styles
import * as S from "./styled";

//Hooks
import { useInternal } from "../../hooks/context";

//Icons
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface IPaginationProps {
  pages: number;
  page: number;
  setPage: (page: number) => void;
  loading?: boolean;
}

export const Pagination = ({
  page = 0,
  pages = 0,
  setPage,
  loading,
}: IPaginationProps) => {
  const internal = useInternal();

  return (
    <S.Root $isLoading={loading} data-testid="pagination" internal={internal}>
      <button
        disabled={page === 1 || loading}
        className="btn--pagination"
        name="chevron left"
        data-testid="prev--btn"
        onClick={() => {
          page > 1 && setPage(page - 1);
        }}
      >
        <ChevronLeft size={18} />
      </button>

      <p className="current">{page}</p>
      <p className="of">de</p>
      <p className="total">{pages}</p>

      <button
        disabled={page === pages || loading}
        className="btn--pagination"
        name="chevron right"
        data-testid="next--btn"
        onClick={() => {
          page < pages && setPage(page + 1);
        }}
      >
        <ChevronRight size={18} />
      </button>
    </S.Root>
  );
};
