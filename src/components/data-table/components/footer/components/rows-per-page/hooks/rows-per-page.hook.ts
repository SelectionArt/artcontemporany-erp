// Types
import type {
  RowsPerPageHookProps,
  RowsPerPageHookReturn,
} from "./types/rows-per-page.hook.types";
// Handlers
import { RowsPerPageHandlers } from "../handlers/rows-per-page.handlers";

const RowsPerPageHook = <TData>({
  table,
}: RowsPerPageHookProps<TData>): RowsPerPageHookReturn<TData> => {
  const pageSize = table.getState().pagination.pageSize.toString();

  const { handleValueChange } = RowsPerPageHandlers<TData>({ table });

  return {
    handleValueChange,
    pageSize,
  };
};

export { RowsPerPageHook };
