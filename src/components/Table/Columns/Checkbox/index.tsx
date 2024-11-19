//Styles
import * as S from "../../styled";

//React && Hooks
import { useMemo } from "react";

//Components
import { Input } from "./Input";

//Types
import { ITableProps } from "../../types";

export interface IColActionsProps<T extends { id: string }> {
  height: number;
  data: ITableProps<T>["data"];
  loading?: boolean;
  loadingLines?: string[];
  selects?: string[];
  setSelects?: (selects: string[]) => void;
}

export function ColCheckbox<T extends Readonly<{ id: string }>>({
  data = [],
  height,
  loading,
  loadingLines = [],
  selects,
  setSelects,
}: Readonly<IColActionsProps<T>>) {
  const someIsLoading = loadingLines.length > 0 || loading;

  const handleSelect = (id: string) => {
    if (!setSelects || !selects)
      return console.error("Select state isn`t pass to the component");

    selects?.includes(id)
      ? setSelects(selects.filter((item) => item !== id))
      : setSelects([...selects, id]);
  };

  const isAllSelected = useMemo(() => {
    return data?.every((item) => selects?.includes(item.id));
  }, [selects, data]);

  const handleAll = () => {
    if (!setSelects || !selects)
      return console.error("Select state isn`t pass to the component");

    if (isAllSelected) {
      const newSelects = selects?.filter(
        (item) => !data?.map((item) => item.id).includes(item)
      );
      setSelects(newSelects);
    } else {
      //Filter only the new items
      const news = data.filter((item) => !selects?.includes(item.id));

      const newSelects = [...selects, ...news.map((item) => item.id)];
      setSelects(newSelects);
    }
  };

  return (
    <S.Table className="table--stable">
      <S.Thead>
        <S.Tr
          $height={height}
          style={{
            opacity: someIsLoading ? 0.3 : 1,
            pointerEvents: someIsLoading ? "none" : "auto",
            transition: "opacity 0.3s",
          }}
        >
          <S.Th
            key={`table-checkbox-stable-th`}
            className={"column table--column--stable"}
          >
            <Input checked={isAllSelected} onChange={handleAll} />
          </S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {data?.map((item, index) => {
          const isLoading = loadingLines.includes(item?.id) || loading;

          return (
            <S.Tr
              key={`table-checkbox-stable-${index}-tr-${item?.id}`}
              $height={height}
              style={{
                opacity: isLoading ? 0.6 : 1,
                pointerEvents: isLoading ? "none" : "auto",
                transition: "opacity 0.3s",
              }}
            >
              <S.Td
                $height={height}
                key={`table-checkbox-stable-${index}-td-${item?.id}`}
                className={`table--column--stable`}
              >
                <button className="actions">
                  <Input
                    checked={selects?.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                  />
                </button>
              </S.Td>
            </S.Tr>
          );
        })}
      </S.Tbody>
    </S.Table>
  );
}
