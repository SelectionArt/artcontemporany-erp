// Types
import type { Table } from "@tanstack/react-table";

type PaginationHandlersProps<TData> = {
  table: Table<TData>;
};

type HandleFirstPageClickProps<TData> = PaginationHandlersProps<TData>;
type HandleLastPageClickProps<TData> = PaginationHandlersProps<TData>;
type HandleNextPageClickProps<TData> = PaginationHandlersProps<TData>;
type HandlePreviousPageClickProps<TData> = PaginationHandlersProps<TData>;

type PaginationHandlersReturn = {
  handleFirstPageClick: () => void;
  handleLastPageClick: () => void;
  handleNextPageClick: () => void;
  handlePreviousPageClick: () => void;
};

export type {
  HandleFirstPageClickProps,
  HandleLastPageClickProps,
  HandleNextPageClickProps,
  HandlePreviousPageClickProps,
  PaginationHandlersProps,
  PaginationHandlersReturn,
};
