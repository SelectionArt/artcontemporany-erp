// Types
import type { Table } from "@tanstack/react-table";

type RowsPerPageProps<TData> = {
  pageSizeOptions?: number[];
  table: Table<TData>;
};

export type { RowsPerPageProps };
