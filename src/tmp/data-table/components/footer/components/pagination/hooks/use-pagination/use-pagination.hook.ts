// Vendors
import { useTranslations } from "next-intl";
// Types
import type { UsePaginationProps } from "./types/use-pagination.hook.types";
// Handlers
import { PaginationHandlers } from "../../handlers/pagination.handlers";

const usePagination = <TData>({ table }: UsePaginationProps<TData>) => {
  const t = useTranslations(
    "root.components.dataTable.components.footer.components.pagination",
  );
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
    t,
  };
};

export { usePagination };
