// Types
import type {
  HandleCheckedChangeProps,
  SelectAllCheckboxHandlersProps,
  SelectAllCheckboxHandlersReturn,
} from "./types/select-all-checkbox.handlers.types";

const handleCheckedChange = <TData>({
  checked,
  table,
}: HandleCheckedChangeProps<TData>) => {
  table.toggleAllPageRowsSelected(checked);
};

const SelectAllCheckboxHandlers = <TData>({
  table,
}: SelectAllCheckboxHandlersProps<TData>): SelectAllCheckboxHandlersReturn => {
  return {
    handleCheckedChange: (checked) => handleCheckedChange({ checked, table }),
  };
};

export { SelectAllCheckboxHandlers };
