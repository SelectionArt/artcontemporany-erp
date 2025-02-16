// Components
import { Checkbox } from "@/components/ui/checkbox";
// Types
import type { SelectRowCheckboxProps } from "./types/select-row-checkbox.component.types";

function SelectRowCheckbox<TData>({ row }: SelectRowCheckboxProps<TData>) {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Seleccionar fila"
    />
  );
}

export { SelectRowCheckbox };
