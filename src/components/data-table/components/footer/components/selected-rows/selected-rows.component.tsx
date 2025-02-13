// Constants
import constants from "./constants/selected-rows.constants";
// Types
import type { SelectedRowsProps } from "./types/selected-rows.component.types";

function SelectedRows<TData>({ table }: SelectedRowsProps<TData>) {
  const selectedRows = table.getFilteredSelectedRowModel().rows.length;
  const label =
    selectedRows === 1 ? constants.LABEL_SINGULAR : constants.LABEL_PLURAL;

  if (!selectedRows) {
    return null;
  }

  return (
    <div className="text-muted-foreground flex-1 text-sm">
      <span>
        {selectedRows} {label}
      </span>
    </div>
  );
}

export { SelectedRows };
