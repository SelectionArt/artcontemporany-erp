"use client";
// Components
import { Checkbox } from "@/components/ui/checkbox";
// Hooks
import { useSelectAllCheckbox } from "./hooks/use-select-all-checkbox/use-select-all-checkbox.hook";
// Types
import type { SelectAllCheckboxProps } from "./types/select-all-checkbox.component.types";

const SelectAllCheckbox = <TData,>({
  table,
}: SelectAllCheckboxProps<TData>) => {
  const { isAllSelected, isSomeSelected, handleCheckedChange, t } =
    useSelectAllCheckbox({ table });

  return (
    <Checkbox
      checked={isAllSelected}
      indeterminate={isSomeSelected && !isAllSelected}
      onCheckedChange={handleCheckedChange}
      aria-label={t("selectAll")}
    />
  );
};

export { SelectAllCheckbox };
