// Types
import type { UseMultipleSelectActionsProps } from "./types/use-multiple-select-actions.hook.types";

const useMultipleSelectActions = <TData>({
  table,
}: UseMultipleSelectActionsProps<TData>) => {
  const selectedRows = table
    .getFilteredSelectedRowModel()
    .rows.map((row) => row.original);

  return {
    selectedRows,
  };
};

export { useMultipleSelectActions };
