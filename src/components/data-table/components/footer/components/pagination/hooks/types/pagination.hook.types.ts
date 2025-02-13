// Types
import type { PaginationHandlersReturn } from "../../handlers/types/pagination.handlers.types";
import type { Table } from "@tanstack/react-table";

type PaginationHookProps<TData> = {
  table: Table<TData>;
};

type PaginationHookReturn<TData> = PaginationHandlersReturn & {
  disabledFirstPage: boolean;
  disabledLastPage: boolean;
  disabledNextPage: boolean;
  disabledPreviousPage: boolean;
};

export type { PaginationHookProps, PaginationHookReturn };
