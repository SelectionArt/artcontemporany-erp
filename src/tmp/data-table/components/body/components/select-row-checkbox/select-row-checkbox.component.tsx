"use client";
// Components
import { Checkbox } from "@/components/ui/checkbox";
// Hooks
import { useSelectRowCheckbox } from "./hooks/use-select-row-checkbox/use-select-row-checkbox.hook";
// Types
import type { SelectRowCheckboxProps } from "./types/select-row-checkbox.component.types";

const SelectRowCheckbox = <TData,>({
  disabled,
  row,
}: SelectRowCheckboxProps<TData>) => {
  const { isSelected, handleCheckedChange, t } = useSelectRowCheckbox({ row });
  return (
    <Checkbox
      checked={isSelected}
      disabled={disabled}
      onCheckedChange={handleCheckedChange}
      aria-label={t("selectRow")}
      aria-hidden={disabled}
    />
  );
};

export { SelectRowCheckbox };
