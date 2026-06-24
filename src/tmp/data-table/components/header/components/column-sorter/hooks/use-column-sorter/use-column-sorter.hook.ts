// Vendors
import { useTranslations } from "next-intl";
// Handlers
import { ColumnSorterHandlers } from "../../handlers/column-sorter.handlers";
// Types
import type { UseColumnSorterProps } from "./types/use-column-sorter.hook.types";

const useColumnSorter = <TData>({ column }: UseColumnSorterProps<TData>) => {
  const t = useTranslations(
    "root.components.dataTable.components.columnSorter",
  );
  const canSort = column.getCanSort();
  const isSorted = column.getIsSorted();

  const { handleHide, handleSortAsc, handleSortDesc } = ColumnSorterHandlers({
    column,
  });

  return {
    canSort,
    isSorted,
    handleHide,
    handleSortAsc,
    handleSortDesc,
    t,
  };
};

export { useColumnSorter };
