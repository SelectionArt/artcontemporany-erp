// Types
import type { DataTableMultipleSelectActions } from "@/components/data-table/types/data-table.component.types";
import type { Table } from "@tanstack/react-table";

type MultipleSelectActionsProps<TData> = {
  multipleSelectActions: DataTableMultipleSelectActions<TData>;
  table: Table<TData>;
};

export type { MultipleSelectActionsProps };
