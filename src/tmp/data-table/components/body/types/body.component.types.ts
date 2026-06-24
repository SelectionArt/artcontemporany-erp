// Types
import type { Table } from "@tanstack/react-table";

type BodyProps<TData> = {
  isError?: boolean;
  isLoading?: boolean;
  table: Table<TData>;
};

export type { BodyProps };
