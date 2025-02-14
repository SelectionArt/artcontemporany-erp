// Types
import type { RowsPerPageHandlersReturn } from "../../handlers/types/rows-per-page.handlers.types";
import type { Table } from "@tanstack/react-table";

type RowsPerPageHookProps<TData> = {
  table: Table<TData>;
};

type RowsPerPageHookReturn = RowsPerPageHandlersReturn & {
  pageSize: string;
};

export type { RowsPerPageHookProps, RowsPerPageHookReturn };
