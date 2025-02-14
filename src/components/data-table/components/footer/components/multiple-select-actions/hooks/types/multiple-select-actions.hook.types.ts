// Types
import type { Table } from "@tanstack/react-table";

type MultipleSelectActionsHookProps<TData> = {
  table: Table<TData>;
};

type MultipleSelectActionsHookReturn<TData> = {
  selectedRows: TData[];
};

export type { MultipleSelectActionsHookProps, MultipleSelectActionsHookReturn };
