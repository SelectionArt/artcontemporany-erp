// Vendors
import type { Table } from "@tanstack/react-table";

type ValueChangeHandlerProps<TData> = {
  table: Table<TData>;
  value: string;
};

type RowsPerPageHandlersProps<TData> = {
  table: Table<TData>;
};

type RowsPerPageHandlersReturn = {
  handleValueChange: (value: string) => void;
};

export type {
  ValueChangeHandlerProps,
  RowsPerPageHandlersProps,
  RowsPerPageHandlersReturn,
};
