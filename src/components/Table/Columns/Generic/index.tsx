//Styles
import * as S from "../../styled";
import { Skt, Area } from "../../Views/Line/styled";

//Hooks
import { useInternal } from "../../../../hooks/context";

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
  const internal = useInternal();

  return (
    <S.Table className={className} internal={internal}>
      <S.Thead internal={internal}>
        <S.Tr $height={height} internal={internal}>
          {columns.map((column, key) => {
            const isSorted = pagination?.sortBy?.key === column.dataIndex;
            const sortBy = isSorted ? pagination?.sortBy?.order : undefined;

            return (
              <S.Th
                internal={internal}
                key={`table-column-${key}-tr-${column?.dataIndex}`}
                $identifier={`table--column--${key}--${column.dataIndex}`}
                className={`table--column--${key}--${column.dataIndex} ${
                  pagination?.sortBy && column.sortBy && "usable"
                }`}
                $width={column.width}
                $break={column.minWidthToHide}
                onClick={
                  !loading &&
                  pagination?.sortBy &&
                  column?.sortBy &&
                  setPagination
                    ? () => {
                        const isBoolean = typeof column.sortBy === "boolean";
                        const sort = column.sortBy as any;

                        const sortKey = isBoolean ? column.dataIndex : sort;

                        setPagination({
                          sortBy: {
                            key: sortKey,
                            order: sortBy === "asc" ? "desc" : "asc",
                          },
                        });
                      }
                    : undefined
                }
              >
                <div className={`cover`}>
                  {column.title}
                  {column?.sortBy && pagination?.sortBy && (
                    <Sort sortBy={sortBy} />
                  )}
                </div>
              </S.Th>
            );
          })}
        </S.Tr>
      </S.Thead>
      <S.Tbody internal={internal}>
        {data?.map((item, index) => (
          <S.Tr
            internal={internal}
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

              const textStyles = column?.textStyle?.(item, internal) || {};
              const statusStyles = column?.statusStyle?.(item) || {};

              const isLineLoading = loadingLines.includes(item.id);
              const isLoading = isLineLoading || loading;

              const Component = getComponent(column.lineType || "Line");
              const custom = column?.customChildren?.(item);

              const CustomRender = () => {
                return (
                  <Area internal={internal}>
                    <Skt loading={isLoading} internal={internal} />
                    {custom}
                  </Area>
                );
              };

              return (
                <S.Td
                  internal={internal}
                  key={`table-column-${key}-${index}--${column.dataIndex}`}
                  $identifier={`table--column--${key}--${column.dataIndex}`}
                  className={`table--column--${key}--${column.dataIndex}`}
                  $break={column.minWidthToHide}
                  $width={column.width}
                  $height={height}
                >
                  {!!custom ? (
                    <CustomRender />
                  ) : (
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
                                ? column.tooltip?.style(item, internal)
                                : {},
                            }
                          : undefined
                      }
                      height={height}
                      width={column.width}
                      textStyle={textStyles}
                      statusStyle={statusStyles}
                      quantity={columns.length}
                      loading={isLoading}
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
