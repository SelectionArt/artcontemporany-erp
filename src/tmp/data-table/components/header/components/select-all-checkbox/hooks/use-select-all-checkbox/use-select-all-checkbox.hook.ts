// Vendors
import { useTranslations } from "next-intl";
// Handlers
import { SelectAllCheckboxHandlers } from "../../handlers/select-all-checkbox.handlers";
// Types
import type { UseSelectAllCheckboxProps } from "./types/use-select-all-checkbox.hook.types";

const useSelectAllCheckbox = <TData>({
  table,
}: UseSelectAllCheckboxProps<TData>) => {
  const t = useTranslations(
    "root.components.dataTable.components.selectAllCheckbox",
  );
  const isAllSelected = table.getIsAllPageRowsSelected();
  const isSomeSelected = table.getIsSomePageRowsSelected();

  const { handleCheckedChange } = SelectAllCheckboxHandlers({ table });

  return {
    handleCheckedChange,
    isAllSelected,
    isSomeSelected,
    t,
  };
};

export { useSelectAllCheckbox };
