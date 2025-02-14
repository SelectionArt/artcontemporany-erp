// Types
import type {
  RowsPerPageHandlersProps,
  RowsPerPageHandlersReturn,
  ValueChangeHandlerProps,
} from "./types/rows-per-page.handlers.types";

const valueChangeHandler = <TData>({
  table,
  value,
}: ValueChangeHandlerProps<TData>): void => {
  table.setPageSize(Number(value));
};

const RowsPerPageHandlers = <TData>({
  table,
}: RowsPerPageHandlersProps<TData>): RowsPerPageHandlersReturn => {
  return {
    handleValueChange: (value) => valueChangeHandler({ table, value }),
  };
};

export { RowsPerPageHandlers };
