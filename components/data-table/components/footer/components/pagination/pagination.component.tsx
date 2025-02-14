// Components
import { Button } from "@/components/ui/button";
// Constants
import constants from "./constants/pagination.constants";
// Hooks
import { PaginationHook } from "./hooks/pagination.hook";
// Icons
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
// Types
import type { PaginationProps } from "./types/pagination.component.types";

function Pagination<TData>({ table }: PaginationProps<TData>) {
  const {
    disabledFirstPage,
    disabledLastPage,
    disabledNextPage,
    disabledPreviousPage,
    handleFirstPageClick,
    handleLastPageClick,
    handleNextPageClick,
    handlePreviousPageClick,
  } = PaginationHook({ table });

  return (
    <div className="flex items-center gap-2">
      <Button
        {...{
          ...constants.FIRST_PAGE_BUTTON_PROPS,
          className: "hidden lg:flex",
          disabled: disabledFirstPage,
          onClick: handleFirstPageClick,
        }}
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>
      <Button
        {...{
          ...constants.PREVIOUS_PAGE_BUTTON_PROPS,
          disabled: disabledPreviousPage,
          onClick: handlePreviousPageClick,
        }}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        {...{
          ...constants.NEXT_PAGE_BUTTON_PROPS,
          disabled: disabledNextPage,
          onClick: handleNextPageClick,
        }}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button
        {...{
          ...constants.LAST_PAGE_BUTTON_PROPS,
          className: "hidden lg:flex",
          disabled: disabledLastPage,
          onClick: handleLastPageClick,
        }}
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

export { Pagination };
