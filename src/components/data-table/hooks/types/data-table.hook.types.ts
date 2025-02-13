import type { Dispatch, SetStateAction } from "react";
import type { ColumnDef, Table, VisibilityState } from "@tanstack/react-table";

type DataTableHookProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  initialColumnVisibility: VisibilityState;
};

type DataTableHookReturn<TData> = {
  globalFilter: string;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  table: Table<TData>;
};

export type { DataTableHookProps, DataTableHookReturn };
