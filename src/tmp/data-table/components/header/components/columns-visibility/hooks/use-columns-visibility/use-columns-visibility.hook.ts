// Vendors
import { useTranslations } from "next-intl";
// Handlers
import { ColumnsVisibilityHandlers } from "../../handlers/columns-visibility.handlers";
// Types
import type { UseColumnsVisibilityProps } from "./types/use-columns-visibility.hook.types";

const useColumnsVisibility = <TData>({
  table,
}: UseColumnsVisibilityProps<TData>) => {
  const t = useTranslations(
    "root.components.dataTable.components.header.components.columnsVisibility",
  );

  const hideableColumns = table
    .getAllColumns()
    .filter((column) => column.getCanHide());

  const { handleCheckedChange } = ColumnsVisibilityHandlers<TData>();

  return {
    handleCheckedChange,
    hideableColumns,
    t,
  };
};

export { useColumnsVisibility };
