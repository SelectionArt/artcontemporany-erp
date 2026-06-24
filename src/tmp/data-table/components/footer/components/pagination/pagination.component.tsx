"use client";
// Components
import { Button } from "@/components/ui/button";
// Hooks
import { usePagination } from "./hooks/use-pagination/use-pagination.hook";
// Icons
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
// Types
import type { PaginationProps } from "./types/pagination.component.types";

const Pagination = <TData,>({ table }: PaginationProps<TData>) => {
  const {
    disabledFirstPage,
    disabledLastPage,
    disabledNextPage,
    disabledPreviousPage,
    handleFirstPageClick,
    handleLastPageClick,
    handleNextPageClick,
    handlePreviousPageClick,
    t,
  } = usePagination({ table });

  return (
    <div className="flex items-center gap-2">
      <Button
        aria-label={t("firstPage")}
        className="hidden lg:flex"
        disabled={disabledFirstPage}
        onClick={handleFirstPageClick}
        size="icon"
        variant="outline"
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>
      <Button
        aria-label={t("previousPage")}
        disabled={disabledPreviousPage}
        onClick={handlePreviousPageClick}
        size="icon"
        variant="outline"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        aria-label={t("nextPage")}
        disabled={disabledNextPage}
        onClick={handleNextPageClick}
        size="icon"
        variant="outline"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button
        aria-label={t("lastPage")}
        className="hidden lg:flex"
        disabled={disabledLastPage}
        onClick={handleLastPageClick}
        size="icon"
        variant="outline"
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export { Pagination };
