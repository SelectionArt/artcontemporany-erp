// Types
import type {
  HandleCheckedChangeProps,
  SelectRowCheckboxHandlersProps,
  SelectRowCheckboxHandlersReturn,
} from "./types/select-row-checkbox.handlers.types";

const handleCheckedChange = <TData>({
  row,
  value,
}: HandleCheckedChangeProps<TData>) => {
  row.toggleSelected(value);
};

const SelectRowCheckboxHandlers = <TData>({
  row,
}: SelectRowCheckboxHandlersProps<TData>): SelectRowCheckboxHandlersReturn => {
  return {
    handleCheckedChange: (value) => handleCheckedChange({ row, value }),
  };
};

export { SelectRowCheckboxHandlers };
