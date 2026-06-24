// Types
import type { Column } from "@tanstack/react-table";

type ColumnSorterHandlersProps<TData> = {
  column: Column<TData>;
};

type HandleHideProps<TData> = ColumnSorterHandlersProps<TData>;
type HandleSortAscProps<TData> = ColumnSorterHandlersProps<TData>;
type HandleSortDescProps<TData> = ColumnSorterHandlersProps<TData>;

type ColumnSorterHandlersReturn = {
  handleHide: () => void;
  handleSortAsc: () => void;
  handleSortDesc: () => void;
};

export type {
  ColumnSorterHandlersProps,
  ColumnSorterHandlersReturn,
  HandleHideProps,
  HandleSortAscProps,
  HandleSortDescProps,
};
