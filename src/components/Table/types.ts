import { components } from "./Views";
import { DefaultTheme } from "styled-components";

export type PrimitiveKeys<T> = T extends object ? keyof T : never;

type RecursiveKeys<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? K | `${K}.${RecursiveKeys<T[K]> & string}`
        : never;
    }[keyof T]
  : "";

type Keys<T> = RecursiveKeys<T>;

type Image<T> = {
  path: Keys<T>;
  alt: string;
};

export type Column<T extends { id: string }> = {
  title: string;
  width?: string;
  dataIndex: Keys<T>;
  fixed?: "left" | "right";
  lineType?: keyof typeof components;
  format?: (item: T) => string | number;
  image?: Image<T>;
  tooltip?: {
    title: (item: T) => string;
    style?: (item: T, theme: DefaultTheme) => React.CSSProperties;
  };
  textStyle?: (item: T, theme: DefaultTheme) => React.CSSProperties;
};
export interface ActionsProps<T> {
  item: T;
  actions: {
    title: string;
    onClick: (item: T) => void;
    hide?: (item: T) => boolean;
    act?: "create" | "read" | "update" | "delete";
  }[];
  loading?: boolean;
}

export type Pagination = {
  page?: number;
  search?: string;
};

export interface ITableProps<T extends { id: string }> {
  data?: T[];
  count?: number;
  pages?: number;
  visible?: number;
  loading?: boolean;
  selects?: string[];
  columns: Column<T>[];
  pagination?: Pagination;
  loadingLines?: string[];
  actions?: ActionsProps<T>["actions"];
  setSelects?: (selects: string[]) => void;
  setPagination?: (pagination: Pagination) => void;
  emptyImageProps?: any;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  onClickRow?: (item: T) => void;
}

export interface IComposeProps<T> {
  value: string | number;
  quantity: number;
  width?: string;
  height: number;
  loading?: boolean;
  image?: Image<T>;
  tooltip?: {
    title?: string;
    style?: React.CSSProperties;
  };
  textStyle?: React.CSSProperties;
}
