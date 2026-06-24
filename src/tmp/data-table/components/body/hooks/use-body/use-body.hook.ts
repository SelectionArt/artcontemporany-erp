// Vendors
import { useTranslations } from "next-intl";
// Types
import type { UseBodyProps } from "./types/use-body.hook.types";

const useBody = <TData>({ isError, isLoading, table }: UseBodyProps<TData>) => {
  const t = useTranslations("root.components.dataTable.components.body");

  const columns = table.getVisibleLeafColumns();
  const headerGroups = table.getHeaderGroups();
  const rows = table.getRowModel().rows;

  const isEmpty = rows.length === 0;
  const showLoading = !!isLoading;
  const showError = !isLoading && !!isError;
  const showNoResults = !isLoading && !isError && isEmpty;
  const showResults = !isLoading && !isError && !isEmpty;

  return {
    columns,
    headerGroups,
    rows,
    showError,
    showLoading,
    showNoResults,
    showResults,
    t,
  };
};

export { useBody };
