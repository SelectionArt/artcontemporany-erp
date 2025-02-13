// Types
import type {
  PaginationHookProps,
  PaginationHookReturn,
} from "./types/pagination.hook.types";
// Handlers
import { PaginationHandlers } from "../handlers/pagination.handlers";

const PaginationHook = <TData>({
  table,
}: PaginationHookProps<TData>): PaginationHookReturn<TData> => {
  const disabledFirstPage = !table.getCanPreviousPage();
  const disabledLastPage = !table.getCanNextPage();
  const disabledNextPage = !table.getCanNextPage();
  const disabledPreviousPage = !table.getCanPreviousPage();

  const {
    handleFirstPageClick,
    handleLastPageClick,
    handleNextPageClick,
    handlePreviousPageClick,
  } = PaginationHandlers<TData>({ table });

  return {
    disabledFirstPage,
    disabledLastPage,
    disabledNextPage,
    disabledPreviousPage,
    handleFirstPageClick,
    handleLastPageClick,
    handleNextPageClick,
    handlePreviousPageClick,
  };
};

export { PaginationHook };
