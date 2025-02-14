// Vendors
import type { Table } from "@tanstack/react-table";

type FirstPageClickHandlerProps<TData> = PaginationHandlersProps<TData>;
type LastPageClickHandlerProps<TData> = PaginationHandlersProps<TData>;
type NextPageClickHandlerProps<TData> = PaginationHandlersProps<TData>;
type PreviousPageClickHandlerProps<TData> = PaginationHandlersProps<TData>;

type PaginationHandlersProps<TData> = {
  table: Table<TData>;
};

type PaginationHandlersReturn = {
  handleFirstPageClick: () => void;
  handleLastPageClick: () => void;
  handleNextPageClick: () => void;
  handlePreviousPageClick: () => void;
};

export type {
  FirstPageClickHandlerProps,
  LastPageClickHandlerProps,
  NextPageClickHandlerProps,
  PaginationHandlersProps,
  PaginationHandlersReturn,
  PreviousPageClickHandlerProps,
};
