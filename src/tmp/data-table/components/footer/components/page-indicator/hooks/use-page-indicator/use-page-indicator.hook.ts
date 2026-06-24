// Vendors
import { useTranslations } from "next-intl";
// Types
import type { UsePageIndicatorProps } from "./types/use-page-indicator.hook.types";

const usePageIndicator = <TData>({ table }: UsePageIndicatorProps<TData>) => {
  const t = useTranslations(
    "root.components.dataTable.components.footer.components.pageIndicator",
  );

  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  return {
    pageCount,
    pageIndex,
    t,
  };
};

export { usePageIndicator };
