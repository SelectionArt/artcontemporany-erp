import type { Column } from "@tanstack/react-table";

type ColumnSorterProps<TData> = {
  className?: string;
  column: Column<TData>;
  label: string;
};

export type { ColumnSorterProps };
