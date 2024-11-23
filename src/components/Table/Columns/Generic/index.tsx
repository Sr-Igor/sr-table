//Styles
import * as S from "../../styled";
import { useTheme } from "styled-components";

//Components
import { Sort } from "../../Views/Sort";

//Actions
import { getComponent } from "../../Views";
import { access } from "../../actions/accessor";

//Types
import { ITableProps, Column, Pagination } from "../../types";

export interface IColGenericProps<T extends { id: string }> {
  height: number;
  className?: string;
  data: ITableProps<T>["data"];
  columns: Column<T>[];
  loading?: boolean;
  loadingLines?: string[];
  hover?: number | null;
  setHover?: (value: number | null) => void;
  onClickRow?: (item: T) => void;
  pagination?: Pagination;
  setPagination?: (pagination: Pagination) => void;
}

export function ColGeneric<T extends { id: string }>({
  data,
  height,
  columns,
  className,
  loading,
  loadingLines = [],
  hover,
  setHover,
  onClickRow,
  pagination,
  setPagination,
}: Readonly<IColGenericProps<T>>) {
  const theme = useTheme();

  return (
    <S.Table className={className}>
      <S.Thead>
        <S.Tr $height={height}>
          {columns.map((column, key) => {
            const isSorted = pagination?.sortBy?.key === column.dataIndex;
            const sortBy = isSorted ? pagination?.sortBy?.order : undefined;

            return (
              <S.Th
                key={`table-column-${key}-tr-${column?.dataIndex}`}
                $identifier={`table--column--${key}--${column.dataIndex}`}
                className={`table--column--${key}--${column.dataIndex} ${
                  pagination?.sortBy && "usable"
                }`}
                $width={column.width}
                $break={column.minWidthToHide}
                onClick={
                  !loading && pagination?.sortBy && setPagination
                    ? () =>
                        setPagination({
                          sortBy: {
                            key: column.dataIndex,
                            order: sortBy === "asc" ? "desc" : "asc",
                          },
                        })
                    : undefined
                }
              >
                <div className={`cover`}>
                  {column.title}
                  {pagination?.sortBy && <Sort sortBy={sortBy} />}
                </div>
              </S.Th>
            );
          })}
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {data?.map((item, index) => (
          <S.Tr
            key={`table-row-${index}-tr-${item?.id}`}
            $height={height}
            $hover={hover === index}
            onMouseEnter={() => setHover && setHover(index)}
            onMouseLeave={() => setHover && setHover(null)}
            onClick={() => onClickRow && onClickRow(item)}
          >
            {columns.map((column, key) => {
              const accessor = access(item, column.dataIndex);
              const value = column.format
                ? column.format(item)
                : accessor || "-";

              const image = column?.image
                ? access(item, column?.image?.path)
                : undefined;

              const tooltip = column?.tooltip
                ? column.tooltip.title(item)
                : undefined;

              const textStyles = column?.textStyle?.(item, theme) || {};
              const statusStyles = column?.statusStyle?.(item) || {};

              const Component = getComponent(column.lineType || "Line");
              const custom = column?.customChildren?.(item);

              const isLineLoading = loadingLines.includes(item.id);

              return (
                <S.Td
                  key={`table-column-${key}-${index}--${column.dataIndex}`}
                  $identifier={`table--column--${key}--${column.dataIndex}`}
                  className={`table--column--${key}--${column.dataIndex}`}
                  $break={column.minWidthToHide}
                  $width={column.width}
                  $height={height}
                >
                  {custom || (
                    <Component<T>
                      value={value}
                      image={
                        image && { path: image, alt: column.image?.alt || "" }
                      }
                      tooltip={
                        tooltip
                          ? {
                              title: tooltip,
                              style: column.tooltip?.style
                                ? column.tooltip?.style(item, theme)
                                : {},
                            }
                          : undefined
                      }
                      height={height}
                      width={column.width}
                      textStyle={textStyles}
                      statusStyle={statusStyles}
                      quantity={columns.length}
                      loading={isLineLoading || loading}
                    />
                  )}
                </S.Td>
              );
            })}
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
}
