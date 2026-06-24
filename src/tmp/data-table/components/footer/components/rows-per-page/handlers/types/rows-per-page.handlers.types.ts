// Types
import type { Table } from "@tanstack/react-table";

type HandleValueChangeProps<TData> = {
  table: Table<TData>;
  value: string | null;
};

type RowsPerPageHandlersProps<TData> = {
  table: Table<TData>;
};

type RowsPerPageHandlersReturn = {
  handleValueChange: (value: string | null) => void;
};

export type {
  HandleValueChangeProps,
  RowsPerPageHandlersProps,
  RowsPerPageHandlersReturn,
};
