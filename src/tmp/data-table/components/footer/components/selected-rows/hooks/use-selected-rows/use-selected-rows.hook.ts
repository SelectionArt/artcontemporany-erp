// Vendors
import { useTranslations } from "next-intl";
// Types
import type { UseSelectedRowsProps } from "./types/use-selected-rows.hook.types";

const useSelectedRows = <TData>({ table }: UseSelectedRowsProps<TData>) => {
  const t = useTranslations(
    "root.components.dataTable.components.footer.components.selectedRows",
  );
  const selectedRows = table.getFilteredSelectedRowModel().rows.length;

  return {
    selectedRows,
    t,
  };
};

export { useSelectedRows };
