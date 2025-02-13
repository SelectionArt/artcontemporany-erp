// Constants
import constants from "./constants/page-indicator.constants";
// Types
import type { PageIndicatorProps } from "./types/page-indicator.component.types";

function PageIndicator<TData>({ table }: PageIndicatorProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  return (
    <div className="hidden w-[100px] items-center justify-center text-sm font-medium sm:flex">
      {constants.LABEL} {pageIndex + 1} {constants.SEPARATOR} {pageCount}
    </div>
  );
}

export { PageIndicator };
