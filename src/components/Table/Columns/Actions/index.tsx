//Styles
import * as S from "../../styled";

//Components
import { Actions } from "../../Views/Actions";

//Types
import { ITableProps, ActionsProps } from "../../types";

export interface IColActionsProps<T extends { id: string }> {
  height: number;
  data: ITableProps<T>["data"];
  actions: ActionsProps<T>["actions"];
  loading?: boolean;
  loadingLines?: string[];
}

export function ColActions<T extends { id: string }>({
  data,
  height,
  actions,
  loading,
  loadingLines = [],
}: Readonly<IColActionsProps<T>>) {
  return (
    <S.Table className="table--stable">
      <S.Thead>
        <S.Tr $height={height}>
          <S.Th
            $identifier={`table-actions-stable-th`}
            key={`table-actions-stable-th`}
            className={"column table--column--stable"}
          >
            Ações
          </S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {data?.map((item, index) => {
          const isLoading = loadingLines.includes(item?.id) || loading;

          return (
            <S.Tr
              key={`table-actions-stable-${index}-tr-${item?.id}`}
              $height={height}
              style={{
                opacity: isLoading ? 0.6 : 1,
                pointerEvents: isLoading ? "none" : "auto",
                transition: "opacity 0.3s",
              }}
            >
              <S.Td
                $height={height}
                key={`table-actions-stable-${index}-td-${item?.id}`}
                className={`table--column--stable`}
                $identifier={`table--column--stable`}
              >
                <Actions actions={actions} item={item} />
              </S.Td>
            </S.Tr>
          );
        })}
      </S.Tbody>
    </S.Table>
  );
}
