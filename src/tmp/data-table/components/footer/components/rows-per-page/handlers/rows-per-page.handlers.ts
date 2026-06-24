// Types
import type {
  HandleValueChangeProps,
  RowsPerPageHandlersProps,
  RowsPerPageHandlersReturn,
} from "./types/rows-per-page.handlers.types";

const handleValueChange = <TData>({
  table,
  value,
}: HandleValueChangeProps<TData>) => {
  if (!value) {
    return;
  }
  table.setPageSize(Number(value));
};

const RowsPerPageHandlers = <TData>({
  table,
}: RowsPerPageHandlersProps<TData>): RowsPerPageHandlersReturn => {
  return {
    handleValueChange: (value) => handleValueChange({ table, value }),
  };
};

export { RowsPerPageHandlers };
