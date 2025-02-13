// Vendors
import type { ColumnDef, Table } from "@tanstack/react-table";

type BodyProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  table: Table<TData>;
};

export type { BodyProps };
