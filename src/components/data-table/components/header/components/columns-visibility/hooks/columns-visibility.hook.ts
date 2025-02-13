// Types
import type {
  ColumnsVisibilityHookProps,
  ColumnsVisibilityHookReturn,
} from "./types/columns-visibility.hook.types";
// Handlers
import { ColumnsVisibilityHandlers } from "../handlers/columns-visibility.handlers";

const ColumnsVisibilityHook = <TData>({
  table,
}: ColumnsVisibilityHookProps<TData>): ColumnsVisibilityHookReturn<TData> => {
  const hideableColumns = table
    .getAllColumns()
    .filter((column) => column.getCanHide());

  const { handleCheckedChange } = ColumnsVisibilityHandlers<TData>();

  return {
    handleCheckedChange,
    hideableColumns,
  };
};

export { ColumnsVisibilityHook };
