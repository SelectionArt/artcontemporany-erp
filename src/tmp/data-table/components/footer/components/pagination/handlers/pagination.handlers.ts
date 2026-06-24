// Types
import type {
  HandleFirstPageClickProps,
  HandleLastPageClickProps,
  HandleNextPageClickProps,
  HandlePreviousPageClickProps,
  PaginationHandlersProps,
  PaginationHandlersReturn,
} from "./types/pagination.handlers.types";

const handleFirstPageClick = <TData>({
  table,
}: HandleFirstPageClickProps<TData>) => table.setPageIndex(0);

const handleLastPageClick = <TData>({
  table,
}: HandleLastPageClickProps<TData>) =>
  table.setPageIndex(table.getPageCount() - 1);

const handleNextPageClick = <TData>({
  table,
}: HandleNextPageClickProps<TData>) => table.nextPage();

const handlePreviousPageClick = <TData>({
  table,
}: HandlePreviousPageClickProps<TData>) => table.previousPage();

const PaginationHandlers = <TData>({
  table,
}: PaginationHandlersProps<TData>): PaginationHandlersReturn => {
  return {
    handleFirstPageClick: () => handleFirstPageClick({ table }),
    handleLastPageClick: () => handleLastPageClick({ table }),
    handleNextPageClick: () => handleNextPageClick({ table }),
    handlePreviousPageClick: () => handlePreviousPageClick({ table }),
  };
};

export { PaginationHandlers };
