// Types
import type {
  MultipleSelectActionsHookProps,
  MultipleSelectActionsHookReturn,
} from "./types/multiple-select-actions.hook.types";

const MultipleSelectActionsHook = <TData>({
  table,
}: MultipleSelectActionsHookProps<TData>): MultipleSelectActionsHookReturn<TData> => {
  const selectedRows = table
    .getFilteredSelectedRowModel()
    .rows.map((row) => row.original);

  return {
    selectedRows,
  };
};

export { MultipleSelectActionsHook };
