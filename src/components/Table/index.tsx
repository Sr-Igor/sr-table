/* eslint-disable jsx-a11y/alt-text */
//Styles
import * as S from "./styled";

//React && Hooks
import { useMemo, useState } from "react";
import { useInternal } from "../../hooks/context";

//Components
import { Pagination } from "../Pagination";
import { ColActions } from "./Columns/Actions";
import { ColGeneric } from "./Columns/Generic";
import { ColCheckbox } from "./Columns/Checkbox";

//Types
import { ITableProps } from "./types";

export function Table<T extends { id: string }>({
  actions,
  selects,
  data = [],
  count = 0,
  pages = 1,
  setSelects,
  columns = [],
  wrapperProps,
  setPagination,
  loading = false,
  emptyImageProps,
  visible = 10,
  loadingLines = [],
  pagination = { page: 1 },
  onClickRow,
}: Readonly<ITableProps<T>>) {
  const internal = useInternal();

  //Data manipulation
  const _LINE_HEIGHT = 30;
  const ld = Array.from({ length: visible }).map(() => ({})) as T[];
  const items = useMemo(() => {
    const dft = loading ? ld : data;
    if (dft.length <= visible) return dft;
    const start = ((pagination.page || 0) - 1) * visible;
    const end = start + visible;
    return dft.slice(start, end);
  }, [data, visible, pagination.page]);

  //Columns Split
  const _columns = useMemo(() => {
    const mid = columns.filter((column) => !column.fixed);
    const left = columns.filter((column) => column.fixed === "left");
    const right = columns.filter((column) => column.fixed === "right");
    return { left, mid, right };
  }, [columns]);

  const [hover, setHover] = useState<number | null>(null);

  // --------------------- RENDER --------------------- //
  return (
    <>
      <S.Wrapper {...wrapperProps} internal={internal}>
        <S.Area internal={internal}>
          {selects && setSelects && (
            <ColCheckbox
              data={items}
              height={_LINE_HEIGHT}
              loading={loading}
              loadingLines={loadingLines}
              selects={selects}
              setSelects={setSelects}
            />
          )}

          {!!_columns.left.length && (
            <ColGeneric
              data={items}
              height={_LINE_HEIGHT}
              columns={_columns.left}
              className={"table--fixed"}
              loading={loading}
              loadingLines={loadingLines}
              hover={onClickRow && hover}
              setHover={setHover}
              onClickRow={onClickRow}
              pagination={pagination}
              setPagination={setPagination}
            />
          )}

          <S.Scrollable internal={internal}>
            <div className="scroll">
              <ColGeneric
                data={items}
                height={_LINE_HEIGHT}
                columns={_columns.mid}
                className={"table--scroll"}
                loading={loading}
                loadingLines={loadingLines}
                hover={onClickRow && hover}
                setHover={setHover}
                onClickRow={onClickRow}
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
          </S.Scrollable>

          {!!_columns.right.length && (
            <ColGeneric
              data={items}
              height={_LINE_HEIGHT}
              columns={_columns.right}
              className={"table--fixed"}
              loading={loading}
              loadingLines={loadingLines}
              hover={onClickRow && hover}
              setHover={setHover}
              onClickRow={onClickRow}
              pagination={pagination}
              setPagination={setPagination}
            />
          )}

          {actions && (
            <ColActions
              data={items}
              height={_LINE_HEIGHT}
              loading={loading}
              loadingLines={loadingLines}
              actions={actions}
            />
          )}
        </S.Area>

        {/* Empty State */}
        {!loading && items.length <= 0 && (
          <S.Empty internal={internal}>
            {!!emptyImageProps && (
              <div className="image--box">
                <img {...emptyImageProps} />
              </div>
            )}

            <div>
              <h4>
                {pagination?.search
                  ? `Nenhum resultado para "${pagination.search}"`
                  : "Nenhum resultado encontrado"}
              </h4>
              <p>
                {pagination.search
                  ? "Tente buscar por outro termo ou limpe o campo de busca"
                  : "Verifique seus filtros e tente novamente"}
              </p>
            </div>
          </S.Empty>
        )}
      </S.Wrapper>
      {/* Pagination */}
      {!!setPagination && (
        <S.Footer internal={internal}>
          <p className="footer-total">
            Total <strong>{count}</strong>
          </p>
          <Pagination
            page={pagination.page || 1}
            pages={pages}
            setPage={(page: number) => setPagination({ ...pagination, page })}
          />
        </S.Footer>
      )}
    </>
  );
}
