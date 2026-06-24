// Types
import type { Table } from "@tanstack/react-table";
import type { DataTableFilter } from "@/components/data-table/types/data-table.component.types";

type FiltersProps<TData> = {
  filters: DataTableFilter[];
  table: Table<TData>;
};

export type { FiltersProps };
