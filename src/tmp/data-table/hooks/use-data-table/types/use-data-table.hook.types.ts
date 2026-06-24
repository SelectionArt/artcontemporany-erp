import type { ColumnDef, VisibilityState } from "@tanstack/react-table";

type UseDataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  getRowId: (row: TData) => string;
  initialColumnVisibility: VisibilityState;
};

export type { UseDataTableProps };
