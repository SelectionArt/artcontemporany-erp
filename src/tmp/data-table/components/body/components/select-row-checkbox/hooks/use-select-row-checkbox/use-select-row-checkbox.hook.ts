// Vendors
import { useTranslations } from "next-intl";
// Handlers
import { SelectRowCheckboxHandlers } from "../../handlers/select-row-checkbox.handlers";
// Types
import type { UseSelectRowCheckboxProps } from "./types/use-select-row-checkbox.hook.types";

const useSelectRowCheckbox = <TData>({
  row,
}: UseSelectRowCheckboxProps<TData>) => {
  const t = useTranslations(
    "root.components.dataTable.components.selectRowCheckbox",
  );
  const isSelected = row.getIsSelected();

  const { handleCheckedChange } = SelectRowCheckboxHandlers({ row });

  return {
    handleCheckedChange,
    isSelected,
    t,
  };
};

export { useSelectRowCheckbox };
