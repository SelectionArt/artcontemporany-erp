// Types
import type {
  FirstPageClickHandlerProps,
  LastPageClickHandlerProps,
  NextPageClickHandlerProps,
  PaginationHandlersProps,
  PaginationHandlersReturn,
  PreviousPageClickHandlerProps,
} from "./types/pagination.handlers.types";

const firstPageClickHandler = <TData>({
  table,
}: FirstPageClickHandlerProps<TData>) => table.setPageIndex(0);

const lastPageClickHandler = <TData>({
  table,
}: LastPageClickHandlerProps<TData>) =>
  table.setPageIndex(table.getPageCount() - 1);

const nextPageClickHandler = <TData>({
  table,
}: NextPageClickHandlerProps<TData>) => table.nextPage();

const previousPageClickHandler = <TData>({
  table,
}: PreviousPageClickHandlerProps<TData>) => table.previousPage();

const PaginationHandlers = <TData>({
  table,
}: PaginationHandlersProps<TData>): PaginationHandlersReturn => {
  return {
    handleFirstPageClick: () => firstPageClickHandler({ table }),
    handleLastPageClick: () => lastPageClickHandler({ table }),
    handleNextPageClick: () => nextPageClickHandler({ table }),
    handlePreviousPageClick: () => previousPageClickHandler({ table }),
  };
};

export { PaginationHandlers };
