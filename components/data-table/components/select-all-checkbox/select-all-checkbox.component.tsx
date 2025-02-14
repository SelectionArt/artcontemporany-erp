// Components
import { Checkbox } from "@/components/ui/checkbox";
// Types
import type { SelectAllCheckboxProps } from "./types/select-all-checkbox.component.types";

function SelectAllCheckbox<TData>({ table }: SelectAllCheckboxProps<TData>) {
  return (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Seleccionar todas las filas"
    />
  );
}

export { SelectAllCheckbox };
