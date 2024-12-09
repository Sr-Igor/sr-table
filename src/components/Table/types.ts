import { components } from "./Views";
import { StatusColor } from "./Views/Status";
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
  sortBy?: Keys<T> | "string" | boolean;
  dataIndex: Keys<T>;
  fixed?: "left" | "right";
  lineType?: keyof typeof components;
  format?: (item: T) => string | number;
  image?: Image<T>;
  minWidthToHide?: number;
  tooltip?: {
    title: (item: T) => string;
    style?: (item: T, theme: DefaultTheme) => React.CSSProperties;
  };
  textStyle?: (item: T, theme: DefaultTheme) => React.CSSProperties;
  statusStyle?: (item: T) => {
    label: string;
    color: StatusColor;
  };
  customChildren?: (item: T) => React.ReactNode;
};
export interface ActionsProps<T> {
  item: T;
  actions: {
    title: string;
    onClick: (item: T) => void;
    hide?: (item: T) => boolean;
  }[];
  loading?: boolean;
}

export type Pagination = {
  page?: number;
  search?: string;
  sortBy?: { key: string; order: "asc" | "desc" };
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
  emptyImageProps?: React.HTMLAttributes<HTMLImageElement> & {
    src?: string;
    alt?: string;
  };
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
  statusStyle: {
    label?: string;
    color?: StatusColor;
  };
}
