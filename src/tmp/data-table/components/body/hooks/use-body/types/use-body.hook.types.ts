// Types
import type { Table } from "@tanstack/react-table";

type UseBodyProps<TData> = {
  isError?: boolean;
  isLoading?: boolean;
  table: Table<TData>;
};

export type { UseBodyProps };
